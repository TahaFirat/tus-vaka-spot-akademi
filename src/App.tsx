import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  CheckSquare,
  Crown,
  Flame,
  Home,
  LayoutGrid,
  Moon,
  Sparkles,
  Sun,
  Timer,
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
  PRO_PRICE_LABEL,
  loadPersistedProStatus,
  requestNativeEntitlementCheck,
  savePersistedProStatus,
  syncNativeTheme,
  syncNativeWidgetSnapshot,
  triggerHaptic,
} from './services/nativeBridge';
import {
  calculateOsymNet,
  computeNextSrsEntry,
  DEFAULT_STUDY_STATE,
  getLocalDateString,
  getTusCountdownParts,
  loadStudyState,
  saveStudyState,
  TusExamAttempt,
  TusStudyState,
  TwinYearFilter,
} from './services/studyStorage';
import { AnaSayfaScreen } from './components/AnaSayfaScreen';
import { VakaTestScreen } from './components/VakaTestScreen';
import { DogruYanlisScreen } from './components/DogruYanlisScreen';
import { DenemeRehberScreen } from './components/DenemeRehberScreen';
import { AnalizScreen } from './components/AnalizScreen';
import { OdakModuScreen } from './components/OdakModuScreen';
import { PaywallModal } from './components/PaywallModal';
import { TusHeaderCountdownPill } from './components/TusCountdownTimer';

type MainTabId = 'home' | 'odak' | 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz';
type QueueBasket = 'all' | 'osym_twin' | 'unsolved' | 'wrong' | 'correct' | 'bookmarked';

