'use client';

import { usePathname } from 'next/navigation';
import type { Locale } from '@/content/i18n';
import { alternatePath } from '@/lib/i18n-routes';
import { rememberLanguage } from '@/lib/language-preference';
import { track } from '@/lib/track';

/**
 * Link to this same page in the other language, or to that language's home page when there is no twin.
 * A plain <a>: each language has its own root layout, so switching is a full page load anyway.
 */
export function LanguageLink({
  to,
  placement,
  className,
  children,
}: {
  to: Locale;
  placement: string;
  className?: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? '/';
  const href = alternatePath(pathname, to) ?? (to === 'es' ? '/es' : '/');
  return (
    <a
      href={href}
      hrefLang={to}
      lang={to}
      className={className}
      onClick={() => {
        rememberLanguage(to);
        track('language_switch', { to, placement });
      }}
    >
      {children}
    </a>
  );
}
