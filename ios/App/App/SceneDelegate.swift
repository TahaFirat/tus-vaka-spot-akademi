import UIKit
import WebKit
import Capacitor
import CoreSpotlight
import StoreKit
import UserNotifications
import WidgetKit
#if canImport(ActivityKit)
import ActivityKit
#endif

// MARK: - Native StoreKit 2 + StoreKit 1 Fallback Lifetime Pro Manager (com.tus.akademi.lifetime.pro)
private struct SK1ProductFetchResult {
    let product: SKProduct?
    let invalidIdentifier: Bool
    let error: Error?
}

@available(iOS 15.0, *)
final class TUSStoreKitManager: NSObject, SKProductsRequestDelegate, SKPaymentTransactionObserver {
    static let shared = TUSStoreKitManager()
    static let lifetimeProductId = "com.tus.akademi.lifetime.pro"
    private let storageKey = "tus_akademi_pro_unlocked_v1"
    private var updatesTask: Task<Void, Never>?
    private var cachedProduct: Product?
    private var cachedSK1Product: SKProduct?
    private var cachedDisplayPrice: String = "200,00 ₺"

    // StoreKit 1 continuation bridges
    private var sk1ProductRequest: SKProductsRequest?
    private var sk1ProductsContinuation: CheckedContinuation<SK1ProductFetchResult, Never>?
    private weak var sk1PurchaseBridge: TUSBridgeViewController?
    private var sk1RestoreContinuation: CheckedContinuation<Bool, Never>?
    private var sk1PurchaseInFlight = false

    private override init() {
        super.init()
        SKPaymentQueue.default().add(self)
    }

    var isProUnlocked: Bool {
        get { UserDefaults.standard.bool(forKey: storageKey) }
        set { UserDefaults.standard.set(newValue, forKey: storageKey) }
    }

    private func formatSK1Price(_ product: SKProduct) -> String {
        let formatter = NumberFormatter()
        formatter.formatterBehavior = .behavior10_4
        formatter.numberStyle = .currency
        formatter.locale = product.priceLocale
        return formatter.string(from: product.price) ?? cachedDisplayPrice
    }

    func startObservingTransactions(bridge: TUSBridgeViewController?) {
        updatesTask?.cancel()
        updatesTask = Task {
            await refreshEntitlements(bridge: bridge)
            for await result in Transaction.updates {
                if case .verified(let transaction) = result {
                    if transaction.productID == Self.lifetimeProductId {
                        self.isProUnlocked = (transaction.revocationDate == nil)
                        await transaction.finish()
                        if self.isProUnlocked {
                            TUSNativeHapticsEngine.shared.trigger(style: "success")
                            bridge?.notifyProStatus(
                                isPro: true,
                                cancelled: false,
                                message: "TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) aktif edildi!"
                            )
                        }
                    }
                }
            }
        }
    }

    private func fetchSK2ProductWithRetry(maxAttempts: Int = 3) async -> (Product?, Error?) {
        if let cached = cachedProduct {
            return (cached, nil)
        }
        var lastError: Error?
        for attempt in 0..<maxAttempts {
            do {
                let products = try await Product.products(for: [Self.lifetimeProductId])
                if let product = products.first {
                    self.cachedProduct = product
                    self.cachedDisplayPrice = product.displayPrice
                    return (product, nil)
                }
            } catch {
                lastError = error
            }
            if attempt + 1 < maxAttempts {
                let delayNs: UInt64 = attempt == 0 ? 450_000_000 : 1_000_000_000
                try? await Task.sleep(nanoseconds: delayNs)
            }
        }
        return (nil, lastError)
    }

    private func fetchSK1Product() async -> SK1ProductFetchResult {
        if let cached = cachedSK1Product {
            return SK1ProductFetchResult(product: cached, invalidIdentifier: false, error: nil)
        }
        return await withCheckedContinuation { continuation in
            DispatchQueue.main.async {
                self.sk1ProductsContinuation?.resume(returning: SK1ProductFetchResult(product: nil, invalidIdentifier: false, error: nil))
                self.sk1ProductsContinuation = continuation
                self.sk1ProductRequest?.cancel()
                let request = SKProductsRequest(productIdentifiers: [Self.lifetimeProductId])
                request.delegate = self
                self.sk1ProductRequest = request
                request.start()
            }
        }
    }

