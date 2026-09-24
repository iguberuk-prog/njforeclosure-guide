/**
 * Letter Builder templates (built 2026-09-24). Pure functions so every
 * template is unit-testable (scripts/test-letters.mjs) and the page and the
 * tests produce identical text. Nothing here sends anything anywhere.
 *
 * Rules the templates follow:
 * - Plain, factual, first person ("I", or "we" when a co-borrower is named).
 * - Never invent facts: every factual statement comes from a field the
 *   homeowner filled or an option they chose. Optional helper sentences are
 *   opt-in and are about requests/intent, not facts.
 * - A field left blank renders as a visible "[bracketed prompt]"; a fully
 *   filled letter contains no square brackets at all (the test checks this).
 * - Never say a letter will stop a foreclosure or guarantee an outcome. Rules
 *   are described as what they generally require; conditional protections
 *   are phrased conditionally ("if my complete application was received...").
 *
 * PRIMARY SOURCES VERIFIED 2026-09-24 (eCFR text "as of 2026-09-01"):
 *
 * - 12 CFR 1026.36(c)(3) (Regulation Z, payoff statements)
 *   https://www.ecfr.gov/current/title-12/chapter-X/part-1026/subpart-E/section-1026.36
 *   "must provide an accurate statement of the total outstanding balance that
 *   would be required to pay the consumer's obligation in full as of a
 *   specified date. The statement shall be sent within a reasonable time, but
 *   in no case more than seven business days, after receiving a written
 *   request". Exception: when the loan is in bankruptcy or foreclosure (or is a
 *   reverse/shared-appreciation mortgage, or natural disasters or similar),
 *   the statement must be provided "within a reasonable time". So the letter
 *   says "in most cases no more than seven business days", not "must within 7".
 *
 * - Reinstatement quotes: neither Regulation X nor Regulation Z sets a
 *   deadline specific to reinstatement quotes (1026.36(c)(3) covers payoff
 *   statements only). The letter asks for it "as soon as possible" and cites
 *   no deadline.
 *
 * - 12 CFR 1024.35 (Regulation X, notice of error)
 *   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/subpart-C/section-1024.35
 *   (c) servicer MAY designate an exclusive address for notices of error (same
 *   address as for information requests) and must post it on its website if
 *   the site lists any contact address; (d) written acknowledgment within 5
 *   days excluding legal public holidays, Saturdays and Sundays; (e)(3)
 *   response within 30 such days generally (one 15-day extension with written
 *   notice before day 30), 7 such days for payoff-balance errors ((b)(6)), and
 *   before the foreclosure sale or within 30 such days, whichever is earlier,
 *   for errors under (b)(9)/(b)(10) (foreclosure steps taken in violation of
 *   1024.41(f), (g) or (j)); no extension for (b)(6), (9), (10); (e)(4)
 *   documents relied on within 15 such days of request; (h) no fee or payment
 *   as a condition of responding; (i)(1) no adverse credit reporting on the
 *   disputed payment for 60 days.
 *
 * - 12 CFR 1024.36 (Regulation X, request for information)
 *   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/subpart-C/section-1024.36
 *   (b) same optional designated address; (c) acknowledgment within 5 such
 *   days; (d)(2) response within 10 such days for the owner/assignee's
 *   identity and contact information, 30 such days for everything else (one
 *   15-day extension with written notice, not for the owner request);
 *   (a) a payoff-balance request need not be treated as an information
 *   request; (g) no fee as a condition of responding.
 *
 * - 12 CFR 1024.41 (Regulation X, loss mitigation)
 *   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/subpart-C/section-1024.41
 *   (c)(1) complete application received more than 37 days before a sale:
 *   evaluate for all options within 30 days; (c)(3) notice of complete
 *   application states the date the servicer received it; (d) denial notice
 *   must state the specific reason(s) for each modification denied;
 *   (g) complete application received after the first foreclosure filing but
 *   more than 37 days before a sale: servicer shall not move for foreclosure
 *   judgment or order of sale, or conduct a sale, unless (1) it sent a notice
 *   that the borrower is not eligible for any option and the appeal is not
 *   applicable / not requested in time / denied, (2) the borrower rejects all
 *   options, or (3) the borrower fails to perform under an agreement;
 *   (h)(1) appeal required if the complete application was received 90 days or
 *   more before a sale (or during the pre-foreclosure review period); (h)(2)
 *   appeal may be made within 14 days after the servicer provides its decision;
 *   (h)(3) reviewed by different personnel; (h)(4) written appeal decision
 *   within 30 days, not further appealable.
 *
 * - Supplement I to Part 1024 (Official Interpretations), same eCFR part:
 *   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/appendix-Supplement%20I%20to%20Part%201024
 *   comment 41(b)(3)-1: if no sale is scheduled when the complete application
 *   is received, it is treated as received more than 90 days before any sale;
 *   comment 41(d)-1: an investor-requirement denial must identify the owner or
 *   assignee and the specific requirement; comment 41(d)-2: "If a trial or
 *   permanent loan modification is denied because of a net present value
 *   calculation, the specific reasons in the notice provided to the borrower
 *   must include the inputs used in the net present value calculation."
 *   (The NPV-input rule is in the official commentary, not the regulation
 *   text itself.) Comment 41(g)-3: servicer must instruct foreclosure counsel
 *   not to move for judgment/order of sale and to prevent a sale; comment
 *   41(g)-5: conducting a scheduled sale violates (g) even if someone else
 *   (e.g., a sheriff) administers it.
 *
 * - 12 CFR 1024.30 (scope)
 *   https://www.ecfr.gov/current/title-12/chapter-X/part-1024/subpart-C/section-1024.30
 *   1024.39-1024.41 apply only to a borrower's principal residence; small
 *   servicers (12 CFR 1026.41(e)(4): 5,000 or fewer loans, all owned or
 *   originated by the servicer or an affiliate, plus housing finance agencies
 *   and certain nonprofits) are exempt from 1024.38-1024.41 except 1024.41(j).
 *   1024.35/1024.36 have no small-servicer exemption.
 *
 * - N.J.S.A. 2A:17-36 (adjournments of sale)
 *   https://law.justia.com/codes/new-jersey/title-2a/section-2a-17-36/
 *   The sheriff "may make five adjournments of the sale, two at the request of
 *   the lender, two at the request of the debtor, and one if both the lender
 *   and debtor agree ... not exceeding 30 calendar days for each adjournment";
 *   a court may order further adjournments for cause. Requests go through the
 *   county sheriff's office, which sets its own process and fee.
 */

