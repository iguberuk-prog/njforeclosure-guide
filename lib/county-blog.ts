// COUNTY BLOG SERIES
// ---------------------------------------------------------------------------
// 35 posts: seven counties (Essex, Morris, Union, Somerset, Bergen,
// Hunterdon — the original six — plus Hudson, added 2026-09-21)
// × five angles (playbook, sheriff sales, selling fast, free help, timeline).
//
// The discipline that keeps 35 generated posts from being doorway spam:
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
    slugPart: name.toLowerCase().replace(/\s+/g, '-'),
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
  Hudson:
    'Hudson County is New Jersey at its most crowded: Jersey City, Union City, West New York, Hoboken, and North Bergen stack condos, brownstones, and multi-family walk-ups onto the smallest county footprint in the state. Foreclosure here has a split personality — a waterfront condo owner whose value climbed for a decade sits in the same court queue as a longtime owner of a Bayonne or Kearny two-family. Cases run through the Superior Court in Jersey City, and the sheriff\'s foreclosure unit works out of Hudson Plaza on Cornelison Avenue, a short ride from some of the most expensive blocks in the state.',
  Middlesex:
    'Middlesex County is New Jersey\'s crossroads county — the Turnpike, the Parkway, and the Northeast Corridor all run through it, and so does a huge share of the state\'s foreclosure volume, spread across profoundly different towns: New Brunswick\'s student-rental blocks, Perth Amboy\'s waterfront multi-families, Edison\'s school-district colonials, Woodbridge\'s ten-communities-in-one-township sprawl. Cases run through the Superior Court in New Brunswick, and the county\'s free-help bench includes PRAB\'s HUD-approved counseling, based in the county itself.',
  Monmouth:
    'Monmouth County runs from commuter towns on the rail lines to the oceanfront — Freehold holds the courthouse, and the caseload spans Middletown colonials, Long Branch\'s redevelopment blocks, Asbury Park\'s legacy streets, and Keansburg bungalows. The Affordable Housing Alliance provides the county\'s HUD-approved counseling, and the shore economy adds its own wrinkle: seasonal incomes that fail underwriting reviews for documentation reasons rather than income reasons.',
  Ocean:
    'Ocean County\'s foreclosure docket reflects who lives there: the state\'s largest retiree communities, the shore towns, and Lakewood — New Jersey\'s fastest-growing large town. The courthouse sits in Toms River, and the county\'s signature case patterns are fixed incomes colliding with rising taxes and insurance, reverse-mortgage (HECM) defaults with their own trigger rules, and storm-era legacies still written into some properties\' paperwork.',
  Passaic:
    'Passaic County is two counties wearing one name: dense, multilingual Paterson and Passaic City in the south — with some of the state\'s heaviest per-block filing pressure — and lake-country suburbs like Wayne and West Milford in the north. The machinery runs from Paterson, and the pressure industry works the southern cities bilingually, timing its mail to the public lis pendens records. The county\'s free help answers in Spanish and more, and our Spanish hub covers the whole playbook.',
  Camden:
    'Camden County carries South Jersey\'s heaviest split personality: Camden City\'s hardship blocks and the comfortable suburbs — Cherry Hill, Haddonfield\'s borders, Gloucester Township — share one Hall of Justice and one sheriff\'s sale calendar. The county has long ranked high in filings, the city draws the state\'s densest scam traffic per equity dollar, and the suburbs default quietly in houses school-district demand keeps valuable. South Jersey\'s legal services organizations and HUD counselors cover the county free.',
  Mercer:
    'Mercer County is the capital county: Trenton holds the courts, the state workforce anchors the suburbs — Hamilton, Ewing, Lawrence — and the county hosts one of New Jersey\'s most established free-help institutions, Isles, Inc., a HUD-approved counseling operation headquartered in Trenton itself. The typical Mercer default starts with an interruption (a furlough, an illness, a household split) rather than a collapse, which is exactly the shape the loss-mitigation menu handles best.',
  Burlington:
    'Burlington County is New Jersey\'s largest by land, stretching from Delaware River towns to the Pines, with the courthouse in Mount Holly. Two histories shape its docket: Willingboro\'s Levitt-built parks — generational Black and veteran homeownership, which means successor-in-interest cases and VA loans are everyday matters here — and the joint base\'s military families, whose VA paper carries its own loss-mitigation menu and its own advocate at 877-827-3702.',
  Gloucester:
    'Gloucester County is South Jersey\'s growth story — Woodbury holds the county seat while Deptford, Washington Township, and Glassboro\'s university corridor keep adding rooftops. The foreclosure docket looks like the suburbs it serves: interruption defaults in commuter households, quiet cases behind development-street front doors, and a steady share of FHA loans whose partial-claim tool goes unmentioned in too many servicer calls.',
  Atlantic:
    'Atlantic County\'s foreclosure history is the casino economy\'s EKG — national headlines once made Atlantic City a foreclosure capital, and the county still carries the legacy: incomes that swing with seasons and casino fortunes, a boom-bust market that left neighbors on the same block in opposite equity positions, and a courthouse in Mays Landing processing it all. The county pages carry the machinery; the free tools were built for exactly this volatility.',
  Cumberland:
    'Cumberland County carries the state\'s heaviest foreclosure pressure relative to its size, and its most reachable cures at the same time: Bridgeton holds the courts, Vineland and Millville hold most of the cases, and the agricultural economy\'s seasonal and 1099 incomes fail reviews for documentation reasons more than income ones. Fewer counselors serve the deep south of the state, which makes the statewide phone numbers — 800-569-4287 and 1-888-576-5529 — carry more of the load here.',
  'Cape May':
    'Cape May County\'s docket is unlike anywhere else in New Jersey: a huge share of its housing is seasonal — second homes and rentals from Ocean City to Wildwood to the Cape — while year-round households live on tourism incomes that swing hard between July and January. The courthouse sits in Cape May Court House, and the county\'s cases split between primary residences with full statutory protections and second homes where parts of the owner-occupant toolkit (like mediation eligibility) do not apply.',
  Salem:
    'Salem County is New Jersey\'s smallest docket: rural, riverfront, with the machinery in Salem City and cases scattered from Pennsville to Penns Grove. Low volume means less scam mail farming the records — and also the state\'s thinnest local infrastructure, so the statewide free layer (the counselor line, LSNJ\'s hotline, the court\'s mediation program) does the work that bigger counties\' local nonprofits handle. Feeling like the only person in the county this is happening to is common here, and wrong.',
  Sussex:
    'Sussex County is the state\'s northwest corner: lake communities, commuter-fringe towns, and long distances between everything, with the courts in Newton. Its foreclosure cases skew rural-suburban — interruption defaults in long-commute households, lake-house seconds, and older homes whose condition questions belong in any workout or sale conversation. Local help is sparser than downstate, making the statewide free machinery and the online tools carry more of the load.',
  Warren:
    'Warren County lines the Delaware River — Phillipsburg\'s row blocks, Hackettstown\'s commuter growth, and farm townships between, with the machinery in Belvidere, one of the state\'s smallest county seats. The docket is small and personal: cases move through offices where the staff answer their own phones, which is an underrated advantage for a homeowner who calls the sheriff\'s office early with the two questions that matter (is a sale scheduled, and what is the adjournment procedure).',
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
  Hudson:
    'The market reality: Hudson demand is relentless. Proximity to Manhattan keeps buyers circling Jersey City, Hoboken, and the Palisades towns in nearly any market, and condos and multi-families alike move at realistic prices. For a homeowner in default that is genuine leverage — a sale before the auction is a real option here, not a theoretical one — but the same demand makes Hudson a magnet for aggressive investors and wholesale contracts, so treat every unsolicited offer as an opening bid, never a verdict. Get competing offers and run the net-proceeds math before signing anything.',
  Middlesex:
    'The market reality: Middlesex liquidity is the story — commuter-rail towns and school districts keep buyers active in nearly any market, which strengthens both sides of the playbook: lenders modify more readily against collateral this solid, and a controlled sale converts equity at real prices inside the window the process rights provide. The county\'s diversity also makes it a heavy target for community-facing rescue pitches in several languages; the free machinery answers in those languages too.',
  Monmouth:
    'The market reality: Monmouth demand is deep and getting deeper — ferry and rail access plus the shore keep buyers competing, and redevelopment has repriced whole towns. For homeowners in default, that is leverage worth defending: a listed sale meets a real buyer pool at real prices, cash buyers compete rather than dictate, and the equity spread in a typical case justifies working every free process right before accepting anyone\'s first number.',
  Ocean:
    'The market reality: Ocean demand runs on two engines — retirees and Lakewood\'s relentless growth — and both keep resale values honest across most of the county. For fixed-income owners the winning structures usually reduce the payment (modifications, escrow fixes, the state\'s senior tax-relief programs) rather than promise catch-up money that does not exist; for owners choosing exit, demand this steady converts equity reliably when the sale starts early rather than at the sale-notice stage.',
  Passaic:
    'The market reality: southern Passaic\'s two- and three-family stock draws constant investor demand, which means real prices for owners who check their number before answering a flyer — and wholesale contracts for owners who do not. The northern suburbs play like Morris County: equity cases where waiting is the expensive habit. Either half, the arithmetic is the same: payoff quote, honest valuation, and the spread between them written down before any decision.',
  Camden:
    'The market reality: the number that matters most in Camden County is which side of the split you are on. City owners often hold modest equity where every predatory fee bites deepest — making the free machinery essentially the whole strategy — while suburban owners hold real spreads that silence squanders. Investor demand is strong in both: honest cash offers exist here, and so do the other kind, which is why every offer gets compared against a number you generated yourself.',
  Mercer:
    'The market reality: Mercer prices run the full spread in a few miles — Trenton blocks where arrears are genuinely catchable in absolute dollars, and Princeton-adjacent suburbs where the equity at stake is serious. Modest-value cases make cures reachable and predatory fees proportionally devastating; suburban cases reward the equity-defense playbook. Both benefit from the same local advantage: institutional free help minutes away rather than a county away.',
  Burlington:
    'The market reality: Burlington\'s stock is broad and affordable by regional standards, and Philadelphia-side commuter demand keeps it moving. Generational homes hold paid-down mortgages and real equity — worth thirty-five days of paperwork before anyone surrenders one to a flyer — and VA and FHA loans across the county carry government menus (partial claims, VA options) that too many reviews never name. Say your loan type in every conversation; it changes the tools.',
  Gloucester:
    'The market reality: Gloucester remains one of the region\'s affordability plays, which keeps first-time-buyer demand constant and resale honest. Arrears here are frequently catchable in absolute dollars — repayment plans and family-funded cures genuinely fit — and for owners choosing exit, the same affordability draws a deep buyer pool. The county\'s cases are won early: the free counselor call at the missed-payment stage is worth more here than a lawyer at the sale-notice stage.',
  Atlantic:
    'The market reality: the county\'s long cycle left a genuine split — owners who bought at peaks still working back to even, and owners who bought low or inherited holding quiet equity as the market recovered. The two positions demand opposite playbooks (negotiate versus protect), and one free calculation says which conversation you are in. Seasonal income belongs in applications as a documented yearly average, not a bad quarter — the difference between denial and approval here is usually paperwork, not money.',
  Cumberland:
    'The market reality: modest price points cut both ways. The arrears that trigger a Cumberland case are often small enough in absolute dollars for a repayment plan or a family loan to clear outright — and every predatory fee takes a devastating share of a smaller equity pie. The free machinery is not one option among several here; it is the whole strategy, and the households that engage it at the first missed payments rarely become the county\'s statistics.',
  'Cape May':
    'The market reality: shore property holds value stubbornly, and buyer demand for anything near the beaches never really sleeps — which means Cape May defaults are usually equity cases, including the second-home cases where a controlled sale is often the honest answer arriving early. Year-round owners on seasonal incomes win reviews the same way shore workers everywhere do: the documented yearly average, assembled with a free counselor, presented before the case deepens.',
  Salem:
    'The market reality: Salem is the state\'s deepest affordability pocket, which keeps its arrears small in absolute dollars — cures and repayment plans genuinely fit household-scale money — while its buyer pool is thinner and slower than the commuter counties\'. That combination writes the playbook: fight to keep (the math usually allows it), and if exit is right, start the sale early because rural properties prefer not to be rushed.',
  Sussex:
    'The market reality: Sussex properties — lakefront, acreage, older stock — sell to a real but patient market, and remote-work demand has strengthened it. The calendar is therefore the strategy: an owner who starts the exit conversation at the Notice of Intention stage has the months this market wants, while one who starts at the sale notice is rushing a property type that punishes rushing. The keep-the-house tools run on the same clocks as everywhere; use them early.',
  Warren:
    'The market reality: Warren is where New Jersey affordability meets the Lehigh Valley\'s spillover — Pennsylvania-side demand keeps Phillipsburg and the Route 57 corridor moving, while rural properties sell on the patient market\'s schedule. Arrears here are often catchable in household-scale dollars, equity in long-held homes is real, and both facts reward the same boring discipline: the free calls at the first missed payments, the answer by day 35, the numbers on one page before any signature.',
};

