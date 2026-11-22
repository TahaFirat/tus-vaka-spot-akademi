import React, { useState } from 'react';
import { BookOpen, Calculator, Layers, X } from 'lucide-react';
import { TUS_BRANCHES } from '../data/tusMedicalRepository';
import {
  DAILY_FREE_EXAM_LIMIT,
  DAILY_FREE_PEARL_LIMIT,
  DAILY_FREE_SPOT_LIMIT,
  DAILY_FREE_VAKA_LIMIT,
  triggerHaptic,
} from '../services/nativeBridge';
import { TUS_SCORE_MODEL_META } from '../services/studyStorage';

interface TusGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLight: boolean;
  initialTab?: 'puan' | 'dagilim' | 'sistem';
}

export const TusGuideModal: React.FC<TusGuideModalProps> = ({
  isOpen,
  onClose,
  isLight,
  initialTab = 'puan',
}) => {
  const [tab, setTab] = useState<'puan' | 'dagilim' | 'sistem'>(initialTab);

  if (!isOpen) return null;

  const temelBranches = TUS_BRANCHES.filter((b) => b.session === 'TTBT');
  const klinikBranches = TUS_BRANCHES.filter((b) => b.session === 'KTBT');

  const cardBg = isLight
    ? 'bg-slate-50 border-slate-200/80 text-slate-800'
    : 'bg-[#0A0E17] border-white/8 text-slate-200';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tus-guide-title"
    >
      <div
        className={`w-full max-w-md max-h-[88vh] overflow-y-auto rounded-3xl border shadow-2xl p-4 sm:p-5 space-y-3.5 ${
          isLight
            ? 'bg-white border-slate-200 text-slate-900'
            : 'bg-[#121826] border-white/10 text-slate-100'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            <h2 id="tus-guide-title" className="text-base font-extrabold tracking-tight">
              TUS Puan & Sistem Rehberi
            </h2>
            <p className={`text-[11px] font-medium ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Güncel ÖSYM 100 + 100 Sınav Kuralları
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            aria-label="Kapat"
            className={`w-9 h-9 rounded-full border flex items-center justify-center shrink-0 ${
              isLight
                ? 'bg-slate-100 border-slate-200 text-slate-600'
                : 'bg-white/6 border-white/10 text-slate-300'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* 3 Compact Category Tabs */}
        <div
          className={`grid grid-cols-3 gap-1 p-1 rounded-2xl border ${
            isLight ? 'bg-slate-100 border-slate-200/80' : 'bg-[#0A0E17] border-white/8'
          }`}
        >
          {[
            { id: 'puan' as const, label: 'Puan & Net', icon: Calculator },
            { id: 'dagilim' as const, label: 'Soru Dağılımı', icon: BookOpen },
            { id: 'sistem' as const, label: 'Zorluk & Hak', icon: Layers },
          ].map((item) => {
            const Icon = item.icon;
            const active = tab === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setTab(item.id);
                }}
                className={`h-9 rounded-xl text-[11.5px] font-extrabold flex items-center justify-center gap-1 transition ${
                  active
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : isLight
                    ? 'text-slate-600'
                    : 'text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB 1: PUAN & NET */}
        {tab === 'puan' && (
          <div className="space-y-2.5 text-xs">
            <div className={`rounded-2xl border p-3 space-y-1.5 ${cardBg}`}>
              <div className="font-extrabold text-[#2563EB]">Net & Standart Puan</div>
              <div className="font-mono text-[11.5px] font-bold">
                Net = Doğru − (Yanlış ÷ 4)
              </div>
              <div className="font-mono text-[11.5px] font-bold">
                SP = 50 + 10 × (Net − Ort) ÷ SS
              </div>
              <p className={`text-[11px] leading-snug ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                4 yanlış 1 doğruyu götürür; boş sorular neti etkilemez.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className={`rounded-2xl border p-3 space-y-1 ${cardBg}`}>
                <div className="text-[10.5px] font-extrabold text-emerald-500 uppercase">
                  K Puanı (Klinik)
                </div>
                <div className="text-sm font-extrabold">%60 Klinik + %40 Temel</div>
                <div className={`text-[10.5px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Tüm klinik uzmanlıklar
                </div>
              </div>
              <div className={`rounded-2xl border p-3 space-y-1 ${cardBg}`}>
                <div className="text-[10.5px] font-extrabold text-[#2563EB] uppercase">
                  T Puanı (Temel)
                </div>
                <div className="text-sm font-extrabold">%60 Temel + %40 Klinik</div>
                <div className={`text-[10.5px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Temel tıp uzmanlıkları
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border p-3 flex items-center justify-between gap-2 ${cardBg}`}>
              <div>
                <div className="font-extrabold">Baraj: {TUS_SCORE_MODEL_META.barajScore} Puan</div>
                <div className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                  Yerleşip başlamama / istifada %5 puan kesintisi uygulanır.
                </div>
              </div>
            </div>

            <p className={`text-[11px] leading-relaxed px-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              <strong>Tahmini Puan Neye Göre Hesaplanır?</strong> Gerçek TUS puanı her dönemin aday ortalaması ve standart sapmasına göre ÖSYM tarafından belirlenir. Uygulamadaki tahmini puan, güncel 100+100 dönemlerinin referans eğrisi (Temel Ort ≈ {TUS_SCORE_MODEL_META.temelRefMean}, Klinik Ort ≈ {TUS_SCORE_MODEL_META.klinikRefMean}, SS ≈ {TUS_SCORE_MODEL_META.refStdDev}) üzerinden hesaplanan bir simülasyondur.
            </p>
          </div>
        )}

        {/* TAB 2: SORU DAĞILIMI */}
        {tab === 'dagilim' && (
          <div className="space-y-2.5 text-xs">
            <div className={`rounded-2xl border p-3 flex items-center justify-between ${cardBg}`}>
              <span className="font-extrabold">Temel Bilimler (100 Soru)</span>
              <span className="text-[11px] font-bold text-[#2563EB]">135 dk</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {temelBranches.map((b) => (
                <div
                  key={b.id}
                  className={`rounded-xl border px-3 py-2 flex items-center justify-between ${cardBg}`}
                >
                  <span className="font-bold truncate">{b.shortName}</span>
                  <span className="font-extrabold text-[#2563EB] tabular-nums">{b.osymWeight}</span>
                </div>
              ))}
            </div>

            <div className={`rounded-2xl border p-3 flex items-center justify-between ${cardBg}`}>
              <span className="font-extrabold">Klinik Bilimler (100 Soru)</span>
              <span className="text-[11px] font-bold text-emerald-500">135 dk</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {klinikBranches.map((b) => (
                <div
                  key={b.id}
                  className={`rounded-xl border px-3 py-2 flex items-center justify-between ${cardBg}`}
                >
                  <span className="font-bold truncate">{b.shortName}</span>
                  <span className="font-extrabold text-emerald-500 tabular-nums">{b.osymWeight}</span>
                </div>
              ))}
            </div>
            <p className={`text-[11px] leading-snug px-1 ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
              Küçük Stajlar (~22 soru) ÖSYM sınav yapısında Dahiliye ve Cerrahi gruplarının içinde yer alır.
            </p>
          </div>
        )}

        {/* TAB 3: ZORLUK & ÜCRETSİZ HAKLAR */}
        {tab === 'sistem' && (
          <div className="space-y-2.5 text-xs">
            <div className={`rounded-2xl border p-3 space-y-2 ${cardBg}`}>
              <div className="font-extrabold">Soru Zorluk Seviyeleri</div>
              <div className="space-y-1.5 text-[11.5px]">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-600 font-extrabold">Kolay</span>
                  <span>Temel spot, patognomonik bulgu & ilk tercih</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-blue-500/15 text-[#2563EB] font-extrabold">Orta</span>
                  <span>Klinik vaka sentezi & tanı-tedavi yaklaşımı</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/15 text-rose-500 font-extrabold">Zor</span>
                  <span>İleri ayırıcı tanı, yanlış bulma & mekanizma</span>
                </div>
              </div>
            </div>

            <div className={`rounded-2xl border p-3 space-y-2 ${cardBg}`}>
              <div className="flex items-center justify-between">
                <span className="font-extrabold">Günlük Ücretsiz Haklar</span>
                <span className="text-[10.5px] font-bold text-emerald-500">Her gün yenilenir</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[11.5px] font-semibold">
                <div>• {DAILY_FREE_VAKA_LIMIT} Vaka / İkiz Sorusu</div>
                <div>• {DAILY_FREE_SPOT_LIMIT} D/Y Spot Kartı</div>
                <div>• {DAILY_FREE_PEARL_LIMIT} Altın Spot</div>
                <div>• {DAILY_FREE_EXAM_LIMIT} Mini Deneme (15 Soru)</div>
              </div>
              <p className={`text-[11px] ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>
                Klinik hesaplayıcılar, rehber ve odak sayacı sınırsızdır. Günlük haklarınız bittiğinde PRO ile kesintisiz devam edebilirsiniz.
              </p>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            triggerHaptic('light');
            onClose();
          }}
          className="w-full h-11 rounded-2xl bg-[#2563EB] hover:bg-blue-700 text-white text-xs font-extrabold transition"
        >
          Anladım
        </button>
      </div>
    </div>
  );
};
