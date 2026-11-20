import { StructuredClusterSeed } from './tusTypes';

export const STRUCTURED_INTERNAL_1_CLUSTERS: StructuredClusterSeed[] = [
  // 1. Kalp kapak hastalıkları oskültasyon ve bulguları
  {
    branchId: 'dahiliye',
    subTopic: 'Kalp Kapak Hastalıkları Oskültasyon ve Bulguları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Aort darlığı',
        target: 'Sol ventrikül çıkım yolu obstrüksiyonuna bağlı basınç yüklenmesi ve konsantrik hipertrofi',
        hallmark: 'Sağ 2. interkostal aralıkta karotislere yayılan kreşendo-dekreşendo sistolik üfürüm, zayıf A2 ve S4',
        vignette:
          'Yetmiş iki yaşında erkek hasta merdiven çıkarken bayılma, göğüs ağrısı ve nefes darlığı şikayetleriyle başvuruyor. Fizik muayenede sağ ikinci interkostal aralıkta en şiddetli duyulan, boyna yayılan kaba sistolik ejeksiyon üfürümü, paradoksal S2 çiftleşmesi ve S4 saptanıyor. Karotis nabzı zayıf ve geç yükseliyor.',
        clues: ['boyna yayılan kaba sistolik ejeksiyon üfürümü', 'paradoksal S2 çiftleşmesi', 'bayılma, göğüs ağrısı ve nefes darlığı'],
        management: 'Transtorasik ekokardiyografi ile gradiyent ölçümü ve semptomatik ciddi olgularda kapak replasmanı',
        pearl: 'Semptomatik ciddi sol çıkış obstrüksiyonunda ortalama yaşam süresi angina sonrası 5 yıl, senkop sonrası 3 yıl, kalp yetmezliği sonrası 2 yıldır; acil kapak değişimi gerekir.',
        trapFalse: 'ayakta durma ve Valsalva manevrası ile üfürüm şiddeti belirgin biçimde artar',
        trapHighlight: 'ayakta durma ve Valsalva manevrası ile üfürüm şiddeti belirgin biçimde artar',
      },
      {
        name: 'Aort yetmezliği',
        target: 'Diyastolde sol ventriküle retrograd kan kaçağı ve eksantrik hacim yüklenmesi',
        hallmark: 'Sol 3. interkostal aralıkta öne eğilmekle artan erken diyastolik dekreşendo üfürüm ve geniş nabız basıncı',
        vignette:
          'Ellisekiz yaşında erkek hasta efor dispnesi ve gece çarpıntıları ile başvuruyor. Kan basıncı 160/50 mmHg ölçülüyor. Oturur pozisyonda öne eğilip ekspirasyon yaptırıldığında sol sternal kenar üçüncü interkostal aralıkta yüksek frekanslı erken diyastolik dekreşendo üfürüm, apekste ise Austin-Flint üfürümü duyuluyor.',
        clues: ['160/50 mmHg', 'öne eğilip ekspirasyon yaptırıldığında', 'erken diyastolik dekreşendo üfürüm'],
        management: 'Ekokardiyografi ile kaçak jetinin değerlendirilmesi ve EF düşmeden cerrahi replasman',
        pearl: 'Ciddi kronik kaçaklarda artmış atım hacmine bağlı apekste fonksiyonel diyastolik rülam (Austin-Flint üfürümü) duyulur ve izometrik el sıkma egzersizi üfürümü artırır.',
        trapFalse: 'izometrik handgrip manevrası ile üfürümün şiddeti azalır ve nabız basıncı daralır',
        trapHighlight: 'üfürümün şiddeti azalır ve nabız basıncı daralır',
      },
      {
        name: 'Mitral darlığı',
        target: 'Romatizmal kommissüral füzyona bağlı sol atriyal boşalım engeli ve pulmoner venöz hipertansiyon',
        hallmark: 'Apekste sol yan dekübit pozisyonda duyulan sert S1, açılma sesi ve düşük frekanslı diyastolik rülam',
        vignette:
          'Otuz altı yaşında kadın hasta gebeliğin 24. haftasında ilerleyici nefes darlığı ve pembe köpüklü balgam şikayetiyle getiriliyor. Oskültasyonda apekste sert S1, S2 sonrası keskin bir açılma sesi ve presistolik şiddetlenme gösteren diyastolik rülam duyuluyor. Akciğer grafisinde sol ana bronşta yükselme izleniyor.',
        clues: ['sert S1, S2 sonrası keskin bir açılma sesi', 'diyastolik rülam', 'sol ana bronşta yükselme'],
        management: 'Ekokardiyografi ile Wilkins skoru tayini ve uygun kapakta perkütan balon valvüloplasti',
        pearl: 'Atriyal fibrilasyon geliştiğinde atriyal kasılma kaybolduğu için diyastolik üfürümün presistolik şiddetlenmesi kaybolur ve açılma sesi S2’ye ne kadar yakınsa obstrüksiyon o kadar ağırdır.',
        trapFalse: 'sol ventrikülde belirgin eksantrik hipertrofi ve genişleme ilk beklenen bulgudur',
        trapHighlight: 'sol ventrikülde belirgin eksantrik hipertrofi ve genişleme',
      },
      {
        name: 'Mitral yetmezliği',
        target: 'Sistolde sol atriyuma retrograd akım ve sol atriyal-ventriküler hacim yüklenmesi',
        hallmark: 'Apekste sol aksillaya yayılan üfleyici holosistolik üfürüm, yumuşak S1 ve S3 gallop',
        vignette:
          'Altmış dört yaşında erkek hasta son aylarda artan yorgunluk ve ortopne şikayetiyle değerlendiriliyor. Apikal vuru 6. interkostal aralıkta orta klaviküler hattın dışına kaymış bulunuyor. Oskültasyonda S1 yumuşak, apekste koltuk altına yayılan 4/6 şiddetinde holosistolik üfürüm ve S3 duyuluyor.',
        clues: ['orta klaviküler hattın dışına kaymış', 'S1 yumuşak', 'koltuk altına yayılan 4/6 şiddetinde holosistolik üfürüm'],
        management: 'Transözofageal ekokardiyografi ile anatomi tayini ve uygun olgularda kapak tamiri',
        pearl: 'Akut papiller kas rüptürüne bağlı gelişen ani kaçakta sol atriyum henüz genişlemediği için akciğer ödemi ve kardiyojenik şok hızlı gelişir, üfürüm kısa ve yumuşak olabilir.',
        trapFalse: 'S1 sesi tipik olarak şiddetlenir ve üfürüm boyuna doğru yayılır',
        trapHighlight: 'S1 sesi tipik olarak şiddetlenir ve üfürüm boyuna doğru yayılır',
      },
      {
        name: 'Mitral valv prolapsusu',
        target: 'Kapak yaprakçıklarının miksomatöz dejenerasyonu sonucu sistolde sol atriyuma sarkması',
        hallmark: 'Ayakta ve Valsalva ile S1’e yaklaşan midsistolik klik ve geç sistolik üfürüm',
        vignette:
          'Yirmi sekiz yaşında zayıf yapılı kadın hasta çarpıntı ve atipik göğüs batması ile polikliniğe başvuruyor. Dinlemede apeks üzerinde S1’den sonra keskin bir klik ve ardından gelen geç sistolik üfürüm saptanıyor. Hasta çömeldiğinde klik S2’ye doğru kayıyor ve üfürüm kısalıyor.',
        clues: ['S1’den sonra keskin bir klik', 'geç sistolik üfürüm', 'çömeldiğinde klik S2’ye doğru kayıyor'],
        management: 'Transtorasik ekokardiyografi ile tanı doğrulaması ve semptomatik taşiaritmide beta-bloker',
        pearl: 'Venöz dönüşü azaltan ayakta durma ve Valsalva manevrası klik ve üfürümü erken döneme (S1’e) yaklaştırıp süresini uzatır; çömelme ve handgrip ise geciktirip kısaltır.',
        trapFalse: 'çömelme manevrası ile klik S1’e yaklaşır ve üfürümün süresi uzar',
        trapHighlight: 'çömelme manevrası ile klik S1’e yaklaşır ve üfürümün süresi uzar',
      },
    ],
  },

  // 2. Kardiyomiyopatiler ve perikardiyal hastalıklar
  {
    branchId: 'dahiliye',
    subTopic: 'Kardiyomiyopatiler ve Perikardiyal Hastalıklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Hipertrofik kardiyomiyopati',
        target: 'Sarkomer protein gen mutasyonlarına bağlı asimetrik septal hipertrofi ve dinamik çıkım yolu obstrüksiyonu',
        hallmark: 'Sol sternal kenarda Valsalva ile şiddetlenen sistolik üfürüm, bisferiens nabız ve miyofibril düzensizliği',
        vignette:
          'On dokuz yaşında basketbolcu erkek antrenman sırasında geçirdiği senkop sonrası acile getiriliyor. Ailesinde ani genç yaş ölümü öyküsü mevcut. Muayenede sol alt sternal kenarda çömelmekle azalan, ayakta ve Valsalva sırasında şiddetlenen 3/6 sistolik üfürüm ile çift tepeli karotis nabzı alınıyor.',
        clues: ['ani genç yaş ölümü öyküsü', 'Valsalva sırasında şiddetlenen 3/6 sistolik üfürüm', 'çift tepeli karotis nabzı'],
        management: 'Beta-bloker veya verapamil tedavisi ve yüksek riskli hastalarda ICD implantasyonu',
        pearl: 'Preload’ı azaltan manevralar ve pozitif inotrop ilaçlar (digoksin) dinamik subaortik obstrüksiyonu ağırlaştırır; ilk tercih tedavi beta-blokerdir.',
        trapFalse: 'digoksin ve nitratlar semptomları hızla düzelten ilk basamak ajanlardır',
        trapHighlight: 'digoksin ve nitratlar semptomları hızla düzelten ilk basamak ajanlardır',
      },
      {
        name: 'Dilate kardiyomiyopati',
        target: 'Dört boşlukta progresif dilatasyon ve sol ventrikül sistolik pompa fonksiyonunda bozulma',
        hallmark: 'Düşük ejeksiyon fraksiyonu, S3 gallop, akciğer grafisinde kardiyomegali ve fonksiyonel atriyoventriküler kaçak',
        vignette:
          'Kırk beş yaşında uzun süredir ağır alkol kullanım öyküsü olan erkek hasta nefes darlığı, ortopne ve bacaklarda şişlik ile başvuruyor. Muayenede taşikardi, juguler dolgunluk, apikal vurunun sola yer değiştirmesi ve S3 duyuluyor. Ekokardiyografide tüm kalp boşlukları geniş ve EF %24 saptanıyor.',
        clues: ['ağır alkol kullanım öyküsü', 'S3 duyuluyor', 'tüm kalp boşlukları geniş ve EF %24'],
        management: 'ARNI/ACE inhibitörü, beta-bloker, MRA ve SGLT2 inhibitörü ile dörtlü kılavuz temelli tedavi',
        pearl: 'Alkol, doksorubisin, trastuzumab, peripartum dönem ve Coxsackie B miyokarditi en önemli sekonder nedenleridir; alkol kesildiğinde tablo gerileyebilir.',
        trapFalse: 'ejeksiyon fraksiyonu korunmuştur ve temel bozukluk diyastolik gevşeme kısıtlılığıdır',
        trapHighlight: 'ejeksiyon fraksiyonu korunmuştur',
      },
      {
        name: 'Restriktif kardiyomiyopati',
        target: 'Ventrikül duvarlarının infiltrasyon veya fibrozise bağlı sertleşmesi ve diyastolik doluş kısıtlılığı',
        hallmark: 'Normal sistolik fonksiyona karşın biatriyal dilatasyon, EKG’de düşük voltaj ve Kussmaul bulgusu',
        vignette:
          'Altmış bir yaşında makroglossi, periorbital ekimoz ve nefrotik proteinürisi olan erkek hasta efor dispnesi ve periferik ödemle başvuruyor. EKG’de ekstremite derivasyonlarında düşük voltaj, ekokardiyografide kalınlaşmış parlak miyokard, korunmuş EF (%60) ve belirgin genişlemiş her iki atriyum görülüyor.',
        clues: ['makroglossi, periorbital ekimoz', 'ekstremite derivasyonlarında düşük voltaj', 'kalınlaşmış parlak miyokard, korunmuş EF'],
        management: 'Endomiyokardiyal biyopsi veya kemik sintigrafisi ile altta yatan amiloidoz/infiltrasyonun tedavisi',
        pearl: 'Amiloidozda ekokardiyografide kalın ventrikül duvarına rağmen EKG’de düşük voltaj görülmesi son derece karakteristik bir uyumsuzluktur.',
        trapFalse: 'ekstremite derivasyonlarında belirgin yüksek voltajlı sol ventrikül hipertrofisi bulguları izlenir',
        trapHighlight: 'belirgin yüksek voltajlı sol ventrikül hipertrofisi',
      },
      {
        name: 'Kardiyak tamponad',
        target: 'Perikardiyal boşlukta hızlı sıvı birikimine bağlı ventriküler doluşun akut engellenmesi',
        hallmark: 'Beck triyadı (hipotansiyon, juguler venöz distansiyon, derinden gelen kalp sesleri), elektriksel alternans ve pulsus paradoksus',
        vignette:
          'Elli iki yaşında akciğer adenokarsinomu öykülü kadın hasta ani gelişen şiddetli dispne ve baş dönmesiyle acile getiriliyor. Kan basıncı 78/50 mmHg, nabız 128/dk, boyun venleri belirgin dolgun ve kalp sesleri çok derinden geliyor. İnspirasyonda sistolik basınç 18 mmHg düşüyor, EKG’de QRS amplitüdleri atımdan atıma değişiyor.',
        clues: ['boyun venleri belirgin dolgun ve kalp sesleri çok derinden', 'İnspirasyonda sistolik basınç 18 mmHg düşüyor', 'QRS amplitüdleri atımdan atıma değişiyor'],
        management: 'Acil ekokardiyografi rehberliğinde perikardiyosentez ve sıvı desteği',
        pearl: 'Basınç grafiğinde y inişi silinmiştir (sadece x inişi belirgindir) ve Kussmaul bulgusu beklenmez; kesin ve hayat kurtarıcı tedavi acil drenajdır.',
        trapFalse: 'basınç eğrisinde derin ve keskin y inişi ile Kussmaul bulgusu tipik olarak izlenir',
        trapHighlight: 'derin ve keskin y inişi ile Kussmaul bulgusu',
      },
      {
        name: 'Konstriktif perikardit',
        target: 'Kronik fibrotik ve kalsifik perikardiyal kabuk nedeniyle ventriküler genişlemenin diyastol ortasında durması',
        hallmark: 'Kalsifik perikard, erken diyastolik perikardiyal vuru (knock), Kussmaul bulgusu ve basınç eğrisinde karekök işareti',
        vignette:
          'Kırk dokuz yaşında yıllar önce tüberküloz geçirmiş erkek hasta dirençli asit, hepatomegali ve bacak ödemi ile başvuruyor. Boyun venöz basıncı inspirasyonda daha da artıyor. Oskültasyonda S2’den hemen sonra keskin bir erken diyastolik ek ses duyuluyor. Lateral akciğer grafisinde kalbi çevreleyen kalsifikasyon görülüyor.',
        clues: ['yıllar önce tüberküloz geçirmiş', 'inspirasyonda daha da artıyor', 'kalbi çevreleyen kalsifikasyon'],
        management: 'BT/MR ile perikard kalınlaşmasının gösterilmesi ve kesin tedavi olarak cerrahi perikardiyektomi',
        pearl: 'Basınç trasesinde dip-plato (karekök) paterni ve hızlı y inişi görülür; sol ve sağ ventrikül diyastol sonu basınçları eşitlenmiştir.',
        trapFalse: 'perikardiyosentez ile sıvının boşaltılması semptomları kalıcı olarak ortadan kaldırır',
        trapHighlight: 'perikardiyosentez ile sıvının boşaltılması',
      },
    ],
  },

  // 3. Akut miyokard enfarktüsü EKG derivasyon ve arter korelasyonu
  {
    branchId: 'dahiliye',
    subTopic: 'Akut Miyokard Enfarktüsü EKG ve Arter Korelasyonu',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Anteroseptal miyokard enfarktüsü',
        target: 'Sol ön inen koroner arter (LAD) proksimal tıkanıklığı',
        hallmark: 'EKG’de V1-V4 derivasyonlarında ST segment yükselmesi ve resiprokal değişiklik olmaksızın Q dalgası gelişimi',
        vignette:
          'Altmış yaşında diyabetik erkek hasta bir saattir süren baskı tarzında retrosternal göğüs ağrısı ve soğuk terleme ile acile başvuruyor. Çekilen 12 derivasyonlu EKG’de V1, V2, V3 ve V4 derivasyonlarında 4 mm konveks ST elevasyonu saptanıyor. Hastada yeni gelişen sağ dal bloğu eşlik ediyor.',
        clues: ['V1, V2, V3 ve V4 derivasyonlarında 4 mm konveks ST elevasyonu', 'baskı tarzında retrosternal göğüs ağrısı', 'yeni gelişen sağ dal bloğu'],
        management: 'Acil primer perkütan koroner girişim ile LAD revaskülarizasyonu ve ikili antiagregan tedavi',
        pearl: 'Septal ve anterior duvarı besleyen LAD tıkanıklığı sol ventrikül apikal anevrizması, kardiyojenik şok ve ventriküler septal rüptürün en sık nedenidir.',
        trapFalse: 'en sık sağ koroner arter tıkanıklığı sonucu gelişir ve DII-DIII-aVF’de ST yükselmesi yapar',
        trapHighlight: 'sağ koroner arter tıkanıklığı sonucu gelişir ve DII-DIII-aVF’de ST yükselmesi',
      },
      {
        name: 'İnferior miyokard enfarktüsü',
        target: 'Baskın sağ koroner arter (RCA) veya sirkumfleks arter tıkanıklığı',
        hallmark: 'EKG’de II, III ve aVF derivasyonlarında ST segment yükselmesi, I ve aVL’de resiprokal depresyon',
        vignette:
          'Ellibeş yaşında erkek hasta şiddetli epigastrik yanma, bulantı ve baş dönmesiyle acil servise geliyor. Nabız 44/dk, tansiyon 90/60 mmHg ölçülüyor. EKG’de DII, DIII ve aVF derivasyonlarında 3 mm ST elevasyonu, DI ve aVL’de ise ST depresyonu ile birlikte Mobitz tip I (Wenckebach) AV blok saptanıyor.',
        clues: ['DII, DIII ve aVF derivasyonlarında 3 mm ST elevasyonu', 'DI ve aVL’de ise ST depresyonu', 'Mobitz tip I (Wenckebach) AV blok'],
        management: 'Sağ derivasyonların çekilmesi, atropin/sıvı yönetimi ve acil koroner anjiyografi',
        pearl: 'AV düğüm vakaların %85-90’ında sağ koroner arterden beslendiği için bu lokalizasyonda bradikardi ve genellikle geçici Wenckebach tipi AV blok sık görülür.',
        trapFalse: 'gelişen AV bloklar genellikle His-Purkinje düzeyinde olup kalıcı pil gerektirir',
        trapHighlight: 'His-Purkinje düzeyinde olup kalıcı pil gerektirir',
      },
      {
        name: 'Lateral miyokard enfarktüsü',
        target: 'Sol sirkumfleks koroner arter (LCx) veya diyagonal dal tıkanıklığı',
        hallmark: 'EKG’de I, aVL, V5 ve V6 derivasyonlarında ST segment yükselmesi',
        vignette:
          'Altmış altı yaşında hipertansif kadın hasta sol koluna yayılan göğüs ağrısı ile başvuruyor. EKG incelemesinde DI ve aVL derivasyonları ile birlikte V5 ve V6’da 2.5 mm ST segment yükselmesi, DIII ve aVF’de ise resiprokal ST çökmesi tespit ediliyor.',
        clues: ['sol koluna yayılan göğüs ağrısı', 'DI ve aVL derivasyonları ile birlikte V5 ve V6’da 2.5 mm ST segment yükselmesi', 'DIII ve aVF’de ise resiprokal ST çökmesi'],
        management: 'Acil primer perkütan koroner girişim ve yüksek yoğunluklu statin + antiagregan başlanması',
        pearl: 'Sadece I ve aVL derivasyonlarında ST elevasyonu varsa yüksek lateral tutulum (birinci diyagonal dal), V5-V6 eşlik ediyorsa sirkumfleks arter oklüzyonu ön plandadır.',
        trapFalse: 'EKG’de tipik olarak V1 ve V2 derivasyonlarında primer ST segment elevasyonu görülür',
        trapHighlight: 'V1 ve V2 derivasyonlarında primer ST segment elevasyonu',
      },
      {
        name: 'Posterior miyokard enfarktüsü',
        target: 'Sol sirkumfleks arter veya sağ koroner arterin posterior inen dal tıkanıklığı',
        hallmark: 'V1-V3’te resiprokal ST depresyonu, yüksek R dalgası ve V7-V9 posterior derivasyonlarda ST yükselmesi',
        vignette:
          'Ellidokuz yaşında erkek hasta ani başlayan sırt arası ağrısı ve terleme ile acile başvuruyor. Standart 12 derivasyonlu EKG’de V1, V2 ve V3’te belirgin horizontal ST çökmesi, yüksek ve geniş R dalgaları ile pozitif T dalgaları görülüyor. Sırta çekilen V7-V9 derivasyonlarında ST yükselmesi saptanıyor.',
        clues: ['V1, V2 ve V3’te belirgin horizontal ST çökmesi', 'yüksek ve geniş R dalgaları', 'V7-V9 derivasyonlarında ST yükselmesi'],
        management: 'Nitrat veya trombolitik öncesi V7-V9 çekimi ile tanı doğrulama ve acil primer anjiyoplasti',
        pearl: 'Standart EKG’de V1-V3’te ST çökmesi ve yüksek R/S oranı (>1) görüldüğünde ayna görüntüsü kuralı gereği V7-V9 mutlaka çekilmelidir.',
        trapFalse: 'V1-V3’teki ST çökmesi nedeniyle anterior subendokardiyal iskemi kabul edilip sadece medikal izlenir',
        trapHighlight: 'sadece medikal izlenir',
      },
      {
        name: 'Sağ ventrikül miyokard enfarktüsü',
        target: 'Proksimal sağ koroner arterin sağ ventriküler dallarının proksimalinden tıkanması',
        hallmark: 'Hipotansiyon, temiz akciğer sahaları, juguler venöz dolgunluk ve V4R derivasyonunda ST yükselmesi',
        vignette:
          'Altmış üç yaşında erkek hasta göğüs ağrısı ile acile geliyor. Kan basıncı 75/45 mmHg, akciğer oskültasyonu tamamen temiz ancak boyun venleri belirgin dolgun. EKG’de DII-DIII-aVF elevasyonuna ek olarak sağ göğüs V4R derivasyonunda 2 mm ST yükselmesi görülüyor. Dil altı nitrat sonrası tansiyonu 50/30 mmHg’ye düşüyor.',
        clues: ['akciğer oskültasyonu tamamen temiz ancak boyun venleri belirgin dolgun', 'V4R derivasyonunda 2 mm ST yükselmesi', 'Dil altı nitrat sonrası tansiyonu 50/30 mmHg’ye düşüyor'],
        management: 'Nitrat ve diüretiklerden kesin kaçınılması, agresif IV izotonik sıvı yüklemesi ve acil revaskülarizasyon',
        pearl: 'Preload’a aşırı bağımlı olduğu için morfin, nitrat ve diüretik verilmesi derin hipotansiyona yol açar; ilk yaklaşım IV serum fizyolojik yüklemektir.',
        trapFalse: 'akciğer ödemini önlemek için erken dönemde furosemid ve intravenöz nitrogliserin başlanmalıdır',
        trapHighlight: 'furosemid ve intravenöz nitrogliserin başlanmalıdır',
      },
    ],
  },

  // 4. Supraventriküler ve ventriküler taşiaritmiler
  {
    branchId: 'dahiliye',
    subTopic: 'Supraventriküler ve Ventriküler Taşiaritmiler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Atriyal fibrilasyon',
        target: 'Pulmoner ven ostiumlarından kaynaklanan kaotik elektriksel aktivite ve çoklu mikro-reentry',
        hallmark: 'EKG’de P dalgalarının kaybı, ince f dalgaları ve tamamen düzensiz R-R aralıkları',
        vignette:
          'Yetmiş yaşında hipertansif kadın hasta çarpıntı ve nefes darlığı ile başvuruyor. Radyal nabız 136/dk ve düzensiz; kalp tepe atımı ile nabız arasında defisit saptanıyor. EKG’de izoelektrik hat üzerinde belirgin P dalgası görülmüyor ve R-R mesafeleri tamamen düzensiz dar QRS kompleksleri izleniyor.',
        clues: ['kalp tepe atımı ile nabız arasında defisit', 'belirgin P dalgası görülmüyor', 'R-R mesafeleri tamamen düzensiz'],
        management: 'Hız kontrolü (beta-bloker/diltiazem) ve CHA2DS2-VASc skoruna göre oral antikoagülasyon',
        pearl: '48 saatten uzun süren ya da süresi bilinmeyen olgularda kardiyoversiyon öncesi 3 hafta antikoagülasyon veya TÖE ile sol atriyal apendiks trombüsünün dışlanması şarttır.',
        trapFalse: 'R-R aralıkları düzenli olup karotis masajı ile ritim kalıcı olarak sinüse döner',
        trapHighlight: 'R-R aralıkları düzenli olup karotis masajı ile ritim kalıcı olarak sinüse döner',
      },
      {
        name: 'Atriyal flutter',
        target: 'Sağ atriyumda triküspit anülüs-kavotriküspit istmus çevresinde makro-reentry halkası',
        hallmark: 'İnferior derivasyonlarda 300/dk hızında testere dişi F dalgaları ve sabit 2:1 veya 4:1 ventriküler yanıt',
        vignette:
          'Altmış iki yaşında KOAH’lı erkek hasta 150/dk düzenli kalp hızı ve çarpıntı ile acil servise geliyor. Karotis sinüs masajı uygulandığında ventriküler hız geçici olarak yarıya düşüyor ve altta DII, DIII, aVF derivasyonlarında dakikada 300 hızında izoelektrik hattı olmayan testere dişi şeklinde dalgalar ortaya çıkıyor.',
        clues: ['150/dk düzenli kalp hızı', 'Karotis sinüs masajı uygulandığında ventriküler hız geçici olarak yarıya düşüyor', 'testere dişi şeklinde dalgalar'],
        management: 'Antikoagülasyon, hız/ritim kontrolü ve kesin kür için kavotriküspit istmus kateter ablasyonu',
        pearl: 'Dar QRS’li düzenli 150/dk taşikardide ilk akla gelmesi gereken tanıdır (300/dk atriyal hızın 2:1 AV bloklu iletimi).',
        trapFalse: 'tromboembolik inme riski bulunmadığından antikoagülan tedavi gerektirmez',
        trapHighlight: 'tromboembolik inme riski bulunmadığından antikoagülan tedavi gerektirmez',
      },
      {
        name: 'AVNRT',
        target: 'AV düğüm içindeki hızlı ve yavaş ikili iletim yolakları arasında oluşan reentran döngü',
        hallmark: 'Ani başlayıp sonlanan düzenli dar QRS taşikardi, pseudo-R’/pseudo-S dalgaları ve kurbağa bulgusu',
        vignette:
          'Yirmi beş yaşında sağlıklı kadın hasta ani başlayıp aniden biten, boynunda zonklama hissinin eşlik ettiği 185/dk çarpıntı atağı ile acile başvuruyor. EKG’de R-R aralıkları düzenli, P dalgası QRS içinde gizli ve V1’de küçük pseudo-r’ dalgası izleniyor. İntravenöz adenozin sonrası ritim hemen sinüse dönüyor.',
        clues: ['boynunda zonklama hissinin eşlik ettiği', 'P dalgası QRS içinde gizli', 'İntravenöz adenozin sonrası ritim hemen sinüse dönüyor'],
        management: 'Akut atakta vagal manevra ve IV adenozin; sık tekrarlayan ataklarda yavaş yolak radyofrekans ablasyonu',
        pearl: 'Atriyum ve ventriküller eş zamanlı kasıldığı için juguler venlerde düzenli dev A dalgaları (kurbağa bulgusu) görülür; paroksismal SVT’nin en sık nedenidir.',
        trapFalse: 'istirahat EKG’sinde kısa PR aralığı ve delta dalgası varlığı tanı için şarttır',
        trapHighlight: 'kısa PR aralığı ve delta dalgası varlığı tanı için şarttır',
      },
      {
        name: 'WPW sendromu',
        target: 'Kent aksesuar yolu üzerinden ventriküllerin erken uyarılması (preeksitasyon)',
        hallmark: 'İstirahat EKG’sinde kısa PR (<120 ms), geniş QRS başlangıcında delta dalgası ve taşikardi atakları',
        vignette:
          'Otuz yaşında erkek hasta düzensiz, hızı yer yer 240/dk’ya ulaşan geniş QRS’li taşikardi atağı ile acile getiriliyor. Eski EKG’sinde PR mesafesinin 90 ms olduğu ve QRS başlangıcında eğimli çıkış (delta dalgası) bulunduğu görülüyor. Acilde verapamil verilmesi sonrası hastanın hemodinamisi hızla bozuluyor.',
        clues: ['hızı yer yer 240/dk’ya ulaşan geniş QRS’li taşikardi', 'PR mesafesinin 90 ms olduğu', 'QRS başlangıcında eğimli çıkış'],
        management: 'Preeksite düzensiz taşikardide IV prokainamid veya senkronize DC kardiyoversiyon; kalıcı tedavide aksesuar yol ablasyonu',
        pearl: 'Preeksite düzensiz taşiaritmide AV düğümü bloke eden adenozin, digoksin, verapamil ve beta-blokerler tüm impulsları aksesuar yola yönlendirerek ventriküler fibrilasyonu tetiklediği için KONTRENDİKEDİR.',
        trapFalse: 'preeksite supraventriküler taşikardi geliştiğinde ilk tercih ilaç intravenöz verapamil veya digoksindir',
        trapHighlight: 'ilk tercih ilaç intravenöz verapamil veya digoksindir',
      },
      {
        name: 'Torsades de pointes',
        target: 'Uzamış QT aralığı zemininde erken artdepolarizasyonların tetiklediği polimorfik ventriküler taşikardi',
        hallmark: 'EKG’de izoelektrik hat etrafında dönen amplitüd ve aksı sürekli değişen polimorfik QRS kompleksleri',
        vignette:
          'Kırk sekiz yaşında hipomagnezemi ve hipokalemisi olan, haloperidol ile amiodaron kullanan kadın hasta senkop geçiriyor. Monitörde QTc süresinin 580 ms olduğu ve ardından izoelektrik hat çevresinde bükülerek dönen polimorfik geniş QRS taşikardi atağı geliştiği saptanıyor.',
        clues: ['QTc süresinin 580 ms olduğu', 'izoelektrik hat çevresinde bükülerek dönen', 'haloperidol ile amiodaron kullanan'],
        management: 'Akut atakta intravenöz magnezyum sülfat, elektrolit düzeltilmesi ve QT uzatan ilaçların kesilmesi',
        pearl: 'Serum magnezyumu normal olsa bile ilk ve en etkili farmakolojik tedavi IV magnezyum sülfattır; amiodaron veya prokainamid gibi sınıf IA/III ilaçlar QT’yi daha da uzatarak tabloyu kötüleştirir.',
        trapFalse: 'amiodaron veya sotalol infüzyonu aritmiyi baskılamak için ilk tercih tedavidir',
        trapHighlight: 'amiodaron veya sotalol infüzyonu aritmiyi baskılamak için ilk tercih',
      },
    ],
  },

  // 5. Enfektif endokardit etkenleri ve özel hasta grupları
  {
    branchId: 'dahiliye',
    subTopic: 'Enfektif Endokardit Etkenleri ve Özel Hasta Grupları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Viridans streptokok endokarditi',
        target: 'Diş girişimi sonrası bakteriyemi yapan mikroorganizmaların dekstran sentezi ile hasarlı kapak yüzeyine tutunması',
        hallmark: 'Önceden hasarlı doğal kapakta subakut ateş, yeni üfürüm, Osler nodülleri ve Roth lekeleri',
        vignette:
          'Otuz dört yaşında biküspit aort kapağı bilinen erkek hasta, iki hafta önce geçirdiği diş çekiminden sonra başlayan düşük dereceli ateş, gece terlemesi ve el parmak uçlarında ağrılı kırmızı nodüllerle başvuruyor. Kan kültüründe alfa-hemolitik, optokine dirençli gram-pozitif koklar ürüyor.',
        clues: ['iki hafta önce geçirdiği diş çekiminden sonra', 'parmak uçlarında ağrılı kırmızı nodüller', 'alfa-hemolitik, optokine dirençli'],
        management: 'Transözofageal ekokardiyografi ve penisilin G veya seftriakson ile 4 haftalık antimikrobiyal tedavi',
        pearl: 'Subakut seyirli doğal kapak enfeksiyonunun en sık nedenidir; hücre dışı dekstran üretimi fibrin-trombosit ağına yapışmayı kolaylaştırır.',
        trapFalse: 'genellikle sağlıklı triküspit kapakta günler içinde hızla gelişen akut yıkıcı seyir gösterir',
        trapHighlight: 'sağlıklı triküspit kapakta günler içinde hızla gelişen akut yıkıcı seyir',
      },
      {
        name: 'Staphylococcus aureus endokarditi',
        target: 'Fibronektin bağlayıcı proteinler ve koagülaz aracılığıyla sağlam kapak endotelinin hızlı invazyonu ve destrüksiyonu',
        hallmark: 'Sağlıklı kapakta akut yüksek ateş, Janeway lezyonları ve bilateral kaviter septik pulmoner emboliler',
        vignette:
          'Yirmi dokuz yaşında intravenöz eroin bağımlısı erkek hasta 39.8°C ateş, nefes darlığı ve plöritik göğüs ağrısı ile getiriliyor. Sol alt sternal kenarda inspirasyonla artan üfürüm ve avuç içinde ağrısız hemorajik maküller görülüyor. Akciğer grafisinde çok sayıda periferik kaviter nodüller izleniyor.',
        clues: ['intravenöz eroin bağımlısı', 'inspirasyonla artan üfürüm', 'çok sayıda periferik kaviter nodüller'],
        management: 'Kan kültürleri sonrası ampirik vankomisin/daptomisin ve MSSA saptanırsa nafsilin/sefazolin',
        pearl: 'İntravenöz madde bağımlılarında en sık sağ kalp (triküspit kapak) tutulur ve inspirasyonla şiddetlenen Carvallo üfürümü ile septik akciğer embolilerine yol açar.',
        trapFalse: 'etkenin koagülaz negatif olması nedeniyle klinik seyir oldukça yavaş ve selimdir',
        trapHighlight: 'koagülaz negatif olması nedeniyle klinik seyir oldukça yavaş ve selimdir',
      },
      {
        name: 'Streptococcus gallolyticus endokarditi',
        target: 'D grubu non-enterokokal streptokokların portal dolaşım bariyerini aşarak kalp kapaklarına yerleşmesi',
        hallmark: 'Altta yatan kolorektal adenokarsinom veya villöz adenom ile güçlü birliktelik ve safralı eskülinde üreme',
        vignette:
          'Altmış sekiz yaşında demir eksikliği anemisi ve kilo kaybı da olan erkek hasta uzamış ateş ve yeni gelişen diyastolik üfürümle yatırılıyor. Kan kültürlerinde %6.5 NaCl’de üremeyen, safra-eskülini hidrolize eden gram-pozitif koklar izole ediliyor.',
        clues: ['demir eksikliği anemisi ve kilo kaybı', 'yeni gelişen diyastolik üfürüm', '%6.5 NaCl’de üremeyen, safra-eskülini hidrolize eden'],
        management: 'Penisilin/seftriakson tedavisinin yanı sıra tüm hastalara mutlaka tanısal kolonoskopi yapılması',
        pearl: 'Eski adıyla S. bovis biyotip I izole edildiğinde hasta gastrointestinal semptom vermese dahi gizli kolon tümörü taraması için kolonoskopi zorunludur.',
        trapFalse: '%6.5 NaCl içeren besiyerinde rahatlıkla ürer ve vankomisine doğal dirençlidir',
        trapHighlight: '%6.5 NaCl içeren besiyerinde rahatlıkla ürer',
      },
      {
        name: 'Enterococcus faecalis endokarditi',
        target: 'Genitoüriner veya gastrointestinal girişimler sonrası gelişen ve intrinsik antibiyotik direnci taşıyan bakteriyemi',
        hallmark: 'Yaşlı erkekte ürolojik işlem sonrası gelişen, sefalosporinlere dirençli ve ikili antibiyotik gerektiren seyir',
        vignette:
          'Yetmiş dört yaşında erkek hasta transüretral prostat rezeksiyonu sonrası gelişen ateş ve aort yetmezliği üfürümü ile değerlendiriliyor. Kan kültüründe safra-eskülin pozitif ve %6.5 NaCl’de üreyebilen gram-pozitif kok saptanıyor. Tek başına seftriakson tedavisine yanıt alınamıyor.',
        clues: ['transüretral prostat rezeksiyonu sonrası', 'safra-eskülin pozitif ve %6.5 NaCl’de üreyebilen', 'seftriakson tedavisine yanıt alınamıyor'],
        management: 'Sinerjistik bakterisidal etki için ampisilin artı gentamisin veya ampisilin artı seftriakson kombinasyonu',
        pearl: 'Tüm sefalosporinlere doğal olarak dirençlidir; ampisilin tek başına bakteriyostatik kaldığı için mutlaka aminoglikozid veya seftriakson ile sinerjik kombinasyon gerekir.',
        trapFalse: 'monoterapi olarak sefazolin veya seftriakson yüksek bakterisidal etkinlik sağlar',
        trapHighlight: 'monoterapi olarak sefazolin veya seftriakson yüksek bakterisidal etkinlik sağlar',
      },
      {
        name: 'HACEK grubu endokarditi',
        target: 'Orofarenks florasındaki yavaş üreyen fastidiyöz gram-negatif basillerin kapak üzerinde büyük vejetasyon oluşturması',
        hallmark: 'Rutin kan kültürlerinin geç pozitifleşmesi, dev vejetasyonlar ve buna bağlı majör sistemik arteriyel emboli',
        vignette:
          'Kırk iki yaşında protez kapağı olan kadın hasta 3 haftadır süren ateş ve ani gelişen sol hemiparezi ile getiriliyor. Ekokardiyografide 18 mm boyutunda hareketli büyük bir vejetasyon görülüyor. İlk 4 gün steril kalan kan kültürlerinde 6. günde küçük, pleomorfik gram-negatif kokobasiller ürüyor.',
        clues: ['18 mm boyutunda hareketli büyük bir vejetasyon', 'İlk 4 gün steril kalan kan kültürlerinde 6. günde', 'pleomorfik gram-negatif kokobasiller'],
        management: 'Ampirik beta-laktamaz üretimi olasılığına karşı 3. kuşak sefalosporin (seftriakson) ve büyük vejetasyonda cerrahi',
        pearl: 'Haemophilus, Aggregatibacter, Cardiobacterium, Eikenella ve Kingella türlerinden oluşur; günümüzde otomatize sistemlerle 5 günde üreyebilir ancak klasik kültür negatif tablonun önemli sebebidir.',
        trapFalse: 'beta-laktamaz üretemedikleri için penisilin G her zaman birinci seçenek ilaçtır',
        trapHighlight: 'beta-laktamaz üretemedikleri için penisilin G her zaman birinci seçenek',
      },
    ],
  },

  // 6. Plevral efüzyon ayırıcı tanısı
  {
    branchId: 'dahiliye',
    subTopic: 'Plevral Efüzyon Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kalp yetmezliği transüdası',
        target: 'Pulmoner venöz hidrostatik basınç artışına ikincil kapiller filtrasyon artışı',
        hallmark: 'Bilateral (sağda daha belirgin) plevral sıvı, Light kriterlerine göre plevra/serum protein < 0.5 ve LDH < 0.6',
        vignette:
          'Yetmiş bir yaşında konjestif pompa yetersizliği bulunan erkek hasta artan dispne ile başvuruyor. Akciğer grafisinde özellikle sağ tarafta daha belirgin bilateral kostofrenik sinüs kapanması izleniyor. Torasentezde berrak sıvıda protein 1.8 g/dL (serum 6.8), LDH 75 U/L (serum 200) ve yüksek NT-proBNP saptanıyor.',
        clues: ['sağ tarafta daha belirgin bilateral', 'protein 1.8 g/dL (serum 6.8)', 'LDH 75 U/L (serum 200)'],
        management: 'Altta yatan miyokardiyal disfonksiyonun diüretik ve vazodilatörlerle tedavisi; genellikle drenaj gerekmez',
        pearl: 'Diüretik tedavisi altındaki hastalarda sıvı konsantre olabildiği için Light kriterleri yalancı eksüda verebilir; bu durumda serum-efüzyon albümin gradienti > 1.2 g/dL transüdayı doğrular.',
        trapFalse: 'plevra/serum LDH oranının 0.6’nın üzerinde olması ve düşük pH beklenir',
        trapHighlight: 'plevra/serum LDH oranının 0.6’nın üzerinde olması ve düşük pH',
      },
      {
        name: 'Parapnömonik ampiyem',
        target: 'Bakteriyel pnömoninin plevral boşluğu invaze etmesiyle yoğun nötrofilik inflamasyon ve pürülan birikim',
        hallmark: 'Plevral sıvıda pH < 7.20, glukoz < 40-60 mg/dL, LDH > 1000 U/L, pürülan görünüm veya Gram boyamada bakteri',
        vignette:
          'Elli yaşında erkek hasta lobar pnömoni için antibiyotik almasına rağmen düşmeyen ateş ve yan ağrısıyla değerlendiriliyor. Torasentezle bulanık sarı sıvı alınıyor; sıvı pH’sı 6.98, glukozu 24 mg/dL, LDH düzeyi 1850 U/L ve lökositlerin %92’si nötrofil olarak saptanıyor.',
        clues: ['sıvı pH’sı 6.98', 'glukozu 24 mg/dL', 'LDH düzeyi 1850 U/L'],
        management: 'Acil tüp torakostomi ile kapalı su altı drenajı, geniş spektrumlu antibiyotik ve lokülasyonda intraplevral tPA/DNaz',
        pearl: 'Sıvı pH < 7.20, glukoz < 60 mg/dL veya pürülan/loküle sıvı varsa komplike efüzyon kabul edilir ve antibiyotik tek başına yetmez; mutlaka göğüs tüpü takılmalıdır.',
        trapFalse: 'sadece oral antibiyotik tedavisi yeterli olup tüp torakostomi kontrendikedir',
        trapHighlight: 'tüp torakostomi kontrendikedir',
      },
      {
        name: 'Tüberküloz plörezi',
        target: 'Subplevral kazeöz odağın plevral boşluğa rüptürü sonrası gelişen Tip IV gecikmiş aşırı duyarlılık reaksiyonu',
        hallmark: 'Lenfosit baskın eksüda, yüksek adenozin deaminaz (ADA > 40 U/L), düşük mezotel hücresi (< %5) ve kazeifiye granülom',
        vignette:
          'Yirmi dört yaşında erkek hasta 3 haftadır süren ateş, gece terlemesi ve sağ yan ağrısı ile başvuruyor. Torasentezde saman sarısı eksüdatif sıvıda %90 lenfosit, %1 mezotel hücresi, glukoz 52 mg/dL ve ADA düzeyi 78 U/L saptanıyor. Sıvı ARB yayması negatif bulunuyor.',
        clues: ['%90 lenfosit, %1 mezotel hücresi', 'ADA düzeyi 78 U/L', 'ateş, gece terlemesi ve sağ yan ağrısı'],
        management: 'Kapalı plevral biyopsi veya torakoskopik biyopsi ile kültür/histoloji ve standart 4’lü antitüberküloz tedavi',
        pearl: 'Sıvıda basil yükü az olduğu için ARB ve kültür duyarlılığı düşüktür; en yüksek tanısal verim plevral biyopsi kültürü ve histolojisindedir, mezotel hücreleri %5’in altındadır.',
        trapFalse: 'plevral sıvıda eozinofil ve mezotel hücre sayısında belirgin artış tipiktir',
        trapHighlight: 'eozinofil ve mezotel hücre sayısında belirgin artış',
      },
      {
        name: 'Malign plevral efüzyon',
        target: 'Tümör hücrelerinin plevral lenfatik drenajı tıkaması ve VEGF aracılı vasküler permeabilite artışı',
        hallmark: 'Hemorajik eksüdatif sıvı, düşük glukoz/pH ile kötü prognoz, sitolojik atipi ve tekrarlayıcı birikim',
        vignette:
          'Altmış dört yaşında sigara öykülü erkek hasta progresif nefes darlığı ve kilo kaybıyla başvuruyor. Sağ hemitoraksta masif sıvı saptanıyor ve trakea karşı tarafa itilmiş izleniyor. Torasentezde kanlı görünümde eksüda, pH 7.25 ve sitolojide müsin pozitif adenokarsinom hücreleri görülüyor.',
        clues: ['masif sıvı saptanıyor ve trakea karşı tarafa itilmiş', 'kanlı görünümde eksüda', 'sitolojide müsin pozitif adenokarsinom'],
        management: 'Semptomatik rahatlama için boşaltıcı drenaj ve tekrarını önlemek adına talk plörodez veya kalıcı kateter',
        pearl: 'Masif tek taraflı sıvının en sık nedeni akciğer ve meme kanseri metastazlarıdır; akciğerin tam ekspanse olmadığı olgularda (trapped lung) plörodez yerine kalıcı plevral kateter tercih edilir.',
        trapFalse: 'ilk torasentezde sitoloji negatifse tanı kesin olarak dışlanır',
        trapHighlight: 'ilk torasentezde sitoloji negatifse tanı kesin olarak dışlanır',
      },
      {
        name: 'Şilotoraks',
        target: 'Duktus torasikusun travmatik rüptürü veya lenfoma basısı sonucu lenf sıvısının plevral boşluğa sızması',
        hallmark: 'Süt beyazı görünümde sıvı, trigliserid > 110 mg/dL ve lipoprotein elektroforezinde şilomikron varlığı',
        vignette:
          'Elli dört yaşında özofajektomi ameliyatından 5 gün sonra sol hemitoraksta hızla biriken efüzyon nedeniyle torasentez yapılan hastadan süt görünümünde opak sıvı boşaltılıyor. Sıvının eter ile berraklaşmadığı, santrifüjle çökmediği ve trigliserid düzeyinin 460 mg/dL olduğu ölçülüyor.',
        clues: ['özofajektomi ameliyatından 5 gün sonra', 'süt görünümünde opak sıvı', 'trigliserid düzeyinin 460 mg/dL'],
        management: 'Orta zincirli yağ asitlerinden zengin beslenme veya TPN, oktreotid ve drenaj yüksekse duktus ligasyonu',
        pearl: 'Psödoşilotoraksta kolesterol kristalleri (> 200 mg/dL) yüksek olup kronik romatoid artrit/TB zemininde görülürken, bu tabloda trigliserid > 110 mg/dL ve şilomikron pozitiftir; travma dışı en sık nedeni lenfomadır.',
        trapFalse: 'sıvıda kolesterol düzeyi 250 mg/dL üzerinde olup trigliserid düzeyi 50 mg/dL altındadır',
        trapHighlight: 'kolesterol düzeyi 250 mg/dL üzerinde olup trigliserid düzeyi 50 mg/dL altındadır',
      },
    ],
  },

  // 7. İnterstisyel ve mesleksel akciğer hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'İnterstisyel ve Mesleksel Akciğer Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'İdiyopatik pulmoner fibrozis',
        target: 'Alveoler epitelyal mikrohasar sonrası aberrant fibroblast proliferasyonu ve UIP paterni',
        hallmark: 'Akciğer bazallerinde ve subplevral alanda balpeteği görünümü, traksiyon bronşektazisi ve velcro raller',
        vignette:
          'Altmış yedi yaşında erkek hasta 2 yıldır ilerleyen kuru öksürük ve efor dispnesi ile başvuruyor. Parmaklarda belirgin çomaklaşma ve her iki akciğer bazalinde inspirasyon sonunda cırt cırt açılma sesine benzer raller duyuluyor. YÇBT’de alt loblarda subplevral retiküler opasiteler ve balpeteği kistleri izleniyor.',
        clues: ['Parmaklarda belirgin çomaklaşma', 'inspirasyon sonunda cırt cırt açılma sesine benzer raller', 'subplevral retiküler opasiteler ve balpeteği kistleri'],
        management: 'Solunum fonksiyon testinde restriktif patern/düşük DLCO saptanması ve pirfenidon veya nintedanib tedavisi',
        pearl: 'Kortikosteroid ve immünsüpresif tedavi mortaliteyi artırdığı için kontrendikedir; antifibrotik ajanlar (pirfenidon, nintedanib) progresyonu yavaşlatır.',
        trapFalse: 'yüksek doz sistemik kortikosteroid ve azatioprin kombinasyonu sağkalımı belirgin uzatır',
        trapHighlight: 'yüksek doz sistemik kortikosteroid ve azatioprin kombinasyonu sağkalımı belirgin uzatır',
      },
      {
        name: 'Sarkoidoz',
        target: 'Bilinmeyen antijene karşı gelişen CD4+ Th1 hücre aracılı non-kazeifiye granülomatöz inflamasyon',
        hallmark: 'Bilateral hiler lenfadenopati, yüksek ACE düzeyi, makrofaj 1-alfa hidroksilazına bağlı hiperkalsemi ve asteroid cisimcik',
        vignette:
          'Otuz iki yaşında kadın hasta bacak ön yüzünde ağrılı kırmızı nodüller, artralji ve kuru öksürükle başvuruyor. Akciğer grafisinde simetrik bilateral hiler dolgunluk saptanıyor. Serum kalsiyum ve ACE düzeyi yüksek, PPD testi ise negatif (anerjik) bulunuyor. BAL sıvısında CD4/CD8 oranı 5.2 ölçülüyor.',
        clues: ['bacak ön yüzünde ağrılı kırmızı nodüller', 'simetrik bilateral hiler dolgunluk', 'BAL sıvısında CD4/CD8 oranı 5.2'],
        management: 'Doku biyopsisi (EBUS-TBNA) ile non-kazeifiye granülom doğrulaması ve organ tutulumunda kortikosteroid',
        pearl: 'Löfgren sendromu (eritema nodozum, bilateral hiler LAP, ateş, artrit) akut başlangıçlı olup spontan remisyon oranı yüksek iyi prognozlu formdur.',
        trapFalse: 'granülomlarda tipik olarak santral kazeifikasyon nekrozu görülür ve BAL’da CD8+ hücreler baskındır',
        trapHighlight: 'santral kazeifikasyon nekrozu görülür ve BAL’da CD8+ hücreler baskındır',
      },
      {
        name: 'Silikozis',
        target: 'Kristalin silika partiküllerinin makrofaj fagositozu sonrası fagolizozom rüptürü ve inflamazom aktivasyonu',
        hallmark: 'Üst loblarda küçük yuvarlak nodüler opasiteler ve hiler lenf nodlarında yumurta kabuğu kalsifikasyon',
        vignette:
          'Kırk sekiz yaşında kot taşlama ve maden işçiliği yapmış erkek hasta ilerleyici nefes darlığıyla başvuruyor. Akciğer grafisinde her iki üst zonda birleşme eğilimli nodüller ve hiler lenf bezlerinin periferinde yumurta kabuğunu andıran kalsifikasyon görülüyor. Son aylarda gece terlemesi ve hemoptizi ekleniyor.',
        clues: ['kot taşlama ve maden işçiliği', 'üst zonda birleşme eğilimli nodüller', 'yumurta kabuğunu andıran kalsifikasyon'],
        management: 'Maruziyetin sonlandırılması ve makrofaj fonksiyon bozukluğu nedeniyle aktif tüberküloz taraması/profilaksisi',
        pearl: 'Makrofaj ölümüne yol açtığı için Mycobacterium tuberculosis enfeksiyonu riskini dramatik biçimde artırır; üst lob tutulumu karakteristiktir.',
        trapFalse: 'esas olarak alt akciğer zonlarını tutar ve mezotelyoma riskini belirgin artırır',
        trapHighlight: 'alt akciğer zonlarını tutar ve mezotelyoma riskini belirgin artırır',
      },
      {
        name: 'Asbestozis',
        target: 'Amfibol ve serpantin liflerinin inhalasyonu sonrası alt loblarda interstisyel fibrozis ve plevral reaksiyon',
        hallmark: 'Alt zonlarda fibrozis, diyafragmatik kalsifiye plevral plaklar ve dokuda ferruginöz (altın kahverengi) cisimcikler',
        vignette:
          'Altmış dokuz yaşında eski tersane ve yalıtım işçisi erkek hasta eforla nefes darlığı nedeniyle değerlendiriliyor. Toraks BT’de akciğer alt loblarında retiküler fibrozis ile birlikte pariyetal plevrada ve diyafragmada kalsifiye plaklar saptanıyor. Balgamda demirle kaplı halter biçimli lifler izleniyor.',
        clues: ['tersane ve yalıtım işçisi', 'diyafragmada kalsifiye plaklar', 'demirle kaplı halter biçimli lifler'],
        management: 'Maruziyetin kesilmesi, sigaranın bıraktırılması ve akciğer kanseri açısından yakın takip',
        pearl: 'Plevral plaklar maruziyetin göstergesi olup premalign değildir; sigara ile sinerjik etki göstererek en sık bronkojenik karsinoma (mezotelyomadan daha sık) yol açar.',
        trapFalse: 'sigara ile etkileşimi olmaksızın en sık malign mezotelyomaya neden olur ve üst lobları tutar',
        trapHighlight: 'en sık malign mezotelyomaya neden olur ve üst lobları tutar',
      },
      {
        name: 'Hipersensitivite pnömonisi',
        target: 'İnhale organik antijenlere karşı immün kompleks (Tip III) ve hücre aracılı (Tip IV) aşırı duyarlılık',
        hallmark: 'Antijen teması sonrası akut ateş/dispne, BT’de sentrilobüler buzlu cam nodülleri ve BAL’da CD8+ lenfosit artışı',
        vignette:
          'Otuz dokuz yaşında evinde çok sayıda güvercin ve muhabbet kuşu besleyen kadın hasta kümes temizledikten 6 saat sonra ateş, titreme, öksürük ve nefes darlığı geliştiriyor. YÇBT’de diffüz mozaik perfüzyon ve sentrilobüler buzlu cam nodülleri görülüyor. BAL sıvısında CD4/CD8 oranı 0.4 saptanıyor.',
        clues: ['güvercin ve muhabbet kuşu besleyen', '6 saat sonra ateş, titreme, öksürük', 'BAL sıvısında CD4/CD8 oranı 0.4'],
        management: 'Sorumlu organik antijen maruziyetinden kesin uzaklaşma ve akut/subakut olgularda sistemik kortikosteroid',
        pearl: 'Çiftçi akciğeri (termofilik aktinomiçetler) ve kuş besleyicisi akciğeri klasik örnekleridir; BAL’da lenfositoz ve düşük CD4/CD8 oranı ile sarkoidozdan ayrılır.',
        trapFalse: 'BAL sıvısında CD4/CD8 oranı belirgin yüksek olup sigara içenlerde çok daha sık görülür',
        trapHighlight: 'CD4/CD8 oranı belirgin yüksek olup sigara içenlerde çok daha sık görülür',
      },
    ],
  },

  // 8. Obstrüktif akciğer ve vasküler tablolar
  {
    branchId: 'dahiliye',
    subTopic: 'Obstrüktif Akciğer ve Vasküler Tablolar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Astım',
        target: 'Tip 2 inflamasyon (IL-4, IL-5, IL-13) ve eozinofilik havayolu hiperreaktivitesi ile reversibl bronkokonstriksiyon',
        hallmark: 'Bronkodilatör sonrası FEV1’de >= %12 ve >= 200 mL artış, balgamda Curschmann spiralleri ve Charcot-Leyden kristalleri',
        vignette:
          'Yirmi iki yaşında alerjik rinit öykülü erkek hasta gece uykudan uyandıran öksürük ve hırıltılı solunum ile başvuruyor. Spirometride FEV1/FVC %66 iken salbutamol inhalasyonu sonrası FEV1 değerinde %18 ve 420 mL artış saptanıyor. Metakolin provokasyon testi pozitif bulunuyor.',
        clues: ['gece uykudan uyandıran öksürük ve hırıltılı solunum', 'FEV1 değerinde %18 ve 420 mL artış', 'Metakolin provokasyon testi pozitif'],
        management: 'İnhale kortikosteroid bazlı kontrol edici tedavi (İKS-formoterol) ve ataklarda kısa etkili beta-2 agonist',
        pearl: 'Ağır atakta başlangıçta solunumsal alkaloz görülür; PaCO2’nin normale yükselmesi veya asidoz gelişmesi solunum kas yorgunluğu ve yaklaşan solunum durmasının alarm bulgusudur.',
        trapFalse: 'FEV1’deki düşüklük bronkodilatör sonrası geri dönüşsüzdür ve DLCO belirgin azalmıştır',
        trapHighlight: 'bronkodilatör sonrası geri dönüşsüzdür ve DLCO belirgin azalmıştır',
      },
      {
        name: 'KOAH alevlenme',
        target: 'Nötrofilik havayolu inflamasyonu, proteaz-antiproteaz dengesizliği ve akut enfeksiyöz dekompansasyon',
        hallmark: 'Post-bronkodilatör FEV1/FVC < 0.70, artmış dispne/balgam miktarı/pürülansı ve hiperkapnik solunum yetmezliği',
        vignette:
          'Altmış sekiz yaşında 50 paket-yıl sigara içmiş erkek hasta son 3 günde artan nefes darlığı, balgam miktarında artış ve yeşil balgam ile acile getiriliyor. Kan gazında pH 7.28, PaCO2 64 mmHg, PaO2 50 mmHg bulunuyor. Hastada bilincin uykuya meyilli olduğu gözleniyor.',
        clues: ['50 paket-yıl sigara', 'artan nefes darlığı, balgam miktarında artış ve yeşil balgam', 'pH 7.28, PaCO2 64 mmHg'],
        management: 'Kontrollü oksijen (hedef SpO2 %88-92), kısa etkili bronkodilatör, sistemik steroid, antibiyotik ve non-invaziv mekanik ventilasyon (BİPAP)',
        pearl: 'Aşırı yüksek akımlı oksijen verilmesi hipoksik solunum dürtüsünü baskılayıp V/Q uyumsuzluğunu artırarak (Haldane etkisi) hiperkapnik komayı derinleştirir.',
        trapFalse: 'hedef oksijen satürasyonu %98-100 olmalı ve hiperkapnide ilk tercih invaziv entübasyondur',
        trapHighlight: 'hedef oksijen satürasyonu %98-100 olmalı',
      },
      {
        name: 'Bronşektazi',
        target: 'Kronik enfeksiyon ve mukosiliyer klirens bozukluğu sonucu bronş duvarında elastik ve müsküler tabakanın kalıcı harabiyeti',
        hallmark: 'Bol kötü kokulu pürülan balgam, YÇBT’de bronş çapının eşlik eden arter çapından büyük olması (taşlı yüzük bulgusu)',
        vignette:
          'Otuz beş yaşında çocukluğundan beri sık sinüzit ve pnömoni geçiren erkek hasta her sabah bir çay bardağı dolusu kötü kokulu pürülan balgam çıkarıyor. YÇBT’de alt loblarda bronşların perifere doğru incelmediği, tren rayı görünümü ve taşlı yüzük bulgusu izleniyor.',
        clues: ['her sabah bir çay bardağı dolusu kötü kokulu pürülan balgam', 'bronşların perifere doğru incelmediği', 'taşlı yüzük bulgusu'],
        management: 'Göğüs fizyoterapisi ile postüral drenaj, balgam kültürüne yönelik antibiyotik ve altta yatan etyolojinin (KF/Kartagener/ABPA) tedavisi',
        pearl: 'Kistik fibroziste ve ABPA’da ağırlıklı olarak üst loblar tutulurken, immün yetmezlikler ve post-enfeksiyöz olgularda genellikle alt loblar etkilenir.',
        trapFalse: 'tanıda altın standart yöntem spirometri olup bronş duvarındaki değişiklikler tedaviyle tamamen düzelir',
        trapHighlight: 'tanıda altın standart yöntem spirometri olup bronş duvarındaki değişiklikler tedaviyle tamamen düzelir',
      },
      {
        name: 'Akut pulmoner emboli',
        target: 'Derin ven trombüsünün pulmoner arteriyel yatağı tıkaması sonucu ölü boşluk artışı ve ani sağ ventrikül ardyük artışı',
        hallmark: 'Ani dispne/plöritik ağrı, EKG’de sinüs taşikardisi veya S1Q3T3 paterni, BT anjiyografide dolum defekti',
        vignette:
          'Elli dokuz yaşında kalça protezi ameliyatından 6 gün sonra ayağa kalktığında ani nefes darlığı, göğüs ağrısı ve bayılma gelişen kadın hastanın nabzı 124/dk, SpO2 %86 ve D-dimer düzeyi 4200 ng/mL bulunuyor. Ekokardiyografide sağ ventrikül genişlemiş ve septum sola itilmiş görülüyor.',
        clues: ['kalça protezi ameliyatından 6 gün sonra', 'ani nefes darlığı, göğüs ağrısı ve bayılma', 'sağ ventrikül genişlemiş'],
        management: 'Hemodinamik stabil olguda BT pulmoner anjiyografi ve antikoagülasyon; masif hipotansif şokta sistemik trombolitik (alteplaz)',
        pearl: 'En sık EKG bulgusu sinüs taşikardisidir; Westermark (oligemi) ve Hampton hörgücü (tabanı plevrada kama enfarkt) direkt grafi bulgularıdır.',
        trapFalse: 'D-dimer testi yüksek özgüllüğe sahiptir ve pozitifliği tek başına tanıyı kesinleştirir',
        trapHighlight: 'yüksek özgüllüğe sahiptir ve pozitifliği tek başına tanıyı kesinleştirir',
      },
      {
        name: 'Primer pulmoner hipertansiyon',
        target: 'BMPR2 mutasyonu veya idiyopatik endotelin/NO/prostasiklin dengesizliğine bağlı pulmoner arteriyol proliferasyonu',
        hallmark: 'Sağ kalp kateterizasyonunda istirahat ortalama PAB >= 20 mmHg ve normal PCWP (<= 15 mmHg), pleksiform lezyonlar',
        vignette:
          'Otuz bir yaşında kadın hasta son bir yıldır artan efor dispnesi ve senkop atakları ile başvuruyor. Akciğer parankimi ve sol kalp fonksiyonları tamamen normal olmasına karşın sert P2, triküspit yetmezliği üfürümü ve sağ kalp kateterizasyonunda ortalama pulmoner arter basıncı 48 mmHg, kapiller kama basıncı 9 mmHg bulunuyor.',
        clues: ['sert P2, triküspit yetmezliği üfürümü', 'ortalama pulmoner arter basıncı 48 mmHg', 'kapiller kama basıncı 9 mmHg'],
        management: 'Vazoreaktivite testi pozitifse kalsiyum kanal blokeri; negatifse endotelin reseptör antagonisti, PDE-5 inhibitörü veya prostasiklin analoğu',
        pearl: 'Prekapiller grup 1 tabloda pulmoner kapiller kama basıncı normaldir (<= 15 mmHg) ve kesin tanı sağ kalp kateterizasyonu ile konur.',
        trapFalse: 'pulmoner kapiller kama basıncı 25 mmHg üzerinde olup vazoreaktivite negatif hastalarda nifedipin ilk tercihtir',
        trapHighlight: 'kapiller kama basıncı 25 mmHg üzerinde olup vazoreaktivite negatif hastalarda nifedipin',
      },
    ],
  },

  // 9. Toplum ve hastane kökenli pnömoni etkenleri
  {
    branchId: 'dahiliye',
    subTopic: 'Toplum ve Hastane Kökenli Pnömoni Etkenleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Streptococcus pneumoniae pnömonisi',
        target: 'Polisakkarit kapsülü ile fagositozdan kaçan gram-pozitif diplokokların alveoler eksüdasyon başlatması',
        hallmark: 'Ani titreme ile ateş, paslı balgam, lober konsolidasyon, lanset şekilli diplokok ve optokin duyarlılığı',
        vignette:
          'Elli altı yaşında splenektomili erkek hasta ani başlayan üşüme-titreme, 39.5°C ateş, sağ yan ağrısı ve pas renginde balgam çıkarma şikayetiyle başvuruyor. Akciğer grafisinde sağ alt lobda hava bronkogramı içeren homojen lober konsolidasyon saptanıyor. Balgam Gram boyasında gram-pozitif lanset şekilli diplokoklar görülüyor.',
        clues: ['splenektomili erkek', 'pas renginde balgam', 'gram-pozitif lanset şekilli diplokoklar'],
        management: 'Toplum kökenli ayaktan/yatan hastada amoksisilin-klavulanat + makrolid veya solunum kinolonu / seftriakson',
        pearl: 'Tipik toplum kökenli pnömoninin en sık etkenidir; orak hücreli anemi ve aspleni hastalarında fulminan sepsis riski nedeniyle konjuge aşılama hayatidir.',
        trapFalse: 'beta-laktam antibiyotiklere karşı hücre duvarı olmadığı için tamamen dirençlidir',
        trapHighlight: 'hücre duvarı olmadığı için tamamen dirençlidir',
      },
      {
        name: 'Legionella pneumophila pnömonisi',
        target: 'Klima ve su sistemlerinden inhale edilen fakültatif intrasellüler gram-negatif basilin alveoler makrofajlarda çoğalması',
        hallmark: 'Atipik pnömoniye eşlik eden sulu ishal, hiponatremi, rölatif bradikardi ve idrar antijen pozitifliği',
        vignette:
          'Altmış bir yaşında sigara içen erkek hasta bir otelde konakladıktan 5 gün sonra yüksek ateş, konfüzyon, sulu ishal ve kuru öksürük geliştiriyor. Ateşi 39.6°C iken nabzı 76/dk ölçülüyor. Laboratuvarda Na 126 mEq/L, transaminazlar hafif yüksek bulunuyor. Rutin balgam Gram boyasında bol lökosite rağmen bakteri görülmüyor.',
        clues: ['otelde konakladıktan 5 gün sonra', 'Ateşi 39.6°C iken nabzı 76/dk', 'Na 126 mEq/L'],
        management: 'İdrarda serogrup 1 antijen testi ve BCYE agarda kültür; tedavide levofloksasin veya azitromisin',
        pearl: 'Kişiden kişiye bulaşmaz; hiponatremi, gastrointestinal semptomlar ve ateş-nabız diskordansı (Faget bulgusu) klasik üçlüsüdür.',
        trapFalse: 'kanlı agarda hızla ürer ve kişiden kişiye damlacık yoluyla salgınlar yapar',
        trapHighlight: 'kanlı agarda hızla ürer ve kişiden kişiye damlacık yoluyla salgınlar yapar',
      },
      {
        name: 'Mycoplasma pneumoniae pnömonisi',
        target: 'Hücre duvarı olmayan ve kolesterol içeren zara sahip bakterinin solunum siliyer epiteline P1 adezini ile tutunması',
        hallmark: 'Genç erişkinde yürüyen pnömoni, büllöz mirinjit, yüksek soğuk aglütinin (IgM) titresi ve klinik-radyolojik uyumsuzluk',
        vignette:
          'Yirmi bir yaşında yurt ortamında yaşayan üniversite öğrencisi 10 gündür devam eden kuru öksürük, boğaz ağrısı ve kulak ağrısı ile başvuruyor. Otoskopide timpanik membranda büller, akciğer grafisinde ise hastanın hafif kliniğine tezat oluşturacak şekilde yaygın retikülonodüler infiltrasyonlar saptanıyor. Hemoglobin 10.2 g/dL ve direkt Coombs C3d pozitif bulunuyor.',
        clues: ['timpanik membranda büller', 'yaygın retikülonodüler infiltrasyonlar', 'direkt Coombs C3d pozitif'],
        management: 'Soğuk aglütinin/PCR desteği ile makrolid (azitromisin) veya doksisiklin tedavisi',
        pearl: 'Hücre duvarı içermediği için Gram boyasında görülmez ve tüm beta-laktam antibiyotiklere doğal olarak dirençlidir; eritema multiforme/Stevens-Johnson sendromunu tetikleyebilir.',
        trapFalse: 'Gram boyasında gram-negatif kokobasil olarak görülür ve seftriakson ilk tercih tedavidir',
        trapHighlight: 'Gram boyasında gram-negatif kokobasil olarak görülür ve seftriakson ilk tercih',
      },
      {
        name: 'Klebsiella pneumoniae pnömonisi',
        target: 'Kalın mukoid kapsüllü gram-negatif basilin aspirasyon sonrası nekrotizan parankimal yıkım yapması',
        hallmark: 'Alkolik/diyabetik hastada kuş üzümü jölesi şeklinde kanlı-mukoid balgam ve üst lobda şişkin fissür bulgusu',
        vignette:
          'Ellisekiz yaşında ağır alkol bağımlısı erkek hasta yüksek ateş, derin dispne ve koyu kırmızı jelatinöz (kuş üzümü jölesi benzeri) balgam ile acile getiriliyor. Akciğer grafisinde sağ üst lobda kavitasyon ve aşağı doğru bombeleşen minör fissür görünümü saptanıyor.',
        clues: ['ağır alkol bağımlısı', 'kuş üzümü jölesi benzeri', 'aşağı doğru bombeleşen minör fissür'],
        management: '3. kuşak sefalosporin (seftriakson/sefotaksim) veya karbapenem ile apse/kavite takibi',
        pearl: 'Yoğun mukoid eksüda nedeniyle lobar hacim artarak interlober fissürü aşağı iter (bulging fissure sign); nekroz ve abseleşme sıktır.',
        trapFalse: 'en sık sağlıklı gençlerde gelişir ve kavitasyon ile apse oluşumu görülmez',
        trapHighlight: 'sağlıklı gençlerde gelişir ve kavitasyon ile apse oluşumu görülmez',
      },
      {
        name: 'Pseudomonas aeruginosa pnömonisi',
        target: 'Ekzotoksin A ve elastaz üreten non-fermentatif gram-negatif basilin fırsatçı vasküler invazyonu',
        hallmark: 'Yoğun bakım/kistik fibrozis hastasında mavi-yeşil balgam, ektima gangrenozum ve oksidaz pozitifliği',
        vignette:
          'Altmış dört yaşında 9 gündür mekanik ventilatörde takip edilen ve ağır nötropenisi gelişen hastada yüksek ateş ve trakeal aspiratta tatlımsı kokulu yeşilimsi sekresyonlar gelişiyor. Cilt muayenesinde perianal bölgede etrafı eritemli siyah nekrotik ülser saptanıyor.',
        clues: ['mekanik ventilatörde takip edilen', 'yeşilimsi sekresyonlar', 'siyah nekrotik ülser'],
        management: 'Antipsödomonal beta-laktam (piperasilin-tazobaktam, sefepim, meropenem) ve gerektiğinde aminoglikozid/siprofloksasin kombinasyonu',
        pearl: 'Piyosiyanin ve piyoverdin pigmentleri yeşil-mavi renk verir; seftriakson ve ertapenem bu etkene karşı etkisizdir!',
        trapFalse: 'seftriakson ve ertapenem etkenin tedavisinde yüksek etkinliğe sahip beta-laktamlardır',
        trapHighlight: 'seftriakson ve ertapenem etkenin tedavisinde yüksek etkinliğe sahip',
      },
    ],
  },

  // 10. Akut böbrek hasarı ayırıcı tanısı
  {
    branchId: 'dahiliye',
    subTopic: 'Akut Böbrek Hasarı Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Prerenal azotemi',
        target: 'Efektif arteriyel kan hacmi azalmasına bağlı renal hipoperfüzyon ve sağlam tübüler sodyum-su geri emilimi',
        hallmark: 'FENa < %1, idrar Na < 20 mEq/L, idrar ozmolalitesi > 500 mOsm/kg, BUN/Kreatinin > 20 ve hiyalen silendirler',
        vignette:
          'Yetmiş beş yaşında 4 gündür şiddetli kusma ve ishal geçiren erkek hastada serum kreatinin 2.6 mg/dL, BUN 68 mg/dL ölçülüyor. İdrar sodyumu 10 mEq/L, fraksiyone sodyum ekskresyonu %0.4, idrar ozmolalitesi 620 mOsm/kg ve idrar mikroskopisinde sadece hiyalen silendirler görülüyor.',
        clues: ['kreatinin 2.6 mg/dL, BUN 68 mg/dL', 'fraksiyone sodyum ekskresyonu %0.4', 'idrar ozmolalitesi 620 mOsm/kg'],
        management: 'İzotonik kristaloidlerle intravasküler hacmin hızla yerine konması ve nefrotoksik ajanların kesilmesi',
        pearl: 'Kalp yetmezliği ve sirozda da renal perfüzyon azaldığı için FENa < %1 saptanır; diüretik kullanan hastalarda FENa yalancı yükselebileceğinden FEÜre (< %35) daha güvenilirdir.',
        trapFalse: 'fraksiyone sodyum ekskresyonu %2’nin üzerinde olup idrarda çamurlu kahverengi silendirler izlenir',
        trapHighlight: 'fraksiyone sodyum ekskresyonu %2’nin üzerinde olup idrarda çamurlu kahverengi silendirler',
      },
      {
        name: 'Akut tübüler nekroz',
        target: 'Uzamış iskemi veya nefrotoksinler (aminoglikozid, sisplatin, miyoglobin) sonucu tübül epitel hücrelerinin ölümü',
        hallmark: 'FENa > %2, idrar Na > 40 mEq/L, idrar ozmolalitesi < 350 mOsm/kg ve çamurlu kahverengi granüler silendirler',
        vignette:
          'Altmış iki yaşında uzamış sepsis ve hipotansiyon sonrası oligüri gelişen hastada sıvı resüsitasyonuna rağmen kreatinin 4.1 mg/dL’ye yükseliyor. İdrar sodyumu 58 mEq/L, FENa %3.4, idrar ozmolalitesi 295 mOsm/kg ve sedimentte çok sayıda koyu kahverengi granüler silendir ile tübül epitel hücresi saptanıyor.',
        clues: ['uzamış sepsis ve hipotansiyon sonrası', 'FENa %3.4', 'koyu kahverengi granüler silendir'],
        management: 'Altta yatan nedenin düzeltilmesi, sıvı-elektrolit dengesinin korunması ve endikasyon varsa diyaliz desteği',
        pearl: 'En duyarlı nefron segmentleri S3 proksimal tübül düz segmenti ile medüller çıkan kalın Henle kulbudur; iyileşme fazında poliüri ve hipokalemi görülebilir.',
        trapFalse: 'hızlı intravenöz izotonik sıvı verilmesiyle saatler içinde kreatinin normale döner',
        trapHighlight: 'saatler içinde kreatinin normale döner',
      },
      {
        name: 'Akut interstisyel nefrit',
        target: 'İlaçlara (beta-laktamlar, NSAİİ, proton pompa inhibitörleri) karşı T hücre aracılı alerjik renal interstisyel inflamasyon',
        hallmark: 'Ateş, makülopapüler döküntü, periferik eozinofili, idrarda eozinofilüri ve steril piyüri/lökosit silendirleri',
        vignette:
          'Ellidört yaşında 10 gün önce selülit nedeniyle sefazolin ve ibuprofen başlanan kadın hasta yeni çıkan kaşıntılı döküntü, 38.2°C ateş ve kreatinin yüksekliği (3.0 mg/dL) ile başvuruyor. Tam kan sayımında %11 eozinofili, idrarda steril piyüri, lökosit silendirleri ve Hansel boyasında eozinofiller görülüyor.',
        clues: ['sefazolin ve ibuprofen başlanan', 'döküntü, 38.2°C ateş', '%11 eozinofili, idrarda steril piyüri'],
        management: 'Sorumlu ilacın derhal kesilmesi ve düzelme olmazsa kısa süreli sistemik kortikosteroid tedavisi',
        pearl: 'Klasik ateş-döküntü-eozinofili üçlüsü hastaların sadece %10-30’unda bir arada bulunur; NSAİİ ilişkili olgularda nefrotik düzeyde proteinüri eşlik edebilir.',
        trapFalse: 'tedavide ilk adım yüksek doz loop diüretiği ve aminoglikozid eklenmesidir',
        trapHighlight: 'yüksek doz loop diüretiği ve aminoglikozid eklenmesidir',
      },
      {
        name: 'Kontrast nefropatisi',
        target: 'İyotlu radyokontrast maddenin renal medüller vazokonstriksiyon ve direkt tübüler oksidatif stres oluşturması',
        hallmark: 'Kontrast sonrası 24-48 saatte kreatinin artışı, 3-5 günde pik yapması ve paradoksal düşük FENa (< %1)',
        vignette:
          'Altmış dokuz yaşında diyabetik nefropati öykülü erkek hastaya koroner anjiyografi yapılmasından 48 saat sonra serum kreatinini 1.6 mg/dL’den 2.9 mg/dL’ye çıkıyor. İdrar çıkışında hafif azalma mevcut ancak idrar FENa değeri %0.5 ölçülüyor; 6. günde böbrek fonksiyonları kendiliğinden gerilemeye başlıyor.',
        clues: ['koroner anjiyografi yapılmasından 48 saat sonra', 'kreatinini 1.6 mg/dL’den 2.9 mg/dL’ye çıkıyor', 'FENa değeri %0.5'],
        management: 'İşlem öncesi ve sonrası IV izotonik sodyum klorür hidrasyonu ve metformin/NSAİİ’lerin geçici kesilmesi',
        pearl: 'Tübüler hasar yapmasına rağmen şiddetli medüller vazokonstriksiyon nedeniyle FENa genellikle <%1 bulunur; korunmada en kanıtlı yöntem izotonik salin hidrasyonudur.',
        trapFalse: 'hasarı önlemek için işlem öncesi profilaktik mannitol ve furosemid zorunludur',
        trapHighlight: 'profilaktik mannitol ve furosemid zorunludur',
      },
      {
        name: 'Ateroembolik böbrek hastalığı',
        target: 'Endovasküler girişim sonrası ülsere aort plağından kopan kolesterol kristallerinin renal arteriyolleri tıkaması',
        hallmark: 'Anjiyografi sonrası haftalar içinde progresif böbrek yetmezliği, livedo retikülaris, mavi ayak parmağı ve hipokomplementemi',
        vignette:
          'Yetmiş altı yaşında ağır aterosklerozu olan erkek hasta abdominal aort anevrizması endovasküler onarımından 2 hafta sonra kreatinini 4.8 mg/dL’ye yükselerek başvuruyor. Ayak parmaklarında morarma (periferik nabızlar açık olmasına rağmen), bacaklarda ağsı morumsu renk değişikliği, eozinofili ve düşük C3 düzeyi saptanıyor.',
        clues: ['aort anevrizması endovasküler onarımından 2 hafta sonra', 'Ayak parmaklarında morarma', 'ağsı morumsu renk değişikliği, eozinofili ve düşük C3'],
        management: 'Endovasküler girişim ve antikoagülasyondan kaçınılması, yüksek doz statin ve destekleyici böbrek bakımı',
        pearl: 'Biyopside küçük arteriyol lümenlerinde bikonveks iğne şeklinde kolesterol yarıkları patognomoniktir; antikoagülasyon yeni plak kopmalarını tetikleyebilir.',
        trapFalse: 'kolesterol kristallerini eritmek için acil intravenöz heparin ve trombolitik başlanır',
        trapHighlight: 'acil intravenöz heparin ve trombolitik başlanır',
      },
    ],
  },

  // 11. Renal tübüler asidoz ve tübülopatiler
  {
    branchId: 'dahiliye',
    subTopic: 'Renal Tübüler Asidoz ve Tübülopatiler',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Tip 1 Distal RTA',
        target: 'Toplayıcı kanal alfa-interkale hücrelerinde H+ sekresyon veya H+-ATPaz pompa defekti',
        hallmark: 'Normal anyon açıklı metabolik asidoz, idrar pH’sının daima > 5.5 olması, hipokalemi ve nefrokalsinozis',
        vignette:
          'Otuz dört yaşında Sjögren sendromu tanılı kadın hasta kas güçsüzlüğü ve tekrarlayan böbrek taşı atakları nedeniyle inceleniyor. Kan gazında pH 7.26, HCO3 14 mEq/L, anyon açığı 10, potasyum 2.6 mEq/L ve idrar pH 6.6 saptanıyor. Böbrek ultrasonografisinde medüller nefrokalsinozis ve kalsiyum fosfat taşları görülüyor.',
        clues: ['Sjögren sendromu', 'anyon açığı 10, potasyum 2.6 mEq/L', 'idrar pH 6.6'],
        management: 'Oral potasyum sitrat veya sodyum bikarbonat ile asidoz ve hipokaleminin düzeltilmesi',
        pearl: 'Kemiklerden kalsiyum tamponlaması ve hipositratüri nedeniyle idrar kalsiyumu yüksek, sitratı düşük ve idrar pH’sı yüksek olduğu için taş ve nefrokalsinozis sadece bu tipte çok sıktır.',
        trapFalse: 'asit yükleme testi sırasında idrar pH’sı rahatlıkla 5.3’ün altına düşer',
        trapHighlight: 'idrar pH’sı rahatlıkla 5.3’ün altına düşer',
      },
      {
        name: 'Tip 2 Proksimal RTA',
        target: 'Proksimal tübülde bikarbonat geri emilim eşiğinin düşmesi ve karbonik anhidraz/Na-HCO3 kotransporter defekti',
        hallmark: 'Bikarbonat yüklemesiyle idrar pH’sının yükselmesi, ağır asidemide idrar pH < 5.5 olabilmesi ve hipokalemi',
        vignette:
          'Kırk beş yaşında multipl miyelom tanılı erkek hastada normal anyon açıklı metabolik asidoz (HCO3 16 mEq/L) ve hipokalemi (K 3.0 mEq/L) saptanıyor. Bikarbonat verilmediği bazal durumda idrar pH’sı 5.2 ölçülüyor ancak IV sodyum bikarbonat başlandığında idrar pH’sı hızla 7.6’ya çıkıyor ve FEHCO3 %22 bulunuyor.',
        clues: ['multipl miyelom', 'bazal durumda idrar pH’sı 5.2', 'FEHCO3 %22'],
        management: 'Yüksek doz alkali replasmanı, potasyum desteği ve gereğinde hacim kontraksiyonu için tiazid diüretik',
        pearl: 'Distal asidifikasyon mekanizması sağlam olduğu için serum bikarbonatı yeni düşük eşiğe indiğinde idrar pH’sı < 5.5 olabilir; ancak bikarbonat verilince idrarla masif bikarbonat kaçağı olur.',
        trapFalse: 'düşük doz sodyum bikarbonat asidozu kolayca düzeltir ve nefrokalsinozis çok sıktır',
        trapHighlight: 'düşük doz sodyum bikarbonat asidozu kolayca düzeltir ve nefrokalsinozis çok sıktır',
      },
      {
        name: 'Tip 4 Hipoaldosteronemik RTA',
        target: 'Toplayıcı kanalda aldosteron eksikliği veya direncine bağlı amonyagenez azalması ve K+/H+ atılım bozukluğu',
        hallmark: 'Normal anyon açıklı metabolik asidoz ile birlikte HİPERKALEMİ ve korunmuş idrar asidifikasyonu (idrar pH < 5.5)',
        vignette:
          'Altmış üç yaşında uzun süreli diyabetik nefropati ve ACE inhibitörü kullanan erkek hastada kreatinin 1.9 mg/dL, potasyum 5.9 mEq/L, klor 114 mEq/L, HCO3 17 mEq/L, anyon açığı 11 ve idrar pH 5.1 saptanıyor. Plazma renin ve aldosteron düzeyleri düşük ölçülüyor.',
        clues: ['diyabetik nefropati ve ACE inhibitörü', 'potasyum 5.9 mEq/L', 'idrar pH 5.1'],
        management: 'Hiperkalemiye yol açan ilaçların kesilmesi, loop diüretik/potasyum bağlayıcılar ve seçilmiş mineralokortikoid eksikliğinde fludrokortizon',
        pearl: 'Erişkinlerde en sık görülen RTA tipidir ve diğer tüm tiplerden farklı olarak HİPOKALEMİ değil HİPERKALEMİ ile seyreder; hiperkalemi proksimal tübülde NH3 sentezini baskılar.',
        trapFalse: 'belirgin hipokalemi ve idrar pH’sının 6.0’nın üzerinde sabit kalması ile karakterizedir',
        trapHighlight: 'belirgin hipokalemi ve idrar pH’sının 6.0’nın üzerinde sabit kalması',
      },
      {
        name: 'Fanconi sendromu',
        target: 'Proksimal tübülün jeneralize transport disfonksiyonu sonucu tüm çözünenlerin idrarla kaybı',
        hallmark: 'Normoglisemik glukozüri, jeneralize aminoasidüri, hipofosfatemi/fosfatüri, hipoürisemi ve bikarbonat kaybı',
        vignette:
          'Yirmi dokuz yaşında tenofovir içeren antiretroviral tedavi alan HIV pozitif erkek hastada yaygın kemik ağrıları ve kas güçsüzlüğü gelişiyor. Laboratuvarda açlık kan şekeri 88 mg/dL iken idrarda +3 glukoz, serum fosforu 1.6 mg/dL, ürik asit 1.4 mg/dL ve normal anyon açıklı metabolik asidoz bulunuyor.',
        clues: ['tenofovir içeren antiretroviral tedavi', 'kan şekeri 88 mg/dL iken idrarda +3 glukoz', 'serum fosforu 1.6 mg/dL, ürik asit 1.4 mg/dL'],
        management: 'Sorumlu ilacın/toksinin kesilmesi (tenofovir, kurşun, süresi geçmiş tetrasiklin) ve fosfat, D vitamini, potasyum, alkali replasmanı',
        pearl: 'Çocuklarda en sık nedeni sistinozis, erişkinlerde multipl miyelom (hafif zincir) ve tenofovir/ifosfamid toksisitesidir; fosfat kaybı çocukta raşitizm, erişkinde osteomalazi yapar.',
        trapFalse: 'temel bozukluk Henle kulbunun çıkan kalın kolunda Na-K-2Cl kotransporter inhibisyonudur',
        trapHighlight: 'Henle kulbunun çıkan kalın kolunda Na-K-2Cl kotransporter inhibisyonudur',
      },
      {
        name: 'Nefrojenik diyabet insipidus',
        target: 'Toplayıcı kanal esas hücrelerinde vazopresin V2 reseptörü veya akuaporin-2 su kanalı direnci',
        hallmark: 'Yüksek serum sodyumu ve ozmolalitesine karşın desmopressine yanıtsız hipoozmolar poliüri (< 300 mOsm/kg)',
        vignette:
          'Kırk iki yaşında bipolar bozukluk nedeniyle lityum kullanan kadın hasta günde 8 litre su içme ve gece sık idrara çıkma ile başvuruyor. Serum sodyumu 149 mEq/L, idrar ozmolalitesi 130 mOsm/kg ölçülüyor. Susuzluk testi ve ardından verilen eksojen desmopressine rağmen idrar ozmolalitesinde artış görülmüyor.',
        clues: ['lityum kullanan', 'Serum sodyumu 149 mEq/L, idrar ozmolalitesi 130 mOsm/kg', 'desmopressine rağmen idrar ozmolalitesinde artış görülmüyor'],
        management: 'Neden olan etkenin (lityum, hiperkalsemi) kesilmesi/düzeltilmesi, tuz kısıtlaması, tiazid diüretik, amilorid ve NSAİİ (indometazin)',
        pearl: 'Tiazid diüretikler hafif hacim kontraksiyonu yaratarak proksimal tübülde su-sodyum geri emilimini artırıp distale giden sıvıyı azaltarak paradoksal biçimde idrar çıkışını düşürür.',
        trapFalse: 'intranazal veya intravenöz desmopressin verilmesi idrar ozmolalitesini hızla %50’den fazla artırır',
        trapHighlight: 'desmopressin verilmesi idrar ozmolalitesini hızla %50’den fazla artırır',
      },
    ],
  },

  // 12. Asit-baz bozuklukları
  {
    branchId: 'dahiliye',
    subTopic: 'Asit-Baz Bozuklukları ve Kompanzasyon',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Yüksek anyon açıklı metabolik asidoz',
        target: 'Ölçülemeyen organik veya inorganik asit anyonlarının (laktat, keton, toksik metabolitler, üremik asitler) birikimi',
        hallmark: 'Düşük pH ve HCO3, anyon açığı > 12 mEq/L ve Winter formülüyle uyumlu PaCO2 düşüşü',
        vignette:
          'Otuz yaşında erkek hasta görme bulanıklığı ve derin hızlı solunum (Kussmaul) ile acile getiriliyor. Laboratuvarda pH 7.16, PaCO2 20 mmHg, Na 138, Cl 98, HCO3 8 mEq/L ölçülüyor. Serum ozmolalitesi 345 mOsm/kg hesaplanıyor ve ozmolar açıklığın 32 mOsm/kg olduğu saptanıyor.',
        clues: ['görme bulanıklığı ve derin hızlı solunum', 'Na 138, Cl 98, HCO3 8 mEq/L', 'ozmolar açıklığın 32 mOsm/kg'],
        management: 'Altta yatan nedenin (DKA, laktik asidoz, metanol/etilen glikol) özgül tedavisi; toksik alkollerde fomepizol',
        pearl: 'Winter formülü [Beklenen PaCO2 = 1.5 x HCO3 + 8 ± 2] ile ölçülen PaCO2 karşılaştırılarak eşlik eden ek solunumsal bozukluk olup olmadığı saptanır; hipoalbüminemi varsa her 1 g/dL düşüş için AA’ya 2.5 eklenir.',
        trapFalse: 'idrarla bikarbonat kaybı veya gastrointestinal bikarbonat kaybı bu tablonun en sık nedenidir',
        trapHighlight: 'idrarla bikarbonat kaybı veya gastrointestinal bikarbonat kaybı',
      },
      {
        name: 'Normal anyon açıklı metabolik asidoz',
        target: 'Bikarbonat kaybına karşılık klorür iyonunun elektro-nötraliteyi korumak amacıyla artması (hiperkloremik asidoz)',
        hallmark: 'Düşük HCO3 ile orantılı yüksek Cl-, normal anyon açığı (8-12 mEq/L) ve idrar anyon açığıyla renal/ekstrarenal ayrımı',
        vignette:
          'Kırk bir yaşında şiddetli sekretuvar ishali olan hastada pH 7.28, PaCO2 28 mmHg, Na 136, K 3.1, Cl 112 ve HCO3 14 mEq/L ölçülüyor. İdrar sodyumu 30, idrar potasyumu 22 ve idrar klorürü 78 mEq/L bulunuyor (idrar anyon açığı negatif).',
        clues: ['şiddetli sekretuvar ishali', 'Na 136, K 3.1, Cl 112 ve HCO3 14 mEq/L', 'idrar anyon açığı negatif'],
        management: 'Altta yatan ishal veya tübüler kaybın düzeltilmesi, potasyum ve alkali replasmanı',
        pearl: 'İdrar anyon açığı (İdrar Na + İdrar K - İdrar Cl) negatif ise böbrek normal yanıt olarak bol NH4Cl atıyor demektir (ishal gibi ekstrarenal neden); pozitif ise renal tübüler asidoz düşünülür.',
        trapFalse: 'pozitif idrar anyon açığı böbreğin amonyum atılımının sağlam olduğunu ve nedenin ishal olduğunu gösterir',
        trapHighlight: 'pozitif idrar anyon açığı böbreğin amonyum atılımının sağlam olduğunu',
      },
      {
        name: 'Metabolik alkaloz',
        target: 'Hidrojen iyonu kaybı veya bikarbonat yüklenmesinin hacim/klorür eksikliği veya aldosteron fazlalığı ile idamesi',
        hallmark: 'Yüksek pH ve HCO3, hipokalemi, kompanzatuvar PaCO2 artışı ve idrar klorürüyle (< 20 vs > 20 mEq/L) sınıflandırma',
        vignette:
          'Elli iki yaşında peptik ülser ve pilor stenozuna bağlı günlerdir kusan hastada pH 7.54, PaCO2 49 mmHg, HCO3 41 mEq/L, Na 136, Cl 84 ve K 2.7 mEq/L ölçülüyor. İdrar klorür düzeyi 8 mEq/L bulunuyor.',
        clues: ['pilor stenozuna bağlı günlerdir kusan', 'pH 7.54, PaCO2 49 mmHg, HCO3 41 mEq/L', 'İdrar klorür düzeyi 8 mEq/L'],
        management: 'İdrar klorürü < 20 mEq/L ise (klorür duyarlı) %0.9 NaCl ve KCl infüzyonu; > 20 mEq/L ise aldosteron fazlalığı/diüretik araştırılması',
        pearl: 'İdrar Cl < 20 mEq/L kusma, nazogastrik drenaj ve geçirilmiş diüretik kullanımında görülür ve serum fizyolojikle düzelir; idrar Cl > 20 mEq/L ise hiperaldosteronizm, Bartter/Gitelman veya aktif diüretik kullanımını düşündürür.',
        trapFalse: 'klorür duyarlı kusma olgularında tedavide izotonik salin yerine sadece sodyum bikarbonat verilir',
        trapHighlight: 'izotonik salin yerine sadece sodyum bikarbonat verilir',
      },
      {
        name: 'Solunumsal asidoz',
        target: 'Alveoler hipoventilasyon nedeniyle CO2 atılımının azalması ve PaCO2’nin 45 mmHg üzerine çıkması',
        hallmark: 'Düşük pH, yüksek PaCO2 ve böbreğin bikarbonat tutulumuna bağlı akut (her 10 mmHg PaCO2 için +1 HCO3) vs kronik (+3.5-4 HCO3) kompanzasyon',
        vignette:
          'Altmış beş yaşında kronik akciğer hastalığı olan erkek hasta uyku hali ile getiriliyor. Arteryel kan gazında pH 7.34, PaCO2 68 mmHg ve HCO3 35 mEq/L saptanıyor. Hastanın A-a oksijen gradienti artmış ölçülüyor.',
        clues: ['pH 7.34, PaCO2 68 mmHg', 'HCO3 35 mEq/L', 'kronik akciğer hastalığı'],
        management: 'Altta yatan havayolu obstrüksiyonu veya santral depresyonun düzeltilmesi ve gerekirse non-invaziv/invaziv ventilasyon',
        pearl: 'Akut formda PaCO2’deki her 10 mmHg artışta HCO3 sadece 1 mEq/L artarken, 3-5 günlük kronik kompanzasyonda her 10 mmHg artışta HCO3 3.5-4 mEq/L yükselir.',
        trapFalse: 'akut dönemde böbrek kompanzasyonu dakikalar içinde tamamlanarak bikarbonatı 10 mEq/L’den fazla yükseltir',
        trapHighlight: 'dakikalar içinde tamamlanarak bikarbonatı 10 mEq/L’den fazla yükseltir',
      },
      {
        name: 'Solunumsal alkaloz',
        target: 'Alveoler hiperventilasyon (hipoksi, sepsis, salisilat, anksiyete, gebelik) ile aşırı CO2 atılması',
        hallmark: 'Yüksek pH, düşük PaCO2 (< 35 mmHg), el-ayak parestezisi ve iyonize kalsiyum düşmesine bağlı tetani',
        vignette:
          'Yirmi altı yaşında yoğun panik atak sonrası ellerinde ve dudak çevresinde uyuşma, karıncalanma ve karpopedal spazm gelişen kadın hastanın kan gazında pH 7.56, PaCO2 22 mmHg ve HCO3 19 mEq/L ölçülüyor. Total serum kalsiyumu normal saptanıyor.',
        clues: ['dudak çevresinde uyuşma', 'karpopedal spazm', 'pH 7.56, PaCO2 22 mmHg'],
        management: 'Altta yatan hipoksi, sepsis, pulmoner emboli veya psikojenik nedenin tedavisi',
        pearl: 'Alkalemi albüminin negatif yükünü artırarak serbest iyonize kalsiyumun albümine bağlanmasını çoğaltır; bu nedenle total kalsiyum normalken tetani görülür. Gram-negatif sepsisin en erken asit-baz bulgusudur.',
        trapFalse: 'total serum kalsiyum düzeyi belirgin düştüğü için acil yüksek doz D vitamini başlanmalıdır',
        trapHighlight: 'total serum kalsiyum düzeyi belirgin düştüğü için acil yüksek doz D vitamini',
      },
    ],
  },

  // 13. Hiponatremi ve su dengesi bozuklukları
  {
    branchId: 'dahiliye',
    subTopic: 'Hiponatremi ve Su Dengesi Bozuklukları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Uygunsuz ADH sendromu',
        target: 'Plazma ozmolalitesinden bağımsız artmış vazopresin salınımı ile toplayıcı kanallarda serbest su tutulumu',
        hallmark: 'Övolemik hiponatremi, serum ozmolalitesi < 275 mOsm/kg, idrar ozmolalitesi > 100, idrar Na > 40 mEq/L ve düşük ürik asit',
        vignette:
          'Altmış bir yaşında küçük hücreli akciğer kanseri tanılı erkek hastada ödem ve ortostatik hipotansiyon olmaksızın serum Na 118 mEq/L, serum ozmolalitesi 250 mOsm/kg ve serum ürik asidi 2.0 mg/dL bulunuyor. İdrar ozmolalitesi 480 mOsm/kg, idrar sodyumu 64 mEq/L ölçülüyor; tiroid ve adrenal fonksiyonlar normal.',
        clues: ['küçük hücreli akciğer kanseri', 'ödem ve ortostatik hipotansiyon olmaksızın', 'İdrar ozmolalitesi 480 mOsm/kg, idrar sodyumu 64 mEq/L'],
        management: 'Sıvı kısıtlaması, altta yatan nedenin tedavisi, ciddi semptomatik olgularda %3 hipertonik salin ve dirençte tolvaptan/üre',
        pearl: 'Kronik hiponatremi günde 8-10 mEq/L’den hızlı düzeltilirse ozmotik demiyelinizasyon sendromu (santral pontin miyelinolizis) gelişir; izotonik salin verilmesi idrardaki yüksek konsantrasyon nedeniyle sodyumu daha da düşürebilir.',
        trapFalse: 'belirgin periferik ödem ve idrar sodyumunun 10 mEq/L’nin altında olması beklenir',
        trapHighlight: 'belirgin periferik ödem ve idrar sodyumunun 10 mEq/L’nin altında olması',
      },
      {
        name: 'Serebral tuz kaybı',
        target: 'İntrakraniyal patoloji sonrası natriüretik peptit artışı ve renal sempatik tonus azalmasıyla primer natriürez',
        hallmark: 'Hipovolemik hiponatremi, aşırı idrar sodyum kaybı (> 40 mEq/L), yüksek idrar çıkışı ve sıvı kısıtlamasıyla kötüleşme',
        vignette:
          'Kırk yedi yaşında anevrizmal subaraknoid kanama nedeniyle opere edilen hastada ameliyat sonrası 4. günde poliüri, ortostatik hipotansiyon, kuru mukozalar ve taşikardi eşliğinde serum Na 121 mEq/L’ye düşüyor. İdrar sodyumu 110 mEq/L, serum BNP düzeyi belirgin yüksek ve hematokrit artmış bulunuyor.',
        clues: ['subaraknoid kanama', 'poliüri, ortostatik hipotansiyon', 'İdrar sodyumu 110 mEq/L'],
        management: 'Sıvı kısıtlamasından kesin kaçınılması, intravenöz izotonik/hipertonik salin ve gerekirse fludrokortizon ile tuz-hacim replasmanı',
        pearl: 'Laboratuvar olarak yüksek idrar sodyumu ve ozmolalitesi SIADH ile benzerdir ancak hasta HİPOVOLEMİKTİR ve sıvı kısıtlaması vazospazm ile beyin iskemisini ağırlaştırır.',
        trapFalse: 'tedavide ilk yaklaşım sıkı sıvı kısıtlaması ve vaptan grubu ilaçlardır',
        trapHighlight: 'sıkı sıvı kısıtlaması ve vaptan grubu ilaçlardır',
      },
      {
        name: 'Psödohiponatremi',
        target: 'Şiddetli hiperlipidemi veya paraproteinemi nedeniyle plazma su fraksiyonunun azalmasına bağlı laboratuvar artefaktı',
        hallmark: 'Düşük ölçülen serum sodyumuna karşın NORMAL plazma ozmolalitesi (280-295 mOsm/kg)',
        vignette:
          'Ellisekiz yaşında akut pankreatit atağıyla yatan ve serumu süt gibi lipemik olan hastada serum trigliserid düzeyi 4200 mg/dL, rutin otoanalizörde serum Na 122 mEq/L bulunuyor. Ölçülen plazma ozmolalitesi ise 288 mOsm/kg ile tamamen normal saptanıyor.',
        clues: ['serumu süt gibi lipemik', 'trigliserid düzeyi 4200 mg/dL', 'plazma ozmolalitesi ise 288 mOsm/kg'],
        management: 'Sodyuma yönelik tedavi verilmemesi, direkt iyon-selektif elektrot ile ölçüm ve altta yatan hiperlipidemi/miyelomun tedavisi',
        pearl: 'Gerçek hipotonik bir durum olmadığı için beyin ödemi riski yoktur ve %3 NaCl ya da sıvı kısıtlaması yapılmamalıdır.',
        trapFalse: 'ölçülen serum ozmolalitesi 250 mOsm/kg altında olup acil hipertonik salin infüzyonu gerektirir',
        trapHighlight: 'acil hipertonik salin infüzyonu gerektirir',
      },
      {
        name: 'Psikojenik polidipsi',
        target: 'Böbreğin günlük serbest su atılım kapasitesini (yaklaşık 15-20 L) aşan kompulsif aşırı su tüketimi',
        hallmark: 'Hipotonik hiponatremi ile birlikte fizyolojik ADH baskılanmasına bağlı maksimal dilüe idrar (idrar ozmolalitesi < 100 mOsm/kg)',
        vignette:
          'Otuz üç yaşında şizofreni tanılı erkek hasta bulantı ve konfüzyonla acile getiriliyor. Yakınları hastanın gün boyu aralıksız musluktan su içtiğini belirtiyor. Serum Na 119 mEq/L, serum ozmolalitesi 248 mOsm/kg iken idrar ozmolalitesi 68 mOsm/kg ve idrar dansitesi 1.001 saptanıyor.',
        clues: ['şizofreni tanılı', 'gün boyu aralıksız musluktan su içtiğini', 'idrar ozmolalitesi 68 mOsm/kg'],
        management: 'Su alımının kontrol altına alınması; dikkatli izlem çünkü serbest su diürezi ile sodyum kendiliğinden hızlı yükselebilir',
        pearl: 'Böbrek ADH’yı tam olarak baskılayıp idrarı maksimal dilüe ettiği için (idrar ozmolalitesi < 100 mOsm/kg) uygunsuz ADH salınımından kolayca ayrılır.',
        trapFalse: 'idrar ozmolalitesi genellikle 500 mOsm/kg üzerinde ve idrar sodyumu 60 mEq/L üzerindedir',
        trapHighlight: 'idrar ozmolalitesi genellikle 500 mOsm/kg üzerinde',
      },
      {
        name: 'Hipervolemik hiponatremi',
        target: 'Kalp yetmezliği, siroz veya nefrotik sendromda azalmış efektif arteriyel hacmin baroreseptör aracılı ADH salınımını uyarması',
        hallmark: 'Asit/periferik ödemle birlikte düşük serum sodyumu, yüksek idrar ozmolalitesi ve düşük idrar sodyumu (< 20 mEq/L)',
        vignette:
          'Altmış yaşında dekompanse karaciğer sirozu olan erkek hastada masif asit ve 3+ pretibial ödem mevcut. Serum Na 123 mEq/L, serum ozmolalitesi 256 mOsm/kg, idrar ozmolalitesi 440 mOsm/kg ve idrar sodyumu 8 mEq/L saptanıyor.',
        clues: ['masif asit ve 3+ pretibial ödem', 'idrar ozmolalitesi 440 mOsm/kg', 'idrar sodyumu 8 mEq/L'],
        management: 'Sıvı ve tuz kısıtlaması, loop diüretiği ve altta yatan kardiyak/hepatik patolojinin optimizasyonu',
        pearl: 'Total vücut sodyumu ve suyu artmıştır ancak su tutulumu sodyum tutulumundan daha fazla olduğu için dilüsyonel düşüklük görülür; idrar Na < 20 mEq/L olması böbrek perfüzyonunun azaldığını gösterir.',
        trapFalse: 'total vücut sodyumu azalmıştır ve tedavide ilk adım bol izotonik sodyum klorür infüzyonudur',
        trapHighlight: 'bol izotonik sodyum klorür infüzyonudur',
      },
    ],
  },

  // 14. Sekonder hipertansiyon nedenleri
  {
    branchId: 'dahiliye',
    subTopic: 'Sekonder Hipertansiyon Nedenleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Renovasküler hipertansiyon',
        target: 'Renal arter darlığına bağlı jukstaglomerüler aparat hipoperfüzyonu ve aşırı renin-anjiyotensin-aldosteron aktivasyonu',
        hallmark: 'Abdominal sistolik-diyastolik üfürüm, tek taraflı küçük böbrek, anjiyoda tespih tanesi görünümü ve ACEi ile kreatinin sıçraması',
        vignette:
          'Otuz iki yaşında sağlıklı kadın hasta 190/115 mmHg kan basıncı ve baş ağrısıyla başvuruyor. Fizik muayenede sağ paraumbilikal bölgede sistolik-diyastolik üfürüm duyuluyor. Başlanan enalapril sonrasında serum kreatinini 0.8 mg/dL’den 2.4 mg/dL’ye yükseliyor. Renal arter anjiyografisinde sağ ana arterde "tespih tanesi" darlıklar görülüyor.',
        clues: ['sağ paraumbilikal bölgede sistolik-diyastolik üfürüm', 'enalapril sonrasında serum kreatinini 0.8 mg/dL’den 2.4 mg/dL’ye', '"tespih tanesi" darlıklar'],
        management: 'Fibromüsküler displazide perkütan translüminal balon anjiyoplasti; aterosklerotik darlıkta yoğun medikal tedavi',
        pearl: 'Bilateral darlıkta veya tek böbrekte ACE inhibitörü/ARB verilmesi efferent arteriyolü dilate ederek GFH’yi hızla düşürür ve akut böbrek hasarına yol açar.',
        trapFalse: 'bilateral tutulumlu olgularda ACE inhibitörleri böbrek fonksiyonlarını koruyan en güvenli ilaçtır',
        trapHighlight: 'ACE inhibitörleri böbrek fonksiyonlarını koruyan en güvenli ilaçtır',
      },
      {
        name: 'Primer hiperaldosteronizm',
        target: 'Adrenal korteks zona glomerulozadan renin bağımsız otonom aldosteron hipersekresyonu (adenom veya bilateral hiperplazi)',
        hallmark: 'Dirençli hipertansiyon, açıklanamayan hipokalemi, metabolik alkaloz ve yüksek plazma aldosteron/renin oranı (> 20-30)',
        vignette:
          'Kırk dört yaşında üç farklı antihipertansife rağmen kan basıncı 175/105 mmHg seyreden erkek hastada serum potasyumu 2.8 mEq/L, plazma aldosteronu 32 ng/dL ve plazma renin aktivitesi 0.2 ng/mL/saat ölçülüyor. Tuz yükleme testi ile aldosteron baskılanmıyor; BT’de sol sürrenalde 1.5 cm adenom görülüyor.',
        clues: ['üç farklı antihipertansife rağmen', 'potasyumu 2.8 mEq/L', 'aldosteronu 32 ng/dL ve plazma renin aktivitesi 0.2'],
        management: 'Tek taraflı adenomda laparoskopik adrenalektomi; bilateral hiperplazide spironolakton veya eplerenon',
        pearl: 'Adrenal venöz örnekleme tek taraflı adenom ile bilateral idiyopatik hiperplaziyi ayırmada altın standarttır; hipervolemiye rağmen kaçış fenomeni nedeniyle ödem beklenmez.',
        trapFalse: 'plazma renin aktivitesi belirgin yüksek bulunur ve belirgin pretibial ödem eşlik eder',
        trapHighlight: 'plazma renin aktivitesi belirgin yüksek bulunur ve belirgin pretibial ödem',
      },
      {
        name: 'Feokromositoma',
        target: 'Adrenal medulla kromaffin hücrelerinden aşırı katekolamin (epinefrin ve norepinefrin) salınımı',
        hallmark: 'Paroksismal baş ağrısı, terleme ve çarpıntı triyadı; yüksek plazma serbest metanefrinleri ve 24 saatlik idrar metanefrini',
        vignette:
          'Otuz dokuz yaşında kadın hasta ani başlayan zonklayıcı baş ağrısı, yoğun terleme, solukluk ve çarpıntı atakları sırasında ölçülen 230/130 mmHg tansiyon ile başvuruyor. 24 saatlik idrarda fraksiyone metanefrin ve normetanefrin düzeyleri normalin 6 katı bulunuyor. Batın MR’da T2 ağırlıklı kesitte sağ sürrenalde çok parlak kitle görülüyor.',
        clues: ['zonklayıcı baş ağrısı, yoğun terleme, solukluk ve çarpıntı', 'idrarda fraksiyone metanefrin', 'T2 ağırlıklı kesitte sağ sürrenalde çok parlak kitle'],
        management: 'Cerrahi rezeksiyon öncesi mutlaka önce alfa-bloker (fenoksibenzamin), ardından beta-bloker ile hazırlık',
        pearl: 'Önce alfa blokaj yapılmadan beta-bloker verilmesi, beta-2 vazodilatasyonu bloke edip alfa-1 vazokonstriksiyonu karşılanmamış bırakarak hipertansif krizi tetikler.',
        trapFalse: 'operasyon öncesi taşikardiyi kontrol etmek için ilk olarak yüksek doz propranolol başlanmalıdır',
        trapHighlight: 'ilk olarak yüksek doz propranolol başlanmalıdır',
      },
      {
        name: 'Cushing sendromu',
        target: 'Kronik aşırı glukokortikoid maruziyetine bağlı mineralokortikoid reseptör aktivasyonu ve vasküler katekolamin duyarlılığı artışı',
        hallmark: 'Santral obezite, aydede yüzü, mor strialar, proksimal kas güçsüzlüğü ve 1 mg deksametazon ile baskılanmayan kortizol',
        vignette:
          'Otuz altı yaşında kadın hasta son 1 yılda yüzünde yuvarlaklaşma, ensede yağ birikimi, karın cildinde geniş morumsu çatlaklar, hirsutizm ve merdiven çıkamama şikayetleriyle başvuruyor. Kan basıncı 165/100 mmHg, açlık glukozu 148 mg/dL bulunuyor. Gece 1 mg deksametazon sonrası sabah kortizolü 18 mcg/dL ölçülüyor.',
        clues: ['karın cildinde geniş morumsu çatlaklar', 'merdiven çıkamama', '1 mg deksametazon sonrası sabah kortizolü 18 mcg/dL'],
        management: 'Tarama sonrası (1 mg DST, gece tükürük veya 24 saat idrar serbest kortizol) ACTH düzeyiyle lokalizasyon ve cerrahi rezeksiyon',
        pearl: 'Ekzojen steroid alımı ekarte edildikten sonra tanı konursa ilk ayırıcı basamak plazma ACTH ölçümüdür; düşükse adrenal neden, normal/yüksekse hipofizer veya ektopik kaynak araştırılır.',
        trapFalse: 'gece yarısı tükürük kortizolü baskılanmış olup ilk basamakta direkt hipofiz MR çekilmelidir',
        trapHighlight: 'gece yarısı tükürük kortizolü baskılanmış olup',
      },
      {
        name: 'Aort koarktasyonu',
        target: 'Duktus arteriozus insersiyonu bölgesinde aort lümeninin doğumsal daralması ve üst vücutta basınç artışı',
        hallmark: 'Üst ekstremitede hipertansiyon, zayıf/gecikmiş femoral nabız, kostalarda alt kenar çentiklenmesi ve sırt üfürümü',
        vignette:
          'On sekiz yaşında erkek hasta baş ağrısı ve yürümekle bacaklarda çabuk yorulma ile başvuruyor. Sağ kolda kan basıncı 175/95 mmHg, bacakta ise 95/65 mmHg ölçülüyor; femoral nabızlar radyal nabza göre zayıf ve gecikmiş alınıyor. Akciğer grafisinde 3-8. kostaların alt kenarlarında çentiklenmeler ve "3 işareti" görülüyor.',
        clues: ['Sağ kolda kan basıncı 175/95 mmHg, bacakta ise 95/65 mmHg', 'femoral nabızlar radyal nabza göre zayıf ve gecikmiş', 'kostaların alt kenarlarında çentiklenmeler'],
        management: 'BT anjiyografi/ekokardiyografi ile darlığın değerlendirilmesi ve endovasküler stent veya cerrahi onarım',
        pearl: 'En sık biküspit aort kapağı ve Turner sendromu ile birliktelik gösterir; interkostal kollateraller nedeniyle kostaların alt kenarlarında çentiklenme gelişir ve Berry anevrizması riski artar.',
        trapFalse: 'kollateral dolaşım nedeniyle alt ekstremite kan basıncı üst ekstremiteden belirgin yüksektir',
        trapHighlight: 'alt ekstremite kan basıncı üst ekstremiteden belirgin yüksektir',
      },
    ],
  },

  // 15. Kronik böbrek hastalığı ve diyaliz endikasyonları
  {
    branchId: 'dahiliye',
    subTopic: 'Kronik Böbrek Hastalığı Komplikasyonları ve Diyaliz',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Üremik perikardit',
        target: 'İleri böbrek yetmezliğinde biriken üremik toksinlerin perikardiyal serozal yüzeyde fibrinöz inflamasyon başlatması',
        hallmark: 'Kaba perikardiyal sürtünme sesi, klasik yaygın ST elevasyonunun olmaması ve acil diyaliz endikasyonu',
        vignette:
          'Altmış yaşında evre 5 böbrek yetmezliği olan ve diyalize girmeyi reddeden hastada BUN 135 mg/dL, kreatinin 9.4 mg/dL ölçülüyor. Hasta nefes almakla artan göğüs ağrısı tarifliyor. Oskültasyonda sol sternal kenarda üç fazlı sürtünme sesi duyuluyor ancak EKG’de tipik yaygın ST elevasyonu görülmüyor.',
        clues: ['BUN 135 mg/dL, kreatinin 9.4 mg/dL', 'üç fazlı sürtünme sesi', 'EKG’de tipik yaygın ST elevasyonu görülmüyor'],
        management: 'Acil hemodiyaliz başlatılması ve kanama/tamponad riski nedeniyle sistemik heparinsiz diyaliz uygulanması',
        pearl: 'Diğer akut perikarditlerin aksine epikardiyal miyosit hasarı az olduğu için EKG’de yaygın ST yükselmesi genellikle görülmez ve tek başına mutlak acil diyaliz endikasyonudur.',
        trapFalse: 'hemodiyaliz sırasında yüksek doz heparin kullanımı efüzyonun pıhtılaşmasını önlemek için zorunludur',
        trapHighlight: 'yüksek doz heparin kullanımı efüzyonun pıhtılaşmasını önlemek için zorunludur',
      },
      {
        name: 'Sekonder hiperparatiroidizm',
        target: 'GFH azalmasına bağlı fosfat retansiyonu, FGF-23 artışı ve 1,25-(OH)2D3 sentez azalmasının paratiroid bezini uyarması',
        hallmark: 'Hiperfosfatemi, hipokalsemi, yüksek PTH ve grafide subperiosteal kemik rezorpsiyonu / rugger-jersey omurga',
        vignette:
          'Ellidört yaşında 4 yıldır hemodiyaliz programında olan hastada yaygın kemik ağrıları ve kaşıntı gelişiyor. Laboratuvarda kalsiyum 8.1 mg/dL, fosfor 7.4 mg/dL, ALP 420 U/L ve intakt PTH 980 pg/mL bulunuyor. El grafisinde orta falanksların radyal yüzünde subperiosteal rezorpsiyon izleniyor.',
        clues: ['fosfor 7.4 mg/dL', 'intakt PTH 980 pg/mL', 'orta falanksların radyal yüzünde subperiosteal rezorpsiyon'],
        management: 'Diyette fosfor kısıtlaması, kalsiyumsuz fosfor bağlayıcılar (sevelamer), aktif D vitamini (kalsitriol) ve sinakalset',
        pearl: 'Kalsiyum x fosfor çarpımının > 55-60 olması metastatik vasküler ve yumuşak doku kalsifikasyonlarına (kalsifilaksi dahil) yol açar.',
        trapFalse: 'renal 1-alfa hidroksilaz aktivitesi arttığı için hiperkalsemi ve hipofosfatemi beklenir',
        trapHighlight: 'hiperkalsemi ve hipofosfatemi beklenir',
      },
      {
        name: 'Üremik kanama diyatezi',
        target: 'Guanidinosüksinik asit ve nitrik oksit artışına bağlı trombosit adezivite ve agregasyonunun bozulması',
        hallmark: 'Normal trombosit sayısı, PT ve aPTT’ye rağmen uzamış kanama zamanı ve mukokütanöz sızıntı tarzında kanama',
        vignette:
          'Altmış altı yaşında ileri evre böbrek yetmezlikli hastada diş eti kanaması ve kateter giriş yerinden durmayan sızıntı görülüyor. Trombosit sayısı 210.000/mm3, INR 1.0, aPTT 29 sn bulunuyor ancak kanama zamanı 14 dakika ölçülüyor.',
        clues: ['Trombosit sayısı 210.000/mm3, INR 1.0, aPTT 29 sn', 'kanama zamanı 14 dakika', 'kateter giriş yerinden durmayan sızıntı'],
        management: 'Akut kanama veya invaziv girişim öncesi IV/subkütan desmopressin (DDAVP), hemodiyaliz, kriyopresipitat veya konjuge östrojen',
        pearl: 'DDAVP endotelden vWF ve Faktör VIII salınımını artırarak trombosit agregasyonunu dakikalar içinde geçici olarak düzeltir; trombosit transfüzyonu verilen trombositler de üremik ortamda disfonksiyone olacağı için etkisizdir.',
        trapFalse: 'tedavide ilk seçenek trombosit süspansiyonu ve taze donmuş plazma transfüzyonudur',
        trapHighlight: 'trombosit süspansiyonu ve taze donmuş plazma transfüzyonudur',
      },
      {
        name: 'Renal anemi',
        target: 'Peritübüler interstisyel fibroblastların harabiyetine bağlı eritropoetin üretiminin azalması ve hepsidin artışı',
        hallmark: 'Düşük retikülositli normokrom normositer anemi ve serum kreatinini > 2 mg/dL ile orantılı hemoglobin düşüşü',
        vignette:
          'Elli dokuz yaşında GFH 18 mL/dk olan erkek hasta halsizlik ve efor dispnesi ile başvuruyor. Hemoglobin 8.4 g/dL, MCV 89 fL, düzeltilmiş retikülosit %0.4, ferritin 240 ng/mL ve transferrin satürasyonu %26 bulunuyor. Dışkıda gizli kan negatif saptanıyor.',
        clues: ['GFH 18 mL/dk', 'Hemoglobin 8.4 g/dL, MCV 89 fL', 'ferritin 240 ng/mL ve transferrin satürasyonu %26'],
        management: 'Demir depoları (ferritin > 100-200, TSAT > %20) yeterli hale getirildikten sonra eritropoetin stimülan ajan (epoetin/darbepoetin) başlanması',
        pearl: 'Hedef hemoglobin 10-11.5 g/dL aralığıdır; 13 g/dL üzerine çıkarmaya çalışmak hipertansiyon, AV fistül trombozu ve kardiyovasküler mortaliteyi artırır.',
        trapFalse: 'hedef hemoglobin değerinin 14 g/dL üzerine çıkarılması kardiyovasküler olayları azaltır',
        trapHighlight: '14 g/dL üzerine çıkarılması kardiyovasküler olayları azaltır',
      },
      {
        name: 'Dirençli hiperkalemi',
        target: 'Böbreğin distal potasyum ekskresyon kapasitesinin kaybına bağlı ekstrasellüler potasyum birikimi ve miyokardiyal depolarizasyon',
        hallmark: 'EKG’de sivri T dalgaları, PR uzaması, P dalgası kaybı, geniş QRS ve tıbbi tedaviye yanıtsız oligüride acil diyaliz gerekliliği',
        vignette:
          'Altmış dört yaşında oligürik ileri böbrek yetmezliği olan hastada serum potasyumu 7.3 mEq/L saptanıyor. EKG’de sivri uzun T dalgaları, P dalgalarının silindiği ve QRS kompleksinin genişleyerek sinüs dalgasına yaklaştığı görülüyor. Hastaya IV kalsiyum glukonat, insülin-dekstroz ve nebulize salbutamol uygulanıyor ancak potasyum düşmüyor.',
        clues: ['serum potasyumu 7.3 mEq/L', 'sivri uzun T dalgaları', 'QRS kompleksinin genişleyerek'],
        management: 'İlk adım IV kalsiyum glukonat ile kalp membran stabilizasyonu, ardından insülin+dekstroz ve kesin çözüm için acil hemodiyaliz',
        pearl: 'Kalsiyum glukonat serum potasyumunu düşürmez ancak saniyeler-dakikalar içinde miyokardiyal eşik potansiyeli düzelterek ventriküler fibrilasyonu önler.',
        trapFalse: 'intravenöz kalsiyum glukonat potasyumu hücre içine sokarak serum potasyumunu hızla düşürür',
        trapHighlight: 'potasyumu hücre içine sokarak serum potasyumunu hızla düşürür',
      },
    ],
  },

  // 16. Santral sinir sistemi enfeksiyonları BOS bulguları
  {
    branchId: 'dahiliye',
    subTopic: 'Santral Sinir Sistemi Enfeksiyonları BOS Bulguları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Akut bakteriyel menenjit',
        target: 'S. pneumoniae veya N. meningitidis’in subaraknoid aralıkta yoğun nötrofilik inflamasyon başlatması',
        hallmark: 'Bulanık BOS, > 1000/mm3 nötrofil hakimiyeti, çok düşük glukoz (< 40 mg/dL, BOS/kan < 0.4) ve yüksek protein',
        vignette:
          'Yirmi dört yaşında erkek hasta 12 saat içinde gelişen 39.5°C ateş, şiddetli baş ağrısı, ense sertliği ve konfüzyonla acile getiriliyor. Lomber ponksiyonda basınç 340 mmH2O, bulanık BOS’ta 3200/mm3 hücre (%92 PMNL), protein 280 mg/dL ve BOS glukozu 18 mg/dL (eş zamanlı kan şekeri 110) ölçülüyor.',
        clues: ['3200/mm3 hücre (%92 PMNL)', 'protein 280 mg/dL', 'BOS glukozu 18 mg/dL'],
        management: 'Kan kültürleri alındıktan hemen sonra deksametazon ile birlikte IV seftriakson + vankomisin (> 50 yaşta ampisilin eklenir)',
        pearl: 'İmmünokompetan erişkinde en sık etken S. pneumoniae’dir; 50 yaş üzeri veya immünsüprese hastada Listeria monocytogenes için mutlaka ampisilin eklenir.',
        trapFalse: 'BOS glukozu genellikle normal veya hafif yüksek bulunur ve lenfosit hakimiyeti tipiktir',
        trapHighlight: 'BOS glukozu genellikle normal veya hafif yüksek bulunur ve lenfosit hakimiyeti',
      },
      {
        name: 'Viral menenjit',
        target: 'Enterovirüsler başta olmak üzere virüslerin leptomeninkslerde kendiliğinden sınırlanan lenfositik inflamasyonu',
        hallmark: 'Berrak BOS, 50-500/mm3 lenfosit hakimiyeti, NORMAL BOS glukozu ve hafif artmış protein (< 100 mg/dL)',
        vignette:
          'On dokuz yaşında yaz sonunda baş ağrısı, fotofobi, 38.3°C ateş ve hafif ense sertliği ile başvuran hastanın bilinci tamamen açık bulunuyor. BOS incelemesinde berrak sıvıda 180/mm3 hücre (%88 lenfosit), protein 65 mg/dL ve glukoz 68 mg/dL (kan şekeri 98 mg/dL) ölçülüyor.',
        clues: ['yaz sonunda', '180/mm3 hücre (%88 lenfosit)', 'glukoz 68 mg/dL (kan şekeri 98 mg/dL)'],
        management: 'Bakteriyel nedenler PCR/kültür ile dışlanana kadar izlem ve hastanın klinik durumuna göre destek tedavisi',
        pearl: 'En sık etken enterovirüslerdir (yaz-sonbahar ayları); glukozun normal olması ve bilinç bozukluğu/fokal nörolojik bulgu yokluğu tanıyı destekler.',
        trapFalse: 'BOS glukozunun kan glukozunun %30’unun altına düşmesi en önemli ayırt edici özelliğidir',
        trapHighlight: 'BOS glukozunun kan glukozunun %30’unun altına düşmesi',
      },
      {
        name: 'Tüberküloz menenjiti',
        target: 'Rich odağının subaraknoid boşluğa açılmasıyla beyin tabanında yoğun jelatinöz baziler eksüda oluşması',
        hallmark: 'Lenfositik BOS, belirgin yüksek protein (> 200-500 mg/dL), düşük glukoz, örümcek ağı pıhtısı ve kraniyal sinir felçleri',
        vignette:
          'Otuz yedi yaşında 3 haftadır süren ateş, kilo kaybı, baş ağrısı ve son günlerde gelişen çift görme (6. kraniyal sinir felci) ile başvuran hastanın BOS’unda 240 lenfosit, protein 460 mg/dL ve glukoz 22 mg/dL saptanıyor. Tüpte bekletilen BOS’ta yüzeyden dibe uzanan ince fibrin ağı oluşuyor.',
        clues: ['6. kraniyal sinir felci', 'protein 460 mg/dL ve glukoz 22 mg/dL', 'ince fibrin ağı'],
        management: 'Dörtlü antitüberküloz tedaviye ek olarak nörolojik sekeli azaltmak için ilk günden kortikosteroid (deksametazon)',
        pearl: 'Özellikle 3., 4. ve 6. kraniyal sinirleri tutan baziler menenjit ve hidrosefali yapar; yüksek protein + düşük glukoz + lenfositoz üçlüsünde daima akla gelmelidir.',
        trapFalse: 'kortikosteroid eklenmesi tedavide kesinlikle kontrendikedir ve mortaliteyi artırır',
        trapHighlight: 'kortikosteroid eklenmesi tedavide kesinlikle kontrendikedir',
      },
      {
        name: 'Kriptokokal menenjit',
        target: 'Kapsüllü mayanın HIV/AIDS hastalarında subaraknoid granülasyonları tıkayarak BOS emilimini bozması',
        hallmark: 'Çok yüksek BOS açılış basıncı, az hücre yanıtı, Çini mürekkebi ile halolu maya ve yüksek duyarlılıklı CrAg pozitifliği',
        vignette:
          'Otuz beş yaşında CD4 sayısı 42/mm3 olan HIV pozitif hasta 2 haftadır artan şiddetli baş ağrısı ve görme bulanıklığı ile başvuruyor. LP’de açılış basıncı 410 mmH2O ölçülürken, BOS’ta sadece 15 lenfosit, hafif düşük glukoz ve Çini mürekkebi boyamasında kalın refraktil kapsüllü tomurcuklanan mayalar saptanıyor.',
        clues: ['CD4 sayısı 42/mm3', 'açılış basıncı 410 mmH2O', 'kalın refraktil kapsüllü tomurcuklanan mayalar'],
        management: 'Lipozomal amfoterisin B artı flusitozin indüksiyonu, ardından flukonazol idamesi ve kafa içi basıncı düşürmek için seri LP',
        pearl: 'En duyarlı ve hızlı tanı testi BOS/serum kriptokokal antijen (CrAg) testidir; hücre sayısının düşük olabilmesi bağışıklık yetmezliği nedeniyledir.',
        trapFalse: 'ilk basamak indüksiyon tedavisinde oral itrakonazol monoterapisi yeterlidir',
        trapHighlight: 'oral itrakonazol monoterapisi yeterlidir',
      },
      {
        name: 'HSV ensefaliti',
        target: 'Virüsün olfaktor veya trigeminal yollarla özellikle temporal ve inferior frontal loblarda hemorajik nekroz oluşturması',
        hallmark: 'Ateş + kişilik değişikliği/nöbet, BOS’ta lenfosit + eritrosit artışı, MR’da temporal lob tutulumu ve periyodik lateralize diken dalgalar',
        vignette:
          'Kırk üç yaşında erkek hasta 2 gündür süren yüksek ateş, garip davranışlar, koku halüsinasyonları ve jeneralize nöbetle getiriliyor. BOS’ta 95 lenfosit, 140 eritrosit, protein 110 mg/dL ve normal glukoz saptanıyor. Kraniyal MR’da sol temporal lobda ödem ve hemorajik sinyal değişikliği görülüyor.',
        clues: ['garip davranışlar, koku halüsinasyonları', '95 lenfosit, 140 eritrosit', 'sol temporal lobda ödem'],
        management: 'BOS HSV-PCR sonucu beklenmeden derhal yüksek doz intravenöz asiklovir başlanması',
        pearl: 'Sporadik ölümcül ensefalitin en sık nedenidir; hemorajik nekroz nedeniyle travmatik olmayan LP’de eritrosit ve ksantokromi bulunması tipiktir.',
        trapFalse: 'BOS PCR sonucu çıkana kadar antiviral tedavi başlanmamalıdır',
        trapHighlight: 'BOS PCR sonucu çıkana kadar antiviral tedavi başlanmamalıdır',
      },
    ],
  },

  // 17. Ateşli ve vektör kaynaklı enfeksiyonlar
  {
    branchId: 'dahiliye',
    subTopic: 'Ateşli ve Vektör Kaynaklı Enfeksiyonlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kırım-Kongo kanamalı ateşi',
        target: 'Nairovirüsün endotel hücreleri ve makrofajları enfekte ederek sitokin fırtınası ve koagülopati tetiklemesi',
        hallmark: 'Kene teması sonrası ateş, miyalji, trombositopeni, lökopeni, yüksek AST/ALT/CK/LDH ve mukozal kanamalar',
        vignette:
          'Kırk beş yaşında hayvancılıkla uğraşan erkek hasta 4 gün önce bacağından kene çıkardıktan sonra başlayan yüksek ateş, yaygın kas ağrısı, diş eti kanaması ve ekimozlarla getiriliyor. Laboratuvarda lökosit 1900/mm3, trombosit 22.000/mm3, AST 640 U/L, ALT 420 U/L, CK 1800 U/L ve uzamış aPTT saptanıyor.',
        clues: ['kene çıkardıktan sonra', 'trombosit 22.000/mm3, AST 640 U/L', 'CK 1800 U/L'],
        management: 'Sıkı bariyer izolasyonu, kan ürünü/sıvı replasmanı ve seçilmiş erken olgularda ribavirin değerlendirilmesi',
        pearl: 'Hyalomma cinsi kenelerle bulaşır; erken dönemde lökopeni, trombositopeni ve transaminaz-CK-LDH yüksekliği çok tipiktir, aspirin ve IM enjeksiyondan kaçınılır.',
        trapFalse: 'etken bakteriyel olduğundan erken dönemde doksisiklin tedavisi tamamen kür sağlar',
        trapHighlight: 'etken bakteriyel olduğundan erken dönemde doksisiklin tedavisi tamamen kür sağlar',
      },
      {
        name: 'Bruselloz',
        target: 'Fakültatif intrasellüler gram-negatif kokobasilin retiküloendotelyal sistem makrofajlarında çoğalması',
        hallmark: 'Pastörize edilmemiş süt/peynir öyküsü, ondülan ateş, sakroileit, hepatosplenomegali ve Wright seroaglütinasyon pozitifliği',
        vignette:
          'Otuz sekiz yaşında köyde taze koyun peyniri tüketen kadın hasta 4 haftadır akşamları yükselen ve sabaha karşı terlemeyle düşen ateş, bel ve kalça ağrısı ile başvuruyor. Muayenede hepatosplenomegali ve sağ sakroiliak eklem hassasiyeti mevcut. Standart tüp aglütinasyon titresi 1/640 saptanıyor.',
        clues: ['taze koyun peyniri tüketen', 'akşamları yükselen ve sabaha karşı terlemeyle düşen ateş', 'sağ sakroiliak eklem hassasiyeti'],
        management: 'Doksisiklin + rifampisin (6 hafta) veya doksisiklin + streptomisin/gentamisin kombinasyonu; nöro/endokarditte üçlü tedavi',
        pearl: 'Osteoartiküler tutulum en sık komplikasyonudur (özellikle sakroileit ve spondilodiskit); tek ajan tedavide relaps oranı çok yüksek olduğu için mutlaka kombine edilir.',
        trapFalse: 'tek başına siprofloksasin ile 7 günlük tedavi relaps riski olmadan yeterlidir',
        trapHighlight: 'tek başına siprofloksasin ile 7 günlük tedavi',
      },
      {
        name: 'Tifo',
        target: 'Fekal-oral alınan Salmonella Typhi’nin Peyer plaklarında çoğalıp makrofajlar içinde sistemik yayılımı',
        hallmark: 'Basamak tarzında yükselen ateş, rölatif bradikardi, gövdede rose spot döküntüsü ve lökopeni',
        vignette:
          'Yirmi altı yaşında hijyen koşullarının kötü olduğu bir bölgeden dönen erkek hasta 10 gündür giderek artan ateş, baş ağrısı, kabızlık ve karın ağrısı ile başvuruyor. Ateşi 39.8°C iken nabzı 78/dk ölçülüyor; göbek çevresinde soluk pembe basmakla solan makülopapüler döküntüler ve lökopeni saptanıyor.',
        clues: ['Ateşi 39.8°C iken nabzı 78/dk', 'göbek çevresinde soluk pembe basmakla solan makülopapüler döküntüler', 'lökopeni'],
        management: 'İlk hafta kan kültürünün alınması ve seftriakson veya azitromisin tedavisi',
        pearl: 'İlk hafta en yüksek duyarlılık kan kültüründe, 2-3. haftalarda dışkı/idrar kültüründedir; tüm hastalık boyunca en duyarlı kültür kemik iliğidir. 3. haftada ileal perforasyon riski artar.',
        trapFalse: 'hastalığın birinci haftasında tanı için en duyarlı materyal dışkı kültürüdür',
        trapHighlight: 'birinci haftasında tanı için en duyarlı materyal dışkı kültürüdür',
      },
      {
        name: 'Sıtma',
        target: 'Dişi Anofel sivrisineğiyle bulaşan Plasmodium parazitinin karaciğer şizogonisi sonrası eritrositleri parçalaması',
        hallmark: 'Periyodik ateş-titreme nöbetleri, hemolitik anemi, splenomegali ve kalın/ince damla yaymada taşlı yüzük trofozoitler',
        vignette:
          'Otuz bir yaşında Sahra Altı Afrika seyahatinden 2 hafta önce dönen erkek hasta 48 saatte bir titremeyle yükselen 40°C ateş, baş ağrısı ve sarılık ile acile geliyor. Hemoglobin 9.2 g/dL, trombosit 65.000/mm3, indirekt bilirubin 3.6 mg/dL bulunuyor. Periferik yaymada tek bir eritrosit içinde birden fazla ince halka formunda parazit ve muz şeklinde gametosit görülüyor.',
        clues: ['Sahra Altı Afrika seyahatinden', 'eritrosit içinde birden fazla ince halka formunda parazit', 'muz şeklinde gametosit'],
        management: 'Ağır olgularda IV artesunat; komplike olmayan P. falciparum’da artemisin bazlı kombinasyon; vivax/ovale hipnozoitleri için primakin',
        pearl: 'Eritrosit içinde çoklu yüzük (ring) formu ve muz/hilal şeklinde gametositler P. falciparum için karakteristiktir; P. vivax ve P. ovale’de hipnozoit eradikasyonu için G6PD kontrolü sonrası primakin eklenir.',
        trapFalse: 'klorokin direnci bulunmadığından P. falciparum olgularında klorokin tüm dünyada ilk tercihtir',
        trapHighlight: 'P. falciparum olgularında klorokin tüm dünyada ilk tercihtir',
      },
      {
        name: 'Leptospiroz',
        target: 'Kemirgen idrarıyla kontamine su veya topraktan sağlam/sıyrıklı deriye giren spiroketlerin vaskülit oluşturması',
        hallmark: 'Ateş, şiddetli baldır ağrısı, pürülan olmayan konjonktival sufizyon, sarılık ve akut böbrek hasarı (Weil hastalığı)',
        vignette:
          'Kırk yaşında pirinç tarlasında çalışan erkek hasta yüksek ateş, göz aklarında belirgin kızarıklık (akıntısız), şiddetli baldır ağrıları ve sarılıkla başvuruyor. Laboratuvarda direkt bilirubin 8.5 mg/dL, kreatinin 3.4 mg/dL, hafif transaminaz yüksekliği, yüksek CK ve hipokalemi saptanıyor.',
        clues: ['pirinç tarlasında çalışan', 'göz aklarında belirgin kızarıklık (akıntısız)', 'şiddetli baldır ağrıları ve sarılık'],
        management: 'Hafif olgularda doksisiklin/amoksisilin; ağır ikterohemorajik formda intravenöz penisilin G veya seftriakson',
        pearl: 'Sarılık, böbrek yetmezliği ve hemorajik diyatez birlikteliği ağır formu (Weil) tanımlar; konjonktival sufizyon ve yüksek direkt bilirubine karşın ılımlı transaminaz artışı tipiktir.',
        trapFalse: 'transaminaz düzeyleri tipik olarak 3000 U/L üzerine çıkar ve bilirubin normal kalır',
        trapHighlight: 'transaminaz düzeyleri tipik olarak 3000 U/L üzerine çıkar ve bilirubin normal kalır',
      },
    ],
  },

  // 18. Febril nötropeni ve fırsatçı enfeksiyonlar
  {
    branchId: 'dahiliye',
    subTopic: 'Febril Nötropeni ve Fırsatçı Enfeksiyonlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'İnvaziv pulmoner aspergilloz',
        target: 'Uzamış derin nötropenide inhale küf konidyalarının anjiyoinvaziv tromboz ve hemorajik enfarkt oluşturması',
        hallmark: '45 derecelik açıyla dikotom dallanan septalı hifler, BT’de halo/hava hilal işareti ve pozitif galaktomannan antijeni',
        vignette:
          'Kırk dört yaşında akut miyeloid lösemi kemoterapisi sonrası 16 gündür mutlak nötrofil sayısı < 100/mm3 seyreden hastada geniş spektrumlu antibiyotiklere yanıtsız ateş, plöritik göğüs ağrısı ve hemoptizi gelişiyor. Toraks BT’de etrafı buzlu cam halesi ile çevrili nodül (halo işareti) ve serum galaktomannan pozitifliği saptanıyor.',
        clues: ['16 gündür mutlak nötrofil sayısı < 100/mm3', 'etrafı buzlu cam halesi ile çevrili nodül', 'galaktomannan pozitifliği'],
        management: 'Birinci basamak antifungali olarak vorikonazol veya izavukonazol başlanması',
        pearl: 'Nötropeni düzelirken nekrotik kavite içinde hava hilal (air-crescent) işareti ortaya çıkar; flukonazol ve ekinokandinler tek başına ilk basamak olarak tercih edilmez.',
        trapFalse: 'tedavide ilk seçenek yüksek doz flukonazol olup hifler septasız ve 90 derece dallanır',
        trapHighlight: 'ilk seçenek yüksek doz flukonazol olup hifler septasız ve 90 derece dallanır',
      },
      {
        name: 'Pneumocystis jirovecii pnömonisi',
        target: 'CD4+ T lenfosit eksikliğinde alveol yüzeyinde çoğalan atipik mantarın alveoler-kapiller gaz değişimini bozması',
        hallmark: 'HIV’de (CD4 < 200) subakut dispne, yüksek LDH, bilateral perihiler buzlu cam infiltrasyonu ve gümüş boyasıyla kistler',
        vignette:
          'Otuz altı yaşında antiretroviral tedavi almayan ve CD4 sayısı 85/mm3 olan erkek hasta 3 haftadır artan kuru öksürük ve eforla derinleşen nefes darlığı ile başvuruyor. Dinlemede akciğerler temiz olmasına karşın oda havasında PaO2 56 mmHg, LDH 620 U/L ölçülüyor. YÇBT’de bilateral diffüz buzlu cam görünümü izleniyor.',
        clues: ['CD4 sayısı 85/mm3', 'PaO2 56 mmHg, LDH 620 U/L', 'bilateral diffüz buzlu cam görünümü'],
        management: 'Yüksek doz trimetoprim-sülfametoksazol (TMP-SMX) ve PaO2 < 70 mmHg veya A-a gradienti >= 35 ise prednizon eklenmesi',
        pearl: 'Hücre zarında ergosterol yerine kolesterol içerdiği için amfoterisin B ve azol grubu antifungaller tamamen etkisizdir; CD4 < 200 olgularında TMP-SMX ile primer profilaksi gerekir.',
        trapFalse: 'tedavisinde amfoterisin B veya vorikonazol ilk seçenek antifungallerdir',
        trapHighlight: 'amfoterisin B veya vorikonazol ilk seçenek antifungallerdir',
      },
      {
        name: 'Mukormikoz',
        target: 'Diyabetik ketoasidoz veya deferoksamin tedavisinde asidoz ve serbest demir artışının küfün anjiyoinvazyonunu kolaylaştırması',
        hallmark: 'Siyah nekrotik nazal/palatal eskar, 90 derece dik açıyla dallanan geniş septasız hifler ve hızlı rinoserebral yayılım',
        vignette:
          'Ellibeş yaşında kontrolsüz diyabet ve ketoasidozla yatan hastada tek taraflı periorbital şişlik, proptozis, kanlı burun akıntısı ve sert damakta siyah nekrotik ülser gelişiyor. Biyopside damar duvarlarını işgal eden geniş, şerit benzeri, septasız ve 90 derecelik açılarla dallanan hifler görülüyor.',
        clues: ['diyabet ve ketoasidoz', 'sert damakta siyah nekrotik ülser', 'septasız ve 90 derecelik açılarla dallanan hifler'],
        management: 'Acil agresif cerrahi debridman, ketoasidozun düzeltilmesi ve yüksek doz lipozomal amfoterisin B (idamede posakonazol/izavukonazol)',
        pearl: 'Vorikonazole ve ekinokandinlere tamamen dirençlidir; bu nedenle nötropenik hastada vorikonazol profilaksisi altında gelişen sinüs enfeksiyonunda mutlaka düşünülmelidir.',
        trapFalse: 'vorikonazol bu enfeksiyonun tedavisinde en etkili birinci basamak ajandır',
        trapHighlight: 'vorikonazol bu enfeksiyonun tedavisinde en etkili birinci basamak ajandır',
      },
      {
        name: 'Kandidemi',
        target: 'Santral venöz kateter biyofilm oluşumu veya nötropenide gastrointestinal mukozadan hematojen maya yayılımı',
        hallmark: 'Kan kültüründe tomurcuklanan maya/psödohif, göz dibinde beyaz pamuksu korioretinit ve endokardit riski',
        vignette:
          'Altmış iki yaşında intestinal perforasyon sonrası yoğun bakımda santral venöz kateterle total parenteral nütrisyon alan hastada antibiyotiklere rağmen ateş gelişiyor. Fundoskopide retinada beyaz kabarık eksüdatif odaklar, kan kültüründe ise germ tüp pozitif mayalar ürüyor.',
        clues: ['santral venöz kateterle total parenteral nütrisyon', 'retinada beyaz kabarık eksüdatif odaklar', 'germ tüp pozitif mayalar'],
        management: 'Santral kateterin mümkünse çekilmesi ve ilk basamak olarak ekinokandin (kaspofungin, mikafungin veya anidulafungin) başlanması',
        pearl: 'Tüm olgularda oküler tutulumu (endoftalmi) dışlamak için mutlaka dilate göz dibi muayenesi yapılmalıdır; ekinokandinler ilk tercih olup göz/SSS tutulumunda flukonazol veya lipozomal amfoterisin B seçilir.',
        trapFalse: 'günümüzde tüm invaziv olgularda santral kateterin korunması önerilir ve göz muayenesi gerekmez',
        trapHighlight: 'santral kateterin korunması önerilir ve göz muayenesi gerekmez',
      },
      {
        name: 'Sitomegalovirüs pnömonisi',
        target: 'Allojenik kök hücre veya solid organ nakli sonrası hücresel immünite baskılanmasına bağlı viral reaktivasyon',
        hallmark: 'Bilateral interstisyel infiltrasyon, dokuda bazofilik intranükleer baykuş gözü inklüzyonları ve kantitatif PCR yüksekliği',
        vignette:
          'Kırk bir yaşında allojenik hematopoetik kök hücre naklinden 60 gün sonra yüksek ateş, kuru öksürük, hipoksemi ve lökopeni gelişen hastanın akciğer grafisinde diffüz bilateral interstisyel infiltratlar görülüyor. BAL sitolojisinde sitomegali gösteren hücre içinde etrafı halolu büyük intranükleer inklüzyon cisimciği saptanıyor.',
        clues: ['allojenik hematopoetik kök hücre naklinden 60 gün sonra', 'diffüz bilateral interstisyel infiltratlar', 'etrafı halolu büyük intranükleer inklüzyon cisimciği'],
        management: 'İntravenöz gansiklovir (veya valgansiklovir) tedavisi ve dirençli olgularda foskarnet / maribavir',
        pearl: 'Asiklovir bu virüse karşı etkisizdir çünkü viral timidin kinaz enzimi taşımaz (UL97 protein kinaz ile fosforile olan gansiklovir gereklidir).',
        trapFalse: 'asiklovir yüksek afinite ile viral DNA polimerazı inhibe ettiği için birinci seçenek tedavidir',
        trapHighlight: 'asiklovir yüksek afinite ile viral DNA polimerazı inhibe ettiği için birinci seçenek',
      },
    ],
  },

  // 19. İnfeksiyöz ishaller
  {
    branchId: 'dahiliye',
    subTopic: 'İnfeksiyöz İshaller Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kolera',
        target: 'Enterotoksinin Gs proteinini ADP-ribozilleyerek adenilat siklazı sürekli aktive etmesi ve cAMP aracılı klorür-su sekresyonu',
        hallmark: 'Ateşsiz, ağrısız, pirinç suyu görünümünde bol sulu ishal ve dışkı mikroskopisinde lökosit görülmemesi',
        vignette:
          'Otuz iki yaşında kirli su içme öyküsü olan hasta son 8 saatte 15 kez çok bol miktarda, balık kokulu, bulanık pirinç suyuna benzeyen sulu dışkılama ve şiddetli bacak kramplarıyla acile getiriliyor. Ateşi 36.7°C, göz küreleri çökmüş ve kan basıncı 70/40 mmHg bulunuyor. Dışkıda lökosit ve eritrosit saptanmıyor.',
        clues: ['pirinç suyuna benzeyen sulu dışkılama', 'Ateşi 36.7°C', 'Dışkıda lökosit ve eritrosit saptanmıyor'],
        management: 'Esas hayat kurtarıcı tedavi agresif IV Ringer laktat veya oral rehidratasyon sıvısı; süreyi kısaltmak için doksisiklin/azitromisin',
        pearl: 'Oksidaz pozitif, virgül şekilli gram-negatif basil alkali peptonlu suda ürer ve TCBS agarda sarı koloniler oluşturur; mukoza invazyonu yapmadığı için ateş ve fekal lökosit yoktur.',
        trapFalse: 'bağırsak mukozasını derin invaze ettiği için yüksek ateş ve bol fekal lökosit tipiktir',
        trapHighlight: 'yüksek ateş ve bol fekal lökosit tipiktir',
      },
      {
        name: 'Basilli dizanteri',
        target: 'Shigella’nın M hücrelerinden geçip epitel hücrelerini invaze ederek 60S ribozomal alt birimi inaktive eden toksin salgılaması',
        hallmark: 'Yüksek ateş, şiddetli kramp, tenezm, az miktarda kanlı-mukuslu dışkı ve mikroskopide bol nötrofil',
        vignette:
          'Yirmi sekiz yaşında erkek hasta ani başlayan 39.2°C ateş, şiddetli tenezm ve günde 20 kez az miktarda kanlı, sümüksü dışkılama ile başvuruyor. Dışkı mikroskopisinde her alanda çok sayıda polimorfonükleer lökosit ve eritrosit izleniyor. İnokülasyon dozu çok düşük olan etken hareketsiz ve laktoz negatif bulunuyor.',
        clues: ['39.2°C ateş, şiddetli tenezm', 'az miktarda kanlı, sümüksü dışkılama', 'her alanda çok sayıda polimorfonükleer lökosit'],
        management: 'Sıvı desteği ve siprofloksasin veya azitromisin/seftriakson ile antimikrobiyal tedavi; antimotilite ilaçlardan kaçınma',
        pearl: 'Çok düşük inokülum (< 100 bakteri) ile bulaşır ve mide asidine dirençlidir; çocuklarda nörotoksisiteyle febril konvülsiyon veya Reaktif artrit tetikleyebilir.',
        trapFalse: 'hastalık oluşturması için en az 10 üzeri 6 bakteri alınması gerekir ve hareketli bir basildir',
        trapHighlight: 'en az 10 üzeri 6 bakteri alınması gerekir ve hareketli bir basildir',
      },
      {
        name: 'Amipli dizanteri',
        target: 'Entamoeba histolytica trofozoitlerinin galaktoz-N-asetilgalaktozamin lektini ile bağlanıp mukozada şişe dibi ülserler açması',
        hallmark: 'Subakut kanlı-mukuslu ishal, sitoplazmasında fagosite edilmiş eritrosit içeren trofozoitler ve karaciğer apsesi riski',
        vignette:
          'Otuz dokuz yaşında tropikal bölge seyahati sonrası 2 haftadır süren kramp tarzında karın ağrısı ve kanlı-mukuslu dışkılaması olan hastanın dışkı incelemesinde az sayıda lökosit, ancak içinde yutulmuş eritrositler barındıran hareketli trofozoitler ve 4 çekirdekli kistler görülüyor.',
        clues: ['2 haftadır süren', 'az sayıda lökosit', 'içinde yutulmuş eritrositler barındıran hareketli trofozoitler'],
        management: 'Doku invazyonu için metronidazol veya tinidazol, ardından luminal kist eradikasyonu için paramomisin veya iyodokinol',
        pearl: 'Sadece luminal ajan verilmezse invaziv form tedavi edilemez, sadece metronidazol verilirse lümendeki kistler kalarak relaps ve bulaş devam eder; karaciğer apsesinde ançüez ezmesi görünümü izlenir.',
        trapFalse: 'tedavide sadece metronidazol verilmesi lümendeki kistleri de tamamen temizlediği için yeterlidir',
        trapHighlight: 'lümendeki kistleri de tamamen temizlediği için yeterlidir',
      },
      {
        name: 'Giardiyazis',
        target: 'Armut şekilli kamçılı trofozoitlerin emici diskleriyle duodenum-jejunum fırçamsı kenarını kaplayarak emilimi bozması',
        hallmark: 'Kötü kokulu, yağlı, sulu steatore, şiddetli gaz-şişkinlik ve dışkıda çift çekirdekli gülen yüz trofozoitleri',
        vignette:
          'Yirmi beş yaşında dağ yürüyüşü sırasında dere suyu içen erkek hasta 10 gün sonra başlayan kötü kokulu, suda yüzen yağlı dışkılama, geğirme ve kilo kaybıyla başvuruyor. Ateş ve dışkıda kan-lökosit saptanmıyor; hastada selektif IgA eksikliği olduğu biliniyor.',
        clues: ['dere suyu içen', 'suda yüzen yağlı dışkılama', 'selektif IgA eksikliği'],
        management: 'Dışkı antijen testi veya mikroskopi ile tanı ve tek doz tinidazol ya da 5-7 gün metronidazol tedavisi',
        pearl: 'Mukoza invazyonu yapmadığı için dışkıda kan veya lökosit görülmez; sekretuvar IgA eksikliği olan bireylerde kronik ve dirençli seyir gösterir.',
        trapFalse: 'kalın bağırsak mukozasını invaze ederek kanlı ishal ve hepatik apseye neden olur',
        trapHighlight: 'kalın bağırsak mukozasını invaze ederek kanlı ishal ve hepatik apseye',
      },
      {
        name: 'Enterohemorajik E. coli enfeksiyonu',
        target: 'O157:H7 serotipinin ürettiği Shiga-benzeri toksinin endotel hücrelerinde protein sentezini durdurması',
        hallmark: 'Az pişmiş kıyma sonrası ateşsiz kanlı ishal, sorbitol-MacConkey agarda renksiz koloni ve antibiyotikle HÜS riski',
        vignette:
          'On sekiz yaşında erkek hasta 2 gün önce hamburger yedikten sonra başlayan şiddetli karın ağrısı ve parlak kanlı ishal ile acile başvuruyor. Ateşi 36.9°C ölçülüyor. Dışkı kültüründe sorbitolü fermente etmeyen gram-negatif basil üremesi bildiriliyor.',
        clues: ['hamburger yedikten sonra', 'parlak kanlı ishal', 'sorbitolü fermente etmeyen'],
        management: 'Yalnızca destekleyici sıvı tedavisi; toksin salınımını artırdığı için ANTİBİYOTİK ve antimotilite ilaçlarından kesin kaçınma',
        pearl: 'Antibiyotik verilmesi bakteri lizisiyle Shiga toksin salınımını artırarak hemolitik üremik sendrom gelişme riskini dramatik biçimde yükseltir.',
        trapFalse: 'hemolitik üremik sendromu önlemek için erken dönemde siprofloksasin veya TMP-SMX başlanmalıdır',
        trapHighlight: 'erken dönemde siprofloksasin veya TMP-SMX başlanmalıdır',
      },
    ],
  },

  // 20. İdrar yolu enfeksiyonları ve piyelonefrit
  {
    branchId: 'dahiliye',
    subTopic: 'İdrar Yolu Enfeksiyonları ve Piyelonefrit',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akut komplike olmayan sistit',
        target: 'Üropatojenik E. coli’nin P veya Tip 1 fimbriyalarıyla mesane ürotelyumuna tutunarak yüzeyel mukozal inflamasyon yapması',
        hallmark: 'Ateş ve yan ağrısı olmaksızın dizüri, pollaküri, sıkışma hissi, suprapubik hassasiyet ve nitrit/lökosit esteraz pozitifliği',
        vignette:
          'Yirmi dört yaşında sağlıklı kadın hasta 2 gündür idrar yaparken yanma, sık idrara çıkma ve kasık üstünde ağrı şikayetiyle başvuruyor. Ateşi 36.6°C, kostovertebral açı hassasiyeti negatif bulunuyor. İdrar analizinde lökosit esteraz +3, nitrit pozitif ve bol lökosit görülüyor.',
        clues: ['idrar yaparken yanma, sık idrara çıkma', 'kostovertebral açı hassasiyeti negatif', 'lökosit esteraz +3, nitrit pozitif'],
        management: '5 gün nitrofurantoin, tek doz fosfomisin veya direncin < %20 olduğu yerde 3 gün TMP-SMX',
        pearl: 'Nitrofurantoin ve fosfomisin böbrek parankiminde yeterli doku düzeyine ulaşamadığı için üst üriner enfeksiyonlarda kesinlikle kullanılmamalıdır.',
        trapFalse: 'tedavide ilk tercih olarak en az 14 gün intravenöz seftriakson veya nitrofurantoin kullanılır',
        trapHighlight: 'en az 14 gün intravenöz seftriakson',
      },
      {
        name: 'Akut komplike olmayan piyelonefrit',
        target: 'Bakterilerin üreterler yoluyla renal pelvis ve parankime yükselerek tübülointerstisyel süpürasyon başlatması',
        hallmark: 'Yüksek ateş, üşüme-titreme, tek taraflı kostovertebral açı hassasiyeti ve idrarda lökosit silendirleri',
        vignette:
          'Yirmi dokuz yaşında kadın hasta 24 saattir süren 39.1°C ateş, titreme, bulantı-kusma ve sağ bel-yan ağrısıyla acile başvuruyor. Muayenede sağ kostovertebral açıda belirgin hassasiyet saptanıyor. İdrar mikroskopisinde bol bakteri ve patognomonik olarak lökosit silendirleri izleniyor.',
        clues: ['39.1°C ateş, titreme', 'sağ kostovertebral açıda belirgin hassasiyet', 'lökosit silendirleri'],
        management: 'İdrar ve kan kültürü sonrası ayaktan siprofloksasin/levofloksasin; hastanede yatan olgularda IV seftriakson',
        pearl: 'İdrarda lökosit silendiri varlığı inflamasyonun mesaneden değil doğrudan böbrek tübüllerinden kaynaklandığını kanıtlar.',
        trapFalse: 'oral fosfomisin veya nitrofurantoin böbrek parankiminde çok yüksek konsantrasyona ulaştığı için ilk tercihtir',
        trapHighlight: 'fosfomisin veya nitrofurantoin böbrek parankiminde çok yüksek konsantrasyona ulaştığı için',
      },
      {
        name: 'Amfizematöz piyelonefrit',
        target: 'Diyabetik hastada glukoz fermentasyonu yapan gram-negatif basillerin renal parankimde gaz üreten nekrotizan enfeksiyonu',
        hallmark: 'Kötü kontrollü diyabette sepsis kliniği ve BT’de renal parankim veya perirenal alanda gaz varlığı',
        vignette:
          'Altmış bir yaşında kontrolsüz tip 2 diyabeti (HbA1c %11.4) olan kadın hasta yüksek ateş, bilinç bulanıklığı ve sol yan ağrısı ile yoğun bakıma alınıyor. Çekilen abdominal BT’de sol böbrek parankimini tamamen tahrip eden ve perirenal yağ dokusuna uzanan yaygın gaz kabarcıkları görülüyor.',
        clues: ['kontrolsüz tip 2 diyabeti', 'sol böbrek parankimini tamamen tahrip eden', 'yaygın gaz kabarcıkları'],
        management: 'Acil geniş spektrumlu IV antibiyotik, perkütan drenaj veya yanıt alınamayan fulminan olgularda acil nefrektomi',
        pearl: 'Olguların %90’ından fazlası diyabetiktir ve en sık etken E. coli’dir; sadece antibiyotikle mortalite çok yüksektir, mutlaka drenaj/cerrahi gerekir.',
        trapFalse: 'yalnızca oral antibiyotik tedavisiyle %95 oranında iyileşir ve cerrahi girişim gereksizdir',
        trapHighlight: 'yalnızca oral antibiyotik tedavisiyle %95 oranında iyileşir',
      },
      {
        name: 'Ksantogranülomatöz piyelonefrit',
        target: 'Uzun süreli geyik boynuzu taş obstrüksiyonu ve kronik Proteus enfeksiyonuna bağlı parankimin köpüksü makrofajlarla yer değiştirmesi',
        hallmark: 'Büyük staghorn taş, BT’de böbrek tümörünü taklit eden "ayı pençesi" görünümü ve histolojide lipid yüklü makrofajlar',
        vignette:
          'Ellisekiz yaşında tekrarlayan idrar enfeksiyonu öykülü kadın hasta kilo kaybı, subfebril ateş ve sağ yan ağrısıyla başvuruyor. BT’de sağ böbrekte büyük bir geyik boynuzu taş ve böbrek parankimini tamamen silip çevre dokulara uzanan çok sayıda düşük dansiteli kistik alan ("ayı pençesi") izleniyor. İdrar kültüründe Proteus mirabilis ürüyor.',
        clues: ['geyik boynuzu taş', 'ayı pençesi', 'Proteus mirabilis'],
        management: 'Antibiyotik tedavisi ve fonksiyonunu kaybetmiş böbreğin total nefrektomisi',
        pearl: 'Radyolojik olarak renal hücreli karsinomu çok taklit eder; dokuda PAS pozitif Michaelis-Gutmann cisimciği malakoplakide görülürken burada lipid yüklü köpüksü CD68+ makrofajlar vardır.',
        trapFalse: 'ultrasonografide kalsifikasyon ve taş görülmesi dışlayıcı bir bulgudur',
        trapHighlight: 'kalsifikasyon ve taş görülmesi dışlayıcı bir bulgudur',
      },
      {
        name: 'Asemptomatik bakteriüri',
        target: 'Üriner sistem semptomu oluşturmayan düşük virülanslı bakterilerin mesane kolonizasyonu',
        hallmark: 'Herhangi bir dizüri/ateş olmaksızın ardışık idrar kültürlerinde >= 10^5 CFU/mL tek tür bakteri üremesi',
        vignette:
          'Yetmiş altı yaşında diyabetik ve kalıcı üriner kateteri olan kadın hastada hiçbir ateş, dizüri veya yan ağrısı yokken rutin taramada alınan idrar kültüründe 100.000 CFU/mL E. coli ürüyor. Aynı gün gebelik polikliniğinde taranan 26 yaşındaki asemptomatik bir gebede de aynı üreme saptanıyor.',
        clues: ['kalıcı üriner kateteri olan', 'hiçbir ateş, dizüri veya yan ağrısı yokken', '100.000 CFU/mL E. coli'],
        management: 'Sadece gebelerde ve mukozal kanama beklenen ürolojik girişim öncesinde tedavi edilmesi; yaşlı, diyabetik veya kateterli hastalarda TEDAVİ EDİLMEMESİ',
        pearl: 'Gebelerde tedavi edilmezse %20-40 oranında akut piyelonefrit ve erken doğuma ilerlediği için mutlaka tedavi edilir; yaşlılar, diyabetikler ve kalıcı sondalı hastalarda antibiyotik dirençten başka bir şey getirmez.',
        trapFalse: 'diyabetik hastalarda ve kalıcı idrar sondası olan tüm bireylerde mutlaka antibiyotikle eradike edilmelidir',
        trapHighlight: 'kalıcı idrar sondası olan tüm bireylerde mutlaka antibiyotikle eradike edilmelidir',
      },
    ],
  },

  // 21. Sepsis ve şok tipleri yönetimi
  {
    branchId: 'dahiliye',
    subTopic: 'Sepsis ve Şok Tipleri Yönetimi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Septik şok',
        target: 'Enfeksiyona karşı kontrolsüz sistemik inflamatuvar yanıt sonucu nitrik oksit aracılı derin vazodilatasyon ve mikrodolaşım bozukluğu',
        hallmark: 'Sıvı resüsitasyonuna dirençli hipotansiyon (vazopresör gereksinimi), laktat > 2 mmol/L, düşük SVR ve sıcak ekstremiteler',
        vignette:
          'Altmış sekiz yaşında piyelonefrit nedeniyle takip edilen erkek hastada konfüzyon ve tansiyon 75/40 mmHg gelişiyor. Ekstremiteleri sıcak ve nabız basıncı geniş saptanıyor. Hızlıca 30 mL/kg izotonik kristaloid verilmesine rağmen ortalama arter basıncı 55 mmHg ve serum laktatı 4.6 mmol/L kalıyor.',
        clues: ['Ekstremiteleri sıcak', '30 mL/kg izotonik kristaloid verilmesine rağmen', 'serum laktatı 4.6 mmol/L'],
        management: 'İlk 1 saatte kan kültürü + geniş spektrumlu antibiyotik, 30 mL/kg dengeli kristaloid ve ilk tercih vazopresör olarak norepinefrin',
        pearl: 'Dağılım (vazodilatör) şokunun prototipidir; erken dönemde kalp debisi normal veya yüksek, sistemik vasküler direnç (SVR) ise belirgin düşüktür; refrakter olguda vazopresin ve hidrokortizon eklenir.',
        trapFalse: 'sistemik vasküler direnç belirgin artmıştır ve ilk tercih vazopresör dopamindir',
        trapHighlight: 'sistemik vasküler direnç belirgin artmıştır ve ilk tercih vazopresör dopamindir',
      },
      {
        name: 'Kardiyojenik şok',
        target: 'Miyokardiyal pompa yetersizliği sonucu ileri atım hacminin kritik düzeyde düşmesi ve kompanzatuvar vazokonstriksiyon',
        hallmark: 'Düşük kardiyak indeks, yüksek pulmoner kapiller kama basıncı (PCWP > 18 mmHg), yüksek SVR ve soğuk nemli cilt',
        vignette:
          'Altmış üç yaşında yaygın anterior miyokard enfarktüsü geçiren erkek hastada kan basıncı 78/52 mmHg, nabız 122/dk, ekstremiteler soğuk ve terli bulunuyor. Akciğerlerde yaygın yaş raller duyuluyor, juguler venler dolgun ve Swan-Ganz kateterinde PCWP 26 mmHg, kardiyak indeks 1.6 L/dk/m2 ölçülüyor.',
        clues: ['ekstremiteler soğuk ve terli', 'Akciğerlerde yaygın yaş raller', 'PCWP 26 mmHg, kardiyak indeks 1.6'],
        management: 'Acil koroner revaskülarizasyon, inotropik destek (dobutamin/norepinefrin) ve mekanik dolaşım desteği (IABP/Impella)',
        pearl: 'Akciğer ödemi eşlik ettiği için agresif sıvı yüklemesi kontrendikedir; PCWP yüksekliğiyle hipovolemik ve septik şoktan net biçimde ayrılır.',
        trapFalse: 'pulmoner kapiller kama basıncı 5 mmHg’nin altında olup tedavide hızlıca 30 mL/kg kristaloid yüklenir',
        trapHighlight: 'pulmoner kapiller kama basıncı 5 mmHg’nin altında olup',
      },
      {
        name: 'Hipovolemik şok',
        target: 'Akut kanama veya ağır sıvı kaybı nedeniyle venöz dönüşün ve ventriküler ön yükün (preload) düşmesi',
        hallmark: 'Düşük CVP ve PCWP, düşük kalp debisi, yüksek SVR, taşikardi, dar nabız basıncı ve boş boyun venleri',
        vignette:
          'Otuz dört yaşında trafik kazası sonrası dalak rüptürü şüphesiyle getirilen hastada kan basıncı 70/54 mmHg, nabız 136/dk, ekstremiteler soğuk ve soluk, boyun venleri tamamen düzleşmiş bulunuyor. İdrar çıkışı durmuş ve laktat 5.1 mmol/L ölçülüyor.',
        clues: ['dalak rüptürü', 'boyun venleri tamamen düzleşmiş', '70/54 mmHg, nabız 136/dk'],
        management: 'Kanama odağının acil kontrolü ve hızlı dengeli kristaloid / masif transfüzyon (1:1:1 eritrosit-TDP-trombosit) replasmanı',
        pearl: 'Tek başına vazopresör başlanması boş damar yatağında organ iskemisini derinleştirir; öncelik hacim ve kan ürünü yerine koymaktır.',
        trapFalse: 'santral venöz basınç belirgin yükselmiştir ve temel tedavi intravenöz dobutamindir',
        trapHighlight: 'santral venöz basınç belirgin yükselmiştir ve temel tedavi intravenöz dobutamindir',
      },
      {
        name: 'Anafilaktik şok',
        target: 'IgE aracılı mast hücre ve bazofil degranülasyonuyla ani histamin, triptaz ve lökotrien salınımı',
        hallmark: 'Alerjen maruziyeti sonrası dakikalar içinde ürtiker/anjiyoödem, bronkospazm (stridor/wheezing) ve derin vazodilatör hipotansiyon',
        vignette:
          'Yirmi yedi yaşında kadın hastaya intravenöz seftriakson verildikten 4 dakika sonra yaygın kaşıntılı kabarıklıklar, dudaklarda şişme, inspiratuvar stridor, yaygın hışıltı ve 65/35 mmHg tansiyon düşüklüğü gelişiyor.',
        clues: ['intravenöz seftriakson verildikten 4 dakika sonra', 'yaygın kaşıntılı kabarıklıklar', 'inspiratuvar stridor'],
        management: 'Derhal uyluk anterolateral kasa intramusküler epinefrin (1:1000), yüksek akım oksijen, IV sıvı ve ikincil olarak antihistaminik/steroid',
        pearl: 'Birinci basamak ve hayat kurtarıcı tek ilaç İM epinefrindir; antihistaminikler ve kortikosteroidler sadece geç faz reaksiyonları ve cilt bulgularını azaltır, şoku döndürmez.',
        trapFalse: 'ilk müdahale olarak intravenöz difenhidramin ve metilprednizolon uygulanmalı, epinefrin sona saklanmalıdır',
        trapHighlight: 'epinefrin sona saklanmalıdır',
      },
      {
        name: 'Nörojenik şok',
        target: 'Servikal veya yüksek torasik (T6 üzeri) omurilik travması sonrası inen sempatik vazomotor yolların kesilmesi',
        hallmark: 'Hipotansiyona eşlik eden paradoksal BRADİKARDİ, sıcak kuru ekstremiteler ve düşük SVR',
        vignette:
          'Yirmi iki yaşında yüksekten düşme sonrası C5 seviyesinde omurilik yaralanması saptanan hastanın kan basıncı 72/42 mmHg ölçülmesine rağmen nabzı 46/dk bulunuyor. Ekstremiteleri sıcak ve pembe olan hastada diğer travma odakları dışlanıyor.',
        clues: ['C5 seviyesinde omurilik yaralanması', 'kan basıncı 72/42 mmHg ölçülmesine rağmen nabzı 46/dk', 'Ekstremiteleri sıcak'],
        management: 'Spinal stabilizasyon, dikkatli IV izotonik sıvı, alfa+beta agonist vazopresör (norepinefrin) ve semptomatik bradikardide atropin',
        pearl: 'Kardiyak sempatik lifler (T1-T4) devre dışı kalıp vagal (parasempatik) etki baskınlaştığı için hipotansiyona taşikardi yerine bradikardi eşlik eden tek dağılım şokudur.',
        trapFalse: 'refleks sempatik aktivasyon nedeniyle belirgin taşikardi ve soğuk nemli cilt beklenir',
        trapHighlight: 'belirgin taşikardi ve soğuk nemli cilt beklenir',
      },
    ],
  },

  // 22. Akut perikardit ve miyokardit
  {
    branchId: 'dahiliye',
    subTopic: 'Akut Perikardit ve Miyokardit Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'İdiyopatik akut perikardit',
        target: 'Sıklıkla viral tetiklenmeyle perikardiyal yaprakların akut fibrinöz inflamasyonu',
        hallmark: 'Sırt üstü yatınca artıp öne eğilmekle azalan plöritik göğüs ağrısı, yaygın konkav ST elevasyonu ve PR depresyonu',
        vignette:
          'Otuz üç yaşında erkek hasta 1 hafta önce geçirdiği üst solunum yolu enfeksiyonu sonrası başlayan keskin göğüs ağrısı ile başvuruyor. Ağrı derin nefes almakla ve sırt üstü uzanınca artıyor, hasta oturup öne eğilince hafifliyor. EKG’de aVR ve V1 hariç tüm derivasyonlarda yukarı bakan konkav ST elevasyonu ve PR çökmesi görülüyor.',
        clues: ['oturup öne eğilince hafifliyor', 'tüm derivasyonlarda yukarı bakan konkav ST elevasyonu', 'PR çökmesi'],
        management: 'Yüksek doz NSAİİ (ibuprofen/aspirin) ile birlikte nüksü yarı yarıya azaltan 3 aylık kolşisin tedavisi',
        pearl: 'aVR’de tipik olarak ST depresyonu ve PR elevasyonu görülür; erken dönemde yüksek doz kortikosteroid kullanımı nüks oranını artırdığı için ilk basamakta önerilmez.',
        trapFalse: 'nüksleri önlemek için ilk basamak tedavi olarak yüksek doz prednizon başlanmalıdır',
        trapHighlight: 'ilk basamak tedavi olarak yüksek doz prednizon başlanmalıdır',
      },
      {
        name: 'Dressler sendromu',
        target: 'Miyokard enfarktüsü veya kalp cerrahisi sonrası açığa çıkan miyokardiyal antijenlere karşı gecikmiş otoimmün yanıt',
        hallmark: 'Kalp hasarından 2-10 hafta sonra ortaya çıkan ateş, plöroperikardit, lökositoz ve yüksek sedimentasyon/CRP',
        vignette:
          'Ellidokuz yaşında koroner bypass ameliyatından 4 hafta sonra tekrarlayan ateş, göğüs ağrısı, eklem ağrısı ve sol tarafta az miktarda plevral efüzyon gelişen hastada CRP 110 mg/L ve ESR 82 mm/saat bulunuyor. Perikardiyal sürtünme sesi duyuluyor ancak troponin normal saptanıyor.',
        clues: ['koroner bypass ameliyatından 4 hafta sonra', 'CRP 110 mg/L ve ESR 82 mm/saat', 'Perikardiyal sürtünme sesi'],
        management: 'Yüksek doz aspirin (veya NSAİİ) + kolşisin tedavisi; hemorajik tamponad riski nedeniyle antikoagülandan kaçınılması',
        pearl: 'Erken post-MI perikardit ilk 1-4 günde gelişirken bu geç immün reaksiyon haftalar sonra görülür ve primer perkütan revaskülarizasyon çağında sıklığı azalmıştır.',
        trapFalse: 'miyokard enfarktüsünün ilk 24 saatinde ortaya çıkar ve hemen trombolitik verilmelidir',
        trapHighlight: 'ilk 24 saatinde ortaya çıkar ve hemen trombolitik verilmelidir',
      },
      {
        name: 'Akut viral miyokardit',
        target: 'Coxsackie B, Parvovirüs B19 veya HHV-6’nın direkt miyosit hasarı ve T hücre aracılı miyokardiyal inflamasyon oluşturması',
        hallmark: 'Genç hastada viral prodrom sonrası troponin yüksekliği, normal koroner arterler ve MR’da epikardiyal/mid-miyokardiyal geç tutulum',
        vignette:
          'Yirmi dört yaşında erkek hasta grip benzeri bir hastalıktan 10 gün sonra nefes darlığı, çarpıntı ve göğüs ağrısı ile başvuruyor. Troponin I düzeyi belirgin yüksek, EKG’de sinüs taşikardisi ve nonspesifik ST-T değişiklikleri var. Koroner anjiyografi tamamen normal çıkarken kardiyak MR’da subepikardiyal geç gadolinyum tutulumu görülüyor.',
        clues: ['grip benzeri bir hastalıktan 10 gün sonra', 'Troponin I düzeyi belirgin yüksek', 'Koroner anjiyografi tamamen normal'],
        management: 'Egzersiz kısıtlaması (en az 3-6 ay), standart kalp yetmezliği tedavisi ve şokta mekanik destek',
        pearl: 'İskemik enfarktüste tutulum subendokardiyal başlarken, bu tabloda kardiyak MR’da subepikardiyal veya mid-miyokardiyal tutulum karakteristiktir.',
        trapFalse: 'kardiyak MR’da klasik olarak tek bir koroner arter alanına uyan subendokardiyal tutulum izlenir',
        trapHighlight: 'tek bir koroner arter alanına uyan subendokardiyal tutulum',
      },
      {
        name: 'Dev hücreli miyokardit',
        target: 'T lenfosit aracılı agresif otoimmün miyokard nekrozu ve çok çekirdekli dev hücre infiltrasyonu',
        hallmark: 'Hızlı ilerleyen fulminan kalp yetmezliği, dirençli ventriküler taşikardiler/AV blok ve biyopside çok çekirdekli dev hücreler',
        vignette:
          'Kırk üç yaşında daha önce sağlıklı olan erkek hasta 1 hafta içinde gelişen kardiyojenik şok, tam AV blok ve tekrarlayan ventriküler taşikardi ataklarıyla yoğun bakıma alınıyor. Koronerler açık bulunurken endomiyokardiyal biyopside yaygın miyosit nekrozu, eozinofiller ve çok çekirdekli dev hücreler saptanıyor.',
        clues: ['1 hafta içinde gelişen kardiyojenik şok', 'tam AV blok ve tekrarlayan ventriküler taşikardi', 'çok çekirdekli dev hücreler'],
        management: 'Acil endomiyokardiyal biyopsi ile tanı, çoklu immünsüpresif tedavi (siklosporin + steroid + ATG) ve kalp nakli hazırlığı',
        pearl: 'İmmünsüpresyon yapılmazsa aylarca içinde ölümcül seyreder; endomiyokardiyal biyopsi gerektiren en kritik endikasyonlardan biridir.',
        trapFalse: 'hafif kendiliğinden düzelen bir tablodur ve immünsüpresif tedavi kesinlikle kontrendikedir',
        trapHighlight: 'immünsüpresif tedavi kesinlikle kontrendikedir',
      },
      {
        name: 'Tüberküloz perikarditi',
        target: 'Mediastinal lenf nodlarından retrograd lenfatik yayılımla perikardiyal boşlukta kronik granülomatöz eksüda gelişimi',
        hallmark: 'Subakut büyük perikardiyal efüzyon, yüksek sıvı ADA/interferon-gama düzeyi ve yüksek kronik konstriksiyon riski',
        vignette:
          'Ellibir yaşında son 2 aydır subfebril ateş, gece terlemesi, kilo kaybı ve nefes darlığı yaşayan hastada büyük perikardiyal efüzyon saptanıyor. Perikardiyosentezde kanlı-seröz eksüda, %85 lenfosit ve ADA düzeyi 68 U/L ölçülüyor.',
        clues: ['2 aydır subfebril ateş, gece terlemesi', 'büyük perikardiyal efüzyon', 'ADA düzeyi 68 U/L'],
        management: 'Dörtlü antitüberküloz tedavi ve konstriksiyon gelişimini azaltmak için seçilmiş hastalarda kortikosteroid',
        pearl: 'Gelişmekte olan ülkelerde konstriktif perikarditin en önemli sebebidir; perikardiyal sıvı kültürü düşük duyarlılıklı olsa da yüksek ADA düzeyi tanıyı güçlü destekler.',
        trapFalse: 'akut viral olgulardan farklı olarak kronik konstriksiyona ilerleme riski yok denecek kadar azdır',
        trapHighlight: 'kronik konstriksiyona ilerleme riski yok denecek kadar azdır',
      },
    ],
  },

  // 23. Nabız tipleri
  {
    branchId: 'dahiliye',
    subTopic: 'Kardiyovasküler Nabız Tipleri',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Pulsus paradoksus',
        target: 'İnspirasyonda sağ ventriküle artan venöz dönüşün interventriküler septumu sola iterek sol ventrikül atım hacmini düşürmesi',
        hallmark: 'Derin olmayan normal inspirasyon sırasında sistolik kan basıncının > 10 mmHg düşmesi',
        vignette:
          'Kırk altı yaşında perikardiyal efüzyonu olan hastanın manşonlu tansiyon ölçümünde ekspiryumda ilk Korotkoff sesleri 112 mmHg’de duyulurken, sadece inspiryumda kaybolup tüm solunum döngüsü boyunca duyulabilir hale geldiği değer 90 mmHg olarak ölçülüyor.',
        clues: ['perikardiyal efüzyonu olan', 'ekspiryumda ilk Korotkoff sesleri 112 mmHg', 'tüm solunum döngüsü boyunca duyulabilir hale geldiği değer 90 mmHg'],
        management: 'Kardiyak tamponad, ağır astım atağı veya KOAH alevlenmesi gibi altta yatan nedenin acil tedavisi',
        pearl: 'Normal fizyolojik düşüşün (< 10 mmHg) aşırı abartılmış halidir; ağır astım atağında ve tansiyon pnömotoraksta da pozitifleşir ancak ciddi aort yetmezliği veya ASD eşlik eden tamponadda maskelenebilir.',
        trapFalse: 'inspirasyonda sistolik kan basıncının en az 10 mmHg yükselmesiyle karakterizedir',
        trapHighlight: 'en az 10 mmHg yükselmesiyle karakterizedir',
      },
      {
        name: 'Pulsus alternans',
        target: 'Ağır sol ventrikül sistolik disfonksiyonunda atımdan atıma değişen diyastol sonu lif gerimi ve kalsiyum döngüsü',
        hallmark: 'Tamamen düzenli sinüs ritminde bir güçlü bir zayıf arteriyel nabız vurusu alınması',
        vignette:
          'Altmış dokuz yaşında EF %18 olan ileri evre dilate kardiyomiyopatili hastanın kalp ritmi EKG’de tamamen düzenli sinüs ritminde olmasına rağmen, radyal arter palpasyonunda bir kuvvetli ardından bir zayıf nabız dalgası hissediliyor ve S3 gallop eşlik ediyor.',
        clues: ['EF %18', 'tamamen düzenli sinüs ritminde', 'bir kuvvetli ardından bir zayıf nabız dalgası'],
        management: 'İleri evre sistolik kalp yetmezliğinin agresif medikal ve cihaz tedavisi',
        pearl: 'Bigemine erken vuruların (pulsus bigeminus) aksine kalp hızı ve R-R aralıkları tamamen düzenlidir; kötü prognoz göstergesidir.',
        trapFalse: 'ekstrasistoller nedeniyle R-R aralıklarının düzensizleştiği ventriküler bigeminiye bağlı gelişir',
        trapHighlight: 'R-R aralıklarının düzensizleştiği ventriküler bigeminiye bağlı gelişir',
      },
      {
        name: 'Pulsus bisferiens',
        target: 'Sistol sırasında erken hızlı fırlatmayı izleyen mid-sistolik çökme ve ikinci geç pik oluşumu',
        hallmark: 'Karotis palpasyonunda tek bir sistol içinde iki belirgin tepe hissedilmesi',
        vignette:
          'Yirmi üç yaşında hipertrofik obstrüktif kardiyomiyopatili hastanın karotis arteri dikkatle palpe edildiğinde her kalp atımında sistol içinde art arda iki ayrı tepe noktası hissediliyor.',
        clues: ['hipertrofik obstrüktif kardiyomiyopatili', 'karotis arteri dikkatle palpe edildiğinde', 'sistol içinde art arda iki ayrı tepe noktası'],
        management: 'Hipertrofik obstrüktif kardiyomiyopati veya kombine aort darlığı-yetmezliği açısından ekokardiyografik değerlendirme',
        pearl: 'En sık kombine aort darlığı + aort yetmezliğinde ve hipertrofik obstrüktif KMP’de görülür; dikrotik nabızda ise ikinci tepe diyastolde hissedilir.',
        trapFalse: 'ilk tepe sistolde ikinci tepe diyastolde hissedildiği için ağır sepsis ve hipovolemide görülür',
        trapHighlight: 'ikinci tepe diyastolde hissedildiği için ağır sepsis ve hipovolemide görülür',
      },
      {
        name: 'Pulsus parvus et tardus',
        target: 'Daralmış çıkış kapağından kanın yavaş ve uzun sürede fırlatılmasına bağlı tepe basıncının gecikmesi ve küçülmesi',
        hallmark: 'Düşük amplitüdlü, zayıf ve geç zirve yapan karotis nabzı',
        vignette:
          'Yetmiş dört yaşında efor anginası olan hastanın karotis arteri palpe edildiğinde nabız dalgasının yavaş yükseldiği, tepesinin yayvanlaştığı ve normalden çok daha küçük hissedildiği saptanıyor. Boyunda sistolik trill alınıyor.',
        clues: ['efor anginası', 'nabız dalgasının yavaş yükseldiği', 'normalden çok daha küçük hissedildiği'],
        management: 'Ciddi aort darlığı açısından Doppler ekokardiyografi ve kapak replasmanı planlaması',
        pearl: 'Ciddi aort darlığının klasik nabız bulgusudur; ancak yaşlılarda damar sertliği (ateroskleroz) bu bulgunun saptanmasını maskeleyebilir.',
        trapFalse: 'hızlı yükselip hızla çöken sıçrayıcı bir nabız karakteri gösterir',
        trapHighlight: 'hızlı yükselip hızla çöken sıçrayıcı bir nabız karakteri',
      },
      {
        name: 'Corrigan nabzı',
        target: 'Artmış atım hacmine bağlı hızlı sistolik yükselme ve diyastolde ventriküle kaçakla ani diyastolik basınç çökmesi',
        hallmark: 'Hastanın kolu yukarı kaldırıldığında daha da belirginleşen keskin yükselen ve hızla kaybolan sıçrayıcı nabız',
        vignette:
          'Elliyedi yaşında kan basıncı 165/45 mmHg ölçülen hastanın ön kolu dikey olarak baş üstüne kaldırılıp avuç içiyle bileği kavrandığında arterin parmaklara çok sert çarpıp aniden söndüğü hissediliyor. Tırnak yatağına hafifçe basıldığında kapiller nabız (Quincke) izleniyor.',
        clues: ['165/45 mmHg', 'ön kolu dikey olarak baş üstüne kaldırılıp', 'sert çarpıp aniden söndüğü'],
        management: 'Ciddi kronik aort yetmezliği veya patent duktus arteriozus gibi yüksek atımlı kaçakların ekokardiyografik değerlendirmesi',
        pearl: 'Water-hammer (su çekici) nabzı olarak da bilinir; kronik ciddi aort yetmezliği, büyük AV fistüller, PDA ve tirotoksikozda görülür.',
        trapFalse: 'daralmış nabız basıncı ve yavaş sistolik yükselme ile aort darlığı için patognomoniktir',
        trapHighlight: 'daralmış nabız basıncı ve yavaş sistolik yükselme',
      },
    ],
  },

  // 24. Juguler venöz dalga anormallikleri
  {
    branchId: 'dahiliye',
    subTopic: 'Juguler Venöz Dalga Anormallikleri',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Dev A dalgası',
        target: 'Sağ atriyumun daralmış triküspit kapağa veya kompliyansı azalmış sert sağ ventriküle karşı güçlü kasılması',
        hallmark: 'Sinüs ritmindeki hastada her kalp döngüsünde düzenli ve abartılı presistolik juguler venöz sıçrama',
        vignette:
          'Kırk sekiz yaşında sistemik skleroz ve ağır pulmoner hipertansiyonu olan sinüs ritmindeki kadın hastanın boyun venlerinde karotis nabzından hemen önce her atımda düzenli ve çok belirgin yükselme izleniyor.',
        clues: ['pulmoner hipertansiyonu olan sinüs ritmindeki', 'karotis nabzından hemen önce', 'her atımda düzenli ve çok belirgin yükselme'],
        management: 'Triküspit darlığı, pulmoner darlık veya ağır pulmoner hipertansiyonun ekokardiyografik tedavisi',
        pearl: 'Atriyal fibrilasyonda atriyal kasılma olmadığı için A dalgası tamamen kaybolur; bu nedenle bu bulgu yalnızca sinüs ritminde görülür.',
        trapFalse: 'atriyal fibrilasyonlu hastalarda düzensiz olarak ortaya çıkması beklenir',
        trapHighlight: 'atriyal fibrilasyonlu hastalarda düzensiz olarak ortaya çıkması',
      },
      {
        name: 'Kanon A dalgası',
        target: 'Atriyumun kapalı triküspit kapağa karşı sistol sırasında kasılmasına bağlı kanın juguler venlere geri tepmesi',
        hallmark: 'AV disosiasyon (tam AV blok, VT) varlığında düzensiz olarak beliren dev boyun veni atımları',
        vignette:
          'Yetmiş iki yaşında senkop ile getirilen hastanın nabzı 34/dk ve S1 şiddeti vuruştan vuruya değişiyor. EKG’de P dalgaları ile QRS kompleksleri birbirinden tamamen bağımsız görülürken boyun venlerinde zaman zaman ani, çok büyük sıçramalar izleniyor.',
        clues: ['S1 şiddeti vuruştan vuruya değişiyor', 'P dalgaları ile QRS kompleksleri birbirinden tamamen bağımsız', 'zaman zaman ani, çok büyük sıçramalar'],
        management: 'Tam AV blokta acil geçici ve kalıcı pacemaker implantasyonu',
        pearl: 'Tam AV blok ve ventriküler taşikardide DÜZENSİZ aralıklarla, AVNRT’de ise her vuruşta DÜZENLİ (kurbağa bulgusu) olarak görülür.',
        trapFalse: 'sinüs bradikardisinde atriyoventriküler iletim normal olduğundan sıkça görülür',
        trapHighlight: 'sinüs bradikardisinde atriyoventriküler iletim normal olduğundan',
      },
      {
        name: 'Dev CV dalgası',
        target: 'Sistolde sağ ventrikülden sağ atriyuma yüksek basınçlı regürjitasyon sonucu X inişinin silinip büyük V dalgasıyla birleşmesi',
        hallmark: 'Karotis nabzıyla eş zamanlı büyük sistolik boyun veni dalgası ve pulsatil hepatomegali',
        vignette:
          'Ellibeş yaşında sağ kalp yetmezliği ve şiddetli periferik ödemi olan hastada inspirasyonla artan holosistolik üfürüm duyuluyor. Boyun venlerinde karotis nabzıyla aynı anda şişen dev bir dalga ve karaciğer palpasyonunda sistolik pulsasyon saptanıyor.',
        clues: ['inspirasyonla artan holosistolik üfürüm', 'karotis nabzıyla aynı anda şişen dev bir dalga', 'karaciğer palpasyonunda sistolik pulsasyon'],
        management: 'Ciddi triküspit yetmezliğinin diüretiklerle tedavisi ve sol kapak cerrahisiyle birlikte veya izole onarımı',
        pearl: 'Normalde X inişini takip eden küçük V dalgası, ciddi triküspit regürjitasyonunda C dalgasıyla birleşerek dev sistolik dalga oluşturur.',
        trapFalse: 'triküspit darlığında diyastol sonu atriyal kontraksiyon sırasında meydana gelir',
        trapHighlight: 'triküspit darlığında diyastol sonu atriyal kontraksiyon sırasında',
      },
      {
        name: 'Belirgin Y inişi',
        target: 'Triküspit kapak açıldığında aşırı basınçlı atriyumdan sertleşmiş ventriküle hızlı ancak kısa süreli erken diyastolik boşalım',
        hallmark: 'Diyastolde keskin ve derin venöz çökme (Friedreich bulgusu) ve ardından ani duraksama',
        vignette:
          'Kırk dört yaşında eski radyoterapi öykülü hastada boyun venöz dolgunluğu yüksek ve perikardiyal vuru duyuluyor. Juguler venöz trasede S2’den hemen sonra çok hızlı ve derin bir düşüş (çökme) dikkat çekiyor.',
        clues: ['radyoterapi öykülü', 'perikardiyal vuru', 'S2’den hemen sonra çok hızlı ve derin bir düşüş'],
        management: 'Konstriktif perikardit şüphesiyle kardiyak MR/BT ve cerrahi perikardiyektomi değerlendirmesi',
        pearl: 'Konstriktif perikarditte hem X hem Y inişi derindir (W/M paterni); oysa kardiyak tamponadda erken diyastolik ventriküler gevşeme engellendiği için Y inişi silinmiştir.',
        trapFalse: 'kardiyak tamponadın erken döneminde en belirgin juguler venöz trasedir',
        trapHighlight: 'kardiyak tamponadın erken döneminde en belirgin',
      },
      {
        name: 'Kussmaul bulgusu',
        target: 'Sertleşmiş sağ kalbin inspirasyonda artan venöz dönüşü kabul edemeyip basıncı juguler venlere yansıtması',
        hallmark: 'Normalde inspirasyonda düşmesi gereken juguler venöz basıncın paradoksal olarak yükselmesi veya düşmemesi',
        vignette:
          'Elliyedi yaşında sağ koroner tıkanıklığına bağlı sağ ventrikül enfarktüsü geçiren hasta derin nefes aldığında boyun venlerinin boşalmak yerine daha da belirginleşip şiştiği gözleniyor.',
        clues: ['sağ ventrikül enfarktüsü', 'derin nefes aldığında', 'boyun venlerinin boşalmak yerine daha da belirginleşip şiştiği'],
        management: 'Konstriktif perikardit, restriktif KMP veya sağ ventrikül enfarktüsü gibi sağ kalp doluş kısıtlılıklarının tedavisi',
        pearl: 'Konstriktif perikardit, restriktif KMP, sağ ventrikül MI ve triküspit darlığında pozitiftir; ancak izole kardiyak tamponadda perikard sıvısı solunumla negatif intratorasik basıncı iletebildiği için GÖRÜLMEZ!',
        trapFalse: 'izole kardiyak tamponadda çok sık görülürken konstriktif perikarditte daima negatiftir',
        trapHighlight: 'izole kardiyak tamponadda çok sık görülürken konstriktif perikarditte daima negatiftir',
      },
    ],
  },

  // 25. Akciğer kanseri paraneoplastik sendromları
  {
    branchId: 'dahiliye',
    subTopic: 'Akciğer Kanseri Paraneoplastik Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Ektopik ACTH sendromu',
        target: 'Küçük hücreli akciğer kanserinin proopiomelanokortin (POMC) işleyerek otonom adrenokortikotropik hormon salgılaması',
        hallmark: 'Cushingoid görünüm gelişmeden hızlı hipokalemi, metabolik alkaloz, hiperpigmentasyon ve yüksek doz deksametazonla baskılanmama',
        vignette:
          'Altmış bir yaşında 45 paket-yıl sigara içen erkek hasta hızlı gelişen proksimal kas güçsüzlüğü, ciltte koyulaşma ve hipertansiyonla başvuruyor. Laboratuvarda potasyum 2.3 mEq/L, HCO3 34 mEq/L, açlık glukozu 245 mg/dL, sabah ACTH 280 pg/mL saptanıyor. 8 mg yüksek doz deksametazon kortizolü baskılamıyor. Akciğer BT’de santral hiler kitle görülüyor.',
        clues: ['ciltte koyulaşma', 'potasyum 2.3 mEq/L, HCO3 34 mEq/L', '8 mg yüksek doz deksametazon kortizolü baskılamıyor'],
        management: 'Altta yatan akciğer tümörünün kemoterapisi ve steroidogenez inhibitörleri (ketokonazol, metirapon) + potasyum replasmanı',
        pearl: 'Hipofiz adenomunun aksine tümör çok hızlı ilerlediği için santral obezite ve strialar henüz oluşmadan ağır hipokalemik alkaloz, diyabet ve MSH benzeri etkiyle hiperpigmentasyon tablosu ön plandadır.',
        trapFalse: '8 mg yüksek doz deksametazon supresyon testinde kortizol düzeyi %50’den fazla baskılanır',
        trapHighlight: 'kortizol düzeyi %50’den fazla baskılanır',
      },
      {
        name: 'Paraneoplastik uygunsuz ADH',
        target: 'Nöroendokrin tümör hücrelerinden ozmoregülasyondan bağımsız ektopik arjinin vazopresin sentezi',
        hallmark: 'Övolemik hiponatremi, düşük serum ozmolalitesi, yüksek idrar ozmolalitesi (> 100) ve yüksek idrar Na (> 40 mEq/L)',
        vignette:
          'Ellisekiz yaşında santral akciğer kitlesi bulunan kadın hasta halsizlik ve konfüzyonla başvuruyor. Ödemi ve dehidratasyonu olmayan hastanın serum sodyumu 117 mEq/L, serum ozmolalitesi 246 mOsm/kg, idrar ozmolalitesi 520 mOsm/kg ve idrar sodyumu 72 mEq/L ölçülüyor.',
        clues: ['santral akciğer kitlesi', 'Ödemi ve dehidratasyonu olmayan', 'idrar ozmolalitesi 520 mOsm/kg ve idrar sodyumu 72 mEq/L'],
        management: 'Sıvı kısıtlaması, tümöre yönelik kemoterapi ve dirençli olgularda demeclocycline veya tolvaptan',
        pearl: 'Küçük hücreli akciğer kanserinin en sık görülen endokrin paraneoplastik sendromudur (yaklaşık %10-15); tümör kemoterapiye yanıt verdikçe sodyum normale döner.',
        trapFalse: 'en sık skuamöz hücreli akciğer kanseriyle ilişkili olup hipervolemik hiponatremi yapar',
        trapHighlight: 'skuamöz hücreli akciğer kanseriyle ilişkili olup hipervolemik hiponatremi',
      },
      {
        name: 'PTHrP ilişkili hiperkalsemi',
        target: 'Skuamöz hücreli akciğer kanserinin kemik metastazı olmaksızın parathormon ilişkili peptid salgılaması',
        hallmark: 'Yüksek kalsiyum, düşük fosfor, BASKILANMIŞ intakt PTH (< 10 pg/mL) ve yükselmiş PTHrP düzeyi',
        vignette:
          'Altmış altı yaşında sigara öykülü erkek hasta bulantı, kabızlık, poliüri ve uykuya meyil ile acile getiriliyor. Serum kalsiyumu 14.2 mg/dL, albümin 3.9 g/dL, fosfor 2.1 mg/dL ve intakt PTH 5 pg/mL ölçülüyor. Kemik sintigrafisinde metastaz bulunmuyor ancak bronkoskopide santral kavitasyon gösteren kitle saptanıyor.',
        clues: ['kalsiyumu 14.2 mg/dL', 'intakt PTH 5 pg/mL', 'Kemik sintigrafisinde metastaz bulunmuyor'],
        management: 'Agresif IV izotonik hidrasyon, kısa sürede etki için kalsitonin ve kalıcı etki için IV zoledronik asit',
        pearl: 'Akciğerin skuamöz hücreli karsinomu PTHrP aracılı humoral malignite hiperkalsemisinin en klasik nedenidir; kemik metastazına bağlı litik hiperkalsemiden PTHrP yüksekliğiyle ayrılır.',
        trapFalse: 'intakt serum parathormon düzeyi belirgin yükselmiş olarak bulunur ve küçük hücreli kanserde en sıktır',
        trapHighlight: 'intakt serum parathormon düzeyi belirgin yükselmiş olarak bulunur',
      },
      {
        name: 'Lambert-Eaton miyastenik sendromu',
        target: 'Nöromüsküler kavşaktaki presinaptik voltaj bağımlı P/Q tipi kalsiyum kanallarına karşı gelişen otoantikorlar',
        hallmark: 'Proksimal kas güçsüzlüğü, azalmış derin tendon refleksleri, otonomik disfonksiyon (ağız kuruluğu) ve egzersizle güç artışı',
        vignette:
          'Altmış iki yaşında sigara içen erkek hasta sandalyeden kalkmada zorluk, ağız kuruluğu ve kabızlık şikayetleriyle başvuruyor. Muayenede alt ekstremite proksimal kas gücü 3/5 ve patella refleksleri alınamıyor; ancak hastaya 15 saniye boyunca maksimal izometrik kasılma yaptırıldıktan sonra hem kas gücü hem de refleksleri belirgin artıyor.',
        clues: ['ağız kuruluğu ve kabızlık', 'patella refleksleri alınamıyor', 'maksimal izometrik kasılma yaptırıldıktan sonra hem kas gücü hem de refleksleri belirgin artıyor'],
        management: 'Altta yatan küçük hücreli akciğer kanserinin taranıp tedavisi ve asetilkolin salınımını artıran 3,4-diaminopiridin (amifampridin)',
        pearl: 'Tekrarlayıcı yüksek frekanslı sinir uyarımında artan (dekremental değil inkremental) yanıt verir ve oküler/bulber tutulum nadirdir.',
        trapFalse: 'gün sonunda kötüleşen pitoz-diplopi ön plandadır ve tekrarlayıcı uyarımla yanıt giderek azalır',
        trapHighlight: 'tekrarlayıcı uyarımla yanıt giderek azalır',
      },
      {
        name: 'Hipertrofik pulmoner osteoartropati',
        target: 'Megakaryositlerin akciğer kapiller yatağından şantla geçerek ekstremite uçlarında PDGF ve VEGF salgılaması',
        hallmark: 'Parmaklarda çomaklaşma, ağrılı simetrik artrit ve uzun kemiklerin (tibia/radius) distalinde periostit',
        vignette:
          'Ellidokuz yaşında periferik akciğer adenokarsinomu saptanan kadın hasta her iki ayak bileğinde ve dizinde ağrı-şişlik ile başvuruyor. Parmaklarda belirgin çomaklaşma izleniyor; çekilen tibia-fibula grafisinde kemik şaftı boyunca simetrik periosteal yeni kemik oluşumu görülüyor.',
        clues: ['periferik akciğer adenokarsinomu', 'Parmaklarda belirgin çomaklaşma', 'simetrik periosteal yeni kemik oluşumu'],
        management: 'Primer akciğer tümörünün cerrahi rezeksiyonu veya kemoterapisi ve ağrı için NSAİİ/bifosfonat',
        pearl: 'Pierre-Marie-Bamberger sendromu olarak da adlandırılır; tümör rezeke edildiğinde eklem ağrısı ve periostit hızla geriler, akciğer kanseri alt tiplerinden en sık adenokarsinomla ilişkilidir.',
        trapFalse: 'sadece küçük hücreli akciğer kanserinde görülür ve eklem grafisinde eroziv destrüktif artrit yapar',
        trapHighlight: 'eroziv destrüktif artrit yapar',
      },
    ],
  },

  // 26. Hipoksemi mekanizmaları (A-a gradient ayrımları)
  {
    branchId: 'dahiliye',
    subTopic: 'Hipoksemi Mekanizmaları ve A-a Gradienti',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Sağdan sola şant',
        target: 'Venöz kanın oksijenlenmiş alveollerle hiç karşılaşmadan doğrudan sistemik arteriyel dolaşıma katılması',
        hallmark: 'Artmış A-a oksijen gradienti ve %100 oksijen verilmesine rağmen PaO2’nin yeterince yükselmemesi',
        vignette:
          'Ellidört yaşında sepsis sonrası ağır ARDS gelişen mekanik ventilatördeki hastanın FiO2 %40 iken PaO2’si 48 mmHg ölçülüyor. Oksijen konsantrasyonu %100’e çıkarılmasına rağmen PaO2 sadece 54 mmHg’ye çıkabiliyor ve A-a gradienti 590 mmHg hesaplanıyor.',
        clues: ['FiO2 %40 iken PaO2’si 48 mmHg', 'Oksijen konsantrasyonu %100’e çıkarılmasına rağmen PaO2 sadece 54 mmHg', 'A-a gradienti 590 mmHg'],
        management: 'Alveolleri açmak için PEEP titrasyonu, prone pozisyonlama ve altta yatan anatomik/parankimal şantın tedavisi',
        pearl: 'Diğer tüm hipoksemi nedenleri %100 oksijen inhalasyonu ile düzelirken, sadece bu mekanizma (ARDS, lober atelektazi, pulmoner AVM, Eisenmenger) %100 O2’ye dirençlidir.',
        trapFalse: 'A-a gradienti normaldir ve %100 oksijen solutulduğunda PaO2 500 mmHg üzerine fırlar',
        trapHighlight: 'A-a gradienti normaldir ve %100 oksijen solutulduğunda PaO2 500 mmHg üzerine fırlar',
      },
      {
        name: 'Ventilasyon-perfüzyon uyumsuzluğu',
        target: 'Alveoler ventilasyon ile pulmoner kapiller kan akımının bölgesel oranlarının (V/Q) bozulması',
        hallmark: 'Artmış A-a gradienti ve %100 oksijen inhalasyonu ile PaO2’nin belirgin biçimde düzelmesi',
        vignette:
          'Altmış iki yaşında amfizem ve kronik bronşit hastası oda havasında PaO2 54 mmHg, PaCO2 44 mmHg ve artmış A-a gradienti (41 mmHg) ile geliyor. Nazal kanülle %40 oksijen verildiğinde PaO2 hızla 140 mmHg’ye yükseliyor.',
        clues: ['amfizem ve kronik bronşit', 'artmış A-a gradienti (41 mmHg)', '%40 oksijen verildiğinde PaO2 hızla 140 mmHg’ye yükseliyor'],
        management: 'Ek oksijen desteği ve altta yatan bronkospazm, emboli veya sekresyon tıkaçlarının tedavisi',
        pearl: 'Klinik pratikte hipokseminin EN SIK nedenidir (KOAH, astım, pulmoner emboli, pnömoni); düşük oksijen akımlarıyla bile belirgin düzelme göstermesi şanttan ayırır.',
        trapFalse: 'normal A-a oksijen gradienti ile seyreder ve ek oksijen verilmesine yanıt vermez',
        trapHighlight: 'normal A-a oksijen gradienti ile seyreder ve ek oksijen verilmesine yanıt vermez',
      },
      {
        name: 'Diffüzyon bozukluğu',
        target: 'Alveolokapiller membranın kalınlaşması veya yüzey alanının kaybı nedeniyle gaz geçişinin yavaşlaması',
        hallmark: 'Artmış A-a gradienti, istirahatte hafif hipokseminin egzersizde (kapiller geçiş süresi kısaldığı için) derinleşmesi ve düşük DLCO',
        vignette:
          'Altmış beş yaşında interstisyel akciğer fibrozisi olan hastanın istirahatte oda havasında SpO2 %93 ölçülürken, koridorda 3 dakika yürüdüğünde SpO2 %79’a düşüyor ve A-a gradienti 48 mmHg hesaplanıyor. %100 oksijen verildiğinde PaO2 normal aralığın çok üzerine çıkıyor.',
        clues: ['interstisyel akciğer fibrozisi', 'koridorda 3 dakika yürüdüğünde SpO2 %79’a düşüyor', 'A-a gradienti 48 mmHg'],
        management: 'Altta yatan interstisyel veya vasküler patolojinin tedavisi ve egzersizle desatürasyon varsa uzun süreli oksijen desteği',
        pearl: 'Egzersiz sırasında kalp debisi artıp eritrositin alveol kapillerinden geçiş süresi (0.75 sn -> 0.25 sn) kısaldığı için kalınlaşmış membrandan O2 dengelenemez ve hipoksemi belirginleşir.',
        trapFalse: 'egzersiz sırasında kapiller kan akımı hızlandığından arteriyel oksijenasyon belirgin düzelir',
        trapHighlight: 'arteriyel oksijenasyon belirgin düzelir',
      },
      {
        name: 'Alveoler hipoventilasyon',
        target: 'Dakika alveoler ventilasyonun azalmasına bağlı PaCO2 birikiminin alveoler gaz denklemine göre PAO2’yi düşürmesi',
        hallmark: 'Artmış PaCO2 ile birlikte NORMAL A-a oksijen gradienti ve ek oksijene hızlı yanıt',
        vignette:
          'Yirmi dokuz yaşında opioid aşırı dozu sonrası solunum sayısı 6/dk olan hastada oda havasında arteryel kan gazında pH 7.18, PaCO2 74 mmHg, PaO2 46 mmHg ölçülüyor. Hesaplanan A-a gradienti 11 mmHg (normal) bulunuyor.',
        clues: ['opioid aşırı dozu', 'PaCO2 74 mmHg', 'A-a gradienti 11 mmHg (normal)'],
        management: 'Nalokson gibi antidotlarla solunum depresyonunun geri döndürülmesi ve gereğinde mekanik ventilasyon',
        pearl: 'Alveoler gaz denklemine göre PAO2 = FiO2(Patm - 47) - PaCO2/0.8’dir; akciğer parankimi sağlam olduğu için A-a gradienti normaldir (10-15 mmHg), yalnız eşlik eden parankim hastalığı varsa artar.',
        trapFalse: 'A-a oksijen gradienti belirgin artmıştır ve PaCO2 genellikle 25 mmHg altındadır',
        trapHighlight: 'A-a oksijen gradienti belirgin artmıştır ve PaCO2 genellikle 25 mmHg altındadır',
      },
      {
        name: 'Yüksek irtifa hipoksemisi',
        target: 'Düşük barometrik basınca bağlı solunan havadaki parsiyel oksijen basıncının (PiO2) azalması',
        hallmark: 'Düşük PaO2’ye rağmen NORMAL A-a gradienti ve hipoksik dürtüye bağlı düşük PaCO2 (solunumsal alkaloz)',
        vignette:
          'Otuz yaşında sağlıklı dağcı 4500 metre rakıma hızlı çıktıktan sonra baş ağrısı, halsizlik ve nefes darlığı yaşıyor. Kan gazında pH 7.51, PaCO2 26 mmHg, PaO2 48 mmHg ve A-a oksijen gradienti 9 mmHg (normal) saptanıyor.',
        clues: ['4500 metre rakıma hızlı çıktıktan sonra', 'PaCO2 26 mmHg', 'A-a oksijen gradienti 9 mmHg (normal)'],
        management: 'İrtifanın azaltılması (iniş), ek oksijen ve akut dağ hastalığı profilaksisi/tedavisinde asetazolamid',
        pearl: 'Solunan oksijen fraksiyonu (%21) değişmez ancak barometrik basınç düştüğü için PiO2 azalır; hem A-a gradientinin normal olması hem de PaCO2’nin düşük olmasıyla hipoventilasyondan ayrılır.',
        trapFalse: 'hiperkapnik solunum asidozu ve belirgin artmış A-a oksijen gradienti ile seyreder',
        trapHighlight: 'hiperkapnik solunum asidozu ve belirgin artmış A-a oksijen gradienti',
      },
    ],
  },

  // 27. Glomerüler serolojik belirteçler
  {
    branchId: 'dahiliye',
    subTopic: 'Glomerüler Hastalıklar ve Serolojik Belirteçler',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2020',
    entities: [
      {
        name: 'Anti-GBM hastalığı',
        target: 'Tip IV kollajen alfa-3 zincirinin NC1 bölgesine karşı gelişen otoantikorların glomerül ve alveol bazal membranını hedeflemesi',
        hallmark: 'İmmünfloresanda lineer IgG birikimi, hızlı ilerleyen kresentik glomerülonefrit ve diffüz alveoler hemoraji',
        vignette:
          'Yirmi altı yaşında sigara içen erkek hasta 1 haftadır süren hemoptizi, nefes darlığı ve çay rengi idrar ile başvuruyor. Kreatinin 4.5 mg/dL, akciğer grafisinde bilateral alveoler infiltratlar, serum kompleman düzeyleri normal ve böbrek biyopsisinde kresent oluşumu ile bazal membran boyunca lineer IgG depolanması görülüyor.',
        clues: ['hemoptizi, nefes darlığı ve çay rengi idrar', 'kompleman düzeyleri normal', 'bazal membran boyunca lineer IgG depolanması'],
        management: 'Acil plazmaferez ile dolaşan antikorların uzaklaştırılması ve siklofosfamid + yüksek doz kortikosteroid',
        pearl: 'Sigara ve hidrokarbon maruziyeti alveol bazal membran epitoplarını açığa çıkararak pulmoner kanamayı tetikler; Alport sendromunda nakil sonrası da aynı antikor gelişebilir.',
        trapFalse: 'immünfloresan incelemede granüler IgG ve C3 birikimi ile düşük serum C3 düzeyi görülür',
        trapHighlight: 'granüler IgG ve C3 birikimi ile düşük serum C3 düzeyi',
      },
      {
        name: 'Granülomatoz polianjitis',
        target: 'Proteinaz-3’e (c-ANCA/PR3) yönelik antikorların nötrofilleri aktive ederek nekrotizan granülomatöz küçük damar vasküliti yapması',
        hallmark: 'Üst solunum yolu (kronik sinüzit, eyer burun), kaviter akciğer nodülleri, kresentik pauci-immün GN ve c-ANCA pozitifliği',
        vignette:
          'Kırk dokuz yaşında erkek hasta 4 aydır devam eden kanlı burun akıntısı, septal perforasyona bağlı eyer burun deformitesi, hemoptizi ve hızlı yükselen kreatininle başvuruyor. Toraks BT’de çok sayıda kaviter nodül, serumda c-ANCA (anti-PR3) pozitifliği ve biyopside pauci-immün nekrotizan granülomatöz vaskülit saptanıyor.',
        clues: ['eyer burun deformitesi', 'çok sayıda kaviter nodül', 'anti-PR3'],
        management: 'İndüksiyonda rituksimab veya siklofosfamid + yüksek doz steroid; idamede rituksimab/azatioprin/metotreksat',
        pearl: 'İmmünfloresan mikroskopide immün kompleks birikimi yok denecek kadar az olduğu için "pauci-immün" kresentik glomerülonefrit yapar ve serum komplemanları normaldir.',
        trapFalse: 'böbrek biyopsisinde yoğun subendotelyal immün kompleks birikimi ve granülomsuz damar tutulumu vardır',
        trapHighlight: 'yoğun subendotelyal immün kompleks birikimi ve granülomsuz',
      },
      {
        name: 'Mikroskopik polianjitis',
        target: 'Miyeloperoksidaza (p-ANCA/MPO) karşı gelişen otoantikorların küçük damarlarda granülomsuz lökositoklastik vaskülit oluşturması',
        hallmark: 'Üst solunum yolu tutulumu ve granülom OLMADAN pulmoner kapillerit, palpabl purpura, mononöritis multipleks ve p-ANCA pozitifliği',
        vignette:
          'Ellisekiz yaşında kadın hasta hemoptizi, bacaklarda palpabl purpura, düşük ayak ve hızla yükselen kreatinin (3.8 mg/dL) ile yatırılıyor. Sinüs grafisi tamamen normal, biyopside granülom görülmeyen pauci-immün kresentik glomerülonefrit ve serolojide MPO (p-ANCA) pozitifliği saptanıyor.',
        clues: ['palpabl purpura, düşük ayak', 'Sinüs grafisi tamamen normal', 'granülom görülmeyen pauci-immün'],
        management: 'Rituksimab veya siklofosfamid artı yüksek doz kortikosteroid ile immünsüpresif indüksiyon',
        pearl: 'Klinik olarak böbrek ve akciğeri tutmasıyla GPA’ya benzer ancak nazofarengeal/sinüzal yıkım (eyer burun) ve histolojik granülom bulunmamasıyla ayrılır.',
        trapFalse: 'üst solunum yollarında nekrotizan granülomlar ve c-ANCA pozitifliği ile seyreder',
        trapHighlight: 'üst solunum yollarında nekrotizan granülomlar ve c-ANCA pozitifliği',
      },
      {
        name: 'Primer membranöz nefropati',
        target: 'Podosit yüzeyindeki fosfolipaz A2 reseptörüne (PLA2R) karşı oluşan otoantikorların subepitelyal immün kompleks oluşturması',
        hallmark: 'Erişkinde nefrotik sendrom, gümüş boyasında "diken-kubbe" (spike and dome) görünümü ve serumda anti-PLA2R pozitifliği',
        vignette:
          'Elli iki yaşında erkek hasta yaygın anazarka tarzı ödem, 24 saatlik idrarda 9.2 g proteinüri ve hipoalbüminemi (1.9 g/dL) ile başvuruyor. Serum komplemanları normal, anti-PLA2R antikoru yüksek pozitif bulunuyor. Böbrek biyopsisinde kapiller duvarlarda diffüz kalınlaşma ve subepitelyal granüler IgG-C3 birikimi görülüyor.',
        clues: ['24 saatlik idrarda 9.2 g proteinüri', 'anti-PLA2R antikoru yüksek pozitif', 'subepitelyal granüler IgG-C3 birikimi'],
        management: 'ACEi/ARB ile antiproteinürik tedavi, hiperkoagülabiliteye karşı profilaksi ve yüksek riskte rituksimab/siklosporin',
        pearl: 'Antitrombin III kaybına bağlı renal ven trombozu riskinin EN YÜKSEK olduğu nefrotik sendromdur; anti-PLA2R negatif yaşlı hastalarda gizli solid tümör (kolon/akciğer) ve HBV taranmalıdır.',
        trapFalse: 'renal ven trombozu nadir görülür ve ışık mikroskopisinde podosit ayaksı çıkıntı silinmesi dışında membran normaldir',
        trapHighlight: 'renal ven trombozu nadir görülür',
      },
      {
        name: 'Membranoproliferatif glomerülonefrit',
        target: 'C3 nefritik faktör (C3 konvertazına karşı IgG otoantikoru) nedeniyle alternatif kompleman yolağının sürekli aktif kalması',
        hallmark: 'Kalıcı düşük serum C3 (normal C4), nefritik-nefrotik karma tablo ve gümüş boyasında GBM’de çift kontur ("tramvay rayı")',
        vignette:
          'Yirmi iki yaşında erkek hasta hematüri, ödem ve hipertansiyon ile başvuruyor. İdrarda 4.2 g/gün proteinüri ve dismorfik eritrositler saptanıyor. Serum C3 düzeyi 8 hafta arayla bakıldığında hala belirgin düşük (C4 normal) bulunuyor. Biyopside mezangiyal interpozisyon ve bazal membranda çift kontur görünümü izleniyor.',
        clues: ['C3 düzeyi 8 hafta arayla bakıldığında hala belirgin düşük', 'C4 normal', 'çift kontur görünümü'],
        management: 'Hepatit C, kriyoglobulinemi ve monoklonal gammopatinin dışlanması; kompleman aracılı formda mikofenolat/ekulizumab değerlendirmesi',
        pearl: 'Poststreptokoksik GN’de C3 düzeyi 6-8 haftada normale dönerken bu tabloda (özellikle C3 glomerülopati/Tip II dens depozit hastalığında) C3 kalıcı olarak düşük kalır.',
        trapFalse: 'serum C3 düzeyi hastalık aktivitesinden bağımsız olarak her zaman normal aralıktadır',
        trapHighlight: 'serum C3 düzeyi hastalık aktivitesinden bağımsız olarak her zaman normal aralıktadır',
      },
    ],
  },

  // 28. Nefrolitiazis taş tipleri
  {
    branchId: 'dahiliye',
    subTopic: 'Nefrolitiazis Taş Tipleri ve Metabolik Yaklaşım',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kalsiyum oksalat taşı',
        target: 'İdiyopatik hiperkalsiüri veya yağ malabsorpsiyonu/etilen glikol toksisitesine bağlı enterik hiperoksalüri sonucu kristalleşme',
        hallmark: 'En sık taş tipi, direkt grafide radyoopak görünüm ve idrarda zarf veya kum saati şeklinde kristaller',
        vignette:
          'Kırk iki yaşında Crohn hastalığı nedeniyle distal ileum rezeksiyonu geçirmiş erkek hasta sol böğür ağrısı ve hematüri ile başvuruyor. Direkt üriner sistem grafisinde radyoopak taş görülüyor ve idrar mikroskopisinde çok sayıda mektup zarfı şeklinde kristal saptanıyor.',
        clues: ['distal ileum rezeksiyonu', 'radyoopak taş', 'mektup zarfı şeklinde kristal'],
        management: 'Bol sıvı alımı, diyette normal kalsiyum (kısıtlanmamalı), düşük sodyum/oksalat ve idiopatik hiperkalsiüride tiazid diüretik + potasyum sitrat',
        pearl: 'İnce bağırsak rezeksiyonu sonrası emilemeyen yağ asitleri bağırsak lümenindeki kalsiyumu bağlar; serbest kalan oksalat aşırı emilerek idrara geçer. Diyette kalsiyumu aşırı kısıtlamak oksalat emilimini artıracağı için hatalıdır.',
        trapFalse: 'tekrarını önlemek için hastaya diyette kalsiyum alımını sıfıra yakın kısıtlaması önerilir',
        trapHighlight: 'diyette kalsiyum alımını sıfıra yakın kısıtlaması önerilir',
      },
      {
        name: 'Strüvit taşı',
        target: 'Üreaz üreten bakterilerin (Proteus, Klebsiella, Staphylococcus saprophyticus) üreyi amonyak ve bikarbonata parçalayarak idrarı alkalileştirmesi',
        hallmark: 'Alkali idrar (pH > 7.2), geyik boynuzu (staghorn) dallanmış taşlar ve idrarda tabut kapağı kristalleri',
        vignette:
          'Ellidört yaşında nörojen mesane ve tekrarlayan idrar yolu enfeksiyonları olan kadın hastada direkt grafide sağ böbrek pelvis ve kalikslerini tamamen dolduran geyik boynuzu şeklinde radyoopak taş saptanıyor. İdrar pH’sı 8.0 ve mikroskopide tabut kapağı biçiminde prizmatik kristaller izleniyor.',
        clues: ['geyik boynuzu şeklinde radyoopak taş', 'İdrar pH’sı 8.0', 'tabut kapağı biçiminde'],
        management: 'Taşın perkütan nefrolitotomi/cerrahi ile tamamen temizlenmesi ve kültüre uygun antibiyotik tedavisi (üreme E. coli değil üreaz+ etkendir)',
        pearl: 'Magnezyum amonyum fosfattan oluşur; taş parçaları içinde bakteriler korunduğu için taş tamamen çıkarılmadan yalnızca antibiyotikle enfeksiyon kür edilemez.',
        trapFalse: 'en sık etken üreaz negatif Escherichia coli olup idrar pH’sı 5.0’ın altındadır',
        trapHighlight: 'üreaz negatif Escherichia coli olup idrar pH’sı 5.0’ın altındadır',
      },
      {
        name: 'Ürik asit taşı',
        target: 'Düşük idrar hacmi ve aşırı asidik idrar pH’sı (< 5.5) zemininde çözünürlüğü azalan pürin metabolitinin çökmesi',
        hallmark: 'Direkt grafide RADYOLÜSEN (görünmeyen) ancak BT/USG’de saptanan taş ve elmas/baklava şekilli kristaller',
        vignette:
          'Ellidokuz yaşında kronik ishal ve gut artriti öykülü erkek hasta renal kolik ile başvuruyor. Çekilen direkt üriner grafide taş görülmüyor ancak kontrastsız abdominal BT’de üreterde 7 mm taş izleniyor. İdrar pH’sı 5.0 ve mikroskopide sarı-kahverengi baklava dilimi kristaller görülüyor.',
        clues: ['direkt üriner grafide taş görülmüyor', 'İdrar pH’sı 5.0', 'baklava dilimi kristaller'],
        management: 'Potasyum sitrat veya sodyum bikarbonat ile idrar pH’sını 6.5-7.0’a alkalileştirerek taşı eritme ve hiperürikozüride allopürinol',
        pearl: 'Cerrahi gerektirmeden medikal olarak idrar alkalinizasyonuyla tamamen eritilebilen başlıca taş tipidir; radyolüsen taşlarda ilk akla gelir.',
        trapFalse: 'direkt üriner sistem grafisinde en parlak radyoopak görüntüyü verir ve idrar asitlendirilmelidir',
        trapHighlight: 'en parlak radyoopak görüntüyü verir ve idrar asitlendirilmelidir',
      },
      {
        name: 'Sistin taşı',
        target: 'Proksimal tübülde dibazik aminoasit (sistin, ornitin, lizin, arginin) geri emilimini sağlayan SLC3A1/SLC7A9 taşıyıcı defekti',
        hallmark: 'Çocukluk/genç erişkinlikte tekrarlayan taşlar, altıgen (hekzagonal) kristaller ve pozitif siyanid-nitroprussid testi',
        vignette:
          'On yedi yaşında erkek hasta çocukluktan beri 4. kez böbrek taşı düşürme öyküsüyle başvuruyor. Zayıf radyoopak taş saptanan hastanın asidik idrar mikroskopisinde düz kenarlı altıgen kristaller görülüyor ve idrar sodyum siyanid-nitroprussid testi pozitif bulunuyor.',
        clues: ['çocukluktan beri 4. kez böbrek taşı', 'düz kenarlı altıgen kristaller', 'sodyum siyanid-nitroprussid testi pozitif'],
        management: 'Günde > 3-4 L hidrasyon, potasyum sitrat ile agresif idrar alkalinizasyonu (pH > 7.5) ve tiopronin / D-penisilamin ile şelasyon',
        pearl: 'Otozomal resesif kalıtılan sistinüride gelişir; taşlar çok sert olduğu için ekstrakorporeal şok dalga litotripsisine (ESWL) dirençlidir.',
        trapFalse: 'ekstrakorporeal şok dalga litotripsisine en duyarlı yumuşak taş tipidir ve idrar pH’sı < 5 tutulmalıdır',
        trapHighlight: 'şok dalga litotripsisine en duyarlı yumuşak taş tipidir',
      },
      {
        name: 'Kalsiyum fosfat taşı',
        target: 'Yüksek idrar pH’sı (> 6.5) ve hiperkalsiüri/hipositratüri ortamında brushit veya karbonat apatit çökelmesi',
        hallmark: 'Alkali idrarda (Tip 1 Distal RTA veya primer hiperparatiroidizmde) oluşan radyoopak kama/prizma kristalli taşlar',
        vignette:
          'Otuz beş yaşında hipokalemik normal anyon açıklı metabolik asidozu bulunan kadın hastada bilateral medüller nefrokalsinozis ve tekrarlayan taşlar saptanıyor. İdrar pH’sı 7.1, direkt grafide radyoopak taşlar ve idrarda kama şekilli kristaller görülüyor.',
        clues: ['hipokalemik normal anyon açıklı metabolik asidozu', 'İdrar pH’sı 7.1', 'kama şekilli kristaller'],
        management: 'Altta yatan distal tübüler asidoz veya hiperparatiroidizmin tedavisi, tiazid diüretik ve idrar pH’sını aşırı yükseltmeden dikkatli sitrat yönetimi',
        pearl: 'Tip 1 Distal RTA ve primer hiperparatiroidizmde en karakteristik taş tipidir; ESWL’ye dirençli olan brushit formuna dönüşebilir.',
        trapFalse: 'radyolüsen yapıdadır ve yalnızca pH 5.0’ın altındaki aşırı asidik idrarda oluşur',
        trapHighlight: 'radyolüsen yapıdadır ve yalnızca pH 5.0’ın altındaki aşırı asidik idrarda oluşur',
      },
    ],
  },
];
