import React, { useEffect, useMemo, useState } from 'react';
import {
  BarChart3,
  BookOpen,
  Clock,
  Flame,
  HelpCircle,
  Layers,
  Pause,
  Play,
  Save,
  Smartphone,
  Target,
  Timer,
} from 'lucide-react';
import {
  getBranchMeta,
  TUS_BRANCHES,
  TUS_CORE_TOPICS,
  TUS_SPECIALTY_TARGETS,
  TusBranchId,
} from '../data/tusMedicalRepository';
import {
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
import { TusDynamicCountdownCard } from './TusCountdownTimer';

export type OdakSubTab = 'kronometre' | 'konular' | 'analiz' | 'hedef';

interface OdakModuScreenProps {
  studyState: TusStudyState;
  isLight: boolean;
  activeSubTab?: OdakSubTab;
  onChangeSubTab?: (tab: OdakSubTab) => void;
  onUpdateStudyState: (updater: (prev: TusStudyState) => TusStudyState) => void;
  onOpenGuide?: (tab?: 'puan' | 'dagilim' | 'sistem') => void;
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

function formatStudyHoursShort(seconds: number): string {
  const mins = Math.round(seconds / 60);
  if (mins < 60) return `${mins} dk`;
  const h = Math.floor(mins / 60);
  const rem = mins % 60;
  return rem > 0 ? `${h} sa ${rem} dk` : `${h} sa`;
}

function computeElapsedSec(timer: ActiveStudyTimerState, nowMs = Date.now()): number {
  if (!timer.running || !timer.startedAtMs) return timer.accumulatedSec;
  return timer.accumulatedSec + Math.max(0, Math.floor((nowMs - timer.startedAtMs) / 1000));
}

// Termal izolasyonlu sayaç yüzü: yalnızca kronometre çalışırken 1sn günceller, ekran kapanınca durur
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
    <div className="text-center space-y-3 py-4">
      <div
        className={`text-5xl sm:text-6xl font-extrabold tabular-nums tracking-tight ${
          finished
            ? 'text-amber-500'
            : isLight
            ? 'text-slate-900'
            : 'text-white'
        }`}
      >
        {formatDurationClock(shown)}
      </div>

      <div className="max-w-xs mx-auto h-2 rounded-full bg-slate-500/15 overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="text-[11.5px] font-bold text-slate-400">
        {finished
          ? 'Etüt bloğu tamamlandı • Kaydet’e dokun'
          : timer.running
          ? 'Kilit Ekranı Canlı Etkinliği aktif'
          : elapsed > 0
          ? `Duraklatıldı • ${formatDurationClock(elapsed)}`
          : isCountdown
          ? `${Math.round(timer.targetSec / 60)} dk saf odak bloğu`
          : 'Serbest TUS ders sayacı'}
      </div>
    </div>
  );
});

