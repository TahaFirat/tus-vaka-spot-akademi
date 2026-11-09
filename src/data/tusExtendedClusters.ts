import { DifferentialClusterSeed } from './tusTypes';

export const EXTENDED_TUS_CLUSTERS: DifferentialClusterSeed[] = [
  // 1. BİYOKİMYA EK KÜME: Vitaminler, Kofaktörler ve Eksiklik Sendromları
  {
    branchId: 'biyokimya',
    subTopic: 'Vitaminler, Koenzimler ve Klinik Eksiklik Tabloları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Tiamin (Vitamin B1 / TPP) — Wernicke-Korsakoff ve Pirüvat Dehidrogenaz',
        patientVignette:
          'Kronik alkol kullanım öyküsü olan 49 yaşında hastaya acil serviste doğrudan intravenöz dekstroz solüsyonu verildikten sonra akut konfüzyon, ataksi ve oftalmopleji/nistagmus gelişiyor. Eritrosit transketolaz aktivitesinin düşük olduğu saptanıyor.',
        clues: ['Kronik alkol', 'intravenöz dekstroz', 'konfüzyon, ataksi ve oftalmopleji', 'transketolaz'],
        questionPrompt: 'Pirüvat dehidrogenaz, alfa-ketoglutarat dehidrogenaz ve transketolazın kofaktörü olan bu vitamin hangisidir?',
        mechanism:
          'Tiamin pirofosfat (TPP); Pirüvat dehidrogenaz, Alfa-ketoglutarat dehidrogenaz, Dallı zincirli alfa-ketoasit dehidrogenaz ve Transketolaz enzimlerinin kofaktörüdür. Alkolik hastaya tiamin vermeden glukoz yüklemek Wernicke ensefalopatisini tetikler.',
        whenCorrectNote: 'Transketolaz ve alfa-ketoasit dehidrogenaz kofaktörü; eksikliğinde beriberi ve Wernicke-Korsakoff sendromu.',
        firstVsGold: 'Fonksiyonel Eksiklik Testi: Eritrosit Transketolaz aktivitesi • Acil Kural: Alkolik/malnütrisyonlu hastada glukozdan ÖNCE Tiamin verilir!',
        pearl: 'Tiamin (B1) eksikliği tanısında Eritrosit Transketolaz aktivitesine bakılır; Piridoksin (B6) eksikliğinde ise AST/ALT aktivitesi düşer.',
        trueStatement: 'Tiamin pirofosfat (B1); pirüvat dehidrogenaz, alfa-ketoglutarat dehidrogenaz ve transketolaz enzimlerinin kofaktörüdür.',
        falseStatement: 'Tiamin eksikliği tanısında eritrosit glutatyon redüktaz aktivitesi ölçülür ve eksikliğinde pellegra gelişir.',
        falseHighlight: 'eritrosit glutatyon redüktaz aktivitesi ölçülür ve eksikliğinde pellegra',
      },
      {
        entityName: 'Niasin (Vitamin B3 / NAD+ & NADP+) — Pellegra (3D) ve Hartnup Hastalığı',
        patientVignette:
          'Mısıra dayalı beslenen bir hastada güneş gören cilt bölgelerinde hiperpigmente deskuamatif dermatit (Casal gerdanlığı), kronik diyare ve demans (3D triyadı) saptanıyor.',
        clues: ['Casal gerdanlığı', 'kronik diyare ve demans (3D triyadı)'],
        questionPrompt: 'Triptofan aminoasidinden B2 ve B6 bağımlı olarak sentezlenebilen bu vitamin aşağıdakilerden hangisidir?',
        mechanism:
          'Niasin (B3), NAD+ ve NADP+ koenzimlerinin yapısına katılır. 60 mg triptofandan 1 mg niasin sentezlenir (kinüreninaz enzimi B6 bağımlıdır). Eksikliği Pellegra (Dermatit, Diyare, Demans) yapar; Hartnup hastalığı (triptofan emilim kusuru), Karsinoid sendrom ve İzoniazid kullanımı da pellegra nedenidir.',
        whenCorrectNote: 'Triptofandan sentezlenir, NAD/NADP yapısına katılır, eksikliğinde Pellegra (Dermatit, Diyare, Demans).',
        firstVsGold: 'Sekonder Pellegra Nedenleri: Hartnup hastalığı (nötral aminoasit transport kusuru), Мalign Karsinoid Sendrom, İzoniazid (B6 eksikliği üzerinden).',
        pearl: 'Hartnup hastalığında ve Karsinoid sendromda triptofan niasine dönüşemediği için Pellegra benzeri tablo gelişir.',
        trueStatement: 'Niasin (B3) triptofan aminoasidinden sentezlenir ve eksikliğinde dermatit, diyare, demans ile seyreden pellegra görülür.',
        falseStatement: 'Niasin metiyonin aminoasidinden sentezlenir ve karboksilasyon reaksiyonlarında kofaktör olarak görev yapar.',
        falseHighlight: 'metiyonin aminoasidinden sentezlenir ve karboksilasyon',
      },
      {
        entityName: 'Biyotin (Vitamin B7) — Karboksilaz Enzimleri ve Çiğ Yumurta Akı (Avidin)',
        patientVignette:
          'Uzun süre çiğ yumurta akı tüketen bir sporcuda alopesi (saç dökülmesi), seboreik dermatit, kas ağrıları ve laktik asidoz gelişiyor.',
        clues: ['çiğ yumurta akı', 'alopesi', 'laktik asidoz'],
        questionPrompt: 'Pirüvat karboksilaz, Asetil-KoA karboksilaz ve Propionil-KoA karboksilazın kofaktörü olan bu vitamin hangisidir?',
        mechanism:
          'Biyotin (B7), ATP-bağımlı karboksilasyon reaksiyonlarının (Pirüvat karboksilaz, Asetil-KoA karboksilaz, Propionil-KoA karboksilaz, Beta-metilkrotonil-KoA karboksilaz) kofaktörüdür. Çiğ yumurta akındaki "Avidin" glikoproteini biyotini bağlayarak emilimini engeller.',
        whenCorrectNote: 'Karboksilaz enzimlerinin kofaktörü (ABC kuralı: ATP, Biyotin, CO2); çiğ yumurta akındaki avidin ile bağlanır.',
        firstVsGold: 'Biyotin Bağımlı Karboksilazlar: Pirüvat karboksilaz, Asetil-KoA karboksilaz, Propionil-KoA karboksilaz • K Vitamini Bağımlı: Gama-glutamil karboksilaz.',
        pearl: 'Gama-glutamil karboksilaz K vitamini bağımlıdır; diğer tüm metabolik karboksilazlar (Pirüvat, Asetil-KoA, Propionil-KoA) Biyotin (B7) bağımlıdır!',
        trueStatement: 'Biyotin (B7) pirüvat karboksilaz ve asetil-KoA karboksilazın kofaktörüdür; çiğ yumurta akındaki avidin biyotin emilimini engeller.',
        falseStatement: 'Biyotin transaminasyon reaksiyonlarının kofaktörü olup pıhtılaşma faktörlerinin gama-karboksilasyonunu sağlar.',
        falseHighlight: 'transaminasyon reaksiyonlarının kofaktörü olup pıhtılaşma faktörlerinin',
      },
      {
        entityName: 'Kobalamin (Vitamin B12) — Metilmalonil-KoA Mutaz ve Subakut Kombine Dejenerasyon',
        patientVignette:
          'Total gastrektomi öyküsü olan 62 yaşında hastada makrositik anemi (MCV: 112 fL), hipersegmente nötrofiller, ekstremitelerde vibrasyon ve pozisyon duyusu kaybı (arka kordon tutulumu) ile idrarda metilmalonik asit artışı saptanıyor.',
        clues: ['Total gastrektomi', 'hipersegmente nötrofiller', 'vibrasyon ve pozisyon duyusu kaybı', 'metilmalonik asit artışı'],
        questionPrompt: 'Vücutta yalnızca Metiyonin Sentaz ve Metilmalonil-KoA Mutaz enzimlerinin kofaktörü olan bu vitamin hangisidir?',
        mechanism:
          'B12 vitamini (Kobalamin) pariyetal hücrelerden salgılanan İntrinsik Faktör ile terminal ileumdan (kübilin reseptörü) emilir. İnsanda sadece 2 reaksiyonda görev alır: 1. Homosistein -> Metiyonin (Metiyonin sentaz), 2. Metilmalonil-KoA -> Süksinil-KoA (Metilmalonil-KoA mutaz). Folat eksikliğinden farklı olarak Metilmalonik asit yükselir ve nöropati (subakut kombine dejenerasyon) yapar.',
        whenCorrectNote: 'Terminal ileumdan emilir, Metilmalonik asit artışı ve nörolojik bulgu (subakut kombine dejenerasyon) yapar.',
        firstVsGold: 'B12 vs. Folat Eksikliği: İkisinde de Homosistein yükselir ve Megaloblastik anemi olur; YALNIZ B12 eksikliğinde Metilmalonik Asit yükselir ve Nöropati görülür!',
        pearl: 'B12 eksikliğinde hem Homosistein hem Metilmalonik Asit yükselir; Folat eksikliğinde ise yalnız Homosistein yükselir, Metilmalonik asit normaldir!',
        trueStatement: 'B12 vitamini eksikliğinde folat eksikliğinden farklı olarak serum metilmalonik asit düzeyi yükselir ve subakut kombine dejenerasyon gelişir.',
        falseStatement: 'B12 vitamini duodenumdan emilir ve eksikliğinde nörolojik bulguların düzeltilmesi için tek başına folik asit verilmesi yeterlidir.',
        falseHighlight: 'duodenumdan emilir ve eksikliğinde nörolojik bulguların düzeltilmesi için tek başına folik asit',
      },
      {
        entityName: 'C Vitamini (Askorbik Asit) — Prolil/Lizil Hidroksilaz, Kollajen Sentezi ve Skorbüt',
        patientVignette:
          'Taze sebze ve meyve tüketmeyen yaşlı bir hastada diş eti kanamaları, kıl folikülü çevresinde perifoliküler peteşiler, tirbuşon kıllar ve yara iyileşmesinde gecikme saptanıyor. Kanama zamanı uzamış ancak trombosit sayısı ve PT/aPTT normal bulunuyor.',
        clues: ['diş eti kanamaları', 'perifoliküler peteşiler', 'tirbuşon kıllar', 'yara iyileşmesinde gecikme'],
        questionPrompt: 'Kollajen sentezinde prolin ve lizin hidroksilasyonunda demiri Fe+2 formunda tutan bu vitamin hangisidir?',
        mechanism:
          'C vitamini (Askorbik asit); Kollajen sentezinde Prolil ve Lizil hidroksilazın, katekolamin sentezinde Dopamin beta-hidroksilazın kofaktörüdür ve bağırsaktan non-hem demir emilimini artırır. Eksikliğinde damar duvarı kollajeni bozulur ve Skorbüt gelişir.',
        whenCorrectNote: 'Prolil/lizil hidroksilaz ve dopamin beta-hidroksilaz kofaktörü; eksikliğinde skorbüt (diş eti kanaması, perifoliküler hemoraji).',
        firstVsGold: 'Kollajen Hidroksilasyonu (Prolil/Lizil hidroksilaz): C vitamini • Kollajen Çapraz Bağlanması (Lizil oksidaz): Bakır (Cu).',
        pearl: 'Kollajen sentezinde Prolil ve Lizil Hidroksilaz C vitamini (Askorbat) bağımlıdır; Lizil Oksidaz ise Bakır (Cu) bağımlıdır!',
        trueStatement: 'C vitamini kollajen sentezinde prolil ve lizil hidroksilazların, katekolamin sentezinde ise dopamin beta-hidroksilazın kofaktörüdür.',
        falseStatement: 'C vitamini kollajen liflerinin hücre dışında çapraz bağlanmasını sağlayan lizil oksidaz enziminin tek kofaktörüdür.',
        falseHighlight: 'lizil oksidaz enziminin tek kofaktörüdür',
      },
    ],
  },
  // 2. MİKROBİYOLOJİ EK KÜME: Viroloji, Mikoloji ve Parazitoloji Klasikleri
  {
    branchId: 'mikrobiyoloji',
    subTopic: 'Fırsatçı Mikozlar, Viroloji ve Parazitoloji Tanı Anahtarları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Cryptococcus neoformans — Çini Mürekkebi, Polisakkarit Kapsül ve Fenol Oksidaz',
        patientVignette:
          'CD4+ T lenfosit sayısı 40/mm³ olan HIV pozitif hastada baş ağrısı, ense sertliği ve konfüzyon gelişiyor. BOS incelemesinde Çini mürekkebi (India ink) ve musikarmin boyamada geniş polisakkarit kapsüllü tomurcuklanan maya hücreleri gösteriliyor.',
        clues: ['HIV pozitif', 'Çini mürekkebi (India ink)', 'geniş polisakkarit kapsüllü', 'maya'],
        questionPrompt: 'Güvercin dışkısıyla bulaşan, üreaz ve fenol oksidaz (lakkaz) pozitif olan bu kapsüllü mantar hangisidir?',
        mechanism:
          'Cryptococcus neoformans dimorfik DEĞİLDİR; kapsüllü tek patojen mayadır. Güvercin dışkısından inhalasyonla bulaşır, AIDS hastalarında en sık fungal menenjit etkenidir. Tanıda BOS’ta Kriptokok antijeni (CrAg) ve Çini mürekkebi, tedavide Amfoterisin B + Flusitozin (idamede Flukonazol) kullanılır.',
        whenCorrectNote: 'Polisakkarit kapsüllü maya, Çini mürekkebi + Musikarmin boyası, üreaz ve fenol oksidaz pozitif, tedavide Amfoterisin B + Flusitozin.',
        firstVsGold: 'En Duyarlı/Hızlı Tanı: BOS veya serumda Lateks Aglütinasyon ile Kriptokok Kapsül Antijeni • Klasik Mikroskopi: Çini Mürekkebi (India ink).',
        pearl: 'Cryptococcus neoformans polisakkarit kapsüllü bir mayadır; Çini mürekkebi ile gösterilir, üreaz ve fenol oksidaz pozitiftir.',
        trueStatement: 'Cryptococcus neoformans polisakkarit kapsüllü bir maya olup BOS’ta çini mürekkebi ve lateks antijen testi ile tanı konur.',
        falseStatement: 'Cryptococcus neoformans 45 derecelik dar açıyla dallanan septalı hifler oluşturur ve tedavide ilk tercih kaspofungindir.',
        falseHighlight: '45 derecelik dar açıyla dallanan septalı hifler oluşturur ve tedavide ilk tercih kaspofungindir',
      },
      {
        entityName: 'Aspergillus fumigatus — 45 Derece Dar Açılı Septalı Hif ve Galaktomannan Antijeni',
        patientVignette:
          'Allojenik kök hücre nakli sonrası uzamış nötropenisi olan hastada ateş, hemoptizi, plöritik göğüs ağrısı ve toraks BT’de nodül çevresinde "Halo belirtisi" saptanıyor. Serumda Galaktomannan antijeni pozitif ve doku biyopsisinde 45 derecelik dar açıyla dikotom dallanan septalı hifler görülüyor.',
        clues: ['uzamış nötropeni', 'Halo belirtisi', 'Galaktomannan antijeni', '45 derecelik dar açıyla dikotom dallanan septalı hifler'],
        questionPrompt: 'İnvaziv pulmoner enfeksiyonunda ilk tercih tedavisi Vorikonazol olan bu küf mantarı hangisidir?',
        mechanism:
          'Aspergillus fumigatus monomorfik küf mantarıdır; 45° dar açıyla dallanan bölmeli (septalı) hifler yapar. Nötropenik hastada anjiyoinvaziv akciğer enfeksiyonu (BT’de erken dönemde Halo, geç dönemde Hava-Hilal belirtisi) yapar. İnvaziv aspergillozda ilk tercih ilaç Vorikonazoldür.',
        whenCorrectNote: '45° dar açılı septalı hif, Galaktomannan antijeni, BT’de Halo belirtisi ve ilk tercih Vorikonazol.',
        firstVsGold: 'Aspergillus: 45° dar açılı SEPTALI hif, ilk tercih Vorikonazol • Mukormikoz (Rhizopus/Mucor): 90° dik açılı SEPTASIZ (koenositik) hif, ilk tercih Lipozomal Amfoterisin B.',
        pearl: 'İnvaziv pulmoner aspergillozda serumda Galaktomannan antijeni pozitiftir ve tedavide İLK TERCİH ilaç Vorikonazoldür!',
        trueStatement: 'İnvaziv aspergillozda dokuda 45 derece açıyla dallanan septalı hifler, serumda galaktomannan pozitifliği görülür; ilk tercih vorikonazoldür.',
        falseStatement: 'Aspergillus fumigatus 90 derece açıyla dallanan septasız hifler oluşturur ve tedavisinde flukonazol ilk tercihtir.',
        falseHighlight: '90 derece açıyla dallanan septasız hifler oluşturur ve tedavisinde flukonazol',
      },
      {
        entityName: 'Parvovirus B19 — Tek İplikli DNA, Eritroid Progenitör (P Antijeni) ve Aplastik Kriz',
        patientVignette:
          'Orak hücreli anemi tanılı 9 yaşında çocukta ani gelişen derin anemi ve ağır retikülositopeni (%0.1) saptanıyor. Kemik iliği aspirasyonunda dev pronormoblastlar ("fener hücreleri") izleniyor.',
        clues: ['Orak hücreli anemi', 'ağır retikülositopeni', 'dev pronormoblastlar'],
        questionPrompt: 'Eritrosit öncüllerindeki P antijenine (globozid) bağlanarak geçici aplastik krize yol açan en küçük DNA virüsü hangisidir?',
        mechanism:
          'Parvovirus B19 zarfsız, ikozahedral ve TEK İPLİKLİ (ssDNA) tek insan patojeni DNA virüsüdür. P kan grubu antijeni (globozid) aracılığıyla eritroid öncülleri enfekte eder: Çocukta 5. hastalık (Eritema infeksiyozum - tokatlanmış yüz), erişkinde simetrik artrit, kronik hemolitik anemililerde Geçici Aplastik Kriz, fetüste ise Non-immün Hidrops Fetalis yapar.',
        whenCorrectNote: 'Tek iplikli zarfsız DNA virüsü, P antijeni (globozid) reseptörü, aplastik kriz, 5. hastalık ve hidrops fetalis.',
        firstVsGold: 'Çocukta Tokatlanmış Yüz: Parvovirus B19 (5. Hastalık) • Yüksek Ateş Düşünce Gövdede Başlayan Makülopapüler Döküntü: HHV-6 (6. Hastalık / Roseola infantum).',
        pearl: 'Parvovirus B19 tek iplikli DNA virüsüdür; P antijenine bağlanarak hemolitik anemili hastalarda Geçici Aplastik Kriz, fetüste Hidrops Fetalis yapar.',
        trueStatement: 'Parvovirus B19 tek iplikli DNA virüsü olup eritroid öncüllerdeki P antijenine bağlanarak hemolitik anemililerde aplastik krize yol açar.',
        falseStatement: 'Parvovirus B19 zarflı çift iplikli RNA virüsüdür ve B lenfositlerdeki CD21 reseptörüne bağlanarak Burkitt lenfoma yapar.',
        falseHighlight: 'zarflı çift iplikli RNA virüsüdür ve B lenfositlerdeki CD21',
      },
      {
        entityName: 'Entamoeba histolytica — Eritrosit Fagosite Etmiş Trofozoit ve Karaciğer Apsesi',
        patientVignette:
          'Kanlı-mukuslu diyare (amipli dizanteri) geçirdikten 3 hafta sonra sağ üst kadran ağrısı ve ateşle başvuran hastanın karaciğer sağ lobunda tek, büyük, "ançuez ezmesi" görünümünde apse saptanıyor. Taze dışkı incelemesinde sitoplazmasında fagosite edilmiş eritrositler bulunan hareketli trofozoitler görülüyor.',
        clues: ['kanlı-mukuslu diyare', 'karaciğer sağ lobunda', 'fagosite edilmiş eritrositler'],
        questionPrompt: 'Kolonda darboğazlı "matara (şişe) dibi" ülser yapan ve tedavisinde Metronidazol + Paromomisin kullanılan bu protozoon hangisidir?',
        mechanism:
          'Entamoeba histolytica 4 çekirdekli olgun kist ile fekal-oral bulaşır. Kolonda matara (flask-shaped) ülserler yapar; mikroskopide E. dispar’dan ayrımı trofozoit içinde FAGOSİTE EDİLMİŞ ERİTROSİT görülmesi veya adezin antijen testi iledir. Tedavide doku amubisidi (Metronidazol) ardından mutlaka lümen amubisidi (Paromomisin veya İyodokinol) verilir.',
        whenCorrectNote: 'Eritrosit fagosite etmiş trofozoit, 4 çekirdekli kist, matara dibi ülser, karaciğer apsesi, Metronidazol + Paromomisin.',
        firstVsGold: 'E. histolytica vs. E. dispar ayrımı: Sitoplazmada fagosite eritrosit varlığı veya Gal/GalNAc lektin antijen testi.',
        pearl: 'Entamoeba histolytica trofozoitinin sitoplazmasında FAGOSİTE EDİLMİŞ ERİTROSİT görülmesi patojenite için tanısaldır!',
        trueStatement: 'Entamoeba histolytica kolonda matara dibi ülserler yapar; dışkıda eritrosit fagosite etmiş trofozoitlerin görülmesi tanı koydurucudur.',
        falseStatement: 'Entamoeba histolytica karaciğer apsesinde ilk tercih tedavi hiçbir antiparaziter ilaç vermeden acil açık lobektomi yapılmasıdır.',
        falseHighlight: 'hiçbir antiparaziter ilaç vermeden acil açık lobektomi',
      },
      {
        entityName: 'Leishmania donovani / infantum (Kala-Azar) — Pansitopeni, Masif Splenomegali ve Lipozomal Amfoterisin B',
        patientVignette:
          'Tatarcık (Phlebotomus) sineği ısırığı öyküsü olan 5 yaşında çocukta aylardır süren ateş, kilo kaybı, masif hepatosplenomegali, pansitopeni ve poliklonal hipergammaglobulinemi saptanıyor. Kemik iliği yaymasında makrofajlar içinde kamçısız "amastigot (Leishman-Donovan cisimcikleri)" görülüyor.',
        clues: ['Phlebotomus', 'masif hepatosplenomegali, pansitopeni', 'poliklonal hipergammaglobulinemi', 'amastigot'],
        questionPrompt: 'NNN besiyerinde kamçılı promastigot formunda üreyen bu visseral leishmaniasis tablosunda ilk tercih tedavi hangisidir?',
        mechanism:
          'Visseral Leishmaniasis (Kala-Azar), Phlebotomus vektörüyle promastigot olarak bulaşır, insanda makrofaj içinde kamçısız AMASTİGOT formunda çoğalır. Masif splenomegali + pansitopeni + hipergammaglobulinemi yapar. Tedavide günümüzde en etkili ve ilk tercih ilaç Lipozomal Amfoterisin B’dir.',
        whenCorrectNote: 'Tatarcık (Phlebotomus), makrofaj içinde amastigot, kültürde (NNN) promastigot, masif splenomegali + pansitopeni, Lipozomal Amfoterisin B.',
        firstVsGold: 'İnsan Dokusunda (Kemik iliği/Dalak): Kamçısız Amastigot • Vektör ve NNN Besiyerinde: Kamçılı Promastigot • Tedavi: Lipozomal Amfoterisin B.',
        pearl: 'Leishmania insan makrofajlarında kamçısız AMASTİGOT, vektör tatarcıkta ve NNN besiyerinde ise kamçılı PROMASTİGOT formunda bulunur.',
        trueStatement: 'Visseral leishmaniasiste (Kala-Azar) kemik iliği makrofajları içinde amastigot formları görülür ve tedavisinde lipozomal amfoterisin B ilk tercihtir.',
        falseStatement: 'Leishmania etkenleri insan kanında hücre dışında serbest tripomastigot formunda çoğalır ve makrolidlerle tedavi edilir.',
        falseHighlight: 'hücre dışında serbest tripomastigot formunda çoğalır ve makrolidlerle',
      },
    ],
  },
  // 3. PATOLOJİ EK KÜME: Nefropatiler, Kemik ve SSS Tümörleri
  {
    branchId: 'patoloji',
    subTopic: 'Böbrek, Kemik ve Merkezi Sinir Sistemi Patolojisi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Hızlı İlerleyen Glomerülonefrit (RPGN) — Yarımay (Kresent) Oluşumu ve Pariyetal Epitel Proliferasyonu',
        patientVignette:
          'Hemoptizi ve akut böbrek yetmezliği (Goodpasture sendromu) ile başvuran hastanın böbrek biyopsisinde Bowman boşluğunu dolduran "yarımay (kresent)" yapıları ve immünfloresanda bazal membran boyunca lineer IgG birikimi saptanıyor.',
        clues: ['Goodpasture sendromu', 'yarımay (kresent)', 'lineer IgG birikimi'],
        questionPrompt: 'RPGN’de Bowman boşluğundaki yarımay (kresent) yapısını oluşturan temel hücre ve plazma proteini hangisidir?',
        mechanism:
          'RPGN histopatolojik olarak glomerüllerde KRESENT (Yarımay) oluşumu ile karakterizedir. Kresenti oluşturan yapılar: Bowman kapsülünün PARİYETAL EPİTEL hücrelerinin proliferasyonu, göç eden monosit/makrofajlar ve Bowman boşluğuna sızan FİBRİN’dir. Tip 1 (Goodpasture): Anti-GBM (Tip IV kollajen alfa-3 zinciri) ve Lineer IgG birikimi.',
        whenCorrectNote: 'Kresent = Pariyetal epitel proliferasyonu + Makrofaj + Fibrin; Goodpasture = Tip IV kollajen alfa-3 antikorları ve lineer IgG.',
        firstVsGold: 'Tip 1 RPGN (Goodpasture): Lineer IgG • Tip 2 RPGN (Poststreptokokal/Lupus): Granüler birikim • Tip 3 RPGN (GPA/MPA - ANCA+): Pauci-immün (birikim yok!).',
        pearl: 'RPGN’deki kresent (yarımay) yapısını Bowman kapsülünün PARİYETAL epitel hücreleri, makrofajlar ve FİBRİN oluşturur!',
        trueStatement: 'Hızlı ilerleyen glomerülonefritte (RPGN) kresent yapısını Bowman kapsülünün pariyetal epitel hücreleri, makrofajlar ve fibrin oluşturur.',
        falseStatement: 'Goodpasture sendromunda glomerül bazal membranında kaba granüler IgA birikimi izlenir ve tip I kollajen hedef alınır.',
        falseHighlight: 'kaba granüler IgA birikimi izlenir ve tip I kollajen',
      },
      {
        entityName: 'Ewing Sarkomu — Diyafiz Yerleşimi, t(11;22), CD99 Pozitifliği ve Soğan Zarı Periost Reaksiyonu',
        patientVignette:
          '13 yaşında erkek çocukta femur diyafizinde ağrılı şişlik, ateş, sedimantasyon yüksekliği ve radyografide kemik korteksinde "soğan zarı (onion-skin)" şeklinde katmanlı periost reaksiyonu saptanıyor. Biyopside PAS pozitif glikojen içeren küçük yuvarlak mavi hücreler ve t(11;22) translokasyonu gösteriliyor.',
        clues: ['femur diyafizinde', 'soğan zarı (onion-skin)', 't(11;22)'],
        questionPrompt: 'Osteomyelit ile karışabilen, MIC2 (CD99) pozitif bu malign kemik tümörü aşağıdakilerden hangisidir?',
        mechanism:
          'Ewing sarkomu kemiklerin DİYAFİZ (veya metadiyafiz) bölgesine yerleşir (Osteosarkom metafize, Dev hücreli kemik tümörü ise epifize yerleşir!). EWS-FLI1 füzyonu oluşturan t(11;22) translokasyonu, CD99 (MIC2) pozitifliği, Homer-Wright rozetleri ve soğan zarı periost reaksiyonu tipiktir.',
        whenCorrectNote: 'Diyafiz yerleşimi, t(11;22), CD99+, soğan zarı periost reaksiyonu, küçük yuvarlak mavi hücreli tümör.',
        firstVsGold: 'Osteosarkom: Metafiz, Codman üçgeni / Güneş ışını • Ewing Sarkomu: Diyafiz, Soğan zarı periost reaksiyonu, t(11;22) • Dev Hücreli Tümör: Epifiz.',
        pearl: 'Kemikte Metafiz = Osteosarkom (Codman üçgeni); Diyafiz = Ewing Sarkomu (Soğan zarı, t(11;22)); Epifiz = Dev Hücreli Tümör ve Kondroblastom.',
        trueStatement: 'Ewing sarkomu uzun kemiklerin diyafizine yerleşir, t(11;22) translokasyonu taşır ve radyolojide soğan zarı periost reaksiyonu yapar.',
        falseStatement: 'Ewing sarkomu yalnızca erişkinlerde epifiz plağına yerleşir ve RB ile p53 mutasyonlarıyla karakterizedir.',
        falseHighlight: 'yalnızca erişkinlerde epifiz plağına yerleşir',
      },
      {
        entityName: 'Oligodendrogliom — Sahanda Yumurta (Fried-Egg) Görünümü, Kalsifikasyon ve 1p/19q Kodelesyonu',
        patientVignette:
          '42 yaşında erkek hasta ilk kez geçirdiği epileptik nöbet ile başvuruyor. Beyin BT ve MR’da frontal lob beyaz cevherde kalsifikasyon içeren kitle, biyopside "sahanda yumurta (fried-egg)" görünümünde berrak perinükleer halolu hücreler, kümes teli kapiller ağ ve 1p/19q kodelesyonu saptanıyor.',
        clues: ['frontal lob', 'kalsifikasyon', 'sahanda yumurta (fried-egg)', '1p/19q kodelesyonu'],
        questionPrompt: 'Gliomlar içinde kemoterapi/radyoterapi yanıtı ve prognozu en iyi olan bu tümör aşağıdakilerden hangisidir?',
        mechanism:
          'Oligodendrogliom en sık 40-50 yaşta frontal lobda görülür; kalsifikasyon en sık görülen gliomdur. Histolojide "sahanda yumurta (fried-egg)" hücreleri ve anastomoz yapan kapiller ağ izlenir. IDH1/2 mutasyonu ve 1p/19q kodelesyonu iyi prognoz göstergesidir.',
        whenCorrectNote: 'Frontal lob + kalsifikasyon + sahanda yumurta hücreleri + 1p/19q kodelesyonu + iyi prognoz.',
        firstVsGold: 'Pilositik Astrositom (DSÖ Derece 1): Çocukta serebellum, Rosenthal lifleri, BRAF mutasyonu • Oligodendrogliom: Sahanda yumurta, 1p/19q • Glioblastom: Sözde palizatlaşan nekroz.',
        pearl: 'Sahanda yumurta (fried-egg) hücreleri, kalsifikasyon ve 1p/19q kodelesyonu = Oligodendrogliom; Rosenthal lifleri = Pilositik Astrositom.',
        trueStatement: 'Oligodendrogliomda kalsifikasyon, histolojide sahanda yumurta görünümü ve genetikte 1p/19q kodelesyonu karakteristik bulgulardır.',
        falseStatement: 'Oligodendrogliom çocuklarda dördüncü ventrikülden kaynaklanır ve Homer-Wright rozetleri ile karakterizedir.',
        falseHighlight: 'çocuklarda dördüncü ventrikülden kaynaklanır ve Homer-Wright rozetleri',
      },
      {
        entityName: 'Crohn Hastalığı vs. Ülseratif Kolit — Transmural Tutulum, Non-Kazeifiye Granülom ve Atlamalı Lezyon',
        patientVignette:
          '26 yaşında hastada sağ alt kadran ağrısı, kronik ishal, perianal fistül ve kolonoskopide rektumun korunduğu, terminal ileum ve çekumda "kaldırım taşı (cobblestone)" görünümü ile atlamalı (skip) ülserler saptanıyor. Biyopside transmural inflamasyon ve kazeifikasyon içermeyen granülomlar izleniyor.',
        clues: ['perianal fistül', 'rektumun korunduğu', 'kaldırım taşı (cobblestone)', 'transmural inflamasyon ve kazeifikasyon içermeyen granülomlar'],
        questionPrompt: 'Ağızdan anüse tüm GİS’i tutabilen ve en sık terminal ileuma yerleşen bu inflamatuvar bağırsak hastalığı hangisidir?',
        mechanism:
          'Crohn hastalığı ağızdan anüse tüm GİS’i atlamalı (skip lesions) tutar, en sık terminal ileumu tutar, rektumu genellikle korur. Tutulum TRANSMURALDİR (striktür, fissür, fistül yapar) ve non-kazeifiye granülomlar ile sarmaşık yağlanma (creeping fat) görülür. Ülseratif kolit ise yalnız kolon/rektumu kesintisiz (mukoza + submukoza) tutar, kript apseleri ve psödopolipler yapar.',
        whenCorrectNote: 'Terminal ileum, atlamalı tutulum, transmural inflamasyon, fistül/striktür, non-kazeifiye granülom, ASCA pozitifliği.',
        firstVsGold: 'Crohn: Transmural, granülom+, fistül+, ASCA+, sigara riski artırır • Ülseratif Kolit: Mukoza/Submukoza, rektumdan başlar kesintisiz, kript apsesi, p-ANCA+, Primer sklerozan kolanjit.',
        pearl: 'Crohn hastalığında tutulum TRANSMURALDİR (fistül, striktür ve non-kazeifiye granülom yapar); Ülseratif kolitte ise mukoza/submukoza ile sınırlıdır.',
        trueStatement: 'Crohn hastalığında transmural inflamasyon, atlamalı tutulum, kaldırım taşı görünümü, fistül gelişimi ve non-kazeifiye granülomlar izlenir.',
        falseStatement: 'Crohn hastalığı her zaman rektumdan başlayarak yalnız mukozayı kesintisiz tutar ve asla fistül oluşturmaz.',
        falseHighlight: 'her zaman rektumdan başlayarak yalnız mukozayı kesintisiz tutar ve asla fistül oluşturmaz',
      },
      {
        entityName: 'Nöroblastom — N-MYC Amplifikasyonu, Homer-Wright Rozetleri ve İdrarda VMA/HVA Artışı',
        patientVignette:
          '18 aylık bebekte batında orta hattı geçen düzensiz konturlu retroperitoneal kitle, göz çevresinde ekimoz (rakun gözü) ve opsoklonus-miyoklonus sendromu saptanıyor. 24 saatlik idrarda vanilmandelik asit (VMA) ve homovanilik asit (HVA) düzeyleri belirgin yüksek bulunuyor.',
        clues: ['orta hattı geçen', 'opsoklonus-miyoklonus', 'vanilmandelik asit (VMA) ve homovanilik asit (HVA)'],
        questionPrompt: 'En sık adrenal medulladan kaynaklanan ve kötü prognozu N-MYC amplifikasyonu ile belirlenen bu tümör hangisidir?',
        mechanism:
          'Nöroblastom bebeklik çağının (1 yaş altı) en sık ekstrakranial solid tümörüdür. Nöral krest (adrenal medulla / sempatik zincir) kökenlidir; batında orta hattı geçer (Wilms tümörü genellikle orta hattı geçmez), kalsifikasyon içerir, Homer-Wright psödorozetleri yapar ve idrarda VMA/HVA yükselir. En önemli kötü prognoz kriteri N-MYC gen amplifikasyonudur; 1 yaş altı (Evre 4S) olgularda ise spontan regresyon (ganglionöroma dönüşüm) görülebilir.',
        whenCorrectNote: 'Adrenal medulla kökenli, orta hattı geçen batın kitlesi, VMA/HVA artışı, Homer-Wright rozetleri, N-MYC kötü prognoz.',
        firstVsGold: 'Nöroblastom: Orta hattı geçer, kalsifikasyon sık, VMA/HVA yüksek, N-MYC • Wilms Tümörü (Nefroblastom): Orta hattı geçmez, hematüri/HT, WT1 mutasyonu (WAGR sendromu).',
        pearl: 'Nöroblastomda en önemli kötü prognoz göstergesi N-MYC amplifikasyonudur; 1 yaş altı olması ve TrkA ekspresyonu ise iyi prognoz göstergesidir.',
        trueStatement: 'Nöroblastomda idrarda VMA ve HVA düzeyleri yükselir, histolojide Homer-Wright rozetleri görülür ve N-MYC amplifikasyonu kötü prognoz göstergesidir.',
        falseStatement: 'Nöroblastom böbrek tübül epitelinden kaynaklanır, orta hattı asla geçmez ve N-MYC amplifikasyonu mükemmel prognoz gösterir.',
        falseHighlight: 'böbrek tübül epitelinden kaynaklanır, orta hattı asla geçmez ve N-MYC amplifikasyonu mükemmel prognoz',
      },
    ],
  },
  // 4. FARMAKOLOJİ EK KÜME: Antihipertansifler, Antiaritmikler, Antibiyotikler ve Kemoterapötikler
  {
    branchId: 'farmakoloji',
    subTopic: 'Kardiyovasküler Farmakoloji, Antibiyotikler ve Kemoterapötik Yan Etkiler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'ACE İnhibitörleri (Enalapril / Lisinopril) — Kuru Öksürük, Anjiyoödem ve Bilateral Renal Arter Stenozu',
        patientVignette:
          'Diyabetik nefropatisi ve hipertansiyonu olan 56 yaşında hastaya proteinüriyi azaltmak amacıyla başlanan antihipertansif ilaç sonrasında inatçı kuru öksürük ve hiperkalemi gelişiyor.',
        clues: ['Diyabetik nefropati', 'proteinüriyi azaltmak', 'inatçı kuru öksürük ve hiperkalemi'],
        questionPrompt: 'Bradikinin yıkımını engelleyerek kuru öksürük ve anjiyoödem yapan, gebelikte ve bilateral renal arter stenozunda kontrendike olan ilaç grubu hangisidir?',
        mechanism:
          'ACE inhibitörleri Anjiyotensin I’in Anjiyotensin II’ye dönüşümünü ve aynı zamanda Bradikinin ile P maddesinin yıkımını inhibe eder. Efferent arteriyolü dilate ederek intraglomerüler basıncı ve proteinüriyi azaltır (diyabetik nefropatide ilk tercih!). Bradikinin artışına bağlı kuru öksürük ve anjiyoödem yapar. Bilateral renal arter stenozunda (GFR’yi akut düşürür) ve gebelikte (teratojen) kesin kontrendikedir.',
        whenCorrectNote: 'Bradikinin artışına bağlı kuru öksürük + anjiyoödem, hiperkalemi, diyabetik nefropatide koruyucu, gebelik ve bilateral RAS’ta kontrendike.',
        firstVsGold: 'ACE İnhibitörüyle Kuru Öksürük Gelişirse Geçilecek İlaç: ARB (Losartan/Valsartan - Bradikinini artırmaz) • Aliskiren: Direkt Renin İnhibitörü.',
        pearl: 'ACE inhibitörleri bradikinin yıkımını engellediği için kuru öksürük ve anjiyoödem yapar; gebelik ve bilateral renal arter stenozunda kontrendikedir!',
        trueStatement: 'ACE inhibitörleri bradikinin yıkımını engelleyerek kuru öksürük ve anjiyoödem yapabilir; gebelikte ve bilateral renal arter stenozunda kontrendikedir.',
        falseStatement: 'ACE inhibitörleri efferent arteriyolü kasar, hipokalemi yapar ve gebelik hipertansiyonunda ilk tercih ilaçlardır.',
        falseHighlight: 'efferent arteriyolü kasar, hipokalemi yapar ve gebelik hipertansiyonunda ilk tercih',
      },
      {
        entityName: 'Amiodaron — Sınıf III Antiaritmik, Pulmoner Fibrozis, Tiroid Bozukluğu ve Torsades Yapmama',
        patientVignette:
          'Ventriküler taşikardi nedeniyle uzun süreli antiaritmik tedavi alan 65 yaşında hastada dispne (pulmoner fibrozis), korneada mikrodepozitler, ciltte mavi-gri renk değişikliği ve tiroid fonksiyon testlerinde bozulma saptanıyor.',
        clues: ['pulmoner fibrozis', 'korneada mikrodepozitler', 'mavi-gri renk değişikliği', 'tiroid fonksiyon testlerinde bozulma'],
        questionPrompt: 'Yarı ömrü çok uzun olan, QT mesafesini uzatmasına rağmen Torsades de Pointes riski en düşük olan bu Sınıf III antiaritmik hangisidir?',
        mechanism:
          'Amiodaron hem Sınıf I, II, III hem de IV özellik taşıyan geniş spektrumlu bir Sınıf III antiaritmiktir. Yapıca tiroksine benzer (iyot içerir); hem hipotiroidi (Wolff-Chaikoff) hem hipertiroidi (Jod-Basedow) yapar. Pulmoner fibrozis, hepatotoksisite, korneal birikim ve mavi-gri cilt yapar. QT’yi uzatmasına rağmen Torsades de Pointes riski ÇOK DÜŞÜKTÜR (Sotalol, İbutilid ve Kinidin ise Torsades yapar).',
        whenCorrectNote: 'Sınıf III antiaritmik, yarı ömrü en uzun, pulmoner fibrozis + hipo/hipertiroidi + korneal depozit, Torsades riski çok düşük.',
        firstVsGold: 'En Kısa Etkili Antiaritmik: Adenozin (SVT’de ilk tercih, t1/2 <10 sn) • En Uzun Yarı Ömürlü Antiaritmik: Amiodaron (haftalar/aylar).',
        pearl: 'Amiodaron QT mesafesini uzatmasına rağmen Torsades de Pointes riski en düşük olan antiaritmiktir; pulmoner fibrozis ve tiroid bozukluğu yapar.',
        trueStatement: 'Amiodaron yarı ömrü çok uzun olan bir Sınıf III antiaritmik olup pulmoner fibrozis ve tiroid fonksiyon bozukluğuna yol açabilir.',
        falseStatement: 'Amiodaron yarı ömrü 5 saniye olan bir ilaçtır ve yalnız supraventriküler taşikardide kullanılır.',
        falseHighlight: 'yarı ömrü 5 saniye olan bir ilaçtır',
      },
      {
        entityName: 'Vankomisin vs. Linezolid/Daptomisin — D-Ala-D-Ala Bağlanması, Kızarık Boyun Sendromu ve Pnömonide Sürfaktan İnhibisyonu',
        patientVignette:
          'MRSA (Metisiline Dirençli S. aureus) bakteriyemisi nedeniyle hızlı intravenöz antibiyotik infüzyonu yapılan hastada histamin salınımına bağlı yüzde-boyunda kızarıklık ve hipotansiyon ("Red Man / Kızarık Boyun Sendromu") gelişiyor.',
        clues: ['MRSA', 'histamin salınımına bağlı', 'Red Man / Kızarık Boyun Sendromu'],
        questionPrompt: 'Peptidoglikan öncüllerindeki D-Alanil-D-Alanin ucuna bağlanarak hücre duvarı sentezini inhibe eden bu glikopeptid antibiyotik hangisidir?',
        mechanism:
          'Vankomisin (ve daha uzun etkili Teikoplanin) peptidoglikan zincirindeki D-Ala-D-Ala ucuna bağlanarak transglikozilasyonu engeller (VRE direncinde bu uç D-Ala-D-Laktat’a dönüşür). Hızlı infüzyonda IgE’den bağımsız direkt mast hücresi degranülasyonu ile "Red Man Sendromu" yapar. Daptomisin ise MRSA’da etkilidir ancak akciğer sürfaktanı tarafından inaktive edildiği için PNÖMONİDE KULLANILMAZ!',
        whenCorrectNote: 'Vankomisin = D-Ala-D-Ala bağlanması, Red Man sendromu (histamin degranülasyonu), nefrotoksisite/ototoksisite.',
        firstVsGold: 'MRSA Pnömonisinde Kullanılmayan İlaç: Daptomisin (Sürfaktan ile inaktive olur, miyopati/CPK artışı yapar) • 50S 23S rRNA İnhibitörü (VRE/MRSA): Linezolid (MAO inhibisyonu + trombositopeni).',
        pearl: 'Daptomisin akciğer sürfaktanı tarafından parçalandığı için PNÖMONİ tedavisinde kesinlikle kullanılmaz!',
        trueStatement: 'Vankomisin D-Ala-D-Ala ucuna bağlanarak hücre duvarı sentezini inhibe eder; daptomisin ise sürfaktanla inaktive olduğundan pnömonide kullanılmaz.',
        falseStatement: 'Daptomisin MRSA pnömonisinde ilk tercih ilaç olup 30S ribozomal alt birime bağlanarak protein sentezini durdurur.',
        falseHighlight: 'MRSA pnömonisinde ilk tercih ilaç olup 30S ribozomal',
      },
      {
        entityName: 'Doksorubisin (Adriamisin) & Siklofosfamid — Kardiyotoksisite (Deksrazoksan) ve Hemorajik Sistit (Mesna)',
        patientVignette:
          'Meme kanseri ve lenfoma kemoterapisi alan iki hastadan birincisinde serbest radikal artışına bağlı doz bağımlı dilate kardiyomiyopati, ikincisinde ise akrolein metabolitine bağlı steril hemorajik sistit gelişiyor.',
        clues: ['dilate kardiyomiyopati', 'akrolein metabolitine bağlı', 'hemorajik sistit'],
        questionPrompt: 'Doksorubisin kardiyotoksisitesini ve Siklofosfamid/İfosfamid hemorajik sistitini önleyen koruyucu ajanlar sırasıyla hangisidir?',
        mechanism:
          '1. Doksorubisin (Antrasiklin): Topoizomeraz II’yi inhibe eder ve demir aracılı serbest oksijen radikalleri oluşturarak irreversibl Dilate Kardiyomiyopati yapar; koruyucu antidotu demir şelatörü DEKSRAZOKSAN’dır.\n2. Siklofosfamid / İfosfamid: Alkilleyici ajanlardır; toksik metabolitleri olan AKROLEİN mesanede Hemorajik Sistit yapar; koruyucu antidotu sülfhidril grubu içeren MESNA’dır.',
        whenCorrectNote: 'Doksorubisin -> Kardiyotoksisite (Antidot: Deksrazoksan); Siklofosfamid -> Akrolein / Hemorajik sistit (Antidot: Mesna).',
        firstVsGold: 'Bleomisin: Pulmoner fibrozis (G2 fazına özgü) • Sisplatin: Nefrotoksisite & Ototoksisite (Antidot: Amifostin) • Vinkristin: Periferik nöropati.',
        pearl: 'Doksorubisin kardiyotoksisitesini önlemek için Deksrazoksan; Siklofosfamidin akroleine bağlı hemorajik sistitini önlemek için Mesna kullanılır.',
        trueStatement: 'Doksorubisine bağlı kardiyotoksisiteyi önlemede deksrazoksan, siklofosfamide bağlı hemorajik sistiti önlemede ise mesna kullanılır.',
        falseStatement: 'Siklofosfamidin hemorajik sistit yan etkisini önlemek için atropin, doksorubisin kardiyotoksisitesi için ise lökovorin verilir.',
        falseHighlight: 'atropin, doksorubisin kardiyotoksisitesi için ise lökovorin',
      },
      {
        entityName: 'Lityum — Bipolar Bozukluk, Ebstein Anomalisi ve Nefrojenik Diyabetes İnsipidus',
        patientVignette:
          'Bipolar bozukluk nedeniyle profilaktik duygudurum dengeleyici kullanan 34 yaşında kadın hastada ince tremor, poliüri-polidipsi (nefrojenik diyabetes insipidus), hipotiroidi ve lökositoz saptanıyor. Tiazid diüretik eklendiğinde ilaç düzeyi toksik sınıra çıkıyor.',
        clues: ['Bipolar bozukluk', 'ince tremor', 'nefrojenik diyabetes insipidus', 'hipotiroidi'],
        questionPrompt: 'Gebelikte kullanıldığında fetüste Ebstein anomalisine (triküspit kapak malformasyonu) yol açan bu ilaç hangisidir?',
        mechanism:
          'Lityum inozitol monofosfatazı ve GSK-3’ü inhibe eder. Terapötik indeksi çok dardır; böbrekten sodyum gibi emilir. Hiponatremi, dehidratasyon, Tiazid diüretikler, ACE inhibitörleri ve NSAİİ’ler (Aspirin hariç) lityum klirensini azaltarak LİTYUM TOKSİSİTESİ yapar! Yan etkileri: Tremor, Nefrojenik Dİ (tedavisi Amilorid!), Hipotiroidi, Lökositoz ve gebelikte Ebstein anomalisidir.',
        whenCorrectNote: 'Bipolar profilaksisi, dar terapötik aralık, nefrojenik Dİ (tedavisi amilorid), hipotiroidi, tiazidle toksisite artışı, Ebstein anomalisi.',
        firstVsGold: 'Lityuma Bağlı Nefrojenik Dİ Tedavisi: Amilorid (Toplayıcı kanal ENaC kanallarından lityum girişini bloke eder) • Valproik Asit Teratojenitesi: Nöral tüp defekti (Spina bifida).',
        pearl: 'Tiazidler, ACE inhibitörleri ve NSAİİ’ler lityum düzeyini artırarak toksisiteye yol açar; lityuma bağlı nefrojenik Dİ tedavisinde Amilorid kullanılır.',
        trueStatement: 'Lityum nefrojenik diyabetes insipidus, hipotiroidi, tremor ve gebelikte kullanıldığında fetüste Ebstein anomalisine neden olabilir.',
        falseStatement: 'Lityum karaciğerde CYP3A4 ile metabolize edilir ve tiazid diüretiklerle birlikte kullanıldığında kan düzeyi hızla sıfırlanır.',
        falseHighlight: 'karaciğerde CYP3A4 ile metabolize edilir ve tiazid diüretiklerle birlikte kullanıldığında kan düzeyi hızla sıfırlanır',
      },
    ],
  },
];