export type LetterKind = 'hardship' | 'quote' | 'rfi' | 'postpone' | 'appeal';

export interface LetterInput {
  // common
  letterDate: string; // YYYY-MM-DD
  borrower1: string;
  borrower2: string; // optional co-borrower
  mailingAddress: string; // optional; the property address is used when blank
  propertyAddress: string;
  phone: string;
  email: string; // optional
  loanNumber: string;
  servicerName: string;
  servicerAddress: string; // may be multi-line
  docketNumber: string; // required for postpone; optional elsewhere
  saleDate: string; // YYYY-MM-DD; required for postpone; optional elsewhere
  completeAppDate: string; // YYYY-MM-DD; required for postpone; optional for appeal
  // hardship
  hardshipReason: string; // HARDSHIP_REASONS id
  hardshipOther: string;
  hardshipStart: string; // free text, e.g. "March 2026"
  hardshipChanged: string;
  incomeNow: string;
  hardshipDuration: string; // '' | 'temporary' | 'long'
  lossMitRequest: string; // LOSS_MIT_REQUESTS id
  commitment: string;
  hardshipHelpers: string[]; // HARDSHIP_HELPERS ids
  // reinstatement quote / payoff
  quoteType: string; // 'both' | 'reinstatement' | 'payoff'
  goodThrough: string; // YYYY-MM-DD
  // request for information / notice of error
  rfiMode: string; // 'rfi' | 'noe' | 'both'
  rfiItems: string[]; // RFI_ITEMS ids
  rfiOther: string;
  errorType: string; // ERROR_TYPES id
  errorDescription: string;
  errorCorrection: string;
  // postpone
  attorneyName: string;
  attorneyAddress: string;
  // appeal
  denialDate: string; // YYYY-MM-DD
  denialReason: string;
  appealGrounds: string[]; // APPEAL_GROUNDS ids
  appealExplanation: string;
  requestNpv: boolean;
  // any letter
  enclosures: boolean; // the homeowner says they are enclosing documents
}

export const EMPTY_INPUT: LetterInput = {
  letterDate: '',
  borrower1: '',
  borrower2: '',
  mailingAddress: '',
  propertyAddress: '',
  phone: '',
  email: '',
  loanNumber: '',
  servicerName: '',
  servicerAddress: '',
  docketNumber: '',
  saleDate: '',
  completeAppDate: '',
  hardshipReason: '',
  hardshipOther: '',
  hardshipStart: '',
  hardshipChanged: '',
  incomeNow: '',
  hardshipDuration: '',
  lossMitRequest: '',
  commitment: '',
  hardshipHelpers: [],
  quoteType: 'both',
  goodThrough: '',
  rfiMode: 'rfi',
  rfiItems: [],
  rfiOther: '',
  errorType: '',
  errorDescription: '',
  errorCorrection: '',
  attorneyName: '',
  attorneyAddress: '',
  denialDate: '',
  denialReason: '',
  appealGrounds: [],
  appealExplanation: '',
  requestNpv: false,
  enclosures: false,
};

