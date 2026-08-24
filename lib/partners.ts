// PARTNER REGISTRY
// ---------------------------------------------------------------------------
// Add one partner per object. Set `active: true` only once the partnership is
// signed and the details below are verified. Nothing here should contain a
// claim you cannot substantiate (payout percentages, closing guarantees,
// "we buy at X% of market value") because those are exactly the claims that
// draw regulatory attention in distressed-property advertising.
// ---------------------------------------------------------------------------

export type Situation = 'foreclosure' | 'behind' | 'inherited' | 'financial';
export type Goal = 'keep' | 'sell' | 'unsure';
export type Timeline = 'asap' | 'weeks' | 'flexible' | 'no-rush';
export type OwnerType = 'homeowner' | 'investor' | 'heir' | 'mixed';
/** Physical condition of the property. Drives damage-specialist routing. */
export type Condition = 'none' | 'fire' | 'water' | 'mold' | 'major-repairs';

// What kind of help a destination provides. This drives ordering: help that
// lets someone KEEP the home is always offered before help that sells it.
export type PartnerKind =
  | 'keep-home'      // attorneys, modification/forbearance specialists
  | 'free-counsel'   // HUD-approved counseling, legal aid (never paid, always shown)
  | 'sell-fast'      // cash buyers
  | 'sell-market'    // agents, listing, short sale
  | 'investor';      // portfolio / rental focused

export interface Partner {
  id: string;
  name: string;
  /** External site that makes the offer or provides the service. */
  url: string;
  /** One plain sentence: what they actually do. */
  headline: string;
  description: string;
  kind: PartnerKind;
  /** Human-readable, shown on the card. Keep factual. */
  bestFor: string[];
  timeline?: string;
  /** Matching criteria. Omit a field to mean "no restriction". */
  match: {
    situations?: Situation[];
    goals?: Goal[];
    timelines?: Timeline[];
    ownerTypes?: OwnerType[];
    /** Property damage this partner specializes in. */
    conditions?: Condition[];
    /** County slugs, e.g. ['essex-county']. Omit for statewide. */
    counties?: string[];
  };
  /**
   * REQUIRED. Exact compensation relationship, shown to the homeowner on the
   * recommendation card. If you are paid, it says so, in plain words.
   */
  compensation: 'paid-referral' | 'paid-advertising' | 'no-compensation';
  /** Set true only when the agreement is signed and details are verified. */
  active: boolean;
}

