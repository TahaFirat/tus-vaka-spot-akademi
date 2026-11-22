import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import {
  STATIC_BRANCH_COUNTS,
  TUS_BRANCHES,
  TusBranchId,
} from '../data/tusMedicalRepository';
import { BRANCH_VISUALS } from '../data/branchVisuals';
import { triggerHaptic } from '../services/nativeBridge';
import { TusStudyState, UPCOMING_TUS_EXAMS } from '../services/studyStorage';

interface OnboardingModalProps {
  isOpen: boolean;
  isReplay?: boolean;
  isLight: boolean;
  studyState: TusStudyState;
  onUpdateStudyState: (updater: (prev: TusStudyState) => TusStudyState) => void;
  onComplete: (chosenMode: 'akademi' | 'odak', chosenBranchId?: TusBranchId) => void;
  onDismissReplay?: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  isReplay = false,
  isLight,
  studyState,
  onUpdateStudyState,
  onComplete,
  onDismissReplay,
}) => {
  const [groupTab, setGroupTab] = useState<'ALL' | 'TTBT' | 'KTBT'>('ALL');

  if (!isOpen) return null;

  const visibleBranches =
    groupTab === 'ALL'
      ? TUS_BRANCHES
      : TUS_BRANCHES.filter((b) => b.session === groupTab);

  const handleSkip = () => {
    triggerHaptic('light');
    if (isReplay && onDismissReplay) {
      onDismissReplay();
    } else {
      onComplete('akademi');
    }
  };

  const handlePickSubject = (branchId: TusBranchId) => {
    triggerHaptic('success');
    onComplete('akademi', branchId);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Hızlı Başlangıç"
    >
      <div
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl p-4 sm:p-5 space-y-4 ${
          isLight
            ? 'bg-white border-slate-200/90 text-slate-900'
            : 'bg-[#101624] border-white/12 text-slate-100'
        }`}
      >
        {/* Ultra-Clean Top Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <img
              src="/icon-192.png"
              alt="TUS Akademi"
              className="w-9 h-9 rounded-2xl shadow-xs shrink-0 object-cover"
            />
            <div className="min-w-0">
              <h2 className="text-base font-extrabold tracking-tight leading-tight">
                Hangi dersle başlayalım?
              </h2>
              <p
                className={`text-[11px] font-medium ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                Ders seç, doğrudan soruya geç
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSkip}
            className={`px-2.5 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1 transition shrink-0 ${
              isLight
                ? 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                : 'bg-white/8 text-slate-300 hover:bg-white/14'
            }`}
          >
            {isReplay ? <X className="w-3.5 h-3.5" /> : <span>Atla</span>}
          </button>
        </div>

        {/* Compact Target Exam Pills */}
        <div className="grid grid-cols-2 gap-1.5">
          {UPCOMING_TUS_EXAMS.slice(0, 2).map((exam) => {
            const active = studyState.targetTusDate === exam.date;
            return (
              <button
                key={exam.date}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  onUpdateStudyState((p) => ({ ...p, targetTusDate: exam.date }));
                }}
                className={`py-2 px-3 rounded-xl border text-center text-xs font-extrabold transition ${
                  active
                    ? 'bg-blue-600 border-blue-600 text-white shadow-xs'
                    : isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-700'
                    : 'bg-white/[0.04] border-white/10 text-slate-300'
                }`}
              >
                {exam.label.replace('2027-TUS ', '2027 ')}
              </button>
            );
          })}
        </div>

        {/* Segmented Temel / Klinik Filter */}
        <div
          className={`grid grid-cols-3 rounded-xl p-1 ${
            isLight ? 'bg-slate-100' : 'bg-white/[0.06]'
          }`}
        >
          {[
            { id: 'ALL' as const, label: 'Tümü (11)' },
            { id: 'TTBT' as const, label: 'Temel (7)' },
            { id: 'KTBT' as const, label: 'Klinik (4)' },
          ].map((tab) => {
            const active = groupTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setGroupTab(tab.id);
                }}
                className={`py-1.5 rounded-lg text-[11.5px] font-extrabold transition ${
                  active
                    ? isLight
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'bg-[#1D263B] text-white shadow-xs'
                    : isLight
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Clean Visual Subject Grid (Duolingo + Tusleap Style — Zero Paragraphs!) */}
        <div className="grid grid-cols-2 gap-2">
          {visibleBranches.map((branch) => {
            const vis = BRANCH_VISUALS[branch.id];
            const Icon = vis.icon;
            const count = STATIC_BRANCH_COUNTS[branch.id]?.vaka || 0;
            return (
              <button
                key={branch.id}
                type="button"
                onClick={() => handlePickSubject(branch.id)}
                className={`group rounded-2xl border p-2.5 flex items-center gap-2.5 text-left transition active:scale-[0.98] ${
                  isLight
                    ? 'bg-white border-slate-200/90 hover:border-blue-400 hover:bg-blue-50/30'
                    : 'bg-white/[0.03] border-white/10 hover:border-blue-400/50 hover:bg-white/[0.06]'
                }`}
              >
                <div
                  className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 ${
                    isLight
                      ? `${vis.lightBg} ${vis.lightText}`
                      : `${vis.darkBg} ${vis.darkText}`
                  }`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-xs font-extrabold truncate leading-tight">
                    {branch.shortName}
                  </div>
                  <div
                    className={`text-[10.5px] font-semibold tabular-nums mt-0.5 ${
                      isLight ? 'text-slate-400' : 'text-slate-500'
                    }`}
                  >
                    {count.toLocaleString('tr-TR')} soru
                  </div>
                </div>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 group-hover:translate-x-0.5 transition" />
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
