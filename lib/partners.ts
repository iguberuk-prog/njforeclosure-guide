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
/** Approximate value band. Drives price-tier routing (e.g. luxury specialists). */
export type HomeValue = 'under250k' | '250-500k' | '500-800k' | '800k-1.5m' | 'over1.5m';

// What kind of help a destination provides. This drives ordering: help that
// lets someone KEEP the home is always offered before help that sells it.
export type PartnerKind =
  | 'keep-home'      // attorneys, modification/forbearance specialists
  | 'free-counsel'   // HUD-approved counseling, legal aid (never paid, always shown)
  | 'sell-fast'      // cash buyers
  | 'sell-market'    // agents, listing, short sale
  | 'investor'       // portfolio / rental focused
  | 'donate';        // nonprofit property donation, not a sale

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
  /**
   * Optional badge naming OUR program this destination sits inside. Lets us
   * position a partner (e.g. as a luxury offering) without asking them to
   * change anything on their own site.
   */
  programBadge?: string;
  /**
   * Shown immediately above the outbound link. Use it to tell the homeowner
   * what they will actually see when they land, so a general-audience partner
   * site does not feel like a mismatch after specialized framing on our side.
   */
  handoffNote?: string;
  /** Matching criteria. Omit a field to mean "no restriction". */
  match: {
    situations?: Situation[];
    goals?: Goal[];
    timelines?: Timeline[];
    ownerTypes?: OwnerType[];
    /** Property damage this partner specializes in. */
    conditions?: Condition[];
    /** Price bands this partner works in. */
    homeValues?: HomeValue[];
    /** County slugs, e.g. ['essex-county']. Omit for statewide. */
    counties?: string[];
  };
  /**
   * REQUIRED. Exact compensation relationship, shown to the homeowner on the
   * recommendation card. If you are paid, it says so, in plain words.
   */
  compensation: 'paid-referral' | 'paid-advertising' | 'no-compensation' | 'affiliated';
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
    id: 'nj-offer',
    name: 'NJ Offer',
    url: 'https://www.njoffer.com',
    headline: 'Fast cash offer on a New Jersey home, with a closing date you choose.',
    description:
      'NJ Offer buys homes across all twenty-one New Jersey counties without listing, showings, or repair work. You request an offer online, they respond within 24 hours, and you pick a closing date between 10 and 60 days out. When a sale date is approaching, that certainty is usually worth more than squeezing out the last few percent of price.',
    kind: 'sell-fast',
    bestFor: [
      'You need to sell quickly',
      'A sheriff sale date is approaching',
      'Repairs or showings are not realistic',
      'You want a firm closing date rather than a maybe',
    ],
    timeline: 'Offer within 24 hours, closing 10 to 60 days',
    match: {
      // General-market cash buyer. No price restriction: speed is the fit here,
      // not property value.
      goals: ['sell', 'unsure'],
      timelines: ['asap', 'weeks', 'flexible'],
    },
    compensation: 'paid-referral',
    active: true,
  },
  {
    id: 'private-sale-group',
    name: 'Private Sale Group',
    url: 'https://privatesalegroup.com',
    headline: 'Discreet off-market sale for higher-value homes, without listing publicly.',
    description:
      'Private Sale Group handles luxury and high-value property as an off-market transaction rather than a public listing. No sign, no open houses, no MLS exposure. They evaluate the property privately, present it to a network of qualified buyers, and let you set the timeline and terms. They state there are no commissions and no repairs required, and they are active in high-value New Jersey neighborhoods including Short Hills, Summit, Westfield, Chatham, and Madison.',
    kind: 'sell-market',
    bestFor: [
      'Higher-value or luxury property',
      'Privacy matters as much as price',
      'You want to avoid commissions and repair credits',
      'You would rather not announce the sale to the market',
    ],
    timeline: 'You set the timeline and terms',
    programBadge: 'Premium Property Program',
    match: {
      // Their site cites a typical range starting near $600k. Scoped here to
      // the $800k+ luxury tier; add '500-800k' to widen.
      homeValues: ['800k-1.5m', 'over1.5m'],
      goals: ['sell', 'unsure'],
    },
    compensation: 'paid-referral',
    active: true,
  },
  {
    id: 'click-offer',
    name: 'ClickOffer',
    url: 'https://www.clickoffer.com',
    headline: 'Very fast cash close, typically in under 7 days.',
    description:
      'ClickOffer is positioned for the most urgent situations, where a sale needs to close in days rather than weeks. Replace this description with their verified process once the site is live.',
    kind: 'sell-fast',
    bestFor: [
      'A sale date is days away',
      'You need the fastest possible close',
      'Certainty matters more than price',
    ],
    timeline: 'Under 7 days',
    match: {
      goals: ['sell', 'unsure'],
      timelines: ['asap'],
    },
    compensation: 'paid-referral',
    // INACTIVE: clickoffer.com currently redirects to a GoDaddy domain-for-sale
    // parking page rather than a live site. Do not activate until it resolves
    // to a real, working site, or homeowners will land on a domain listing.
    active: false,
  },
  {
    id: 'urbni',
    name: 'Urbni',
    url: 'https://www.urbni.org',
    headline: 'Nonprofit that accepts donated homes and land, and turns them into affordable housing.',
    description:
      'Urbni is a nonprofit that acquires vacant, abandoned, and tax-delinquent properties and restores them as affordable housing for veterans, seniors, people in recovery, and families leaving homelessness. If a property has become a burden you cannot carry, donating it can be a genuine alternative to letting it go to a sheriff sale, and land donations are tax-deductible. They state they handle the paperwork at no cost to you.',
    kind: 'donate',
    bestFor: [
      'A vacant, inherited, or unused property',
      'Repairs cost more than the property is worth',
      'You would rather it help someone than sit empty',
      'A vacant lot or unused parcel of land',
    ],
    timeline: 'They guide you through the donation process',
    match: {
      situations: ['inherited', 'financial'],
      goals: ['sell', 'unsure'],
      // Donation only makes sense when the property is a burden rather than an
      // asset. With real equity, selling nets the owner far more than a
      // deduction, so higher value bands are deliberately excluded.
      homeValues: ['under250k', '250-500k'],
    },
    compensation: 'no-compensation',
    active: true,
  },
  {
    id: 'brc-corcoran-sawyer-smith',
    name: 'Corcoran Sawyer Smith x Builders Resource Center',
    url: 'https://brcnj.com',
    headline: 'Licensed brokerage for a home valuation and a traditional listing on the open market.',
    description:
      'A full-service New Jersey brokerage headquartered in Livingston and working in every county, covering residential sales, land and development, and new construction. Start with a consultation and a valuation of your home. Knowing what the property is actually worth is the foundation of every other decision you make, because it tells you whether you have equity worth protecting, whether a short sale is even relevant, and whether listing beats a cash offer.',
    kind: 'sell-market',
    bestFor: [
      'You want to know what your home is really worth',
      'You have time to sell on the open market',
      'You want the highest likely price, not the fastest close',
      'Land, new construction, or development property',
    ],
    timeline: 'Consultation and valuation first, then a market listing',
    match: {
      goals: ['sell', 'unsure'],
      timelines: ['weeks', 'flexible', 'no-rush'],
    },
    compensation: 'affiliated',
    active: true,
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
  homeValue?: HomeValue;
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
    if (m.homeValues && answers.homeValue) {
      if (m.homeValues.includes(answers.homeValue)) {
        score += 5;
        reasons.push('Works in your price range');
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
  affiliated:
    'Common ownership: the people behind this guide are affiliated with this company. Disclosed so you can weigh the recommendation accordingly.',
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