    func fetchLiveProductPrice(bridge: TUSBridgeViewController?) async {
        let (sk2Product, _) = await fetchSK2ProductWithRetry(maxAttempts: 2)
        if let product = sk2Product {
            self.cachedDisplayPrice = product.displayPrice
            bridge?.dispatchWebEvent(name: "tus:proPrice", payload: [
                "productId": Self.lifetimeProductId,
                "displayPrice": product.displayPrice
            ])
            return
        }
        let sk1Result = await fetchSK1Product()
        if let sk1 = sk1Result.product {
            let formatted = formatSK1Price(sk1)
            self.cachedDisplayPrice = formatted
            bridge?.dispatchWebEvent(name: "tus:proPrice", payload: [
                "productId": Self.lifetimeProductId,
                "displayPrice": formatted
            ])
        }
    }

    func refreshEntitlements(bridge: TUSBridgeViewController?) async {
        await fetchLiveProductPrice(bridge: bridge)
        var foundPro = self.isProUnlocked
        for await result in Transaction.currentEntitlements {
            if case .verified(let transaction) = result,
               transaction.productID == Self.lifetimeProductId,
               transaction.revocationDate == nil {
                foundPro = true
            }
        }
        if foundPro != self.isProUnlocked {
            self.isProUnlocked = foundPro
        }
        if self.isProUnlocked {
            bridge?.notifyProStatus(
                isPro: true,
                cancelled: false,
                message: "Ömür Boyu Tam Erişim (Pro) doğrulandı."
            )
        }
    }

    @MainActor
    private func performSK2Purchase(product: Product) async throws -> Product.PurchaseResult {
        return try await product.purchase()
    }

    func purchaseLifetimePro(bridge: TUSBridgeViewController?) {
        Task {
            guard AppStore.canMakePayments && SKPaymentQueue.canMakePayments() else {
                bridge?.notifyProStatus(
                    isPro: self.isProUnlocked,
                    cancelled: false,
                    message: "Bu cihazda Uygulama İçi Satın Alma kısıtlanmış. Lütfen Ayarlar > Ekran Süresi bölümünden satın alımlara izin verin."
                )
                return
            }

            // 1. Primary path: StoreKit 2
            let (sk2Product, sk2Error) = await fetchSK2ProductWithRetry(maxAttempts: 3)
            if let product = sk2Product {
                self.cachedDisplayPrice = product.displayPrice
                bridge?.dispatchWebEvent(name: "tus:proPrice", payload: [
                    "productId": Self.lifetimeProductId,
                    "displayPrice": product.displayPrice
                ])
                do {
                    let result = try await performSK2Purchase(product: product)
                    switch result {
                    case .success(let verification):
                        switch verification {
                        case .verified(let transaction):
                            self.isProUnlocked = true
                            await transaction.finish()
                            TUSNativeHapticsEngine.shared.trigger(style: "success")
                            bridge?.notifyProStatus(
                                isPro: true,
                                cancelled: false,
                                message: "Tebrikler! TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) başarıyla açıldı."
                            )
                            return
                        case .unverified:
                            bridge?.notifyProStatus(
                                isPro: self.isProUnlocked,
                                cancelled: false,
                                message: "Apple StoreKit ödeme doğrulaması tamamlanamadı. Lütfen Satın Alımları Geri Yükle seçeneğini deneyin."
                            )
                            return
                        }
                    case .userCancelled:
                        bridge?.notifyProStatus(
                            isPro: self.isProUnlocked,
                            cancelled: true,
                            message: "Satın alma işlemi iptal edildi."
                        )
                        return
                    case .pending:
                        bridge?.notifyProStatus(
                            isPro: self.isProUnlocked,
                            cancelled: false,
                            message: "Satın alma onayı bekleniyor. Onaylandığında erişiminiz otomatik açılacaktır."
                        )
                        return
                    @unknown default:
                        break
                    }
                } catch StoreKitError.userCancelled {
                    bridge?.notifyProStatus(
                        isPro: self.isProUnlocked,
                        cancelled: true,
                        message: "Satın alma işlemi iptal edildi."
                    )
                    return
                } catch {
                    // Fall through to StoreKit 1 fallback only if purchase invocation failed before sheet
                }
            }

            // 2. Fallback path: StoreKit 1 (SKProductsRequest + SKPaymentQueue)
            let sk1Result = await fetchSK1Product()
            if let sk1Product = sk1Result.product {
                let formatted = formatSK1Price(sk1Product)
                self.cachedDisplayPrice = formatted
                bridge?.dispatchWebEvent(name: "tus:proPrice", payload: [
                    "productId": Self.lifetimeProductId,
                    "displayPrice": formatted
                ])
                DispatchQueue.main.async {
                    self.sk1PurchaseBridge = bridge
                    self.sk1PurchaseInFlight = true
                    let payment = SKPayment(product: sk1Product)
                    SKPaymentQueue.default().add(payment)
                }
                return
            }

            // 3. Accurate, honest diagnostics when both StoreKit 2 and StoreKit 1 cannot load the product
            if sk1Result.invalidIdentifier {
                bridge?.notifyProStatus(
                    isPro: self.isProUnlocked,
                    cancelled: false,
                    message: "Ömür Boyu Pro ürünü şu anda App Store onay veya mağaza yayılımı aşamasındadır. Kısa süre sonra tekrar deneyin."
                )
            } else if isNetworkError(sk1Result.error ?? sk2Error) {
                bridge?.notifyProStatus(
                    isPro: self.isProUnlocked,
                    cancelled: false,
                    message: "Apple App Store ödeme sunucusuna şu anda ulaşılamıyor. Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
                )
            } else {
                bridge?.notifyProStatus(
                    isPro: self.isProUnlocked,
                    cancelled: false,
                    message: "App Store ödeme bilgisi alınamadı. Lütfen Apple Hesabınızı ve bağlantınızı kontrol edip tekrar deneyin."
                )
            }
        }
    }