export const PARTNERS: Partner[] = [
  // -------------------------------------------------------------------------
  // ALWAYS-ON, NEVER PAID. These exist so every homeowner sees at least one
  // route that earns us nothing. Do not remove and do not make these paid.
  // -------------------------------------------------------------------------
  {
    id: 'hud-counseling',
    name: 'HUD-Approved Housing Counselor',
    url: 'https://www.hud.gov/i_want_to/talk_to_a_housing_counselor',
    headline: 'Free, government-approved foreclosure counseling.',
    description:
      'HUD-approved counselors are free to speak with and are not selling anything. They can review your budget, explain your options, and in many cases contact your servicer with you. This is a good first call for almost any homeowner.',
    kind: 'free-counsel',
    bestFor: ['Anyone facing foreclosure', 'You want unbiased help first', 'You do not want to sell'],
    timeline: 'Usually same week',
    match: {},
    compensation: 'no-compensation',
    active: true,
  },
  {
    id: 'nj-foreclosure-mediation',
    name: 'New Jersey Foreclosure Mediation Program',
    url: 'https://www.njcourts.gov/self-help/foreclosure',
    headline: 'Court-run mediation for homeowners with a filed case.',
    description:
      'If a foreclosure complaint has been filed against you in New Jersey, the courts run a mediation program that brings you and your lender together with a neutral mediator. There is no cost to participate and you may qualify for free housing counseling and legal assistance alongside it.',
    kind: 'free-counsel',
    bestFor: ['A complaint has been filed', 'You want to keep the home', 'You want to negotiate with your lender'],
    timeline: 'Runs alongside your court case',
    match: { situations: ['foreclosure'] },
    compensation: 'no-compensation',
    active: true,
  },

  // -------------------------------------------------------------------------
  // YOUR PARTNER SITES. One object each. Copy this template.
  // Keep `active: false` until the agreement is signed and details verified.
  // -------------------------------------------------------------------------
  {
    id: 'fire-home-buyers',
    name: 'Fire Home Buyers',
    url: 'https://www.firehomebuyers.com',
    headline: 'Buys fire and smoke damaged homes in New Jersey, as-is, for cash.',
    description:
      'Fire Home Buyers purchases fire damaged property throughout New Jersey in whatever condition it is in, so there are no repairs, no cleanup, and no showings. You request an offer online, they respond within 24 hours, and you pick the closing date. If you are behind on the mortgage and the home was damaged, an insurance settlement plus a sale can sometimes clear the loan balance entirely.',
    kind: 'sell-fast',
    bestFor: [
      'Fire or smoke damage',
      'Repairs would cost more than you can carry',
      'You want to close on your own timeline',
      'Insurance settlement may cover the loan balance',
    ],
    timeline: 'Offer within 24 hours, closing date is your choice',
    match: {
      conditions: ['fire'],
      goals: ['sell', 'unsure'],
    },
    compensation: 'paid-referral',
    active: true,
  },
  {
    id: 'partner-market-sale',
    name: 'Partner Site 2',
    url: 'https://example.com',
    headline: 'Traditional or short sale with a licensed agent.',
    description:
      'Replace with the real description. Use this slot for a partner who lists on the open market or handles short sales, where the homeowner has more time and wants a higher price.',
    kind: 'sell-market',
    bestFor: ['You have some time', 'You want market value', 'You may owe more than the home is worth'],
    timeline: 'Confirm with partner',
    match: {
      situations: ['behind', 'financial', 'inherited'],
      goals: ['sell', 'unsure'],
      timelines: ['weeks', 'flexible', 'no-rush'],
    },
    compensation: 'paid-referral',
    active: false,
  },
  {
    id: 'partner-investor',
    name: 'Partner Site 3',
    url: 'https://example.com',
    headline: 'Buyer focused on rental and investment property.',
    description:
      'Replace with the real description. Use this slot for a partner who works with landlords, multi-unit, or tenant-occupied property.',
    kind: 'investor',
    bestFor: ['Rental or investment property', 'Tenants in place', 'Multiple properties'],
    timeline: 'Confirm with partner',
    match: {
      goals: ['sell', 'unsure'],
      ownerTypes: ['investor', 'mixed'],
    },
    compensation: 'paid-referral',
    active: false,
  },
  {
    id: 'partner-attorney',
    name: 'Partner Site 4',
    url: 'https://example.com',
    headline: 'Foreclosure defense and loan modification attorney.',
    description:
      'Replace with the real firm. IMPORTANT: see the note at the bottom of this file about attorney referral fees before setting compensation to paid-referral.',
    kind: 'keep-home',
    bestFor: ['You want to keep the home', 'You were served with papers', 'You need to respond in court'],
    timeline: 'Confirm with partner',
    match: {
      situations: ['foreclosure', 'behind', 'financial'],
      goals: ['keep', 'unsure'],
    },
    compensation: 'no-compensation',
    active: false,
  },
];

export interface Answers {
  situation?: Situation;
  goal?: Goal;
  timeline?: Timeline;
  ownerType?: OwnerType;
  condition?: Condition;
  county?: string;
}

export interface Match {
  partner: Partner;
  score: number;
  reasons: string[];
}

/**
 * Rank destinations for one homeowner.
 *
 * Two rules are deliberately hard-coded and should not be made configurable:
 *
 *  1. If the homeowner wants to keep the home, keep-home and free options are
 *     ranked above anything that sells it. Someone who can save their house
 *     should never be steered into selling it because selling pays us.
 *
 *  2. At least one no-compensation option is always returned, so every
 *     homeowner sees a route that earns us nothing.
 */
