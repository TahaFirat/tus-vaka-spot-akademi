import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  BarChart3,
  Bell,
  Calendar,
  Clock,
  Download,
  Flame,
  RotateCcw,
  Share2,
  Target,
  Trash2,
  Upload,
} from 'lucide-react';
import {
  TUS_BRANCHES,
  TUS_SPOT_CARDS,
  TUS_VAKA_QUESTIONS,
} from '../data/tusMedicalRepository';
import {
  cancelDailyTusReminder,
  scheduleDailyTusReminder,
  shareClinicalSummary,
  triggerHaptic,
} from '../services/nativeBridge';
import {
  calculateEstimatedTusScore,
  calculateOsymNet,
  getTusCountdownParts,
  TusStudyState,
  UPCOMING_TUS_EXAMS,
} from '../services/studyStorage';

interface AnalizScreenProps {
  studyState: TusStudyState;
  isPro: boolean;
  isLight: boolean;
  onUpdateStudyState: (updater: (prev: TusStudyState) => TusStudyState) => void;
  onJumpToMistakes: (mode: 'vaka' | 'spot') => void;
  onOpenPaywall: (reason?: string) => void;
  onResetProgress: () => void;
}

export const AnalizScreen: React.FC<AnalizScreenProps> = ({
  studyState,
  isPro,
  isLight,
  onUpdateStudyState,
  onJumpToMistakes,
  onOpenPaywall,
  onResetProgress,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [nowMs, setNowMs] = useState<number>(() => Date.now());
  const [reminderHour, setReminderHour] = useState<number>(20);
  const [reminderStatusMsg, setReminderStatusMsg] = useState<string | null>(
    null
  );

  useEffect(() => {
    const onRemStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      if (detail.message) {
        setReminderStatusMsg(String(detail.message));
      }
    };
    window.addEventListener('tus:reminderStatus', onRemStatus as EventListener);
    return () => {
      window.removeEventListener(
        'tus:reminderStatus',
        onRemStatus as EventListener
      );
    };
  }, []);

  // Live 1-second timer for active TUS countdown
  useEffect(() => {
    const timer = window.setInterval(() => {
      setNowMs(Date.now());
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const countdown = useMemo(
    () => getTusCountdownParts(studyState.targetTusDate, nowMs),
    [studyState.targetTusDate, nowMs]
  );

  const stats = useMemo(() => {
    const vakaRecords = Object.values(studyState.vakaAnswers);
    const spotRecords = Object.values(studyState.spotAnswers);

    const vakaCorrect = vakaRecords.filter((r) => r.isCorrect).length;
    const vakaWrong = vakaRecords.length - vakaCorrect;
    const spotCorrect = spotRecords.filter((r) => r.isCorrect).length;
    const spotWrong = spotRecords.length - spotCorrect;

    const totalSolved = vakaRecords.length + spotRecords.length;
    const totalCorrect = vakaCorrect + spotCorrect;
    const totalWrong = vakaWrong + spotWrong;
    const overallNet = calculateOsymNet(totalCorrect, totalWrong);
    const estimatedScore = calculateEstimatedTusScore(
      overallNet,
      Math.max(1, totalSolved)
    );

    let ttbtSolved = 0;
    let ttbtCorrect = 0;
    let ktbtSolved = 0;
    let ktbtCorrect = 0;

    const branchMap = new Map(TUS_BRANCHES.map((b) => [b.id, b]));
    const perBranch: Record<
      string,
      { solved: number; correct: number; wrong: number; net: number; totalPool: number }
    > = {};

    TUS_BRANCHES.forEach((b) => {
      const poolCount =
        TUS_VAKA_QUESTIONS.filter((q) => q.branchId === b.id).length +
        TUS_SPOT_CARDS.filter((s) => s.branchId === b.id).length;
      perBranch[b.id] = {
        solved: 0,
        correct: 0,
        wrong: 0,
        net: 0,
        totalPool: poolCount,
      };
    });

    [...vakaRecords, ...spotRecords].forEach((rec) => {
      const bMeta = branchMap.get(rec.branchId);
      const bStat = perBranch[rec.branchId];
      if (bStat) {
        bStat.solved += 1;
        if (rec.isCorrect) bStat.correct += 1;
        else bStat.wrong += 1;
      }
      if (bMeta?.session === 'TTBT') {
        ttbtSolved += 1;
        if (rec.isCorrect) ttbtCorrect += 1;
      } else {
        ktbtSolved += 1;
        if (rec.isCorrect) ktbtCorrect += 1;
      }
    });

    Object.values(perBranch).forEach((b) => {
      b.net = calculateOsymNet(b.correct, b.wrong);
    });

    const ttbtPct =
      ttbtSolved > 0 ? Math.round((ttbtCorrect / ttbtSolved) * 100) : 0;
    const ktbtPct =
      ktbtSolved > 0 ? Math.round((ktbtCorrect / ktbtSolved) * 100) : 0;

    return {
      totalSolved,
      totalCorrect,
      totalWrong,
      vakaWrong,
      spotWrong,
      overallNet,
      estimatedScore,
      ttbtSolved,
      ttbtCorrect,
      ttbtPct,
      ktbtSolved,
      ktbtCorrect,
      ktbtPct,
      perBranch,
    };
  }, [studyState.vakaAnswers, studyState.spotAnswers]);

  const handleExportJson = () => {
    triggerHaptic('light');
    const dataStr = JSON.stringify(studyState, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `tus-akademi-yedek-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJson = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(
          String(reader.result)
        ) as Partial<TusStudyState>;
        if (parsed && typeof parsed === 'object') {
          onUpdateStudyState((prev) => ({
            ...prev,
            ...parsed,
          }));
          triggerHaptic('success');
          setImportMessage('Verileriniz başarıyla geri yüklendi!');
        }
      } catch {
        setImportMessage('Geçersiz yedek dosyası.');
      }
    };
    reader.readAsText(file);
  };

  const cardClass = isLight
    ? 'bg-white border-slate-200/90 shadow-sm'
    : 'bg-[#0C1B24] border-white/10 shadow-md';

  return (
    <div className="space-y-2.5">
      {/* Live Active TUS Countdown Banner */}
      <div
        className={`rounded-2xl border p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isLight
            ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-emerald-200'
            : 'bg-gradient-to-r from-emerald-950/60 via-[#0C1B24] to-cyan-950/50 border-emerald-500/30'
        }`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-500">
            <Clock className="w-3.5 h-3.5 animate-pulse" />
            <span>CANLI ÖSYM TUS GERİ SAYIMI</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-teal-500 shrink-0" />
            <select
              value={studyState.targetTusDate}
              onChange={(e) => {
                triggerHaptic('light');
                onUpdateStudyState((prev) => ({
                  ...prev,
                  targetTusDate: e.target.value,
                }));
              }}
              aria-label="Hedef TUS Dönemi"
              className={`rounded-xl px-2.5 py-1 text-xs font-bold border outline-none ${
                isLight
                  ? 'bg-white border-emerald-200 text-slate-800'
                  : 'bg-[#071117] border-white/15 text-slate-100'
              }`}
            >
              {UPCOMING_TUS_EXAMS.map((exam) => (
                <option key={exam.date} value={exam.date}>
                  {exam.label} ({exam.date})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Live Ticking Boxes: Gün / Saat / Dakika / Saniye */}
        <div className="grid grid-cols-4 gap-1.5 shrink-0">
          {[
            { value: countdown.days, unit: 'Gün' },
            { value: String(countdown.hours).padStart(2, '0'), unit: 'Saat' },
            { value: String(countdown.minutes).padStart(2, '0'), unit: 'Dk' },
            { value: String(countdown.seconds).padStart(2, '0'), unit: 'Sn' },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl border px-2.5 py-1.5 text-center min-w-[54px] ${
                isLight
                  ? 'bg-white border-emerald-200/80 shadow-xs'
                  : 'bg-[#071117]/90 border-emerald-500/25'
              }`}
            >
              <div className="text-sm sm:text-base font-extrabold tabular-nums text-emerald-500 leading-tight">
                {item.value}
              </div>
              <div className="text-[10px] font-bold text-slate-400 uppercase">
                {item.unit}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4 Compact Stat Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10px] font-extrabold uppercase text-emerald-500">
            TTBT (Temel)
          </div>
          <div className="text-xl font-extrabold mt-0.5">%{stats.ttbtPct}</div>
          <div className="text-[11px] text-slate-400">
            {stats.ttbtCorrect}/{stats.ttbtSolved} Doğru
          </div>
        </div>

        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10px] font-extrabold uppercase text-cyan-500">
            KTBT (Klinik)
          </div>
          <div className="text-xl font-extrabold mt-0.5">%{stats.ktbtPct}</div>
          <div className="text-[11px] text-slate-400">
            {stats.ktbtCorrect}/{stats.ktbtSolved} Doğru
          </div>
        </div>

        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10px] font-extrabold uppercase text-teal-500">
            ÖSYM Neti
          </div>
          <div className="text-xl font-extrabold text-emerald-500 mt-0.5">
            {stats.overallNet}
          </div>
          <div className="text-[11px] text-slate-400">
            {stats.totalCorrect} D • {stats.totalWrong} Y
          </div>
        </div>

        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10px] font-extrabold uppercase text-amber-500">
            Tahmini TUS
          </div>
          <div className="text-xl font-extrabold text-amber-500 mt-0.5">
            {stats.estimatedScore}
          </div>
          <div className="text-[11px] text-slate-400">45–85 Bandı</div>
        </div>
      </div>

      {/* Daily Goal & Mistake Re-Test */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardClass}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-extrabold">
              <Target className="w-4 h-4 text-emerald-500" />
              <span>Günlük Soru Hedefi</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 text-[11px] font-bold">
              <Flame className="w-3 h-3" />
              {studyState.streakDays} Gün Seri
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Bugün Çözülen:</span>
              <span className="font-bold text-emerald-500">
                {studyState.todaySolvedCount} / {studyState.dailyTarget} Soru
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-500/15 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-300"
                style={{
                  width: `${Math.min(
                    100,
                    Math.round(
                      (studyState.todaySolvedCount /
                        Math.max(1, studyState.dailyTarget)) *
                        100
                    )
                  )}%`,
                }}
              />
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 pt-1">
            <span className="text-xs text-slate-400">Hedef Seç:</span>
            <div className="flex items-center gap-1">
              {[20, 40, 60, 100].map((val) => (
                <button
                  key={val}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    onUpdateStudyState((prev) => ({
                      ...prev,
                      dailyTarget: val,
                    }));
                  }}
                  className={`px-2.5 py-0.5 rounded-lg text-xs font-bold border transition ${
                    studyState.dailyTarget === val
                      ? 'bg-emerald-600 border-emerald-500 text-white'
                      : 'border-slate-500/20 text-slate-400'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Mistake Re-test & Backup (Audio Removed) */}
        <div
          className={`rounded-2xl border p-3.5 flex flex-col justify-between gap-2.5 ${cardClass}`}
        >
          <div className="space-y-2">
            <div className="text-xs font-extrabold flex items-center gap-1.5">
              <RotateCcw className="w-4 h-4 text-rose-500" />
              <span>Hata Defteri • Tek Tıkla Tekrar Çöz</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  onJumpToMistakes('vaka');
                }}
                className={`py-2 px-2.5 rounded-xl border text-xs font-extrabold transition ${
                  isLight
                    ? 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-700'
                    : 'bg-rose-500/15 hover:bg-rose-500/25 border-rose-500/30 text-rose-300'
                }`}
              >
                5 Şıklı Yanlışlar ({stats.vakaWrong})
              </button>

              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  onJumpToMistakes('spot');
                }}
                className={`py-2 px-2.5 rounded-xl border text-xs font-extrabold transition ${
                  isLight
                    ? 'bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-800'
                    : 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/30 text-amber-300'
                }`}
              >
                D/Y Yanlışlar ({stats.spotWrong})
              </button>
            </div>
          </div>

          <div className="pt-2 border-t border-slate-500/15 flex items-center justify-between gap-2">
            <span className="text-[11px] font-semibold text-slate-400">
              Çalışma Verisi Yedekleme
            </span>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handleExportJson}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-500/15 hover:bg-slate-500/25 text-xs font-bold transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Yedekle</span>
              </button>
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-slate-500/15 hover:bg-slate-500/25 text-xs font-bold transition"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>Yükle</span>
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="application/json"
                onChange={handleImportJson}
                className="hidden"
              />
            </div>
          </div>

          {importMessage && (
            <div className="text-xs text-emerald-500 text-center font-semibold">
              {importMessage}
            </div>
          )}
        </div>
      </div>

      {/* 11 TUS Branches Mastery */}
      <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardClass}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-extrabold">
            <BarChart3 className="w-4 h-4 text-emerald-500" />
            <span>11 TUS Branşında Ustalık & Soru Dağılımı</span>
          </div>
          {!isPro && (
            <button
              type="button"
              onClick={() => onOpenPaywall()}
              className="text-xs font-bold text-amber-500 hover:underline"
            >
              PRO'ya Geç →
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {TUS_BRANCHES.map((branch) => {
            const bStat = stats.perBranch[branch.id] || {
              solved: 0,
              correct: 0,
              wrong: 0,
              net: 0,
              totalPool: 120,
            };
            const accuracy =
              bStat.solved > 0
                ? Math.round((bStat.correct / bStat.solved) * 100)
                : 0;

            return (
              <div
                key={branch.id}
                className={`rounded-xl border p-2.5 space-y-1 ${
                  isLight
                    ? 'bg-slate-50 border-slate-200/80'
                    : 'bg-[#071117] border-white/6'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold truncate">
                    <span className="text-[10px] font-extrabold text-emerald-500 mr-1">
                      [{branch.session}]
                    </span>
                    {branch.shortName}
                  </span>
                  <span className="text-[11px] text-slate-400 tabular-nums">
                    {bStat.solved}/{bStat.totalPool} Soru • Net:{' '}
                    <strong className="text-emerald-500">{bStat.net}</strong>
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-500/15 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400"
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Exam History & Reset */}
      <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardClass}`}>
        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold flex items-center gap-1.5">
            <Award className="w-4 h-4 text-teal-500" />
            <span>Tamamlanan Denemeler ({studyState.examHistory.length})</span>
          </span>

          {!confirmReset ? (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="inline-flex items-center gap-1 text-xs text-rose-500 font-semibold"
            >
              <Trash2 className="w-3.5 h-3.5" />
              <span>İlerlemeyi Sıfırla</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setConfirmReset(false);
                }}
                className="px-2 py-0.5 rounded bg-rose-600 text-white text-xs font-bold"
              >
                Onayla
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="px-2 py-0.5 rounded bg-slate-500/20 text-xs"
              >
                İptal
              </button>
            </div>
          )}
        </div>

        {studyState.examHistory.length > 0 && (
          <div className="space-y-1.5 pt-1">
            {studyState.examHistory.slice(0, 5).map((ex) => (
              <div
                key={ex.id}
                className={`rounded-xl border px-3 py-2 flex items-center justify-between gap-2 text-xs ${
                  isLight
                    ? 'bg-slate-50 border-slate-200/80 text-slate-700'
                    : 'bg-[#071117] border-white/6 text-slate-200'
                }`}
              >
                <div className="min-w-0">
                  <div className="font-bold truncate">{ex.title}</div>
                  <div className="text-[10px] text-slate-400">
                    {new Date(ex.dateIso).toLocaleDateString('tr-TR')} •{' '}
                    {ex.correctCount}D / {ex.wrongCount}Y / {ex.blankCount}B
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-extrabold text-emerald-500">
                    {ex.netScore} Net
                  </div>
                  <div className="text-[10px] font-bold text-amber-500">
                    TUS: {ex.estimatedTusScore}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Native iOS Daily TUS Study Reminder & Scorecard Share */}
      <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardClass}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-extrabold">
            <Bell className="w-4 h-4 text-emerald-500" />
            <span>iOS Günlük TUS Etüt Bildirimi & Karne Paylaşımı</span>
          </div>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              shareClinicalSummary(
                `TUS Vaka & Spot Akademi Karnem • Çözülen: ${stats.totalSolved} Soru • ÖSYM Netim: ${stats.overallNet} • Tahmini TUS Puanım: ${stats.estimatedScore} • TUS'a Kalan: ${countdown.days} Gün`
              );
            }}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Karnemi Paylaş</span>
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <select
            value={reminderHour}
            onChange={(e) => setReminderHour(Number(e.target.value))}
            aria-label="Hatırlatıcı Saati"
            className={`rounded-xl px-2.5 py-1.5 text-xs font-bold border outline-none ${
              isLight
                ? 'bg-slate-50 border-slate-200 text-slate-800'
                : 'bg-[#071117] border-white/10 text-slate-100'
            }`}
          >
            {[9, 12, 18, 19, 20, 21, 22].map((h) => (
              <option key={h} value={h}>
                Her Gün {String(h).padStart(2, '0')}:00
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              scheduleDailyTusReminder(
                reminderHour,
                0,
                countdown.days,
                studyState.dailyTarget
              );
            }}
            className="px-3 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-extrabold"
          >
            Hatırlatıcıyı Kur
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              cancelDailyTusReminder();
            }}
            className={`px-2.5 py-1.5 rounded-xl border text-xs font-bold ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-600'
                : 'bg-white/5 border-white/10 text-slate-300'
            }`}
          >
            Kapat
          </button>
        </div>

        {reminderStatusMsg && (
          <div className="text-[11px] font-semibold text-emerald-500">
            {reminderStatusMsg}
          </div>
        )}
      </div>
    </div>
  );
};
