import type { Metadata, Viewport } from 'next';
import { business } from '@/content/business';
import type { Locale } from '@/content/i18n';
import { siteUrl } from '@/lib/site';

const titles: Record<Locale, string> = {
  en: `24/7 Plumber in the San Francisco Bay Area${business.titleSuffix}`,
  es: `Plomero 24/7 en la Bahía de San Francisco${business.titleSuffix}`,
};

const descriptions: Record<Locale, string> = {
  en: `Family-owned plumbers open 24/7 across the San Francisco Bay Area: leaks, clogs, water heaters and sewer lines. ${business.yelp.rating} stars on Yelp. Call ${business.phone.display}.`,
  es: `Empresa familiar de plomería abierta 24/7 en toda el Área de la Bahía de San Francisco: fugas, drenajes tapados, calentadores de agua y líneas de drenaje. Hablamos español. Llame al ${business.phone.display}.`,
};

/** Defaults for every page in one language. Each page sets its own canonical URL (and hreflang when it has a twin). */
export function rootMetadata(locale: Locale): Metadata {
  return {
    metadataBase: siteUrl(),
    title: { default: titles[locale], template: `%s${business.titleSuffix}` },
    description: descriptions[locale],
    openGraph: {
      type: 'website',
      siteName: business.name,
      locale: locale === 'es' ? 'es_US' : 'en_US',
    },
    // Search Console / Bing Webmaster verification tokens, set in Vercel when the properties are created.
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined,
      other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
        ? { 'msvalidate.01': process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
        : undefined,
    },
  };
}

export const rootViewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#ffffff',
};
