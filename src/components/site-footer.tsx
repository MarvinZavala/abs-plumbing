import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/brand/ab-logo.png';
import { business, telHref } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import { LanguageLink } from './language-link';
import { serviceLinks } from './site-header';
import { TrackedLink } from './tracked-link';

export function SiteFooter({ locale = 'en' }: { locale?: Locale }) {
  const copy = t(locale);
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-white/80">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.3fr_1fr_1fr] lg:py-16">
        <div>
          <div className="flex items-center gap-3">
            <Image src={logo} alt="" className="h-14 w-auto rounded-md bg-white p-1" sizes="64px" />
            <div>
              <p className="font-display text-[1.6rem] font-bold leading-none text-white">{business.name}</p>
              <p className="mt-1 text-[0.95rem]">
                {copy.footerAbout}
                {locale === 'en' && <span lang="es"> Hablamos español.</span>}
              </p>
            </div>
          </div>
          <TrackedLink
            href={telHref}
            event="call_click"
            placement="footer"
            className="mt-6 inline-block font-display text-[2.2rem] font-bold leading-none text-white underline decoration-action decoration-[3px] underline-offset-[6px]"
          >
            {business.phone.display}
          </TrackedLink>
          <p className="mt-3">
            <a href={`mailto:${business.email}`} className="underline underline-offset-4 hover:text-white">
              {business.email}
            </a>
          </p>
          <p className="mt-5 max-w-sm text-[0.95rem]">
            {copy.licensed} {copy.payments}
          </p>
        </div>

        <nav aria-label={copy.footerServicesLabel}>
          <p className="font-display text-[1.25rem] font-semibold text-white">{copy.whatWeFix}</p>
          <ul className="mt-3 space-y-2">
            {serviceLinks(locale).map((s) => (
              <li key={s.href}>
                <Link href={s.href} className="hover:text-white hover:underline">
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={copy.footerCompanyLabel}>
          <p className="font-display text-[1.25rem] font-semibold text-white">AB’s Plumbing</p>
          <ul className="mt-3 space-y-2">
            {copy.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageLink to={copy.otherLanguage.locale} placement="footer" className="hover:text-white hover:underline">
                {copy.otherLanguage.label}
              </LanguageLink>
            </li>
            <li>
              <a href={business.yelp.url} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                {copy.reviewsOnYelpLink}
              </a>
            </li>
            <li>
              <Link href="/privacy" hrefLang={locale === 'es' ? 'en' : undefined} className="hover:text-white hover:underline">
                {copy.privacyPolicy}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-white/10">
        <p className="wrap py-5 text-[0.85rem] text-white/60">
          © {year} {business.name}. {copy.familyOwned}
        </p>
      </div>
    </footer>
  );
}