    private func isNetworkError(_ error: Error?) -> Bool {
        guard let nsErr = error as NSError? else { return false }
        if nsErr.domain == NSURLErrorDomain { return true }
        if nsErr.domain == SKErrorDomain, nsErr.code == SKError.cloudServiceNetworkConnectionFailed.rawValue {
            return true
        }
        return false
    }

    func restorePurchases(bridge: TUSBridgeViewController?) {
        Task {
            var restored = self.isProUnlocked
            do {
                try await AppStore.sync()
                for await result in Transaction.currentEntitlements {
                    if case .verified(let transaction) = result,
                       transaction.productID == Self.lifetimeProductId,
                       transaction.revocationDate == nil {
                        restored = true
                    }
                }
            } catch {
                // Continue to StoreKit 1 restore check even if AppStore.sync fails or cancels
            }

            if !restored {
                let sk1Restored = await restoreViaSK1()
                if sk1Restored {
                    restored = true
                }
            }

            self.isProUnlocked = restored
            if restored {
                TUSNativeHapticsEngine.shared.trigger(style: "success")
                bridge?.notifyProStatus(
                    isPro: true,
                    cancelled: false,
                    message: "Ömür Boyu Tam Erişim (Pro) satın alımınız başarıyla geri yüklendi!"
                )
            } else {
                TUSNativeHapticsEngine.shared.trigger(style: "warning")
                bridge?.notifyProStatus(
                    isPro: false,
                    cancelled: false,
                    message: "Bu Apple hesabına ait aktif bir satın alım kaydı bulunamadı."
                )
            }
        }
    }

    private func restoreViaSK1() async -> Bool {
        return await withCheckedContinuation { continuation in
            DispatchQueue.main.async {
                self.sk1RestoreContinuation?.resume(returning: false)
                self.sk1RestoreContinuation = continuation
                SKPaymentQueue.default().restoreCompletedTransactions()
            }
        }
    }

    // MARK: - SKProductsRequestDelegate
    func productsRequest(_ request: SKProductsRequest, didReceive response: SKProductsResponse) {
        let product = response.products.first(where: { $0.productIdentifier == Self.lifetimeProductId })
        if let product = product {
            self.cachedSK1Product = product
        }
        let isInvalid = response.invalidProductIdentifiers.contains(Self.lifetimeProductId)
        DispatchQueue.main.async {
            guard request === self.sk1ProductRequest else { return }
            let cont = self.sk1ProductsContinuation
            self.sk1ProductsContinuation = nil
            self.sk1ProductRequest = nil
            cont?.resume(returning: SK1ProductFetchResult(product: product, invalidIdentifier: isInvalid, error: nil))
        }
    }

