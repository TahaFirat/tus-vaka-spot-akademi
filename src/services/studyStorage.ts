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
  estimatedTusScore: number; // 45 - 85 scale
  durationSeconds: number;
  branchBreakdown: Record<
    string,
    { total: number; correct: number; wrong: number; blank: number; net: number }
  >;
}

export interface TusExamSessionOption {
  date: string;
  label: string;
}

export const UPCOMING_TUS_EXAMS: TusExamSessionOption[] = [
  { date: '2026-03-22', label: '2026 İlkbahar TUS (1. Dönem)' },
  { date: '2026-09-20', label: '2026 Sonbahar TUS (2. Dönem)' },
  { date: '2027-03-21', label: '2027 İlkbahar TUS (1. Dönem)' },
  { date: '2027-09-19', label: '2027 Sonbahar TUS (2. Dönem)' },
  { date: '2028-03-19', label: '2028 İlkbahar TUS (1. Dönem)' },
  { date: '2028-09-17', label: '2028 Sonbahar TUS (2. Dönem)' },
];

export function getNextActiveTusDate(referenceDate = new Date()): string {
  const nowMs = referenceDate.getTime();
  for (const exam of UPCOMING_TUS_EXAMS) {
    const examMs = new Date(`${exam.date}T10:15:00`).getTime();
    if (examMs > nowMs + 24 * 60 * 60 * 1000) {
      return exam.date;
    }
  }
  const nextYear = referenceDate.getFullYear() + 1;
  return `${nextYear}-03-21`;
}

export function getTusCountdownParts(
  targetDateStr: string,
  nowMs = Date.now()
): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  examLabel: string;
} {
  let effectiveDateStr = targetDateStr;
  let targetMs = new Date(`${effectiveDateStr}T10:15:00`).getTime();

  if (Number.isNaN(targetMs) || targetMs <= nowMs) {
    effectiveDateStr = getNextActiveTusDate(new Date(nowMs));
    targetMs = new Date(`${effectiveDateStr}T10:15:00`).getTime();
  }

  const diffSeconds = Math.max(0, Math.floor((targetMs - nowMs) / 1000));
  const days = Math.floor(diffSeconds / 86400);
  const hours = Math.floor((diffSeconds % 86400) / 3600);
  const minutes = Math.floor((diffSeconds % 3600) / 60);
  const seconds = diffSeconds % 60;

  const matched = UPCOMING_TUS_EXAMS.find((e) => e.date === effectiveDateStr);
  const examLabel = matched ? matched.label : `${effectiveDateStr} TUS`;

  return { days, hours, minutes, seconds, examLabel };
}

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
}

const STORAGE_KEY = 'tus_vaka_spot_akademi_state_v1';

function getTodayDateString(): string {
  return new Date().toISOString().slice(0, 10);
}

export const DEFAULT_STUDY_STATE: TusStudyState = {
  vakaAnswers: {},
  spotAnswers: {},
  bookmarkedVakaIds: [],
  bookmarkedSpotIds: [],
  examHistory: [],
  dailyTarget: 40,
  todaySolvedCount: 0,
  lastStudyDate: getTodayDateString(),
  streakDays: 1,
  targetTusDate: getNextActiveTusDate(),
  theme: 'dark',
};

export function loadStudyState(): TusStudyState {
  if (typeof window === 'undefined') return DEFAULT_STUDY_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STUDY_STATE;
    const parsed = JSON.parse(raw) as Partial<TusStudyState>;
    const today = getTodayDateString();
    let streakDays = parsed.streakDays ?? 1;
    let todaySolvedCount = parsed.todaySolvedCount ?? 0;

    if (parsed.lastStudyDate && parsed.lastStudyDate !== today) {
      const prevDate = new Date(parsed.lastStudyDate);
      const currDate = new Date(today);
      const diffDays = Math.round(
        (currDate.getTime() - prevDate.getTime()) / (1000 * 60 * 60 * 24)
      );
      if (diffDays === 1) {
        streakDays = Math.max(1, streakDays + 1);
      } else if (diffDays > 1) {
        streakDays = 1;
      }
      todaySolvedCount = 0;
    }

    // Ensure targetTusDate is always active and in the future
    let activeTargetDate = parsed.targetTusDate || getNextActiveTusDate();
    const targetMs = new Date(`${activeTargetDate}T10:15:00`).getTime();
    if (Number.isNaN(targetMs) || targetMs <= Date.now()) {
      activeTargetDate = getNextActiveTusDate();
    }

    return {
      ...DEFAULT_STUDY_STATE,
      ...parsed,
      targetTusDate: activeTargetDate,
      streakDays,
      todaySolvedCount,
      lastStudyDate: today,
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
    // Ignore quota errors
  }
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
