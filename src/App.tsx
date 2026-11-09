import React, { useEffect, useMemo, useState } from 'react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  CheckSquare,
  Clock,
  Crown,
  Flame,
  Moon,
  Sparkles,
  Stethoscope,
  Sun,
  X,
  Zap,
} from 'lucide-react';
import {
  OptionLetter,
  TOTAL_INTERACTIVE_TUS_ITEMS,
  TUS_SPOT_CARDS,
  TUS_VAKA_QUESTIONS,
  TusBranchId,
} from './data/tusMedicalRepository';
import {
  loadPersistedProStatus,
  requestNativeEntitlementCheck,
  savePersistedProStatus,
  triggerHaptic,
} from './services/nativeBridge';
import {
  calculateOsymNet,
  DEFAULT_STUDY_STATE,
  getTusCountdownParts,
  loadStudyState,
  saveStudyState,
  TusExamAttempt,
  TusStudyState,
} from './services/studyStorage';
import { VakaTestScreen } from './components/VakaTestScreen';
import { DogruYanlisScreen } from './components/DogruYanlisScreen';
import { DenemeRehberScreen } from './components/DenemeRehberScreen';
import { AnalizScreen } from './components/AnalizScreen';
import { PaywallModal } from './components/PaywallModal';

type MainTabId = 'vaka' | 'spot' | 'deneme' | 'analiz';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<MainTabId>('vaka');
  const [studyState, setStudyState] = useState<TusStudyState>(() =>
    loadStudyState()
  );
  const [isPro, setIsPro] = useState<boolean>(false);
  const [paywallOpen, setPaywallOpen] = useState<boolean>(false);
  const [paywallReason, setPaywallReason] = useState<string | undefined>(
    undefined
  );
  const [proBannerVisible, setProBannerVisible] = useState<boolean>(false);
  const [vakaBasketJump, setVakaBasketJump] = useState<
    'all' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked'
  >('all');
  const [spotBasketJump, setSpotBasketJump] = useState<
    'all' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked'
  >('all');

  // Persist studyState on changes
  useEffect(() => {
    saveStudyState(studyState);
  }, [studyState]);

  // Initialize Pro status from storage + Native iOS StoreKit 2 entitlement check
  useEffect(() => {
    let mounted = true;
    loadPersistedProStatus().then((persisted) => {
      if (mounted && persisted) {
        setIsPro(true);
      }
      requestNativeEntitlementCheck();
    });

    const onNativeProStatus = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      if (detail.isPro) {
        setIsPro(true);
        savePersistedProStatus(true);
      }
    };

    window.addEventListener('tus:proStatus', onNativeProStatus as EventListener);
    return () => {
      mounted = false;
      window.removeEventListener(
        'tus:proStatus',
        onNativeProStatus as EventListener
      );
    };
  }, []);

  const summaryStats = useMemo(() => {
    const vakaList = Object.values(studyState.vakaAnswers);
    const spotList = Object.values(studyState.spotAnswers);
    const totalSolved = vakaList.length + spotList.length;
    const totalCorrect =
      vakaList.filter((x) => x.isCorrect).length +
      spotList.filter((x) => x.isCorrect).length;
    const totalWrong = totalSolved - totalCorrect;
    const net = calculateOsymNet(totalCorrect, totalWrong);
    return {
      totalSolved,
      totalCorrect,
      totalWrong,
      net,
    };
  }, [studyState.vakaAnswers, studyState.spotAnswers]);

  const tusCountdown = useMemo(
    () => getTusCountdownParts(studyState.targetTusDate),
    [studyState.targetTusDate]
  );

  const handleOpenPaywall = (reason?: string) => {
    setPaywallReason(reason);
    setPaywallOpen(true);
  };

  const handleRecordVakaAnswer = (
    questionId: string,
    selected: OptionLetter,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => {
    setStudyState((prev) => {
      const alreadyExisted = Boolean(prev.vakaAnswers[questionId]);
      return {
        ...prev,
        vakaAnswers: {
          ...prev.vakaAnswers,
          [questionId]: {
            selected,
            isCorrect,
            timestamp: Date.now(),
            branchId,
          },
        },
        todaySolvedCount: alreadyExisted
          ? prev.todaySolvedCount
          : prev.todaySolvedCount + 1,
      };
    });
  };

  const handleRecordSpotAnswer = (
    spotId: string,
    selectedTrue: boolean,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => {
    setStudyState((prev) => {
      const alreadyExisted = Boolean(prev.spotAnswers[spotId]);
      return {
        ...prev,
        spotAnswers: {
          ...prev.spotAnswers,
          [spotId]: {
            selected: selectedTrue,
            isCorrect,
            timestamp: Date.now(),
            branchId,
          },
        },
        todaySolvedCount: alreadyExisted
          ? prev.todaySolvedCount
          : prev.todaySolvedCount + 1,
      };
    });
  };

  const handleToggleBookmarkVaka = (questionId: string) => {
    setStudyState((prev) => {
      const exists = prev.bookmarkedVakaIds.includes(questionId);
      return {
        ...prev,
        bookmarkedVakaIds: exists
          ? prev.bookmarkedVakaIds.filter((id) => id !== questionId)
          : [...prev.bookmarkedVakaIds, questionId],
      };
    });
  };

  const handleToggleBookmarkSpot = (spotId: string) => {
    setStudyState((prev) => {
      const exists = prev.bookmarkedSpotIds.includes(spotId);
      return {
        ...prev,
        bookmarkedSpotIds: exists
          ? prev.bookmarkedSpotIds.filter((id) => id !== spotId)
          : [...prev.bookmarkedSpotIds, spotId],
      };
    });
  };

  const handleRecordExamAttempt = (attempt: TusExamAttempt) => {
    setStudyState((prev) => ({
      ...prev,
      examHistory: [attempt, ...prev.examHistory].slice(0, 30),
    }));
  };

  const handleJumpToMistakes = (mode: 'vaka' | 'spot') => {
    if (mode === 'vaka') {
      setVakaBasketJump('wrong');
      setActiveTab('vaka');
    } else {
      setSpotBasketJump('wrong');
      setActiveTab('spot');
    }
  };

  const handleResetProgress = () => {
    triggerHaptic('warning');
    setStudyState({
      ...DEFAULT_STUDY_STATE,
      theme: studyState.theme,
    });
  };

  const isLightMode = studyState.theme === 'light';

  const navTabs: Array<{
    id: MainTabId;
    shortLabel: string;
    fullLabel: string;
    icon: React.ReactNode;
  }> = [
    {
      id: 'vaka',
      shortLabel: 'Vaka & Test',
      fullLabel: 'Vaka & Test Çöz',
      icon: <CheckSquare className="w-4 h-4" />,
    },
    {
      id: 'spot',
      shortLabel: 'D/Y Spot',
      fullLabel: 'D/Y Spot Öğretici',
      icon: <Zap className="w-4 h-4" />,
    },
    {
      id: 'deneme',
      shortLabel: 'Deneme',
      fullLabel: 'Deneme & Rehber',
      icon: <Award className="w-4 h-4" />,
    },
    {
      id: 'analiz',
      shortLabel: 'Karne',
      fullLabel: 'Karne & Plan',
      icon: <BarChart3 className="w-4 h-4" />,
    },
  ];

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-200 ${
        isLightMode
          ? 'bg-[#F3F7F9] text-slate-900'
          : 'bg-[#071117] text-slate-100'
      }`}
    >
      {/* Ultra-Clean Responsive Top Bar (Zero Truncation on Any Phone or Tablet) */}
      <header
        className={`sticky top-0 z-30 border-b pt-safe ${
          isLightMode
            ? 'ios-glass-header-light border-slate-200/80'
            : 'ios-glass-header-dark border-white/10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-3 sm:px-4 h-12 flex items-center justify-between gap-2">
          {/* Left: Brand Logo & Non-Truncating Title */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-sm shrink-0">
              <Stethoscope className="w-4 h-4 text-white" />
            </div>
            <h1
              className={`text-sm sm:text-base font-extrabold tracking-tight whitespace-nowrap shrink-0 ${
                isLightMode ? 'text-slate-900' : 'text-white'
              }`}
            >
              TUS Akademi
            </h1>
          </div>

          {/* Center-Right Desktop Tabs (Tablet Landscape & Desktop) */}
          <div className="hidden md:flex items-center gap-1">
            {navTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setActiveTab(tab.id);
                  }}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 transition ${
                    active
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : isLightMode
                      ? 'text-slate-600 hover:bg-slate-200/70'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.fullLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Right Status Controls (Compact & Harmonious Across All Screen Sizes) */}
          <div className="flex items-center gap-1.5 shrink-0">
            {/* Live TUS Countdown Pill */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setActiveTab('analiz');
              }}
              title="Canlı TUS Sayacını Gör"
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-extrabold tabular-nums transition ${
                isLightMode
                  ? 'bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100'
                  : 'bg-teal-500/10 border-teal-400/25 text-teal-300 hover:bg-teal-500/20'
              }`}
            >
              <Clock className="w-3 h-3 text-teal-500" />
              <span>TUS: {tusCountdown.days}g</span>
            </button>

            {/* Streak */}
            <div
              title="Günlük Çalışma Serisi"
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-bold ${
                isLightMode
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-amber-500/10 border-amber-400/25 text-amber-300'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>{studyState.streakDays}</span>
            </div>

            {/* Theme Toggle */}
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setStudyState((prev) => ({
                  ...prev,
                  theme: prev.theme === 'dark' ? 'light' : 'dark',
                }));
              }}
              aria-label="Tema Değiştir"
              className={`w-7 h-7 rounded-lg border flex items-center justify-center transition ${
                isLightMode
                  ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-700'
                  : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-300'
              }`}
            >
              {isLightMode ? (
                <Moon className="w-3.5 h-3.5 text-slate-700" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              )}
            </button>

            {/* Distinct PRO CTA vs PRO AKTİF Badge */}
            {isPro ? (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setProBannerVisible((v) => !v);
                }}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border text-[11px] font-extrabold whitespace-nowrap transition ${
                  isLightMode
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                    : 'bg-emerald-500/20 border-emerald-400/40 text-emerald-300'
                }`}
              >
                <Sparkles className="w-3 h-3 text-emerald-500" />
                <span>PRO</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  handleOpenPaywall();
                }}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-[11px] font-extrabold whitespace-nowrap shadow-sm"
              >
                <Crown className="w-3 h-3" />
                <span>PRO'ya Geç</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content Container (Responsive Across Phones & Tablets) */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 pt-2 pb-24 md:pb-8 space-y-2">
        {/* Celebratory / Status Banner when PRO is unlocked */}
        {isPro && proBannerVisible && (
          <div
            className={`rounded-2xl border px-3.5 py-2.5 flex items-center justify-between gap-2 text-xs ${
              isLightMode
                ? 'bg-emerald-50 border-emerald-300 text-emerald-900'
                : 'bg-emerald-950/70 border-emerald-500/40 text-emerald-100'
            }`}
          >
            <div className="flex items-center gap-2 min-w-0">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span className="font-semibold">
                <strong>PRO Ömür Boyu Erişim Aktif:</strong> Tüm 11 branşta{' '}
                <strong>{TUS_VAKA_QUESTIONS.length} Vaka Sorusu</strong> +{' '}
                <strong>{TUS_SPOT_CARDS.length} D/Y Spot</strong> (Toplam{' '}
                <strong>{TOTAL_INTERACTIVE_TUS_ITEMS} Soru</strong>) sınırsız
                açık!
              </span>
            </div>
            <button
              type="button"
              onClick={() => setProBannerVisible(false)}
              className="p-1 rounded-lg opacity-70 hover:opacity-100 shrink-0"
              aria-label="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        )}

        {activeTab === 'vaka' && (
          <VakaTestScreen
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            vakaAnswers={studyState.vakaAnswers}
            bookmarkedVakaIds={studyState.bookmarkedVakaIds}
            onRecordVakaAnswer={handleRecordVakaAnswer}
            onToggleBookmarkVaka={handleToggleBookmarkVaka}
            onOpenPaywall={handleOpenPaywall}
            initialBasket={vakaBasketJump}
          />
        )}

        {activeTab === 'spot' && (
          <DogruYanlisScreen
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            spotAnswers={studyState.spotAnswers}
            bookmarkedSpotIds={studyState.bookmarkedSpotIds}
            onRecordSpotAnswer={handleRecordSpotAnswer}
            onToggleBookmarkSpot={handleToggleBookmarkSpot}
            onOpenPaywall={handleOpenPaywall}
            initialBasket={spotBasketJump}
          />
        )}

        {activeTab === 'deneme' && (
          <DenemeRehberScreen
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            onRecordExamAttempt={handleRecordExamAttempt}
            onRecordVakaAnswer={handleRecordVakaAnswer}
            onOpenPaywall={handleOpenPaywall}
          />
        )}

        {activeTab === 'analiz' && (
          <AnalizScreen
            studyState={studyState}
            isPro={isPro}
            isLight={isLightMode}
            onUpdateStudyState={setStudyState}
            onJumpToMistakes={handleJumpToMistakes}
            onOpenPaywall={handleOpenPaywall}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Modern iOS Translucent Floating Glass Pill Dock */}
      <div className="md:hidden fixed bottom-3 inset-x-3 z-30 pointer-events-none flex justify-center pb-safe">
        <nav
          aria-label="Ana Navigasyon"
          className={`pointer-events-auto w-full max-w-md rounded-2xl p-1 transition-all duration-200 ${
            isLightMode ? 'ios-glass-dock-light' : 'ios-glass-dock-dark'
          }`}
        >
          <div className="grid grid-cols-4 gap-1">
            {navTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setActiveTab(tab.id);
                  }}
                  className={`py-1.5 px-1 rounded-xl flex flex-col items-center justify-center gap-0.5 transition-all duration-150 ${
                    active
                      ? isLightMode
                        ? 'bg-emerald-600 text-white font-bold shadow-sm'
                        : 'bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/25'
                      : isLightMode
                      ? 'text-slate-600 hover:text-slate-900 font-semibold'
                      : 'text-slate-400 hover:text-slate-200 font-medium'
                  }`}
                >
                  {tab.icon}
                  <span className="text-[10px] leading-tight tracking-tight truncate max-w-full">
                    {tab.shortLabel}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      {/* Responsive Paywall Modal */}
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        onUnlocked={() => {
          setIsPro(true);
          setProBannerVisible(true);
        }}
        totalSolvedCount={summaryStats.totalSolved}
        reasonMessage={paywallReason}
        isLight={isLightMode}
      />
    </div>
  );
};

export default App;
