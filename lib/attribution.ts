// CAMPAIGN ATTRIBUTION
// ---------------------------------------------------------------------------
// When a visitor arrives from a drip email or text, the link carries UTM
// parameters and (from GoHighLevel) the contact id, e.g.
//   https://njforeclosureguide.org/quiz/?utm_source=ghl&utm_medium=email
//     &utm_campaign=lispendens-2026q3&utm_content=email-2&cid={{contact.id}}
//
// captureAttribution() runs on every page load (from the Analytics
// component) and stores those values for the session, so that when the
// visitor later submits the quiz, from any page, the lead email carries
// exactly which campaign and which message produced it, plus the GHL
// contact id to match the lead back to its record. Nothing here is sent
// anywhere until the visitor chooses to submit a form.
// ---------------------------------------------------------------------------

export interface Attribution {
  source: string;
  medium: string;
  campaign: string;
  content: string;
  ghlContactId: string;
  landingPage: string;
}

const KEY = 'njfg_attribution';

export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  try {
    const q = new URLSearchParams(window.location.search);
    const incoming: Partial<Attribution> = {
      source: q.get('utm_source') ?? '',
      medium: q.get('utm_medium') ?? '',
      campaign: q.get('utm_campaign') ?? '',
      content: q.get('utm_content') ?? '',
      ghlContactId: q.get('cid') ?? q.get('contact_id') ?? '',
    };
    const hasAny = Object.values(incoming).some((v) => v);
    if (!hasAny) return; // keep whatever was stored earlier this session
    const stored: Attribution = {
      source: incoming.source ?? '',
      medium: incoming.medium ?? '',
      campaign: incoming.campaign ?? '',
      content: incoming.content ?? '',
      ghlContactId: incoming.ghlContactId ?? '',
      landingPage: window.location.pathname,
    };
    sessionStorage.setItem(KEY, JSON.stringify(stored));
  } catch {
    // Storage blocked: attribution is a nice-to-have, never a blocker.
  }
}

export function getAttribution(): Attribution {
  const empty: Attribution = { source: '', medium: '', campaign: '', content: '', ghlContactId: '', landingPage: '' };
  if (typeof window === 'undefined') return empty;
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? { ...empty, ...JSON.parse(raw) } : empty;
  } catch {
    return empty;
  }
}

/** Append attribution fields to a lead form body. */
export function appendAttribution(formData: URLSearchParams): void {
  const a = getAttribution();
  formData.append('campaign', a.campaign);
  formData.append('campaignSource', a.source);
  formData.append('campaignMedium', a.medium);
  formData.append('campaignContent', a.content);
  formData.append('ghlContactId', a.ghlContactId);
  formData.append('landingPage', a.landingPage);
}
