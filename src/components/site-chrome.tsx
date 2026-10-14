import { t, type Locale } from '@/content/i18n';
import { ActionBar } from './action-bar';
import { LanguageSuggestion } from './language-suggestion';
import { SiteFooter } from './site-footer';
import { SiteHeader } from './site-header';

/** Skip link, header, main landmark, footer and the phone action bar, in one language. */
export function SiteChrome({ locale = 'en', children }: { locale?: Locale; children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only z-50 rounded-button bg-ink px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        {t(locale).skipToContent}
      </a>
      {locale === 'en' && <LanguageSuggestion />}
      <SiteHeader locale={locale} />
      <main id="main">{children}</main>
      <SiteFooter locale={locale} />
      <ActionBar locale={locale} />
    </>
  );
}
