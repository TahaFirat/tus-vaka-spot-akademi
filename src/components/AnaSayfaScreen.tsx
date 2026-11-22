import React, { useMemo, useState } from 'react';
import {
  Award,
  CheckSquare,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  Play,
  RotateCcw,
  Sparkles,
  Zap,
} from 'lucide-react';
import {
  STATIC_BRANCH_COUNTS,
  TUS_ALL_EXPECTED_PEARLS,
  TUS_BRANCHES,
  TusBranchId,
} from '../data/tusMedicalRepository';
import { BRANCH_VISUALS } from '../data/branchVisuals';
import { triggerHaptic } from '../services/nativeBridge';
import {
  getTusCountdownParts,
  TusStudyState,
} from '../services/studyStorage';

interface AnaSayfaScreenProps {
  studyState: TusStudyState;
  isPro: boolean;
  isLight: boolean;
  totalSolvedCount: number;
  priceLabel?: string;
  onNavigateTab: (
    tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz' | 'beklenen',
    options?: {
      basket?: 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
      branchId?: 'ALL' | TusBranchId;
      pearlId?: string;
    }
  ) => void;
  onOpenPaywall: (reason?: string) => void;
}

type StudyModeFilter = 'vaka' | 'cikmis' | 'spot';

export const AnaSayfaScreen: React.FC<AnaSayfaScreenProps> = React.memo(
  ({
    studyState,
    isPro,
    isLight,
    onNavigateTab,
    onOpenPaywall,
  }) => {
    const [studyMode, setStudyMode] = useState<StudyModeFilter>('vaka');
    const [sessionTab, setSessionTab] = useState<'ALL' | 'TTBT' | 'KTBT'>('ALL');

    const countdown = useMemo(
      () => getTusCountdownParts(studyState.targetTusDate),
      [studyState.targetTusDate]
    );

    const branchSolvedMap = useMemo(() => {
      const vakaByBranch: Record<string, number> = {};
      const twinByBranch: Record<string, number> = {};
      const spotByBranch: Record<string, number> = {};
      let wrongCount = 0;

      for (const [id, rec] of Object.entries(studyState.vakaAnswers)) {
        vakaByBranch[rec.branchId] = (vakaByBranch[rec.branchId] || 0) + 1;
        if (id.startsWith('twin-')) {
          twinByBranch[rec.branchId] = (twinByBranch[rec.branchId] || 0) + 1;
        }
        if (!rec.isCorrect) wrongCount += 1;
      }
      for (const rec of Object.values(studyState.spotAnswers)) {
        spotByBranch[rec.branchId] = (spotByBranch[rec.branchId] || 0) + 1;
        if (!rec.isCorrect) wrongCount += 1;
      }
      return { vakaByBranch, twinByBranch, spotByBranch, wrongCount };
    }, [studyState.vakaAnswers, studyState.spotAnswers]);

    const dailyPct = Math.min(
      100,
      Math.round(
        (studyState.todaySolvedCount / Math.max(1, studyState.dailyTarget)) * 100
      )
    );

    const visibleBranches = useMemo(
      () =>
        sessionTab === 'ALL'
          ? TUS_BRANCHES
          : TUS_BRANCHES.filter((b) => b.session === sessionTab),
      [sessionTab]
    );

    const cardSurface = isLight
      ? 'bg-white border-slate-200/80 shadow-[0_1px_2px_rgba(15,23,42,0.04)]'
      : 'bg-[#121826] border-white/8';

    const modeTabs: Array<{
      id: StudyModeFilter | 'beklenen';
      label: string;
      icon: React.ReactNode;
      count: string;
    }> = [
      {
        id: 'vaka',
        label: 'Vaka',
        icon: <CheckSquare className="w-4 h-4" />,
        count: STATIC_BRANCH_COUNTS.ALL.vaka.toLocaleString('tr-TR'),
      },
      {
        id: 'cikmis',
        label: 'İkiz',
        icon: <Sparkles className="w-4 h-4" />,
        count: STATIC_BRANCH_COUNTS.ALL.twin.toLocaleString('tr-TR'),
      },
      {
        id: 'spot',
        label: 'Spot',
        icon: <Zap className="w-4 h-4" />,
        count: STATIC_BRANCH_COUNTS.ALL.spot.toLocaleString('tr-TR'),
      },
      {
        id: 'beklenen',
        label: 'Altın',
        icon: <Flame className="w-4 h-4" />,
        count: TUS_ALL_EXPECTED_PEARLS.length.toLocaleString('tr-TR'),
      },
    ];

    const getBranchNumbers = (branchId: TusBranchId) => {
      const counts = STATIC_BRANCH_COUNTS[branchId];
      if (studyMode === 'cikmis') {
        return {
          total: counts?.twin || 0,
          solved: branchSolvedMap.twinByBranch[branchId] || 0,
        };
      }
      if (studyMode === 'spot') {
        return {
          total: counts?.spot || 0,
          solved: branchSolvedMap.spotByBranch[branchId] || 0,
        };
      }
      return {
        total: counts?.vaka || 0,
        solved: branchSolvedMap.vakaByBranch[branchId] || 0,
      };
    };

    const continueBranch =
      studyMode === 'vaka'
        ? studyState.vakaBranchPref
        : studyMode === 'cikmis'
        ? studyState.twinBranchPref
        : studyState.spotBranchPref;

    return (
      <div className="space-y-3 pb-2">
        {/* 1. Ultra-Compact Single-Row Daily Progress Strip (Zero Paragraphs!) */}
        <div
          className={`rounded-2xl border px-3.5 py-3 flex items-center justify-between gap-3 ${cardSurface}`}
        >
          <div className="min-w-0 flex-1 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-extrabold">
              <span
                className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] tabular-nums ${
                  isLight
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-blue-500/15 text-blue-300'
                }`}
              >
                <Clock className="w-3 h-3" />
                TUS’a {countdown.days}g
              </span>
              <span className="inline-flex items-center gap-0.5 text-[11px] text-amber-500 tabular-nums">
                <Flame className="w-3.5 h-3.5 fill-current" />
                {studyState.streakDays}
              </span>
              <span
                className={`text-[11px] font-bold tabular-nums ml-auto ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {studyState.todaySolvedCount}/{studyState.dailyTarget}
              </span>
            </div>

            <div
              className={`h-2 rounded-full overflow-hidden ${
                isLight ? 'bg-slate-100' : 'bg-white/10'
              }`}
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500 transition-all duration-300"
                style={{ width: `${Math.max(4, dailyPct)}%` }}
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onNavigateTab(studyMode, {
                basket: 'unsolved',
                branchId: continueBranch,
              });
            }}
            className="shrink-0 h-10 px-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 active:scale-[0.97] text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-sm shadow-blue-600/25 transition"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Çöz</span>
          </button>
        </div>

        {/* 2. Compact 4-Tile Mode Selector (Icon + 1 Word + Number ONLY) */}
        <div className="grid grid-cols-4 gap-2">
          {modeTabs.map((item) => {
            const active = item.id === studyMode;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  if (item.id === 'beklenen') {
                    onNavigateTab('beklenen');
                  } else {
                    setStudyMode(item.id);
                  }
                }}
                className={`rounded-2xl border py-2.5 px-1.5 flex flex-col items-center justify-center gap-1 transition active:scale-[0.97] ${
                  active
                    ? 'bg-blue-600 border-blue-600 text-white shadow-sm shadow-blue-600/20'
                    : cardSurface
                }`}
              >
                <span
                  className={
                    active
                      ? 'text-white'
                      : item.id === 'beklenen'
                      ? 'text-amber-500'
                      : isLight
                      ? 'text-blue-600'
                      : 'text-blue-400'
                  }
                >
                  {item.icon}
                </span>
                <span className="text-[11.5px] font-extrabold leading-none">
                  {item.label}
                </span>
                <span
                  className={`text-[10px] font-bold tabular-nums leading-none ${
                    active
                      ? 'text-blue-100'
                      : isLight
                      ? 'text-slate-400'
                      : 'text-slate-500'
                  }`}
                >
                  {item.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Subject-First Section: Pick a Subject to Start Solving */}
        <div className="space-y-2">
          <div className="flex items-center justify-between gap-2 px-0.5">
            <h2 className="text-sm font-extrabold tracking-tight">
              Ders Seç
            </h2>

            <div
              className={`inline-flex rounded-xl p-0.5 ${
                isLight ? 'bg-slate-200/75' : 'bg-white/[0.07]'
              }`}
            >
              {[
                { id: 'ALL' as const, label: 'Tümü' },
                { id: 'TTBT' as const, label: 'Temel' },
                { id: 'KTBT' as const, label: 'Klinik' },
              ].map((seg) => {
                const active = sessionTab === seg.id;
                return (
                  <button
                    key={seg.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('selection');
                      setSessionTab(seg.id);
                    }}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                      active
                        ? isLight
                          ? 'bg-white text-slate-900 shadow-2xs'
                          : 'bg-[#1D263B] text-white'
                        : isLight
                        ? 'text-slate-500'
                        : 'text-slate-400'
                    }`}
                  >
                    {seg.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Crisp Subject List / 2-Col Tablet Grid (Tusleap + UWorld + Duolingo Hybrid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {visibleBranches.map((branch) => {
              const vis = BRANCH_VISUALS[branch.id];
              const Icon = vis.icon;
              const { total, solved } = getBranchNumbers(branch.id);
              const pct = total > 0 ? Math.min(100, Math.round((solved / total) * 100)) : 0;

              return (
                <button
                  key={branch.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    onNavigateTab(studyMode, {
                      basket: 'unsolved',
                      branchId: branch.id,
                    });
                  }}
                  className={`group rounded-2xl border px-3 py-2.5 flex items-center gap-3 text-left transition active:scale-[0.985] ${cardSurface}`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${
                      isLight
                        ? `${vis.lightBg} ${vis.lightText}`
                        : `${vis.darkBg} ${vis.darkText}`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[13px] font-extrabold truncate">
                        {branch.shortName}
                      </span>
                      <span
                        className={`text-[11px] font-bold tabular-nums shrink-0 ${
                          isLight ? 'text-slate-400' : 'text-slate-500'
                        }`}
                      >
                        {total.toLocaleString('tr-TR')}
                      </span>
                    </div>

                    <div
                      className={`h-1.5 rounded-full overflow-hidden ${
                        isLight ? 'bg-slate-100' : 'bg-white/8'
                      }`}
                    >
                      <div
                        className={`h-full rounded-full ${vis.barColor} transition-all duration-300`}
                        style={{ width: `${Math.max(pct > 0 ? 4 : 0, pct)}%` }}
                      />
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-slate-400 shrink-0 group-hover:translate-x-0.5 transition" />
                </button>
              );
            })}
          </div>
        </div>

        {/* 4. Compact 2-Pill Bottom Utility Row (Hata Defteri + Deneme) */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onNavigateTab('vaka', { basket: 'wrong', branchId: 'ALL' });
            }}
            className={`rounded-2xl border px-3 py-2.5 flex items-center justify-between gap-2 text-xs font-extrabold transition active:scale-[0.98] ${cardSurface}`}
          >
            <span className="inline-flex items-center gap-1.5 truncate">
              <RotateCcw className="w-4 h-4 text-rose-500 shrink-0" />
              <span className="truncate">Hata Defteri</span>
            </span>
            <span className="text-[11px] font-extrabold text-rose-500 tabular-nums shrink-0">
              {branchSolvedMap.wrongCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onNavigateTab('deneme');
            }}
            className={`rounded-2xl border px-3 py-2.5 flex items-center justify-between gap-2 text-xs font-extrabold transition active:scale-[0.98] ${cardSurface}`}
          >
            <span className="inline-flex items-center gap-1.5 truncate">
              <Award className="w-4 h-4 text-blue-500 shrink-0" />
              <span className="truncate">Deneme & Araç</span>
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          </button>
        </div>

        {/* Minimal Single-Line PRO Pill (Demo users only) */}
        {!isPro && (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              onOpenPaywall();
            }}
            className="w-full rounded-2xl px-3.5 py-2.5 bg-gradient-to-r from-blue-600 to-emerald-600 text-white flex items-center justify-between gap-2 text-xs font-extrabold shadow-xs active:scale-[0.99] transition"
          >
            <span className="inline-flex items-center gap-2 truncate">
              <Crown className="w-4 h-4 text-amber-300 shrink-0" />
              <span className="truncate">TUS Akademi PRO • Sınırsız Erişim</span>
            </span>
            <ChevronRight className="w-4 h-4 shrink-0" />
          </button>
        )}
      </div>
    );
  }
);
