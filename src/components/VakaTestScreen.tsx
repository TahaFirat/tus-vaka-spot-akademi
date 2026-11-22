import React, { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Bookmark,
  Brain,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  EyeOff,
  Lightbulb,
  Lock,
  Search,
  Shuffle,
  SlidersHorizontal,
  Sparkles,
  Stethoscope,
  X,
  XCircle,
} from 'lucide-react';
import {
  matchesVakaSearch,
  OptionLetter,
  TUS_BRANCHES,
  TUS_OSYM_TWIN_QUESTIONS,
  TUS_VAKA_QUESTIONS,
  TusBranchId,
  TusSessionType,
} from '../data/tusMedicalRepository';
import { BRANCH_VISUALS } from '../data/branchVisuals';
import { FREE_QUESTION_LIMIT, triggerHaptic } from '../services/nativeBridge';
import { TwinYearFilter, VakaAnswerRecord } from '../services/studyStorage';

interface VakaTestScreenProps {
  isPro: boolean;
  isLight: boolean;
  totalSolvedCount: number;
  vakaAnswers: Record<string, VakaAnswerRecord>;
  bookmarkedVakaIds: string[];
  onRecordVakaAnswer: (
    questionId: string,
    selected: OptionLetter,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => void;
  onToggleBookmarkVaka: (questionId: string) => void;
  onOpenPaywall: (reason?: string) => void;
  initialBasket?: 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
  initialBranch?: 'ALL' | TusBranchId;
  initialYear?: TwinYearFilter;
  onPrefChange?: (prefs: { branchId?: 'ALL' | TusBranchId; year?: TwinYearFilter }) => void;
  onBackToSubjects?: () => void;
  mode?: 'standard' | 'osym_twin';
}

const VakaTestScreenInner: React.FC<VakaTestScreenProps> = ({
  isPro,
  isLight,
  totalSolvedCount,
  vakaAnswers,
  bookmarkedVakaIds,
  onRecordVakaAnswer,
  onToggleBookmarkVaka,
  onOpenPaywall,
  initialBasket = 'unsolved',
  initialBranch = 'ALL',
  initialYear = 'ALL',
  onPrefChange,
  onBackToSubjects,
  mode = 'standard',
}) => {
  const isDedicatedTwinTab = mode === 'osym_twin';
  const sourcePool = isDedicatedTwinTab
    ? TUS_OSYM_TWIN_QUESTIONS
    : TUS_VAKA_QUESTIONS;

  const [sessionFilter, setSessionFilter] = useState<'ALL' | TusSessionType>('ALL');
  const [branchFilter, setBranchFilter] = useState<'ALL' | TusBranchId>(initialBranch);
  const [yearFilter, setYearFilter] = useState<TwinYearFilter>(initialYear);
  const resolvedDefaultBasket = useMemo(() => {
    if (initialBasket !== 'all' && initialBasket !== 'unsolved') return initialBasket;
    const hasUnsolved = sourcePool.some((q) => !vakaAnswers[q.id]);
    return hasUnsolved ? 'unsolved' : 'all';
  }, [initialBasket, sourcePool]);
  const [basketFilter, setBasketFilter] = useState<
    'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked'
  >(resolvedDefaultBasket);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showSubjectPicker, setShowSubjectPicker] = useState(false);
  const [smartFocusMode, setSmartFocusMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pinnedQuestionId, setPinnedQuestionId] = useState<string | null>(null);
  const [showClues, setShowClues] = useState(false);
  const [showDiffDetails, setShowDiffDetails] = useState(false);
  const [eliminatedMap, setEliminatedMap] = useState<
    Record<string, OptionLetter[]>
  >({});

  useEffect(() => {
    if (initialBasket === 'wrong' || initialBasket === 'correct' || initialBasket === 'bookmarked' || initialBasket === 'osym_twin') {
      setBasketFilter(initialBasket);
    } else if (initialBasket === 'unsolved') {
      setBasketFilter(sourcePool.some((q) => !vakaAnswers[q.id]) ? 'unsolved' : 'all');
    }
    setBranchFilter(initialBranch);
    setPinnedQuestionId(null);
    setShowSubjectPicker(false);
  }, [initialBasket, initialBranch, isDedicatedTwinTab]);

