'use client';

import type { AnchorHTMLAttributes } from 'react';
import { track, type TrackEvent } from '@/lib/track';

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  event: TrackEvent;
  /** Where on the page the click happened, e.g. "hero" or "action-bar". */
  placement: string;
};

/** A plain link that reports the click (calls, texts, estimate jumps) to Google Ads / GTM. */
export function TrackedLink({ event, placement, onClick, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        track(event, { placement });
        onClick?.(e);
      }}
    />
  );
}
