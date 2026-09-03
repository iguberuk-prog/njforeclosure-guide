// COUNTY BLOG SERIES
// ---------------------------------------------------------------------------
// 30 posts: six counties (Essex, Morris, Union, Somerset, Bergen, Hunterdon)
// × five angles (playbook, sheriff sales, selling fast, free help, timeline).
//
// The discipline that keeps 30 generated posts from being doorway spam:
// every county-specific FACT comes from data already verified elsewhere in
// this repo (lib/sheriff-sales.ts phone/address/salesUrl, lib/local-help.ts
// orgs, lib/nj-locations.ts towns/seats), and each county carries its own
// hand-written character paragraphs below — the prose genuinely differs
// because the counties genuinely differ. Statewide legal facts are the same
// ones stated across the site (NOI 30 days, 35-day answer, two 30-day
// adjournments, cure to final judgment).
//
// Where a county's sheriff data is unverified (Hunterdon: phone/address are
// null), the prose says "through the sheriff's official site" instead of
// inventing a number. Never fill a null from memory.
// ---------------------------------------------------------------------------

import { SHERIFF_SOURCES, SheriffSaleSource } from './sheriff-sales';
import { NJ_COUNTIES } from './nj-locations';
import { helpFor, HelpOrg } from './local-help';
import type { PostMeta } from './posts';

export interface BlogCounty {
  name: string; // 'Essex'
  slugPart: string; // 'essex'
  seat: string;
  sheriff: SheriffSaleSource;
  towns: string[];
  orgs: HelpOrg[];
  /** Hand-written: what makes foreclosure in this county its own animal. */
  character: string;
  /** Hand-written: the local market reality that shapes the right move. */
  market: string;
}

const county = (name: string): BlogCounty => {
  const loc = NJ_COUNTIES.find((c) => c.name === name)!;
  const sheriff = SHERIFF_SOURCES.find((s) => s.slug === loc.slug)!;
  return {
    name,
    slugPart: name.toLowerCase(),
    seat: loc.seat,
    sheriff,
    towns: loc.towns,
    orgs: helpFor(name),
    character: CHARACTER[name],
    market: MARKET[name],
  };
};

const CHARACTER: Record<string, string> = {
  Essex:
    'Essex County is the epicenter of New Jersey foreclosure and always has been. Newark, East Orange, and Irvington carry some of the heaviest filing volume in the state, which means the courts and the sheriff\'s foreclosure unit here run at industrial scale — and so does the predator economy that farms the public filing records. If any county\'s homeowners get buried in "we can save your home" mail the week after a complaint is filed, it is this one.',
  Morris:
    'Morris County foreclosure is a different animal from the urban counties: lower volume, higher home values, and homeowners who very often have substantial equity on the line. The typical Morris case is not a homeowner with nothing to lose — it is a homeowner with six figures of equity at risk of evaporating at an auction, which changes what the smart play usually is.',
  Union:
    'Union County packs dense, working-class towns — Elizabeth, Plainfield, Linden, Roselle, Hillside — into a small footprint, and its filing volume runs persistently high relative to its size. One genuinely local quirk worth knowing: Union County sheriff sales are not held in a courthouse at all. They are conducted at the Warinanco Ice Skating Center in Roselle, which surprises nearly everyone the first time.',
  Somerset:
    'Somerset County sits in the middle of the state and the middle of the market: suburban towns like Franklin, Bridgewater, and North Plainfield with real home values, a county seat in Somerville where the machinery runs, and — unusually — a sheriff\'s office that publishes its own sale list on the county website rather than the statewide CivilView system most counties use. Look in the right place or you will be reading someone else\'s auction calendar.',
  Bergen:
    'Bergen is New Jersey\'s most populous county, and its foreclosure story is a volume-times-value story: even a moderate filing rate across 70 municipalities produces a steady stream of cases, and Bergen home values mean the equity at stake per case is among the highest in the state. A Bergen homeowner who loses a house carelessly frequently loses more money than a homeowner anywhere else in New Jersey would.',
  Hunterdon:
    'Hunterdon is the quiet end of the New Jersey foreclosure map: rural, low-volume, with cases flowing through Flemington. Low volume cuts both ways. There is less rescue-scam mail farming the records here — but there is also less local infrastructure, fewer nearby counselors, and homeowners who often feel like the only person in town this is happening to. You are not; the process and the tools are identical statewide.',
};

