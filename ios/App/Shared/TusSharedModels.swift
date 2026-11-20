import Foundation
import Security
#if canImport(ActivityKit)
import ActivityKit
#endif

public struct TusWidgetSnapshot: Codable {
    public var targetTusDate: String
    public var examLabel: String
    public var streakDays: Int
    public var todaySolved: Int
    public var dailyTarget: Int
    public var todayStudyMinutes: Int
    public var dailyGoalMinutes: Int
    public var updatedAt: Date

    public static let defaultSnapshot = TusWidgetSnapshot(
        targetTusDate: "2027-03-27",
        examLabel: "2027-TUS 1. Dönem",
        streakDays: 1,
        todaySolved: 0,
        dailyTarget: 40,
        todayStudyMinutes: 0,
        dailyGoalMinutes: 120,
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
    private static let pearls: [(branch: String, text: String)] = [
        ("Patoloji", "Gaucher: Beta-glukoserebrozidaz eksikliği, buruşuk kağıt makrofaj ve Erlenmeyer şişesi."),
        ("Farmakoloji", "Dabigatran spesifik antidotu: İdarusizumab • Faktör Xa inhibitörü: Andeksanet alfa."),
        ("Dahiliye", "Yüksek anyon açıklı metabolik asidozda kompansasyon: Winter (1.5 × HCO3 + 8 ± 2)."),
        ("Pediatri", "Kawasaki hastalığında ilk tercih tedavi: İVİG + yüksek doz Aspirin (koroner anevrizma)."),
        ("Cerrahi", "Akut kolanjitte Charcot triyadı (ateş+sarılık+ağrı) + şok + konfüzyon = Reynolds pentadı."),
        ("Kadın Doğum", "MgSO4 toksisitesinde ilk kaybolan: Patella refleksi • Antidot: İV Kalsiyum glukonat."),
        ("Biyokimya", "Glikoliz hız kısıtlayıcı: PFK-1 (Fruktoz-2,6-BP ile güçlü aktive, ATP/sitrat ile inhibe)."),
        ("Mikrobiyoloji", "Sütçocuğu botulizminde toksin mekanizması: Asetilkolin salınım inhibisyonu (SNARE)."),
        ("Fizyoloji", "Prerenal azotemide FENa < %1, idrar Na < 20 mEq/L, idrar osmolalitesi > 500 mOsm/kg."),
        ("Anatomi", "Humerus cerrahi boyun kırığı: Axiller sinir + a. circumflexa humeri posterior zedelenir."),
        ("Histoloji", "DiGeorge sendromu: 3. ve 4. farengeal kese gelişim kusuru (timus + paratiroid yokluğu)."),
        ("Farmakoloji", "Asetaminofen toksisitesinde glutatyon deposunu yenileyen antidot: N-Asetilsistein."),
        ("Dahiliye", "Hızlı progresif GN'de elektron/IF mikroskopide lineer IgG birikimi: Goodpasture sendromu."),
        ("Biyokimya", "Menkes hastalığı (ATP7A bakır transport kusuru): Lizil oksidaz eksikliği → Kinky hair.")
    ]

    public static func spotOfTheDay(date: Date = Date()) -> (branch: String, text: String) {
        let dayIndex = Calendar.current.ordinality(of: .day, in: .year, for: date) ?? 1
        return pearls[abs(dayIndex) % pearls.count]
    }
}

public enum TusKeychainStore {
    private static let service = "com.tus.akademi.widget.snapshot"
    private static let account = "snapshot_v1"
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
            // Simülatör / yetkisiz test ortamı yedeği
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
