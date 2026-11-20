# 06 — Muadil Uygulama, Ekran Görüntüsü ve İkon Rekabet Analizi (App Store 2026/2027)

Bu doküman, Apple App Store Türkiye ve Global mağazalarında yer alan 9 referans uygulamanın resmi ürün sayfaları, ekran görüntüleri, ikon geometrileri ve kullanıcı geri bildirimleri incelenerek hazırlanmıştır. Amaç; **TUS Vaka & Spot Akademi** uygulamasını içerik hacmi, klinik doğruluk, görsel sadelik ve mod ayrımı açısından piyasadaki tüm muadillerin önüne taşımaktır.

---

## 1. İncelenen 9 Referans Uygulama

| Kategori | Uygulama | Puan / Konumlandırma | Öne Çıkan Güçlü Yön | Tespit Edilen Zayıf Yön / Fırsat |
| :--- | :--- | :--- | :--- | :--- |
| **TR TUS** | **TUSBuddy** | 4.5★ • Kronometre & Koçluk | Ayrı kronometre sekmesi, çalışma takvimi, net/puan hesaplama, sade düz (flat) ikon | Çevrimdışı 30.000+ açıklamalı vaka/spot soru bankası bulunmuyor |
| **TR TUS** | **Tus Bankası** | 4.6★ • Yüksek Hacim | İlk ekranda **"23.000+ soru. Hepsi açıklamalı."** mesajı ve branş bazlı parçalama | 3D parlak baykuş maskot ikonu küçük boyutta AI üretimi hissi veriyor |
| **TR TUS** | **TUS SınavBank 2027** | 4.6★ • Çoklu Format | 15.000+ soru + 10.000+ kart + son 20 yıl çıkmış sentez vurgusu | Kullanıcı yorumlarında *"AI ile üretilmiş yüzeysel/hatalı soru"* eleştirisi |
| **TR TUS** | **TUS Duo** | 5.0★ • Minimalist Kart & Sayaç | Temel/Klinik ayrımı, % ilerleme barları, karanlık ve soru karmaşasından arındırılmış sayaç, 3 geometrik şekilli sade ikon | Kapsamlı 5 şıklı vaka eleme ve klinik hesaplayıcı modülü sınırlı |
| **Global Tıp** | **AMBOSS Qbank** | 4.9★ • Klinik Altın Standart | Öğrenme Modu (ipucu açık) vs Sınav Modu ayrımı, vektörel çift tonlu kusursuz ikon | Tamamen abonelik ve bulut bağımlı; Türkçe TUS müfredatına özel değil |
| **Global Tıp** | **UWorld Medical** | 4.7★ • Dinamik Havuz | Test kurucuda canlı sayaçlar (`Çözülmemiş`, `Yanlış`, `İşaretli`), 4 adımlı net tanıtım | Odak/Pomodoro ve konu tur takibi ayrı bir çalışma modunda sunulmuyor |
| **Mod Geçişi** | **OKX TR** | 4.5★ • İkili Evren (`Al-Sat` ⇄ `Basit`) | Basit modda emir defteri/grafik karmaşasını tamamen gizleyip tek aksiyon sunması | Finans odaklı; eğitim/etüt senaryosuna uyarlanması gerekiyor |
| **Saf Odak** | **Forest - Odaklan** | 4.7★ • Saf Odak Ekranı | Sayaç ekranında sıfır istatistik/soru kalabalığı; yalnızca süre, etiket ve başlat butonu | TUS dersleri, 55 konu 3-tur takibi ve uzmanlık hedef puanıyla entegre değil |

---

## 2. Rakip Ekran Görüntülerinden Çıkarılan 5 Temel Tasarım İlkesi

