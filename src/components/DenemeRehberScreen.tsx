import React, { useEffect, useMemo, useState } from 'react';
import {
  Activity,
  Award,
  BookOpen,
  Calculator,
  Clock,
  ExternalLink,
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
  FREE_QUESTION_LIMIT,
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
  totalSolvedCount: number;
  onRecordExamAttempt: (attempt: TusExamAttempt) => void;
  onRecordVakaAnswer: (
    questionId: string,
    selected: OptionLetter,
    isCorrect: boolean,
    branchId: TusBranchId
  ) => void;
  onOpenPaywall: (reason?: string) => void;
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
    title: 'Hızlı Karma TUS Denemesi',
    subtitle: 'TTBT & KTBT karma 15 soru • 4 yanlış 1 doğruyu götürür',
    questionCount: 15,
    durationMinutes: 20,
    requiresPro: false,
    badge: 'ÜCRETSİZ • 15 SORU',
  },
  {
    id: 'ttbt-25',
    title: 'Temel Tıp Bilimleri (TTBT) Deneme',
    subtitle: '7 Temel Branş (Biyokimya, Mikrobiyoloji, Patoloji, Farmakoloji...)',
    questionCount: 25,
    durationMinutes: 32,
    requiresPro: true,
    badge: 'PRO • 25 SORU',
  },
  {
    id: 'ktbt-25',
    title: 'Klinik Tıp Bilimleri (KTBT) Deneme',
    subtitle: 'Dahiliye, Pediatri, Cerrahi ve Kadın Doğum vaka simülasyonu',
    questionCount: 25,
    durationMinutes: 32,
    requiresPro: true,
    badge: 'PRO • 25 SORU',
  },
  {
    id: 'maraton-40',
    title: 'Tam Kapsamlı TUS Maratonu',
    subtitle: 'Ders seçimli 40 soruluk gerçek ÖSYM ağırlıklı maraton sınavı',
    questionCount: 40,
    durationMinutes: 50,
    requiresPro: true,
    badge: 'PRO • 40 SORU',
  },
];

