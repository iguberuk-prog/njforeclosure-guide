// WEBSITE INTAKE → BIDNOLOGY CRM
// ---------------------------------------------------------------------------
// Every lead form on this site posts to Netlify Forms (see public/__forms.html).
// sendIntake() sends the same submission, as JSON, to the Bidnology dashboard
// (TheAllAgent repo, POST /api/intake). That endpoint validates the payload
// and stores it in the intake_submissions table so the team can review and
// triage leads at /admin/intake.
//
// It runs ALONGSIDE the Netlify post, never instead of it, and it never
// throws: a CRM outage must not cost a visitor their results.
//
// Local development: set NEXT_PUBLIC_INTAKE_API_URL in .env.local to the
// dashboard running on your machine (see .env.example). In production the
// default below is used; Netlify needs no extra configuration.
// ---------------------------------------------------------------------------

const INTAKE_URL =
  process.env.NEXT_PUBLIC_INTAKE_API_URL || 'https://bidnology.com/api/intake';

// fetch({ keepalive: true }) lets the request finish even if the visitor
// navigates away, but browsers cap keepalive bodies at 64 KB in flight. Long
// chat transcripts fall back to a normal request.
const KEEPALIVE_MAX_BYTES = 60_000;

/** A random id the CRM uses to de-duplicate re-posts of the same submission. */
export function newSubmissionId(): string {
  try {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
      return crypto.randomUUID();
    }
  } catch {
    // fall through to the manual id below
  }
  return (
    'sub-' +
    Date.now().toString(36) +
    '-' +
    Math.random().toString(36).slice(2, 12) +
    Math.random().toString(36).slice(2, 12)
  );
}

/**
 * Mirror a lead form body to the Bidnology CRM. Pass the same submissionId
 * again (the chat widget does this per conversation) to update the existing
 * row instead of creating another one.
 */
export async function sendIntake(
  formData: URLSearchParams,
  submissionId: string = newSubmissionId(),
): Promise<void> {
  if (typeof window === 'undefined') return;
  try {
    const fields: Record<string, string> = {};
    formData.forEach((value, key) => {
      fields[key] = value;
    });
    const body = JSON.stringify({
      formName: fields['form-name'] || '',
      submissionId,
      submittedAt: new Date().toISOString(),
      pageUrl: window.location.href,
      fields,
    });
    const res = await fetch(INTAKE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: body.length < KEEPALIVE_MAX_BYTES,
    });
    if (!res.ok && process.env.NODE_ENV !== 'production') {
      console.warn('[intake] CRM rejected the submission:', res.status);
    }
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('[intake] CRM unreachable:', err);
    }
  }
}
