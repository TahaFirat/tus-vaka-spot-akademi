import {
  Activity,
  Baby,
  Compass,
  FlaskConical,
  Heart,
  Layers,
  Microscope,
  Pill,
  Scissors,
  Sparkles,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';
import { TusBranchId } from './tusTypes';

export interface BranchVisualMeta {
  icon: LucideIcon;
  lightBg: string;
  lightText: string;
  darkBg: string;
  darkText: string;
  barColor: string;
}

export const BRANCH_VISUALS: Record<TusBranchId, BranchVisualMeta> = {
  dahiliye: {
    icon: Stethoscope,
    lightBg: 'bg-blue-50 border-blue-200/70',
    lightText: 'text-blue-600',
    darkBg: 'bg-blue-500/15 border-blue-400/25',
    darkText: 'text-blue-400',
    barColor: 'bg-blue-500',
  },
  pediatri: {
    icon: Baby,
    lightBg: 'bg-amber-50 border-amber-200/70',
    lightText: 'text-amber-600',
    darkBg: 'bg-amber-500/15 border-amber-400/25',
    darkText: 'text-amber-400',
    barColor: 'bg-amber-500',
  },
  cerrahi: {
    icon: Scissors,
    lightBg: 'bg-rose-50 border-rose-200/70',
    lightText: 'text-rose-600',
    darkBg: 'bg-rose-500/15 border-rose-400/25',
    darkText: 'text-rose-400',
    barColor: 'bg-rose-500',
  },
  kadindogum: {
    icon: Heart,
    lightBg: 'bg-fuchsia-50 border-fuchsia-200/70',
    lightText: 'text-fuchsia-600',
    darkBg: 'bg-fuchsia-500/15 border-fuchsia-400/25',
    darkText: 'text-fuchsia-400',
    barColor: 'bg-fuchsia-500',
  },
  biyokimya: {
    icon: FlaskConical,
    lightBg: 'bg-violet-50 border-violet-200/70',
    lightText: 'text-violet-600',
    darkBg: 'bg-violet-500/15 border-violet-400/25',
    darkText: 'text-violet-400',
    barColor: 'bg-violet-500',
  },
  mikrobiyoloji: {
    icon: Microscope,
    lightBg: 'bg-emerald-50 border-emerald-200/70',
    lightText: 'text-emerald-600',
    darkBg: 'bg-emerald-500/15 border-emerald-400/25',
    darkText: 'text-emerald-400',
    barColor: 'bg-emerald-500',
  },
  patoloji: {
    icon: Layers,
    lightBg: 'bg-red-50 border-red-200/70',
    lightText: 'text-red-600',
    darkBg: 'bg-red-500/15 border-red-400/25',
    darkText: 'text-red-400',
    barColor: 'bg-red-500',
  },
  farmakoloji: {
    icon: Pill,
    lightBg: 'bg-sky-50 border-sky-200/70',
    lightText: 'text-sky-600',
    darkBg: 'bg-sky-500/15 border-sky-400/25',
    darkText: 'text-sky-400',
    barColor: 'bg-sky-500',
  },
  anatomi: {
    icon: Compass,
    lightBg: 'bg-orange-50 border-orange-200/70',
    lightText: 'text-orange-600',
    darkBg: 'bg-orange-500/15 border-orange-400/25',
    darkText: 'text-orange-400',
    barColor: 'bg-orange-500',
  },
  fizyoloji: {
    icon: Activity,
    lightBg: 'bg-cyan-50 border-cyan-200/70',
    lightText: 'text-cyan-600',
    darkBg: 'bg-cyan-500/15 border-cyan-400/25',
    darkText: 'text-cyan-400',
    barColor: 'bg-cyan-500',
  },
  histoloji: {
    icon: Sparkles,
    lightBg: 'bg-pink-50 border-pink-200/70',
    lightText: 'text-pink-600',
    darkBg: 'bg-pink-500/15 border-pink-400/25',
    darkText: 'text-pink-400',
    barColor: 'bg-pink-500',
  },
};
