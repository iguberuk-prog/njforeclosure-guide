import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BlogArticle from '../../components/BlogArticle';
import { countyPosts, getCountyPost, BlogCounty, CountyPostType } from '../../../lib/county-blog';
import { topicPosts, getTopicPost } from '../../../lib/topic-blog';

/**
 * Dynamic route for the county blog series. The five hand-written flagship
 * posts keep their own static directories (a static segment wins over
 * [slug]); this route renders the 30 county posts from lib/county-blog.ts.
 *
 * Content contract: county facts (phones, addresses, sale-list URLs, venue
 * quirks) come only from verified repo data. Where data is null (Hunterdon's
 * sheriff phone), the prose points to the official site instead.
 */

export function generateStaticParams() {
  return [...countyPosts(), ...topicPosts()].map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getCountyPost(slug) ?? getTopicPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://njforeclosureguide.org/blog/${post.slug}/` },
    openGraph: { title: post.title, description: post.description, type: 'article', url: `https://njforeclosureguide.org/blog/${post.slug}/` },
  };
}

interface Section {
  h: string;
  body: string[];
}

function sections(type: CountyPostType, c: BlogCounty): Section[] {
  const sheriffContact = c.sheriff.phone
    ? `The ${c.name} County Sheriff's Office foreclosure unit can be reached at ${c.sheriff.phone}${c.sheriff.address ? ` (${c.sheriff.address})` : ''}.`
    : `Contact details for the ${c.name} County Sheriff's Office are published on its official site — use those, not a number from a mailer.`;
  const salesWhere = c.sheriff.usesCivilView
    ? `${c.name} County publishes its foreclosure sale listings through CivilView, the statewide system most NJ counties use. The listing shows each property's sale date, status, and adjournment history — and the adjournment history is worth reading, because it shows you how often sales actually move.`
    : `${c.name} County is one of the few NJ counties that does NOT use the statewide CivilView system: it publishes its own sale list on the county website. If you have been searching CivilView and not finding your property, that is why.`;
  const localOrgs = c.orgs
    .filter((o) => Array.isArray(o.counties))
    .map((o) => `${o.name} — ${o.what}`);

  switch (type) {
    case 'playbook':
      return [
        {
          h: `What makes ${c.name} County its own animal`,
          body: [c.character, c.market],
        },
        {
          h: 'The process is statewide; the machinery is local',
          body: [
            `New Jersey is a judicial foreclosure state everywhere, so the rules in ${c.name} County are the rules in all 21: the lender must send a Notice of Intention at least 30 days before filing, the complaint goes through the Superior Court, you have 35 days to answer after being served, and the endpoint — if nothing interrupts it — is a sheriff sale. What is local is the machinery: your case runs through the county courthouse in ${c.seat}, and the auction is conducted by the ${c.name} County Sheriff's Office.`,
            sheriffContact,
          ],
        },
        {
          h: 'The five levers, in the order most people should pull them',
          body: [
            `First, the phone: your servicer's loss-mitigation department, before the arrears grow — modification, forbearance, and repayment plans are all requested there, free. Second, the court's free mediation program once a complaint exists: a mediator and a housing counselor at no cost, and the lender must show up. Third, the reinstatement right: New Jersey generally lets you cure the default in a lump sum up to final judgment. Fourth, the adjournments: two postponements of the sheriff sale, up to 30 days each, requested through the sheriff's office. Fifth, the sale you control: the home is yours to sell until the sheriff's deed is delivered, and a closed sale pays the case off entirely.`,
            `Which lever fits depends on three private numbers — what the home is worth, what you owe with arrears, and how far along the case is. The free assessment and calculators on this site turn those into a specific plan in minutes.`,
          ],
        },
        {
          h: `Free help that actually serves ${c.name} County`,
          body: [
            localOrgs.length > 0
              ? `Local agencies serving ${c.name} County homeowners: ${localOrgs.join(' · ')} Statewide, every homeowner also has the court mediation program, HUD-approved counselors, and Legal Services of New Jersey (1-888-576-5529) for those who qualify by income.`
              : `Every ${c.name} County homeowner has the statewide free layer: the court mediation program, HUD-approved counseling agencies (the official HUD directory lists those nearest you), and Legal Services of New Jersey (1-888-576-5529) for those who qualify by income.`,
            `All of it is free. That sentence is the scam filter: the moment someone wants an up-front fee to "save your home," you are looking at the paid imitation of services the real system gives away.`,
          ],
        },
        {
          h: 'The mistake that costs the most here',
          body: [
            `Across every ${c.name} County town — ${c.towns.slice(0, 5).join(', ')} and the rest — the expensive mistake is the same: treating the timeline as something that happens to you. Every stage of a New Jersey foreclosure comes with a window, and every window rewards one deliberate act. Open the mail, mark the dates, pick a lever.`,
          ],
        },
      ];

    case 'sheriff-sales':
      return [
        {
          h: `Where ${c.name} County actually publishes its sales`,
          body: [
            salesWhere,
            sheriffContact,
            ...(c.sheriff.address?.startsWith('Sales held at:')
              ? [
                  `One local detail that surprises people: ${c.name} County sales are not held at a courthouse. ${c.sheriff.address.replace('Sales held at: ', 'They are conducted at ')}.`,
                ]
              : []),
          ],
        },
        {
          h: 'How the auction works',
          body: [
            `The sale is a public auction of the property to satisfy the foreclosure judgment. Bidders must meet the county's deposit requirements, the lender typically bids up to what it is owed, and if no one outbids that, the property goes back to the lender. Two facts matter most to a homeowner: the listed sale date moves often (check the official list weekly, not the notice you were mailed), and if the sale brings more than the judgment, the surplus belongs to you and must be claimed from the court — it is not mailed automatically.`,
          ],
        },
        {
          h: 'Your two adjournments — up to 60 extra days',
          body: [
            `Under New Jersey law, homeowners are generally entitled to two adjournments of a scheduled sale, each up to 30 days, requested through the ${c.name} County Sheriff's Office for a small fee. No lawyer, no court appearance. Beyond the two, further postponements take a court order, which judges grant for genuine cause — a closing scheduled weeks out being the classic example.`,
            `Request days ahead, not the morning of; confirm the new date on the official list afterward. And never pay a third party to "get your sale postponed" — the request is yours to make, and up-front fees for foreclosure rescue services are generally illegal.`,
          ],
        },
        {
          h: 'What the extra days are actually for',
          body: [
            `Sixty days fits three real plans: a cash sale (commonly closing in 14–30 days, which pays the judgment and ends the case), the completion of a loss-mitigation review already under way, or a properly prepared Chapter 13 filing whose automatic stay halts the sale. Time without one of those attached is just interest accruing.`,
            c.market,
          ],
        },
      ];

    case 'sell-fast':
      return [
        {
          h: 'You can sell later into the process than you think',
          body: [
            `The house is yours until the sheriff's deed is delivered — through the complaint, through final judgment, right up to the auction. ${c.name} County homes with a lis pendens on title sell routinely: the title company gets the payoff figure, the lender is paid at closing, the case is dismissed, and anything above the payoff is yours.`,
            c.market,
          ],
        },
        {
          h: 'The honest math on cash offers',
          body: [
            `A cash buyer's offer will be below market value — that is the price of a 14–30 day close with no repairs, no showings, and no financing risk. Sometimes that trade is clearly worth it (a sale date near, a house needing work, a family needing certainty); sometimes a market listing nets meaningfully more and the timeline allows it. The only honest answer comes from running both numbers on your actual house and your actual deadline.`,
            `The defense against a bad deal is competition: two or three offers side by side, and a walk-away-ready posture toward anyone who pressures you to sign today. In a county with ${c.name}'s buyer activity, you do not need the first offer.`,
          ],
        },
        {
          h: 'If the sale date is close, sequence matters',
          body: [
            `Adjournment first, offers second. New Jersey generally gives you two postponements of the sheriff sale of up to 30 days each, requested through the ${c.name} County Sheriff's Office${c.sheriff.phone ? ` (${c.sheriff.phone})` : ''} — and a cash closing fits comfortably inside that window. A contract alone does not move the sale date; the adjournment procedure does.`,
          ],
        },
        {
          h: 'If you owe more than the house is worth',
          body: [
            `Then a standard sale cannot pay off the loan and the play becomes a short sale: the lender agrees to accept the proceeds as payoff. It needs a hardship package and lender approval, and the point worth negotiating hardest is a written waiver of the remaining balance. Slower than a cash sale, but it beats letting the auction happen in almost every case.`,
          ],
        },
        {
          h: 'One form instead of three',
          body: [
            `If you want offers without filling out every buyer's form, the offer concierge on this site sends your property to vetted buyers in one step — free, and the offers are free and non-binding. Comparing them is the whole point.`,
          ],
        },
      ];

    case 'free-help':
      return [
        {
          h: 'The free layer every homeowner has',
          body: [
            `Three statewide resources cost nothing and are the real backbone of foreclosure help in New Jersey. The court's foreclosure mediation program: once a complaint is filed you can request mediation, a housing counselor is assigned at no cost, and the lender must participate. HUD-approved counseling agencies: free, government-supervised counselors who handle modification packages and budgets — the official HUD directory lists those serving ${c.name} County. And Legal Services of New Jersey (1-888-576-5529): free legal help, including foreclosure defense, for homeowners who qualify by income.`,
          ],
        },
        {
          h: `The agencies that serve ${c.name} County specifically`,
          body: [
            localOrgs.length > 0
              ? `${localOrgs.join(' · ')} These are listed because they help, not because they pay — nobody on this site pays to be here.`
              : `${c.name} County does not have a dedicated county-only agency in our verified list, but statewide agencies serve it fully — Navicore Solutions, a HUD-approved nonprofit headquartered in New Jersey, counsels homeowners in every county, and the HUD directory lists every approved agency near you.`,
            c.character,
          ],
        },
        {
          h: 'How to tell real help from the imitation',
          body: [
            `The paid imitation arrives fast, because foreclosure filings are public records. The filter is one question: is there an up-front fee? Charging in advance for mortgage-relief services is generally illegal under the federal MARS rule, and New Jersey adds its own fraud statute. Real counselors are free. Real mediation is free. Real legal aid is free for those who qualify. The second filter: anyone who wants you to sign a deed, or tells you to stop talking to your own lender or the court, is not helping you.`,
          ],
        },
        {
          h: 'What to bring to a first counseling session',
          body: [
            `Recent mortgage statements, the letters you have received (especially the Notice of Intention or complaint), two months of pay stubs or income records, and a one-page honest budget. A counselor with documents produces a plan the same week; a counselor without them produces a second appointment. If a sale date is already scheduled, say so first — the two statutory adjournments through the sheriff's office may need to be requested immediately.`,
          ],
        },
      ];

    case 'timeline':
      return [
        {
          h: 'Months 1–4: Delinquency, before any court is involved',
          body: [
            `Late fees begin after the grace period, credit reporting at 30 days, and the servicer's required loss-mitigation outreach follows. Federal rules generally bar starting a foreclosure until the loan is more than 120 days delinquent, so this entire stretch is pre-court — and it is the cheapest window to fix the problem: reinstatement is smallest here, modification odds best, and a market sale faces no case at all.`,
          ],
        },
        {
          h: 'The Notice of Intention: the 30-day warning',
          body: [
            `Before filing suit, the lender must send a Notice of Intention to Foreclose at least 30 days ahead, stating what you owe and how to cure. It is a warning letter, not a lawsuit — and paying the cure amount at this stage stops the process entirely.`,
          ],
        },
        {
          h: `The complaint: 35 days, through the courthouse in ${c.seat}`,
          body: [
            `The lawsuit is filed in the Superior Court and served on you; ${c.name} County cases run through the courthouse in ${c.seat}. You have 35 days to file an answer. Answer or not, this window also opens the court's free mediation program — generally requested within 60 days of service — which is the single best free lever in the whole process.`,
          ],
        },
        {
          h: 'Default or contest, then final judgment',
          body: [
            `No answer leads to entry of default and an uncontested track through the state's Office of Foreclosure — the fastest path to judgment. An answer with real defenses puts the case before a judge and extends the timeline substantially. Either way, New Jersey generally preserves your right to reinstate — cure the arrears in a lump sum — up to entry of final judgment.`,
          ],
        },
        {
          h: 'The sheriff sale: the last window, not the first',
          body: [
            `After judgment, the case joins the ${c.name} County sheriff's sale calendar. ${salesWhere}`,
            `You are generally entitled to two adjournments of up to 30 days each through the sheriff's office${c.sheriff.phone ? ` (${c.sheriff.phone})` : ''}. The home remains yours to sell until the sheriff's deed is delivered, a Chapter 13 filing halts the sale through the automatic stay, and if the auction brings more than the judgment, the surplus is yours to claim from the court.`,
          ],
        },
        {
          h: 'The pattern across the whole arc',
          body: [
            `The full timeline commonly runs many months to more than a year in New Jersey — long enough that every homeowner passes through several windows where a deliberate act changes the outcome. ${c.character}`,
          ],
        },
      ];
  }
}