export interface LetterMeta {
  kind: LetterKind;
  name: string;
  blurb: string;
}

export const LETTERS: LetterMeta[] = [
  { kind: 'hardship', name: 'Mortgage hardship letter', blurb: 'Explain what happened and ask your servicer’s loss-mitigation team for help.' },
  { kind: 'quote', name: 'Reinstatement quote & payoff request', blurb: 'Get the exact catch-up figure and the full payoff, in writing.' },
  { kind: 'rfi', name: 'Request for information / notice of error', blurb: 'Ask for loan records or dispute a servicing mistake under RESPA.' },
  { kind: 'postpone', name: 'Request to postpone the sheriff sale', blurb: 'Ask the servicer to hold the sale while your application is reviewed.' },
  { kind: 'appeal', name: 'Loan modification denial appeal', blurb: 'Appeal a modification denial and ask for the numbers behind it.' },
];

export const HARDSHIP_REASONS: { id: string; label: string; phrase: string }[] = [
  { id: 'income', label: 'Job loss or reduced income', phrase: 'I lost a job or had my income reduced' },
  { id: 'medical', label: 'Medical problem or medical bills', phrase: 'I faced a medical problem and medical expenses' },
  { id: 'divorce', label: 'Divorce or separation', phrase: 'I went through a divorce or separation' },
  { id: 'death', label: 'Death of a co-borrower or household earner', phrase: 'I lost household income after the death of a co-borrower or household earner' },
  { id: 'disability', label: 'Disability', phrase: 'I was affected by a disability' },
  { id: 'expenses', label: 'Increased expenses', phrase: 'I faced an increase in household expenses' },
  { id: 'disaster', label: 'Natural disaster', phrase: 'I was affected by a natural disaster' },
  { id: 'other', label: 'Other', phrase: '' },
];

export const LOSS_MIT_REQUESTS: { id: string; label: string; ask: string }[] = [
  { id: 'modification', label: 'Loan modification', ask: 'a loan modification with a monthly payment I can afford on my current income' },
  { id: 'repayment', label: 'Repayment plan', ask: 'a repayment plan so I can catch up on the missed payments over time' },
  { id: 'forbearance', label: 'Forbearance', ask: 'a forbearance, a temporary pause or reduction of my payments' },
  { id: 'short-sale', label: 'Short sale', ask: 'approval of a short sale of the property' },
  { id: 'deed-in-lieu', label: 'Deed in lieu of foreclosure', ask: 'a deed in lieu of foreclosure' },
];

export const HARDSHIP_HELPERS: { id: string; label: string; text: string }[] = [
  { id: 'missing', label: 'Ask them to tell me in writing what is missing', text: 'If anything else is needed to complete my application, please tell me in writing exactly what is missing and the date you need it by.' },
  { id: 'writing', label: 'Ask for the decision in writing', text: 'Please send your decision to me in writing at the address above, and call me at the phone number above if you have any questions.' },
  { id: 'respond', label: 'Say I will respond promptly', text: 'I want to resolve this as quickly as possible and will respond promptly to any request for more information.' },
];

/** Editable starter sentences for the commitment line (intent, not facts). */
export const COMMITMENT_STARTERS = [
  'I want to keep my home, and I am committed to making a payment I can afford for the long term.',
  'I want to resolve this responsibly, and I will respond promptly to any request for documents.',
];

export const RFI_ITEMS: { id: string; label: string; text: string }[] = [
  { id: 'owner', label: 'Who owns my loan', text: 'The identity, address, and other relevant contact information of the owner or assignee of my loan.' },
  { id: 'history', label: 'Complete payment history', text: 'A complete transaction history for the loan showing each payment received, the date it was received, and how it was applied to principal, interest, escrow, fees, or suspense.' },
  { id: 'fees', label: 'Itemized fees and charges', text: 'An itemized list of every fee and charge assessed to the loan, with the date and reason for each.' },
  { id: 'escrow', label: 'Escrow history', text: 'The escrow account history, including property tax and insurance payments made from escrow and any escrow shortage or advance.' },
  { id: 'lossmit', label: 'Status of my loss-mitigation application', text: 'The status of my loss mitigation application, the date you received it, whether you consider it complete, and a list of any documents you still need from me.' },
];

export const ERROR_TYPES: { id: string; label: string }[] = [
  { id: 'payment', label: 'A payment not credited or misapplied' },
  { id: 'fees', label: 'A fee or charge I should not owe' },
  { id: 'escrow', label: 'Taxes or insurance not paid from escrow' },
  { id: 'payoff', label: 'An inaccurate payoff balance' },
  { id: 'foreclosure', label: 'Foreclosure moved ahead while my complete application was pending' },
  { id: 'other', label: 'Another servicing error' },
];

