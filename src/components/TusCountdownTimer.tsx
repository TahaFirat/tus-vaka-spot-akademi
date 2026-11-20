import React, { useEffect, useState } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { triggerHaptic } from '../services/nativeBridge';
import {
  getTusCountdownParts,
  UPCOMING_TUS_EXAMS,
} from '../services/studyStorage';

function useVisibleClockTick(intervalMs: number): number {
  const [nowMs, setNowMs] = useState<number>(() => Date.now());

  useEffect(() => {
    let timerId: number | null = null;

    const start = () => {
      if (timerId !== null || document.hidden) return;
      setNowMs(Date.now());
      timerId = window.setInterval(() => {
        if (!document.hidden) {
          setNowMs(Date.now());
        }
      }, intervalMs);
    };

    const stop = () => {
      if (timerId !== null) {
        window.clearInterval(timerId);
        timerId = null;
      }
    };

    const onVisibility = () => {
      if (document.hidden) stop();
      else start();
    };

    start();
    document.addEventListener('visibilitychange', onVisibility);
    return () => {
      stop();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [intervalMs]);

  return nowMs;
}

export const TusHeaderCountdownPill: React.FC<{
  targetDate: string;
  isLight: boolean;
  onClick: () => void;
}> = React.memo(({ targetDate, isLight, onClick }) => {
  const nowMs = useVisibleClockTick(30000);
  const parts = getTusCountdownParts(targetDate, nowMs);

  return (
    <button
      type="button"
      onClick={onClick}
      title={`${parts.examLabel} • ${parts.days}g ${parts.hours}s kaldı`}
      className={`inline-flex items-center gap-1 px-2 py-1 rounded-lg border text-[11px] font-extrabold tabular-nums transition whitespace-nowrap ${
        isLight
          ? 'bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100'
          : 'bg-teal-500/10 border-teal-400/25 text-teal-300 hover:bg-teal-500/20'
      }`}
    >
      <Clock className="w-3 h-3 text-teal-500 shrink-0" />
      <span>{parts.days}g</span>
      <span className="hidden sm:inline opacity-80">{parts.hours}s</span>
    </button>
  );
});

const LiveCountdownNumbers: React.FC<{
  targetDate: string;
  variant: 'hero' | 'panel';
  isLight: boolean;
}> = React.memo(({ targetDate, variant, isLight }) => {
  const nowMs = useVisibleClockTick(1000);
  const parts = getTusCountdownParts(targetDate, nowMs);

  if (variant === 'hero') {
    return (
      <div className="shrink-0 rounded-2xl bg-black/25 border border-white/15 px-3 py-2 text-center min-w-[104px]">
        <div className="flex items-center justify-center gap-1 text-[10px] font-extrabold uppercase text-emerald-200">
          <Clock className="w-3 h-3 shrink-0" />
          <span>TUS'a Kalan</span>
        </div>
        <div className="text-lg font-extrabold tabular-nums leading-tight mt-0.5 text-white">
          {parts.days} <span className="text-xs font-bold">Gün</span>
        </div>
        <div className="text-[10.5px] font-bold text-emerald-100/90 tabular-nums">
          {String(parts.hours).padStart(2, '0')}s{' '}
          {String(parts.minutes).padStart(2, '0')}dk{' '}
          {String(parts.seconds).padStart(2, '0')}sn
        </div>
        <div className="text-[9.5px] text-emerald-200/80 mt-0.5 truncate max-w-[116px]">
          {parts.effectiveDate.split('-').reverse().join('.')} • 10:15
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-4 gap-1.5 shrink-0">
      {[
        { value: parts.days, unit: 'Gün' },
        { value: String(parts.hours).padStart(2, '0'), unit: 'Saat' },
        { value: String(parts.minutes).padStart(2, '0'), unit: 'Dk' },
        { value: String(parts.seconds).padStart(2, '0'), unit: 'Sn' },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`rounded-xl border px-2 py-1.5 text-center min-w-[50px] sm:min-w-[56px] ${
            isLight
              ? 'bg-white border-emerald-200/80 shadow-xs'
              : 'bg-[#071117]/90 border-emerald-500/25'
          }`}
        >
          <div className="text-sm sm:text-base font-extrabold tabular-nums text-emerald-500 leading-tight">
            {item.value}
          </div>
          <div className="text-[10px] font-bold text-slate-400 uppercase">
            {item.unit}
          </div>
        </div>
      ))}
    </div>
  );
});

interface TusDynamicCountdownCardProps {
  targetDate: string;
  isLight: boolean;
  variant?: 'hero' | 'panel';
  onChangeTargetDate?: (newDate: string) => void;
}

export const TusDynamicCountdownCard: React.FC<TusDynamicCountdownCardProps> =
  React.memo(({ targetDate, isLight, variant = 'panel', onChangeTargetDate }) => {
    const info = getTusCountdownParts(targetDate);

    if (variant === 'hero') {
      return (
        <LiveCountdownNumbers
          targetDate={targetDate}
          variant="hero"
          isLight={isLight}
        />
      );
    }

    return (
      <div
        className={`rounded-2xl border p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${
          isLight
            ? 'bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-emerald-200'
            : 'bg-gradient-to-r from-emerald-950/60 via-[#0C1B24] to-cyan-950/50 border-emerald-500/30'
        }`}
      >
        <div className="space-y-1.5 min-w-0">
          <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-500">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <span>ÖSYM TUS GERİ SAYIMI</span>
          </div>

          <div className="flex items-center gap-2 min-w-0">
            <Calendar className="w-4 h-4 text-teal-500 shrink-0" />
            {onChangeTargetDate ? (
              <select
                value={info.effectiveDate}
                onChange={(e) => {
                  triggerHaptic('light');
                  onChangeTargetDate(e.target.value);
                }}
                aria-label="Hedef TUS Dönemi"
                className={`min-w-0 flex-1 rounded-xl px-2.5 py-1 text-xs font-bold border outline-none max-w-full ${
                  isLight
                    ? 'bg-white border-emerald-200 text-slate-800'
                    : 'bg-[#071117] border-white/15 text-slate-100'
                }`}
              >
                {UPCOMING_TUS_EXAMS.map((exam) => (
                  <option key={exam.date} value={exam.date}>
                    {exam.label}
                  </option>
                ))}
              </select>
            ) : (
              <span className="text-xs font-bold truncate">{info.examLabel}</span>
            )}
          </div>

          <div className="text-[11px] font-semibold text-slate-400">
            Başvuru: {info.applyWindow} • Sonuç: {info.resultDate}
          </div>
        </div>

        <LiveCountdownNumbers
          targetDate={targetDate}
          variant="panel"
          isLight={isLight}
        />
      </div>
    );
  });
