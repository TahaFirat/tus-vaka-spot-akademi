import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Activity,
  Award,
  BookOpen,
  Calculator,
  Clock,
  ExternalLink,
  HelpCircle,
  Lock,
  Play,
  RotateCcw,
  Search,
  Share2,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import {
  ClinicalGuideCategory,
  OptionLetter,
  TUS_BRANCHES,
  TUS_CLINICAL_GUIDE_ENTRIES,
  TUS_VAKA_QUESTIONS,
  TusBranchId,
  TusVakaQuestion,
} from '../data/tusMedicalRepository';
import {
  DAILY_FREE_EXAM_LIMIT,
  shareClinicalSummary,
  triggerHaptic,
} from '../services/nativeBridge';
import {
  calculateEstimatedTusScore,
  calculateOsymNet,
  TusExamAttempt,
} from '../services/studyStorage';

interface DenemeRehberScreenProps {
  isPro: boolean;
  isLight: boolean;
  todayFreeExamUsed: number;
  vakaAnswers?: Record<string, unknown>;
  onRecordExamAttempt: (attempt: TusExamAttempt) => void;
  onRecordVakaAnswer: (
    questionId: string,
    selected: OptionLetter,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => void;
  onOpenPaywall: (reason?: string) => void;
  onOpenGuide?: (tab?: 'puan' | 'dagilim' | 'sistem') => void;
}

interface ExamModeConfig {
  id: 'free-15' | 'ttbt-25' | 'ktbt-25' | 'maraton-40';
  title: string;
  subtitle: string;
  questionCount: number;
  durationMinutes: number;
  requiresPro: boolean;
  badge: string;
}

const EXAM_MODES: ExamModeConfig[] = [
  {
    id: 'free-15',
    title: 'Mini Karma Deneme',
    subtitle: 'Temel & Klinik karma 15 soru • Günde 1 ücretsiz',
    questionCount: 15,
    durationMinutes: 20,
    requiresPro: false,
    badge: 'ÜCRETSİZ • 15 SORU',
  },
  {
    id: 'ttbt-25',
    title: 'Temel Bilimler Denemesi',
    subtitle: '7 Temel Tıp dersi • Gerçek TUS temposu',
    questionCount: 25,
    durationMinutes: 34,
    requiresPro: true,
    badge: 'PRO • 25 SORU',
  },
  {
    id: 'ktbt-25',
    title: 'Klinik Bilimler Denemesi',
    subtitle: 'Dahiliye, Pediatri, Cerrahi & Kadın Doğum',
    questionCount: 25,
    durationMinutes: 34,
    requiresPro: true,
    badge: 'PRO • 25 SORU',
  },
  {
    id: 'maraton-40',
    title: 'Branş Maratonu',
    subtitle: 'Seçtiğin derslerden 40 soruluk karma sınav',
    questionCount: 40,
    durationMinutes: 54,
    requiresPro: true,
    badge: 'PRO • 40 SORU',
  },
];

// İzole duvar saati deneme sayacı: her saniye tüm DenemeRehberScreen'i yeniden çizmez
const ExamTimerPill: React.FC<{
  endAtMs: number;
  onExpire: () => void;
}> = React.memo(({ endAtMs, onExpire }) => {
  const [secLeft, setSecLeft] = useState<number>(() =>
    Math.max(0, Math.ceil((endAtMs - Date.now()) / 1000))
  );
  const expireRef = useRef(onExpire);
  expireRef.current = onExpire;
  const expiredTriggered = useRef(false);

  useEffect(() => {
    expiredTriggered.current = false;
    let id: number | null = null;
    const tick = () => {
      const rem = Math.max(0, Math.ceil((endAtMs - Date.now()) / 1000));
      setSecLeft(rem);
      if (rem <= 0 && !expiredTriggered.current) {
        expiredTriggered.current = true;
        expireRef.current();
      }
    };
    const start = () => {
      if (id !== null || document.hidden) return;
      tick();
      id = window.setInterval(() => {
        if (!document.hidden) tick();
      }, 1000);
    };
    const stop = () => {
      if (id !== null) {
        window.clearInterval(id);
        id = null;
      }
    };
    const onVis = () => {
      if (document.hidden) stop();
      else start();
    };
    start();
    document.addEventListener('visibilitychange', onVis);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVis);
    };
  }, [endAtMs]);

  const m = Math.floor(secLeft / 60);
  const s = secLeft % 60;
  return (
    <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-400 font-mono text-xs font-extrabold tabular-nums">
      {String(m).padStart(2, '0')}:{String(s).padStart(2, '0')}
    </span>
  );
});