export function matchPartners(answers: Answers): Match[] {
  const wantsToKeep = answers.goal === 'keep';

  const scored: Match[] = PARTNERS.filter((p) => p.active).map((partner) => {
    const m = partner.match;
    const reasons: string[] = [];
    let score = 0;
    let disqualified = false;

    if (m.situations && answers.situation) {
      if (m.situations.includes(answers.situation)) {
        score += 3;
        reasons.push('Works with your current stage');
      } else disqualified = true;
    }
    if (m.goals && answers.goal) {
      if (m.goals.includes(answers.goal)) {
        score += 3;
        reasons.push('Fits what you want to do with the home');
      } else disqualified = true;
    }
    if (m.timelines && answers.timeline) {
      if (m.timelines.includes(answers.timeline)) {
        score += 2;
        reasons.push('Matches your timeline');
      } else disqualified = true;
    }
    if (m.ownerTypes && answers.ownerType) {
      if (m.ownerTypes.includes(answers.ownerType)) {
        score += 1;
        reasons.push('Handles your type of property');
      } else disqualified = true;
    }
    if (m.conditions && answers.condition) {
      if (m.conditions.includes(answers.condition)) {
        score += 6;
        reasons.push('Specializes in your type of property damage');
      } else disqualified = true;
    }
    if (m.counties && m.counties.length > 0 && answers.county) {
      if (m.counties.includes(answers.county)) {
        score += 1;
        reasons.push('Serves your county');
      } else disqualified = true;
    }

    // Rule 1: never rank a sale above keeping the home for someone who
    // said they want to keep it.
    if (wantsToKeep) {
      if (partner.kind === 'keep-home' || partner.kind === 'free-counsel') score += 10;
      else score -= 5;
    }

    // Free, unpaid help always surfaces near the top.
    if (partner.kind === 'free-counsel') score += 4;

    return { partner, score: disqualified ? -1 : score, reasons };
  });

  const eligible = scored.filter((s) => s.score >= 0).sort((a, b) => b.score - a.score);

  // Rule 2: guarantee at least one unpaid option is present.
  const hasUnpaid = eligible.some((e) => e.partner.compensation === 'no-compensation');
  if (!hasUnpaid) {
    const fallback = PARTNERS.find((p) => p.id === 'hud-counseling');
    if (fallback) {
      eligible.push({
        partner: fallback,
        score: 0,
        reasons: ['Free, unbiased help available to any homeowner'],
      });
    }
  }

  return eligible;
}

export const COMPENSATION_LABEL: Record<Partner['compensation'], string> = {
  'paid-referral': 'We receive a referral fee if you work with them. You are never charged.',
  'paid-advertising': 'They pay a flat advertising fee to appear here. You are never charged.',
  'no-compensation': 'We receive nothing if you contact them. Listed because it may help you.',
};

// ---------------------------------------------------------------------------
// BEFORE YOU SET ANY PARTNER TO active: true — read this.
//
// This is not legal advice. Have a New Jersey attorney review the arrangement.
//
// 1. ATTORNEY REFERRAL FEES. In New Jersey, as in essentially every US
//    jurisdiction, lawyers are barred from sharing fees with non-lawyers and
//    from paying for client referrals. An attorney paying you per lead is a
//    problem for the attorney and can void the arrangement. A flat advertising
//    fee is treated differently from a per-client fee. Get this reviewed before
//    accepting money from any law firm.
//
// 2. MARS / REGULATION O (12 CFR Part 1015). Federal rules govern anyone
//    offering "mortgage assistance relief services." They require specific
//    disclosures, including that you are not associated with the government or
//    the lender and that the lender may not agree to change the loan. They also
//    restrict collecting fees before a result is delivered. A site organized
//    around stopping foreclosure can fall within this.
//
// 3. RESPA SECTION 8. Prohibits kickbacks and fee splits for referring
//    settlement services on federally related mortgage loans. Most relevant if
//    you refer to lenders, title, or mortgage specialists.
//
// 4. REAL ESTATE LICENSING. Being compensated for bringing a buyer and seller
//    together can be brokerage activity requiring a license, depending on how
//    the payment is structured. Flat advertising fees are generally safer than
//    per-transaction compensation.
//
// 5. NEW JERSEY FORECLOSURE RESCUE PROTECTIONS. New Jersey has consumer
//    protection law aimed specifically at foreclosure rescue and distressed
//    property purchases. Confirm how it applies to a referral model.
// ---------------------------------------------------------------------------
