import UIKit
import Capacitor
import CoreSpotlight
import UserNotifications

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

    func application(
        _ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?
    ) -> Bool {
        indexMedicalTopicsInSpotlight()
        return true
    }

    private func indexMedicalTopicsInSpotlight() {
        let items: [(String, String, [String])] = [
            ("tus.ttbt.biyokimya", "TUS Tıbbi Biyokimya Vaka & Spot", ["TUS", "Biyokimya", "Enzimler", "Metabolizma"]),
            ("tus.ttbt.mikrobiyoloji", "TUS Tıbbi Mikrobiyoloji & Enfeksiyon", ["TUS", "Mikrobiyoloji", "Bakteri", "Virüs"]),
            ("tus.ttbt.patoloji", "TUS Tıbbi Patoloji & Cisimcikler", ["TUS", "Patoloji", "Nekroz", "Neoplazi"]),
            ("tus.ttbt.farmakoloji", "TUS Tıbbi Farmakoloji & Antidotlar", ["TUS", "Farmakoloji", "Antidot", "Toksikoloji"]),
            ("tus.ktbt.dahiliye", "TUS Dahiliye & Pediatri & Cerrahi Vakaları", ["TUS", "Dahiliye", "Pediatri", "Cerrahi", "Kadın Doğum"])
        ]

        var searchable: [CSSearchableItem] = []
        for (id, title, kw) in items {
            let attr = CSSearchableItemAttributeSet(itemContentType: "public.content")
            attr.title = title
            attr.contentDescription = "TUS Vaka & Spot Akademi — ÖSYM TTBT & KTBT Hazırlık"
            attr.keywords = kw
            let item = CSSearchableItem(uniqueIdentifier: id, domainIdentifier: "com.tus.akademi", attributeSet: attr)
            searchable.append(item)
        }
        CSSearchableIndex.default().indexSearchableItems(searchable, completionHandler: nil)
    }

    func application(
        _ application: UIApplication,
        configurationForConnecting connectingSceneSession: UISceneSession,
        options: UIScene.ConnectionOptions
    ) -> UISceneConfiguration {
        let config = UISceneConfiguration(name: "Default Configuration", sessionRole: connectingSceneSession.role)
        config.delegateClass = SceneDelegate.self
        return config
    }
}
