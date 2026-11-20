import Foundation
import Security
#if canImport(ActivityKit)
import ActivityKit
#endif

public struct TusWidgetPearl: Codable, Hashable {
    public let id: String
    public let branch: String
    public let category: String
    public let title: String
    public let summary: String
    public let comparison: String
    public let trap: String
}

public struct TusWidgetSnapshot: Codable {
    public var targetTusDate: String
    public var examLabel: String
    public var streakDays: Int
    public var todaySolved: Int
    public var dailyTarget: Int
    public var todayStudyMinutes: Int
    public var dailyGoalMinutes: Int
    public var topicTourPct: Int
    public var pinnedPearlId: String?
    public var updatedAt: Date

    public init(
        targetTusDate: String,
        examLabel: String,
        streakDays: Int,
        todaySolved: Int,
        dailyTarget: Int,
        todayStudyMinutes: Int,
        dailyGoalMinutes: Int,
        topicTourPct: Int = 0,
        pinnedPearlId: String? = nil,
        updatedAt: Date = Date()
    ) {
        self.targetTusDate = targetTusDate
        self.examLabel = examLabel
        self.streakDays = streakDays
        self.todaySolved = todaySolved
        self.dailyTarget = dailyTarget
        self.todayStudyMinutes = todayStudyMinutes
        self.dailyGoalMinutes = dailyGoalMinutes
        self.topicTourPct = topicTourPct
        self.pinnedPearlId = pinnedPearlId
        self.updatedAt = updatedAt
    }

    public static let defaultSnapshot = TusWidgetSnapshot(
        targetTusDate: "2027-03-27",
        examLabel: "2027-TUS 1. Dönem",
        streakDays: 1,
        todaySolved: 0,
        dailyTarget: 40,
        todayStudyMinutes: 0,
        dailyGoalMinutes: 120,
        topicTourPct: 0,
        pinnedPearlId: nil,
        updatedAt: Date()
    )
}

public enum TusOfficialSchedule {
    public static func daysRemaining(targetDateStr: String, now: Date = Date()) -> (days: Int, hours: Int, label: String) {
        let trTimeZone = TimeZone(secondsFromGMT: 3 * 3600) ?? .current
        var calendar = Calendar(identifier: .gregorian)
        calendar.timeZone = trTimeZone

        let normalizedDate: String
        switch targetDateStr {
        case "2026-03-22", "2026-09-20", "2027-03-21":
            normalizedDate = "2027-03-27"
        case "2027-09-19":
            normalizedDate = "2027-08-22"
        default:
            normalizedDate = targetDateStr
        }

        let parts = normalizedDate.split(separator: "-").compactMap { Int($0) }
        var targetDate: Date?
        if parts.count == 3 {
            let comps = DateComponents(
                timeZone: trTimeZone,
                year: parts[0],
                month: parts[1],
                day: parts[2],
                hour: 10,
                minute: 15
            )
            targetDate = calendar.date(from: comps)
        }

        if targetDate == nil || (targetDate ?? Date.distantPast) <= now {
            let upcomingDates = [(2027, 3, 27), (2027, 8, 22), (2028, 3, 26), (2028, 8, 20)]
            for (y, m, d) in upcomingDates {
                if let cand = calendar.date(from: DateComponents(timeZone: trTimeZone, year: y, month: m, day: d, hour: 10, minute: 15)),
                   cand > now {
                    targetDate = cand
                    break
                }
            }
            if targetDate == nil {
                let nextY = calendar.component(.year, from: now) + 1
                targetDate = calendar.date(from: DateComponents(timeZone: trTimeZone, year: nextY, month: 3, day: 26, hour: 10, minute: 15)) ?? now
            }
        }

        let diffSec = max(0, Int((targetDate ?? now).timeIntervalSince(now)))
        let days = diffSec / 86400
        let hours = (diffSec % 86400) / 3600

        let shortLabel: String
        if normalizedDate.hasPrefix("2027-03") {
            shortLabel = "2027-TUS 1"
        } else if normalizedDate.hasPrefix("2027-08") {
            shortLabel = "2027-TUS 2"
        } else if normalizedDate.hasPrefix("2028-03") {
            shortLabel = "2028-TUS 1"
        } else if normalizedDate.hasPrefix("2028-08") {
            shortLabel = "2028-TUS 2"
        } else {
            shortLabel = "ÖSYM TUS"
        }

        return (days, hours, shortLabel)
    }
}

