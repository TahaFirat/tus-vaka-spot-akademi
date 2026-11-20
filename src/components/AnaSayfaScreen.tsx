import React, { useMemo } from 'react';
import {
  Award,
  BarChart3,
  BookOpen,
  CheckSquare,
  ChevronRight,
  Crown,
  Flame,
  Play,
  RotateCcw,
  Sparkles,
  Stethoscope,
  Target,
  Timer,
  Zap,
} from 'lucide-react';
import {
  TOTAL_INTERACTIVE_TUS_ITEMS,
  TUS_BRANCHES,
  TUS_OSYM_TWIN_QUESTIONS,
  TUS_SPOT_CARDS,
  TUS_VAKA_QUESTIONS,
  TusBranchId,
} from '../data/tusMedicalRepository';
import {
  FREE_QUESTION_LIMIT,
  PRO_PRICE_LABEL,
  triggerHaptic,
} from '../services/nativeBridge';
import {
  calculateEstimatedTusScore,
  calculateOsymNet,
  getLocalDateString,
  TusStudyState,
} from '../services/studyStorage';
import { TusDynamicCountdownCard } from './TusCountdownTimer';

interface AnaSayfaScreenProps {
  studyState: TusStudyState;
  isPro: boolean;
  isLight: boolean;
  totalSolvedCount: number;
  priceLabel?: string;
  onNavigateTab: (
    tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz' | 'odak',
    options?: {
      basket?: 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
      branchId?: 'ALL' | TusBranchId;
    }
  ) => void;
  onOpenPaywall: (reason?: string) => void;
}