    func request(_ request: SKRequest, didFailWithError error: Error) {
        DispatchQueue.main.async {
            guard request === self.sk1ProductRequest else { return }
            let cont = self.sk1ProductsContinuation
            self.sk1ProductsContinuation = nil
            self.sk1ProductRequest = nil
            cont?.resume(returning: SK1ProductFetchResult(product: nil, invalidIdentifier: false, error: error))
        }
    }

    // MARK: - SKPaymentTransactionObserver
    func paymentQueue(_ queue: SKPaymentQueue, updatedTransactions transactions: [SKPaymentTransaction]) {
        for tx in transactions {
            guard tx.payment.productIdentifier == Self.lifetimeProductId else { continue }
            switch tx.transactionState {
            case .purchased, .restored:
                self.isProUnlocked = true
                queue.finishTransaction(tx)
                if sk1PurchaseInFlight {
                    sk1PurchaseInFlight = false
                    TUSNativeHapticsEngine.shared.trigger(style: "success")
                    sk1PurchaseBridge?.notifyProStatus(
                        isPro: true,
                        cancelled: false,
                        message: "Tebrikler! TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) başarıyla açıldı."
                    )
                }
            case .failed:
                let err = tx.error as? SKError
                let cancelled = (err?.code == .paymentCancelled)
                queue.finishTransaction(tx)
                if sk1PurchaseInFlight {
                    sk1PurchaseInFlight = false
                    sk1PurchaseBridge?.notifyProStatus(
                        isPro: self.isProUnlocked,
                        cancelled: cancelled,
                        message: cancelled
                            ? "Satın alma işlemi iptal edildi."
                            : (tx.error?.localizedDescription ?? "Satın alma işlemi tamamlanamadı. Lütfen tekrar deneyin.")
                    )
                }
            case .deferred:
                if sk1PurchaseInFlight {
                    sk1PurchaseInFlight = false
                    sk1PurchaseBridge?.notifyProStatus(
                        isPro: self.isProUnlocked,
                        cancelled: false,
                        message: "Satın alma onayı bekleniyor."
                    )
                }
            case .purchasing:
                break
            @unknown default:
                break
            }
        }
    }

    func paymentQueueRestoreCompletedTransactionsFinished(_ queue: SKPaymentQueue) {
        let found = self.isProUnlocked || queue.transactions.contains {
            $0.payment.productIdentifier == Self.lifetimeProductId &&
            ($0.transactionState == .restored || $0.transactionState == .purchased)
        }
        DispatchQueue.main.async {
            let cont = self.sk1RestoreContinuation
            self.sk1RestoreContinuation = nil
            cont?.resume(returning: found)
        }
    }

    func paymentQueue(_ queue: SKPaymentQueue, restoreCompletedTransactionsFailedWithError error: Error) {
        DispatchQueue.main.async {
            let cont = self.sk1RestoreContinuation
            self.sk1RestoreContinuation = nil
            cont?.resume(returning: self.isProUnlocked)
        }
    }
}

// MARK: - Native Haptics & Feedback Engine
final class TUSNativeHapticsEngine {
    static let shared = TUSNativeHapticsEngine()

    private let lightImpact = UIImpactFeedbackGenerator(style: .light)
    private let mediumImpact = UIImpactFeedbackGenerator(style: .medium)
    private let heavyImpact = UIImpactFeedbackGenerator(style: .heavy)
    private let selectionFeedback = UISelectionFeedbackGenerator()
    private let notificationFeedback = UINotificationFeedbackGenerator()

    func prepareGenerators() {
        lightImpact.prepare()
        mediumImpact.prepare()
        heavyImpact.prepare()
        selectionFeedback.prepare()
        notificationFeedback.prepare()
    }

    func trigger(style: String) {
        DispatchQueue.main.async {
            switch style {
            case "success":
                self.notificationFeedback.notificationOccurred(.success)
            case "error":
                self.notificationFeedback.notificationOccurred(.error)
            case "warning":
                self.notificationFeedback.notificationOccurred(.warning)
            case "selection":
                self.selectionFeedback.selectionChanged()
            case "heavy":
                self.heavyImpact.impactOccurred()
            case "medium":
                self.mediumImpact.impactOccurred()
            default:
                self.lightImpact.impactOccurred()
            }
        }
    }
}

// MARK: - Native CoreSpotlight Medical Syndrome & Calculator Indexer
final class TUSMedicalSpotlightIndexer {
    static let shared = TUSMedicalSpotlightIndexer()
    private let domainId = "com.tus.akademi.medical.index"

