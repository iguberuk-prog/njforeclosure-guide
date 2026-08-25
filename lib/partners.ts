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
   * Deliberately narrowed to a single value.
   *
   * This site takes no referral fees, no commissions, and no advertising money
   * from anything it recommends, and says so on every page. Narrowing the type
   * means that promise cannot be quietly broken by editing one entry: adding a
   * paid destination would be a compile error, forcing whoever does it to also
   * change the sitewide disclosures. That is the point.
   *
   * If the model ever changes, widen this type AND update every disclosure
   * surface listed in DISCLOSURE_SURFACES below. Not one without the other.
   */
  compensation: 'no-compensation';
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
  // PARTNER SITES. Every entry below is a real, verified destination.
  // Never add a placeholder here. If a partnership is not signed and the
  // details are not verified against the partner's live site, it does not
  // belong in this file at all.
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
    compensation: 'no-compensation',
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
    compensation: 'no-compensation',
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
    compensation: 'no-compensation',
    active: true,
  },
  {
    id: 'clik-offer',
    name: 'Clik Offer',
    url: 'https://clikoffer.com',
    headline: 'Local New Jersey cash buyer that can close in as little as 7 days.',
    description:
      'Clik Offer is a local cash homebuyer working in Hillsborough, Bridgewater, Somerset County, and across New Jersey. They buy as-is with no repairs, no commissions, and state they cover typical closing costs and will clear the property out if needed. They present an offer promptly, often during the first conversation, and state they can close in as little as 7 days while accommodating a longer timeline if you need one.',
    kind: 'sell-fast',
    bestFor: [
      'A sale date is close and you need to move now',
      'Inherited or probate property you cannot maintain',
      'Difficult tenants or a property that has sat empty',
      'Repairs and code violations are piling up',
    ],
    timeline: 'Offer often on the first call, closing in as little as 7 days',
    match: {
      goals: ['sell', 'unsure'],
      timelines: ['asap'],
    },
    compensation: 'no-compensation',
    active: true,
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
  // -------------------------------------------------------------------------
  // REMOVED: Corcoran Sawyer Smith x Builders Resource Center.
  //
  // This site states plainly that it has no affiliation with anything it
  // recommends. The people running this site are affiliated with that
  // brokerage, so recommending it would have made that statement false.
  // Removed rather than disclosed, because the independence claim is the
  // whole point of this resource.
  //
  // Homeowners who need a valuation or a market listing are now pointed at
  // the CATEGORY of help and told how to choose an agent themselves, which
  // is in getMarketListingGuidance() below.
  // -------------------------------------------------------------------------

  // ---------------------------------------------------------------------------
  // RESERVED SLOT: foreclosure defense attorney.
  //
  // Deliberately commented out rather than left as an inactive object, so the
  // placeholder text never reaches the client JavaScript bundle. Uncomment,
  // replace every CONFIRM value with the real firm's details, and it goes live.
  //
  // On compensation: leave 'no-compensation'. In New Jersey, as in nearly every
  // state, lawyers are barred from paying non-lawyers for client referrals and
  // from splitting fees with them. If a payment arrangement is ever proposed,
  // have a New Jersey attorney review it first, and update the field to reflect
  // reality rather than leaving it inaccurate.
  //
  // {
  //   id: 'attorney-partner',
  //   name: 'CONFIRM: firm name',
  //   url: 'CONFIRM: firm website',
  //   headline: 'CONFIRM: one plain sentence describing what they do.',
  //   description:
  //     'CONFIRM: what this firm actually handles, in plain language. No outcome
  //      guarantees, no success rates, nothing that cannot be substantiated.',
  //   kind: 'keep-home',
  //   bestFor: [
  //     'CONFIRM: who this firm is right for',
  //     'CONFIRM: e.g. you were served and must respond in court',
  //     'CONFIRM: e.g. you want to negotiate a modification',
  //   ],
  //   timeline: 'CONFIRM: typical consultation or response timing',
  //   match: {
  //     situations: ['foreclosure', 'behind', 'financial'],
  //     goals: ['keep', 'unsure'],
  //     // Add `counties` if the firm does not cover the whole state.
  //   },
  //   compensation: 'no-compensation',
  //   active: true,
  // },
  // ---------------------------------------------------------------------------
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
        // Specificity bonus: a partner who serves only this one timeline is a
        // specialist for it, and should outrank a generalist who merely
        // overlaps. This is what puts a 7-day closer above a 10-to-60-day one
        // when the homeowner says they need to move immediately.
        if (m.timelines.length === 1) {
          score += 2;
          if (answers.timeline === 'asap') {
            reasons.push('Built for the tightest deadlines');
          }
        }
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
  'no-compensation':
    'We are not paid by them, not affiliated with them, and receive nothing if you contact them. Listed only because it may help you.',
};

