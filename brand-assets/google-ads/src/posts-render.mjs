// Renders posts.html to high-quality JPEGs: drawn at 2x, then downsized, so type stays crisp.
// usage (from the repo root): node brand-assets/google-ads/src/posts-render.mjs [--license 1234567 --out /tmp/preview]
// Needs Google Chrome (macOS path below) and an internet connection for the Barlow fonts.
import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { bayMap } from '../../../src/content/bay-map.ts';

const here = fileURLToPath(new URL('.', import.meta.url));
const arg = (name) => { const i = process.argv.indexOf(`--${name}`); return i > 0 ? process.argv[i + 1] : undefined; };
const PREVIEW_LICENSE = arg('license');
if (PREVIEW_LICENSE && !arg('out')) { console.error('--license needs --out (preview only)'); process.exit(1); }
const OUT = arg('out') ?? join(here, '../posts');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PORT = 9342;

mkdirSync(OUT, { recursive: true });
const profile = mkdtempSync(join(tmpdir(), 'abs-posts-'));
const chrome = spawn(CHROME, ['--headless=new', `--remote-debugging-port=${PORT}`, `--user-data-dir=${profile}`, '--no-first-run', '--hide-scrollbars', '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const quit = (code) => { chrome.kill('SIGKILL'); process.exit(code); };
setTimeout(() => { console.error('timed out'); quit(2); }, 300000);

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
await send('Emulation.setDeviceMetricsOverride', { width: 2560, height: 1600, deviceScaleFactor: 2, mobile: false });
await send('Page.navigate', { url: 'file://' + join(here, 'posts.html') + (PREVIEW_LICENSE ? `?license=${encodeURIComponent(PREVIEW_LICENSE)}` : '') });
await sleep(1500);
const count = await evaluate(`(() => { window.BAY_MAP = ${JSON.stringify(bayMap)}; return window.build(); })()`);
const ready = await evaluate(`(async () => {
  await document.fonts.ready;
  const urls = new Set([...document.querySelectorAll('[style*="background-image"]')].map((el) => el.style.backgroundImage.slice(5, -2)));
  const imgs = [...document.images, ...[...urls].map((u) => { const i = new Image(); i.src = u; return i; })];
  await Promise.all(imgs.map((i) => (i.complete ? 0 : new Promise((r) => (i.onload = i.onerror = r)))));
  await new Promise((r) => setTimeout(r, 600));
  return { fonts: document.fonts.check("700 40px 'Barlow Condensed'") && document.fonts.check("500 20px Barlow"), broken: imgs.filter((i) => !i.naturalWidth).map((i) => i.src) };
})()`);
if (!ready.fonts || ready.broken.length) { console.error('fonts or images missing', ready); quit(1); }

const posts = await evaluate(`[...document.querySelectorAll('.post')].map((el) => { const r = el.getBoundingClientRect(); return { name: el.dataset.name, x: r.x + scrollX, y: r.y + scrollY, width: r.width, height: r.height }; })`);
for (const post of posts) {
  const shot = await send('Page.captureScreenshot', { format: 'png', clip: { x: post.x, y: post.y, width: post.width, height: post.height, scale: 1 }, captureBeyondViewport: true });
  const info = await sharp(Buffer.from(shot.result.data, 'base64'))
    .resize(post.width, post.height, { kernel: 'lanczos3' })
    .jpeg({ quality: 90, mozjpeg: true, chromaSubsampling: '4:4:4' })
    .toFile(join(OUT, `${post.name}.jpg`));
  console.log(`${post.name}.jpg`.padEnd(48), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
}
console.log(`${count} posts`);
quit(0);
