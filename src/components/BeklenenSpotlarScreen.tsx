import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertTriangle,
  ArrowLeftRight,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Pin,
  Search,
  Share2,
  SlidersHorizontal,
  Smartphone,
  Sparkles,
  X,
} from 'lucide-react';
import {
  ExpectedPearlCategory,
  TUS_EXPECTED_PEARLS,
  TusExpectedPearl,
} from '../data/tusExpectedPearls';
import {
  TUS_ALL_EXPECTED_PEARLS,
  TUS_BRANCHES,
  TusBranchId,
} from '../data/tusMedicalRepository';
import {
  DAILY_FREE_PEARL_LIMIT,
  shareClinicalSummary,
  triggerHaptic,
} from '../services/nativeBridge';

export function getActiveFullExpectedPearl(
  pinnedPearlId?: string | null,
  nowMs = Date.now()
): TusExpectedPearl {
  if (pinnedPearlId) {
    const found = TUS_ALL_EXPECTED_PEARLS.find((p) => p.id === pinnedPearlId);
    if (found) return found;
  }
  const slot = Math.floor(nowMs / (2 * 3600 * 1000));
  return TUS_EXPECTED_PEARLS[Math.abs(slot) % TUS_EXPECTED_PEARLS.length];
}

interface BeklenenSpotlarScreenProps {
  isPro: boolean;
  isLight: boolean;
  todayFreePearlUsed: number;
  focusedPearlId?: string | null;
  openedFromWidget?: boolean;
  pinnedWidgetPearlId: string | null;
  savedPearlIds: string[];
  onTogglePinPearl: (pearlId: string) => void;
  onToggleSavePearl: (pearlId: string) => void;
  onConsumeFreePearl: () => void;
  onOpenPaywall: (reason?: string) => void;
  onJumpToBranchVaka: (branchId: TusBranchId) => void;
}

const CATEGORIES: Array<'ALL' | 'SAVED' | ExpectedPearlCategory> = [
  'ALL',
  'SAVED',
  '2027 Beklenen',
  'İlk Tercih & Altın Standart',
  'Toksikoloji & Antidot',
  'Patognomonik Bulgu',
  'Enzim & Genetik',
  'Acil Kırmızı Bayrak',
];

