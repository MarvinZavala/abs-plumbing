/**
 * Remembers which language a visitor picked, and decides whether English pages should offer Spanish.
 * Never redirects: Google advises against language redirects, and they would add a hop to every ad click.
 */
const STORAGE_KEY = 'ab-lang';

/** Offer Spanish when the browser's first language is Spanish or the visitor picked Spanish before, unless they chose English. */
export function shouldSuggestSpanish(stored: string | null, preferredLanguage: string): boolean {
  if (stored === 'es') return true;
  if (stored === 'en') return false;
  return preferredLanguage.toLowerCase().split('-')[0] === 'es';
}

/**
 * Inline script for the <head> of English pages. It runs before the first paint, so the suggestion bar is either
 * there from the start or not at all, and never pushes the page down after it has rendered.
 */
export const suggestSpanishScript = `try{if((${shouldSuggestSpanish.toString()})(localStorage.getItem('${STORAGE_KEY}'),(navigator.languages&&navigator.languages[0])||navigator.language||''))document.documentElement.setAttribute('data-suggest-lang','es')}catch(e){}`;

export function rememberLanguage(locale: 'en' | 'es'): void {
  try {
    localStorage.setItem(STORAGE_KEY, locale);
  } catch {
    // Private mode or blocked storage: the choice just isn't remembered.
  }
}