const LINKS: Record<CountyPostType, { href: (c: BlogCounty) => string; label: (c: BlogCounty) => string }[]> = {
  playbook: [
    { href: (c) => `/foreclosure-help/${c.sheriff.slug}/`, label: (c) => `${c.name} County foreclosure help hub` },
    { href: (c) => `/sheriff-sales/${c.sheriff.slug}/`, label: (c) => `${c.name} County sheriff sale listings and contacts` },
    { href: () => '/quiz', label: () => 'The free 2-minute assessment' },
  ],
  'sheriff-sales': [
    { href: (c) => `/sheriff-sales/${c.sheriff.slug}/`, label: (c) => `${c.name} County's official sale listings, verified` },
    { href: () => '/blog/sheriff-sale-adjournment-playbook', label: () => 'The full adjournment playbook' },
    { href: () => '/guides/surplus-funds', label: () => 'Claiming surplus funds after a sale' },
  ],
  'sell-fast': [
    { href: () => '/sell-house-before-sheriff-sale', label: () => 'Selling before the sheriff sale, step by step' },
    { href: () => '/tools/net-proceeds', label: () => 'Net proceeds calculator: run both numbers' },
    { href: (c) => `/sheriff-sales/${c.sheriff.slug}/`, label: (c) => `${c.name} County sale dates and adjournments` },
  ],
  'free-help': [
    { href: () => '/professionals', label: () => 'Every free help source, statewide' },
    { href: () => '/scams', label: () => 'The rescue-scam red flags' },
    { href: (c) => `/foreclosure-help/${c.sheriff.slug}/`, label: (c) => `${c.name} County help hub` },
  ],
  timeline: [
    { href: () => '/tools/deadlines', label: () => 'Calculate your dates from any notice' },
    { href: () => '/documents', label: () => 'Every letter decoded, in order' },
    { href: (c) => `/sheriff-sales/${c.sheriff.slug}/`, label: (c) => `${c.name} County sale listings` },
  ],
};

