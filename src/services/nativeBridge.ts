export const FREE_QUESTION_LIMIT = 30;
export const PRO_PRODUCT_ID = 'com.tus.akademi.lifetime.pro';
export const PRO_PRICE_LABEL = '49,99 ₺';
export const PRO_STORAGE_KEY = 'tus_akademi_pro_unlocked_v1';

interface WebKitMessageHandler {
  postMessage: (message: Record<string, unknown>) => void;
}

interface WindowWithWebKit extends Window {
  webkit?: {
    messageHandlers?: {
      tusNative?: WebKitMessageHandler;
    };
  };
}

function getNativeHandler(): WebKitMessageHandler | null {
  if (typeof window === 'undefined') return null;
  const w = window as unknown as WindowWithWebKit;
  return w.webkit?.messageHandlers?.tusNative ?? null;
}

export async function triggerHaptic(
  type: 'light' | 'medium' | 'heavy' | 'success' | 'warning' | 'error' | 'selection' = 'light'
): Promise<void> {
  try {
    const handler = getNativeHandler();
    if (handler) {
      handler.postMessage({ action: 'haptic', style: type });
      return;
    }
    if (typeof navigator !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(type === 'heavy' ? 18 : 8);
    }
  } catch {
    // Ignore haptic errors on desktop browsers
  }
}

export async function loadPersistedProStatus(): Promise<boolean> {
  try {
    if (typeof window !== 'undefined' && localStorage.getItem(PRO_STORAGE_KEY) === 'true') {
      return true;
    }
  } catch {
    // Fallback
  }
  return false;
}

export async function savePersistedProStatus(unlocked: boolean): Promise<void> {
  try {
    if (typeof window !== 'undefined') {
      localStorage.setItem(PRO_STORAGE_KEY, unlocked ? 'true' : 'false');
    }
  } catch {
    // Ignore storage errors
  }
}

export function requestNativeEntitlementCheck(): void {
  const handler = getNativeHandler();
  if (handler) {
    handler.postMessage({
      action: 'checkEntitlement',
      productId: PRO_PRODUCT_ID,
    });
  }
}

export function syncNativeTheme(theme: 'light' | 'dark'): void {
  try {
    const bgColor = theme === 'light' ? '#F3F7F9' : '#071117';
    if (typeof document !== 'undefined') {
      document.documentElement.style.backgroundColor = bgColor;
      document.body.style.backgroundColor = bgColor;
      const metaTheme = document.querySelector('meta[name="theme-color"]');
      if (metaTheme) {
        metaTheme.setAttribute('content', bgColor);
      }
    }
    const handler = getNativeHandler();
    if (handler) {
      handler.postMessage({
        action: 'setTheme',
        theme,
      });
    }
  } catch {
    // Ignore
  }
}

export async function purchaseLifetimePro(): Promise<{
  success: boolean;
  cancelled?: boolean;
  message: string;
}> {
  const handler = getNativeHandler();

  if (handler) {
    return new Promise((resolve) => {
      let settled = false;
      const timeoutId = window.setTimeout(async () => {
        if (settled) return;
        settled = true;
        window.removeEventListener('tus:proStatus', onProEvent as EventListener);
        resolve({
          success: false,
          cancelled: true,
          message: 'Apple StoreKit yanıt süresi aşıldı. Lütfen tekrar deneyin.',
        });
      }, 28000);

      const onProEvent = async (e: Event) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        window.removeEventListener('tus:proStatus', onProEvent as EventListener);
        const detail = (e as CustomEvent).detail || {};
        if (detail.isPro) {
          await savePersistedProStatus(true);
          await triggerHaptic('success');
          resolve({
            success: true,
            message:
              detail.message ||
              'TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) başarıyla aktif edildi!',
          });
        } else {
          resolve({
            success: false,
            cancelled: Boolean(detail.cancelled),
            message: detail.message || 'Satın alma işlemi tamamlanmadı.',
          });
        }
      };

      window.addEventListener('tus:proStatus', onProEvent as EventListener);
      handler.postMessage({
        action: 'purchasePro',
        productId: PRO_PRODUCT_ID,
      });
    });
  }

  // Web / Desktop Preview Simulation
  await new Promise((r) => setTimeout(r, 650));
  await savePersistedProStatus(true);
  await triggerHaptic('success');
  if (typeof window !== 'undefined') {
    window.dispatchEvent(
      new CustomEvent('tus:proStatus', {
        detail: {
          isPro: true,
          productId: PRO_PRODUCT_ID,
          message: 'Ömür Boyu Tam Erişim (Pro) başarıyla açıldı!',
        },
      })
    );
  }
  return {
    success: true,
    message: 'TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) başarıyla aktif edildi!',
  };
}

export async function restoreLifetimePro(): Promise<{
  success: boolean;
  message: string;
}> {
  const handler = getNativeHandler();

  if (handler) {
    return new Promise((resolve) => {
      let settled = false;
      const timeoutId = window.setTimeout(async () => {
        if (settled) return;
        settled = true;
        window.removeEventListener('tus:proStatus', onRestoreEvent as EventListener);
        const alreadyPro = await loadPersistedProStatus();
        resolve({
          success: alreadyPro,
          message: alreadyPro
            ? 'Önceki satın alımınız başarıyla geri yüklendi!'
            : 'Bu Apple hesabında daha önce yapılmış bir satın alım bulunamadı.',
        });
      }, 10000);

      const onRestoreEvent = async (e: Event) => {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        window.removeEventListener('tus:proStatus', onRestoreEvent as EventListener);
        const detail = (e as CustomEvent).detail || {};
        if (detail.isPro) {
          await savePersistedProStatus(true);
          await triggerHaptic('success');
          resolve({
            success: true,
            message: detail.message || 'Ömür Boyu Pro erişiminiz başarıyla geri yüklendi!',
          });
        } else {
          resolve({
            success: false,
            message:
              detail.message || 'Bu Apple ID ile ilişkili aktif bir satın alım bulunamadı.',
          });
        }
      };

      window.addEventListener('tus:proStatus', onRestoreEvent as EventListener);
      handler.postMessage({
        action: 'restorePurchases',
        productId: PRO_PRODUCT_ID,
      });
    });
  }

  // Web fallback check
  const persisted = await loadPersistedProStatus();
  if (persisted) {
    return {
      success: true,
      message: 'Ömür Boyu Pro erişiminiz başarıyla doğrulandı ve geri yüklendi.',
    };
  }
  return {
    success: false,
    message: 'Daha önce kaydedilmiş bir satın alım bulunamadı.',
  };
}

export function speakMedicalText(text: string): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'tr-TR';
    utterance.rate = 1.03;
    window.speechSynthesis.speak(utterance);
  } catch {
    // Ignore speech synthesis errors
  }
}

export function stopSpeaking(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;
  try {
    window.speechSynthesis.cancel();
  } catch {
    // Ignore
  }
}
