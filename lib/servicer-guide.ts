/**
 * Shared, servicer-independent content for the /servicers/<slug>/ pages.
 * Legal statements mirror the sourced notes in lib/letters.ts (12 CFR
 * 1024.41, NJ Fair Foreclosure Act) and stay at "generally" strength; the
 * page footer tells readers a licensed NJ attorney confirms their case.
 */

export const OPTION_EXPLAINERS: Record<string, string> = {
  Forbearance:
    'Payments are paused or reduced for a set period. The skipped amount does not disappear; at the end it is handled through a repayment plan, a deferral or a modification.',
  'Repayment plan':
    'You pay the regular payment plus part of the past-due amount each month until you are caught up. Works when the hardship is over and income is back.',
  'Loan modification':
    'A permanent change to the loan, such as a longer term, a lower rate, or rolling the past-due amount into the balance, to reach a payment you can afford.',
  'Payment deferral':
    'Missed payments are moved to a separate balance that is due when the loan is paid off, the home is sold or the loan is refinanced.',
  'Partial claim (FHA)':
    'For FHA loans: HUD covers the past-due amount through a zero-interest second lien that is repaid when the home is sold or the loan is paid off.',
  Reinstatement:
    'Paying the full past-due amount, with fees, in one payment. New Jersey law generally lets a homeowner cure the default up to entry of final judgment.',
  'Short sale':
    'Selling the home for less than the amount owed, with the servicer’s approval. It ends the foreclosure without an auction.',
  'Deed in lieu of foreclosure':
    'Signing the home over to the loan owner to end the foreclosure. Usually considered after a short sale has been tried.',
};

export const CALL_PREP = [
  'Your loan number and most recent statement.',
  'Your total monthly household income before and after taxes.',
  'Your main monthly expenses (a rough list is fine).',
  'What caused the hardship, when it started, and whether it is over.',
  'What monthly payment you could realistically make now.',
];

export const DOCUMENTS = [
  'The servicer’s own assistance application, every page, signed and dated.',
  'A short hardship letter: what happened, when, and what has changed.',
  'Proof of income: usually the last 30 to 60 days of pay stubs, or benefit and pension letters.',
  'The last two months of bank statements, all pages.',
  'Your most recent federal tax return (often two years if self-employed).',
  'A signed IRS Form 4506-C if the servicer asks for it.',
];

export const CALL_SCRIPT =
  'I’m behind (or about to fall behind) on my mortgage because of [the hardship]. I’d like to apply for mortgage assistance. Please tell me every document you need for a complete application and the deadline to send it, and give me a reference number for this call.';

export const CALL_QUESTIONS = [
  'Who owns my loan (the investor)? The owner’s rules decide which options exist.',
  'Is a foreclosure sale date scheduled, and if so, when?',
  'Who is my single point of contact, and how do I reach them directly?',
  'Where do I send documents, and how will you confirm you received them?',
];

/** Blog posts that go deeper on a specific servicer (lib/blog-servicers.ts). */
export const SERVICER_BLOG: Record<string, string> = {
  'mr-cooper': 'behind-on-mortgage-mr-cooper-nj',
  'wells-fargo': 'behind-on-mortgage-wells-fargo-nj',
  chase: 'behind-on-mortgage-chase-nj',
  'bank-of-america': 'behind-on-mortgage-bank-of-america-nj',
  'freedom-mortgage': 'behind-on-mortgage-freedom-mortgage-nj',
  pennymac: 'behind-on-mortgage-pennymac-nj',
  newrez: 'behind-on-mortgage-newrez-shellpoint-nj',
  shellpoint: 'behind-on-mortgage-newrez-shellpoint-nj',
  sps: 'behind-on-mortgage-sps-nj',
  'phh-onity': 'behind-on-mortgage-phh-ocwen-nj',
  carrington: 'behind-on-mortgage-carrington-nj',
};

/** Name without a trailing parenthetical, for titles: "Onity Mortgage (formerly PHH)" -> "Onity Mortgage". */
export function shortName(name: string): string {
  return name.replace(/\s*\(.*\)\s*$/, '').trim();
}

export function domainOf(url: string | null): string | null {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}
