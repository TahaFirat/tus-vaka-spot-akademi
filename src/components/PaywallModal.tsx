import React, { useEffect, useState } from 'react';
import {
  Check,
  Crown,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  X,
} from 'lucide-react';
import {
  TOTAL_INTERACTIVE_TUS_ITEMS,
} from '../data/tusMedicalRepository';
import {
  FREE_QUESTION_LIMIT,
  PRO_MONTHLY_PRICE_LABEL,
  PRO_MONTHLY_PRODUCT_ID,
  PRO_PRICE_LABEL,
  PRO_PRODUCT_ID,
  PRO_SIXMONTH_PRICE_LABEL,
  PRO_SIXMONTH_PRODUCT_ID,
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
  sixMonthPriceLabel?: string;
  availableProductIds?: string[] | null;
  isLight?: boolean;
}

type PlanKey = 'sixmonths' | 'monthly' | 'lifetime';

export const PaywallModal: React.FC<PaywallModalProps> = ({
  isOpen,
  onClose,
  onUnlocked,
  totalSolvedCount,
  reasonMessage,
  priceLabel = PRO_PRICE_LABEL,
  monthlyPriceLabel = PRO_MONTHLY_PRICE_LABEL,
  sixMonthPriceLabel = PRO_SIXMONTH_PRICE_LABEL,
  availableProductIds = null,
  isLight = true,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<PlanKey>('sixmonths');
  const [loading, setLoading] = useState<'purchase' | 'restore' | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [statusTone, setStatusTone] = useState<'success' | 'error'>('success');

  const isPlanAvailable = (productId: string) => {
    if (!availableProductIds || availableProductIds.length === 0) return true;
    return availableProductIds.includes(productId);
  };

  useEffect(() => {
    if (isOpen) {
      setStatusMessage(null);
      refreshNativeProPrice();
    }
  }, [isOpen]);

  // If StoreKit reports live availableProductIds, ensure selectedPlan points to an active product
  useEffect(() => {
    if (!availableProductIds || availableProductIds.length === 0) return;
    const currentId =
      selectedPlan === 'sixmonths'
        ? PRO_SIXMONTH_PRODUCT_ID
        : selectedPlan === 'monthly'
        ? PRO_MONTHLY_PRODUCT_ID
        : PRO_PRODUCT_ID;
    if (!availableProductIds.includes(currentId)) {
      if (availableProductIds.includes(PRO_SIXMONTH_PRODUCT_ID)) {
        setSelectedPlan('sixmonths');
      } else if (availableProductIds.includes(PRO_MONTHLY_PRODUCT_ID)) {
        setSelectedPlan('monthly');
      } else if (availableProductIds.includes(PRO_PRODUCT_ID)) {
        setSelectedPlan('lifetime');
      }
    }
  }, [availableProductIds, selectedPlan]);

  if (!isOpen) return null;

  const plans: Array<{
    key: PlanKey;
    productId: string;
    title: string;
    sub: string;
    price: string;
    unit: string;
    badge?: string;
  }> = [
    {
      key: 'sixmonths',
      productId: PRO_SIXMONTH_PRODUCT_ID,
      title: '6 Aylık TUS Dönemi',
      sub: 'Aylık 199,99 ₺’ye gelir',
      price: sixMonthPriceLabel,
      unit: '6 ayda bir',
      badge: '%33 İNDİRİM',
    },
    {
      key: 'monthly',
      productId: PRO_MONTHLY_PRODUCT_ID,
      title: 'Aylık Plan',
      sub: 'İstediğin an iptal',
      price: monthlyPriceLabel,
      unit: 'her ay',
    },
    {
      key: 'lifetime',
      productId: PRO_PRODUCT_ID,
      title: 'Ömür Boyu',
      sub: 'Tek ödeme • Süresiz',
      price: priceLabel,
      unit: 'tek ödeme',
    },
  ];

  const activePlan = plans.find((p) => p.key === selectedPlan) || plans[0];
  const activeIsAvailable = isPlanAvailable(activePlan.productId);

  const handlePurchase = async () => {
    if (loading) return;
    if (!activeIsAvailable) {
      setStatusTone('error');
      setStatusMessage(
        'Bu abonelik paketi şu anda Apple onay aşamasında. Aktif başka bir plan seçebilir veya kısa süre sonra tekrar deneyebilirsiniz.'
      );
      return;
    }
    await triggerHaptic('medium');
    setLoading('purchase');
    setStatusMessage(null);
    const res = await purchaseLifetimePro(activePlan.productId);
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

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-3 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="paywall-title"
    >
      <div
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl border shadow-2xl p-4 sm:p-5 space-y-3.5 ${
          isLight
            ? 'bg-white border-slate-200/90 text-slate-900'
            : 'bg-[#101624] border-white/12 text-slate-100'
        }`}
      >
        {/* Top Row */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-2xl bg-gradient-to-br from-blue-600 to-emerald-500 flex items-center justify-center text-white shrink-0 shadow-xs">
              <Crown className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <h2
                id="paywall-title"
                className="text-base font-extrabold tracking-tight leading-tight truncate"
              >
                TUS Akademi PRO
              </h2>
              <p
                className={`text-[11px] font-medium truncate ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}
              >
                {reasonMessage ||
                  (totalSolvedCount >= FREE_QUESTION_LIMIT
                    ? `Ücretsiz ${FREE_QUESTION_LIMIT} soru hakkın doldu`
                    : `${totalFmt}+ soru, ikiz ve altın spot sınırsız`)}
              </p>
            </div>
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
                : 'bg-white/6 hover:bg-white/12 border-white/12 text-slate-300'
            }`}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Ultra-Compact 3-Point Value Strip */}
        <div
          className={`rounded-2xl border p-3 grid grid-cols-1 gap-1.5 text-xs font-semibold ${
            isLight
              ? 'bg-slate-50/90 border-slate-200/80 text-slate-700'
              : 'bg-white/[0.03] border-white/8 text-slate-200'
          }`}
        >
          {[
            `${totalFmt}+ soru & spot • 11 TUS dersi sınırsız`,
            '2019–2025 ÖSYM ikizleri & 2.751 Altın Spot',
            'Süreli denemeler, hata defteri & %100 çevrimdışı',
          ].map((line) => (
            <div key={line} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
              <span>{line}</span>
            </div>
          ))}
        </div>

        {/* Strict 1:1 StoreKit Plan Selector */}
        <div className="space-y-2">
          {plans.map((plan) => {
            const selected = selectedPlan === plan.key;
            const available = isPlanAvailable(plan.productId);
            return (
              <button
                key={plan.key}
                type="button"
                onClick={() => {
                  triggerHaptic('selection');
                  setSelectedPlan(plan.key);
                  setStatusMessage(null);
                }}
                className={`w-full rounded-2xl border p-3 text-left transition flex items-center justify-between gap-2.5 ${
                  !available
                    ? isLight
                      ? 'bg-slate-50 border-slate-200 opacity-60'
                      : 'bg-white/[0.02] border-white/8 opacity-55'
                    : selected
                    ? isLight
                      ? 'bg-blue-50/70 border-blue-600 ring-2 ring-blue-600/15'
                      : 'bg-blue-500/15 border-blue-400 ring-2 ring-blue-400/20'
                    : isLight
                    ? 'bg-white border-slate-200 hover:border-slate-300'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-xs sm:text-[13px] font-extrabold">
                      {plan.title}
                    </span>
                    {plan.badge && available && (
                      <span className="px-1.5 py-0.5 rounded-md bg-emerald-600 text-white text-[9.5px] font-extrabold tracking-wide">
                        {plan.badge}
                      </span>
                    )}
                    {!available && (
                      <span className="px-1.5 py-0.5 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-300 text-[9.5px] font-extrabold">
                        Onay Aşamasında
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[11px] mt-0.5 ${
                      selected
                        ? isLight
                          ? 'text-blue-700 font-semibold'
                          : 'text-blue-300 font-semibold'
                        : isLight
                        ? 'text-slate-500'
                        : 'text-slate-400'
                    }`}
                  >
                    {plan.sub}
                  </div>
                </div>

                <div className="text-right shrink-0 flex items-center gap-2.5">
                  <div>
                    <div className="text-sm sm:text-base font-extrabold whitespace-nowrap tabular-nums">
                      {plan.price}
                    </div>
                    <div
                      className={`text-[10px] font-semibold whitespace-nowrap ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}
                    >
                      {plan.unit}
                    </div>
                  </div>
                  <span
                    className={`w-4.5 h-4.5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      selected && available
                        ? 'border-blue-600 bg-blue-600'
                        : isLight
                        ? 'border-slate-300'
                        : 'border-slate-600'
                    }`}
                  >
                    {selected && available && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    )}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {statusMessage && (
          <div
            className={`rounded-xl border px-3 py-2 text-xs text-center font-semibold ${
              statusTone === 'error'
                ? isLight
                  ? 'bg-rose-50 border-rose-200 text-rose-700'
                  : 'bg-rose-500/15 border-rose-400/35 text-rose-200'
                : isLight
                ? 'bg-emerald-50 border-emerald-200 text-emerald-700'
                : 'bg-emerald-500/15 border-emerald-400/30 text-emerald-200'
            }`}
          >
            {statusMessage}
          </div>
        )}

        {/* Primary Purchase CTA Button */}
        <button
          type="button"
          disabled={loading !== null || !activeIsAvailable}
          onClick={handlePurchase}
          data-product-id={activePlan.productId}
          className="w-full rounded-2xl bg-blue-600 hover:bg-blue-500 active:scale-[0.99] text-white font-extrabold text-xs sm:text-sm py-3.5 px-4 shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition disabled:opacity-50"
        >
          <Sparkles className="w-4 h-4 shrink-0" />
          <span>
            {loading === 'purchase'
              ? 'Apple StoreKit Onaylanıyor...'
              : !activeIsAvailable
              ? 'Bu Plan Onay Aşamasında'
              : `${activePlan.title} • ${activePlan.price}`}
          </span>
        </button>

        {/* Auto-Renewal Disclosure + Restore + Legal */}
        <div className="space-y-2 pt-1">
          {selectedPlan !== 'lifetime' && (
            <p
              className={`text-[10px] leading-snug text-center ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Abonelik ({activePlan.price} / {activePlan.unit}), dönem bitiminden en az 24 saat önce iptal edilmedikçe otomatik yenilenir. Apple ID Ayarlarından istediğiniz an iptal edebilirsiniz.
            </p>
          )}

          <div
            className={`pt-2 border-t flex flex-col items-center gap-1.5 ${
              isLight ? 'border-slate-100' : 'border-white/8'
            }`}
          >
            <button
              type="button"
              disabled={loading !== null}
              onClick={handleRestore}
              className={`inline-flex items-center gap-1.5 text-xs font-bold transition ${
                isLight
                  ? 'text-blue-600 hover:text-blue-700'
                  : 'text-blue-400 hover:text-blue-300'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5 shrink-0" />
              <span>
                {loading === 'restore'
                  ? 'Kontrol Ediliyor...'
                  : 'Satın Alımları Geri Yükle'}
              </span>
            </button>

            <div
              className={`flex flex-wrap items-center justify-center gap-x-2 text-[10.5px] ${
                isLight ? 'text-slate-400' : 'text-slate-500'
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
                Gizlilik
              </a>
              <span>•</span>
              <a
                href="/terms-of-service.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Koşullar (EULA)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