    func indexHighYieldMedicalTopics() {
        let itemsData: [(id: String, title: String, desc: String, keywords: [String])] = [
            ("tus-calc-ag", "Anyon Açığı & Winter Formülü Hesaplayıcı", "Metabolik asidozda MUDPILES ayırıcı tanısı, albümin düzeltmeli anyon açığı ve Winter solunumsal kompanzasyon formülü.", ["anyon açığı", "winter", "asidoz", "bikarbonat", "TUS"]),
            ("tus-calc-fena", "FENa (Fraksiyone Sodyum Ekskresyonu) & Prerenal/ATN", "Akut böbrek hasarında Prerenal azotemi (<%1) ve Akut Tübüler Nekroz (>%2) ayırıcı tanı hesaplayıcısı.", ["FENa", "prerenal", "ATN", "nefroloji", "sodyum"]),
            ("tus-calc-parkland", "Parkland Yanık Sıvı Resüsitasyon Hesaplayıcı", "4 mL x kg x %Yanık TBSA Ringer Laktat hesaplaması (İlk 8 saat %50, sonraki 16 saat %50).", ["parkland", "yanık", "cerrahi", "ringer laktat"]),
            ("tus-bio-gaucher", "Gaucher Hastalığı — Beta-Glukoserebrozidaz", "Buruşuk kağıt (crinkled paper) makrofajlar, masif splenomegali ve Erlenmeyer şişesi femur deformitesi.", ["gaucher", "biyokimya", "lizozomal", "glukoserebrozidaz"]),
            ("tus-bio-fabry", "Fabry Hastalığı — Alfa-Galaktosidaz A (X'e Bağlı)", "X'e bağlı resesif sfingolipidoz, anjiyokeratom, akroparestezi ve böbrek yetmezliği.", ["fabry", "alfa galaktosidaz", "anjiyokeratom"]),
            ("tus-farma-idarusizumab", "Dabigatran Antidotu: İdarusizumab & Andeksanet Alfa", "Direkt trombin inhibitörü dabigatran antidotu idarusizumab; Faktör Xa inhibitörleri antidotu andeksanet alfa.", ["idarusizumab", "dabigatran", "andeksanet", "antidot"]),
            ("tus-ped-kawasaki", "Kawasaki Hastalığı & Koroner Arter Anevrizması", "5 günden uzun ateş, çilek dili, eksüdasız konjonktivit ve İVİG + Aspirin tedavisi.", ["kawasaki", "pediatri", "anevrizma", "İVİG"]),
            ("tus-cer-charcot", "Akut Kolanjit — Charcot Triyadı & Reynolds Pentadı", "Ateş, sarılık, sağ üst kadran ağrısı ve acil ERCP ile biliyer drenaj.", ["kolanjit", "charcot", "reynolds", "ERCP"]),
            ("tus-kad-mgso4", "Preeklampsi & Magnezyum Sülfat Toksisitesi", "İlk kaybolan patella refleksi ve spesifik antidot İV Kalsiyum glukonat.", ["preeklampsi", "magnezyum", "patella", "kalsiyum glukonat"])
        ]

        let searchableItems: [CSSearchableItem] = itemsData.map { entry in
            let attr = CSSearchableItemAttributeSet(itemContentType: "public.text")
            attr.title = entry.title
            attr.contentDescription = entry.desc
            attr.keywords = entry.keywords
            return CSSearchableItem(uniqueIdentifier: entry.id, domainIdentifier: domainId, attributeSet: attr)
        }

        CSSearchableIndex.default().indexSearchableItems(searchableItems, completionHandler: nil)
    }
}

// MARK: - Native UNUserNotificationCenter Daily TUS Study Reminder Manager
final class TUSClinicalReminderEngine {
    static let shared = TUSClinicalReminderEngine()
    private let reminderId = "com.tus.akademi.daily.study.reminder"

