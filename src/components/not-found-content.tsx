import Link from 'next/link';
import type { Locale } from '@/content/i18n';
import { servicesEs } from '@/content/es';
import { services } from '@/content/services';
import { CtaGroup } from './cta';

const copy = {
  en: {
    title: 'This page doesn’t exist. Your plumbing problem does, and we can fix that.',
    pick: 'Or pick what you need',
    home: { href: '/', label: 'Home page' },
    estimateHref: '/#estimate',
    links: services.map((s) => ({ href: `/services/${s.slug}`, label: s.name })),
  },
  es: {
    title: 'Esta página no existe. Su problema de plomería sí, y lo podemos arreglar.',
    pick: 'O elija lo que necesita',
    home: { href: '/es', label: 'Página principal' },
    estimateHref: '/es#cotizacion',
    links: servicesEs.map((s) => ({ href: `/es/servicios/${s.slugEs}`, label: s.name })),
  },
};

export function NotFoundContent({ locale = 'en' }: { locale?: Locale }) {
  const c = copy[locale];
  return (
    <section className="bg-white">
      <div className="wrap py-14 lg:py-20">
        <h1 className="type-page">{c.title}</h1>
        <CtaGroup placement="not-found" locale={locale} estimateHref={c.estimateHref} className="mt-8" />
        <h2 className="type-h3 mt-12">{c.pick}</h2>
        <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {[...c.links, c.home].map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="text-blue underline underline-offset-4">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
