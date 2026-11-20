# 09 — Kusursuz Vektör İkon Tasarım Rehberi (Signed Distance Field Mimarisi)

Bu doküman, uygulama ikonunun App Store, iPhone Ana Ekranı (`60pt`), Spotlight (`40pt`) ve Ayarlar/Bildirimler (`29pt`) boyutlarının tamamında **Apple Design Award** kalitesinde, keskin, aydınlık ve %100 insan elinden çıkmış (non-AI) görünmesi için uygulanan matematiksel tasarım kurallarını tanımlar.

---

## 1. Önceki İkondaki Kusurların Analizi ve Giderilmesi

1. **"Kutu İçinde Kutu" Etkisinin Kaldırılması:**
   * *Önceki Durum:* iOS'un yuvarlatılmış kare (`superellipse`) maskesinin içine ikinci bir beyaz yuvarlatılmış kare yerleştirilmesi sembolün kullanılabilir alanını `%50`'ye düşürüyordu.
   * *Yeni Tasarım:* Tam ekran (`full-bleed`) aydınlık zümrüt-akuamarin ipek gradyan doğrudan tuvali kaplar; beyaz ana sembol `%68` optik dolulukla merkezlenir.
2. **Çizgi Birleşim İzlerinin (Polyline Seam) Sıfırlanması:**
   * *Önceki Durum:* Ayrı renkli Bezier parçalarının üst üste çizilmesi Y-kavşağında görünür koyu daire izi bırakıyordu.
   * *Yeni Tasarım:* Tüm sembol geometrisi `2048×2048` / `4096×4096` çözünürlükte **Analitik Öklid Uzaklık Alanı (Signed Distance Field — SDF)** ile tek bir matematiksel yüzey olarak hesaplanır ve `smoothstep` kenar yumuşatmasıyla örneklenir.
3. **Dağınık Odak Noktalarının Tek İkonik Amblemde Birleştirilmesi:**
   * Stetoskop kolları simetrik bir klinik kalkan/kalp formu oluşturacak şekilde dengelenir; merkezinde keskin bir **EKG R-dalgası nabız çizgisi** ve sağ alt diyaframda sıcak mercan-altın (`#FF6B4A`) oskültasyon çekirdeği yer alır.

---

## 2. Renk ve Kontrast Sistemi

| Katman | Renk Kodu | Rolü |
| :--- | :--- | :--- |
| **Üst Sol Aydınlatma** | `#34F5C5` → `#14B8A6` | Canlı gün ışığı akuamarin-turkuaz geçişi |
| **Alt Sağ Derinlik** | `#059669` → `#047857` | Klinik zümrüt kontrast tabanı (`#FFFFFF` ile > 4.8:1 kontrast) |
| **Ana Amblem** | `#FFFFFF` (Saf Beyaz) | Simetrik stetoskop kalkanı + diyafram halkası |
| **Vurgu Çekirdeği** | `#FF6B4A` (Canlı Mercan) | EKG nabız enerjisi ve diyafram merkezi |
| **Ortam Gölgesi** | `rgba(2, 62, 46, 0.24)` | Sembolü zeminden ayıran yumuşak fiziksel derinlik |

---

## 3. Teknik Çıktı Doğrulama Kriterleri

* `ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png`: `1024×1024 px`, `RGB` (alfa kanalı kesinlikle yok — Apple App Store zorunluluğu).
* `public/icon-512.png`: `512×512 px`, `RGB`.
* `public/icon-192.png`: `192×192 px`, `RGB` (uygulama içi üst bar ve tanıtım ekranı amblemi).
