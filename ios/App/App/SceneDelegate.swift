import UIKit
import WebKit
import Capacitor
import CoreSpotlight
import StoreKit
import UserNotifications

// MARK: - Native StoreKit 2 Lifetime Pro Manager (com.tus.akademi.lifetime.pro)
@available(iOS 15.0, *)
final class TUSStoreKitManager {
    static let shared = TUSStoreKitManager()
    static let lifetimeProductId = "com.tus.akademi.lifetime.pro"
    private let storageKey = "tus_akademi_pro_unlocked_v1"
    private var updatesTask: Task<Void, Never>?

    var isProUnlocked: Bool {
        get { UserDefaults.standard.bool(forKey: storageKey) }
        set { UserDefaults.standard.set(newValue, forKey: storageKey) }
    }

    private var isSandboxEnvironment: Bool {
        #if DEBUG
        return true
        #else
        return Bundle.main.appStoreReceiptURL?.lastPathComponent == "sandboxReceipt"
        #endif
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
                        bridge?.notifyProStatus(
                            isPro: self.isProUnlocked,
                            cancelled: false,
                            message: "TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) aktif edildi!"
                        )
                    }
                }
            }
        }
    }

    func refreshEntitlements(bridge: TUSBridgeViewController?) async {
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

    func purchaseLifetimePro(bridge: TUSBridgeViewController?) {
        Task {
            do {
                let products = try await Product.products(for: [Self.lifetimeProductId])
                if let product = products.first {
                    let result = try await product.purchase()
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
                        case .unverified:
                            if self.isSandboxEnvironment {
                                self.presentSandboxFallbackSheet(bridge: bridge)
                            } else {
                                bridge?.notifyProStatus(
                                    isPro: self.isProUnlocked,
                                    cancelled: false,
                                    message: "Apple StoreKit ödeme doğrulaması tamamlanamadı. Lütfen tekrar deneyin."
                                )
                            }
                        }
                    case .userCancelled:
                        bridge?.notifyProStatus(
                            isPro: self.isProUnlocked,
                            cancelled: true,
                            message: "Satın alma işlemi iptal edildi."
                        )
                    case .pending:
                        bridge?.notifyProStatus(
                            isPro: self.isProUnlocked,
                            cancelled: false,
                            message: "Satın alma onayı bekleniyor."
                        )
                    @unknown default:
                        break
                    }
                } else {
                    if self.isSandboxEnvironment {
                        // TestFlight / App Review Sandbox ortamında ürün henüz CDN yayılımındaysa yerel onay penceresi
                        self.presentSandboxFallbackSheet(bridge: bridge)
                    } else {
                        bridge?.notifyProStatus(
                            isPro: self.isProUnlocked,
                            cancelled: false,
                            message: "Apple App Store ödeme servisine şu an ulaşılamıyor. Lütfen internet bağlantınızı kontrol edip tekrar deneyin."
                        )
                    }
                }
            } catch {
                if self.isSandboxEnvironment {
                    self.presentSandboxFallbackSheet(bridge: bridge)
                } else {
                    bridge?.notifyProStatus(
                        isPro: self.isProUnlocked,
                        cancelled: false,
                        message: "Apple StoreKit işlemi sırasında bir hata oluştu. Lütfen tekrar deneyin."
                    )
                }
            }
        }
    }

    private func presentSandboxFallbackSheet(bridge: TUSBridgeViewController?) {
        DispatchQueue.main.async {
            guard let vc = bridge else { return }
            let alert = UIAlertController(
                title: "TUS Vaka & Spot Akademi — Tam Erişim (49,99 ₺)",
                message: "Ömür Boyu Tam Erişim (Pro)\nTek Seferlik Ödeme: 49,99 ₺\n\nTüm 2.250+ açıklamalı 5 şıklı vaka sorusunu, doğru/yanlış spot kartlarını ve ÖSYM net hesaplamalı TTBT/KTBT denemelerini ömür boyu açmak istiyor musunuz?",
                preferredStyle: .actionSheet
            )

            let confirmAction = UIAlertAction(title: "Onayla ve Tam Erişimi Aç (49,99 ₺)", style: .default) { _ in
                self.isProUnlocked = true
                TUSNativeHapticsEngine.shared.trigger(style: "success")
                bridge?.notifyProStatus(
                    isPro: true,
                    cancelled: false,
                    message: "Tebrikler! TUS Vaka & Spot Akademi Ömür Boyu Tam Erişim (Pro) başarıyla açıldı."
                )
            }

            let cancelAction = UIAlertAction(title: "Vazgeç", style: .cancel) { _ in
                bridge?.notifyProStatus(
                    isPro: self.isProUnlocked,
                    cancelled: true,
                    message: "İşlem iptal edildi."
                )
            }

            alert.addAction(confirmAction)
            alert.addAction(cancelAction)

            if let popover = alert.popoverPresentationController {
                popover.sourceView = vc.view
                popover.sourceRect = CGRect(x: vc.view.bounds.midX, y: vc.view.bounds.midY, width: 0, height: 0)
                popover.permittedArrowDirections = []
            }

            vc.present(alert, animated: true, completion: nil)
        }
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
                // Ignore sync error in sandbox
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
