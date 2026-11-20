import { StructuredClusterSeed } from './tusTypes';

export const STRUCTURED_PEDIATRICS_2_CLUSTERS: StructuredClusterSeed[] = [
  // 1. Konjenital Adrenal Hiperplazi Tipleri
  {
    branchId: 'pediatri',
    subTopic: 'Konjenital Adrenal Hiperplazi Tipleri',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: '21-hidroksilaz klasik tuz kaybettiren tip',
        target: 'CYP21A2 gen mutasyonuna bağlı ağır kortizol ve aldosteron sentez bloğu ile adrenal androjen fazlalığı',
        hallmark: 'Dişi yenidoğanda virilizasyon, 2. haftada kusma-dehidratasyon krizi, hiponatremi, hiperkalemi, metabolik asidoz ve çok yüksek 17-OH-progesteron',
        vignette:
          'Dış genitalyası belirsiz görünümde doğan ve 46,XX karyotipli olduğu saptanan 12 günlük bebek fışkırır tarzda kusma, ağır dehidratasyon ve letarji ile acile getiriliyor. Laboratuvarda Na 121 mEq/L, K 7.1 mEq/L, glukoz 41 mg/dL, metabolik asidoz, yüksek plazma renin aktivitesi ve çok yüksek 17-hidroksiprogesteron saptanıyor',
        clues: ['46,XX karyotipli', 'Na 121 mEq/L, K 7.1 mEq/L', 'çok yüksek 17-hidroksiprogesteron'],
        management: 'Akut krizde acil IV hidrokortizon ve %0.9 NaCl/dekstroz; idame tedavisinde ömür boyu oral hidrokortizon, fludrokortizon ve tuz desteği',
        pearl: 'Konjenital adrenal hiperplazinin %90-95 ile en sık nedeni olup erkek bebeklerde dış genitalya normal olduğu için 2. haftadaki ölümcül tuz kaybı kriziyle fark edilir.',
        trapFalse: 'aldosteron birikimine bağlı belirgin hipertansiyon ve hipokalemik alkaloz ile seyreder',
        trapHighlight: 'hipertansiyon ve hipokalemik alkaloz ile seyreder',
      },
      {
        name: '21-hidroksilaz basit virilizan tip',
        target: 'CYP21A2 enziminde kısmi aktivite korunması nedeniyle aldosteronun yeterli üretilmesi ancak ACTH artışıyla androjen fazlalığı gelişmesi',
        hallmark: 'Tuz kaybı krizi olmadan kızda doğumda kliteromegali-labiyal füzyon, erkek çocukta 3-4 yaşta erken pubarş, penis büyümesi ve hızlı boy/kemik yaşı ilerlemesi',
        vignette:
          '4 yaşındaki erkek çocuk yaşıtlarından çok uzun boylu olması, penis büyümesi ve pubik kıllanma nedeniyle getiriliyor. Muayenede boyu >97. persentil, ancak testis hacimlerinin prepubertal (2 mL) olduğu ve kemik yaşının 9 yaşa ilerlediği görülüyor. Serum elektrolitleri tamamen normal iken bazal 17-OH-progesteron ve androstenedion belirgin yüksek bulunuyor',
        clues: ['testis hacimlerinin prepubertal (2 mL)', 'kemik yaşının 9 yaşa ilerlediği', 'elektrolitleri tamamen normal'],
        management: 'ACTH ve adrenal androjen aşırı üretimini baskılamak için günlük oral hidrokortizon replasmanı (gerekirse büyüme plakları kapanmasını geciktiren izlem)',
        pearl: 'İzoseksüel psödopuberte prekoks yapan erkek çocukta testislerin küçük kalması (hipogonadotropik/testis dışı androjen kaynağı) tanıda anahtar ipucudur.',
        trapFalse: 'erken bebeklikte mutlaka ağır hiperkalemi ve hiponatremik şok ile başvurur',
        trapHighlight: 'mutlaka ağır hiperkalemi ve hiponatremik şok ile başvurur',
      },
      {
        name: '11-beta hidroksilaz eksikliği',
        target: 'CYP11B1 gen mutasyonu sonucu 11-deoksikortizol ve mineralokortikoid etkili 11-deoksikortikosteron (DOC) birikimi',
        hallmark: 'Dişi virilizasyonu ve erken androjen fazlalığı ile birlikte hipertansiyon, hipokalemi, metabolik alkaloz ve baskılı renin',
        vignette:
          'Doğumda kliteromegali ve posterior labiyal füzyonu olan 46,XX karyotipli 3 yaşındaki çocukta kan basıncı 138/90 mmHg ölçülüyor. Laboratuvarda potasyum 2.9 mEq/L, metabolik alkaloz, düşük plazma renin aktivitesi ve 11-deoksikortikosteron ile 11-deoksikortizol düzeylerinde belirgin yükseklik saptanıyor',
        clues: ['kliteromegali ve posterior labiyal füzyonu', 'kan basıncı 138/90 mmHg', 'potasyum 2.9 mEq/L, metabolik alkaloz'],
        management: 'ACTH uyarısını ve DOC aşırı sentezini baskılamak için oral hidrokortizon tedavisi (fludrokortizon verilmez)',
        pearl: 'İkinci en sık KAH tipidir; biriken 11-deoksikortikosteron (DOC) güçlü mineralokortikoid etki göstererek tuz kaybı yerine hipertansiyona yol açar.',
        trapFalse: 'hipotansiyon, hiperkalemi ve yüksek plazma renin aktivitesi ile karakterizedir',
        trapHighlight: 'hipotansiyon, hiperkalemi ve yüksek plazma renin aktivitesi',
      },
      {
        name: '17-alfa hidroksilaz eksikliği',
        target: 'CYP17A1 enzim bloğuna bağlı hem kortizol hem de tüm seks steroidlerinin üretilememesi ve kortikosteron/DOC artışı',
        hallmark: 'Hipertansiyon ve hipokalemi ile birlikte 46,XY bireyde dişi dış genitalya ve 46,XX’te primer amenore/puberte yokluğu',
        vignette:
          '15 yaşındaki fenotipik kız hasta henüz meme gelişimi başlamaması ve adet görmemesi nedeniyle başvuruyor. Kan basıncı 154/96 mmHg ve serum potasyumu 2.7 mEq/L bulunuyor. FSH ve LH çok yüksek olmasına rağmen östradiol ve testosteron saptanamayacak kadar düşük; karyotip analizi 46,XY olarak geliyor',
        clues: ['meme gelişimi başlamaması ve adet görmemesi', 'Kan basıncı 154/96 mmHg', 'östradiol ve testosteron saptanamayacak kadar düşük; karyotip 46,XY'],
        management: 'DOC fazlalığını baskılamak için glukokortikoid (hidrokortizon/deksametazon) tedavisi ve ergenlikten itibaren östrojen replasmanı',
        pearl: 'Kortizol düşük olmasına rağmen biriken kortikosteron glukokortikoid aktiviteye sahip olduğu için adrenal kriz nadir görülür; pubertede hipertansiyon + seksüel infantilizm klasik tablodur.',
        trapFalse: 'dişi fetüslerde ağır virilizasyona yol açar ve yenidoğanda tuz kaybettirici kriz yapar',
        trapHighlight: 'dişi fetüslerde ağır virilizasyona yol açar ve yenidoğanda tuz kaybettirici kriz yapar',
      },
      {
        name: '3-beta hidroksisteroid dehidrogenaz eksikliği',
        target: 'HSD3B2 mutasyonu sonucu delta-5 steroidlerin (pregnenolon, 17-OH-pregnenolon, DHEA) delta-4 aktif hormonlara dönüşememesi',
        hallmark: 'Ağır tuz kaybı krizi ile birlikte 46,XY erkek bebekte yetersiz virilizasyon (hipospadias) ve 46,XX kızda hafif kliteromegali',
        vignette:
          '46,XY karyotipli yenidoğanda ağır perineal hipospadias, bifid skrotum ve 2. haftada gelişen hiponatremi-hiperkalemi krizi saptanıyor. Hormon panelinde kortizol ve aldosteron düşük, testosteron düşük, buna karşın DHEA ve 17-hidroksipregnenolon düzeylerinin çok yüksek olduğu görülüyor',
        clues: ['46,XY karyotipli yenidoğanda ağır perineal hipospadias', 'hiponatremi-hiperkalemi krizi', 'DHEA ve 17-hidroksipregnenolon düzeylerinin çok yüksek'],
        management: 'Hidrokortizon ve fludrokortizon replasmanı, tuz desteği ve cerrahi/endokrinoloji iş birliğiyle cinsiyet gelişimi izlemi',
        pearl: 'Hem erkek bebekte yetersiz virilizasyon (testosteron üretilemediği için) hem de kız bebekte zayıf DHEA etkisiyle hafif virilizasyon yapan tek tuz kaybettirici KAH tipidir.',
        trapFalse: '46,XY bebeklerde normal erkek dış genitalyası görülür ve DHEA düzeyleri baskılanmıştır',
        trapHighlight: 'normal erkek dış genitalyası görülür ve DHEA düzeyleri baskılanmıştır',
      },
    ],
  },

  // 2. Çocukluk Çağı Rikets ve Kemik Metabolizması
  {
    branchId: 'pediatri',
    subTopic: 'Rikets ve Kemik Metabolizması',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Nutrisyonel D vitamini eksikliği',
        target: 'Yetersiz güneş ışığı veya diyetle D vitamini alımına bağlı düşük 25-OH-D ve sekonder hiperparatiroidizm',
        hallmark: 'Düşük 25-OH-D, yüksek PTH, düşük fosfor, yüksek ALP ve fizyolojik doz kolekalsiferol ile tam iyileşme',
        vignette:
          'Güneş görmeyen ve profilaktik vitamin damlası almayan 10 aylık bebek el bileklerinde genişleme, O-bacak eğriliği ve fontanel genişliğiyle getiriliyor. Laboratuvarda Ca 8.4 mg/dL, P 2.6 mg/dL, ALP 1150 U/L, PTH 240 pg/mL ve 25-OH-D düzeyi 6 ng/mL bulunuyor',
        clues: ['profilaktik vitamin damlası almayan', 'Ca 8.4 mg/dL, P 2.6 mg/dL, ALP 1150 U/L', '25-OH-D düzeyi 6 ng/mL'],
        management: 'Oral kolekalsiferol (D3 vitamini) tedavisi ve yeterli kalsiyum alımının sağlanması',
        pearl: 'Sekonder hiperparatiroidizm böbrekten fosfor atılımını artırıp kemikten kalsiyumu mobilize ettiği için fosfor kalsiyumdan daha erken ve belirgin düşer.',
        trapFalse: 'serum 25-OH-D düzeyi yüksek iken parathormon düzeyi tamamen baskılanmıştır',
        trapHighlight: 'serum 25-OH-D düzeyi yüksek iken parathormon düzeyi tamamen baskılanmıştır',
      },
      {
        name: 'Vitamin D bağımlı rikets Tip 1',
        target: 'Böbrekte 1-alfa hidroksilaz (CYP27B1) enzim eksikliği sonucu 25-OH-D’nin aktif 1,25-(OH)2-D’ye dönüşememesi',
        hallmark: 'Normal veya yüksek 25-OH-D düzeyine rağmen çok düşük 1,25-(OH)2-D, hipokalsemi, yüksek PTH ve kalsitriole tam yanıt',
        vignette:
          '1 yaşındaki çocuk ağır kas güçsüzlüğü, gelişme geriliği, hipokalsemik nöbetler ve radyolojik raşitik kemik değişiklikleriyle başvuruyor. Yüksek doz kolekalsiferol tedavisine yanıt vermeyen hastada 25-OH-D düzeyi 48 ng/mL (normal) olmasına karşın 1,25-dihidroksivitamin D düzeyi ölçülemeyecek kadar düşük saptanıyor',
        clues: ['Yüksek doz kolekalsiferol tedavisine yanıt vermeyen', '25-OH-D düzeyi 48 ng/mL (normal)', '1,25-dihidroksivitamin D düzeyi ölçülemeyecek kadar düşük'],
        management: 'Ömür boyu fizyolojik dozlarda oral kalsitriol (1,25-dihidroksivitamin D3) ve kalsiyum desteği',
        pearl: 'Otozomal resesif kalıtılır; renal 1-alfa hidroksilaz basamağı atlanarak doğrudan aktif form (kalsitriol) verildiğinde kemik lezyonları hızla düzelir.',
        trapFalse: 'total alopesi eşlik eder ve serum 1,25-(OH)2-D düzeyi aşırı derecede yüksektir',
        trapHighlight: 'serum 1,25-(OH)2-D düzeyi aşırı derecede yüksektir',
      },
      {
        name: 'X’e bağlı hipofosfatemik rikets',
        target: 'PHEX gen mutasyonuna bağlı FGF23 artışı, renal proksimal tübülden fosfat geri emilim kusuru ve 1-alfa hidroksilaz baskılanması',
        hallmark: 'Normal serum kalsiyum ve PTH düzeyine karşın ağır hipofosfatemi, yüksek ALP, bacak eğriliği ve diş apseleri',
        vignette:
          '2 yaşındaki erkek çocuk yürümeye başladıktan sonra giderek belirginleşen alt ekstremite yaylanması ve tekrarlayan spontan diş apseleriyle getiriliyor. Annesinin de kısa boylu ve bacaklarının eğri olduğu öğreniliyor. Laboratuvarda Ca 9.5 mg/dL, PTH normal, 25-OH-D normal ancak fosfor 1.9 mg/dL ve tübüler fosfat reabsorpsiyonu çok düşük bulunuyor',
        clues: ['tekrarlayan spontan diş apseleri', 'Ca 9.5 mg/dL, PTH normal', 'fosfor 1.9 mg/dL ve tübüler fosfat reabsorpsiyonu çok düşük'],
        management: 'Anti-FGF23 monoklonal antikor (burosumab) veya bölünmüş dozlarda oral nötral fosfat + kalsitriol tedavisi',
        pearl: 'X’e bağlı dominant kalıtılan en sık herediter rikets formudur; sekonder hiperparatiroidizm veya hipokalsemik tetani görülmemesiyle D vitamini eksikliklerinden ayrılır.',
        trapFalse: 'ağır hipokalsemi ve çok yüksek PTH ile seyreder; tedavisinde yalnızca kolekalsiferol verilir',
        trapHighlight: 'ağır hipokalsemi ve çok yüksek PTH ile seyreder',
      },
      {
        name: 'Vitamin D bağımlı rikets Tip 2',
        target: 'VDR (nükleer vitamin D reseptör) gen mutasyonu nedeniyle hedef dokularda aktif D vitaminine direnç',
        hallmark: 'Ağır hipokalsemi ve rikets bulgularına eşlik eden çok yüksek 1,25-(OH)2-D düzeyi ve sıklıkla total alopesi',
        vignette:
          '9 aylık bebekte yaygın raşitik kemik deformiteleri, hipokalsemik konvülziyonlar ve doğumdan itibaren kaş, kirpik ve saçların tamamen dökülmüş olduğu (alopesi) görülüyor. Laboratuvarda Ca 6.5 mg/dL, P 2.3 mg/dL, ALP ve PTH yüksek, 1,25-dihidroksivitamin D düzeyi ise normalin 10 katı yüksek saptanıyor',
        clues: ['kaş, kirpik ve saçların tamamen dökülmüş olduğu', 'Ca 6.5 mg/dL', '1,25-dihidroksivitamin D düzeyi normalin 10 katı yüksek'],
        management: 'Çok yüksek doz oral kalsitriol ve kalsiyum denemesi; dirençli olgularda santral kateterle uzun süreli IV kalsiyum infüzyonu',
        pearl: 'Herediter D vitamini dirençli rikets olarak da bilinir; saç folikülü gelişiminde VDR gerekli olduğundan alopesi tipik eşlikçi bulgudur ve prognoz daha ağırdır.',
        trapFalse: 'serum 1,25-(OH)2-D düzeyi çok düşüktür ve düşük doz kalsitriol ile tamamen iyileşir',
        trapHighlight: 'serum 1,25-(OH)2-D düzeyi çok düşüktür ve düşük doz kalsitriol ile tamamen iyileşir',
      },
      {
        name: 'Hipofosfatazya',
        target: 'ALPL gen mutasyonuna bağlı doku nonspesifik alkalen fosfataz eksikliği ve pirofosfat birikimiyle mineralizasyon bloğu',
        hallmark: 'Raşitik kemik deformitelerine rağmen serum alkalen fosfataz düzeyinin çok düşük olması, hiperkalsemi ve süt dişlerinin köküyle erken dökülmesi',
        vignette:
          '18 aylık çocukta yürüme gecikmesi, bacaklarda eğrilik ve süt kesici dişlerinin hiçbir travma olmadan köküyle birlikte erken dökülmesi dikkat çekiyor. Laboratuvarda tüm beklentilerin aksine serum alkalen fosfataz düzeyi 18 U/L (çok düşük), kalsiyum ve fosfor hafif yüksek, idrarda fosfoetanolamin ve plazmada piridoksal-5-fosfat artmış bulunuyor',
        clues: ['süt kesici dişlerinin köküyle birlikte erken dökülmesi', 'serum alkalen fosfataz düzeyi 18 U/L', 'idrarda fosfoetanolamin'],
        management: 'Enzim replasman tedavisi (asfotaz alfa) ve hiperkalsemi yönetimi (D vitamini ve kalsiyum takviyesi yapılmaz)',
        pearl: 'Diğer tüm rikets tiplerinde ALP yüksek iken, ALP düşüklüğü saptanan tek metabolik kemik hastalığıdır; D vitamini verilmesi hiperkalsemiyi ağırlaştırır.',
        trapFalse: 'serum alkalen fosfataz düzeyi binlerce üniteye yükselir ve ilk tedavide yüksek doz D vitamini verilir',
        trapHighlight: 'alkalen fosfataz düzeyi binlerce üniteye yükselir ve ilk tedavide yüksek doz D vitamini verilir',
      },
    ],
  },

  // 3. Pediatrik Boy Kısalığı ve Puberte Bozuklukları
  {
    branchId: 'pediatri',
    subTopic: 'Boy Kısalığı ve Puberte Bozuklukları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Konstitüsyonel büyüme gecikmesi',
        target: 'Hipotalamo-hipofizer-gonadal eksenin fizyolojik geç aktivasyonu sonucu büyüme ve pubertede geçici gecikme',
        hallmark: 'Normal yıllık büyüme hızı, takvim yaşından geri kemik yaşı, ailede geç ergenlik öyküsü ve normal erişkin final boy',
        vignette:
          '13.5 yaşındaki erkek çocuk arkadaşlarından kısa olduğu ve henüz puberte belirtisi başlamadığı için getiriliyor. Yıllık büyüme hızı 5.2 cm/yıl (normal), ancak boyu 3. persentilde, kemik yaşı 11 yıl ile uyumlu ve testis hacmi 3 mL bulunuyor. Babasının da lise son sınıfta birden uzadığı öğreniliyor',
        clues: ['Yıllık büyüme hızı 5.2 cm/yıl (normal)', 'kemik yaşı 11 yıl ile uyumlu', 'Babasının da lise son sınıfta birden uzadığı'],
        management: 'Aileye güvence verilerek izlem; belirgin psikososyal sıkıntı yaşayan 14 yaş üstü erkeklerde kısa süreli düşük doz testosteron priming',
        pearl: 'Normal büyüme hızı olan kısa bir çocukta kemik yaşı takvim yaşından geri ancak boy yaşına eşitse akla ilk bu fizyolojik varyant gelir.',
        trapFalse: 'kemik yaşı takvim yaşına eşittir ve erişkin hedef boyları normalin altında kalır',
        trapHighlight: 'kemik yaşı takvim yaşına eşittir ve erişkin hedef boyları normalin altında kalır',
      },
      {
        name: 'Ailesel boy kısalığı',
        target: 'Poligenik kalıtımla belirlenen düşük genetik boy potansiyeli (endokrin veya sistemik patoloji yok)',
        hallmark: 'Normal büyüme hızı, takvim yaşına eşit kemik yaşı, kısa ebeveyn boyları ve hedef boyla uyumlu kısa final boy',
        vignette:
          '7 yaşındaki kız çocuk boyunun <3. persentilde olması nedeniyle getiriliyor. Son 2 yılda büyüme hızının yılda 5.6 cm olduğu ve büyüme eğrisinde kendi persentilini paralel takip ettiği görülüyor. Annenin boyu 151 cm, babanın boyu 162 cm; el-bilek grafisinde kemik yaşı tam 7 yaş ile uyumlu saptanıyor',
        clues: ['büyüme eğrisinde kendi persentilini paralel takip ettiği', 'Annenin boyu 151 cm, babanın boyu 162 cm', 'kemik yaşı tam 7 yaş ile uyumlu'],
        management: 'Hormon tedavisi gerektirmez; büyüme hızının normal kaldığının yıllık izlemi ve ailenin bilgilendirilmesi',
        pearl: 'Boy kısalığının en sık normal varyantlarından biridir; büyüme hızı normaldir ve kemik yaşı ile takvim yaşı arasında gecikme yoktur.',
        trapFalse: 'büyüme hızı yılda 3 cm’nin altındadır ve kemik yaşı takvim yaşından belirgin geridir',
        trapHighlight: 'büyüme hızı yılda 3 cm’nin altındadır ve kemik yaşı takvim yaşından belirgin geridir',
      },
      {
        name: 'Büyüme hormonu eksikliği',
        target: 'Hipotalamik GHRH veya hipofizer somatotrop hücre yetersizliğine bağlı somatotropin ve IGF-1 düşüklüğü',
        hallmark: 'Patolojik yavaşlamış büyüme hızı (<4 cm/yıl), gecikmiş kemik yaşı, gövdesel adipozite, düşük IGF-1 ve iki uyarı testinde yanıtsızlık',
        vignette:
          '6 yaşındaki erkek çocuk persentil eğrilerinde giderek aşağı düşme nedeniyle getiriliyor. Son 1 yılda yalnızca 2.8 cm uzadığı, yüzünün yaşına göre küçük ve tombul (oyuncak bebek yüzü) göründüğü, gövdesinde yağlanma artışı olduğu ve kemik yaşının 3.5 yaş olduğu saptanıyor. IGF-1 düşük ve iki provokasyon testinde yanıt <10 ng/mL geliyor',
        clues: ['Son 1 yılda yalnızca 2.8 cm uzadığı', 'oyuncak bebek yüzü', 'iki provokasyon testinde yanıt <10 ng/mL'],
        management: 'Kranial MR ile hipofizer tümör/kraniyofarenjiyoma dışlandıktan sonra günlük subkutan rekombinant büyüme hormonu tedavisi',
        pearl: 'Yenidoğan döneminde uzamış sarılık, dirençli hipoglisemi ve erkek bebekte mikropenis ipuçlarıdır; büyüme hızı düşüşü en duyarlı klinik bulgudur.',
        trapFalse: 'tanı için tek başına bazal sabah kanında büyüme hormonu düzeyi ölçümü yeterlidir',
        trapHighlight: 'tek başına bazal sabah kanında büyüme hormonu düzeyi ölçümü yeterlidir',
      },
      {
        name: 'Santral puberte prekoks',
        target: 'Hipotalamik GnRH puls jeneratörünün erken aktivasyonu sonucu gonadotropin bağımlı puberte',
        hallmark: 'Kızda 8 yaş, erkekte 9 yaş öncesi izoseksüel sekonder seks karakterleri, ileri kemik yaşı ve GnRH testinde LH >5 IU/L',
        vignette:
          '6.5 yaşındaki kız çocukta son 6 ayda her iki memede belirgin büyüme, pubik kıllanma ve boyda hızlı sıçrama gözleniyor. Kemik yaşı 9 yaş ile uyumlu bulunan hastada pelvik USG’de uterus uzunluğu 4.5 cm, over hacimleri artmış ve GnRH uyarı testinde pik LH 14 IU/L (LH/FSH >1) saptanıyor',
        clues: ['6.5 yaşındaki kız çocukta her iki memede belirgin büyüme', 'Kemik yaşı 9 yaş ile uyumlu', 'GnRH uyarı testinde pik LH 14 IU/L'],
        management: 'Erkeklerde ve <6 yaş kızlarda hipotalamik hamartom/SSS lezyonu için beyin MR; tedavi olarak aylık/3 aylık depo GnRH analoğu (leuprolid/triptorelin)',
        pearl: 'Kızlarda %90 idiyopatik iken erkeklerde %50’nin üzerinde SSS patolojisi (özellikle hipotalamik hamartom) saptandığından mutlaka beyin MR çekilmelidir.',
        trapFalse: 'testis hacimleri erkekte prepubertal kalır ve GnRH uyarısına LH yanıtı tamamen baskılıdır',
        trapHighlight: 'testis hacimleri erkekte prepubertal kalır ve GnRH uyarısına LH yanıtı tamamen baskılıdır',
      },
      {
        name: 'McCune-Albright sendromu',
        target: 'Postzigotik somatik GNAS1 geninde aktive edici mutasyon sonucu Gs-alfa sinyalinin sürekli açık kalması',
        hallmark: 'GnRH bağımsız periferik puberte prekoks, poliostatik fibröz displazi ve sınırları düzensiz sütlü kahve lekeleri triyadı',
        vignette:
          '4 yaşındaki kız çocuk vaginal kanama ve meme gelişimi ile getiriliyor. Muayenede sırtında orta hattı geçmeyen, kenarları girintili çıkıntılı (Maine kıyısı gibi) büyük bir sütlü kahve lekesi görülüyor. LH ve FSH düzeyleri baskılı iken östradiol çok yüksek bulunuyor; femur grafisinde buzlu cam görünümlü kemik lezyonları saptanıyor',
        clues: ['kenarları girintili çıkıntılı (Maine kıyısı gibi)', 'LH ve FSH düzeyleri baskılı iken östradiol çok yüksek', 'buzlu cam görünümlü kemik lezyonları'],
        management: 'Aromataz inhibitörleri (letrozol) veya antiöstrojenlerle periferik östrojen etkisinin baskılanması ve eşlik eden endokrinopatilerin (hipertiroidi, GH fazlalığı) tedavisi',
        pearl: 'Somatik mozaik mutasyon olduğu için kalıtsal değildir; GNAS mutasyonu otonom foliküler over kistleri, tiroid nodülleri ve Cushing sendromu da yapabilir.',
        trapFalse: 'GnRH bağımlıdır ve tedavisinde ilk seçenek olarak GnRH analoğu (leuprolid) kullanılır',
        trapHighlight: 'GnRH bağımlıdır ve tedavisinde ilk seçenek olarak GnRH analoğu (leuprolid) kullanılır',
      },
    ],
  },

  // 4. Kalıtsal Renal Tübülopatiler
  {
    branchId: 'pediatri',
    subTopic: 'Kalıtsal Renal Tübülopatiler',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Bartter sendromu',
        target: 'Henle kulpu çıkan kalın kolda NKCC2, ROMK veya ClC-Kb iyon kanallarının inaktive edici mutasyonu (loop diüretik benzeri etki)',
        hallmark: 'Polihidramniyoz öyküsü, normotansiyon, hipokalemik hipokloremik metabolik alkaloz, hiperkalsiüri ve nefrokalsinozis',
        vignette:
          'Gebelikte ağır polihidramniyoz öyküsüyle preterm doğan 6 aylık bebek büyüme geriliği, poliüri ve dehidratasyon ataklarıyla getiriliyor. Kan basıncı normal sınırlarda olan bebekte serum K 2.4 mEq/L, Cl 84 mEq/L, HCO3 34 mEq/L, yüksek renin-aldosteron ve idrarda kalsiyum atılımında artış ile böbrekte nefrokalsinozis saptanıyor',
        clues: ['ağır polihidramniyoz öyküsü', 'serum K 2.4 mEq/L, Cl 84 mEq/L, HCO3 34 mEq/L', 'idrarda kalsiyum atılımında artış ile böbrekte nefrokalsinozis'],
        management: 'Potasyum ve sıvı replasmanı yanında PGE2 yapımını azaltmak için NSAİİ (indometazin/ibuprofen) tedavisi',
        pearl: 'Fizyopatolojisi kronik furosemid (loop diüretik) kullanımının genetik kopyasıdır; idrar kalsiyumu yüksektir ve genellikle bebeklikte başlar.',
        trapFalse: 'belirgin hipokalsiüri ve hipomagnezemi ile seyreder, hipertansiyon gelişimi sıktır',
        trapHighlight: 'hipokalsiüri ve hipomagnezemi ile seyreder, hipertansiyon gelişimi sıktır',
      },
      {
        name: 'Gitelman sendromu',
        target: 'Distal kıvrımlı tübülde tiazid duyarlı Na-Cl kotransporter (SLC12A3) gen mutasyonu',
        hallmark: 'Geç çocukluk/erişkinlikte başlayan hipokalemik metabolik alkaloz, belirgin hipomagnezemi ve hipokalsiüri',
        vignette:
          '12 yaşındaki çocuk kas krampları, halsizlik ve tuzlu yeme isteğiyle başvuruyor. Kan basıncı 100/62 mmHg olan hastada K 2.7 mEq/L, HCO3 32 mEq/L, Mg 1.1 mg/dL (düşük) ve 24 saatlik idrar kalsiyum atılımı çok düşük saptanıyor; plazma renin ve aldosteronu yüksek bulunuyor',
        clues: ['12 yaşındaki çocuk kas krampları', 'Mg 1.1 mg/dL (düşük)', '24 saatlik idrar kalsiyum atılımı çok düşük'],
        management: 'Ömür boyu serbest tuz alımı, oral potasyum ve magnezyum replasmanı (gerekirse amilorid veya spironolakton)',
        pearl: 'Tiazid diüretiklerin genetik karşılığıdır; Bartter’dan en keskin farkı hipokalsiüri ve ağır hipomagnezemi görülmesi ile polihidramniyoz/nefrokalsinozis olmamasıdır.',
        trapFalse: 'polihidramniyoz ve yenidoğan döneminde ağır hiperkalsiüri ile nefrokalsinozise yol açar',
        trapHighlight: 'ağır hiperkalsiüri ile nefrokalsinozise yol açar',
      },
      {
        name: 'Liddle sendromu',
        target: 'Toplayıcı tübül epitelyal sodyum kanallarının (ENaC) nedd4-2 yıkımına dirençli aktive edici mutasyonu',
        hallmark: 'Erken başlangıçlı ağır hipertansiyon, hipokalemi, metabolik alkaloz ancak baskılı renin ve düşük aldosteron (psödoaldosteronizm)',
        vignette:
          '11 yaşındaki hasta baş ağrısı ve kan basıncı 162/104 mmHg saptanması üzerine inceleniyor. Serum K 2.8 mEq/L ve metabolik alkaloz bulunmasına karşın plazma renin aktivitesi ve plazma aldosteron düzeyi sıfıra yakın baskılı saptanıyor. Spironolaktona yanıt vermeyen hipertansiyonun amilorid ile hızla düştüğü görülüyor',
        clues: ['kan basıncı 162/104 mmHg', 'renin aktivitesi ve plazma aldosteron düzeyi sıfıra yakın baskılı', 'amilorid ile hızla düştüğü'],
        management: 'Düşük sodyumlu diyet ve ENaC kanalını doğrudan bloke eden amilorid veya triamteren (spironolakton etkisizdir)',
        pearl: 'Otozomal dominant kalıtılır; aldosterondan bağımsız aşırı sodyum emilimi olduğu için aldosteron antagonisti spironolakton işe yaramaz, doğrudan ENaC blokörü gerekir.',
        trapFalse: 'plazma aldosteron düzeyi çok yüksektir ve ilk tercih tedavide spironolakton kullanılır',
        trapHighlight: 'plazma aldosteron düzeyi çok yüksektir ve ilk tercih tedavide spironolakton kullanılır',
      },
      {
        name: 'Dent hastalığı',
        target: 'X’e bağlı CLCN5 klor kanalı (veya OCRL1) mutasyonu sonucu proksimal tübülde endozomal asidifikasyon ve protein geri emilim kusuru',
        hallmark: 'Erkek çocuklarda düşük molekül ağırlıklı proteinüri, hiperkalsiüri, nefrokalsinozis, böbrek taşları ve progresif böbrek yetmezliği',
        vignette:
          '7 yaşındaki erkek çocuk tekrarlayan böbrek taşı düşürme öyküsüyle getiriliyor. İdrarda beta-2 mikroglobülin (düşük molekül ağırlıklı protein) belirgin yüksek, idrar kalsiyum/kreatinin oranı artmış ve renal USG’de medüller nefrokalsinozis görülüyor; serum potasyum ve asit-baz dengesi ise normal saptanıyor',
        clues: ['beta-2 mikroglobülin (düşük molekül ağırlıklı protein) belirgin yüksek', 'medüller nefrokalsinozis', 'serum potasyum ve asit-baz dengesi ise normal'],
        management: 'Taş ve nefrokalsinozisi azaltmak için bol hidrasyon ve tiazid diüretikleri, yüksek sitratlı diyet ve böbrek fonksiyon takibi',
        pearl: 'X’e bağlı resesif kalıtıldığı için neredeyse tamamen erkek çocuklarda görülür ve erken yetişkinlikte son dönem böbrek yetmezliğine ilerleyebilir.',
        trapFalse: 'otozomal dominant kalıtılır ve ağır hipokalemik metabolik alkaloz ile hipertansiyon yapar',
        trapHighlight: 'ağır hipokalemik metabolik alkaloz ile hipertansiyon yapar',
      },
      {
        name: 'Sistinüri',
        target: 'SLC3A1 veya SLC7A9 gen mutasyonuna bağlı proksimal tübül ve ince bağırsakta dibazik aminoasit (COLA) taşınma defekti',
        hallmark: 'Çocuklukta tekrarlayan radyoopak/yarı opak böbrek taşları, idrarda altıgen (hekzagonal) kristaller ve pozitif siyanid-nitroprussid testi',
        vignette:
          '8 yaşındaki kız çocuk sol yan ağrısı ve makroskopik hematüri ile başvuruyor. Görüntülemede sol böbrek pelvisinde büyük geyik boynuzu taşı ve idrar sedimentinde düz altıgen şeklinde renksiz kristaller görülüyor. İdrar sodyum siyanid-nitroprussid tarama testi pozitif sonuçlanıyor',
        clues: ['geyik boynuzu taşı', 'düz altıgen şeklinde renksiz kristaller', 'sodyum siyanid-nitroprussid tarama testi pozitif'],
        management: 'Yüksek volümlü hidrasyon (gece dahil), potasyum sitrat ile idrar alkalinizasyonu (pH >7.5) ve dirençli olgularda tiopronin veya D-penisilamin',
        pearl: 'Sistin, ornitin, lizin ve arginin (COLA) atılır ancak yalnızca sistinin düşük çözünürlüğü asidik idrarda taş oluşturur; ürik asitten farklı olarak idrar alkalinizasyonu çok önemlidir.',
        trapFalse: 'tedavide taşın çözünürlüğünü artırmak için amonyum klorür ile idrar asitleştirilmelidir',
        trapHighlight: 'amonyum klorür ile idrar asitleştirilmelidir',
      },
    ],
  },

  // 5. Çocukluk Çağı Glomerüler ve Vasküler Böbrek Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Glomerüler ve Vasküler Böbrek Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Minimal değişiklik hastalığı',
        target: 'T-lenfosit sitokinlerinin glomerüler podosit ayak çıkıntılarında silinmeye ve negatif yük kaybına yol açması',
        hallmark: '2-6 yaşta periorbital/yaygın ödem, masif selektif proteinüri (>40 mg/m²/saat), hipoalbüminemi, hiperlipidemi ve normal C3',
        vignette:
          '4 yaşındaki erkek çocuk son 1 haftadır sabahları göz kapaklarında başlayıp bacaklara ve skrotuma yayılan şişlikle getiriliyor. Kan basıncı normal, idrarda 4+ proteinüri var ancak hematüri yok; serum albümin 1.5 g/dL, kolesterol 390 mg/dL, C3 normal bulunuyor',
        clues: ['göz kapaklarında başlayıp bacaklara ve skrotuma yayılan şişlik', 'idrarda 4+ proteinüri var ancak hematüri yok', 'serum albümin 1.5 g/dL, C3 normal'],
        management: 'Biyopsi yapılmadan doğrudan 4-6 hafta yüksek doz oral prednizolon tedavisi başlanması (spontan bakteriyel peritonit açısından uyanıklık)',
        pearl: 'Çocukluk çağında nefrotik sendromun %85’inden sorumlu en sık nedenidir; %90’ın üzerinde steroide tam yanıt verir ve bu nedenle ilk başta böbrek biyopsisi gerekmez.',
        trapFalse: 'serum kompleman C3 düzeyi belirgin düşüktür ve tanı için mutlaka acil böbrek biyopsisi yapılır',
        trapHighlight: 'serum kompleman C3 düzeyi belirgin düşüktür ve tanı için mutlaka acil böbrek biyopsisi yapılır',
      },
      {
        name: 'Akut poststreptokoksik glomerülonefrit',
        target: 'Nefritojenik grup A beta-hemolitik streptokok enfeksiyonu sonrası glomerüler subepitelyal immün kompleks depolanması',
        hallmark: 'Farenjitten 1-2 hafta (piyodermiden 3-6 hafta) sonra çay rengi idrar, ödem, hipertansiyon, düşük C3 (normal C4) ve EM’de subepitelyal hörgüçler',
        vignette:
          '2 hafta önce ciltte impetigo geçiren 7 yaşındaki erkek çocuk göz kapaklarında şişlik, baş ağrısı ve kola renginde idrar yapma şikayetiyle geliyor. Kan basıncı 142/94 mmHg, idrarda dismorfik eritrositler ve eritrosit silendirleri var; serum C3 çok düşük, C4 normal ve anti-DNaz B yüksek saptanıyor',
        clues: ['2 hafta önce ciltte impetigo', 'kola renginde idrar', 'C3 çok düşük, C4 normal'],
        management: 'Sıvı ve tuz kısıtlaması, kıvrım diüretiği (furosemid) ve hipertansiyon kontrolü (steroid veya immünsüpresif gerekmez)',
        pearl: 'C3 düzeyi 6-8 hafta içinde normale döner; 8 haftadan uzun süre düşük kalırsa membranoproliferatif glomerülonefrit (MPGN) düşünülmelidir.',
        trapFalse: 'hem C3 hem C4 düşüklüğü kalıcıdır ve ilk tedavide yüksek doz steroid ile siklofosfamid başlanır',
        trapHighlight: 'hem C3 hem C4 düşüklüğü kalıcıdır ve ilk tedavide yüksek doz steroid',
      },
      {
        name: 'Henoch-Schönlein nefriti',
        target: 'Galaktoz eksik IgA1 immün komplekslerinin mezangium ve küçük damar duvarlarında birikimi',
        hallmark: 'Alt ekstremite ve kalçalarda palpabl purpura, artrit ve karın ağrısıyla birlikte hematüri/proteinüri; normal trombosit ve normal C3',
        vignette:
          '8 yaşındaki çocuk 10 gün önce bacaklarında ve kalçalarında basmakla solmayan kabarık mor döküntüler, diz şişliği ve kolik karın ağrısı geçirdikten sonra idrarında kanama ve proteinüri saptanıyor. Trombosit sayısı 340.000/mm³ ve C3 düzeyi normal bulunuyor',
        clues: ['bacaklarında ve kalçalarında basmakla solmayan kabarık mor döküntüler', 'kolik karın ağrısı', 'Trombosit sayısı 340.000/mm³ ve C3 düzeyi normal'],
        management: 'Hafif idrar bulgularında yakın izlem ve ACE inhibitörü; ağır proteinüri veya kresentik nefritte kortikosteroid ve immünsüpresif tedavi',
        pearl: 'Renal tutulum genellikle ilk 4-6 haftada ortaya çıkar ve uzun dönem prognozu belirleyen en önemli organdır; cilt veya böbrek biyopsisinde IgA birikimi IgA nefropatisi ile özdeştir.',
        trapFalse: 'ağır trombositopeni ve serum kompleman C3 düşüklüğü tanı koydurucu bulgulardır',
        trapHighlight: 'ağır trombositopeni ve serum kompleman C3 düşüklüğü',
      },
      {
        name: 'Tipik hemolitik üremik sendrom',
        target: 'Shiga toksin üreten E. coli O157:H7 (veya Shigella) enfeksiyonunun endotel hasarı ve mikrovasküler trombüs oluşturması',
        hallmark: 'Kanlı ishalden 5-10 gün sonra gelişen mikroanjiyopatik hemolitik anemi (şistositler), trombositopeni ve akut böbrek hasarı triyadı',
        vignette:
          'İyi pişmemiş köfte yedikten sonra 5 gün kanlı ishal geçiren 3 yaşındaki çocuk solukluk, idrar çıkaramama ve bacaklarda peteşilerle acile getiriliyor. Hb 6.9 g/dL, trombosit 32.000/mm³, kreatinin 3.4 mg/dL, LDH çok yüksek, Direkt Coombs negatif ve periferik yaymada parçalanmış eritrositler (şistositler) görülüyor',
        clues: ['5 gün kanlı ishal', 'trombosit 32.000/mm³, kreatinin 3.4 mg/dL', 'parçalanmış eritrositler (şistositler)'],
        management: 'Dikkatli sıvı-elektrolit dengesi, gerektiğinde diyaliz ve eritrosit transfüzyonu (antibiyotik ve antimotilite ilaçları kontrendikedir)',
        pearl: 'E. coli O157:H7 ishal döneminde antibiyotik verilmesi bakteri lizisiyle Shiga toksin salınımını artırarak bu sendromun gelişme riskini yükseltir!',
        trapFalse: 'kanlı ishal evresinde erken antibiyotik başlanması sendrom gelişimini kesin olarak engeller ve trombosit transfüzyonu ilk tercihtir',
        trapHighlight: 'erken antibiyotik başlanması sendrom gelişimini kesin olarak engeller',
      },
      {
        name: 'Alport sendromu',
        target: 'Çoğunlukla X’e bağlı COL4A5 mutasyonuyla glomerüler, koklear ve oküler bazal membranda Tip IV kollajen defekti',
        hallmark: 'Çocuklukta persistan mikroskopik/makroskopik hematüri, yüksek frekanslı sensörinöral işitme kaybı, anterior lentikonus ve EM’de sepet örgüsü GBM',
        vignette:
          'Dayısında genç yaşta diyaliz ve işitme cihazı kullanımı öyküsü olan 10 yaşındaki erkek çocuk tekrarlayan gros hematüri ataklarıyla başvuruyor. Odyometride bilateral yüksek frekanslı sensörinöral işitme kaybı, göz muayenesinde lens ön yüzünde konik çıkıntı (anterior lentikonus) ve elektron mikroskopisinde glomerüler bazal membranda lamellasyon saptanıyor',
        clues: ['Dayısında genç yaşta diyaliz', 'bilateral yüksek frekanslı sensörinöral işitme kaybı', 'lens ön yüzünde konik çıkıntı'],
        management: 'Proteinüriyi azaltıp böbrek yetmezliğine ilerlemeyi yavaşlatmak için erken ACE inhibitörü/ARB başlanması, işitme ve nakil izlemi',
        pearl: 'Tip IV kollajenin alfa-5 zincirindeki bozukluk glomerüler bazal membranın ayrışıp lamelleşmesine (sepet örgüsü / basket-weave görünümü) neden olur.',
        trapFalse: 'işitme kaybı iletim tipindedir ve böbrek biyopsisinde C3 ile IgG’den oluşan subepitelyal hörgüçler izlenir',
        trapHighlight: 'iletim tipindedir ve böbrek biyopsisinde C3 ile IgG’den oluşan subepitelyal hörgüçler izlenir',
      },
    ],
  },

  // 6. Çocukluk Çağı İYE, VUR, PUV ve ÜPD
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik İYE ve Üriner Anomaliler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akut piyelonefrit',
        target: 'Asendan üropatojenik E. coli enfeksiyonunun böbrek parankiminde akut inflamasyon ve skar oluşturması',
        hallmark: 'Yüksek ateş, böğür/kostovertebral açı ağrısı, lökositoz, yüksek CRP/ESR ve DMSA sintigrafisinde kortikal tutulum defekti',
        vignette:
          '14 aylık kız çocuk 39.4°C ateş, kusma ve huzursuzluk nedeniyle getiriliyor; başka odak saptanmıyor. Kateterle alınan idrarda lökosit esteraz ve nitrit pozitif, kültürde 100.000 koloni/mL E. coli ürüyor; CRP 95 mg/L ve akut dönemde çekilen Tc-99m DMSA sintigrafisinde sağ böbrek üst polünde hipoaktif alan saptanıyor',
        clues: ['39.4°C ateş, kusma', 'Kateterle alınan idrarda lökosit esteraz ve nitrit pozitif', 'Tc-99m DMSA sintigrafisinde sağ böbrek üst polünde hipoaktif alan'],
        management: 'Küçük süt çocukları ve toksik hastalarda IV seftriakson/sefotaksim (veya ampisilin+gentamisin), oral tolere edenlerde 7-14 gün sefiksim/amoksisilin-klavulanat',
        pearl: 'Renal parankimal inflamasyonu ve kalıcı kortikal skarı göstermede altın standart görüntüleme Tc-99m DMSA sintigrafisidir.',
        trapFalse: 'ateşsiz seyreder ve yalnızca 3 günlük oral nitrofurantoin tedavisi yeterlidir',
        trapHighlight: 'ateşsiz seyreder ve yalnızca 3 günlük oral nitrofurantoin tedavisi yeterlidir',
      },
      {
        name: 'Akut sistit',
        target: 'Üropatojenlerin mesane mukozasına sınırlı yüzeyel bakteriyel enfeksiyonu (renal parankim tutulumu yok)',
        hallmark: 'Ateş olmaksızın dizüri, sık idrara çıkma (pollaküri), ani sıkışma hissi ve suprapubik hassasiyet',
        vignette:
          '6 yaşındaki kız çocuk son 2 gündür idrar yaparken yanma, tuvalete sık koşma ve gece altını ıslatma şikayetiyle başvuruyor. Ateşi 36.7°C olan çocuğun kostovertebral açı hassasiyeti yok, suprapubik bölgede hafif duyarlılığı mevcut; idrar mikroskopisinde bol lökosit ve bakteri izleniyor',
        clues: ['idrar yaparken yanma, tuvalete sık koşma', 'Ateşi 36.7°C', 'kostovertebral açı hassasiyeti yok'],
        management: '3-5 günlük oral trimetoprim-sülfametoksazol, amoksisilin-klavulanat veya nitrofurantoin tedavisi ve kabızlık/işeme disfonksiyonunun düzeltilmesi',
        pearl: 'Nitrofurantoin yalnızca idrarda yoğunlaşıp böbrek parankiminde yeterli doku konsantrasyonuna ulaşamadığı için üst üriner sistem enfeksiyonlarında kullanılmaz.',
        trapFalse: 'mutlaka 39°C üzeri ateş yapar ve tedavisinde 14 gün intravenöz aminoglikozid gerekir',
        trapHighlight: 'mutlaka 39°C üzeri ateş yapar ve tedavisinde 14 gün intravenöz aminoglikozid gerekir',
      },
      {
        name: 'Vezikoüreteral reflü',
        target: 'Üreterovezikal bileşkenin submukozal tünel kısalığına bağlı işeme sırasında idrarın mesaneden üreter ve böbreğe geri kaçışı',
        hallmark: 'Tekrarlayan ateşli İYE’ler ve işeme sistoüretrografisinde (VCUG) kontrast maddenin üreter/pelvise geri dolması',
        vignette:
          '2 yaşına kadar iki kez ateşli idrar yolu enfeksiyonu geçiren kız çocuğun renal USG’sinde hafif sol pelvikalisiyel ektazi görülüyor. Enfeksiyon tamamen tedavi edildikten sonra çekilen işeme sistoüretrografisinde mesane dolumu ve işeme sırasında kontrastın sol üretere ve genişlemiş renal kalikslere geri kaçtığı (Evre IV) saptanıyor',
        clues: ['iki kez ateşli idrar yolu enfeksiyonu', 'işeme sistoüretrografisinde', 'kontrastın sol üretere ve genişlemiş renal kalikslere geri kaçtığı'],
        management: 'Düşük evreli (Evre I-II) olgularda spontan iyileşme beklendiğinden izlem veya profilaksi; yüksek evre/skarlı nükslerde endoskopik enjeksiyon veya üreteroneosistostomi',
        pearl: 'Tanı ve derecelendirmede (Evre I-V) altın standart yöntem işeme sistoüretrografisidir (VCUG); ateşli İYE sonrası DMSA ve USG ile taranır.',
        trapFalse: 'tanısında altın standart yöntem intravenöz piyelografidir ve tüm evrelere doğar doğmaz cerrahi yapılır',
        trapHighlight: 'intravenöz piyelografidir ve tüm evrelere doğar doğmaz cerrahi yapılır',
      },
      {
        name: 'Posterior üretral valv',
        target: 'Erkek fetüste posterior üretrada konjenital mukozal zarların mesane çıkış obstrüksiyonu ve böbrek displazisi yapması',
        hallmark: 'Antenatal oligohidramniyoz, erkek yenidoğanda damla damla zayıf idrar akımı, palpe edilen mesane ve VCUG’de anahtar deliği görünümü',
        vignette:
          'Antenatal USG’de bilateral hidronefroz, kalın duvarlı büyük mesane ve oligohidramniyoz saptanan erkek yenidoğanın doğum sonrası idrarını fışkırtamadığı ve damla damla yaptığı görülüyor. İşeme sistoüretrografisinde dilate posterior üretra ile mesanenin "anahtar deliği" (keyhole) görünümü oluşturduğu izleniyor',
        clues: ['oligohidramniyoz saptanan erkek yenidoğan', 'idrarını fışkırtamadığı ve damla damla yaptığı', 'anahtar deliği (keyhole) görünümü'],
        management: 'Doğumdan hemen sonra mesane kateterizasyonu ile dekompresyon, elektrolit stabilizasyonu ve sistoskopik valv ablasyonu',
        pearl: 'Erkek yenidoğanlarda alt üriner sistem obstrüksiyonunun en sık nedenidir; ağır oligohidramniyoz Potter sekansı ve pulmoner hipoplaziye yol açabilir.',
        trapFalse: 'en sık kız bebeklerde görülür ve genellikle tek taraflı böbreği etkiler',
        trapHighlight: 'en sık kız bebeklerde görülür ve genellikle tek taraflı böbreği etkiler',
      },
      {
        name: 'Üreteropelvik bileşke darlığı',
        target: 'Renal pelvis ile proksimal üreter arasındaki fonksiyonel veya anatomik darlığa bağlı idrar akım engeli',
        hallmark: 'Üreterde dilatasyon olmaksızın izole renal pelvikalisiyel dilatasyon (hidronefroz) ve MAG-3 diüretikli renogramda obstrüktif drenaj eğrisi',
        vignette:
          'Antenatal hidronefroz nedeniyle takip edilen 3 aylık bebekte postnatal ultrasonografide sol renal pelvis ön-arka çapının 24 mm olduğu ve kalikslerin genişlediği ancak sol üreterin hiç görülmediği (dilate olmadığı) saptanıyor. VCUG normal bulunuyor; Tc-99m MAG-3 diüretikli renogramda furosemide rağmen boşalmanın olmadığı izleniyor',
        clues: ['sol üreterin hiç görülmediği (dilate olmadığı)', 'VCUG normal', 'Tc-99m MAG-3 diüretikli renogramda furosemide rağmen boşalmanın olmadığı'],
        management: 'Böbrek fonksiyonu korunuyorsa yakın USG/renogram izlemi; diferansiyel fonksiyon <%40’a düşerse veya semptomatik obstrüksiyonda Anderson-Hynes piyeloplasti',
        pearl: 'Antenatal hidronefrozun en sık patolojik nedenidir; üreter ve mesanenin tamamen normal olmasına karşın izole pelvikalisiyel dilatasyon bulunması ayırıcıdır.',
        trapFalse: 'ultrasonografide distal üretere kadar yaygın hidroüreteronefroz ve mesane duvarı kalınlaşması görülür',
        trapHighlight: 'distal üretere kadar yaygın hidroüreteronefroz ve mesane duvarı kalınlaşması görülür',
      },
    ],
  },

  // 7. Çocukluk Çağı Karın İçi Solid Tümörleri
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Solid Tümörler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Nöroblastom',
        target: 'Nöral krest kökenli sempatik gangliyon veya adrenal medulla hücrelerinin malign proliferasyonu (N-MYC amplifikasyonu)',
        hallmark: 'Orta hattı geçen nodüler kalsifiye abdominal kitle, periorbital ekimoz (rakun gözü), opsoklonus-miyoklonus ve yüksek idrar VMA/HVA',
        vignette:
          '2 yaşındaki çocuk halsizlik, kemik ağrısı ve göz kapakları çevresinde morluklarla getiriliyor. Karın muayenesinde orta hattı karşı tarafa geçen, sert ve düzensiz bir kitle palpe ediliyor. BT’de adrenal bölgede noktasal kalsifikasyonlar içeren tümör ve 24 saatlik idrarda vanilmandelik asit (VMA) ile homovanilik asit (HVA) belirgin yüksek saptanıyor',
        clues: ['orta hattı karşı tarafa geçen, sert ve düzensiz bir kitle', 'göz kapakları çevresinde morluklar', 'VMA ile HVA belirgin yüksek'],
        management: 'Risk grubuna göre cerrahi rezeksiyon, kemoterapi, otolog kök hücre nakli, radyoterapi ve yüksek risklide anti-GD2 immünoterapi (dinutuksimab)',
        pearl: 'Süt çocukluğu çağının en sık ekstrakranial solid tümörüdür; 18 ay altı bebeklerde yaygın metastaza rağmen spontan regresyon gösterebilir, N-MYC amplifikasyonu kötü prognozdur.',
        trapFalse: 'orta hattı kesinlikle geçmez, kalsifikasyon içermez ve en sık hematüri ile başvurur',
        trapHighlight: 'orta hattı kesinlikle geçmez, kalsifikasyon içermez',
      },
      {
        name: 'Wilms tümörü',
        target: '11p13’deki WT1 veya 11p15’deki WT2 gen değişimleriyle metanefrik blastemden gelişen embriyonal böbrek tümörü',
        hallmark: 'Genel durumu iyi çocukta banyo sırasında fark edilen düzgün sınırlı, orta hattı geçmeyen yan kitle, hematüri ve hipertansiyon',
        vignette:
          '3.5 yaşındaki sağlıklı görünümlü kız çocuğun annesi banyo yaptırırken karnının sağ tarafında büyük bir şişlik fark ediyor. Muayenede düzgün yüzeyli, orta hattı geçmeyen sağ flank kitlesi, kan basıncı 134/86 mmHg, aniridi ve mikroskopik hematüri saptanıyor; BT’de böbrek parankiminden köken alan tümör görülüyor',
        clues: ['banyo yaptırırken karnının sağ tarafında büyük bir şişlik', 'orta hattı geçmeyen sağ flank kitlesi', 'aniridi'],
        management: 'Tümör rüptürünü önlemek için dikkatli nefrektomi ve evreye/histolojiye göre vinkristin-aktinomisin D (+doksorubisin) kemoterapisi',
        pearl: 'WAGR sendromu (Wilms, Aniridi, Genitoüriner anomali, Retardasyon), Denys-Drash ve Beckwith-Wiedemann (hemihipertrofi, makroglossi) sendromlarıyla güçlü ilişkilidir.',
        trapFalse: 'idrar VMA/HVA düzeylerini yükseltir ve erken kemik iliği metastazıyla pansitopeni yapar',
        trapHighlight: 'idrar VMA/HVA düzeylerini yükseltir',
      },
      {
        name: 'Hepatoblastom',
        target: 'Beta-katenin (CTNNB1) / Wnt yolağı mutasyonuyla embriyonal hepatik progenitör hücrelerin malign dönüşümü',
        hallmark: '3 yaş altı çocukta ağrısız sağ üst kadran kitlesi, çok yüksek serum AFP ve Beckwith-Wiedemann/FAP ile birliktelik',
        vignette:
          '16 aylık erkek çocukta karında hızla büyüyen sağ üst kadran şişliği ve hafif trombositoz saptanıyor. Prematürite (çok düşük doğum tartısı) öyküsü bulunan hastanın abdominal BT’sinde karaciğer sağ lobunda iyi sınırlı solid kitle ve serum alfa-fetoprotein (AFP) düzeyi 48.000 ng/mL bulunuyor',
        clues: ['16 aylık erkek çocukta sağ üst kadran şişliği', 'Prematürite öyküsü', 'AFP düzeyi 48.000 ng/mL'],
        management: 'Sisplatin bazlı neoadjuvan kemoterapi sonrasında tam cerrahi rezeksiyon (rezeke edilemeyenlerde karaciğer nakli)',
        pearl: 'Çocukluk çağının (özellikle 3 yaş altının) en sık primer malign karaciğer tümörüdür; APC gen mutasyonlu ailevi adenomatöz polipozis (FAP) öyküsü önemli bir risk faktörüdür.',
        trapFalse: 'serum alfa-fetoprotein düzeyi normaldir ve en sık 10 yaş sonrası ergenlerde görülür',
        trapHighlight: 'alfa-fetoprotein düzeyi normaldir ve en sık 10 yaş sonrası ergenlerde görülür',
      },
      {
        name: 'Rabdomiyosarkom',
        target: 'Embriyonel mezenkimal kök hücrelerin çizgili kas yönünde farklılaşan malign tümörü (alveoler tipte t(2;13) PAX3-FOXO1)',
        hallmark: 'Baş-boyun/orbitada kitle veya küçük kız çocukta vajenden sarkan üzüm salkımı (sarkoma botryoides) görünümü; desmin ve MyoD1 pozitifliği',
        vignette:
          '2 yaşındaki kız çocuk vajinal kanama ve introitustan dışarı sarkan parlak, polipoid, üzüm salkımına benzeyen kitleyle getiriliyor. Biyopside subepitelyal kambiyum tabakası, rabdomiyoblastlar ve immünhistokimyada desmin ile miyogenin pozitifliği saptanıyor',
        clues: ['introitustan dışarı sarkan parlak, polipoid, üzüm salkımına benzeyen kitle', 'kambiyum tabakası', 'desmin ile miyogenin pozitifliği'],
        management: 'VAC (vinkristin, aktinomisin D, siklofosfamid) kemoterapisi, organ koruyucu cerrahi ve radyoterapi kombinasyonu',
        pearl: 'Çocukluk çağının en sık yumuşak doku sarkomudur; alveoler alt tipindeki t(2;13) translokasyonu embriyonel tipe göre daha kötü prognozludur.',
        trapFalse: 'çocuklarda en sık kemik tümörüdür ve yalnızca uzun kemik metafizlerinde yerleşir',
        trapHighlight: 'en sık kemik tümörüdür ve yalnızca uzun kemik metafizlerinde yerleşir',
      },
      {
        name: 'Retinoblastom',
        target: '13q14’deki RB1 tümör baskılayıcı geninin her iki alelinin inaktivasyonu (Knudson çift vuruş hipotezi)',
        hallmark: 'Fotoğrafta veya muayenede beyaz pupilla refleksi (lökokori), şaşılık, vitreusta kireçlenme ve histolojide Flexner-Wintersteiner rozetleri',
        vignette:
          '11 aylık bebeğin ailesi flaşlı fotoğraflarda çocuğun sağ göz bebeğinin kırmızı yerine beyaz parladığını fark ederek başvuruyor. Son aylarda sağ gözde içe kayma başladığı, göz dibinde kalsifiye beyaz retinal kitle bulunduğu ve aile öyküsünde babada erken yaşta tek göz kaybı olduğu öğreniliyor',
        clues: ['flaşlı fotoğraflarda sağ göz bebeğinin beyaz parladığını', 'sağ gözde içe kayma', 'kalsifiye beyaz retinal kitle'],
        management: 'Göz ve görmeyi korumaya yönelik intraarteriyel/sistemik kemoterapi, kriyoterapi veya lazer; ileri göz içi tümörde enükleasyon',
        pearl: 'Bilateral veya kalıtsal germline RB1 mutasyonu taşıyan hastalarda radyoterapi ikincil osteosarkom ve yumuşak doku sarkomu riskini çok artırdığından radyoterapiden kaçınılır.',
        trapFalse: 'en sık ileri yaşlarda görülür ve kalıtsal formda ikincil tümör gelişme riski yoktur',
        trapHighlight: 'kalıtsal formda ikincil tümör gelişme riski yoktur',
      },
    ],
  },

  // 8. Pediatrik Lösemi ve Lenfoma Prognostik Özellikleri
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Lösemi ve Lenfoma',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akut lenfoblastik lösemi',
        target: 'B veya T lenfoid öncül hücrelerin klonal matürasyon duraksaması ve kemik iliği infiltrasyonu',
        hallmark: 'Çocukluk çağının en sık kanseri; 1-9 yaş, lökosit <50.000, hiperdiploidi ve t(12;21) iyi prognoz; t(9;22) ve MLL kötü prognoz',
        vignette:
          '4 yaşındaki erkek çocuk 3 haftadır süren ateş, halsizlik, bacak ağrısı nedeniyle topallama ve ciltte morluklarla getiriliyor. Hepatosplenomegali, jeneralize lenfadenopati, Hb 7.1 g/dL, trombosit 28.000/mm³ ve lökosit 18.000/mm³ saptanıyor. Kemik iliğinde %85 CD10 (CALLA)+, TdT+ lenfoblast ve FISH’te t(12;21) ETV6-RUNX1 bulunuyor',
        clues: ['4 yaşındaki erkek çocuk', 'bacak ağrısı nedeniyle topallama', 'CD10 (CALLA)+, TdT+ lenfoblast ve t(12;21)'],
        management: 'Remisyon indüksiyonu, santral sinir sistemi profilaksisi (intratekal metotreksat), konsolidasyon ve yaklaşık 2.5 yıl idame kemoterapisi',
        pearl: '1-9 yaş arası, başlangıç lökositi <50.000/mm³, B-öncül immünfenotip, hiperdiploidi (>50 kromozom) ve t(12;21) en iyi prognostik göstergelerdir; t(9;22), <1 yaş (KMT2A/MLL) ve 14. gün Kİ yanıtısızlığı kötüdür.',
        trapFalse: '1 yaş altında ve lökosit >100.000/mm³ olgularında prognoz en iyidir, Auer çubukları tanısaldır',
        trapHighlight: '1 yaş altında ve lökosit >100.000/mm³ olgularında prognoz en iyidir, Auer çubukları tanısaldır',
      },
      {
        name: 'Akut miyeloid lösemi',
        target: 'Miyeloid öncül hücrelerin matürasyon bloğu ve t(15;17), t(8;21) veya inv(16) gibi sitogenetik anomaliler',
        hallmark: 'Blast sitoplazmasında Auer çubukları, miyeloperoksidaz pozitifliği, diş eti hipertrofisi/kloroma ve Down sendromunda artmış risk',
        vignette:
          '11 yaşındaki hasta burun kanaması, yüksek ateş ve diş etlerinde belirgin şişlikle başvuruyor. Periferik yaymada çekirdekçiği belirgin büyük blastların sitoplazmasında iğne şeklinde pembe çubuklar (Auer cisimcikleri) izleniyor; sitokimyada miyeloperoksidaz pozitif bulunuyor ve koagülasyon panelinde DİK saptanıyor',
        clues: ['diş etlerinde belirgin şişlik', 'iğne şeklinde pembe çubuklar', 'miyeloperoksidaz pozitif ve DİK'],
        management: 'Sitarabin ve antrasiklin bazlı yoğun kemoterapi; M3 promyelositik t(15;17) alt tipinde all-trans retinoik asit (ATRA) + arsenik trioksit',
        pearl: 't(8;21), inv(16) ve t(15;17) iyi prognozlu alt tiplerdir; Down sendromlu <4 yaş çocuklarda özellikle M7 megakaryoblastik alt tipi çok sıktır ve iyi yanıtlıdır.',
        trapFalse: 'promiyelositik t(15;17) alt tipinde koagülopati gelişmez ve tedavisinde ATRA kontrendikedir',
        trapHighlight: 'koagülopati gelişmez ve tedavisinde ATRA kontrendikedir',
      },
      {
        name: 'Burkitt lenfoma',
        target: '8q24’deki c-MYC onkogeninin 14q32 Ig ağır zincir lokusuna translokasyonu [t(8;14)] ile aşırı hızlı B-hücre proliferasyonu',
        hallmark: 'Çene veya ileoçekal bölgede hızla büyüyen kitle, biyopside yıldızlı gökyüzü manzarası ve en yüksek tümör lizis sendromu riski',
        vignette:
          '6 yaşındaki erkek çocuk son 2 haftada hızla büyüyen sağ alt kadran ağrısı ve bağırsak düğümlenmesi (invajinasyon) tablosuyla ameliyata alınıyor. İleoçekal kitleden yapılan biyopside tek tip orta boy B lenfositler arasında soluk makrofajların oluşturduğu "yıldızlı gökyüzü" paterni ve Ki-67 %99 saptanıyor',
        clues: ['son 2 haftada hızla büyüyen', 'ileoçekal kitle ve invajinasyon', 'yıldızlı gökyüzü paterni ve Ki-67 %99'],
        management: 'Tedavi öncesi tümör lizis sendromu için agresif hidrasyon, rasburikaz/allopurinol ve kısa süreli yoğun çok ajanlı kemoterapi',
        pearl: 'İnsan tümörleri arasında ikilenme süresi (doubling time ~24 saat) en kısa olanıdır; sporadik formda karın/ileoçekal, endemik (EBV) formda ise çene tutulumu sıktır.',
        trapFalse: 'çok yavaş büyüyen indolent bir lenfomadır ve tümör lizis sendromu riski neredeyse yoktur',
        trapHighlight: 'çok yavaş büyüyen indolent bir lenfomadır ve tümör lizis sendromu riski neredeyse yoktur',
      },
      {
        name: 'Hodgkin lenfoma',
        target: 'CD15 ve CD30 pozitif malign Reed-Sternberg dev hücrelerinin çevresinde yoğun reaktif inflamatuvar infiltrasyon',
        hallmark: 'Ağrısız elastik kıvamlı servikal/supraklaviküler lenfadenopati, mediastinal kitle, Pel-Ebstein ateşi, gece terlemesi ve kilo kaybı',
        vignette:
          '15 yaşındaki ergen boynun sol yanında ve köprücük kemiği üstünde 2 aydır büyüyen ağrısız şişlikler, geceleri çarşaf ıslatan terleme ve son 6 ayda %12 kilo kaybıyla başvuruyor. Akciğer grafisinde ön mediastende genişleme, eksizyonel biyopside ise iki çekirdekli baykuş gözü görünümlü CD15+, CD30+ dev hücreler görülüyor',
        clues: ['köprücük kemiği üstünde ağrısız şişlikler', 'geceleri çarşaf ıslatan terleme', 'baykuş gözü görünümlü CD15+, CD30+ dev hücreler'],
        management: 'Evreye ve B semptomlarına göre ABVD/OEPA benzeri kemoterapi ve seçilmiş rezidüel kitlelere düşük doz tutulu alan radyoterapisi',
        pearl: 'Çocukluk çağında en sık görülen histolojik alt tip nodüler sklerozan tiptir (özellikle adolesan kızlarda mediastinal kitle ile); lenfadenopati genellikle komşu zincirlere sırayla yayılır.',
        trapFalse: 'en sık ileoçekal bölgede başlar ve biyopside t(8;14) ile yıldızlı gökyüzü paterni görülür',
        trapHighlight: 'biyopside t(8;14) ile yıldızlı gökyüzü paterni görülür',
      },
      {
        name: 'Kronik miyeloid lösemi',
        target: 't(9;22)(q34;q11) Philadelphia kromozomu sonucu oluşan BCR-ABL1 füzyon tirozin kinazının sürekli aktivitesi',
        hallmark: 'Masif splenomegali, aşırı lökositoz (>100.000/mm³), periferik kanda tüm olgunlaşma basamaklarındaki granülositler ve bazofili',
        vignette:
          '13 yaşındaki hasta sol üst kadranda dolgunluk ve halsizlikle başvuruyor. Dalak göbeğin altına kadar uzanıyor; lökosit 245.000/mm³, trombosit 620.000/mm³, periferik yaymada miyeloblasttan olgun nötrofile kadar tüm miyeloid seri elemanları ile bazofili görülüyor. LAP skoru düşük ve BCR-ABL1 füzyon transkripti pozitif saptanıyor',
        clues: ['Dalak göbeğin altına kadar uzanıyor', 'lökosit 245.000/mm³, bazofili', 'LAP skoru düşük ve BCR-ABL1 füzyon transkripti pozitif'],
        management: 'BCR-ABL1 tirozin kinaz inhibitörleri (imatinib, dasatinib veya nilotinib) ile moleküler remisyon sağlanması',
        pearl: 'Lökosit alkalen fosfataz (LAP) skorunun düşük olması lökemoid reaksiyondan (yüksek LAP) ayırt edilmesinde klasik bir ipucudur.',
        trapFalse: 'lökosit alkalen fosfataz (LAP) skoru çok yüksektir ve tirozin kinaz inhibitörlerine yanıt vermez',
        trapHighlight: 'lökosit alkalen fosfataz (LAP) skoru çok yüksektir ve tirozin kinaz inhibitörlerine yanıt vermez',
      },
    ],
  },

  // 9. Pediatrik Kemik İliği Yetmezliği Sendromları
  {
    branchId: 'pediatri',
    subTopic: 'Kemik İliği Yetmezliği Sendromları',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Diamond-Blackfan anemisi',
        target: 'RPS19 başta olmak üzere ribozomal protein gen mutasyonlarına bağlı konjenital eritroid aplazi',
        hallmark: 'İlk 1 yaşta (genelde ilk 2-3 ayda) izole makrositer anemi, retikülositopeni, trifalangeal başparmak, yüksek HbF ve yüksek eADA',
        vignette:
          '3 aylık bebek giderek artan solukluk ve beslenirken çabuk yorulma ile getiriliyor. Muayenede her iki el başparmağında üç falanks (trifalangeal başparmak) ve yarık damak görülüyor. Hb 5.2 g/dL, MCV 102 fL, retikülosit %0.2, lökosit ve trombosit normal; eritrosit adenozin deaminaz (eADA) ve HbF yüksek, kemik iliğinde eritroid seri yok denecek kadar az bulunuyor',
        clues: ['3 aylık bebek', 'trifalangeal başparmak', 'Hb 5.2 g/dL, MCV 102 fL, retikülosit %0.2, eADA yüksek'],
        management: 'Oral kortikosteroid (prednizolon) tedavisi; steroide yanıtsız veya bağımlı olgularda düzenli eritrosit transfüzyonu + demir şelasyonu veya KİT',
        pearl: 'Eritrosit adenozin deaminaz (eADA) yüksekliği ve makrositoz ile eşlik eden konjenital anomaliler geçici eritroblastopeniden ayırt etmede temel taşlardır.',
        trapFalse: 'eritrosit adenozin deaminaz düzeyi normaldir ve tedavisiz 1-2 ayda kendiliğinden iyileşir',
        trapHighlight: 'eritrosit adenozin deaminaz düzeyi normaldir ve tedavisiz 1-2 ayda kendiliğinden iyileşir',
      },
      {
        name: 'Çocukluk çağı geçici eritroblastopenisi',
        target: 'Önceden sağlıklı süt çocuğu/küçük çocukta viral enfeksiyon sonrası gelişen geçici eritroid öncül supresyonu',
        hallmark: '6 ay-3 yaş arası sağlıklı çocukta normositer anemi, retikülositopeni, konjenital anomali olmaması, normal HbF/eADA ve spontan iyileşme',
        vignette:
          '22 aylık tamamen sağlıklı ve dismorfik bulgusu olmayan çocuk son 3 haftadır gelişen soluklukla getiriliyor. 1 ay önce hafif viral ateş geçirdiği öğreniliyor. Hb 6.4 g/dL, MCV 76 fL (normositer), retikülosit %0.1, lökosit ve trombosit normal, HbF ve eADA normal bulunuyor; 3 hafta sonra retikülosit kriziyle hemoglobin kendiliğinden düzeliyor',
        clues: ['22 aylık tamamen sağlıklı ve dismorfik bulgusu olmayan', 'MCV 76 fL (normositer)', 'HbF ve eADA normal'],
        management: 'Çoğunlukla yalnızca izlem (spontan düzelir); derin semptomatik anemide tek bir eritrosit süspansiyonu verilebilir, steroid gerekmez',
        pearl: 'Konjenital saf eritroid aplazinin aksine 6 aydan büyük çocukta görülür, normositerdir, konjenital anomali yoktur ve ömür boyu tekrarlamaz.',
        trapFalse: 'makrositer anemi, yüksek HbF ve eşlik eden başparmak anomalileriyle seyreder; ömür boyu steroid gerekir',
        trapHighlight: 'makrositer anemi, yüksek HbF ve eşlik eden başparmak anomalileriyle seyreder; ömür boyu steroid gerekir',
      },
      {
        name: 'Fanconi aplastik anemisi',
        target: 'FANC gen mutasyonlarına bağlı DNA çift zincir çapraz bağ tamir defekti ve progresif kemik iliği pansitopenisi',
        hallmark: 'Başparmak/radius aplazisi, mikrosefali, sütlü kahve lekeleri, at nalı böbrek, 5-10 yaşta pansitopeni ve DEB/mitomisin C testinde kromozom kırıkları',
        vignette:
          '7 yaşındaki çocuk vücutta morarmalar, diş eti kanaması ve sık enfeksiyonlarla getiriliyor. Boyu kısa, baş çevresi küçük, gövdesinde sütlü kahve lekeleri ve sağ elinde hipoplastik başparmak saptanıyor. Pansitopenisi (MCV yüksek) bulunan hastanın lenfosit kültüründe diepoksibütan (DEB) eklendiğinde çok sayıda kromozomal kırık izleniyor',
        clues: ['baş çevresi küçük, sütlü kahve lekeleri ve hipoplastik başparmak', 'Pansitopenisi', 'diepoksibütan (DEB) eklendiğinde çok sayıda kromozomal kırık'],
        management: 'HLA tam uyumlu kardeşten düşük yoğunluklu rejimle allojenik hematopoetik kök hücre nakli (androjenler köprü tedavisi olarak kullanılabilir)',
        pearl: 'Kalıtsal pansitopeninin en sık nedenidir; DNA onarım defekti nedeniyle AML ve baş-boyun/anogenital skuamöz hücreli karsinom riski çok artmıştır.',
        trapFalse: 'izole saf eritrosit aplazisi yapar, trombosit ve lökositler normal kalır; tanı için ter testi kullanılır',
        trapHighlight: 'trombosit ve lökositler normal kalır; tanı için ter testi kullanılır',
      },
      {
        name: 'Shwachman-Diamond sendromu',
        target: '7q11’deki SBDS gen mutasyonuna bağlı ribozomal biyogenez kusuruyla ekzokrin pankreas yetmezliği ve kemik iliği disfonksiyonu',
        hallmark: 'Süt çocukluğunda yağlı ishal (steatore), kronik/siklik nötropeni, metafizyel kondrodisplazi ve normal ter testi',
        vignette:
          '8 aylık bebek pis kokulu, yağlı dışkılama, büyüme geriliği ve tekrarlayan cilt/akciğer enfeksiyonlarıyla getiriliyor. Fekal elastaz çok düşük, karın USG’de pankreas yağlı replasmanı ve tam kan sayımında mutlak nötrofil sayısı 420/mm³ bulunuyor. İskelet grafilerinde kalça ve diz metafizlerinde düzensizlik görülürken ter testi iki kez normal çıkıyor',
        clues: ['pis kokulu, yağlı dışkılama', 'mutlak nötrofil sayısı 420/mm³', 'ter testi iki kez normal'],
        management: 'Pankreatik enzim ve yağda eriyen vitamin replasmanı, enfeksiyonlarda G-CSF ve MDS/AML dönüşümü açısından düzenli kemik iliği takibi',
        pearl: 'Çocuklarda kistik fibrozisten sonra ekzokrin pankreas yetmezliğinin ikinci en sık genetik nedenidir; ter testinin normal olması ve nötropeni ile kolayca ayırt edilir.',
        trapFalse: 'ter testinde klor düzeyi >60 mmol/L bulunur ve pankreas fonksiyonları tamamen normaldir',
        trapHighlight: 'ter testinde klor düzeyi >60 mmol/L bulunur ve pankreas fonksiyonları tamamen normaldir',
      },
      {
        name: 'Kostmann sendromu',
        target: 'HAX1 (otozomal resesif) veya ELANE mutasyonuna bağlı miyeloid öncüllerde apoptoz artışı ve ağır konjenital nötropeni',
        hallmark: 'Doğumdan itibaren mutlak nötrofil sayısının <200/mm³ olması, kemik iliğinde promyelosit-miyelosit duraksaması ve erken ciddi bakteriyel enfeksiyonlar',
        vignette:
          '2 aylık bebek göbek kordonu enfeksiyonu, perianal apse ve tekrarlayan stafilokokal pnömoni nedeniyle yatırılıyor. Tekrarlanan tam kan sayımlarında mutlak nötrofil sayısı sürekli 80-150/mm³ aralığında (monositoz ve eozinofili eşlik ediyor) saptanıyor. Kemik iliğinde nötrofil öncüllerinin promiyelosit aşamasında duraksadığı görülüyor',
        clues: ['perianal apse ve tekrarlayan stafilokokal pnömoni', 'mutlak nötrofil sayısı sürekli 80-150/mm³', 'promiyelosit aşamasında duraksadığı'],
        management: 'Günlük subkutan G-CSF (filgrastim) tedavisi ve agresif antibiyoterapi (MDS/AML dönüşümü için yıllık kemik iliği izlemi)',
        pearl: 'Ağır konjenital nötropenide G-CSF tedavisi enfeksiyonları dramatik azaltarak yaşam süresini uzatmıştır; kompansatuvar monositoz ve eozinofili sıktır.',
        trapFalse: 'ekzokrin pankreas yetmezliği ile karakterizedir ve G-CSF tedavisine hiç yanıt vermez',
        trapHighlight: 'ekzokrin pankreas yetmezliği ile karakterizedir ve G-CSF tedavisine hiç yanıt vermez',
      },
    ],
  },

  // 10. Hemoglobinopatiler
  {
    branchId: 'pediatri',
    subTopic: 'Hemoglobinopatiler ve Methemoglobinemi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2020',
    entities: [
      {
        name: 'Beta-talasemi majör',
        target: 'Her iki beta-globin geninde ağır mutasyon sonucu beta zincir üretilememesi ve serbest alfa zincirlerinin eritroid prekürsörleri parçalaması',
        hallmark: '6. aydan sonra ağır transfüzyon bağımlı anemi, masif hepatosplenomegali, sincap yüzü, saç fırçası kafa grafisi ve HbF hakimiyeti',
        vignette:
          '9 aylık bebek giderek artan solukluk, karın şişliği ve beslenememe şikayetiyle getiriliyor. Muayenede maksiller kemiklerde belirginleşme, burun kökü basıklığı ve masif hepatosplenomegali saptanıyor. Hb 5.1 g/dL, MCV 59 fL, periferik yaymada hedef hücreleri ve çekirdekli eritrositler; elektroforezde %94 HbF görülüyor',
        clues: ['9 aylık bebek', 'maksiller kemiklerde belirginleşme', 'elektroforezde %94 HbF'],
        management: 'Ömür boyu 3-4 haftada bir düzenli eritrosit transfüzyonu, oral demir şelasyonu (deferasiroks) ve küratif olarak HLA uyumlu kök hücre nakli/gen tedavisi',
        pearl: 'Fetal hemoglobin (HbF = alfa2-gama2) yaşamın ilk 4-6 ayında koruyucu olduğu için bebekler doğumda normaldir; demir yüklenmesine bağlı kardiyomiyopati en sık ölüm nedenidir.',
        trapFalse: 'doğumdan hemen sonra hidrops fetalis ile prezentasyon gösterir ve tedavisinde oral demir verilir',
        trapHighlight: 'hidrops fetalis ile prezentasyon gösterir ve tedavisinde oral demir verilir',
      },
      {
        name: 'Beta-talasemi minör',
        target: 'Tek beta-globin alelinde heterozigot mutasyona bağlı hafif azalmış beta zincir sentezi',
        hallmark: 'Asemptomatik hafif mikrositer anemi, yüksek eritrosit sayısı (Mentzer indeksi MCV/RBC <13), normal ferritin ve HbA2 >%3.5',
        vignette:
          '10 yaşındaki asemptomatik çocuk rutin kan sayımında Hb 10.9 g/dL, MCV 61 fL ve eritrosit sayısı (RBC) 5.8 milyon/mm³ saptanması üzerine demir tedavisi yanıtısızlığı nedeniyle yönlendiriliyor. Serum demir ve ferritin düzeyleri normal olan hastada hemoglobin elektroforezinde HbA2 %5.2 olarak ölçülüyor',
        clues: ['MCV 61 fL ve eritrosit sayısı (RBC) 5.8 milyon/mm³', 'Serum demir ve ferritin düzeyleri normal', 'HbA2 %5.2'],
        management: 'Tedavi gerektirmez; gereksiz demir tedavisinden kaçınılması ve ilerisi için aileye genetik danışmanlık verilmesi',
        pearl: 'Demir eksikliği anemisi ile ayırıcı tanısında Mentzer indeksi (MCV/RBC <13) ve RDW’nin normal olması yanında %3.5 üzeri HbA2 değeri altın standarttır.',
        trapFalse: 'serum ferritin düzeyi çok düşüktür ve hemoglobin elektroforezinde HbA2 düzeyi azalmıştır',
        trapHighlight: 'ferritin düzeyi çok düşüktür ve hemoglobin elektroforezinde HbA2 düzeyi azalmıştır',
      },
      {
        name: 'Alfa-talasemi',
        target: '16. kromozomdaki 4 alfa-globin geninden 1-4 tanesinin delesyonu (3 delesyonda beta4 HbH; 4 delesyonda gama4 Hb Bart’s)',
        hallmark: '3 gen delesyonunda HbH inklüzyonları ve orta-ağır hemolitik anemi; 4 gen delesyonunda in utero hidrops fetalis',
        vignette:
          'Güneydoğu Asya kökenli anne-babanın 5 yaşındaki çocuğunda orta düzeyde mikrositer hemolitik anemi (Hb 8.6 g/dL, MCV 62 fL) ve splenomegali saptanıyor. Parlak krezil mavisi ile boyamada eritrositlerde "golf topu" şeklinde inklüzyonlar ve elektroforezde hızlı göç eden HbH (%14) bandı görülüyor',
        clues: ['4 gen delesyonlu aile öyküsü değil 3 gen', 'golf topu şeklinde inklüzyonlar', 'elektroforezde HbH (%14) bandı'],
        management: 'Taşıyıcılarda izlem; HbH hastalığında folat desteği ve hemolitik krizlerde transfüzyon (oksidan ilaçlardan kaçınma)',
        pearl: 'Alfa zinciri hem fetal (HbF) hem erişkin (HbA) hemoglobinin yapısında yer aldığı için 4 genin tümünün kaybı (Hb Bart’s) daha doğumdan önce hidrops fetalise yol açar.',
        trapFalse: 'yalnızca tek gen kaybı bile yaşamla bağdaşmayan hidrops fetalise neden olur',
        trapHighlight: 'yalnızca tek gen kaybı bile yaşamla bağdaşmayan hidrops fetalise neden olur',
      },
      {
        name: 'Orak hücreli anemi',
        target: 'Beta-globin geninin 6. kodonunda glutamik asit yerine valin yerleşmesiyle oluşan HbS’in deoksijenasyonda polimerizasyonu',
        hallmark: '6. aydan sonra el-ayak daktiliti, ağrılı kemik krizleri, akut göğüs sendromu, dalak sekestrasyonu, Howell-Jolly cisimcikleri ve HbS >%80',
        vignette:
          '9 aylık bebek el ve ayak sırtlarında ağrılı, sıcak şişliklerle getiriliyor. Hb 7.4 g/dL, retikülosit %11, periferik yaymada oraklaşmış eritrositler ve Howell-Jolly cisimcikleri görülüyor. Elektroforezde HbA %0, HbS %86 ve HbF %12 saptanıyor',
        clues: ['el ve ayak sırtlarında ağrılı, sıcak şişlikler', 'Howell-Jolly cisimcikleri', 'HbA %0, HbS %86'],
        management: '5 yaşına kadar oral penisilin profilaksisi, kapsüllü bakteri aşıları, ağrılı krizde hidrasyon+analjezi ve HbF artırıcı hidroksiüre tedavisi',
        pearl: '5 yaşından sonra otosplenektomi geliştiğinden S. pneumoniae gibi kapsüllü bakterilere bağlı fulminan sepsis ve Salmonella osteomiyeliti riski çok yüksektir.',
        trapFalse: 'beta-globin 6. kodonda lizin yerleşmesiyle oluşur ve Parvovirus B19 enfeksiyonu bu hastalarda polisitemi yapar',
        trapHighlight: 'Parvovirus B19 enfeksiyonu bu hastalarda polisitemi yapar',
      },
      {
        name: 'Methemoglobinemi',
        target: 'Sitokrom b5 redüktaz eksikliği veya nitrit/dapson/benzokain maruziyetiyle hem demirinin Fe3+ formuna oksidasyonu',
        hallmark: 'Oksijen tedavisine yanıtsız santral siyanoz, çikolata kahverengisi kan, normal PaO2 ve pulse oksimetrede ~%85 sabitlenmesi',
        vignette:
          'Diş çıkarma jeli (benzokain) veya kuyu suyuyla hazırlanan mama sonrası 4 aylık bebek ani morarma ile acile getiriliyor. %100 oksijen verilmesine rağmen siyanozu açılmıyor, pulse oksimetresi %85’te sabit kalıyor ancak arteriyel kan gazında PaO2 210 mmHg ölçülüyor ve alınan kanın çikolata kahverengisinde olduğu görülüyor',
        clues: ['%100 oksijen verilmesine rağmen siyanozu açılmıyor', 'pulse oksimetresi %85’te sabit kalıyor', 'kanın çikolata kahverengisinde olduğu'],
        management: 'Semptomatik veya düzeyi >%20 olan hastalarda intravenöz metilen mavisi (%1, 1-2 mg/kg) ve tetikleyici oksidan ajanın kesilmesi (G6PD eksikliğinde askorbik asit)',
        pearl: 'Metilen mavisi G6PD eksikliği olan hastalarda NADPH yetersizliği nedeniyle etkisiz kalıp akut hemolize yol açabileceğinden G6PD eksikliğinde kontrendikedir.',
        trapFalse: 'oksijen tedavisiyle siyanoz hemen düzelir ve G6PD eksikliğinde ilk tercih tedavi metilen mavisidir',
        trapHighlight: 'G6PD eksikliğinde ilk tercih tedavi metilen mavisidir',
      },
    ],
  },

  // 11. Pediatrik Vaskülit ve Otoinflamatuvar Hastalıklar
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Vaskülit ve Romatolojik Hastalıklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'IgA vasküliti',
        target: 'Küçük damar duvarlarında IgA ağırlıklı immün kompleks birikimiyle lökositoklastik vaskülit gelişimi',
        hallmark: 'Özellikle alt ekstremite ve kalçalarda palpabl purpura, artrit/artralji, kolik karın ağrısı ve normal trombosit sayısı',
        vignette:
          '6 yaşındaki çocuk üst solunum yolu enfeksiyonundan 10 gün sonra diz ve ayak bileklerinde şişlik, kalça ile bacakların arka yüzünde basmakla solmayan kabarık purpurik döküntüler ve göbek çevresinde şiddetli kramp tarzı karın ağrısıyla başvuruyor. Trombosit sayısı ve koagülasyon testleri tamamen normal saptanıyor',
        clues: ['kalça ile bacakların arka yüzünde basmakla solmayan kabarık purpurik döküntüler', 'kramp tarzı karın ağrısı', 'Trombosit sayısı ve koagülasyon testleri tamamen normal'],
        management: 'Destekleyici hidrasyon ve analjezi; şiddetli karın ağrısı, GİS kanaması veya renal tutulumda kortikosteroid (en az 6 ay idrar/tansiyon takibi)',
        pearl: 'Çocukluk çağının en sık sistemik vaskülitidir; bağırsak duvarı ödemine bağlı en sık cerrahi komplikasyonu ileoileal invajinasyondur.',
        trapFalse: 'koroner arter anevrizması yapmasıyla bilinir ve kesin tanısı için trombositopeni şarttır',
        trapHighlight: 'koroner arter anevrizması yapmasıyla bilinir ve kesin tanısı için trombositopeni şarttır',
      },
      {
        name: 'Kawasaki hastalığı',
        target: 'Orta çaplı arterleri tutan akut mukokütanöz lenf nodu sendromu ve koroner arterit',
        hallmark: 'Uzamış ateş, mukokütanöz bulgular, subakut dönemde el-ayak parmak uçlarından soyulma ve koroner arter ektazisi/anevrizması',
        vignette:
          '3 yaşındaki çocuk 7 gündür antibiyotiklere yanıtsız 39.5°C ateş, kırmızı çatlamış dudaklar, bilateral akıntısız konjonktivit ve gövdede polimorf döküntüyle yatırılıyor. 10. günde parmak uçlarından soyulma başladığı ve ekokardiyografide sol ön inen koroner arterde 4.8 mm dilatasyon geliştiği saptanıyor',
        clues: ['antibiyotiklere yanıtsız 39.5°C ateş', 'parmak uçlarından soyulma', 'sol ön inen koroner arterde 4.8 mm dilatasyon'],
        management: 'Tek doz 2 g/kg IVIG ve yüksek doz aspirin; IVIG dirençli ateşlerde ikinci doz IVIG, kortikosteroid veya infliksimab',
        pearl: 'Tedavi sonrası canlı aşılar (özellikle kızamık ve suçiçeği) yüksek doz IVIG pasif antikor etkileşimi nedeniyle 11 ay ertelenmelidir.',
        trapFalse: 'IVIG tedavisi aldıktan hemen ertesi gün KKK ve suçiçeği aşıları güvenle uygulanabilir',
        trapHighlight: 'hemen ertesi gün KKK ve suçiçeği aşıları güvenle uygulanabilir',
      },
      {
        name: 'Sistemik jüvenil idiyopatik artrit',
        target: 'IL-1, IL-6 ve IL-18 aşırı üretimiyle giden kazanılmış otoinflamatuvar hastalık (Still hastalığı)',
        hallmark: 'En az 2 hafta günde 1-2 kez pik yapıp normale inen (quotidian) ateş, ateşle çıkan somon rengi geçici döküntü, artrit, serozit ve yüksek ferritin',
        vignette:
          '5 yaşındaki çocuk 3 haftadır her akşam 39.8°C’ye çıkıp sabaha tamamen normale inen ateş, ateş yükseldiğinde gövdesinde belirip ateş düşünce kaybolan somon pembesi maküler döküntü ve el bileklerinde şişlikle getiriliyor. Hepatosplenomegali, plevral efüzyon, lökositoz, trombositoz, CRP 180 mg/L ve ferritin 2100 ng/mL saptanıyor',
        clues: ['her akşam 39.8°C’ye çıkıp sabaha tamamen normale inen ateş', 'ateş yükseldiğinde gövdesinde belirip ateş düşünce kaybolan somon pembesi', 'ferritin 2100 ng/mL'],
        management: 'Kortikosteroidler yanında IL-1 reseptör antagonisti (anakinra/kanakinumab) veya IL-6 blokörü (tosilizumab) biyolojik ajanları',
        pearl: 'Diğer JİA alt tiplerinden farklı olarak ANA ve RF genellikle negatiftir; makrofaj aktivasyon sendromu gelişme riski en yüksek alt tiptir.',
        trapFalse: 'ANA pozitifliği %80’in üzerindedir ve en sık komplikasyonu asemptomatik kronik üveittir',
        trapHighlight: 'ANA pozitifliği %80’in üzerindedir ve en sık komplikasyonu asemptomatik kronik üveittir',
      },
      {
        name: 'Oligoartiküler jüvenil idiyopatik artrit',
        target: 'İlk 6 ayda 4 veya daha az eklemi tutan otoimmün sinovit (CD4+ T hücre ve ANA ilişkili)',
        hallmark: 'Erken yaş kız çocukta tek veya birkaç büyük eklemde (en sık diz) sabah tutukluğu, pozitif ANA ve sessiz kronik ön üveit riski',
        vignette:
          '3 yaşındaki kız çocuk son 2 aydır sabahları uyandığında sağ dizini düzleştirememe ve hafif topallama ile getiriliyor; gün içinde yürümesi açılıyor. Muayenede sağ dizde efüzyon ve ısı artışı dışında ateş veya döküntü bulunmuyor. Laboratuvarda ANA 1/320 pozitif saptanıyor',
        clues: ['3 yaşındaki kız çocuk', 'sabahları uyandığında sağ dizini düzleştirememe', 'ANA 1/320 pozitif'],
        management: 'NSAİİ, intraartiküler triamsinolon hekzasetonid enjeksiyonu, yanıtısızda metotreksat ve her 3 ayda bir yarık lamba göz muayenesi',
        pearl: 'ANA pozitif küçük kız çocuklarında kronik iridosiklit (ön üveit) göz kızarıklığı veya ağrı yapmadan sinsi seyredip körlüğe gidebileceğinden düzenli biyomikroskopik tarama şarttır.',
        trapFalse: 'üveit her zaman şiddetli göz ağrısı ve konjonktival kızarıklıkla belirti verdiği için tarama gerekmez',
        trapHighlight: 'şiddetli göz ağrısı ve konjonktival kızarıklıkla belirti verdiği için tarama gerekmez',
      },
      {
        name: 'Makrofaj aktivasyon sendromu',
        target: 'Sitotoksik T ve NK hücre defekti sonucu kontrolsüz IFN-gama/IL-18 fırtınası ve makrofajların kan hücrelerini fagosite etmesi (sekonder HLH)',
        hallmark: 'Aralıksız düşmeyen ateş, pansitopeni, paradoksal olarak düşen ESR, aşırı yüksek ferritin (>5000), yüksek trigliserid, düşük fibrinojen ve hemofagositoz',
        vignette:
          'Sistemik JİA tanısıyla izlenen 6 yaşındaki hastanın durumu aniden kötüleşerek ateşi sürekli 39.5°C’de kalmaya başlıyor; bilinç bulanıklığı ve hepatosplenomegali gelişiyor. Önceden yüksek olan trombosit, lökosit ve fibrinojen hızla düşüyor; sedimantasyon (ESR) 95’ten 8 mm/saate gerilerken ferritin 14.000 ng/mL ve trigliserid 480 mg/dL’ye yükseliyor',
        clues: ['trombosit, lökosit ve fibrinojen hızla düşüyor', 'sedimantasyon (ESR) 95’ten 8 mm/saate gerilerken', 'ferritin 14.000 ng/mL'],
        management: 'Acil yüksek doz IV pulse metilprednizolon, siklosporin A ve anakinra (dirençli olgularda etoposid/emapalumab)',
        pearl: 'Fibrinojen tüketimine bağlı sedimantasyonun (ESR) paradoksal olarak düşmesi ve ferritinin on binlere fırlaması bu ölümcül tablonun en kritik uyarısıdır.',
        trapFalse: 'CRP ile birlikte eritrosit sedimantasyon hızı (ESR) aşırı yükselir ve fibrinojen düzeyi iki katına çıkar',
        trapHighlight: 'eritrosit sedimantasyon hızı (ESR) aşırı yükselir ve fibrinojen düzeyi iki katına çıkar',
      },
    ],
  },

  // 12. Organik Asidemiler ve Yağ Asidi Oksidasyon Defektleri
  {
    branchId: 'pediatri',
    subTopic: 'Organik Asidemiler ve Yağ Asidi Defektleri',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Propionik asidemi',
        target: 'Biyotin bağımlı propionil-KoA karboksilaz enziminin (PCCA/PCCB) genetik eksikliği',
        hallmark: 'Protein alımıyla tetiklenen yüksek anyon açıklı metabolik asidoz, ketozis, hiperamonyemi, pansitopeni ve idrarda metilsitrat/3-hidroksipropiyonat',
        vignette:
          'İlk 3 gün sağlıklı olan ancak proteinli beslenme sonrası 5. günde kusma, hipotoni ve komaya giren yenidoğanda pH 7.12, anyon açığı yüksek metabolik asidoz, ağır ketonüri, amonyak 420 mikromol/L ve nötropeni-trombositopeni saptanıyor. Kan açilkarnitinlerinde C3 (propiyonilkarnitin) yüksek ancak plazma ve idrar metilmalonik asit düzeyi normal bulunuyor',
        clues: ['anyon açığı yüksek metabolik asidoz, ağır ketonüri', 'C3 (propiyonilkarnitin) yüksek', 'metilmalonik asit düzeyi normal'],
        management: 'Akut atakta protein kesilmesi, yüksek dekstroz/insülin ile anabolizma sağlanması, karnitin ve sodyum benzoat/karglumik asit; uzun dönemde özel aminoasit diyeti ve metronidazol',
        pearl: 'Metilmalonik asit düzeyinin normal olmasıyla metilmalonik asidemiden ayrılır; bağırsak bakterilerinin ürettiği propiyonatı azaltmak için aralıklı oral metronidazol kullanılır.',
        trapFalse: 'idrar ve kanda metilmalonik asit belirgin yükselir ve yüksek doz B12 vitaminine dramatik yanıt verir',
        trapHighlight: 'metilmalonik asit belirgin yükselir ve yüksek doz B12 vitaminine dramatik yanıt verir',
      },
      {
        name: 'Metilmalonik asidemi',
        target: 'Metilmalonil-KoA mutaz apoenzimi veya adenozilkobalamin (B12) kofaktör metabolizması defekti',
        hallmark: 'Yenidoğan/süt çocuğunda ağır ketoasidoz, hiperamonyemi, pansitopeni, idrarda aşırı metilmalonik asit artışı ve B12 yanıtlı alt tipler',
        vignette:
          '6 günlük yenidoğan emmeme, hızlı derin soluma ve letarjiyle yoğun bakıma alınıyor. Laboratuvarda derin metabolik asidoz, ketozis, hiperamonyemi, trombositopeni ve kanda propiyonilkarnitin (C3) yüksekliği görülüyor. İdrar organik asit analizinde çok yüksek miktarda metilmalonik asit saptanıyor',
        clues: ['derin metabolik asidoz, ketozis, hiperamonyemi', 'propiyonilkarnitin (C3) yüksekliği', 'çok yüksek miktarda metilmalonik asit'],
        management: 'Protein kısıtlaması (valin, izolösin, metiyonin, treonin), L-karnitin desteği ve tüm hastalarda mutlaka yüksek doz IM hidroksikobalamin (B12) yanıtının test edilmesi',
        pearl: 'Uzun dönemde kronik tubulointerstisyel nefrit ve bazal gangliyon (globus pallidus) nekrozuna bağlı hareket bozuklukları gelişebilir.',
        trapFalse: 'ketonüri kesinlikle görülmez ve B12 vitamini metabolizmasıyla hiçbir ilişkisi yoktur',
        trapHighlight: 'ketonüri kesinlikle görülmez ve B12 vitamini metabolizmasıyla hiçbir ilişkisi yoktur',
      },
      {
        name: 'İzovalerik asidemi',
        target: 'Lösin yıkım yolağındaki izovaleril-KoA dehidrogenaz enziminin otozomal resesif eksikliği',
        hallmark: 'Akut atakta hastada belirgin "terli ayak" (peynir) kokusu, ketoasidoz, hiperamonyemi ve pansitopeni',
        vignette:
          '7 günlük yenidoğan kusma, hipotoni ve koma tablosuyla getirildiğinde muayene odasında bebeğin cildinden ve idrarından keskin bir "terli ayak" kokusu yayıldığı fark ediliyor. Kan gazında yüksek anyon açıklı metabolik asidoz, ketonüri, hiperamonyemi ve tandem kütle spektrometrisinde C5-izovalerilkarnitin artışı saptanıyor',
        clues: ['keskin bir "terli ayak" kokusu', 'yüksek anyon açıklı metabolik asidoz, ketonüri', 'C5-izovalerilkarnitin artışı'],
        management: 'Lösinden kısıtlı diyet yanında toksik izovalerik asidi zararsız bileşiklere bağlayıp idrarla atmak için oral L-karnitin ve glisin tedavisi',
        pearl: 'Akçaağaç şurubu idrar hastalığında yanmış şeker/çemen kokusu, fenilketonüride fare/küf kokusu, bu hastalıkta ise terli ayak kokusu karakteristiktir.',
        trapFalse: 'idrarından akçaağaç şurubu/yanmış şeker kokusu gelir ve lösin-izolösin-valin dışında dallı zincirli aminoasitlerle ilgisizdir',
        trapHighlight: 'akçaağaç şurubu/yanmış şeker kokusu gelir',
      },
      {
        name: 'Glutarik asidüri Tip 1',
        target: 'Lizin, hidroksilizin ve triptofan katabolizmasındaki glutaril-KoA dehidrogenaz enziminin eksikliği',
        hallmark: 'Doğumdan itibaren makrosefali, MR’da geniş Silvian fissürler (yarasa kanadı), enfeksiyonla tetiklenen akut striatal nekroz/distoni ve subdural kanama',
        vignette:
          'Baş çevresi >98. persentil olan 11 aylık bebek hafif bir ateşli gastroenterit atağından hemen sonra aniden başını kontrol edememe, ağır jeneralize distoni ve koreoatetoz geliştiriyor. Beyin MR’da temporal lob hipoplazisiyle genişlemiş Silvian fissürler, bilateral putamen/kaudat nükleusta T2 hiperintensitesi ve ince subdural hematomlar görülüyor',
        clues: ['Baş çevresi >98. persentil', 'genişlemiş Silvian fissürler', 'bilateral putamen/kaudat nükleusta T2 hiperintensitesi ve ince subdural hematomlar'],
        management: 'Lizin ve triptofandan kısıtlı diyet, L-karnitin desteği ve ateşli enfeksiyonlarda striatal nekrozu önlemek için acil yüksek kalorili IV glukoz protokolü',
        pearl: 'Klasik organik asidemilerden farklı olarak asidoz ve hiperamonyemi olmadan da yalnızca makrosefali ile seyreder ve yanlışlıkla sarsılmış bebek sendromu (subdural hematom) sanılabilir.',
        trapFalse: 'mikrosefali ile seyreder ve çocuk istismarı olmaksızın asla subdural hematom oluşturmaz',
        trapHighlight: 'mikrosefali ile seyreder ve çocuk istismarı olmaksızın asla subdural hematom oluşturmaz',
      },
      {
        name: 'Orta zincirli açil-KoA dehidrogenaz eksikliği',
        target: 'ACADM gen mutasyonuyla mitokondriyal yağ asidi beta-oksidasyonunda 6-12 karbonlu yağ asitlerinin yıkılamaması',
        hallmark: 'Uzamış açlık veya enfeksiyon sonrası ağır hipoketotik (non-ketotik) hipoglisemi, letarji/ani ölüm riski ve dikarboksilik asidüri',
        vignette:
          '15 aylık sağlıklı çocuk viral kusma nedeniyle 14 saat beslenemedikten sonra sabah yatağında uyandırılamama ve nöbetle acile getiriliyor. Kan şekeri 21 mg/dL saptanmasına rağmen idrar ve kanda keton tamamen negatif bulunuyor; hafif AST/ALT ve amonyak yüksekliği ile kanda C8-oktanoilkarnitin artışı izleniyor',
        clues: ['14 saat beslenemedikten sonra', 'Kan şekeri 21 mg/dL saptanmasına rağmen idrar ve kanda keton tamamen negatif', 'C8-oktanoilkarnitin artışı'],
        management: 'Uzamış açlıktan kesinlikle kaçınma, sık kompleks karbonhidratlı beslenme, enfeksiyonlarda acil IV dekstroz ve gece mısır nişastası (orta zincirli trigliserid/MCT verilmez)',
        pearl: 'Yağ asidi oksidasyon defektlerinin en sık görülen tipidir; hipoglisemiye rağmen keton üretilememesi (non-ketotik hipoglisemi) Reye-benzeri tablo ile ani bebek ölümüne yol açabilir.',
        trapFalse: 'açlık hipoglisemisine eşlik eden ağır ketonüri vardır ve tedavisinde orta zincirli trigliserid (MCT) yağı verilir',
        trapHighlight: 'ağır ketonüri vardır ve tedavisinde orta zincirli trigliserid (MCT) yağı verilir',
      },
    ],
  },

  // 13. Karbonhidrat Metabolizma Bozuklukları
  {
    branchId: 'pediatri',
    subTopic: 'Karbonhidrat Metabolizma Bozuklukları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Klasik galaktozemi',
        target: 'GALT (galaktoz-1-fosfat üridiltransferaz) eksikliğine bağlı toksik galaktoz-1-fosfat ve galaktitol birikimi',
        hallmark: 'Anne sütü/laktoz alımıyla kusma, sarılık, hepatomegali, katarakt, E. coli neonatal sepsisi ve idrarda glukoz dışı indirgeyici madde pozitifliği',
        vignette:
          'Anne sütü almaya başladıktan sonraki 5. günde sarılık, kusma, karaciğer büyümesi, koagülopati ve kan kültüründe E. coli sepsisi gelişen yenidoğanda bilateral nükleer katarakt saptanıyor. İdrarda Benedict (indirgeyici madde) testi pozitif iken glukoz oksidaz strip testi negatif bulunuyor',
        clues: ['Anne sütü almaya başladıktan sonraki 5. günde', 'E. coli sepsisi ve bilateral nükleer katarakt', 'indirgeyici madde testi pozitif iken glukoz oksidaz strip testi negatif'],
        management: 'Derhal anne sütü dahil tüm süt/laktoz kaynaklarının kesilip soya bazlı formülaya geçilmesi ve ömür boyu galaktozsuz diyet',
        pearl: 'Anne sütünün mutlak kontrendike olduğu nadir doğumsal metabolik hastalıklardandır; yenidoğanda E. coli sepsisi ile birlikteliği çok karakteristiktir.',
        trapFalse: 'tedavisinde anne sütüne devam edilir ve yalnızca katarakt gelişirse diyet yapılır',
        trapHighlight: 'anne sütüne devam edilir ve yalnızca katarakt gelişirse diyet yapılır',
      },
      {
        name: 'Galaktokinaz eksikliği',
        target: 'GALK1 gen mutasyonuyla galaktozun galaktoz-1-fosfata fosforile edilememesi ve lenste galaktitole dönüşmesi',
        hallmark: 'Karaciğer, böbrek veya zekâ tutulumu olmaksızın izole erken başlangıçlı bilateral katarakt ve idrarda indirgeyici madde pozitifliği',
        vignette:
          'Anne sütü alan 4 aylık bebek tamamen normal gelişim gösterirken ve sarılık/karaciğer büyümesi yokken rutin göz muayenesinde bilateral katarakt saptanıyor. Karaciğer enzimleri normal olan bebeğin idrarında glukoz oksidaz negatif iken indirgeyici madde testi pozitif bulunuyor',
        clues: ['sarılık/karaciğer büyümesi yokken', 'bilateral katarakt', 'Karaciğer enzimleri normal, indirgeyici madde testi pozitif'],
        management: 'Diyetten galaktoz ve laktozun çıkarılması (erken başlanırsa lens değişiklikleri gerileyebilir)',
        pearl: 'Toksik galaktoz-1-fosfat birikmediği için hepatosellüler hasar, renal Fanconi sendromu veya E. coli sepsisi görülmez; biriken galaktitol sadece lenste ozmotik katarakt yapar.',
        trapFalse: 'ağır hepatik yetmezlik, aminoasidüri ve mental retardasyonla seyreder',
        trapHighlight: 'ağır hepatik yetmezlik, aminoasidüri ve mental retardasyonla seyreder',
      },
      {
        name: 'Herediter fruktoz intoleransı',
        target: 'ALDOB (aldolaz B) eksikliği nedeniyle fruktoz-1-fosfat birikerek glikojenoliz ve glukoneogenezin inhibe olması',
        hallmark: 'Meyve püresi veya sükrozlu ek gıdaya geçince ağır hipoglisemi, kusma, sarılık, hepatomegali, renal tübülopati ve tatlılardan tiksinme',
        vignette:
          'İlk 6 ay anne sütüyle tamamen sağlıklı büyüyen bebek ek gıda olarak meyve suyu ve şekerli muhallebi aldıktan saatler sonra şiddetli kusma, terleme, hipoglisemik nöbet ve transaminaz yüksekliğiyle getiriliyor. Büyük kardeşi gibi çocuğun da ileride şekerli yiyeceklerden içgüdüsel olarak kaçındığı görülüyor',
        clues: ['meyve suyu ve şekerli muhallebi aldıktan', 'hipoglisemik nöbet ve transaminaz yüksekliği', 'şekerli yiyeceklerden içgüdüsel olarak kaçındığı'],
        management: 'Diyetten fruktoz, sükroz ve sorbitolün ömür boyu tamamen çıkarılması',
        pearl: 'Anne sütünde sadece laktoz bulunduğu için ilk 6 ay tamamen asemptomatiktir; fruktoz-1-fosfat birikimi fosfat tuzağı yaparak ağır postprandiyal hipoglisemiye yol açar.',
        trapFalse: 'doğumdan hemen sonra anne sütü ile semptom verir ve idrarda indirgeyici madde her zaman negatiftir',
        trapHighlight: 'anne sütü ile semptom verir',
      },
      {
        name: 'Esansiyel fruktozüri',
        target: 'Hepatik fruktokinaz (KHK) eksikliği nedeniyle diyetle alınan fruktozun fosforile edilemeyip idrarla atılması',
        hallmark: 'Tamamen asemptomatik iyi huylu tablo; idrarda indirgeyici madde pozitif ancak glukoz oksidaz negatif olması',
        vignette:
          '7 yaşındaki tamamen sağlıklı çocuk okul taramasında idrarda bakır redüksiyon (Benedict) testi pozitif, glukoz oksidaz testi negatif çıkması üzerine inceleniyor. Hipoglisemi, katarakt, karaciğer büyümesi veya büyüme geriliği olmayan hastanın idrar kromatografisinde yüksek fruktoz atılımı saptanıyor',
        clues: ['Tamamen sağlıklı çocuk', 'Benedict testi pozitif, glukoz oksidaz testi negatif', 'Hipoglisemi, katarakt, karaciğer büyümesi yok'],
        management: 'Tamamen selim bir metabolik varyant olduğundan hiçbir diyet kısıtlaması veya tedavi gerektirmez (yanlışlıkla diyabet sanılmamalıdır)',
        pearl: 'Fruktoz-1-fosfat oluşamadığı için hücre içi fosfat tükenmesi ve organ hasarı gelişmez; klinik önemi yalnızca idrar indirgeyici madde testini pozitifleştirerek yanlış tanıya yol açabilmesidir.',
        trapFalse: 'meyve tüketimi sonrası ölümcül karaciğer yetmezliği ve derin hipoglisemiye neden olur',
        trapHighlight: 'ölümcül karaciğer yetmezliği ve derin hipoglisemiye neden olur',
      },
      {
        name: 'Pirüvat dehidrogenaz eksikliği',
        target: 'PDHA1 (çoğunlukla X’e bağlı) gen mutasyonuyla pirüvatın asetil-KoA’ya dönüşemeyip laktat ve alanine yönelmesi',
        hallmark: 'Konjenital laktik asidoz, normal laktat/pirüvat oranı (<20), yüksek alanin, korpus kallozum agenezisi ve Leigh-benzeri lezyonlar',
        vignette:
          '3 aylık erkek bebekte ağır hipotoni, nöbetler ve derin hızlı solunumla başvurduğunda kanda laktat 8.5 mmol/L ve pirüvat da orantılı biçimde yüksek (laktat/pirüvat oranı 13) bulunuyor. Plazma alanin düzeyi yüksek, beyin MR’da korpus kallozum agenezisi ve bazal gangliyonlarda simetrik nekroz görülüyor',
        clues: ['laktat 8.5 mmol/L ve pirüvat da orantılı biçimde yüksek', 'Plazma alanin düzeyi yüksek', 'korpus kallozum agenezisi'],
        management: 'Karbonhidratların laktata dönüşmesini azaltmak için yüksek yağlı ketojenik diyet ve kofaktör desteği olarak yüksek doz tiamin (B1 vitamini)',
        pearl: 'Solunum zinciri defektlerinden farklı olarak hem laktat hem pirüvat birlikte yükseldiği için laktat/pirüvat oranı normal (<20) kalır; yüksek glukoz verilmesi asidozu kötüleştirir.',
        trapFalse: 'tedavisinde yüksek karbonhidratlı diyet önerilir ve laktat/pirüvat oranı her zaman >50 bulunur',
        trapHighlight: 'yüksek karbonhidratlı diyet önerilir ve laktat/pirüvat oranı her zaman >50 bulunur',
      },
    ],
  },

  // 14. Pediatrik GİS Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik GİS ve Hepatobiliyer Hastalıklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Biliyer atrezi',
        target: 'Ekstrahepatik safra yollarının perinatal inflamatuvar obliterasyonu ve progresif biliyer siroz',
        hallmark: '2 haftayı aşan direkt hiperbilirubinemi, akolik (camcı macunu rengi) dışkı, yüksek GGT ve biyopside safra duktus proliferasyonu',
        vignette:
          'Genel durumu iyi ve kilo alımı normal 5 haftalık bebek uzamış sarılık ve açık krem rengi dışkılama nedeniyle getiriliyor. Total bilirubin 9.8 mg/dL, direkt bilirubin 7.1 mg/dL, GGT 680 U/L bulunuyor. Açlık USG’de safra kesesi görülmüyor (üçgen kord işareti); karaciğer biyopsisinde portal fibrozis ve safra kanalikül proliferasyonu saptanıyor',
        clues: ['açık krem rengi dışkılama', 'direkt bilirubin 7.1 mg/dL, GGT 680 U/L', 'üçgen kord işareti ve safra kanalikül proliferasyonu'],
        management: 'Tanının intraoperatif kolanjiyografi ile kesinleştirilmesi ve ideal olarak ilk 60 gün içinde Kasai hepatoportoenterostomi ameliyatı (başarısızsa karaciğer nakli)',
        pearl: 'Çocukluk çağında karaciğer transplantasyonunun en sık endikasyonudur; Kasai ameliyatı 60 günden sonraya gecikirse başarı şansı hızla düşer.',
        trapFalse: 'indirekt hiperbilirubinemi ile seyreder, GGT normaldir ve tedavisinde yalnızca fototerapi yeterlidir',
        trapHighlight: 'indirekt hiperbilirubinemi ile seyreder, GGT normaldir ve tedavisinde yalnızca fototerapi yeterlidir',
      },
      {
        name: 'Koledok kisti',
        target: 'Pankreatikobiliyer bileşke anomalisi sonucu pankreas enzimlerinin safra yoluna reflüsü ve ana safra kanalının kistik dilatasyonu',
        hallmark: 'Aralıklı sarılık, sağ üst kadran ağrısı ve palpe edilebilir kitle klasik triyadı (en sık Todani Tip I fuziform dilatasyon)',
        vignette:
          '4 yaşındaki kız çocuk tekrarlayan sağ üst kadran karın ağrısı, hafif sarılık atakları ve karında dolgunlukla başvuruyor. Muayenede sağ üst kadranda düzgün sınırlı kitle hissediliyor; USG ve MRCP’de ana safra kanalının kese şeklinde genişlediği görülüyor',
        clues: ['tekrarlayan sağ üst kadran karın ağrısı, hafif sarılık', 'sağ üst kadranda düzgün sınırlı kitle', 'MRCP’de ana safra kanalının kese şeklinde genişlediği'],
        management: 'Kolanjiyokarsinom ve tekrarlayan kolanjit riskini ortadan kaldırmak için kistin total eksizyonu ve Roux-en-Y hepatikojejunostomi',
        pearl: 'Sadece kist drenajı malignite riskini ortadan kaldırmadığı için kist duvarının tamamen çıkarılması standarttır.',
        trapFalse: 'malign dönüşüm riski olmadığı için yalnızca semptomatik hastalarda basit internal drenaj yapılır',
        trapHighlight: 'malign dönüşüm riski olmadığı için yalnızca semptomatik hastalarda basit internal drenaj yapılır',
      },
      {
        name: 'Kistik fibrozis',
        target: 'Pankreas kanallarında koyu sekresyon tıkanmasına bağlı asiner yıkım ve ekzokrin pankreas yetmezliği',
        hallmark: 'Bol, yağlı, kötü kokulu dışkılama, rektal prolapsus, büyüme geriliği, ADEK vitamini eksikliği ve düşük fekal elastaz-1',
        vignette:
          '7 aylık bebek iştahı çok iyi olmasına rağmen kilo alamama, günde 5 kez yağ damlacıklı çok pis kokulu dışkılama ve dışkılama sırasında rektumun dışarı sarkmasıyla getiriliyor. Fekal elastaz-1 düzeyi <15 mcg/g, serum albumin düşük ve tekrarlayan bronşiyolit öyküsü bulunuyor',
        clues: ['iştahı çok iyi olmasına rağmen kilo alamama', 'dışkılama sırasında rektumun dışarı sarkması', 'Fekal elastaz-1 düzeyi <15 mcg/g'],
        management: 'Her öğün ve ara öğünle birlikte enterik kaplı pankreatik enzim replasmanı, yüksek kalorili diyet ve yağda eriyen ADEK vitaminleri',
        pearl: 'Çocukluk çağında tekrarlayan rektal prolapsusun en önemli organik nedenlerinden biridir; malabsorpsiyona rağmen iştahın açık olması tipiktir.',
        trapFalse: 'rektal prolapsus görülmez ve fekal elastaz düzeyi her zaman belirgin yüksektir',
        trapHighlight: 'rektal prolapsus görülmez ve fekal elastaz düzeyi her zaman belirgin yüksektir',
      },
      {
        name: 'Çölyak hastalığı',
        target: 'HLA-DQ2/DQ8 pozitif bireylerde buğday, arpa ve çavdardaki gliyadine karşı gelişen T-hücre aracılı otoimmün enteropati',
        hallmark: 'Tahıl içeren ek gıdalar sonrası kronik ishal, karın şişliği, kas erimesi, boy kısalığı, yüksek anti-tTG IgA ve biyopside villöz atrofi',
        vignette:
          '18 aylık çocuk 7. ayda buğday unlu gıdalara geçildikten sonra başlayan kronik ishal, huysuzluk, ince kol ve bacaklara karşın şişkin karın ve kalça kaslarında düzleşme şikayetiyle getiriliyor. Total IgA normal, anti-doku transglutaminaz IgA >200 U/mL geliyor; duodenal biyopside total villöz atrofi, kript hiperplazisi ve intraepitelyal lenfosit artışı görülüyor',
        clues: ['buğday unlu gıdalara geçildikten sonra', 'ince kol ve bacaklara karşın şişkin karın', 'anti-doku transglutaminaz IgA >200 U/mL ve villöz atrofi'],
        management: 'Ömür boyu kesin glutensiz diyet (buğday, arpa, çavdar tamamen çıkarılır; pirinç, mısır ve patates güvenlidir)',
        pearl: 'Seçici IgA eksikliği bu hastalarda 10 kat sık olduğundan taramada mutlaka total IgA ile birlikte anti-tTG IgA bakılmalıdır; dermatitis herpetiformis ve Tip 1 DM sık eşlik eder.',
        trapFalse: 'tarama testinde selektif IgA eksikliği bulunanlarda IgA sınıfı antikorlar en yüksek duyarlılığı gösterir',
        trapHighlight: 'selektif IgA eksikliği bulunanlarda IgA sınıfı antikorlar en yüksek duyarlılığı gösterir',
      },
      {
        name: 'Meckel divertikülü',
        target: 'Embriyonik omfalomezenterik (vitellin) kanalın ileal ucunun kapanmaması ve içindeki ektopik gastrik mukozanın asit salgılaması',
        hallmark: '2 yaş altı çocukta ağrısız masif rektal kanama (kırmızı-bordo dışkı), anemi ve Tc-99m perteknetat sintigrafisinde tutulum',
        vignette:
          '15 aylık sağlıklı erkek çocuk ani başlayan ağrısız, bol miktarda parlak kırmızı-bordo renkli rektal kanama ve Hb 6.8 g/dL ile acile getiriliyor. Karnı yumuşak ve hassasiyetsiz olan çocuğun endoskopisi normal bulunuyor; Tc-99m perteknetat (Meckel) sintigrafisinde mide ile eş zamanlı sağ alt kadranda aktivite tutulumu izleniyor',
        clues: ['15 aylık sağlıklı erkek çocuk', 'ağrısız, bol miktarda parlak kırmızı-bordo renkli rektal kanama', 'Tc-99m perteknetat sintigrafisinde sağ alt kadranda aktivite'],
        management: 'Hemodinamik stabilizasyon sonrası divertikülün cerrahi eksizyonu (ektopik mukoza tabanda olabileceğinden kama/segmenter rezeksiyon)',
        pearl: '"2’ler kuralı": toplumun %2’sinde, ileoçekal valvin ~60 cm (2 feet) proksimalinde, 2 inç uzunlukta, genellikle 2 yaş altında semptomatik ve 2 tip ektopik doku (gastrik/pankreatik) içerir.',
        trapFalse: 'GİS kanaması her zaman şiddetli kolik karın ağrısıyla birlikte görülür ve kolon polipinden kaynaklanır',
        trapHighlight: 'her zaman şiddetli kolik karın ağrısıyla birlikte görülür ve kolon polipinden kaynaklanır',
      },
    ],
  },

  // 15. Çocukluk Çağı Kombine ve Hücresel İmmün Yetmezlikler
  {
    branchId: 'pediatri',
    subTopic: 'Kombine ve Hücresel İmmün Yetmezlikler',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Ağır kombine immün yetmezlik',
        target: 'IL2RG (X’e bağlı ortak gama zinciri), ADA veya RAG1/2 mutasyonuyla T-lenfosit gelişiminin (ve B/NK işlevinin) durması',
        hallmark: 'İlk aylarda kronik ishal, inatçı pamukçuk, Pneumocystis jirovecii pnömonisi, ağır lenfopeni (<2500/mm³) ve timus gölgesi yokluğu',
        vignette:
          '3 aylık erkek bebek geçmeyen ağız içi pamukçuk, kronik sulu ishal, büyüme geriliği ve ağır takipneyle yatırılıyor. BAL sıvısında Pneumocystis jirovecii saptanıyor; mutlak lenfosit sayısı 620/mm³, tüm immünglobulinler çok düşük ve akciğer grafisinde timus gölgesi seçilemiyor',
        clues: ['geçmeyen ağız içi pamukçuk, kronik sulu ishal', 'mutlak lenfosit sayısı 620/mm³', 'timus gölgesi seçilemiyor'],
        management: 'Pediatrik immünoloji acilidir: TMP-SMX ve IVIG profilaksisi, ışınlanmış kan ürünü, canlı aşılardan kaçınma ve acil hematopoetik kök hücre nakli',
        pearl: 'BCG ve rotavirüs gibi canlı aşılar ölümcül dissemine enfeksiyona yol açabilir; bu bebeklere verilecek tüm kan ürünleri GVHD’yi önlemek için mutlaka ışınlanmalıdır.',
        trapFalse: 'periferik kanda belirgin lenfositoz görülür ve canlı aşılar güvenle uygulanabilir',
        trapHighlight: 'belirgin lenfositoz görülür ve canlı aşılar güvenle uygulanabilir',
      },
      {
        name: 'Hiper-IgM sendromu',
        target: 'En sık X’e bağlı CD40 ligand (CD154) mutasyonu nedeniyle B hücrelerinde immünglobulin sınıf dönüşümünün (class switching) bozulması',
        hallmark: 'Çok düşük IgG, IgA, IgE düzeylerine karşın normal veya yüksek IgM, erken PJP pnömonisi, Cryptosporidium sklerozan kolanjiti ve nötropeni',
        vignette:
          '8 aylık erkek bebek Pneumocystis jirovecii pnömonisi ve ardından Cryptosporidium ilişkili kronik ishal ile kolestaz geliştiriyor. T ve B hücre sayıları normal bulunmasına karşın serum IgG 45 mg/dL, IgA <5 mg/dL, buna karşılık IgM 460 mg/dL ölçülüyor; aktive T hücrelerinde CD40L ekspresyonu saptanamıyor',
        clues: ['Cryptosporidium ilişkili kronik ishal', 'IgG 45 mg/dL, IgA <5 mg/dL, buna karşılık IgM 460 mg/dL', 'aktive T hücrelerinde CD40L ekspresyonu saptanamıyor'],
        management: 'Düzenli IVIG replasmanı, PJP için TMP-SMX profilaksisi, kaynamış su tüketimi (Cryptosporidium önlemi) ve CD40L tipinde küratif kök hücre nakli',
        pearl: 'Yalnızca B hücre kusuru değil aynı zamanda T-hücre kostimülasyon defekti olduğu için fırsatçı enfeksiyonlar (PJP, Cryptosporidium) sıktır ve lenf nodlarında germinal merkez oluşmaz.',
        trapFalse: 'serum IgG düzeyi normaldir ve lenf nodlarında hiperplastik dev germinal merkezler bulunur',
        trapHighlight: 'serum IgG düzeyi normaldir ve lenf nodlarında hiperplastik dev germinal merkezler bulunur',
      },
      {
        name: 'Hiper-IgE sendromu',
        target: 'Otozomal dominant STAT3 gen mutasyonuna bağlı Th17 hücre farklılaşma bozukluğu ve IL-17/nötrofil kemotaksis defekti',
        hallmark: 'Soğuk stafilokokal deri apseleri, pnömatosel bırakan tekrarlayan pnömoniler, ekzema, kaba yüz, süt dişlerinin düşmemesi ve IgE >2000 IU/mL',
        vignette:
          '9 yaşındaki çocuk ateş ve kızarıklık olmadan gelişen soğuk cilt apseleri, kronik ekzema ve iki kez geçirilmiş stafilokokal pnömoni sonrası gelişen akciğer pnömatoselleri nedeniyle inceleniyor. Muayenede geniş burun köprülü kaba yüz görünümü, çift sıra dişler (süt dişlerinin düşmemesi) ve serum IgE 8400 IU/mL bulunuyor',
        clues: ['ateş ve kızarıklık olmadan gelişen soğuk cilt apseleri', 'akciğer pnömatoselleri', 'süt dişlerinin düşmemesi ve serum IgE 8400 IU/mL'],
        management: 'Antistafilokokal (TMP-SMX) ve antifungal profilaksi, cilt bakımı ve apselerin drenajı',
        pearl: 'Job sendromu olarak da bilinir; FATED akronimi (kaba Yüz, soğuk Apseler, düşmeyen Dişler, yüksek IgE, Dermatit) ile özetlenir.',
        trapFalse: 'cilt apseleri çok sıcak ve şiddetli eritemli seyreder, süt dişleri ise normalden erken dökülür',
        trapHighlight: 'çok sıcak ve şiddetli eritemli seyreder, süt dişleri ise normalden erken dökülür',
      },
      {
        name: 'Kronik mukokütanöz kandidiyazis',
        target: 'STAT1 fonksiyon kazanımı veya AIRE (otoimmün poliendokrinopati) mutasyonlarıyla Th17 / IL-17 aracılı mukozal antifungal bağışıklık kusuru',
        hallmark: 'Sistemik derin yayılım olmaksızın oral mukoza, tırnak ve deride dirençli mantar enfeksiyonları ile sıklıkla hipoparatiroidi ve Addison hastalığı',
        vignette:
          '4 yaşındaki çocuk bebeklikten beri ağız içinde kalın beyaz plaklar, parmak tırnaklarında kalınlaşma ve kırılma ile getiriliyor; ancak hiç invaziv mantar sepsisi geçirmemiş olduğu öğreniliyor. İzlemde hipokalsemik tetani (hipoparatiroidi) ve ciltte hiperpigmentasyon (adrenal yetmezlik) gelişiyor',
        clues: ['tırnaklarında kalınlaşma', 'hiç invaziv mantar sepsisi geçirmemiş', 'hipoparatiroidi ve adrenal yetmezlik'],
        management: 'Uzun süreli veya aralıklı sistemik azol (flukonazol/itrakonazol) tedavisi ve APECED endokrinopatilerinin hormon replasmanı',
        pearl: 'Kandida enfeksiyonu mukoza ve tırnaklara sınırlı kalır; AIRE gen mutasyonlu tipte (APECED / APS-1) klasik triyad bu enfeksiyon + hipoparatiroidi + adrenal yetmezliktir.',
        trapFalse: 'en sık ölüm nedeni beyin ve böbrekleri tutan fulminan sistemik kandidemidir',
        trapHighlight: 'en sık ölüm nedeni beyin ve böbrekleri tutan fulminan sistemik kandidemidir',
      },
      {
        name: 'Lökosit adezyon defekti Tip 1',
        target: 'ITGB2 gen mutasyonuyla CD18 beta-2 integrin alt biriminin eksikliği ve nötrofillerin endotelden dokuya göç edememesi',
        hallmark: 'Göbek kordonunun gecikmiş düşmesi (>3-4 hafta), püy (irin) oluşmayan nekrotik enfeksiyonlar ve enfeksiyon yokken dahi aşırı lökositoz',
        vignette:
          'Göbek kordonu yaşamın 34. gününde düşen ve omfalit geçiren 2 aylık bebekte perianal bölgede ağrılı ancak içinde hiç cerahat (püy) birikmeyen nekrotik ülser gelişiyor. Tam kan sayımında lökosit sayısı 78.000/mm³ (%88 nötrofil) saptanıyor; akım sitometride lökosit yüzeyinde CD18 ve CD11b ekspresyonu sıfır bulunuyor',
        clues: ['Göbek kordonu yaşamın 34. gününde düşen', 'hiç cerahat (püy) birikmeyen nekrotik ülser', 'lökosit sayısı 78.000/mm³, CD18 ekspresyonu sıfır'],
        management: 'Agresif antibiyoterapi, profilaktik TMP-SMX, ağız-diş bakımı ve ağır fenotipte küratif allojenik hematopoetik kök hücre nakli',
        pearl: 'Nötrofiller damar duvarına yapışıp dokuya çıkamadığı için kanda aşırı nötrofili birikirken yara yerinde hiç irin oluşmaz; geç göbek düşmesi klasik sınav sorusudur.',
        trapFalse: 'enfeksiyon bölgelerinde bol miktarda kalın yeşil irin (püy) birikir ve kanda ağır nötropeni vardır',
        trapHighlight: 'bol miktarda kalın yeşil irin (püy) birikir ve kanda ağır nötropeni vardır',
      },
    ],
  },

  // 16. Fagositer ve Kompleman Defektleri
  {
    branchId: 'pediatri',
    subTopic: 'Fagositer ve Kompleman Defektleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Chédiak-Higashi sendromu',
        target: 'LYST (CHS1) gen mutasyonuyla fagosom-lizozom füzyonunun ve NK hücre sitotoksik granül salınımının bozulması',
        hallmark: 'Parsiyel okülokütanöz albinizm, gümüşi saç, nistagmus, nötrofillerde dev azurofilik granüller, periferik nöropati ve hızlanmış HLH fazı',
        vignette:
          'Açık tenli, saçları metalik gümüş parlaklığında olan ve gözlerinde nistagmus bulunan 3 yaşındaki çocuk tekrarlayan cilt ve akciğer apseleriyle başvuruyor. Periferik kan yaymasının incelenmesinde tüm nötrofil ve lenfositlerin sitoplazmasında dev boyutlu azurofilik granüller görülüyor',
        clues: ['saçları metalik gümüş parlaklığında', 'tekrarlayan cilt ve akciğer apseleri', 'nötrofil ve lenfositlerin sitoplazmasında dev boyutlu azurofilik granüller'],
        management: 'Enfeksiyonların tedavisi, askorbik asit desteği, hızlanmış HLH fazında immünkemoterapi ve küratif allojenik kök hücre nakli',
        pearl: 'Okülokütanöz albinizm + periferik yaymada dev granüller + tekrarlayan piyojenik enfeksiyonlar klasik üçlüsüdür; trombosit yoğun granül eksikliğine bağlı kanama diyatezi de görülür.',
        trapFalse: 'periferik yaymada granülsüz hipogranüler nötrofiller görülür ve ciltte aşırı hiperpigmentasyon vardır',
        trapHighlight: 'granülsüz hipogranüler nötrofiller görülür ve ciltte aşırı hiperpigmentasyon vardır',
      },
      {
        name: 'Kronik granülomatöz hastalık',
        target: 'NADPH oksidaz kompleksi (en sık X’e bağlı gp91phox) defektiyle oksidatif patlama ve H2O2 üretiminin bozulması',
        hallmark: 'Katalaz pozitif organizmalarla (S. aureus, Serratia, Burkholderia, Aspergillus) derin apseler/granülomlar, anormal DHR ve negatif NBT testi',
        vignette:
          '5 yaşındaki erkek çocuk tekrarlayan süpüratif lenfadenit, karaciğer apsesi ve Aspergillus pnömonisi öyküsüyle inceleniyor; ayrıca GİS’te Crohn hastalığını taklit eden obstrüktif granülomlar saptanıyor. Dihidrorodamin (DHR) 123 akım sitometri testinde nötrofil oksidatif patlama yanıtı alınamıyor',
        clues: ['karaciğer apsesi ve Aspergillus pnömonisi', 'obstrüktif granülomlar', 'Dihidrorodamin (DHR) 123 testinde yanıt alınamıyor'],
        management: 'Ömür boyu TMP-SMX ve itrakonazol profilaksisi, interferon-gama (IFN-gama) enjeksiyonları ve küratif kök hücre nakli',
        pearl: 'Katalaz negatif bakteriler kendi ürettikleri H2O2 ile nötrofil içinde yok edilebilirken, katalaz pozitif bakteriler kendi H2O2’lerini parçaladıkları için öldürülemez.',
        trapFalse: 'en sık etkenler katalaz negatif streptokoklardır ve DHR akım sitometri testi tamamen normaldir',
        trapHighlight: 'katalaz negatif streptokoklardır ve DHR akım sitometri testi tamamen normaldir',
      },
      {
        name: 'Miyeloperoksidaz eksikliği',
        target: 'MPO gen mutasyonuyla azurofilik granül enzimi eksikliği ve hipokloröz asit (HOCl) üretiminin azalması',
        hallmark: 'En sık kalıtsal fagositer enzim defekti olmasına rağmen çoğunlukla asemptomatik seyretmesi; diyabette Candida riski ve normal NBT/DHR testi',
        vignette:
          'Ailesinde tip 1 diyabet öyküsü olan 12 yaşındaki çocukta tekrarlayan mukokütanöz ve sistemik Candida enfeksiyonları saptanıyor. Nötrofil oksidatif patlamasını ölçen DHR ve nitroblue tetrazolyum (NBT) testleri normal bulunurken, nötrofillerin peroksidaz boyamasında aktivite saptanamıyor',
        clues: ['Candida enfeksiyonları', 'DHR ve nitroblue tetrazolyum (NBT) testleri normal', 'peroksidaz boyamasında aktivite saptanamıyor'],
        management: 'Çoğu birey asemptomatik olduğundan profilaksi gerekmez; diyabet gibi ek risk varsa mantar enfeksiyonlarının uygun antifungal tedavisi',
        pearl: 'NADPH oksidaz sağlam olduğu için süperoksit ve H2O2 üretilir; bu nedenle DHR ve NBT testleri normal çıkar ve klinik seyir çok hafiftir.',
        trapFalse: 'nitroblue tetrazolyum (NBT) testi sıfırdır ve tüm hastalar bebeklikte ağır Aspergillus sepsisiyle kaybedilir',
        trapHighlight: 'nitroblue tetrazolyum (NBT) testi sıfırdır ve tüm hastalar bebeklikte ağır Aspergillus sepsisiyle kaybedilir',
      },
      {
        name: 'Herediter anjiyoödem',
        target: 'SERPING1 mutasyonuyla C1 esteraz inhibitörünün eksikliği/işlev bozukluğu ve aşırı bradikinin üretimi',
        hallmark: 'Ürtiker ve kaşıntı olmaksızın tekrarlayan yüz, ekstremite, bağırsak duvarı ödemi ve ölümcül larinks ödemi; düşük C4 düzeyi',
        vignette:
          '14 yaşındaki ergen diş çekimi sonrası hızla gelişen dil-dudak şişmesi, ses kısıklığı ve nefes darlığıyla acile geliyor; daha önce de birkaç kez kolik karın ağrısı ve kol şişliği atakları geçirdiği ancak kaşıntı veya kurdeşeni olmadığı öğreniliyor. Epinefrin, antihistaminik ve steroide yanıt vermeyen hastada C4 düzeyi çok düşük bulunuyor',
        clues: ['kaşıntı veya kurdeşeni olmadığı', 'Epinefrin, antihistaminik ve steroide yanıt vermeyen', 'C4 düzeyi çok düşük'],
        management: 'Akut atakta C1-INH konsantresi, bradikinin B2 reseptör antagonisti (ikatibant) veya kallikrein inhibitörü (ekallantid) / TDP; uzun dönemde lanadelumab veya danazol',
        pearl: 'Histamin değil bradikinin aracılı olduğu için antihistaminik, steroid ve epinefrine yanıt vermez; hem atak sırasında hem ataklar arasında C4 düşüklüğü mükemmel tarama testidir.',
        trapFalse: 'IgE aracılıdır, yaygın kaşıntılı ürtiker plaklarıyla birlikte seyreder ve epinefrin ile hızla düzelir',
        trapHighlight: 'yaygın kaşıntılı ürtiker plaklarıyla birlikte seyreder ve epinefrin ile hızla düzelir',
      },
      {
        name: 'Terminal kompleman eksikliği',
        target: 'C5, C6, C7, C8 veya C9 proteinlerinin eksikliği nedeniyle membran atak kompleksi (MAC) oluşturulamaması',
        hallmark: 'Geç çocukluk-adölesan dönemde tekrarlayan invaziv Neisseria meningitidis (meningokoksemi/menenjit) enfeksiyonları ve çok düşük CH50',
        vignette:
          '13 yaşındaki hasta son 2 yıl içinde ikinci kez Neisseria meningitidis’e bağlı pürülan menenjit geçirmesi üzerine araştırılıyor. Tam kan sayımı, serum immünglobulinleri ve DHR testi normal olan hastada total hemolitik kompleman aktivitesi (CH50) saptanamayacak kadar düşük, C3 ve C4 düzeyleri ise normal bulunuyor',
        clues: ['ikinci kez Neisseria meningitidis’e bağlı pürülan menenjit', 'CH50 saptanamayacak kadar düşük', 'C3 ve C4 düzeyleri normal'],
        management: 'Meningokok (MenACWY ve MenB), pnömokok ve Hib aşılaması ile yakın temas ve yüksek risk durumlarında antibiyotik profilaksisi',
        pearl: 'CH50 testi klasik yolak ve ortak terminal kompleman (C5-C9) bütünlüğünü tarar; C3 ve C4 normalken CH50’nin sıfır olması terminal kompleman eksikliğini gösterir.',
        trapFalse: 'tekrarlayan sinopulmoner pnömokok enfeksiyonları yapar ve CH50 düzeyi normalin üzerindedir',
        trapHighlight: 'CH50 düzeyi normalin üzerindedir',
      },
    ],
  },

  // 17. Pediatrik Kardiyopulmoner Resüsitasyon ve Şok Yönetimi
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik KPR ve Şok Yönetimi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2019',
    entities: [
      {
        name: 'Hipovolemik şok',
        target: 'Ağır gastroenterit, kanama veya yanık sonrası intravasküler volüm kaybıyla kardiyak önyükün düşmesi',
        hallmark: 'Soğuk benekli ekstremiteler, uzamış kapiller dolum (>3 sn), taşikardi, zayıf nabız ve düşük santral venöz basınç (geç evrede hipotansiyon)',
        vignette:
          '10 aylık bebek 3 gündür süren ağır sulu ishal ve kusma sonrası letarjik halde getiriliyor. Kalp hızı 176/dk, kan basıncı 72/48 mmHg, ekstremiteleri soğuk ve alacalı (kutis marmorata), kapiller dolum zamanı 5 saniye ve ön fontanel çökük bulunuyor; akciğer dinlemesi temiz ve hepatomegali saptanmıyor',
        clues: ['ağır sulu ishal ve kusma', 'ekstremiteleri soğuk ve alacalı', 'kapiller dolum zamanı 5 saniye, akciğer dinlemesi temiz'],
        management: 'Hemen IV veya intraosseöz yoldan 20 mL/kg izotonik kristaloid (%0.9 NaCl veya Ringer laktat) hızlı bolusu ve perfüzyona göre tekrarı',
        pearl: 'Çocuklarda kompansasyon mekanizmaları güçlü olduğundan kan basıncı düşmeden önce taşikardi ve uzamış kapiller dolum gelişir; hipotansiyon dekompanse geç bulgudur.',
        trapFalse: 'çocuklarda şokun en erken ve güvenilir belirtisi sistolik hipotansiyondur; sıvı bolusu kontrendikedir',
        trapHighlight: 'en erken ve güvenilir belirtisi sistolik hipotansiyondur; sıvı bolusu kontrendikedir',
      },
      {
        name: 'Septik şok',
        target: 'Bakteriyel/viral enfeksiyona bağlı sitokin fırtınası, endotel geçirgenlik artışı ve vasküler tonus/miyokard disfonksiyonu',
        hallmark: 'Ateş/hipotermi, bilinç değişikliği, erken sıcak şokta sıçrayıcı nabız-kızarık cilt veya çocukta sık soğuk şok prezentasyonu',
        vignette:
          '3 yaşındaki çocuk 40°C ateş, titreme, bilinç bulanıklığı ve bacaklarda hızla yayılan peteşiyal döküntülerle acile getiriliyor. Nabzı 182/dk, kan basıncı 64/34 mmHg, ekstremiteleri sıcak-kızarık (veya geç dönemde soğuk), kapiller dolum süresi bozuk ve laktatı 6.2 mmol/L saptanıyor',
        clues: ['bacaklarda hızla yayılan peteşiyal döküntüler', 'laktatı 6.2 mmol/L', 'kan basıncı 64/34 mmHg'],
        management: 'İlk saatte kültür alındıktan hemen sonra ampirik geniş spektrumlu IV antibiyotik, 10-20 mL/kg dengeli kristaloid bolusları (ral/hepatomegali gelişmezse) ve sıvı dirençlide epinefrin veya norepinefrin',
        pearl: 'Erişkinden farklı olarak çocuklarda soğuk (yüksek sistemik vasküler dirençli) şok daha sık görülür ve bu olgularda ilk tercih vazopresör/inotrop epinefrindir.',
        trapFalse: 'antibiyotik tedavisi kan kültür sonucu çıkana kadar mutlaka 48 saat ertelenmelidir',
        trapHighlight: 'antibiyotik tedavisi kan kültür sonucu çıkana kadar mutlaka 48 saat ertelenmelidir',
      },
      {
        name: 'Kardiyojenik şok',
        target: 'Miyokardit, aritmi veya konjenital kalp hastalığına bağlı pompa yetmezliği ve düşük kardiyak debi',
        hallmark: 'Taşikardi, soğuk ekstremitelere ek olarak hepatomegali, jugüler venöz dolgunluk, S3 gallop ve akciğerde raller',
        vignette:
          '6 aylık bebek hızlı nefes alma, solukluk ve morarma ile getiriliyor. Kalp hızı 184/dk, kapiller dolum 4 saniye, karaciğer kot altını 4 cm geçiyor, akciğer bazallerinde ince raller ve dinlemekle S3 gallop ritmi duyuluyor. İlk 20 mL/kg sıvı bolusundan sonra hastanın dispnesinin ve oksijen ihtiyacının arttığı görülüyor',
        clues: ['karaciğer kot altını 4 cm geçiyor', 'akciğer bazallerinde ince raller ve S3 gallop', 'sıvı bolusundan sonra dispnesinin arttığı'],
        management: 'Sıvı yüklemesinden kaçınma (verilecekse 5-10 mL/kg yavaş), erken inotropik destek (milrinon, dobutamin veya epinefrin) ve diüretik/solunum desteği',
        pearl: 'Hipovolemik şoktan ayırmada hepatomegali, akciğerde raller ve gallop ritmi kritik ipuçlarıdır; standart 20 mL/kg hızlı sıvı bolusları pulmoner ödemi ağırlaştırır.',
        trapFalse: 'tedavisinde yüksek hacimli 60 mL/kg hızlı kristaloid yüklemesi yapılmalıdır',
        trapHighlight: 'yüksek hacimli 60 mL/kg hızlı kristaloid yüklemesi yapılmalıdır',
      },
      {
        name: 'Anafilaktik şok',
        target: 'Sistemik IgE aracılı mast hücre degranülasyonuyla ani vazodilatasyon, kapiller kaçış ve bronkospazm',
        hallmark: 'İlaç/besin/arı sokması sonrası dakikalar içinde hipotansiyon, yaygın ürtiker, anjiyoödem ve stridor/hışıltı',
        vignette:
          'İntravenöz seftriakson uygulamasından 3 dakika sonra 7 yaşındaki çocukta ani nefes darlığı, ses kısıklığı, yaygın kaşıntılı kabarıklıklar ve kan basıncında 60/30 mmHg’ya düşüş gelişiyor. Hasta hızla bilincini kaybetmeye başlıyor',
        clues: ['seftriakson uygulamasından 3 dakika sonra', 'ses kısıklığı, yaygın kaşıntılı kabarıklıklar', 'kan basıncında 60/30 mmHg’ya düşüş'],
        management: 'Hemen uyluk dış yanına 0.01 mg/kg IM (1:1000) epinefrin, ayakların yükseltilmesi, yüksek akımlı oksijen, 20 mL/kg IV sıvı ve yanıt yoksa epinefrin infüzyonu',
        pearl: 'Distribütif şokun en hızlı öldüren formudur; geciken IM epinefrin en önemli mortalite nedenidir (yardımcı ilaçlar asla ilk sırada verilmez).',
        trapFalse: 'ilk basamak tedavide subkutan antihistaminik ve oral prednisolon verilir',
        trapHighlight: 'subkutan antihistaminik ve oral prednisolon verilir',
      },
      {
        name: 'Ventriküler fibrilasyon',
        target: 'Düzensiz, kaotik ventriküler elektriksel aktivite nedeniyle efektif kardiyak debinin tamamen durması',
        hallmark: 'Nabızsız çocukta monitörde kaotik, düzensiz dalgalardan oluşan şoklanabilir arrest ritmi',
        vignette:
          'Uzun QT sendromu olan 11 yaşındaki çocuk okul bahçesinde aniden yere yığılıyor; bilinci kapalı, solunumu yok ve karotis nabzı alınamıyor. KPR başlanıp monitör bağlandığında P, QRS veya T dalgalarının seçilemediği kaotik, düzensiz fibrilasyon dalgaları görülüyor',
        clues: ['karotis nabzı alınamıyor', 'P, QRS veya T dalgalarının seçilemediği', 'kaotik, düzensiz fibrilasyon dalgaları'],
        management: 'Kesintisiz göğüs kompresyonu (15:2 çift kurtarıcı) ile hemen 2 J/kg (sonra 4 J/kg) asenkron defibrilasyon; 2. şoktan sonra 0.01 mg/kg IV/IO epinefrin, 3. şoktan sonra amiodaron (5 mg/kg) veya lidokain',
        pearl: 'Pediatrik kardiyak arrestlerin çoğu hipoksik/asfiksi kökenli bradikardi-asistoli olsa da ani kollaps durumlarında şoklanabilir ritimler mutlaka hızla defibrile edilmelidir.',
        trapFalse: 'şoklanmayan bir ritimdir, defibrilasyon yapılmaz ve yalnızca atropin ile tedavi edilir',
        trapHighlight: 'şoklanmayan bir ritimdir, defibrilasyon yapılmaz ve yalnızca atropin ile tedavi edilir',
      },
    ],
  },

  // 18. Yenidoğan Hematolojik Sorunları
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Hematolojik Sorunları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Yenidoğanın hemorajik hastalığı',
        target: 'K vitamini eksikliğine bağlı karaciğerde faktör II, VII, IX ve X’un gama-karboksilasyonunun yapılamaması',
        hallmark: 'Doğumda K vitamini yapılmayan bebekte 2-7. günde (veya geç dönemde 2-12. haftada) GİS/göbek/intrakraniyal kanama, uzun PT ve aPTT, normal trombosit',
        vignette:
          'Evde doğan ve doğum sonrası hiçbir profilaktik enjeksiyon yapılmayan 4 günlük bebek göbek güdüğünden sızıntı şeklinde kanama ve melena ile getiriliyor. Trombosit sayısı 290.000/mm³ ve fibrinojen normal iken PT (INR 4.8) ve aPTT belirgin uzamış saptanıyor',
        clues: ['Evde doğan ve profilaktik enjeksiyon yapılmayan', 'göbek güdüğünden sızıntı şeklinde kanama ve melena', 'PT ve aPTT belirgin uzamış, trombosit normal'],
        management: 'Acil 1 mg IV/IM K1 vitamini (fitonadion) ve hayatı tehdit eden aktif kanamada taze donmuş plazma (TDP) verilmesi',
        pearl: 'Doğumda 1 mg IM K vitamini uygulanması klasik (2-7. gün) ve geç (2-12. hafta, intrakraniyal kanamalı) formları tamamen önler; erken form (<24 saat) annenin fenitoin/varfarin/izoniazid kullanımıyla ilişkilidir.',
        trapFalse: 'trombosit sayısı ileri derecede düşüktür ve PT normal iken yalnızca aPTT uzar',
        trapHighlight: 'trombosit sayısı ileri derecede düşüktür ve PT normal iken yalnızca aPTT uzar',
      },
      {
        name: 'Neonatal polisitemi',
        target: 'Kronik intrauterin hipoksi, ikizden ikize transfüzyon veya geç kordon klemplenmesi sonucu venöz hematokritin >%65’e çıkması',
        hallmark: 'Koyu kırmızı (pletore) görünüm, hiperviskoziteye bağlı hipoglisemi, takipne, letarji, priapizm ve sarılık',
        vignette:
          'Diyabetik anneden doğan 38 haftalık bebeğin cildi koyu kırmızı görünümde olup 6. saatte jitteriness, beslenememe ve takipne gelişiyor. Venöz hematokrit %71, kan şekeri 29 mg/dL bulunuyor; bilirubin hızla yükseliyor',
        clues: ['cildi koyu kırmızı görünümde', 'Venöz hematokrit %71', 'kan şekeri 29 mg/dL'],
        management: 'Asemptomatik %65-70 arası hidrasyon ve izlem; semptomatik veya venöz hematokrit >%70 ise izotonik salin ile parsiyel kan değişimi',
        pearl: 'Kapiller topuk kanı hematokriti venöze göre %5-15 daha yüksek çıkabileceğinden tanı mutlaka serbest akışlı venöz kan örneğiyle doğrulanmalıdır.',
        trapFalse: 'tanı için tek başına topuktan alınan kapiller hematokrit ölçümü yeterlidir ve tedavisinde tam kan transfüzyonu yapılır',
        trapHighlight: 'tedavisinde tam kan transfüzyonu yapılır',
      },
      {
        name: 'Neonatal alloimmün trombositopeni',
        target: 'Annenin fetal baba kökenli trombosit antijenine (en sık HPA-1a) karşı ürettiği IgG antikorlarının plasentadan geçerek fetal trombositleri yıkması',
        hallmark: 'Annenin trombosit sayısı tamamen normal iken ilk gebelikte dahi term yenidoğanda derin trombositopeni ve yüksek intrakraniyal kanama riski',
        vignette:
          'Sağlıklı ve trombosit sayısı 265.000/mm³ olan annenin ilk gebeliğinden sorunsuz doğan term bebeğinde doğumdan hemen sonra yaygın peteşi ve ekimozlar saptanıyor. Bebeğin trombosit sayısı 9.000/mm³ bulunuyor; enfeksiyon ve DİK dışlanıyor',
        clues: ['trombosit sayısı 265.000/mm³ olan annenin ilk gebeliğinden', 'yaygın peteşi ve ekimozlar', 'trombosit sayısı 9.000/mm³'],
        management: 'Acil HPA-1a/5b negatif donör trombositi (veya yıkanmış/ışınlanmış anne trombositi) ile birlikte IVIG tedavisi ve kraniyal USG ile kanama taraması',
        pearl: 'Annenin kendi ITP’sinden farklı olarak anne trombosit sayısı tamamen normaldir ve ilk gebelikte dahi %10-20 oranında intrakraniyal kanamaya yol açabilir.',
        trapFalse: 'annelerde her zaman ağır trombositopeni bulunur ve ilk gebelikte asla görülmez',
        trapHighlight: 'annelerde her zaman ağır trombositopeni bulunur ve ilk gebelikte asla görülmez',
      },
      {
        name: 'Anne kanı yutulması',
        target: 'Doğum sırasında veya çatlak meme başından emzirme esnasında yutulan erişkin (HbA) kanının bebeğin kusmuğu veya dışkısında görülmesi',
        hallmark: 'Genel durumu tamamen iyi bebekte kanlı kusma/dışkı ve Apt (alkali denatürasyon) testinde %1 NaOH ile rengin kahverengiye dönmesi',
        vignette:
          'Yaşamın 2. gününde vital bulguları tamamen stabil, iyi emen bir yenidoğanın bezinde parlak kırmızı kan görülüyor; annenin meme başında derin fissür ve kanama olduğu fark ediliyor. Dışkı süspansiyonuna %1 sodyum hidroksit (Apt testi) eklendiğinde pembe rengin kahverengi-sarıya döndüğü gözleniyor',
        clues: ['vital bulguları tamamen stabil', 'meme başında derin fissür ve kanama', '%1 sodyum hidroksit eklendiğinde pembe rengin kahverengi-sarıya döndüğü'],
        management: 'Gereksiz invaziv girişim veya transfüzyon yapılmadan annenin meme başı bakımının sağlanması ve izlem',
        pearl: 'Fetal hemoglobin (HbF) alkali ortama dirençli olduğu için bebeğin kendi GİS kanamasında renk pembe kalırken, erişkin hemoglobini (HbA) denatüre olarak kahverengiye döner.',
        trapFalse: 'Apt testinde %1 NaOH eklendiğinde karışım parlak pembe rengini korursa kan anneye aittir',
        trapHighlight: 'parlak pembe rengini korursa kan anneye aittir',
      },
      {
        name: 'Prematüre anemisi',
        target: 'Erken doğanlarda eritropoietin yanıtının yetersizliği, kısa eritrosit ömrü, hızlı büyüme ve sık iatrojenik kan alımı',
        hallmark: 'Doğumdan 4-10 hafta sonra normokrom normositer anemi, çok düşük retikülosit (<%1-2) ve demir tedavisine hemen yanıt vermemesi',
        vignette:
          '29 gebelik haftasında 1100 gram doğan bebek yaşamın 6. haftasında solukluk, beslenirken yorulma ve apne sıklığında artış gösteriyor. Hb 7.2 g/dL, MCV normal, retikülosit %0.8 (uygunsuz düşük) ve Direkt Coombs negatif bulunuyor; kemik iliğinde eritroid aktivite azalmış görülüyor',
        clues: ['29 gebelik haftasında', 'yaşamın 6. haftasında', 'Hb 7.2 g/dL, retikülosit %0.8'],
        management: 'Gereksiz kan alımlarının azaltılması, 2. haftadan itibaren profilaktik oral demir/folat başlanması ve ağır semptomatik/apneli bebeklerde eritrosit transfüzyonu',
        pearl: 'Term bebekteki fizyolojik anemiden daha erken (4-8. hafta) ve daha derin (Hb 7-8 g/dL) olur; hemoliz kaynaklı retikülositoz olmaması ayırt edicidir.',
        trapFalse: 'belirgin retikülositoz (>%10) ile seyreder ve tek başına yüksek doz demir ile 48 saatte düzelir',
        trapHighlight: 'belirgin retikülositoz (>%10) ile seyreder',
      },
    ],
  },

  // 19. Çocuk İstismarı ve Adli Pediatri Bulguları
  {
    branchId: 'pediatri',
    subTopic: 'Çocuk İstismarı ve Adli Pediatri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Sarsılmış bebek sendromu',
        target: 'İnfantın şiddetle ileri-geri sarsılması sonucu köprü venlerin yırtılması ve retinal/beyin parankim akselerasyon-deselerasyon hasarı',
        hallmark: 'Dış kafa travması izi olmadan bilateral subdural hematom, yaygın retinal hemorajiler ve posterior kot kırıkları triyadı',
        vignette:
          '4 aylık bebek "beşikten düştü" öyküsüyle nöbet ve koma halinde acile getiriliyor. Kafatasında ekimoz veya skalp şişliği olmamasına rağmen göz dibinde tüm kadranlarda çok katlı retinal kanamalar, beyin BT’de farklı yaşlarda bilateral subdural hematom ve akciğer grafisinde iyileşmekte olan arka kot kırıkları saptanıyor',
        clues: ['Kafatasında ekimoz olmamasına rağmen', 'tüm kadranlarda çok katlı retinal kanamalar', 'bilateral subdural hematom ve arka kot kırıkları'],
        management: 'Yoğun bakım nöroprotektif desteği, nöbet kontrolü, multidisipliner adli bildirim ve iskelet taraması (skeletal survey)',
        pearl: 'Abusif kafa travmasının en tipik formudur; bebek başının gövdeye oranla büyük ve boyun kaslarının zayıf olması sarsılma hasarını ağırlaştırır.',
        trapFalse: 'en spesifik kemik bulgusu klavikula orta hat kırığıdır ve göz dibi muayenesi her zaman normaldir',
        trapHighlight: 'göz dibi muayenesi her zaman normaldir',
      },
      {
        name: 'Fiziksel çocuk istismarı',
        target: 'Kaza dışı künt travma, sarsma veya termal temas sonucu çocukta kasıtlı doku ve kemik hasarı oluşturulması',
        hallmark: 'Farklı iyileşme evrelerinde metafizyel köşe/kova sapı kırıkları, sırt-kalça-kulak gibi korunaklı bölgelerde ekimoz ve eldiven-çorap tarzı keskin sınırlı yanıklar',
        vignette:
          '13 aylık henüz yürümeyen bebek sağ uyluk ağrısıyla getiriliyor. Öyküde travma tariflenmemesine rağmen grafide distal femurda kova sapı (metafizyel köşe) kırığı ile farklı evrede kalluslu sol radius kırığı görülüyor. Muayenede her iki kulak kepçesinde, sırtta ve kalçalarda değişik renklerde morluklar izleniyor',
        clues: ['13 aylık henüz yürümeyen', 'kova sapı (metafizyel köşe) kırığı', 'kulak kepçesinde, sırtta ve kalçalarda değişik renklerde morluklar'],
        management: 'Çocuğun güvenliğinin sağlanması, 2 yaş altında tam iskelet taraması, pıhtılaşma testleriyle kanama diyatezinin dışlanması ve yasal adli/sosyal bildirim',
        pearl: 'TEN-4 kuralı: 4 yaş altında Torso (gövde), Ear (kulak) veya Neck (boyun) bölgesindeki morluklar ya da 4 ay altı (henüz dönmeyen) bebekteki herhangi bir morluk aksini ispatlayana kadar kaza dışıdır!',
        trapFalse: 'diz ve ön tibia üzerindeki morluklar en yüksek özgüllüğe sahip patognomonik istismar bulgusudur',
        trapHighlight: 'diz ve ön tibia üzerindeki morluklar en yüksek özgüllüğe sahip patognomonik istismar bulgusudur',
      },
      {
        name: 'Cinsel istismar',
        target: 'Çocuğun yetişkin veya daha büyük bir kişi tarafından cinsel tatmin amacıyla kullanılması',
        hallmark: 'Genital/anal bölgede akut laserasyon veya iyileşmiş posterior himen transeksiyonu ve prepubertal çocukta cinsel yolla bulaşan enfeksiyon saptanması',
        vignette:
          '5 yaşındaki kız çocuk ağrılı idrar yapma ve iç çamaşırında kanlı-pürülan akıntı ile getiriliyor. Vajinal akıntı kültüründe Neisseria gonorrhoeae üremesi ve muayenede himen saat 6 hizasında tabana uzanan derin yarık saptanıyor',
        clues: ['iç çamaşırında kanlı-pürülan akıntı', 'Neisseria gonorrhoeae üremesi', 'himen saat 6 hizasında tabana uzanan derin yarık'],
        management: 'Çocuğu travmatize etmeden tek görüşmede adli belgeleme, cinsel yolla bulaşan hastalık taraması/tedavisi, zorunlu adli bildirim ve psikolojik koruma',
        pearl: 'Prepubertal bir çocukta perinatal geçiş dışlandıktan sonra gonore, sifiliz veya klamidya saptanması cinsel temas için tanısal kabul edilir; muayenenin normal olması olayı dışlamaz.',
        trapFalse: 'genital muayene bulguları normal olan çocuklarda tanı kesin olarak dışlanır',
        trapHighlight: 'muayene bulguları normal olan çocuklarda tanı kesin olarak dışlanır',
      },
      {
        name: 'Tıbbi çocuk ihmali',
        target: 'Bakım verenin çocuğun temel beslenme, tıbbi bakım, güvenlik veya eğitim gereksinimlerini kronik olarak karşılamaması',
        hallmark: 'Organik neden olmadan büyüme geriliği (inorganik failure to thrive), tedavi verilmeyen kronik hastalıklar ve hastaneye yatışta hızla kilo alımı',
        vignette:
          '11 aylık bebek ileri derecede zayıf (<3. persentil), kirli kıyafetli, yaygın pişik ülserleri ve ileri diş çürükleriyle getiriliyor. Laboratuvar incelemelerinde malabsorpsiyon veya sistemik hastalık saptanmıyor; hastaneye yatırılıp düzenli beslenme ve ilgi sağlandığında bebek 10 günde 480 gram kilo alıyor',
        clues: ['yaygın pişik ülserleri', 'malabsorpsiyon veya sistemik hastalık saptanmıyor', 'hastaneye yatırılıp düzenli beslenme sağlandığında 10 günde 480 gram kilo alıyor'],
        management: 'Beslenme rehabilitasyonu, sosyal hizmet ve çocuk koruma birimi değerlendirmesi ile aile destek/denetim planı oluşturulması',
        pearl: 'Hastanede yatarken ek tetkik veya özel mama gerektirmeden hızlı kilo alımı (catch-up growth) görülmesi organik dışı ihmal kaynaklı büyüme geriliğini kanıtlar.',
        trapFalse: 'hastaneye yatırılıp düzenli beslendiğinde dahi kilo alımı kesinlikle gerçekleşmez',
        trapHighlight: 'kilo alımı kesinlikle gerçekleşmez',
      },
      {
        name: 'Bakım veren tarafından üretilmiş hastalık',
        target: 'Bakım verenin (genellikle annenin) tıbbi ilgi veya kazanç amacıyla çocukta kasıtlı olarak semptom üretmesi veya uydurması (Munchausen by proxy)',
        hallmark: 'Yalnızca bakım veren yanındayken gelişen açıklanamayan ataklar, laboratuvarla uyumsuz bulgular (ör. ekzojen insülin/laksatif) ve ayrılınca düzelme',
        vignette:
          '2 yaşındaki çocuk tekrarlayan açıklanamayan hipoglisemi, hematüri ve ateş atakları nedeniyle 6 kez farklı hastanelere yatırılmış. Acilde derin hipoglisemi saptandığında insülin düzeyi çok yüksek iken C-peptid sıfıra yakın ölçülüyor; annenin refakati geçici olarak kısıtlandığında tüm atakların tamamen durduğu görülüyor',
        clues: ['6 kez farklı hastanelere yatırılmış', 'insülin düzeyi çok yüksek iken C-peptid sıfıra yakın', 'annenin refakati kısıtlandığında tüm atakların durduğu'],
        management: 'Çocuğun derhal güvenli korumaya alınması, toksikoloji/biyokimya örneklerinin adli zincirle saklanması ve çocuk koruma/adli mercilere bildirim',
        pearl: 'Yüksek insüline karşın C-peptid düzeyinin baskılı olması çocuğa dışarıdan gizlice insülin enjekte edildiğinin kesin kanıtıdır; aileye doğrudan yüzleşme çocuk güvenliği sağlanmadan yapılmaz.',
        trapFalse: 'semptomlar yalnızca bakım veren çocuktan ayrıldığında ortaya çıkar ve C-peptid düzeyi çok yüksektir',
        trapHighlight: 'yalnızca bakım veren çocuktan ayrıldığında ortaya çıkar ve C-peptid düzeyi çok yüksektir',
      },
    ],
  },

  // 20. Ergen Sağlığı ve Pediatrik Obezite/Diyabet
  {
    branchId: 'pediatri',
    subTopic: 'Ergen Sağlığı, Obezite ve Diyabet',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Tip 1 diabetes mellitus',
        target: 'Genetik yatkın (HLA-DR3/DR4) bireyde pankreas beta hücrelerinin otoimmün T-hücre yıkımı sonucu mutlak insülin eksikliği',
        hallmark: 'Poliüri, polidipsi, kilo kaybı, diyabetik ketoasidoz (Kussmaul solunumu, aseton kokusu), düşük C-peptid ve anti-GAD/IA-2 antikor pozitifliği',
        vignette:
          '8 yaşındaki zayıf erkek çocuk son 3 haftadır çok su içme, gece yatak ıslatma ve 4 kg zayıflama sonrası hızlı derin nefes alma ve karın ağrısıyla acile getiriliyor. Kan şekeri 460 mg/dL, pH 7.11, bikarbonat 7 mEq/L, idrarda 4+ keton ve glukoz; C-peptid çok düşük ve anti-GAD antikoru pozitif saptanıyor',
        clues: ['gece yatak ıslatma ve 4 kg zayıflama', 'pH 7.11, bikarbonat 7 mEq/L, idrarda 4+ keton', 'C-peptid çok düşük ve anti-GAD antikoru pozitif'],
        management: 'Ketoasidozda yavaş IV sıvı (ilk saatte 10-20 mL/kg) ve 0.05-0.1 U/kg/saat düzenli insülin infüzyonu (serebral ödemden kaçınarak); kronik dönemde bazal-bolus insülin',
        pearl: 'Diyabetik ketoasidoz tedavisinde çocuklarda en ölümcül komplikasyon beyin ödemidir; bu nedenle aşırı hızlı sıvı yüklemesinden ve sodyum bikarbonattan kaçınılır.',
        trapFalse: 'en sık insülin direncine bağlı gelişir, C-peptid yüksektir ve ilk tedavide metformin kullanılır',
        trapHighlight: 'insülin direncine bağlı gelişir, C-peptid yüksektir ve ilk tedavide metformin kullanılır',
      },
      {
        name: 'Tip 2 diabetes mellitus',
        target: 'Obeziteye ikincil periferik insülin direnci ve ilerleyici beta hücre disfonksiyonu',
        hallmark: 'Adölesan dönemde obezite, ensede-koltuk altında akantozis nigrikans, aile öyküsü, yüksek C-peptid ve negatif adacık otoantikorları',
        vignette:
          '14 yaşındaki VKİ >99. persentil kız ergen halsizlik ve sık idrara çıkma ile başvuruyor. Muayenede ense kökünde ve aksillada koyu kadifemsi deri kalınlaşması (akantozis nigrikans) görülüyor. Açlık glukozu 164 mg/dL, HbA1c %7.9, C-peptid yüksek ve tüm diyabet otoantikorları negatif geliyor',
        clues: ['VKİ >99. persentil', 'koyu kadifemsi deri kalınlaşması', 'C-peptid yüksek ve tüm diyabet otoantikorları negatif'],
        management: 'Yaşam tarzı değişikliği (diyet-egzersiz) yanında ilk basamak farmakolojik tedavi olarak metformin (HbA1c >%8.5 veya ketozis varsa geçici insülin eklenir)',
        pearl: 'Adölesanlarda hızla artmaktadır; beta hücre rezervi erişkinlere göre daha çabuk tükenebildiğinden düzenli HbA1c takibi ve komplikasyon taraması tanı anından itibaren başlanır.',
        trapFalse: 'adacık otoantikorları her zaman pozitiftir ve C-peptid düzeyi ölçülemez kadar düşüktür',
        trapHighlight: 'adacık otoantikorları her zaman pozitiftir ve C-peptid düzeyi ölçülemez kadar düşüktür',
      },
      {
        name: 'MODY Tip 2',
        target: 'Glukokinaz (GCK) geninde heterozigot inaktive edici mutasyon sonucu beta hücresinin glukoz eşiğinin hafifçe yukarı kayması',
        hallmark: 'Otozomal dominant aile öyküsü, obezite olmadan hafif stabil açlık hiperglisemisi (100-140 mg/dL), normal HbA1c/hafif yüksek ve mikrovasküler komplikasyon yokluğu',
        vignette:
          '11 yaşındaki normal kilolu asemptomatik çocukta okul taramasında açlık kan şekeri 118 mg/dL bulunuyor. Annesi ve dayısının da yıllardır hafif yüksek açlık şekeri olup hiç komplikasyon yaşamadığı öğreniliyor. HbA1c %6.1, otoantikorlar negatif ve OGTT 2. saat artışı <54 mg/dL saptanıyor',
        clues: ['normal kilolu asemptomatik çocuk', 'Annesi ve dayısının da yıllardır hafif yüksek açlık şekeri', 'HbA1c %6.1, otoantikorlar negatif'],
        management: 'Mikrovasküler komplikasyon gelişmediği için gebelik dışında hiçbir ilaç veya insülin tedavisi gerektirmez (yalnızca izlem)',
        pearl: 'GCK-MODY en sık rastlantısal pediatrik hiperglisemi nedenlerindendir; HNF1A (MODY 3) sülfonilürelere aşırı duyarlı iken bu tipte tedavi gerekmez.',
        trapFalse: 'erken yaşta ağır proliferatif retinopati yapar ve mutlaka yoğun bazal-bolus insülin gerektirir',
        trapHighlight: 'ağır proliferatif retinopati yapar ve mutlaka yoğun bazal-bolus insülin gerektirir',
      },
      {
        name: 'Metabolik sendrom',
        target: 'Viseral adipozite ve insülin direnci zemininde kümelenmiş kardiyometabolik risk faktörleri',
        hallmark: 'Abdominal/santral obezite ile birlikte trigliserid yüksekliği, HDL düşüklüğü, hipertansiyon ve bozulmuş açlık glukozundan en az ikisinin bulunması',
        vignette:
          '13 yaşındaki erkek ergenin bel çevresi >90. persentil ve kan basıncı 136/86 mmHg bulunuyor. Laboratuvarda açlık kan şekeri 108 mg/dL, trigliserid 188 mg/dL, HDL 33 mg/dL ve ALT 68 U/L (karaciğer yağlanmasıyla uyumlu) saptanıyor',
        clues: ['bel çevresi >90. persentil', 'trigliserid 188 mg/dL, HDL 33 mg/dL', 'açlık kan şekeri 108 mg/dL'],
        management: 'Aile temelli beslenme düzenlemesi, günlük orta-yüksek şiddetli fiziksel aktivite, ekran süresinin azaltılması ve eşlik eden hipertansiyon/dislipideminin yönetimi',
        pearl: 'Uluslararası Diyabet Federasyonu (IDF) kriterlerine göre 10 yaş altında kesin tanı konulmaz, yalnızca obezitenin azaltılması hedeflenir; 10-16 yaş arası santral obezite + >=2 risk faktörü tanı koydurur.',
        trapFalse: 'tanısı için yüksek HDL ve düşük trigliserid düzeyleri şarttır',
        trapHighlight: 'yüksek HDL ve düşük trigliserid düzeyleri şarttır',
      },
      {
        name: 'Anoreksiya nervoza',
        target: 'Kilo alma korkusu ve beden algısı bozukluğuna bağlı ağır kalori kısıtlamasının hipotalamik-hipofizer baskılanmaya yol açması',
        hallmark: 'Yaşa göre beklenenin altında ağır kilo kaybı, sekonder amenore, sinüs bradikardisi, hipotermi, lanugo tüylenmesi ve düşük FSH/LH/T3',
        vignette:
          '15 yaşındaki kız ergen çok zayıf olmasına rağmen "şişman" olduğunu söyleyerek yemek yemeyi reddetmesi ve 5 aydır adet görmemesi nedeniyle getiriliyor. VKİ 14.2 kg/m², nabız 44/dk, vücut ısısı 35.7°C, kollarında ince ayva tüyleri (lanugo) görülüyor; FSH, LH ve serbest T3 düzeyleri düşük bulunuyor',
        clues: ['çok zayıf olmasına rağmen "şişman" olduğunu söyleyerek', '5 aydır adet görmemesi', 'nabız 44/dk, kollarında ince ayva tüyleri (lanugo)'],
        management: 'Medikal stabilizasyon (bradikardi/hipotermi varsa yatış), refeeding sendromuna (hipofosfatemi!) dikkat ederek kademeli beslenme ve aile temelli psikoterapi',
        pearl: 'Ağır malnütrisyonda hızlı yeniden beslemeye başlanırsa insülin artışı hücre içine fosfat, potasyum ve magnezyum çekerek ölümcül refeeding sendromuna yol açabilir.',
        trapFalse: 'yeniden besleme sırasında belirgin hiperfosfatemi ve hipertansiyon gelişimi beklenir',
        trapHighlight: 'hiperfosfatemi ve hipertansiyon gelişimi beklenir',
      },
    ],
  },
];
