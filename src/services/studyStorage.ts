import { OptionLetter, TusBranchId } from '../data/tusTypes';

export interface VakaAnswerRecord {
  selected: OptionLetter;
  isCorrect: boolean;
  timestamp: number;
  branchId: TusBranchId;
}

export interface SpotAnswerRecord {
  selected: boolean;
  isCorrect: boolean;
  timestamp: number;
  branchId: TusBranchId;
}

export interface TusExamAttempt {
  id: string;
  title: string;
  modeId: string;
  dateIso: string;
  totalQuestions: number;
  correctCount: number;
  wrongCount: number;
  blankCount: number;
  netScore: number; // Doğru - (Yanlış / 4)
  estimatedTusScore: number; // 45 - 85 bandı
  durationSeconds: number;
  branchBreakdown: Record<
    string,
    { total: number; correct: number; wrong: number; blank: number; net: number }
  >;
}

export interface TusSrsEntry {
  box: 1 | 2 | 3 | 4;
  dueDateMs: number;
  kind: 'vaka' | 'spot';
}

export interface ActiveStudyTimerState {
  running: boolean;
  mode: 'stopwatch' | 'pomodoro25' | 'pomodoro50';
  branchId: TusBranchId | 'GENEL';
  startedAtMs: number | null;
  accumulatedSec: number;
  targetSec: number;
}

export interface TusExamSessionOption {
  date: string;
  label: string;
  applyWindow: string;
  resultDate: string;
}

// Resmi ÖSYM 2027–2028 TUS Sınav Takvimi (Saat 10:15 TRT)
export const UPCOMING_TUS_EXAMS: TusExamSessionOption[] = [
  {
    date: '2027-03-27',
    label: '2027-TUS 1. Dönem (27 Mart)',
    applyWindow: '2–10 Şub 2027',
    resultDate: '22 Nis 2027',
  },
  {
    date: '2027-08-22',
    label: '2027-TUS 2. Dönem (22 Ağustos)',
    applyWindow: '5–13 Tem 2027',
    resultDate: '16 Eyl 2027',
  },
  {
    date: '2028-03-26',
    label: '2028-TUS 1. Dönem (Mart)',
    applyWindow: 'Şubat 2028',
    resultDate: 'Nisan 2028',
  },
  {
    date: '2028-08-20',
    label: '2028-TUS 2. Dönem (Ağustos)',
    applyWindow: 'Temmuz 2028',
    resultDate: 'Eylül 2028',
  },
];

const LEGACY_DATE_MIGRATION: Record<string, string> = {
  '2026-03-22': '2027-03-27',
  '2026-09-20': '2027-03-27',
  '2027-03-21': '2027-03-27',
  '2027-09-19': '2027-08-22',
};

function parseTusStartMs(dateStr: string): number {
  return new Date(`${dateStr}T10:15:00+03:00`).getTime();
}

export function getNextActiveTusDate(referenceDate = new Date()): string {
  const nowMs = referenceDate.getTime();
  for (const exam of UPCOMING_TUS_EXAMS) {
    const examMs = parseTusStartMs(exam.date);
    if (examMs > nowMs + 60 * 60 * 1000) {
      return exam.date;
    }
  }
  const nextYear = referenceDate.getFullYear() + 1;
  return `${nextYear}-03-26`;
}

