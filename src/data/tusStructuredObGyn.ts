import { StructuredClusterSeed } from './tusTypes';

export const STRUCTURED_OBGYN_CLUSTERS: StructuredClusterSeed[] = [
  // 1. Üçüncü trimester kanamaları (ÖSYM Twin 1)
  {
    branchId: 'kadindogum',
    subTopic: 'Üçüncü Trimester Obstetrik Kanamaları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Plasenta previa',
        target: 'Plasentanın internal servikal osu kısmen veya tamamen örtecek şekilde alt uterin segmente implante olması',
        hallmark: 'Üçüncü trimesterde uterus tonusu yumuşak ve ağrısız ani parlak kırmızı vajinal kanama',
        vignette:
          '33. gebelik haftasında olan 31 yaşındaki multipar gebe kadın evde dinlenirken aniden başlayan ağrısız, parlak kırmızı vajinal kanama ile başvuruyor. Vital bulguları stabil ve fetal kalp atımları reaktif olan hastanın karın muayenesinde uterus yumuşak ve hassasiyetsiz saptanıyor',
        clues: ['ağrısız parlak kırmızı vajinal kanama', 'uterus yumuşak ve hassasiyetsiz', '33. gebelik haftasında'],
        management: 'Vajinal tuşeden kesinlikle kaçınılarak transvajinal ultrasonla tanı konulması; kanama durursa tokoliz-steroid ile 36-37. haftada planlı sezaryen',
        pearl: 'Üçüncü trimester kanamasında ultrasonla plasenta yerleşimi görülmeden dijital servikal muayene yapmak masif hemorajiyi tetikleyebileceğinden mutlak kontrendikedir.',
        trapFalse: 'tanıyı hızlandırmak için acilde hemen dijital servikal tuşe yapılmalı ve doğum yolu olarak vajinal doğum tercih edilmelidir',
        trapHighlight: 'acilde hemen dijital servikal tuşe yapılmalı',
      },
      {
        name: 'Ablasyo plasenta',
        target: 'Desidua bazalisteki spiral arteriyol rüptürü sonucu plasentanın fetus doğmadan erken ayrılması',
        hallmark: 'Ağrılı koyu kırmızı kanama, tahta sertliğinde tetanik uterus, fetal distres ve tüketim koagülopatisi',
        vignette:
          'Kronik kan basıncı yüksekliği ve sigara öyküsü olan 36. gebelik haftasındaki 34 yaşındaki gebe şiddetli sürekli karın ağrısı ve koyu renkli vajinal kanama ile acile getiriliyor. Muayenede uterus tahta gibi sert ve gevşemeyen tetanik kasılmada saptanıyor; KTG’de geç deselerasyonlar ve laboratuvarda fibrinojen düşüklüğü görülüyor',
        clues: ['şiddetli sürekli karın ağrısı ve koyu kanama', 'uterus tahta gibi sert ve tetanik', 'fibrinojen düşüklüğü'],
        management: 'Geniş damar yolundan sıvı ve kan ürünü resüsitasyonu, fetal distres veya maternal instabilitede acil sezaryen; fetus ölü ve anne stabilse vajinal doğum',
        pearl: 'Gizli retroplasental hematom varlığında dışarıya az kanama gelse bile anne ağır hipovolemik şok ve DİK tablosuna girebilir.',
        trapFalse: 'ağrısız parlak kırmızı kanamayla seyreder ve muayenede uterus her zaman yumuşaktır',
        trapHighlight: 'ağrısız parlak kırmızı kanamayla seyreder',
      },
      {
        name: 'Vaza previa',
        target: 'Koruyucu Wharton jeli olmayan fetal damarların internal servikal os üzerinden membranlar içinde seyretmesi',
        hallmark: 'Amniyon kesesinin açılmasıyla eş zamanlı ağrısız kanamayı izleyen ani fetal bradikardi veya sinüzoidal trase',
        vignette:
          '38. gebelik haftasında aktif doğum eyleminde olan 28 yaşındaki gebenin spontan membran rüptürü gerçekleştiği anda taze kırmızı vajinal kanama başlıyor ve saniyeler içinde fetal kalp atım hızı 60 atım/dk’ya düşüyor. Annenin nabzı ve tansiyonu ise tamamen stabil kalıyor',
        clues: ['spontan membran rüptürü gerçekleştiği anda', 'fetal kalp atım hızı 60 atım/dk', 'annenin nabzı ve tansiyonu stabil'],
        management: 'Prenatal renkli Doppler ile saptanmışsa 34-37. haftada planlı sezaryen; rüptür anında anne stabil olsa bile fetal kaybı önlemek için acil sezaryen',
        pearl: 'Kanayan damarlar fetal dolaşıma ait olduğu için çok az miktardaki kan kaybı bile bebeği dakikalar içinde eksanguinasyona götürür; Apt testi fetal hemoglobini doğrular.',
        trapFalse: 'kanama maternal kaynaklıdır ve fetusta anemi gelişmesi beklenmez',
        trapHighlight: 'kanama maternal kaynaklıdır',
      },
      {
        name: 'Uterin rüptür',
        target: 'Önceki klasik sezaryen skarı veya aşırı oksitosin uyarısı zemininde tüm uterus duvar katlarının tam kat ayrılması',
        hallmark: 'Doğum sırasında ani yırtıcı karın ağrısı, kontraksiyonların durması, fetal kısımların batın altında ele gelmesi ve derin bradikardi',
        vignette:
          'Daha önce dikey klasik kesiyle sezaryen geçirmiş 39. haftadaki gebe vajinal doğum denemesi sırasında aniden göğüs altına vuran bıçak saplanır tarzda karın ağrısı hissediyor. Monitörde daha önce düzenli olan uterus kasılmalarının birden durduğu, fetal başın pelvisten yukarı çekildiği ve şiddetli fetal bradikardi geliştiği saptanıyor',
        clues: ['dikey klasik kesiyle sezaryen geçirmiş', 'uterus kasılmalarının birden durduğu', 'fetal başın pelvisten yukarı çekildiği'],
        management: 'Derhal acil laparotomi ile fetusun doğurtulması ve yırtığın cerrahi onarımı veya kanama kontrolsüzse histerektomi',
        pearl: 'En sık risk faktörü geçirilmiş uterus cerrahisidir; doğum sırasındaki ani fetal kalp hızı bozulması en erken ve güvenilir uyarıcı işarettir.',
        trapFalse: 'kasılmalar giderek şiddetlenir, fetal baş hızla aşağı iner ve vajinal doğumla tamamlanır',
        trapHighlight: 'kasılmalar giderek şiddetlenir, fetal baş hızla aşağı iner',
      },
      {
        name: 'Plasenta akreta spektrumu',
        target: 'Desidua bazalisin yetersizliği nedeniyle koryon villuslarının doğrudan miyometriyuma anormal yapışması veya invazyonu',
        hallmark: 'Önceki sezaryen artı ön duvar plasenta yerleşimli gebede ultrasonda vasküler lakünler ve doğumda plasentanın ayrılamaması',
        vignette:
          'Üç kez sezaryen geçirmiş olan 35 yaşındaki gebenin ikinci trimester ultrasonunda plasentanın anterior alt segmentte eski kesi skarı üzerine yerleştiği, retroplasental hipoekoik alanın kaybolduğu ve çok sayıda geniş plasental lakün bulunduğu görülüyor',
        clues: ['üç kez sezaryen geçirmiş', 'retroplasental hipoekoik alanın kaybolduğu', 'çok sayıda geniş plasental lakün'],
        management: 'Plasentayı elle çıkarmaya zorlamadan 34-35. haftada multidisipliner ekip eşliğinde planlı sezaryen histerektomi',
        pearl: 'Miyometriyuma invaze plasentayı manuel olarak ayırmaya çalışmak kontrolsüz ve ölümcül pelvik kanamaya yol açar.',
        trapFalse: 'doğumda bebeğin çıkışından sonra plasenta elle sıyrılarak kolayca çıkarılır ve uterus korunur',
        trapHighlight: 'plasenta elle sıyrılarak kolayca çıkarılır',
      },
    ],
  },

  // 2. İlk trimester kanamaları ve ektopik gebelik (ÖSYM Twin 2)
  {
    branchId: 'kadindogum',
    subTopic: 'İlk Trimester Kanamaları ve Ektopik Gebelik',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Ektopik gebelik',
        target: 'Embriyonun en sık tuba uterinanın ampulla bölgesine anormal yerleşmesi',
        hallmark: 'Adet gecikmesi, tek taraflı pelvik ağrı, ayrım zonu üzeri beta-hCG’de boş uterus ve adneksiyal kitle',
        vignette:
          'Pelvik inflamatuvar hastalık öyküsü olan 27 yaşındaki kadın 6 haftalık adet gecikmesi, lekelenme tarzında kanama ve sağ alt kadranda keskin ağrıyla başvuruyor. Serum beta-hCG düzeyi 3400 mIU/mL ölçülürken transvajinal ultrasonda uterus boş görülüyor ve sağ adnekste halka şeklinde kitle saptanıyor',
        clues: ['beta-hCG düzeyi 3400 mIU/mL', 'transvajinal ultrasonda uterus boş', 'sağ adnekste halka şeklinde kitle'],
        management: 'Hemodinamik stabil, rüptürsüz, <3.5 cm ve fetal kalp atımı yoksa tek doz sistemik metotreksat; rüptür veya şokta acil laparoskopik salpenjektomi',
        pearl: 'Ayrım zonunun (3500 mIU/mL) üzerinde uterin kavitede gebelik kesesi görülmemesi ve 48 saatte beta-hCG’nin <%50 yükselmesi yüksek olasılıklı dış gebelik göstergesidir.',
        trapFalse: 'en sık yerleşim yeri overdir ve rüptüre olmuş şoktaki hastada bile ilk seçenek sistemik metotreksattır',
        trapHighlight: 'rüptüre olmuş şoktaki hastada bile ilk seçenek sistemik metotreksattır',
      },
      {
        name: 'Komplet mol hidatiform',
        target: 'Çekirdeksiz boş bir ovumun tek veya iki spermle döllenmesi sonucu oluşan tamamen paternal kökenli 46,XX/XY trofoblast proliferasyonu',
        hallmark: 'Gebelik haftasından büyük uterus, çok yüksek beta-hCG, bilateral teka lutein kistleri ve ultrasonda kar fırtınası görünümü',
        vignette:
          '10 haftalık gebelik öyküsü olan 22 yaşındaki kadın şiddetli bulantı, koyu vajinal kanama ve üzüm tanesi benzeri veziküller düşürme şikayetiyle geliyor. Uterus 18 hafta büyüklüğünde ölçülüyor, beta-hCG 240.000 mIU/mL saptanıyor ve ultrasonda fetal kısım olmaksızın veziküler kar fırtınası paterni izleniyor',
        clues: ['üzüm tanesi benzeri veziküller', 'beta-hCG 240.000 mIU/mL', 'fetal kısım olmaksızın kar fırtınası paterni'],
        management: 'Vakum aspirasyon küretajı ile kavitenin boşaltılması, Rh negatifse anti-D verilmesi ve haftalık seri beta-hCG takibiyle 6-12 ay kontrasepsiyon',
        pearl: 'Yüksek hCG tiroidi uyardığı için hipertiroidi ve erken 20 hafta öncesi preeklampsi gelişebilir; komplet tipte gestasyonel trofoblastik neoplazi riski %15-20’dir.',
        trapFalse: 'karyotipi genellikle triploid 69,XXX olup içinde mutlaka fetal doku ve amniyon sıvısı bulunur',
        trapHighlight: 'karyotipi genellikle triploid 69,XXX olup içinde mutlaka fetal doku',
      },
      {
        name: 'Parsiyel mol hidatiform',
        target: 'Normal haploid bir oositin iki sperm tarafından döllenmesi sonucu gelişen triploid (69,XXY veya 69,XXX) gebelik',
        hallmark: 'Fetal doku veya eritrositlerin fokal hidropik koryonik villuslarla birlikte bulunması ve görece düşük neoplazi riski',
        vignette:
          '11 haftalık gebeliğinde vajinal kanama yaşayan 29 yaşındaki kadının ultrasonunda gelişme geriliği gösteren fetusla birlikte plasentada fokal kistik alanlar görülüyor. Küretaj materyalinin patolojisinde fetal dokulara eşlik eden fokal hidropik villuslar ve karyotipte 69,XXY saptanıyor',
        clues: ['gelişme geriliği gösteren fetusla birlikte', 'fokal hidropik villuslar', 'karyotipte 69,XXY'],
        management: 'Vakum küretaj sonrası malign trofoblastik dönüşüm ihtimaline karşı beta-hCG negatifleşene kadar haftalık seri izlem',
        pearl: 'Fetal yapı bulunduğundan sıklıkla missed veya inkomplet abortus sanılır; histopatoloji ve seri hCG takibi bu nedenle şarttır.',
        trapFalse: 'tamamen paternal kromozom taşır ve gestasyonel trofoblastik neoplaziye dönüşüm oranı %25’in üzerindedir',
        trapHighlight: 'tamamen paternal kromozom taşır',
      },
      {
        name: 'Kaçınılmaz düşük',
        target: 'Gebelik ürününün atılmadan önce internal servikal osun açılması ve amniyotik zarların yırtılması',
        hallmark: 'İlk trimesterde artan kramp tarzı ağrı, kanama ve muayenede servikal açıklık olmasına karşın henüz doku düşmemiş olması',
        vignette:
          '9 haftalık gebeliği olan 30 yaşındaki kadın giderek sıklaşan alt karın krampları ve yoğun vajinal kanama ile başvuruyor. Spekulum ve tuşe muayenesinde servikal kanalın açık olduğu, gebelik kesesinin alt segmente doğru indiği ancak henüz dışarı atılmadığı görülüyor',
        clues: ['giderek sıklaşan alt karın krampları', 'servikal kanalın açık olduğu', 'henüz dışarı atılmadığı'],
        management: 'Gebeliğin devamı mümkün olmadığından hastanın tercihine göre ekspektan izlem, mizoprostol veya vakum aspirasyon küretajı',
        pearl: 'İmminens (düşük tehdidi) tablosunda serviks kapalı iken, burada internal servikal açıklık kesinleşmiştir ve gebelik kurtarılamaz.',
        trapFalse: 'servikal os tamamen kapalıdır ve yatak istirahati artı progesteronla gebeliğin devamı sağlanır',
        trapHighlight: 'servikal os tamamen kapalıdır',
      },
      {
        name: 'Septik abortus',
        target: 'Steril olmayan düşük girişimi veya içeride kalan gebelik dokusu zemininde polimikrobiyal endomyometrit ve bakteriyemi',
        hallmark: 'Düşük sonrası yüksek ateş, pis kokulu pürülan akıntı, uterus hassasiyeti ve hızla ilerleyen septik şok',
        vignette:
          'Bir hafta önce yasa dışı girişimle düşük yapan 24 yaşındaki kadın 39.4 °C ateş, titreme, kötü kokulu akıntı, şiddetli pelvik ağrı ve 80/45 mmHg hipotansiyonla acile getiriliyor. Muayenede uterus yumuşak, ileri derecede hassas ve serviks hareketleri ağrılı saptanıyor',
        clues: ['39.4 °C ateş ve kötü kokulu akıntı', 'uterus ileri derecede hassas', '80/45 mmHg hipotansiyon'],
        management: 'Derhal geniş spektrumlu IV antibiyotiklerin (klindamisin-gentamisin veya ampisilin-sulbaktam) başlanması ve enfekte materyalin vakum küretajla acil boşaltılması',
        pearl: 'Enfeksiyon odağı içeride kaldığı sürece antibiyotikler tek başına yetmez; antibiyotik yüklemesinin hemen ardından uterin kavite boşaltılmalıdır.',
        trapFalse: 'enfeksiyonu yaymamak için uterin kavite boşaltılması ateş düştükten 1 hafta sonraya ertelenir',
        trapHighlight: 'ateş düştükten 1 hafta sonraya ertelenir',
      },
    ],
  },

  // 3. Gebeliğin hipertansif hastalıkları (ÖSYM Twin 3)
  {
    branchId: 'kadindogum',
    subTopic: 'Gebeliğin Hipertansif Hastalıkları',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Kronik hipertansiyon',
        target: 'Gebelikten önce mevcut olan veya 20. gebelik haftasından önce saptanan kalıcı sistemik kan basıncı yüksekliği',
        hallmark: 'Gebeliğin ilk yarısında 140/90 mmHg üzeri tansiyon değerleri ve doğum sonrası 12. haftadan sonra da devam etmesi',
        vignette:
          '36 yaşındaki kadın 11. gebelik haftasındaki ilk antenatal kontrolünde iki ayrı ölçümde kan basıncı 152/96 mmHg saptanıyor. Daha önce düzensiz tansiyon ilaçları kullandığını belirten hastanın idrar protein/kreatinin oranı ve karaciğer-böbrek testleri normal bulunuyor',
        clues: ['11. gebelik haftasındaki ilk antenatal kontrolünde', 'iki ayrı ölçümde 152/96 mmHg', 'idrar protein/kreatinin oranı normal'],
        management: 'Teratojenik ACE inhibitörü/ARB kesilerek labetalol, nifedipin veya metildopa kullanılması ve 12. haftadan itibaren düşük doz aspirin başlanması',
        pearl: 'Gebelik ortasındaki fizyolojik vazodilatasyon nedeniyle ilk/ikinci trimesterde tansiyon geçici düşebilir; ancak 12. postpartum haftada yüksek kalması tanıyı doğrular.',
        trapFalse: '20. gebelik haftasından sonra ortaya çıkar ve tedavide ACE inhibitörleri ilk tercihtir',
        trapHighlight: '20. gebelik haftasından sonra ortaya çıkar ve tedavide ACE inhibitörleri ilk tercihtir',
      },
      {
        name: 'Gestasyonel hipertansiyon',
        target: '20. gebelik haftasından sonra başlayan ancak proteinüri ve sistemik organ hasarı olmadan seyreden gebeliğe özgü vazomotor yanıt',
        hallmark: 'Önceden normotansif gebede gebeliğin ikinci yarısında yeni tansiyon yüksekliği ve normal trombosit-enzim-proteinüri profili',
        vignette:
          'İlk gebeliğinde 34. haftaya kadar tüm ölçümleri 110/70 mmHg seyreden 26 yaşındaki kadında 35. haftada kan basıncı 148/94 mmHg bulunuyor. Baş ağrısı, görme bozukluğu veya epigastrik ağrısı olmayan hastanın spot idrar protein/kreatinin oranı 0.12, trombositleri 240.000 ve AST-ALT normal ölçülüyor',
        clues: ['35. haftada kan basıncı 148/94 mmHg', 'protein/kreatinin oranı 0.12', 'trombosit ve AST-ALT normal'],
        management: 'Haftalık laboratuvar ve fetal büyüme takibi, ağır değer yoksa 37. gebelik haftasında doğum ve postpartum 12. haftada normale dönüş kontrolü',
        pearl: 'Proteinüri veya uç organ hasarı gelişirse ağır tabloya dönüşür; postpartum 12. haftada düzelmezse tanı altta yatan kronik forma çevrilir.',
        trapFalse: 'tanı için 24 saatlik idrarda mutlaka 300 mg üzeri proteinüri bulunması şarttır',
        trapHighlight: 'mutlaka 300 mg üzeri proteinüri bulunması şarttır',
      },
      {
        name: 'Ağır özellikli preeklampsi',
        target: 'Spiral arterlerin trofoblastik invazyon yetersizliği sonucu yaygın endotel hasarı, vazospazm ve çoklu organ disfonksiyonu',
        hallmark: '160/110 mmHg üzeri tansiyon, şiddetli baş ağrısı, görme bulanıklığı, trombositopeni, karaciğer enzim veya kreatinin artışı',
        vignette:
          '33. gebelik haftasındaki primigravid 29 yaşındaki kadın şiddetli alın baş ağrısı, göz önünde sinek uçuşmaları ve sağ üst kadran ağrısıyla başvuruyor. Kan basıncı 172/114 mmHg, trombosit 88.000/mm³, AST 145 U/L ve serum kreatinin 1.4 mg/dL ölçülüyor',
        clues: ['şiddetli alın baş ağrısı ve görme bulgusu', 'kan basıncı 172/114 mmHg', 'trombosit 88.000 ve kreatinin 1.4 mg/dL'],
        management: 'Konvülziyon profilaksisi için IV magnezyum sülfat, IV labetalol/hidralazin/oral nifedipin ile tansiyon kontrolü ve 34. haftada veya anne-fetus instabilitesinde doğum',
        pearl: 'Ağır özelliklerin herhangi biri varsa tanı koymak için proteinüri varlığı şart değildir; magnezyum sülfat tansiyonu düşürmez, nöbeti önler.',
        trapFalse: 'magnezyum sülfat yalnızca kan basıncını düşürmek amacıyla kullanılır ve kesin doğum gerektirmez',
        trapHighlight: 'yalnızca kan basıncını düşürmek amacıyla kullanılır',
      },
      {
        name: 'Eklampsi',
        target: 'Gebelikte serebral otoregülasyon kaybı, vazospazm ve hipertansif ensefalopati sonucu oluşan jeneralize tonik-klonik nöbet',
        hallmark: 'Gebelik veya erken postpartum dönemde epilepsi dışı ani jeneralize konvülziyon gelişmesi',
        vignette:
          '36. gebelik haftasındaki 24 yaşındaki gebe evde başlayan şiddetli baş ağrısı ve görme bulanıklığı ardından acil servise girerken 90 saniye süren jeneralize tonik-klonik nöbet geçiriyor. Kan basıncı 180/115 mmHg ve idrarda 3+ proteinüri saptanıyor',
        clues: ['36. gebelik haftasındaki gebe', '90 saniye süren jeneralize tonik-klonik nöbet', 'kan basıncı 180/115 mmHg'],
        management: 'Sol yan pozisyon ve hava yolu güvenliği, acil IV magnezyum sülfat (4-6 g yükleme, 1-2 g/saat idame), kan basıncı kontrolü ve stabilizasyon sonrası doğum',
        pearl: 'Nöbeti durdurmada ve tekrarı önlemede magnezyum sülfat diazepam ve fenitoinden kesin olarak üstündür; magnezyum toksisitesinde ilk bulgu patella refleksi kaybı, antidotu kalsiyum glukonattır.',
        trapFalse: 'ilk tercih antikonvülzan ajan diazepamdır ve magnezyum sülfat toksisitesinin antidotu sodyum bikarbonattır',
        trapHighlight: 'ilk tercih antikonvülzan ajan diazepamdır',
      },
      {
        name: 'HELLP sendromu',
        target: 'Hepatik sinüzoidlerde fibrin birikimi ve endotelyal hasara bağlı mikroanjiyopatik hemolitik anemi ile trombosit tüketimi',
        hallmark: 'Epigastrik-sağ üst kadran ağrısı, periferik yaymada şistozitlerle hemoliz, yüksek AST-ALT ve 100.000/mm³ altı trombositopeni',
        vignette:
          '31. gebelik haftasındaki 32 yaşındaki kadın son 24 saattir şiddetlenen mide üstü ve sağ kaburga altı ağrısı, bulantı-kusma ile geliyor. Tansiyonu 145/92 mmHg olan hastanın hemoglobin 8.4 g/dL, LDH 1120 U/L, yaymada şistozitler, AST 340 U/L ve trombosit 54.000/mm³ bulunuyor',
        clues: ['sağ kaburga altı ağrısı', 'LDH 1120 U/L ve yaymada şistozitler', 'AST 340 U/L ve trombosit 54.000'],
        management: 'IV magnezyum sülfat başlanması, şiddetli hipertansiyonun kontrolü ve gebelik haftasından bağımsız maternal stabilizasyon sonrası derhal doğum',
        pearl: 'Olguların yaklaşık %15-20’sinde kan basıncı normal veya sınırda yüksek olabilir ve proteinüri bulunmayabilir; karaciğer subkapsüler hematom rüptürü ölümcül komplikasyondur.',
        trapFalse: 'tanı için mutlaka 160/110 mmHg üzeri tansiyon gereklidir ve 34 hafta altında steroid tamamlamak için günlerce beklenir',
        trapHighlight: '34 hafta altında steroid tamamlamak için günlerce beklenir',
      },
    ],
  },

  // 4. Postpartum kanama ve doğum komplikasyonları
  {
    branchId: 'kadindogum',
    subTopic: 'Postpartum Kanama ve Doğum Komplikasyonları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Uterin atoni',
        target: 'Doğum sonrası miyometriyum kas liflerinin kasılamaması nedeniyle plasenta yatağındaki spiral arterlerin mekanik olarak kapanamaması',
        hallmark: 'Postpartum kanamanın en sık nedeni olup muayenede göbek üzerinde yumuşak, gevşek ve büyük uterus palpe edilmesi',
        vignette:
          'Uzamış indüksiyon ve ikiz gebelik sonrası 4200 gram bebek doğuran 29 yaşındaki kadında plasenta tam ayrıldıktan hemen sonra yoğun vajinal kanama başlıyor. Karın muayenesinde uterus fundusu göbeğin 4 cm üzerinde, oldukça yumuşak ve hamur kıvamında hissediliyor',
        clues: ['uzamış indüksiyon ve ikiz gebelik', 'yoğun vajinal kanama', 'uterus fundusu yumuşak ve hamur kıvamında'],
        management: 'Bimanüel uterus masajı, IV oksitosin infüzyonu, metilergonovin (hipertansiyonda kontrendike), karboprost (astımda kontrendike), traneksamik asit ve Bakri balonu',
        pearl: 'Postpartum kanamaların %70-80’inin nedenidir; hipertansif hastada ergot alkaloidleri, astımlı hastada ise prostaglandin F2-alfa kullanılmaz.',
        trapFalse: 'muayenede uterus taş gibi sert ve kontraktedir; hipertansif hastada ilk uterotonik metilergonovindir',
        trapHighlight: 'hipertansif hastada ilk uterotonik metilergonovindir',
      },
      {
        name: 'Genital trakt laserasyonu',
        target: 'Forseps-vakum müdahalesi, makrozomi veya hızlı ekspulsiyon sırasında serviks, vajen ya da perinede derin doku yırtığı',
        hallmark: 'Uterusun tamamen sert ve kontrakte olmasına rağmen kesintisiz parlak kırmızı vajinal kanama sürmesi',
        vignette:
          'Vakum yardımıyla hızlı vajinal doğum yapan 25 yaşındaki primipar kadında plasenta bütün olarak çıktıktan sonra aktif parlak kırmızı kanama devam ediyor. Yapılan karın muayenesinde uterusun sert, küçük ve göbek altında tam kontrakte olduğu görülüyor',
        clues: ['vakum yardımıyla hızlı vajinal doğum', 'aktif parlak kırmızı kanama devam ediyor', 'uterusun sert ve tam kontrakte olduğu'],
        management: 'Yeterli aydınlatma ve ekartasyon altında servikal ve vajinal duvarların dikkatli eksplorasyonu ile yırtığın hemen primer sütüre edilmesi',
        pearl: 'Sert kontrakte bir uterusa rağmen devam eden parlak kırmızı kanama aksini kanıtlayana kadar yırtık veya koagülopati işaretidir.',
        trapFalse: 'tedavide ilk yapılması gereken bimanüel uterus masajı ve Bakri balonu yerleştirmektir',
        trapHighlight: 'bimanüel uterus masajı ve Bakri balonu yerleştirmektir',
      },
      {
        name: 'Plasenta retansiyonu',
        target: 'Üçüncü evrenin 30 dakikayı geçmesine rağmen plasentanın ayrılamaması veya kotiledon parçasının kavitede kalması',
        hallmark: 'Plasenta muayenesinde eksik kotiledon saptanması veya ultrasonda uterin kavitede ekojenik kalıntı doku',
        vignette:
          'Vajinal doğumdan 45 dakika sonra aşırı kanama gelişen 33 yaşındaki kadının çıkarılan plasentası incelendiğinde maternal yüzde bir kotiledon parçasının eksik olduğu ve kenardan kopmuş damar ucunun bulunduğu fark ediliyor',
        clues: ['bir kotiledon parçasının eksik olduğu', 'kenardan kopmuş damar ucunun bulunduğu', 'doğumdan 45 dakika sonra kanama'],
        management: 'Uygun analjezi/anestezi altında elle plasenta halası veya ultrason eşliğinde künt küretaj ve profilaktik antibiyotik',
        pearl: 'Her doğum sonrası çıkarılan plasenta mutlaka eksiksiz kotiledon sayısı ve aksesuar lob damarları açısından kontrol edilmelidir.',
        trapFalse: 'içeride kalan plasenta parçasının kendiliğinden erimesi için 2 hafta beklenir',
        trapHighlight: 'kendiliğinden erimesi için 2 hafta beklenir',
      },
      {
        name: 'Uterin inversiyon',
        target: 'Ayrılmamış fundal plasentaya aşırı kord traksiyonu ve fundal bası uygulanmasıyla uterusun eldiven parmağı gibi ters yüz olması',
        hallmark: 'Vajen içinde veya dışarıda kitle görülmesi, karında fundusun alınamaması ve kanamayla orantısız derin nörojenik-hipovolemik şok',
        vignette:
          'Doğum sonrası plasenta ayrılmadan göbek kordonundan kuvvetle çekilmesi ardından 26 yaşındaki kadında ani derin hipotansiyon ve bradikardi gelişiyor. Karın muayenesinde uterus fundusu yerinde palpe edilemezken vajinal introitustan dışarı sarkan kırmızı-mor kitle görülüyor',
        clues: ['göbek kordonundan kuvvetle çekilmesi ardından', 'uterus fundusu yerinde palpe edilemezken', 'vajinal introitustan dışarı sarkan kitle'],
        management: 'Plasentayı ayırmadan ve uterotonikleri durdurarak derhal Johnson manevrasıyla manuel redüksiyon (gerekirse nitrogliserin veya terbutalinle gevşetme); redüksiyon sonrası oksitosin',
        pearl: 'Uterus yerine itilmeden plasenta sıyrılırsa ölümcül kanama olur ve redüksiyon öncesi oksitosin vermek servikal halkayı sıkıştırıp itmeyi imkansızlaştırır.',
        trapFalse: 'redüksiyondan önce mutlaka plasenta ayrılmalı ve hızlıca yüksek doz oksitosin verilmelidir',
        trapHighlight: 'redüksiyondan önce mutlaka plasenta ayrılmalı',
      },
      {
        name: 'Amniyon sıvı embolisi',
        target: 'Doğum veya sezaryen sırasında amniyon sıvısı ve fetal antijenlerin maternal dolaşıma geçerek anaflaktoid reaksiyon ve DİK başlatması',
        hallmark: 'Doğum sırasında ani dispne, siyanoz, derin kardiyovasküler kollaps ve dakikalar içinde fulminan tüketim koagülopatisi',
        vignette:
          'Zorlu doğum eylemi sırasında membran rüptürü sonrası 34 yaşındaki gebe aniden nefes alamadığını söyleyerek morarıyor, ardından kan basıncı ölçülemeyecek düzeye düşüyor ve kalp durması gelişiyor. Resüsitasyon sırasında damar yollarından ve uterus insizyonundan pıhtılaşmayan sızıntı kanama başlıyor',
        clues: ['ani dispne ve morarma', 'kardiyovasküler kollaps', 'pıhtılaşmayan sızıntı kanama'],
        management: 'Hemen ileri kardiyak yaşam desteği, entübasyon, oksijenasyon, masif transfüzyon (1:1:1 eritrosit-plazma-trombosit) ve perimortem acil sezaryen',
        pearl: 'Mekanik tıkanmadan ziyade şiddetli inflamatuvar-anafilaktoid şok ve koagülopati tablosudur; tanı klinik dışlama ile konur.',
        trapFalse: 'kesin tanı için doğum sırasında mutlaka akciğer perfüzyon sintigrafisi sonucu beklenir ve DİK görülmez',
        trapHighlight: 'mutlaka akciğer perfüzyon sintigrafisi sonucu beklenir',
      },
    ],
  },

  // 5. İntrapartum fetal kalp hızı paternleri ve doğum mekaniği (ÖSYM Twin 4)
  {
    branchId: 'kadindogum',
    subTopic: 'İntrapartum Fetal Kalp Hızı Paternleri ve Doğum Mekaniği',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Erken deselerasyon',
        target: 'Uterus kontraksiyonu sırasında fetal baş kompresyonunun kafa içi basıncını artırarak geçici vagal refleks uyarması',
        hallmark: 'Kontraksiyon başlangıcı, en derin noktası ve bitişiyle tamamen eş zamanlı simetrik ayna görüntüsü oluşturan benign düşüş',
        vignette:
          'Aktif doğum fazında servikal açıklığı 7 cm olan gebenin KTG trasesinde bazal hız 135 atım/dk, variabilite normal saptanıyor. Her uterus kasılması başladığında fetal kalp hızı kademeli olarak 110’a düşüyor, kasılmanın zirvesinde en düşük noktaya ulaşıyor ve kasılma bittiğinde bazale dönüyor',
        clues: ['servikal açıklığı 7 cm', 'kasılmanın zirvesinde en düşük noktaya ulaşıyor', 'kasılma bittiğinde bazale dönüyor'],
        management: 'Fetal hipoksi veya asidoz belirtisi olmadığından ek müdahale veya acil doğum gerektirmez; rutin doğum takibi sürdürülür',
        pearl: 'Kasılma eğrisinin tam ayna görüntüsü olan tek deselerasyon tipidir ve tamamen fizyolojik baş basısını yansıtır.',
        trapFalse: 'fetal hipoksemi ve asidozun en spesifik göstergesi olup acil sezaryen endikasyonudur',
        trapHighlight: 'acil sezaryen endikasyonudur',
      },
      {
        name: 'Geç deselerasyon',
        target: 'Uterus kasılmalarının intervillöz alan perfüzyonunu azaltması sonucu gelişen uteroplasental yetmezlik ve fetal hipoksemi',
        hallmark: 'Düşüşün başlangıcı ve dip noktasının kontraksiyon zirvesinden sonra gecikmeli geldiği üniform tekrarlayıcı düşüş',
        vignette:
          'Preeklampsi nedeniyle oksitosin indüksiyonu alan 38. haftadaki gebenin KTG’sinde her kasılmanın zirvesi geçtikten sonra fetal kalp hızının kademeli olarak düşmeye başladığı, kasılma bittikten sonra bazale yavaşça döndüğü ve variabilitenin azalmaya başladığı görülüyor',
        clues: ['kasılmanın zirvesi geçtikten sonra düşmeye başladığı', 'kasılma bittikten sonra bazale yavaşça döndüğü', 'variabilitenin azalmaya başladığı'],
        management: 'Sol yan pozisyon, oksitosinin durdurulması, IV sıvı bolusu, anneye oksijen, taşisistol varsa terbutalin ve variabilite kaybı sürerse acil doğum',
        pearl: 'Tekrarlayıcı olması ve özellikle azalmış veya kaybolmuş variabilite ile birlikte görülmesi fetal asidemi açısından yüksek risk taşır.',
        trapFalse: 'umblikal kord sıkışmasına bağlı ani V şeklinde düşüşlerdir ve amnioinfüzyon birincil tedavidir',
        trapHighlight: 'umblikal kord sıkışmasına bağlı ani V şeklinde düşüşlerdir',
      },
      {
        name: 'Değişken deselerasyon',
        target: 'Oligohidramniyos veya kordon dolanması zemininde kontraksiyon sırasında umblikal kord kompresyonu ve baroreseptör refleksi',
        hallmark: 'Kontraksiyonlarla zaman ilişkisi değişken olan, başlangıçtan dibe 30 saniyeden kısa sürede inen keskin V, W veya U düşüş',
        vignette:
          'Oligohidramniyos saptanan 40. haftadaki gebenin doğum eylemi sırasında KTG’de bazen kasılmalardan önce bazen kasılma ortasında aniden dik bir inişle 75 atım/dk’ya düşüp hızla normale dönen, farklı şekil ve sürelerde deselerasyonlar izleniyor',
        clues: ['oligohidramniyos saptanan', 'aniden dik bir inişle 75 atım/dk’ya düşüp hızla dönen', 'farklı şekil ve sürelerde'],
        management: 'Anne pozisyonunun değiştirilmesi, vajinal muayene ile kord sarkmasının dışlanması, oksitosinin kesilmesi ve tekrarlıyorsa amnioinfüzyon',
        pearl: 'En sık görülen intrapartum deselerasyondur; baş basısından değil geçici umblikal kord sıkışmasından kaynaklanır.',
        trapFalse: 'uteroplasental yetmezlik kaynaklıdır ve daima kasılma pikinden sonra yavaş bir iniş gösterir',
        trapHighlight: 'uteroplasental yetmezlik kaynaklıdır',
      },
      {
        name: 'Sinüzoidal patern',
        target: 'Ağır fetal anemi, fetomaternal kanama veya derin hipoksi-asidoz sonucu otonom kalp hızı kontrol kaybı',
        hallmark: 'Dakikada 3-5 dalga frekanslı, 5-15 atım amplitüdlü, beat-to-beat variabilitesi tamamen silinmiş düzgün sinüs dalgası',
        vignette:
          'Rh alloimmünizasyonu olan 35. haftadaki gebede fetal hareketlerin azalması üzerine çekilen NST’de en az 20 dakikadır süren, dakikada 4 sikluslu, düzgün yuvarlak tepeli sinüs eğrisi şeklinde dalgalanan ve kısa dönem variabilitesi tamamen yok olmuş fetal kalp hızı trasesi saptanıyor',
        clues: ['Rh alloimmünizasyonu olan', 'dakikada 4 sikluslu sinüs eğrisi', 'kısa dönem variabilitesi tamamen yok olmuş'],
        management: 'Kategori III patolojik trase kabul edilip derhal intrauterin resüsitasyon uygulanması ve hızla acil doğum',
        pearl: 'Gerçek form ağır fetal anemi veya hipoksi işaretidir; annenin aldığı meperidin gibi opioidler kısa süreli geçici yalancı patern yapabilir.',
        trapFalse: 'Kategori I normal trase varyantıdır ve fetal sağlığın mükemmel olduğunu gösterir',
        trapHighlight: 'Kategori I normal trase varyantıdır',
      },
      {
        name: 'Omuz distosisi',
        target: 'Fetal baş doğduktan sonra anterior fetal omzun maternal simfizis pubis arkasına mekanik olarak takılması',
        hallmark: 'Başın doğar doğmaz perineye doğru geri çekildiği kaplumbağa bulgusu ve standart aşağı traksiyonla gövdenin çıkmaması',
        vignette:
          'Gestasyonel diyabetli obez gebenin 4500 gram tahmin edilen bebeğinin başı doğduktan hemen sonra yüzün annenin perinesine sıkıca geri çekildiği görülüyor. Nazik aşağı traksiyona rağmen anterior omuz simfizis pubis altından kurtulamıyor',
        clues: ['gestasyonel diyabetli obez gebe', 'yüzün perineye sıkıca geri çekildiği', 'anterior omuz simfizis pubis altından kurtulamıyor'],
        management: 'Kesinlikle fundal bası yapmadan ve başı aşırı çekmeden ilk adım olarak McRoberts manevrası (bacakların hiperfleksiyonu) ile suprapubik bası; gerekirse posterior kolun doğurtulması',
        pearl: 'Fundal bası (Kristeller) omuzu kemiğe daha çok sıkıştırır ve brakiyal pleksus (Erb-Duchenne) felci ile klavikula kırığını artırır.',
        trapFalse: 'ilk ve en etkili müdahale şiddetli fundal bası ile başın aşağı doğru kuvvetle çekilmesidir',
        trapHighlight: 'şiddetli fundal bası ile başın aşağı doğru kuvvetle çekilmesidir',
      },
    ],
  },

  // 6. Prenatal tanı ve anöploidi taraması
  {
    branchId: 'kadindogum',
    subTopic: 'Prenatal Tanı ve Anöploidi Taraması',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'İlk trimester kombine test',
        target: '11-14. gebelik haftalarında fetal ense saydamlığı kalınlığı ile maternal PAPP-A ve serbest beta-hCG ölçümü',
        hallmark: 'Trizomi 21’de artmış ense saydamlığı, düşük PAPP-A ve yüksek beta-hCG; trizomi 18’de her iki serum belirtecinin düşüklüğü',
        vignette:
          '12 hafta 3 günlük gebe kadına yapılan taramada fetal baş-popo mesafesi 60 mm, ense saydamlığı kalınlığı 3.6 mm ölçülüyor. Maternal serumda PAPP-A 0.42 MoM (düşük) ve serbest beta-hCG 2.6 MoM (yüksek) bulunuyor',
        clues: ['12 hafta 3 günlük gebe', 'ense saydamlığı kalınlığı 3.6 mm', 'PAPP-A düşük ve serbest beta-hCG yüksek'],
        management: 'Tarama riski yüksek çıktığından kesin kromozomal tanı için invaziv fetal doku veya sıvı örneklemesiyle karyotipleme önerilmesi',
        pearl: 'Nöral tüp defektlerini taramaz; sadece erken anöploidi riskini ve artmış ense kalınlığında konjenital kalp defekti riskini gösterir.',
        trapFalse: 'açık spina bifida gibi nöral tüp defektlerini taramak için 11. haftada AFP düzeyini ölçer',
        trapHighlight: 'nöral tüp defektlerini taramak için 11. haftada AFP düzeyini ölçer',
      },
      {
        name: 'Dörtlü tarama testi',
        target: '15-20. gebelik haftalarında maternal serum AFP, unkonjuge östriol, hCG ve inhibin-A düzeylerinin değerlendirilmesi',
        hallmark: 'Trizomi 21’de düşük AFP ve östriol ile yüksek hCG ve inhibin-A; açık nöral tüp defektinde tek başına yüksek AFP',
        vignette:
          'İlk trimester taramasını kaçıran 17. gebelik haftasındaki 34 yaşındaki gebede yapılan kan testinde maternal serum AFP 0.55 MoM, unkonjuge östriol 0.60 MoM, beta-hCG 2.4 MoM ve inhibin-A 2.3 MoM bulunuyor',
        clues: ['17. gebelik haftasındaki', 'AFP ve östriol düşük', 'beta-hCG ve inhibin-A yüksek'],
        management: 'Öncelikle ultrason ile son adet tarihinin doğrulanması, ardından genetik danışmanlık ve kesin tanı için invaziv karyotipleme',
        pearl: 'Düşük AFP’nin en sık nedeni aslında gebelik haftasının olduğundan büyük hesaplanmasıdır; yüksek AFP ise nöral tüp defekti, omfalosel veya gastroşiziste görülür.',
        trapFalse: 'Trizomi 18’de dördüncü belirteç olan inhibin-A ve hCG belirgin olarak yükselir',
        trapHighlight: 'Trizomi 18’de dördüncü belirteç olan inhibin-A ve hCG belirgin olarak yükselir',
      },
      {
        name: 'Koryon villus örneklemesi',
        target: '10-13. gebelik haftaları arasında transservikal veya transabdominal yoldan plasental trofoblastik villus biyopsisi',
        hallmark: 'İlk trimesterde en erken kesin karyotip ve moleküler genetik tanı sağlaması; 10. hafta öncesi yapılırsa ekstremite redüksiyon riski',
        vignette:
          'Her ikisi de talasemi majör taşıyıcısı olan çiftin 11 hafta 2 günlük gebeliğinde aile erken kesin genetik tanı talep ediyor. Ultrason eşliğinde plasentadan trofoblast dokusu aspire edilerek DNA analizi ve karyotipleme yapılıyor',
        clues: ['11 hafta 2 günlük gebeliğinde', 'erken kesin genetik tanı', 'plasentadan trofoblast dokusu aspire edilerek'],
        management: '10. gebelik haftasından sonra uygulanması, Rh negatif gebeye işlem sonrası anti-D verilmesi ve nöral tüp defekti taramasına 16. haftada devam edilmesi',
        pearl: 'Amniyon sıvısı almadığı için alfa-fetoprotein ölçümü yapamaz ve nöral tüp defektlerini gösteremez; %1 oranında plasental mozaisizm görülebilir.',
        trapFalse: 'nöral tüp defektlerini saptamak için 8. gebelik haftasında uygulanması en güvenli dönemdir',
        trapHighlight: '8. gebelik haftasında uygulanması en güvenli dönemdir',
      },
      {
        name: 'Amniyosentez',
        target: '15-20. gebelik haftalarında ultrason rehberliğinde amniyon boşluğundan fetal hücre ve sıvı aspirasyonu',
        hallmark: 'Hem kesin fetal karyotipleme hem de sıvı AFP ve asetilkolinesteraz ölçümüyle açık nöral tüp defekti tanısı sağlaması',
        vignette:
          '16. gebelik haftasında maternal serum AFP yüksekliği ve detaylı ultrasonda şüpheli omurga görüntüsü saptanan 33 yaşındaki gebeye ince iğne ile girilerek 20 mL berrak amniyotik sıvı alınıyor; sıvıda yüksek AFP yanında asetilkolinesteraz pozitifliği bulunuyor',
        clues: ['16. gebelik haftasında', '20 mL berrak amniyotik sıvı', 'asetilkolinesteraz pozitifliği'],
        management: 'Ultrason eşliğinde plasentadan kaçınılarak girişim, Rh negatif gebede anti-D profilaksisi ve yaklaşık 1/300-1/500 gebelik kaybı riski bilgilendirmesi',
        pearl: 'Asetilkolinesteraz yalnızca açık nöral tüp defektinde amniyon sıvısına sızar; karın duvarı defekti olan gastroşiziste ise genellikle negatiftir.',
        trapFalse: '10. gebelik haftasında uygulanır ve açık nöral tüp defekti ile gastroşizis ayrımında bilgi vermez',
        trapHighlight: '10. gebelik haftasında uygulanır',
      },
      {
        name: 'Hücre dışı fetal DNA testi',
        target: 'Maternal kanda dolaşan plasental sitotrofoblast apoptozundan kaynaklı serbest DNA fragmanlarının analizi',
        hallmark: '10. haftadan itibaren Trizomi 21 için %99 duyarlılığa sahip invaziv olmayan en güçlü tarama testi',
        vignette:
          '38 yaşındaki gebe invaziv işlem riskini almadan yüksek doğrulukta tarama yaptırmak istiyor. 11. gebelik haftasında anneden alınan periferik kan örneğinde plasenta kökenli serbest DNA dizilenerek Trizomi 21 için yüksek risk saptanıyor',
        clues: ['11. gebelik haftasında anneden alınan kan', 'invaziv işlem riskini almadan', 'plasenta kökenli serbest DNA'],
        management: 'Tarama testi olduğu için pozitif sonucun gebelik sonlandırma kararından önce mutlaka invaziv tanısal karyotip testiyle doğrulanması',
        pearl: 'Dolaşımdaki serbest DNA aslında fetustan değil plasental trofoblastlardan gelir; obezitede düşük fetal fraksiyon nedeniyle sonuçsuz kalabilir.',
        trapFalse: 'yüzde yüz kesin tanısal bir testtir ve pozitif sonuçta invaziv doğrulama gerekmeden gebelik sonlandırılabilir',
        trapHighlight: 'invaziv doğrulama gerekmeden gebelik sonlandırılabilir',
      },
    ],
  },

  // 7. Gebelikte medikal hastalıklar (ÖSYM Twin 5)
  {
    branchId: 'kadindogum',
    subTopic: 'Gebelikte Medikal Hastalıklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Gestasyonel diyabet',
        target: 'Gebeliğin ikinci yarısında insan plasental laktojeninin tetiklediği periferik insülin direncinin pankreasça karşılanamaması',
        hallmark: '24-28. haftalarda OGTT bozukluğu, makrozomi, omuz distosisi, polihidramniyos ve yenidoğan hipoglisemisi',
        vignette:
          'Vücut kitle indeksi 31 olan 30 yaşındaki gebeye 26. haftada yapılan 50 g glukoz tarama testi 162 mg/dL çıkınca 100 g 3 saatlik OGTT uygulanıyor ve açlık 98, 1. saat 194, 2. saat 168 mg/dL olarak iki değer yüksek bulunuyor',
        clues: ['26. haftada yapılan OGTT', 'açlık 98, 1. saat 194, 2. saat 168', 'vücut kitle indeksi 31'],
        management: 'Tıbbi beslenme tedavisi, düzenli egzersiz ve glukoz takibi; hedefler sağlanamazsa plasentayı geçmediği için ilk tercih farmakolojik ajan olarak insülin',
        pearl: 'Gebelik öncesi diyabetten farklı olarak ilk trimesterde organogenez tamamlandıktan sonra geliştiği için konjenital malformasyon (kaudal regresyon) riski daha çok pregestasyonel diyabete özgüdür.',
        trapFalse: 'tedavide diyet yetersiz kalırsa ilk ilaç olarak sülfonilüreler verilir ve 6. haftada OGTT yapılır',
        trapHighlight: 'ilk ilaç olarak sülfonilüreler verilir',
      },
      {
        name: 'Gebeliğin intrahepatik kolestazı',
        target: 'Yüksek östrojen ve progesteron düzeylerinin genetik yatkın gebede hepatik safra tuzu pompalarını baskılaması',
        hallmark: 'Üçüncü trimesterde döküntüsüz, geceleri artan şiddetli avuç içi-ayak tabanı kaşıntısı ve yüksek serum safra asitleri',
        vignette:
          '33. gebelik haftasındaki 28 yaşındaki kadın son bir haftadır özellikle geceleri uykudan uyandıran şiddetli avuç içi ve ayak tabanı kaşıntısı şikayetiyle başvuruyor. Ciltte primer döküntü olmayıp yalnızca kaşıntı izleri görülüyor; serum total safra asitleri 58 µmol/L ve transaminazlar hafif yüksek bulunuyor',
        clues: ['geceleri uykudan uyandıran avuç içi-ayak tabanı kaşıntısı', 'ciltte primer döküntü olmayıp', 'serum total safra asitleri 58 µmol/L'],
        management: 'Ursodeoksikolik asit ile semptom ve safra asidi kontrolü; açıklanamayan ani fetal ölüm riskini önlemek için 36-37. haftalarda planlı doğum',
        pearl: 'Anne için benign olup doğumdan hemen sonra düzelir ancak yüksek safra asitleri fetal kardiyak aritmi ve ölü doğum riskini belirgin artırır.',
        trapFalse: 'gebelik boyunca yalnızca topikal antihistaminik yeterlidir ve fetal risk taşımadığından 41. haftaya kadar beklenir',
        trapHighlight: 'fetal risk taşımadığından 41. haftaya kadar beklenir',
      },
      {
        name: 'Gebeliğin akut yağlı karaciğeri',
        target: 'Genellikle fetal LCHAD eksikliğiyle tetiklenen maternal mitokondriyal yağ asidi beta-oksidasyon bozukluğu',
        hallmark: 'Üçüncü trimesterde bulantı-kusma, derin hipoglisemi, hiperbilirubinemi, koagülopati, hiperamonemi ve mikroveziküler steatoz',
        vignette:
          '36. gebelik haftasındaki primigravid 25 yaşındaki gebe bir haftadır süren halsizlik, bulantı-kusma, sarılık ve poliüri sonrası bilinç bulanıklığıyla getiriliyor. Kan şekeri 38 mg/dL, total bilirubin 6.8 mg/dL, INR 2.4, amonyak yüksek ve böbrek fonksiyonları bozuk saptanıyor',
        clues: ['kan şekeri 38 mg/dL ve INR 2.4', 'amonyak yüksek ve sarılık', '36. gebelik haftasında bilinç bulanıklığı'],
        management: 'Hipoglisemi ve koagülopatinin acilen düzeltilmesi eşliğinde gebelik haftasına bakılmaksızın derhal acil doğum ve yoğun bakım desteği',
        pearl: 'Derin hipoglisemi, amonyak artışı, diyabetes insipidus ve belirgin koagülopati varlığı tabloyu diğer gebelik karaciğer hastalıklarından ayırır.',
        trapFalse: 'histopatolojide makrovesiküler yağlanma görülür ve annede hipoglisemi beklenmez',
        trapHighlight: 'makrovesiküler yağlanma görülür ve annede hipoglisemi beklenmez',
      },
      {
        name: 'Hiperemezis gravidarum',
        target: 'İlk trimesterde yüksek hCG ve östradiol düzeylerine eşlik eden durdurulamayan kusma ve açlık ketozu',
        hallmark: 'Gebelik öncesi kilonun %5’inden fazla kayıp, ketonüri, hipokalemik metabolik alkaloz ve Wernicke ensefalopatisi riski',
        vignette:
          'Mol gebeliği dışlanmış 9 haftalık ikiz gebeliği olan 23 yaşındaki kadın 2 haftadır sıvı dahil hiçbir şey tutamama ve 5 kg kilo kaybıyla yatırılıyor. İdrarda 4+ keton, serumda hipokalemi ve hafif yüksek karaciğer enzimleri saptanıyor',
        clues: ['9 haftalık ikiz gebelik', '5 kg kilo kaybı ve idrarda 4+ keton', 'sıvı dahil hiçbir şey tutamama'],
        management: 'IV kristaloid-elektrolit replasmanı, glukozlu sıvı vermeden önce mutlaka IV tiamin (B1 vitamini) ve antiemetik (doksilamin-piridoksin, ondansetron)',
        pearl: 'Tiamin depoları tükenmiş hastaya önce dekstroz vermek Wernicke ensefalopatisini (konfüzyon, ataksi, oftalmopleji) akut olarak tetikler.',
        trapFalse: 'enerji sağlamak için tiamin vermeden hemen yüksek konsantrasyonlu dekstroz infüzyonu başlanmalıdır',
        trapHighlight: 'tiamin vermeden hemen yüksek konsantrasyonlu dekstroz infüzyonu',
      },
      {
        name: 'Rh alloimmünizasyonu',
        target: 'Rh negatif annenin Rh pozitif fetal eritrositlerle duyarlanıp plasentayı geçen IgG anti-D antikorları oluşturması',
        hallmark: 'Pozitif indirekt Coombs testi, fetal orta serebral arter pik sistolik hız artışı ve hidrops fetalis riski',
        vignette:
          'İlk gebeliğinde doğum sonrası koruyucu enjeksiyon yapılmayan Rh negatif 30 yaşındaki gebenin ikinci gebeliğinin 24. haftasında indirekt Coombs titresi 1:64 bulunuyor. Fetal Doppler ultrasonda orta serebral arter pik sistolik akım hızı >1.5 MoM ölçülüyor',
        clues: ['indirekt Coombs titresi 1:64', 'orta serebral arter pik sistolik akım hızı >1.5 MoM', 'koruyucu enjeksiyon yapılmayan Rh negatif'],
        management: 'Duyarlanmamış gebede 28. haftada ve Rh pozitif bebek doğumundan sonraki 72 saat içinde anti-D immünglobulin profilaksisi; anemi gelişmiş fetusta kordosentezle intrauterin transfüzyon',
        pearl: 'Anne zaten duyarlanmış ve indirekt Coombs pozitifse anti-D immünglobulin artık etkisizdir; fetal anemi takibinde invaziv seri amniyosentez yerine MCA Doppler kullanılır.',
        trapFalse: 'indirekt Coombs titresi 1:64 olan duyarlanmış gebeye hemen yüksek doz anti-D immünglobulin yapılır',
        trapHighlight: 'duyarlanmış gebeye hemen yüksek doz anti-D immünglobulin yapılır',
      },
    ],
  },

  // 8. Primer amenore ayırıcı tanısı (ÖSYM Twin 6)
  {
    branchId: 'kadindogum',
    subTopic: 'Primer Amenore Ayırıcı Tanısı',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Müllerian agenezi',
        target: '46,XX karyotipte paramezonefrik kanal gelişim kusuru sonucu uterus ve üst iki üçte bir vajen yokluğu',
        hallmark: 'Normal meme ve pubik kıllanması olan 16 yaş kızda kör sonlanan kısa vajen, normal overler ve renal-iskelet anomalileri',
        vignette:
          '17 yaşındaki kız hasta hiç adet görmeme şikayetiyle başvuruyor. Boyu normal, meme gelişimi Tanner evre 5 ve pubik-aksiller kıllanması tam olan hastada 2 cm’lik kör sonlanan vajen saptanıyor; pelvik MRG’de uterus görülmezken normal overler, tek taraflı renal agenezi ve serum testosteronunun normal kadın düzeyinde olduğu bulunuyor',
        clues: ['meme ve pubik-aksiller kıllanması tam', 'uterus görülmezken normal overler', 'tek taraflı renal agenezi'],
        management: 'Karyotip (46,XX) doğrulaması, böbrek-omurga anomalilerinin taranması ve psikolojik destekle Frank progresif vajinal dilatasyon veya cerrahi neovajen',
        pearl: 'Normal pubik-aksiller kıllanma ve kadın düzeyi testosteron ile 46,XX karyotipi androjen duyarsızlığından ayırır.',
        trapFalse: 'karyotipi 46,XY olup aksiller ve pubik kıllanma tamamen yoktur, serum testosteronu erkek düzeyindedir',
        trapHighlight: 'karyotipi 46,XY olup aksiller ve pubik kıllanma tamamen yoktur',
      },
      {
        name: 'Komplet androjen duyarsızlık sendromu',
        target: '46,XY karyotipte X’e bağlı androjen reseptör gen mutasyonu nedeniyle hedef dokuların testosterona yanıt verememesi',
        hallmark: 'Normal meme gelişimine rağmen pubik-aksiller kıllanmanın yokluğu, uterus yokluğu, kör vajen ve erkek düzeyi testosteron',
        vignette:
          '18 yaşındaki fenotipik kadın hasta primer amenore nedeniyle inceleniyor. Meme gelişimi Tanner evre 5 olmasına karşın pubik ve aksiller kıllanmasının hiç olmadığı, vajenin kısa kör poş şeklinde sonlandığı, ultrasonda uterus bulunmadığı, inguinal kanallarda gonadların yer aldığı ve testosteronun 620 ng/dL olduğu saptanıyor',
        clues: ['meme gelişimi tam ancak pubik ve aksiller kıllanma hiç yok', 'testosteron 620 ng/dL', 'inguinal kanallarda gonadlar'],
        management: 'Puberte ve kemik maturasyonu tamamlanana kadar endojen östrojene dönüşüm için testislerin bırakılması; puberte sonrası malignite riski nedeniyle gonadektomi ve östrojen replasmanı',
        pearl: 'Testislerin ürettiği AMH Müllerian kanalları gerilettiği için uterus yoktur; yüksek testosteron periferde östrojene aromatize olduğu için memeler normal gelişir.',
        trapFalse: 'tanı konulduğu anda çocukluk çağında acil gonadektomi yapılmalıdır ve pubik kıllanma aşırı artmıştır',
        trapHighlight: 'pubik kıllanma aşırı artmıştır',
      },
      {
        name: 'Turner sendromu',
        target: '45,X kromozomal monozomi veya mozaik yapıya bağlı hızlanmış folikül atrezisi ve hipergonadotropik gonadal disgenezi',
        hallmark: 'Kısa boy, yele boyun, geniş aralıklı meme başları, aort koarktasyonu, yüksek FSH-LH ve çizgi gonadlar',
        vignette:
          '15 yaşındaki kız hasta yaşıtlarından belirgin kısa boy ve hiç adet görmeme nedeniyle getiriliyor. Muayenede yele boyun, kubitus valgus, geniş göğüs kafesi ve Tanner evre 1 meme gelişimi izleniyor; FSH 84 IU/L, LH 36 IU/L ve karyotip 45,X saptanıyor',
        clues: ['belirgin kısa boy ve yele boyun', 'Tanner evre 1 meme gelişimi', 'FSH 84 IU/L ve karyotip 45,X'],
        management: 'Çocuklukta büyüme hormonu tedavisi, puberte indüksiyonu için düşük dozdan başlanan östrojen-progestin replasmanı ve biküspit aort-koarktasyon açısından kardiyak MRG',
        pearl: 'Y kromozomu materyali içeren mozaik varyantlarda (45,X/46,XY) gonadoblastom riski çok yüksek olduğundan profilaktik gonadektomi gerekir.',
        trapFalse: 'FSH ve LH düzeyleri baskılanmış düşük bulunur ve zeka geriliği her hastada ağır düzeydedir',
        trapHighlight: 'FSH ve LH düzeyleri baskılanmış düşük bulunur',
      },
      {
        name: 'Kallmann sendromu',
        target: 'GnRH nöronlarının olfaktör plakoddan hipotalamusa göç edememesine bağlı izole hipogonadotropik hipogonadizm',
        hallmark: 'Düşük FSH, LH ve östradiol düzeylerine eşlik eden anosmi veya hiposmi ve sekonder seks karakterlerinin gelişmemesi',
        vignette:
          '17 yaşındaki kız hasta adet görmeme ve meme gelişimi olmaması yanında doğuştan hiç koku alamadığını ifade ediyor. Pelvik ultrasonda normal ancak prepubertal küçük uterus ve overler görülüyor; serum FSH 1.1 IU/L, LH 0.8 IU/L ve östradiol <10 pg/mL bulunuyor',
        clues: ['doğuştan hiç koku alamadığını', 'FSH 1.1 ve LH 0.8 IU/L', 'prepubertal küçük uterus ve overler'],
        management: 'Sekonder seks karakterleri ve kemik sağlığı için östrojen-progestin replasmanı; gebelik istendiğinde pulsatil GnRH veya gonadotropin tedavisi',
        pearl: 'Koku alma siniriyle ortak embriyolojik göç yolu nedeniyle anosmi ile hipogonadotropik hipogonadizmin birlikteliği patognomoniktir.',
        trapFalse: 'hipergonadotropik hipogonadizm tablosu olup serum FSH düzeyleri menopozal seviyelere yükselir',
        trapHighlight: 'serum FSH düzeyleri menopozal seviyelere yükselir',
      },
      {
        name: 'İmperfore himen',
        target: 'Ürogenital sinüsün vajinal plakla kanalizasyon kusuru sonucu perfore olmamış himenal membran',
        hallmark: 'Normal meme ve pubik kıllanmalı genç kızda aylık siklik karın ağrısı, idrar retansiyonu ve mavimsi bombeleşen himen',
        vignette:
          '14 yaşındaki kız hasta meme gelişimi ve kıllanması 2 yıl önce başlamasına rağmen hiç adet görmediğini, ancak son 5 aydır her ay 4-5 gün süren şiddetli alt karın ağrısı yaşadığını ve son günlerde idrar yapamadığını söylüyor. Genital muayenede introitusu tamamen kapatan gergin mavimsi-mor bombe membran görülüyor',
        clues: ['her ay 4-5 gün süren şiddetli alt karın ağrısı', 'idrar yapamadığını', 'gergin mavimsi-mor bombe membran'],
        management: 'Himenotomi (cruciate insizyon) ile birikmiş eski kanın yani hematokolposun drene edilmesi',
        pearl: 'Kriptomenore nedenidir; hormonlar ve uterus tamamen normal olduğu için basit bir cerrahi açılımla normal menstrüasyon ve fertilite sağlanır.',
        trapFalse: 'endokrin bir over yetmezliğidir ve tedavisi yaşam boyu östrojen replasmanıdır',
        trapHighlight: 'endokrin bir over yetmezliğidir',
      },
    ],
  },

  // 9. Sekonder amenore ve üreme endokrinolojisi
  {
    branchId: 'kadindogum',
    subTopic: 'Sekonder Amenore ve Üreme Endokrinolojisi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Polikistik over sendromu',
        target: 'Artmış GnRH pulsatilitesine bağlı yüksek LH/FSH oranı, hiperinsülinemi ve teka hücrelerinden aşırı androjen üretimi',
        hallmark: 'Oligo-anovülasyon, klinik/biyokimyasal hiperandrojenizm ve ultrasonda periferik inci dizisi görünümlü overler',
        vignette:
          '24 yaşındaki kadın hasta yılda 3 kez adet görme, çenede ve göbek çevresinde kıllanma artışı, akne ve kilo artışı şikayetiyle başvuruyor. LH/FSH oranı 2.8, serbest testosteron yüksek ve ultrasonda her iki overde periferik dizilimli çok sayıda küçük antral folikül izleniyor',
        clues: ['yılda 3 kez adet görme', 'çenede kıllanma artışı ve akne', 'periferik dizilimli çok sayıda folikül'],
        management: 'Kilo verilmesi, endometriyal koruma ve siklus düzeni için kombine oral kontraseptif, insülin direncinde metformin ve gebelik istendiğinde ilk tercih letrozol',
        pearl: 'Kronik anovülasyona bağlı karşılanmamış östrojen endometriyal hiperplazi ve kanser riskini artırır; Rotterdam kriterlerinin 3’ünden 2’si tanı koydurur.',
        trapFalse: 'ovulasyon indüksiyonunda ilk basamak olarak daima yüksek doz GnRH analogları kullanılır ve endometriyum atrofik kalır',
        trapHighlight: 'endometriyum atrofik kalır',
      },
      {
        name: 'Hiperprolaktinemi',
        target: 'Laktotrof hipofiz adenomu veya dopamin reseptör blokajı yapan ilaçlar sonucu hipotalamik GnRH pulsatilitesinin baskılanması',
        hallmark: 'Sekonder amenore ve bilateral galaktore şikayetinde gebelik ve primer hipotiroidi ekarte edildikten sonra yüksek prolaktin',
        vignette:
          '28 yaşındaki kadın hasta 8 aydır adet görememe ve her iki memesinden süt benzeri akıntı gelmesiyle başvuruyor. Gebelik testi negatif ve TSH normal bulunan hastada serum prolaktini 165 ng/mL ölçülüyor; hipofiz MRG’sinde 6 mm mikroadenom saptanıyor',
        clues: ['8 aydır adet görememe ve süt benzeri akıntı', 'gebelik testi negatif ve TSH normal', 'serum prolaktini 165 ng/mL'],
        management: 'Mikroadenom ve makroadenomların büyük çoğunluğunda ilk basamak tedavi olarak dopamin agonisti kabergolin veya bromokriptin',
        pearl: 'Primer hipotiroidide artan TRH laktotrofları uyardığı için her vakada mutlaka önce gebelik testi ile birlikte TSH bakılmalıdır.',
        trapFalse: '6 mm’lik mikroadenomda bile ilk basamak tedavi transsfenoidal cerrahi eksizyondur',
        trapHighlight: 'ilk basamak tedavi transsfenoidal cerrahi eksizyondur',
      },
      {
        name: 'Prematür over yetmezliği',
        target: '40 yaşından önce oosit folikül rezervinin tükenmesine bağlı hipergonadotropik hipogonadizm',
        hallmark: '40 yaş altı kadında en az 4 ay amenore, en az 1 ay arayla iki kez 40 IU/L üzeri FSH ve östrojen eksikliği bulguları',
        vignette:
          '33 yaşındaki kadın hasta 6 aydır adet görememe, sıcak basmaları ve vajinal kuruluk şikayetiyle başvuruyor. Bir ay arayla bakılan iki ölçümde serum FSH düzeyi 68 ve 74 IU/L, östradiol ise 14 pg/mL bulunuyor',
        clues: ['33 yaşındaki kadın', 'sıcak basmaları ve vajinal kuruluk', 'iki ölçümde FSH 68 ve 74 IU/L'],
        management: 'Otoimmün tiroidit/adrenal yetmezlik taraması, 30 yaş altında karyotip (Y materyali dışlanması), FMR1 premütasyon analizi ve ortalama menopoz yaşına kadar östrojen-progestin replasmanı',
        pearl: 'Hastaların %5-10’unda aralıklı spontan ovulasyon ve gebelik gerçekleşebilir; kemik erimesi ve erken kardiyovasküler hastalıktan korunmak için HRT zorunludur.',
        trapFalse: 'gebelik şansı kesin olarak sıfırdır ve 40 yaşından önce östrojen replasmanı kesinlikle verilmez',
        trapHighlight: '40 yaşından önce östrojen replasmanı kesinlikle verilmez',
      },
      {
        name: 'Asherman sendromu',
        target: 'Postpartum veya postabortus aşırı küretaj ya da enfeksiyon sonrası bazal endometriyum kaybı ve intrauterin sineşiler',
        hallmark: 'Küretaj öyküsü sonrası gelişen amenore ve östrojen-progestin çekilme testine kanama yanıtı alınamaması',
        vignette:
          'Doğum sonrası plasenta kalıntısı nedeniyle derin küretaj geçiren 31 yaşındaki kadın o tarihten bu yana hiç adet görmediğini söylüyor. Prolaktin, TSH ve FSH normal olan hastada 21 gün östrojen artı progestin verilmesine rağmen çekilme kanaması olmuyor; histeroskopide kavitede yoğun fibröz bantlar görülüyor',
        clues: ['derin küretaj geçiren', 'östrojen artı progestin verilmesine rağmen kanama yok', 'kavitede yoğun fibröz bantlar'],
        management: 'Histeroskopik adhezyolizis ile yapışıklıkların kesilmesi, ardından yeniden yapışmayı önlemek için intrauterin balon kateter ve yüksek doz östrojen',
        pearl: 'Normal FSH ve östradiole rağmen hem progestin hem de östrojen-progestin testine yanıt alınamaması hedef organ yani endometriyum hasarını kanıtlar.',
        trapFalse: 'östrojen-progestin çekilme testi uygulandığında şiddetli çekilme kanaması meydana gelir',
        trapHighlight: 'şiddetli çekilme kanaması meydana gelir',
      },
      {
        name: 'Fonksiyonel hipotalamik amenore',
        target: 'Yoğun egzersiz, kalori kısıtlaması veya psikolojik strese bağlı hipotalamik GnRH pulsatilitesinin baskılanması',
        hallmark: 'Düşük-normal FSH ve LH, düşük östradiol, normal prolaktin ve negatif progestin çekilme testi',
        vignette:
          'Maraton koşucusu 21 yaşındaki kadın son 8 ayda 7 kg verdikten sonra adetlerinin tamamen kesildiğini belirtiyor. Vücut kitle indeksi 16.8 olan hastada FSH 2.4 IU/L, LH 1.8 IU/L, östradiol 18 pg/mL, prolaktin ve TSH normal, beyin MRG normal bulunuyor',
        clues: ['maraton koşucusu ve 7 kg verdikten sonra', 'vücut kitle indeksi 16.8', 'FSH 2.4, LH 1.8 ve östradiol 18'],
        management: 'Kalori alımının artırılması, egzersiz yoğunluğunun azaltılması ve uzun süreli östrojen eksikliğinde kemik kaybını önlemek için transdermal östrojen artı progestin',
        pearl: 'Kadın atlet triadının (düşük enerji alımı, amenore, osteoporoz) merkezindedir; oral kontraseptif yerine transdermal östrojen kemik yoğunluğu için daha etkilidir.',
        trapFalse: 'hipofiz adenomu olmadan oluşmaz ve serum FSH düzeyleri genellikle 50 IU/L üzerindedir',
        trapHighlight: 'serum FSH düzeyleri genellikle 50 IU/L üzerindedir',
      },
    ],
  },

  // 10. Anormal uterin kanama ve benign jinekoloji
  {
    branchId: 'kadindogum',
    subTopic: 'Anormal Uterin Kanama ve Benign Jinekoloji',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Uterin leiomyom',
        target: 'Tek bir miyometriyal düz kas hücresinden köken alan östrojen ve progesterona duyarlı monoklonal benign neoplazm',
        hallmark: 'Özellikle submukozal yerleşimde ağır menstrüel kanama, pelvik bası ve muayenede büyümüş sert düzensiz konturlu uterus',
        vignette:
          '42 yaşındaki nullipar kadın son bir yıldır pıhtılı çok yoğun adet kanamaları ve sık idrara çıkma şikayetiyle başvuruyor. Bimanüel muayenede uterus 14 hafta gebelik büyüklüğünde, sert ve lobüle düzensiz konturlu palpe ediliyor; hemoglobin 9.1 g/dL ölçülüyor',
        clues: ['pıhtılı yoğun adet kanamaları', 'uterus 14 hafta büyüklüğünde ve lobüle düzensiz', 'hemoglobin 9.1 g/dL'],
        management: 'Asemptomatikte izlem; semptomatik ve fertilite isteniyorsa submukozalda histeroskopik, intramural/subserozalda laparoskopik miyomektomi; çocuk istemi yoksa histerektomi',
        pearl: 'Gebelikte kırmızı (karneöz) dejenerasyona uğrayarak akut karın ağrısı ve lökositoz yapabilir; menopoz sonrası büyümesi sarkom şüphesi doğurur.',
        trapFalse: 'postmenopozal dönemde hızla büyümesi tamamen normaldir ve subserozal tipi en şiddetli kanamayı yapar',
        trapHighlight: 'postmenopozal dönemde hızla büyümesi tamamen normaldir',
      },
      {
        name: 'Adenomiyozis',
        target: 'Endometriyal bez ve stromanın miyometriyum içine benign invajinasyonu ve çevre düz kas hiperplazisi',
        hallmark: '40 yaş civarı multipar kadında sekonder dismenore, menoraji ve muayenede küresel, simetrik, yumuşak hassas uterus',
        vignette:
          'Üç çocuk doğurmuş 43 yaşındaki kadın son iki yıldır giderek şiddetlenen adet sancıları ve yoğun adet kanaması ile başvuruyor. Muayenede uterus küresel tarzda büyümüş, simetrik, yumuşak ve dokunmakla hassas bulunuyor; ultrason ve MRG’de miyometriyum içinde kalınlaşmış bileşke zonu görülüyor',
        clues: ['üç çocuk doğurmuş 43 yaşındaki kadın', 'uterus küresel, simetrik ve yumuşak hassas', 'kalınlaşmış bileşke zonu'],
        management: 'Semptom kontrolü için levonorgestrelli rahim içi sistem veya hormon tedavisi; doğurganlık tamamlanmış dirençli hastada kesin tedavi histerektomi',
        pearl: 'Düzensiz sert lobüle uterus yerine simetrik, küresel ve özellikle adet döneminde hassas büyümüş uterus yapmasıyla fibroidlerden ayrılır.',
        trapFalse: 'nullipar genç kızlarda sıktır ve kesin tanısı endometriyal biyopsi ile konur',
        trapHighlight: 'kesin tanısı endometriyal biyopsi ile konur',
      },
      {
        name: 'Endometriozis',
        target: 'Uterin kavite dışında fonksiyonel endometriyal bez ve stromanın ektopik yerleşimi ve siklik inflamatuvar fibrozis',
        hallmark: 'Dismenore, derin disparoni, infertilite, sakrouterin ligamentte hassas nodüller ve overde buzlu cam görünümlü çikolata kisti',
        vignette:
          'İki yıldır gebe kalamayan 29 yaşındaki kadın adetten önce başlayıp adet boyunca süren şiddetli kasık ağrısı, derin cinsel ilişkide ağrı ve adet dönemlerinde ağrılı dışkılama şikayetiyle başvuruyor. Muayenede uterus fikse retrovert, sakrouterin ligamentlerde hassas nodüller ve sağ overde buzlu cam ekolu kist görülüyor',
        clues: ['derin cinsel ilişkide ağrı ve infertilite', 'sakrouterin ligamentlerde hassas nodüller', 'overde buzlu cam ekolu kist'],
        management: 'Ağrı için NSAİİ, kombine OKS veya progestin; tanısal altın standart laparoskopide lezyonların görülüp biyopsiyle doğrulanması ve eksizyon-ablasyonu',
        pearl: 'Klinik semptom şiddeti ile laparoskopik lezyon evresi her zaman paralel değildir; endometrioma varlığında over rezervini korumak için cerrahi dikkatle planlanır.',
        trapFalse: 'kesin tanı yöntemi serum CA-125 ölçümüdür ve histerektomi yapılmadan hiçbir medikal tedavi yanıtı alınmaz',
        trapHighlight: 'kesin tanı yöntemi serum CA-125 ölçümüdür',
      },
      {
        name: 'Endometriyal polip',
        target: 'Endometriyal bez ve fibrovasküler stromanın uterin kavite içine fokal hiperplastik uzantısı',
        hallmark: 'Ara kanama veya postmenopozal kanamada sonohisterografide tek besleyici damarlı düzgün sınırlı intrakaviter kitle',
        vignette:
          'Tamoksifen kullanan 56 yaşındaki postmenopozal kadın hasta lekelenme tarzında vajinal kanamayla başvuruyor. Salin infüzyon sonohisterografisinde kavite içine uzanan 1.8 cm çaplı, sapında renkli Doppler’de tek besleyici arter izlenen iyi sınırlı kitle görülüyor',
        clues: ['tamoksifen kullanan postmenopozal kadın', 'salin infüzyon sonohisterografisinde kitle', 'tek besleyici arter'],
        management: 'Semptomatik olgularda ve özellikle postmenopozal dönemde altta yatan atipi veya maligniteyi dışlamak için histeroskopik polipektomi',
        pearl: 'Tamoksifen endometriyum üzerinde kısmi östrojen agonisti etki göstererek bu benign çıkıntıların yanında hiperplazi ve kanser riskini de artırır.',
        trapFalse: 'tamoksifen kullanımında hiç görülmez ve postmenopozal kanamada dahi çıkarılmasına gerek yoktur',
        trapHighlight: 'tamoksifen kullanımında hiç görülmez',
      },
      {
        name: 'Atipili endometriyal hiperplazi',
        target: 'Karşılanmamış östrojen uyarısına bağlı endometriyal bezlerin sitolojik atipi içeren kalabalık proliferasyonu',
        hallmark: 'Obez veya anovülatuvar hastada gland/stroma oranında belirgin artış, nükleer atipi ve yüksek eşzamanlı adenokarsinom riski',
        vignette:
          'Vücut kitle indeksi 38 olan 51 yaşındaki perimenopozal kadın düzensiz yoğun kanamalar nedeniyle değerlendiriliyor. Yapılan endometriyal biyopside sırt sırta vermiş, stroması çok azalmış, büyük hiperkromatik atipik nükleuslu düzensiz endometriyal bezler raporlanıyor',
        clues: ['vücut kitle indeksi 38', 'sırt sırta vermiş stroması azalmış bezler', 'atipik nükleuslu endometriyal bezler'],
        management: 'Eş zamanlı invaziv kanser riski %30-40 olduğundan doğurganlık tamamlanmışsa total histerektomi; fertilite arzusu varsa yüksek doz progestin ve 3 ayda bir biyopsi',
        pearl: 'Atipisiz hiperplazide progestin tedavisi yeterliyken, sitolojik atipi varlığı doğrudan prekanseröz lezyon (EIN) anlamına gelir ve histerektomi gerektirir.',
        trapFalse: 'progresyon riski %1’in altındadır ve postmenopozal hastada dahi sadece 6 ay sonra ultrason kontrolü yeterlidir',
        trapHighlight: 'progresyon riski %1’in altındadır',
      },
    ],
  },

  // 11. Kontraseptif yöntemler ve mekanizma/kontrendikasyonlar
  {
    branchId: 'kadindogum',
    subTopic: 'Kontraseptif Yöntemler ve Kontrendikasyonlar',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kombine oral kontraseptif',
        target: 'Östrojen ve progestin kombinasyonuyla hipofizden FSH-LH pikini baskılayarak ovulasyonu inhibe etme ve servikal mukusu kalınlaştırma',
        hallmark: 'Over ve endometriyum kanseri riskini azaltmasına karşın auralı migren, tromboz öyküsü ve 35 yaş üstü ağır sigarada mutlak kontrendike olması',
        vignette:
          '37 yaşında günde 20 adet sigara içen ve görsel auralı migren atakları bulunan kadın hasta gebelikten korunma yöntemi danışmanlığı için başvuruyor. Ailesinde venöz tromboemboli öyküsü olmamasına rağmen hastanın mevcut risk profili değerlendirilerek bu hormonal kombinasyondan kaçınılıyor',
        clues: ['37 yaşında günde 20 adet sigara içen', 'görsel auralı migren atakları', 'hormonal kombinasyondan kaçınılıyor'],
        management: 'Östrojen kontrendikasyonu olmayanlarda günlük düzenli kullanım; sigara/auralı migren varlığında progestin tekli veya rahim içi araç tercih edilmesi',
        pearl: 'En az 5 yıl kullanım over ve endometriyum kanseri riskini yaklaşık yarı yarıya azaltır; ancak 35 yaş üstü günde >=15 sigara ve auralı migrende inme-tromboz riski nedeniyle yasaktır.',
        trapFalse: 'auralı migreni olan ve 35 yaş üstü günde 20 sigara içen kadınlarda güvenle ilk tercih olarak başlanabilir',
        trapHighlight: 'güvenle ilk tercih olarak başlanabilir',
      },
      {
        name: 'Bakırlı rahim içi araç',
        target: 'Uterin kavitede steril yabancı cisim inflamasyonu ve salınan bakır iyonlarıyla spermosidal ortam oluşturma',
        hallmark: 'Hormon içermeden 10 yıla kadar koruma sağlaması ve korunmasız ilişki sonrası ilk 5 günde en etkili acil kontrasepsiyon olması',
        vignette:
          '3 gün önce korunmasız cinsel ilişkide bulunan, obez ve emziren 32 yaşındaki kadın hem acil gebelik önleme hem de uzun süreli hormonsuz korunma talep ediyor. Aktif pelvik enfeksiyonu olmayan hastaya uygulanan yöntemle %99’un üzerinde acil koruma sağlanıyor',
        clues: ['3 gün önce korunmasız cinsel ilişki', 'uzun süreli hormonsuz korunma', '%99’un üzerinde acil koruma'],
        management: 'Aktif servisit, PID veya açıklanamayan kanama dışlandıktan sonra yerleştirilmesi; adet miktarını ve krampları artırabileceği bilgisinin verilmesi',
        pearl: 'Tüm acil kontraseptif seçenekler içinde obezite dahil etkinliği düşmeyen en güvenilir yöntemdir; bakır alerjisi ve Wilson hastalığında kullanılmaz.',
        trapFalse: 'adet kanama miktarını belirgin azaltır ve acil kontrasepsiyonda yalnızca ilk 24 saatte etkilidir',
        trapHighlight: 'adet kanama miktarını belirgin azaltır',
      },
      {
        name: 'Levonorgestrelli rahim içi sistem',
        target: 'Kavite içine günlük mikrodoz progestin salınımıyla endometriyal atrofi, desidualizasyon ve servikal mukus kalınlaşması',
        hallmark: 'Yüksek kontraseptif etkinliğe ek olarak ağır menstrüel kanamayı belirgin azaltması ve endometriyal hiperplazi tedavisi sağlaması',
        vignette:
          'Demir eksikliği anemisine yol açan ağır adet kanamaları olan ve aynı zamanda gebelikten korunmak isteyen 38 yaşındaki kadın için hem lokal progestinle endometriyumu incelten hem de 5-8 yıl koruma sağlayan intrauterin sistem seçiliyor',
        clues: ['demir eksikliği anemisine yol açan ağır adet kanamaları', 'lokal progestinle endometriyumu incelten', '5-8 yıl koruma'],
        management: 'Aktif meme kanseri, akut pelvik enfeksiyon veya kaviteyi bozan submukozal miyom yoksa poliklinik şartlarında yerleştirilmesi',
        pearl: 'Ağır menstrüel kanama ve adenomiyozis semptomlarını azaltan en etkili geri dönüşlü kontraseptiftir; ektopik gebelik insidansını da mutlak olarak azaltır.',
        trapFalse: 'östrojen içerdiği için tromboemboli öyküsünde kesinlikle kontrendikedir ve kanamayı artırır',
        trapHighlight: 'östrojen içerdiği için tromboemboli öyküsünde kesinlikle kontrendikedir',
      },
      {
        name: 'Depo medroksiprogesteron asetat',
        target: 'Üç ayda bir intramüsküler enjeksiyonla hipotalamik-hipofizer akstan LH pikini tamamen baskılayan yüksek doz depo progestin',
        hallmark: 'Östrojen kontrendikasyonlarında kullanılabilmesi fakat kesildikten sonra fertilite dönüşünün gecikmesi ve geçici kemik yoğunluğu kaybı',
        vignette:
          'Orak hücreli anemisi olan ve sık ağrılı kriz geçiren 26 yaşındaki kadın hasta östrojen içermeyen, 3 ayda bir uygulanan ve adet miktarını azaltarak kriz sıklığını düşüren enjeksiyon yöntemini tercih ediyor',
        clues: ['orak hücreli anemisi olan', '3 ayda bir uygulanan', 'kriz sıklığını düşüren enjeksiyon'],
        management: 'Trombüs riski taşıyanlarda güvenle uygulanması, kilo artışı ve düzensiz lekelenme danışmanlığı, 2 yıldan uzun kullanımda kemik mineral yoğunluğu gözetimi',
        pearl: 'Bırakıldıktan sonra ovulasyonun geri dönmesi ortalama 9-10 ayı bulabilir; erken gebelik isteyen kadınlar için uygun değildir ve orak hücre krizlerini azaltır.',
        trapFalse: 'bırakıldığı ilk hafta içinde ovulasyon hızla döner ve kemik mineral yoğunluğunu belirgin artırır',
        trapHighlight: 'bırakıldığı ilk hafta içinde ovulasyon hızla döner',
      },
      {
        name: 'Acil kontraseptif ulipristal asetat',
        target: 'Selektif progesteron reseptör modülatörü olarak LH piki başlamış olsa dahi geç foliküler fazda ovulasyonu erteleme',
        hallmark: 'Korunmasız ilişkiden sonraki 120 saate kadar yüksek etkinliğini koruması ve yüksek kiloda levonorgestrelden üstün olması',
        vignette:
          'Siklusunun 13. gününde korunmasız cinsel ilişkide bulunan ve olayın üzerinden 84 saat geçtikten sonra başvuran 27 yaşındaki kadın rahim içi araç istemediğini belirtiyor. Hastaya 5 güne kadar etkinliğini koruyan tek doz oral reseptör modülatörü veriliyor',
        clues: ['olayın üzerinden 84 saat geçtikten sonra', 'rahim içi araç istemediğini', '5 güne kadar etkinliğini koruyan oral ajan'],
        management: 'Tek doz 30 mg oral verilmesi ve progestinlerle reseptör yarışı nedeniyle düzenli progestin bazlı yönteme başlamak için en az 5 gün bariyerle beklenmesi',
        pearl: 'Levonorgestrel LH piki başladıktan sonra ve 72 saatten sonra etkisizleşirken bu ajan 120 saate kadar ovulasyonu geciktirebilir; yine de mevcut gebeliği sonlandırmaz.',
        trapFalse: 'medikal abortus ilacı olarak yerleşmiş gebeliği sonlandırır ve yalnızca ilk 24 saatte etkilidir',
        trapHighlight: 'yerleşmiş gebeliği sonlandırır',
      },
    ],
  },

  // 12. İnfertilite değerlendirmesi ve yardımcı üreme
  {
    branchId: 'kadindogum',
    subTopic: 'İnfertilite Değerlendirmesi ve Yardımcı Üreme',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Letrozol ile ovulasyon indüksiyonu',
        target: 'Aromataz enzimini inhibe ederek östrojen sentezini azaltıp hipotalamus-hipofiz üzerindeki negatif geri bildirimi kaldırma ve FSH artışı',
        hallmark: 'Polikistik over sendromunda klomifene göre daha yüksek canlı doğum oranı, daha az çoğul gebelik ve endometriyumu inceltmemesi',
        vignette:
          'Anovülatuvar infertilite nedeniyle değerlendirilen 27 yaşındaki polikistik over sendromlu hastada siklusun 3-7. günlerinde oral aromataz inhibitörü başlanarak tek folikül gelişimi ve yüksek canlı doğum şansı hedefleniyor',
        clues: ['anovülatuvar infertilite', 'siklusun 3-7. günlerinde oral aromataz inhibitörü', 'tek folikül gelişimi'],
        management: 'Adetin 3-7. günlerinde 2.5-7.5 mg oral verilmesi ve folikül takibiyle zamanlı ilişki veya inseminasyon',
        pearl: 'Klomifenin antiöstrojenik etkisi servikal mukusu kalınlaştırıp endometriyumu inceltebilirken aromataz inhibisyonu bu olumsuz etkiyi yapmaz ve birinci basamaktır.',
        trapFalse: 'servikal mukusu kalınlaştırıp endometriyumu incelterek klomifenden daha düşük canlı doğum oranı sağlar',
        trapHighlight: 'klomifenden daha düşük canlı doğum oranı sağlar',
      },
      {
        name: 'Histerosalpingografi',
        target: 'Serviksten verilen radyoopak kontrastla uterin kavite şeklinin ve fallop tüplerinin açıklığının floroskopik görüntülenmesi',
        hallmark: 'İnfertilite araştırmasında tubal obstrüksiyon, hidrosalpinks ve uterin septum gibi yapısal anomalilerin ilk basamak testi',
        vignette:
          'İki yıldır korunmasız ilişkiye rağmen gebe kalamayan, geçirilmiş klamidya enfeksiyonu öyküsü olan 29 yaşındaki kadında ovulasyon ve eşin semen analizi normal bulunuyor. Adet kanaması bittikten hemen sonra yapılan floroskopik kontrastlı çekimde sağ tüpten peritona geçiş olmadığı görülüyor',
        clues: ['ovulasyon ve semen analizi normal', 'adet kanaması bittikten hemen sonra', 'sağ tüpten peritona geçiş olmadığı'],
        management: 'Foliküler fazda (6-11. günler) çekilmesi, dilate hidrosalpinks varsa enfeksiyon riski için doksisiklin profilaksisi ve IVF öncesi salpenjektomi düşünülmesi',
        pearl: 'Yağ bazlı kontrastın hafif terapötik tüp açıcı etkisi de bildirilmiştir; ancak aktif pelvik enfeksiyon ve gebelik şüphesinde kesinlikle çekilmez.',
        trapFalse: 'luteal fazda siklusun 24. gününde çekilir ve aktif pelvik enfeksiyon tanısını koymak için kullanılır',
        trapHighlight: 'luteal fazda siklusun 24. gününde çekilir',
      },
      {
        name: 'Obstrüktif azospermi',
        target: 'Normal spermatogeneze karşın konjenital vas deferens agenezisi veya kanal tıkanıklığı nedeniyle ejakülatta sperm bulunmaması',
        hallmark: 'Normal testis hacmi, normal serum FSH düzeyi ve düşük hacimli asidik veya fruktoz negatif semen analizi',
        vignette:
          '31 yaşındaki erkek hastanın iki ayrı semen analizinde hiç sperm hücresi görülmüyor ve ejakülat hacmi 0.6 mL, pH 6.3, fruktoz negatif bulunuyor. Fizik muayenede testis boyutları normal, ancak her iki vas deferens palpe edilemiyor ve serum FSH 4.2 IU/L saptanıyor',
        clues: ['ejakülat hacmi 0.6 mL ve fruktoz negatif', 'testis boyutları normal ve FSH 4.2 IU/L', 'vas deferens palpe edilemiyor'],
        management: 'CFTR gen mutasyonu taraması (kistik fibrozis taşıyıcılığı) sonrası testiküler/epididimal sperm aspirasyonu (TESA/PESA) ve ICSI ile tüp bebek',
        pearl: 'Seminal veziküller fruktoz ve alkali sıvı ürettiği için konjenital vas deferens/vezikül agenezisinde semen asidik, az hacimli ve fruktozsuzdur.',
        trapFalse: 'testisler atrofik ve serum FSH ileri derecede yüksektir; ejakülat hacmi daima 5 mL üzerindedir',
        trapHighlight: 'testisler atrofik ve serum FSH ileri derecede yüksektir',
      },
      {
        name: 'Ovarian hiperstimülasyon sendromu',
        target: 'Ekzojen gonadotropin uyarısı sonrası hCG tetiklemesiyle aşırı VEGF salınımı, kapiller permeabilite artışı ve üçüncü boşluğa sıvı kaçışı',
        hallmark: 'IVF siklusu sırasında çok sayıda foliküllü büyümüş overler, asit, hemokonsantrasyon, hiponatremi, oligüri ve tromboemboli',
        vignette:
          'Polikistik over sendromu olan 28 yaşındaki kadın IVF için yüksek doz FSH ve hCG enjeksiyonu aldıktan 5 gün sonra şiddetli karın şişliği, bulantı, nefes darlığı ve idrar azalmasıyla acile başvuruyor. Ultrasonda 12 cm’ye büyümüş çok kistik overler ve batında yaygın asit, hemogramda hematokrit %49 bulunuyor',
        clues: ['IVF için hCG enjeksiyonu aldıktan 5 gün sonra', '12 cm’ye büyümüş overler ve yaygın asit', 'hematokrit %49'],
        management: 'Önlemek için GnRH agonist tetiklemesi ve embriyoların dondurulması; geliştiğinde dikkatli sıvı dengesi, tromboprofilaksi, kabergolin ve gergin asitte parasentez',
        pearl: 'hCG verilmezse ve gebelik oluşmazsa tablo gelişmez veya hızla söner; yüksek östradiol (>3500 pg/mL) ve PKOS en önemli risk faktörleridir.',
        trapFalse: 'hemokonsantrasyon yerine derin dilüsyonel anemi yapar ve en sık trombositopeni ile kanama görülür',
        trapHighlight: 'derin dilüsyonel anemi yapar',
      },
      {
        name: 'Açıklanamayan infertilite',
        target: 'Düzenli ovulasyon, normal semen parametreleri ve açık fallop tüplerine rağmen 12 ay içinde gebelik elde edilememesi',
        hallmark: 'Temel infertilite değerlendirme testlerinin tümünün normal sınırlar içinde saptanması',
        vignette:
          '30 yaşındaki kadın ve 32 yaşındaki eşi 18 aydır düzenli korunmasız ilişkiye rağmen çocuk sahibi olamıyor. Kadında midluteal progesteron 16 ng/mL, her iki fallop tüpünün açıklığını gösteren kontrastlı grafi normal ve erkeğin semen analizi tüm parametreleriyle normal sınırlar içinde bulunuyor',
        clues: ['midluteal progesteron 16 ng/mL', 'her iki fallop tüpünün açıklığı normal', 'semen analizi tüm parametreleriyle normal'],
        management: '35 yaş altında klomifen veya letrozol ile kontrollü stimülasyon artı intrauterin inseminasyon; 3-4 siklusta başarısızsa IVF',
        pearl: '35 yaş üzeri kadınlarda 12 ay beklenmeden 6 aylık düzenli ilişki sonrası değerlendirmeye başlanır.',
        trapFalse: 'ilk basamak tanı için tüm çiftlere mutlaka tanısal laparotomi yapılmalı ve doğrudan donör gamet önerilmelidir',
        trapHighlight: 'mutlaka tanısal laparotomi yapılmalı',
      },
    ],
  },

  // 13. Alt genital sistem enfeksiyonları ve pelvik inflamatuvar hastalık
  {
    branchId: 'kadindogum',
    subTopic: 'Alt Genital Sistem Enfeksiyonları ve Pelvik İnflamatuvar Hastalık',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Bakteriyel vajinoz',
        target: 'Hidrojen peroksit üreten Lactobacillus türlerinin azalıp Gardnerella vaginalis ve anaerobların aşırı çoğalması',
        hallmark: 'İnce gri-beyaz homojen akıntı, vajinal pH >4.5, KOH ile balık kokusu veren pozitif whiff testi ve ipucu hücreleri',
        vignette:
          '26 yaşındaki kadın özellikle cinsel ilişki ve adet sonrasında artan kötü balık kokulu, ince gri renkli akıntı şikayetiyle başvuruyor. Vajinal pH 5.2 ölçülüyor, akıntıya %10 KOH damlatılınca keskin amin kokusu yükseliyor ve mikroskopide kenarları bakterilerle kaplı epitel hücreleri görülüyor',
        clues: ['kötü balık kokulu ince gri akıntı', 'vajinal pH 5.2 ve KOH ile amin kokusu', 'kenarları bakterilerle kaplı epitel hücreleri'],
        management: 'Oral veya topikal metronidazol ya da klindamisin tedavisi; cinsel yolla bulaşmadığından rutin eş tedavisi önerilmez',
        pearl: 'Amsel kriterlerinden 4’ünden 3’ü tanı koydurur; vajinal inflamasyon bulgusu (kaşıntı, eritem, bol lökosit) olmaması trikomonas ve kandidiyazdan ayırır.',
        trapFalse: 'vajinal pH 4.0’ın altındadır ve nüksü önlemek için cinsel partnerin mutlaka tedavi edilmesi şarttır',
        trapHighlight: 'cinsel partnerin mutlaka tedavi edilmesi şarttır',
      },
      {
        name: 'Vulvovajinal kandidiyazis',
        target: 'Antibiyotik kullanımı, diyabet veya gebelikte Candida albicans’ın blastospor ve psödohif formuna geçerek mukozayı irrite etmesi',
        hallmark: 'Şiddetli vulvar kaşıntı-yanma, peynir kesiği gibi beyaz kokusuz akıntı, normal pH 4.0-4.5 ve KOH preparatında psödohifler',
        vignette:
          'Sinüzit nedeniyle 10 gün amoksisilin-klavulanat kullanan 29 yaşındaki kadın şiddetli vulvar kaşıntı, kızarıklık ve eksternal dizüriyle başvuruyor. Muayenede vajen duvarlarına yapışık beyaz kesilmiş süt görünümlü kokusuz akıntı görülüyor, pH 4.2 ölçülüyor ve KOH preparatında dallanan psödohifler izleniyor',
        clues: ['antibiyotik kullanımı sonrası şiddetli kaşıntı', 'beyaz kesilmiş süt görünümlü akıntı', 'pH 4.2 ve dallanan psödohifler'],
        management: 'Komplike olmayan olgularda tek doz oral flukonazol 150 mg veya kısa süreli topikal klotrimazol/mikonazol; gebelikte sadece topikal azoller',
        pearl: 'Vajinal pH’ın normal (3.8-4.5) kaldığı tek major vajinit nedenidir; gebelikte oral flukonazol teratojenite riski nedeniyle tercih edilmez.',
        trapFalse: 'vajinal pH mutlaka 5.5’in üzerindedir ve tek seferlik oral metronidazol ile tedavi edilir',
        trapHighlight: 'vajinal pH mutlaka 5.5’in üzerindedir',
      },
      {
        name: 'Trikomoniyazis',
        target: 'Kamçılı anaerobik protozoon Trichomonas vaginalis’in cinsel temasla skuamöz epitele tutunup yoğun inflamasyon başlatması',
        hallmark: 'Sarı-yeşil köpüklü kötü kokulu akıntı, pH >4.5, servikste çilek görünümü ve taze yaymada hareketli kamçılı protozoonlar',
        vignette:
          '23 yaşındaki kadın bol miktarda sarı-yeşil köpüklü akıntı, vulvar tahriş ve ilişki sonrası lekelenmeyle başvuruyor. Spekulum muayenesinde servikste punktat kanamalı çilek görünümü saptanıyor, vajinal pH 6.0 ölçülüyor ve serum fizyolojik damlasında sıçrayarak hareket eden organizmalar izleniyor',
        clues: ['sarı-yeşil köpüklü akıntı', 'servikste punktat kanamalı çilek görünümü', 'sıçrayarak hareket eden organizmalar'],
        management: 'Hem hastaya hem de asemptomatik olsa bile cinsel partnerine tek doz 2 g veya 7 gün 2×500 mg oral metronidazol ya da tinidazol',
        pearl: 'Cinsel yolla bulaşan gerçek bir parazitozdur; topikal metronidazol jel üretral ve Skene bezlerine ulaşamadığı için başarısızdır, mutlaka sistemik oral tedavi verilir.',
        trapFalse: 'cinsel yolla bulaşmaz, partner tedavisi gereksizdir ve topikal vajinal jel ilk tercihtir',
        trapHighlight: 'partner tedavisi gereksizdir ve topikal vajinal jel ilk tercihtir',
      },
      {
        name: 'Pelvik inflamatuvar hastalık',
        target: 'Neisseria gonorrhoeae ve Chlamydia trachomatis’in endoserviksten endometrium, tüpler ve pelvik peritona assendan yayılımı',
        hallmark: 'Alt karın ağrısı, ateş, servikal hareket hassasiyeti, adneksiyal hassasiyet ve sağ üst kadranda Fitz-Hugh-Curtis perihepatiti',
        vignette:
          '22 yaşındaki kadın ateş, alt karın ağrısı, pürülan servikal akıntı ve nefes almakla artan sağ üst kadran ağrısıyla başvuruyor. Pelvik muayenede serviksin yanlara oynatılmasıyla aşırı ağrı (avize bulgusu) ve bilateral adneksiyal hassasiyet saptanıyor',
        clues: ['pürülan servikal akıntı ve ateş', 'serviksin oynatılmasıyla aşırı ağrı', 'sağ üst kadran ağrısı'],
        management: 'Ayaktan tedavide IM tek doz seftriakson artı 14 gün doksisiklin artı metronidazol; gebelik, yüksek ateş veya tubo-ovaryan apsede hastanede parenteral antibiyotik',
        pearl: 'Tanıda servikal hareket, uterin veya adneksiyal hassasiyetten en az birinin bulunması ampirik tedaviye başlamak için yeterlidir; geç dönemde ektopik gebelik ve tubal infertiliteye yol açar.',
        trapFalse: 'kesin tanı için tedaviye başlamadan önce mutlaka laparoskopi sonucu beklenir ve sadece penisilin verilir',
        trapHighlight: 'tedaviye başlamadan önce mutlaka laparoskopi sonucu beklenir',
      },
      {
        name: 'Şankroid',
        target: 'Gram negatif kokobasil Haemophilus ducreyi’nin cinsel temasla oluşturduğu nekrotizan genital ülser',
        hallmark: 'Yumuşak tabanlı, pürülan, oldukça ağrılı genital ülser ve süpüre olabilen tek taraflı ağrılı inguinal lenfadenopati (bubo)',
        vignette:
          '27 yaşındaki hasta cinsel temastan 5 gün sonra vulvada beliren kenarları oyulmuş, tabanı kirli sarı eksudalı ve dokunmakla çok ağrılı ülser ile sağ kasıkta fluktuasyon veren ağrılı şişlik nedeniyle başvuruyor. Gram boyamada okul sırası gibi dizilen gram negatif basiller görülüyor',
        clues: ['dokunmakla çok ağrılı kirli tabanlı ülser', 'kasıkta fluktuasyon veren ağrılı şişlik', 'okul sırası gibi dizilen basiller'],
        management: 'Tek doz oral azitromisin 1 g veya tek doz IM seftriakson 250 mg ve gerekiyorsa fluktuan bubonun iğne aspirasyonu',
        pearl: 'Sifiliz şankrının (ağrısız, sert tabanlı, ağrısız lenfadenopati) tam tersi olarak hem ülseri hem de eşlik eden kasık lenf nodu şiddetle ağrılıdır.',
        trapFalse: 'sert tabanlı tamamen ağrısız tek ülser yapar ve eşlik eden lenfadenopatiler daima ağrısızdır',
        trapHighlight: 'tamamen ağrısız tek ülser yapar',
      },
    ],
  },

  // 14. Serviks preinvaziv lezyonları ve serviks kanseri
  {
    branchId: 'kadindogum',
    subTopic: 'Serviks Preinvaziv Lezyonları ve Serviks Kanseri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Yüksek riskli HPV onkoprotein karsinogenezi',
        target: 'HPV 16 ve 18 kaynaklı E6 proteininin p53’ü yıkması ve E7 proteininin Rb tümör baskılayıcı proteini inaktive etmesi',
        hallmark: 'Servikal transformasyon zonunda perinükleer halolu koilositler ve kontrolsüz hücre döngüsü progresyonu',
        vignette:
          'Servikal tarama sitolojisi pozitif çıkan 34 yaşındaki kadının biyopsisinde bazal tabakadan yüzeye doğru atipi ve sitoplazmasında belirgin şeffaf halo ile buruşuk koyu nükleus içeren koilositik hücreler saptanıyor; genotiplemede HPV tip 16 DNA entegrasyonu doğrulanıyor',
        clues: ['perinükleer şeffaf halolu koilositler', 'HPV tip 16 DNA entegrasyonu', 'transformasyon zonunda atipi'],
        management: 'Primer korunma için 9-26 yaş arası profilaktik HPV aşısı ve sekonder korunma için düzenli Pap smear / HPV DNA taraması',
        pearl: 'HPV tip 16 servikal skuamöz kanserlerin, tip 18 ise özellikle endoservikal adenokarsinomların en sık etkenidir; E6 p53’ü, E7 Rb’yi bloke eder.',
        trapFalse: 'E6 proteini Rb genini aktive eder, E7 proteini ise p53’ü stabilize ederek apoptozu artırır',
        trapHighlight: 'E6 proteini Rb genini aktive eder',
      },
      {
        name: 'Düşük dereceli skuamöz intraepitelyal lezyon',
        target: 'Çoğunlukla geçici HPV enfeksiyonuna ikincil olarak servikal epitelin yalnızca alt üçte birinde sınırlı displazi (CIN 1)',
        hallmark: 'Epitelin alt katmanında hafif atipi, üst katmanda belirgin koilositoz ve özellikle genç yaşta yüksek spontan gerileme oranı',
        vignette:
          '23 yaşındaki kadının rutin Pap testinde düşük dereceli intraepitelyal lezyon saptanıyor ve kolposkopi eşliğinde alınan biyopside yalnızca bazal epitelin alt üçte birinde sınırlı hücresel atipi ile matürasyonun korunduğu (CIN 1) görülüyor',
        clues: ['23 yaşındaki kadın', 'epitelin alt üçte birinde sınırlı atipi', 'matürasyonun korunduğu'],
        management: 'Özellikle genç ve çocuk doğurmamış hastalarda eksizyon/konizasyon yapılmadan 12 ay sonra ko-test veya sitoloji ile izlem',
        pearl: 'Olguların %60-80’i bağışıklık sistemi tarafından temizlenerek kendiliğinden geriler; aşırı cerrahi tedavi servikal yetmezliğe yol açar.',
        trapFalse: 'acil soğuk konizasyon veya basit histerektomi gerektirir çünkü kendiliğinden gerilemesi mümkün değildir',
        trapHighlight: 'acil soğuk konizasyon veya basit histerektomi gerektirir',
      },
      {
        name: 'Yüksek dereceli skuamöz intraepitelyal lezyon',
        target: 'Persistan yüksek riskli HPV entegrasyonuyla epitel kalınlığının üçte ikisinden tam katına kadar uzanan displazi (CIN 2-3)',
        hallmark: 'Kolposkopide yoğun aseto-beyaz alan, kaba mozaik, kaba punktuasyon ve yüksek invaziv karsinoma ilerleme riski',
        vignette:
          'HPV 16 pozitif 35 yaşındaki kadının kolposkopisinde transformasyon zonunda asetik asit sonrası hızla beliren kalın beyaz plak ve kaba mozaik damar paterni görülüyor; biyopside epitelin neredeyse tüm kalınlığını tutan atipik bazaloid hücreler ve yüksek Ki-67 boyanması saptanıyor',
        clues: ['kalın beyaz plak ve kaba mozaik', 'epitelin neredeyse tüm kalınlığını tutan', 'HPV 16 pozitif'],
        management: 'Gebe değilse LEEP (loop elektrocerrahi eksizyon) veya soğuk konizasyon ile tüm transformasyon zonunun çıkarılması',
        pearl: 'Gebelikte saptanırsa invaziv kanser ekarte edildikten sonra eksizyonel işlem doğum sonrasına ertelenir.',
        trapFalse: 'eksizyonel işlem yapılmadan yalnızca 2 yıl aralıklarla Pap smear ile takip edilir',
        trapHighlight: 'yalnızca 2 yıl aralıklarla Pap smear ile takip edilir',
      },
      {
        name: 'Erken evre serviks kanseri',
        target: 'Bazal membranı aşarak stromayı 3-5 mm’den fazla invaze eden ancak parametriyum ve pelvik duvara ulaşmamış servikal malignite',
        hallmark: 'Postkoital vajinal kanama, sulu kötü kokulu akıntı ve servikse sınırlı klinik evre IB tümör',
        vignette:
          'Hiç tarama yaptırmamış 41 yaşındaki kadın cinsel ilişki sonrası ağrısız kanama şikayetiyle başvuruyor. Spekulumda servikste 2.5 cm’lik frajil egzofitik kitle görülüyor; rektovajinal muayenede parametriyumlar serbest ve MRG’de tümör servikse sınırlı saptanıyor',
        clues: ['cinsel ilişki sonrası ağrısız kanama', 'servikste 2.5 cm frajil kitle', 'parametriyumlar serbest'],
        management: 'Tip III radikal histerektomi artı bilateral pelvik lenfadenektomi; 2 cm altı ve çocuk isteyen hastada radikal trakelektomi',
        pearl: 'Küçük servikse sınırlı hastalıkta primer cerrahi seçilir; cerrahi sonrası pozitif sınır, parametriyal tutulum veya lenf nodu pozitifliği varsa adjuvan kemoradyoterapi eklenir.',
        trapFalse: 'parametriyal tutulum olmasa bile tüm hastalara ameliyattan önce mutlaka neoadjuvan kemoterapi verilir ve basit histerektomi yeterlidir',
        trapHighlight: 'basit histerektomi yeterlidir',
      },
      {
        name: 'Lokal ileri serviks kanseri',
        target: 'Parametriyal invazyon, vajen alt üçte bir tutulumu veya üreter basısıyla hidronefroza yol açan ileri pelvik yayılım',
        hallmark: 'Rektovajinal muayenede pelvik duvara uzanan fikse parametriyum veya tümöre bağlı hidronefroz',
        vignette:
          '54 yaşındaki kadın kötü kokulu kanlı akıntı, bel ağrısı ve bacak ödemiyle başvuruyor. Muayenede servikal tümörün vajen alt kısmına ve sağ parametriyum boyunca pelvik yan duvara uzandığı, ultrasonda sağ böbrekte hidronefroz bulunduğu saptanıyor',
        clues: ['pelvik yan duvara uzanan tümör', 'sağ böbrekte hidronefroz', 'kötü kokulu kanlı akıntı'],
        management: 'Radikal histerektomi yapılmadan primer tedavi olarak haftalık sisplatin eş zamanlı dıştan pelvik radyoterapi ve ardından brakiterapi',
        pearl: 'Serviks kanserinde en sık ölüm nedeni böbrek yetmezliğine yol açan bilateral üreter obstrüksiyonu ve üremidir; ileri evrede cerrahi morbiditeyi artırıp sağkalımı iyileştirmez.',
        trapFalse: 'parametriyum pelvik duvara fikse olsa bile ilk tedavi radikal histerektomi ve ardından tek başına hormonoterapidir',
        trapHighlight: 'ilk tedavi radikal histerektomi',
      },
    ],
  },

  // 15. Endometriyum ve uterus maligniteleri
  {
    branchId: 'kadindogum',
    subTopic: 'Endometriyum ve Uterus Maligniteleri',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Tip 1 endometrioid adenokarsinom',
        target: 'Karşılanmamış östrojen uyarısı ve PTEN, KRAS ile MSI mutasyonları sonucu hiperplazi zemininde gelişen iyi diferansiye tümör',
        hallmark: 'Obez, diyabetik, hipertansif postmenopozal kadında ağrısız vajinal kanama ve erken evrede iyi prognoz',
        vignette:
          'Hiç doğum yapmamış, obez, tip 2 diyabetik ve hipertansif 59 yaşındaki postmenopozal kadın 2 aydır süren ağrısız vajinal kanama ile başvuruyor. Ultrasonda endometriyal kalınlık 14 mm ölçülüyor ve pipelle biyopside grade 1 glandüler adenokarsinom saptanıyor',
        clues: ['hiç doğum yapmamış obez diyabetik kadın', 'ağrısız postmenopozal kanama', 'endometriyal kalınlık 14 mm'],
        management: 'Total histerektomi, bilateral salpingo-ooferektomi ve sentinel lenf nodu haritalaması veya pelvik-paraaortik lenfadenektomiyle cerrahi evreleme',
        pearl: 'Postmenopozal kanamada transvajinal ultrasonda endometriyum kalınlığı <=4 mm ise malignite olasılığı son derece düşüktür; >4 mm ise biyopsi şarttır.',
        trapFalse: 'atrofik endometriyum zemininde zayıf yaşlı kadınlarda gelişir ve p53 mutasyonu ile çok kötü prognozludur',
        trapHighlight: 'atrofik endometriyum zemininde zayıf yaşlı kadınlarda gelişir',
      },
      {
        name: 'Tip 2 seröz endometriyum karsinomu',
        target: 'Östrojenden bağımsız olarak atrofik endometriyum zemininde erken TP53 mutasyonuyla gelişen yüksek dereceli tümör',
        hallmark: 'Zayıf ileri yaşlı kadında agresif seyir, psammom cisimcikleri, diffüz p53 aşırı ekspresyonu ve erken peritoneal yayılım',
        vignette:
          'Vücut kitle indeksi 20 olan 73 yaşındaki kadın postmenopozal lekelenmeyle başvuruyor. Atrofik ince endometriyum zemininden alınan biyopside papiller yapılar, yüksek nükleer atipi, psammom cisimcikleri ve güçlü p53 immünreaktivitesi saptanıyor; omentumda erken implantlar görülüyor',
        clues: ['zayıf 73 yaşındaki kadın', 'atrofik endometriyum zemininden', 'psammom cisimcikleri ve güçlü p53'],
        management: 'Over kanserine benzer şekilde kapsamlı cerrahi evreleme (histerektomi, BSO, lenfadenektomi, omentektomi, peritoneal biyopsiler) ve adjuvan kemoradyoterapi',
        pearl: 'Östrojen maruziyeti veya hiperplaziyle ilişkisi yoktur; yüzeyel miyometriyal invazyonda bile ekstrauterin yayılım sık görülür.',
        trapFalse: 'obezite ve hiperöstrojenizm ile tetiklenir, daima hiperplazi zemininde başlar ve prognozu mükemmeldir',
        trapHighlight: 'obezite ve hiperöstrojenizm ile tetiklenir',
      },
      {
        name: 'Uterin leiomyosarkom',
        target: 'Miyometriyal düz kaslardan de novo gelişen, yüksek mitotik indeksli ve koagülatif nekrozlu mezenkimal malignite',
        hallmark: 'Postmenopozal kadında hızla büyüyen uterin kitle, kanama ve patolojide >10 mitoz/10 BBA ile koagülatif tümör nekrozu',
        vignette:
          'Menopoz sonrası 62 yaşındaki kadın son 4 ayda hızla büyüyen alt karın kitlesi, bası hissi ve vajinal kanama ile başvuruyor. Ameliyat öncesi benign fibroid sanılan 11 cm’lik kitle çıkarıldığında patolojide şiddetli sitolojik atipi, koagülatif nekroz ve yüksek büyütmede 18 mitoz saptanıyor',
        clues: ['menopoz sonrası hızla büyüyen kitle', 'koagülatif nekroz', 'yüksek büyütmede 18 mitoz'],
        management: 'Morcellasyondan kaçınılarak en-blok açık total histerektomi (lenfadenektomi rutin gerekmez); ileri hastalıkta doksorubisin veya gemsitabin-dosetaksel',
        pearl: 'Mevcut benign miyomların sarkoma dönüşmesi son derece nadirdir (<%0.5) ancak menopozda büyüyen kitle mutlaka malignite şüphesi doğurur; başlıca hematojen yolla akciğere yayılır.',
        trapFalse: 'laparoskopik morselasyonla parçalanarak çıkarılması en güvenli yöntemdir ve başlıca lenfatik yolla yayılır',
        trapHighlight: 'laparoskopik morselasyonla parçalanarak çıkarılması en güvenli yöntemdir',
      },
      {
        name: 'Düşük dereceli endometriyal stromal sarkom',
        target: 'Endometriyal stroma hücrelerinden köken alan ve sıklıkla t(7;17) JAZF1-SUZ12 translokasyonu taşıyan hormon duyarlı tümör',
        hallmark: 'Proliferatif stromaya benzeyen, miyometriyuma solucan benzeri dillerle giren CD10, ER ve PR pozitif tümör',
        vignette:
          '46 yaşındaki premenopozal kadın anormal uterin kanama nedeniyle histerektomi geçiriyor. Patolojide miyometriyum damarlarına ve kas lifleri arasına solucan benzeri uzantılar veren, tekdüze küçük yuvarlak hücrelerden oluşan CD10 ve östrojen-progesteron reseptör pozitif tümör görülüyor',
        clues: ['solucan benzeri uzantılar veren', 'CD10 ve östrojen-progesteron reseptör pozitif', '46 yaşındaki premenopozal kadın'],
        management: 'Total abdominal histerektomi ve bilateral salpingo-ooferektomi; hormon reseptör pozitifliği nedeniyle geç nükslerde progestin veya aromataz inhibitörü',
        pearl: 'Overlerin bırakılması yüksek östrojen uyarısıyla nüks riskini artırdığından BSO önerilir; yıllar sonra bile geç akciğer veya pelvik nüks yapabilir.',
        trapFalse: 'hormon reseptörleri tamamen negatiftir ve premenopozal kadında overlerin korunması önerilir',
        trapHighlight: 'hormon reseptörleri tamamen negatiftir',
      },
      {
        name: 'Lynch sendromu ilişkili endometriyum kanseri',
        target: 'MLH1, MSH2, MSH6 veya PMS2 DNA yanlış eşleşme onarım genlerindeki kalıtsal mutasyon kaynaklı malignite',
        hallmark: '50 yaş altında gelişen tümör, ailede kolon-over kanseri öyküsü ve immünohistokimyada MMR protein kaybı',
        vignette:
          '38 yaşında kolon kanseri geçirmiş 44 yaşındaki kadın hasta düzensiz kanama sonrası alınan biyopside alt uterin segment yerleşimli endometrioid adenokarsinom tanısı alıyor. İmmünohistokimyada MSH2 ve MSH6 protein ekspresyon kaybı ile yüksek mikrosatellit instabilite saptanıyor',
        clues: ['38 yaşında kolon kanseri geçirmiş', 'MSH2 ve MSH6 protein ekspresyon kaybı', 'yüksek mikrosatellit instabilite'],
        management: 'Cerrahi evreleme, genetik danışmanlık ve taşıyıcı kadınlarda 35 yaş sonrası veya doğurganlık tamamlanınca profilaktik histerektomi artı BSO',
        pearl: 'Bu sendromlu kadınlarda endometriyum kanseri gelişme yaşam boyu riski %40-60’a ulaşır ve sıklıkla ilk sentinel kanser olarak ortaya çıkar.',
        trapFalse: 'BRCA1 mutasyonu kaynaklıdır ve sadece postmenopozal 75 yaş üstü kadınlarda görülür',
        trapHighlight: 'BRCA1 mutasyonu kaynaklıdır',
      },
    ],
  },

  // 16. Epitelyal over tümörleri
  {
    branchId: 'kadindogum',
    subTopic: 'Epitelyal Over Tümörleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Yüksek dereceli seröz over karsinomu',
        target: 'BRCA1/2 ve TP53 mutasyonlarıyla sıklıkla fallop tüpü fimbrial ucundaki STIC lezyonlarından gelişen epitelyal tümör',
        hallmark: 'İleri evrede asit ve omental kekleşme ile başvuran hastada psammom cisimcikleri ve yüksek serum CA-125 düzeyi',
        vignette:
          '61 yaşındaki kadın karında şişlik, erken doyma ve kilo kaybıyla başvuruyor. Muayenede batında asit ve pelvik kitle, BT’de bilateral adneksiyal kitle ve omental kekleşme, laboratuvarda CA-125 düzeyi 1450 U/mL bulunuyor; patolojide papiller dizilim ve psammom cisimcikleri izleniyor',
        clues: ['asit ve omental kekleşme', 'CA-125 düzeyi 1450 U/mL', 'psammom cisimcikleri'],
        management: 'Optimal sitoredüktif cerrahi sonrası platin-taksan kemoterapisi ve BRCA mutasyonu veya HRD pozitifse PARP inhibitörü (olaparib/niraparib) idamesi',
        pearl: 'En sık görülen malign over tümörüdür; günümüzde çoğunun distal fallop tüpü epitelinden kaynaklandığı bilinmektedir.',
        trapFalse: 'genellikle evre I’de yakalanır, CA-125 yükselmez ve kemoterapiye tamamen dirençlidir',
        trapHighlight: 'kemoterapiye tamamen dirençlidir',
      },
      {
        name: 'Müsinöz over tümörü',
        target: 'İntestinal veya endoservikal tip müsin üreten sıklıkla KRAS mutasyonlu büyük multikistik epitelyal neoplazm',
        hallmark: 'Dev boyutlara ulaşabilen tek taraflı kitle veya apendiks kaynaklı psödomiksoma peritonei ile jelatinöz asit',
        vignette:
          '53 yaşındaki kadın karnında giderek büyüyen dev kitle hissiyle başvuruyor. Görüntülemede 24 cm çaplı, çok odacıklı, içi yoğun sıvı dolu tek taraflı adneksiyal kitle görülüyor; serum CEA yükselmiş iken CA-125 normal bulunuyor',
        clues: ['24 cm çaplı çok odacıklı kitle', 'serum CEA yükselmiş', 'tek taraflı adneksiyal kitle'],
        management: 'Cerrahi evreleme sırasında primer GİS veya apendiks tümörünü dışlamak için endoskopi-kolonoskopi ve apendektomi yapılması',
        pearl: 'Bilateral müsinöz tutulum veya psödomiksoma peritonei varsa kaynak genellikle over değil rüptüre olmuş apendiks müsinöz neoplazmıdır.',
        trapFalse: 'her zaman bilateraldir ve en sık psammom cisimcikleri ile yüksek AFP üretir',
        trapHighlight: 'en sık psammom cisimcikleri ile yüksek AFP üretir',
      },
      {
        name: 'Berrak hücreli over karsinomu',
        target: 'Endometriozis zemininde ARID1A ve PIK3CA mutasyonlarıyla gelişen şeffaf sitoplazmalı epitelyal malignite',
        hallmark: 'Glikojenden zengin şeffaf hücreler, hobnail paterni, endometriozis öyküsü ve yüksek tromboemboli-paraneoplastik hiperkalsemi riski',
        vignette:
          'Uzun süreli pelvik endometriozis öyküsü olan 48 yaşındaki kadın sol bacakta derin ven trombozu ve tek taraflı adneksiyal kitleyle değerlendiriliyor. Kalsiyumu 12.1 mg/dL ölçülen hastanın tümör biyopsisinde hobnail çıkıntılı, berrak glikojenli sitoplazmalı hücreler görülüyor',
        clues: ['uzun süreli endometriozis öyküsü', 'derin ven trombozu ve kalsiyum 12.1 mg/dL', 'hobnail çıkıntılı berrak hücreler'],
        management: 'Kapsamlı cerrahi evreleme ve nüks riski nedeniyle adjuvan platin bazlı kemoterapi artı venöz tromboemboli profilaksisi',
        pearl: 'Endometrioid alt tiple birlikte endometriozis ile en güçlü ilişkili iki epitelyal over kanserinden biridir ve kemoterapi duyarlılığı seröz tipten düşüktür.',
        trapFalse: 'platin kemoterapisine en duyarlı over tümörüdür ve endometriozis ile hiç ilişkisi yoktur',
        trapHighlight: 'endometriozis ile hiç ilişkisi yoktur',
      },
      {
        name: 'Brenner tümörü',
        target: 'Ürotelyumu taklit eden transisyonel epitel yuvaları ve yoğun fibröz stromal proliferasyon içeren epitelyal tümör',
        hallmark: 'Kahve çekirdeği şeklinde uzunlamasına nükleer oluklara sahip Walthard hücre yuvaları benzeri epitelyal adalar',
        vignette:
          '56 yaşındaki asemptomatik kadının pelvik ultrasonunda tesadüfen sağ overde 4 cm’lik sert solid kitle saptanıyor. Çıkarılan tümörün kesit yüzeyi sarı-beyaz ve lifli görülüyor; mikroskopide yoğun fibroblast stroma içinde kahve çekirdeği nükleuslu ürotelyal epitel adaları izleniyor',
        clues: ['sert solid kitle', 'kahve çekirdeği nükleuslu ürotelyal epitel adaları', 'yoğun fibroblast stroma'],
        management: '%95’ten fazlası benign ve tek taraflı olduğundan basit cerrahi eksizyon (ooferektomi)',
        pearl: 'Kahve çekirdeği nükleus bulgusu kitleyi seks kord tümörü olan granüloza hücreli tümörle paylaştırsa da ürotelyal yuvalar ve Call-Exner yokluğuyla ayrılır.',
        trapFalse: 'çoğunluğu yüksek dereceli malign olup agresif kemoterapi gerektirir ve psammom cisimcikleri patognomoniktir',
        trapHighlight: 'çoğunluğu yüksek dereceli malign olup agresif kemoterapi gerektirir',
      },
      {
        name: 'Meigs sendromu',
        target: 'Benign solid over fibromunun sıvı sızdırması ve diyafragma lenfatikleriyle sağ plevral boşluğa efüzyon birikmesi',
        hallmark: 'Benign over fibromu, batında asit ve sıklıkla sağ taraflı hidrotorakstan oluşan triad',
        vignette:
          '60 yaşındaki kadın nefes darlığı ve karın şişliğiyle başvuruyor. Akciğer grafisinde sağ tarafta masif plevral efüzyon, batında asit ve pelviste 10 cm sert solid over kitlesi saptanıyor; plevral sıvı ve asit sitolojisi tamamen benign geliyor',
        clues: ['sağ tarafta masif plevral efüzyon', 'batında asit ve sert solid over kitlesi', 'sitolojisi tamamen benign'],
        management: 'Over fibromunun cerrahi olarak çıkarılması; tümör çıkarıldıktan sonra asit ve plevral efüzyon kendiliğinden kalıcı olarak kaybolur',
        pearl: 'Plevral efüzyon ve asit varlığı ilk bakışta evre IV maligniteyi taklit etse de tümör çıkarılınca tamamen düzelir.',
        trapFalse: 'inoperabl evre IV over kanseri tablosudur ve yalnızca palyatif kemoterapi uygulanır',
        trapHighlight: 'inoperabl evre IV over kanseri tablosudur',
      },
    ],
  },

  // 17. Germ hücreli ve seks kord-stromal over tümörleri (ÖSYM Twin 7 -> EXACTLY 7th twin in ObGyn!)
  {
    branchId: 'kadindogum',
    subTopic: 'Germ Hücreli ve Seks Kord-Stromal Over Tümörleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Matür kistik teratom',
        target: 'Üç germ yaprağından köken alan tamamen diferansiye dokular içeren en sık benign germ hücreli over tümörü',
        hallmark: 'Genç kadında ultrasonda Rokitansky nodülü, yağ-kıl-diş içeriği ve artmış over torsiyonu riski',
        vignette:
          '24 yaşındaki kadın ani başlayan şiddetli sağ kasık ağrısı, bulantı ve kusmayla acile geliyor. Ultrasonda sağ overde 8 cm’lik ekojenik gölge veren yağ-sıvı seviyeli ve diş kalsifikasyonu içeren kitle ile Doppler’de azalmış kan akımı saptanıyor',
        clues: ['24 yaşındaki kadın', 'yağ-sıvı seviyeli ve diş kalsifikasyonu', 'ani kasık ağrısı ve Doppler’de azalmış akım'],
        management: 'Torsiyon varsa acil laparoskopik detorsiyon ve over dokusunu koruyucu kistektomi; struma ovarii varsa tiroid fonksiyon kontrolü',
        pearl: 'Üreme çağındaki kadınlarda en sık görülen benign over neoplazmıdır ve yaklaşık %10-15 oranında bilateraldir; %1-2 olguda yaşlılarda skuamöz karsinoma dönüşebilir.',
        trapFalse: 'en sık postmenopozal kadınlarda görülür ve yüksek malignite nedeniyle her hastada radikal histerektomi yapılır',
        trapHighlight: 'her hastada radikal histerektomi yapılır',
      },
      {
        name: 'Disgerminom',
        target: 'Testis seminomunun overdeki karşılığı olup c-KIT mutasyonu taşıyabilen yüksek radyosensitiviteli malign germ hücreli tümör',
        hallmark: 'Genç kadında şeffaf glikojenli hücre tabakaları, fibröz septada lenfosit infiltrasyonu ve yüksek serum LDH',
        vignette:
          '19 yaşındaki kadın karında hızla büyüyen ağrısız kitleyle başvuruyor. Ultrasonda solid lobüle 11 cm sağ adneksiyal kitle saptanıyor; AFP normal, beta-hCG hafif yüksek (15 mIU/mL) ve serum LDH belirgin yükselmiş bulunuyor',
        clues: ['19 yaşındaki kadın', 'AFP normal ve LDH belirgin yüksek', 'solid lobüle adneksiyal kitle'],
        management: 'Fertilite koruyucu tek taraflı salpingo-ooferektomi ve cerrahi evreleme; ileri evrede yüksek kür oranlı BEP kemoterapisi',
        pearl: 'En sık görülen malign germ hücreli over tümörüdür; gebelikte tanı konulan malign over tümörlerinin de başında gelir ve %10-15 bilateraldir.',
        trapFalse: 'radyoterapiye ve kemoterapiye tamamen dirençlidir, serum AFP düzeyi binlerce ng/mL’ye yükselir',
        trapHighlight: 'serum AFP düzeyi binlerce ng/mL’ye yükselir',
      },
      {
        name: 'Over yolk sac tümörü',
        target: 'Ekstraembriyonik endodermal sinüsü taklit eden hızla büyüyen ve erken yayılan malign germ hücreli tümör',
        hallmark: 'Çocuk veya genç kadında patognomonik Schiller-Duval cisimcikleri ve belirgin yüksek serum AFP',
        vignette:
          '16 yaşındaki kız hasta son 3 haftada hızla büyüyen karın kitlesi ve ağrıyla başvuruyor. Serum AFP düzeyi 8400 ng/mL ölçülen hastanın tümör patolojisinde santral kapiller çevresinde tümör hücrelerinden oluşan glomerül benzeri Schiller-Duval cisimcikleri izleniyor',
        clues: ['16 yaşındaki kız hasta', 'serum AFP düzeyi 8400 ng/mL', 'glomerül benzeri Schiller-Duval cisimcikleri'],
        management: 'Tek taraflı salpingo-ooferektomi sonrası tüm evrelerde adjuvan BEP (bleomisin, etoposid, sisplatin) kemoterapisi',
        pearl: 'Hızlı agresif seyrine rağmen BEP kemoterapisine çok iyi yanıt verir ve tek taraflı cerrahiyle fertilite korunabilir.',
        trapFalse: 'evre IA hastalıkta ameliyat sonrası kemoterapi gerekmez ve AFP düzeyi daima normaldir',
        trapHighlight: 'AFP düzeyi daima normaldir',
      },
      {
        name: 'Granüloza hücreli tümör',
        target: 'FOXL2 mutasyonu taşıyan ve aşırı östrojen ile inhibin salgılayan düşük malign potansiyelli seks kord-stromal tümör',
        hallmark: 'Çocukta erken puberte, postmenopozal kadında östrojenik kanama, Call-Exner cisimcikleri ve yüksek inhibin B',
        vignette:
          '57 yaşındaki postmenopozal kadın vajinal kanama ve sol adneksiyal solid-kistik kitleyle başvuruyor. Endometriyal biyopside atipili hiperplazi saptanan hastanın çıkarılan over kitlesinde eozinofilik sıvı dolu rozetler (Call-Exner cisimcikleri) ve kahve çekirdeği nükleuslar görülüyor',
        clues: ['postmenopozal kanama ve endometriyal hiperplazi', 'eozinofilik sıvı dolu rozetler (Call-Exner)', 'kahve çekirdeği nükleuslar'],
        management: 'Cerrahi evreleme, eşlik eden endometriyal kanseri dışlamak için endometriyal örnekleme ve 10-20 yıl sonra bile nüks edebildiğinden uzun süreli inhibin B takibi',
        pearl: 'Aşırı östrojen salgıladığı için %25-50 endometriyal hiperplazi ve %5-10 endometriyum kanseri eşlik eder; tümör belirteci inhibin B’dir.',
        trapFalse: 'testosteron salgılayarak virilizasyon yapar ve nüks riski ilk 1 yıl içinde tamamen biter',
        trapHighlight: 'testosteron salgılayarak virilizasyon yapar',
      },
      {
        name: 'Sertoli-Leydig hücreli tümör',
        target: 'DICER1 mutasyonuyla ilişkili testosteron salgılayabilen androjenik seks kord-stromal over tümörü',
        hallmark: 'Genç kadında hızlı gelişen hirsutizm, ses kalınlaşması, klitoromegali, yüksek testosteron ve Reinke kristalleri',
        vignette:
          '24 yaşındaki kadın son 5 ayda adetlerinin kesilmesi, yüzde kalın sakal çıkması, sesinin kalınlaşması, kas kütlesi artışı ve klitoris büyümesi şikayetiyle başvuruyor. Serum testosteronu 480 ng/dL iken DHEA-S normal bulunuyor ve sol overde 6 cm’lik solid kitle çıkarıldığında Reinke kristalleri izleniyor',
        clues: ['son 5 ayda sakal çıkması ve ses kalınlaşması', 'testosteron 480 ng/dL ve DHEA-S normal', 'Reinke kristalleri'],
        management: 'Genç hastada tek taraflı salpingo-ooferektomi (yüksek grade veya heterolog elemanda adjuvan kemoterapi) ve cerrahi sonrası androjen düşüşünün izlemi',
        pearl: 'Çok yüksek testosterona rağmen DHEA-S’in normal olması androjen kaynağının adrenal değil over tümörü olduğunu kanıtlar.',
        trapFalse: 'DHEA-S belirgin yükselir, aşırı östrojen salgılar ve çocukta izoseksüel puberte prekoks yapar',
        trapHighlight: 'aşırı östrojen salgılar',
      },
    ],
  },

  // 18. Gestasyonel trofoblastik neoplazi yönetimi
  {
    branchId: 'kadindogum',
    subTopic: 'Gestasyonel Trofoblastik Neoplazi Yönetimi',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'İnvaziv mol',
        target: 'Mol boşaltılması sonrası hidropik koryon villuslarının doğrudan miyometriyuma ve uterus damarlarına penetre olması',
        hallmark: 'Küretaj sonrası beta-hCG’nin 3 hafta platoda kalması veya 2 hafta yükselmesi ve miyometriyumda hipervasküler invazyon',
        vignette:
          'Komplet mol nedeniyle 5 hafta önce vakum küretaj yapılan 26 yaşındaki kadının haftalık beta-hCG değerleri 4800, 4950 ve 5400 mIU/mL şeklinde yükseliş gösteriyor. Renkli Doppler ultrasonda miyometriyum duvarı içine giren hipervasküler kistik alan saptanıyor; akciğer grafisi temiz bulunuyor',
        clues: ['beta-hCG değerleri 4800, 4950 ve 5400', 'miyometriyum duvarı içine giren hipervasküler alan', '5 hafta önce vakum küretaj'],
        management: 'FIGO risk skorlaması sonrası genellikle düşük risk grubunda tek ajan metotreksat veya aktinomisin-D kemoterapisi',
        pearl: 'Koryokarsinomdan farklı olarak doku içinde hidropik villus yapıları korunmuştur ve çok nadiren uzak organ metastazı yapar.',
        trapFalse: 'koryonik villus yapısı tamamen kaybolmuştur ve primer tedavisi kemoterapi verilmeden acil histerektomidir',
        trapHighlight: 'koryonik villus yapısı tamamen kaybolmuştur',
      },
      {
        name: 'Gestasyonel koryokarsinom',
        target: 'Koryon villusu oluşturmayan malign sitotrofoblast ve sinsityotrofoblastların erken vasküler invazyon ve hematojen yayılımı',
        hallmark: 'Term doğum, düşük veya mol sonrası kanama, çok yüksek beta-hCG ve akciğerlerde top güllesi metastazları',
        vignette:
          'Altı ay önce normal term doğum yapmış 31 yaşındaki kadın düzensiz kanama, öksürük ve kanlı balgam ile başvuruyor. Akciğer grafisinde bilateral çok sayıda yuvarlak top güllesi nodüller, beyin MRG’de metastaz ve serum beta-hCG 185.000 mIU/mL saptanıyor',
        clues: ['altı ay önce normal term doğum', 'akciğerde top güllesi nodüller', 'beta-hCG 185.000 mIU/mL'],
        management: 'FIGO skoru >=7 yüksek risk ve beyin/karaciğer metastazı varlığında EMA-CO (etoposid, metotreksat, aktinomisin-D, siklofosfamid, vinkristin) kombine kemoterapisi',
        pearl: 'Olguların yarısı molden, dörtte biri düşük veya ektopikten, dörtte biri ise normal term gebelikten sonra gelişir; doku biyopsisi kanama riski nedeniyle yapılmaz.',
        trapFalse: 'tanıyı doğrulamak için akciğer ve vajinal metastazlardan mutlaka kalın iğne biyopsisi alınmalıdır',
        trapHighlight: 'vajinal metastazlardan mutlaka kalın iğne biyopsisi alınmalıdır',
      },
      {
        name: 'Plasental yatak trofoblastik tümörü',
        target: 'İmplantasyon yatağındaki intermediate trofoblastlardan gelişen yavaş büyüyen kemorezistan neoplazm',
        hallmark: 'Düşük veya sınırda beta-hCG düzeyine karşın güçlü insan plasental laktojen (hPL) pozitifliği ve kemoterapi direnci',
        vignette:
          'İki yıl önce term doğum yapan 34 yaşındaki kadın amenore ve hafif kanama şikayetiyle başvuruyor. Ultrasonda uterusta hipervasküler myometriyal kitle görülüyor ancak beta-hCG yalnızca 65 mIU/mL ölçülüyor; küretaj patolojisinde villus olmayan intermediate trofoblastlar ve yoğun hPL boyanması saptanıyor',
        clues: ['beta-hCG yalnızca 65 mIU/mL', 'yoğun hPL boyanması', 'intermediate trofoblastlar'],
        management: 'Metotreksat ve diğer kemoterapötiklere dirençli olduğundan uterusa sınırlı olgularda primer cerrahi histerektomi',
        pearl: 'Sinsityotrofoblast yerine intermediate trofoblast ağırlıklı olduğu için beta-hCG düşük, hPL belirgin pozitiftir; erken cerrahi temel tedavidir.',
        trapFalse: 'metotreksat tek ajan kemoterapisine %99 yanıt verir ve serum beta-hCG milyonların üzerine çıkar',
        trapHighlight: 'metotreksat tek ajan kemoterapisine %99 yanıt verir',
      },
      {
        name: 'Epiteloid trofoblastik tümör',
        target: 'Koryon laeve tipi intermediate trofoblastlardan gelişip servikal skuamöz karsinomu taklit edebilen nadir tümör',
        hallmark: 'Düşük beta-hCG, coğrafi hiyalin nekroz alanları, p63 pozitifliği ve alt uterin segment-endoserviks yerleşimi',
        vignette:
          'Dört yıl önce normal doğum yapmış 37 yaşındaki kadında alt uterin segment ile endoserviks arasında yer alan kitle biyopsisinde hiyalinize nekroz çevresinde üniform epiteloid hücreler, p63 ile alfa-inhibin pozitifliği ve hafif yüksek 48 mIU/mL beta-hCG saptanıyor',
        clues: ['alt uterin segment ile endoserviks arasında', 'p63 ile alfa-inhibin pozitifliği', '48 mIU/mL beta-hCG'],
        management: 'Kemoterapi direnci nedeniyle primer tedavi olarak cerrahi histerektomi ve izole akciğer metastazlarının rezeksiyonu',
        pearl: 'Endoserviks yerleşimi ve p63 pozitifliği nedeniyle serviks kanseriyle karıştırılabilir; düşük hCG artışı trofoblastik kökeni işaret eder.',
        trapFalse: 'HPV ile ilişkilidir ve primer tedavisi radyoterapi artı tek ajan metotreksattır',
        trapHighlight: 'HPV ile ilişkilidir',
      },
      {
        name: 'Düşük riskli gestasyonel trofoblastik neoplazi',
        target: 'FIGO/WHO prognostik skoru 0-6 arasında olan metastazsız veya yalnızca akciğer-vajen tutulumlu trofoblastik hastalık',
        hallmark: 'Mol sonrası izlemde beta-hCG platosu veya artışı saptanıp prognostik skorun 6 ve altında hesaplanması',
        vignette:
          'Parsiyel mol boşaltılmasından 4 hafta sonra beta-hCG değeri 3 hafta üst üste 1200 mIU/mL civarında plato çizen 24 yaşındaki hastada metastaz sadece vajen ön duvarında 1.5 cm’lik nodül şeklinde saptanıyor ve FIGO risk skoru 3 hesaplanıyor',
        clues: ['3 hafta üst üste 1200 mIU/mL plato', 'FIGO risk skoru 3', '24 yaşındaki hasta'],
        management: 'Tek ajan metotreksat (folinik asit kurtarmalı) veya aktinomisin-D ile hCG negatifleşene kadar tedavi ve 1 yıl kontrasepsiyon',
        pearl: 'Akciğer ve vajen dışı (karaciğer, beyin) metastaz olmadan skor <=6 ise tek ajan kemoterapiyle kür oranı %99’un üzerindedir.',
        trapFalse: 'tedavide mutlaka başlangıçtan itibaren EMA-CO çoklu ajan kemoterapisi ve tüm beyin radyoterapisi verilir',
        trapHighlight: 'EMA-CO çoklu ajan kemoterapisi ve tüm beyin radyoterapisi',
      },
    ],
  },

  // 19. Pelvik organ prolapsusu ve üriner inkontinans
  {
    branchId: 'kadindogum',
    subTopic: 'Pelvik Organ Prolapsusu ve Üriner İnkontinans',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Stres üriner inkontinans',
        target: 'Vajinal doğum travması ve pelvik taban zayıflığı sonucu üretral hipermobilite veya intrinsik sfinkter yetmezliği',
        hallmark: 'Öksürme, hapşırma, gülme veya ağır kaldırmayla istemsiz idrar kaçırma ve pozitif Q-tip testi (>30 derece)',
        vignette:
          'Üç kez vajinal doğum yapmış 47 yaşındaki kadın hasta öksürürken, hapşırırken ve ip atlarken damla-fışkırır tarzda idrar kaçırdığını, gece idrara kalkmadığını belirtiyor. Öksürük stres testi pozitif, postmiksiyonel rezidü idrar 15 mL ve Q-tip açısı 45 derece ölçülüyor',
        clues: ['öksürürken ve hapşırırken idrar kaçırdığını', 'postmiksiyonel rezidü idrar 15 mL', 'Q-tip açısı 45 derece'],
        management: 'Kilo kaybı, pelvik taban Kegel egzersizleri, üretral pesser ve cerrahi altın standart olarak midüretral sentetik sling (TVT veya TOT)',
        pearl: 'Detrusor kasılması olmadan karın içi basıncının üretral kapanma basıncını aşmasıdır; antikolinerjik ilaçlar bu tipte etkisizdir.',
        trapFalse: 'tedavide ilk basamak ilaç olarak antimuskarinik oksibutinin veya mirabegron verilir',
        trapHighlight: 'ilk basamak ilaç olarak antimuskarinik oksibutinin',
      },
      {
        name: 'Sıkışma tipi inkontinans',
        target: 'Mesane dolum fazında kontrolsüz detrusor düz kas aşırı aktivitesi ve istemsiz kontraksiyonlar',
        hallmark: 'Aniden bastıran ertelenemeyen idrar yapma hissiyle eş zamanlı kaçırma, sık idrara çıkma ve nokturia',
        vignette:
          '56 yaşındaki kadın hasta evin kapısını açarken veya su sesi duyduğunda aniden gelen çok şiddetli idrar yapma hissine engel olamayıp tuvalete yetişemeden idrar kaçırdığını, günde 12 kez ve gece 3 kez idrara çıktığını anlatıyor. İdrar kültürü temiz ve rezidü idrar 20 mL bulunuyor',
        clues: ['aniden gelen şiddetli hisle tuvalete yetişemeden', 'günde 12 kez ve gece 3 kez', 'idrar kültürü temiz'],
        management: 'Kafein-sıvı düzenlemesi, mesane eğitimi ve farmakolojik tedavide antimuskarinik ajanlar (oksibutinin, tolterodin, solifenasin) veya beta-3 agonist mirabegron',
        pearl: 'Başlangıçta mutlaka idrar yolu enfeksiyonu dışlanmalıdır; dar açılı glokomda antimuskarinikler kontrendikedir ve beta-3 agonist tercih edilir.',
        trapFalse: 'Q-tip testi 45 derecenin üzerindedir ve kesin tedavisi midüretral sling cerrahisidir',
        trapHighlight: 'kesin tedavisi midüretral sling cerrahisidir',
      },
      {
        name: 'Taşma inkontinansı',
        target: 'Diyabetik otonom nöropati, nörolojik hastalık veya pelvik kitle obstrüksiyonuna bağlı detrusor hipoaktivitesi ve kronik retansiyon',
        hallmark: 'Sürekli damla damla idrar sızıntısı, tam boşaltamama hissi ve 200 mL üzeri yüksek postmiksiyonel rezidüel idrar',
        vignette:
          'Yirmi yıldır kötü kontrollü tip 2 diyabeti olan 64 yaşındaki kadın hasta sürekli iç çamaşırını ıslatan damla damla idrar sızıntısı ve alt karında dolgunlukla başvuruyor. İdrar yaptıktan hemen sonra takılan kateterle mesaneden 520 mL rezidüel idrar boşaltılıyor',
        clues: ['kötü kontrollü tip 2 diyabet', 'sürekli damla damla sızıntı', '520 mL rezidüel idrar'],
        management: 'Altta yatan obstrüksiyonun giderilmesi, temiz aralıklı kendi kendine kateterizasyon veya detrusor hipoaktivitesinde kolinerjik agonist betanekol',
        pearl: 'Normal postmiksiyonel rezidü <50 mL’dir; 200 mL üzeri kronik boşaltma kusurunu gösterir ve antikolinerjik verilmesi retansiyonu ağırlaştırır.',
        trapFalse: 'mesane tamamen boştur, rezidüel idrar 10 mL’nin altındadır ve oksibutinin ile tedavi edilir',
        trapHighlight: 'oksibutinin ile tedavi edilir',
      },
      {
        name: 'Vezikovajinal fistül',
        target: 'Abdominal histerektomi sonrası termal/dikiş hasarı veya gelişmekte olan ülkelerde uzamış doğum iskemisiyle mesane-vajen traktı',
        hallmark: 'Ameliyat sonrası günler içinde başlayan sürekli ağrısız vajinal idrar sızıntısı ve metilen mavisi tampon testinin pozitifliği',
        vignette:
          'İki hafta önce büyük miyom nedeniyle total abdominal histerektomi geçiren 48 yaşındaki kadın hasta son 5 gündür gece-gündüz hiç durmadan vajinasından berrak idrar geldiğini belirtiyor. Vajene gazlı bez konulup mesaneye metilen mavisi verildiğinde tamponun koyu maviye boyandığı görülüyor',
        clues: ['total abdominal histerektomi geçiren', 'gece-gündüz hiç durmadan vajinasından idrar', 'tamponun koyu maviye boyandığı'],
        management: 'Çok küçük erken olgularda 4-6 hafta kesintisiz Foley kateter drenajı; kalıcı fistüllerde Latzko vajinal veya transabdominal katmanlı cerrahi onarım',
        pearl: 'Mesaneye metilen mavisi verildiğinde tampon boyanmaz ama ıslanırsa üreterovajinal fistülden şüphelenilir; ağızdan fenazopiridin veya IV indigo karmin bunu ayırır.',
        trapFalse: 'tampon testi negatif çıkar ve tedavide yalnızca pelvik taban Kegel egzersizleri yeterlidir',
        trapHighlight: 'yalnızca pelvik taban Kegel egzersizleri yeterlidir',
      },
      {
        name: 'Pelvik organ prolapsusu',
        target: 'Doğum travması ve bağ dokusu zayıflığıyla endopelvik fasya ve levator ani kas desteğinin bozulup pelvik organların vajene fıtıklaşması',
        hallmark: 'Vajinada dolgunluk ve aşağı sarkan kitle hissi ile POP-Q muayenesinde himen düzeyine inen ön/arka duvar veya serviks',
        vignette:
          'Dört zorlu vajinal doğum yapmış 63 yaşındaki kadın hasta yürürken vajinasından dışarı çıkan yumurta büyüklüğünde şişlik ve elle içeri itmeden idrarını rahat boşaltamama şikayetiyle başvuruyor. Ikınma muayenesinde mesane ve uterus apeksinin introitus dışına çıktığı görülüyor',
        clues: ['dört zorlu vajinal doğum', 'elle içeri itmeden idrarını boşaltamama', 'introitus dışına çıktığı'],
        management: 'Asemptomatikse tedavi gerekmez; cerrahi istemeyen veya yaşlıda vajinal pesser; semptomatikte sakrokolpopeksi veya vajinal histerektomi artı ön-arka kolporafi',
        pearl: 'İleri evre ön duvar sarkması üretrayı bükerek mevcut idrar kaçırmayı gizleyebilir (okült stres inkontinans); bu nedenle tamir öncesi redükte stres testi yapılır.',
        trapFalse: 'asemptomatik evre I olgularda dahi kanser riskini önlemek için mutlaka sakrokolpopeksi cerrahisi yapılmalıdır',
        trapHighlight: 'kanser riskini önlemek için mutlaka sakrokolpopeksi cerrahisi yapılmalıdır',
      },
    ],
  },

  // 20. Menopoz fizyolojisi ve osteoporoz/hormon replasman tedavisi
  {
    branchId: 'kadindogum',
    subTopic: 'Menopoz Fizyolojisi, Osteoporoz ve Hormon Replasman Tedavisi',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Fizyolojik menopoz',
        target: 'Primordial folikül havuzunun tükenmesine bağlı inhibin ve östradiol düşüşüyle hipofizer negatif geri bildirimin kalkması',
        hallmark: '12 ay kesintisiz amenore sonrası yüksek FSH (>40 IU/L), östradiol yerine yağ dokusundan östronun baskınlaşması ve sıcak basmaları',
        vignette:
          '52 yaşındaki kadın hasta son 14 aydır hiç adet görmediğini, geceleri terleten yoğun sıcak basmaları ve uyku bölünmesi yaşadığını belirtiyor. Gebelik dışı hormonal panelde serum FSH 78 IU/L ve östradiol 12 pg/mL saptanıyor',
        clues: ['14 aydır hiç adet görmediğini', 'geceleri terleten sıcak basmaları', 'FSH 78 IU/L ve östradiol 12 pg/mL'],
        management: 'Tanının klinik olarak 12 ay amenoreyle konulması; şiddetli vazomotor semptomlu ve 60 yaş altı/menopozdan <10 yıl geçmiş kontrendikasyonsuz hastada hormon replasman tedavisi',
        pearl: 'Üreme çağındaki primer östrojen östradiol iken, menopoz sonrasında adrenal androstenedionun periferik yağ dokusunda aromatize olmasıyla oluşan östron (E1) baskındır.',
        trapFalse: 'menopoz sonrası dolaşımdaki en baskın östrojen östrioldür ve serum FSH düzeyleri belirgin düşer',
        trapHighlight: 'serum FSH düzeyleri belirgin düşer',
      },
      {
        name: 'Uterusu olan kadında hormon replasman tedavisi',
        target: 'Vazomotor semptomlar için verilen sistemik östrojenin endometriyal proliferasyon uyarısını progestin ekleyerek dengeleme',
        hallmark: 'Uterusu yerinde olan menopoz hastasında endometriyal hiperplazi ve kanserden korunmak için östrojene mutlaka progestin eklenmesi',
        vignette:
          '51 yaşında doğal menopoza girmiş ve daha önce hiç uterus ameliyatı geçirmemiş kadın hasta şiddetli sıcak basmaları için hormon tedavisi istiyor. Kontrendikasyonu olmayan hastada endometriyal adenokarsinom gelişmesini önlemek amacıyla kombine rejim planlanıyor',
        clues: ['hiç uterus ameliyatı geçirmemiş', 'şiddetli sıcak basmaları', 'endometriyal adenokarsinom gelişmesini önlemek'],
        management: 'Sürekli veya siklik kombine östrojen artı progestin (medroksiprogesteron veya mikronize progesteron) ya da östrojen artı bazedoksifen',
        pearl: 'Histerektomi geçirmiş kadında tek başına östrojen yeterli olup meme kanseri riski açısından kombine tedaviden daha güvenlidir; ancak uterusu varsa karşılanmamış östrojen yasaktır.',
        trapFalse: 'histerektomi geçirmemiş kadına tek başına yüksek doz konjuge östrojen verilmesi endometriyumu korur',
        trapHighlight: 'tek başına yüksek doz konjuge östrojen verilmesi endometriyumu korur',
      },
      {
        name: 'Postmenopozal osteoporoz',
        target: 'Östrojen eksikliği sonucu osteoblastlardan RANKL salınımının artması ve OPG azalmasıyla osteoklastik kemik yıkımının hızlanması',
        hallmark: 'DEXA kemik mineral yoğunluğunda T skorunun -2.5 ve altında olması ile vertebra, distal radius ve kalça kırığı riski',
        vignette:
          'Zayıf yapılı ve sigara içen 66 yaşındaki postmenopozal kadının tarama DEXA ölçümünde lomber omurga T skoru -2.9 ve femur boynu T skoru -2.6 bulunuyor. Serum kalsiyum, fosfor ve alkalen fosfataz düzeyleri tamamen normal saptanıyor',
        clues: ['T skoru -2.9 ve -2.6', 'kalsiyum, fosfor ve alkalen fosfataz normal', '66 yaşındaki postmenopozal kadın'],
        management: 'Kalsiyum (1200 mg/gün), D vitamini (800-1000 IU/gün), ağırlık taşıyıcı egzersiz ve ilk basamak antirezorptif tedavi olarak oral bifosfonat (alendronat/risedronat)',
        pearl: '65 yaş üstü tüm kadınlara rutin DEXA taraması önerilir; osteoporoz yalnızca kalitatif/kantitatif mineral yoğunluğu kaybı olup serum kalsiyum-fosforu normaldir.',
        trapFalse: 'laboratuvarda belirgin hipokalsemi, hipofosfatemi ve çok yüksek alkalen fosfataz ile karakterizedir',
        trapHighlight: 'belirgin hipokalsemi, hipofosfatemi ve çok yüksek alkalen fosfataz',
      },
      {
        name: 'Genitoüriner menopoz sendromu',
        target: 'Lokal östrojen yokluğuna bağlı vajinal epitelin incelmesi, glikojen kaybıyla laktobasillerin azalması ve pH yükselmesi',
        hallmark: 'Vajinal kuruluk, yanma, disparoni, tekrarlayan idrar yolu enfeksiyonu, soluk rugasız ince mukoza ve vajinal pH >5.0',
        vignette:
          '59 yaşındaki kadın son iki yıldır giderek artan cinsel ilişki sırasında ağrı, vajinal kuruluk ve sık tekrarlayan idrar yolu enfeksiyonlarıyla başvuruyor. Muayenede vajen mukozasının soluk, kuru, düzleşmiş ve kolay kanayan ince yapıda olduğu ve pH’nın 6.2 olduğu görülüyor',
        clues: ['vajen mukozasının soluk, kuru ve düzleşmiş', 'cinsel ilişki sırasında ağrı', 'vajinal pH 6.2'],
        management: 'Vajinal nemlendiriciler ve ilk basamak spesifik tedavi olarak sistemik yan etki riski çok düşük olan lokal düşük doz vajinal östrojen krem, tablet veya halka',
        pearl: 'Sıcak basmaları yıllar içinde kendiliğinden azalırken, genitoüriner atrofi tedavi edilmezse zamanla ilerler ve sistemik östrojen yerine lokal vajinal tedavi tercih edilir.',
        trapFalse: 'vajinal pH 3.8’in altına düşer ve lokal tedavide mutlaka yüksek doz oral progestin eklenmelidir',
        trapHighlight: 'vajinal pH 3.8’in altına düşer',
      },
      {
        name: 'Sıcak basmalarında non-hormonal tedavi',
        target: 'Östrojenin kontrendike olduğu hastada hipotalamik termoregülatör merkezin serotonerjik/noradrenerjik veya nörokinin-3 yolaklarıyla stabilizasyonu',
        hallmark: 'Meme kanseri veya derin ven trombozu öykülü hastada vazomotor sıcak basmalarının hormonsuz kontrol ihtiyacı',
        vignette:
          'İki yıl önce östrojen reseptör pozitif meme kanseri nedeniyle opere edilip tamoksifen başlanan 49 yaşındaki kadın şiddetli gece terlemeleri ve günde 15 kez gelen sıcak basmaları nedeniyle başvuruyor',
        clues: ['östrojen reseptör pozitif meme kanseri', 'tamoksifen başlanan', 'günde 15 kez gelen sıcak basmaları'],
        management: 'Venlafaksin, sitalopram veya gabapentin (tamoksifen kullananlarda CYP2D6 inhibisyonu yapan paroksetinden kaçınılması) ya da nörokinin-3 antagonisti fezolinetant',
        pearl: 'Paroksetin güçlü CYP2D6 inhibitörü olup tamoksifenin aktif metaboliti endoksifene dönüşümünü engellediği için tamoksifen alanlarda venlafaksin tercih edilir.',
        trapFalse: 'meme kanseri öyküsü olanlarda bile sıcak basmaları için en etkili ve güvenli seçenek düşük doz sistemik östrojendir',
        trapHighlight: 'en etkili ve güvenli seçenek düşük doz sistemik östrojendir',
      },
    ],
  },
];
