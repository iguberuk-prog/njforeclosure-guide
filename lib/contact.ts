// SITE CONTACT
// ---------------------------------------------------------------------------
// There is deliberately NO phone number on this site.
//
// The only number available was the affiliated brokerage's line. Publishing it
// while the site states it has no affiliations would have made that statement
// false, so the number came off entirely rather than being disclosed. If a
// dedicated line that is not tied to any recommended business is ever set up,
// it can be added back here and surfaced from CallBand.
// ---------------------------------------------------------------------------

export const SITE_EMAIL = 'help@njforeclosureguide.org';

/** What we promise about response time. Keep this true. */
export const RESPONSE_PROMISE = 'We read every message and reply within one business day.';

// ---------------------------------------------------------------------------
// BUSINESS ADDRESS
//
// Google's financial-products ad policy expects a verifiable physical
// address for the advertiser. Fill this in with the real business address
// and it appears automatically in the sitewide footer band and in the
// ProfessionalService schema. While it is null, nothing renders and the
// schema stays state-level only.
//
// Must be an address that is actually associated with the business (the
// address used for Google Ads advertiser verification), not a mailbox
// picked for looks. If the office belongs to the affiliated brokerage,
// say so in ADDRESS_NOTE so the footer stays consistent with the
// independence statement.
// ---------------------------------------------------------------------------
export interface SiteAddress {
  line1: string;
  line2?: string;
  city: string;
  state: string; // two letters, e.g. 'NJ'
  zip: string;
}

// The Eisenhower, Eisenhower Corporate Campus, Livingston. Supplied by the
// owner 2026-08-27 as the business address for the site and for Google Ads
// advertiser verification.
export const SITE_ADDRESS: SiteAddress | null = {
  line1: '290 W Mt Pleasant Ave',
  line2: 'Suite 2210',
  city: 'Livingston',
  state: 'NJ',
  zip: '07039',
};

/** Optional one-line context shown under the address, e.g. that the office
 *  is the affiliated brokerage's and visits are by appointment. */
export const ADDRESS_NOTE: string | null = 'By appointment only.';

/** "123 Main St, Suite 4, Trenton, NJ 08601" or null when unset. */
export function formattedAddress(): string | null {
  if (!SITE_ADDRESS) return null;
  const a = SITE_ADDRESS;
  return [a.line1, a.line2, `${a.city}, ${a.state} ${a.zip}`].filter(Boolean).join(', ');
}

// ---------------------------------------------------------------------------
// PARTNER PHONE NUMBERS
//
// Each is that company's OWN published number, shown only on that company's
// page, clearly attributed so a homeowner always knows they are calling the
// company directly and not us. We are not paid by any of them and take no part
// in the call.
// ---------------------------------------------------------------------------
export const PARTNER_PHONES: Record<string, { display: string; tel: string }> = {
  'fire-home-buyers': { display: '1-866-297-8976', tel: '+18662978976' },
  'nj-offer': { display: '(732) 684-0623', tel: '+17326840623' },
  // Their site shows (732) 541-1121 once and (732) 354-1121 five times.
  // Treating the single instance as a typo on their end.
  'clik-offer': { display: '(732) 354-1121', tel: '+17323541121' },
  // Shown ONLY on the brokerage's own page, never as the site's contact number.
  'brc-corcoran-sawyer-smith': { display: '(908) 603-1100', tel: '+19086031100' },
};
