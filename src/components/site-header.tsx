import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';
import logo from '@/assets/brand/ab-logo.png';
import { business, telHref } from '@/content/business';
import { services } from '@/content/services';
import { buttonStyles } from './cta';
import { MobileMenu } from './mobile-menu';
import { TrackedLink } from './tracked-link';
import { cn } from '@/lib/utils';

export const mainNav = [
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Our work' },
  { href: '/about', label: 'About us' },
  { href: '/service-areas', label: 'Service areas' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white">
      <div className="wrap flex h-16 items-center justify-between gap-3 lg:h-20">
        <Link href="/" className="flex shrink-0 items-center gap-2.5 rounded-md">
          <Image src={logo} alt="" priority className="h-11 w-auto lg:h-14" sizes="64px" />
          <span className="flex flex-col gap-1 leading-none">
            <span className="font-display text-[1.5rem] font-bold text-ink lg:text-[1.7rem]">AB’s Plumbing</span>
            <span className="text-[0.8rem] font-medium text-mute">Oakland, open 24/7</span>
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {mainNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-medium text-ink decoration-2 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
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
            aria-label={`Call ${business.phone.display}`}
            className="inline-flex size-11 items-center justify-center rounded-button bg-action text-ink active:translate-y-px lg:hidden"
          >
            <Phone className="size-5" strokeWidth={2.5} aria-hidden="true" />
          </TrackedLink>
          <MobileMenu nav={mainNav} services={services.map((s) => ({ href: `/services/${s.slug}`, label: s.name }))} />
        </div>
      </div>
    </header>
  );
}
