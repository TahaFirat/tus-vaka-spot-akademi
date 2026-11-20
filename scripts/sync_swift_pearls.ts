import fs from 'node:fs';
import { TUS_ALL_EXPECTED_PEARLS } from '../src/data/tusMedicalRepository';

const esc = (s: string) =>
  s
    .replace(/\\/g, '\\\\')
    .replace(/"/g, '\\"')
    .replace(/\r?\n/g, ' ');

// Sync 180 diverse high-yield pearls (60 core + 120 rotated across all 11 branches) into WidgetKit offline store
const selectedForWidget = TUS_ALL_EXPECTED_PEARLS.slice(0, 180);

const swiftItems = selectedForWidget
  .map(
    (p) =>
      `        TusWidgetPearl(id: "${esc(p.id)}", branch: "${esc(
        p.branchShort
      )}", category: "${esc(p.category)}", title: "${esc(
        p.shortTitle.slice(0, 42)
      )}", summary: "${esc(p.widgetSummary.slice(0, 135))}", comparison: "${esc(
        p.examComparison.slice(0, 145)
      )}", trap: "${esc(p.redFlagTrap.slice(0, 145))}")`
  )
  .join(',\n');

const swiftFile = `import Foundation
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

    public init(
        id: String,
        branch: String,
        category: String,
        title: String,
        summary: String,
        comparison: String,
        trap: String
    ) {
        self.id = id
        self.branch = branch
        self.category = category
        self.title = title
        self.summary = summary
        self.comparison = comparison
        self.trap = trap
    }
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
    public var customPinnedPearl: TusWidgetPearl?
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
        customPinnedPearl: TusWidgetPearl? = nil,
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
        self.customPinnedPearl = customPinnedPearl
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
        customPinnedPearl: nil,
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
${swiftItems}
    ]

    public static func activePearl(
        date: Date = Date(),
        pinnedId: String? = nil,
        customPinned: TusWidgetPearl? = nil,
        offset: Int = 0
    ) -> TusWidgetPearl {
        if offset == 0 {
            if let custom = customPinned {
                return custom
            }
            if let pid = pinnedId, !pid.isEmpty,
               let pinned = allPearls.first(where: { $0.id == pid }) {
                return pinned
            }
        }
        let slot = Int(date.timeIntervalSince1970) / 7200
        let idx = abs(slot + offset) % allPearls.count
        return allPearls[idx]
    }
}

public enum TusKeychainStore {
    private static let service = "com.tus.akademi.widget.snapshot"
    private static let account = "snapshot_v3"
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
`;

fs.writeFileSync('ios/App/Shared/TusSharedModels.swift', swiftFile, 'utf8');
console.log(
  'Generated TusSharedModels.swift with',
  selectedForWidget.length,
  'offline widget pearls (out of',
  TUS_ALL_EXPECTED_PEARLS.length,
  'in-app expected pearls)!'
);
