import { DifferentialClusterSeed, TusClinicalGuideEntry } from './tusTypes';

export const KTBT_CLUSTERS: DifferentialClusterSeed[] = [
  // =========================================================================
  // 8. DAHİLİYE GRUBU (İç Hastalıkları, Kardiyoloji, Göğüs, Nöroloji, Enfeksiyon)
  // =========================================================================
  {
    branchId: 'dahiliye',
    subTopic: 'Kardiyoloji, Akut Koroner Sendromlar ve Kapak Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'İnferior + Sağ Ventrikül MI — Nitrat/Morfin Kontrendike, İlk Tercih IV Sıvı',
        patientVignette:
          '61 yaşında erkek hasta ani başlayan göğüs ağrısı ile acil servise getiriliyor. EKG’de DII, DIII ve aVF derivasyonlarında ST yükselmesi, V4R derivasyonunda 2 mm ST elevasyonu saptanıyor. Kan basıncı 82/50 mmHg, nabız 54/dk, akciğer oskültasyonu tamamen temiz ancak boyun venöz dolgunluğu (JVD) belirgin artmış.',
        clues: ['DII, DIII ve aVF derivasyonlarında ST yükselmesi', 'V4R', 'akciğer oskültasyonu tamamen temiz', 'boyun venöz dolgunluğu (JVD)'],
        questionPrompt: 'Sağ koroner arter (RCA) tıkanıklığına bağlı bu klinik tabloda akut yönetim yaklaşımı aşağıdakilerden hangisidir?',
        mechanism:
          'İnferior MI’a eşlik eden Sağ Ventrikül MI’da hipoteansiyon, juguler venöz dolgunluk ve temiz akciğer (Kussmaul bulgusu) triyadı görülür. Sağ ventrikül önyüke (preload) bağımlı olduğundan ilk tercih %0.9 NaCl (IV izotonik sıvı) yüklemesidir; önyükü düşüren Nitratlar ve Diüretikler kesinlikle kontrendikedir!',
        whenCorrectNote: 'DII-DIII-aVF + V4R ST elevasyonu, temiz akciğer + JVD + hipotansiyon -> İlk tercih IV izotonik sıvı, nitrat kontrendike.',
        firstVsGold: 'En Duyarlı EKG Derivasyonu: V4R • İlk Medikal Tedavi: IV %0.9 NaCl • Kesinlikle Kontrendike İlaçlar: Nitratlar, Diüretikler ve Morfin.',
        pearl: 'Sağ ventrikül MI (DII, DIII, aVF + V4R) önyüke bağımlıdır: İlk tedavi IV İZOTONİK SIVIDIR; NİTRAT ve DİÜRETİK kesinlikle verilmez!',
        trueStatement: 'Sağ ventrikül miyokard infarktüsünde (V4R ST elevasyonu) ilk tercih tedavi IV izotonik sıvı replasmanı olup nitratlar kontrendikedir.',
        falseStatement: 'Sağ ventrikül miyokard infarktüsünde boyun venöz dolgunluğunu azaltmak için ilk tercih intravenöz nitrogliserin ve furosemiddir.',
        falseHighlight: 'ilk tercih intravenöz nitrogliserin ve furosemiddir',
      },
      {
        entityName: 'Aort Stenozu — Senkop, Angina, Dispne ve Pulsus Parvus et Tardus',
        patientVignette:
          '73 yaşında erkek hasta eforla gelen göğüs ağrısı ve bayılma (senkop) atağı ile başvuruyor. Fizik muayenede sağ 2. interkostal aralıkta boyuna (karotislere) yayılan 4/6 şiddetinde kreşendo-dekreşendo sistolik ejeksiyon üfürümü, S2’de paradoksal çiftleşme ve "pulsus parvus et tardus" saptanıyor.',
        clues: ['senkop', 'sağ 2. interkostal aralıkta boyuna (karotislere) yayılan', 'pulsus parvus et tardus'],
        questionPrompt: 'Valsalva manevrası ve ayağa kalkmakla üfürüm şiddeti azalan bu kapak hastalığı aşağıdakilerden hangisidir?',
        mechanism:
          'Kalsifik aort stenozunda klasik triyad Angina, Senkop ve Dispne (Kalp yetmezliği) olup en kötü prognozlu semptom Dispnedir. Üfürümü karotislere yayılır; Valsalva ve ayağa kalkmakla önyük azaldığı için üfürüm AZALIR (Hipertrofik KMP’de ise Valsalva ile üfürüm ARTAR).',
        whenCorrectNote: 'Sağ 2. İKA’dan boyuna yayılan sistolik ejeksiyon üfürümü, pulsus parvus et tardus, S4 ve paradoksal S2 çiftleşmesi.',
        firstVsGold: 'Valsalva ile Üfürümü Artan iki patoloji: Hipertrofik KMP ve Mitral Valv Prolapsusu (MVP) • Valsalva ile Azalan: Aort Stenozu.',
        pearl: 'Valsalva ve ayağa kalkmakla tüm üfürümler (Aort stenozu dahil) azalır; sadece HKMP ve MVP üfürümü ARTAR!',
        trueStatement: 'Aort stenozunda karotislere yayılan sistolik ejeksiyon üfürümü ve pulsus parvus et tardus görülür; Valsalva ile üfürüm azalır.',
        falseStatement: 'Aort stenozunda üfürüm sol aksillaya yayılır ve Valsalva manevrası ile üfürümün şiddeti belirgin olarak artar.',
        falseHighlight: 'sol aksillaya yayılır ve Valsalva manevrası ile üfürümün şiddeti belirgin olarak artar',
      },
      {
        entityName: 'Kardiyak Tamponad — Beck Triyadı ve Pulsus Paradoksus',
        patientVignette:
          'Akciğer kanseri tanılı hastada ani gelişen dispne, hipotansiyon, boyun venöz dolgunluğu, kalp seslerinin derinden gelmesi, EKG’de elektriksel alternans ve inspiryumda sistolik kan basıncında 18 mmHg düşüş saptanıyor.',
        clues: ['hipotansiyon, boyun venöz dolgunluğu, kalp seslerinin derinden gelmesi', 'elektriksel alternans', 'inspiryumda sistolik kan basıncında 18 mmHg düşüş'],
        questionPrompt: 'JVP dalga formunda "y" inişinin kaybolduğu bu acil kardiyak tablo aşağıdakilerden hangisidir?',
        mechanism:
          'Perikard boşluğunda hızla sıvı birikmesiyle gelişen Kardiyak Tamponadda Beck Triyadı (Hipotansiyon + JVD + Derinden gelen kalp sesleri), Pulsus Paradoksus (inspiryumda SKB >10 mmHg düşmesi), Elektriksel Alternans ve JVP’de "x" inişi belirginken "y" inişinin KAYBOLMASI görülür.',
        whenCorrectNote: 'Beck triyadı, pulsus paradoksus (>10 mmHg), elektriksel alternans, JVP’de y inişi kaybı ve acil perikardiyosentez.',
        firstVsGold: 'Tamponad: Pulsus paradoksus belirgin, Kussmaul yok, JVP’de y inişi kaybolur • Konstriktif Perikardit: Kussmaul belirgin, perikardiyal vuru, derin y inişi.',
        pearl: 'Kardiyak tamponadda diyastol boyunca ventrikül doluşu engellendiği için JVP’de "y" inişi KAYBOLUR ve Pulsus Paradoksus görülür.',
        trueStatement: 'Kardiyak tamponadda Beck triyadı, pulsus paradoksus, EKG’de elektriksel alternans ve juguler venöz basınçta y inişinin kaybı görülür.',
        falseStatement: 'Kardiyak tamponadda juguler venöz dalgada çok derin bir y inişi (Friedreich bulgusu) ve perikardiyal knock duyulur.',
        falseHighlight: 'çok derin bir y inişi (Friedreich bulgusu) ve perikardiyal knock',
      },
      {
        entityName: 'Nefrotik Sendrom (Minimal Değişiklik vs Membranöz Nefropati) ve Renal Ven Trombozu',
        patientVignette:
          '52 yaşında erkek hasta yaygın ödem ve köpüklü idrar ile başvuruyor. 24 saatlik idrarda 6.8 g/gün proteinüri, hipoalbüminemi ve hiperlipidemi saptanıyor. Böbrek biyopsisinde bazal membranda diffüz kalınlaşma, "spike and dome" görünümü ve anti-PLA2R antikor pozitifliği izleniyor; takipte ani yan ağrısı ve hematüri gelişiyor.',
        clues: ['6.8 g/gün proteinüri', 'spike and dome', 'anti-PLA2R', 'ani yan ağrısı ve hematüri'],
        questionPrompt: 'İdrarla Antitrombin-III kaybına bağlı renal ven trombozu riskinin en yüksek olduğu bu glomerülopati hangisidir?',
        mechanism:
          'Membranöz nefropati erişkinde primer nefrotik sendromun en sık nedenlerinden biridir; anti-PLA2R antikorları, subepitelyal immün birikim ("spike and dome") ile karakterizedir. İdrarla Antitrombin-III kaybına bağlı hiperkoagülabilite ve Renal Ven Trombozu en sık Membranöz Nefropatide görülür.',
        whenCorrectNote: 'Anti-PLA2R pozitifliği, subepitelyal spike-and-dome birikimi ve en yüksek Renal Ven Trombozu riski.',
        firstVsGold: 'Çocukta En Sık Nefrotik Sendrom: Minimal Değişiklik Hastalığı (Steroid yanıtı mükemmel) • Renal Ven Trombozu En Sık: Membranöz Nefropati.',
        pearl: 'Nefrotik sendromda idrarla Antitrombin-III kaybına bağlı hiperkoagülabilite gelişir; Renal Ven Trombozu en sık Membranöz Nefropatide görülür.',
        trueStatement: 'Membranöz nefropatide anti-PLA2R antikorları pozitif olup nefrotik sendromlar içinde renal ven trombozu riski en yüksek olan tiptir.',
        falseStatement: 'Nefrotik sendromda idrarla protein C ve S sentezi aşırı azaldığı için kanama diyatezi en sık komplikasyondur.',
        falseHighlight: 'kanama diyatezi en sık komplikasyondur',
      },
      {
        entityName: 'Akut Pulmoner Emboli — İlk Tercih BT Pulmoner Anjiyografi & Masif Embolide Trombolitik',
        patientVignette:
          'Kalça protezi ameliyatından 6 gün sonra ani başlayan nefes darlığı, plöritik göğüs ağrısı, taşikardi ve hipoksemi gelişen 67 yaşında hastada Wells skoru yüksek saptanıyor. EKG’de sinüs taşikardisi ve S1Q3T3 paterni mevcut, kan basıncı 76/45 mmHg (hipotansif/şok) ve EKO’da sağ ventrikül disfonksiyonu görülüyor.',
        clues: ['Kalça protezi ameliyatından 6 gün sonra', 'S1Q3T3', '76/45 mmHg', 'sağ ventrikül disfonksiyonu'],
        questionPrompt: 'Hemodinamik olarak instabil (yüksek riskli / masif) pulmoner embolide hayat kurtarıcı ilk tedavi hangisidir?',
        mechanism:
          'Pulmoner embolide en sık semptom dispne, en sık fizik muayene bulgusu takipne, en sık EKG bulgusu sinüs taşikardisidir. Yüksek olasılıklı hastada tanı için ilk tercih BT Pulmoner Anjiyografidir. Hipotansiyon/şok (SKB <90 mmHg) varsa "Yüksek Riskli (Masif) PE" kabul edilir ve acil sistemik Trombolitik (tPA / Alteplaz) verilir.',
        whenCorrectNote: 'Hipotansiyon/şok eşlik eden masif pulmoner embolide acil sistemik trombolitik (tPA) tedavisi.',
        firstVsGold: 'Düşük olasılıkta dışlama testi: D-Dimer • Klinikte Pratik Tanı Standardı: BT Pulmoner Anjiyografi • Gebede/Böbrek yetmezliğinde: V/Q Sintigrafisi.',
        pearl: 'Hipotansiyon (SKB <90 mmHg) ile seyreden masif pulmoner embolide ilk tercih tedavi sistemik Trombolitik (tPA) uygulamasıdır.',
        trueStatement: 'Hemodinamik instabilite (hipotansiyon/şok) ile seyreden masif pulmoner embolide ilk tercih tedavi sistemik trombolitik (tPA) verilmesidir.',
        falseStatement: 'Yüksek klinik olasılıklı pulmoner embolide tanı koymak için yalnız D-dimer bakılması yeterli ve altın standarttır.',
        falseHighlight: 'yalnız D-dimer bakılması yeterli ve altın standarttır',
      },
    ],
  },
  // =========================================================================
  // 9. PEDİATRİ (Çocuk Sağlığı ve Hastalıkları)
  // =========================================================================
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan, Çocuk Kardiyolojisi, Enfeksiyon ve Metabolik Aciller',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Kawasaki Hastalığı — Koroner Arter Anevrizması ve IVIG + Aspirin Tedavisi',
        patientVignette:
          '3 yaşında erkek çocuk 6 gündür düşmeyen ateş, eksüdasız bilateral konjonktivit, çilek dili ve dudaklarda çatlama, el-ayak sırtında ödem/soyulma, polimorf döküntü ve tek taraflı >1.5 cm servikal lenfadenopati ile getiriliyor.',
        clues: ['6 gündür düşmeyen ateş', 'eksüdasız bilateral konjonktivit', 'çilek dili', 'el-ayak sırtında ödem/soyulma'],
        questionPrompt: 'Tedavi edilmediğinde en sık koroner arter anevrizmasına yol açan bu vaskülitte temel tedavi hangisidir?',
        mechanism:
          'Kawasaki hastalığı çocukluk çağında orta çaplı arterleri (özellikle koroner arterleri) tutan mukokütanöz lenf nodu sendromudur (PAN’ın çocukluk eşdeğeri). Tanı için ≥5 gün ateş + 5 ana kriterden en az 4’ü gerekir. Tedavide Koroner Arter Anevrizmasını önlemek için ilk 10 günde yüksek doz İntravenöz İmmünglobulin (IVIG) + Aspirin verilir.',
        whenCorrectNote: '≥5 gün ateş + KREMA kriterleri, koroner arter anevrizması riski, tedavide IVIG + Aspirin.',
        firstVsGold: 'En Korkulan Komplikasyon: Koroner arter anevrizması/trombozu (Takip: Ekokardiyografi) • Tedavi: Yüksek doz IVIG + Aspirin.',
        pearl: 'Çocuklarda Reye sendromu riski nedeniyle viral enfeksiyonlarda aspirin kontrendike iken, Kawasaki hastalığında IVIG + ASPİRİN kullanılır!',
        trueStatement: 'Kawasaki hastalığında en korkulan komplikasyon koroner arter anevrizmasıdır ve tedavisinde yüksek doz IVIG ile birlikte aspirin kullanılır.',
        falseStatement: 'Kawasaki hastalığında pürülan konjonktivit görülür ve ilk tercih tedavi yüksek doz siklofosfamiddir.',
        falseHighlight: 'pürülan konjonktivit görülür ve ilk tercih tedavi yüksek doz siklofosfamiddir',
      },
      {
        entityName: 'Fallot Tetralojisi — Hipoksik Spell Atağı ve Diz-Göğüs (Squatting) Pozisyonu',
        patientVignette:
          '9 aylık siyanotik konjenital kalp hastalığı olan bebek ağlama sonrası derinleşen siyanoz, takipne ve pulmoner stenoz üfürümünün kaybolması (Hipoksik Spell atağı) ile acil servise getiriliyor. Telekardiyografide "Tahta Pabuç (Coeur en sabot)" görünümü mevcuttur.',
        clues: ['Hipoksik Spell atağı', 'pulmoner stenoz üfürümünün kaybolması', 'Tahta Pabuç (Coeur en sabot)'],
        questionPrompt: 'Erken çocukluk çağının en sık siyanotik konjenital kalp hastalığı olan bu tabloda ilk acil manevra hangisidir?',
        mechanism:
          'Fallot Tetralojisi 4 bileşenden oluşur: 1. Geniş VSD, 2. Pulmoner Stenoz (prognozu ve siyanozun derecesini belirleyen en önemli bileşen!), 3. Ata binen aort (Dekstropozisyon), 4. Sağ ventrikül hipertrofisi. Hipoksik spell atağında ilk yapılacak manevra sistemik vasküler direnci (SVR) artırarak sağdan sola şantı azaltan Diz-Göğüs (Knee-chest / Squatting) pozisyonudur; ayrıca O2, Morfin ve Propranolol verilir (Digoksin kontrendikedir!).',
        whenCorrectNote: 'Pulmoner stenoz + VSD + Ata binen aort + RVH, tahta pabuç kalp, spell atağında diz-göğüs pozisyonu + morfin + propranolol.',
        firstVsGold: 'Yenidoğan (İlk 24 saat) En Sık Siyanotik KKH: Büyük Arter Transpozisyonu (TGA) • 1 Yaş Sonrası En Sık Siyanotik KKH: Fallot Tetralojisi.',
        pearl: 'Fallot Tetralojisinde prognozu belirleyen en önemli kriter Pulmoner Stenozun derecesidir; hipoksik spell atağında Digoksin kontrendikedir!',
        trueStatement: 'Fallot tetralojisinde prognozu belirleyen en önemli bileşen pulmoner stenozun derecesidir; spell atağında ilk manevra diz-göğüs pozisyonudur.',
        falseStatement: 'Fallot tetralojisinin hipoksik spell atağında infundibuler spazmı çözmek için ilk tercih intravenöz digoksin uygulanmasıdır.',
        falseHighlight: 'ilk tercih intravenöz digoksin uygulanmasıdır',
      },
      {
        entityName: 'Hipertrofik Pilor Stenozu — Hipokloremik Hipokalemik Metabolik Alkaloz',
        patientVignette:
          '3 haftalık erkek bebek her beslenme sonrasında safrasız, fışkırır tarzda (projektil) kusma ve kusma sonrası tekrar açlık hissi ile getiriliyor. Sağ üst kadranda "zeytin (olive)" kitlesi palpe ediliyor ve kan gazında pH: 7.54, Cl: 84 mEq/L, K: 2.9 mEq/L saptanıyor.',
        clues: ['3 haftalık', 'safrasız, fışkırır tarzda (projektil) kusma', 'zeytin (olive) kitlesi', 'pH: 7.54, Cl: 84'],
        questionPrompt: 'Bu bebekte cerrahi (Ramstedt piloromiyotomi) öncesinde mutlak düzeltilmesi gereken metabolik tablo ve ilk tanı yöntemi hangisidir?',
        mechanism:
          'Mide çıkışı (pilor) darlığında mide asidi (HCl) kusma ile kaybedilir ve böbrekten H+ karşılığında K+ atılır (paradoksal asidüri). Sonuçta Hipokloremik, Hipokalemik Metabolik Alkaloz gelişir. Tanıda ilk tercih Ultrasonografidir. Pilor stenozu cerrahi bir acil DEĞİLDİR, medikal bir acildir: Önce sıvı-elektrolit ve alkaloz düzeltilir, sonra Ramstedt piloromiyotomi yapılır.',
        whenCorrectNote: '3-6. haftada safrasız projektil kusma, olive mass, USG ile tanı, hipokloremik hipokalemik metabolik alkaloz.',
        firstVsGold: 'İlk ve Kesin Görüntüleme: Ultrasonografi (Pilor kas kalınlığı ≥3-4 mm, kanal uzunluğu ≥15 mm) • İlk Yapılacak İşlem: IV %0.9 NaCl + KCl ile elektrolit düzeltimi.',
        pearl: 'Hipertrofik pilor stenozunda safrasız projektil kusma ve Hipokloremik Hipokalemik Metabolik Alkaloz görülür; önce sıvı-elektrolit düzeltilir!',
        trueStatement: 'Hipertrofik pilor stenozunda safrasız fışkırır tarzda kusma ve hipokloremik hipokalemik metabolik alkaloz gelişir; tanıda ilk tercih USG’dir.',
        falseStatement: 'Hipertrofik pilor stenozunda safralı kusma ve hiperkloremik metabolik asidoz görülür; sıvı verilmeden acil ameliyata alınır.',
        falseHighlight: 'safralı kusma ve hiperkloremik metabolik asidoz görülür; sıvı verilmeden acil',
      },
      {
        entityName: 'Nekrotizan Enterokolit (NEK) — Pnömatozis İntestinalis ve Çan Kulesi Bulgusu',
        patientVignette:
          'Prematüre doğan ve mama ile beslenen 10 günlük bebekte batın distansiyonu, safralı gastrik rezidü ve kanlı dışkılama gelişiyor. Ayakta direkt batın grafisinde bağırsak duvarı içinde hava kabarcıkları ("Pnömatozis intestinalis") ve portal vende gaz izleniyor.',
        clues: ['Prematüre', 'kanlı dışkılama', 'Pnömatozis intestinalis', 'portal vende gaz'],
        questionPrompt: 'Yenidoğanın en sık kazanılmış gastrointestinal acili olan bu tabloda kesin cerrahi endikasyonu hangisidir?',
        mechanism:
          'Nekrotizan Enterokolit (NEK) en sık terminal ileum ve sağ kolonu tutar. Radyolojide bağırsak duvarında hava görülmesi (Pnömatozis intestinalis) tanı koydurucudur. Başlangıç tedavisi: Enteral beslenmenin kesilmesi (NPO), NG dekompresyon ve geniş spektrumlu IV antibiyotiktir. Kesin cerrahi endikasyonu ise bağırsak perforasyonunu gösteren Pnömoperitoneum (serbest hava / futbol topu bulgusu) varlığıdır.',
        whenCorrectNote: 'Prematürite, kanlı gaita, direkt grafide pnömatozis intestinalis; perforasyon (pnömoperitoneum) varsa acil cerrahi.',
        firstVsGold: 'Tanısal Radyolojik Bulgu: Pnömatozis intestinalis • Mutlak Cerrahi Endikasyonu: Pnömoperitoneum (Diafragma altı serbest hava) veya portal ven gazı + klinik kötüleşme.',
        pearl: 'NEK için tanısal radyolojik bulgu Pnömatozis İntestinalistir; kesin cerrahi endikasyonu ise Pnömoperitoneumdur (serbest hava).',
        trueStatement: 'Nekrotizan enterokolitte (NEK) direkt grafide pnömatozis intestinalis tanısal olup pnömoperitoneum varlığı kesin cerrahi endikasyonudur.',
        falseStatement: 'Nekrotizan enterokolitte evre 1’den itibaren oral beslenme artırılarak acil kolektomi uygulanmalıdır.',
        falseHighlight: 'oral beslenme artırılarak acil kolektomi uygulanmalıdır',
      },
      {
        entityName: 'Fenilketonüri (FKÜ) — Fenilalanin Hidroksilaz / BH4 Eksikliği ve Küf Kokulu İdrar',
        patientVignette:
          'Topuk kanı taraması yapılmamış 7 aylık bebek açık ten-göz-saç rengi (hipopigmentasyon), egzama benzeri döküntü, mikrosefali, nöromotor gerilik ve idrarında "fare/küf kokusu" ile getiriliyor.',
        clues: ['hipopigmentasyon', 'mikrosefali', 'fare/küf kokusu'],
        questionPrompt: 'Tirozinin esansiyel aminoasit haline geldiği bu metabolik hastalıkta eksik olan enzim ve kofaktörü hangisidir?',
        mechanism:
          'Klasik Fenilketonüride Fenilalanin Hidroksilaz (veya malign FKÜ’de kofaktörü Tetrahidrobiopterin - BH4) eksiktir. Fenilalanin tirozine dönüşemez; melanin sentezi azalır (açık renk saç/göz), fenilasetat/fenillaktat idrarda küf kokusu yapar ve tirozin diyette esansiyel hale gelir.',
        whenCorrectNote: 'Fenilalanin hidroksilaz (kofaktör BH4) eksikliği, küf/fare kokulu idrar, hipopigmentasyon, tirozinin esansiyel olması.',
        firstVsGold: 'Tarama: Guthrie / Tandem MS (Bebek en az 24-48 saat proteinli beslendikten sonra) • Malign FKÜ farkı: BH4 eksikliği (Serotonin ve Dopamin de azalır, yalnız diyetle düzelmez!).',
        pearl: 'Fenilketonüride Fenilalanin Hidroksilaz (veya kofaktörü BH4) eksiktir; idrarda küf/fare kokusu olur ve Tirozin esansiyel hale gelir.',
        trueStatement: 'Fenilketonüride fenilalanin hidroksilaz veya kofaktörü BH4 eksikliği sonucu idrarda küf kokusu görülür ve tirozin esansiyel hale gelir.',
        falseStatement: 'Fenilketonüride dallı zincirli alfa-ketoasit dehidrogenaz eksiktir ve idrarda akçaağaç şurubu kokusu saptanır.',
        falseHighlight: 'dallı zincirli alfa-ketoasit dehidrogenaz eksiktir ve idrarda akçaağaç şurubu',
      },
    ],
  },
  // =========================================================================
  // 10. CERRAHİ GRUBU (Genel Cerrahi ve Cerrahi Branşlar)
  // =========================================================================
  {
    branchId: 'cerrahi',
    subTopic: 'Akut Karın, Hepatobiliyer Cerrahi, Travma ve Onkolojik Cerrahi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Akut Kolesistit — İlk Tercih USG, En Duyarlı (Altın Standart) HIDA Sintigrafisi',
        patientVignette:
          '46 yaşında kadın hasta yağlı yemek sonrası başlayan ve 8 saattir devam eden sağ üst kadran ağrısı, ateş, bulantı ve lökositoz ile başvuruyor. Derin inspiryumda sağ subkostal palpasyonla soluk alma duruyor (Murphy bulgusu pozitif).',
        clues: ['8 saattir devam eden sağ üst kadran ağrısı', 'ateş', 'Murphy bulgusu pozitif'],
        questionPrompt: 'Bu hastada tanı için İLK istenecek görüntüleme ile EN DUYARLI (altın standart) görüntüleme eşleştirmesi hangisidir?',
        mechanism:
          'Akut taşlı kolesistit sistik kanalın taşla tıkanması sonucu gelişir. Tanıda İLK istenecek görüntüleme yöntemi Ultrasonografidir (taş, duvar kalınlığı >4 mm, perikolesistik sıvı, sonografik Murphy). USG’nin tanı koyamadığı şüpheli olgularda EN DUYARLI (altın standart) yöntem HIDA (Biliyer) Sintigrafisidir (safra kesesinin dolmaması/görüntülenememesi tanı koydurur).',
        whenCorrectNote: 'Murphy bulgusu pozitif; İlk tercih görüntüleme USG, En duyarlı/Altın standart görüntüleme HIDA sintigrafisi, tedavi erken laparoskopik kolesistektomi.',
        firstVsGold: 'İlk Tercih Görüntüleme: Ultrasonografi (USG) • En Duyarlı / Altın Standart Görüntüleme: HIDA Sintigrafisi.',
        pearl: 'Akut kolesistitte İLK istenecek tetkik USG, EN DUYARLI (Altın Standart) tetkik ise HIDA sintigrafisidir!',
        trueStatement: 'Akut kolesistit şüphesinde ilk istenecek görüntüleme ultrasonografi (USG), en duyarlı altın standart görüntüleme ise HIDA sintigrafisidir.',
        falseStatement: 'Akut kolesistit şüphesinde ilk istenecek görüntüleme yöntemi ERCP olup altın standart yöntem direkt batın grafisidir.',
        falseHighlight: 'ilk istenecek görüntüleme yöntemi ERCP olup altın standart yöntem direkt batın',
      },
      {
        entityName: 'Akut Süpüratif Kolanjit — Charcot Triyadı, Reynolds Pentadı ve Acil ERCP',
        patientVignette:
          'Koledokolitiazis öyküsü olan 68 yaşında hastada titremeyle yükselen ateş, sağ üst kadran ağrısı, sarılık (Charcot triyadı) tablosuna hipotansiyon ve bilinç bulanıklığı (Reynolds pentadı) ekleniyor.',
        clues: ['ateş, sağ üst kadran ağrısı, sarılık (Charcot triyadı)', 'hipotansiyon ve bilinç bulanıklığı (Reynolds pentadı)'],
        questionPrompt: 'Sıvı resüsitasyonu ve IV antibiyotik başlanan bu hastada hayat kurtarıcı biliyer dekompresyon yöntemi hangisidir?',
        mechanism:
          'Koledok tıkanıklığı zemininde gelişen Akut Kolanjitte Ateş + Sağ üst kadran ağrısı + Sarılık = Charcot Triyadı; buna Hipotansiyon (Şok) + Konfüzyon eklenirse = Reynolds Pentadı adını alır. En sık etken E. coli’dir. Tedavide sıvı + antibiyotik sonrası ilk tercih ve altın standart biliyer drenaj yöntemi ERCP (Endoskopik sfinkterotomi / stent) uygulamasıdır.',
        whenCorrectNote: 'Charcot triyadı + Hipotansiyon + Konfüzyon = Reynolds pentadı; ilk tercih drenaj yöntemi ERCP.',
        firstVsGold: 'Charcot Triyadı (3 bulgu) + Şok & Konfüzyon = Reynolds Pentadı (5 bulgu) • İlk Tercih Dekompresyon: ERCP.',
        pearl: 'Charcot triyadına Hipotansiyon ve Konfüzyon eklenmesine Reynolds Pentadı denir; tedavisinde acil ERCP ile biliyer drenaj şarttır.',
        trueStatement: 'Akut kolanjitte Charcot triyadına hipotansiyon ve bilinç değişikliği eklenmesi Reynolds pentadı olarak adlandırılır ve tedavisinde ERCP ile drenaj yapılır.',
        falseStatement: 'Akut toksik kolanjitte biliyer drenaj yapılmadan doğrudan acil açık kolesistektomi yapmak ilk tercih yaklaşımdır.',
        falseHighlight: 'biliyer drenaj yapılmadan doğrudan acil açık kolesistektomi',
      },
      {
        entityName: 'Akut Pankreatit — Ranson Kriterlerinde Amilaz/Lipaz Yoktur, Nekroz İçin Kontrastlı BT',
        patientVignette:
          'Safra taşı öyküsü olan 55 yaşında hastada kuşak tarzında sırta yayılan şiddetli epigastrik ağrı, kusma ve serum amilaz/lipaz düzeylerinde normalin 5 katı artış saptanıyor.',
        clues: ['kuşak tarzında sırta yayılan şiddetli epigastrik ağrı', 'amilaz/lipaz düzeylerinde normalin 5 katı artış'],
        questionPrompt: 'Bu hastada Ranson prognoz kriterleri ve pankreatik nekroz değerlendirmesi açısından hangisi doğrudur?',
        mechanism:
          'Akut pankreatitin en sık nedeni safra taşları, ikinci sık nedeni alkoldür. Tanıda Lipaz, amilaza göre daha özgül ve daha uzun süre yüksek kalan enzimdir. Ancak serum Amilaz ve Lipaz yüksekliğinin derecesi hastalık şiddetini/prognozunu GÖSTERMEZ ve Ranson kriterlerinde YER ALMAZ! Pankreatik nekrozu değerlendirmede altın standart (72. saatten sonra çekilen) İV Kontrastlı Dinamik BT’dir.',
        whenCorrectNote: 'Tanıda lipaz daha özgül; Amilaz, Lipaz ve Bilirubin Ranson kriterlerinde YOKTUR; nekroz için altın standart Kontrastlı BT.',
        firstVsGold: 'Ranson Giriş Kriterleri (0. saat): Yaş, Lökosit, Glukoz, LDH, AST • 48. Saat: Hct düşüşü, BUN artışı, Kalsiyum <8, PaO2 <60, Baz açığı, Sıvı sekestrasyonu.',
        pearl: 'Amilaz, Lipaz ve Bilirubin düzeyleri akut pankreatitin prognozunu göstermez ve Ranson kriterleri arasında YER ALMAZ!',
        trueStatement: 'Akut pankreatitte serum amilaz ve lipaz düzeyleri hastalık prognozunu göstermez ve Ranson kriterleri içinde yer almaz.',
        falseStatement: 'Akut pankreatitte serum amilaz düzeyinin 2000 U/L üzerinde olması Ranson kriterlerindeki en güçlü mortalite göstergesidir.',
        falseHighlight: 'Ranson kriterlerindeki en güçlü mortalite göstergesidir',
      },
      {
        entityName: 'Tansiyon Pnömotoraks — Görüntüleme Beklemeden Acil İğne Torakosentez',
        patientVignette:
          'Toraks travması sonrası acil servise getirilen hastada şiddetli dispne, siyanoz, hipotansiyon (obstrüktif şok), boyun venöz dolgunluğu, etkilenen hemitoraksta solunum seslerinin tamamen kaybolması, hipersonorite ve trakeanın karşı tarafa deviye olması saptanıyor.',
        clues: ['obstrüktif şok', 'boyun venöz dolgunluğu', 'solunum seslerinin tamamen kaybolması', 'trakeanın karşı tarafa deviye olması'],
        questionPrompt: 'Bu hastada saniyeler içinde yapılması gereken ilk hayat kurtarıcı girişim aşağıdakilerden hangisidir?',
        mechanism:
          'Tansiyon pnömotoraks klinik bir tanıdır! Akciğer grafisi çekmek için beklemek hastanın ölümüne yol açar. Tanı fizik muayene ile konulduğu anda GÖRÜNTÜLEME BEKLENMEDEN acil İğne Torakosentez (dekompresyon) yapılarak tansiyon pnömotoraks basit pnömotoraksa dönüştürülür, ardından Tüp Torakostomi (göğüs tüpü) takılır.',
        whenCorrectNote: 'Klinik tanıdır (görüntüleme beklenmez!), trakea karşıya kayar, JVD + hipotansiyon vardır -> Acil iğne dekompresyon + tüp torakostomi.',
        firstVsGold: 'Kardiyak Tamponad vs. Tansiyon Pnömotoraks: İkisinde de Hipotansiyon + JVD vardır; Tamponadda solunum sesleri eşittir, Tansiyon Pnömotoraksta tek taraflı kaybolur ve trakea kayar!',
        pearl: 'Tansiyon pnömotoraks KLİNİK bir tanıdır: Akciğer grafisi beklenmeden derhal İğne Torakosentez (ardından tüp torakostomi) yapılır!',
        trueStatement: 'Tansiyon pnömotoraks klinik bir tanı olup akciğer grafisi beklenmeden derhal iğne torakosentez ile dekompresyon yapılmalıdır.',
        falseStatement: 'Tansiyon pnömotoraks şüphesinde tedaviye başlamadan önce mutlaka yüksek çözünürlüklü toraks BT çekilerek tanı doğrulanmalıdır.',
        falseHighlight: 'tedaviye başlamadan önce mutlaka yüksek çözünürlüklü toraks BT çekilerek',
      },
      {
        entityName: 'İnce vs. Kalın Bağırsak İleusu — En Sık Nedenler (Adhezyon vs. Kolorektal Kanser)',
        patientVignette:
          'Geçirilmiş apendektomi öyküsü olan 42 yaşında hastada kolik karın ağrısı, kusma, gaz-gaita çıkaramama ve ayakta direkt batın grafisinde merdiven basamağı şeklinde hava-sıvı seviyeleri saptanıyor.',
        clues: ['Geçirilmiş apendektomi öyküsü', 'gaz-gaita çıkaramama', 'hava-sıvı seviyeleri'],
        questionPrompt: 'Erişkinlerde mekanik İnce Bağırsak ve Kalın Bağırsak obstrüksiyonlarının (ileus) en sık nedenleri sırasıyla hangisidir?',
        mechanism:
          'Mekanik İnce Bağırsak Obstrüksiyonunun (İBO) en sık nedeni: 1. Postoperatif Adhezyon (Yapışıklık / Brid), 2. İnkarsere Herni (Fıtık), 3. Tümördür. Mekanik Kalın Bağırsak (Kolon) Obstrüksiyonunun en sık nedeni ise: 1. Kolorektal Kanser (özellikle sol kolon), 2. Volvulus (en sık sigmoid), 3. Divertikülittir.',
        whenCorrectNote: 'İnce bağırsak obstrüksiyonu en sık: Postoperatif adhezyon (yapışıklık); Kalın bağırsak obstrüksiyonu en sık: Kolorektal kanser.',
        firstVsGold: 'İnce Bağırsak İleusu: 1. Adhezyon, 2. Herni, 3. Tümör • Kalın Bağırsak İleusu: 1. Kolorektal Kanser, 2. Sigmoid Volvulus, 3. Divertikülit.',
        pearl: 'İnce bağırsak ileusunun en sık nedeni Postoperatif Adhezyon (Yapışıklık), kalın bağırsak ileusunun en sık nedeni ise Kolorektal Kanserdir.',
        trueStatement: 'Erişkinde mekanik ince bağırsak tıkanıklığının en sık nedeni postoperatif adhezyon, kalın bağırsak tıkanıklığının en sık nedeni ise kolorektal kanserdir.',
        falseStatement: 'İnce bağırsak obstrüksiyonunun en sık nedeni safra taşı ileusu, kalın bağırsak obstrüksiyonunun en sık nedeni ise çekal volvulustur.',
        falseHighlight: 'en sık nedeni safra taşı ileusu, kalın bağırsak obstrüksiyonunun en sık nedeni ise çekal',
      },
    ],
  },
  // =========================================================================
  // 11. KADIN HASTALIKLARI VE DOĞUM (Obstetrik & Jinekoloji)
  // =========================================================================
  {
    branchId: 'kadindogum',
    subTopic: 'Obstetrik Kanamalar, Preeklampsi, Jinekolojik Onkoloji ve Endokrinoloji',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Plasenta Previa vs. Ablasyo Plasenta — Ağrısız Kanama ve Dijital Tuşe Kontrendikasyonu',
        patientVignette:
          '32 haftalık gebe gece uykudan uyandıran, ağrısız, parlak kırmızı renkli vajinal kanama ile acil servise başvuruyor. Uterus tonusu yumuşak ve fetal kalp atımları olağan saptanıyor.',
        clues: ['32 haftalık gebe', 'ağrısız, parlak kırmızı renkli vajinal kanama', 'Uterus tonusu yumuşak'],
        questionPrompt: 'Bu hastada kesinlikle kontrendike olan işlem ve tanı koymak için altın standart yöntem hangisidir?',
        mechanism:
          'İkinci yarı gebelikte ağrısız, parlak kırmızı vajinal kanama ve yumuşak uterus Plasenta Previa için tipiktir (Ablasyo plasentada ise ağrılı, koyu renkli kanama ve tahta/hipertonik uterus vardır). Plasenta previa şüphesinde masif kanamayı tetikleyeceği için Dijital Vajinal Tuşe KESİNLİKLE KONTRENDİKEDİR! Tanıda altın standart Transvajinal Ultrasonografidir (güvenlidir).',
        whenCorrectNote: 'Ağrısız parlak kırmızı kanama = Plasenta previa; vajinal dijital tuşe kesinlikle kontrendikedir, tanı Transvajinal USG ile konur.',
        firstVsGold: 'Plasenta Previa: Ağrısız parlak kanama, uterus yumuşak, TV-USG altın standart • Ablasyo Plasenta: Ağrılı koyu kanama, hipertonik uterus, DİK en sık obstetrik neden.',
        pearl: '3. trimester kanaması olan gebede plasenta previa dışlanmadan KESİNLİKLE vajinal dijital tuşe yapılmaz; tanı Transvajinal USG ile konur.',
        trueStatement: 'Plasenta previa ağrısız parlak kırmızı vajinal kanama ile karakterizedir; vajinal dijital tuşe kesinlikle kontrendike olup tanı transvajinal USG ile konur.',
        falseStatement: 'Plasenta previa şüphesi olan gebede ilk yapılması gereken işlem servikal açıklığı bimanuel dijital tuşe ile kontrol etmektir.',
        falseHighlight: 'ilk yapılması gereken işlem servikal açıklığı bimanuel dijital tuşe ile kontrol',
      },
      {
        entityName: 'Ağır Preeklampsi ve Eklampsi — Nöbet Profilaksisi Magnezyum Sülfat & Antidotu Kalsiyum Glukonat',
        patientVignette:
          '35 haftalık gebe kan basıncı 170/115 mmHg, baş ağrısı, görme bulanıklığı, sağ üst kadran ağrısı ve 2+ proteinüri ile yatırılıyor ve eklampsi profilaksisi için IV Magnezyum Sülfat infüzyonu başlanıyor. Takipte hastanın patella refleksi kayboluyor ve solunum sayısı 9/dk’ya düşüyor.',
        clues: ['170/115 mmHg', 'Magnezyum Sülfat', 'patella refleksi kayboluyor', 'solunum sayısı 9/dk’ya'],
        questionPrompt: 'Magnezyum sülfat toksisitesinin İLK bulgusu ve derhal uygulanması gereken spesifik antidotu aşağıdakilerden hangisidir?',
        mechanism:
          'Ağır preeklampsi ve eklampside nöbet profilaksisi ve tedavisi için altın standart ilaç Magnezyum Sülfattır (antihipertansif değildir!). MgSO4 toksisitesinin İLK klinik bulgusu derin tendon refleksi (patella refleksi) kaybıdır (4-5 mEq/L / 8-10 mg/dL); ardından solunum depresyonu ve kardiyak arrest gelişir. Spesifik antidotu İntravenöz Kalsiyum Glukonattır.',
        whenCorrectNote: 'Eklampsi profilaksisinde MgSO4; toksisitenin ilk bulgusu patella refleksi kaybı, spesifik antidotu Kalsiyum Glukonat.',
        firstVsGold: 'Gebelikte Güvenli Antihipertansifler: Metildopa, Labetalol, Nifedipin, Hidralazin • Gebelikte Kesin Kontrendike: ACE İnhibitörleri ve ARB’ler.',
        pearl: 'Magnezyum sülfat toksisitesinin İLK bulgusu Patella Refleksi kaybıdır; spesifik antidotu ise IV Kalsiyum Glukonattır.',
        trueStatement: 'Eklampsi profilaksisinde kullanılan magnezyum sülfat toksisitesinin ilk bulgusu patella refleksi kaybı olup antidotu kalsiyum glukonattır.',
        falseStatement: 'Preeklampsi tedavisinde ilk tercih antihipertansif ilaç enalapril veya losartan olup magnezyum toksisitesinde potasyum klorür verilir.',
        falseHighlight: 'ilk tercih antihipertansif ilaç enalapril veya losartan olup magnezyum toksisitesinde potasyum',
      },
      {
        entityName: 'Ektopik Gebelik — Transvajinal USG + Beta-hCG Eşiği ve Metotreksat Kontrendikasyonları',
        patientVignette:
          'Son adet tarihine göre 6 haftalık gebe olan 27 yaşında hasta lekelenme tarzında vajinal kanama ve tek taraflı pelvik ağrı ile başvuruyor. Serum Beta-hCG düzeyi 2.800 mIU/mL olmasına rağmen transvajinal USG’de intrauterin gebelik kesesi izlenmiyor ve sağ tubada 3 cm’lik rüptüre olmamış adneksiyal kitle saptanıyor.',
        clues: ['Beta-hCG düzeyi 2.800 mIU/mL', 'intrauterin gebelik kesesi izlenmiyor', 'sağ tubada 3 cm’lik'],
        questionPrompt: 'Ektopik gebeliğin en sık yerleşim yeri ve medikal (Metotreksat) tedavi için mutlak kontrendikasyon aşağıdakilerden hangisidir?',
        mechanism:
          'Ektopik gebelik en sık Tuba uterina’nın AMPULLA bölgesine yerleşir; en geç rüptüre olan ise İstmus (veya interstisyel) bölgesidir. Hemodinamik olarak stabil, rüptüre olmamış, kitle çapı <3.5-4 cm ve fetal kalp atımı negatif hastalarda sistemik Metotreksat (folik asit antagonisti) verilir. Hemodinamik instabilite ve tüp rüptürü Metotreksat için mutlak kontrendikasyon olup acil cerrahi (salpingektomi/salpingostomi) gerektirir.',
        whenCorrectNote: 'En sık yerleşim Ampulla; rüptür veya hemodinamik instabilite varsa Metotreksat kontrendikedir, cerrahi yapılır.',
        firstVsGold: 'En Sık Yerleşim: Ampulla • Tanısal Altın Standart: Laparoskopi (Klinikte pratik tanı: TV-USG + Seri Beta-hCG).',
        pearl: 'Ektopik gebelik en sık tubanın Ampulla bölgesine yerleşir; tüp rüptürü veya hemodinamik instabilite varsa Metotreksat kontrendikedir!',
        trueStatement: 'Ektopik gebelik en sık tuba uterinanın ampulla bölgesine yerleşir; rüptür veya hemodinamik instabilite varlığında metotreksat kontrendikedir.',
        falseStatement: 'Ektopik gebelik en sık servikse yerleşir ve batın içi serbest kanaması olan şoktaki hastada ilk tercih oral metotreksattır.',
        falseHighlight: 'en sık servikse yerleşir ve batın içi serbest kanaması olan şoktaki hastada ilk tercih oral metotreksattır',
      },
      {
        entityName: 'Endometriozis — Kesin Tanı Laparoskopik Biyopsi, En Sık Yerleşim Over (Çikolata Kisti)',
        patientVignette:
          '31 yaşında nullipar kadın hasta sekonder progresif dismenore, disparoni, kronik pelvik ağrı ve 2 yıldır infertilite şikayeti ile başvuruyor. Transvajinal USG’de sol overde homojen buzlu cam görünümünde 5 cm kist (endometrioma) saptanıyor.',
        clues: ['progresif dismenore, disparoni', 'infertilite', 'buzlu cam görünümünde', 'endometrioma'],
        questionPrompt: 'Bu hastalıkta en sık pelvik yerleşim yeri ve kesin tanı için altın standart yöntem aşağıdakilerden hangisidir?',
        mechanism:
          'Endometrial gland ve stromanın uterus kavitesi dışında bulunmasına Endometriozis denir (myometrium içinde bulunmasına ise Adenomyozis denir). Endometriozis en sık OVER’e yerleşir (Endometrioma / Çikolata kisti), ikinci sıklıkta Douglas boşluğu ve uterosakral ligamentleri tutar. Kesin tanı için altın standart yöntem Laparoskopi ile direkt gözlem ve histopatolojik biyopsidir.',
        whenCorrectNote: 'Dismenore + disparoni + infertilite; en sık yerleşim Over, kesin tanı altın standart Laparoskopi + Biyopsi.',
        firstVsGold: 'En Sık Yerleşim: Over (Endometrioma) • Kesin Tanı (Altın Standart): Laparoskopi + Histopatolojik inceleme.',
        pearl: 'Endometriozis en sık Overe yerleşir; kesin tanısında altın standart yöntem Laparoskopi ve biyopsidir.',
        trueStatement: 'Endometriozisin en sık yerleşim yeri overler olup kesin tanısında altın standart yöntem laparoskopi ve histopatolojik doğrulamadır.',
        falseStatement: 'Endometriozis en sık servikse yerleşir ve kesin tanısı yalnız serum CA-125 düzeyi ölçülerek konulur.',
        falseHighlight: 'en sık servikse yerleşir ve kesin tanısı yalnız serum CA-125',
      },
      {
        entityName: 'Over Tümörleri — Patognomonik Cisimcikler (Call-Exner, Schiller-Duval ve Meigs Sendromu)',
        patientVignette:
          'Pelvik kitle nedeniyle opere edilen üç farklı hastanın patoloji raporlarında; 1. hastada östrojen salgılayan tümörde "Call-Exner cisimcikleri ve kahve çekirdeği nükleus", 2. hastada AFP yüksekliği ile giden tümörde "Schiller-Duval cisimcikleri", 3. hastada ise benign over tümörüne eşlik eden "asit ve sağ plevral efüzyon" raporlanıyor.',
        clues: ['Call-Exner cisimcikleri', 'Schiller-Duval cisimcikleri', 'asit ve sağ plevral efüzyon'],
        questionPrompt: 'Bu üç histopatolojik/klinik tablonun karşılık geldiği over tümörleri sırasıyla hangisidir?',
        mechanism:
          '1. Granüloza Hücreli Tümör: Sex-kord stromal tümördür, östrojen (ve inhibin) salgılar, puberte prekoks ve endometrial hiperplazi/kanser yapar; Call-Exner cisimcikleri ve kahve çekirdeği nükleus tipiktir.\n2. Yolk Sac (Endodermal Sinüs) Tümörü: Çocuk/adölesanda en malign germ hücreli tümördür; AFP yükselir ve glomerül benzeri Schiller-Duval cisimcikleri patognomoniktir.\n3. Meigs Sendromu: Over Fibromu (benign stromal tümör) + Asit + Hidrotoraks (Plevral efüzyon) triyadıdır; tümör çıkarılınca sıvılar kaybolur.',
        whenCorrectNote: 'Call-Exner = Granüloza hücreli tümör; Schiller-Duval + AFP = Yolk sac tümörü; Over fibromu + Asit + Hidrotoraks = Meigs sendromu.',
        firstVsGold: 'Disgerminom: LDH ve PLAP yükselir (Radyosensitif) • Koryokarsinom: Beta-hCG yükselir • Yolk Sac: AFP yükselir • Granüloza: İnhibin ve Östrojen yükselir.',
        pearl: 'Call-Exner cisimciği = Granüloza Hücreli Tümör (Östrojen/İnhibin); Schiller-Duval cisimciği = Yolk Sac Tümörü (AFP).',
        trueStatement: 'Granüloza hücreli over tümöründe Call-Exner cisimcikleri ve östrojen üretimi; Yolk sac tümöründe ise Schiller-Duval cisimcikleri ve AFP artışı görülür.',
        falseStatement: 'Schiller-Duval cisimcikleri seröz kistadenokarsinom için patognomonik olup yüksek düzeyde inhibin salgılar.',
        falseHighlight: 'seröz kistadenokarsinom için patognomonik olup yüksek düzeyde inhibin',
      },
    ],
  },
];

