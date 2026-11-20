import { StructuredClusterSeed } from './tusTypes';

export const STRUCTURED_PEDIATRICS_1_CLUSTERS: StructuredClusterSeed[] = [
  // 1. Yenidoğan Solunum Sıkıntısı
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Solunum Sıkıntısı',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2024',
    entities: [
      {
        name: 'Respiratuvar distres sendromu',
        target: 'Tip II pnömosit immatüritesine bağlı pulmoner surfaktan eksikliği ve alveolar kollaps',
        hallmark: 'Akciğer grafisinde diffüz retikülogranüler buzlu cam görünümü, hava bronkogramları ve düşük akciğer hacmi',
        vignette:
          '29 gebelik haftasında acil sezaryenle doğan 1180 gram erkek bebekte doğumdan sonraki ilk saat içinde takipne, burun kanadı solunumu, interkostal çekilmeler, ekspiratuvar inleme ve siyanoz gelişiyor. Akciğer grafisinde akciğer hacimlerinin azaldığı, yaygın ince retikülogranüler opasiteler ve hava bronkogramları olduğu görülüyor',
        clues: ['29 gebelik haftası', 'ekspiratuvar inleme', 'retikülogranüler opasiteler ve hava bronkogramları'],
        management: 'Nazal CPAP ile erken pozitif basınç desteği ve endotrakeal ekzojen surfaktan uygulanması',
        pearl: 'Diyabetik anne bebeklerinde fetal hiperinsülinizm surfaktan sentezini baskıladığı için term veya geç preterm olsalar dahi risk belirgin artar.',
        trapFalse: 'akciğer grafisinde hiperinflasyon ile fissürlerde sıvı birikimi saptanır ve 48 saatte kendiliğinden düzelir',
        trapHighlight: 'hiperinflasyon ile fissürlerde sıvı birikimi saptanır ve 48 saatte kendiliğinden düzelir',
      },
      {
        name: 'Yenidoğanın geçici takipnesi',
        target: 'Doğum sırasında fetal alveolar sıvının pulmoner lenfatiklerle temizlenmesinde gecikme',
        hallmark: 'Akciğer grafisinde perihiler güneş patlaması çizgilenmesi, minör fissürde sıvı ve hiperinflasyon',
        vignette:
          '38 gebelik haftasında elektif sezaryenle doğan 3300 gram kız bebekte doğumdan hemen sonra solunum sayısının 82/dakika olduğu ve hafif inleme eşlik ettiği izleniyor. Oksijen satürasyonu %40 nazal oksijenle düzeliyor; grafide perihiler belirginleşme, fissürlerde sıvı çizgisi ve kostalarda düzleşme saptanıyor',
        clues: ['elektif sezaryen', 'hafif inleme', 'perihiler belirginleşme ve fissürlerde sıvı'],
        management: 'Destekleyici oksijen tedavisi ve yakın takip (genellikle 48-72 saat içinde spontan rezolüsyon)',
        pearl: 'Term ve geç preterm elektif sezaryen doğumlarından sonra travay stresinin olmaması nedeniyle sodyum kanalları yeterince aktive olamaz ve sıvı klirensi gecikir.',
        trapFalse: 'tip II pnömosit yetmezliğine bağlı gelişir ve ilk tedavide mutlaka endotrakeal surfaktan verilir',
        trapHighlight: 'tip II pnömosit yetmezliğine bağlı gelişir ve ilk tedavide mutlaka endotrakeal surfaktan verilir',
      },
      {
        name: 'Mekonyum aspirasyon sendromu',
        target: 'Hipoksiye yanıt olarak in utero çıkarılan mekonyumun hava yollarını tıkaması, kimyasal pnömonit ve surfaktan inaktivasyonu',
        hallmark: 'Grafide kaba yamasal infiltrasyonlar ve atelektazilerle eş zamanlı hava hapsine bağlı hiperinflasyon',
        vignette:
          '41+5 gebelik haftasında uzamış doğum eylemi sonrası koyu yeşil amniyon sıvısı içinden doğurtulan 3900 gram bebekte tırnak yatakları ve göbek kordonu boyalı izleniyor. İlk dakikada ağır dispne, fıçı göğüs ve ral sesleri saptanıyor; akciğer grafisinde kaba yamasal dansiteler yanında hiperaerasyon alanları görülüyor',
        clues: ['41+5 gebelik haftası', 'koyu yeşil amniyon sıvısı', 'kaba yamasal dansiteler yanında hiperaerasyon'],
        management: 'Canlı olmayan bebekte gereksiz rutin trakeal aspirasyon yapılmadan pozitif basınçlı ventilasyon, oksijenasyon ve pnömotoraks takibi',
        pearl: 'Top şeklindeki hava hapsi mekanizması nedeniyle pnömotoraks ve pnömomediastinum gelişme riski diğer yenidoğan solunum sorunlarına göre çok yüksektir.',
        trapFalse: 'prematüre bebeklerde daha sıktır ve akciğer grafisinde düşük akciğer hacmi ile buzlu cam görünümü izlenir',
        trapHighlight: 'prematüre bebeklerde daha sıktır ve akciğer grafisinde düşük akciğer hacmi ile buzlu cam görünümü izlenir',
      },
      {
        name: 'Konjenital diyafragma hernisi',
        target: 'Plöroperitoneal kanalın kapanmaması sonucu abdominal organların toraksa herniasyonu ve pulmoner hipoplazi',
        hallmark: 'Doğumda skafoid karın, sol hemitoraksta bağırsak sesleri ve kalp atımlarının sağa yer değiştirmesi',
        vignette:
          'Term doğan bir erkek yenidoğanda doğum salonunda ağır siyanoz ve solunum yetmezliği gelişiyor. Fizik muayenede karnın belirgin çökük olduğu, sol akciğerde solunum seslerinin alınamadığı ve kalp seslerinin sternumun sağında duyulduğu fark ediliyor. Akciğer grafisinde sol hemitoraksta hava dolu bağırsak ansları izleniyor',
        clues: ['karnın belirgin çökük olduğu', 'kalp seslerinin sternumun sağında duyulduğu', 'sol hemitoraksta hava dolu bağırsak ansları'],
        management: 'Hemen endotrakeal entübasyon ve nazogastrik dekompresyon uygulanması, ardından hemodinamik stabilizasyon sonrası cerrahi onarım',
        pearl: 'Bu bebeklerde balon-maske ile pozitif basınçlı ventilasyon kesinlikle kontrendikedir; mide ve bağırsakları şişirerek akciğer basısını ve mediastinal şifti ağırlaştırır.',
        trapFalse: 'ilk müdahalede balon-maske ile yüksek basınçlı ventilasyon uygulanarak akciğerlerin ekspansiyonu sağlanmalıdır',
        trapHighlight: 'balon-maske ile yüksek basınçlı ventilasyon uygulanarak',
      },
      {
        name: 'Persistan pulmoner hipertansiyon',
        target: 'Doğum sonrası pulmoner vasküler direncin düşmemesi sonucu foramen ovale ve duktus arteriyozustan sağ-sol şant sürmesi',
        hallmark: 'Preduktal sağ el oksijen satürasyonunun postduktal alt ekstremite satürasyonundan en az %10 yüksek olması',
        vignette:
          'Zor doğum ve perinatal asfiksi öyküsü olan term yenidoğanda %100 oksijen desteğine rağmen ağır hipoksemi devam ediyor. Ekokardiyografide yapısal kalp anomalisi saptanmıyor ancak sağ ventrikül basıncının sistemik basınca eşit olduğu görülüyor. Sağ elden ölçülen oksijen satürasyonu %92 iken sağ ayaktan %74 ölçülüyor',
        clues: ['perinatal asfiksi öyküsü', '%100 oksijen desteğine rağmen ağır hipoksemi', 'sağ el %92 iken sağ ayaktan %74'],
        management: 'Selektif pulmoner vazodilatör olarak inhale nitrik oksit (iNO) tedavisi ve yanıtsız olgularda ECMO desteği',
        pearl: 'Yapısal kalp hastalığı olmaksızın preduktal-postduktal %10 üzeri satürasyon farkı ve hiperoksi testine yanıtsızlık tanıyı koydurur.',
        trapFalse: 'tedavisinde pulmoner arter basıncını düşürmek amacıyla ilk seçenek olarak indometazin infüzyonu başlanır',
        trapHighlight: 'ilk seçenek olarak indometazin infüzyonu başlanır',
      },
    ],
  },

  // 2. Yenidoğan Doğum Travmaları
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Doğum Travmaları',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kaput suksedaneum',
        target: 'Doğum kanalındaki basıya bağlı skalp cilt altı dokusunda seröz-hemorajik ödem birikimi',
        hallmark: 'Sütür hatlarını geçen, gode bırakan, doğumda en belirgin olan ve ilk günlerde kendiliğinden gerileyen şişlik',
        vignette:
          'Uzamış vajinal doğum sonrası doğan term yenidoğanın başında doğumdan hemen sonra pariyetal bölgede yumuşak, basmakla iz bırakan bir şişlik izleniyor. Muayenede şişliğin sagital sütürü karşı tarafa geçtiği görülüyor; bebek aktif ve vital bulguları stabildir',
        clues: ['doğumdan hemen sonra', 'basmakla iz bırakan', 'sagital sütürü karşı tarafa geçtiği'],
        management: 'Girişim yapılmadan gözlem (birkaç gün içinde spontan rezolüsyon gösterir)',
        pearl: 'Cilt altı yerleşimli olduğu için sütür hatlarını aşar ve nadiren sarılık ya da hemodinamik bozukluğa yol açar.',
        trapFalse: 'periost altında sınırlı kalır ve bu nedenle kraniyal sütür hatlarını kesinlikle geçmez',
        trapHighlight: 'periost altında sınırlı kalır ve bu nedenle kraniyal sütür hatlarını kesinlikle geçmez',
      },
      {
        name: 'Sefal hematom',
        target: 'Travmatik doğum sonrası kraniyal kemik ile periost arasındaki damarların yırtılmasıyla subperiosteal kanama',
        hallmark: 'Sütür hatlarını geçmeyen, doğumdan saatler sonra belirginleşen ve hiperbilirubinemiye zemin hazırlayan fluktuan kitle',
        vignette:
          'Forseps yardımlı doğumdan 12 saat sonra term bebeğin sağ pariyetal kemiği üzerinde fluktuan, sınırları keskin bir şişlik fark ediliyor. Şişliğin orta hat sütüründe keskin biçimde durduğu ve karşı tarafa geçmediği görülüyor. 4. günde bebekte uzamış indirekt hiperbilirubinemi gelişiyor',
        clues: ['doğumdan 12 saat sonra', 'orta hat sütüründe keskin biçimde durduğu', 'indirekt hiperbilirubinemi'],
        management: 'İnsizyon veya aspirasyon yapılmadan konservatif izlem ve eşlik eden sarılık açısından bilirubin takibi',
        pearl: 'Enfeksiyon ve osteomiyelit riski nedeniyle kesinlikle aspire edilmez; altta yatan lineer kafatası kırığı açısından dikkatli olunmalıdır.',
        trapFalse: 'enfeksiyonu önlemek ve basıyı azaltmak için tanı konulduğu anda iğne ile aspire edilmelidir',
        trapHighlight: 'tanı konulduğu anda iğne ile aspire edilmelidir',
      },
      {
        name: 'Subgaleal kanama',
        target: 'Epikranial aponöroz (galea) ile periost arasındaki gevşek bağ dokusu boşluğuna masif venöz kanama',
        hallmark: 'Sütür hatlarını aşarak kulakları öne-aşağı iten, kafa çevresini hızla artıran ve hipovolemik şok yapan fluktuan şişlik',
        vignette:
          'Vakum ekstraksiyonu ile doğurtulan yenidoğanda 4. saatte tüm saçlı deriye yayılan, dalgalanma veren büyük bir şişlik gelişiyor. Kulak kepçelerinin öne ve aşağı doğru itildiği, kafa çevresinin 3 cm arttığı, bebeğin soluklaştığı, taşikardik olduğu ve hematokritinin %24’e düştüğü saptanıyor',
        clues: ['Vakum ekstraksiyonu', 'kulak kepçelerinin öne ve aşağı doğru itildiği', 'hematokritinin %24’e düştüğü'],
        management: 'Acil yoğun bakım izlemi, volüm resüsitasyonu, eritrosit/taze donmuş plazma transfüzyonu ve koagülopati düzeltilmesi',
        pearl: 'Gevşek subaponevrotik boşluk tüm kan hacmini alabileceğinden yenidoğanda hayatı tehdit eden en ölümcül ekstrakranial kanamadır.',
        trapFalse: 'kendi kendini sınırlayan iyi huylu bir tablodur ve sistemik kan kaybına yol açmaz',
        trapHighlight: 'kendi kendini sınırlayan iyi huylu bir tablodur ve sistemik kan kaybına yol açmaz',
      },
      {
        name: 'Erb-Duchenne paralizisi',
        target: 'Omuz distosisi sırasında C5-C6 üst brakiyal pleksus köklerinin gerilme yaralanması',
        hallmark: 'Kol addüksiyonda ve iç rotasyonda, önkol pronasyonda dururken yakalama refleksinin korunması',
        vignette:
          '4600 gram makrozomik bebeğin omuz takılması sonrası zorlu doğumu gerçekleşiyor. Muayenede sağ üst ekstremitenin gövde yanında hareketsiz uzandığı, kolun iç rotasyonda ve önkolun pronasyonda olduğu görülüyor. Sağda Moro refleksi alınamazken palmar yakalama refleksi güçlü biçimde alınıyor',
        clues: ['omuz takılması', 'kolun iç rotasyonda ve önkolun pronasyonda olduğu', 'Moro refleksi alınamazken palmar yakalama refleksi güçlü'],
        management: 'İlk hafta ekstremite istirahati sonrasında pasif eklem hareket açıklığı egzersizleri ve fizik tedavi (çoğu ilk 3 ayda iyileşir)',
        pearl: 'C4 kökü de eşlik ederse diyafragma elevasyonu ile seyreden ipsilateral frenik sinir felci tabloya eklenebilir.',
        trapFalse: 'C8-T1 köklerinin hasarına bağlıdır ve aynı tarafta pitoz, miyozis ile anhidrozis gelişir',
        trapHighlight: 'C8-T1 köklerinin hasarına bağlıdır ve aynı tarafta pitoz, miyozis ile anhidrozis gelişir',
      },
      {
        name: 'Klumpke paralizisi',
        target: 'Makattan veya kol çekilerek yapılan doğumda C8-T1 alt brakiyal pleksus köklerinin hasarı',
        hallmark: 'El bileği ve parmaklarda pençe el postürü, yakalama refleksi kaybı ve eşlik eden ipsilateral Horner sendromu',
        vignette:
          'Makat prezentasyonu ile doğurtulan yenidoğanın sol elinde parmak fleksiyonunun olmadığı ve elin pençe görünümü aldığı izleniyor. Moro refleksi omuz hareketleriyle alınırken sol elinde palmar yakalama refleksi alınamıyor; ayrıca sol göz kapağında düşüklük ve pupil küçüklüğü dikkat çekiyor',
        clues: ['elin pençe görünümü', 'palmar yakalama refleksi alınamıyor', 'sol göz kapağında düşüklük ve pupil küçüklüğü'],
        management: 'El bileği nötral pozisyonda atellenmesi, erken fizik tedavi ve düzelmeyen olgularda sinir rekonstrüksiyon değerlendirmesi',
        pearl: 'T1 sempatik zincir liflerinin hasarı nedeniyle pitoz, miyozis ve anhidrozis (Horner sendromu) sıklıkla eşlik eder.',
        trapFalse: 'üst ekstremitede bahşiş isteyen garson pozisyonu oluşturur ve yakalama refleksi sağlam kalır',
        trapHighlight: 'bahşiş isteyen garson pozisyonu oluşturur ve yakalama refleksi sağlam kalır',
      },
    ],
  },

  // 3. Yenidoğan Sarılıkları ve NEC
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Sarılıkları ve NEC',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2023',
    entities: [
      {
        name: 'Fizyolojik sarılık',
        target: 'Artmış eritrosit yıkımı, fetal eritrosit ömrü kısalığı ve UGT1A1 enziminin geçici immatüritesi',
        hallmark: 'Doğumdan 24 saat sonra başlayıp 3-5. günde pik yapan, direkt fraksiyonu 2 mg/dL altında seyreden geçici sarılık',
        vignette:
          '39 haftalık doğan, sadece anne sütü alan ve iyi emen term bebekte yaşamın 48. saatinde yüz ve gövdede hafif ikter fark ediliyor. Total bilirubin 9.4 mg/dL, direkt bilirubin 0.5 mg/dL ölçülüyor; retikülosit normal, Direkt Coombs negatif ve 7. günde kendiliğinden geriliyor',
        clues: ['yaşamın 48. saatinde', 'Total bilirubin 9.4 mg/dL, direkt bilirubin 0.5 mg/dL', 'Direkt Coombs negatif ve 7. günde kendiliğinden geriliyor'],
        management: 'Tedavi gerektirmez; yeterli hidrasyon ve düzenli emzirme sürdürülerek klinik izlem yapılır',
        pearl: 'İlk 24 saatte başlayan veya bilirubin artış hızı saatte 0.5 mg/dL (günde 5 mg/dL) üzerine çıkan hiçbir sarılık bu gruba girmez.',
        trapFalse: 'yaşamın ilk 24 saati içinde ortaya çıkar ve direkt bilirubin düzeyi toplam bilirubinin %20’sini aşar',
        trapHighlight: 'ilk 24 saati içinde ortaya çıkar ve direkt bilirubin düzeyi toplam bilirubinin %20’sini aşar',
      },
      {
        name: 'Emzirme sarılığı',
        target: 'Yaşamın ilk haftasında yetersiz süt alımına bağlı azalmış bağırsak motilitesi ve artmış enterohepatik dolaşım',
        hallmark: 'İlk 3-5 günde %10 üzeri tartı kaybı, azalmış idrar çıkışı ve gecikmiş mekonyum geçişi ile seyreden erken hiperbilirubinemi',
        vignette:
          'İlk gebelikten doğan 4 günlük term bebek yeterince idrar yapmama ve huzursuzluk nedeniyle getiriliyor. Doğum tartısı 3400 gram olan bebeğin 2980 grama düştüğü, müköz membranlarının kuru olduğu ve annesinin emzirme tekniğinde güçlük yaşadığı öğreniliyor. Total bilirubin 17.5 mg/dL (indirekt) saptanıyor',
        clues: ['4 günlük term bebek', '3400 gram olan bebeğin 2980 grama düştüğü', 'müköz membranlarının kuru olduğu'],
        management: 'Emzirme danışmanlığı ile günde 10-12 kez sık emzirmenin sağlanması ve sınıra göre fototerapi uygulanması',
        pearl: 'Sorun anne sütünün içeriği değil, bebeğin yeterince süt alamamasına bağlı açlık ve dehidratasyondur; anne sütü kesinlikle kesilmez.',
        trapFalse: 'ikinci haftadan sonra ortaya çıkar ve anne sütündeki beta-glukuronidaz enzimi nedeniyle oluşur',
        trapHighlight: 'ikinci haftadan sonra ortaya çıkar ve anne sütündeki beta-glukuronidaz enzimi nedeniyle oluşur',
      },
      {
        name: 'Anne sütü sarılığı',
        target: 'Sütteki beta-glukuronidaz ve pregnandiol benzeri faktörlerin konjugasyonu ve bağırsak emilimini etkilemesi',
        hallmark: 'İyi kilo alan ve muayenesi normal bebekte 1. hafta sonunda pik yapıp 3-12 haftaya kadar uzayan indirekt hiperbilirubinemi',
        vignette:
          'Yalnızca anne sütü ile beslenen 18 günlük bebekte devam eden sarılık nedeniyle başvuruluyor. Bebeğin doğum tartısını aşarak iyi kilo aldığı, dışkı renginin sarı, idrar renginin açık olduğu, fizik muayenesinin tamamen normal bulunduğu ve direkt bilirubinin normal sınırlarda olduğu görülüyor',
        clues: ['18 günlük bebek', 'iyi kilo aldığı', 'dışkı renginin sarı, idrar renginin açık olduğu'],
        management: 'Diğer patolojik nedenler dışlandıktan sonra emzirmeye devam edilmesi ve çok yüksek değerlerde kısa süreli fototerapi',
        pearl: 'Sağlıklı ve iyi kilo alan bir bebekte 2. haftayı aşan indirekt hiperbilirubinemide tanı konulur; konjenital hipotiroidi ve biliyer atrezi mutlaka dışlanmalıdır.',
        trapFalse: 'tedavisinde anne sütü kalıcı olarak kesilip hidrolize mamaya geçilmesi zorunludur',
        trapHighlight: 'anne sütü kalıcı olarak kesilip hidrolize mamaya geçilmesi zorunludur',
      },
      {
        name: 'Kernikterus',
        target: 'Kan-beyin bariyerini geçen serbest indirekt bilirubinin bazal gangliyon ve beyin sapı çekirdeklerine nörotoksisitesi',
        hallmark: 'Globus pallidus ve subtalamik nükleusta sarı boyanma ile opistotonus, tiz ağlama ve koreoatetoid serebral palsi',
        vignette:
          'Rh uyuşmazlığı nedeniyle yoğun hemolizi olan ve takipsiz kalan 5 günlük bebek letarji, emmeme, tiz sesle ağlama ve başını geriye doğru yay gibi bükme nöbetleriyle acile getiriliyor. Total bilirubin 31 mg/dL saptanıyor; izlemde işitme kaybı ve yukarı bakış kısıtlılığı gelişiyor',
        clues: ['Rh uyuşmazlığı', 'tiz sesle ağlama ve başını geriye doğru yay gibi bükme', 'işitme kaybı ve yukarı bakış kısıtlılığı'],
        management: 'Acil çift hacimli kan değişimi (exchange transfüzyon) ve yoğun fototerapi ile nöronal hasarın sınırlandırılması',
        pearl: 'Kronik dönemde beyin MR’da bilateral globus pallidusta T2 hiperintensitesi, koreoatetoid serebral palsi, diş minesi displazisi ve sensörinöral işitme kaybı klasik sekellerdir.',
        trapFalse: 'konjuge (direkt) bilirubinin serebral kortekste birikmesiyle oluşur ve sadece fototerapiyle geri döndürülür',
        trapHighlight: 'konjuge (direkt) bilirubinin serebral kortekste birikmesiyle oluşur ve sadece fototerapiyle geri döndürülür',
      },
      {
        name: 'Nekrotizan enterokolit',
        target: 'Prematürite, bağırsak mukozal iskemisi ve enteral beslenme sonrası bakteriyel translokasyona bağlı transmural bağırsak nekrozu',
        hallmark: 'Direkt karın grafisinde bağırsak duvarında hava kabarcıkları (pnömatozis intestinalis) ve portal vende gaz',
        vignette:
          '28 haftalık doğan ve 12. günde enteral maması artırılan prematüre bebekte karında hızla gelişen şişlik, safralı mide rezidüsü, kanlı dışkılama ve apne atakları başlıyor. Laboratuvarda trombositopeni ve metabolik asidoz; ayakta direkt karın grafisinde bağırsak duvarı boyunca çizgisel gaz görüntüleri saptanıyor',
        clues: ['enteral maması artırılan prematüre', 'kanlı dışkılama', 'bağırsak duvarı boyunca çizgisel gaz görüntüleri'],
        management: 'Enteral beslenmenin hemen kesilmesi (NPO), nazogastrik dekompresyon, geniş spektrumlu IV antibiyotik ve perforasyonda acil cerrahi',
        pearl: 'Pnömatozis intestinalis radyolojik olarak patognomoniktir; anne sütü ile beslenme bu ağır tablonun gelişme riskini belirgin azaltan en önemli koruyucu faktördür.',
        trapFalse: 'en sık term bebeklerde görülür ve radyografide çift kabarcık (double bubble) işareti patognomoniktir',
        trapHighlight: 'en sık term bebeklerde görülür ve radyografide çift kabarcık (double bubble) işareti patognomoniktir',
      },
    ],
  },

  // 4. Konjenital TORCH Enfeksiyonları
  {
    branchId: 'pediatri',
    subTopic: 'Konjenital TORCH Enfeksiyonları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Konjenital toksoplazmoz',
        target: 'Transplasental Toxoplasma gondii enfeksiyonu sonucu parankimal nekroz ve yaygın kalsifikasyon',
        hallmark: 'Koryoretinit, hidrosefali ve beyin parankimine yaygın (diffüz) intrakraniyal kalsifikasyon klasik triyadı',
        vignette:
          'Gebelikte çiğ et tüketimi ve kedi dışkısı teması öyküsü olan annenin yenidoğan bebeğinde makrosefali, nöbetler ve göz dibi muayenesinde bilateral maküler skarlar saptanıyor. Kraniyal BT’de ventriküllerde belirgin genişleme ve serebral kortekse dağılmış çok sayıda noktasal kalsifikasyon izleniyor',
        clues: ['kedi dışkısı teması', 'maküler skarlar', 'ventriküllerde belirgin genişleme ve serebral kortekse dağılmış kalsifikasyon'],
        management: 'Pirimetamin, sülfadiazin ve kemik iliği toksisitesini önlemek için folinik asit (lökoverin) kombinasyonu ile 1 yıl tedavi',
        pearl: 'Gebelik haftası ilerledikçe bebeğe bulaşma riski artar ancak ilk trimesterde bulaşırsa fetal beyin hasarı en ağır seyreder.',
        trapFalse: 'kraniyal görüntülemede kalsifikasyonlar tipik olarak periventriküler yerleşimlidir ve mikrosefaliye neden olur',
        trapHighlight: 'periventriküler yerleşimlidir ve mikrosefaliye neden olur',
      },
      {
        name: 'Konjenital rubella',
        target: 'İlk trimesterde anneden geçen rubella virüsünün mitozu inhibe ederek çoklu organ teratojenitesine yol açması',
        hallmark: 'Sensörinöral işitme kaybı, santral katarakt ve patent duktus arteriyozus (veya pulmoner arter stenozu) triyadı',
        vignette:
          'Aşısız annenin ilk trimesterde ateş ve döküntü geçirmesi sonrası term doğan bebekte büyüme geriliği, trombositopenik mor nodüller, bilateral beyaz pupilla refleksi ve sol infraklaviküler bölgede sürekli üfürüm saptanıyor. İşitme taramasından iki taraflı olarak kaldığı görülüyor',
        clues: ['bilateral beyaz pupilla refleksi', 'sol infraklaviküler bölgede sürekli üfürüm', 'işitme taramasından iki taraflı olarak kaldığı'],
        management: 'Spesifik antiviral tedavisi yoktur; erken katarakt cerrahisi, işitme rehabilitasyonu ve kardiyak izlem ile destekleyici bakım',
        pearl: 'En sık kalp anomalisi PDA ve periferik pulmoner arter stenozu, en sık geç bulgu ise sensörinöral sağırlıktır.',
        trapFalse: 'spesifik tedavisinde doğumdan hemen sonra 6 hafta boyunca intravenöz gansiklovir uygulanır',
        trapHighlight: 'doğumdan hemen sonra 6 hafta boyunca intravenöz gansiklovir uygulanır',
      },
      {
        name: 'Konjenital CMV',
        target: 'Sitomegalovirüsün transplasental geçişiyle subependimal germinal matriks hasarı ve işitme kaybı',
        hallmark: 'Mikrosefali, hepatosplenomegali, peteşi ve kraniyal görüntülemede periventriküler kalsifikasyonlar',
        vignette:
          'Gebelikte hafif gripal enfeksiyon geçiren annenin 2200 gram doğan bebeğinde baş çevresinin <3. persentil olduğu, yaygın peteşileri ve hepatosplenomegalisi olduğu görülüyor. Transfontanel ultrasonografide yan ventriküllerin çevresinde bant şeklinde kalsifikasyonlar ve idrarda viral DNA pozitifliği saptanıyor',
        clues: ['baş çevresinin <3. persentil olduğu', 'yaygın peteşileri', 'yan ventriküllerin çevresinde bant şeklinde kalsifikasyonlar'],
        management: 'Semptomatik SSS tutulumlu bebeklerde 6 ay süreyle oral valgansiklovir (veya IV gansiklovir) tedavisi',
        pearl: 'En sık görülen konjenital viral enfeksiyon ve çocukluk çağındaki genetik dışı sensörinöral işitme kaybının en sık nedenidir.',
        trapFalse: 'gebelik sırasında bulaşan en nadir viral etkendir ve genellikle hidrosefaliye yol açar',
        trapHighlight: 'en nadir viral etkendir ve genellikle hidrosefaliye yol açar',
      },
      {
        name: 'Konjenital sifiliz',
        target: 'Treponema pallidum spiroketinin plasentadan geçerek osteokondrit, rinit ve mukokütanöz inflamasyon oluşturması',
        hallmark: 'Kanlı-pürülan rinit (snuffles), avuç içi-ayak tabanında büllöz/makülopapüler döküntü ve periostit',
        vignette:
          'Gebelik takibi olmayan anneden doğan 3 haftalık bebekte burundan sürekli kanlı-mukoid akıntı, el içi ve ayak tabanlarında soyulan bakır renkli döküntüler ve sağ kolunu ağrı nedeniyle hareket ettirememe (psödoparalizi) saptanıyor. Uzun kemik grafilerinde metafizyel osteokondrit izleniyor',
        clues: ['kanlı-mukoid akıntı', 'el içi ve ayak tabanlarında soyulan bakır renkli döküntüler', 'metafizyel osteokondrit'],
        management: '10 gün boyunca intravenöz kristalize penisilin G tedavisi uygulanması',
        pearl: 'Tedavi edilmezse geç dönemde Hutchinson dişleri, interstisyel keratit ve 8. sinir sağırlığından oluşan klasik triyad ile semer burun gelişir.',
        trapFalse: 'ilk basamak tedavisinde bebekte oral doksisiklin veya azitromisin tek doz uygulanır',
        trapHighlight: 'oral doksisiklin veya azitromisin tek doz uygulanır',
      },
      {
        name: 'Neonatal herpes',
        target: 'Doğum sırasında annenin genital HSV-2 enfeksiyonundan bulaş ve temporal lob nekrotizan ensefaliti',
        hallmark: 'Doğumdan 1-2 hafta sonra ortaya çıkan kümelenmiş cilt vezikülleri, fokal nöbetler ve BOS’ta eritrosit ile lenfositoz',
        vignette:
          'Vajinal yolla doğan 11 günlük bebekte ateş, emmeme ve tekrarlayan sağ fokal klonik nöbetler başlıyor. Kafa derisinde tabanı eritemli grup yapmış veziküller görülüyor. BOS incelemesinde protein yüksekliği ve hemorajik görünüm, beyin MR’da temporal lob tutulumu saptanıyor',
        clues: ['11 günlük bebek', 'tabanı eritemli grup yapmış veziküller', 'temporal lob tutulumu'],
        management: 'Kültür sonucu beklenmeden hemen yüksek doz (60 mg/kg/gün) intravenöz asiklovir tedavisi başlatılması',
        pearl: 'Üç klinik formu (SEM, SSS ensefaliti, dissemine hastalık) vardır; dissemine formda karaciğer yetmezliği ve DİK nedeniyle mortalite en yüksektir.',
        trapFalse: 'her zaman transplasental olarak ilk trimesterde bulaşır ve periventriküler kalsifikasyon yapar',
        trapHighlight: 'transplasental olarak ilk trimesterde bulaşır ve periventriküler kalsifikasyon yapar',
      },
    ],
  },

  // 5. Asiyanotik Konjenital Kalp Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Asiyanotik Konjenital Kalp Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2025',
    entities: [
      {
        name: 'Ventriküler septal defekt',
        target: 'İnterventriküler septumun membranöz veya musküler kısmındaki açıklıktan soldan sağa şant',
        hallmark: 'Sol alt sternal kenarda şiddetli, yayılım gösteren pansistolik üfürüm ve tril alınması',
        vignette:
          '2 aylık erkek bebek emerken çabuk yorulma, terleme ve tartı alamama şikayetiyle getiriliyor. Muayenede taşipne, hepatomegali ve sol 3-4. interkostal aralıkta 4/6 şiddetinde pansistolik üfürüm ile sistolik tril saptanıyor. Akciğer grafisinde kardiyomegali ve pulmoner vaskülarite artışı izleniyor',
        clues: ['emerken çabuk yorulma, terleme', 'sol 3-4. interkostal aralıkta 4/6 şiddetinde pansistolik üfürüm', 'kardiyomegali ve pulmoner vaskülarite artışı'],
        management: 'Kalp yetmezliği için furosemid/ACE inhibitörü ile medikal kontrol, küçük defektlerde izlem ve geniş defektlerde cerrahi kapama',
        pearl: 'Biküspit aort kapağı sayılmazsa çocukluk çağında en sık görülen konjenital kalp hastalığıdır; musküler tiplerin spontan kapanma olasılığı daha yüksektir.',
        trapFalse: 'dinlemekle S2’de sabit geniş çiftleşme duyulur ve sağ ventrikül hipertrofisine bağlı erken siyanoz yapar',
        trapHighlight: 'S2’de sabit geniş çiftleşme duyulur ve sağ ventrikül hipertrofisine bağlı erken siyanoz yapar',
      },
      {
        name: 'Atriyal septal defekt sekundum',
        target: 'Fossa ovalis bölgesindeki açıklık üzerinden sağ kalp boşluklarına soldan sağa şant ve volüm yüklenmesi',
        hallmark: 'Sol üst sternal kenarda sistolik ejeksiyon üfürümü ve solunumla değişmeyen S2 sabit geniş çiftleşmesi',
        vignette:
          'Okul öncesi rutin muayenede asemptomatik 5 yaşındaki kız çocukta sol 2. interkostal aralıkta 2/6 şiddetinde sistolik ejeksiyon üfürümü ve inspiryumda da ekspiryumda da aynı aralıkta duyulan çift ikinci kalp sesi fark ediliyor. EKG’de sağ aks sapması ve V1’de rsR’ paterni saptanıyor',
        clues: ['asemptomatik 5 yaşındaki kız', 'sol 2. interkostal aralıkta 2/6 şiddetinde sistolik ejeksiyon üfürümü', 'inspiryumda da ekspiryumda da aynı aralıkta duyulan çift ikinci kalp sesi'],
        management: 'Belirgin şant (Qp/Qs >1.5) veya sağ kalp dilatasyonu varsa uygun kenarlı olgularda transkateter cihazla kapama',
        pearl: 'Sekundum tipte EKG’de sağ aks sapması görülürken, primum tipte (AVSD spektrumu) sol aks sapması görülmesi klasik ayırıcı noktadır.',
        trapFalse: 'EKG’de belirgin sol aks sapması görülür ve bebeklik döneminde hızla kalp yetmezliğine yol açar',
        trapHighlight: 'belirgin sol aks sapması görülür ve bebeklik döneminde hızla kalp yetmezliğine yol açar',
      },
      {
        name: 'Patent duktus arteriyozus',
        target: 'Duktus arteriyozusun doğum sonrası kapanmayarak aorttan pulmoner artere sürekli soldan sağa şant oluşturması',
        hallmark: 'Sol infraklaviküler bölgede sürekli (makine) üfürüm, sıçrayıcı periferik nabız ve geniş nabız basıncı',
        vignette:
          '30 haftalık doğan ve solunum desteği azaltılamayan bebekte muayenede sol klavikula altında sistol ve diyastolde kesintisiz duyulan sürekli üfürüm, prekordiyal hiperaktivite ve çok dolgun femoral nabızlar saptanıyor. Kan basıncı 68/26 mmHg olarak ölçülüyor',
        clues: ['30 haftalık doğan', 'sistol ve diyastolde kesintisiz duyulan sürekli üfürüm', 'kan basıncı 68/26 mmHg'],
        management: 'Prematürelerde prostaglandin sentez inhibitörü (ibuprofen/indometazin) veya parasetamol; termde transkateter koil/cihaz ile kapama',
        pearl: 'Aorttan pulmoner artere diyastolde de kan kaçışı devam ettiği için diyastolik basınç düşer ve nabız basıncı belirgin genişler.',
        trapFalse: 'kapatılması amacıyla intravenöz prostaglandin E1 infüzyonu başlanır',
        trapHighlight: 'intravenöz prostaglandin E1 infüzyonu başlanır',
      },
      {
        name: 'Atriyoventriküler septal defekt',
        target: 'Endokardiyal yastıkların birleşmemesi sonucu primum ASD, inlet VSD ve ortak atriyoventriküler kapak oluşumu',
        hallmark: 'Trizomi 21 birlikteliği, EKG’de sol/superior aks sapması ve erken dönemde ağır konjestif kalp yetmezliği',
        vignette:
          'Doğumdan beri hipotonisi, yukarı çekik palpebral fissürleri ve tek palmar çizgisi olan 6 haftalık bebekte taşipne, beslenememe ve pansistolik üfürüm saptanıyor. EKG’de QRS aksının -60 derece (superior aks) olduğu, ekoda ortak AV kapak ve geniş septal açıklık bulunduğu görülüyor',
        clues: ['hipotonisi, yukarı çekik palpebral fissürleri', 'QRS aksının -60 derece', 'ortak AV kapak'],
        management: 'Medikal kalp yetmezliği tedavisi sonrası pulmoner hipertansiyon kalıcı hale gelmeden 3-6. aylarda cerrahi onarım',
        pearl: 'Down sendromlu bebeklerde en karakteristik kalp anomalisi olup ilk 6 ayda cerrahi yapılmazsa hızla irreversibl pulmoner vasküler hastalık gelişir.',
        trapFalse: 'EKG’de tipik olarak sağ aks sapması izlenir ve cerrahi onarımı okul çağına kadar ertelenir',
        trapHighlight: 'sağ aks sapması izlenir ve cerrahi onarımı okul çağına kadar ertelenir',
      },
      {
        name: 'Aort koarktasyonu',
        target: 'Sol subklavyen arter distali ve duktus arteriyozus çevresinde inen aortanın konjenital darlığı',
        hallmark: 'Üst ekstremitede hipertansiyon, alt ekstremitede zayıf/gecikmiş femoral nabız ve büyük çocukta kosta çentiklenmesi',
        vignette:
          'Bacak ağrısı ve baş ağrısı şikayetleriyle getirilen 9 yaşındaki hastada sağ koldan ölçülen kan basıncı 155/95 mmHg, bacaklardan ölçülen ise 95/60 mmHg bulunuyor. Femoral nabızların radyal nabza göre zayıf ve gecikmiş olduğu, göğüs grafisinde kosta alt kenarlarında çentiklenmeler bulunduğu izleniyor',
        clues: ['sağ koldan 155/95 mmHg, bacaklardan 95/60 mmHg', 'femoral nabızların zayıf ve gecikmiş olduğu', 'kosta alt kenarlarında çentiklenmeler'],
        management: 'Yenidoğan kritik olgularda PGE1 ile duktus açıklığı sağlanması sonrası cerrahi onarım; büyük çocukta balon anjiyoplasti veya cerrahi',
        pearl: 'Turner sendromlu kız çocuklarında en sık görülen konjenital kalp anomalisidir; grafide darlık öncesi ve sonrası dilatasyon "3 işareti" oluşturur.',
        trapFalse: 'alt ekstremite kan basıncı üst ekstremiteden belirgin yüksektir ve PGE1 kontrendikedir',
        trapHighlight: 'alt ekstremite kan basıncı üst ekstremiteden belirgin yüksektir',
      },
    ],
  },

  // 6. Siyanotik Konjenital Kalp Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Siyanotik Konjenital Kalp Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Fallot tetralojisi',
        target: 'İnfundibular septumun öne deviasyonuna bağlı pulmoner stenoz, VSD, ata binen aort ve sağ ventrikül hipertrofisi',
        hallmark: 'Tahta pabuç (boot-shaped) kalp gölgesi, sol üst sternal sistolik ejeksiyon üfürümü ve çömelme ile rahatlayan hipersiyanotik nöbetler',
        vignette:
          '8 aylık bebek sabah ağlama sonrası aniden morarma, hızlı nefes alma ve gevşeklik atağıyla getiriliyor. Muayenede dinlemekle duyulan sistolik üfürümün atak sırasında kaybolduğu, annenin bebeğin bacaklarını karnına çekince rahatladığını fark ettiği öğreniliyor. Grafide kalp apeksinin yukarı kalktığı ve pulmoner konusunun çökük olduğu görülüyor',
        clues: ['ağlama sonrası aniden morarma', 'üfürümün atak sırasında kaybolduğu', 'kalp apeksinin yukarı kalktığı'],
        management: 'Hipersiyanotik nöbette diz-göğüs pozisyonu, oksijen, morfin, sıvı bolusu ve fenilefrin/propranolol; kesin tedavide total cerrahi düzeltme',
        pearl: 'Süt çocukluğu döneminden sonra en sık görülen siyanotik kalp hastalığıdır; nöbet sırasında infundibular spazm arttığı için üfürüm azalır veya kaybolur.',
        trapFalse: 'hipersiyanotik nöbet sırasında sağ ventrikül çıkış yolundaki üfürüm şiddetlenir ve grafide kardan adam kalbi görülür',
        trapHighlight: 'üfürüm şiddetlenir ve grafide kardan adam kalbi görülür',
      },
      {
        name: 'Büyük arter transpozisyonu',
        target: 'Ventriküloarteriyel diskordans sonucu aortun sağ ventrikülden, pulmoner arterin sol ventrikülden çıkması',
        hallmark: 'Doğumdan sonraki ilk saatlerde ağır siyanoz, hiperoksi testine yanıtsızlık ve grafide yan yatmış yumurta (egg-on-a-string) kalp',
        vignette:
          'Diyabetik annenin term doğan 4100 gram erkek bebeğinde doğumdan 2 saat sonra %100 oksijenle düzelmeyen ağır santral siyanoz gelişiyor. Muayenede üfürüm duyulmuyor, S2 tek ve serttir. Akciğer grafisinde üst mediastenin dar olduğu ve kalbin yan yatmış yumurta görünümü aldığı saptanıyor',
        clues: ['Diyabetik annenin term doğan', '%100 oksijenle düzelmeyen ağır santral siyanoz', 'yan yatmış yumurta görünümü'],
        management: 'Acil PGE1 infüzyonu ve Rashkind balon atriyal septostomi sonrası ilk 2 hafta içinde arteriyel switch (Jatene) operasyonu',
        pearl: 'Yenidoğan döneminde en sık semptom veren siyanotik kalp hastalığıdır; paralel dolaşım nedeniyle ASD, VSD veya PDA olmadan yaşam mümkün değildir.',
        trapFalse: 'ekokardiyografi beklenmeden acil indometazin başlanarak duktus arteriyozus kapatılmalıdır',
        trapHighlight: 'indometazin başlanarak duktus arteriyozus kapatılmalıdır',
      },
      {
        name: 'Triküspit atrezisi',
        target: 'Triküspit kapağın konjenital agenezisi nedeniyle sağ atriyumdan sağ ventriküle kan geçişinin olmaması ve sağ ventrikül hipoplazisi',
        hallmark: 'Doğumdan itibaren siyanoz ile birlikte EKG’de sol aks sapması ve sol ventrikül hipertrofisi bulunması',
        vignette:
          'Doğumdan hemen sonra siyanoz gelişen ve tek S2 duyulan term yenidoğanda çekilen EKG’de QRS aksının -45 derece (sol aks sapması) olduğu ve sol ventrikül hipertrofisi bulguları bulunduğu görülüyor. Ekokardiyografide sağ atriyum ile hipoplastik sağ ventrikül arasında kapak açıklığı saptanmıyor',
        clues: ['Doğumdan hemen sonra siyanoz', 'QRS aksının -45 derece (sol aks sapması)', 'sol ventrikül hipertrofisi'],
        management: 'Duktus bağımlı pulmoner akım için PGE1 infüzyonu, ardından aşamalı Glenn ve Fontan palyatif cerrahileri',
        pearl: 'Siyanotik bir yenidoğanda EKG’de sol aks sapması ve sol ventrikül hakimiyeti saptanması bu anomali için neredeyse patognomoniktir.',
        trapFalse: 'EKG’de belirgin sağ aks sapması ve sağ ventrikül hipertrofisi görülmesi tanısaldır',
        trapHighlight: 'belirgin sağ aks sapması ve sağ ventrikül hipertrofisi görülmesi',
      },
      {
        name: 'Total pulmoner venöz dönüş anomalisi',
        target: 'Tüm pulmoner venlerin sol atriyum yerine sağ atriyuma veya sistemik venöz sisteme açılması',
        hallmark: 'Suprakardiyak tipte akciğer grafisinde kardan adam (snowman) görünümü, infradiyafragmatik tipte ağır pulmoner venöz ödem',
        vignette:
          '4 aylık siyanotik ve hafif takipneik bebekte sağ atriyum ve sağ ventrikül büyümesi saptanıyor. Akciğer grafisinde genişlemiş vertikal ven ve süperior vena kavaya bağlı üst mediastinal genişlemenin kalp gölgesiyle birlikte "sekiz rakamı / kardan adam" silueti oluşturduğu izleniyor',
        clues: ['4 aylık siyanotik', 'genişlemiş vertikal ven', 'sekiz rakamı / kardan adam silueti'],
        management: 'Cerrahi olarak pulmoner venöz konfluens ile sol atriyum arasında anastomoz kurulması (obstrüktif tipte acil cerrahi)',
        pearl: 'İnfradiyafragmatik (obstrüktif) tip yenidoğanda normal kalp boyutuna rağmen beyaz akciğer (ağır pulmoner ödem) ve ağır siyanoz ile acil cerrahi gerektirir.',
        trapFalse: 'sağdan sola şant olmadığı için siyanoza yol açmaz ve yalnızca izlemle kendiliğinden düzelir',
        trapHighlight: 'siyanoza yol açmaz ve yalnızca izlemle kendiliğinden düzelir',
      },
      {
        name: 'Trunkus arteriyozus',
        target: 'Embriyonik trunkusun aort ve pulmoner artere bölünememesi sonucu tek arteriyel kök ve geniş VSD oluşumu',
        hallmark: 'Tek ve şiddetli S2, erken kalp yetmezliği, hafif siyanoz ve DiGeorge sendromu (22q11.2 delesyonu) ile sık birliktelik',
        vignette:
          'Hipokalsemik tetani ve timus gölgesi yokluğu saptanan 3 haftalık bebekte hızlı nefes alma, erken diyastolik üfürüm ve tek, klikli ikinci kalp sesi duyuluyor. Ekokardiyografide geniş VSD üzerinde tek bir semilunar kapak ve buradan çıkan tek büyük damar kökü saptanıyor',
        clues: ['Hipokalsemik tetani ve timus gölgesi yokluğu', 'tek, klikli ikinci kalp sesi', 'tek bir semilunar kapak'],
        management: 'Kalp yetmezliği stabilizasyonu sonrası ilk aylarda VSD kapatılması ve sağ ventrikülden pulmoner artere kondüit yerleştirilmesi (Rastelli)',
        pearl: 'DiGeorge sendromu olan bir bebekte en sık beklenen konotrunkal kalp anomalilerinden biri olup hem sistemik hem pulmoner dolaşım tek kökten beslenir.',
        trapFalse: 'akciğer kan akımı her zaman ileri derecede azalmıştır ve kalp yetmezliği gelişmez',
        trapHighlight: 'akciğer kan akımı her zaman ileri derecede azalmıştır ve kalp yetmezliği gelişmez',
      },
    ],
  },

  // 7. Pediatrik Edinsel Kalp Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Edinsel Kalp Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Akut romatizmal ateş',
        target: 'Grup A beta-hemolitik streptokok farenjiti sonrası antikorların kalp, eklem ve beyinle çapraz reaksiyonu (Tip II aşırı duyarlılık)',
        hallmark: 'Modifiye Jones majör kriterleri (kardit, gezici poliartrit, Sydenham koresi, eritema marginatum, subkutan nodül) ve Aschoff cisimcikleri',
        vignette:
          '3 hafta önce tedavi edilmemiş boğaz ağrısı geçiren 10 yaşındaki erkek çocuk önce sağ dizinde, ardından sol ayak bileğinde gelişen ağrı ve şişlikle başvuruyor. Muayenede apikal bölgede koltuk altına yayılan pansistolik üfürüm, gövdede ortası soluk harita benzeri döküntü ve yüksek ASO titresi saptanıyor',
        clues: ['3 hafta önce tedavi edilmemiş boğaz ağrısı', 'önce sağ dizinde, ardından sol ayak bileğinde', 'koltuk altına yayılan pansistolik üfürüm'],
        management: 'Benzatin penisilin G ile streptokok eradikasyonu, artrit/kardit için salisilat veya kortikosteroid ve uzun süreli sekonder penisilin profilaksisi',
        pearl: 'En sık tutulan kapak mitral kapak (akut dönemde mitral yetmezlik, kronikte mitral stenoz) olup Sydenham koresi tek başına tanı koydurabilir.',
        trapFalse: 'impetigo gibi streptokokal cilt enfeksiyonları sonrasında da farenjit ile aynı sıklıkta gelişir',
        trapHighlight: 'streptokokal cilt enfeksiyonları sonrasında da farenjit ile aynı sıklıkta gelişir',
      },
      {
        name: 'Kawasaki hastalığı',
        target: 'Orta çaplı arterleri ve özellikle koroner arterleri tutan immün aracılı akut nekrotizan sistemik vaskülit',
        hallmark: 'En az 5 gün süren ateşle birlikte bilateral non-pürülan konjonktivit, çilek dili, el-ayak ödemi, polimorf döküntü ve tek taraflı servikal LAP',
        vignette:
          '6 gündür düşmeyen yüksek ateşi olan 2 yaşındaki çocukta her iki gözde akıntısız kızarıklık, kırmızı çatlak dudaklar, çilek dili, sağ boyunda 2 cm tek lenfadenopati ve el sırtlarında sert ödem saptanıyor. Laboratuvarda CRP yüksekliği, lökositoz ve 2. haftada trombositoz görülüyor',
        clues: ['6 gündür düşmeyen yüksek ateş', 'akıntısız kızarıklık, kırmızı çatlak dudaklar', 'el sırtlarında sert ödem'],
        management: 'İlk 10 gün içinde yüksek doz intravenöz immünglobulin (2 g/kg IVIG) ve yüksek doz aspirin tedavisi',
        pearl: 'Gelişmiş ülkelerde çocukluk çağında edinsel kalp hastalıklarının en sık nedenidir; IVIG verilmezse %20-25 oranında koroner arter anevrizması gelişir.',
        trapFalse: 'Reye sendromu riski nedeniyle tüm olgularda aspirin kesinlikle kontrendikedir',
        trapHighlight: 'aspirin kesinlikle kontrendikedir',
      },
      {
        name: 'Viral miyokardit',
        target: 'Coxsackie B başta olmak üzere virüslerin doğrudan miyosit sitolizi ve immün aracılı miyokard inflamasyonu',
        hallmark: 'Yakın viral enfeksiyon sonrası ateşle orantısız taşikardi, S3 gallop ritmi, düşük voltajlı EKG ve troponin yüksekliği',
        vignette:
          '10 gün önce hafif üst solunum yolu enfeksiyonu geçiren 4 yaşındaki çocuk halsizlik, solukluk ve hızlı nefes alma ile acile getiriliyor. Ateşi 37.1°C olmasına rağmen kalp hızı 168/dk, kan basıncı düşük, dinlemekle S3 gallop ve akciğer bazallerinde raller duyuluyor; grafide kardiyomegali, kanda troponin I belirgin yüksek bulunuyor',
        clues: ['10 gün önce hafif üst solunum yolu enfeksiyonu', 'Ateşi 37.1°C olmasına rağmen kalp hızı 168/dk', 'S3 gallop ve troponin I belirgin yüksek'],
        management: 'Yatak istirahati, oksijen, diüretik ve inotropik destekle kalp yetmezliği yönetimi; ağır olgularda IVIG ve mekanik dolaşım desteği',
        pearl: 'Çocuklarda ateş düştüğü halde dinlenme taşikardisinin sürmesi, boğuk kalp sesleri ve EKG’de düşük QRS voltajı tanıyı düşündürmelidir.',
        trapFalse: 'en sık etkeni grup A beta-hemolitik streptokoktur ve tedavisinde yüksek doz steroid ilk tercihtir',
        trapHighlight: 'en sık etkeni grup A beta-hemolitik streptokoktur',
      },
      {
        name: 'Akut perikardit',
        target: 'Viral enfeksiyon, otoimmünite veya üremi sonrası perikard yapraklarının inflamasyonu ve eksüdatif sıvı birikimi',
        hallmark: 'Öne eğilmekle azalan keskin göğüs ağrısı, perikardiyal frotman ve EKG’de yaygın konkav ST elevasyonu ile PR depresyonu',
        vignette:
          '9 yaşındaki çocuk sırtüstü yatınca artan, oturup öne eğilince hafifleyen batıcı göğüs ağrısıyla başvuruyor. Muayenede sol sternal kenarda solunumdan bağımsız sürtünme sesi duyuluyor. EKG’de aVR dışındaki tüm derivasyonlarda açıklığı yukarı bakan ST segment yükselmesi ve PR çökmesi görülüyor',
        clues: ['oturup öne eğilince hafifleyen batıcı göğüs ağrısı', 'solunumdan bağımsız sürtünme sesi', 'açıklığı yukarı bakan ST segment yükselmesi ve PR çökmesi'],
        management: 'Altta yatan nedenin tedavisi, NSAİİ (ibuprofen) ve kolşisin; kardiyak tamponad gelişirse acil perikardiyosentez',
        pearl: 'Kardiyak tamponad geliştiğinde Beck triyadı (hipotansiyon, jugüler venöz dolgunluk, derinden gelen kalp sesleri) ve pulsus paradoksus (>10 mmHg inspiratuvar düşüş) görülür.',
        trapFalse: 'EKG’de tek bir koroner arter bölgesine sınırlı konveks ST elevasyonu ve resiprokal ST depresyonu tipiktir',
        trapHighlight: 'tek bir koroner arter bölgesine sınırlı konveks ST elevasyonu ve resiprokal ST depresyonu tipiktir',
      },
      {
        name: 'Supraventriküler taşikardi',
        target: 'Atriyoventriküler düğüm veya aksesuar ileti yolu üzerinden gelişen reentry taşiaritmisi',
        hallmark: 'Bebekte >220/dk, çocukta >180/dk düzenli dar QRS taşikardisi ve seçilemeyen P dalgaları',
        vignette:
          '2 aylık bebek saatlerdir süren huzursuzluk, solukluk ve emmeme nedeniyle getiriliyor. Monitörde kalp hızı 260/dk, ritim tamamen düzenli, QRS kompleksleri dar ve P dalgaları seçilemiyor. Bebeğin perfüzyonu ve kan basıncı şu an stabildir',
        clues: ['kalp hızı 260/dk', 'ritim tamamen düzenli, QRS kompleksleri dar', 'P dalgaları seçilemiyor'],
        management: 'Stabil hastada önce vagal manevra (bebekte yüze buz torbası), ardından hızlı IV adenozin; şok bulguları varsa acil senkronize kardiyoversiyon',
        pearl: 'Çocukluk çağında acile en sık başvuru nedeni olan semptomatik taşiaritmi olup, sinüs taşikardisinden farklı olarak hız solunumla veya ağlamayla değişmez.',
        trapFalse: 'hemodinamik olarak stabil olgularda ilk basamak olarak hemen defibrile edilmelidir',
        trapHighlight: 'stabil olgularda ilk basamak olarak hemen defibrile edilmelidir',
      },
    ],
  },

  // 8. Çocukluk Çağı Viral Döküntülü Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Çocukluk Çağı Viral Döküntülü Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2021',
    entities: [
      {
        name: 'Kızamık',
        target: 'Paramiksovirüs ailesinden Morbillivirus enfeksiyonu ve T-hücre aracılı mukokütanöz immün yanıt',
        hallmark: 'Öksürük-koriza-konjonktivit (3C) prodromu, yanak mukozasında Koplik lekeleri ve saç çizgisinden aşağı yayılan döküntü',
        vignette:
          'Aşısız 4 yaşındaki çocuk 4 gündür yüksek ateş, şiddetli öksürük, burun akıntısı ve gözlerde kızarıklık sonrası gelişen döküntüyle getiriliyor. Muayenede alt molar dişler hizasında yanak mukozasında beyaz-mavi kum tanesi gibi lekeler ve kulak arkasından başlayıp gövdeye doğru birleşerek inen makülopapüler döküntü görülüyor',
        clues: ['şiddetli öksürük, burun akıntısı ve gözlerde kızarıklık', 'yanak mukozasında beyaz-mavi kum tanesi gibi lekeler', 'kulak arkasından başlayıp gövdeye doğru birleşerek inen'],
        management: 'Destekleyici tedaviye ek olarak ağır olgularda iki gün yüksek doz A vitamini verilmesi ve temaslılara ilk 72 saatte aşı / 6 günde IVIG',
        pearl: 'En sık ölüm nedeni sekonder bakteriyel pnömoni, yıllar sonra gelişen geç ve ölümcül SSS komplikasyonu ise subakut sklerozan panensefalittir (SSPE).',
        trapFalse: 'ateşin aniden düşmesinin hemen ardından gövdeden başlayıp yüze yayılan kısa süreli döküntü görülür',
        trapHighlight: 'ateşin aniden düşmesinin hemen ardından gövdeden başlayıp yüze yayılan',
      },
      {
        name: 'Kızamıkçık',
        target: 'Togavirüs ailesinden tek sarmallı RNA virüsü Rubivirus enfeksiyonu',
        hallmark: 'Posterior auriküler ve suboksipital ağrılı lenfadenopati ile 3 gün süren hafif pembe makülopapüler döküntü',
        vignette:
          'Hafif subfebril ateşi olan 7 yaşındaki çocukta yüzünden başlayıp aynı gün içinde gövdeye yayılan ve birleşme eğilimi göstermeyen pembe döküntü ortaya çıkıyor. Muayenede yumuşak damakta peteşiler ve ense kökü ile kulak arkasında belirgin hassas lenf bezleri palpe ediliyor; döküntü 3. günde iz bırakmadan kayboluyor',
        clues: ['birleşme eğilimi göstermeyen pembe döküntü', 'yumuşak damakta peteşiler', 'ense kökü ile kulak arkasında belirgin hassas lenf bezleri'],
        management: 'Semptomatik tedavi, hamile kadınlardan izolasyon ve doğumsal anomalileri önlemek için rutin çocukluk aşısı ile korunma',
        pearl: 'Klinik seyri çok hafif olmasına karşın gebe kadına bulaştığında ağır teratojenik etki göstermesi halk sağlığı açısından en kritik özelliğidir.',
        trapFalse: 'yanak mukozasında Koplik lekeleri patognomoniktir ve sıklıkla SSPE ile sonuçlanır',
        trapHighlight: 'Koplik lekeleri patognomoniktir ve sıklıkla SSPE ile sonuçlanır',
      },
      {
        name: 'Eritema enfeksiyozum',
        target: 'Parvovirus B19’un P antijeni (globozid) üzerinden eritroid öncül hücreleri enfekte etmesi',
        hallmark: 'Yanaklarda tokatlanmış yüz kızarıklığı ve ekstremitelerde dantelimsi (retiküler) döküntü',
        vignette:
          '8 yaşındaki okul çocuğu ateşsiz genel durumu iyiyken her iki yanağında parlak kırmızı, ağız çevresini koruyan kızarıklıkla getiriliyor. İki gün sonra kol ve bacakların ekstansör yüzlerinde ortası solarak dantel görünümü alan, banyo veya güneşle belirginleşen döküntü gelişiyor',
        clues: ['ateşsiz genel durumu iyiyken', 'her iki yanağında parlak kırmızı, ağız çevresini koruyan kızarıklık', 'dantel görünümü alan'],
        management: 'Kendini sınırlayan tablo olduğundan destekleyici izlem; kronik hemolitik anemili hastalarda gelişen aplastik krizde eritrosit transfüzyonu',
        pearl: 'Döküntü ortaya çıktığında viremi dönemini geçmiş olduğundan hasta artık bulaştırıcı değildir; orak hücre anemisi gibi hastalıklarda geçici aplastik krize yol açar.',
        trapFalse: 'döküntü evresinde bulaştırıcılığı en yüksek düzeydedir ve sıkı solunum izolasyonu gerekir',
        trapHighlight: 'döküntü evresinde bulaştırıcılığı en yüksek düzeydedir',
      },
      {
        name: 'Roseola infantum',
        target: 'Human herpesvirus 6 (HHV-6) enfeksiyonu ve T-lenfotropik viremi',
        hallmark: '3-5 gün süren yüksek ateşin aniden düşmesini takiben gövdeden başlayan makülopapüler döküntü',
        vignette:
          '11 aylık bebek 4 gündür 39.5°C’ye varan yüksek ateşle takip edilirken genel durumunun şaşırtıcı derecede iyi olduğu görülüyor. 5. günde ateş tamamen normale döndüğü gün boyun ve gövdede pembe makülopapüler döküntüler beliriyor ve 2 günde kayboluyor',
        clues: ['11 aylık bebek', 'genel durumunun şaşırtıcı derecede iyi', 'ateş tamamen normale döndüğü gün boyun ve gövdede'],
        management: 'Ateş kontrolü ve hidrasyon sağlayan destekleyici bakım (immünkompromize değilse antiviral gerekmez)',
        pearl: '6 ay ile 2 yaş arasındaki çocuklarda yüksek ateş döneminde febril konvülziyonu en sık tetikleyen viral enfeksiyondur.',
        trapFalse: 'döküntü ateşin en yüksek olduğu dönemde yüzden başlayarak ayaklara doğru yayılır',
        trapHighlight: 'ateşin en yüksek olduğu dönemde yüzden başlayarak ayaklara doğru yayılır',
      },
      {
        name: 'Suçiçeği',
        target: 'Varisella-zoster virüsünün (HHV-3) primer viremi ile epidermis bazal hücrelerini tutması',
        hallmark: 'Saçlı deriyi de tutan, aynı anda makül, papül, vezikül ve krutların bir arada bulunduğu kaşıntılı polimorf döküntü',
        vignette:
          '6 yaşındaki çocukta hafif ateş sonrası gövdeden başlayıp yüze ve saçlı deriye yayılan çok kaşıntılı döküntüler gelişiyor. Muayenede kırmızı taban üzerinde ince duvarlı damla şeklinde veziküllerin yanında eski kurutlanmış lezyonların aynı anda bulunduğu görülüyor',
        clues: ['saçlı deriye yayılan çok kaşıntılı döküntüler', 'ince duvarlı damla şeklinde veziküller', 'eski kurutlanmış lezyonların aynı anda bulunduğu'],
        management: 'Sağlıklı çocukta semptomatik kaşıntı giderici bakım; immün yetmezlik, yenidoğan veya adolesanda asiklovir ve temaslıda VZIG/aşı',
        pearl: 'Ateş düşürücü olarak aspirin kullanılması Reye sendromuna yol açabileceğinden kesinlikle parasetamol tercih edilir.',
        trapFalse: 'döküntülerin tamamı aynı evrededir, avuç içi ile ayak tabanını tutar ve saçlı deriyi korur',
        trapHighlight: 'tamamı aynı evrededir, avuç içi ile ayak tabanını tutar ve saçlı deriyi korur',
      },
    ],
  },

  // 9. Bakteriyel Pediatrik Enfeksiyonlar
  {
    branchId: 'pediatri',
    subTopic: 'Bakteriyel Pediatrik Enfeksiyonlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Yüksek Verimli Vaka',
    entities: [
      {
        name: 'Kızıl',
        target: 'Grup A streptokokların lizojenik faj aracılı ürettiği pirojenik eritrojenik ekzotoksin',
        hallmark: 'Zımpara kağıdı dokusunda yaygın eritrodermik döküntü, Pastia çizgileri, ağız çevresi solukluk ve çilek dili',
        vignette:
          '7 yaşındaki çocuk ani başlayan ateş, boğaz ağrısı ve kusma ardından gelişen döküntü ile getiriliyor. Muayenede tonsillofarenjit, beyaz-kırmızı çilek dili, ağız çevresinde solukluk, dirsek içi kıvrımlarında koyu kırmızı peteşiyal çizgilenmeler ve deride zımpara kağıdı pürtüklüğü saptanıyor',
        clues: ['tonsillofarenjit', 'ağız çevresinde solukluk', 'zımpara kağıdı pürtüklüğü'],
        management: '10 gün oral penisilin V (veya amoksisilin) ya da tek doz intramusküler benzatin penisilin G tedavisi',
        pearl: 'İyileşme döneminde parmak uçlarından başlayan belirgin deskuamasyon görülür; erken antibiyotik akut romatizmal ateşi önler.',
        trapFalse: 'etkeni Staphylococcus aureus ekzotoksinidir ve tedavisinde antibiyotik kullanılmaz',
        trapHighlight: 'Staphylococcus aureus ekzotoksinidir ve tedavisinde antibiyotik kullanılmaz',
      },
      {
        name: 'Boğmaca',
        target: 'Bordetella pertussis’in trakeal silier epiteli felç etmesi ve pertussis toksini ile Gi proteinini inhibe ederek lenfositoz yapması',
        hallmark: 'İnspiratuvar iç çekme (whoop) ile sonlanan öksürük nöbetleri, öksürük sonrası kusma ve belirgin lökositoz/lenfositoz',
        vignette:
          'Aşısız 4 aylık bebekte iki haftalık hafif burun akıntısını takiben giderek artan, ardışık öksürüklerle yüzünün morardığı ve sonunda derin bir sesli nefes alma ile kustuğu ataklar başlıyor. Tam kan sayımında lökosit 38.000/mm³ ve %78 matür lenfosit hakimiyeti saptanıyor',
        clues: ['ardışık öksürüklerle yüzünün morardığı', 'derin bir sesli nefes alma ile kustuğu', '%78 matür lenfosit hakimiyeti'],
        management: 'Azitromisin (veya eritromisin/klaritromisin) ile antimikrobiyal tedavi ve tüm yakın ev içi temaslılara kemoprofilaksi',
        pearl: 'Küçük süt çocuklarında klasik öksürük nöbeti yerine hayatı tehdit eden apne atakları tek başvuru bulgusu olabilir.',
        trapFalse: 'tam kan sayımında belirgin nötropeni ile lenfopeni görülür ve ilk seçenek seftriakson kullanılır',
        trapHighlight: 'belirgin nötropeni ile lenfopeni görülür ve ilk seçenek seftriakson kullanılır',
      },
      {
        name: 'Difteri',
        target: 'Corynebacterium diphtheriae ekzotoksininin EF-2’yi ADP-ribozilleyerek protein sentezini durdurması',
        hallmark: 'Tonsil ve farenkste kaldırıldığında kanayan gri psödomembran, boğa boynu ödemi ve miyokardit',
        vignette:
          'Göçmen ve aşısız 6 yaşındaki çocukta hafif ateş, boğaz ağrısı ve boyunda hızla şişme gelişiyor. Muayenede yumuşak damağı örten kirli gri renkte sıkı yapışık membran ve dokununca kanama izleniyor; yaygın servikal lenfadenopati ve ödem boynu kalınlaştırmış durumda',
        clues: ['kirli gri renkte sıkı yapışık membran', 'dokununca kanama', 'yaygın servikal lenfadenopati ve ödem'],
        management: 'Kültür sonucu beklenmeden acil at kaynaklı antitoksin verilmesi ve eş zamanlı penisilin G veya eritromisin tedavisi',
        pearl: 'En önemli ölüm nedeni ekzotoksine bağlı akut miyokardit ve AV bloklar ile psödomembranın hava yolunu tıkamasıdır; iyileşmede damak felci tipiktir.',
        trapFalse: 'yalnızca antibiyotik tedavisi yeterlidir ve antitoksin yalnızca nörolojik bulgu varsa verilir',
        trapHighlight: 'antitoksin yalnızca nörolojik bulgu varsa verilir',
      },
      {
        name: 'Epiglottit',
        target: 'Kapsüllü Haemophilus influenzae tip b enfeksiyonuna bağlı supraglottik ödem ve hızlı hava yolu obstrüksiyonu',
        hallmark: 'Yüksek ateş, toksik görünüm, salya akması, tripod pozisyonu ve yan boyun grafisinde başparmak işareti',
        vignette:
          'Aşısız 3 yaşındaki çocuk birkaç saat içinde yükselen 39.8°C ateş, boğuk ses, yutamama ve ağzından sürekli salya akması şikayetiyle getiriliyor. Çocuğun oturup öne eğilerek çenesini ileri uzattığı ve inspiratuvar stridoru olduğu görülüyor',
        clues: ['ağzından sürekli salya akması', 'oturup öne eğilerek çenesini ileri uzattığı', 'inspiratuvar stridoru'],
        management: 'Ağız içi muayene veya ajitasyon yaratılmadan ameliyathanede kontrollü entübasyon ve intravenöz seftriakson',
        pearl: 'Abeslang ile boğaz muayenesi yapılmaya çalışılması ani laringospazm ve tam hava yolu tıkanmasına yol açabileceği için kesinlikle kontrendikedir.',
        trapFalse: 'ilk tanı adımı olarak abeslang ile orofarenks muayenesi yapılmalı ve rasemik epinefrin verilmelidir',
        trapHighlight: 'abeslang ile orofarenks muayenesi yapılmalı',
      },
      {
        name: 'Neonatal tetanoz',
        target: 'Clostridium tetani’nin ürettiği tetanospazminin inhibitör internöronlarda glisin ve GABA salınımını bloke etmesi',
        hallmark: 'Göbek kesiminden 3-14 gün sonra başlayan emmeme, trismus, risus sardonicus ve uyaranla tetiklenen opistotonus',
        vignette:
          'Evde steril olmayan bıçakla göbek kordonu kesilen ve annesi aşısız olan 7 günlük yenidoğan son 24 saattir memeyi kavrayamama, çene kilitlenmesi ve sesle tetiklenen tüm vücut kasılmalarıyla getiriliyor. Muayenede alında kırışma, dudak kenarlarında kasılma ve sırtın yay gibi gerildiği izleniyor',
        clues: ['steril olmayan bıçakla göbek kordonu kesilen', 'çene kilitlenmesi', 'sesle tetiklenen tüm vücut kasılmaları'],
        management: 'İnsan tetanoz immünglobulini (TIG), IV metronidazol, benzodiyazepinlerle spazm kontrolü ve karanlık/sessiz yoğun bakım izlemi',
        pearl: 'Gebelikte anneye uygulanan tetanoz toksoidi (Td) aşılaması transplasental IgG geçişi sayesinde yenidoğanı tamamen korur.',
        trapFalse: 'toksin periferik sinir ucunda asetilkolin salınımını bloke ederek gevşek (flask) paralizi oluşturur',
        trapHighlight: 'asetilkolin salınımını bloke ederek gevşek (flask) paralizi oluşturur',
      },
    ],
  },

  // 10. Bağışıklama ve Aşı Tipleri
  {
    branchId: 'pediatri',
    subTopic: 'Bağışıklama ve Aşı Tipleri',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'BCG aşısı',
        target: 'Canlı atenüe Mycobacterium bovis suşu ile hücresel Th1 bağışıklığının uyarılması',
        hallmark: 'Sol deltoid bölgeye intradermal uygulama, papül-ülserasyon sonrası skar oluşumu ve ağır hücresel immün yetmezlikte dissemine hastalık riski',
        vignette:
          'Ülkemizde rutin bağışıklama takviminde 2. ayını dolduran sağlıklı bebeğe sol omuz bölgesine deri içine uygulanan canlı bakteriyel aşının primer amacı tartışılıyor. Bu aşının çocuklarda en ölümcül formlar olan menenjit ve miliyer yayılıma karşı koruyuculuğunun yüksek olduğu vurgulanıyor',
        clues: ['2. ayını dolduran', 'deri içine uygulanan canlı bakteriyel aşı', 'menenjit ve miliyer yayılıma karşı koruyuculuğunun yüksek'],
        management: '2. ayda sol deltoid kasa intradermal tek doz uygulanması (ağır kombine immün yetmezlik şüphesinde kesinlikle ertelenir)',
        pearl: 'Akciğer tüberkülozunu önlemeden ziyade çocukluk çağının ölümcül komplikasyonları olan miliyer tüberküloz ve tüberküloz menenjitinden korur.',
        trapFalse: 'gluteal kasa derin intramusküler uygulanır ve ağır kombine immün yetmezlikli bebeklerde güvenle yapılır',
        trapHighlight: 'gluteal kasa derin intramusküler uygulanır ve ağır kombine immün yetmezlikli bebeklerde güvenle yapılır',
      },
      {
        name: 'KKK aşısı',
        target: 'Üç farklı canlı atenüe viral ajanın kombine edildiği immünizasyon',
        hallmark: '12. ayda subkutan/IM uygulama, hafif yumurta alerjisinde güvenle yapılabilmesi ancak gebelik ve ağır immün yetmezlikte kontrendike olması',
        vignette:
          '12 aylık sağlıklı çocuğa ilk dozu uygulanan canlı viral kombine aşı sonrası 7-10. günde hafif ateş, geçici döküntü ve hafif parotis şişliği görülebileceği aileye anlatılıyor. Ailede hafif yumurta alerjisi öyküsü olmasına rağmen aşının güvenle yapılabileceği belirtiliyor',
        clues: ['12 aylık sağlıklı çocuğa', '7-10. günde hafif ateş, geçici döküntü', 'hafif yumurta alerjisi öyküsü olmasına rağmen'],
        management: '12. ay ve 48. ayda iki doz uygulanması; HIV pozitif ancak CD4 sayısı korunmuş asemptomatik çocuklarda yapılabilmesi',
        pearl: 'Yumurta alerjisi olan çocuklarda dahi anafilaksi riski son derece düşük olduğundan standart poliklinik koşullarında güvenle uygulanabilir.',
        trapFalse: 'inaktif bir aşıdır ve yumurta alerjisi bulunan tüm çocuklarda kesin olarak kontrendikedir',
        trapHighlight: 'inaktif bir aşıdır ve yumurta alerjisi bulunan tüm çocuklarda kesin olarak kontrendikedir',
      },
      {
        name: 'Rotavirüs aşısı',
        target: 'Canlı atenüe oral viral aşı ile gastrointestinal mukozal IgA yanıtı oluşturulması',
        hallmark: 'İlk dozun 15. haftadan önce başlatılması gerekliliği ve invajinasyon öyküsü veya SCID varlığında kontrendikasyon',
        vignette:
          '2 aylık bebeğin ailesi akut sulu ishal etkenlerinden birine karşı ağızdan damla şeklinde uygulanan aşıyı yaptırmak istiyor. Hekim bu aşının ilk dozunun en geç 14 hafta 6 günlükken başlanması ve 8 aydan önce tamamlanması gerektiğini, ayrıca geçmişte bağırsak düğümlenmesi geçirenlere uygulanamayacağını açıklıyor',
        clues: ['ağızdan damla şeklinde', 'en geç 14 hafta 6 günlükken başlanması', 'bağırsak düğümlenmesi geçirenlere uygulanamayacağını'],
        management: '2. ve 4. aylarda (veya 3 doz şemada 2-4-6. aylarda) oral uygulama ve yaş sınırlarına kesin uyum',
        pearl: 'Ağır kombine immün yetmezlik (SCID) olgularında kronik uzamış ishal ve aşı suşu saçılımına yol açtığından mutlak kontrendikedir.',
        trapFalse: 'ilk dozu 12. ayda intramusküler olarak yapılır ve geç başlanmasında yaş sınırı yoktur',
        trapHighlight: '12. ayda intramusküler olarak yapılır ve geç başlanmasında yaş sınırı yoktur',
      },
      {
        name: 'Konjuge pnömokok aşısı',
        target: 'Bakteriyel kapsül polisakkaridinin taşıyıcı proteine bağlanarak T-hücre bağımlı immün bellek oluşturulması',
        hallmark: '2 yaş altındaki bebeklerde dahi güçlü IgG ve bellek yanıtı sağlaması, nazofaringeal taşıyıcılığı azaltması',
        vignette:
          '2, 4 ve 12. aylarda uygulanan aşıda bakterinin polisakkarit kapsül antijeninin taşıyıcı bir toksoid proteine kovalent bağlandığı görülüyor. Bu yapı sayesinde T-lenfosit yardımı sağlanarak 2 yaş altı bebeklerde koruyucu antikor geliştiği ve orak hücreli anemi hastalarında sepsisten koruduğu biliniyor',
        clues: ['polisakkarit kapsül antijeninin taşıyıcı bir toksoid proteine kovalent bağlandığı', '2 yaş altı bebeklerde koruyucu antikor', 'orak hücreli anemi hastalarında sepsisten koruduğu'],
        management: '2, 4 ve 12. aylarda intramusküler rutin uygulama; yüksek riskli asplenik çocuklara 2 yaşından sonra 23 valanlı polisakkarit aşı ile ek destek',
        pearl: 'Saf polisakkarit aşılar T-hücre bağımsız oldukları için 2 yaş altında etkisizdir; protein konjugasyonu bu sınırı ortadan kaldırır.',
        trapFalse: 'T-hücre bağımsız yanıt oluşturduğu için 2 yaş altındaki süt çocuklarında antikor yanıtı oluşturamaz',
        trapHighlight: '2 yaş altındaki süt çocuklarında antikor yanıtı oluşturamaz',
      },
      {
        name: 'Aselüler boğmaca aşısı',
        target: 'Saflaştırılmış bakteriyel toksin ve adezin antijenlerini içeren alt birim inaktif immünizasyon',
        hallmark: 'Tam hücreli aşıya göre ateş ve febril nöbet yan etkisinin az olması, ancak önceki dozda 7 gün içinde ensefalopati gelişiminin kontrendikasyon olması',
        vignette:
          '5’li karma aşı içeriğinde yer alan ve bakterinin tüm hücresi yerine yalnızca pertussis toksoidi ile filamentoz hemaglutinin gibi saflaştırılmış antijenlerini barındıran bileşen değerlendiriliyor. Bir önceki dozdan sonraki 4 gün içinde açıklanamayan koma ve ensefalopati gelişen bir çocukta sonraki doz için kontrendikasyon olduğu belirleniyor',
        clues: ['saflaştırılmış antijenlerini barındıran', '4 gün içinde açıklanamayan koma ve ensefalopati', 'sonraki doz için kontrendikasyon'],
        management: 'Bebeklikte 2-4-6-18. aylarda DTaP ve ergenlik/gebelikte Tdap formunun uygulanması; ensefalopati gelişenlerde bileşenin çıkarılması',
        pearl: 'Önceki dozdan sonraki 48 saatte >40.5°C ateş, hipotonik-hiporesponsif atak veya 3 saat üzeri durdurulamayan ağlama önlem gerektirirken; 7 gün içinde ensefalopati ve ilerleyici nörolojik hastalık kesin kontrendikasyondur.',
        trapFalse: '38.2°C hafif ateş ve enjeksiyon yerinde kızarıklık sonraki dozlar için mutlak kontrendikasyon oluşturur',
        trapHighlight: 'sonraki dozlar için mutlak kontrendikasyon oluşturur',
      },
    ],
  },

  // 11. Kromozomal Trizomi ve Cinsiyet Anomalileri
  {
    branchId: 'pediatri',
    subTopic: 'Kromozomal Trizomi ve Cinsiyet Anomalileri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2020',
    entities: [
      {
        name: 'Down sendromu',
        target: 'Trizomi 21 (%95 mayotik ayrılmama, %4 Robertsonian translokasyon, %1 mozaik)',
        hallmark: 'Hipotoni, epikantus, yukarı çekik palpebral fissürler, tek simian çizgisi, Brushfield lekeleri ve AVSD/duodenal atrezi',
        vignette:
          '39 yaşındaki anneden doğan bebekte yaygın hipotoni, basık burun kökü, çıkık dil, iriste beyaz benekler, ellerde tek enine palmar çizgi ve ayak 1-2. parmak arası geniş aralık (sandal aralığı) saptanıyor. Doğum sonrası safralı kusma gelişen bebeğin direkt grafisinde çift kabarcık görüntüsü görülüyor',
        clues: ['yaygın hipotoni', 'iriste beyaz benekler', 'çift kabarcık görüntüsü'],
        management: 'Karyotip analizi, erken ekokardiyografi, işitme-görme taraması, yıllık TSH takibi ve atlantoaksiyel instabilite değerlendirmesi',
        pearl: 'Bu hastalarda akut megakaryoblastik lösemi (AML-M7) ve ALL riski belirgin artmıştır; erken yaşta Alzheimer nöropatolojisi gelişir.',
        trapFalse: 'en sık eşlik eden kalp hastalığı aort koarktasyonu ve en sık GİS anomalisi pilor stenozudur',
        trapHighlight: 'aort koarktasyonu ve en sık GİS anomalisi pilor stenozudur',
      },
      {
        name: 'Edwards sendromu',
        target: 'Trizomi 18 (18. kromozomun üç kopya bulunması)',
        hallmark: 'Mikrognati, çıkıntılı oksiput, yumruk sıkılı üst üste binmiş parmaklar (overlapping fingers) ve beşik taban ayak',
        vignette:
          'İleri derecede intrauterin büyüme geriliği olan yenidoğanda küçük çene, belirgin çıkıntılı oksiput, düşük yerleşimli kulaklar ve ellerde işaret parmağının orta parmak, küçük parmağın yüzük parmağı üzerine bindiği sıkılı yumruk deformitesi saptanıyor. Ayrıca kısa sternum ve VSD mevcuttur',
        clues: ['küçük çene, belirgin çıkıntılı oksiput', 'işaret parmağının orta parmak üzerine bindiği sıkılı yumruk', 'kısa sternum'],
        management: 'Karyotip doğrulaması, aileye genetik danışmanlık ve yaşam kalitesi odaklı palyatif/destekleyici yaklaşım',
        pearl: 'En sık ikinci otozomal trizomidir; bebeklerin %90’ından fazlası ilk 1 yıl içinde kaybedilir ve prenatal üçlü/dörtlü testte AFP, uE3 ve hCG’nin hepsi düşüktür.',
        trapFalse: 'prenatal üçlü tarama testinde serum hCG düzeyi belirgin olarak yüksek bulunur',
        trapHighlight: 'serum hCG düzeyi belirgin olarak yüksek bulunur',
      },
      {
        name: 'Patau sendromu',
        target: 'Trizomi 13 (13. kromozomun üç kopya bulunması)',
        hallmark: 'Holoprozensefali, mikroftalmi/anoftalmi, yarık dudak-damak, postaksiyel polidaktili ve skalp defekti (aplazi kutis)',
        vignette:
          'Doğumda ağır orta hat yüz defekti, bilateral yarık dudak-damak, çok küçük göz küreleri, her iki el ve ayakta altıncı parmak ve başın tepe noktasında zımba deliği şeklinde deri eksikliği olan bebekte kraniyal USG’de tek ventriküllü ön beyin füzyon anomalisi saptanıyor',
        clues: ['bilateral yarık dudak-damak', 'her iki el ve ayakta altıncı parmak', 'zımba deliği şeklinde deri eksikliği'],
        management: 'Karyotip analizi, ağır santral sinir sistemi ve kardiyak malformasyonlar nedeniyle aile bilgilendirmesi ve destek bakımı',
        pearl: 'Orta hat defektleri (holoprozensefali, yarık dudak-damak, siklopi) ve kafa derisinde aplazi kutis konjenita birlikteliği en ayırt edici özelliğidir.',
        trapFalse: 'zekâ gelişimi genellikle normaldir ve başlıca klinik bulgusu jinekomasti ile uzun boydur',
        trapHighlight: 'zekâ gelişimi genellikle normaldir ve başlıca klinik bulgusu jinekomasti ile uzun boydur',
      },
      {
        name: 'Turner sendromu',
        target: '45,X0 karyotipi (tek X kromozomu veya X kromozomu yapısal anomalisi)',
        hallmark: 'Yenidoğanda el-ayak sırtında lenfödem, yele boyun, kubitus valgus, streak gonadlar ve biküspit aort/aort koarktasyonu',
        vignette:
          '14 yaşındaki kız çocuğu boy kısalığı ve henüz adet görmeme şikayetiyle getiriliyor. Muayenede boyun yanlarında deri katlantısı, düşük arka saç çizgisi, geniş göğüs kafesi ile ayrık meme başları, kısa 4. metakarp ve kollarda dışa açılanma saptanıyor. FSH ve LH belirgin yüksek, pelvik USG’de ince çizgisel gonadlar görülüyor',
        clues: ['boyun yanlarında deri katlantısı', 'el-ayak veya ayrık meme başları yerine kısa 4. metakarp', 'FSH ve LH belirgin yüksek, ince çizgisel gonadlar'],
        management: 'Çocuklukta rekombinant büyüme hormonu tedavisi, ergenlikte östrojen-progesteron replasmanı ve aort koarktasyonu/biküspit aort taraması',
        pearl: 'Anne yaşıyla ilişkili değildir (%75-80 paternal seks kromozomu kaybı); en sık kalp anomalisi biküspit aort kapağı ve aort koarktasyonudur, zeka genellikle normaldir.',
        trapFalse: 'ileri anne yaşı ile güçlü ilişki gösterir ve ağır mental retardasyonla seyreder',
        trapHighlight: 'ileri anne yaşı ile güçlü ilişki gösterir ve ağır mental retardasyonla seyreder',
      },
      {
        name: 'Klinefelter sendromu',
        target: '47,XXY karyotipi (fazladan X kromozomu sonucu seminifer tübül disgenezi)',
        hallmark: 'Uzun boy (uzun bacaklar), küçük-sert testisler, jinekomasti, azoospermi ve yüksek gonadotropinler',
        vignette:
          '17 yaşındaki erkek ergen meme büyümesi ve okul başarısında hafif güçlük şikayetiyle başvuruyor. Boyu 186 cm olan hastanın kulaç mesafesinin boyundan kısa veya alt segmentinin uzun olduğu, jinekomastisi bulunduğu ve her iki testisinin <2 mL hacminde çok sert yapıda olduğu görülüyor. FSH ve LH düzeyleri yüksek saptanıyor',
        clues: ['Boyu 186 cm', 'jinekomastisi bulunduğu', 'her iki testisinin <2 mL hacminde çok sert yapıda'],
        management: 'Puberte döneminde hipogonadizm ve osteoporozu önlemek için testosteron replasman tedavisi',
        pearl: 'Erkeklerde konjenital primer hipogonadizmin en sık nedenidir; bu bireylerde meme kanseri ve ekstragonadal germ hücreli tümör riski artmıştır.',
        trapFalse: 'testisler normalden büyüktür (makroorşidizm) ve FSH ile LH düzeyleri baskılanmıştır',
        trapHighlight: 'testisler normalden büyüktür (makroorşidizm) ve FSH ile LH düzeyleri baskılanmıştır',
      },
    ],
  },

  // 12. Mikrodelesyon ve İmprinting Sendromları
  {
    branchId: 'pediatri',
    subTopic: 'Mikrodelesyon ve İmprinting Sendromları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'DiGeorge sendromu',
        target: '22q11.2 mikrodelesyonu ve 3-4. farengeal keselerin (timus ve paratiroid) gelişim kusuru',
        hallmark: 'Yenidoğanda hipokalsemik nöbetler, timik aplaziye bağlı T-hücre eksikliği ve konotrunkal kalp anomalisi',
        vignette:
          'Yaşamın 3. gününde hipokalsemiye bağlı jeneralize tonik-klonik nöbet geçiren bebekte yüksek damak yarığı, küçük çene ve konotrunkal kalp defekti saptanıyor. Akciğer grafisinde timus gölgesinin izlenmediği, periferik kanda CD3+ T lenfositlerin ve parathormonun çok düşük olduğu görülüyor',
        clues: ['hipokalsemiye bağlı jeneralize tonik-klonik nöbet', 'timus gölgesinin izlenmediği', 'CD3+ T lenfositlerin ve parathormonun çok düşük'],
        management: 'Kalsiyum ve aktif D vitamini desteği, konotrunkal kalp cerrahisi, ışınlanmış CMV-negatif kan ürünü kullanımı ve tam timik aplazide timus nakli',
        pearl: 'CATCH-22 akronimi ile hatırlanır; 22q11.2 delesyonu FISH yöntemiyle saptanır (rutin karyotipte atlanır).',
        trapFalse: 'parathormon düzeyi yüksektir ve humoral B-hücre eksikliği nedeniyle serum IgG düzeyi sıfırdır',
        trapHighlight: 'parathormon düzeyi yüksektir ve humoral B-hücre eksikliği nedeniyle serum IgG düzeyi sıfırdır',
      },
      {
        name: 'Williams sendromu',
        target: '7q11.23 bölgesinde elastin genini de içeren mikrodelesyon',
        hallmark: 'Peri (elfin) yüz görünümü, supravalvüler aort stenozu, infantil hiperkalsemi ve aşırı sosyal kokteyl parti kişiliği',
        vignette:
          '5 yaşındaki erkek çocukta geniş alın, periorbital dolgunluk, yıldız desenli (stellate) iris, kalın dudaklar ve yabancılarla aşırı sıcakkanlı, konuşkan bir kişilik dikkat çekiyor. Kalp dinlemesinde sağ 2. interkostal aralıkta sistolik ejeksiyon üfürümü ve bebeklik öyküsünde hiperkalsemi saptanıyor',
        clues: ['yıldız desenli (stellate) iris', 'yabancılarla aşırı sıcakkanlı, konuşkan bir kişilik', 'bebeklik öyküsünde hiperkalsemi'],
        management: 'Kardiyolojik takip (supravalvüler aort ve periferik pulmoner stenoz), kalsiyum ve D vitamini kısıtlaması ve özel eğitim',
        pearl: 'Elastin gen kaybı nedeniyle damar duvarı elastikiyeti bozulur ve bu durum klasik olarak supravalvüler aort darlığına yol açar.',
        trapFalse: 'en sık eşlik eden kalp lezyonu atriyal septal defekttir ve ağır hipokalsemi ile seyreder',
        trapHighlight: 'atriyal septal defekttir ve ağır hipokalsemi ile seyreder',
      },
      {
        name: 'Prader-Willi sendromu',
        target: '15q11-q13 kromozom bölgesinin paternal kopyasının delesyonu veya maternal uniparental dizomi',
        hallmark: 'Yenidoğanda ağır hipotoni ve emme güçlüğünü takiben çocuklukta durdurulamayan hiperfaji, morbid obezite, küçük el-ayaklar ve hipogonadizm',
        vignette:
          'Yenidoğan döneminde ağır gevşeklik nedeniyle tüple beslenmek zorunda kalan 6 yaşındaki erkek çocuk şimdi kontrol edilemeyen yemek yeme, kilitli dolapları açma ve hızla artan kilo nedeniyle getiriliyor. Boyu kısa, elleri ve ayakları küçük, badem şeklinde gözleri ve inmemiş küçük testisleri bulunuyor',
        clues: ['Yenidoğan döneminde ağır gevşeklik', 'kontrol edilemeyen yemek yeme', 'elleri ve ayakları küçük, inmemiş küçük testisleri'],
        management: 'Sıkı kalori kısıtlaması, davranış terapisi ve boy ile vücut kompozisyonu için büyüme hormonu tedavisi',
        pearl: 'Aynı kromozom bölgesinin (15q11-q13) babadan gelen aktif genlerinin kaybıyla oluşur; genomik imprintingin en klasik örneğidir.',
        trapFalse: '15q11-q13 bölgesindeki maternal kopyanın kaybından kaynaklanır ve mutlu kukla davranışıyla seyreder',
        trapHighlight: 'maternal kopyanın kaybından kaynaklanır ve mutlu kukla davranışıyla seyreder',
      },
      {
        name: 'Angelman sendromu',
        target: '15q11-q13 bölgesindeki maternal UBE3A geninin delesyonu, mutasyonu veya paternal uniparental dizomi',
        hallmark: 'Ağır mental retardasyon, konuşamama, ataksik kukla benzeri yürüyüş, nöbetler ve uygunsuz sık gülme atakları',
        vignette:
          '4 yaşındaki kız çocuk hiç kelime söyleyememe, el çırpma hareketleri, geniş tabanlı sarsak yürüyüş ve nedensiz sürekli gülümseme/kahkaha ataklarıyla getiriliyor. Sarışın ve açık renk gözlü çocuğun mikrosefalisi ve EEG’de yüksek amplitüdlü yavaş dalga deşarjlarıyla seyreden epilepsisi saptanıyor',
        clues: ['hiç kelime söyleyememe', 'geniş tabanlı sarsak yürüyüş', 'nedensiz sürekli gülümseme/kahkaha atakları'],
        management: 'Antiepileptik ilaçlarla nöbet kontrolü, fizik tedavi ve iletişim için alternatif destek yöntemleri',
        pearl: 'Genomik imprinting nedeniyle beyinde yalnızca anneden gelen UBE3A aleli aktiftir; bunun kaybı "mutlu kukla" fenotipine yol açar.',
        trapFalse: 'paternal alel kaybı sonucu gelişir ve ileri derecede hiperfaji ile morbid obeziteye neden olur',
        trapHighlight: 'paternal alel kaybı sonucu gelişir ve ileri derecede hiperfaji ile morbid obeziteye neden olur',
      },
      {
        name: 'Cri-du-chat sendromu',
        target: '5. kromozomun kısa kolunda (5p-) terminal mikrodelesyon',
        hallmark: 'Larinks anomalisine bağlı kedi miyavlaması şeklinde tiz ağlama, mikrosefali, hipertelorizm ve ağır zeka geriliği',
        vignette:
          'Doğumdan itibaren sesi ince ve tiz bir kedi ağlamasını andıran 4 aylık bebekte düşük doğum tartısı, küçük baş çevresi, ay yüzü görünümü, birbirinden uzak yerleşimli gözler (hipertelorizm), epikantus ve hipotoni saptanıyor. FISH incelemesinde 5. kromozom kısa kolunda kayıp doğrulanıyor',
        clues: ['ince ve tiz bir kedi ağlamasını andıran', 'küçük baş çevresi, ay yüzü görünümü', '5. kromozom kısa kolunda kayıp'],
        management: 'Erken fizik tedavi, konuşma terapisi ve özel eğitim desteği ile multidisipliner izlem',
        pearl: 'Tipik tiz ağlama sesinin nedeni epiglottis ve larinks hipoplazisidir; çocuk büyüdükçe ağlama sesi değişebilir ancak mikrosefali ve zeka geriliği kalıcıdır.',
        trapFalse: '7. kromozomun uzun kolundaki delesyon sonucu gelişir ve zeka düzeyi genellikle normaldir',
        trapHighlight: '7. kromozomun uzun kolundaki delesyon sonucu gelişir ve zeka düzeyi genellikle normaldir',
      },
    ],
  },

  // 13. Büyüme ve Gelişme / Malnütrisyon
  {
    branchId: 'pediatri',
    subTopic: 'Malnütrisyon ve Mikrobesin Eksiklikleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kwashiorkor',
        target: 'Yeterli kaloriye yakın alıma rağmen ağır protein eksikliğine bağlı hipoalbüminemi ve karaciğer yağlanması',
        hallmark: 'Gode bırakan yaygın ödem, hepatomegali, ay yüzü, flag sign (bayrak işareti) saç değişikliği ve soyulan boya dermatiti',
        vignette:
          '2 yaşındaki çocuk nişasta ağırlıklı beslenme sonrası bacaklarda ve yüzde yaygın şişlik, apatik davranış ve karında büyüme ile getiriliyor. Muayenede her iki alt ekstremitede gode bırakan ödem, büyük yumuşak karaciğer, saçlarda açık ve koyu renkli bantlaşmalar ile deride soyulmalar görülüyor; serum albümin 1.7 g/dL saptanıyor',
        clues: ['gode bırakan ödem', 'büyük yumuşak karaciğer', 'saçlarda açık ve koyu renkli bantlaşmalar'],
        management: 'Hipoglisemi, hipotermi ve enfeksiyon tedavisi sonrası kademeli beslenme (aşırı yüklemeden kaçınarak refeeding sendromunu önleme)',
        pearl: 'Ödem nedeniyle tartı yaşa göre yanıltıcı biçimde normal görünebilir; yağlı karaciğer (VLDL sentezi bozulduğu için) karakteristiktir.',
        trapFalse: 'tüm makrobesinlerin eşit eksikliğine bağlı gelişir, ödem yoktur ve yağ dokusu tamamen erimiştir',
        trapHighlight: 'ödem yoktur ve yağ dokusu tamamen erimiştir',
      },
      {
        name: 'Marasmus',
        target: 'Hem protein hem de total kalori alımında kronik ve ağır yetersizlik sonucu yağ ve kas depolarının tükenmesi',
        hallmark: 'Cilt altı yağ dokusunun tamamen kaybına bağlı yaşlı adam yüzü, belirgin kas erimesi, ödem yokluğu ve ağır büyüme geriliği',
        vignette:
          '9 aylık bebek ağırlığı <3. persentilin çok altında ve derin zayıflık nedeniyle başvuruyor. Muayenede yanaklardaki yağ yastıkçıklarının dahi erimesiyle yüzün yaşlı bir insan görünümü aldığı, kalça derisinin bollaşıp sarktığı, ödem ve hepatomegalinin bulunmadığı, bebeğin ise açlıkla sürekli ağladığı görülüyor',
        clues: ['yanaklardaki yağ yastıkçıklarının dahi erimesiyle yüzün yaşlı bir insan görünümü', 'kalça derisinin bollaşıp sarktığı', 'ödem ve hepatomegalinin bulunmadığı'],
        management: 'Sıvı-elektrolit ve enfeksiyonların düzeltilmesi, ardından F-75 ve F-100 formülleriyle kontrollü enerji ve protein desteği',
        pearl: 'Protein katabolizması adaptif olarak korunduğu için serum albümini genellikle normale yakındır ve ödem gelişmez.',
        trapFalse: 'belirgin hipoalbüminemi, yaygın asit ve hepatosteatoz tablonun temel bulgusudur',
        trapHighlight: 'belirgin hipoalbüminemi, yaygın asit ve hepatosteatoz',
      },
      {
        name: 'Raşitizm',
        target: 'Büyüme plaklarında kalsiyum veya fosfor yetersizliğine bağlı osteoid dokunun mineralizasyon kusuru',
        hallmark: 'Kraniotabes, kostokondral tespih tanesi (raşitik rozari), el bileği genişlemesi, Harrison oluğu ve grafide metafizlerde çanaklaşma/fırçalaşma',
        vignette:
          'D vitamini damlası hiç kullanılmamış ve güneş görmemiş 11 aylık bebekte kafa kemiklerinde bastırınca pinpon topu gibi çökme, göğüs ön duvarında boncuk dizisi şeklinde kabarıklıklar, el bileklerinde kalınlaşma ve bacaklarda O-bacak eğriliği saptanıyor. El bileği grafisinde metafizlerin genişlediği ve saçaklandığı izleniyor',
        clues: ['kafa kemiklerinde bastırınca pinpon topu gibi çökme', 'göğüs ön duvarında boncuk dizisi şeklinde kabarıklıklar', 'metafizlerin genişlediği ve saçaklandığı'],
        management: 'Oral D vitamini (kalsiyum desteğiyle birlikte) tedavisi ve başlangıçta yüksek doz ya da günlük rejimle serum ALP ve P düzeylerinin izlenmesi',
        pearl: 'Biyokimyasal olarak ALP belirgin yükselir, kalsiyum normal veya düşük, fosfor düşük, PTH ise sekonder hiperparatiroidizm nedeniyle yüksektir.',
        trapFalse: 'laboratuvarda serum alkalen fosfataz düzeyi düşüktür ve kemik grafisinde epifiz hattı daralması görülür',
        trapHighlight: 'serum alkalen fosfataz düzeyi düşüktür',
      },
      {
        name: 'Skorbüt',
        target: 'C vitamini (askorbik asit) eksikliğine bağlı prolin ve lizin hidroksilasyonunun bozulmasıyla kusurlu kollajen sentezi',
        hallmark: 'Diş eti kanaması/hipertrofisi, foliküler hiperkeratoz, tirbuşon kıllar, subperiosteal kanamaya bağlı kurbağa bacağı pozisyonu ve Frankel beyaz çizgisi',
        vignette:
          'Sadece kaynatılmış inek sütüyle beslenen 14 aylık bebek bacaklarına dokunulduğunda aşırı ağlama ve hareket ettirmeme (psödoparalizi) şikayetiyle getiriliyor. Muayenede bebeğin kalçaları fleksiyonda ve dışa dönük yattığı, diş etlerinin şiş ve morarmış olduğu, uyluk grafisinde metafizde yoğun beyaz çizgi ve periost kabalaşması bulunduğu görülüyor',
        clues: ['kaynatılmış inek sütüyle beslenen', 'kalçaları fleksiyonda ve dışa dönük', 'diş etlerinin şiş ve morarmış'],
        management: 'Oral veya parenteral askorbik asit (C vitamini) replasmanı ile ağrı ve kanama bulgularının günler içinde hızla düzelmesi',
        pearl: 'Subperiosteal hemorajiler nedeniyle çocuk bacaklarını hareket ettirmek istemez (psödoparalizi) ve kurbağa bacağı pozisyonu alır; grafide Wimberger halkası ve Scorbutic rosary görülür.',
        trapFalse: 'kalsiyum emilim bozukluğundan kaynaklanır ve metafizlerde çanaklaşma ile düşük fosfor saptanır',
        trapHighlight: 'kalsiyum emilim bozukluğundan kaynaklanır ve metafizlerde çanaklaşma',
      },
      {
        name: 'Akrodermatitis enteropatika',
        target: 'SLC39A4 (ZIP4) intestinal taşıyıcı gen mutasyonuna bağlı otozomal resesif çinko emilim bozukluğu',
        hallmark: 'Anne sütünden kesildikten sonra ortaya çıkan perioral, perianal ve akral vezikülobüllöz-kabuklu dermatit, alopesi ve kronik ishal triyadı',
        vignette:
          'Anne sütünden kesilip formüla ve ek gıdaya geçildikten 3 hafta sonra 8 aylık bebekte ağız çevresinde, anüs etrafında ve el-ayak parmak uçlarında simetrik, keskin sınırlı eritematöz kabuklu plaklar başlıyor. Saçlarında seyrelme ve günde 6-7 kez sulu ishali olan bebeğin serum alkalen fosfataz düzeyi düşük bulunuyor',
        clues: ['Anne sütünden kesildikten', 'ağız çevresinde, anüs etrafında ve el-ayak parmak uçlarında', 'serum alkalen fosfataz düzeyi düşük'],
        management: 'Ömür boyu yüksek doz oral elementer çinko sülfat veya glukonat desteği (lezyonlar birkaç günde dramatik iyileşir)',
        pearl: 'Çinko, alkalen fosfatazın kofaktörü olduğu için serum ALP düşüklüğü tanıda çok değerli bir laboratuvar ipucudur; anne sütü biyoyararlanımı yüksek çinko bağlayıcı ligand içerdiğinden semptomları baskılar.',
        trapFalse: 'anne sütü alan bebeklerde daha erken başlar ve serum alkalen fosfataz düzeyi çok yüksektir',
        trapHighlight: 'anne sütü alan bebeklerde daha erken başlar ve serum alkalen fosfataz düzeyi çok yüksektir',
      },
    ],
  },

  // 14. Yenidoğan Tarama Programı Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Tarama Programı Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Konjenital hipotiroidi',
        target: 'Tiroid disgenezisi (%85) veya tiroid hormon sentez bozukluğuna bağlı tiroid hormon yetersizliği',
        hallmark: 'Uzamış sarılık, kabızlık, makroglossi, umblikal herni, geniş arka fontanel ve önlenebilir zeka geriliği',
        vignette:
          '3 haftalık term bebek hala geçmeyen indirekt sarılık, çok uyuma, kalın sesle ağlama ve 4 günde bir dışkılama şikayetiyle getiriliyor. Muayenede büyük ve dışarı taşan dil, göbek fıtığı, kaba cilt ve 2 cm açık arka fontanel saptanıyor. Topuk kanı taramasında TSH >80 mIU/L ve serbest T4 çok düşük geliyor',
        clues: ['geçmeyen indirekt sarılık', 'büyük ve dışarı taşan dil, göbek fıtığı', '2 cm açık arka fontanel'],
        management: 'Doğumdan sonraki ilk 2 hafta içinde hemen oral L-tiroksin tedavisi başlanması (kalıcı zeka geriliğini önler)',
        pearl: 'Önlenebilir zeka geriliğinin en sık endokrin nedenidir; yenidoğan döneminde çoğunlukla asemptomatik olduğu için topuk kanı taraması hayati önem taşır.',
        trapFalse: 'tedaviye 6. aydan sonra başlanması nörolojik gelişim açısından yeterli kabul edilir',
        trapHighlight: 'tedaviye 6. aydan sonra başlanması nörolojik gelişim açısından yeterli kabul edilir',
      },
      {
        name: 'Fenilketonüri',
        target: 'Fenilalanin hidroksilaz enzimi veya BH4 kofaktör eksikliği sonucu fenilalaninin tirozine dönüşememesi',
        hallmark: 'İdrarda küf/fare kokusu, açık ten-saç-göz rengi (hipopigmentasyon), ekzematöz döküntü ve ağır zeka geriliği',
        vignette:
          'Yenidoğan taraması yapılmamış 10 aylık bebek oturma ve baş tutmada belirgin gecikme nedeniyle getiriliyor. Anne-baba arasında akrabalık olduğu öğreniliyor; bebeğin idrarında keskin bir küf kokusu hissediliyor, cildi ve saçları ailesine göre çok açık renkli olup yanaklarında kronik ekzema görülüyor',
        clues: ['idrarında keskin bir küf kokusu', 'cildi ve saçları ailesine göre çok açık renkli', 'oturma ve baş tutmada belirgin gecikme'],
        management: 'Yaşamın ilk haftalarından itibaren fenilalaninden kısıtlı, tirozin destekli ömür boyu özel diyet (BH4 yanıtlılarda sapropterin)',
        pearl: 'Tedavisiz bırakılan gebelerde yüksek maternal fenilalanin plasentayı geçerek fetüste mikrosefali ve kalp anomalisiyle seyreden maternal sendroma yol açar.',
        trapFalse: 'tarama testi proteinli beslenme başlamadan doğum odasında ilk 1 saatte alınan kandan yapılmalıdır',
        trapHighlight: 'proteinli beslenme başlamadan doğum odasında ilk 1 saatte',
      },
      {
        name: 'Biyotinidaz eksikliği',
        target: 'Biyotinidaz enziminin genetik eksikliği sonucu biyotin geri dönüşümünün bozulması ve çoklu karboksilaz aktivite kaybı',
        hallmark: 'Nöbetler, hipotoni, alopesi, periorifisyal cilt döküntüsü, işitme-görme kaybı ve laktik asidoz',
        vignette:
          '3 aylık bebek dirençli miyoklonik nöbetler, kas gevşekliği, saç ve kaşlarda dökülme, ağız çevresinde kızarık döküntü ve hızlı solunumla acile getiriliyor. Kan gazında laktik asidoz ve hafif hiperamonyemi, idrar organik asitlerinde 3-hidroksiizovalerik asit yüksekliği saptanıyor',
        clues: ['dirençli miyoklonik nöbetler', 'saç ve kaşlarda dökülme', 'laktik asidoz'],
        management: 'Ömür boyu günlük oral serbest biyotin (5-20 mg/gün) takviyesi ile tam klinik kontrol',
        pearl: 'Erken dönemde basit ve ucuz oral biyotin tedavisiyle nörolojik sekeller ve işitme/görme kaybı tamamen önlenebilir; tek başına geç başlanırsa işitme-görme kaybı kalıcı olabilir.',
        trapFalse: 'tedavisinde düşük proteinli diyet zorunludur ve yüksek doz B12 vitamini ile düzelir',
        trapHighlight: 'yüksek doz B12 vitamini ile düzelir',
      },
      {
        name: 'Kistik fibrozis',
        target: 'CFTR klor kanalı gen mutasyonuna (en sık delta-F508) bağlı ekzokrin bez salgılarında koyulaşma',
        hallmark: 'Mekonyum ileusu, tekrarlayan akciğer enfeksiyonları, yağlı dışkılama, nazal polipler ve ter testinde klor >60 mmol/L',
        vignette:
          'Doğumdan sonraki 48 saatte mekonyum çıkaramayan, safralı kusan ve grafisinde distal ileumda sabun köpüğü görünümü olan yenidoğanda topuk kanında immünreaktif tripsinojen (IRT) yüksek bulunuyor. İzlemde tuzlu terleme, sık bronşit atakları ve büyüme geriliği görülüyor',
        clues: ['48 saatte mekonyum çıkaramayan', 'immünreaktif tripsinojen (IRT) yüksek', 'tuzlu terleme'],
        management: 'Pankreatik enzim replasmanı, yağda eriyen vitaminler (ADEK), göğüs fizyoterapisi, dornaz alfa ve CFTR modülatörleri',
        pearl: 'Yenidoğanda mekonyum ileusu neredeyse her zaman bu hastalığı düşündürür; tanıda altın standart ter testidir (>60 mEq/L klor).',
        trapFalse: 'ter testinde sodyum ve klor düzeylerinin belirgin düşük olması tanı koydurucudur',
        trapHighlight: 'sodyum ve klor düzeylerinin belirgin düşük olması',
      },
      {
        name: 'Spinal müsküler atrofi',
        target: 'SMN1 geninin homozigot delesyonu sonucu medulla spinalis ön boynuz motor nöronlarının progresif dejenerasyonu',
        hallmark: 'Ağır proksimal hipotoni (kurbağa bacağı), derin tendon reflekslerinin kaybı, dilde fasikülasyonlar ve korunmuş zekâ',
        vignette:
          '3 aylık bebek hiç başını tutamama, zayıf ağlama ve ekstremitelerini kaldıramama şikayetiyle getiriliyor. Muayenede kol ve bacaklarda simetrik derin hipotoni, kurbağa bacağı postürü, derin tendon reflekslerinin alınamaması ve dilde ince titreme hareketleri (fasikülasyon) izleniyor; bebeğin bakışları canlı ve uyanıktır',
        clues: ['simetrik derin hipotoni, kurbağa bacağı postürü', 'derin tendon reflekslerinin alınamaması', 'dilde ince titreme hareketleri'],
        management: 'SMN2 modülatörleri (nusinersen, risdiplam) veya AAV9 vektörlü SMN1 gen tedavisi (onasemnogene abeparvovec) ve solunum-beslenme desteği',
        pearl: 'Tip 1 formunda (Werdnig-Hoffmann) ekstraoküler kaslar ve bilişsel fonksiyonlar tamamen korunurken diyafragma ve interkostal kas zaafına bağlı çan şeklinde göğüs gelişir.',
        trapFalse: 'serebral korteks tutulumu nedeniyle ağır mental retardasyon ve derin tendon reflekslerinde artış görülür',
        trapHighlight: 'ağır mental retardasyon ve derin tendon reflekslerinde artış görülür',
      },
    ],
  },

  // 15. Çocukluk Çağı Üst/Alt Solunum Acilleri
  {
    branchId: 'pediatri',
    subTopic: 'Çocukluk Çağı Solunum Acilleri',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2022',
    entities: [
      {
        name: 'Akut laringotrakeobronşit',
        target: 'Parainfluenza virüsü başta olmak üzere viral enfeksiyonların subglottik alanda ödem oluşturması',
        hallmark: 'Havlama tarzında öksürük, ses kısıklığı, inspiratuvar stridor ve AP boyun grafisinde kalem ucu (steeple) işareti',
        vignette:
          '2 yaşındaki çocuk iki günlük hafif burun akıntısının ardından gece yarısı aniden başlayan kaba havlar tarzda öksürük, ses kısıklığı ve nefes alırken duyulan tiz sesle acile getiriliyor. Ateşi 38.1°C olan çocuğun genel durumu iyi ve yutkunması rahattır; ön-arka boyun grafisinde subglottik daralma görülüyor',
        clues: ['gece yarısı aniden başlayan kaba havlar tarzda öksürük', 'ses kısıklığı', 'subglottik daralma'],
        management: 'Tüm olgularda tek doz oral/IM deksametazon (0.15-0.6 mg/kg); orta-ağır istirahat stridorunda nebülize rasemik epinefrin',
        pearl: 'En sık etkeni Parainfluenza tip 1 olup en sık 6 ay-3 yaş arasında görülür; nemli hava tek başına kanıtlanmış tedavi değildir, steroid temel tedavidir.',
        trapFalse: 'en sık etkeni Haemophilus influenzae tip b olup ilk tedavide intravenöz seftriakson ve entübasyon gerekir',
        trapHighlight: 'en sık etkeni Haemophilus influenzae tip b olup ilk tedavide intravenöz seftriakson',
      },
      {
        name: 'Akut epiglottit',
        target: 'Supraglottik dokuların ve epiglottun bakteriyel selülitine bağlı hızlı hava yolu tıkanması',
        hallmark: 'Ani yüksek ateş, toksik görünüm, boğuk ses, salya akması, tripod postürü ve yan grafide başparmak işareti',
        vignette:
          '4 yaşındaki çocuk 4 saat içinde hızla gelişen 39.6°C ateş, şiddetli boğaz ağrısı, ağzından salya akması ve nefes almada zorlukla başvuruyor. Oturur pozisyonda elleriyle yatağa yaslanıp öne eğildiği ve öksürüğünün belirgin olmadığı izleniyor; yan servikal grafide şişmiş epiglottun başparmak şeklinde gölge verdiği görülüyor',
        clues: ['4 saat içinde hızla gelişen 39.6°C ateş', 'elleriyle yatağa yaslanıp öne eğildiği', 'şişmiş epiglottun başparmak şeklinde gölge'],
        management: 'Çocuğu ağlatmadan ameliyathane şartlarında güvenli entübasyon ve intravenöz 3. kuşak sefalosporin tedavisi',
        pearl: 'Klasik krup tablosundan farklı olarak havlar tarzda öksürük yoktur, buna karşın toksik görünüm, yüksek ateş ve salya akıtma (4D: drooling, dysphagia, dysphonia, distress) hakimdir.',
        trapFalse: 'havlama tarzında öksürük ön plandadır ve ön-arka boyun grafisinde kalem ucu işareti saptanır',
        trapHighlight: 'havlama tarzında öksürük ön plandadır ve ön-arka boyun grafisinde kalem ucu işareti',
      },
      {
        name: 'Akut bronşiyolit',
        target: 'Respiratuvar sinsityal virüsün (RSV) küçük bronşiyol epitelinde nekroz, ödem ve mukus tıkacı oluşturması',
        hallmark: '2 yaş altı bebekte ÜSYE sonrası gelişen takipne, göğüs çekilmeleri, yaygın hışıltı (wheezing) ve akciğerde hiperinflasyon',
        vignette:
          '5 aylık bebek 3 günlük burun tıkanıklığı sonrası artan hızlı nefes alma, emmede zorluk ve hışıltı ile getiriliyor. Muayenede solunum sayısı 64/dk, subkostal çekilmeler, ekspiryumda uzama, yaygın sibilan ronküsler ve ince raller duyuluyor; akciğer grafisinde diafragmalarda düzleşme izleniyor',
        clues: ['5 aylık bebek', 'ekspiryumda uzama, yaygın sibilan ronküsler', 'diafragmalarda düzleşme'],
        management: 'Nazal aspirasyon, hidrasyon ve hipokside (SpO2 <%90) oksijen desteği (rutin bronkodilatör, steroid veya antibiyotik önerilmez)',
        pearl: 'Yüksek riskli prematürelere (<=29 hafta) ve hemodinamik anlamlı konjenital kalp hastalarına RSV mevsiminde palivizumab profilaksisi uygulanır.',
        trapFalse: 'tüm olgularda rutin olarak sistemik kortikosteroid ve amoksisilin başlanması iyileşmeyi hızlandırır',
        trapHighlight: 'rutin olarak sistemik kortikosteroid ve amoksisilin başlanması',
      },
      {
        name: 'Yabancı cisim aspirasyonu',
        target: 'Fındık, çekirdek veya küçük oyuncağın ana bronşta (en sık sağ ana bronş) tek yönlü kapak mekanizmasıyla hava hapsi yapması',
        hallmark: 'Oyundan veya kuruyemiş yemekten hemen sonra ani boğulma atağı, tek taraflı solunum sesi azalması ve ekspiryumda hava hapsi',
        vignette:
          '18 aylık sağlıklı çocuk annesinin yanında kabuklu kuruyemiş yerken aniden morarma ve şiddetli öksürük krizi geçiriyor. Acile geldiğinde ateşi yok, ancak sağ hemitoraksta solunum seslerinin belirgin azaldığı ve ekspiratuvar akciğer grafisinde sağ akciğerin havalanmasının artıp mediastenin sola kaydığı görülüyor',
        clues: ['kabuklu kuruyemiş yerken aniden morarma', 'sağ hemitoraksta solunum seslerinin belirgin azaldığı', 'sağ akciğerin havalanmasının artıp mediastenin sola kaydığı'],
        management: 'Genel anestezi altında rijit bronkoskopi ile cismin çıkarılması (tam tıkanma ve öksüremeyen çocukta Heimlich/sırt vuruşu)',
        pearl: 'Grafide cisim çoğunlukla radyolüsen olduğu için görünmez; ekspiryum grafisinde etkilenen tarafta sönmeme (tek taraflı hiperlüsensi) tanı koydurur.',
        trapFalse: 'tanı ve tedavide ilk tercih fleksibl bronkoskopi olup grafilerde cisim her zaman radyoopak görülür',
        trapHighlight: 'ilk tercih fleksibl bronkoskopi olup grafilerde cisim her zaman radyoopak görülür',
      },
      {
        name: 'Bakteriyel trakeit',
        target: 'Viral ÜSYE zemininde Staphylococcus aureus süperenfeksiyonuyla trakeada kalın pürülan membran oluşumu',
        hallmark: 'Yüksek ateş, toksik görünüm, rasemik epinefrine yanıtsız stridor ve bronkoskopide pürülan trakeal sekresyonlar',
        vignette:
          '5 yaşındaki çocukta 2 gündür süren hafif krup benzeri öksürük aniden 39.5°C ateşe, toksik genel duruma ve ağır inspiratuvar stridora dönüşüyor. Nebülize epinefrin ve deksametazona hiç yanıt vermeyen hastada yutkunma güçlüğü veya salya akması yok; yan grafide trakea lümeninde düzensiz konturlu yumuşak doku dansiteleri görülüyor',
        clues: ['39.5°C ateşe, toksik genel duruma', 'Nebülize epinefrin ve deksametazona hiç yanıt vermeyen', 'trakea lümeninde düzensiz konturlu yumuşak doku dansiteleri'],
        management: 'Endotrakeal entübasyonla hava yolu güvenliği ve koyu pürülan plakların aspirasyonu yanında vankomisin + 3. kuşak sefalosporin',
        pearl: 'Krup tedavisine yanıt vermeyen, yüksek ateşli ve salya akıtması olmayan çocukta mutlaka akla gelmelidir; epiglotta değil subglottik trakeadadır.',
        trapFalse: 'en sık etkeni Parainfluenza virüsüdür ve tek doz oral deksametazonla hızla düzelir',
        trapHighlight: 'en sık etkeni Parainfluenza virüsüdür ve tek doz oral deksametazonla hızla düzelir',
      },
    ],
  },

  // 16. Pediatrik Nöbetler ve Nöroloji
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Nöbetler ve Epilepsiler',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Basit febril konvülziyon',
        target: '6 ay-5 yaş arasında SSS enfeksiyonu olmaksızın ateşin tetiklediği kısa jeneralize nöbet',
        hallmark: '15 dakikadan kısa süren, jeneralize, 24 saatte tekrarlamayan ve nörolojik defisit bırakmayan ateşli nöbet',
        vignette:
          '16 aylık sağlıklı erkek çocuk akut otitis media nedeniyle 39.2°C ateşi varken 3 dakika süren tüm vücutta kasılma ve gözlerde kayma nöbeti geçiriyor. Acilde postiktal kısa uyku sonrası nörolojik muayenesi tamamen normal bulunuyor ve sonraki 24 saatte nöbet tekrarlamıyor',
        clues: ['16 aylık sağlıklı erkek çocuk', '3 dakika süren tüm vücutta kasılma', 'sonraki 24 saatte nöbet tekrarlamıyor'],
        management: 'Ailenin bilgilendirilmesi ve altta yatan ateş kaynağının tedavisi (rutin EEG, beyin görüntüleme veya sürekli antiepileptik gerekmez)',
        pearl: '6-12 ay arası çocukta Hib ve pnömokok aşıları eksikse veya antibiyotik alıyorsa menenjiti dışlamak için lomber ponksiyon düşünülmelidir.',
        trapFalse: 'tekrarını önlemek için en az 2 yıl boyunca günlük fenobarbital veya valproat profilaksisi başlanmalıdır',
        trapHighlight: 'en az 2 yıl boyunca günlük fenobarbital veya valproat profilaksisi başlanmalıdır',
      },
      {
        name: 'Kompleks febril konvülziyon',
        target: 'Ateşli dönemde fokal başlangıçlı, uzun süreli veya aynı gün içinde yineleyen konvülziyon',
        hallmark: '15 dakikadan uzun sürmesi, fokal özellik göstermesi veya 24 saat içinde birden fazla kez tekrarlaması',
        vignette:
          '2 yaşındaki kız çocuk viral üst solunum yolu enfeksiyonu sırasında ateşi 38.9°C iken önce sağ kolunda başlayan ve sonra tüm vücuda yayılan 20 dakikalık bir nöbet geçiriyor. Acilde 4 saat sonra ateşliyken ikinci kez nöbet geçirdiği ve nöbet sonrası sağ kolunu kısa süre zayıf oynattığı izleniyor',
        clues: ['sağ kolunda başlayan', '20 dakikalık bir nöbet', '4 saat sonra ateşliyken ikinci kez nöbet'],
        management: 'SSS enfeksiyonunun dışlanması, 5 dakikayı aşan nöbetlerde benzodiyazepin ile durdurma ve nörolojik/EEG izlemi planlanması',
        pearl: 'Üç kriterden birinin dahi varlığı (fokal, >15 dk veya 24 saatte >=2 kez) tanıyı koyar ve ileri yaşta epilepsi gelişme riskini artırır.',
        trapFalse: 'fokal nöbetler her zaman menenjit dışlaması yapılmadan basit tip olarak sınıflandırılır',
        trapHighlight: 'basit tip olarak sınıflandırılır',
      },
      {
        name: 'İnfantil spazm',
        target: 'Bebeklik çağının yaşa bağımlı ağır epileptik ensefalopatisi (en sık tüberoskleroz veya hipoksik hasar zemininde)',
        hallmark: 'Selamlama (salaam) tarzı kümeler halinde nöbetler, psikomotor gerileme ve EEG’de hipsaritmi paterni',
        vignette:
          '7 aylık bebek özellikle uykudan uyandıktan sonra birkaç saniyelik ani baş öne eğilmesi ve kolların gövdeye kapanması şeklinde art arda 15-20 kez tekrarlayan ataklar geçiriyor. Önceden gülümseyen ve dönen bebeğin artık göz teması kuramadığı görülüyor; uyku EEG’sinde kaotik, yüksek voltajlı diken-yavaş dalgalar saptanıyor',
        clues: ['uykudan uyandıktan sonra', 'ani baş öne eğilmesi ve kolların gövdeye kapanması', 'kaotik, yüksek voltajlı diken-yavaş dalgalar'],
        management: 'İlk seçenek ACTH (adrenokortikotropik hormon) veya yüksek doz oral kortikosteroid; tüberoskleroz eşlik ediyorsa ilk tercih vigabatrin',
        pearl: 'West sendromu üçlüsü: infantil spazmlar + psikomotor regresyon + EEG’de hipsaritmi; klasik antiepileptikler çoğunlukla etkisizdir.',
        trapFalse: 'tedavisinde ilk seçenek ilaç etosüksimiddir ve nörogelişimsel prognozu her zaman mükemmeldir',
        trapHighlight: 'ilk seçenek ilaç etosüksimiddir ve nörogelişimsel prognozu her zaman mükemmeldir',
      },
      {
        name: 'Çocukluk çağı absans epilepsisi',
        target: 'Talamokortikal T-tipi kalsiyum kanallarının aracılık ettiği jeneralize non-konvülzif nöbet aktivitesi',
        hallmark: 'Günde onlarca kez birkaç saniyelik dalma, hiperventilasyonla tetiklenme ve EEG’de 3 Hz diken-dalga deşarjları',
        vignette:
          '7 yaşındaki kız çocuğun öğretmeni derste okurken aniden 8-10 saniye duraksadığını, gözlerini sabit bir noktaya dikip kırpıştırdığını ve hemen ardından kaldığı yerden hiçbir şey olmamış gibi devam ettiğini bildiriyor. Muayenede 2 dakika derin hızlı nefes alıp vermesi istendiğinde aynı dalma atağı ortaya çıkıyor; EEG’de senkron 3 Hz diken-dalga deşarjı görülüyor',
        clues: ['8-10 saniye duraksadığını', '2 dakika derin hızlı nefes alıp vermesi istendiğinde', 'senkron 3 Hz diken-dalga deşarjı'],
        management: 'İlk seçenek monoterapi olarak etosüksimid (T-tipi Ca kanal blokörü); jeneralize tonik-klonik nöbet eşlik ediyorsa valproat',
        pearl: 'Postiktal konfüzyon kesinlikle yoktur ve karbamazepin ile fenitoin nöbetleri şiddetlendirebileceğinden kontrendikedir.',
        trapFalse: 'nöbet sonrası belirgin postiktal uyku dönemi vardır ve ilk tedavide karbamazepin başlanır',
        trapHighlight: 'belirgin postiktal uyku dönemi vardır ve ilk tedavide karbamazepin başlanır',
      },
      {
        name: 'Jüvenil miyoklonik epilepsi',
        target: 'Ergenlikte başlayan idiyopatik jeneralize epilepsi (4-6 Hz polispike-dalga deşarjları)',
        hallmark: 'Sabah uyanınca üst ekstremitelerde ani sıçramalar, uyku yoksunluğuyla tetiklenme ve EEG’de 4-6 Hz polidiken-dalga aktivitesi',
        vignette:
          '15 yaşındaki lise öğrencisi sabah uyandıktan sonraki ilk saatte diş fırçalarken elindeki fırçayı fırlatacak kadar ani kol sıçramaları yaşadığını anlatıyor. Sınav haftası uykusuz kaldığı bir günün sabahında jeneralize tonik-klonik nöbet geçiriyor; EEG’de fotik stimülasyonla artan 4-6 Hz jeneralize polidiken-yavaş dalga deşarjları görülüyor',
        clues: ['sabah uyandıktan sonraki ilk saatte', 'diş fırçalarken elindeki fırçayı fırlatacak kadar ani kol sıçramaları', '4-6 Hz jeneralize polidiken-yavaş dalga'],
        management: 'Valproik asit (doğurganlık çağındaki kızlarda teratojenite nedeniyle levetirasetam veya lamotrijin) ile genellikle yaşam boyu tedavi',
        pearl: 'Uykusuzluk, alkol ve parlak yanıp sönen ışıklar en güçlü tetikleyicilerdir; tedaviye yanıtı mükemmel olsa da ilaç kesildiğinde nüks oranı çok yüksektir.',
        trapFalse: '2 yıl nöbetsiz kalındığında ilaç kesildikten sonra nüks etme olasılığı çok düşüktür',
        trapHighlight: 'ilaç kesildikten sonra nüks etme olasılığı çok düşüktür',
      },
    ],
  },

  // 17. Nörokütanöz Sendromlar
  {
    branchId: 'pediatri',
    subTopic: 'Nörokütanöz Sendromlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Nörofibromatozis Tip 1',
        target: '17q11.2 kromozomundaki NF1 tümör baskılayıcı gen mutasyonuyla nörofibromin (Ras-GAP) kaybı',
        hallmark: 'En az 6 adet sütlü kahve (cafe-au-lait) lekesi, aksiller/inguinal çillenme, Lisch nodülleri ve optik yolak gliomu',
        vignette:
          '8 yaşındaki çocuğun gövdesinde çapı 1.5 cm’den büyük 8 adet keskin sınırlı açık kahverengi makül ve her iki koltuk altında küçük çillenmeler saptanıyor. Yarık lamba muayenesinde iriste hamartomatöz Lisch nodülleri, kraniyal MR’da ise sağ optik sinirde kalınlaşma (optik gliom) ve kemik grafisinde sfenoid kanat displazisi görülüyor',
        clues: ['çapı 1.5 cm’den büyük 8 adet keskin sınırlı açık kahverengi makül', 'koltuk altında küçük çillenmeler', 'iriste hamartomatöz Lisch nodülleri'],
        management: 'Multidisipliner yıllık göz, kan basıncı (feokromositoma/renal arter stenozu) ve skolyoz takibi; inoperabl pleksiform nörofibromda selumetinib',
        pearl: 'Otozomal dominant kalıtılır; çocuklarda erken puberte veya görme kaybı geliştiğinde mutlaka optik yolak gliomu araştırılmalıdır.',
        trapFalse: 'bilateral akustik schwannom (vestibüler schwannom) en karakteristik intrakraniyal tümörüdür',
        trapHighlight: 'bilateral akustik schwannom (vestibüler schwannom) en karakteristik intrakraniyal tümörüdür',
      },
      {
        name: 'Nörofibromatozis Tip 2',
        target: '22q12 kromozomundaki NF2 gen mutasyonuyla merlin (schwannomin) protein kaybı',
        hallmark: 'Bilateral vestibüler schwannom (akustik nörinom), menenjiyomlar, ependimomlar ve juvenil subkapsüler katarakt',
        vignette:
          '16 yaşındaki ergen son 1 yıldır giderek artan iki taraflı işitme azlığı, kulak çınlaması ve denge bozukluğu ile başvuruyor. Cildinde çok az sayıda leke olup Lisch nodülü saptanmıyor; beyin MR’da her iki serebellopontin köşede 8. kraniyal sinirden köken alan simetrik kontrast tutan kitleler ve konveksite menenjiyomu görülüyor',
        clues: ['iki taraflı işitme azlığı, kulak çınlaması', 'Lisch nodülü saptanmıyor', 'her iki serebellopontin köşede 8. kraniyal sinirden köken alan simetrik kitleler'],
        management: 'Erken işitme koruyucu mikrocerrahi veya stereotaktik radyocerrahi, bevacizumab ile tümör büyümesinin kontrolü ve koklear/beyin sapı implantı',
        pearl: 'Cilt bulguları ve Lisch nodülleri tip 1’e göre çok silik veya yoktur; 22. kromozomdaki merlin proteini kaybı multipl SSS tümörlerine yol açar.',
        trapFalse: '6’dan fazla sütlü kahve lekesi, aksiller çillenme ve sfenoid kanat displazisi tanısaldır',
        trapHighlight: '6’dan fazla sütlü kahve lekesi, aksiller çillenme ve sfenoid kanat displazisi',
      },
      {
        name: 'Tüberoskleroz',
        target: 'TSC1 (hamartin, 9q) veya TSC2 (tuberin, 16p) gen mutasyonuyla mTOR yolağının aşırı aktivasyonu',
        hallmark: 'Hipopigmente dişbudak yaprağı (ash-leaf) makülleri, yüz anjiyofibromları, shagreen yaması, kardiyak rabdomiyom ve subependimal dev hücreli astrositom',
        vignette:
          'İnfantil spazm nedeniyle incelenen 9 aylık bebeğin gövdesinde Wood lambası ile belirginleşen beyaz yaprak şeklinde 5 adet makül görülüyor. Ekokardiyografide ventrikül septumunda kendiliğinden küçülmesi beklenen kitleler, beyin MR’da ise subependimal kalsifiye nodüller ve kortikal tüberler saptanıyor',
        clues: ['Wood lambası ile belirginleşen beyaz yaprak şeklinde 5 adet makül', 'ventrikül septumunda kendiliğinden küçülmesi beklenen kitleler', 'subependimal kalsifiye nodüller'],
        management: 'İnfantil spazmda ilk tercih vigabatrin; SEGA ve renal anjiyomiyolipomda mTOR inhibitörü everolimus tedavisi',
        pearl: 'Fetal veya neonatal ekoda saptanan kardiyak rabdomiyomların en sık nedeni olup, beyinde SEGA gelişirse obstrüktif hidrosefaliye yol açabilir.',
        trapFalse: 'kalpteki rabdomiyomlar yaşla birlikte malignleşir ve tüm hastalara acil cerrahi eksizyon gerekir',
        trapHighlight: 'yaşla birlikte malignleşir ve tüm hastalara acil cerrahi eksizyon gerekir',
      },
      {
        name: 'Sturge-Weber sendromu',
        target: 'Somatik mozaik GNAQ gen mutasyonuna bağlı fasiyal ve leptomeningeal kapiller-venöz malformasyon',
        hallmark: 'Trigeminal sinirin oftalmik (V1) dalı dermatomunda şarap lekesi (nevus flammeus), glokom ve grafide tramvay rayı kalsifikasyonları',
        vignette:
          'Doğumdan beri alnının sağ yarısını ve sağ üst göz kapağını kaplayan koyu kırmızı kapiller lekesi olan 5 yaşındaki çocukta sol tarafta fokal nöbetler ve hafif hemiparezi gelişiyor. Sağ gözde göz içi basıncı yüksek bulunuyor; kraniyal BT’de sağ oksipitopariyetal korteks giruslarını takip eden çift konturlu kalsifikasyonlar görülüyor',
        clues: ['alnının sağ yarısını ve sağ üst göz kapağını kaplayan koyu kırmızı kapiller leke', 'sağ gözde göz içi basıncı yüksek', 'korteks giruslarını takip eden çift konturlu kalsifikasyonlar'],
        management: 'Antiepileptiklerle nöbet kontrolü, agresif glokom tedavisi ve cilt lezyonu için pulsed-dye lazer uygulaması',
        pearl: 'Kalıtsal değildir (sporadik somatik mutasyon); şarap lekesi yüzün V1 dermatomunu tutmuyorsa leptomeningeal anjiyom riski çok düşüktür.',
        trapFalse: 'otozomal dominant kalıtım gösterir ve şarap lekesi her zaman V3 mandibuler dal trasesindedir',
        trapHighlight: 'otozomal dominant kalıtım gösterir ve şarap lekesi her zaman V3 mandibuler dal trasesindedir',
      },
      {
        name: 'Von Hippel-Lindau sendromu',
        target: '3p25 kromozomundaki VHL tümör baskılayıcı gen mutasyonuyla HIF-1alfa degradasyonunun bozulması',
        hallmark: 'Retinal ve serebellar hemanjiyoblastomlar, bilateral berrak hücreli renal hücreli karsinom, feokromositoma ve pankreas kistleri',
        vignette:
          'Ailede benzer öyküsü olan 17 yaşındaki hastada baş ağrısı, dengesizlik ve görme bulanıklığı gelişiyor. Göz dibinde dilate besleyici damarlı retinal vasküler tümör, beyin MR’da ise serebellumda kistik ve kontrast tutan mural nodüllü tümör saptanıyor; laboratuvarda sekonder polisitemi (eritropoietin artışı) görülüyor',
        clues: ['retinal vasküler tümör', 'serebellumda kistik ve kontrast tutan mural nodüllü tümör', 'sekonder polisitemi'],
        management: 'Serebellar ve retinal lezyonların mikrocerrahi/lazer tedavisi ve yıllık renal MR ile plazma metanefrin taramaları',
        pearl: 'Serebellar hemanjiyoblastomlar ektopik eritropoietin salgılayarak polisitemiye yol açabilir; en sık ölüm nedenleri RCC ve serebellar tümör komplikasyonlarıdır.',
        trapFalse: 'otozomal resesif kalıtılır ve en sık görülen böbrek patolojisi iyi huylu anjiyomiyolipomdur',
        trapHighlight: 'otozomal resesif kalıtılır ve en sık görülen böbrek patolojisi iyi huylu anjiyomiyolipomdur',
      },
    ],
  },

  // 18. Pediatrik Kas Hastalıkları
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Kas Hastalıkları',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Duchenne musküler distrofi',
        target: 'Xp21’deki distrofin geninde çerçeve kayması (frameshift) mutasyonuna bağlı distrofin proteininin tamamen yokluğu',
        hallmark: '3-5 yaşta pelvik kuşak zaafı, yerden ellerini bacaklarına tırmanarak kalkma (Gowers belirtisi), baldır psödohipertrofisi ve çok yüksek CK',
        vignette:
          '4 yaşındaki erkek çocuk koşmada zorlanma, sık düşme ve merdiven çıkamama şikayetiyle getiriliyor. Muayenede ördekvari yürüyüş, yerden kalkarken elleriyle diz ve uyluklarına tutunarak doğrulma, baldırlarda belirgin kabarıklık ve sertlik görülüyor. Serum kreatin kinaz düzeyi 18.500 U/L saptanıyor',
        clues: ['yerden kalkarken elleriyle diz ve uyluklarına tutunarak doğrulma', 'baldırlarda belirgin kabarıklık', 'kreatin kinaz düzeyi 18.500 U/L'],
        management: 'Yürüme süresini uzatmak için oral kortikosteroid (prednizon/deflazakort), kardiyomiyopati ve solunum izlemi, uygun mutasyonda ekzon atlama tedavisi',
        pearl: 'X’e bağlı resesif kalıtılır; kas liflerinin yerini yağ ve bağ dokusunun alması baldırda psödohipertrofi oluşturur ve geç dönemde dilate kardiyomiyopati sıktır.',
        trapFalse: 'duyu kaybıyla başlar, serum kreatin kinaz düzeyi normaldir ve 10 yaşından önce belirti vermez',
        trapHighlight: 'serum kreatin kinaz düzeyi normaldir ve 10 yaşından önce belirti vermez',
      },
      {
        name: 'Becker musküler distrofi',
        target: 'Distrofin geninde okuma çerçevesini bozmayan (in-frame) delesyon sonucu kısmen işlevsel, kısaltılmış distrofin üretimi',
        hallmark: 'Geç çocukluk-adölesan dönemde başlayan daha hafif proksimal kas güçsüzlüğü, baldır psödohipertrofisi ve dilate kardiyomiyopati',
        vignette:
          '14 yaşındaki erkek ergen spor derslerinde yaşıtlarına göre çabuk yorulma ve baldır kramplarıyla başvuruyor. Muayenede hafif kalça kuşağı güçsüzlüğü ve baldır genişlemesi mevcut; serum kreatin kinaz düzeyi 4200 U/L bulunuyor. 20’li yaşlara kadar bağımsız yürümeyi sürdürebileceği ancak kalp tutulumunun yakından izlenmesi gerektiği belirtiliyor',
        clues: ['14 yaşındaki erkek', 'hafif kalça kuşağı güçsüzlüğü', 'kreatin kinaz düzeyi 4200 U/L'],
        management: 'Kardiyak fonksiyonların düzenli ekokardiyografik takibi, ACE inhibitörü/beta-bloker ve hafif egzersiz programı',
        pearl: 'Allelik varyant olan ağır formuna göre semptomlar 5 yaşından sonra (genelde 10 yaş üzeri) başlar ve yaşam süresi daha uzundur; kalp tutulumu kas zaafından bağımsız ağır olabilir.',
        trapFalse: 'otozomal dominant kalıtılır ve distrofin proteini kas dokusunda tamamen sıfırdır',
        trapHighlight: 'otozomal dominant kalıtılır ve distrofin proteini kas dokusunda tamamen sıfırdır',
      },
      {
        name: 'Spinal müsküler atrofi Tip 1',
        target: 'SMN1 gen kaybı sonucu spinal ön boynuz alfa motor nöron dejenerasyonu',
        hallmark: 'Doğumdan ilk 6 ayda başlayan derin proksimal hipotoni, arefleksi, dilde fasikülasyon ve korunmuş göz hareketleri ile zeka',
        vignette:
          '4 aylık kız bebek kollarını yerden kaldıramama, zayıf öksürme ve paradoksal göğüs solunumu nedeniyle getiriliyor. Bebeğin zihinsel olarak çevresiyle çok ilgili olduğu ancak bacaklarının kurbağa pozisyonunda hareketsiz yattığı, derin tendon reflekslerinin tamamen kaybolduğu ve dilinde solucanvari titremeler olduğu görülüyor; CK normal sınırlarda saptanıyor',
        clues: ['paradoksal göğüs solunumu', 'derin tendon reflekslerinin tamamen kaybolduğu', 'dilinde solucanvari titremeler'],
        management: 'Gen tedavisi veya SMN2 splicing düzenleyicileri (nusinersen, risdiplam) ile erken müdahale ve non-invaziv solunum desteği',
        pearl: 'Werdnig-Hoffmann hastalığı olarak da bilinir; periferik kas hastalıklarından farklı olarak kreatin kinaz normaldir ve EMG’de denervasyon bulguları izlenir.',
        trapFalse: 'serum kreatin kinaz düzeyi on binlere ulaşır ve derin tendon refleksleri hiperaktiftir',
        trapHighlight: 'kreatin kinaz düzeyi on binlere ulaşır ve derin tendon refleksleri hiperaktiftir',
      },
      {
        name: 'Miyotonik distrofi',
        target: '19q13’deki DMPK geninde CTG trinükleotid tekrar artışı ve RNA toksisitesi (genetik antisipasyon)',
        hallmark: 'El sıkıştıktan sonra gevşememe (aksiyon miyotonisi), yüz ve boyun kaslarında güçsüzlük, çadır ağız, frontal kellik ve katarakt',
        vignette:
          'Annesinde hafif katarakt ve el kaslarında geç gevşeme öyküsü olan yenidoğanda doğumda ağır hipotoni, solunum yetmezliği, üst dudağın ters V (çadır) şeklinde olması ve pes ekinovarus saptanıyor. Daha büyük kardeşinde ise yumruğunu sıktıktan sonra parmaklarını açmakta gecikme ve kardiyak ileti blokları izleniyor',
        clues: ['doğumda ağır hipotoni', 'üst dudağın ters V (çadır) şeklinde olması', 'yumruğunu sıktıktan sonra parmaklarını açmakta gecikme'],
        management: 'EKG/Holter ile iletim bloklarının izlemi, solunum desteği, katarakt cerrahisi ve miyotoni için meksiletin',
        pearl: 'Otozomal dominant kalıtılır ve anneden geçişte CTG tekrar sayısı katlanarak arttığı için konjenital ağır form (genetik antisipasyon) ortaya çıkar.',
        trapFalse: 'yalnızca proksimal kasları tutar, distal el kasları ve yüz kasları tamamen korunur',
        trapHighlight: 'distal el kasları ve yüz kasları tamamen korunur',
      },
      {
        name: 'Guillain-Barre sendromu',
        target: 'Campylobacter jejuni veya viral enfeksiyon sonrası periferik sinir miyelinine karşı otoimmün moleküler benzerlik',
        hallmark: 'Ayaklardan yukarı doğru çıkan simetrik güçsüzlük, arefleksi ve BOS’ta hücresiz protein yüksekliği (albüminositolojik disosiasyon)',
        vignette:
          '2 hafta önce kanlı ishal geçiren 9 yaşındaki çocuk son 3 gündür bacaklarında uyuşma ve hızla ilerleyen yürüme güçlüğü ile başvuruyor. Muayenede alt ekstremitelerde simetrik flask paralizi, derin tendon reflekslerinin alınamaması ve kollarında da başlayan güçsüzlük saptanıyor. BOS’ta protein 145 mg/dL, hücre sayısı 2/mm³ geliyor',
        clues: ['2 hafta önce kanlı ishal', 'bacaklarında uyuşma ve hızla ilerleyen yürüme güçlüğü', 'BOS’ta protein 145 mg/dL, hücre sayısı 2/mm³'],
        management: 'Vital kapasite ve otonomik bulgu takibi yanında erken IVIG (2 g/kg) veya plazmaferez uygulanması',
        pearl: 'Bakteriyel veya viral enfeksiyondan 1-3 hafta sonra gelişen asendan paralizi ve arefleksi tanısaldır; tedavide kortikosteroidler etkisizdir.',
        trapFalse: 'tedavisinde yüksek doz intravenöz metilprednizolon ilk basamak seçenektir ve BOS’ta belirgin pleositoz görülür',
        trapHighlight: 'yüksek doz intravenöz metilprednizolon ilk basamak seçenektir ve BOS’ta belirgin pleositoz',
      },
    ],
  },

  // 19. Anne Sütü vs İnek Sütü ve Tamamlayıcı Beslenme
  {
    branchId: 'pediatri',
    subTopic: 'Bebek Beslenmesi ve Süt Özellikleri',
    difficulty: 'Temel Spot',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Kolostrum',
        target: 'Doğum sonrası ilk 5 gün salgılanan, sekretuvar IgA, laktoferrin, protein ve yağda eriyen vitaminlerden zengin erken süt',
        hallmark: 'Beta-karoten içeriğine bağlı koyu sarı renk, düşük yağ-laktoz, yüksek protein ve yüksek immünolojik koruma',
        vignette:
          'Doğumdan sonraki ilk 3 günde anneden az miktarda ancak koyu kıvamlı, sarı renkte bir süt salgılandığı görülüyor. Bu erken salgının olgun süte göre daha yüksek sodyum, çinko, laktoferrin ve sekretuvar IgA içerdiği, buna karşın yağ ve laktoz oranının daha düşük olduğu belirtiliyor',
        clues: ['Doğumdan sonraki ilk 3 günde', 'koyu kıvamlı, sarı renkte', 'yüksek sodyum, çinko, laktoferrin ve sekretuvar IgA'],
        management: 'Doğumdan sonraki ilk 1 saat içinde bebeğin emzirilmeye başlanmasıyla bu ilk immün koruyucu salgının mutlaka verilmesi',
        pearl: 'Bebeğin ilk aşısı olarak kabul edilir; mekonyum pasajını hızlandırarak erken sarılığı azaltmada laksatif etki gösterir.',
        trapFalse: 'olgun süte göre laktoz ve yağ içeriği çok yüksektir, protein ve immünglobulin düzeyi ise daha düşüktür',
        trapHighlight: 'laktoz ve yağ içeriği çok yüksektir, protein ve immünglobulin düzeyi ise daha düşüktür',
      },
      {
        name: 'Matür anne sütü',
        target: 'Doğumdan yaklaşık 2 hafta sonra yerleşen, %60 whey / %40 kazein oranına sahip türe özgü ideal bebek besini',
        hallmark: 'Düşük renal solüt yükü, alfa-laktalbümin hakimiyeti, yüksek laktoz ve yüksek demir biyoyararlanımı (D ve K vitamini düşük)',
        vignette:
          '3 haftalık sağlıklı bebeğin tek başına aldığı besinin bileşimi inceleniyor. Protein fraksiyonunun büyük kısmını kolay sindirilen whey proteinlerinin ve alfa-laktalbüminin oluşturduğu, kalsiyum/fosfor oranının yaklaşık 2:1 olduğu ve içindeki az miktardaki demirin %50 oranında emildiği görülüyor',
        clues: ['3 haftalık sağlıklı bebeğin', 'whey proteinlerinin ve alfa-laktalbüminin', 'demirinin %50 oranında emildiği'],
        management: 'İlk 6 ay tek başına verilmesi, doğumda tek doz K vitamini ve yaşamın ilk günlerinden itibaren günlük 400 IU D vitamini desteği',
        pearl: 'Demir miktarı düşük olmasına karşın laktoferrin ve C vitamini sayesinde emilimi çok yüksektir; buna rağmen yalnızca D ve K vitaminleri açısından ek destek gerekir.',
        trapFalse: 'proteinlerinin %80’i kazeinden oluşur ve yüksek böbrek solüt yüküne sahiptir',
        trapHighlight: 'proteinlerinin %80’i kazeinden oluşur ve yüksek böbrek solüt yüküne sahiptir',
      },
      {
        name: 'İnek sütü',
        target: 'Yüksek kazein (%80) ve beta-laktoglobulin içeriği ile aşırı sodyum, fosfat ve böbrek solüt yükü',
        hallmark: '1 yaş altında gizli bağırsak kanamasına bağlı demir eksikliği anemisi, hipernatremik dehidratasyon ve neonatal hipokalsemi riski',
        vignette:
          'Sosyoekonomik nedenlerle 5. aydan itibaren sulandırılmadan hayvansal süt ile beslenen 9 aylık bebekte solukluk, kabızlık ve derin demir eksikliği anemisi saptanıyor. Dışkıda gizli kan pozitif bulunuyor; bu sütün yüksek fosfat yükü nedeniyle yenidoğanda hipokalsemik tetaniyi de tetikleyebildiği biliniyor',
        clues: ['5. aydan itibaren sulandırılmadan hayvansal süt', 'Dışkıda gizli kan pozitif', 'yüksek fosfat yükü'],
        management: '1 yaşından önce kesinlikle verilmemesi, bebeğe uygun standart formüla veya anne sütüne geçilmesi ve oral demir tedavisi',
        pearl: 'Yüksek protein ve mineral içeriği bebek böbreğinin konsantrasyon kapasitesini zorlar; ayrıca esansiyel yağ asidi (linoleik asit) ve C vitamini içeriği çok yetersizdir.',
        trapFalse: 'demir emilimi %50’nin üzerindedir ve 3. aydan itibaren güvenle ana besin olarak verilebilir',
        trapHighlight: 'demir emilimi %50’nin üzerindedir ve 3. aydan itibaren güvenle ana besin olarak verilebilir',
      },
      {
        name: 'Keçi sütü',
        target: 'B12 ve özellikle folik asit düzeylerinin ileri derecede düşük olması nedeniyle DNA sentezinin bozulması',
        hallmark: 'Tek başına beslenmede süt çocuklarında megaloblastik (makrositer) anemi ve hipersegmentasyon',
        vignette:
          'Alerji şüphesiyle annesi tarafından 4 aydır yalnızca kaynatılmış keçi kaynaklı sütle beslenen 7 aylık bebekte solukluk, huzursuzluk ve kilo alamama gelişiyor. Tam kan sayımında Hb 6.8 g/dL, MCV 104 fL, retikülosit düşük ve periferik yaymada hipersegmente nötrofiller görülüyor',
        clues: ['4 aydır yalnızca kaynatılmış keçi kaynaklı sütle', 'MCV 104 fL', 'hipersegmente nötrofiller'],
        management: 'Beslenmenin uygun bebek formülasına çevrilmesi ve oral folik asit desteği verilmesi',
        pearl: 'Pastörize edilmemiş veya modifiye edilmemiş formu hem ciddi folat eksikliğine bağlı megaloblastik anemiye hem de bruselloza ve yüksek solüt yüküne zemin hazırlar.',
        trapFalse: 'yüksek folik asit içeriği sayesinde diğer sütlere göre anemiden koruyucudur ve demir eksikliği yapmaz',
        trapHighlight: 'yüksek folik asit içeriği sayesinde diğer sütlere göre anemiden koruyucudur',
      },
      {
        name: 'Tamamlayıcı beslenme',
        target: '6. aydan itibaren anne sütünün tek başına karşılayamadığı enerji, demir ve çinko ihtiyacının yarı katı gıdalarla karşılanması',
        hallmark: '6. ayda başlanması, 1 yaş altında bal (botulizm) ve tuz-şeker verilmemesi, alerjenlerin geciktirilmemesi',
        vignette:
          '6 aylık term bebeğin annesi ek gıdaya geçiş için danışmanlık istiyor. Hekim bebeğin baş kontrolünün tam ve oturma desteğinin iyi olduğunu görerek sebze-meyve püreleri, yoğurt ve demirden zengin et/tahıllarla günde 1-2 öğün başlanmasını, ancak Clostridium botulinum sporu riski nedeniyle ilk yıl bal verilmemesini söylüyor',
        clues: ['6 aylık term bebek', 'demirden zengin et/tahıllarla', 'ilk yıl bal verilmemesini'],
        management: 'Emzirmeye 2 yaşına kadar devam edilirken 6. ayda pütürlü-püre gıdalara kademeli geçiş, yeni besinlerin 3 gün arayla tek tek denenmesi',
        pearl: 'Yüksek riskli bebeklerde dahi yumurta ve yer fıstığı gibi potansiyel alerjenlerin 6. aydan sonra gereksiz yere 1 yaş sonrasına ertelenmesi alerjiyi azaltmaz, aksine artırabilir.',
        trapFalse: 'sağlıklı tüm bebeklerde demir deposunu korumak için 3. ayda başlanmalı ve ilk gıda olarak bal verilmelidir',
        trapHighlight: '3. ayda başlanmalı ve ilk gıda olarak bal verilmelidir',
      },
    ],
  },

  // 20. Yenidoğan Hipoglisemi ve Bebek Risk Grupları
  {
    branchId: 'pediatri',
    subTopic: 'Yenidoğan Risk Grupları ve Prematürite',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Diyabetik anne bebeği',
        target: 'Maternal hiperglisemiye yanıt olarak fetal pankreas beta hücre hiperplazisi ve doğum sonrası hiperinsülinizm',
        hallmark: 'Makrozomi, ilk saatlerde ağır hipoglisemi, hipokalsemi, polisitemi, RDS riski ve geçici asimetrik septal hipertrofi',
        vignette:
          'Kötü kontrollü gestasyonel diyabeti olan anneden 38 haftalık 4650 gram doğan bebekte doğumdan 1 saat sonra tremor, letarji ve apne gelişiyor. Kan şekeri 22 mg/dL, kalsiyum 6.4 mg/dL, hematokrit %68 bulunuyor; ekokardiyografide interventriküler septumda geçici kalınlaşma izleniyor',
        clues: ['4650 gram doğan', 'Kan şekeri 22 mg/dL, kalsiyum 6.4 mg/dL, hematokrit %68', 'interventriküler septumda geçici kalınlaşma'],
        management: 'Doğumdan hemen sonra erken besleme, semptomatik veya derin hipoglisemide 2 mL/kg %10 dekstroz bolusu ardından 6-8 mg/kg/dk glukoz infüzyonu',
        pearl: 'Fetal hiperinsülinizm nedeniyle klasik konjenital kalp anomalisi TGA ve VSD iken, karakteristik ortopedik/nöral anomali kaudal regresyon sendromu (sakral agenezi) ve sol küçük kolondur.',
        trapFalse: 'insülin eksikliği nedeniyle doğum sonrası hiperglisemi ve mikrozomi ile doğarlar',
        trapHighlight: 'insülin eksikliği nedeniyle doğum sonrası hiperglisemi ve mikrozomi ile doğarlar',
      },
      {
        name: 'İntrauterin büyüme geriliği',
        target: 'Plasental yetmezlik, kronik fetal hipoksi veya TORCH enfeksiyonlarına bağlı yetersiz glikojen ve yağ deposu',
        hallmark: 'Doğum tartısının gestasyon haftasına göre <10. persentil olması, hipotermi, hipoglisemi, polisitemi ve mekonyum aspirasyonu riski',
        vignette:
          'Preeklamptik anneden 38 haftalık doğan 2050 gram bebekte cilt altı yağ dokusunun çok az olduğu, derinin kuru-soyulmuş göründüğü ve baş çevresinin korunduğu (asimetrik gerilik) izleniyor. Doğumun 3. saatinde vücut ısısı 35.6°C, kan şekeri 28 mg/dL ve venöz hematokrit %67 saptanıyor',
        clues: ['38 haftalık doğan 2050 gram', 'baş çevresinin korunduğu', 'vücut ısısı 35.6°C, kan şekeri 28 mg/dL'],
        management: 'Radyan ısıtıcı altında hipotermiden koruma, erken beslenme veya IV dekstrozla normoglisemi sağlama ve semptomatik polisitemide parsiyel kan değişimi',
        pearl: 'Plasental yetmezlikte beyin kan akımı korunduğu için asimetrik tip (baş çevresi normal, karın çevresi ve tartı düşük) gelişirken, erken gebelik enfeksiyonları ve kromozom anomalileri simetrik tip yapar.',
        trapFalse: 'insülin fazlalığına bağlı makrozomi ile seyreder ve hipotermiye karşı çok dirençlidir',
        trapHighlight: 'makrozomi ile seyreder ve hipotermiye karşı çok dirençlidir',
      },
      {
        name: 'Prematüre retinopatisi',
        target: 'Tamamlanmamış retinal vaskülarizasyon zemininde yüksek oksijen maruziyeti sonrası VEGF artışı ve patolojik neovaskülarizasyon',
        hallmark: '32 hafta veya 1500 gram altı bebeklerde avasküler-vasküler retina sınırında demarkasyon çizgisi, fibrovasküler proliferasyon ve retina dekolmanı',
        vignette:
          '27 gebelik haftasında 920 gram doğan ve uzun süre mekanik ventilatörde yüksek oksijen desteği alan bebek yaşamın 5. haftasında göz muayenesine alınıyor. Fundoskopide temporal retinada damarların uç kısmında kabarık sırt (ridge) ve vitreusa doğru uzanan yeni anormal damar yumakları saptanıyor',
        clues: ['27 gebelik haftasında 920 gram', 'uzun süre mekanik ventilatörde yüksek oksijen', 'kabarık sırt (ridge) ve vitreusa doğru uzanan yeni anormal damar yumakları'],
        management: 'Riskli bebeklerde SpO2 hedefinin %90-95 tutulması, 4. haftadan itibaren tarama ve eşik hastalıkta lazer fotokoagülasyon veya anti-VEGF enjeksiyonu',
        pearl: 'En önemli iki risk faktörü düşük doğum tartısı/prematürite ve kontrolsüz yüksek oksijen maruziyetidir; erken tarama körlüğü önler.',
        trapFalse: 'term bebeklerde yüksek doz D vitamini kullanımına bağlı gelişir ve tedavisi sistemik steroiddir',
        trapHighlight: 'term bebeklerde yüksek doz D vitamini kullanımına bağlı gelişir',
      },
      {
        name: 'İntraventriküler kanama',
        target: 'Prematüre bebeklerde subependimal germinal matriksteki frajil kapillerlerin kan akımı dalgalanmalarıyla rüptürü',
        hallmark: 'İlk 72 saatte ortaya çıkan ani hematokrit düşüşü, fontanel kabarıklığı, hipotoni, apne ve transfontanel USG’de ventrikül içi ekojenite',
        vignette:
          '26 haftalık doğan ve RDS nedeniyle entübe edilen bebek yaşamın 2. gününde ani bradikardi, solukluk, ön fontanelde gerginlik ve nöbet geçiriyor. Hemoglobin 14 g/dL’den 8.5 g/dL’ye düşüyor; başucu transfontanel ultrasonografide her iki lateral ventrikülü dolduran ve ventrikülleri genişleten kanama izleniyor',
        clues: ['26 haftalık doğan', 'ön fontanelde gerginlik', 'her iki lateral ventrikülü dolduran'],
        management: 'Antenatal betametazon ile korunma, postnatal kan basıncı/PCO2 dalgalanmalarını önleme ve posthemorajik hidrosefalide seri ventriküler drenaj/şant',
        pearl: 'Olguların %90’ı ilk 72 saat içinde gelişir; germinal matriks 32-34. haftadan sonra gerilediği için term bebeklerde oldukça nadirdir.',
        trapFalse: 'en sık 1. aydan sonra gelişir ve kesin tanısı için tüm bebeklere acil lomber ponksiyon yapılır',
        trapHighlight: 'en sık 1. aydan sonra gelişir ve kesin tanısı için tüm bebeklere acil lomber ponksiyon yapılır',
      },
      {
        name: 'Bronkopulmoner displazi',
        target: 'Prematüre akciğerinde barotravma, oksijen toksisitesi ve inflamasyon sonucu alveolar gelişim duraksaması',
        hallmark: '32 hafta altı bebekte düzeltilmiş 36. haftada veya 28 günden uzun süre oksijen gereksiniminin devam etmesi',
        vignette:
          '26 haftalık 840 gram doğan ve uzun süre mekanik ventilasyon ile CPAP desteği alan bebek yaşamının 35. gününde halen %30 nazal oksijen olmadan satürasyonunu koruyamıyor. Akciğer grafisinde yer yer amfizematöz havalanma artışı ve fibrotik bantlar görülüyor',
        clues: ['26 haftalık 840 gram', 'yaşamının 35. gününde halen %30 nazal oksijen', 'amfizematöz havalanma artışı ve fibrotik bantlar'],
        management: 'Akciğer koruyucu nazik ventilasyon, sıvı kısıtlaması/diüretikler, yüksek kalorili beslenme ve seçilmiş olgularda postnatal düşük doz steroid',
        pearl: 'Klasik formundan farklı olarak "yeni" formunda sürfaktan ve antenatal steroid sonrası hafif seyirli prematürelerde dahi alveoler septasyon bozukluğu ön plandadır.',
        trapFalse: 'doğumdan sonraki ilk 24 saatte tanı konulur ve yüksek basınçlı hiperventilasyon ile tedavi edilir',
        trapHighlight: 'ilk 24 saatte tanı konulur ve yüksek basınçlı hiperventilasyon ile tedavi edilir',
      },
    ],
  },

  // 21. Çocukluk Çağı Alerji ve Atopi
  {
    branchId: 'pediatri',
    subTopic: 'Çocukluk Çağı Alerji ve Atopi',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    entities: [
      {
        name: 'Anafilaksi',
        target: 'IgE aracılı mast hücre ve bazofil degranülasyonuyla histamin, triptaz ve lökotrien salınımı',
        hallmark: 'Alerjen maruziyeti sonrası dakikalar içinde ürtiker-anjiyoödem ile birlikte solunum sıkıntısı veya hipotansiyon gelişmesi',
        vignette:
          '9 yaşındaki çocuk yer fıstığı içeren kurabiye yedikten 10 dakika sonra tüm vücutta kaşıntılı kabarıklıklar, dudaklarda şişme, ses kısıklığı, hışıltı ve baş dönmesiyle acile getiriliyor. Kan basıncı 68/40 mmHg, nabız 148/dk ve stridor mevcuttur',
        clues: ['yer fıstığı içeren kurabiye yedikten 10 dakika sonra', 'dudaklarda şişme, ses kısıklığı, hışıltı', 'Kan basıncı 68/40 mmHg'],
        management: 'Derhal uyluk anterolateral kasına 0.01 mg/kg intramusküler (1:1000) epinefrin, ardından sırtüstü pozisyon, oksijen ve IV sıvı',
        pearl: 'Antihistaminikler ve kortikosteroidler epinefrinin yerini asla tutamaz; bifazik reaksiyon riski nedeniyle hasta en az 4-6 saat gözlenmelidir.',
        trapFalse: 'ilk basamakta intravenöz antihistaminik ve steroid verilip yanıt yoksa epinefrin düşünülmelidir',
        trapHighlight: 'antihistaminik ve steroid verilip yanıt yoksa epinefrin düşünülmelidir',
      },
      {
        name: 'Besin proteini ilişkili enterokolit',
        target: 'Non-IgE (hücresel) aracılı besin alerjisine bağlı akut gastrointestinal inflamasyon ve sıvı şifti',
        hallmark: 'Tetikleyici gıdadan 1-4 saat sonra tekrarlayan fışkırır tarzda kusma, letarji, solukluk, hipotansiyon ve ishal (ürtiker/hışıltı yok)',
        vignette:
          '7 aylık bebek ilk kez pirinç lapası veya yulaf içeren mama yedikten 2.5 saat sonra durdurulamayan kusma atakları, belirgin halsizlik, soğuk soluk görünüm ve sulu ishalle acile getiriliyor. Cildinde ürtiker ya da solunum sıkıntısı saptanmıyor; kan sayımında belirgin lökositoz/nötrofili ve methemoglobinemi görülüyor',
        clues: ['yedikten 2.5 saat sonra durdurulamayan kusma', 'ürtikeri ya da solunum sıkıntısı saptanmıyor', 'belirgin lökositoz/nötrofili'],
        management: 'Akut atakta hızlı IV izotonik sıvı resüsitasyonu ve ondansetron (epinefrin ve antihistaminik etkisizdir); uzun dönemde tetikleyici gıdanın eliminasyonu',
        pearl: 'IgE testleri (prick ve spesifik IgE) negatiftir; sıklıkla sepsis ile karışır ve akut atakta steroid yerine agresif IV sıvı tedavisi hayat kurtarır.',
        trapFalse: 'IgE aracılı olduğu için dakikalar içinde yaygın ürtiker ve stridor ile başlar, tedavide epinefrin kullanılır',
        trapHighlight: 'IgE aracılı olduğu için dakikalar içinde yaygın ürtiker ve stridor ile başlar',
      },
      {
        name: 'Atopik dermatit',
        target: 'Filaggrin gen mutasyonuyla epidermal bariyer bozukluğu ve Th2 sitokin (IL-4, IL-13) aracılı kronik kaşıntılı inflamasyon',
        hallmark: 'Yoğun kaşıntı, bebekte yanak ve ekstansör yüzlerde, büyük çocukta antekübital-popliteal kıvrımlarda likenifiye ekzematöz lezyonlar',
        vignette:
          'Ailesinde astım öyküsü olan 3 yaşındaki çocukta özellikle dirsek içleri ve diz arkalarında şiddetli kaşıntılı, kuru, kızarık ve derisi kalınlaşmış plaklar izleniyor. Cildinin genel olarak çok kuru olduğu ve kaşımaya bağlı yer yer bal rengi kabuklanmalar (sekonder impetigo) geliştiği görülüyor',
        clues: ['dirsek içleri ve diz arkalarında şiddetli kaşıntılı', 'derisi kalınlaşmış plaklar', 'genel olarak çok kuru'],
        management: 'Düzenli yoğun nemlendiricilerle bariyer onarımı, alevlenmelerde topikal kortikosteroid veya kalsinörin inhibitörleri (takrolimus/pimekrolimus)',
        pearl: 'Atopik yürüyüşün ilk basamağıdır; ani veziküler kötüleşme ve ateş gelişirse HSV süperenfeksiyonu (ekzema herpetikum) açısından asiklovir başlanmalıdır.',
        trapFalse: 'bebeklik döneminde yalnızca bez bölgesini tutar ve sistemik antibiyotiklerle kalıcı iyileşir',
        trapHighlight: 'yalnızca bez bölgesini tutar ve sistemik antibiyotiklerle kalıcı iyileşir',
      },
      {
        name: 'Alerjik rinit',
        target: 'Aeroalerjenlere karşı nazal mukozada IgE aracılı erken ve geç faz inflamatuvar yanıt',
        hallmark: 'Hapşırma, berrak burun akıntısı, nazal konjesyon, alerjik selam, Dennie-Morgan çizgileri ve soluk-ödemli nazal konkalar',
        vignette:
          '11 yaşındaki erkek çocuk bahar aylarında artan burun kaşıntısı, peş peşe hapşırma, sulu burun akıntısı ve gözlerde sulanma ile başvuruyor. Muayenede alt göz kapaklarında koyu halkalanma (alerjik şiner), burun sırtında enine çizgi (alerjik selam izi) ve soluk morumsu şiş burun konkaları saptanıyor',
        clues: ['burun sırtında enine çizgi', 'alt göz kapaklarında koyu halkalanma', 'soluk morumsu şiş burun konkaları'],
        management: 'Alerjen korunması, hafif olgularda ikinci kuşak oral antihistaminik, orta-ağır/persistan olgularda en etkili tedavi olarak intranazal kortikosteroid',
        pearl: 'Burun tıkanıklığı dahil tüm semptomları en iyi kontrol eden ilaç grubu intranazal steroidlerdir; topikal dekonjestanlar rinitis medikamentoza nedeniyle 3-5 günden uzun kullanılmaz.',
        trapFalse: 'uzun süreli tedavide en etkili ilaç grubu topikal nazal dekonjestan (oksimetazolin) spreylerdir',
        trapHighlight: 'topikal nazal dekonjestan (oksimetazolin) spreylerdir',
      },
      {
        name: 'İnek sütü protein alerjisi',
        target: 'Kazein ve peynir altı suyu (beta-laktoglobulin) proteinlerine karşı IgE veya non-IgE aracılı immün reaksiyon',
        hallmark: 'Süt çocukluğunda kanlı-mukuslu dışkılama (alerjik proktokolit) veya ürtiker/kusma ile büyüme geriliği',
        vignette:
          'Yalnızca anne sütü ile beslenen ve genel durumu gayet iyi, kilo alımı normal 3 aylık bebekte son 10 gündür bezinde parlak kırmızı kan çizgileri ve mukuslu dışkı görülüyor. Enfeksiyon ve anal fissür dışlandıktan sonra annenin diyetinden süt ve süt ürünleri çıkarıldığında kanamanın 72 saatte tamamen durduğu izleniyor',
        clues: ['genel durumu gayet iyi, kilo alımı normal', 'parlak kırmızı kan çizgileri ve mukuslu dışkı', 'süt ve süt ürünleri çıkarıldığında kanamanın 72 saatte tamamen durduğu'],
        management: 'Anne sütü alan bebekte annenin diyetinden süt proteinlerinin çıkarılması; formüla alanlarda ileri derecede hidrolize veya amino asit bazlı mama',
        pearl: 'Laktoz intoleransından farklı olarak dışkıda kan görülür ve keçi/koyun sütü ile çapraz reaksiyon %90 üzerinde olduğundan alternatif sütler verilmez.',
        trapFalse: 'tedavide bebek laktozsuz formülaya veya keçi sütüne geçirilmelidir',
        trapHighlight: 'laktozsuz formülaya veya keçi sütüne geçirilmelidir',
      },
    ],
  },

  // 22. Pediatrik Zehirlenmeler
  {
    branchId: 'pediatri',
    subTopic: 'Pediatrik Zehirlenmeler ve Antidotlar',
    difficulty: 'Klinik Vaka',
    examFrequency: 'Her TUS Sorulur',
    osymTwinYear: '2019',
    entities: [
      {
        name: 'Parasetamol zehirlenmesi',
        target: 'Glutatyon depolarının tükenmesiyle CYP2E1 üzerinden oluşan toksik NAPQI metabolitinin hepatosellüler nekroz yapması',
        hallmark: 'İlk 24 saatte hafif bulantı sonrası 24-72. saatte sağ üst kadran ağrısı ve AST/ALT’nin binlere yükselmesi',
        vignette:
          '3 yaşındaki çocuk 6 saat önce yanlışlıkla çok sayıda ateş düşürücü şurup içtikten sonra hafif kusma dışında asemptomatik olarak getiriliyor. 4. saatte alınan ilaç düzeyi Rumack-Matthew nomogramında toksik çizginin üzerinde saptanıyor; tedavi verilmezse 48 saat içinde ağır karaciğer nekrozu gelişeceği öngörülüyor',
        clues: ['ateş düşürücü şurup içtikten sonra', 'Rumack-Matthew nomogramında toksik çizginin üzerinde', 'ağır karaciğer nekrozu'],
        management: 'Glutatyon prekürsörü olarak erken dönemde (ilk 8 saatte en etkili) oral veya IV N-asetilsistein antidot tedavisi',
        pearl: 'İlk 24 saatte transaminazlar normal olabileceğinden karar akut tek doz alımda 4. saat kan düzeyi ve Rumack-Matthew nomogramı ile verilir.',
        trapFalse: 'ilk 24 saatte karaciğer enzimleri normalse toksisite dışlanır ve antidot olarak flumazenil verilir',
        trapHighlight: 'antidot olarak flumazenil verilir',
      },
      {
        name: 'Demir zehirlenmesi',
        target: 'Gastrointestinal korozif mukoza hasarı ve mitokondriyal oksidatif fosforilasyonun bozulmasıyla laktik asidoz',
        hallmark: 'Erken dönemde hemorajik kusma/ishal, yüksek anyon açıklı metabolik asidoz ve direkt grafide midede radyoopak tabletler',
        vignette:
          '2 yaşındaki çocuk annesinin gebelikte kullandığı vitamin tabletlerinden yaklaşık 25 adet yuttuktan 2 saat sonra kanlı kusma, karın ağrısı ve ishal ile getiriliyor. Kan gazında pH 7.18, anyon açığı yüksek metabolik asidoz, hiperglisemi ve lökositoz bulunuyor; ayakta karın grafisinde midede çok sayıda radyoopak görüntü saptanıyor',
        clues: ['kanlı kusma, karın ağrısı', 'anyon açığı yüksek metabolik asidoz', 'midede çok sayıda radyoopak görüntü'],
        management: 'Aktif kömür bağlamadığı için polietilen glikol ile tüm bağırsak irrigasyonu ve ağır olgularda IV deferoksamin şelasyonu',
        pearl: 'Aktif kömür ağır metalleri ve bu elementi bağlamaz; deferoksamin tedavisi idrarı karakteristik olarak "pembe-şarap" (vin rose) rengine boyar.',
        trapFalse: 'ilk tercih dekontaminasyon yöntemi aktif kömürdür ve antidotu D-penisilamindir',
        trapHighlight: 'aktif kömürdür ve antidotu D-penisilamindir',
      },
      {
        name: 'Salisilat zehirlenmesi',
        target: 'Solunum merkezinin doğrudan uyarılması ve oksidatif fosforilasyonun eşleşmesinin bozulması (uncoupling)',
        hallmark: 'Tinnitus, hiperventilasyon, hipertermi, erken respiratuvar alkaloz ve ardından yüksek anyon açıklı metabolik asidoz mikst tablosu',
        vignette:
          '15 yaşındaki ergen çok sayıda ağrı kesici tablet aldıktan 4 saat sonra kulak çınlaması, hızlı derin nefes alma, terleme ve ateş yüksekliğiyle başvuruyor. Arteriyel kan gazında pH 7.43, PaCO2 19 mmHg ve HCO3 12 mEq/L saptanıyor; idrarda keton pozitif bulunuyor',
        clues: ['kulak çınlaması, hızlı derin nefes alma', 'PaCO2 19 mmHg ve HCO3 12 mEq/L', 'terleme ve ateş yüksekliği'],
        management: 'Aktif kömür, IV sodyum bikarbonat ile idrar alkalinizasyonu (iyon tuzağı ile atılımı artırmak için) ve ağır olgularda hemodiyaliz',
        pearl: 'Küçük çocuklarda başlangıçtaki respiratuvar alkaloz fazı çok kısa sürer ve hızla ağır yüksek anyon açıklı metabolik asidoz ile hipoglisemi gelişir.',
        trapFalse: 'eliminasyonunu hızlandırmak için amonyum klorür ile idrar asidifikasyonu yapılmalıdır',
        trapHighlight: 'amonyum klorür ile idrar asidifikasyonu yapılmalıdır',
      },
      {
        name: 'Organofosfat zehirlenmesi',
        target: 'Asetilkolinesteraz enziminin irreversibl fosforilasyonu sonucu sinapslarda aşırı asetilkolin birikimi',
        hallmark: 'Bilinç bulanıklığı, miyozis, bronkore, bronkospazm, hipersalivasyon, bradikardi, ishal (DUMBBELLS) ve kas fasikülasyonları',
        vignette:
          'Tarım ilacı kutusuyla oynayan 5 yaşındaki çocuk acile bol tükürük akması, gözyaşı, kusma, ishal, hışıltılı solunum ve yaygın kas seğirmeleriyle getiriliyor. Muayenede kalp hızı 54/dk, pupiller toplu iğne başı kadar küçülmüş ve akciğerlerde yaygın sekresyon ralleri duyuluyor',
        clues: ['bol tükürük akması, gözyaşı, kusma, ishal', 'kalp hızı 54/dk, pupiller toplu iğne başı kadar küçülmüş', 'yaygın kas seğirmeleri'],
        management: 'Cilt dekontaminasyonu, muskarinik bulgular (özellikle bronkore) düzelene kadar atropin ve enzim reaktivatörü pralidoksim (2-PAM)',
        pearl: 'Atropin muskarinik reseptörleri bloke ederek solunum sekresyonlarını kurutur ancak nikotinik etkiler (kas güçsüzlüğü ve solunum felci) için pralidoksim şarttır.',
        trapFalse: 'antikolinerjik toksidrom oluşturduğu için midriyazis, kuru cilt ve taşikardi yapar; tedavide fizostigmin verilir',
        trapHighlight: 'midriyazis, kuru cilt ve taşikardi yapar; tedavide fizostigmin verilir',
      },
      {
        name: 'Karbonmonoksit zehirlenmesi',
        target: 'Hemoglobine oksijenden 200-250 kat yüksek afiniteyle bağlanarak oksijen taşınmasını ve sitokrom oksidazı bloke etmesi',
        hallmark: 'Baş ağrısı, konfüzyon, normal PaO2 ve pulse oksimetriye rağmen ko-oksimetride yüksek karboksihemoglobin ve laktik asidoz',
        vignette:
          'Kış günü doğalgaz sobası olan evde sabah baygın halde bulunan 10 yaşındaki çocukta şiddetli baş ağrısı, bulantı ve konfüzyon izleniyor. Parmak ucu pulse oksimetre %99 göstermesine rağmen venöz kan gazı ko-oksimetrisinde karboksihemoglobin düzeyi %34 ve laktat yüksek bulunuyor',
        clues: ['doğalgaz sobası olan evde', 'pulse oksimetre %99 göstermesine rağmen', 'karboksihemoglobin düzeyi %34'],
        management: 'Derhal geri solumasız maske ile %100 normobarik oksijen; bilinç kaybı, nörolojik defisit veya COHb >%25 ise hiperbarik oksijen tedavisi',
        pearl: 'Standart pulse oksimetre oksihemoglobin ile karboksihemoglobini ayırt edemediği için yanıltıcı biçimde normal ölçer; tanı ko-oksimetri ile konur.',
        trapFalse: 'pulse oksimetrede belirgin desatürasyon görülür ve oksijen dissosiyasyon eğrisini sağa kaydırır',
        trapHighlight: 'pulse oksimetrede belirgin desatürasyon görülür ve oksijen dissosiyasyon eğrisini sağa kaydırır',
      },
    ],
  },
];