const MARKET: Record<string, string> = {
  Essex:
    'The market reality: Essex values vary enormously block by block, from Newark two-families to Montclair and Maplewood homes worth over a million dollars. That spread means no one-size answer — an Irvington homeowner underwater needs the short-sale playbook, while a Maplewood homeowner with equity needs the protect-the-equity playbook. Run your own numbers before accepting anyone\'s framing of your situation.',
  Morris:
    'The market reality: Morris homes sell, and sell well, which is precisely why waiting is expensive here. Every month of accrued interest, fees, and legal costs comes out of equity that a timely market sale or cash sale would have preserved. For equity-rich homeowners, the honest comparison is rarely "keep versus lose the house" — it is "which exit, on which date, keeps the most of my money."',
  Union:
    'The market reality: Union County\'s dense housing stock moves quickly at realistic prices, and cash buyers are active across Elizabeth, Plainfield, and Linden. That liquidity is an asset for a homeowner on a clock — a sale before the auction is a real option here, not a theoretical one — but it also attracts the wholesale-contract crowd, so read every contract and compare more than one offer.',
  Somerset:
    'The market reality: Somerset\'s suburban stock holds value, and most foreclosure cases here involve meaningful equity. The county\'s own sale list (not CivilView) is the calendar that matters. For homeowners weighing exits, Somerset\'s steady demand means a properly priced home sells inside the window two sheriff-sale adjournments provide.',
  Bergen:
    'The market reality: Bergen demand is deep and constant — homes in Hackensack, Teaneck, Garfield, and Lodi attract multiple offers in nearly any market. For a homeowner in default, that is leverage: cash buyers compete here, market sales close reliably, and there is rarely a good reason to accept the first unsolicited offer that arrives in the mail.',
  Hunterdon:
    'The market reality: Hunterdon properties — larger lots, older homes, some with land — can take longer to sell than suburban stock, which makes starting early the whole game. A homeowner who lists or requests cash offers at the Notice of Intention stage has months of runway; one who starts at the sale notice is racing the calendar with a property type that prefers not to be rushed.',
};

export const BLOG_COUNTIES: BlogCounty[] = ['Essex', 'Morris', 'Union', 'Somerset', 'Bergen', 'Hunterdon'].map(county);

export type CountyPostType = 'playbook' | 'sheriff-sales' | 'sell-fast' | 'free-help' | 'timeline';

export interface CountyPost extends PostMeta {
  countyName: string;
  type: CountyPostType;
}

const PUBLISHED = '2026-09-03';

