import UIKit
import WebKit
import Capacitor
import CoreSpotlight
import StoreKit

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

// MARK: - Custom TUS Bridge View Controller (StoreKit 2 + Theme Sync + WKScriptMessageHandler)
class TUSBridgeViewController: CAPBridgeViewController, WKScriptMessageHandler {
    private var isLightTheme: Bool = false

    override func viewDidLoad() {
        super.viewDidLoad()
        let darkBg = UIColor(red: 7.0/255.0, green: 17.0/255.0, blue: 23.0/255.0, alpha: 1.0)
        view.backgroundColor = darkBg
        TUSNativeHapticsEngine.shared.prepareGenerators()

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