export const AnaSayfaScreen: React.FC<AnaSayfaScreenProps> = React.memo(
  ({
    studyState,
    isPro,
    isLight,
    totalSolvedCount,
    priceLabel = PRO_PRICE_LABEL,
    onNavigateTab,
    onOpenPaywall,
  }) => {
    const summary = useMemo(() => {
      const vakaRecords = Object.values(studyState.vakaAnswers);
      const spotRecords = Object.values(studyState.spotAnswers);
      const vakaCorrect = vakaRecords.filter((r) => r.isCorrect).length;
      const vakaWrong = vakaRecords.length - vakaCorrect;
      const spotCorrect = spotRecords.filter((r) => r.isCorrect).length;
      const spotWrong = spotRecords.length - spotCorrect;

      const totalCorrect = vakaCorrect + spotCorrect;
      const totalWrong = vakaWrong + spotWrong;
      const net = calculateOsymNet(totalCorrect, totalWrong);
      const estScore =
        totalSolvedCount > 0
          ? calculateEstimatedTusScore(net, totalSolvedCount)
          : 45;

      const vakaPool = isPro ? TUS_VAKA_QUESTIONS : TUS_VAKA_QUESTIONS.slice(0, FREE_QUESTION_LIMIT);
      const twinPool = isPro
        ? TUS_OSYM_TWIN_QUESTIONS
        : TUS_OSYM_TWIN_QUESTIONS.slice(0, FREE_QUESTION_LIMIT);
      const spotPool = isPro ? TUS_SPOT_CARDS : TUS_SPOT_CARDS.slice(0, FREE_QUESTION_LIMIT);

      const newVaka = vakaPool.filter((q) => !studyState.vakaAnswers[q.id]).length;
      const newTwin = twinPool.filter((q) => !studyState.vakaAnswers[q.id]).length;
      const newSpot = spotPool.filter((s) => !studyState.spotAnswers[s.id]).length;

      return {
        vakaWrong,
        spotWrong,
        net,
        estScore,
        newVaka,
        newTwin,
        newSpot,
      };
    }, [studyState.vakaAnswers, studyState.spotAnswers, totalSolvedCount, isPro]);

    const dailyPct = Math.min(
      100,
      Math.round((studyState.todaySolvedCount / Math.max(1, studyState.dailyTarget)) * 100)
    );
    const todayMinutes = Math.round(
      (studyState.studySecondsByDate[getLocalDateString()] || 0) / 60
    );

    const cardBg = isLight
      ? 'bg-white border-slate-200/90 shadow-sm'
      : 'bg-[#0C1B24] border-white/10 shadow-md';

    return (
      <div className="space-y-3">
        {/* Sadeleştirilmiş Karşılama & Canlı TUS Geri Sayım Kartı */}
        <div
          className={`rounded-3xl border p-4 sm:p-5 relative overflow-hidden ${
            isLight
              ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 border-emerald-500 text-white shadow-md'
              : 'bg-gradient-to-br from-emerald-900/90 via-[#0C222C] to-[#08151C] border-emerald-500/35 text-white shadow-xl'
          }`}
        >
          <div className="flex items-start justify-between gap-2.5">
            <div className="space-y-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[10.5px] font-extrabold tracking-wide max-w-full">
                <Stethoscope className="w-3 h-3 text-emerald-200 shrink-0" />
                <span className="truncate">ÖSYM TTBT & KTBT • 11 BRANŞ</span>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
                TUS Vaka & Spot
              </h1>
              <p className="text-[11.5px] text-emerald-100/90 leading-snug">
                {TOTAL_INTERACTIVE_TUS_ITEMS}+ soru • %100 internetsiz çalışır
              </p>
            </div>

            <TusDynamicCountdownCard
              targetDate={studyState.targetTusDate}
              isLight={isLight}
              variant="hero"
            />
          </div>

          {/* Günlük İlerleme + Hızlı Başla */}
          <div className="mt-3.5 pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="space-y-1 flex-1">
              <div className="flex items-center justify-between text-xs font-bold">
                <span className="inline-flex items-center gap-1 text-emerald-100">
                  <Target className="w-3.5 h-3.5 text-emerald-300" />
                  {studyState.todaySolvedCount}/{studyState.dailyTarget} Soru • {todayMinutes} dk
                </span>
                <span className="inline-flex items-center gap-1 text-amber-300">
                  <Flame className="w-3.5 h-3.5 fill-amber-400" />
                  {studyState.streakDays} Gün
                </span>
              </div>
              <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-emerald-300 to-cyan-300 transition-all duration-300"
                  style={{ width: `${dailyPct}%` }}
                />
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                triggerHaptic('medium');
                onNavigateTab('vaka', { basket: 'unsolved' });
              }}
              className="shrink-0 py-2.5 px-4 rounded-2xl bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] transition"
            >
              <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
              <span>Yeni Vaka Çöz</span>
            </button>
          </div>
        </div>

        {/* 3 Net İstatistik Kutusu */}
        <div className="grid grid-cols-3 gap-2">
          <div className={`rounded-2xl border p-2.5 text-center ${cardBg}`}>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Çözülen</div>
            <div className="text-base font-extrabold text-emerald-500 mt-0.5 tabular-nums">
              {totalSolvedCount}
              {!isPro && (
                <span className="text-xs font-normal text-slate-400">
                  /{FREE_QUESTION_LIMIT}
                </span>
              )}
            </div>
          </div>

          <div className={`rounded-2xl border p-2.5 text-center ${cardBg}`}>
            <div className="text-[10px] font-bold text-slate-400 uppercase">ÖSYM Neti</div>
            <div className="text-base font-extrabold text-teal-500 mt-0.5 tabular-nums">
              {summary.net}
            </div>
          </div>

          <div className={`rounded-2xl border p-2.5 text-center ${cardBg}`}>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Tahmini TUS</div>
            <div className="text-base font-extrabold text-amber-500 mt-0.5 tabular-nums">
              {summary.estScore}
            </div>
          </div>
        </div>

        {/* Hızlı Odak & Kronometre Kartı */}
        <button
          type="button"
          onClick={() => {
            triggerHaptic('medium');
            onNavigateTab('odak');
          }}
          className={`w-full text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg} ${
            isLight ? 'hover:border-emerald-300' : 'hover:border-emerald-500/40'
          }`}
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shrink-0 shadow-xs">
              <Timer className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold truncate">
                  Odak & TUS Kronometresi
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/15 text-emerald-500 shrink-0">
                  {studyState.activeTimer.running ? 'Aktif' : `${todayMinutes} dk`}
                </span>
              </div>
              <p className={`text-[11px] truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Pomodoro, 55 Konu Turu, Tekrar Kutusu & Puan
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </button>

        {/* 4 Çalışma Modülü (Sade, Az Yazı, Yeni Soru Öncelikli) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onNavigateTab('vaka', { basket: 'unsolved' });
            }}
            className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-500">
                <CheckSquare className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold truncate">Vaka Soruları</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/15 text-emerald-500 shrink-0">
                    {summary.newVaka} Yeni
                  </span>
                </div>
                <p className={`text-[11px] truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  5 şıklı klinik vaka & ayırıcı tanı
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onNavigateTab('cikmis', { basket: 'unsolved' });
            }}
            className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-500">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold truncate">Çıkmış İkizler</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/15 text-amber-500 shrink-0">
                    {summary.newTwin} Yeni
                  </span>
                </div>
                <p className={`text-[11px] truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  2019–2025 TUS konsept ikizleri
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onNavigateTab('spot', { basket: 'unsolved' });
            }}
            className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-500">
                <Zap className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold truncate">D/Y Spot Kartları</span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-500/15 text-teal-500 shrink-0">
                    {summary.newSpot} Yeni
                  </span>
                </div>
                <p className={`text-[11px] truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Hızlı doğru/yanlış aktif hatırlama
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onNavigateTab('deneme');
            }}
            className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg}`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-500">
                <Award className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold truncate">Deneme & Hesaplayıcı</span>
                </div>
                <p className={`text-[11px] truncate ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Süreli denemeler & klinik formüller
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>
        </div>

        {/* 11 Branş Hızlı Seçim */}
        <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardBg}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-extrabold">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>11 Branş • Yeni Sorudan Başla</span>
            </div>
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                onNavigateTab('analiz');
              }}
              className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 hover:underline"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>Karne</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {TUS_BRANCHES.map((b) => (
              <button
                key={b.id}
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  onNavigateTab('vaka', { basket: 'unsolved', branchId: b.id });
                }}
                className={`text-left px-2.5 py-2 rounded-xl border text-xs font-bold flex items-center justify-between gap-1.5 transition ${
                  isLight
                    ? 'bg-slate-50 hover:bg-emerald-50 border-slate-200/80 text-slate-800'
                    : 'bg-[#071117] hover:bg-emerald-950/30 border-white/8 text-slate-200'
                }`}
              >
                <span className="truncate">
                  <span
                    className={`text-[10px] font-extrabold mr-1 ${
                      b.session === 'TTBT' ? 'text-emerald-500' : 'text-cyan-500'
                    }`}
                  >
                    [{b.session}]
                  </span>
                  {b.shortName}
                </span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              </button>
            ))}
          </div>
        </div>

        {/* Hata Defteri / PRO Şeridi */}
        {!isPro ? (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onOpenPaywall();
            }}
            className={`w-full text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition ${
              isLight
                ? 'bg-gradient-to-r from-amber-50 via-emerald-50 to-teal-50 border-emerald-300 text-slate-900'
                : 'bg-gradient-to-r from-emerald-950/70 via-[#0C1B24] to-teal-950/70 border-emerald-500/35 text-white'
            }`}
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                <Crown className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-extrabold truncate">
                  Ömür Boyu Tam Erişim (PRO) • {priceLabel}
                </div>
                <div className={`text-[11px] truncate ${isLight ? 'text-slate-600' : 'text-slate-300'}`}>
                  Tek ödeme • Tüm {TOTAL_INTERACTIVE_TUS_ITEMS}+ soru & denemeler
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
          </button>
        ) : (
          (summary.vakaWrong > 0 || summary.spotWrong > 0) && (
            <div className={`rounded-2xl border p-3 flex items-center justify-between gap-2 ${cardBg}`}>
              <div className="flex items-center gap-2 text-xs font-bold min-w-0">
                <RotateCcw className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="truncate">{summary.vakaWrong + summary.spotWrong} yanlış bekliyor</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  onNavigateTab(summary.vakaWrong > 0 ? 'vaka' : 'spot', {
                    basket: 'wrong',
                    branchId: 'ALL',
                  });
                }}
                className="px-3 py-1.5 rounded-xl bg-rose-600 text-white text-xs font-extrabold shrink-0"
              >
                Yanlışları Çöz
              </button>
            </div>
          )
        )}
      </div>
    );
  }
);