  // Branch question counts (scoped to sourcePool so Çıkmış İkiz tab shows exact twin counts per branch)
  const branchQuestionCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: sourcePool.length };
    TUS_BRANCHES.forEach((b) => {
      counts[b.id] = 0;
    });
    sourcePool.forEach((q) => {
      counts[q.branchId] = (counts[q.branchId] || 0) + 1;
    });
    return counts;
  }, [sourcePool]);

  // Calculate branch accuracy for Smart Focus Mode
  const branchWeaknessScore = useMemo(() => {
    const stats: Record<string, { solved: number; wrong: number }> = {};
    TUS_BRANCHES.forEach((b) => {
      stats[b.id] = { solved: 0, wrong: 0 };
    });
    Object.values(vakaAnswers).forEach((ans) => {
      if (stats[ans.branchId]) {
        stats[ans.branchId].solved += 1;
        if (!ans.isCorrect) stats[ans.branchId].wrong += 1;
      }
    });
    const scores: Record<string, number> = {};
    TUS_BRANCHES.forEach((b) => {
      const st = stats[b.id];
      if (st.solved === 0) {
        scores[b.id] = 80;
      } else {
        const errRate = (st.wrong / st.solved) * 100;
        scores[b.id] = 100 + errRate;
      }
    });
    return scores;
  }, [vakaAnswers]);

  const visibleBranches = useMemo(() => {
    if (sessionFilter === 'ALL') return TUS_BRANCHES;
    return TUS_BRANCHES.filter((b) => b.session === sessionFilter);
  }, [sessionFilter]);

  // Allow browsing & solving across all 11 subjects cleanly; 30-question free demo limit is enforced on answer
  const effectivePool = sourcePool;

  const sourceIdSet = useMemo(
    () => new Set(effectivePool.map((q) => q.id)),
    [effectivePool]
  );

  const isOsymTwinQuestion = (q: (typeof TUS_VAKA_QUESTIONS)[number]) =>
    Boolean(q.isOsymTwin);

  // Keeps pinnedQuestionId in the list so answering a question in "Yeni" or "Yanlışlar" never makes it vanish before clicking Sonraki!
  const filteredQuestions = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();
    const matched = effectivePool.filter((q) => {
      if (sessionFilter !== 'ALL' && q.session !== sessionFilter) return false;
      if (branchFilter !== 'ALL' && q.branchId !== branchFilter) return false;
      if (
        isDedicatedTwinTab &&
        yearFilter !== 'ALL' &&
        !(q.osymYearTag || '').includes(yearFilter)
      ) {
        return false;
      }

      if (q.id !== pinnedQuestionId) {
        const record = vakaAnswers[q.id];
        if (basketFilter === 'osym_twin' && !isOsymTwinQuestion(q)) return false;
        if (basketFilter === 'unsolved' && record) return false;
        if (basketFilter === 'wrong' && (!record || record.isCorrect))
          return false;
        if (basketFilter === 'correct' && (!record || !record.isCorrect))
          return false;
        if (
          basketFilter === 'bookmarked' &&
          !bookmarkedVakaIds.includes(q.id)
        ) {
          return false;
        }
      }

      if (qLower && !matchesVakaSearch(q, qLower)) {
        return false;
      }
      return true;
    });

    if (!smartFocusMode) return matched;

    return [...matched].sort((a, b) => {
      if (a.id === pinnedQuestionId) return -1;
      if (b.id === pinnedQuestionId) return 1;
      const recA = vakaAnswers[a.id];
      const recB = vakaAnswers[b.id];
      const statusA = !recA ? 2 : !recA.isCorrect ? 3 : 0;
      const statusB = !recB ? 2 : !recB.isCorrect ? 3 : 0;
      if (statusB !== statusA) return statusB - statusA;

      const freqA = a.examFrequency === 'Her TUS Sorulur' ? 20 : 10;
      const freqB = b.examFrequency === 'Her TUS Sorulur' ? 20 : 10;
      const scoreA = (branchWeaknessScore[a.branchId] || 50) + freqA;
      const scoreB = (branchWeaknessScore[b.branchId] || 50) + freqB;
      return scoreB - scoreA;
    });
  }, [
    effectivePool,
    isDedicatedTwinTab,
    sessionFilter,
    branchFilter,
    yearFilter,
    basketFilter,
    searchQuery,
    vakaAnswers,
    bookmarkedVakaIds,
    smartFocusMode,
    branchWeaknessScore,
    pinnedQuestionId,
  ]);

  useEffect(() => {
    setCurrentIndex(0);
    setPinnedQuestionId(null);
    setShowClues(false);
    setShowDiffDetails(false);
  }, [sessionFilter, branchFilter, yearFilter, basketFilter, searchQuery, isPro, smartFocusMode, isDedicatedTwinTab]);

  const safeIndex =
    filteredQuestions.length > 0
      ? Math.min(currentIndex, filteredQuestions.length - 1)
      : 0;
  const currentQuestion = filteredQuestions[safeIndex] || null;
  const currentAnswer = currentQuestion
    ? vakaAnswers[currentQuestion.id]
    : undefined;
  const isBookmarked = currentQuestion
    ? bookmarkedVakaIds.includes(currentQuestion.id)
    : false;
  const currentEliminated = currentQuestion
    ? eliminatedMap[currentQuestion.id] || []
    : [];

  const basketCounts = useMemo(() => {
    let unsolved = 0;
    let wrong = 0;
    let correct = 0;
    let osymTwin = 0;

    effectivePool.forEach((q) => {
      if (isOsymTwinQuestion(q)) osymTwin++;
      const rec = vakaAnswers[q.id];
      if (!rec) unsolved++;
      else if (rec.isCorrect) correct++;
      else wrong++;
    });
    return {
      all: effectivePool.length,
      osymTwin,
      unsolved,
      wrong,
      correct,
      bookmarked: bookmarkedVakaIds.filter((id) => sourceIdSet.has(id)).length,
    };
  }, [effectivePool, sourceIdSet, vakaAnswers, bookmarkedVakaIds]);

  const handleSelectOption = async (letter: OptionLetter) => {
    if (!currentQuestion) return;

    // Strict Freemium Gate: first 30 questions are free
    if (!isPro && totalSolvedCount >= FREE_QUESTION_LIMIT && !currentAnswer) {
      await triggerHaptic('warning');
      onOpenPaywall(
        `Ücretsiz ${FREE_QUESTION_LIMIT} soru çözüm hakkınızı tamamladınız. Tüm ${TUS_VAKA_QUESTIONS.length}+ vaka sorusunu sınırsız çözmek için PRO pakete geçin.`
      );
      return;
    }

    // Pin current question so it stays visible in "unsolved"/"wrong" baskets while reading the solution
    setPinnedQuestionId(currentQuestion.id);

    const isCorrect = letter === currentQuestion.correctOption;
    await triggerHaptic(isCorrect ? 'success' : 'error');
    onRecordVakaAnswer(
      currentQuestion.id,
      letter,
      isCorrect,
      currentQuestion.branchId
    );
  };

  const handleShuffleJump = () => {
    if (filteredQuestions.length <= 1) return;
    triggerHaptic('light');
    setPinnedQuestionId(null);
    let nextIdx = Math.floor(Math.random() * filteredQuestions.length);
    if (nextIdx === safeIndex) {
      nextIdx = (safeIndex + 1) % filteredQuestions.length;
    }
    setCurrentIndex(nextIdx);
    setShowClues(false);
    setShowDiffDetails(false);
  };

  const handleToggleEliminate = async (
    e: React.MouseEvent,
    letter: OptionLetter
  ) => {
    e.stopPropagation();
    if (!currentQuestion) return;
    await triggerHaptic('light');
    setEliminatedMap((prev) => {
      const existing = prev[currentQuestion.id] || [];
      const next = existing.includes(letter)
        ? existing.filter((l) => l !== letter)
        : [...existing, letter];
      return { ...prev, [currentQuestion.id]: next };
    });
  };

  // Highlights both live searchQuery matches AND clinical clues (when showClues is active)
  const renderHighlightedText = (text: string, clues: string[] = []) => {
    const cleanSearch = searchQuery.trim();
    const activeClues = showClues ? clues.filter(Boolean) : [];

    if (!cleanSearch && activeClues.length === 0) {
      return <span>{text}</span>;
    }

    type Segment = { text: string; type: 'none' | 'search' | 'clue' };
    let segments: Segment[] = [{ text, type: 'none' }];

    if (cleanSearch.length >= 2) {
      const qLower = cleanSearch.toLocaleLowerCase('tr-TR');
      const nextSegments: Segment[] = [];
      segments.forEach((seg) => {
        if (seg.type !== 'none') {
          nextSegments.push(seg);
          return;
        }
        let remaining = seg.text;
        while (remaining.length > 0) {
          const idx = remaining.toLocaleLowerCase('tr-TR').indexOf(qLower);
          if (idx === -1) {
            nextSegments.push({ text: remaining, type: 'none' });
            break;
          }
          if (idx > 0) {
            nextSegments.push({ text: remaining.slice(0, idx), type: 'none' });
          }
          nextSegments.push({
            text: remaining.slice(idx, idx + cleanSearch.length),
            type: 'search',
          });
          remaining = remaining.slice(idx + cleanSearch.length);
        }
      });
      segments = nextSegments;
    }

    activeClues.forEach((clue) => {
      const cLower = clue.toLocaleLowerCase('tr-TR');
      const nextSegments: Segment[] = [];
      segments.forEach((seg) => {
        if (seg.type !== 'none') {
          nextSegments.push(seg);
          return;
        }
        const idx = seg.text.toLocaleLowerCase('tr-TR').indexOf(cLower);
        if (idx === -1) {
          nextSegments.push(seg);
        } else {
          if (idx > 0) {
            nextSegments.push({ text: seg.text.slice(0, idx), type: 'none' });
          }
          nextSegments.push({
            text: seg.text.slice(idx, idx + clue.length),
            type: 'clue',
          });
          if (idx + clue.length < seg.text.length) {
            nextSegments.push({
              text: seg.text.slice(idx + clue.length),
              type: 'none',
            });
          }
        }
      });
      segments = nextSegments;
    });

    return (
      <>
        {segments.map((seg, i) => {
          if (seg.type === 'search') {
            return (
              <mark
                key={i}
                className={`rounded px-1 py-0.5 font-extrabold border ${
                  isLight
                    ? 'bg-cyan-200/90 text-cyan-950 border-cyan-400'
                    : 'bg-cyan-400/30 text-cyan-100 border-cyan-400/60'
                }`}
              >
                {seg.text}
              </mark>
            );
          }
          if (seg.type === 'clue') {
            return (
              <mark
                key={i}
                className={`rounded px-1 py-0.5 font-semibold border ${
                  isLight
                    ? 'bg-amber-200/85 text-amber-950 border-amber-400'
                    : 'bg-amber-400/25 text-amber-200 border-amber-400/50'
                }`}
              >
                {seg.text}
              </mark>
            );
          }
          return <span key={i}>{seg.text}</span>;
        })}
      </>
    );
  };

  const cardBg = isLight
    ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
    : 'bg-[#121826] border-white/8 shadow-lg';

  const activeBranchMeta =
    branchFilter !== 'ALL'
      ? TUS_BRANCHES.find((b) => b.id === branchFilter)
      : null;
  const activeFilterBadgeCount =
    (basketFilter !== 'unsolved' && basketFilter !== 'all' ? 1 : 0) +
    (yearFilter !== 'ALL' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0) +
    (smartFocusMode ? 1 : 0);
  const progressPct =
    filteredQuestions.length > 0
      ? Math.min(100, Math.round(((safeIndex + 1) / filteredQuestions.length) * 100))
      : 0;

  return (
    <div className="space-y-3">
      {/* Ultra-Clean Single-Row Top Bar (← Ders | Progress | Bookmark | Filter) */}
      <div className={`rounded-2xl border px-2.5 py-2 flex items-center gap-2 ${cardBg}`}>
        {/* Left: Back to Dersler OR Subject Dropdown */}
        {onBackToSubjects && (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onBackToSubjects();
            }}
            aria-label="Derslere Dön"
            className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                : 'bg-white/8 hover:bg-white/12 text-slate-200'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        <button
          type="button"
          onClick={() => {
            triggerHaptic('selection');
            setShowSubjectPicker((v) => !v);
            setShowFilters(false);
          }}
          className={`h-10 inline-flex items-center gap-1.5 px-3 rounded-xl text-[13px] font-extrabold transition shrink-0 max-w-[144px] ${
            showSubjectPicker
              ? 'bg-blue-600 text-white'
              : isLight
              ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-900'
              : 'bg-white/8 hover:bg-white/12 text-slate-100'
          }`}
        >
          <span className="truncate">
            {activeBranchMeta
              ? activeBranchMeta.shortName
              : isDedicatedTwinTab
              ? 'Tüm İkizler'
              : 'Tüm Dersler'}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform ${
              showSubjectPicker ? 'rotate-180' : ''
            }`}
          />
        </button>

        {/* Center: Clean Progress Counter */}
        <div className="flex-1 min-w-0 flex flex-col justify-center gap-1 px-1">
          <span
            className={`text-[11px] font-extrabold tabular-nums text-right truncate ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            {filteredQuestions.length > 0
              ? `${(safeIndex + 1).toLocaleString('tr-TR')} / ${filteredQuestions.length.toLocaleString('tr-TR')}`
              : '0 / 0'}
          </span>
          <div
            className={`h-1.5 w-full rounded-full overflow-hidden ${
              isLight ? 'bg-slate-100' : 'bg-white/10'
            }`}
          >
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${Math.max(4, progressPct)}%` }}
            />
          </div>
        </div>

        {/* Right: Only 2 Clean Large Icon Buttons (Bookmark + Filter) */}
        <div className="flex items-center gap-1.5 shrink-0">
          {currentQuestion && (
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setPinnedQuestionId(currentQuestion.id);
                onToggleBookmarkVaka(currentQuestion.id);
              }}
              aria-label="Kaydet"
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition ${
                isBookmarked
                  ? isLight
                    ? 'bg-amber-100 text-amber-700'
                    : 'bg-amber-500/20 text-amber-300'
                  : isLight
                  ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
                  : 'bg-white/8 hover:bg-white/12 text-slate-300'
              }`}
            >
              <Bookmark className={`w-4.5 h-4.5 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>
          )}

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              setShowFilters((v) => !v);
              setShowSubjectPicker(false);
            }}
            aria-label="Filtre ve Arama"
            className={`relative w-10 h-10 rounded-xl flex items-center justify-center transition ${
              showFilters || activeFilterBadgeCount > 0
                ? 'bg-blue-600 text-white'
                : isLight
                ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
                : 'bg-white/8 hover:bg-white/12 text-slate-300'
            }`}
          >
            <SlidersHorizontal className="w-4.5 h-4.5" />
            {activeFilterBadgeCount > 0 && !showFilters && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-400" />
            )}
          </button>
        </div>
      </div>

      {/* Collapsible Visual Subject Picker Drawer (1-Tap Switch Between All 11 Subjects) */}
      {showSubjectPicker && (
        <div className={`rounded-2xl border p-3 space-y-2.5 ${cardBg}`}>
          <div className="flex items-center justify-between gap-2">
            <div
              className={`inline-flex rounded-xl p-0.5 ${
                isLight ? 'bg-slate-100' : 'bg-white/6'
              }`}
            >
              {[
                { id: 'ALL' as const, label: 'Tümü' },
                { id: 'TTBT' as const, label: 'Temel' },
                { id: 'KTBT' as const, label: 'Klinik' },
              ].map((sess) => {
                const active = sessionFilter === sess.id;
                return (
                  <button
                    key={sess.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('selection');
                      setSessionFilter(sess.id);
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
                    {sess.label}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setBranchFilter('ALL');
                setSessionFilter('ALL');
                onPrefChange?.({ branchId: 'ALL' });
                setShowSubjectPicker(false);
              }}
              className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition ${
                branchFilter === 'ALL'
                  ? 'bg-blue-600 text-white'
                  : isLight
                  ? 'bg-slate-100 text-slate-600'
                  : 'bg-white/8 text-slate-300'
              }`}
            >
              Tüm Dersler ({sourcePool.length.toLocaleString('tr-TR')})
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
            {visibleBranches.map((b) => {
              const vis = BRANCH_VISUALS[b.id];
              const Icon = vis.icon;
              const active = branchFilter === b.id;
              return (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setBranchFilter(b.id);
                    onPrefChange?.({ branchId: b.id });
                    setShowSubjectPicker(false);
                  }}
                  className={`rounded-xl border px-2.5 py-2 flex items-center gap-2 text-left transition ${
                    active
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : isLight
                      ? 'bg-slate-50/70 border-slate-200/80 hover:border-blue-300 text-slate-800'
                      : 'bg-white/[0.03] border-white/8 hover:border-blue-400/40 text-slate-200'
                  }`}
                >
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      active ? 'text-white' : isLight ? vis.lightText : vis.darkText
                    }`}
                  />
                  <span className="text-xs font-extrabold truncate flex-1">
                    {b.shortName}
                  </span>
                  <span
                    className={`text-[10px] font-bold tabular-nums shrink-0 ${
                      active ? 'text-blue-100' : 'text-slate-400'
                    }`}
                  >
                    {(branchQuestionCounts[b.id] || 0).toLocaleString('tr-TR')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Collapsible Filter / Year / Search Drawer (Hidden by Default for Maximum Calm!) */}
      {showFilters && (
        <div className={`rounded-2xl border p-3 space-y-2.5 ${cardBg}`}>
          {/* Queue Baskets */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'unsolved' as const, label: `Yeni (${basketCounts.unsolved})` },
              { id: 'wrong' as const, label: `Yanlışlar (${basketCounts.wrong})` },
              { id: 'bookmarked' as const, label: `Kayıtlı (${basketCounts.bookmarked})` },
              { id: 'all' as const, label: `Tümü (${basketCounts.all})` },
              { id: 'correct' as const, label: `Doğrular (${basketCounts.correct})` },
            ].map((q) => {
              const active = basketFilter === q.id;
              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setBasketFilter(q.id);
                  }}
                  className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold border transition ${
                    active
                      ? 'bg-blue-600 border-blue-600 text-white'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-600'
                      : 'bg-white/[0.04] border-white/10 text-slate-300'
                  }`}
                >
                  {q.label}
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => {
                handleShuffleJump();
                setShowFilters(false);
              }}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-extrabold border transition ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-700'
                  : 'bg-white/[0.04] border-white/10 text-slate-300'
              }`}
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Rastgele</span>
            </button>

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setSmartFocusMode((m) => !m);
              }}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-extrabold border transition ${
                smartFocusMode
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-600'
                  : 'bg-white/[0.04] border-white/10 text-slate-300'
              }`}
            >
              <Brain className="w-3.5 h-3.5" />
              <span>Zayıf Öncelik</span>
            </button>
          </div>

          {/* 2019-2025 Year Pills when in Çıkmış İkiz mode */}
          {isDedicatedTwinTab && (
            <div className="flex items-center gap-1 overflow-x-auto no-scrollbar pb-0.5">
              {(['ALL', '2025', '2024', '2023', '2022', '2021', '2020', '2019'] as const).map(
                (yr) => {
                  const active = yearFilter === yr;
                  return (
                    <button
                      key={yr}
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        setYearFilter(yr);
                        onPrefChange?.({ year: yr });
                      }}
                      className={`px-2.5 py-1 rounded-xl text-[11px] font-extrabold whitespace-nowrap border transition shrink-0 ${
                        active
                          ? 'bg-amber-500 border-amber-500 text-slate-950'
                          : isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-600'
                          : 'bg-white/[0.04] border-white/10 text-slate-300'
                      }`}
                    >
                      {yr === 'ALL' ? 'Tüm Yıllar' : yr}
                    </button>
                  );
                }
              )}
            </div>
          )}

          {/* Live Search Input */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hastalık, ilaç veya bulgu ara..."
              className={`w-full rounded-xl pl-8 pr-20 py-2 text-xs border outline-none transition ${
                isLight
                  ? 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-blue-500'
                  : 'bg-white/[0.04] border-white/10 text-slate-100 placeholder:text-slate-500 focus:border-blue-400'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-600"
                aria-label="Aramayı Temizle"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* Main Question Card */}
      {!currentQuestion ? (
        <div className={`rounded-2xl border p-6 text-center space-y-2.5 ${cardBg}`}>
          <Stethoscope className="w-7 h-7 text-emerald-500 mx-auto" />
          <p className="text-xs font-bold">
            {basketFilter === 'unsolved'
              ? 'Bu filtredeki tüm yeni soruları çözdün!'
              : 'Bu filtrede soru bulunamadı.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {basketFilter === 'unsolved' && (
              <button
                type="button"
                onClick={() => setBasketFilter('all')}
                className="px-3 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold"
              >
                Tüm Soruları Gör
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setSessionFilter('ALL');
                setBranchFilter('ALL');
                setYearFilter('ALL');
                setBasketFilter('all');
                setSearchQuery('');
                setSmartFocusMode(false);
                onPrefChange?.({ branchId: 'ALL', year: 'ALL' });
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        </div>
      ) : (
        <div className={`rounded-3xl border p-4 sm:p-5 space-y-4 ${cardBg}`}>
          {/* Clean 1-Line Subtle Context Header (Zero Duplicate Buttons/Badges!) */}
          <div className="flex items-center justify-between gap-2">
            <span
              className={`text-xs font-bold truncate ${
                isLight ? 'text-slate-500' : 'text-slate-400'
              }`}
            >
              {isOsymTwinQuestion(currentQuestion) && currentQuestion.osymYearTag
                ? `${currentQuestion.osymYearTag.replace(' Konsept İkizi', ' İkizi')} • `
                : ''}
              {currentQuestion.subTopic.replace(/^ÖSYM İkizi\s*•\s*/i, '')}
            </span>

            {currentQuestion.clinicalClues.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setShowClues((prev) => !prev);
                }}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-extrabold shrink-0 transition ${
                  showClues
                    ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300'
                    : isLight
                    ? 'text-blue-600 hover:bg-blue-50'
                    : 'text-blue-400 hover:bg-white/6'
                }`}
              >
                <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                <span>{showClues ? 'Gizle' : 'İpucu'}</span>
              </button>
            )}
          </div>

          {/* Inline AMBOSS-Style Clinical Clue Strip (Only when tapped) */}
          {showClues && currentQuestion.clinicalClues.length > 0 && (
            <div
              className={`rounded-2xl border px-3.5 py-2.5 flex flex-wrap items-center gap-1.5 ${
                isLight
                  ? 'bg-amber-50/80 border-amber-200/80'
                  : 'bg-amber-500/10 border-amber-400/25'
              }`}
            >
              {currentQuestion.clinicalClues.map((c, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-0.5 rounded-lg text-xs font-bold ${
                    isLight
                      ? 'bg-white text-amber-900 border border-amber-200'
                      : 'bg-amber-500/20 text-amber-200'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          {/* Pure Readable Clinical Case Stem (Redundant [2025 TUS Konsept İkizi] Prefix Stripped) */}
          <div
            className={`text-[15px] sm:text-[16px] leading-[1.62] font-medium ${
              isLight ? 'text-slate-900' : 'text-slate-100'
            }`}
          >
            {renderHighlightedText(
              currentQuestion.stem.replace(/^\[\d{4}\s+TUS[^\]]*\]\s*/i, ''),
              currentQuestion.clinicalClues
            )}
          </div>

          {/* 5 Generous, Comfortable Tap Options (min-h 54px) */}
          <div className="space-y-2">
            {currentQuestion.options.map((opt) => {
              const isEliminated = currentEliminated.includes(opt.letter);
              const isSelected = currentAnswer?.selected === opt.letter;
              const isCorrectOption =
                opt.letter === currentQuestion.correctOption;
              const hasAnswered = Boolean(currentAnswer);

              let containerStyle = isLight
                ? 'bg-slate-50/80 hover:bg-slate-100 border-slate-200/90 text-slate-900'
                : 'bg-white/[0.03] hover:bg-white/[0.06] border-white/10 text-slate-100';
              let badgeStyle = isLight
                ? 'bg-white text-slate-700 border-slate-200'
                : 'bg-[#1D263B] text-slate-200 border-white/12';

              if (hasAnswered) {
                if (isCorrectOption) {
                  containerStyle = isLight
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500/25'
                    : 'bg-emerald-500/15 border-emerald-400/70 text-emerald-100';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-600';
                } else if (isSelected && !isCorrectOption) {
                  containerStyle = isLight
                    ? 'bg-rose-50 border-rose-400 text-rose-950'
                    : 'bg-rose-500/15 border-rose-500/70 text-rose-100';
                  badgeStyle = 'bg-rose-500 text-white border-rose-500';
                } else {
                  containerStyle = isLight
                    ? 'bg-slate-50/50 border-slate-200/50 text-slate-400 opacity-70'
                    : 'bg-white/[0.02] border-white/5 text-slate-500 opacity-65';
                }
              } else if (isEliminated) {
                containerStyle = isLight
                  ? 'bg-slate-100/50 border-slate-200 text-slate-400 opacity-50'
                  : 'bg-white/[0.02] border-white/5 text-slate-500 opacity-45';
              }

              return (
                <div
                  key={opt.letter}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleSelectOption(opt.letter)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleSelectOption(opt.letter);
                    }
                  }}
                  className={`w-full min-h-[54px] rounded-2xl border px-3.5 py-3 flex items-center justify-between gap-3 transition active:scale-[0.99] cursor-pointer select-none ${containerStyle}`}
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <span
                      className={`w-7 h-7 rounded-xl border text-xs font-extrabold flex items-center justify-center shrink-0 transition ${badgeStyle}`}
                    >
                      {opt.letter}
                    </span>

                    <div
                      className={`text-[14px] font-semibold leading-snug ${
                        isEliminated && !hasAnswered ? 'line-through' : ''
                      }`}
                    >
                      {renderHighlightedText(opt.text, [])}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {hasAnswered && isCorrectOption && (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    )}
                    {hasAnswered && isSelected && !isCorrectOption && (
                      <XCircle className="w-5 h-5 text-rose-500" />
                    )}
                    {!hasAnswered && (
                      <button
                        type="button"
                        onClick={(e) => handleToggleEliminate(e, opt.letter)}
                        title="Şıkkı Ele"
                        aria-label={`${opt.letter} şıkkını ele`}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-slate-600 transition"
                      >
                        <EyeOff className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Large, Comfortable 48px Prev / Next Controls */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              disabled={safeIndex === 0}
              onClick={() => {
                triggerHaptic('light');
                setPinnedQuestionId(null);
                setCurrentIndex(Math.max(0, safeIndex - 1));
                setShowClues(false);
                setShowDiffDetails(false);
              }}
              className={`h-12 rounded-2xl border text-sm font-extrabold inline-flex items-center justify-center gap-1.5 transition active:scale-[0.98] disabled:opacity-35 ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200/80 border-slate-200 text-slate-700'
                  : 'bg-white/[0.06] hover:bg-white/10 border-white/10 text-slate-200'
              }`}
            >
              <ChevronLeft className="w-4.5 h-4.5 shrink-0" />
              <span>Önceki</span>
            </button>

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                const wasPinnedAndWillLeave =
                  pinnedQuestionId === currentQuestion.id &&
                  (basketFilter === 'unsolved' ||
                    (basketFilter === 'wrong' && currentAnswer?.isCorrect) ||
                    (basketFilter === 'bookmarked' && !isBookmarked));

                if (wasPinnedAndWillLeave) {
                  setPinnedQuestionId(null);
                  setCurrentIndex(safeIndex);
                  setShowClues(false);
                  setShowDiffDetails(false);
                  return;
                }

                if (
                  !isPro &&
                  safeIndex >= filteredQuestions.length - 1 &&
                  sourcePool.length > FREE_QUESTION_LIMIT
                ) {
                  onOpenPaywall(
                    `Ücretsiz ${FREE_QUESTION_LIMIT} demo soruyu tamamladınız. ${sourcePool.length}+ soruluk tam havuzu açmak için PRO'ya geçin.`
                  );
                  return;
                }
                setPinnedQuestionId(null);
                setCurrentIndex(
                  Math.min(filteredQuestions.length - 1, safeIndex + 1)
                );
                setShowClues(false);
                setShowDiffDetails(false);
              }}
              disabled={
                isPro &&
                safeIndex >= filteredQuestions.length - 1 &&
                !(
                  pinnedQuestionId === currentQuestion.id &&
                  (basketFilter === 'unsolved' ||
                    (basketFilter === 'wrong' && currentAnswer?.isCorrect) ||
                    (basketFilter === 'bookmarked' && !isBookmarked))
                )
              }
              className="h-12 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-extrabold inline-flex items-center justify-center gap-1.5 shadow-sm shadow-blue-600/20 transition active:scale-[0.98] disabled:opacity-40"
            >
              <span>Sonraki</span>
              <ChevronRight className="w-3.5 h-3.5 shrink-0" />
            </button>
          </div>

          {/* High-Contrast Educational Solution Box (Zero Truncation & Zero Contrast Bug) */}
          {currentAnswer && (
            <div
              className={`rounded-xl border p-3.5 space-y-2.5 ${
                isLight
                  ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                  : 'bg-[#07131A] border-emerald-500/30 text-slate-100'
              }`}
            >
              {/* Status Header */}
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`text-xs font-extrabold ${
                    currentAnswer.isCorrect
                      ? isLight
                        ? 'text-emerald-700'
                        : 'text-emerald-400'
                      : isLight
                      ? 'text-rose-600'
                      : 'text-rose-400'
                  }`}
                >
                  {currentAnswer.isCorrect
                    ? `✓ Doğru Cevap (${currentQuestion.correctOption})`
                    : `✗ Seçiminiz: ${currentAnswer.selected} • Doğru Cevap: ${currentQuestion.correctOption}`}
                </span>
              </div>

              {/* Full, Non-Truncated First Choice vs Gold Standard Box */}
              <div
                className={`rounded-lg px-2.5 py-1.5 text-[11.5px] font-bold border leading-snug ${
                  isLight
                    ? 'bg-white border-teal-200 text-teal-800'
                    : 'bg-teal-950/40 border-teal-500/30 text-teal-200'
                }`}
              >
                {renderHighlightedText(currentQuestion.firstLineVsGoldStandard)}
              </div>

              {/* High-Yield Pearl */}
              <div className="text-xs leading-relaxed">
                <strong
                  className={`font-extrabold ${
                    isLight ? 'text-amber-700' : 'text-amber-400'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 inline mr-1 -mt-0.5" />
                  Klinik Altın Kural:{' '}
                </strong>
                <span>{renderHighlightedText(currentQuestion.highYieldPearl)}</span>
              </div>

              {/* Mechanism */}
              <div
                className={`text-xs leading-relaxed ${
                  isLight ? 'text-slate-700' : 'text-slate-300'
                }`}
              >
                <strong
                  className={`font-extrabold ${
                    isLight ? 'text-emerald-700' : 'text-emerald-400'
                  }`}
                >
                  Çözüm:{' '}
                </strong>
                {renderHighlightedText(currentQuestion.stepByStepMechanism)}
              </div>

              {/* Collapsible 5-Option Differential */}
              <button
                type="button"
                onClick={() => setShowDiffDetails((prev) => !prev)}
                className={`inline-flex items-center gap-1 text-[11px] font-extrabold hover:underline pt-0.5 ${
                  isLight ? 'text-emerald-700' : 'text-emerald-400'
                }`}
              >
                <span>Diğer Şıkların Ayırıcı Tanısı</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${
                    showDiffDetails ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {showDiffDetails && (
                <div className="space-y-1.5 pt-1">
                  {currentQuestion.options.map((opt) => {
                    const isCorrectOpt =
                      opt.letter === currentQuestion.correctOption;
                    return (
                      <div
                        key={opt.letter}
                        className={`text-[11.5px] leading-snug rounded-lg px-2.5 py-2 border ${
                          isCorrectOpt
                            ? isLight
                              ? 'bg-emerald-100/90 border-emerald-400 text-emerald-950 font-semibold'
                              : 'bg-emerald-950/75 border-emerald-500/50 text-emerald-100 font-semibold'
                            : isLight
                            ? 'bg-white border-slate-200/90 text-slate-700'
                            : 'bg-[#0B1B24] border-white/10 text-slate-300'
                        }`}
                      >
                        <strong>{opt.letter})</strong>{' '}
                        {renderHighlightedText(opt.differentialNote)}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const VakaTestScreen = React.memo(VakaTestScreenInner);
