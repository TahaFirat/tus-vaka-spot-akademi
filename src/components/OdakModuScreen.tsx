import React, { useEffect, useMemo, useState } from 'react';
import {
  BookOpen,
  Check,
  CheckCircle2,
  Clock,
  Flame,
  Layers,
  Pause,
  Play,
  RotateCcw,
  Save,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Zap,
} from 'lucide-react';
import {
  getBranchMeta,
  TUS_BRANCHES,
  TUS_CORE_TOPICS,
  TUS_SPECIALTY_TARGETS,
  TUS_SPOT_CARDS,
  TusBranchId,
} from '../data/tusMedicalRepository';
import {
  FREE_QUESTION_LIMIT,
  startNativeStudyLiveActivity,
  stopNativeStudyLiveActivity,
  triggerHaptic,
} from '../services/nativeBridge';
import {
  ActiveStudyTimerState,
  calculateOfficialStyleTusScores,
  getLocalDateString,
  TusStudyState,
} from '../services/studyStorage';

type OdakSubTab = 'kronometre' | 'konular' | 'tekrar' | 'puan';

interface OdakModuScreenProps {
  studyState: TusStudyState;
  isPro: boolean;
  isLight: boolean;
  totalSolvedCount: number;
  onUpdateStudyState: (updater: (prev: TusStudyState) => TusStudyState) => void;
  onNavigateStudy: (
    tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz',
    options?: {
      basket?: 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
      branchId?: 'ALL' | TusBranchId;
    }
  ) => void;
  onRecordSpotAnswer: (
    spotId: string,
    selectedTrue: boolean,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => void;
  onOpenPaywall: (reason?: string) => void;
}

function formatDurationClock(totalSec: number): string {
  const safe = Math.max(0, Math.floor(totalSec));
  const h = Math.floor(safe / 3600);
  const m = Math.floor((safe % 3600) / 60);
  const s = safe % 60;
  if (h > 0) {
    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function computeElapsedSec(timer: ActiveStudyTimerState, nowMs = Date.now()): number {
  if (!timer.running || !timer.startedAtMs) return timer.accumulatedSec;
  return timer.accumulatedSec + Math.max(0, Math.floor((nowMs - timer.startedAtMs) / 1000));
}

// Termal izolasyonlu sayaç yüzü: sadece kronometre akarken 1s görsel günceller
const ActiveTimerFace: React.FC<{
  timer: ActiveStudyTimerState;
  isLight: boolean;
}> = React.memo(({ timer, isLight }) => {
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    if (!timer.running) return;
    let id: number | null = null;
    const start = () => {
      if (id !== null || document.hidden) return;
      setNowMs(Date.now());
      id = window.setInterval(() => {
        if (!document.hidden) setNowMs(Date.now());
      }, 1000);
    };
    const stop = () => {
      if (id !== null) {
        window.clearInterval(id);
        id = null;
      }
    };
    const onVis = () => {
      if (document.hidden) stop();
      else start();
    };
    start();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [timer.running, timer.startedAtMs]);

  const elapsed = computeElapsedSec(timer, nowMs);
  const isCountdown = timer.mode !== 'stopwatch' && timer.targetSec > 0;
  const shown = isCountdown ? Math.max(0, timer.targetSec - elapsed) : elapsed;
  const finished = isCountdown && elapsed >= timer.targetSec;
  const pct =
    timer.targetSec > 0
      ? Math.min(100, Math.round((elapsed / timer.targetSec) * 100))
      : Math.min(100, Math.round((elapsed / 3600) * 100));

  return (
    <div className="text-center space-y-2 py-2">
      <div
        className={`text-4xl sm:text-5xl font-extrabold tabular-nums tracking-tight ${
          finished
            ? 'text-amber-500'
            : isLight
            ? 'text-slate-900'
            : 'text-white'
        }`}
      >
        {formatDurationClock(shown)}
      </div>

      <div className="max-w-xs mx-auto h-1.5 rounded-full bg-slate-500/15 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="text-[11px] font-bold text-slate-400">
        {finished
          ? 'Hedef süre tamamlandı • Kaydet’e dokun'
          : timer.running
          ? 'Kilit ekranında canlı takip aktif'
          : elapsed > 0
          ? `Beklemede (${formatDurationClock(elapsed)} birikti)`
          : isCountdown
          ? `${Math.round(timer.targetSec / 60)} dk odak seansına hazır`
          : 'Serbest TUS etüt sayacı'}
      </div>
    </div>
  );
});

export const OdakModuScreen: React.FC<OdakModuScreenProps> = React.memo(
  ({
    studyState,
    isPro,
    isLight,
    totalSolvedCount,
    onUpdateStudyState,
    onNavigateStudy,
    onRecordSpotAnswer,
    onOpenPaywall,
  }) => {
    const [subTab, setSubTab] = useState<OdakSubTab>('kronometre');
    const [topicSessionFilter, setTopicSessionFilter] = useState<'ALL' | 'TTBT' | 'KTBT'>('ALL');
    const [topicBranchFilter, setTopicBranchFilter] = useState<'ALL' | TusBranchId>('ALL');

    // Nöbet Molası 10'lu Hızlı Spot Sprint state
    const [sprintCards, setSprintCards] = useState<typeof TUS_SPOT_CARDS>([]);
    const [sprintIdx, setSprintIdx] = useState(0);
    const [sprintResult, setSprintResult] = useState<{ correct: number; wrong: number } | null>(null);
    const [sprintAnswered, setSprintAnswered] = useState<boolean | null>(null);

    // Offline TUS Puan Simülatörü state (100 TTBT + 100 KTBT)
    const [ttbtCorrect, setTtbtCorrect] = useState(64);
    const [ttbtWrong, setTtbtWrong] = useState(20);
    const [ktbtCorrect, setKtbtCorrect] = useState(68);
    const [ktbtWrong, setKtbtWrong] = useState(18);

    const cardBg = isLight
      ? 'bg-white border-slate-200/90 shadow-sm'
      : 'bg-[#0C1B24] border-white/10 shadow-md';

    const subCardBg = isLight
      ? 'bg-slate-50 border-slate-200/80'
      : 'bg-[#071117] border-white/8';

    const todayKey = getLocalDateString();
    const todayMinutes = Math.round((studyState.studySecondsByDate[todayKey] || 0) / 60);
    const timer = studyState.activeTimer;
    const selectedBranchLabel =
      timer.branchId === 'GENEL'
        ? 'Genel TUS'
        : getBranchMeta(timer.branchId).shortName;

    // 7 günlük çalışma barları
    const last7Days = useMemo(() => {
      const days: Array<{ key: string; label: string; mins: number }> = [];
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = getLocalDateString(d);
        const label = d.toLocaleDateString('tr-TR', { weekday: 'short' }).slice(0, 2);
        days.push({
          key,
          label,
          mins: Math.round((studyState.studySecondsByDate[key] || 0) / 60),
        });
      }
      return days;
    }, [studyState.studySecondsByDate]);

    const handleToggleTimer = () => {
      const now = Date.now();
      if (timer.running) {
        const total = computeElapsedSec(timer, now);
        triggerHaptic('light');
        stopNativeStudyLiveActivity();
        onUpdateStudyState((prev) => ({
          ...prev,
          activeTimer: {
            ...prev.activeTimer,
            running: false,
            startedAtMs: null,
            accumulatedSec: total,
          },
        }));
      } else {
        triggerHaptic('medium');
        const modeTitle =
          timer.mode === 'pomodoro25'
            ? '25 dk Pomodoro'
            : timer.mode === 'pomodoro50'
            ? '50 dk Blok'
            : 'TUS Kronometre';
        startNativeStudyLiveActivity({
          branchName: selectedBranchLabel,
          modeTitle,
          durationSeconds: timer.mode === 'stopwatch' ? 0 : timer.targetSec,
          elapsedSeconds: timer.accumulatedSec,
          todaySolved: studyState.todaySolvedCount,
          dailyTarget: studyState.dailyTarget,
        });
        onUpdateStudyState((prev) => ({
          ...prev,
          activeTimer: {
            ...prev.activeTimer,
            running: true,
            startedAtMs: now,
          },
        }));
      }
    };

    const handleSaveTimerSession = () => {
      const rawTotal = computeElapsedSec(timer, Date.now());
      const effectiveTotal =
        timer.mode !== 'stopwatch' && timer.targetSec > 0
          ? Math.min(rawTotal, timer.targetSec)
          : rawTotal;
      const saveDateKey = getLocalDateString();
      stopNativeStudyLiveActivity();
      if (effectiveTotal < 10) {
        triggerHaptic('light');
        onUpdateStudyState((prev) => ({
          ...prev,
          activeTimer: {
            ...prev.activeTimer,
            running: false,
            startedAtMs: null,
            accumulatedSec: 0,
          },
        }));
        return;
      }

      triggerHaptic('success');
      onUpdateStudyState((prev) => ({
        ...prev,
        studySecondsByDate: {
          ...prev.studySecondsByDate,
          [saveDateKey]: (prev.studySecondsByDate[saveDateKey] || 0) + effectiveTotal,
        },
        branchStudySeconds: {
          ...prev.branchStudySeconds,
          [timer.branchId]: (prev.branchStudySeconds[timer.branchId] || 0) + effectiveTotal,
        },
        activeTimer: {
          ...prev.activeTimer,
          running: false,
          startedAtMs: null,
          accumulatedSec: 0,
        },
      }));
    };

    const handleSelectTimerMode = (mode: ActiveStudyTimerState['mode']) => {
      if (timer.running) return;
      triggerHaptic('light');
      const targetSec =
        mode === 'pomodoro25' ? 25 * 60 : mode === 'pomodoro50' ? 50 * 60 : 0;
      onUpdateStudyState((prev) => ({
        ...prev,
        activeTimer: {
          ...prev.activeTimer,
          mode,
          targetSec,
          accumulatedSec: 0,
          startedAtMs: null,
        },
      }));
    };

    // Konular stats
    const visibleTopics = useMemo(() => {
      return TUS_CORE_TOPICS.filter((t) => {
        if (topicBranchFilter !== 'ALL' && t.branchId !== topicBranchFilter) return false;
        if (topicSessionFilter !== 'ALL') {
          if (getBranchMeta(t.branchId).session !== topicSessionFilter) return false;
        }
        return true;
      });
    }, [topicSessionFilter, topicBranchFilter]);

    const topicSummary = useMemo(() => {
      let totalTours = 0;
      let firstTourDone = 0;
      for (const t of TUS_CORE_TOPICS) {
        const v = studyState.topicTours[t.id] || 0;
        totalTours += v;
        if (v >= 1) firstTourDone += 1;
      }
      const pct = Math.round((totalTours / (TUS_CORE_TOPICS.length * 3)) * 100);
      return { totalTours, firstTourDone, pct };
    }, [studyState.topicTours]);

    // Leitner 4-Kutu SRS summary
    const srsSummary = useMemo(() => {
      let box1 = 0;
      let box2 = 0;
      let box3 = 0;
      let box4 = 0;

      for (const [, entry] of Object.entries(studyState.srsMap)) {
        if (entry.box === 1) box1++;
        else if (entry.box === 2) box2++;
        else if (entry.box === 3) box3++;
        else box4++;
      }

      let vakaWrong = 0;
      let legacyVakaWrong = 0;
      Object.entries(studyState.vakaAnswers).forEach(([id, r]) => {
        if (!r.isCorrect) {
          vakaWrong++;
          if (!studyState.srsMap[id]) legacyVakaWrong++;
        }
      });

      let spotWrong = 0;
      let legacySpotWrong = 0;
      Object.entries(studyState.spotAnswers).forEach(([id, r]) => {
        if (!r.isCorrect) {
          spotWrong++;
          if (!studyState.srsMap[id]) legacySpotWrong++;
        }
      });

      return {
        box1: box1 + legacyVakaWrong + legacySpotWrong,
        box2,
        box3,
        box4,
        vakaWrong,
        spotWrong,
      };
    }, [studyState.srsMap, studyState.vakaAnswers, studyState.spotAnswers]);

    const handleStartSpotSprint = () => {
      if (!isPro && totalSolvedCount >= FREE_QUESTION_LIMIT) {
        triggerHaptic('warning');
        onOpenPaywall(
          `Ücretsiz ${FREE_QUESTION_LIMIT} soru hakkınızı tamamladınız. Sınırsız hızlı sprint için PRO pakete geçin.`
        );
        return;
      }
      triggerHaptic('medium');
      const pool = isPro ? TUS_SPOT_CARDS : TUS_SPOT_CARDS.slice(0, FREE_QUESTION_LIMIT);
      const unseen = [...pool.filter((s) => !studyState.spotAnswers[s.id])].sort(
        () => Math.random() - 0.5
      );
      const seen = [...pool.filter((s) => Boolean(studyState.spotAnswers[s.id]))].sort(
        () => Math.random() - 0.5
      );
      const picked = [...unseen, ...seen].slice(0, 10);
      setSprintCards(picked);
      setSprintIdx(0);
      setSprintResult({ correct: 0, wrong: 0 });
      setSprintAnswered(null);
    };

    const handleAnswerSprint = (choice: boolean) => {
      const card = sprintCards[sprintIdx];
      if (!card || sprintAnswered !== null) return;
      if (!isPro && totalSolvedCount >= FREE_QUESTION_LIMIT && !studyState.spotAnswers[card.id]) {
        onOpenPaywall();
        return;
      }
      const isCorrect = choice === card.isTrue;
      triggerHaptic(isCorrect ? 'success' : 'error');
      setSprintAnswered(isCorrect);
      setSprintResult((r) =>
        r
          ? {
              correct: r.correct + (isCorrect ? 1 : 0),
              wrong: r.wrong + (isCorrect ? 0 : 1),
            }
          : { correct: isCorrect ? 1 : 0, wrong: isCorrect ? 0 : 1 }
      );
      onRecordSpotAnswer(card.id, choice, isCorrect, card.branchId);
    };

    const simScores = calculateOfficialStyleTusScores(
      ttbtCorrect,
      ttbtWrong,
      ktbtCorrect,
      ktbtWrong
    );
    const activeTargetSpec =
      TUS_SPECIALTY_TARGETS.find((s) => s.id === studyState.targetSpecialtyId) ||
      TUS_SPECIALTY_TARGETS[5];
    const simScoreDiff = Number((simScores.kTusScore - activeTargetSpec.targetScore).toFixed(1));

    const handleFillFromMyStats = () => {
      const vList = Object.values(studyState.vakaAnswers);
      const sList = Object.values(studyState.spotAnswers);
      const all = [...vList, ...sList];
      if (all.length === 0) return;
      const ttbtItems = all.filter((x) => getBranchMeta(x.branchId).session === 'TTBT');
      const ktbtItems = all.filter((x) => getBranchMeta(x.branchId).session === 'KTBT');
      const calcRatio = (arr: typeof all) => {
        if (arr.length === 0) return { c: 60, w: 22 };
        const acc = arr.filter((x) => x.isCorrect).length / arr.length;
        const c = Math.round(acc * 85);
        return { c, w: 85 - c };
      };
      const t = calcRatio(ttbtItems);
      const k = calcRatio(ktbtItems);
      triggerHaptic('light');
      setTtbtCorrect(t.c);
      setTtbtWrong(t.w);
      setKtbtCorrect(k.c);
      setKtbtWrong(k.w);
    };

    return (
      <div className="space-y-2.5">
        {/* Compact Segmented Sub-Tab Bar */}
        <div className={`rounded-2xl border p-1 grid grid-cols-4 gap-1 ${cardBg}`}>
          {(
            [
              { id: 'kronometre', label: 'Süre', icon: <Timer className="w-3.5 h-3.5" /> },
              { id: 'konular', label: 'Konular', icon: <Layers className="w-3.5 h-3.5" /> },
              { id: 'tekrar', label: 'Tekrar', icon: <Zap className="w-3.5 h-3.5" /> },
              { id: 'puan', label: 'Puan', icon: <TrendingUp className="w-3.5 h-3.5" /> },
            ] as const
          ).map((item) => {
            const active = subTab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setSubTab(item.id);
                }}
                className={`py-2 px-1 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1 transition whitespace-nowrap ${
                  active
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <span className="shrink-0">{item.icon}</span>
                <span className="truncate">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* 1. KRONOMETRE & POMODORO */}
        {subTab === 'kronometre' && (
          <div className="space-y-2.5">
            <div className={`rounded-3xl border p-4 space-y-3 ${cardBg}`}>
              {/* Mod Seçimi */}
              <div className="flex items-center justify-between gap-2">
                <div
                  className={`inline-flex rounded-xl p-0.5 ${
                    isLight ? 'bg-slate-100 border border-slate-200' : 'bg-[#071117] border border-white/10'
                  }`}
                >
                  {(
                    [
                      { id: 'stopwatch', label: 'Serbest' },
                      { id: 'pomodoro25', label: '25 dk' },
                      { id: 'pomodoro50', label: '50 dk' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      disabled={timer.running}
                      onClick={() => handleSelectTimerMode(m.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition disabled:opacity-60 ${
                        timer.mode === m.id
                          ? 'bg-emerald-600 text-white'
                          : isLight
                          ? 'text-slate-600'
                          : 'text-slate-400'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <span className="px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-500 text-[11px] font-extrabold truncate">
                  {selectedBranchLabel}
                </span>
              </div>

              {/* İzole Sayıcı Yüzü */}
              <ActiveTimerFace timer={timer} isLight={isLight} />

              {/* Ders Seçici */}
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
                <button
                  type="button"
                  disabled={timer.running}
                  onClick={() => {
                    triggerHaptic('light');
                    onUpdateStudyState((p) => ({
                      ...p,
                      activeTimer: { ...p.activeTimer, branchId: 'GENEL' },
                    }));
                  }}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border shrink-0 transition disabled:opacity-60 ${
                    timer.branchId === 'GENEL'
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : `${subCardBg} ${isLight ? 'text-slate-700' : 'text-slate-300'}`
                  }`}
                >
                  Genel TUS
                </button>
                {TUS_BRANCHES.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    disabled={timer.running}
                    onClick={() => {
                      triggerHaptic('light');
                      onUpdateStudyState((p) => ({
                        ...p,
                        activeTimer: { ...p.activeTimer, branchId: b.id },
                      }));
                    }}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border shrink-0 transition disabled:opacity-60 ${
                      timer.branchId === b.id
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : `${subCardBg} ${isLight ? 'text-slate-700' : 'text-slate-300'}`
                    }`}
                  >
                    {b.shortName}
                  </button>
                ))}
              </div>

              {/* Kontroller */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleToggleTimer}
                  className={`py-2.5 px-3 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                    timer.running
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-emerald-600 text-white shadow-sm'
                  }`}
                >
                  {timer.running ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  <span>{timer.running ? 'Duraklat' : 'Başlat'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveTimerSession}
                  className={`py-2.5 px-3 rounded-2xl border font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
                      : 'bg-[#071117] hover:bg-white/5 border-white/15 text-slate-100'
                  }`}
                >
                  <Save className="w-4 h-4 text-emerald-500" />
                  <span>Kaydet & Sıfırla</span>
                </button>
              </div>
            </div>

            {/* Bugün Özet + 7 Günlük Mini Grafik */}
            <div className="grid grid-cols-2 gap-2">
              <div className={`rounded-2xl border p-3 ${cardBg}`}>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-slate-400">
                  <span>Bugün Etüt</span>
                  <Clock className="w-3.5 h-3.5 text-emerald-500" />
                </div>
                <div className="text-lg font-extrabold text-emerald-500 tabular-nums mt-0.5">
                  {todayMinutes} <span className="text-xs font-semibold text-slate-400">/ {studyState.dailyGoalMinutes} dk</span>
                </div>
              </div>

              <div className={`rounded-2xl border p-3 ${cardBg}`}>
                <div className="flex items-center justify-between text-[10px] font-bold uppercase text-slate-400">
                  <span>Günlük Hedef</span>
                  <Flame className="w-3.5 h-3.5 text-amber-500" />
                </div>
                <div className="text-lg font-extrabold text-amber-500 tabular-nums mt-0.5">
                  {studyState.todaySolvedCount}{' '}
                  <span className="text-xs font-semibold text-slate-400">/ {studyState.dailyTarget} soru</span>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border p-3 space-y-2 ${cardBg}`}>
              <div className="flex items-center justify-between text-xs font-extrabold">
                <span>Son 7 Günlük Etüt (dk)</span>
                <button
                  type="button"
                  onClick={() => onNavigateStudy('vaka', { basket: 'unsolved' })}
                  className="text-emerald-500 font-extrabold text-[11px]"
                >
                  Yeni Vaka Çöz →
                </button>
              </div>
              <div className="grid grid-cols-7 gap-1.5 items-end h-16 pt-1">
                {last7Days.map((d) => {
                  const pct = Math.max(10, Math.min(100, Math.round((d.mins / Math.max(30, studyState.dailyGoalMinutes)) * 100)));
                  const isToday = d.key === todayKey;
                  return (
                    <div key={d.key} className="flex flex-col items-center gap-1 h-full justify-end">
                      <div className="text-[9px] font-bold text-slate-400 tabular-nums">{d.mins || ''}</div>
                      <div className="w-full max-w-[24px] flex-1 flex items-end">
                        <div
                          className={`w-full rounded-t-md ${
                            isToday ? 'bg-emerald-500' : d.mins > 0 ? 'bg-teal-500/50' : 'bg-slate-500/15'
                          }`}
                          style={{ height: `${pct}%` }}
                        />
                      </div>
                      <div className="text-[10px] font-bold text-slate-400">{d.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 2. KONULAR & 3-TUR TAKİBİ */}
        {subTab === 'konular' && (
          <div className="space-y-2.5">
            <div className={`rounded-2xl border p-3.5 space-y-2 ${cardBg}`}>
              <div className="flex items-center justify-between gap-2 text-xs font-extrabold">
                <span className="flex items-center gap-1.5 min-w-0 truncate">
                  <BookOpen className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span className="truncate">55 Konu • 3 Tur</span>
                </span>
                <span className="text-emerald-500 tabular-nums shrink-0">
                  {topicSummary.firstTourDone}/55 • %{topicSummary.pct}
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-500/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                  style={{ width: `${topicSummary.pct}%` }}
                />
              </div>

              <div className="flex items-center gap-1.5 pt-1 overflow-x-auto no-scrollbar">
                {(['ALL', 'TTBT', 'KTBT'] as const).map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setTopicSessionFilter(s);
                      setTopicBranchFilter('ALL');
                    }}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold border shrink-0 ${
                      topicSessionFilter === s
                        ? 'bg-emerald-600 border-emerald-500 text-white'
                        : `${subCardBg} ${isLight ? 'text-slate-600' : 'text-slate-300'}`
                    }`}
                  >
                    {s === 'ALL' ? 'Tüm Dersler' : s}
                  </button>
                ))}
                {TUS_BRANCHES.filter((b) => topicSessionFilter === 'ALL' || b.session === topicSessionFilter).map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => setTopicBranchFilter((cur) => (cur === b.id ? 'ALL' : b.id))}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border shrink-0 ${
                      topicBranchFilter === b.id
                        ? 'bg-teal-600 border-teal-500 text-white'
                        : `${subCardBg} ${isLight ? 'text-slate-600' : 'text-slate-300'}`
                    }`}
                  >
                    {b.shortName}
                  </button>
                ))}
              </div>
            </div>

            <div className={`rounded-2xl border divide-y divide-slate-500/10 ${cardBg}`}>
              {visibleTopics.map((topic) => {
                const tours = studyState.topicTours[topic.id] || 0;
                const branch = getBranchMeta(topic.branchId);
                return (
                  <div
                    key={topic.id}
                    className="px-3 py-2.5 flex items-center justify-between gap-2"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-extrabold text-emerald-500 shrink-0">
                          {branch.shortName}
                        </span>
                        {topic.weight === 'Çok Yüksek' && (
                          <span className="px-1 py-0.2 rounded text-[9.5px] font-extrabold bg-amber-500/15 text-amber-500 shrink-0">
                            ★
                          </span>
                        )}
                      </div>
                      <div className="text-xs font-bold truncate">{topic.title}</div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        triggerHaptic('selection');
                        onUpdateStudyState((prev) => ({
                          ...prev,
                          topicTours: {
                            ...prev.topicTours,
                            [topic.id]: ((prev.topicTours[topic.id] || 0) + 1) % 4,
                          },
                        }));
                      }}
                      className={`px-2.5 py-1 rounded-xl border text-[11px] font-extrabold shrink-0 transition whitespace-nowrap ${
                        tours >= 3
                          ? 'bg-emerald-600 border-emerald-500 text-white'
                          : tours === 2
                          ? 'bg-teal-500/20 border-teal-500/40 text-teal-400'
                          : tours === 1
                          ? 'bg-amber-500/15 border-amber-500/35 text-amber-500'
                          : `${subCardBg} text-slate-400`
                      }`}
                    >
                      {tours === 0 ? '0 Tur' : tours >= 3 ? '3. Tur ✓' : `${tours}. Tur`}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 3. ARALIKLI TEKRAR KUTULARI & NÖBET MOLASI SPRİNTİ */}
        {subTab === 'tekrar' && (
          <div className="space-y-2.5">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { label: 'Kutu 1 • Bugün', count: srsSummary.box1, tone: 'text-rose-500' },
                { label: 'Kutu 2 • 2 Gün', count: srsSummary.box2, tone: 'text-amber-500' },
                { label: 'Kutu 3 • 6 Gün', count: srsSummary.box3, tone: 'text-teal-500' },
                { label: 'Kutu 4 • Kalıcı', count: srsSummary.box4, tone: 'text-emerald-500' },
              ].map((b) => (
                <div key={b.label} className={`rounded-2xl border p-3 text-center ${cardBg}`}>
                  <div className="text-[10px] font-bold text-slate-400 uppercase">{b.label}</div>
                  <div className={`text-xl font-extrabold tabular-nums mt-0.5 ${b.tone}`}>
                    {b.count}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={srsSummary.vakaWrong === 0}
                onClick={() => onNavigateStudy('vaka', { basket: 'wrong', branchId: 'ALL' })}
                className="py-2.5 px-3 rounded-2xl bg-rose-600 hover:bg-rose-500 disabled:opacity-45 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Vaka Yanlış ({srsSummary.vakaWrong})</span>
              </button>

              <button
                type="button"
                disabled={srsSummary.spotWrong === 0}
                onClick={() => onNavigateStudy('spot', { basket: 'wrong', branchId: 'ALL' })}
                className="py-2.5 px-3 rounded-2xl bg-amber-500 hover:bg-amber-400 disabled:opacity-45 text-slate-950 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <RotateCcw className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">Spot Yanlış ({srsSummary.spotWrong})</span>
              </button>
            </div>

            <button
              type="button"
              onClick={handleStartSpotSprint}
              className="w-full py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-between gap-2 shadow-xs"
            >
              <span className="flex items-center gap-2">
                <Zap className="w-4 h-4 shrink-0" />
                <span>Nöbet Molası: 10 Hızlı Spot</span>
              </span>
              <Sparkles className="w-4 h-4 shrink-0" />
            </button>

            {/* In-place 10-Spot Sprint Runner */}
            {sprintCards.length > 0 && (
              <div className={`rounded-2xl border p-4 space-y-3 ${cardBg}`}>
                {sprintIdx >= sprintCards.length ? (
                  <div className="text-center space-y-2 py-2">
                    <CheckCircle2 className="w-8 h-8 text-emerald-500 mx-auto" />
                    <div className="text-sm font-extrabold">10 Spot Sprint Tamamlandı</div>
                    <div className="text-xs font-bold text-slate-400">
                      {sprintResult?.correct || 0} Doğru • {sprintResult?.wrong || 0} Yanlış
                    </div>
                    <button
                      type="button"
                      onClick={handleStartSpotSprint}
                      className="px-4 py-2 rounded-xl bg-emerald-600 text-white text-xs font-extrabold"
                    >
                      Yeni 10 Spot Başlat
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="flex items-center justify-between text-xs font-extrabold">
                      <span className="text-emerald-500">
                        {sprintCards[sprintIdx].branchName}
                      </span>
                      <span className="tabular-nums text-slate-400">
                        {sprintIdx + 1}/10
                      </span>
                    </div>
                    <div className={`rounded-xl border p-3 text-xs sm:text-sm font-semibold leading-relaxed ${subCardBg}`}>
                      “{sprintCards[sprintIdx].statement}”
                    </div>
                    {sprintAnswered === null ? (
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => handleAnswerSprint(true)}
                          className="py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center gap-1"
                        >
                          <Check className="w-4 h-4" /> DOĞRU
                        </button>
                        <button
                          type="button"
                          onClick={() => handleAnswerSprint(false)}
                          className="py-2.5 rounded-xl bg-rose-600 text-white text-xs font-extrabold"
                        >
                          YANLIŞ
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <div className={`text-xs font-extrabold ${sprintAnswered ? 'text-emerald-500' : 'text-rose-500'}`}>
                          {sprintAnswered ? '✓ Doğru' : `✗ Doğrusu: ${sprintCards[sprintIdx].correctMedicalFact}`}
                        </div>
                        <button
                          type="button"
                          onClick={() => {
                            setSprintAnswered(null);
                            setSprintIdx((i) => i + 1);
                          }}
                          className="w-full py-2 rounded-xl bg-emerald-600 text-white text-xs font-extrabold"
                        >
                          Sonraki Spot →
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        )}

        {/* 4. OFFLINE TUS PUAN SİMÜLATÖRÜ & KİLİT EKRANI WIDGET ÖNİZLEME */}
        {subTab === 'puan' && (
          <div className="space-y-2.5">
            <div className={`rounded-2xl border p-3.5 space-y-3 ${cardBg}`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-xs font-extrabold">
                  <Target className="w-4 h-4 text-emerald-500" />
                  <span>TUS Puan & Dal Simülatörü</span>
                </div>
                <button
                  type="button"
                  onClick={handleFillFromMyStats}
                  className="text-[11px] font-bold text-emerald-500 hover:underline"
                >
                  Verilerimden Doldur
                </button>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className={`rounded-xl border p-2.5 space-y-1.5 ${subCardBg}`}>
                  <div className="flex items-center justify-between text-[11px] font-extrabold text-emerald-500">
                    <span>TTBT (100)</span>
                    <span>{simScores.ttbtNet} Net</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <label className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold">Doğru</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={ttbtCorrect}
                        onChange={(e) => {
                          const nextC = Math.max(0, Math.min(100, Number(e.target.value) || 0));
                          setTtbtCorrect(nextC);
                          setTtbtWrong((w) => Math.min(w, 100 - nextC));
                        }}
                        className={`w-full rounded-lg border px-2 py-1 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                    <label className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold">Yanlış</span>
                      <input
                        type="number"
                        min={0}
                        max={100 - ttbtCorrect}
                        value={ttbtWrong}
                        onChange={(e) => setTtbtWrong(Math.max(0, Math.min(100 - ttbtCorrect, Number(e.target.value) || 0)))}
                        className={`w-full rounded-lg border px-2 py-1 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                  </div>
                </div>

                <div className={`rounded-xl border p-2.5 space-y-1.5 ${subCardBg}`}>
                  <div className="flex items-center justify-between text-[11px] font-extrabold text-cyan-500">
                    <span>KTBT (100)</span>
                    <span>{simScores.ktbtNet} Net</span>
                  </div>
                  <div className="grid grid-cols-2 gap-1.5 text-xs">
                    <label className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold">Doğru</span>
                      <input
                        type="number"
                        min={0}
                        max={100}
                        value={ktbtCorrect}
                        onChange={(e) => {
                          const nextC = Math.max(0, Math.min(100, Number(e.target.value) || 0));
                          setKtbtCorrect(nextC);
                          setKtbtWrong((w) => Math.min(w, 100 - nextC));
                        }}
                        className={`w-full rounded-lg border px-2 py-1 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                    <label className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold">Yanlış</span>
                      <input
                        type="number"
                        min={0}
                        max={100 - ktbtCorrect}
                        value={ktbtWrong}
                        onChange={(e) => setKtbtWrong(Math.max(0, Math.min(100 - ktbtCorrect, Number(e.target.value) || 0)))}
                        className={`w-full rounded-lg border px-2 py-1 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className={`rounded-xl border p-2.5 ${subCardBg}`}>
                  <div className="text-[10px] font-bold text-slate-400">TAHMİNİ K-TUS</div>
                  <div className="text-xl font-extrabold text-emerald-500 tabular-nums">{simScores.kTusScore}</div>
                </div>
                <div className={`rounded-xl border p-2.5 ${subCardBg}`}>
                  <div className="text-[10px] font-bold text-slate-400">TAHMİNİ T-TUS</div>
                  <div className="text-xl font-extrabold text-teal-500 tabular-nums">{simScores.tTusScore}</div>
                </div>
              </div>

              {/* Hedef Dal Seçimi */}
              <div className="space-y-1.5 pt-1">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold shrink-0">Hedef Dal:</span>
                  <select
                    value={activeTargetSpec.id}
                    onChange={(e) => {
                      triggerHaptic('light');
                      onUpdateStudyState((p) => ({ ...p, targetSpecialtyId: e.target.value }));
                    }}
                    aria-label="Hedef Uzmanlık Dalı"
                    className={`min-w-0 flex-1 rounded-xl border px-2.5 py-1 text-xs font-bold outline-none ${subCardBg}`}
                  >
                    {TUS_SPECIALTY_TARGETS.map((sp) => (
                      <option key={sp.id} value={sp.id}>
                        {sp.name} (~{sp.targetScore})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-400">Hedef Bandı: {activeTargetSpec.targetScore} Puan</span>
                  <span className={simScoreDiff >= 0 ? 'text-emerald-500' : 'text-amber-500'}>
                    {simScoreDiff >= 0
                      ? `+${simScoreDiff} puan üstündesin ✓`
                      : `${Math.abs(simScoreDiff)} puan kaldı`}
                  </span>
                </div>
              </div>
            </div>

            {/* Kilit Ekranı & Bildirim Widget Rehberi */}
            <div className={`rounded-2xl border p-3.5 space-y-2 ${cardBg}`}>
              <div className="flex items-center gap-1.5 text-xs font-extrabold">
                <Smartphone className="w-4 h-4 text-emerald-500" />
                <span>iPhone Kilit Ekranı & Canlı Bildirim Widgetları</span>
              </div>
              <div className={`rounded-xl border p-2.5 text-[11px] font-semibold space-y-1 ${subCardBg}`}>
                <div>1. Kilit ekranına basılı tut → <strong>Özelleştir</strong> → <strong>TUS Akademi</strong> widgetını ekle.</div>
                <div>2. Kronometre başlattığında Kilit Ekranı & Bildirim Çubuğu Canlı Etkinliği otomatik açılır.</div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
);
