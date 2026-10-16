import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import logo from '@/assets/brand/ab-logo.png';
import { business, telHref } from '@/content/business';
import { servicesEs } from '@/content/es';
import { t, type Locale } from '@/content/i18n';
import { coreServices } from '@/content/service-groups';
import { services } from '@/content/services';
import { buttonStyles } from './cta';
import { LanguageLink } from './language-link';
import { MobileMenu } from './mobile-menu';
import { TrackedLink } from './tracked-link';
import { cn } from '@/lib/utils';

/** Service links for the menu and footer: the six core services, then a link to all of them. */
export function serviceLinks(locale: Locale) {
  const core = coreServices.map((slug) =>
    locale === 'es'
      ? { href: `/es/servicios/${servicesEs.find((s) => s.slug === slug)!.slugEs}`, label: servicesEs.find((s) => s.slug === slug)!.name }
      : { href: `/services/${slug}`, label: services.find((s) => s.slug === slug)!.name },
  );
  const all =
    locale === 'es'
      ? { href: '/es/servicios', label: `Ver los ${services.length} servicios` }
      : { href: '/services', label: `All ${services.length} services` };
  return [...core, all];
}

export function SiteHeader({ locale = 'en' }: { locale?: Locale }) {
  const copy = t(locale);
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-3 lg:h-20">
        <Link href={copy.homeHref} className="flex shrink-0 items-center gap-2.5 rounded-md">
          <Image src={logo} alt="" priority className="h-11 w-auto lg:h-14" sizes="64px" />
          <span className="flex flex-col gap-1 leading-none">
            <span className="font-display text-[1.5rem] font-bold text-ink lg:text-[1.7rem]">AB’s Plumbing</span>
            <span className="text-[0.8rem] font-medium text-mute">{copy.tagline}</span>
          </span>
        </Link>

        <nav aria-label={copy.mainNavLabel} className="hidden lg:block">
          <ul className="flex items-center gap-6 xl:gap-7">
            {copy.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium text-ink decoration-2 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-l border-line pl-6 xl:pl-7">
              <LanguageLink
                to={copy.otherLanguage.locale}
                placement="header"
                className="font-medium text-blue underline decoration-2 underline-offset-4"
              >
                {copy.otherLanguage.label}
              </LanguageLink>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <TrackedLink
            href={telHref}
            event="call_click"
            placement="header"
            className={cn(buttonStyles.call, 'hidden h-12 px-5 text-[1.2rem] lg:inline-flex')}
          >
            <Phone className="size-5" strokeWidth={2.5} aria-hidden="true" />
            {business.phone.display}
          </TrackedLink>
          <TrackedLink
            href={telHref}
            event="call_click"
            placement="header"
            aria-label={copy.call(business.phone.display)}
            className="inline-flex size-11 items-center justify-center rounded-button bg-action text-ink active:translate-y-px lg:hidden"
          >
            <Phone className="size-5" strokeWidth={2.5} aria-hidden="true" />
          </TrackedLink>
          <MobileMenu
            nav={copy.nav}
            services={serviceLinks(locale)}
            language={copy.otherLanguage}
            yelp={{
              href: business.yelp.url,
              label: copy.yelpMenuLabel,
              detail: copy.yelpMenuDetail(business.yelp.rating, business.yelp.reviewCount),
              newTab: copy.opensNewTab,
            }}
            labels={{ open: copy.openMenu, close: copy.closeMenu, nav: copy.mobileNavLabel, services: copy.whatWeFix }}
          />
        </div>
      </div>
    </header>
  );
}