export const APPEAL_GROUNDS: { id: string; label: string; text: string }[] = [
  { id: 'income', label: 'My income was counted incorrectly', text: 'My income was not calculated correctly.' },
  { id: 'expenses', label: 'My expenses or debts were counted incorrectly', text: 'My expenses or debts were not calculated correctly.' },
  { id: 'npv', label: 'The net present value (NPV) inputs look wrong', text: 'I believe one or more inputs used in the net present value (NPV) evaluation are wrong.' },
  { id: 'docs', label: 'I was told documents were missing, but I sent them', text: 'I was told documents were missing, but I had already provided them.' },
  { id: 'investor', label: 'The investor restriction was not explained', text: 'The notice did not identify the owner of my loan and the specific investor requirement that was the basis for the denial.' },
];

export const SENDING_CHECKLIST = [
  'Sign and date it, and keep a complete copy of the letter and everything you enclose.',
  'Send it by certified mail, return receipt requested, or upload it through the servicer’s online portal and save the confirmation.',
  'Write down the date you sent it and the tracking or confirmation number.',
  'Follow up if you do not receive a written acknowledgment or answer, and keep every reply.',
  'Get free help: a HUD-approved housing counselor (800-569-4287) or Legal Services of New Jersey (1-888-576-5529).',
];

export const REMINDERS: Record<LetterKind, string[]> = {
  hardship: [
    'Send it with your loss-mitigation application, not instead of it. A letter alone is not a complete application.',
    'Stick to facts you can document. Your servicer may ask for proof of the hardship and of your income.',
  ],
  quote: [
    'The payoff deadline in Regulation Z is generally seven business days, but the rule allows "a reasonable time" instead when a loan is in foreclosure or bankruptcy. No federal rule sets a specific deadline for reinstatement quotes, so ask early.',
    'If a sheriff sale is scheduled, the plaintiff’s foreclosure attorney usually prepares the figures; ask whether the quote includes their fees and how long it is good for.',
  ],
  rfi: [
    'Check your monthly statement, recent letters, and the servicer’s website for a designated address for "notices of error," "requests for information," or "qualified written requests." If the servicer designated one, send it there. A letter sent elsewhere may not trigger these rules.',
    'Keep a copy and send it by a trackable method. Servicers do not always comply on time, so your records matter.',
    'Do not put this on a payment coupon or send it with your payment. Send it separately.',
  ],
  postpone: [
    'This letter asks the servicer to postpone. It does not replace your own adjournment rights: under N.J.S.A. 2A:17-36 the homeowner can generally request two adjournments of up to 30 days each through the county sheriff’s office. Call the sheriff’s office to ask how they accept requests and the fee.',
    'Send a copy to the plaintiff’s foreclosure attorney named on your court papers, and check the county sale listing before the sale date to confirm what actually happened.',
    'The federal rule protects only a complete application received more than 37 days before the sale, and it generally applies to a principal residence and not to small servicers. Servicers do not always comply, so keep proof of every date.',
  ],
  appeal: [
    'The federal appeal right generally applies when the complete application was received 90 days or more before a scheduled sale (or before any sale was scheduled), and the appeal must be made within 14 days after the servicer’s decision. Send it right away.',
    'Attach anything that shows the mistake: pay stubs, benefit letters, bank statements, or proof you already sent a document.',
  ],
};

