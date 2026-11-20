import SwiftUI
import WidgetKit
#if canImport(ActivityKit)
import ActivityKit
#endif

// MARK: - Unified Timeline Entry & Provider
struct TusWidgetEntry: TimelineEntry {
    let date: Date
    let snapshot: TusWidgetSnapshot
    let daysLeft: Int
    let hoursLeft: Int
    let examShortLabel: String
    let pearl: TusWidgetPearl
    let secondPearl: TusWidgetPearl
    let thirdPearl: TusWidgetPearl
}

struct TusUnifiedProvider: TimelineProvider {
    func placeholder(in context: Context) -> TusWidgetEntry {
        makeEntry(date: Date(), snapshot: .defaultSnapshot)
    }

    func getSnapshot(in context: Context, completion: @escaping (TusWidgetEntry) -> Void) {
        let snap = TusKeychainStore.load()
        completion(makeEntry(date: Date(), snapshot: snap))
    }

    func getTimeline(in context: Context, completion: @escaping (Timeline<TusWidgetEntry>) -> Void) {
        let now = Date()
        let snap = TusKeychainStore.load()
        var entries: [TusWidgetEntry] = []
        for step in 0..<6 {
            let entryDate = Calendar.current.date(byAdding: .hour, value: step * 2, to: now) ?? now.addingTimeInterval(Double(step * 7200))
            entries.append(makeEntry(date: entryDate, snapshot: snap))
        }
        let nextRefresh = Calendar.current.date(byAdding: .hour, value: 2, to: now) ?? now.addingTimeInterval(7200)
        completion(Timeline(entries: entries, policy: .after(nextRefresh)))
    }

    private func makeEntry(date: Date, snapshot: TusWidgetSnapshot) -> TusWidgetEntry {
        let calc = TusOfficialSchedule.daysRemaining(targetDateStr: snapshot.targetTusDate, now: date)
        let p1 = TusDailySpots.activePearl(
            date: date,
            pinnedId: snapshot.pinnedPearlId,
            customPinned: snapshot.customPinnedPearl,
            offset: 0
        )
        let p2 = TusDailySpots.activePearl(date: date, pinnedId: nil, customPinned: nil, offset: 1)
        let p3 = TusDailySpots.activePearl(date: date, pinnedId: nil, customPinned: nil, offset: 3)
        return TusWidgetEntry(
            date: date,
            snapshot: snapshot,
            daysLeft: calc.days,
            hoursLeft: calc.hours,
            examShortLabel: calc.label,
            pearl: p1,
            secondPearl: p2,
            thirdPearl: p3
        )
    }
}

// MARK: - iOS 16 / 17+ Background & Content Margin Helpers
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

    @ViewBuilder
    func tusAdaptivePadding(_ legacyPts: CGFloat = 13) -> some View {
        if #available(iOS 17.0, *) {
            self
        } else {
            self.padding(legacyPts)
        }
    }
}

// MARK: - Vibrant Modern Multi-Color Palettes (5 Distinct High-Energy Themes)
private let vibrantEmeraldSkyGradient = LinearGradient(
    colors: [
        Color(red: 0.06, green: 0.72, blue: 0.53), // #10B887 Luminous Emerald
        Color(red: 0.04, green: 0.58, blue: 0.65), // #0A94A6 Vibrant Teal
        Color(red: 0.02, green: 0.45, blue: 0.76)  // #0573C2 Rich Sky Blue
    ],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)

private let vibrantElectricIndigoGradient = LinearGradient(
    colors: [
        Color(red: 0.16, green: 0.39, blue: 0.93), // #2963ED Electric Cobalt
        Color(red: 0.33, green: 0.27, blue: 0.90), // #5445E5 Royal Indigo
        Color(red: 0.52, green: 0.18, blue: 0.88)  // #852EE0 Vibrant Violet
    ],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)

private let vibrantFitnessBerryGradient = LinearGradient(
    colors: [
        Color(red: 0.94, green: 0.22, blue: 0.44), // #F03870 Vibrant Rose
        Color(red: 0.86, green: 0.16, blue: 0.56), // #DC298F Electric Magenta
        Color(red: 0.51, green: 0.20, blue: 0.85)  // #8233D9 Deep Purple
    ],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)

