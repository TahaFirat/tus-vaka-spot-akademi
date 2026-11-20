import SwiftUI
import WidgetKit
#if canImport(ActivityKit)
import ActivityKit
#endif

// MARK: - Timeline Provider & Entry
struct TusCountdownEntry: TimelineEntry {
    let date: Date
    let snapshot: TusWidgetSnapshot
    let daysLeft: Int
    let hoursLeft: Int
    let examShortLabel: String
    let spotBranch: String
    let spotText: String
}

struct TusCountdownProvider: TimelineProvider {
    func placeholder(in context: Context) -> TusCountdownEntry {
        makeEntry(date: Date(), snapshot: .defaultSnapshot)
    }

    func getSnapshot(in context: Context, completion: @escaping (TusCountdownEntry) -> Void) {
        let snap = TusKeychainStore.load()
        completion(makeEntry(date: Date(), snapshot: snap))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<TusCountdownEntry>) -> Void) {
        let now = Date()
        let snap = TusKeychainStore.load()
        let entry = makeEntry(date: now, snapshot: snap)
        let nextRefresh = Calendar.current.date(byAdding: .hour, value: 1, to: now) ?? now.addingTimeInterval(3600)
        completion(Timeline(entries: [entry], policy: .after(nextRefresh)))
    }

    private func makeEntry(date: Date, snapshot: TusWidgetSnapshot) -> TusCountdownEntry {
        let calc = TusOfficialSchedule.daysRemaining(targetDateStr: snapshot.targetTusDate, now: date)
        let spot = TusDailySpots.spotOfTheDay(date: date)
        return TusCountdownEntry(
            date: date,
            snapshot: snapshot,
            daysLeft: calc.days,
            hoursLeft: calc.hours,
            examShortLabel: calc.label,
            spotBranch: spot.branch,
            spotText: spot.text
        )
    }
}

// MARK: - iOS 16 / 17+ Widget Background Compatibility
extension View {
    @ViewBuilder
    func tusWidgetBackground<BG: View>(@ViewBuilder _ background: () -> BG) -> some View {
        if #available(iOS 17.0, *) {
            self.containerBackground(for: .widget) {
                background()
            }
        } else {
            self.background(background())
        }
    }
}

