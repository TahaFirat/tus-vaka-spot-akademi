import React, { useMemo } from 'react';
import {
  Award,
  BarChart3,
  BookOpen,
  CheckSquare,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  Play,
  RotateCcw,
  Sparkles,
  Stethoscope,
  Target,
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
import { FREE_QUESTION_LIMIT, triggerHaptic } from '../services/nativeBridge';
import {
  calculateEstimatedTusScore,
  calculateOsymNet,
  getTusCountdownParts,
  TusStudyState,
} from '../services/studyStorage';

interface AnaSayfaScreenProps {
  studyState: TusStudyState;
  isPro: boolean;
  isLight: boolean;
  totalSolvedCount: number;
  onNavigateTab: (
    tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz',
    options?: {
      basket?: 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
      branchId?: 'ALL' | TusBranchId;
    }
  ) => void;
  onOpenPaywall: (reason?: string) => void;
}

export const AnaSayfaScreen: React.FC<AnaSayfaScreenProps> = ({
  studyState,
  isPro,
  isLight,
  totalSolvedCount,
  onNavigateTab,
  onOpenPaywall,
}) => {
  const countdown = useMemo(
    () => getTusCountdownParts(studyState.targetTusDate),
    [studyState.targetTusDate]
  );

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

    const osymTwinCount = TUS_VAKA_QUESTIONS.filter((q) =>
      q.subTopic.includes('ÖSYM İkizi')
    ).length;

    return {
      totalCorrect,
      totalWrong,
      vakaWrong,
      spotWrong,
      net,
      estScore,
      osymTwinCount,
    };
  }, [studyState.vakaAnswers, studyState.spotAnswers, totalSolvedCount]);

  const dailyPct = Math.min(
    100,
    Math.round(
      (studyState.todaySolvedCount / Math.max(1, studyState.dailyTarget)) * 100
    )
  );

  const cardBg = isLight
    ? 'bg-white border-slate-200/90 shadow-sm'
    : 'bg-[#0C1B24] border-white/10 shadow-lg';

  return (
    <div className="space-y-3">
      {/* Hero Welcome & Quick Start Banner */}
      <div
        className={`rounded-3xl border p-4 sm:p-5 relative overflow-hidden ${
          isLight
            ? 'bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-700 border-emerald-500 text-white shadow-md'
            : 'bg-gradient-to-br from-emerald-900/90 via-[#0C222C] to-[#08151C] border-emerald-500/35 text-white shadow-xl'
        }`}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-1 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 backdrop-blur-xs text-[11px] font-extrabold tracking-wide">
              <Stethoscope className="w-3.5 h-3.5 text-emerald-200" />
              <span>ÖSYM TTBT & KTBT • 11 BRANŞ</span>
            </div>
            <h1 className="text-lg sm:text-xl font-extrabold tracking-tight leading-snug">
              TUS Vaka & Spot Akademi
            </h1>
            <p className="text-xs text-emerald-100/90 leading-relaxed max-w-md">
              {TOTAL_INTERACTIVE_TUS_ITEMS}+ açıklamalı 5 şıklı vaka sorusu,
              ÖSYM çıkmış soru ikizleri ve aktif hatırlama spot kartları.
            </p>
          </div>

          {/* Compact Live TUS Countdown Box */}
          <div className="shrink-0 rounded-2xl bg-black/25 backdrop-blur-md border border-white/15 px-3 py-2 text-center">
            <div className="flex items-center justify-center gap-1 text-[10px] font-extrabold uppercase text-emerald-200">
              <Clock className="w-3 h-3" />
              <span>TUS'a Kalan</span>
            </div>
            <div className="text-lg font-extrabold tabular-nums leading-tight mt-0.5">
              {countdown.days} <span className="text-xs font-bold">Gün</span>
            </div>
            <div className="text-[10px] text-emerald-100/80 tabular-nums">
              {String(countdown.hours).padStart(2, '0')}s{' '}
              {String(countdown.minutes).padStart(2, '0')}dk
            </div>
          </div>
        </div>

        {/* Daily Goal Progress Bar + Primary CTA */}
        <div className="mt-4 pt-3 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1 flex-1">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="inline-flex items-center gap-1 text-emerald-100">
                <Target className="w-3.5 h-3.5 text-emerald-300" />
                Günlük Hedef: {studyState.todaySolvedCount}/
                {studyState.dailyTarget} Soru
              </span>
              <span className="inline-flex items-center gap-1 text-amber-300">
                <Flame className="w-3.5 h-3.5 fill-amber-400" />
                {studyState.streakDays} Gün Seri (%{dailyPct})
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
              onNavigateTab('vaka', { basket: 'all', branchId: 'ALL' });
            }}
            className="shrink-0 py-2.5 px-4 rounded-2xl bg-white text-emerald-950 hover:bg-emerald-50 font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md active:scale-[0.98] transition"
          >
            <Play className="w-3.5 h-3.5 fill-current text-emerald-600" />
            <span>Vaka Çözmeye Başla</span>
          </button>
        </div>
      </div>

      {/* Quick Stats Strip */}
      <div className="grid grid-cols-3 gap-2">
        <div className={`rounded-2xl border p-2.5 text-center ${cardBg}`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase">
            Çözülen
          </div>
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
          <div className="text-[10px] font-bold text-slate-400 uppercase">
            ÖSYM Neti
          </div>
          <div className="text-base font-extrabold text-teal-500 mt-0.5 tabular-nums">
            {summary.net}
          </div>
        </div>

        <div className={`rounded-2xl border p-2.5 text-center ${cardBg}`}>
          <div className="text-[10px] font-bold text-slate-400 uppercase">
            Tahmini TUS
          </div>
          <div className="text-base font-extrabold text-amber-500 mt-0.5 tabular-nums">
            {summary.estScore}
          </div>
        </div>
      </div>

      {/* 4 Main Study Modules (2x2 Grid on Tablet, 1-col / 2-col Clean Bento on Mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {/* Module 1: 5 Şıklı Vaka & Konu Testi */}
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            onNavigateTab('vaka', { basket: 'all', branchId: 'ALL' });
          }}
          className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg} ${
            isLight
              ? 'hover:border-emerald-300'
              : 'hover:border-emerald-500/40'
          }`}
        >
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-500">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold truncate">
                  5 Şıklı Vaka & Konu Testi
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-500/15 text-emerald-500 shrink-0">
                  {TUS_VAKA_QUESTIONS.length} Soru
                </span>
              </div>
              <p
                className={`text-[11px] mt-0.5 line-clamp-1 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Klinik ipucu vurgulu, şık elemeli ve ayırıcı tanılı 5 şıklı testler
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </button>

        {/* Module 2: Doğru / Yanlış Spot Öğretici */}
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            onNavigateTab('spot', { basket: 'all', branchId: 'ALL' });
          }}
          className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg} ${
            isLight ? 'hover:border-teal-300' : 'hover:border-teal-500/40'
          }`}
        >
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 text-teal-500">
              <Zap className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold truncate">
                  Doğru / Yanlış Spot Kartları
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-teal-500/15 text-teal-500 shrink-0">
                  {TUS_SPOT_CARDS.length} Spot
                </span>
              </div>
              <p
                className={`text-[11px] mt-0.5 line-clamp-1 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                İlk tercih vs. altın standart karşılaştırmalı hızlı spot tekrar
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </button>

        {/* Module 3: ÖSYM Çıkmış Soru İkizleri (Dedicated Tab) */}
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            onNavigateTab('cikmis', { basket: 'all', branchId: 'ALL' });
          }}
          className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg} ${
            isLight ? 'hover:border-amber-300' : 'hover:border-amber-500/40'
          }`}
        >
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center shrink-0 text-amber-500">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold truncate">
                  ÖSYM Çıkmış Soru İkizleri
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-amber-500/15 text-amber-500 shrink-0">
                  {TUS_OSYM_TWIN_QUESTIONS.length} İkiz
                </span>
              </div>
              <p
                className={`text-[11px] mt-0.5 line-clamp-1 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                2021–2025 TUS sınavlarında sorgulanan konseptlerin özgün ikizleri
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </button>

        {/* Module 4: TUS Deneme & Klinik Rehber */}
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            onNavigateTab('deneme');
          }}
          className={`text-left rounded-2xl border p-3.5 flex items-center justify-between gap-3 transition active:scale-[0.99] ${cardBg} ${
            isLight ? 'hover:border-cyan-300' : 'hover:border-cyan-500/40'
          }`}
        >
          <div className="flex items-start gap-3 min-w-0">
            <div className="w-10 h-10 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center shrink-0 text-cyan-500">
              <Award className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <span className="text-xs sm:text-sm font-extrabold truncate">
                  TUS Deneme & Klinik Rehber
                </span>
                <span className="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-cyan-500/15 text-cyan-500 shrink-0">
                  Simülatör
                </span>
              </div>
              <p
                className={`text-[11px] mt-0.5 line-clamp-1 ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                ÖSYM net hesaplamalı denemeler, antidot ve enzim tabloları
              </p>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 shrink-0" />
        </button>
      </div>

      {/* Quick Branch Picker (11 TUS Branches) */}
      <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardBg}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-extrabold">
            <BookOpen className="w-4 h-4 text-emerald-500" />
            <span>11 TUS Branşı • Doğrudan Derse Gir</span>
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
            <span>Detaylı Karne</span>
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
          {TUS_BRANCHES.map((b) => (
            <button
              key={b.id}
              type="button"
              onClick={() => {
                triggerHaptic('light');
                onNavigateTab('vaka', { basket: 'all', branchId: b.id });
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

      {/* Hata Defteri / PRO Banner */}
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
                Ömür Boyu Tam Erişim (PRO) • Tek Seferlik 49,99 ₺
              </div>
              <div
                className={`text-[11px] truncate ${
                  isLight ? 'text-slate-600' : 'text-slate-300'
                }`}
              >
                30 soruluk demo sınırını kaldırın, tüm {TOTAL_INTERACTIVE_TUS_ITEMS}+
                soruyu sınırsız açın.
              </div>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-emerald-500 shrink-0" />
        </button>
      ) : (
        (summary.vakaWrong > 0 || summary.spotWrong > 0) && (
          <div className={`rounded-2xl border p-3 flex items-center justify-between gap-2 ${cardBg}`}>
            <div className="flex items-center gap-2 text-xs font-bold">
              <RotateCcw className="w-4 h-4 text-rose-500 shrink-0" />
              <span>
                Hata Defterinde {summary.vakaWrong + summary.spotWrong} yanlışınız var
              </span>
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
};
