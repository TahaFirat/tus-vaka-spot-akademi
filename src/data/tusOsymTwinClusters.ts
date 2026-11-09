import { DifferentialClusterSeed } from './tusTypes';

/**
 * %100 Telifsiz, Özgün Kurgulanmış "ÖSYM Çıkmış Soru İkizleri" (2020–2025/2026 TUS Konseptleri).
 * Birebir ÖSYM metinlerini kopyalamadan, son yıllardaki TUS oturumlarında (TTBT & KTBT)
 * sorgulanmış gerçek klinik mekanizma, patognomonik bulgu ve ilaç/enzim hedeflerini öğretir.
 */
export const OSYM_TWIN_TUS_CLUSTERS: DifferentialClusterSeed[] = [
  // 1. BİYOKİMYA (Son Yıllar TUS İkizi: Elektron Transport Zinciri, Kolajen ve Vitamin Kofaktörleri)
  {
    branchId: 'biyokimya',
    subTopic: 'ÖSYM İkizi • Kollajen Sentezi, ETZ İnhibitörleri ve Vitamin Kofaktörleri (2023–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Lizil Oksidaz (Bakır Bağımlı — Kollajen Çapraz Bağlanması ve Menkes Sendromu)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Saçlarında kırılgan fırça görünümü (kinky hair), hipotoni, gelişme geriliği ve aort anevrizması saptanan erkek bebekte ATP7A gen mutasyonuna bağlı bakır eksikliği düşünülüyor. Bağ dokusunda tropokollajen moleküllerinin kovalent çapraz bağlanmasında bozukluk saptanıyor.',
        clues: ['ATP7A gen mutasyonu (Menkes)', 'bakır eksikliği', 'tropokollajen kovalent çapraz bağlanma kusuru'],
        questionPrompt: 'Kollajen ve elastin liflerinin hücre dışı alanda çapraz bağlanmasını sağlayan bakır bağımlı bu enzim hangisidir?',
        mechanism:
          'Lizil oksidaz, ekstraselüler alanda kollajen ve elastin lifleri arasında kovalent çapraz bağlar oluşturan bakır (Cu+2) bağımlı bir enzimdir. Menkes hastalığında (ATP7A mutasyonu) bakır eksikliği sonucu lizil oksidaz aktivitesi düşer.',
        whenCorrectNote: 'Ekstraselüler alanda kollajen/elastin çapraz bağlanmasını yapan Bakır (Cu+2) bağımlı enzim (Menkes sendromunda azalır).',
        firstVsGold: 'İntraselüler Hidroksilasyon (Prolil/Lizil hidroksilaz): C vitamini + Fe+2 • Ekstraselüler Çapraz Bağlanma (Lizil oksidaz): Bakır (Cu+2).',
        pearl: 'Kollajen sentezinde hidroksilasyon basamağı C vitamini (eksikliğinde Skorbüt) ve Fe+2; hücre dışı çapraz bağlanma basamağı ise Lizil oksidaz ve Bakır (eksikliğinde Menkes) bağımlıdır.',
        trueStatement: 'Lizil oksidaz bakır (Cu+2) bağımlı bir hücre dışı enzim olup kollajen ve elastin liflerinin çapraz bağlanmasını sağlar.',
        falseStatement: 'Lizil oksidaz endoplazmik retikulum içinde C vitamini kofaktörlüğünde prolin hidroksilasyonu yapar.',
        falseHighlight: 'endoplazmik retikulum içinde C vitamini kofaktörlüğünde prolin hidroksilasyonu yapar',
      },
      {
        entityName: 'Prolil ve Lizil Hidroksilaz (C Vitamini / Askorbat ve Fe+2 Bağımlı — Üçlü Sarmal Stabilizasyonu)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Uzun süre taze sebze-meyve tüketmeyen yaşlı bir hastada diş eti kanamaları, perifoliküler peteşiler, ekimozlar ve yara iyileşmesinde gecikme saptanıyor. Kollajenin endoplazmik retikulum içinde üçlü sarmal (triple heliks) yapısının stabilize edilemediği görülüyor.',
        clues: ['diş eti kanaması ve perifoliküler peteşi (Skorbüt)', 'üçlü sarmal (triple heliks) stabilizasyon kusuru', 'C vitamini eksikliği'],
        questionPrompt: 'Endoplazmik retikulumda kollajen öncülündeki prolin ve lizin kalıntılarını hidroksilleyen enzim ikilisi hangisidir?',
        mechanism:
          'Prolil hidroksilaz ve lizil hidroksilaz, kofaktör olarak C vitamini (askorbik asit) ve Fe+2 kullanır. Hidroksiprolin kollajenin üçlü sarmal (triple heliks) hidrojen bağlarını stabilize eder; eksikliğinde Skorbüt gelişir.',
        whenCorrectNote: 'Endoplazmik retikulumda C vitamini ve Fe+2 kullanarak üçlü sarmalı stabilize eden enzim (Eksikliğinde Skorbüt).',
        firstVsGold: 'Skorbüt Mekanizması: C vitamini eksikliği -> Prolil/Lizil hidroksilaz yetersizliği -> Gevşek üçlü sarmal ve kapiller frajilite.',
        pearl: 'Kollajende glisin her üç aminoasitte bir (Gly-X-Y) bulunur; hidroksiprolin üçlü sarmalı stabilize eder, hidroksilizin ise glikozilasyon ve çapraz bağlanmaya katılır.',
        trueStatement: 'Prolil ve lizil hidroksilaz enzimleri C vitamini ve Fe+2 bağımlı olup kollajenin üçlü sarmal stabilizasyonu için zorunludur.',
        falseStatement: 'Kollajenin hücre içi hidroksilasyon basamağı biyotin ve çinko kofaktörlüğünde gerçekleşir.',
        falseHighlight: 'biyotin ve çinko kofaktörlüğünde gerçekleşir',
      },
      {
        entityName: 'Kompleks IV (Sitokrom c Oksidaz — Siyanür, Karbonmonoksit ve H2S İnhibisyonu, Bakır İçeren Tek ETZ Kompleksi)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Yangın dumanına ve plastik yanıklarına maruz kalan hastada acil serviste ağır laktik asidoz, venöz kanda parlak kırmızı görünüm (arteriyolizasyon) ve hücresel hipoksi saptanıyor. Siyanür zehirlenmesi tanısıyla hidroksikobalamin başlanıyor.',
        clues: ['yangın dumanı / siyanür zehirlenmesi', 'venöz kanda parlak kırmızı görünüm', 'bakır içeren elektron transport kompleksi'],
        questionPrompt: 'Siyanür ve karbonmonoksit tarafından inhibe edilen ve yapısında hem a/a3 ile Bakır (CuA/CuB) bulunduran ETZ kompleksi hangisidir?',
        mechanism:
          'Kompleks IV (Sitokrom c oksidaz), elektronları moleküler oksijene (O2) doğrudan aktaran, yapısında hem a, hem a3 ve Bakır (Cu) atomları içeren tek ETZ kompleksidir. Siyanür (Fe+3’e bağlanır), CO (Fe+2’ye bağlanır) ve H2S tarafından inhibe edilir.',
        whenCorrectNote: 'Yapısında Bakır (Cu) bulunan, O2’yi suya indirgeyen ve Siyanür / CO tarafından inhibe edilen ETZ kompleksi.',
        firstVsGold: 'Kompleks I İnhibitörü: Rotenon, Amobarbital • Kompleks III İnhibitörü: Antimisin A • Kompleks IV İnhibitörü: Siyanür, CO • Kompleks V İnhibitörü: Oligomisin.',
        pearl: 'ETZ’de yapısında Bakır (Cu) bulunan ve oksijeni doğrudan kullanan TEK kompleks Kompleks IV’tür (Sitokrom c oksidaz); siyanür ve CO burayı bloke eder.',
        trueStatement: 'Kompleks IV (Sitokrom c oksidaz) yapısında bakır içerir ve siyanür ile karbonmonoksit tarafından inhibe edilir.',
        falseStatement: 'Siyanür zehirlenmesinde elektron transport zincirinde yalnızca Kompleks II (Süksinat dehidrogenaz) seçici olarak inhibe olur.',
        falseHighlight: 'yalnızca Kompleks II (Süksinat dehidrogenaz) seçici olarak inhibe olur',
      },
      {
        entityName: 'Tiamin Pirofosfat (Vitamin B1 / TPP — Pirüvat Dehidrogenaz, Alfa-Ketoglutarat Dehidrogenaz ve Transketolaz)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Kronik alkol kullanım öyküsü olan hastaya acil serviste tiamin verilmeden doğrudan yüksek yoğunluklu dekstroz (glukoz) infüzyonu yapılıyor. Kısa süre sonra hastada konfüzyon, nistagmus, 6. kraniyal sinir felci (oftalmopleji) ve ataksi (Wernicke ensefalopatisi) gelişiyor.',
        clues: ['alkolik hastada glukoz infüzyonu sonrası', 'konfüzyon, oftalmopleji ve ataksi (Wernicke)', 'eritrosit transketolaz aktivitesi'],
        questionPrompt: 'Eksikliği eritrosit transketolaz aktivitesi ile ölçülen ve oksidatif dekarboksilasyon enzimlerinin kofaktörü olan bu vitamin hangisidir?',
        mechanism:
          'Tiamin pirofosfat (B1); Pirüvat dehidrogenaz, Alfa-ketoglutarat dehidrogenaz, Dallı zincirli alfa-ketoasit dehidrogenaz ve HMP şantındaki Transketolaz enzimlerinin kofaktörüdür. Eksikliğinde glukoz yüklenmesi laktik asidoz ve Wernicke ensefalopatisini tetikler.',
        whenCorrectNote: 'PDH, Alfa-KGDH, BCKDH ve Transketolaz kofaktörü (Eksikliğinde Wernicke-Korsakoff ve Beriberi; tanıda eritrosit transketolaz).',
        firstVsGold: 'B1 (Tiamin) Durum Göstergesi: Eritrosit Transketolaz • B2 (Riboflavin) Göstergesi: Eritrosit Glutatyon Redüktaz • B6 (Piridoksin) Göstergesi: Eritrosit AST/ALT.',
        pearl: 'Alkolik veya malnütrisyonlu hastada Wernicke ensefalopatisini önlemek için glukoz infüzyonundan ÖNCE mutlaka İV Tiamin (B1) verilmelidir!',
        trueStatement: 'Tiamin pirofosfat (B1) pirüvat dehidrogenaz ve transketolazın kofaktörüdür; eksikliği eritrosit transketolaz aktivitesi ile değerlendirilir.',
        falseStatement: 'Tiamin eksikliği tanısında eritrosit glutatyon redüktaz aktivitesi altın standart olarak kullanılır.',
        falseHighlight: 'eritrosit glutatyon redüktaz aktivitesi altın standart olarak kullanılır',
      },
      {
        entityName: 'Biyotin (Vitamin B7 — Pirüvat Karboksilaz, Asetil-KoA Karboksilaz, Propionil-KoA Karboksilaz ve Çiğ Yumurta Akı / Avidin)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Uzun süre çok miktarda çiğ yumurta akı tüketen bir sporcuda alopesi (saç dökülmesi), ağız çevresinde eritematöz egzamatöz dermatit, konjonktivit ve laktik asidoz gelişiyor.',
        clues: ['çiğ yumurta akı (avidin)', 'alopesi ve dermatit', 'ATP-bağımlı karboksilasyon reaksiyonları'],
        questionPrompt: 'Çiğ yumurta akındaki avidin proteinine bağlanarak emilimi engellenen ve karboksilaz enzimlerinin kofaktörü olan bu vitamin hangisidir?',
        mechanism:
          'Biyotin (B7), ATP, HCO3- ve CO2 kullanan karboksilaz enzimlerinin (Pirüvat karboksilaz, Asetil-KoA karboksilaz, Propionil-KoA karboksilaz, Beta-metilkrotonil-KoA karboksilaz) kofaktörüdür. Çiğ yumurta akındaki avidin biyotine sıkıca bağlanarak emilimini engeller.',
        whenCorrectNote: 'Karboksilaz enzimlerinin (ABC: ATP, Biyotin, CO2) kofaktörü; çiğ yumurta akındaki avidin ile bağlanır (alopesi + dermatit).',
        firstVsGold: 'Biyotin Bağımlı Karboksilazlar: Pirüvat karboksilaz, Asetil-KoA karboksilaz, Propionil-KoA karboksilaz • Biyotin Bağımsız Karboksilasyon: Gama-glutamil karboksilaz (K vitamini) ve CPS-I/II.',
        pearl: 'Karbamoil fosfat sentetaz I ve II ile K vitamini bağımlı gama-glutamil karboksilaz enzimleri biyotin KULLANMAZ; diğer tüm karboksilazlar biyotin bağımlıdır.',
        trueStatement: 'Biyotin karboksilaz enzimlerinin kofaktörüdür ve çok miktarda çiğ yumurta akı (avidin) tüketimi biyotin eksikliğine yol açar.',
        falseStatement: 'Üre döngüsündeki Karbamoil fosfat sentetaz-I (CPS-I) enzimi aktivitesi için mutlak olarak biyotin kofaktörüne ihtiyaç duyar.',
        falseHighlight: 'mutlak olarak biyotin kofaktörüne ihtiyaç duyar',
      },
    ],
  },
  // 2. DAHİLİYE & PEDİATRİ (Son Yıllar TUS İkizi: Onkolojik ve Hematolojik Aciller, Elektrolit Bozuklukları)
  {
    branchId: 'dahiliye',
    subTopic: 'ÖSYM İkizi • Tümör Lizis Sendromu, Hiperkalsemi ve Nefrolojik Aciller (2023–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Tümör Lizis Sendromu (Hiperürisemi, Hiperkalemi, Hiperfosfatemi, Hipokalsemi ve Rasburikaz)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Burkitt lenfoma tanısıyla kemoterapi başlanan hastada 24. saatte oligüri, kardiyak aritmi ve tetani gelişiyor. Biyokimyada ürik asit 15 mg/dL, potasyum 6.8 mEq/L, fosfor 7.9 mg/dL ve kalsiyum 6.4 mg/dL saptanıyor.',
        clues: ['Burkitt lenfoma kemoterapisi sonrası', 'hiperürisemi, hiperkalemi, hiperfosfatemi', 'sekonder hipokalsemi'],
        questionPrompt: 'Bu hastada gelişen onkolojik acil tablo ve mevcut ürik asidi hızla allantoin’e yıkan rekombinant enzim hangisidir?',
        mechanism:
          'Hızlı çoğalan tümörlerin (Burkitt lenfoma, ALL) yıkımıyla hücre içi K+, PO4-3 ve pürin nükleik asitleri (ürik asit) kana karışır; yükselen fosfat kalsiyumu bağlayarak sekonder HİPOKALSEMİ yapar. Rasburikaz (rekombinant ürat oksidaz) oluşmuş ürik asidi çözünür allantoine çevirir (G6PD eksikliğinde kontrendikedir!).',
        whenCorrectNote: 'Hiperürisemi + Hiperkalemi + Hiperfosfatemi + Hipokalsemi dörtlüsü (Tedavide hidrasyon + Allopürinol / Rasburikaz).',
        firstVsGold: 'Profilakside Ürik Asit Oluşumunu Önleyen: Allopürinol (Ksantin oksidaz inh.) • Oluşmuş Ürik Asidi Allantoine Yıkan: Rasburikaz (G6PD eksikliğinde methemoglobinemi/hemoliz yapar!).',
        pearl: 'Tümör lizis sendromunda her şey yükselirken (Ürik asit, Potasyum, Fosfor) KALSİYUM DÜŞER (Hipokalsemi)! Rasburikaz G6PD eksikliğinde kontrendikedir.',
        trueStatement: 'Tümör lizis sendromunda hiperürisemi, hiperkalemi, hiperfosfatemi ve hipokalsemi gelişir; rasburikaz ürik asidi allantoine dönüştürür.',
        falseStatement: 'Tümör lizis sendromunda hücre içinden kalsiyum salınımına bağlı olarak ağır hiperkalsemi gelişir.',
        falseHighlight: 'hücre içinden kalsiyum salınımına bağlı olarak ağır hiperkalsemi gelişir',
      },
      {
        entityName: 'Hiperkalemi Acil Tedavisi (İlk Yapılacak: İV Kalsiyum Glukonat — Membran Stabilizasyonu)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Kronik böbrek yetmezliği olan hasta acil servise kas güçsüzlüğü ile getiriliyor. Serum potasyum düzeyi 7.4 mEq/L ölçülüyor; EKG’de sivri T dalgaları, PR uzaması, P dalgası silinmesi ve QRS genişlemesi saptanıyor.',
        clues: ['potasyum 7.4 mEq/L', 'EKG’de sivri T dalgaları ve QRS genişlemesi', 'ilk uygulanacak ajan'],
        questionPrompt: 'EKG değişikliği olan bu ağır hiperkalemi hastasında ventriküler fibrilasyonu önlemek için İLK uygulanması gereken ajan hangisidir?',
        mechanism:
          'EKG bulgusu olan hiperkalemide İLK adım potasyumu düşürmek değil, miyokard hücre membranının eşik potansiyelini yükselterek kalbi aritmiden korumaktır; bunun için İV Kalsiyum glukonat verilir. Ardından K+’u hücre içine sokmak için İnsülin + Dekstroz ve Nebülize Salbutamol verilir.',
        whenCorrectNote: 'EKG bulgulu hiperkalemide İLK tercih: İV Kalsiyum glukonat (Potasyumu düşürmez, miyokard membranını stabilize eder).',
        firstVsGold: '1. Kalbi Koruyan (İlk Tercih): İV Kalsiyum glukonat • 2. Hücre İçine Sokan: İnsülin+Glukoz, Beta-2 agonist, NaHCO3 • 3. Vücuttan Atan: Furosemid, Patiromer, Hemodiyaliz.',
        pearl: 'EKG değişikliği olan hiperkalemide İLK verilecek ilaç İV Kalsiyum glukonattır (serum K+ düzeyini değiştirmez, miyokard membranını stabilize eder).',
        trueStatement: 'EKG bulgusu olan ağır hiperkalemide ilk uygulanacak tedavi miyokard membranını stabilize eden İV kalsiyum glukonattır.',
        falseStatement: 'İV kalsiyum glukonat potasyumu hızla hücre içine sokarak serum potasyum düzeyini 5 dakika içinde düşürür.',
        falseHighlight: 'potasyumu hızla hücre içine sokarak serum potasyum düzeyini 5 dakika içinde düşürür',
      },
      {
        entityName: 'Ozmotik Demiyelinizasyon Sendromu (Santral Pontin Miyelinolizis — Hiponatreminin Hızlı Düzeltilmesi)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Kronik hiponatremisi (Na: 112 mEq/L) olan hastaya yoğun bakımda %3 hipertonik salin hızlı infüzyonu yapılarak serum sodyumu 24 saat içinde 132 mEq/L’ye çıkarılıyor. 3 gün sonra hastada kuadriparezi, dizartri, disfaji ve sadece göz kırpma/dikey göz hareketlerinin korunduğu "kilitli kalma (locked-in)" sendromu gelişiyor.',
        clues: ['kronik hiponatreminin hızlı düzeltilmesi', 'kuadriparezi ve kilitli kalma (locked-in) sendromu', 'bazis pontis demiyelinizasyonu'],
        questionPrompt: 'Kronik hiponatreminin 24 saatte 8–10 mEq/L’den hızlı düzeltilmesi sonucu gelişen bu nörolojik komplikasyon hangisidir?',
        mechanism:
          'Kronik hiponatreminin hızlı düzeltilmesi pons tabanındaki (basis pontis) oligodendrositlerde ozmotik büzülmeye ve miyelin kaybına (Santral Pontin Miyelinolizis -> Locked-in sendromu) yol açar. Hipernatreminin hızlı düzeltilmesi ise beyin ödemi yapar.',
        whenCorrectNote: 'Hiponatreminin hızlı düzeltilmesi -> Santral pontin miyelinolizis (Locked-in) • Hipernatreminin hızlı düzeltilmesi -> Beyin ödemi.',
        firstVsGold: 'Hiponatremi Düzeltme Hızı Sınırı: 24 saatte maksimum ≤8–10 mEq/L • Fazla Düzeltilirse: Desmopressin (dDAVP) + %5 Dekstroz ile sodyum geri düşürülür.',
        pearl: 'Ezber Kuralı: "Düşükten Yükseğe (Hiponatremi hızlı düzeltilirse) -> Pons erir (Pontin miyelinolizis); Yüksekten Düşüğe (Hipernatremi hızlı düzeltilirse) -> Beyin şişer (Serebral ödem)!"',
        trueStatement: 'Kronik hiponatreminin hızlı düzeltilmesi santral pontin miyelinolizise (ozmotik demiyelinizasyon ve locked-in sendromu) yol açar.',
        falseStatement: 'Kronik hipernatreminin hızlı düzeltilmesi santral pontin miyelinolizise, hiponatreminin hızlı düzeltilmesi ise beyin ödemine neden olur.',
        falseHighlight: 'hipernatreminin hızlı düzeltilmesi santral pontin miyelinolizise, hiponatreminin hızlı düzeltilmesi ise beyin ödemine',
      },
      {
        entityName: 'Vena Kava Süperior Sendromu (En Sık Neden Küçük Hücreli Akciğer Kanseri ve Pemberton Belirtisi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 62 yaşında 45 paket-yıl sigara öyküsü olan erkek hasta sabahları belirginleşen yüz ve boyun ödemi (pelerin tarzı ödem), dispne, göğüs ön duvarında venöz kollateraller ve kollarını başının üzerine kaldırdığında yüzde siyanoz/pletor (Pemberton belirtisi) ile başvuruyor.',
        clues: ['yüz ve boyunda pelerin tarzı ödem', 'göğüs ön duvarında venöz kollateraller', 'Pemberton belirtisi (+)'],
        questionPrompt: 'Erişkinde en sık küçük hücreli akciğer karsinomu ve sağ üst lob tümörlerine bağlı gelişen bu onkolojik tablo hangisidir?',
        mechanism:
          'Sağ üst mediastendeki kitlelerin (en sık akciğer kanseri: sağ üst lob yassı/küçük hücreli Ca, ardından lenfoma) ince duvarlı Vena kava süperior’a basısı sonucu gelişir. Histopatolojik tanı konulmadan (acil trakeal obstrüksiyon/serebral ödem hariç) radyoterapi başlanmaz.',
        whenCorrectNote: 'Pelerin ödemi + boyun venöz dolgunluğu + Pemberton belirtisi (En sık neden akciğer Ca; gençlerde NHL/lenfoma).',
        firstVsGold: 'İlk/En Uygun Görüntüleme: Kontrastlı Toraks BT • Akut Semptomatik Rahatlama En Hızlı Yöntem: Endovasküler VKS Stentleme.',
        pearl: 'Vena kava süperior sendromunda hastanın kollarını yukarı kaldırmasıyla yüzünde kızarma/siyanoz gelişmesine Pemberton belirtisi denir.',
        trueStatement: 'Vena kava süperior sendromunun en sık nedeni maligniteler (özellikle akciğer kanseri) olup fizik muayenede Pemberton belirtisi pozitiftir.',
        falseStatement: 'Vena kava süperior sendromunda fizik muayenede alt ekstremitelerde gode bırakan ödem ve asit ilk ortaya çıkan bulgudur.',
        falseHighlight: 'alt ekstremitelerde gode bırakan ödem ve asit ilk ortaya çıkan bulgudur',
      },
      {
        entityName: 'Akut Perikardit (Öne Eğilmekle Azalan Göğüs Ağrısı, Yaygın konkav ST Yüksekliği ve PR Çökmesi)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 34 yaşında erkek hasta viral üst solunum yolu enfeksiyonundan 1 hafta sonra başlayan, sırtüstü yatmakla ve derin nefes almakla artıp öne doğru eğilmekle azalan keskin retrosternal göğüs ağrısı ile başvuruyor. EKG’de aVR ve V1 dışındaki tüm derivasyonlarda açıklığı yukarı bakan (konkav) ST yüksekliği ve PR segment çökmesi saptanıyor.',
        clues: ['öne doğru eğilmekle azalan göğüs ağrısı', 'yaygın konkav ST yüksekliği', 'PR segment çökmesi (aVR’de PR yüksekliği)'],
        questionPrompt: 'Bu hastada en olası tanı ve nüksleri önlemek için NSAİİ tedavisine eklenmesi gereken birinci basamak ajan hangisidir?',
        mechanism:
          'Akut viral/idiyopatik perikarditte perikardiyal sürtünme sesi (frotman), yaygın konkav ST elevasyonu ve spesifik olarak PR segment depresyonu (aVR’de PR elevasyonu) görülür. İlk basamak tedavide Yüksek doz NSAİİ (veya Aspirin) + Kolşisin kombinasyonu kullanılır.',
        whenCorrectNote: 'Öne eğilmekle azalan plöritik göğüs ağrısı + frotman + yaygın konkav ST yüksekliği ve PR çökmesi (Tedavi: NSAİİ + Kolşisin).',
        firstVsGold: 'En Spesifik EKG Bulgusu: Yaygın PR segment çökmesi (aVR’de PR yüksekliği) • Birinci Basamak Tedavi ve Nüks Önleme: NSAİİ + Kolşisin.',
        pearl: 'Akut perikarditte Mİ’dan farklı olarak resiprokal ST çökmesi (aVR/V1 hariç) görülmez, yaygın PR çökmesi vardır ve tedavide nüksü önleyen en önemli ilaç Kolşisin’dir.',
        trueStatement: 'Akut perikarditte ağrı öne eğilmekle azalır, EKG’de yaygın konkav ST yüksekliği ve PR çökmesi görülür; tedavide NSAİİ + Kolşisin verilir.',
        falseStatement: 'Akut viral perikarditte birinci basamak tedavide nüksleri önlemek için ilk tercih yüksek doz sistemik kortikosteroid ve trombolitik tedavidir.',
        falseHighlight: 'birinci basamak tedavide nüksleri önlemek için ilk tercih yüksek doz sistemik kortikosteroid ve trombolitik tedavidir',
      },
    ],
  },
];
