import Image, { type StaticImageData } from 'next/image';
import { business, telHref } from '@/content/business';
import type { Locale } from '@/content/i18n';
import { TrackedLink } from './tracked-link';

const copy = {
  en: {
    label: `Call ${business.phone.display} to claim your offer`,
    hint: 'Tap the flyer to call and claim your offer.',
  },
  es: {
    label: `Llame al ${business.phone.display} para usar su oferta`,
    hint: 'Toque el volante para llamar y usar su oferta.',
  },
};

/**
 * The client's flyer, as one big call link: the whole image dials the phone, and the "Call to claim your offer"
 * button drawn on it lights up on hover. `button` is that button's box, in percent of the image.
 */
export function OfferFlyer({
  image,
  alt,
  button,
  locale = 'en',
}: {
  image: StaticImageData;
  alt: string;
  button: { left: number; top: number; width: number; height: number };
  locale?: Locale;
}) {
  const c = copy[locale];
  return (
    <figure>
      <TrackedLink
        href={telHref}
        event="call_click"
        placement="offers-flyer"
        aria-label={c.label}
        className="group relative block overflow-hidden rounded-plate shadow-[0_18px_40px_-20px_rgb(10_34_57/0.45)] outline-offset-4"
      >
        <Image
          src={image}
          alt={alt}
          priority
          placeholder="blur"
          sizes="(min-width: 1280px) 1216px, calc(100vw - 2rem)"
          className="h-auto w-full"
        />
        <span
          aria-hidden="true"
          className="absolute rounded-[0.6rem] ring-cyan transition-shadow group-hover:ring-4 group-focus-visible:ring-4"
          style={{ left: `${button.left}%`, top: `${button.top}%`, width: `${button.width}%`, height: `${button.height}%` }}
        />
      </TrackedLink>
      <figcaption className="mt-3 text-[0.95rem] text-mute">{c.hint}</figcaption>
    </figure>
  );
}
