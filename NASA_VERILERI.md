# Oyunda kullanılan NASA verileri ve kaynakları

Bu belge, MARS: Colony Builder v1.46'nın içinde kullanılan tüm gerçek bilimsel verileri, NASA ses kayıtlarını ve oyun içi bilgi metinlerini tek yerde listeler. Amaç şeffaflık: oyunda gördüğün her sayının nereden geldiği burada.

Oyun eğitim ve eğlence amaçlıdır; sayılar oynanış için sadeleştirilmiş veya zamanı sıkıştırılmıştır. Proje NASA tarafından onaylanmamış veya desteklenmemiştir. NASA'nın adı, logosu veya amblemi kullanılmaz.

Kod içinde bu verilerin bulunduğu yerler: `kaynak/game.js` dosyasında `NASA_SND`, `MSG`, `CROPS`, `soilAt`, `vit`/radyasyon ve `DSN_SITES` tanımları.

---

## 1. Mars ortamı

| Veri | Oyundaki değer | Kaynak |
| --- | --- | --- |
| Yüzey yerçekimi | 3,71 m/s² (Dünya 9,81) | NASA Mars Fact Sheet (NSSDC) |
| Ortalama sıcaklık | −59 °C civarı; geceleri açıkta vücut ısısı düşer | NASA Mars Fact Sheet |
| Yüzey basıncı | 6,36 mbar | NASA Mars Fact Sheet |
| Atmosfer | %95 CO₂ | NASA Mars Fact Sheet |
| Toz fırtınaları ve toz şeytanları | Görüşü ve güneş enerjisini azaltır | Spirit, Opportunity, Perseverance gözlemleri |
| Marssarsıntıları | InSight 2018–2022 arasında 1.300'den fazla sarsıntı kaydetti | NASA InSight görevi |
| Bir Mars günü (sol) | 24 sa 39 dk; oyunda 72 gerçek dakikaya sıkıştırıldı | NASA |

## 2. Radyasyon

| Veri | Oyundaki değer | Kaynak |
| --- | --- | --- |
| Mars yüzeyinde günlük doz | ~0,64 mSv/gün (galaktik kozmik ışınlar) | Curiosity RAD ölçümleri (Hassler ve ark., Science 2014) |
| Dünya–Mars yolculuğunda günlük doz | ~1,8 mSv/gün | Curiosity RAD, yolculuk ölçümü (Zeitlin ve ark., Science 2013) |
| Dünya'da günlük doz | ~0,007 mSv/gün | Ortalama doğal arka plan |
| Kariyer doz sınırı | 600 mSv | NASA-STD-3001 (2022 güncellemesi) |
| Güneş parçacık olayları (SPE) | Önceden uyarı, sığınakta bekleme | NASA uzay hava durumu ve SRAG uygulamaları |
| Aurora | Mars'ta SPE sırasında gece gökyüzünde görülür | MAVEN ve Perseverance gözlemleri |
| Kostüm koruması | Seviye 1–6, %0–%100 | Oyun mekaniği (gerçek kostümler tam koruma sağlamaz) |

## 3. İletişim: Derin Uzay Ağı (DSN)