export const App: React.FC = () => {
  const [studyState, setStudyState] = useState<TusStudyState>(() => loadStudyState());
  const [activeTab, setActiveTab] = useState<MainTabId>(() =>
    loadStudyState().uiMode === 'odak' ? 'odak' : 'home'
  );
  const [isPro, setIsPro] = useState<boolean>(false);
  const [proPriceLabel, setProPriceLabel] = useState<string>(PRO_PRICE_LABEL);
  const [paywallOpen, setPaywallOpen] = useState<boolean>(false);
  const [paywallReason, setPaywallReason] = useState<string | undefined>(undefined);
  const [proBannerVisible, setProBannerVisible] = useState<boolean>(false);
  const [quickSheetOpen, setQuickSheetOpen] = useState<boolean>(false);

  const [vakaBasketJump, setVakaBasketJump] = useState<QueueBasket>('unsolved');
  const [twinBasketJump, setTwinBasketJump] = useState<QueueBasket>('unsolved');
  const [vakaBranchJump, setVakaBranchJump] = useState<'ALL' | TusBranchId>(
    () => studyState.vakaBranchPref
  );
  const [twinBranchJump, setTwinBranchJump] = useState<'ALL' | TusBranchId>(
    () => studyState.twinBranchPref
  );
  const [spotBasketJump, setSpotBasketJump] = useState<QueueBasket>('unsolved');
  const [spotBranchJump, setSpotBranchJump] = useState<'ALL' | TusBranchId>(
    () => studyState.spotBranchPref
  );

  // Termal optimizasyon: Debounced (350ms) state yazımı + arka plan/kapanış flush
  const latestStateRef = useRef<TusStudyState>(studyState);
  latestStateRef.current = studyState;

  useEffect(() => {
    const t = window.setTimeout(() => {
      saveStudyState(latestStateRef.current);
    }, 350);
    return () => window.clearTimeout(t);
  }, [studyState]);

  useEffect(() => {
    const flushNow = () => {
      saveStudyState(latestStateRef.current);
    };
    const onVisibility = () => {
      if (document.hidden) flushNow();
    };
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener('pagehide', flushNow);
    return () => {
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener('pagehide', flushNow);
    };
  }, []);

  // Yalnızca tema gerçekten değiştiğinde native iOS status bar / arka plan senkronize edilir
  useEffect(() => {
    syncNativeTheme(studyState.theme === 'light' ? 'light' : 'dark');
  }, [studyState.theme]);

  // Widget & Kilit Ekranı verilerini debounced (600ms) şekilde iOS Keychain + WidgetKit'e aktar
  const todayKey = getLocalDateString();
  const todayStudyMinutes = Math.round(
    (studyState.studySecondsByDate[todayKey] || 0) / 60
  );
  useEffect(() => {
    const t = window.setTimeout(() => {
      const info = getTusCountdownParts(studyState.targetTusDate);
      syncNativeWidgetSnapshot({
        targetTusDate: info.effectiveDate,
        examLabel: info.examLabel,
        streakDays: studyState.streakDays,
        todaySolved: studyState.todaySolvedCount,
        dailyTarget: studyState.dailyTarget,
        todayStudyMinutes,
        dailyGoalMinutes: studyState.dailyGoalMinutes,
      });
    }, 600);
    return () => window.clearTimeout(t);
  }, [
    studyState.targetTusDate,
    studyState.streakDays,
    studyState.todaySolvedCount,
    studyState.dailyTarget,
    todayStudyMinutes,
    studyState.dailyGoalMinutes,
  ]);

  // StoreKit entitlement & canlı fiyat dinleyicileri
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

    const onNativeProPrice = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      if (detail.displayPrice) {
        setProPriceLabel(String(detail.displayPrice));
      }
    };

    window.addEventListener('tus:proStatus', onNativeProStatus as EventListener);
    window.addEventListener('tus:proPrice', onNativeProPrice as EventListener);
    return () => {
      mounted = false;
      window.removeEventListener('tus:proStatus', onNativeProStatus as EventListener);
      window.removeEventListener('tus:proPrice', onNativeProPrice as EventListener);
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
    return { totalSolved, totalCorrect, totalWrong, net };
  }, [studyState.vakaAnswers, studyState.spotAnswers]);

  const handleOpenPaywall = useCallback((reason?: string) => {
    setPaywallReason(reason);
    setPaywallOpen(true);
  }, []);

  const handleRecordVakaAnswer = useCallback(
    (
      questionId: string,
      selected: OptionLetter,
      isCorrect: boolean,
      branchId: TusBranchId
    ) => {
      setStudyState((prev) => {
        const alreadyExisted = Boolean(prev.vakaAnswers[questionId]);
        const now = Date.now();
        return {
          ...prev,
          vakaAnswers: {
            ...prev.vakaAnswers,
            [questionId]: { selected, isCorrect, timestamp: now, branchId },
          },
          srsMap: {
            ...prev.srsMap,
            [questionId]: computeNextSrsEntry(prev.srsMap[questionId], isCorrect, 'vaka', now),
          },
          todaySolvedCount: alreadyExisted
            ? prev.todaySolvedCount
            : prev.todaySolvedCount + 1,
        };
      });
    },
    []
  );

  const handleRecordSpotAnswer = useCallback(
    (
      spotId: string,
      selectedTrue: boolean,
      isCorrect: boolean,
      branchId: TusBranchId
    ) => {
      setStudyState((prev) => {
        const alreadyExisted = Boolean(prev.spotAnswers[spotId]);
        const now = Date.now();
        return {
          ...prev,
          spotAnswers: {
            ...prev.spotAnswers,
            [spotId]: { selected: selectedTrue, isCorrect, timestamp: now, branchId },
          },
          srsMap: {
            ...prev.srsMap,
            [spotId]: computeNextSrsEntry(prev.srsMap[spotId], isCorrect, 'spot', now),
          },
          todaySolvedCount: alreadyExisted
            ? prev.todaySolvedCount
            : prev.todaySolvedCount + 1,
        };
      });
    },
    []
  );

  const handleToggleBookmarkVaka = useCallback((questionId: string) => {
    setStudyState((prev) => {
      const exists = prev.bookmarkedVakaIds.includes(questionId);
      return {
        ...prev,
        bookmarkedVakaIds: exists
          ? prev.bookmarkedVakaIds.filter((id) => id !== questionId)
          : [...prev.bookmarkedVakaIds, questionId],
      };
    });
  }, []);

  const handleToggleBookmarkSpot = useCallback((spotId: string) => {
    setStudyState((prev) => {
      const exists = prev.bookmarkedSpotIds.includes(spotId);
      return {
        ...prev,
        bookmarkedSpotIds: exists
          ? prev.bookmarkedSpotIds.filter((id) => id !== spotId)
          : [...prev.bookmarkedSpotIds, spotId],
      };
    });
  }, []);

  const handleRecordExamAttempt = useCallback((attempt: TusExamAttempt) => {
    setStudyState((prev) => ({
      ...prev,
      examHistory: [attempt, ...prev.examHistory].slice(0, 30),
    }));
  }, []);

  const handleJumpToMistakes = useCallback((mode: 'vaka' | 'spot') => {
    if (mode === 'vaka') {
      setVakaBasketJump('wrong');
      setVakaBranchJump('ALL');
      setActiveTab('vaka');
    } else {
      setSpotBasketJump('wrong');
      setSpotBranchJump('ALL');
      setActiveTab('spot');
    }
  }, []);

  const handleResetProgress = useCallback(() => {
    triggerHaptic('warning');
    setStudyState((prev) => ({
      ...DEFAULT_STUDY_STATE,
      theme: prev.theme,
      uiMode: prev.uiMode,
    }));
  }, []);

  const handleSwitchMode = (nextMode: 'akademi' | 'odak') => {
    triggerHaptic('medium');
    setQuickSheetOpen(false);
    setStudyState((prev) => ({ ...prev, uiMode: nextMode }));
    if (nextMode === 'odak') {
      setActiveTab('odak');
    } else if (activeTab === 'odak') {
      setActiveTab('home');
    }
  };

  const handleNavigateTab = useCallback(
    (
      tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz' | 'odak',
      options?: {
        basket?: QueueBasket;
        branchId?: 'ALL' | TusBranchId;
      }
    ) => {
      setQuickSheetOpen(false);
      const nextBasket = options?.basket ?? 'unsolved';
      if (tab === 'vaka') {
        setVakaBasketJump(nextBasket);
        if (options?.branchId) {
          setVakaBranchJump(options.branchId);
          setStudyState((p) => ({ ...p, vakaBranchPref: options.branchId! }));
        } else {
          setVakaBranchJump(latestStateRef.current.vakaBranchPref);
        }
      } else if (tab === 'cikmis') {
        setTwinBasketJump(nextBasket);
        if (options?.branchId) {
          setTwinBranchJump(options.branchId);
          setStudyState((p) => ({ ...p, twinBranchPref: options.branchId! }));
        } else {
          setTwinBranchJump(latestStateRef.current.twinBranchPref);
        }
      } else if (tab === 'spot') {
        setSpotBasketJump(nextBasket);
        if (options?.branchId) {
          setSpotBranchJump(options.branchId);
          setStudyState((p) => ({ ...p, spotBranchPref: options.branchId! }));
        } else {
          setSpotBranchJump(latestStateRef.current.spotBranchPref);
        }
      }
      setActiveTab(tab);
    },
    []
  );

  const isLightMode = studyState.theme === 'light';
  const isOdakMode = studyState.uiMode === 'odak';

  const desktopTabs: Array<{
    id: MainTabId;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'home', label: 'Ana Sayfa', icon: <Home className="w-4 h-4" /> },
    { id: 'odak', label: 'Odak', icon: <Timer className="w-4 h-4" /> },
    { id: 'vaka', label: 'Vaka', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'cikmis', label: 'Çıkmış İkiz', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'spot', label: 'D/Y Spot', icon: <Zap className="w-4 h-4" /> },
    { id: 'deneme', label: 'Deneme', icon: <Award className="w-4 h-4" /> },
    { id: 'analiz', label: 'Karne', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-200 ${
        isLightMode
          ? 'bg-[#F3F7F9] text-slate-900'
          : 'bg-[#071117] text-slate-100'
      }`}
    >
      {/* Responsive Üst Bar + OKX TR / Binance Mod Geçiş Anahtarı */}
      <header
        className={`sticky top-0 z-30 border-b pt-safe ${
          isLightMode
            ? 'ios-glass-header-light border-slate-200/80'
            : 'ios-glass-header-dark border-white/10'
        }`}
      >
        <div className="max-w-4xl mx-auto px-2.5 sm:px-4 h-12 flex items-center justify-between gap-1.5">
          {/* Sol: İkon + OKX/Binance Stil Mod Switcher */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setActiveTab(isOdakMode ? 'odak' : 'home');
              }}
              aria-label="Ana Görünüm"
              className="shrink-0"
            >
              <img
                src="/icon-192.png"
                alt="TUS Akademi"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl shadow-xs object-cover"
              />
            </button>

            <div
              className={`inline-flex rounded-xl p-0.5 border ${
                isLightMode
                  ? 'bg-slate-100 border-slate-200'
                  : 'bg-[#0C1B24] border-white/10'
              }`}
              role="group"
              aria-label="Çalışma Modu"
            >
              <button
                type="button"
                onClick={() => handleSwitchMode('akademi')}
                className={`px-1.5 sm:px-2 py-1 rounded-lg text-[10.5px] sm:text-[11px] font-extrabold transition whitespace-nowrap ${
                  !isOdakMode
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : isLightMode
                    ? 'text-slate-600'
                    : 'text-slate-400'
                }`}
              >
                Akademi
              </button>
              <button
                type="button"
                onClick={() => handleSwitchMode('odak')}
                className={`px-1.5 sm:px-2 py-1 rounded-lg text-[10.5px] sm:text-[11px] font-extrabold inline-flex items-center gap-1 transition whitespace-nowrap ${
                  isOdakMode
                    ? 'bg-emerald-600 text-white shadow-xs'
                    : isLightMode
                    ? 'text-slate-600'
                    : 'text-slate-400'
                }`}
              >
                <Zap className="w-3 h-3" />
                <span>Odak</span>
              </button>
            </div>
          </div>

          {/* Masaüstü / Geniş Tablet Yatay Sekmeler */}
          <div className="hidden lg:flex items-center gap-1 min-w-0 overflow-x-auto no-scrollbar">
            {desktopTabs.map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    if (tab.id === 'vaka' || tab.id === 'cikmis' || tab.id === 'spot') {
                      handleNavigateTab(tab.id, { basket: 'unsolved' });
                    } else {
                      setActiveTab(tab.id);
                    }
                  }}
                  className={`px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 transition whitespace-nowrap ${
                    active
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : isLightMode
                      ? 'text-slate-600 hover:bg-slate-200/70'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Sağ: İzole Canlı TUS Sayacı + Seri + Tema + PRO */}
          <div className="flex items-center gap-1 shrink-0">
            <TusHeaderCountdownPill
              targetDate={studyState.targetTusDate}
              isLight={isLightMode}
              onClick={() => {
                triggerHaptic('light');
                setActiveTab('analiz');
              }}
            />

            <div
              title="Günlük Çalışma Serisi"
              className={`hidden xs:inline-flex sm:inline-flex items-center gap-1 px-1.5 py-1 rounded-lg border text-[11px] font-bold ${
                isLightMode
                  ? 'bg-amber-50 border-amber-200 text-amber-700'
                  : 'bg-amber-500/10 border-amber-400/25 text-amber-300'
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>{studyState.streakDays}</span>
            </div>

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

            {isPro ? (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setProBannerVisible((v) => !v);
                }}
                className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-extrabold whitespace-nowrap transition ${
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
                className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[11px] font-extrabold whitespace-nowrap shadow-xs"
              >
                <Crown className="w-3 h-3" />
                <span>PRO</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Ana İçerik Alanı */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 pt-2 pb-24 lg:pb-8 space-y-2">
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
                <strong>PRO Aktif:</strong> {TOTAL_INTERACTIVE_TUS_ITEMS}+ Vaka & D/Y Spot sınırsız açık.
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

        {activeTab === 'home' && (
          <AnaSayfaScreen
            studyState={studyState}
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            priceLabel={proPriceLabel}
            onNavigateTab={handleNavigateTab}
            onOpenPaywall={handleOpenPaywall}
          />
        )}

        {activeTab === 'odak' && (
          <OdakModuScreen
            studyState={studyState}
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            onUpdateStudyState={setStudyState}
            onNavigateStudy={handleNavigateTab}
            onRecordSpotAnswer={handleRecordSpotAnswer}
            onOpenPaywall={handleOpenPaywall}
          />
        )}

        {activeTab === 'vaka' && (
          <VakaTestScreen
            key="vaka-standard"
            mode="standard"
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            vakaAnswers={studyState.vakaAnswers}
            bookmarkedVakaIds={studyState.bookmarkedVakaIds}
            onRecordVakaAnswer={handleRecordVakaAnswer}
            onToggleBookmarkVaka={handleToggleBookmarkVaka}
            onOpenPaywall={handleOpenPaywall}
            initialBasket={vakaBasketJump}
            initialBranch={vakaBranchJump}
            onPrefChange={(p) => {
              if (p.branchId) {
                setVakaBranchJump(p.branchId);
                setStudyState((prev) => ({ ...prev, vakaBranchPref: p.branchId! }));
              }
            }}
          />
        )}

        {activeTab === 'cikmis' && (
          <VakaTestScreen
            key="vaka-osym-twin"
            mode="osym_twin"
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            vakaAnswers={studyState.vakaAnswers}
            bookmarkedVakaIds={studyState.bookmarkedVakaIds}
            onRecordVakaAnswer={handleRecordVakaAnswer}
            onToggleBookmarkVaka={handleToggleBookmarkVaka}
            onOpenPaywall={handleOpenPaywall}
            initialBasket={twinBasketJump}
            initialBranch={twinBranchJump}
            initialYear={studyState.twinYearPref}
            onPrefChange={(p) => {
              if (p.branchId) setTwinBranchJump(p.branchId);
              setStudyState((prev) => ({
                ...prev,
                ...(p.branchId ? { twinBranchPref: p.branchId } : {}),
                ...(p.year ? { twinYearPref: p.year as TwinYearFilter } : {}),
              }));
            }}
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
            initialBranch={spotBranchJump}
            onBranchChange={(b) => {
              setSpotBranchJump(b);
              setStudyState((prev) => ({ ...prev, spotBranchPref: b }));
            }}
          />
        )}

        {activeTab === 'deneme' && (
          <DenemeRehberScreen
            isPro={isPro}
            isLight={isLightMode}
            totalSolvedCount={summaryStats.totalSolved}
            vakaAnswers={studyState.vakaAnswers}
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

      {/* OKX TR / Binance Tarzı Hızlı Etüt Menüsü (Single-Center-Icon Bottom Sheet) */}
      {quickSheetOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/55 flex items-end justify-center p-3 pb-6"
          onClick={() => setQuickSheetOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-3xl border p-4 space-y-3 shadow-2xl ${
              isLightMode
                ? 'bg-white border-slate-200 text-slate-900'
                : 'bg-[#0B1820] border-emerald-500/30 text-slate-100'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold uppercase tracking-wider text-emerald-500">
                Hızlı Çalışma Geçişi
              </div>
              <button
                type="button"
                onClick={() => setQuickSheetOpen(false)}
                className="p-1 rounded-full bg-slate-500/15"
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  label: 'Kronometre & Konular',
                  sub: 'Odak çalışma alanı',
                  icon: <Timer className="w-4 h-4 text-emerald-500" />,
                  onTap: () => handleNavigateTab('odak'),
                },
                {
                  label: 'Yeni Vaka Çöz',
                  sub: 'Kaldığın yerden devam',
                  icon: <CheckSquare className="w-4 h-4 text-teal-500" />,
                  onTap: () => handleNavigateTab('vaka', { basket: 'unsolved' }),
                },
                {
                  label: 'Çıkmış İkizler',
                  sub: '2019–2025 TUS ikizleri',
                  icon: <Sparkles className="w-4 h-4 text-amber-500" />,
                  onTap: () => handleNavigateTab('cikmis', { basket: 'unsolved' }),
                },
                {
                  label: 'Hızlı D/Y Spot',
                  sub: 'Aktif hatırlama kartları',
                  icon: <Zap className="w-4 h-4 text-cyan-500" />,
                  onTap: () => handleNavigateTab('spot', { basket: 'unsolved' }),
                },
                {
                  label: 'Deneme & Hesaplayıcı',
                  sub: 'Süreli sınav & formüller',
                  icon: <Award className="w-4 h-4 text-emerald-500" />,
                  onTap: () => handleNavigateTab('deneme'),
                },
                {
                  label: 'Karne & İstatistik',
                  sub: 'Net analizi & takvim',
                  icon: <BarChart3 className="w-4 h-4 text-teal-500" />,
                  onTap: () => handleNavigateTab('analiz'),
                },
              ].map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={item.onTap}
                  className={`text-left rounded-2xl border p-3 flex items-start gap-2.5 transition ${
                    isLightMode
                      ? 'bg-slate-50 hover:bg-emerald-50 border-slate-200'
                      : 'bg-[#071117] hover:bg-emerald-950/30 border-white/10'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold truncate">{item.label}</div>
                    <div className="text-[10px] text-slate-400 truncate">{item.sub}</div>
                  </div>
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => handleSwitchMode(isOdakMode ? 'akademi' : 'odak')}
              className="w-full py-2.5 rounded-2xl bg-emerald-600 text-white text-xs font-extrabold flex items-center justify-center gap-1.5"
            >
              <LayoutGrid className="w-4 h-4" />
              <span>
                {isOdakMode ? 'Akademi Moduna Geç' : 'Odak Moduna (Tek İkon) Geç'}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* Alt Navigasyon Çubuğu (Mod Duyarlı: Odak = Tek Merkez İkon | Akademi = 5 Sekme) */}
      <div className="lg:hidden fixed bottom-3 inset-x-2.5 z-30 pointer-events-none flex justify-center pb-safe">
        {isOdakMode ? (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              setQuickSheetOpen((o) => !o);
            }}
            aria-label="Hızlı Etüt Menüsü"
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-extrabold text-xs shadow-xl border border-emerald-400/40 active:scale-95 transition"
          >
            <Zap className="w-4 h-4 fill-current" />
            <span>Etüt Menüsü</span>
            {studyState.activeTimer.running && (
              <span className="w-2 h-2 rounded-full bg-amber-300" />
            )}
          </button>
        ) : (
          <nav
            aria-label="Ana Navigasyon"
            className={`pointer-events-auto w-full max-w-md rounded-2xl p-1 transition-colors duration-150 ${
              isLightMode ? 'ios-glass-dock-light' : 'ios-glass-dock-dark'
            }`}
          >
            <div className="grid grid-cols-5 gap-1 items-center">
              {[
                { id: 'home' as const, label: 'Ev', icon: <Home className="w-4 h-4" /> },
                { id: 'vaka' as const, label: 'Vaka', icon: <CheckSquare className="w-4 h-4" /> },
                { id: 'odak' as const, label: 'Odak', icon: <Timer className="w-4 h-4" />, center: true },
                { id: 'cikmis' as const, label: 'Çıkmış', icon: <Sparkles className="w-4 h-4" /> },
                { id: 'spot' as const, label: 'Spot', icon: <Zap className="w-4 h-4" /> },
              ].map((tab) => {
                const active = activeTab === tab.id;
                if (tab.center) {
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        triggerHaptic('medium');
                        setActiveTab('odak');
                      }}
                      className={`py-1.5 rounded-xl flex flex-col items-center justify-center gap-0.5 font-extrabold transition ${
                        active
                          ? 'bg-emerald-600 text-white shadow-sm'
                          : isLightMode
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : 'bg-emerald-500/15 text-emerald-300 border border-emerald-400/25'
                      }`}
                    >
                      {tab.icon}
                      <span className="text-[10px] leading-tight">{tab.label}</span>
                    </button>
                  );
                }
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      if (tab.id === 'home') {
                        setActiveTab('home');
                      } else {
                        handleNavigateTab(tab.id, { basket: 'unsolved' });
                      }
                    }}
                    className={`py-1.5 px-1 rounded-xl flex flex-col items-center justify-center gap-0.5 transition ${
                      active
                        ? isLightMode
                          ? 'bg-emerald-600 text-white font-bold shadow-xs'
                          : 'bg-emerald-500/25 text-emerald-300 font-bold border border-emerald-400/25'
                        : isLightMode
                        ? 'text-slate-600 hover:text-slate-900 font-semibold'
                        : 'text-slate-400 hover:text-slate-200 font-medium'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-[10px] leading-tight whitespace-nowrap">
                      {tab.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </div>

      {/* Paywall Modal */}
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        onUnlocked={() => {
          setIsPro(true);
          setProBannerVisible(true);
        }}
        totalSolvedCount={summaryStats.totalSolved}
        reasonMessage={paywallReason}
        priceLabel={proPriceLabel}
        isLight={isLightMode}
      />
    </div>
  );
};

export default App;
