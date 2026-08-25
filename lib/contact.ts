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
};
