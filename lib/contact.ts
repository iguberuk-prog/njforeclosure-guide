// SITE CONTACT
// ---------------------------------------------------------------------------
// This is the number a visitor reaches when they call NJ Foreclosure Guide.
// It currently routes to Corcoran Sawyer Smith x Builders Resource Center, the
// affiliated brokerage, which is a real business that answers the phone.
//
// If you would rather calls not go to the brokerage line, replace SITE_PHONE
// with a dedicated number (a Google Voice number forwards to your cell and can
// be silenced overnight). Change it here only; every page reads from this file.
// ---------------------------------------------------------------------------

export const SITE_PHONE_DISPLAY = '(908) 603-1100';
export const SITE_PHONE_TEL = '+19086031100';
export const SITE_EMAIL = 'help@njforeclosureguide.org';

/** What we promise about response time. Keep this true. */
export const RESPONSE_PROMISE = 'We answer during business hours and reply to every message within 2 hours.';

// ---------------------------------------------------------------------------
// PARTNER PHONE NUMBERS
// Each is that partner's own published number, shown only on that partner's
// page so a homeowner always knows who they are calling. Verified from each
// partner's live site.
// ---------------------------------------------------------------------------
export const PARTNER_PHONES: Record<string, { display: string; tel: string }> = {
  'fire-home-buyers': { display: '1-866-297-8976', tel: '+18662978976' },
  'nj-offer': { display: '(732) 684-0623', tel: '+17326840623' },
  // Their site shows (732) 541-1121 once and (732) 354-1121 five times.
  // Treating the single instance as a typo on their end.
  'clik-offer': { display: '(732) 354-1121', tel: '+17323541121' },
  'brc-corcoran-sawyer-smith': { display: '(908) 603-1100', tel: '+19086031100' },
};
