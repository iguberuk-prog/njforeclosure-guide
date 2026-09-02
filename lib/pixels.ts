/**
 * Retargeting pixel configuration and the consent gate in front of it.
 *
 * The site currently runs NO advertising pixels: both IDs below are empty,
 * and while they are empty MarketingPixels renders nothing. When Igor opens
 * a Meta or Google Ads account, the IDs go here — but the consent gate is
 * already live, which is the point of building it first:
 *
 *   New Jersey's Data Privacy Act (S332, effective 2025) gives residents
 *   the right to opt out of "targeted advertising", and requires honoring
 *   universal opt-out signals. So before a single pixel fires, we honor:
 *
 *   1. Global Privacy Control (navigator.globalPrivacyControl) — a browser
 *      signal NJ law treats as a valid opt-out. Automatic; no UI needed.
 *   2. The site's own opt-out toggle on /privacy ("Your privacy choices"),
 *      stored in the visitor's browser.
 *
 * GA4 measurement (Analytics.tsx) is first-party analytics, not targeted
 * advertising, and is not gated here. If GA audiences are ever linked to
 * Google Ads for remarketing, that linkage becomes targeted advertising
 * and must move behind this same gate.
 */

// Set these when the ad accounts exist. Empty string = pixel disabled.
export const META_PIXEL_ID = '';
export const GOOGLE_ADS_TAG_ID = ''; // format: AW-XXXXXXXXXX

const OPT_OUT_KEY = 'njfg_ads_optout';

/** True when the visitor has opted out via the /privacy toggle. */
export function hasOptedOut(): boolean {
  try {
    return localStorage.getItem(OPT_OUT_KEY) === '1';
  } catch {
    return false;
  }
}

export function setOptedOut(v: boolean): void {
  try {
    if (v) localStorage.setItem(OPT_OUT_KEY, '1');
    else localStorage.removeItem(OPT_OUT_KEY);
  } catch {
    /* storage unavailable: the GPC check still applies */
  }
}

/** True when the browser is broadcasting Global Privacy Control. */
export function hasGpcSignal(): boolean {
  if (typeof navigator === 'undefined') return false;
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;
}

/** The one question the pixel loader asks. */
export function adsAllowed(): boolean {
  return !hasGpcSignal() && !hasOptedOut();
}
