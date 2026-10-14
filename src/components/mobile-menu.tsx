'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import type { Locale } from '@/content/i18n';
import { LanguageLink } from './language-link';

type Item = { href: string; label: string };

export function MobileMenu({
  nav,
  services,
  language,
  labels,
}: {
  nav: Item[];
  services: Item[];
  /** The other language, e.g. { locale: 'es', label: 'Español' }. */
  language: { locale: Locale; label: string };
  labels: { open: string; close: string; nav: string; services: string };
}) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const pathname = usePathname();
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 items-center justify-center rounded-button border-2 border-ink text-ink"
      >
        {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        <span className="sr-only">{open ? labels.close : labels.open}</span>
      </button>

      <div
        id={panelId}
        hidden={!open}
        className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-white shadow-[0_12px_24px_-12px_rgb(10_34_57/0.35)]"
      >
        {/* Close on any link, including same-page anchors (/es#servicios) where the route doesn't change. */}
        <nav
          aria-label={labels.nav}
          className="wrap py-3"
          onClick={(e) => {
            if ((e.target as HTMLElement).closest('a')) setOpen(false);
          }}
        >
          <ul className="divide-y divide-line">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? 'page' : undefined}
                  className="flex min-h-13 items-center font-display text-[1.45rem] font-semibold text-ink aria-[current=page]:text-blue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <LanguageLink
                to={language.locale}
                placement="mobile-menu"
                className="flex min-h-13 items-center font-display text-[1.45rem] font-semibold text-blue"
              >
                {language.label}
              </LanguageLink>
            </li>
          </ul>
          <p className="mt-5 text-[0.9rem] font-semibold text-mute">{labels.services}</p>
          <ul className="mt-1 grid grid-cols-2 gap-x-4">
            {services.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="flex min-h-11 items-center py-1 text-[1rem] text-ink underline decoration-line underline-offset-4"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