export const OdakModuScreen: React.FC<OdakModuScreenProps> = React.memo(
  ({
    studyState,
    isLight,
    activeSubTab,
    onChangeSubTab,
    onUpdateStudyState,
    onOpenGuide,
  }) => {
    const [internalTab, setInternalTab] = useState<OdakSubTab>('kronometre');
    const subTab = activeSubTab ?? internalTab;
    const setSubTab = (next: OdakSubTab) => {
      setInternalTab(next);
      onChangeSubTab?.(next);
    };

    const [topicSessionFilter, setTopicSessionFilter] = useState<'ALL' | 'TTBT' | 'KTBT'>('ALL');
    const [topicBranchFilter, setTopicBranchFilter] = useState<'ALL' | TusBranchId>('ALL');

    // TUS Net -> Puan Hedef Planlayıcı (100 Temel + 100 Klinik)
    const [ttbtCorrect, setTtbtCorrect] = useState(55);
    const [ttbtWrong, setTtbtWrong] = useState(20);
    const [ktbtCorrect, setKtbtCorrect] = useState(60);
    const [ktbtWrong, setKtbtWrong] = useState(16);
    const [hasPenalty, setHasPenalty] = useState(false);

    const cardBg = isLight
      ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
      : 'bg-[#121826] border-white/8 shadow-md';

    const subCardBg = isLight
      ? 'bg-slate-50 border-slate-200/80'
      : 'bg-white/[0.04] border-white/8';

    const todayKey = getLocalDateString();
    const todayMinutes = Math.round((studyState.studySecondsByDate[todayKey] || 0) / 60);
    const dailyGoalPct = Math.min(
      100,
      Math.round((todayMinutes / Math.max(30, studyState.dailyGoalMinutes)) * 100)
    );
    const timer = studyState.activeTimer;
    const selectedBranchLabel =
      timer.branchId === 'GENEL'
        ? 'Genel Etüt'
        : getBranchMeta(timer.branchId).shortName;

    const last7Days = useMemo(() => {
      const days: Array<{ key: string; label: string; mins: number }> = [];
      let weekTotalMins = 0;
      for (let i = 6; i >= 0; i--) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        const key = getLocalDateString(d);
        const label = d.toLocaleDateString('tr-TR', { weekday: 'short' }).slice(0, 2);
        const mins = Math.round((studyState.studySecondsByDate[key] || 0) / 60);
        weekTotalMins += mins;
        days.push({ key, label, mins });
      }
      return { days, weekTotalMins };
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
            : timer.mode === 'pomodoro90'
            ? '90 dk Derin Blok'
            : 'Serbest Etüt';
        startNativeStudyLiveActivity({
          branchName: selectedBranchLabel,
          modeTitle,
          durationSeconds: timer.mode === 'stopwatch' ? 0 : timer.targetSec,
          elapsedSeconds: timer.accumulatedSec,
          todaySolved: todayMinutes,
          dailyTarget: studyState.dailyGoalMinutes,
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
        mode === 'pomodoro25'
          ? 25 * 60
          : mode === 'pomodoro50'
          ? 50 * 60
          : mode === 'pomodoro90'
          ? 90 * 60
          : 0;
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
      return { firstTourDone, pct };
    }, [studyState.topicTours]);

    const simScores = calculateOfficialStyleTusScores(
      ttbtCorrect,
      ttbtWrong,
      ktbtCorrect,
      ktbtWrong,
      hasPenalty
    );
    const activeTargetSpec =
      TUS_SPECIALTY_TARGETS.find((s) => s.id === studyState.targetSpecialtyId) ||
      TUS_SPECIALTY_TARGETS[5];
    const simScoreDiff = Number((simScores.kTusScore - activeTargetSpec.targetScore).toFixed(1));

    return (
      <div className="space-y-3">
        {/* 1. SAF KRONOMETRE & POMODORO (Alt Sabit Bar Üzerinden Sekme Geçişi — Sıfır Tekrar) */}
        {subTab === 'kronometre' && (
          <div className="space-y-3">
            <div className={`rounded-3xl border p-4 sm:p-5 space-y-3.5 ${cardBg}`}>
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <div
                  className={`inline-flex rounded-xl p-0.5 ${
                    isLight
                      ? 'bg-slate-100 border border-slate-200'
                      : 'bg-[#071117] border border-white/10'
                  }`}
                >
                  {(
                    [
                      { id: 'stopwatch', label: 'Serbest' },
                      { id: 'pomodoro25', label: '25 dk' },
                      { id: 'pomodoro50', label: '50 dk' },
                      { id: 'pomodoro90', label: '90 dk' },
                    ] as const
                  ).map((m) => (
                    <button
                      key={m.id}
                      type="button"
                      disabled={timer.running}
                      onClick={() => handleSelectTimerMode(m.id)}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition disabled:opacity-60 whitespace-nowrap ${
                        timer.mode === m.id
                          ? 'bg-teal-600 text-white'
                          : isLight
                          ? 'text-slate-600'
                          : 'text-slate-400'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>

                <span className="px-2.5 py-1 rounded-xl bg-teal-500/15 text-teal-500 text-[11px] font-extrabold truncate">
                  {selectedBranchLabel}
                </span>
              </div>

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
                      ? 'bg-teal-600 border-teal-500 text-white'
                      : `${subCardBg} ${isLight ? 'text-slate-700' : 'text-slate-300'}`
                  }`}
                >
                  Genel Etüt
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
                        ? 'bg-teal-600 border-teal-500 text-white'
                        : `${subCardBg} ${isLight ? 'text-slate-700' : 'text-slate-300'}`
                    }`}
                  >
                    {b.shortName}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleToggleTimer}
                  className={`py-3 px-3 rounded-2xl font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                    timer.running
                      ? 'bg-amber-500 text-slate-950'
                      : 'bg-teal-600 hover:bg-teal-500 text-white shadow-sm'
                  }`}
                >
                  {timer.running ? (
                    <Pause className="w-4 h-4" />
                  ) : (
                    <Play className="w-4 h-4 fill-current" />
                  )}
                  <span>{timer.running ? 'Duraklat' : 'Etüdü Başlat'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSaveTimerSession}
                  className={`py-3 px-3 rounded-2xl border font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                    isLight
                      ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
                      : 'bg-[#071117] hover:bg-white/5 border-white/15 text-slate-100'
                  }`}
                >
                  <Save className="w-4 h-4 text-teal-500" />
                  <span>Kaydet</span>
                </button>
              </div>
            </div>

            {/* Günlük Etüt Dakika Hedefi & Seri (Sıfır Soru İfadesi) */}
            <div className={`rounded-2xl border p-3.5 space-y-2 ${cardBg}`}>
              <div className="flex items-center justify-between text-xs font-extrabold">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-teal-500" />
                  <span>
                    Bugün Etüt: {todayMinutes} / {studyState.dailyGoalMinutes} dk
                  </span>
                </span>
                <span className="inline-flex items-center gap-1 text-amber-500">
                  <Flame className="w-3.5 h-3.5 fill-amber-500" />
                  <span>{studyState.streakDays} Gün</span>
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-500/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${dailyGoalPct}%` }}
                />
              </div>
            </div>
          </div>
        )}

        {/* 2. 55 KONU & 3-TUR DERS TAKİBİ */}
        {subTab === 'konular' && (
          <div className="space-y-2.5">
            <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardBg}`}>
              <div className="flex items-center justify-between gap-2 text-xs font-extrabold">
                <span className="flex items-center gap-1.5 min-w-0 truncate">
                  <BookOpen className="w-4 h-4 text-teal-500 shrink-0" />
                  <span className="truncate">11 Ders • 55 Çekirdek Konu</span>
                </span>
                <span className="text-teal-500 tabular-nums shrink-0">
                  {topicSummary.firstTourDone}/55 • %{topicSummary.pct}
                </span>
              </div>
              <div className="h-2 rounded-full bg-slate-500/15 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-teal-500 to-emerald-400 transition-all duration-300"
                  style={{ width: `${topicSummary.pct}%` }}
                />
              </div>

              <div className="flex items-center gap-1.5 pt-0.5 overflow-x-auto no-scrollbar">
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
                        ? 'bg-teal-600 border-teal-500 text-white'
                        : `${subCardBg} ${isLight ? 'text-slate-600' : 'text-slate-300'}`
                    }`}
                  >
                    {s === 'ALL' ? 'Tüm Dersler' : s === 'TTBT' ? 'Temel' : 'Klinik'}
                  </button>
                ))}
                {TUS_BRANCHES.filter(
                  (b) => topicSessionFilter === 'ALL' || b.session === topicSessionFilter
                ).map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() =>
                      setTopicBranchFilter((cur) => (cur === b.id ? 'ALL' : b.id))
                    }
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold border shrink-0 ${
                      topicBranchFilter === b.id
                        ? 'bg-emerald-600 border-emerald-500 text-white'
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
                        <span className="text-[10px] font-extrabold text-teal-500 shrink-0">
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

        {/* 3. SAF ETÜT SÜRE ANALİZİ (7 GÜN & DERS SAATLERİ) */}
        {subTab === 'analiz' && (
          <div className="space-y-2.5">
            <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardBg}`}>
              <div className="flex items-center justify-between gap-2 text-xs font-extrabold">
                <span>Günlük Etüt Hedefi</span>
                <span className="text-teal-500 tabular-nums">
                  Son 7 Gün: {formatStudyHoursShort(last7Days.weekTotalMins * 60)}
                </span>
              </div>

              <div className="grid grid-cols-4 gap-1.5">
                {[120, 180, 240, 360].map((mins) => (
                  <button
                    key={mins}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      onUpdateStudyState((p) => ({ ...p, dailyGoalMinutes: mins }));
                    }}
                    className={`py-1.5 rounded-xl border text-xs font-extrabold transition ${
                      studyState.dailyGoalMinutes === mins
                        ? 'bg-teal-600 border-teal-500 text-white'
                        : `${subCardBg} text-slate-400`
                    }`}
                  >
                    {mins / 60} Saat
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1.5 items-end h-20 pt-2">
                {last7Days.days.map((d) => {
                  const pct = Math.max(
                    10,
                    Math.min(
                      100,
                      Math.round(
                        (d.mins / Math.max(30, studyState.dailyGoalMinutes)) * 100
                      )
                    )
                  );
                  const isToday = d.key === todayKey;
                  return (
                    <div
                      key={d.key}
                      className="flex flex-col items-center gap-1 h-full justify-end"
                    >
                      <div className="text-[9px] font-bold text-slate-400 tabular-nums">
                        {d.mins || ''}
                      </div>
                      <div className="w-full max-w-[24px] flex-1 flex items-end">
                        <div
                          className={`w-full rounded-t-md ${
                            isToday
                              ? 'bg-teal-500'
                              : d.mins > 0
                              ? 'bg-emerald-500/45'
                              : 'bg-slate-500/15'
                          }`}
                          style={{ height: `${pct}%` }}
                        />
                      </div>
                      <div className="text-[10px] font-bold text-slate-400">
                        {d.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Branşlara Göre Çalışılan Süreler */}
            <div className={`rounded-2xl border p-3.5 space-y-2 ${cardBg}`}>
              <div className="text-xs font-extrabold">Ders Bazlı Etüt Süreleri</div>
              <div className="grid grid-cols-2 gap-1.5">
                {[
                  { id: 'GENEL', label: 'Genel Etüt' },
                  ...TUS_BRANCHES.map((b) => ({ id: b.id, label: b.shortName })),
                ].map((item) => {
                  const secs = studyState.branchStudySeconds[item.id] || 0;
                  return (
                    <div
                      key={item.id}
                      className={`rounded-xl border px-2.5 py-2 flex items-center justify-between gap-2 text-xs ${subCardBg}`}
                    >
                      <span className="font-bold truncate">{item.label}</span>
                      <span className="font-extrabold text-teal-500 tabular-nums shrink-0">
                        {formatStudyHoursShort(secs)}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* 4. TUS HEDEF DÖNEMİ, UZMANLIK DALI & WIDGET REHBERİ */}
        {subTab === 'hedef' && (
          <div className="space-y-2.5">
            <TusDynamicCountdownCard
              targetDate={studyState.targetTusDate}
              isLight={isLight}
              variant="panel"
              onChangeTargetDate={(newDate) =>
                onUpdateStudyState((prev) => ({ ...prev, targetTusDate: newDate }))
              }
            />

            <div className={`rounded-2xl border p-3.5 space-y-3 ${cardBg}`}>
              <div className="flex items-center gap-1.5 text-xs font-extrabold">
                <Target className="w-4 h-4 text-teal-500" />
                <span>Hedef Dal & TUS Puan Planlayıcı</span>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-bold shrink-0">Hedef Dal:</span>
                  <select
                    value={activeTargetSpec.id}
                    onChange={(e) => {
                      triggerHaptic('light');
                      onUpdateStudyState((p) => ({
                        ...p,
                        targetSpecialtyId: e.target.value,
                      }));
                    }}
                    aria-label="Hedef Uzmanlık Dalı"
                    className={`min-w-0 flex-1 rounded-xl border px-2.5 py-1.5 text-xs font-bold outline-none ${subCardBg}`}
                  >
                    {TUS_SPECIALTY_TARGETS.map((sp) => (
                      <option key={sp.id} value={sp.id}>
                        {sp.name} (~{sp.targetScore})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center justify-between text-[11px] font-bold">
                  <span className="text-slate-400">
                    Hedef Taban: {activeTargetSpec.targetScore} Puan
                  </span>
                  <span
                    className={
                      simScoreDiff >= 0 ? 'text-emerald-500' : 'text-amber-500'
                    }
                  >
                    {simScoreDiff >= 0
                      ? `+${simScoreDiff} puan üstündesin ✓`
                      : `${Math.abs(simScoreDiff)} puan kaldı`}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div className={`rounded-xl border p-2.5 space-y-1.5 ${subCardBg}`}>
                  <div className="flex items-center justify-between text-[11px] font-extrabold text-[#2563EB]">
                    <span>Temel (100)</span>
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
                          const nextC = Math.max(
                            0,
                            Math.min(100, Number(e.target.value) || 0)
                          );
                          setTtbtCorrect(nextC);
                          setTtbtWrong((w) => Math.min(w, 100 - nextC));
                        }}
                        className={`w-full h-10 rounded-xl border px-2.5 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                    <label className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold">Yanlış</span>
                      <input
                        type="number"
                        min={0}
                        max={100 - ttbtCorrect}
                        value={ttbtWrong}
                        onChange={(e) =>
                          setTtbtWrong(
                            Math.max(
                              0,
                              Math.min(100 - ttbtCorrect, Number(e.target.value) || 0)
                            )
                          )
                        }
                        className={`w-full h-10 rounded-xl border px-2.5 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                  </div>
                </div>

                <div className={`rounded-xl border p-2.5 space-y-1.5 ${subCardBg}`}>
                  <div className="flex items-center justify-between text-[11px] font-extrabold text-emerald-500">
                    <span>Klinik (100)</span>
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
                          const nextC = Math.max(
                            0,
                            Math.min(100, Number(e.target.value) || 0)
                          );
                          setKtbtCorrect(nextC);
                          setKtbtWrong((w) => Math.min(w, 100 - nextC));
                        }}
                        className={`w-full h-10 rounded-xl border px-2.5 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                    <label className="space-y-0.5">
                      <span className="text-[10px] text-slate-400 font-bold">Yanlış</span>
                      <input
                        type="number"
                        min={0}
                        max={100 - ktbtCorrect}
                        value={ktbtWrong}
                        onChange={(e) =>
                          setKtbtWrong(
                            Math.max(
                              0,
                              Math.min(100 - ktbtCorrect, Number(e.target.value) || 0)
                            )
                          )
                        }
                        className={`w-full h-10 rounded-xl border px-2.5 font-bold tabular-nums outline-none ${cardBg}`}
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setHasPenalty((p) => !p);
                  }}
                  className={`h-9 px-3 rounded-xl border text-[11px] font-extrabold transition ${
                    hasPenalty
                      ? 'bg-rose-500/15 border-rose-500/40 text-rose-500'
                      : `${subCardBg} text-slate-400`
                  }`}
                >
                  {hasPenalty ? '✓ %5 Kesinti Aktif' : '%5 Kesinti Uygula'}
                </button>

                {onOpenGuide && (
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      onOpenGuide('puan');
                    }}
                    className="h-9 px-3 rounded-xl text-[11px] font-extrabold text-[#2563EB] inline-flex items-center gap-1"
                  >
                    <HelpCircle className="w-3.5 h-3.5" />
                    <span>Formül</span>
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 text-center">
                <div className={`rounded-xl border p-2.5 ${subCardBg}`}>
                  <div className="text-[10px] font-bold text-slate-400">K Puanı (%60K / %40T)</div>
                  <div className={`text-xl font-extrabold tabular-nums ${simScores.kTusScore < 45 ? 'text-rose-500' : 'text-emerald-500'}`}>
                    {simScores.kTusScore}
                  </div>
                </div>
                <div className={`rounded-xl border p-2.5 ${subCardBg}`}>
                  <div className="text-[10px] font-bold text-slate-400">T Puanı (%60T / %40K)</div>
                  <div className={`text-xl font-extrabold tabular-nums ${simScores.tTusScore < 45 ? 'text-rose-500' : 'text-[#2563EB]'}`}>
                    {simScores.tTusScore}
                  </div>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border p-3.5 space-y-1.5 ${cardBg}`}>
              <div className="flex items-center gap-1.5 text-xs font-extrabold">
                <Smartphone className="w-4 h-4 text-teal-500" />
                <span>iPhone Kilit Ekranı Widgetları</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Kilit ekranına basılı tut → <strong>Özelleştir</strong> → <strong>TUS Akademi</strong> widgetını ekle. Etüdü başlattığında Canlı Etkinlik otomatik açılır.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }
);