export default async function DataBlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const countyPost = getCountyPost(slug);
  const topicPost = countyPost ? undefined : getTopicPost(slug);
  if (!countyPost && !topicPost) notFound();

  const post = (countyPost ?? topicPost)!;
  const secs = countyPost ? sections(countyPost.type, countyPost.county) : topicPost!.sections;
  const links: { href: string; label: string }[] = countyPost
    ? LINKS[countyPost.type].map((l) => ({ href: l.href(countyPost.county), label: l.label(countyPost.county) }))
    : topicPost!.links;
  // The topic series' walkthroughs are labeled composites inline; this
  // standing note keeps the boundary explicit on every such post.
  const compositeNote = topicPost
    ? 'Walkthroughs in this article are illustrative composites for education, not client stories or testimonials.'
    : null;

  return (
    <BlogArticle post={post}>
      {secs.map((s) => (
        <section key={s.h}>
          <h2>{s.h}</h2>
          {s.body.map((p, i) => (
            <p key={i} className="mt-4">{p}</p>
          ))}
        </section>
      ))}
      {compositeNote && (
        <p className="mt-8 text-xs text-slate-500 italic">{compositeNote}</p>
      )}
      <div className="border border-slate-200 rounded-2xl px-6 py-5 mt-10 not-prose">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Go deeper</p>
        <ul className="space-y-2">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </BlogArticle>
  );
}
