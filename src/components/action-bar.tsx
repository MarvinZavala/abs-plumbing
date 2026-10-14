import { ClipboardList, MessageSquareText, Phone } from 'lucide-react';
import { business, telHref } from '@/content/business';
import { smsWithBody } from './cta';
import { TrackedLink } from './tracked-link';

/**
 * Thumb-reach actions for phones. It slides in after the hero call button scrolls away
 * (CSS scroll-driven animation); browsers without that feature just show it all the time.
 */
export function ActionBar() {
  const item =
    'flex flex-1 flex-col items-center justify-center gap-1 rounded-control font-display text-[1.05rem] font-semibold leading-none text-ink active:translate-y-px';
  return (
    <>
      <div className="h-[calc(4.5rem+env(safe-area-inset-bottom))] lg:hidden" aria-hidden="true" />
      <nav
        aria-label="Contact AB’s Plumbing"
        className="action-bar-reveal fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white px-2 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_20px_-12px_rgb(10_34_57/0.35)] lg:hidden"
      >
        <div className="flex h-14 gap-2">
          <TrackedLink
            href={telHref}
            event="call_click"
            placement="action-bar"
            className={`${item} flex-[1.5] flex-row gap-2 bg-action text-[1.25rem] font-bold`}
          >
            <Phone className="size-5" strokeWidth={2.5} aria-hidden="true" />
            Call now
          </TrackedLink>
          {business.acceptsTexts && (
            <TrackedLink href={smsWithBody} event="text_click" placement="action-bar" className={`${item} bg-concrete`}>
              <MessageSquareText className="size-5" aria-hidden="true" />
              Text us
            </TrackedLink>
          )}
          <TrackedLink href="#estimate" event="estimate_click" placement="action-bar" className={`${item} bg-concrete`}>
            <ClipboardList className="size-5" aria-hidden="true" />
            Estimate
          </TrackedLink>
        </div>
      </nav>
    </>
  );
}