// ---------------------------------------------------------------------------
// Date helpers (string-based so time zones never shift a date)
// ---------------------------------------------------------------------------

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function parseIso(iso: string): { y: number; m: number; d: number } | null {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec((iso || '').trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const dt = new Date(Date.UTC(y, mo - 1, d));
  if (dt.getUTCFullYear() !== y || dt.getUTCMonth() !== mo - 1 || dt.getUTCDate() !== d) return null;
  return { y, m: mo, d };
}

/** "2026-09-24" -> "September 24, 2026"; invalid or blank -> "". */
export function formatLongDate(iso: string): string {
  const p = parseIso(iso);
  return p ? `${MONTHS[p.m - 1]} ${p.d}, ${p.y}` : '';
}

/** Whole calendar days from a to b (b - a); null if either date is invalid. */
export function daysBetween(a: string, b: string): number | null {
  const pa = parseIso(a);
  const pb = parseIso(b);
  if (!pa || !pb) return null;
  return Math.round((Date.UTC(pb.y, pb.m - 1, pb.d) - Date.UTC(pa.y, pa.m - 1, pa.d)) / 86400000);
}

/**
 * Date-based notes shown next to the form. They describe what the rules
 * generally require for the dates entered; they never promise an outcome.
 */
export function timingNotes(kind: LetterKind, input: LetterInput): string[] {
  const notes: string[] = [];
  if (kind === 'postpone') {
    const gap = daysBetween(input.completeAppDate, input.saleDate);
    if (gap !== null) {
      if (gap > 37) {
        notes.push(`Your complete application date is ${gap} days before the sale date. If the servicer received the complete application on that date, 12 CFR 1024.41(g) generally bars it from conducting the sale while the review and any appeal are pending, unless an exception applies.`);
      } else {
        notes.push(`Your complete application date is ${gap < 0 ? 'after' : `${gap} days before`} the sale date. The federal sale protection in 12 CFR 1024.41(g) generally applies only to a complete application received more than 37 days before the sale, so the letter asks for a postponement without relying on it. Use your adjournment rights through the sheriff and call for free legal help now.`);
      }
    }
  }
  if (kind === 'appeal') {
    const since = daysBetween(input.denialDate, input.letterDate);
    if (since !== null && since > 14) {
      notes.push(`Your letter date is ${since} days after the denial notice date. The federal appeal window is 14 days after the servicer provides its decision, so the appeal right may have passed. You can still send this as a request for reconsideration, and ask a HUD-approved counselor about reapplying.`);
    } else if (since !== null && since >= 0) {
      notes.push(`Your letter date is ${since} day${since === 1 ? '' : 's'} after the denial notice date. The federal window is 14 days after the servicer provides its decision, so send it right away by a trackable method.`);
    }
    const gap = daysBetween(input.completeAppDate, input.saleDate);
    if (gap !== null && gap < 90) {
      notes.push(`Your complete application date is ${gap < 0 ? 'after' : `${gap} days before`} the sale date. The federal appeal right generally requires a complete application received 90 days or more before a scheduled sale, so the servicer may say no appeal is available. The letter still asks for a review.`);
    }
  }
  return notes;
}

// ---------------------------------------------------------------------------
// Letter assembly
// ---------------------------------------------------------------------------

export interface BuiltLetter {
  text: string;
  /** Labels of the blanks still showing as [bracketed prompts]. */
  missing: string[];
}

const clean = (s: string | undefined) => (s ?? '').replace(/\r\n/g, '\n').trim();
/** Collapse a free-text answer onto one paragraph line and end it with a period. */
const sentence = (s: string) => {
  const t = clean(s).replace(/\s*\n+\s*/g, ' ');
  return /[.!?]["'”’)]?$/.test(t) ? t : `${t}.`;
};

export function buildLetter(kind: LetterKind, raw: LetterInput): BuiltLetter {
  const input: LetterInput = { ...EMPTY_INPUT, ...raw };
  const missing: string[] = [];
  /** The value, or a visible bracketed prompt that is recorded as missing. */
  const f = (value: string, prompt: string) => {
    const v = clean(value);
    if (v) return v;
    if (!missing.includes(prompt)) missing.push(prompt);
    return `[${prompt}]`;
  };
  const fSentence = (value: string, prompt: string) => (clean(value) ? sentence(value) : f('', prompt));
  const fDate = (iso: string, prompt: string) => f(formatLongDate(iso), prompt);

  const two = !!clean(input.borrower2);
  const v = (one: string, many: string) => (two ? many : one);
  const I = v('I', 'We');
  const i = v('I', 'we');
  const my = v('my', 'our');
  const My = v('My', 'Our');
  const me = v('me', 'us');
  const am = v('I am', 'we are');
  const Am = v('I am', 'We are');
  // Keep canned first-person sentences consistent with the chosen voice.
  const voice = (s: string) =>
    two
      ? s
          .replace(/\bI am\b/g, 'we are')
          .replace(/\bI was\b/g, 'we were')
          .replace(/\bI\b/g, 'we')
          .replace(/\bmy\b/g, 'our')
          .replace(/\bMy\b/g, 'Our')
          .replace(/\bme\b/g, 'us')
      : s;
  const cap = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

  const b1 = f(input.borrower1, 'Your full name');
  const b2 = clean(input.borrower2);
  const names = two ? `${b1} and ${b2}` : b1;
  const property = f(input.propertyAddress, 'Property address');
  const fromAddress = clean(input.mailingAddress) || property;

  const header: string[] = [fDate(input.letterDate, 'Date')];
  header.push('');
  header.push(names);
  header.push(...fromAddress.split('\n').map((l) => l.trim()).filter(Boolean));
  header.push(`Phone: ${f(input.phone, 'Your phone number')}`);
  if (clean(input.email)) header.push(`Email: ${clean(input.email)}`);
  header.push('');

  const attn: Record<LetterKind, string> = {
    hardship: 'Attn: Loss Mitigation Department',
    quote: 'Attn: Payoff and Reinstatement Department',
    rfi: '',
    postpone: 'Attn: Loss Mitigation and Foreclosure Departments',
    appeal: 'Attn: Loss Mitigation Appeals',
  };
  header.push(f(input.servicerName, 'Servicer name'));
  if (attn[kind]) header.push(attn[kind]);
  header.push(...f(input.servicerAddress, kind === 'rfi' ? 'Servicer’s designated address for notices of error and information requests' : 'Servicer mailing address').split('\n').map((l) => l.trim()).filter(Boolean));

  const subjects: Record<LetterKind, string> = {
    hardship: 'Hardship letter and request for loss mitigation review',
    quote:
      input.quoteType === 'reinstatement'
        ? 'Written request for a reinstatement quote'
        : input.quoteType === 'payoff'
          ? 'Written request for a payoff statement'
          : 'Written request for a reinstatement quote and payoff statement',
    rfi:
      input.rfiMode === 'noe'
        ? 'Qualified written request: notice of error under 12 CFR 1024.35'
        : input.rfiMode === 'both'
          ? 'Qualified written request: request for information under 12 CFR 1024.36 and notice of error under 12 CFR 1024.35'
          : 'Qualified written request: request for information under 12 CFR 1024.36',
    postpone: 'Request to postpone sheriff sale while loss mitigation review is pending',
    appeal: 'Appeal of loan modification denial under 12 CFR 1024.41(h)',
  };
  const re: string[] = [`Re: ${subjects[kind]}`, `Borrower${two ? 's' : ''}: ${names}`, `Loan number: ${f(input.loanNumber, 'Loan number')}`, `Property address: ${property}`];
  if (kind === 'postpone') {
    re.push(`Foreclosure docket number: ${f(input.docketNumber, 'Docket number from your court papers, e.g. F-012345-25')}`);
    re.push(`Scheduled sheriff sale date: ${fDate(input.saleDate, 'Sheriff sale date')}`);
  } else if (clean(input.docketNumber)) {
    re.push(`Foreclosure docket number: ${clean(input.docketNumber)}`);
  }

  const body: string[] = [];
  const list = (items: string[]) => items.map((t, n) => `${n + 1}. ${t}`).join('\n');
  let cc: string[] = [];

  if (kind === 'hardship') {
    const reason = HARDSHIP_REASONS.find((r) => r.id === input.hardshipReason);
    const what =
      reason && reason.id !== 'other'
        ? `${cap(voice(reason.phrase))}.`
        : reason
          ? `${I} experienced the following hardship: ${fSentence(input.hardshipOther, 'Describe your hardship')}`
          : `${f('', 'Choose the reason for your hardship')}.`;
    const req = LOSS_MIT_REQUESTS.find((r) => r.id === input.lossMitRequest);
    body.push('Dear Loss Mitigation Department:');
    body.push(
      `${Am} writing to explain the hardship that has made it difficult to keep up with ${my} mortgage payments and to ask for your help. ${what} This hardship began in ${f(input.hardshipStart, 'Month and year it began, e.g. March 2026')}.`
    );
    body.push(`What changed: ${fSentence(input.hardshipChanged, 'What changed, in your own words: for example, the income or expense that changed and by how much')}`);
    let income = `${My} current income situation: ${fSentence(input.incomeNow, 'Your current income: who in the household earns what, and from what source')}`;
    if (input.hardshipDuration === 'temporary') income += ` ${I} expect this hardship to be temporary.`;
    if (input.hardshipDuration === 'long') income += ` ${I} expect this hardship to continue, so ${am} asking for a solution that fits ${my} income now.`;
    body.push(income);
    body.push(
      `${I} respectfully ask to be considered for ${req ? voice(req.ask) : f('', 'What you are asking for')}. Please also review ${me} for all loss mitigation options available to ${me}.`
    );
    body.push(fSentence(input.commitment, 'A sentence on your commitment, in your own words'));
    const helpers = HARDSHIP_HELPERS.filter((h) => input.hardshipHelpers.includes(h.id)).map((h) => cap(voice(h.text)));
    if (input.enclosures) helpers.unshift(`${I} have enclosed copies of documents that support the information in this letter.`);
    if (helpers.length) body.push(helpers.join(' '));
    body.push('Thank you for your time and consideration.');
  }

  if (kind === 'quote') {
    const want = input.quoteType === 'reinstatement' || input.quoteType === 'payoff' ? input.quoteType : 'both';
    const asOf = fDate(input.goodThrough, 'The date the figures should be good through');
    const items: string[] = [];
    if (want !== 'payoff') {
      items.push(
        `Reinstatement quote: the total amount needed to bring the loan current (reinstate it) as of ${asOf}, itemized to show missed principal and interest, escrow, late charges, foreclosure attorney fees and costs, property inspection or preservation fees, and any other fees or charges, including which of these amounts are estimates.`
      );
    }
    if (want !== 'reinstatement') {
      items.push(
        `Payoff statement: an accurate statement of the total outstanding balance that would be required to pay the loan in full as of ${asOf}, including the daily interest amount after that date.`
      );
    }
    body.push('Dear Sir or Madam:');
    body.push(`${I} request the following in writing for the loan referenced above:\n\n${list(items)}`);
    body.push(`For ${want === 'both' ? 'each' : 'the'} figure, please tell ${me} the date through which it is good, the acceptable forms of payment, and exactly where and how funds must be sent.`);
    if (want !== 'reinstatement') {
      body.push(
        'Regulation Z, 12 CFR 1026.36(c)(3), requires a servicer to send an accurate payoff statement within a reasonable time after receiving a written request, and in most cases no more than seven business days after the request.'
      );
    }
    const sale = formatLongDate(input.saleDate);
    body.push(
      sale
        ? `A sheriff sale is currently scheduled for ${sale}. Please send ${want === 'both' ? 'these figures' : 'this figure'} as soon as possible.`
        : `Please send ${want === 'both' ? 'these figures' : 'this figure'} as soon as possible.`
    );
    body.push(`Please send ${want === 'both' ? 'them' : 'it'} to ${me} at the mailing address above${clean(input.email) ? ` or by email to ${clean(input.email)}` : ''}. Thank you.`);
  }

  if (kind === 'rfi') {
    const mode = input.rfiMode === 'noe' || input.rfiMode === 'both' ? input.rfiMode : 'rfi';
    body.push('Dear Sir or Madam:');
    body.push(
      `This letter is a qualified written request under the Real Estate Settlement Procedures Act (RESPA), 12 U.S.C. 2605(e), and Regulation X. It includes ${my} name${two ? 's' : ''}, ${my} loan number, and the property address so you can identify the account.`
    );
    if (mode !== 'noe') {
      const items = RFI_ITEMS.filter((r) => input.rfiItems.includes(r.id)).map((r) => cap(voice(r.text)));
      if (clean(input.rfiOther)) items.push(sentence(input.rfiOther));
      body.push(
        `Request for information (12 CFR 1024.36). Please provide the following information about ${my} loan:\n\n${items.length ? list(items) : f('', 'List the information you are requesting')}`
      );
    }
    if (mode !== 'rfi') {
      body.push(
        `Notice of error (12 CFR 1024.35). ${I} believe the following error has occurred: ${fSentence(input.errorDescription, 'Describe the error: what happened, the dates, and the amounts')}`
      );
      body.push(
        `${I} ask that you correct it as follows: ${fSentence(input.errorCorrection, 'What you want the servicer to do to fix it')} If you conclude that no error occurred, please explain the reasons in writing and send ${me} copies of the documents you relied on, as 12 CFR 1024.35(e) provides.`
      );
      body.push(
        'Under 12 CFR 1024.35(i), please do not report adverse information to any consumer reporting agency about any payment that is the subject of this notice for 60 days after you receive it.'
      );
    }
    const timing: string[] = [
      'Regulation X generally requires a servicer to acknowledge a notice of error or request for information in writing within five business days of receiving it.',
    ];
    if (mode !== 'noe') {
      timing.push(
        input.rfiItems.includes('owner')
          ? 'It generally requires a response within 10 business days to a request for the identity and contact information of the owner of the loan, and within 30 business days for other information requests.'
          : 'It generally requires a response within 30 business days for an information request.'
      );
    }
    if (mode !== 'rfi') {
      timing.push(
        input.errorType === 'payoff'
          ? 'For an error about a payoff balance, it generally requires a response within seven business days.'
          : input.errorType === 'foreclosure'
            ? 'For an error about moving for judgment or an order of sale, or conducting a sale, while a complete loss mitigation application is pending, it generally requires a response before the foreclosure sale or within 30 business days, whichever is earlier.'
            : 'For a notice of error, it generally requires a response within 30 business days.'
      );
    }
    const extendable =
      (mode !== 'noe' && (input.rfiItems.some((id) => id !== 'owner') || !!clean(input.rfiOther))) ||
      (mode !== 'rfi' && input.errorType !== 'payoff' && input.errorType !== 'foreclosure');
    if (extendable) {
      timing.push(`The 30-business-day period may be extended once by 15 business days if you notify ${me} in writing, with the reasons, before it ends.`);
    }
    body.push(timing.join(' '));
    body.push(`Please send your written response to ${me} at the mailing address above. Thank you.`);
  }

  if (kind === 'postpone') {
    const gap = daysBetween(input.completeAppDate, input.saleDate);
    const received = fDate(input.completeAppDate, 'Date the servicer received your complete application');
    body.push('Dear Sir or Madam:');
    body.push(
      `${I} ask that you postpone the sheriff sale of the property above, currently scheduled for ${fDate(input.saleDate, 'Sheriff sale date')}, while ${my} loss mitigation application is under review.`
    );
    body.push(`${My} records show that you received ${my} complete loss mitigation application on ${received}.`);
    if (gap !== null && gap <= 37) {
      body.push(
        `Even though ${my} complete application may have been received 37 or fewer days before the sale, ${i} ask that you postpone the sale so that ${my} application can be fully evaluated for all available options.`
      );
    } else {
      body.push(
        'Under Regulation X, 12 CFR 1024.41(g), if a servicer receives a complete loss mitigation application after the foreclosure was filed but more than 37 days before a foreclosure sale, the servicer may not move for a foreclosure judgment or order of sale, or conduct a foreclosure sale, unless (1) it has sent a written notice that the borrower is not eligible for any loss mitigation option and any appeal is not available, was not requested in time, or was denied; (2) the borrower rejects all options offered; or (3) the borrower fails to perform under a loss mitigation agreement.'
      );
      body.push(
        `If ${my} complete application was received more than 37 days before the sale, ${i} ask that you instruct your foreclosure counsel to postpone the sale, as the official interpretation of that rule describes, until the review and any appeal are finished.`
      );
    }
    body.push(
      `Please confirm in writing, before the sale date, whether the sale will be postponed and to what date, and tell ${me} the current status of ${my} application, including anything else you need from ${me}.`
    );
    body.push(`A copy of this letter is being sent to the plaintiff’s foreclosure attorney named below. Thank you.`);
    cc = [`cc: ${f(input.attorneyName, 'Plaintiff’s foreclosure attorney or law firm, from your court papers')}`];
    cc.push(...f(input.attorneyAddress, 'Attorney’s address').split('\n').map((l) => `    ${l.trim()}`).filter((l) => l.trim()));
  }

  if (kind === 'appeal') {
    body.push('Dear Loss Mitigation Appeals Department:');
    body.push(
      `${I} appeal your decision, in the notice dated ${fDate(input.denialDate, 'Date on the denial notice')}, denying ${my} application for a loan modification. This appeal is made under Regulation X, 12 CFR 1024.41(h).`
    );
    body.push(`The reason given in your notice was: ${fSentence(input.denialReason, 'The reason the denial notice gave, in its own words')}`);
    const grounds = APPEAL_GROUNDS.filter((g) => input.appealGrounds.includes(g.id)).map((g) => cap(voice(g.text)));
    body.push(
      `${I} believe this decision is wrong for the following reason${grounds.length > 1 ? 's' : ''}:${grounds.length ? `\n\n${list(grounds)}\n\n` : ' '}${fSentence(input.appealExplanation, 'Explain the mistake: the correct figures or facts, and the documents that show them')}`
    );
    if (input.requestNpv || input.appealGrounds.includes('npv')) {
      body.push(
        `If the denial was based on a net present value (NPV) calculation, please send ${me} the inputs used in that calculation. The official interpretation of 12 CFR 1024.41(d) (comment 41(d)-2) states that a denial notice based on an NPV calculation must include those inputs. ${I} ask that the review be based on corrected inputs.`
      );
    }
    if (input.appealGrounds.includes('investor')) {
      body.push(
        `If the denial was based on a requirement of the owner of ${my} loan, please identify the owner or assignee and the specific requirement, as the official interpretation of 12 CFR 1024.41(d) (comment 41(d)-1) describes.`
      );
    }
    body.push(
      `Regulation X requires that an appeal be reviewed by different personnel than those responsible for evaluating the application (12 CFR 1024.41(h)(3)) and that the servicer send a written decision within 30 days of the appeal (12 CFR 1024.41(h)(4)). Please send ${me} your decision in writing.`
    );
    body.push(
      `If ${my} complete application was received more than 37 days before a foreclosure sale, 12 CFR 1024.41(g) generally prohibits moving for a foreclosure judgment or order of sale, or conducting a sale, while this appeal is pending. Please confirm in writing that no sale will take place while the appeal is under review.`
    );
    if (input.enclosures) body.push(`${I} have enclosed documents that support this appeal.`);
    body.push('Thank you.');
  }

  const sig: string[] = ['Sincerely,', '', '', '______________________________', b1];
  if (two) sig.push('', '', '______________________________', b2);

  const parts = [header.join('\n'), re.join('\n'), body.join('\n\n'), sig.join('\n')];
  if (input.enclosures) parts.push('Enclosures');
  if (cc.length) parts.push(cc.join('\n'));
  return { text: parts.join('\n\n'), missing };
}
