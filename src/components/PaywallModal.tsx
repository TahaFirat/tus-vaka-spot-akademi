import React, { useState } from 'react';
import {
  CheckCircle2,
  Crown,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from 'lucide-react';
import {
  TOTAL_INTERACTIVE_TUS_ITEMS,
  TUS_SPOT_CARDS,
  TUS_VAKA_QUESTIONS,
} from '../data/tusMedicalRepository';
import {
  FREE_QUESTION_LIMIT,
  PRO_PRICE_LABEL,
  PRO_PRODUCT_ID,
  purchaseLifetimePro,
  restoreLifetimePro,
  triggerHaptic,
} from '../services/nativeBridge';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlocked: () => void;
  totalSolvedCount: number;
  reasonMessage?: string;
  isLight?: boolean;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  onUnlocked,
  totalSolvedCount,
  reasonMessage,
  isLight = false,
}) => {
  const [loading, setLoading] = useState<'purchase' | 'restore' | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handlePurchase = async () => {
    if (loading) return;
    await triggerHaptic('medium');
    setLoading('purchase');
    setStatusMessage(null);
    const res = await purchaseLifetimePro();
    setLoading(null);
    if (res.success) {
      setStatusMessage(res.message);
      onUnlocked();
      setTimeout(() => {
        onClose();
      }, 450);
    } else if (!res.cancelled) {
      setStatusMessage(res.message);
    }
  };

  const handleRestore = async () => {
    if (loading) return;
    await triggerHaptic('light');
    setLoading('restore');
    setStatusMessage(null);
    const res = await restoreLifetimePro();
    setLoading(null);
    setStatusMessage(res.message);
    if (res.success) {
      onUnlocked();
      setTimeout(() => {
        onClose();
      }, 600);
    }
  };

  const features = [
    `${TOTAL_INTERACTIVE_TUS_ITEMS}+ Etkileşimli İçerik (${TUS_VAKA_QUESTIONS.length} Vaka Sorusu & ${TUS_SPOT_CARDS.length} D/Y Spot)`,
    '11 TUS Branşında (TTBT & KTBT) Sınırsız Soru ve Hata Defteri',
    'ÖSYM Net Hesaplamalı TTBT, KTBT ve 40 Soruluk Maraton Denemeleri',
    'İlk Tercih vs. Altın Standart, Antidot ve Enzim Klinik Rehberi',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-md p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
    >
      <div
        className={`w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden flex flex-col justify-between p-4 sm:p-5 ${
          isLight
            ? 'bg-white border-emerald-200 text-slate-900'
            : 'bg-[#0B1820] border-emerald-500/35 text-slate-100'
        }`}
      >
        {/* Top Row: Flex between Badge and Close Button (Zero Overlap!) */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div
            className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
              isLight
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300'
            }`}
          >
            <Crown className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Tek Seferlik • Ömür Boyu Erişim</span>
          </div>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              onClose();
            }}
            aria-label="Kapat"
            className={`shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition ${
              isLight
                ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-600'
                : 'bg-slate-800/90 hover:bg-slate-700 border-slate-600/50 text-slate-300 hover:text-white'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Hero Header */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-md shrink-0">
            <Stethoscope className="w-6 h-6 text-white" />
          </div>
          <div className="min-w-0">
            <h2
              id="paywall-title"
              className={`text-base sm:text-lg font-extrabold tracking-tight leading-snug ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              TUS Akademi PRO
            </h2>
            <p
              className={`text-xs leading-tight ${
                isLight ? 'text-emerald-700' : 'text-emerald-300/90'
              }`}
            >
              {reasonMessage ||
                (totalSolvedCount >= FREE_QUESTION_LIMIT
                  ? `Ücretsiz ${FREE_QUESTION_LIMIT} soru kotanızı tamamladınız (${totalSolvedCount}/${FREE_QUESTION_LIMIT}).`
                  : `30 soruluk demo sınırını kaldırın, ${TOTAL_INTERACTIVE_TUS_ITEMS}+ soru ve denemeyi sınırsız açın.`)}
            </p>
          </div>
        </div>

        {/* Feature Checklist */}
        <div
          className={`space-y-1.5 rounded-2xl border p-3 mb-3 ${
            isLight
              ? 'bg-slate-50 border-slate-200/80'
              : 'bg-[#071117] border-emerald-500/20'
          }`}
        >
          {features.map((feat, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-2 text-xs leading-snug ${
                isLight ? 'text-slate-700' : 'text-slate-200'
              }`}
            >
              <CheckCircle2
                className={`w-4 h-4 shrink-0 mt-0.5 ${
                  isLight ? 'text-emerald-600' : 'text-emerald-400'
                }`}
              />
              <span>{feat}</span>
            </div>
          ))}
        </div>

        {/* Price Summary Box */}
        <div
          className={`flex items-center justify-between rounded-2xl border px-3.5 py-2.5 mb-3 ${
            isLight
              ? 'bg-emerald-50/80 border-emerald-200'
              : 'bg-gradient-to-r from-emerald-950/80 via-teal-950/70 to-cyan-950/70 border-emerald-400/35'
          }`}
        >
          <div>
            <div
              className={`text-[11px] uppercase tracking-wider font-extrabold ${
                isLight ? 'text-emerald-800' : 'text-emerald-300'
              }`}
            >
              Ömür Boyu Tam Paket
            </div>
            <div
              className={`text-[11px] ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Abonelik yok • Tek ödeme
            </div>
          </div>
          <div className="text-right shrink-0 pl-2">
            <div
              className={`text-lg font-extrabold whitespace-nowrap ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              {PRO_PRICE_LABEL}
            </div>
            <div
              className={`text-[10px] font-semibold whitespace-nowrap ${
                isLight ? 'text-emerald-700' : 'text-emerald-300'
              }`}
            >
              Tek Seferlik
            </div>
          </div>
        </div>

        {statusMessage && (
          <div
            className={`mb-2.5 rounded-xl border px-3 py-1.5 text-xs text-center font-medium ${
              isLight
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-emerald-500/15 border-emerald-400/30 text-emerald-200'
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* Primary Purchase CTA Button */}
        <button
          type="button"
          disabled={loading !== null}
          onClick={handlePurchase}
          data-product-id={PRO_PRODUCT_ID}
          className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.99] text-white font-extrabold text-sm py-3 px-4 shadow-lg shadow-emerald-900/25 flex items-center justify-center gap-2 transition disabled:opacity-60"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="whitespace-nowrap">
            {loading === 'purchase'
              ? 'Apple StoreKit Onaylanıyor...'
              : `Ömür Boyu Tam Erişimi Aç • ${PRO_PRICE_LABEL}`}
          </span>
        </button>

        {/* Restore + Legal Links Footer */}
        <div
          className={`mt-2.5 pt-2 border-t flex flex-col items-center gap-1.5 ${
            isLight ? 'border-slate-200' : 'border-slate-800'
          }`}
        >
          <button
            type="button"
            disabled={loading !== null}
            onClick={handleRestore}
            className={`inline-flex items-center gap-1.5 text-xs font-semibold transition py-0.5 ${
              isLight
                ? 'text-emerald-700 hover:text-emerald-800'
                : 'text-emerald-300 hover:text-emerald-200'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>
              {loading === 'restore'
                ? 'Satın Alımlar Kontrol Ediliyor...'
                : 'Satın Alımları Geri Yükle (Restore Purchases)'}
            </span>
          </button>

          <div
            className={`flex items-center justify-center gap-2.5 text-[11px] ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              StoreKit 2
            </span>
            <span>•</span>
            <a
              href="/privacy-policy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Gizlilik Politikası
            </a>
            <span>•</span>
            <a
              href="/terms-of-service.html"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Kullanım Koşulları
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
