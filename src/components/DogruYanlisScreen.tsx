import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  Brain,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Crown,
  Lock,
  Search,
  Shuffle,
  Sparkles,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import {
  TUS_BRANCHES,
  TUS_SPOT_CARDS,
  TusBranchId,
  TusSessionType,
} from '../data/tusMedicalRepository';
import {
  FREE_QUESTION_LIMIT,
  triggerHaptic,
} from '../services/nativeBridge';
import { SpotAnswerRecord } from '../services/studyStorage';

interface DogruYanlisScreenProps {
  isPro: boolean;
  isLight: boolean;
  totalSolvedCount: number;
  spotAnswers: Record<string, SpotAnswerRecord>;
  bookmarkedSpotIds: string[];
  onRecordSpotAnswer: (
    spotId: string,
    selectedTrue: boolean,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => void;
  onToggleBookmarkSpot: (spotId: string) => void;
  onOpenPaywall: (reason?: string) => void;
  initialBasket?: 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';
}

export const DogruYanlisScreen: React.FC<DogruYanlisScreenProps> = ({
  isPro,
  isLight,
  totalSolvedCount,
  spotAnswers,
  bookmarkedSpotIds,
  onRecordSpotAnswer,
  onToggleBookmarkSpot,
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
  const [pinnedSpotId, setPinnedSpotId] = useState<string | null>(null);

  useEffect(() => {
    setBasketFilter(initialBasket);
  }, [initialBasket]);

  const branchSpotCounts = useMemo(() => {
    const counts: Record<string, number> = { ALL: TUS_SPOT_CARDS.length };
    TUS_BRANCHES.forEach((b) => {
      counts[b.id] = 0;
    });
    TUS_SPOT_CARDS.forEach((s) => {
      counts[s.branchId] = (counts[s.branchId] || 0) + 1;
    });
    return counts;
  }, []);

  const branchWeaknessScore = useMemo(() => {
    const stats: Record<string, { solved: number; wrong: number }> = {};
    TUS_BRANCHES.forEach((b) => {
      stats[b.id] = { solved: 0, wrong: 0 };
    });
    Object.values(spotAnswers).forEach((ans) => {
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
        scores[b.id] = 100 + (st.wrong / st.solved) * 100;
      }
    });
    return scores;
  }, [spotAnswers]);

  const visibleBranches = useMemo(() => {
    if (sessionFilter === 'ALL') return TUS_BRANCHES;
    return TUS_BRANCHES.filter((b) => b.session === sessionFilter);
  }, [sessionFilter]);

  const allMatchedSpots = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();
    const matched = TUS_SPOT_CARDS.filter((s) => {
      if (sessionFilter !== 'ALL' && s.session !== sessionFilter) return false;
      if (branchFilter !== 'ALL' && s.branchId !== branchFilter) return false;

      if (s.id === pinnedSpotId) {
        if (qLower) {
          const hay = `${s.statement} ${s.correctMedicalFact} ${s.subTopic} ${s.branchName} ${s.highYieldPearl}`.toLowerCase();
          return hay.includes(qLower);
        }
        return true;
      }

      if (basketFilter === 'osym_twin' && !s.subTopic.includes('ÖSYM İkizi')) {
        return false;
      }
      const rec = spotAnswers[s.id];
      if (basketFilter === 'unsolved' && rec) return false;
      if (basketFilter === 'wrong' && (!rec || rec.isCorrect)) return false;
      if (basketFilter === 'correct' && (!rec || !rec.isCorrect)) return false;
      if (
        basketFilter === 'bookmarked' &&
        !bookmarkedSpotIds.includes(s.id)
      ) {
        return false;
      }

      if (qLower) {
        const hay = `${s.statement} ${s.correctMedicalFact} ${s.subTopic} ${s.branchName} ${s.highYieldPearl}`.toLowerCase();
        if (!hay.includes(qLower)) return false;
      }
      return true;
    });

    if (!smartFocusMode) return matched;

    return [...matched].sort((a, b) => {
      const recA = spotAnswers[a.id];
      const recB = spotAnswers[b.id];
      const statusA = !recA ? 2 : !recA.isCorrect ? 3 : 0;
      const statusB = !recB ? 2 : !recB.isCorrect ? 3 : 0;
      if (statusB !== statusA) return statusB - statusA;
      return (branchWeaknessScore[b.branchId] || 50) - (branchWeaknessScore[a.branchId] || 50);
    });
  }, [
    sessionFilter,
    branchFilter,
    basketFilter,
    searchQuery,
    spotAnswers,
    bookmarkedSpotIds,
    smartFocusMode,
    branchWeaknessScore,
    pinnedSpotId,
  ]);

  const filteredSpots = useMemo(() => {
    if (isPro) return allMatchedSpots;
    return allMatchedSpots.slice(0, FREE_QUESTION_LIMIT);
  }, [isPro, allMatchedSpots]);

  useEffect(() => {
    setCurrentIndex(0);
    setPinnedSpotId(null);
  }, [sessionFilter, branchFilter, basketFilter, searchQuery, isPro, smartFocusMode]);

  const safeIndex =
    filteredSpots.length > 0
      ? Math.min(currentIndex, filteredSpots.length - 1)
      : 0;
  const currentSpot = filteredSpots[safeIndex] || null;
  const currentAnswer = currentSpot ? spotAnswers[currentSpot.id] : undefined;
  const isBookmarked = currentSpot
    ? bookmarkedSpotIds.includes(currentSpot.id)
    : false;

  const basketCounts = useMemo(() => {
    let unsolved = 0;
    let wrong = 0;
    let correct = 0;
    let osymTwin = 0;
    const basePool = isPro
      ? TUS_SPOT_CARDS
      : TUS_SPOT_CARDS.slice(0, FREE_QUESTION_LIMIT);

    basePool.forEach((s) => {
      if (s.subTopic.includes('ÖSYM İkizi')) osymTwin++;
      const rec = spotAnswers[s.id];
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
      bookmarked: bookmarkedSpotIds.length,
    };
  }, [isPro, spotAnswers, bookmarkedSpotIds]);

  const handleAnswerSpot = useCallback(
    async (selectedTrue: boolean) => {
      if (!currentSpot) return;

      if (!isPro && totalSolvedCount >= FREE_QUESTION_LIMIT && !currentAnswer) {
        await triggerHaptic('warning');
        onOpenPaywall(
          `Ücretsiz ${FREE_QUESTION_LIMIT} soru/spot çözüm hakkınızı tamamladınız. Tüm ${TUS_SPOT_CARDS.length}+ D/Y spot kartını sınırsız açmak için PRO pakete geçin.`
        );
        return;
      }

      const isCorrect = selectedTrue === currentSpot.isTrue;
      await triggerHaptic(isCorrect ? 'success' : 'error');
      setPinnedSpotId(currentSpot.id);
      onRecordSpotAnswer(
        currentSpot.id,
        selectedTrue,
        isCorrect,
        currentSpot.branchId
      );
    },
    [currentSpot, isPro, totalSolvedCount, currentAnswer, onOpenPaywall, onRecordSpotAnswer]
  );

  const handleShuffleJump = () => {
    if (filteredSpots.length <= 1) return;
    triggerHaptic('light');
    setPinnedSpotId(null);
    let nextIdx = Math.floor(Math.random() * filteredSpots.length);
    if (nextIdx === safeIndex) {
      nextIdx = (safeIndex + 1) % filteredSpots.length;
    }
    setCurrentIndex(nextIdx);
  };

  // Highlights both live searchQuery and post-answer criticalHighlight
  const renderHighlightedStatement = (
    text: string,
    highlightPhrase?: string,
    hasAnswered?: boolean,
    isStatementTrue?: boolean
  ) => {
    const cleanSearch = searchQuery.trim();
    const activeCritical =
      hasAnswered && highlightPhrase ? highlightPhrase : '';

    if (!cleanSearch && !activeCritical) {
      return <span>{text}</span>;
    }

    type Segment = { text: string; type: 'none' | 'search' | 'critical' };
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

    if (activeCritical) {
      const cLower = activeCritical.toLowerCase();
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
            text: seg.text.slice(idx, idx + activeCritical.length),
            type: 'critical',
          });
          if (idx + activeCritical.length < seg.text.length) {
            nextSegments.push({
              text: seg.text.slice(idx + activeCritical.length),
              type: 'none',
            });
          }
        }
      });
      segments = nextSegments;
    }

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
          if (seg.type === 'critical') {
            return (
              <mark
                key={i}
                className={`rounded px-1 py-0.5 font-bold border ${
                  isStatementTrue
                    ? isLight
                      ? 'bg-emerald-100 text-emerald-900 border-emerald-400'
                      : 'bg-emerald-500/20 text-emerald-200 border-emerald-400/50'
                    : isLight
                    ? 'bg-rose-100 text-rose-900 border-rose-400 line-through'
                    : 'bg-rose-500/20 text-rose-200 border-rose-400/50 line-through'
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
      {/* Modern Top Control Panel */}
      <div className={`rounded-2xl border p-2.5 space-y-2 ${cardBg}`}>
        <div className="flex flex-wrap items-center justify-between gap-1.5">
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

          <div className="flex items-center gap-1.5 min-w-0 ml-auto">
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setSmartFocusMode((m) => !m);
              }}
              title="Zayıf olduğunuz branşları önceliklendirir"
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

            <select
              value={basketFilter}
              onChange={(e) => {
                triggerHaptic('light');
                setBasketFilter(e.target.value as typeof basketFilter);
              }}
              aria-label="Spot Sepeti"
              className={`rounded-xl px-2 py-1 text-[11px] font-bold border outline-none transition max-w-[155px] sm:max-w-none ${
                isLight
                  ? 'bg-slate-100 border-slate-200 text-slate-800'
                  : 'bg-[#071117] border-white/10 text-slate-200'
              }`}
            >
              <option value="all">
                {isPro
                  ? `Tümü (${basketCounts.all})`
                  : `Demo (${basketCounts.all}/${TUS_SPOT_CARDS.length})`}
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

        {/* Row 2: 1-Tap Scrollable Branch Pills */}
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
              ? TUS_SPOT_CARDS.length
              : `${FREE_QUESTION_LIMIT}/${TUS_SPOT_CARDS.length}`}
          </button>

          {visibleBranches.map((b) => {
            const active = branchFilter === b.id;
            const totalForBranch = branchSpotCounts[b.id] || 0;
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

        {(showSearch || searchQuery) && (
          <div className="relative pt-0.5">
            <Search className="w-3.5 h-3.5 text-cyan-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Spot önermesi, sendrom veya ilaç ara (metinde vurgulanır)..."
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
                  {filteredSpots.length} sonuç
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

      {/* Main Spot Card */}
      {!currentSpot ? (
        <div className={`rounded-2xl border p-6 text-center space-y-2 ${cardBg}`}>
          <Zap className="w-7 h-7 text-emerald-500 mx-auto" />
          <p className="text-xs font-semibold">Bu filtrede spot bulunamadı.</p>
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
          {/* Single-Line Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-500/15">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold shrink-0 border ${
                  currentSpot.session === 'TTBT'
                    ? isLight
                      ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                    : isLight
                    ? 'bg-cyan-50 text-cyan-700 border-cyan-300'
                    : 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                }`}
              >
                {currentSpot.session}
              </span>
              <span className="text-xs font-bold truncate">
                {currentSpot.branchName}
              </span>
              {currentSpot.subTopic.includes('ÖSYM İkizi') && (
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-extrabold shrink-0 border ${
                    isLight
                      ? 'bg-amber-50 text-amber-800 border-amber-300'
                      : 'bg-amber-500/15 text-amber-300 border-amber-400/35'
                  }`}
                >
                  ÖSYM İkizi
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 shrink-0">
              <button
                type="button"
                onClick={handleShuffleJump}
                title="Rastgele Spota Geç"
                aria-label="Rastgele Spot"
                className={`p-1.5 rounded-lg border transition ${
                  isLight
                    ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200/70'
                    : 'bg-[#071117] border-white/10 text-slate-300 hover:border-white/20'
                }`}
              >
                <Shuffle className="w-3.5 h-3.5" />
              </button>

              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setPinnedSpotId(currentSpot.id);
                  onToggleBookmarkSpot(currentSpot.id);
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
                {safeIndex + 1}/{filteredSpots.length}
              </span>
            </div>
          </div>

          {/* Statement Box */}
          <div
            className={`rounded-xl border p-4 text-sm sm:text-base font-medium leading-relaxed ${
              isLight
                ? 'bg-slate-50 border-slate-200/80 text-slate-800'
                : 'bg-[#071117] border-white/8 text-slate-100'
            }`}
          >
            “
            {renderHighlightedStatement(
              currentSpot.statement,
              currentSpot.criticalHighlight,
              Boolean(currentAnswer),
              currentSpot.isTrue
            )}
            ”
          </div>

          {/* DOĞRU / YANLIŞ Action Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            <button
              type="button"
              onClick={() => handleAnswerSpot(true)}
              className={`rounded-xl py-2.5 px-3 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition ${
                currentAnswer
                  ? currentSpot.isTrue
                    ? 'bg-emerald-600 border-emerald-400 text-white'
                    : currentAnswer.selected === true
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'opacity-45 border-slate-500/20'
                  : isLight
                  ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                  : 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/40 text-emerald-200'
              }`}
            >
              <Check className="w-4 h-4" />
              <span>DOĞRU</span>
            </button>

            <button
              type="button"
              onClick={() => handleAnswerSpot(false)}
              className={`rounded-xl py-2.5 px-3 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-1.5 border transition ${
                currentAnswer
                  ? !currentSpot.isTrue
                    ? 'bg-emerald-600 border-emerald-400 text-white'
                    : currentAnswer.selected === false
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'opacity-45 border-slate-500/20'
                  : isLight
                  ? 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800'
                  : 'bg-rose-500/15 hover:bg-rose-500/25 border-rose-500/40 text-rose-200'
              }`}
            >
              <X className="w-4 h-4" />
              <span>YANLIŞ</span>
            </button>
          </div>

          {/* Prev / Next Navigation Row */}
          <div className="flex items-center justify-between gap-2 pt-1">
            <button
              type="button"
              disabled={safeIndex === 0}
              onClick={() => {
                triggerHaptic('light');
                setPinnedSpotId(null);
                setCurrentIndex(Math.max(0, safeIndex - 1));
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
              <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-500 whitespace-nowrap">
                <Crown className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>PRO • {allMatchedSpots.length} Spot</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() =>
                  onOpenPaywall(
                    `PRO pakete geçerek ${TUS_SPOT_CARDS.length}+ D/Y spot kartının tamamını sınırsız açabilirsiniz.`
                  )
                }
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-500 text-[11px] font-extrabold hover:bg-amber-500/25 transition whitespace-nowrap"
              >
                <Lock className="w-3 h-3 shrink-0" />
                <span>+{TUS_SPOT_CARDS.length - FREE_QUESTION_LIMIT} PRO Spot</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                const wasPinnedAndAnswered =
                  pinnedSpotId === currentSpot.id &&
                  (basketFilter === 'unsolved' ||
                    (basketFilter === 'wrong' && currentAnswer?.isCorrect) ||
                    (basketFilter === 'bookmarked' && !isBookmarked));
                setPinnedSpotId(null);

                if (wasPinnedAndAnswered) {
                  setCurrentIndex(safeIndex);
                  return;
                }

                if (
                  !isPro &&
                  safeIndex >= filteredSpots.length - 1 &&
                  allMatchedSpots.length > FREE_QUESTION_LIMIT
                ) {
                  onOpenPaywall(
                    `Ücretsiz ${FREE_QUESTION_LIMIT} demo spotu tamamladınız. ${TUS_SPOT_CARDS.length}+ spotluk tam havuzu açmak için PRO'ya geçin.`
                  );
                  return;
                }
                setCurrentIndex(Math.min(filteredSpots.length - 1, safeIndex + 1));
              }}
              disabled={
                isPro &&
                safeIndex >= filteredSpots.length - 1 &&
                !(
                  pinnedSpotId === currentSpot.id &&
                  (basketFilter === 'unsolved' ||
                    (basketFilter === 'wrong' && currentAnswer?.isCorrect))
                )
              }
              className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold transition disabled:opacity-40"
            >
              <span>Sonraki</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Concise High-Contrast Explanation Box */}
          {currentAnswer && (
            <div
              className={`rounded-xl border p-3.5 space-y-2 ${
                isLight
                  ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                  : 'bg-[#07131A] border-emerald-500/30 text-slate-100'
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-extrabold">
                {currentAnswer.isCorrect ? (
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                ) : (
                  <XCircle className="w-4 h-4 text-rose-500" />
                )}
                <span
                  className={
                    currentAnswer.isCorrect
                      ? isLight
                        ? 'text-emerald-700'
                        : 'text-emerald-400'
                      : isLight
                      ? 'text-rose-600'
                      : 'text-rose-400'
                  }
                >
                  Önerme {currentSpot.isTrue ? 'DOĞRU' : 'YANLIŞ'}
                </span>
              </div>

              <p className="text-xs leading-relaxed">
                <strong
                  className={isLight ? 'text-emerald-700' : 'text-emerald-400'}
                >
                  Doğrusu:{' '}
                </strong>
                {renderHighlightedStatement(currentSpot.correctMedicalFact)}
              </p>

              <div
                className={`rounded-lg px-2.5 py-1.5 text-[11.5px] font-bold border leading-snug ${
                  isLight
                    ? 'bg-white border-teal-200 text-teal-800'
                    : 'bg-teal-950/40 border-teal-500/30 text-teal-200'
                }`}
              >
                {renderHighlightedStatement(currentSpot.comparisonNote)}
              </div>

              <p
                className={`text-xs font-medium ${
                  isLight ? 'text-amber-800' : 'text-amber-300'
                }`}
              >
                <Sparkles className="w-3 h-3 inline mr-1 -mt-0.5 text-amber-500" />
                {renderHighlightedStatement(currentSpot.highYieldPearl)}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
