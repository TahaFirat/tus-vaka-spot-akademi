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
  // 3. MİKROBİYOLOJİ (Son Yıllar TUS İkizi: Ekzotoksinler, Fırsatçı Mikozlar ve Onkojenik Virüsler)
  {
    branchId: 'mikrobiyoloji',
    subTopic: 'ÖSYM İkizi • Bakteriyel Toksinler, Fırsatçı Mikozlar ve Onkojenik Virüsler (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Cryptococcus neoformans (Çini Mürekkebi, Polisakkarit Kapsül ve Lateks Aglütinasyon)',
        patientVignette:
          '[2024 TUS Konsept İkizi] CD4+ T lenfosit sayısı 40/mm³ olan HIV pozitif bir hasta 2 haftadır süren baş ağrısı, ateş ve ense sertliği ile başvuruyor. BOS incelemesinde Çini mürekkebi (India ink) boyamasında geniş şeffaf kapsüllü tomurcuklanan maya hücreleri görülüyor.',
        clues: ['HIV pozitif hastada menenjit', 'Çini mürekkebi (India ink) ile geniş kapsüllü maya', 'güvercin gübresi bulaşı'],
        questionPrompt: 'Üreaz pozitif, fenol oksidaz (melanin) üreten ve BOS’ta kriptokokal antijen testi ile tanı konulan bu etken hangisidir?',
        mechanism:
          'Cryptococcus neoformans güvercin gübresiyle (solunum yoluyla) bulaşan, dimorfik OLMAYAN kapsüllü tek patojen mayadır. İmmünsüprese (AIDS) hastalarda menenjite yol açar; tedavide Amfoterisin B + Flusitozin indüksiyonu ardından Flukonazol idamesi verilir.',
        whenCorrectNote: 'Kapsüllü maya + Çini mürekkebi (India ink) + Üreaz (+) + Fenol oksidaz (+) + AIDS hastasında menenjit.',
        firstVsGold: 'Hızlı ve En Duyarlı Tanı: BOS Kriptokokal Polisakkarit Antijen Testi (Lateks aglütinasyon) • Tedavi: Amfoterisin B + Flusitozin.',
        pearl: 'Cryptococcus neoformans dimorfik değildir (her sıcaklıkta mayadır); polisakkarit kapsülü ana virülans faktörüdür ve Çini mürekkebi ile gösterilir.',
        trueStatement: 'Cryptococcus neoformans kapsüllü bir maya olup BOS’ta Çini mürekkebi boyaması ve antijen testi ile tanı konulur.',
        falseStatement: 'Cryptococcus neoformans 25 derecede küf, 37 derecede maya formunda bulunan kapsülsüz dimorfik bir mantardır.',
        falseHighlight: '25 derecede küf, 37 derecede maya formunda bulunan kapsülsüz dimorfik bir mantardır',
      },
      {
        entityName: 'Aspergillus fumigatus (45 Derece Dar Açılı Septalı Hif, Galaktomannan ve Vorikonazol)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Akut miyeloid lösemi nedeniyle kemoterapi alan ve ağır nötropenisi 14 gündür devam eden hastada antibiyoterapiye dirençli ateş, plöritik göğüs ağrısı ve hemoptizi gelişiyor. Toraks BT’de nodül çevresinde buzlu cam görünümü (Halo belirtisi) ve serumda Galaktomannan antijeni pozitifliği saptanıyor.',
        clues: ['uzamış ağır nötropeni', 'Toraks BT’de Halo belirtisi', 'serum Galaktomannan antijeni (+)'],
        questionPrompt: 'Dokuda 45 derece dar açıyla (dikotom) dallanan septalı hifler oluşturan bu invaziv küf enfeksiyonu ve ilk tercih ilacı hangisidir?',
        mechanism:
          'Aspergillus fumigatus dokuda 45° dar açıyla dallanan bölmeli (septalı) hifler oluşturur. Nötropenik hastalarda anjiyoinvazyon yaparak Halo belirtisine, kavite içinde ise fungus topuna (Aspergilloma) yol açar; invaziv aspergillozda ilk tercih Vorikonazol’dür.',
        whenCorrectNote: '45° dar açılı septalı hif + Nötropenide Halo belirtisi + Galaktomannan / Beta-D-glukan (+) + Tedavide Vorikonazol.',
        firstVsGold: 'Serolojik Tarama: Galaktomannan ve 1,3-Beta-D-Glukan • İnvaziv Aspergillozda İlk Tercih İlaç: Vorikonazol.',
        pearl: 'İnvaziv pulmoner aspergillozda dokuda 45° dar açılı septalı hifler görülür, Galaktomannan pozitiftir ve tedavide ilk tercih Vorikonazol’dür.',
        trueStatement: 'Aspergillus fumigatus dokuda 45 derece dar açılı septalı hifler yapar ve invaziv aspergilloz tedavisinde ilk tercih vorikonazoldür.',
        falseStatement: 'İnvaziv aspergilloz tedavisinde ilk tercih antifungal ilaç flukonazol olup galaktomannan testi daima negatiftir.',
        falseHighlight: 'ilk tercih antifungal ilaç flukonazol olup galaktomannan testi daima negatiftir',
      },
      {
        entityName: 'Mucor / Rhizopus — Mukormikoz (90 Derece Dik Açılı Septasız Hif ve Diyabetik Ketoasidoz)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Diyabetik ketoasidoz tablosuyla acil servise getirilen hastada yüz ve periorbital bölgede şişlik, proptozis, oftalmopleji ve burun mukozası ile sert damakta siyah nekrotik eskar plakları saptanıyor. Biyopside damar duvarını invaze eden geniş, şerit benzeri, septasız (bölmesiz) ve 90 derece dik açıyla dallanan hifler görülüyor.',
        clues: ['diyabetik ketoasidoz (DKA)', 'burun ve damakta siyah nekrotik eskar', '90 derece dik açılı septasız (bölmesiz) geniş hifler'],
        questionPrompt: 'Rinoserebral tutulum yapan bu fırsatçı küf enfeksiyonu ve cerrahi debridmanla birlikte verilmesi gereken ilk tercih ilaç hangisidir?',
        mechanism:
          'Zygomycetes (Mucor, Rhizopus, Lichtheimia) ketoasidoz ve deferoksamin kullanan hastalarda serbest demiri kullanarak hızla çoğalır. 90° dik açılı, geniş ve septasız (koenositik) hifler yapar; Vorikonazol’e DİRENÇLİDİR, tedavide Lipozomal Amfoterisin B + Acil cerrahi debridman uygulanır.',
        whenCorrectNote: 'DKA + siyah nazal/palatal nekrotik eskar + 90° dik açılı septasız geniş hif + Lipozomal Amfoterisin B (Vorikonazole dirençli!).',
        firstVsGold: 'Histopatoloji: 90° dik açılı, geniş, septasız hifler • İlk Tercih Tedavi: Acil Cerrahi Debridman + Lipozomal Amfoterisin B (veya Posakonazol/İsavukonazol).',
        pearl: 'Mukormikozda Galaktomannan ve Beta-D-glukan NEGATİFTİR, Vorikonazol ETKİSİZDİR! Tedavide Lipozomal Amfoterisin B + cerrahi debridman şarttır.',
        trueStatement: 'Mukormikoz diyabetik ketoasidozlu hastalarda 90 derece dik açılı septasız hiflerle rinoserebral nekroz yapar; tedavide lipozomal amfoterisin B verilir.',
        falseStatement: 'Mukormikoz etkenleri dokuda 45 derece dar açılı septalı hifler oluşturur ve tedavisinde ilk tercih ilaç vorikonazoldür.',
        falseHighlight: '45 derece dar açılı septalı hifler oluşturur ve tedavisinde ilk tercih ilaç vorikonazoldür',
      },
      {
        entityName: 'Pseudomonas aeruginosa Ekzotoksin A ve Difteri Toksini (EF-2 ADP-Ribozilasyonu)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Geniş yanık alanı olan bir hastada mavi-yeşil renkli ve üzüm kokulu yara akıntısı ile sepsis gelişiyor. İzole edilen oksidaz pozitif, non-fermentatif gram negatif basilin salgıladığı ana ekzotoksinin konak hücrede protein sentezini durdurduğu saptanıyor.',
        clues: ['yanık hastasında mavi-yeşil (piyosiyanin) ve üzüm kokulu enfeksiyon', 'oksidaz (+) non-fermentatif basil', 'Elongasyon Faktörü-2 (EF-2) inhibisyonu'],
        questionPrompt: 'Corynebacterium diphtheriae toksini ile aynı mekanizmaya sahip olan bu toksinin hedef molekülü ve etki mekanizması hangisidir?',
        mechanism:
          'Hem Pseudomonas aeruginosa Ekzotoksin A hem de Corynebacterium diphtheriae toksini, ökaryotik Elongasyon Faktörü-2’yi (EF-2) ADP-ribozilasyona uğratarak inaktive eder ve hücrede protein sentezini durdurarak hücre ölümüne yol açar.',
        whenCorrectNote: 'EF-2’nin ADP-ribozilasyonu ile protein sentez inhibisyonu (Difteri toksini ve Pseudomonas Ekzotoksin A ortak mekanizması).',
        firstVsGold: 'EF-2 ADP-Ribozilasyonu: Difteri toksini & Pseudomonas Ekzotoksin A • 60S rRNA N-Glikozidaz İnhibisyonu: Shiga toksin & EHEC Shiga-benzeri toksin.',
        pearl: 'TUS klasiği: EF-2’yi ADP-ribozilasyonla inhibe eden iki toksin Difteri toksini ve Pseudomonas Ekzotoksin A’dır.',
        trueStatement: 'Pseudomonas aeruginosa Ekzotoksin A ve difteri toksini, Elongasyon Faktörü-2’yi (EF-2) ADP-ribozilasyonla inhibe ederek protein sentezini durdurur.',
        falseStatement: 'Pseudomonas aeruginosa Ekzotoksin A adenilat siklazı aktive ederek bağırsak epitelinde pirinç suyu benzeri sekretuvar ishale yol açar.',
        falseHighlight: 'adenilat siklazı aktive ederek bağırsak epitelinde pirinç suyu benzeri sekretuvar ishale yol açar',
      },
      {
        entityName: 'Epstein-Barr Virüsü / EBV (HHV-4 — CD21 Reseptörü, Downey Hücreleri ve Burkitt Lenfoma)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 19 yaşında üniversite öğrencisi ateş, eksüdatif tonsillofarenjit, servikal lenfadenopati ve splenomegali ile başvuruyor. Ampisilin başlandıktan sonra gövdede yaygın makülopapüler döküntü gelişiyor. Periferik yaymada geniş bazofilik sitoplazmalı atipik T lenfositler (Downey hücreleri) ve Paul-Bunnell heterofil antikor testi pozitif saptanıyor.',
        clues: ['ampisilin sonrası yaygın döküntü', 'atipik CD8+ T lenfositler (Downey hücreleri)', 'CD21 (CR2) reseptörü ile B lenfosit enfeksiyonu'],
        questionPrompt: 'B lenfositlere CD21 reseptörüyle giren, periferik yaymada ise reaktif CD8+ T lenfositlerin (Downey) görüldüğü bu virüs hangisidir?',
        mechanism:
          'EBV (HHV-4), B lenfositleri ve nazofarenks epitelini CD21 (CR2 / C3d reseptörü) üzerinden enfekte eder. Ancak periferik yaymada görülen atipik lenfositler (Downey hücreleri) enfekte B hücrelerine yanıt veren sitotoksik CD8+ T lenfositlerdir!',
        whenCorrectNote: 'Hedef Hücre: B lenfosit (CD21/CR2 reseptörü) • Yaymadaki Downey Hücresi: Sitotoksik CD8+ T lenfosit • İlişkili Tümörler: Burkitt, Nazofarenks Ca, Hodgkin.',
        firstVsGold: 'Enfekte Ettiği Hücre: CD21 (+) B Lenfosit • Periferik Yaymadaki Atipik Downey Hücresi: Reaktif CD8+ T Lenfosit (TUS Tuzağı!).',
        pearl: 'Çok sık sorulan TUS tuzağı: EBV B lenfositleri (CD21 ile) enfekte eder, fakat periferik yaymada görülen Downey hücreleri CD8+ T lenfositlerdir!',
        trueStatement: 'EBV B lenfositleri CD21 reseptörü aracılığıyla enfekte eder; periferik yaymada görülen Downey hücreleri ise reaktif CD8+ T lenfositlerdir.',
        falseStatement: 'Enfeksiyöz mononükleozda periferik yaymada görülen atipik Downey hücreleri virüsle doğrudan enfekte olmuş CD4+ yardımcı T lenfositlerdir.',
        falseHighlight: 'virüsle doğrudan enfekte olmuş CD4+ yardımcı T lenfositlerdir',
      },
    ],
  },
  // 4. PATOLOJİ (Son Yıllar TUS İkizi: Patognomonik Cisimcikler, Hücre Ölümü ve Tümör Belirteçleri)
  {
    branchId: 'patoloji',
    subTopic: 'ÖSYM İkizi • Patognomonik Cisimcikler, Histiyositozlar ve Tümör Patolojisi (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Langerhans Hücreli Histiyositoz (Birbeck Granülleri / Tenis Raketi, CD1a, Langerin / CD207 ve S-100)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 3 yaşında erkek çocukta kafatası kemiklerinde zımba ile delinmiş gibi litik lezyonlar, ekzoftalmi ve santral diabetes insipidus (Hand-Schüller-Christian triyadı) saptanıyor. Lezyon biyopsisinde eozinofillerle karışık oluklu (kahve çekirdeği) nükleuslu hücreler ve elektron mikroskobisinde tenis raketi şeklinde sitoplazmik granüller görülüyor.',
        clues: ['litik kalvaryum lezyonu + ekzoftalmi + diabetes insipidus', 'elektron mikroskobisinde tenis raketi (Birbeck granülleri)', 'CD1a (+), Langerin (CD207) (+) ve S-100 (+)'],
        questionPrompt: 'Elektron mikroskobisinde Birbeck granülleri içeren ve immünohistokimyada CD1a, Langerin (CD207) ve S-100 pozitif olan bu hastalık hangisidir?',
        mechanism:
          'Langerhans hücreli histiyositoz, immatür dendritik antijen sunan hücrelerin klonal proliferasyonudur (sıklıkla BRAF V600E mutasyonu). EM’de tenis raketi şeklindeki Birbeck granülleri patognomoniktir; İHK’da CD1a, Langerin (CD207) ve S-100 pozitiftir.',
        whenCorrectNote: 'EM’de tenis raketi şekilli Birbeck granülleri + İHK’da CD1a (+), Langerin/CD207 (+), S-100 (+) + BRAF V600E mutasyonu.',
        firstVsGold: 'Ultrastrüktürel Patognomonik Bulgu: Birbeck Granülleri (Tenis raketi) • En Spesifik İHK Belirteçleri: CD1a ve Langerin (CD207).',
        pearl: 'Langerhans hücreli histiyositozda Birbeck granülleri (tenis raketi), CD1a (+), Langerin/CD207 (+), S-100 (+) ve BRAF V600E mutasyonu TUS’ta her dönem sorgulanır.',
        trueStatement: 'Langerhans hücreli histiyositozda elektron mikroskobisinde tenis raketi şeklinde Birbeck granülleri görülür ve hücreler CD1a ile Langerin (CD207) pozitiftir.',
        falseStatement: 'Langerhans hücreli histiyositozda neoplastik hücreler olgun B lenfosit kökenli olup yalnızca CD20 ve CD79a eksprese eder.',
        falseHighlight: 'olgun B lenfosit kökenli olup yalnızca CD20 ve CD79a eksprese eder',
      },
      {
        entityName: 'Psammom Cisimciği (Papiller Tiroid Karsinomu, Meningiom, Seröz Over Karsinomu ve Mezotelyoma)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Boyunda ağrısız tiroid nodülü saptanan 32 yaşında kadın hastanın ince iğne aspirasyon biyopsisinde buzlu cam görünümünde (Orphan Annie eye) nükleuslar, intranükleer psödoinklüzyonlar, nükleer oluklanma (grooving) ve konsantrik lameller distrofik kalsifikasyon odakları saptanıyor.',
        clues: ['Orphan Annie eye nükleus ve nükleer grooving', 'konsantrik lameller distrofik kalsifikasyon', 'lenfatik yolla servikal yayılım'],
        questionPrompt: 'Papiller tiroid karsinomu, meningiom ve seröz papiller over karsinomunda görülen bu konsantrik lameller kalsifikasyon yapısına ne ad verilir?',
        mechanism:
          'Psammom cisimcikleri, tek tek nekroza giden tümör papillalarının uçlarında kalsiyum tuzlarının konsantrik tabakalar halinde çökmesiyle oluşan bir DİSTROFİK kalsifikasyon örneğidir (Serum kalsiyumu normaldir).',
        whenCorrectNote: 'Distrofik konsantrik lameller kalsifikasyon (Papiller tiroid Ca, Meningiom, Seröz over Ca, Somatostatinoma, Mezotelyoma).',
        firstVsGold: 'Kalsifikasyon Tipi: Distrofik Kalsifikasyon (Nekrotik dokuda, normokalsemik) • Görüldüğü 4 Ana Tümör: Papiller Tiroid Ca, Meningiom, Seröz Over Ca, Mezotelyoma.',
        pearl: 'Psammom cisimciği metastatik değil, DİSTROFİK kalsifikasyondur! Tiroidde psammom cisimciği görülmesi aksi kanıtlanana kadar Papiller Tiroid Karsinomu demektir.',
        trueStatement: 'Psammom cisimcikleri distrofik kalsifikasyon örneği olup papiller tiroid karsinomu, meningiom ve seröz over karsinomunda görülür.',
        falseStatement: 'Psammom cisimcikleri yalnızca ağır hiperkalsemi varlığında normal dokulara kalsiyum çökmesiyle oluşan metastatik kalsifikasyonlardır.',
        falseHighlight: 'yalnızca ağır hiperkalsemi varlığında normal dokulara kalsiyum çökmesiyle oluşan metastatik kalsifikasyonlardır',
      },
      {
        entityName: 'Aschoff Cisimciği ve Anitschkow (Tırtıl) Hücresi — Akut Romatizmal Ateş Pankarditi',
        patientVignette:
          '[2022 TUS Konsept İkizi] A grubu beta-hemolitik streptokok (S. pyogenes) tonsillofarenjitinden 3 hafta sonra gezici poliartrit ve mitral yetmezlik üfürümü gelişen 10 yaşındaki çocukta miyokard biyopsisinde fibrinoid nekroz çevresinde kromatini tırtıl görünümünde (caterpillar) dev histiyositler ve granülomatöz odaklar saptanıyor.',
        clues: ['S. pyogenes farenjiti sonrası pankardit', 'tırtıl kromatinli histiyosit (Anitschkow hücresi)', 'miyokardda fibrinoid nekrozlu granülom'],
        questionPrompt: 'Akut romatizmal ateşte miyokardda görülen bu patognomonik granülomatöz odak ve içindeki aktif makrofaj ikilisi hangisidir?',
        mechanism:
          'Streptokokal M proteini ile miyokard sarkolemmal proteinleri arasındaki moleküler benzerlik (Tip II hipersensitivite) sonucu tüm kalp tabakalarını tutan pankardit gelişir. Miyokarddaki fibrinoid nekrozlu granülomlara Aschoff cisimciği, içindeki tırtıl kromatinli makrofajlara Anitschkow hücresi denir.',
        whenCorrectNote: 'Akut Romatizmal Ateş: Aschoff cisimciği + Anitschkow (tırtıl) hücresi + MacCallum plağı (sol atriyum) + En sık Mitral kapak tutulumu.',
        firstVsGold: 'Akut Fazda En Sık Kapak Lezyonu: Mitral Yetmezlik • Kronik Fazda En Sık Kapak Lezyonu: Mitral Darlık (Balık ağzı görünümü).',
        pearl: 'Akut romatizmal ateşte en sık tutulan kapak Mitral (tek başına %65-70), ikinci en sık Mitral + Aort birlikteliğidir; Aschoff cisimciği ve Anitschkow hücresi patognomoniktir.',
        trueStatement: 'Akut romatizmal ateş miyokarditinde patognomonik olarak Aschoff cisimcikleri ve tırtıl kromatinli Anitschkow histiyositleri görülür.',
        falseStatement: 'Akut romatizmal ateşte en sık ve ilk tutulan kalp kapağı pulmoner kapak olup Aschoff cisimcikleri yalnızca akciğer parankiminde görülür.',
        falseHighlight: 'en sık ve ilk tutulan kalp kapağı pulmoner kapak olup Aschoff cisimcikleri yalnızca akciğer parankiminde görülür',
      },
      {
        entityName: 'Councilman Cisimciği (Akut Viral Hepatitte Hepatosit Apoptozu) vs. Mallory-Denk Cisimciği (Alkolik Hepatit)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Akut Hepatit B enfeksiyonu geçiren bir hastanın karaciğer biyopsisinde lobül içinde tek tek büzüşmüş, yoğun eozinofilik sitoplazmalı ve piknotik/parçalanmış nükleuslu apoptotik hepatositler izleniyor.',
        clues: ['akut viral hepatit biyopsisi', 'yoğun eozinofilik büzüşmüş hepatosit', 'programlı hücre ölümü (apoptoz)'],
        questionPrompt: 'Akut viral hepatit ve sarı hummada hepatosit apoptozu sonucu oluşan bu eozinofilik cisimcik hangisidir?',
        mechanism:
          'Viral hepatitlerde sitotoksik CD8+ T lenfositler enfekte hepatositlerde Fas-FasL ve perforin/granzim yoluyla apoptozu tetikler; oluşan eozinofilik apoptotik hepatositlere Councilman cisimciği (asidofilik cisimcik) denir. Alkolik hepatitteki Mallory-Denk cisimciği ise ubikitinlenmiş sitokeratin 8/18 ara filaman birikimidir.',
        whenCorrectNote: 'Councilman cisimciği: Viral hepatit / Sarı hummada hepatosit apoptozu • Mallory-Denk cisimciği: Alkolik hepatitte Sitokeratin 8/18 ara filamanı.',
        firstVsGold: 'Councilman Cisimciği: Apoptoz (Akut Viral Hepatit & Sarı Humma) • Mallory-Denk Cisimciği: Sitokeratin 8/18 Ara Filaman Birikimi (Alkolik Steatohepatit & Wilson).',
        pearl: 'Councilman cisimciği = Hepatosit APOPTOZU (Akut viral hepatit); Mallory-Denk cisimciği = Hepatositte Sitokeratin 8/18 ara filaman birikimi (Alkolik hepatit).',
        trueStatement: 'Councilman cisimcikleri akut viral hepatitlerde görülen apoptotik hepatositlerdir; Mallory-Denk cisimcikleri ise sitokeratin 8/18 ara filaman birikimidir.',
        falseStatement: 'Councilman cisimcikleri alkolik hepatitte hepatosit içinde biriken aktin ve mikrotübül agregatlarından oluşur.',
        falseHighlight: 'alkolik hepatitte hepatosit içinde biriken aktin ve mikrotübül agregatlarından oluşur',
      },
      {
        entityName: 'Nöroblastom (Homer-Wright Psödorozetleri, N-MYC Amplifikasyonu ve İdrarda VMA/HVA Artışı)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 18 aylık erkek bebekte karında orta hattı geçen düzensiz sert kitle, periorbital ekimoz (rakun gözü) ve opsoklonus-miyoklonus sendromu saptanıyor. İdrarda vanilmandelik asit (VMA) ve homovanilik asit (HVA) düzeyleri yüksek bulunuyor; biyopside ortasında nöropil bulunan Homer-Wright psödorozetleri görülüyor.',
        clues: ['orta hattı geçen batın kitlesi (adrenal medulla)', 'idrarda VMA ve HVA artışı + Homer-Wright psödorozetleri', 'N-MYC gen amplifikasyonu (en önemli kötü prognoz)'],
        questionPrompt: 'Çocukluk çağının bu en sık ekstrakraniyal solid tümöründe EN ÖNEMLİ kötü prognoz göstergesi olan genetik değişiklik hangisidir?',
        mechanism:
          'Nöral krest kökenli sempatoadrenal öncüllerden gelişen Nöroblastomda küçük yuvarlak mavi hücreler ve ortasında fibriler nöropil içeren Homer-Wright psödorozetleri görülür. En önemli bağımsız KÖTÜ prognoz faktörü N-MYC onkogen amplifikasyonudur (<1 yaş ve hiperdiploidi ise iyi prognozdur).',
        whenCorrectNote: 'Orta hattı geçen adrenal medulla kitlesi + VMA/HVA artışı + Homer-Wright psödorozeti + En önemli kötü prognoz: N-MYC amplifikasyonu.',
        firstVsGold: 'En Önemli Kötü Prognoz Faktörü: N-MYC Amplifikasyonu (ve >18 ay yaş, 1p/11q delesyonu) • İyi Prognoz Faktörü: <1 yaş, TrkA ekspresyonu, Evre 4S.',
        pearl: 'Nöroblastom batında orta hattı GEÇER ve kalsifikasyon içerir (Wilms tümörü orta hattı geçmez); en önemli kötü prognoz göstergesi N-MYC amplifikasyonudur.',
        trueStatement: 'Nöroblastomda Homer-Wright psödorozetleri ve idrarda VMA/HVA artışı görülür; en önemli kötü prognoz göstergesi N-MYC amplifikasyonudur.',
        falseStatement: 'Nöroblastomda N-MYC amplifikasyonu varlığı her yaş grubunda mükemmel prognoz ve spontan regresyon göstergesidir.',
        falseHighlight: 'mükemmel prognoz ve spontan regresyon göstergesidir',
      },
    ],
  },
  // 5. FARMAKOLOJİ (Son Yıllar TUS İkizi: Yeni Kuşak Antikoagülan Antidotları, Kalp Yetmezliği ve Onkoloji İlaçları)
  {
    branchId: 'farmakoloji',
    subTopic: 'ÖSYM İkizi • Spesifik Antidotlar, Biyolojik Ajanlar ve Kardiyovasküler Farmakoloji (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'İdarusizumab (Direkt Trombin / Faktör IIa İnhibitörü Dabigatran’ın Spesifik Monoklonal Antikor Antidotu)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Non-valvüler atriyal fibrilasyon nedeniyle oral direkt trombin (Faktör IIa) inhibitörü Dabigatran eteksilat kullanan 74 yaşındaki hasta acil servise hayatı tehdit eden üst GİS kanaması ile getiriliyor.',
        clues: ['direkt trombin (Faktör IIa) inhibitörü Dabigatran kullanımı', 'hayatı tehdit eden kanama', 'spesifik monoklonal antikor fragmanı antidot'],
        questionPrompt: 'Dabigatran’ın antikoagülan etkisini dakikalar içinde geri çeviren spesifik hümanize monoklonal antikor fragmanı (Fab) antidot hangisidir?',
        mechanism:
          'İdarusizumab, direkt trombin inhibitörü Dabigatran’a trombinden 350 kat daha yüksek afiniteyle bağlanan spesifik monoklonal antikor fragmanıdır (Fab). Faktör Xa inhibitörlerinin (Apiksaban, Rivaroksaban, Edoksaban) spesifik antidotu ise Andeksanet alfa’dır.',
        whenCorrectNote: 'Dabigatran (Faktör IIa inh.) antidotu: İdarusizumab • Apiksaban / Rivaroksaban (Faktör Xa inh.) antidotu: Andeksanet alfa.',
        firstVsGold: 'Dabigatran Antidotu: İdarusizumab • Apiksaban/Rivaroksaban Antidotu: Andeksanet alfa • Heparin Antidotu: Protamin sülfat • Varfarin Antidotu: K vitamini + 4-Faktör PCC.',
        pearl: 'Sonu "-gatran" (Dabigatran) olanın antidotu İdarusizumab; sonu "-ksaban" (Apiksaban, Rivaroksaban) olan Faktör Xa inhibitörlerinin antidotu Andeksanet alfa’dır!',
        trueStatement: 'Direkt trombin inhibitörü dabigatranın spesifik antidotu idarusizumab, direkt Faktör Xa inhibitörlerinin spesifik antidotu ise andeksanet alfadır.',
        falseStatement: 'Dabigatran zehirlenmesinde spesifik antidot olarak protamin sülfat, heparin zehirlenmesinde ise idarusizumab kullanılır.',
        falseHighlight: 'spesifik antidot olarak protamin sülfat, heparin zehirlenmesinde ise idarusizumab kullanılır',
      },
      {
        entityName: 'Sakubitril + Valsartan (ARNI — Neprilisin İnhibisyonu + AT1 Reseptör Blokajı ve ACE İnhibitörleriyle Kontrendikasyon)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Ejeksiyon fraksiyonu %28 olan düşük EF’li kalp yetmezliği (HFrEF) hastasında mortaliteyi azaltmak amacıyla Ramipril kesilerek Sakubitril + Valsartan (ARNI) tedavisine geçilmesi planlanıyor.',
        clues: ['düşük EF’li kalp yetmezliği (HFrEF)', 'neprilisin inhibitörü (Sakubitril) + ARB (Valsartan)', 'anjiyoödem riskini önlemek için 36 saat ara'],
        questionPrompt: 'Sakubitril’in inhibe ettiği enzim ve ağır anjiyoödem riski nedeniyle birlikte kullanılması KESİNLİKLE kontrendike olan ilaç grubu hangisidir?',
        mechanism:
          'Sakubitril, natriüretik peptidleri (ANP, BNP, CNP) ve bradikinini yıkan Neprilisin enzimini inhibe eder. Hem ACE inhibitörleri hem de Sakubitril bradikinin yıkımını azalttığı için birlikte kullanımları ağır ANJİYOÖDEM yapar; ACEi kesildikten sonra en az 36 saat beklenmelidir.',
        whenCorrectNote: 'Sakubitril: Neprilisin inhibitörü (ANP/BNP yıkımını önler) • ACE inhibitörleriyle birlikte kullanımı ağır anjiyoödem nedeniyle kontrendikedir (36 saat kuralı).',
        firstVsGold: 'Mekanizma: Neprilisin inhibisyonu (Sakubitril) + AT1 blokajı (Valsartan) • Kontrendikasyon: ACE İnhibitörleri (En az 36 saat wash-out süresi şart!).',
        pearl: 'Sakubitril serum BNP düzeyini artırır (BNP neprilisin substratıdır), fakat NT-proBNP neprilisinle yıkılmadığı için ARNI kullanan hastada kalp yetmezliği takibi NT-proBNP ile yapılır!',
        trueStatement: 'Sakubitril neprilisini inhibe eder; ağır anjiyoödem riski nedeniyle ACE inhibitörleri ile birlikte kullanılmaz ve geçişte en az 36 saat beklenir.',
        falseStatement: 'Sakubitril tedavisi sırasında kalp yetmezliği takibinde NT-proBNP yerine yalnızca neprilisin substratı olan BNP düzeyi kullanılmalıdır.',
        falseHighlight: 'NT-proBNP yerine yalnızca neprilisin substratı olan BNP düzeyi kullanılmalıdır',
      },
      {
        entityName: 'Digoksin Toksisitesi (Na+/K+-ATPaz İnhibisyonu, Hipokalemi ile Artan Toksisite ve Digoksin Spesifik Fab)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Kalp yetmezliği nedeniyle Digoksin ve Furosemid kullanan yaşlı bir hasta bulantı, iştahsızlık, nesnelerin çevresinde sarı-yeşil haleler görme (ksantopsi) ve EKG’de ventriküler bigemine ekstrasistol ile başvuruyor.',
        clues: ['furosemide bağlı hipokalemi', 'sarı-yeşil görme (ksantopsi)', 'Na+/K+-ATPaz inhibisyonu'],
        questionPrompt: 'Digoksinin kalp kasında bağlandığı hedef pompa ve bu hastada toksisiteyi en sık tetikleyen elektrolit bozukluğu hangisidir?',
        mechanism:
          'Digoksin kardiyomiyosit membranındaki Na+/K+-ATPaz pompasının potasyum bağlanma bölgesine yarışmalı bağlanarak pompayı inhibe eder. Hipokalemi (örn. loop/tiyazid diüretik kullanımı) digoksinin pompaya bağlanmasını artırarak toksisiteyi tetikler (Akut masif zehirlenmede ise pompa blokajına bağlı hiperkalemi görülür).',
        whenCorrectNote: 'Hedef: Na+/K+-ATPaz pompası • Toksisiteyi Artıranlar: Hipokalemi, Hipomagnezemi, Hiperkalsemi, Kinidin/Verapamil/Amiodaron • Antidot: Digoksin-spesifik Fab.',
        firstVsGold: 'Digoksinle İlk Ortaya Çıkan Bulgular: GİS (Bulantı/İştahsızlık) • En Sık Aritmi: Ventriküler bigemine / Atriyal taşikardi + AV blok • Spesifik Antidot: Digoksin İmmün Fab.',
        pearl: 'Hipokalemi, hipomagnezemi ve hiperkalsemi digoksin toksisitesini ARTIRIR; digoksin pozitif inotropik etkili olmasına rağmen kalp yetmezliğinde mortaliteyi AZALTMAZ (hastaneye yatışı azaltır).',
        trueStatement: 'Digoksin Na+/K+-ATPaz pompasını inhibe eder; hipokalemi ve hiperkalsemi digoksin toksisitesini artırırken spesifik antidotu digoksin immün Fab’dır.',
        falseStatement: 'Digoksin toksisitesinde miyokard duyarlılığını azaltmak için acil olarak yüksek doz intravenöz kalsiyum glukonat uygulanmalıdır.',
        falseHighlight: 'acil olarak yüksek doz intravenöz kalsiyum glukonat uygulanmalıdır',
      },
      {
        entityName: 'SGLT-2 İnhibitörleri (Empagliflozin / Dapagliflozin — Proksimal Tübül Glukozüri, Kalp Yetmezliği ve Öglisemik DKA)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Diyabeti OLMAYAN ancak ejeksiyon fraksiyonu %32 olan kronik kalp yetmezliği ve proteinürik kronik böbrek hastalığı bulunan hastaya kardiyovasküler mortaliteyi ve nefron içi basıncı azaltmak için yeni bir oral ajan ekleniyor.',
        clues: ['diyabet olmasa bile kalp yetmezliği ve KBH’da mortaliteyi azaltan ajan', 'proksimal tübülde SGLT-2 inhibisyonu', 'öglisemik diyabetik ketoasidoz ve ürogenital mantar enfeksiyonu yan etkisi'],
        questionPrompt: 'Proksimal tübülde sodyum-glukoz kotransportör-2’yi inhibe ederek hem HFrEF hem HFpEF’te mortalite/yatışı azaltan bu ilaç grubu hangisidir?',
        mechanism:
          'SGLT-2 inhibitörleri (Empagliflozin, Dapagliflozin, Kanagliflozin) böbrek proksimal tübül S1 segmentinde glukoz ve sodyum geri emilimini bloke eder; makula densaya Na+ sunumunu artırarak tübüloglomerüler geri bildirimle afferent arteriyolü kasar ve intraglomerüler basıncı düşürür.',
        whenCorrectNote: 'Proksimal tübül SGLT-2 blokajı + Kalp yetmezliği (HFrEF ve HFpEF) ile KBH’da mortalite/progresyon azalması + Yan etki: Ürogenital mikoz ve Öglisemik DKA.',
        firstVsGold: 'Etki Yeri: Proksimal Tübül (SGLT-2) • Karakteristik Yan Etkiler: Genital kandida enfeksiyonu ve Öglisemik Diyabetik Ketoasidoz.',
        pearl: 'SGLT-2 inhibitörleri (Empagliflozin, Dapagliflozin) diyabeti olmayan kalp yetmezliği hastalarında da 1. basamak standart dörtlü tedavinin (ARNI/ACEi + Beta-blokör + MRA + SGLT2i) parçasıdır!',
        trueStatement: 'SGLT-2 inhibitörleri proksimal tübülde glukoz ve sodyum emilimini inhibe eder; diyabetten bağımsız olarak kalp yetmezliği ve KBH’da fayda sağlar.',
        falseStatement: 'SGLT-2 inhibitörleri Henle kulpunun çıkan kalın kolunda etki gösterir ve en sık yan etkileri ağır hipoglisemi ile hipervolemidir.',
        falseHighlight: 'Henle kulpunun çıkan kalın kolunda etki gösterir ve en sık yan etkileri ağır hipoglisemi ile hipervolemidir',
      },
      {
        entityName: 'Metotreksat Toksisitesi (Dihidrofolat Redüktaz İnhibisyonu, Folinik Asit / Lökovorin Kurtarma ve Glukarpidaz)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Osteosarkom nedeniyle yüksek doz İV Metotreksat infüzyonu alan hastada akut böbrek hasarı, ağır mukozit ve pansitopeni gelişiyor. Normal hücreleri folat eksikliğinden korumak için kurtarma (rescue) tedavisi başlanıyor.',
        clues: ['dihidrofolat redüktaz (DHFR) inhibisyonu', 'mukozit ve miyelosüpresyon', 'normal hücreleri kurtaran aktif indirgenmiş folat türevi'],
        questionPrompt: 'Metotreksatın kemik iliği ve mukoza toksisitesini önlemek için verilen "kurtarma (rescue)" ajanı ve böbrek yetmezliğinde metotreksatı parçalayan rekombinant enzim hangisidir?',
        mechanism:
          'Metotreksat dihidrofolat redüktazı (DHFR) inhibe eder. Folinik asit (Lökovorin / N5-formil-THF) DHFR basamağını bypass ederek normal hücreleri kurtarır. Böbrek yetmezliği olan hastada aşırı yüksek plazma metotreksat düzeyini hızla yıkmak için ise rekombinant karboksipeptidaz G2 enzimi olan Glukarpidaz kullanılır.',
        whenCorrectNote: 'Hücresel Kurtarma (Rescue) Ajanı: Folinik asit (Lökovorin) • Böbrek Yetmezliğinde Plazma Metotreksatını Yıkan Enzim: Glukarpidaz.',
        firstVsGold: 'Kemik İliği/Mukoza Kurtarma: Lökovorin (Folinik asit) • Ağır Böbrek Yetmezliğinde Metotreksatı İnaftive Eden Enzim: Glukarpidaz + İdrar Alkalinizasyonu.',
        pearl: 'Metotreksat toksisitesinde Folik asit değil, DHFR enzimine ihtiyaç duymayan FOLİNİK ASİT (Lökovorin) verilir; böbrek yetmezliğinde metotreksatı doğrudan yıkan enzim ise Glukarpidaz’dır.',
        trueStatement: 'Metotreksat toksisitesinde hücresel kurtarma için lökovorin (folinik asit), böbrek yetmezliğinde plazma metotreksatını yıkmak için ise glukarpidaz kullanılır.',
        falseStatement: 'Metotreksat zehirlenmesinde spesifik antidot olarak mesna ve deksrazoksan kullanılır.',
        falseHighlight: 'spesifik antidot olarak mesna ve deksrazoksan kullanılır',
      },
    ],
  },
  // 6. ANATOMİ (Son Yıllar TUS İkizi: Brakiyal ve Lumbosakral Pleksus Sinir Yaralanmaları)
  {
    branchId: 'anatomi',
    subTopic: 'ÖSYM İkizi • Periferik Sinir Yaralanmaları, Kırık Komşulukları ve Özel Testler (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'N. Thoracicus Longus Yaralanması (M. Serratus Anterior Felci, Kanat Skapula / Winged Scapula ve Kolun 90° Üzerine Abduksiyon Kaybı)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Meme kanseri nedeniyle radikal mastektomi ve aksiller lenf nodu diseksiyonu yapılan 48 yaşındaki kadın hastada postoperatif dönemde elini duvara dayayıp ittiğinde sağ skapulanın medial kenarının arkaya doğru belirginleştiği (Kanat skapula) ve kolunu 90 derecenin üzerine kaldıramadığı saptanıyor.',
        clues: ['aksiller lenf nodu diseksiyonu sonrası', 'duvarı iterken kanat skapula (winged scapula)', 'kolun 90° üzerine abduksiyon (hiperabduksiyon) kaybı'],
        questionPrompt: 'Bu hastada yaralanan sinir ve felç olan kas eşleşmesi aşağıdakilerden hangisidir?',
        mechanism:
          'C5-C6-C7 köklerinden çıkan N. thoracicus longus (Bell siniri), M. serratus anterior’u innerve eder. Aksiller diseksiyonda yaralandığında skapula göğüs duvarına sabitlenemez (Kanat skapula) ve glenoid kavite yukarı döndürülemediği için kol 90°’nin üzerine kaldırılamaz.',
        whenCorrectNote: 'Aksiller diseksiyon + Kanat skapula (Winged scapula) + Kolun 90° üzerine abduksiyon kaybı -> N. thoracicus longus (M. serratus anterior).',
        firstVsGold: 'Kolun İlk 0–15° Abduksiyonu: M. supraspinatus (N. suprascapularis) • 15–90° Abduksiyonu: M. deltoideus (N. axillaris) • 90–180° Abduksiyonu: M. serratus anterior (N. thoracicus longus) + M. trapezius (CN XI).',
        pearl: 'Aksiller cerrahide N. thoracicus longus yaralanırsa Kanat skapula (M. serratus anterior felci); N. thoracodorsalis yaralanırsa M. latissimus dorsi felci gelişir.',
        trueStatement: 'N. thoracicus longus yaralanmasında M. serratus anterior felcine bağlı kanat skapula gelişir ve kol 90 derecenin üzerine abduksiyon yapamaz.',
        falseStatement: 'N. thoracicus longus yaralanmasında M. deltoideus felç olur ve kolun ilk 15 derecelik abduksiyonu tamamen kaybolur.',
        falseHighlight: 'M. deltoideus felç olur ve kolun ilk 15 derecelik abduksiyonu tamamen kaybolur',
      },
      {
        entityName: 'N. Axillaris Yaralanması (Humerus Cerrahi Boyun / Collum Chirurgicum Kırığı, M. Deltoideus + M. Teres Minor ve Apolet Belirtisi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Omuz üzerine düşme sonrası humerus cerrahi boyun (collum chirurgicum) kırığı ve anterior omuz çıkığı saptanan hastada kolun 15–90 derece arasındaki abduksiyonunun yapılamadığı, omuz yuvarlaklığının kaybolduğu (apolet belirtisi) ve deltoid bölge üzerinde (regimental badge alanı) duyu kaybı olduğu görülüyor.',
        clues: ['humerus cerrahi boyun (collum chirurgicum) kırığı', 'kolun 15–90° abduksiyon kaybı ve apolet belirtisi', 'omuz lateralinde duyu kaybı'],
        questionPrompt: 'Spatium quadrangulare’den A. circumflexa humeri posterior ile birlikte geçen ve bu hastada yaralanan sinir hangisidir?',
        mechanism:
          'N. axillaris (C5-C6), humerus cerrahi boynu ile komşudur ve Spatium quadrangulare’den geçer; M. deltoideus ile M. teres minor’u motor olarak innerve eder. Yaralanmasında kol 15–90° abduksiyon yapamaz, omuz düzleşir (apolet belirtisi) ve omuz dış yanında duyu kaybı olur.',
        whenCorrectNote: 'Collum chirurgicum humeri kırığı / Omuz çıkığı + Spatium quadrangulare + M. deltoideus & M. teres minor felci + Kolun 15–90° abduksiyon kaybı.',
        firstVsGold: 'Collum Chirurgicum Kırığı: N. axillaris • Corpus Humeri (Sulcus n. radialis) Kırığı: N. radialis • Epicondylus Medialis Kırığı: N. ulnaris • Suprakondiler Kırık: N. medianus.',
        pearl: 'Humerus kırıkları ve sinirleri TUS klasiğidir: Collum chirurgicum -> N. axillaris; Corpus (dişafiz) -> N. radialis; Suprakondiler -> N. medianus; Medial epikondil -> N. ulnaris.',
        trueStatement: 'Humerus cerrahi boyun kırıklarında N. axillaris yaralanır; M. deltoideus ve M. teres minor felcine bağlı olarak kol 15-90 derece abduksiyon yapamaz.',
        falseStatement: 'Humerus cerrahi boyun kırıklarında en sık N. ulnaris yaralanır ve hastada pençe el (claw hand) deformitesi gelişir.',
        falseHighlight: 'en sık N. ulnaris yaralanır ve hastada pençe el (claw hand) deformitesi gelişir',
      },
      {
        entityName: 'N. Radialis Yaralanması (Humerus Gövde Kırığı, Düşük El / Wrist Drop ve 1. Dorsal İnterosseöz Web Aralığında Duyu Kaybı)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Trafik kazası sonrası humerus orta 1/3 diyafiz (sulcus nervi radialis) kırığı gelişen hastada el bileği ve parmaklarda ekstansiyon kaybı (düşük el / wrist drop), önkol supinasyon güçsüzlüğü ve el sırtında başparmak ile işaret parmağı arasındaki 1. dorsal web aralığında duyu kaybı saptanıyor.',
        clues: ['humerus diyafiz (sulcus nervi radialis) kırığı', 'düşük el (wrist drop) deformitesi', 'el sırtında 1. web aralığında otonom duyu kaybı'],
        questionPrompt: 'Sulcus nervi radialis’te A. profunda brachii ile birlikte seyreden ve yaralanmasında düşük el gelişen bu sinir hangisidir?',
        mechanism:
          'N. radialis, Sulcus nervi radialis’te A. profunda brachii ile seyreder. Burada kırık olduğunda tüm el bileği/parmak ekstansörleri ve M. brachioradialis felç olur (Düşük el). M. triceps brachii’nin uzun ve medial başı oluğun proksimalinde dal aldığı için dirsek ekstansiyonu genellikle korunur!',
        whenCorrectNote: 'Humerus gövde kırığı + A. profunda brachii komşuluğu + Düşük el (Wrist drop) + El sırtı 1. web aralığı duyu kaybı.',
        firstVsGold: 'Düşük El (Wrist Drop): N. radialis • Pençe El (Claw Hand): N. ulnaris • Ebe Eli / Maymun Eli (Ape Hand): N. medianus.',
        pearl: 'Sulcus nervi radialis kırığında N. radialis yaralanır ve Düşük El gelişir; ancak M. triceps brachii dallarını oluğa girmeden önce verdiği için dirsek ekstansiyonu bozulmaz!',
        trueStatement: 'Humerus gövde kırıklarında sulcus nervi radialis içinde N. radialis yaralanır, düşük el gelişir ve el sırtı 1. web aralığında duyu kaybı olur.',
        falseStatement: 'Sulcus nervi radialis düzeyindeki humerus kırıklarında dirsek fleksiyonu tamamen kaybolurken el bileği ekstansiyonu sağlam kalır.',
        falseHighlight: 'dirsek fleksiyonu tamamen kaybolurken el bileği ekstansiyonu sağlam kalır',
      },
      {
        entityName: 'N. Peroneus Communis (N. Fibularis Communis — Caput Fibulae Kırığı, Düşük Ayak / Stepaj Yürüyüşü ve Ayağın Eversiyon/Dorsifleksiyon Kaybı)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Futbol maçında bacağın dış yanına (fibula başı / collum fibulae) darbe alan sporcuda ayağını yukarı kaldıramama (dorsifleksiyon kaybı), ayağı dışa çevirememe (eversiyon kaybı), yürürken ayağını sürüklememek için dizini yükseğe kaldırarak yürüme (stepaj yürüyüşü) ve ayak sırtında duyu kaybı saptanıyor.',
        clues: ['fibula başı/boynu (caput/collum fibulae) kırığı', 'ayak dorsifleksiyon ve eversiyon kaybı', 'düşük ayak (foot drop) ve stepaj yürüyüşü'],
        questionPrompt: 'Alt ekstremitede en sık yaralanan ve hasarında hem dorsifleksiyon (derin dal) hem eversiyon (yüzeyel dal) kaybı gelişen bu sinir hangisidir?',
        mechanism:
          'N. peroneus communis, collum fibulae’yi yüzeyel olarak dolanır ve N. peroneus profundus (anterior kompartman: dorsifleksiyon ve 1. web aralığı duyusu) ile N. peroneus superficialis’e (lateral kompartman: eversiyon ve ayak sırtı duyusu) ayrılır.',
        whenCorrectNote: 'Caput/Collum fibulae kırığı + Düşük ayak (Stepaj yürüyüşü) + Dorsifleksiyon (N. peroneus profundus) ve Eversiyon (N. peroneus superficialis) kaybı.',
        firstVsGold: 'Dorsifleksiyon + 1. Web Duyusu: N. peroneus profundus • Eversiyon + Ayak Sırtı Duyusu: N. peroneus superficialis • Plantar Fleksiyon + İnversiyon: N. tibialis.',
        pearl: 'Alt ekstremitede en sık yaralanan sinir N. peroneus communis’tir (Collum fibulae kırığı / sıkı alçı); hasarında Düşük Ayak (Foot drop) ve stepaj yürüyüşü görülür.',
        trueStatement: 'Fibula boynu kırıklarında N. peroneus communis yaralanır; hastada ayak dorsifleksiyon ve eversiyon kaybı ile düşük ayak (stepaj yürüyüşü) gelişir.',
        falseStatement: 'N. peroneus communis yaralanmasında ayak plantar fleksiyonu kaybolur ve hasta parmak uçlarında yükselemez.',
        falseHighlight: 'ayak plantar fleksiyonu kaybolur ve hasta parmak uçlarında yükselemez',
      },
      {
        entityName: 'N. Gluteus Superior Yaralanması (M. Gluteus Medius / Minimus Felci ve Karşı Tarafa Pelvis Düşmesi — Trendelenburg Belirtisi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Kalçanın üst-iç kadranına hatalı intramüsküler enjeksiyon yapılan hastada yürüme sırasında sağ ayağı üzerinde tek ayakla durduğunda pelvisin desteklenmeyen SOL (karşı) tarafa doğru düştüğü (pozitif Trendelenburg belirtisi) ve ördekvari yürüyüş geliştiği görülüyor.',
        clues: ['hatalı gluteal İM enjeksiyon', 'sağ ayak üzerinde dururken pelvisin SOL (karşı) tarafa düşmesi', 'Trendelenburg belirtisi (+)'],
        questionPrompt: 'Foramen suprapiriforme’den geçen ve yaralanmasında karşı tarafa pelvis düşmesine (Trendelenburg) yol açan bu sinir ve kas ikilisi hangisidir?',
        mechanism:
          'N. gluteus superior (L4-S1), Foramen suprapiriforme’den geçen tek yapıdır (A./V. glutea superior ile) ve M. gluteus medius, M. gluteus minimus ile M. tensor fasciae latae’yi innerve eder. Sağ N. gluteus superior felcinde sağ ayak üzerinde durulduğunda sol (karşı) pelvis aşağı düşer.',
        whenCorrectNote: 'Foramen suprapiriforme + M. gluteus medius & minimus felci + Sağlam ayak üzerinde dururken karşı pelvisin düşmesi (Trendelenburg +).',
        firstVsGold: 'Foramen Suprapiriforme’den Geçen: N. gluteus superior (M. gluteus medius/minimus -> Abduksiyon & İç rotasyon) • Foramen İnfrapiriforme: N. gluteus inferior (M. gluteus maximus -> Ekstansiyon).',
        pearl: 'TUS Tuzağı: Sağ N. gluteus superior yaralandığında hasta SAĞ ayak üzerinde dururken pelvis SOL (karşı/desteksiz) tarafa düşer!',
        trueStatement: 'Sağ N. gluteus superior yaralanmasında M. gluteus medius ve minimus felç olur; hasta sağ ayağı üzerinde durduğunda pelvis sol (karşı) tarafa düşer.',
        falseStatement: 'N. gluteus superior yaralanmasında M. gluteus maximus felç olur ve hasta oturur pozisyondan ayağa kalkamaz.',
        falseHighlight: 'M. gluteus maximus felç olur ve hasta oturur pozisyondan ayağa kalkamaz',
      },
    ],
  },
  // 7. FİZYOLOJİ (Son Yıllar TUS İkizi: Nefron Segmentleri, Tubulopatiler ve Reseptör Fizyolojisi)
  {
    branchId: 'fizyoloji',
    subTopic: 'ÖSYM İkizi • Nefron Segmentleri, Taşıyıcı Proteinler ve Tubulopati Sendromları (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Henle Kulpunun Çıkan Kalın Kolu (NKCC2 Taşıyıcısı, Suya Geçirimsiz "Dilüsyon Segmenti", Furosemid Hedefi ve Bartter Sendromu)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Büyüme geriliği, poliüri, polidipsi, hipokalemik metabolik alkaloz, hiperkalsiüri ve nefrokalsinozis saptanan normotansif bir çocukta Henle kulpunun çıkan kalın kolundaki apikal Na+-K+-2Cl- (NKCC2) kotransportöründe fonksiyon kaybı mutasyonu tespit ediliyor.',
        clues: ['Henle çıkan kalın kol NKCC2 mutasyonu', 'hipokalemik metabolik alkaloz + hiperkalsiüri (Bartter)', 'suya geçirimsiz dilüsyon segmenti'],
        questionPrompt: 'Suya geçirimsiz olduğu için tübül sıvısını hipoozmotik hale getiren bu nefron segmenti, hedef diüretiği ve genetik sendromu hangisidir?',
        mechanism:
          'Henle kulpunun çıkan kalın kolu suya geçirimsizdir (Dilüsyon segmenti); apikal NKCC2 pompası Na+, K+ ve 2Cl- emer, lümende oluşan pozitif potansiyel ise paraselüler yoldan Mg+2 ve Ca+2 geri emilimini sağlar. Furosemid burayı bloke eder; kalıtsal defekti Bartter sendromudur (Hiperkalsiüri vardır).',
        whenCorrectNote: 'Henle çıkan kalın kol: NKCC2 + Suya geçirimsiz (Dilüsyon segmenti) + Paraselüler Mg+2/Ca+2 emilimi + Furosemid hedefi + Bartter sendromu (Hiperkalsiüri).',
        firstVsGold: 'Bartter Sendromu: Henle Çıkan Kalın Kol (NKCC2) defekti -> Hiperkalsiüri (Furosemid etkisi) • Gitelman Sendromu: Distal Tübül (NCC) defekti -> Hipokalsiüri (Tiyazid etkisi).',
        pearl: 'Vücutta Mg+2’un en fazla (%60) geri emildiği yer Proksimal tübül değil, Henle kulpunun ÇIKAN KALIN KOLUDUR (paraselüler yolla / claudin-16/parakellin)!',
        trueStatement: 'Henle kulpunun çıkan kalın kolu suya geçirimsiz dilüsyon segmentidir; NKCC2 taşıyıcısı furosemid ile inhibe olur ve genetik defektinde Bartter sendromu gelişir.',
        falseStatement: 'Henle kulpunun çıkan kalın kolu ADH varlığında suya en yüksek geçirgenlik gösteren nefron segmentidir.',
        falseHighlight: 'ADH varlığında suya en yüksek geçirgenlik gösteren nefron segmentidir',
      },
      {
        entityName: 'Distal Kıvrımlı Tübül Erken Kısmı (Na+-Cl- / NCC Kotransportörü, Tiyazid Hedefi, PTH ile Kalsiyum Emilimi ve Gitelman Sendromu)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Kas krampları ve halsizlik ile başvuran genç erişkin hastada normotansiyon, hipokalemik metabolik alkaloz, belirgin hipomagnezemi ve idrarda kalsiyum atılımında azalma (hipokalsiüri) saptanıyor.',
        clues: ['hipokalemik metabolik alkaloz + ağır hipomagnezemi', 'idrarda kalsiyum azlığı (hipokalsiüri)', 'distal tübül Na+-Cl- (NCC) kotransportör defekti'],
        questionPrompt: 'Tiyazid grubu diüretiklerin etkisini taklit eden, hipokalsiüri ile Bartter sendromundan ayrılan bu tablo ve etkilenen taşıyıcı hangisidir?',
        mechanism:
          'Distal kıvrımlı tübülde apikal Na+-Cl- (NCC) kotransportörü bulunur. Tiyazidler NCC’yi inhibe ettiğinde hücre içi Na+ düşer, bazolateral Na+/Ca+2 değiş-tokuşçusu hızlanır ve apikal TRPV5 kanalından (PTH etkisiyle) Ca+2 geri emilimi ARTAR (Hipokalsiüri). Genetik NCC defekti Gitelman sendromudur.',
        whenCorrectNote: 'Distal tübül: Na+-Cl- (NCC) + PTH bağımlı Ca+2 geri emilimi + Tiyazid hedefi + Gitelman sendromu (Hipokalsiüri + Ağır hipomagnezemi).',
        firstVsGold: 'PTH’nın Ca+2 Emilimini Artırdığı Yer: Distal Kıvrımlı Tübül • PTH’nın Fosfat Emilimini İnhibe Ettiği Yer: Proksimal Tübül.',
        pearl: 'Tiyazid diüretikler ve Gitelman sendromu HİPOKALSİÜRİ (kanda hiperkalsemi) yapar; bu nedenle idrar kalsiyum taşı olan hastalarda tiyazidler koruyucu olarak kullanılır!',
        trueStatement: 'Distal kıvrımlı tübüldeki Na+-Cl- (NCC) taşıyıcısı tiyazidlerce inhibe edilir; genetik defektinde hipokalsiüri ve hipomagnezemi ile giden Gitelman sendromu görülür.',
        falseStatement: 'Tiyazid diüretikler distal tübülde kalsiyum geri emilimini bloke ederek ağır hiperkalsiüri ve böbrek taşı oluşumuna yol açar.',
        falseHighlight: 'kalsiyum geri emilimini bloke ederek ağır hiperkalsiüri ve böbrek taşı oluşumuna yol açar',
      },
      {
        entityName: 'Toplayıcı Kanallar Esas (Principal) Hücre (ENaC Kanalı, Aldosteron Etkisi, Amilorid ve Liddle Sendromu)',
        patientVignette:
          '[2022 TUS Konsept İkizi] 16 yaşında bir hastada ağır hipertansiyon, hipokalemi ve metabolik alkaloz saptanıyor; ancak plazma renin aktivitesi ve plazma aldosteron düzeylerinin her ikisinin de ileri derecede BASKILANMIŞ (düşük) olduğu görülüyor. Amilorid tedavisine dramatik yanıt alınıyor.',
        clues: ['hipertansiyon + hipokalemi + metabolik alkaloz', 'renin DÜŞÜK ve aldosteron DÜŞÜK (Psödohiperaldosteronizm)', 'toplayıcı kanal ENaC gain-of-function mutasyonu'],
        questionPrompt: 'Toplayıcı kanal esas (principal) hücrelerindeki epiteliyal sodyum kanalının (ENaC) aşırı aktivasyonuyla gelişen bu sendrom hangisidir?',
        mechanism:
          'Kortikal toplayıcı tübüldeki Esas (Principal) hücreler apikal ENaC kanalından Na+ emer ve ROMK kanalından K+ sekrete eder (Aldosteron her ikisini de artırır). ENaC kanalının yıkılamadığı aktivasyon mutasyonunda Liddle sendromu (Psödohiperaldosteronizm) gelişir; Spironolakton etkisizdir, tedavide ENaC blokörü Amilorid/Triamteren verilir.',
        whenCorrectNote: 'Esas (Principal) hücre: ENaC ile Na+ emilimi, K+ sekresyonu + Aldosteron ve ADH (AQP-2) hedefi + Liddle sendromunda ENaC aşırı aktiftir (Amilorid ile tedavi).',
        firstVsGold: 'Conn Sendromu: Aldosteron Yüksek, Renin Düşük (Tedavi: Spironolakton) • Liddle Sendromu: Aldosteron Düşük, Renin Düşük (Tedavi: Amilorid / Triamteren).',
        pearl: 'Liddle sendromunda aldosteron zaten düşüktür, bu yüzden Spironolakton İŞE YARAMAZ; tedavide doğrudan ENaC kanalını kapatan Amilorid veya Triamteren kullanılır!',
        trueStatement: 'Toplayıcı kanallardaki esas (principal) hücrelerde ENaC kanalının kalıtsal hiperaktivasyonu Liddle sendromuna yol açar ve tedavisinde amilorid kullanılır.',
        falseStatement: 'Liddle sendromunda plazma aldosteron düzeyi çok yüksek olup ilk tercih tedavi aldosteron reseptör antagonisti spironolaktondur.',
        falseHighlight: 'plazma aldosteron düzeyi çok yüksek olup ilk tercih tedavi aldosteron reseptör antagonisti spironolaktondur',
      },
      {
        entityName: 'Proksimal Kıvrımlı Tübül (%100 Glukoz ve Aminoasit Emilimi, %65 İzoozmotik Emilim, Karbonik Anhidraz ve Fanconi Sendromu)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Multipl miyelom (hafif zincir nefropatisi) tanılı bir hastada kan şekeri normal (88 mg/dL) olmasına rağmen idrarda glukozüri, generalize aminoasidüri, fosfatüri, ürikozüri ve bikarbonat kaybına bağlı normal anyon açıklı (hiperkloremik) metabolik asidoz (Tip 2 RTA) saptanıyor.',
        clues: ['normoglisemik glukozüri + aminoasidüri + fosfatüri', 'bikarbonat kaybı (Tip 2 RTA)', 'proksimal tübül yaygın transport bozukluğu'],
        questionPrompt: 'Glukoz ve aminoasitlerin %100’ünün geri emildiği bu nefron segmenti ve yaygın işlev bozukluğuna verilen ad hangisidir?',
        mechanism:
          'Proksimal tübül filtrelenen glukoz ve aminoasitlerin %100’ünü, HCO3-’ün %85’ini ve su/Na+’un %65’ini İZOOZMOTİK olarak geri emer (tübül sıvısı ozmolalitesi plazmaya eşittir: 300 mOsm/L). Yaygın proksimal tübül disfonksiyonuna Fanconi sendromu (veya Tip 2 RTA) denir.',
        whenCorrectNote: 'Proksimal tübül: %100 Glukoz/Aminoasit + %85 HCO3- + %65 Na+/Su izoozmotik emilim + Asetazolamid ve SGLT2i hedefi + Bozukluğunda Fanconi sendromu.',
        firstVsGold: 'Çocukta Fanconi Sendromu En Sık Kalıtsal Neden: Sistinozis • Erişkinde En Sık Edinsel Neden: Multipl Miyelom, Tenofovir, İfosfamid, Kurşun.',
        pearl: 'Proksimal tübül boyunca su ve solütler eşit oranda (izoozmotik) emildiği için proksimal tübül sonunda sıvı ozmolalitesi değişmez (~300 mOsm/L kalır)!',
        trueStatement: 'Proksimal tübül glukoz ve aminoasitlerin tamamını, su ve sodyumun ise %65’ini izoozmotik olarak geri emer; yaygın bozukluğuna Fanconi sendromu denir.',
        falseStatement: 'Proksimal tübül suya tamamen geçirimsiz olduğundan tübül sonuna gelindiğinde sıvı ozmolalitesi 50 mOsm/L’ye düşer.',
        falseHighlight: 'suya tamamen geçirimsiz olduğundan tübül sonuna gelindiğinde sıvı ozmolalitesi 50 mOsm/L’ye düşer',
      },
      {
        entityName: 'Toplayıcı Kanallar Alfa (Tip A) İnterkale Hücre (H+-ATPaz / H+-K+-ATPaz ile Asit Sekresyonu ve Tip 1 Distal RTA)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Sjögren sendromu olan 38 yaşındaki kadın hastada hipokalemi, hiperkloremik (normal anyon açıklı) metabolik asidoz ve tekrarlayan kalsiyum fosfat böbrek taşları saptanıyor. Ağır metabolik asidoza rağmen idrar pH’sının 5.5’in altına düşürülemediği (idrar pH: 6.4) görülüyor.',
        clues: ['ağır asidoza rağmen idrar pH > 5.5', 'hipokalemi + nefrokalsinozis / kalsiyum fosfat taşı', 'alfa-interkale hücre H+-ATPaz sekresyon kusuru'],
        questionPrompt: 'Toplayıcı kanallardaki Alfa (Tip A) interkale hücrelerin lümene H+ sekrete edememesi sonucu gelişen bu tablo hangisidir?',
        mechanism:
          'Toplayıcı kanaldaki Alfa (Tip A) interkale hücreler apikal H+-ATPaz ve H+/K+-ATPaz pompalarıyla idrara H+ (asit) salgılar ve K+ geri emer. Bu pompaların bozukluğunda (Sjögren, Amfoterisin B) Tip 1 (Distal) Renal Tübüler Asidoz gelişir; idrar asidifiye edilemez (idrar pH > 5.5) ve hipokalemi ile böbrek taşı görülür.',
        whenCorrectNote: 'Alfa (Tip A) interkale hücre: Apikal H+-ATPaz ve H+/K+-ATPaz ile H+ sekresyonu + Bozukluğunda Tip 1 (Distal) RTA (İdrar pH > 5.5, hipokalemi, taş).',
        firstVsGold: 'Tip 1 (Distal) RTA: İdrar pH > 5.5, Hipokalemi, Nefrokalsinozis • Tip 2 (Proksimal) RTA: İdrar pH < 5.5, Hipokalemi • Tip 4 RTA: HİPERKALEMİ (Aldosteron eksikliği/direnci).',
        pearl: 'RTA ayırıcı tanısı: Tip 1 ve Tip 2 RTA HİPOKALEMİ yaparken, Tip 4 RTA HİPERKALEMİ yapar! İdrar pH’sının <5.5’e inemediği tek tip Tip 1 (Distal) RTA’dır.',
        trueStatement: 'Toplayıcı kanallardaki alfa-interkale hücreler H+-ATPaz ile asit sekrete eder; bozukluğunda idrar pH’sının 5.5 üzerinde kaldığı Tip 1 (Distal) RTA gelişir.',
        falseStatement: 'Tip 1 distal renal tübüler asidozda karakteristik olarak ağır hiperkalemi görülür ve idrar pH’sı daima 4.5’in altındadır.',
        falseHighlight: 'karakteristik olarak ağır hiperkalemi görülür ve idrar pH’sı daima 4.5’in altındadır',
      },
    ],
  },
  // 8. HİSTOLOJİ & EMBRİYOLOJİ (Son Yıllar TUS İkizi: Farengeal Keseler, Nöral Krest ve Kan-Doku Bariyerleri)
  {
    branchId: 'histoloji',
    subTopic: 'ÖSYM İkizi • Farengeal Arkus/Kese Türevleri, Nöral Krest ve Sertoli Hücresi (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: '3. ve 4. Farengeal Keseler (Timus + İnferior/Süperior Paratiroidler ve DiGeorge Sendromu — 22q11.2 Delesyonu)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Yenidoğan bir bebekte hipokalsemik tetani, akciğer grafisinde timus gölgesinin yokluğu (T hücre yetmezliği), yarık damak ve trunkus arteriyozus saptanıyor. Genetik incelemede 22q11.2 mikrodelesyonu ve nöral krest göç kusuru tespit ediliyor.',
        clues: ['timus aplazisi + paratiroid agenezisi (hipokalsemi)', 'konotrunkal kalp anomalisi (Trunkus arteriyozus / Fallot)', '3. ve 4. farengeal kese gelişim kusuru (DiGeorge)'],
        questionPrompt: 'Normal embriyolojide Timus ile İnferior Paratiroid bezlerinin köken aldığı farengeal kese hangisidir?',
        mechanism:
          '3. Farengeal keseden Timus ve İNFERİOR paratiroid bezleri (timusla birlikte aşağı göç ettiği için 3. keseden çıkan paratiroid daha aşağı yerleşir!); 4. Farengeal keseden ise SÜPERİOR paratiroid bezleri ve Ultimobrankiyal cisim gelişir. 3. ve 4. kese gelişim kusurunda DiGeorge sendromu oluşur.',
        whenCorrectNote: '3. Farengeal Kese: Timus + İnferior Paratiroid • 4. Farengeal Kese: Süperior Paratiroid + Ultimobrankiyal cisim • Kusuru: DiGeorge sendromu (22q11.2).',
        firstVsGold: '1. Kese: Orta kulak boşluğu & Östaki borusu • 2. Kese: Tonsilla palatina • 3. Kese: Timus & İnferior Paratiroid • 4. Kese: Süperior Paratiroid.',
        pearl: 'Embriyoloji klasiği: 3. keseden çıkan paratiroid timusla birlikte aşağı çekildiği için İNFERİOR paratiroid olur; 4. keseden çıkan ise SÜPERİOR paratiroid olur!',
        trueStatement: '3. farengeal keseden timus ve inferior paratiroid bezleri, 4. farengeal keseden ise süperior paratiroid bezleri gelişir; gelişim kusuru DiGeorge sendromudur.',
        falseStatement: 'Timus ve paratiroid bezleri 1. farengeal yarık ektoderminden gelişir.',
        falseHighlight: '1. farengeal yarık ektoderminden gelişir',
      },
      {
        entityName: 'Sertoli Hücresi (Zonula Occludens ile Kan-Testis Bariyeri, Anti-Müllerian Hormon / AMH, İnhibin-B ve Androjen Bağlayıcı Protein)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Seminifer tübül bazal membranına oturan, komşu hücrelerle sıkı bağlantılar (zonula occludens) kurarak bazal ve adluminal kompartmanları ayıran ve haploid germ hücrelerini otoimmün saldırıdan koruyan destek hücresi inceleniyor.',
        clues: ['zonula occludens ile kan-testis bariyeri', 'FSH reseptörü taşıyan tübül içi hücre', 'Anti-Müllerian Hormon (AMH), İnhibin-B ve ABP sentezi'],
        questionPrompt: 'Erkek fetüste Müller kanalının gerilemesini sağlayan AMH’yi salgılayan ve kan-testis bariyerini oluşturan bu hücre hangisidir?',
        mechanism:
          'Sertoli hücreleri FSH uyarısıyla Androjen Bağlayıcı Protein (ABP), aromataz ve İnhibin-B (FSH’yı negatif feedback ile baskılar) üretir; fetal hayatta ise Anti-Müllerian Hormon (AMH) salgılayarak uterus/tuba gelişimini önler. Birbirlerine Zonula occludens (oklüdens) ile bağlanarak Kan-Testis bariyerini oluştururlar.',
        whenCorrectNote: 'Sertoli: FSH hedefi + Kan-testis bariyeri (Zonula occludens) + AMH, İnhibin-B, ABP sentezi ve fagositoz • Leydig: LH hedefi + Testosteron sentezi.',
        firstVsGold: 'Kan-Testis Bariyerini Yapan Bağlantı: Sertoli-Sertoli arası Zonula Occludens • Bazal Kompartmanda Kalan Hücreler: Spermatogonyum ve Leptoten öncesi Primer Spermatosit.',
        pearl: 'Kan-testis bariyeri damar endoteli tarafından değil, doğrudan komşu SERTOLİ hücreleri arasındaki Zonula occludens (sıkı bağlantı) tarafından oluşturulur!',
        trueStatement: 'Sertoli hücreleri aralarındaki zonula occludens bağlantılarıyla kan-testis bariyerini oluşturur ve AMH, İnhibin-B ile ABP salgılar.',
        falseStatement: 'Kan-testis bariyeri interstisyel alandaki Leydig hücreleri arasındaki desmozom bağlantıları tarafından oluşturulur.',
        falseHighlight: 'interstisyel alandaki Leydig hücreleri arasındaki desmozom bağlantıları tarafından oluşturulur',
      },
      {
        entityName: 'Nöral Krest (Krista) Türevleri (Adrenal Medulla, Parafolliküler C Hücresi, Melanosit, Schwann Hücresi ve Auerbach/Meissner Pleksusu)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Yenidoğan bir bebekte mekonyum çıkışında gecikme, batın distansiyonu ve safralı kusma saptanıyor. Rektal biyopside submukoza (Meissner) ve muskularis propriadaki (Auerbach) parasempatik gangliyon hücrelerinin yokluğu (Agangliyonik megakolon / Hirschsprung hastalığı) görülüyor.',
        clues: ['Auerbach ve Meissner pleksuslarında gangliyon yokluğu (Hirschsprung)', 'RET proto-onkogen mutasyonu', 'embriyonik nöroektodermal hücre göç kusuru'],
        questionPrompt: 'Hirschsprung hastalığında bağırsak duvarına göçü bozulan; ayrıca melanosit, Schwann hücresi, adrenal medulla ve tiroid C hücrelerini oluşturan embriyonik yapı hangisidir?',
        mechanism:
          'Nöral krest (4. germ yaprağı); periferik/enterik otonom gangliyonlar (Hirschsprung’da göç edemez), Schwann hücreleri, melanositler, adrenal medulla kromaffin hücreleri, tiroid parafolliküler C hücreleri (kalsitonin), odontoblastlar, pia-araknoid mater ve aortikopulmoner septumu oluşturur.',
        whenCorrectNote: 'Nöral krest türevleri: Enterik gangliyonlar (Hirschsprung), Adrenal medulla, Melanosit, Schwann, Odontoblast, Parafolliküler C hücresi, Konotrunkal septum.',
        firstVsGold: 'Nöral Krest Kökenli Glia: Schwann ve Satellit hücresi • Nöral Tüp Kökenli Glia: Oligodendrosit, Astrosit, Ependim • Mezoderm Kökenli Glia: Mikroglia.',
        pearl: 'Tiroidin follikül epitel hücreleri endodermden, kalsitonin salgılayan Parafolliküler C hücreleri ise NÖRAL KREST’ten (ultimobrankiyal cisim yoluyla) köken alır!',
        trueStatement: 'Enterik sinir sistemi gangliyonları, adrenal medulla, melanositler, Schwann hücreleri ve tiroid parafolliküler C hücreleri nöral krest kökenlidir.',
        falseStatement: 'Merkezi sinir sistemindeki oligodendrositler ve mikroglia hücreleri doğrudan nöral krestten köken alır.',
        falseHighlight: 'oligodendrositler ve mikroglia hücreleri doğrudan nöral krestten köken alır',
      },
      {
        entityName: 'Tip II Pnömosit (Sürfaktan Sentezi — Dipalmitoilfosfatidilkolin / Lesitin, Lameller Cisimcikler ve Tip I Pnömosit Rejenerasyonu)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Alveol duvarında kübik şekilli, serbest yüzeyinde mikrovilluslar bulunan ve sitoplazmasında elektron mikroskobisinde soğan zarı görünümünde osmiyofilik lameller cisimcikler içeren hücreler inceleniyor.',
        clues: ['sitoplazmada osmiyofilik lameller cisimcikler', 'dipalmitoilfosfatidilkolin (sürfaktan) sentezi', 'hasar sonrası hem kendini hem Tip I pnömositi yenileyen kök hücre'],
        questionPrompt: 'Alveol yüzey gerilimini düşüren sürfaktanı sentezleyen ve alveol hasarında Tip I pnömositlere dönüşebilen bu hücre hangisidir?',
        mechanism:
          'Tip II pnömositler (septal hücreler) sitoplazmalarındaki lameller cisimciklerde sürfaktan (ana lipidi: Dipalmitoilfosfatidilkolin / Lesitin) sentezler ve alveol epitelinin öncül (kök) hücresi olarak bölünüp hem kendisini hem de gaz değişimi yapan yassı Tip I pnömositleri yeniler.',
        whenCorrectNote: 'Tip II Pnömosit: Lameller cisimcik + Sürfaktan (Dipalmitoilfosfatidilkolin) + Alveol epitel rejenerasyonu (Tip I’e dönüşür) • Sürfaktanı yıkıp temizleyen: Alveoler makrofaj.',
        firstVsGold: 'Kan-Hava Bariyeri (Gaz Değişimi): Tip I Pnömosit (%95 yüzey alanı, bölünemez) • Sürfaktan & Rejenerasyon: Tip II Pnömosit (Lameller cisimcik).',
        pearl: 'Sürfaktan sentezini kortizol ve tiroid hormonları ARTIRIR, fetal hiperinsülinemi (diyabetik anne bebeği) ise sürfaktan sentezini BASKILAR ve RDS riskini artırır!',
        trueStatement: 'Tip II pnömositler lameller cisimciklerinde sürfaktan sentezler ve alveol hasarında bölünerek Tip I pnömositleri yeniler.',
        falseStatement: 'Tip I yassı pnömositler yüksek mitotik aktiviteye sahip olup sürfaktan sentezinden sorumludur.',
        falseHighlight: 'yüksek mitotik aktiviteye sahip olup sürfaktan sentezinden sorumludur',
      },
      {
        entityName: 'İnce Bağırsak Paneth Hücresi (Lieberkühn Kript Tabanı, Eozinofilik Granüller, Lizozim / Alfa-Defensin ve Çinko)',
        patientVignette:
          '[2023 TUS Konsept İkizi] İnce bağırsak histolojik kesitinde Lieberkühn kriptlerinin en tabanında yerleşmiş, apikal sitoplazmasında büyük asidofilik (eozinofilik) zimojen-benzeri granüller içeren piramidal hücreler görülüyor.',
        clues: ['Lieberkühn kriptlerinin tabanında yerleşim', 'apikal büyük eozinofilik granüller', 'lizozim, alfa-defensin (kriptidin) ve TNF-alfa salgısı'],
        questionPrompt: 'Bağırsak florasını düzenleyen antimikrobiyal peptidleri salgılayan ve kök hücre nişini koruyan bu uzun ömürlü hücre hangisidir?',
        mechanism:
          'Paneth hücreleri ince bağırsak (özellikle ileum) Lieberkühn kriptlerinin tabanında bulunur (normal kolonda bulunmaz!). Apikal eozinofilik granüllerinde Lizozim, Alfa-defensinler (kriptidin), Fosfolipaz A2 ve Çinko (Zn+2) depolayarak doğal bağışıklık sağlar.',
        whenCorrectNote: 'Lieberkühn kript tabanı + Büyük apikal eozinofilik granüller + Lizozim & Alfa-defensin salgısı + Çinko içeriği (Paneth hücresi).',
        firstVsGold: 'Paneth Hücresi: Kript tabanında eozinofilik granül (Lizozim/Defensin) • M (Mikrofold) Hücresi: Peyer plakları üzerinde antijen endositozu/transsitozu.',
        pearl: 'Bağırsak epitel hücreleri ortalama 3–5 günde yenilenirken, kript tabanındaki Paneth hücreleri en uzun ömürlü (~30–60 gün) hücrelerdir ve NOD2 mutasyonuyla Crohn hastalığı patogenezinde rol oynar.',
        trueStatement: 'Paneth hücreleri ince bağırsak Lieberkühn kriptlerinin tabanında bulunur; apikal eozinofilik granüllerinden lizozim ve alfa-defensin salgılar.',
        falseStatement: 'Paneth hücreleri yalnızca mide fundusunda bulunur ve intrinsik faktör ile hidroklorik asit salgılar.',
        falseHighlight: 'yalnızca mide fundusunda bulunur ve intrinsik faktör ile hidroklorik asit salgılar',
      },
    ],
  },
  // 9. PEDİATRİ (Son Yıllar TUS İkizi: Yenidoğan Solunum Acilleri, Vaskülitler ve Kardiyoloji)
  {
    branchId: 'pediatri',
    subTopic: 'ÖSYM İkizi • Kawasaki, HSP, Yenidoğan Solunum Acilleri ve Pediatrik Sendromlar (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Kawasaki Hastalığı (≥5 Gün Ateş, Koroner Arter Anevrizması ve İVİG + Aspirin Tedavisi)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 3 yaşında erkek çocuk 6 gündür düşmeyen ateş, iki taraflı eksüdasız konjonktival hiperemi, çilek dili ve dudaklarda çatlama, tek taraflı servikal lenfadenopati (>1.5 cm) ve el-ayak sırtında ödem/eritem ile getiriliyor. Laboratuvarda CRP yüksekliği ve subakut dönemde 750.000/mm³ trombositoz saptanıyor.',
        clues: ['≥5 gün süren ateş + eksüdasız bilateral konjonktivit', 'çilek dili + servikal LAP + ekstremite ödemi/soyulması', 'koroner arter anevrizması riski'],
        questionPrompt: 'Orta çaplı arterleri tutan bu çocukluk çağı vaskülitinde en korkulan kardiyak komplikasyonu önlemek için verilmesi gereken birinci basamak tedavi hangisidir?',
        mechanism:
          'Kawasaki hastalığı (mukokütanöz lenf nodu sendromu) orta çaplı arterleri, özellikle koroner arterleri tutan nekrotizan vaskülittir. İlk 10 gün içinde yüksek doz İntravenöz İmmünglobulin (İVİG) + Aspirin verilmesi koroner arter anevrizması riskini %25’ten <%5’e düşürür.',
        whenCorrectNote: '≥5 gün ateş + 4/5 kriter (eksüdasız konjonktivit, oral mukoza/çilek dili, polimorf döküntü, ekstremite ödemi/deskuamasyonu, servikal LAP) + Koroner anevrizma + İVİG + Aspirin.',
        firstVsGold: 'En Önemli Komplikasyon: Koroner Arter Anevrizması (Tanı/Takip: Ekokardiyografi) • Birinci Basamak Tedavi: Tek doz Yüksek Doz İVİG (2 g/kg) + Aspirin.',
        pearl: 'Çocuklarda Reye sendromu riski nedeniyle viral enfeksiyonlarda aspirin kontrendikedir; ancak Kawasaki hastalığı ve Akut Romatizmal Ateş çocukta ASPİRİN kullanılan iki temel istisnadır!',
        trueStatement: 'Kawasaki hastalığında en önemli komplikasyon koroner arter anevrizması olup bunu önleyen temel tedavi yüksek doz İVİG ve aspirindir.',
        falseStatement: 'Kawasaki hastalığında bilateral pürülan konjonktivit ve ağır trombositopeni tanı koydurucu ana kriterlerdir.',
        falseHighlight: 'bilateral pürülan konjonktivit ve ağır trombositopeni tanı koydurucu ana kriterlerdir',
      },
      {
        entityName: 'Henoch-Schönlein Purpurası / IgA Vasküliti (Normal Trombositli Palpabl Purpura, Artralji, İnvajinasyon ve Böbrek Tutulumu)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Üst solunum yolu enfeksiyonundan 10 gün sonra 6 yaşındaki çocukta kalça ve alt ekstremite ekstansör yüzlerinde basmakla solmayan kabarık (palpabl) purpuralar, diz ve ayak bileklerinde artrit, kolik tarzda karın ağrısı ve mikroskopik hematüri saptanıyor. Trombosit sayısı 340.000/mm³ ve koagülasyon testleri normal bulunuyor.',
        clues: ['alt ekstremite ve kalçada palpabl purpura', 'TROMBOSİT SAYISI NORMAL', 'artralji + kolik karın ağrısı (invajinasyon) + hematüri'],
        questionPrompt: 'Çocukluk çağının bu en sık vaskülitinde uzun dönem prognozu belirleyen ana organ tutulumu ve GİS’te en sık yol açtığı cerrahi komplikasyon hangisidir?',
        mechanism:
          'HSP (IgA vasküliti), küçük damarlarda IgA1 ve C3 birikimiyle giden lökositoklastik vaskülittir; trombosit sayısı normal veya artmıştır! En sık GİS cerrahi komplikasyonu ileoileal İnvajinasyon (intusepsiyon), uzun dönem prognozu ve mortaliteyi belirleyen tek faktör ise Böbrek tutulumudur (HSP nefriti).',
        whenCorrectNote: 'Normal trombositli palpabl purpura (%100 zorunlu kriter) + Artrit + GİS (ileoileal invajinasyon) + Uzun dönem prognozu belirleyen: Böbrek tutulumu.',
        firstVsGold: 'Tanıda Zorunlu Kriter: Trombositopeni olmaksızın Palpabl Purpura/Peteşi • Uzun Dönem Prognozu Belirleyen: Renal Tutulum (Biyopsi: Mezangiyal IgA birikimi).',
        pearl: 'Klasik invajinasyon ileoçekal iken, HSP’ye bağlı gelişen invajinasyon tipik olarak İLEOİLEAL yerleşimlidir! Uzun dönem prognozu böbrek tutulumu belirler.',
        trueStatement: 'HSP’de trombosit sayısı normaldir, alt ekstremitelerde palpabl purpura görülür ve uzun dönem prognozu böbrek tutulumu belirler.',
        falseStatement: 'HSP’de purpuraların nedeni ağır immün trombositopeni (<20.000/mm³) olup tedavide acil trombosit süspansiyonu verilir.',
        falseHighlight: 'ağır immün trombositopeni (<20.000/mm³) olup tedavide acil trombosit süspansiyonu verilir',
      },
      {
        entityName: 'Yenidoğanın Geçici Takipnesi / TTN (Elektif Sezaryen Doğum, Fetal Akciğer Sıvısı Emilim Gecikmesi ve Fissürlerde Sıvı)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 38. gebelik haftasında doğum eylemi başlamadan elektif sezaryen ile doğan bebekte doğumdan hemen sonra başlayan takipne (solunum sayısı 85/dk), burun kanadı solunumu ve hafif siyanoz gelişiyor. Akciğer grafisinde havalanma artışı (hiperaerasyon), perihiler vasküler belirginleşme ve interlobar fissürlerde sıvı saptanıyor; bebek 48 saat içinde düşük akımlı oksijenle tamamen düzeliyor.',
        clues: ['elektif sezaryen ile doğan term/geç preterm bebek', 'interlobar fissürlerde sıvı ve hiperaerasyon', '48–72 saatte kendiliğinden tam düzelme'],
        questionPrompt: 'Fetal akciğer sıvısının epiteliyal sodyum kanalları (ENaC) aracılığıyla emiliminin gecikmesi sonucu gelişen bu tablo hangisidir?',
        mechanism:
          'Normal vajinal doğum eyleminde yükselen katekolaminler ve kortizol, alveol epitelindeki ENaC kanallarını aktive ederek fetal akciğer sıvısını emer. Elektif sezaryende bu süreç gerçekleşmediği için alveollerde sıvı kalır (Islak akciğer / TTN).',
        whenCorrectNote: 'Elektif sezaryen + Term bebek + ENaC ile sıvı emilim gecikmesi + Grafide fissürlerde sıvı ve hiperaerasyon + 48-72 saatte tam iyileşme.',
        firstVsGold: 'TTN Grafisi: Hiperaerasyon (havalanma artışı) + Fissürlerde sıvı • RDS Grafisi: Hipoaerasyon (hacim kaybı) + Buzlu cam + Hava bronkogramı.',
        pearl: 'TTN ile RDS’yi ayıran en keskin radyolojik fark: TTN’de akciğerler HİPERAERE (havalanması artmış) ve fissürde sıvı varken, RDS’de akciğerler HİPOAERE (atelektatik) ve buzlu cam görünümlüdür!',
        trueStatement: 'Yenidoğanın geçici takipnesi elektif sezaryenle doğan bebeklerde fetal akciğer sıvısının ENaC kanallarıyla emiliminin gecikmesi sonucu gelişir ve grafide fissürlerde sıvı görülür.',
        falseStatement: 'Yenidoğanın geçici takipnesinde temel patoloji sürfaktan eksikliği olup tedavide endotrakeal sürfaktan uygulaması zorunludur.',
        falseHighlight: 'temel patoloji sürfaktan eksikliği olup tedavide endotrakeal sürfaktan uygulaması zorunludur',
      },
      {
        entityName: 'Respiratuvar Distres Sendromu / RDS (Prematürite, Sürfaktan Eksikliği, Buzlu Cam + Hava Bronkogramı ve Antenatal Betametazon)',
        patientVignette:
          '[2022 TUS Konsept İkizi] 29. gebelik haftasında doğan prematüre bebekte doğumdan sonraki ilk saatlerde inleme (grunting), interkostal çekilmeler ve oksijene dirençli siyanoz gelişiyor. Akciğer grafisinde akciğer hacminde azalma, yaygın retikülogranüler (buzlu cam) görünüm ve hava bronkogramları saptanıyor.',
        clues: ['29 haftalık prematüre bebek', 'inleme (grunting) ve interkostal çekilme', 'grafide buzlu cam (retikülogranüler) görünüm ve hava bronkogramı'],
        questionPrompt: 'Bu hastalıkta amniyon sıvısında akciğer matürasyonunu gösteren altın standart oran ve doğum öncesi annede profilaksi için kullanılan steroid hangisidir?',
        mechanism:
          'Tip II pnömosit olgunlaşmamasına bağlı sürfaktan eksikliği alveollerin ekspiryumda kollabe olmasına (atelektazi) ve hyalen membran oluşumuna yol açar. Amniyon sıvısında Lesitin/Sfingomiyelin oranının ≥2 olması ve Fosfatidilgliserol varlığı matürasyonu gösterir; <34 hafta preterm doğum tehditlerinde anneye Betametazon (veya Deksametazon) verilir.',
        whenCorrectNote: 'Prematüre + Sürfaktan eksikliği + Buzlu cam & Hava bronkogramı + Lesitin/Sfingomiyelin < 2 + Profilakside Antenatal Betametazon, tedavide Nazal CPAP + Sürfaktan.',
        firstVsGold: 'Akciğer Matürasyon Göstergesi: Lesitin/Sfingomiyelin ≥ 2 (Diyabetik anne bebeğinde en güvenilir: Fosfatidilgliserol pozitifliği) • Profilaksi: Antenatal Betametazon.',
        pearl: 'Diyabetik anne bebeklerinde Lesitin/Sfingomiyelin oranı ≥2 olsa bile RDS gelişebilir; bu bebeklerde akciğer matürasyonunu en güvenilir gösteren fosfolipid FOSFATİDİLGLİSEROL’dür!',
        trueStatement: 'RDS’de akciğer grafisinde buzlu cam görünümü ve hava bronkogramları izlenir; diyabetik anne bebeğinde matürasyonu en güvenilir fosfatidilgliserol gösterir.',
        falseStatement: 'Anneye doğum öncesi RDS profilaksisi amacıyla plasentayı geçmeyen hidrokortizon veya prednizolon uygulanır.',
        falseHighlight: 'plasentayı geçmeyen hidrokortizon veya prednizolon uygulanır',
      },
      {
        entityName: 'Büyük Arter Transpozisyonu / BAT (D-TGA — Aort Sağdan, Pulmoner Soldan Çıkar; Yumurta Dizilimi Grafisi ve Prostaglandin E1 + Rashkind Septostomi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Diyabetik anneden doğan 39 haftalık yenidoğan bebekte doğumdan sonraki ilk saatlerde ağır santral siyanoz gelişiyor (%100 oksijen verilmesine rağmen PaO2 yükselmiyor). Akciğer grafisinde kalp gölgesinin yan yatmış yumurta (egg-on-a-string) şeklinde olduğu ve üst mediastenin daraldığı görülüyor.',
        clues: ['doğumdan hemen sonra ilk 24 saatte ağır siyanoz', 'grafide yan yatmış yumurta (egg-on-a-string) görünümü', 'aort sağ ventrikülden, pulmoner arter sol ventrikülden çıkar'],
        questionPrompt: 'Yenidoğan döneminde (ilk 24 saatte) siyanozla başvuran en sık konjenital kalp hastalığı olan bu tabloda yaşamla bağdaşması için acil verilmesi gereken ilaç hangisidir?',
        mechanism:
          'Büyük Arter Transpozisyonunda (D-TGA) aortikopulmoner septumun spiral dönmemesi (nöral krest kusuru) sonucu sistemik ve pulmoner dolaşım birbirine paralel iki kapalı devre halindedir. Yaşam için PDA veya ASD/VSD şarttır; duktusu açık tutmak için acil Prostaglandin E1 (Alprostadil) infüzyonu ve Balon Atriyal Septostomi (Rashkind) yapılır, kesin tedavisi ilk 2 haftada Arteriyel Switch (Jatene) ameliyatıdır.',
        whenCorrectNote: 'Yenidoğanda (ilk 24 saat) en sık siyanotik KKH + Yumurta kalp (egg-on-a-string) + Acil tedavi: PGE1 + Rashkind balon septostomi + Kesin cerrahi: Jatene (Arteriyel switch).',
        firstVsGold: 'Yenidoğanda (İlk 24 Saat) En Sık Siyanotik KKH: Büyük Arter Transpozisyonu • 1 Yaş Üstü Çocukta En Sık Siyanotik KKH: Fallot Tetralojisi.',
        pearl: 'Yenidoğan döneminde (ilk gün) ağır siyanozla gelen en sık konjenital kalp hastalığı Büyük Arter Transpozisyonu (TGA), süt çocukluğu ve sonrasında en sık ise Fallot Tetralojisidir!',
        trueStatement: 'Büyük arter transpozisyonu yenidoğanda ilk gün siyanozun en sık kardiyak nedenidir; duktusu açık tutmak için acil prostaglandin E1 verilir ve Jatene ameliyatı yapılır.',
        falseStatement: 'Büyük arter transpozisyonunda duktus arteriyozusu hızla kapatmak için doğumdan hemen sonra intravenöz indometazin uygulanmalıdır.',
        falseHighlight: 'duktus arteriyozusu hızla kapatmak için doğumdan hemen sonra intravenöz indometazin uygulanmalıdır',
      },
    ],
  },
  // 10. CERRAHİ (Son Yıllar TUS İkizi: Hepatobiliyer Cerrahi, Özofagus Hastalıkları ve Akut Karın)
  {
    branchId: 'cerrahi',
    subTopic: 'ÖSYM İkizi • Biliyer Aciller, Özofagus Cerrahisi ve Akut Karın (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Akut Süpüratif Kolanjit (Charcot Triyadı, Reynolds Pentadı ve ERCP ile Acil Biliyer Drenaj)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Koledokolitiyazis öyküsü olan 64 yaşındaki kadın hasta titremeyle yükselen ateş, sağ üst kadran ağrısı ve sarılık ile acil servise getiriliyor. Takibinde hipotansiyon ve konfüzyon gelişen hastanın USG’sinde koledok çapı 14 mm ve içinde taş saptanıyor.',
        clues: ['ateş + sarılık + sağ üst kadran ağrısı (Charcot triyadı)', '+ hipotansiyon ve konfüzyon (Reynolds pentadı)', 'koledok obstrüksiyonuna bağlı biliyer sepsis'],
        questionPrompt: 'Bu hastada sıvı resüsitasyonu ve İV antibiyoterapi sonrasında hayat kurtarıcı İLK tercih biliyer dekompresyon yöntemi hangisidir?',
        mechanism:
          'Koledok tıkanıklığı (en sık taş) zemininde gelişen bakteriyel enfeksiyonda (en sık E. coli, Klebsiella) safra kanalı içi basınç artışı bakteriyemiye yol açar. Ateş + Sarılık + Sağ üst kadran ağrısına Charcot triyadı; buna Şok + Konfüzyon eklenmesine Reynolds pentadı denir. Tedavide acil ERCP ile sfinkterotomi/stentleme altın standarttır.',
        whenCorrectNote: 'Charcot triyadı (Ateş, Sarılık, Sağ üst kadran ağrısı) + Reynolds pentadı (+ Şok, Konfüzyon) + En sık etken E. coli + Acil drenaj: ERCP.',
        firstVsGold: 'İlk Görüntüleme: Hepatobiliyer USG • Hem Tanısal Hem Tedavi Edici Altın Standart Drenaj: ERCP (Sfinkterotomi & Stentleme).',
        pearl: 'Akut toksik kolanjitte (Reynolds pentadı) yalnız antibiyotik yeterli değildir; safra yolu basıncı ERCP ile düşürülmezse mortalite çok yüksektir!',
        trueStatement: 'Akut kolanjitte Charcot triyadına hipotansiyon ve konfüzyon eklenmesine Reynolds pentadı denir; biliyer drenajda ilk tercih yöntem ERCP’dir.',
        falseStatement: 'Reynolds pentadı ile başvuran septik şoktaki kolanjit hastasında ilk yapılacak işlem acil açık kolesistektomidir.',
        falseHighlight: 'ilk yapılacak işlem acil açık kolesistektomidir',
      },
      {
        entityName: 'Boerhaave Sendromu (Şiddetli Kusma Sonrası Sol Posterolateral Distal Özofagus Tam Kat Rüptürü ve Suda Çözünür Kontrastlı Özofagografi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Ağır alkol ve yemek alımı sonrası öğürerek şiddetli kusan 52 yaşındaki erkek hastada ani başlayan yırtıcı retrosternal/epigastrik ağrı, dispne ve boyunda cilt altı amfizemi (krepitasyon) saptanıyor. Akciğer grafisinde pnömomediastinum ve sol plevral efüzyon izleniyor.',
        clues: ['şiddetli kusma sonrası ani retrosternal ağrı + cilt altı amfizemi (Mackler triyadı)', 'sol plevral efüzyon (amilaz yüksek, pH < 6)', 'distal özofagus sol posterolateral tam kat perforasyon'],
        questionPrompt: 'Spontan transmural özofagus perforasyonunun en sık yerleşim yeri ve tanıyı kesinleştirmek için İLK yapılması gereken kontrastlı tetkik hangisidir?',
        mechanism:
          'Boerhaave sendromu, şiddetli kusma sırasında krikofarengeus kasının gevşeyememesi sonucu özofagus içi basıncın ani artışıyla en zayıf nokta olan distal özofagusun SOL posterolateral duvarının (GE bileşkenin 2–3 cm üzeri) tam kat yırtılmasıdır. Tanıda mediastinit yapmaması için suda çözünür kontrastla (Gastrografin) özofagografi çekilir.',
        whenCorrectNote: 'Kusma + Retrosternal ağrı + Cilt altı amfizemi (Mackler triyadı) + Distal sol posterolateral tam kat rüptür + Tanı: Suda çözünür kontrastlı (Gastrografin) özofagografi.',
        firstVsGold: 'İyatrojenik Perforasyon En Sık Yeri: Servikal Özofagus (Killian üçgeni) • Boerhaave En Sık Yeri: Distal Sol Posterolateral • İlk Kontrastlı Tetkik: Suda Çözünür Kontrastlı (Gastrografin) Grafi.',
        pearl: 'Özofagus perforasyonu şüphesinde Baryum KULLANILMAZ (kimyasal mediastinit yapar); göğüs içi perforasyon şüphesinde suda çözünür kontrast (Gastrografin) kullanılır!',
        trueStatement: 'Boerhaave sendromunda distal özofagus sol posterolateral duvardan tam kat yırtılır ve tanıda suda çözünür kontrastlı özofagografi kullanılır.',
        falseStatement: 'Boerhaave sendromu yalnızca mukozal yırtıkla sınırlı olup en sık servikal özofagus sağ ön duvarında görülür.',
        falseHighlight: 'yalnızca mukozal yırtıkla sınırlı olup en sık servikal özofagus sağ ön duvarında görülür',
      },
      {
        entityName: 'Akalazya (Auerbach Pleksusunda VIP/NO İnhibitör Nöron Kaybı, Kuş Gagası Görünümü ve Altın Standart Yüksek Çözünürlüklü Manometri)',
        patientVignette:
          '[2022 TUS Konsept İkizi] 38 yaşında kadın hasta 2 yıldır hem katı hem sıvı gıdalara karşı ilerleyici yutma güçlüğü (paradoksal disfaji), sindirilmemiş gıda regürjitasyonu ve kilo kaybı ile başvuruyor. Baryumlu özofagus grafisinde özofagus gövdesinde genişleme ve distal uçta "kuş gagası (bird-beak)" şeklinde incelme saptanıyor.',
        clues: ['hem katı hem sıvı gıdaya karşı disfaji', 'baryumlu grafide kuş gagası (bird-beak) görünümü', 'alt özofagus sfinkterinin gevşeyememesi ve aperistaltizm'],
        questionPrompt: 'Maligniteyi dışlamak için endoskopi yapıldıktan sonra bu hastalığın KESİN tanısında altın standart olan yöntem hangisidir?',
        mechanism:
          'Akalazyada miyenterik (Auerbach) pleksustaki inhibitör nitrerjik (NO ve VIP salgılayan) gangliyon hücrelerinin kaybı sonucu Alt Özofagus Sfinkteri (AÖS) yutma ile gevşeyemez ve özofagus gövdesinde peristaltizm kaybolur. Tanıda altın standart Özofagus Manometrisidir; en etkili cerrahi tedavi Heller miyotomi (+ Dor/Toupet kısmi fundoplikasyon) veya POEM’dir.',
        whenCorrectNote: 'NO/VIP inhibitör nöron kaybı + Kuş gagası grafisi + Altın standart tanı: Özofagus Manometrisi + Cerrahi: Laparoskopik Heller miyotomi + Kısmi fundoplikasyon.',
        firstVsGold: 'Psödoakalazyayı (Mide kardiya Ca) Dışlamak İçin Şart Olan: Üst GİS Endoskopisi • Kesin Tanıda Altın Standart: Yüksek Çözünürlüklü Özofagus Manometrisi.',
        pearl: 'Akalazya ön tanılı her hastaya kardiya tümörünü (psödoakalazya) dışlamak için endoskopi yapılmalıdır; kesin tanı altın standardı ise Manometridir!',
        trueStatement: 'Akalazyada inhibitör VIP/NO nöronlarının kaybı sonucu alt özofagus sfinkteri gevşeyemez ve kesin tanıda altın standart yöntem manometridir.',
        falseStatement: 'Akalazyada sadece katı gıdalara karşı disfaji görülür ve özofagus manometrisinde alt özofagus sfinkter basıncı sıfıra yakın ölçülür.',
        falseHighlight: 'sadece katı gıdalara karşı disfaji görülür ve özofagus manometrisinde alt özofagus sfinkter basıncı sıfıra yakın ölçülür',
      },
      {
        entityName: 'Akut Kolesistit (Murphy Belirtisi, İlk Görüntüleme USG ve Altın Standart HIDA Sintigrafisi)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 46 yaşında kadın hasta yağlı yemek sonrası başlayan, 8 saattir devam eden sağ üst kadran ağrısı, ateş ve lökositoz ile başvuruyor. Fizik muayenede sağ subkostal derin palpasyon sırasında inspiryumun ağrıyla kesildiği (Murphy belirtisi pozitif) görülüyor.',
        clues: ['6 saatten uzun süren sağ üst kadran ağrısı + ateş', 'Murphy belirtisi (+)', 'sistik kanalın taşla tıkanması'],
        questionPrompt: 'Bu hastada İLK tercih görüntüleme yöntemi ile USG’nin şüpheli kaldığı olgularda EN DUYARLI (altın standart) tanı yöntemi eşleşmesi hangisidir?',
        mechanism:
          'Akut taşlı kolesistit %90–95 sistik kanalın (Hartmann poşunun) taşla tıkanması sonucu gelişir. İlk tercih görüntüleme Ultrasonografidir (duvar kalınlığı >4 mm, perikolesistik sıvı, sonografik Murphy); en duyarlı altın standart tetkik ise Kolesintigrafidir (Tc-99m HIDA sintigrafisinde safra kesesinin dolmaması).',
        whenCorrectNote: 'Sistik kanal tıkanıklığı + Murphy (+) + İlk görüntüleme: USG + En duyarlı altın standart: HIDA Kolesintigrafisi + Tedavi: İlk 72 saatte erken laparoskopik kolesistektomi.',
        firstVsGold: 'İlk Tercih Görüntüleme: Ultrasonografi (USG) • En Duyarlı (Altın Standart) Tanı: Tc-99m HIDA Kolesintigrafisi.',
        pearl: 'Akut kolesistitte HIDA sintigrafisinde safra kesesinin GÖRÜNTÜLENEMEMESİ (sistik kanal tıkalı olduğu için radyoaktif maddenin keseye girememesi) tanı koydurucudur!',
        trueStatement: 'Akut kolesistitte ilk tercih görüntüleme ultrasonografi, en duyarlı altın standart tanı yöntemi ise HIDA kolesintigrafisidir.',
        falseStatement: 'Akut kolesistitte en sık neden koledok distal ucunun taşla tıkanması olup hastaların tamamında ağır tıkanma sarılığı görülür.',
        falseHighlight: 'koledok distal ucunun taşla tıkanması olup hastaların tamamında ağır tıkanma sarılığı görülür',
      },
      {
        entityName: 'Meckel Divertikülü (Omfalomezenterik / Vitellin Kanal Kalıntısı, 2’ler Kuralı, Ektopik Mide Mukozası ve Tc-99m Perteknetat Sintigrafisi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 2 yaşında erkek çocuk acil servise karın ağrısı olmaksızın bol miktarda vişne çürüğü renginde rektal kanama ve anemi ile getiriliyor. İleoçekal valvin 50 cm proksimalinde bağırsağın antimezenterik yüzünde tüm katları içeren gerçek bir divertikül saptanıyor.',
        clues: ['2 yaş altı çocukta ağrısız alt GİS kanaması', 'ileoçekal valvin 45–60 cm proksimalinde antimezenterik gerçek divertikül', 'ektopik gastrik mukoza asit salgısına bağlı ileal ülser'],
        questionPrompt: 'Omfalomezenterik (vitellin) kanalın kapanmaması sonucu oluşan bu anomalinin çocukta kanama odağını göstermede EN DUYARLI tanı yöntemi hangisidir?',
        mechanism:
          'Meckel divertikülü GİS’in en sık konjenital anomalisidir ve tüm bağırsak katlarını içeren GERÇEK bir divertiküldür. Çocuklarda en sık ağrısız alt GİS kanaması (ektopik mide mukozasının salgıladığı asidin komşu ileumu ülserleştirmesiyle), erişkinde ise obstrüksiyon/divertikülit yapar; tanıda ektopik mide mukozasını tutan Tc-99m Perteknetat (Meckel) sintigrafisi kullanılır.',
        whenCorrectNote: 'Vitellin kanal kalıntısı + Gerçek divertikül + En sık ektopik doku: Mide mukozası (2. pankreas) + Çocukta en sık ağrısız alt GİS kanaması + Tanı: Tc-99m Perteknetat sintigrafisi.',
        firstVsGold: 'En Sık Ektopik Doku: Gastrik Mukoza • Çocukta En Sık Klinik: Ağrısız Alt GİS Kanaması • En Duyarlı Tanı: Tc-99m Perteknetat Sintigrafisi (Pentagastrin/H2 blokör duyarlılığı artırır).',
        pearl: 'Meckel divertikülünde ektopik mide mukozası bulunduğu için ülser ve kanama divertikülün içinde değil, hemen komşuluğundaki korunmasız İLEUM mukozasında gelişir!',
        trueStatement: 'Meckel divertikülü vitellin kanal kalıntısı olan gerçek bir divertiküldür; çocukta ağrısız alt GİS kanaması yapar ve Tc-99m perteknetat sintigrafisi ile tanı konulur.',
        falseStatement: 'Meckel divertikülü bağırsağın mezenterik kenarında yalnızca mukoza ve submukozanın fıtıklaşmasıyla oluşan yalancı bir divertiküldür.',
        falseHighlight: 'mezenterik kenarında yalnızca mukoza ve submukozanın fıtıklaşmasıyla oluşan yalancı bir divertiküldür',
      },
    ],
  },
  // 11. KADIN HASTALIKLARI VE DOĞUM (Son Yıllar TUS İkizi: Obstetrik Aciller, Preeklampsi ve Jinekoloji)
  {
    branchId: 'kadindogum',
    subTopic: 'ÖSYM İkizi • Preeklampsi/MgSO4, Obstetrik Kanamalar ve Ektopik Gebelik (2022–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Preeklampsi & Magnezyum Sülfat Toksisitesi (İlk Kaybolan Patella Refleksi ve Spesifik Antidot Kalsiyum Glukonat)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 34. gebelik haftasında kan basıncı 170/115 mmHg, baş ağrısı, görme bulanıklığı ve proteinürisi olan ağır preeklampsili gebeye eklampsi konvülziyon profilaksisi amacıyla İV Magnezyum sülfat (MgSO4) infüzyonu başlanıyor. Takipte hastanın derin tendon (patella) reflekslerinin kaybolduğu ve solunum sayısının 10/dakikaya düştüğü saptanıyor.',
        clues: ['ağır preeklampside MgSO4 infüzyonu', 'patella (derin tendon) refleksinin kaybı', 'solunum depresyonu ve antidot ihtiyacı'],
        questionPrompt: 'Magnezyum sülfat toksisitesinin İLK klinik bulgusu ve bu hastaya acil olarak verilmesi gereken spesifik antidot eşleşmesi hangisidir?',
        mechanism:
          'Ağır preeklampsi ve eklampside nöbet profilaksisinde en etkili ajan Magnezyum sülfattır (böbrekten atılır, oligüride toksisite riski artar). Toksisitede 8–10 mEq/L düzeyinde İLK olarak patella (derin tendon) refleksi kaybolur, >12 mEq/L’de solunum depresyonu gelişir; spesifik antidotu İV %10 Kalsiyum glukonattır.',
        whenCorrectNote: 'Eklampsi profilaksisi: MgSO4 • Toksisitenin İLK bulgusu: Patella (derin tendon) refleksi kaybı • Spesifik Antidot: İV Kalsiyum glukonat.',
        firstVsGold: 'İlk Kaybolan Bulgu (8–10 mEq/L): Patella Refleksi Kaybı • Solunum Depresyonu (>12 mEq/L) • Spesifik Antidot: İV Kalsiyum Glukonat.',
        pearl: 'MgSO4 bir antihipertansif DEĞİLDİR (antikonvülzandır); gebelikte akut ağır hipertansiyon tedavisinde İV Labetalol, İV Hidralazin veya Oral Nifedipin kullanılır!',
        trueStatement: 'Magnezyum sülfat toksisitesinin ilk klinik bulgusu patella refleksinin kaybıdır ve spesifik antidotu intravenöz kalsiyum glukonattır.',
        falseStatement: 'Magnezyum sülfat karaciğerde metabolize edildiği için ağır böbrek yetmezliği ve anürisi olan gebelerde doz ayarı gerekmeksizin güvenle kullanılır.',
        falseHighlight: 'karaciğerde metabolize edildiği için ağır böbrek yetmezliği ve anürisi olan gebelerde doz ayarı gerekmeksizin güvenle kullanılır',
      },
      {
        entityName: 'Ablasyo Plasenta / Dekolman (Ağrılı Koyu Kırmızı Kanama, Hipertonik Tahta Uterus ve Obstetride DİK’in En Sık Nedeni)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Kronik hipertansiyonu olan 36 haftalık gebe ani başlayan şiddetli karın ağrısı ve koyu kırmızı vajinal kanama ile acil servise getiriliyor. Muayenede uterusun gevşemediği (tahta sertliğinde hipertonik uterus), fetal bradikardi olduğu ve fibrinojen düzeyinin hızla düştüğü saptanıyor.',
        clues: ['hipertansiyon (en önemli risk faktörü)', 'ağrılı koyu kırmızı kanama + tahta sertliğinde hipertonik uterus', 'fetal distres ve dissemine intravasküler koagülopati (DİK)'],
        questionPrompt: 'Normal yerleşimli plasentanın doğumdan önce ayrılmasıyla gelişen bu tablonun EN SIK risk faktörü ve en önemli hematolojik komplikasyonu hangisidir?',
        mechanism:
          'Ablasyo plasenta (plasenta dekolmanı), normal yerleşimli plasentanın 20. haftadan sonra erken ayrılmasıdır. En önemli risk faktörü maternal Hipertansiyondur (en yüksek tekrarlama riski ise önceki gebelikte dekolman öyküsüdür). Maternal dolaşıma doku tromboplastini geçişiyle obstetride tüketim koagülopatisinin (DİK) EN SIK nedenidir.',
        whenCorrectNote: 'En sık risk faktörü: Hipertansiyon + Ağrılı koyu kanama + Hipertonik uterus + Obstetride DİK’in en sık nedeni (Ablasyo plasenta).',
        firstVsGold: 'Ablasyo Plasenta: Ağrılı, koyu kanama, hipertonik uterus, DİK sık • Plasenta Previa: Ağrısız, parlak kırmızı kanama, yumuşak uterus, dijital tuşe kontrendike!',
        pearl: 'Ablasyo plasentada USG’nin negatif olması tanıyı DIŞLAMAZ (retroplasental hematom akut dönemde plasenta ile izoekoik olabilir; tanı kliniktir)!',
        trueStatement: 'Ablasyo plasentanın en sık risk faktörü maternal hipertansiyon olup ağrılı vajinal kanama, hipertonik uterus ve DİK gelişimine yol açar.',
        falseStatement: 'Ablasyo plasenta tanısını kesinleştirmek için ultrasonografide retroplasental hematomun görülmesi mutlak zorunludur; USG normalse tanı dışlanır.',
        falseHighlight: 'ultrasonografide retroplasental hematomun görülmesi mutlak zorunludur; USG normalse tanı dışlanır',
      },
      {
        entityName: 'Plasenta Previa (Ağrısız Parlak Kırmızı 3. Trimester Kanaması, Dijital Tuşe Kontrendikasyonu ve Transvajinal USG)',
        patientVignette:
          '[2022 TUS Konsept İkizi] Daha önce 2 kez sezaryen doğum öyküsü olan 33 haftalık gebe sabah uyandığında hiçbir ağrısı veya kasılması olmadan başlayan parlak kırmızı vajinal kanama ile başvuruyor. Uterus tonusu normal (yumuşak) ve fetal kalp atımları olağan saptanıyor.',
        clues: ['ağrısız parlak kırmızı 3. trimester kanaması', 'uterus yumuşak ve fetal kalp atımı normal', 'önceki sezaryen öyküsü'],
        questionPrompt: 'Bu hastada KESİNLİKLE yapılmaması gereken muayene ve tanıda altın standart görüntüleme yöntemi eşleşmesi hangisidir?',
        mechanism:
          'Plasenta previa, plasentanın internal servikal osu kapatması veya çok yakın yerleşmesidir. Ağrısız parlak kırmızı kanama yapar; şiddetli kanamayı tetikleyeceği için dijital vajinal tuşe KESİNLİKLE kontrendikedir! Tanıda en doğru ve güvenli altın standart yöntem Transvajinal USG’dir.',
        whenCorrectNote: 'Ağrısız parlak kırmızı kanama + Yumuşak uterus + Dijital vajinal tuşe KESİNLİKLE kontrendike + Altın standart tanı: Transvajinal USG + Eski sezaryen kesi yerinde ise Plasenta akreata riski!',
        firstVsGold: 'Kesinlikle Kontrendike İşlem: Dijital Vajinal Muayene (Tuşe) • Tanıda Altın Standart: Transvajinal Ultrasonografi (TV-USG).',
        pearl: 'Önceki sezaryen skarı üzerinde yerleşmiş bir Plasenta previa varlığında en korkulan eşlikçi patoloji PLASENTA AKREATA spektrumudur (desidua bazalis defekti / Nitabuch tabakası yokluğu)!',
        trueStatement: 'Plasenta previada ağrısız parlak kırmızı vajinal kanama görülür, dijital vajinal muayene kesinlikle kontrendikedir ve tanıda altın standart transvajinal USG’dir.',
        falseStatement: 'Plasenta previa şüphesi olan gebede servikal açıklığı değerlendirmek için ilk yapılacak işlem dijital vajinal tuşedir.',
        falseHighlight: 'ilk yapılacak işlem dijital vajinal tuşedir',
      },
      {
        entityName: 'Ektopik Gebelik ve Medikal Metotreksat Tedavisi (En Sık Ampulla Yerleşimi ve Metotreksat Kontrendikasyonları)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Son adet tarihine göre 6 haftalık gebe olan hasta lekelenme tarzında vajinal kanama ile başvuruyor. Serum Beta-hCG düzeyi 2.400 mIU/mL ölçülüyor; transvajinal USG’de uterin kavite boş, sağ tuba uterina ampullasında 2.2 cm’lik fetal kalp atımı OLMAYAN ektopik gebelik kesesi izleniyor, batında serbest sıvı saptanmıyor ve hasta hemodinamik olarak stabil.',
        clues: ['en sık yerleşim: tuba uterina ampullası', 'hemodinamik stabil + rüptür yok + FKA yok + Beta-hCG < 5000', 'folik asit antagonisti ile medikal tedavi'],
        questionPrompt: 'Bu hastada cerrahiye gerek kalmadan uygulanacak ilk tercih medikal ajan ve bu ajanın KESİN kontrendikasyonu hangisidir?',
        mechanism:
          'Ektopik gebelik en sık (%70) tuba uterinanın Ampulla bölgesine yerleşir (en erken rüptüre olan ise İstmus’tur). Hemodinamik olarak stabil, rüptüre olmamış, kitle çapı <3.5–4 cm, fetal kalp atımı negatif ve Beta-hCG <5000 mIU/mL olan hastalarda tek doz İM Metotreksat verilir. Rüptür/hemodinamik instabilite, emzirme ve heterotopik gebelikte metotreksat kesin kontrendikedir.',
        whenCorrectNote: 'En sık yerleşim: Ampulla • Medikal tedavi: Metotreksat (Stabil hasta, rüptür yok, FKA yok, Beta-hCG < 5000) • Rüptür varsa: Acil лаparoskopik salpenjektomi.',
        firstVsGold: 'En Sık Yerleşim: Ampulla • En Erken Rüptür: İstmus • En Geç Rüptür (Ağır Kanama): İnterstisyel (Kornual) • Medikal Ajan: İM Metotreksat.',
        pearl: 'Metotreksat tedavisinde başarı takibi 4. ve 7. gün Beta-hCG düzeyleri ile yapılır; 4. ve 7. günler arasında Beta-hCG’de en az %15 düşüş olması beklenir!',
        trueStatement: 'Ektopik gebelik en sık ampulla yerleşimlidir; rüptüre olmamış, fetal kalp atımı negatif ve hemodinamik olarak stabil hastalarda metotreksat ile tedavi edilir.',
        falseStatement: 'Hemodinamik olarak instabil ve batın içi serbest kanaması (rüptür) olan ektopik gebelikte ilk tercih tedavi intramüsküler metotreksattır.',
        falseHighlight: 'instabil ve batın içi serbest kanaması (rüptür) olan ektopik gebelikte ilk tercih tedavi intramüsküler metotreksattır',
      },
      {
        entityName: 'Polikistik Over Sendromu / PKOS (Rotterdam Kriterleri, LH/FSH Artışı, İnsülin Direnci, Endometrium Ca Riski ve Ovulasyon İndüksiyonunda İlk Tercih Letrozol)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 26 yaşında kadın hasta yılda 3–4 kez adet görme (oligomenore), çene ve göğüste kıllanma artışı (hirsutizm), akantozis nigrikans ve 1.5 yıldır gebe kalamama şikayetiyle başvuruyor. USG’de bilateral overlerde periferik dizilimli çok sayıda antral follikül saptanıyor.',
        clues: ['oligo/anovulasyon + hiperandrojenizm (hirsutizm) + polikistik over', 'insülin direnci ve karşılanmamış östrojen etkisi', 'anovulatuvar infertilitede ilk tercih ilaç'],
        questionPrompt: 'Kronik anovulasyona bağlı karşılanmamış östrojen nedeniyle endometrium kanseri riski artan bu hastada çocuk istemi varsa ovulasyon indüksiyonunda İLK tercih ajan hangisidir?',
        mechanism:
          'PKOS’ta GnRH pulsatilitesinin artışına bağlı LH/FSH oranı yükselir, teka hücrelerinden androjen sentezi artar ve periferde östrona (E1) dönüşür. Kronik anovulasyon nedeniyle progesteron üretilemediği için "karşılanmamış östrojen" Endometrium hiperplazisi ve Endometrium adenokarsinomu riskini artırır. Gebelik isteyen PKOS hastasında ovulasyon indüksiyonunda birinci basamak ilk tercih ilaç Aromataz inhibitörü Letrozol’dür.',
        whenCorrectNote: 'Rotterdam kriterleri (2/3) + Karşılanmamış östrojene bağlı Endometrium Ca riski + Gebelik isteminde ovulasyon indüksiyonunda İLK tercih: Letrozol (Aromataz inhibitörü).',
        firstVsGold: 'Gebelik İstemeyen PKOS’ta Hirsutizm ve Endometrium Koruması İlk Tercih: Kombine Oral Kontraseptif (KOK) • Gebelik İsteyen PKOS’ta Ovulasyon İlk Tercih: Letrozol.',
        pearl: 'Güncel kılavuzlarda ve TUS’ta PKOS’a bağlı anovulatuvar infertilitede birinci basamak ilk tercih ovulasyon indüksiyon ajanı Klomifen sitrat değil, LETROZOL’dür (Aromataz inhibitörü)!',
        trueStatement: 'PKOS’ta kronik anovulasyona bağlı endometrium kanseri riski artar; gebelik isteyen hastalarda ovulasyon indüksiyonunda ilk tercih ilaç letrozoldür.',
        falseStatement: 'PKOS’ta serum FSH düzeyi aşırı yüksek, LH ve serbest testosteron düzeyleri ise ileri derecede baskılanmıştır.',
        falseHighlight: 'FSH düzeyi aşırı yüksek, LH ve serbest testosteron düzeyleri ise ileri derecede baskılanmıştır',
      },
    ],
  },
  // 12. BİYOKİMYA II (Son Yıllar TUS İkizi: Lizozomal ve Glikojen Depo Hastalıkları)
  {
    branchId: 'biyokimya',
    subTopic: 'ÖSYM İkizi • Lizozomal Sfingolipidozlar ve Glikojen Depo Hastalıkları (2021–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Gaucher Hastalığı (Beta-Glukoserebrozidaz Eksikliği, Buruşuk Kağıt Hücresi ve Erlenmeyer Şişesi Deformitesi)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Masif splenomegali, trombositopeni ve femur distalinde "Erlenmeyer şişesi" deformitesi saptanan 28 yaşındaki hastanın kemik iliği aspirasyonunda sitoplazması buruşuk kağıt (crinkled paper) görünümünde lipid yüklü makrofajlar izleniyor.',
        clues: ['kemik iliğinde buruşuk kağıt (crinkled paper) makrofajlar', 'masif splenomegali + pansitopeni + Erlenmeyer şişesi femur', 'glukoserebrozid birikimi'],
        questionPrompt: 'En sık görülen bu lizozomal depo hastalığında eksik olan enzim aşağıdakilerden hangisidir?',
        mechanism:
          'Gaucher hastalığında lizozomal Beta-glukoserebrozidaz (glukozilseramidaz) enzimi eksiktir; makrofajlarda glukoserebrozid birikir (Gaucher hücresi: buruşuk kağıt görünümü). Tip 1 (erişkin tip) nöronopatik değildir, zeka normaldir.',
        whenCorrectNote: 'Beta-glukoserebrozidaz eksikliği + Glukoserebrozid birikimi + Buruşuk kağıt makrofaj + Masif splenomegali & Erlenmeyer şişesi femur.',
        firstVsGold: 'Gaucher: Beta-glukoserebrozidaz (Buruşuk kağıt hücresi) • Niemann-Pick: Sfingomiyelinaz (Köpük hücresi + Kiraz kırmızısı makula).',
        pearl: 'Lizozomal depo hastalıkları içinde EN SIK görüleni Gaucher hastalığıdır; Tip 1 Gaucher’de beyin tutulumu ve kiraz kırmızısı makula YOKTUR.',
        trueStatement: 'Gaucher hastalığı beta-glukoserebrozidaz eksikliği sonucu gelişir; kemik iliğinde buruşuk kağıt görünümlü makrofajlar ve masif splenomegali görülür.',
        falseStatement: 'Gaucher hastalığı sfingomiyelinaz eksikliğine bağlı gelişir ve tüm hastalarda doğumdan itibaren ağır sağırlık görülür.',
        falseHighlight: 'sfingomiyelinaz eksikliğine bağlı gelişir ve tüm hastalarda doğumdan itibaren ağır sağırlık görülür',
      },
      {
        entityName: 'Fabry Hastalığı (Alfa-Galaktosidaz A Eksikliği, X’e Bağlı Resesif Geçiş, Anjiyokeratom ve Akroparestezi)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 22 yaşında erkek hasta el ve ayaklarda yanıcı nöropatik ağrı (akroparestezi), terleme azlığı (hipohidroz), göbek ve kasık çevresinde kırmızı-mor punktat vasküler döküntüler (anjiyokeratom), korneal vertisillata ve proteinürik böbrek yetmezliği ile başvuruyor.',
        clues: ['X’e bağlı geçiş + anjiyokeratom + akroparestezi + hipohidroz', 'korneal vertisillata ve erken yaşta böbrek/kalp yetmezliği', 'globotriaosilseramid (Gb3) birikimi'],
        questionPrompt: 'Diğer sfingolipidozlardan farklı olarak X’e bağlı kalıtılan bu hastalıkta eksik olan lizozomal enzim hangisidir?',
        mechanism:
          'Fabry hastalığı, sfingolipidozlar arasında X’e bağlı resesif kalıtılan TEK hastalıktır (diğerleri otozomal resesiftir). Alfa-galaktosidaz A eksikliği sonucu damar endotelinde, böbrek glomerüllerinde ve dorsal kök gangliyonlarında Globotriaosilseramid (Gb3 / seramid triheksozid) birikir.',
        whenCorrectNote: 'X’e bağlı sfingolipidoz + Alfa-galaktosidaz A eksikliği + Anjiyokeratom + Akroparestezi + Böbrek ve kalp yetmezliği.',
        firstVsGold: 'X’e Bağlı Sfingolipidoz: Fabry (Alfa-galaktosidaz A) • X’e Bağlı Mukopolisakkaridoz: Hunter (İdüronat-2-sülfataz).',
        pearl: 'TUS’un altın genetik kuralı: Sfingolipidozlardan yalnızca FABRY, mukopolisakkaridozlardan yalnızca HUNTER hastalığı X’e bağlı resesif kalıtılır!',
        trueStatement: 'Fabry hastalığı X’e bağlı kalıtılan ve alfa-galaktosidaz A eksikliği sonucu anjiyokeratom, akroparestezi ve böbrek yetmezliği yapan sfingolipidozdur.',
        falseStatement: 'Fabry hastalığı otozomal dominant kalıtılır ve heksozaminidaz A eksikliğine bağlı gangliyozid birikimiyle seyreder.',
        falseHighlight: 'otozomal dominant kalıtılır ve heksozaminidaz A eksikliğine bağlı gangliyozid birikimiyle seyreder',
      },
      {
        entityName: 'Von Gierke Hastalığı / Tip I GSD (Glukoz-6-Fosfataz Eksikliği, Ağır Açlık Hipoglisemisi, Laktik Asidoz, Hiperürisemi ve Hiperlipidemi)',
        patientVignette:
          '[2022 TUS Konsept İkizi] 6 aylık bebekte öğün aralarında ağır hipoglisemik nöbetler, taş bebek yüzü (doll-like face), masif hepatomegali ve renomegali saptanıyor. Kan tetkiklerinde ağır laktik asidoz, hiperürisemi ve hipertrigliseridemi görülüyor; glukagon uygulanmasına rağmen kan şekeri yükselmiyor.',
        clues: ['ağır açlık hipoglisemisi + laktik asidoz + hiperürisemi + hiperlipidemi', 'hepatomegali ve renomegali (splenomegali yok)', 'glukagona yanıt vermeyen hipoglisemi'],
        questionPrompt: 'Hem glikojenoliz hem glukoneogenezin son ortak basamağını bozan bu Tip I glikojen depo hastalığında eksik olan enzim hangisidir?',
        mechanism:
          'Tip Ia GSD’de (Von Gierke) endoplazmik retikulumdaki Glukoz-6-fosfataz (Tip Ib’de ise Glukoz-6-fosfat translokaz + nötropeni) eksiktir. Glukoz-6-fosfat serbest glukoza dönüşemediği için ağır açlık hipoglisemisi, HMP şantına kayışla hiperürisemi ve glikolize kayışla laktik asidoz + hiperlipidemi gelişir.',
        whenCorrectNote: 'Glukoz-6-fosfataz eksikliği + Ağır açlık hipoglisemisi + Laktik asidoz + Hiperürisemi + Hipertrigliseridemi + Taş bebek yüzü.',
        firstVsGold: 'Tip Ia (Von Gierke): Glukoz-6-fosfataz eksikliği • Tip Ib: Glukoz-6-fosfat translokaz eksikliği (Ek olarak NÖTROPENİ ve tekrarlayan enfeksiyonlar görülür!).',
        pearl: 'Von Gierke (Tip I GSD) hastalarında fruktoz ve galaktoz da Glukoz-6-fosfataz üzerinden serbest glukoza dönüştüğü için diyette FRUKTOZ ve GALAKTOZ kısıtlanır, çiğ mısır nişastası verilir!',
        trueStatement: 'Von Gierke hastalığında glukoz-6-fosfataz eksikliğine bağlı ağır açlık hipoglisemisi, laktik asidoz, hiperürisemi ve hiperlipidemi görülür.',
        falseStatement: 'Von Gierke hastalığında glukagon enjeksiyonu sonrasında kan şekeri dakikalar içinde normalin iki katına çıkar.',
        falseHighlight: 'glukagon enjeksiyonu sonrasında kan şekeri dakikalar içinde normalin iki katına çıkar',
      },
      {
        entityName: 'Pompe Hastalığı / Tip II GSD (Lizozomal Alfa-1,4-Glukozidaz / Asit Maltaz Eksikliği ve Masif Kardiyomegali)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 4 aylık bebekte ağır jeneralize hipotoni (gevşek bebek / floppy infant), makroglossi, beslenme güçlüğü ve solunum sıkıntısı saptanıyor. Akciğer grafisinde ve ekokardiyografide dev kardiyomegali (hipertrofik kardiyomiyopati), EKG’de ise çok kısa PR mesafesi ve dev QRS kompleksleri izleniyor; kan şekeri tamamen normal bulunuyor.',
        clues: ['gevşek bebek (hipotoni) + DEV KARDİYOMEGALİ + makroglossi', 'kan şekeri normal (normoglisemi)', 'lizozom içinde glikojen birikimi'],
        questionPrompt: 'Glikojen depo hastalıkları içinde LİZOZOMAL olan tek tip (Tip II) ve eksik olan enzim eşleşmesi hangisidir?',
        mechanism:
          'Pompe hastalığında (Tip II GSD) lizozomal Alfa-1,4-glukozidaz (Asit maltaz) enzimi eksiktir. Sitoplazmik glikojenoliz normal olduğu için HİPOGLİSEMİ GÖRÜLMEZ; ancak lizozomlarda biriken glikojen kalp ve iskelet kasını yıkarak masif kardiyomegali ve hipotoni yapar.',
        whenCorrectNote: 'Tek lizozomal GSD + Alfa-1,4-glukozidaz (Asit maltaz) eksikliği + Masif kardiyomegali + Hipotoni + Kan şekeri NORMAL.',
        firstVsGold: 'Lizozomal Olan Tek GSD: Tip II — Pompe (Asit maltaz) • Kalp Yetmezliği ve Masif Kardiyomegali Yapan Başlıca GSD: Pompe ("Pompe Kalbi Pompalayamaz").',
        pearl: 'Akılda tutma anahtarı: "Pompe = Pompa (Kalp) bozulur (Masif kardiyomegali) ve Lizozomaldir (Asit maltaz eksikliği, kan şekeri normaldir)!"',
        trueStatement: 'Pompe hastalığı lizozomal alfa-1,4-glukozidaz (asit maltaz) eksikliğiyle gelişen tek lizozomal glikojen depo hastalığı olup masif kardiyomegali yapar.',
        falseStatement: 'Pompe hastalığında ağır açlık hipoglisemisi ve ketozis en erken ortaya çıkan laboratuvar bulgusudur.',
        falseHighlight: 'ağır açlık hipoglisemisi ve ketozis en erken ortaya çıkan laboratuvar bulgusudur',
      },
      {
        entityName: 'McArdle Hastalığı / Tip V GSD (Kas Glikojen Fosforilaz / Miyofosforilaz Eksikliği, Egzersiz İntoleransı, Miyoglobinüri ve "İkinci Rüzgar" Fenomeni)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 21 yaşında erkek hasta ağır egzersiz başladıktan birkaç dakika sonra ortaya çıkan şiddetli kas krampları, miyalji ve koyu kırmızı-kahverengi idrar (miyoglobinüri) ile başvuruyor. Kısa süre dinlendikten sonra egzersize daha rahat devam edebildiği (ikinci rüzgar fenomeni) ve iskemik önkol egzersiz testinde venöz kanda laktat düzeyinin YÜKSELMEDİĞİ saptanıyor.',
        clues: ['egzersizle kas krampı + miyoglobinüri (rabdomiyoliz)', 'ikinci rüzgar (second wind) fenomeni', 'egzersiz sonrası venöz laktatın yükselmemesi (düz laktat eğrisi)'],
        questionPrompt: 'Karaciğerin etkilenmediği ve açlık hipoglisemisinin görülmediği bu kas glikojen depo hastalığında (Tip V) eksik olan enzim hangisidir?',
        mechanism:
          'McArdle hastalığında (Tip V GSD) çizgili kasa özgü Glikojen fosforilaz (Miyofosforilaz) izoenzimi eksiktir (B6 vitamini / PLP kofaktörlüdür). Egzersizde kas glikojeni yıkılamadığı için venöz laktat yükselmez (amonyak yükselir); dinlenince yağ asitleri ve kan glukozu devreye girerek "ikinci rüzgar (second wind)" rahatlaması sağlar.',
        whenCorrectNote: 'Kas glikojen fosforilaz (Miyofosforilaz) eksikliği + Egzersiz krampı & Miyoglobinüri + Venöz laktat yükselmez + İkinci rüzgar fenomeni.',
        firstVsGold: 'Karaciğer Glikojen Fosforilaz Eksikliği: Tip VI — Hers Hastalığı • Kas Glikojen Fosforilaz Eksikliği: Tip V — McArdle Hastalığı.',
        pearl: 'McArdle hastalığında (Tip V GSD) egzersizle venöz LAKTAT YÜKSELMEZken amonyak yükselir; karaciğer fosforilazı normal olduğu için hipoglisemi asla görülmez!',
        trueStatement: 'McArdle hastalığında kas glikojen fosforilaz (miyofosforilaz) eksiktir; egzersizle miyoglobinüri ve kas krampı gelişir ancak venöz laktat yükselmez.',
        falseStatement: 'McArdle hastalığında egzersiz sırasında venöz laktat düzeyi normalin on katına çıkar ve ağır açlık hipoglisemisi gelişir.',
        falseHighlight: 'venöz laktat düzeyi normalin on katına çıkar ve ağır açlık hipoglisemisi gelişir',
      },
    ],
  },
  // 13. DAHİLİYE II (Son Yıllar TUS İkizi: Endokrinoloji, Nefroloji ve Romatoloji Klasikleri)
  {
    branchId: 'dahiliye',
    subTopic: 'ÖSYM İkizi • Feokromositoma, Conn, SIADH ve Endokrin/Romatoloji Vakaları (2021–2025 TUS)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Feokromositoma (Baş Ağrısı + Terleme + Çarpıntı Triyadı, Plazma Serbest Metanefrinler ve Preoperatif İlk İlaç Alfa-Blokör Fenoksibenzamin)',
        patientVignette:
          '[2024 TUS Konsept İkizi] 36 yaşında kadın hasta ataklarla gelen şiddetli baş ağrısı, aşırı terleme, çarpıntı ve kan basıncının 220/130 mmHg’ye çıkması nedeniyle başvuruyor. Plazma serbest metanefrin ve 24 saatlik idrar fraksiyone metanefrin düzeyleri normalin 4 katı yüksek bulunuyor; sürrenal BT’de sağ adrenal medullada 4 cm’lik kitle saptanıyor.',
        clues: ['epizodik hipertansiyon + baş ağrısı + terleme + çarpıntı', 'plazma serbest metanefrin yüksekliği', 'cerrahi öncesi hazırlık sırası'],
        questionPrompt: 'Bu hastada cerrahi rezeksiyon öncesinde hipertansif krizi önlemek için İLK başlanması gereken ilaç ve tek başına verilmesi KESİNLİKLE kontrendike olan ilaç grubu hangisidir?',
        mechanism:
          'Feokromositomada preoperatif hazırlıkta İLK olarak en az 10–14 gün Alfa-blokör (non-selektif irreverzibl Fenoksibenzamin veya selektif Alfa-1 blokör Doksazosin) + tuz/sıvı yüklemesi başlanır. Alfa blokaj sağlanmadan TEK BAŞINA Beta-blokör verilmesi, vazodilatatör Beta-2 reseptörleri kapatıp karşılanmamış Alfa-1 vazokonstriksiyonu ile ölümcül hipertansif krize yol açar!',
        whenCorrectNote: 'En duyarlı tarama: Plazma serbest metanefrinler • Biyopsi KESİNLİKLE kontrendike • Preop İLK ilaç: Alfa-blokör (Fenoksibenzamin/Doksazosin), SONRA Beta-blokör.',
        firstVsGold: 'En Duyarlı Tarama Testi: Plazma Serbest Metanefrinler • Preoperatif Sıralama: ÖNCE Alfa-Blokör (Fenoksibenzamin), 2–3 Gün SONRA Beta-Blokör!',
        pearl: 'Feokromositomada iki büyük TUS kuralı: 1) Adrenal kitleye İİAB (biyopsi) KESİNLİKLE yapılmaz, 2) Alfa-blokör verilmeden ASLA beta-blokör başlanmaz!',
        trueStatement: 'Feokromositomada preoperatif hazırlıkta ilk olarak alfa-blokör (fenoksibenzamin) başlanır; alfa blokaj yapılmadan beta-blokör verilmesi kontrendikedir.',
        falseStatement: 'Feokromositoma şüphesi olan adrenal kitlede cerrahi öncesi kesin tanı için ince iğne aspirasyon biyopsisi yapılmalı ve ilk olarak propranolol başlanmalıdır.',
        falseHighlight: 'kesin tanı için ince iğne aspirasyon biyopsisi yapılmalı ve ilk olarak propranolol başlanmalıdır',
      },
      {
        entityName: 'Primer Hiperaldosteronizm / Conn Sendromu (Dirençli Hipertansiyon + Hipokalemi + Metabolik Alkaloz, Ödem Yokluğu ve Plazma Aldosteron/Renin Oranı)',
        patientVignette:
          '[2023 TUS Konsept İkizi] 44 yaşında hasta 3’lü antihipertansif tedaviye rağmen kan basıncının 165/105 mmHg olması ve kas güçsüzlüğü ile başvuruyor. Fizik muayenede pretibial ödem saptanmıyor; biyokimyada potasyum 2.8 mEq/L, sodyum 145 mEq/L ve metabolik alkaloz görülüyor.',
        clues: ['hipertansiyon + hipokalemi + metabolik alkaloz', 'fizik muayenede ÖDEM YOKLUĞU (aldosteron kaçış fenomeni)', 'Plazma Aldosteron / Plazma Renin Aktivitesi oranı > 20'],
        questionPrompt: 'Sekonder hipertansiyonun en sık endokrin nedeni olan bu tabloda İLK yapılacak tarama testi ve ödem görülmeme mekanizması hangisidir?',
        mechanism:
          'Primer hiperaldosteronizmde (Conn adenomu veya bilateral adrenal hiperplazi) aşırı aldosteron Na+ tutar, K+ ve H+ atar. Ancak artan hücre dışı hacim ANP salınımını ve basınç natriürezini tetiklediği için ("Aldosteron kaçış fenomeni") hastalarda ÖDEM GÖRÜLMEZ! İlk tarama testi Plazma Aldosteron / Renin Aktivitesi Oranıdır (ARR > 20–30).',
        whenCorrectNote: 'Dirençli HT + Hipokalemi + Alkaloz + Ödem YOK (Aldosteron kaçışı / ANP) + İlk tarama: Aldosteron/Renin oranı + Doğrulama: Tuz yükleme testi.',
        firstVsGold: 'İlk Tarama Testi: Plazma Aldosteron / Renin Oranı (ARR) • Doğrulama Testi: İV Salin İnfüzyon / Oral Tuz Yükleme Testi • Lokalizasyon Altın Standart: Adrenal Venöz Örnekleme.',
        pearl: 'Primer hiperaldosteronizmde ANP artışına bağlı "Aldosteron kaçış fenomeni" nedeniyle ÖDEM GÖRÜLMEZ; tek taraflı adenom/karsinom ayrımında altın standart Adrenal Venöz Örneklemedir!',
        trueStatement: 'Primer hiperaldosteronizmde hipertansiyon, hipokalemi ve metabolik alkaloz görülür; aldosteron kaçış fenomeni nedeniyle ödem oluşmaz ve taramada aldosteron/renin oranı kullanılır.',
        falseStatement: 'Primer hiperaldosteronizmde aşırı tuz ve su tutulumuna bağlı olarak tüm hastalarda yaygın anazarka tarzı ödem ve asit görülür.',
        falseHighlight: 'tüm hastalarda yaygın anazarka tarzı ödem ve asit görülür',
      },
      {
        entityName: 'Akromegali (Somatotrop Hipofiz Adenomu, En İyi Tarama Testi IGF-1 ve Kesin Tanı OGTT ile GH Baskılanmaması)',
        patientVignette:
          '[2022 TUS Konsept İkizi] 49 yaşında erkek hasta yüz hatlarında kabalaşma, prognatizm, el-ayak numaralarında büyüme, karpal tünel sendromu, aşırı terleme ve yeni tanı diyabet ile başvuruyor.',
        clues: ['akral büyüme + prognatizm + karpal tünel sendromu + DM', 'pulsatil salınım nedeniyle bazal GH tek başına tanı koydurmaz', 'taramada IGF-1, doğrulamada 75 g OGTT'],
        questionPrompt: 'Bu hastada EN İYİ ilk tarama testi, KESİN tanı (doğrulama) testi ve en sık ölüm nedeni eşleşmesi hangisidir?',
        mechanism:
          'Büyüme hormonu (GH) pulsatil salındığı ve yarı ömrü kısa olduğu için rastgele GH ölçümü tanı koydurmaz. En iyi tarama testi düzeyi gün boyu stabil olan Serum IGF-1 (Somatomedin C) ölçümüdür; kesin tanı (altın standart) ise 75 g Oral Glukoz Tolerans Testi (OGTT) ile GH’nın <1 ng/mL’ye BASKILANAMAMASIDIR. En sık ölüm nedeni kardiyovasküler hastalıklardır.',
        whenCorrectNote: 'En iyi tarama: Serum IGF-1 • Kesin tanı (Altın standart): OGTT ile GH baskılanmaması • İlk tedavi: Transsfenoidal cerrahi • Medikal: Oktreotid/Lanreotid, Pegvisomant.',
        firstVsGold: 'İlk Tarama Testi: Serum IGF-1 Düzeyi • Kesin Doğrulama Testi: 75 g OGTT ile GH Baskılanma Testi • İlk Tercih Tedavi: Transsfenoidal Cerrahi.',
        pearl: 'Akromegalide kolorektal polip ve kolon kanseri riski arttığı için tanı anında mutlaka KOLONOSKOPİ taraması yapılmalıdır! Pegvisomant GH reseptör antagonistidir.',
        trueStatement: 'Akromegalide en iyi ilk tarama testi serum IGF-1 düzeyi, kesin tanı testi ise OGTT ile büyüme hormonunun baskılanamamasıdır.',
        falseStatement: 'Akromegali kesin tanısında insülin hipoglisemi testi ile büyüme hormonunun uyarılması altın standarttır.',
        falseHighlight: 'insülin hipoglisemi testi ile büyüme hormonunun uyarılması altın standarttır',
      },
      {
        entityName: 'Uygunsuz ADH Sendromu / SIADH (Övolemik Hiponatremi, Düşük Serum Ozmolalitesi, İdrar Ozmolalitesi > 100 mOsm/kg ve İdrar Na > 40 mEq/L)',
        patientVignette:
          '[2024 TUS Konsept İkizi] Küçük hücreli akciğer karsinomu tanılı hastada halsizlik ve konfüzyon gelişiyor. Fizik muayenede ödem veya dehidratasyon bulgusu yok (övolemik). Biyokimyada serum Na: 118 mEq/L, serum ozmolalitesi: 245 mOsm/kg, ürik asit: 2.4 mg/dL (düşük), idrar ozmolalitesi: 480 mOsm/kg ve idrar sodyumu: 65 mEq/L saptanıyor; tiroid ve adrenal fonksiyonları normal bulunuyor.',
        clues: ['küçük hücreli akciğer Ca (ektopik ADH)', 'övolemik hiponatremi + hipoürisemi', 'idrar ozmolalitesi > 100 mOsm/kg ve idrar Na > 40 mEq/L'],
        questionPrompt: 'Bu hastada en olası tanı, ilk basamak yaklaşım ve toplayıcı kanallardaki V2 reseptörlerini bloke eden spesifik ilaç grubu hangisidir?',
        mechanism:
          'SIADH’ta aşırı ADH (vazopressin) toplayıcı kanallardaki V2 reseptörleri üzerinden Akuaporin-2 kanallarını artırarak saf su tutar; gelişen hafif hipervolemi ANP salgılatıp idrarla Na+ ve ürik asit atılımını artırır (Övolemik hiponatremi + İdrar Na > 40 + Hipoürisemi). İlk basamak tedavi sıvı kısıtlamasıdır; V2 reseptör antagonistleri Tolvaptan / Konivaptan’dır.',
        whenCorrectNote: 'Övolemik hiponatremi + Serum Osm < 275 + İdrar Osm > 100 + İdrar Na > 40 + Hipoürisemi & Düşük BUN + Normal tiroid/adrenal + Tedavi: Sıvı kısıtlaması, Tolvaptan (V2 antagonisti).',
        firstVsGold: 'Asemptomatik/Hafif SIADH İlk Basamak: Sıvı Kısıtlaması • Ağır Nörolojik Semptomlu (Nöbet/Koma) SIADH: %3 Hipertonik Salin • Spesifik V2 Antagonisti: Tolvaptan.',
        pearl: 'SIADH tanısı koyabilmek için hastanın ÖVOLEMİK olması ve hipotiroidi ile adrenal yetmezliğin (kortizol eksikliği) mutlaka dışlanmış olması şarttır!',
        trueStatement: 'SIADH övolemik hiponatremi, düşük serum ürik asit düzeyi, yüksek idrar ozmolalitesi (>100 mOsm/kg) ve yüksek idrar sodyumu (>40 mEq/L) ile karakterizedir.',
        falseStatement: 'SIADH’ta temel bulgu ağır hipernatremi ve idrar ozmolalitesinin 50 mOsm/kg’ın altına düşmesidir.',
        falseHighlight: 'ağır hipernatremi ve idrar ozmolalitesinin 50 mOsm/kg’ın altına düşmesidir',
      },
      {
        entityName: 'Behçet Hastalığı (Tekrarlayan Oral Aft + Genital Ülser + Üveit, Paterji Testi ve En Ölümcül Komplikasyon Pulmoner Arter Anevrizması)',
        patientVignette:
          '[2023 TUS Konsept İkizi] Yılda 5–6 kez tekrarlayan ağrılı oral aftlar, skrotal skar bırakan ülserler, hipopyonlu panüveit ve alt ekstremitede tromboflebit öyküsü olan 28 yaşındaki erkek hasta acil servise masif hemoptizi ve dispne ile getiriliyor. Toraks BT anjiyografide iki taraflı pulmoner arter dallarında sakküler anevrizmalar saptanıyor.',
        clues: ['oral aft (%100 zorunlu kriter) + skar bırakan genital ülser + üveit', 'her çapta hem arter hem ven tutulumu', 'genç erkekte masif hemoptizi -> Pulmoner arter anevrizması'],
        questionPrompt: 'Her çapta arter ve veni tutabilen bu vaskülitte EN SIK mortalite (ölüm) nedeni olan vasküler komplikasyon hangisidir?',
        mechanism:
          'Behçet hastalığı HLA-B51 ilişkili, her çapta hem arter hem veni tutabilen tek sistemik vaskülittir (venöz tutulum arteriyelden daha sıktır, en sık yüzeyel/derin ven trombozu yapar). Ancak EN ÖLÜMCÜL (mortalitesi en yüksek) komplikasyonu Pulmoner Arter Anevrizması rüptürüne bağlı masif hemoptizidir!',
        whenCorrectNote: 'Zorunlu tanı kriteri: Yılda ≥3 kez tekrarlayan Oral Aft + Genital ülser (skar bırakır) + Paterji (+) + En sık ölüm nedeni: Pulmoner arter anevrizması.',
        firstVsGold: 'Tanıda Zorunlu Kriter: Tekrarlayan Oral Aft • En Sık Vasküler Tutulum: Venöz Tromboz • En Ölümcül Vasküler Tutulum: Pulmoner Arter Anevrizması.',
        pearl: 'Pulmoner arter anevrizmasının dünyada en sık nedeni Behçet hastalığıdır (Hughes-Stovin sendromu bunun varyantıdır); masif hemoptizi riski nedeniyle bu hastalarda antikoagülan verilmesinden kaçınılır, yüksek doz steroid + siklofosfamid/anti-TNF verilir!',
        trueStatement: 'Behçet hastalığı her çapta arter ve veni tutabilir; tanı için tekrarlayan oral aft zorunludur ve en ölümcül komplikasyonu pulmoner arter anevrizmasıdır.',
        falseStatement: 'Behçet hastalığında en sık ölüm nedeni glomerülonefrite bağlı son dönem böbrek yetmezliği olup oral aftlar iyileşirken derin skar bırakır.',
        falseHighlight: 'glomerülonefrite bağlı son dönem böbrek yetmezliği olup oral aftlar iyileşirken derin skar bırakır',
      },
    ],
  },
];
