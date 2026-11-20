import { StructuredClusterSeed } from './tusTypes';

export const STRUCTURED_INTERNAL_2_CLUSTERS: StructuredClusterSeed[] = [
  // 1. Mikrositer ve makrositer anemiler
  {
    branchId: 'dahiliye',
    subTopic: 'Mikrositer ve Makrositer Anemiler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Demir eksikliği anemisi',
        target: 'Vücut depolarının tükenmesine bağlı hem sentezinde protoporfirin IX içine bağlanacak substrat yetersizliği',
        hallmark: 'Düşük ferritin (< 15-30 ng/mL), yüksek TDBK, düşük transferrin satürasyonu, yüksek RDW ve kaşık tırnak',
        vignette:
          'Otuz iki yaşında hipermenoresi olan kadın hasta yorgunluk, toprak yeme isteği ve yutma güçlüğüyle başvuruyor. Muayenede tırnaklarda düzleşme, angüler şeilit ve dilde düzleşme görülüyor. Hemoglobin 8.6 g/dL, MCV 68 fL, RDW %19, serum demiri 20 mcg/dL, TDBK 460 mcg/dL ve ferritin 6 ng/mL saptanıyor.',
        clues: ['toprak yeme isteği', 'MCV 68 fL, RDW %19', 'TDBK 460 mcg/dL ve ferritin 6 ng/mL'],
        management: 'Altta yatan kanama odağının (erkek ve postmenopozal kadında GİS endoskopisi) araştırılması ve oral ferröz sülfat tedavisi',
        pearl: 'En erken düşen parametre ferritindir (depolar), ardından serum demiri düşer ve TDBK artar; tedavide retikülosit krizi 7-10. günde pik yapar, depolar dolana dek tedavi 3-6 ay sürdürülür.',
        trapFalse: 'serum ferritin düzeyi yüksek ve total demir bağlama kapasitesi belirgin düşüktür',
        trapHighlight: 'serum ferritin düzeyi yüksek ve total demir bağlama kapasitesi belirgin düşüktür',
      },
      {
        name: 'Kronik hastalık anemisi',
        target: 'IL-6 uyarısıyla karaciğerden artan hepsidin sentezinin ferroportini degrade ederek demiri makrofajlarda hapsetmesi',
        hallmark: 'Yüksek/normal ferritin, DÜŞÜK TDBK, düşük serum demiri ve yüksek inflamasyon belirteçleri',
        vignette:
          'Altmış bir yaşında aktif romatoid artritli hastada hemoglobin 9.8 g/dL, MCV 79 fL, CRP 68 mg/L, serum demiri 28 mcg/dL, TDBK 195 mcg/dL ve ferritin 280 ng/mL ölçülüyor. Kemik iliği aspirasyonunda makrofajlarda artmış hemosiderin, eritroblastlarda ise azalmış sideroblast izleniyor.',
        clues: ['aktif romatoid artritli', 'TDBK 195 mcg/dL', 'ferritin 280 ng/mL'],
        management: 'Altta yatan kronik inflamatuvar veya enfeksiyöz hastalığın kontrol altına alınması',
        pearl: 'Demir eksikliğinden en kesin farkı TDBK’nın düşük ve ferritinin normal/yüksek olmasıdır; serum soluble transferrin reseptörü (sTfR) normalken demir eksikliğinde yüksektir.',
        trapFalse: 'hepsidin düzeyi baskılanmıştır ve total demir bağlama kapasitesi belirgin artmıştır',
        trapHighlight: 'hepsidin düzeyi baskılanmıştır ve total demir bağlama kapasitesi belirgin artmıştır',
      },
      {
        name: 'Sideroblastik anemi',
        target: 'ALAS2 mutasyonu, kurşun, izoniazid veya miyelodisplazi nedeniyle eritroid mitokondrilerde protoporfirin IX sentez defekti',
        hallmark: 'Kemik iliği Prusya mavisi boyasında çekirdek etrafında halka sideroblastlar, yüksek serum demiri/ferritin ve dimorfik periferik yayma',
        vignette:
          'Altmış sekiz yaşında alkol ve tüberküloz için izoniazid kullanım öyküsü olan erkek hastada hemoglobin 8.9 g/dL, MCV 76 fL, RDW %22, serum demiri 195 mcg/dL, transferrin satürasyonu %82 ve ferritin 620 ng/mL bulunuyor. Kemik iliğinde Prusya mavisi ile eritroblast çekirdeğini saran demir granülleri görülüyor.',
        clues: ['izoniazid kullanım öyküsü', 'serum demiri 195 mcg/dL', 'eritroblast çekirdeğini saran demir granülleri'],
        management: 'Sorumlu etkenin (alkol, izoniazid, kurşun) uzaklaştırılması ve X’e bağlı kalıtsal veya izoniazid ilişkili formda yüksek doz piridoksin (B6)',
        pearl: 'Demir mitokondriye girer ancak hem halkasına bağlanamadığı için çekirdek çevresinde birikir; hemoliz olmadan demir yüklenmesiyle seyreden başlıca mikrositer (edinsel MDS’de makrositer olabilir) tablodur.',
        trapFalse: 'serum demiri ve ferritin düzeyleri çok düşüktür, kemik iliğinde depo demiri bulunmaz',
        trapHighlight: 'kemik iliğinde depo demiri bulunmaz',
      },
      {
        name: 'Vitamin B12 eksikliği',
        target: 'İntrinsik faktör eksikliği (pernisiyöz) veya ileal malabsorpsiyon nedeniyle DNA sentezi ve metilmalonil-CoA izomerizasyonunun bozulması',
        hallmark: 'Makrositer anemi (MCV > 100 fL), hipersegmente nötrofiller, yüksek homosistein + yüksek metilmalonik asit ve subakut kombine dejenerasyon',
        vignette:
          'Ellidokuz yaşında vegan beslenmeyen ancak otoimmün tiroiditi bulunan kadın hasta el-ayaklarda uyuşma, yürürken dengesizlik ve dilde yanma ile başvuruyor. Hemoglobin 7.8 g/dL, MCV 118 fL, LDH 1450 U/L, periferik yaymada 6 loblu nötrofiller saptanıyor; hem homosistein hem de metilmalonik asit yüksek ölçülüyor.',
        clues: ['el-ayaklarda uyuşma, yürürken dengesizlik', 'MCV 118 fL, LDH 1450 U/L', 'hem homosistein hem de metilmalonik asit yüksek'],
        management: 'Parenteral siyanokobalamin / hidroksokobalamin replasmanı ve anti-intrinsik faktör antikorunun araştırılması',
        pearl: 'Metilmalonik asit artışı kobalamin eksikliğini folat eksikliğinden ayırır ve posterior kolon/kortikospinal traktus demiyelinizasyonuna (nörolojik hasar) yol açar.',
        trapFalse: 'yüksek doz folat verilmesi hem hematolojik hem de nörolojik bulguları kalıcı olarak düzeltir',
        trapHighlight: 'nörolojik bulguları kalıcı olarak düzeltir',
      },
      {
        name: 'Folat eksikliği',
        target: 'Diyet yetersizliği, metotreksat/fenitoin kullanımı veya hemolizde artmış ihtiyaca bağlı timidin/pürin nükleotid sentez bozukluğu',
        hallmark: 'Megaloblastik makrositer anemi, yüksek homosistein ancak NORMAL metilmalonik asit ve nörolojik bulgu yokluğu',
        vignette:
          'Kırk sekiz yaşında kronik alkolizmi ve keçi sütü ağırlıklı yetersiz beslenmesi olan erkek hasta halsizlik ile başvuruyor. Hemoglobin 8.1 g/dL, MCV 114 fL, periferik yaymada makroovalositler ve hipersegmente nötrofiller izleniyor. Nörolojik muayenesi tamamen normal, serum homosisteini yüksek ancak metilmalonik asit normal ölçülüyor.',
        clues: ['kronik alkolizmi', 'Nörolojik muayenesi tamamen normal', 'metilmalonik asit normal'],
        management: 'Önce kobalamin düzeyinin normal olduğunun doğrulanması, ardından oral folik asit replasmanı',
        pearl: 'Vücut depoları sadece 3-4 ay yeterli olduğu için hızla tükenir; tek başına folik asit vermek eşlik eden bir B12 eksikliğinde anemiyi düzeltip nörolojik yıkımı maskeleyebilir.',
        trapFalse: 'serum metilmalonik asit düzeyi belirgin yükselir ve ağır arka kordon nöropatisi gelişir',
        trapHighlight: 'serum metilmalonik asit düzeyi belirgin yükselir ve ağır arka kordon nöropatisi',
      },
    ],
  },

  // 2. Hemolitik anemiler
  {
    branchId: 'dahiliye',
    subTopic: 'Hemolitik Anemiler Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Herediter sferositoz',
        target: 'Ankirin, spektrin veya band 3 protein mutasyonlarına bağlı eritrosit membran iskelet kaybı ve yüzey/hacim oranı azalması',
        hallmark: 'Periferik yaymada santral solukluğu olmayan küçük küresel eritrositler, yüksek MCHC, splenomegali ve pozitif ozmotik frajilite / EMA bağlanma testi',
        vignette:
          'Yirmi iki yaşında genç erkek hasta tekrarlayan sarılık, safra kesesi taşı ve dalak büyüklüğü nedeniyle inceleniyor. Hemoglobin 10.4 g/dL, MCV 84 fL, MCHC 37.2 g/dL (yüksek), retikülosit %7 bulunuyor. Direkt Coombs negatif, periferik yaymada sferositler görülüyor ve ozmotik frajilite testi artmış saptanıyor.',
        clues: ['MCHC 37.2 g/dL (yüksek)', 'Direkt Coombs negatif', 'ozmotik frajilite testi artmış'],
        management: 'Folik asit desteği ve orta-ağır olgularda (5 yaş sonrası, kapsüllü bakteri aşıları sonrası) splenektomi',
        pearl: 'Parvovirüs B19 enfeksiyonu ile akut aplastik kriz (retikülositopeni) gelişebilir; MCHC artışının görüldüğü klasik kalıtsal membranopatidir ve günümüzde en duyarlı tarama testi eozin-5-maleimid (EMA) akım sitometrisidir.',
        trapFalse: 'direkt Coombs testi pozitiftir ve splenektomi sonrası sferositler periferik yaymadan tamamen kaybolur',
        trapHighlight: 'direkt Coombs testi pozitiftir ve splenektomi sonrası sferositler periferik yaymadan tamamen kaybolur',
      },
      {
        name: 'Paroksismal nokturnal hemoglobinüri',
        target: 'Edinsel PIGA gen mutasyonuna bağlı GPI çıpası eksikliği ve CD55/CD59 kompleman inhibitörlerinin eritrosit yüzeyinde kaybı',
        hallmark: 'Sabah koyu idrar (intravasküler hemoliz), pansitopeni, atipik venöz trombozlar (Budd-Chiari) ve akım sitometride CD55/CD59 kaybı',
        vignette:
          'Otuz dört yaşında kadın hasta özellikle sabah ilk idrarının çay renginde olması, yorgunluk ve sağ üst kadran ağrısıyla başvuruyor. Laboratuvarda pansitopeni, çok yüksek LDH, düşük haptoglobin, idrarda hemosiderinüri ve batın Doppler USG’de hepatik ven trombozu saptanıyor. Akım sitometride FLAER/CD59 negatif klon görülüyor.',
        clues: ['sabah ilk idrarının çay renginde olması', 'pansitopeni', 'hepatik ven trombozu'],
        management: 'Kompleman C5 inhibitörü (ekulizumab veya ravulizumab) tedavisi (meningokok aşısı sonrası) ve gerekirse kemik iliği nakli',
        pearl: 'Kazanılmış bir hematopoetik kök hücre hastalığıdır; kompleman aracılı hemolizin yanı sıra en sık ölüm nedeni intraabdominal/serebral venöz trombozlardır.',
        trapFalse: 'otozomal dominant kalıtılır ve akım sitometride CD55 ile CD59 ekspresyonu aşırı artmıştır',
        trapHighlight: 'otozomal dominant kalıtılır ve akım sitometride CD55 ile CD59 ekspresyonu aşırı artmıştır',
      },
      {
        name: 'Sıcak tip otoimmün hemolitik anemi',
        target: 'Rh antijenlerine karşı gelişen IgG otoantikorlarının 37°C’de eritrositlere bağlanıp dalak makrofajlarınca fagositozu',
        hallmark: 'Pozitif direkt Coombs (IgG) testi, periferik yaymada mikrosferositler, splenomegali ve yüksek retikülosit',
        vignette:
          'Kırk bir yaşında sistemik lupus eritematozus öykülü kadın hasta ani başlayan halsizlik, çarpıntı ve sarılıkla başvuruyor. Hemoglobin 6.8 g/dL, retikülosit %11, LDH 920 U/L, indirekt bilirubin 4.1 mg/dL, haptoglobin ölçülemeyecek kadar düşük bulunuyor. Periferik yaymada sferositler ve direkt antiglobulin testinde IgG pozitifliği saptanıyor.',
        clues: ['sistemik lupus eritematozus', 'Periferik yaymada sferositler', 'direkt antiglobulin testinde IgG pozitifliği'],
        management: 'İlk basamakta yüksek doz kortikosteroid, dirençli olgularda rituksimab veya splenektomi ve altta yatan KLL/SLE tedavisi',
        pearl: 'Sıcak tipte IgG sorumlu olup dalakta ekstravasküler yıkım baskındır; soğuk aglütinin hastalığında ise IgM aracılı C3d pozitifliği ve akrosiyanoz vardır.',
        trapFalse: 'antikorlar IgM yapısındadır, 4°C’de reaksiyon verir ve steroidlere yanıt oldukça kötüdür',
        trapHighlight: 'IgM yapısındadır, 4°C’de reaksiyon verir ve steroidlere yanıt oldukça kötüdür',
      },
      {
        name: 'G6PD eksikliği',
        target: 'Pentoz fosfat yolunun ilk enzim defektine bağlı NADPH ve indirgenmiş glutatyon üretilememesi sonucu oksidatif hemoglobin denatürasyonu',
        hallmark: 'Bakla veya primakin/dapson/sülfonamid maruziyeti sonrası akut hemoliz, periferik yaymada ısırılmış hücreler ve Heinz cisimcikleri',
        vignette:
          'Yirmi beş yaşında erkek hasta idrar yolu enfeksiyonu için TMP-SMX başladıktan 2 gün sonra ani sırt ağrısı, sarılık ve koyu kırmızı idrarla acile geliyor. Periferik yaymada kenarı koparılmış gibi duran eritrositler ve supravitral boyamada denatüre hemoglobin çökeltileri izleniyor.',
        clues: ['TMP-SMX başladıktan 2 gün sonra', 'kenarı koparılmış gibi duran eritrositler', 'denatüre hemoglobin çökeltileri'],
        management: 'Tetikleyici oksidan ilacın/besinin kesilmesi ve hidrasyon; enzim düzeyi ölçümünün akut atak geçtikten sonra yapılması',
        pearl: 'Akut hemoliz krizinde en yaşlı eritrositler parçalanıp dolaşıma enzimce zengin genç retikülositler çıktığı için enzim testi yalancı normal çıkabilir; test ataktan 2-3 ay sonra tekrarlanmalıdır.',
        trapFalse: 'akut hemoliz krizi sırasında ölçülen enzim düzeyi tanıyı kesinleştirmede her zaman en güvenilir zamandır',
        trapHighlight: 'akut hemoliz krizi sırasında ölçülen enzim düzeyi tanıyı kesinleştirmede her zaman en güvenilir',
      },
      {
        name: 'Mikroanjiyopatik hemolitik anemi',
        target: 'Küçük damarlardaki fibrin ağlarına veya mekanik kalp kapaklarına çarpan eritrositlerin intravasküler parçalanması',
        hallmark: 'Periferik yaymada bol şistosit (parçalanmış/miğfer hücre), çok yüksek LDH, düşük haptoglobin ve negatif Coombs',
        vignette:
          'Ellidokuz yaşında malign hipertansiyon (230/135 mmHg) ve böbrek yetmezliğiyle gelen hastada hemoglobin 7.9 g/dL, trombosit 78.000/mm3, LDH 1400 U/L ve retikülosit %6 bulunuyor. Direkt Coombs negatif iken periferik yaymada her alanda miğfer şeklinde parçalanmış eritrositler görülüyor.',
        clues: ['230/135 mmHg', 'Direkt Coombs negatif', 'miğfer şeklinde parçalanmış eritrositler'],
        management: 'Altta yatan tetikleyicinin (malign HT, TTP, HÜS, DİK, mekanik kapak disfonksiyonu) acil özgül tedavisi',
        pearl: 'Coombs negatif intravasküler hemolizle birlikte periferik yaymada şistosit görülmesi eritrositlerin damar içi mekanik travmaya uğradığının kesin kanıtıdır.',
        trapFalse: 'periferik yaymada belirgin sferositoz hakimdir ve direkt Coombs testi kuvvetli pozitiftir',
        trapHighlight: 'direkt Coombs testi kuvvetli pozitiftir',
      },
    ],
  },

  // 3. Trombositopeni ve primer hemostaz bozuklukları
  {
    branchId: 'dahiliye',
    subTopic: 'Trombositopeni ve Primer Hemostaz Bozuklukları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'İmmün trombositopeni',
        target: 'Trombosit yüzeyindeki GPIIb/IIIa glikoproteinlerine karşı gelişen IgG otoantikorlarının dalakta makrofaj klirensini hızlandırması',
        hallmark: 'Diğer serilerin ve periferik yaymanın tamamen normal olduğu izole trombositopeni, kemik iliğinde artmış megakaryositler',
        vignette:
          'Yirmi dokuz yaşında sağlıklı kadın hasta bacaklarda peteşiler ve burun kanamasıyla başvuruyor. Organomegali yok. Hemoglobin 13.1 g/dL, lökosit 6800/mm3, trombosit 9000/mm3, PT ve aPTT normal ölçülüyor. Periferik yaymada iri trombositler dışında patolojik hücre veya şistosit izlenmiyor.',
        clues: ['Organomegali yok', 'trombosit 9000/mm3, PT ve aPTT normal', 'şistosit izlenmiyor'],
        management: 'Kanama veya trombosit < 20-30.000 ise ilk basamak kortikosteroid ve/veya acil durumda IVIG; dirençte rituksimab, TPO-RA veya splenektomi',
        pearl: 'Tanı bir dışlama tanısıdır; şistosit veya splenomegali saptanmaması ve diğer hematolojik serilerin normal olması esastır, aktif hayati kanama yoksa trombosit transfüzyonu etkisizdir.',
        trapFalse: 'periferik yaymada bol şistosit görülür ve ilk basamakta profilaktik trombosit transfüzyonu yapılır',
        trapHighlight: 'bol şistosit görülür ve ilk basamakta profilaktik trombosit transfüzyonu',
      },
      {
        name: 'Trombotik trombositopenik purpura',
        target: 'ADAMTS13 metaloproteinaz eksikliği veya otoantikoru sonucu ultra-büyük vWF multimerlerinin mikrotrombozlar oluşturması',
        hallmark: 'Klasik beşli (MAHA/şistosit, trombositopeni, ateş, nörolojik bulgular, böbrek hasarı) ve < %10 ADAMTS13 aktivitesi',
        vignette:
          'Otuz altı yaşında kadın hasta ani başlayan konfüzyon, konuşma bozukluğu, ateş ve yaygın purpura ile acile getiriliyor. Hemoglobin 7.6 g/dL, trombosit 14.000/mm3, LDH 1890 U/L, kreatinin 1.7 mg/dL, PT ve aPTT tamamen normal bulunuyor. Yaymada bol şistosit izleniyor.',
        clues: ['konfüzyon, konuşma bozukluğu, ateş', 'PT ve aPTT tamamen normal', 'Yaymada bol şistosit'],
        management: 'ADAMTS13 sonucu beklenmeden ACİL PLAZMA DEĞİŞİMİ (plazmaferez) + kortikosteroid (+ kaplasizumab/rituksimab); trombosit transfüzyonundan KAÇINILMALIDIR',
        pearl: 'Trombosit transfüzyonu yeni mikrotrombüsleri tetikleyerek santral sinir sistemi iskemisini ve mortaliteyi artırdığı için yaşamı tehdit eden kanama dışında KONTRENDİKEDİR.',
        trapFalse: 'tedavide ilk basamak acil trombosit süspansiyonu replasmanı ve yüksek doz heparindir',
        trapHighlight: 'acil trombosit süspansiyonu replasmanı ve yüksek doz heparindir',
      },
      {
        name: 'Hemolitik üremik sendrom',
        target: 'Shiga toksini (tipik) veya alternatif kompleman düzenleyici faktör mutasyonlarının (atipik) renal endotel hasarı oluşturması',
        hallmark: 'Kanlı ishal prodromu sonrası trombositopeni, şistositli MAHA ve belirgin akut böbrek yetmezliği (normal PT/aPTT)',
        vignette:
          'On dokuz yaşında erkek hasta 5 gün önce geçirdiği ateşsiz kanlı ishal atağının ardından gelişen oligüri, yaygın ödem ve soluklukla başvuruyor. Hemoglobin 7.4 g/dL, trombosit 32.000/mm3, kreatinin 5.6 mg/dL, LDH 1420 U/L, PT/aPTT normal ve yaymada şistositler saptanıyor.',
        clues: ['5 gün önce geçirdiği ateşsiz kanlı ishal', 'kreatinin 5.6 mg/dL', 'PT/aPTT normal ve yaymada şistositler'],
        management: 'Tipik (STEC) formda destek tedavisi ve diyaliz (antibiyotik verilmez); atipik kompleman aracılı formda ekulizumab',
        pearl: 'Tipik formda böbrek yetmezliği çok belirginken nörolojik bulgular daha geri plandadır ve ADAMTS13 aktivitesi normaldir (> %10).',
        trapFalse: 'tipik STEC ilişkili formda yüksek doz antibiyotik ve acil plazmaferez standart tedavidir',
        trapHighlight: 'yüksek doz antibiyotik ve acil plazmaferez standart tedavidir',
      },
      {
        name: 'Heparin ilişkili trombositopeni',
        target: 'Trombosit faktör 4 (PF4)-heparin kompleksine karşı oluşan IgG antikorlarının trombositleri aktive ederek yaygın tromboz yapması',
        hallmark: 'Heparinden 5-10 gün sonra trombositlerin > %50 düşmesi, kanama yerine ARTERİYEL/VENÖZ TROMBOZ ve 4T skoru yüksekliği',
        vignette:
          'Altmış beş yaşında kalça cerrahisi sonrası 7 gündür fraksiyone olmayan heparin profilaksisi alan erkek hastada trombosit sayısı 260.000’den 85.000/mm3’e düşüyor ve aynı gün sol bacakta akut derin ven trombozu gelişiyor. Anti-PF4/heparin ELISA testi pozitif bulunuyor.',
        clues: ['7 gündür fraksiyone olmayan heparin', '260.000’den 85.000/mm3’e düşüyor', 'derin ven trombozu gelişiyor'],
        management: 'Tüm heparin ürünlerinin (DMAH dahil) DERHAL kesilmesi ve direkt trombin inhibitörü (argatroban/bivalirudin) veya fondaparinuks başlanması',
        pearl: 'Trombositopeniye rağmen kanama değil yaşamı tehdit eden tromboz yapar! Trombositler normale dönene kadar tek başına varfarin başlanması protein C düşüşüyle cilt nekrozuna yol açabileceği için kontrendikedir.',
        trapFalse: 'tedavide fraksiyone olmayan heparin kesilip hemen düşük molekül ağırlıklı heparine veya varfarine geçilmelidir',
        trapHighlight: 'düşük molekül ağırlıklı heparine veya varfarine geçilmelidir',
      },
      {
        name: 'Von Willebrand hastalığı',
        target: 'Endotel ve megakaryositlerden sentezlenen, trombosit GPIb’ye bağlanmayı sağlayan ve Faktör VIII’i taşıyan glikoprotein eksikliği',
        hallmark: 'Uzamış kanama zamanı/PFA-100, hafif uzamış veya normal aPTT, normal trombosit sayısı ve mukozal kanamalar (menoraji, epistaksis)',
        vignette:
          'Yirmi dört yaşında kadın hasta çocukluktan beri süren sık burun kanamaları, diş çekimi sonrası uzamış kanama ve şiddetli adet kanamalarıyla başvuruyor. Babasında da benzer öykü mevcut. Trombosit 245.000/mm3, PT normal, aPTT 41 sn (hafif uzun), Faktör VIII %35 ve ristosetin kofaktör aktivitesi çok düşük bulunuyor.',
        clues: ['diş çekimi sonrası uzamış kanama ve şiddetli adet kanamaları', 'aPTT 41 sn (hafif uzun)', 'ristosetin kofaktör aktivitesi çok düşük'],
        management: 'Tip 1 olgularda endotel depolarından salınımı artıran desmopressin (DDAVP); Tip 3 veya DDAVP yanıtsız olgularda vWF/Faktör VIII konsantresi',
        pearl: 'En sık kalıtsal kanama bozukluğudur; Tip 2B’de trombositopeni ve DDAVP ile agregasyon riski olduğu için Tip 2B ve Tip 3’te desmopressin kullanılmaz.',
        trapFalse: 'X’e bağlı resesif kalıtılır ve derin eklem içi hematomlar ile kas içi kanamalar ön plandadır',
        trapHighlight: 'X’e bağlı resesif kalıtılır ve derin eklem içi hematomlar',
      },
    ],
  },

  // 4. Akut ve kronik lösemiler
  {
    branchId: 'dahiliye',
    subTopic: 'Akut ve Kronik Lösemiler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Akut promiyelositik lösemi',
        target: 't(15;17) translokasyonu sonucu oluşan PML-RARA füzyon proteininin miyeloid olgunlaşmayı promiyelosit aşamasında durdurması',
        hallmark: 'Hipergranüler blastlarda demet halinde Auer çubukları (faggot hücreleri) ve ağır DİK ile kanama eğilimi',
        vignette:
          'Otuz dört yaşında kadın hasta diş eti kanaması, yaygın ekimozlar ve menoraji ile acile getiriliyor. Fibrinojen 65 mg/dL, D-dimer çok yüksek, INR 2.1 bulunuyor. Periferik yaymada bilobüler çekirdekli, sitoplazması çok sayıda Auer çubuğu demetleri içeren atipik promiyelositler görülüyor.',
        clues: ['Fibrinojen 65 mg/dL', 'bilobüler çekirdekli', 'Auer çubuğu demetleri'],
        management: 'Genetik sonuç beklenmeden derhal All-trans retinoik asit (ATRA) + arsenik trioksit başlanması ve agresif fibrinojen/trombosit desteği',
        pearl: 'Acil hematolojik tedavi başlanmazsa DİK kaynaklı intrakraniyal kanama hızla öldürür; ATRA tedavisi sırasında ateş, kilo alımı, plevral efüzyon ve dispne gelişirse farklılaşma sendromu düşünülüp deksametazon verilir.',
        trapFalse: 't(9;22) translokasyonu ile karakterizedir ve standart kemoterapiye oldukça dirençlidir',
        trapHighlight: 't(9;22) translokasyonu ile karakterizedir',
      },
      {
        name: 'Akut lenfoblastik lösemi',
        target: 'Olgunlaşmamış T veya B lenfoid prekürsörlerin klonal proliferasyonu ile kemik iliği, timus ve SSS/testis infiltrasyonu',
        hallmark: 'TdT pozitif lenfoblastlar, mediastinal kitle (T hücreli), kemik ağrısı, hepatosplenomegali ve SSS/testis tutulumu eğilimi',
        vignette:
          'On yedi yaşında erkek hasta kemik ağrıları, boyunda lenfadenopatiler ve nefes darlığıyla başvuruyor. Akciğer grafisinde ön mediastinal kitle, tam kan sayımında lökosit 82.000/mm3 (%88 yüksek çekirdek/sitoplazma oranlı granülsüz blast) saptanıyor. Blastlar MPO negatif ve TdT kuvvetli pozitif bulunuyor.',
        clues: ['ön mediastinal kitle', 'granülsüz blast', 'MPO negatif ve TdT kuvvetli pozitif'],
        management: 'Çok ajanlı indüksiyon kemoterapisi, mutlaka intratekal/sistemik SSS profilaksisi ve Ph+ olgularda imatinib/dasatinib eklenmesi',
        pearl: 'Auer çubuğu ve miyeloperoksidaz (MPO) kesinlikle negatiftir; t(12;21) iyi prognoz, erişkinde sık görülen t(9;22) Philadelphia kromozomu ise kötü prognoz göstergesidir.',
        trapFalse: 'hücreler miyeloperoksidaz pozitiftir ve santral sinir sistemi profilaksisi gerektirmez',
        trapHighlight: 'miyeloperoksidaz pozitiftir ve santral sinir sistemi profilaksisi gerektirmez',
      },
      {
        name: 'Kronik miyeloid lösemi',
        target: 't(9;22) Philadelphia kromozomu sonucu oluşan BCR-ABL1 füzyon geninin konstitütif tirozin kinaz aktivitesi',
        hallmark: 'Masif splenomegali, tüm olgunlaşma evrelerini gösteren belirgin lökositoz, bazofili ve DÜŞÜK lökosit alkalen fosfataz (LAP) skoru',
        vignette:
          'Kırk yedi yaşında erkek hasta sol üst kadranda dolgunluk ve erken doyma şikayetiyle başvuruyor. Dalak göbeğin altına kadar uzanıyor. Lökosit 165.000/mm3, periferik yaymada miyeloblasttan olgun nötrofile kadar tüm myeloid seri hücreleri, %8 bazofili, trombositoz ve düşük LAP skoru saptanıyor.',
        clues: ['Dalak göbeğin altına kadar uzanıyor', 'tüm myeloid seri hücreleri, %8 bazofili', 'düşük LAP skoru'],
        management: 'BCR-ABL tirozin kinaz inhibitörleri (imatinib, dasatinib, nilotinib) ve moleküler yanıt takibi',
        pearl: 'Lökomoid reaksiyondan düşük LAP skoru, belirgin bazofili ve t(9;22) varlığıyla ayrılır; tedavi edilmezse akselere faza ve AML/ALL’ye benzeyen blastik krize ilerler.',
        trapFalse: 'lökosit alkalen fosfataz skoru çok yüksektir ve t(15;17) translokasyonu saptanır',
        trapHighlight: 'lökosit alkalen fosfataz skoru çok yüksektir ve t(15;17)',
      },
      {
        name: 'Kronik lenfositik lösemi',
        target: 'Apoptoza dirençli (Bcl-2 aşırı eksprese) CD5+, CD19+, CD23+ olgun görünümlü B lenfositlerin monoklonal birikimi',
        hallmark: 'Yaşlı hastada mutlak lenfositoz, periferik yaymada ezilmiş/leke hücreleri (smudge cells) ve sıcak OİHA riski',
        vignette:
          'Yetmiş bir yaşında asemptomatik erkek hastanın rutin tetkikinde lökosit 64.000/mm3 (%89 küçük olgun lenfosit) saptanıyor. Servikal ve aksiller ağrısız lenfadenopatiler mevcut. Periferik yaymada çok sayıda dağılmış leke hücresi, akım sitometride CD5, CD19, CD20 (lo) ve CD23 pozitifliği görülüyor.',
        clues: ['%89 küçük olgun lenfosit', 'dağılmış leke hücresi', 'CD5, CD19, CD20 (lo) ve CD23 pozitifliği'],
        management: 'Erken evre asemptomatik olgularda tedavisiz izlem ("izle ve gör"); ilerlemiş/semptomatik hastalıkta BTK inhibitörü (ibrutinib/akalabrutinib) veya venetoklaks',
        pearl: 'Batı dünyasında en sık görülen erişkin lösemisidir; hipogammaglobulinemiye bağlı enfeksiyonlara, sıcak tip otoimmün hemolitik anemiye ve yüksek dereceli DLBCL’ye (Richter transformasyonu) yol açabilir.',
        trapFalse: 'erken evrede asemptomatik tüm hastalara tanı anında yoğun kemoterapi başlanmalıdır',
        trapHighlight: 'asemptomatik tüm hastalara tanı anında yoğun kemoterapi başlanmalıdır',
      },
      {
        name: 'Tüylü hücreli lösemi',
        target: 'BRAF V600E somatik mutasyonu taşıyan olgun B lenfositlerin ince sitoplazmik uzantılarla kemik iliğinde retikülin fibrozisi yapması',
        hallmark: 'Masif splenomegali, pansitopeni + MONOSİTOPENİ, kemik iliğinde "kuru aspirasyon" (dry tap) ve TRAP/CD103/CD25/Annexin A1 pozitifliği',
        vignette:
          'Elli beş yaşında erkek hasta halsizlik, sol yan ağrısı ve tekrarlayan enfeksiyonlarla başvuruyor. Lenfadenopati yok ancak masif splenomegali mevcut. Tam kan sayımında pansitopeni ve monosit sayısının neredeyse sıfır olduğu görülüyor. Kemik iliği aspirasyonunda materyal gelmiyor; yaymada saçaklı sitoplazmalı lenfositler izleniyor.',
        clues: ['Lenfadenopati yok ancak masif splenomegali', 'monosit sayısının neredeyse sıfır', 'Kemik iliği aspirasyonunda materyal gelmiyor'],
        management: 'Pürin analogları olan kladribin (tek kürde yüksek tam remisyon) veya pentostatin ve nükste vemurafenib',
        pearl: 'Klasik olarak lenfadenopati olmadan masif splenomegali, monositopeni ve kemik iliğinde dry tap yapar; tartrata dirençli asit fosfataz (TRAP) ve BRAF V600E pozitiftir.',
        trapFalse: 'yaygın dev lenfadenopatiler ve belirgin monositoz ile seyreder',
        trapHighlight: 'yaygın dev lenfadenopatiler ve belirgin monositoz',
      },
    ],
  },

  // 5. Miyeloproliferatif ve plazma hücre hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Miyeloproliferatif ve Plazma Hücre Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Polisitemia vera',
        target: 'JAK2 V617F (veya ekzon 12) mutasyonuna bağlı eritropoetinden bağımsız otonom panmiyeloz proliferasyonu',
        hallmark: 'Yüksek hemoglobin/hematokrit, DÜŞÜK serum eritropoetini, sıcak duş sonrası kaşıntı (akuajenik pruritus) ve eritromelalji',
        vignette:
          'Altmış yaşında erkek hasta sıcak banyo sonrası dayanılmaz kaşıntı, baş ağrısı, yüzde kızarıklık ve el-ayaklarda yanıcı ağrıyla başvuruyor. Dalak palpabl, hemoglobin 19.8 g/dL, hematokrit %60, lökosit 15.000/mm3, trombosit 540.000/mm3 ve serum eritropoetin düzeyi 1.8 mU/mL (çok düşük) ölçülüyor.',
        clues: ['sıcak banyo sonrası dayanılmaz kaşıntı', 'hematokrit %60', 'serum eritropoetin düzeyi 1.8 mU/mL'],
        management: 'Hedef hematokriti < %45 tutacak şekilde seri flebotomi, düşük doz aspirin ve yüksek riskli hastalarda hidroksiüre/ruksolitinib',
        pearl: 'Sekonder polisitemilerde (KOAH, yüksek rakım, RCC) serum eritropoetini yüksek iken, bu primer hastalıkta EPO baskılanmış ve %95’in üzerinde JAK2 mutasyonu pozitiftir.',
        trapFalse: 'serum eritropoetin düzeyi belirgin yüksek bulunur ve JAK2 mutasyonu negatiftir',
        trapHighlight: 'serum eritropoetin düzeyi belirgin yüksek bulunur',
      },
      {
        name: 'Esansiyel trombositemi',
        target: 'JAK2, CALR veya MPL mutasyonlarına bağlı izole megakaryositik hiperplazi ve aşırı trombosit üretimi',
        hallmark: 'Persistan > 450.000/mm3 trombositoz, büyük/dev trombositler, hem tromboz hem (>1 milyon/mm3’te) kazanılmış vWH kanaması',
        vignette:
          'Elli iki yaşında kadın hasta parmak uçlarında geçici kızarıklık ve yanma atakları ile başvuruyor. Hemoglobin 13.4 g/dL, lökosit 8800/mm3, trombosit 1.350.000/mm3 ölçülüyor; demir depoları ve CRP tamamen normal bulunuyor. Kemik iliğinde iri, hiperlobüle çekirdekli dev megakaryosit kümeleri ve CALR mutasyonu saptanıyor.',
        clues: ['trombosit 1.350.000/mm3', 'demir depoları ve CRP tamamen normal', 'CALR mutasyonu'],
        management: 'Düşük doz aspirin ve yaş > 60 veya tromboz öyküsü varsa sitoredüksiyon (hidroksiüre, anagrelid, pegile interferon)',
        pearl: 'Trombosit sayısı > 1-1.5 milyon/mm3 üzerine çıktığında büyük vWF multimerlerini tüketerek edinsel von Willebrand sendromu ve paradoksal kanamaya yol açar; aspirin öncesi vWF aktivitesi kontrol edilmelidir.',
        trapFalse: 'en sık trombosit yüksekliği nedenidir ve kesinlikle kanama komplikasyonu yapmaz',
        trapHighlight: 'kesinlikle kanama komplikasyonu yapmaz',
      },
      {
        name: 'Primer miyelofibrozis',
        target: 'JAK2/CALR/MPL mutant megakaryositlerden salınan PDGF ve TGF-beta’nın kemik iliğinde reaktif fibrozis ve ekstramedüller hematopoez başlatması',
        hallmark: 'Masif splenomegali, lökoeritroblastik kan tablosu, gözyaşı damlası eritrositler (dakriyosit) ve kemik iliğinde dry tap',
        vignette:
          'Altmış altı yaşında erkek hasta karında şişlik, kilo kaybı ve gece terlemesiyle başvuruyor. Dalak pelvis içine kadar uzanıyor. Periferik yaymada gözyaşı şeklinde eritrositler, çekirdekli eritrositler ve immatür granülositler (lökoeritroblastoz) görülüyor. Kemik iliği aspirasyonu kuru geliyor, biyopside yoğun retikülin ve kollajen fibrozis saptanıyor.',
        clues: ['gözyaşı şeklinde eritrositler', 'lökoeritroblastoz', 'yoğun retikülin ve kollajen fibrozis'],
        management: 'Semptomatik splenomegali için JAK1/2 inhibitörü (ruksolitinib) ve genç uygun olgularda tek küratif seçenek olarak allojenik kök hücre nakli',
        pearl: 'Gözyaşı damlası hücresi (dakriyosit) ve lökoeritroblastik yayma fibrotik iliğin karaciğer-dalakta yaptığı ekstramedüller hematopoezin klasik işaretidir.',
        trapFalse: 'periferik yaymada rulo formasyonu ve kemik iliğinde bol plazma hücresi görülmesi karakteristiktir',
        trapHighlight: 'rulo formasyonu ve kemik iliğinde bol plazma hücresi',
      },
      {
        name: 'Multipl miyelom',
        target: 'Monoklonal plazma hücrelerinin kemik iliğini infiltre ederek IL-6, RANKL ve hafif zincir immünoglobulin salgılaması',
        hallmark: 'CRAB (hiperkalsemi, böbrek yetmezliği, anemi, litik kemik lezyonları), rulo formasyonu, M-protein piki ve > %10 klonal plazma hücresi',
        vignette:
          'Altmış dokuz yaşında bel ağrısı ve yorgunlukla başvuran hastanın kalsiyumu 11.8 mg/dL, kreatinini 2.6 mg/dL, hemoglobini 8.9 g/dL, total protein 10.4 g/dL ve albümini 3.0 g/dL bulunuyor. Kafatası grafisinde keskin kenarlı zımba deliği litik lezyonlar ve yaymada rulo dizilimi görülüyor.',
        clues: ['kalsiyumu 11.8 mg/dL, kreatinini 2.6 mg/dL', 'zımba deliği litik lezyonlar', 'rulo dizilimi'],
        management: 'Bortezomib + lenalidomid + deksametazon (+ daratumumab) indüksiyonu ve uygun olgularda otolog kök hücre nakli',
        pearl: 'Osteoklast aktivitesi artıp osteoblastlar baskılandığı için ALP NORMALDİR ve kemik sintigrafisi genellikle soğuk (negatif) çıkar; idrar çubuğu (dipstick) sadece albümini saptadığı için Bence-Jones hafif zincir proteinürisini kaçırır.',
        trapFalse: 'kemik tutulumu nedeniyle serum alkalen fosfataz çok yüksektir ve kemik sintigrafisi en duyarlı taramadır',
        trapHighlight: 'serum alkalen fosfataz çok yüksektir ve kemik sintigrafisi en duyarlı taramadır',
      },
      {
        name: 'Waldenström makroglobulinemisi',
        target: 'MYD88 L265P mutasyonu taşıyan lenfoplazmasitik lenfoma hücrelerinin büyük pentamerik IgM paraproteini üretmesi',
        hallmark: 'Hiperviskozite sendromu (görme bulanıklığı, sosis şeklinde retinal venler, mukozal kanama), IgM M-piki, ancak LITİK KEMİK LEZYONU YOKLUĞU',
        vignette:
          'Yetmiş yaşında erkek hasta burun kanaması, baş ağrısı, bulanık görme ve soğukta parmaklarda morarma ile başvuruyor. Göz dibinde sosis benzeri kıvrımlı retinal venler, lenfadenopati ve hepatosplenomegali mevcut. İmmünfiksasyonda yüksek IgM kappa piki ve MYD88 L265P mutasyonu saptanıyor; kemik taraması ve kalsiyum normal bulunuyor.',
        clues: ['sosis benzeri kıvrımlı retinal venler', 'yüksek IgM kappa piki', 'kemik taraması ve kalsiyum normal'],
        management: 'Semptomatik hiperviskozitede ACİL PLAZMAFEREZ; sistemik tedavide rituksimab bazlı kemoterapi veya BTK inhibitörü (ibrutinib/zanubrutinib)',
        pearl: 'Multipl miyelomdan en önemli farkı litik kemik lezyonu, hiperkalsemi ve böbrek hasarının nadir olması; buna karşın pentamerik IgM’nin büyüklüğü nedeniyle hiperviskozite ve soğuk aglütinin/kriyoglobulinemi yapmasıdır.',
        trapFalse: 'kafatası grafisinde yaygın zımba deliği litik lezyonlar ve ağır hiperkalsemi görülür',
        trapHighlight: 'yaygın zımba deliği litik lezyonlar ve ağır hiperkalsemi',
      },
    ],
  },

  // 6. Hipofiz hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Hipofiz ve Hipotalamus Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Prolaktinoma',
        target: 'Ön hipofiz laktotrof hücrelerinden aşırı prolaktin sekresyonunun GnRH pulsatilitesini baskılaması',
        hallmark: 'Kadında galaktore-amenore, erkekte libido kaybı/bitemporal hemianopsi ve yüksek serum prolaktini (> 200 ng/mL)',
        vignette:
          'Yirmi sekiz yaşında kadın hasta 8 aydır adet görmeme ve memelerden süt gelmesi şikayetiyle başvuruyor. Gebelik testi negatif, TSH normal, serum prolaktin düzeyi 240 ng/mL bulunuyor. Hipofiz MR’da 8 mm boyutunda mikroadenom saptanıyor.',
        clues: ['adet görmeme ve memelerden süt gelmesi', 'prolaktin düzeyi 240 ng/mL', '8 mm boyutunda mikroadenom'],
        management: 'İlk basamak ve çoğu olguda tek başına küratif tedavi dopamin D2 agonistleri (kabergolin veya bromokriptin)',
        pearl: 'Cerrahiye ihtiyaç duymadan medikal tedaviye dramatik yanıt veren (hem hormonu düşüren hem tümörü küçülten) tek hipofiz adenomudur; prolaktin yüksekliğinde önce gebelik, hipotiroidi ve antipsikotik ilaçlar dışlanmalıdır.',
        trapFalse: 'mikroadenomlarda bile ilk seçenek tedavi acil transsfenoidal cerrahi rezeksiyondur',
        trapHighlight: 'ilk seçenek tedavi acil transsfenoidal cerrahi rezeksiyondur',
      },
      {
        name: 'Akromegali',
        target: 'Epipiz plakları kapandıktan sonra somatotrof hipofiz adenomundan aşırı büyüme hormonu (GH) ve karaciğerden IGF-1 üretimi',
        hallmark: 'El-ayak-çene büyümesi, prognatizm, terleme, yüksek IGF-1 ve 75 g OGTT sırasında baskılanmayan GH',
        vignette:
          'Kırk beş yaşında erkek hasta son 5 yılda ayakkabı numarasının 41’den 44’e çıktığını, yüzüğünün dar geldiğini, sesinin kalınlaştığını ve horlama başladığını ifade ediyor. Dişler arası açılma ve makroglossi saptanıyor. Serum IGF-1 düzeyi yaşa göre çok yüksek, 75 g oral glukoz sonrası GH 6.2 ng/mL (baskılanmıyor) bulunuyor.',
        clues: ['ayakkabı numarasının 41’den 44’e çıktığını', 'Dişler arası açılma', 'oral glukoz sonrası GH 6.2 ng/mL'],
        management: 'İlk tercih transsfenoidal cerrahi; cerrahi sonrası kür yoksa somatostatin analogları (oktreotid/lanreotid), pegvisomant veya kabergolin',
        pearl: 'Tarama testi gün içi dalgalanmayan IGF-1 ölçümü, kesin doğrulama testi ise OGTT ile GH baskılanma testidir (< 0.4-1 ng/mL altına düşmemesi); en sık ölüm nedeni kardiyovasküler hastalıklardır ve kolon polip/kanser riski artar.',
        trapFalse: 'tanıda tek bir bazal büyüme hormonu ölçümü yeterlidir ve OGTT sırasında GH belirgin baskılanır',
        trapHighlight: 'tek bir bazal büyüme hormonu ölçümü yeterlidir ve OGTT sırasında GH belirgin baskılanır',
      },
      {
        name: 'Cushing hastalığı',
        target: 'Kortikotrof hipofiz adenomundan otonom ACTH salgılanmasıyla bilateral adrenal korteksten aşırı kortizol üretimi',
        hallmark: 'Yüksek/normal ACTH’ya eşlik eden hiperkortizolizm, yüksek doz (8 mg) deksametazon ile > %50 kortizol baskılanması',
        vignette:
          'Otuz dört yaşında kadın hasta kilo alımı, yüzde yuvarlaklaşma, hipertansiyon ve mor strialarla başvuruyor. 1 mg deksametazonla baskılanmayan kortizolü ve plazma ACTH düzeyi 86 pg/mL bulunuyor. 8 mg yüksek doz deksametazon testinde kortizolü %70 düşüyor ve CRH uyarısına ACTH yanıtı artıyor.',
        clues: ['plazma ACTH düzeyi 86 pg/mL', '8 mg yüksek doz deksametazon testinde kortizolü %70 düşüyor', 'CRH uyarısına ACTH yanıtı artıyor'],
        management: 'Hipofiz MR ve gerekirse bilateral inferior petrozal sinüs örneklemesi (IPSS) sonrası transsfenoidal mikrocerrahi',
        pearl: 'Endojen Cushing sendromunun en sık nedenidir; ektopik ACTH tümörlerinden farklı olarak hipofiz adenomu yüksek doz deksametazonun negatif geri bildirimine kısmen duyarlı kalır.',
        trapFalse: 'plazma ACTH düzeyi tamamen baskılanmıştır (< 5 pg/mL) ve 8 mg deksametazona yanıt vermez',
        trapHighlight: 'plazma ACTH düzeyi tamamen baskılanmıştır (< 5 pg/mL)',
      },
      {
        name: 'Santral diyabet insipidus',
        target: 'Hipotalamik supraoptik/paraventriküler çekirdek veya arka hipofiz hasarına bağlı vazopresin (ADH) sentez-salınım eksikliği',
        hallmark: 'Hipernatremi eğilimli bol hipoozmolar poliüri (> 3 L/gün), susuzluk testine yanıtsızlık ancak DESMOPRESSİN sonrası idrar ozmolalitesinin > %50 artması',
        vignette:
          'Otuz yaşında kafa travması geçiren hastada günde 9 litre berrak idrar çıkışı gelişiyor. Serum Na 148 mEq/L, plazma ozmolalitesi 304 mOsm/kg iken idrar ozmolalitesi 110 mOsm/kg ölçülüyor. Susuzluk testi sonrası verilen subkütan desmopressin ile idrar ozmolalitesi 490 mOsm/kg’a yükseliyor.',
        clues: ['kafa travması', 'günde 9 litre berrak idrar', 'desmopressin ile idrar ozmolalitesi 490 mOsm/kg’a yükseliyor'],
        management: 'Oral veya intranazal desmopressin (DDAVP) replasmanı ve hipofiz/hipotalamik lezyon için kraniyal MR',
        pearl: 'Desmopressin sonrası idrar ozmolalitesinin > %50 artması santral eksikliği nefrojenik dirençten ayırır; kraniofarenjioma, travma ve nöroşirürji sonrası sıktır.',
        trapFalse: 'eksojen desmopressin uygulamasından sonra idrar ozmolalitesinde hiçbir artış görülmez',
        trapHighlight: 'idrar ozmolalitesinde hiçbir artış görülmez',
      },
      {
        name: 'Sheehan sendromu',
        target: 'Gebelikte fizyolojik olarak büyüyen ön hipofizin doğum sırasında masif post-partum kanama ve hipotansiyon nedeniyle iskemik nekrozu',
        hallmark: 'Doğum sonrası laktasyonun (süt gelişinin) olmaması, amenore ve ilerleyen dönemde panhipopitüitarizm',
        vignette:
          'Otuz üç yaşında kadın hasta 2 yıl önce şiddetli doğum sonu kanaması geçirdiğinden beri hiç emziremediğini ve adetlerinin hiç geri dönmediğini belirterek başvuruyor. Aksiller-pubik kıllanmada dökülme, halsizlik, soğuk intoleransı ve hipotansiyon saptanıyor. TSH normal-düşük iken serbest T4, kortizol, LH/FSH ve prolaktin çok düşük bulunuyor.',
        clues: ['şiddetli doğum sonu kanaması', 'hiç emziremediğini ve adetlerinin hiç geri dönmediğini', 'prolaktin çok düşük'],
        management: 'Önce hayatı tehdit eden adrenal krizi önlemek için HİDROKORTİZON, ardından tiroid hormonu (levotiroksin) ve östrojen/progesteron replasmanı',
        pearl: 'Panhipopitüitarizmde önce adrenal yetmezlik (kortizol) yerine konmadan levotiroksin başlanırsa kortizol yıkımı hızlanarak akut adrenal kriz tetiklenir! Arka hipofiz direk arteriyel beslendiği için genellikle korunur.',
        trapFalse: 'tedavide ilk olarak yüksek doz levotiroksin başlanıp birkaç hafta sonra kortizol eklenmelidir',
        trapHighlight: 'ilk olarak yüksek doz levotiroksin başlanıp',
      },
    ],
  },

  // 7. Tiroid hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Tiroid Hastalıkları Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Graves hastalığı',
        target: 'TSH reseptörünü uyaran IgG otoantikorlarının (TRAb/TSI) tiroid folikül hücrelerini diffüz hiperplazi ve hormon sentezine zorlaması',
        hallmark: 'Hipertiroidiye ek olarak diffüz guatr üzerinde üfürüm, infiltratif egzoftalmi, pretibial miksödem ve yüksek RAIU',
        vignette:
          'Otuz iki yaşında kadın hasta çarpıntı, kilo kaybı, sıcağa tahammülsüzlük ve gözlerinde öne doğru çıkıklık ile başvuruyor. Fizik muayenede bilateral proptozis, kapak geride kalması, diffüz büyümüş tiroid üzerinde üfürüm ve tibia ön yüzünde portakal kabuğu görünümünde plaklar izleniyor. TSH < 0.01, sT4 yüksek, TRAb pozitif ve RAIU %58 saptanıyor.',
        clues: ['bilateral proptozis', 'tiroid üzerinde üfürüm', 'RAIU %58'],
        management: 'Antitiroid ilaçlar (metimazol; gebelik 1. trimesterde propiltiyourasil), radyoaktif iyot (oftalmopatide dikkat!) veya tiroidektomi + beta-bloker',
        pearl: 'Ekstratiroidal oftalmopati ve dermopati yalnızca bu tabloya özgüdür; sigara içimi oftalmopatiyi ağırlaştırır ve radyoaktif iyot aktif oftalmopatide steroid koruması olmadan alevlenmeye yol açabilir.',
        trapFalse: 'radyoaktif iyot tutulumu belirgin baskılanmıştır (%5’in altında) ve tiroglobulin düşüktür',
        trapHighlight: 'radyoaktif iyot tutulumu belirgin baskılanmıştır (%5’in altında)',
      },
      {
        name: 'Toksik multinodüler guatr',
        target: 'Uzun süreli iyot eksikliği zemininde nodüllerin TSH reseptöründe somatik aktive edici mutasyon kazanarak otonomi geliştirmesi',
        hallmark: 'Yaşlı hastada nodüler guatr, atriyal fibrilasyon/kalp yetmezliği, oftalmopati yokluğu ve sintigrafide yamasal sıcak-soğuk alanlar',
        vignette:
          'Yetmiş bir yaşında yıllardır boynunda şişlik bulunan erkek hasta yeni başlangıçlı atriyal fibrilasyon ve kilo kaybı ile başvuruyor. Göz bulgusu yok, tiroidde çok sayıda sert nodül palpe ediliyor. TSH baskılı, sT3/sT4 yüksek ve Tc-99m sintigrafisinde birden fazla hiperaktif sıcak nodül ile baskılanmış alanlar görülüyor.',
        clues: ['yeni başlangıçlı atriyal fibrilasyon', 'Göz bulgusu yok', 'birden fazla hiperaktif sıcak nodül'],
        management: 'Ötiroidi sağlandıktan sonra kalıcı tedavi olarak radyoaktif iyot ablasyonu veya cerrahi tiroidektomi (spontan remisyon beklenmez)',
        pearl: 'İyot maruziyeti (amiodaron veya kontrastlı BT) sonrası otonom nodüller aşırı hormon üreterek Jod-Basedow fenomeni ile ani tirotoksikozu tetikleyebilir.',
        trapFalse: 'antitiroid ilaçlarla 12 ay tedavi sonrası hastaların yarısında kalıcı spontan remisyon sağlanır',
        trapHighlight: 'hastaların yarısında kalıcı spontan remisyon sağlanır',
      },
      {
        name: 'Subakut granülomatöz tiroidit',
        target: 'Viral ÜSYE sonrası foliküler epitelin yıkımıyla önceden sentezlenmiş tiroid hormonlarının kana boşalması',
        hallmark: 'Kulağa ve çeneye vuran şiddetli ağrılı hassas guatr, çok yüksek ESR/CRP, geçici tirotoksikoz ve DÜŞÜK RAIU (< %2)',
        vignette:
          'Otuz sekiz yaşında kadın hasta 2 hafta önce geçirdiği viral üst solunum yolu enfeksiyonu sonrası başlayan boğaz ön kısmında dokunmakla çok ağrılı şişlik, çeneye vuran ağrı ve çarpıntı ile başvuruyor. TSH < 0.01, sT4 yüksek, ESR 88 mm/saat bulunuyor. Radyoaktif iyot tutulumu 24. saatte %1 (neredeyse sıfır) ölçülüyor.',
        clues: ['dokunmakla çok ağrılı şişlik, çeneye vuran ağrı', 'ESR 88 mm/saat', 'Radyoaktif iyot tutulumu 24. saatte %1'],
        management: 'Ağrı ve inflamasyon için NSAİİ veya ağır ağrıda prednizon + çarpıntı için beta-bloker; antitiroid ilaç (metimazol/PTU) VERİLMEZ',
        pearl: 'Yeni hormon sentezi olmadığı (sadece depolanmış hormon sızdığı) için metimazol ve PTU tamamen etkisizdir; biyopside multinükleer dev hücreli granülomlar görülür (De Quervain).',
        trapFalse: 'radyoaktif iyot tutulumu aşırı artmıştır ve tedavide yüksek doz metimazol başlanmalıdır',
        trapHighlight: 'yüksek doz metimazol başlanmalıdır',
      },
      {
        name: 'Hashimoto tiroiditi',
        target: 'T hücre aracılı apoptoz (Fas/FasL) ve anti-TPO/anti-tiroglobulin antikorları ile tiroid foliküllerinin kronik otoimmün yıkımı',
        hallmark: 'Ağrısız kauçuk kıvamında guatr, yüksek anti-TPO, lenfositik infiltrasyon, germinal merkezler ve Hürthle (oksifilik) hücreler',
        vignette:
          'Kırk üç yaşında kadın hasta halsizlik, kilo alma, kabızlık ve boyun ön kısmında ağrısız sert şişlikle başvuruyor. TSH 34 mU/L, sT4 düşük, anti-TPO antikoru > 1000 IU/mL ölçülüyor. İnce iğne aspirasyon biyopsisinde yoğun lenfositik infiltrasyon ve büyük eozinofilik granüler sitoplazmalı hücreler görülüyor.',
        clues: ['TSH 34 mU/L, sT4 düşük', 'anti-TPO antikoru > 1000 IU/mL', 'yoğun lenfositik infiltrasyon'],
        management: 'Ömür boyu oral levotiroksin replasmanı ve hızlı büyüyen tiroid kitlesinde MALT lenfoma açısından takip',
        pearl: 'İyot yeterli bölgelerde hipotiroidinin en sık nedenidir; başlangıçta geçici folikül yıkımına bağlı kısa süreli "Haşitoksikoz" görülebilir ve primer tiroid lenfoması riskini belirgin artırır.',
        trapFalse: 'tiroid bezinde şiddetli ağrı tipiktir ve tiroid kanserlerinden en sık medüller kansere dönüşür',
        trapHighlight: 'şiddetli ağrı tipiktir ve tiroid kanserlerinden en sık medüller kansere dönüşür',
      },
      {
        name: 'Miksödem koması',
        target: 'Uzun süreli tedavi edilmemiş ağır hipotiroidinin enfeksiyon, soğuk veya sedatiflerle dekompanze olarak multisistem yetmezliği yapması',
        hallmark: 'Hipotermi, bilinç bulanıklığı/koma, bradikardi, hipoventilasyon (hiperkapni), hiponatremi ve GODE BIRAKMAYAN ödem',
        vignette:
          'Yetmiş sekiz yaşında kış ortasında evde bilinci kapalı bulunan kadın hastanın rektal vücut ısısı 33.4°C, nabzı 38/dk, kan basıncı 75/45 mmHg ve solunum sayısı 8/dk ölçülüyor. Yüzünde ve bacaklarında basmakla iz bırakmayan yaygın şişlik, kan gazında hiperkapni, serum Na 121 mEq/L, TSH 92 mU/L saptanıyor.',
        clues: ['rektal vücut ısısı 33.4°C, nabzı 38/dk', 'basmakla iz bırakmayan yaygın şişlik', 'hiperkapni, serum Na 121 mEq/L'],
        management: 'Yoğun bakım, pasif ısıtma, mekanik ventilasyon, IV levotiroksin (T4/T3) VE eş zamanlı mutlaka IV hidrokortizon',
        pearl: 'Eşlik edebilecek adrenal yetmezlik veya hızlı tiroid replasmanıyla artacak kortizol katabolizmasının yaratacağı adrenal krizi önlemek için hormonla birlikte mutlaka ampirik IV hidrokortizon verilir.',
        trapFalse: 'adrenal krizi önlemek için kortikosteroidlerden kaçınılmalı ve sadece oral levotiroksin verilmelidir',
        trapHighlight: 'kortikosteroidlerden kaçınılmalı ve sadece oral levotiroksin verilmelidir',
      },
    ],
  },

  // 8. Kalsiyum ve paratiroid hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Kalsiyum Metabolizması ve Paratiroid Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Primer hiperparatiroidizm',
        target: 'Soliter paratiroid adenomu (%85) kaynaklı negatif geri bildirimden bağımsız otonom PTH hipersekresyonu',
        hallmark: 'Hiperkalsemi, hipofosfatemi, yüksek (veya uygunsuz normal) intakt PTH, hiperkalsiüri ve osteitis fibroza sistika',
        vignette:
          'Ellibeş yaşında kadın hasta tekrarlayan böbrek taşları, kabızlık ve kemik ağrıları ile başvuruyor. Serum kalsiyumu 11.9 mg/dL, fosfor 2.0 mg/dL, intakt PTH 145 pg/mL, 24 saatlik idrar kalsiyumu 380 mg ve kalsiyum/kreatinin klirens oranı 0.028 saptanıyor. Tc-99m sestamibi sintigrafisinde alt kutupta fokal tutulum izleniyor.',
        clues: ['kalsiyumu 11.9 mg/dL, fosfor 2.0 mg/dL', 'intakt PTH 145 pg/mL', 'kalsiyum/kreatinin klirens oranı 0.028'],
        management: 'Semptomatik hastalarda veya <50 yaş / Ca >1 mg/dL yüksek / GFH <60 / T-skoru <-2.5 durumunda cerrahi paratiroidektomi',
        pearl: 'Ailevi hipokalsiürik hiperkalsemiden (FHH) 24 saatlik idrar kalsiyumu ve Ca/Cr klirens oranının > 0.02 olmasıyla ayrılır (FHH’de < 0.01’dir ve cerrahi yapılmaz).',
        trapFalse: '24 saatlik idrar kalsiyumu tipik olarak 100 mg/gün altındadır ve hiperfosfatemi eşlik eder',
        trapHighlight: 'idrar kalsiyumu tipik olarak 100 mg/gün altındadır ve hiperfosfatemi',
      },
      {
        name: 'Malignite hiperkalsemisi',
        target: 'Tümör kaynaklı PTHrP sekresyonu, osteolitik kemik yıkımı (miyelom/meme) veya lenfomada ektopik 1-alfa hidroksilaz aktivasyonu',
        hallmark: 'Hızlı yükselen şiddetli hiperkalsemi (> 13-14 mg/dL) ile birlikte BASKILANMIŞ intakt PTH (< 15-20 pg/mL)',
        vignette:
          'Altmış yedi yaşında metastatik meme kanseri öykülü kadın hasta akut konfüzyon, şiddetli bulantı ve poliüri ile acile getiriliyor. Serum kalsiyumu 14.8 mg/dL, albümin 3.6 g/dL, intakt PTH 4 pg/mL ve 25-OH D vitamini normal ölçülüyor.',
        clues: ['metastatik meme kanseri', 'kalsiyumu 14.8 mg/dL', 'intakt PTH 4 pg/mL'],
        management: 'İlk basamak agresif IV %0.9 NaCl hidrasyonu, hızlı düşüş için kalsitonin ve kalıcı kontrol için IV zoledronik asit / denosumab',
        pearl: 'Yüksek kalsiyum toplayıcı kanallarda akuaporin-2’yi azaltarak nefrojenik Dİ ve dehidratasyon yapar; bu nedenle loop diüretikleri ancak hasta tamamen övolemik hale getirildikten sonra (ve sadece hacim yükü varsa) düşünülebilir.',
        trapFalse: 'ilk tedavi basamağı olarak dehidratasyon bakılmaksızın yüksek doz furosemid infüzyonu başlanmalıdır',
        trapHighlight: 'dehidratasyon bakılmaksızın yüksek doz furosemid infüzyonu başlanmalıdır',
      },
      {
        name: 'Hipoparatiroidizm',
        target: 'Tiroid/paratiroid cerrahisi hasarı veya otoimmün yıkım sonucu PTH üretilememesi ve böbrekte 1,25-(OH)2D aktivasyon kaybı',
        hallmark: 'Hipokalsemi, HİPERFOSFATEMİ, çok düşük/ölçülemeyen PTH, Chvostek-Trousseau bulguları ve EKG’de uzun QT',
        vignette:
          'Otuz altı yaşında total tiroidektomiden 24 saat sonra dudak çevresinde uyuşma, ellerde kasılma ve laringospazm gelişen hastanın tansiyon manşonu şişirildiğinde karpal spazm oluşuyor. Serum kalsiyumu 6.6 mg/dL, fosfor 6.1 mg/dL, magnezyum 2.0 mg/dL, intakt PTH 3 pg/mL ve QTc 510 ms bulunuyor.',
        clues: ['total tiroidektomiden 24 saat sonra', 'fosfor 6.1 mg/dL', 'intakt PTH 3 pg/mL'],
        management: 'Akut tetanide IV kalsiyum glukonat; kronik idamede oral kalsiyum + aktif D vitamini (kalsitriol) (D3 değil!)',
        pearl: 'PTH eksikliğinde böbrekte 1-alfa hidroksilaz çalışmadığı için kolekalsiferol (D3) yeterince aktive olamaz; mutlaka aktif form olan kalsitriol verilmelidir. Düşük magnezyum PTH salınımını ve etkisini bloke ettiği için mutlaka kontrol edilmelidir.',
        trapFalse: 'serum fosfor düzeyi belirgin düşüktür ve idame tedavide sadece kolekalsiferol yeterlidir',
        trapHighlight: 'serum fosfor düzeyi belirgin düşüktür',
      },
      {
        name: 'Psödohipoparatiroidizm',
        target: 'Albright herediter osteodistrofisinde maternal kalıtımlı GNAS1 (Gs-alfa) mutasyonuna bağlı böbrek proksimal tübülünde PTH direnci',
        hallmark: 'Hipokalsemi, hiperfosfatemiye rağmen ÇOK YÜKSEK PTH, kısa 4. ve 5. metakarplar, yuvarlak yüz ve kısa boy',
        vignette:
          'On altı yaşında kısa boylu, yuvarlak yüzlü ve obez erkek hasta nöbet geçirme ile başvuruyor. El muayenesinde yumruk yaptığında 4. ve 5. metakarp başlarının eklem çıkıntılarının çukur kaldığı (knuckle-knuckle-dimple-dimple) görülüyor. Serum kalsiyumu 6.9 mg/dL, fosfor 6.3 mg/dL, intakt PTH ise 340 pg/mL ölçülüyor.',
        clues: ['4. ve 5. metakarp başlarının eklem çıkıntılarının çukur kaldığı', 'kalsiyumu 6.9 mg/dL, fosfor 6.3 mg/dL', 'intakt PTH ise 340 pg/mL'],
        management: 'Kalsiyum ve aktif D vitamini (kalsitriol) replasmanı ile eşlik edebilecek TSH/gonadotropin direncinin izlemi',
        pearl: 'Tip 1a’da ekzojen PTH verilmesine rağmen idrar cAMP ve fosfat artışı olmaz; aynı mutasyon babadan kalıtılırsa normokalsemik fenotip olan psödopsödohipoparatiroidizm gelişir (genomik imprinting).',
        trapFalse: 'serum parathormon düzeyi ölçülemeyecek kadar düşüktür ve ekzojen PTH ile idrar cAMP hızla artar',
        trapHighlight: 'ekzojen PTH ile idrar cAMP hızla artar',
      },
      {
        name: 'Paget kemik hastalığı',
        target: 'Artmış dev çok çekirdekli osteoklast rezorpsiyonunu takip eden düzensiz, kaotik ve vasküler osteoblastik yeni kemik yapımı',
        hallmark: 'NORMAL kalsiyum/fosfor/PTH, ÇOK YÜKSEK izole alkalen fosfataz, şapka/ayakkabı numarası büyümesi ve mozaik kemik yapısı',
        vignette:
          'Altmış dokuz yaşında erkek hasta şapkasının artık kafasına dar geldiğini, işitmesinin azaldığını ve uyluğunda derin ağrı olduğunu söylüyor. Serum kalsiyumu 9.4 mg/dL, fosfor 3.5 mg/dL, GGT normal ancak serum alkalen fosfataz 940 U/L bulunuyor. Grafide kafatasında atılmış pamuk görünümü ve tibiada eğilme saptanıyor.',
        clues: ['şapkasının artık kafasına dar geldiğini', 'alkalen fosfataz 940 U/L', 'kafatasında atılmış pamuk görünümü'],
        management: 'Asemptomatikse izlem; ağrı, kırık riski, kraniyal sinir basısı veya yüksek kalp debisinde IV zoledronik asit / oral bifosfonat',
        pearl: 'Aşırı vasküler kemik iliği AV şantlar yaratarak yüksek debili kalp yetmezliğine ve en korkulan komplikasyon olan osteosarkom gelişimine zemin hazırlayabilir.',
        trapFalse: 'belirgin hiperkalsemi ile birlikte serum parathormon düzeyi çok yüksek saptanır',
        trapHighlight: 'belirgin hiperkalsemi ile birlikte serum parathormon düzeyi çok yüksek',
      },
    ],
  },

  // 9. Adrenal hastalıklar ve MEN sendromları
  {
    branchId: 'dahiliye',
    subTopic: 'Adrenal Hastalıklar ve MEN Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2020',
    entities: [
      {
        name: 'Primer adrenal yetmezlik',
        target: 'Otoimmün adrenalit veya tüberküloz/hemoraji sonucu adrenal korteksin tüm tabakalarının (kortizol ve aldosteron) yıkımı',
        hallmark: 'Hipotansiyon, hiponatremi, HİPERKALEMİ, mukozalarda/avuç çizgilerinde hiperpigmentasyon ve yüksek ACTH + cosyntropin yanıtsızlığı',
        vignette:
          'Otuz beş yaşında kadın hasta halsizlik, kilo kaybı, tuz aşerme ve baş dönmesiyle başvuruyor. Ağız içi yanak mukozası ve el çizgilerinde koyu bronzlaşma saptanıyor. Kan basıncı 82/50 mmHg, serum Na 126 mEq/L, K 5.8 mEq/L, sabah kortizolü 2.1 mcg/dL, ACTH 640 pg/mL bulunuyor; 250 mcg cosyntropin sonrası kortizol yükselmiyor.',
        clues: ['el çizgilerinde koyu bronzlaşma', 'Na 126 mEq/L, K 5.8 mEq/L', 'ACTH 640 pg/mL'],
        management: 'Akut krizde IV hidrokortizon ve %0.9 NaCl; kronik idamede oral hidrokortizon/prednizon + mineralokortikoid olarak fludrokortizon',
        pearl: 'Sekonder (hipofizer) yetmezlikten POMC artışına bağlı hiperpigmentasyonun ve aldosteron eksikliğine bağlı HİPERKALEMİ + hipotansiyonun varlığıyla ayrılır.',
        trapFalse: 'sekonder adrenal yetmezlikte olduğu gibi aldosteron korunduğu için hiperkalemi ve pigmentasyon gelişmez',
        trapHighlight: 'aldosteron korunduğu için hiperkalemi ve pigmentasyon gelişmez',
      },
      {
        name: 'Konjenital adrenal hiperplazi',
        target: 'En sık 21-hidroksilaz (CYP21A2) eksikliğine bağlı kortizol ve aldosteron üretilemeyip prekürsörlerin androjen yoluna kayması',
        hallmark: 'Klasik formda yenidoğanda tuz kaybı krizi/ambiguous genitalia; geç başlangıçlı formda hirşutizm ve yüksek 17-hidroksiprogesteron',
        vignette:
          'Yirmi iki yaşında kadın hasta şiddetli akne, kıllanma artışı ve oligomenore şikayetiyle başvuruyor. PKOS şüphesiyle incelenirken bazal sabah 17-hidroksiprogesteron düzeyi 1800 ng/dL ve ACTH uyarısı sonrası 3400 ng/dL olarak saptanıyor.',
        clues: ['akne, kıllanma artışı ve oligomenore', '17-hidroksiprogesteron düzeyi 1800 ng/dL', 'ACTH uyarısı sonrası 3400 ng/dL'],
        management: 'ACTH’yı baskılamak için düşük doz glukokortikoid (hidrokortizon/deksametazon) ve klasik tuz kaybı formunda fludrokortizon',
        pearl: '11-beta hidroksilaz eksikliğinde ise 11-deoksikortikosteron (DOC) birikimi mineralokortikoid etki gösterdiği için tuz kaybı değil HİPERTANSİYON ve hipokalemi görülür.',
        trapFalse: '11-beta hidroksilaz eksikliğinde ağır tuz kaybı ve hiperkalemik hipotansiyon gelişir',
        trapHighlight: 'ağır tuz kaybı ve hiperkalemik hipotansiyon gelişir',
      },
      {
        name: 'MEN Tip 1',
        target: '11q13 kromozomundaki MEN1 tümör baskılayıcı geninin (menin proteini) otozomal dominant kaybı',
        hallmark: 'Üç P kuralı: Paratiroid hiperplazisi (%95), Pankreatik nöroendokrin tümör (gastrinoma/insülinoma) ve Pitüiter (hipofiz) adenom',
        vignette:
          'Otuz yedi yaşında erkek hasta tekrarlayan çoklu duodenal ülserler, kronik ishal, böbrek taşı ve görme alanı daralması şikayetleriyle başvuruyor. Serum kalsiyumu 11.4 mg/dL, PTH 120 pg/mL, açlık gastrini 980 pg/mL ve prolaktini 160 ng/mL saptanıyor.',
        clues: ['tekrarlayan çoklu duodenal ülserler', 'PTH 120 pg/mL', 'açlık gastrini 980 pg/mL ve prolaktini 160 ng/mL'],
        management: '3.5 bez subtotal paratiroidektomi veya total paratiroidektomi + ototransplantasyon, PPİ/cerrahi ve prolaktinoma için kabergolin',
        pearl: 'En sık ve ilk ortaya çıkan komponenti primer hiperparatiroidizmdir (genellikle 4 bez hiperplazisi); en sık pankreatik tümör Zollinger-Ellison (gastrinoma), en sık hipofiz tümörü prolaktinomadır.',
        trapFalse: 'en sık bileşeni medüller tiroid karsinomu olup RET proto-onkogen mutasyonu ile oluşur',
        trapHighlight: 'medüller tiroid karsinomu olup RET proto-onkogen mutasyonu',
      },
      {
        name: 'MEN Tip 2A',
        target: '10. kromozomdaki RET proto-onkogeninde otozomal dominant aktive edici nokta mutasyonu',
        hallmark: 'Medüller tiroid karsinomu (%100’e yakın), feokromositoma (%50) ve primer hiperparatiroidizm (%20-30)',
        vignette:
          'Yirmi dokuz yaşında erkek hasta boyunda tiroid nodülü, ataklar halinde çarpıntı-terleme-hipertansiyon ve hafif hiperkalsemi ile değerlendiriliyor. Tiroid ince iğne biyopsisinde amiloid stromalı nöroendokrin hücreler, yüksek kalsitonin ve plazma serbest metanefrin artışı saptanıyor.',
        clues: ['amiloid stromalı nöroendokrin hücreler', 'yüksek kalsitonin', 'serbest metanefrin artışı'],
        management: 'Cerrahi sırasında ÖNCE alfa-blokaj sonrası feokromositoma rezeksiyonu, ardından total tiroidektomi; taşıyıcı aile bireylerinde profilaktik tiroidektomi',
        pearl: 'Kutanöz liken amiloidozis ve Hirschsprung hastalığı eşlik edebilir; mutlaka tiroid cerrahisinden önce katekolamin üreten tümör ekarte edilip çıkarılmalıdır.',
        trapFalse: 'tiroid cerrahisi sonrası feokromositoma ameliyat edilmeli ve paratiroid tümörleri hiç görülmez',
        trapHighlight: 'tiroid cerrahisi sonrası feokromositoma ameliyat edilmeli',
      },
      {
        name: 'MEN Tip 2B',
        target: 'RET proto-onkogeninin tirozin kinaz domaininde (özellikle M918T) gelişen agresif aktive edici mutasyon',
        hallmark: 'Erken/agresif medüller tiroid karsinomu, feokromositoma, mukozal nöromalar (dil/dudak), marfanoid habitus ve hiperparatiroidizm YOKLUĞU',
        vignette:
          'On dört yaşında uzun ince parmaklı, marfanoid vücut yapılı erkek çocuğun dil kenarlarında ve dudaklarında çok sayıda yumuşak submukozal nodüller ile bağırsaklarda gangliyonöromatoza bağlı kronik kabızlık mevcut. Serum kalsitonin ve metanefrinleri yüksek ancak kalsiyum ve PTH tamamen normal bulunuyor.',
        clues: ['marfanoid vücut yapılı', 'dil kenarlarında ve dudaklarında çok sayıda yumuşak submukozal nodüller', 'kalsiyum ve PTH tamamen normal'],
        management: 'Yaşamın ilk yılı içinde profilaktik total tiroidektomi ve feokromositoma taraması/rezeksiyonu',
        pearl: 'MEN 2A’dan farkı paratiroid tutulumunun olmaması, mukozal nöromalar ile marfanoid görünümün bulunması ve medüller tiroid karsinomunun çok daha erken ve agresif seyretmesidir.',
        trapFalse: 'hastaların %80’inde ilk bulgu olarak çok bezli primer hiperparatiroidizm ortaya çıkar',
        trapHighlight: 'çok bezli primer hiperparatiroidizm ortaya çıkar',
      },
    ],
  },

  // 10. Diyabetik akut komplikasyonlar
  {
    branchId: 'dahiliye',
    subTopic: 'Diyabetik Akut Komplikasyonlar ve Glisemik Fenomenler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Diyabetik ketoasidoz',
        target: 'Mutlak insülin eksikliği ve glukagon artışının kontrolsüz lipoliz ile hepatik beta-hidroksibütirat/asetoasetat üretimini tetiklemesi',
        hallmark: 'Kan şekeri genellikle > 250 mg/dL, pH < 7.30, HCO3 < 18 mEq/L, yüksek anyon açıklı asidoz ve pozitif serum ketonu',
        vignette:
          'On dokuz yaşında tip 1 diyabetli kadın hasta insülinini 2 gündür yapmaması sonrası karın ağrısı, kusma ve hızlı derin solunum (Kussmaul) ile acile getiriliyor. Kan şekeri 410 mg/dL, pH 7.12, HCO3 8 mEq/L, anyon açığı 26, serum potasyumu 5.4 mEq/L ve serum beta-hidroksibütiratı çok yüksek bulunuyor.',
        clues: ['insülinini 2 gündür yapmaması', 'pH 7.12, HCO3 8 mEq/L', 'anyon açığı 26'],
        management: 'İlk adım IV %0.9 NaCl hidrasyonu, ardından K > 3.3 mEq/L doğrulandıktan sonra IV regüler insülin infüzyonu ve potasyum replasmanı',
        pearl: 'Asidoz ve insülin eksikliği nedeniyle K+ hücre dışına çıktığından başlangıç serum potasyumu yüksek görünse bile total vücut potasyumu eksiktir; K < 3.3 mEq/L ise insülin verilmeden önce potasyum başlanmalıdır.',
        trapFalse: 'serum potasyumu 5.4 mEq/L olsa bile total vücut potasyumu fazladır ve tedavide potasyum verilmez',
        trapHighlight: 'total vücut potasyumu fazladır ve tedavide potasyum verilmez',
      },
      {
        name: 'Hiperosmolar hiperglisemik durum',
        target: 'Kısmi insülin rezervinin lipolizi ve ketogenezi baskılamasına karşın insülin direnciyle aşırı hiperglisemi ve ozmotik diürez gelişmesi',
        hallmark: 'Glukoz > 600 mg/dL, serum ozmolalitesi > 320 mOsm/kg, pH > 7.30, HCO3 > 18, minimal/negatif keton ve ağır nörolojik depresyon',
        vignette:
          'Yetmiş dört yaşında tip 2 diyabetik erkek hasta pnömoni sonrası ilerleyen bilinç bulanıklığı ve koma tablosuyla getiriliyor. Kan şekeri 920 mg/dL, serum Na 134 mEq/L (düzeltilmiş Na 147), etkili ozmolalite 345 mOsm/kg, pH 7.36, HCO3 22 mEq/L ve idrar ketonu eser saptanıyor.',
        clues: ['Kan şekeri 920 mg/dL', 'etkili ozmolalite 345 mOsm/kg', 'pH 7.36, HCO3 22 mEq/L'],
        management: 'Çok agresif IV sıvı resüsitasyonu (sıvı açığı genellikle 8-10 litredir), ardından düşük doz IV insülin, potasyum desteği ve tetikleyici enfeksiyon tedavisi',
        pearl: 'Ketoasidozdan daha yüksek mortaliteye sahiptir; az miktarda endojen insülin keton oluşumunu engellediği için asidoz ve Kussmaul solunumu gelişmez.',
        trapFalse: 'arteryel pH 7.10’un altında ve serum beta-hidroksibütirat düzeyi belirgin yüksektir',
        trapHighlight: 'arteryel pH 7.10’un altında ve serum beta-hidroksibütirat düzeyi belirgin yüksektir',
      },
      {
        name: 'Somogyi fenomeni',
        target: 'Akşam bazal insülin dozunun fazla gelmesine bağlı gece hipoglisemisi ve ardından katekolamin/glukagon/kortizol ile reaktif sabah hiperglisemisi',
        hallmark: 'Gece 03:00’te hipoglisemi (< 70 mg/dL), kabus/gece terlemesi ve sabah 07:00’de yüksek açlık kan şekeri',
        vignette:
          'Otuz iki yaşında akşam yatmadan NPH insülin kullanan hastada sabah açlık kan şekerleri sürekli 260 mg/dL civarında seyrediyor. Gece saat 03:00’te yapılan kapiller glukoz ölçümünde değerin 48 mg/dL olduğu ve hastanın gece terleyip baş ağrısıyla uyandığı saptanıyor.',
        clues: ['Gece saat 03:00’te yapılan kapiller glukoz ölçümünde değerin 48 mg/dL', 'gece terleyip baş ağrısıyla', 'sabah açlık kan şekerleri sürekli 260 mg/dL'],
        management: 'Akşam bazal insülin dozunun AZALTILMASI veya uzun etkili pik yapmayan analoga geçilmesi',
        pearl: 'Sabah hiperglisemisinin nedeni gece aşırı insüline bağlı oluşan gizli hipoglisemiye karşı gelişen kontr-regülatuvar hormon deşarjıdır; akşam insülini artırılırsa tablo ağırlaşır.',
        trapFalse: 'gece saat 03:00’te kan şekeri yüksektir ve tedavide akşam insülin dozu artırılmalıdır',
        trapHighlight: 'akşam insülin dozu artırılmalıdır',
      },
      {
        name: 'Şafak fenomeni',
        target: 'Sabaha karşı (04:00-08:00) büyüme hormonu ve kortizolün fizyolojik artışının insülin direncini yükseltmesi',
        hallmark: 'Gece 03:00 kan şekerinin normal (veya hafif yüksek) olmasına karşın sabah 07:00 açlık glukozunun yükselmesi',
        vignette:
          'Yirmi altı yaşında tip 1 diyabetli hastada sabah açlık kan şekerlerinin 220 mg/dL ölçülmesi üzerine gece saat 03:00’te kan şekeri bakılıyor ve 112 mg/dL (hipoglisemi yok) bulunuyor; sabah 07:00’de ise 228 mg/dL’ye yükseldiği görülüyor.',
        clues: ['sabah açlık kan şekerlerinin 220 mg/dL', 'gece saat 03:00’te kan şekeri bakılıyor ve 112 mg/dL', 'sabah 07:00’de ise 228 mg/dL’ye yükseldiği'],
        management: 'Akşam bazal insülin dozunun ARTIRILMASI, akşam yemeği saatinden yatış saatine kaydırılması veya insülin pompasıyla bazal hız artışı',
        pearl: 'Gece 03:00 ölçümünde hipoglisemi görülmemesiyle Somogyi etkisinden kesin olarak ayrılır ve tedavileri birbirinin tam tersidir.',
        trapFalse: 'gece hipoglisemisinin tetiklediği reaktif bir tablodur ve akşam insülin dozu azaltılmalıdır',
        trapHighlight: 'gece hipoglisemisinin tetiklediği reaktif bir tablodur ve akşam insülin dozu azaltılmalıdır',
      },
      {
        name: 'Ağır hipoglisemi',
        target: 'Eksojen insülin/sülfonilüre fazlalığı veya otonomik insülinoma sonucu kan glukozunun nöroglikopenik eşik (< 50-54 mg/dL) altına inmesi',
        hallmark: 'Whipple triyadı (düşük plazma glukozu, otonomik/nöroglikopenik semptomlar, glukozla düzelme) ve konfüzyon/nöbet',
        vignette:
          'Altmış beş yaşında böbrek fonksiyonları bozulmuş tip 2 diyabetik erkek hasta glibenklamid kullanırken terleme, çarpıntı ve ardından gelişen bilinç kaybıyla acile getiriliyor. Kan şekeri 32 mg/dL ölçülüyor; IV dekstroz verilmesiyle saniyeler içinde bilinci tamamen açılıyor.',
        clues: ['glibenklamid kullanırken', 'Kan şekeri 32 mg/dL', 'IV dekstroz verilmesiyle saniyeler içinde bilinci tamamen açılıyor'],
        management: 'Bilinci kapalı hastada IV %20-%50 dekstroz (veya damar yolu yoksa IM/intranazal glukagon); sülfonilüre zehirlenmesinde tekrarlayan atakları önlemek için oktreotid',
        pearl: 'Sülfonilüre aşırı dozu/toksisitesinde sadece dekstroz verilmesi pankreastan daha fazla insülin salgılatarak rebound düşüşe yol açar; uzun yarı ömür nedeniyle hasta en az 24 saat izlenip gerekirse oktreotid verilir.',
        trapFalse: 'sülfonilüre zehirlenmesinde bir kez IV dekstroz verilip bilinci açılan hasta hemen taburcu edilebilir',
        trapHighlight: 'bilinci açılan hasta hemen taburcu edilebilir',
      },
    ],
  },

  // 11. Özofagus motilite ve mukoza hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Özofagus Motilite ve Mukoza Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akalazya',
        target: 'Miyenterik (Auerbach) pleksustaki inhibitör NO/VIP nöronlarının dejenerasyonu sonucu alt özofagus sfinkterinin gevşeyememesi',
        hallmark: 'Hem katı hem sıvı gıdalara disfaji, baryumlu grafide "kuş gagası" daralması ve manometride aperistaltizm + yüksek AÖS basıncı',
        vignette:
          'Otuz dokuz yaşında kadın hasta 2 yıldır hem katı yiyeceklere hem de su içerken takılma hissi, sindirilmemiş gıda regürjitasyonu ve kilo kaybıyla başvuruyor. Baryumlu özofagografide dilate özofagusun distalinde düzgün konik "kuş gagası" daralması, manometride ise yutmayla gevşemeyen alt sfinkter saptanıyor.',
        clues: ['hem katı yiyeceklere hem de su içerken takılma', '"kuş gagası" daralması', 'yutmayla gevşemeyen alt sfinkter'],
        management: 'Endoskopi ile malign kardiya darlığını (kardiya tümörü) dışlama sonrası pnömatik balon dilatasyonu, Heller miyotomi veya POEM',
        pearl: 'Chagas hastalığı (Trypanosoma cruzi) aynı miyenterik nöron harabiyetiyle sekonder forma yol açar; hastalarda özofagus skuamöz hücreli karsinom riski artar.',
        trapFalse: 'sadece katı gıdalara karşı ilerleyici disfaji görülür ve manometride alt sfinkter basıncı çok düşüktür',
        trapHighlight: 'alt sfinkter basıncı çok düşüktür',
      },
      {
        name: 'Diffüz özofageal spazm',
        target: 'Özofagus düz kasında nitrik oksit inhibitör iletim bozukluğuna bağlı koordine olmayan eş zamanlı yüksek amplitüdlü kasılmalar',
        hallmark: 'Anjina benzeri nitrogliserinle geçebilen göğüs ağrısı, aralıklı disfaji ve baryum grafisinde "tirbuşon" (fındıkkıran) görünümü',
        vignette:
          'Kırk altı yaşında kadın hasta soğuk içecek içtikten sonra ortaya çıkan, sırta vuran, dil altı nitratla hafifleyen şiddetli göğüs ağrısı ve aralıklı yutma güçlüğü ile başvuruyor. Koroner anjiyografi normal bulunurken baryumlu grafide özofagusta tirbuşon görünümü, manometride ise eş zamanlı (kısa distal latanslı) kasılmalar izleniyor.',
        clues: ['dil altı nitratla hafifleyen şiddetli göğüs ağrısı', 'tirbuşon görünümü', 'eş zamanlı'],
        management: 'Kalsiyum kanal blokerleri (diltiazem/nifedipin), nitratlar veya ağrı modülatörü olarak düşük doz trisiklik antidepresan',
        pearl: 'Sıcak veya çok soğuk içecekler ağrıyı tetikleyebilir; kalp ağrısından ayırt edilemeyecek kadar nitrogliserine yanıt verebilir ancak kardiyak iskemi dışlandıktan sonra manometri ile tanı konur.',
        trapFalse: 'alt özofagus sfinkteri tamamen gevşeyemez ve manometride özofagus gövdesinde hiç kasılma izlenmez',
        trapHighlight: 'manometride özofagus gövdesinde hiç kasılma izlenmez',
      },
      {
        name: 'Skleroderma özofagusu',
        target: 'Sistemik bağ dokusu hastalığında distal 2/3 düz kasların fibrotik atrofiye uğrayarak hipomotilite ve sfinkter yetmezliği gelişmesi',
        hallmark: 'Distal özofagusta aperistaltizm, ÇOK DÜŞÜK alt özofagus sfinkter basıncı ve şiddetli reflü/peptik striktür',
        vignette:
          'Kırk dört yaşında Raynaud fenomeni, sklerodaktili ve anti-sentromer pozitifliği olan kadın hasta şiddetli mide yanması ve giderek artan yutma güçlüğüyle başvuruyor. Manometride üst 1/3 çizgili kas peristaltizmi normalken, distal 2/3’te peristaltizmin kaybolduğu ve alt sfinkter basıncının 4 mmHg’ye düştüğü görülüyor.',
        clues: ['Raynaud fenomeni, sklerodaktili', 'üst 1/3 çizgili kas peristaltizmi normalken', 'alt sfinkter basıncının 4 mmHg’ye düştüğü'],
        management: 'Yüksek doz proton pompa inhibitörü, prokinetikler ve reflü striktüründe endoskopik dilatasyon (antireflü cerrahiden kaçınma)',
        pearl: 'Akalazyadan tam zıttı olarak alt sfinkter basıncı aşırı DÜŞÜKTÜR ve kronik asit reflüsü sonucu Barrett özofagusu/striktür gelişir; proksimal 1/3 çizgili kas tabakası korunmuştur.',
        trapFalse: 'proksimal üçte birlik çizgili kas tutulumu ön plandadır ve alt özofagus sfinkter basıncı yüksektir',
        trapHighlight: 'alt özofagus sfinkter basıncı yüksektir',
      },
      {
        name: 'Eozinofilik özofajit',
        target: 'Gıda/aeroalerjenlere karşı Th2 (IL-5, IL-13, eotaksin-3) aracılı özofagus mukozasında yoğun eozinofilik inflamasyon',
        hallmark: 'Genç atopik erkekte katı gıda takılması (impaksiyon), endoskopide konsantrik halkalar (trakealizasyon) ve >= 15 eozinofil/HPF',
        vignette:
          'Yirmi dört yaşında astım ve alerjik rinit öykülü erkek hasta et yerken lokmanın göğsünde takılıp kalması nedeniyle acil endoskopiye alınıyor. Endoskopide özofagus mukozasında çok sayıda dairesel halka ("kedi özofagusu"), beyaz eksüdatif benekler ve lineer oluklar görülüyor; biyopside HPF başına 35 eozinofil saptanıyor.',
        clues: ['astım ve alerjik rinit öykülü', 'çok sayıda dairesel halka', 'HPF başına 35 eozinofil'],
        management: 'PPİ denemesi, yutulan topikal kortikosteroid (budesonid/flutikazon) veya 6-gıda eliminasyon diyeti',
        pearl: 'Reflü tedavisinden (PPİ) fayda görmeyen genç erişkin erkeklerde tekrarlayan gıda takılmasının en sık nedenidir; biyopside mukozal frajilite nedeniyle endoskopide perforasyon riskine dikkat edilir.',
        trapFalse: 'biyopside yoğun nötrofilik mikroabseler görülür ve tek başına antiasitlerle tamamen iyileşir',
        trapHighlight: 'yoğun nötrofilik mikroabseler görülür',
      },
      {
        name: 'Mallory-Weiss sendromu',
        target: 'Şiddetli öğürme ve kusma sırasında gastroözofageal bileşke mukozası ve submukozasında oluşan longitudinal yırtıklar',
        hallmark: 'Öncesinde kansız öğürme/kusma ataklarını izleyen ani hematemez ve endoskopide kardiyada lineer mukozal laserasyon',
        vignette:
          'Otuz altı yaşında yoğun alkol alımı sonrası defalarca şiddetle kusan erkek hasta ilk kusmalarının safralı ve gıdalı olduğunu, ancak son kusmada parlak kırmızı kan geldiğini belirterek acile başvuruyor. Hemodinamisi stabil ve göğüs grafisinde pnömomediastinum yok.',
        clues: ['yoğun alkol alımı sonrası defalarca şiddetle kusan', 'son kusmada parlak kırmızı kan', 'pnömomediastinum yok'],
        management: 'Çoğunlukla destek + PPİ ile spontan durur; aktif kanamada endoskopik hemoklips veya epinefrin enjeksiyonu',
        pearl: 'Boerhaave sendromunda tüm duvar katmanları rüptüre olduğu için pnömomediastinum, subkütan amfizem (Hamman bulgusu) ve sol plevral efüzyon gelişirken, burada yırtık sadece mukoza-submukozada sınırlıdır.',
        trapFalse: 'özofagusun tüm katmanlarını içeren tam kat perforasyon nedeniyle acil torakotomi gerektirir',
        trapHighlight: 'tam kat perforasyon nedeniyle acil torakotomi gerektirir',
      },
    ],
  },

  // 12. Malabsorpsiyon sendromları
  {
    branchId: 'dahiliye',
    subTopic: 'Malabsorpsiyon Sendromları Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2019',
    entities: [
      {
        name: 'Çölyak hastalığı',
        target: 'Buğday/arpa/çavdardaki gliadine karşı HLA-DQ2/DQ8 zemininde gelişen T hücre aracılı otoimmün proksimal ince bağırsak enteropatisi',
        hallmark: 'Dirençli demir eksikliği, steatore, dermatitis herpetiformis, anti-doku transglutaminaz IgA pozitifliği ve villüs atrofisi/kript hiperplazisi',
        vignette:
          'Yirmi dokuz yaşında kadın hasta 1 yıldır süren yağlı ishal, karın şişliği, ağız ülserleri ve oral demir tedavisine yanıt vermeyen anemiyle başvuruyor. Dirseklerde kaşıntılı veziküller mevcut. Anti-doku transglutaminaz IgA düzeyi çok yüksek; duodenum biyopsisinde total villüs atrofisi, kript hiperplazisi ve intraepitelyal lenfositoz görülüyor.',
        clues: ['oral demir tedavisine yanıt vermeyen anemi', 'Anti-doku transglutaminaz IgA', 'total villüs atrofisi, kript hiperplazisi'],
        management: 'Ömür boyu sıkı glutensiz diyet (buğday, arpa, çavdar yasak; pirinç, mısır serbest)',
        pearl: 'Selektif IgA eksikliği hastaların %2-3’ünde eşlik ettiği için taramada total IgA düzeyi de bakılmalı, IgA eksikse IgG bazlı anti-DGP/anti-tTG testleri istenmelidir; uzun dönemde enteropati ilişkili T hücreli lenfoma riski artar.',
        trapFalse: 'serolojik taramada total IgA düzeyi bakılmasına gerek yoktur ve yalnızca çocuklukta görülür',
        trapHighlight: 'total IgA düzeyi bakılmasına gerek yoktur',
      },
      {
        name: 'Whipple hastalığı',
        target: 'Tropheryma whipplei bakterisinin lamina propria makrofajlarında çoğalarak mezenterik lenfatik drenajı tıkaması',
        hallmark: 'Orta yaşlı beyaz erkekte artralji, kronik ishal/kilo kaybı, hiperpigmentasyon, oftalmopleji ve lamina propriada PAS+ köpüksü makrofajlar',
        vignette:
          'Ellidört yaşında çiftçi erkek hasta yıllardır gezici büyük eklem ağrıları, son aylarda steatore, 14 kg kilo kaybı, lenfadenopati ve göz hareketlerinde kısıtlılık ile başvuruyor. Duodenum biyopsisinde villusları genişleten, içi PAS pozitif diastaza dirençli çubukçuklarla dolu köpüksü makrofajlar izleniyor.',
        clues: ['gezici büyük eklem ağrıları', 'göz hareketlerinde kısıtlılık', 'PAS pozitif diastaza dirençli çubukçuklarla dolu köpüksü makrofajlar'],
        management: '2 hafta IV seftriakson (veya meropenem), ardından SSS nüksünü önlemek için 1 yıl oral TMP-SMX tedavisi',
        pearl: 'Klasik 4 bulgusu artralji (en erken), ishal, karın ağrısı ve kilo kaybıdır; okülomastikatuvar miyoritmi (göz-çene eş zamanlı kasılması) SSS tutulumu için patognomoniktir.',
        trapFalse: 'hastalığın etkeni bir mantar olup tedavisinde sadece glutensiz diyet yeterlidir',
        trapHighlight: 'tedavisinde sadece glutensiz diyet yeterlidir',
      },
      {
        name: 'Tropikal sprue',
        target: 'Tropikal bölgelerde uzun süre kalanlarda bağırsak florasının enterotoksijenik bakterilerce bozulmasıyla oluşan tüm ince bağırsak hasarı',
        hallmark: 'Tropik seyahat öyküsü, B12 + folat eksikliğine bağlı megaloblastik anemi, hem proksimal hem distal tutulum ve antibiyotiğe hızlı yanıt',
        vignette:
          'Otuz altı yaşında Güneydoğu Asya’da 1 yıl yaşadıktan sonra dönen erkek hasta 4 aydır kronik yağlı ishal, glossit ve kilo kaybı yaşıyor. Laboratuvarda MCV 112 fL, hem folat hem B12 düşük, D-ksiloz testi bozuk bulunuyor. Çölyak serolojisi negatif, biyopside hafif villüs küntleşmesi saptanıyor.',
        clues: ['Güneydoğu Asya’da 1 yıl yaşadıktan sonra', 'hem folat hem B12 düşük', 'Çölyak serolojisi negatif'],
        management: '3-6 ay süreyle tetrasiklin/doksisiklin ve eş zamanlı yüksek doz folik asit + B12 replasmanı',
        pearl: 'Proksimali tutan glutene duyarlı enteropatinin aksine tüm ince bağırsağı (distal ileum dahil -> B12 eksikliği!) etkiler ve glutensiz diyete değil antibiyotik + folata yanıt verir.',
        trapFalse: 'yalnızca proksimal duodenumu etkilediği için B12 düzeyi normal kalır ve glutensiz diyetle düzelir',
        trapHighlight: 'B12 düzeyi normal kalır ve glutensiz diyetle düzelir',
      },
      {
        name: 'Laktoz intoleransı',
        target: 'İnce bağırsak fırçamsı kenar laktaz enziminin primer yaşa bağlı veya sekonder mukozal hasara bağlı azalması',
        hallmark: 'Süt ürünleri sonrası şişkinlik/gaz/ozmotik ishal, dışkı pH < 5.5, yüksek dışkı ozmotik açığı ve pozitif hidrojen nefes testi',
        vignette:
          'Yirmi beş yaşında kadın hasta sütlü kahve veya dondurma yedikten 1-2 saat sonra karında gurultu, şişkinlik ve sulu ishal yaşadığını belirtiyor. Kilo kaybı yok, ince bağırsak biyopsisi normal; dışkı pH 5.0, dışkıda indirgeyici madde pozitif ve laktoz yükleme sonrası nefes hidrojeni > 20 ppm yükseliyor.',
        clues: ['sütlü kahve veya dondurma yedikten', 'dışkı pH 5.0', 'nefes hidrojeni > 20 ppm yükseliyor'],
        management: 'Diyetten süt şekerinin azaltılması, laktaz enzim tabletleri ve kalsiyum/D vitamini desteği',
        pearl: 'Sindirilemeyen disakkarit kolondaki bakterilerce fermente edilerek kısa zincirli yağ asitleri (asidik dışkı pH < 5.5) ve H2 gazı açığa çıkarır; açlıkta ishalin durmasıyla ozmotik ishal özelliklerini taşır.',
        trapFalse: 'açlık sırasında bile devam eden yüksek hacimli sekretuvar ishal ve alkali dışkı pH’sı yapar',
        trapHighlight: 'açlık sırasında bile devam eden yüksek hacimli sekretuvar ishal',
      },
      {
        name: 'Safra tuzu malabsorpsiyonu',
        target: 'Terminal ileum hastalığı (Crohn) veya rezeksiyonu sonrası enterohepatik safra asidi geri emiliminin bozulması',
        hallmark: 'Kısa ileum rezeksiyonunda kolonda sekretuvar kolereik ishal; >100 cm rezeksiyonda safra havuzu tükenmesine bağlı steatore ve kolesterol safra taşı',
        vignette:
          'Kırk iki yaşında Crohn hastalığı nedeniyle 120 cm distal ileum rezeksiyonu geçiren erkek hastada ameliyat sonrası bol yağlı dışkılama, B12 eksikliği, safra kesesi taşı ve böbrek taşı gelişiyor.',
        clues: ['120 cm distal ileum rezeksiyonu', 'bol yağlı dışkılama', 'B12 eksikliği, safra kesesi taşı ve böbrek taşı'],
        management: 'Sınırlı ileal hastalıkta safra asidi bağlayıcı kolestiramin; geniş rezeksiyonda (>100 cm) düşük yağlı diyet, orta zincirli trigliserid ve parenteral B12',
        pearl: '<100 cm ileum kaybında karaciğer sentezi karşılayabildiği için kolona geçen safra tuzları sulu sekretuvar ishal yapar (kolestiramin faydalıdır); >100 cm kayıpta safra tuzu tükendiği için steatore olur ve kolestiramin steatoreyi ağırlaştırır!',
        trapFalse: '100 cm’den uzun ileum rezeksiyonu olan hastalarda kolestiramin yağ emilimini dramatik biçimde düzeltir',
        trapHighlight: 'kolestiramin yağ emilimini dramatik biçimde düzeltir',
      },
    ],
  },

  // 13. İnflamatuvar bağırsak hastalıkları ve kolitler
  {
    branchId: 'dahiliye',
    subTopic: 'İnflamatuvar Bağırsak Hastalıkları ve Kolitler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Crohn hastalığı',
        target: 'NOD2/CARD15 duyarlılığı zemininde Th1/Th17 aracılı ağızdan anüse tüm GİS’i atlamalı ve transmural tutabilen granülomatöz inflamasyon',
        hallmark: 'Terminal ileum tutulumu, kaldırım taşı mukozası, fistül/striktür, non-kazeifiye granülomlar, sürünen yağ ve ASCA pozitifliği',
        vignette:
          'Yirmi altı yaşında sigara içen erkek hasta sağ alt kadran ağrısı, kansız ishal, kilo kaybı ve perianal fistül ile başvuruyor. Kolonoskopide rektum tamamen korunmuş olup atlamalı derin ülserler ve terminal ileit izleniyor; biyopside transmural inflamasyon ve non-kazeifiye granülomlar görülüyor.',
        clues: ['perianal fistül', 'rektum tamamen korunmuş olup atlamalı', 'non-kazeifiye granülomlar'],
        management: 'Sigaranın kesin bırakılması, remisyon indüksiyonunda steroid/anti-TNF (infliksimab/adalimumab); idamede tiopürin veya anti-TNF/ustekinumab',
        pearl: 'Sigara içimi bu hastalığı kötüleştirirken Ülseratif koliti koruyucu etki gösterir! Rektum genellikle korunur ve ince bağırsak tutulumu nedeniyle malabsorpsiyon ile kalsiyum oksalat taşları sıktır.',
        trapFalse: 'sigara içimi hastalığı baskılar, inflamasyon sadece mukozada sınırlıdır ve kolektomi ile kesin kür sağlanır',
        trapHighlight: 'inflamasyon sadece mukozada sınırlıdır ve kolektomi ile kesin kür sağlanır',
      },
      {
        name: 'Ülseratif kolit',
        target: 'Th2 ağırlıklı immün yanıtın rektumdan başlayarak kesintisiz biçimde proksimal kolona yayılan mukoza-submukoza sınırlı ülserasyonu',
        hallmark: 'Kanlı-mukuslu ishal, rektum tutulumu (%95+), grafide kurşun boru görünümü, psödopolipler, kript abseleri ve p-ANCA pozitifliği',
        vignette:
          'Yirmi dokuz yaşında sigarayı 3 ay önce bırakan kadın hasta günde 10 kez kanlı-mukuslu dışkılama ve tenezm ile başvuruyor. Kolonoskopide anal kanaldan itibaren kesintisiz uzanan frajil, kendiliğinden kanayan mukoza ve psödopolipler izleniyor; biyopside kript distorsiyonu ve kript abseleri saptanıyor.',
        clues: ['sigarayı 3 ay önce bırakan', 'anal kanaldan itibaren kesintisiz uzanan', 'kript abseleri'],
        management: 'Hafif-orta hastalıkta 5-ASA (mesalamin); alevlenmede steroid/anti-TNF/vedolizumab; toksik megakolon veya displazide total proktokolektomi (küratiftir)',
        pearl: 'Primer sklerozan kolanjit en klasik eşlikçisidir; toksik megakolon (transvers kolon > 6 cm) geliştiğinde kolonoskopi, antidiyareik ve narkotikler kontrendikedir.',
        trapFalse: 'atlamalı tutulum gösterir, perianal fistüller çok sıktır ve sigara içimi alevlenmeleri tetikler',
        trapHighlight: 'atlamalı tutulum gösterir, perianal fistüller çok sıktır',
      },
      {
        name: 'Mikroskopik kolit',
        target: 'NSAİİ, PPİ veya SSRI maruziyetiyle ilişkili kolon mukozasında makroskopik lezyon olmadan subepitelyal kollajen/lenfosit artışı',
        hallmark: 'Orta-ileri yaşlı kadında kronik sulu ishal, TAMAMEN NORMAL kolonoskopi görünümü ve biyopside kalınlaşmış subepitelyal kollajen bandı / intraepitelyal lenfosit',
        vignette:
          'Altmış iki yaşında kronik lansoprazol ve sertralin kullanan kadın hasta 6 aydır gece de uyandıran kansız sulu ishalle başvuruyor. Yapılan kolonoskopide tüm kolon mukozası tamamen normal görünüyor ancak alınan rastgele biyopsilerde subepitelyal kollajen bandının 22 mikrometreye kalınlaştığı saptanıyor.',
        clues: ['lansoprazol ve sertralin kullanan', 'tüm kolon mukozası tamamen normal görünüyor', 'subepitelyal kollajen bandının'],
        management: 'Sorumlu ilaçların (PPİ, NSAİİ, SSRI) kesilmesi ve ilk basamak ilaç olarak oral budesonid tedavisi',
        pearl: 'Kollajenöz ve lenfositik kolit alt tipleri vardır; kolonoskopi tamamen normal olduğu için tanı sadece rastgele çoklu mukoza biyopsisiyle konabilir.',
        trapFalse: 'kolonoskopide derin kaldırım taşı ülserleri görülür ve tanı için biyopsiye gerek yoktur',
        trapHighlight: 'kolonoskopide derin kaldırım taşı ülserleri görülür',
      },
      {
        name: 'İskemik kolit',
        target: 'Hipoperfüzyon veya vasküler obstrüksiyon sonucu kolonun watershed (su ayrımı) bölgelerinin akut mukoza iskemisi',
        hallmark: 'Yaşlı vasküler hastada ani kramp + parlak kırmızı hematokezya, splenik fleksurada ödem ("başparmak izi" bulgusu) ve keskin sınır',
        vignette:
          'Yetmiş altı yaşında atriyal fibrilasyon ve aort cerrahisi öykülü erkek hasta ani başlayan sol alt kadran ağrısı ve ardından parlak kırmızı kanlı dışkılama ile başvuruyor. BT’de splenik fleksura ve inen kolonda duvar kalınlaşması ile başparmak izi görünümü izleniyor.',
        clues: ['atriyal fibrilasyon', 'splenik fleksura', 'başparmak izi görünümü'],
        management: 'Çoğunlukla bağırsak istirahati, IV sıvı ve geniş spektrumlu antibiyotikle geriler; transmural nekroz/perforasyonda acil rezeksiyon',
        pearl: 'İnferior mezenterik arter ile süperior mezenterik arter sınırındaki splenik fleksura (Griffith noktası) ve rektosigmoid bileşke (Sudeck noktası) en duyarlı alanlardır; rektum çift kanlanması nedeniyle korunur.',
        trapFalse: 'en sık rektumu tutar ve ağrı genellikle yemeklerden bağımsız yavaş gelişir',
        trapHighlight: 'en sık rektumu tutar',
      },
      {
        name: 'Psödomembranöz kolit',
        target: 'Geniş spektrumlu antibiyotiklerin (klindamisin, kinolon, sefalosporin) florayı bozmasıyla Clostridioides difficile toksin A/B’nin mukoza nekrozu yapması',
        hallmark: 'Hastanede yatış/antibiyotik sonrası sulu ishal, > 20.000 lökositoz, sigmoidoskopide sarı-beyaz psödomembran plakları ve dışkıda toksin pozitifliği',
        vignette:
          'Altmış sekiz yaşında klindamisin tedavisinden 10 gün sonra ateş, kramp tarzında karın ağrısı ve günde 12 kez kötü kokulu sulu ishal gelişen hastanın lökosit sayısı 28.000/mm3 saptanıyor. Sigmoidoskopide kolon mukozasına yapışık sarı-beyaz kabarık plaklar görülüyor.',
        clues: ['klindamisin tedavisinden 10 gün sonra', 'lökosit sayısı 28.000/mm3', 'yapışık sarı-beyaz kabarık plaklar'],
        management: 'Sorumlu antibiyotiğin kesilmesi ve ilk basamak olarak oral vankomisin veya fidaksomisin (metronidazol artık ikinci planda); nükste fekal mikrobiyota transplantasyonu',
        pearl: 'Fulminan hastalıkta (ileus/megakolon/hipotansiyon) yüksek doz oral vankomisin + IV metronidazol verilir; tedavi bitiminde kür kontrolü için tekrar dışkı testi yapılması önerilmez.',
        trapFalse: 'tedavide ilk tercih intravenöz vankomisindir ve antibiyotiklere bağlı ishallerde antiperistaltik loperamid güvenle kullanılır',
        trapHighlight: 'ilk tercih intravenöz vankomisindir',
      },
    ],
  },

  // 14. Kronik karaciğer hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Kronik Karaciğer Hastalıkları Ayırıcı Tanısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Wilson hastalığı',
        target: '13. kromozomdaki ATP7B bakır taşıyıcı ATPaz gen mutasyonu nedeniyle safra ile bakır atılımı ve seruloplazmine bağlanmanın bozulması',
        hallmark: 'Gençte karaciğer hastalığı + nöropsikiyatrik bulgular, korneada Kayser-Fleischer halkası, düşük seruloplazmin ve yüksek 24 saat idrar bakırı',
        vignette:
          'On dokuz yaşında erkek hasta okul başarısında düşme, el titremesi, dizartri ve yükselen transaminazlarla değerlendiriliyor. Coombs negatif hemolitik anemi ve düşük serum ALP düzeyi dikkat çekiyor. Yarık lamba muayenesinde Descemet membranında kahverengi-yeşil halka, serum seruloplazmin 7 mg/dL bulunuyor.',
        clues: ['el titremesi, dizartri', 'Coombs negatif hemolitik anemi ve düşük serum ALP', 'Descemet membranında kahverengi-yeşil halka'],
        management: 'Karaciğer biyopsisinde kuru ağırlık bakır ölçümü (>250 mcg/g) ile doğrulama ve D-penisilamin veya trientin şelasyonu + çinko; fulminanda nakil',
        pearl: 'Otozomal resesif kalıtılır; akut karaciğer yetmezliğiyle gelen formda Coombs negatif hemolizle birlikte ALP/total bilirubin oranının < 4 ve AST/ALT > 2.2 olması çok tipiktir.',
        trapFalse: 'otozomal dominant kalıtılır, serum seruloplazmin düzeyi belirgin yüksektir ve serum ALP çok artmıştır',
        trapHighlight: 'otozomal dominant kalıtılır, serum seruloplazmin düzeyi belirgin yüksektir',
      },
      {
        name: 'Herediter hemokromatozis',
        target: 'HFE gen mutasyonu (C282Y) sonucu hepsidin üretiminin azalması ve duodenumdan kontrolsüz aşırı demir emilimi',
        hallmark: 'Siroz + diyabet + bronz cilt ("bronz diyabet"), transferrin satürasyonu > %45, yüksek ferritin ve karaciğerde Prusya mavisi birikimi',
        vignette:
          'Ellidört yaşında erkek hasta halsizlik, 2. ve 3. metakarpofalangeal eklemlerde ağrı, yeni tanı diyabet ve ciltte koyulaşma ile başvuruyor. Transferrin satürasyonu %84, ferritin 1450 ng/mL ölçülüyor; genetik testte homozigot HFE C282Y mutasyonu saptanıyor.',
        clues: ['2. ve 3. metakarpofalangeal eklemlerde ağrı', 'yeni tanı diyabet ve ciltte koyulaşma', 'Transferrin satürasyonu %84'],
        management: 'Haftalık terapötik flebotomi (hedef ferritin < 50-100 ng/mL) ve siroz gelişmişse HCC taraması',
        pearl: 'En erken saptanan biyokimyasal anormallik transferrin satürasyonu artışıdır (>%45); demir birikimi Vibrio vulnificus, Yersinia enterocolitica ve Listeria enfeksiyonu riskini artırır, HCC riski yüksektir.',
        trapFalse: 'total demir bağlama kapasitesi çok yüksektir ve tedavide ilk seçenek ömür boyu oral D-penisilamindir',
        trapHighlight: 'total demir bağlama kapasitesi çok yüksektir',
      },
      {
        name: 'Primer biliyer kolanjit',
        target: 'Orta yaşlı kadınlarda küçük-orta çaplı intrahepatik safra kanallarının T hücre aracılı kronik non-süpüratif destrüktif granülomatöz kolanjiti',
        hallmark: 'Orta yaşlı kadında şiddetli kaşıntı, yüksek ALP/GGT/IgM, ksantelazma ve %95 antimitokondriyal antikor (AMA-M2) pozitifliği',
        vignette:
          'Kırk sekiz yaşında kadın hasta 1 yıldır süren özellikle geceleri artan yaygın kaşıntı ve yorgunluk ile başvuruyor. Göz kapaklarında sarı plaklar mevcut. ALP 520 U/L, GGT 390 U/L, IgM belirgin yüksek, AMA-M2 1/640 pozitif ve MRCP’de ekstrahepatik safra yolları tamamen normal bulunuyor.',
        clues: ['yaygın kaşıntı', 'Göz kapaklarında sarı plaklar', 'AMA-M2 1/640 pozitif'],
        management: 'Birinci basamakta ursodeoksikolik asit (UDKA), yanıt alınamazsa obetikolik asit; kaşıntı için kolestiramin',
        pearl: 'Sjögren, Hashimoto ve CREST sendromuyla sık birliktelik gösterir; osteoporoz ve yağda eriyen vitamin (ADEK) eksikliği sıktır, histolojide florid duktus lezyonları görülür.',
        trapFalse: 'genç erkeklerde sık olup MRCP’de ekstrahepatik safra yollarında tespih tanesi darlıklar yapar',
        trapHighlight: 'ekstrahepatik safra yollarında tespih tanesi darlıklar yapar',
      },
      {
        name: 'Primer sklerozan kolanjit',
        target: 'Hem intrahepatik hem ekstrahepatik büyük safra kanallarında ilerleyici konsantrik "soğan zarı" periduktal fibrozis ve darlıklar',
        hallmark: 'Ülseratif kolitli genç erkekte kolestaz, p-ANCA pozitifliği ve MRCP’de multifokal darlık-genişlemeler ("tespih tanesi" görünümü)',
        vignette:
          'Otuz beş yaşında ülseratif kolit öykülü erkek hasta kaşıntı, sarılık ve yüksek ALP (610 U/L) ile başvuruyor. AMA negatif iken p-ANCA pozitif saptanıyor. MRCP’de hem intrahepatik hem de ana safra kanallarında ardışık darlık ve genişlemelerden oluşan tespih tanesi paterni görülüyor.',
        clues: ['ülseratif kolit öykülü erkek', 'AMA negatif iken p-ANCA pozitif', 'tespih tanesi paterni'],
        management: 'Endoskopik dominant darlık dilatasyonu/stent, kolanjiyokarsinom ve kolon kanseri taraması; kesin küratif tedavi karaciğer nakli',
        pearl: 'Kolanjiyokarsinom ve safra kesesi kanseri riskini en çok artıran tablodur; eşlik eden inflamatuvar bağırsak hastalığı nedeniyle yıllık kolonoskopi şarttır ve UDKA yüksek dozlarda zararlı olabileceğinden rutin önerilmez.',
        trapFalse: 'antimitokondriyal antikor (AMA) vakaların %95’inde pozitiftir ve ursodeoksikolik asit kesin kür sağlar',
        trapHighlight: 'antimitokondriyal antikor (AMA) vakaların %95’inde pozitiftir',
      },
      {
        name: 'Otoimmün hepatit',
        target: 'Hepatosit yüzey antijenlerine karşı T hücre ve antikor aracılı kronik interface (güve yeniği) hepatiti',
        hallmark: 'Genç/orta yaş kadında yüksek transaminazlar, poliklonal IgG yüksekliği, ANA/ASMA (Tip 1) veya anti-LKM1 (Tip 2) pozitifliği ve plazma hücresi infiltrasyonu',
        vignette:
          'Yirmi yedi yaşında kadın hasta halsizlik, artralji ve ikter ile başvuruyor. AST 580 U/L, ALT 720 U/L, ALP 145 U/L, serum IgG düzeyi 3200 mg/dL ölçülüyor. Viral hepatit serolojileri negatif, ANA ve anti-düz kas antikoru (ASMA) yüksek pozitif bulunuyor. Biyopside portal alanda yoğun plazma hücresi ve güve yeniği nekrozu görülüyor.',
        clues: ['AST 580 U/L, ALT 720 U/L', 'serum IgG düzeyi 3200 mg/dL', 'ANA ve anti-düz kas antikoru'],
        management: 'Kortikosteroid (prednizon/budesonid) + idamede azatioprin ile immünsüpresif tedavi',
        pearl: 'Kolestatik hastalıkların aksine ağırlıklı olarak hepatosellüler (AST/ALT) enzim yüksekliği ve IgM değil IgG artışı ile seyreder; immünsüpresif tedaviye yanıt dramatik biçimde iyidir.',
        trapFalse: 'serum IgM düzeyi seçici olarak yükselir ve immünsüpresif tedaviler kontrendikedir',
        trapHighlight: 'immünsüpresif tedaviler kontrendikedir',
      },
    ],
  },

  // 15. Siroz ve portal hipertansiyon komplikasyonları
  {
    branchId: 'dahiliye',
    subTopic: 'Siroz ve Portal Hipertansiyon Komplikasyonları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Spontan bakteriyel peritonit',
        target: 'Sirotik hastada bağırsak duvarından bakteriyel translokasyon ve asit sıvısının opsonizasyon eksikliğine bağlı monomikrobiyal enfeksiyonu',
        hallmark: 'Asitli sirotikte ateş/karın ağrısı/ensefalopati tetiklenmesi ve parasentezde PMNL >= 250 hücre/mm3',
        vignette:
          'Altmış bir yaşında dekompanse alkolik sirozlu erkek hasta subfebril ateş, yaygın karın hassasiyeti ve yeni gelişen konfüzyonla başvuruyor. Tanısal parasentezde asit sıvısı lökositi 620/mm3 ve polimorfonükleer lökosit (PMNL) sayısı 460/mm3 bulunuyor; serum kreatinini 1.6 mg/dL’ye yükselmiş saptanıyor.',
        clues: ['dekompanse alkolik sirozlu', 'polimorfonükleer lökosit (PMNL) sayısı 460/mm3', 'kreatinini 1.6 mg/dL’ye yükselmiş'],
        management: 'Kültür sonucu beklenmeden IV sefotaksim/seftriakson + böbrek yetmezliğini önlemek için 1. ve 3. gün IV albümin infüzyonu; sonrasında norfloksasin/siprofloksasin profilaksisi',
        pearl: 'En sık etken E. coli’dir; PMNL >= 250/mm3 ise tek başına tedavi başlanır. Sekonder bakteriyel peritonitte (perforasyon) asit glukozu < 50 mg/dL, LDH > serum LDH, total protein > 1 g/dL olur ve çoklu bakteri ürer.',
        trapFalse: 'tanı koymak için asit kültüründe üreme olması şarttır ve polimikrobiyal üreme en sık bulgudur',
        trapHighlight: 'polimikrobiyal üreme en sık bulgudur',
      },
      {
        name: 'Hepatorenal sendrom',
        target: 'Sirotik splanknik vazodilatasyonun efektif arteriyel hacmi düşürerek aşırı renal vazokonstriksiyon ve GFH düşüşü yaratması',
        hallmark: 'Yapısal böbrek hasarı/şok/nefrotoksin olmadan hızla yükselen kreatinin, FENa < %1, normal idrar sedimenti ve ALBÜMİN YÜKLEMESİNE YANITSIZLIK',
        vignette:
          'Ellisekiz yaşında ağır siroz ve asitli hastanın idrar çıkışı 250 mL/gün’e düşüyor ve kreatinini 3.4 mg/dL’ye yükseliyor. Diüretikleri kesilip 2 gün boyunca günlük 1 g/kg IV albümin verilmesine rağmen kreatinin düşmüyor. İdrar Na 6 mEq/L, idrar sedimenti tamamen temiz ve böbrek USG normal bulunuyor.',
        clues: ['2 gün boyunca günlük 1 g/kg IV albümin verilmesine rağmen kreatinin düşmüyor', 'İdrar Na 6 mEq/L', 'idrar sedimenti tamamen temiz'],
        management: 'Splanknik vazokonstriktör terlipresin (veya norepinefrin/midodrin+oktreotid) + IV albümin; kesin tedavi karaciğer nakli',
        pearl: 'Böbrekler histolojik olarak tamamen normaldir (nakledilseler çalışırlar); tanı için 48 saatlik albümin hacim genişletmesine yanıt alınmaması şarttır.',
        trapFalse: 'biyopside ağır glomerüler nekroz görülür ve sadece IV furosemid infüzyonuyla düzelir',
        trapHighlight: 'ağır glomerüler nekroz görülür ve sadece IV furosemid infüzyonuyla düzelir',
      },
      {
        name: 'Hepatik ensefalopati',
        target: 'Portosistemik şantlaşma ve karaciğer yetmezliği sonucu temizlenemeyen amonyağın astrositlerde glutamin birikimi ve beyin ödemi yapması',
        hallmark: 'Bilinç değişikliği, uyku-uyanıklık ritmi bozukluğu ve eller ekstansiyondayken flapping tremor (asteriksis)',
        vignette:
          'Altmış dört yaşında sirotik erkek hasta üst GİS kanama geçirdikten 2 gün sonra gün içinde uyuklama, gece ajitasyon, hesap yapamama ve elleri öne uzatıp bilekleri dorsifleksiyona getirdiğinde ani çırpınma tarzı düşmelerle değerlendiriliyor.',
        clues: ['üst GİS kanama geçirdikten 2 gün sonra', 'uyuklama, gece ajitasyon', 'bilekleri dorsifleksiyona getirdiğinde ani çırpınma'],
        management: 'Tetikleyicinin (kanama, enfeksiyon, kabızlık, hipokalemi, diüretik) düzeltilmesi, oral/lavman laktüloz (hedef günde 2-3 yumuşak dışkı) ve rifaksimin',
        pearl: 'Laktüloz kolon bakterilerince asitleştirilerek NH3’ü emilemeyen NH4+ iyonuna dönüştürür ve dışkıyla atılmasını sağlar; hipokalemi renal amonyum üretimini artırdığı için mutlaka düzeltilmelidir ve protein kısıtlaması artık önerilmez.',
        trapFalse: 'hastaların beslenmesinde uzun süreli sıkı protein kısıtlaması temel tedavi yaklaşımıdır',
        trapHighlight: 'uzun süreli sıkı protein kısıtlaması temel tedavi yaklaşımıdır',
      },
      {
        name: 'Özofagus varis kanaması',
        target: 'Portal basıncın > 12 mmHg üzerine çıkmasıyla koroner ve kısa gastrik venlerden özofagus submukozal pleksuslarına kollateral gelişmesi ve rüptür',
        hallmark: 'Sirotik hastada masif ağrısız hematemez/melena, hemodinamik şok ve endoskopide fışkırır tarzda variköz kanama',
        vignette:
          'Elliyedi yaşında Child-Pugh sınıf C sirozlu erkek hasta bir anda ağzından bol miktarda parlak kırmızı kan gelmesi ve bayılma şikayetiyle acile getiriliyor. Kan basıncı 78/48 mmHg, nabız 128/dk ölçülüyor; hasta daha önce nadiren propranolol kullanmış.',
        clues: ['Child-Pugh sınıf C sirozlu', 'ağzından bol miktarda parlak kırmızı kan', '78/48 mmHg, nabız 128/dk'],
        management: 'Havayolu ve kısıtlı kan transfüzyonu (hedef Hb 7-8 g/dL), derhal IV oktreotid/terlipresin + IV seftriakson profilaksisi ve 12 saat içinde endoskopik bant ligasyonu',
        pearl: 'Aşırı kan transfüzyonu portal basıncı yükseltip yeniden kanamayı tetiklediği için hedef Hb 7-8 g/dL tutulur; seftriakson enfeksiyon ve mortaliteyi azaltır, dirençte TIPS uygulanır.',
        trapFalse: 'portal basıncı korumak için hemoglobin düzeyi 12 g/dL üzerine çıkana kadar agresif kan transfüzyonu yapılmalıdır',
        trapHighlight: 'hemoglobin düzeyi 12 g/dL üzerine çıkana kadar agresif kan transfüzyonu',
      },
      {
        name: 'Hepatopulmoner sendrom',
        target: 'Karaciğerin temizleyemediği nitrik oksit gibi vazodilatörlerin akciğer bazallerinde intrapulmoner vasküler dilatasyon ve sağdan sola şant yapması',
        hallmark: 'Platipne (oturunca artan nefes darlığı), ortodeoksi (ayağa kalkınca PaO2 düşmesi), çomak parmak ve kontrast EKO’da geç sol kalp kabarcığı',
        vignette:
          'Ellibir yaşında sirozlu kadın hasta yatarken nefesinin oldukça rahat olduğunu ancak oturup ayağa kalktığında şiddetli nefes darlığı ve dudaklarda morarma geliştiğini ifade ediyor. Yatar pozisyonda SpO2 %94 iken ayağa kalkınca %83’e düşüyor. Ajite salinli kontrast ekokardiyografide sağ kalpten 5 atım sonra sol atriyumda kabarcıklar beliriyor.',
        clues: ['oturup ayağa kalktığında şiddetli nefes darlığı', 'ayağa kalkınca %83’e düşüyor', '5 atım sonra sol atriyumda kabarcıklar'],
        management: 'Uzun süreli oksijen desteği ve tek kesin küratif tedavi olarak karaciğer nakli (TIPS veya medikal vazodilatörler etkisizdir)',
        pearl: 'Portopulmoner hipertansiyonun aksine pulmoner vasküler direnç DÜŞÜKTÜR ve vazodilatasyon bazallerde yoğunlaştığı için yerçekimiyle dik pozisyonda şant artar (platipne-ortodeoksi).',
        trapFalse: 'pulmoner arter basıncı aşırı yükselmiştir ve endotelin reseptör antagonistleri kesin kür sağlar',
        trapHighlight: 'pulmoner arter basıncı aşırı yükselmiştir ve endotelin reseptör antagonistleri kesin kür',
      },
    ],
  },

  // 16. Romatolojik otoantikorlar ve bağ dokusu hastalıkları
  {
    branchId: 'dahiliye',
    subTopic: 'Romatolojik Otoantikorlar ve Bağ Dokusu Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Sistemik lupus eritematozus',
        target: 'Apoptotik nükleer antijenlere karşı gelişen otoantikorların Tip III immün kompleks ve Tip II sitotoksik doku hasarı yapması',
        hallmark: 'Genç kadında malar raş (nazolabial oluğu korur), fotosensitivite, serozit, pansitopeni, nefrit, düşük C3/C4 ve anti-dsDNA / anti-Sm pozitifliği',
        vignette:
          'Yirmi dört yaşında kadın hasta güneş sonrası yanaklarda burun sırtını geçen ancak nazolabial kıvrımları koruyan döküntü, el eklemlerinde ağrı, plevral efüzyon ve proteinüri ile başvuruyor. Lökopeni, trombositopeni, düşük C3/C4, ANA 1/1280, anti-dsDNA ve anti-Sm pozitifliği saptanıyor.',
        clues: ['nazolabial kıvrımları koruyan döküntü', 'düşük C3/C4', 'anti-dsDNA ve anti-Sm pozitifliği'],
        management: 'Tüm hastalara hidroksiklorokin; organ tutulumunun şiddetine göre steroid, mikofenolat/siklofosfamid ve belimumab/anifrolumab',
        pearl: 'ANA en duyarlı tarama testidir; anti-Sm en yüksek özgüllüğe sahiptir, anti-dsDNA nefrit ve hastalık aktivitesiyle koreledir, anti-histon ise ilaca bağlı (prokainamid, hidralazin, izoniazid) formda görülür.',
        trapFalse: 'malar döküntü tipik olarak nazolabial olukları da tutar ve aktif nefritte kompleman düzeyleri yükselir',
        trapHighlight: 'nazolabial olukları da tutar ve aktif nefritte kompleman düzeyleri yükselir',
      },
      {
        name: 'Sistemik skleroz',
        target: 'Mikrovasküler endotel hasarı ve TGF-beta aracılı fibroblast aktivasyonunun cilt ve iç organlarda aşırı kollajen fibrozisi yapması',
        hallmark: 'Raynaud fenomeni, sklerodaktili, diffüz formda anti-Scl-70 + İAH/renal kriz; sınırlı CREST formunda anti-sentromer + pulmoner HT',
        vignette:
          'Kırk beş yaşında kadın hasta soğukta parmaklarının önce beyazlayıp sonra morarması, parmak derisinde sertleşme, yutma güçlüğü ve kuru öksürükle başvuruyor. Ağız açıklığında daralma, parmak uçlarında çukur skarlar, YÇBT’de interstisyel fibrozis ve serolojide anti-topoizomeraz I (Scl-70) pozitifliği görülüyor.',
        clues: ['parmak derisinde sertleşme', 'parmak uçlarında çukur skarlar', 'anti-topoizomeraz I'],
        management: 'Skleroderma renal krizinde derhal ACE inhibitörü (kaptopril); Raynaud için dihidropiridin CCB ve İAH için mikofenolat/nintedanib',
        pearl: 'Diffüz formda yüksek doz steroid kullanımı skleroderma renal krizini (malign HT + MAHA + oligürik ABH) tetikleyebildiği için steroidten mümkün olduğunca kaçınılır; renal krizde hayat kurtarıcı tek ajan ACE inhibitörüdür.',
        trapFalse: 'skleroderma renal krizinde yüksek doz kortikosteroid ilk seçenek tedavidir ve ACE inhibitörleri kontrendikedir',
        trapHighlight: 'yüksek doz kortikosteroid ilk seçenek tedavidir ve ACE inhibitörleri kontrendikedir',
      },
      {
        name: 'Sjögren sendromu',
        target: 'Ekzokrin bezlerin (lakrimal ve tükürük) CD4+ T hücrelerince infiltrasyonu ve anti-Ro (SSA) / anti-La (SSB) otoantikorları',
        hallmark: 'Kuru göz (keratokonjonktivitis sikka), kuru ağız, bilateral parotis şişliği, pozitif Schirmer testi ve minör tükürük bezi biyopsisi',
        vignette:
          'Ellibir yaşında kadın hasta gözlerinde kum batması hissi, kraker yutarken mutlaka su içme gereksinimi, yaygın diş çürükleri ve iki taraflı kulak önü şişliği ile başvuruyor. Schirmer testinde 5 dakikada < 5 mm ıslanma, anti-Ro/SSA ve anti-La/SSB pozitifliği saptanıyor.',
        clues: ['gözlerinde kum batması hissi', 'kraker yutarken mutlaka su içme', 'Schirmer testinde 5 dakikada < 5 mm ıslanma'],
        management: 'Suni gözyaşı, pilokarpin/sevimelin, ağız hijyeni ve ekstraglandüler tutulumda hidroksiklorokin/immünsüpresyon',
        pearl: 'Tip 1 Distal RTA’nın önemli bir nedenidir; parotis bezi sertleşip tek taraflı büyürse marjinal zon B hücreli lenfoma (MALT) gelişme riski (40 kat artış) araştırılmalıdır; gebede anti-Ro bebekte konjenital kalp bloğu yapabilir.',
        trapFalse: 'B hücreli lenfoma riskini azaltır ve gebelikte anti-Ro antikoru fetüsü etkilemez',
        trapHighlight: 'B hücreli lenfoma riskini azaltır',
      },
      {
        name: 'Dermatomiyozit',
        target: 'Perimisyal damarlarda kompleman aracılı mikroanjiyopati sonucu kas liflerinde perifasiküler atrofi ve cilt inflamasyonu',
        hallmark: 'Simetrik proksimal kas güçsüzlüğü, heliotrop raş, Gottron papülleri, yüksek CK, anti-Jo-1/Mi-2 ve gizli malignite birlikteliği',
        vignette:
          'Elli dokuz yaşında kadın hasta saç tararken kollarını kaldıramama ve sandalyeden doğrulamama şikayetleriyle başvuruyor. Üst göz kapaklarında morumsu renk değişikliği, metakarpofalangeal eklem sırtlarında viyole papüller, boyunda V işareti ve CK 4200 U/L bulunuyor. Kas biyopsisinde perifasiküler atrofi görülüyor.',
        clues: ['Üst göz kapaklarında morumsu renk değişikliği', 'metakarpofalangeal eklem sırtlarında viyole papüller', 'perifasiküler atrofi'],
        management: 'Yüksek doz kortikosteroid + metotreksat/azatioprin ve erişkinlerde mutlaka yaşa uygun gizli malignite (over, akciğer, GİS) taraması',
        pearl: 'Polimiyozitten farklı olarak humoral kompleman aracılı perivasküler inflamasyon ve perifasiküler atrofi görülür; anti-Jo-1 pozitifliğinde "mekanikçi eli", artrit ve interstisyel akciğer hastalığı (antisentetaz sendromu) eşlik eder.',
        trapFalse: 'distal kas güçsüzlüğü ön plandadır ve biyopside CD8+ T hücrelerin doğrudan endomisyal invazyonu görülür',
        trapHighlight: 'distal kas güçsüzlüğü ön plandadır',
      },
      {
        name: 'Romatoid artrit',
        target: 'HLA-DR4 zemininde sitrülinlenmiş proteinlere karşı anti-CCP/RF gelişimi ve sinovyal pannusun kıkırdak/kemiği erode etmesi',
        hallmark: 'El MKP ve PİF eklemlerinde simetrik poliartrit (DİF korunur), > 1 saat sabah tutukluğu, marjinal erozyonlar ve anti-CCP pozitifliği',
        vignette:
          'Kırk bir yaşında kadın hasta 4 aydır her iki el bileği, MKP ve PİF eklemlerinde şişlik, ağrı ve sabahları 2 saat süren tutuklukla başvuruyor. DİF eklemler tamamen normal. Laboratuvarda RF ve yüksek özgüllüklü anti-CCP antikoru pozitif, el grafisinde periartiküler osteopeni ve marjinal kemik erozyonları görülüyor.',
        clues: ['MKP ve PİF eklemlerinde şişlik', 'DİF eklemler tamamen normal', 'anti-CCP antikoru pozitif'],
        management: 'Tanı konur konmaz DMARD (ilk tercih metotreksat); yanıt yetersizse anti-TNF/biyolojik veya JAK inhibitörü eklenmesi',
        pearl: 'Anti-CCP tanıda RF’den çok daha özgüldür ve eroziv progresyonu öngörür; Felty sendromu (RA + splenomegali + nötropeni), atlantoaksiyel sublüksasyon ve plevral sıvıda çok düşük glukoz (< 30 mg/dL) klasik özellikleridir.',
        trapFalse: 'distal interfalangeal eklemleri sık tutar ve plevral efüzyonda glukoz düzeyi çok yüksektir',
        trapHighlight: 'distal interfalangeal eklemleri sık tutar ve plevral efüzyonda glukoz düzeyi çok yüksektir',
      },
    ],
  },

  // 17. Spondiloartropatiler ve kristal artropatileri
  {
    branchId: 'dahiliye',
    subTopic: 'Spondiloartropatiler ve Kristal Artropatileri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Ankilozan spondilit',
        target: 'HLA-B27 ilişkili IL-17/IL-23 aksı aktivasyonuyla entezis bölgelerinde (sakroiliak ve omurga) inflamasyon ve ossifikasyon',
        hallmark: 'Genç erkekte gece uyandıran ve egzersizle düzelen inflamatuvar bel ağrısı, pozitif Schober testi, bambu kamışı omurga ve akut anterior üveit',
        vignette:
          'Yirmi altı yaşında erkek hasta 1 yıldır sabahları 1.5 saat tutukluğun eşlik ettiği, hareketle azalıp istirahatte artan bel-kalça ağrısı ve sol gözde kızarıklık/ağrıyla başvuruyor. Schober testi 2 cm (kısıtlı), HLA-B27 pozitif, pelvis grafisinde bilateral evre 3 sakroileit ve sindesmofitler görülüyor.',
        clues: ['hareketle azalıp istirahatte artan bel-kalça ağrısı', 'Schober testi 2 cm', 'bilateral evre 3 sakroileit'],
        management: 'Fizik tedavi + düzenli egzersiz ve ilk basamak NSAİİ; dirençli aksiyel hastalıkta anti-TNF veya anti-IL-17 (sekukinumab) (metotreksat aksiyelde etkisiz!)',
        pearl: 'Konvansiyonel DMARD’lar (metotreksat/sülfasalazin) periferik artritte işe yarasa da aksiyel omurga tutulumunda etkisizdir; aort yetmezliği ve apikal pulmoner fibrozis yapabilir.',
        trapFalse: 'ağrı istirahatle azalır ve aksiyel omurga hastalığında ilk tercih metotreksat tedavisidir',
        trapHighlight: 'aksiyel omurga hastalığında ilk tercih metotreksat tedavisidir',
      },
      {
        name: 'Reaktif artrit',
        target: 'Chlamydia trachomatis veya gastrointestinal (Shigella, Salmonella, Yersinia, Campylobacter) enfeksiyonlardan 1-4 hafta sonra immün tetiklenme',
        hallmark: 'Asimetrik alt ekstremite oligoartriti, üretrit, konjonktivit, keratoderma blenorajika, sirsinat balanit ve entezit ("sosis parmak")',
        vignette:
          'Yirmi beş yaşında erkek hasta 3 hafta önce geçirdiği ağrılı idrar yapma ve akıntı döneminin ardından gelişen sağ diz ve sol ayak bileği şişliği, topuk ağrısı ve bilateral konjonktivit ile başvuruyor. Ayak tabanlarında hiperkeratotik plaklar görülüyor; sinovyal sıvı kültürü tamamen steril saptanıyor.',
        clues: ['3 hafta önce geçirdiği ağrılı idrar yapma', 'sağ diz ve sol ayak bileği şişliği', 'sinovyal sıvı kültürü tamamen steril'],
        management: 'NSAİİ, intraartiküler steroid, kronikleşirse sülfasalazin/metotreksat (aktif Chlamydia varsa doksisiklin/azitromisin, ancak enterik tetiklenmede antibiyotik artriti değiştirmez)',
        pearl: 'Eklem sıvısında canlı bakteri bulunmaz (steril inflamatuvar sıvı); HLA-B27 pozitifliği hastalığın kronikleşme ve sakroileit geliştirme riskini artırır.',
        trapFalse: 'eklem aspirasyon kültüründe etken bakteri yüksek oranda ürer ve tek başına antibiyotikle artrit hemen geçer',
        trapHighlight: 'eklem aspirasyon kültüründe etken bakteri yüksek oranda ürer',
      },
      {
        name: 'Psöriatik artrit',
        target: 'Deri/tırnak tutulumuyla birlikte TNF-alfa/IL-17/IL-23 aracılı DİF eklem, entezis ve aksiyel tutulum',
        hallmark: 'DİF eklem artriti, tırnakta yüksük çukurlaşması (pitting)/onikoliz, daktilit ve grafide "kalem-hokka" (pencil-in-cup) deformitesi',
        vignette:
          'Kırk iki yaşında saçlı deride gümüşi pullu plakları olan erkek hasta el ve ayak distal eklemlerinde asimetrik şişlik ve tüm 3. ayak parmağının sosis gibi şişmesiyle başvuruyor. Tırnaklarda toplu iğne başı çukurlaşmalar, RF negatifliği ve el grafisinde DİF eklemlerde kalem-hokka deformitesi görülüyor.',
        clues: ['gümüşi pullu plakları', '3. ayak parmağının sosis gibi şişmesiyle', 'kalem-hokka deformitesi'],
        management: 'NSAİİ, metotreksat, anti-TNF, anti-IL-17 veya anti-IL-23 ajanlar (sistemik steroid kesilirken deri püstüler alevlenmesi riski nedeniyle dikkat)',
        pearl: 'Romatoid artritten DİF eklemleri tutması, sosis parmak (daktilit), tırnak bulguları ve RF/anti-CCP negatifliğiyle kolayca ayrılır.',
        trapFalse: 'distal interfalangeal eklemleri daima korur ve yüksek titrede romatoid faktör pozitiftir',
        trapHighlight: 'distal interfalangeal eklemleri daima korur ve yüksek titrede romatoid faktör',
      },
      {
        name: 'Gut artriti',
        target: 'Pürin metabolizması son ürünü ürik asitin eklemde birikerek NALP3 inflamazomu üzerinden nötrofilleri ve IL-1 beta’yı uyarması',
        hallmark: 'Ani gece başlayan 1. MTF eklemde (podagra) kızarık-sıcak artrit, grafide sarkan kenarlı zımba deliği erozyon ve polarize mikroskopta NEGATİF ÇİFT KIRILIMLI İĞNE kristaller',
        vignette:
          'Ellidokuz yaşında tiazid diüretik kullanan obez erkek hasta gece yarısı sağ ayak başparmağının kökünde dokunmaya bile dayanılamayan şiddetli ağrı, kızarıklık ve şişlikle uyanıyor. Eklem sıvısı incelemesinde lökosit 42.000/mm3, Gram boyama negatif ve sarı renkli iğne şeklinde negatif çift kırılımlı kristaller görülüyor.',
        clues: ['tiazid diüretik kullanan', 'sağ ayak başparmağının kökünde', 'iğne şeklinde negatif çift kırılımlı kristaller'],
        management: 'Akut atakta NSAİİ, kolşisin veya steroid (ürik asit düşürücü allopürinol/febuksostat akut atakta BAŞLANMAZ/değiştirilmez); kronikte allopürinol',
        pearl: 'Akut atak sırasında serum ürik asit düzeyi normal çıkabilir ve akut dönemde yeni ürik asit düşürücü ilaç başlamak kristalleri mobilize edip atağı uzatır.',
        trapFalse: 'eklem sıvısında pozitif çift kırılımlı eşkenar dörtgen kristaller izlenir ve akut atakta allopürinol hemen başlanır',
        trapHighlight: 'pozitif çift kırılımlı eşkenar dörtgen kristaller izlenir ve akut atakta allopürinol hemen başlanır',
      },
      {
        name: 'Psödogut',
        target: 'Kalsiyum pirofosfat dihidrat (CPPD) kristallerinin eklem kıkırdağında birikmesi (kondrokalsinozis) ve sinoviyal boşluğa dökülmesi',
        hallmark: 'Yaşlı hastada diz/el bileği monoartriti, grafide menisküslerde lineer kalsifikasyon (kondrokalsinozis) ve POZİTİF ÇİFT KIRILIMLI ROMBOİD kristaller',
        vignette:
          'Yetmiş üç yaşında kadın hasta sol dizinde akut şişlik, sıcaklık ve ağrıyla başvuruyor. Diz grafisinde eklem aralığındaki menisküslerde ince çizgisel kalsifikasyon görülüyor. Eklem aspiratında zayıf pozitif çift kırılımlı, mavi renkli eşkenar dörtgen/dikdörtgen kristaller saptanıyor.',
        clues: ['sol dizinde akut şişlik', 'menisküslerde ince çizgisel kalsifikasyon', 'zayıf pozitif çift kırılımlı, mavi renkli eşkenar dörtgen'],
        management: 'Eklem aspirasyonu ve intraartiküler kortikosteroid enjeksiyonu, NSAİİ veya kolşisin; altta yatan hemokromatozis/hiperparatiroidizm/hipomagnezemi taraması',
        pearl: 'Genç yaşta (<55-60 yaş) saptandığında mutlaka metabolik nedenler (4 H: Hemokromatozis, Hiperparatiroidizm, Hipomagnezemi, Hipofosfatazya) araştırılmalıdır.',
        trapFalse: 'iğne şeklinde negatif çift kırılımlı kristaller yapar ve en sık birinci metatarsofalangeal eklemi tutar',
        trapHighlight: 'iğne şeklinde negatif çift kırılımlı kristaller yapar',
      },
    ],
  },

  // 18. Ailevi Akdeniz ateşi ve Behçet hastalığı kümesi
  {
    branchId: 'dahiliye',
    subTopic: 'Ailevi Akdeniz Ateşi, Behçet ve Büyük/Orta Damar Vaskülitleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Ailevi Akdeniz ateşi',
        target: '16. kromozomdaki MEFV gen (pirin proteini) mutasyonu sonucu kontrolsüz inflamazom aktivasyonu ve IL-1 beta salınımı',
        hallmark: '1-3 gün süren kendiliğinden geçen ateş + peritonit/plörit/artrit atakları, ayak sırtında erizipel benzeri eritem ve sekonder AA amiloidoz riski',
        vignette:
          'Yirmi iki yaşında erkek hasta çocukluktan beri birkaç ayda bir gelen, 48 saat sürüp kendiliğinden geçen 39°C ateş, apandisiti taklit eden şiddetli karın ağrısı ve sağ ayak bileği üstünde kızarıklık ataklarıyla başvuruyor. Atak sırasında CRP ve fibrinojen çok yüksek iken ataklar arasında tamamen normal bulunuyor.',
        clues: ['48 saat sürüp kendiliğinden geçen 39°C ateş', 'apandisiti taklit eden şiddetli karın ağrısı', 'sağ ayak bileği üstünde kızarıklık'],
        management: 'Ömür boyu günlük oral kolşisin tedavisi (hem atakları hem AA amiloidozu önler); kolşisin direncinde IL-1 inhibitörü (anakinra/kanakinumab)',
        pearl: 'M694V homozigot mutasyonu en ağır fenotip ve en yüksek AA amiloidoz (nefrotik sendrom) riskiyle ilişkilidir; kolşisin hamilelikte de kesilmeden devam edilir.',
        trapFalse: 'ataklar genellikle 3 haftadan uzun sürer ve kolşisin yalnızca ağrıyı keser ancak amiloidozu önlemez',
        trapHighlight: 'amiloidozu önlemez',
      },
      {
        name: 'Behçet hastalığı',
        target: 'HLA-B51 genetik yatkınlığı zemininde tüm çapta hem arteriyel hem venöz damarları tutabilen nötrofilik değişken damar vasküliti',
        hallmark: 'Tekrarlayan ağrılı oral aftlar (>=3/yıl), skarla iyileşen genital ülserler, panüveit/hipopiyon, eritema nodozum, paterji pozitifliği ve pulmoner arter anevrizması',
        vignette:
          'Otuz yaşında erkek hasta yılda 6 kez çıkan ağrılı ağız yaraları, skrotumda iz bırakan ülserler, ani görme azalması ve bacakta şişlikle başvuruyor. Göz muayenesinde ön kamarada püy seviyesi (hipopiyon) ve retinal vaskülit; ön kolda iğne pikürü sonrası 48. saatte steril püstül gelişimi izleniyor.',
        clues: ['skrotumda iz bırakan ülserler', 'ön kamarada püy seviyesi (hipopiyon)', '48. saatte steril püstül gelişimi'],
        management: 'Mukokütanöz bulgularda kolşisin/apremilast; göz/damar/SSS tutulumunda yüksek doz steroid + azatioprin/anti-TNF/siklofosfamid (arteriyel anevrizmada antikoagülandan kaçınma)',
        pearl: 'Pulmoner arter anevrizması (hemoptizi) en ölümcül komplikasyonudur ve bu durumda antikoagülan verilmesi masif öldürücü hemoptiziye yol açar; damar tutulumunda trombozlar damar duvarı inflamasyonuna bağlı olduğundan temel tedavi immünsüpresyondur.',
        trapFalse: 'genital ülserler ağrısızdır ve pulmoner arter anevrizmasında yüksek doz varfarin ilk tercihtir',
        trapHighlight: 'pulmoner arter anevrizmasında yüksek doz varfarin ilk tercihtir',
      },
      {
        name: 'Poliarteritis nodoza',
        target: 'Orta ve küçük çaplı müsküler arterlerin (özellikle böbrek, mezenter, sinir, testis) transmural fibrinoid nekrotizan vasküliti',
        hallmark: 'Hepatit B ilişkisi, glomerülonefrit OLMADAN hipertansiyon/böbrek infarktı, mononöritis multipleks, testiküler ağrı ve anjiyoda mikroanevrizmalar',
        vignette:
          'Ellibir yaşında HBsAg pozitif erkek hasta ateş, kilo kaybı, yemeklerden sonra karın ağrısı, sağ düşük ayak, testis ağrısı ve yeni hipertansiyon ile başvuruyor. İdrar sedimenti tamamen normal (glomerüler kanama yok), ANCA negatif ve mezenterik anjiyografide orta boy arterlerde çok sayıda küçük tespih tanesi mikroanevrizmalar görülüyor.',
        clues: ['HBsAg pozitif', 'İdrar sedimenti tamamen normal', 'küçük tespih tanesi mikroanevrizmalar'],
        management: 'Yüksek doz kortikosteroid + siklofosfamid (HBV pozitifse antiviral + plazmaferez); böbrek biyopsisinden kanama/rüptür riski nedeniyle kaçınma',
        pearl: 'Akciğer parankimini ve glomerülleri TİPİK OLARAK KORUR, ANCA negatiftir; mikroanevrizma rüptürü riski nedeniyle tanı için renal biyopsi yerine anjiyografi veya sural sinir/kas biyopsisi tercih edilir.',
        trapFalse: 'akciğer kapilleriti ve kresentik glomerülonefrit en sık tutulumudur, c-ANCA pozitiftir',
        trapHighlight: 'akciğer kapilleriti ve kresentik glomerülonefrit en sık tutulumudur, c-ANCA pozitiftir',
      },
      {
        name: 'Dev hücreli arterit',
        target: 'İleri yaşta eksternal karotis dallarının (temporal, oftalmik arter) lamina elastika internasında T hücre aracılı granülomatöz panarterit',
        hallmark: '> 50 yaş hastada yeni tek taraflı baş ağrısı, çene klodikasyonu, polimiyalji romatika, çok yüksek ESR (> 50-100) ve ani tek taraflı körlük riski',
        vignette:
          'Yetmiş dört yaşında kadın hasta 2 haftadır sağ şakakta zonklayıcı baş ağrısı, et çiğnerken çenesinde yorulma ağrısı, saçını tararken kafa derisinde hassasiyet ve omuz-kalça kuşağında sabah tutukluğuyla başvuruyor. ESR 104 mm/saat ve CRP 95 mg/L bulunuyor; sağ gözünde geçici kararma atakları tanımlıyor.',
        clues: ['et çiğnerken çenesinde yorulma ağrısı', 'kafa derisinde hassasiyet', 'ESR 104 mm/saat'],
        management: 'Kalıcı iskemik optik nöropati körlüğünü önlemek için biyopsi sonucu BEKLENMEDEN derhal yüksek doz kortikosteroid (görme kaybı varsa IV pulse) + tosilizumab',
        pearl: 'Biyopside atlamalı tutulum olabildiği için uzun segment (>= 1-2 cm) alınmalıdır ve steroid başlandıktan sonraki ilk 1-2 haftada histolojik bulgular hala saptanabilir.',
        trapFalse: 'temporal arter biyopsisi sonucu çıkana kadar kortikosteroid tedavisi kesinlikle geciktirilmelidir',
        trapHighlight: 'kortikosteroid tedavisi kesinlikle geciktirilmelidir',
      },
      {
        name: 'Takayasu arteriti',
        target: 'Genç kadınlarda aort arkusu ve ana dallarının granülomatöz panarteriti sonucu lümen daralması ve oklüzyon',
        hallmark: '< 40 yaş kadında "nabızsız hastalık", iki kol arası > 10 mmHg tansiyon farkı, subklavyen/karotis üfürümü ve ekstremite klodikasyonu',
        vignette:
          'Yirmi dört yaşında kadın hasta kollarını kullanırken çabuk yorulma, baş dönmesi ve halsizlik şikayetiyle başvuruyor. Muayenede sol radyal nabız alınamıyor; sağ kolda kan basıncı 135/80 mmHg iken sol kolda 80/50 mmHg ölçülüyor. Sol klavikula üzerinde sistolik üfürüm ve BT anjiyografide aort arkus dallarında darlıklar görülüyor.',
        clues: ['sol radyal nabız alınamıyor', 'sağ kolda kan basıncı 135/80 mmHg iken sol kolda 80/50 mmHg', 'aort arkus dallarında darlıklar'],
        management: 'Yüksek doz kortikosteroid + steroid koruyucu ajan (metotreksat/azatioprin/anti-TNF/tosilizumab) ve inflamasyon yatıştıktan sonra revaskülarizasyon',
        pearl: 'Histopatolojik olarak Dev hücreli arterit ile neredeyse aynıdır ancak yaş (< 40 yaş), etnik eğilim ve tutulan damar segmenti (aort ve ana dalları) ile ayrılır.',
        trapFalse: 'tipik olarak 70 yaş üzeri erkeklerde küçük dermal kapillerleri etkiler',
        trapHighlight: '70 yaş üzeri erkeklerde küçük dermal kapillerleri etkiler',
      },
    ],
  },

  // 19. Baş ağrısı ve demans sendromları
  {
    branchId: 'dahiliye',
    subTopic: 'Baş Ağrısı ve Demans Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Migren',
        target: 'Trigeminal vasküler sistem aktivasyonu ve kortikal yayılan depresyon sonucu CGRP ve P maddesi salınımıyla meningeal nörojenik inflamasyon',
        hallmark: '4-72 saat süren tek taraflı zonklayıcı baş ağrısı, bulantı/fotofobi/fonofobi, fiziksel aktiviteyle kötüleşme ve görsel aura',
        vignette:
          'Yirmi yedi yaşında kadın hasta ayda 3-4 kez gelen, öncesinde 20 dakika parlak zikzak ışıklar gördüğü, ardından tek taraflı zonklayıcı, merdiven çıkınca artan, bulantı ve ışık-ses hassasiyetinin eşlik ettiği 12 saatlik baş ağrısı atakları tanımlıyor. Nörolojik muayenesi tamamen normal bulunuyor.',
        clues: ['20 dakika parlak zikzak ışıklar', 'tek taraflı zonklayıcı, merdiven çıkınca artan', 'ışık-ses hassasiyetinin'],
        management: 'Akut atakta triptan (sumatriptan) / NSAİİ / gepant; profilakside propranolol, topiramat, amitriptilin, valproat veya anti-CGRP monoklonal antikorlar',
        pearl: 'Auralı formda kombine östrojen içeren oral kontraseptifler iskemik inme riskini artırdığı için kontrendikedir; triptanlar koroner arter hastalığı ve kontrolsüz HT’de kullanılmaz.',
        trapFalse: 'ataklar 15-30 dakika sürer, eşlik eden konjonktival kızarıklık vardır ve hasta hareket etmekle rahatlar',
        trapHighlight: 'ataklar 15-30 dakika sürer',
      },
      {
        name: 'Küme tipi baş ağrısı',
        target: 'Posterior hipotalamus aktivasyonu ve trigeminal-otonomik refleks aracılı orbital/periorbital parasempatik deşarj',
        hallmark: 'Erkeklerde geceleri uykudan uyandıran 15-180 dk şiddetli tek taraflı orbital ağrı, aynı tarafta yaşarma/rinore/Horner sendromu ve ajitasyon',
        vignette:
          'Otuz sekiz yaşında erkek hasta son 3 haftadır her gece aynı saatte uykudan uyandıran, sol göz arkasında bıçak saplanır gibi 45 dakika süren dayanılmaz ağrı ile başvuruyor. Atak sırasında sol gözünde kızarıklık, yaşarma, burun tıkanıklığı ve pitoz gelişiyor; hasta yerinde duramayıp odayı turluyor.',
        clues: ['her gece aynı saatte uykudan uyandıran', 'sol gözünde kızarıklık, yaşarma, burun tıkanıklığı ve pitoz', 'yerinde duramayıp odayı turluyor'],
        management: 'Akut atakta %100 yüksek akımlı oksijen (12-15 L/dk maske ile) + subkütan/intranazal sumatriptan; atak dönemi profilaksisinde verapamil (+ kısa steroid köprüsü)',
        pearl: 'Hasta karanlıkta yatmak isteyen migren hastasının aksine atak sırasında aşırı huzursuz ve hareketlidir; alkol küme döneminde atağı hemen tetikler.',
        trapFalse: 'en sık genç kadınlarda görülür ve akut atakta en etkili tedavi oral beta-blokerlerdir',
        trapHighlight: 'akut atakta en etkili tedavi oral beta-blokerlerdir',
      },
      {
        name: 'Gerilim tipi baş ağrısı',
        target: 'Perikranyal miyofasyal nosiseptörlerin sensitizasyonu ve stres/kas gerginliğine bağlı santral ağrı modülasyon bozukluğu',
        hallmark: 'Bilateral bant/mengene şeklinde sıkıştırıcı hafif-orta ağrı, rutin fiziksel aktiviteyle ARTMAZ, bulantı-kusma ve aura YOKTUR',
        vignette:
          'Otuz bir yaşında yoğun iş stresi yaşayan kadın hasta günün sonuna doğru ortaya çıkan, tüm başını bir bant gibi saran sıkıştırıcı karakterde, yürümekle artmayan ve bulantının eşlik etmediği 4-6 saatlik baş ağrılarıyla başvuruyor.',
        clues: ['tüm başını bir bant gibi saran sıkıştırıcı', 'yürümekle artmayan', 'bulantının eşlik etmediği'],
        management: 'Akut ağrıda basit analjezik/NSAİİ (ilaç aşırı kullanım baş ağrısı riskine dikkat); kronik formda amitriptilin profilaksisi',
        pearl: 'En sık görülen primer baş ağrısı tipidir; sıkışma-basınç hissi, bilateral oluşu ve bulantı/kusma ile fotofobi-fonofobi birlikteliğinin olmamasıyla ayrılır.',
        trapFalse: 'tek taraflı zonklayıcı karakterdedir ve şiddetli bulantı-kusma ile birlikte görsel aura tipiktir',
        trapHighlight: 'şiddetli bulantı-kusma ile birlikte görsel aura tipiktir',
      },
      {
        name: 'Alzheimer hastalığı',
        target: 'Amiloid-beta plakları ve hiperfosforile tau nörofibriler yumaklarının Meynert’in bazal çekirdeğindeki kolinerjik nöronları ve hipokampusu tahrip etmesi',
        hallmark: 'Sinsi başlayan yakın bellek (epizodik hafıza) kaybı, ilerleyici afazi/apraksi/agnozi, MR’da medial temporal/hipokampal atrofi',
        vignette:
          'Yetmiş dört yaşında erkek hasta son 2 yıldır aynı soruları defalarca sorma, ocakta yemek unutma ve bildiği mahallede yolunu kaybetme şikayetleriyle getiriliyor. Kişilik ve motor muayene başlangıçta korunmuş iken MR’da belirgin bilateral hipokampal atrofi saptanıyor.',
        clues: ['aynı soruları defalarca sorma', 'bildiği mahallede yolunu kaybetme', 'bilateral hipokampal atrofi'],
        management: 'Kolinesteraz inhibitörleri (donepezil, rivastigmin, galantamin) ve orta-ileri evrede NMDA antagonisti memantin',
        pearl: 'E4 alleli (ApoE4) en önemli genetik risk faktörü, yaşlılık ise en önemli genel risk faktörüdür; B12 eksikliği, hipotiroidi, normal basınçlı hidrosefali ve depresyon (psödodemans) gibi geri döndürülebilir nedenler dışlanmalıdır.',
        trapFalse: 'hastalığın en erken döneminde belirgin görsel halüsinasyonlar ve erken parkinsonizm ön plandadır',
        trapHighlight: 'en erken döneminde belirgin görsel halüsinasyonlar ve erken parkinsonizm',
      },
      {
        name: 'Lewy cisimcikli demans',
        target: 'Serebral korteks, beyin sapı ve substansia nigrada yaygın alfa-sinüklein inklüzyonlarının (Lewy cisimcikleri) birikimi',
        hallmark: 'Dalgalanan bilişsel dikkat, erken dönem ayrıntılı görsel halüsinasyonlar, eş zamanlı parkinsonizm, REM uyku davranış bozukluğu ve antipsikotik duyarlılığı',
        vignette:
          'Yetmiş bir yaşında erkek hasta bilişsel durumunun günden güne ve saatler içinde belirgin dalgalanması, evde küçük çocuklar ve hayvanlar gördüğünü söylemesi, ellerinde titreme ve yavaşlama ile başvuruyor. Ajitasyon için verilen düşük doz haloperidol sonrası ağır rijidite ve katatoni gelişiyor.',
        clues: ['saatler içinde belirgin dalgalanması', 'küçük çocuklar ve hayvanlar gördüğünü', 'düşük doz haloperidol sonrası ağır rijidite'],
        management: 'Rivastigmin/donepezil gibi kolinesteraz inhibitörleri; klasik ve çoğu atipik antipsikotiklerden KESİN KAÇINMA (gerekirse pimavanserin/çok düşük doz ketiapin)',
        pearl: 'Klasik antipsikotiklere (haloperidol) aşırı nöroleptik duyarlılığı nedeniyle ölümcül rijidite/NMS benzeri tablo gelişir; demansın parkinsonizmden önce veya ilk 1 yıl içinde başlamasıyla Parkinson demansından ayrılır.',
        trapFalse: 'haloperidol görsel halüsinasyonları düzeltmede en güvenli ve ilk tercih edilen ilaçtır',
        trapHighlight: 'haloperidol görsel halüsinasyonları düzeltmede en güvenli ve ilk tercih',
      },
    ],
  },

  // 20. Nöromüsküler ve demiyelinizan hastalıklar
  {
    branchId: 'dahiliye',
    subTopic: 'Nöromüsküler ve Demiyelinizan Hastalıklar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Multipl skleroz',
        target: 'SSS’de oligodendrositlere ve miyeline karşı otoreaktif T ve B lenfositlerin zaman ve mekan içinde yaygın demiyelinizan plaklar oluşturması',
        hallmark: 'Genç kadında optik nörit, internükleer oftalmopleji, Uhthoff fenomeni, Lhermitte bulgusu, MR’da periventriküler Dawson parmakları ve BOS’ta oligoklonal bant',
        vignette:
          'Yirmi dokuz yaşında kadın hasta sağ gözde ağrılı görme bulanıklığı, boynunu öne eğdiğinde omurgadan aşağı elektrik çarpması hissi ve sıcak banyoda şikayetlerinin artmasıyla başvuruyor. Muayenede sağ gözde görece afferent pupilla defekti ve sola bakışta sağ gözde addüksiyon kısıtlılığı ile sol gözde nistagmus saptanıyor. BOS’ta oligoklonal IgG bantları pozitif bulunuyor.',
        clues: ['sıcak banyoda şikayetlerinin artması', 'sola bakışta sağ gözde addüksiyon kısıtlılığı', 'oligoklonal IgG bantları'],
        management: 'Akut atakta yüksek doz IV metilprednizolon; atak önlemede interferon-beta, dimetil fumarat, fingolimod, natalizumab veya okrelizumab',
        pearl: 'Bilateral internükleer oftalmopleji (MLF lezyonu) ve optik nörit genç erişkinde son derece tipiktir; McDonald kriterlerine göre tanıda zaman ve mekan içinde yayılım şarttır.',
        trapFalse: 'periferik sinirlerde Schwann hücrelerini etkiler ve BOS’ta albüminositolojik disosiasyon görülür',
        trapHighlight: 'periferik sinirlerde Schwann hücrelerini etkiler',
      },
      {
        name: 'Guillain-Barre sendromu',
        target: 'Campylobacter jejuni veya viral enfeksiyon sonrası moleküler taklit yoluyla periferik sinir miyelinine karşı otoimmün demiyelinizasyon',
        hallmark: 'Asendan simetrik flask paralizi, AREFLEKSİ, otonomik disfonksiyon/solunum yetmezliği riski ve BOS’ta albüminositolojik disosiasyon',
        vignette:
          'Otuz iki yaşında 2 hafta önce sulu ishal geçiren erkek hasta ayak parmaklarında karıncalanma ile başlayıp günler içinde dizlere ve kollara yükselen güçsüzlükle başvuruyor. Muayenede alt ve üst ekstremitelerde derin tendon refleksleri hiç alınamıyor. BOS’ta protein 190 mg/dL, hücre sayısı ise 2/mm3 bulunuyor.',
        clues: ['2 hafta önce sulu ishal', 'derin tendon refleksleri hiç alınamıyor', 'protein 190 mg/dL, hücre sayısı ise 2/mm3'],
        management: 'Zorlu vital kapasite (FVC) takibi ve ACİL İVİG veya plazmaferez (kortikosteroidler bu hastalıkta ETKİSİZDİR)',
        pearl: 'Diğer nöroimmün hastalıklardan farklı olarak KORTİKOSTEROİDLER iyileşmeyi hızlandırmaz ve önerilmez! Miller-Fisher varyantında oftalmopleji, ataksi, arefleksi triyadı ve anti-GQ1b antikoru görülür.',
        trapFalse: 'tedavide ilk tercih yüksek doz intravenöz metilprednizolondur ve BOS’ta yoğun lenfositoz saptanır',
        trapHighlight: 'ilk tercih yüksek doz intravenöz metilprednizolondur',
      },
      {
        name: 'Myasthenia gravis',
        target: 'Nöromüsküler kavşakta postsinaptik nikotinik asetilkolin reseptörlerine (veya MuSK’a) karşı gelişen IgG otoantikorları',
        hallmark: 'Gün sonuna ve kullanıma bağlı artan yorulabilir pitoz/diplopi/bulber güçsüzlük, normal refleks/duyu, timoma birlikteliği ve tek lif EMG’de artmış jitter',
        vignette:
          'Otuz dört yaşında kadın hasta akşam saatlerinde belirginleşen göz kapağı düşüklüğü, çift görme, çiğnerken çenesinin yorulması ve sesinin genizden gelmesiyle başvuruyor. Göz kapağına 2 dakika buz torbası konulduğunda pitoz düzeliyor; DTR ve pupilla refleksleri tamamen normal. Toraks BT’de ön mediastende timoma saptanıyor.',
        clues: ['akşam saatlerinde belirginleşen göz kapağı düşüklüğü', 'buz torbası konulduğunda pitoz düzeliyor', 'ön mediastende timoma'],
        management: 'Semptomatik antikolinesteraz (piridostigmin), immünsüpresyon (prednizon/azatioprin/rituksimab), krizde İVİG/plazmaferez ve AChR+ hastada timektomi',
        pearl: 'Aminoglikozidler, florokinolonlar, makrolidler, beta-blokerler ve magnezyum miyastenik krizi tetikleyebilir; kolinerjik krizde miyozis/bradikardi/sekresyon artışı (SLUDGE) eşlik eder.',
        trapFalse: 'derin tendon refleksleri kaybolmuştur ve tekrarlayıcı sinir uyarımında aksiyon potansiyeli giderek artar',
        trapHighlight: 'derin tendon refleksleri kaybolmuştur ve tekrarlayıcı sinir uyarımında aksiyon potansiyeli giderek artar',
      },
      {
        name: 'Lambert-Eaton miyastenik sendromu',
        target: 'Presinaptik sinir ucundaki voltaj bağımlı P/Q tipi kalsiyum kanallarına karşı antikorların asetilkolin salınımını azaltması',
        hallmark: 'Proksimal bacak güçsüzlüğü, ağız kuruluğu, azalmış reflekslerin egzersizle düzelmesi ve yüksek frekanslı EMG’de inkremental yanıt',
        vignette:
          'Altmış üç yaşında uzun süreli sigara içicisi erkek hasta merdiven çıkamama, ağız kuruluğu ve erektil disfonksiyonla başvuruyor. Göz ve yutma kasları korunmuş, DTR’ler alınamıyor ancak kısa süreli güçlü kasılma sonrası refleksler ve kas gücü artıyor; EMG’de 50 Hz uyarımda %250 amplitüd artışı saptanıyor.',
        clues: ['uzun süreli sigara içicisi', 'Göz ve yutma kasları korunmuş', '50 Hz uyarımda %250 amplitüd artışı'],
        management: 'Altta yatan küçük hücreli akciğer kanserinin taranması/tedavisi, amifampridin (3,4-diaminopiridin) ve immünsüpresyon',
        pearl: 'Yaklaşık %50-60’ında paraneoplastik olup özellikle küçük hücreli akciğer kanseriyle ilişkilidir ve kanser tanısından aylar-yıllar önce ortaya çıkabilir.',
        trapFalse: 'timoma ile güçlü birliktelik gösterir ve piridostigmin tek başına tamamen normal güç sağlar',
        trapHighlight: 'timoma ile güçlü birliktelik gösterir',
      },
      {
        name: 'Amiyotrofik lateral skleroz',
        target: 'Hem korteksteki üst motor nöronların hem de medulla spinalis ön boynuzundaki alt motor nöronların progresif dejenerasyonu',
        hallmark: 'DUYU, BİLİŞSEL/OKÜLOMOTOR VE SFİNKTER KORUNMASI ile birlikte aynı anda hiperrefleksi/Babinski (ÜMN) ve atrofi/fasikülasyon (AMN)',
        vignette:
          'Ellisekiz yaşında erkek hasta sağ el kaslarında erime, dilde ve kollarda istemsiz seyirmeler ile yutma güçlüğü geliştiriyor. Muayenede tenar atrofi ve dilde fasikülasyonlar görülürken aynı ekstremitede derin tendon reflekslerinin aşırı canlı ve Babinski işaretinin pozitif olduğu saptanıyor; duyu muayenesi ve göz hareketleri tamamen normal.',
        clues: ['tenar atrofi ve dilde fasikülasyonlar', 'derin tendon reflekslerinin aşırı canlı ve Babinski işaretinin pozitif', 'duyu muayenesi ve göz hareketleri tamamen normal'],
        management: 'Glutamat antagonisti riluzol veya antioksidan edaravon ile sağkalımın birkaç ay uzatılması, non-invaziv solunum ve PEG beslenme desteği',
        pearl: 'Duyu bozukluğu varsa tanıdan şüphe edilmelidir! En sık sporadik olup ailesel vakalarda C9orf72 ve SOD1 mutasyonları rol oynar; ölüm genellikle solunum kas yetmezliğinden gelişir.',
        trapFalse: 'erken dönemde belirgin eldiven-çorap tarzı duyu kaybı ve idrar inkontinansı görülür',
        trapHighlight: 'eldiven-çorap tarzı duyu kaybı ve idrar inkontinansı',
      },
    ],
  },

  // 21. Hareket bozuklukları ve epilepsi
  {
    branchId: 'dahiliye',
    subTopic: 'Hareket Bozuklukları ve Epilepsi Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Parkinson hastalığı',
        target: 'Substantia nigra pars compacta dopaminerjik nöronlarının kaybı ve alfa-sinüklein içeren Lewy cisimcikleri',
        hallmark: 'Asimetrik istirahat tremoru ("para sayar" tremor, 4-6 Hz), bradikinezi, dişli çark rijiditesi ve postural instabilite',
        vignette:
          'Altmış dört yaşında erkek hasta sağ elinde dinlenirken belirginleşip bir bardak tutunca kaybolan titreme, yürümeye başlarken zorlanma, küçük adımlarla öne eğik yürüme ve yüz mimiklerinde azalma ile başvuruyor. Muayenede pasif harekette dişli çark direnci saptanıyor; koku alma duyusu da azalmış bulunuyor.',
        clues: ['dinlenirken belirginleşip bir bardak tutunca kaybolan titreme', 'küçük adımlarla öne eğik yürüme', 'dişli çark direnci'],
        management: 'Yaşlı/ağır hastada levodopa-karbidopa; genç hastada motor komplikasyonları geciktirmek için dopamin agonisti (pramipeksol/ropinirol) veya MAO-B inhibitörü',
        pearl: 'Bradikinezi tanı için mutlak şarttır; ilk klinik bulgular başlamadan yıllar önce anosmi, kabızlık ve REM uyku davranış bozukluğu ortaya çıkabilir.',
        trapFalse: 'tremor hareket sırasında ve kolları öne uzatınca artar, istirahatte tamamen kaybolur',
        trapHighlight: 'hareket sırasında ve kolları öne uzatınca artar, istirahatte tamamen kaybolur',
      },
      {
        name: 'Esansiyel tremor',
        target: 'Serebellotalamokortikal yolakta otozomal dominant yatkınlıklı osilatuvar aktivite',
        hallmark: 'Bilateral simetrik postüral/aksiyon tremoru (8-12 Hz), kafa/ses titremesi, aile öyküsü ve AZ MİKTARDA ALKOLLE BELİRGİN DÜZELME',
        vignette:
          'Ellibeş yaşında kadın hasta çorba içerken kaşığın titremesi ve yazı yazarken ellerinin sallanması şikayetiyle başvuruyor. Dinlenme halinde elleri tamamen sakin duruyor ancak kollarını öne uzattığında hızlı bilateral tremor başlıyor. Babasında da benzer tablo olduğu ve bir kadeh şarap içince titremenin neredeyse geçtiği öğreniliyor.',
        clues: ['çorba içerken kaşığın titremesi', 'Dinlenme halinde elleri tamamen sakin', 'bir kadeh şarap içince titremenin neredeyse geçtiği'],
        management: 'Birinci basamak olarak propranolol veya primidon tedavisi',
        pearl: 'En sık görülen hareket bozukluğudur; istirahat tremorundan ziyade postüral/kinetik tremor yapması, baş ve seste titreme yapabilmesi ve alkole yanıtıyla ayrılır.',
        trapFalse: 'asimetrik başlangıçlıdır, dişli çark rijiditesi eşlik eder ve ilk seçenek tedavi levodopadır',
        trapHighlight: 'dişli çark rijiditesi eşlik eder ve ilk seçenek tedavi levodopadır',
      },
      {
        name: 'Huntington hastalığı',
        target: '4. kromozomdaki HTT geninde otozomal dominant CAG trinükleotid tekrarı artışının kaudat nukleus ve putamende GABAerjik nöron kaybı yapması',
        hallmark: 'Orta yaşta progresif koreoatetoz, psikiyatrik bozukluk/demans, genetik antisipasyon ve BT/MR’da kaudat atrofisine bağlı "kutu şeklinde" lateral ventriküller',
        vignette:
          'Kırk bir yaşında erkek hasta son 2 yıldır ellerinde ve yüzünde istemsiz dans eder gibi kıvrılma hareketleri, sinirlilik ve unutkanlık şikayetleriyle getiriliyor. Babasının benzer hastalıkla 50 yaşında öldüğü, hastada ise 38 yaşında başladığı öğreniliyor. Beyin MR’da kaudat nükleus başının düzleşip kaybolduğu görülüyor.',
        clues: ['dans eder gibi kıvrılma hareketleri', 'Babasının benzer hastalıkla 50 yaşında öldüğü', 'kaudat nükleus başının düzleşip kaybolduğu'],
        management: 'Kore için VMAT2 inhibitörleri (tetrabenazin, deutetrabenazin) veya atipik antipsikotikler; genetik danışmanlık',
        pearl: 'Paternal geçişte CAG tekrar sayısı artarak hastalığın sonraki kuşakta daha erken başlamasına (antisipasyon) yol açar; striatumda GABA ve asetilkolin azalır, dopamin görece artar.',
        trapFalse: 'otozomal resesif kalıtılır ve beyin MR’ında izole serebellar vermis atrofisi görülür',
        trapHighlight: 'otozomal resesif kalıtılır',
      },
      {
        name: 'Jüvenil miyoklonik epilepsi',
        target: 'İdiyopatik jeneralize talamokortikal hipereksitabilite (sıklıkla GABRA1/EFHC1 ilişkili)',
        hallmark: 'Adölesanda sabah uyanınca kollarda sıçramalar (elinden kahve fincanını düşürme), uykusuzluk/alkol/ışıkla tetiklenme ve EEG’de 4-6 Hz polidiken-dalga',
        vignette:
          'On altı yaşında lise öğrencisi özellikle uykusuz kaldığı sabahların ilk saatinde diş fırçalarken veya kahvaltıda kollarının aniden sıçrayıp elindeki bardağı düşürdüğünü anlatıyor. Geçen hafta bir kez jeneralize tonik-klonik nöbet geçirmiş. EEG’de 4-6 Hz jeneralize polidiken-dalga deşarjları görülüyor.',
        clues: ['uykusuz kaldığı sabahların ilk saatinde', 'elindeki bardağı düşürdüğünü', '4-6 Hz jeneralize polidiken-dalga'],
        management: 'İlk tercih valproik asit (doğurganlık çağındaki kadında teratojenite nedeniyle levetirasetam veya lamotrijin); karbamazepin ve fenitoinden KAÇINMA',
        pearl: 'Karbamazepin, okskarbazepin ve fenitoin miyoklonik ve absans nöbetlerini paradoksal olarak KÖTÜLEŞTİRİR; tedaviye çok iyi yanıt verir ancak nüks oranı yüksek olduğu için genellikle ömür boyu sürer.',
        trapFalse: 'fokal nöbet tedavisinde kullanılan karbamazepin bu sendromda en etkili birinci seçenek ilaçtır',
        trapHighlight: 'karbamazepin bu sendromda en etkili birinci seçenek ilaçtır',
      },
      {
        name: 'Absans epilepsisi',
        target: 'Talamik T-tipi Ca2+ kanalları ile korteks arasındaki ritmik döngünün geçici bilinç kesintisi oluşturması',
        hallmark: 'Çocukta 5-15 saniyelik dalma atakları (postiktal konfüzyon YOK), hiperventilasyonla tetiklenme ve EEG’de klasik 3 Hz diken-dalga kompleksi',
        vignette:
          'Sekiz yaşında kız çocuğu okulda ders dinlerken günde 20-30 kez aniden 10 saniye boyunca boş bakıp donup kalıyor, göz kapaklarını hafifçe kırpıyor ve hemen kaldığı yerden konuşmaya devam ediyor. Muayenede 3 dakika derin nefes alıp verme yaptırılınca atak tetikleniyor ve EEG’de simetrik 3 Hz diken-yavaş dalga görülüyor.',
        clues: ['10 saniye boyunca boş bakıp donup kalıyor', 'kaldığı yerden konuşmaya devam ediyor', '3 Hz diken-yavaş dalga'],
        management: 'T-tipi kalsiyum kanal blokeri etosüksimid (eşlik eden tonik-klonik nöbet yoksa ilk tercih) veya valproik asit',
        pearl: 'Atak öncesi aura ve atak sonrası postiktal uyku/konfüzyon kesinlikle yoktur; hiperventilasyon atağı kolayca provoke eder ve kompleks parsiyel nöbetlerden saniyeler sürmesiyle ayrılır.',
        trapFalse: 'atak sonrası derin postiktal uyku dönemi olur ve ilk tercih ilaç fenitoin veya karbamazepindir',
        trapHighlight: 'derin postiktal uyku dönemi olur ve ilk tercih ilaç fenitoin',
      },
    ],
  },

  // 22. Büllöz ve inflamatuvar dermatozlar
  {
    branchId: 'dahiliye',
    subTopic: 'Büllöz ve İnflamatuvar Dermatozlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Pemfigus vulgaris',
        target: 'Keratinositler arası desmozomal adezyonu sağlayan desmoglein-3 ve desmoglein-1’e karşı gelişen IgG otoantikorları (akantoliz)',
        hallmark: 'Ağrılı oral mukoza erozyonları, kolay patlayan gevşek büller, pozitif Nikolsky bulgusu, supra-bazal akantoliz ve İF’de ağsı (balık ağı) IgG birikimi',
        vignette:
          'Kırk beş yaşında erkek hasta 2 aydır geçmeyen ağrılı ağız yaraları ve gövdede hızla soyulup erozyona dönüşen gevşek su kabarcıklarıyla başvuruyor. Lezyon kenarındaki sağlam deriye hafifçe bastırıp kaydırınca epidermis soyuluyor. Biyopside bazal tabakanın hemen üzerinde yarık ("mezar taşı dizilimi") ve hücreler arası ağsı IgG saptanıyor.',
        clues: ['ağrılı ağız yaraları', 'sağlam deriye hafifçe bastırıp kaydırınca epidermis soyuluyor', 'mezar taşı dizilimi'],
        management: 'Yüksek doz sistemik kortikosteroid + steroid koruyucu (azatioprin/mikofenolat) veya birinci basamak anti-CD20 rituksimab',
        pearl: 'Ağız mukozası neredeyse her zaman ilk tutulan bölgedir; büller intraepidermal yerleşimli olduğu için çok gevşektir ve kolay yırtılır.',
        trapFalse: 'büller gergin olup subepidermal yerleşimlidir, oral mukoza genellikle korunur ve Nikolsky negatiftir',
        trapHighlight: 'subepidermal yerleşimlidir, oral mukoza genellikle korunur ve Nikolsky negatiftir',
      },
      {
        name: 'Büllöz pemfigoid',
        target: 'Bazal keratinositleri bazal membrana bağlayan hemidesmozomal BP180 (tip XVII kollajen) ve BP230 proteinlerine karşı IgG otoantikorları',
        hallmark: 'Yaşlı hastada kaşıntılı, kolay yırtılmayan GERGİN subepidermal büller, nadir oral tutulum, negatif Nikolsky ve dermoepidermal bileşkede lineer IgG/C3',
        vignette:
          'Yetmiş altı yaşında kadın hasta karın ve uyluk iç yüzlerinde ürtikeryal plaklar üzerinde gelişen büyük, kalın duvarlı, gergin ve kaşıntılı su kabarcıkları ile başvuruyor. Ağız içi normal, Nikolsky bulgusu negatif. Biyopside eozinofilden zengin subepidermal bül ve bazal membranda lineer IgG-C3 birikimi görülüyor.',
        clues: ['büyük, kalın duvarlı, gergin ve kaşıntılı', 'Nikolsky bulgusu negatif', 'bazal membranda lineer IgG-C3'],
        management: 'Yaygın olgularda yüksek potent topikal klobetasol veya sistemik kortikosteroid / doksisiklin',
        pearl: 'Subepidermal ayrışma nedeniyle bül tavanı tüm epidermisten oluşur, bu yüzden büller gergin ve hemorajik bile olsa sağlam kalır; DPP-4 inhibitörleri ve furosemid tetikleyebilir.',
        trapFalse: 'direkt immünfloresanda epidermis hücreleri arasında ağsı IgG birikimi ve pozitif Nikolsky bulgusu vardır',
        trapHighlight: 'epidermis hücreleri arasında ağsı IgG birikimi ve pozitif Nikolsky',
      },
      {
        name: 'Dermatitis herpetiformis',
        target: 'Diyet gliadinine karşı oluşan IgA antikorlarının dermal papilla uçlarındaki epidermal transglutaminaz (TG3) ile çapraz reaksiyonu',
        hallmark: 'Dirsek-diz-kalçada aşırı kaşıntılı simetrik papüloveziküller, dermal papillada nötrofilik mikroabseler ve GRANÜLER IgA birikimi',
        vignette:
          'Otuz bir yaşında erkek hasta her iki dirsek, diz ekstansör yüzleri ve sakral bölgede tırnaklama nedeniyle kanamalı kabuklara dönüşmüş son derece kaşıntılı küçük vezikül gruplarıyla başvuruyor. Sağlam deri biyopsisinde dermal papilla tepelerinde granüler IgA birikimi ve anti-tTG pozitifliği saptanıyor.',
        clues: ['dirsek, diz ekstansör yüzleri', 'son derece kaşıntılı küçük vezikül gruplarıyla', 'dermal papilla tepelerinde granüler IgA'],
        management: 'Hızlı cilt semptom kontrolü için oral dapson (G6PD kontrolü sonrası) ve kesin tedavi olarak ömür boyu glutensiz diyet',
        pearl: 'Hastaların çoğunda belirgin gastrointestinal semptom olmasa da ince bağırsak biyopsisinde asemptomatik glutene duyarlı enteropati bulguları mevcuttur.',
        trapFalse: 'biyopside dermoepidermal bileşkede lineer IgG birikimi görülür ve dapsona yanıt vermez',
        trapHighlight: 'lineer IgG birikimi görülür ve dapsona yanıt vermez',
      },
      {
        name: 'Psöriazis vulgaris',
        target: 'Dendritik hücre ve Th17/IL-23/IL-17/TNF-alfa aksının keratinosit proliferasyonunu hızlandırması (parakeratoz ve akantoz)',
        hallmark: 'Ekstansörlerde keskin sınırlı eritematöz plaklar üzeri gümüş-sedefi skuamlar, Auspitz bulgusu, Köbner fenomeni ve Munro mikroabseleri',
        vignette:
          'Otuz dört yaşında erkek hasta dirsek, diz ve saçlı deride kalın sedef rengi pullarla kaplı plaklarla başvuruyor. Pullar kazındığında noktasal kanama odakları ortaya çıkıyor; eski ameliyat izi üzerinde de yeni lezyonların geliştiği görülüyor. Histolojide parakeratoz ve stratum korneumda nötrofil kümeleri izleniyor.',
        clues: ['sedef rengi pullarla kaplı plaklarla', 'kazındığında noktasal kanama odakları', 'eski ameliyat izi üzerinde de yeni lezyonların'],
        management: 'Sınırlı hastalıkta topikal steroid + kalsipotriol; yaygın hastalıkta fototerapi, metotreksat, siklosporin, asitretin veya anti-TNF/IL-17/IL-23 biyolojikler',
        pearl: 'Sistemik kortikosteroidler hızlı iyileşme sağlasa da kesildiğinde hayatı tehdit eden jeneralize püstüler alevlenmeye (von Zumbusch) yol açtığı için rutin kullanılmaz; lityum ve beta-blokerler lezyonları alevlendirir.',
        trapFalse: 'lezyonlar ağırlıklı olarak fleksural yüzleri tutar ve oral prednizon uzun süreli ilk tercih tedavidir',
        trapHighlight: 'oral prednizon uzun süreli ilk tercih tedavidir',
      },
      {
        name: 'Liken planus',
        target: 'Bazal keratinositlere saldıran CD8+ sitotoksik T lenfositlerin dermoepidermal bileşkede arayüz dermatiti oluşturması',
        hallmark: '6 P kuralı (mor, düz tepeli, poligonal, kaşıntılı papül ve plaklar), beyaz Wickham çizgilenmeleri, oral dantelsi beyaz lezyonlar ve Civatte cisimcikleri',
        vignette:
          'Kırk yedi yaşında Hepatit C pozitif kadın hasta el bileği fleksör yüzlerinde aşırı kaşıntılı, morumsu, üstü düz ve çokgen şekilli papüllerle başvuruyor. Lezyon yüzeyinde ince beyaz ağsı çizgiler ve yanak mukozasında dantel gibi beyaz lezyonlar görülüyor. Biyopside testere dişi rete çıkıntıları ve apoptotik bazal cisimcikler saptanıyor.',
        clues: ['el bileği fleksör yüzlerinde', 'morumsu, üstü düz ve çokgen şekilli papüller', 'yanak mukozasında dantel gibi beyaz lezyonlar'],
        management: 'Potent topikal kortikosteroidler; yaygın/eroziv oral olgularda kısa süreli sistemik steroid veya fototerapi ve HCV taraması',
        pearl: 'Wickham striaları ve fleksural el bileği/ayak bileği tutulumu çok karakteristiktir; kronik eroziv oral lezyonlarda skuamöz hücreli karsinom gelişme riski vardır.',
        trapFalse: 'ekstansör yüzlerde gümüşi skuamlı plaklar yapar ve histolojisinde akantoliz görülür',
        trapHighlight: 'gümüşi skuamlı plaklar yapar ve histolojisinde akantoliz',
      },
    ],
  },

  // 23. Psikiyatrik aciller ve sendromlar
  {
    branchId: 'dahiliye',
    subTopic: 'Psikiyatrik Aciller ve İlaç Toksisite Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Nöroleptik malign sendrom',
        target: 'D2 dopamin reseptör blokajı yapan antipsikotikler (veya metoklopramid) sonrası santral termoregülasyon bozukluğu ve sarkoplazmik kalsiyum artışı',
        hallmark: 'Günler içinde gelişen yüksek ateş (> 40°C), "kurşun boru" rijiditesi, otonomik instabilite, bilinç değişikliği ve çok yüksek CK/lökositoz',
        vignette:
          'Otuz bir yaşında şizofreni atağı nedeniyle yüksek doz haloperidol başlanan erkek hastada 4 gün içinde 40.4°C ateş, terleme, dalgalanan kan basıncı, konfüzyon ve ekstremitelerde tüm hareket boyunca süren katı kurşun boru sertliği gelişiyor. Serum CK 16.000 U/L ve lökosit 21.000/mm3 saptanıyor.',
        clues: ['yüksek doz haloperidol başlanan', 'katı kurşun boru sertliği', 'Serum CK 16.000 U/L'],
        management: 'Antipsikotik ilacın derhal kesilmesi, agresif soğutma/IV hidrasyon ve dopamin agonisti bromokriptin + kas gevşetici dantrolen',
        pearl: 'Serotonin toksisitesinden yavaş (günler içinde) başlangıcı, kurşun boru rijiditesi ve hiporefleksi ile ayrılır (klonus ve hiperrefleksi burada beklenmez).',
        trapFalse: 'alt ekstremitelerde belirgin hiperrefleksi ve spontan ayak klonusu ile birlikte saatler içinde gelişir',
        trapHighlight: 'belirgin hiperrefleksi ve spontan ayak klonusu',
      },
      {
        name: 'Serotonin sendromu',
        target: 'SSRI, SNRI, MAO inhibitörü, linezolid, tramadol veya meperidin kombinasyonlarına bağlı santral 5-HT1A/5-HT2A aşırı uyarımı',
        hallmark: 'Saatler içinde başlayan ateş, otonomik hiperaktivite, ajitasyon, diyare ve ALT EKSTREMİTEDE BELİRGİN HİPERREFLEKSİ / İNDÜKLENEBİLİR KLONUS',
        vignette:
          'Yirmi sekiz yaşında fluoksetin kullanan hasta enfeksiyon için linezolid aldıktan 8 saat sonra ajitasyon, 39.2°C ateş, terleme, midriyazis, aktif bağırsak sesleri, ishal ve muayenede özellikle bacaklarda aşırı artmış refleksler ve ayak bileğinde spontan klonus ile acile getiriliyor.',
        clues: ['fluoksetin kullanan hasta enfeksiyon için linezolid aldıktan 8 saat sonra', 'aktif bağırsak sesleri, ishal', 'spontan klonus'],
        management: 'Serotonerjik ajanların kesilmesi, destek/soğutma, ajitasyon için benzodiazepin ve orta-ağır olgularda 5-HT2A antagonisti siproheptadin',
        pearl: 'Linezolid zayıf bir MAO inhibitörüdür ve SSRI ile birleşince hızla bu tabloyu tetikler; nöromüsküler hiperaktivite (klonus/hiperrefleksi) ve artmış bağırsak sesleri antipsikotik ve antikolinerjik toksisiteden ayırır.',
        trapFalse: 'bağırsak sesleri tamamen kaybolmuştur, derin tendon refleksleri alınamaz ve tedavide dantrolen ilk tercihtir',
        trapHighlight: 'bağırsak sesleri tamamen kaybolmuştur, derin tendon refleksleri alınamaz',
      },
      {
        name: 'Deliryum tremens',
        target: 'Kronik alkol kesilmesi sonrası GABA-A inhibisyonunun ortadan kalkması ve NMDA glutamat reseptörlerinin aşırı aktivasyonu',
        hallmark: 'Alkol kesilmesinden 48-96 saat sonra ortaya çıkan konfüzyon/dezoryantasyon, görsel-taktil halüsinasyonlar (böcek yürümesi), ağır otonomik taşikardi/ateş/terleme',
        vignette:
          'Ellisekiz yaşında uzun yıllardır günlük ağır alkol tüketen erkek hasta ortopedik operasyon nedeniyle hastaneye yatışının 3. gününde aniden bilinç bulanıklığı, vücudunda böcekler gezdiğini söyleme, yoğun terleme, 138/dk nabız, 190/110 mmHg tansiyon ve kaba tremor geliştiriyor.',
        clues: ['yatışının 3. gününde', 'vücudunda böcekler gezdiğini söyleme', 'yoğun terleme, 138/dk nabız'],
        management: 'Yüksek doz IV benzodiazepin (diazepam/lorazepam) ile sedasyon, IV tiamin (Wernicke’yi önlemek için glukozdan ÖNCE), sıvı ve elektrolit (Mg/K) replasmanı',
        pearl: 'Alkol yoksunluğunun en ağır ve ölümcül formudur (48-96. saatte pik); Wernicke ensefalopatisini tetiklememek için IV dekstroz verilmeden önce mutlaka IV tiamin (B1) yapılmalıdır.',
        trapFalse: 'alkol kesildikten sonraki ilk 6 saatte başlar ve halüsinasyonlar için haloperidol monoterapisi yeterlidir',
        trapHighlight: 'halüsinasyonlar için haloperidol monoterapisi yeterlidir',
      },
      {
        name: 'Lityum toksisitesi',
        target: 'Böbreklerden sodyum gibi proksimal tübülden geri emilen dar terapötik aralıklı ilacın dehidratasyon, NSAİİ, tiazid veya ACEi ile birikmesi',
        hallmark: 'Kaba tremor, ataksi, dizartri, hiperrefleksi, kusma-ishal, nefrojenik Dİ ve serum düzeyi > 1.5-2.5 mEq/L',
        vignette:
          'Kırk dört yaşında bipolar bozukluk nedeniyle stabil ilaç kullanan kadın hasta diz ağrısı için ibuprofen ve hipertansiyon için hidroklorotiyazid başladıktan 10 gün sonra şiddetli kusma, konuşmada peltekleşme, yürüme bozukluğu, kaba eller titremesi ve miyoklonik sıçramalarla acile getiriliyor. Serum düzeyi 2.8 mEq/L ölçülüyor.',
        clues: ['ibuprofen ve hipertansiyon için hidroklorotiyazid başladıktan', 'konuşmada peltekleşme, yürüme bozukluğu', 'Serum düzeyi 2.8 mEq/L'],
        management: 'İlacın kesilmesi, IV %0.9 NaCl hidrasyonu (sodyum geri emilimini yarışmalı azaltır) ve ağır toksisitede (> 2.5-4.0 mEq/L veya ağır nörolojik bulgu) ACİL HEMODİYALİZ',
        pearl: 'Tiazidler hacim kontraksiyonu yaparak proksimal tübülde sodyumla birlikte ilacın geri emilimini artırıp toksisiteyi tetikler; diyaliz ile kolayca temizlenen küçük bir iyondur.',
        trapFalse: 'yüksek protein bağlanması nedeniyle hemodiyaliz ilacı temizlemede tamamen etkisizdir',
        trapHighlight: 'hemodiyaliz ilacı temizlemede tamamen etkisizdir',
      },
      {
        name: 'Akut distoni',
        target: 'Yüksek potensli tipik antipsikotikler veya metoklopramid sonrası nigrostriatal D2 blokajının görece kolinerjik aşırı aktivite oluşturması',
        hallmark: 'İlaç başlangıcından saatler-günler sonra boyunda (tortikollis), gözlerde (okülojirik kriz) veya çenede ağrılı spazm',
        vignette:
          'Yirmi iki yaşında genç erkek hasta kusma nedeniyle intravenöz metoklopramid yapıldıktan 4 saat sonra gözlerinin aniden yukarı sabitlendiği, boynunun ağrılı biçimde tek tarafa büküldüğü ve dilinin dışarı çıktığı görülerek acilde değerlendiriliyor.',
        clues: ['metoklopramid yapıldıktan 4 saat sonra', 'gözlerinin aniden yukarı sabitlendiği', 'boynunun ağrılı biçimde tek tarafa büküldüğü'],
        management: 'Parenteral antikolinerjik (biperiden veya benztropin) ya da IV/IM difenhidramin ile dakikalar içinde düzelme',
        pearl: 'Akatiziden (öznel huzursuzluk ve yerinde duramama — tedavisi propranolol/benzodiazepin) farklı olarak ağrılı istemsiz kas spazmıdır ve antikolinerjiklere saniyeler-dakikalar içinde dramatik yanıt verir; laringeal distoni havayolunu tıkayabilir.',
        trapFalse: 'tedavisinde propranolol ilk tercihtir ve antikolinerjik ilaçlar tabloyu ağırlaştırır',
        trapHighlight: 'antikolinerjik ilaçlar tabloyu ağırlaştırır',
      },
    ],
  },

  // 24. Onkolojik aciller
  {
    branchId: 'dahiliye',
    subTopic: 'Onkolojik Aciller Yönetimi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Vena kava süperior sendromu',
        target: 'Sağ akciğer tümörü veya mediastinal lenfomanın ince duvarlı süperior kaval vene dıştan bası veya tromboz yapması',
        hallmark: 'Baş-boyun ve kollarda ödem/plethora, boyun ve göğüs ön duvarında kollateral ven dolgunluğu ve öne eğilince artan dispne',
        vignette:
          'Altmış bir yaşında 40 paket-yıl sigara içen erkek hasta yüzünde, göz kapaklarında ve her iki kolunda şişlik, nefes darlığı ve göğüs üst kısmında belirginleşmiş mavi damar ağları ile başvuruyor. Kolları başının üstüne kaldırıldığında yüzünde kızarma ve dolgunluk belirgin artıyor (Pemberton bulgusu).',
        clues: ['yüzünde, göz kapaklarında ve her iki kolunda şişlik', 'göğüs üst kısmında belirginleşmiş mavi damar ağları', 'Pemberton bulgusu'],
        management: 'Hava yolu/beyin ödemi yoksa acil radyoterapi öncesi mutlaka doku biyopsisiyle tanı konması; KHK/lenfomada kemoterapi, NSCLC’de endovasküler stent/RT',
        pearl: 'Hava yolu obstrüksiyonu (stridor) veya serebral ödem gibi acil yaşam tehdidi yoksa histopatolojik tanı (biyopsi) alınmadan radyoterapi/steroid verilmez; en sık neden küçük hücreli akciğer kanseri ve skuamöz akciğer kanseridir.',
        trapFalse: 'etiyoloji ne olursa olsun biyopsi alınmadan önce tüm hastalara derhal acil radyoterapi uygulanmalıdır',
        trapHighlight: 'biyopsi alınmadan önce tüm hastalara derhal acil radyoterapi',
      },
      {
        name: 'Epidural spinal kord basısı',
        target: 'Omurga metastazlarının (akciğer, meme, prostat, miyelom) epidural boşluğa uzanarak omuriliği ve vasküler pleksusu sıkıştırması',
        hallmark: 'Yatmakla (sırt üstü) KÖTÜLEŞEN yeni/ilerleyici sırt ağrısı, bacaklarda güçsüzlük, duyu seviyesi ve geç dönemde idrar retansiyonu',
        vignette:
          'Altmış sekiz yaşında prostat kanserli erkek hasta 2 haftadır gece sırt üstü yatınca şiddetlenen torakal sırt ağrısı, son 12 saatte bacaklarında güçsüzlük, yürüyememe ve göbek hizasının altında uyuşma şikayetiyle getiriliyor. Mesane globu mevcut ve alt ekstremitede Babinski pozitif bulunuyor.',
        clues: ['gece sırt üstü yatınca şiddetlenen torakal sırt ağrısı', 'göbek hizasının altında uyuşma', 'Mesane globu'],
        management: 'Şüphe anında DERHAL IV deksametazon yüklenmesi, acil tüm spinal kolon kontrastlı MR çekilmesi ve radyoterapi/cerrahi dekompresyon',
        pearl: 'Ağrı motor defisitten haftalar önce başlar ve yatınca artmasıyla mekanik bel ağrısından ayrılır; tedavi öncesi nörolojik durum (yürüyebilme) prognozun en güçlü belirleyicisidir, kesin tanı tüm omurga MR’ıdır.',
        trapFalse: 'tanısal tüm omurga MR sonucu çıkana kadar kortikosteroid başlanmamalıdır',
        trapHighlight: 'MR sonucu çıkana kadar kortikosteroid başlanmamalıdır',
      },
      {
        name: 'Febril nötropeni',
        target: 'Kemoterapi sonrası mutlak nötrofil sayısının < 500/mm3 inmesi ve mukozit bariyer hasarıyla endojen gram-negatif/pozitif bakteriyemi gelişimi',
        hallmark: 'Tek ölçüm >= 38.3°C (veya 1 saat >= 38.0°C) ateş ile birlikte mutlak nötrofil sayısı < 500/mm3 (veya < 1000 ve düşme eğiliminde)',
        vignette:
          'Ellidört yaşında lenfoma kemoterapisinden 9 gün sonra acile başvuran hastanın ateşi 38.6°C, nabzı 112/dk, lökosit sayısı 600/mm3 (%15 nötrofil) ölçülüyor. Muayenede oral mukozit dışında belirgin odak veya pürülan akıntı saptanmıyor.',
        clues: ['kemoterapisinden 9 gün sonra', 'ateşi 38.6°C', 'lökosit sayısı 600/mm3 (%15 nötrofil)'],
        management: 'Rektal muayeneden kaçınılması, kan kültürleri sonrası 1 saat içinde ampirik antipsödomonal beta-laktam (sefepim, piperasilin-tazobaktam veya meropenem) başlanması',
        pearl: 'Nötrofil yokluğu nedeniyle abse, piyüri veya belirgin akciğer konsolidasyonu oluşmayabilir; mukozal travma ve bakteriyemi riski yüzünden dijital rektal muayene ve rektal termometre kontrendikedir; vankomisin yalnızca kateter/MRSA/hipotansiyon/mukozit şüphesinde eklenir.',
        trapFalse: 'odak saptanabilmesi için tüm hastalara rutin dijital rektal muayene ve ampirik vankomisin monoterapisi uygulanır',
        trapHighlight: 'rutin dijital rektal muayene ve ampirik vankomisin monoterapisi',
      },
      {
        name: 'Malign hiperkalsemi',
        target: 'Solid tümörlerin PTHrP üretimi veya hematolojik/kemik metastatik tümörlerin lokal osteoliz / 1,25-(OH)2D artışı oluşturması',
        hallmark: 'Kanserli hastada hızlı gelişen dehidratasyon, kabızlık, poliüri, bilinç bulanıklığı, kısa QT ve PTH baskılanması',
        vignette:
          'Altmış üç yaşında baş-boyun skuamöz hücreli karsinomu nedeniyle izlenen erkek hasta son 3 günde artan uykuya meyil, bulantı ve şiddetli kabızlıkla getiriliyor. Düzeltilmiş kalsiyum 15.1 mg/dL, EKG’de QTc 330 ms (kısalmış) ve intakt PTH 6 pg/mL bulunuyor.',
        clues: ['skuamöz hücreli karsinomu', 'Düzeltilmiş kalsiyum 15.1 mg/dL', 'QTc 330 ms (kısalmış)'],
        management: 'Acil bol IV %0.9 NaCl hidrasyonu, ilk 48 saatte hızlı etki için subkütan/IM kalsitonin ve kalıcı etki için IV zoledronik asit (böbrek yetmezliğinde denosumab)',
        pearl: 'EKG’de QT aralığını kısaltır; kalsitonin etkisi hızlı başlar ancak 48-72 saat içinde taşifilaksi gelişir, bifosfonatların maksimum etkisi ise 2-4 günde ortaya çıktığı için ikisi birlikte başlanır.',
        trapFalse: 'EKG’de QT aralığını belirgin uzatır ve bifosfonatlar dakikalar içinde kalsiyumu normale indirir',
        trapHighlight: 'QT aralığını belirgin uzatır ve bifosfonatlar dakikalar içinde',
      },
      {
        name: 'Tümör lizis sendromu',
        target: 'Yüksek proliferasyonlu tümörlerde (Burkitt, ALL, AML) kemoterapi sonrası masif hücre yıkımıyla hücre içi K+, fosfat ve pürinlerin kana dökülmesi',
        hallmark: 'Hiperürisemi, hiperkalemi, hiperfosfatemi ve kalsiyum-fosfat çökmesine bağlı sekonder HİPOKALSEMİ + akut böbrek hasarı',
        vignette:
          'Yirmi iki yaşında Burkitt lenfoma nedeniyle kemoterapi başlanan hastada 36 saat sonra idrar çıkışında azalma ve kasılmalar gelişiyor. Laboratuvarda ürik asit 14.2 mg/dL, potasyum 6.4 mEq/L, fosfor 8.1 mg/dL, kalsiyum 6.6 mg/dL ve kreatinin 3.1 mg/dL ölçülüyor.',
        clues: ['Burkitt lenfoma nedeniyle kemoterapi başlanan', 'ürik asit 14.2 mg/dL, potasyum 6.4 mEq/L', 'fosfor 8.1 mg/dL, kalsiyum 6.6 mg/dL'],
        management: 'Korunmada agresif IV hidrasyon + allopürinol; gelişmiş tabloda veya yüksek riskte mevcut ürik asidi allantoine yıkan rasburikaz (G6PD kontrolü!) ve gerekirse diyaliz',
        pearl: 'Allopürinol ksantin oksidazı inhibe ederek YENİ ürik asit oluşumunu engeller ancak birikmiş ürik asidi eritemez; rasburikaz ise mevcut ürik asidi suda çözünür allantoine çevirir (G6PD eksikliğinde hemoliz yapar!).',
        trapFalse: 'hücre yıkımıyla hiperkalsemi ve hipofosfatemi gelişir, allopürinol mevcut ürik asit kristallerini eritir',
        trapHighlight: 'hiperkalsemi ve hipofosfatemi gelişir, allopürinol mevcut ürik asit kristallerini eritir',
      },
    ],
  },

  // 25. Transfüzyon reaksiyonları
  {
    branchId: 'dahiliye',
    subTopic: 'Kan Transfüzyonu Reaksiyonları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akut hemolitik transfüzyon reaksiyonu',
        target: 'Genellikle ABO uyumsuz eritrositlere karşı alıcıdaki doğal IgM izohemaglütininlerin klasik kompleman yolağını aktive ederek intravasküler hemoliz yapması',
        hallmark: 'Transfüzyonun ilk dakikalarında ateş, şiddetli bel-yan ağrısı, hipotansiyon, hemoglobinüri, DİK ve pozitif direkt Coombs',
        vignette:
          'Kırk beş yaşında hastaya eritrosit süspansiyonu takıldıktan 10 dakika sonra şiddetli üşüme-titreme, bel ağrısı, göğüste sıkışma, 75/40 mmHg hipotansiyon ve idrar sondasında koyu kırmızı idrar gelişiyor. Hasta başı etiket kontrolünde yanlış hastanın kanının takıldığı anlaşılıyor; direkt Coombs pozitif ve serum pembe bulunuyor.',
        clues: ['10 dakika sonra şiddetli üşüme-titreme, bel ağrısı', 'idrar sondasında koyu kırmızı idrar', 'yanlış hastanın kanının takıldığı'],
        management: 'Transfüzyonun DERHAL durdurulması, damar yolunun ayrı setten %0.9 NaCl ile açık tutulması, agresif hidrasyonla idrar çıkışının korunması ve kan bankasına numune gönderilmesi',
        pearl: 'En sık nedeni hastane içi kayıt/etiketleme (insan) hatasına bağlı ABO uyumsuzluğudur; anestezi altındaki hastada ilk bulgu cerrahi alandan yaygın sızıntı kanama (DİK) ve hemoglobinüri olabilir.',
        trapFalse: 'transfüzyon hızı yarıya düşürülerek antihistaminik eşliğinde tamamlanabilir',
        trapHighlight: 'transfüzyon hızı yarıya düşürülerek antihistaminik eşliğinde tamamlanabilir',
      },
      {
        name: 'Febril non-hemolitik transfüzyon reaksiyonu',
        target: 'Depolanmış kan ürününde verici lökositlerinden salınan sitokinler (IL-1, IL-6, TNF) veya alıcının verici HLA antijenlerine karşı antikorları',
        hallmark: 'Hemoliz ve hipotansiyon OLMADAN transfüzyon sırasında veya sonrasında vücut ısısının >= 1°C artması ve titreme',
        vignette:
          'Ellisekiz yaşında çoklu transfüzyon öykülü hastada eritrosit süspansiyonunun bitimine yakın ateş 36.8°C’den 38.3°C’ye yükseliyor ve hafif titreme oluyor. Kan basıncı stabil, bel ağrısı yok, plazma berrak, idrar normal ve direkt Coombs negatif bulunuyor.',
        clues: ['36.8°C’den 38.3°C’ye yükseliyor', 'Kan basıncı stabil, bel ağrısı yok', 'direkt Coombs negatif'],
        management: 'Hemoliz ve bakteriyel kontaminasyonu dışlamak için transfüzyonu durdurma, antipiretik (parasetamol) ve sonraki transfüzyonlarda LÖKOSİTTEN ARINDIRILMIŞ (filtreli) ürün kullanımı',
        pearl: 'En sık görülen transfüzyon reaksiyonudur; lökoredüksiyon (lökosit filtresi) sıklığını dramatik biçimde azaltır, aynı torbadan tekrar transfüzyona devam edilmez.',
        trapFalse: 'en sık neden ABO uyumsuzluğudur ve sonraki transfüzyonlarda yıkanmış yerine tam kan tercih edilmelidir',
        trapHighlight: 'en sık neden ABO uyumsuzluğudur',
      },
      {
        name: 'Transfüzyon ilişkili akut akciğer hasarı',
        target: 'Donör plazmasındaki anti-HLA / anti-HNA antikorlarının alıcı nötrofillerini akciğer kapillerlerinde aktive ederek non-kardiyojenik ödem yapması',
        hallmark: 'Transfüzyon sırası veya ilk 6 saat içinde akut hipoksemi, bilateral pulmoner infiltratlar, NORMAL CVP/BNP (kalp dışı) ve ateş/hipotansiyon',
        vignette:
          'Otuz altı yaşında taze donmuş plazma transfüzyonundan 2 saat sonra ani şiddetli nefes darlığı, SpO2 %78, ateş ve hipotansiyon gelişiyor. Akciğer grafisinde bilateral yaygın alveoler ödem görülüyor ancak ekokardiyografide sol ventrikül fonksiyonları tamamen normal, BNP düşük ve juguler venöz dolgunluk yok.',
        clues: ['taze donmuş plazma transfüzyonundan 2 saat sonra', 'bilateral yaygın alveoler ödem', 'BNP düşük ve juguler venöz dolgunluk yok'],
        management: 'Transfüzyonu durdurma, oksijen/mekanik ventilasyon (ARDS stratejisi) ve hemodinamik destek (diüretik rutin verilmez çünkü hasta hipervolemik değildir!)',
        pearl: 'Transfüzyona bağlı ölümlerin en önemli nedenlerindendir; çok doğum yapmış kadın donörlerin plazması yüksek anti-HLA içerdiğinden daha sık yol açar. TACO’dan farkı hipertansiyon/BNP yüksekliği olmaması ve diüretik yerine destek gerektirmesidir.',
        trapFalse: 'temel mekanizma aşırı sıvı yüklenmesidir ve tedavide ilk adım yüksek doz IV furosemiddir',
        trapHighlight: 'aşırı sıvı yüklenmesidir ve tedavide ilk adım yüksek doz IV furosemiddir',
      },
      {
        name: 'Transfüzyon ilişkili dolaşım yüklenmesi',
        target: 'Özellikle yaşlı, kalp veya böbrek yetmezlikli hastaya hızlı ve yüksek hacimli kan ürünü verilmesine bağlı hidrostatik pulmoner ödem',
        hallmark: 'Transfüzyon sonrası ilk 6-12 saatte dispne, ortopne, HİPERTANSİYON, juguler venöz distansiyon, S3 gallop ve çok yüksek BNP',
        vignette:
          'Yetmiş dokuz yaşında kalp yetmezliği ve kronik böbrek hastalığı bulunan kadına 3 saat içinde 3 ünite eritrosit süspansiyonu verildikten hemen sonra nefes darlığı, pembe balgam, boyun venöz dolgunluğu, bazallerde yaş raller ve kan basıncı 185/100 mmHg ölçülüyor. NT-proBNP düzeyi çok yüksek bulunuyor.',
        clues: ['3 saat içinde 3 ünite eritrosit', 'boyun venöz dolgunluğu', 'NT-proBNP düzeyi çok yüksek'],
        management: 'Transfüzyonu durdurup hastayı dik oturtma, oksijen ve hızlı etki için IV diüretik (furosemid); korunmada yavaş infüzyon',
        pearl: 'TRALI’den farklı olarak hidrostatik basınç artışı söz konusudur; bu nedenle hipertansiyon, boyun venöz dolgunluğu ve BNP yüksekliği beklenir ve furosemide hızla yanıt verir.',
        trapFalse: 'hipotansiyon ve düşük BNP ile seyreder, diüretik verilmesi kontrendikedir',
        trapHighlight: 'hipotansiyon ve düşük BNP ile seyreder, diüretik verilmesi kontrendikedir',
      },
      {
        name: 'Anafilaktik transfüzyon reaksiyonu',
        target: 'Konjenital selektif IgA eksikliği olan alıcıdaki anti-IgA antikorlarının transfüze edilen kandaki IgA ile Tip I reaksiyona girmesi',
        hallmark: 'İlk birkaç mililitrede ateş OLMADAN ani bronkospazm, anjiyoödem, ürtiker ve derin hipotansiyon',
        vignette:
          'Yirmi sekiz yaşında tekrarlayan sinopulmoner enfeksiyon öyküsü olan erkek hastaya taze donmuş plazma başlandıktan sadece 2 dakika (yaklaşık 10 mL) sonra yaygın kaşıntı, dudaklarda şişme, stridor ve 60/30 mmHg şok gelişiyor. Ateş ölçülmüyor; hastanın serum IgA düzeyi < 5 mg/dL bulunuyor.',
        clues: ['2 dakika (yaklaşık 10 mL) sonra', 'stridor ve 60/30 mmHg şok', 'serum IgA düzeyi < 5 mg/dL'],
        management: 'Transfüzyonu hemen durdurma, acil IM epinefrin ve sonraki tüm transfüzyonlarda YIKANMIŞ eritrosit süspansiyonu veya IgA eksik donör ürünü kullanımı',
        pearl: 'Eritrosit süspansiyonları 6 kez serum fizyolojikle yıkanarak plazmadaki IgA uzaklaştırılabilir veya doğrudan IgA eksik vericiden kan alınır.',
        trapFalse: 'ateş yüksekliği ön plandadır ve sonraki transfüzyonlarda sadece lökosit filtresi kullanılması yeterlidir',
        trapHighlight: 'sadece lökosit filtresi kullanılması yeterlidir',
      },
    ],
  },

  // 26. Koagülasyon faktör eksiklikleri
  {
    branchId: 'dahiliye',
    subTopic: 'Koagülasyon Faktör Eksiklikleri ve DİK',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Hemofili A',
        target: 'X’e bağlı resesif kalıtılan F8 gen mutasyonuna bağlı intrinsik koagülasyon yolu Faktör VIII eksikliği',
        hallmark: 'Erkeklerde derin hemartroz/kas içi hematom, izole UZAMIŞ aPTT (normal PT ve kanama zamanı) ve karışım testinde düzelme',
        vignette:
          'On dört yaşında erkek çocuk diz ekleminde travmasız gelişen ağrılı şişlik ve daha önce sünnet sonrası durmayan kanama öyküsüyle getiriliyor. Trombosit 290.000/mm3, kanama zamanı normal, PT 11.5 sn, aPTT 76 sn bulunuyor. Hastanın plazması 1:1 normal plazmayla karıştırılınca aPTT normale dönüyor.',
        clues: ['diz ekleminde travmasız gelişen ağrılı şişlik', 'PT 11.5 sn, aPTT 76 sn', '1:1 normal plazmayla karıştırılınca aPTT normale dönüyor'],
        management: 'Rekombinant Faktör VIII konsantresi (veya hafif formda DDAVP) ve bispesifik antikor emicizumab profilaksisi',
        pearl: 'Karışım testinin aPTT’yi düzeltmesi faktör eksikliğini, düzeltmemesi ise inhibitör (otoantikor) varlığını gösterir; hafif olgularda DDAVP endotelden vWF ile birlikte FVIII’i salgılatabilir.',
        trapFalse: 'otozomal dominant kalıtılır, protrombin zamanı belirgin uzamıştır ve mukozal peteşiler ön plandadır',
        trapHighlight: 'protrombin zamanı belirgin uzamıştır ve mukozal peteşiler ön plandadır',
      },
      {
        name: 'Hemofili B',
        target: 'X’e bağlı resesif kalıtılan F9 gen mutasyonuna bağlı intrinsik yolak Faktör IX (Christmas faktörü) eksikliği',
        hallmark: 'Klinik ve rutin laboratuvarda (uzamış izole aPTT, normal PT/kanama zamanı, hemartroz) FVIII eksikliğiyle birebir aynı olup DDAVP’ye yanıtsız olması',
        vignette:
          'On sekiz yaşında erkek hasta iliopsoas kası içine hematom ve diz hemartrozu ile başvuruyor. Dayısında da benzer kanama öyküsü mevcut. PT 12 sn, aPTT 72 sn, trombosit normal ölçülüyor. Faktör VIII aktivitesi %95 ile tamamen normal bulunurken Faktör IX düzeyi %2 saptanıyor.',
        clues: ['iliopsoas kası içine hematom', 'Faktör VIII aktivitesi %95', 'Faktör IX düzeyi %2'],
        management: 'Rekombinant Faktör IX konsantresi replasmanı (kriyopresipitat bu faktörü İÇERMEDİĞİ için etkisizdir)',
        pearl: 'Kriyopresipitat yalnızca fibrinojen, vWF, Faktör VIII ve Faktör XIII içerir; bu nedenle Faktör IX eksikliğinde kriyopresipitat ve DDAVP tamamen etkisizdir.',
        trapFalse: 'tedavide kriyopresipitat ve desmopressin (DDAVP) yüksek düzeyde etkilidir',
        trapHighlight: 'kriyopresipitat ve desmopressin (DDAVP) yüksek düzeyde etkilidir',
      },
      {
        name: 'Faktör XI eksikliği',
        target: 'Otozomal resesif kalıtılan plazma tromboplastin antesedanı (Faktör XI) eksikliği',
        hallmark: 'Her iki cinsiyette de görülen (Ashkenazi Yahudilerinde sık), faktör düzeyiyle orantısız hafif-orta mukoza/cerrahi kanaması ve izole uzamış aPTT',
        vignette:
          'Otuz iki yaşında kadın hasta diş çekimi ve tonsillektomi sonrası uzamış kanama şikayetiyle inceleniyor. Kendiliğinden hemartroz öyküsü yok. PT normal, aPTT 58 sn, trombosit ve vWF tamamen normal; karışım testi aPTT’yi düzeltiyor ve FVIII ile FIX düzeyleri normal ölçülüyor.',
        clues: ['kadın hasta diş çekimi ve tonsillektomi sonrası', 'Kendiliğinden hemartroz öyküsü yok', 'FVIII ile FIX düzeyleri normal'],
        management: 'Minör cerrahide antifibrinolitikler (traneksamik asit) ve majör kanamada taze donmuş plazma veya FXI konsantresi',
        pearl: 'Eski adıyla Hemofili C; X’e bağlı değil otozomal kalıtıldığı için kadınlarda da görülür ve faktör düzeyiyle kanama şiddeti her zaman korele değildir.',
        trapFalse: 'X’e bağlı kalıtılır ve çocukluktan itibaren ağır spontan eklem içi kanamalara yol açar',
        trapHighlight: 'ağır spontan eklem içi kanamalara yol açar',
      },
      {
        name: 'K vitamini eksikliği',
        target: 'Yetersiz alım, yağ malabsorpsiyonu, geniş antibiyotik veya varfarin nedeniyle Faktör II, VII, IX, X ve Protein C/S’nin gama-karboksilasyonunun bozulması',
        hallmark: 'Erken dönemde belirgin uzamış PT/INR (en kısa yarı ömürlü FVII nedeniyle), ilerledikçe uzamış aPTT ve NORMAL trombosit/fibrinojen/D-dimer',
        vignette:
          'Altmış beş yaşında kronik pankreatitli ve haftalardır geniş spektrumlu antibiyotik alan hastada diş eti kanaması gelişiyor. Trombosit 230.000/mm3, fibrinojen 320 mg/dL, D-dimer normal iken PT 29 sn (INR 2.9) ve aPTT 49 sn ölçülüyor.',
        clues: ['kronik pankreatitli ve haftalardır geniş spektrumlu antibiyotik', 'fibrinojen 320 mg/dL, D-dimer normal', 'PT 29 sn (INR 2.9)'],
        management: 'Parenteral/oral fitonadion (K1 vitamini) ve acil hayatı tehdit eden kanamada 4 faktörlü protrombin kompleks konsantresi (PCC) veya TDP',
        pearl: 'Faktör VII’nin yarı ömrü yalnızca 4-6 saat olduğu için ilk olarak PT/INR uzar; fibrinojen ve Faktör VIII ile V normal kaldığı için DİK’ten ayrılır.',
        trapFalse: 'serum fibrinojen ve Faktör V düzeyleri çok düşüktür ve D-dimer belirgin artmıştır',
        trapHighlight: 'fibrinojen ve Faktör V düzeyleri çok düşüktür ve D-dimer belirgin artmıştır',
      },
      {
        name: 'Dissemine intravasküler koagülasyon',
        target: 'Sepsis, travma, obstetrik acil veya adenokarsinomlarda sistemik doku faktörü salınımıyla yaygın mikrotromboz ve pıhtılaşma faktörleri/trombositlerin tüketilmesi',
        hallmark: 'Trombositopeni + uzamış PT + uzamış aPTT + DÜŞÜK FİBRİNOJEN + ÇOK YÜKSEK D-DİMER + şistositler',
        vignette:
          'Otuz dört yaşında plasenta dekolmanı sonrası yoğun vajinal kanama ve damar yollarından durmayan sızıntı gelişen hastada trombosit 38.000/mm3, PT 24 sn, aPTT 62 sn, fibrinojen 60 mg/dL ve D-dimer 12.000 ng/mL ölçülüyor. Periferik yaymada şistositler izleniyor.',
        clues: ['plasenta dekolmanı', 'trombosit 38.000/mm3, PT 24 sn, aPTT 62 sn', 'fibrinojen 60 mg/dL ve D-dimer 12.000 ng/mL'],
        management: 'Temel tedavi altta yatan nedenin (sepsis, abrupsiyo, APL) acil kontrolü ve kanayan hastada TDP, kriyopresipitat (fibrinojen < 100-150) ve trombosit replasmanı',
        pearl: 'Karaciğer sirozunda faktör sentezi azalsa da Faktör VIII (endotelden sentezlenir!) normal/yüksek kalırken burada tüm faktörler (FVIII ve FV dahil) tüketildiği için düşer.',
        trapFalse: 'Faktör VIII düzeyi karaciğer dışı sentezlendiği için daima yüksek kalır ve D-dimer normaldir',
        trapHighlight: 'daima yüksek kalır ve D-dimer normaldir',
      },
    ],
  },

  // 27. Serum-asit albümin gradienti (SAAG) ayırıcı tanısı
  {
    branchId: 'dahiliye',
    subTopic: 'Serum-Asit Albümin Gradienti (SAAG) Ayırıcı Tanısı',
    difficulty: 'İleri Ayırıcı Tanı',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Sirotik portal hipertansiyon asiti',
        target: 'Sinüzoidal portal basınç artışı ve splanknik vazodilatasyona bağlı sodyum-su retansiyonu ile düşük proteinli sıvı sızması',
        hallmark: 'SAAG >= 1.1 g/dL (yüksek gradient) VE asit total proteini < 2.5 g/dL (kapillerize sinüzoidlerden protein geçişi kısıtlı)',
        vignette:
          'Ellisekiz yaşında alkol öykülü erkek hasta karın şişliğiyle başvuruyor. Serum albümini 2.7 g/dL, asit albümini 0.8 g/dL (SAAG = 1.9 g/dL) ve asit total proteini 1.4 g/dL ölçülüyor; asit PMNL 45/mm3 bulunuyor.',
        clues: ['SAAG = 1.9 g/dL', 'asit total proteini 1.4 g/dL', 'asit PMNL 45/mm3'],
        management: 'Tuz kısıtlaması (2 g/gün), spironolakton + furosemid (100:40 mg oranında) ve dirençli olgularda seri büyük hacimli parasentez + albümin veya TIPS',
        pearl: 'Sirozda sinüzoidler fibrozisle kapillerize olduğu için protein geçişine izin vermez (asit proteini < 2.5 g/dL); asit proteini < 1.5 g/dL ise SBP riski artar.',
        trapFalse: 'asit total proteini genellikle 3.5 g/dL üzerinde olup SAAG 1.1 g/dL altındadır',
        trapHighlight: 'asit total proteini genellikle 3.5 g/dL üzerinde olup SAAG 1.1 g/dL altındadır',
      },
      {
        name: 'Kalp yetmezliği asiti',
        target: 'Sağ kalp doluş basıncı artışının hepatik sinüzoidlere doğrudan yansımasıyla yüksek basınçlı ancak sağlam fenestralı sinüzoidlerden proteinli sıvı kaçışı',
        hallmark: 'SAAG >= 1.1 g/dL (portal HT) VE asit total proteini >= 2.5 g/dL + yüksek serum NT-proBNP + juguler venöz dolgunluk',
        vignette:
          'Yetmiş yaşında kronik sağ ventrikül yetersizliği ve şiddetli triküspit kaçağı olan erkek hastanın karın şişliği nedeniyle yapılan parasentezinde serum albümini 3.6 g/dL, asit albümini 2.1 g/dL (SAAG = 1.5 g/dL) ve asit total proteini 3.4 g/dL ölçülüyor. Serum NT-proBNP 6800 pg/mL saptanıyor.',
        clues: ['SAAG = 1.5 g/dL', 'asit total proteini 3.4 g/dL', 'NT-proBNP 6800 pg/mL'],
        management: 'Loop diüretikleri ile ön-yük azaltılması ve altta yatan kardiyak fonksiyonların optimizasyonu',
        pearl: 'Klasik yüksek SAAG (>= 1.1) + yüksek protein (>= 2.5 g/dL) kombinasyonudur çünkü hepatik sinüzoidler fibrotik olmadığı için lenf yoluyla yüksek proteinli sıvı peritona sızar.',
        trapFalse: 'portal hipertansiyon yapmadığı için SAAG 1.1 g/dL’nin altındadır ve asit proteini çok düşüktür',
        trapHighlight: 'SAAG 1.1 g/dL’nin altındadır',
      },
      {
        name: 'Budd-Chiari sendromu asiti',
        target: 'Hepatik venlerin veya inferior vena kavanın trombozu/obstrüksiyonuna bağlı post-sinüzoidal portal hipertansiyon',
        hallmark: 'Hızlı gelişen ağrılı hepatomegali, yüksek SAAG (>= 1.1) + yüksek asit proteini (>= 2.5 g/dL) ve ayrı venöz drenajlı kaudat lob hipertrofisi',
        vignette:
          'Otuz iki yaşında polisitemia vera veya oral kontraseptif öykülü kadın hasta ani başlayan sağ üst kadran ağrısı, karaciğer büyümesi ve hızla gelişen asitle başvuruyor. SAAG 1.6 g/dL, asit proteini 3.8 g/dL ölçülüyor. Doppler USG’de hepatik venlerde akım izlenmiyor ve kaudat lob belirgin büyümüş görülüyor.',
        clues: ['sağ üst kadran ağrısı, karaciğer büyümesi', 'SAAG 1.6 g/dL, asit proteini 3.8 g/dL', 'hepatik venlerde akım izlenmiyor ve kaudat lob belirgin büyümüş'],
        management: 'Antikoagülasyon, altta yatan miyeloproliferatif/trombofilik hastalığın (JAK2/PNH) tedavisi ve dekompresyon için TIPS',
        pearl: 'Kaudat lob (segment I) venöz kanını hepatik venler yerine doğrudan vena kava inferiora boşalttığı için kompanzatuvar hipertrofiye uğrar.',
        trapFalse: 'kaudat lob ilk atrofiye uğrayan karaciğer segmentidir ve SAAG 0.7 g/dL altındadır',
        trapHighlight: 'kaudat lob ilk atrofiye uğrayan karaciğer segmentidir',
      },
      {
        name: 'Peritoneal karsinomatozis asiti',
        target: 'Over, mide veya kolon adenokarsinomunun periton yüzeyine ekilmesiyle lokal eksüdasyon ve diyafragmatik lenfatik tıkanma',
        hallmark: 'SAAG < 1.1 g/dL (düşük gradient), asit proteini >= 2.5 g/dL, yüksek LDH ve asit sitolojisinde malign hücreler',
        vignette:
          'Altmış dört yaşında karında şişlik, erken doyma ve 10 kg kilo kaybıyla başvuran kadın hastanın pelvik USG’sinde kompleks adneksiyal kitle saptanıyor. Parasentezde serum albümini 3.3 g/dL, asit albümini 2.7 g/dL (SAAG = 0.6 g/dL), asit proteini 4.2 g/dL bulunuyor ve sitoloji adenokarsinom açısından pozitif geliyor.',
        clues: ['kompleks adneksiyal kitle', 'SAAG = 0.6 g/dL', 'sitoloji adenokarsinom açısından pozitif'],
        management: 'Primer tümörün (over, GİS) cerrahi/kemoterapötik tedavisi ve semptomatik tekrarlayan asitte boşaltıcı parasentez veya kalıcı kateter',
        pearl: 'Portal hipertansiyon olmadığı için diüretiklere (spironolakton/furosemid) yanıt vermez; tek bir yüksek hacimli parasentezde dahi yüksek sitoloji duyarlılığı (> %90) gösterir.',
        trapFalse: 'spironolakton ve furosemid kombinasyonuna hızla yanıt verir ve SAAG >= 1.5 g/dL ölçülür',
        trapHighlight: 'spironolakton ve furosemid kombinasyonuna hızla yanıt verir',
      },
      {
        name: 'Tüberküloz peritoniti asiti',
        target: 'Latent odakların reaktivasyonu veya salpenjitten yayılan basillerin peritonda yaygın granülomatöz eksüda oluşturması',
        hallmark: 'SAAG < 1.1 g/dL, yüksek asit proteini (>= 2.5 g/dL), lenfosit hakimiyeti, yüksek ADA (> 30-40 U/L) ve laparoskopide beyaz tüberküller',
        vignette:
          'Otuz altı yaşında 2 aydır süren ateş, gece terlemesi, karın ağrısı ve karın şişliği ile başvuran hastada SAAG 0.5 g/dL, asit total proteini 4.8 g/dL, hücrelerin %88’i lenfosit ve asit ADA düzeyi 62 U/L ölçülüyor. Batın BT’de omental kekleşme ve peritoneal kalınlaşma görülüyor.',
        clues: ['2 aydır süren ateş, gece terlemesi', 'SAAG 0.5 g/dL', 'hücrelerin %88’i lenfosit ve asit ADA düzeyi 62 U/L'],
        management: 'Tanısal laparoskopide peritoneal biyopsi ile kazeifiye granülom/kültür doğrulaması ve standart 4’lü antitüberküloz tedavi',
        pearl: 'Klinik ve BT’de omental kekleşme ve yüksek CA-125 nedeniyle over kanseri peritonitis karsinomatozasını çok taklit eder; asit ADA yüksekliği ve laparoskopik biyopsi kesin ayrımı sağlar.',
        trapFalse: 'asit sıvısında nötrofil hakimiyeti vardır ve standart ARB yayması vakaların %90’ında pozitiftir',
        trapHighlight: 'ARB yayması vakaların %90’ında pozitiftir',
      },
    ],
  },

  // 28. GİS kanama ve peptik ülser yönetimi
  {
    branchId: 'dahiliye',
    subTopic: 'GİS Kanama ve Peptik Ülser Yönetimi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Duodenal ülser kanaması',
        target: 'H. pylori veya NSAİİ zemininde bulbus arka duvarındaki ülserin gastroduodenal arteri erode etmesi',
        hallmark: 'Yemekten 2-3 saat sonra ve gece uyandıran epigastrik ağrı (yemekle hafifler), melena/hematemez ve gastroduodenal arter kanaması',
        vignette:
          'Kırk beş yaşında kronik NSAİİ kullanan erkek hasta gece uykudan uyandıran, yemek yiyince hafifleyen epigastrik yanma öyküsünün ardından katran gibi siyah dışkılama ve baş dönmesiyle başvuruyor. Endoskopide bulbus arka duvarında üzerinde pıhtı ve görünen damar bulunan 1.2 cm ülser saptanıyor.',
        clues: ['gece uykudan uyandıran, yemek yiyince hafifleyen', 'katran gibi siyah dışkılama', 'bulbus arka duvarında üzerinde pıhtı'],
        management: 'IV PPİ başlanması ve Forrest Ia-IIb ülserde çift endoskopik hemostaz (epinefrin enjeksiyonu + termal koagülasyon/klips) + H. pylori eradikasyonu',
        pearl: 'Ön duvar ülserleri perfore olma eğilimindeyken, arka duvar ülserleri hemen arkasından geçen gastroduodenal arteri erode ederek masif kanamaya yol açar; malignite riski çok düşük olduğu için rutin ülser biyopsisi gerekmez.',
        trapFalse: 'malignite riski yüksek olduğundan tüm olgularda ülser kenarından çoklu biyopsi alınması zorunludur',
        trapHighlight: 'ülser kenarından çoklu biyopsi alınması zorunludur',
      },
      {
        name: 'Gastrik ülser kanaması',
        target: 'Mukozal savunma bozulmasına bağlı küçük kurvatur ülserinin sol gastrik arteri erode etmesi',
        hallmark: 'Yemekle hemen şiddetlenen epigastrik ağrı, kilo kaybı ve iyileşme sonrası tekrar endoskopi + biyopsi gerekliliği',
        vignette:
          'Altmış iki yaşında erkek hasta yemek yedikten hemen sonra artan karın ağrısı ve kahve telvesi şeklinde kusmayla acile başvuruyor. Endoskopide midenin küçük kurvaturunda kenarları düzensiz 2 cm ülser ve tabanında sızan kanama görülüyor.',
        clues: ['yemek yedikten hemen sonra artan', 'kahve telvesi şeklinde kusmayla', 'küçük kurvaturunda kenarları düzensiz 2 cm ülser'],
        management: 'Endoskopik hemostaz + IV PPİ, kanama kontrolü sonrası tüm olgulardan maligniteyi dışlamak için ülser biyopsisi ve 8-12 hafta sonra kontrol endoskopisi',
        pearl: 'Gastrik adenokarsinom ülsere lezyon şeklinde prezentasyon gösterebildiği için iyileşmenin tamamlandığını doğrulamak adına biyopsi ve kontrol endoskopisi şarttır.',
        trapFalse: 'ağrı yemek yemekle tamamen geçer ve kesinlikle malignite riski taşımadığı için kontrol endoskopisi gerekmez',
        trapHighlight: 'kontrol endoskopisi gerekmez',
      },
      {
        name: 'Dieulafoy lezyonu',
        target: 'Submukozadaki normal çapından büyük aberran arterin üzerinde ülser olmaksızın normal mukozayı erode ederek lümene açılması',
        hallmark: 'Çevre mukozanın tamamen normal olduğu sıklıkla proksimal midede küçük defektten masif, aralıklı, ağrısız hematemez',
        vignette:
          'Altmış yedi yaşında erkek hasta hiçbir karın ağrısı veya NSAİİ öyküsü olmadan ani masif parlak kırmızı hematemez ve senkopla getiriliyor. Endoskopide gastroözofageal bileşkenin 4 cm distalinde, etrafı tamamen normal mukoza ortasındaki iğne başı defektten pulsatil fışkırır tarzda arteriyel kanama görülüyor.',
        clues: ['hiçbir karın ağrısı veya NSAİİ öyküsü olmadan', 'gastroözofageal bileşkenin 4 cm distalinde', 'normal mukoza ortasındaki iğne başı defektten pulsatil'],
        management: 'Endoskopik hemoklips, bant ligasyonu veya termal koagülasyon + lezyon yerinin dövme (tatuaj) ile işaretlenmesi',
        pearl: 'Ülser tabanı veya kitle bulunmadığı için aktif kanamıyorken endoskopide kolayca gözden kaçabilir; en sık proksimal midede (küçük kurvatur) görülür.',
        trapFalse: 'kronik gastrit zemininde gelişen geniş derin peptik ülser tabanından kaynaklanan venöz sızıntıdır',
        trapHighlight: 'geniş derin peptik ülser tabanından kaynaklanan venöz sızıntıdır',
      },
      {
        name: 'Angiodisplazi kanaması',
        target: 'Submukozadaki dejenere, ektazik ince duvarlı venüllerin yüksek duvar gerilimine bağlı kanaması',
        hallmark: 'Yaşlı hastada ağrısız alt GİS kanaması veya demir eksikliği, en sık çekum/sağ kolonda yerleşim ve aort darlığı (Heyde sendromu) birlikteliği',
        vignette:
          'Yetmiş altı yaşında ciddi aort darlığı ve kronik böbrek hastalığı bulunan erkek hasta tekrarlayan ağrısız vişne çürüğü renginde rektal kanama ve anemiyle başvuruyor. Kolonoskopide çekum mukozasında parlak kırmızı örümcek ağı şeklinde 6 mm’lik vasküler odak görülüyor.',
        clues: ['ciddi aort darlığı ve kronik böbrek hastalığı', 'çekum mukozasında', 'parlak kırmızı örümcek ağı şeklinde'],
        management: 'Endoskopik argon plazma koagülasyon (APC); Heyde sendromunda aort kapak replasmanı büyük vWF multimerlerini düzelterek kanamayı durdurur',
        pearl: '60 yaş üstünde alt GİS kanamasının en sık nedenlerinden biridir (divertikülozisle birlikte); Heyde sendromunda ciddi aort darlığı kaynaklı shear stress büyük vWF multimerlerini parçalayarak kanamayı tetikler.',
        trapFalse: 'en sık rektum ve sol kolonda yerleşir, şiddetli kolik karın ağrısıyla birlikte görülür',
        trapHighlight: 'rektum ve sol kolonda yerleşir, şiddetli kolik karın ağrısıyla',
      },
      {
        name: 'Aortoenterik fistül',
        target: 'Abdominal aort greft enfeksiyonu veya anevrizmasının genellikle duodenum 3. kısmına erode olarak direkt arteriyel bağlantı oluşturması',
        hallmark: 'Aort greft cerrahisi öyküsü + kendini sınırlayan hafif "öncü (herald)" kanama sonrası saatler-günler içinde masif katastrofik hematemez/şok',
        vignette:
          'Yetmiş iki yaşında 4 yıl önce abdominal aort anevrizması için sentetik greft operasyonu geçirmiş erkek hasta birkaç saat önce az miktarda kan kusup ardından acilde ani masif hematemez ve derin şok geliştiriyor. Çekilen BT anjiyografide greft ile duodenum üçüncü parçası arasında hava kabarcıkları ve kontrast kaçağı izleniyor.',
        clues: ['abdominal aort anevrizması için sentetik greft', 'az miktarda kan kusup ardından acilde ani masif hematemez', 'duodenum üçüncü parçası arasında hava kabarcıkları'],
        management: 'Endoskopide 3. kısma bakılması ancak yüksek şüphede vakit kaybetmeden BT anjiyografi ve acil cerrahi/endovasküler onarım',
        pearl: 'İlk hafif öncü kanama ("herald bleed") tanı için altın pencere dönemidir; atlanırsa ardından gelen ekssanguinan kanama hızla ölümcüldür, en sık duodenum 3. parçasına açılır.',
        trapFalse: 'ilk hafif kanama genellikle masif kanama riskini ortadan kaldırır ve PPİ ile konservatif izlenir',
        trapHighlight: 'masif kanama riskini ortadan kaldırır ve PPİ ile konservatif izlenir',
      },
    ],
  },
];
