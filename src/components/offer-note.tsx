import Link from 'next/link';
import { business } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import { cn } from '@/lib/utils';

/** The new-customer offer under a hero's buttons, linking to every offer running. */
export function OfferNote({ locale = 'en', className }: { locale?: Locale; className?: string }) {
  if (!business.offer.enabled) return null;
  const copy = t(locale);
  return (
    <p className={cn('text-[0.95rem] text-mute', className)}>
      {copy.offerDetail}{' '}
      <Link href={copy.offersHref} className="font-medium text-blue underline underline-offset-4">
        {copy.seeOffers}
      </Link>
    </p>
  );
}
