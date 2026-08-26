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
   * Deliberately narrow. Only two values are permitted.
   *
   * 'no-compensation' means exactly that: no referral fee, no commission, no
   * advertising money, no ownership, no connection of any kind.
   *
   * 'affiliated' means the people behind this guide have an ownership or
   * employment interest in that business, so they benefit if you use it. That
   * is a material connection and it must be disclosed at or before the
   * referral, on the card, on the page, and in the assessment results.
   *
   * There is deliberately no 'paid-referral' option. Adding one would be a
   * compile error, which forces whoever wants it to also rewrite every
   * disclosure surface in DISCLOSURE_SURFACES rather than quietly leaving
   * those pages saying something that is no longer true.
   */
  compensation: 'no-compensation' | 'affiliated';
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
  affiliated:
    'Related business: the people behind NJ Foreclosure Guide have an ownership interest in this company, so we benefit if you list with them. Told to you up front so you can weigh this recommendation accordingly. Every other option here remains open to you, including the free ones, and you are under no obligation to use them.',
};

/**
 * The single independence statement. Every page that recommends anything reads
 * from this, so the claim cannot drift between pages.
 */
export const INDEPENDENCE_STATEMENT =
  'We take no referral fees, no commissions, and no advertising money from anything on this site. Every cash buyer, nonprofit and government program listed is independently owned and operated with no connection to us. The one exception is Corcoran Sawyer Smith x Builders Resource Center, a brokerage the people behind this guide have an ownership interest in, which is labeled as a related business everywhere it appears so you can weigh it accordingly.';

// ---------------------------------------------------------------------------
// TRACK RECORD
//
// The website is new. The practice behind it is not. This work was done by
// hand for years before the site existed, and every company listed here is one
// homeowners were actually placed with during that time.
//
// FILL THESE IN. Both are deliberately left unset rather than estimated,
// because a number you cannot produce records for is worse than no number.
// Set them only to figures you could defend if a regulator or a journalist
// asked, then the copy below picks them up automatically.
// ---------------------------------------------------------------------------

/**
 * First year homeowners were helped. Confirmed by the operator as seven years
 * of practice as of 2026. Stored as a start year rather than a duration so the
 * figure stays correct as time passes instead of silently going stale.
 */
export const SERVICE_START_YEAR: number | null = 2019;

/**
 * Homeowners helped. Confirmed by the operator as over 1,500 across the years
 * above. Rendered as "more than 1,500", so the published claim stays at or
 * below the real figure rather than above it.
 *
 * This is now a public, specific claim. Keep whatever evidences it, case
 * files, a CRM export, closing records, somewhere it can be produced on
 * request, and raise this number only when the records support the new one.
 */
export const HOMEOWNERS_HELPED: number | null = 1500;

/**
 * Years of operation, derived. Returns null until SERVICE_START_YEAR is set, so
 * no page can print a duration we have not confirmed.
 */
export function yearsOfService(): number | null {
  if (SERVICE_START_YEAR === null) return null;
  return new Date().getFullYear() - SERVICE_START_YEAR;
}

/**
 * The track record statement. Uses the specific figures above when they are
 * set, and stays truthful without them: "years" is defensible on its own,
 * a count is not.
 */
export function serviceHistoryStatement(): string {
  const years = yearsOfService();
  const opener =
    years !== null
      ? `For ${years} years before this website existed, we did this work by hand.`
      : 'For years before this website existed, we did this work by hand.';
  const count =
    HOMEOWNERS_HELPED !== null
      ? ` We have walked more than ${HOMEOWNERS_HELPED.toLocaleString('en-US')} New Jersey homeowners through it.`
      : '';
  return (
    `${opener}${count} Sitting with New Jersey homeowners facing foreclosure, working out what` +
    ' options they actually had, and connecting them to the companies that could help. This site is' +
    ' that same process, written down so people can find it without having to know us first.'
  );
}

/**
 * How a recommendation is actually produced.
 *
 * The experience claim here is real: every company in this registry is one
 * homeowners have been placed with directly, repeatedly, over years of doing
 * this by hand. That is what makes this different from a directory.
 *
 * What this must NOT become is a performance claim. "We have used them" is
 * substantiated by the operator's own history. "They get good results" or
 * "homeowners save X" is not, and would need evidence for typical outcomes.
 * Keep the line on the correct side of that.
 */
export const RECOMMENDATION_BASIS =
  'Recommendations come from two things. First, years of placing New Jersey homeowners with these specific companies by hand and seeing how each one actually handled the situation. Second, matching your answers against what each company handles: property condition, price range, service area, and how quickly it can close, verified against their own site. Nothing is ranked by payment, because nobody pays us. This is our judgement from experience, not a guarantee of what any company will offer you, so compare before you commit.';

/**
 * Why no testimonials or statistics appear yet.
 *
 * Note the distinction: we are not claiming a lack of experience, we are
 * declining to publish figures that were never formally collected. Once the
 * consent capture in the assessment has run for a while, real outcomes can be
 * published and this note can be replaced with them.
 */
export const NO_OUTCOME_DATA_NOTE =
  'You will not find testimonials, star ratings, or success statistics here yet. Not for lack of homeowners helped, but because that work was done privately over years and we never asked permission to publish anyone\'s story. We are collecting that permission properly from now on. When there is enough, we will publish what actually happened, including the cases that did not work out.';

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
 * We DO name a brokerage here, and it is one we are affiliated with, so this
 * block leads with how to choose an agent generally and treats ours as one
 * option among several rather than the answer. Keep it that way.
 */
export const MARKET_LISTING_GUIDANCE = {
  title: 'Listing on the open market',
  summary:
    'If you have equity and enough time before a sale date, listing normally almost always nets more than a cash offer, even after commission. Interview more than one agent before you sign anything, including ours.',
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
