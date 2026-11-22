import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Crown,
  Flame,
  Layers,
  Moon,
  Sun,
  Target,
  Timer,
  X,
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
import { TusGuideModal } from './components/TusGuideModal';

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
  const [replayOnboardingOpen, setReplayOnboardingOpen] = useState<boolean>(false);
  const [guideOpen, setGuideOpen] = useState<boolean>(false);
  const [guideTab, setGuideTab] = useState<'puan' | 'dagilim' | 'sistem'>('puan');

  // Smoothly dissolve the native-style Launch Curtain after React hydrates (zero jarring pop-in!)
  useEffect(() => {
    const curtain = document.getElementById('tus-launch-curtain');
    if (!curtain) return;
    const t1 = window.setTimeout(() => {
      curtain.classList.add('curtain-hidden');
    }, 220);
    const t2 = window.setTimeout(() => {
      curtain.remove();
    }, 620);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

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

  const handleOpenGuide = useCallback(
    (tab: 'puan' | 'dagilim' | 'sistem' = 'puan') => {
      setGuideTab(tab);
      setGuideOpen(true);
    },
    []
  );

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
          todayFreeVakaUsed:
            !isPro && !alreadyExisted
              ? prev.todayFreeVakaUsed + 1
              : prev.todayFreeVakaUsed,
        };
      });
    },
    [isPro]
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
          todayFreeSpotUsed:
            !isPro && !alreadyExisted
              ? prev.todayFreeSpotUsed + 1
              : prev.todayFreeSpotUsed,
        };
      });
    },
    [isPro]
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

  const handleConsumeFreePearl = useCallback(() => {
    if (isPro) return;
    setStudyState((prev) => ({
      ...prev,
      todayFreePearlUsed: prev.todayFreePearlUsed + 1,
    }));
  }, [isPro]);

  const handleRecordExamAttempt = useCallback(
    (attempt: TusExamAttempt) => {
      setStudyState((prev) => ({
        ...prev,
        examHistory: [attempt, ...prev.examHistory].slice(0, 30),
        todayFreeExamUsed: !isPro
          ? prev.todayFreeExamUsed + 1
          : prev.todayFreeExamUsed,
      }));
    },
    [isPro]
  );

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

  const akademiPrimaryTabs: Array<{
    id: 'home' | 'beklenen' | 'deneme' | 'analiz';
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'home', label: 'Dersler', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'beklenen', label: 'Spotlar', icon: <Flame className="w-5 h-5" /> },
    { id: 'deneme', label: 'Deneme', icon: <Award className="w-5 h-5" /> },
    { id: 'analiz', label: 'Karne', icon: <BarChart3 className="w-5 h-5" /> },
  ];

  const odakPrimaryTabs: Array<{
    id: OdakSubTab;
    label: string;
    icon: React.ReactNode;
  }> = [
    { id: 'kronometre', label: 'Süre', icon: <Timer className="w-5 h-5" /> },
    { id: 'konular', label: 'Konular', icon: <Layers className="w-5 h-5" /> },
    { id: 'analiz', label: 'Analiz', icon: <BarChart3 className="w-5 h-5" /> },
    { id: 'hedef', label: 'Hedef', icon: <Target className="w-5 h-5" /> },
  ];

  const showOnboarding = !studyState.onboardingCompleted || replayOnboardingOpen;

  const isDerslerActive =
    activeTab === 'home' ||
    activeTab === 'vaka' ||
    activeTab === 'cikmis' ||
    activeTab === 'spot';

  return (
    <div
      className={`min-h-screen w-full overflow-x-hidden flex flex-col transition-colors duration-200 ${
        isLightMode
          ? 'bg-[#F6F8FC] text-slate-900'
          : 'bg-[#0A0E17] text-slate-100'
      }`}
    >
      {/* Sade, Tam Genişlikte Sabit Üst Bar (Sıfır Tekrar Buton, Rahat Dokunma Alanı) */}
      <header
        className={`sticky top-0 inset-x-0 z-30 pt-safe border-b backdrop-blur-xl transition-colors ${
          isLightMode
            ? 'bg-white/90 border-slate-200/80'
            : 'bg-[#0C1220]/90 border-white/8'
        }`}
      >
        <div className="max-w-4xl mx-auto h-14 px-3.5 sm:px-5 flex items-center justify-between gap-2">
          {/* Sol: İkon + Akademi / Odak Geçişi */}
          <div className="flex items-center gap-2 shrink-0">
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
                className="w-8 h-8 rounded-xl shadow-2xs object-cover"
              />
            </button>

            <div
              className={`inline-flex rounded-xl p-0.5 ${
                isLightMode ? 'bg-slate-100' : 'bg-white/[0.07]'
              }`}
              role="group"
              aria-label="Çalışma Modu"
            >
              <button
                type="button"
                onClick={() => handleSwitchMode('akademi')}
                className={`h-8 px-3 rounded-lg text-xs font-extrabold transition whitespace-nowrap ${
                  !isOdakMode
                    ? 'bg-blue-600 text-white shadow-2xs'
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
                className={`h-8 px-3 rounded-lg text-xs font-extrabold inline-flex items-center gap-1 transition whitespace-nowrap ${
                  isOdakMode
                    ? 'bg-blue-600 text-white shadow-2xs'
                    : isLightMode
                    ? 'text-slate-600 hover:text-slate-900'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Odak</span>
                {studyState.activeTimer.running && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-300" />
                )}
              </button>
            </div>
          </div>

          {/* Geniş Ekran (iPad / Masaüstü) 4 Temiz Sekme */}
          <div className="hidden lg:flex items-center gap-1">
            {isOdakMode
              ? odakPrimaryTabs.map((tab) => {
                  const active = odakSubTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        setOdakSubTab(tab.id);
                      }}
                      className={`h-9 px-3.5 rounded-xl text-xs font-extrabold inline-flex items-center gap-1.5 transition whitespace-nowrap ${
                        active
                          ? 'bg-blue-600 text-white'
                          : isLightMode
                          ? 'text-slate-600 hover:bg-slate-100'
                          : 'text-slate-300 hover:bg-white/8'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })
              : akademiPrimaryTabs.map((tab) => {
                  const active =
                    tab.id === 'home' ? isDerslerActive : activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => {
                        triggerHaptic('light');
                        if (tab.id === 'beklenen') {
                          handleNavigateTab('beklenen');
                        } else {
                          setActiveTab(tab.id);
                        }
                      }}
                      className={`h-9 px-3.5 rounded-xl text-xs font-extrabold inline-flex items-center gap-1.5 transition whitespace-nowrap ${
                        active
                          ? 'bg-blue-600 text-white'
                          : isLightMode
                          ? 'text-slate-600 hover:bg-slate-100'
                          : 'text-slate-300 hover:bg-white/8'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
          </div>

          {/* Sağ: Sadece Tema ve PRO (Sıfır Kalabalık, Rahat Boyut) */}
          <div className="flex items-center gap-1.5 shrink-0">
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
              className={`w-9 h-9 rounded-xl flex items-center justify-center transition ${
                isLightMode
                  ? 'bg-slate-100 hover:bg-slate-200/80 text-slate-700'
                  : 'bg-white/8 hover:bg-white/12 text-amber-300'
              }`}
            >
              {isLightMode ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
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
                  className="h-9 px-3 rounded-xl bg-blue-600/12 text-blue-600 dark:text-blue-300 text-xs font-extrabold whitespace-nowrap shrink-0 transition"
                >
                  PRO
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('medium');
                    handleOpenPaywall();
                  }}
                  className="h-9 px-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-extrabold inline-flex items-center gap-1 whitespace-nowrap shrink-0 shadow-2xs transition"
                >
                  <Crown className="w-3.5 h-3.5 shrink-0" />
                  <span>PRO</span>
                </button>
              ))}
          </div>
        </div>
      </header>

      {/* Ana İçerik Alanı (Alttaki Sabit Nav Bar İçin Geniş Güvenli Boşluk) */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-3.5 sm:px-5 pt-3 pb-24 lg:pb-10">
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

        <div key={`${isOdakMode ? 'odak-' + odakSubTab : activeTab}`} className="animate-page-enter space-y-3">
          {isOdakMode ? (
            <OdakModuScreen
              studyState={studyState}
              isLight={isLightMode}
              activeSubTab={odakSubTab}
              onChangeSubTab={setOdakSubTab}
              onUpdateStudyState={setStudyState}
              onOpenGuide={handleOpenGuide}
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
                  isPro={isPro}
                  isLight={isLightMode}
                  todayFreePearlUsed={studyState.todayFreePearlUsed}
                  focusedPearlId={focusedPearlId}
                  openedFromWidget={openedFromWidget}
                  pinnedWidgetPearlId={studyState.pinnedWidgetPearlId}
                  savedPearlIds={studyState.savedExpectedPearlIds}
                  onTogglePinPearl={handleTogglePinPearl}
                  onToggleSavePearl={handleToggleSavePearl}
                  onConsumeFreePearl={handleConsumeFreePearl}
                  onOpenPaywall={handleOpenPaywall}
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
                  todayFreeUsed={studyState.todayFreeVakaUsed}
                  vakaAnswers={studyState.vakaAnswers}
                  bookmarkedVakaIds={studyState.bookmarkedVakaIds}
                  onRecordVakaAnswer={handleRecordVakaAnswer}
                  onToggleBookmarkVaka={handleToggleBookmarkVaka}
                  onOpenPaywall={handleOpenPaywall}
                  onBackToSubjects={() => setActiveTab('home')}
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
                  todayFreeUsed={studyState.todayFreeVakaUsed}
                  vakaAnswers={studyState.vakaAnswers}
                  bookmarkedVakaIds={studyState.bookmarkedVakaIds}
                  onRecordVakaAnswer={handleRecordVakaAnswer}
                  onToggleBookmarkVaka={handleToggleBookmarkVaka}
                  onOpenPaywall={handleOpenPaywall}
                  onBackToSubjects={() => setActiveTab('home')}
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
                  todayFreeUsed={studyState.todayFreeSpotUsed}
                  spotAnswers={studyState.spotAnswers}
                  bookmarkedSpotIds={studyState.bookmarkedSpotIds}
                  onRecordSpotAnswer={handleRecordSpotAnswer}
                  onToggleBookmarkSpot={handleToggleBookmarkSpot}
                  onOpenPaywall={handleOpenPaywall}
                  onBackToSubjects={() => setActiveTab('home')}
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
                  todayFreeExamUsed={studyState.todayFreeExamUsed}
                  vakaAnswers={studyState.vakaAnswers}
                  onRecordExamAttempt={handleRecordExamAttempt}
                  onRecordVakaAnswer={handleRecordVakaAnswer}
                  onOpenPaywall={handleOpenPaywall}
                  onOpenGuide={handleOpenGuide}
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
                  onOpenGuide={handleOpenGuide}
                  onResetProgress={handleResetProgress}
                  onReplayOnboarding={() => setReplayOnboardingOpen(true)}
                />
              )}
            </>
          )}
        </div>
      </main>

      {/* Aşağıya Sabitli, Tam Genişlikli, Responsive Native iOS Alt Navigasyon Çubuğu (4 Temiz Sekme — Sıfır Tekrar!) */}
      <nav
        aria-label="Ana Navigasyon"
        className={`lg:hidden fixed bottom-0 inset-x-0 z-30 border-t backdrop-blur-xl pb-safe transition-colors ${
          isLightMode
            ? 'bg-white/94 border-slate-200/90'
            : 'bg-[#0C1220]/94 border-white/10'
        }`}
      >
        <div className="max-w-md mx-auto grid grid-cols-4 h-[60px] px-2">
          {isOdakMode
            ? odakPrimaryTabs.map((tab) => {
                const active = odakSubTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('selection');
                      setOdakSubTab(tab.id);
                    }}
                    className={`flex flex-col items-center justify-center gap-1 transition active:scale-95 ${
                      active
                        ? 'text-blue-600 dark:text-blue-400 font-extrabold'
                        : isLightMode
                        ? 'text-slate-400 hover:text-slate-700 font-semibold'
                        : 'text-slate-500 hover:text-slate-300 font-semibold'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-[11px] leading-none">{tab.label}</span>
                  </button>
                );
              })
            : akademiPrimaryTabs.map((tab) => {
                const active =
                  tab.id === 'home' ? isDerslerActive : activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('selection');
                      if (tab.id === 'beklenen') {
                        handleNavigateTab('beklenen');
                      } else {
                        setActiveTab(tab.id);
                      }
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`flex flex-col items-center justify-center gap-1 transition active:scale-95 ${
                      active
                        ? 'text-blue-600 dark:text-blue-400 font-extrabold'
                        : isLightMode
                        ? 'text-slate-400 hover:text-slate-700 font-semibold'
                        : 'text-slate-500 hover:text-slate-300 font-semibold'
                    }`}
                  >
                    {tab.icon}
                    <span className="text-[11px] leading-none">{tab.label}</span>
                  </button>
                );
              })}
        </div>
      </nav>

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

      {/* TUS Puan & Sistem Rehberi Modal */}
      <TusGuideModal
        isOpen={guideOpen}
        onClose={() => setGuideOpen(false)}
        isLight={isLightMode}
        initialTab={guideTab}
      />

      {/* Paywall Modal */}
      <PaywallModal
        isOpen={paywallOpen}
        onClose={() => setPaywallOpen(false)}
        onUnlocked={() => {
          setIsPro(true);
          setProBannerVisible(true);
        }}
        totalSolvedCount={studyState.todayFreeVakaUsed}
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