/**
 * The single independence statement. Every page that recommends anything reads
 * from this, so the claim cannot drift between pages.
 */
export const INDEPENDENCE_STATEMENT =
  'Every company listed on this site is independently owned and operated and has no affiliation with NJ Foreclosure Guide. We are not paid by any of them. No referral fees, no commissions, no advertising money, and no ownership stake. We have nothing to gain from which option you choose, which is the entire reason this resource exists.';

/**
 * How a recommendation is actually produced.
 *
 * This wording is deliberate and should not be softened into anything that
 * implies outcomes, success rates, or the experience of past homeowners. This
 * site is new and has no body of client results to draw on. Claiming otherwise
 * would be an unsubstantiated performance claim, which is the exact category of
 * content that was stripped out of this site once already: invented review
 * counts, invented sales volume, an invented star rating.
 *
 * When there IS real outcome data, gathered with consent and actually counted,
 * this constant can change and a substantiated results section can be added.
 * Not before.
 */
export const RECOMMENDATION_BASIS =
  'Recommendations come from matching your answers against what each company publicly states it handles: property condition, price range, service area, and how quickly it can close. We verify those details against each company\'s own website. Nothing is ranked by payment, because nobody pays us. These are starting points for your own comparison, not vetting, endorsement, or a prediction of what any company will offer you.';

/**
 * Why we do not publish outcome statistics. Shown wherever a visitor might
 * reasonably expect testimonials or success numbers and find none.
 */
export const NO_OUTCOME_DATA_NOTE =
  'We do not publish testimonials, star ratings, or success statistics. This resource is new and we have not helped enough homeowners to report honest numbers. When we have, we will publish what actually happened, including the cases that did not work out. Until then we would rather show you nothing than show you something we made up.';

/**
 * Every place the independence claim appears. If the compensation model ever
 * changes, all of these have to change together.
 */
export const DISCLOSURE_SURFACES = [
  'app/components/CallBand.tsx',
  'app/components/MarsNotice.tsx',
  'app/page.tsx',
  'app/quiz/page.tsx',
  'app/companies/page.tsx',
  'app/companies/*/page.tsx',
  'app/professionals/page.tsx',
  'app/privacy/page.tsx',
  'app/terms/page.tsx',
  'app/disclaimer/page.tsx',
  'public/llms.txt',
] as const;

/**
 * Guidance for someone who wants a traditional market listing.
 *
 * There is deliberately no brokerage recommended here. The site previously
 * pointed at a brokerage the operators are affiliated with, which contradicted
 * the independence claim, so it was removed. Homeowners get the criteria to
 * choose an agent themselves instead.
 */
export const MARKET_LISTING_GUIDANCE = {
  title: 'Listing on the open market',
  summary:
    'If you have equity and enough time before a sale date, listing normally almost always nets more than a cash offer, even after commission. We do not recommend a specific brokerage and we are not paid by any agent.',
  howToChoose: [
    'Interview at least three agents and ask each for a written comparative market analysis, not a verbal estimate.',
    'Ask directly how many foreclosure or pre-foreclosure sales they have closed and how they handled the timeline.',
    'Ask what happens if the home does not sell before your sale date, and get the answer before you sign.',
    'Confirm the listing agreement length and how to cancel it. A short initial term protects you.',
    'Verify the license at the New Jersey Real Estate Commission before signing anything.',
  ],
  verifyUrl: 'https://www.nj.gov/dobi/division_rec/index.htm',
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