// MARK: - Lock Screen & Home Screen Widget Views
struct TusCountdownWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: TusCountdownEntry

    private var progressFraction: Double {
        let total = max(1.0, Double(entry.snapshot.dailyTarget))
        return min(1.0, Double(entry.snapshot.todaySolved) / total)
    }

    var body: some View {
        switch family {
        case .accessoryCircular:
            Gauge(value: progressFraction) {
                Text("TUS")
                    .font(.system(size: 9, weight: .bold, design: .rounded))
            } currentValueLabel: {
                VStack(spacing: 0) {
                    Text("\(entry.daysLeft)")
                        .font(.system(size: 16, weight: .heavy, design: .rounded))
                        .monospacedDigit()
                    Text("GÜN")
                        .font(.system(size: 7, weight: .bold))
                }
            }
            .gaugeStyle(.accessoryCircularCapacity)
            .tusWidgetBackground { Color.clear }

        case .accessoryRectangular:
            VStack(alignment: .leading, spacing: 2) {
                HStack(spacing: 4) {
                    Image(systemName: "stethoscope")
                        .font(.system(size: 11, weight: .bold))
                    Text("\(entry.examShortLabel) • \(entry.daysLeft)g \(entry.hoursLeft)s")
                        .font(.system(size: 12, weight: .heavy, design: .rounded))
                        .monospacedDigit()
                }
                Text("Bugün: \(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget) Soru")
                    .font(.system(size: 11, weight: .semibold))
                Text("Seri: \(entry.snapshot.streakDays) gün • \(entry.snapshot.todayStudyMinutes) dk")
                    .font(.system(size: 10, weight: .medium))
                    .foregroundColor(.secondary)
            }
            .frame(maxWidth: .infinity, alignment: .leading)
            .tusWidgetBackground { Color.clear }

        case .accessoryInline:
            Label("TUS \(entry.daysLeft)g • \(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget)", systemImage: "stethoscope")
                .tusWidgetBackground { Color.clear }

        case .systemSmall:
            VStack(alignment: .leading, spacing: 6) {
                HStack {
                    Label(entry.examShortLabel, systemImage: "stethoscope")
                        .font(.system(size: 11, weight: .heavy, design: .rounded))
                        .foregroundColor(.white.opacity(0.9))
                    Spacer()
                }

                Spacer(minLength: 2)

                HStack(alignment: .firstTextBaseline, spacing: 4) {
                    Text("\(entry.daysLeft)")
                        .font(.system(size: 34, weight: .heavy, design: .rounded))
                        .monospacedDigit()
                        .foregroundColor(.white)
                    Text("Gün")
                        .font(.system(size: 13, weight: .bold, design: .rounded))
                        .foregroundColor(.white.opacity(0.9))
                }

                Spacer(minLength: 2)

                VStack(alignment: .leading, spacing: 3) {
                    HStack {
                        Text("Hedef \(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget)")
                        Spacer()
                        Text("\(entry.snapshot.todayStudyMinutes)dk")
                    }
                    .font(.system(size: 10, weight: .bold))
                    .foregroundColor(.white.opacity(0.9))

                    ProgressView(value: progressFraction)
                        .tint(.white)
                }
            }
            .padding(12)
            .tusWidgetBackground {
                LinearGradient(
                    colors: [Color(red: 0.04, green: 0.56, blue: 0.43), Color(red: 0.03, green: 0.38, blue: 0.36)],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            }

        default:
            // systemMedium: Sol Geri Sayım & Etüt + Sağ Günün TUS Spotu
            HStack(spacing: 12) {
                VStack(alignment: .leading, spacing: 4) {
                    Text(entry.examShortLabel)
                        .font(.system(size: 10, weight: .heavy, design: .rounded))
                        .foregroundColor(.white.opacity(0.85))
                    HStack(alignment: .firstTextBaseline, spacing: 3) {
                        Text("\(entry.daysLeft)")
                            .font(.system(size: 32, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                            .foregroundColor(.white)
                        Text("Gün")
                            .font(.system(size: 12, weight: .bold))
                            .foregroundColor(.white.opacity(0.9))
                    }
                    Spacer()
                    Text("\(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget) Soru • \(entry.snapshot.todayStudyMinutes) dk")
                        .font(.system(size: 10, weight: .bold))
                        .foregroundColor(.white.opacity(0.92))
                }
                .frame(maxWidth: 118, alignment: .leading)

                VStack(alignment: .leading, spacing: 4) {
                    Text("GÜNÜN TUS SPOTU • \(entry.spotBranch.uppercased())")
                        .font(.system(size: 9.5, weight: .heavy))
                        .foregroundColor(Color(red: 0.85, green: 1.0, blue: 0.94))
                    Text(entry.spotText)
                        .font(.system(size: 11.5, weight: .semibold))
                        .foregroundColor(.white)
                        .lineLimit(4)
                    Spacer(minLength: 0)
                }
                .padding(10)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .background(Color.black.opacity(0.22))
                .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
            }
            .padding(12)
            .tusWidgetBackground {
                LinearGradient(
                    colors: [Color(red: 0.04, green: 0.56, blue: 0.43), Color(red: 0.02, green: 0.32, blue: 0.33)],
                    startPoint: .topLeading,
                    endPoint: .bottomTrailing
                )
            }
        }
    }
}

struct TusCountdownWidget: Widget {
    let kind: String = "TusCountdownWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TusCountdownProvider()) { entry in
            TusCountdownWidgetView(entry: entry)
        }
        .configurationDisplayName("TUS Geri Sayım & Spot")
        .description("Kilit ve ana ekranda TUS sayacını, günlük hedefi ve günün spotunu takip edin.")
        .supportedFamilies([
            .accessoryCircular,
            .accessoryRectangular,
            .accessoryInline,
            .systemSmall,
            .systemMedium
        ])
    }
}

