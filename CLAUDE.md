# CLAUDE.md

Guidance for Claude Code when working in this repository.

## Project

Website and Google Ads landing pages for AB’s Plumbing Services, a family-owned 24/7 plumbing crew based in Oakland, CA. Say "Oakland", never the neighborhood.
Visitors are mostly on phones, often mid-emergency, arriving from Google Ads. The site’s job is to get a call, a text or an estimate request fast.
The brand is the crew (AB’s), not one person.

Next.js 15 App Router, React 19, TypeScript strict, Tailwind CSS v4. Every page is statically generated.

## Commands

```bash
npm run dev         # dev server (Turbopack)
npm test            # node --test tests/*.test.ts (lead form logic)
npm run typecheck   # tsc --noEmit
npm run lint
npm run build
```

## Architecture

- English pages live in `src/app/(site)/`, Spanish pages in `src/app/es/`. Each has its own root layout (via `RootDocument`) so `<html lang>` is right; the site-wide 404 is `src/app/global-not-found.tsx` (`experimental.globalNotFound`).
- `src/content/` is the single source of truth for copy and facts: `business.ts` (phone, hours, license, offer, Yelp snapshot), `services.ts` (each service is a landing page at `/services/[slug]`), `offers.ts` (offers on `/offers` and `/es/ofertas`, with optional start/end dates; only real offers, terms word for word from the client), `reviews.ts` (verbatim Yelp quotes), `work.ts` (job photos), `areas.ts`, `faqs.ts`, `process.ts`.
- `src/lib/lead.ts`: estimate form validation, spam checks (hidden `ab_check` field + minimum fill time), email formatting and delivery (Resend REST API and/or a JSON webhook). Pure TypeScript with no Next imports so `node --test` can run it. `src/lib/submit-lead.ts` is the Server Action wrapper.
- `src/lib/track.ts`: dataLayer events (`call_click`, `text_click`, `estimate_click`, `lead_submit`, `language_switch`, `yelp_click`), optional gtag conversions, gclid/UTM capture.
- `src/components/`: server components by default. Client components only where needed: `estimate-form`, `mobile-menu`, `tracked-link`, `attribution-capture`, `language-link`, `language-suggestion`, `offer-popup`.
- Spanish: copy in `src/content/es.ts` (services, FAQ, steps), URLs in `es-slugs.ts`, shared UI strings in `i18n.ts`, form strings in `form-ui.ts`. Components take a `locale` prop. `src/lib/i18n-routes.ts` pairs English and Spanish twins (hreflang, sitemap, language links). Never redirect by language; `language-preference.ts` only suggests Spanish.
- Configuration is via environment variables, documented in `.env.example`.

## Design system (see `src/app/globals.css`)

- Palette (all from the logo): ink `#0a2239`, slate body text, deep logo blue `#0670b8` for links/focus, logo water blue `#149ad6` reserved for actions (`bg-action`, ink text on it, hover to logo cyan `#00b6d6`), gold `#f2a900` only for rating stars, concrete `#edf0f2` bands. Default Tailwind colors are disabled.
- Type: Barlow Condensed (display, `type-hero`, `type-page`, `type-h2`, `type-h3`) and Barlow (text). Sentence case. No all-caps eyebrows, no middle-dot meta strings, no arrows appended to button text.
- Layout: left-aligned, full-bleed bands alternating white / concrete / ink. Place names use the street-sign `PlacePlate`.
- Motion: only the open-now status dot, the mobile action bar reveal and the offer pop-up slide-in. Content is never hidden behind entrance animations.
- The offer pop-up (`offer-popup.tsx`) is a small corner card, never a full-screen overlay (Google penalizes intrusive mobile pop-ups). It shows only while `campaign` in `offers.ts` is running.

## Rules for content

- Every claim must be true: facts from `business.ts`, or real customer words with name, city and date.
- Review quotes are verbatim; trim only at sentence boundaries and mark skipped sentences with an ellipsis. They are never translated: Spanish pages show them in English, marked `lang="en"`.
- Spanish copy uses "usted" and Bay Area vocabulary (llave, fregadero, regadera, coladera, boiler). Keep facts identical to the English pages.
- Photo captions describe only what is visible; name a place only if it is readable in the photo.
- The CSLB license number stays `null` until the client confirms it; never show a placeholder.
- Yelp branding (yelp.com/brand, rules for businesses): only Yelp's official favicon (`src/assets/brand/yelp-favicon.svg`), as a link to the Yelp page, or the "Find us on Yelp" logo. Never the standalone Yelp logo, a home-made Yelp graphic, or Yelp's red star images; rating stars stay our gold ones.

## SEO and AI visibility

- `src/lib/structured-data.ts` (JSON-LD), `src/lib/llms.ts` (/llms.txt, /llms-full.txt), `src/lib/indexnow.ts` + `npm run indexnow`; all covered by `tests/seo.test.ts`.
- Canonical domain is `business.website` (https://www.abs-plumbingservices.com); override with `NEXT_PUBLIC_SITE_URL`.
- Never add per-city doorway pages; city relevance comes from `/service-areas` (full list + real reviews by city).
- The coverage map (`src/content/bay-map.ts`) is generated from U.S. Census coastlines and city points, with a dot per city in `areas.ts` and precomputed label positions. Rerun `scripts/bay-map/build-map.mjs` after changing `areas.ts` (tests fail if a city is missing from the map).