### İlke 1: "30.000+ İçerik" Hacmini Boğmadan Sunmak (UWorld + Tus Bankası Sentezi)
* **Sorun:** Kullanıcıya tek bir dev liste halinde binlerce soru sunmak kaygı yaratırken, düşük soru sayısı ise rakiplerin *"23.000+ / 30.000+ soru"* iddiaları karşısında zayıf algılanmaktadır.
* **Çözümümüz:** Toplam **32.000+ klinik doğrulamalı içerik** (`16.000+ 5 Şıklı Klinik Vaka & Çıkmış İkiz` + `16.000+ Doğru/Yanlış Spot Kartı`); **11 TUS Branşı**, **TTBT / KTBT oturumları** ve UWorld tarzı canlı **`Yeni (Çözülmemiş)` / `Yanlışlar` / `Kayıtlı`** havuz filtreleriyle parçalı ve sindirilebilir biçimde sunulur.
* **Sıfır Hata Farkı:** Rakip uygulamalardaki en büyük şikayet olan *"soru kökünde veya şıklarda cevabın sızması / hatalı eşleştirme"* sorununu kökünden bitirmek için her bir soru **12 kuraldan oluşan otomatik klinik doğrulama testinden (`audit_30k_questions.ts`)** geçirilir.

### İlke 2: Sıfır Tekrar (Zero-Duplication) Arayüz Hiyerarşisi
* **Tespit Edilen Eski Kusurlar:**
  1. Üst barda TUS geri sayımı ve seri (`🔥`) varken, hemen altındaki Ana Sayfa kartında aynı geri sayım ve serinin ikinci kez gösterilmesi.
  2. Üst barda `[Akademi | Odak]` geçiş anahtarı varken, hem Ana Sayfa içinde `"Odak & Kronometre"` kartının bulunması hem de `Akademi` alt navigasyon barında ortada tekrar `"Odak"` sekmesinin yer alması.
  3. Ana Sayfa'da hem Hero kartta `"Yeni Vaka Çöz"`, hem modül kartında `"Vaka Soruları"`, hem de alt barda `"Vaka"` butonunun aynı işi tekrarlaması.
* **Yeni Kural:** Her bilgi ve her mod geçişi ekranda **yalnızca tek bir otoriter noktada** bulunur:
  * Üst bar yalnızca **Marka**, **`[Akademi | Odak]` Mod Anahtarı**, **Tema**, **Karne/Ayarlar** ve **PRO** kontrollerini taşır.
  * TUS Geri Sayımı ve Günlük Hedef ilerlemesi yalnızca ilgili modun ana kartında tekil olarak gösterilir.

### İlke 3: `Akademi` ve `Odak` Modlarının Tam Yalıtımı (OKX TR + Forest Modeli)
* **`Akademi` Modu:** Yalnızca soru çözümü ve klinik değerlendirmeye adanmıştır (`Ana Sayfa`, `Vaka`, `Çıkmış İkiz`, `Spot`, `Deneme` + üst bardan `Karne & Ayarlar`).
* **`Odak` Modu:** Kullanıcının kendi ders kitabından veya notlarından çalıştığı **saf etüt sığınağıdır**. `Odak` modundayken ekranda **hiçbir soru sayacı (`0/40 soru`), hiçbir `"Yeni Vaka Çöz"` linki, hiçbir yanlış soru butonu veya mini spot testi görünmez**. Alt bar OKX TR / Binance mantığıyla **tek merkez ikona** dönüşür ve yalnızca odak araçlarını (`Kronometre/Pomodoro`, `55 Konu 3-Tur`, `Etüt Süre Analizi`, `TUS Hedef & Puan Planı`) açar.

### İlke 4: İlk Giriş Tanıtım Akışı (Onboarding) + Ayarlardan Tekrar İzleme
* Uygulama ilk kez açıldığında (`onboardingCompleted === false`) kullanıcıyı boğmayan, az yazılı ve görsel **4 adımlık interaktif tanıtım & hedef kurulum ekranı** karşılar.
* Tamamlandığında bir daha otomatik açılmaz; ancak **Karne & Ayarlar** ekranındaki **"Uygulama Tanıtımını Tekrar İncele"** butonuyla istenildiği an yeniden açılabilir.

### İlke 5: Kusursuz Vektörel İkon (AMBOSS + TUS Duo + Apple Health Standardı)
* Kutu içinde kutu (`beyaz kare içinde stetoskop`) görünümü ve birleşim noktalarındaki ton farkları kaldırılarak; tam ekran (`full-bleed`) aydınlık klinik zümrüt-turkuaz zemin üzerinde **Signed Distance Field (SDF)** matematiğiyle çizilmiş, pürüzsüz simetrik stetoskop ve entegre EKG nabız zirvesinden oluşan ikonik, %100 insan tasarımı vektör ambleme geçilir.