export const DenemeRehberScreen: React.FC<DenemeRehberScreenProps> = ({
  isPro,
  isLight,
  totalSolvedCount,
  onRecordExamAttempt,
  onRecordVakaAnswer,
  onOpenPaywall,
}) => {
  const [subTab, setSubTab] = useState<'deneme' | 'hesap' | 'rehber'>('deneme');
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
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [finishedResult, setFinishedResult] = useState<TusExamAttempt | null>(null);
  const [showExamReview, setShowExamReview] = useState(false);

  const [guideCategory, setGuideCategory] = useState<'ALL' | ClinicalGuideCategory>('ALL');
  const [guideSearch, setGuideSearch] = useState('');

  useEffect(() => {
    if (!activeMode || finishedResult) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [Boolean(activeMode), Boolean(finishedResult)]);

  useEffect(() => {
    if (activeMode && !finishedResult && secondsLeft <= 0) {
      handleFinishExam();
    }
  }, [secondsLeft, activeMode, finishedResult]);

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
        `"${mode.title}" moduna erişmek için TUS Akademi Ömür Boyu Pro paketini açın.`
      );
      return;
    }

    if (!isPro && totalSolvedCount >= FREE_QUESTION_LIMIT) {
      triggerHaptic('warning');
      onOpenPaywall(
        `Ücretsiz ${FREE_QUESTION_LIMIT} soru hakkınızı tamamladınız. Sınırsız deneme sınavları için Ömür Boyu Pro'ya geçin.`
      );
      return;
    }

    let pool = [...TUS_VAKA_QUESTIONS];
    if (mode.id === 'ttbt-25') {
      pool = pool.filter((q) => q.session === 'TTBT');
    } else if (mode.id === 'ktbt-25') {
      pool = pool.filter((q) => q.session === 'KTBT');
    } else if (mode.id === 'maraton-40') {
      pool = pool.filter((q) => selectedBranches.includes(q.branchId));
    }

    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const picked = shuffled.slice(0, mode.questionCount);

    triggerHaptic('medium');
    setActiveMode(mode);
    setExamQuestions(picked);
    setExamIdx(0);
    setExamSelections({});
    setSecondsLeft(mode.durationMinutes * 60);
    setFinishedResult(null);
    setShowExamReview(false);
  };

  const handleSelectExamOption = (questionId: string, letter: OptionLetter) => {
    if (!isPro) {
      const answeredInThisExam = Object.values(examSelections).filter(Boolean).length;
      const alreadySelectedForThis = Boolean(examSelections[questionId]);
      if (
        !alreadySelectedForThis &&
        totalSolvedCount + answeredInThisExam >= FREE_QUESTION_LIMIT
      ) {
        triggerHaptic('warning');
        onOpenPaywall(
          `Ücretsiz ${FREE_QUESTION_LIMIT} soru sınırına ulaştınız. Denemeye sınırsız devam etmek için Ömür Boyu Pro'yu açın.`
        );
        return;
      }
    }

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
    const elapsed = Math.max(1, activeMode.durationMinutes * 60 - secondsLeft);

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

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const expandedGuideItems = useMemo(() => {
    const extraFromQuestions = TUS_VAKA_QUESTIONS.filter((_, idx) => idx % 6 === 0).map(
      (q, i) => ({
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
        title: `${q.options.find((o) => o.letter === q.correctOption)?.text || q.subTopic}`,
        firstChoiceOrFeature: q.firstLineVsGoldStandard,
        goldStandardOrTarget: `Klinik Anahtar: ${q.clinicalClues.join(' • ')}`,
        clinicalTrapNote: q.stepByStepMechanism,
        pearl: q.highYieldPearl,
      })
    );
    return [...TUS_CLINICAL_GUIDE_ENTRIES, ...extraFromQuestions];
  }, []);

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
      {/* Compact 3-Way Sub-Tab Switcher */}
      <div
        className={`rounded-2xl border p-1 grid grid-cols-3 gap-1 ${
          isLight
            ? 'bg-white border-slate-200 shadow-sm'
            : 'bg-[#0C1B24] border-white/10 shadow-md'
        }`}
      >
        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setSubTab('deneme');
          }}
          className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold flex items-center justify-center gap-1 transition ${
            subTab === 'deneme'
              ? 'bg-emerald-600 text-white shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Award className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">TUS Deneme</span>
        </button>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setSubTab('hesap');
          }}
          className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold flex items-center justify-center gap-1 transition ${
            subTab === 'hesap'
              ? 'bg-amber-500 text-slate-950 shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <Calculator className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Klinik Hesaplayıcı</span>
        </button>

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            setSubTab('rehber');
          }}
          className={`py-2 px-2 rounded-xl text-[11px] sm:text-xs font-extrabold flex items-center justify-center gap-1 transition ${
            subTab === 'rehber'
              ? 'bg-teal-600 text-white shadow-sm'
              : isLight
              ? 'text-slate-600 hover:text-slate-900'
              : 'text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-3.5 h-3.5 shrink-0" />
          <span className="truncate">Klinik Rehber</span>
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
                    className={`rounded-2xl border p-3.5 flex flex-col justify-between gap-2.5 transition ${
                      isLight
                        ? 'bg-white border-slate-200/90 shadow-sm'
                        : 'bg-[#0C1B24] border-white/10 shadow-md'
                    }`}
                  >
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                            mode.requiresPro
                              ? 'bg-amber-500/15 text-amber-500 border border-amber-400/30'
                              : 'bg-emerald-500/15 text-emerald-500 border border-emerald-400/30'
                          }`}
                        >
                          {mode.badge}
                        </span>
                        <span
                          className={`text-[11px] font-semibold flex items-center gap-1 ${
                            isLight ? 'text-slate-500' : 'text-slate-400'
                          }`}
                        >
                          <Clock className="w-3.5 h-3.5 text-teal-500" />
                          {mode.durationMinutes} dk
                        </span>
                      </div>

                      <h3
                        className={`text-sm font-extrabold leading-snug ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}
                      >
                        {mode.title}
                      </h3>
                      <p
                        className={`text-xs leading-snug ${
                          isLight ? 'text-slate-600' : 'text-slate-400'
                        }`}
                      >
                        {mode.subtitle}
                      </p>

                      {mode.id === 'maraton-40' && (
                        <div className="pt-1.5 flex flex-wrap gap-1">
                          {TUS_BRANCHES.map((b) => {
                            const active = selectedBranches.includes(b.id);
                            return (
                              <button
                                key={b.id}
                                type="button"
                                onClick={() => handleToggleBranch(b.id)}
                                className={`px-2 py-0.5 rounded-md text-[10px] font-bold border transition ${
                                  active
                                    ? isLight
                                      ? 'bg-emerald-50 border-emerald-400 text-emerald-700'
                                      : 'bg-emerald-500/15 border-emerald-400/40 text-emerald-300'
                                    : isLight
                                    ? 'bg-slate-100 border-slate-200 text-slate-400'
                                    : 'bg-white/5 border-white/5 text-slate-500'
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
                      className={`w-full py-2.5 px-3.5 rounded-xl font-extrabold text-xs flex items-center justify-center gap-1.5 transition ${
                        locked
                          ? isLight
                            ? 'bg-amber-50 hover:bg-amber-100 border border-amber-400 text-amber-800'
                            : 'bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-300'
                          : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                      }`}
                    >
                      {locked ? (
                        <>
                          <Lock className="w-3.5 h-3.5" />
                          <span>PRO ile Denemeyi Aç</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
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
                  : 'bg-[#0C1B24] border-white/10 shadow-xl'
              }`}
            >
              <div className="flex items-center justify-between gap-2 border-b border-slate-500/15 pb-2.5">
                <div>
                  <div className="text-[11px] font-extrabold uppercase text-emerald-500">
                    ÖSYM TUS Deneme Karnesi
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
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Yeni Deneme</span>
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2 text-center">
                <div
                  className={`rounded-xl border p-2.5 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#071117] border-white/8'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-bold">Doğru</div>
                  <div className="text-lg font-extrabold text-emerald-500">
                    {finishedResult.correctCount}
                  </div>
                </div>
                <div
                  className={`rounded-xl border p-2.5 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#071117] border-white/8'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-bold">Yanlış</div>
                  <div className="text-lg font-extrabold text-rose-500">
                    {finishedResult.wrongCount}
                  </div>
                </div>
                <div
                  className={`rounded-xl border p-2.5 ${
                    isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#071117] border-white/8'
                  }`}
                >
                  <div className="text-[10px] text-teal-500 font-bold">ÖSYM Net</div>
                  <div className="text-lg font-extrabold">{finishedResult.netScore}</div>
                </div>
                <div className="rounded-xl bg-emerald-500/15 border border-emerald-500/35 p-2.5">
                  <div className="text-[10px] text-emerald-500 font-bold">TUS Puanı</div>
                  <div className="text-lg font-extrabold text-amber-500">
                    {finishedResult.estimatedTusScore}
                  </div>
                </div>
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
                  : 'bg-[#0C1B24] border-white/10 shadow-xl'
              }`}
            >
              <div
                className={`px-3.5 py-2 border-b flex items-center justify-between gap-2 ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#08131A] border-white/8'
                }`}
              >
                <span className="text-xs font-extrabold text-emerald-500 truncate">
                  Soru {examIdx + 1}/{examQuestions.length} •{' '}
                  {examQuestions[examIdx]?.branchName}
                </span>

                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="px-2.5 py-1 rounded-lg bg-teal-500/15 text-teal-400 font-mono text-xs font-extrabold">
                    {formatTimer(secondsLeft)}
                  </span>
                  <button
                    type="button"
                    onClick={handleFinishExam}
                    className="px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-extrabold text-xs"
                  >
                    Bitir
                  </button>
                </div>
              </div>

              <div className="px-3.5 py-1.5 border-b border-slate-500/10 flex items-center gap-1 overflow-x-auto no-scrollbar">
                {examQuestions.map((q, idx) => {
                  const answered = Boolean(examSelections[q.id]);
                  const active = idx === examIdx;
                  return (
                    <button
                      key={q.id}
                      type="button"
                      onClick={() => setExamIdx(idx)}
                      className={`w-6 h-6 rounded-md text-[11px] font-bold shrink-0 transition ${
                        active
                          ? 'bg-emerald-600 text-white'
                          : answered
                          ? 'bg-teal-500/20 text-teal-400'
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
                <div className="p-3.5 space-y-2.5">
                  <p className="text-sm font-semibold leading-snug">
                    {examQuestions[examIdx].stem}
                  </p>

                  <div className="space-y-1.5">
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
                          className={`w-full text-left rounded-xl border px-3 py-2.5 flex items-center gap-2.5 transition ${
                            chosen
                              ? 'bg-emerald-500/20 border-emerald-500 font-bold'
                              : isLight
                              ? 'bg-slate-50 border-slate-200 hover:bg-slate-100'
                              : 'bg-[#08131A] border-white/8 hover:bg-white/5'
                          }`}
                        >
                          <span
                            className={`w-6 h-6 rounded-lg text-xs font-extrabold flex items-center justify-center shrink-0 ${
                              chosen
                                ? 'bg-emerald-500 text-white'
                                : 'bg-emerald-500/15 text-emerald-500'
                            }`}
                          >
                            {opt.letter}
                          </span>
                          <span className="text-xs sm:text-sm leading-tight">
                            {opt.text}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              <div
                className={`px-3.5 py-2.5 border-t flex items-center justify-between ${
                  isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#08131A] border-white/8'
                }`}
              >
                <button
                  type="button"
                  disabled={examIdx === 0}
                  onClick={() => setExamIdx((i) => Math.max(0, i - 1))}
                  className="px-3 py-1.5 rounded-xl bg-slate-500/15 text-xs font-bold disabled:opacity-35"
                >
                  Önceki
                </button>

                {examIdx < examQuestions.length - 1 ? (
                  <button
                    type="button"
                    onClick={() =>
                      setExamIdx((i) => Math.min(examQuestions.length - 1, i + 1))
                    }
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-bold"
                  >
                    Sonraki
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinishExam}
                    className="px-4 py-1.5 rounded-xl bg-amber-500 text-slate-950 text-xs font-extrabold"
                  >
                    Sınavı Bitir
                  </button>
                )}
              </div>
            </div>
          )}
        </>
      )}

      {/* SUB-TAB B: İNTERAKTİF TUS KLİNİK HESAPLAYICILAR (FENa, Winter, Anyon Açığı, Parkland, Düzeltilmiş Ca/Na) */}
      {subTab === 'hesap' && (
        <div className="space-y-3">
          {/* Calculator 1: Anyon Açığı, Albümin Düzeltmeli AG & Winter Formülü */}
          {(() => {
            const rawAg = +(agNa - (agCl + agHco3)).toFixed(1);
            const correctedAg = +(rawAg + 2.5 * Math.max(0, 4 - agAlbumin)).toFixed(1);
            const winterExpected = +(1.5 * agHco3 + 8).toFixed(1);
            const winterLow = +(winterExpected - 2).toFixed(1);
            const winterHigh = +(winterExpected + 2).toFixed(1);
            const isHighAg = correctedAg > 12;
            const respCompStatus =
              agPco2 < winterLow
                ? 'Ek Solunumsal Alkaloz (PaCO2 beklenenden düşük — örn. Salisilat zehirlenmesi / Sepsis)'
                : agPco2 > winterHigh
                ? 'Ek Solunumsal Asidoz (PaCO2 beklenenden yüksek — Dekompanse / Solunum yorgunluğu)'
                : 'Uygun Solunumsal Kompanzasyon (Winter aralığında)';

            return (
              <div
                className={`rounded-2xl border p-3.5 space-y-2.5 ${
                  isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0C1B24] border-white/10 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-500" />
                    <h3 className="text-xs sm:text-sm font-extrabold">
                      1. Anyon Açığı, Albümin Düzeltmesi & Winter Formülü
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      shareClinicalSummary(
                        `TUS Klinik Hesaplama • Anyon Açığı: ${rawAg} mEq/L (Albümin düzeltmeli: ${correctedAg} mEq/L) • Winter Beklenen PaCO2: ${winterLow}–${winterHigh} mmHg (${respCompStatus})`
                      );
                    }}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-emerald-500/15 text-emerald-500 text-[11px] font-bold"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>Paylaş</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { label: 'Na+ (mEq/L)', val: agNa, set: setAgNa, step: 1 },
                    { label: 'Cl- (mEq/L)', val: agCl, set: setAgCl, step: 1 },
                    { label: 'HCO3- (mEq/L)', val: agHco3, set: setAgHco3, step: 1 },
                    { label: 'Albümin (g/dL)', val: agAlbumin, set: setAgAlbumin, step: 0.1 },
                    { label: 'Ölçülen PaCO2', val: agPco2, set: setAgPco2, step: 1 },
                  ].map((f, idx) => (
                    <label key={idx} className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400 block truncate">{f.label}</span>
                      <input
                        type="number"
                        step={f.step}
                        value={f.val}
                        onChange={(e) => f.set(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                  ))}
                </div>

                <div
                  className={`rounded-xl border p-2.5 text-xs space-y-1 ${
                    isLight
                      ? 'bg-emerald-50/70 border-emerald-200 text-slate-800'
                      : 'bg-emerald-950/35 border-emerald-500/30 text-slate-100'
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-extrabold">
                    <span>
                      Standart AG: <strong className="text-emerald-500">{rawAg} mEq/L</strong> • Albümin Düzeltmeli AG:{' '}
                      <strong className="text-amber-500">{correctedAg} mEq/L</strong>
                    </span>
                    <span>
                      Winter Beklenen PaCO2: <strong>{winterLow} – {winterHigh} mmHg</strong>
                    </span>
                  </div>
                  <div className="text-[11px] font-semibold">
                    • <strong>Ayırıcı Tanı:</strong>{' '}
                    {isHighAg
                      ? 'Yüksek Anyon Açıklı Metabolik Asidoz (MUDPILES: Metanol, Üremi, DKA, Paraldehit/Propilen glikol, İzoniyazid/Demir, Laktik asidoz, Etilen glikol, Salisilat).'
                      : 'Normal Anyon Açıklı (Hiperkloremik) Metabolik Asidoz (HARDASS: İshal, Renal Tübüler Asidoz Tip 1/2/4, Asetazolamid, Üreterosigmoidostomi).'}
                  </div>
                  <div className="text-[11px] font-semibold text-teal-500">
                    • <strong>Solunumsal Durum:</strong> {respCompStatus}
                  </div>
                </div>
              </div>
            );
          })()}

          {/* Calculator 2: FENa (Fraksiyone Sodyum Ekskresyonu — Prerenal vs ATN) */}
          {(() => {
            const denom = Math.max(0.001, fenaPNa * fenaUCr);
            const fenaPct = +(((fenaUNa * fenaPCr) / denom) * 100).toFixed(2);
            const fenaStatus =
              fenaPct < 1
                ? 'Prerenal Akut Böbrek Hasarı (FENa < %1 • Tübül fonksiyonu sağlam, sodyum ve su tutulumu aktif)'
                : fenaPct > 2
                ? 'İntrinsik Renal / Akut Tübüler Nekroz — ATN (FENa > %2 • Tübüler epitel hasarına bağlı idrarla sodyum kaybı)'
                : 'Ara Bölge (%1 – %2 • Diüretik kullanımı veya erken evre ATN açısından klinik korelasyon gerekir)';

            return (
              <div
                className={`rounded-2xl border p-3.5 space-y-2.5 ${
                  isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0C1B24] border-white/10 shadow-md'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Calculator className="w-4 h-4 text-teal-500" />
                    <h3 className="text-xs sm:text-sm font-extrabold">
                      2. FENa Hesaplayıcı (Prerenal ABH vs. Akut Tübüler Nekroz)
                    </h3>
                  </div>
                  <span className="px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-500 text-xs font-extrabold">
                    FENa: %{fenaPct}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { label: 'İdrar Na (mEq/L)', val: fenaUNa, set: setFenaUNa, step: 1 },
                    { label: 'Plazma Na (mEq/L)', val: fenaPNa, set: setFenaPNa, step: 1 },
                    { label: 'İdrar Kreatinin (mg/dL)', val: fenaUCr, set: setFenaUCr, step: 5 },
                    { label: 'Plazma Kreatinin (mg/dL)', val: fenaPCr, set: setFenaPCr, step: 0.1 },
                  ].map((f, idx) => (
                    <label key={idx} className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400 block truncate">{f.label}</span>
                      <input
                        type="number"
                        step={f.step}
                        value={f.val}
                        onChange={(e) => f.set(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                  ))}
                </div>

                <div
                  className={`rounded-xl border p-2.5 text-xs font-semibold ${
                    fenaPct < 1
                      ? isLight
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                        : 'bg-emerald-950/35 border-emerald-500/30 text-emerald-200'
                      : isLight
                      ? 'bg-amber-50 border-amber-200 text-amber-900'
                      : 'bg-amber-950/35 border-amber-500/30 text-amber-200'
                  }`}
                >
                  • <strong>TUS Yorumu:</strong> {fenaStatus} (Not: Diüretik kullanan hastada FENa yerine{' '}
                  <strong>FEÜre &lt; %35</strong> prerenal lehinedir).
                </div>
              </div>
            );
          })()}

          {/* Calculator 3 & 4: Parkland Yanık Sıvı Resüsitasyonu + Düzeltilmiş Ca / Na */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {(() => {
              const totalMl = Math.round(4 * burnWeight * burnTbsa);
              const first8hMl = Math.round(totalMl / 2);
              const first8hRate = Math.round(first8hMl / 8);
              const next16hRate = Math.round(first8hMl / 16);
              return (
                <div
                  className={`rounded-2xl border p-3.5 space-y-2.5 ${
                    isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0C1B24] border-white/10 shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs sm:text-sm font-extrabold">
                      3. Parkland Yanık Sıvı Formülü (4 mL × kg × %Yanık)
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400">Vücut Ağırlığı (kg)</span>
                      <input
                        type="number"
                        value={burnWeight}
                        onChange={(e) => setBurnWeight(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                    <label className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400">2°/3° Yanık Yüzdesi (%TBSA)</span>
                      <input
                        type="number"
                        value={burnTbsa}
                        onChange={(e) => setBurnTbsa(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                  </div>
                  <div
                    className={`rounded-xl border p-2.5 text-xs space-y-1 ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#071117] border-white/10'
                    }`}
                  >
                    <div className="font-extrabold text-emerald-500">
                      24 Saatlik Toplam Ringer Laktat: {totalMl.toLocaleString('tr-TR')} mL
                    </div>
                    <div className="text-[11px]">
                      • <strong>İlk 8 Saat (%50):</strong> {first8hMl.toLocaleString('tr-TR')} mL ({first8hRate} mL/saat — yanık anından itibaren hesaplanır)
                    </div>
                    <div className="text-[11px]">
                      • <strong>Sonraki 16 Saat (%50):</strong> {first8hMl.toLocaleString('tr-TR')} mL ({next16hRate} mL/saat)
                    </div>
                  </div>
                </div>
              );
            })()}

            {(() => {
              const adjCa = +(corrCa + 0.8 * (4 - corrAlb)).toFixed(2);
              const adjNa = +(corrNa + 1.6 * ((corrGlucose - 100) / 100)).toFixed(1);
              return (
                <div
                  className={`rounded-2xl border p-3.5 space-y-2.5 ${
                    isLight ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0C1B24] border-white/10 shadow-md'
                  }`}
                >
                  <h3 className="text-xs sm:text-sm font-extrabold">
                    4. Düzeltilmiş Kalsiyum & Hiperglisemide Düzeltilmiş Sodyum
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400">Ölçülen Ca (mg/dL)</span>
                      <input
                        type="number"
                        step={0.1}
                        value={corrCa}
                        onChange={(e) => setCorrCa(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                    <label className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400">Albümin (g/dL)</span>
                      <input
                        type="number"
                        step={0.1}
                        value={corrAlb}
                        onChange={(e) => setCorrAlb(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                    <label className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400">Ölçülen Na (mEq/L)</span>
                      <input
                        type="number"
                        value={corrNa}
                        onChange={(e) => setCorrNa(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                    <label className="space-y-1 text-[11px] font-bold">
                      <span className="text-slate-400">Glukoz (mg/dL)</span>
                      <input
                        type="number"
                        step={10}
                        value={corrGlucose}
                        onChange={(e) => setCorrGlucose(Number(e.target.value) || 0)}
                        className={`w-full rounded-xl px-2.5 py-1.5 text-xs font-extrabold border outline-none ${
                          isLight
                            ? 'bg-slate-50 border-slate-200 text-slate-900'
                            : 'bg-[#071117] border-white/10 text-white'
                        }`}
                      />
                    </label>
                  </div>
                  <div
                    className={`rounded-xl border p-2.5 text-xs space-y-1 ${
                      isLight ? 'bg-slate-50 border-slate-200' : 'bg-[#071117] border-white/10'
                    }`}
                  >
                    <div>
                      • <strong>Düzeltilmiş Kalsiyum:</strong>{' '}
                      <span className="font-extrabold text-emerald-500">{adjCa} mg/dL</span> (Her 1 g/dL albümin düşüşü için +0.8 mg/dL)
                    </div>
                    <div>
                      • <strong>Düzeltilmiş Sodyum:</strong>{' '}
                      <span className="font-extrabold text-cyan-500">{adjNa} mEq/L</span> (100 üzerindeki her 100 mg/dL glukoz artışı için +1.6 mEq/L)
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      )}

      {/* SUB-TAB C: KLİNİK REHBER */}
      {subTab === 'rehber' && (
        <div className="space-y-2.5">
          <div
            className={`rounded-2xl border p-2.5 space-y-2 ${
              isLight ? 'bg-white border-slate-200' : 'bg-[#0C1B24] border-white/10'
            }`}
          >
            <div className="relative">
              <Search className="w-4 h-4 text-cyan-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={guideSearch}
                onChange={(e) => setGuideSearch(e.target.value)}
                placeholder="İlk tercih, altın standart, antidot, enzim veya triyad ara (vurgulanır)..."
                className={`w-full pl-9 pr-20 py-1.5 rounded-xl border text-xs focus:outline-none focus:border-teal-500 ${
                  isLight
                    ? 'bg-slate-50 border-slate-200 text-slate-900'
                    : 'bg-[#071117] border-white/10 text-slate-100'
                }`}
              />
              {guideSearch && (
                <span
                  className={`absolute right-2.5 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded text-[10px] font-extrabold ${
                    isLight
                      ? 'bg-cyan-100 text-cyan-800'
                      : 'bg-cyan-500/20 text-cyan-300'
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
                  className={`shrink-0 px-2.5 py-1 rounded-lg text-[11px] font-bold border transition ${
                    guideCategory === cat
                      ? 'bg-teal-600 border-teal-500 text-white'
                      : isLight
                      ? 'bg-slate-100 border-slate-200 text-slate-600'
                      : 'bg-[#071117] border-white/8 text-slate-400'
                  }`}
                >
                  {cat === 'ALL' ? 'Tümü' : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
            {filteredGuideItems.map((entry) => {
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
                          ? 'bg-cyan-200/90 text-cyan-950 border-cyan-400'
                          : 'bg-cyan-400/30 text-cyan-100 border-cyan-400/60'
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
                      ? 'bg-white border-slate-200 shadow-sm'
                      : 'bg-[#0C1B24] border-white/10 shadow-md'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-600 text-[10px] font-extrabold">
                      {entry.category}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {entry.branchName}
                    </span>
                  </div>

                  <h4 className="text-xs sm:text-sm font-extrabold leading-snug">
                    {highlightGuide(entry.title)}
                  </h4>

                  <div
                    className={`rounded-xl border p-2.5 text-xs font-medium space-y-1 ${
                      isLight
                        ? 'bg-slate-50 border-slate-200 text-slate-700'
                        : 'bg-[#071117] border-white/6 text-slate-200'
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
        </div>
      )}

      {/* Guideline 1.4.1 Medical Reference Citations & Clinical Disclaimer */}
      <div
        className={`rounded-2xl border p-3.5 space-y-2 text-xs ${
          isLight
            ? 'bg-slate-50 border-slate-200 text-slate-700'
            : 'bg-[#08131A] border-white/10 text-slate-300'
        }`}
      >
        <div className="flex items-center gap-1.5 font-extrabold text-amber-500">
          <ShieldAlert className="w-4 h-4 shrink-0" />
          <span>Tıbbi Sorumluluk Reddi & Akademik Kaynakça (Medical References)</span>
        </div>
        <p className="text-[11px] leading-relaxed">
          Bu uygulamadaki tüm vaka soruları, klinik hesaplayıcılar ve spot bilgiler yalnızca{' '}
          <strong>Tıpta Uzmanlık Eğitimi Giriş Sınavı (TUS)</strong> hazırlığı ve akademik tıp eğitimi amaçlıdır; doğrudan hasta tanı veya tedavi kararı yerine geçmez. Klinik uygulamada her zaman resmi kılavuzlara ve uzman hekim görüşüne başvurulmalıdır.
        </p>
        <div className="text-[11px] space-y-1">
          <div className="font-bold">Temel Akademik Referans Kaynaklar:</div>
          <div>
            • İç Hastalıkları & Patoloji: <em>Harrison&apos;s Principles of Internal Medicine (21e)</em>,{' '}
            <em>Robbins &amp; Cotran Pathologic Basis of Disease (10e)</em>
          </div>
          <div>
            • Pediatri, Cerrahi & Kadın Doğum: <em>Nelson Textbook of Pediatrics (21e)</em>,{' '}
            <em>Sabiston Textbook of Surgery (21e)</em>, <em>Williams Obstetrics (26e)</em>
          </div>
          <div>
            • Temel Bilimler: <em>Harper&apos;s Illustrated Biochemistry</em>,{' '}
            <em>Katzung Basic &amp; Clinical Pharmacology</em>, <em>Guyton &amp; Hall Medical Physiology</em>,{' '}
            <em>Murray Medical Microbiology</em>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-1">
          <a
            href="https://www.ncbi.nlm.nih.gov/books/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[11px] font-bold hover:underline"
          >
            <span>NCBI Bookshelf / StatPearls</span>
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
            <span>WHO Clinical Guidelines</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.osym.gov.tr/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-500 text-[11px] font-bold hover:underline"
          >
            <span>ÖSYM TUS Duyuruları</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
};
