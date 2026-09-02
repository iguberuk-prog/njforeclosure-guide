# Offer Concierge — GoHighLevel fulfillment setup

The site is already sending. When a homeowner submits the "request my offers
for me" form, `/api/concierge-dispatch` fires one webhook event per selected
vendor plus one homeowner event at the GHL inbound-webhook URL. This document
is the 20-minute GHL side: one workflow, four templates.

Until the webhook URL is configured, nothing is lost: every concierge lead
still lands in Netlify Forms, the Bidnology CRM, and the lead email. GHL just
turns "Igor forwards it by hand" into "it happened before Igor saw it."

## 1. Create the workflow

1. GHL → Automation → Workflows → Create Workflow → Start from Scratch.
2. Name: `Offer Concierge Dispatch`.
3. Trigger: **Inbound Webhook**. Copy the webhook URL it shows.
4. Send that URL to Claude (or paste it yourself into Netlify →
   Site configuration → Environment variables → `GHL_CONCIERGE_WEBHOOK_URL`),
   then trigger a redeploy so the function picks it up.
5. Fire one test submission from the site so GHL captures the payload shape
   (fields: `type`, `vendorId`, `vendorName`, `vendorEmail`, `homeownerName`,
   `homeownerPhone`, `homeownerEmail`, `propertyAddress`, `notes`,
   `vendorsRequested`, `sourcePage`, `submittedAt`).

## 2. Branch on `type`

Add an **If/Else** on `{{inboundWebhookRequest.type}}`:

### Branch A — `homeowner`

1. **Create/Update Contact** — name, phone, email from the payload; tag
   `offer-concierge`; source `njforeclosureguide.org`.
2. **Internal notification** (email or app notification to Igor):

   > 🔥 Concierge lead: {{inboundWebhookRequest.homeownerName}} —
   > {{inboundWebhookRequest.propertyAddress}} — wants offers from:
   > {{inboundWebhookRequest.vendorsRequested}}.
   > Phone {{inboundWebhookRequest.homeownerPhone}} ·
   > Email {{inboundWebhookRequest.homeownerEmail}} ·
   > Notes: {{inboundWebhookRequest.notes}}

3. **SMS to homeowner** (only sends if a phone was given):

   > Hi {{inboundWebhookRequest.homeownerName}}, Igor from NJ Foreclosure
   > Guide. Got your request — I'm sending your property to
   > {{inboundWebhookRequest.vendorsRequested}} now. The offers are free and
   > non-binding, and you should hear from them within about a business day.
   > I'll check in to make sure they called. Reply here with any questions.
   > Reply STOP to opt out.

4. **Email to homeowner** (subject: `Your offer requests are in motion`):

   > Hi {{inboundWebhookRequest.homeownerName}},
   >
   > Confirming what just happened: you asked us to request offers for
   > {{inboundWebhookRequest.propertyAddress}} from
   > {{inboundWebhookRequest.vendorsRequested}}, and that request is on its
   > way to them now. Each company will contact you directly, most within one
   > business day.
   >
   > Three things worth remembering while the offers come in: every offer is
   > free and non-binding; comparing them is the whole point; and nothing is
   > final until you sign something. If you want a second pair of eyes on any
   > offer, reply to this email — that's free too.
   >
   > Igor
   > NJ Foreclosure Guide · Free, independent, nothing to sell you
   >
   > IMPORTANT NOTICE: NJ Foreclosure Guide is not associated with the
   > government, and our service is not approved by the government or your
   > lender. Even if you accept this offer and use our service, your lender
   > may not agree to change your loan.
   > 290 W Mt Pleasant Ave, Suite 2210, Livingston, NJ 07039

### Branch B — `vendor-referral`

Add a nested If/Else on `{{inboundWebhookRequest.vendorEmail}}` (is not empty):

**If vendorEmail exists** → **Send Email**, To:
`{{inboundWebhookRequest.vendorEmail}}`, From: help@njforeclosureguide.org,
Subject: `Referral: homeowner requesting an offer — {{inboundWebhookRequest.propertyAddress}}`

   > Hello {{inboundWebhookRequest.vendorName}} team,
   >
   > Igor Guberuk at NJ Foreclosure Guide (njforeclosureguide.org). A New
   > Jersey homeowner asked us to request an offer from you on their behalf,
   > with their consent to share these details:
   >
   > Name: {{inboundWebhookRequest.homeownerName}}
   > Phone: {{inboundWebhookRequest.homeownerPhone}}
   > Email: {{inboundWebhookRequest.homeownerEmail}}
   > Property: {{inboundWebhookRequest.propertyAddress}}
   > Notes: {{inboundWebhookRequest.notes}}
   >
   > They are likely comparing more than one offer. Please contact them
   > directly within one business day; they are expecting to hear from you.
   > We are not paid for this referral.
   >
   > Igor Guberuk · NJ Foreclosure Guide · help@njforeclosureguide.org

**If vendorEmail is empty** (currently only ClikOffer — they publish no
email) → **Internal notification**:

   > ⚠️ Place this referral by phone: {{inboundWebhookRequest.vendorName}}
   > has no referral inbox. Homeowner
   > {{inboundWebhookRequest.homeownerName}},
   > {{inboundWebhookRequest.propertyAddress}},
   > {{inboundWebhookRequest.homeownerPhone}}. ClikOffer: (732) 354-1121.

   When Igor gets a direct ClikOffer email, add it to VENDOR_EMAILS in
   `netlify/functions/concierge-dispatch.mjs` and this branch goes quiet.

## 3. Before going live

- Tell each vendor contact to expect referral emails from
  help@njforeclosureguide.org so the first one isn't treated as spam.
  (Verified inboxes: info@firehomebuyers.com, info@njoffer.com,
  support@urbni.org.)
- Send one test through the live site and confirm all three legs: vendor
  email received, homeowner SMS/email received, internal notification
  received.
- The homeowner SMS is compliant because the concierge form's consent line
  covers being contacted by text about their own request.
