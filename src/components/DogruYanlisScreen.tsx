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
  matchesSpotSearch,
  TUS_BRANCHES,
  TUS_SPOT_CARDS,
  TusBranchId,
  TusSessionType,
} from '../data/tusMedicalRepository';
import { BRANCH_VISUALS } from '../data/branchVisuals';
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
  initialBranch?: 'ALL' | TusBranchId;
  onBranchChange?: (branchId: 'ALL' | TusBranchId) => void;
}

const DogruYanlisScreenInner: React.FC<DogruYanlisScreenProps> = ({
  isPro,
  isLight,
  totalSolvedCount,
  spotAnswers,
  bookmarkedSpotIds,
  onRecordSpotAnswer,
  onToggleBookmarkSpot,
  onOpenPaywall,
  initialBasket = 'unsolved',
  initialBranch = 'ALL',
  onBranchChange,
}) => {
  const [sessionFilter, setSessionFilter] = useState<'ALL' | TusSessionType>('ALL');
  const [branchFilter, setBranchFilter] = useState<'ALL' | TusBranchId>(initialBranch);
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
    <div className="space-y-2.5">
      {/* Ultra-Clean AMBOSS + Tusleap Single-Row Top Bar */}
      <div className={`rounded-2xl border px-2.5 py-2 flex items-center gap-2 ${cardBg}`}>
        <button
          type="button"
          onClick={() => {
            triggerHaptic('selection');
            setShowSubjectPicker((v) => !v);
            setShowFilters(false);
          }}
          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-xs font-extrabold transition shrink-0 max-w-[148px] ${
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
            className={`w-3.5 h-3.5 shrink-0 transition-transform ${
              showSubjectPicker ? 'rotate-180' : ''
            }`}
          />
        </button>

        <div className="flex-1 min-w-0 flex items-center gap-2">
          <div
            className={`h-1.5 flex-1 rounded-full overflow-hidden ${
              isLight ? 'bg-slate-100' : 'bg-white/10'
            }`}
          >
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${Math.max(4, progressPct)}%` }}
            />
          </div>
          <span
            className={`text-[11px] font-extrabold tabular-nums whitespace-nowrap shrink-0 ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            {filteredSpots.length > 0
              ? `${(safeIndex + 1).toLocaleString('tr-TR')}/${filteredSpots.length.toLocaleString('tr-TR')}`
              : '0/0'}
          </span>
        </div>

        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={handleShuffleJump}
            title="Rastgele Spot"
            aria-label="Rastgele Spot"
            className={`w-8 h-8 rounded-xl flex items-center justify-center transition ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
                : 'bg-white/6 hover:bg-white/12 text-slate-300'
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
          </button>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              setShowFilters((v) => !v);
              setShowSubjectPicker(false);
            }}
            aria-label="Filtre ve Arama"
            className={`relative w-8 h-8 rounded-xl flex items-center justify-center transition ${
              showFilters || activeFilterBadgeCount > 0
                ? 'bg-blue-600 text-white'
                : isLight
                ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-600'
                : 'bg-white/6 hover:bg-white/12 text-slate-300'
            }`}
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            {activeFilterBadgeCount > 0 && !showFilters && (
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-amber-400" />
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
                triggerHaptic('light');
                setSmartFocusMode((m) => !m);
              }}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-xl text-[11px] font-extrabold border transition ${
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
        <div className={`rounded-2xl border p-3.5 sm:p-4 space-y-2.5 ${cardBg}`}>
          {/* Zero-Collision Row A Header */}
          <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-500/15">
            <div className="flex items-center gap-1.5 min-w-0 flex-1">
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
              <span className="text-xs font-extrabold truncate">
                {TUS_BRANCHES.find((b) => b.id === currentSpot.branchId)?.shortName ||
                  currentSpot.branchName}
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
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
            </div>
          </div>

          {/* Row B: Dedicated Non-Colliding Badge & Counter Strip */}
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div className="flex flex-wrap items-center gap-1.5 min-w-0">
              {currentSpot.subTopic.includes('ÖSYM İkizi') && (
                <span
                  className={`px-2 py-0.5 rounded-md text-[10.5px] font-extrabold border ${
                    isLight
                      ? 'bg-amber-50 text-amber-800 border-amber-300'
                      : 'bg-amber-500/15 text-amber-300 border-amber-400/35'
                  }`}
                >
                  ★ ÖSYM İkizi
                </span>
              )}
              <span
                className={`px-2 py-0.5 rounded-md text-[10.5px] font-bold truncate max-w-[220px] sm:max-w-none ${
                  isLight ? 'bg-slate-100 text-slate-600' : 'bg-white/5 text-slate-400'
                }`}
              >
                {currentSpot.subTopic}
              </span>
            </div>

            <span
              className={`px-2 py-0.5 rounded-lg text-[10.5px] font-extrabold tabular-nums border whitespace-nowrap shrink-0 ml-auto ${
                isPro
                  ? isLight
                    ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                    : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  : isLight
                  ? 'bg-slate-100 text-slate-700 border-slate-200'
                  : 'bg-white/5 text-slate-300 border-white/10'
              }`}
            >
              {(safeIndex + 1).toLocaleString('tr-TR')} /{' '}
              {filteredSpots.length.toLocaleString('tr-TR')}
            </span>
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
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl border text-xs font-bold shrink-0 transition disabled:opacity-40 ${
                isLight
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                  : 'bg-[#071117] hover:bg-white/5 border-white/10 text-slate-200'
              }`}
            >
              <ChevronLeft className="w-3.5 h-3.5 shrink-0" />
              <span>Önceki</span>
            </button>

            {isPro ? (
              <div className="min-w-0 inline-flex items-center gap-1 text-[10.5px] font-bold text-emerald-500 truncate">
                <Crown className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span className="truncate">PRO • {filteredSpots.length}</span>
              </div>
            ) : (
              <button
                type="button"
                onClick={() =>
                  onOpenPaywall(
                    `PRO pakete geçerek ${TUS_SPOT_CARDS.length}+ D/Y spot kartının tamamını sınırsız açabilirsiniz.`
                  )
                }
                className="min-w-0 inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-500/15 border border-amber-500/30 text-amber-500 text-[10.5px] font-extrabold hover:bg-amber-500/25 transition truncate"
              >
                <Lock className="w-3 h-3 shrink-0" />
                <span className="truncate">+{TUS_SPOT_CARDS.length - FREE_QUESTION_LIMIT} PRO</span>
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
                  TUS_SPOT_CARDS.length > FREE_QUESTION_LIMIT
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

export const DogruYanlisScreen = React.memo(DogruYanlisScreenInner);
