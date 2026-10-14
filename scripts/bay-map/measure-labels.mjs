// Measures label widths (in em) for Barlow Condensed in headless Chrome (macOS Chrome path), for build-map.mjs.
// usage: node scripts/bay-map/measure-labels.mjs <names.json> <out.json> <chromeProfileDir>
import { spawn } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
const [, , namesPath, outPath, profileDir] = process.argv;
const names = JSON.parse(readFileSync(namesPath, 'utf8'));
const html = `<!doctype html><html><head><meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&display=block" rel="stylesheet"><style>span{font-family:'Barlow Condensed';font-size:100px;white-space:nowrap;position:absolute}</style></head><body></body></html>`;
writeFileSync(outPath + '.html', html);
const chrome = spawn('/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', ['--headless=new', '--remote-debugging-port=9337', `--user-data-dir=${profileDir}`, '--no-first-run', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let wsUrl; for (let i = 0; i < 60 && !wsUrl; i++) { try { wsUrl = (await (await fetch('http://127.0.0.1:9337/json/list')).json()).find((t) => t.type === 'page')?.webSocketDebuggerUrl; } catch {} if (!wsUrl) await sleep(250); }
const ws = new WebSocket(wsUrl); await new Promise((r) => (ws.onopen = r));
let id = 0; const pending = new Map(); ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id) pending.get(m.id)?.(m.result); };
const send = (method, params = {}) => new Promise((res) => { pending.set(++id, res); ws.send(JSON.stringify({ id, method, params })); });
await send('Page.enable');
await send('Page.navigate', { url: 'file://' + outPath + '.html' });
await sleep(3000);
const expr = `(async () => { await document.fonts.load("500 100px 'Barlow Condensed'"); await document.fonts.load("600 100px 'Barlow Condensed'"); await document.fonts.load("700 100px 'Barlow Condensed'");
  const names = ${JSON.stringify(names)}; const out = {};
  for (const w of [500, 600, 700]) { out[w] = {}; for (const n of names) { const s = document.createElement('span'); s.style.fontWeight = w; s.textContent = n; document.body.appendChild(s); out[w][n] = Math.round(s.getBoundingClientRect().width) / 100; s.remove(); } }
  return { ok: document.fonts.check("600 100px 'Barlow Condensed'"), out }; })()`;
const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
writeFileSync(outPath, JSON.stringify(r.result.value.out, null, 1));
console.log('font loaded:', r.result.value.ok, 'names:', names.length);
ws.close(); chrome.kill('SIGKILL'); process.exit(0);