export function getTusCountdownParts(
  targetDateStr: string,
  nowMs = Date.now()
): {
  effectiveDate: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalHours: number;
  progressPct: number;
  examLabel: string;
  applyWindow: string;
  resultDate: string;
} {
  let effectiveDate = LEGACY_DATE_MIGRATION[targetDateStr] || targetDateStr;
  let targetMs = parseTusStartMs(effectiveDate);

  if (Number.isNaN(targetMs) || targetMs <= nowMs) {
    effectiveDate = getNextActiveTusDate(new Date(nowMs));
    targetMs = parseTusStartMs(effectiveDate);
  }

  const diffSeconds = Math.max(0, Math.floor((targetMs - nowMs) / 1000));
  const days = Math.floor(diffSeconds / 86400);
  const hours = Math.floor((diffSeconds % 86400) / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  const seconds = diffSeconds % 60;
  const totalHours = Math.floor(diffSeconds / 3600);

  // 270-gün (9 ay) hazırlık döngüsü ilerleme yüzdesi
  const cycleSeconds = 270 * 86400;
  const elapsedInCycle = Math.max(0, cycleSeconds - Math.min(cycleSeconds, diffSeconds));
  const progressPct = Math.min(100, Math.max(2, Math.round((elapsedInCycle / cycleSeconds) * 100)));

  const matched = UPCOMING_TUS_EXAMS.find((e) => e.date === effectiveDate);
  const examLabel = matched ? matched.label : `${effectiveDate} TUS`;

  return {
    effectiveDate,
    days,
    hours,
    minutes,
    seconds,
    totalHours,
    progressPct,
    examLabel,
    applyWindow: matched?.applyWindow || 'ÖSYM Takvimi',
    resultDate: matched?.resultDate || '-',
  };
}

export type TwinYearFilter =
  | 'ALL'
  | '2025'
  | '2024'
  | '2023'
  | '2022'
  | '2021'
  | '2020'
  | '2019';

export interface TusStudyState {
  vakaAnswers: Record<string, VakaAnswerRecord>;
  spotAnswers: Record<string, SpotAnswerRecord>;
  bookmarkedVakaIds: string[];
  bookmarkedSpotIds: string[];
  examHistory: TusExamAttempt[];
  dailyTarget: number;
  todaySolvedCount: number;
  lastStudyDate: string;
  streakDays: number;
  targetTusDate: string;
  theme: 'dark' | 'light';
  // v1.4 Dual Mode, Unseen Preferences, Konu/Tur, Leitner SRS & Kronometre
  uiMode: 'akademi' | 'odak';
  vakaBranchPref: 'ALL' | TusBranchId;
  twinBranchPref: 'ALL' | TusBranchId;
  twinYearPref: TwinYearFilter;
  spotBranchPref: 'ALL' | TusBranchId;
  topicTours: Record<string, number>;
  srsMap: Record<string, TusSrsEntry>;
  studySecondsByDate: Record<string, number>;
  branchStudySeconds: Record<string, number>;
  dailyGoalMinutes: number;
  targetSpecialtyId: string;
  activeTimer: ActiveStudyTimerState;
}

const STORAGE_KEY = 'tus_vaka_spot_akademi_state_v1';

export function getLocalDateString(date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export const DEFAULT_ACTIVE_TIMER: ActiveStudyTimerState = {
  running: false,
  mode: 'pomodoro25',
  branchId: 'GENEL',
  startedAtMs: null,
  accumulatedSec: 0,
  targetSec: 25 * 60,
};

export const DEFAULT_STUDY_STATE: TusStudyState = {
  vakaAnswers: {},
  spotAnswers: {},
  bookmarkedVakaIds: [],
  bookmarkedSpotIds: [],
  examHistory: [],
  dailyTarget: 40,
  todaySolvedCount: 0,
  lastStudyDate: getLocalDateString(),
  streakDays: 1,
  targetTusDate: getNextActiveTusDate(),
  theme: 'dark',
  uiMode: 'akademi',
  vakaBranchPref: 'ALL',
  twinBranchPref: 'ALL',
  twinYearPref: 'ALL',
  spotBranchPref: 'ALL',
  topicTours: {},
  srsMap: {},
  studySecondsByDate: {},
  branchStudySeconds: {},
  dailyGoalMinutes: 120,
  targetSpecialtyId: 'kardiyoloji',
  activeTimer: DEFAULT_ACTIVE_TIMER,
};

export function loadStudyState(): TusStudyState {
  if (typeof window === 'undefined') return DEFAULT_STUDY_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STUDY_STATE;
    const parsed = JSON.parse(raw) as Partial<TusStudyState>;
    const today = getLocalDateString();
    let streakDays = parsed.streakDays ?? 1;
    let todaySolvedCount = parsed.todaySolvedCount ?? 0;

    if (parsed.lastStudyDate && parsed.lastStudyDate !== today) {
      const prevDate = new Date(`${parsed.lastStudyDate}T12:00:00`);
      const currDate = new Date(`${today}T12:00:00`);
      const diffDays = Math.round(
        (currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      const studiedOnPrevDay =
        (parsed.todaySolvedCount ?? 0) > 0 ||
        ((parsed.studySecondsByDate?.[parsed.lastStudyDate] ?? 0) >= 60);
      if (diffDays === 1 && studiedOnPrevDay) {
        streakDays = Math.max(1, streakDays + 1);
      } else if (diffDays > 1 || !studiedOnPrevDay) {
        streakDays = 1;
      }
      todaySolvedCount = 0;
    }

    const migratedDate = parsed.targetTusDate
      ? LEGACY_DATE_MIGRATION[parsed.targetTusDate] || parsed.targetTusDate
      : getNextActiveTusDate();
    const targetMs = parseTusStartMs(migratedDate);
    const activeTargetDate =
      Number.isNaN(targetMs) || targetMs <= Date.now()
        ? getNextActiveTusDate()
        : migratedDate;

    return {
      ...DEFAULT_STUDY_STATE,
      ...parsed,
      targetTusDate: activeTargetDate,
      streakDays,
      todaySolvedCount,
      lastStudyDate: today,
      uiMode: parsed.uiMode === 'odak' ? 'odak' : 'akademi',
      topicTours:
        parsed.topicTours && typeof parsed.topicTours === 'object'
          ? parsed.topicTours
          : {},
      srsMap:
        parsed.srsMap && typeof parsed.srsMap === 'object' ? parsed.srsMap : {},
      studySecondsByDate:
        parsed.studySecondsByDate && typeof parsed.studySecondsByDate === 'object'
          ? parsed.studySecondsByDate
          : {},
      branchStudySeconds:
        parsed.branchStudySeconds && typeof parsed.branchStudySeconds === 'object'
          ? parsed.branchStudySeconds
          : {},
      activeTimer:
        parsed.activeTimer && typeof parsed.activeTimer === 'object'
          ? { ...DEFAULT_ACTIVE_TIMER, ...parsed.activeTimer }
          : DEFAULT_ACTIVE_TIMER,
    };
  } catch {
    return DEFAULT_STUDY_STATE;
  }
}

export function saveStudyState(state: TusStudyState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Depolama kotası aşımını yoksay
  }
}

const DAY_MS = 24 * 60 * 60 * 1000;

export function computeNextSrsEntry(
  existing: TusSrsEntry | undefined,
  isCorrect: boolean,
  kind: 'vaka' | 'spot',
  nowMs = Date.now()
): TusSrsEntry {
  if (!isCorrect) {
    return { box: 1, dueDateMs: nowMs, kind };
  }
  const currentBox = existing?.box ?? 1;
  const nextBox = Math.min(4, currentBox + 1) as 1 | 2 | 3 | 4;
  const daysInterval = nextBox === 2 ? 2 : nextBox === 3 ? 6 : 18;
  return {
    box: nextBox,
    dueDateMs: nowMs + daysInterval * DAY_MS,
    kind,
  };
}

export function calculateOsymNet(correct: number, wrong: number): number {
  const rawNet = correct - wrong / 4;
  return Number(rawNet.toFixed(2));
}

export function calculateEstimatedTusScore(net: number, totalQuestions: number): number {
  if (totalQuestions <= 0) return 45;
  const ratio = Math.max(0, net) / totalQuestions;
  const score = 40 + ratio * 44;
  return Number(Math.min(85, Math.max(35, score)).toFixed(1));
}

// 100 soruluk TTBT & 100 soruluk KTBT resmi TUS ağırlıklı simülasyon hesaplayıcısı
export function calculateOfficialStyleTusScores(
  ttbtCorrect: number,
  ttbtWrong: number,
  ktbtCorrect: number,
  ktbtWrong: number
): {
  ttbtNet: number;
  ktbtNet: number;
  tTusScore: number;
  kTusScore: number;
} {
  const safeTc = Math.max(0, Math.min(100, ttbtCorrect));
  const safeTw = Math.max(0, Math.min(100 - safeTc, ttbtWrong));
  const safeKc = Math.max(0, Math.min(100, ktbtCorrect));
  const safeKw = Math.max(0, Math.min(100 - safeKc, ktbtWrong));

  const ttbtNet = calculateOsymNet(safeTc, safeTw);
  const ktbtNet = calculateOsymNet(safeKc, safeKw);

  // Yaklaşık T-TUS (%70 TTBT + %30 KTBT) & K-TUS (%30 TTBT + %70 KTBT) bandı
  const weightedT = ttbtNet * 0.7 + ktbtNet * 0.3;
  const weightedK = ktbtNet * 0.7 + ttbtNet * 0.3;
  const toScore = (weightedNet: number) =>
    Number(Math.min(84, Math.max(35, 36 + (weightedNet / 100) * 48)).toFixed(1));

  return {
    ttbtNet,
    ktbtNet,
    tTusScore: toScore(weightedT),
    kTusScore: toScore(weightedK),
  };
}
