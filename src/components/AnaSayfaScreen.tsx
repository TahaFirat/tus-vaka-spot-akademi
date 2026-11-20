import React, { useMemo } from 'react';
import {
  Award,
  BookOpen,
  CheckSquare,
  ChevronRight,
  Crown,
  Flame,
  RotateCcw,
  Sparkles,
  Stethoscope,
  Target,
  Zap,
} from 'lucide-react';
import {
  STATIC_BRANCH_COUNTS,
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
    tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz',
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
      const vakaEntries = Object.entries(studyState.vakaAnswers);
      const spotEntries = Object.entries(studyState.spotAnswers);

      let vakaCorrect = 0;
      let solvedTwinCount = 0;
      for (const [id, r] of vakaEntries) {
        if (r.isCorrect) vakaCorrect += 1;
        if (id.startsWith('twin-')) solvedTwinCount += 1;
      }
      const vakaWrong = vakaEntries.length - vakaCorrect;

      let spotCorrect = 0;
      for (const [, r] of spotEntries) {
        if (r.isCorrect) spotCorrect += 1;
      }
      const spotWrong = spotEntries.length - spotCorrect;

      const totalCorrect = vakaCorrect + spotCorrect;
      const totalWrong = vakaWrong + spotWrong;
      const net = calculateOsymNet(totalCorrect, totalWrong);
      const estScore =
        totalSolvedCount > 0
          ? calculateEstimatedTusScore(net, totalSolvedCount)
          : 45;

      let newVaka: number;
      let newTwin: number;
      let newSpot: number;

      if (isPro) {
        newVaka = Math.max(0, STATIC_BRANCH_COUNTS.ALL.vaka - vakaEntries.length);
        // Count exact solved twins accurately across both legacy and structured twin IDs
        let exactTwinSolved = solvedTwinCount;
        if (exactTwinSolved === 0 && vakaEntries.length > 0) {
          const twinIds = new Set(TUS_OSYM_TWIN_QUESTIONS.map((q) => q.id));
          for (const [id] of vakaEntries) {
            if (twinIds.has(id)) exactTwinSolved += 1;
          }
        }
        newTwin = Math.max(0, STATIC_BRANCH_COUNTS.ALL.twin - exactTwinSolved);
        newSpot = Math.max(0, STATIC_BRANCH_COUNTS.ALL.spot - spotEntries.length);
      } else {
        newVaka = TUS_VAKA_QUESTIONS.slice(0, FREE_QUESTION_LIMIT).filter(
          (q) => !studyState.vakaAnswers[q.id]
        ).length;
        newTwin = TUS_OSYM_TWIN_QUESTIONS.slice(0, FREE_QUESTION_LIMIT).filter(
          (q) => !studyState.vakaAnswers[q.id]
        ).length;
        newSpot = TUS_SPOT_CARDS.slice(0, FREE_QUESTION_LIMIT).filter(
          (s) => !studyState.spotAnswers[s.id]
        ).length;
      }

      return {
        vakaWrong,
        spotWrong,
        totalWrong,
        net,
        estScore,
        newVaka,
        newTwin,
        newSpot,
      };
    }, [studyState.vakaAnswers, studyState.spotAnswers, totalSolvedCount, isPro]);

    const dailyPct = Math.min(
      100,
      Math.round(
        (studyState.todaySolvedCount / Math.max(1, studyState.dailyTarget)) * 100
      )
    );

    const cardBg = isLight
      ? 'bg-white border-slate-200/90 shadow-xs'
      : 'bg-[#0C1B24] border-white/10 shadow-md';

    const totalPoolFmt = TOTAL_INTERACTIVE_TUS_ITEMS.toLocaleString('tr-TR');
    const vakaTotalFmt = STATIC_BRANCH_COUNTS.ALL.vaka.toLocaleString('tr-TR');
    const spotTotalFmt = STATIC_BRANCH_COUNTS.ALL.spot.toLocaleString('tr-TR');

    return (
      <div className="space-y-3">
        {/* Tekil Otoriter Karşılama & ÖSYM Geri Sayım Kartı */}
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
                <span className="truncate">TTBT & KTBT • 11 BRANŞ</span>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
                TUS Vaka & Spot
              </h1>
              <p className="text-[11.5px] text-emerald-100/90 leading-snug">
                {totalPoolFmt}+ hatasız içerik • %100 çevrimdışı
              </p>
            </div>

            <TusDynamicCountdownCard
              targetDate={studyState.targetTusDate}
              isLight={isLight}
              variant="hero"
            />
          </div>

          {/* Tekil Günlük Soru Hedefi & Seri Çubuğu */}
          <div className="mt-3.5 pt-3 border-t border-white/15 space-y-1.5">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="inline-flex items-center gap-1.5 text-emerald-100">
                <Target className="w-3.5 h-3.5 text-emerald-300" />
                <span>
                  Bugün: {studyState.todaySolvedCount}/{studyState.dailyTarget} Soru
                </span>
              </span>
              <span className="inline-flex items-center gap-1 text-amber-300">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                <span>{studyState.streakDays} Gün Seri</span>
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-black/30 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-300 to-cyan-300 transition-all duration-300"
                style={{ width: `${dailyPct}%` }}
              />
            </div>
          </div>
        </div>

        {/* 3 Özet Performans Göstergesi */}
        <div className="grid grid-cols-3 gap-2">
          <div className={`rounded-2xl border p-2.5 text-center ${cardBg}`}>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Çözülen</div>
            <div className="text-base font-extrabold text-emerald-500 mt-0.5 tabular-nums">
              {totalSolvedCount.toLocaleString('tr-TR')}
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

        {/* 4 Saf Soru & Sınav Modülü (Mükerrer Odak Kartı Kaldırıldı) */}
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
                  <span className="text-xs sm:text-sm font-extrabold truncate">
                    Vaka Bankası
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/15 text-emerald-500 shrink-0 tabular-nums">
                    {summary.newVaka.toLocaleString('tr-TR')} Yeni
                  </span>
                </div>
                <p
                  className={`text-[11px] truncate ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {vakaTotalFmt} beş şıklı klinik soru
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
                  <span className="text-xs sm:text-sm font-extrabold truncate">
                    Çıkmış İkizler
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/15 text-amber-500 shrink-0 tabular-nums">
                    {summary.newTwin.toLocaleString('tr-TR')} Yeni
                  </span>
                </div>
                <p
                  className={`text-[11px] truncate ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  2019–2025 ÖSYM konsept sentezleri
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
                  <span className="text-xs sm:text-sm font-extrabold truncate">
                    D/Y Spot Kartları
                  </span>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-500/15 text-teal-500 shrink-0 tabular-nums">
                    {summary.newSpot.toLocaleString('tr-TR')} Yeni
                  </span>
                </div>
                <p
                  className={`text-[11px] truncate ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  {spotTotalFmt} doğru/yanlış aktif kart
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
                <span className="text-xs sm:text-sm font-extrabold truncate block">
                  Deneme & Hesaplayıcı
                </span>
                <p
                  className={`text-[11px] truncate ${
                    isLight ? 'text-slate-500' : 'text-slate-400'
                  }`}
                >
                  Süreli sınavlar & 4 yatak başı formül
                </p>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
          </button>
        </div>

        {/* Yalnızca Yanlış Varsa Açılan Tek Satırlık Akıllı Hata Şeridi */}
        {summary.totalWrong > 0 && (
          <div
            className={`rounded-2xl border px-3.5 py-2.5 flex items-center justify-between gap-2 ${cardBg}`}
          >
            <div className="flex items-center gap-2 min-w-0 text-xs font-extrabold">
              <RotateCcw className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="truncate">
                Hata Defteri: {summary.vakaWrong} Vaka • {summary.spotWrong} Spot
              </span>
            </div>
            <div className="flex items-center gap-1.5 shrink-0">
              {summary.vakaWrong > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    onNavigateTab('vaka', { basket: 'wrong', branchId: 'ALL' });
                  }}
                  className="px-2.5 py-1 rounded-xl bg-rose-500/15 text-rose-500 text-[11px] font-extrabold"
                >
                  Vakalar
                </button>
              )}
              {summary.spotWrong > 0 && (
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    onNavigateTab('spot', { basket: 'wrong', branchId: 'ALL' });
                  }}
                  className="px-2.5 py-1 rounded-xl bg-amber-500/15 text-amber-500 text-[11px] font-extrabold"
                >
                  Spotlar
                </button>
              )}
            </div>
          </div>
        )}

        {/* 11 TUS Branşı Hızlı Başlangıç (Canlı Branş Soru Hacimleriyle) */}
        <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardBg}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-xs font-extrabold">
              <BookOpen className="w-4 h-4 text-emerald-500" />
              <span>11 Branş • Yeni Sorudan Başla</span>
            </div>
            <span className="text-[10.5px] font-bold text-slate-400">
              TTBT & KTBT
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {TUS_BRANCHES.map((b) => {
              const count = STATIC_BRANCH_COUNTS[b.id]?.total || 0;
              return (
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
                  <span className="truncate min-w-0">
                    <span
                      className={`text-[10px] font-extrabold mr-1 ${
                        b.session === 'TTBT' ? 'text-emerald-500' : 'text-cyan-500'
                      }`}
                    >
                      {b.session}
                    </span>
                    {b.shortName}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 tabular-nums shrink-0">
                    {count.toLocaleString('tr-TR')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Sadece Demo Kullanıcısına Sade PRO Şeridi */}
        {!isPro && (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onOpenPaywall();
            }}
            className="w-full text-left rounded-2xl p-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white flex items-center justify-between gap-3 shadow-sm active:scale-[0.99] transition"
          >
            <div className="flex items-center gap-2.5 min-w-0">
              <Crown className="w-5 h-5 text-amber-300 shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-extrabold truncate">
                  Ömür Boyu Tam Paket • {priceLabel}
                </div>
                <div className="text-[11px] text-emerald-100 truncate">
                  Tek ödeme • Tüm {totalPoolFmt}+ vaka, ikiz ve spot sınırsız
                </div>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-white shrink-0" />
          </button>
        )}
      </div>
    );
  }
);
