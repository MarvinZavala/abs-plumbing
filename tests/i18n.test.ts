import { test } from 'node:test';
import assert from 'node:assert/strict';
import { alternatePath } from '../src/lib/i18n-routes.ts';
import { faqsEs, servicesEs } from '../src/content/es.ts';
import { ui } from '../src/content/i18n.ts';
import { services } from '../src/content/services.ts';

test('every service has a Spanish page with its own URL-safe slug', () => {
  assert.deepEqual(
    servicesEs.map((s) => s.slug),
    services.map((s) => s.slug),
  );
  const slugs = servicesEs.map((s) => s.slugEs);
  assert.equal(new Set(slugs).size, slugs.length, 'Spanish slugs must be unique');
  for (const slug of slugs) assert.match(slug, /^[a-z0-9]+(-[a-z0-9]+)*$/);
});

test('maps the home page and each service page to its twin in the other language', () => {
  assert.equal(alternatePath('/', 'es'), '/es');
  assert.equal(alternatePath('/es', 'en'), '/');
  assert.equal(alternatePath('/services/water-heaters', 'es'), '/es/servicios/calentadores-de-agua');
  for (const s of servicesEs) {
    assert.equal(alternatePath(`/services/${s.slug}`, 'es'), `/es/servicios/${s.slugEs}`);
    assert.equal(alternatePath(`/es/servicios/${s.slugEs}`, 'en'), `/services/${s.slug}`);
  }
});

test('ignores a trailing slash', () => {
  assert.equal(alternatePath('/services/drain-cleaning/', 'es'), '/es/servicios/destape-de-drenajes');
  assert.equal(alternatePath('/es/', 'en'), '/');
});

test('pages that exist in one language only have no twin', () => {
  for (const path of ['/about', '/gallery', '/services', '/service-areas', '/privacy', '/services/unknown']) {
    assert.equal(alternatePath(path, 'es'), null, path);
  }
  assert.equal(alternatePath('/es/servicios/desconocido', 'en'), null);
});

test('the Spanish interface has every string the English one has', () => {
  assert.deepEqual(Object.keys(ui.es).sort(), Object.keys(ui.en).sort());
});

test('Spanish service pages are complete', () => {
  for (const s of servicesEs) {
    for (const text of [s.name, s.summary, s.headline, s.lead, s.seo.title, s.seo.description]) {
      assert.ok(text.trim().length > 0, `${s.slug} has an empty field`);
    }
    assert.ok(s.problems.length >= 3, `${s.slug} needs problems`);
    assert.ok(s.includes.length >= 3, `${s.slug} needs what we do`);
  }
});

test('the Spanish FAQ answers the language question first', () => {
  assert.equal(faqsEs[0].q, '¿Hablan español?');
});

test('Spanish copy names the city only, never the neighborhood', () => {
  const copy = JSON.stringify([servicesEs, faqsEs, ui.es]);
  assert.equal(copy.includes('Fruitvale'), false);
});

test('suggests Spanish to browsers set to Spanish, unless the visitor already chose English', async () => {
  const { shouldSuggestSpanish } = await import('../src/lib/language-preference.ts');
  assert.equal(shouldSuggestSpanish(null, 'es-US'), true);
  assert.equal(shouldSuggestSpanish(null, 'es-419'), true);
  assert.equal(shouldSuggestSpanish(null, 'ES'), true);
  assert.equal(shouldSuggestSpanish(null, 'en-US'), false);
  assert.equal(shouldSuggestSpanish(null, ''), false);
  assert.equal(shouldSuggestSpanish('en', 'es-MX'), false, 'dismissed or switched to English');
  assert.equal(shouldSuggestSpanish('es', 'en-US'), true, 'picked Spanish on an earlier visit');
});

test('the pre-paint script is self-contained and flags <html> for Spanish browsers', async () => {
  const { suggestSpanishScript } = await import('../src/lib/language-preference.ts');
  const attributes = new Map<string, string>();
  const run = (stored: string | null, languages: string[]) => {
    attributes.clear();
    const env = {
      localStorage: { getItem: () => stored },
      navigator: { languages, language: languages[0] },
      document: { documentElement: { setAttribute: (k: string, v: string) => attributes.set(k, v) } },
    };
    new Function('localStorage', 'navigator', 'document', suggestSpanishScript)(env.localStorage, env.navigator, env.document);
    return attributes.get('data-suggest-lang');
  };
  assert.equal(run(null, ['es-US', 'en-US']), 'es');
  assert.equal(run(null, ['en-US', 'es-US']), undefined);
  assert.equal(run('en', ['es-MX']), undefined);
});