const DenemeRehberScreenInner: React.FC<DenemeRehberScreenProps> = ({
  isPro,
  isLight,
  todayFreeExamUsed,
  vakaAnswers = {},
  onRecordExamAttempt,
  onRecordVakaAnswer,
  onOpenPaywall,
  onOpenGuide,
}) => {
  const [subTab, setSubTab] = useState<'deneme' | 'hesap' | 'rehber'>('deneme');
  const [activeCalc, setActiveCalc] = useState<'ag' | 'fena' | 'parkland' | 'electrolyte'>('ag');
  const [selectedBranches, setSelectedBranches] = useState<TusBranchId[]>(
    TUS_BRANCHES.map((b) => b.id)
  );

  // Interactive Medical Specialty Calculator States
  const [agNa, setAgNa] = useState<number>(140);
  const [agCl, setAgCl] = useState<number>(104);
  const [agHco3, setAgHco3] = useState<number>(14);
  const [agAlbumin, setAgAlbumin] = useState<number>(2.5);
  const [agPco2, setAgPco2] = useState<number>(29);

  const [fenaUNa, setFenaUNa] = useState<number>(12);
  const [fenaPNa, setFenaPNa] = useState<number>(140);
  const [fenaUCr, setFenaUCr] = useState<number>(120);
  const [fenaPCr, setFenaPCr] = useState<number>(2.4);

  const [burnWeight, setBurnWeight] = useState<number>(70);
  const [burnTbsa, setBurnTbsa] = useState<number>(30);

  const [corrCa, setCorrCa] = useState<number>(7.8);
  const [corrAlb, setCorrAlb] = useState<number>(2.0);
  const [corrNa, setCorrNa] = useState<number>(128);
  const [corrGlucose, setCorrGlucose] = useState<number>(500);

  const [activeMode, setActiveMode] = useState<ExamModeConfig | null>(null);
  const [examQuestions, setExamQuestions] = useState<TusVakaQuestion[]>([]);
  const [examIdx, setExamIdx] = useState(0);
  const [examSelections, setExamSelections] = useState<
    Record<string, OptionLetter | undefined>
  >({});
  const [examStartMs, setExamStartMs] = useState(0);
  const [examEndMs, setExamEndMs] = useState(0);
  const [finishedResult, setFinishedResult] = useState<TusExamAttempt | null>(null);
  const [showExamReview, setShowExamReview] = useState(false);

  const [guideCategory, setGuideCategory] = useState<'ALL' | ClinicalGuideCategory>('ALL');
  const [guideSearch, setGuideSearch] = useState('');

  const handleToggleBranch = (id: TusBranchId) => {
    triggerHaptic('light');
    setSelectedBranches((prev) => {
      if (prev.includes(id)) {
        if (prev.length === 1) return prev;
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleStartExam = (mode: ExamModeConfig) => {
    if (mode.requiresPro && !isPro) {
      triggerHaptic('warning');
      onOpenPaywall(
        `"${mode.title}" modunu açmak için TUS Akademi PRO'ya geç.`
      );
      return;
    }

    if (!isPro && todayFreeExamUsed >= DAILY_FREE_EXAM_LIMIT) {
      triggerHaptic('warning');
      onOpenPaywall(
        `Bugünkü ücretsiz mini deneme hakkın doldu. PRO ile sınırsız deneme çöz veya yarın yenilenmesini bekle.`
      );
      return;
    }

    const basePool = TUS_VAKA_QUESTIONS;
    let pool = basePool;
    if (mode.id === 'ttbt-25') {
      pool = basePool.filter((q) => q.session === 'TTBT');
    } else if (mode.id === 'ktbt-25') {
      pool = basePool.filter((q) => q.session === 'KTBT');
    } else if (mode.id === 'maraton-40') {
      pool = basePool.filter((q) => selectedBranches.includes(q.branchId));
    }

    const sampleRandom = <T,>(arr: T[], count: number): T[] => {
      if (count <= 0 || arr.length === 0) return [];
      const copy = [...arr];
      const n = Math.min(count, copy.length);
      for (let i = 0; i < n; i++) {
        const j = i + Math.floor(Math.random() * (copy.length - i));
        const tmp = copy[i];
        copy[i] = copy[j];
        copy[j] = tmp;
      }
      return copy.slice(0, n);
    };

    const unseen = pool.filter((q) => !vakaAnswers[q.id]);
    const picked =
      unseen.length >= mode.questionCount
        ? sampleRandom(unseen, mode.questionCount)
        : [
            ...sampleRandom(unseen, unseen.length),
            ...sampleRandom(
              pool.filter((q) => Boolean(vakaAnswers[q.id])),
              mode.questionCount - unseen.length
            ),
          ];

    const now = Date.now();
    triggerHaptic('medium');
    setActiveMode(mode);
    setExamQuestions(picked);
    setExamIdx(0);
    setExamSelections({});
    setExamStartMs(now);
    setExamEndMs(now + mode.durationMinutes * 60 * 1000);
    setFinishedResult(null);
    setShowExamReview(false);
  };

  const handleSelectExamOption = (questionId: string, letter: OptionLetter) => {
    triggerHaptic('selection');
    setExamSelections((prev) => ({
      ...prev,
      [questionId]: prev[questionId] === letter ? undefined : letter,
    }));
  };

  const handleFinishExam = () => {
    if (!activeMode || examQuestions.length === 0) return;

    let correctCount = 0;
    let wrongCount = 0;
    let blankCount = 0;
    const branchBreakdown: TusExamAttempt['branchBreakdown'] = {};

    examQuestions.forEach((q) => {
      const chosen = examSelections[q.id];
      if (!branchBreakdown[q.branchName]) {
        branchBreakdown[q.branchName] = {
          total: 0,
          correct: 0,
          wrong: 0,
          blank: 0,
          net: 0,
        };
      }
      const bStat = branchBreakdown[q.branchName];
      bStat.total += 1;

      if (!chosen) {
        blankCount += 1;
        bStat.blank += 1;
      } else if (chosen === q.correctOption) {
        correctCount += 1;
        bStat.correct += 1;
        onRecordVakaAnswer(q.id, chosen, true, q.branchId);
      } else {
        wrongCount += 1;
        bStat.wrong += 1;
        onRecordVakaAnswer(q.id, chosen, false, q.branchId);
      }
    });

    Object.keys(branchBreakdown).forEach((bName) => {
      const b = branchBreakdown[bName];
      b.net = calculateOsymNet(b.correct, b.wrong);
    });

    const netScore = calculateOsymNet(correctCount, wrongCount);
    const estimatedTusScore = calculateEstimatedTusScore(
      netScore,
      examQuestions.length
    );
    const elapsed = Math.max(1, Math.round((Date.now() - examStartMs) / 1000));

    const attempt: TusExamAttempt = {
      id: `exam-${Date.now()}`,
      title: activeMode.title,
      modeId: activeMode.id,
      dateIso: new Date().toISOString(),
      totalQuestions: examQuestions.length,
      correctCount,
      wrongCount,
      blankCount,
      netScore,
      estimatedTusScore,
      durationSeconds: elapsed,
      branchBreakdown,
    };

    triggerHaptic('success');
    setFinishedResult(attempt);
    onRecordExamAttempt(attempt);
  };

  const [guideLimit, setGuideLimit] = useState<number>(60);

  const expandedGuideItems = useMemo(() => {
    if (subTab !== 'rehber') return TUS_CLINICAL_GUIDE_ENTRIES;
    const seen = new Set(TUS_CLINICAL_GUIDE_ENTRIES.map((g) => g.title.toLowerCase()));
    const extraFromQuestions = TUS_VAKA_QUESTIONS.slice(0, 720)
      .filter((_, idx) => idx % 3 === 0)
      .map((q, i) => {
        const rawTitle =
          q.options.find((o) => o.letter === q.correctOption)?.text || q.subTopic;
        return {
          id: `auto-guide-${i}`,
          category: (q.branchId === 'farmakoloji'
            ? 'Toksikoloji & Antidotlar'
            : q.branchId === 'biyokimya'
            ? 'Hız Kısıtlayıcı Enzimler'
            : q.branchId === 'patoloji'
            ? 'Patognomonik Bulgular & Triyadlar'
            : 'Tanı & Altın Standart') as ClinicalGuideCategory,
          branchId: q.branchId,
          branchName: q.branchName,
          title: rawTitle,
          firstChoiceOrFeature: q.firstLineVsGoldStandard,
          goldStandardOrTarget: q.clinicalClues.join(' • '),
          clinicalTrapNote: q.stepByStepMechanism,
          pearl: q.highYieldPearl,
        };
      })
      .filter((item) => {
        const key = item.title.toLowerCase();
        if (item.title.length > 68 || seen.has(key)) return false;
        seen.add(key);
        return true;
      });
    return [...TUS_CLINICAL_GUIDE_ENTRIES, ...extraFromQuestions];
  }, [subTab]);

  const filteredGuideItems = useMemo(() => {
    const q = guideSearch.trim().toLowerCase();
    return expandedGuideItems.filter((item) => {
      if (guideCategory !== 'ALL' && item.category !== guideCategory) return false;
      if (q) {
        const hay = `${item.title} ${item.branchName} ${item.firstChoiceOrFeature} ${item.goldStandardOrTarget} ${item.pearl}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [expandedGuideItems, guideCategory, guideSearch]);

  return (
    <div className="space-y-2.5">
      {/* Compact 3-Way Sub-Tab Switcher (Generous 44px touch targets) */}
      <div
        className={`rounded-2xl border p-1 grid grid-cols-3 gap-1 ${
          isLight
            ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
            : 'bg-[#121826] border-white/10 shadow-md'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setSubTab('deneme');
          }}
          className={`h-10 px-2 rounded-xl text-[12px] font-extrabold flex items-center justify-center gap-1.5 transition ${
            subTab === 'deneme'
              ? 'bg-[#2563EB] text-white shadow-xs'
              : isLight
              ? 'text-slate-600 hover:text-slate-900'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4 shrink-0" />
          <span className="truncate">Deneme</span>
        </button>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setSubTab('hesap');
          }}
          className={`h-10 px-2 rounded-xl text-[12px] font-extrabold flex items-center justify-center gap-1.5 transition ${
            subTab === 'hesap'
              ? 'bg-[#2563EB] text-white shadow-xs'
              : isLight
              ? 'text-slate-600 hover:text-slate-900'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calculator className="w-4 h-4 shrink-0" />
          <span className="truncate">Hesaplayıcı</span>
        </button>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setSubTab('rehber');
          }}
          className={`h-10 px-2 rounded-xl text-[12px] font-extrabold flex items-center justify-center gap-1.5 transition ${
            subTab === 'rehber'
              ? 'bg-[#2563EB] text-white shadow-xs'
              : isLight
              ? 'text-slate-600 hover:text-slate-900'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4 shrink-0" />
          <span className="truncate">Rehber</span>
        </button>
      </div>

      {/* SUB-TAB A: DENEME SİMÜLATÖRÜ */}
      {subTab === 'deneme' && (
        <>
          {!activeMode ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
              {EXAM_MODES.map((mode) => {
                const locked = mode.requiresPro && !isPro;
                return (
                  <div
                    key={mode.id}
                    className={`rounded-2xl border p-4 flex flex-col justify-between gap-3 transition ${
                      isLight
                        ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
                        : 'bg-[#121826] border-white/10 shadow-md'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10.5px] font-extrabold ${
                            mode.requiresPro
                              ? 'bg-amber-500/15 text-amber-500 border border-amber-400/30'
                              : 'bg-blue-500/12 text-[#2563EB] border border-blue-400/30'
                          }`}
                        >
                          {mode.badge}
                        </span>
                        <span
                          className={`text-xs font-semibold flex items-center gap-1 ${
                            isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-[#2563EB]" />
                          {mode.durationMinutes} dk
                        </span>
                      </div>

                      <h3
                        className={`text-[15px] font-extrabold leading-snug ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {mode.title}
                      </h3>
                      <p
                        className={`text-xs leading-snug ${
                          isLight ? 'text-slate-500' : 'text-slate-400'
                        }`}
                      >
                        {mode.subtitle}
                      </p>

                      {mode.id === 'maraton-40' && (
                        <div className="pt-1.5 flex flex-wrap gap-1.5">
                          {TUS_BRANCHES.map((b) => {
                            const active = selectedBranches.includes(b.id);
                            return (
                              <button
                                key={b.id}
                                type="button"
                                onClick={() => handleToggleBranch(b.id)}
                                className={`h-8 px-2.5 rounded-lg text-[11px] font-bold border transition ${
                                  active
                                    ? isLight
                                      ? 'bg-blue-50 border-blue-400 text-[#2563EB]'
                                      : 'bg-blue-500/20 border-blue-400/40 text-blue-300'
                                    : isLight
                                    ? 'bg-slate-100 border-slate-200 text-slate-500'
                                    : 'bg-white/5 border-white/10 text-slate-400'
                                }`}
                              >
                                {b.shortName}
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => handleStartExam(mode)}
                      className={`w-full h-12 px-4 rounded-xl font-extrabold text-[13px] flex items-center justify-center gap-2 transition active:scale-[0.98] ${
                        locked
                          ? isLight
                            ? 'bg-amber-50 hover:bg-amber-100 border border-amber-400 text-amber-800'
                            : 'bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300'
                          : 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-sm'
                      }`}
                    >
                      {locked ? (
                        <>
                          <Lock className="w-4 h-4" />
                          <span>PRO ile Aç</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 fill-current" />
                          <span>Denemeyi Başlat</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          ) : finishedResult ? (
            /* EXAM RESULT */
            <div
              className={`rounded-2xl border p-4 space-y-3.5 ${
                isLight
                  ? 'bg-white border-slate-200 shadow-md'
                  : 'bg-[#121826] border-white/10 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-500/15 pb-3">
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-[#2563EB]">
                    Deneme Karnesi
                  </div>
                  <h3 className="text-sm sm:text-base font-extrabold">
                    {finishedResult.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setActiveMode(null);
                    setFinishedResult(null);
                  }}
                  className="h-10 inline-flex items-center gap-1.5 px-3.5 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Yeni Deneme</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div
                  className={`rounded-xl border p-2.5 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-bold">Doğru</div>
                  <div className="text-lg font-extrabold text-emerald-500">
                    {finishedResult.correctCount}
                  </div>
                </div>
                <div
                  className={`rounded-xl border p-2.5 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-bold">Yanlış</div>
                  <div className="text-lg font-extrabold text-rose-500">
                    {finishedResult.wrongCount}
                  </div>
                </div>
                <div
                  className={`rounded-xl border p-2.5 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'
                  }`}
                >
                  <div className="text-[10px] text-[#2563EB] font-bold">Net (4Y=1D)</div>
                  <div className="text-lg font-extrabold">{finishedResult.netScore}</div>
                </div>
                <button
                  type="button"
                  onClick={() => onOpenGuide?.('puan')}
                  className="rounded-xl bg-blue-500/15 border border-blue-500/35 p-2.5 text-center"
                >
                  <div className="text-[10px] text-[#2563EB] font-bold inline-flex items-center gap-0.5">
                    <span>Tahmini</span>
                    <HelpCircle className="w-3 h-3" />
                  </div>
                  <div className="text-lg font-extrabold text-amber-500">
                    {finishedResult.estimatedTusScore}
                  </div>
                </button>
              </div>

              {/* Branch Net Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-500/15">
                <table className="w-full text-left text-xs">
                  <thead
                    className={
                      isLight ? 'bg-slate-100 text-slate-600' : 'bg-[#071117] text-slate-400'
                    }
                  >
                    <tr>
                      <th className="py-2 px-3">Branş</th>
                      <th className="py-2 px-2 text-center">D</th>
                      <th className="py-2 px-2 text-center">Y</th>
                      <th className="py-2 px-2 text-center">B</th>
                      <th className="py-2 px-3 text-right">Net</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-500/10">
                    {Object.entries(finishedResult.branchBreakdown).map(
                      ([bName, stat]) => (
                        <tr key={bName}>
                          <td className="py-1.5 px-3 font-semibold">{bName}</td>
                          <td className="py-1.5 px-2 text-center text-emerald-500 font-bold">
                            {stat.correct}
                          </td>
                          <td className="py-1.5 px-2 text-center text-rose-500 font-bold">
                            {stat.wrong}
                          </td>
                          <td className="py-1.5 px-2 text-center text-slate-400">
                            {stat.blank}
                          </td>
                          <td className="py-1.5 px-3 text-right font-extrabold text-teal-500">
                            {stat.net}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>

              {/* Post-Exam Solution Review Toggle */}
              <div className="pt-1 space-y-2.5">
                <button
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setShowExamReview((r) => !r);
                  }}
                  className={`w-full py-2.5 px-3.5 rounded-xl border text-xs font-extrabold flex items-center justify-center gap-1.5 transition ${
                    isLight
                      ? 'bg-emerald-50 hover:bg-emerald-100 border-emerald-300 text-emerald-800'
                      : 'bg-emerald-500/15 hover:bg-emerald-500/25 border-emerald-500/35 text-emerald-300'
                  }`}
                >
                  <BookOpen className="w-4 h-4" />
                  <span>
                    {showExamReview
                      ? 'Soru Çözümlerini Gizle'
                      : `Soru Çözümlerini İncele (${examQuestions.length} Soru)`}
                  </span>
                </button>

                {showExamReview && (
                  <div className="space-y-2.5 max-h-[480px] overflow-y-auto pr-1">
                    {examQuestions.map((q, idx) => {
                      const chosen = examSelections[q.id];
                      const isCorrect = chosen === q.correctOption;
                      const correctOptText =
                        q.options.find((o) => o.letter === q.correctOption)?.text || '';
                      const chosenOptText = chosen
                        ? q.options.find((o) => o.letter === chosen)?.text || ''
                        : '';
                      return (
                        <div
                          key={q.id}
                          className={`rounded-xl border p-3 space-y-1.5 text-xs ${
                            isLight
                              ? 'bg-slate-50 border-slate-200 text-slate-800'
                              : 'bg-[#071117] border-white/10 text-slate-200'
                          }`}
                        >
                          <div className="flex items-center justify-between gap-2">
                            <span className="font-extrabold text-emerald-500">
                              Soru {idx + 1} • {q.branchName}
                            </span>
                            <span
                              className={`px-2 py-0.5 rounded text-[10px] font-extrabold ${
                                !chosen
                                  ? 'bg-slate-500/20 text-slate-400'
                                  : isCorrect
                                  ? 'bg-emerald-500/20 text-emerald-500'
                                  : 'bg-rose-500/20 text-rose-500'
                              }`}
                            >
                              {!chosen
                                ? `Boş (Doğru: ${q.correctOption})`
                                : isCorrect
                                ? `Doğru (${chosen})`
                                : `Yanlış: ${chosen} → Doğru: ${q.correctOption}`}
                            </span>
                          </div>
                          <p className="font-medium leading-snug">{q.stem}</p>
                          {chosen && !isCorrect && (
                            <p className="text-rose-500 font-semibold">
                              Senin Cevabın ({chosen}): {chosenOptText}
                            </p>
                          )}
                          <p className="text-emerald-500 font-bold">
                            Doğru Cevap ({q.correctOption}): {correctOptText}
                          </p>
                          <p
                            className={`text-[11.5px] leading-relaxed ${
                              isLight ? 'text-slate-600' : 'text-slate-300'
                            }`}
                          >
                            <strong>Çözüm:</strong> {q.stepByStepMechanism}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          ) : (
            /* ACTIVE EXAM RUNNER */
            <div
              className={`rounded-2xl border overflow-hidden ${
                isLight
                  ? 'bg-white border-slate-200 shadow-md'
                  : 'bg-[#121826] border-white/10 shadow-xl'
              }`}
            >
              <div
                className={`px-3.5 py-2.5 border-b flex items-center justify-between gap-2 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'
                }`}
              >
                <span className="text-xs font-extrabold text-[#2563EB] truncate">
                  Soru {examIdx + 1}/{examQuestions.length} •{' '}
                  {examQuestions[examIdx]?.branchName}
                </span>

                <div className="flex items-center gap-2 shrink-0">
                  <ExamTimerPill endAtMs={examEndMs} onExpire={handleFinishExam} />
                  <button
                    type="button"
                    onClick={handleFinishExam}
                    className="h-9 px-3.5 rounded-xl bg-amber-500 text-slate-950 font-extrabold text-xs"
                  >
                    Bitir
                  </button>
                </div>
              </div>

              <div className="px-3.5 py-2 border-b border-slate-500/10 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                {examQuestions.map((q, idx) => {
                  const answered = Boolean(examSelections[q.id]);
                  const active = idx === examIdx;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setExamIdx(idx)}
                      className={`w-8 h-8 rounded-lg text-xs font-extrabold shrink-0 transition ${
                        active
                          ? 'bg-[#2563EB] text-white'
                          : answered
                          ? 'bg-blue-500/20 text-[#2563EB]'
                          : isLight
                          ? 'bg-slate-100 text-slate-500'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>

              {examQuestions[examIdx] && (
                <div className="p-4 space-y-3">
                  <p className="text-[15px] font-semibold leading-relaxed">
                    {examQuestions[examIdx].stem}
                  </p>

                  <div className="space-y-2">
                    {examQuestions[examIdx].options.map((opt) => {
                      const chosen =
                        examSelections[examQuestions[examIdx].id] === opt.letter;
                      return (
                        <button
                          key={opt.letter}
                          type="button"
                          onClick={() =>
                            handleSelectExamOption(
                              examQuestions[examIdx].id,
                              opt.letter
                            )
                          }
                          className={`w-full min-h-[52px] text-left rounded-2xl border px-3.5 py-3 flex items-center gap-3 transition active:scale-[0.99] ${
                            chosen
                              ? 'bg-blue-500/15 border-[#2563EB] font-bold'
                              : isLight
                              ? 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                              : 'bg-[#0A0E17] border-white/10 hover:bg-white/5'
                          }`}
                        >
                          <span
                            className={`w-8 h-8 rounded-xl text-xs font-extrabold flex items-center justify-center shrink-0 ${
                              chosen
                                ? 'bg-[#2563EB] text-white'
                                : 'bg-blue-500/12 text-[#2563EB]'
                            }`}
                          >
                            {opt.letter}
                          </span>
                          <span className="text-[13.5px] leading-snug">
                            {opt.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div
                className={`px-3.5 py-3 border-t grid grid-cols-2 gap-2.5 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'
                }`}
              >
                <button
                  type="button"
                  disabled={examIdx === 0}
                  onClick={() => setExamIdx((i) => Math.max(0, i - 1))}
                  className={`h-11 rounded-xl border text-xs font-extrabold disabled:opacity-35 ${
                    isLight
                      ? 'bg-white border-slate-200 text-slate-700'
                      : 'bg-[#121826] border-white/10 text-slate-200'
                  }`}
                >
                  Önceki
                </button>

                {examIdx < examQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setExamIdx((i) => Math.min(examQuestions.length - 1, i + 1))
                    }
                    className="h-11 rounded-xl bg-[#2563EB] text-white text-xs font-extrabold"
                  >
                    Sonraki
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinishExam}
                    className="h-11 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold"
                  >
                    Sınavı Bitir
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* SUB-TAB B: KATEGORİZE & HATASIZ KLİNİK HESAPLAYICILAR */}
      {subTab === 'hesap' && (
        <div className="space-y-3">
          {/* Clean 4-Way Calculator Category Pills (No 4-Card Wall of Text!) */}
          <div className="grid grid-cols-4 gap-1.5">
            {(
              [
                { id: 'ag' as const, label: 'Anyon & Winter' },
                { id: 'fena' as const, label: 'FENa' },
                { id: 'parkland' as const, label: 'Parkland' },
                { id: 'electrolyte' as const, label: 'Ca & Na' },
              ]
            ).map((c) => {
              const active = activeCalc === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => {
                    triggerHaptic('selection');
                    setActiveCalc(c.id);
                  }}
                  className={`h-10 px-1.5 rounded-xl text-[11px] font-extrabold border transition truncate ${
                    active
                      ? 'bg-[#2563EB] border-[#2563EB] text-white shadow-xs'
                      : isLight
                      ? 'bg-white border-slate-200 text-slate-600'
                      : 'bg-[#121826] border-white/10 text-slate-300'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* Calculator 1: Anyon Açığı, Albümin Düzeltmeli AG & Winter Formülü */}
          {activeCalc === 'ag' && (() => {
            const safeNa = Math.max(80, Math.min(200, Number.isFinite(agNa) ? agNa : 140));
            const safeCl = Math.max(50, Math.min(160, Number.isFinite(agCl) ? agCl : 104));
            const safeHco3 = Math.max(1, Math.min(60, Number.isFinite(agHco3) ? agHco3 : 14));
            const safeAlb = Math.max(0.5, Math.min(6.5, Number.isFinite(agAlbumin) ? agAlbumin : 4));
            const safePco2 = Math.max(5, Math.min(120, Number.isFinite(agPco2) ? agPco2 : 29));

            const rawAg = +(safeNa - (safeCl + safeHco3)).toFixed(1);
            const correctedAg = +(rawAg + 2.5 * (4.0 - safeAlb)).toFixed(1);
            const isMetAcidosis = safeHco3 < 22;
            const winterExpected = +(1.5 * safeHco3 + 8).toFixed(1);
            const winterLow = +(winterExpected - 2).toFixed(1);
            const winterHigh = +(winterExpected + 2).toFixed(1);
            const isHighAg = correctedAg > 12;
            const respCompStatus = !isMetAcidosis
              ? 'Winter formülü yalnızca metabolik asidozda (HCO₃ < 22 mEq/L) uygulanır.'
              : safePco2 < winterLow
              ? 'Ek Solunumsal Alkaloz (PaCO₂ beklenenden düşük — Salisilat / Sepsis)'
              : safePco2 > winterHigh
              ? 'Ek Solunumsal Asidoz (PaCO₂ beklenenden yüksek — Solunum yorgunluğu)'
              : 'Uygun solunumsal kompanzasyon (Winter aralığında)';

            return (
              <div
                className={`rounded-2xl border p-4 space-y-3 ${
                  isLight ? 'bg-white border-slate-200/85 shadow-sm' : 'bg-[#121826] border-white/10 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 min-w-0">
                    <Activity className="w-4 h-4 text-[#2563EB] shrink-0" />
                    <h3 className="text-sm font-extrabold truncate">
                      Anyon Açığı & Winter Formülü
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      shareClinicalSummary(
                        `Anyon Açığı: ${rawAg} (Alb. düzeltmeli: ${correctedAg}) • Winter PaCO2: ${isMetAcidosis ? `${winterLow}–${winterHigh} mmHg` : 'Metabolik asidoz dışı'}`
                      );
                    }}
                    className="h-9 inline-flex items-center gap-1 px-2.5 rounded-xl bg-blue-500/12 text-[#2563EB] text-xs font-extrabold shrink-0"
                  >
                    <Share2 className="w-3.5 h-3.5" />
                    <span>Paylaş</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { label: 'Na⁺ (mEq/L)', val: agNa, set: setAgNa, step: 1 },
                    { label: 'Cl⁻ (mEq/L)', val: agCl, set: setAgCl, step: 1 },
                    { label: 'HCO₃⁻ (mEq/L)', val: agHco3, set: setAgHco3, step: 1 },
                    { label: 'Albümin (g/dL)', val: agAlbumin, set: setAgAlbumin, step: 0.1 },
                    { label: 'PaCO₂ (mmHg)', val: agPco2, set: setAgPco2, step: 1 },
                  ].map((f, idx) => (
                    <label key={idx} className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400 block truncate">{f.label}</span>
                      <input
                        type="number"
                        step={f.step}
                        value={f.val}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          f.set(Number.isFinite(v) ? v : 0);
                        }}
                        className={`w-full h-10 rounded-xl px-2.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#0A0E17] border-white/10 text-white'
                        }`}
                      />
                    </label>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className={`rounded-xl border p-2.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">Standart AG</div>
                    <div className="text-base font-extrabold text-[#2563EB] tabular-nums">{rawAg}</div>
                  </div>
                  <div className={`rounded-xl border p-2.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">Düzeltilmiş AG</div>
                    <div className="text-base font-extrabold text-amber-500 tabular-nums">{correctedAg}</div>
                  </div>
                  <div className={`rounded-xl border p-2.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">Winter PaCO₂</div>
                    <div className="text-base font-extrabold text-emerald-500 tabular-nums">
                      {isMetAcidosis ? `${winterLow}–${winterHigh}` : '—'}
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-xl border p-3 text-xs space-y-1.5 ${
                    isLight
                      ? 'bg-blue-50/70 border-blue-200 text-slate-800'
                      : 'bg-blue-950/30 border-blue-500/30 text-slate-100'
                  }`}
                >
                  <div className="font-semibold">
                    <strong>Yorum:</strong>{' '}
                    {isHighAg
                      ? 'Yüksek Anyon Açıklı Asidoz (MUDPILES: Metanol, Üremi, DKA, Laktik asidoz, Salisilat...)'
                      : 'Normal Anyon Açıklı (Hiperkloremik) Asidoz (İshal, RTA Tip 1/2/4, Asetazolamid)'}
                  </div>
                  <div className="text-[11.5px] font-semibold text-emerald-600 dark:text-emerald-300">
                    <strong>Solunum:</strong> {respCompStatus}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Calculator 2: FENa */}
          {activeCalc === 'fena' && (() => {
            const safeUNa = Math.max(0, Number.isFinite(fenaUNa) ? fenaUNa : 0);
            const safePNa = Math.max(1, Number.isFinite(fenaPNa) ? fenaPNa : 140);
            const safeUCr = Math.max(0.1, Number.isFinite(fenaUCr) ? fenaUCr : 120);
            const safePCr = Math.max(0, Number.isFinite(fenaPCr) ? fenaPCr : 1);
            const fenaPct = +(((safeUNa * safePCr) / (safePNa * safeUCr)) * 100).toFixed(2);
            const fenaStatus =
              fenaPct < 1
                ? 'Prerenal ABH (< %1) — Tübül sağlam, Na⁺ geri emilimi korunmuş.'
                : fenaPct > 2
                ? 'İntrinsik Renal / ATN (> %2) — Tübüler hasara bağlı Na⁺ kaybı.'
                : 'Ara Bölge (%1–%2) — Erken ATN veya diüretik etkisi açısından değerlendir.';

            return (
              <div
                className={`rounded-2xl border p-4 space-y-3 ${
                  isLight ? 'bg-white border-slate-200/85 shadow-sm' : 'bg-[#121826] border-white/10 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-[#2563EB]" />
                    <h3 className="text-sm font-extrabold">FENa (Prerenal vs ATN)</h3>
                  </div>
                  <span className="px-2.5 py-1 rounded-xl bg-blue-500/12 text-[#2563EB] text-xs font-extrabold tabular-nums">
                    FENa: %{fenaPct}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'İdrar Na⁺ (mEq/L)', val: fenaUNa, set: setFenaUNa, step: 1 },
                    { label: 'Plazma Na⁺ (mEq/L)', val: fenaPNa, set: setFenaPNa, step: 1 },
                    { label: 'İdrar Kr (mg/dL)', val: fenaUCr, set: setFenaUCr, step: 5 },
                    { label: 'Plazma Kr (mg/dL)', val: fenaPCr, set: setFenaPCr, step: 0.1 },
                  ].map((f, idx) => (
                    <label key={idx} className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400 block truncate">{f.label}</span>
                      <input
                        type="number"
                        step={f.step}
                        value={f.val}
                        onChange={(e) => {
                          const v = parseFloat(e.target.value);
                          f.set(Number.isFinite(v) ? v : 0);
                        }}
                        className={`w-full h-10 rounded-xl px-2.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#0A0E17] border-white/10 text-white'
                        }`}
                      />
                    </label>
                  ))}
                </div>

                <div
                  className={`rounded-xl border p-3 text-xs space-y-1 font-semibold ${
                    fenaPct < 1
                      ? isLight
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-emerald-950/35 border-emerald-500/30 text-emerald-200'
                      : isLight
                      ? 'bg-amber-50 border-amber-200 text-amber-900'
                      : 'bg-amber-950/35 border-amber-500/30 text-amber-200'
                  }`}
                >
                  <div>{fenaStatus}</div>
                  <div className="text-[11px] opacity-80">
                    Diüretik kullanan hastada FENa yerine <strong>FEÜre &lt; %35</strong> prerenal lehinedir.
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Calculator 3: Parkland Yanık Sıvı Formülü */}
          {activeCalc === 'parkland' && (() => {
            const safeW = Math.max(1, Math.min(250, Number.isFinite(burnWeight) ? burnWeight : 70));
            const safeT = Math.max(0, Math.min(100, Number.isFinite(burnTbsa) ? burnTbsa : 30));
            const totalMl = Math.round(4 * safeW * safeT);
            const first8hMl = Math.round(totalMl / 2);
            const first8hRate = Math.round(first8hMl / 8);
            const next16hRate = Math.round(first8hMl / 16);
            return (
              <div
                className={`rounded-2xl border p-4 space-y-3 ${
                  isLight ? 'bg-white border-slate-200/85 shadow-sm' : 'bg-[#121826] border-white/10 shadow-md'
                }`}
              >
                <h3 className="text-sm font-extrabold">
                  Parkland Yanık Sıvısı (4 mL × kg × %TBSA)
                </h3>
                <div className="grid grid-cols-2 gap-2.5">
                  <label className="space-y-1 text-[11px] font-bold">
                    <span className="text-slate-400">Ağırlık (kg)</span>
                    <input
                      type="number"
                      min={1}
                      max={250}
                      value={burnWeight}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setBurnWeight(Number.isFinite(v) ? v : 0);
                      }}
                      className={`w-full h-10 rounded-xl px-3 text-xs font-extrabold border outline-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900'
                          : 'bg-[#0A0E17] border-white/10 text-white'
                      }`}
                    />
                  </label>
                  <label className="space-y-1 text-[11px] font-bold">
                    <span className="text-slate-400">2°/3° Yanık (%TBSA)</span>
                    <input
                      type="number"
                      min={0}
                      max={100}
                      value={burnTbsa}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setBurnTbsa(Number.isFinite(v) ? Math.min(100, Math.max(0, v)) : 0);
                      }}
                      className={`w-full h-10 rounded-xl px-3 text-xs font-extrabold border outline-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900'
                          : 'bg-[#0A0E17] border-white/10 text-white'
                      }`}
                    />
                  </label>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className={`rounded-xl border p-2.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">24 Saat RL</div>
                    <div className="text-sm font-extrabold text-emerald-500 tabular-nums">{totalMl.toLocaleString('tr-TR')} mL</div>
                  </div>
                  <div className={`rounded-xl border p-2.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">İlk 8 Saat</div>
                    <div className="text-sm font-extrabold text-[#2563EB] tabular-nums">{first8hRate} mL/sa</div>
                  </div>
                  <div className={`rounded-xl border p-2.5 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">Sonraki 16 Sa</div>
                    <div className="text-sm font-extrabold tabular-nums">{next16hRate} mL/sa</div>
                  </div>
                </div>
                <p className="text-[11px] text-slate-400">
                  Ringer Laktat kullanılır; ilk 8 saatlik dilim <strong>yanık anından itibaren</strong> hesaplanır (1° yanık dahil edilmez).
                </p>
              </div>
            );
          })()}

          {/* Calculator 4: Düzeltilmiş Ca & Na */}
          {activeCalc === 'electrolyte' && (() => {
            const safeCa = Math.max(0, Number.isFinite(corrCa) ? corrCa : 0);
            const safeAlb = Math.max(0.5, Math.min(6.5, Number.isFinite(corrAlb) ? corrAlb : 4));
            const safeNa = Math.max(80, Math.min(200, Number.isFinite(corrNa) ? corrNa : 135));
            const safeGlu = Math.max(20, Number.isFinite(corrGlucose) ? corrGlucose : 100);
            const adjCa = +(safeCa + 0.8 * (4.0 - safeAlb)).toFixed(2);
            const gluFactor = safeGlu > 400 ? 2.4 : 1.6;
            const excessGlu = Math.max(0, safeGlu - 100);
            const adjNa = +(safeNa + gluFactor * (excessGlu / 100)).toFixed(1);
            return (
              <div
                className={`rounded-2xl border p-4 space-y-3 ${
                  isLight ? 'bg-white border-slate-200/85 shadow-sm' : 'bg-[#121826] border-white/10 shadow-md'
                }`}
              >
                <h3 className="text-sm font-extrabold">Düzeltilmiş Kalsiyum & Sodyum</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <label className="space-y-1 text-[11px] font-bold">
                    <span className="text-slate-400">Ca²⁺ (mg/dL)</span>
                    <input
                      type="number"
                      step={0.1}
                      value={corrCa}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setCorrCa(Number.isFinite(v) ? v : 0);
                      }}
                      className={`w-full h-10 rounded-xl px-2.5 text-xs font-extrabold border outline-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900'
                          : 'bg-[#0A0E17] border-white/10 text-white'
                      }`}
                    />
                  </label>
                  <label className="space-y-1 text-[11px] font-bold">
                    <span className="text-slate-400">Albümin (g/dL)</span>
                    <input
                      type="number"
                      step={0.1}
                      value={corrAlb}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setCorrAlb(Number.isFinite(v) ? v : 0);
                      }}
                      className={`w-full h-10 rounded-xl px-2.5 text-xs font-extrabold border outline-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900'
                          : 'bg-[#0A0E17] border-white/10 text-white'
                      }`}
                    />
                  </label>
                  <label className="space-y-1 text-[11px] font-bold">
                    <span className="text-slate-400">Na⁺ (mEq/L)</span>
                    <input
                      type="number"
                      value={corrNa}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setCorrNa(Number.isFinite(v) ? v : 0);
                      }}
                      className={`w-full h-10 rounded-xl px-2.5 text-xs font-extrabold border outline-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900'
                          : 'bg-[#0A0E17] border-white/10 text-white'
                      }`}
                    />
                  </label>
                  <label className="space-y-1 text-[11px] font-bold">
                    <span className="text-slate-400">Glukoz (mg/dL)</span>
                    <input
                      type="number"
                      step={10}
                      value={corrGlucose}
                      onChange={(e) => {
                        const v = parseFloat(e.target.value);
                        setCorrGlucose(Number.isFinite(v) ? v : 0);
                      }}
                      className={`w-full h-10 rounded-xl px-2.5 text-xs font-extrabold border outline-none ${
                        isLight
                          ? 'bg-slate-50 border-slate-200 text-slate-900'
                          : 'bg-[#0A0E17] border-white/10 text-white'
                      }`}
                    />
                  </label>
                </div>
                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className={`rounded-xl border p-3 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">Düzeltilmiş Ca²⁺</div>
                    <div className="text-lg font-extrabold text-emerald-500 tabular-nums">{adjCa} mg/dL</div>
                    <div className="text-[10px] text-slate-400">+0.8 × (4 − Alb)</div>
                  </div>
                  <div className={`rounded-xl border p-3 ${isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#0A0E17] border-white/8'}`}>
                    <div className="text-[10px] font-bold text-slate-400">Düzeltilmiş Na⁺</div>
                    <div className="text-lg font-extrabold text-[#2563EB] tabular-nums">{adjNa} mEq/L</div>
                    <div className="text-[10px] text-slate-400">Katsayı: +{gluFactor} / 100 mg/dL</div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {/* SUB-TAB C: KLİNİK REHBER */}
      {subTab === 'rehber' && (
        <div className="space-y-2.5">
          <div
            className={`rounded-2xl border p-3 space-y-2.5 ${
              isLight ? 'bg-white border-slate-200/85' : 'bg-[#121826] border-white/10'
            }`}
          >
            <div className="relative">
              <Search className="w-4 h-4 text-[#2563EB] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={guideSearch}
                onChange={(e) => setGuideSearch(e.target.value)}
                placeholder="İlk tercih, antidot, enzim veya triyad ara..."
                className={`w-full h-11 pl-9 pr-20 rounded-xl border text-xs focus:outline-none focus:border-[#2563EB] ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : 'bg-[#0A0E17] border-white/10 text-slate-100'
                }`}
              />
              {guideSearch && (
                <span
                  className={`absolute right-2.5 top-1/2 -translate-y-1/2 px-2 py-0.5 rounded text-[10px] font-extrabold ${
                    isLight
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-blue-500/20 text-blue-300'
                  }`}
                >
                  {filteredGuideItems.length} sonuç
                </span>
              )}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              {(
                [
                  'ALL',
                  'Tanı & Altın Standart',
                  'Toksikoloji & Antidotlar',
                  'Hız Kısıtlayıcı Enzimler',
                  'Patognomonik Bulgular & Triyadlar',
                  'Genetik & Translokasyonlar',
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    triggerHaptic('light');
                    setGuideCategory(cat);
                  }}
                  className={`shrink-0 h-9 px-3 rounded-xl text-xs font-bold border transition ${
                    guideCategory === cat
                      ? 'bg-[#2563EB] border-[#2563EB] text-white'
                      : isLight
                      ? 'bg-slate-100 border-slate-200 text-slate-600'
                      : 'bg-[#0A0E17] border-white/10 text-slate-400'
                  }`}
                >
                  {cat === 'ALL' ? 'Tümü' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {filteredGuideItems.slice(0, guideLimit).map((entry) => {
              const highlightGuide = (str: string) => {
                const q = guideSearch.trim();
                if (q.length < 2) return <span>{str}</span>;
                const idx = str.toLowerCase().indexOf(q.toLowerCase());
                if (idx === -1) return <span>{str}</span>;
                return (
                  <>
                    <span>{str.slice(0, idx)}</span>
                    <mark
                      className={`rounded px-1 py-0.5 font-extrabold border ${
                        isLight
                          ? 'bg-blue-200/90 text-blue-950 border-blue-400'
                          : 'bg-blue-400/30 text-blue-100 border-blue-400/60'
                      }`}
                    >
                      {str.slice(idx, idx + q.length)}
                    </mark>
                    <span>{str.slice(idx + q.length)}</span>
                  </>
                );
              };

              return (
                <div
                  key={entry.id}
                  className={`rounded-2xl border p-3.5 space-y-2 ${
                    isLight
                      ? 'bg-white border-slate-200/85 shadow-sm'
                      : 'bg-[#121826] border-white/10 shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-blue-500/12 text-[#2563EB] text-[10px] font-extrabold">
                      {entry.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {entry.branchName}
                    </span>
                  </div>

                  <h4 className="text-[13.5px] font-extrabold leading-snug">
                    {highlightGuide(entry.title)}
                  </h4>

                  <div
                    className={`rounded-xl border p-2.5 text-xs font-medium space-y-1 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-700'
                        : 'bg-[#0A0E17] border-white/6 text-slate-200'
                    }`}
                  >
                    <div>• {highlightGuide(entry.firstChoiceOrFeature)}</div>
                  </div>

                  <div className="flex items-start gap-1.5 pt-0.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-xs font-bold leading-snug">
                      {highlightGuide(entry.pearl)}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
          {filteredGuideItems.length > guideLimit && (
            <button
              type="button"
              onClick={() => setGuideLimit((l) => l + 60)}
              className="w-full h-12 rounded-2xl border border-blue-500/30 bg-blue-500/10 text-[#2563EB] text-xs font-extrabold"
            >
              Daha Fazla Göster ({filteredGuideItems.length - guideLimit} kalan)
            </button>
          )}
        </div>
      )}

      {/* Guideline 1.4.1 Medical Reference Citations & Clinical Disclaimer (Compact Accordion) */}
      <details
        className={`rounded-2xl border px-3.5 py-2.5 text-xs ${
          isLight
            ? 'bg-slate-50 border-slate-200 text-slate-700'
            : 'bg-[#08131A] border-white/10 text-slate-300'
        }`}
      >
        <summary className="cursor-pointer list-none flex items-center justify-between gap-2 font-extrabold text-amber-500">
          <span className="flex items-center gap-1.5 min-w-0 truncate">
            <ShieldAlert className="w-4 h-4 shrink-0" />
            <span className="truncate">Tıbbi Kaynakça & Uyarı (NCBI / PubMed / WHO)</span>
          </span>
          <span className="text-[11px] shrink-0">Göster ▾</span>
        </summary>
        <div className="pt-2 space-y-2">
          <p className="text-[11px] leading-relaxed">
            Bu uygulamadaki tüm vaka soruları, klinik hesaplayıcılar ve spot bilgiler yalnızca{' '}
            <strong>Tıpta Uzmanlık Eğitimi Giriş Sınavı (TUS)</strong> hazırlığı ve akademik tıp eğitimi amaçlıdır; doğrudan hasta tanı veya tedavi kararı yerine geçmez.
          </p>
          <div className="text-[11px] space-y-1">
            <div>
              • <em>Harrison&apos;s Internal Medicine (21e)</em>, <em>Robbins Pathologic Basis of Disease (10e)</em>,{' '}
              <em>Nelson Pediatrics (21e)</em>, <em>Sabiston Surgery (21e)</em>, <em>Williams Obstetrics (26e)</em>,{' '}
              <em>Harper&apos;s Biochemistry</em>, <em>Katzung Pharmacology</em>, <em>Guyton Physiology</em>.
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <a
              href="https://www.ncbi.nlm.nih.gov/books/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[11px] font-bold hover:underline"
            >
              <span>NCBI Bookshelf</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://pubmed.ncbi.nlm.nih.gov/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-teal-500/30 bg-teal-500/10 text-teal-500 text-[11px] font-bold hover:underline"
            >
              <span>NIH PubMed</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.who.int/publications/i"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-500 text-[11px] font-bold hover:underline"
            >
              <span>WHO</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://www.osym.gov.tr/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[11px] font-bold hover:underline"
            >
              <span>ÖSYM</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </details>
    </div>
  );
};

export const DenemeRehberScreen = React.memo(DenemeRehberScreenInner);