public enum TusDailySpots {
    public static let allPearls: [TusWidgetPearl] = [
        TusWidgetPearl(id: "exp-1", branch: "Farmakoloji", category: "Toksikoloji & Antidot", title: "DOAK Spesifik Antidotları", summary: "Dabigatran antidotu İdarusizumab; Apiksaban/Rivaroksaban (FXa) antidotu Andeksanet alfadır.", comparison: "Heparin → Protamin sülfat • Varfarin acil kanama → 4-Faktör PCC + İV K Vitamini.", trap: "Dabigatran diyalizle uzaklaştırılabilirken, apiksaban ve rivaroksaban yüksek protein bağlanması nedeniyle diyalizle uzaklaştırılamaz!"),
        TusWidgetPearl(id: "exp-2", branch: "Biyokimya", category: "Enzim & Genetik", title: "Gaucher vs Niemann-Pick", summary: "Gaucher: Beta-glukoserebrozidaz eksikliği, buruşuk kağıt makrofaj ve Erlenmeyer femur.", comparison: "Kiraz kırmızısı makula + HSM VAR = Niemann-Pick • HSM YOK + hiperakuzi = Tay-Sachs.", trap: "Sfingolipidozların tamamı otozomal resesif kalıtılır; yalnızca Fabry hastalığı (alfa-galaktosidaz A) X’e bağlı resesiftir!"),
        TusWidgetPearl(id: "exp-3", branch: "Kadın Doğum", category: "Acil Kırmızı Bayrak", title: "MgSO4 Toksisitesi & Antidot", summary: "Magnezyum toksisitesinde ilk kaybolan bulgu patella refleksidir; antidotu İV Kalsiyum glukonat.", comparison: "Konvülziyon profilaksisi: MgSO4 • Akut ağır HT tedavisi: İV Labetalol, Hidralazin veya Oral Nifedipin.", trap: "MgSO4 bir antihipertansif DEĞİLDİR; böbrek yetmezliği/oligüride (<30 mL/saat) toksisite riski çok yüksektir!"),
        TusWidgetPearl(id: "exp-4", branch: "Dahiliye", category: "Acil Kırmızı Bayrak", title: "Tümör Lizis Sendromu", summary: "Hiperürisemi, hiperkalemi ve hiperfosfatemi gelişirken kalsiyum DÜŞER (sekonder hipokalsemi).", comparison: "Profilaksi: Hidrasyon + Allopürinol • Oluşmuş ürik asidi allantoine yıkan: Rasburikaz.", trap: "Rasburikaz G6PD eksikliği olan hastalarda ağır hemolitik anemi ve methemoglobinemi yaptığı için KESİNLİKLE kontrendikedir!"),
        TusWidgetPearl(id: "exp-5", branch: "Pediatri", category: "İlk Tercih & Altın Standart", title: "Kawasaki & Koroner Anevrizma", summary: "5 günden uzun ateş + mukokütanöz bulgularda ilk tercih: İVİG + yüksek doz Aspirin.", comparison: "Tanı: Klinik kriterler • Komplikasyon takibi: Ekokardiyografi (koroner arter anevrizması).", trap: "Kawasaki’de trombositoz subakut dönemde görülür; tedavide kortikosteroid değil, ilk 10 günde tek doz İVİG + Aspirin altın standarttır!"),
        TusWidgetPearl(id: "exp-6", branch: "Cerrahi", category: "İlk Tercih & Altın Standart", title: "Akut Kolanjit & Reynolds", summary: "Charcot triyadı (ateş, sarılık, sağ üst ağrı) + şok ve konfüzyon = Reynolds pentadı.", comparison: "İlk görüntüleme: USG • Hem tanı hem acil biliyer drenaj altın standardı: ERCP.", trap: "Akut süpüratif kolanjitte tek başına antibiyotik hayat kurtarmaz; acil biliyer dekompresyon (ERCP) şarttır!"),
        TusWidgetPearl(id: "exp-7", branch: "Biyokimya", category: "Enzim & Genetik", title: "PFK-1 & Glikoliz Regülasyonu", summary: "Glikolizin hız kısıtlayıcı enzimi PFK-1’dir; en güçlü allosterik aktivatörü Fruktoz-2,6-BP’dir.", comparison: "Glikoliz hız kısıtlayıcı: PFK-1 • Glukoneogenez hız kısıtlayıcı: Fruktoz-1,6-bisfosfataz.", trap: "Sitrat ve yüksek ATP düzeyi PFK-1’i inhibe ederken, AMP ve Fruktoz-2,6-BP aktive eder!"),
        TusWidgetPearl(id: "exp-8", branch: "Mikrobiyoloji", category: "2027 Beklenen", title: "Botulinum vs Tetanoz Toksini", summary: "Her ikisi de SNARE proteinlerini parçalar: Botulinum ACh’yi, Tetanoz GABA/Glisini bloke eder.", comparison: "Gevşek felç + pitozis + bal öyküsü = Botulizm • Trismus + opistotonus = Tetanoz.", trap: "Sütçocuğu botulizminde bağırsakta spor çoğalıp toksin salınımını artırabileceği için antibiyotik verilmez; insan botulizm immünglobulini (BabyBIG) verilir!"),
        TusWidgetPearl(id: "exp-9", branch: "Patoloji", category: "Patognomonik Bulgu", title: "Hızlı Progresif GN İF Tipleri", summary: "Lineer IgG: Goodpasture • Granüler birikim: İmmün kompleks • Birikim yok (Pauci): ANCA vasküliti.", comparison: "c-ANCA (Anti-PR3): Granülomatöz polianjiit • p-ANCA (Anti-MPO): Mikroskopik polianjiit / EGPA.", trap: "Goodpasture sendromunda hedef Tip IV kollajenin alfa-3 zinciridir (NC1 alanı); Alport sendromunda ise Tip IV kollajen mutasyonu vardır!"),
        TusWidgetPearl(id: "exp-10", branch: "Anatomi", category: "2027 Beklenen", title: "Humerus Kırığı Sinir Eşleşmesi", summary: "Cerrahi boyun: N. axillaris • Gövde (sulkus): N. radialis • Медиal epikondil: N. ulnaris.", comparison: "Suprakondiler kırık: N. medianus (anterior interosseöz) + A. brachialis (Volkmann iskemisi).", trap: "Humerus anatomik boyun kırığında sinir hasarından ziyade kaput humeri avasküler nekrozu ön plandadır!"),
        TusWidgetPearl(id: "exp-11", branch: "Dahiliye", category: "Acil Kırmızı Bayrak", title: "Hiperkalemi İlk Acil Adım", summary: "EKG bulgusu olan ağır hiperkalemide İLK verilecek ajan İV Kalsiyum glukonattır (membran koruma).", comparison: "1. Koruma: Kalsiyum glukonat • 2. Hücre içine sokma: İnsülin+Dekstroz, Salbutamol • 3. Atılım: Furosemid / Patiromer / Diyaliz.", trap: "Digoksin toksisitesine bağlı hiperkalemide İV kalsiyum \"taş kalp\" riskini artırabileceği için yerine Digoksin Fab antikoru tercih edilir!"),
        TusWidgetPearl(id: "exp-12", branch: "Fizyoloji", category: "İlk Tercih & Altın Standart", title: "Prerenal vs ATN (FENa Kuralı)", summary: "Prerenal ABH: FENa < %1, İdrar Na < 20, İdrar Osm > 500 • ATN: FENa > %2, Çamurlu kahve silendir.", comparison: "Diüretik kullanan hastada FENa yanıltıcı yükselir; bu durumda FEÜre (< %35 = Prerenal) kullanılır!", trap: "Kontrast nefropatisi ve rabdomiyoliz akut tübüler hasar yapmasına rağmen erken dönemde FENa < %1 çıkabilen önemli istisnalardır!"),
        TusWidgetPearl(id: "exp-13", branch: "Histoloji", category: "Enzim & Genetik", title: "3. ve 4. Farengeal Kese", summary: "3. Kese: Timus + İnferior paratiroid • 4. Kese: Süperior paratiroid + Ultimobrankiyal cisim.", comparison: "DiGeorge sendromu (22q11.2 delesyonu): Timus aplazisi (T lenfosit yok) + hipokalsemik tetani + konotrunkal kalp anomalisi.", trap: "Kalsitonin salgılayan parafoliküler C hücreleri endodermden değil, nöral krest kökenli ultimobrankiyal cisimden gelişir!"),
        TusWidgetPearl(id: "exp-14", branch: "Biyokimya", category: "Enzim & Genetik", title: "Kollajen: C Vitamini vs Bakır", summary: "Hücre içi hidroksilasyon: C vitamini + Fe+2 (Skorbüt) • Hücre dışı çapraz bağ: Lizil oksidaz + Bakır.", comparison: "C vitamini eksikliği = Skorbüt (kanama) • ATP7A bakır eksikliği = Menkes (kırılgan saç, aort anevrizması).", trap: "Kollajenin çapraz bağlanma basamağı hücre içinde DEĞİL, hücre dışı (ekstraselüler) matrikste gerçekleşir!"),
        TusWidgetPearl(id: "exp-15", branch: "Pediatri", category: "2027 Beklenen", title: "İlk Gün Siyanoz: D-TGA vs TOF", summary: "Yenidoğanda ilk gün siyanozun en sık nedeni Büyük Arter Transpozisyonu; 1 yaş sonrası Fallot’tur.", comparison: "D-TGA acil yaklaşım: Duktusu açık tutmak için Prostaglandin E1 infüzyonu + Rashkind balon septostomi.", trap: "Diyabetik anne bebeklerinde en sık görülen KKH VSD/hipertrofik kardiyomiyopatidir; ancak spesifik siyanotik birliktelik D-TGA’dır!"),
        TusWidgetPearl(id: "exp-16", branch: "Farmakoloji", category: "Toksikoloji & Antidot", title: "Metanol & Etilen Glikol", summary: "Her ikisinde de yüksek anyon ve osmolar açıklı asidoz olur; ilk tercih antidot Fomepizoldür.", comparison: "Metanol → Formik asit (körlük/retina ödemi) • Etilen glikol → Kalsiyum oksalat kristali (ABH).", trap: "İzopropil alkol zehirlenmesinde ketozis ve osmolar açık vardır ancak metabolik ASİDOZ GELİŞMEZ (asetona dönüşür)!"),
        TusWidgetPearl(id: "exp-17", branch: "Patoloji", category: "Enzim & Genetik", title: "Lenfoma Translokasyonları", summary: "t(14;18) BCL2: Foliküler • t(11;14) Siklin D1: Mantle • t(8;14) MYC: Burkitt lenfoma.", comparison: "Ki-67 proliferasyon indeksi %100’e yakın en hızlı büyüyen insan tümörü: Burkitt lenfoma.", trap: "Foliküler lenfomada apoptoz azalmıştır (proliferasyon hızı düşüktür); Burkitt lenfomada ise hem mitoz hem apoptoz çok yüksektir!"),
        TusWidgetPearl(id: "exp-18", branch: "Cerrahi", category: "Acil Kırmızı Bayrak", title: "Tansiyon Pnömotoraks vs Tamponad", summary: "Her ikisinde de hipotansiyon ve BVD vardır; solunum sesi tek taraflı yoksa Tansiyon Pnömotorakstır.", comparison: "Tamponad (Beck triyadı): Hipotansiyon + Boyun venöz dolgunluğu + Derinden gelen kalp sesleri (akciğer sesleri doğal!).", trap: "Tansiyon pnömotoraks şüphesinde tanı için PA akciğer grafisi beklemek ölümcül zaman kaybıdır — tanı tamamen kliniktir!"),
        TusWidgetPearl(id: "exp-19", branch: "Dahiliye", category: "İlk Tercih & Altın Standart", title: "Özofagus Motilite: Akalazya", summary: "Baryumlu grafide kuş gagası görünümü vardır; kesin tanı altın standardı Özofageal Manometridir.", comparison: "İlk yapılması gereken: Psödoakalazyayı (mide kardiya kanseri) dışlamak için Endoskopi • Kesin tanı: Yüksek çözünürlüklü Manometri.", trap: "İleri yaşta kısa sürede (<6 ay) başlayan disfaji ve ciddi kilo kaybında manometriden önce mutlaka malignite endoskopiyle dışlanmalıdır!"),
        TusWidgetPearl(id: "exp-20", branch: "Mikrobiyoloji", category: "Patognomonik Bulgu", title: "Aspergillus vs Mucor Ayırımı", summary: "Aspergillus: Septalı, 45° dar açılı dallanma • Mucor/Rhizopus: Septasız, 90° dik açılı geniş hif.", comparison: "İnvaziv Aspergillozda ilk tercih tedavi: Vorikonazol • Mukormikozda ilk tercih: Lipozomal Amfoterisin B (+ Posakonazol/İsavukonazol).", trap: "Vorikonazol ve ekinokandinler Mucorales (Mucor/Rhizopus) türlerine karşı TAMAMEN ETKİSİZDİR!"),
        TusWidgetPearl(id: "exp-21", branch: "Kadın Doğum", category: "İlk Tercih & Altın Standart", title: "Previa vs Ablasyo Plasenta", summary: "Ağrısız parlak kırmızı kanama = Plasenta Previa • Ağrılı koyu kanama + hipertonik uterus = Ablasyo.", comparison: "Fetal bradikardi + membran rüptürüyle eş zamanlı ağrısız vajinal kanama = Vaza Previa (Apt testi fetal Hb +).", trap: "Üçüncü trimester kanamasıyla gelen gebede USG ile plasenta previa dışlanmadan KESİNLİKLE dijital vajinal tuşe yapılmaz!"),
        TusWidgetPearl(id: "exp-22", branch: "Biyokimya", category: "2027 Beklenen", title: "Wernicke & Tiamin Kuralı", summary: "Alkolik/malnütrisyonlu hastada dekstrozdan ÖNCE İV Tiamin (B1) verilmezse Wernicke tetiklenir.", comparison: "Wernicke triyadı: Konfüzyon + Oftalmopleji (CN VI felci/nistagmus) + Ataksi.", trap: "B2 (Riboflavin) eksikliği eritrosit glutatyon redüktaz ile; B1 (Tiamin) ise eritrosit transketolaz ile değerlendirilir!"),
        TusWidgetPearl(id: "exp-23", branch: "Dahiliye", category: "2027 Beklenen", title: "APL (AML-M3) & ATRA Tedavisi", summary: "t(15;17) PML-RARA pozitif akut promiyelositik lösemide DİK sıktır; tedavide ATRA + Arsenik verilir.", comparison: "ATRA (all-trans retinoik asit) olgunlaşma blokajını kaldırarak blastları matür nötrofile farklılaştırır.", trap: "ATRA tedavisinin önemli yan etkisi ateş, dispne, pulmoner infiltrat ve plevral efüzyonla giden Diferansiyasyon Sendromudur (tedavisi Deksametazon)!"),
        TusWidgetPearl(id: "exp-24", branch: "Pediatri", category: "Enzim & Genetik", title: "KAH Tipleri: 21 vs 11-Beta", summary: "21-OH eksikliği: Hipotansiyon + tuz kaybı • 11-Beta OH eksikliği: HİPERTANSİYON + hipokalemi.", comparison: "Hipertansiyon + Hipokalemi + Virilizasyon YOK (seksüel infantilizm) = 17-Alfa hidroksilaz eksikliği.", trap: "21-hidroksilaz eksikliği yenidoğan taramasında 17-hidroksiprogesteron (17-OHP) yüksekliği ile taranır!"),
        TusWidgetPearl(id: "exp-25", branch: "Farmakoloji", category: "Acil Kırmızı Bayrak", title: "NMS vs Serotonin Sendromu", summary: "Kurşun boru rijiditesi = Nöroleptik Malign Sendrom (Dantrolen) • Hiperrefleksi/klonus = Serotonin.", comparison: "NMS tedavisi: Dantrolen + Bromokriptin • Serotonin sendromu antidotu: Siproheptadin (5-HT2 antagonisti).", trap: "İki tabloyu fizik muayenede ayıran en hızlı bulgu nöromüsküler muayenedir: Klonus ve hiperrefleksi Serotonin sendromu lehinedir!"),
        TusWidgetPearl(id: "exp-26", branch: "Cerrahi", category: "Patognomonik Bulgu", title: "Tiroid Kanseri Özellikleri", summary: "Papiller: Orfan Annie çekirdek & lenf yayılımı • Medüller: RET mutasyonu, amiloid & Kalsitonin.", comparison: "Medüller tiroid kanseri (parafoliküler C hücresi): MEN 2A/2B ile ilişkilidir; cerrahi öncesi mutlaka Feokromositoma dışlanmalıdır!", trap: "Foliküler neoplazi şüphesinde ince iğne aspirasyon biyopsisi (İİAB) kesin tanı KOYAMAZ; eksizyonel histopatolojide kapsül/vasküler invazyon şarttır!"),
        TusWidgetPearl(id: "exp-27", branch: "Anatomi", category: "Patognomonik Bulgu", title: "Kafa Tabanı Foramenleri", summary: "Foramen rotundum: CN V2 • Foramen ovale: CN V3 • Foramen spinosum: A. meningea media.", comparison: "Foramen jugulare: CN IX, X, XI + V. jugularis interna • Canalis hypoglossi: CN XII.", trap: "N. facialis (CN VII) ve N. vestibulocochlearis (CN VIII) foramen jugulareden DEĞİL, meatus acusticus internustan geçer (CN VII foramen stylomastoideumdan çıkar)!"),
        TusWidgetPearl(id: "exp-28", branch: "Dahiliye", category: "İlk Tercih & Altın Standart", title: "TTP Pentadı & Plazmaferez", summary: "ADAMTS13 eksikliği (TTP): MAHA + trombositopeni + nörolojik bulgu. Acil tedavi Plazmaferezdir.", comparison: "TTP’de DİK’ten farklı olarak PT, aPTT ve fibrinojen NORMALDİR!", trap: "TTP veya HÜS tanılı hastaya aktif hayatı tehdit eden kanama yoksa TROMBOSİT SÜSPANSİYONU VERİLMEZ (mikrotrombozu ağırlaştırır)!"),
        TusWidgetPearl(id: "exp-29", branch: "Patoloji", category: "Patognomonik Bulgu", title: "Nefrotik Sendrom EM & Antikor", summary: "Erişkinde primer membranöz nefropatide Anti-PLA2R pozitiftir; çocukta en sık Minimal Değişikliktir.", comparison: "Membranöz nefropati: Subepitelyal \"spike and dome\" birikim • MPGN: Çift kontur (tramvay izi).", trap: "Hodgkin lenfoma en sık Minimal Değişiklik Hastalığı ile; solid tümörler ve HBV ise Membranöz Nefropati ile ilişkilidir!"),
        TusWidgetPearl(id: "exp-30", branch: "Fizyoloji", category: "2027 Beklenen", title: "O2-Hb Eğrisini Sağa Kaydıranlar", summary: "Asidoz (düşük pH), yüksek PCO2, ateş ve 2,3-BPG artışı eğriyi SAĞA kaydırır (dokuya O2 bırakır).", comparison: "Sola kaydıranlar (afinite artar, dokuya O2 verilemez): Karbonmonoksit, Methemoglobinemi, HbF, Alkaloz, Hipotermi.", trap: "Kronik anemide ve yüksek irtifada eritrosit içi 2,3-BPG artar; banka kanında ise bekledikçe 2,3-BPG azaldığı için eğri SOLA kayar!"),
        TusWidgetPearl(id: "exp-31", branch: "Pediatri", category: "İlk Tercih & Altın Standart", title: "Hipertrofik Pilor Stenozu", summary: "3–6 haftalık bebekte safrasız fışkırır kusma + zeytin kitle + hipokloremik hipokalemik alkaloz.", comparison: "Tanıda ilk tercih: Ultrasonografi • Cerrahi (Ramstedt piloromiyotomi) ÖNCESİ ilk adım: İV sıvı-elektrolit (%0.9 NaCl + KCl) düzeltilmesi!", trap: "Pilor stenozu CERRAHİ BİR ACİL DEĞİLDİR, MEDİKAL BİR ACİLDİR; alkaloz ve dehidratasyon düzeltilmeden ameliyata alınmaz!"),
        TusWidgetPearl(id: "exp-32", branch: "Cerrahi", category: "2027 Beklenen", title: "Pankreas NET: İnsülinoma vs VIPoma", summary: "Whipple triyadı + yüksek C-peptid = İnsülinoma • Sulu ishal + hipokalemi + aklorhidri = VIPoma.", comparison: "Nekrolitik migratuvar eritem + diyabet + kilo kaybı = Glukagonoma • Dirençli peptik ülser = Gastrinoma (Passaro üçgeni).", trap: "Ekzojen insülin enjeksiyonunda (yapay hipoglisemi) insülin yüksekken C-peptid BASKILANMIŞTIR; sülfonilüre alımında ise C-peptid de yüksektir (idrar ilaç taraması ayırır)!"),
        TusWidgetPearl(id: "exp-33", branch: "Mikrobiyoloji", category: "Enzim & Genetik", title: "HBV Pencere Dönemi Serolojisi", summary: "Akut HBV pencere döneminde HBsAg ve Anti-HBs negatiftir; tek pozitif tanısal belirteç Anti-HBc IgM’dir.", comparison: "Aşılanmış kişi: Yalnızca Anti-HBs (+) • Geçirilmiş doğal enfeksiyon: Anti-HBs (+) ve Anti-HBc IgG (+).", trap: "HBeAg viral replikasyon ve yüksek bulaştırıcılık göstergesidir; prekor mutant HBV’de HBeAg negatif olmasına rağmen HBV-DNA çok yüksektir!"),
        TusWidgetPearl(id: "exp-34", branch: "Dahiliye", category: "Patognomonik Bulgu", title: "Romatoloji Spesifik Otoantikorlar", summary: "SLE spesifik: Anti-dsDNA & Anti-Sm • Diffüz skleroderma: Anti-Scl-70 • CREST: Anti-sentromer.", comparison: "İlaca bağlı lupus: Anti-histon (+) • Neonatal lupus (konjenital tam kalp bloğu) & Sjögren: Anti-Ro (SSA) / Anti-La (SSB).", trap: "Diffüz sistemik sklerozda en sık ölüm nedeni interstisyel akciğer hastalığı iken, CREST sendromunda pulmoner arteriyel hipertansiyon ön plandadır!"),
        TusWidgetPearl(id: "exp-35", branch: "Farmakoloji", category: "2027 Beklenen", title: "Kalp Yetmezliği Mortalite İlaçları", summary: "HFrEF’te mortaliteyi azaltan 4 temel grup: ARNI/ACEİ, Beta-blokör, MRA ve SGLT2 inhibitörleridir.", comparison: "Digoksin ve Furosemid semptomları ve hastaneye yatışı azaltır ancak MORTALİTEYİ AZALTMAZ!", trap: "Sakubitril (neprilisin inhibitörü) ile ACE inhibitörü birlikte verilirse ağır anjiyoödem yapar; geçişte en az 36 saat ara verilmelidir!"),
        TusWidgetPearl(id: "exp-36", branch: "Kadın Doğum", category: "Enzim & Genetik", title: "Komplet vs Parsiyel Mol Hidatiform", summary: "Komplet mol: 46,XX (tümü paternal), fetüs YOK, p57 (-) • Parsiyel mol: 69,XXY, fetal kısım VAR, p57 (+).", comparison: "Boşaltım sonrası takip: Haftalık seri Beta-hCG takibi (3 hafta negatifleşene dek, sonra 6 ay aylık) ve kontrasepsiyon.", trap: "p57 maternal alelden eksprese edilen imprinting genidir; maternal kromozom olmadığı için Komplet Molde p57 boyaması NEGATİFTİR!"),
        TusWidgetPearl(id: "exp-37", branch: "Biyokimya", category: "Enzim & Genetik", title: "ETZ İnhibitörleri vs Ayırıcılar", summary: "Siyanür/CO Kompleks IV’ü bloke eder (O2 tüketimi durur); 2,4-DNP ve Termogenin ise ayırıcıdır (ısı artar).", comparison: "Kompleks I: Rotenon/Barbitürat • Kompleks III: Antimisin A • Kompleks IV (Bakır içerir): Siyanür, CO • Kompleks V: Oligomisin.", trap: "Oligomisin ATP sentazı bloke ettiği için hem ATP sentezini hem O2 tüketimini durdurur; üstüne 2,4-DNP eklenirse O2 tüketimi yeniden başlar!"),
        TusWidgetPearl(id: "exp-38", branch: "Cerrahi", category: "İlk Tercih & Altın Standart", title: "Feokromositoma Preoperatif Hazırlık", summary: "Ameliyat öncesi İLK olarak Alfa-blokör (Fenoksibenzamin/Doksazosin), SONRA Beta-blokör başlanır.", comparison: "Biyokimyasal tanı doğrulandıktan sonra lokalizasyon: BT / MRG (ekstra-adrenal/metastatik şüphede Ga-68 DOTATATE / MIBG).", trap: "Alfa blokaj sağlanmadan TEK BAŞINA beta-blokör verilirse vazodilatör beta-2 reseptörler kapanır ve karşılanmamış alfa-1 uyarısıyla ölümcül hipertansif kriz gelişir!"),
        TusWidgetPearl(id: "exp-39", branch: "Patoloji", category: "Patognomonik Bulgu", title: "Primer Kemik Tümörleri Üçlüsü", summary: "Osteosarkom: Codman üçgeni • Ewing sarkomu: t(11;22) soğan zarı • Osteoid osteoma: Aspirine yanıtlı gece ağrısı.", comparison: "Epifiz yerleşimli sabun köpüğü görünümü (erişkin) = Dev hücreli kemik tümörü (Osteoklastoma).", trap: "Osteoblastom >2 cm olup vertebrayı sever ve ağrısı aspirine/NSAİİ’ye osteoid osteoma gibi dramatik yanıt VERMEZ!"),
        TusWidgetPearl(id: "exp-40", branch: "Dahiliye", category: "İlk Tercih & Altın Standart", title: "SAAG (Serum-Asit Albümin) Kuralı", summary: "SAAG ≥ 1.1 g/dL = Portal Hipertansiyon (Siroz, Kalp yetmezliği) • SAAG < 1.1 = Tbc, Karsinomatozis.", comparison: "Asit sıvısında PMNL ≥ 250/mm³ = Spontan Bakteriyel Peritonit (İlk tercih tedavi: İV Sefotaksim / Seftriakson).", trap: "Tüberküloz peritonitte SAAG < 1.1 g/dL, lenfosit hakimiyeti ve yüksek asit ADA (>40 U/L) düzeyi karakteristiktir!"),
        TusWidgetPearl(id: "exp-41", branch: "Pediatri", category: "Patognomonik Bulgu", title: "Nöroblastom vs Wilms Tümörü", summary: "Nöroblastom orta hattı GEÇER, kalsifikasyon içerir • Wilms orta hattı GEÇMEZ, böbrek parankiminden çıkar.", comparison: "Nöroblastom kötü prognoz geni: MYCN amplifikasyonu • Wilms tümörü sendromu: WAGR (WT1 delesyonu, aniridi).", trap: "Nöroblastom kemik/kemik iliğine sık metastaz yaparken, Wilms tümörü en sık AKCİĞERE metastaz yapar!"),
        TusWidgetPearl(id: "exp-42", branch: "Anatomi", category: "Acil Kırmızı Bayrak", title: "Beyin Sapı: Wallenberg Sendromu", summary: "PICA tıkanıklığı: İpsilateral yüz, kontralateral gövde ağrı-ısı kaybı + disfaji + ipsilateral Horner.", comparison: "Medial medüller sendrom (A. spinalis anterior): İpsilateral dil deviyasyonu (CN XII) + kontralateral hemiparezi ve derin duyu kaybı.", trap: "Wallenberg sendromunda piramidal traktus korunduğu için ekstremitelerde MOTOR FELÇ (HEMİPAREZİ) GÖRÜLMEZ; disfaji en özgül bulgusudur!"),
        TusWidgetPearl(id: "exp-43", branch: "Mikrobiyoloji", category: "İlk Tercih & Altın Standart", title: "BOS Profili: Bakteriyel vs Tbc", summary: "Bakteriyel: PMNL artışı, çok düşük glukoz • Tbc menenjit: Lenfosit artışı, düşük glukoz, yüksek protein.", comparison: "Cryptococcus neoformans menenjiti (HIV CD4 <100): Çini mürekkebi kapsül / Kriptokok antijeni (+) • Tedavi: Amfoterisin B + Flusitozin.", trap: "Yenidoğan ve >50 yaş/immünsüprese menenjit ampirik tedavisine Listeria monocytogenes için mutlaka AMPİSİLİN eklenmelidir (sefalosporinler Listeria’ya etkisizdir)!"),
        TusWidgetPearl(id: "exp-44", branch: "Farmakoloji", category: "Toksikoloji & Antidot", title: "Heparin İlişkili Trombositopeni", summary: "Heparin sonrası 5–10. günde trombosit >%50 düşer ve TROMBOZ gelişir (PF4 antikoru); Argatroban verilir.", comparison: "Tedavi: Tüm heparinler (DMAH dahil) derhal kesilir ve direkt trombin inhibitörü (Argatroban / Bivalirudin) veya Fondaparinuks başlanır.", trap: "HIT gelişen hastada trombosit sayısı normale dönmeden VARFARİN BAŞLANMAZ (Protein C düşüşüyle varfarin cilt nekrozunu tetikler)!"),
        TusWidgetPearl(id: "exp-45", branch: "Dahiliye", category: "2027 Beklenen", title: " Bartter vs Gitelman vs Liddle", summary: "Bartter (Henle): İdrar Ca yüksek • Gitelman (Distal): İdrar Ca DÜŞÜK + hipomagnezemi • Liddle: HT.", comparison: "Liddle sendromu (ENaC kazanç mutasyonu): Ağır hipertansiyon + hipokalemik alkaloz + DÜŞÜK renin ve DÜŞÜK aldosteron (Tedavi: Amilorid!).", trap: "Liddle sendromunda aldosteron zaten düşük olduğu için spironolakton ETKİSİZDİR; doğrudan ENaC blokörü Amilorid veya Triamteren kullanılır!"),
        TusWidgetPearl(id: "exp-46", branch: "Cerrahi", category: "Enzim & Genetik", title: "Herediter Kolorektal Sendromlar", summary: "FAP: APC (5q) >100 adenom • Peutz-Jeghers: STK11 hamartom + pigmentasyon • Lynch: MMR (MSH2/MLH1).", comparison: "Lynch sendromunda (HNPCC) polipler az sayıdadır, sağ kolonu sever ve en sık ekstrokolonik kanser ENDOMETRİYUM karsinomudur!", trap: "FAP hastalarında kolektomi sonrasında en önemli ölüm nedenleri periampüller (duodenal) adenokarsinom ve desmoid tümörlerdir!"),
        TusWidgetPearl(id: "exp-47", branch: "Biyokimya", category: "Enzim & Genetik", title: "Üre Döngüsü: OTC vs CPS-I", summary: "Her ikisinde de hiperamonyemi ve düşük sitrülin vardır; idrarda Orotik Asit yüksekse OTC eksikliğidir.", comparison: "Orotik asidüri + Megaloblastik anemi (B12/folata yanıtsız, üridinle düzelen) = UMP sentaz eksikliği • Orotik asidüri + Hiperamonyemi = OTC.", trap: "CPS-I mitokondriyal olup N-asetilglutamat (NAG) bağımlıdır ve idrarda orotik asit ARTMAZ!"),
        TusWidgetPearl(id: "exp-48", branch: "Kadın Doğum", category: "2027 Beklenen", title: "Primer Amenore: MRKH vs KAİS", summary: "Meme var, uterus YOK: 46,XX ve normal kıl = Müllerian agenezi • 46,XY ve aksiller/pubik kıl yok = KAİS.", comparison: "KAİS’te gonadlar (testis) malignite riski (gonadoblastom/disgerminom) nedeniyle puberte tamamlandıktan sonra çıkarılır.", trap: "MRKH sendromunda renal anomaliler (unilateral renal agenezi, pelvik böbrek) sık eşlik ettiği için mutlaka üriner USG yapılmalıdır!"),
        TusWidgetPearl(id: "exp-49", branch: "Histoloji", category: "Patognomonik Bulgu", title: "Hücre Bağlantıları & Pemfigus", summary: "Desmozom ( Dezmoglein-3 ): Pemfigus vulgaris (Nikolsky +) • Hemidesmozom (BP180): Büllöz pemfigoid.", comparison: "Büllöz pemfigoidde antikor bazal membrandaki hemidesmozoma karşıdır; büller subepidermal ve GERGİNDİR, Nikolsky negatiftir!", trap: "Zonula occludens (klaudin/okludin) apikalde paraselüler geçişi kapatıp kan-beyin ve kan-testis bariyerini kuran sıkı bağlantıdır!"),
        TusWidgetPearl(id: "exp-50", branch: "Pediatri", category: "Acil Kırmızı Bayrak", title: "Yenidoğan Solunum: RDS vs TTN", summary: "Prematüre + buzlu cam/hava bronkogramı = RDS • Term sezaryen bebek + fissürde sıvı/havalanma artışı = TTN.", comparison: "Amniyon sıvısında L/S oranı ≥ 2 ve Fosfatidilgliserol varlığı fetal akciğer matürasyonunu gösterir.", trap: "Maternal diyabet (fetal hiperinsülinemi kortizolün sürfaktan sentez etkisini bloke eder) RDS riskini ARTIRIR; kronik intrauterin stres/preeklampsi ise AZALTIR!"),
        TusWidgetPearl(id: "exp-51", branch: "Patoloji", category: "2027 Beklenen", title: "Akciğer Kanseri Paraneoplastikler", summary: "Skuamöz hücreli: PTHrP (Hiperkalsemi) • Küçük hücreli: ADH (Hiponatremi), ACTH ve Lambert-Eaton.", comparison: "Sigara içmeyen kadınlarda ve periferde en sık görülen akciğer kanseri: Adenokarsinom (EGFR, ALK, ROS1 hedef tedavileri!).", trap: "Kemik metastazı yapmadan paraneoplastik PTHrP salgılayarak hiperkalsemi yapan en tipik akciğer kanseri SKUAMÖZ hücreli karsinomdur!"),
        TusWidgetPearl(id: "exp-52", branch: "Fizyoloji", category: "Enzim & Genetik", title: "GİS Hormonları: Sekretin vs CCK", summary: "Sekretin (S hücresi): Pankreastan HCO3- salgılatır • CCK (I hücresi): Safra kesesini kasar, enzim salgılatır.", comparison: "Açlıkta göç edici motor kompleksi (MMC) başlatan hormon: Motilin (Makrolid antibiyotikler motilin reseptör agonistidir!).", trap: "Gastrinoma (Zollinger-Ellison) tanısında sekretin uyarı testi yapılır: Normalde sekretin gastrini İNHİBE ederken, gastrinomada paradoksal olarak ARTIRIR!"),
        TusWidgetPearl(id: "exp-53", branch: "Dahiliye", category: "Acil Kırmızı Bayrak", title: "Hiponatremi Hızlı Düzeltme Riski", summary: "Kronik hiponatremide Na 24 saatte 8–10 mEq/L’den hızlı yükseltilirse Ozmotik Demiyelinizasyon gelişir.", comparison: "Hiponatremi aşırı hızlı düzeltilirse sodyumu güvenli sınıra geri çekmek için %5 Dekstroz + Desmopresin (DDAVP) verilir.", trap: "Hızlı potasyum replasmanı da hücre içi-dışı osmolaliteyi etkileyerek serum sodyumunu yükselteceğinden günlük sodyum artış hesabına dahil edilmelidir!"),
        TusWidgetPearl(id: "exp-54", branch: "Cerrahi", category: "İlk Tercih & Altın Standart", title: "Özofagus Perforasyonu (Boerhaave)", summary: "Şiddetli kusma sonrası sol göğüs ağrısı ve cilt altı amfizeminde kesin tanı: Suda çözünür kontrastlı grafi.", comparison: "Şüphede ilk kontrast: Suda çözünür iyotlu kontrast (Gastrografin) • Negatifse mikroperforasyonu yakalamak için ince baryum.", trap: "Mediastinal perforasyon şüphesinde ilk olarak BARYUM KULLANILMAZ (şiddetli granülomatöz mediastinit yapar); aspirasyon riski varsa izotonik non-iyonik kontrast seçilir!"),
        TusWidgetPearl(id: "exp-55", branch: "Mikrobiyoloji", category: "2027 Beklenen", title: "Fırsatçı Enfeksiyon CD4 Eşikleri", summary: "CD4 < 200: Pneumocystis jirovecii (TMP-SMX) • CD4 < 100: Toxoplasma & Cryptococcus • CD4 < 50: CMV & MAC.", comparison: "PCP’de PaO2 < 70 mmHg veya A-a gradienti ≥ 35 mmHg ise TMP-SMX tedavisine mutlaka KORTİKOSTEROİD eklenir!", trap: "Pneumocystis jirovecii mantar olmasına rağmen hücre zarında ergosterol yerine kolesterol bulundurur; bu nedenle Amfoterisin B ve Azoller ETKİSİZDİR!"),
        TusWidgetPearl(id: "exp-56", branch: "Anatomi", category: "2027 Beklenen", title: "Larenks Kasları ve Sinir Felci", summary: "Rima glottidis’i açan TEK kas M. cricoarytenoideus posterior’dur; krikotiroid hariç tümünü N. laryngeus recurrens uyarır.", comparison: "Tek taraflı N. laryngeus recurrens kesisi: Ses kısıklığı • ÇİFT TARAFLI kesisi: Akut dispne/stridor ve acil trakeostomi ihtiyacı!", trap: "A. thyroidea inferior bağlanırken N. laryngeus recurrens; A. thyroidea superior bağlanırken ise N. laryngeus superior dış dalı risk altındadır!"),
        TusWidgetPearl(id: "exp-57", branch: "Farmakoloji", category: "Enzim & Genetik", title: "Antiepileptik Teratojenite & Yan Etki", summary: "Valproat: Nöral tüp defekti & hepatotoksisite • Lamotrijin: Stevens-Johnson • Etosüksimid: Absans ilk tercih.", comparison: "Gebelikte en güvenli antiepileptikler: Lamotrijin ve Levetirasetam • Status epileptikus ilk basamak: İV Lorazepam / Diazepam.", trap: "Karbamazepin ve Fenitoin sodyum kanal blokörüdür; absans ve miyoklonik nöbetleri AĞIRLAŞTIRDIKLARI için kontrendikedir!"),
        TusWidgetPearl(id: "exp-58", branch: "Dahiliye", category: "Patognomonik Bulgu", title: "Wilson vs Hemokromatozis", summary: "Wilson (ATP7B): Düşük seruloplazmin + Kayser-Fleischer • Hemokromatozis (HFE): Bronz diyabet + artropati.", comparison: "Wilson kesin tanı: Karaciğer biyopsisinde kuru bakır >250 mcg/g • Tedavi: Trientin / D-Penisilamin + Çinko.", trap: "Herediter hemokromatoziste en sık ilk tedavi düzenli FLEBOTOMİDİR; en önemli ölüm nedenleri siroz/HCC ve dilate/restriktif kardiyomiyopatidir!"),
        TusWidgetPearl(id: "exp-59", branch: "Pediatri", category: "Patognomonik Bulgu", title: "İnfantil Spazm (West Sendromu)", summary: "Selam (fleksör/ekstansör) spazmları + psikomotor gerileme + EEG’de Hipsaritmi = West sendromu.", comparison: "Genel West sendromunda ilk tercih: ACTH / Yüksek doz Prednizolon • Tüberoskleroza bağlı West sendromunda İLK TERCİH: Vigabatrin!", trap: "Vigabatrin GABA transaminaz inhibitörüdür; en spesifik ve kalıcı yan etkisi konsantrik (tünel) GÖRME ALANI DARALMASIDIR!"),
        TusWidgetPearl(id: "exp-60", branch: "Kadın Doğum", category: "İlk Tercih & Altın Standart", title: "Fetal Kalp Hızı Deselerasyonları", summary: "Erken: Baş basısı (normal) • Değişken: Kordon basısı (amniyoinfüzyon) • Geç: Uteroplasental yetmezlik!", comparison: "Ağır fetal anemi (Rh izoimmünizasyonu, fetomaternal kanama, vaza previa rüptürü) NST paterni: SİNÜZOİDAL PATERN!", trap: "Geç deselerasyon saptandığında ilk intrauterin resüsitasyon adımları: Sol yan pozisyon, oksitosinin kesilmesi, İV sıvı bolusu ve oksijen desteğidir!")
    ]

