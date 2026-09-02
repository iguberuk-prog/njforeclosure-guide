// OFFER CONCIERGE DISPATCH
// ---------------------------------------------------------------------------
// When a homeowner asks us to request offers on their behalf (the
// OfferConcierge form), this function fans the request out to GoHighLevel,
// which runs the fulfillment workflow: referral email to each selected
// vendor, confirmation text/email to the homeowner, and an internal
// notification. See outreach/concierge-ghl-setup.md for the workflow recipe.
//
// Configuration: set GHL_CONCIERGE_WEBHOOK_URL in Netlify environment
// variables to the GHL inbound-webhook URL (Automation -> Workflows ->
// trigger "Inbound Webhook"). Until it is set, this function accepts and
// logs the lead but forwards nothing; Netlify Forms + the CRM mirror still
// capture every lead, so nothing is lost while GHL is being wired up.
//
// The webhook URL is a capability secret; it lives in the environment, never
// in this public repository.
// ---------------------------------------------------------------------------

// Referral inboxes, verified on each company's own site (2026-09-02).
// ClikOffer publishes no email anywhere on clikoffer.com; the GHL workflow
// notifies us to place that referral by phone until a direct email exists.
const VENDOR_EMAILS = {
  'fire-home-buyers': { name: 'Fire Home Buyers', email: 'info@firehomebuyers.com' },
  'nj-offer': { name: 'NJ Offer', email: 'info@njoffer.com' },
  'clik-offer': { name: 'ClikOffer', email: null },
  urbni: { name: 'Urbni', email: 'support@urbni.org' },
};

export default async (req) => {
  if (req.method !== 'POST') {
    return new Response(JSON.stringify({ error: 'method_not_allowed' }), { status: 405 });
  }

  let lead;
  try {
    lead = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: 'bad_request' }), { status: 400 });
  }

  const clean = (v, max = 500) => (typeof v === 'string' ? v.slice(0, max) : '');
  const name = clean(lead.name, 120);
  const phone = clean(lead.phone, 40);
  const email = clean(lead.email, 160);
  const address = clean(lead.address, 300);
  const notes = clean(lead.notes, 1000);
  const vendors = Array.isArray(lead.vendors)
    ? lead.vendors.filter((v) => typeof v === 'string' && v in VENDOR_EMAILS).slice(0, 4)
    : [];

  if (!name || !address || vendors.length === 0 || (!phone && !email)) {
    return new Response(JSON.stringify({ error: 'invalid_lead' }), { status: 400 });
  }

  const hook = process.env.GHL_CONCIERGE_WEBHOOK_URL;
  if (!hook) {
    // Not configured yet: acknowledge so the visitor flow is unaffected.
    console.log('[concierge] lead received, GHL webhook not configured', { name, vendors });
    return new Response(JSON.stringify({ ok: true, dispatched: false }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const base = {
    homeownerName: name,
    homeownerPhone: phone,
    homeownerEmail: email,
    propertyAddress: address,
    notes,
    vendorsRequested: vendors.map((v) => VENDOR_EMAILS[v].name).join(', '),
    sourcePage: clean(lead.sourcePage, 120),
    submittedAt: new Date().toISOString(),
  };

  const posts = [
    // One event for the homeowner-side workflow branch (confirmation + internal notify)
    fetch(hook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'homeowner', ...base }),
    }),
    // One event per selected vendor for the referral branch
    ...vendors.map((v) =>
      fetch(hook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'vendor-referral',
          vendorId: v,
          vendorName: VENDOR_EMAILS[v].name,
          vendorEmail: VENDOR_EMAILS[v].email ?? '',
          ...base,
        }),
      })
    ),
  ];

  try {
    await Promise.allSettled(posts);
  } catch {
    // allSettled never throws; belt and suspenders.
  }

  return new Response(JSON.stringify({ ok: true, dispatched: true, events: vendors.length + 1 }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const config = { path: '/api/concierge-dispatch' };
