# Google Ads creatives

Image ads for AB’s Plumbing Services, in English (`-en`) and Spanish (`-es`). Open `overview.jpg` to see them all.

## `display/`: image ads (Display campaigns)

Upload these as **image ads**. Each one is the exact size Google asks for and under its 150 KB limit.

| File | Size | Where it shows |
| --- | --- | --- |
| `abs-300x250-*` | 300 × 250 | Medium rectangle, the most common placement |
| `abs-336x280-*` | 336 × 280 | Large rectangle |
| `abs-728x90-*` | 728 × 90 | Leaderboard, top of desktop pages |
| `abs-300x600-*` | 300 × 600 | Half page |
| `abs-160x600-*` | 160 × 600 | Wide skyscraper |
| `abs-970x250-*` | 970 × 250 | Billboard |
| `abs-320x50-*` | 320 × 50 | Mobile banner |
| `abs-320x100-*` | 320 × 100 | Large mobile banner |

Send the English set to `/` or the matching service page, and the Spanish set to `/es` or `/es/servicios/...`.
The button on the image ("Free estimate" / "Cotizar gratis") matches what the click does: it opens the
landing page, where the estimate form is.

## `responsive/`: Performance Max, Demand Gen and responsive display

- Photos: real job photos in the three ratios Google asks for (1.91:1, 1:1, 4:5), **no text on them**.
  Google rejects or limits images with overlaid text, logos or buttons in these formats; the headlines and
  descriptions you type in Google Ads carry the message.
- Logos: `abs-logo-1200x1200.png` (square) and `abs-logo-1200x300.png` (landscape).

## `posts/`: designed posts

One message per post, all from verified facts: open 24/7, the 4.9 rating from 677 Yelp reviews, free estimates
with the price first, the whole Bay Area (drawn from the site's coverage map), family-owned and licensed with
10+ years, what we fix (real job photos), the 10% new-customer offer, camera inspection and water heaters.
Nine in English, five in Spanish. Open `posts-overview.jpg` to see them all.

- `*-1200x900.jpg` (4:3): **Google Business Profile** posts ("Add update", or "Add offer" for the 10% post).
- `*-1200x1200.jpg` (1:1): **Google Ads** image assets (Performance Max / Demand Gen) and social media. Google may
  show designs with text less often than plain photos in those campaigns, so upload them next to the text-free
  photos in `responsive/` and let Google pick.
- The rating posts name Yelp as the source (it would be misleading otherwise). If Google Ads flags one for the
  trademark, keep it for the Business Profile only.

## Before they run

- **CSLB license number.** California requires contractors to show their license number in all advertising.
  Put the number in `FACTS.license` in `src/ads.html` and re-render: every size has a spot for it (on the photo
  corner or under the brand name). To check a layout first without saving it here:
  `node brand-assets/google-ads/src/render.mjs --license 1234567 --out /tmp/ads-preview`.
- Rating (4.9, 677 reviews) and the 10% new-customer offer mirror `src/content/business.ts` and the landing
  pages. If either changes, update `FACTS` / `COPY` in `src/ads.html` and re-render.
- The ads don't name Yelp: Google can restrict ads that use another company’s trademark.

## Re-render

```bash
node brand-assets/google-ads/src/render.mjs      # display/ banners, logos and overview.jpg (needs Chrome + internet for fonts)
node brand-assets/google-ads/src/responsive.mjs  # responsive/ photo crops
node brand-assets/google-ads/src/posts-render.mjs  # posts/ (drawn at 2x, then downsized)
```