| Veri | Oyunda | Kaynak |
| --- | --- | --- |
| Yer istasyonları | Goldstone (ABD), Madrid (İspanya), Canberra (Avustralya), 70 m antenler | NASA DSN |
| Mars röle uyduları | MRO, MAVEN, Mars Odyssey, TGO (ESA); Electra UHF bağlantısı | NASA JPL |
| Işık gecikmesi | Tek yön 3–22 dakika (Dünya–Mars uzaklığına göre); oyunda kısaltıldı | NASA |
| Dünya yörüngesinde iletişim | TDRS uyduları (Yakın Uzay Ağı), ~0,6 sn gecikme | NASA SCaN |
| Quindar tonları | 2525 Hz başlangıç, 2475 Hz bitiş (Apollo'dan beri) | NASA Apollo iletişim sistemi |
| "7 dakikalık terör" | Atmosfere giriş, iniş ve yere temas | NASA JPL |

## 4. Mars toprağı (toprak ölçer)

| Veri | Oyundaki aralık | Kaynak |
| --- | --- | --- |
| pH | 7,2–8,3 (hafif bazik) | Phoenix WCL deneyi, 2008: pH ~7,7 |
| Perklorat | %0,4–0,9 | Phoenix, 2008: %0,4–0,6; zehirli olduğu için toprak yıkanır |
| Nitrat | 70–1.100 ppm | Curiosity SAM, 2015 (Stern ve ark., PNAS) |
| Su (ağırlıkça) | %1,5–3; buz yakınında daha fazla | Curiosity SAM: yüzey tozunda ~%2 su |
| Eski göl yatakları | Krater tabanları daha verimli (kil, nitrat) | Gale ve Jezero kraterlerindeki göl çökelleri |
| Regolit sıkışması | Çapalamak havalandırır | Mars simülantı tarım çalışmaları |

## 5. Mars tarımı (gerçek ekimden hasada süreler)

Oyunda 1 gerçek gün = 15 saniye. Bitki büyüme süreleri deneylerdeki yaklaşık ekimden hasada gün sayısıdır.

| Ekin | Gerçek süre | Deney / kaynak |
| --- | --- | --- |
| Turp | 27 gün | APH-02, ISS, 2020 |
| Mizuna hardalı | 28 gün | Veggie VEG-03, ISS, 2017 |
| Marul 'Outredgeous' | 33 gün | Veggie VEG-01, ISS, 2015 (uzayda yenen ilk sebze) |
| Çin lahanası 'Tokyo Bekana' | 33 gün | ISS 2017; Mir Svet serası |
| Roka | 35 gün | Wageningen Üniversitesi, Mars regolit simülantı, 2016 |
| Kara lahana 'Red Russian' | 50 gün | Veggie, ISS, 2019 |
| Bezelye | 60 gün | Wageningen Mars regolit simülantı deneyleri |
| Cüce buğday 'Apogee' | 70 gün | APH, ISS, 2018; Mir |
| Patates | 90 gün | Uluslararası Patates Merkezi (CIP) + NASA, 2016 |
| Cüce domates 'Red Robin' | 104 gün | Veg-05, ISS, 2023 |
| Hatch biberi | 120 gün | PH-04, ISS, 2021 |
| Pembe-mor LED ışık | Ekim yatağı kubbelerinde | NASA Veggie ünitesi |

## 6. Araçlar, görevler ve donanım

| Oyundaki öğe | Gerçek karşılığı |
| --- | --- |
| Keşif aracı | Curiosity / Perseverance tipi gezgin; MMRTG nükleer güç kaynağı |
| Mini helikopter | Ingenuity (Perseverance ile, 2021) |
| Panorama | Mastcam-Z kameraları |
| Örnek tüpleri ve alanları | Perseverance numune toplama kampanyası (Rochette vb. adlardan esinlenildi) |
| Uzay kostümü | xEMU tasarımı (Artemis) |
| Fırlatma kulesi ve "yakalama kolları" | Modern fırlatma kuleleri |
| Uzay istasyonu ve mekik | ISS; TDRS bağlantısı |
| CML matrisi | NASA JPL Concept Maturity Level ölçeği |
| Motor kablo arızası | Oyun mekaniği (kurgu) |

## 7. NASA ses kayıtları

Oyun bu kayıtları çalışırken doğrudan `https://www.nasa.gov/wp-content/uploads/` adresinden yükler; dosyalar pakete dahil değildir. İnternet yoksa oyun benzer sesleri kendisi sentezler. Kaynak sayfa: NASA "Sounds from Beyond" ve görev sayfaları. Kullanım koşulları: https://www.nasa.gov/nasa-brand-center/images-and-media/

| Oyundaki kullanım | Dosya yolu | Açıklama |
| --- | --- | --- |
| Mars'ta rüzgâr döngüsü | `2024/05/scam-mic-sol004-run001.wav` | Perseverance SuperCam · Mars rüzgârı (sol 4) |
| Mars'a ilk iniş | `2024/05/scam-mic-sol001-run001.wav` | Mars'ta kaydedilen ilk ses (sol 1) |
| Tarayıcı | `2024/05/scam-mic-sol012-run001.wav` | SuperCam lazer atışları |
| Keşif aracının helikopteri | `2024/05/jpl-20210506-listen-to-nasas-ingenuity-helicopter-as-it-flies-on-mars.wav` |  |
| Toz fırtınası | `2024/05/pia25657.wav` | Mars toz şeytanı |
| Keşif aracı sürüşü | `2024/05/filtered-highlights-sol16roverdrivehighlights.wav` | Perseverance sürüş sesi |
| Marssarsıntısı | `2015/01/Quake-Sol-235.wav` | InSight · 3,3 büyüklüğünde marssarsıntısı |
| Robot kolu | `2015/01/20190819-Sol-98-SEIS-Spatialized-reflective.wav` | InSight robot kolu |
| Gece sesleri | `2015/01/Cropped-Dinks-and-Donks-sample.wav` | InSight gece "dink ve donk" sesleri |
| Uzay yolculuğu ambiyansı | `2024/05/e2-wave-ganymede-flyby-compressed.wav` | Juno · Ganymede geçişi (uzay yolculuğu ambiyansı) |
| Roket kalkışı | `2023/02/liftoff1.mp3` | Artemis I kalkışı |
| Ana menü müziği | `2023/02/we-rise-together1.mp3` | Artemis I · We Rise Together (menü) |

Ayrıca oyunun kendi ürettiği sesler: Quindar tonları (2525/2475 Hz), Geiger tıkırtıları, adım sesleri, alarm ve arayüz sesleri (Web Audio API ile sentez).

---

## Ek A. Oyun içi DSN mesajları (bilgi metinleri)

Houston, JPL ve Mars rölesinden gelen mesajların Türkçe ve İngilizce tam metinleri. Bilgiler NASA ve JPL'nin kamuya açık görev sayfalarına dayanır.

| Anahtar | Türkçe | English |
| --- | --- | --- |
| `hello` | Burası Houston, sesimizi alıyor musun? Kalkış öncesi kontroller tamam. Roket kapsülüne geç ve Mars'a uç. | This is Houston, do you copy? Pre-launch checks complete. Head to the rocket capsule and fly to Mars. |
| `mine_metal` | Aldığın parça demir-nikel içerikli metal. Curiosity 2023'te 'Cacao' adlı benzer bir demir-nikel göktaşı buldu; yapı ve alet için ideal. | The piece you picked up is iron-nickel metal. In 2023 Curiosity found a similar iron-nickel meteorite nicknamed 'Cacao' – great for structures and tools. |
| `mine_copper` | Bu bakır cevheri. Curiosity'nin ChemCam aleti Gale Krateri'nin Kimberley bölgesinde bakırca zengin kayaçlar tespit etti. Devre elemanları için sakla. | That's copper ore. Curiosity's ChemCam detected copper-rich rocks in the Kimberley area of Gale Crater. Keep it for circuit parts. |
| `mine_iron` | Bu demir oksit, yani hematit. Mars'ı kırmızı yapan mineral bu. Opportunity, Meridiani düzlüğünde hematit 'yaban mersinleri' buldu. | This is iron oxide – hematite. It's what makes Mars red. Opportunity found hematite 'blueberries' on Meridiani Planum. |
| `mine_rare` | Nadir metal kristali! Mars'ta altın henüz doğrudan tespit edilmedi, bu numune bilim için çok değerli. Dikkatli paketle. | Rare metal crystal! Gold has not yet been directly detected on Mars, so this sample is very valuable to science. Pack it carefully. |
| `mine_ice` | Su buzu! Phoenix aracı 2008'de yüzeyin birkaç santim altında buz buldu. Eritip içme suyu ve oksijen üretiminde kullanabilirsin. | Water ice! The Phoenix lander found ice just a few centimeters below the surface in 2008. Melt it for drinking water and oxygen. |
| `dig` | Kazı başarılı, gömülü kaynağı yüzeye çıkardın. Perseverance'ın RIMFAX radarı da yer altını böyle haritalıyor. | Dig successful – you brought a buried resource to the surface. Perseverance's RIMFAX radar maps the subsurface the same way. |
| `sleep` | İyi uykular. Bir Mars günü (sol) 24 sa 39 dk 35 sn sürer. NASA mürettebata günde yaklaşık 8 saat uyku planlar; biz seni izliyoruz. | Sleep well. A Mars day (sol) lasts 24 h 39 min 35 s. NASA schedules about 8 hours of sleep for crews; we're keeping an eye on you. |
| `sleep_bp` | Radyasyon sonrası tansiyonun düşük, uyku zorunlu. Uçuş cerrahımız değerlerini anlık izliyor. | Your blood pressure is low after the radiation; sleep is mandatory. Our flight surgeon is monitoring your vitals. |
| `wake` | Günaydın! NASA geleneğinde görev kontrol mürettebatı bir uyandırma şarkısıyla uyandırır. Bugünün planı hazır. | Good morning! In NASA tradition, mission control wakes the crew with a wake-up song. Today's plan is ready. |
| `launch_mars` | Mars Yükseliş Aracı kalkışını onaylıyoruz. Eve dönüş gerçekte yaklaşık 7 ay sürer; burada kısaltıldı. İyi yolculuklar! | We confirm Mars Ascent Vehicle liftoff. The trip home really takes about 7 months; here it's shortened. Safe travels! |
| `arrive_earth` | Dünya'ya hoş geldin! Kurtarma ekibi rampada. Uzun görev sonrası kemik ve kas kaybı için rehabilitasyon programın başlıyor. | Welcome back to Earth! The recovery team is on the pad. Your rehab for bone and muscle loss after the long mission starts now. |
| `launch_earth` | Fırlatma kulesi kollarını açtı, kalkış temiz! Mars transfer yörüngesine giriyorsun. DSN Goldstone seni takip ediyor. | The launch tower swung its arms clear – clean liftoff! Entering the Mars transfer orbit. DSN Goldstone is tracking you. |
| `arrive_mars` | Yere temas onaylandı! Atmosfere giriş-iniş süreci '7 dakikalık terör' diye bilinir. Keşif aracın da indirildi, otonom moda geçiyor. | Touchdown confirmed! Entry, descent and landing is known as the 'seven minutes of terror'. Your rover is down too and switching to autonomous mode. |
| `arrive_mars2` | Yere temas onaylandı. Tekrar hoş geldin; keşif aracın sen yokken keşfe devam etti. | Touchdown confirmed. Welcome back; your rover kept exploring while you were away. |
| `build_bench` | Çalışma masası ve çadır kuruldu. Şişme habitatlar NASA'nın uzun süreli yüzey görevleri için test ettiği tasarımlardan. | Workbench and tent are up. Inflatable habitats are among the designs NASA tests for long surface missions. |
| `build_solar` | Güneş paneli devrede. Mars'a Dünya'daki güneş ışığının yaklaşık %43'ü ulaşır; toz birikmesi verimi düşürür. | Solar panel online. Mars receives about 43% of the sunlight Earth gets; dust buildup lowers output. |
| `build_hab` | Yaşam kapsülü hazır. Basınçlı modül seni %95 CO₂ içeren, yaklaşık 6 milibarlık atmosferden korur. | Habitat ready. The pressurized module protects you from an atmosphere of about 6 millibars that is 95% CO₂. |
| `build_green` | Sera kuruldu. ISS'teki Veggie ve APH deneylerinde marul ve turp yetiştirildi; bitkiler oksijen de üretir. | Greenhouse built. Lettuce and radishes were grown in the Veggie and APH experiments on the ISS; plants also make oxygen. |
| `build_lab` | Araştırma birimi aktif. Bulgular Mars yörüngesindeki rölelerle DSN üzerinden JPL'ye aktarılacak. | Research lab active. Findings will be relayed via Mars orbiters and the DSN to JPL. |
| `build_ice` | Buz işleyici aktif. Elektroliz suyu hidrojen ve oksijene ayırır. Perseverance'taki MOXIE ise CO₂'den toplam 122 g oksijen üretti. | Ice processor active. Electrolysis splits water into hydrogen and oxygen. Perseverance's MOXIE made 122 g of oxygen from CO₂ in total. |
| `build_storage` | Depo kuruldu. Mars'a taşınan her kilogram çok pahalı; yerinde kaynak kullanımı (ISRU) bu yüzden kritik. | Storage built. Every kilogram shipped to Mars is very expensive – that's why in-situ resource utilization (ISRU) is critical. |
| `build_antenna` | Anten yayında! Sinyalin Electra UHF ile MRO ve MAVEN gibi yörüngedeki rölelere, oradan DSN'nin 70 m çanaklarına ulaşır. | Antenna on air! Your signal goes over Electra UHF to orbiting relays like MRO and MAVEN, then to the DSN's 70 m dishes. |
| `build_watercap` | Su kapsülü devrede. ISS'te idrar ve terdeki suyun yaklaşık %98'i geri kazanılıyor; burada da her damla değerli. | Water capsule online. The ISS recovers about 98% of the water from urine and sweat – every drop counts here too. |
| `build_foodcap` | Yiyecek kapsülü devrede. NASA uzay yemeklerinin çoğu dondurularak kurutulur ve vakumlanır. | Food capsule online. Most NASA space food is freeze-dried and vacuum-sealed. |
| `build_gen` | {n} kuruldu. Telemetri alındı, koloni haritası güncellendi. | {n} built. Telemetry received, colony map updated. |
| `craft_tool` | Yeni alet üretildi: {n}. Mars regoliti ince ve aşındırıcıdır; Curiosity'nin tekerlekleri bile delindi, aletine iyi bak. | New tool crafted: {n}. Martian regolith is fine and abrasive – even Curiosity's wheels got holes, so look after it. |
| `craft_scanner` | Tarayıcı hazır. Perseverance'ın RIMFAX yer radarı gibi gömülü kaynakları algılar. | Scanner ready. Like Perseverance's RIMFAX ground-penetrating radar, it detects buried resources. |
| `craft_part` | Roket parçası üretildi: {n}. Yedek parça ve onarım, görev güvencesinin temelidir. | Rocket part crafted: {n}. Spares and repairs are the backbone of mission assurance. |
| `upgrade` | Yükseltme tamam: {n}. Görev kontrol yeni değerleri kayda geçti. | Upgrade complete: {n}. Mission control logged the new values. |
| `signal` | Sinyalin alındı! Işık hızında bile Mars'tan Dünya'ya ulaşması {n} dakika sürdü. | Your signal was received! Even at light speed it took {n} minutes to get from Mars to Earth. |
| `rad_warn` | UYARI: Güneş'te güçlü bir parlama! NASA'nın Ay'dan Mars'a Uzay Havası Analiz Ofisi enerjik parçacık olayı (SPE) bekliyor. Yaklaşık 30 sn içinde sığınağa gir. | WARNING: strong solar flare! NASA's Moon to Mars Space Weather Analysis Office expects a solar particle event (SPE). Get to shelter within about 30 s. |
| `rad_start` | SPE başladı! Curiosity'nin RAD ölçümlerine göre yüzeyde normal doz günde ~0,64 mSv; şu an çok daha yüksek. Sığınaktan çıkma. | SPE has begun! Per Curiosity's RAD data the normal surface dose is ~0.64 mSv/day; right now it's far higher. Stay sheltered. |
| `rad_end` | Parçacık olayı sona erdi. Doz kaydın güncellendi: kariyer dozun {n} mSv (NASA sınırı 600 mSv). | Particle event over. Your dose record is updated: career dose {n} mSv (NASA limit 600 mSv). |
| `aurora` | Bilgi: Perseverance 2024'te bir SPE sırasında Mars yüzeyinden ilk kez görünür yeşil aurora gözlemledi. Gökyüzüne bak! | FYI: during an SPE in 2024, Perseverance saw visible green aurora from the Martian surface for the first time. Look up! |
| `career` | Uçuş cerrahı: kariyer radyasyon dozun NASA'nın 600 mSv sınırını aştı. Açık alanda kalma süreni azalt. | Flight surgeon: your career radiation dose has passed NASA's 600 mSv limit. Cut down your time outdoors. |
| `rover_deploy` | Keşif aracın indi ve otonom sürüşe başladı. Gücünü MMRTG radyoizotop jeneratöründen alır, gece de çalışır. V ile komut ver. | Your rover is down and driving autonomously. It's powered by an MMRTG radioisotope generator, so it works at night too. Command it with V. |
| `rover_find` | Keşif aracı raporu: {n} buldu ve yüzeye çıkardı. Konum: {c}. | Rover report: found {n} and uncovered it. Location: {c}. |
| `rover_sci` | Keşif aracı raporu: Mastcam panoraması ve kayaç analizi tamamlandı. +2 bilim. | Rover report: Mastcam panorama and rock analysis complete. +2 science. |
| `rover_heli` | Keşif aracı mini helikopterini uçurdu. Ingenuity 2021–2024 arasında Mars'ta 72 uçuş yaptı. Hava keşfi: +3 bilim. | The rover launched its mini helicopter. Ingenuity made 72 flights on Mars between 2021 and 2024. Aerial scouting: +3 science. |
| `storm` | Toz fırtınası yaklaşıyor. 2018'de küresel bir fırtına Opportunity'nin panellerini örttü ve yaklaşık 15 yıllık görevini bitirdi. Panellerini izle. | Dust storm approaching. In 2018 a global storm covered Opportunity's panels and ended its nearly 15-year mission. Watch your panels. |
| `quake` | Marssarsıntısı algılandı! InSight 2018–2022 arasında 1.300'den fazla marssarsıntısı kaydetti. Yapılarını kontrol et. | Marsquake detected! InSight recorded more than 1,300 marsquakes between 2018 and 2022. Check your structures. |
| `mission_new` | Görev kontrol: yeni görev paketi yüklendi – {n}. Listeyi sol üstte gör. | Mission control: new mission package uploaded – {n}. See the list at the top left. |
| `station` | Uzay istasyonundasın; buradaki iletişim DSN değil, TDRS uyduları (Yakın Uzay Ağı) üzerinden. | You're on the space station; comms here go through TDRS satellites (Near Space Network), not the DSN. |
| `sample` | Örnek tüpü mühürlendi. Gezegen koruma kuralları gereği Mars örnekleri Dünya'da özel bir tesiste açılır. | Sample tube sealed. Under planetary protection rules, Mars samples are opened in a special facility on Earth. |
| `geiger` | Geiger sayacın devrede. Curiosity'nin RAD dedektörü de Mars yüzeyindeki radyasyonu 2012'den beri böyle ölçüyor. Tıkırtı hızlanırsa sığınağa gir. | Your Geiger counter is online. Curiosity's RAD detector has measured surface radiation on Mars like this since 2012. If the clicking speeds up, take shelter. |
| `suitUp` | Kostüm seviye {n} onaylandı. Radyasyon korumasın %{c}. Gerçek kostümlerde koruma için hidrojence zengin katmanlar (polietilen gibi) kullanılır. | Suit level {n} confirmed. Radiation protection is {c}%. Real suits use hydrogen-rich layers such as polyethylene for shielding. |
| `suit6` | Tebrikler, kostüm 6. seviyede: radyasyon geçirmez ve çanta kapasiten 20 arttı. Artık SPE sırasında da dışarıda çalışabilirsin. | Congratulations, your suit is level 6: radiation-proof and your bag holds 20 more. You can now keep working outside during an SPE. |
| `plot` | Ekim yatağı hazır. Mars toprağında Phoenix'in 2008'de bulduğu zehirli perkloratlar var; toprak yıkandı, kompost eklendi ve üstüne basınçlı mini kubbe kuruldu. | Plant bed ready. Martian soil contains toxic perchlorates, found by Phoenix in 2008; the soil was washed, compost added, and a pressurized mini dome placed on top. |
| `water` | Sulama tamam. Su, Mars buzundan elde edildi; nemli toprakta ekin 2,5 kat hızlı büyür. Pembe-mor LED'ler NASA'nın Veggie ünitesindeki ışığın aynısı. | Watering done. The water came from Martian ice; in moist soil crops grow 2.5× faster. The pink-purple LEDs match the light in NASA's Veggie unit. |

## Ek B. Ekin bilgi metinleri

| Ekin | Türkçe | English |
| --- | --- | --- |
| Marul | Kırmızı marul 'Outredgeous', 2015'te ISS'teki Veggie ünitesinde yetiştirilip astronotların uzayda yediği ilk sebze oldu. | Red romaine 'Outredgeous', grown in the ISS Veggie unit in 2015, became the first vegetable astronauts ate in space. |
| Turp | Turplar 2020'de ISS'teki Gelişmiş Bitki Habitatı'nda (APH-02) yetiştirildi ve 27 günde hasat edildi; en hızlı büyüyen ekin bu. | Radishes were grown in the ISS Advanced Plant Habitat (APH-02) in 2020 and harvested after 27 days – the fastest crop here. |
| Patates | Uluslararası Patates Merkezi (CIP) NASA desteğiyle 2016'da Mars benzeri koşullarda patates yetiştirmeyi test etti. Yumrulardan biri yeniden ekilir. | In 2016 the International Potato Center (CIP), with NASA support, tested growing potatoes in Mars-like conditions. One tuber is kept for replanting. |
| Cüce domates | 'Red Robin' cüce domatesleri 2023'te ISS'teki Veg-05 deneyinde yetiştirildi; taze sebze astronotların moralini de yükseltir. | 'Red Robin' dwarf tomatoes were grown in the Veg-05 experiment on the ISS in 2023; fresh produce also lifts crew morale. |
| Hatch biberi | Hatch biberleri 2021'de ISS'te (PH-04) yetiştirildi; astronotlar onlarla uzayda taco yaptı. En uzun büyüyen ekin bu. | Hatch chiles were grown on the ISS in 2021 (PH-04) and the crew made space tacos with them. This crop takes the longest. |
| Mizuna hardalı | Mizuna hardalı 2017'de ISS'teki Veggie ünitesinde (VEG-03) yetiştirildi; yaprakları kesildikçe yeniden çıkar. | Mizuna mustard was grown in the ISS Veggie unit (VEG-03) in 2017; its leaves grow back after cutting. |
| Çin lahanası | 'Tokyo Bekana' Çin lahanası 2017'de ISS'te yetiştirilip astronotlar tarafından yendi; Mir istasyonunun Svet serasında da denenmişti. | 'Tokyo Bekana' Chinese cabbage was grown and eaten on the ISS in 2017; it had also been tried in Mir's Svet greenhouse. |
| Roka | Roka, Wageningen Üniversitesi'nin (Wieger Wamelink) Mars toprağı benzeri regolitle yaptığı 2016 deneyinde başarıyla yetişti ve tohum verdi. | Arugula grew successfully and set seed in Wageningen University's 2016 experiment (Wieger Wamelink) using Mars-like regolith. |
| Kara lahana | 'Red Russian' kara lahana 2019'da ISS'te Veggie deneylerinde yetiştirildi; vitamin K ve antioksidan açısından zengindir. | 'Red Russian' kale was grown in Veggie experiments on the ISS in 2019; it is rich in vitamin K and antioxidants. |
| Bezelye | Bezelye havadaki azotu bağlayan bir baklagildir; Wamelink'in Mars regoliti deneylerinde yetişip tohum verdi, toprağı da zenginleştirir. | Pea is a legume that fixes nitrogen from the air; it grew and set seed in Wamelink's Mars regolith experiments, enriching the soil. |
| Cüce buğday | 'Apogee' cüce buğday, 2018'de ISS'teki Gelişmiş Bitki Habitatı'nın (APH) ilk deneyinde yetiştirildi; Mir'de de tohumdan tohuma büyütülmüştü. | 'Apogee' dwarf wheat was grown in the first test of the ISS Advanced Plant Habitat (APH) in 2018; it had also been grown seed-to-seed on Mir. |

## Başlıca kaynaklar

- NASA Mars Fact Sheet (NSSDC): https://nssdc.gsfc.nasa.gov/planetary/factsheet/marsfact.html
- Hassler, D. M. ve ark. (2014). Mars' Surface Radiation Environment Measured with the Mars Science Laboratory's Curiosity Rover. *Science* 343.
- Zeitlin, C. ve ark. (2013). Measurements of Energetic Particle Radiation in Transit to Mars on the Mars Science Laboratory. *Science* 340.
- NASA-STD-3001, Space Flight Human-System Standard (kariyer doz sınırı 600 mSv).
- Hecht, M. H. ve ark. (2009). Detection of Perchlorate and the Soluble Chemistry of Martian Soil at the Phoenix Lander Site. *Science* 325.
- Stern, J. C. ve ark. (2015). Evidence for indigenous nitrogen in sedimentary and aeolian deposits from the Curiosity rover investigations at Gale crater, Mars. *PNAS* 112.
- Wamelink, G. W. W. ve ark. (2014, 2016). Mars ve Ay toprağı simülantlarında bitki yetiştirme deneyleri, Wageningen University & Research.
- NASA Veggie ve Advanced Plant Habitat (APH) deney sayfaları: https://www.nasa.gov/
- NASA InSight görevi: https://science.nasa.gov/mission/insight/
- NASA Deep Space Network: https://www.nasa.gov/communicating-with-missions/dsn/
- NASA Sounds from Beyond: https://www.nasa.gov/