private let vibrantSunsetAmberCoralGradient = LinearGradient(
    colors: [
        Color(red: 0.96, green: 0.51, blue: 0.08), // #F58214 Luminous Amber-Orange
        Color(red: 0.92, green: 0.28, blue: 0.22), // #EB4738 Vibrant Coral
        Color(red: 0.78, green: 0.12, blue: 0.36)  // #C71F5C Crimson Berry
    ],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)

private let vibrantOceanCyanBlueGradient = LinearGradient(
    colors: [
        Color(red: 0.03, green: 0.71, blue: 0.83), // #08B5D4 Electric Cyan
        Color(red: 0.07, green: 0.47, blue: 0.88), // #1278E0 Vibrant Azure
        Color(red: 0.24, green: 0.25, blue: 0.82)  // #3D40D1 Deep Sapphire
    ],
    startPoint: .topLeading,
    endPoint: .bottomTrailing
)

private func dynamicSpotGradient(for branch: String) -> LinearGradient {
    switch branch {
    case "Farmakoloji", "Patoloji":
        return vibrantElectricIndigoGradient
    case "Pediatri", "Kadın Doğum":
        return vibrantFitnessBerryGradient
    case "Dahiliye", "Cerrahi":
        return vibrantOceanCyanBlueGradient
    default:
        return vibrantEmeraldSkyGradient
    }
}

