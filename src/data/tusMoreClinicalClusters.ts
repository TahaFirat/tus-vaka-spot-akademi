import { DifferentialClusterSeed } from './tusTypes';

export const MORE_TUS_CLUSTERS: DifferentialClusterSeed[] = [
  // 5. ANATOMİ EK KÜME: Kraniyal Sinirler, Foramenler ve Beyin Damarları
  {
    branchId: 'anatomi',
    subTopic: 'Kraniyal Sinirler, Kafa Tabanı Foramenleri ve Nöroanatomi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Sinus Cavernosus — İçinden A. carotis interna ve N. abducens (CN VI) Geçer',
        patientVignette:
          'Yüzün tehlike üçgenindeki enfeksiyon sonrası kavernöz sinüs trombozu gelişen hastada ilk olarak gözde dışa bakış kısıtlılığı (lateral rektus felci) ortaya çıkıyor.',
        clues: ['kavernöz sinüs trombozu', 'dışa bakış kısıtlılığı (lateral rektus felci)'],
        questionPrompt: 'Sinus cavernosus’un dış duvarında değil doğrudan lümeni (trabekülleri) içinden geçen kraniyal sinir ve arter hangisidir?',
        mechanism:
          'Sinus cavernosus’un dış yan duvarında yukarıdan aşağıya CN III (N. oculomotorius), CN IV (N. trochlearis), CN V1 (N. ophthalmicus) ve CN V2 (N. maxillaris) seyrederken; doğrudan SİNÜSÜN İÇİNDEN A. carotis interna ve N. abducens (CN VI) geçer. Bu nedenle kavernöz sinüs patolojilerinde İLK etkilenen sinir N. abducens’tir.',
        whenCorrectNote: 'Sinus cavernosus içinden A. carotis interna + N. abducens (CN VI) geçer ve ilk etkilenen sinir CN VI’dır.',
        firstVsGold: 'İçinden Geçenler: A. carotis interna + CN VI • Dış Duvarından Geçenler: CN III, CN IV, CN V1, CN V2 (CN V3 - N. mandibularis kavernöz sinüse GİRMEZ!).',
        pearl: 'Sinus cavernosus’un doğrudan İÇİNDEN A. carotis interna ve N. abducens (CN VI) geçer; N. mandibularis (V3) kavernöz sinansta hiç bulunmaz!',
        trueStatement: 'Sinus cavernosus’un doğrudan içinden a. carotis interna ve n. abducens (CN VI) geçer; kavernöz sinüs trombozunda ilk etkilenen sinir CN VI’dır.',
        falseStatement: 'Sinus cavernosus’un tam ortasından n. mandibularis (CN V3) ve n. facialis (CN VII) birlikte geçer.',
        falseHighlight: 'n. mandibularis (CN V3) ve n. facialis (CN VII) birlikte geçer',
      },
      {
        entityName: 'Foramen Jugulare — CN IX, CN X, CN XI ve V. jugularis interna (Sinus sigmoideus)',
        patientVignette:
          'Kafa tabanında temporal ve oksipital kemikler arasındaki açıklıkta kitle saptanan hastada yutma güçlüğü, uvulanın sağlam tarafa kayması, ses kısıklığı ve m. sternocleidomastoideus/trapezius güçsüzlüğü (Vernet sendromu) gelişiyor.',
        clues: ['yutma güçlüğü', 'uvulanın sağlam tarafa kayması', 'm. sternocleidomastoideus/trapezius güçsüzlüğü'],
        questionPrompt: 'N. glossopharyngeus (IX), N. vagus (X), N. accessorius (XI) ve V. jugularis interna’nın birlikte geçtiği bu açıklık hangisidir?',
        mechanism:
          'Foramen jugulare’den 9., 10. ve 11. kraniyal sinirler ile Sinus sigmoideus (V. jugularis interna olarak devam eder) ve Sinus petrosus inferior geçer. Uvula lezyonunda N. vagus hasarında uvula SAĞLAM tarafa, N. hypoglossus (CN XII - Canalis nervi hypoglossi) hasarında ise dil LEZYON tarafına kayar.',
        whenCorrectNote: 'Foramen jugulare = CN IX, CN X, CN XI + V. jugularis interna; N. vagus felcinde uvula sağlam tarafa kayar.',
        firstVsGold: 'Foramen Ovale: CN V3 + N. petrosus minor • Foramen Spinosum: A. meningea media • Meatus Acusticus Internus: CN VII + CN VIII.',
        pearl: 'Foramen jugulare’den CN IX, X, XI ve V. jugularis interna geçer; N. vagus felcinde uvula SAĞLAM tarafa, CN XII felcinde dil LEZYON tarafına kayar.',
        trueStatement: 'Foramen jugulare içinden n. glossopharyngeus (IX), n. vagus (X), n. accessorius (XI) ve v. jugularis interna geçer.',
        falseStatement: 'Foramen jugulare içinden n. hypoglossus (XII) ve a. carotis interna geçer.',
        falseHighlight: 'n. hypoglossus (XII) ve a. carotis interna geçer',
      },
      {
        entityName: 'Epidural Hematom (A. meningea media) vs. Subdural Hematom (Köprü Venleri)',
        patientVignette:
          'Şakak bölgesine (pterion) künt travma sonrası kısa süreli bilinç kaybı, ardından bilincin açıldığı "lusid interval" dönemi ve birkaç saat sonra hızla gelişen koma ile beyin BT’de sütür hatlarını geçmeyen çift dışbükey (bikonveks / mercek) şekilli kanama saptanıyor.',
        clues: ['pterion', 'lusid interval', 'sütür hatlarını geçmeyen çift dışbükey (bikonveks / mercek)'],
        questionPrompt: 'Bu hastada kanamanın tipi ve yırtılan vasküler yapı aşağıdakilerden hangisidir?',
        mechanism:
          'Pterion bölgesindeki temporal kırıkta A. meningea media (Foramen spinosum’dan geçer) yırtılır ve Epidural Hematom gelişir: Lusid interval vardır, BT’de sütürleri geçmeyen BİKONVEKS (mercek) görünüm izlenir. Subdural hematom ise kortikal KÖPRÜ VENLERİNİN (v. cerebri superiores) yırtılmasıyla oluşur ve BT’de sütürleri geçen HİLAL (kresent) görünümü verir.',
        whenCorrectNote: 'Pterion kırığı + A. meningea media yırtığı + Lusid interval + BT’de bikonveks (mercek) görünüm = Epidural Hematom.',
        firstVsGold: 'Epidural Hematom: A. meningea media (Arteriyel), Bikonveks (mercek), sütürleri geçmez • Subdural Hematom: Köprü venleri (Venöz), Hilal (kresent), sütürleri geçer.',
        pearl: 'Epidural hematom A. meningea media yırtığı ile oluşur ve BT’de BİKONVEKS (mercek) görülür; Subdural hematom Köprü venleri yırtığı ile oluşur ve HİLAL şeklindedir.',
        trueStatement: 'Epidural hematom pterion kırığında a. meningea media yırtılması sonucu gelişir ve beyin BT’de bikonveks (mercek) görünümü verir.',
        falseStatement: 'Epidural hematom köprü venlerinin yırtılmasıyla oluşur ve beyin BT’de sütür hatlarını aşan hilal şeklinde izlenir.',
        falseHighlight: 'köprü venlerinin yırtılmasıyla oluşur ve beyin BT’de sütür hatlarını aşan hilal',
      },
      {
        entityName: 'Canalis Adductorius (Hunter Kanalı) ve Hiatus Adductorius — A./V. Femoralis ve N. Saphenus',
        patientVignette:
          'Uyluk ön-iç yüzünde m. vastus medialis, m. sartorius ve m. adductor longus/magnus arasında uzanan tünelde sıkışma sendromu gelişen hastada bacağın iç yüzünde ve medial malleol çevresinde duyu kaybı saptanıyor.',
        clues: ['m. vastus medialis, m. sartorius ve m. adductor', 'bacağın iç yüzünde ve medial malleol çevresinde duyu kaybı'],
        questionPrompt: 'Canalis adductorius’a (Hunter kanalı) girip hiatus adductorius’tan fossa poplitea’ya GEÇMEYEREK kanal duvarını delip yüzeyelleşen sinir hangisidir?',
        mechanism:
          'Hunter kanalında (Canalis adductorius) A. femoralis, V. femoralis ve N. femoralis’in en uzun deri dalı olan N. saphenus bulunur. A. ve V. femoralis hiatus adductorius’tan geçerek fossa poplitea’ya ulaşır; ancak N. saphenus hiatus’tan GEÇMEZ, membrana vastoadductoria’yı delerek bacak iç yüzünü duyulandırır.',
        whenCorrectNote: 'Hunter kanalında A./V. femoralis ile birlikte bulunan ancak hiatus adductorius’tan geçmeyen N. saphenus.',
        firstVsGold: 'V. saphena magna komşusu: N. saphenus (Medial malleol önü) • V. saphena parva komşusu: N. suralis (Lateral malleol arkası).',
        pearl: 'Canalis adductorius’ta (Hunter kanalı) bulunan N. saphenus, hiatus adductorius’tan GEÇMEZ; V. saphena magna’ya eşlik eder.',
        trueStatement: 'Canalis adductorius içinde a. femoralis, v. femoralis ve n. saphenus bulunur; ancak n. saphenus hiatus adductorius’tan geçmez.',
        falseStatement: 'Canalis adductorius içinden n. ischiadicus ve v. saphena parva geçerek fossa poplitea’ya ulaşır.',
        falseHighlight: 'n. ischiadicus ve v. saphena parva geçerek',
      },
      {
        entityName: 'Brown-Séquard Sendromu (Medulla Spinalis Yarı Kesisi) — İpsilateral Motor/Derin Duyu, Kontralateral Ağrı-Isı Kaybı',
        patientVignette:
          'Torakal T8 seviyesinden bıçaklanma sonucu omurilik sağ yarı kesisi gelişen hastada kesi altında sağ bacakta spastik felç + vibrasyon/propriosepsiyon kaybı, sol bacakta ise ağrı ve ısı duyusu kaybı saptanıyor.',
        clues: ['omurilik sağ yarı kesisi', 'sağ bacakta spastik felç + vibrasyon/propriosepsiyon kaybı', 'sol bacakta ise ağrı ve ısı duyusu kaybı'],
        questionPrompt: 'Tractus spinothalamicus lateralis’in medulla spinalis’te çapraz yapması nedeniyle ortaya çıkan bu tablo hangisidir?',
        mechanism:
          'Brown-Séquard sendromunda (omurilik hemiseksiyoları): Tractus corticospinalis (motor) ve Fasciculus gracilis/cuneatus (vibrasyon, iki nokta, propriosepsiyon) medulla oblongata’da çapraz yaptığı için kesi altında İPSİLATERAL (aynı taraf) kaybolur. Tractus spinothalamicus lateralis (ağrı ve ısı) ise omurilikte (commissura alba anterior) hemen çapraz yaptığı için kesi altında KONTRALATERAL (karşı taraf) kaybolur.',
        whenCorrectNote: 'Omurilik yarı kesisi: Aynı tarafta (ipsilateral) motor felç + derin duyu kaybı; Karşı tarafta (kontralateral) ağrı ve ısı duyusu kaybı.',
        firstVsGold: 'İpsilateral Kaybolanlar: Piramidal motor yol + Arka kordon (Vibrasyon/Propriosepsiyon) • Kontralateral Kaybolan: Spinotalamik yol (Ağrı ve Isı).',
        pearl: 'Brown-Séquard sendromunda kesi altında AYNI tarafta motor felç ve derin duyu kaybı; KARŞI tarafta ise ağrı ve ısı kaybı görülür.',
        trueStatement: 'Brown-Séquard sendromunda kesi altında aynı tarafta motor felç ve derin duyu kaybı, karşı tarafta ise ağrı ve ısı duyusu kaybı görülür.',
        falseStatement: 'Brown-Séquard sendromunda ağrı ve ısı duyusu aynı tarafta, vibrasyon ve propriosepsiyon duyusu ise karşı tarafta kaybolur.',
        falseHighlight: 'ağrı ve ısı duyusu aynı tarafta, vibrasyon ve propriosepsiyon duyusu ise karşı tarafta',
      },
    ],
  },
  // 6. FİZYOLOJİ EK KÜME: Endokrin, GİS ve Nörofizyoloji
  {
    branchId: 'fizyoloji',
    subTopic: 'Endokrin Aks, Gastrointestinal Hormonlar ve Sinaps Fizyolojisi',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Kolesistokinin (CCK) — Duodenum I Hücresi, Safra Kesesi Kasılması ve Mide Boşalmasının Yavaşlaması',
        patientVignette:
          'Yağ asitleri ve peptitlerin duodenuma geçmesiyle duodenum mukozasındaki I hücrelerinden salgılanan; safra kesesini kasan, Oddi sfinkterini gevşeten, pankreastan enzimden zengin salgı yaptıran ve mide boşalmasını inhibe eden hormon inceleniyor.',
        clues: ['Yağ asitleri ve peptitlerin', 'duodenum mukozasındaki I hücrelerinden', 'safra kesesini kasan', 'mide boşalmasını inhibe eden'],
        questionPrompt: 'Aynı zamanda hipotalamusta tokluk hissi oluşturan bu gastrointestinal hormon aşağıdakilerden hangisidir?',
        mechanism:
          'Kolesistokinin (CCK) duodenumdaki I hücrelerinden yağ ve protein yıkım ürünlerine yanıt olarak salgılanır: Safra kesesini kasar, Oddi sfinkterini gevşetir, pankreas asiner hücrelerinden sindirim enzimleri salgılatır ve yağların sindirimi için mide boşalmasını YAVAŞLATIR. Sekretin ise S hücrelerinden H+ (asit) uyarısıyla salgılanır ve pankreas kanal hücrelerinden HCO3 (bikarbonat) salgılatır.',
        whenCorrectNote: 'I hücresi, safra kesesi kasılması, pankreastan enzim salgısı, mide boşalmasının yavaşlaması ve tokluk hissi.',
        firstVsGold: 'CCK: I hücresi, Yağ/Aminoasit uyarısı -> Pankreas ENZİM salgısı + Safra kesesi kasılması • Sekretin: S hücresi, Asit uyarısı -> Pankreas BİKARBONAT salgısı.',
        pearl: 'Kolesistokinin (CCK) safra kesesini kasar ve mide boşalmasını yavaşlatır; Sekretin ise pankreastan bikarbonattan zengin sıvı salgılatır.',
        trueStatement: 'Kolesistokinin (CCK) duodenumdaki I hücrelerinden salgılanır, safra kesesini kasar, pankreastan enzim salgılatır ve mide boşalmasını yavaşlatır.',
        falseStatement: 'Kolesistokinin mide pariyetal hücrelerinden HCl salgısını en güçlü artıran ve mide boşalmasını hızlandıran hormondur.',
        falseHighlight: 'HCl salgısını en güçlü artıran ve mide boşalmasını hızlandıran',
      },
      {
        entityName: 'Aldosteron — Böbrek Kortikal Toplayıcı Kanal Esas (Principal) Hücreleri ve ENaC Artışı',
        patientVignette:
          'Hiperkalemi ve Anjiyotensin II uyarısıyla adrenal korteksin zona glomerulosa tabakasından salgılanan mineralokortikoid hormonun böbrekteki hedef hücresi ve iyon kanalı inceleniyor.',
        clues: ['Hiperkalemi ve Anjiyotensin II', 'zona glomerulosa', 'mineralokortikoid'],
        questionPrompt: 'Aldosteronun böbrekte etki ettiği temel nefron segmenti, hedef hücresi ve sentezini artırdığı kanal hangisidir?',
        mechanism:
          'Aldosteronun en güçlü uyaranları HİPERKALEMİ ve ANJİYOTENSİN II’dir (ACTH birincil uyaran değildir!). Böbrekte geç distal tübül ve Kortikal Toplayıcı Kanaldaki ESAS (Principal) hücrelerde epitelyal sodyum kanallarını (ENaC) ve Na+/K+-ATPaz pompasını artırarak Na+ ve su tutar, K+ atar; Alfa-İnterkale hücrelerden ise H+ sekresyonunu artırır (hiperaldosteronizmde hipokalemik metabolik alkaloz olur).',
        whenCorrectNote: 'Zona glomerulosa, Esas (Principal) hücrede ENaC artışı (Na emilimi, K atılımı), Alfa-interkale hücreden H+ atılımı.',
        firstVsGold: 'Esas (Principal) Hücre: Aldosteron (ENaC) ve ADH (Akuaporin-2) hedefi • Alfa-İnterkale Hücre: H+ salgılar, HCO3 emer (Asidoza yanıt).',
        pearl: 'Aldosteron toplayıcı kanaldaki Esas (Principal) hücrelerde ENaC kanallarını artırarak Na+ emer, K+ atar; Alfa-interkale hücreden H+ attırır.',
        trueStatement: 'Aldosteron kortikal toplayıcı kanal esas (principal) hücrelerinde ENaC kanallarını artırarak sodyum geri emilimini ve potasyum atılımını hızlandırır.',
        falseStatement: 'Aldosteron proksimal tübül fırçamsı kenar hücrelerinde SGLT2 taşıyıcılarını inhibe ederek hiperkalemik asidoz yapar.',
        falseHighlight: 'proksimal tübül fırçamsı kenar hücrelerinde SGLT2 taşıyıcılarını inhibe ederek hiperkalemik asidoz',
      },
      {
        entityName: 'Parathormon (PTH) — Distal Tübülde Kalsiyum Emilimi Artışı ve Proksimal Tübülde Fosfat Atılımı',
        patientVignette:
          'Hipokalsemiye yanıt olarak paratiroid bezindeki esas hücrelerden (CaSR aracılığıyla) salgılanan hormonun kemik, böbrek ve D vitamini üzerindeki etkileri değerlendiriliyor.',
        clues: ['Hipokalsemiye yanıt olarak', 'esas hücrelerden', 'CaSR'],
        questionPrompt: 'Parathormonun böbrek tübülleri üzerindeki iyon ve enzim etkileri aşağıdakilerden hangisidir?',
        mechanism:
          'Parathormon (PTH) serum Kalsiyumunu ARTIRIR, Fosfatı ise DÜŞÜRÜR: 1. Böbrek Distal Tübülünden Kalsiyum geri emilimini artırır, 2. Proksimal Tübülde Na-Fosfat kotransportunu inhibe ederek FOSFATÜRİ (fosfat atılımı) ve idrarda cAMP artışı yapar, 3. Proksimal tübülde 1-alfa hidroksilaz enzimini aktive ederek aktif D vitamini (1,25-(OH)2-D3 / Kalsitriol) sentezini artırır. Kemikte PTH reseptörü osteoklastta DEĞİL, OSTEOBLAST üzerinde bulunur (RANKL aracılığıyla osteoklastı uyarır)!',
        whenCorrectNote: 'Distal tübülde Ca emilimi, proksimal tübülde fosfatüri ve 1-alfa hidroksilaz aktivasyonu; kemikte reseptörü osteoblasttadır.',
        firstVsGold: 'PTH: Kan Ca artırır, Fosfatı düşürür • Kalsitriol (Aktif D Vitamini): Bağırsaktan hem Ca hem Fosfat emilimini ARTIRIR • Kalsitonin: İkisini de düşürür.',
        pearl: 'Kemikte Parathormon (PTH) reseptörü osteoklastlarda DEĞİL, OSTEOBLASTLARDA bulunur (osteoblast RANKL salgılayarak osteoklastı aktive eder)!',
        trueStatement: 'Parathormon distal tübülden kalsiyum emilimini artırırken proksimal tübülden fosfat emilimini inhibe eder; kemikteki reseptörü osteoblastlar üzerindedir.',
        falseStatement: 'Parathormon doğrudan olgun osteoklast yüzeyindeki PTH reseptörlerine bağlanır ve böbrekten fosfat geri emilimini artırır.',
        falseHighlight: 'doğrudan olgun osteoklast yüzeyindeki PTH reseptörlerine bağlanır ve böbrekten fosfat geri emilimini artırır',
      },
      {
        entityName: 'REM Uykusu (Paradoksal Uyku) — Beta Dalgaları, Hızlı Göz Hareketleri ve İskelet Kas Atonisi',
        patientVignette:
          'Polisomnografi (uyku EEG’si) kaydında uyanık bir bireydekine benzer düşük genlikli yüksek frekanslı Beta dalgaları, hızlı göz hareketleri, penil/klitoral tümesans, rüya görme ve ekstraoküler/solunum kasları hariç tüm çizgili kaslarda tam atoni saptanan evre inceleniyor.',
        clues: ['Beta dalgaları', 'hızlı göz hareketleri', 'rüya görme', 'tüm çizgili kaslarda tam atoni'],
        questionPrompt: 'Asetilkolin (pons PGO dalgaları) tarafından başlatılan ve beyin oksijen tüketiminin en yüksek olduğu bu uyku evresi hangisidir?',
        mechanism:
          'REM uykusunda EEG uyanıklık (Beta dalgaları) gibidir ancak kişiyi uyandırmak en zordur ("Paradoksal Uyku"). Rüya görme, düzensiz kalp hızı/solunum ve derin İSKELET KAS ATONİSİ vardır. Diş gıcırdatma (bruksizm), uyurgezerlik (somnambulizm), gece terörü ve enürezis nokturna ise REM’de DEĞİL, Derin Yavaş Dalga Uykusunda (NREM Evre 3 - Delta dalgası) görülür!',
        whenCorrectNote: 'REM = Beta dalgası, rüya, kas atonisi, asetilkolin; NREM Evre 2 = Uyku iğcikleri ve K kompleksi; NREM Evre 3 = Delta dalgası, uyurgezerlik, gece terörü.',
        firstVsGold: 'NREM Evre 2: Uyku İğcikleri (Spindles) ve K Kompleksi (En uzun süren evre) • NREM Evre 3 (Derin Uyku): Delta dalgaları, GH salgısı, Uyurgezerlik/Enürezis.',
        pearl: 'Uyurgezerlik, gece terörü ve enürezis nokturna REM uykusunda DEĞİL, NREM Evre 3 (Delta / Derin uyku) evresinde görülür!',
        trueStatement: 'REM uykusunda EEG’de beta dalgaları, rüya görme ve çizgili kaslarda tam atoni görülür; uyurgezerlik ve gece terörü ise NREM Evre 3’te ortaya çıkar.',
        falseStatement: 'Uyku iğcikleri ve K kompleksleri REM uykusuna özgü olup uyurgezerlik yalnızca REM evresinde görülür.',
        falseHighlight: 'REM uykusuna özgü olup uyurgezerlik yalnızca REM evresinde görülür',
      },
      {
        entityName: 'Demir Emilimi ve Hepsidin — Duodenum (DMT-1), Ferroportin İnhibisyonu ve Kronik Hastalık Anemisi',
        patientVignette:
          'Romatoid artrit tanılı hastada IL-6 artışına bağlı olarak karaciğerden sentezlenen akut faz reaktanı peptit hormonun enterosit ve makrofaj yüzeyindeki demir ihracat kanalını yıkarak hipoferremi ve kronik hastalık anemisine yol açtığı saptanıyor.',
        clues: ['IL-6 artışına bağlı', 'karaciğerden sentezlenen', 'demir ihracat kanalını yıkarak', 'kronik hastalık anemisi'],
        questionPrompt: 'Ferroportin kanalını yıkarak bağırsaktan demir emilimini ve makrofajdan demir çıkışını durduran bu ana düzenleyici hormon hangisidir?',
        mechanism:
          'Demir duodenumdan Fe+2 (ferröz) formunda apikal DMT-1 ile enterosit içine alınır ve bazolateral FERROPORTİN kanalıyla kana geçer (kanda Transferrin taşır). Karaciğerde sentezlenen HEPSİDİN, ferroportini bağlayıp yıkarak demirin kana geçişini engeller. İnflamasyonda (IL-6 artışı) Hepsidin artar -> Kronik Hastalık Anemisi gelişir; hipokside ve eritropoez artışında ise Hepsidin azalır.',
        whenCorrectNote: 'Duodenumdan DMT-1 ile emilim, bazolateralden Ferroportin ile çıkış; Hepsidin ferroportini yıkarak demir emilimini durdurur.',
        firstVsGold: 'Demir Eksikliği Anemisi: Ferritin DÜŞÜK, TDBK YÜKSEK, Hepsidin DÜŞÜK • Kronik Hastalık Anemisi: Ferritin NORMAL/YÜKSEK, TDBK DÜŞÜK, Hepsidin YÜKSEK.',
        pearl: 'Karaciğerden salgılanan Hepsidin, Ferroportin kanalını yıkarak bağırsaktan demir emilimini ve makrofajlardan demir çıkışını inhibe eder.',
        trueStatement: 'Hepsidin, enterosit ve makrofaj yüzeyindeki ferroportin kanallarını yıkarak demirin kana geçişini engelleyen ana düzenleyici hormondur.',
        falseStatement: 'Demir terminal ileumdan Fe+3 formunda emilir ve hepsidin hormonu bağırsaktan demir emilimini hızlandırır.',
        falseHighlight: 'terminal ileumdan Fe+3 formunda emilir ve hepsidin hormonu bağırsaktan demir emilimini hızlandırır',
      },
    ],
  },
  // 7. HİSTOLOJİ & EMBRİYOLOJİ EK KÜME: Organ Histolojisi ve Konjenital Anomaliler
  {
    branchId: 'histoloji',
    subTopic: 'Solunum, Sindirim, Karaciğer Histolojisi ve Konjenital Embriyoloji',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Clara (Club) Hücresi — Terminal ve Respiratuvar Bronşiyollerde Sürfaktan Benzeri Salgı ve Detoksifikasyon',
        patientVignette:
          'Solunum ağacında kıkırdak, goblet hücresi ve bezlerin kaybolduğu terminal ve respiratuvar bronşiyol epitelinde bulunan; silyasız, kubbe şekilli apikal sitoplazmalı, SER’de sitokrom P450 ile toksinleri detoksifiye eden ve CC16/sürfaktan benzeri lipoproteini salgılayan hücre inceleniyor.',
        clues: ['goblet hücresi ve bezlerin kaybolduğu', 'terminal ve respiratuvar bronşiyol', 'silyasız, kubbe şekilli', 'sitokrom P450'],
        questionPrompt: 'Bronşiyol lümeninin kollapsını önleyen ve bronşiyol epitelinin kök hücresi olarak davranan bu hücre hangisidir?',
        mechanism:
          'Bronşiyollerde kıkırdak plaklar ve submukozal bezler YOKTUR. Goblet hücreleri küçük bronşiyollerde biter, silyalı hücrelerden ÖNCE kaybolur (böylece mukus birikip boğulma olmaz!). Terminal ve respiratuvar bronşiyollerde silyasız CLARA (Club) hücreleri bulunur: Sürfaktan benzeri yüzey aktif madde ve CC16 salgılar, SER’deki P450 ile ksenobiyotikleri detoksifiye eder ve bronşiyol epitelini yeniler.',
        whenCorrectNote: 'Terminal/respiratuvar bronşiyolde silyasız kubbe hücre; sürfaktan benzeri madde salgılar, SER/P450 ile detoksifikasyon yapar.',
        firstVsGold: 'Alveolde Sürfaktan ve Rejenerasyon: Tip II Pnömosit • Bronşiyolde Sürfaktan Benzeri Salgı, Detoksifikasyon ve Rejenerasyon: Clara (Club) Hücresi.',
        pearl: 'Solunum yollarında Goblet hücreleri silyalı hücrelerden ÖNCE biter; terminal bronşiyollerde silyasız Clara (Club) hücreleri bulunur.',
        trueStatement: 'Terminal ve respiratuvar bronşiyollerde bulunan silyasız Clara (Club) hücreleri sürfaktan benzeri madde salgılar ve detoksifikasyon yapar.',
        falseStatement: 'Terminal bronşiyollerde yoğun hiyalin kıkırdak halkalar ve çok sayıda mukus salgılayan goblet hücresi bulunur.',
        falseHighlight: 'yoğun hiyalin kıkırdak halkalar ve çok sayıda mukus salgılayan goblet hücresi',
      },
      {
        entityName: 'İto (Stellat / Yağ Depolayan) Hücresi — Disse Aralığı, A Vitamini Depolanması ve Karaciğer Fibrozisi (Siroz)',
        patientVignette:
          'Karaciğerde sinüzoid endoteli ile hepatositler arasındaki perisinüzoidal Disse aralığında yerleşik olan, fizyolojik şartlarda retinoid (A vitamini) depolayan ancak kronik karaciğer hasarında miyofibroblastlara dönüşerek Tip I ve Tip III kollajen sentezleyen hücre inceleniyor.',
        clues: ['perisinüzoidal Disse aralığında', 'A vitamini depolayan', 'miyofibroblastlara dönüşerek', 'kollajen sentezleyen'],
        questionPrompt: 'Karaciğer sirozunda fibrozisten birincil derecede sorumlu olan bu mezenkimal hücre aşağıdakilerden hangisidir?',
        mechanism:
          'Disse aralığında (hepatosit mikrovillusları ile pencereli/bazal laminasız sinüzoid endoteli arasında) İTO (Hepatik Stellat) hücreleri bulunur. Normalde A vitamini depolarlar; kronik inflamasyonda (TGF-beta uyarısıyla) A vitaminini kaybedip miyofibroblastlara dönüşürler ve Tip I/III kollajen üreterek KARACİĞER FİBROZİSİ (SİROZ) gelişimine yol açarlar. Kupffer hücreleri ise sinüzoid LÜMENİNDE bulunan monosit kökenli makrofajlardır.',
        whenCorrectNote: 'Disse aralığında yerleşir, A vitamini depolar, sirozda miyofibroblasta dönüşerek kollajen sentezler.',
        firstVsGold: 'İto (Stellat) Hücresi: Disse aralığında, A vitamini depolar, Sirozda kollajen üretir • Kupffer Hücresi: Sinüzoid lümeninde, Makrofaj (Yaşlı eritrosit yıkımı).',
        pearl: 'Disse aralığındaki İto (Stellat) hücreleri A vitamini depolar ve karaciğer sirozunda miyofibroblastlara dönüşerek kollajen (fibrozis) üretir.',
        trueStatement: 'Karaciğerde Disse aralığında bulunan İto (stellat) hücreleri A vitamini depolar ve kronik hasarda kollajen üreterek siroza yol açar.',
        falseStatement: 'Karaciğerde A vitamini depolayan ve sirozda kollajen sentezleyen hücreler safra kanaliküllerini döşeyen Kupffer hücreleridir.',
        falseHighlight: 'safra kanaliküllerini döşeyen Kupffer hücreleridir',
      },
      {
        entityName: 'Paneth Hücresi — Lieberkühn Kriptalarının Tabanı, Lizozim / Alfa-Defensin ve Çinko',
        patientVignette:
          'İnce bağırsak Lieberkühn bezlerinin (kriptalarının) en alt tabanında yerleşen, apikal sitoplazmasında büyük asidofilik (eozinofilik) zimojen granüller ile bol çinko içeren ve doğal bağışıklıkta mikrobiyota kontrolü sağlayan piramidal hücre inceleniyor.',
        clues: ['Lieberkühn bezlerinin (kriptalarının) en alt tabanında', 'asidofilik (eozinofilik) zimojen granüller', 'çinko', 'mikrobiyota kontrolü'],
        questionPrompt: 'Lizozim, alfa-defensinler (kriptidin) ve TNF-alfa salgılayarak antibakteriyel savunma yapan bu uzun ömürlü hücre hangisidir?',
        mechanism:
          'Paneth hücreleri ince bağırsak Lieberkühn kriptalarının tabanında bulunur (normalde mide ve kolonda bulunmaz!). Bol kaba ER, Golgi, Çinko ve apikalde büyük eozinofilik granüller içerir. Lizozim ve alfa-defensin (kriptidin) salgılayarak bakteri hücre duvarını parçalar ve komşu intestinal kök hücre nişini korur.',
        whenCorrectNote: 'İnce bağırsak Lieberkühn kripta tabanı, büyük eozinofilik granüller, Lizozim + Alfa-defensin + Çinko.',
        firstVsGold: 'Paneth Hücresi: Kripta tabanı, Lizozim/Defensin salgılar • M (Mikrokatlantılı) Hücre: Peyer plakları üzerinde, antijeni endositozla lenfoid dokuya taşır.',
        pearl: 'İnce bağırsak kriptalarının tabanında bulunan Paneth hücreleri eozinofilik granüllerinde Lizozim, Alfa-defensin ve Çinko taşır.',
        trueStatement: 'İnce bağırsak Lieberkühn kriptalarının tabanında bulunan Paneth hücreleri lizozim ve alfa-defensin salgılayarak antibakteriyel savunma yapar.',
        falseStatement: 'Paneth hücreleri özofagus üst üçte birinde bulunur ve yalnızca pepsinojen ile intrinsik faktör salgılar.',
        falseHighlight: 'özofagus üst üçte birinde bulunur ve yalnızca pepsinojen',
      },
      {
        entityName: 'Meckel Divertikülü vs. Patent Urakus — Vitellin (Omfalomezenterik) Kanal ve Allantois Anomalileri',
        patientVignette:
          '2 yaşında erkek çocukta ağrısız vişne çürüğü renginde rektal kanama saptanıyor. Teknesyum-99m perteknetat sintigrafisinde ileoçekal valvin 50 cm proksimalinde ektopik mide mukozası içeren gerçek bir divertikül gösteriliyor.',
        clues: ['ağrısız vişne çürüğü renginde rektal kanama', 'Teknesyum-99m perteknetat', 'ektopik mide mukozası'],
        questionPrompt: 'Embriyolojik dönemde hangi yapının kapanmaması Meckel divertikülüne, hangi yapının kapanmaması göbekten idrar gelmesine (Urakus fistülü) yol açar?',
        mechanism:
          '1. Vitellin (Omfalomezenterik) kanalın ileal ucunun kapanmaması -> Meckel Divertikülü (2’ler kuralı, gerçek divertikül, ektopik mide mukozası -> ağrısız kanama, Tc-99m sintigrafisi); tamamen açık kalması -> Göbekten gaita gelmesi.\n2. Allantois (Urakus) kanalının açık kalması -> Patent Urakus (Göbekten idrar gelmesi); orta kısmının kistleşmesi -> Urakus kisti.',
        whenCorrectNote: 'Meckel divertikülü = Vitellin (omfalomezenterik) kanal kalıntısı; Urakus fistülü (göbekten idrar gelmesi) = Allantois kalıntısı.',
        firstVsGold: 'Göbekten Gaita Gelmesi / Meckel: Vitellin (Omfalomezenterik) kanal • Göbekten İdrar Gelmesi: Urakus (Allantois) açıklığı.',
        pearl: 'Vitellin (omfalomezenterik) kanal kapanmazsa Meckel divertikülü (veya göbekten gaita gelmesi); Allantois (urakus) kapanmazsa göbekten idrar gelmesi görülür.',
        trueStatement: 'Meckel divertikülü vitellin (omfalomezenterik) kanalın kalıntısıdır; allantois (urakus) açık kalırsa göbekten idrar gelmesi (urakus fistülü) görülür.',
        falseStatement: 'Meckel divertikülü yalnız mukoza katmanından oluşan yalancı bir divertiküldür ve allantois kanalından köken alır.',
        falseHighlight: 'yalnız mukoza katmanından oluşan yalancı bir divertiküldür ve allantois',
      },
      {
        entityName: 'Konjenital Diafragma Hernisi (Bochdalek) — Plöroperitoneal Membran Kapanma Kusuru ve Pulmoner Hipoplazi',
        patientVignette:
          'Doğumdan hemen sonra ağır siyanoz, solunum sıkıntısı, kayık karın (scaphoid abdomen), kalp seslerinin sağ hemitoraksta duyulması ve akciğer grafisinde sol hemitoraksta bağırsak gazları saptanan yenidoğan değerlendiriliyor.',
        clues: ['kayık karın (scaphoid abdomen)', 'kalp seslerinin sağ hemitoraksta duyulması', 'sol hemitoraksta bağırsak gazları'],
        questionPrompt: 'En sık sol posterolateralde görülen bu herninin embriyolojik nedeni ve mortaliteyi belirleyen en önemli komplikasyonu hangisidir?',
        mechanism:
          'Konjenital diafragma hernisinin en sık tipi (%85-90 sol posterolateral yerleşimli) Bochdalek hernisidir ve embriyolojik olarak PLÖROPERİTONEAL MEMBRANLARIN kapanma kusuru sonucu gelişir. Mortaliteyi belirleyen en önemli faktör PULMONER HİPOPLAZİ ve Persistan Pulmoner Hipertansiyondur. Doğum salonunda yüz maskesi (balon-maske) ile pozitif basınçlı ventilasyon KESİNLİKLE KONTRENDİKEDİR (mide/bağırsakları şişirip akciğeri daha da ezer); bebek derhal entübe edilir ve NG sonda takılır!',
        whenCorrectNote: 'Sol posterolateral Bochdalek hernisi, plöroperitoneal membran kusuru, pulmoner hipoplazi, maske ile ventilasyon kontrendike (hemen entübasyon + NG sonda).',
        firstVsGold: 'Posterolateral Herni (En sık, Sol): Bochdalek (Plöroperitoneal membran) • Anterior/Retrosternal Herni: Morgagni (Septum transversum).',
        pearl: 'Konjenital diafragma hernisinde (Bochdalek) balon-maske ventilasyon KONTRENDİKEDİR; bebek derhal entübe edilir ve nazogastrik sonda takılır!',
        trueStatement: 'Konjenital diafragma hernisi (Bochdalek) plöroperitoneal membran kapanma kusuruyla gelişir; doğumda balon-maske ventilasyon kontrendike olup hemen entübasyon yapılır.',
        falseStatement: 'Bochdalek hernisi en sık sağ anteromedialde görülür ve doğum odasında ilk işlem uzun süreli yüz maskesi ile ambulamaktır.',
        falseHighlight: 'en sık sağ anteromedialde görülür ve doğum odasında ilk işlem uzun süreli yüz maskesi ile ambulamaktır',
      },
    ],
  },
  // 8. DAHİLİYE EK KÜME: Endokrinoloji, Hematoloji ve Romatoloji
  {
    branchId: 'dahiliye',
    subTopic: 'Endokrinoloji, Hematoloji, Onkoloji ve Romatoloji Vaka Analizi',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Feokromositoma — İlk Tanı Plazma/İdrar Metanefrinleri, Cerrahi Hazırlıkta Önce Alfa Blokör (Fenoksibenzamin) Sonra Beta Blokör',
        patientVignette:
          '39 yaşında hastada ataklar halinde gelen şiddetli baş ağrısı, terleme, çarpıntı ve dirençli hipertansiyon saptanıyor. Plazma serbest metanefrin düzeyi yüksek ve adrenal BT’de 4 cm’lik sağ sürrenal kitle gösteriliyor.',
        clues: ['baş ağrısı, terleme, çarpıntı', 'Plazma serbest metanefrin', 'sürrenal kitle'],
        questionPrompt: 'Bu hastayı sürrenalektomi ameliyatına hazırlarken uyulması gereken mutlak farmakolojik sıralama hangisidir?',
        mechanism:
          'Feokromositoma adrenal medulla kromaffin hücrelerinden kaynaklanan katekolamin salgılayan tümördür (%10’lar tümörü; ailesel olanlarda en sık RET/MEN2, VHL, NF1 ve SDHB mutasyonu). Tanıda en duyarlı ilk test Plazma Serbest Metanefrinleri veya 24 saatlik idrar fraksiyone metanefrinleridir. Ameliyat hazırlığında ÖNCE ALFA BLOKÖR (Fenoksibenzamin / Doksazosin) + tuz/sıvı yüklemesi başlanır, yeterli alfa blokaj sağlandıktan SONRA taşikardi için Beta Blokör eklenir. Alfa blokaj yapılmadan tek başına Beta Blokör vermek alfa-1 vazokonstriksiyonu karşılıksız bırakarak ölümcül hipertansif krize yol açar!',
        whenCorrectNote: 'Baş ağrısı + terleme + çarpıntı triyadı, tanı metanefrinler, preoperatif ÖNCE Alfa blokör (Fenoksibenzamin) SONRA Beta blokör.',
        firstVsGold: 'En Duyarlı Biyokimyasal Tarama: Plazma Serbest Metanefrinleri • Lokalizasyon: BT/MR (Ekstraadrenal/metastatik ise MIBG sintigrafisi veya Ga-68 DOTATATE PET).',
        pearl: 'Feokromositomada preoperatif hazırlıkta ÖNCE Alfa Blokör (Fenoksibenzamin), SONRA Beta Blokör verilir; tek başına beta blokör kontrendikedir!',
        trueStatement: 'Feokromositomada cerrahi hazırlıkta önce alfa blokör (fenoksibenzamin), yeterli alfa blokaj sağlandıktan sonra beta blokör başlanmalıdır.',
        falseStatement: 'Feokromositomada taşikardiyi önlemek için ilk gün tek başına yüksek doz intravenöz propranolol başlanmalıdır.',
        falseHighlight: 'ilk gün tek başına yüksek doz intravenöz propranolol',
      },
      {
        entityName: 'Akut Promiyelositik Lösemi (AML-M3) — Auer Cisimcikleri (Fagot Hücresi), DİK ve ATRA + Arsenik Trioksit Tedavisi',
        patientVignette:
          '28 yaşında hastada diş eti kanaması, yaygın ekimozlar, pansitopeni, D-dimer yüksekliği ve hipofibrinojenemi (Dissemine İntravasküler Koagülasyon - DİK) saptanıyor. Periferik yayma ve kemik iliğinde demetler halinde çok sayıda Auer cisimciği içeren ("fagot hücresi") atipik promiyelositler ve t(15;17) PML-RARA füzyonu gösteriliyor.',
        clues: ['Dissemine İntravasküler Koagülasyon - DİK', 'Auer cisimciği', 'fagot hücresi', 't(15;17) PML-RARA'],
        questionPrompt: 'Lösemik hücrelerin olgunlaşmasını (diferansiyasyonunu) sağlayarak remisyon oluşturan spesifik hedef tedavi hangisidir?',
        mechanism:
          'AML-M3 (Akut Promiyelositik Lösemi), t(15;17) PML-RARA translokasyonu ile karakterizedir. Sitoplazmada demetler halinde Auer cisimcikleri içeren Fagot hücreleri görülür ve prokoagülan granüllerin salınımıyla çok sık DİK (yaygın damar içi pıhtılaşma) yapar. Tedavide tüm-trans retinoik asit (ATRA / Tretinoin) + Arsenik Trioksit (ATO) promyelositlerin olgun nötrofillere farklılaşmasını sağlar. En önemli yan etkisi "ATRA (Diferansiyasyon) Sendromu" olup tedavisinde İV Deksametazon verilir.',
        whenCorrectNote: 'AML-M3 = t(15;17) PML-RARA, Fagot hücresi (Auer cisimcikleri), DİK riski en yüksek, tedavide ATRA + Arsenik trioksit.',
        firstVsGold: 'AML-M3 (t(15;17)): DİK + Fagot hücresi + ATRA tedavisi • AML-M4/M5 (Monositik): Diş eti hiperplazisi ve cilt/SSS infiltrasyonu en sık.',
        pearl: 'AML-M3 (t(15;17) PML-RARA) DİK’in en sık eşlik ettiği lösemidir; tedavisinde hücre olgunlaşmasını sağlayan ATRA + Arsenik Trioksit kullanılır.',
        trueStatement: 'Akut promiyelositik lösemide (AML-M3) t(15;17) PML-RARA translokasyonu ve sık DİK görülür; tedavisinde ATRA (all-trans retinoik asit) kullanılır.',
        falseStatement: 'AML-M3 tedavisinde kullanılan tek spesifik ajan imatinib olup hastalıkta kanama bozukluğu asla görülmez.',
        falseHighlight: 'tek spesifik ajan imatinib olup hastalıkta kanama bozukluğu asla görülmez',
      },
      {
        entityName: 'Multipl Miyelom — CRAB Kriterleri (Hiperkalsemi, Böbrek Yetmezliği, Anemi, Litik Kemik) ve Normal ALP',
        patientVignette:
          '66 yaşında erkek hasta bel ağrısı ve halsizlik ile başvuruyor. Laboratuvarda Hb: 8.9 g/dL, kreatinin: 2.6 mg/dL, kalsiyum: 12.1 mg/dL, sedimantasyon: 115 mm/saat, periferik yaymada Rulo (Rouleaux) formasyonu, kafa grafisinde zımba deliği (punched-out) litik lezyonlar saptanırken Alkalen Fosfataz (ALP) düzeyi tamamen NORMAL bulunuyor.',
        clues: ['kreatinin: 2.6', 'kalsiyum: 12.1', 'Rulo (Rouleaux) formasyonu', 'zımba deliği (punched-out)', 'Alkalen Fosfataz (ALP) düzeyi tamamen NORMAL'],
        questionPrompt: 'Kemik iliğinde ≥%10 klonal plazma hücresi ve serumda M-proteini saptanan bu hastalıkta prognozu belirleyen en önemli biyokimyasal belirteç hangisidir?',
        mechanism:
          'Multipl Miyelomda CRAB bulguları (Calcium yüksekliği, Renal yetmezlik - Bence-Jones silendir nefropatisi, Anemi, Bone litik kemik lezyonları) görülür. Miyelom hücreleri osteoklastları aktive ederken osteoblastları İNHİBE ettiği için litik kemik lezyonlarına rağmen Alkalen Fosfataz (ALP) NORMALDİR ve kemik sintigrafisi genellikle negatiftir! En sık IgG, ikinci sık IgA tipi görülür. Uluslararası Evreleme Sisteminde (R-ISS) en önemli biyokimyasal prognoz göstergesi Serum Beta-2 Mikroglobulin (ve Albümin + LDH) düzeyidir.',
        whenCorrectNote: 'CRAB bulguları, Rulo formasyonu, ALP normal (osteoblast inhibisyonu), en önemli prognostik belirteç Beta-2 mikroglobulin.',
        firstVsGold: 'Multipl Miyelom: IgG/IgA artışı, Litik kemik lezyonu + Hiperkalsemi VARKEN Waldenström Makroglobulinemisi: IgM artışı, Hiperviskozite + LAP/HSM vardır ancak Litik kemik ve Hiperkalsemi YOKTUR!',
        pearl: 'Multipl miyelomda osteoblastlar inhibe olduğu için yaygın litik kemik lezyonlarına rağmen Alkalen Fosfataz (ALP) NORMALDİR; prognozda en önemli belirteç Beta-2 Mikroglobulindir.',
        trueStatement: 'Multipl miyelomda CRAB bulguları (hiperkalsemi, böbrek yetmezliği, anemi, litik kemik lezyonu) görülür; osteoblast inhibisyonu nedeniyle ALP normaldir ve prognozda beta-2 mikroglobulin en önemlidir.',
        falseStatement: 'Multipl miyelomda osteoblastik aktivite aşırı arttığı için serum alkalen fosfataz (ALP) düzeyi 10 kat yükselir.',
        falseHighlight: 'osteoblastik aktivite aşırı arttığı için serum alkalen fosfataz (ALP) düzeyi 10 kat yükselir',
      },
      {
        entityName: 'Behçet Hastalığı vs. Ankilozan Spondilit — Erozyon Yapmayan Artrit, Pulmoner Arter Anevrizması ve Bambu Kamışı Omurga',
        patientVignette:
          '29 yaşında erkek hastada yılda 5 kez tekrarlayan oral aft, skrotumda skar bırakan genital ülser, eritema nodozum, hipopyonlu panüveit ve hemoptizi saptanıyor. Toraks BT anjiyografide bilateral pulmoner arter anevrizması görülüyor.',
        clues: ['oral aft', 'skar bırakan genital ülser', 'hipopyonlu panüveit', 'pulmoner arter anevrizması'],
        questionPrompt: 'Her çapta hem arter hem venleri tutabilen bu vaskülitte en sık mortalite nedeni olan pulmoner arter anevrizması ve artrit özelliği hangisidir?',
        mechanism:
          'Behçet hastalığı hem arter hem venleri her çapta tutabilen nötrofilik vaskülittir (HLA-B51 ilişkili). Oral aft (%100, skar bırakmaz), genital ülser (skar bırakır!), hipopyonlu üveit, paterji pozitifliği görülür. Artriti en sık diz eklemini tutar ve EROZYON/DEFORMİTE YAPMAZ. En sık ölüm nedeni Pulmoner Arter Anevrizması rüptürüdür (Behçet’in en karakteristik vasküler tutulumu!).',
        whenCorrectNote: 'HLA-B51, skar bırakan genital ülser, erozyon yapmayan diz artriti, en sık ölüm nedeni Pulmoner Arter Anevrizması.',
        firstVsGold: 'Behçet: HLA-B51, Pulmoner arter anevrizması, Erozyonsuz artrit • Ankilozan Spondilit: HLA-B27, Sakroileit (ilk bulgu), Entezit, Anterior üveit, Aort yetmezliği.',
        pearl: 'Behçet hastalığında en sık ölüm nedeni Pulmoner Arter Anevrizması rüptürüdür; artriti ise sekelsiz ve erozyonsuz iyileşir.',
        trueStatement: 'Behçet hastalığı her çapta arter ve veni tutabilir; artriti deformite bırakmaz ve en önemli mortalite nedeni pulmoner arter anevrizması rüptürüdür.',
        falseStatement: 'Behçet hastalığında oral aftlar derin skar bırakarak iyileşir ve el küçük eklemlerinde ağır eroziv deformite (kuğu boynu) gelişir.',
        falseHighlight: 'oral aftlar derin skar bırakarak iyileşir ve el küçük eklemlerinde ağır eroziv deformite',
      },
      {
        entityName: 'Uygunsuz ADH Sendromu (SIADH) — Övolemik Hiponatremi, İdrar Ozmolaritesi >100 ve İdrar Sodyumu >40 mEq/L',
        patientVignette:
          'Küçük hücreli akciğer kanseri tanılı 60 yaşında hastada konfüzyon saptanıyor. Fizik muayenede ödem veya dehidratasyon bulgusu yok (övolemik). Serum Na: 118 mEq/L, plazma ozmolaritesi: 245 mOsm/kg (hipotonik), idrar ozmolaritesi: 480 mOsm/kg, idrar sodyumu: 65 mEq/L, serum ürik asit ve BUN düzeyleri düşük bulunuyor.',
        clues: ['Küçük hücreli akciğer kanseri', 'övolemik', 'Serum Na: 118', 'idrar ozmolaritesi: 480', 'idrar sodyumu: 65', 'ürik asit ve BUN düzeyleri düşük'],
        questionPrompt: 'Bu hastada en olası tanı ve hızlı sodyum düzeltilmesi halinde gelişebilecek nörolojik komplikasyon aşağıdakilerden hangisidir?',
        mechanism:
          'SIADH (Uygunsuz ADH Sendromu) en sık paraneoplastik olarak Küçük Hücreli Akciğer Kanserinde görülür. Su tutulumuna bağlı ÖVOLEMİK HİPONATREMİ, düşük plazma ozmolaritesi (<275), uygunsuz konsantre idrar (>100 mOsm/kg), natriürez (idrar Na >40 mEq/L) ve hipoürisemi (ürik asit <4 mg/dL) karakteristiktir. Tedavide sıvı kısıtlaması, semptomatikse %3 hipertonik NaCl ve V2 reseptör antagonisti Tolvaptan kullanılır. Sodyum 24 saatte 8-10 mEq/L’den hızlı yükseltilirse Santral Pontin Miyelinolizis (Osmotik Demiyelinizasyon) gelişir!',
        whenCorrectNote: 'Övolemik hiponatremi, idrar Na >40, idrar ozmolaritesi >100, hipoürisemi; hızlı düzeltilirse Santral Pontin Miyelinolizis.',
        firstVsGold: 'Hiponatremiyi Hızlı Düzeltme Komplikasyonu: Santral Pontin Miyelinolizis • Hipernatremiyi Hızlı Düzeltme Komplikasyonu: Beyin Ödemi.',
        pearl: 'Hiponatremiyi hızlı düzeltmek Santral Pontin Miyelinolizis (Osmotik Demiyelinizasyon); Hipernatremiyi hızlı düzeltmek ise Beyin Ödemi yapar!',
        trueStatement: 'SIADH övolemik hiponatremi, yüksek idrar sodyumu (>40 mEq/L) ve hipoürisemi ile seyreder; hiponatreminin hızlı düzeltilmesi santral pontin miyelinolizise yol açar.',
        falseStatement: 'SIADH tablosunda yaygın gode bırakan ödem ve hiperürisemi görülür; tedavisinde desmopresin (DDAVP) kullanılır.',
        falseHighlight: 'yaygın gode bırakan ödem ve hiperürisemi görülür; tedavisinde desmopresin',
      },
    ],
  },
  // 9. PEDİATRİ EK KÜME: Yenidoğan Sarılıkları, Solunum Acilleri ve Çocuk Nefroloji/Nöroloji
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Hastalıkları, Çocuk Nefrolojisi, Hematoloji ve İmmünoloji',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Yenidoğanın Geçici Takipnesi (TTN / Yaş Akciğer) — Sezaryen Doğum, Fetal Akciğer Sıvısı Emilim Gecikmesi ve Fissürde Sıvı',
        patientVignette:
          '39. gebelik haftasında elektif sezaryen ile doğan bebekte doğumdan 2 saat sonra başlayan takipne (solunum sayısı 85/dk) ve hafif inleme saptanıyor. Akciğer oskültasyonu doğal olup grafide havalanma artışı (hiperaerasyon), perihiler vasküler belirginleşme ve interlobar fissürde sıvı izleniyor; bebek nazal oksijenle 48 saat içinde tamamen düzeliyor.',
        clues: ['elektif sezaryen', 'takipne', 'havalanma artışı (hiperaerasyon)', 'interlobar fissürde sıvı', '48 saat içinde tamamen düzeliyor'],
        questionPrompt: 'Fetal akciğer sıvısının ENaC kanallarıyla emiliminin gecikmesi sonucu gelişen bu tablo aşağıdakilerden hangisidir?',
        mechanism:
          'Normal vajinal doğum stresinde katekolamin ve kortizol deşarjı alveoler ENaC kanallarını aktive ederek fetal akciğer sıvısını hızla emer. Doğum eylemi başlamadan yapılan Elektif Sezaryen doğumlarda bu sıvı emilemez ve Yenidoğanın Geçici Takipnesi (TTN / Tip II RDS / Yaş Akciğer) gelişir. Grafide hiperaerasyon ve fissürde sıvı tipiktir (RDS’de ise hipoaerasyon, buzlu cam ve hava bronkogramı vardır).',
        whenCorrectNote: 'Term/geç preterm sezaryen bebek, fetal akciğer sıvısı emilim gecikmesi, grafide hiperaerasyon + fissürde sıvı, 24-72 saatte tam iyileşme.',
        firstVsGold: 'RDS (Sürfaktan eksikliği): Prematüre, Hipoaerasyon (Düşük akciğer hacmi), Buzlu cam • TTN (Yaş Akciğer): Term Sezaryen, Hiperaerasyon, Fissürde sıvı.',
        pearl: 'RDS’de akciğer grafisinde HİPOAERASYON (buzlu cam), Yenidoğanın Geçici Takipnesi (TTN) ve Mekonyum Aspirasyonunda ise HİPERAERASYON görülür!',
        trueStatement: 'Yenidoğanın geçici takipnesi (TTN) elektif sezaryen doğumlarda fetal akciğer sıvısının emilim gecikmesiyle gelişir ve grafide fissürde sıvı ile hiperaerasyon izlenir.',
        falseStatement: 'Yenidoğanın geçici takipnesinde sürfaktan sentezi tamamen yok olup tedavisinde acil endotrakeal sürfaktan replasmanı şarttır.',
        falseHighlight: 'sürfaktan sentezi tamamen yok olup tedavisinde acil endotrakeal sürfaktan',
      },
      {
        entityName: 'Akut Poststreptokokal Glomerülonefrit (APSGN) vs. IgA Nefropatisi — C3 Düşüklüğü ve Latent Süre',
        patientVignette:
          '8 yaşında çocuk geçirdiği streptokokal tonsillofarenjitten 14 gün sonra çay/kola rengi idrar (makroskopik hematüri), göz kapaklarında ödem ve hipertansiyon ile getiriliyor. İdrar mikroskopisinde dismorfik eritrositler ve eritrosit silendirleri, kan tetkikinde ASO yüksekliği ve Kompleman C3 düşüklüğü (C4 normal) saptanıyor.',
        clues: ['14 gün sonra', 'çay/kola rengi idrar', 'eritrosit silendirleri', 'Kompleman C3 düşüklüğü (C4 normal)'],
        questionPrompt: 'Alternatif kompleman yolunun aktivasyonuyla C3’ün düştüğü ve 6-8 haftada normale döndüğü bu nefrit ile IgA nefropatisi (Berger) arasındaki en temel fark nedir?',
        mechanism:
          'APSGN’de farenjitten 1-2 hafta, impetigodan (cilt enfeksiyonu) 3-6 hafta sonra nefritik sendrom gelişir; alternatif yol aktivasyonuyla C3 DÜŞER (C4 normaldir) ve 6-8 haftada normale döner (8 haftayı aşan C3 düşüklüğünde MPGN düşünülür!). IgA Nefropatisinde (Berger hastalığı) ise ÜSYE ile EŞ ZAMANLI (1-3 gün içinde, "sinfarenjitik") makroskopik hematüri olur ve serum C3 düzeyi NORMALDİR!',
        whenCorrectNote: 'APSGN = Farenjitten 10-14 gün sonra hematüri + HT + C3 DÜŞÜK (6-8 haftada düzelir), EM’de subepitelyal hörgüç (hump) birikimi.',
        firstVsGold: 'APSGN: Latent süre 1-3 hafta, C3 DÜŞÜK • IgA Nefropatisi (Berger): ÜSYE ile eş zamanlı (1-2 gün), C3 NORMAL (En sık primer glomerülonefrit).',
        pearl: 'ÜSYE’den 1-2 gün sonra (eş zamanlı) hematüri + Normal C3 = IgA Nefropatisi; 10-14 gün sonra hematüri + Düşük C3 = Poststreptokokal AGN!',
        trueStatement: 'Akut poststreptokokal glomerülonefritte farenjitten 1-2 hafta sonra nefritik sendrom gelişir ve serum C3 düzeyi düşük olup 6-8 haftada normale döner.',
        falseStatement: 'IgA nefropatisinde serum C3 ve C4 düzeyleri çok düşüktür ve boğaz enfeksiyonundan 6 hafta sonra başlar.',
        falseHighlight: 'serum C3 ve C4 düzeyleri çok düşüktür ve boğaz enfeksiyonundan 6 hafta sonra',
      },
      {
        entityName: 'Hemolitik Üremik Sendrom (HÜS) — E. coli O157:H7 (Shiga Toksin), Mikroanjiyopatik Hemolitik Anemi, Trombositopeni ve ABY',
        patientVignette:
          '4 yaşında çocuk kanlı ishal atağından 5 gün sonra solukluk, peteşiler ve idrar çıkışında azalma (oligüri) ile getiriliyor. Hb: 6.8 g/dL, Trombosit: 32.000/mm³, Kreatinin: 3.1 mg/dL, Coombs testi negatif, PT/aPTT normal ve periferik yaymada miğfer/parçalanmış eritrositler (şistositler) izleniyor.',
        clues: ['kanlı ishal atağından 5 gün sonra', 'Trombosit: 32.000', 'Kreatinin: 3.1', 'Coombs testi negatif, PT/aPTT normal', 'şistositler'],
        questionPrompt: 'Süt çocuğu ve erken çocukluk çağında kazanılmış akut böbrek yetmezliğinin en sık nedeni olan bu sendromda antibiyotik ve trombosit süspansiyonu yaklaşımı nasıldır?',
        mechanism:
          'Tipik HÜS, enterohemorajik E. coli (EHEC O157:H7) veya Shigella dysenteriae’nin ürettiği Shiga-benzeri toksinin (Verotoksin) glomerül endoteline bağlanmasıyla gelişir. Klasik Triyadı: 1. Coombs (-) Mikroanjiyopatik Hemolitik Anemi (Şistositler), 2. Trombositopeni, 3. Akut Böbrek Yetmezliğidir (PT/aPTT normaldir -> DİK’ten farkı!). EHEC ishalinde antibiyotik vermek bakteri lizisiyle toksin salınımını artırarak HÜS riskini ARTIRIR; ayrıca aktif yaşamı tehdit eden kanama yoksa trombosit süspansiyonu verilmez (mikrotrombüsleri artırır).',
        whenCorrectNote: 'EHEC O157:H7 kanlı ishal sonrası MAHA (şistosit) + Trombositopeni + ABY; Coombs negatif ve PT/aPTT normaldir.',
        firstVsGold: 'HÜS vs. DİK Ayrımı: İkisinde de şistosit ve trombositopeni vardır; HÜS’te PT, aPTT ve Fibrinojen NORMAL iken DİK’te PT/aPTT uzamış ve fibrinojen düşüktür.',
        pearl: 'HÜS’te Coombs (-) mikroanjiyopatik hemolitik anemi, trombositopeni ve ABY triyadı vardır; DİK’ten farklı olarak PT ve aPTT NORMALDİR!',
        trueStatement: 'Hemolitik üremik sendromda (HÜS) Coombs negatif mikroanjiyopatik hemolitik anemi, trombositopeni ve akut böbrek yetmezliği görülür; PT ve aPTT normaldir.',
        falseStatement: 'Hemolitik üremik sendromda direkt Coombs testi 4+ pozitiftir ve PT ile aPTT değerleri her zaman belirgin uzamıştır.',
        falseHighlight: 'direkt Coombs testi 4+ pozitiftir ve PT ile aPTT değerleri her zaman belirgin uzamıştır',
      },
      {
        entityName: 'Konjenital Adrenal Hiperplazi (21-Hidroksilaz Eksikliği) — Hiperkalemi, Hiponatremi, Virilizasyon ve 17-OH Progesteron Artışı',
        patientVignette:
          '12 günlük bebek kusma, ağır dehidratasyon, hiponatremi (Na: 121 mEq/L), hiperkalemi (K: 7.4 mEq/L), hipoglisemi ve metabolik asidoz (tuz kaybı krizi) ile getiriliyor. Fizik muayenede 46,XX karyotipli kız bebekte klitoromegali ve labial füzyon (kuşkulu genitalya) saptanıyor.',
        clues: ['hiponatremi', 'hiperkalemi', 'klitoromegali ve labial füzyon', 'tuz kaybı krizi'],
        questionPrompt: 'KAH olgularının %90-95’inden sorumlu olan bu enzim eksikliğinde tanı koydurucu serum belirteci hangisidir?',
        mechanism:
          'Konjenital Adrenal Hiperplazinin (KAH) en sık (%95) nedeni 21-HİDROKSİLAZ eksikliğidir: Aldosteron ve Kortizol sentezlenemez, öncül maddeler Androjen yolağına kayar. Sonuçta tuz kaybı krizi (Hiponatremi + Hiperkalemi + Hipotansiyon) ve 46,XX kız bebekte virilizasyon (ambigus genitalya) gelişir. Tanıda serum 17-HİDROKSİPROGESTERON (17-OHP) düzeyi belirgin yüksektir. (11-beta hidroksilaz eksikliğinde ise DOC birikimine bağlı HİPERTANSİYON ve hipokalemi görülür!).',
        whenCorrectNote: '21-Hidroksilaz eksikliği = En sık KAH (%95), Hiponatremi + Hiperkalemi (tuz kaybı) + Virilizasyon + 17-OH Progesteron artışı.',
        firstVsGold: '21-Hidroksilaz Eksikliği: Hipotansiyon (Tuz kaybı) + Hiperkalemi + 17-OHP artışı • 11-Beta Hidroksilaz Eksikliği: Hipertansiyon + Hipokalemi + 11-Deoksikortizol artışı.',
        pearl: 'KAH’ın en sık nedeni 21-Hidroksilaz eksikliğidir (tuz kaybı + hiperkalemi + 17-OHP artışı); hipertansiyon + virilizasyon varsa 11-Beta Hidroksilaz eksikliği düşünülür!',
        trueStatement: 'Konjenital adrenal hiperplazinin en sık nedeni olan 21-hidroksilaz eksikliğinde hiponatremi, hiperkalemi, kız bebekte virilizasyon ve 17-OH progesteron artışı görülür.',
        falseStatement: '21-hidroksilaz eksikliğinde ağır hipertansiyon ve hipokalemik alkaloz görülür; androjen sentezi tamamen durmuştur.',
        falseHighlight: 'ağır hipertansiyon ve hipokalemik alkaloz görülür; androjen sentezi tamamen durmuştur',
      },
      {
        entityName: 'Krup (Akut Laringotrakeobronşit) vs. Akut Epiglottit — Kalem Ucu (Çan Kulesi) vs. Başparmak Bulgusu',
        patientVignette:
          '2 yaşında çocukta düşük dereceli ateş, havlar tarzda (barking) öksürük, ses kısıklığı ve inspiratuvar stridor gelişiyor. Ön-arka boyun grafisinde subglottik daralmaya bağlı "kalem ucu / çan kulesi (steeple sign)" görünümü saptanıyor.',
        clues: ['havlar tarzda (barking) öksürük', 'inspiratuvar stridor', 'kalem ucu / çan kulesi (steeple sign)'],
        questionPrompt: 'En sık Parainfluenza virüsünün yol açtığı bu tablonun tedavisi ve Akut Epiglottit ile radyolojik farkı hangisidir?',
        mechanism:
          'Krup (Akut Laringotrakeobronşit) en sık Parainfluenza tip 1 virüsü ile gelişir; subglottik ödem nedeniyle havlar tarzda öksürük, stridor ve grafide "Kalem ucu / Çan kulesi (Steeple sign)" görülür. Tedavide tek doz Deksametazon + Nebülize Adrenalin (rasemik epinefrin) verilir. Akut Epiglottit ise toksik görünüm, yüksek ateş, salya akması (drooling), tripod pozisyonu, öksürüğün OLMAMASI ve yan boyun grafisinde "Başparmak (Thumb) bulgusu" ile karakterizedir (Dil basacağı ile muayene kontrendikedir!).',
        whenCorrectNote: 'Krup = Parainfluenza, havlar tarzda öksürük, Kalem ucu (Çan kulesi) bulgusu, Deksametazon + Nebülize adrenalin.',
        firstVsGold: 'Krup (Subglottik): Parainfluenza, Havlar öksürük, Kalem ucu (Steeple) bulgusu • Epiglottit (Supraglottik): Toksik görünüm, Salya akması, Başparmak (Thumb) bulgusu.',
        pearl: 'Krupta boyun grafisinde "Kalem Ucu / Çan Kulesi (Steeple sign)", Akut Epiglottitte ise yan grafide "Başparmak (Thumb sign)" görülür.',
        trueStatement: 'Akut laringotrakeobronşitte (Krup) en sık etken parainfluenza virüsü olup boyun grafisinde kalem ucu (çan kulesi) bulgusu izlenir.',
        falseStatement: 'Krup hastalarında havlar tarzda öksürük bulunmaz ve yan boyun grafisinde başparmak izi görünümü patognomoniktir.',
        falseHighlight: 'havlar tarzda öksürük bulunmaz ve yan boyun grafisinde başparmak izi',
      },
    ],
  },
  // 10. CERRAHİ EK KÜME: Meme, Tiroid, Özofagus, Kolorektal ve Herni Cerrahisi
  {
    branchId: 'cerrahi',
    subTopic: 'Meme, Endokrin, Gastrointestinal Cerrahi ve Karın Duvarı Hernileri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Femoral Herni vs. İndirekt İnguinal Herni — En Sık İnkarsere/Strangüle Olan Herni ve Anatomik Komşuluklar',
        patientVignette:
          '68 yaşında çok doğum yapmış kadın hasta sağ kasıkta inguinal ligamentin hemen altında ve tuberculum pubicum’un inferolateralinde ağrılı, redükte edilemeyen şişlik ve mekanik bağırsak tıkanıklığı bulgularıyla acil servise başvuruyor.',
        clues: ['kadın hasta', 'inguinal ligamentin hemen altında', 'redükte edilemeyen şişlik'],
        questionPrompt: 'Hem erkeklerde hem kadınlarda EN SIK görülen kasık fıtığı ile strangülasyon (boğulma) riski EN YÜKSEK olan kasık fıtığı sırasıyla hangisidir?',
        mechanism:
          'Hem erkeklerde hem de kadınlarda EN SIK görülen kasık fıtığı İNDİREKT İNGUİNAL HERNİDİR (inferior epigastrik damarların lateralinden, processus vaginalis kalıntısından çıkar). Ancak kadınlarda erkeklere göre daha sık görülen, inguinal ligamentin (Poupart) altından femoral kanaldan çıkan ve dar boynu nedeniyle İNKARSERASYON / STRANGÜLASYON riski EN YÜKSEK olan fıtık FEMORAL HERNİDİR (McVay yöntemi ile onarılır).',
        whenCorrectNote: 'En sık fıtık (erkek ve kadında): İndirekt inguinal herni; Strangülasyon riski en yüksek fıtık: Femoral herni (onarımı McVay).',
        firstVsGold: 'İndirekt İnguinal Herni: İnferior epigastrik damarların LATERALİNDEN • Direkt İnguinal Herni: Hesselbach üçgeninden, damarların MEDİALİNDEN • Femoral Herni: İnguinal ligamentin ALTINDAN.',
        pearl: 'Kadınlarda da en sık görülen fıtık İndirekt İnguinal Hernidir; ancak strangülasyon (boğulma) riski EN YÜKSEK olan fıtık Femoral Hernidir!',
        trueStatement: 'Hem erkek hem kadınlarda en sık görülen kasık fıtığı indirekt inguinal herni iken, strangülasyon riski en yüksek olan fıtık femoral hernidir.',
        falseStatement: 'Direkt inguinal herni inferior epigastrik damarların lateralinden çıkar ve strangülasyon riski en yüksek olan fıtık tipidir.',
        falseHighlight: 'inferior epigastrik damarların lateralinden çıkar ve strangülasyon riski en yüksek',
      },
      {
        entityName: 'Medüller Tiroid Karsinomu — Parafolliküler C Hücresi, Kalsitonin Takibi, Amiloid Birikimi ve RET Proto-onkogeni',
        patientVignette:
          'Tiroid nodülü ve servikal lenfadenopatisi olan 34 yaşında hastanın serum Kalsitonin ve CEA düzeyleri yüksek saptanıyor. Tiroidektomi patolojisinde Kongo kırmızısı ile boyanan amiloid stroması içinde poligonal/iğsi hücreler ve genetik incelemede RET proto-onkogen mutasyonu gösteriliyor.',
        clues: ['Kalsitonin ve CEA', 'Kongo kırmızısı ile boyanan amiloid', 'RET proto-onkogen'],
        questionPrompt: 'Nöral krest kökenli parafolliküler C hücrelerinden gelişen bu tümörde ameliyat öncesi mutlaka dışlanması gereken eşlikçi tümör hangisidir?',
        mechanism:
          'Medüller Tiroid Karsinomu (MTK), parafolliküler C hücrelerinden gelişir, Kalsitonin ve CEA salgılar, stromasında Kalsitonin kaynaklı AMİLOİD birikir. Radyoaktif iyot (I-131) TUTMAZ ve TSH baskılama tedavisi işe yaramaz! MEN 2A (MTK + Feokromositoma + Hiperparatiroidi) ve MEN 2B (MTK + Feokromositoma + Mukozal nöromlar/Marfanoid görünüm) sendromlarının parçası olabilir. Bu nedenle tiroid cerrahisinden ÖNCE mutlaka FEOKROMOSİTOMA araştırılmalı ve varsa önce sürrenalektomi yapılmalıdır!',
        whenCorrectNote: 'Parafolliküler C hücresi, Kalsitonin + Amiloid, RET mutasyonu (MEN 2A/2B), radyoaktif iyot tutmaz, cerrahi öncesi Feokromositoma dışlanmalı.',
        firstVsGold: 'Papiller/Folliküler Ca Takip Belirteci: Tiroglobulin (I-131 tutar) • Medüller Tiroid Ca Takip Belirteci: Kalsitonin ve CEA (I-131 tutmaz!).',
        pearl: 'Medüller tiroid karsinomu tanısı alan her hastada tiroidektomiden ÖNCE mutlaka Feokromositoma dışlanmalı, varsa önce Feokromositoma opere edilmelidir!',
        trueStatement: 'Medüller tiroid karsinomu parafolliküler C hücrelerinden gelişir, kalsitonin salgılar, amiloid içerir ve cerrahi öncesi mutlaka feokromositoma araştırılmalıdır.',
        falseStatement: 'Medüller tiroid karsinomu follikül epitelinden köken alır ve tedavisinde radyoaktif iyot (I-131) ablasyonu en etkili yöntemdir.',
        falseHighlight: 'follikül epitelinden köken alır ve tedavisinde radyoaktif iyot (I-131) ablasyonu en etkili',
      },
      {
        entityName: 'Akalazya — Miyenterik (Auerbach) Pleksus Kaybı, Kuş Gagası Görünümü ve Altın Standart Manometri',
        patientVignette:
          '38 yaşında kadın hasta yıllardır hem katı hem de sıvı gıdalara karşı olan yutma güçlüğü (paradoksal disfaji), sindirilmemiş gıda regürjitasyonu ve kilo kaybı ile başvuruyor. Baryumlu özofagus grafisinde distal özofagusta "kuş gagası (bird-beak)" daralması ve proksimalde genişleme izleniyor.',
        clues: ['hem katı hem de sıvı gıdalara karşı', 'kuş gagası (bird-beak)'],
        questionPrompt: 'Alt özofagus sfinkterinin (AÖS) yutma sırasında gevşeyemediği bu motilite bozukluğunda kesin tanı için altın standart yöntem hangisidir?',
        mechanism:
          'Akalazyada Auerbach (miyenterik) pleksustaki inhibitör (VIP ve Nitrik Oksit salgılayan) gangliyon hücreleri kaybolur: Alt özofagus sfinkteri (AÖS) istirahat basıncı artar, yutma ile AÖS gevşeyemez ve özofagus gövdesinde peristaltizm kaybolur (aperistaltizm). Maligniteyi (psödoakalazya) dışlamak için endoskopi şarttır; ancak kesin tanı için ALTIN STANDART yöntem Özofagus Manometrisidir. En etkili cerrahi tedavi Laparoskopik Heller Miyotomidir (+ Dor/Toupet parsiyel fundoplikasyon).',
        whenCorrectNote: 'Hem katı hem sıvıya disfaji, kuş gagası grafisi, NO/VIP nöron kaybı, altın standart tanı Özofagus Manometrisi, cerrahi Heller miyotomi.',
        firstVsGold: 'Baryumlu Grafi: Kuş gagası görünümü • Malignite Dışlama: Endoskopi • Kesin Tanı (Altın Standart): Yüksek Çözünürlüklü Özofagus Manometrisi.',
        pearl: 'Akalazyada baryumlu grafide "Kuş Gagası" görülür; kesin tanısında ALTIN STANDART yöntem Özofagus Manometrisidir (yutma ile AÖS gevşeyememesi + aperistaltizm).',
        trueStatement: 'Akalazyada alt özofagus sfinkteri yutma ile gevşeyemez; baryumlu grafide kuş gagası görünümü izlenir ve kesin tanıda altın standart manometridir.',
        falseStatement: 'Akalazyada yalnız katı gıdalara karşı disfaji olur ve alt özofagus sfinkter basıncı sıfıra düşmüştür.',
        falseHighlight: 'yalnız katı gıdalara karşı disfaji olur ve alt özofagus sfinkter basıncı sıfıra',
      },
      {
        entityName: 'Meme Kanseri — En Sık İnvaziv Duktal Karsinom, İLK Metastaz Aksiller Lenf Nodu ve En Önemli Prognoz Kriteri',
        patientVignette:
          '54 yaşında kadın hastada sağ meme üst-dış kadranda sert, fikse, ağrısız kitle ve mamografide pleomorfik mikrokalsifikasyon kümesi saptanıyor. Tru-cut biyopsi sonucu invaziv meme karsinomu olarak raporlanıyor.',
        clues: ['üst-dış kadranda', 'pleomorfik mikrokalsifikasyon', 'Tru-cut biyopsi'],
        questionPrompt: 'Meme kanserinde uzak metastaz bulunmayan hastalarda prognozu belirleyen EN ÖNEMLİ faktör aşağıdakilerden hangisidir?',
        mechanism:
          'Meme kanseri en sık Üst-Dış kadrana yerleşir ve en sık histolojik tipi İnvaziv Duktal Karsinomdur. Klinikte aksillası negatif (N0) olan erken evre meme kanserinde aksiller evreleme için altın standart Sentinel Lenf Nodu Biyopsisidir (SLNB). Uzak metastazı olmayan meme kanserinde prognozu ve sağkalımı belirleyen EN ÖNEMLİ faktör AKSİLLER LENF NODU DURUMUDUR (tutulan lenf nodu sayısı). En sık uzak metastaz yeri ise Kemiktir.',
        whenCorrectNote: 'En sık üst-dış kadran, en sık İnvaziv duktal Ca, tanı Tru-cut (kor) biyopsi, en önemli prognostik faktör Aksiller lenf nodu tutulumu.',
        firstVsGold: 'Kitlede Kesin Tanı: Tru-cut (Kalın İğne / Kor) Biyopsi • Aksilla Evrelemesi: Sentinel Lenf Nodu Biyopsisi • En Önemli Prognoz Kriteri: Aksiller Lenf Nodu Durumu.',
        pearl: 'Meme kanserinde prognozu belirleyen EN ÖNEMLİ faktör Aksiller Lenf Nodu tutulumudur; en sık uzak metastaz yeri ise Kemiktir.',
        trueStatement: 'Meme kanserinde en önemli prognostik faktör aksiller lenf nodu durumu olup klinik olarak negatif aksillada evreleme sentinel lenf nodu biyopsisi ile yapılır.',
        falseStatement: 'Meme kanseri en sık alt-iç kadranda yerleşir ve kesin tanısında ince iğne aspirasyon sitolojisi reseptör tayini için altın standarttır.',
        falseHighlight: 'en sık alt-iç kadranda yerleşir ve kesin tanısında ince iğne aspirasyon sitolojisi',
      },
      {
        entityName: 'Akut Apandisit — En Sık Neden Fekalit, Göbekten Sağ Alt Kadrana Göç Eden Ağrı ve Gebede En Sık Obstetrik Dışı Cerrahi Acil',
        patientVignette:
          '24 yaşında hastada önce göbek çevresinde (periumbilikal) başlayan visseral ağrı, iştahsızlık (anoreksi) ve bulantı, 8 saat sonra sağ alt kadrana (McBurney noktasına) yerleşen keskin somatik ağrıya dönüşüyor.',
        clues: ['önce göbek çevresinde', 'iştahsızlık (anoreksi)', 'McBurney noktasına'],
        questionPrompt: 'Erişkinde akut apandisitin en sık lümen tıkanıklığı nedeni ve gebelikteki klinik önemi aşağıdakilerden hangisidir?',
        mechanism:
          'Akut apandisitte lümen tıkanıklığının çocuklarda en sık nedeni Lenfoid Hiperplazi, erişkinlerde ise en sık nedeni FEKALİT (Taşlaşmış gaita) tir. Klasik semptom sırası: 1. İştahsızlık (Anoreksi - neredeyse her zaman vardır!), 2. Periumbilikal ağrı, 3. Bulantı-kusma, 4. Sağ alt kadrana ağrı göçü, 5. Ateştir. Gebelikte en sık görülen obstetrik dışı cerrahi acil Akut Apandisittir (gebelik ilerledikçe apendiks yukarı-sağa yer değiştirir, lökositoz gebelikte fizyolojik olabilir!).',
        whenCorrectNote: 'Çocukta en sık lenfoid hiperplazi, erişkinde en sık fekalit; ilk semptom iştahsızlık; gebede en sık non-obstetrik cerrahi acil.',
        firstVsGold: 'Erişkinde En Duyarlı Görüntüleme: Kontrastlı Batın BT • Çocuk ve Gebede İlk Tercih Görüntüleme: Ultrasonografi (USG yetersizse gebede kontrastsız MR).',
        pearl: 'Gebelikte en sık görülen obstetrik dışı cerrahi acil Akut Apandisittir; erişkinde en sık nedeni fekalit, çocukta ise lenfoid hiperplazidir.',
        trueStatement: 'Akut apandisit erişkinde en sık fekalit, çocukta en sık lenfoid hiperplaziye bağlı gelişir ve gebelikte en sık görülen obstetrik dışı cerrahi acildir.',
        falseStatement: 'Akut apandisitte ilk başlayan semptom yüksek ateş ve ishal olup ağrı sağ alt kadrandan başlayıp göbek çevresine göç eder.',
        falseHighlight: 'ilk başlayan semptom yüksek ateş ve ishal olup ağrı sağ alt kadrandan başlayıp göbek çevresine göç eder',
      },
    ],
  },
  // 11. KADIN DOĞUM EK KÜME: Jinekolojik Onkoloji, PCOS, Postpartum Kanama ve Doğum Eylemi
  {
    branchId: 'kadindogum',
    subTopic: 'Jinekolojik Onkoloji, Polikistik Over Sendromu ve Doğum/Postpartum Aciller',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Endometrium Kanseri — Postmenopozal Kanama, PTEN Mutasyonu (Tip 1 Endometrioid) ve Kesin Tanı Endometrial Biyopsi',
        patientVignette:
          '61 yaşında obez, hipertansif, diyabetik ve nullipar kadın hasta postmenopozal vajinal kanama ile başvuruyor. Transvajinal USG’de endometrium kalınlığı 14 mm (normalde ≤4 mm) ölçülüyor.',
        clues: ['obez, hipertansif, diyabetik ve nullipar', 'postmenopozal vajinal kanama', 'endometrium kalınlığı 14 mm'],
        questionPrompt: 'En sık görülen jinekolojik kanser olan bu tabloda kesin tanı yöntemi ve Tip 1 tümörde en sık saptanan genetik mutasyon hangisidir?',
        mechanism:
          'Postmenopozal vajinal kanamanın EN SIK nedeni Endometrial Atrofidir; ancak ekarte edilmesi gereken en önemli neden Endometrium Kanseridir! Postmenopozal kanamada TV-USG’de endometrium >4 mm ise kesin tanı için Endometrial Biyopsi (Pipelle veya Fraksiyone Küretaj / Histeroskopik biyopsi) yapılır. En sık tipi karşılanmamış östrojenle ilişkili Tip 1 (Endometrioid adenokarsinom) olup en sık PTEN tümör süpresör gen mutasyonu görülür (Tip 2 Seröz tipte ise p53 mutasyonu vardır ve prognozu kötüdür).',
        whenCorrectNote: 'En sık jinekolojik kanser, karşılanmamış östrojen + obezite + PKOS, Tip 1’de PTEN mutasyonu, tanı Pipelle/Endometrial biyopsi.',
        firstVsGold: 'Postmenopozal Kanama En Sık Neden: Endometrial Atrofi • En Sık Jinekolojik Kanser: Endometrium Ca • En Ölümcül Jinekolojik Kanser: Over Ca.',
        pearl: 'Postmenopozal kanamanın en sık nedeni Endometrial Atrofidir; Tip 1 (Endometrioid) endometrium kanserinde en sık PTEN mutasyonu görülür.',
        trueStatement: 'Endometrium kanseri en sık görülen jinekolojik malignite olup Tip 1 endometrioid tipte karşılanmamış östrojen maruziyeti ve PTEN mutasyonu karakteristiktir.',
        falseStatement: 'Endometrium kanserinde kombine oral kontraseptif kullanımı ve multiparite hastalık riskini en çok artıran faktörlerdir.',
        falseHighlight: 'kombine oral kontraseptif kullanımı ve multiparite hastalık riskini en çok artıran',
      },
      {
        entityName: 'Serviks Kanseri — HPV Tip 16/18 (E6 -> p53, E7 -> Rb İnhibisyonu), Postkoital Kanama ve Kolposkopik Biyopsi',
        patientVignette:
          '37 yaşında kadın hasta ilişki sonrası lekelenme tarzında kanama (postkoital kanama) ile başvuruyor. Servikal Pap-smear testinde HSIL (Yüksek dereceli skuamöz intraepitelyal lezyon) ve HPV Tip 16 pozitifliği saptanıyor.',
        clues: ['postkoital kanama', 'HSIL', 'HPV Tip 16'],
        questionPrompt: 'Transformasyon zonundan (skuamokolumnar bileşkeden) kaynaklanan bu lezyonda bir sonraki tanısal adım ve viral onkoprotein mekanizması hangisidir?',
        mechanism:
          'Serviks kanserinin en önemli etiyolojik ajanı Yüksek Riskli HPV (en sık Tip 16 -> Skuamöz hücreli Ca; Tip 18 -> Adenokarsinom) enfeksiyonudur. HPV’nin E6 onkoproteini p53’ü yıkar, E7 onkoproteini ise Retinoblastom (Rb) proteinini inaktive eder. Pap-smear bir TARAMA testidir; HSIL veya HPV 16/18 saptandığında kesin tanı için bir sonraki adım KOLPOSKOPİ EŞLİĞİNDE SERVİKAL BİYOPSİDİR!',
        whenCorrectNote: 'HPV 16/18, E6 -> p53 yıkımı, E7 -> Rb inhibisyonu, postkoital kanama, smear anormal ise Kolposkopi + Biyopsi.',
        firstVsGold: 'Tarama Testi: Pap-smear + HPV DNA (Co-test) • Kesin Tanı: Kolposkopi Eşliğinde Biyopsi • Mikroinvaziv/SIN3’te Tanı-Tedavi: Konizasyon (LEEP).',
        pearl: 'HPV’nin E6 onkoproteini p53’ü, E7 onkoproteini ise Rb tümör süpresör proteinini inaktive eder; anormal smear sonrası kesin tanı Kolposkopik Biyopsidir!',
        trueStatement: 'Yüksek riskli HPV tiplerinde E6 proteini p53’ü, E7 proteini ise Rb’yi inaktive eder; anormal Pap-smear (HSIL) sonrası kesin tanı kolposkopik biyopsi ile konur.',
        falseStatement: 'Pap-smear testinde HSIL saptanan hastada biyopsi yapılmadan doğrudan radikal histerektomi (Wertheim) uygulanır.',
        falseHighlight: 'biyopsi yapılmadan doğrudan radikal histerektomi (Wertheim) uygulanır',
      },
      {
        entityName: 'Polikistik Over Sendromu (PKOS) — Rotterdam Kriterleri, LH/FSH >2, İnsülin Direnci ve Ovulasyon İndüksiyonunda İlk Tercih Letrozol',
        patientVignette:
          '25 yaşında kadın hasta oligomenore (yılda 4 kez adet görme), hirsutizm (Ferriman-Gallwey skoru 12), akne, obezite ve infertilite ile başvuruyor. Laboratuvarda LH/FSH oranı >2, serbest testosteron yüksek ve akantozis nigrikans (insülin direnci) saptanıyor.',
        clues: ['oligomenore', 'hirsutizm', 'LH/FSH oranı >2', 'akantozis nigrikans (insülin direnci)'],
        questionPrompt: 'Anovulatuvar infertilitenin en sık nedeni olan PKOS’ta gebelik isteyen hastada ovulasyon indüksiyonu için günümüzde İLK TERCİH ajan hangisidir?',
        mechanism:
          'PKOS tanısı Rotterdam kriterlerinden (1. Oligo/Anovulasyon, 2. Klinik veya biyokimyasal hiperandrojenizm, 3. USG’de polikistik over görünümü) en az 2’sinin varlığı ve diğer nedenlerin (KAH, prolaktinoma, Cushing) dışlanmasıyla konur. İnsülin direnci teka hücrelerinden androjen sentezini artırır ve SHBG’yi düşürür. Çocuk istemeyen hastada ilk tercih Kombine Oral Kontraseptif (KOK); çocuk isteyen hastada ise ovulasyon indüksiyonunda kilo verme sonrası İLK TERCİH medikal ajan Aromataz İnhibitörü olan LETROZOL’dür (Klomifen sitrattan daha yüksek canlı doğum oranı sağlar!).',
        whenCorrectNote: 'Rotterdam kriterleri (3’ten 2’si), LH artışı, insülin direnci, endometrium Ca riski artışı, ovulasyon indüksiyonunda ilk tercih Letrozol.',
        firstVsGold: 'Gebelik İstemeyen PKOS’ta İlk Tercih: Kombine Oral Kontraseptif (Endometriumu korur, SHBG artırır) • Gebelik İsteyen PKOS’ta İlk Tercih: Letrozol.',
        pearl: 'PKOS’ta karşılanmamış östrojene bağlı Endometrium Kanseri riski artar; infertil PKOS hastasında ovulasyon indüksiyonunda ilk tercih ilaç Letrozoldür!',
        trueStatement: 'Polikistik over sendromunda (PKOS) kronik anovulasyon ve insülin direnci görülür; gebelik isteyen hastalarda ovulasyon indüksiyonunda ilk tercih ajan letrozoldür.',
        falseStatement: 'Polikistik over sendromunda FSH düzeyi LH’nın 5 katına çıkar ve serbest östrojen düzeyi sıfırlanır.',
        falseHighlight: 'FSH düzeyi LH’nın 5 katına çıkar ve serbest östrojen düzeyi sıfırlanır',
      },
      {
        entityName: 'Postpartum Kanama — En Sık Neden Uterus Atonisi, İlk Medikal İlaç Oksitosin ve Astımlıda Karboprost Kontrendikasyonu',
        patientVignette:
          'İri bebek (4.400 g) doğumu sonrası plasenta ayrılmasına rağmen şiddetli vajinal kanama gelişen hastanın fizik muayenesinde uterus göbek üstünde, büyük ve gevşek (yumuşak) palpe ediliyor.',
        clues: ['İri bebek', 'uterus göbek üstünde, büyük ve gevşek (yumuşak)'],
        questionPrompt: 'Anne ölümlerinin ve postpartum kanamanın en sık nedeni olan bu tabloda ilk tercih uterotonik ilaç ve kontrendikasyon kuralları hangisidir?',
        mechanism:
          'Postpartum kanamanın (PPK) EN SIK (%70-80) nedeni Uterus Atonisidir. İlk yapılacak işlem bimanuel uterus masajı ve İLK TERCİH uterotonik ilaç İV OKSİTOSİN infüzyonudur. Diğer uterotoniklerin kritik kontrendikasyonları TUS’ta çok sık sorulur: Metilergonovin (Ergot alkaloidi) -> HİPERTANSİYON / Preeklampside kontrendikedir! Karboprost (PGF2-alfa) -> bronkospazm yaptığı için ASTIMDA kontrendikedir!',
        whenCorrectNote: 'PPK en sık neden: Uterus atonisi; İlk tercih ilaç: Oksitosin; Metilergonovin hipertansiyonda, Karboprost (PGF2a) astımda kontrendike.',
        firstVsGold: 'İlk Tercih Uterotonik: Oksitosin • Hipertansiyonda Kontrendike: Metilergonovin • Astımda Kontrendike: Karboprost (PGF2-alfa).',
        pearl: 'Postpartum kanamanın en sık nedeni Uterus Atonisidir (ilk ilaç Oksitosin); Metilergonovin hipertansiyonda, Karboprost (PGF2-alfa) ise astımda KONTRENDİKEDİR!',
        trueStatement: 'Postpartum kanamanın en sık nedeni uterus atonisi olup ilk tercih ilaç oksitosindir; metilergonovin hipertansiyonda, karboprost ise astımda kontrendikedir.',
        falseStatement: 'Ağır preeklampsili ve hipertansif postpartum kanama hastasında ilk tercih uterotonik ilaç intravenöz metilergonovindir.',
        falseHighlight: 'hipertansif postpartum kanama hastasında ilk tercih uterotonik ilaç intravenöz metilergonovindir',
      },
      {
        entityName: 'Komplet vs. Parsiyel Mol Hidatidiform — 46,XX Paternal Diploidi, Kar Fırtınası USG ve Koryokarsinom Riski',
        patientVignette:
          '10 haftalık gebe şiddetli hiperemezis gravidarum, gebelik haftasına göre büyük uterus, vajinal üzüm tanesi şeklinde vezikül düşürme, Beta-hCG >150.000 mIU/mL, bilateral teka-lutein kistleri ve USG’de fetüs izlenmeksizin "kar fırtınası / bal peteği" görünümü ile başvuruyor.',
        clues: ['Beta-hCG >150.000', 'teka-lutein kistleri', 'fetüs izlenmeksizin', 'kar fırtınası / bal peteği'],
        questionPrompt: 'En sık 46,XX tümüyle babadan (paternal) gelen kromozomlarla oluşan bu tablonun tedavisi ve takibi aşağıdakilerden hangisidir?',
        mechanism:
          'Komplet Mol Hidatidiformda çekirdeksiz (boş) ovuma tek spermin girip kendini eşlemesiyle %90 46,XX (tümüyle PATERNAL diploid) karyotip oluşur: Fetüs/embriyo ve amniyon zarı YOKTUR, p57 boyaması NEGATİFTİR, teka-lutein kistleri ve gestasyonel trofoblastik neoplazi / Koryokarsinom gelişme riski (%15-20) çok daha yüksektir! (Parsiyel molde ise 69,XXY triploidi vardır, fetüs parçaları bulunur ve p57 pozitiftir). Tedavide Vakum Küretaj yapılır ve sonrasında haftalık/aylık seri Beta-hCG takibi (bu süreçte gebe kalınmaması için KOK) uygulanır.',
        whenCorrectNote: 'Komplet mol = 46,XX (tümüyle paternal), fetüs yok, p57 negatif, kar fırtınası USG, vakum küretaj + seri Beta-hCG takibi.',
        firstVsGold: 'Komplet Mol: 46,XX (Paternal diploid), Fetüs YOK, p57 (-), Malignite riski yüksek • Parsiyel Mol: 69,XXY (Triploid), Fetüs VAR, p57 (+).',
        pearl: 'Komplet mol hidatidiform 46,XX (tümüyle paternal) karyotiplidir, fetüs dokusu içermez, p57 negatiftir ve Koryokarsinom gelişme riski çok daha yüksektir.',
        trueStatement: 'Komplet mol hidatidiform tümüyle paternal kökenli 46,XX karyotipe sahiptir, fetüs içermez ve vakum küretaj sonrası seri Beta-hCG ile takip edilir.',
        falseStatement: 'Komplet mol hidatidiformda 69,XXY triploid karyotip ve canlı fetüs izlenir; koryokarsinom gelişme riski sıfırdır.',
        falseHighlight: '69,XXY triploid karyotip ve canlı fetüs izlenir; koryokarsinom gelişme riski sıfırdır',
      },
    ],
  },
];
