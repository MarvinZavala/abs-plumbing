import Image from 'next/image';
import { t, type Locale } from '@/content/i18n';
import { photoById } from '@/content/work';
import { OpenStatus, RatingLine } from './bits';
import { CtaGroup } from './cta';
import { CampaignFlyer } from './offer-flyer';
import { OfferNote } from './offer-note';
import { SpanishNote } from './spanish-note';

const copy = {
  en: {
    title: 'Plumbing problem? Our crew picks up 24/7.',
    lead: 'Leaks, clogs, water heaters and sewer lines across the Bay Area. Licensed, insured and based in Oakland.',
  },
  es: {
    title: '¿Problemas de plomería? Nuestro equipo contesta 24/7.',
    lead: 'Fugas, drenajes tapados, calentadores de agua y líneas de drenaje en toda el Área de la Bahía. Con licencia, con seguro y con base en Oakland. Hablamos español.',
  },
};

export function HomeHero({ locale = 'en' }: { locale?: Locale }) {
  // The sharpest, most striking real job photo: copper manifold with brand-blue clamps.
  const photo = photoById('commercial-water-heaters-copper', locale);
  const c = copy[locale];
  return (
    <section className="bg-white">
      <div className="wrap grid gap-8 pt-6 pb-10 lg:grid-cols-12 lg:gap-12 lg:pt-14 lg:pb-16">
        <div className="lg:col-span-7 lg:self-center">
          <OpenStatus locale={locale} />
          <h1 className="type-hero mt-4">{c.title}</h1>
          <p className="type-lead measure mt-5">{c.lead}</p>
          <RatingLine locale={locale} className="mt-5" />
          <CtaGroup placement="hero" locale={locale} className="mt-7" />
          <OfferNote locale={locale} className="mt-4" />
          {locale === 'en' && <SpanishNote placement="hero" className="mt-2" />}
        </div>
        {/* Phones and tablets see the offers flyer before the photo; desktops get it as a band under the hero. */}
        <CampaignFlyer locale={locale} placement="home-flyer" showDetailsLink className="lg:hidden" />
        <figure className="lg:col-span-5 lg:self-center">
          <Image
            src={photo.image}
            alt={photo.alt}
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 38vw, 100vw"
            className="aspect-[4/3] w-full rounded-[4px] object-cover object-[50%_38%] lg:aspect-[4/5] lg:object-[50%_30%]"
          />
          <figcaption className="mt-2 text-[0.88rem] text-mute">
            {photo.caption}
            {t(locale).fromOurJobs}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
