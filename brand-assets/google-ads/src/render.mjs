// Renders every .ad in ads.html to an exact-size JPEG under Google Ads' 150 KB limit for uploaded image ads.
// usage (from the repo root): node brand-assets/google-ads/src/render.mjs
// Needs Google Chrome (macOS path below) and an internet connection for the Barlow fonts.
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = fileURLToPath(new URL('.', import.meta.url));
// --license <n> --out <dir>: preview with a test license number in another folder (never in display/).
const arg = (name) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : undefined; };
const PREVIEW_LICENSE = arg('license');
const OUT = arg('out') ?? join(here, '../display');
const OUT_RESPONSIVE = PREVIEW_LICENSE ? join(OUT, 'responsive') : join(here, '../responsive');
if (PREVIEW_LICENSE && !arg('out')) { console.error('--license needs --out (preview only)'); process.exit(1); }
const MAX_BYTES = 150 * 1024;
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9341;

mkdirSync(OUT, { recursive: true });
mkdirSync(OUT_RESPONSIVE, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), 'abs-ads-'));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const quit = (code) => { chrome.kill('SIGKILL'); process.exit(code); };
setTimeout(() => { console.error('timed out'); quit(2); }, 120000);

let ws;
for (let i = 0; i < 60 && !ws; i++) {
  try {
    const url = (await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl;
    if (url) ws = new WebSocket(url);
  } catch {}
  if (!ws) await sleep(250);
}
await new Promise((r) => (ws.onopen = r));
let id = 0;
const pending = new Map();
ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id) pending.get(m.id)?.(m); };
const send = (method, params = {}) => new Promise((res) => { pending.set(++id, res); ws.send(JSON.stringify({ id, method, params })); });
const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result.result.value;

await send('Page.enable');
await send('Emulation.setDeviceMetricsOverride', { width: 2600, height: 1800, deviceScaleFactor: 1, mobile: false });
await send('Page.navigate', { url: 'file://' + join(here, 'ads.html') + (PREVIEW_LICENSE ? `?license=${encodeURIComponent(PREVIEW_LICENSE)}` : '') });
await sleep(1500);
const ready = await evaluate(`(async () => {
  await document.fonts.ready;
  await Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => (i.onload = i.onerror = r))));
  await new Promise((r) => setTimeout(r, 400));
  return { fonts: document.fonts.check("700 20px 'Barlow Condensed'") && document.fonts.check("600 12px Barlow"), images: [...document.images].every((i) => i.naturalWidth > 0) };
})()`);
if (!ready.fonts || !ready.images) { console.error('fonts or images missing', ready); quit(1); }

const ads = await evaluate(`[...document.querySelectorAll('.ad')].map((el) => { const r = el.getBoundingClientRect(); return { name: el.dataset.name, folder: el.dataset.folder, x: r.x + scrollX, y: r.y + scrollY, width: r.width, height: r.height }; })`);
for (const ad of ads) {
  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: ad.x, y: ad.y, width: ad.width, height: ad.height, scale: 1 }, captureBeyondViewport: true });
  const png = Buffer.from(shot.result.data, 'base64');
  if (ad.folder === 'responsive') {
    // Logos: lossless PNG; Google's limit for these assets is 5 MB.
    writeFileSync(join(OUT_RESPONSIVE, `${ad.name}.png`), await sharp(png).png({ compressionLevel: 9 }).toBuffer());
    console.log(`${ad.name}.png`.padEnd(24), `${ad.width}x${ad.height}`);
    continue;
  }
  let quality = 92;
  let jpg = await sharp(png).jpeg({ quality, mozjpeg: true }).toBuffer();
  while (jpg.length > MAX_BYTES && quality > 60) {
    quality -= 4;
    jpg = await sharp(png).jpeg({ quality, mozjpeg: true }).toBuffer();
  }
  writeFileSync(join(OUT, `${ad.name}.jpg`), jpg);
  console.log(`${ad.name}.jpg`.padEnd(24), `${ad.width}x${ad.height}`.padEnd(9), `${Math.round(jpg.length / 1024)} KB`, `q${quality}`);
}
const sheet = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
writeFileSync(PREVIEW_LICENSE ? join(OUT, 'overview.jpg') : join(here, '../overview.jpg'), await sharp(Buffer.from(sheet.result.data, 'base64')).jpeg({ quality: 80 }).toBuffer());
quit(0);
