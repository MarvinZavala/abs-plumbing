'use client';

import { X } from 'lucide-react';
import { rememberLanguage } from '@/lib/language-preference';
import { LanguageLink } from './language-link';

/**
 * "¿Prefiere español?" bar on English pages. Hidden by default: the inline script in RootDocument shows it
 * before the first paint for browsers set to Spanish. Closing it remembers the choice.
 */
export function LanguageSuggestion() {
  return (
    <div lang="es" className="lang-suggest border-b border-line bg-bay">
      <div className="wrap flex min-h-12 items-center justify-between gap-3">
        <p className="py-2 text-[1rem] text-ink">
          ¿Prefiere español?{' '}
          <LanguageLink to="es" placement="suggestion" className="font-semibold text-blue underline underline-offset-4">
            Ver en español
          </LanguageLink>
        </p>
        <button
          type="button"
          onClick={() => {
            rememberLanguage('en');
            document.documentElement.removeAttribute('data-suggest-lang');
          }}
          className="-mr-2.5 inline-flex size-11 shrink-0 items-center justify-center rounded-button text-ink hover:bg-white/70"
        >
          <X className="size-5" aria-hidden="true" />
          <span className="sr-only">Cerrar</span>
        </button>
      </div>
    </div>
  );
}
