// SITE ANALYTICS
// ---------------------------------------------------------------------------
// Google Analytics 4. Nothing loads and nothing is tracked until a real
// measurement ID is filled in below, so this file can sit in the codebase
// safely while the GA4 property is being created.
//
// To activate: create the GA4 property (Admin -> Create property -> add a
// Web data stream for https://njforeclosureguide.org), copy the measurement
// ID that looks like "G-XXXXXXXXXX", and paste it here. That is the only
// change needed; the loader and every event call check this constant.
// ---------------------------------------------------------------------------

// GA4 property "NJ Foreclosure Guide" (created 2026-08-27), web stream
// https://njforeclosureguide.org, stream ID 15513603569.
export const GA_MEASUREMENT_ID: string | null = 'G-J1ZBSH6SQL';

// Conversion events this site fires. Names follow GA4's recommended-event
// vocabulary where one fits (generate_lead is what Google Ads imports as a
// conversion with zero extra setup).
//
//   generate_lead   quiz contact form successfully submitted  <- PRIMARY
//   quiz_complete   quiz finished and results shown (with or without contact)
//   partner_click   outbound click to any listed company or program
//   email_click     click on a mailto: link to the site address
//   review_submit   client review form submitted
//
// In Google Ads: link the GA4 property, then mark generate_lead as a
// conversion. partner_click is a secondary conversion worth importing too,
// since a homeowner leaving for a partner site is the other success path.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/** Fire a GA4 event. Safe to call anywhere: no-ops on the server and when
 *  analytics is not configured or blocked by the visitor's browser. */
export function trackEvent(name: string, params?: EventParams): void {
  if (!GA_MEASUREMENT_ID) return;
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  try {
    window.gtag('event', name, params ?? {});
  } catch {
    // Analytics must never break the page for a homeowner in crisis.
  }
}
