# İçindekiler

Bu paket MARS: Colony Builder v1.46'nın bütün dosyalarını içerir. Hiçbir dosya gizli veya sıkıştırılmış (minify) değildir; hepsi düz metin olarak açılıp okunabilir.

| Dosya | Boyut | Ne işe yarar? |
| --- | --- | --- |
| `MARS_Colony_Builder_v1.46.html` | 479.2 KB | Oyunun tamamı tek dosyada. Tarayıcıda açınca oynanır; internet gerekmez (yalnızca NASA sesleri için). |
| `kaynak/index.html` | 21.0 KB | Aynı oyunun arayüz kısmı (menüler, paneller, HUD). style.css ve game.js dosyalarını yükler. |
| `kaynak/style.css` | 28.7 KB | Oyunun tüm görünüm kuralları (renkler, paneller, animasyonlar). |
| `kaynak/game.js` | 429.6 KB | Oyunun bütün kodu: WebGL çizim, astronot ve yapı modelleri, hayatta kalma, radyasyon, DSN, roket, keşif aracı, tarım, toprak analizörü, motor arızası, hikâye, kılavuz, çok oyunculu ve telsiz. |
| `sunucu/server.js` | 6.5 KB | Çok oyunculu sunucu (Node.js 18+, ek paket gerekmez): oda sistemi, oyuncu konumları, telsiz sinyalleşmesi. |
| `sunucu/index.html` | 479.2 KB | Sunucunun oyunculara dağıttığı oyun dosyası (tek dosyalık oyunla aynı). |
| `sunucu/package.json` | 0.3 KB | Barındırma siteleri (Render vb.) için Node.js proje tanımı. |
| `sunucu/KURULUM.md` | 2.7 KB | Sunucuyu internette veya kendi bilgisayarında kurma rehberi. |
| `belgeler/KULLANIM_KILAVUZU.md` | 38.0 KB | Ayrıntılı kullanım kılavuzu: hedefe göre rehber ve 16 başvuru bölümü. |
| `belgeler/NASA_VERILERI.md` | 24.0 KB | Oyunda kullanılan tüm NASA verileri, ses kayıtları, bilgi metinleri ve bilimsel kaynaklar. |
| `ekstra/astronot_3d_model.js` | 14.9 KB | Astronot karakterinin 3D modelini çizen kodun ayrı kopyası (incelemek için). |
| `README.md` | 8.9 KB | GitHub proje tanıtımı (Türkçe ve İngilizce). |
| `LICENSE` | 1.1 KB | MIT lisansı. |
| `NOTICE.md` | 1.7 KB | Üçüncü taraf içerik bildirimleri (NASA sesleri, STUN sunucuları). |

## Hangi dosyayı kullanmalıyım?

- **Sadece oynamak için:** `MARS_Colony_Builder_v1.46.html` dosyasını çift tıkla.
- **Kodu incelemek veya değiştirmek için:** `kaynak/` klasörü. `kaynak/index.html` dosyasını açınca oyun aynı şekilde çalışır.
- **Arkadaşlarınla oynamak için:** `sunucu/KURULUM.md` adımlarını izle.
- **GitHub'a yüklemek için:** klasörün tamamını yükle. GitHub Pages'te yayınlamak istersen tek dosyalık oyunun bir kopyasını `index.html` adıyla kök klasöre koy.

## Paketin dışında kalanlar

- **NASA ses kayıtları:** Oyun bunları çalışırken nasa.gov'dan yükler; telif ve kullanım koşulları nedeniyle pakete konmadı. Listesi `belgeler/NASA_VERILERI.md` içinde.
- **Oyun diyagramı:** claude.ai'deki Whiteboard çalışması olarak duruyor.

## Sürüm geçmişi

| Sürüm | Eklenenler |
| --- | --- |
| v1.40 | DSN iletişim baloncuğu, keşif aracı, sonsuz görevler, 5 dil, canlı giriş ekranı, NASA verili radyasyon, NASA sesleri, yuvarlak hatlı astronot, fırlatma kulesine iniş-kalkış |
| v1.41 | Duvara bağlı uyku kabini, Geiger sayacı, 6 seviyeli uzay kostümü, kol düzeltmesi |
| v1.42 | 4 kişilik çok oyunculu sunucu ve telsiz |
| v1.43 | Mars tarımı: ekim yatağı, fidan, sulama, hasat |
| v1.44 | Zorluk seviyeleri, hikâye ve altyazılar, motor arızası ve kablo oyunu, ücretsiz saha kiti |
| v1.45 | Toprak analizörü, çapa, 11 Mars ekini, gerçek büyüme süreleri |
| v1.46 | K ile açılan oyun içi kılavuz |
