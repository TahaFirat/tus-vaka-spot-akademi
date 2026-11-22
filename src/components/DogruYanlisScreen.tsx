import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  Brain,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Crown,
  Lock,
  Search,
  Shuffle,
  SlidersHorizontal,
  Sparkles,
  X,
  XCircle,
  Zap,
} from 'lucide-react';
import {
  DifficultyLevel,
  matchesSpotSearch,
  TUS_BRANCHES,
  TUS_SPOT_CARDS,
  TusBranchId,
  TusSessionType,
} from '../data/tusMedicalRepository';
import { BRANCH_VISUALS } from '../data/branchVisuals';
import {
  DAILY_FREE_SPOT_LIMIT,
  triggerHaptic,
} from '../services/nativeBridge';
import { SpotAnswerRecord } from '../services/studyStorage';

interface DogruYanlisScreenProps {
  isPro: boolean;
  isLight: boolean;
  todayFreeUsed: number;
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
  initialBranch?: 'ALL' | TusBranchId;
  onBranchChange?: (branchId: 'ALL' | TusBranchId) => void;
  onBackToSubjects?: () => void;
}

const DogruYanlisScreenInner: React.FC<DogruYanlisScreenProps> = ({
  isPro,
  isLight,
  todayFreeUsed,
  spotAnswers,
  bookmarkedSpotIds,
  onRecordSpotAnswer,
  onToggleBookmarkSpot,
  onOpenPaywall,
  initialBasket = 'unsolved',
  initialBranch = 'ALL',
  onBranchChange,
  onBackToSubjects,
}) => {
  const [sessionFilter, setSessionFilter] = useState<'ALL' | TusSessionType>('ALL');
  const [branchFilter, setBranchFilter] = useState<'ALL' | TusBranchId>(initialBranch);
  const [difficultyFilter, setDifficultyFilter] = useState<'ALL' | DifficultyLevel>('ALL');
  const resolvedDefaultBasket = useMemo(() => {
    if (initialBasket !== 'all' && initialBasket !== 'unsolved') return initialBasket;
    return TUS_SPOT_CARDS.some((s) => !spotAnswers[s.id]) ? 'unsolved' : 'all';
  }, [initialBasket]);
  const [basketFilter, setBasketFilter] = useState<
    'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked'
  >(resolvedDefaultBasket);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [showSubjectPicker, setShowSubjectPicker] = useState(false);
  const [smartFocusMode, setSmartFocusMode] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pinnedSpotId, setPinnedSpotId] = useState<string | null>(null);

  useEffect(() => {
    if (initialBasket === 'wrong' || initialBasket === 'correct' || initialBasket === 'bookmarked' || initialBasket === 'osym_twin') {
      setBasketFilter(initialBasket);
    } else if (initialBasket === 'unsolved') {
      setBasketFilter(TUS_SPOT_CARDS.some((s) => !spotAnswers[s.id]) ? 'unsolved' : 'all');
    }
    setBranchFilter(initialBranch);
    setPinnedSpotId(null);
    setShowSubjectPicker(false);
  }, [initialBasket, initialBranch]);

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

  // Allow browsing all 11 subjects cleanly; 30-item free trial limit is enforced on answer
  const effectivePool = TUS_SPOT_CARDS;

  const filteredSpots = useMemo(() => {
    const qLower = searchQuery.trim().toLowerCase();
    const matched = effectivePool.filter((s) => {
      if (sessionFilter !== 'ALL' && s.session !== sessionFilter) return false;
      if (branchFilter !== 'ALL' && s.branchId !== branchFilter) return false;
      if (difficultyFilter !== 'ALL' && s.difficultyLevel !== difficultyFilter) return false;

      if (s.id === pinnedSpotId) {
        if (qLower) {
          return matchesSpotSearch(s, qLower);
        }
        return true;
      }

      if (basketFilter === 'osym_twin' && !s.isOsymTwin) {
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

      if (qLower && !matchesSpotSearch(s, qLower)) {
        return false;
      }
      return true;
    });

    if (!smartFocusMode) return matched;

    return [...matched].sort((a, b) => {
      if (a.id === pinnedSpotId) return -1;
      if (b.id === pinnedSpotId) return 1;
      const recA = spotAnswers[a.id];
      const recB = spotAnswers[b.id];
      const statusA = !recA ? 2 : !recA.isCorrect ? 3 : 0;
      const statusB = !recB ? 2 : !recB.isCorrect ? 3 : 0;
      if (statusB !== statusA) return statusB - statusA;
      return (branchWeaknessScore[b.branchId] || 50) - (branchWeaknessScore[a.branchId] || 50);
    });
  }, [
    effectivePool,
    sessionFilter,
    branchFilter,
    difficultyFilter,
    basketFilter,
    searchQuery,
    spotAnswers,
    bookmarkedSpotIds,
    smartFocusMode,
    branchWeaknessScore,
    pinnedSpotId,
  ]);

  useEffect(() => {
    setCurrentIndex(0);
    setPinnedSpotId(null);
  }, [sessionFilter, branchFilter, difficultyFilter, basketFilter, searchQuery, isPro, smartFocusMode]);

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
    const basePool = TUS_SPOT_CARDS;

    basePool.forEach((s) => {
      if (s.isOsymTwin) osymTwin++;
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

      if (!isPro && todayFreeUsed >= DAILY_FREE_SPOT_LIMIT && !currentAnswer) {
        await triggerHaptic('warning');
        onOpenPaywall(
          `Bugünkü ${DAILY_FREE_SPOT_LIMIT} ücretsiz D/Y spot hakkın doldu. Sınırsız çözüm için PRO'ya geç veya yarın yenilenmesini bekle.`
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
    [currentSpot, isPro, todayFreeUsed, currentAnswer, onOpenPaywall, onRecordSpotAnswer]
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

    if (activeCritical) {
      const cLower = activeCritical.toLocaleLowerCase('tr-TR');
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
    ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
    : 'bg-[#121826] border-white/8 shadow-lg';

  const activeBranchMeta =
    branchFilter !== 'ALL'
      ? TUS_BRANCHES.find((b) => b.id === branchFilter)
      : null;
  const activeFilterBadgeCount =
    (basketFilter !== 'unsolved' && basketFilter !== 'all' ? 1 : 0) +
    (searchQuery.trim() ? 1 : 0) +
    (smartFocusMode ? 1 : 0);
  const progressPct =
    filteredSpots.length > 0
      ? Math.min(100, Math.round(((safeIndex + 1) / filteredSpots.length) * 100))
      : 0;

  return (
    <div className="space-y-3">
      {/* Ultra-Clean Single-Row Top Bar */}
      <div className={`rounded-2xl border px-2.5 py-2 flex items-center gap-2 ${cardBg}`}>
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
            {activeBranchMeta ? activeBranchMeta.shortName : 'Tüm Dersler'}
          </span>
          <ChevronDown
            className={`w-4 h-4 shrink-0 transition-transform ${
              showSubjectPicker ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div className="flex-1 min-w-0 flex flex-col justify-center gap-1 px-1">
          <span
            className={`text-[11px] font-extrabold tabular-nums text-right truncate ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            {filteredSpots.length > 0
              ? `${(safeIndex + 1).toLocaleString('tr-TR')} / ${filteredSpots.length.toLocaleString('tr-TR')}`
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

        <div className="flex items-center gap-1.5 shrink-0">
          {currentSpot && (
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setPinnedSpotId(currentSpot.id);
                onToggleBookmarkSpot(currentSpot.id);
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

      {/* Collapsible Visual 11-Subject Picker */}
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
                onBranchChange?.('ALL');
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
              Tüm Dersler ({TUS_SPOT_CARDS.length.toLocaleString('tr-TR')})
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
                    onBranchChange?.(b.id);
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
                    {(branchSpotCounts[b.id] || 0).toLocaleString('tr-TR')}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Collapsible Filter & Search Drawer */}
      {showFilters && (
        <div className={`rounded-2xl border p-3 space-y-2.5 ${cardBg}`}>
          <div className="grid grid-cols-4 gap-1.5">
            {(
              [
                { id: 'ALL' as const, label: 'Tüm Zorluk' },
                { id: 'Kolay' as const, label: 'Kolay' },
                { id: 'Orta' as const, label: 'Orta' },
                { id: 'Zor' as const, label: 'Zor' },
              ]
            ).map((d) => {
              const active = difficultyFilter === d.id;
              return (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setDifficultyFilter(d.id);
                  }}
                  className={`h-9 rounded-xl text-xs font-extrabold border transition ${
                    active
                      ? d.id === 'Kolay'
                        ? 'bg-emerald-600 border-emerald-600 text-white'
                        : d.id === 'Zor'
                        ? 'bg-rose-600 border-rose-600 text-white'
                        : 'bg-[#2563EB] border-[#2563EB] text-white'
                      : isLight
                      ? 'bg-slate-50 border-slate-200 text-slate-600'
                      : 'bg-white/[0.04] border-white/10 text-slate-300'
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: 'unsolved' as const, label: `Yeni (${basketCounts.unsolved})` },
              { id: 'wrong' as const, label: `Yanlışlar (${basketCounts.wrong})` },
              { id: 'bookmarked' as const, label: `Kayıtlı (${basketCounts.bookmarked})` },
              { id: 'all' as const, label: `Tümü (${basketCounts.all})` },
              { id: 'osym_twin' as const, label: `İkiz (${basketCounts.osymTwin})` },
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

          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Spot önermesi, sendrom veya ilaç ara..."
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

      {/* Main Spot Card */}
      {!currentSpot ? (
        <div className={`rounded-2xl border p-6 text-center space-y-2.5 ${cardBg}`}>
          <Zap className="w-7 h-7 text-emerald-500 mx-auto" />
          <p className="text-xs font-bold">
            {basketFilter === 'unsolved'
              ? 'Bu filtredeki tüm yeni spotları çözdün!'
              : 'Bu filtrede spot bulunamadı.'}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {basketFilter === 'unsolved' && (
              <button
                type="button"
                onClick={() => setBasketFilter('all')}
                className="px-3 py-1.5 rounded-xl bg-teal-600 text-white text-xs font-bold"
              >
                Tüm Spotları Gör
              </button>
            )}
            <button
              type="button"
              onClick={() => {
                setSessionFilter('ALL');
                setBranchFilter('ALL');
                setDifficultyFilter('ALL');
                setBasketFilter('all');
                setSearchQuery('');
                setSmartFocusMode(false);
                onBranchChange?.('ALL');
              }}
              className="px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
            >
              Filtreleri Sıfırla
            </button>
          </div>
        </div>
      ) : (
        <div className={`rounded-3xl border p-4 sm:p-5 space-y-4 ${cardBg}`}>
          {/* Clean 1-Line Context Header + Subtle Difficulty Tag */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-1.5 min-w-0">
              <span
                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold shrink-0 ${
                  currentSpot.difficultyLevel === 'Kolay'
                    ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-300'
                    : currentSpot.difficultyLevel === 'Zor'
                    ? 'bg-rose-500/15 text-rose-600 dark:text-rose-300'
                    : 'bg-blue-500/15 text-[#2563EB] dark:text-blue-300'
                }`}
              >
                {currentSpot.difficultyLevel}
              </span>
              <span
                className={`text-xs font-bold truncate ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {currentSpot.subTopic}
              </span>
            </div>
            {!isPro && (
              <span className="text-[11px] font-extrabold text-amber-500 shrink-0 tabular-nums">
                {Math.max(0, DAILY_FREE_SPOT_LIMIT - todayFreeUsed)} hak
              </span>
            )}
          </div>

          {/* Crisp Readable Statement Box */}
          <div
            className={`rounded-2xl border p-4 sm:p-5 text-[15.5px] sm:text-[17px] font-semibold leading-[1.6] ${
              isLight
                ? 'bg-slate-50/80 border-slate-200/80 text-slate-900'
                : 'bg-white/[0.03] border-white/8 text-slate-100'
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

          {/* Large, Comfortable 56px DOĞRU / YANLIŞ Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleAnswerSpot(true)}
              className={`h-14 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 border transition active:scale-[0.98] ${
                currentAnswer
                  ? currentSpot.isTrue
                    ? 'bg-emerald-600 border-emerald-500 text-white'
                    : currentAnswer.selected === true
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'opacity-45 border-slate-500/20'
                  : isLight
                  ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                  : 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/40 text-emerald-200'
              }`}
            >
              <Check className="w-5 h-5" />
              <span>DOĞRU</span>
            </button>

            <button
              type="button"
              onClick={() => handleAnswerSpot(false)}
              className={`h-14 rounded-2xl font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 border transition active:scale-[0.98] ${
                currentAnswer
                  ? !currentSpot.isTrue
                    ? 'bg-emerald-600 border-emerald-500 text-white'
                    : currentAnswer.selected === false
                    ? 'bg-rose-600 border-rose-500 text-white'
                    : 'opacity-45 border-slate-500/20'
                  : isLight
                  ? 'bg-rose-50 hover:bg-rose-100 border-rose-300 text-rose-800'
                  : 'bg-rose-500/15 hover:bg-rose-500/25 border-rose-500/40 text-rose-200'
              }`}
            >
              <X className="w-5 h-5" />
              <span>YANLIŞ</span>
            </button>
          </div>

          {/* Large 48px Prev / Next Controls */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <button
              type="button"
              disabled={safeIndex === 0}
              onClick={() => {
                triggerHaptic('light');
                setPinnedSpotId(null);
                setCurrentIndex(Math.max(0, safeIndex - 1));
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

                if (!isPro && todayFreeUsed >= DAILY_FREE_SPOT_LIMIT) {
                  triggerHaptic('warning');
                  onOpenPaywall(
                    `Bugünkü ${DAILY_FREE_SPOT_LIMIT} ücretsiz D/Y spot hakkın doldu. Sınırsız devam etmek için PRO'ya geç.`
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
              className="h-12 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-extrabold inline-flex items-center justify-center gap-1.5 shadow-sm shadow-blue-600/20 transition active:scale-[0.98] disabled:opacity-40"
            >
              <span>Sonraki</span>
              <ChevronRight className="w-4.5 h-4.5" />
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

export const DogruYanlisScreen = React.memo(DogruYanlisScreenInner);
