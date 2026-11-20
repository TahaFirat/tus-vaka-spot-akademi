import { StructuredClusterSeed } from './tusTypes';

export const STRUCTURED_SURGERY_CLUSTERS: StructuredClusterSeed[] = [
  // 1. Şok tipleri hemodinamik profili (ÖSYM Twin 1)
  {
    branchId: 'cerrahi',
    subTopic: 'Şok Tipleri ve Hemodinamik Profil',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Hipovolemik şok',
        target: 'İntravasküler hacim kaybına bağlı ön yük azalması ve refleks sempatik vazokonstriksiyon',
        hallmark: 'Düşük santral venöz basınç, düşük pulmoner kapiller kama basıncı, düşük kardiyak debi ve yüksek sistemik vasküler direnç',
        vignette:
          'Trafik kazası sonrası acil servise getirilen 28 yaşındaki erkek hastada kan basıncı 75/45 mmHg, nabız 134/dk, soluk ve soğuk terli cilt saptanıyor. Boyun venleri düzleşmiş ve idrar çıkışı azalmış olan hastanın santral venöz kateterinde basınç 1 mmHg, kardiyak indeksi düşük ve sistemik vasküler direnci belirgin yüksek ölçülüyor',
        clues: ['boyun venleri düzleşmiş', 'santral venöz kateterinde basınç 1 mmHg', 'sistemik vasküler direnci belirgin yüksek'],
        management: 'Hızlı izotonik kristaloid veya kan ürünü resüsitasyonu ile eş zamanlı kanama odağının kontrolü',
        pearl: 'Düşük preload (CVP ve PCWP düşük), düşük debi ve yüksek SVR profili dolaşım hacmi kaybını yansıtır; ilk sıvı yanıtı görülmezse masif kanama kontrolü esastır.',
        trapFalse: 'santral venöz basınç ve pulmoner kapiller kama basıncı belirgin yükselir, sistemik vasküler direnç ise düşer',
        trapHighlight: 'santral venöz basınç ve pulmoner kapiller kama basıncı belirgin yükselir',
      },
      {
        name: 'Kardiyojenik şok',
        target: 'Miyokardiyal pompa yetmezliğine bağlı atım hacmi düşüklüğü ve kompanzatuvar vazokonstriksiyon',
        hallmark: 'Yüksek santral venöz basınç, yüksek pulmoner kapiller kama basıncı, düşük kardiyak indeks ve yüksek sistemik vasküler direnç',
        vignette:
          'Geniş anterior miyokard enfarktüsü geçiren 64 yaşındaki kadın hastada ani nefes darlığı, soğuk nemli ekstremiteler, kan basıncı 80/50 mmHg ve nabız 116/dk gelişiyor. Akciğer bazallerinde yaygın yaş raller, juguler venöz dolgunluk, 24 mmHg pulmoner kapiller kama basıncı ve düşük kardiyak indeks saptanıyor',
        clues: ['yaygın yaş raller ve juguler venöz dolgunluk', '24 mmHg pulmoner kapiller kama basıncı', 'düşük kardiyak indeks'],
        management: 'Kontrollü inotropik destek, vazopresör titrasyonu ve acil perkütan koroner revaskülarizasyon',
        pearl: 'Hem preload göstergelerinin (CVP, PCWP) hem de afterload göstergesinin (SVR) yüksek olduğu düşük debili tabloda agresif sıvı yüklemesi pulmoner ödemi ağırlaştırır.',
        trapFalse: 'pulmoner kapiller kama basıncı 5 mmHg altında ölçülür ve agresif kristaloid yüklemesi ilk basamak tedavidir',
        trapHighlight: 'pulmoner kapiller kama basıncı 5 mmHg altında ölçülür',
      },
      {
        name: 'Septik şok',
        target: 'Endotoksin ve proinflamatuvar sitokin aracılı sistemik vazodilatasyon ile mikrovasküler kapiller sızıntı',
        hallmark: 'Düşük sistemik vasküler direnç, erken dönemde yüksek kardiyak debi, sıcak ekstremiteler ve laktat yüksekliği',
        vignette:
          'İnce bağırsak perforasyonu nedeniyle opere edilen 59 yaşındaki erkek hastada postoperatif 3. günde 39.2 °C ateş, taşikardi ve sıvı resüsitasyonuna dirençli 78/42 mmHg hipotansiyon gelişiyor. Ekstremiteleri sıcak ve kızarık olan hastada serum laktatı 5.2 mmol/L, sistemik vasküler direnci belirgin düşük ve kardiyak debisi yüksek bulunuyor',
        clues: ['sıvı resüsitasyonuna dirençli hipotansiyon', 'ekstremiteleri sıcak ve kızarık', 'sistemik vasküler direnci belirgin düşük'],
        management: 'İlk 1 saat içinde geniş spektrumlu intravenöz antibiyotik, dengeli kristaloid ve ilk tercih vazopresör olarak norepinefrin',
        pearl: 'Erken hiperdinamik fazda kardiyak debi artmış olmasına rağmen SVR belirgin düşüktür; vazopresör gereksiniminde ilk seçenek norepinefrindir.',
        trapFalse: 'erken fazda sistemik vasküler direnç belirgin artar ve ilk tercih vazopresör olarak dopamin kullanılır',
        trapHighlight: 'sistemik vasküler direnç belirgin artar',
      },
      {
        name: 'Nörojenik şok',
        target: 'T6 üzeri spinal kord yaralanmasına bağlı sempatik vazomotor tonus kaybı ve karşılanmamış vagal aktivite',
        hallmark: 'Hipotansiyona eşlik eden paradoksal bradikardi, sıcak kuru cilt ve düşük sistemik vasküler direnç',
        vignette:
          'Yüksekten düşme sonrası C6 vertebra kırığı saptanan 33 yaşındaki erkek hastada kan basıncı 74/44 mmHg iken kalp hızı 46/dk olarak ölçülüyor. Cildi sıcak ve kuru olan hastada alt ekstremitelerde motor ve duyu kaybı mevcut olup santral venöz basıncı ve sistemik vasküler direnci düşük bulunuyor',
        clues: ['C6 vertebra kırığı', 'kalp hızı 46/dk ile hipotansiyon', 'cildi sıcak ve kuru'],
        management: 'Spinal immobilizasyon, vazopresör infüzyonuyla ortalama arter basıncı desteği ve semptomatik bradikardide atropin',
        pearl: 'Servikal veya yüksek torakal omurga travmasında hipotansiyona taşikardi yerine bradikardi eşlik etmesi sempatik zincir kesintisinin en tipik işaretidir.',
        trapFalse: 'refleks taşikardi ile birlikte soğuk terli ekstremiteler ve yüksek sistemik vasküler direnç izlenir',
        trapHighlight: 'refleks taşikardi ile birlikte soğuk terli ekstremiteler',
      },
      {
        name: 'Obstrüktif şok',
        target: 'Ventriküler diyastolik dolumu veya büyük damar çıkışını mekanik olarak engelleyen ekstrakardiyak bası',
        hallmark: 'Yüksek juguler venöz dolgunluk, pulsus paradoksus veya tek taraflı solunum sesi kaybı ile ani hemodinamik kollaps',
        vignette:
          'Ortopedik pelvik cerrahi sonrası 5. günde ayağa kalkan 62 yaşındaki kadın hastada ani göğüs ağrısı, dispne, derin hipotansiyon ve belirgin boyun ven dolgunluğu gelişiyor. Akciğer sesleri bilateral eşit alınan hastada taşikardi, hipoksemi ve yatak başı ekokardiyografide sağ ventrikül dilatasyonu ile D şeklinde septum görülüyor',
        clues: ['belirgin boyun ven dolgunluğu', 'ani göğüs ağrısı ve derin hipotansiyon', 'sağ ventrikül dilatasyonu'],
        management: 'Altta yatan mekanik engelin masif pulmoner embolide tromboliz veya tamponadda perikardiyosentez ile acil giderilmesi',
        pearl: 'Yüksek CVP ve yüksek SVR profiline rağmen sol ventrikül dolumu engellendiği için debi düşer; kesin tedavi mekanik engeli kaldırmaktır.',
        trapFalse: 'tek başına agresif sıvı yüklemesi mekanik engeli ortadan kaldırarak kalıcı düzelme sağlar',
        trapHighlight: 'tek başına agresif sıvı yüklemesi mekanik engeli ortadan kaldırarak',
      },
    ],
  },

  // 2. Toraks travması acilleri (ÖSYM Twin 2)
  {
    branchId: 'cerrahi',
    subTopic: 'Toraks Travması Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Tansiyon pnömotoraks',
        target: 'Tek yönlü valv mekanizmasıyla plevral boşlukta basınç artışı ve mediastinal şift sonucu venöz dönüşün kesilmesi',
        hallmark: 'Trakeanın karşı tarafa deviasyonu, boyun ven dolgunluğu ve tek taraflı hipersonorite ile derin hipotansiyon',
        vignette:
          'Göğsüne künt darbe alan 25 yaşındaki erkek hasta şiddetli solunum sıkıntısıyla getiriliyor. Kan basıncı 70/40 mmHg, nabız 138/dk olan hastada boyun venleri belirgin dolgun, trakea sola deviye ve sağ hemitoraksta solunum sesleri tamamen kaybolmuş olup perküsyonda hipersonorite alınıyor',
        clues: ['boyun venleri belirgin dolgun', 'trakea sola deviye', 'sağ hemitoraksta hipersonorite'],
        management: 'Akciğer grafisi beklenmeden acil iğne dekompresyonu veya parmak torakostomi ve ardından tüp torakostomi',
        pearl: 'Tanı tamamen kliniktir; görüntüleme için zaman kaybedilmemeli, derhal dekompresyon uygulanmalıdır.',
        trapFalse: 'kesin tanı için öncelikle ayakta akciğer grafisi çekilmeli ve ardından drenaj planlanmalıdır',
        trapHighlight: 'öncelikle ayakta akciğer grafisi çekilmeli',
      },
      {
        name: 'Açık pnömotoraks',
        target: 'Trakea çapının üçte ikisinden büyük göğüs duvarı defekti nedeniyle emici plevral hava geçişi',
        hallmark: 'Göğüs duvarında solunumla hava giriş çıkış sesi çıkaran yara ve etkilenen tarafta solunum sesi kaybı',
        vignette:
          'Kesici aletle yaralanan 31 yaşındaki erkek hastanın sağ göğüs ön duvarında yaklaşık 4 cm çapında solunumla köpüklü kanama ve ıslık sesi veren açık defekt görülüyor. Hasta takipneik ve hipoksik olup sağ hemitoraksta solunum sesleri azalmış saptanıyor',
        clues: ['solunumla ıslık sesi veren açık defekt', 'sağ göğüs ön duvarında 4 cm yara', 'sağ hemitoraksta solunum sesleri azalmış'],
        management: 'Defektin üç kenarı bantlı steril oklüzif pansumanla kapatılması ve ayrı bir insizyondan tüp torakostomi uygulanması',
        pearl: 'Yaranın dört kenarının birden hava sızdırmaz şekilde bantlanması içerdeki havanın çıkışını engelleyerek basınçlı pnömotoraksa yol açar.',
        trapFalse: 'yara yerinin dört kenarı da tamamen hava geçirmez şekilde kapatılmalı ve başka işleme gerek duyulmaz',
        trapHighlight: 'dört kenarı da tamamen hava geçirmez şekilde kapatılmalı',
      },
      {
        name: 'Masif hemotoraks',
        target: 'İnterkostal veya internal mamaryan damar yaralanmasıyla plevral boşluğa 1500 mL üzeri hızlı kan birikimi',
        hallmark: 'Tek taraflı solunum sesi kaybına eşlik eden perküsyonda matite ve kanamaya bağlı düzleşmiş boyun venleri',
        vignette:
          'Sol toraksa bıçaklanma sonrası getirilen 29 yaşındaki erkek hastada kan basıncı 75/45 mmHg, nabız 130/dk ve boyun venleri düzleşmiş izleniyor. Sol hemitoraksta solunum sesleri duyulmazken perküsyonda matite alınıyor; takılan göğüs tüpünden anında 1650 mL taze kan boşalıyor',
        clues: ['perküsyonda matite', 'boyun venleri düzleşmiş', 'göğüs tüpünden anında 1650 mL taze kan'],
        management: 'Eş zamanlı iki geniş damar yolundan volüm resüsitasyonu, tüp torakostomi ve devam eden kanamada acil torakotomi',
        pearl: 'İlk drenajda 1500 mL üzeri veya ilk 2-4 saatte saatte 200 mL üzeri kanama acil cerrahi torakotomi endikasyonudur.',
        trapFalse: 'perküsyonda belirgin hipersonorite alınır ve boyun venleri mutlaka dolgunlaşır',
        trapHighlight: 'perküsyonda belirgin hipersonorite alınır',
      },
      {
        name: 'Yelken göğüs',
        target: 'İki veya daha fazla komşu kotun en az iki ayrı noktadan kırılmasıyla serbestleşen göğüs duvarı segmenti',
        hallmark: 'İnspiryumda içeri çöken, ekspiryumda dışarı taşan paradoksal solunum hareketi ve altta pulmoner kontüzyon',
        vignette:
          'Araç içi trafik kazasında direksiyona göğsünü çarpan 44 yaşındaki erkek hastada şiddetli göğüs ağrısı ve hipoksi gelişiyor. İnspeksiyonda sol anterolateral göğüs duvarında bir segmentin nefes alırken içeri çöktüğü, nefes verirken dışarı kabardığı gözleniyor ve grafide çoklu çift kot kırığı saptanıyor',
        clues: ['nefes alırken içeri çöken segment', 'çoklu çift kot kırığı', 'şiddetli göğüs ağrısı ve hipoksi'],
        management: 'Etkin analjezi, kontrollü sıvı kısıtlaması ve solunum yetmezliği gelişirse entübasyonla pozitif basınçlı ventilasyon',
        pearl: 'Hipoksinin asıl nedeni duvar hareketinden çok alttaki pulmoner kontüzyondur; bu nedenle aşırı sıvı yüklemesinden kaçınılır.',
        trapFalse: 'tedavide ilk basamak agresif intravenöz sıvı yüklemesi ve göğüs duvarının kum torbasıyla bastırılmasıdır',
        trapHighlight: 'agresif intravenöz sıvı yüklemesi ve göğüs duvarının kum torbasıyla bastırılması',
      },
      {
        name: 'Kardiyak tamponad',
        target: 'Perikardiyal kese içinde hızla biriken kanın ventriküler diyastolik dolumu mekanik olarak engellemesi',
        hallmark: 'Hipotansiyon, boyun ven dolgunluğu ve kalp seslerinin derinden gelmesinden oluşan Beck triadı',
        vignette:
          'Sol parasternal 4. interkostal aralıktan delici alet yaralanması geçiren 22 yaşındaki erkek hastada kan basıncı 78/52 mmHg, nabız 126/dk ve boyun venleri ileri derecede dolgun saptanıyor. Akciğer sesleri bilateral net ve eşit alınmasına rağmen kalp sesleri çok derinden geliyor ve inspiryumda nabız basıncı düşüyor',
        clues: ['akciğer sesleri bilateral net ve eşit', 'kalp sesleri çok derinden geliyor', 'boyun venleri ileri derecede dolgun'],
        management: 'Yatak başı ultrason eşliğinde acil perikardiyosentez veya subksifoid perikardiyal pencere ile cerrahi onarım',
        pearl: 'Akciğer seslerinin eşit duyulup trakeanın orta hatta kalması, tabloyu basınçlı plevral hava birikiminden ayıran en kritik muayene bulgusudur.',
        trapFalse: 'fizik muayenede etkilenen hemitoraksta solunum sesleri tamamen kaybolur ve trakea karşıya kayar',
        trapHighlight: 'etkilenen hemitoraksta solunum sesleri tamamen kaybolur',
      },
    ],
  },

  // 3. Kafa travması ve intrakraniyal kanamalar (ÖSYM Twin 3)
  {
    branchId: 'cerrahi',
    subTopic: 'Kafa Travması ve İntrakraniyal Kanamalar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Epidural hematom',
        target: 'Temporal kemik kırığına bağlı arteria meningea media yırtılmasıyla dura dışına hızlı arteriyel kanama',
        hallmark: 'Kısa bilinç kaybı sonrası berrak ara dönem ve BT’de sütür hatlarını aşmayan bikonveks lens şeklinde hiperdansite',
        vignette:
          'Bisikletten düşerek başının sağ yanını çarpan 19 yaşındaki erkek kısa süreli baygınlık sonrası uyanıp yürüyerek eve gidiyor. İki saat sonra giderek artan baş ağrısı, kusma, sol hemiparezi ve sağda dilate ışık yanıtsız pupil gelişen hastanın beyin BT’sinde sağ temporal bölgede bikonveks hiperdens kitle görülüyor',
        clues: ['kısa süreli baygınlık sonrası uyanıp', 'iki saat sonra sağda dilate pupil', 'bikonveks hiperdens kitle'],
        management: 'Acil kraniyotomi ile pıhtının boşaltılması ve kanayan meningeal arterin koagüle edilmesi',
        pearl: 'Bikonveks lezyon sütür hatlarına yapışık dura nedeniyle sütürleri geçemez; zamanında cerrahi ile prognoz oldukça iyidir.',
        trapFalse: 'köprü venlerinin yırtılmasıyla gelişir ve BT’de sütür hatlarını aşan hilal şeklinde görülür',
        trapHighlight: 'köprü venlerinin yırtılmasıyla gelişir',
      },
      {
        name: 'Akut subdural hematom',
        target: 'Ani akselerasyon-deselerasyon travmasıyla kortikal köprü venlerinin subdural aralığa yırtılması',
        hallmark: 'Sütür hatlarını aşan, falks ve tentoriyumu geçmeyen konkav hilal şeklinde beyin BT hiperdansitesi',
        vignette:
          'Yüksek hızlı motosiklet kazası sonrası şuuru kapalı getirilen 48 yaşındaki erkek hastada Glasgow koma skoru 6 ve sol tarafta anizokori saptanıyor. Acil beyin BT’sinde sol hemisferi boydan boya saran, sütür hatlarını geçen konkav hilal şeklinde hiperdens koleksiyon ve belirgin orta hat şifti izleniyor',
        clues: ['şuuru kapalı ve Glasgow koma skoru 6', 'sütür hatlarını geçen konkav hilal şeklinde', 'belirgin orta hat şifti'],
        management: 'Kalınlık 10 mm üzeri veya orta hat şifti 5 mm üzerindeyse acil kraniyotomi ve intrakraniyal basınç kontrolü',
        pearl: 'Altta yatan beyin parankim hasarı genellikle daha ağır olduğu için mortalitesi arteriyel ekstradural kanamadan belirgin yüksektir.',
        trapFalse: 'genellikle lusid interval ile seyreder ve parankim hasarı eşlik etmediğinden mortalitesi düşüktür',
        trapHighlight: 'lusid interval ile seyreder',
      },
      {
        name: 'Kronik subdural hematom',
        target: 'Serebral atrofisi olan yaşlıda minör kafa travması sonrası yavaş venöz sızıntı ve ozmotik sıvı çekimi',
        hallmark: 'Haftalar içinde gelişen demans benzeri konfüzyon, baş ağrısı ve BT’de hipodens hilal şeklinde koleksiyon',
        vignette:
          'Antikoagülan kullanan 78 yaşındaki erkek hasta üç hafta önce başını dolap kapağına hafifçe çarptıktan sonra son günlerde ilerleyen unutkanlık, yürüme dengesizliği ve sağ kolunda güçsüzlük ile getiriliyor. Beyin BT’sinde sol frontopariyetal bölgede beyin dokusunu basılayan hipodens hilal şeklinde birikim saptanıyor',
        clues: ['üç hafta önce başını hafifçe çarptıktan sonra', 'ilerleyen unutkanlık ve dengesizlik', 'hipodens hilal şeklinde birikim'],
        management: 'Semptomatik olgularda burr-hole trepanasyon ile drenaj ve subgaleal veya subdural dren yerleştirilmesi',
        pearl: 'Serebral atrofi köprü venlerini gerdiği için yaşlılarda ve alkoliklerde hatırlanmayan minör travmalar bile haftalar sonra bası tablosu yapabilir.',
        trapFalse: 'beyin BT’sinde her zaman parlak hiperdens bikonveks kitle olarak izlenir ve acil geniş kraniyotomi gerektirir',
        trapHighlight: 'parlak hiperdens bikonveks kitle olarak izlenir',
      },
      {
        name: 'Subaraknoid kanama',
        target: 'Sıklıkla anterior kommunikan arter sakküler anevrizması rüptürüyle bazal sisternalara yüksek basınçlı kanama',
        hallmark: 'Hayatının en şiddetli ani baş ağrısı, ense sertliği ve BT’de bazal sisternalarda yıldızsı hiperdansite',
        vignette:
          'Polikistik böbrek hastalığı öyküsü bulunan 46 yaşındaki kadın hasta ağır bir yük kaldırırken aniden başlayan hayatının en şiddetli baş ağrısı, kusma ve kısa senkop atağıyla başvuruyor. Muayenede ense sertliği pozitif olan hastanın kontrastsız BT’sinde bazal sisternalar ve Sylvian fissürlerde yaygın hiperdansite görülüyor',
        clues: ['ani başlayan hayatının en şiddetli baş ağrısı', 'ense sertliği pozitif', 'bazal sisternalarda yaygın hiperdansite'],
        management: 'Oral nimodipin ile serebral vazospazm profilaksisi ve erken dönemde endovasküler koilleme veya cerrahi klipleme',
        pearl: 'İlk 6 saatte BT normal olsa bile şüphe sürüyorsa lomber ponksiyonda ksantokromi aranır; gecikmiş iskemiyi önlemek için nimodipin verilir.',
        trapFalse: 'vazospazmı önlemek için hastaya ilk basamakta sistemik hipotansiyon uygulanır ve nimodipin kontrendikedir',
        trapHighlight: 'nimodipin kontrendikedir',
      },
      {
        name: 'Diffüz aksonal hasar',
        target: 'Yüksek hızlı rotasyonel travmaya bağlı gri-ak madde bileşkesinde yaygın aksonal yırtılma ve kopma',
        hallmark: 'Travma anından itibaren derin koma ile BT’de korpus kallozum ve beyin sapında punktat hemorajiler',
        vignette:
          'Yüksek hızla devrilen araçtan çıkarılan 23 yaşındaki erkek hasta olay yerinden itibaren derin komada ve deserebre postürde getiriliyor. İlk beyin BT’sinde kitle etkisi veya orta hat şifti görülmemesine karşın korpus kallozum spleniumu ve gri-ak madde bileşkesinde milimetrik punktat kanamalar fark ediliyor',
        clues: ['olay yerinden itibaren derin komada', 'kitle etkisi veya orta hat şifti görülmemesine karşın', 'korpus kallozumda milimetrik punktat kanamalar'],
        management: 'Cerrahi boşaltılacak kitle olmadığından intrakraniyal basınç monitörizasyonu, hipoksi-hipotansiyondan kaçınma ve yoğun bakım desteği',
        pearl: 'Klinik komanın ağırlığı ile başlangıç BT bulgularının silikliği arasındaki uyumsuzluk yaygın aksonal kopma için en tipik ipucudur; MRG en duyarlı yöntemdir.',
        trapFalse: 'cerrahi dekompresif boşaltma ile aksonal kopma hızla geri döner ve BT kesin tanı için MRG’den üstündür',
        trapHighlight: 'BT kesin tanı için MRG’den üstündür',
      },
    ],
  },

  // 4. Cerrahi sıvı-elektrolit ve yanık/yara iyileşmesi
  {
    branchId: 'cerrahi',
    subTopic: 'Yanık Resüsitasyonu ve Yara İyileşmesi',
    difficulty: 'Temel Spot',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Parkland yanık resüsitasyonu',
        target: 'İkinci ve üçüncü derece yanıklarda yaygın kapiller sızıntıyı karşılamak üzere ilk 24 saatlik kristaloid replasmanı',
        hallmark: 'Erişkinde saatlik idrar çıkışının 0.5 mL/kg/saat hedeflenmesi ve hesaplanan sıvının yarısının ilk 8 saatte verilmesi',
        vignette:
          '80 kg ağırlığındaki erkek hastada alev yanığı sonucu her iki ön kol, gövde ön yüzü ve sol uylukta toplam %40 oranında ikinci ve üçüncü derece yanık saptanıyor. Yanık saatinden itibaren ilk 24 saatte verilecek Ringer laktat miktarı hesaplanarak resüsitasyon başlatılıyor',
        clues: ['80 kg ağırlığında', 'toplam %40 oranında ikinci ve üçüncü derece yanık', 'ilk 24 saatte verilecek Ringer laktat'],
        management: '4 mL × kg × yanık yüzdesi formülüyle hesaplanan Ringer laktatın yarısının ilk 8 saatte, kalanının sonraki 16 saatte verilmesi',
        pearl: 'İlk 8 saatlik süre hastaneye gelişten değil, yanığın gerçekleştiği andan itibaren hesaplanır; en güvenilir izlem parametresi saatlik idrar çıkışıdır.',
        trapFalse: 'hesaplanan toplam sıvının yarısı ilk 12 saatte verilir ve başlangıçta kolloid solüsyonlar tercih edilir',
        trapHighlight: 'yarısı ilk 12 saatte verilir ve başlangıçta kolloid solüsyonlar tercih edilir',
      },
      {
        name: 'Keloid',
        target: 'Dermal travma sonrası tip I ve tip III kollajen sentezinin yara sınırlarını taşacak biçimde aşırı devam etmesi',
        hallmark: 'Orijinal insizyon sınırlarını aşan, spontan gerilemeyen ve tek başına eksizyon sonrası yüksek nüks gösteren kabarık skar',
        vignette:
          '24 yaşındaki koyu tenli kadın hastada kulak deldirme sonrası aylar içinde büyüyen, orijinal travma bölgesini katbekat aşarak kulak memesini kaplayan sert, kaşıntılı ve parlak nodüler lezyon görülüyor. Önceki basit cerrahi çıkarma girişiminden sonra daha büyük boyutta tekrarladığı öğreniliyor',
        clues: ['orijinal travma bölgesini katbekat aşan', 'basit cerrahi çıkarma sonrası tekrarladığı', 'koyu tenli kadın hastada kulak deldirme'],
        management: 'İntralezyonel triamsinolon enjeksiyonu, silikon jel baskı ve dirençte eksizyona ek düşük doz radyoterapi',
        pearl: 'Orijinal yara sınırını aşması ve spontan regresyon göstermemesi hipertrofik skardan ayıran en temel özelliktir.',
        trapFalse: 'orijinal insizyon çizgisi içinde sınırlı kalır ve 1-2 yıl içinde kendiliğinden düzleşip geriler',
        trapHighlight: 'orijinal insizyon çizgisi içinde sınırlı kalır ve 1-2 yıl içinde kendiliğinden düzleşip geriler',
      },
      {
        name: 'Hipertrofik skar',
        target: 'Yara hattındaki yüksek mekanik gerilim ve uzamış inflamasyona bağlı miyofibroblast kaynaklı sınırlı aşırı kollajen birikimi',
        hallmark: 'Başlangıç travma sınırları içinde kalan, sıklıkla fleksiyon eklemlerini çaprazlayan ve zamanla kısmen gerileyebilen sert kabarık iz',
        vignette:
          'Diz ön yüzündeki kesi onarımından 3 ay sonra insizyon çizgisi boyunca kabarık, eritematöz ve hafif kaşıntılı sertlik gelişen 30 yaşındaki hastada lezyonun eski dikiş hattının yanındaki sağlam deriye taşmadığı görülüyor',
        clues: ['insizyon çizgisi boyunca kabarık', 'sağlam deriye taşmadığı', 'diz ön yüzündeki kesi onarımından sonra'],
        management: 'Bası giysileri, silikon jel tabakalar ve gerekirse intralezyonel kortikosteroid uygulaması',
        pearl: 'Yara sınırları içinde kalır, gerilimin fazla olduğu eklem bölgelerinde sıktır ve bası tedavisi ile zamanla yumuşama eğilimindedir.',
        trapFalse: 'sağlam çevre deriye hızla yayılır ve bası veya silikon tedavisine kesinlikle yanıt vermez',
        trapHighlight: 'sağlam çevre deriye hızla yayılır',
      },
      {
        name: 'Sirkümferensiyal tam kat yanık',
        target: 'Elastik olmayan yanık eskarının ödemle birlikte derin dokularda kompartman basıncını kritik eşiğe yükseltmesi',
        hallmark: 'Çepeçevre yanıkta ekstremitede nabız kaybı, parestezi veya göğüs duvarında mekanik solunum kısıtlanması',
        vignette:
          'Elektrik ve alev yanığıyla getirilen 37 yaşındaki erkek hastanın sağ ön kolunda çepeçevre soluk, sert, ağrısız ve kösele kıvamında yanık alanı bulunuyor. Sıvı resüsitasyonu sürerken el parmaklarında kapiller dolum uzuyor, radial nabız zayıflıyor ve şiddetli derin ağrı başlıyor',
        clues: ['çepeçevre soluk, sert, ağrısız yanık', 'radial nabız zayıflıyor', 'el parmaklarında kapiller dolum uzuyor'],
        management: 'Anestezi veya ameliyathane beklemeden nörovasküler yapıları koruyarak yatak başı acil eskarotomi insizyonu',
        pearl: 'Tam kat eskar sinir uçlarını tahrip ettiği için yüzeyi ağrısızdır ancak altındaki ödem dokuyu boğar; ilk girişim eskarotomidir.',
        trapFalse: 'yüzeyel pansuman ve elevasyon yeterli olup derin fasyal basıyı açmak için 48 saat beklenir',
        trapHighlight: 'yüzeyel pansuman ve elevasyon yeterli olup',
      },
      {
        name: 'Marjolin ülseri',
        target: 'Kronik iyileşmeyen yanık skarı veya osteomiyelit sinüs traktüsü zemininde gelişen malign skuamöz transformasyon',
        hallmark: 'Eski yanık skarı üzerinde yıllar sonra beliren kanamalı, kenarları kalkık kronik ülser ve bölgesel lenf nodu yayılımı',
        vignette:
          'Çocukluk çağında geçirdiği geniş bacak yanığının sert skarı üzerinde 25 yıl sonra iyileşmeyen, kenarları sert ve kalkık, kolay kanayan 5 cm’lik ülsere kitle ile başvuran 41 yaşındaki erkek hastanın inguinal lenf nodları da ele geliyor',
        clues: ['yanığının sert skarı üzerinde 25 yıl sonra', 'kenarları sert ve kalkık kolay kanayan ülser', 'inguinal lenf nodları ele geliyor'],
        management: 'Çoklu kenar biyopsisi ile tanı sonrası en az 2 cm sınırla geniş lokal eksizyon veya amputasyon ve lenf nodu diseksiyonu',
        pearl: 'Kronik skar zemininden köken alan bu skuamöz hücreli karsinomlar de novo cilt tümörlerine göre çok daha agresif seyreder ve sık metastaz yapar.',
        trapFalse: 'genellikle bazal hücreli karsinom histolojisindedir ve metastaz potansiyeli son derece düşüktür',
        trapHighlight: 'genellikle bazal hücreli karsinom histolojisindedir',
      },
    ],
  },

  // 5. Meme benign lezyonları
  {
    branchId: 'cerrahi',
    subTopic: 'Meme Benign Lezyonları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Fibroadenom',
        target: 'Genç üreme çağı kadınlarda östrojene duyarlı intralobüler stroma ve duktus epitelinin benign proliferasyonu',
        hallmark: '30 yaş altı kadında ağrısız, iyi sınırlı, lastik kıvamlı ve palpasyonda parmak altından kayan hareketli kitle',
        vignette:
          '23 yaşındaki kadın hasta sağ memesinde tesadüfen fark ettiği ağrısız kitleyle başvuruyor. Muayenede 2 cm çaplı, düzgün sınırlı, lastik kıvamlı ve dokununca elden kayan hareketli nodül palpe ediliyor; ultrasonda akustik güçlenme gösteren oval, uzun aksı cilde paralel hipoekoik lezyon saptanıyor',
        clues: ['23 yaşındaki kadın', 'dokununca elden kayan hareketli nodül', 'uzun aksı cilde paralel hipoekoik lezyon'],
        management: 'Üçlü değerlendirme benign ise izlem; hızlı büyüyen, ağrılı veya 3 cm üzeri kitlede basit eksizyon',
        pearl: 'Genç kadınlarda en sık görülen solid meme kitlesidir; malignite potansiyeli taşımaz ancak dev formunda filloides ayırıcı tanısı gerekir.',
        trapFalse: 'postmenopozal kadınlarda en sık görülür ve biyopsi sonucu aksiller lenf nodu diseksiyonu gerektirir',
        trapHighlight: 'aksiller lenf nodu diseksiyonu gerektirir',
      },
      {
        name: 'İntraduktal papillom',
        target: 'Subareolar büyük laktiferöz duktus lümeninde fibrovasküler korlu benign papiller epitel büyümesi',
        hallmark: 'Palpabl kitle olmaksızın tek bir meme başı kanalından gelen spontan seröz veya kanlı akıntı',
        vignette:
          '42 yaşındaki kadın hasta son iki aydır sağ meme başından çamaşırını kirleten tek taraflı ve tek noktadan spontan kanlı akıntı şikayetiyle başvuruyor. Fizik muayenede ele gelen kitle saptanmazken areola kenarına basıldığında aynı duktus ağzından kanlı damla geliyor',
        clues: ['tek taraflı ve tek noktadan spontan kanlı akıntı', 'ele gelen kitle saptanmazken', 'areola kenarına basıldığında'],
        management: 'Duktografi veya ultrason sonrası etkilenen terminal duktus sisteminin mikrodukektomi ile eksizyonu',
        pearl: 'Kanlı meme başı akıntısının en sık nedeni malignite değil, santral yerleşimli soliter duktal papillomdur; ancak multipl periferik papillomlar atipi ve kanser riski taşır.',
        trapFalse: 'bilateral sütlü akıntının en sık nedenidir ve yalnızca dopamin agonisti bromokriptin ile tedavi edilir',
        trapHighlight: 'bilateral sütlü akıntının en sık nedenidir',
      },
      {
        name: 'Filloides tümörü',
        target: 'İntralobüler stromanın yaprak benzeri yarıklar oluşturacak şekilde hızla prolifere olduğu bifazik fibroepitelioma',
        hallmark: 'Orta yaş kadında kısa sürede dev boyutlara ulaşan, cildi geren, lobüle ve benignden maligne spektrum gösteren kitle',
        vignette:
          '47 yaşındaki kadın hasta son dört ayda hızla büyüyerek sağ memesini asimetrik hale getiren 9 cm çaplı kitle nedeniyle başvuruyor. Muayenede lobüle konturlu, üzeri gergin ve yüzeyel venleri belirginleşmiş kitle saptanıyor; kor biyopside yaprak benzeri epitel yarıkları ve hiperselüler stroma izleniyor',
        clues: ['dört ayda hızla büyüyen 9 cm çaplı kitle', 'yaprak benzeri epitel yarıkları', 'hiperselüler stroma'],
        management: 'En az 1 cm temiz cerrahi sınırla geniş lokal eksizyon veya memeye göre büyükse basit mastektomi; aksiller diseksiyon rutin yapılmaz',
        pearl: 'Hematojen yolla akciğere metastaz yapma eğiliminde olup lenfatik yayılımı nadir olduğundan palpe edilen patolojik nod yoksa aksiller diseksiyon gereksizdir.',
        trapFalse: 'lenfatik yayılımı çok sık olduğundan tüm hastalara rutin aksiller lenf nodu diseksiyonu ve tamoksifen verilir',
        trapHighlight: 'tüm hastalara rutin aksiller lenf nodu diseksiyonu',
      },
      {
        name: 'Yağ nekrozu',
        target: 'Künt meme travması veya cerrahi sonrası adiposit yıkımı, sabunlaşma ve dev hücreli granülomatöz reaksiyon',
        hallmark: 'Cilt çekintisi ve sert kitleyle kanseri taklit etmesine karşın mamografide radyolüsen yağ kisti ve yumurta kabuğu kalsifikasyon',
        vignette:
          'İki ay önce emniyet kemeri travması geçiren 52 yaşındaki kadın hasta sol memede sert, hafif hassas ve üzerinde hafif cilt çekintisi oluşturan kitle ile başvuruyor. Mamografide etrafı ince kalsifiye duvarla çevrili radyolüsen yağ dansiteli lezyon saptanıyor; kor biyopside lipid yüklü makrofajlar görülüyor',
        clues: ['emniyet kemeri travması öyküsü', 'üzerinde hafif cilt çekintisi oluşturan kitle', 'lipid yüklü makrofajlar'],
        management: 'Biyopsi ile malignite kesin olarak dışlandıktan sonra cerrahi gerekmeden gözlem ve semptomatik takip',
        pearl: 'Klinik ve radyolojik olarak meme karsinomunu en çok taklit eden benign tablodur; travma öyküsü ve biyopsi ile gereksiz radikal cerrahi önlenir.',
        trapFalse: 'premalign kabul edildiğinden tanı konulduğunda mutlaka geniş sınırla eksizyon ve radyoterapi uygulanır',
        trapHighlight: 'tanı konulduğunda mutlaka geniş sınırla eksizyon ve radyoterapi uygulanır',
      },
      {
        name: 'Laktasyonel mastit',
        target: 'Emzirme döneminde meme başı çatlaklarından giren Staphylococcus aureus un retrograd duktal enfeksiyonu',
        hallmark: 'Yüksek ateş, tek memede kama şeklinde eritem, ısı artışı ve apseleşmede fluktuasyon veren ağrılı koleksiyon',
        vignette:
          'Doğumdan 3 hafta sonra emzirmekte olan 27 yaşındaki kadın hasta 38.9 °C ateş, titreme ve sol memede şiddetli ağrıyla başvuruyor. Muayenede memenin dış kadranında kızarık, sıcak, ödemli ve merkezinde fluktuasyon veren hassas alan palpe ediliyor',
        clues: ['doğumdan 3 hafta sonra emzirmekte olan', '38.9 °C ateş ve titreme', 'merkezinde fluktuasyon veren hassas alan'],
        management: 'Emzirmenin sürdürülmesi veya sütün sağılması, antistafilokokal antibiyotik ve apse varsa ultrason eşliğinde aspirasyon-drenaj',
        pearl: 'Emzirmenin kesilmesi süt stazını artırıp tabloyu kötüleştirir; tedaviye yanıt vermeyen veya laktasyon dışı inatçı eritemde inflamatuvar kanser dışlanmalıdır.',
        trapFalse: 'tedavi süresince emzirme mutlaka tamamen kesilmeli ve bromokriptin ile laktasyon durdurulmalıdır',
        trapHighlight: 'emzirme mutlaka tamamen kesilmeli',
      },
    ],
  },

  // 6. Meme karsinomu alt tipleri ve yönetim
  {
    branchId: 'cerrahi',
    subTopic: 'Meme Karsinomu Alt Tipleri ve Yönetim',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Duktal karsinoma in situ',
        target: 'Miyoepitelyal tabaka ve bazal membranı aşmadan duktus lümenini dolduran klonal malign epitel proliferasyonu',
        hallmark: 'Ele gelen kitle olmadan tarama mamografisinde dallanan veya kümeleşmiş pleomorfik mikrokalsifikasyonlar',
        vignette:
          'Rutin tarama mamografisi çekilen 54 yaşındaki asemptomatik kadının fizik muayenesinde meme veya aksillada ele gelen kitle saptanmıyor. Mamografide sağ üst dış kadranda 2 cm’lik alanda kümeleşmiş ince pleomorfik mikrokalsifikasyonlar görülüyor ve stereotaktik biyopside bazal membranın sağlam olduğu komedonekrozlu atipik duktuslar izleniyor',
        clues: ['ele gelen kitle saptanmıyor', 'kümeleşmiş ince pleomorfik mikrokalsifikasyonlar', 'bazal membranın sağlam olduğu'],
        management: 'Meme koruyucu cerrahi artı radyoterapi, ER pozitifse 5 yıl tamoksifen; yaygın multisentrik hastalıkta mastektomi ve sentinel nod biyopsisi',
        pearl: 'Bazal membran intakt olduğu için aksiller lenf nodu metastaz riski çok düşüktür; tek başına lumpektomi yapılacaksa sentinel nod biyopsisi rutin gerekmez.',
        trapFalse: 'tanı anında tüm hastalara mutlaka tam aksiller lenf nodu diseksiyonu ve sistemik kemoterapi uygulanır',
        trapHighlight: 'tüm hastalara mutlaka tam aksiller lenf nodu diseksiyonu',
      },
      {
        name: 'İnvaziv lobüler karsinom',
        target: 'CDH1 gen mutasyonu veya hipermetilasyonu sonucu E-kaderin hücre adezyon proteininin kaybı',
        hallmark: 'Stroma içinde tek sıra dizilen Hint dizilimi paterni, zor mamografik tanı ve artmış bilateral-multisentrik tutulum',
        vignette:
          '58 yaşındaki kadın hasta sol memede belirgin sert nodülden ziyade diffüz kalınlaşma hissiyle başvuruyor. Mamografisi yoğun meme dokusu nedeniyle belirsiz kalan hastanın biyopsisinde desmoplastik stromada tek sıra halinde sıralanan küçük uniform hücreler ve immünohistokimyada E-kaderin negatifliği saptanıyor',
        clues: ['diffüz kalınlaşma hissi', 'tek sıra halinde sıralanan küçük uniform hücreler', 'E-kaderin negatifliği'],
        management: 'Multifokalite ve karşı meme tutulumunu değerlendirmek için meme MRG sonrası cerrahi rezeksiyon ve hormon duyarlı adjuvan tedavi',
        pearl: 'E-kaderin kaybı nedeniyle tümör hücreleri tek tek ilerler ve belirgin kitle yapmadığı için mamografide gizlenebilir; periton ve meninkslere sıra dışı metastaz yapabilir.',
        trapFalse: 'immünohistokimyada güçlü membranöz E-kaderin pozitifliği ile tanınır ve karşı meme riski taşımaz',
        trapHighlight: 'güçlü membranöz E-kaderin pozitifliği ile tanınır',
      },
      {
        name: 'Luminal A meme kanseri',
        target: 'Yüksek östrojen-progesteron reseptör ekspresyonu, HER2 negatifliği ve düşük Ki-67 proliferasyon indeksi',
        hallmark: 'İmmünohistokimyada güçlü hormon reseptör pozitifliği ve düşük proliferasyon hızıyla en iyi prognozlu moleküler alt tip',
        vignette:
          'Postmenopozal 61 yaşındaki kadın hastanın memesindeki 1.6 cm’lik tümörün biyopsisinde östrojen reseptörü %95 pozitif, progesteron reseptörü %80 pozitif, HER2 negatif ve Ki-67 indeksi %8 bulunuyor. Sentinel lenf nodu negatif olan hasta evre I olarak değerlendiriliyor',
        clues: ['östrojen reseptörü %95 pozitif', 'HER2 negatif ve Ki-67 indeksi %8', 'sentinel lenf nodu negatif'],
        management: 'Meme koruyucu cerrahi ve radyoterapi sonrası postmenopozal hastada aromataz inhibitörü, premenopozal hastada tamoksifen',
        pearl: 'Hormon reseptörü yüksek ve proliferasyonu düşük olduğundan kemoterapi duyarlılığı düşüktür; esas sistemik tedavi endokrin blokajdır.',
        trapFalse: 'endokrin tedaviye dirençli olduğundan primer sistemik tedavisi mutlaka anti-HER2 ajanlar ve yoğun kemoterapidir',
        trapHighlight: 'endokrin tedaviye dirençli olduğundan',
      },
      {
        name: 'HER2-pozitif meme kanseri',
        target: '17q kromozomundaki ERBB2 proto-onkogen amplifikasyonuna bağlı aşırı tirozin kinaz büyüme sinyali',
        hallmark: 'İmmünohistokimyada 3+ membranöz boyanma veya FISH ile gen amplifikasyonu saptanan agresif tümör',
        vignette:
          '49 yaşındaki kadın hastanın 3.2 cm çaplı yüksek dereceli meme tümöründe hormon reseptörleri negatif, immünohistokimyasal HER2 skoru 3+ ve aksillada pozitif lenf nodu saptanıyor. Tedavi öncesi sol ventrikül ejeksiyon fraksiyonu %64 olarak ölçülüyor',
        clues: ['immünohistokimyasal HER2 skoru 3+', 'aksillada pozitif lenf nodu', 'ejeksiyon fraksiyonu %64'],
        management: 'Neoadjuvan kemoterapi ile eş zamanlı trastuzumab ve pertuzumab hedefli tedavisi, ardından cerrahi ve adjuvan anti-HER2 tamamlaması',
        pearl: 'Trastuzumab reversibl kardiyotoksisite yapabildiğinden tedavi öncesi ve sırasında seri ekokardiyografi ile ejeksiyon fraksiyonu izlenmelidir.',
        trapFalse: 'trastuzumab ile antrasiklinler eş zamanlı olarak aynı anda verilir ve kardiyak izlem gerektirmez',
        trapHighlight: 'trastuzumab ile antrasiklinler eş zamanlı olarak aynı anda verilir',
      },
      {
        name: 'İnflamatuvar meme kanseri',
        target: 'Tümör embolilerinin dermal lenfatik damarları yaygın olarak tıkayarak lenfatik drenajı bozması',
        hallmark: 'Memenin üçte birinden fazlasını kaplayan eritem, ödem, portakal kabuğu görünümü ve biyopside dermal lenfatik invazyon',
        vignette:
          '51 yaşındaki kadın hasta son 3 haftadır sol memesinin hızla büyüyüp kızardığını, ağrılı ve ağırlaştığını bildiriyor. Fizik muayenede meme derisinde yaygın ısı artışı, eritem ve gözeneklerin belirginleştiği portakal kabuğu görünümü izleniyor; tam kat cilt biyopsisinde dermal lenfatikler içinde tümör trombüsleri saptanıyor',
        clues: ['son 3 haftadır hızla büyüyüp kızardığını', 'portakal kabuğu görünümü', 'dermal lenfatikler içinde tümör trombüsleri'],
        management: 'Başlangıçta doğrudan neoadjuvan sistemik kemoterapi, yanıt sonrası modifiye radikal mastektomi ve postmastektomi radyoterapi',
        pearl: 'Evre IIIB/T4d kabul edilir ve başlangıçta primer cerrahi kesinlikle kontrendikedir; mutlaka önce neoadjuvan kemoterapi başlanır.',
        trapFalse: 'erken evre kabul edildiğinden tanı konulduğu gün meme koruyucu cerrahi ile çıkarılması ilk adımdır',
        trapHighlight: 'tanı konulduğu gün meme koruyucu cerrahi ile çıkarılması ilk adımdır',
      },
    ],
  },

  // 7. Tiroid ve paratiroid cerrahisi
  {
    branchId: 'cerrahi',
    subTopic: 'Tiroid Kanseri Alt Tipleri ve Tiroidektomi Komplikasyonları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Papiller tiroid kanseri',
        target: 'BRAF V600E nokta mutasyonu veya RET/PTC translokasyonu ile MAPK yolağı aktivasyonu ve lenfatik yayılım',
        hallmark: 'Orphan Annie gözü berrak nükleuslar, nükleer oluklar, intranükleer inklüzyonlar ve psammom cisimcikleri',
        vignette:
          'Boyun bölgesine çocuklukta radyoterapi öyküsü olan 34 yaşındaki kadın hasta boyunda ağrısız sert tiroid nodülü ve ipsilateral servikal lenfadenopatiyle başvuruyor. İnce iğne aspirasyon biyopsisinde berrak boş görünümlü nükleuslar, kahve çekirdeği benzeri nükleer yarıklar ve konsantrik kalsifiye cisimcikler saptanıyor',
        clues: ['çocuklukta radyoterapi öyküsü', 'berrak boş görünümlü nükleuslar', 'konsantrik kalsifiye cisimcikler'],
        management: 'Total tiroidektomi, klinik nod varsa santral-lateral boyun diseksiyonu, risk grubuna göre radyoaktif iyot ve TSH supresyonu',
        pearl: 'Radyasyonla en ilişkili ve en sık görülen tiroid malignitesidir; İİAB ile güvenilir biçimde tanı konabilir ve prognozu en iyisidir.',
        trapFalse: 'ince iğne aspirasyon biyopsisi ile tanınamaz ve öncelikle hematojen yolla kemik-akciğere yayılır',
        trapHighlight: 'ince iğne aspirasyon biyopsisi ile tanınamaz',
      },
      {
        name: 'Foliküler tiroid kanseri',
        target: 'RAS nokta mutasyonu ve PAX8-PPARG füzyon geni ile hematojen invazyon eğilimi',
        hallmark: 'İnce iğne aspirasyonunda kapsül ve damar invazyonu değerlendirilemediğinden kesin tanının kalıcı parafin kesitlere dayanması',
        vignette:
          'İyot eksikliği bölgesinden gelen 52 yaşındaki kadın hastada sol tiroid lobunda 3.5 cm soliter nodül saptanıyor. İnce iğne biyopsisi foliküler neoplazi olarak raporlanıyor ve hastada toraks BT’de izole kemik ve akciğer metastazı kuşkusu bulunuyor',
        clues: ['iyot eksikliği bölgesinden', 'ince iğne biyopsisi foliküler neoplazi', 'kemik ve akciğer metastazı kuşkusu'],
        management: 'Diagnostik lobektomi-istmektomi sonrası histopatolojide kapsül veya vasküler invazyon görülürse tamamlayıcı total tiroidektomi ve radyoaktif iyot',
        pearl: 'Kapsüler veya vasküler invazyonu göstermek için İİAB yeterli değildir; histolojik mimari gereklidir ve yayılımı başlıca hematojendir.',
        trapFalse: 'tanısı ince iğne aspirasyonunda Orphan Annie nükleuslarının görülmesiyle kesinleştirilir',
        trapHighlight: 'Orphan Annie nükleuslarının görülmesiyle kesinleştirilir',
      },
      {
        name: 'Medüller tiroid kanseri',
        target: 'Nöral krest kökenli parafoliküler C hücrelerinden RET proto-onkogen aktivasyonuyla gelişen kalsitonin üreten malignite',
        hallmark: 'Kongo kırmızısı ile elma yeşili çift kırılım veren amiloid stroma, yüksek serum kalsitonin ve CEA düzeyleri',
        vignette:
          'Ailesinde feokromositoma öyküsü bulunan 38 yaşındaki erkek hastada tiroid üst polünde sert kitle ve kronik sulu diyare yakınması saptanıyor. Serum kalsitonin düzeyi 940 pg/mL ölçülen hastanın biyopsisinde amiloid birikimi içeren nöroendokrin tümör adaları görülüyor',
        clues: ['ailesinde feokromositoma öyküsü', 'serum kalsitonin düzeyi 940 pg/mL', 'amiloid birikimi içeren tümör'],
        management: 'Ameliyat öncesi feokromositoma ekartasyonu sonrası total tiroidektomi, santral boyun diseksiyonu ve RET mutasyon analizi',
        pearl: 'C hücreleri radyoaktif iyot tutmadığı için postoperatif I-131 tedavisinin yeri yoktur; MEN 2 hastalarında her zaman önce feokromositoma opere edilir.',
        trapFalse: 'ameliyat sonrası yüksek doz radyoaktif iyot ablasyonu tedavinin temel taşını oluşturur',
        trapHighlight: 'yüksek doz radyoaktif iyot ablasyonu tedavinin temel taşını oluşturur',
      },
      {
        name: 'Anaplastik tiroid kanseri',
        target: 'Önceden var olan diferansiye tümörde TP53 ve TERT promotör mutasyonlarıyla gelişen indiferansiye hızlı yıkım',
        hallmark: 'İleri yaş hastada haftalar içinde büyüyen taş sertliğinde fikse boyun kitlesi, stridor, disfaji ve kötü prognoz',
        vignette:
          'Uzun süredir guatrı olan 74 yaşındaki kadın hasta son 4 haftada hızla büyüyerek nefes darlığı, yutma güçlüğü ve ses kısıklığı yapan taş sertliğinde, çevre dokulara fikse dev boyun kitlesiyle acile başvuruyor',
        clues: ['son 4 haftada hızla büyüyerek', 'nefes darlığı ve yutma güçlüğü', 'taş sertliğinde fikse dev boyun kitlesi'],
        management: 'Hava yolunun korunması, BRAF V600E mutasyon testi, palyatif veya neoadjuvan kemoradyoterapi ve uygun mutasyonda dabrafenib-trametinib',
        pearl: 'En ölümcül tiroid malignitesidir; tanı anında çoğunlukla anrezektabl olup solunum yolu obstrüksiyonu en sık ölüm nedenidir.',
        trapFalse: 'genç kadınlarda görülür ve total tiroidektomi artı radyoaktif iyot ile 10 yıllık sağkalımı %95 üzerindedir',
        trapHighlight: '10 yıllık sağkalımı %95 üzerindedir',
      },
      {
        name: 'Süperior laringeal sinir eksternal dal hasarı',
        target: 'Üst tiroid arter ve veninin bağlanması sırasında krikotiroid kası innerve eden motor dalın zedelenmesi',
        hallmark: 'Tiroidektomi sonrası normal konuşma sesi korunurken yüksek perdeli tiz ses çıkarmada güçlük ve erken ses yorgunluğu',
        vignette:
          'Total tiroidektomi geçiren 32 yaşındaki profesyonel soprano şarkıcı ameliyat sonrası normal konuşmasında kabalaşma olmadığını ancak şarkı söylerken yüksek notalara çıkamadığını ve sesinin çabuk yorulduğunu ifade ediyor. Laringoskopide etkilenen tarafta vokal kord gerginliğinin azaldığı görülüyor',
        clues: ['profesyonel soprano şarkıcı', 'yüksek notalara çıkamadığını', 'vokal kord gerginliğinin azaldığı'],
        management: 'Koruyucu olarak üst kutup damarlarının tiroid kapsülüne en yakın noktadan tek tek bağlanması ve postoperatif ses terapisi',
        pearl: 'Rekürren laringeal sinir dışındaki tek intrensek larenks kası olan krikotiroid kası innerve ettiği için hasarında kord paralizisi yerine tiz ses kaybı oluşur.',
        trapFalse: 'bilateral zedelenmesinde vokal kordlar orta hatta fikse kalır ve acil trakeostomi gerektirir',
        trapHighlight: 'vokal kordlar orta hatta fikse kalır ve acil trakeostomi gerektirir',
      },
    ],
  },

  // 8. Adrenal cerrahi kitleleri (ÖSYM Twin 5)
  {
    branchId: 'cerrahi',
    subTopic: 'Adrenal Cerrahi Kitleleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Feokromositoma',
        target: 'Adrenal medulla kromaffin hücrelerinden aşırı epinefrin ve norepinefrin salgılayan nöroendokrin tümör',
        hallmark: 'Ataklar halinde baş ağrısı, çarpıntı, terleme triadı, yüksek plazma metanefrinleri ve T2 MRG’de ampul parlaklığı',
        vignette:
          '36 yaşındaki erkek hasta ataklar halinde gelen zonklayıcı baş ağrısı, şiddetli çarpıntı, terleme ve 220/125 mmHg’ya çıkan tansiyon krizleriyle başvuruyor. Plazma serbest metanefrinleri normalin 6 katı yüksek bulunan hastanın sürrenal MRG’sinde sağ adrenalde T2 ağırlıklı kesitlerde aşırı parlak 4.5 cm kitle saptanıyor',
        clues: ['zonklayıcı baş ağrısı, çarpıntı ve terleme', 'plazma serbest metanefrinleri 6 katı yüksek', 'T2 ağırlıklı kesitlerde aşırı parlak kitle'],
        management: 'Ameliyattan 10-14 gün önce fenoksibenzamin veya doksazosin ile alfa blokaj, ardından beta bloker ve laparoskopik adrenalektomi',
        pearl: 'Alfa blokaj sağlanmadan beta bloker başlanması karşılanmamış alfa vazokonstriksiyonuyla ölümcül hipertansif krizi tetikler.',
        trapFalse: 'cerrahi öncesi kalp hızını düşürmek için ilk olarak tek başına propranolol başlanır',
        trapHighlight: 'ilk olarak tek başına propranolol başlanır',
      },
      {
        name: 'Conn sendromu',
        target: 'Adrenal zona glomerulozadaki adenomdan renin-anjiyotensin sisteminden bağımsız otonom aldosteron salgılanması',
        hallmark: 'Dirençli hipertansiyona eşlik eden spontan hipokalemi, metabolik alkaloz ve yüksek aldosteron/renin oranı',
        vignette:
          'Üç antihipertansif ilaca rağmen kan basıncı 175/105 mmHg seyreden 44 yaşındaki kadın hastada kas güçsüzlüğü saptanıyor. Diüretik kullanmadığı halde serum potasyumu 2.7 mEq/L, bikarbonatı 31 mEq/L, plazma aldosteronu yüksek ve plazma renin aktivitesi baskılanmış bulunuyor',
        clues: ['diüretik kullanmadığı halde serum potasyumu 2.7 mEq/L', 'plazma renin aktivitesi baskılanmış', 'üç antihipertansif ilaca rağmen dirençli'],
        management: 'Adrenal venöz örnekleme ile tek taraflı adenom doğrulandıktan sonra laparoskopik adrenalektomi; bilateral hiperplazide spironolakton',
        pearl: 'BT tek başına insidentalomayı yanlı gösterebileceğinden 35 yaş üstü hastalarda cerrahi öncesi lateralizasyon için adrenal venöz örnekleme altın standarttır.',
        trapFalse: 'hiperkalemi ve metabolik asidoz ile seyreder, plazma renin aktivitesi belirgin yükselir',
        trapHighlight: 'hiperkalemi ve metabolik asidoz ile seyreder',
      },
      {
        name: 'Adrenokortikal karsinom',
        target: 'IGF2 aşırı ekspresyonu ve TP53 mutasyonlarıyla adrenal korteksten gelişen hızlı invaziv malign neoplazm',
        hallmark: 'Genellikle 6 cm üzeri düzensiz, nekrotik kitle ve hızlı gelişen hiperkortizolizm ile virilizasyon birlikteliği',
        vignette:
          '49 yaşındaki kadın hasta son 3 ayda hızla gelişen aydede yüzü, mor karın striaları, ses kalınlaşması, şiddetli hirsutizm ve sol yan ağrısıyla başvuruyor. BT’de sol sürrenal lojda 9.5 cm çaplı, heterojen nekrotik, yağ içeriği fakir ve renal vene yaklaşan kitle görülüyor',
        clues: ['mor karın striaları ve şiddetli hirsutizm', '9.5 cm çaplı heterojen nekrotik kitle', 'yağ içeriği fakir'],
        management: 'Kapsülü yırtmadan açık en-blok R0 cerrahi rezeksiyon, gereğinde çevre organ rezeksiyonu ve adjuvan mitotan tedavisi',
        pearl: 'Cushing bulgularına belirgin androjen fazlalığının yani virilizasyonun eşlik etmesi ve 6 cm üzeri boyut malignite açısından en güçlü uyarıdır.',
        trapFalse: 'kitle boyutu ne olursa olsun laparoskopik morselasyonla çıkarılması standart yaklaşımdır',
        trapHighlight: 'laparoskopik morselasyonla çıkarılması standart yaklaşımdır',
      },
      {
        name: 'Adrenal insidentaloma',
        target: 'Adrenal dışı bir endikasyonla çekilen batın görüntülemesinde rastlantısal saptanan 1 cm üzeri sürrenal kitle',
        hallmark: 'Asemptomatik hastada kontrastsız BT’de 10 Hounsfield ünitesi altında yağdan zengin benign adenom dansitesi',
        vignette:
          'Böbrek taşı şüphesiyle kontrastsız batın BT çekilen 55 yaşındaki asemptomatik erkek hastada sağ adrenal bezde 2.4 cm çaplı, düzgün sınırlı, homojen ve dansitesi 4 Hounsfield ünitesi olan kitle fark ediliyor',
        clues: ['böbrek taşı şüphesiyle rastlantısal', '2.4 cm çaplı düzgün sınırlı', 'dansitesi 4 Hounsfield ünitesi'],
        management: '1 mg gece deksametazon supresyon testi, plazma metanefrinleri ve hipertansifse aldosteron/renin ölçümü; nonfonksiyonel ve <4 cm ise takip',
        pearl: 'Her rastlantısal kitlede görüntüleme benign görünse bile mutlaka subklinik hormonal otonomi ve katekolamin salınımı biyokimyasal olarak dışlanmalıdır.',
        trapFalse: 'hormon testleri yapılmadan önce kesin tanı için mutlaka BT eşliğinde ince iğne biyopsisi yapılmalıdır',
        trapHighlight: 'mutlaka BT eşliğinde ince iğne biyopsisi yapılmalıdır',
      },
      {
        name: 'Cushing adenomu',
        target: 'Adrenal zona fasikülatadan hipofizden bağımsız otonom kortizol salgılayan benign kortikal tümör',
        hallmark: 'Baskılanmış serum ACTH düzeyi, santral obezite, proksimal kas güçsüzlüğü ve karşı adrenal bezde atrofi',
        vignette:
          'Son bir yılda 14 kg alan 39 yaşındaki kadın hastada ensede yağ birikimi, pletorik yuvarlak yüz, kolay morarma ve merdiven çıkmada zorluk saptanıyor. Gece 1 mg deksametazon supresyon testinde kortizol baskılanmıyor, serum ACTH düzeyi <5 pg/mL bulunuyor ve sağ adrenalde 3 cm adenom görülüyor',
        clues: ['serum ACTH düzeyi <5 pg/mL', 'ensede yağ birikimi ve kolay morarma', 'sağ adrenalde 3 cm adenom'],
        management: 'Laparoskopik tek taraflı adrenalektomi ve baskılanmış hipotalamus-hipofiz aksı düzelene kadar postoperatif steroid replasmanı',
        pearl: 'Karşı sağlam adrenal bez uzun süreli ACTH yokluğundan dolayı atrofik olduğu için ameliyat sonrası steroid verilmezse akut adrenal kriz gelişir.',
        trapFalse: 'serum ACTH düzeyi belirgin yükselir ve yüksek doz deksametazon ile kortizol tamamen baskılanır',
        trapHighlight: 'serum ACTH düzeyi belirgin yükselir',
      },
    ],
  },

  // 9. Özofagus cerrahisi
  {
    branchId: 'cerrahi',
    subTopic: 'Özofagus Cerrahisi ve Motilite Bozuklukları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Zenker divertikülü',
        target: 'Krikofaringeal kasın gevşeyememesi sonucu Killian üçgeninden mukoza ve submukozanın arkaya fıtıklaşması',
        hallmark: 'İleri yaşlı hastada sindirilmemiş gıda regürjitasyonu, kötü ağız kokusu ve boyunda sol tarafta guruldama sesi',
        vignette:
          '73 yaşındaki erkek hasta yutma güçlüğü, geceleri yastığına sindirilmemiş eski gıdaların geri gelmesi ve belirgin ağız kokusuyla başvuruyor. Boynun sol yanına bastırıldığında guruldama sesi duyuluyor ve baryumlu özofagografide posterior hipofarenksten dolan kese görülüyor',
        clues: ['sindirilmemiş eski gıdaların geri gelmesi', 'boynun sol yanına bastırıldığında guruldama', 'posterior hipofarenksten dolan kese'],
        management: 'Krikofaringeal miyotomi ile birlikte divertikülektomi, divertikülopeksi veya endoskopik zımbalı septotomi',
        pearl: 'Sadece keseyi çıkarmak altta yatan yüksek sfinkter basıncını düzeltmez ve nükse yol açar; krikofaringeal miyotomi tedavinin temelidir.',
        trapFalse: 'mide-özofagus bileşkesindeki gerçek bir konjenital divertiküldür ve endoskopik biyopsi ilk basamak tanıdır',
        trapHighlight: 'mide-özofagus bileşkesindeki gerçek bir konjenital divertiküldür',
      },
      {
        name: 'Boerhaave sendromu',
        target: 'Şiddetli öğürme ve kusma sırasında kapalı glottise karşı artan basınçla distal sol özofagusun tam kat yırtılması',
        hallmark: 'Kusma sonrası ani şiddetli göğüs ağrısı, boyunda cilt altı amfizemi ve sol plevral efüzyondan oluşan Mackler triadı',
        vignette:
          'Ağır alkol alımı sonrası defalarca şiddetli kusan 51 yaşındaki erkek hastada ani yırtıcı retrosternal ağrı, nefes darlığı ve şok tablosu gelişiyor. Boyun tabanında krepitasyon alınan hastanın akciğer grafisinde pnömomediastinum ve sol tarafta sıvı birikimi izleniyor; plevral sıvıda yüksek amilaz saptanıyor',
        clues: ['defalarca şiddetli kusma sonrası ani ağrı', 'boyun tabanında krepitasyon', 'pnömomediastinum ve yüksek amilaz'],
        management: 'Geniş spektrumlu antibiyotik, sıvı resüsitasyonu, ilk 24 saatte sol torakotomi ile primer onarım ve mediastinal drenaj',
        pearl: 'İatrojenik perforasyonun aksine tüm duvar katmanlarını tutan spontan rüptürdür ve tanıda baryum yerine suda çözünür kontrast tercih edilir.',
        trapFalse: 'yalnızca mukoza ve submukozayı tutan yüzeyel yırtıktır ve endoskopik klip ile konservatif izlenir',
        trapHighlight: 'yalnızca mukoza ve submukozayı tutan yüzeyel yırtıktır',
      },
      {
        name: 'Akalazya',
        target: 'Auerbach miyenterik pleksusundaki inhibitör nitrik oksit ve VIP nöronlarının kaybıyla alt sfinkter gevşeme kusuru',
        hallmark: 'Hem katı hem sıvılara karşı progresif disfaji, baryumlu grafide kuş gagası görünümü ve manometride aperistaltizm',
        vignette:
          '37 yaşındaki kadın hasta iki yıldır hem sıvıları hem de katı yiyecekleri yutarken göğsünde takılma hissi ve kilo kaybı yaşadığını belirtiyor. Baryumlu grafide dilate özofagusun alt ucunda düzgün incelen kuş gagası darlığı görülüyor ve yüksek çözünürlüklü manometride alt sfinkter gevşemiyor',
        clues: ['hem sıvıları hem de katı yiyecekleri yutarken', 'kuş gagası darlığı', 'alt sfinkter gevşemiyor'],
        management: 'Laparoskopik Heller miyotomi artı parsiyel fundoplikasyon, POEM veya pnömotik balon dilatasyon',
        pearl: 'Mekanik kanser darlıkları önce katılarla başlarken, motilite bozukluğu en baştan itibaren hem sıvı hem katı disfajisi yapar.',
        trapFalse: 'ilk tanı yöntemi manometri değil BT’dir ve miyotomi sonrası reflüyü önlemek için 360 derece Nissen tam fundoplikasyon eklenir',
        trapHighlight: '360 derece Nissen tam fundoplikasyon eklenir',
      },
      {
        name: 'Özofagus skuamöz hücreli karsinomu',
        target: 'Ağır tütün ve alkol maruziyetiyle en sık orta torasik özofagus epitelinden gelişen malignite',
        hallmark: 'Orta üçte bir özofagusta hızlı progresif katı disfajisi, kilo kaybı ve düzensiz elma yeniği darlık',
        vignette:
          '35 paket-yıl sigara ve kronik alkol öyküsü olan 63 yaşındaki erkek hasta son 3 ayda önce et ve ekmek gibi katı gıdaları, şimdi ise püreleri yutmakta zorlandığını ve 12 kg verdiğini söylüyor. Endoskopide kesici dişlerden 28. cm’de lümeni daraltan ülsere kitle görülüyor',
        clues: ['sigara ve alkol öyküsü', 'önce katı gıdaları yutmakta zorlandığını', 'kesici dişlerden 28. cm’de ülsere kitle'],
        management: 'Endoskopik ultrasonografi ve PET-BT evrelemesi sonrası neoadjuvan kemoradyoterapi ve ardından özofajektomi',
        pearl: 'Özofagusun serozası olmadığı için tümör çevre yapılara ve zengin submukozal lenfatik ağa erken dönemde yayılır.',
        trapFalse: 'en sık distal özofagusta Barrett metaplazisi zemininde gelişir ve seroza tabakası yayılmayı sınırlar',
        trapHighlight: 'en sık distal özofagusta Barrett metaplazisi zemininde gelişir',
      },
      {
        name: 'Özofagus adenokarsinomu',
        target: 'Kronik gastroözofageal reflüye ikincil intestinal metaplazi zemininde distal özofagusta gelişen malignite',
        hallmark: 'Uzun süreli reflü ve obezite öyküsü olan hastada gastroözofageal bileşkede goblet hücreli metaplazi zemininde kitle',
        vignette:
          'Yirmi yıldır kronik mide yanması ve obezite öyküsü bulunan 60 yaşındaki erkek hasta son aylarda katı gıdalarla takılma hissiyle başvuruyor. Endoskopide kesici dişlerden 38. cm’de somon renkli mukozadan yükselen egzofitik tümör saptanıyor',
        clues: ['yirmi yıldır kronik mide yanması', 'kesici dişlerden 38. cm’de', 'somon renkli mukozadan yükselen'],
        management: 'Evreleme sonrası lokal ileri hastalıkta neoadjuvan kemoradyoterapi artı Ivor Lewis veya transhiatal özofajektomi',
        pearl: 'Batı toplumlarında ve yüksek riskli reflü hastalarında en hızlı artış gösteren distal özofagus tümörüdür.',
        trapFalse: 'akoroziv yanık ve akalazya ile ilişkili olup en sık servikal ve üst torasik segmentte yerleşir',
        trapHighlight: 'en sık servikal ve üst torasik segmentte yerleşir',
      },
    ],
  },

  // 10. Mide ve postgastrektomi sendromları
  {
    branchId: 'cerrahi',
    subTopic: 'Mide Tümörleri ve Postgastrektomi Sendromları',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Erken dumping sendromu',
        target: 'Hiperozmolar gıdaların pilorsuz hızla jejenuma geçmesiyle intravasküler sıvı çekilmesi ve vazoaktif hormon salınımı',
        hallmark: 'Yemekten 15-30 dakika sonra gelişen karın krampı, diyare, çarpıntı, terleme ve vazomotor kızarma',
        vignette:
          'Billroth II mide rezeksiyonu geçiren 56 yaşındaki erkek hasta yemek yedikten 20 dakika sonra başlayan karın gurultusu, kramp tarzında ağrı, sulu ishal, çarpıntı, yüzünde kızarma ve baş dönmesi ataklarından yakınıyor. Atak anında bakılan kan şekeri normal bulunuyor',
        clues: ['yemekten 20 dakika sonra başlayan', 'sulu ishal ve yüzünde kızarma', 'kan şekeri normal bulunuyor'],
        management: 'Az ve sık öğün, sıvıların yemekten ayrı tüketilmesi, basit şekerlerden kaçınılması ve dirençli olgularda oktreotid',
        pearl: 'Postprandiyal 15-30 dakika içinde gelişir ve kan şekeri normaldir; intravasküler hipovolemiye bağlı vazomotor semptomlar ön plandadır.',
        trapFalse: 'yemekten 3 saat sonra gelişen derin hipoglisemi ataklarıyla karakterizedir',
        trapHighlight: 'yemekten 3 saat sonra gelişen derin hipoglisemi',
      },
      {
        name: 'Geç dumping sendromu',
        target: 'Hızlı karbonhidrat emilimine bağlı aşırı GLP-1 yanıtı ve abartılı insülin salınımıyla reaktif hipoglisemi',
        hallmark: 'Yemekten 2-3 saat sonra ortaya çıkan soğuk terleme, tremor, konfüzyon ve düşük kan glukozu',
        vignette:
          'Subtotal gastrektomi öyküsü olan 49 yaşındaki kadın hasta tatlı ve karbonhidratlı öğünlerden yaklaşık 2.5 saat sonra el titremesi, soğuk terleme, çarpıntı ve baygınlık hissi yaşadığını söylüyor. Semptom anında ölçülen parmak ucu glukozu 42 mg/dL bulunuyor',
        clues: ['öğünlerden yaklaşık 2.5 saat sonra', 'el titremesi ve soğuk terleme', 'parmak ucu glukozu 42 mg/dL'],
        management: 'Basit karbonhidratların diyetten çıkarılması, kompleks lifli beslenme, akarboz veya dirençte somatostatin analoğu',
        pearl: 'Glukoz verilmesiyle hızla düzelmesi ve yemekten 2-3 saat sonra görülmesiyle vazomotor tipteki erken formdan ayrılır.',
        trapFalse: 'temel nedeni yemekten 15 dakika sonra jejenuma geçen hiperozmolar sıvı kaybıdır ve GİS semptomları baskındır',
        trapHighlight: 'yemekten 15 dakika sonra jejenuma geçen hiperozmolar sıvı kaybıdır',
      },
      {
        name: 'Afferent ans sendromu',
        target: 'Billroth II rekonstrüksiyonu sonrası kör duodenal ansın tıkanmasıyla safra ve pankreas sıvısının birikmesi',
        hallmark: 'Yemek sonrası şiddetli epigastrik dolgunluğun ani fışkırır tarzda safralı kusma sonrası tamamen geçmesi',
        vignette:
          'Ülser nedeniyle Billroth II gastrojejunostomi yapılan 62 yaşındaki erkek hasta yemeklerden sonra üst karnında giderek artan gerilme ağrısı yaşadığını, ardından yiyecek içermeyen bol safralı bir kusma ile ağrısının bıçak gibi kesildiğini anlatıyor',
        clues: ['Billroth II gastrojejunostomi yapılan', 'yiyecek içermeyen bol safralı kusma', 'kusma ile ağrısının bıçak gibi kesildiğini'],
        management: 'Mekanik tıkanıklığı ortadan kaldırmak için anastomozun Roux-en-Y gastrojejunostomiye veya Braun enteroenterostomiye çevrilmesi',
        pearl: 'Kör ans boşaldığında ağrının tamamen rahatlaması ve kusmukta gıda artığı bulunmaması klasik tanısal ipucudur.',
        trapFalse: 'kusma sonrası karın ağrısı hiç hafiflemez ve tedavide yalnızca proton pompa inhibitörü yeterlidir',
        trapHighlight: 'kusma sonrası karın ağrısı hiç hafiflemez',
      },
      {
        name: 'Alkalen reflü gastrit',
        target: 'Pilor veya vagal kontrol kaybı sonrası safra tuzları ve pankreas enzimlerinin mide mukozasına kronik reflekse hasarı',
        hallmark: 'Kusma ile rahatlamayan sürekli yanıcı epigastrik ağrı, safralı kusma ve endoskopide ödemli kırmızı mukoza',
        vignette:
          'Geçirilmiş distal gastrektomi sonrası 58 yaşındaki kadın hasta sürekli devam eden yanıcı epigastrik ağrı, sık safralı kusma ve kilo kaybıyla başvuruyor. Kusma sonrasında ağrısının hafiflemediği öğrenilen hastanın endoskopisinde kalan midede yaygın safra göllenmesi ve kırmızı frajil mukoza görülüyor',
        clues: ['kusma sonrasında ağrısının hafiflemediği', 'sürekli yanıcı epigastrik ağrı', 'yaygın safra göllenmesi ve kırmızı frajil mukoza'],
        management: 'Medikal olarak kolestiramin veya sukralfat denenmesi; dirençli olgularda Roux-en-Y safra diversiyonu',
        pearl: 'Safralı kusmanın ağrıyı dindirmemesi, kör ans obstrüksiyonundan en önemli klinik ayrım noktasıdır.',
        trapFalse: 'epigastrik ağrı safralı kusma sonrası aniden tamamen kaybolur',
        trapHighlight: 'safralı kusma sonrası aniden tamamen kaybolur',
      },
      {
        name: 'Gastrointestinal stromal tümör',
        target: 'Cajal interstisyel pacemaker hücrelerinden köken alan aktive edici c-KIT veya PDGFRA mutasyonu',
        hallmark: 'Mide duvarından köken alan CD117 pozitif submukozal kitle ve lenf nodu metastazı yapmama eğilimi',
        vignette:
          'Üst gastrointestinal kanama ve erken doyma şikayetiyle başvuran 60 yaşındaki erkek hastanın endoskopisinde mide korpusunda üzeri normal mukoza ile örtülü ancak ortası ülsere 4.5 cm submukozal kitle görülüyor. Biyopside iğsi hücreler ve CD117 (c-KIT) pozitifliği saptanıyor',
        clues: ['üzeri normal mukoza ile örtülü submukozal kitle', 'iğsi hücreler', 'CD117 (c-KIT) pozitifliği'],
        management: 'Rutin lenfadenektomi yapılmadan negatif sınırla kama rezeksiyon; yüksek riskli veya metastatik olguda imatinib tedavisi',
        pearl: 'Lenfatik yayılımı neredeyse hiç olmadığı için geniş lenf nodu diseksiyonu yapılmaz; tirozin kinaz inhibitörü imatinib hedefe yönelik tedavidir.',
        trapFalse: 'erkenden bölgesel lenf nodlarına yayıldığı için mutlaka D2 radikal lenfadenektomi ve total gastrektomi gerektirir',
        trapHighlight: 'mutlaka D2 radikal lenfadenektomi',
      },
    ],
  },

  // 11. İnce bağırsak obstrüksiyonu ve akut karın (ÖSYM Twin 6)
  {
    branchId: 'cerrahi',
    subTopic: 'İnce Bağırsak Obstrüksiyonu ve Akut Karın',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Adezyon ileusu',
        target: 'Geçirilmiş batın cerrahisi sonrası oluşan fibröz bantların ince bağırsak ansını dıştan mekanik olarak sıkıştırması',
        hallmark: 'Cerrahi skarı olan hastada kolik karın ağrısı, safralı kusma, gaz-gaita çıkaramama ve merdiven şeklinde hava-sıvı seviyeleri',
        vignette:
          'Beş yıl önce açık kolesistektomi geçiren 52 yaşındaki kadın hasta son 24 saattir şiddetlenen kramp tarzında karın ağrısı, bol safralı kusma ve gaz çıkaramama yakınmasıyla acile başvuruyor. Karında distansiyon ve hiperaktif metalik bağırsak sesleri bulunan hastanın ayakta direkt karın grafisinde basamak şeklinde hava-sıvı seviyeleri görülüyor',
        clues: ['beş yıl önce açık kolesistektomi', 'bol safralı kusma ve gaz çıkaramama', 'basamak şeklinde hava-sıvı seviyeleri'],
        management: 'Ateş, taşikardi, peritonit veya lökositoz yoksa nazogastrik dekompresyon ve IV sıvı ile takip; düzelmezse veya strangülasyonda adhezyolizis',
        pearl: 'Gelişmiş ülkelerde ince bağırsak tıkanıklığının en sık nedenidir; fıtık keseleri her muayenede mutlaka kontrol edilmelidir.',
        trapFalse: 'tanı konulduğu anda tüm hastalara konservatif izlem denenmeden acil laparotomi yapılmalıdır',
        trapHighlight: 'konservatif izlem denenmeden acil laparotomi yapılmalıdır',
      },
      {
        name: 'Safra taşı ileusu',
        target: 'Kronik kolesistit sonrası oluşan kolesistoduodenal fistülden geçen taşın distal ileum veya ileoçekal valvi tıkaması',
        hallmark: 'Mekanik bağırsak tıkanıklığı, pnömobili ve ektopik safra taşından oluşan Rigler triadı',
        vignette:
          'Safra kesesi taşı öyküsü olan 77 yaşındaki kadın hasta aralıklı şiddetlenip düzelen karın ağrısı ve safralı kusmayla acile getiriliyor. Çekilen batın BT’de ince bağırsak anslarının genişlediği, safra yolları içinde hava bulunduğu ve sağ alt kadranda lümene oturmuş 3.5 cm’lik kalsifiye taş olduğu izleniyor',
        clues: ['safra yolları içinde hava bulunduğu', 'lümene oturmuş 3.5 cm’lik kalsifiye taş', 'ince bağırsak anslarının genişlediği'],
        management: 'Enterolitotomi ile taşın çıkarılması; ileri yaşlı ve yüksek riskli hastada kolesistektomi ve fistül onarımının aynı seansta yapılmaması',
        pearl: 'Taş genellikle distal ileumda takılır; yüksek cerrahi riski nedeniyle tek aşamalı fistül tamiri yerine öncelikle yalnızca enterolitotomi tercih edilir.',
        trapFalse: 'en sık tıkanma yeri duodenum birinci kıtadır ve aynı seansta mutlaka radikal fistül onarımı şarttır',
        trapHighlight: 'aynı seansta mutlaka radikal fistül onarımı şarttır',
      },
      {
        name: 'Akut mezenterik arter embolisi',
        target: 'Atriyal fibrilasyon kaynaklı kardiyak embolinin süperior mezenterik arterin orta kolik dal distalini tıkaması',
        hallmark: 'Fizik muayene bulgularıyla orantısız şiddetli ani karın ağrısı ve derin laktik asidoz',
        vignette:
          'Atriyal fibrilasyonu olup düzenli antikoagülan kullanmayan 71 yaşındaki erkek hasta iki saat önce bıçak saplanır gibi ani başlayan çok şiddetli göbek çevresi ağrısıyla kıvranıyor. Karın muayenesinde ise ağrıyla orantısız olarak belirgin defans ve rebound saptanmıyor; kan gazında laktat 6.4 mmol/L ölçülüyor',
        clues: ['atriyal fibrilasyonu olup', 'ağrıyla orantısız olarak belirgin defans yok', 'laktat 6.4 mmol/L'],
        management: 'Acil BT anjiyografi ile tanı konulduktan sonra sistemik heparin, embolektomi ve nekrotik bağırsak segmentlerinin rezeksiyonu',
        pearl: 'Erken dönemde muayenenin yumuşak olmasına rağmen hastanın ağrıdan kıvranması bağırsak iskemisinin en alarm verici erken klinik işaretidir.',
        trapFalse: 'günler içinde yavaş ilerler ve karın grafisinde serbest hava görülmeden hiçbir müdahale yapılmaz',
        trapHighlight: 'günler içinde yavaş ilerler',
      },
      {
        name: 'Mezenterik ven trombozu',
        target: 'Trombofili, malignite veya portal hipertansiyon zemininde venöz çıkış obstrüksiyonu ve hemorajik bağırsak ödemi',
        hallmark: 'Günler içinde sinsi ilerleyen karın ağrısı, BT’de portal-mezenterik vende dolum defekti ve kalınlaşmış ödemli duvar',
        vignette:
          'Faktör V Leiden mutasyonu olan 45 yaşındaki kadın hasta 5 gündür giderek artan yaygın karın ağrısı, bulantı ve hafif kanlı dışkılamayla başvuruyor. Kontrastlı batın BT’de süperior mezenterik ven lümeninde trombüs, mezenterde ödem ve kalınlaşmış jejenal duvarlar izleniyor',
        clues: ['Faktör V Leiden mutasyonu', '5 gündür giderek artan ağrı', 'süperior mezenterik ven lümeninde trombüs'],
        management: 'Peritonit bulgusu yoksa erken sistemik antikoagülasyon (heparin) ve trombofili araştırması; enfarktüs gelişirse cerrahi rezeksiyon',
        pearl: 'Arteriyel emboliden farklı olarak subakut seyreder ve erken saptandığında cerrahi yerine sistemik antikoagülasyonla tedavi edilebilir.',
        trapFalse: 'tedavide antikoagülasyon kontrendikedir ve tüm olgularda acil vasküler bypass cerrahisi uygulanır',
        trapHighlight: 'antikoagülasyon kontrendikedir',
      },
      {
        name: 'Akut apandisit',
        target: 'Fekalit veya lenfoid hiperplazi sonucu apendiks lümeninin tıkanmasıyla gelişen transmural bakteriyel inflamasyon',
        hallmark: 'Periumbilikal başlayıp sağ alt kadrana yerleşen ağrı, McBurney noktasında hassasiyet, Rovsing ve psoas bulguları',
        vignette:
          '21 yaşındaki erkek hasta sabah göbek çevresinde başlayan künt ağrının öğleden sonra iştahsızlık ve bir kez kusma ile sağ alt kadrana yerleştiğini belirtiyor. Ateşi 37.9 °C olan hastada McBurney noktasında hassasiyet, rebound ve sol alt kadrana basınca sağda ağrı saptanıyor',
        clues: ['göbek çevresinde başlayıp sağ alt kadrana yerleşen', 'McBurney noktasında hassasiyet', 'sol alt kadrana basınca sağda ağrı'],
        management: 'Preoperatif tek doz geniş spektrumlu antibiyotik profilaksisi sonrası laparoskopik veya açık apendektomi',
        pearl: 'Ağrı önce visseral sinirlerle periumbilikal hissedilir, paryetal periton irrite olunca somatik olarak sağ alt kadrana lokalize olur.',
        trapFalse: 'ağrı her zaman ilk dakikadan itibaren sağ alt kadranda başlar ve iştahsızlık görülmesi tanıyı dışlar',
        trapHighlight: 'iştahsızlık görülmesi tanıyı dışlar',
      },
    ],
  },

  // 12. Herediter kolorektal polipozis ve kanser sendromları (ÖSYM Twin 7)
  {
    branchId: 'cerrahi',
    subTopic: 'Herediter Kolorektal Polipozis ve Kanser Sendromları',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Familyal adenomatöz polipozis',
        target: '5q21 kromozomundaki APC tümör baskılayıcı geninin otozomal dominant germline mutasyonu',
        hallmark: 'Ergenlikten itibaren kolonda yüzlerce-binlerce adenomatöz polip ve tedavi edilmezse %100 kolorektal kanser gelişimi',
        vignette:
          'Babasında 38 yaşında kolon kanseri öyküsü bulunan 19 yaşındaki erkek hastanın tarama kolonoskopisinde çekumdan rektuma kadar tüm kolonu halı gibi kaplayan 1000’in üzerinde küçük adenomatöz polip saptanıyor. Genetik testte 5q21 lokusunda mutasyon doğrulanıyor',
        clues: ['tüm kolonu kaplayan 1000’in üzerinde polip', '5q21 lokusunda mutasyon', 'babasında 38 yaşında kolon kanseri'],
        management: '20 yaş civarında profilaktik total proktokolektomi ile ileal poş-anal anastomoz ve periampuller adenomlar için üst GİS endoskopik izlem',
        pearl: 'Kolektomi sonrasında bile hastalarda en sık ölüm nedenlerinden biri periampuller duodenal adenokarsinom ve desmoid tümörlerdir.',
        trapFalse: 'otozomal resesif kalıtılır, polipler hamartomatözdür ve malign dönüşüm riski yalnızca %5 civarındadır',
        trapHighlight: 'otozomal resesif kalıtılır, polipler hamartomatözdür',
      },
      {
        name: 'Gardner sendromu',
        target: 'APC gen mutasyonunun ekstragastrointestinal mezenkimal ve kemik tümörleriyle fenotipik birlikteliği',
        hallmark: 'Kolon adenomlarına eşlik eden mandibula-kafatası osteomları, epidermoid kistler, desmoid tümörler ve retinal pigment hipertrofisi',
        vignette:
          '24 yaşındaki erkek hastada çene kemiğinde çok sayıda sert osteom, sırtında tekrarlayan epidermoid kistler, konjenital retinal pigment epitel hipertrofisi ve kolonoskopide yüzlerce tübüler adenom saptanıyor',
        clues: ['çene kemiğinde çok sayıda sert osteom', 'epidermoid kistler', 'retinal pigment epitel hipertrofisi'],
        management: 'Profilaktik total kolektomi ve desmoid tümörlerde cerrahi travmadan kaçınılarak sulindak veya medikal takip',
        pearl: 'Cerrahi travma desmoid tümör büyümesini tetikleyebildiği için intraabdominal desmoidler mümkün olduğunca medikal izlenir.',
        trapFalse: 'dudak ve ağız içi mukozada melanin lekeleri ile seyreder ve kemik osteomu görülmez',
        trapHighlight: 'dudak ve ağız içi mukozada melanin lekeleri ile seyreder',
      },
      {
        name: 'Turcot sendromu',
        target: 'APC veya DNA mismatch onarım gen mutasyonlarına bağlı kolorektal poliplerle santral sinir sistemi tümörü birlikteliği',
        hallmark: 'Çok sayıda kolon polibi olan genç hastada serebellar medulloblastom veya glioblastom gelişimi',
        vignette:
          'Kolonoskopisinde çok sayıda adenomatöz polip saptanan 17 yaşındaki erkek hasta son haftalarda gelişen baş ağrısı, sabah kusmaları ve yürüme ataksisiyle başvuruyor. Kraniyal MRG’sinde dördüncü ventriküle bası yapan serebellar medulloblastom saptanıyor',
        clues: ['çok sayıda adenomatöz polip', 'yürüme ataksisi ve sabah kusmaları', 'serebellar medulloblastom'],
        management: 'Nöroşirürjikal beyin tümörü tedavisi ile eş zamanlı aile taraması ve profilaktik kolektomi planlanması',
        pearl: 'APC tipi mutasyonlarda özellikle medulloblastom, DNA onarım kusuru tipinde ise daha çok glioblastom eşlik eder.',
        trapFalse: 'kolon poliplerine yalnızca tiroid papiller kanseri ve yumuşak doku osteomları eşlik eder',
        trapHighlight: 'yalnızca tiroid papiller kanseri ve yumuşak doku osteomları',
      },
      {
        name: 'Peutz-Jeghers sendromu',
        target: '19p13 üzerindeki STK11 (LKB1) serin-treonin kinaz geninin otozomal dominant mutasyonu',
        hallmark: 'Dudak ve bukkal mukozada hiperpigmente maküller ile ince bağırsakta düz kas dallanması gösteren hamartomatöz polipler',
        vignette:
          '14 yaşındaki kız hasta tekrarlayan kramp tarzı karın ağrısı ve intussusepsiyon atağıyla ameliyata alınıyor. Muayenede alt dudağı ve yanak iç mukozasında koyu kahverengi benekler görülüyor; çıkarılan jejenal polipte arborize düz kas lifleri içeren hamartomatöz yapı izleniyor',
        clues: ['alt dudağı ve yanak iç mukozasında koyu kahverengi benekler', 'intussusepsiyon atağı', 'arborize düz kas lifleri içeren hamartom'],
        management: 'Büyük ince bağırsak poliplerinin endoskopik çıkarılması ve meme, pankreas, over-testis kanserleri açısından düzenli tarama',
        pearl: 'Poliplerin kendisi hamartomatöz olmasına rağmen gastrointestinal ve ekstra-GİS (meme, pankreas, gonadal) kanser riski belirgin artmıştır.',
        trapFalse: 'polipler sadece rektuma sınırlı gerçek adenomlardır ve mukokutanöz pigmentasyon puberte sonrası kalıcı olarak koyulaşır',
        trapHighlight: 'polipler sadece rektuma sınırlı gerçek adenomlardır',
      },
      {
        name: 'Lynch sendromu',
        target: 'MLH1, MSH2, MSH6 veya PMS2 DNA yanlış eşleşme onarım genlerindeki otozomal dominant germline mutasyon',
        hallmark: 'Polipozis olmaksızın genç yaşta proksimal kolon kanseri, endometriyum kanseri ve yüksek mikrosatellit instabilite',
        vignette:
          'Annesinde 44 yaşında endometriyum kanseri, dayısında 46 yaşında sağ kolon kanseri öyküsü bulunan 41 yaşındaki kadın hastada demir eksikliği anemisi nedeniyle yapılan kolonoskopide çekumda kitle saptanıyor. Kolonda yaygın polip görülmüyor; tümörde yüksek mikrosatellit instabilite ve MLH1 kaybı izleniyor',
        clues: ['annesinde 44 yaşında endometriyum kanseri', 'kolonda yaygın polip görülmüyor', 'yüksek mikrosatellit instabilite ve MLH1 kaybı'],
        management: '20-25 yaşından itibaren 1-2 yılda bir kolonoskopi ve endometriyum-over taraması; kanser gelişirse subtotal kolektomi',
        pearl: 'En sık görülen kalıtsal kolorektal kanser sendromudur; Amsterdam II ve Bethesda kriterleri taramada kullanılır.',
        trapFalse: 'tanı için kolonda mutlaka yüzlerce adenomatöz polip bulunmalıdır ve en sık rektumda gelişir',
        trapHighlight: 'mutlaka yüzlerce adenomatöz polip bulunmalıdır',
      },
    ],
  },

  // 13. Kolon ve anorektal cerrahi
  {
    branchId: 'cerrahi',
    subTopic: 'Kolon ve Anorektal Cerrahi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Sigmoid volvulus',
        target: 'Uzun ve dar tabanlı mezenter çevresinde distal kolon segmentinin kendi ekseni etrafında dönmesi',
        hallmark: 'Kronik kabızlık öykülü yaşlı hastada karın grafisinde sağ üst kadrana yönelen kahve çekirdeği görünümü',
        vignette:
          'Bakımevinde kalan 79 yaşındaki kronik kabızlık ve psikiyatrik ilaç öykülü erkek hasta 2 gündür gaz-gaita çıkaramama ve ileri derecede karın şişliğiyle getiriliyor. Peritonit bulgusu olmayan hastanın ayakta karın grafisinde pelvisden sağ üst kadrana uzanan dev kahve çekirdeği şeklinde gazlı bağırsak halkası görülüyor',
        clues: ['kronik kabızlık öykülü 79 yaşındaki erkek', 'sağ üst kadrana uzanan dev kahve çekirdeği', 'peritonit bulgusu olmayan'],
        management: 'İskemi veya perforasyon yoksa acil fleksibl sigmoidoskopi ile detorsiyon ve rektal tüp yerleştirilmesi; ardından nüksü önlemek için elektif rezeksiyon',
        pearl: 'Endoskopik detorsiyon sonrası yüksek nüks oranı nedeniyle aynı yatışta veya elektif şartlarda cerrahi rezeksiyon önerilir.',
        trapFalse: 'peritonit olmasa bile endoskopik detorsiyon kesinlikle kontrendikedir ve sol üst kadrana yönelen tek sıvı seviyesi görülür',
        trapHighlight: 'endoskopik detorsiyon kesinlikle kontrendikedir',
      },
      {
        name: 'Çekum volvulusu',
        target: 'Posterior peritona yetersiz fiksasyon nedeniyle sağ kolon ve terminal ileumun aksiyel dönmesi',
        hallmark: 'Sol üst kadrana yönelmiş büyük gaz dolu böbrek şeklinde halka ve endoskopik detorsiyona genellikle direnç',
        vignette:
          '38 yaşındaki kadın hasta ani başlayan sağ alt kadran ağrısı, kusma ve karında asimetrik şişlikle acile başvuruyor. Çekilen karın grafisinde sol üst kadrana doğru uzanan büyük, fasulye biçimli gaz dolu halka izleniyor ve periton irritasyon bulguları başlıyor',
        clues: ['38 yaşındaki kadın', 'sol üst kadrana doğru uzanan fasulye biçimli halka', 'asimetrik şişlik'],
        management: 'Yüksek iskemi ve perforasyon riski nedeniyle endoskopi ile zaman kaybetmeden acil laparotomi ve sağ hemikolektomi',
        pearl: 'Daha genç kadınlarda görülür ve kolonoskopik başarı şansı çok düşük olduğundan birincil tedavisi cerrahi rezeksiyondur.',
        trapFalse: 'en sık yaşlı erkeklerde görülür ve ilk basamak tedavisi her zaman fleksibl sigmoidoskopidir',
        trapHighlight: 'ilk basamak tedavisi her zaman fleksibl sigmoidoskopidir',
      },
      {
        name: 'Akut divertikülit',
        target: 'Vaza rekta giriş noktalarındaki kolonik psödodivertiküllerin fekalitle tıkanarak mikroperforasyon geçirmesi',
        hallmark: 'Sol alt kadran ağrısı, ateş, lökositoz ve BT’de perikolik yağ dokusu kirlenmesi veya apse',
        vignette:
          '61 yaşındaki erkek hasta 2 gündür devam eden sol alt kadran ağrısı, 38.4 °C ateş ve iştahsızlıkla başvuruyor. Muayenede sol alt kadranda hassasiyet saptanıyor; intravenöz ve oral kontrastlı batın BT’de sigmoid duvar kalınlaşması, çevre yağ dokuda inflamasyon ve 5 cm’lik perikolik apse görülüyor',
        clues: ['sol alt kadranda hassasiyet ve 38.4 °C ateş', 'sigmoid duvar kalınlaşması', '5 cm’lik perikolik apse'],
        management: 'Komplike olmayanda antibiyotik ve diyet düzenlemesi; 4 cm üzeri Hinchey II apsede BT eşliğinde perkütan drenaj; pürülan/fekal peritonitte cerrahi',
        pearl: 'Akut atak sırasında perforasyon riski nedeniyle kolonoskopiden kaçınılır; kolonoskopi maligniteyi dışlamak için 6-8 hafta sonra yapılır.',
        trapFalse: 'akut dönemde perforasyonu doğrulamak için hemen tanısal kolonoskopi ve baryumlu lavman yapılır',
        trapHighlight: 'hemen tanısal kolonoskopi ve baryumlu lavman yapılır',
      },
      {
        name: 'Anal fissür',
        target: 'Sert dışkılama travmasına ikincil internal anal sfinkter hipertonisi ve posterior orta hat mukozal iskemisi',
        hallmark: 'Dışkılama sırasında cam keser gibi keskin ağrı, tuvalet kağıdında parlak kırmızı çizgisel kanama ve saat 6 hizasında nöbetçi meme',
        vignette:
          '31 yaşındaki kadın hasta dışkılama sırasında başlayan ve saatlerce süren keskin yırtıcı makat ağrısı ile tuvalet kağıdında taze kan gördüğünü belirtiyor. Muayenede anal kanal posterior orta hatta yırtık, ucunda hipertrofik cilt takısı ve proksimalde hipertrofik papilla görülüyor',
        clues: ['keskin yırtıcı makat ağrısı', 'posterior orta hatta yırtık', 'hipertrofik cilt takısı'],
        management: 'Sıcak oturma banyosu, lifli diyet ve topikal gliseril trinitrat veya diltiazem; kronik dirençte lateral internal sfinkterotomi',
        pearl: 'Vakaların %90’ı posterior orta hattadır; lateral yerleşimli, multipl veya iyileşmeyen lezyonlarda Crohn, tüberküloz veya malignite araştırılmalıdır.',
        trapFalse: 'sıklıkla saat 3 ve 9 lateral kadranlarda görülür ve ilk basamak tedavisi mutlaka sfinkterotomi cerrahisidir',
        trapHighlight: 'sıklıkla saat 3 ve 9 lateral kadranlarda görülür',
      },
      {
        name: 'Perianal apse',
        target: 'Dentat çizgi düzeyindeki anal kriptoglandüler bezlerin tıkanarak intersfinkterik alana pürülan enfeksiyon yayması',
        hallmark: 'Şiddetli zonklayıcı makat ağrısı, oturma güçlüğü, ateş ve anal kenarda kızarık fluktuasyon veren şişlik',
        vignette:
          '40 yaşındaki erkek hasta son 3 gündür oturmasını engelleyen şiddetli zonklayıcı anal ağrı ve 38.5 °C ateş ile başvuruyor. Perianal muayenede anal kanalın sağ posterior kenarında sıcak, eritematöz, dokunmakla aşırı hassas ve fluktuasyon veren şişlik saptanıyor',
        clues: ['oturmasını engelleyen şiddetli zonklayıcı ağrı', 'eritematöz ve fluktuasyon veren şişlik', '38.5 °C ateş'],
        management: 'Antibiyotikle geciktirmeden acil insizyon ve anal kanala yakın noktadan drenaj; kronik fistül gelişirse Goodsall kuralına göre tedavi',
        pearl: 'Tedavinin geciktirilmesi enfeksiyonun derin alanlara yayılmasına yol açar; sağlıklı bireyde tek başına antibiyotik drenajın yerini tutmaz.',
        trapFalse: 'fluktuasyon olsa bile cerrahi drenajdan kaçınılarak 14 gün tek başına oral antibiyotik ile izlenir',
        trapHighlight: '14 gün tek başına oral antibiyotik ile izlenir',
      },
    ],
  },

  // 14. Safra kesesi ve safra yolu hastalıkları (ÖSYM Twin 8)
  {
    branchId: 'cerrahi',
    subTopic: 'Safra Kesesi ve Safra Yolu Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Akut taşlı kolesistit',
        target: 'Sistik kanalın safra taşı ile obstrüksiyonu sonucu safra kesesi duvarında kimyasal ve sekonder bakteriyel inflamasyon',
        hallmark: 'Sağ üst kadran ağrısı, ateş, pozitif Murphy bulgusu ve ultrasonda 4 mm üzeri duvar kalınlaşması artı perikolesistik sıvı',
        vignette:
          '45 yaşındaki obez kadın hasta yağlı akşam yemeği sonrası başlayıp 12 saattir geçmeyen sağ üst kadran ağrısı, bulantı ve 38.2 °C ateşle başvuruyor. Sağ subkostal bölgede derin inspiryumla ağrılı duraklama saptanan hastanın ultrasonunda boyunda impakte taş, kalınlaşmış kese duvarı ve çevre sıvı izleniyor',
        clues: ['derin inspiryumla ağrılı duraklama', 'boyunda impakte taş', 'kalınlaşmış kese duvarı ve çevre sıvı'],
        management: 'İntravenöz sıvı, analjezi, antibiyotik ve ilk 72 saat içinde erken laparoskopik kolesistektomi',
        pearl: 'Gelişen tabloda erken laparoskopik cerrahi, geciktirilmiş interval cerrahiye göre komplikasyon ve yatış süresini azaltır.',
        trapFalse: 'tanıda ilk tercih görüntüleme MRCP’dir ve ilk 6 hafta boyunca kesinlikle kolesistektomi yapılmaz',
        trapHighlight: 'ilk 6 hafta boyunca kesinlikle kolesistektomi yapılmaz',
      },
      {
        name: 'Akut akalkülöz kolesistit',
        target: 'Ciddi travma, yanık veya uzun süreli yoğun bakım hastalarında kese stazı ve iskemisiyle gelişen taşsız nekroz',
        hallmark: 'Total parenteral beslenme alan kritik hastada açıklanamayan sepsis ve ultrasonda taş olmadan kese duvar ödemi',
        vignette:
          'Büyük yanık nedeniyle 16 gündür yoğun bakımda total parenteral beslenme ve mekanik ventilasyon desteği alan 65 yaşındaki erkek hastada ani ateş yükselmesi, lökositoz ve hipotansiyon gelişiyor. Yatak başı ultrasonda safra kesesi taşı görülmeden belirgin duvar kalınlaşması, çamur ve perikolesistik sıvı saptanıyor',
        clues: ['total parenteral beslenme alan kritik hastada', 'safra kesesi taşı görülmeden', 'belirgin duvar kalınlaşması ve çamur'],
        management: 'Hızlı gangren ve perforasyon riski nedeniyle acil perkütan kolesistostomi veya hasta stabilse cerrahi kolesistektomi',
        pearl: 'Taşlı forma göre iskemi ve perforasyon riski çok daha yüksek olduğu için yüksek mortalite taşır; tanısı sıklıkla gecikir.',
        trapFalse: 'genellikle genç ayaktan kadınlarda görülür ve gangren-perforasyon riski oldukça düşüktür',
        trapHighlight: 'gangren-perforasyon riski oldukça düşüktür',
      },
      {
        name: 'Akut asendan kolanjit',
        target: 'Sıklıkla koledok taşına bağlı biliyer staz üzerine enterik bakterilerin safra yollarına yükselmesi',
        hallmark: 'Sağ üst kadran ağrısı, ateş ve sarılıktan oluşan Charcot triadı; ağır olguda hipotansiyon ve konfüzyonla Reynolds pentadı',
        vignette:
          '68 yaşındaki kadın hasta titremeyle yükselen 39.5 °C ateş, sağ üst kadran ağrısı, sarılık ve son saatlerde gelişen konfüzyon ile 80/50 mmHg tansiyon nedeniyle acile getiriliyor. Direkt bilirubin, alkalen fosfataz ve lökosit belirgin yüksek olup ultrasonda koledok 13 mm dilate ölçülüyor',
        clues: ['39.5 °C ateş, sağ üst kadran ağrısı ve sarılık', 'konfüzyon ile 80/50 mmHg tansiyon', 'koledok 13 mm dilate'],
        management: 'Acil sıvı resüsitasyonu, geniş spektrumlu IV antibiyotik ve ERCP ile acil biliyer drenaj-sfinkterotomi',
        pearl: 'Antibiyotiğe yanıt vermeyen süpüratif tabloda ERCP ile safra yollarının acil dekompresyonu hayat kurtarıcıdır.',
        trapFalse: 'hastalar stabilleşene kadar ERCP kesinlikle ertelenir ve öncelikle sadece elektif laparoskopik kolesistektomi yapılır',
        trapHighlight: 'ERCP kesinlikle ertelenir',
      },
      {
        name: 'Mirizzi sendromu',
        target: 'Kese boynu veya sistik kanala sıkışmış büyük taşın komşu ana hepatik kanala dıştan bası veya fistülizasyonu',
        hallmark: 'Tıkanma sarılığı ve kolanjit tablosunda kolanjiyografide kese boynundaki taşla uyumlu ana safra kanalı dıştan basısı',
        vignette:
          '59 yaşındaki erkek hasta sağ üst kadran ağrısı, sarılık ve ateş şikayetiyle başvuruyor. MRCP’de safra kesesi boynuna oturmuş 2.5 cm’lik taşın ana hepatik kanala dıştan bası yaparak proksimal intrahepatik safra yollarını genişlettiği, distal koledoğun ise normal çapta olduğu görülüyor',
        clues: ['safra kesesi boynuna oturmuş 2.5 cm’lik taş', 'ana hepatik kanala dıştan bası', 'distal koledoğun normal çapta'],
        management: 'Koledok yaralanmasından kaçınmak için dikkatli subtotal kolesistektomi ve bilio-biliyer fistül varsa hepatikojejunostomi',
        pearl: 'Calot üçgenindeki yoğun inflamasyon nedeniyle ameliyat öncesi tanınmazsa koledok yaralanması riski çok yüksektir.',
        trapFalse: 'distal pankreas başı kitlesine bağlı gelişir ve standart tedavisi Whipple ameliyatıdır',
        trapHighlight: 'standart tedavisi Whipple ameliyatıdır',
      },
      {
        name: 'Klatskin tümörü',
        target: 'Sağ ve sol ana hepatik kanalların birleşim yerinden köken alan perihiler kolanjiyokarsinom',
        hallmark: 'Ağrısız progresif tıkanma sarılığı, dilate intrahepatik safra yolları, normal çaplı distal koledok ve kollabe safra kesesi',
        vignette:
          'Primer sklerozan kolanjit öyküsü olan 64 yaşındaki erkek hasta son 6 haftada giderek koyulaşan ağrısız sarılık, kaşıntı ve kilo kaybıyla başvuruyor. MRCP’de her iki lobdaki intrahepatik safra yolları genişlemiş ancak ortak hepatik kanal birleşim yerinde darlık ve aşağıda kollabe safra kesesi görülüyor',
        clues: ['ağrısız sarılık ve kilo kaybı', 'ortak hepatik kanal birleşim yerinde darlık', 'kollabe safra kesesi'],
        management: 'Biliyer drenaj sonrası Bismuth-Corlette sınıflamasına göre portal ven embolizasyonu ve genişletilmiş hepatektomi artı ekstrahepatik safra yolu rezeksiyonu',
        pearl: 'Kese altında yerleşen pankreas başı kanserinde kese şişerken (Courvoisier), kese üstü hiler yerleşimli tümörde kese kollabedir.',
        trapFalse: 'fizik muayenede ele gelen ağrısız şişkin safra kesesi (Courvoisier bulgusu) tipik olarak pozitiftir',
        trapHighlight: 'ele gelen ağrısız şişkin safra kesesi (Courvoisier bulgusu) tipik olarak pozitiftir',
      },
    ],
  },

  // 15. Karaciğer kistik ve solid kitleleri
  {
    branchId: 'cerrahi',
    subTopic: 'Karaciğer Kistik ve Solid Kitleleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kavernöz hemanjiom',
        target: 'Karaciğer parankimindeki endotel döşeli geniş kan göllenme boşluklarından oluşan benign vasküler malformasyon',
        hallmark: 'Trifazik BT veya MRG’de arteriyel fazda periferik nodüler kontrastlanma ve geç fazlarda merkeze doğru doluş',
        vignette:
          'Dispepsi nedeniyle batın ultrasonu yapılan 41 yaşındaki asemptomatik kadının karaciğer sağ lobunda iyi sınırlı hiperekoik 3 cm lezyon görülüyor. Dinamik MRG’de erken arteriyel fazda çevresel nodüler boyanma ve geç venöz fazda merkeze doğru ilerleyen tam doluş saptanıyor',
        clues: ['iyi sınırlı hiperekoik 3 cm lezyon', 'çevresel nodüler boyanma', 'geç venöz fazda merkeze doğru ilerleyen doluş'],
        management: 'Masif kanama riski nedeniyle perkütan iğne biyopsisinden kaçınılması ve asemptomatik olgularda cerrahi yapılmadan izlem',
        pearl: 'Karaciğerin en sık benign solid tümörüdür; gebelik veya östrojen ile hafif büyüyebilir ancak rüptür son derece nadirdir.',
        trapFalse: 'tanıyı doğrulamak için ilk aşamada mutlaka kalın iğne biyopsisi yapılmalıdır ve malign dönüşüm riski yüksektir',
        trapHighlight: 'mutlaka kalın iğne biyopsisi yapılmalıdır',
      },
      {
        name: 'Fokal nodüler hiperplazi',
        target: 'Konjenital arteriyovenöz malformasyonun yol açtığı hiperperfüzyona yanıt olarak gelişen poliklonal hepatosit hiperplazisi',
        hallmark: 'Ortasında T2 hiperintens santral yıldızsı fibröz skar bulunan ve sülfür kolloid sintigrafisinde Kupffer hücresi tutulumu gösteren lezyon',
        vignette:
          '32 yaşındaki kadın hastada başka nedenle çekilen dinamik karaciğer MRG’sinde arteriyel fazda homojen parlayan ve merkezinde T2 ağırlıklı kesitlerde parlak yıldız şeklinde skar içeren 4 cm’lik kitle saptanıyor. Teknesyum-99m sülfür kolloid sintigrafisinde lezyonun izo-hiperaktif tutulum gösterdiği izleniyor',
        clues: ['merkezinde parlak yıldız şeklinde skar', 'arteriyel fazda homojen parlayan', 'sülfür kolloid sintigrafisinde tutulum'],
        management: 'Rüptür ve malignleşme riski olmadığından oral kontraseptif kesilmesi şart değildir; asemptomatikte takip yeterlidir',
        pearl: 'İçerisinde fonksiyonel Kupffer hücreleri ve safra duktusları bulundurduğu için sülfür kolloid tutulumu göstermesi adenomdan ayırıcı özelliktir.',
        trapFalse: 'Kupffer hücresi içermez ve yüksek spontan rüptür riski nedeniyle tüm hastalarda mutlaka cerrahi olarak çıkarılır',
        trapHighlight: 'Kupffer hücresi içermez ve yüksek spontan rüptür riski',
      },
      {
        name: 'Hepatoselüler adenom',
        target: 'Uzun süreli oral kontraseptif veya anabolik steroid maruziyetiyle ilişkili monoklonal benign hepatosit neoplazmı',
        hallmark: 'Oral kontraseptif kullanan genç kadında Kupffer hücresi içermeyen, spontan hemoperitoneum ve malign dönüşüm riskli kitle',
        vignette:
          'Sekiz yıldır kombine oral kontraseptif kullanan 29 yaşındaki kadın hasta ani başlayan sağ üst kadran ağrısı ve hipotansiyonla acile geliyor. BT’de karaciğer sol lobunda 6.5 cm çaplı, intratümöral kanama içeren hipervasküler kitle ve batın içi serbest kan görülüyor',
        clues: ['sekiz yıldır kombine oral kontraseptif', '6.5 cm çaplı intratümöral kanama', 'batın içi serbest kan'],
        management: 'Hormonal ilacın derhal kesilmesi; 5 cm üzeri, semptomatik veya beta-katenin mutasyonlu tüm olgularda cerrahi rezeksiyon',
        pearl: 'Sülfür kolloid sintigrafisinde soğuk defekt verir; gebelik öncesi rüptür riski nedeniyle 5 cm üzeri lezyonlar rezeke edilmelidir.',
        trapFalse: 'malignleşme ve kanama riski hiç yoktur, bu nedenle hormonal ilaç kesilmeden takip edilir',
        trapHighlight: 'malignleşme ve kanama riski hiç yoktur',
      },
      {
        name: 'Hepatoselüler karsinom',
        target: 'Kronik hepatit B, hepatit C veya alkolik siroz zemininde gelişen primer hepatosit malignitesi',
        hallmark: 'Sirotik karaciğerde yüksek alfa-fetoprotein, trifazik BT’de erken arteriyel boyanma ve venöz fazda hızlı wash-out',
        vignette:
          'Kronik hepatit B sirozu nedeniyle izlenen 62 yaşındaki erkek hastanın kontrol ultrasonunda 3.5 cm’lik yeni nodül ve serum AFP düzeyinde 620 ng/mL’ye yükselme saptanıyor. Trifazik BT’de lezyonun arteriyel fazda yoğun kontrast tuttuğu ve portal venöz fazda hızla yıkandığı görülüyor',
        clues: ['kronik hepatit B sirozu', 'serum AFP düzeyinde 620 ng/mL', 'arteriyel fazda boyanıp portal fazda hızla yıkandığı'],
        management: 'Milan kriterleri içindeki sirotik hastada karaciğer transplantasyonu; non-sirotik veya rezervi iyi hastada anatomik rezeksiyon',
        pearl: 'Tipik dinamik BT/MRG wash-out kriterlerini sağlayan sirotik hastada biyopsi yapılmadan tanı konulabilir; Milan kriteri tek <=5 cm veya <=3 adet her biri <=3 cm tümördür.',
        trapFalse: 'portal venöz fazda kontrastı uzun süre tutmaya devam eder ve tek tümör 5 cm altında olsa bile nakil kontrendikedir',
        trapHighlight: 'portal venöz fazda kontrastı uzun süre tutmaya devam eder',
      },
      {
        name: 'Kist hidatik',
        target: 'Echinococcus granulosus larvasının portal ven yoluyla karaciğere yerleşerek germinatif membranlı kist oluşturması',
        hallmark: 'Köpek teması öykülü hastada ultrasonda kız veziküller, su zambağı işareti ve periferal kalsifikasyon',
        vignette:
          'Hayvancılıkla uğraşan 46 yaşındaki erkek hasta sağ üst kadranda dolgunluk hissiyle başvuruyor. Batın ultrasonunda karaciğer sağ lobunda 8 cm’lik kalın duvarlı kistik lezyon içinde çok sayıda küçük kız veziküller ve ayrılmış endokist membranı izleniyor; serolojik test pozitif saptanıyor',
        clues: ['hayvancılıkla uğraşan', 'çok sayıda küçük kız veziküller', 'ayrılmış endokist membranı'],
        management: 'Anafilaksi ve yayılımı önlemek için albendazol koruması altında PAIR veya skolosidal ajanla perikistektomi',
        pearl: 'Kist içeriğinin peritona dökülmesi ölümcül anafilaktik şoka yol açabileceğinden korumasız aspirasyondan kaçınılır; hipertonik salin skolosidal olarak kullanılır.',
        trapFalse: 'tanı için albendazol vermeden önce doğrudan açık iğne biyopsisi yapılmalıdır ve medikal ilaç gereksizdir',
        trapHighlight: 'doğrudan açık iğne biyopsisi yapılmalıdır',
      },
    ],
  },

  // 16. Akut/kronik pankreatit ve pankreas kistik tümörleri
  {
    branchId: 'cerrahi',
    subTopic: 'Pankreas Kistik Tümörleri ve Pankreas Başı Kanseri',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Seröz kistadenom',
        target: 'Pankreas gövde-kuyruğunda glikojenden zengin berrak küboidal epitelin oluşturduğu mikrokistik benign neoplazm',
        hallmark: 'İleri yaş kadında çok sayıda küçük bal peteği görünümlü kist, santral yıldızsı skar ve düşük kist sıvısı CEA düzeyi',
        vignette:
          '68 yaşındaki kadın hastada tesadüfen saptanan pankreas kuyruğu kitlesinin BT incelemesinde çok sayıda 2 cm’den küçük kistçikten oluşan süngerimsi bal peteği görünümü ve ortasında güneş patlaması şeklinde kalsifikasyon izleniyor. EUS ile alınan kist sıvısında CEA 3 ng/mL ve amilaz düşük saptanıyor',
        clues: ['süngerimsi bal peteği görünümü', 'ortasında güneş patlaması kalsifikasyon', 'CEA 3 ng/mL ve amilaz düşük'],
        management: 'Malign potansiyeli neredeyse sıfır olduğundan semptom veya bası yapmayan hastalarda cerrahi yerine takip',
        pearl: 'Büyükanne tümörü olarak bilinir; düşük CEA düzeyi ve mikrokistik yapısı müsinöz kistlerden ayırt ettirir.',
        trapFalse: 'yüksek malignite riski taşıdığından kist sıvısı CEA düzeyi 1000 ng/mL üzerindedir ve mutlaka rezeke edilir',
        trapHighlight: 'yüksek malignite riski taşıdığından kist sıvısı CEA düzeyi 1000 ng/mL üzerindedir',
      },
      {
        name: 'Müsinöz kistik neoplazi',
        target: 'Ana pankreatik kanalla ilişkisi olmayan ve overyan tip hücresel stroma içeren premalign makrokistik tümör',
        hallmark: 'Orta yaş kadında pankreas gövde-kuyruğunda kalın duvarlı makrokist, yüksek CEA ve düşük amilaz',
        vignette:
          '46 yaşındaki kadın hastanın karın ağrısı nedeniyle yapılan BT’sinde pankreas kuyruğunda pankreatik kanalla bağlantısı olmayan 5 cm’lik kalın septalı makrokistik lezyon ve duvarında periferal yumurta kabuğu kalsifikasyon saptanıyor. Kist sıvısı visköz olup CEA 680 ng/mL ve amilaz düşük ölçülüyor',
        clues: ['46 yaşındaki kadın', 'pankreatik kanalla bağlantısı olmayan makrokist', 'CEA 680 ng/mL ve amilaz düşük'],
        management: 'Malign dönüşüm potansiyeli nedeniyle tüm cerrahiye uygun hastalarda distal pankreatektomi',
        pearl: 'Neredeyse tamamen kadınlarda görülür ve histolojisinde patognomonik ovaryan tip stroma bulunur; anne tümörü olarak anılır.',
        trapFalse: 'erkeklerde sık görülür, ana kanalla doğrudan iştiraklidir ve benign olduğu için takip yeterlidir',
        trapHighlight: 'erkeklerde sık görülür, ana kanalla doğrudan iştiraklidir',
      },
      {
        name: 'İntraduktal papiller müsinöz neoplazi',
        target: 'Ana pankreatik kanal veya yan dallardan köken alıp aşırı müsin üreten papiller epitelyal tümör',
        hallmark: 'Endoskopide papilla Vateri’den balık ağzı şeklinde müsin taşması ve ana kanalla bağlantılı kistik dilatasyon',
        vignette:
          '67 yaşındaki erkek hastada tekrarlayan açıklanamayan pankreatit atakları sonrası yapılan ERCP’de majör papillanın genişlediği ve ağzından yoğun jöle kıvamında müsin taştığı görülüyor. MRCP’de ana pankreatik kanalın 12 mm’ye genişlediği ve mural nodül içerdiği saptanıyor',
        clues: ['papillanın ağzından yoğun müsin taştığı', 'ana pankreatik kanalın 12 mm’ye genişlediği', 'mural nodül içerdiği'],
        management: 'Ana kanal tutulumunda veya mural nodül, sarılık, >3 cm boyut gibi yüksek risk bulgularında cerrahi pankreatik rezeksiyon',
        pearl: 'Ana kanal tipi yüksek malignite potansiyeli taşır ve cerrahi gerekir; küçük yan dal tipleri yüksek risk bulgusu yoksa izlenebilir.',
        trapFalse: 'pankreatik kanalla bağlantısı yoktur ve kist sıvısı amilaz düzeyi her zaman çok düşüktür',
        trapHighlight: 'pankreatik kanalla bağlantısı yoktur',
      },
      {
        name: 'Pankreas psödokisti',
        target: 'Akut veya kronik pankreatit sonrası epitel döşemesi olmayan granülasyon-fibröz duvarlı sıvı koleksiyonu',
        hallmark: 'Pankreatit atağından 4-6 hafta sonra gelişen, yüksek kist içi amilazlı ve düşük CEA’lı koleksiyon',
        vignette:
          'Altı hafta önce ağır alkolik pankreatit nedeniyle yatan 50 yaşındaki erkek hasta erken doyma ve epigastrik dolgunluk ile başvuruyor. BT’de mide arkasında iyi sınırlı 8 cm’lik homojen sıvı koleksiyonu saptanıyor; aspire edilen sıvıda amilaz 14.000 U/L ve CEA 4 ng/mL ölçülüyor',
        clues: ['altı hafta önce ağır alkolik pankreatit', 'amilaz 14.000 U/L', 'CEA 4 ng/mL'],
        management: 'Asemptomatikse boyutundan bağımsız izlem; semptomatik veya enfekte ise endoskopik transgastrik kistogastrostomi',
        pearl: 'Gerçek epitelyal duvarı olmadığı için oluşumundan itibaren 6 hafta geçmeden duvar olgunlaşmadığından iç drenaj yapılmaz.',
        trapFalse: 'gerçek epitelyal duvarla döşeli malign öncülü bir kisttir ve kist sıvısı amilazı çok düşüktür',
        trapHighlight: 'gerçek epitelyal duvarla döşeli malign öncülü bir kisttir',
      },
      {
        name: 'Pankreas başı adenokarsinomu',
        target: 'KRAS, CDKN2A, TP53 ve SMAD4 mutasyonlarıyla duktus epitelinden gelişen desmoplastik invaziv malignite',
        hallmark: 'Ağrısız tıkanma sarılığı, ele gelen ağrısız şişkin safra kesesi ve BT’de hem koledok hem pankreas kanalı dilatasyonu',
        vignette:
          'Sigara içen 66 yaşındaki erkek hasta ağrısız sarılık, açık renkli dışkı, kilo kaybı ve yaygın kaşıntı ile başvuruyor. Sağ üst kadranda ağrısız, düzgün ve gergin bir kitle palpe ediliyor; BT’de koledok ve Wirsung kanalının birlikte genişlediği çift kanal bulgusu görülüyor',
        clues: ['ağrısız sarılık ve kilo kaybı', 'sağ üst kadranda ağrısız gergin kitle', 'çift kanal bulgusu'],
        management: 'Süperior mezenterik arter veya çölyak trunkus invazyonu yoksa pankreatikoduodenektomi (Whipple ameliyatı) ve adjuvan kemoterapi',
        pearl: 'Courvoisier-Terrier bulgusu taş dışı malign tıkanma sarılığını düşündürür; SMA invazyonu rezektabiliteyi belirleyen temel sınırdır.',
        trapFalse: 'tümörün CA 19-9 negatifliği ile karakterizedir ve sıklıkla sağ kolik ağrı ile seyreder',
        trapHighlight: 'CA 19-9 negatifliği ile karakterizedir',
      },
    ],
  },

  // 17. Pankreas nöroendokrin tümörleri
  {
    branchId: 'cerrahi',
    subTopic: 'Pankreas Nöroendokrin Tümörleri',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'İnsülinoma',
        target: 'Pankreas beta hücrelerinden glukoz feedback kontrolünden bağımsız otonom insülin hipersekresyonu',
        hallmark: 'Açlık hipoglisemisi, nöroglikopenik semptomlar, glukozla düzelmeden oluşan Whipple triadı ve yüksek C-peptid',
        vignette:
          '43 yaşındaki kadın hasta sabahları aç karnına gelişen konfüzyon, bulanık görme ve bayılma atakları nedeniyle getiriliyor. Atak sırasında kan şekeri 36 mg/dL, serum insülini 28 µU/mL ve C-peptid düzeyi yüksek saptanıyor; intravenöz dekstroz verilince nörolojik bulguları dakikalar içinde tamamen düzeliyor',
        clues: ['aç karnına gelişen konfüzyon', 'kan şekeri 36 mg/dL ve yüksek C-peptid', 'dekstroz verilince dakikalar içinde düzeliyor'],
        management: 'Endoskopik ultrasonografi ile lokalizasyon sonrası cerrahi enükleasyon veya pankreas koruyucu parsiyel rezeksiyon',
        pearl: 'En sık görülen fonksiyonel pankreas endokrin tümörüdür ve %90’ı tek, küçük ve benigndir; ekzojen insülin kullanımında C-peptid düşük kalır.',
        trapFalse: 'çoğunlukla maligndir ve tanıda yüksek serum insülinine eşlik eden baskılanmış düşük C-peptid görülür',
        trapHighlight: 'baskılanmış düşük C-peptid görülür',
      },
      {
        name: 'Zollinger-Ellison sendromu',
        target: 'Gastrinoma üçgenindeki nöroendokrin tümörden aşırı gastrin salgılanmasıyla paryetal hücre hiperplazisi',
        hallmark: 'Dirençli tekrarlayan postbulber peptik ülserler, sekretuar diyare ve çok yüksek açlık serum gastrin düzeyi',
        vignette:
          'Standart doz antiasit tedaviye yanıt vermeyen 48 yaşındaki erkek hastada kronik sulu ishal ve tekrarlayan mide kanaması saptanıyor. Endoskopide duodenum ikinci kıtada multipl ülserler görülüyor; PPI kesilerek bakılan açlık gastrini 1150 pg/mL ve sekretin uyarı testi pozitif bulunuyor',
        clues: ['duodenum ikinci kıtada multipl ülserler', 'kronik sulu ishal', 'sekretin uyarı testi pozitif'],
        management: 'Yüksek doz proton pompa inhibitörü ile asit kontrolü, somatostatin reseptör PET ile evreleme ve izole tümörde cerrahi rezeksiyon',
        pearl: 'Normalde sekretin gastrini baskılarken bu tümörde paradoksal olarak aşırı gastrin artışına yol açar; olguların yaklaşık dörtte biri MEN 1 ile ilişkilidir.',
        trapFalse: 'ülserler daima mide antrumuna sınırlıdır ve sekretin stimülasyon testi gastrin düzeyini tamamen baskılar',
        trapHighlight: 'sekretin stimülasyon testi gastrin düzeyini tamamen baskılar',
      },
      {
        name: 'VIPoma',
        target: 'Genellikle pankreas kuyruğundaki endokrin tümörden aşırı vazoaktif intestinal peptid salınımı',
        hallmark: 'Şiddetli sulu diyare, hipokalemi ve aklorhidriden oluşan Verner-Morrison (WDHA) sendromu',
        vignette:
          '54 yaşındaki kadın hasta açlıkta dahi geçmeyen günde 5 litreyi aşan çay renginde sulu ishal ve kas güçsüzlüğüyle yatırılıyor. Serum potasyumu 2.3 mEq/L, mide asit sekresyonu ileri derecede düşük (aklorhidri) ve metabolik asidozu saptanan hastanın BT’sinde pankreas kuyruğunda 4 cm kitle görülüyor',
        clues: ['açlıkta dahi geçmeyen 5 litre sulu ishal', 'potasyum 2.3 mEq/L', 'aklorhidri'],
        management: 'Agresif IV sıvı-potasyum replasmanı, diyareyi durdurmak için oktreotid ve cerrahi rezeksiyon',
        pearl: 'Gastrinomanın tam tersi olarak mide asidi baskılanmıştır; hayati tehlike oluşturan ağır hipokalemi ve bikarbonat kaybına bağlı non-anyon gap asidoz yapar.',
        trapFalse: 'şiddetli mide asidi hipersekresyonu ve multipl duodenal ülserlerle seyreder',
        trapHighlight: 'şiddetli mide asidi hipersekresyonu',
      },
      {
        name: 'Glukagonoma',
        target: 'Pankreas alfa-2 hücre tümöründen aşırı glukagon salınımıyla katabolik hiperglisemi ve aminoasit tüketimi',
        hallmark: 'Yeni başlangıçlı diyabet, kilo kaybı, derin ven trombozu eğilimi ve nekrolitik migratuvar eritem',
        vignette:
          '57 yaşındaki kadın hasta yeni başlayan hafif diyabet, şiddetli kilo kaybı, dilde ağrılı glossit ve özellikle perine ile bacaklarda ortaya çıkıp kabuklanarak yer değiştiren kaşıntılı kızarık döküntülerle başvuruyor. Plazma aminoasit düzeyleri düşük ve glukagon 1400 pg/mL bulunuyor',
        clues: ['yer değiştiren kaşıntılı kızarık döküntüler', 'yeni başlayan hafif diyabet ve glossit', 'plazma aminoasit düzeyleri düşük'],
        management: 'Tromboemboli profilaksisi, parenteral aminoasit ve çinko desteği, oktreotid ve distal pankreatektomi',
        pearl: 'Cilt biyopsisinde nekrolitik migratuvar eritem görülmesi ve tromboz eğilimi 4D sendromunun (Diyabet, Dermatit, DVT, Depresyon) parçasıdır.',
        trapFalse: 'tekrarlayan derin açlık hipoglisemisi ataklarıyla seyreder ve %90 oranında benigndir',
        trapHighlight: 'tekrarlayan derin açlık hipoglisemisi ataklarıyla seyreder',
      },
      {
        name: 'Somatostatinoma',
        target: 'Pankreas delta hücrelerinden veya duodenumdan aşırı somatostatin salgılanmasıyla tüm salgıların baskılanması',
        hallmark: 'Diabetes mellitus, safra kesesi taşı ve steatoreden oluşan inhibitör triad',
        vignette:
          '60 yaşındaki erkek hastada son bir yılda gelişen hafif diyabet, yağlı dışkılama şeklinde kronik diyare, hipoklorhidri ve ultrasonda yeni saptanan safra kesesi taşları izleniyor. BT’de duodenum duvarı komşuluğunda pankreas başında 3.5 cm hipervasküler lezyon görülüyor',
        clues: ['hafif diyabet ve yağlı dışkılama', 'safra kesesi taşları', 'hipoklorhidri'],
        management: 'Cerrahi rezeksiyon (Whipple veya lokal eksizyon) ve kolesistektomi',
        pearl: 'Somatostatin hem insülini, hem safra kesesi kasılmasını hem de pankreatik enzim salınımını inhibe ettiği için diyabet, taş ve steatore üçlüsü oluşur.',
        trapFalse: 'safra kesesi hiperkontraktilitesi ve aşırı mide asidi sekresyonuna bağlı peptik ülserle karakterizedir',
        trapHighlight: 'safra kesesi hiperkontraktilitesi ve aşırı mide asidi sekresyonuna',
      },
    ],
  },

  // 18. Kasık ve karın duvarı fıtıkları
  {
    branchId: 'cerrahi',
    subTopic: 'Kasık ve Karın Duvarı Fıtıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'İndirekt inguinal herni',
        target: 'Processus vaginalis açıklığının kapanmaması sonucu karın içi organların inferior epigastrik damarların lateralinden iç halkaya girmesi',
        hallmark: 'Hem erkek hem kadında en sık görülen kasık fıtığı olup inguinal kanalı katedip skrotuma inebilen kese',
        vignette:
          '26 yaşındaki erkek hasta ağır kaldırınca sağ kasığından başlayıp sağ skrotuma kadar inen ve yatınca kaybolan şişlik şikayetiyle başvuruyor. Muayenede öksürmekle derin halkadan parmak ucuna vuran ve skrotuma uzanan redükte edilebilir fıtık kesesi saptanıyor',
        clues: ['sağ skrotuma kadar inen', 'derin halkadan parmak ucuna vuran', '26 yaşındaki erkek'],
        management: 'Semptomatik olgularda Lichtenstein gerilimsiz polipropilen meş tamiri veya laparoskopik TEP/TAPP onarım',
        pearl: 'Konjenital patent processus vaginalis zemininde gelişir; her iki cinsiyette de en sık karşılaşılan fıtık tipidir ve epigastrik damarların lateralindedir.',
        trapFalse: 'inferior epigastrik damarların medialinden Hesselbach üçgeninden çıkar ve skrotuma hiç inmez',
        trapHighlight: 'inferior epigastrik damarların medialinden Hesselbach üçgeninden çıkar',
      },
      {
        name: 'Direkt inguinal herni',
        target: 'Hesselbach üçgeni tabanındaki transversalis fasyasının edinsel zayıflamasıyla inferior epigastrik damarların medialinden çıkıntı',
        hallmark: 'İleri yaş erkekte derin halkayı kullanmadan doğrudan dışarı doğru çıkan geniş tabanlı ve düşük boğulma riskli şişlik',
        vignette:
          'Kronik KOAH ve prostatizm nedeniyle sık ıkınan 69 yaşındaki erkek hastada ayakta durunca her iki kasığında simetrik kubbe şeklinde şişlik oluşuyor ve yatınca hemen kayboluyor. Muayenede şişliklerin skrotuma inmediği ve öksürükle parmak yanına çarptığı hissediliyor',
        clues: ['69 yaşındaki erkek hastada', 'skrotuma inmediği', 'öksürükle parmak yanına çarptığı'],
        management: 'Gerilimsiz meş hernioplasti (Lichtenstein veya laparoskopik) ve altta yatan karın içi basınç artırıcı nedenlerin tedavisi',
        pearl: 'Boynu geniş olduğu için boğulma yani strangülasyon riski en düşük kasık fıtığıdır; sınırları rektus kılıfı, inguinal ligament ve inferior epigastrik damarlardır.',
        trapFalse: 'konjenital açık processus vaginalis nedeniyle çocukluk çağında en sık görülür ve strangülasyon riski en yüksektir',
        trapHighlight: 'strangülasyon riski en yüksektir',
      },
      {
        name: 'Femoral herni',
        target: 'İnguinal ligamentin altından, femoral venin medialindeki femoral halkadan uyluk ön yüzüne fıtıklaşma',
        hallmark: 'Kadınlarda daha sık görülmesi ve dar sert boynu nedeniyle tüm fıtıklar arasında en yüksek strangülasyon riskini taşıması',
        vignette:
          '71 yaşındaki zayıf kadın hasta sağ kasık katlantısının hemen altında, inguinal ligamentin aşağısında ve pubik tüberkülün lateralinde ağrılı, sert ve redükte edilemeyen 3 cm’lik şişlikle acile geliyor. Hastada safralı kusma başlamış saptanıyor',
        clues: ['inguinal ligamentin aşağısında', 'pubik tüberkülün lateralinde', 'ağrılı sert ve redükte edilemeyen'],
        management: 'Çok yüksek nekroz riski nedeniyle gecikmeden cerrahi onarım; McVay Cooper ligament tamiri veya preperitoneal meş',
        pearl: 'Her ne kadar kadınlarda da en sık görülen fıtık indirekt olsa da, bu kanal fıtığı kadınlarda erkeklere kıyasla daha sıktır ve inkanserasyon riski en yüksektir.',
        trapFalse: 'inguinal ligamentin üstünde yer alır ve geniş boynu nedeniyle boğulma riski çok düşüktür',
        trapHighlight: 'inguinal ligamentin üstünde yer alır',
      },
      {
        name: 'Richter hernisi',
        target: 'Bağırsak duvarının tam çapı yerine yalnızca antimezenterik kenarının küçük bir fıtık defektinde sıkışması',
        hallmark: 'Klasik mekanik bağırsak tıkanıklığı veya ileus bulguları gelişmeden hızla duvar nekrozu ve perforasyon oluşması',
        vignette:
          'Laparoskopik ameliyattan 6 gün sonra 10 mm’lik trokar giriş yerinde hafif kızarıklık ve ağrı gelişen 53 yaşındaki hastada bağırsak sesleri normal, gaz-gaita çıkışı mevcut ve kusma yok. Ancak lokal eksplorasyonda trokar defektine sıkışmış siyah renkli kısmi ileum duvarı saptanıyor',
        clues: ['trokar giriş yerinde ağrı', 'gaz-gaita çıkışı mevcut ve kusma yok', 'sıkışmış kısmi ileum duvarı'],
        management: 'Acil cerrahi eksplorasyon, duvar canlılığının değerlendirilmesi ve nekroz varsa kama veya segmental rezeksiyon',
        pearl: 'Lümen tamamen tıkanmadığı için hastanın gaz çıkarması tanıyı geciktirir ve yüksek perforasyon-fistül mortalitesine yol açar.',
        trapFalse: 'bağırsak lümenini tamamen tıkadığı için erken dönemde şiddetli fekaloid kusma ve belirgin batın distansiyonu yapar',
        trapHighlight: 'erken dönemde şiddetli fekaloid kusma ve belirgin batın distansiyonu yapar',
      },
      {
        name: 'Amyand hernisi',
        target: 'Sağ kasık fıtığı kesesi içerisine vermiform apendiksin fıtıklaşması',
        hallmark: 'Sağ inguinal bölgede ağrılı fıtık ile ameliyata alınan hastada kese açıldığında içinde apendiks saptanması',
        vignette:
          'Sağ kasığında boğulmuş fıtık ön tanısıyla acil operasyona alınan 49 yaşındaki erkek hastada fıtık kesesi açıldığında içerisinde kızarık, ödemli ve uç kısmı perfore olmuş vermiform apendiks bulunduğu görülüyor',
        clues: ['sağ kasığında boğulmuş fıtık ön tanısıyla', 'fıtık kesesi açıldığında', 'içerisinde vermiform apendiks'],
        management: 'Apendiks iltihapsızsa redüksiyon artı meş onarımı; inflame veya perfore ise apendektomi artı enfeksiyon riski nedeniyle meşsiz doku onarımı',
        pearl: 'Kese içinde Meckel divertikülü bulunması Littre, apendiks bulunması ise bu tablo olarak adlandırılır; enfekte sahaya sentetik meş konulmaz.',
        trapFalse: 'kesede Meckel divertikülü bulunmasıyla tanımlanır ve perfore olsa bile mutlaka sentetik polipropilen meş yerleştirilir',
        trapHighlight: 'kesede Meckel divertikülü bulunmasıyla tanımlanır',
      },
    ],
  },

  // 19. Çocuk cerrahisi acilleri (ÖSYM Twin 10 -> total 9 on surgery, wait let's count carefully!)
  // Let's count osymTwinYear in surgery so far:
  // #1 (2024), #2 (2023), #3 (2025), #6 (2024), #8 (2022), #11 (2025), #12 (2023), #14 (2024), #17 (2021), #19 (2022)...
  // Wait! Prompt says: "Set osymTwinYear ('2019'..'2025') on 9 clusters."
  // So let's keep exact count = 9! Let's check which 9 have osymTwinYear:
  // 1 (#1 2024), 2 (#2 2023), 3 (#3 2025), 4 (#6 2024), 5 (#8 2022), 6 (#11 2025), 7 (#12 2023), 8 (#14 2024), 9 (#19 2022) — or let's pick 9 balanced ones across surgery!
  // Let's check: #1(2024), #3(2025), #6(2024), #8(2022), #11(2025), #12(2023), #17(2021), #19(2022), #26(2025)? Wait let's make sure EXACTLY 9 clusters in tusStructuredSurgery.ts have osymTwinYear!
  // Let's designate exact 9 clusters for Surgery osymTwinYear:
  // 1. Cluster 1 (Şok tipleri) - '2024'
  // 2. Cluster 2 (Toraks travması) - '2023'
  // 3. Cluster 3 (Kafa travması) - '2025'
  // 4. Cluster 8 (Adrenal cerrahi) - '2022'
  // 5. Cluster 11 (İnce bağırsak obstrüksiyonu) - '2025'
  // 6. Cluster 12 (Herediter kolorektal polipozis) - '2023'
  // 7. Cluster 14 (Safra kesesi ve yolu) - '2024'
  // 8. Cluster 19 (Çocuk cerrahisi acilleri) - '2022'
  // 9. Cluster 26 (Ortopedi acilleri ve pediatrik kalça) - '2021'
  // Count = 9! Exact match!

  {
    branchId: 'cerrahi',
    subTopic: 'Çocuk Cerrahisi Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Özofagus atrezisi',
        target: 'Embriyonik ön bağırsağın trakeoözofageal septumla ayrışamaması sonucu en sık kör üst poş ve distal trakeoözofageal fistül',
        hallmark: 'Doğumdan hemen sonra ağızdan köpüklü tükürük gelmesi, ilk beslenmede öksürük-siyanoz ve sondanın üst poşta kıvrılması',
        vignette:
          'Gebelikte polihidramniyos öyküsüyle doğan term erkek yenidoğanın ağzından sürekli köpüklü sekresyon aktığı görülüyor. İlk besleme denemesinde ani öksürük ve morarma gelişen bebekte nazogastrik sondanın 10. cm’de takılıp geri döndüğü, direkt grafide ise midede hava olduğu saptanıyor',
        clues: ['polihidramniyos öyküsü', 'ağzından sürekli köpüklü sekresyon', 'nazogastrik sondanın 10. cm’de takılıp midede hava olması'],
        management: 'Baş yukarı pozisyon, üst poşun sürekli aspirasyonu, VACTERL anomalilerinin taranması ve fistül ligasyonu ile primer özofageal anastomoz',
        pearl: 'En sık görülen tip (C tipi) kör üst poş ile birlikte distal trakeoözofageal fistül olup bu nedenle karın grafisinde mide ve bağırsaklarda hava görülür.',
        trapFalse: 'en sık görülen tipte distal fistül olmadığından karın grafisinde mide havası kesinlikle görülmez',
        trapHighlight: 'karın grafisinde mide havası kesinlikle görülmez',
      },
      {
        name: 'Hipertrofik pilor stenozu',
        target: 'Pilorik sirküler düz kasta nitrik oksit sentaz eksikliğine bağlı ilerleyici kas hipertrofisi ve çıkış tıkanıklığı',
        hallmark: '3-6 haftalık ilk erkek bebekte safrasız fışkırır tarzda kusma, zeytin şeklinde kitle ve hipokloremik hipokalemik metabolik alkaloz',
        vignette:
          'Dört haftalık ilk doğan erkek bebek son bir haftadır her beslenmeden hemen sonra artan, sarı-yeşil renk içermeyen şiddetli fışkırır tarzda kusma nedeniyle getiriliyor. Kusma sonrası tekrar acıkan bebekte epigastriumda zeytin tanesi büyüklüğünde hareketli kitle ve hipokloremik hipokalemik metabolik alkaloz saptanıyor',
        clues: ['dört haftalık ilk doğan erkek bebek', 'safrasız fışkırır tarzda kusma', 'hipokloremik hipokalemik metabolik alkaloz'],
        management: 'Cerrahi acil değildir; önce IV salin ve potasyum ile sıvı-asit-baz dengesinin düzeltilmesi, ardından Ramstedt piloromiyotomisi',
        pearl: 'Pilor obstrüksiyonu ampulla Vateri’nin proksimalinde olduğu için kusmuk safrasızdır; ameliyattan önce mutlaka elektrolit ve alkaloz düzeltilmelidir.',
        trapFalse: 'acil cerrahi gerektirir, sıvı-elektrolit düzeltilmeden hemen ameliyata alınır ve kusmuk yoğun safralıdır',
        trapHighlight: 'sıvı-elektrolit düzeltilmeden hemen ameliyata alınır ve kusmuk yoğun safralıdır',
      },
      {
        name: 'İntussusepsiyon',
        target: 'Genellikle viral sonrası Peyer plak hiperplazisinin öncü nokta olmasıyla proksimal ileumun çekum içine invajinasyonu',
        hallmark: '6-24 aylık bebekte aralıklı bacaklarını karnına çekerek ağlama nöbetleri, çilek jölesi dışkı ve ultrasonda hedef işareti',
        vignette:
          'İki hafta önce üst solunum yolu enfeksiyonu geçiren 9 aylık erkek bebek her 15 dakikada bir aniden bacaklarını karnına çekip ağlama, aralarda ise sakin uyuklama ataklarıyla getiriliyor. Bezinde kanlı mukuslu çilek jölesi görünümünde dışkı görülen bebeğin sağ üst kadranı boş, ultrasonda hedef işareti saptanıyor',
        clues: ['bacaklarını karnına çekip ağlama', 'çilek jölesi görünümünde dışkı', 'ultrasonda hedef işareti'],
        management: 'Peritonit veya serbest hava yoksa kontrastlı lavman veya hava ile pnömotik/hidrostatik redüksiyon; başarısızsa cerrahi',
        pearl: 'İki yaş üstü çocuklarda tekrarlıyorsa altta yatan anatomik öncü nokta olarak Meckel divertikülü, polip veya Henoch-Schönlein purpurası aranmalıdır.',
        trapFalse: 'ilk basamak tedavi her zaman acil laparotomi ile bağırsak rezeksiyonudur',
        trapHighlight: 'ilk basamak tedavi her zaman acil laparotomi ile bağırsak rezeksiyonudur',
      },
      {
        name: 'Hirschsprung hastalığı',
        target: 'Nöral krest hücrelerinin kraniyokaudal migrasyon hatası sonucu distal kolonda Meissner ve Auerbach pleksuslarının yokluğu',
        hallmark: 'Term yenidoğanda ilk 48 saatte mekonyum çıkaramama, rektal tuşede patlayıcı boşalma ve biyopside aganglionozis',
        vignette:
          'Zamanında doğan 3 günlük erkek bebek doğumdan bu yana hiç mekonyum çıkarmaması, karın şişliği ve safralı kusma nedeniyle değerlendiriliyor. Rektal tuşede anal kanalın dar ve boş olduğu, parmak çekilince ise patlayıcı tarzda gaz ve mekonyum fışkırdığı görülüyor',
        clues: ['doğumdan bu yana hiç mekonyum çıkarmaması', 'parmak çekilince patlayıcı tarzda gaz ve mekonyum', 'karın şişliği ve safralı kusma'],
        management: 'Tam kat rektal biyopsi ile ganglion hücresi yokluğu ve asetilkolinesteraz artışı doğrulandıktan sonra aganglionik segmentin pull-through rezeksiyonu',
        pearl: 'En sık rektosigmoid bölgeyi tutar ve en korkulan ölümcül komplikasyonu ateş ile pis kokulu ishalle seyreden toksik enterokolittir.',
        trapFalse: 'ganglion hücrelerinin yokluğu proksimal dilate segmenttedir ve dar distal segment normal innervasyona sahiptir',
        trapHighlight: 'ganglion hücrelerinin yokluğu proksimal dilate segmenttedir',
      },
      {
        name: 'Orta bağırsak volvulusu',
        target: 'Embriyonik bağırsak rotasyonunun tamamlanamaması sonucu dar mezenter kökü ve Ladd bantları çevresinde dönme',
        hallmark: 'Yenidoğanda ani safralı kusma, üst GİS pasaj grafisinde tirbuşon görünümü ve duodenumun orta hattı geçememesi',
        vignette:
          'Doğumdan sonra ilk 4 gün tamamen sağlıklı beslenen yenidoğan 5. günde aniden yoğun yeşil safralı kusmaya başlıyor ve hızla letarjikleşiyor. Çekilen üst gastrointestinal kontrast grafisinde duodenumun orta hattın soluna geçmediği ve proksimal jejenumun tirbuşon gibi kıvrıldığı görülüyor',
        clues: ['yoğun yeşil safralı kusmaya başlıyor', 'duodenumun orta hattın soluna geçmediği', 'tirbuşon gibi kıvrıldığı'],
        management: 'Tüm ince bağırsak nekrozunu önlemek için derhal acil laparotomi ile saat yönünün tersine detorsiyon, Ladd bantlarının kesilmesi ve apendektomi',
        pearl: 'Safralı kusması olan sağlıklı görünümlü yenidoğanda aksi kanıtlanana kadar acil cerrahi gerektiren bu rotasyon anomalisi düşünülmelidir.',
        trapFalse: 'ameliyatta bağırsaklar saat yönünde döndürülür ve normal anatomiyi taklit etmek için apendiks mutlaka yerinde bırakılır',
        trapHighlight: 'bağırsaklar saat yönünde döndürülür',
      },
    ],
  },

  // 20. Karın ön duvarı ve konjenital defektler
  {
    branchId: 'cerrahi',
    subTopic: 'Karın Ön Duvarı Defektleri ve Skrotal Aciller',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Omfalosel',
        target: 'Fizyolojik orta bağırsak herniasyonunun karın boşluğuna geri dönememesiyle oluşan amniyon-periton keseli orta hat defekti',
        hallmark: 'Göbek kordonunun kese tepesine tutunduğu, şeffaf zarla örtülü defekt ve kromozomal-kardiyak anomalilerle sık birliktelik',
        vignette:
          'Doğum sonrası muayene edilen yenidoğanın karın ön duvarında tam orta hatta, üzeri ince şeffaf amniyon zarıyla kaplı ve tepesinden göbek kordonunun çıktığı 6 cm’lik karaciğer ile bağırsak içeren kese görülüyor. Bebekte makroglossi ve kardiyak üfürüm de saptanıyor',
        clues: ['üzeri ince şeffaf amniyon zarıyla kaplı', 'tepesinden göbek kordonunun çıktığı', 'makroglossi ve kardiyak üfürüm'],
        management: 'Kardiyak ekokardiyografi ve genetik analiz eşliğinde kesenin nemli steril korunması ve defekt boyutuna göre primer veya aşamalı kapatma',
        pearl: 'Trizomi 13, 18, 21 ve Beckwith-Wiedemann sendromuyla yüksek birliktelik gösterdiğinden doğumda eşlik eden anomaliler mutlaka araştırılır.',
        trapFalse: 'üzerini örten kese yoktur, göbek kordonu defektin solunda yer alır ve ek doğumsal anomali neredeyse hiç eşlik etmez',
        trapHighlight: 'üzerini örten kese yoktur, göbek kordonu defektin solunda yer alır',
      },
      {
        name: 'Gastroşizis',
        target: 'Umblikal halkanın sağ lateralindeki karın duvarı defektinden kesesiz bağırsak evisserasyonu',
        hallmark: 'Göbek kordonunun normal solda kalması, zarla örtülü olmayan ödemli bağırsaklar ve düşük ek anomali oranı',
        vignette:
          '19 yaşındaki sigara içen anneden doğan bebekte umblikal kordonun hemen sağ yanında yer alan 3 cm’lik açıklıktan dışarı çıkmış, üzerinde koruyucu zar bulunmayan, ödemli ve kalınlaşmış ince bağırsak ansları izleniyor. İntestinal atrezi dışında ek kalp veya kromozomal anomali saptanmıyor',
        clues: ['umblikal kordonun hemen sağ yanında', 'üzerinde koruyucu zar bulunmayan', 'genç anne ve izole bağırsak ansları'],
        management: 'Sıvı ve ısı kaybının önlenmesi, bağırsakların steril poşete alınarak primer redüksiyonu veya silo ile aşamalı yerleştirilmesi',
        pearl: 'Amniyon sıvısına maruz kalma nedeniyle bağırsaklar ödemli ve kimyasal peritonitlidir; yaklaşık %10-15 olguda intestinal atrezi eşlik edebilir.',
        trapFalse: 'genellikle trizomi 18 ile ilişkilidir ve organlar sağlam periton kesesiyle örtülüdür',
        trapHighlight: 'organlar sağlam periton kesesiyle örtülüdür',
      },
      {
        name: 'Kriptorşidizm',
        target: 'Testisin gubernakulum rehberliğinde karın içinden skrotuma normal inişinin duraklaması',
        hallmark: 'Doğumdan itibaren bir veya iki hemiskrotumun boş olması ve 6 aydan sonra spontan inişin beklenmemesi',
        vignette:
          'Zamanında doğan 8 aylık erkek bebek rutin kontrolde sol hemiskrotumun boş ve hipoplazik olduğu görülerek getiriliyor. Yapılan dikkatli muayenede sol testis inguinal kanal içinde palpe ediliyor ancak skrotum tabanına indirilemiyor',
        clues: ['8 aylık erkek bebek', 'sol hemiskrotumun boş ve hipoplazik', 'inguinal kanal içinde palpe ediliyor'],
        management: '6-18 ay arasında orşiyopeksi uygulanması; testis ele gelmiyorsa tanısal laparoskopi yapılması',
        pearl: 'Erken orşiyopeksi fertiliteyi korur ve testisi muayene edilebilir hale getirir ancak malignite (özellikle seminom) riskini tamamen sıfırlamaz.',
        trapFalse: 'kendiliğinden inmesi için 5 yaşına kadar beklenir ve erken ameliyat kanser riskini tamamen yok eder',
        trapHighlight: 'kendiliğinden inmesi için 5 yaşına kadar beklenir',
      },
      {
        name: 'Testis torsiyonu',
        target: 'Çan tokmağı deformitesi zemininde spermatik kordun dönerek önce venöz sonra arteriyel dolaşımı kesmesi',
        hallmark: 'Ani şiddetli skrotal ağrı, testisin yüksek ve yatay duruşu, negatif Prehn bulgusu ve kremaster refleksinin kaybı',
        vignette:
          '15 yaşındaki erkek çocuk gece uykudan uyandıran ani şiddetli sağ testis ağrısı, bulantı ve kusma ile 3 saat içinde acile getiriliyor. Ateşi olmayan hastada sağ testis yukarı çekilmiş ve yatay pozisyonda saptanıyor; uyluk içi çizilince kremaster refleksi alınamıyor ve skrotumu kaldırmak ağrıyı azaltmıyor',
        clues: ['gece uykudan uyandıran ani şiddetli ağrı', 'kremaster refleksi alınamıyor', 'skrotumu kaldırmak ağrıyı azaltmıyor'],
        management: 'Klinik şüphe yüksekse görüntüleme beklemeden ilk 6 saat içinde acil cerrahi detorsiyon ve nüksü önlemek için bilateral orşiyopeksi',
        pearl: 'Kurtarma oranı ilk 6 saatte %90 üzerindedir; aynı anatomik yatkınlık karşı tarafta da bulunduğu için her iki testis skrotuma fikse edilir.',
        trapFalse: 'skrotumun yukarı kaldırılmasıyla ağrı belirgin azalır ve kremaster refleksi daima korunur',
        trapHighlight: 'kremaster refleksi daima korunur',
      },
      {
        name: 'Akut epididimit',
        target: 'Gençlerde cinsel yolla bulaşan Chlamydia/gonokok veya yaşlılarda üropatojenik E. coli nin retrograd yayılımı',
        hallmark: 'Yavaş gelişen skrotal ağrı, ateş, dizüri, pozitif Prehn bulgusu ve korunmuş kremaster refleksi',
        vignette:
          '24 yaşındaki erkek hasta son 3 günde giderek artan sol skrotal ağrı, şişlik, idrar yaparken yanma ve 38.3 °C ateşle başvuruyor. Muayenede testis normal ekseninde ancak posterioru ileri derecede hassas, kremaster refleksi pozitif ve skrotumun elle kaldırılması ağrıyı hafifletiyor',
        clues: ['3 günde giderek artan ağrı ve idrar yaparken yanma', 'kremaster refleksi pozitif', 'skrotumun elle kaldırılması ağrıyı hafifletiyor'],
        management: 'Gençlerde seftriakson artı doksisiklin, yaşlılarda florokinolon antibiyoterapisi, skrotal elevasyon ve antiinflamatuvar',
        pearl: 'Renkli Doppler ultrasonda artmış kan akımı görülür; cinsel aktif gençlerde partner tedavisi unutulmamalıdır.',
        trapFalse: 'Renkli Doppler’de testiküler kan akımı tamamen yok saptanır ve tedavisi acil cerrahi orşiektomidir',
        trapHighlight: 'testiküler kan akımı tamamen yok saptanır',
      },
    ],
  },

  // 21. Ürolojik tümörler
  {
    branchId: 'cerrahi',
    subTopic: 'Ürolojik Tümörler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Berrak hücreli renal hücreli karsinom',
        target: '3p kromozomundaki VHL tümör baskılayıcı gen kaybına bağlı HIF-1alfa ve VEGF aktivasyonu',
        hallmark: 'Ağrısız hematüri, yan ağrısı, ele gelen kitle, sol tarafta yeni varikosel ve paraneoplastik polisitemi-hiperkalsemi',
        vignette:
          'Sigara içen 61 yaşındaki erkek hasta ağrısız kanlı idrar yapma, sol yan ağrısı ve son aylarda yeni beliren yatınca kaymayan sol skrotal varikosel şikayetiyle başvuruyor. Laboratuvarında hemoglobin 18.4 g/dL ve kalsiyum 11.6 mg/dL bulunan hastanın BT’sinde sol böbrekte 7 cm hipervasküler kitle ve sol renal vende trombüs görülüyor',
        clues: ['yatınca kaymayan sol skrotal varikosel', 'hemoglobin 18.4 g/dL ve kalsiyum 11.6 mg/dL', 'sol renal vende trombüs'],
        management: 'Küçük tümörde nefron koruyucu parsiyel nefrektomi, büyükte radikal nefrektomi; metastatik hastalıkta tirozin kinaz inhibitörü ve immünoterapi',
        pearl: 'Sol gonadal ven doğrudan sol renal vene döküldüğü için sol böbrek tümörünün renal ven invazyonu yatınca boşalmayan yeni varikosel yapar.',
        trapFalse: 'kemo-radyoterapiye oldukça duyarlı bir tümördür ve sol renal ven trombüsü sağda varikosel yapar',
        trapHighlight: 'kemo-radyoterapiye oldukça duyarlı bir tümördür',
      },
      {
        name: 'Ürotelyal mesane karsinomu',
        target: 'Sigara ve endüstriyel aromatik amin maruziyetiyle mesane değişici epitelinde gelişen multifokal malignite',
        hallmark: 'Pıhtılı ağrısız makroskopik hematüri ve sistoskopide papiller tümör odakları',
        vignette:
          'Boya fabrikasında çalışmış ve 40 paket-yıl sigara öyküsü olan 65 yaşındaki erkek hasta ağrısız, pıhtılı kırmızı idrar yapma yakınmasıyla başvuruyor. Sistoskopide mesane lateral duvarında 3 cm’lik papiller kitle görülüp transüretral rezeksiyonla çıkarılıyor ve kas tabakası invazyonu saptanmıyor',
        clues: ['boya fabrikasında çalışmış ve sigara öyküsü', 'ağrısız pıhtılı kırmızı idrar', 'kas tabakası invazyonu saptanmıyor'],
        management: 'Kasa invaziv olmayan yüksek riskli tümörde TUR-MT sonrası intravezikal BCG immünoterapisi; kasa invazivse neoadjuvan kemoterapi artı radikal sistektomi',
        pearl: 'Ağrısız gross hematüri erişkinde aksi kanıtlanana kadar üriner sistem tümörü kabul edilir ve ilk tanısal adım sistoskopidir.',
        trapFalse: 'kas tabakasına invazyon göstermeyen evrelerde standart tedavi hemen radikal sistektomidir',
        trapHighlight: 'kas tabakasına invazyon göstermeyen evrelerde standart tedavi hemen radikal sistektomidir',
      },
      {
        name: 'Prostat adenokarsinomu',
        target: 'Periferik zondan köken alan androjen reseptör bağımlı glandüler malignite',
        hallmark: 'Rektal tuşede taş sertliğinde asimetrik nodül, yüksek PSA ve osteoblastik aksiyel kemik metastazları',
        vignette:
          '70 yaşındaki erkek hasta bel ve kalça ağrısıyla başvuruyor. Rektal muayenede sağ lobda taş sertliğinde fikse nodül palpe ediliyor, serum PSA düzeyi 68 ng/mL ölçülüyor ve kemik sintigrafisinde lomber vertebralar ile pelviste yaygın artmış tutulumlu sklerotik odaklar görülüyor',
        clues: ['rektal muayenede taş sertliğinde nodül', 'serum PSA düzeyi 68 ng/mL', 'yaygın sklerotik odaklar'],
        management: 'TRUS eşliğinde biyopsi ve Gleason skorlaması sonrası lokalizede radikal prostatektomi veya radyoterapi; metastatikte GnRH analoğu ile androjen deprivasyonu',
        pearl: 'BPH transizyonel zonda gelişirken malignite %70-80 oranında posterior-periferik zonda yer alır ve kemik metastazları tipik olarak osteoblastiktir.',
        trapFalse: 'en sık transizyonel zondan köken alır ve kemik metastazları tipik olarak osteolitiktir',
        trapHighlight: 'kemik metastazları tipik olarak osteolitiktir',
      },
      {
        name: 'Testis seminomu',
        target: 'Primordial germ hücrelerinden gelişen yüksek radyosensitiviteye sahip uniform malignite',
        hallmark: 'Berrak glikojenli hücreler, fibröz septada lenfosit infiltrasyonu, normal AFP ve radyosensitivite',
        vignette:
          'Kriptorşidizm öyküsü olan 34 yaşındaki erkek hasta sağ testiste 3 aydır büyüyen ağrısız sert kitle ile başvuruyor. Tümör belirteçlerinden serum AFP normal, LDH hafif yüksek ve beta-hCG 18 mIU/mL ölçülüyor; biyopsi yapılmadan radikal orşiektomi uygulanıyor',
        clues: ['kriptorşidizm öyküsü', 'serum AFP normal', 'biyopsi yapılmadan radikal orşiektomi'],
        management: 'Transskrotal biyopsiden kaçınarak inguinal radikal orşiektomi ve evreye göre retroperitoneal radyoterapi veya sisplatin bazlı kemoterapi',
        pearl: 'Serum AFP yüksekliği varsa tümör histolojisi saf seminom olarak raporlansa dahi non-seminomatöz komponent var kabul edilip ona göre tedavi edilir.',
        trapFalse: 'tanıyı kesinleştirmek için ameliyat öncesi skrotal iğne biyopsisi yapılır ve serum AFP belirgin yükselir',
        trapHighlight: 'ameliyat öncesi skrotal iğne biyopsisi yapılır ve serum AFP belirgin yükselir',
      },
      {
        name: 'Non-seminomatöz germ hücreli tümör',
        target: 'Embriyonal karsinom, yolk sac, koryokarsinom veya teratom komponentleri içeren radyorezistan germ hücreli tümör',
        hallmark: 'Genç erkekte ağrısız testis kitlesine eşlik eden yüksek AFP veya çok yüksek beta-hCG ve erken hematojen metastaz',
        vignette:
          '25 yaşındaki erkek hasta sol testiste sert kitle ve nefes darlığıyla başvuruyor. Akciğer grafisinde multipl nodüler metastazlar görülen hastanın serum AFP düzeyi 980 ng/mL ve beta-hCG düzeyi 42.000 mIU/mL ölçülüyor',
        clues: ['25 yaşındaki erkek', 'serum AFP düzeyi 980 ng/mL', 'akciğerde multipl nodüler metastazlar'],
        management: 'İnguinal radikal orşiektomi sonrası BEP (bleomisin, etoposid, sisplatin) kemoterapisi ve rezidü retroperitoneal kitlede lenfadenektomi',
        pearl: 'Radyoterapiye dirençlidirler; BEP kemoterapisi sonrası belirteçler normale dönmesine rağmen retroperitonda 1 cm üzeri rezidü kitle kalırsa teratom ihtimaliyle çıkarılır.',
        trapFalse: 'yüksek radyosensitiviteye sahip olduklarından metastatik olgularda bile primer tedavisi düşük doz radyoterapidir',
        trapHighlight: 'primer tedavisi düşük doz radyoterapidir',
      },
    ],
  },

  // 22. Ürolojik obstrüksiyon ve taş/travma
  {
    branchId: 'cerrahi',
    subTopic: 'Ürolojik Obstrüksiyon, Travma ve Enfeksiyon Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Benign prostat hiperplazisi',
        target: 'Transizyonel zonda 5-alfa redüktaz aracılı dihidrotestosteron artışı sonucu stromal ve glandüler proliferasyon',
        hallmark: 'İleri yaş erkekte nokturia, zayıf idrar akımı, kesik kesik işeme ve rektal tuşede düzgün elastik simetrik büyüme',
        vignette:
          '67 yaşındaki erkek hasta geceleri 4 kez idrara kalktığını, idrarını başlatmakta zorlandığını ve akımının zayıfladığını söylüyor. Rektal tuşede sulkusu silinmiş ancak düzgün yüzeyli, lastik kıvamlı ve ağrısız büyümüş bez saptanıyor; idrar tahlili normal, PSA 2.1 ng/mL bulunuyor',
        clues: ['geceleri 4 kez idrara kalktığını', 'düzgün yüzeyli lastik kıvamlı büyümüş bez', 'PSA 2.1 ng/mL'],
        management: 'İlk basamakta alfa-1A reseptör blokeri (tamsulosin), büyük bezde 5-alfa redüktaz inhibitörü (finasterid) ve direnç veya komplikasyonda TUR-P',
        pearl: 'Alfa blokerler düz kas tonusunu gevşeterek hızla semptomları düzeltirken, 5-alfa redüktaz inhibitörleri bez hacmini küçültmek için 6 ay gerektirir ve PSA’yı yarıya düşürür.',
        trapFalse: 'periferik zondan köken alır ve finasterid kullanımı serum PSA düzeyini iki katına çıkarır',
        trapHighlight: 'finasterid kullanımı serum PSA düzeyini iki katına çıkarır',
      },
      {
        name: 'Posterior üretra yaralanması',
        target: 'Pelvik halka kırığı sırasında puboprostatik ligamentlerin gerilmesiyle membranöz üretranın prostat apeksinden kopması',
        hallmark: 'Üretral meadan kan damlaması, dolu mesane, perineal hematom ve rektal tuşede yüksekte yüzen prostat',
        vignette:
          'Yüksekten düşme sonucu pelvik kırık geçiren 34 yaşındaki erkek hastanın üretral meatusunda kan damlası, perinede kelebek şeklinde hematom ve göbek altında dolu ağrılı mesane palpe ediliyor. Rektal tuşede prostat bezinin normal yerinde olmayıp yukarı doğru yer değiştirdiği hissediliyor',
        clues: ['pelvik kırık ve üretral meatusunda kan damlası', 'perinede kelebek şeklinde hematom', 'prostatın yukarı doğru yer değiştirdiği'],
        management: 'Kesinlikle körleme Foley sonda takmaya çalışılmadan önce retrograd üretrografi çekilmesi ve acil suprapubik sistostomi uygulanması',
        pearl: 'Üretral meada kan görülen travma hastasında sonda zorlamak parsiyel yırtığı tam kopmaya çevirebileceğinden mutlak kontrendikedir.',
        trapFalse: 'mesaneyi boşaltmak için ilk ve en acil girişim olarak hemen standart 18 F Foley sonda yerleştirilir',
        trapHighlight: 'hemen standart 18 F Foley sonda yerleştirilir',
      },
      {
        name: 'İntraperitoneal mesane rüptürü',
        target: 'Dolu mesane üzerine gelen künt alt karın travmasıyla en zayıf bölge olan mesane kubbesinin periton boşluğuna yırtılması',
        hallmark: 'Gross hematüriye eşlik eden yaygın periton irritasyonu, ileus ve sistografide kontrastın bağırsak ansları arasına dağılması',
        vignette:
          'Alkol sonrası dolu mesaneyle araç kazasında emniyet kemeri travması geçiren 30 yaşındaki erkek hastada yaygın karın ağrısı, defans, rebound ve makroskopik hematüri saptanıyor. Retrograd sistografide kontrast maddenin periton boşluğunda karaciğer ve bağırsak ansları çevresinde serbestçe yayıldığı görülüyor',
        clues: ['dolu mesaneyle emniyet kemeri travması', 'yaygın defans ve rebound', 'kontrastın bağırsak ansları çevresinde yayıldığı'],
        management: 'Ekstraperitoneal tipten farklı olarak kateterle iyileşmeyeceğinden acil laparotomi ile primer çok katlı cerrahi onarım',
        pearl: 'Ekstraperitoneal rüptürlerin çoğunluğu sadece Foley kateter drenajıyla iyileşirken kubbedeki bu yırtık mutlaka cerrahi dikim gerektirir.',
        trapFalse: 'pelvik kırığa bağlı gelişir ve tek başına 10 günlük Foley kateter drenajı ile ameliyatsız tedavi edilir',
        trapHighlight: 'tek başına 10 günlük Foley kateter drenajı ile ameliyatsız tedavi edilir',
      },
      {
        name: 'Böbrek travması',
        target: 'Künt lomber darbe veya deselerasyon travmasıyla renal parankim laserasyonu veya vasküler pedikül hasarı',
        hallmark: 'Yan ağrısı, lomber ekimoz, hematüri ve kontrastlı batın BT’de perirenal hematom veya idrar ekstravazasyonu',
        vignette:
          'Futbol maçında sol böğrüne diz darbesi alan 22 yaşındaki erkek hasta sol yan ağrısı ve kırmızı idrar yapmayla başvuruyor. Vital bulguları tamamen stabil olan hastanın kontrastlı batın BT’sinde sol böbrekte 2 cm’lik korteks laserasyonu ve sınırlı perirenal hematom görülüyor',
        clues: ['sol böğrüne diz darbesi', 'vital bulguları tamamen stabil', '2 cm’lik korteks laserasyonu'],
        management: 'Hemodinamik stabilite korunduğu sürece derece I-IV yaralanmalarda yatak istirahati ve yakın izlem; aktif kanamada anjiyoembolizasyon',
        pearl: 'Makroskopik veya şoklu mikroskopik hematüride görüntüleme şarttır; çocuklarda künt travmada bile izole mikroskopik hematüri daha sık görülür ve pedikül avülsiyonu hematürisiz olabilir.',
        trapFalse: 'hastanın vital bulguları stabil olsa dahi her parankimal laserasyonda acil nefrektomi yapılması zorunludur',
        trapHighlight: 'her parankimal laserasyonda acil nefrektomi yapılması zorunludur',
      },
      {
        name: 'Fournier gangreni',
        target: 'Diyabetik veya perianal enfeksiyonlu hastada Buck ve Colles fasyası boyunca hızla yayılan polimikrobiyal sinerjistik nekrotizan fasiit',
        hallmark: 'Skrotum ve perinede muayeneyle orantısız şiddetli ağrı, siyah nekrotik odaklar, pis koku ve cilt altı krepitasyon',
        vignette:
          'Kontrolsüz tip 2 diyabeti olan 59 yaşındaki erkek hasta 2 gündür perine bölgesinde başlayan hızla ilerleyen şiddetli ağrı, yüksek ateş ve genel durum bozukluğuyla getiriliyor. Skrotum derisinde ödem, siyah nekrotik yamalar, kötü koku ve basmakla çıtırtı şeklinde krepitasyon alınıyor',
        clues: ['kontrolsüz tip 2 diyabet', 'siyah nekrotik yamalar ve kötü koku', 'basmakla çıtırtı şeklinde krepitasyon'],
        management: 'Gecikmeden acil ve agresif cerrahi debridman, geniş spektrumlu üçlü IV antibiyotik (anaerop, gram negatif, gram pozitif kapsamı) ve resüsitasyon',
        pearl: 'Perineal fasyalar boyunca saatler içinde karın duvarına tırmanabilir; derin testis dokusu spermatik kordla ayrı kanlandığı için genellikle korunur.',
        trapFalse: 'testis parankimini erken nekroze ettiğinden her hastada bilateral orşiektomi yapılır ve debridman antibiyotikten sonraya bırakılır',
        trapHighlight: 'her hastada bilateral orşiektomi yapılır',
      },
    ],
  },

  // 23. Göz hastalıkları acilleri
  {
    branchId: 'cerrahi',
    subTopic: 'Göz Hastalıkları Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akut açı kapanması glokomu',
        target: 'Sığ ön kamaralı hipermetrop gözde pupiller blok sonucu aköz hümör çıkışının trabeküler ağda ani tıkanması',
        hallmark: 'Şiddetli tek taraflı göz-baş ağrısı, bulantı-kusma, halolar görme, korneal ödem, orta dilate fiks pupil ve sert glob',
        vignette:
          'Karanlık sinema salonunda film izlerken aniden başlayan şiddetli sağ göz ağrısı, baş ağrısı, bulantı, kusma ve ışıkların çevresinde gökkuşağı halkaları görme şikayetiyle başvuran 62 yaşındaki hipermetrop kadında kornea bulanık, ön kamara sığ, pupil orta genişlikte ve ışığa yanıtsız, göz içi basıncı 58 mmHg saptanıyor',
        clues: ['karanlık ortamda tetiklenen şiddetli göz ağrısı', 'ışıkların çevresinde gökkuşağı halkaları', 'orta genişlikte ışığa yanıtsız pupil ve 58 mmHg basınç'],
        management: 'IV asetazolamid, topikal timolol ve pilokarpin ile basıncın düşürülmesi ve kesin önlem olarak her iki göze lazer periferik iridotomi',
        pearl: 'Atropin veya antikolinerjik midriyatik damlalar tabloyu tetikler; kornea bulanıklığı ve mid-dilate pupil akut konjonktivitten ayırt ettirir.',
        trapFalse: 'tedavide pupili daha da genişletmek için topikal atropin ve siklopentolat damlatılır',
        trapHighlight: 'pupili daha da genişletmek için topikal atropin',
      },
      {
        name: 'Santral retinal arter tıkanıklığı',
        target: 'Karotis plağından kopan embolinin lamina kribroza düzeyinde retinal arter akımını aniden kesmesi',
        hallmark: 'Dakikalar içinde ağrısız tek taraflı tam görme kaybı, soluk ödemli retina ve makulada kiraz kırmızısı nokta',
        vignette:
          'Karotis stenozu olan 68 yaşındaki erkek hasta bir saat önce sağ gözünde saniyeler içinde gelişen tamamen ağrısız karanlık perdeyle görme kaybı yaşadığını belirtiyor. Fundoskopide tüm retinanın beyaz-soluk ödemli olduğu, foveanın ise parlak kiraz kırmızısı bir nokta olarak parladığı görülüyor',
        clues: ['saniyeler içinde ağrısız tam görme kaybı', 'tüm retinanın beyaz-soluk ödemli olduğu', 'parlak kiraz kırmızısı nokta'],
        management: 'İlk 90 dakikada oküler masaj, ön kamara parasentezi, asetazolamid ve karotis-kardiyak emboli kaynağının araştırılması; yaşlıda dev hücreli arterit ekartasyonu',
        pearl: 'Fovea ince olduğu için altındaki sağlam koroid dolaşımı kırmızı görünmeye devam eder; 50 yaş üstünde sedimentasyon mutlaka kontrol edilmelidir.',
        trapFalse: 'fundoskopide dört kadranda yaygın alev şeklinde retinal kanamalar ve kıvrımlı venler izlenir',
        trapHighlight: 'dört kadranda yaygın alev şeklinde retinal kanamalar',
      },
      {
        name: 'Santral retinal ven tıkanıklığı',
        target: 'Lamina kribrozadaki ortak adventisyada sklerotik arterin komşu veni sıkıştırmasıyla gelişen venöz tromboz',
        hallmark: 'Subakut ağrısız görme azalması ve fundoskopide dört kadranda alev şeklinde hemorajilerle fırtınalı gün batımı manzarası',
        vignette:
          'Hipertansiyon ve glokom öyküsü bulunan 64 yaşındaki kadın hasta son birkaç günde sol gözünde ağrısız görme bulanıklığı geliştiğini söylüyor. Göz dibi muayenesinde optik disk ödemli, retinal venler ileri derecede dilate-kıvrımlı ve dört kadranda yaygın kanamalarla atım pamuğu eksudalar izleniyor',
        clues: ['retinal venler dilate ve kıvrımlı', 'dört kadranda yaygın kanamalar', 'atım pamuğu eksudalar'],
        management: 'Makula ödeminde intravitreal anti-VEGF tedavisi ve iskemik tipte neovasküler glokomu önlemek için panretinal lazer fotokoagülasyon',
        pearl: 'İskemik olgularda gelişen iris neovaskülarizasyonu yaklaşık 100 gün içinde ağır neovasküler glokoma yol açabilir.',
        trapFalse: 'soluk ödemli retina ortasında tek başına kiraz kırmızısı fovea noktası ile karakterizedir',
        trapHighlight: 'soluk ödemli retina ortasında tek başına kiraz kırmızısı fovea',
      },
      {
        name: 'Regmatojen retina dekolmanı',
        target: 'Retina yırtığından geçen sıvılaşmış vitreusun nörosensöriyel retinayı retina pigment epitelinden ayırması',
        hallmark: 'Ani uçuşan sinekler ve ışık çakmaları sonrası görme alanında siyah perde inmesi hissi',
        vignette:
          'Yüksek miyopisi olan 55 yaşındaki erkek hasta son 2 gündür sağ gözünde yoğun ışık çakmaları ve siyah noktacıklar uçuşması sonrası görme alanının alt kısmından yukarı doğru siyah bir perdenin kapandığını ifade ediyor. Fundoskopide grimsi, dalgalanan, kabarık retina tabakası görülüyor',
        clues: ['yüksek miyopi', 'ışık çakmaları ve siyah noktacıklar', 'görme alanına siyah perde kapandığı'],
        management: 'Makula ayrılmadan acil vitrektomi, skleral çökertme veya pnömatik retinopeksi ve lazerle yırtığın kapatılması',
        pearl: 'Makula henüz ayrılmamışsa acil cerrahi görmeyi tam koruyabilir; en önemli risk faktörleri yüksek miyopi, katarakt cerrahisi öyküsü ve oküler travmadır.',
        trapFalse: 'tedavisi yalnızca sistemik steroid verilmesidir ve yüksek hipermetropi en güçlü risk faktörüdür',
        trapHighlight: 'tedavisi yalnızca sistemik steroid verilmesidir',
      },
      {
        name: 'Optik nörit',
        target: 'Sıklıkla multipl sklerozla ilişkili optik sinir kılıfında inflamatuvar demiyelinizasyon',
        hallmark: 'Genç kadında göz hareketleriyle artan ağrı, diskromatopsi ve relatif afferent pupil defekti',
        vignette:
          '28 yaşındaki kadın hasta son 3 günde sağ gözünde giderek azalan görme, kırmızı rengi soluk görme ve özellikle gözünü sağa-sola oynatırken göz arkasında batıcı ağrı şikayetiyle başvuruyor. Muayenede sallanan fener testinde sağ gözde relatif afferent pupil defekti saptanıyor',
        clues: ['gözünü oynatırken göz arkasında ağrı', 'kırmızı rengi soluk görme', 'relatif afferent pupil defekti'],
        management: 'Beyin-orbita MRG ile demiyelinizan plakların değerlendirilmesi ve görme iyileşmesini hızlandırmak için yüksek doz IV metilprednizolon',
        pearl: 'Tek başına düşük doz oral prednizon nüks riskini artırdığından tercih edilmez; yüksek doz intravenöz pulse steroid kullanılır.',
        trapFalse: 'görme iyileşmesini hızlandırmak için tek başına düşük doz oral prednizon verilir ve göz hareketleri ağrısızdır',
        trapHighlight: 'tek başına düşük doz oral prednizon verilir',
      },
    ],
  },

  // 24. KBB hastalıkları
  {
    branchId: 'cerrahi',
    subTopic: 'KBB Hastalıkları ve Vertigo Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Meniere hastalığı',
        target: 'Endolenfatik kesenin emilim bozukluğuna bağlı membranöz labirentte endolenfatik hidrops gelişimi',
        hallmark: 'Saatler süren dönen vertigo ataklarına eşlik eden kulak dolgunluğu, çınlama ve fluktuan düşük frekans sensörinöral işitme kaybı',
        vignette:
          '41 yaşındaki kadın hasta son bir yıldır tekrarlayan, yaklaşık 3-4 saat süren şiddetli baş dönmesi, bulantı, sağ kulağında basınç hissi ve uğultu ataklarından yakınıyor. Ataklar sırasında sağ kulakta azalan işitmenin sonradan kısmen düzeldiği, odyometride düşük frekanslarda sensörinöral kayıp bulunduğu görülüyor',
        clues: ['3-4 saat süren şiddetli baş dönmesi', 'sağ kulağında basınç hissi ve uğultu', 'düşük frekanslarda fluktuan sensörinöral kayıp'],
        management: 'Düşük tuzlu diyet, diüretikler, betahistin ve dirençli ataklar için intratimpanik steroid veya gentamisin',
        pearl: 'Atak süresi saniyeler değil saatler sürer ve işitme kaybı başlangıçta dalgalı seyredip zamanla kalıcı hale gelir.',
        trapFalse: 'ataklar 30 saniyeden kısa sürer ve hiçbir zaman işitme kaybı veya tinnitus eşlik etmez',
        trapHighlight: 'ataklar 30 saniyeden kısa sürer ve hiçbir zaman işitme kaybı',
      },
      {
        name: 'Benign paroksismal pozisyonel vertigo',
        target: 'Utrikulus makulasından ayrılan otokonia kristallerinin sıklıkla posterior semisirküler kanala düşmesi',
        hallmark: 'Yatakta dönme veya başı kaldırmayla tetiklenen bir dakikadan kısa vertigo ve Dix-Hallpike testinde yorulabilen rotatuvar nistagmus',
        vignette:
          '52 yaşındaki kadın hasta sabah yataktan kalkarken veya sağ kulağının üzerine dönerken başlayan ve 20-30 saniye içinde geçen şiddetli dönme hissiyle başvuruyor. İşitmesi tamamen normal olan hastada Dix-Hallpike manevrasında birkaç saniyelik gecikmeden sonra başlayan rotatuvar nistagmus izleniyor',
        clues: ['sağ kulağının üzerine dönerken başlayan', '20-30 saniye içinde geçen', 'Dix-Hallpike manevrasında rotatuvar nistagmus'],
        management: 'Epley kanalit repozisyon manevrası; vestibüler supresan ilaçlar santral kompanzasyonu geciktirdiği için önerilmez',
        pearl: 'En sık etkilenen kanal posterior semisirküler kanaldır; işitme kaybı yapmaz ve tanısal manevra ile iyileştirici manevra birbirini tamamlar.',
        trapFalse: 'günler boyunca kesintisiz devam eder ve tedavide uzun süreli dimenhidrinat kullanılır',
        trapHighlight: 'günler boyunca kesintisiz devam eder',
      },
      {
        name: 'Vestibüler nörinit',
        target: 'Üst solunum yolu enfeksiyonu sonrası süperior vestibüler sinirin viral veya postviral inflamasyonu',
        hallmark: 'İşitme kaybı olmaksızın günler süren şiddetli sürekli vertigo ve sağlam tarafa vuran spontan horizontal nistagmus',
        vignette:
          'Bir hafta önce geçirdiği viral nezle sonrası aniden başlayan ve 2 gündür hiç durmadan devam eden baş dönmesi, kusma ve yürüyememe şikayetiyle getirilen 35 yaşındaki erkek hastada işitme muayenesi tamamen normal, baş itme testi pozitif ve sola vuran spontan nistagmus görülüyor',
        clues: ['viral nezle sonrası 2 gündür hiç durmadan devam eden', 'işitme muayenesi tamamen normal', 'baş itme testi pozitif'],
        management: 'İlk 48-72 saatte semptomatik vestibüler supresan ve erken kortikosteroid, ardından erken vestibüler rehabilitasyon egzersizleri',
        pearl: 'İşitme kaybı da eşlik ederse tablo labirentit adını alır; santral inmeden HINTS muayenesi (baş itme testi pozitifliği) ile ayrılır.',
        trapFalse: 'başlangıçtan itibaren belirgin düşük frekanslı işitme kaybı ile seyreder ve Epley manevrası ile düzelir',
        trapHighlight: 'belirgin düşük frekanslı işitme kaybı ile seyreder',
      },
      {
        name: 'Akustik nörinom',
        target: 'Sekizinci kraniyal sinirin vestibüler dalındaki Schwann hücrelerinden gelişen yavaş büyüyen benign tümör',
        hallmark: 'Tek taraflı ilerleyici sensörinöral işitme kaybı, tinnitus, orantısız konuşmayı ayırt etme bozukluğu ve kornea refleks kaybı',
        vignette:
          '48 yaşındaki erkek hasta iki yıldır sol kulağında giderek artan çınlama ve özellikle telefonla konuşurken kelimeleri anlayamama şikayetiyle başvuruyor. Odyometride sol kulakta yüksek frekanslı sensörinöral kayıp ve saf ses ortalamasıyla orantısız çok düşük konuşmayı ayırt etme skoru saptanıyor',
        clues: ['telefonla konuşurken kelimeleri anlayamama', 'yüksek frekanslı sensörinöral kayıp', 'çok düşük konuşmayı ayırt etme skoru'],
        management: 'Kontrastlı internal akustik kanal MRG ile tanı sonrası tümör boyutuna göre takip, stereotaktik radyocerrahi veya mikrocerrahi eksizyon',
        pearl: 'Bilateral olması nörofibromatozis tip 2 için patognomoniktir; tümör büyüdüğünde önce 5. kraniyal sinire basıyla kornea refleksini bozar.',
        trapFalse: 'bilateral görülmesi nörofibromatozis tip 1 için patognomoniktir ve ilk olarak iletim tipi işitme kaybı yapar',
        trapHighlight: 'nörofibromatozis tip 1 için patognomoniktir',
      },
      {
        name: 'Otoskleroz',
        target: 'Otik kapsül ve oval pencere çevresinde stapes tabanını fikse eden anormal spongiyotik kemik yeniden yapılanması',
        hallmark: 'Genç kadında gebelikte hızlanabilen ilerleyici iletim tipi işitme kaybı, normal kulak zarı ve 2000 Hz’de Carhart çentiği',
        vignette:
          '31 yaşındaki kadın hasta son iki gebeliği sırasında belirginleşen ve gürültülü ortamlarda konuşmaları daha rahat duyabildiği ilerleyici işitme azlığıyla başvuruyor. Otoskopide her iki kulak zarı normal, yer yer pembe refle (Schwartze) izleniyor; odyogramda 2000 Hz kemik yolunda çentiklenme görülüyor',
        clues: ['gebeliği sırasında belirginleşen', 'gürültülü ortamlarda daha rahat duyabildiği', '2000 Hz kemik yolunda çentiklenme'],
        management: 'İşitme cihazı veya cerrahi olarak stapedotomi ile stapes piston protezi yerleştirilmesi',
        pearl: 'Otozomal dominant değişken penetranslıdır; gürültülü ortamda daha iyi duyma (Willis parakuzisi) ve Schwartze işareti tipiktir.',
        trapFalse: 'timpanik membranda santral perforasyon ve kolesteatom ile seyreder, kemik yolunda çentik oluşmaz',
        trapHighlight: 'timpanik membranda santral perforasyon ve kolesteatom ile seyreder',
      },
    ],
  },

  // 25. Baş-boyun tümörleri ve boyun kitleleri
  {
    branchId: 'cerrahi',
    subTopic: 'Baş-Boyun Tümörleri ve Konjenital Boyun Kitleleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Nazofarenks karsinomu',
        target: 'Epstein-Barr virüsü enfeksiyonu ve genetik yatkınlıkla Rosenmüller fossasından köken alan epitel tümörü',
        hallmark: 'Erişkinde tek taraflı seröz otit, burun tıkanıklığı, epistaksis ve üst juguler ağrısız lenf nodu metastazı',
        vignette:
          '50 yaşındaki erkek hasta 4 aydır geçmeyen sol kulakta dolgunluk ve işitme azlığı ile boyun sol üst yanında ağrısız büyüyen sert kitle nedeniyle başvuruyor. Muayenede sol kulakta efüzyonlu otitis media ve nazofarenks yan duvarında EBV pozitif indiferansiye karsinom saptanıyor',
        clues: ['sol kulakta efüzyonlu otitis media', 'boyun sol üst yanında ağrısız kitle', 'EBV pozitif indiferansiye karsinom'],
        management: 'Anatomik yerleşim ve yüksek radyoduyarlılık nedeniyle primer tedavi olarak radyoterapi ve ileri evrede eş zamanlı sisplatinli kemoradyoterapi',
        pearl: 'Erişkinde tek taraflı persistan efüzyonlu otit aksi kanıtlanana kadar östaki ağzını tıkayan bu tümörün işaretidir; ilk tedavisi cerrahi değildir.',
        trapFalse: 'primer standart tedavisi erken evreden itibaren geniş açık cerrahi rezeksiyondur ve HPV ile ilişkilidir',
        trapHighlight: 'primer standart tedavisi erken evreden itibaren geniş açık cerrahi rezeksiyondur',
      },
      {
        name: 'Larenks karsinomu',
        target: 'Tütün ve alkol sinerjisiyle en sık glottik vokal kordlardan köken alan skuamöz hücreli karsinom',
        hallmark: 'Sigara içen hastada 2-3 haftadan uzun süren kalıcı ses kısıklığı ve erken evrede bile laringoskopik lezyon',
        vignette:
          '40 paket-yıl sigara öyküsü bulunan 62 yaşındaki erkek hasta son iki aydır giderek artan ses kısıklığıyla başvuruyor. İndirekt laringoskopide sağ vokal kordun ön üçte ikisinde düzensiz beyaz-kırmızı ekzofitik lezyon görülüyor; boyunda lenfadenopati saptanmıyor',
        clues: ['40 paket-yıl sigara öyküsü', 'iki aydır artan ses kısıklığı', 'sağ vokal kordda ekzofitik lezyon'],
        management: 'Erken evre glottik lezyonda transoral lazer cerrahisi veya tek başına radyoterapi; ileri evre kıkırdak invazyonunda total larenjektomi artı boyun diseksiyonu',
        pearl: 'Glottik bölgede lenfatik ağ çok fakir olduğu için ses kısıklığıyla erken yakalanır ve lenf nodu metastazı supraglottik tipe göre çok nadirdir.',
        trapFalse: 'glottik bölgede zengin lenfatik ağ nedeniyle erken evrede dahi %60 oranında bilateral boyun metastazı yapar',
        trapHighlight: 'glottik bölgede zengin lenfatik ağ nedeniyle erken evrede dahi %60 oranında bilateral boyun metastazı',
      },
      {
        name: 'Tiroglossal duktus kisti',
        target: 'Embriyonik tiroid bezinin dil kökünden aşağı iniş yolunun kapanmamasıyla oluşan konjenital artık',
        hallmark: 'Çocuk veya gençte orta hatta hyoid altı yerleşimli, yutkunmakla ve dil çıkarmakla yukarı hareket eden kistik kitle',
        vignette:
          '8 yaşındaki erkek çocuk boynunun tam ön orta kısmında son aylarda fark edilen, ağrısız 2 cm’lik yuvarlak şişlikle getiriliyor. Fizik muayenede kitlenin hyoid kemik altında yer aldığı ve çocuk dilini dışarı çıkardığında belirgin olarak yukarı doğru hareket ettiği gözleniyor',
        clues: ['boynunun tam ön orta kısmında', 'hyoid kemik altında', 'dilini dışarı çıkardığında yukarı hareket ettiği'],
        management: 'Tiroid dokusu varlığını ultrasonla doğruladıktan sonra nüksü önlemek için hyoid kemik orta gövdesiyle birlikte çıkarılan Sistrunk ameliyatı',
        pearl: 'Sadece kistin çıkarılması yüksek nüksle sonuçlanır; trakt dil köküne kadar takip edilip hyoidin santral parçası mutlaka alınmalıdır.',
        trapFalse: 'sternokleidomastoid kasın ön kenarında yer alır ve dil hareketleriyle hiç yer değiştirmez',
        trapHighlight: 'sternokleidomastoid kasın ön kenarında yer alır',
      },
      {
        name: 'Brankial yarık kisti',
        target: 'En sık ikinci faringeal yarık ve servikal sinüs artığının oblitere olmamasıyla gelişen lateral boyun anomalisi',
        hallmark: 'Genç erişkinde sternokleidomastoid kasın ön kenarında fluktuan lateral boyun kitlesi ve enfeksiyonla büyüme',
        vignette:
          '21 yaşındaki kadın hasta geçirdiği boğaz enfeksiyonu sonrası boynunun sağ yan tarafında belirginleşen yumuşak şişlikle başvuruyor. Muayenede sternokleidomastoid kasın üst-orta üçte bir ön kenarı boyunca ağrısız, fluktuan, dil çıkarma ile hareket etmeyen 3.5 cm’lik kitle saptanıyor',
        clues: ['sternokleidomastoid kasın ön kenarı boyunca', 'boğaz enfeksiyonu sonrası belirginleşen', 'dil çıkarma ile hareket etmeyen'],
        management: 'Akut enfeksiyon varsa önce antibiyotik tedavisi, ardından karotis bifürkasyonu ve hipoglossal sinir korunarak tam cerrahi eksizyon',
        pearl: 'İkinci yarık traktı eksternal ve internal karotis arterlerin arasından geçip tonsil yatağına uzanır; ileri yaşta lateral kistik kitlede metastatik tiroid veya tonsil kanseri dışlanmalıdır.',
        trapFalse: 'en sık dördüncü yarıktan köken alır ve traktı tiroid kıkırdağı delerek orta hatta açılır',
        trapHighlight: 'en sık dördüncü yarıktan köken alır',
      },
      {
        name: 'Pleomorfik adenom',
        target: 'Parotis bezinde epitelyal ve miyoepitelyal-mezenkimal dokuları birlikte içeren benign mikst tükrük bezi tümörü',
        hallmark: 'Kulak memesi altında yavaş büyüyen, ağrısız, mobil sert kitle ve fasiyal sinir paralizisinin bulunmaması',
        vignette:
          '44 yaşındaki kadın hasta son 3 yıldır sol kulak memesi önünde çok yavaş büyüyen ağrısız şişlik ile başvuruyor. Yüz mimik kasları tamamen normal olan hastanın parotis yüzeyel lobunda 2.5 cm sert-elastik mobil nodül palpe ediliyor; ince iğne biyopsisinde kondromiksoid stroma ve epitelyal adalar izleniyor',
        clues: ['sol kulak memesi önünde yavaş büyüyen', 'yüz mimik kasları tamamen normal', 'kondromiksoid stroma ve epitelyal adalar'],
        management: 'Psödopod uzantıları ve yüksek nüks riski nedeniyle basit enükleasyon yerine fasiyal sinir korunarak yüzeyel parotidektomi',
        pearl: 'Parotisin en sık görülen benign tümörüdür; yüzde 80 kuralıyla parotiste tümörler en sık görülür ve en sık benign olur.',
        trapFalse: 'kapsül uzantıları olmadığından basit enükleasyonla çıkarılır ve sigara ile güçlü ilişkilidir',
        trapHighlight: 'basit enükleasyonla çıkarılır',
      },
    ],
  },

  // 26. Ortopedi acilleri ve pediatrik kalça (ÖSYM Twin 9 -> EXACTLY 9th twin in surgery!)
  {
    branchId: 'cerrahi',
    subTopic: 'Ortopedi Acilleri ve Pediatrik Kalça Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Kompartman sendromu',
        target: 'Kapalı fasyal kompartman içinde kanama ve ödem nedeniyle doku basıncının mikrovasküler perfüzyonu durdurması',
        hallmark: 'Tibia kırığı sonrası analjeziklere dirençli orantısız ağrı ve parmakların pasif gerilmesiyle şiddetlenen ağrı',
        vignette:
          'Tibia şaft kırığı nedeniyle alçıya alınan 27 yaşındaki erkek hasta 6 saat sonra morfine dahi yanıt vermeyen giderek artan bacak ağrısından kıvranıyor. Ayak başparmağı pasif olarak gerildiğinde hastanın ağrısı dayanılmaz hale geliyor ve dorsal pedal nabız halen alınıyor',
        clues: ['morfine yanıt vermeyen artan bacak ağrısı', 'pasif olarak gerildiğinde dayanılmaz ağrı', 'dorsal pedal nabız halen alınıyor'],
        management: 'Alçının ve sargıların derhal tüm katlarıyla açılması; klinik sürüyorsa veya basınç farkı <30 mmHg ise acil dört kompartman fasiyotomisi',
        pearl: 'Nabız kaybı çok geç bir bulgudur ve kalıcı kas-sinir nekrozunu gösterir; nabız varken acil fasiyotomi yapılmalıdır.',
        trapFalse: 'fasiyotomi kararı için mutlaka distal nabızların tamamen kaybolması ve solukluğun gelişmesi beklenir',
        trapHighlight: 'mutlaka distal nabızların tamamen kaybolması',
      },
      {
        name: 'Yağ embolisi sendromu',
        target: 'Uzun kemik veya pelvis kırığı sonrası kemik iliği yağ globüllerinin dolaşıma geçip akciğer ve beyinde kimyasal vaskülit yapması',
        hallmark: 'Femur kırığından 24-72 saat sonra ortaya çıkan hipoksemi, nörolojik konfüzyon ve aksilla-göğüs ön duvarında peteşiler',
        vignette:
          'Trafik kazasında izole sağ femur şaft kırığı geçiren 24 yaşındaki erkek hastada yatışının 36. saatinde ani taşipne, PaO2 düşüklüğü, ateş, ajitasyon-konfüzyon ve boyun tabanı ile aksiller kıvrımlarda küçük kırmızı peteşiyal döküntüler gelişiyor',
        clues: ['femur şaft kırığından 36 saat sonra', 'hipoksemi ve konfüzyon', 'aksiller kıvrımlarda peteşiyal döküntüler'],
        management: 'Erken intramedüller kırık stabilizasyonu ve agresif destekleyici oksijen-mekanik ventilasyon tedavisi; heparin ve rutin yüksek doz steroid kanıtlanmamıştır',
        pearl: 'Solunum sıkıntısı, santral sinir sistemi bozukluğu ve aksiller/konjunktival peteşi triadı (Gurd kriterleri) tanıyı koydurur.',
        trapFalse: 'tedavide ilk basamak yüksek doz intravenöz heparin antikoagülasyonu ve acil trombolitik verilmesidir',
        trapHighlight: 'yüksek doz intravenöz heparin antikoagülasyonu',
      },
      {
        name: 'Gelişimsel kalça displazisi',
        target: 'Sığ asetabulum ve kapsüler laksite zemininde femur başının asetabulumdan çıkması veya instabilitesi',
        hallmark: 'Makat geliş öykülü kız yenidoğanda asimetrik uyluk pilileri, abdüksiyon kısıtlılığı ve pozitif Ortolani-Barlow manevraları',
        vignette:
          'Makat gelişle doğan ilk kız bebek 3 haftalıkken yapılan muayenede sol kalçasında abdüksiyon kısıtlılığı, uyluk kıvrımlarında asimetri ve uyluk adduksiyon-arka itme manevrasında kalçanın klik sesiyle çıkıp abdüksiyonla yerine oturduğu saptanıyor',
        clues: ['makat gelişle doğan ilk kız bebek', 'uyluk kıvrımlarında asimetri', 'klik sesiyle çıkıp yerine oturduğu'],
        management: 'İlk 4-6 ayda kemikleşme olmadığından grafi yerine kalça ultrasonografisi ile tanı ve Pavlik bandajı uygulaması',
        pearl: 'İlk 4-6 ayda femur başı kıkırdak yapıda olduğu için direkt röntgen tanısal değildir; dinamik ultrasonografi altın standarttır.',
        trapFalse: 'yenidoğanda tanıda ilk tercih düz ön-arka pelvis grafisidir ve erkek bebeklerde çok daha sıktır',
        trapHighlight: 'tanıda ilk tercih düz ön-arka pelvis grafisidir',
      },
      {
        name: 'Legg-Calvé-Perthes hastalığı',
        target: '4-8 yaş arası aktif çocuklarda femur başı epifizinin idiopatik avasküler nekrozu ve yeniden şekillenmesi',
        hallmark: 'Sinsi başlayan ağrısız veya hafif ağrılı topallama, iç rotasyon ve abdüksiyon kısıtlılığı ile grafide epifiz düzleşmesi',
        vignette:
          '6 yaşındaki zayıf ve oldukça hareketli erkek çocuk son 2 aydır özellikle oyun oynadıktan sonra artan ağrısız sağ bacak topallaması ve hafif uyluk ağrısıyla getiriliyor. Muayenede sağ kalçada iç rotasyon ve abdüksiyon kısıtlı saptanıyor; pelvis grafisinde sağ femur başı epifizi küçük, sklerotik ve düzleşmiş görülüyor',
        clues: ['6 yaşındaki erkek çocuk', 'iç rotasyon ve abdüksiyon kısıtlı', 'femur başı epifizi küçük, sklerotik ve düzleşmiş'],
        management: 'Femur başını asetabulum içinde yuvarlak tutmak için abdüksiyon ortezi, fizik tedavi veya seçilmiş büyük çocukta varus osteotomisi',
        pearl: 'Erken dönemde röntgen normal olabileceğinden şüphede MRG erken iskemiyi yakalar; genç yaşta tanı alanlarda prognoz en iyidir.',
        trapFalse: 'en sık obez ergen kızlarda görülür ve tanı anında acil kanüllü vida fiksasyonu gerektirir',
        trapHighlight: 'en sık obez ergen kızlarda görülür',
      },
      {
        name: 'Femur başı epifiz kayması',
        target: 'Peripubertal hızlı büyüme ve obezite zemininde proksimal femoral büyüme plağından metafizin anterosüperiora kayması',
        hallmark: '12-14 yaş obez erkek çocukta dize yansıyan ağrı, dış rotasyon duruşu ve pasif kalça fleksiyonunda zorunlu dış rotasyon',
        vignette:
          '13 yaşındaki obez erkek çocuk son 3 haftadır yürürken sağ dizinde ağrı ve topallama şikayetiyle getiriliyor. Diz muayenesi tamamen normal bulunurken sağ ayağının dışa dönük durduğu ve sağ kalça fleksiyona getirildiğinde bacağın zorunlu olarak dış rotasyon ve abdüksiyona gittiği görülüyor',
        clues: ['13 yaşındaki obez erkek çocuk', 'diz muayenesi normal iken sağ ayağı dışa dönük', 'kalça fleksiyona getirildiğinde zorunlu dış rotasyon'],
        management: 'Hastaya hemen yük verdirmenin kesilmesi, tekerlekli sandalyeye alınması ve daha fazla kaymayı önlemek için acil in-situ tek kanüllü vida fiksasyonu',
        pearl: 'Diz ağrısıyla gelen ergende kalça muayenesi yapılmazsa tanı atlanır; Klein çizgisinin epifizi kesmemesi radyolojik anahtar bulgudur.',
        trapFalse: 'açık cerrahi ile agresif redüksiyon ilk adımdır ve kesinlikle büyüme plağı vidalanmaz',
        trapHighlight: 'kesinlikle büyüme plağı vidalanmaz',
      },
    ],
  },

  // 27. Periferik arter ve ven cerrahisi
  {
    branchId: 'cerrahi',
    subTopic: 'Aort ve Periferik Vasküler Cerrahi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Abdominal aort anevrizması',
        target: 'Ateroskleroz ve matriks metalloproteinaz yıkımıyla infrarenal aort duvarının tüm katmanlarının kalıcı genişlemesi',
        hallmark: 'Sigara içen yaşlı erkekte pulsatil batın kitlesi; rüptürde karın-sırt ağrısı, hipotansiyon ve pulsatil kitle triadı',
        vignette:
          '45 paket-yıl sigara öyküsü olan 72 yaşındaki erkek hastada göbek üstünde nabızla senkron genişleyen ağrısız kitle palpe ediliyor. Çekilen batın BT anjiyografide renal arterlerin altında 6.1 cm çaplı fuziform aort dilatasyonu saptanıyor',
        clues: ['72 yaşındaki sigara içen erkek', 'göbek üstünde nabızla senkron genişleyen kitle', 'renal arterlerin altında 6.1 cm dilatasyon'],
        management: 'Semptomatik veya rüptürede acil cerrahi; asemptomatikte 5.5 cm üzeri ya da yılda >0.5 cm büyümede endovasküler EVAR veya açık greft onarımı',
        pearl: '65-75 yaş arası hayatında en az bir kez sigara içmiş tüm erkeklere tek seferlik abdominal ultrason taraması önerilir.',
        trapFalse: 'yalnızca intima yırtılmasıyla oluşan yalancı kesedir ve 4.0 cm çapta tüm hastalara açık cerrahi yapılır',
        trapHighlight: 'yalnızca intima yırtılmasıyla oluşan yalancı kesedir',
      },
      {
        name: 'Stanford Tip A aort diseksiyonu',
        target: 'Uzun süreli kontrolsüz hipertansiyon zemininde asendan aortadaki intima yırtığından kanın medya tabakasını ayırması',
        hallmark: 'Sırta vuran ani yırtıcı göğüs ağrısı, kollar arası tansiyon farkı, yeni aort yetersizliği üfürümü ve geniş mediasten',
        vignette:
          'Hipertansif 63 yaşındaki erkek hasta aniden başlayan ve kürek kemikleri arasına bıçak saplanır gibi vuran şiddetli yırtıcı göğüs ağrısıyla acile getiriliyor. Sağ kolda tansiyon 195/100, sol kolda 135/80 mmHg ölçülüyor; yeni diyastolik üfürüm ve BT anjiyografide asendan aortada intimal flep saptanıyor',
        clues: ['kürek kemikleri arasına vuran yırtıcı ağrı', 'kollar arası tansiyon farkı', 'asendan aortada intimal flep'],
        management: 'Önce IV beta bloker (esmolol/labetalol) ile kalp hızı ve ejeksiyon gücünün düşürülmesi, ardından acil açık asendan aort greft replasmanı',
        pearl: 'Asendan aortayı tuttuğu için perikard tamponadı, akut aort yetersizliği ve koroner ostiyum tıkanması riskiyle acil cerrahi endikasyonudur; beta blokerden önce tek başına vazodilatör verilmez.',
        trapFalse: 'asendan aortayı tutmasına rağmen stabil hastalarda yalnızca antihipertansif ilaçla izlenir ve cerrahi gerekmez',
        trapHighlight: 'yalnızca antihipertansif ilaçla izlenir ve cerrahi gerekmez',
      },
      {
        name: 'Akut ekstremite arter tıkanıklığı',
        target: 'Sıklıkla atriyal fibrilasyon kaynaklı embolinin femoral bifürkasyon gibi arteriyel çatallanmayı tıkaması',
        hallmark: 'Ani ağrı, solukluk, nabızsızlık, parestezi, paralizi ve soğukluktan oluşan 6P bulgusu',
        vignette:
          'Atriyal fibrilasyon öyküsü olan 74 yaşındaki kadın hasta 3 saat önce aniden başlayan sağ bacak ağrısı ve uyuşmayla acile geliyor. Sağ femoral nabız alınırken popliteal ve ayak nabızları alınamıyor; bacak soluk, soğuk ve ayak parmaklarında duyu azalması başlıyor',
        clues: ['atriyal fibrilasyon öyküsü', 'popliteal ve ayak nabızları alınamıyor', 'bacak soluk, soğuk ve duyu azalması'],
        management: 'Derhal sistemik IV heparin başlanması ve kalıcı kas nekrozu gelişmeden ilk 6 saatte Fogarty balon kateteriyle acil embolektomi',
        pearl: 'Motor kayıp yani paralizi gelişimi ekstremitenin geri dönüşsüz iskemi eşiğine yaklaştığını gösteren en kritik alarmdır.',
        trapFalse: 'heparin başlanması kontrendikedir ve tanı için günler süren konvansiyonel Doppler takibi yapılır',
        trapHighlight: 'heparin başlanması kontrendikedir',
      },
      {
        name: 'Derin ven trombozu',
        target: 'Staz, endotel hasarı ve hiperkoagülabiliteden oluşan Virchow triadı zemininde derin bacak venlerinde trombüs oluşumu',
        hallmark: 'Tek taraflı baldır ödemi, çap artışı, ısı artışı, ağrı ve kompresyon ultrasonografisinde venin kollabe olmaması',
        vignette:
          'Diz protezi ameliyatından 6 gün sonra taburcu edilen 66 yaşındaki kadın hasta sağ bacağında son 2 gündür artan tek taraflı şişlik, gerginlik ve baldır ağrısıyla başvuruyor. Sağ baldır çevresi soldan 4 cm daha geniş ölçülüyor ve venöz Doppler’de femoral ven prob basısıyla kapanmıyor',
        clues: ['diz protezi ameliyatından 6 gün sonra', 'sağ baldır çevresi soldan 4 cm geniş', 'femoral ven prob basısıyla kapanmıyor'],
        management: 'Pulmoner emboliyi önlemek için derhal düşük molekül ağırlıklı heparin veya direkt oral antikoagülan başlanması',
        pearl: 'En spesifik ultrasonografi bulgusu venin kompresyona yanıt vermemesidir; akut dönemde pıhtıyı koparabileceği için agresif bacak masajı yapılmaz.',
        trapFalse: 'ödemi dağıtmak için bacağa yoğun masaj uygulanır ve kesin tanı için sadece D-dimer yeterlidir',
        trapHighlight: 'bacağa yoğun masaj uygulanır',
      },
      {
        name: 'Buerger hastalığı',
        target: 'Yoğun tütün kullanımına aşırı immün-inflamatuvar yanıtla küçük ve orta çaplı distal arter-venlerin segmental tromboanjitisi',
        hallmark: '40 yaş altı ağır sigara içicisinde ayak parmaklarında ağrılı iskemik ülserler, gezici yüzeyel tromboflebit ve tirbuşon kollateraller',
        vignette:
          'Günde iki paket sigara içen 34 yaşındaki erkek hasta yürürken ayak tabanında kramp (instep klodikasyon), el-ayak parmaklarında soğukluk, sağ ayak başparmağında ağrılı nekrotik yara ve bacağında yer değiştiren kızarık damar sertlikleriyle başvuruyor. Anjiyografide distal damarlarda tirbuşon şeklinde kollateraller görülüyor',
        clues: ['günde iki paket sigara içen 34 yaşındaki erkek', 'yer değiştiren kızarık damar sertlikleri', 'tirbuşon şeklinde kollateraller'],
        management: 'Hastalığın ilerlemesini ve amputasyonu durduran tek kesin tedavi olarak tütün ve nikotin ürünlerinin tamamen bırakılması',
        pearl: 'Aterosklerozdan farklı olarak proksimal büyük damarlar korunur ve distal arterlerde segmental inflamatuvar tıkanma izlenir.',
        trapFalse: 'sigara kesilse bile cerrahi bypass ile kesin kür sağlanır ve tipik olarak 70 yaş üstünde görülür',
        trapHighlight: 'tipik olarak 70 yaş üstünde görülür',
      },
    ],
  },

  // 28. Postoperatif ateş nedenleri
  {
    branchId: 'cerrahi',
    subTopic: 'Postoperatif Ateş Nedenleri (5W Kuralı)',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Postoperatif atelektazi',
        target: 'Genel anestezi ve kesi ağrısına bağlı sığ solunum sonucu bazal akciğer alveollerinin kollabe olması',
        hallmark: 'Ameliyat sonrası ilk 24-48 saatte çıkan ateş, akciğer bazallerinde solunum sesi azalması ve lineer bazal opasite',
        vignette:
          'Açık kolesistektomi geçiren 54 yaşındaki obez erkek hastada ameliyattan 28 saat sonra 38.2 °C ateş yükseliyor. Kesi ağrısı nedeniyle derin nefes alamayan hastanın her iki akciğer alt zonlarında solunum sesleri azalmış ve ince raller duyuluyor; yara yeri temiz, kateteri çekilmiş saptanıyor',
        clues: ['ameliyattan 28 saat sonra 38.2 °C ateş', 'kesi ağrısı nedeniyle derin nefes alamayan', 'alt zonlarında solunum sesleri azalmış'],
        management: 'Etkin analjezi, erken mobilizasyon, derin nefes egzersizleri ve teşvik edici spirometri; rutin antibiyotik başlanmaz',
        pearl: 'İlk 48 saat içindeki ateşin en sık nedenidir ve enfeksiyon değil mekanik alveol kollapsı olduğundan antibiyotik gereksizdir.',
        trapFalse: 'en sık ameliyat sonrası 7. günde görülür ve ilk basamak tedavisi geniş spektrumlu intravenöz antibiyotiktir',
        trapHighlight: 'ilk basamak tedavisi geniş spektrumlu intravenöz antibiyotiktir',
      },
      {
        name: 'Postoperatif idrar yolu enfeksiyonu',
        target: 'Üretral Foley kateterizasyon nedeniyle üropatojenlerin mesaneye asendan kolonizasyonu',
        hallmark: 'Postoperatif 3. gün civarında ateş, dizüri, suprapubik hassasiyet ve idrar kültüründe piyüri ile bakteriüri',
        vignette:
          'Pelvik cerrahi sonrası üç gündür Foley sondası takılı olan 58 yaşındaki kadın hastada postoperatif 3. günde 38.4 °C ateş, alt karında hassasiyet ve bulanık idrar gelişiyor. İdrar mikroskopisinde bol lökosit ve nitrit pozitifliği saptanıyor',
        clues: ['üç gündür Foley sondası takılı', 'postoperatif 3. günde ateş', 'bol lökosit ve nitrit pozitifliği'],
        management: 'Mümkünse sondanın hemen çekilmesi ve idrar kültürü alınarak etkene yönelik antibiyotik tedavisi',
        pearl: 'Kateter süresi uzadıkça risk her gün artar; en etkili koruma gereksiz kateterlerin ameliyathanede veya 24 saat içinde çıkarılmasıdır.',
        trapFalse: 'kateter yerinde kalmaya devam etmeli ve kültür alınmadan profilaktik vankomisin verilmelidir',
        trapHighlight: 'kateter yerinde kalmaya devam etmeli',
      },
      {
        name: 'Postoperatif derin ven trombozu',
        target: 'Cerrahi stres, immobilizasyon ve endotel travmasının derin bacak venlerinde trombozu tetiklemesi',
        hallmark: 'Postoperatif 4-6. günlerde açıklanamayan subfebril ateş, tek taraflı bacak ödemi ve venöz Doppler’de trombüs',
        vignette:
          'Total kalça protezi sonrası 5 gündür yatak istirahatinde olan 68 yaşındaki kadın hastada 37.9 °C subfebril ateş ve sol bacakta hafif gerginlikle şişlik fark ediliyor. Akciğerleri ve kesi yeri tamamen temiz olan hastada kompresyon ultrasonografisinde popliteal vende trombüs görülüyor',
        clues: ['5 gündür yatak istirahatinde', 'akciğerleri ve kesi yeri tamamen temiz', 'popliteal vende trombüs'],
        management: 'Cerrahi kanama riski izin veriyorsa terapötik doz antikoagülasyon; aktif kanama varsa geçici vena kava inferior filtresi',
        pearl: 'Postoperatif ateş odağı karında ve akciğerde bulunamazsa alt ekstremiteler ve venöz sistem mutlaka muayene edilmelidir.',
        trapFalse: 'ameliyat sonrası ilk 12 saatte gelişir ve sadece kompresyon çorabı ile tedavi edilir',
        trapHighlight: 'sadece kompresyon çorabı ile tedavi edilir',
      },
      {
        name: 'Cerrahi alan enfeksiyonu',
        target: 'İnsizyon sahasında cilt florası veya enterik bakterilerin proliferasyonuyla gelişen pürülan yara enfeksiyonu',
        hallmark: 'Postoperatif 5-7. günlerde kesi hattında kızarıklık, şişlik, ısı artışı, hassasiyet ve pürülan akıntı',
        vignette:
          'Acil apendektomi geçiren 42 yaşındaki erkek hastada ameliyatın 6. gününde 38.7 °C ateş başlıyor. Karın muayenesinde kesi hattı boyunca eritem, lokal ısı artışı, hassasiyet ve dikişlerin arasından kötü kokulu pürülan sıvı sızdığı görülüyor',
        clues: ['ameliyatın 6. gününde ateş', 'kesi hattı boyunca eritem ve hassasiyet', 'dikişlerin arasından pürülan sıvı'],
        management: 'Yara dikişlerinin açılarak apsenin tamamen drene edilmesi, ıslak-kuru pansuman ve çevre selülit veya sistemik bulgu varsa antibiyotik',
        pearl: 'İlk 24-48 saatte şiddetli ağrı ve berrak kahverengi akıntıyla gelişen nadir enfeksiyonlarda A grubu streptokok veya Clostridium perfringens düşünülmelidir.',
        trapFalse: 'dikişler kesinlikle açılmadan sadece topikal antibiyotikli krem sürülerek kapalı izlenir',
        trapHighlight: 'dikişler kesinlikle açılmadan',
      },
      {
        name: 'Anastomoz kaçağı',
        target: 'Gastrointestinal rezeksiyon sonrası anastomoz hattında iskemi, gerginlik veya teknik kusur nedeniyle tam kat ayrılma',
        hallmark: 'Postoperatif 5-8. günlerde yeni ateş, taşikardi, lökositoz, karın ağrısı ve drenden enterik veya fekaloid içerik gelmesi',
        vignette:
          'Rektum kanseri nedeniyle aşağı anterior rezeksiyon yapılan 64 yaşındaki erkek hasta 6. günde aniden gelişen 39.0 °C ateş, 124/dk taşikardi, şiddetli karın ağrısı ve batın dreninden bulanık dışkı kokulu sıvı gelmesiyle değerlendiriliyor',
        clues: ['6. günde 39.0 °C ateş ve 124/dk taşikardi', 'drenden bulanık dışkı kokulu sıvı', 'aşağı anterior rezeksiyon yapılan'],
        management: 'Acil sıvı ve geniş spektrumlu antibiyotik başlanması; sınırlı küçük kaçakta perkütan drenaj, yaygın peritonitte acil relaparotomi ve saptırıcı stoma',
        pearl: 'Açıklanamayan taşikardi bazen ateş ve karın ağrısından saatler önce bile anastomoz ayrışmasının en erken uyarıcı bulgusu olabilir.',
        trapFalse: 'genellikle ilk 12 saat içinde görülür ve tek başına oral beslenmeye geçilmesiyle kendiliğinden kapanır',
        trapHighlight: 'tek başına oral beslenmeye geçilmesiyle kendiliğinden kapanır',
      },
    ],
  },
];