    public static func activePearl(date: Date = Date(), pinnedId: String? = nil, offset: Int = 0) -> TusWidgetPearl {
        if offset == 0, let pid = pinnedId, !pid.isEmpty,
           let pinned = allPearls.first(where: { $0.id == pid }) {
            return pinned
        }
        let slot = Int(date.timeIntervalSince1970) / 7200
        let idx = abs(slot + offset) % allPearls.count
        return allPearls[idx]
    }
}

public enum TusKeychainStore {
    private static let service = "com.tus.akademi.widget.snapshot"
    private static let account = "snapshot_v2"
    private static let accessGroup = "U3YT2CXH58.com.tus.akademi.shared"

    public static func save(_ snapshot: TusWidgetSnapshot) {
        guard let data = try? JSONEncoder().encode(snapshot) else { return }
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
            kSecAttrAccessGroup as String: accessGroup,
        ]
        SecItemDelete(query as CFDictionary)

        var addQuery = query
        addQuery[kSecValueData as String] = data
        addQuery[kSecAttrAccessible as String] = kSecAttrAccessibleAfterFirstUnlock
        let status = SecItemAdd(addQuery as CFDictionary, nil)

        if status != errSecSuccess {
            UserDefaults.standard.set(data, forKey: service)
        }
    }

    public static func load() -> TusWidgetSnapshot {
        let query: [String: Any] = [
            kSecClass as String: kSecClassGenericPassword,
            kSecAttrService as String: service,
            kSecAttrAccount as String: account,
            kSecAttrAccessGroup as String: accessGroup,
            kSecReturnData as String: kCFBooleanTrue as Any,
            kSecMatchLimit as String: kSecMatchLimitOne,
        ]
        var result: AnyObject?
        let status = SecItemCopyMatching(query as CFDictionary, &result)
        if status == errSecSuccess,
           let data = result as? Data,
           let decoded = try? JSONDecoder().decode(TusWidgetSnapshot.self, from: data) {
            return decoded
        }

        if let fallbackData = UserDefaults.standard.data(forKey: service),
           let decoded = try? JSONDecoder().decode(TusWidgetSnapshot.self, from: fallbackData) {
            return decoded
        }

        return .defaultSnapshot
    }
}

#if canImport(ActivityKit)
@available(iOS 16.2, *)
public struct TusStudyActivityAttributes: ActivityAttributes {
    public struct ContentState: Codable, Hashable {
        public var timerStart: Date
        public var timerEnd: Date?
        public var branchName: String
        public var modeTitle: String
        public var todaySolved: Int
        public var dailyTarget: Int

        public init(
            timerStart: Date,
            timerEnd: Date?,
            branchName: String,
            modeTitle: String,
            todaySolved: Int,
            dailyTarget: Int
        ) {
            self.timerStart = timerStart
            self.timerEnd = timerEnd
            self.branchName = branchName
            self.modeTitle = modeTitle
            self.todaySolved = todaySolved
            self.dailyTarget = dailyTarget
        }
    }

    public init() {}
}
#endif
