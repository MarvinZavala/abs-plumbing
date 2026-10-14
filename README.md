# AB’s Plumbing Services website

Marketing site and Google Ads landing pages for AB’s Plumbing Services, a 24/7 plumbing crew based in Fruitvale, Oakland.
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
