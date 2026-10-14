'use client';

import { useEffect } from 'react';
import { captureAttribution } from '@/lib/track';

/** Keeps the Google Ads click id (gclid) and UTM tags from the landing URL for the estimate form. */
export function AttributionCapture() {
  useEffect(() => {
    captureAttribution(window.location.search);
  }, []);
  return null;
}
