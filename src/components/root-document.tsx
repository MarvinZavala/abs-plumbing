import type { Locale } from '@/content/i18n';
import { barlow, barlowCondensed } from '@/lib/fonts';
import { suggestSpanishScript } from '@/lib/language-preference';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { Analytics } from './analytics';
import { AttributionCapture } from './attribution-capture';
import { SiteJsonLd } from './json-ld';

/**
 * <html> and <body> shared by both root layouts. English and Spanish each have their own root layout
 * so that <html lang> is right for screen readers, browser translation and search engines.
 */
export function RootDocument({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    // The inline script may flag <html> before React hydrates; that difference is expected.
    <html lang={locale} className={`${barlow.variable} ${barlowCondensed.variable}`} suppressHydrationWarning>
      <body>
        {/* First thing in <body>, so it runs before anything is painted. */}
        {locale === 'en' && <script dangerouslySetInnerHTML={{ __html: suggestSpanishScript }} />}
        {children}
        <SiteJsonLd />
        <link rel="describedby" type="text/markdown" href="/llms.txt" />
        <AttributionCapture />
        <Analytics />
        <VercelAnalytics />
      </body>
    </html>
  );
}
