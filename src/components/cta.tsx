import { ClipboardList, MessageSquareText, Phone } from 'lucide-react';
import { business, smsHref, telHref } from '@/content/business';
import { cn } from '@/lib/utils';
import { TrackedLink } from './tracked-link';

const smsWithBody = `${smsHref}?&body=${encodeURIComponent('Hi AB’s Plumbing, I need help with ')}`;

const base =
  'inline-flex items-center justify-center gap-2.5 rounded-button font-display font-bold leading-none transition-[background-color,transform] active:translate-y-px';

export const buttonStyles = {
  call: cn(base, 'h-15 bg-action px-6 text-[1.375rem] text-ink hover:bg-action-hover'),
  secondary: cn(base, 'h-13 border-2 border-ink bg-white px-4 text-[1.2rem] text-ink hover:bg-concrete'),
  secondaryOnDark: cn(base, 'h-13 border-2 border-white/90 px-4 text-[1.2rem] text-white hover:bg-white/10'),
};

export function CallButton({ placement, className, id }: { placement: string; className?: string; id?: string }) {
  return (
    <TrackedLink id={id} href={telHref} event="call_click" placement={placement} className={cn(buttonStyles.call, className)}>
      <Phone className="size-6" strokeWidth={2.5} aria-hidden="true" />
      <span>
        Call <span className="whitespace-nowrap">{business.phone.display}</span>
      </span>
    </TrackedLink>
  );
}

/** Call + text + estimate. The call button is always the loudest thing in the group. */
export function CtaGroup({
  placement,
  estimateHref = '#estimate',
  tone = 'light',
  className,
}: {
  placement: string;
  estimateHref?: string;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  const secondary = tone === 'dark' ? buttonStyles.secondaryOnDark : buttonStyles.secondary;
  return (
    <div className={cn('grid gap-3 sm:flex sm:flex-wrap sm:items-center', className)}>
      <CallButton placement={placement} className="w-full sm:w-auto" />
      <div className="grid grid-cols-2 gap-3 sm:flex">
        {business.acceptsTexts && (
          <TrackedLink href={smsWithBody} event="text_click" placement={placement} className={secondary}>
            <MessageSquareText className="size-5" aria-hidden="true" />
            Text a photo
          </TrackedLink>
        )}
        <TrackedLink
          href={estimateHref}
          event="estimate_click"
          placement={placement}
          className={cn(secondary, !business.acceptsTexts && 'col-span-2')}
        >
          <ClipboardList className="size-5" aria-hidden="true" />
          Free estimate
        </TrackedLink>
      </div>
    </div>
  );
}

export { smsWithBody };
