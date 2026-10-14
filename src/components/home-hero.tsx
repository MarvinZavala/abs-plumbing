import Image from 'next/image';
import { business } from '@/content/business';
import { photoById } from '@/content/work';
import { OpenStatus, RatingLine } from './bits';
import { CtaGroup } from './cta';

export function HomeHero() {
  // The sharpest, most striking real job photo: copper manifold with brand-blue clamps.
  const photo = photoById('commercial-water-heaters-copper');
  return (
    <section className="bg-white">
      <div className="wrap grid gap-8 pt-6 pb-10 lg:grid-cols-12 lg:gap-12 lg:pt-14 lg:pb-16">
        <div className="lg:col-span-7 lg:self-center">
          <OpenStatus />
          <h1 className="type-hero mt-4">Plumbing problem? Our crew picks up 24/7.</h1>
          <p className="type-lead measure mt-5">
            Leaks, clogs, water heaters and sewer lines across the Bay Area. Licensed, insured and based in Oakland.
          </p>
          <RatingLine className="mt-5" />
          <CtaGroup placement="hero" className="mt-7" />
          {business.offer.enabled && <p className="mt-4 text-[0.95rem] text-mute">{business.offer.detail}</p>}
        </div>
        <figure className="lg:col-span-5 lg:self-center">
          <Image
            src={photo.image}
            alt={photo.alt}
            priority
            placeholder="blur"
            sizes="(min-width: 1280px) 480px, (min-width: 1024px) 38vw, 100vw"
            className="aspect-[4/3] w-full rounded-[4px] object-cover object-[50%_38%] lg:aspect-[4/5] lg:object-[50%_30%]"
          />
          <figcaption className="mt-2 text-[0.88rem] text-mute">{photo.caption}, from one of our jobs.</figcaption>
        </figure>
      </div>
    </section>
  );
}
