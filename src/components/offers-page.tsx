import { CalendarClock, ClipboardList, ReceiptText } from 'lucide-react';
import type { Locale } from '@/content/i18n';
import fallFlyer from '@/assets/offers/fall-specials-flyer.png';
import { activeOffers, campaign, isRunning, offerTerms } from '@/content/offers';
import { breadcrumbJsonLd } from '@/lib/structured-data';
import { CallButton } from './cta';
import { EstimateSection } from './estimate-section';
import { JsonLd } from './json-ld';
import { OfferCoupon } from './offer-coupon';
import { OfferFlyer } from './offer-flyer';
import { PageHero } from './page-hero';
import { ReviewsSection } from './reviews-section';

const copy = {
  en: {
    path: '/offers',
    crumbs: [{ name: 'Home', path: '/' }],
    crumb: 'Offers',
    title: 'Plumbing offers and discounts',
    lead: 'Savings on real plumbing work across the Bay Area, from the same crew that’s open 24/7. Mention the offer when you call and we’ll apply it to your job.',
    listTitle: 'Offers running now',
    none: 'No special offers are running right now.',
    noneDetail: 'Estimates are still free, and you get the price before any work starts.',
    alwaysTitle: 'On every job, no coupon needed',
    always: [
      { icon: ClipboardList, title: 'Free estimates', body: 'Tell us what’s wrong and we’ll tell you what it takes to fix it.' },
      { icon: ReceiptText, title: 'The price before the work', body: 'We explain the fix and what it costs before any work starts. No hidden fees.' },
      { icon: CalendarClock, title: 'Open 24 hours, 7 days', body: 'Day or night, weekends included. Call and our crew picks up.' },
    ],
    reviewsTitle: 'Fair prices, in our customers’ words',
  },
  es: {
    path: '/es/ofertas',
    crumbs: [{ name: 'Inicio', path: '/es' }],
    crumb: 'Ofertas',
    title: 'Ofertas y descuentos de plomería',
    lead: 'Ahorre en trabajos de plomería en toda la Bahía, con el mismo equipo que atiende 24/7. Mencione la oferta cuando llame y se la aplicamos a su trabajo.',
    listTitle: 'Ofertas vigentes',
    none: 'Ahora mismo no tenemos ofertas especiales.',
    noneDetail: 'La cotización sigue siendo gratis, y usted conoce el precio antes de que empecemos.',
    alwaysTitle: 'En todos los trabajos, sin cupón',
    always: [
      { icon: ClipboardList, title: 'Cotización gratis', body: 'Díganos qué pasa y le decimos qué se necesita para repararlo.' },
      { icon: ReceiptText, title: 'El precio antes del trabajo', body: 'Le explicamos la reparación y cuánto cuesta antes de empezar cualquier trabajo. Sin cargos ocultos.' },
      { icon: CalendarClock, title: 'Abierto 24 horas, 7 días', body: 'De día o de noche, también los fines de semana. Llame y nuestro equipo contesta.' },
    ],
    reviewsTitle: 'Precios justos, en palabras de nuestros clientes',
  },
} satisfies Record<Locale, unknown>;

/** The flyer for each campaign, with the box of its "Call to claim" button in percent of the image. */
const flyers = {
  'fall-specials': {
    image: fallFlyer,
    alt: {
      en: 'AB’s Plumbing fall plumbing specials, save up to $150: $35 off any plumbing service of $250 or more, $75 off any plumbing service of $500 or more, $150 off any plumbing service of $1,000 or more, and $125 off a new water heater installation. Call to claim your offer.',
      es: 'Especiales de otoño de AB’s Plumbing, ahorre hasta $150: $35 de descuento en servicios de $250 o más, $75 en servicios de $500 o más, $150 en servicios de $1,000 o más y $125 en la instalación de un calentador de agua nuevo. Llame para usar su oferta.',
    },
    button: { left: 2.3, top: 69.2, width: 36.8, height: 8.8 },
  },
};

/** Reviews that talk about price and value. */
const reviewIds = ['robert-w', 'cheryl-r', 'mary-s', 'jeffrey-j', 'connie-b', 'jacob-s'];

/** /offers and /es/ofertas: the offers running today (from content/offers.ts), as coupons. */
export function OffersPage({ locale = 'en' }: { locale?: Locale }) {
  const c = copy[locale];
  const now = new Date();
  const list = activeOffers(now);
  const flyer = isRunning(campaign, now) ? flyers[campaign.id as keyof typeof flyers] : undefined;
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([...c.crumbs, { name: c.crumb, path: c.path }])} />
      <PageHero title={c.title} lead={c.lead} placement="offers-hero" locale={locale} showOffer={false} />

      {flyer && (
        <section aria-label={campaign.heading[locale]} className="bg-white">
          <div className="wrap pb-12 lg:pb-16">
            <OfferFlyer image={flyer.image} alt={flyer.alt[locale]} button={flyer.button} locale={locale} />
          </div>
        </section>
      )}

      <section aria-labelledby="offers-title" className="bg-concrete">
        <div className="wrap py-14 lg:py-20">
          <h2 id="offers-title" className="type-h2">
            {flyer ? campaign.heading[locale] : c.listTitle}
          </h2>
          {list.length > 0 ? (
            <>
              <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {list.map((offer) => (
                  <OfferCoupon key={offer.id} offer={offer} locale={locale} />
                ))}
              </div>
              <p className="measure mt-8 text-[0.95rem] text-mute">{offerTerms.map((term) => term[locale]).join(' ')}</p>
            </>
          ) : (
            <div className="measure mt-8 rounded-plate bg-white p-6 sm:p-8">
              <p className="type-h3">{c.none}</p>
              <p className="mt-2">{c.noneDetail}</p>
              <CallButton placement="offers-none" locale={locale} className="mt-6 w-full sm:w-auto" />
            </div>
          )}
        </div>
      </section>

      <section aria-labelledby="always-title" className="bg-white">
        <div className="wrap py-14 lg:py-20">
          <h2 id="always-title" className="type-h2">
            {c.alwaysTitle}
          </h2>
          <ul className="mt-8 grid gap-8 md:grid-cols-3">
            {c.always.map(({ icon: Icon, title, body }) => (
              <li key={title} className="border-t-4 border-ink pt-5">
                <Icon className="size-7 text-blue" aria-hidden="true" />
                <h3 className="type-h3 mt-3">{title}</h3>
                <p className="mt-2">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ReviewsSection ids={reviewIds} locale={locale} title={c.reviewsTitle} />
      <EstimateSection locale={locale} />
    </>
  );
}