// ============================================================================
// WIDGET 1: GÜNÜN ÇIKACAK TUS SPOTU (Dinamik Canlı Renkler • Sıfır Kesilme)
// ============================================================================
struct TusDailySpotWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: TusWidgetEntry

    private var deepLinkUrl: URL {
        URL(string: "tusakademi://beklenen?id=\(entry.pearl.id)") ?? URL(string: "tusakademi://beklenen")!
    }

    var body: some View {
        Group {
            switch family {
            case .accessoryRectangular:
                VStack(alignment: .leading, spacing: 1.5) {
                    HStack(spacing: 4) {
                        Image(systemName: "sparkles")
                            .font(.system(size: 10, weight: .bold))
                        Text("\(entry.pearl.branch.uppercased()) • BEKLENEN")
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                    }
                    Text(entry.pearl.title)
                        .font(.system(size: 11, weight: .bold))
                        .lineLimit(1)
                    Text(entry.pearl.summary)
                        .font(.system(size: 10, weight: .medium))
                        .lineLimit(2)
                        .minimumScaleFactor(0.82)
                }
                .frame(maxWidth: .infinity, alignment: .leading)
                .tusWidgetBackground { Color.clear }

            case .systemSmall:
                VStack(alignment: .leading, spacing: 5) {
                    HStack(spacing: 4) {
                        Image(systemName: "sparkles")
                            .font(.system(size: 10, weight: .bold))
                            .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                        Text(entry.pearl.branch.uppercased())
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                            .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                        Spacer(minLength: 0)
                    }

                    Text(entry.pearl.title)
                        .font(.system(size: 12.5, weight: .heavy, design: .rounded))
                        .foregroundColor(.white)
                        .lineLimit(2)
                        .minimumScaleFactor(0.85)

                    Text(entry.pearl.summary)
                        .font(.system(size: 11, weight: .semibold))
                        .foregroundColor(.white.opacity(0.95))
                        .lineLimit(5)
                        .minimumScaleFactor(0.76)

                    Spacer(minLength: 0)
                }
                .tusAdaptivePadding(12)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .tusWidgetBackground { dynamicSpotGradient(for: entry.pearl.branch) }

            case .systemLarge:
                VStack(alignment: .leading, spacing: 9) {
                    HStack {
                        HStack(spacing: 5) {
                            Image(systemName: "sparkles")
                                .font(.system(size: 12, weight: .bold))
                                .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                            Text("2027-TUS MUHTEMEL ÇIKACAKLAR")
                                .font(.system(size: 10.5, weight: .heavy, design: .rounded))
                                .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                        }
                        Spacer()
                        Text(entry.pearl.branch)
                            .font(.system(size: 10.5, weight: .bold))
                            .padding(.horizontal, 8)
                            .padding(.vertical, 2.5)
                            .background(Color.white.opacity(0.22))
                            .clipShape(Capsule())
                            .foregroundColor(.white)
                    }

                    VStack(alignment: .leading, spacing: 6) {
                        Text(entry.pearl.title)
                            .font(.system(size: 15, weight: .heavy, design: .rounded))
                            .foregroundColor(.white)

                        Text(entry.pearl.summary)
                            .font(.system(size: 12.5, weight: .semibold))
                            .foregroundColor(.white.opacity(0.96))
                            .minimumScaleFactor(0.85)

                        Divider().background(Color.white.opacity(0.25))

                        HStack(alignment: .top, spacing: 6) {
                            Image(systemName: "arrow.left.arrow.right.circle.fill")
                                .font(.system(size: 12))
                                .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                            Text(entry.pearl.comparison)
                                .font(.system(size: 11.5, weight: .medium))
                                .foregroundColor(.white.opacity(0.92))
                                .minimumScaleFactor(0.82)
                        }
                    }
                    .padding(11)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.black.opacity(0.18))
                    .clipShape(RoundedRectangle(cornerRadius: 14, style: .continuous))

                    HStack(alignment: .top, spacing: 7) {
                        Image(systemName: "exclamationmark.triangle.fill")
                            .font(.system(size: 12))
                            .foregroundColor(Color(red: 1.0, green: 0.88, blue: 0.35))
                        VStack(alignment: .leading, spacing: 2) {
                            Text("ÖSYM TUZAK UYARISI")
                                .font(.system(size: 9.5, weight: .heavy))
                                .foregroundColor(Color(red: 1.0, green: 0.88, blue: 0.35))
                            Text(entry.pearl.trap)
                                .font(.system(size: 11, weight: .semibold))
                                .foregroundColor(.white.opacity(0.95))
                                .lineLimit(3)
                                .minimumScaleFactor(0.80)
                        }
                    }
                    .padding(10)
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .background(Color.black.opacity(0.24))
                    .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))

                    Spacer(minLength: 0)

                    if let url2 = URL(string: "tusakademi://beklenen?id=\(entry.secondPearl.id)") {
                        Link(destination: url2) {
                            HStack(spacing: 6) {
                                Text("Sıradaki Spot: \(entry.secondPearl.title)")
                                    .font(.system(size: 11, weight: .bold))
                                    .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                                    .lineLimit(1)
                                Spacer()
                                Text("İncele →")
                                    .font(.system(size: 10.5, weight: .heavy))
                                    .foregroundColor(.white)
                            }
                        }
                    }
                }
                .tusAdaptivePadding(14)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .tusWidgetBackground { dynamicSpotGradient(for: entry.pearl.branch) }

            default:
                // systemMedium: Full-width vibrant card -> ZERO truncation!
                VStack(alignment: .leading, spacing: 5) {
                    HStack(spacing: 6) {
                        HStack(spacing: 4) {
                            Image(systemName: "sparkles")
                                .font(.system(size: 10.5, weight: .bold))
                            Text("SINAVDA ÇIKABİLİR")
                                .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                        }
                        .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))

                        Spacer()

                        Text("\(entry.pearl.branch) • \(entry.pearl.category)")
                            .font(.system(size: 9.5, weight: .bold))
                            .padding(.horizontal, 6)
                            .padding(.vertical, 2)
                            .background(Color.white.opacity(0.18))
                            .clipShape(Capsule())
                            .foregroundColor(.white)
                            .lineLimit(1)
                    }

                    Text(entry.pearl.title)
                        .font(.system(size: 14, weight: .heavy, design: .rounded))
                        .foregroundColor(.white)
                        .lineLimit(1)
                        .minimumScaleFactor(0.85)

                    Text(entry.pearl.summary)
                        .font(.system(size: 12, weight: .semibold))
                        .foregroundColor(.white.opacity(0.96))
                        .lineLimit(4)
                        .minimumScaleFactor(0.80)

                    Spacer(minLength: 0)

                    HStack {
                        Text("Detay ve ÖSYM tuzağı için dokun")
                            .font(.system(size: 9.5, weight: .semibold))
                            .foregroundColor(.white.opacity(0.80))
                        Spacer()
                        Text("Aç →")
                            .font(.system(size: 10, weight: .heavy))
                            .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                    }
                }
                .tusAdaptivePadding(13)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .tusWidgetBackground { dynamicSpotGradient(for: entry.pearl.branch) }
            }
        }
        .widgetURL(deepLinkUrl)
    }
}

