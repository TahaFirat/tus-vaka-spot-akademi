import React, { useEffect, useState } from 'react';
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
  PRO_MONTHLY_PRICE_LABEL,
  PRO_MONTHLY_PRODUCT_ID,
  PRO_PRICE_LABEL,
  PRO_PRODUCT_ID,
  purchaseLifetimePro,
  refreshNativeProPrice,
  restoreLifetimePro,
  triggerHaptic,
} from '../services/nativeBridge';

interface PaywallModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUnlocked: () => void;
  totalSolvedCount: number;
  reasonMessage?: string;
  priceLabel?: string;
  monthlyPriceLabel?: string;
  isLight?: boolean;
}

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  onUnlocked,
  totalSolvedCount,
  reasonMessage,
  priceLabel = PRO_PRICE_LABEL,
  monthlyPriceLabel = PRO_MONTHLY_PRICE_LABEL,
  isLight = false,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<'monthly' | 'lifetime'>('lifetime');
  const [loading, setLoading] = useState<'purchase' | 'restore' | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<'success' | 'error'>('success');

  useEffect(() => {
    if (isOpen) {
      setStatusMessage(null);
      refreshNativeProPrice();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const activeProductId =
    selectedPlan === 'monthly' ? PRO_MONTHLY_PRODUCT_ID : PRO_PRODUCT_ID;
  const activePriceDisplay =
    selectedPlan === 'monthly' ? `${monthlyPriceLabel} / Ay` : priceLabel;

  const handlePurchase = async () => {
    if (loading) return;
    await triggerHaptic('medium');
    setLoading('purchase');
    setStatusMessage(null);
    const res = await purchaseLifetimePro(activeProductId);
    setLoading(null);
    if (res.success) {
      setStatusTone('success');
      setStatusMessage(res.message);
      onUnlocked();
      setTimeout(() => {
        onClose();
      }, 450);
    } else if (!res.cancelled) {
      setStatusTone('error');
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
    setStatusTone(res.success ? 'success' : 'error');
    setStatusMessage(res.message);
    if (res.success) {
      onUnlocked();
      setTimeout(() => {
        onClose();
      }, 600);
    }
  };

  const totalFmt = TOTAL_INTERACTIVE_TUS_ITEMS.toLocaleString('tr-TR');
  const vakaFmt = TUS_VAKA_QUESTIONS.length.toLocaleString('tr-TR');
  const spotFmt = TUS_SPOT_CARDS.length.toLocaleString('tr-TR');

  const features = [
    `${totalFmt}+ Hatasız İçerik (${vakaFmt} Vaka Sorusu & ${spotFmt} D/Y Spot)`,
    '11 TUS Branşında (TTBT & KTBT) Sınırsız Soru ve Hata Defteri',
    '2019–2025 ÖSYM Konsept İkizleri ve Süreli TUS Denemeleri',
    'İlk Tercih vs. Altın Standart, Antidot ve Klinik Hesaplayıcılar',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
    >
      <div
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl flex flex-col justify-between p-4 sm:p-5 ${
          isLight
            ? 'bg-white border-emerald-200 text-slate-900'
            : 'bg-[#0B1820] border-emerald-500/35 text-slate-100'
        }`}
      >
        {/* Top Row: Flex between Badge and Close Button (Zero Overlap!) */}
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div
            className={`min-w-0 inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-bold ${
              isLight
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-emerald-500/15 border-emerald-400/30 text-emerald-300'
            }`}
          >
            <Crown className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Aylık veya Ömür Boyu PRO Erişim</span>
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
                  : `30 soruluk demo sınırını kaldırın, ${totalFmt}+ soru ve denemeyi sınırsız açın.`)}
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

        {/* Dual Plan Selector: Monthly (Aylık) & Lifetime (Ömür Boyu) */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          {/* Plan 1: Monthly PRO */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('selection');
              setSelectedPlan('monthly');
            }}
            className={`relative rounded-2xl border p-3 text-left transition ${
              selectedPlan === 'monthly'
                ? isLight
                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/20'
                  : 'bg-emerald-500/15 border-emerald-400 ring-2 ring-emerald-400/20'
                : isLight
                ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                : 'bg-[#071117] border-white/10 hover:border-white/20'
            }`}
          >
            <div className="flex items-center justify-between gap-1 mb-1">
              <span
                className={`text-[10.5px] uppercase tracking-wider font-extrabold ${
                  selectedPlan === 'monthly'
                    ? isLight
                      ? 'text-emerald-700'
                      : 'text-emerald-300'
                    : isLight
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Aylık Plan
              </span>
              <span
                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                  selectedPlan === 'monthly'
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : isLight
                    ? 'border-slate-300'
                    : 'border-slate-600'
                }`}
              >
                {selectedPlan === 'monthly' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
            </div>
            <div
              className={`text-base sm:text-lg font-extrabold leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              {monthlyPriceLabel}
              <span className="text-[11px] font-bold opacity-75"> / ay</span>
            </div>
            <div
              className={`text-[10.5px] mt-0.5 leading-snug ${
                isLight ? 'text-slate-600' : 'text-slate-400'
              }`}
            >
              Esnek aylık • İstediğin an iptal
            </div>
          </button>

          {/* Plan 2: Lifetime PRO (Most Popular) */}
          <button
            type="button"
            onClick={() => {
              triggerHaptic('selection');
              setSelectedPlan('lifetime');
            }}
            className={`relative rounded-2xl border p-3 text-left transition ${
              selectedPlan === 'lifetime'
                ? isLight
                  ? 'bg-emerald-50 border-emerald-500 ring-2 ring-emerald-500/25'
                  : 'bg-gradient-to-br from-emerald-950/90 via-teal-950/80 to-cyan-950/80 border-emerald-400 ring-2 ring-emerald-400/25'
                : isLight
                ? 'bg-slate-50 border-slate-200 hover:border-slate-300'
                : 'bg-[#071117] border-white/10 hover:border-white/20'
            }`}
          >
            <span className="inline-block mb-1 px-1.5 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[9px] font-extrabold uppercase tracking-wider">
              ★ EN AVANTAJLI
            </span>
            <div className="flex items-center justify-between gap-1">
              <span
                className={`text-[10.5px] uppercase tracking-wider font-extrabold ${
                  selectedPlan === 'lifetime'
                    ? isLight
                      ? 'text-emerald-800'
                      : 'text-emerald-300'
                    : isLight
                    ? 'text-slate-500'
                    : 'text-slate-400'
                }`}
              >
                Ömür Boyu
              </span>
              <span
                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                  selectedPlan === 'lifetime'
                    ? 'border-emerald-500 bg-emerald-500 text-white'
                    : isLight
                    ? 'border-slate-300'
                    : 'border-slate-600'
                }`}
              >
                {selectedPlan === 'lifetime' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </span>
            </div>
            <div
              className={`text-base sm:text-lg font-extrabold leading-tight ${
                isLight ? 'text-slate-900' : 'text-white'
              }`}
            >
              {priceLabel}
            </div>
            <div
              className={`text-[10.5px] mt-0.5 leading-snug ${
                isLight ? 'text-emerald-700' : 'text-emerald-300/90'
              }`}
            >
              Tek ödeme • Süresiz erişim
            </div>
          </button>
        </div>

        {statusMessage && (
          <div
            className={`mb-2.5 rounded-xl border px-3 py-1.5 text-xs text-center font-medium ${
              statusTone === 'error'
                ? isLight
                  ? 'bg-rose-50 border-rose-200 text-rose-800'
                  : 'bg-rose-500/15 border-rose-400/35 text-rose-200'
                : isLight
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
          data-product-id={activeProductId}
          className="w-full rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:from-emerald-500 hover:to-teal-500 active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm py-3 px-3 shadow-lg shadow-emerald-900/25 flex items-center justify-center gap-2 transition disabled:opacity-60"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span className="text-center leading-tight">
            {loading === 'purchase'
              ? 'Apple StoreKit Onaylanıyor...'
              : selectedPlan === 'monthly'
              ? `Aylık PRO Başlat • ${activePriceDisplay}`
              : `Ömür Boyu PRO Aç • ${activePriceDisplay}`}
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
            className={`inline-flex items-center gap-1.5 text-xs font-semibold transition py-0.5 text-center ${
              isLight
                ? 'text-emerald-700 hover:text-emerald-800'
                : 'text-emerald-300 hover:text-emerald-200'
            }`}
          >
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span>
              {loading === 'restore'
                ? 'Satın Alımlar Kontrol Ediliyor...'
                : 'Satın Alımları Geri Yükle'}
            </span>
          </button>

          <div
            className={`flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[11px] ${
              isLight ? 'text-slate-500' : 'text-slate-400'
            }`}
          >
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              Apple StoreKit
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
