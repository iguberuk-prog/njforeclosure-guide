# Connecting every website lead to GoHighLevel

The website already forwards every lead to GHL the moment one setting exists in
Netlify. Nothing else on the website needs to change.

## What reaches GHL

Every verified (non-spam) form submission on njforeclosureguide.org:

| Form | What it is | `leadType` |
| --- | --- | --- |
| `lead-quiz` | English and Spanish quizzes, commercial assessment, offer requests | `quiz`, or `commercial` |
| `ai-chat-lead` | Samantha, the chat assistant (includes the conversation summary) | `chat` |
| `guide-download` | Checklist / playbook downloads (name + email only) | `guide-download` |
| `client-review` | Reviews submitted by past clients | `review` |

## Steps (about 10 minutes, done in GHL + Netlify)

1. In GHL: **Automation → Workflows → Create workflow → trigger "Inbound Webhook"**. Copy the webhook URL it shows.
2. In Netlify: **njforeclosure-guide → Project configuration → Environment variables → Add a variable**
   - Key: `GHL_LEADS_WEBHOOK_URL`
   - Value: the URL from step 1
   - Scope: Functions; same value in all deploy contexts.
3. In Netlify: **Deploys → Trigger deploy → Deploy site** so the function picks up the new variable.
4. Submit a test lead on the site (for example the guide download at /free-checklist with your own email). In GHL, open the webhook trigger and click **Fetch sample request**. The test lead should appear.
5. Add a **Create/Update Contact** action and map the fields below, then add the follow-up steps you want (speed-to-lead text, email, task, pipeline stage).

## Fields in every request

`firstName`, `lastName`, `name`, `email`, `phone`, `address`, `town`, `language` (`en`/`es`),
`notes` (quiz notes, chat summary or review text), `formName`, `leadType`,
`tags` (comma-separated: `njfg`, `njfg-quiz` / `njfg-chat` / `njfg-guide-download` / `njfg-review`, plus `njfg-spanish` and `njfg-offer-request` when they apply),
`sourcePage`, `landingPage`, `utmCampaign`, `utmSource`, `utmMedium`, `utmContent`,
`ghlContactId` (when the visitor arrived from a GHL link), `submissionId`, `submittedAt`,
plus every other field the form collected under its own name (for example `situation`, `timeline`, `goal`, `homeValue`, `leadScore`, `recommendation`, `propertyCondition`).

Not sent: the visitor's IP address, browser details and the spam honeypot field.

## Rules for the follow-up workflow

- Never promise to stop a foreclosure or guarantee an outcome, and never ask for money up front.
- Free help first: HUD-approved counselors 800-569-4287; Legal Services of NJ 1-888-576-5529.
- Anyone replying must not present an automated message as a person.
- Leads with a sheriff sale date may have days, not weeks. Route `leadScore` high / chat leads to an immediate human call.

## If something goes wrong

A GHL outage never loses a lead: Netlify stores every submission and emails
help@njforeclosureguide.org before this forwarding runs. The function log in
Netlify (**Logs → Functions → submission-created**) shows `[ghl] forwarded` or
`[ghl] forward failed` for each lead.

The separate offer-request fan-out (vendor referral emails) uses its own
variable, `GHL_CONCIERGE_WEBHOOK_URL`; see `concierge-ghl-setup.md`.