struct TusDailySpotWidget: Widget {
    let kind: String = "TusDailySpotWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TusUnifiedProvider()) { entry in
            TusDailySpotWidgetView(entry: entry)
        }
        .configurationDisplayName("Günün Çıkacak TUS Spotu")
        .description("Canlı branş renkleriyle 2027-TUS beklenen altın spotları kesintisiz okuyun.")
        .supportedFamilies([
            .systemSmall,
            .systemMedium,
            .systemLarge,
            .accessoryRectangular
        ])
    }
}

// ============================================================================
// WIDGET 2: TUS GERİ SAYIM & AKTİF SPOT (Canlı Zümrüt-Turkuaz-Mavi)
// ============================================================================
struct TusCountdownWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: TusWidgetEntry

    private var progressFraction: Double {
        let total = max(1.0, Double(entry.snapshot.dailyTarget))
        return min(1.0, Double(entry.snapshot.todaySolved) / total)
    }

    private var targetUrl: URL {
        if family == .systemMedium {
            return URL(string: "tusakademi://beklenen?id=\(entry.pearl.id)") ?? URL(string: "tusakademi://home")!
        }
        return URL(string: "tusakademi://home")!
    }

    var body: some View {
        Group {
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
                    Text("Hedef: \(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget) Soru")
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
                    Label(entry.examShortLabel, systemImage: "stethoscope")
                        .font(.system(size: 11, weight: .heavy, design: .rounded))
                        .foregroundColor(Color(red: 1.0, green: 0.94, blue: 0.55))

                    Spacer(minLength: 2)

                    HStack(alignment: .firstTextBaseline, spacing: 4) {
                        Text("\(entry.daysLeft)")
                            .font(.system(size: 34, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                            .foregroundColor(.white)
                        Text("Gün")
                            .font(.system(size: 13, weight: .bold, design: .rounded))
                            .foregroundColor(.white.opacity(0.92))
                    }

                    Spacer(minLength: 2)

                    VStack(alignment: .leading, spacing: 3) {
                        HStack {
                            Text("\(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget) Soru")
                            Spacer()
                            Text("🔥\(entry.snapshot.streakDays)")
                        }
                        .font(.system(size: 10, weight: .bold))
                        .foregroundColor(.white.opacity(0.95))

                        ProgressView(value: progressFraction)
                            .tint(Color(red: 1.0, green: 0.92, blue: 0.45))
                    }
                }
                .tusAdaptivePadding(13)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .tusWidgetBackground { vibrantEmeraldSkyGradient }

            default:
                HStack(spacing: 10) {
                    VStack(alignment: .leading, spacing: 3) {
                        Text(entry.examShortLabel)
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                            .foregroundColor(Color(red: 1.0, green: 0.94, blue: 0.55))
                        Text("\(entry.daysLeft)")
                            .font(.system(size: 28, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                            .foregroundColor(.white)
                        Text("GÜN KALDI")
                            .font(.system(size: 8.5, weight: .heavy))
                            .foregroundColor(.white.opacity(0.92))
                        Spacer(minLength: 2)
                        Text("\(entry.snapshot.todaySolved)/\(entry.snapshot.dailyTarget) Soru")
                            .font(.system(size: 9.5, weight: .bold))
                            .foregroundColor(.white.opacity(0.92))
                    }
                    .frame(width: 78, alignment: .leading)

                    VStack(alignment: .leading, spacing: 3) {
                        HStack {
                            Text("SPOT • \(entry.pearl.branch.uppercased())")
                                .font(.system(size: 9, weight: .heavy))
                                .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                            Spacer()
                            Text("Aç →")
                                .font(.system(size: 9, weight: .heavy))
                                .foregroundColor(.white.opacity(0.85))
                        }
                        Text(entry.pearl.title)
                            .font(.system(size: 11.5, weight: .heavy, design: .rounded))
                            .foregroundColor(.white)
                            .lineLimit(1)
                            .minimumScaleFactor(0.85)
                        Text(entry.pearl.summary)
                            .font(.system(size: 10.5, weight: .medium))
                            .foregroundColor(.white.opacity(0.95))
                            .lineLimit(4)
                            .minimumScaleFactor(0.76)
                        Spacer(minLength: 0)
                    }
                    .padding(8)
                    .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                    .background(Color.black.opacity(0.20))
                    .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))
                }
                .tusAdaptivePadding(12)
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .tusWidgetBackground { vibrantEmeraldSkyGradient }
            }
        }
        .widgetURL(targetUrl)
    }
}

