# AB’s Plumbing Services website

Marketing site and Google Ads landing pages for AB’s Plumbing Services, a 24/7 plumbing crew based in Oakland.
Next.js 15 (App Router, fully static pages), React 19, Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # lead form logic (node --test, no extra dependencies)
npm run typecheck
npm run lint
npm run build && npm start   # production build
```

In development, if no delivery channel is configured, estimate requests are printed to the terminal instead of sent.
In production, an unconfigured or failing form tells the visitor to call instead of pretending it worked.

## Where things live

| What | Where |
| --- | --- |
| Business facts (phone, hours, license, offer, Yelp rating) | `src/content/business.ts` |
| Service landing pages (headline, problems, photos, SEO) | `src/content/services.ts` → `/services/[slug]` |
| Customer reviews (verbatim from Yelp) | `src/content/reviews.ts` |
| Job photos and captions | `src/content/work.ts`, images in `src/assets/work/` |
| Cities served | `src/content/areas.ts` |
| FAQ | `src/content/faqs.ts` |
| Estimate form logic and delivery (tested) | `src/lib/lead.ts`, tests in `tests/` |
| Conversion tracking helpers | `src/lib/track.ts`, `src/components/analytics.tsx` |

## Before launching ads

1. **License number**: set `license` in `src/content/business.ts` to the CSLB number. California contractors must show it in advertising.
2. **Texting**: confirm (510) 753-8649 receives SMS. If not, set `acceptsTexts: false` and the text buttons disappear.
3. **Offer**: the site says 10% off for new customers; a Yelp post says 20%. Pick one and make the ads match.
4. **Lead delivery**: set `RESEND_API_KEY` (and/or `LEAD_WEBHOOK_URL`) in Vercel. See `.env.example`. Send a test request after deploying.
5. **Tracking**: set `NEXT_PUBLIC_GTM_ID`, or `NEXT_PUBLIC_GOOGLE_ADS_ID` plus the conversion labels. Events pushed to the dataLayer: `call_click`, `text_click`, `estimate_click`, `lead_submit`. Each lead also carries the `gclid` and UTM tags of the ad click.
6. **Reviews**: quotes are verbatim from Yelp. Yelp’s guidance is to quote word for word and in context; asking the reviewers first is the courteous route. Refresh `reviews.ts` and the Yelp numbers in `business.ts` every few months.

## Google Ads landing pages

Point each ad group at the page whose headline matches it:

| Ad group | Landing page |
| --- | --- |
| Emergency / 24-hour plumber | `/services/emergency-plumbing` |
| Drain cleaning, clogged drain, hydro-jetting | `/services/drain-cleaning` |
| Water heater repair / replacement, tankless | `/services/water-heaters` |
| Sewer line, sewer lateral, sewer backup | `/services/sewer-lines` |
| Leak repair, water line, water pressure | `/services/leaks-water-lines` |
| Toilet, faucet, garbage disposal | `/services/fixtures` |
| Generic “plumber near me” | `/` |

## SEO, AI assistants and indexing

- **Structured data** (`src/lib/structured-data.ts`, tested): `Plumber` + `WebSite` on every page, `Service` and
  `BreadcrumbList` on service pages, `FAQPage` wherever the FAQ appears. No self-serving `aggregateRating`
  (Google only allows it for sites that review *other* businesses).
- **`/sitemap.xml`** and **`/robots.txt`** are generated. robots.txt allows every crawler and names the search and AI
  agents explicitly (OAI-SearchBot is what puts a site in ChatGPT search).
- **`/llms.txt`** and **`/llms-full.txt`** ([llmstxt.org](https://llmstxt.org)) give AI assistants the facts in plain
  markdown. Both are built from `src/content/*`, so they never drift from the site.
- **Service area**: one page (`/service-areas`) with the full city list and real reviews grouped by city. Do not add
  near-identical "plumber in {city}" pages: Google treats them as doorway pages (spam).
- **Coverage map**: `src/content/bay-map.ts`, generated from U.S. Census coastline data. See `scripts/bay-map/`.

### After every production deploy

```bash
npm run indexnow   # pings Bing, Yandex, Seznam, Naver, Yep (shared with Internet Archive and Amazonbot)
```

The script checks that the key file (`public/<key>.txt`) is live before submitting.

### Google (needs the owner's Google account)

Google no longer accepts sitemap pings; use Search Console:

1. https://search.google.com/search-console > Add property > URL prefix `https://www.abs-plumbingservices.com/`.
2. Verify with the HTML tag: put the token in `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` on Vercel and redeploy
   (or verify the domain with a DNS TXT record).
3. Sitemaps > submit `sitemap.xml`. Then URL Inspection > Request indexing for the home page and service pages.
4. In Bing Webmaster Tools, "Import from Google Search Console" adds the site in one step.

Also keep the Google Business Profile consistent with the site: same name, phone, hours and website URL.