    func scheduleDailyReminder(hour: Int, minute: Int, daysLeft: Int, dailyTarget: Int, bridge: TUSBridgeViewController?) {
        let center = UNUserNotificationCenter.current()
        center.requestAuthorization(options: [.alert, .sound, .badge]) { granted, _ in
            guard granted else {
                bridge?.dispatchWebEvent(name: "tus:reminderStatus", payload: [
                    "enabled": false,
                    "message": "Bildirim izni kapalı. iOS Ayarlar > TUS Vaka & Spot menüsünden bildirimlere izin verebilirsiniz."
                ])
                return
            }

            center.removePendingNotificationRequests(withIdentifiers: [self.reminderId])

            let content = UNMutableNotificationContent()
            content.title = "TUS Vaka & Spot • Günlük Klinik Etüt Zamanı"
            content.body = "TUS'a \(daysLeft) gün kaldı! Bugünkü \(dailyTarget) vaka ve çıkmış ikiz soru hedefinizi tamamlayın."
            content.sound = .default

            var dateComponents = DateComponents()
            dateComponents.hour = max(0, min(23, hour))
            dateComponents.minute = max(0, min(59, minute))

            let trigger = UNCalendarNotificationTrigger(dateMatching: dateComponents, repeats: true)
            let request = UNNotificationRequest(identifier: self.reminderId, content: content, trigger: trigger)

            center.add(request) { error in
                let ok = (error == nil)
                TUSNativeHapticsEngine.shared.trigger(style: ok ? "success" : "warning")
                bridge?.dispatchWebEvent(name: "tus:reminderStatus", payload: [
                    "enabled": ok,
                    "hour": hour,
                    "minute": minute,
                    "message": ok
                        ? String(format: "Her gün %02d:%02d için TUS çalışma hatırlatıcısı kuruldu.", hour, minute)
                        : "Hatırlatıcı kurulurken bir hata oluştu."
                ])
            }
        }
    }

    func cancelDailyReminder(bridge: TUSBridgeViewController?) {
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: [reminderId])
        TUSNativeHapticsEngine.shared.trigger(style: "light")
        bridge?.dispatchWebEvent(name: "tus:reminderStatus", payload: [
            "enabled": false,
            "message": "Günlük TUS çalışma hatırlatıcısı kapatıldı."
        ])
    }
}

// MARK: - Native WidgetKit Timeline Sync & ActivityKit Live Activity Engine (Lock Screen + Dynamic Island)
final class TUSLiveActivityAndWidgetManager {
    static let shared = TUSLiveActivityAndWidgetManager()
    private let pomodoroDoneNotificationId = "com.tus.akademi.pomodoro.done"

    func syncWidgetSnapshot(from body: [String: Any]) {
        let targetDate = (body["targetTusDate"] as? String) ?? "2027-03-27"
        let examLabel = (body["examLabel"] as? String) ?? "2027-TUS 1. Dönem"
        let streakDays = (body["streakDays"] as? Int) ?? 1
        let todaySolved = (body["todaySolved"] as? Int) ?? 0
        let dailyTarget = (body["dailyTarget"] as? Int) ?? 40
        let todayStudyMinutes = (body["todayStudyMinutes"] as? Int) ?? 0
        let dailyGoalMinutes = (body["dailyGoalMinutes"] as? Int) ?? 120

        let snapshot = TusWidgetSnapshot(
            targetTusDate: targetDate,
            examLabel: examLabel,
            streakDays: streakDays,
            todaySolved: todaySolved,
            dailyTarget: dailyTarget,
            todayStudyMinutes: todayStudyMinutes,
            dailyGoalMinutes: dailyGoalMinutes,
            updatedAt: Date()
        )
        TusKeychainStore.save(snapshot)
        if #available(iOS 14.0, *) {
            WidgetCenter.shared.reloadAllTimelines()
        }
    }

    func startLiveActivity(from body: [String: Any]) {
        let branchName = (body["branchName"] as? String) ?? "Genel TUS"
        let modeTitle = (body["modeTitle"] as? String) ?? "TUS Kronometre"
        let durationSeconds = (body["durationSeconds"] as? Int) ?? 0
        let elapsedSeconds = (body["elapsedSeconds"] as? Int) ?? 0
        let todaySolved = (body["todaySolved"] as? Int) ?? 0
        let dailyTarget = (body["dailyTarget"] as? Int) ?? 40

        let now = Date()
        let effectiveStart = now.addingTimeInterval(-Double(max(0, elapsedSeconds)))
        let remainingSec = durationSeconds > 0 ? max(1, durationSeconds - elapsedSeconds) : 0
        let endDate: Date? = durationSeconds > 0 ? now.addingTimeInterval(Double(remainingSec)) : nil

        // Süreli Pomodoro ise kilit ekranında süre bittiğinde bildirim düşür
        let center = UNUserNotificationCenter.current()
        center.removePendingNotificationRequests(withIdentifiers: [pomodoroDoneNotificationId])
        if remainingSec > 5 {
            center.requestAuthorization(options: [.alert, .sound]) { granted, _ in
                guard granted else { return }
                let content = UNMutableNotificationContent()
                content.title = "TUS Etüt Seansı Tamamlandı!"
                content.body = "\(branchName) • \(modeTitle) süreniz doldu. Süreyi kaydetmek için dokunun."
                content.sound = .default
                let trigger = UNTimeIntervalNotificationTrigger(timeInterval: Double(remainingSec), repeats: false)
                let req = UNNotificationRequest(identifier: self.pomodoroDoneNotificationId, content: content, trigger: trigger)
                center.add(req, withCompletionHandler: nil)
            }
        }

        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            guard ActivityAuthorizationInfo().areActivitiesEnabled else { return }
            Task {
                for existing in Activity<TusStudyActivityAttributes>.activities {
                    await existing.end(nil, dismissalPolicy: .immediate)
                }
                let attrs = TusStudyActivityAttributes()
                let state = TusStudyActivityAttributes.ContentState(
                    timerStart: effectiveStart,
                    timerEnd: endDate,
                    branchName: branchName,
                    modeTitle: modeTitle,
                    todaySolved: todaySolved,
                    dailyTarget: dailyTarget
                )
                let content = ActivityContent(state: state, staleDate: nil)
                _ = try? Activity.request(attributes: attrs, content: content, pushType: nil)
            }
        }
        #endif
    }

    func stopLiveActivity() {
        UNUserNotificationCenter.current().removePendingNotificationRequests(withIdentifiers: [pomodoroDoneNotificationId])
        #if canImport(ActivityKit)
        if #available(iOS 16.2, *) {
            Task {
                for existing in Activity<TusStudyActivityAttributes>.activities {
                    await existing.end(nil, dismissalPolicy: .immediate)
                }
            }
        }
        #endif
    }
}

