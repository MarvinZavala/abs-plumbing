import { ClipboardList, MessageSquareText, Phone } from 'lucide-react';
import { business, smsHref, telHref } from '@/content/business';
import { t, type Locale } from '@/content/i18n';
import { cn } from '@/lib/utils';
import { TrackedLink } from './tracked-link';

/** sms: link with the greeting typed in the visitor's language. */
export const smsWithBody = (locale: Locale = 'en') => `${smsHref}?&body=${encodeURIComponent(t(locale).smsBody)}`;

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-button font-display font-bold leading-none transition-[background-color,transform] active:translate-y-px';

export const buttonStyles = {
  call: cn(base, 'h-15 bg-action px-6 text-[1.375rem] text-ink hover:bg-action-hover'),
  // Tighter on narrow phones (360px) so "Free estimate" / "Cotizar gratis" stay on one line.
  secondary: cn(base, 'h-13 gap-2 border-2 border-ink bg-white px-3 text-[1.1rem] text-ink hover:bg-concrete sm:gap-2.5 sm:px-4 sm:text-[1.2rem]'),
  secondaryOnDark: cn(base, 'h-13 gap-2 border-2 border-white/90 px-3 text-[1.1rem] text-white hover:bg-white/10 sm:gap-2.5 sm:px-4 sm:text-[1.2rem]'),
};

export function CallButton({
  placement,
  locale = 'en',
  className,
  id,
}: {
  placement: string;
  locale?: Locale;
  className?: string;
  id?: string;
}) {
  const [before] = t(locale).call(business.phone.display).split(business.phone.display);
  return (
    <TrackedLink id={id} href={telHref} event="call_click" placement={placement} className={cn(buttonStyles.call, className)}>
      <Phone className="size-6" strokeWidth={2.5} aria-hidden="true" />
      <span>
        {before}
        <span className="whitespace-nowrap">{business.phone.display}</span>
      </span>
    </TrackedLink>
  );
}

/** Call + text + estimate. The call button is always the loudest thing in the group. */
export function CtaGroup({
  placement,
  locale = 'en',
  estimateHref = `#${t(locale).estimateAnchor}`,
  tone = 'light',
  className,
}: {
  placement: string;
  locale?: Locale;
  estimateHref?: string;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const copy = t(locale);
  const secondary = tone === 'dark' ? buttonStyles.secondaryOnDark : buttonStyles.secondary;
  return (
    <div className={cn('grid gap-3 sm:flex sm:flex-wrap sm:items-center', className)}>
      <CallButton placement={placement} locale={locale} className="w-full sm:w-auto" />
      <div className="grid grid-cols-2 gap-3 sm:flex">
        {business.acceptsTexts && (
          <TrackedLink href={smsWithBody(locale)} event="text_click" placement={placement} className={secondary}>
            <MessageSquareText className="size-5" aria-hidden="true" />
            {copy.textPhoto}
          </TrackedLink>
        )}
        <TrackedLink
          href={estimateHref}
          event="estimate_click"
          placement={placement}
          className={cn(secondary, !business.acceptsTexts && 'col-span-2')}
        >
          <ClipboardList className="size-5" aria-hidden="true" />
          {copy.freeEstimate}
        </TrackedLink>
      </div>
    </div>
  );
}