export const BLOG_COUNTIES: BlogCounty[] = ['Essex', 'Morris', 'Union', 'Somerset', 'Bergen', 'Hunterdon', 'Hudson', 'Middlesex', 'Monmouth', 'Ocean', 'Passaic', 'Camden', 'Mercer', 'Burlington', 'Gloucester', 'Atlantic', 'Cumberland', 'Cape May', 'Salem', 'Sussex', 'Warren'].map(county);

export type CountyPostType = 'playbook' | 'sheriff-sales' | 'sell-fast' | 'free-help' | 'timeline';

export interface CountyPost extends PostMeta {
  countyName: string;
  type: CountyPostType;
}

const PUBLISHED = '2026-09-03';

/** Counties added after the original six carry their own publish date. */
const PUBLISHED_BY_COUNTY: Record<string, string> = {
  Hudson: '2026-09-21',
  Middlesex: '2026-09-21',
  Monmouth: '2026-09-21',
  Ocean: '2026-09-21',
  Passaic: '2026-09-21',
  Camden: '2026-09-21',
  Mercer: '2026-09-21',
  Burlington: '2026-09-21',
  Gloucester: '2026-09-21',
  Atlantic: '2026-09-21',
  Cumberland: '2026-09-21',
  'Cape May': '2026-09-21',
  Salem: '2026-09-21',
  Sussex: '2026-09-21',
  Warren: '2026-09-21',
};

