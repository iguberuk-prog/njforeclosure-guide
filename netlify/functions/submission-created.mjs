// EVERY LEAD -> GOHIGHLEVEL
// ---------------------------------------------------------------------------
// Netlify runs a function named `submission-created` automatically after each
// verified (non-spam) Netlify Forms submission. This one forwards the lead to
// a GoHighLevel inbound webhook so GHL can create the contact and start its
// follow-up workflow. It covers every form on the site: lead-quiz (English
// and Spanish quizzes, commercial assessment, offer requests), ai-chat-lead
// (Samantha), guide-download and client-review.
//
// Configuration: set GHL_LEADS_WEBHOOK_URL in Netlify environment variables
// to the GHL inbound-webhook URL (Automation -> Workflows -> trigger
// "Inbound Webhook"). Until it is set this function does nothing, and leads
// keep arriving by email and in the Bidnology CRM exactly as before. A GHL
// failure never blocks or loses a lead: Netlify has already stored it and
// sent the email notifications before this runs.
//
// The webhook URL is a capability secret; it lives in the environment, never
// in this public repository. Setup notes: outreach/ghl-leads-setup.md
// ---------------------------------------------------------------------------

const MAX = 5000;
// Never forwarded: spam honeypot, and network details we don't need in a CRM.
const DROP = new Set(['bot-field', 'form-name', 'ip', 'user_agent']);

const LEAD_TYPE_BY_FORM = {
  'lead-quiz': 'quiz',
  'ai-chat-lead': 'chat',
  'guide-download': 'guide-download',
  'client-review': 'review',
};

const str = (v) => (v === undefined || v === null ? '' : String(v).slice(0, MAX).trim());

/**
 * Turn a Netlify Forms submission payload into the flat JSON a GHL inbound
 * webhook maps most easily: standard contact keys first, then every other
 * submitted field under its own name. Pure function, unit-tested in
 * scripts/test-ghl-forward.mjs.
 */
export function toGhlPayload(payload) {
  const data = payload?.data ?? {};
  const formName = str(payload?.form_name || data['form-name']);
  const name = str(data.name);
  const [firstName, ...rest] = name.split(/\s+/).filter(Boolean);

  const fields = {};
  for (const [k, v] of Object.entries(data)) {
    if (!DROP.has(k)) fields[k] = str(v);
  }

  const leadType = str(data.leadType) || LEAD_TYPE_BY_FORM[formName] || formName;
  const tags = ['njfg', `njfg-${LEAD_TYPE_BY_FORM[formName] || formName || 'form'}`];
  if (str(data.language).toLowerCase().startsWith('es')) tags.push('njfg-spanish');
  if (str(data.requestOffers)) tags.push('njfg-offer-request');

  return {
    source: 'njforeclosureguide.org',
    formName,
    leadType,
    tags: tags.join(','),
    name,
    firstName: firstName ?? '',
    lastName: rest.join(' '),
    email: str(data.email),
    phone: str(data.phone),
    address: str(data.propertyAddress),
    town: str(data.town),
    language: str(data.language) || 'en',
    notes: str(data.notes || data.conversationSummary || data.text),
    sourcePage: str(data.sourcePage || data.referrer),
    landingPage: str(data.landingPage),
    utmCampaign: str(data.campaign),
    utmSource: str(data.campaignSource),
    utmMedium: str(data.campaignMedium),
    utmContent: str(data.campaignContent),
    ghlContactId: str(data.ghlContactId),
    submissionId: str(payload?.id),
    submittedAt: str(payload?.created_at) || new Date().toISOString(),
    ...fields,
  };
}

export const handler = async (event) => {
  const hook = process.env.GHL_LEADS_WEBHOOK_URL;
  if (!hook) return { statusCode: 200, body: 'ghl not configured' };

  let payload;
  try {
    payload = JSON.parse(event.body || '{}').payload;
  } catch {
    return { statusCode: 200, body: 'unreadable submission' };
  }
  if (!payload) return { statusCode: 200, body: 'no payload' };

  const body = toGhlPayload(payload);
  try {
    const res = await fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(8000),
    });
    console.log('[ghl] forwarded', body.formName, body.submissionId, res.status);
  } catch (err) {
    // The lead is already stored in Netlify Forms and emailed; just log.
    console.log('[ghl] forward failed', body.formName, body.submissionId, String(err));
  }
  return { statusCode: 200, body: 'ok' };
};
