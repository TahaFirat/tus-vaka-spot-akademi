import { DifferentialClusterSeed } from './tusTypes';

export const TTBT_CLUSTERS: DifferentialClusterSeed[] = [
  // =========================================================================
  // 1. TIBBİ BİYOKİMYA
  // =========================================================================
  {
    branchId: 'biyokimya',
    subTopic: 'Lizozomal Depo Hastalıkları (Sfingolipidozlar)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Gaucher Hastalığı (Beta-Glukoserebrozidaz eksikliği)',
        patientVignette:
          '32 yaşında erkek hasta masif splenomegali, trombositopeni ve femur distalinde "Erlenmeyer şişesi" deformitesi ile başvuruyor. Kemik iliği aspirasyonunda buruşuk kağıt (crinkled paper) görünümlü sitoplazmaya sahip makrofajlar saptanıyor.',
        clues: ['masif splenomegali', 'Erlenmeyer şişesi deformitesi', 'buruşuk kağıt (crinkled paper)'],
        questionPrompt: 'Bu hastada en olası tanı ve eksik olan lizozomal enzim aşağıdakilerden hangisidir?',
        mechanism:
          'Beta-glukoserebrozidaz (glukozilseramidaz) eksikliğinde retiküloendotelyal sistem makrofajlarında glukoserebrozid birikir. En sık görülen lizozomal depo hastalığıdır; Tip 1 formunda nöropati görülmez.',
        whenCorrectNote: 'Buruşuk kağıt görünümlü Gaucher hücresi, masif splenomegali, Erlenmeyer femur deformitesi ve nöropatisiz erişkin klinik.',
        firstVsGold: 'Tarama: Kemik iliğinde Gaucher hücresi / Chitotriosidaz artışı • Kesin Tanı: Lökositlerde Beta-glukoserebrozidaz enzim aktivitesi tayini.',
        pearl: 'En sık lizozomal depo hastalığı Gaucher’dir; kemik iliğinde buruşuk kağıt görünümlü makrofajlar patognomoniktir.',
        trueStatement: 'Gaucher hastalığı beta-glukoserebrozidaz eksikliği sonucu gelişir ve kemik iliğinde buruşuk kağıt görünümlü makrofajlar izlenir.',
        falseStatement: 'Gaucher hastalığında eksik olan enzim sfingomiyelinaz olup makulada kiraz kırmızısı leke en tipik bulgudur.',
        falseHighlight: 'sfingomiyelinaz olup makulada kiraz kırmızısı leke',
      },
      {
        entityName: 'Niemann-Pick Hastalığı (Sfingomiyelinaz eksikliği)',
        patientVignette:
          '8 aylık bebek ağır hepatosplenomegali, gelişme geriliği ve nöromotor gerileme ile getiriliyor. Göz dibi muayenesinde makulada "kiraz kırmızısı leke (cherry-red spot)" ve kemik iliğinde köpük (foam) hücreleri ile zebra cisimcikleri saptanıyor.',
        clues: ['hepatosplenomegali', 'kiraz kırmızısı leke (cherry-red spot)', 'köpük (foam) hücreleri'],
        questionPrompt: 'Bu bebekte en olası tanı ve eksik olan enzim aşağıdakilerden hangisidir?',
        mechanism:
          'Sfingomiyelinaz eksikliğinde dokularda sfingomiyelin birikir. Hem hepatosplenomegali hem de makulada kiraz kırmızısı leke (cherry-red spot) birlikteliği Tay-Sachs’tan ayıran en kritik klinik anahtardır.',
        whenCorrectNote: 'Hepatosplenomegali + makulada kiraz kırmızısı leke + köpüksü (lipid yüklü) makrofajlar.',
        firstVsGold: 'Tay-Sachs ile Ayırıcı Tanı: Niemann-Pick’te hepatosplenomegali VARKEN, Tay-Sachs’ta hepatosplenomegali YOKTUR.',
        pearl: 'Kiraz kırmızısı makula + Hepatosplenomegali = Niemann-Pick (Sfingomiyelinaz eksikliği).',
        trueStatement: 'Niemann-Pick hastalığında sfingomiyelinaz eksikliğine bağlı olarak hem hepatosplenomegali hem de makulada kiraz kırmızısı leke görülür.',
        falseStatement: 'Niemann-Pick hastalığında organomegali kesinlikle görülmez ve heksozaminidaz A enzimi eksiktir.',
        falseHighlight: 'organomegali kesinlikle görülmez ve heksozaminidaz A',
      },
      {
        entityName: 'Tay-Sachs Hastalığı (Heksozaminidaz A eksikliği)',
        patientVignette:
          '6 aylık bebek sese karşı aşırı irkilme (hiperakuzi), hipotoni, makrosefali ve motor becerilerde kayıp ile getiriliyor. Fizik muayenede karaciğer ve dalak normal boyutta olup fundoskopide makulada kiraz kırmızısı leke ve EM’de soğan zarı cisimcikleri izleniyor.',
        clues: ['hiperakuzi', 'karaciğer ve dalak normal boyutta', 'kiraz kırmızısı leke', 'soğan zarı cisimcikleri'],
        questionPrompt: 'Bu hastada en olası tanı ve eksik enzim aşağıdakilerden hangisidir?',
        mechanism:
          'Heksozaminidaz A eksikliği sonucu nöronlarda GM2 gangliozid birikir. Niemann-Pick’ten farklı olarak hepatosplenomegali YOKTUR; hiperakuzi ve soğan zarı (onion-skin) lizozomlar tipiktir.',
        whenCorrectNote: 'Hepatosplenomegali OLMADAN makulada kiraz kırmızısı leke, hiperakuzi ve GM2 gangliozid birikimi.',
        firstVsGold: 'İlk İpucu: Organomegali yok + Cherry-red spot • Kesin Tanı: Heksozaminidaz A aktivitesi ve HEXA gen analizi.',
        pearl: 'Kiraz kırmızısı leke VARKEN hepatosplenomegali YOKSA tanı Tay-Sachs hastalığıdır (GM2 gangliozid birikimi).',
        trueStatement: 'Tay-Sachs hastalığında heksozaminidaz A eksikliğine bağlı GM2 gangliozid birikir ve hepatosplenomegali beklenmez.',
        falseStatement: 'Tay-Sachs hastalığında masif hepatosplenomegali en erken ve en belirgin fizik muayene bulgusudur.',
        falseHighlight: 'masif hepatosplenomegali en erken ve en belirgin',
      },
      {
        entityName: 'Fabry Hastalığı (Alfa-Galaktosidaz A eksikliği)',
        patientVignette:
          '19 yaşında erkek hasta ekstremitelerde yanıcı nöropatik ağrı (akroparestezi), terleme azlığı (hipohidroz), göbek çevresinde kırmızı-mor anjiyokeratomlar ve erken yaşta proteinüri/böbrek yetmezliği ile başvuruyor.',
        clues: ['akroparestezi', 'anjiyokeratomlar', 'hipohidroz', 'böbrek yetmezliği'],
        questionPrompt: 'X’e bağlı resesif kalıtılan bu lizozomal depo hastalığı aşağıdakilerden hangisidir?',
        mechanism:
          'Alfa-galaktosidaz A eksikliğinde vasküler endotelde globotriaozilseramid (seramid triheksozid) birikir. Sfingolipidozlar içinde X’e bağlı resesif kalıtılan tek hastalıktır.',
        whenCorrectNote: 'X’e bağlı kalıtım + anjiyokeratom + akroparestezi + kornea verticillata + kardiyorenal tutulum.',
        firstVsGold: 'Kalıtım Farkı: Tüm sfingolipidozlar otozomal resesif iken yalnızca Fabry hastalığı X’e bağlı kalıtılır.',
        pearl: 'Fabry = X’e bağlı sfingolipidoz + Anjiyokeratom + Akroparestezi + Alfa-galaktosidaz A eksikliği.',
        trueStatement: 'Fabry hastalığı alfa-galaktosidaz A eksikliği ile gelişen ve X kromozomuna bağlı kalıtılan tek sfingolipidozdur.',
        falseStatement: 'Fabry hastalığı otozomal dominant kalıtılır ve beyinde globoid hücre birikimi ile karakterizedir.',
        falseHighlight: 'otozomal dominant kalıtılır ve beyinde globoid hücre',
      },
      {
        entityName: 'Krabbe Hastalığı (Galaktoserebrozidaz eksikliği)',
        patientVignette:
          '4 aylık bebekte spastisite, optik atrofi, periferik nöropati ve hızlı ilerleyen demiyelinizasyon saptanıyor. Beyin biyopsisinde beyaz cevherde çok çekirdekli "globoid hücreler" ve oligodendrosit kaybı gösteriliyor.',
        clues: ['optik atrofi', 'demiyelinizasyon', 'globoid hücreler'],
        questionPrompt: 'Bu hastada en olası tanı ve eksik enzim aşağıdakilerden hangisidir?',
        mechanism:
          'Beta-galaktoserebrozidaz eksikliğinde miyelin yıkım ürünü olan galaktoserebrozid ve sitotoksik psikozin birikir; oligodendrosit apoptozu ve beyaz cevherde globoid hücreler oluşur.',
        whenCorrectNote: 'Beyaz cevherde çok çekirdekli globoid hücreler, optik atrofi ve ağır demiyelinizasyon.',
        firstVsGold: 'Ayırıcı Patoloji: Beyinde çok çekirdekli globoid hücre görülmesi Krabbe hastalığı için patognomoniktir.',
        pearl: 'Krabbe hastalığı = Galaktoserebrozidaz eksikliği + Beyaz cevherde Globoid Hücreler + Miyelin kaybı.',
        trueStatement: 'Krabbe hastalığında galaktoserebrozidaz eksikliği sonucu beyin beyaz cevherinde karakteristik globoid hücreler birikir.',
        falseStatement: 'Krabbe hastalığında arilsülfataz A eksikliği vardır ve idrarda heparan sülfat atılımı artmıştır.',
        falseHighlight: 'arilsülfataz A eksikliği vardır ve idrarda heparan sülfat',
      },
    ],
  },
  {
    branchId: 'biyokimya',
    subTopic: 'Metabolik Yolakların Hız Kısıtlayıcı Enzimleri',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Fosfofruktokinaz-1 (PFK-1) — Glikoliz',
        patientVignette:
          'Kas ve karaciğer dokusunda glikoliz hızının düzenlenmesinde fruktoz-6-fosfatı fruktoz-1,6-bisfosfata dönüştüren, fruktoz-2,6-bisfosfat ve AMP ile en güçlü şekilde aktive edilen, ATP ve sitrat ile inhibe olan allosterik enzim inceleniyor.',
        clues: ['fruktoz-1,6-bisfosfata dönüştüren', 'fruktoz-2,6-bisfosfat', 'AMP ile en güçlü şekilde aktive'],
        questionPrompt: 'Glikoliz yolağının hız kısıtlayıcı basamağını katalizleyen bu enzim aşağıdakilerden hangisidir?',
        mechanism:
          'PFK-1 glikolizin kendisine özgü (committed) ve hız kısıtlayıcı basamağıdır. En güçlü allosterik aktivatörü Fruktoz-2,6-bisfosfattır (insülin etkisiyle PFK-2 tarafından sentezlenir).',
        whenCorrectNote: 'Glikolizin hız kısıtlayıcı enzimi; Fruktoz-2,6-bisfosfat ve AMP ile aktive, sitrat ve ATP ile inhibe olur.',
        firstVsGold: 'En güçlü aktivatör: Fruktoz-2,6-bisfosfat • İnhibitörler: Sitrat, ATP ve düşük pH.',
        pearl: 'Glikolizin hız kısıtlayıcı enzimi PFK-1’dir; en güçlü allosterik aktivatörü Fruktoz-2,6-bisfosfattır.',
        trueStatement: 'Glikolizin hız kısıtlayıcı enzimi olan Fosfofruktokinaz-1 (PFK-1), Fruktoz-2,6-bisfosfat ile güçlü şekilde aktive edilir.',
        falseStatement: 'Glikolizin hız kısıtlayıcı enzimi pirüvat kinaz olup asetil-KoA tarafından allosterik olarak aktive edilir.',
        falseHighlight: 'pirüvat kinaz olup asetil-KoA tarafından',
      },
      {
        entityName: 'Fruktoz-1,6-Bisfosfataz — Glukoneogenez',
        patientVignette:
          'Uzamış açlıkta karaciğerde glukoneogenez hızını belirleyen, sitrat tarafından aktive edilen ancak AMP ve Fruktoz-2,6-bisfosfat tarafından güçlü biçimde inhibe edilen düzenleyici enzim araştırılıyor.',
        clues: ['glukoneogenez hızını belirleyen', 'sitrat tarafından aktive', 'Fruktoz-2,6-bisfosfat tarafından güçlü biçimde inhibe'],
        questionPrompt: 'Glukoneogenez yolağının hız kısıtlayıcı enzimi aşağıdakilerden hangisidir?',
        mechanism:
          'Fruktoz-1,6-bisfosfataz, PFK-1 reaksiyonunun tersini (hidrolizle) gerçekleştirir. Glukagon varlığında Fruktoz-2,6-bisfosfat düzeyi düşer ve Fruktoz-1,6-bisfosfataz üzerindeki inhibisyon kalkarak glukoneogenez hızlanır.',
        whenCorrectNote: 'Glukoneogenezin hız kısıtlayıcı enzimi; sitrat ile aktive, Fruktoz-2,6-bisfosfat ve AMP ile inhibe olur.',
        firstVsGold: 'Pirüvat Karboksilaz (Asetil-KoA ile zorunlu aktive olur) ilk bypass basamağıdır; hız kısıtlayıcı ise Fruktoz-1,6-bisfosfatazdır.',
        pearl: 'Fruktoz-2,6-bisfosfat glikolizi (PFK-1) aktive ederken glukoneogenezi (Fruktoz-1,6-bisfosfataz) inhibe eder.',
        trueStatement: 'Glukoneogenezin hız kısıtlayıcı enzimi olan Fruktoz-1,6-bisfosfataz, sitrat ile aktive olurken AMP ve Fruktoz-2,6-bisfosfat ile inhibe olur.',
        falseStatement: 'Glukoneogenezin hız kısıtlayıcı enzimi glukoz-6-fosfatazdır ve iskelet kasında bol miktarda bulunur.',
        falseHighlight: 'glukoz-6-fosfatazdır ve iskelet kasında bol miktarda',
      },
      {
        entityName: 'HMG-KoA Redüktaz — Kolesterol Sentezi',
        patientVignette:
          'Hiperkolesterolemili bir hastada kullanılan statin grubu ilaçların yarışmalı olarak inhibe ettiği, endoplazmik retikulum membranında yerleşik olan ve 2 molekül NADPH kullanarak mevalonat sentezleyen enzim inceleniyor.',
        clues: ['statin grubu ilaçların yarışmalı olarak inhibe ettiği', '2 molekül NADPH', 'mevalonat sentezleyen'],
        questionPrompt: 'Kolesterol biyosentezinin hız kısıtlayıcı enzimi aşağıdakilerden hangisidir?',
        mechanism:
          'HMG-KoA Redüktaz, HMG-KoA’yı mevalonata indirger. İnsülin (defosforilasyon ile) aktive ederken, glukagon, AMP-bağımlı protein kinaz (AMPK) ve hücre içi serbest kolesterol bu enzimi inhibe eder.',
        whenCorrectNote: 'Kolesterol sentezinin hız kısıtlayıcı enzimi; statinlerin hedefidir ve mevalonat oluşturur.',
        firstVsGold: 'HMG-KoA Sentaz (Mitokondriyal) -> Keton cisim sentezi hız kısıtlayıcı • HMG-KoA Redüktaz (ER/Sitozolik) -> Kolesterol sentezi hız kısıtlayıcı.',
        pearl: 'Kolesterol sentezinin hız kısıtlayıcı enzimi HMG-KoA Redüktaz, keton sentezinin hız kısıtlayıcı enzimi ise HMG-KoA Sentazdır.',
        trueStatement: 'Kolesterol sentezinin hız kısıtlayıcı enzimi HMG-KoA redüktazdır; insülin ile aktive olur ve statinler tarafından inhibe edilir.',
        falseStatement: 'Kolesterol sentezinin hız kısıtlayıcı enzimi HMG-KoA liyaz olup yalnızca mitokondri matriksinde görev yapar.',
        falseHighlight: 'HMG-KoA liyaz olup yalnızca mitokondri matriksinde',
      },
      {
        entityName: 'Karbamoil Fosfat Sentetaz-I (KPS-I) — Üre Döngüsü',
        patientVignette:
          'Mitokondri matriksinde karbondioksit, amonyak ve 2 ATP kullanarak karbamoil fosfat sentezleyen ve aktivasyonu için N-Asetilglutamat (NAG) varlığına mutlak ihtiyaç duyan enzim eksikliğinde yenidoğanda ağır hiperamonyemi gelişiyor.',
        clues: ['Mitokondri matriksinde', 'N-Asetilglutamat (NAG) varlığına mutlak ihtiyaç', 'hiperamonyemi'],
        questionPrompt: 'Üre döngüsünün hız kısıtlayıcı enzimi aşağıdakilerden hangisidir?',
        mechanism:
          'KPS-I üre döngüsünün mitokondriyal hız kısıtlayıcı enzimidir ve N-Asetilglutamat (NAG) onun zorunlu allosterik aktivatörüdür. Eksikliğinde hiperamonyemi olur ancak idrarda orotik asit artışı görülmez (OTC eksikliğinden farkı).',
        whenCorrectNote: 'Üre döngüsünün hız kısıtlayıcı enzimi; mitokondride bulunur ve N-asetilglutamat (NAG) ile zorunlu aktive olur.',
        firstVsGold: 'KPS-I (Mitokondri, Üre döngüsü, amonyak kullanır, NAG ile aktive) vs. KPS-II (Sitozol, Pirimidin sentezi, glutamin kullanır, PRPP ile aktive).',
        pearl: 'Hiperamonyemi + Normal/Düşük Orotik Asit = KPS-I eksikliği; Hiperamonyemi + Yüksek Orotik Asit = Ornitin Transkarbamoilaz (OTC) eksikliği.',
        trueStatement: 'Üre döngüsünün hız kısıtlayıcı enzimi olan Karbamoil Fosfat Sentetaz-I, N-Asetilglutamat (NAG) tarafından zorunlu olarak aktive edilir.',
        falseStatement: 'Üre döngüsünün hız kısıtlayıcı enzimi sitozolde yerleşik olan Karbamoil Fosfat Sentetaz-II enzimidir.',
        falseHighlight: 'sitozolde yerleşik olan Karbamoil Fosfat Sentetaz-II',
      },
      {
        entityName: 'ALA Sentaz (Delta-Aminolevülinat Sentaz) — Hem Sentezi',
        patientVignette:
          'İzoniazid tedavisi alan bir hastada B6 vitamini (piridoksal fosfat) eksikliğine bağlı mikrositik hipokromik sideroblastik anemi gelişiyor. Kemik iliğinde ring sideroblastlar saptanıyor.',
        clues: ['B6 vitamini (piridoksal fosfat)', 'sideroblastik anemi', 'ring sideroblastlar'],
        questionPrompt: 'Hem biyosentezinin hız kısıtlayıcı basamağını katalizleyen ve kofaktörü PLP (B6) olan enzim hangisidir?',
        mechanism:
          'ALA Sentaz mitokondride süksinil-KoA ve glisinden delta-aminolevülinik asit sentezler. Kofaktörü B6 vitaminidir (PLP). Eritroid öncüllerde ALA sentaz-2 (ALAS2) mutasyonu veya B6 eksikliği X’e bağlı/edinsel sideroblastik anemi yapar.',
        whenCorrectNote: 'Hem sentezinin hız kısıtlayıcı enzimi; süksinil-KoA + glisin kullanır, kofaktörü B6 (PLP) vitaminidir.',
        firstVsGold: 'Hız Kısıtlayıcı: ALA Sentaz (B6 bağımlı) • Kurşun Zehirlenmesinde İnhibe Olanlar: ALA Dehidrataz ve Ferroşelataz.',
        pearl: 'Hem sentezinin hız kısıtlayıcı enzimi ALA Sentazdır (kofaktörü B6); kurşun ise ALA Dehidrataz ve Ferroşelatazı inhibe eder.',
        trueStatement: 'Hem sentezinin hız kısıtlayıcı enzimi olan ALA sentaz, süksinil-KoA ve glisini kullanır ve kofaktörü piridoksal fosfattır (B6).',
        falseStatement: 'Hem sentezinin hız kısıtlayıcı enzimi ferroşelatazdır ve kofaktör olarak biyotin (B7) kullanır.',
        falseHighlight: 'ferroşelatazdır ve kofaktör olarak biyotin (B7)',
      },
    ],
  },
  // =========================================================================
  // 2. TIBBİ MİKROBİYOLOJİ
  // =========================================================================
  {
    branchId: 'mikrobiyoloji',
    subTopic: 'Bakteriyel Toksinler, Besiyerleri ve Klinik Sendromlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Corynebacterium diphtheriae (EF-2 İnhibisyonu)',
        patientVignette:
          'Aşısız 7 yaşında çocukta boğaz ağrısı, boyunda "boğa boynu" görünümü ve tonsiller üzerinde kaldırıldığında kanayan gri-beyaz psödomembran saptanıyor. Etkenin faj aracılı ürettiği ekzotoksin ökaryotik protein sentezini durdurarak miyokardit yapıyor.',
        clues: ['boğa boynu', 'kaldırıldığında kanayan gri-beyaz psödomembran', 'EF-2', 'miyokardit'],
        questionPrompt: 'Bu klinik tabloya yol açan bakteri ve toksininin etki mekanizması aşağıdakilerden hangisidir?',
        mechanism:
          'Corynebacterium diphtheriae beta-fajı ile kodlanan difteri toksini üretir; ADP-ribozilasyon yoluyla Elongasyon Faktörü-2’yi (EF-2) inaktive ederek protein sentezini durdurur (Pseudomonas aeruginosa Ekzotoksin A ile aynı mekanizma).',
        whenCorrectNote: 'Löffler ve potasyum tellüritli besiyeri, metakromatik Babes-Ernst granülleri, EF-2 ADP-ribozilasyonu, psödomembran ve miyokardit.',
        firstVsGold: 'Seçici Besiyeri: Potasyum tellüritli agar • Toksin Gösterimi (In vitro presipitasyon): Elek testi.',
        pearl: 'EF-2’yi ADP-ribozilasyonla inhibe eden iki bakteri: Corynebacterium diphtheriae ve Pseudomonas aeruginosa (Ekzotoksin A).',
        trueStatement: 'Corynebacterium diphtheriae ve Pseudomonas aeruginosa ekzotoksin A, Elongasyon Faktörü-2’yi (EF-2) ADP-ribozilasyonla inaktive eder.',
        falseStatement: 'Corynebacterium diphtheriae toksini adenilat siklazı inhibe ederek spastik felç oluşturur.',
        falseHighlight: 'adenilat siklazı inhibe ederek spastik felç',
      },
      {
        entityName: 'Legionella pneumophila (BCYE Agar & Hiponatremi)',
        patientVignette:
          'Otel konaklaması sonrası 58 yaşında sigara içen erkek hastada yüksek ateş, bradikardi (Faget belirtisi), sulu diyare, konfüzyon ve atipik pnömoni gelişiyor. Laboratuvarda serum sodyumu 124 mEq/L (hiponatremi) ve balgam Gram boyamada bol lökosit olmasına rağmen bakteri görülmüyor.',
        clues: ['otel konaklaması', 'sulu diyare', 'hiponatremi', 'bol lökosit olmasına rağmen bakteri görülmüyor'],
        questionPrompt: 'Bu hastada en olası etken ve üretilmesi için gerekli özel besiyeri aşağıdakilerden hangisidir?',
        mechanism:
          'Legionella pneumophila klima/su sistemlerinden aerosol yoluyla bulaşır (insandan insana bulaşmaz). Üremesi için L-sistein ve demir içeren BCYE (Buffered Charcoal Yeast Extract) agar gerekir.',
        whenCorrectNote: 'Atipik pnömoni + diyare + hiponatremi + BCYE (sistein + demir) agar + idrarda antijen testi.',
        firstVsGold: 'Hızlı Pratik Tanı: İdrarda Legionella Serogrup 1 antijeni • Altın Standart Kültür: BCYE agar.',
        pearl: 'Atipik pnömoni + İshal + Hiponatremi + Klima öyküsü = Legionella pneumophila (BCYE agar, sistein ve demir şart).',
        trueStatement: 'Legionella pneumophila üremesi için L-sistein ve demir içeren BCYE besiyerine ihtiyaç duyar; klinikte pnömoniye hiponatremi ve ishal eşlik eder.',
        falseStatement: 'Legionella pneumophila insandan insana damlacık yoluyla çok hızlı bulaşır ve tedavide ilk tercih seftriaksondur.',
        falseHighlight: 'insandan insana damlacık yoluyla çok hızlı bulaşır ve tedavide ilk tercih seftriaksondur',
      },
      {
        entityName: 'Bordetella pertussis (Gi Protein İnhibisyonu & Lenfositoz)',
        patientVignette:
          'Aşısız 4 aylık bebekte 2 haftadır süren paroksismal öksürük nöbetleri, nöbet sonunda inspiratuvar "boğmaca (whoop)" sesi ve öksürük sonrası kusma mevcut. Tam kan sayımında lökosit 34.000/mm³ olup %80’inin olgun lenfosit olduğu görülüyor.',
        clues: ['paroksismal öksürük', 'boğmaca (whoop)', 'öksürük sonrası kusma', 'olgun lenfositoz'],
        questionPrompt: 'Bu hastada etkenin ürettiği pertussis toksininin temel mekanizması aşağıdakilerden hangisidir?',
        mechanism:
          'Pertussis toksini Gi (inhibitör G proteini) alt birimini ADP-ribozilasyonla inaktive eder; hücre içi cAMP düzeyi aşırı yükselir, insülin salınımı (hipoglisemi) ve belirgin lenfositoz gelişir. Bordet-Gengou ve Regan-Lowe besiyerinde ürer.',
        whenCorrectNote: 'Gi protein inhibisyonu -> cAMP artışı, belirgin lenfositoz, Regan-Lowe besiyeri, tedavide makrolid.',
        firstVsGold: 'En Bulaşıcı Dönem: Kataral evre • İlk Tercih Antibiyotik: Azitromisin / Klaritromisin (Makrolidler).',
        pearl: 'Bakteriyel enfeksiyon olmasına rağmen periferik kanda belirgin mutlak LENFOSİTOZ yapan klasik etken Bordetella pertussis’tir.',
        trueStatement: 'Bordetella pertussis toksini Gi proteinini ADP-ribozilasyonla inhibe ederek hücre içi cAMP artışına ve belirgin lenfositoza yol açar.',
        falseStatement: 'Bordetella pertussis Gs proteinini inhibe ederek hücre içi cAMP düzeyini düşürür ve ağır lenfopeni yapar.',
        falseHighlight: 'Gs proteinini inhibe ederek hücre içi cAMP düzeyini düşürür ve ağır lenfopeni',
      },
      {
        entityName: 'Clostridium tetani (Glisin & GABA Salınım İnhibisyonu)',
        patientVignette:
          'Paslı çivi batması sonrası aşısız hastada çene kilitlenmesi (trismus), risus sardonicus, opistotonus ve dış uyaranlarla tetiklenen ağrılı tonik kas spazmları gelişiyor.',
        clues: ['trismus', 'risus sardonicus', 'opistotonus', 'tonik kas spazmları'],
        questionPrompt: 'Bu tabloya neden olan tetanospazmin toksininin etki mekanizması aşağıdakilerden hangisidir?',
        mechanism:
          'Tetanospazmin aksonal retrograd taşınma ile omurilikteki Renshaw ara nöronlarına ulaşır; SNARE proteinlerini (sinaptobrevin) parçalayarak inhibitör nörotransmitterler olan Glisin ve GABA salınımını engeller -> Spastik felç.',
        whenCorrectNote: 'Renshaw hücrelerinden Glisin ve GABA salınımının engellenmesi -> Spastik paralizi, trismus, risus sardonicus.',
        firstVsGold: 'Tetanospazmin: Glisin/GABA inhibisyonu -> Spastik felç • Botulinum Toksini: Asetilkolin salınım inhibisyonu -> Flask (gevşek) felç.',
        pearl: 'Tetanoz toksini Glisin ve GABA salınımını engelleyerek SPASTİK felç; Botulinum toksini ise Asetilkolin salınımını engelleyerek FLASK felç yapar.',
        trueStatement: 'Clostridium tetani’nin tetanospazmin toksini Renshaw hücrelerinden glisin ve GABA salınımını engelleyerek spastik felce yol açar.',
        falseStatement: 'Clostridium tetani toksini nöromusküler kavşaktan asetilkolin salınımını bloke ederek gevşek (flask) felç oluşturur.',
        falseHighlight: 'nöromusküler kavşaktan asetilkolin salınımını bloke ederek gevşek (flask) felç',
      },
      {
        entityName: 'Vibrio cholerae (Gs Protein Aktivasyonu & Pirinç Suyu Diyare)',
        patientVignette:
          'Kirli su tüketimi sonrası hastada karın ağrısı ve ateş olmaksızın günde 15-20 kez "pirinç yıkantı suyu" görünümünde masif sulu diyare ve hipovolemik şok gelişiyor. TCBS besiyerinde sarı koloniler ve karanlık alanda "kayan yıldız" hareketi izleniyor.',
        clues: ['pirinç yıkantı suyu', 'TCBS besiyerinde sarı koloniler', 'kayan yıldız hareketi'],
        questionPrompt: 'Bu bakterinin enterotoksininin temel etki mekanizması aşağıdakilerden hangisidir?',
        mechanism:
          'Kolera toksini, GM1 gangliozid reseptörüne bağlanır ve Gs proteininin alfa alt birimini ADP-ribozilasyonla kalıcı olarak aktive eder; adenilat siklaz ve cAMP artar, lümene yoğun klor ve su sekresyonu olur.',
        whenCorrectNote: 'Gs proteininin kalıcı aktivasyonu -> cAMP artışı, TCBS’de sarı koloni, oksidaz pozitif virgül şekilli basil.',
        firstVsGold: 'Kolera Toksini & ETEC Labile Toksin (LT): cAMP artırır • ETEC Stabile Toksin (ST) & Yersinia: cGMP artırır.',
        pearl: 'Vibrio cholerae ve ETEC ısıya duyarlı (LT) toksini Gs proteinini aktive ederek cAMP’yi artırır; ETEC ısıya dirençli (ST) toksini ise cGMP’yi artırır.',
        trueStatement: 'Vibrio cholerae toksini Gs proteinini ADP-ribozilasyonla kalıcı olarak aktive ederek cAMP artışı ve pirinç suyu diyareye neden olur.',
        falseStatement: 'Vibrio cholerae bağırsak mukozasını invaze ederek kanlı-mukuslu dizanteriye ve guanilat siklaz aktivasyonuna yol açar.',
        falseHighlight: 'bağırsak mukozasını invaze ederek kanlı-mukuslu dizanteriye ve guanilat siklaz',
      },
    ],
  },
  // =========================================================================
  // 3. TIBBİ PATOLOJİ
  // =========================================================================
  {
    branchId: 'patoloji',
    subTopic: 'Hücre Hasarı, Nekroz Tipleri ve Patognomonik Cisimcikler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Likefaksiyon (Erime) Nekrozu — Beyin İnfarktı ve Apse',
        patientVignette:
          'Orta serebral arter tıkanıklığı sonrası gelişen iskemik beyin infarktı alanında 1 hafta sonra yapılan incelemede dokunun hidrolitik enzimlerle tamamen eriyerek kistik bir boşluğa dönüştüğü izleniyor.',
        clues: ['iskemik beyin infarktı', 'hidrolitik enzimlerle tamamen eriyerek', 'kistik bir boşluğa'],
        questionPrompt: 'Merkezi sinir sistemi iskemik infarktlarında ve bakteriyel apselerde görülen karakteristik nekroz tipi hangisidir?',
        mechanism:
          'Tüm solid organların iskemik infarktlarında koagülasyon nekrozu görülürken, yalnız Merkezi Sinir Sistemi (beyin) iskemik infarktlarında ve piyojenik bakteriyel enfeksiyonlarda (apse) likefaksiyon (erime) nekrozu görülür.',
        whenCorrectNote: 'Beyin iskemik infarktı ve bakteriyel apselerde hidrolitik enzimlerle dokunun sıvılaşması.',
        firstVsGold: 'Solid organ iskemisi (Kalp, Böbrek, Dalak): Koagülasyon nekrozu • Beyin iskemisi: Likefaksiyon nekrozu.',
        pearl: 'İskemi tüm organlarda koagülasyon nekrozu yaparken, BEYİNDE likefaksiyon (erime) nekrozu yapar.',
        trueStatement: 'Merkezi sinir sisteminin hipoksik/iskemik infarktlarında diğer organlardan farklı olarak likefaksiyon nekrozu gelişir.',
        falseStatement: 'Serebral arter tıkanıklığına bağlı beyin infarktlarında en tipik bulgu koagülasyon nekrozudur.',
        falseHighlight: 'beyin infarktlarında en tipik bulgu koagülasyon nekrozudur',
      },
      {
        entityName: 'Fibrinoid Nekroz — Poliarteritis Nodosa ve Malign Hipertansiyon',
        patientVignette:
          '38 yaşında HBsAg pozitif erkek hastada hipertansiyon, karın ağrısı ve mononöritis multipleks gelişiyor. Renal arter dallarında mikroanevrizmalar ve biyopside damar duvarında immün kompleks + fibrin birikimine bağlı parlak pembe eozinofilik nekroz saptanıyor.',
        clues: ['HBsAg pozitif', 'mononöritis multipleks', 'damar duvarında immün kompleks + fibrin', 'parlak pembe eozinofilik'],
        questionPrompt: 'Vaskülitlerde ve malign hipertansiyonda damar duvarında izlenen bu nekroz tipi aşağıdakilerden hangisidir?',
        mechanism:
          'Tip III hipersensitivite reaksiyonlarında (immün kompleks vaskülitleri, PAN) ve malign hipertansiyonda arter duvarına sızan fibrin ve immün kompleksler H&E boyamada parlak pembe "fibrinoid nekroz" görünümü verir.',
        whenCorrectNote: 'İmmün kompleks vaskülitleri (PAN) ve malign hipertansiyonda arter duvarında parlak eozinofilik birikim.',
        firstVsGold: 'PAN: Akciğer (pulmoner) arterlerini TUTMAZ, glomerülonefrit YAPMAZ; transmural fibrinoid nekroz yapar.',
        pearl: 'Damar duvarında immün kompleks + fibrin birikimiyle karakterize nekroz tipi Fibrinoid Nekrozdur (PAN, Malign HT).',
        trueStatement: 'Poliarteritis nodosa (PAN) ve malign hipertansiyonda arteriyol duvarlarında karakteristik olarak fibrinoid nekroz izlenir.',
        falseStatement: 'Poliarteritis nodosa en sık pulmoner arterleri tutar ve damar duvarında kazeifikasyon nekrozu oluşturur.',
        falseHighlight: 'en sık pulmoner arterleri tutar ve damar duvarında kazeifikasyon',
      },
      {
        entityName: 'Aschoff Cisimciği ve Anitschkow Hücresi — Akut Romatizmal Ateş',
        patientVignette:
          'Geçirilmiş A grubu beta-hemolitik streptokok tonsilliti sonrası pankardit gelişen 11 yaşındaki çocuğun miyokard biyopsisinde fibrinoid nekroz çevresinde tırtıl kromatinli ("baykuş gözü / tırtıl") histiyositler ve granülomatöz odak izleniyor.',
        clues: ['pankardit', 'tırtıl kromatinli', 'granülomatöz odak'],
        questionPrompt: 'Akut romatizmal ateş (ARA) miyokarditi için patognomonik olan bu yapılar aşağıdakilerden hangisidir?',
        mechanism:
          'Streptokokal M proteinine karşı gelişen çapraz reaksiyon (Tip II hipersensitivite) kalbin 3 tabakasını da tutar (pankardit). Miyokarddaki granülomatöz lezyona Aschoff cisimciği, içindeki aktif makrofajlara Anitschkow (tırtıl) hücresi denir.',
        whenCorrectNote: 'ARA pankarditinde miyokardda Aschoff cisimcikleri ve tırtıl kromatinli Anitschkow histiyositleri.',
        firstVsGold: 'Akut dönemde en sık tutulan ve ölüme yol açan: Miyokardit • Kronik dönemde en sık tutulan kapak: Mitral kapak (balık ağzı stenoz).',
        pearl: 'Akut Romatizmal Ateş (ARA) miyokarditinde Aschoff cisimcikleri ve Anitschkow (tırtıl) hücreleri patognomoniktir.',
        trueStatement: 'Akut romatizmal ateşte miyokardda izlenen Aschoff cisimcikleri ve Anitschkow hücreleri hastalık için patognomoniktir.',
        falseStatement: 'Akut romatizmal ateş Tip I hipersensitivite reaksiyonudur ve en sık triküspit kapak darlığına yol açar.',
        falseHighlight: 'Tip I hipersensitivite reaksiyonudur ve en sık triküspit kapak',
      },
      {
        entityName: 'Councilman Cisimciği — Akut Viral Hepatit (Apoptoz)',
        patientVignette:
          'Akut Hepatit B enfeksiyonu geçiren bir hastanın karaciğer biyopsisinde lobüllerde balonlaşma dejenerasyonu yanı sıra büzüşmüş, yoğun eozinofilik sitoplazmalı ve piknotik/kaybolmuş çekirdekli tekil hepatositler izleniyor.',
        clues: ['Akut Hepatit B', 'yoğun eozinofilik sitoplazmalı', 'büzüşmüş', 'tekil hepatositler'],
        questionPrompt: 'Viral hepatitlerde ve sarı hummada apoptotik hepatosit ölümüyle oluşan bu cisimcik hangisidir?',
        mechanism:
          'Sitotoksik CD8+ T lenfositlerin enfekte hepatositleri Fas-FasL ve perforin/granzim yoluyla apoptoza uğratması sonucu eozinofilik apoptotik Councilman cisimcikleri oluşur.',
        whenCorrectNote: 'Viral hepatit ve sarı hummada apoptotik hepatositler (Councilman cisimciği).',
        firstVsGold: 'Councilman Cisimciği: Apoptoz (Viral hepatit, eozinofilik) • Mallory-Denk Cisimciği: Ara filaman (Sitokeratin 8/18, Alkolik hepatit).',
        pearl: 'Councilman cisimciği = Viral hepatitte APOPTOZ; Mallory-Denk cisimciği = Alkolik hepatitte SİTOKERATİN 8/18 birikimi.',
        trueStatement: 'Akut viral hepatitlerde izlenen Councilman cisimcikleri, apoptoza uğramış eozinofilik hepatositleri temsil eder.',
        falseStatement: 'Councilman cisimcikleri alkolik hepatitte mikrotübül yıkımı sonucu oluşan bazofilik inklüzyonlardır.',
        falseHighlight: 'alkolik hepatitte mikrotübül yıkımı sonucu oluşan bazofilik',
      },
      {
        entityName: 'Psammom Cisimciği — Papiller Tiroid Kanseri ve Meningiom',
        patientVignette:
          'Boyunda ağrısız nodül ile başvuran 29 yaşında kadın hastanın tiroid İİAB ve tiroidektomi materyalinde "Orphan Annie gözü" (buzlu cam) nükleuslar, nükleer çentiklenme (grooving) ve konsantrik lameller distrofik kalsifikasyon odakları saptanıyor.',
        clues: ['Orphan Annie gözü', 'nükleer çentiklenme', 'konsantrik lameller distrofik kalsifikasyon'],
        questionPrompt: 'Papiller tiroid karsinomu, meningiom ve seröz over tümörlerinde görülen bu kalsifik yapı hangisidir?',
        mechanism:
          'Psammom cisimcikleri, papiller yapı oluşturan tümörlerde (Papiller tiroid Ca, Seröz papiller over Ca, Meningiom, Mezotelyoma, Prolaktinoma) nekrotik papillaların uçlarında gelişen distrofik kalsifikasyon odaklarıdır.',
        whenCorrectNote: 'Konsantrik lameller distrofik kalsifikasyon (Papiller tiroid Ca, Meningiom, Seröz over Ca).',
        firstVsGold: 'Tiroid nodülünde İlk/Altın Standart Tanı: İnce İğne Aspirasyon Biyopsisi (İİAB) • Papiller Ca tanı kriteri: Nükleer özellikler.',
        pearl: 'Psammom cisimciği = Distrofik kalsifikasyon (Papiller tiroid Ca, Seröz over Ca, Meningiom, Mezotelyoma).',
        trueStatement: 'Psammom cisimcikleri distrofik kalsifikasyon örneği olup papiller tiroid karsinomu, meningiom ve seröz over karsinomunda görülür.',
        falseStatement: 'Psammom cisimcikleri hiperkalsemiye bağlı gelişen metastatik kalsifikasyon odaklarıdır ve folliküler tiroid kanserine özgüdür.',
        falseHighlight: 'hiperkalsemiye bağlı gelişen metastatik kalsifikasyon odaklarıdır ve folliküler',
      },
    ],
  },
  // =========================================================================
  // 4. TIBBİ FARMAKOLOJİ
  // =========================================================================
  {
    branchId: 'farmakoloji',
    subTopic: 'Klinik Toksikoloji ve Spesifik Antidotlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'N-Asetilsistein — Parasetamol (Asetaminofen) Zehirlenmesi',
        patientVignette:
          'Suisid amaçlı yüksek doz parasetamol alan 22 yaşında hastada 36 saat sonra sağ üst kadran ağrısı ve AST/ALT değerlerinde 4000 U/L üzerine çıkış saptanıyor. Karaciğerde sentrilobüler nekroza yol açan toksik metabolit (NAPQI) birikimi mevcuttur.',
        clues: ['parasetamol', 'sentrilobüler nekroz', 'NAPQI'],
        questionPrompt: 'Bu hastada glutatyon depolarını yenileyerek hayat kurtaran spesifik antidot aşağıdakilerden hangisidir?',
        mechanism:
          'Parasetamol CYP2E1 ile hepatotoksik NAPQI metabolitine dönüşür. Normalde glutatyon ile detoksifiye edilir. N-Asetilsistein (NAC) sistein öncülü olarak karaciğer glutatyon (GSH) depolarını yeniler.',
        whenCorrectNote: 'Parasetamol intoksikasyonunda NAPQI detoksifikasyonu ve glutatyon sentezi için N-asetilsistein.',
        firstVsGold: 'Toksik Metabolit: NAPQI (CYP2E1 ile oluşur) • Spesifik Antidot: N-Asetilsistein (İlk 8-10 saatte en etkili).',
        pearl: 'Parasetamol zehirlenmesinde CYP2E1 ile oluşan NAPQI sentrilobüler karaciğer nekrozu yapar; antidotu N-Asetilsisteindir.',
        trueStatement: 'Parasetamol zehirlenmesinde hepatotoksik metabolit NAPQI olup, spesifik antidotu glutatyon depolarını yenileyen N-asetilsisteindir.',
        falseStatement: 'Parasetamol zehirlenmesinde spesifik antidot flumazenildir ve periportal karaciğer nekrozu görülür.',
        falseHighlight: 'spesifik antidot flumazenildir ve periportal',
      },
      {
        entityName: 'Atropin + Pralidoksim (PAM) — Organofosfat Zehirlenmesi',
        patientVignette:
          'Tarım ilacı (insektisit) maruziyeti sonrası acil servise getirilen çiftçide miyozis, hipersalivasyon, bronkore, bradikardi, fasikülasyonlar, ishal ve konfüzyon saptanıyor.',
        clues: ['tarım ilacı', 'miyozis', 'bronkore', 'bradikardi', 'fasikülasyonlar'],
        questionPrompt: 'Asetilkolinesterazın irreversibl inhibisyonuna bağlı bu tabloda uygulanacak antidot kombinasyonu hangisidir?',
        mechanism:
          'Organofosfatlar asetilkolinesterazı irreversibl fosforile eder. İlk olarak muskarinik bulguları (bronkore, bradikardi) hızla çözmek için Atropin, enzim "yaşlanmadan (aging)" önce rejenere etmek için Pralidoksim (PAM) verilir.',
        whenCorrectNote: 'Organofosfat zehirlenmesinde muskarinik blokaj için Atropin + kolinesteraz rejenerasyonu için Pralidoksim.',
        firstVsGold: 'İlk Verilecek Hayat Kurtarıcı İlaç: Atropin (bronkore/bradikardi kontrolü) • Enzim Rejeneratörü: Pralidoksim (Karbamat zehirlenmesinde PAM verilmez!).',
        pearl: 'Organofosfat zehirlenmesinde ölüm nedeni solunum yetmezliğidir (bronkore); tedavide Atropin + Pralidoksim kullanılır.',
        trueStatement: 'Organofosfat zehirlenmesinde muskarinik semptomlar için atropin, asetilkolinesterazı yeniden aktiflemek için pralidoksim kullanılır.',
        falseStatement: 'Organofosfat zehirlenmesinde belirgin midriyazis ve taşikardi görülür; tedavisinde fizostigmin kullanılır.',
        falseHighlight: 'belirgin midriyazis ve taşikardi görülür; tedavisinde fizostigmin',
      },
      {
        entityName: 'Glukagon — Beta Blokör Zehirlenmesi',
        patientVignette:
          'Yüksek doz propranolol alımı sonrası acil servise getirilen hastada ağır bradikardi, hipotansiyon, AV blok, bronkospazm ve hipoglisemi saptanıyor. İntravenöz sıvı ve atropine yanıt alınamıyor.',
        clues: ['propranolol', 'ağır bradikardi', 'AV blok', 'hipoglisemi'],
        questionPrompt: 'Beta reseptörlerden bağımsız olarak kalpte cAMP düzeyini artırarak pozitif inotrop/kronotrop etki gösteren antidot hangisidir?',
        mechanism:
          'Glukagon, miyokarddaki kendi Gs-kenetli glukagon reseptörlerine bağlanarak beta-adrenerjik reseptörleri bypass eder ve adenilat siklazı aktive edip hücre içi cAMP ve kalsiyumu artırır.',
        whenCorrectNote: 'Beta-blokör intoksikasyonunda beta reseptörden bağımsız cAMP artışı sağlayan Glukagon.',
        firstVsGold: 'Beta Blokör Antidotu: Glukagon • Kalsiyum Kanal Blokörü Antidotu: İntravenöz Kalsiyum + Yüksek Doz İnsülin-Öglisemi tedavisi.',
        pearl: 'Beta blokör zehirlenmesinde kalpte beta reseptörden bağımsız cAMP artışı sağlayan spesifik antidot Glukagondur.',
        trueStatement: 'Beta blokör zehirlenmesinde spesifik antidot, beta reseptörlerden bağımsız olarak miyokardda cAMP düzeyini artıran glukagondur.',
        falseStatement: 'Beta blokör zehirlenmesinde spesifik antidot protamin sülfattır ve guanilat siklazı aktive ederek etki gösterir.',
        falseHighlight: 'spesifik antidot protamin sülfattır ve guanilat siklazı',
      },
      {
        entityName: 'Fomepizol — Metanol ve Etilen Glikol Zehirlenmesi',
        patientVignette:
          'Kaçak içki tüketimi sonrası görme bulanıklığı ("kar fırtınası" görüntüsü), optik disk hiperemisi, takipne ve yüksek anyon açıklı + yüksek osmolar açıklı ağır metabolik asidoz ile başvuran hasta değerlendiriliyor.',
        clues: ['kaçak içki', 'kar fırtınası', 'optik disk', 'yüksek anyon açıklı + yüksek osmolar açıklı'],
        questionPrompt: 'Alkol dehidrogenaz enzimini inhibe ederek toksik formik asit oluşumunu engelleyen ilk tercih antidot hangisidir?',
        mechanism:
          'Metanol, alkol dehidrogenaz ile formaldehit ve retinaya/optik sinire toksik olan formik aside dönüşür. Fomepizol (veya etanol) alkol dehidrogenazı yarışmalı inhibe ederek toksik metabolit oluşumunu durdurur.',
        whenCorrectNote: 'Metanol (formik asit -> körlük) ve etilen glikol (okzalat -> ABY) zehirlenmesinde alkol dehidrogenaz inhibitörü Fomepizol.',
        firstVsGold: 'İlk Tercih Spesifik Antidot: Fomepizol (Alkol dehidrogenaz inhibitörü) • Fomepizol yoksa: Etanol + Ağır asidoz/görme kaybında Hemodiyaliz.',
        pearl: 'Metanol ve etilen glikol zehirlenmesinde hem anyon açığı hem osmolar açık artar; ilk tercih antidot Fomepizoldür.',
        trueStatement: 'Metanol ve etilen glikol zehirlenmelerinde alkol dehidrogenazı inhibe eden ilk tercih spesifik antidot fomepizoldür.',
        falseStatement: 'Metanol zehirlenmesinde disülfiram ilk tercih antidot olup aldehit dehidrogenazı aktive ederek etki gösterir.',
        falseHighlight: 'disülfiram ilk tercih antidot olup aldehit dehidrogenazı aktive',
      },
      {
        entityName: 'İdarusizumab — Dabigatran (Direkt Trombin İnhibitörü) Antidotu',
        patientVignette:
          'Non-valvüler atriyal fibrilasyon nedeniyle oral dabigatran kullanan 74 yaşında hastada acil cerrahi gerektiren hayatı tehdit edici gastrointestinal kanama gelişiyor.',
        clues: ['dabigatran', 'hayatı tehdit edici gastrointestinal kanama'],
        questionPrompt: 'Dabigatranın antikoagülan etkisini hızla geri çeviren spesifik monoklonal antikor antidotu aşağıdakilerden hangisidir?',
        mechanism:
          'İdarusizumab, dabigatrana trombinden 350 kat daha yüksek afiniteyle bağlanan spesifik humanize monoklonal antikor fragmanıdır. Faktör Xa inhibitörlerinin (rivaroksaban, apiksaban) antidotu ise Andeksanet alfadır.',
        whenCorrectNote: 'Dabigatranın spesifik antidotu İdarusizumab; Apiksaban/Rivaroksaban antidotu Andeksanet alfa.',
        firstVsGold: 'Heparin -> Protamin sülfat • Varfarin -> K vitamini + 4-Faktör PCC • Dabigatran -> İdarusizumab • Apiksaban/Rivaroksaban -> Andeksanet alfa.',
        pearl: 'Dabigatran antidotu İdarusizumab; Faktör Xa inhibitörlerinin (Apiksaban, Rivaroksaban) antidotu ise Andeksanet alfadır.',
        trueStatement: 'Direkt trombin inhibitörü olan dabigatranın spesifik antidotu monoklonal antikor yapısındaki idarusizumabdır.',
        falseStatement: 'Dabigatran zehirlenmesinde spesifik antidot atroppin olup faktör Xa inhibitörlerinde protamin sülfat kullanılır.',
        falseHighlight: 'spesifik antidot atroppin olup faktör Xa inhibitörlerinde protamin',
      },
    ],
  },
  // =========================================================================
  // 5. ANATOMİ
  // =========================================================================
  {
    branchId: 'anatomi',
    subTopic: 'Klinik Sinir Yaralanmaları ve Nörovasküler Komşuluklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Nervus radialis — Humerus Corpus (Sulcus nervi radialis) Kırığı',
        patientVignette:
          'Trafik kazası sonrası humerus gövde (corpus humeri) orta 1/3 spiral kırığı gelişen hastada el bileği ve parmaklarda ekstansiyon kaybı ("düşük el / wrist drop") ve el sırtında 1. dorsal interosseöz aralıkta duyu kaybı saptanıyor.',
        clues: ['corpus humeri', 'düşük el / wrist drop', '1. dorsal interosseöz aralıkta duyu kaybı'],
        questionPrompt: 'Bu hastada a. profunda brachii ile birlikte seyrederken yaralanan sinir aşağıdakilerden hangisidir?',
        mechanism:
          'Sulcus nervi radialis (spiral oluk) içinde N. radialis ve A. profunda brachii birlikte seyreder. Humerus gövde kırığında yaralanmasıyla ön kol ekstansörleri felç olur ve "Düşük El (Wrist Drop)" gelişir.',
        whenCorrectNote: 'Humerus corpus kırığı, a. profunda brachii komşuluğu, düşük el (wrist drop) ve 1. dorsal web aralığı duyu kaybı.',
        firstVsGold: 'Humerus Collum Chirurgicum: N. axillaris • Corpus Humeri: N. radialis • Suprakondiler: N. medianus • Медиal Epikondil: N. ulnaris.',
        pearl: 'Corpus humeri kırığında N. radialis (ve A. profunda brachii) yaralanır -> Düşük El (Wrist Drop) gelişir.',
        trueStatement: 'Humerus gövde (corpus) kırıklarında sulcus nervi radialis içinde seyreden n. radialis yaralanır ve düşük el (wrist drop) gelişir.',
        falseStatement: 'Humerus gövde kırıklarında en sık n. ulnaris yaralanır ve hastada ebe eli deformitesi oluşur.',
        falseHighlight: 'en sık n. ulnaris yaralanır ve hastada ebe eli',
      },
      {
        entityName: 'Nervus medianus — Suprakondiler Humerus Kırığı ve Karpal Tünel',
        patientVignette:
          'Dirsek üzerine düşme sonrası humerus suprakondiler kırığı gelişen çocukta işaret ve orta parmaklarda fleksiyon kaybı ("Ebe Eli / Vaftiz Eli"), başparmak opozisyon kaybı ("Maymun Eli") ve avuç içi lateral 3,5 parmakta duyu kaybı saptanıyor.',
        clues: ['suprakondiler kırığı', 'Ebe Eli / Vaftiz Eli', 'opozisyon kaybı', 'Maymun Eli'],
        questionPrompt: 'A. brachialis ile birlikte fossa cubitalis’te yaralanan bu sinir aşağıdakilerden hangisidir?',
        mechanism:
          'Suprakondiler humerus kırığında N. medianus ve A. brachialis yaralanır. Hastadan yumruk yapması istendiğinde 2. ve 3. parmaklar bükülemez (Ebe eli / Benediction hand), tenar atrofi ve opozisyon kaybıyla Maymun eli oluşur.',
        whenCorrectNote: 'Suprakondiler kırık veya karpal tünel sendromu, başparmak opozisyon kaybı (m. opponens pollicis), ebe eli ve maymun eli.',
        firstVsGold: 'Yumruk yaparken oluşan Ebe Eli: N. medianus • El istirahatte iken görülen Pençe El (4. ve 5. parmak): N. ulnaris.',
        pearl: 'Suprakondiler humerus kırığında N. medianus ve A. brachialis (Volkmann iskemik kontraktürü riski) yaralanır.',
        trueStatement: 'Suprakondiler humerus kırıklarında n. medianus ve a. brachialis yaralanma riski en yüksektir; başparmak opozisyonu bozulur.',
        falseStatement: 'Karpal tünel içinden n. ulnaris ve a. radialis geçer; sıkışmasında düşük ayak gelişir.',
        falseHighlight: 'n. ulnaris ve a. radialis geçer; sıkışmasında düşük ayak',
      },
      {
        entityName: 'Nervus fibularis (peroneus) communis — Fibula Boynu Kırığı',
        patientVignette:
          'Bacağın dış yanına darbe sonrası fibula boynu (collum fibulae) kırığı gelişen futbolcuda ayağa dorsifleksiyon ve eversiyon yaptırılamıyor ("Düşük Ayak / Foot Drop", stepaj yürüyüşü) ve ayak sırtında duyu kaybı saptanıyor.',
        clues: ['fibula boynu (collum fibulae)', 'dorsifleksiyon ve eversiyon yaptırılamıyor', 'Düşük Ayak / Foot Drop'],
        questionPrompt: 'Bu hastada yaralanan sinir aşağıdakilerden hangisidir?',
        mechanism:
          'N. fibularis (peroneus) communis, fibula boynunu yüzeyel olarak dolanır ve alt ekstremitede en sık yaralanan sinirdir. Yüzeyel dalı eversiyon, derin dalı dorsifleksiyon yaptırır; hasarında Düşük Ayak gelişir.',
        whenCorrectNote: 'Collum fibulae kırığı, dorsifleksiyon + eversiyon kaybı, düşük ayak (foot drop) ve stepaj yürüyüşü.',
        firstVsGold: 'N. fibularis profundus: Dorsifleksiyon + 1.-2. parmak arası duyu • N. fibularis superficialis: Eversiyon + ayak sırtı duyusu.',
        pearl: 'Collum fibulae kırığında N. fibularis communis yaralanır; hastada dorsifleksiyon ve eversiyon kaybı (Düşük Ayak) gelişir.',
        trueStatement: 'Fibula boynu (collum fibulae) kırıklarında n. fibularis communis yaralanır ve hastada düşük ayak (foot drop) tablosu gelişir.',
        falseStatement: 'Fibula boynu kırıklarında n. tibialis yaralanır ve hasta parmak uçlarında yükselmeye devam ederken topuk üzerinde yürüyebilir.',
        falseHighlight: 'n. tibialis yaralanır ve hasta parmak uçlarında yükselmeye devam ederken',
      },
      {
        entityName: 'Nervus thoracicus longus — Aksiller Lenf Diseksiyonu ve Kanat Skapula',
        patientVignette:
          'Meme kanseri nedeniyle radikal mastektomi ve aksiller lenf nodu diseksiyonu yapılan 48 yaşında kadın hastada kolunu 90 derecenin üzerine kaldıramama (hiperabdüksiyon kaybı) ve duvara dayanırken skapula medial kenarının arkaya doğru çıkıntı yapması ("Kanat Skapula / Winged Scapula") saptanıyor.',
        clues: ['aksiller lenf nodu diseksiyonu', '90 derecenin üzerine kaldıramama', 'Kanat Skapula / Winged Scapula'],
        questionPrompt: 'M. serratus anterior’u innerve eden ve bu operasyonda yaralanan sinir aşağıdakilerden hangisidir?',
        mechanism:
          'C5-C6-C7 köklerinden çıkan N. thoracicus longus (Bell siniri), M. serratus anterior’u innerve eder. Bu kas skapulayı toraks duvarına yapıştırır ve kolun 90° üzeri hiperabdüksiyonunu sağlar.',
        whenCorrectNote: 'Meme cerrahisi/aksiller diseksiyon sonrası M. serratus anterior felci, kanat skapula ve hiperabdüksiyon kaybı.',
        firstVsGold: '0-15° Abdüksiyon: M. supraspinatus (N. suprascapularis) • 15-90°: M. deltoideus (N. axillaris) • >90° Hiperabdüksiyon: M. serratus anterior (N. thoracicus longus).',
        pearl: 'Aksiller diseksiyonda N. thoracicus longus yaralanırsa M. serratus anterior felç olur -> Kanat Skapula ve >90° abdüksiyon kaybı.',
        trueStatement: 'Aksiller lenf diseksiyonunda n. thoracicus longus yaralanması m. serratus anterior felcine ve kanat skapula deformitesine yol açar.',
        falseStatement: 'M. serratus anterior kası n. thoracodorsalis tarafından innerve edilir ve kolun ilk 15 derecelik abdüksiyonunu başlatır.',
        falseHighlight: 'n. thoracodorsalis tarafından innerve edilir ve kolun ilk 15 derecelik',
      },
      {
        entityName: 'Nervus laryngeus recurrens — Tiroidektomi Sonrası Ses Kısıklığı',
        patientVignette:
          'Total tiroidektomi ameliyatı sırasında A. thyroidea inferior’un bağlanması aşamasında komşu sinir tek taraflı yaralanıyor. Postoperatif dönemde hastada ses kısıklığı (hoarseness) gelişiyor.',
        clues: ['Total tiroidektomi', 'A. thyroidea inferior', 'ses kısıklığı'],
        questionPrompt: 'M. cricothyroideus hariç larinksin tüm intrinsik kaslarını innerve eden ve bu işlemde yaralanan sinir hangisidir?',
        mechanism:
          'N. laryngeus recurrens, A. thyroidea inferior ile yakın komşuluktadır. Tek taraflı kesisinde ses kısıklığı, iki taraflı kesisinde ise tek abdüktör kas olan M. cricoarytenoideus posterior felcine bağlı akut dispne/stridor gelişir.',
        whenCorrectNote: 'A. thyroidea inferior komşuluğu, M. cricothyroideus hariç tüm larinks kaslarının motor siniri, çift taraflı keside dispne.',
        firstVsGold: 'A. thyroidea superior komşusu: N. laryngeus superior ramus externus (M. cricothyroideus - tiz ses) • A. thyroidea inferior komşusu: N. laryngeus recurrens.',
        pearl: 'Tiroidektomide A. thyroidea inferior bağlanırken N. laryngeus recurrens; A. thyroidea superior bağlanırken N. laryngeus superior yaralanır.',
        trueStatement: 'Nervus laryngeus recurrens, a. thyroidea inferior ile yakın komşuluk gösterir ve m. cricothyroideus hariç tüm larinks kaslarını innerve eder.',
        falseStatement: 'Larinksin vokal kordlarını açan (abdüktör) tek kası m. cricothyroideus olup n. glossopharyngeus tarafından uyarılır.',
        falseHighlight: 'm. cricothyroideus olup n. glossopharyngeus tarafından',
      },
    ],
  },
  // =========================================================================
  // 6. FİZYOLOJİ
  // =========================================================================
  {
    branchId: 'fizyoloji',
    subTopic: 'Kardiyovasküler, Renal, Solunum ve Endokrin Fizyoloji Mekanizmaları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'İzovolümetrik Gevşeme — Aort/Pulmoner Kapak Kapanması ve S2 Sesi',
        patientVignette:
          'Kardiyak siklus Wiggers diyagramında ventrikül basıncının aort basıncının altına düşmesiyle semilunar (aort ve pulmoner) kapakların kapandığı, S2 kalp sesinin duyulduğu ve AV kapaklar henüz açılmadan ventrikül hacminin sabit kaldığı evre inceleniyor.',
        clues: ['semilunar (aort ve pulmoner) kapakların kapandığı', 'S2 kalp sesinin duyulduğu', 'ventrikül hacminin sabit kaldığı'],
        questionPrompt: 'Kardiyak siklusta tüm kapakların kapalı olduğu ve sol koroner arter kan akımının zirve yaptığı bu evre hangisidir?',
        mechanism:
          'Semilunar kapakların kapanması (S2 sesi) ile İzovolümetrik Gevşeme başlar. Bu evrede tüm kapaklar kapalıdır, hacim değişmez, ventrikül basıncı hızla düşer ve sol ventrikül miyokardının koroner perfüzyonu diyastol başında maksimuma ulaşır.',
        whenCorrectNote: 'S2 sesi ile başlar, tüm kapaklar kapalıdır, ventrikül hacmi EN DÜŞÜK (ESV) düzeyde sabittir.',
        firstVsGold: 'İzovolümetrik Kasılma: S1 (AV kapak kapanması) ile başlar, hacim EDV • İzovolümetrik Gevşeme: S2 (Semilunar kapanması) ile başlar, hacim ESV.',
        pearl: 'Kardiyak siklusta tüm kapakların kapalı olduğu iki evre: İzovolümetrik Kasılma (S1 sonrası) ve İzovolümetrik Gevşeme (S2 sonrası).',
        trueStatement: 'İzovolümetrik gevşeme evresi semilunar kapakların kapanmasıyla (S2 sesi) başlar ve bu evrede tüm kalp kapakları kapalıdır.',
        falseStatement: 'İzovolümetrik gevşeme evresinde mitral kapak açıktır ve ventriküle hızlı kan doluşu gerçekleşir.',
        falseHighlight: 'mitral kapak açıktır ve ventriküle hızlı kan doluşu',
      },
      {
        entityName: 'Proksimal Tübül — Glukoz, Aminoasit ve Bikarbonatın Tamamına Yakın Emilimi',
        patientVignette:
          'Böbrek nefronunda glomerüler filtrata geçen glukoz ve aminoasitlerin SGLT2/SGLT1 aracılığıyla %100’ünün, filtrelenen su, sodyum, potasyum ve bikarbonatın ise yaklaşık %65-85’inin izoosmotik olarak geri emildiği segment inceleniyor.',
        clues: ['glukoz ve aminoasitlerin', '%100’ünün', 'izoosmotik olarak geri emildiği'],
        questionPrompt: 'Tübüler sıvının plazma ile izotonik kaldığı ve parathormonun fosfat emilimini inhibe ettiği bu nefron bölümü hangisidir?',
        mechanism:
          'Proksimal tübül fırçamsı kenara ve yoğun karbonik anhidraz aktivitesine sahiptir. Glukoz ve aminoasitlerin %100’ü, HCO3’ün %85’i, Na ve suyun %65’i burada izoosmotik emilir; tübül sonu ozmolarite değişmez (~300 mOsm/L).',
        whenCorrectNote: 'Glukoz ve aminoasitlerin %100 emilimi, izoosmotik geri emilim, karbonik anhidraz inhibitörleri ve SGLT2 inhibitörlerinin etki yeri.',
        firstVsGold: 'İzoosmotik segment: Proksimal tübül • Dilüe edici (hipotonik) segment: Henle çıkan kalın kolu (suya geçirgen değil).',
        pearl: 'Glukoz ve aminoasitlerin %100’ü Proksimal Tübülden emilir; buradaki emilim izoosmotiktir (ozmolarite 300 mOsm/L kalır).',
        trueStatement: 'Proksimal tübülde glukoz ve aminoasitlerin tamamı, su ve sodyumun ise yaklaşık %65’i izoosmotik olarak geri emilir.',
        falseStatement: 'Glukozun tamamı distal kıvrımlı tübülden aldosteron etkisiyle geri emilir ve sıvı hipertonikleşir.',
        falseHighlight: 'distal kıvrımlı tübülden aldosteron etkisiyle geri emilir',
      },
      {
        entityName: 'Oksijen-Hemoglobin Eğrisinin Sağa Kayması (Bohr Etkisi & 2,3-BPG Artışı)',
        patientVignette:
          'Yoğun egzersiz yapan veya yüksek irtifaya çıkan bir bireyde doku düzeyinde PCO2 artışı, H+ artışı (asidoz), sıcaklık artışı ve eritrosit içi 2,3-bisfosfogliserat (2,3-BPG) artışı meydana geliyor.',
        clues: ['PCO2 artışı', 'asidoz', 'sıcaklık artışı', '2,3-BPG artışı'],
        questionPrompt: 'Bu faktörlerin Oksijen-Hemoglobin disosiasyon eğrisi ve P50 değeri üzerindeki etkisi aşağıdakilerden hangisidir?',
        mechanism:
          'Asidoz (düşük pH), hiperkapni (Bohr etkisi), ateş ve 2,3-BPG artışı hemoglobinin oksijene afinitesini azaltır; eğri SAĞA kayar, P50 değeri yükselir ve dokulara oksijen bırakılması kolaylaşır.',
        whenCorrectNote: 'Eğri sağa kayar, P50 artar, O2 afinitesi azalır ve dokulara O2 sunumu kolaylaşır.',
        firstVsGold: 'Sağa Kaydıranlar (Dokuya O2 verir): CADET, face RIGHT! (CO2, Acid, 2,3-DPG, Exercise, Temp) • Sola Kaydıranlar: HbF, CO zehirlenmesi, Alkaloz, Soğuk.',
        pearl: 'CO2, H+, Sıcaklık ve 2,3-BPG artışı O2-Hb eğrisini SAĞA kaydırır (P50 artar, dokuya O2 bırakılması kolaylaşır).',
        trueStatement: 'Asidoz, hiperkapni, sıcaklık artışı ve 2,3-BPG artışı oksijen-hemoglobin eğrisini sağa kaydırarak dokulara oksijen verilmesini kolaylaştırır.',
        falseStatement: 'Fetal hemoglobin (HbF) ve karbonmonoksit (CO) zehirlenmesi oksijen-hemoglobin eğrisini sağa kaydırarak P50 değerini artırır.',
        falseHighlight: 'oksijen-hemoglobin eğrisini sağa kaydırarak P50 değerini artırır',
      },
      {
        entityName: 'Kas İğciği (Muscle Spindle) — Gerilme Refleksi ve Uzunluk Sensörü',
        patientVignette:
          'Patella tendonuna refleks çekici ile vurulduğunda kuadriseps kasının uzama miktarını ve hızını algılayarak Ia aferent liflerle omurilikteki alfa motor nöronları monosinaptik olarak uyaran ve kası kasılmaya yönlendiren reseptör inceleniyor.',
        clues: ['uzama miktarını ve hızını algılayarak', 'Ia aferent liflerle', 'monosinaptik'],
        questionPrompt: 'İntrafuzal liflerden oluşan ve gama motor nöronlarla duyarlılığı ayarlanan bu proprioseptif reseptör hangisidir?',
        mechanism:
          'Kas iğciği (muscle spindle) ekstrafuzal liflere paralel yerleşmiştir; kasın BOYUNU ve uzama hızını algılar (monosinaptik derin tendon refleksi). Golgi tendon organı ise seri yerleşmiştir ve Ib lifleriyle kas GERİMİNİ/KUVVETİNİ algılar.',
        whenCorrectNote: 'Kasın boyunu/uzamasını algılayan, Ia aferent ve gama motor nöronla çalışan monosinaptik gerilme refleksi reseptörü.',
        firstVsGold: 'Kas İğciği: Kas boyunu/uzunluğunu algılar (Ia aferent, monosinaptik) • Golgi Tendon Organı: Kas gerimini/kuvvetini algılar (Ib aferent, disinaptik).',
        pearl: 'Kas İğciği kasın BOYUNU (uzunluğunu), Golgi Tendon Organı ise kasın GERİMİNİ (kuvvetini) algılar.',
        trueStatement: 'Kas iğciği kasın uzunluğunu ve uzama hızını algılayarak Ia aferent lifler aracılığıyla monosinaptik gerilme refleksini başlatır.',
        falseStatement: 'Kas iğciği tendon içinde seri olarak yerleşmiştir ve yalnızca aşırı kasılma kuvvetini algılayarak kası gevşetir.',
        falseHighlight: 'tendon içinde seri olarak yerleşmiştir ve yalnızca aşırı kasılma kuvvetini',
      },
      {
        entityName: 'Tip II Alveoler Pnömosit — Sürfaktan Sentezi ve Lameller Cisimcikler',
        patientVignette:
          '28. gebelik haftasında prematüre doğan bebekte takipne, interkostal çekilmeler ve akciğer grafisinde buzlu cam görünümü (Yenidoğanın Respiratuvar Distres Sendromu) gelişiyor. Alveol yüzey gerilimini düşüren dipalmitoilfosfatidilkolin (lesitin) eksikliği saptanıyor.',
        clues: ['prematüre', 'buzlu cam görünümü', 'yüzey gerilimini düşüren', 'dipalmitoilfosfatidilkolin (lesitin)'],
        questionPrompt: 'Sürfaktan sentezleyen ve aynı zamanda hasar sonrası Tip I pnömositlere dönüşebilen kök hücre karakterli hücre hangisidir?',
        mechanism:
          'Tip II pnömositler kübik şekillidir, sitoplazmalarında lameller cisimcikler içerir, sürfaktan (başlıca dipalmitoilfosfatidilkolin) sentezleyerek Laplace yasasına göre küçük alveollerin kollapsını önler ve alveol epitelinin rejenerasyonunu sağlar.',
        whenCorrectNote: 'Sürfaktan (dipalmitoilfosfatidilkolin) sentezi, lameller cisimcikler ve Tip I pnömosit rejenerasyonu.',
        firstVsGold: 'Sürfaktan Sentezini Artıranlar: Kortizol ve Tiroid hormonları • Sürfaktan Sentezini Geciktiren (RDS riskini artıran): İnsülin (Diyabetik anne bebeği).',
        pearl: 'Sürfaktan (Dipalmitoilfosfatidilkolin) Tip II pnömositlerdeki lameller cisimciklerde sentezlenir; kortizol sentezi hızlandırır, insülin geciktirir.',
        trueStatement: 'Tip II pnömositler lameller cisimciklerinde sürfaktan sentezler ve alveol hasarında çoğalarak Tip I pnömositleri yeniler.',
        falseStatement: 'Sürfaktan Tip I yassı pnömositler tarafından sentezlenir ve hiperinsülinemi sürfaktan olgunlaşmasını hızlandırır.',
        falseHighlight: 'Tip I yassı pnömositler tarafından sentezlenir ve hiperinsülinemi sürfaktan olgunlaşmasını hızlandırır',
      },
    ],
  },
  // =========================================================================
  // 7. HİSTOLOJİ VE EMBRİYOLOJİ
  // =========================================================================
  {
    branchId: 'histoloji',
    subTopic: 'Farengeal Arkus/Kese Türevleri, Nöral Krest ve Hücre Bağlantıları',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: '3. Farengeal Kese (Pouch) — Timus ve İnferior Paratiroid Bezleri',
        patientVignette:
          'Yenidoğan bir bebekte hipokalsemik nöbetler, konjenital kalp anomalisi (trunkus arteriozus), yarık damak ve T-lenfosit yetmezliği saptanıyor (DiGeorge Sendromu / 22q11.2 delesyonu). Göğüs grafisinde timus gölgesi izlenmiyor.',
        clues: ['hipokalsemik nöbetler', 'trunkus arteriozus', 'timus gölgesi izlenmiyor', 'DiGeorge Sendromu'],
        questionPrompt: 'Timus ve inferior paratiroid bezlerinin embriyolojik olarak köken aldığı farengeal yapı aşağıdakilerden hangisidir?',
        mechanism:
          '3. farengeal keseden (pouch) Timus ve İnferior Paratiroid bezleri; 4. farengeal keseden ise Süperior Paratiroid bezleri ve Ultimobrankiyal cisim gelişir. DiGeorge sendromunda 3. ve 4. farengeal kese gelişim kusuru vardır.',
        whenCorrectNote: '3. Farengeal Kese = Timus + İnferior Paratiroid (DiGeorge sendromunda agenezisi görülür).',
        firstVsGold: '3. Farengeal Kese: Timus + İnferior Paratiroid • 4. Farengeal Kese: Süperior Paratiroid + Ultimobrankiyal cisim (Parafolliküler C hücresi nöral krest kökenlidir).',
        pearl: '3. Farengeal Keseden Timus ile birlikte İNFERİOR paratiroid; 4. Farengeal Keseden ise SÜPERİOR paratiroid gelişir.',
        trueStatement: 'Embriyolojik dönemde 3. farengeal keseden (pouch) timus ve inferior paratiroid bezleri gelişir.',
        falseStatement: 'Timus ve inferior paratiroid bezleri 1. farengeal yarıktan (yarık/cleft) köken alır.',
        falseHighlight: '1. farengeal yarıktan (yarık/cleft) köken alır',
      },
      {
        entityName: 'Nöral Krest (Crista Neuralis) — Adrenal Medulla, Melanosit ve Schwann Hücresi',
        patientVignette:
          'Embriyolojik gelişimde nöral tüp kapanırken nöroektodermden ayrılıp göç ederek periferik otonom/duyu gangliyonlarını, Schwann hücrelerini, melanositleri, adrenal medulla kromaffin hücrelerini, odontoblastları ve aortikopulmoner septumu oluşturan yapı inceleniyor.',
        clues: ['otonom/duyu gangliyonlarını', 'Schwann hücrelerini', 'adrenal medulla kromaffin', 'aortikopulmoner septumu'],
        questionPrompt: 'Dördüncü germ yaprağı olarak da adlandırılan bu embriyolojik köken aşağıdakilerden hangisidir?',
        mechanism:
          'Nöral krest hücreleri göç yeteneği yüksek multipotent hücrelerdir. Hirschsprung hastalığı (enterik pleksus göç kusuru), feokromositoma, melanom, nöroblastom ve konotrunkal kalp anomalileri (Fallot, Trunkus) nöral krest patolojileridir.',
        whenCorrectNote: 'Melanosit, Schwann hücresi, adrenal medulla, enterik gangliyonlar (Meissner/Auerbach), pia-araknoid mater ve aortikopulmoner septum.',
        firstVsGold: 'Schwann hücresi & Pia-Araknoid: Nöral krest • Oligodendrosit & Astrosit: Nöral tüp (Nöroektoderm) • Mikroglia ve Dura mater: Mezodorm.',
        pearl: 'Schwann hücresi, melanosit, adrenal medulla, odontoblast ve aortikopulmoner septum Nöral Krest kökenlidir.',
        trueStatement: 'Adrenal medulla kromaffin hücreleri, melanositler, Schwann hücreleri ve aortikopulmoner septum nöral krest kökenlidir.',
        falseStatement: 'Merkezi sinir sistemini miyelinleyen oligodendrositler ve fagositik mikroglia hücreleri nöral krestten gelişir.',
        falseHighlight: 'oligodendrositler ve fagositik mikroglia hücreleri nöral krestten',
      },
      {
        entityName: 'Hemidesmozom — İntegrin (Alfa6-Beta4) ve Büllöz Pemfigoid',
        patientVignette:
          'Epitel hücresinin bazal membranındaki bazal laminaya tutunmasını sağlayan, hücre iskeletinin ara filamanlarını (keratin) laminine bağlayan ve otoimmün yıkımında subepidermal gergin büllerle seyreden Büllöz Pemfigoid gelişen bağlantı inceleniyor.',
        clues: ['bazal laminaya tutunmasını', 'ara filamanlarını (keratin)', 'subepidermal gergin büllerle', 'Büllöz Pemfigoid'],
        questionPrompt: 'Transmembran proteini İntegrin olan ve epiteli bazal laminaya bağlayan bu bağlantı kompleksi hangisidir?',
        mechanism:
          'Desmozom (Macula adherens) iki epitel hücresini birbirine bağlar (Kadherin: Desmoglein -> Pemfigus vulgaris, akantoliz). Hemidesmozom ise epiteli bazal laminaya bağlar (İntegrin ve BP180/BP230 -> Büllöz pemfigoid).',
        whenCorrectNote: 'Epiteli bazal laminaya bağlar, ara filaman + İntegrin içerir, patolojisinde Büllöz Pemfigoid görülür.',
        firstVsGold: 'Desmozom (Hücre-Hücre, Desmoglein, Pemfigus vulgaris) vs. Hemidesmozom (Hücre-Bazal lamina, İntegrin, Büllöz pemfigoid).',
        pearl: 'Desmozomda Kadherin (Desmoglein - Pemfigus vulgaris), Hemidesmozomda ise İntegrin (Büllöz pemfigoid) bulunur.',
        trueStatement: 'Hemidesmozomlar ara filamanları bazal laminaya bağlar, transmembran proteini integrindir ve hasarında büllöz pemfigoid gelişir.',
        falseStatement: 'Hemidesmozomlar iki komşu epitel hücresini birbirine bağlar ve konneksin proteinlerinden oluşur.',
        falseHighlight: 'iki komşu epitel hücresini birbirine bağlar ve konneksin',
      },
      {
        entityName: 'Mezenterik/Ürogenital Mezodorm (Ara Mezodorm) — Böbrek ve Gonad Korteksi',
        patientVignette:
          'Embriyolojik gelişimde pronefroz, mezonefroz ve kalıcı böbreği oluşturan metanefrozun (üreter tomurcuğu + metanefrik blastem) yanı sıra gonadların ve adrenal korteksin geliştiği mezoderm bölümü inceleniyor.',
        clues: ['metanefrozun', 'üreter tomurcuğu', 'gonadların ve adrenal korteksin'],
        questionPrompt: 'Ürogenital sistemin köken aldığı bu mezoderm bölümü aşağıdakilerden hangisidir?',
        mechanism:
          'Paraksiyel mezodermden somitler (aksiyel iskelet, çizgili kas, dermis); Ara (intermediate) mezodermden ürogenital sistem (böbrekler, üreter, gonadlar); Lateral plak mezoderminden ise seröz zarlar ve kalp-damar sistemi gelişir.',
        whenCorrectNote: 'Ara (İntermediate) mezoderm = Böbrekler (metanefroz), üreter, gonadlar ve Müller/Wolff kanalları.',
        firstVsGold: 'Kalıcı Böbrek (Metanefroz): Üreter tomurcuğu (toplayıcı sistem) + Metanefrik blastem (nefronlar) etkileşimiyle Ara Mezodermden gelişir.',
        pearl: 'Böbrekler, üreter ve gonadlar Ara (İntermediate) Mezodermden gelişir; mesane epiteli ise Endoderm (ürogenital sinüs) kökenlidir.',
        trueStatement: 'Böbrekler (metanefroz), üreter ve gonadlar embriyolojik olarak ara (intermediate) mezodermden gelişir.',
        falseStatement: 'Kalıcı böbrek nefronları nöroektodermden, böbrek toplayıcı kanalları ise paraksiyel mezodermden gelişir.',
        falseHighlight: 'nöroektodermden, böbrek toplayıcı kanalları ise paraksiyel mezodermden',
      },
      {
        entityName: 'Sertoli Hücresi — Kan-Testis Bariyeri ve Anti-Müllerian Hormon (AMH)',
        patientVignette:
          'Seminifer tübül içinde bazalden lümene uzanan, FSH reseptörü taşıyan, aromataz enzimiyle testosteronu östradiole çeviren, inhibin B ve Androjen Bağlayıcı Protein (ABP) salgılayan ve sıkı bağlantılarıyla (zonula occludens) kan-testis bariyerini kuran hücre inceleniyor.',
        clues: ['FSH reseptörü', 'aromataz', 'inhibin B', 'kan-testis bariyerini kuran'],
        questionPrompt: 'Embriyolojik dönemde Anti-Müllerian Hormon (AMH) salgılayarak iç genitalde Müller kanalını gerileten bu hücre hangisidir?',
        mechanism:
          'Sertoli hücreleri FSH uyarısıyla ABP ve İnhibin B salgılar, kan-testis bariyerini (zonula occludens) oluşturarak haploid germ hücrelerini otoimmün saldırıdan korur ve fetüste AMH salgılayarak tuba-uterus gelişimini baskılar.',
        whenCorrectNote: 'FSH hedefi, Kan-testis bariyeri (zonula occludens), AMH, İnhibin B, ABP ve aromataz sentezi.',
        firstVsGold: 'Sertoli Hücresi: FSH uyarısı, tübül içi, AMH & ABP & İnhibin B • Leydig Hücresi: LH uyarısı, interstisyum, Testosteron sentezi (Reinke kristalleri).',
        pearl: 'Kan-testis bariyerini Sertoli hücreleri arasındaki Zonula Occludens (sıkı bağlantılar) oluşturur; Leydig hücrelerinde ise Reinke kristalleri bulunur.',
        trueStatement: 'Sertoli hücreleri arasındaki zonula occludens bağlantıları kan-testis bariyerini oluşturur ve bu hücreler AMH ile inhibin B salgılar.',
        falseStatement: 'Kan-testis bariyerini kapiller endotel hücreleri ve Leydig hücreleri arasındaki gap junctionlar oluşturur.',
        falseHighlight: 'kapiller endotel hücreleri ve Leydig hücreleri arasındaki gap junctionlar',
      },
    ],
  },
];
