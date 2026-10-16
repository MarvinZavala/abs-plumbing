'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Phone, X } from 'lucide-react';
import { business, telHref } from '@/content/business';
import { campaign, isRunning } from '@/content/offers';
import { track } from '@/lib/track';
import { cn } from '@/lib/utils';
import { TrackedLink } from './tracked-link';

const STORAGE_KEY = 'ab-offer-popup';
/** After closing it, the card stays away this long. */
const QUIET_DAYS = 3;
/** It shows after this much scrolling (in screen heights) or this many seconds, whichever comes first. */
const SCROLL_SCREENS = 0.6;
const DELAY_MS = 12000;

const copy = {
  en: { href: '/offers', label: 'Current offers', call: 'Call to claim', see: 'See all offers', close: 'Close' },
  es: { href: '/es/ofertas', label: 'Ofertas vigentes', call: 'Llamar', see: 'Ver las ofertas', close: 'Cerrar' },
};

function closedRecently(): boolean {
  try {
    const closedAt = Number(localStorage.getItem(STORAGE_KEY));
    return closedAt > 0 && Date.now() - closedAt < QUIET_DAYS * 86_400_000;
  } catch {
    return false;
  }
}

function rememberClosed() {
  try {
    localStorage.setItem(STORAGE_KEY, String(Date.now()));
  } catch {
    // Private mode: the card just comes back on the next visit.
  }
}

/**
 * A small card announcing the running offers, in a corner on desktop and above the call bar on phones.
 * It never covers the page (Google penalizes intrusive pop-ups on mobile), doesn't take focus, and stays
 * closed for a few days once dismissed. Not shown on the offers page itself or the privacy policy.
 */
export function OfferPopup({ locale = 'en' }: { locale?: 'en' | 'es' }) {
  const c = copy[locale];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (pathname === c.href || pathname === '/privacy') return;
    if (!isRunning(campaign, new Date()) || closedRecently()) return;
    const show = () => {
      setOpen(true);
      cleanup();
    };
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * SCROLL_SCREENS) show();
    };
    const timer = window.setTimeout(show, DELAY_MS);
    window.addEventListener('scroll', onScroll, { passive: true });
    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    }
    return cleanup;
  }, [pathname, c.href]);

  // Mount first, then slide in on the next frame so the transition runs.
  useEffect(() => {
    if (!open) return;
    const frame = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(frame);
  }, [open]);

  if (!open) return null;

  const close = () => {
    rememberClosed();
    setOpen(false);
    setShown(false);
  };

  return (
    <aside
      aria-label={c.label}
      onKeyDown={(e) => e.key === 'Escape' && close()}
      className={cn(
        'fixed inset-x-3 bottom-[calc(5.25rem+env(safe-area-inset-bottom))] z-30 rounded-plate bg-ink p-1.5 text-white shadow-[0_18px_40px_-12px_rgb(10_34_57/0.6)] transition-[opacity,translate] duration-300 motion-reduce:transition-none sm:left-auto sm:w-[23rem] lg:right-6 lg:bottom-6',
        shown ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
      )}
    >
      <div className="rounded-[4px] border-2 border-dashed border-cyan/60 p-4 pr-12">
        <p className="font-display text-[1.45rem] font-bold leading-tight">{campaign.heading[locale]}</p>
        <p className="mt-1.5 text-[0.98rem] text-white/85">{campaign.teaser[locale]}</p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
          <TrackedLink
            href={telHref}
            event="call_click"
            placement="offer-popup"
            className="inline-flex h-11 items-center gap-2 rounded-button bg-action px-4 font-display text-[1.1rem] font-bold text-ink hover:bg-action-hover"
          >
            <Phone className="size-4.5" strokeWidth={2.5} aria-hidden="true" />
            {c.call}
            <span className="sr-only"> {business.phone.display}</span>
          </TrackedLink>
          <Link
            href={c.href}
            onClick={() => {
              track('offer_click', { placement: 'offer-popup' });
              rememberClosed();
            }}
            className="inline-flex min-h-11 items-center font-semibold text-white underline underline-offset-4"
          >
            {c.see}
          </Link>
        </div>
      </div>
      <button
        type="button"
        onClick={close}
        className="absolute top-2 right-2 inline-flex size-11 items-center justify-center rounded-button text-white/80 hover:bg-white/10 hover:text-white"
      >
        <X className="size-5" aria-hidden="true" />
        <span className="sr-only">{c.close}</span>
      </button>
    </aside>
  );
}
