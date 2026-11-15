// MARS: Colony Builder – çok oyunculu sunucu (en fazla 4 oyuncu / oda) + telsiz (sesli sohbet) sinyalleşmesi
// Ek paket gerekmez: Node.js 18 veya üstü yeterli.  Çalıştır:  node server.js   (varsayılan port 3000, PORT ortam değişkeniyle değişir)
// Oyunu da kendisi sunar: aynı klasördeki index.html (oyun dosyası) → https://sunucun/ adresinden açılır.
'use strict';
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = process.env.PORT || 3000;
const MAX_PLAYERS = 4;
const TIMEOUT_MS = 20000;          // 20 sn güncelleme gelmezse oyuncu odadan düşer
const rooms = new Map();           // kod → { players: Map(id → oyuncu) }

function gameFile() {
  const dir = __dirname;
  if (fs.existsSync(path.join(dir, 'index.html'))) return path.join(dir, 'index.html');
  const f = fs.readdirSync(dir).filter(n => /^Mars_Colony_Builder.*\.html$/i.test(n)).sort().pop();
  return f ? path.join(dir, f) : null;
}
function newCode() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let c; do { c = Array.from({ length: 4 }, () => A[Math.floor(Math.random() * A.length)]).join(''); } while (rooms.has(c));
  return c;
}
function cors(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'content-type');
}
function json(res, code, obj) { cors(res); res.writeHead(code, { 'content-type': 'application/json' }); res.end(JSON.stringify(obj)); }
function body(req) {
  return new Promise(ok => { let b = ''; req.on('data', d => { b += d; if (b.length > 1e5) req.destroy(); }); req.on('end', () => { try { ok(JSON.parse(b || '{}')); } catch (e) { ok({}); } }); });
}
function pub(p) { return Object.assign({ id: p.id, n: p.name, slot: p.slot }, p.p || {}); }
function list(room) { return [...room.players.values()].map(pub); }
function send(p, obj) { if (p.res) { try { p.res.write('data: ' + JSON.stringify(obj) + '\n\n'); } catch (e) {} } }
function broadcast(room) { const pl = list(room); for (const p of room.players.values()) send(p, { players: pl }); }
function removePlayer(code, id, kicked) {
  const room = rooms.get(code); if (!room) return;
  const p = room.players.get(id); if (!p) return;
  if (kicked) send(p, { kicked: true });
  try { p.res && p.res.end(); } catch (e) {}
  room.players.delete(id);
  for (const o of room.players.values()) send(o, { left: id });
  if (!room.players.size) rooms.delete(code); else broadcast(room);
}

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x');
  if (req.method === 'OPTIONS') { cors(res); res.writeHead(204); return res.end(); }

  // oyunun kendisi
  if (req.method === 'GET' && (u.pathname === '/' || u.pathname === '/index.html')) {
    const f = gameFile();
    if (!f) { res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' }); return res.end('Oyun dosyası bulunamadı: server.js ile aynı klasöre index.html koy.'); }
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' }); return fs.createReadStream(f).pipe(res);
  }
  if (u.pathname === '/health') return json(res, 200, { ok: true, rooms: rooms.size });

  // odaya katıl: { name, room } → { room, id, slot, players }
  if (req.method === 'POST' && u.pathname === '/api/join') {
    const b = await body(req);
    const name = String(b.name || 'Kolonist').slice(0, 16);
    let code = String(b.room || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 4);
    if (!code) { code = newCode(); rooms.set(code, { players: new Map() }); }
    const room = rooms.get(code);
    if (!room) return json(res, 404, { error: 'Oda bulunamadı: ' + code });
    if (room.players.size >= MAX_PLAYERS) return json(res, 409, { error: 'Oda dolu (4/4)' });
    const used = new Set([...room.players.values()].map(p => p.slot));
    let slot = 1; while (used.has(slot)) slot++;          // Oyuncu 1, 2, 3, 4
    const id = crypto.randomBytes(6).toString('hex');
    room.players.set(id, { id, name, slot, p: {}, last: Date.now(), res: null });
    broadcast(room);
    return json(res, 200, { room: code, id, slot, players: list(room) });
  }

  // olay akışı (SSE): oyuncu listesi, telsiz sinyalleşmesi
  if (req.method === 'GET' && u.pathname === '/api/stream') {
    const room = rooms.get(String(u.searchParams.get('room') || ''));
    const p = room && room.players.get(String(u.searchParams.get('id') || ''));
    if (!p) { cors(res); res.writeHead(404); return res.end(); }
    cors(res);
    res.writeHead(200, { 'content-type': 'text/event-stream', 'cache-control': 'no-cache', connection: 'keep-alive', 'x-accel-buffering': 'no' });
    res.write(': bağlandı\n\n');
    p.res = res; p.last = Date.now();
    send(p, { players: list(room) });
    req.on('close', () => { if (p.res === res) p.res = null; });
    return;
  }

  // konum + telsiz durumu güncellemesi
  if (req.method === 'POST' && u.pathname === '/api/update') {
    const b = await body(req);
    const room = rooms.get(b.room); const p = room && room.players.get(b.id);
    if (!p) return json(res, 404, { error: 'yok' });
    p.p = b.p || {}; p.last = Date.now();
    return json(res, 200, { ok: 1 });
  }

  // telsiz (WebRTC) sinyalleşmesi: teklif / cevap / ICE adayı hedef oyuncuya iletilir
  if (req.method === 'POST' && u.pathname === '/api/signal') {
    const b = await body(req);
    const room = rooms.get(b.room); const from = room && room.players.get(b.id); const to = room && room.players.get(b.to);
    if (!from || !to) return json(res, 404, { error: 'yok' });
    send(to, { sig: { from: from.id, data: b.data } });
    return json(res, 200, { ok: 1 });
  }

  if (req.method === 'POST' && u.pathname === '/api/leave') {
    const b = await body(req);
    removePlayer(b.room, b.id, false);
    return json(res, 200, { ok: 1 });
  }
  json(res, 404, { error: 'bulunamadı' });
});

// saniyede 10 kez konumları yayınla, sessiz oyuncuları düşür, bağlantıyı canlı tut
setInterval(() => { for (const room of rooms.values()) broadcast(room); }, 100);
setInterval(() => {
  const now = Date.now();
  for (const [code, room] of rooms) for (const p of [...room.players.values()]) if (now - p.last > TIMEOUT_MS) removePlayer(code, p.id, true);
  for (const room of rooms.values()) for (const p of room.players.values()) if (p.res) { try { p.res.write(': ping\n\n'); } catch (e) {} }
}, 5000);

server.listen(PORT, () => console.log('MARS sunucusu çalışıyor → http://localhost:' + PORT + '  (oyun: /, sağlık: /health)'));
