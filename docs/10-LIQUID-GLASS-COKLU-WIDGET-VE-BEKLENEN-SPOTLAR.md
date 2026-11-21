# 10 — iOS Liquid Glass Navigasyon, 5 Canlı Renkli Widget Mimarisi, 2.751 Altın Spot Köşesi ve Çift Planlı PRO Fiyatlandırma

Bu doküman; Apple'ın **Liquid Glass** şeffaf kırınımlı cam navigasyon tasarımının uygulanmasını, 5 canlı ve farklı renk paletine sahip native iOS Widget ailesini, **2.751 kartlık 2027-TUS Muhtemel Çıkacaklar & Altın Spot Köşesi**ni, `320px–1024px` sıfır taşmalı responsive üst bar / soru kartı mimarisini ve **Aylık (`79,99 ₺ / Ay`) + Ömür Boyu (`199,99 ₺` Tek Seferlik)** çift fiyatlandırma yapısını tanımlar.

---

## 1. Tespit Edilen Sorunlar ve Kök Neden Çözümleri

| Sorun | Kök Neden | Uygulanan Mimari Çözüm |
| :--- | :--- | :--- |
| **Üst bardaki `PRO` butonunun dar ekranlarda taşması** | `368px` (`xs:`) kırılımında hem `Sparkles` ikonu hem `"Karne"` metni aynı anda açıldığı için `375px` iPhone ekranında toplam genişliğin taşması | Mobil üst bardan mükerrer `Sparkles` kısayolu kaldırıldı, `Karne` mobilde ikon-odaklı (`w-7 h-7 sm:w-auto`) hale getirildi; üst kapsül genişliği `~245px` ile `320px` ekranlarda dahi sıfır taşmalı çalışır |
| **Vaka ve D/Y Spot kartlarında ufak iç içe geçmeler** | 5 haneli soru sayacının (`1 / 16.123`) Row A'da branş adı + `İpucu` + `Rastgele` + `Kaydet` butonlarıyla aynı satırı paylaşması | Soru/Spot sayacı (`1 / 16.123`) **Row B**'nin sağ köşesine taşındı; Row A ve `TusCountdownTimer` dar ekranlarda tamamen ferahlatıldı |
| **Spot bilgi köşesinin az görünmesi (60 kart)** | Yalnızca 60 sabit spot kartının listelenmesi | Tüm 11 branşın yapılandırılmış klinik çekirdek kümeleriyle birleştirilerek **2.751 adet 3 katmanlı Altın Spot Kartı** (`TUS_ALL_EXPECTED_PEARLS`) oluşturuldu ve 60fps sayfalama eklendi |
| **Widget'ların tek renkli görünmesi** | Tüm widget'ların koyu lacivert arka plan paylaşması | **5 ayrı canlı mücevher tonlu (Jewel-Tone) modern renk paleti** ve branşa göre dinamik renk geçişi uygulandı |
| **Yalnızca tek fiyat seçeneği bulunması** | Sadece Ömür Boyu (`com.tus.akademi.lifetime.pro`) planının yer alması | Hem **Aylık Plan (`79,99 ₺ / Ay` — `com.tus.akademi.pro.monthly`)** hem **Ömür Boyu Plan (`199,99 ₺` — `com.tus.akademi.lifetime.pro`)** StoreKit 2 + StoreKit 1 ve App Store Connect'e eklendi |

---

## 2. 5 Canlı Renkli Native iOS Widget Çeşidi (`TusWidgets.swift`)

1. **Günün Çıkacak TUS Spotu (`TusDailySpotWidget` — Branşa Göre Canlı Mücevher Gradyanı):**
   * `systemSmall`, `systemMedium`, `systemLarge`, `accessoryRectangular` boyutlarında tam metinli sınav spotu, ayırıcı karşılaştırma ve ÖSYM kırmızı bayrak tuzağı sunar.
2. **TUS Geri Sayım & Sınav Takvimi (`TusCountdownWidget` — Elektrik Kobalt → İndigo → Mor):**
   * Resmi 2027–2028 ÖSYM TUS geri sayımı (`Gün / Saat`), günlük hedef ilerlemesi ve kesintisiz spot özeti sunar.
3. **Saf Odak & Etüt Halkası (`TusFocusRingWidget` — Apple Fitness Berry → Macenta → Mor):**
   * Günlük etüt dakikası halkası, çalışma serisi (`🔥`) ve 55 çekirdek konu tur yüzdesini gösterir (`tusakademi://odak`).
4. **İlk Tercih & Altın Standart (`TusRapidCompareWidget` — Gün Batımı Kehribar → Mercan → Kızıl):**
   * TUS'ta en sık sorulan *"İlk Tercih vs Altın Standart"* ayrımlarını canlı mercan-kehribar kartta gösterir.
5. **Toksikoloji & Antidot Köşesi (`TusAntidotePearlWidget` — Okyanus Camgöbeği → Safir Mavi):**
   * Zehirlenmeler, spesifik antidotlar ve acil kırmızı bayrak tuzaklarını canlı okyanus mavisi temasıyla sunar.

---

## 3. "2.751 Kartlık Muhtemel Çıkacaklar & Altın Spot Köşesi" (`BeklenenSpotlarScreen.tsx`)

* **2.751 AMBOSS Tarzı 3 Katmanlı Kart (`TUS_ALL_EXPECTED_PEARLS`):**
  1. **Net Sınav Bilgisi:** Doğrudan sorulan enzim, etken, reseptör veya patognomonik bulgu.
  2. **İlk Tercih vs. Altın Standart:** Ayırıcı tanı ve klinik yönetim karşılaştırması.
  3. **ÖSYM Kırmızı Bayrak Tuzağı:** Adayların en sık düştüğü çeldirici uyarısı.
* **2.751 Kartın Tamamını Widget'a Sabitleme (`customPinnedPearl`):** Kullanıcı 2.751 karttan hangisini seçerse seçsin **"Widget'a Sabitle"** butonuyla kartın tam verisi (`TusWidgetPearl`) Keychain üzerinden anında iOS Widget'larına aktarılır.
