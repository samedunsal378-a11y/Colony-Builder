<div align="center">

# MARS: Colony Builder

**Tarayıcıda çalışan, NASA verilerine dayalı bir Mars kolonisi kurma ve hayatta kalma oyunu**

Dünya'daki üsten roketle Mars'a uç, kaynak topla, koloni kur, gerçek uzay bitkileri yetiştir,<br>
radyasyon dalgalarından korun ve Dünya ile NASA'nın Derin Uzay Ağı üzerinden haberleş.

![Sürüm](https://img.shields.io/badge/s%C3%BCr%C3%BCm-v1.46-orange)
![Lisans](https://img.shields.io/badge/lisans-MIT-green)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2020-yellow)
![WebGL](https://img.shields.io/badge/WebGL-1.0-blue)
![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933)
![Diller](https://img.shields.io/badge/diller-TR%20%C2%B7%20EN%20%C2%B7%20ES%20%C2%B7%20KO%20%C2%B7%20DE-lightgrey)

[Hemen oyna](#hemen-oyna) · [Özellikler](#özellikler) · [Kontroller](#kontroller) · [Çok oyunculu](#çok-oyunculu-sunucu) · [Belgeler](#belgeler) · [English](#english)

<img src="ekran_goruntuleri/mars_tarim.jpg" width="820" alt="Mars yüzeyinde ekim yatakları ve toprak analizörü">

</div>

---

## Hemen oyna

Kurulum gerekmez, internet de şart değil.

1. `MARS_Colony_Builder_v1.46.html` dosyasını indir.
2. Chrome, Edge veya Firefox ile aç.
3. Dilini seç → **Oyna** → zorluk seviyesini seç.

Oyunda takıldığın her an **K** tuşuna bas: sağ altta, o an ne yaptığına göre doğru konuyla açılan bir kılavuz çıkar.

### GitHub Pages ile yayınlamak

1. `MARS_Colony_Builder_v1.46.html` dosyasının bir kopyasını `index.html` adıyla reponun kök klasörüne koy.
2. **Settings → Pages → Deploy from a branch** seç, dal olarak `main`, klasör olarak `/ (root)` işaretle.
3. Birkaç dakika sonra oyun `https://<kullanıcı-adın>.github.io/<repo-adı>/` adresinde açılır.

## Ekran görüntüleri

| | |
| :---: | :---: |
| <img src="ekran_goruntuleri/ana_menu.jpg" width="400" alt="Ana menü"> | <img src="ekran_goruntuleri/zorluk.jpg" width="400" alt="Zorluk seçimi"> |
| Ana menü | Zorluk seçimi |
| <img src="ekran_goruntuleri/hikaye.jpg" width="400" alt="Hikâye girişi"> | <img src="ekran_goruntuleri/motor_arizasi.jpg" width="400" alt="Motor arızası kablo paneli"> |
| Hikâye girişi | Motor arızası: kablo eşleştirme |
| <img src="ekran_goruntuleri/mars_tarim.jpg" width="400" alt="Mars tarımı"> | <img src="ekran_goruntuleri/oyun_ici_kilavuz.jpg" width="400" alt="Oyun içi kılavuz"> |
| Mars tarımı ve toprak analizörü | Oyun içi kılavuz (K) |

## Özellikler

**Hikâye ve zorluk**
- Sinematik bir giriş ve oyun boyunca altyazılı anlatım: Mars'a inişte, her madeni ilk bulduğunda ve motor arızasında karakter konuşur.
- Üç zorluk seviyesi:

  | Seviye | Tehlikeler | Açlık / susuzluk / stamina |
  | --- | --- | --- |
  | Kolay | Radyasyon, toz fırtınası ve deprem yok | Açlık yok, susuzluk yavaş |
  | Orta | Orta şiddette fırtına ve radyasyon | Dengeli |
  | Zor | Sık ve güçlü fırtınalar, şiddetli radyasyon | Gerçek hayattaki gibi |

**Dünya ve uzay**
- Üç odalı Dünya üssü (laboratuvar, kontrol, mühendislik), erzak dükkânı, fırlatma kulesi, uzay mekiği ve uzay istasyonu.
- Fırlatma kulesine dikey iniş ve kalkış yapan roket; kontrol panelleri, duvara bağlı uyku kabini ve ücretsiz alet veren saha kiti.
- Motor arızası: roketin duvarındaki metal plakalı bakım güvertesini aç, sarı, yeşil, mor ve kırmızı kabloları eşleştir.

**Mars'ta koloni**
- Çalışma masası, yaşam kapsülü, güneş paneli, su ve yiyecek kapsülü, sera, laboratuvar, buz işleyici, depo, kasa ve anten; 3 seviye yükseltme.
- Kendi kendine kaynak arayan, panorama çeken ve mini helikopter uçuran keşif aracı.
- Kazma, kürek, tarayıcı, toprak ölçer ve çapa.

**Mars tarımı**
- NASA'nın uzay istasyonunda ve Mars toprağı deneylerinde gerçekten yetiştirilen 11 bitki: turp, mizuna, marul, Çin lahanası, roka, kara lahana, bezelye, cüce buğday, patates, domates ve biber.
- Büyüme süreleri gerçek ekimden hasada gün sayılarına dayanır.
- Toprak analizörü, yürüdüğün her noktanın verimliliğini, pH'ını, perklorat, nitrat ve su oranını gösterir.
- Sulama, çapalama ve toprak verimliliği büyüme hızını değiştirir.

**Hayatta kalma ve bilim**
- Güneş parçacık olayları, toz fırtınaları ve marssarsıntıları.
- Curiosity verilerine dayalı radyasyon dozu, NASA'nın 600 mSv kariyer sınırı, Geiger sayacı ve 6 seviyeli uzay kostümü.
- Houston ve JPL'den ışık gecikmeli mesajlar, Quindar tonları ve NASA'nın gerçek ses kayıtları.
- Dört görev paketi, ardından sonsuz görevler.

**Diğer**
- 4 kişiye kadar çok oyunculu oyun ve sesli telsiz.
- 5 dil: Türkçe, English, Español, 한국어, Deutsch.
- Telefon ve tablet için dokunmatik kontroller.

## Kontroller

| Tuş | İşlev | Tuş | İşlev |
| --- | --- | --- | --- |
| W A S D | Yürü | E | Etkileşim · topla · gir |
| Shift | Koş | X | Kaz · tara · ölç · çapala |
| Space | Zıpla · uyan | 1 · 2 · 3 | Kazma · kürek · tarayıcı |
| 4 · 5 | Toprak ölçer · çapa | **K** | **Oyun içi kılavuz** |
| U | Yapıyı yükselt | F | Yapıyı sök |
| G · H | Ye · iç | I | Envanter |
| C | 1. / 3. şahıs kamera | Z | Shiftlock |
| M | Görev olgunluk tablosu | Q | Sağlık paneli |
| V | Keşif aracı komutu | T | Telsiz |
| R · L | Kaydet · yükle | Esc | Menü |

Tüm tuşlar **Ayarlar → Kontroller** bölümünden değiştirilebilir.

## Çok oyunculu sunucu

`sunucu/` klasöründe ek paket gerektirmeyen küçük bir Node.js sunucusu var. Sunucu yalnızca oda ve konum bilgisini taşır; sesli telsiz oyuncular arasında WebRTC ile doğrudan akar.

```bash
cd sunucu
npm start        # http://localhost:3000
```

Mikrofon yalnızca `https://` veya `localhost` üzerinde çalışır. İnternette arkadaşlarınla oynamak için sunucuyu Render gibi bir servise yükle; adımlar [sunucu/KURULUM.md](sunucu/KURULUM.md) dosyasında.

## Belgeler

| Belge | İçerik |
| --- | --- |
| [Kullanım kılavuzu](belgeler/KULLANIM_KILAVUZU.md) | Hedefe göre rehber ve oyundaki her sistemin ayrıntısı |
| [Oyun diyagramı (PDF)](belgeler/MARS_Colony_Builder_v1.46_Diyagram.pdf) | Oyun döngüsü, haritalar, kat planları ve tablolar, 5 sayfa |
| [Proje raporu (PDF)](belgeler/MARS_Colony_Builder_Proje_Raporu.pdf) | Kullanılan teknolojiler, mimari, test süreci ve kaynakça |
| [NASA verileri](belgeler/NASA_VERILERI.md) | Oyunda kullanılan tüm bilimsel veriler, ses kayıtları ve kaynakları |
| [İçindekiler](ICINDEKILER.md) | Her dosyanın ne işe yaradığı ve sürüm geçmişi |

## Proje yapısı

```
.
├── MARS_Colony_Builder_v1.46.html   # oyunun tamamı tek dosyada
├── kaynak/                          # aynı oyun, okunması kolay parçalara ayrılmış
│   ├── index.html                   #   arayüz
│   ├── style.css                    #   görünüm
│   └── game.js                      #   oyun kodu (JavaScript + WebGL)
├── sunucu/                          # çok oyunculu sunucu
├── belgeler/                        # kılavuz, diyagram, rapor, NASA verileri
├── ekran_goruntuleri/
├── ekstra/astronot_3d_model.js
├── ICINDEKILER.md · LICENSE · NOTICE.md · README.md
```

## Teknik bilgiler

- **Diller:** JavaScript (ES2020), HTML5, CSS3, GLSL; sunucu tarafında Node.js.
- **Grafik:** Doğrudan WebGL 1.0. Oyun motoru, çerçeve veya derleme adımı yok.
- **Ses:** Web Audio API ile sentez; internet varken NASA'nın açık ses arşivinden kayıtlar.
- **Ağ:** Server-Sent Events ile oda ve konum bilgisi, WebRTC ile sesli telsiz.
- **Kayıt:** Tarayıcının `localStorage` alanı, 150 saniyede bir otomatik.
- **Boyut:** Yaklaşık 5.600 satır kod, harici bağımlılık yok.

## Sürüm geçmişi

| Sürüm | Öne çıkanlar |
| --- | --- |
| v1.46 | K tuşuyla açılan oyun içi kılavuz |
| v1.45 | Toprak analizörü, çapa, 11 ekin, gerçek büyüme süreleri |
| v1.44 | Zorluk seviyeleri, hikâye ve altyazılar, motor arızası, ücretsiz saha kiti |
| v1.43 | Mars tarımı |
| v1.42 | 4 kişilik çok oyunculu oyun ve telsiz |
| v1.41 | Uyku kabini, Geiger sayacı, 6 seviyeli kostüm |
| v1.40 | DSN iletişimi, keşif aracı, 5 dil, NASA sesleri, yeni grafikler |

## Katkıda bulunma

Hata bildirimleri ve öneriler için **Issues** sekmesini kullanabilirsin. Kod katkısı için:

1. Repoyu fork'la ve yeni bir dal aç: `git checkout -b ozellik/yeni-ozellik`
2. Değişikliğini yap ve oyunu tarayıcıda dene.
3. Commit'le ve pull request aç.

## Lisans

Kod [MIT Lisansı](LICENSE) ile dağıtılır. NASA ses kayıtları pakete dahil değildir; oyun bunları çalışırken nasa.gov'dan yükler. Ayrıntılar [NOTICE.md](NOTICE.md) dosyasında. Bu proje NASA ile bağlantılı değildir ve NASA tarafından onaylanmamıştır.

---

<a id="english"></a>
## English

**MARS: Colony Builder** is a browser-based Mars colony and survival game built on real NASA data. Fly from your Earth base to Mars, gather resources, build a colony, grow real space crops, shelter from solar particle events and talk to Earth through NASA's Deep Space Network.

**Play:** download `MARS_Colony_Builder_v1.46.html` and open it in Chrome, Edge or Firefox. Pick a language, press **Play** and choose a difficulty. Press **K** at any time for the in-game guide.

**Highlights**
- Story mode with a cinematic intro and in-game subtitles; three difficulty levels.
- Earth base, launch tower, space shuttle and station; Mars surface with rover, sample sites and marsquakes.
- Rocket engine failures fixed through a wire-matching mini game.
- Mars farming with 11 crops from NASA experiments, real growth times, a hoe and a soil analyzer.
- Radiation model based on Curiosity data, Geiger counter and a 6-level space suit.
- Up to 4 players with voice radio; five languages; touch controls.

**Tech:** JavaScript, HTML5, CSS3 and GLSL with raw WebGL 1.0, Web Audio API, WebRTC and a dependency-free Node.js server. No frameworks or build step.

**Multiplayer:** `cd sunucu && npm start`. Voice chat needs `https://` or `localhost`.

**License:** MIT. NASA audio is streamed from nasa.gov and not included. This project is not affiliated with or endorsed by NASA.
