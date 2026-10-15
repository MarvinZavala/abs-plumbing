// Photo assets for responsive display / Performance Max / Demand Gen: real job photos, no text on them
// (Google limits or rejects overlaid text, logos and buttons in these formats). Never upscaled.
// usage (from the repo root): node brand-assets/google-ads/src/responsive.mjs
import { mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const here = fileURLToPath(new URL('.', import.meta.url));
const SRC = join(here, '../../../src/assets/work');
const OUT = join(here, '../responsive');
mkdirSync(OUT, { recursive: true });

// focus: where the subject sits vertically (0 = top, 1 = bottom) for each crop.
const PHOTOS = [
  { id: 'crew-street', file: 'sewer-line-foothill-blvd-oakland.jpg', focus: { '1.91x1': 0.2, '1x1': 0.5, '4x5': 0.5 } },
  { id: 'copper-heaters', file: 'commercial-water-heaters-copper.jpg', focus: { '1.91x1': 0.3, '1x1': 0.35, '4x5': 0.4 } },
  { id: 'kitchen-drain', file: 'commercial-kitchen-drain-line.jpg', focus: { '1.91x1': 0.5, '1x1': 0.5, '4x5': 0.5 } },
  { id: 'tankless', file: 'tankless-water-heater-shingle-wall.jpg', focus: { '1.91x1': 0.35, '1x1': 0.4, '4x5': 0.45 } },
  { id: 'water-line', file: 'water-line-trench-front-yard.jpg', focus: { '1.91x1': 0.55, '1x1': 0.55, '4x5': 0.55 } },
  { id: 'street-patch', file: 'sewer-lateral-street-patch.jpg', focus: { '1.91x1': 0.55, '1x1': 0.55, '4x5': 0.5 } },
];
const RATIOS = { '1.91x1': [1200, 628], '1x1': [1200, 1200], '4x5': [960, 1200] };

for (const p of PHOTOS) {
  const img = sharp(join(SRC, p.file));
  const { width, height } = await img.metadata();
  for (const [ratio, [tw, th]] of Object.entries(RATIOS)) {
    const r = tw / th;
    const cw = Math.min(width, Math.round(height * r));
    const ch = Math.round(cw / r);
    const left = Math.round((width - cw) / 2);
    const top = Math.round(Math.min(Math.max(p.focus[ratio] * height - ch / 2, 0), height - ch));
    const scale = Math.min(1, tw / cw);
    const out = join(OUT, `abs-${p.id}-${ratio}.jpg`);
    const info = await sharp(join(SRC, p.file))
      .extract({ left, top, width: cw, height: ch })
      .resize(Math.round(cw * scale), Math.round(ch * scale))
      .modulate({ saturation: 1.06 })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(out);
    console.log(`abs-${p.id}-${ratio}.jpg`.padEnd(32), `${info.width}x${info.height}`, `${Math.round(info.size / 1024)} KB`);
  }
}