export const BeklenenSpotlarScreen: React.FC<BeklenenSpotlarScreenProps> = React.memo(
  ({
    isPro,
    isLight,
    todayFreePearlUsed,
    focusedPearlId,
    openedFromWidget = false,
    pinnedWidgetPearlId,
    savedPearlIds,
    onTogglePinPearl,
    onToggleSavePearl,
    onConsumeFreePearl,
    onOpenPaywall,
    onJumpToBranchVaka,
  }) => {
    const defaultActive = useMemo(
      () => getActiveFullExpectedPearl(pinnedWidgetPearlId),
      [pinnedWidgetPearlId]
    );

    const [selectedCategory, setSelectedCategory] = useState<
      'ALL' | 'SAVED' | ExpectedPearlCategory
    >('ALL');
    const [selectedBranch, setSelectedBranch] = useState<'ALL' | TusBranchId>('ALL');
    const [searchQuery, setSearchQuery] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [visibleLimit, setVisibleLimit] = useState<number>(48);
    const [activePearlId, setActivePearlId] = useState<string>(
      () => focusedPearlId || defaultActive.id
    );

    useEffect(() => {
      if (focusedPearlId) {
        setSelectedCategory('ALL');
        setSelectedBranch('ALL');
        setSearchQuery('');
        setActivePearlId(focusedPearlId);
      }
    }, [focusedPearlId]);

    useEffect(() => {
      setVisibleLimit(48);
    }, [selectedCategory, selectedBranch, searchQuery]);

    const filteredPearls = useMemo(() => {
      const q = searchQuery.trim().toLowerCase();
      return TUS_ALL_EXPECTED_PEARLS.filter((p) => {
        if (selectedCategory === 'SAVED' && !savedPearlIds.includes(p.id)) {
          return false;
        }
        if (
          selectedCategory !== 'ALL' &&
          selectedCategory !== 'SAVED' &&
          p.category !== selectedCategory
        ) {
          return false;
        }
        if (selectedBranch !== 'ALL' && p.branchId !== selectedBranch) {
          return false;
        }
        if (q) {
          const hay = `${p.shortTitle} ${p.widgetSummary} ${p.coreFact} ${p.examComparison} ${p.redFlagTrap} ${p.branchShort} ${p.category}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        return true;
      });
    }, [selectedCategory, selectedBranch, searchQuery, savedPearlIds]);

    const currentIndex = useMemo(() => {
      const idx = filteredPearls.findIndex((p) => p.id === activePearlId);
      return idx >= 0 ? idx : 0;
    }, [filteredPearls, activePearlId]);

    const currentPearl = filteredPearls[currentIndex] || TUS_EXPECTED_PEARLS[0];
    const isPinned = pinnedWidgetPearlId === currentPearl.id;
    const isSaved = savedPearlIds.includes(currentPearl.id);
    const isLiveWidgetSpot = defaultActive.id === currentPearl.id;

    const cardBg = isLight
      ? 'bg-white border-slate-200/85 shadow-[0_1px_3px_rgba(15,23,42,0.04)]'
      : 'bg-[#121826] border-white/8 shadow-md';

    const subBg = isLight
      ? 'bg-slate-50 border-slate-200/80'
      : 'bg-white/[0.04] border-white/8';

    const openPearlWithQuota = (targetId: string) => {
      if (targetId === currentPearl.id) return;
      if (!isPro && todayFreePearlUsed >= DAILY_FREE_PEARL_LIMIT) {
        triggerHaptic('warning');
        onOpenPaywall(
          `Bugünkü ${DAILY_FREE_PEARL_LIMIT} ücretsiz Altın Spot hakkın doldu. 2.751 spotun tamamı için PRO'ya geç.`
        );
        return;
      }
      if (!isPro) onConsumeFreePearl();
      setActivePearlId(targetId);
    };

    const handleStep = (dir: -1 | 1) => {
      if (filteredPearls.length <= 1) return;
      triggerHaptic('selection');
      const nextIdx =
        (currentIndex + dir + filteredPearls.length) % filteredPearls.length;
      openPearlWithQuota(filteredPearls[nextIdx].id);
    };

    const hasActiveFilter =
      selectedCategory !== 'ALL' || selectedBranch !== 'ALL' || searchQuery.trim().length > 0;

    return (
      <div className="space-y-3">
        {/* Sade Tek Satır Üst Bar + Açılır Filtre Çekmecesi */}
        <div className={`rounded-2xl border px-3.5 py-2.5 flex items-center justify-between gap-2 ${cardBg}`}>
          <div className="flex items-center gap-2 min-w-0">
            <Sparkles className="w-4.5 h-4.5 text-amber-500 shrink-0" />
            <h1 className="text-sm font-extrabold truncate">
              Altın Spotlar
            </h1>
            <span
              className={`text-xs font-bold tabular-nums shrink-0 ${
                isLight ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              {filteredPearls.length.toLocaleString('tr-TR')}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              triggerHaptic('light');
              setShowFilters((v) => !v);
            }}
            aria-label="Filtre ve Arama"
            className={`relative h-10 px-3 rounded-xl text-xs font-extrabold inline-flex items-center gap-1.5 transition shrink-0 ${
              showFilters || hasActiveFilter
                ? 'bg-blue-600 text-white'
                : isLight
                ? 'bg-slate-100 hover:bg-slate-200/70 text-slate-700'
                : 'bg-white/8 hover:bg-white/12 text-slate-200'
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Filtre</span>
          </button>
        </div>

        {/* Açılır Filtre & Arama Çekmecesi (Varsayılan Gizli) */}
        {showFilters && (
          <div className={`rounded-2xl border p-3 space-y-2.5 ${cardBg}`}>
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
              {CATEGORIES.map((cat) => {
                const active = selectedCategory === cat;
                const label =
                  cat === 'ALL'
                    ? 'Tümü'
                    : cat === 'SAVED'
                    ? `Kayıtlı (${savedPearlIds.length})`
                    : cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setSelectedCategory(cat);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-extrabold whitespace-nowrap border transition shrink-0 ${
                      active
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : `${subBg} ${isLight ? 'text-slate-600' : 'text-slate-300'}`
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setSelectedBranch('ALL');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition shrink-0 ${
                  selectedBranch === 'ALL'
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : `${subBg} ${isLight ? 'text-slate-600' : 'text-slate-400'}`
                }`}
              >
                Tüm Dersler
              </button>
              {TUS_BRANCHES.map((b) => {
                const active = selectedBranch === b.id;
                return (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('light');
                      setSelectedBranch((cur) => (cur === b.id ? 'ALL' : b.id));
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap border transition shrink-0 ${
                      active
                        ? 'bg-blue-600 border-blue-600 text-white'
                        : `${subBg} ${isLight ? 'text-slate-600' : 'text-slate-400'}`
                    }`}
                  >
                    {b.shortName}
                  </button>
                );
              })}
            </div>

            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Konu, antidot, enzim veya tuzak ara..."
                className={`w-full rounded-xl pl-9 pr-8 py-2.5 text-xs border outline-none ${subBg}`}
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  aria-label="Temizle"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* ANA ODAK KARTI (Widget İle %100 Senkronize AMBOSS Tarzı 3 Katmanlı Kart) */}
        {filteredPearls.length === 0 ? (
          <div className={`rounded-2xl border p-6 text-center space-y-2 ${cardBg}`}>
            <p className="text-xs font-bold text-slate-400">
              Bu filtrede kayıtlı beklenen bilgi bulunamadı.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('ALL');
                setSelectedBranch('ALL');
                setSearchQuery('');
              }}
              className="px-3.5 py-1.5 rounded-xl bg-emerald-600 text-white text-xs font-extrabold"
            >
              Tümünü Göster
            </button>
          </div>
        ) : (
          <div
            className={`rounded-3xl border p-4 sm:p-5 space-y-3.5 ${
              isLight
                ? 'bg-white border-emerald-200 shadow-md'
                : 'bg-gradient-to-br from-[#0C1F29] via-[#0B1922] to-[#08131A] border-emerald-500/30 shadow-xl'
            }`}
          >
            {/* Üst Rozet Satırı */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <div className="flex items-center gap-1.5 flex-wrap">
                <span className="px-2 py-0.5 rounded-lg bg-emerald-500/15 text-emerald-500 text-[10.5px] font-extrabold">
                  {currentPearl.session === 'TTBT' ? 'Temel' : 'Klinik'} • {currentPearl.branchShort}
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-amber-500/15 text-amber-500 text-[10.5px] font-extrabold">
                  {currentPearl.category}
                </span>
                {(openedFromWidget && focusedPearlId === currentPearl.id) ||
                isLiveWidgetSpot ? (
                  <span className="px-2 py-0.5 rounded-lg bg-cyan-500/15 text-cyan-500 text-[10px] font-extrabold">
                    {isPinned ? 'Widget’ta' : 'Widget'}
                  </span>
                ) : null}
              </div>

              <span className="text-[11px] font-extrabold text-slate-400 tabular-nums">
                {currentIndex + 1} / {filteredPearls.length}
                {!isPro && (
                  <span className="ml-1.5 text-amber-500">
                    • {Math.max(0, DAILY_FREE_PEARL_LIMIT - todayFreePearlUsed)} hak
                  </span>
                )}
              </span>
            </div>

            {/* Başlık & Kesintisiz Ana Özet */}
            <div className="space-y-1.5">
              <h2 className="text-base sm:text-lg font-extrabold tracking-tight leading-snug">
                {currentPearl.shortTitle}
              </h2>
              <p
                className={`text-xs sm:text-sm font-bold leading-relaxed ${
                  isLight ? 'text-emerald-800' : 'text-emerald-300'
                }`}
              >
                {currentPearl.widgetSummary}
              </p>
            </div>

            {/* Katman 1: Mekanizma */}
            <div className={`rounded-2xl border p-3 space-y-1 ${subBg}`}>
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-emerald-500">
                Mekanizma
              </div>
              <p className="text-xs leading-relaxed font-medium">
                {currentPearl.coreFact}
              </p>
            </div>

            {/* Katman 2: Ayırıcı Tanı */}
            <div className={`rounded-2xl border p-3 space-y-1 ${subBg}`}>
              <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-teal-500">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span>Ayırıcı Tanı</span>
              </div>
              <p className="text-xs leading-relaxed font-semibold">
                {currentPearl.examComparison}
              </p>
            </div>

            {/* Katman 3: Sınav Tuzağı */}
            <div
              className={`rounded-2xl border p-3 space-y-1 ${
                isLight
                  ? 'bg-rose-50/90 border-rose-200 text-rose-950'
                  : 'bg-rose-950/35 border-rose-500/35 text-rose-100'
              }`}
            >
              <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-rose-500">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Sınav Tuzağı</span>
              </div>
              <p className="text-xs leading-relaxed font-semibold">
                {currentPearl.redFlagTrap}
              </p>
            </div>

            {/* Rahat Boyutlu Aksiyonlar (44px) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('medium');
                  onTogglePinPearl(currentPearl.id);
                }}
                className={`h-11 px-3 rounded-xl border text-xs font-extrabold inline-flex items-center justify-center gap-1.5 transition ${
                  isPinned
                    ? 'bg-emerald-600 border-emerald-500 text-white'
                    : `${subBg}`
                }`}
              >
                <Pin className="w-4 h-4 shrink-0" />
                <span className="truncate">
                  {isPinned ? 'Widget’ta ✓' : 'Widget’a Sabitle'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  onToggleSavePearl(currentPearl.id);
                }}
                className={`h-11 px-3 rounded-xl border text-xs font-extrabold inline-flex items-center justify-center gap-1.5 transition ${
                  isSaved
                    ? 'bg-amber-500 border-amber-400 text-slate-950'
                    : `${subBg}`
                }`}
              >
                <Bookmark
                  className={`w-4 h-4 shrink-0 ${isSaved ? 'fill-current' : ''}`}
                />
                <span>{isSaved ? 'Kaydedildi' : 'Kaydet'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  onJumpToBranchVaka(currentPearl.branchId);
                }}
                className={`h-11 px-3 rounded-xl border text-xs font-extrabold inline-flex items-center justify-center gap-1 transition ${subBg}`}
              >
                <span className="truncate">{currentPearl.branchShort} →</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  shareClinicalSummary(
                    `[2027-TUS Beklenen Bilgi • ${currentPearl.branchShort}] ${currentPearl.shortTitle}\n• ${currentPearl.widgetSummary}\n• Tuzak: ${currentPearl.redFlagTrap}`
                  );
                }}
                className={`h-11 px-3 rounded-xl border text-xs font-extrabold inline-flex items-center justify-center gap-1.5 transition ${subBg}`}
              >
                <Share2 className="w-4 h-4 shrink-0" />
                <span>Paylaş</span>
              </button>
            </div>

            {/* Geniş 48px Önceki / Sonraki Kart Geçişi */}
            <div className="grid grid-cols-2 gap-2.5 pt-2 border-t border-slate-500/12">
              <button
                type="button"
                onClick={() => handleStep(-1)}
                className={`h-12 rounded-2xl border text-sm font-extrabold inline-flex items-center justify-center gap-1.5 transition active:scale-[0.98] ${subBg}`}
              >
                <ChevronLeft className="w-4.5 h-4.5" />
                <span>Önceki</span>
              </button>
              <button
                type="button"
                onClick={() => handleStep(1)}
                className="h-12 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-extrabold inline-flex items-center justify-center gap-1.5 shadow-xs transition active:scale-[0.98]"
              >
                <span>Sonraki</span>
                <ChevronRight className="w-4.5 h-4.5" />
              </button>
            </div>
          </div>
        )}

        {/* Hızlı Taranabilir Tüm Beklenen Spotlar Listesi (Sayfalanmış 60fps) */}
        {filteredPearls.length > 1 && (
          <div className={`rounded-2xl border p-3.5 space-y-2.5 ${cardBg}`}>
            <div className="flex items-center justify-between text-xs font-extrabold text-slate-400">
              <span>
                Hızlı İndeks ({filteredPearls.length.toLocaleString('tr-TR')} Altın Spot & Tuzak)
              </span>
              <span className="text-emerald-500">
                1–{Math.min(visibleLimit, filteredPearls.length)}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {filteredPearls.slice(0, visibleLimit).map((item) => {
                const selected = item.id === currentPearl.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      triggerHaptic('selection');
                      openPearlWithQuota(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`text-left rounded-xl border p-2.5 space-y-1 transition ${
                      selected
                        ? 'bg-emerald-500/15 border-emerald-500'
                        : `${subBg}`
                    }`}
                  >
                    <div className="flex items-center justify-between gap-1.5">
                      <span className="text-[10px] font-extrabold text-emerald-500 truncate">
                        {item.branchShort} • {item.category}
                      </span>
                      {pinnedWidgetPearlId === item.id && (
                        <Pin className="w-3 h-3 text-emerald-500 shrink-0" />
                      )}
                    </div>
                    <div className="text-xs font-extrabold truncate">
                      {item.shortTitle}
                    </div>
                    <div className="text-[11px] text-slate-400 line-clamp-2">
                      {item.widgetSummary}
                    </div>
                  </button>
                );
              })}
            </div>
            {filteredPearls.length > visibleLimit && (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setVisibleLimit((l) => l + 60);
                }}
                className="w-full py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-xs font-extrabold"
              >
                Daha Fazla Altın Spot Göster (
                {(filteredPearls.length - visibleLimit).toLocaleString('tr-TR')} kalan)
              </button>
            )}
          </div>
        )}

        {/* Kompakt Açılır Widget İpucu */}
        <details className={`rounded-2xl border px-3.5 py-2.5 text-xs ${cardBg}`}>
          <summary className="cursor-pointer list-none flex items-center justify-between gap-2 font-extrabold">
            <span className="flex items-center gap-1.5">
              <Smartphone className="w-4 h-4 text-[#2563EB]" />
              <span>iPhone Ana Ekran Widgetları</span>
            </span>
            <span className="text-[11px] text-slate-400">Nasıl Eklenir ▾</span>
          </summary>
          <p className="pt-2 text-[11px] text-slate-400 leading-relaxed">
            Ana ekrana basılı tut → <strong>+</strong> → <strong>TUS Akademi</strong> widgetını ekle. Beğendiğin spotu <strong>Widget’a Sabitle</strong> ile ana ekranında tutabilirsin.
          </p>
        </details>
      </div>
    );
  }
);
