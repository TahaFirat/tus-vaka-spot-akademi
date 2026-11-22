import React, { useMemo, useState } from 'react';
import {
  ChevronRight,
  Clock,
  Flame,
} from 'lucide-react';
import {
  STATIC_BRANCH_COUNTS,
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
    isLight,
    onNavigateTab,
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

      for (const [id, rec] of Object.entries(studyState.vakaAnswers)) {
        vakaByBranch[rec.branchId] = (vakaByBranch[rec.branchId] || 0) + 1;
        if (id.startsWith('twin-')) {
          twinByBranch[rec.branchId] = (twinByBranch[rec.branchId] || 0) + 1;
        }
      }
      for (const rec of Object.values(studyState.spotAnswers)) {
        spotByBranch[rec.branchId] = (spotByBranch[rec.branchId] || 0) + 1;
      }
      return { vakaByBranch, twinByBranch, spotByBranch };
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
      ? 'bg-white border-slate-200/85 shadow-[0_1px_2px_rgba(15,23,42,0.03)]'
      : 'bg-[#121826] border-white/8';

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

    return (
      <div className="space-y-3.5 pb-4">
        {/* 1. Minimal Status Bar (Zero Extra Buttons, Zero Noise) */}
        <div className={`rounded-2xl border px-4 py-3 space-y-2 ${cardSurface}`}>
          <div className="flex items-center justify-between gap-2 text-xs font-extrabold">
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs tabular-nums ${
                  isLight
                    ? 'bg-blue-50 text-blue-700'
                    : 'bg-blue-500/15 text-blue-300'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                TUS’a {countdown.days} Gün
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-amber-500 tabular-nums">
                <Flame className="w-4 h-4 fill-current" />
                {studyState.streakDays}
              </span>
            </div>
            <span
              className={`text-xs font-bold tabular-nums ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              Bugün {studyState.todaySolvedCount}/{studyState.dailyTarget}
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

        {/* 2. Generous 3-Way Question Type Switcher (44px Height — Tap Subject Below to Solve!) */}
        <div
          className={`grid grid-cols-3 rounded-2xl p-1 ${
            isLight ? 'bg-slate-200/75' : 'bg-white/[0.07]'
          }`}
        >
          {[
            { id: 'vaka' as const, label: 'Vaka' },
            { id: 'cikmis' as const, label: 'Çıkmış İkiz' },
            { id: 'spot' as const, label: 'D/Y Spot' },
          ].map((m) => {
            const active = studyMode === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setStudyMode(m.id);
                }}
                className={`h-10 rounded-xl text-[13px] font-extrabold transition ${
                  active
                    ? 'bg-blue-600 text-white shadow-xs'
                    : isLight
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {m.label}
              </button>
            );
          })}
        </div>

        {/* 3. Subject-First List: Tap Any Subject -> Straight Into Clean Question Solver */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between gap-2 px-0.5">
            <h1 className="text-[15px] font-extrabold tracking-tight">
              Dersler
            </h1>

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
                    className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition ${
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

          {/* Generous, Tactile 64px Subject Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {visibleBranches.map((branch) => {
              const vis = BRANCH_VISUALS[branch.id];
              const Icon = vis.icon;
              const { total, solved } = getBranchNumbers(branch.id);
              const pct =
                total > 0 ? Math.min(100, Math.round((solved / total) * 100)) : 0;

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
                  className={`group min-h-[64px] rounded-2xl border px-3.5 py-3 flex items-center gap-3.5 text-left transition active:scale-[0.985] ${cardSurface}`}
                >
                  <div
                    className={`w-11 h-11 rounded-2xl border flex items-center justify-center shrink-0 ${
                      isLight
                        ? `${vis.lightBg} ${vis.lightText}`
                        : `${vis.darkBg} ${vis.darkText}`
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0 flex-1 space-y-1.5">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[15px] font-extrabold truncate leading-normal">
                        {branch.shortName}
                      </span>
                      <span
                        className={`text-xs font-bold tabular-nums shrink-0 ${
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

                  <ChevronRight className="w-4.5 h-4.5 text-slate-400 shrink-0 group-hover:translate-x-0.5 transition" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);