struct TusCountdownWidget: Widget {
    let kind: String = "TusCountdownWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TusUnifiedProvider()) { entry in
            TusCountdownWidgetView(entry: entry)
        }
        .configurationDisplayName("TUS Geri Sayım & Spot")
        .description("Canlı zümrüt-mavi temayla ÖSYM TUS sayacını ve aktif spot bilgiyi takip edin.")
        .supportedFamilies([
            .accessoryCircular,
            .accessoryRectangular,
            .accessoryInline,
            .systemSmall,
            .systemMedium
        ])
    }
}

// ============================================================================
// WIDGET 3: SAF ODAK & ETÜT HALKASI (Canlı Apple-Fitness Fuşya-Mercan-Mor)
// ============================================================================
struct TusFocusRingWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: TusWidgetEntry

    private var studyFraction: Double {
        let goal = max(30.0, Double(entry.snapshot.dailyGoalMinutes))
        return min(1.0, Double(entry.snapshot.todayStudyMinutes) / goal)
    }

    var body: some View {
        Group {
            switch family {
            case .accessoryCircular:
                Gauge(value: studyFraction) {
                    Image(systemName: "timer")
                        .font(.system(size: 9, weight: .bold))
                } currentValueLabel: {
                    VStack(spacing: 0) {
                        Text("\(entry.snapshot.todayStudyMinutes)")
                            .font(.system(size: 14, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                        Text("DK")
                            .font(.system(size: 7, weight: .bold))
                    }
                }
                .gaugeStyle(.accessoryCircularCapacity)
                .tusWidgetBackground { Color.clear }

            case .systemSmall:
                VStack(alignment: .leading, spacing: 6) {
                    HStack {
                        Label("Saf Odak", systemImage: "timer")
                            .font(.system(size: 11, weight: .heavy, design: .rounded))
                            .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))
                        Spacer()
                        Text("🔥\(entry.snapshot.streakDays)")
                            .font(.system(size: 10.5, weight: .bold))
                            .foregroundColor(.white)
                    }

                    Spacer(minLength: 0)

                    HStack(alignment: .firstTextBaseline, spacing: 2) {
                        Text("\(entry.snapshot.todayStudyMinutes)")
                            .font(.system(size: 30, weight: .heavy, design: .rounded))
                            .monospacedDigit()
                            .foregroundColor(.white)
                        Text("/ \(entry.snapshot.dailyGoalMinutes) dk")
                            .font(.system(size: 11, weight: .bold))
                            .foregroundColor(.white.opacity(0.88))
                    }

                    ProgressView(value: studyFraction)
                        .tint(Color(red: 1.0, green: 0.92, blue: 0.45))

                    Text("55 Konu Turu: %\(entry.snapshot.topicTourPct)")
                        .font(.system(size: 10, weight: .bold))
                        .foregroundColor(.white.opacity(0.92))
                }
                .tusAdaptivePadding(13)
                .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
                .tusWidgetBackground { vibrantFitnessBerryGradient }

            default:
                HStack(spacing: 14) {
                    ZStack {
                        Circle()
                            .stroke(Color.white.opacity(0.20), lineWidth: 9)
                        Circle()
                            .trim(from: 0, to: CGFloat(max(0.04, studyFraction)))
                            .stroke(
                                Color(red: 1.0, green: 0.92, blue: 0.45),
                                style: StrokeStyle(lineWidth: 9, lineCap: .round)
                            )
                            .rotationEffect(.degrees(-90))
                        VStack(spacing: 1) {
                            Text("\(Int(studyFraction * 100))%")
                                .font(.system(size: 18, weight: .heavy, design: .rounded))
                                .monospacedDigit()
                                .foregroundColor(.white)
                            Text("ETÜT")
                                .font(.system(size: 8.5, weight: .heavy))
                                .foregroundColor(.white.opacity(0.85))
                        }
                    }
                    .frame(width: 82, height: 82)

                    VStack(alignment: .leading, spacing: 5) {
                        Text("SAF ODAK & DERS TAKİBİ")
                            .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                            .foregroundColor(Color(red: 1.0, green: 0.92, blue: 0.45))

                        Text("Bugün: \(entry.snapshot.todayStudyMinutes) / \(entry.snapshot.dailyGoalMinutes) dk")
                            .font(.system(size: 13.5, weight: .heavy, design: .rounded))
                            .foregroundColor(.white)

                        Text("55 Çekirdek Konu Turu: %\(entry.snapshot.topicTourPct)")
                            .font(.system(size: 11, weight: .semibold))
                            .foregroundColor(.white.opacity(0.95))

                        Text("Seri: \(entry.snapshot.streakDays) Gün • TUS'a \(entry.daysLeft) Gün")
                            .font(.system(size: 10.5, weight: .medium))
                            .foregroundColor(.white.opacity(0.85))
                    }
                    Spacer(minLength: 0)
                }
                .tusAdaptivePadding(14)
                .frame(maxWidth: .infinity, maxHeight: .infinity)
                .tusWidgetBackground { vibrantFitnessBerryGradient }
            }
        }
        .widgetURL(URL(string: "tusakademi://odak"))
    }
}