// MARK: - ActivityKit Live Activity (Kilit Ekranı & Bildirim Çubuğu + Dynamic Island)
#if canImport(ActivityKit)
@available(iOS 16.2, *)
struct TusStudyLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: TusStudyActivityAttributes.self) { context in
            // Kilit Ekranı ve Bildirim Çubuğu Canlı Etkinlik Kartı
            HStack(spacing: 12) {
                VStack(alignment: .leading, spacing: 4) {
                    HStack(spacing: 5) {
                        Image(systemName: "stethoscope")
                            .font(.system(size: 12, weight: .bold))
                            .foregroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
                        Text(context.state.modeTitle)
                            .font(.system(size: 11, weight: .heavy))
                            .foregroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
                    }
                    Text(context.state.branchName)
                        .font(.system(size: 15, weight: .heavy, design: .rounded))
                        .foregroundColor(.white)
                        .lineLimit(1)
                    Text("Hedef: \(context.state.todaySolved)/\(context.state.dailyTarget) Soru")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(.white.opacity(0.75))
                }

                Spacer()

                VStack(alignment: .trailing, spacing: 2) {
                    if let end = context.state.timerEnd {
                        let safeEnd = max(end, context.state.timerStart.addingTimeInterval(1))
                        Text(timerInterval: context.state.timerStart...safeEnd, countsDown: true)
                            .font(.system(size: 26, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                            .foregroundColor(.white)
                    } else {
                        Text(context.state.timerStart, style: .timer)
                            .font(.system(size: 26, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                            .foregroundColor(.white)
                    }
                    Text("ETÜT AKTİF")
                        .font(.system(size: 9, weight: .heavy))
                        .foregroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
                }
            }
            .padding(14)
            .activityBackgroundTint(Color(red: 0.04, green: 0.11, blue: 0.15))
            .activitySystemActionForegroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
        } dynamicIsland: { context in
            DynamicIsland {
                DynamicIslandExpandedRegion(.leading) {
                    Label(context.state.branchName, systemImage: "stethoscope")
                        .font(.system(size: 13, weight: .bold))
                        .foregroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
                }
                DynamicIslandExpandedRegion(.trailing) {
                    if let end = context.state.timerEnd {
                        let safeEnd = max(end, context.state.timerStart.addingTimeInterval(1))
                        Text(timerInterval: context.state.timerStart...safeEnd, countsDown: true)
                            .font(.system(size: 18, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                    } else {
                        Text(context.state.timerStart, style: .timer)
                            .font(.system(size: 18, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                    }
                }
                DynamicIslandExpandedRegion(.bottom) {
                    Text("\(context.state.modeTitle) • Bugün: \(context.state.todaySolved)/\(context.state.dailyTarget) Soru")
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(.secondary)
                }
            } compactLeading: {
                Image(systemName: "stethoscope")
                    .foregroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
            } compactTrailing: {
                if let end = context.state.timerEnd {
                    let safeEnd = max(end, context.state.timerStart.addingTimeInterval(1))
                    Text(timerInterval: context.state.timerStart...safeEnd, countsDown: true)
                        .font(.system(size: 12, weight: .bold))
                        .monospacedDigit()
                } else {
                    Text(context.state.timerStart, style: .timer)
                        .font(.system(size: 12, weight: .bold))
                        .monospacedDigit()
                }
            } minimal: {
                Image(systemName: "stethoscope")
                    .foregroundColor(Color(red: 0.2, green: 0.88, blue: 0.68))
            }
        }
    }
}
#endif

@available(iOS 16.2, *)
@main
struct TusWidgetBundle: WidgetBundle {
    var body: some Widget {
        TusCountdownWidget()
        TusStudyLiveActivity()
    }
}
