import React, { useState } from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Layers,
  Smartphone,
  Sparkles,
  Target,
  Timer,
  X,
  Zap,
} from 'lucide-react';
import {
  TOTAL_INTERACTIVE_TUS_ITEMS,
  TUS_SPECIALTY_TARGETS,
} from '../data/tusMedicalRepository';
import { triggerHaptic } from '../services/nativeBridge';
import { TusStudyState, UPCOMING_TUS_EXAMS } from '../services/studyStorage';

interface OnboardingModalProps {
  isOpen: boolean;
  isReplay?: boolean;
  isLight: boolean;
  studyState: TusStudyState;
  onUpdateStudyState: (updater: (prev: TusStudyState) => TusStudyState) => void;
  onComplete: (chosenMode: 'akademi' | 'odak') => void;
  onDismissReplay?: () => void;
}

export const OnboardingModal: React.FC<OnboardingModalProps> = ({
  isOpen,
  isReplay = false,
  isLight,
  studyState,
  onUpdateStudyState,
  onComplete,
  onDismissReplay,
}) => {
  const [step, setStep] = useState<number>(0);

  if (!isOpen) return null;

  const totalFormatted = TOTAL_INTERACTIVE_TUS_ITEMS.toLocaleString('tr-TR');
  const totalSteps = 4;

  const cardBg = isLight
    ? 'bg-white border-slate-200 text-slate-900 shadow-2xl'
    : 'bg-[#0A171F] border-white/12 text-slate-100 shadow-2xl';

  const subBg = isLight
    ? 'bg-slate-50 border-slate-200/90'
    : 'bg-[#071117] border-white/10';

  const handleSkipOrClose = () => {
    triggerHaptic('light');
    setStep(0);
    if (isReplay && onDismissReplay) {
      onDismissReplay();
    } else {
      onComplete(studyState.uiMode);
    }
  };

  const handleFinishWithMode = (mode: 'akademi' | 'odak') => {
    triggerHaptic('success');
    setStep(0);
    onComplete(mode);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-label="Uygulama Tanıtımı"
    >
      <div
        className={`w-full max-w-md max-h-[92vh] overflow-y-auto rounded-3xl border p-5 sm:p-6 flex flex-col justify-between gap-4 ${cardBg}`}
      >
        {/* Üst İlerleme Çubuğu + Atla / Kapat */}
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 flex-1 max-w-[160px]">
            {Array.from({ length: totalSteps }).map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 flex-1 rounded-full transition-all duration-200 ${
                  idx <= step
                    ? 'bg-emerald-500'
                    : isLight
                    ? 'bg-slate-200'
                    : 'bg-white/12'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={handleSkipOrClose}
            className={`px-2.5 py-1 rounded-xl text-xs font-extrabold inline-flex items-center gap-1 transition ${
              isLight
                ? 'text-slate-500 hover:bg-slate-100 hover:text-slate-800'
                : 'text-slate-400 hover:bg-white/8 hover:text-white'
            }`}
          >
            {isReplay ? (
              <>
                <X className="w-3.5 h-3.5" />
                <span>Kapat</span>
              </>
            ) : (
              <span>Atla</span>
            )}
          </button>
        </div>

        {/* ADIM 1: 30.000+ HATASIZ KÜLLİYAT */}
        {step === 0 && (
          <div className="space-y-4 py-1">
            <div className="flex items-center gap-3.5">
              <img
                src="/icon-192.png"
                alt="TUS Akademi"
                className="w-14 h-14 rounded-2xl shadow-md shrink-0 object-cover"
              />
              <div className="min-w-0">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-500 text-[10.5px] font-extrabold">
                  <Sparkles className="w-3 h-3" />
                  <span>%100 ÇEVRİMDIŞI • 11 BRANŞ</span>
                </div>
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight mt-0.5">
                  TUS Vaka & Spot Akademi
                </h2>
              </div>
            </div>

            <p
              className={`text-xs sm:text-sm leading-relaxed font-medium ${
                isLight ? 'text-slate-600' : 'text-slate-300'
              }`}
            >
              Nöbette, kütüphanede ve uçuş modunda sıfır internetle çalışan{' '}
              <strong className="text-emerald-500 font-extrabold">
                {totalFormatted}+ klinik doğrulamalı
              </strong>{' '}
              vaka ve spot külliyatı.
            </p>

            <div className="space-y-2">
              {[
                {
                  title: '5 Şıklı Klinik Vaka & Eleme',
                  desc: 'Şık üstünü çizme, klinik ipucu ve mekanizma analizi',
                },
                {
                  title: '2019–2025 ÖSYM Konsept İkizleri',
                  desc: 'Yıllara göre ayrılmış yüksek verimli sınav sentezleri',
                },
                {
                  title: 'Her Zaman Yeni Sorudan Devam',
                  desc: 'Çözdüğün sorular gizlenir; kaldığın yerden ilerlersin',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-2xl border p-3 flex items-start gap-2.5 ${subBg}`}
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="min-w-0">
                    <div className="text-xs font-extrabold">{item.title}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADIM 2: AKADEMİ ⇄ ODAK İKİLİ EVREN */}
        {step === 1 && (
          <div className="space-y-3.5 py-1">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-teal-500/15 text-teal-500 text-[10.5px] font-extrabold">
                <Layers className="w-3 h-3" />
                <span>İKİ AYRI ÇALIŞMA MODU</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight mt-1">
                Akademi ⇄ Saf Odak Geçişi
              </h2>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  isLight ? 'text-slate-600' : 'text-slate-400'
                }`}
              >
                Üst bardaki tek anahtarla çalışma alanını anında dönüştür:
              </p>
            </div>

            <div className="space-y-2.5">
              <div className={`rounded-2xl border p-3.5 space-y-1.5 ${subBg}`}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-emerald-500">
                    <Zap className="w-4 h-4" />
                    <span>Akademi Modu (Soru & Deneme)</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-emerald-500/15 text-emerald-500">
                    5 Sekme
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-400 leading-snug">
                  Vaka bankası, Çıkmış İkizler, D/Y Spot kartları, süreli TUS denemeleri ve 4 yatak başı klinik hesaplayıcı.
                </p>
              </div>

              <div className={`rounded-2xl border p-3.5 space-y-1.5 ${subBg}`}>
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-extrabold text-teal-500">
                    <Timer className="w-4 h-4" />
                    <span>Odak Modu (Sıfır Soru • Saf Etüt)</span>
                  </span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-500">
                    Tek İkon Bar
                  </span>
                </div>
                <p className="text-[11.5px] text-slate-400 leading-snug">
                  Soru kalabalığı tamamen gizlenir. Kronometre, 25/50/90 dk Pomodoro, 55 konu 3-tur takibi ve hedef puan planlayıcı tek merkez ikonda toplanır.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ADIM 3: KİLİT EKRANI WIDGET & DYNAMIC ISLAND */}
        {step === 2 && (
          <div className="space-y-3.5 py-1">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-500 text-[10.5px] font-extrabold">
                <Smartphone className="w-3 h-3" />
                <span>KİLİT EKRANI & CANLI ETKİNLİK</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight mt-1">
                Telefon Kilitliyken Bile Yanında
              </h2>
            </div>

            {/* Canlı Etkinlik Görsel Önizleme Kartı */}
            <div className="rounded-2xl bg-gradient-to-br from-[#071921] to-[#0D2933] border border-emerald-500/30 p-3.5 text-white space-y-2.5 shadow-inner">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-extrabold text-emerald-300 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  50 dk Blok • Dahiliye
                </span>
                <span className="font-mono font-extrabold text-sm tabular-nums text-white">
                  42:18
                </span>
              </div>
              <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full w-2/3 bg-gradient-to-r from-emerald-400 to-teal-300" />
              </div>
              <div className="text-[10.5px] text-slate-300 flex items-center justify-between">
                <span>Bildirim Çubuğu & Dynamic Island</span>
                <span className="text-emerald-300 font-bold">Sıfır Pil Yükü</span>
              </div>
            </div>

            <div className={`rounded-2xl border p-3 text-xs space-y-1.5 ${subBg}`}>
              <div className="font-extrabold">4 Ayrı Widget & Muhtemel Çıkacaklar Köşesi</div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                <strong>Günün Çıkacak Spotu</strong>, <strong>İlk Tercih & Tuzak Kartı</strong>, <strong>TUS Sayacı</strong> ve <strong>Saf Odak Halkası</strong> widgetlarına dokunduğunda ilgili spot uygulama içinde doğrudan açılır.
              </p>
            </div>
          </div>
        )}

        {/* ADIM 4: KİŞİSEL TUS HEDEF KURULUMU */}
        {step === 3 && (
          <div className="space-y-3.5 py-1">
            <div>
              <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-500 text-[10.5px] font-extrabold">
                <Target className="w-3 h-3" />
                <span>HIZLI KURULUM</span>
              </div>
              <h2 className="text-lg sm:text-xl font-extrabold tracking-tight mt-1">
                TUS Hedefini Seç
              </h2>
            </div>

            <div className="space-y-2.5">
              {/* Sınav Dönemi */}
              <div className="space-y-1">
                <label className="text-[11px] font-extrabold text-slate-400">
                  Hedef ÖSYM TUS Dönemi
                </label>
                <div className="grid grid-cols-2 gap-1.5">
                  {UPCOMING_TUS_EXAMS.slice(0, 2).map((exam) => {
                    const selected = studyState.targetTusDate === exam.date;
                    return (
                      <button
                        key={exam.date}
                        type="button"
                        onClick={() => {
                          triggerHaptic('selection');
                          onUpdateStudyState((p) => ({ ...p, targetTusDate: exam.date }));
                        }}
                        className={`p-2.5 rounded-xl border text-left transition ${
                          selected
                            ? 'bg-emerald-600 border-emerald-500 text-white'
                            : `${subBg}`
                        }`}
                      >
                        <div className="text-[11px] font-extrabold truncate">
                          {exam.label.split(' (')[0]}
                        </div>
                        <div
                          className={`text-[10px] mt-0.5 ${
                            selected ? 'text-emerald-100' : 'text-slate-400'
                          }`}
                        >
                          {exam.date}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hedef Dal */}
              <div className="space-y-1">
                <label
                  htmlFor="onb-spec"
                  className="text-[11px] font-extrabold text-slate-400"
                >
                  Hedef Uzmanlık Dalı
                </label>
                <select
                  id="onb-spec"
                  value={studyState.targetSpecialtyId}
                  onChange={(e) => {
                    triggerHaptic('selection');
                    onUpdateStudyState((p) => ({
                      ...p,
                      targetSpecialtyId: e.target.value,
                    }));
                  }}
                  className={`w-full rounded-xl border px-3 py-2 text-xs font-bold outline-none ${subBg}`}
                >
                  {TUS_SPECIALTY_TARGETS.map((sp) => (
                    <option key={sp.id} value={sp.id}>
                      {sp.name} (~{sp.targetScore} Puan)
                    </option>
                  ))}
                </select>
              </div>

              {/* Günlük Soru & Etüt Hedefi */}
              <div className="grid grid-cols-2 gap-2">
                <div className="space-y-1">
                  <span className="text-[10.5px] font-extrabold text-slate-400">
                    Günlük Soru
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    {[40, 60, 100].map((q) => (
                      <button
                        key={q}
                        type="button"
                        onClick={() => {
                          triggerHaptic('light');
                          onUpdateStudyState((p) => ({ ...p, dailyTarget: q }));
                        }}
                        className={`py-1.5 rounded-lg border text-[11px] font-extrabold ${
                          studyState.dailyTarget === q
                            ? 'bg-emerald-600 border-emerald-500 text-white'
                            : subBg
                        }`}
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[10.5px] font-extrabold text-slate-400">
                    Günlük Etüt (dk)
                  </span>
                  <div className="grid grid-cols-3 gap-1">
                    {[120, 180, 240].map((m) => (
                      <button
                        key={m}
                        type="button"
                        onClick={() => {
                          triggerHaptic('light');
                          onUpdateStudyState((p) => ({ ...p, dailyGoalMinutes: m }));
                        }}
                        className={`py-1.5 rounded-lg border text-[11px] font-extrabold ${
                          studyState.dailyGoalMinutes === m
                            ? 'bg-teal-600 border-teal-500 text-white'
                            : subBg
                        }`}
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Alt Navigasyon Butonları */}
        {step < totalSteps - 1 ? (
          <div className="flex items-center justify-between gap-2 pt-1">
            {step > 0 ? (
              <button
                type="button"
                onClick={() => {
                  triggerHaptic('light');
                  setStep((s) => Math.max(0, s - 1));
                }}
                className={`py-2.5 px-3.5 rounded-2xl border text-xs font-extrabold inline-flex items-center gap-1 ${subBg}`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Geri</span>
              </button>
            ) : (
              <div />
            )}

            <button
              type="button"
              onClick={() => {
                triggerHaptic('light');
                setStep((s) => Math.min(totalSteps - 1, s + 1));
              }}
              className="py-2.5 px-5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold inline-flex items-center gap-1.5 shadow-sm"
            >
              <span>Devam Et</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div className="space-y-2 pt-1">
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => handleFinishWithMode('akademi')}
                className="py-3 px-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Zap className="w-3.5 h-3.5" />
                <span>Akademi ile Başla</span>
              </button>
              <button
                type="button"
                onClick={() => handleFinishWithMode('odak')}
                className="py-3 px-3 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white text-xs font-extrabold flex items-center justify-center gap-1.5 shadow-sm"
              >
                <Timer className="w-3.5 h-3.5" />
                <span>Odak ile Başla</span>
              </button>
            </div>
            <div className="text-[10.5px] text-center text-slate-400">
              Bu tanıtımı istediğin zaman <strong>Karne & Ayarlar</strong> ekranından tekrar açabilirsin.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