struct TusFocusRingWidget: Widget {
    let kind: String = "TusFocusRingWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TusUnifiedProvider()) { entry in
            TusFocusRingWidgetView(entry: entry)
        }
        .configurationDisplayName("Saf Odak & Etüt Halkası")
        .description("Canlı pembe-mor Fitness temasıyla etüt sürenizi ve 55 konu turunuzu izleyin.")
        .supportedFamilies([
            .accessoryCircular,
            .systemSmall,
            .systemMedium
        ])
    }
}

// ============================================================================
// WIDGET 4: İLK TERCİH & ÖSYM TUZAK KARTI (Canlı Gün Batımı Kehribar-Mercan)
// ============================================================================
struct TusRapidCompareWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: TusWidgetEntry

    var body: some View {
        VStack(alignment: .leading, spacing: 6) {
            HStack {
                Label("İLK TERCİH & TUZAK • \(entry.pearl.branch.uppercased())", systemImage: "bolt.shield.fill")
                    .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                    .foregroundColor(Color(red: 1.0, green: 0.95, blue: 0.65))
                Spacer()
                Text("Detay →")
                    .font(.system(size: 9.5, weight: .heavy))
                    .foregroundColor(.white.opacity(0.90))
            }

            Text(entry.pearl.title)
                .font(.system(size: 13.5, weight: .heavy, design: .rounded))
                .foregroundColor(.white)
                .lineLimit(1)

            Text(entry.pearl.comparison)
                .font(.system(size: 11.5, weight: .semibold))
                .foregroundColor(.white.opacity(0.96))
                .lineLimit(family == .systemLarge ? 4 : 3)
                .minimumScaleFactor(0.80)

            if family == .systemLarge {
                Divider().background(Color.white.opacity(0.25))

                VStack(alignment: .leading, spacing: 4) {
                    Text("KIRMIZI BAYRAK (ÖSYM TUZAĞI)")
                        .font(.system(size: 9.5, weight: .heavy))
                        .foregroundColor(Color(red: 1.0, green: 0.95, blue: 0.65))
                    Text(entry.pearl.trap)
                        .font(.system(size: 11.5, weight: .semibold))
                        .foregroundColor(.white)
                        .lineLimit(4)
                        .minimumScaleFactor(0.82)
                }
                .padding(10)
                .frame(maxWidth: .infinity, alignment: .leading)
                .background(Color.black.opacity(0.22))
                .clipShape(RoundedRectangle(cornerRadius: 12, style: .continuous))

                Spacer(minLength: 0)

                VStack(alignment: .leading, spacing: 3) {
                    Text("İKİNCİ KARŞILAŞTIRMA • \(entry.secondPearl.branch.uppercased())")
                        .font(.system(size: 9, weight: .heavy))
                        .foregroundColor(Color(red: 1.0, green: 0.95, blue: 0.65))
                    Text("\(entry.secondPearl.title): \(entry.secondPearl.comparison)")
                        .font(.system(size: 11, weight: .medium))
                        .foregroundColor(.white.opacity(0.92))
                        .lineLimit(3)
                        .minimumScaleFactor(0.80)
                }
            } else {
                Spacer(minLength: 0)
            }
        }
        .tusAdaptivePadding(13)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
        .tusWidgetBackground { vibrantSunsetAmberCoralGradient }
        .widgetURL(URL(string: "tusakademi://beklenen?id=\(entry.pearl.id)"))
    }
}

