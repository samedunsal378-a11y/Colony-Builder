# MARS: Colony Builder – 4 kişilik sunucu kurulumu

Bu klasörde 3 dosya var:
- `server.js` – sunucu (ek paket gerekmez)
- `package.json` – barındırma siteleri için
- `index.html` – oyunun kendisi (sunucu oyunu da dağıtır)

Telsizin (mikrofonun) çalışması için oyunun **https://** adresinden açılması gerekir. Bu yüzden aşağıdaki iki yoldan birini kullan.

---

## Yol 1 – İnternette kalıcı sunucu (önerilen, ücretsiz): Render.com

1. https://github.com adresinde ücretsiz hesap aç → **New repository** → adı `mars-server` → **Create**.
2. Repo sayfasında **Add file → Upload files** → bu klasördeki 3 dosyayı sürükle → **Commit changes**.
3. https://render.com adresine GitHub hesabınla gir → **New → Web Service** → `mars-server` reposunu seç.
4. Ayarlar:
   - Runtime: **Node**
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Instance type: **Free**
5. **Deploy** → birkaç dakika sonra sana `https://mars-server-xxxx.onrender.com` gibi bir adres verir.
6. Bu adresi 3 arkadaşına gönder. Herkes adresi tarayıcıda açar → **Çok oyunculu** → sunucu adresi kendiliğinden dolar → adını yaz →
   - **İlk kişi** oda kodunu boş bırakıp **Bağlan ve başla**'ya basar. Üstte 4 harfli oda kodu görünür (örn. `MB9T`).
   - **Diğerleri** aynı oda kodunu yazıp katılır.
7. Tarayıcı mikrofon izni sorunca **İzin ver** de.

Not: Ücretsiz planda sunucu bir süre kimse bağlanmazsa uykuya geçer; ilk açılış yaklaşık 1 dakika sürebilir.

## Yol 2 – Kendi bilgisayarından (geçici)

1. https://nodejs.org adresinden Node.js (18 veya üstü) kur.
2. Bu klasörde terminal aç: `node server.js`
3. Cloudflare Tunnel kur (https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/) ve ikinci bir terminalde çalıştır:
   `cloudflared tunnel --url http://localhost:3000`
4. Sana `https://....trycloudflare.com` adresi verir; bunu arkadaşlarına gönder. Bilgisayarın açık kaldığı sürece çalışır.

---

## Telsiz nasıl çalışır?

- Sol altta telsiz durur, sadece üst kısmı (%20) görünür.
- Biri konuşunca telsiz yarısına kadar yükselir, turuncu renklenir, ekranında **Oyuncu 1 / 2 / 3 / 4** yazar. Konuşan oyuncunun sırt antenindeki ışık da yanar.
- Ayarlar → Ses ve Görsel → **Telsiz modu**:
  - *Sesle etkinleştir* (varsayılan): konuşunca kendiliğinden açılır. **T** ile kendini susturup açabilirsin.
  - *Bas-konuş*: **T** basılı tutarken konuşursun.
- Ses doğrudan oyuncular arasında (WebRTC) gider; sunucu yalnızca bağlantıyı kurar. Bazı mobil veri veya şirket ağlarında sesli bağlantı kurulamayabilir; oyun yine de çalışır.