export const TUS_CLINICAL_GUIDE_ENTRIES: TusClinicalGuideEntry[] = [
  {
    id: 'guide-1',
    category: 'Tanı & Altın Standart',
    branchId: 'cerrahi',
    branchName: 'Cerrahi Grubu',
    title: 'Akut Kolesistit Tanı Yaklaşımı',
    firstChoiceOrFeature: 'İlk İstenecek Görüntüleme: Ultrasonografi (USG)',
    goldStandardOrTarget: 'En Duyarlı (Altın Standart): HIDA (Biliyer) Sintigrafisi',
    clinicalTrapNote: 'TUS’ta "ilk istenecek" sorulursa USG, "en duyarlı / altın standart" sorulursa HIDA sintigrafisi seçilmelidir.',
    pearl: 'USG’de taş, >4 mm duvar kalınlığı ve sonografik Murphy; HIDA’da ise safra kesesinin görüntülenememesi tanısaldır.',
  },
  {
    id: 'guide-2',
    category: 'Tanı & Altın Standart',
    branchId: 'dahiliye',
    branchName: 'Dahiliye Grubu',
    title: 'Akut Mezenter İskemi & Böbrek Taşı (Nefrolitiazis)',
    firstChoiceOrFeature: 'Böbrek Taşı Altın Standart: Kontrastsız Spiral BT • Mezenter İskemi Pratik İlk Tercih: BT Anjiyografi',
    goldStandardOrTarget: 'Akut Mezenter İskemi Altın Standart: Selektif Mezenterik Anjiyografi',
    clinicalTrapNote: 'Fizik muayene ile uyumsuz şiddetli karın ağrısı + atriyal fibrilasyon = Akut Mezenter İskemi (En sık SMA embolisi).',
    pearl: 'Üriner sistem taşlarında hem ilk hem altın standart görüntüleme Kontrastsız Helikal (Spiral) BT’dir.',
  },
  {
    id: 'guide-3',
    category: 'Tanı & Altın Standart',
    branchId: 'kadindogum',
    branchName: 'Kadın Hastalıkları ve Doğum',
    title: 'Endometriozis ve Ektopik Gebelik',
    firstChoiceOrFeature: 'İlk Görüntüleme: Transvajinal Ultrasonografi (TV-USG)',
    goldStandardOrTarget: 'Kesin Tanı (Altın Standart): Laparoskopi (Endometrioziste + Biyopsi)',
    clinicalTrapNote: 'Plasenta previa şüphesinde vajinal dijital tuşe kontrendikedir ancak Transvajinal USG altın standarttır ve güvenlidir.',
    pearl: 'Endometriozis en sık Overe, Ektopik gebelik ise en sık Tuba uterina Ampulla bölgesine yerleşir.',
  },
  {
    id: 'guide-4',
    category: 'Toksikoloji & Antidotlar',
    branchId: 'farmakoloji',
    branchName: 'Tıbbi Farmakoloji',
    title: 'Parasetamol, Organofosfat ve Beta Blokör Zehirlenmeleri',
    firstChoiceOrFeature: 'Parasetamol -> N-Asetilsistein • Organofosfat -> Atropin + Pralidoksim',
    goldStandardOrTarget: 'Beta Blokör -> Glukagon • Kalsiyum Kanal Blokörü -> IV Kalsiyum + Yüksek Doz İnsülin-Öglisemi',
    clinicalTrapNote: 'Karbamat zehirlenmesinde (reverzibl AChE inhibisyonu) Pralidoksim (PAM) verilmez, yalnızca Atropin kullanılır.',
    pearl: 'Parasetamolün CYP2E1 ile oluşan toksik metaboliti NAPQI sentrilobüler karaciğer nekrozu yapar.',
  },
  {
    id: 'guide-5',
    category: 'Toksikoloji & Antidotlar',
    branchId: 'farmakoloji',
    branchName: 'Tıbbi Farmakoloji',
    title: 'Antikoagülanlar, Metanol ve Ağır Metal Antidotları',
    firstChoiceOrFeature: 'Heparin -> Protamin sülfat • Varfarin -> K Vitamini + 4-Faktör PCC • Dabigatran -> İdarusizumab',
    goldStandardOrTarget: 'Apiksaban/Rivaroksaban -> Andeksanet alfa • Metanol/Etilen Glikol -> Fomepizol • Demir -> Deferoksamin',
    clinicalTrapNote: 'Bakır zehirlenmesi (Wilson) -> D-Penisilamin / Trientin; Kurşun zehirlenmesi -> DMSA (Suksimer) / CaNa2-EDTA + Dimerkaprol.',
    pearl: 'Magnezyum sülfat toksisitesinde ilk bulgu patella refleksi kaybıdır; spesifik antidotu IV Kalsiyum Glukonattır.',
  },
  {
    id: 'guide-6',
    category: 'Hız Kısıtlayıcı Enzimler',
    branchId: 'biyokimya',
    branchName: 'Tıbbi Biyokimya',
    title: 'Karbonhidrat ve Lipid Metabolizması Hız Kısıtlayıcı Enzimler',
    firstChoiceOrFeature: 'Glikoliz -> PFK-1 • Glukoneogenez -> Fruktoz-1,6-bisfosfataz • Glikojen Sentezi -> Glikojen Sentaz',
    goldStandardOrTarget: 'Glikojen Yıkımı -> Glikojen Fosforilaz • Kolesterol Sentezi -> HMG-KoA Redüktaz • Keton Sentezi -> HMG-KoA Sentaz',
    clinicalTrapNote: 'Yağ asidi sentezi hız kısıtlayıcı: Asetil-KoA Karboksilaz (Biyotin bağımlı); Beta-oksidasyon hız kısıtlayıcı: Karnitin Palmitoil Transferaz-I (KPT-I).',
    pearl: 'Hekzokinaz Monofosfat Şantı (PPP) hız kısıtlayıcı enzimi: Glukoz-6-Fosfat Dehidrogenaz (G6PD - NADPH üretir).',
  },
  {
    id: 'guide-7',
    category: 'Hız Kısıtlayıcı Enzimler',
    branchId: 'biyokimya',
    branchName: 'Tıbbi Biyokimya',
    title: 'Azot, Nükleotid ve Hem Sentezi Hız Kısıtlayıcı Enzimler',
    firstChoiceOrFeature: 'Üre Döngüsü -> KPS-I (NAG bağımlı) • Pirimidin Sentezi -> KPS-II • Pürin Sentezi -> Glutamin-PRPP Amidotransferaz',
    goldStandardOrTarget: 'Hem Sentezi -> ALA Sentaz (B6 bağımlı) • Safra Asidi Sentezi -> 7-Alfa Hidroksilaz • Katekolamin -> Tirozin Hidroksilaz (BH4)',
    clinicalTrapNote: 'KPS-I mitokondriyaldir ve amonyak kullanır; KPS-II sitozoliktir ve azot kaynağı olarak glutamin kullanır.',
    pearl: 'Katekolamin sentezinin hız kısıtlayıcı enzimi Tirozin Hidroksilazdır (Kofaktörü Tetrahidrobiopterin - BH4).',
  },
  {
    id: 'guide-8',
    category: 'Patognomonik Bulgular & Triyadlar',
    branchId: 'patoloji',
    branchName: 'Tıbbi Patoloji',
    title: 'Patolojide Patognomonik Cisimcikler ve Hücreler',
    firstChoiceOrFeature: 'Aschoff Cisimciği / Anitschkow -> ARA • Negri Cisimciği -> Kuduz • Councilman -> Viral Hepatit (Apoptoz)',
    goldStandardOrTarget: 'Mallory-Denk -> Alkolik Hepatit (Sitokeratin 8/18) • Birbeck Granülü -> Langerhans Hücreli Histiyositoz (CD1a+, S100+, Langerin+)',
    clinicalTrapNote: 'Call-Exner -> Granüloza Hücreli Tümör; Schiller-Duval -> Yolk Sac Tümörü; Reinke Kristali -> Leydig Hücreli Tümör.',
    pearl: 'Psammom Cisimciği (Distrofik kalsifikasyon): Papiller tiroid Ca, Meningiom, Seröz papiller over Ca, Mezotelyoma.',
  },
  {
    id: 'guide-9',
    category: 'Patognomonik Bulgular & Triyadlar',
    branchId: 'cerrahi',
    branchName: 'Cerrahi Grubu',
    title: 'Klinik Triyadlar ve Pentadlar (TUS Klasikleri)',
    firstChoiceOrFeature: 'Beck Triyadı (Tamponad): Hipotansiyon + JVD + Derinden kalp sesleri • Cushing Triyadı (KİBAS): Hipertansiyon + Bradikardi + Düzensiz solunum',
    goldStandardOrTarget: 'Charcot Triyadı (Kolanjit): Ateş + Sağ üst kadran ağrısı + Sarılık • Whipple Triyadı (İnsülinoma): Açlıkta hipoglisemi semptomu + Glukoz <50 + Glukoz verilince düzelme',
    clinicalTrapNote: 'Virchow Triyadı (Tromboz): Endotel hasarı (en önemli!) + Staz/türbülans + Hiperkoagülabilite.',
    pearl: 'Hakim Triyadı (Normal Basınçlı Hidrosefali): yürüme bozukluğu (ataksi - ilk bulgu!) + Demans + Üriner inkontinans.',
  },
  {
    id: 'guide-10',
    category: 'Genetik & Translokasyonlar',
    branchId: 'patoloji',
    branchName: 'Tıbbi Patoloji',
    title: 'Hematolojik ve Solid Tümör Kromozom Translokasyonları',
    firstChoiceOrFeature: 't(9;22) BCR-ABL (Philadelphia) -> KML • t(15;17) PML-RARA -> AML-M3 (Akut Promiyelositik Lösemi - ATRA tedavisi)',
    goldStandardOrTarget: 't(8;14) c-MYC -> Burkitt Lenfoma • t(14;18) BCL-2 (Apoptoz inhibisyonu) -> Folliküler Lenfoma • t(11;14) Siklin D1 -> Mantle Hücreli Lenfoma',
    clinicalTrapNote: 't(11;22) FLI-1 -> Ewing Sarkomu (CD99 / MIC2 pozitif, soğan zarı periost reaksiyonu).',
    pearl: 'Folliküler lenfomada t(14;18) sonucu anti-apoptotik BCL-2 aşırı eksprese olur; Mantle hücreli lenfomada ise t(11;14) ile Siklin D1 artar.',
  },
];