struct TusRapidCompareWidget: Widget {
    let kind: String = "TusRapidCompareWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TusUnifiedProvider()) { entry in
            TusRapidCompareWidgetView(entry: entry)
        }
        .configurationDisplayName("İlk Tercih & ÖSYM Tuzak Kartı")
        .description("Canlı turuncu-mercan temayla İlk Tercih vs Altın Standart ayrımlarını görün.")
        .supportedFamilies([
            .systemMedium,
            .systemLarge
        ])
    }
}

// ============================================================================
// WIDGET 5: ENZİM, ANTİDOT & PATOGNOMONİK SPOT (Canlı Elektrik İndigo-Mor)
// ============================================================================
struct TusAntidotePearlWidgetView: View {
    @Environment(\.widgetFamily) var family
    let entry: TusWidgetEntry

    var body: some View {
        VStack(alignment: .leading, spacing: 5) {
            HStack {
                Label("ALTIN KURAL • \(entry.thirdPearl.branch.uppercased())", systemImage: "flame.fill")
                    .font(.system(size: 9.5, weight: .heavy, design: .rounded))
                    .foregroundColor(Color(red: 0.55, green: 0.98, blue: 0.92))
                Spacer()
                if family != .systemSmall {
                    Text(entry.thirdPearl.category)
                        .font(.system(size: 9, weight: .bold))
                        .padding(.horizontal, 6)
                        .padding(.vertical, 2)
                        .background(Color.white.opacity(0.18))
                        .clipShape(Capsule())
                        .foregroundColor(.white)
                }
            }

            Text(entry.thirdPearl.title)
                .font(.system(size: 13, weight: .heavy, design: .rounded))
                .foregroundColor(.white)
                .lineLimit(2)
                .minimumScaleFactor(0.85)

            Text(entry.thirdPearl.summary)
                .font(.system(size: 11.5, weight: .semibold))
                .foregroundColor(.white.opacity(0.95))
                .lineLimit(4)
                .minimumScaleFactor(0.78)

            Spacer(minLength: 0)
        }
        .tusAdaptivePadding(13)
        .frame(maxWidth: .infinity, maxHeight: .infinity, alignment: .topLeading)
        .tusWidgetBackground { vibrantElectricIndigoGradient }
        .widgetURL(URL(string: "tusakademi://beklenen?id=\(entry.thirdPearl.id)"))
    }
}

struct TusAntidotePearlWidget: Widget {
    let kind: String = "TusAntidotePearlWidget"

    var body: some WidgetConfiguration {
        StaticConfiguration(kind: kind, provider: TusUnifiedProvider()) { entry in
            TusAntidotePearlWidgetView(entry: entry)
        }
        .configurationDisplayName("Hızlı Antidot & Altın Kural")
        .description("Canlı elektrik mor-indigo temayla farklı bir TUS altın spotunu eş zamanlı takip edin.")
        .supportedFamilies([
            .systemSmall,
            .systemMedium
        ])
    }
}

// ============================================================================
// WIDGET 6: ACTIVITYKIT LIVE ACTIVITY (Kilit Ekranı & Dynamic Island)
// ============================================================================
#if canImport(ActivityKit)
@available(iOS 16.2, *)
struct TusStudyLiveActivity: Widget {
    var body: some WidgetConfiguration {
        ActivityConfiguration(for: TusStudyActivityAttributes.self) { context in
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
                    Text("Hedef: \(context.state.todaySolved)/\(context.state.dailyTarget) dk Etüt")
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
            .widgetURL(URL(string: "tusakademi://odak"))
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
                    Text("\(context.state.modeTitle) • Hedef: \(context.state.todaySolved)/\(context.state.dailyTarget) dk")
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
            .widgetURL(URL(string: "tusakademi://odak"))
        }
    }
}
#endif

@available(iOS 16.2, *)
@main
struct TusWidgetBundle: WidgetBundle {
    var body: some Widget {
        TusDailySpotWidget()
        TusCountdownWidget()
        TusFocusRingWidget()
        TusRapidCompareWidget()
        TusAntidotePearlWidget()
        TusStudyLiveActivity()
    }
}
