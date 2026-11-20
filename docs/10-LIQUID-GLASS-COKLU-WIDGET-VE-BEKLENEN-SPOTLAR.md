# 10 — iOS Liquid Glass Navigasyon, Çoklu Widget Mimarisi ve "Sınavda Muhtemel Çıkacaklar" Köşesi

Bu doküman; Apple'ın **Liquid Glass** şeffaf kırınımlı cam navigasyon tasarımının uygulanmasını, widget üzerindeki spot bilgilerin kesintisiz görünmesini, widget'a dokunulduğunda doğrudan ilgili bilginin uygulama içinde açılmasını (`tusakademi://` deep-link) ve 4 farklı iOS Widget çeşidiyle entegre çalışan **2027-TUS Muhtemel Çıkacaklar Köşesi** mimarisini tanımlar.

---

## 1. Tespit Edilen Sorunlar ve Kök Neden Çözümleri

| Sorun | Kök Neden | Uygulanan Mimari Çözüm |
| :--- | :--- | :--- |
| **Widget'ta günlük spot bilginin eksik/kesik görünmesi** | iOS 17+ `containerBackground` otomatik `16pt` kenar boşluğunun üstüne ekstra `.padding(12)` + `.padding(10)` binmesi ve `systemMedium` alanının ikiye bölünmesi | Çift iç boşluklar kaldırıldı (`contentMargins` uyumu); her widget boyutu için karakter bütçeli alanlar (`shortTitle`, `widgetSummary`) ve tam genişlikli özel **`Günün Çıkacak TUS Spotu`** widget'ı eklendi |
| **Widget'a tıklayınca bilginin kaybolması** | Widget'larda `.widgetURL(...)` tanımlı olmaması, `SceneDelegate` URL yakalayıcısının bulunmaması ve uygulama içinde karşılık gelen bir ekranın olmaması | `Info.plist` içine `tusakademi://` şeması eklendi; `SceneDelegate` hem soğuk açılışta (`willConnectTo`) hem arka planda (`openURLContexts`) tıklanan `id`'yi yakalayıp doğrudan **Muhtemel Çıkacaklar Köşesi**nde o kartı odaklı açar |
| **Widget çeşitliliğinin az olması** | Yalnızca tek bir `TusCountdownWidget` bulunması | `TusWidgetBundle` içine **4 ayrı iOS Widget ailesi** + Canlı Etkinlik eklendi |
| **Nav bar'ın opak ve düz görünmesi** | `%94` opak arka plan nedeniyle altından geçen içeriğin kırınım oluşturmaması | Gerçek **Apple Liquid Glass** optik katmanı (`%44–%56` şeffaflık, `blur(18px) saturate(190%)`, üst/alt speküler cam parıltısı ve yüzen kapsül geometrisi) uygulandı |

---

## 2. 4 Ayrı Native iOS Widget Çeşidi (`TusWidgets.swift`)

1. **Günün Çıkacak TUS Spotu (`TusDailySpotWidget` — `systemSmall`, `systemMedium`, `systemLarge`, `accessoryRectangular`):**
   * Tamamen sınavda çıkması beklenen yüksek verimli bilgilere ayrılmıştır; sayaçla alan paylaşmadığı için cümleler hiçbir zaman yarıda kesilmez.
   * `systemLarge` boyutunda ana spot + **ÖSYM Kırmızı Bayrak Tuzağı** + 2 ek beklenen spot birlikte görünür.
   * Dokunulduğunda `tusakademi://beklenen?id=<spotId>` ile doğrudan o kartı uygulama içinde açar.
2. **TUS Geri Sayım & Sınav Takvimi (`TusCountdownWidget` — `accessoryCircular`, `accessoryInline`, `accessoryRectangular`, `systemSmall`, `systemMedium`):**
   * Resmi 2027–2028 ÖSYM TUS geri sayımı (`Gün / Saat`), günlük hedef çubuğu ve orta boyutta kesintisiz aktif spot özeti sunar.
3. **Saf Odak & Etüt Halkası (`TusFocusRingWidget` — `accessoryCircular`, `systemSmall`, `systemMedium`):**
   * Günlük etüt dakikası halkası, çalışma serisi (`🔥`) ve 55 çekirdek konu tur yüzdesini gösterir; dokunulduğunda `tusakademi://odak` ile doğrudan **Saf Odak Modu**nu açar.
4. **İlk Tercih & Antidot Ezber Kartı (`TusRapidCompareWidget` — `systemMedium`, `systemLarge`):**
   * TUS'ta en sık sorulan *"İlk Tercih vs Altın Standart"* ve *"Zehirlenme → Spesifik Antidot"* ayrımlarını şeffaf cam kart düzeninde gösterir.

---

## 3. "2027-TUS Muhtemel Çıkacaklar & Günün Spot Köşesi" (`BeklenenSpotlarScreen.tsx`)

* **60 Altın Bilgi Senkronizasyonu (`tusExpectedPearls.ts` ↔ `TusSharedModels.swift`):** Hem iOS Widget uzantısı hem de uygulama içi köşe aynı 60 yüksek verimli TUS spotunu (`exp-1` .. `exp-60`) ve aynı 2 saatlik deterministik zaman dilimi formülünü paylaşır.
* **AMBOSS Tarzı 3 Katmanlı Kart Yapısı:**
  1. **Net Sınav Bilgisi:** Doğrudan sorulan enzim, etken, reseptör veya bulgu.
  2. **İlk Tercih vs. Altın Standart:** Ayırıcı tanı ve yönetim karşılaştırması.
  3. **ÖSYM Kırmızı Bayrak Tuzağı:** Adayların en sık düştüğü çeldirici uyarısı.
* **Widget'a Sabitleme (`Pin to Widget`):** Kullanıcı beğendiği herhangi bir beklenen bilgiyi **"Widget'a Sabitle"** butonuyla iPhone ana ve kilit ekranına anında sabitleyebilir (`Keychain` + `WidgetCenter.reloadAllTimelines()`).

---

## 4. iOS Liquid Glass Navigasyon & Yüzen Kapsül Mimarisi (`index.css` & `App.tsx`)

* **Yüzen Üst ve Alt Kapsül:** Üst bar ve alt sekme çubuğu tam genişlikli düz şerit yerine kenarlardan ayrılmış, yuvarlatılmış **yüzen cam kapsül (`rounded-full / rounded-3xl`)** formundadır.
* **Kırınım & Speküler Kenar Işığı:** `backdrop-filter: blur(18px) saturate(190%)` ile kayan içerik camın altından yumuşakça kırılır; `inset 0 1px 0.5px` üst speküler kenar çizgisi cam derinliği verir.
* **Aktif Sekme Cam Damlası:** Seçili sekme opak yeşil kutu yerine içten aydınlatmalı şeffaf zümrüt cam kapsül (`.ios-liquid-pill-active`) olarak parlar; sürekli çalışan animasyon içermediği için telefonda sıfır ısınma yaratır.