// MARK: - Custom TUS Bridge View Controller (StoreKit 2 + Theme Sync + Spotlight + Share + WKScriptMessageHandler)
class TUSBridgeViewController: CAPBridgeViewController, WKScriptMessageHandler {
    private var isLightTheme: Bool = false

    override func viewDidLoad() {
        super.viewDidLoad()
        let darkBg = UIColor(red: 7.0/255.0, green: 17.0/255.0, blue: 23.0/255.0, alpha: 1.0)
        view.backgroundColor = darkBg
        TUSNativeHapticsEngine.shared.prepareGenerators()
        TUSMedicalSpotlightIndexer.shared.indexHighYieldMedicalTopics()

        if let webView = self.webView {
            webView.backgroundColor = darkBg
            webView.isOpaque = true
            webView.scrollView.backgroundColor = darkBg
            webView.scrollView.bounces = false
            webView.scrollView.alwaysBounceVertical = false
            webView.scrollView.alwaysBounceHorizontal = false
            webView.scrollView.showsHorizontalScrollIndicator = false
            webView.configuration.userContentController.add(self, name: "tusNative")
        }

        TUSStoreKitManager.shared.startObservingTransactions(bridge: self)
    }

    override var preferredStatusBarStyle: UIStatusBarStyle {
        if #available(iOS 13.0, *) {
            return isLightTheme ? .darkContent : .lightContent
        }
        return .lightContent
    }

    func applyTheme(isLight: Bool) {
        DispatchQueue.main.async {
            self.isLightTheme = isLight
            let bgColor = isLight
                ? UIColor(red: 243.0/255.0, green: 247.0/255.0, blue: 249.0/255.0, alpha: 1.0)
                : UIColor(red: 7.0/255.0, green: 17.0/255.0, blue: 23.0/255.0, alpha: 1.0)
            self.view.backgroundColor = bgColor
            self.webView?.backgroundColor = bgColor
            self.webView?.scrollView.backgroundColor = bgColor
            self.setNeedsStatusBarAppearanceUpdate()
        }
    }

    func notifyProStatus(isPro: Bool, cancelled: Bool, message: String) {
        let payload: [String: Any] = [
            "isPro": isPro,
            "cancelled": cancelled,
            "message": message,
            "productId": TUSStoreKitManager.lifetimeProductId
        ]
        dispatchWebEvent(name: "tus:proStatus", payload: payload)
    }

    func dispatchWebEvent(name: String, payload: [String: Any]) {
        guard let data = try? JSONSerialization.data(withJSONObject: payload, options: []),
              let jsonString = String(data: data, encoding: .utf8) else { return }
        let js = "window.dispatchEvent(new CustomEvent('\(name)', { detail: \(jsonString) }));"
        DispatchQueue.main.async {
            self.webView?.evaluateJavaScript(js, completionHandler: nil)
        }
    }

    func userContentController(_ userContentController: WKUserContentController, didReceive message: WKScriptMessage) {
        guard message.name == "tusNative",
              let body = message.body as? [String: Any],
              let action = body["action"] as? String else { return }

        switch action {
        case "haptic":
            let style = (body["style"] as? String) ?? "light"
            TUSNativeHapticsEngine.shared.trigger(style: style)

        case "purchasePro", "purchaseLifetimePro":
            TUSNativeHapticsEngine.shared.trigger(style: "medium")
            TUSStoreKitManager.shared.purchaseLifetimePro(bridge: self)

        case "restorePurchases":
            TUSNativeHapticsEngine.shared.trigger(style: "selection")
            TUSStoreKitManager.shared.restorePurchases(bridge: self)

        case "checkEntitlement", "checkProStatus":
            Task {
                await TUSStoreKitManager.shared.refreshEntitlements(bridge: self)
            }

        case "refreshPrice":
            Task {
                await TUSStoreKitManager.shared.fetchLiveProductPrice(bridge: self)
            }

        case "setTheme":
            let theme = (body["theme"] as? String) ?? "dark"
            applyTheme(isLight: theme == "light")

        case "scheduleReminder":
            let hour = (body["hour"] as? Int) ?? 20
            let minute = (body["minute"] as? Int) ?? 0
            let daysLeft = (body["daysLeft"] as? Int) ?? 130
            let dailyTarget = (body["dailyTarget"] as? Int) ?? 40
            TUSClinicalReminderEngine.shared.scheduleDailyReminder(
                hour: hour,
                minute: minute,
                daysLeft: daysLeft,
                dailyTarget: dailyTarget,
                bridge: self
            )

        case "cancelReminder":
            TUSClinicalReminderEngine.shared.cancelDailyReminder(bridge: self)

        case "syncWidgetData":
            TUSLiveActivityAndWidgetManager.shared.syncWidgetSnapshot(from: body)

        case "startStudyLiveActivity":
            TUSLiveActivityAndWidgetManager.shared.startLiveActivity(from: body)

        case "stopStudyLiveActivity":
            TUSLiveActivityAndWidgetManager.shared.stopLiveActivity()

        case "shareClinicalText":
            let text = (body["text"] as? String) ?? "TUS Vaka & Spot Akademi"
            DispatchQueue.main.async {
                let activityVC = UIActivityViewController(activityItems: [text], applicationActivities: nil)
                if let popover = activityVC.popoverPresentationController {
                    popover.sourceView = self.view
                    popover.sourceRect = CGRect(x: self.view.bounds.midX, y: self.view.bounds.midY, width: 0, height: 0)
                    popover.permittedArrowDirections = []
                }
                self.present(activityVC, animated: true, completion: nil)
            }

        default:
            break
        }
    }
}

class SceneDelegate: UIResponder, UIWindowSceneDelegate {
    var window: UIWindow?
    private weak var bridgeController: TUSBridgeViewController?

    func scene(_ scene: UIScene, willConnectTo session: UISceneSession, options connectionOptions: UIScene.ConnectionOptions) {
        guard let windowScene = scene as? UIWindowScene else { return }

        let rootVC = TUSBridgeViewController()
        self.bridgeController = rootVC

        window = UIWindow(windowScene: windowScene)
        window?.rootViewController = rootVC
        window?.makeKeyAndVisible()

        SceneDelegateProxy.shared.scene(scene, willConnectTo: session, options: connectionOptions)
    }

    func scene(_ scene: UIScene, openURLContexts URLContexts: Set<UIOpenURLContext>) {
        SceneDelegateProxy.shared.scene(scene, openURLContexts: URLContexts)
    }

    func scene(_ scene: UIScene, continue userActivity: NSUserActivity) {
        SceneDelegateProxy.shared.scene(scene, continue: userActivity)
    }
}
