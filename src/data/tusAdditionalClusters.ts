import { DifferentialClusterSeed } from './tusTypes';

export const ADDITIONAL_TUS_CLUSTERS: DifferentialClusterSeed[] = [
  // 1. BİYOKİMYA: Glikojen Depo Hastalıkları
  {
    branchId: 'biyokimya',
    subTopic: 'Glikojen Depo Hastalıkları (GSD)',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Von Gierke (Tip I — Glukoz-6-Fosfataz eksikliği)',
        patientVignette:
          '4 aylık bebekte açlıkta ağır hipoglisemik nöbet, masif hepatomegali, taş bebek yüzü, laktik asidoz, hiperürisemi ve hiperlipidemi saptanıyor; glukagon ve adrenalin testine kan şekeri yanıtı alınamıyor.',
        clues: ['ağır hipoglisemik nöbet', 'laktik asidoz, hiperürisemi ve hiperlipidemi', 'glukagon ve adrenalin testine kan şekeri yanıtı alınamıyor'],
        questionPrompt: 'Bu hastada en olası glikojen depo hastalığı ve eksik enzim aşağıdakilerden hangisidir?',
        mechanism:
          'Glukoz-6-fosfataz (Tip Ia) veya translokaz (Tip Ib - nötropeni eşlik eder) eksikliğinde karaciğerden serbest glukoz kana verilemez. Ağır açlık hipoglisemisi, laktik asidoz, hiperürisemi ve hiperlipidemi dörtlüsü karakteristiktir.',
        whenCorrectNote: 'Ağır hipoglisemi + laktik asidoz + hiperürisemi + hiperlipidemi (Glukoz-6-fosfataz eksikliği).',
        firstVsGold: 'Tip Ia: Glukoz-6-fosfataz eksikliği • Tip Ib: Glukoz-6-fosfat translokaz eksikliği (Tekrarlayan bakteriyel enfeksiyon ve nötropeni eşlik eder).',
        pearl: 'Von Gierke (Tip I) hastalığında ağır hipoglisemi, laktik asidoz, hiperürisemi ve hiperlipidemi görülür; kas tutulumu yoktur.',
        trueStatement: 'Von Gierke hastalığında (Tip I GSD) glukoz-6-fosfataz eksikliği sonucu ağır açlık hipoglisemisi, laktik asidoz ve hiperürisemi gelişir.',
        falseStatement: 'Von Gierke hastalığında glukagon verildiğinde kan şekeri hızla normalin iki katına çıkar.',
        falseHighlight: 'glukagon verildiğinde kan şekeri hızla normalin iki katına çıkar',
      },
      {
        entityName: 'Pompe Hastalığı (Tip II — Lizozomal Alfa-1,4-Glukozidaz eksikliği)',
        patientVignette:
          '3 aylık bebekte ağır jeneralize hipotoni ("gevşek bebek"), makroglossi, masif kardiyomegali (EKG’de dev QRS ve kısa PR) ve kalp yetmezliği saptanıyor; kan şekeri tamamen normal bulunuyor.',
        clues: ['gevşek bebek', 'masif kardiyomegali', 'kan şekeri tamamen normal'],
        questionPrompt: 'Lizozomal olmasıyla diğer tüm glikojen depo hastalıklarından ayrılan bu tablo hangisidir?',
        mechanism:
          'Pompe (Tip II) hastalığında lizozomal Alfa-1,4-glukozidaz (Asit maltaz) eksiktir. Hem glikojen depo hastalığı hem de lizozomal depo hastalığı olan TEK hastalıktır. Masif kardiyomegali ve hipotoni yapar, hipoglisemi yapmaz.',
        whenCorrectNote: 'Lizozomal asit maltaz eksikliği, masif kardiyomegali + hipotoni (gevşek bebek), normoglisemi.',
        firstVsGold: 'Kardiyomegali Yapan Tek Lizozomal GSD: Pompe (Tip II - Asit maltaz eksikliği) • Tedavi: Rekombinant Alfa-glukozidaz.',
        pearl: 'Pompe hastalığı (Tip II) lizozomal olan TEK glikojen depo hastalığıdır; masif kardiyomegali ve hipotoni yapar.',
        trueStatement: 'Pompe hastalığı (Tip II GSD) lizozomal asit maltaz eksikliği ile gelişir ve masif kardiyomegali ile hipotoniye yol açar.',
        falseStatement: 'Pompe hastalığı sitozolik bir enzim eksikliği olup kalbi kesinlikle tutmaz.',
        falseHighlight: 'sitozolik bir enzim eksikliği olup kalbi kesinlikle tutmaz',
      },
      {
        entityName: 'Cori Hastalığı (Tip III — Dal Yıkıcı Enzim / Debranching eksikliği)',
        patientVignette:
          'Çocuk hastada hepatomegali, açlık hipoglisemisi, miyopati (CPK yüksekliği) ve dokularda kısa dış dallara sahip anormal yapılı "limit dekstrin" birikimi saptanıyor; laktat ve ürik asit düzeyleri normal bulunuyor.',
        clues: ['miyopati (CPK yüksekliği)', 'limit dekstrin', 'laktat ve ürik asit düzeyleri normal'],
        questionPrompt: 'Hem karaciğeri hem çizgili kası tutan ve "limit dekstrinozis" olarak bilinen bu hastalık hangisidir?',
        mechanism:
          'Cori (Tip III) hastalığında amilo-1,6-glukozidaz (dal yıkıcı enzim) eksiktir; dokularda kısa dallı Limit Dekstrin birikir. Von Gierke’den farklı olarak kas tutulumu (CPK artışı) VARDIR, ancak laktat ve ürik asit NORMALDİR.',
        whenCorrectNote: 'Dal yıkıcı enzim eksikliği, Limit dekstrin birikimi, hepatomegali + miyopati, normal laktat.',
        firstVsGold: 'Limit Dekstrin Birikimi (Kısa dallı): Cori (Tip III - Dal yıkıcı) • Amilopektin Birikimi (Dalsız uzun zincir): Andersen (Tip IV - Dal yapıcı).',
        pearl: 'Cori hastalığında (Tip III) dal yıkıcı enzim eksiktir, Limit Dekstrin birikir ve laktat düzeyi normaldir.',
        trueStatement: 'Cori hastalığında (Tip III GSD) dal yıkıcı enzim eksikliğine bağlı limit dekstrin birikir; laktat ve ürik asit normaldir.',
        falseStatement: 'Cori hastalığında dal yapıcı enzim eksiktir ve yaşamın ilk yılında karaciğer sirozu ile ölüm görülür.',
        falseHighlight: 'dal yapıcı enzim eksiktir ve yaşamın ilk yılında karaciğer sirozu',
      },
      {
        entityName: 'McArdle Hastalığı (Tip V — Kas Glikojen Fosforilaz eksikliği)',
        patientVignette:
          '21 yaşında erkek hasta ağır egzersiz sırasında başlayan ağrılı kas krampları, miyoglobinüri (koyu renkli idrar) ve egzersiz sonrası venöz kanda laktat artışının olmaması ancak dinlenince egzersize devam edebilmesi ("ikinci nefes / second wind" fenomeni) ile başvuruyor.',
        clues: ['egzersiz sırasında başlayan ağrılı kas krampları', 'miyoglobinüri', 'laktat artışının olmaması', 'ikinci nefes / second wind'],
        questionPrompt: 'Karaciğer tutulumu ve hipoglisemi olmaksızın yalnız iskelet kasını tutan bu hastalık hangisidir?',
        mechanism:
          'McArdle (Tip V) hastalığında kas glikojen fosforilaz (miyofosforilaz) eksiktir. Egzersizde kas glikojeni yıkılamadığı için venöz laktat yükselmez (düz laktat eğrisi), rabdomiyoliz ve miyoglobinüri gelişir; yağ asitleri devreye girince "ikinci nefes" fenomeni görülür.',
        whenCorrectNote: 'Kas glikojen fosforilaz eksikliği, egzersiz intoleransı, düz venöz laktat eğrisi ve ikinci nefes (second wind) fenomeni.',
        firstVsGold: 'Kas Glikojen Fosforilaz Eksikliği: McArdle (Tip V) • Karaciğer Glikojen Fosforilaz Eksikliği: Hers (Tip VI).',
        pearl: 'McArdle (Tip V) hastalığında kas fosforilazı eksiktir; egzersizle venöz laktat yükselmez ve "ikinci nefes (second wind)" fenomeni tipiktir.',
        trueStatement: 'McArdle hastalığında (Tip V GSD) kas glikojen fosforilaz eksikliği vardır; egzersiz sonrası venöz laktat yükselmez ve ikinci nefes fenomeni görülür.',
        falseStatement: 'McArdle hastalığında açlıkta ağır hipoglisemi ve masif hepatosplenomegali en belirgin bulgudur.',
        falseHighlight: 'açlıkta ağır hipoglisemi ve masif hepatosplenomegali en belirgin',
      },
      {
        entityName: 'Andersen Hastalığı (Tip IV — Dal Yapıcı Enzim eksikliği)',
        patientVignette:
          'Süt çocuğunda ilerleyici hepatosplenomegali, asit, erken yaşta mikronodüler karaciğer sirozu ve karaciğer biyopsisinde PAS pozitif, diastaza dirençli dalsız "amilopektin benzeri" cisimcikler saptanıyor.',
        clues: ['erken yaşta mikronodüler karaciğer sirozu', 'amilopektin benzeri'],
        questionPrompt: 'Glikojen depo hastalıkları içinde en erken karaciğer sirozuna yol açan bu tablo hangisidir?',
        mechanism:
          'Andersen (Tip IV) hastalığında glikozil-4,6-transferaz (dal yapıcı / branching enzim) eksiktir. Çözünürlüğü düşük, dalsız uzun zincirli amilopektin birikir; yabancı cisim reaksiyonuyla erken çocuklukta karaciğer sirozu ve karaciğer yetmezliği yapar.',
        whenCorrectNote: 'Dal yapıcı (branching) enzim eksikliği, amilopektin birikimi ve erken çocuklukta karaciğer sirozu.',
        firstVsGold: 'Erken Çocuklukta Siroz Yapan GSD: Andersen (Tip IV - Dal yapıcı enzim eksikliği, Amilopektinozis).',
        pearl: 'Andersen hastalığında (Tip IV) dal yapıcı enzim eksiktir, dokularda amilopektin birikir ve erken yaşta SİROZ gelişir.',
        trueStatement: 'Andersen hastalığında (Tip IV GSD) dal yapıcı enzim eksikliği sonucu dokularda amilopektin birikir ve erken çocuklukta karaciğer sirozu gelişir.',
        falseStatement: 'Andersen hastalığı glikojen depo hastalıkları içinde en selim seyirli olan ve yalnızca erişkin kas dokusunu tutan tiptir.',
        falseHighlight: 'en selim seyirli olan ve yalnızca erişkin kas dokusunu tutan',
      },
    ],
  },
  // 2. MİKROBİYOLOJİ: İmmünoloji, Sitokinler ve Hipersensitivite
  {
    branchId: 'mikrobiyoloji',
    subTopic: 'İmmünoloji, İmmünglobulinler ve Kompleman Eksiklikleri',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'C5-C9 (Membran Atak Kompleksi) Eksikliği — Tekrarlayan Neisseria Enfeksiyonları',
        patientVignette:
          '19 yaşında üniversite öğrencisi üçüncü kez meningokoksemi ve Neisseria meningitidis menenjiti geçiriyor; serum immünglobulin düzeyleri ve fagositoz testleri tamamen normal saptanıyor.',
        clues: ['üçüncü kez meningokoksemi', 'Neisseria meningitidis'],
        questionPrompt: 'Tekrarlayan dissemine Neisseria (meningokok ve gonokok) enfeksiyonlarına zemin hazırlayan immün defekt hangisidir?',
        mechanism:
          'Komplemanın terminal bileşenleri olan C5b-C9 (Membran Atak Kompleksi - MAC) veya alternatif yol faktörü Properdin eksikliğinde Gram negatif diplokok olan Neisseria türlerinin (N. meningitidis, N. gonorrhoeae) serum bakterisidal lizisi gerçekleşemez.',
        whenCorrectNote: 'C5-C9 (MAC) veya Properdin eksikliği = Tekrarlayan Neisseria (meningokok/gonokok) enfeksiyonları.',
        firstVsGold: 'En Sık Kompleman Eksikliği: C2 eksikliği • SLE (Lupus) Benzeri Tablo En Sık: C1q, C4, C2 eksikliği • Neisseria Enfeksiyonu: C5-C9 (MAC) eksikliği.',
        pearl: 'C5-C9 (Membran Atak Kompleksi) eksikliğinde tekrarlayan Neisseria (meningokok ve gonokok) enfeksiyonları görülür.',
        trueStatement: 'Kompleman C5-C9 (Membran Atak Kompleksi) veya properdin eksikliği olan bireylerde tekrarlayan Neisseria enfeksiyonlarına yatkınlık vardır.',
        falseStatement: 'C5-C9 eksikliğinde yalnızca tekrarlayan viral hepatitler ve herpetik ensefalit görülür.',
        falseHighlight: 'yalnızca tekrarlayan viral hepatitler ve herpetik ensefalit',
      },
      {
        entityName: 'C1 Esteraz İnhibitör Eksikliği — Herediter Anjiyoödem, Düşük C4 ve Bradikinin Artışı',
        patientVignette:
          'Diş çekimi sonrası dudaklarda, dilde ve larinkste kaşıntısız, ürtikersiz, gode bırakmayan akut ödem gelişen hastada antihistaminik ve steroid tedavisine yanıt alınamıyor; serum C4 düzeyi çok düşük saptanıyor.',
        clues: ['kaşıntısız, ürtikersiz', 'antihistaminik ve steroid tedavisine yanıt alınamıyor', 'C4 düzeyi çok düşük'],
        questionPrompt: 'Bradikinin artışıyla gelişen bu tabloda eksik olan protein ve tarama testi aşağıdakilerden hangisidir?',
        mechanism:
          'C1 esteraz inhibitör eksikliğinde (Herediter Anjiyoödem) kallikrein kontrolsüz aktifleşerek aşırı BRADİKİNİN üretir ve C1, C4 ile C2’yi tüketir. Ürtiker ve kaşıntı YOKTUR; taramada serum C4 düzeyi düşüktür. Akut atakta C1-INH konsantresi veya bradikinin B2 reseptör antagonisti İkatibant verilir.',
        whenCorrectNote: 'Kaşıntısız/ürtikersiz mukoza ödemi, bradikinin artışı, taramada C4 düşüklüğü, tedavide C1-INH veya İkatibant.',
        firstVsGold: 'En Duyarlı Tarama Testi: Serum C4 düşüklüğü (C3 normaldir!) • Kontrendike İlaç: ACE inhibitörleri (Bradikinini daha da artırır!).',
        pearl: 'Herediter anjiyoödemde C1 esteraz inhibitörü eksiktir, mediyatörü Bradikinindir (ürtikersizdir) ve taramada C4 düzeyi düşüktür.',
        trueStatement: 'Herediter anjiyoödemde C1 esteraz inhibitör eksikliğine bağlı bradikinin artışı ve serum C4 düşüklüğü görülür; lezyonlara ürtiker eşlik etmez.',
        falseStatement: 'Herediter anjiyoödem histamin deşarjıyla gelişir, yaygın kaşıntılı ürtiker plakları vardır ve C4 düzeyi yüksektir.',
        falseHighlight: 'histamin deşarjıyla gelişir, yaygın kaşıntılı ürtiker plakları vardır ve C4 düzeyi yüksektir',
      },
      {
        entityName: 'IgG (Alt Grup IgG1/IgG3) — Plasentayı Geçen (FcRn) ve Opsonizasyon Yapan Tek İmmünglobulin',
        patientVignette:
          'Yenidoğan bebeği yaşamın ilk aylarında enfeksiyonlardan koruyan, sinsityotrofoblastlardaki neonatal Fc reseptörü (FcRn) aracılığıyla plasentayı geçebilen, yarı ömrü en uzun (21-23 gün) ve serumda en yüksek konsantrasyonda bulunan antikor inceleniyor.',
        clues: ['plasentayı geçebilen', 'yarı ömrü en uzun', 'en yüksek konsantrasyonda'],
        questionPrompt: 'Klasik kompleman yolunu aktive eden ve en güçlü opsonin olan bu immünglobulin hangisidir?',
        mechanism:
          'IgG serumda en fazla bulunan, yarı ömrü en uzun (23 gün) ve plasentadan fetüse geçebilen TEK immünglobulindir (yalnız IgG2 polisakkarit antijenlere karşıdır ve plasentayı en az geçer). Sekonder immün yanıtta baskındır ve opsonizasyon + ADCC yapar.',
        whenCorrectNote: 'Plasentayı geçen tek antikor, serumda en yüksek, yarı ömrü en uzun (23 gün), güçlü opsonin.',
        firstVsGold: 'Plasentayı Geçen Tek Antikor: IgG • Komplemanı En Güçlü Aktive Eden (Pentamer): IgM • Mukozal Salgısal Antikor (Dimer): IgA.',
        pearl: 'Plasentayı geçebilen TEK immünglobulin IgG’dir; komplemanı tek molekülle en güçlü aktive eden ise pentamerik IgM’dir.',
        trueStatement: 'IgG plasentayı geçebilen tek immünglobulin sınıfı olup serumda en yüksek konsantrasyonda bulunur ve yarı ömrü en uzundur.',
        falseStatement: 'Plasentayı en kolay geçen antikor pentamerik yapılı IgM olup yenidoğan kanında IgM bulunması normal fizyolojik durumdur.',
        falseHighlight: 'pentamerik yapılı IgM olup yenidoğan kanında IgM bulunması normal fizyolojik',
      },
      {
        entityName: 'IL-1, IL-6 ve TNF-Alfa — Endojen Pirojenler, Akut Faz Reaktanları ve Septik Şok (Kaşektin)',
        patientVignette:
          'Bakteriyel endotoksin (LPS) uyarısıyla makrofajlardan salgılanan; hipotalamusta PGE2 sentezini artırarak ateş oluşturan, karaciğerden CRP, fibrinojen ve hepsidin (akut faz reaktanları) sentezleten proinflamatuvar sitokin üçlüsü inceleniyor.',
        clues: ['makrofajlardan salgılanan', 'PGE2 sentezini artırarak ateş', 'CRP, fibrinojen ve hepsidin'],
        questionPrompt: 'Septik şok, kaşeksi, ateş ve akut faz yanıtından birincil sorumlu doğal bağışıklık sitokinleri hangileridir?',
        mechanism:
          'IL-1, IL-6 ve TNF-alfa makrofaj kaynaklı temel proinflamatuvar sitokinlerdir: IL-1 ve TNF-alfa hipotalamusta PGE2 üzerinden ateş yapar (endojen pirojen); IL-6 karaciğerden Akut Faz Reaktanlarını (CRP, Fibrinojen, Hepsidin, Serum Amiloid A) en güçlü sentezletir; TNF-alfa ise kaşeksi ve septik şokun en önemli mediyatörüdür.',
        whenCorrectNote: 'Ateş (IL-1, TNF-alfa -> PGE2), Akut faz reaktanı sentezi (IL-6) ve Kaşeksi/Septik şok (TNF-alfa).',
        firstVsGold: 'Akut Faz Reaktanlarını En Güçlü Artıran: IL-6 • Eozinofil Üretimi ve IgA Sentezi: IL-5 • İmmünsüpresif (Anti-inflamatuvar) Sitokinler: IL-10 ve TGF-Beta.',
        pearl: 'Karaciğerden Akut Faz Reaktanlarını (CRP, Hepsidin) en güçlü sentezleten sitokin IL-6; anti-inflamatuvar (frenleyici) sitokinler ise IL-10 ve TGF-Beta’dır.',
        trueStatement: 'IL-1, IL-6 ve TNF-alfa endojen pirojen sitokinler olup özellikle IL-6 karaciğerden akut faz reaktanlarının sentezini en güçlü uyaran sitokindir.',
        falseStatement: 'IL-10 ve TGF-beta en güçlü ateş yapıcı proinflamatuvar sitokinler olup septik şokun ana mediyatörleridir.',
        falseHighlight: 'IL-10 ve TGF-beta en güçlü ateş yapıcı proinflamatuvar sitokinler',
      },
      {
        entityName: 'Kronik Granülomatöz Hastalık (KGH) — NADPH Oksidaz Eksikliği, Katalaz Pozitif Patojenler ve Dihidrorodamin/NBT Testi',
        patientVignette:
          '4 yaşında erkek çocukta S. aureus, Aspergillus, Serratia, Burkholderia ve Nocardia gibi katalaz pozitif mikroorganizmalarla tekrarlayan derin doku apseleri ve granülomlar saptanıyor; nötrofillerde solunumsal patlama (respiratory burst) gerçekleşmiyor.',
        clues: ['katalaz pozitif mikroorganizmalarla', 'tekrarlayan derin doku apseleri', 'solunumsal patlama (respiratory burst) gerçekleşmiyor'],
        questionPrompt: 'Tanısında Nitroblue Tetrazolium (NBT) ve Dihidrorodamin-123 (DHR) akım sitometri testi kullanılan bu fagositoz defekti hangisidir?',
        mechanism:
          'Kronik Granülomatöz Hastalıkta (KGH) fagositlerdeki NADPH Oksidaz (gp91phox) enzimi eksiktir; süperoksit ve hidrojen peroksit (H2O2) üretilemez. Katalaz pozitif bakteriler ve mantarlar (S. aureus, Aspergillus, Pseudomonas, Candida, Serratia, Nocardia) kendi H2O2’lerini parçaladıkları için öldürülemez. Tanıda NBT ve en duyarlı olarak DHR-123 testi kullanılır; profilakside TMP-SMX + İtrakonazol + İnterferon-gama verilir.',
        whenCorrectNote: 'NADPH oksidaz eksikliği, katalaz (+) enfeksiyonlar (S. aureus, Aspergillus), tanı DHR-123 ve NBT testi.',
        firstVsGold: 'Tarama/Kesin Tanı: Dihidrorodamin (DHR-123) akım sitometri ve NBT testi • Profilaksi: TMP-SMX + İtrakonazol + IFN-gama.',
        pearl: 'Kronik Granülomatöz Hastalıkta NADPH oksidaz eksiktir; katalaz (+) enfeksiyonlar görülür ve tanısı DHR-123 / NBT testi ile konur.',
        trueStatement: 'Kronik granülomatöz hastalıkta NADPH oksidaz eksikliği sonucu katalaz pozitif patojenlerle enfeksiyon gelişir; tanıda DHR-123 ve NBT testi kullanılır.',
        falseStatement: 'Kronik granülomatöz hastalıkta miyeloperoksidaz eksikliği vardır ve hastalar yalnızca kapsüllü streptokok enfeksiyonları geçirir.',
        falseHighlight: 'miyeloperoksidaz eksikliği vardır ve hastalar yalnızca kapsüllü streptokok',
      },
    ],
  },
  // 3. PATOLOJİ: Meme, Tiroid ve GİS Patolojisi
  {
    branchId: 'patoloji',
    subTopic: 'Tiroid, Meme ve Gastrointestinal Sistem Tümör Patolojisi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'İnvaziv Lobüler Meme Karsinomu — E-Kadherin Kaybı (CDH1), Hint Dizisi (Single-File) ve Bilateral/Multisentrik Tutulum',
        patientVignette:
          'Meme biyopsisinde tümör hücrelerinin duktus oluşturmadan stromada tek sıra halinde ("Hint dizisi / single-file") ve hedef tahtası şeklinde dizildiği, desmoplazi yapmadığı ve immünohistokimyada E-kadherin ekspresyonunun tamamen kaybolduğu saptanıyor.',
        clues: ['Hint dizisi / single-file', 'E-kadherin ekspresyonunun tamamen kaybolduğu'],
        questionPrompt: 'Periton, retroperiton, leptomeningler ve GİS/overe metastaz yapma eğilimi yüksek olan bu meme kanseri tipi hangisidir?',
        mechanism:
          'İnvaziv Lobüler Karsinomda 16q üzerindeki CDH1 gen mutasyonu sonucu hücreler arası adezyon molekül olan E-KADHERİN kaybolur (taşlı yüzük hücreli diffüz mide kanseri ile aynı gen!). Hücreler kohezyonunu kaybedip "Hint dizisi (single-file)" oluşturur; bilateral ve multisentrik olma olasılığı yüksektir.',
        whenCorrectNote: 'CDH1 (E-kadherin) kaybı, Hint dizisi (single-file) infiltrasyonu, bilateralite ve seröz/GI/meninks metastazı.',
        firstVsGold: 'En Sık Meme Kanseri: İnvaziv Duktal Karsinom (Desmoplazi/sert kitle yapar) • E-Kadherin Kaybı & Hint Dizisi: İnvaziv Lobüler Karsinom.',
        pearl: 'Hem İnvaziv Lobüler Meme Karsinomunda hem de Diffüz (Taşlı Yüzük Hücreli) Mide Kanserinde CDH1 (E-Kadherin) kaybı vardır!',
        trueStatement: 'İnvaziv lobüler meme karsinomunda E-kadherin (CDH1) kaybı ve stromada tek sıra halinde Hint dizisi (single-file) infiltrasyonu karakteristiktir.',
        falseStatement: 'İnvaziv lobüler meme karsinomu yoğun kalsifikasyon ve belirgin desmoplazi yaparak her zaman tek odaklı sert kitle oluşturur.',
        falseHighlight: 'yoğun kalsifikasyon ve belirgin desmoplazi yaparak her zaman tek odaklı',
      },
      {
        entityName: 'Gastrointestinal Stromal Tümör (GİST) — Cajal Hücresi Kökeni, c-KIT (CD117) / DOG1 Pozitifliği ve İmatinib Tedavisi',
        patientVignette:
          '59 yaşında hastada mide duvarı muskularis propriadan kaynaklanan submukozal kitle saptanıyor. Patolojide iğsi hücreler ile CD117 (c-KIT) ve DOG1 pozitifliği gösteriliyor.',
        clues: ['mide duvarı', 'CD117 (c-KIT) ve DOG1 pozitifliği'],
        questionPrompt: 'Pacemaker görevi gören Cajal hücrelerinden kaynaklanan ve hedefe yönelik tedavisinde İmatinib kullanılan bu mezenkimal tümör hangisidir?',
        mechanism:
          'GİST, gastrointestinal sistemin en sık mezenkimal tümörüdür ve en sık MİDE’de yerleşir. İnterstisyel Cajal hücrelerinden köken alır; %85 olguda c-KIT (CD117) veya PDGFRA tirozin kinaz kazanım mutasyonu vardır (en özgül belirteç DOG1 ve CD117’dir). Prognozu tümör çapı ve mitoz sayısı belirler; tedavisinde İMATİNİB kullanılır.',
        whenCorrectNote: 'En sık midede, Cajal hücresi kökeni, c-KIT (CD117) ve DOG1 pozitifliği, tedavide İmatinib.',
        firstVsGold: 'En Özgül İHK Belirteçleri: DOG1 ve CD117 (c-KIT) • Hedefe Yönelik Tedavi: İmatinib (Direnç gelişirse Sunitinib).',
        pearl: 'GİST, Cajal hücrelerinden köken alır, en sık Midede görülür, CD117 (c-KIT) ve DOG1 pozitiftir; tedavisinde İmatinib kullanılır.',
        trueStatement: 'Gastrointestinal stromal tümör (GİST) Cajal hücrelerinden köken alır, en sık midede yerleşir, CD117/DOG1 pozitiftir ve imatinib ile tedavi edilir.',
        falseStatement: 'GİST düz kas hücrelerinden köken alır, yalnızca rektumda görülür ve desmin pozitifliği ile tanı konur.',
        falseHighlight: 'yalnızca rektumda görülür ve desmin pozitifliği ile tanı konur',
      },
      {
        entityName: 'Folliküler Tiroid Karsinomu — Kapsül/Damar İnvazyonu (İİAB ile Ayrım Yapılamaz!) ve Hematojen Metastaz',
        patientVignette:
          'Tiroid nodülü İİAB sonucunda "folliküler neoplazi" saptanan hastaya lobektomi yapılıyor. Patolojide tümörün fibröz kapsülü tam kat deldiği ve kapsül damarlarını invaze ettiği görülüyor; takipte akciğer ve kemik metastazı saptanıyor.',
        clues: ['folliküler neoplazi', 'kapsülü tam kat deldiği ve kapsül damarlarını invaze ettiği', 'akciğer ve kemik metastazı'],
        questionPrompt: 'İnce iğne aspirasyon biyopsisi (İİAB) ile adenom-karsinom ayrımı YAPILAMAYAN ve hematojen yolla yayılan bu tiroid kanseri hangisidir?',
        mechanism:
          'Folliküler tiroid adenomu ile Folliküler karsinom ayrımı sitolojik olarak (İİAB ile) KESİNLİKLE YAPILAMAZ; kesin tanı için cerrahi eksizyon sonrası KAPSÜL İNVAZYONU ve/veya VASKÜLER (DAMAR) İNVAZYON gösterilmelidir! Papiller karsinom lenfatik yolla yayılırken, Folliküler karsinom HEMATOJEN (kan) yoluyla kemik, akciğer ve karaciğere metastaz yapar (RAS mutasyonu sıktır).',
        whenCorrectNote: 'İİAB ile adenomdan ayrılamaz (kapsül/damar invazyonu şart!), hematojen metastaz (kemik/akciğer), RAS mutasyonu.',
        firstVsGold: 'Papiller Tiroid Ca: İİAB (Nükleer özellikler) ile tanı konur, Lenfatik yayılır • Folliküler Tiroid Ca: İİAB ile tanı konamaz (Kapsül/Damar invazyonu şart), Hematojen yayılır.',
        pearl: 'Folliküler tiroid karsinomunun adenomdan ayrımı İİAB ile yapılamaz (kapsül/damar invazyonu gerekir) ve HEMATOJEN yolla metastaz yapar!',
        trueStatement: 'Folliküler tiroid karsinomu tanısı İİAB ile konulamaz; kapsül veya damar invazyonunun gösterilmesi şarttır ve tümör hematojen yolla yayılır.',
        falseStatement: 'Folliküler tiroid karsinomunda psammom cisimcikleri patognomoniktir ve yalnız servikal lenf bezlerine yayılır.',
        falseHighlight: 'psammom cisimcikleri patognomoniktir ve yalnız servikal lenf bezlerine yayılır',
      },
      {
        entityName: 'Peutz-Jeghers Sendromu vs. Familyal Adenomatöz Polipozis (FAP) — STK11/LKB1, Arborizan Kas Lifleri ve APC Geni',
        patientVignette:
          'Dudak ve oral mukozada melanotik hiperpigmente maküller ile ince bağırsakta çok sayıda polip saptanan 17 yaşında hastanın polip biyopsisinde dallanan ("arborizan / çam ağacı") düz kas lifleri içeren hamartomatöz polipler görülüyor.',
        clues: ['oral mukozada melanotik hiperpigmente maküller', 'arborizan / çam ağacı', 'hamartomatöz polipler'],
        questionPrompt: 'STK11 (LKB1) gen mutasyonu ile otozomal dominant kalıtılan bu sendrom ile FAP (APC mutasyonu) arasındaki temel fark nedir?',
        mechanism:
          'Peutz-Jeghers sendromu STK11 (LKB1) mutasyonuyla kalıtılır: Mukokütanöz hiperpigmentasyon + en sık İNCE BAĞIRSAKTA yerleşen "arborizan (dallanan) düz kas" içeren HAMARTOMATÖZ polipler vardır (pankreas, meme, kolon, overde seks-kord tümör riski artar). FAP’ta ise 5q APC gen mutasyonu vardır, kolonda >100 ADENOMATÖZ polip bulunur ve kolektomi yapılmazsa %100 kolorektal kanser gelişir!',
        whenCorrectNote: 'Peutz-Jeghers = STK11, oral pigmentasyon + ince bağırsakta arborizan kaslı hamartomatöz polip; FAP = APC geni, >100 adenomatöz polip, %100 kanser.',
        firstVsGold: 'FAP Varyantları: Gardner Sendromu (Polip + Osteom + Epidermoid kist + Desmoid tümör + Konjenital RPE hipertrofisi) • Turcot Sendromu (Polip + Medulloblastom/Glioblastom).',
        pearl: 'Peutz-Jeghers sendromunda (STK11) arborizan düz kas içeren hamartomatöz polip; FAP’ta (APC) ise %100 kanserleşen >100 adenomatöz polip vardır.',
        trueStatement: 'Peutz-Jeghers sendromunda STK11 mutasyonu, mukokütanöz pigmentasyon ve arborizan düz kas içeren hamartomatöz polipler görülür.',
        falseStatement: 'Peutz-Jeghers sendromunda poliplerin tamamı villöz adenom yapısında olup p53 gen delesyonu ile kalıtılır.',
        falseHighlight: 'tamamı villöz adenom yapısında olup p53 gen delesyonu',
      },
      {
        entityName: 'Seminom (Testis) — Berrak Sitoplazmalı Hücreler, Fibröz Septalarda Lenfosit İnfiltrasyonu, PLAP+ ve Yüksek Radyosensitivite',
        patientVignette:
          '32 yaşında erkek hastada sağ testiste ağrısız sert kitle nedeniyle radikal inguinal orşiektomi yapılıyor. Kesit yüzeyi homojen gri-beyaz lobüle görünümde olup mikroskopide glikojenden zengin berrak sitoplazmalı büyük hücreler ve fibröz bölmelerde yoğun lenfosit infiltrasyonu saptanıyor; AFP ve Beta-hCG normal, LDH ve PLAP pozitif bulunuyor.',
        clues: ['ağrısız sert kitle', 'berrak sitoplazmalı büyük hücreler', 'fibröz bölmelerde yoğun lenfosit', 'AFP ve Beta-hCG normal, LDH ve PLAP pozitif'],
        questionPrompt: 'En sık görülen ve radyoterapiye en duyarlı olan bu germ hücreli testis tümörü aşağıdakilerden hangisidir?',
        mechanism:
          'Seminom (kadındaki karşılığı Disgerminom!) genç erkeklerde en sık görülen saf germ hücreli testis tümörüdür. Nekroz ve kanama içermez; berrak (PAS+) sitoplazmalı hücreler, fibröz septalarda lenfositler, PLAP/OCT4/c-KIT pozitifliği ve i(12p) izokromozomu tipiktir. Saf seminomda AFP ASLA YÜKSELMEZ (AFP yüksekse non-seminomatöz bileşen - Yolk sac vardır!). Radyoterapiye son derece duyarlıdır ve prognozu mükemmeldir. (Testis kitlelerinde skrotal biyopsi KESİNLİKLE KONTRENDİKEDİR, inguinal orşiektomi yapılır!).',
        whenCorrectNote: 'En sık testis tümörü, PLAP/LDH+, AFP normal, lenfositli fibröz septa, radyosensitif (kadındaki eşdeğeri Disgerminom).',
        firstVsGold: 'Saf Seminomda Asla Yükselmeyen Belirteç: AFP • Testis Kitlesinde Kesin Kontrendike İşlem: Transskrotal İğne Biyopsisi (Lenfatik yayılımı değiştirir!).',
        pearl: 'Saf seminomda AFP asla yükselmez (yükselirse Yolk sac bileşeni vardır) ve testis kitlelerinde transskrotal biyopsi kesinlikle kontrendikedir!',
        trueStatement: 'Seminom en sık görülen germ hücreli testis tümörü olup radyoterapiye çok duyarlıdır; saf seminomda serum AFP düzeyi asla yükselmez.',
        falseStatement: 'Seminom tanısı koymak için ilk işlem skrotum cildinden kalın iğne biyopsisi yapmak olup tümörde AFP 100 kat yükselir.',
        falseHighlight: 'ilk işlem skrotum cildinden kalın iğne biyopsisi yapmak olup tümörde AFP 100 kat yükselir',
      },
    ],
  },
  // 4. FARMAKOLOJİ: SSS, Diyabet ve Endokrin Farmakolojisi
  {
    branchId: 'farmakoloji',
    subTopic: 'Antidiyabetikler, Antiepileptikler ve Nöropsikiyatrik Farmakoloji',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Metformin — AMPK Aktivasyonu, Hipoglisemi Yapmama, Kilo Kaybı ve Böbrek Yetmezliğinde Laktik Asidoz Riski',
        patientVignette:
          'Yeni tanı Tip 2 diyabetes mellituslu obez hastada hepatik glukoneogenezi baskılayan, periferik insülin duyarlılığını artıran, hipoglisemi yapmayan ve kilo alımına neden olmayan ilk tercih oral antidiyabetik başlanıyor.',
        clues: ['Tip 2 diyabetes mellituslu', 'glukoneogenezi baskılayan', 'hipoglisemi yapmayan'],
        questionPrompt: 'AMP-bağımlı protein kinazı (AMPK) aktive eden, B12 emilimini azaltabilen ve ağır böbrek yetmezliğinde (GFR <30) laktik asidoz riski nedeniyle kontrendike olan bu ilaç hangisidir?',
        mechanism:
          'Metformin (Biguanid), Tip 2 DM tedavisinde İLK TERCİH ilaçtır. Mitokondriyal Kompleks I’i inhibe edip AMPK’yı aktive ederek karaciğerde glukoneogenezi baskılar. İnsülin salgılatmadığı için HİPOGLİSEMİ YAPMAZ ve kilo verdirir (PKOS’ta da kullanılır). Böbrekten değişmeden atılır; GFR <30 mL/dk, ağır hipoksi/KY ve kontrast madde işleminde LAKTİK ASİDOZ riski nedeniyle kesilir.',
        whenCorrectNote: 'Tip 2 DM ilk tercih, AMPK aktivasyonu, hipoglisemi yapmaz, B12 eksikliği ve böbrek yetmezliğinde laktik asidoz riski.',
        firstVsGold: 'Tip 2 DM İlk Tercih: Metformin • Kalp Yetmezliği ve Kronik Böbrek Hastalığında Mortalite Azaltan: SGLT-2 İnhibitörleri (Empagliflozin, Dapagliflozin - Ürogenital mantar enfeksiyonu yapar).',
        pearl: 'Metformin AMPK aktivasyonuyla glukoneogenezi baskılar ve hipoglisemi yapmaz; ağır böbrek yetmezliğinde Laktik Asidoz yaptığı için kontrendikedir.',
        trueStatement: 'Metformin Tip 2 diyabette ilk tercih ilaç olup AMPK aktivasyonuyla glukoneogenezi baskılar; hipoglisemi yapmaz ancak böbrek yetmezliğinde laktik asidoza yol açabilir.',
        falseStatement: 'Metformin pankreas beta hücrelerinde potasyum kanallarını kapatarak şiddetli hipoglisemi ve kilo alımı yapar.',
        falseHighlight: 'potasyum kanallarını kapatarak şiddetli hipoglisemi ve kilo alımı yapar',
      },
      {
        entityName: 'Etosüksimid — T-Tipi Kalsiyum Kanal Blokajı ve Absans (Petit Mal) Nöbetlerde İlk Tercih',
        patientVignette:
          '7 yaşında kız çocukta günde 20-30 kez tekrarlayan, yere düşmeksizin 5-10 saniye boş bakma ve göz kırpıştırma atakları ile EEG’de 3 Hz diken-dalga deşarjları (Absans nöbet) saptanıyor.',
        clues: ['5-10 saniye boş bakma', '3 Hz diken-dalga deşarjları (Absans nöbet)'],
        questionPrompt: 'Talamik nöronlarda T-tipi kalsiyum akımlarını bloke ederek yalnız Absans nöbetlerde ilk tercih olan ilaç hangisidir?',
        mechanism:
          'Etosüksimid talamustaki T-tipi (düşük eşikli) Ca+2 kanallarını bloke eder ve çocukluk çağı saf ABSANS (Petit mal) nöbetlerinde İLK TERCİH ilaçtır (tonik-klonik nöbet eşlik ediyorsa Valproik asit tercih edilir). Karbamazepin, Fenitoin, Vigabatrin ve Tiagabin ise Absans nöbetleri KÖTÜLEŞTİRİR (kontrendikedir)!',
        whenCorrectNote: 'Talamusta T-tipi Ca kanal blokajı, saf Absans (3 Hz diken-dalga) nöbetlerde ilk tercih.',
        firstVsGold: 'Saf Absans İlk Tercih: Etosüksimid (T-tipi Ca blokörü) • Absans + Tonik-Klonik Birlikteliği: Valproik Asit • Absansı Kötüleştirenler: Karbamazepin, Fenitoin, Vigabatrin.',
        pearl: 'Absans (3 Hz diken-dalga) nöbetlerde ilk tercih Etosüksimiddir (T-tipi Ca blokörü); Karbamazepin ve Fenitoin ise absans nöbetleri kötüleştirir!',
        trueStatement: 'Etosüksimid talamik T-tipi kalsiyum kanallarını bloke eder ve saf absans nöbetlerin tedavisinde ilk tercih ilaçtır.',
        falseStatement: 'Absans nöbetlerin tedavisinde ilk tercih ilaç karbamazepin veya vigabatrin olup etosüksimid kontrendikedir.',
        falseHighlight: 'ilk tercih ilaç karbamazepin veya vigabatrin olup etosüksimid kontrendikedir',
      },
      {
        entityName: 'Klozapin — Tedaviye Dirençli Şizofreni, İntihar Riskini Azaltma, Agranülositoz ve Siyalore',
        patientVignette:
          'İki farklı antipsikotik ilaca yanıt vermeyen tedaviye dirençli şizofreni hastasında ekstrapiramidal yan etki ve hiperprolaktinemi yapmayan, intihar girişimi riskini azaltan atipik antipsikotik başlanıyor ve haftalık tam kan sayımı takibi planlanıyor.',
        clues: ['tedaviye dirençli şizofreni', 'ekstrapiramidal yan etki ve hiperprolaktinemi yapmayan', 'haftalık tam kan sayımı'],
        questionPrompt: 'Agranülositoz, miyokardit, kilo alımı, nöbet eşiğinde düşme ve gece salya akması (siyalore) yapan bu en etkili antipsikotik hangisidir?',
        mechanism:
          'Klozapin; D4, 5-HT2A, M4 ve H1 reseptörlerini etkiler (D2 afinitesi çok düşüktür). Tedaviye dirençli şizofrenide ve şizofrenide İNTİHAR RİSKİNİ azaltmada en etkili ilaçtır; EPS ve tardiv diskinezi yapmaz (Parkinson psikozunda da kullanılır). En tehlikeli yan etkisi AGRANÜLOSİTOZ (haftalık lökosit/nötrofil takibi şart!) ve Miyokardittir.',
        whenCorrectNote: 'Dirençli şizofreni + intihar riskini azaltma, EPS yapmaz; yan etkileri Agranülositoz, miyokardit, nöbet, metabolik sendrom ve siyalore.',
        firstVsGold: 'En Fazla Prolaktin Artıran Atipik: Risperidon / Paliperidon • Prolaktin Artırmayan (Parsiyel D2 Agonisti): Aripiprazol • En Etkili / Agranülositoz Yapan: Klozapin.',
        pearl: 'Klozapin tedaviye dirençli şizofrenide en etkili ilaçtır ve intihar riskini azaltır; en korkulan yan etkisi Agranülositozdur (lökosit takibi şarttır).',
        trueStatement: 'Klozapin tedaviye dirençli şizofrenide en etkili antipsikotik olup ekstrapiramidal yan etki yapmaz ancak agranülositoz riski nedeniyle hemogram takibi gerektirir.',
        falseStatement: 'Klozapin antipsikotikler içinde akut distoni ve hiperprolaktinemi riski en yüksek olan tipik D2 blokörüdür.',
        falseHighlight: 'akut distoni ve hiperprolaktinemi riski en yüksek olan tipik D2 blokörüdür',
      },
      {
        entityName: 'Propiltiourasil (PTU) vs. Metimazol — Tiroid Peroksidaz + 5-Deiyodinaz İnhibisyonu ve İlk Trimester Gebelik / Tiroid Fırtınası',
        patientVignette:
          '8 haftalık gebe Graves hipertiroidisi ve taşikardi ile başvuruyor. Hem tiroid bezinde hormon sentezini hem de periferde T4’ün aktif T3’e dönüşümünü inhibe eden antitiroid ilaç tercih ediliyor.',
        clues: ['8 haftalık gebe Graves', 'periferde T4’ün aktif T3’e dönüşümünü inhibe eden'],
        questionPrompt: 'Gebeliğin İLK trimesterinde ve Tiroid Fırtınasında ilk tercih olan bu antitiroid ilaç aşağıdakilerden hangisidir?',
        mechanism:
          'Propiltiourasil (PTU) ve Metimazol tiroid peroksidazı inhibe eder; ancak YALNIZ PTU ek olarak periferde 5’-deiyodinaz enzimini inhibe ederek T4 -> T3 dönüşümünü engeller (bu nedenle Tiroid Fırtınasında PTU tercih edilir!). Metimazol ilk trimesterde "aplazia kutis" ve koanal/özofageal atrezi yaptığı için gebeliğin İLK TRİMESTERİNDE PTU, 2. ve 3. trimesterde ise (PTU’nun hepatotoksisitesi nedeniyle) Metimazol kullanılır. İkisinin de en önemli yan etkisi Agranülositozdur (ateş ve boğaz ağrısı!).',
        whenCorrectNote: 'PTU = TPO + Periferik 5-deiyodinaz inhibisyonu, Tiroid fırtınası ve Gebelik 1. trimesterde ilk tercih.',
        firstVsGold: 'Gebelik 1. Trimester & Tiroid Fırtınası: Propiltiourasil (PTU) • Gebelik 2.-3. Trimester & Normal Erişkin: Metimazol (PTU hepatotoksiktir).',
        pearl: 'Gebeliğin 1. trimesterinde ve Tiroid Fırtınasında (periferik T4->T3 dönüşümünü de engellediği için) Propiltiourasil (PTU) tercih edilir!',
        trueStatement: 'Propiltiourasil (PTU) periferde T4’ün T3’e dönüşümünü de inhibe ettiği için tiroid fırtınasında ve gebeliğin ilk trimesterinde ilk tercihtir.',
        falseStatement: 'Gebeliğin ilk trimesterinde aplazia kutis riskini önlemek için metimazol veya radyoaktif iyot ilk tercihtir.',
        falseHighlight: 'metimazol veya radyoaktif iyot ilk tercihtir',
      },
      {
        entityName: 'Dantrolen — Riyanodin (RyR1) Kanal Blokajı, Malign Hipertermi ve Nöroleptik Malign Sendrom Tedavisi',
        patientVignette:
          'Halotan inhalasyon anestezisi ve süksinilkolin uygulanan hastada ameliyat sırasında ani yükselen ateş (41°C), çene ve tüm vücutta kurşun boru rijiditesi, taşikardi, rabdomiyoliz, hiperkalemi ve end-tidal CO2 artışı (Malign Hipertermi) gelişiyor.',
        clues: ['Halotan', 'süksinilkolin', '41°C', 'rijiditesi', 'Malign Hipertermi'],
        questionPrompt: 'Sarkoplazmik retikulumdan kalsiyum salınımını sağlayan Riyanodin (RyR1) kanallarını bloke ederek hayat kurtaran spesifik ajan hangisidir?',
        mechanism:
          'Malign Hipertermi (Halotan/İzofluran + Süksinilkolin tetikler, RyR1 mutasyonu) ve Nöroleptik Malign Sendromda (Antipsikotikler tetikler) aşırı kas kasılması, rijidite, rabdomiyoliz ve hipertermi gelişir. Spesifik tedavide sarkoplazmik retikulumdaki RİYANODİN (RyR1) kalsiyum kanallarını bloke eden DANTROLEN kullanılır.',
        whenCorrectNote: 'Sarkoplazmik retikulum RyR1 Ca kanal blokörü; Malign Hipertermi ve Nöroleptik Malign Sendromda hayat kurtarıcı antidot.',
        firstVsGold: 'Malign Hipertermi & Nöroleptik Malign Sendrom: Dantrolen (RyR1 blokörü) • Serotonin Sendromu (Hiperrefleksi/Klonus): Siproheptadin (5-HT2 antagonisti).',
        pearl: 'Malign Hipertermi (Halotan + Süksinilkolin) ve Nöroleptik Malign Sendrom tedavisinde Riyanodin (RyR1) kanal blokörü Dantrolen kullanılır!',
        trueStatement: 'Dantrolen sarkoplazmik retikulumdaki riyanodin (RyR1) kalsiyum kanallarını bloke ederek malign hipertermi ve nöroleptik malign sendrom tedavisinde kullanılır.',
        falseStatement: 'Malign hipertermi tedavisinde kas gevşemesi sağlamak için yüksek doz süksinilkolin ve atropin uygulanmalıdır.',
        falseHighlight: 'yüksek doz süksinilkolin ve atropin uygulanmalıdır',
      },
    ],
  },
  // 5. DAHİLİYE & PEDİATRİ & CERRAHİ EK VAKALAR
  {
    branchId: 'dahiliye',
    subTopic: 'Gastroenteroloji, Hepatoloji ve Enfeksiyon Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Spontan Bakteriyel Peritonit (SBP) — Asit Sıvısı PMNL ≥250/mm³, En Sık E. coli ve İlk Tercih 3. Kuşak Sefalosporin (Seftriakson/Sefotaksim)',
        patientVignette:
          'Karaciğer sirozu ve asiti olan 58 yaşında hastada ateş, karın ağrısı ve hepatik ensefalopati gelişiyor. Parasentezde SAAG ≥1.1 g/dL ve asit sıvısında polimorfonükleer lökosit (PMNL / nötrofil) sayısı 420/mm³ saptanıyor.',
        clues: ['Karaciğer sirozu ve asiti', 'PMNL / nötrofil sayısı 420/mm³'],
        questionPrompt: 'Bu hastada tanı kriteri, en sık etken ve ampirik tedavide ilk tercih antibiyotik aşağıdakilerden hangisidir?',
        mechanism:
          'Spontan Bakteriyel Peritonit (SBP) tanısı parasentez sıvısında kültür sonucunu beklemeden PMNL (Nötrofil) sayısının ≥250/mm³ olmasıyla konur! En sık etken E. coli’dir (monomikrobiyaldir; polimikrobiyal ise sekonder peritonit/perforasyon düşünülür!). Ampirik tedavide ilk tercih 3. Kuşak Sefalosporin (Sefotaksim veya Seftriakson) + Hepatorenal sendromu önlemek için İV Albümin; profilakside ise Norfloksasin/Siprofloksasin kullanılır.',
        whenCorrectNote: 'Asit PMNL ≥250/mm³, en sık etken E. coli, ilk tercih tedavi Sefotaksim/Seftriakson + İV Albümin.',
        firstVsGold: 'Tanı Eşiği: Asit sıvısı PMNL (Nötrofil) ≥250/mm³ • İlk Tercih Tedavi: 3. Kuşak Sefalosporin (Sefotaksim/Seftriakson) + Albümin.',
        pearl: 'Spontan bakteriyel peritonit tanısı asit sıvısında PMNL ≥250/mm³ olmasıyla konur; en sık etken E. coli, ilk tercih tedavi Sefotaksim/Seftriaksondur.',
        trueStatement: 'Spontan bakteriyel peritonit tanısı asit sıvısında PMNL sayısının ≥250/mm³ olmasıyla konur ve tedavisinde 3. kuşak sefalosporinler ilk tercihtir.',
        falseStatement: 'Spontan bakteriyel peritonit tanısı için asit sıvısında PMNL sayısının 5.000/mm³ üzerinde olması ve acil laparotomi yapılması şarttır.',
        falseHighlight: 'PMNL sayısının 5.000/mm³ üzerinde olması ve acil laparotomi yapılması şarttır',
      },
      {
        entityName: 'Primer Biliyer Kolanjit (PBK) vs. Primer Sklerozan Kolanjit (PSK) — Anti-Mitokondriyal Antikor (AMA), Orta Yaş Kadın ve Ülseratif Kolit İlişkisi',
        patientVignette:
          '48 yaşında kadın hastada kaşıntı, halsizlik, ksantelazma, Alkalen Fosfataz (ALP) ve GGT yüksekliği ile serum IgM artışı saptanıyor. Serolojide Anti-Mitokondriyal Antikor (AMA-M2) %95 pozitif ve biyopside orta/küçük intrahepatik safra kanallarında "florid kanal lezyonu" (granülomatöz yıkım) görülüyor.',
        clues: ['48 yaşında kadın', 'kaşıntı', 'ALP ve GGT yüksekliği', 'Anti-Mitokondriyal Antikor (AMA-M2)', 'florid kanal lezyonu'],
        questionPrompt: 'İlk tercih tedavisi Ursodeoksikolik asit (UDKA) olan bu hastalık ile Primer Sklerozan Kolanjit arasındaki temel fark nedir?',
        mechanism:
          '1. Primer Biliyer Kolanjit (PBK): Orta yaş KADIN, yalnız İNTRAHEPATİK küçük safra kanallarını tutar, AMA (%95+) ve IgM yüksekliği vardır, Sjögren/Hashimoto eşlik eder, ilk tedavi Ursodeoksikolik Asittir.\n2. Primer Sklerozan Kolanjit (PSK): Genç ERKEK, hem İNTRA hem EKSTRAHEPATİK safra yollarını tutar, MRCP/ERCP’de "tespih tanesi (beading)" görünümü ve biyopside "soğan zarı" periduktal fibrozis vardır, %80 ÜLSERATİF KOLİT ve p-ANCA ile ilişkilidir, Kolanjiyokarsinom riski çok yüksektir!',
        whenCorrectNote: 'PBK = Kadın, AMA+, İntrahepatik, Florid kanal lezyonu, UDKA tedavisi; PSK = Erkek, Ülseratif kolit, p-ANCA+, İntra+Ekstrahepatik tespih tanesi.',
        firstVsGold: 'PBK: AMA (+), İntrahepatik, Kadın • PSK: p-ANCA (+), Ülseratif Kolit (%80), İntra+Ekstrahepatik (Tespih tanesi MRCP), Kolanjiyokarsinom riski.',
        pearl: 'Primer Biliyer Kolanjitte AMA pozitiftir ve yalnız intrahepatik safra yolları tutulur; Primer Sklerozan Kolanjit ise Ülseratif Kolit ve p-ANCA ile ilişkilidir.',
        trueStatement: 'Primer biliyer kolanjitte AMA pozitifliği ve intrahepatik safra kanalı yıkımı görülürken, primer sklerozan kolanjit ülseratif kolit ve p-ANCA ile güçlü ilişkilidir.',
        falseStatement: 'Primer biliyer kolanjit en sık genç erkeklerde ekstrahepatik koledok darlığı yapar ve ülseratif kolit ile %90 birliktelik gösterir.',
        falseHighlight: 'en sık genç erkeklerde ekstrahepatik koledok darlığı yapar ve ülseratif kolit ile %90',
      },
      {
        entityName: 'Wilson Hastalığı — ATP7B Gen Mutasyonu, Düşük Seruloplazmin, Kayser-Fleischer Halkası ve Coombs Negatif Hemolitik Anemi',
        patientVignette:
          '19 yaşında hastada akut karaciğer yetmezliği, dizartri/tremor (bazal gangliyon - putamen tutulumu), Coombs negatif akut intravasküler hemolitik anemi ve kornea Desçemet membranında Kayser-Fleischer halkası saptanıyor; serum Seruloplazmin düzeyi düşük ve 24 saatlik idrar bakırı yüksek bulunuyor.',
        clues: ['putamen tutulumu', 'Coombs negatif akut intravasküler hemolitik anemi', 'Kayser-Fleischer halkası', 'Seruloplazmin düzeyi düşük'],
        questionPrompt: '13. kromozomdaki ATP7B gen mutasyonuyla gelişen bu hastalıkta kesin tanı (altın standart) ve tedavi yaklaşımı hangisidir?',
        mechanism:
          'Wilson hastalığında hepatositlerden bakırın safraya atılımını ve seruloplazmine bağlanmasını sağlayan ATP7B proteini bozuktur. Karaciğer, beyin (bazal gangliyon / putamen), kornea (Desçemet membranında Kayser-Fleischer halkası) ve eritrositlerde (Coombs negatif hemolitik anemi!) bakır birikir. Akut Wilson yetmezliğinde Alkalen Fosfataz (ALP) çok DÜŞÜKTÜR (ALP/Bilirubin oranı <4). Kesin tanı (Altın Standart): Karaciğer biyopsisinde kuru ağırlıkta bakır >250 mcg/g olmasıdır. Tedavide bakır şelatörleri (D-Penisilamin, Trientin) ve bağırsaktan bakır emilimini metalotiyonein ile engelleyen ÇİNKO kullanılır.',
        whenCorrectNote: 'ATP7B mutasyonu, düşük seruloplazmin, yüksek idrar bakırı, Kayser-Fleischer halkası, Coombs (-) hemoliz, altın standart KC biyopsisi, tedavi Trientin/D-penisilamin + Çinko.',
        firstVsGold: 'Tarama: Serum Seruloplazmin düşüklüğü + 24 saatlik idrar bakırı yüksekliği • Kesin Tanı (Altın Standart): Karaciğer Biyopsisinde Kuru Ağırlıkta Bakır Miktarı.',
        pearl: 'Genç hastada Akut Karaciğer Yetmezliği + Coombs (-) Hemolitik Anemi + Düşük ALP birlikteliğinde tanı Wilson Hastalığıdır (ATP7B mutasyonu)!',
        trueStatement: 'Wilson hastalığında ATP7B mutasyonuna bağlı düşük seruloplazmin, Kayser-Fleischer halkası ve Coombs negatif hemolitik anemi görülür; kesin tanı karaciğer biyopsisi ile konur.',
        falseStatement: 'Wilson hastalığında serum seruloplazmin düzeyi 10 kat artmıştır ve tedavisinde flebotomi (kan akıtma) ilk tercihtir.',
        falseHighlight: 'serum seruloplazmin düzeyi 10 kat artmıştır ve tedavisinde flebotomi',
      },
      {
        entityName: 'Enfektif Endokardit — Akut En Sık S. aureus, Subakut S. viridans, Kolon Kanseri İlişkili S. gallolyticus (bovis)',
        patientVignette:
          '71 yaşında erkek hastada ateş, yeni başlayan kalp üfürümü ve ekokardiyografide mitral kapakta vejetasyon saptanıyor. Kan kültürlerinde Streptococcus gallolyticus (S. bovis biyotipi I) üremesi üzerine hastaya tarama amaçlı ek bir tetkik planlanıyor.',
        clues: ['vejetasyon', 'Streptococcus gallolyticus (S. bovis biyotipi I)'],
        questionPrompt: 'S. gallolyticus (bovis) endokarditi saptanan her hastada mutlaka yapılması gereken işlem aşağıdakilerden hangisidir?',
        mechanism:
          'Enfektif endokarditin genel olarak, akut dönemde ve İV ilaç bağımlılarında (triküspit kapak) EN SIK etkeni Staphylococcus aureus’tur. Hasarlı doğal kapakta subakut en sık etken S. viridans, erken protez kapakta (<1 yıl) S. epidermidis’tir. Kan kültüründe Streptococcus gallolyticus (S. bovis) üreyen hastalarda %50-60 oranında gizli KOLON KANSERİ veya villöz adenom eşlik ettiği için mutlaka KOLONOSKOPİ yapılmalıdır!',
        whenCorrectNote: 'Genel/Akut/İV bağımlıda en sık: S. aureus; Subakut doğal kapakta: S. viridans; S. gallolyticus (bovis) üremesinde mutlaka Kolonoskopi (Kolon Ca)!',
        firstVsGold: 'Duke Majör Kriterleri: Pozitif Kan Kültürü + Ekokardiyografi (TEE en duyarlı!) • S. bovis (gallolyticus) Endokarditi -> Kolonoskopi (Kolon Ca).',
        pearl: 'Streptococcus gallolyticus (S. bovis) endokarditi veya bakteriyemisi saptanan her hastada Kolon Kanseri açısından mutlaka KOLONOSKOPİ yapılmalıdır!',
        trueStatement: 'Streptococcus gallolyticus (bovis) endokarditi saptanan hastalarda kolon kanseri birlikteliği yüksek olduğundan mutlaka kolonoskopi yapılmalıdır.',
        falseStatement: 'İntravenöz ilaç bağımlılarında en sık tutulan kapak aort kapağı olup en sık etken Streptococcus pneumoniae’dir.',
        falseHighlight: 'en sık tutulan kapak aort kapağı olup en sık etken Streptococcus pneumoniae',
      },
      {
        entityName: 'Akut Bakteriyel Menenjit — Erişkinde En Sık S. pneumoniae, BOS’ta Düşük Glukoz & Yüksek Protein ve L. monocytogenes İçin Ampisilin',
        patientVignette:
          '64 yaşında hastada yüksek ateş, baş ağrısı, ense sertliği ve Kernig/Brudzinski pozitifliği saptanıyor. Lomber ponksiyonda BOS basıncı yüksek, görünüm bulanık, PMNL hakimiyeti (1.800/mm³), BOS proteini yüksek (190 mg/dL) ve BOS glukozu çok düşük (14 mg/dL) bulunuyor.',
        clues: ['ense sertliği', 'PMNL hakimiyeti', 'BOS proteini yüksek', 'BOS glukozu çok düşük'],
        questionPrompt: '50 yaş üstü, yenidoğan veya immünsüprese hastada Listeria monocytogenes’i kapsamak için ampirik tedaviye (Seftriakson + Vankomisin) mutlaka eklenmesi gereken antibiyotik hangisidir?',
        mechanism:
          'Akut bakteriyel menenjitte BOS’ta PMNL (nötrofil) artışı, yüksek protein ve DÜŞÜK GLUKOZ (eş zamanlı kan şekerinin <1/2’si) görülür. Erişkinde en sık etken Streptococcus pneumoniae’dir (nörolojik sekeli ve mortalitesi en yüksek!). Yenidoğanda (<1 ay), >50 yaş üzerinde, gebelerde ve hücresel immün yetmezlikte Listeria monocytogenes etkendir; Sefalosporinler Listeria’ya ETKİSİZDİR, bu nedenle ampirik tedaviye mutlaka AMPİSİLİN eklenir!',
        whenCorrectNote: 'Bakteriyel menenjit = PMNL artışı + Düşük glukoz + Yüksek protein; >50 yaş/Yenidoğanda Listeria için tedaviye Ampisilin eklenir.',
        firstVsGold: 'Erişkin Ampirik: Seftriakson + Vankomisin (+ Deksametazon) • >50 Yaş / İmmünsüprese / Gebe: Seftriakson + Vankomisin + AMPİSİLİN (Listeria için!).',
        pearl: 'Sefalosporinler Listeria monocytogenes’e etkisizdir; >50 yaş, yenidoğan ve immünsüprese menenjitinde ampirik tedaviye mutlaka AMPİSİLİN eklenir!',
        trueStatement: 'Akut bakteriyel menenjitte 50 yaş üstü ve immünsüprese hastalarda Listeria monocytogenes’i kapsamak için ampirik tedaviye mutlaka ampisilin eklenmelidir.',
        falseStatement: 'Listeria monocytogenes menenjitinde tek başına seftriakson tedavisi %100 kür sağlar ve BOS glukozu normalin iki katına çıkar.',
        falseHighlight: 'tek başına seftriakson tedavisi %100 kür sağlar ve BOS glukozu normalin iki katına çıkar',
      },
    ],
  },
  // 6. ANATOMİ: Kafa Tabanı Foramenleri ve Nörovasküler Komşuluklar
  {
    branchId: 'anatomi',
    subTopic: 'Kafa Tabanı Foramenleri ve Nörovasküler Komşuluklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Foramen Ovale — N. Mandibularis (CN V3) ve A. Meningea Accessoria',
        patientVignette:
          '56 yaşında kadın hastada alt çene, şakak ve dilin ön 2/3 genel duyusunda ağrı yanı sıra çiğneme kaslarında (m. masseter, m. pterygoideus) güçsüzlük saptanıyor. Kafa tabanı MR incelemesinde sfenoid kemiğin büyük kanadındaki açıklıkta kitle görülüyor.',
        clues: ['dilin ön 2/3 genel duyusu', 'çiğneme kaslarında güçsüzlük', 'sfenoid kemiğin büyük kanadı'],
        questionPrompt: 'Bu hastada etkilenen kafa tabanı açıklığı ve içinden geçen oluşum hangisidir?',
        mechanism:
          'Sfenoid kemiğin ala major’unda yer alan Foramen ovale’den N. mandibularis (CN V3), A. meningea accessoria ve N. petrosus minor geçer.',
        whenCorrectNote: 'N. mandibularis (CN V3), A. meningea accessoria ve N. petrosus minor geçişi (Çiğneme kasları ve alt çene duyusu).',
        firstVsGold: 'Foramen rotundum: CN V2 (Maxillaris) • Foramen ovale: CN V3 (Mandibularis) + A. meningea accessoria + N. petrosus minor.',
        pearl: 'Foramen ovale’den geçen oluşumlar (MALE): Mandibular sinir (V3), A. meningea accessoria, Lesser petrosal nerve (N. petrosus minor), Emissary veins.',
        trueStatement: 'Foramen ovale sfenoid kemiğin büyük kanadında yer alır ve içinden N. mandibularis (CN V3) ile N. petrosus minor geçer.',
        falseStatement: 'Foramen ovale içinden N. maxillaris (CN V2) ve A. meningea media’nın ana dalı geçer.',
        falseHighlight: 'N. maxillaris (CN V2) ve A. meningea media’nın ana dalı geçer',
      },
      {
        entityName: 'Foramen Spinosum — A. Meningea Media ve Epidural Hematom',
        patientVignette:
          '24 yaşında erkek hasta temporal bölgeye (pterion) aldığı künt travma sonrası kısa süreli bilinç kaybı ve "lusid interval" ardından hızla gelişen bilinç bulanıklığı ile getiriliyor. Beyin BT’de bikonveks (lens şeklinde) epidural hematom saptanıyor.',
        clues: ['pterion travması', 'lusid interval', 'bikonveks (lens şeklinde) epidural hematom'],
        questionPrompt: 'Yırtılarak epidural hematoma yol açan bu arter kafa boşluğuna hangi açıklıktan girer?',
        mechanism:
          'A. maxillaris’in dalı olan A. meningea media, kafa boşluğuna sfenoid kemikteki Foramen spinosum’dan girer ve pterion kırıklarında yırtılarak epidural hematoma yol açar.',
        whenCorrectNote: 'A. meningea media ve N. mandibularis’in ramus meningeus dalının geçtiği delik (Pterion kırığı -> Epidural hematom).',
        firstVsGold: 'Epidural Hematom: A. meningea media (Foramen spinosum, bikonveks BT) • Subdural Hematom: Köprü venleri (Hilal şeklinde BT).',
        pearl: 'A. meningea media kafa boşluğuna Foramen spinosum’dan girer; pterion travmasında yırtılması epidural hematomun en sık nedenidir.',
        trueStatement: 'A. meningea media kafa boşluğuna Foramen spinosum’dan girer ve yırtılması bikonveks epidural hematoma neden olur.',
        falseStatement: 'A. meningea media kafa tabanına Foramen rotundum’dan girer ve yırtılması hilal şeklinde subdural hematom yapar.',
        falseHighlight: 'Foramen rotundum’dan girer ve yırtılması hilal şeklinde subdural hematom yapar',
      },
      {
        entityName: 'Foramen Jugulare — CN IX, CN X, CN XI ve V. Jugularis Interna',
        patientVignette:
          '61 yaşında hastada glomus jugulare tümörüne bağlı yutma güçlüğü, ses kısıklığı, uvulanın sağlam tarafa deviye olması, gag refleksi kaybı ve aynı taraf SCM ile trapezius kaslarında güçsüzlük (Vernet sendromu) saptanıyor.',
        clues: ['yutma güçlüğü, ses kısıklığı', 'SCM ile trapezius kaslarında güçsüzlük', 'Vernet sendromu'],
        questionPrompt: 'Bu hastada kitle basısına uğrayan anatomik açıklık aşağıdakilerden hangisidir?',
        mechanism:
          'Temporal ve oksipital kemikler arasındaki Foramen jugulare’den N. glossopharyngeus (CN IX), N. vagus (CN X), N. accessorius (CN XI) ve V. jugularis interna (sinus sigmoideus devamı) geçer.',
        whenCorrectNote: 'CN IX, CN X, CN XI ve V. jugularis interna geçişi (Vernet sendromu: disfaji, ses kısıklığı, SCM/trapezius parezisi).',
        firstVsGold: 'Foramen jugulare: CN IX, X, XI + V. jugularis interna • Canalis nervi hypoglossi: CN XII (Dil motor siniri).',
        pearl: 'Foramen jugulare sendromunda (Vernet sendromu) CN IX, X ve XI birlikte etkilenir; dil hareketleri (CN XII) korunur.',
        trueStatement: 'Foramen jugulare’den CN IX, CN X, CN XI ve Sinus sigmoideus (V. jugularis interna olarak) geçer.',
        falseStatement: 'Foramen jugulare içinden N. facialis (CN VII) ve N. hypoglossus (CN XII) birlikte geçer.',
        falseHighlight: 'N. facialis (CN VII) ve N. hypoglossus (CN XII) birlikte geçer',
      },
      {
        entityName: 'Fissura Orbitalis Superior — CN III, CN IV, CN V1, CN VI ve V. Ophthalmica',
        patientVignette:
          '35 yaşında hasta orbita travması sonrası tam ptozis, göz küresinin tüm yönlere hareket kısıtlılığı (oftalmopleji), midriyazis ve alın/kornea bölgesinde duyu kaybı ile başvuruyor; ancak görme keskinliği korunmuş saptanıyor.',
        clues: ['tam ptozis ve oftalmopleji', 'alın/kornea bölgesinde duyu kaybı', 'görme keskinliği korunmuş'],
        questionPrompt: 'Görme sinirinin korunduğu ancak tüm göz motor sinirlerinin tutulduğu bu anatomik geçit hangisidir?',
        mechanism:
          'Sfenoid kemiğin küçük ve büyük kanatları arasındaki Fissura orbitalis superior’dan CN III, CN IV, CN V1 (oftalmik) ve CN VI ile V. ophthalmica superior geçer; N. opticus (CN II) ise Canalis opticus’tan geçer.',
        whenCorrectNote: 'CN III, IV, V1, VI ve V. ophthalmica superior geçişi (Tam oftalmopleji + kornea anestezisi, görme korunur).',
        firstVsGold: 'Fissura orbitalis superior: CN III, IV, V1, VI + V. ophthalmica • Canalis opticus: CN II (N. opticus) + A. ophthalmica.',
        pearl: 'Fissura orbitalis superior sendromunda CN III, IV, V1 ve VI tutulur; N. opticus (CN II) Canalis opticus’tan geçtiği için görme korunur.',
        trueStatement: 'Fissura orbitalis superior’dan CN III, IV, V1, VI ve V. ophthalmica superior geçerken; N. opticus ve A. ophthalmica Canalis opticus’tan geçer.',
        falseStatement: 'N. opticus (CN II) ve A. ophthalmica orbitaya Fissura orbitalis superior içinden girer.',
        falseHighlight: 'Fissura orbitalis superior içinden girer',
      },
      {
        entityName: 'Foramen Stylomastoideum — N. Facialis (CN VII) Motor Çıkışı',
        patientVignette:
          '29 yaşında erkek hasta parotis bezi cerrahisi sonrasında aynı taraf alnını kırıştıramama, gözünü kapatamama (Bell fenomeni) ve ağız köşesinin sağlam tarafa kayması bulgularıyla değerlendiriliyor; ancak tat duyusu ve gözyaşı salgısı korunmuş bulunuyor.',
        clues: ['parotis bezi cerrahisi', 'alnını kırıştıramama ve gözünü kapatamama', 'tat duyusu ve gözyaşı salgısı korunmuş'],
        questionPrompt: 'Fasiyal sinirin kafatasını terk ettiği ve distal lezyonunda sadece motor yüz felci gelişen bu açıklık hangisidir?',
        mechanism:
          'N. facialis (CN VII) fasiyal kanal içinde N. petrosus major, N. stapedius ve chorda tympani dallarını verdikten sonra kafatasını Foramen stylomastoideum’dan terk ederek parotis bezine girer.',
        whenCorrectNote: 'N. facialis’in (CN VII) kafatasından çıkış deliği (Distal lezyonunda tat ve gözyaşı korunur, izole motor yüz felci olur).',
        firstVsGold: 'İç Akustik Meatus: CN VII + CN VIII girişi • Foramen stylomastoideum: CN VII saf motor çıkışı (Chorda tympani kanal içinde ayrılır).',
        pearl: 'Foramen stylomastoideum distalindeki N. facialis lezyonlarında tat (chorda tympani) ve gözyaşı (N. petrosus major) korunur; yalnızca motor yüz felci gelişir.',
        trueStatement: 'N. facialis kafatasını Foramen stylomastoideum’dan terk eder ve bu seviyenin distalindeki kesi yalnızca motor fasiyal paralizi yapar.',
        falseStatement: 'Chorda tympani, N. facialis’ten Foramen stylomastoideum’dan çıktıktan sonra parotis bezi içinde ayrılır.',
        falseHighlight: 'Foramen stylomastoideum’dan çıktıktan sonra parotis bezi içinde ayrılır',
      },
    ],
  },
  // 7. FİZYOLOJİ: Kardiyak Siklus, Kalp Sesleri ve Aksiyon Potansiyeli
  {
    branchId: 'fizyoloji',
    subTopic: 'Kardiyak Siklus, Kalp Sesleri ve Aksiyon Potansiyeli',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'İzovolümetrik Kontraksiyon Evresi — Tüm Kapaklar Kapalı, Maksimum Duvar Gerilimi',
        patientVignette:
          'Kardiyak kateterizasyon sırasında sol ventrikül basıncının hızla yükseldiği, mitral kapağın yeni kapandığı (S1 sesi), aort kapağının ise henüz açılmadığı ve ventrikül hacminin sabit kaldığı evre inceleniyor.',
        clues: ['mitral kapağın yeni kapandığı (S1)', 'aort kapağının henüz açılmadığı', 'ventrikül hacminin sabit kaldığı'],
        questionPrompt: 'Kardiyak siklusta tüm kapakların kapalı olduğu ve miyokard oksijen tüketiminin en yüksek olduğu bu evre hangisidir?',
        mechanism:
          'İzovolümetrik kontraksiyon evresi mitral/triküspit kapakların kapanmasıyla (S1) başlar, aort/pulmoner kapakların açılmasıyla biter. Tüm kapaklar kapalıdır ve miyokardın duvar gerilimi/oksijen tüketimi bu evrede en yüksektir.',
        whenCorrectNote: 'S1 ile başlayan, tüm kapakların kapalı olduğu, ventrikül hacminin sabit kalıp basıncın hızla yükseldiği evre.',
        firstVsGold: 'İzovolümetrik Kontraksiyon: S1 sonrası tüm kapaklar kapalı (Diyastol sonu hacim sabit) • İzovolümetrik Relaksasyon: S2 sonrası tüm kapaklar kapalı (Sistol sonu hacim sabit).',
        pearl: 'Kardiyak siklusta tüm kapakların kapalı olduğu iki evre: İzovolümetrik kontraksiyon ve İzovolümetrik relaksasyon evreleridir.',
        trueStatement: 'İzovolümetrik kontraksiyon evresinde mitral ve aort kapakları kapalıdır, ventrikül hacmi değişmezken basınç hızla yükselir.',
        falseStatement: 'İzovolümetrik kontraksiyon evresinde aort kapağı açıktır ve aortaya maksimum kan ejeksiyonu gerçekleşir.',
        falseHighlight: 'aort kapağı açıktır ve aortaya maksimum kan ejeksiyonu gerçekleşir',
      },
      {
        entityName: 'SA Düğüm Faz 4 Pacemaker Potansiyeli — Funny (If) Na+ Kanalı ve İvabradin',
        patientVignette:
          'İstirahatte kalp hızı yüksek olan bir hastada ventrikül kontraktilitesini (inotropiyi) hiç azaltmadan yalnızca sinoatriyal düğümdeki pacemaker funny (If) kanallarını seçici olarak inhibe eden bir ajan (ivabradin) kullanılıyor.',
        clues: ['sinoatriyal düğüm pacemaker', 'funny (If) kanalları', 'ivabradin'],
        questionPrompt: 'Sinoatriyal düğümde spontan yavaş diyastolik depolarizasyonu (otomatisiteyi) oluşturan temel faz ve kanal hangisidir?',
        mechanism:
          'SA düğüm aksiyon potansiyelinde gerçek bir istirahat potansiyeli yoktur; Faz 4’te hiperpolarizasyonla aktive olan funny Na+ kanalları (If) ve T-tipi Ca2+ kanalları spontan yavaş diyastolik depolarizasyonu oluşturur.',
        whenCorrectNote: 'SA düğümde Faz 4 spontan diyastolik depolarizasyonu (If - funny Na+ akımı; İvabradin tarafından seçici bloke edilir).',
        firstVsGold: 'SA/AV Düğüm Faz 4 (Pacemaker): Funny Na+ (If) kanalı • SA/AV Düğüm Faz 0 (Depolarizasyon): Yavaş L-tipi Ca2+ kanalı.',
        pearl: 'SA ve AV düğümde Faz 0 depolarizasyonunu hızlı Na+ kanalları değil, yavaş L-tipi Ca2+ kanalları oluşturur; Faz 4’ten ise If (funny Na+) sorumludur.',
        trueStatement: 'Sinoatriyal düğümde Faz 4 spontan pacemaker depolarizasyonundan funny (If) Na+ kanalları sorumludur ve ivabradin bu kanalı bloke eder.',
        falseStatement: 'Sinoatriyal düğüm hücrelerinde Faz 0 hızlı depolarizasyon evresini voltaj kapılı hızlı Na+ kanalları oluşturur.',
        falseHighlight: 'Faz 0 hızlı depolarizasyon evresini voltaj kapılı hızlı Na+ kanalları oluşturur',
      },
      {
        entityName: 'S3 Kalp Sesi — Erken Diyastol Hızlı Ventriküler Doluş ve Sistolik Kalp Yetmezliği',
        patientVignette:
          '64 yaşında dilate kardiyomiyopatili hastada oskültasyonda S2’den hemen sonra, erken diyastolde apeks odaklarında çan (bell) kısmı ile en iyi duyulan düşük frekanslı "protodiyastolik galop" sesi saptanıyor.',
        clues: ['dilate kardiyomiyopati', 'S2’den hemen sonra, erken diyastolde', 'protodiyastolik galop'],
        questionPrompt: 'Hızlı ventriküler doluş evresinde volüm yüklenmesi sonucu duyulan bu kalp sesi hangisidir?',
        mechanism:
          'S3 kalp sesi, erken diyastoldeki hızlı ventriküler doluş evresinde genişlemiş ventriküle hızla dolan kanın ventrikül duvarında oluşturduğu titreşimdir; sistolik kalp yetmezliği ve mitral yetmezliğinde duyulur.',
        whenCorrectNote: 'Erken diyastolde (hızlı ventriküler doluş evresi) dilate ventrikül / volüm yüklenmesinde duyulan ek ses.',
        firstVsGold: 'S3 Sesi: Erken diyastol (Hızlı doluş, dilate KMP / sistolik KY) • S4 Sesi: Geç diyastol (Atriyal kontraksiyon, hipertrofik KMP / aort darlığı).',
        pearl: 'S3 erken diyastolde (hızlı doluşta) volüm yüklenmesi/dilate ventrikülde duyulur; S4 ise geç diyastolde (atriyal kontraksiyonda) hipertrofik/sert ventrikülde duyulur.',
        trueStatement: 'S3 kalp sesi erken diyastoldeki hızlı ventriküler doluş evresinde oluşur ve sistolik kalp yetmezliğinin önemli bir bulgusudur.',
        falseStatement: 'S3 kalp sesi geç diyastolde atriyal kontraksiyon sırasında oluşur ve atriyal fibrilasyonda kaybolur.',
        falseHighlight: 'geç diyastolde atriyal kontraksiyon sırasında oluşur ve atriyal fibrilasyonda kaybolur',
      },
      {
        entityName: 'S4 Kalp Sesi — Geç Diyastol Atriyal Kontraksiyon, Sert Ventrikül ve AF’de Kaybolma',
        patientVignette:
          '68 yaşında uzun süreli kontrolsüz sistemik hipertansiyonu ve şiddetli aort darlığı olan hastada S1’den hemen önce (presistolik) duyulan bir ek ses saptanıyor. Hastada atriyal fibrilasyon geliştiğinde bu sesin tamamen kaybolduğu görülüyor.',
        clues: ['şiddetli aort darlığı ve hipertansiyon', 'S1’den hemen önce (presistolik)', 'atriyal fibrilasyon geliştiğinde tamamen kaybolduğu'],
        questionPrompt: 'Kompliyansı azalmış sert ventriküle atriyal sistolde kanın çarpmasıyla oluşan ve AF’de kaybolan bu ses hangisidir?',
        mechanism:
          'S4 kalp sesi, geç diyastolde atriyal kontraksiyon (JVP’de a dalgası) sırasında kanın kompliyansı azalmış, sert/hipertrofik ventriküle çarpmasıyla oluşur. Atriyal fibrilasyonda efektif atriyal kasılma olmadığı için S4 asla duyulmaz.',
        whenCorrectNote: 'Geç diyastolde (atriyal kontraksiyonda) hipertrofik/sert ventrikülde duyulan ve atriyal fibrilasyonda kaybolan ses.',
        firstVsGold: 'Atriyal Fibrilasyonda Kaybolan İki Bulgu: JVP’de "a" dalgası ve Oskültasyonda S4 kalp sesi.',
        pearl: 'Atriyal fibrilasyonda hem juguler venöz nabızdaki "a" dalgası hem de S4 kalp sesi tamamen kaybolur.',
        trueStatement: 'S4 kalp sesi geç diyastolde atriyal kontraksiyonla sert ventriküle kanın pompalanması sonucu oluşur ve atriyal fibrilasyonda kaybolur.',
        falseStatement: 'S4 kalp sesi sağlıklı genç sporcularda fizyolojik olarak sık duyulur ve atriyal fibrilasyonda şiddeti artar.',
        falseHighlight: 'sağlıklı genç sporcularda fizyolojik olarak sık duyulur ve atriyal fibrilasyonda şiddeti artar',
      },
      {
        entityName: 'Juguler Venöz Nabızda Dev "c-v" Dalgası — Triküspit Yetmezliği',
        patientVignette:
          'İntravenöz ilaç kullanımı öyküsü ve sağ kalp endokarditi bulunan hastada boyun venlerinde ventrikül sistolü sırasında belirginleşen sistolik pulsatil "dev c-v dalgası" ve pulsatil hepatomegali saptanıyor.',
        clues: ['sağ kalp endokarditi', 'boyun venlerinde sistolik dev c-v dalgası', 'pulsatil hepatomegali'],
        questionPrompt: 'Boyun venöz nabzında "x" inişinin silinip dev "c-v" dalgasının görülmesine yol açan kapak patolojisi hangisidir?',
        mechanism:
          'Triküspit yetmezliğinde ventrikül sistolü sırasında kan sağ ventrikülden sağ atriyuma geri kaçar; normaldeki "x" inişi silinir ve sistolik dev "c-v" dalgası oluşur.',
        whenCorrectNote: 'Triküspit yetmezliğinde sağ atriyuma sistolik regürjitasyon sonucu JVP’de oluşan dev "c-v" dalgası.',
        firstVsGold: 'Dev "a" (Cannon a) Dalgası: AV tam blok / Triküspit darlığı • Dev "v" (c-v) Dalgası: Triküspit yetmezliği.',
        pearl: 'JVP’de dev "a" dalgası triküspit darlığı ve AV tam blokta (cannon a); dev "v" (c-v) dalgası ise triküspit yetmezliğinde görülür.',
        trueStatement: 'Triküspit yetmezliğinde ventrikül sistolü sırasında sağ atriyuma kaçan kan boyun venlerinde dev "c-v" dalgası oluşturur.',
        falseStatement: 'Triküspit yetmezliğinde juguler venöz nabızda "x" inişi derinleşir ve "v" dalgası tamamen kaybolur.',
        falseHighlight: '"x" inişi derinleşir ve "v" dalgası tamamen kaybolur',
      },
    ],
  },
  // 8. HİSTOLOJİ & EMBRİYOLOJİ: Ürogenital Sistem Embriyolojisi
  {
    branchId: 'histoloji',
    subTopic: 'Ürogenital Embriyoloji, Wolff ve Müller Kanalları',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Mezonefrik Kanal (Wolff) — Epididimis, Ductus Deferens, Vesicula Seminalis ve Üreter Tomurcuğu',
        patientVignette:
          'Embriyolojik gelişim sırasında Leydig hücrelerinden salgılanan testosteron etkisiyle erkek fetüste farklılaşan ve iç genital kanalları (epididimis, ductus deferens, vesicula seminalis) ile üreter tomurcuğunu oluşturan yapı inceleniyor.',
        clues: ['testosteron etkisiyle farklılaşan', 'epididimis, ductus deferens, vesicula seminalis', 'üreter tomurcuğu'],
        questionPrompt: 'Erkekte iç genital kanalları ve böbreğin toplayıcı sistemini (üreter tomurcuğu) oluşturan bu embriyolojik kanal hangisidir?',
        mechanism:
          'Mezonefrik (Wolff) kanal testosteron varlığında epididimis, ductus deferens, vesicula seminalis ve ductus ejaculatorius’u oluşturur; ayrıca verdiği üreter tomurcuğu toplayıcı kanallar, kaliksler, pelvis renalis ve üreteri yapar.',
        whenCorrectNote: 'Testosteron bağımlı erkek iç genital kanalları (SEED) ve böbrek üreter tomurcuğunun kökeni.',
        firstVsGold: 'Wolff (Mezonefrik) Türevleri: Epididimis, Ductus deferens, Seminal vezikül, Üreter tomurcuğu • Ürogenital Sinüs: Prostat ve Mesane.',
        pearl: 'Wolff (Mezonefrik) kanalı türevleri (SEED): Seminal vezikül, Epididimis, Ejakülatuar kanal, Ductus deferens (ve böbrekte Üreter tomurcuğu).',
        trueStatement: 'Mezonefrik (Wolff) kanalı erkekte epididimis, ductus deferens ve vesicula seminalis’i, üriner sistemde ise üreter tomurcuğunu oluşturur.',
        falseStatement: 'Prostat bezi ve bulbouretral bezler mezonefrik (Wolff) kanalından gelişir.',
        falseHighlight: 'mezonefrik (Wolff) kanalından gelişir',
      },
      {
        entityName: 'Paramezonefrik Kanal (Müller) — Tuba Uterina, Uterus ve Üst Vajina (MRKH Sendromu)',
        patientVignette:
          '17 yaşında primer amenore ile başvuran, meme gelişimi ve aksiller/pubik kıllanması tamamen normal (46,XX) olan genç kızda pelvik USG’de overlerin normal olduğu ancak uterus ve üst vajinanın gelişmediği (Mayer-Rokitansky-Küster-Hauser sendromu) saptanıyor.',
        clues: ['46,XX ve normal sekonder seks karakterleri', 'overlerin normal olduğu', 'uterus ve üst vajinanın gelişmediği (MRKH)'],
        questionPrompt: 'Gelişmemesi halinde 46,XX bireyde uterus yokluğuna (MRKH sendromu) yol açan bu embriyolojik yapı hangisidir?',
        mechanism:
          'Paramezonefrik (Müller) kanallar AMH (Anti-Müllerian Hormon) yokluğunda gelişerek tuba uterina, uterus, serviks ve vajinanın üst 1/3 kısmını oluşturur.',
        whenCorrectNote: 'Tuba uterina, uterus, serviks ve vajina üst 1/3’ünün kökeni (Agenezisinde MRKH sendromu gelişir, overler normaldir).',
        firstVsGold: 'Müllerian Agenezi (MRKH): 46,XX + Normal meme/kıllanma + Normal over + Uterus yok • Androjen Duyarsızlığı (Morris): 46,XY + Normal meme + Kıllanma yok + Uterus yok.',
        pearl: 'Müllerian agenezide (MRKH sendromu) karyotip 46,XX’tir, overler ve sekonder seks karakterleri normaldir; uterus yoktur.',
        trueStatement: 'Paramezonefrik (Müller) kanalları tuba uterina, uterus ve üst vajinayı oluşturur; agenezisinde 46,XX MRKH sendromu görülür.',
        falseStatement: 'Paramezonefrik (Müller) kanalından overler ve vajinanın alt 2/3’lük bölümü gelişir.',
        falseHighlight: 'overler ve vajinanın alt 2/3’lük bölümü gelişir',
      },
      {
        entityName: 'Ürogenital Sinüs (Endoderm) — Mesane, Üretra, Prostat Bezi ve Alt Vajina',
        patientVignette:
          'Erkek embriyoda dihidrotestosteron (DHT) etkisiyle üretranın prostatik parçasının endoderminden tomurcuklanarak gelişen yardımcı genital bez ile her iki cinste mesane epitelini oluşturan embriyolojik yapı değerlendiriliyor.',
        clues: ['dihidrotestosteron (DHT) etkisiyle', 'prostat bezi ve mesane epiteli', 'endoderm kökenli'],
        questionPrompt: 'Mesane, üretra, prostat bezi ve vajinanın alt bölümünü oluşturan endodermal yapı hangisidir?',
        mechanism:
          'Kloakanın ön bölümü olan Ürogenital sinüs (endoderm kökenli); her iki cinste mesane ve üretrayı, erkekte prostat ve bulbouretral (Cowper) bezleri, dişide ise vajina alt 2/3’ü ve Bartholin bezlerini oluşturur.',
        whenCorrectNote: 'Endoderm kökenli mesane, üretra, prostat bezi, Cowper/Bartholin bezleri ve alt vajinanın kökeni.',
        firstVsGold: 'Testosteron Bağımlı: Wolff kanalı (İç genital) • Dihidrotestosteron (DHT) Bağımlı: Ürogenital sinüs (Prostat) ve Dış genitalya.',
        pearl: 'Mesane epitelinin tamamı endodermden (ürogenital sinüs) köken alır; prostat bezi de mezodermden değil ürogenital sinüs endoderminden gelişir.',
        trueStatement: 'Mesane mukozası, üretra, prostat bezi ve vajina alt bölümü endoderm kökenli ürogenital sinüsten gelişir.',
        falseStatement: 'Mesane mukozası ve prostat bezi intermediyer mezodermden (metanefrik blastem) gelişir.',
        falseHighlight: 'intermediyer mezodermden (metanefrik blastem) gelişir',
      },
      {
        entityName: 'Metanefrik Blastem — Glomerül, Bowman Kapsülü, Proksimal/Distal Tübüller ve Henle Kulpu',
        patientVignette:
          'Kalıcı böbreğin (metanefroz) gelişimi sırasında üreter tomurcuğunun indüksiyonu ile nefronun sekretuar birimlerini (Bowman kapsülü, proksimal kıvrıntılı tübül, Henle kulpu ve distal kıvrıntılı tübül) oluşturan embriyolojik yapı inceleniyor.',
        clues: ['kalıcı böbrek (metanefroz)', 'Bowman kapsülü, proksimal tübül, Henle kulpu ve distal tübül', 'nefronun sekretuar birimleri'],
        questionPrompt: 'Kalıcı böbrekte distal tübüle kadar olan fonksiyonel nefron birimlerini oluşturan mezodermal yapı hangisidir?',
        mechanism:
          'Kalıcı böbrek iki farklı mezodermal kaynaktan gelişir: Metanefrik blastem nefronları (glomerül -> distal tübül) oluştururken, üreter tomurcuğu toplayıcı sistemi (toplayıcı kanallar -> üreter) oluşturur.',
        whenCorrectNote: 'Böbrekte Bowman kapsülü, proksimal tübül, Henle kulpu ve distal tübülü oluşturan yapı.',
        firstVsGold: 'Metanefrik Blastem: Glomerül -> Distal tübül (Nefron) • Üreter Tomurcuğu: Toplayıcı kanallar -> Kaliksler -> Pelvis -> Üreter.',
        pearl: 'Böbrekte distal tübüle kadar olan nefron birimleri Metanefrik blastemden; toplayıcı kanallar, kaliksler, pelvis ve üreter ise Üreter tomurcuğundan gelişir.',
        trueStatement: 'Kalıcı böbrekte Bowman kapsülü, proksimal tübül, Henle kulpu ve distal tübül metanefrik blastemden gelişir.',
        falseStatement: 'Böbreğin toplayıcı kanalları ve majör kaliksleri metanefrik blastemden gelişir.',
        falseHighlight: 'toplayıcı kanalları ve majör kaliksleri metanefrik blastemden gelişir',
      },
      {
        entityName: 'Gubernakulum Türevleri — Ligamentum Teres Uteri ve Ligamentum Ovarii Proprium',
        patientVignette:
          'Kadınlarda uterusun antevert pozisyonda kalmasını sağlayan, inguinal kanaldan geçerek labium majus’a tutunan bağın embriyolojik kökeni ve erkekteki homoloğu araştırılıyor.',
        clues: ['uterusun antevert pozisyonu', 'inguinal kanaldan geçerek labium majus’a tutunan bağ', 'Ligamentum teres uteri'],
        questionPrompt: 'Dişide Lig. ovarii proprium ve Lig. teres uteri’yi oluşturan embriyolojik yapı hangisidir?',
        mechanism:
          'Embriyolojik Gubernakulum erkekte testisin skrotuma inişine rehberlik eder (Gubernakulum testis); dişide ise Lig. ovarii proprium ve inguinal kanaldan labium majus’a uzanan Lig. teres uteri’yi (round ligament) oluşturur.',
        whenCorrectNote: 'Dişide Lig. teres uteri (inguinal kanaldan geçip labium majusa tutunur) ve Lig. ovarii proprium’un embriyolojik kökeni.',
        firstVsGold: 'Gubernakulum Dişi Türevleri: Lig. ovarii proprium + Lig. teres uteri • Umbilikal Ven Kalıntısı: Lig. teres hepatis.',
        pearl: 'Gubernakulum dişide Lig. ovarii proprium ve Lig. teres uteri’yi (inguinal kanaldan geçip labium majusa tutunur) oluşturur.',
        trueStatement: 'Embriyolojik gubernakulum dişide Ligamentum ovarii proprium ve inguinal kanaldan geçen Ligamentum teres uteri’yi oluşturur.',
        falseStatement: 'Ligamentum teres uteri embriyolojik olarak göbek kordonundaki oblitere V. umbilicalis’ten gelişir.',
        falseHighlight: 'göbek kordonundaki oblitere V. umbilicalis’ten gelişir',
      },
    ],
  },
  // 9. PEDİATRİ: Yenidoğan Solunum ve Gastrointestinal Acilleri
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Solunum ve Gastrointestinal Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Yenidoğanın Geçici Takipnesi (TTN — Elektif Sezaryen, Fissürde Sıvı ve Hiperinflasyon)',
        patientVignette:
          '38 haftalık elektif sezaryen ile doğan bebekte doğumdan sonraki ilk saatlerde başlayan takipne (80/dk) saptanıyor. Akciğer grafisinde havalanma artışı (hiperinflasyon), perihiler çizgilenme ve interlober fissürde sıvı görülüyor; bebek 48 saat içinde oksijenle tamamen düzeliyor.',
        clues: ['elektif sezaryen ile doğan term bebek', 'interlober fissürde sıvı ve hiperinflasyon', '48 saat içinde tamamen düzeliyor'],
        questionPrompt: 'Bu yenidoğanda fetal akciğer sıvısının emilim gecikmesine bağlı gelişen en olası tanı hangisidir?',
        mechanism:
          'Doğum eylemi (travay) yaşanmadan yapılan elektif sezaryende epitelyal Na+ kanalları (ENaC) yeterince aktive olamaz ve fetal akciğer sıvısının emilimi gecikir (Islak Akciğer / TTN).',
        whenCorrectNote: 'Term elektif sezaryen bebeğinde akciğer sıvısı emilim gecikmesi, grafide fissürde sıvı + hiperinflasyon, 48-72 saatte düzelme.',
        firstVsGold: 'TTN (Islak Akciğer): Term/Sezaryen + Fissürde sıvı + Hiperinflasyon • RDS: Prematüre + Buzlu cam + Hava bronkogramı + Hipoareasyon.',
        pearl: 'Term ve elektif sezaryen bebekte fissürde sıvı + hiperinflasyon = TTN; prematüre bebekte buzlu cam + hava bronkogramı = RDS.',
        trueStatement: 'Yenidoğanın geçici takipnesi (TTN) elektif sezaryenle doğan term bebeklerde sık görülür ve grafide interlober fissürde sıvı ile karakterizedir.',
        falseStatement: 'Yenidoğanın geçici takipnesinde (TTN) akciğer grafisinde buzlu cam görünümü vardır ve acil endotrakeal sürfaktan verilir.',
        falseHighlight: 'buzlu cam görünümü vardır ve acil endotrakeal sürfaktan verilir',
      },
      {
        entityName: 'Respiratuvar Distres Sendromu (RDS — Sürfaktan Eksikliği, Buzlu Cam ve Hava Bronkogramı)',
        patientVignette:
          '29 gebelik haftasında doğan prematüre bebekte doğumdan hemen sonra başlayan şiddetli solunum sıkıntısı, inleme (grunting), çekilmeler ve siyanoz gelişiyor. Akciğer grafisinde yaygın retikülogranüler "buzlu cam" görünümü ve hava bronkogramları saptanıyor.',
        clues: ['29 haftalık prematüre bebek', 'retikülogranüler buzlu cam görünümü', 'hava bronkogramları'],
        questionPrompt: 'Tip II pnömositlerden sentezlenen sürfaktan eksikliğine bağlı gelişen bu tablo aşağıdakilerden hangisidir?',
        mechanism:
          'Sürfaktan (dipalmitoil fosfatidilkolin - lesitin) eksikliği sonucu alveol yüzey gerilimi artar ve yaygın atelektazi gelişir. Maternal diyabette fetal hiperinsülinemi sürfaktan sentezini baskılayarak RDS riskini artırır.',
        whenCorrectNote: 'Prematüre bebekte sürfaktan eksikliği, grafide buzlu cam + hava bronkogramı, tedavide nazal CPAP ve intratrakeal sürfaktan.',
        firstVsGold: 'RDS Riskini Artıran: Maternal diyabet (İnsülin sürfaktanı baskılar) • RDS Riskini Azaltan: Antenatal betametazon ve kronik intrauterin stres.',
        pearl: 'RDS riskini artıran en önemli maternal faktör maternal diyabettir; antenatal betametazon ise RDS ve İVK riskini azaltır.',
        trueStatement: 'Respiratuvar Distres Sendromunda (RDS) akciğer grafisinde buzlu cam görünümü ve hava bronkogramları görülür; tedavide sürfaktan verilir.',
        falseStatement: 'Maternal diyabet, fetüste kortizol sentezini uyararak Respiratuvar Distres Sendromu (RDS) riskini belirgin azaltır.',
        falseHighlight: 'fetüste kortizol sentezini uyararak Respiratuvar Distres Sendromu (RDS) riskini belirgin azaltır',
      },
      {
        entityName: 'Nekrotizan Enterokolit (NEK — Prematürite ve Pnömatozis İntestinalis)',
        patientVignette:
          '30 haftalık doğan ve hiperosmolar mama ile enteral beslenmeye başlanan prematüre bebekte yaşamın 10. gününde batın distansiyonu, safralı kusma ve kanlı dışkılama gelişiyor. Direkt batın grafisinde bağırsak duvarı içinde hava kabarcıkları (pnömatozis intestinalis) saptanıyor.',
        clues: ['prematüre bebekte enteral beslenme sonrası', 'batın distansiyonu ve kanlı dışkılama', 'pnömatozis intestinalis'],
        questionPrompt: 'Direkt batın grafisinde pnömatozis intestinalis saptanan bu yenidoğan acili aşağıdakilerden hangisidir?',
        mechanism:
          'Prematürite, bağırsak iskemisi ve enteral beslenme sonucu distal ileum ve proksimal kolonda mukozal nekroz gelişir; bakteriyel gaz bağırsak duvarına geçerek patognomonik pnömatozis intestinalis’i oluşturur.',
        whenCorrectNote: 'Prematürede kanlı dışkı + safralı kusma + grafide bağırsak duvarında hava (pnömatozis intestinalis) ve portal vende gaz.',
        firstVsGold: 'NEK Patognomonik Bulgu: Pnömatozis intestinalis (Medikal tedavi: NPO + NG + Antibiyotik) • Kesin Cerrahi Endikasyon: Pnömoperitoneum (Perforasyon).',
        pearl: 'NEK için radyolojik patognomonik bulgu Pnömatozis intestinalis’tir; kesin cerrahi endikasyon ise pnömoperitoneum (serbest hava) varlığıdır.',
        trueStatement: 'Nekrotizan enterokolitte radyolojik patognomonik bulgu pnömatozis intestinalis olup perforasyon (pnömoperitoneum) gelişirse cerrahi yapılır.',
        falseStatement: 'Nekrotizan enterokolitte pnömatozis intestinalis görülmesi tek başına acil laparotomi için mutlak endikasyondur ve oral beslenmeye devam edilir.',
        falseHighlight: 'tek başına acil laparotomi için mutlak endikasyondur ve oral beslenmeye devam edilir',
      },
      {
        entityName: 'Konjenital Diyafragma Hernisi (Bochdalek — Kayık Batın ve Maske-Balon Kontrendikasyonu)',
        patientVignette:
          'Doğum odasında ağır siyanoz ve solunum sıkıntısı gelişen yenidoğanın fizik muayenesinde karnın çökük (skafoid/kayık batın) olduğu, kalp tepe atımının sağa kaydığı ve sol hemitoraksta bağırsak sesleri duyulduğu saptanıyor.',
        clues: ['çökük (skafoid/kayık) batın', 'sol hemitoraksta bağırsak sesleri', 'ağır siyanoz ve solunum sıkıntısı'],
        questionPrompt: 'Doğum odasında maske-balon ventilasyonun kesinlikle kontrendike olduğu ve derhal entübe edilmesi gereken bu tablo hangisidir?',
        mechanism:
          'Posterolateral Bochdalek deliğinin (%85 solda) kapanmaması sonucu batın organları toraksa fıtıklaşır ve ağır pulmoner hipoplaziye yol açar.',
        whenCorrectNote: 'Kayık (çökük) batın + sol toraksta bağırsak sesleri + pulmoner hipoplazi (Resüsitasyonda maske-balon kontrendikedir, hemen entübe edilir).',
        firstVsGold: 'Bochdalek Hernisi İlk Müdahale: Derhal Endotrakeal Entübasyon + NG Dekompresyon (Maske-balon/ambu KESİNLİKLE kontrendikedir).',
        pearl: 'Konjenital diyafragma hernisinde maske-balon (ambu) ile ventilasyon kesinlikle kontrendikedir; hemen entübe edilir. En önemli mortalite nedeni pulmoner hipoplazidir.',
        trueStatement: 'Konjenital diyafragma hernisinde (Bochdalek) kayık batın görülür ve doğum odasında maske-balon ventilasyon kontrendike olup hemen entübasyon yapılır.',
        falseStatement: 'Konjenital diyafragma hernisinde doğum odasında ilk yapılacak işlem maske-balon (ambu) ile yüksek basınçlı ventilasyondur.',
        falseHighlight: 'ilk yapılacak işlem maske-balon (ambu) ile yüksek basınçlı ventilasyondur',
      },
      {
        entityName: 'Duodenal Atrezi (Trizomi 21 Birlikteliği, Safralı Kusma ve Double-Bubble Grafisi)',
        patientVignette:
          'Polihidramnios öyküsü olan ve Down sendromu (Trizomi 21) fenotipi taşıyan yenidoğanda doğumdan sonraki ilk saatlerde safralı kusma başlıyor. Direkt batın grafisinde mide ve proksimal duodenumda "çift hava kabarcığı (double-bubble)" görünümü saptanıyor, distalde hiç gaz görülmüyor.',
        clues: ['Down sendromu (Trizomi 21)', 'ilk saatlerde safralı kusma', 'çift hava kabarcığı (double-bubble)'],
        questionPrompt: 'Direkt batın grafisinde double-bubble görünümü ve distalde gaz yokluğu ile karakterize bu konjenital anomali hangisidir?',
        mechanism:
          'Embriyonik dönemde duodenal lümenin rekanalizasyon kusuru sonucu gelişir; olguların %30’unda Down sendromu (Trizomi 21) eşlik eder.',
        whenCorrectNote: 'Trizomi 21 + polihidramnios + ilk gün safralı kusma + grafide double-bubble işareti.',
        firstVsGold: 'Duodenal Atrezi: Safralı kusma + Double-bubble + Trizomi 21 • Pilor Stenozu: 3-6. haftada safrasız fışkırır kusma + Zeytin kitlesi + Hipokloremik metabolik alkaloz.',
        pearl: 'Yenidoğanda double-bubble + safralı kusma + Trizomi 21 = Duodenal atrezi; safrasız kusma + zeytin kitlesi + metabolik alkaloz = Pilor stenozu.',
        trueStatement: 'Duodenal atrezi Trizomi 21 ile sık birliktelik gösterir, safralı kusma ve direkt grafide double-bubble görünümü yapar.',
        falseStatement: 'Duodenal atrezide kusma her zaman safrasızdır ve radyolojide "triple-bubble" (üçlü kabarcık) görünümü tipiktir.',
        falseHighlight: 'kusma her zaman safrasızdır ve radyolojide "triple-bubble" (üçlü kabarcık) görünümü tipiktir',
      },
    ],
  },
  // 10. PEDİATRİ: Çocukluk Çağı Vaskülitleri ve Romatolojik Sendromlar
  {
    branchId: 'pediatri',
    subTopic: 'Çocukluk Çağı Vaskülitleri ve Romatolojik Sendromlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'IgA Vasküliti (Henoch-Schönlein Purpurası — Normal Trombositli Palpabl Purpura)',
        patientVignette:
          '7 yaşında erkek çocuk ÜSYE’den 1 hafta sonra kalça ve alt ekstremitelerde basmakla solmayan kabarık döküntüler (palpabl purpura), ayak bileklerinde artrit, kolik karın ağrısı ve mikroskopik hematüri ile getiriliyor. Trombosit sayısı 340.000/mm³ (normal) saptanıyor.',
        clues: ['alt ekstremitelerde palpabl purpura', 'kolik karın ağrısı ve hematüri', 'trombosit sayısı 340.000/mm³ (normal)'],
        questionPrompt: 'Çocukluk çağının en sık vasküliti olan ve trombositopeni olmaksızın palpabl purpura yapan bu hastalık hangisidir?',
        mechanism:
          'Küçük damarlarda ve böbrek mezangiumunda IgA1 immün kompleks birikimi ile karakterize lökositoklastik vaskülittir. GİS tutulumunda ileoileal invajinasyon gelişebilir; uzun dönem prognozu böbrek tutulumu belirler.',
        whenCorrectNote: 'Normal trombosit + alt ekstremitede palpabl purpura + artrit + karın ağrısı (ileoileal invajinasyon) + hematüri (IgA birikimi).',
        firstVsGold: 'HSP Akut Cerrahi Komplikasyon: İleoileal invajinasyon • Uzun Dönem Prognozu Belirleyen: Böbrek tutulumu (HSP nefriti).',
        pearl: 'HSP’de trombosit sayısı normaldir; en sık akut cerrahi komplikasyon ileoileal invajinasyon, uzun dönem prognozu belirleyen ise böbrek tutulumudur.',
        trueStatement: 'Henoch-Schönlein purpurasında (IgA vasküliti) trombosit sayısı normaldir, ileoileal invajinasyona yol açabilir ve prognozu böbrek tutulumu belirler.',
        falseStatement: 'Henoch-Schönlein purpurasında döküntülerin nedeni ağır immün trombositopenidir ve en sık ileokolik invajinasyon görülür.',
        falseHighlight: 'ağır immün trombositopenidir ve en sık ileokolik invajinasyon görülür',
      },
      {
        entityName: 'Kawasaki Hastalığı (≥5 Gün Ateş, Eksüdasız Konjonktivit ve Koroner Arter Anevrizması)',
        patientVignette:
          '3 yaşında çocuk 6 gündür düşmeyen yüksek ateş, bilateral eksüdasız konjonktivit, çilek dili, el ve ayak sırtında ödem, polimorf döküntü ve tek taraflı servikal LAP ile başvuruyor. Subakut dönemde belirgin trombositoz saptanıyor.',
        clues: ['6 gündür düşmeyen yüksek ateş', 'bilateral eksüdasız konjonktivit ve çilek dili', 'subakut dönemde belirgin trombositoz'],
        questionPrompt: 'Tedavi edilmediğinde koroner arter anevrizmasına yol açan ve İVİG + Aspirin ile tedavi edilen bu vaskülit hangisidir?',
        mechanism:
          'Orta çaplı arterleri, özellikle koroner arterleri tutan nekrotizan vaskülittir. Tedavi edilmeyen vakaların %20-25’inde koroner arter anevrizması gelişir.',
        whenCorrectNote: '≥5 gün ateş + eksüdasız konjonktivit + mukozit (çilek dili) + koroner arter anevrizması riski (Tedavi: İVİG + Aspirin).',
        firstVsGold: 'Kawasaki En Korkulan Komplikasyon: Koroner arter anevrizması (Tanı/Takip: Ekokardiyografi) • Standart Tedavi: Yüksek doz İVİG + Aspirin.',
        pearl: 'Kawasaki hastalığında en korkulan komplikasyon koroner arter anevrizmasıdır; İVİG tedavisi bu riski %25’ten %3’ün altına düşürür.',
        trueStatement: 'Kawasaki hastalığı orta çaplı damarları (özellikle koroner arterleri) tutar ve tedavisinde yüksek doz İVİG ile aspirin kullanılır.',
        falseStatement: 'Kawasaki hastalığında konjonktivit pürülan-eksüdatif karakterdedir ve tedavide Reye sendromu riski nedeniyle aspirin kesinlikle kontrendikedir.',
        falseHighlight: 'pürülan-eksüdatif karakterdedir ve tedavide Reye sendromu riski nedeniyle aspirin kesinlikle kontrendikedir',
      },
      {
        entityName: 'Akut Romatizmal Ateş (ARA — AGBHS Sonrası Gezici Poliartrit, Kardit ve Sydenham Koresi)',
        patientVignette:
          '10 yaşında çocuk tedavi edilmemiş tonsillofarenjitten 3 hafta sonra diz ve ayak bileklerinde dramatik şekilde yer değiştiren şişlik/ağrı (gezici poliartrit) ve apekste yeni başlayan pansistolik mitral yetmezlik üfürümü ile başvuruyor. ASO titresi yüksek saptanıyor.',
        clues: ['tonsillofarenjitten 3 hafta sonra', 'gezici poliartrit', 'pansistolik mitral yetmezlik üfürümü'],
        questionPrompt: 'Modifiye Jones kriterleri ile tanı konulan ve miyokardda Aschoff cisimcikleri oluşturan bu hastalık hangisidir?',
        mechanism:
          'Streptococcus pyogenes (AGBHS) farenjiti sonrası moleküler benzerlik (Tip II aşırı duyarlılık) ile gelişir (cilt enfeksiyonu/impetigo sonrası ARA gelişmez!). En sık majör bulgu gezici poliartrit, en sık tutulan kapak mitral kapaktır.',
        whenCorrectNote: 'AGBHS farenjiti sonrası gezici büyük eklem poliartriti + mitral kapak karditi (Aschoff cisimciği) + Sydenham koresi.',
        firstVsGold: 'ARA En Sık Majör Kriter: Gezici poliartrit • En Sık Tutulan Kapak: Mitral kapak (Akutta MY, kronikte MD) • Patognomonik: Aschoff cisimciği.',
        pearl: 'ARA’nın 5 majör Jones kriteri: Gezici poliartrit (en sık), Kardit (Aschoff cisimciği), Sydenham koresi, Eritema marginatum, Subkutan nodüller.',
        trueStatement: 'Akut Romatizmal Ateş yalnızca AGBHS farenjiti sonrasında gelişir; en sık majör bulgusu gezici poliartrit, en sık tutulan kapak mitral kapaktır.',
        falseStatement: 'Streptokoksik impetigo (deri enfeksiyonu) sonrasında Akut Romatizmal Ateş çok sık gelişir ve en sık triküspit kapağı tutar.',
        falseHighlight: 'impetigo (deri enfeksiyonu) sonrasında Akut Romatizmal Ateş çok sık gelişir ve en sık triküspit kapağı tutar',
      },
      {
        entityName: 'Sistemik Jüvenil İdiyopatik Artrit (Still Hastalığı — Quotidian Ateş, Somon Döküntü ve MAS Riski)',
        patientVignette:
          '5 yaşında çocukta 3 haftadır her akşam 39.5°C’ye çıkan ve hızla normale dönen (quotidian) ateş, ateş sırasında belirginleşen somon pembesi döküntü, hepatosplenomegali ve artrit saptanıyor. Ferritin düzeyi 8.500 ng/mL bulunuyor.',
        clues: ['her akşam 39.5°C’ye çıkan quotidian ateş', 'somon pembesi döküntü', 'Ferritin düzeyi 8.500 ng/mL'],
        questionPrompt: 'Çok yüksek ferritin düzeyi ile seyreden ve Makrofaj Aktivasyon Sendromu (MAS) riski en yüksek olan bu tablo hangisidir?',
        mechanism:
          'IL-1 ve IL-6 aşırı salınımı ile gelişen otoinflamatuvar JİA alt tipidir (ANA ve RF negatiftir). En ölümcül komplikasyonu Makrofaj Aktivasyon Sendromu’dur (MAS: ateşin süreklileşmesi, pansitopeni, fibrinojen ve ESH düşüşü, aşırı hiperferritinemi).',
        whenCorrectNote: 'Günde 1-2 kez pik yapan (quotidian) ateş + somon rengi döküntü + HSM + hiperferritinemi ve MAS riski.',
        firstVsGold: 'Sistemik JİA Komplikasyonu: Makrofaj Aktivasyon Sendromu (Ferritin çok yükselirken Fibrinojen ve ESH hızla düşer!) • Tedavi: Anakinra (IL-1) / Tosilizumab (IL-6).',
        pearl: 'Sistemik JİA hastasında ferritin fırlarken fibrinojen ve sedimantasyon (ESH) aniden düşüyorsa Makrofaj Aktivasyon Sendromu (MAS) gelişmiştir.',
        trueStatement: 'Sistemik JİA (Still hastalığı) quotidian ateş ve somon rengi döküntü ile seyreder; en tehlikeli komplikasyonu Makrofaj Aktivasyon Sendromudur.',
        falseStatement: 'Sistemik JİA (Still hastalığı) olgularının %95’inde ANA ve Romatoid Faktör yüksek titrede pozitiftir ve ön üveit en sık bu tipte görülür.',
        falseHighlight: '%95’inde ANA ve Romatoid Faktör yüksek titrede pozitiftir ve ön üveit en sık bu tipte görülür',
      },
      {
        entityName: 'Oligoartiküler JİA (ANA Pozitif Kız Çocuğu ve Asemptomatik Kronik Ön Üveit)',
        patientVignette:
          '3 yaşında kız çocuk sağ diz ve sol ayak bileğinde (≤4 eklem) 2 aydır süren şişlik ve sabah tutukluğu ile getiriliyor. Göz şikayeti olmayan çocuğun serolojisinde ANA pozitif, RF negatif saptanıyor.',
        clues: ['≤4 eklem tutulumu', 'ANA pozitif, RF negatif', '3 yaşında kız çocuk'],
        questionPrompt: 'JİA’nın en sık görülen ve asemptomatik kronik ön üveit (iridosiklit) riski en yüksek olan bu alt tipi hangisidir?',
        mechanism:
          'JİA’nın en sık görülen alt tipidir (ilk 6 ayda ≤4 eklem tutulumu). Özellikle ANA (+) kız çocuklarında gözde kızarıklık/ağrı yapmadan körlüğe gidebilen kronik asemptomatik ön üveit (iridosiklit) riski çok yüksektir.',
        whenCorrectNote: 'En sık JİA alt tipi (≤4 eklem), ANA (+) kız çocuğunda asemptomatik kronik ön üveit (iridosiklit) riski.',
        firstVsGold: 'Oligoartiküler JİA + ANA (+): Asemptomatik kronik ön üveit (3 ayda bir biyomikroskopi) • Entezit İlişkili Artrit + HLA-B27 (+): Akut ağrılı kızarık ön üveit.',
        pearl: 'ANA (+) oligoartiküler JİA’da ön üveit tamamen asemptomatik (beyaz göz) seyrettiği için 3 ayda bir biyomikroskopik göz muayenesi şarttır.',
        trueStatement: 'Oligoartiküler JİA en sık görülen JİA tipidir ve ANA pozitif kız çocuklarında asemptomatik kronik ön üveit riski çok yüksektir.',
        falseStatement: 'Oligoartiküler JİA’da gelişen üveit her zaman şiddetli göz ağrısı ve kırmızı gözle (akut semptomatik) başlar.',
        falseHighlight: 'her zaman şiddetli göz ağrısı ve kırmızı gözle (akut semptomatik) başlar',
      },
    ],
  },
  // 11. CERRAHİ: Endokrin Cerrahi ve MEN Sendromları
  {
    branchId: 'cerrahi',
    subTopic: 'Endokrin Cerrahi ve MEN Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Primer Hiperparatiroidizm (Soliter Paratiroid Adenomu — Hiperkalsemi ve Hipofosfatemi)',
        patientVignette:
          '54 yaşında kadın hastada rutin biyokimya tetkikinde serum kalsiyumu 11.6 mg/dL, fosfor 2.1 mg/dL, intakt PTH yüksek ve 24 saatlik idrar kalsiyumu 320 mg/gün saptanıyor. DEXA ölçümünde distal radiusta osteoporoz (T skoru -2.8) görülüyor.',
        clues: ['kalsiyum 11.6 mg/dL, fosfor 2.1 mg/dL', 'intakt PTH yüksek', '24 saatlik idrar kalsiyumu 320 mg/gün'],
        questionPrompt: 'Ayaktan hastalarda hiperkalseminin en sık nedeni olan bu endokrin patoloji aşağıdakilerden hangisidir?',
        mechanism:
          'Ayaktan hastalarda hiperkalseminin en sık nedeni primer hiperparatiroidizmdir (%85 soliter paratiroid adenomu). PTH böbrekten kalsiyum geri emilimini artırırken fosfat atılımını artırır (hiperkalsemi + hipofosfatemi).',
        whenCorrectNote: 'Ayaktan hastada en sık hiperkalsemi nedeni (%85 soliter adenom), yüksek Ca + düşük P + yüksek idrar Ca (>200 mg/gün).',
        firstVsGold: 'Primer Hiperparatiroidizm Lokalizasyon: Boyun USG + Tc-99m Sestamibi sintigrafisi • Cerrahi Kontrendike Olan Taklitçi: FHH (İdrar Ca <100 mg/gün).',
        pearl: 'Ayaktan hastada hiperkalseminin en sık nedeni Primer hiperparatiroidizm (%85 soliter adenom); yatan hastada ise Malignitedir.',
        trueStatement: 'Primer hiperparatiroidizm ayaktan hastalarda hiperkalseminin en sık nedenidir ve %85 olguda soliter paratiroid adenomuna bağlıdır.',
        falseStatement: 'Primer hiperparatiroidizmin en sık nedeni dört bezin diffüz hiperplazisidir ve serum fosfor düzeyi her zaman yüksektir.',
        falseHighlight: 'dört bezin diffüz hiperplazisidir ve serum fosfor düzeyi her zaman yüksektir',
      },
      {
        entityName: 'MEN Tip 1 (Wermer Sendromu — Paratiroid Hiperplazisi, Pankreas NÖT ve Hipofiz Adenomu)',
        patientVignette:
          '36 yaşında erkek hastada tekrarlayan refrakter peptik ülserler (Zollinger-Ellison sendromu), hiperkalsemiye bağlı böbrek taşları ve görme alanı defektine yol açan prolaktinoma saptanıyor.',
        clues: ['Zollinger-Ellison sendromu (gastrinoma)', 'hiperkalsemiye bağlı böbrek taşları', 'prolaktinoma'],
        questionPrompt: 'MEN1 (Menin) gen mutasyonu sonucu "3P" (Paratiroid, Pankreas, Pituiter) tutulumuyla seyreden bu sendrom hangisidir?',
        mechanism:
          '11q13 kromozomundaki MEN1 tümör süpresör gen mutasyonu sonucu gelişir. En sık ve ilk ortaya çıkan bulgu dört bez paratiroid hiperplazisine bağlı primer hiperparatiroidizmdir (%95); en sık fonksiyonel pankreas tümörü gastrinomadır.',
        whenCorrectNote: 'MEN1 (Menin) mutasyonu; Paratiroid hiperplazisi (%95 en sık) + Pankreas NÖT (en sık Gastrinoma) + Hipofiz adenomu (Prolaktinoma).',
        firstVsGold: 'MEN 1 En Sık Bileşen: Paratiroid hiperplazisi (%95) • MEN 1 En Sık Fonksiyonel Pankreas Tümörü: Gastrinoma (Zollinger-Ellison).',
        pearl: 'MEN 1 (3P): Paratiroid hiperplazisi (en sık/ilk), Pankreas endokrin tümörü (en sık gastrinoma), Pituiter adenom (en sık prolaktinoma).',
        trueStatement: 'MEN Tip 1 sendromunda en sık ve ilk görülen bulgu primer hiperparatiroidizm olup en sık fonksiyonel pankreas tümörü gastrinomadır.',
        falseStatement: 'MEN Tip 1 sendromunda en sık görülen bileşen tiroid medüller karsinomu ve feokromositomadır.',
        falseHighlight: 'tiroid medüller karsinomu ve feokromositomadır',
      },
      {
        entityName: 'MEN Tip 2A (Sipple Sendromu — RET Mutasyonu: Medüller Tiroid Kanseri ve Feokromositoma)',
        patientVignette:
          '31 yaşında hastada tiroid nodülü biyopsisinde kalsitonin pozitif medüller tiroid karsinomu ve sürrenal bezde epizodik hipertansiyon ataklarına yol açan bilateral feokromositoma saptanıyor.',
        clues: ['kalsitonin pozitif medüller tiroid karsinomu', 'bilateral feokromositoma', 'RET proto-onkogen mutasyonu'],
        questionPrompt: 'RET proto-onkogen mutasyonu ile gelişen ve ameliyatında önce feokromositomanın çıkarılması gereken bu sendrom hangisidir?',
        mechanism:
          'RET proto-onkogen mutasyonu sonucu gelişir (MEN 2A: Medüller tiroid karsinomu %100 + Feokromositoma + Paratiroid hiperplazisi). Hipertansif krizi önlemek için her zaman ÖNCE feokromositoma ameliyat edilmelidir.',
        whenCorrectNote: 'RET proto-onkogen mutasyonu, Medüller tiroid karsinomu + Feokromositoma + Paratiroid hiperplazisi (Önce feokromositoma çıkarılır).',
        firstVsGold: 'MEN 2 Cerrahi Sıralama Altın Kuralı: Önce alfa-blokaj + Feokromositoma rezeksiyonu -> Sonra Medüller tiroid kanseri için tiroidektomi.',
        pearl: 'MEN 2 hastasında cerrahi sıralamada altın kural: Her zaman ÖNCE alfa-blokaj yapılarak Feokromositoma çıkarılır, sonra tiroidektomi yapılır!',
        trueStatement: 'MEN 2A sendromu RET proto-onkogen mutasyonu ile gelişir ve hem medüller tiroid kanseri hem feokromositoma varsa önce feokromositoma çıkarılır.',
        falseStatement: 'MEN 2A sendromlu bir hastada hem medüller tiroid kanseri hem de feokromositoma varsa ilk olarak acil total tiroidektomi yapılmalıdır.',
        falseHighlight: 'ilk olarak acil total tiroidektomi yapılmalıdır',
      },
      {
        entityName: 'N. Laryngeus Superior Dış Dal Yaralanması (Üst Tiroid Polü Ligasyonu ve Tiz Ses Kaybı)',
        patientVignette:
          'Total tiroidektomi ameliyatında üst tiroid polü (A. thyroidea superior) bağlanırken yapılan diseksiyon sonrası ses sanatçısı olan hastada normal konuşma sesi korunurken tiz (yüksek frekanslı) seslere çıkamama ve seste çabuk yorulma gelişiyor.',
        clues: ['üst tiroid polü (A. thyroidea superior) bağlanırken', 'tiz (yüksek frekanslı) seslere çıkamama', 'seste çabuk yorulma'],
        questionPrompt: 'M. cricothyroideus kasını innerve eden ve yaralanmasında tiz ses kaybına yol açan bu sinir hangisidir?',
        mechanism:
          'N. laryngeus superior’un eksternal dalı A. thyroidea superior ile yakın komşulukta seyreder ve vokal kordları geren M. cricothyroideus kasını innerve eder. Yaralanmasında ses teli gerilemez ve tiz sesler çıkarılamaz.',
        whenCorrectNote: 'A. thyroidea superior ligasyonu sırasında yaralanan, M. cricothyroideus felci ve tiz seslerde kayıp yapan sinir.',
        firstVsGold: 'A. thyroidea superior komşuluğu: N. laryngeus superior dış dalı (Tiz ses kaybı) • A. thyroidea inferior komşuluğu: N. laryngeus recurrens (Ses kısıklığı / stridor).',
        pearl: 'A. thyroidea superior bağlanırken N. laryngeus superior dış dalı (tiz ses kaybı); A. thyroidea inferior bağlanırken N. laryngeus recurrens yaralanır.',
        trueStatement: 'Tiroidektomide üst pol damarları (A. thyroidea superior) bağlanırken N. laryngeus superior’un dış dalı yaralanabilir ve tiz seslerde kayıp gelişir.',
        falseStatement: 'N. laryngeus superior eksternal dalının iki taraflı yaralanması vokal kordların orta hatta kapanmasına ve akut asfiksiye yol açar.',
        falseHighlight: 'vokal kordların orta hatta kapanmasına ve akut asfiksiye yol açar',
      },
      {
        entityName: 'Feokromositoma (Epizodik Hipertansiyon/Terleme/Çarpıntı ve Önce Alfa-Blokaj Kuralı)',
        patientVignette:
          '39 yaşında hastada ataklar halinde gelen şiddetli baş ağrısı, terleme, çarpıntı ve kan basıncının 220/130 mmHg’ya çıkması yakınmaları mevcut. Plazma serbest metanefrinleri ve 24 saatlik idrar fraksiyone metanefrinleri çok yüksek, sağ sürrenalde 4 cm kitle saptanıyor.',
        clues: ['baş ağrısı, terleme, çarpıntı atakları', 'plazma ve idrar metanefrinleri çok yüksek', 'sağ sürrenalde 4 cm kitle'],
        questionPrompt: 'Preoperatif hazırlığında alfa-blokaj yapılmadan tek başına beta-blokör verilmesinin kesinlikle kontrendike olduğu bu tümör hangisidir?',
        mechanism:
          'Adrenal medulladaki kromaffin hücrelerden köken alan katekolamin salgılayan tümördür. Preoperatif hazırlıkta önce 10-14 gün alfa-blokör (fenoksibenzamin) verilir; alfa-blokajdan önce beta-blokör verilirse beta-2 vazodilatasyon kalkar ve ölümcül hipertansif kriz gelişir.',
        whenCorrectNote: 'Baş ağrısı + terleme + çarpıntı triyadı, yüksek metanefrinler, preoperatif ÖNCE alfa-blokaj (fenoksibenzamin) sonra beta-blokaj.',
        firstVsGold: 'En Duyarlı Tarama Testi: Plazma serbest metanefrinleri / 24 saatlik idrar metanefrinleri • Preoperatif Altın Kural: Önce Alfa-blokaj (Fenoksibenzamin), sonra Beta-blokaj.',
        pearl: 'Feokromositomada alfa-blokaj yapılmadan tek başına beta-blokör verilmesi karşılıksız alfa-1 vazokonstriksiyonla ölümcül hipertansif krize yol açar!',
        trueStatement: 'Feokromositoma cerrahisi öncesinde hipertansif krizi önlemek için mutlaka önce alfa-blokör (fenoksibenzamin), daha sonra gerekirse beta-blokör başlanır.',
        falseStatement: 'Feokromositoma tanısı konulan hastada ameliyat hazırlığına ilk olarak tek başına yüksek doz propranolol (beta-blokör) ile başlanır.',
        falseHighlight: 'ilk olarak tek başına yüksek doz propranolol (beta-blokör) ile başlanır',
      },
    ],
  },
  // 12. KADIN DOĞUM: Jinekolojik Onkoloji ve Trofoblastik Hastalıklar
  {
    branchId: 'kadindogum',
    subTopic: 'Jinekolojik Onkoloji ve Gestasyonel Trofoblastik Hastalıklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        entityName: 'Komplet Mol Hidatidiform (46,XX Paternal Diploidi, Kar Fırtınası USG ve p57 Negatifliği)',
        patientVignette:
          '10 haftalık gebe hasta vajinal koyu kanama, üzüm tanesi şeklinde vezikül düşürme, hiperemezis gravidarum ve haftasına göre büyük uterus ile başvuruyor. Beta-hCG >150.000 mIU/mL; USG’de fetus izlenmezken "kar fırtınası" görünümü ve bilateral teka-lutein kistleri görülüyor.',
        clues: ['üzüm tanesi şeklinde vezikül', 'Beta-hCG >150.000 mIU/mL', 'fetus izlenmezken kar fırtınası görünümü'],
        questionPrompt: 'Tüm kromozomların babadan geldiği (46,XX androgenetik diploidi) ve p57 boyamasının negatif olduğu bu tablo hangisidir?',
        mechanism:
          'Çekirdeksiz ovumun tek sperm tarafından döllenip duplike olmasıyla (%90 46,XX) gelişir. Fetus yoktur, maternal gen olmadığı için p57 negatiftir ve %15-20 gestasyonel trofoblastik neoplaziye (invaziv mol/koryokarsinom) dönüşür.',
        whenCorrectNote: '46,XX tümüyle paternal diploidi, fetus yok, kar fırtınası USG, teka-lutein kistleri, p57 negatif.',
        firstVsGold: 'Komplet Mol: 46,XX (Paternal) + Fetus yok + p57 (-) + Yüksek malignite riski • Parsiyel Mol: 69,XXY (Triploid) + Fetal kısımlar var + p57 (+).',
        pearl: 'Komplet mol 46,XX (tümüyle paternal), fetus yoktur ve p57 negatiftir; Parsiyel mol ise 69,XXY (triploid), fetus vardır ve p57 pozitiftir.',
        trueStatement: 'Komplet mol hidatidiformda karyotip 46,XX (tümüyle paternal) olup fetüs izlenmez ve p57 immünohistokimyası negatiftir.',
        falseStatement: 'Komplet mol hidatidiformda karyotip 69,XXY triploiddir ve ultrasonografide anomalili canlı fetüs izlenir.',
        falseHighlight: 'karyotip 69,XXY triploiddir ve ultrasonografide anomalili canlı fetüs izlenir',
      },
      {
        entityName: 'Endometrium Kanseri (Tip 1 Endometrioid — Karşılanmamış Östrojen, PTEN ve Postmenopozal Kanama)',
        patientVignette:
          '62 yaşında obez, hipertansif, diyabetik ve nullipar kadın hasta postmenopozal vajinal kanama ile başvuruyor. Transvajinal USG’de endometrium kalınlığı 14 mm ölçülüyor ve biyopside endometrioid adenokarsinom saptanıyor.',
        clues: ['obez, hipertansif, diyabetik ve nullipar', 'postmenopozal vajinal kanama', 'endometrium kalınlığı 14 mm'],
        questionPrompt: 'Karşılanmamış östrojen maruziyeti ve PTEN mutasyonu ile gelişen en sık jinekolojik malignite hangisidir?',
        mechanism:
          'Tip 1 (%80) endometrioid adenokarsinom karşılanmamış östrojen maruziyeti (obezite, PKOS, anovülasyon, nulliparite, tamoksifen) ve atipili hiperplazi zemininde PTEN mutasyonu ile gelişir.',
        whenCorrectNote: 'En sık jinekolojik kanser, postmenopozal kanama, karşılanmamış östrojen + obezite + PTEN mutasyonu.',
        firstVsGold: 'Tip 1 Endometrium Ca: Endometrioid + Östrojen/Obezite + PTEN mutasyonu (İyi prognoz) • Tip 2 Endometrium Ca: Seröz/Berrak hücreli + Atrofi + p53 mutasyonu (Kötü prognoz).',
        pearl: 'Postmenopozal kanamada en sık neden endometriyal atrofidir; ancak ekarte edilmesi gereken en önemli tanı Endometrium kanseridir (altın standart endometriyal biyopsi).',
        trueStatement: 'Tip 1 endometrioid endometrium kanseri karşılanmamış östrojen maruziyeti ve PTEN gen mutasyonu ile ilişkili olup postmenopozal kanama ile başvurur.',
        falseStatement: 'Kombine oral kontraseptif kullanımı ve multiparite endometrium kanseri riskini belirgin olarak artırır.',
        falseHighlight: 'endometrium kanseri riskini belirgin olarak artırır',
      },
      {
        entityName: 'Serviks Kanseri (HPV Tip 16/18 — E6/p53 ve E7/Rb İnhibisyonu, Postkoital Kanama)',
        patientVignette:
          '44 yaşında kadın hasta ilişki sonrası vajinal kanama (postkoital kanama) ile başvuruyor. Spekulum muayenesinde servikste transformasyon zonunda frajil lezyon saptanıyor ve kolposkopik biyopside yassı hücreli karsinom görülüyor.',
        clues: ['ilişki sonrası vajinal kanama (postkoital kanama)', 'transformasyon zonunda frajil lezyon', 'yassı hücreli karsinom'],
        questionPrompt: 'HPV Tip 16/18 E6 ve E7 onkoproteinleri ile gelişen ve Evre IIB’den itibaren kemoradyoterapi ile tedavi edilen bu kanser hangisidir?',
        mechanism:
          'Yüksek riskli HPV (Tip 16 ve 18) E6 proteini p53’ü yıkar, E7 proteini ise Rb tümör süpresör proteinini inaktive eder. Parametrium tutulumu (Evre IIB) ve üzerinde cerrahi yapılmaz, sisplatin bazlı kemoradyoterapi verilir.',
        whenCorrectNote: 'HPV 16/18 (E6 -> p53, E7 -> Rb), postkoital kanama, Evre IIB (parametrium tutulumu) ve üzerinde eşzamanlı kemoradyoterapi.',
        firstVsGold: 'Tarama: Pap Smear + HPV DNA • Kesin Tanı: Kolposkopi eşliğinde biyopsi • Cerrahi Sınırı: Evre IIB (Parametrium tutulumunda radikal histerektomi yapılmaz, kemoradyoterapi verilir).',
        pearl: 'Serviks kanserinde Evre IIB (parametrium tutulumu) ve üzerinde cerrahi yapılmaz; standart tedavi sisplatin bazlı eşzamanlı kemoradyoterapidir.',
        trueStatement: 'Serviks kanserinde HPV E6 proteini p53’ü, E7 proteini Rb’yi inaktive eder; parametrium tutulumu (Evre IIB) varsa tedavi kemoradyoterapidir.',
        falseStatement: 'Serviks kanserinde parametrium tutulumu olan Evre IIB hastalarda ilk tercih tedavi radikal histerektomi ameliyatıdır.',
        falseHighlight: 'Evre IIB hastalarda ilk tercih tedavi radikal histerektomi ameliyatıdır',
      },
      {
        entityName: 'Epitelyal Over Kanseri (Seröz Kistadenokarsinom — Psammom Cisimciği ve CA-125 Yüksekliği)',
        patientVignette:
          '64 yaşında kadın hasta karında şişkinlik, asit ve pelvik kitle ile başvuruyor. USG’de kalın septalı, solid papiller yapılar içeren bilateral adneksiyal kitle ve omental kek görünümü saptanıyor; serum CA-125 düzeyi 980 U/mL bulunuyor.',
        clues: ['asit ve omental kek görünümü', 'solid papiller yapılar içeren bilateral adneksiyal kitle', 'CA-125 düzeyi 980 U/mL'],
        questionPrompt: 'Histopatolojisinde Psammom cisimcikleri görülen ve en sık peritoneal ekim yoluyla yayılan bu over tümörü hangisidir?',
        mechanism:
          'Over tümörlerinin en sık ve en ölümcül grubu epitelyal over kanserleridir (en sık seröz kistadenokarsinom). Psammom cisimcikleri içerir, BRCA1/2 ile ilişkilidir ve kapsül rüptürü riski nedeniyle preoperatif iğne biyopsisi kontrendikedir.',
        whenCorrectNote: 'En sık malign over tümörü, CA-125 yüksekliği, Psammom cisimcikleri, direkt peritoneal yayılım (omental kek).',
        firstVsGold: 'En Sık Malign Over Tümörü: Seröz kistadenokarsinom (CA-125, Psammom cisimciği) • Mide Taşlı Yüzük Hücreli Over Metastazı: Krukenberg tümörü.',
        pearl: 'Şüpheli over kitlelerinde kapsülü yırtıp evreyi yükseltmemek için perkütan ince iğne biyopsisi kontrendikedir; tanı ve evreleme cerrahi ile yapılır.',
        trueStatement: 'Seröz kistadenokarsinom en sık görülen malign over tümörü olup Psammom cisimcikleri içerir ve CA-125 yüksekliği ile seyreder.',
        falseStatement: 'Malignite şüphesi yüksek kistik over kitlelerinde ameliyat öncesi mutlaka ultrason eşliğinde perkütan ince iğne aspirasyon biyopsisi yapılmalıdır.',
        falseHighlight: 'ameliyat öncesi mutlaka ultrason eşliğinde perkütan ince iğne aspirasyon biyopsisi yapılmalıdır',
      },
      {
        entityName: 'Yolk Sac (Endodermal Sinüs) Tümörü — Genç Kızda Yüksek AFP ve Schiller-Duval Cisimciği',
        patientVignette:
          '19 yaşında genç kızda tek taraflı hızlı büyüyen solid adneksiyal kitle saptanıyor. Serum AFP (alfa-fetoprotein) düzeyi çok yüksek bulunuyor ve patolojik incelemede glomerül benzeri "Schiller-Duval cisimcikleri" görülüyor.',
        clues: ['19 yaşında genç kızda hızlı büyüyen kitle', 'AFP (alfa-fetoprotein) düzeyi çok yüksek', 'Schiller-Duval cisimcikleri'],
        questionPrompt: 'Yüksek AFP düzeyi ve patognomonik Schiller-Duval cisimcikleri ile karakterize bu germ hücreli over tümörü hangisidir?',
        mechanism:
          'Yolk sac (endodermal sinüs) tümörü genç kadınlarda görülür, AFP salgılar ve histopatolojide glomerüloid Schiller-Duval cisimcikleri patognomoniktir. Granüloza hücreli tümörde ise Call-Exner cisimciği ve östrojen/inhibin yüksekliği görülür.',
        whenCorrectNote: 'Genç hastada AFP yüksekliği + patognomonik glomerüloid Schiller-Duval cisimcikleri.',
        firstVsGold: 'Yolk Sac Tümörü: AFP + Schiller-Duval cisimciği • Disgerminom: LDH + En sık malign germ hücreli • Granüloza Hücreli: Östrojen/İnhibin + Call-Exner cisimciği.',
        pearl: 'Over tümörlerinde eşleştirmeler: Yolk sac = AFP + Schiller-Duval; Disgerminom = LDH + En sık malign germ hücreli; Granüloza = Östrojen/İnhibin + Call-Exner.',
        trueStatement: 'Overin Yolk sac (endodermal sinüs) tümöründe serum AFP düzeyi yükselir ve histopatolojide patognomonik Schiller-Duval cisimcikleri görülür.',
        falseStatement: 'Overin Yolk sac (endodermal sinüs) tümöründe karakteristik olarak Call-Exner cisimcikleri görülür ve östrojen salgılar.',
        falseHighlight: 'Call-Exner cisimcikleri görülür ve östrojen salgılar',
      },
    ],
  },
];


