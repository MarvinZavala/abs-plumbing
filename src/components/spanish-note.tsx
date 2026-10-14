import { cn } from '@/lib/utils';
import { LanguageLink } from './language-link';

/** "Hablamos español" with a link to this page in Spanish, for English heroes. */
export function SpanishNote({ placement, className }: { placement: string; className?: string }) {
  return (
    <p lang="es" className={cn('text-[0.95rem] text-mute', className)}>
      Hablamos español.{' '}
      <LanguageLink to="es" placement={placement} className="font-semibold text-blue underline underline-offset-4">
        Ver en español
      </LanguageLink>
    </p>
  );
}