export function countyPosts(): CountyPost[] {
  const posts: CountyPost[] = [];
  for (const c of BLOG_COUNTIES) {
    posts.push(
      {
        slug: `foreclosure-${c.slugPart}-county-playbook`,
        title: `Facing Foreclosure in ${c.name} County, NJ: The Local Playbook`,
        description: `How foreclosure actually runs in ${c.name} County — the courthouse in ${c.seat}, the sheriff sale process, the free local help, and the moves that protect ${c.name} homeowners.`,
        tldr: `Foreclosure in ${c.name} County follows New Jersey's judicial process: a Notice of Intention at least 30 days before suit, a complaint through the Superior Court (county seat: ${c.seat}), 35 days to answer, and a sheriff sale that can generally be adjourned twice for up to 30 days each. Free help exists at every stage — court mediation, HUD counselors, and ${c.orgs[0].name} — and the home can be sold right up until the sheriff's deed is delivered.`,
        published: PUBLISHED,
        updated: PUBLISHED,
        minutes: 7,
        countyName: c.name,
        type: 'playbook',
      },
      {
        slug: `sheriff-sales-${c.slugPart}-county`,
        title: `Sheriff Sales in ${c.name} County: How They Work and How to Postpone Yours`,
        description: `Where ${c.name} County publishes foreclosure sale listings, how the auction works, and how homeowners use their two statutory adjournments — up to 60 extra days.`,
        tldr: `${c.name} County ${c.sheriff.usesCivilView ? 'publishes its foreclosure sale listings through the statewide CivilView system' : 'publishes its own foreclosure sale list on the county website'}, and New Jersey homeowners are generally entitled to two adjournments of a scheduled sale of up to 30 days each, requested through the sheriff's office${c.sheriff.phone ? ` (${c.sheriff.phone})` : ''}. Check the official list for your real sale date — it is frequently later than the date on your notice — and use any time you buy on a concrete plan: closing a sale, finishing a loss-mitigation review, or preparing a Chapter 13.`,
        published: PUBLISHED,
        updated: PUBLISHED,
        minutes: 6,
        countyName: c.name,
        type: 'sheriff-sales',
      },
      {
        slug: `sell-house-fast-${c.slugPart}-county`,
        title: `Selling a House Fast in ${c.name} County (Foreclosure OK): The Honest Version`,
        description: `What a fast sale really looks like in ${c.name} County — realistic timelines, the below-market truth about cash offers, and how to get competing offers instead of taking the first one.`,
        tldr: `A ${c.name} County homeowner can sell right up until the sheriff's deed is delivered, and a cash sale commonly closes in 14–30 days — fast enough to fit inside the adjournments New Jersey law provides. Cash offers run below market value; that is the price of speed, and the defense is comparison: request two or three offers, run the net-proceeds math against a market sale, and never sign with the first door-knocker.`,
        published: PUBLISHED,
        updated: PUBLISHED,
        minutes: 6,
        countyName: c.name,
        type: 'sell-fast',
      },
      {
        slug: `free-foreclosure-help-${c.slugPart}-county`,
        title: `Free Foreclosure Help in ${c.name} County: Every Legitimate Source`,
        description: `The organizations that actually help ${c.name} County homeowners for free — court mediation, HUD counselors, legal services — and how to tell real help from the paid imitations.`,
        tldr: `Every core form of foreclosure help available to a ${c.name} County homeowner is free: New Jersey's court-run mediation program (with a housing counselor assigned at no cost), HUD-approved counseling agencies${c.orgs.length > 4 ? ` including ${c.orgs[0].name}` : ''}, and Legal Services of New Jersey (1-888-576-5529) for income-qualifying homeowners. Anyone charging an up-front fee to "save your home" is generally breaking the law — the paid version of this help is the scam version.`,
        published: PUBLISHED,
        updated: PUBLISHED,
        minutes: 6,
        countyName: c.name,
        type: 'free-help',
      },
      {
        slug: `foreclosure-timeline-${c.slugPart}-county`,
        title: `The ${c.name} County Foreclosure Timeline: First Letter to Sheriff Sale`,
        description: `Every stage of a ${c.name} County foreclosure in order — the Notice of Intention, the complaint, default, judgment, and the sale — with the deadline attached to each.`,
        tldr: `A ${c.name} County foreclosure moves through fixed stages: 120+ days of delinquency before filing is generally permitted, a Notice of Intention at least 30 days before suit, a complaint with a 35-day answer window, then default or litigation, final judgment, and a sheriff sale that can generally be adjourned twice (30 days each). The full arc typically runs many months to more than a year — time that rewards homeowners who use each window deliberately.`,
        published: PUBLISHED,
        updated: PUBLISHED,
        minutes: 7,
        countyName: c.name,
        type: 'timeline',
      }
    );
  }
  return posts;
}

export function getCountyPost(slug: string): (CountyPost & { county: BlogCounty }) | undefined {
  const p = countyPosts().find((x) => x.slug === slug);
  if (!p) return undefined;
  return { ...p, county: BLOG_COUNTIES.find((c) => c.name === p.countyName)! };
}
