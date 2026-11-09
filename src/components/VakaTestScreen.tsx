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
  Sparkles,
  Stethoscope,
  X,
  XCircle,
} from 'lucide-react';
import {
  OptionLetter,
  TUS_BRANCHES,
  TUS_VAKA_QUESTIONS,
  TusBranchId,
  TusSessionType,
} from '../data/tusMedicalRepository';
import {
  FREE_QUESTION_LIMIT,
  triggerHaptic,
} from '../services/nativeBridge';
import { VakaAnswerRecord } from '../services/studyStorage';

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
  initialBasket?: 'all' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
}

export const VakaTestScreen: React.FC<VakaTestScreenProps> = ({
  isPro,
  isLight,
  totalSolvedCount,
  vakaAnswers,
  bookmarkedVakaIds,
  onRecordVakaAnswer,
  onToggleBookmarkVaka,
  onOpenPaywall,
  initialBasket = 'all',
}) => {
  const [sessionFilter, setSessionFilter] = useState<'ALL' | TusSessionType>('ALL');
  const [branchFilter, setBranchFilter] = useState<'ALL' | TusBranchId>('ALL');
  const [basketFilter, setBasketFilter] = useState<
    'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked'
  >(initialBasket);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [smartFocusMode, setSmartFocusMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pinnedQuestionId, setPinnedQuestionId] = useState<string | null>(null);
  const [showClues, setShowClues] = useState(false);
  const [showDiffDetails, setShowDiffDetails] = useState(false);
  const [eliminatedMap, setEliminatedMap] = useState<
    Record<string, OptionLetter[]>
  >({});

  useEffect(() => {
    setBasketFilter(initialBasket);
    setPinnedQuestionId(null);
  }, [initialBasket]);

  // Branch question counts
  const branchQuestionCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: TUS_VAKA_QUESTIONS.length };
    TUS_BRANCHES.forEach((b) => {
      counts[b.id] = 0;
    });
    TUS_VAKA_QUESTIONS.forEach((q) => {
      counts[q.branchId] = (counts[q.branchId] || 0) + 1;
    });
    return counts;
  }, []);

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

  const isOsymTwinQuestion = (q: (typeof TUS_VAKA_QUESTIONS)[number]) =>
    q.subTopic.includes('ÖSYM İkizi') ||
    q.stem.includes('TUS Konsept İkizi') ||
    q.examFrequency === 'Her TUS Sorulur';

  // Full matched questions before Freemium slicing
  // Keeps pinnedQuestionId in the list so answering a question in "Yeni" or "Yanlışlar" never makes it vanish before clicking Sonraki!
  const allMatchedQuestions = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();
    const matched = TUS_VAKA_QUESTIONS.filter((q) => {
      if (sessionFilter !== 'ALL' && q.session !== sessionFilter) return false;
      if (branchFilter !== 'ALL' && q.branchId !== branchFilter) return false;

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

      if (qLower) {
        const optText = q.options.map((o) => o.text).join(' ');
        const hay = `${q.stem} ${optText} ${q.subTopic} ${q.branchName} ${q.highYieldPearl}`.toLowerCase();
        if (!hay.includes(qLower)) return false;
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
    sessionFilter,
    branchFilter,
    basketFilter,
    searchQuery,
    vakaAnswers,
    bookmarkedVakaIds,
    smartFocusMode,
    branchWeaknessScore,
    pinnedQuestionId,
  ]);

  const filteredQuestions = useMemo(() => {
    if (isPro) return allMatchedQuestions;
    return allMatchedQuestions.slice(0, FREE_QUESTION_LIMIT);
  }, [isPro, allMatchedQuestions]);

  useEffect(() => {
    setCurrentIndex(0);
    setPinnedQuestionId(null);
    setShowClues(false);
    setShowDiffDetails(false);
  }, [sessionFilter, branchFilter, basketFilter, searchQuery, isPro, smartFocusMode]);

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
    const basePool = isPro
      ? TUS_VAKA_QUESTIONS
      : TUS_VAKA_QUESTIONS.slice(0, FREE_QUESTION_LIMIT);

    basePool.forEach((q) => {
      if (isOsymTwinQuestion(q)) osymTwin++;
      const rec = vakaAnswers[q.id];
      if (!rec) unsolved++;
      else if (rec.isCorrect) correct++;
      else wrong++;
    });
    return {
      all: basePool.length,
      osymTwin,
      unsolved,
      wrong,
      correct,
      bookmarked: bookmarkedVakaIds.length,
    };
  }, [isPro, vakaAnswers, bookmarkedVakaIds]);

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
      const qLower = cleanSearch.toLowerCase();
      const nextSegments: Segment[] = [];
      segments.forEach((seg) => {
        if (seg.type !== 'none') {
          nextSegments.push(seg);
          return;
        }
        let remaining = seg.text;
        while (remaining.length > 0) {
          const idx = remaining.toLowerCase().indexOf(qLower);
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
      const cLower = clue.toLowerCase();
      const nextSegments: Segment[] = [];
      segments.forEach((seg) => {
        if (seg.type !== 'none') {
          nextSegments.push(seg);
          return;
        }
        const idx = seg.text.toLowerCase().indexOf(cLower);
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
    ? 'bg-white border-slate-200/90 shadow-sm'
    : 'bg-[#0C1B24] border-white/10 shadow-lg';

  return (
    <div className="space-y-2">
      {/* Modern Top Control Panel (Responsive Across All Phones & Tablets) */}
      <div className={`rounded-2xl border p-2.5 space-y-2 ${cardBg}`}>
        {/* Row 1: Segmented Session Control + Smart Focus + Basket Selector + Search */}
        <div className="flex flex-wrap items-center justify-between gap-1.5">
          {/* Segmented Session Control */}
          <div
            className={`inline-flex rounded-xl p-0.5 shrink-0 ${
              isLight
                ? 'bg-slate-100 border border-slate-200/80'
                : 'bg-[#071117] border border-white/10'
            }`}
          >
            {(['ALL', 'TTBT', 'KTBT'] as const).map((sess) => {
              const active = sessionFilter === sess;
              return (
                <button
                  key={sess}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setSessionFilter(sess);
                    setBranchFilter('ALL');
                  }}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-extrabold transition whitespace-nowrap ${
                    active
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : isLight
                      ? 'text-slate-600 hover:text-slate-900'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {sess === 'ALL' ? 'Tüm TUS' : sess}
                </button>
              );
            })}
          </div>

          {/* Right Controls: Smart Focus + Basket + Search */}
          <div className="flex items-center gap-1.5 min-w-0 ml-auto">
            {/* Smart Weak-Branch Focus Toggle */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setSmartFocusMode((m) => !m);
              }}
              title="Zayıf olduğunuz branşları ve yüksek frekanslı soruları önceliklendirir"
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-xl text-[11px] font-bold border transition shrink-0 ${
                smartFocusMode
                  ? isLight
                    ? 'bg-emerald-100 border-emerald-400 text-emerald-800'
                    : 'bg-emerald-500/20 border-emerald-400/50 text-emerald-300'
                  : isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200/70'
                  : 'bg-[#071117] border-white/10 text-slate-300 hover:border-white/20'
              }`}
            >
              <Brain className="w-3.5 h-3.5 text-emerald-500" />
              <span className="hidden xs:inline">Akıllı Odak</span>
            </button>

            {/* Basket Selector (Includes ÖSYM İkizleri!) */}
            <select
              value={basketFilter}
              onChange={(e) => {
                triggerHaptic('light');
                setBasketFilter(e.target.value as typeof basketFilter);
              }}
              aria-label="Soru Sepeti"
              className={`rounded-xl px-2 py-1 text-[11px] font-bold border outline-none transition max-w-[160px] sm:max-w-none ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-[#071117] border-white/10 text-slate-200'
              }`}
            >
              <option value="all">
                {isPro
                  ? `Tümü (${basketCounts.all})`
                  : `Demo (${basketCounts.all}/${TUS_VAKA_QUESTIONS.length})`}
              </option>
              <option value="osym_twin">
                ÖSYM İkizleri ({basketCounts.osymTwin})
              </option>
              <option value="unsolved">Yeni ({basketCounts.unsolved})</option>
              <option value="wrong">Yanlışlar ({basketCounts.wrong})</option>
              <option value="correct">Doğrular ({basketCounts.correct})</option>
              <option value="bookmarked">
                Kaydedilen ({basketCounts.bookmarked})
              </option>
            </select>

            {/* Search Toggle */}
            <button
              type="button"
              onClick={() => setShowSearch((s) => !s)}
              aria-label="Ara"
              className={`w-7 h-7 rounded-xl border flex items-center justify-center shrink-0 transition ${
                showSearch || searchQuery
                  ? isLight
                    ? 'bg-cyan-100 border-cyan-400 text-cyan-800'
                    : 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                  : isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-600'
                  : 'bg-[#071117] border-white/10 text-slate-400'
              }`}
            >
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Row 2: 1-Tap Scrollable Branch Pills with Varied Question Counts */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              setBranchFilter('ALL');
            }}
            className={`px-2.5 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap border transition shrink-0 ${
              branchFilter === 'ALL'
                ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm'
                : isLight
                ? 'bg-slate-50 border-slate-200/90 text-slate-700 hover:bg-slate-100'
                : 'bg-[#071117] border-white/10 text-slate-300 hover:border-white/20'
            }`}
          >
            Tüm Branşlar •{' '}
            {isPro
              ? TUS_VAKA_QUESTIONS.length
              : `${FREE_QUESTION_LIMIT}/${TUS_VAKA_QUESTIONS.length}`}
          </button>

          {visibleBranches.map((b) => {
            const active = branchFilter === b.id;
            const totalForBranch = branchQuestionCounts[b.id] || 0;
            return (
              <button
                key={b.id}
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setBranchFilter(b.id);
                }}
                className={`px-2.5 py-1 rounded-xl text-[11px] font-bold whitespace-nowrap border transition shrink-0 flex items-center gap-1 ${
                  active
                    ? 'bg-emerald-600 border-emerald-500 text-white shadow-sm'
                    : isLight
                    ? 'bg-slate-50 border-slate-200/90 text-slate-700 hover:bg-slate-100'
                    : 'bg-[#071117] border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <span>{b.shortName}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-md ${
                    active
                      ? 'bg-white/20 text-white'
                      : isLight
                      ? 'bg-slate-200/80 text-slate-600'
                      : 'bg-white/5 text-slate-400'
                  }`}
                >
                  {totalForBranch}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input with Live Highlight Feedback */}
        {(showSearch || searchQuery) && (
          <div className="relative pt-0.5">
            <Search className="w-3.5 h-3.5 text-cyan-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Hastalık, ilaç, enzim veya bulgu ara (metinde vurgulanır)..."
              className={`w-full rounded-xl pl-8 pr-24 py-1.5 text-xs border outline-none transition ${
                isLight
                  ? 'bg-slate-50 border-cyan-300 text-slate-900 placeholder:text-slate-400 focus:border-cyan-500'
                  : 'bg-[#071117] border-cyan-500/40 text-slate-100 placeholder:text-slate-500 focus:border-cyan-400'
              }`}
            />
            {searchQuery && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold ${
                    isLight
                      ? 'bg-cyan-100 text-cyan-800'
                      : 'bg-cyan-500/20 text-cyan-300'
                  }`}
                >
                  {filteredQuestions.length} sonuç
                </span>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="p-0.5 text-slate-400 hover:text-slate-600"
                  aria-label="Aramayı Temizle"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Main Question Card */}
      {!currentQuestion ? (
        <div className={`rounded-2xl border p-6 text-center space-y-2 ${cardBg}`}>
          <Stethoscope className="w-7 h-7 text-emerald-500 mx-auto" />
          <p className="text-xs font-semibold">Bu filtrede soru bulunamadı.</p>
          <button
            type="button"
            onClick={() => {
              setSessionFilter('ALL');
              setBranchFilter('ALL');
              setBasketFilter('all');
              setSearchQuery('');
              setSmartFocusMode(false);
            }}
            className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
          >
            Filtreleri Sıfırla
          </button>
        </div>
      ) : (
        <div className={`rounded-2xl border p-3.5 sm:p-4 space-y-3 ${cardBg}`}>
          {/* Single-Line Compact Card Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-500/15">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold shrink-0 border ${
                  currentQuestion.session === 'TTBT'
                    ? isLight
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : isLight
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-300'
                    : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                }`}
              >
                {currentQuestion.session}
              </span>
              <span className="text-xs font-bold truncate">
                {currentQuestion.branchName}
              </span>

              {isOsymTwinQuestion(currentQuestion) && (
                <span
                  className={`hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[10px] font-extrabold shrink-0 border ${
                    isLight
                      ? 'bg-amber-50 border-amber-300 text-amber-800'
                      : 'bg-amber-500/15 border-amber-400/30 text-amber-300'
                  }`}
                >
                  <Award className="w-2.5 h-2.5" />
                  <span>ÖSYM İkizi</span>
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              {/* Clue Toggle */}
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setShowClues((prev) => !prev);
                }}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
                  showClues
                    ? isLight
                      ? 'bg-amber-100 border-amber-400 text-amber-900'
                      : 'bg-amber-500/20 border-amber-400/50 text-amber-300'
                    : isLight
                    ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200/70'
                    : 'bg-[#071117] border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <Lightbulb className="w-3 h-3 text-amber-500" />
                <span>İpucu</span>
              </button>

              {/* Random / Shuffle Question Button */}
              <button
                type="button"
                onClick={handleShuffleJump}
                title="Rastgele Soruya Geç"
                aria-label="Rastgele Soru"
                className={`p-1.5 rounded-lg border transition ${
                  isLight
                    ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200/70'
                    : 'bg-[#071117] border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>

              {/* Bookmark */}
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setPinnedQuestionId(currentQuestion.id);
                  onToggleBookmarkVaka(currentQuestion.id);
                }}
                aria-label="Kaydet"
                className={`p-1.5 rounded-lg border transition ${
                  isBookmarked
                    ? isLight
                      ? 'bg-amber-100 border-amber-400 text-amber-700'
                      : 'bg-amber-500/20 border-amber-400/50 text-amber-400'
                    : isLight
                    ? 'bg-slate-100 border-slate-200 text-slate-500'
                    : 'bg-[#071117] border-white/10 text-slate-400'
                }`}
              >
                <Bookmark
                  className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`}
                />
              </button>

              {/* Question Counter Badge */}
              <span
                className={`px-2 py-0.5 rounded-lg text-[11px] font-extrabold tabular-nums border ${
                  isPro
                    ? isLight
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : isLight
                    ? 'bg-slate-100 text-slate-700 border-slate-200'
                    : 'bg-white/5 text-slate-300 border-white/10'
                }`}
              >
                {safeIndex + 1}/{filteredQuestions.length}
              </span>
            </div>
          </div>

          {/* Extracted Clinical Clues Chips when İpucu is active */}
          {showClues && currentQuestion.clinicalClues.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-500">
                Klinik Anahtarlar:
              </span>
              {currentQuestion.clinicalClues.map((c, idx) => (
                <span
                  key={idx}
                  className={`px-2 py-0.5 rounded-md text-[11px] font-bold border ${
                    isLight
                      ? 'bg-amber-50 border-amber-300 text-amber-900'
                      : 'bg-amber-500/15 border-amber-400/35 text-amber-200'
                  }`}
                >
                  {c}
                </span>
              ))}
            </div>
          )}

          {/* Clinical Case Stem (with Live Search & Clue Highlighting) */}
          <div
            className={`text-[13.5px] sm:text-[14.5px] leading-relaxed font-medium ${
              isLight ? 'text-slate-800' : 'text-slate-100'
            }`}
          >
            {renderHighlightedText(
              currentQuestion.stem,
              currentQuestion.clinicalClues
            )}
          </div>

          {/* 5 Compact Options (A - B - C - D - E) */}
          <div className="space-y-1.5">
            {currentQuestion.options.map((opt) => {
              const isEliminated = currentEliminated.includes(opt.letter);
              const isSelected = currentAnswer?.selected === opt.letter;
              const isCorrectOption =
                opt.letter === currentQuestion.correctOption;
              const hasAnswered = Boolean(currentAnswer);

              let containerStyle = isLight
                ? 'bg-slate-50/90 hover:bg-slate-100 border-slate-200/90 text-slate-800'
                : 'bg-[#071117] hover:bg-[#0E222D] border-white/10 text-slate-200';
              let badgeStyle = isLight
                ? 'bg-white text-emerald-700 border-slate-200'
                : 'bg-[#0C1B24] text-emerald-300 border-white/10';

              if (hasAnswered) {
                if (isCorrectOption) {
                  containerStyle = isLight
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-950 ring-1 ring-emerald-500/30'
                    : 'bg-emerald-950/60 border-emerald-400/70 text-emerald-100 ring-1 ring-emerald-400/40';
                  badgeStyle = 'bg-emerald-600 text-white border-emerald-500';
                } else if (isSelected && !isCorrectOption) {
                  containerStyle = isLight
                    ? 'bg-rose-50 border-rose-400 text-rose-950'
                    : 'bg-rose-950/60 border-rose-500/70 text-rose-100';
                  badgeStyle = 'bg-rose-500 text-white border-rose-400';
                } else {
                  containerStyle = isLight
                    ? 'bg-slate-50/60 border-slate-200/60 text-slate-500 opacity-75'
                    : 'bg-[#071117]/60 border-white/5 text-slate-400 opacity-75';
                }
              } else if (isEliminated) {
                containerStyle = isLight
                  ? 'bg-slate-100/50 border-slate-200 text-slate-400 opacity-50'
                  : 'bg-[#071117]/40 border-white/5 text-slate-500 opacity-45';
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
                  className={`w-full rounded-xl border px-3 py-2 flex items-center justify-between gap-2.5 transition cursor-pointer select-none ${containerStyle}`}
                >
                  <div className="flex items-center gap-2.5 min-w-0 flex-1">
                    <span
                      className={`w-6 h-6 rounded-lg border text-xs font-extrabold flex items-center justify-center shrink-0 transition ${badgeStyle}`}
                    >
                      {opt.letter}
                    </span>

                    <div
                      className={`text-xs sm:text-[13px] font-semibold leading-snug ${
                        isEliminated && !hasAnswered ? 'line-through' : ''
                      }`}
                    >
                      {renderHighlightedText(opt.text, [])}
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0">
                    {hasAnswered && isCorrectOption && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    )}
                    {hasAnswered && isSelected && !isCorrectOption && (
                      <XCircle className="w-4 h-4 text-rose-500" />
                    )}
                    {!hasAnswered && (
                      <button
                        type="button"
                        onClick={(e) => handleToggleEliminate(e, opt.letter)}
                        title="Şıkkı Ele"
                        aria-label={`${opt.letter} şıkkını ele`}
                        className={`p-1 rounded-md transition ${
                          isLight
                            ? 'text-slate-400 hover:text-slate-700'
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        <EyeOff className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Prev / Next Navigation Row */}
          <div className="flex items-center justify-between gap-2 pt-1">
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
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl border text-xs font-bold transition disabled:opacity-40 ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                  : 'bg-[#071117] hover:bg-white/5 border-white/10 text-slate-200'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Önceki</span>
            </button>

            {isPro ? (
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600">
                <Crown className="w-3.5 h-3.5 text-emerald-500" />
                <span>PRO • {allMatchedQuestions.length} Soru Açık</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() =>
                  onOpenPaywall(
                    `PRO pakete geçerek ${TUS_VAKA_QUESTIONS.length}+ vaka sorusunun tamamını sınırsız açabilirsiniz.`
                  )
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-600 text-[11px] font-extrabold hover:bg-amber-500/25 transition"
              >
                <Lock className="w-3 h-3" />
                <span>
                  +{TUS_VAKA_QUESTIONS.length - FREE_QUESTION_LIMIT} PRO Soruyu Aç
                </span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                if (
                  !isPro &&
                  safeIndex >= filteredQuestions.length - 1 &&
                  allMatchedQuestions.length > FREE_QUESTION_LIMIT
                ) {
                  onOpenPaywall(
                    `Ücretsiz ${FREE_QUESTION_LIMIT} demo soruyu tamamladınız. ${TUS_VAKA_QUESTIONS.length}+ soruluk tam vaka bankasını açmak için PRO'ya geçin.`
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
              disabled={isPro && safeIndex >= filteredQuestions.length - 1}
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition disabled:opacity-40"
            >
              <span>Sonraki</span>
              <ChevronRight className="w-3.5 h-3.5" />
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
