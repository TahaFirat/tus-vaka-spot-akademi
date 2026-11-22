import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  BarChart3,
  Bell,
  Compass,
  Download,
  Flame,
  HelpCircle,
  Layers,
  RotateCcw,
  Share2,
  Target,
  Trash2,
  Upload,
} from 'lucide-react';
import {
  STATIC_BRANCH_COUNTS,
  TUS_BRANCHES,
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
} from '../services/studyStorage';
import { TusDynamicCountdownCard } from './TusCountdownTimer';

interface AnalizScreenProps {
  studyState: TusStudyState;
  isPro: boolean;
  isLight: boolean;
  onUpdateStudyState: (updater: (prev: TusStudyState) => TusStudyState) => void;
  onJumpToMistakes: (mode: 'vaka' | 'spot') => void;
  onOpenPaywall: (reason?: string) => void;
  onOpenGuide?: (tab?: 'puan' | 'dagilim' | 'sistem') => void;
  onResetProgress: () => void;
  onReplayOnboarding: () => void;
}

export const AnalizScreen: React.FC<AnalizScreenProps> = ({
  studyState,
  isPro,
  isLight,
  onUpdateStudyState,
  onJumpToMistakes,
  onOpenPaywall,
  onOpenGuide,
  onResetProgress,
  onReplayOnboarding,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [importMessage, setImportMessage] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [reminderHour, setReminderHour] = useState<number>(20);
  const [reminderStatusMsg, setReminderStatusMsg] = useState<string | null>(null);

  useEffect(() => {
    const onRemStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      if (detail.message) {
        setReminderStatusMsg(String(detail.message));
      }
    };
    window.addEventListener('tus:reminderStatus', onRemStatus as EventListener);
    return () => {
      window.removeEventListener('tus:reminderStatus', onRemStatus as EventListener);
    };
  }, []);

  const countdownDays = useMemo(
    () => getTusCountdownParts(studyState.targetTusDate).days,
    [studyState.targetTusDate]
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
      perBranch[b.id] = {
        solved: 0,
        correct: 0,
        wrong: 0,
        net: 0,
        totalPool: STATIC_BRANCH_COUNTS[b.id]?.total || 120,
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

    // Leitner 4-Kutu SRS özeti (Akademi Karne içinde)
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
      srs: { box1, box2, box3, box4 },
    };
  }, [studyState.vakaAnswers, studyState.spotAnswers, studyState.srsMap]);

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
        const parsed = JSON.parse(String(reader.result)) as Partial<TusStudyState>;
        if (parsed && typeof parsed === 'object') {
          onUpdateStudyState((prev) => ({
            ...prev,
            ...parsed,
            vakaAnswers:
              parsed.vakaAnswers && typeof parsed.vakaAnswers === 'object'
                ? parsed.vakaAnswers
                : prev.vakaAnswers,
            spotAnswers:
              parsed.spotAnswers && typeof parsed.spotAnswers === 'object'
                ? parsed.spotAnswers
                : prev.spotAnswers,
            bookmarkedVakaIds: Array.isArray(parsed.bookmarkedVakaIds)
              ? parsed.bookmarkedVakaIds
              : prev.bookmarkedVakaIds,
            bookmarkedSpotIds: Array.isArray(parsed.bookmarkedSpotIds)
              ? parsed.bookmarkedSpotIds
              : prev.bookmarkedSpotIds,
            examHistory: Array.isArray(parsed.examHistory)
              ? parsed.examHistory
              : prev.examHistory,
            onboardingCompleted: true,
          }));
          triggerHaptic('success');
          setImportMessage('Verileriniz başarıyla geri yüklendi.');
        }
      } catch {
        setImportMessage('Geçersiz yedek dosyası.');
      }
    };
    reader.readAsText(file);
  };

  const cardClass = isLight
    ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
    : 'bg-[#121826] border-white/8 shadow-md';

  return (
    <div className="space-y-2.5">
      {/* ÖSYM TUS Dönem Seçici & Canlı Geri Sayım */}
      <TusDynamicCountdownCard
        targetDate={studyState.targetTusDate}
        isLight={isLight}
        variant="panel"
        onChangeTargetDate={(newDate) =>
          onUpdateStudyState((prev) => ({ ...prev, targetTusDate: newDate }))
        }
      />

      {/* 4 Özet İstatistik Kartı */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10.5px] font-extrabold uppercase text-[#2563EB]">
            Temel
          </div>
          <div className="text-xl font-extrabold mt-0.5">%{stats.ttbtPct}</div>
          <div className="text-[11px] text-slate-400 tabular-nums">
            {stats.ttbtCorrect}/{stats.ttbtSolved} Doğru
          </div>
        </div>

        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10.5px] font-extrabold uppercase text-emerald-500">
            Klinik
          </div>
          <div className="text-xl font-extrabold mt-0.5">%{stats.ktbtPct}</div>
          <div className="text-[11px] text-slate-400 tabular-nums">
            {stats.ktbtCorrect}/{stats.ktbtSolved} Doğru
          </div>
        </div>

        <div className={`rounded-2xl border p-3 ${cardClass}`}>
          <div className="text-[10.5px] font-extrabold uppercase text-teal-500">
            Toplam Net
          </div>
          <div className="text-xl font-extrabold text-emerald-500 mt-0.5 tabular-nums">
            {stats.overallNet}
          </div>
          <div className="text-[11px] text-slate-400 tabular-nums">
            {stats.totalCorrect} D • {stats.totalWrong} Y (4Y=1D)
          </div>
        </div>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            onOpenGuide?.('puan');
          }}
          className={`rounded-2xl border p-3 text-left transition active:scale-[0.98] ${cardClass}`}
        >
          <div className="flex items-center justify-between gap-1">
            <span className="text-[10.5px] font-extrabold uppercase text-amber-500">
              Tahmini Puan
            </span>
            <HelpCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </div>
          <div className="text-xl font-extrabold text-amber-500 mt-0.5 tabular-nums">
            {stats.estimatedScore}
          </div>
          <div className="text-[11px] text-[#2563EB] font-bold">Nasıl hesaplanır?</div>
        </button>
      </div>

      {/* Günlük Soru Hedefi & Hata Defteri */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardClass}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-extrabold">
              <Target className="w-4 h-4 text-emerald-500" />
              <span>Günlük Soru Hedefi</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-500 text-[11px] font-bold">
              <Flame className="w-3 h-3" />
              {studyState.streakDays} Gün
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-400">Bugün:</span>
              <span className="font-bold text-emerald-500 tabular-nums">
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
            <span className="text-xs font-semibold text-slate-400">Hedef</span>
            <div className="flex items-center gap-1.5">
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
                  className={`h-9 min-w-[44px] px-2.5 rounded-xl text-xs font-extrabold border transition active:scale-[0.97] ${
                    studyState.dailyTarget === val
                      ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-xs'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-600'
                      : 'bg-[#0A0E17] border-white/10 text-slate-300'
                  }`}
                >
                  {val}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Hata Defteri & 4-Kutu Leitner Hafıza Özeti */}
        <div
          className={`rounded-2xl border p-3.5 flex flex-col justify-between gap-2.5 ${cardClass}`}
        >
          <div className="space-y-2.5">
            <div className="flex items-center justify-between text-xs font-extrabold">
              <span className="flex items-center gap-1.5">
                <RotateCcw className="w-4 h-4 text-rose-500" />
                <span>Hata Defteri</span>
              </span>
              <span className="text-[11px] font-bold text-emerald-500 tabular-nums">
                Kalıcı: {stats.srs.box4}
              </span>
            </div>

            <div className="grid grid-cols-4 gap-1.5 text-center">
              {[
                { label: 'Kutu 1', val: stats.srs.box1, cls: 'text-rose-500' },
                { label: 'Kutu 2', val: stats.srs.box2, cls: 'text-amber-500' },
                { label: 'Kutu 3', val: stats.srs.box3, cls: 'text-[#2563EB]' },
                { label: 'Kutu 4', val: stats.srs.box4, cls: 'text-emerald-500' },
              ].map((b) => (
                <div
                  key={b.label}
                  className={`rounded-xl border py-2 px-1 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'
                  }`}
                >
                  <div className="text-[10px] font-bold text-slate-400">{b.label}</div>
                  <div className={`text-sm font-extrabold tabular-nums ${b.cls}`}>
                    {b.val}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                disabled={stats.vakaWrong === 0}
                onClick={() => {
                  triggerHaptic('medium');
                  onJumpToMistakes('vaka');
                }}
                className={`h-11 px-3 rounded-xl border text-xs font-extrabold transition active:scale-[0.98] disabled:opacity-45 ${
                  isLight
                    ? 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-700'
                    : 'bg-rose-500/15 hover:bg-rose-500/25 border-rose-500/30 text-rose-300'
                }`}
              >
                Vaka Yanlış ({stats.vakaWrong})
              </button>

              <button
                type="button"
                disabled={stats.spotWrong === 0}
                onClick={() => {
                  triggerHaptic('medium');
                  onJumpToMistakes('spot');
                }}
                className={`h-11 px-3 rounded-xl border text-xs font-extrabold transition active:scale-[0.98] disabled:opacity-45 ${
                  isLight
                    ? 'bg-amber-50 hover:bg-amber-100 border-amber-300 text-amber-800'
                    : 'bg-amber-500/15 hover:bg-amber-500/25 border-amber-500/30 text-amber-300'
                }`}
              >
                Spot Yanlış ({stats.spotWrong})
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 11 TUS Branşında Ustalık */}
      <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardClass}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-extrabold">
            <BarChart3 className="w-4 h-4 text-[#2563EB]" />
            <span>Branş Bazlı Ustalık</span>
          </div>
          {!isPro && (
            <button
              type="button"
              onClick={() => onOpenPaywall()}
              className="h-8 px-2.5 rounded-lg bg-amber-500/15 text-amber-600 text-xs font-extrabold"
            >
              PRO’ya Geç
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
                className={`rounded-xl border p-2.5 space-y-1.5 ${
                  isLight
                    ? 'bg-slate-50 border-slate-200/80'
                    : 'bg-[#0A0E17] border-white/6'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-bold truncate min-w-0">
                    {branch.shortName}
                  </span>
                  <span className="text-[11px] text-slate-400 tabular-nums shrink-0">
                    {bStat.solved}/{bStat.totalPool.toLocaleString('tr-TR')} • Net:{' '}
                    <strong className="text-emerald-500">{bStat.net}</strong>
                  </span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-slate-500/15 overflow-hidden">
                  <div
                    className="h-full bg-[#2563EB]"
                    style={{ width: `${accuracy}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ayarlar & Yedekleme */}
      <div className={`rounded-2xl border p-3.5 space-y-3 ${cardClass}`}>
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 text-xs font-extrabold">
            <Layers className="w-4 h-4 text-[#2563EB]" />
            <span>Ayarlar & Yedekleme</span>
          </div>

          <div className="flex items-center gap-1.5">
            {onOpenGuide && (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  onOpenGuide('puan');
                }}
                className={`h-10 inline-flex items-center gap-1.5 px-3 rounded-xl border text-xs font-extrabold transition ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-700'
                    : 'bg-[#0A0E17] border-white/10 text-slate-200'
                }`}
              >
                <HelpCircle className="w-4 h-4 text-[#2563EB]" />
                <span>Puan Rehberi</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                onReplayOnboarding();
              }}
              className="h-10 inline-flex items-center gap-1.5 px-3.5 rounded-xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold transition active:scale-[0.98]"
            >
              <Compass className="w-4 h-4" />
              <span>Ders Seçimi</span>
            </button>
          </div>
        </div>

        {/* Günlük Hatırlatıcı & Karne Paylaşımı */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-500/15 text-xs">
          <div className="flex items-center gap-1.5">
            <Bell className="w-4 h-4 text-[#2563EB] shrink-0" />
            <select
              value={reminderHour}
              onChange={(e) => setReminderHour(Number(e.target.value))}
              aria-label="Hatırlatıcı Saati"
              className={`h-10 flex-1 rounded-xl px-2.5 text-xs font-bold border outline-none ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-800'
                  : 'bg-[#0A0E17] border-white/10 text-slate-100'
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
                  countdownDays,
                  studyState.dailyTarget
                );
              }}
              className="h-10 px-3.5 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold shrink-0"
            >
              Kur
            </button>

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                cancelDailyTusReminder();
              }}
              className={`h-10 px-3 rounded-xl border text-xs font-bold shrink-0 ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-white/5 border-white/10 text-slate-300'
              }`}
            >
              Kapat
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              shareClinicalSummary(
                `TUS Vaka & Spot Akademi Karnem • Çözülen: ${stats.totalSolved} Soru • Netim: ${stats.overallNet} • Tahmini Puan: ${stats.estimatedScore} • TUS'a Kalan: ${countdownDays} Gün`
              );
            }}
            className={`h-10 inline-flex items-center justify-center gap-1.5 px-3.5 rounded-xl border text-xs font-extrabold transition ${
              isLight
                ? 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
                : 'bg-[#0A0E17] border-white/10 text-slate-200 hover:bg-white/10'
            }`}
          >
            <Share2 className="w-4 h-4" />
            <span>Karnemi Paylaş</span>
          </button>
        </div>

        {reminderStatusMsg && (
          <div className="text-[11px] font-semibold text-emerald-500">
            {reminderStatusMsg}
          </div>
        )}

        {/* Yedekle / Yükle / Sıfırla */}
        <div className="pt-2 border-t border-slate-500/15 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleExportJson}
              className={`h-10 inline-flex items-center gap-1.5 px-3.5 rounded-xl border text-xs font-bold transition ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-700'
                  : 'bg-[#0A0E17] border-white/10 text-slate-200'
              }`}
            >
              <Download className="w-4 h-4" />
              <span>Yedekle</span>
            </button>
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className={`h-10 inline-flex items-center gap-1.5 px-3.5 rounded-xl border text-xs font-bold transition ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-700'
                  : 'bg-[#0A0E17] border-white/10 text-slate-200'
              }`}
            >
              <Upload className="w-4 h-4" />
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

          {!confirmReset ? (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              className="h-10 inline-flex items-center gap-1.5 px-3 rounded-xl text-xs text-rose-500 font-bold hover:bg-rose-500/10 transition"
            >
              <Trash2 className="w-4 h-4" />
              <span>Sıfırla</span>
            </button>
          ) : (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setConfirmReset(false);
                }}
                className="h-10 px-3.5 rounded-xl bg-rose-600 text-white text-xs font-extrabold"
              >
                Onayla
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="h-10 px-3.5 rounded-xl bg-slate-500/20 text-xs font-bold"
              >
                İptal
              </button>
            </div>
          )}
        </div>

        {importMessage && (
          <div className="text-xs text-emerald-500 font-semibold">
            {importMessage}
          </div>
        )}
      </div>

      {/* Tamamlanan Denemeler */}
      {studyState.examHistory.length > 0 && (
        <div className={`rounded-2xl border p-3.5 space-y-2 ${cardClass}`}>
          <span className="text-xs font-extrabold flex items-center gap-1.5">
            <Award className="w-4 h-4 text-[#2563EB]" />
            <span>Tamamlanan Denemeler ({studyState.examHistory.length})</span>
          </span>
          <div className="space-y-1.5">
            {studyState.examHistory.slice(0, 5).map((ex) => (
              <div
                key={ex.id}
                className={`rounded-xl border px-3 py-2.5 flex items-center justify-between gap-2 text-xs ${
                  isLight
                    ? 'bg-slate-50 border-slate-200/80 text-slate-700'
                    : 'bg-[#0A0E17] border-white/6 text-slate-200'
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
        </div>
      )}
    </div>
  );
};