export function countyPosts(): CountyPost[] {
  const posts: CountyPost[] = [];
  for (const c of BLOG_COUNTIES) {
    const published = PUBLISHED_BY_COUNTY[c.name] ?? PUBLISHED;
    posts.push(
      {
        slug: `foreclosure-${c.slugPart}-county-playbook`,
        title: `Facing Foreclosure in ${c.name} County, NJ: The Local Playbook`,
        description: `How foreclosure actually runs in ${c.name} County — the courthouse in ${c.seat}, the sheriff sale process, the free local help, and the moves that protect ${c.name} homeowners.`,
        tldr: `Foreclosure in ${c.name} County follows New Jersey's judicial process: a Notice of Intention at least 30 days before suit, a complaint through the Superior Court (county seat: ${c.seat}), 35 days to answer, and a sheriff sale that can generally be adjourned twice for up to 30 days each. Free help exists at every stage — court mediation, HUD counselors, and ${c.orgs[0].name} — and the home can be sold right up until the sheriff's deed is delivered.`,
        published,
        updated: published,
        minutes: 7,
        countyName: c.name,
        type: 'playbook',
      },
      {
        slug: `sheriff-sales-${c.slugPart}-county`,
        title: `Sheriff Sales in ${c.name} County: How They Work and How to Postpone Yours`,
        description: `Where ${c.name} County publishes foreclosure sale listings, how the auction works, and how homeowners use their two statutory adjournments — up to 60 extra days.`,
        tldr: `${c.name} County ${c.sheriff.usesCivilView ? 'publishes its foreclosure sale listings through the statewide CivilView system' : 'publishes its own foreclosure sale list on the county website'}, and New Jersey homeowners are generally entitled to two adjournments of a scheduled sale of up to 30 days each, requested through the sheriff's office${c.sheriff.phone ? ` (${c.sheriff.phone})` : ''}. Check the official list for your real sale date — it is frequently later than the date on your notice — and use any time you buy on a concrete plan: closing a sale, finishing a loss-mitigation review, or preparing a Chapter 13.`,
        published,
        updated: published,
        minutes: 6,
        countyName: c.name,
        type: 'sheriff-sales',
      },
      {
        slug: `sell-house-fast-${c.slugPart}-county`,
        title: `Selling a House Fast in ${c.name} County (Foreclosure OK): The Honest Version`,
        description: `What a fast sale really looks like in ${c.name} County — realistic timelines, the below-market truth about cash offers, and how to get competing offers instead of taking the first one.`,
        tldr: `A ${c.name} County homeowner can sell right up until the sheriff's deed is delivered, and a cash sale commonly closes in 14–30 days — fast enough to fit inside the adjournments New Jersey law provides. Cash offers run below market value; that is the price of speed, and the defense is comparison: request two or three offers, run the net-proceeds math against a market sale, and never sign with the first door-knocker.`,
        published,
        updated: published,
        minutes: 6,
        countyName: c.name,
        type: 'sell-fast',
      },
      {
        slug: `free-foreclosure-help-${c.slugPart}-county`,
        title: `Free Foreclosure Help in ${c.name} County: Every Legitimate Source`,
        description: `The organizations that actually help ${c.name} County homeowners for free — court mediation, HUD counselors, legal services — and how to tell real help from the paid imitations.`,
        tldr: `Every core form of foreclosure help available to a ${c.name} County homeowner is free: New Jersey's court-run mediation program (with a housing counselor assigned at no cost), HUD-approved counseling agencies${c.orgs.length > 4 ? ` including ${c.orgs[0].name}` : ''}, and Legal Services of New Jersey (1-888-576-5529) for income-qualifying homeowners. Anyone charging an up-front fee to "save your home" is generally breaking the law — the paid version of this help is the scam version.`,
        published,
        updated: published,
        minutes: 6,
        countyName: c.name,
        type: 'free-help',
      },
      {
        slug: `foreclosure-timeline-${c.slugPart}-county`,
        title: `The ${c.name} County Foreclosure Timeline: First Letter to Sheriff Sale`,
        description: `Every stage of a ${c.name} County foreclosure in order — the Notice of Intention, the complaint, default, judgment, and the sale — with the deadline attached to each.`,
        tldr: `A ${c.name} County foreclosure moves through fixed stages: 120+ days of delinquency before filing is generally permitted, a Notice of Intention at least 30 days before suit, a complaint with a 35-day answer window, then default or litigation, final judgment, and a sheriff sale that can generally be adjourned twice (30 days each). The full arc typically runs many months to more than a year — time that rewards homeowners who use each window deliberately.`,
        published,
        updated: published,
        minutes: 7,
        countyName: c.name,
        type: 'timeline',
      }
    );
  }
  // The sheriff-sales angle was consolidated into /sheriff-sales/<county>/
  // on 2026-09-24: Search Console showed the blog post and the directory
  // page competing for the same "<county> county sheriff sale" queries
  // (e.g. Bergen's blog post ranked while its directory page did not).
  // Its unique content now lives on the directory page and the old URLs
  // 301 there (public/_redirects). The generator stays so the prose is
  // not lost; it is simply no longer published as a separate post.
  return posts.filter((p) => p.type !== 'sheriff-sales');
}

/** Consolidated sheriff-sales angle, rendered inside /sheriff-sales/<county>/. */
export function sheriffAngleFor(sheriffSlug: string): BlogCounty | undefined {
  return BLOG_COUNTIES.find((c) => c.sheriff.slug === sheriffSlug);
}

export function getCountyPost(slug: string): (CountyPost & { county: BlogCounty }) | undefined {
  const p = countyPosts().find((x) => x.slug === slug);
  if (!p) return undefined;
  return { ...p, county: BLOG_COUNTIES.find((c) => c.name === p.countyName)! };
}
