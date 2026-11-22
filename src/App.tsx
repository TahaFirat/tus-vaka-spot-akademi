import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  BarChart3,
  CheckCircle2,
  CheckSquare,
  Compass,
  Crown,
  Flame,
  Home,
  Layers,
  Moon,
  Sparkles,
  Sun,
  Target,
  Timer,
  X,
  Zap,
} from 'lucide-react';
import {
  OptionLetter,
  TOTAL_INTERACTIVE_TUS_ITEMS,
  TUS_ALL_EXPECTED_PEARLS,
  TUS_CORE_TOPICS,
  TusBranchId,
} from './data/tusMedicalRepository';
import {
  PRO_MONTHLY_PRICE_LABEL,
  PRO_MONTHLY_PRODUCT_ID,
  PRO_PRICE_LABEL,
  PRO_PRODUCT_ID,
  PRO_SIXMONTH_PRICE_LABEL,
  PRO_SIXMONTH_PRODUCT_ID,
  loadPersistedProStatus,
  notifyNativeAppReady,
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
import { OdakModuScreen, OdakSubTab } from './components/OdakModuScreen';
import { BeklenenSpotlarScreen } from './components/BeklenenSpotlarScreen';
import { PaywallModal } from './components/PaywallModal';
import { OnboardingModal } from './components/OnboardingModal';

type MainTabId =
  | 'home'
  | 'odak'
  | 'beklenen'
  | 'vaka'
  | 'cikmis'
  | 'spot'
  | 'deneme'
  | 'analiz';
type QueueBasket =
  | 'all'
  | 'osym_twin'
  | 'unsolved'
  | 'wrong'
  | 'correct'
  | 'bookmarked';

export const App: React.FC = () => {
  const [studyState, setStudyState] = useState<TusStudyState>(() => loadStudyState());
  const [activeTab, setActiveTab] = useState<MainTabId>(() =>
    loadStudyState().uiMode === 'odak' ? 'odak' : 'home'
  );
  const [odakSubTab, setOdakSubTab] = useState<OdakSubTab>('kronometre');
  const [focusedPearlId, setFocusedPearlId] = useState<string | null>(null);
  const [openedFromWidget, setOpenedFromWidget] = useState<boolean>(false);

  const [isPro, setIsPro] = useState<boolean>(false);
  const [proPriceLabel, setProPriceLabel] = useState<string>(PRO_PRICE_LABEL);
  const [proMonthlyPriceLabel, setProMonthlyPriceLabel] = useState<string>(
    PRO_MONTHLY_PRICE_LABEL
  );
  const [proSixMonthPriceLabel, setProSixMonthPriceLabel] = useState<string>(
    PRO_SIXMONTH_PRICE_LABEL
  );
  const [availableProductIds, setAvailableProductIds] = useState<string[] | null>(null);
  const [paywallOpen, setPaywallOpen] = useState<boolean>(false);
  const [paywallReason, setPaywallReason] = useState<string | undefined>(undefined);
  const [proBannerVisible, setProBannerVisible] = useState<boolean>(false);
  const [odakHubOpen, setOdakHubOpen] = useState<boolean>(false);
  const [replayOnboardingOpen, setReplayOnboardingOpen] = useState<boolean>(false);

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

  useEffect(() => {
    syncNativeTheme(studyState.theme === 'light' ? 'light' : 'dark');
  }, [studyState.theme]);

  // 55 konu tur ilerlemesi % hesabı (Saf Odak Widget Halkası için)
  const topicTourPct = useMemo(() => {
    let total = 0;
    for (const t of TUS_CORE_TOPICS) {
      total += studyState.topicTours[t.id] || 0;
    }
    return Math.round((total / (TUS_CORE_TOPICS.length * 3)) * 100);
  }, [studyState.topicTours]);

  // iOS 4'lü Widget Ailesi anlık veri senkronizasyonu (Keychain + reloadAllTimelines)
  const todayKey = getLocalDateString();
  const todayStudyMinutes = Math.round(
    (studyState.studySecondsByDate[todayKey] || 0) / 60
  );
  useEffect(() => {
    const t = window.setTimeout(() => {
      const info = getTusCountdownParts(studyState.targetTusDate);
      const pinnedObj = studyState.pinnedWidgetPearlId
        ? TUS_ALL_EXPECTED_PEARLS.find((p) => p.id === studyState.pinnedWidgetPearlId)
        : null;
      syncNativeWidgetSnapshot({
        targetTusDate: info.effectiveDate,
        examLabel: info.examLabel,
        streakDays: studyState.streakDays,
        todaySolved: studyState.todaySolvedCount,
        dailyTarget: studyState.dailyTarget,
        todayStudyMinutes,
        dailyGoalMinutes: studyState.dailyGoalMinutes,
        topicTourPct,
        pinnedPearlId: studyState.pinnedWidgetPearlId,
        customPinnedPearl: pinnedObj
          ? {
              id: pinnedObj.id,
              branch: pinnedObj.branchShort,
              category: pinnedObj.category,
              title: pinnedObj.shortTitle,
              summary: pinnedObj.widgetSummary,
              comparison: pinnedObj.examComparison,
              trap: pinnedObj.redFlagTrap,
            }
          : null,
      });
    }, 450);
    return () => window.clearTimeout(t);
  }, [
    studyState.targetTusDate,
    studyState.streakDays,
    studyState.todaySolvedCount,
    studyState.dailyTarget,
    todayStudyMinutes,
    studyState.dailyGoalMinutes,
    topicTourPct,
    studyState.pinnedWidgetPearlId,
  ]);

  // Native StoreKit & Widget Deep-Link (`tusakademi://beklenen?id=exp-...`) Dinleyicisi
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
        if (detail.productId === PRO_MONTHLY_PRODUCT_ID) {
          setProMonthlyPriceLabel(String(detail.displayPrice));
        } else if (detail.productId === PRO_SIXMONTH_PRODUCT_ID) {
          setProSixMonthPriceLabel(String(detail.displayPrice));
        } else if (!detail.productId || detail.productId === PRO_PRODUCT_ID) {
          setProPriceLabel(String(detail.displayPrice));
        }
      }
      if (detail.monthlyDisplayPrice) {
        setProMonthlyPriceLabel(String(detail.monthlyDisplayPrice));
      }
      if (detail.sixMonthDisplayPrice) {
        setProSixMonthPriceLabel(String(detail.sixMonthDisplayPrice));
      }
      if (Array.isArray(detail.availableProductIds)) {
        setAvailableProductIds(detail.availableProductIds.map(String));
      }
    };

    const onNativeDeepLink = (e: Event) => {
      const detail = (e as CustomEvent).detail || {};
      const route = String(detail.route || '').toLowerCase();
      const itemId = detail.id ? String(detail.id) : null;

      if (route === 'odak') {
        setStudyState((prev) => ({
          ...prev,
          uiMode: 'odak',
          onboardingCompleted: true,
        }));
        setActiveTab('odak');
      } else if (route === 'beklenen' || route === 'spot') {
        setStudyState((prev) => ({
          ...prev,
          uiMode: 'akademi',
          onboardingCompleted: true,
        }));
        setFocusedPearlId(itemId);
        setOpenedFromWidget(true);
        setActiveTab('beklenen');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (route === 'home') {
        setStudyState((prev) => ({
          ...prev,
          uiMode: 'akademi',
          onboardingCompleted: true,
        }));
        setActiveTab('home');
      }
    };

    window.addEventListener('tus:proStatus', onNativeProStatus as EventListener);
    window.addEventListener('tus:proPrice', onNativeProPrice as EventListener);
    window.addEventListener('tus:deepLink', onNativeDeepLink as EventListener);

    // Cold-boot sırasında kuyruğa alınan widget tıklamasını hemen al
    notifyNativeAppReady();

    return () => {
      mounted = false;
      window.removeEventListener('tus:proStatus', onNativeProStatus as EventListener);
      window.removeEventListener('tus:proPrice', onNativeProPrice as EventListener);
      window.removeEventListener('tus:deepLink', onNativeDeepLink as EventListener);
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
            [questionId]: computeNextSrsEntry(
              prev.srsMap[questionId],
              isCorrect,
              'vaka',
              now
            ),
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
            [spotId]: computeNextSrsEntry(
              prev.srsMap[spotId],
              isCorrect,
              'spot',
              now
            ),
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

  const handleTogglePinPearl = useCallback((pearlId: string) => {
    setStudyState((prev) => ({
      ...prev,
      pinnedWidgetPearlId:
        prev.pinnedWidgetPearlId === pearlId ? null : pearlId,
    }));
  }, []);

  const handleToggleSavePearl = useCallback((pearlId: string) => {
    setStudyState((prev) => {
      const exists = prev.savedExpectedPearlIds.includes(pearlId);
      return {
        ...prev,
        savedExpectedPearlIds: exists
          ? prev.savedExpectedPearlIds.filter((id) => id !== pearlId)
          : [...prev.savedExpectedPearlIds, pearlId],
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
    setStudyState((p) => ({ ...p, uiMode: 'akademi' }));
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
      onboardingCompleted: prev.onboardingCompleted,
    }));
  }, []);

  const handleSwitchMode = useCallback((nextMode: 'akademi' | 'odak') => {
    triggerHaptic('medium');
    setOdakHubOpen(false);
    setStudyState((prev) => ({ ...prev, uiMode: nextMode }));
    if (nextMode === 'odak') {
      setActiveTab('odak');
    } else {
      setActiveTab((cur) => (cur === 'odak' ? 'home' : cur));
    }
  }, []);

  const handleCompleteOnboarding = useCallback(
    (chosenMode: 'akademi' | 'odak', chosenBranchId?: TusBranchId) => {
      setReplayOnboardingOpen(false);
      setStudyState((prev) => {
        const next: TusStudyState = {
          ...prev,
          onboardingCompleted: true,
          uiMode: chosenMode,
          ...(chosenBranchId ? { vakaBranchPref: chosenBranchId } : {}),
        };
        saveStudyState(next);
        return next;
      });
      if (chosenBranchId) {
        setVakaBasketJump('unsolved');
        setVakaBranchJump(chosenBranchId);
        setActiveTab('vaka');
      } else {
        setActiveTab(chosenMode === 'odak' ? 'odak' : 'home');
      }
    },
    []
  );

  const handleNavigateTab = useCallback(
    (
      tab: 'vaka' | 'cikmis' | 'spot' | 'deneme' | 'analiz' | 'beklenen',
      options?: {
        basket?: QueueBasket;
        branchId?: 'ALL' | TusBranchId;
        pearlId?: string;
      }
    ) => {
      setOdakHubOpen(false);
      setStudyState((prev) =>
        prev.uiMode === 'odak' ? { ...prev, uiMode: 'akademi' } : prev
      );
      if (tab === 'beklenen') {
        if (options?.pearlId) {
          setFocusedPearlId(options.pearlId);
        }
        setOpenedFromWidget(false);
        setActiveTab('beklenen');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }

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

  const akademiDesktopTabs: Array<{
    id: Exclude<MainTabId, 'odak'>;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'home', label: 'Dersler', icon: <Home className="w-4 h-4" /> },
    { id: 'beklenen', label: 'Altın Spot', icon: <Flame className="w-4 h-4" /> },
    { id: 'vaka', label: 'Vaka', icon: <CheckSquare className="w-4 h-4" /> },
    { id: 'cikmis', label: 'İkiz', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'spot', label: 'Spot', icon: <Zap className="w-4 h-4" /> },
    { id: 'deneme', label: 'Deneme', icon: <Award className="w-4 h-4" /> },
    { id: 'analiz', label: 'Karne', icon: <BarChart3 className="w-4 h-4" /> },
  ];

  const odakDesktopTabs: Array<{
    id: OdakSubTab;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'kronometre', label: 'Kronometre', icon: <Timer className="w-4 h-4" /> },
    { id: 'konular', label: '55 Konu Turu', icon: <Layers className="w-4 h-4" /> },
    { id: 'analiz', label: 'Etüt Analizi', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'hedef', label: 'Hedef & Plan', icon: <Target className="w-4 h-4" /> },
  ];

  const showOnboarding = !studyState.onboardingCompleted || replayOnboardingOpen;

  const glassCapsuleClass = isLightMode
    ? 'ios-liquid-glass-light'
    : 'ios-liquid-glass-dark';

  const glassOrbClass = isLightMode
    ? 'ios-liquid-orb-light text-slate-700'
    : 'ios-liquid-orb-dark text-slate-200';

  const activeGlassPillClass = isLightMode
    ? 'ios-liquid-pill-active-light text-white'
    : 'ios-liquid-pill-active-dark text-blue-200';

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-200 ${
        isLightMode
          ? isOdakMode
            ? 'bg-[#F3F6FB] text-slate-900'
            : 'bg-[#F6F8FC] text-slate-900'
          : isOdakMode
          ? 'bg-[#090D16] text-slate-100'
          : 'bg-[#0A0E17] text-slate-100'
      }`}
    >
      {/* iOS 26/27 Yüzen "Liquid Glass" Şeffaf Kırınımlı Üst Kapsül Bar */}
      <header
        className={`sticky top-0 z-30 pt-safe px-2.5 sm:px-4 pb-1.5 pointer-events-none ${
          isLightMode ? 'ios-scroll-veil-top-light' : 'ios-scroll-veil-top-dark'
        }`}
      >
        <div
          className={`pointer-events-auto max-w-4xl mx-auto h-12 rounded-full px-2 sm:px-3 flex items-center justify-between gap-1.5 ${glassCapsuleClass}`}
        >
          {/* Sol: İkon + Liquid Glass Mod Geçiş Kapsülü */}
          <div className="flex items-center gap-1.5 shrink-0">
            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                if (isOdakMode) {
                  setOdakSubTab('kronometre');
                } else {
                  setActiveTab('home');
                }
              }}
              aria-label="Ana Görünüm"
              className="shrink-0"
            >
              <img
                src="/icon-192.png"
                alt="TUS Akademi"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full shadow-xs object-cover"
              />
            </button>

            <div
              className={`inline-flex rounded-full p-0.5 ${
                isLightMode
                  ? 'bg-slate-900/6 border border-slate-900/8'
                  : 'bg-black/28 border border-white/12'
              }`}
              role="group"
              aria-label="Çalışma Modu"
            >
              <button
                type="button"
                onClick={() => handleSwitchMode('akademi')}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-extrabold transition whitespace-nowrap ${
                  !isOdakMode
                    ? activeGlassPillClass
                    : isLightMode
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                Akademi
              </button>
              <button
                type="button"
                onClick={() => handleSwitchMode('odak')}
                className={`px-2 sm:px-2.5 py-1 rounded-full text-[10.5px] sm:text-[11px] font-extrabold inline-flex items-center gap-1 transition whitespace-nowrap ${
                  isOdakMode
                    ? activeGlassPillClass
                    : isLightMode
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Timer className="w-3 h-3" />
                <span>Odak</span>
                {studyState.activeTimer.running && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                )}
              </button>
            </div>
          </div>

          {/* Geniş Ekran Yatay Sekmeler (Moda Göre Tamamen Yalıtılmış) */}
          <div className="hidden lg:flex items-center gap-1 min-w-0 overflow-x-auto no-scrollbar">
            {isOdakMode
              ? odakDesktopTabs.map((tab) => {
                  const active = odakSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        setOdakSubTab(tab.id);
                      }}
                      className={`px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition whitespace-nowrap ${
                        active
                          ? activeGlassPillClass
                          : isLightMode
                          ? 'text-slate-600 hover:bg-white/60'
                          : 'text-slate-300 hover:bg-white/8'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })
              : akademiDesktopTabs.map((tab) => {
                  const active = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        if (
                          tab.id === 'vaka' ||
                          tab.id === 'cikmis' ||
                          tab.id === 'spot'
                        ) {
                          handleNavigateTab(tab.id, { basket: 'unsolved' });
                        } else if (tab.id === 'beklenen') {
                          handleNavigateTab('beklenen');
                        } else {
                          setActiveTab(tab.id);
                        }
                      }}
                      className={`px-2.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-1 transition whitespace-nowrap ${
                        active
                          ? activeGlassPillClass
                          : isLightMode
                          ? 'text-slate-600 hover:bg-white/60'
                          : 'text-slate-300 hover:bg-white/8'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
          </div>

          {/* Sağ Liquid Glass Damlacıkları (Sıfır Taşma — 320px'den 1024px'e Tam Responsive) */}
          <div className="flex items-center gap-1 shrink-0">
            {isOdakMode ? (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setReplayOnboardingOpen(true);
                }}
                aria-label="Uygulama Tanıtımı"
                title="Uygulama Tanıtımı"
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition ${glassOrbClass}`}
              >
                <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-teal-500" />
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setActiveTab('analiz');
                }}
                aria-label="Karne ve Ayarlar"
                title="Karne ve Ayarlar"
                className={`lg:hidden w-7 h-7 sm:w-auto sm:h-8 sm:px-2.5 rounded-full text-[11px] font-extrabold inline-flex items-center justify-center gap-1 transition ${
                  activeTab === 'analiz' ? activeGlassPillClass : glassOrbClass
                }`}
              >
                <BarChart3
                  className={`w-3.5 h-3.5 ${
                    activeTab === 'analiz' ? 'text-white' : 'text-emerald-500'
                  }`}
                />
                <span className="hidden sm:inline">Karne</span>
              </button>
            )}

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
              className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center transition ${glassOrbClass}`}
            >
              {isLightMode ? (
                <Moon className="w-3.5 h-3.5 text-slate-700" />
              ) : (
                <Sun className="w-3.5 h-3.5 text-amber-300" />
              )}
            </button>

            {!isOdakMode &&
              (isPro ? (
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setProBannerVisible((v) => !v);
                  }}
                  className={`inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full text-[10px] sm:text-[10.5px] font-extrabold whitespace-nowrap shrink-0 transition ${activeGlassPillClass}`}
                >
                  <span>PRO</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('medium');
                    handleOpenPaywall();
                  }}
                  className="inline-flex items-center gap-1 px-2 sm:px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-[10px] sm:text-[10.5px] font-extrabold whitespace-nowrap shrink-0 shadow-xs"
                >
                  <Crown className="w-3 h-3 shrink-0" />
                  <span>PRO</span>
                </button>
              ))}
          </div>
        </div>
      </header>

      {/* Ana İçerik Alanı */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3 sm:px-4 pt-1.5 pb-28 lg:pb-8 space-y-2.5">
        {!isOdakMode && isPro && proBannerVisible && (
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
                <strong>PRO Aktif:</strong>{' '}
                {TOTAL_INTERACTIVE_TUS_ITEMS.toLocaleString('tr-TR')}+ Vaka & D/Y Spot sınırsız açık.
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

        {isOdakMode ? (
          <OdakModuScreen
            studyState={studyState}
            isLight={isLightMode}
            activeSubTab={odakSubTab}
            onChangeSubTab={setOdakSubTab}
            onUpdateStudyState={setStudyState}
          />
        ) : (
          <>
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

            {activeTab === 'beklenen' && (
              <BeklenenSpotlarScreen
                isLight={isLightMode}
                focusedPearlId={focusedPearlId}
                openedFromWidget={openedFromWidget}
                pinnedWidgetPearlId={studyState.pinnedWidgetPearlId}
                savedPearlIds={studyState.savedExpectedPearlIds}
                onTogglePinPearl={handleTogglePinPearl}
                onToggleSavePearl={handleToggleSavePearl}
                onJumpToBranchVaka={(branchId) =>
                  handleNavigateTab('vaka', { basket: 'unsolved', branchId })
                }
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
                    setStudyState((prev) => ({
                      ...prev,
                      vakaBranchPref: p.branchId!,
                    }));
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
                onReplayOnboarding={() => setReplayOnboardingOpen(true)}
              />
            )}
          </>
        )}
      </main>

      {/* Odak Modu Liquid Glass Saf Etüt Menüsü */}
      {isOdakMode && odakHubOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-xs flex items-end justify-center p-3 pb-8"
          onClick={() => setOdakHubOpen(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={`w-full max-w-md rounded-3xl p-4 space-y-3 ${glassCapsuleClass}`}
          >
            <div className="flex items-center justify-between">
              <div className="text-xs font-extrabold uppercase tracking-wider text-teal-500">
                Saf Odak Çalışma Alanı
              </div>
              <button
                type="button"
                onClick={() => setOdakHubOpen(false)}
                className={`p-1.5 rounded-full ${glassOrbClass}`}
                aria-label="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {[
                {
                  id: 'kronometre' as const,
                  label: 'Kronometre',
                  sub: 'Serbest & Pomodoro',
                  icon: <Timer className="w-4 h-4 text-teal-500" />,
                },
                {
                  id: 'konular' as const,
                  label: '55 Konu Turu',
                  sub: '1., 2. ve 3. Tur takibi',
                  icon: <Layers className="w-4 h-4 text-emerald-500" />,
                },
                {
                  id: 'analiz' as const,
                  label: 'Etüt Analizi',
                  sub: '7 gün & ders süreleri',
                  icon: <BarChart3 className="w-4 h-4 text-cyan-500" />,
                },
                {
                  id: 'hedef' as const,
                  label: 'Hedef & Plan',
                  sub: 'TUS tarihi & dal puanı',
                  icon: <Target className="w-4 h-4 text-amber-500" />,
                },
              ].map((item) => {
                const active = odakSubTab === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setOdakSubTab(item.id);
                      setOdakHubOpen(false);
                    }}
                    className={`text-left rounded-2xl p-3 flex items-start gap-2.5 transition ${
                      active ? activeGlassPillClass : glassOrbClass
                    }`}
                  >
                    <div className="mt-0.5 shrink-0">{item.icon}</div>
                    <div className="min-w-0">
                      <div className="text-xs font-extrabold truncate">{item.label}</div>
                      <div className="text-[10px] opacity-80 truncate">{item.sub}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => handleSwitchMode('akademi')}
              className="w-full py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm"
            >
              <Zap className="w-4 h-4" />
              <span>Akademi Moduna Geç</span>
            </button>
          </div>
        </div>
      )}

      {/* iOS 26/27 Yüzen "Liquid Glass" Şeffaf Alt Kapsül Navigasyon Çubuğu */}
      <div className="lg:hidden fixed bottom-3 inset-x-3 z-30 pointer-events-none flex justify-center pb-safe">
        {isOdakMode ? (
          <button
            type="button"
            onClick={() => {
              triggerHaptic('medium');
              setOdakHubOpen((o) => !o);
            }}
            aria-label="Odak Menüsü"
            className={`pointer-events-auto inline-flex items-center gap-2 px-5 py-3 rounded-full font-extrabold text-xs active:scale-95 transition ${glassCapsuleClass}`}
          >
            <span className="w-6 h-6 rounded-full bg-teal-500/20 border border-teal-400/40 flex items-center justify-center text-teal-400">
              <Timer className="w-3.5 h-3.5" />
            </span>
            <span>Odak Menüsü</span>
            {studyState.activeTimer.running && (
              <span className="w-2 h-2 rounded-full bg-amber-400" />
            )}
          </button>
        ) : (
          <nav
            aria-label="Ana Navigasyon"
            className={`pointer-events-auto w-full max-w-md rounded-full p-1.5 transition-all duration-150 ${glassCapsuleClass}`}
          >
            <div className="grid grid-cols-5 gap-1 items-center">
              {[
                { id: 'home' as const, label: 'Dersler', icon: <Home className="w-4 h-4" /> },
                { id: 'vaka' as const, label: 'Vaka', icon: <CheckSquare className="w-4 h-4" /> },
                { id: 'cikmis' as const, label: 'İkiz', icon: <Sparkles className="w-4 h-4" /> },
                { id: 'spot' as const, label: 'Spot', icon: <Zap className="w-4 h-4" /> },
                { id: 'deneme' as const, label: 'Deneme', icon: <Award className="w-4 h-4" /> },
              ].map((tab) => {
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      if (tab.id === 'home') {
                        setActiveTab('home');
                      } else if (tab.id === 'deneme') {
                        handleNavigateTab('deneme');
                      } else {
                        handleNavigateTab(tab.id, { basket: 'unsolved' });
                      }
                    }}
                    className={`py-1.5 px-1 rounded-full flex flex-col items-center justify-center gap-0.5 transition ${
                      active
                        ? `${activeGlassPillClass} font-extrabold`
                        : isLightMode
                        ? 'text-slate-700 hover:text-slate-950 font-semibold'
                        : 'text-slate-300 hover:text-white font-medium'
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

      {/* İlk Giriş Tanıtım & Kişiselleştirme Ekranı */}
      <OnboardingModal
        isOpen={showOnboarding}
        isReplay={replayOnboardingOpen}
        isLight={isLightMode}
        studyState={studyState}
        onUpdateStudyState={setStudyState}
        onComplete={handleCompleteOnboarding}
        onDismissReplay={() => setReplayOnboardingOpen(false)}
      />

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
        monthlyPriceLabel={proMonthlyPriceLabel}
        sixMonthPriceLabel={proSixMonthPriceLabel}
        availableProductIds={availableProductIds}
        isLight={isLightMode}
      />
    </div>
  );
};

export default App;
