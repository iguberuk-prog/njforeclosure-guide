// BLOG SERIES: SERVICER-SPECIFIC POSTS (10 posts)
// ---------------------------------------------------------------------------
// Theme: "my loan is with [servicer] and I'm behind" — people search their
// servicer's name constantly and almost nobody writes these pages. Rules:
// strictly neutral and factual about each company (no performance claims,
// no accusations); phones and portal facts come ONLY from lib/servicers.ts,
// which records where each was verified. The NJ process content is the
// site's standard, servicer-independent facts.
// ---------------------------------------------------------------------------

import type { TopicPost } from './topic-blog';

const PUB = '2026-09-17';

interface ServicerSpec {
  slug: string;
  brand: string;
  phone: string;
  online: boolean;
  who: string[]; // "who this company is in your case" paragraphs
  door: string; // extra sentence(s) about their assistance door
}

const SPECS: ServicerSpec[] = [
  {
    slug: 'behind-on-mortgage-mr-cooper-nj',
    brand: 'Mr. Cooper',
    phone: '866-316-2432',
    online: true,
    who: [
      'Mr. Cooper is one of the largest mortgage servicers in the country, and since its combination with Rocket Companies the two brands publish the same assistance line. Odds are Mr. Cooper does not own your loan — it collects payments and manages the account on behalf of an investor whose rules govern what workouts are possible. That distinction matters: "the bank" you negotiate with is really a servicing operation applying someone else’s criteria, which is why complete paperwork moves files and frustration does not.',
    ],
    door: 'Mr. Cooper runs an online mortgage-assistance application through its account portal, alongside the phone line — submitting online creates a timestamped record, which is worth having.',
  },
  {
    slug: 'behind-on-mortgage-wells-fargo-nj',
    brand: 'Wells Fargo Home Mortgage',
    phone: '1-800-678-7986',
    online: true,
    who: [
      'Wells Fargo is both a major loan owner and a major servicer, so your loan may be owned in-house or serviced for an investor — the assistance process looks the same from your side either way. As a large bank servicer it runs a structured payment-help operation with an online application path and published hardship options.',
    ],
    door: 'Wells Fargo’s payment-help pages include an online application; the phone door and the portal reach the same loss-mitigation review.',
  },
  {
    slug: 'behind-on-mortgage-chase-nj',
    brand: 'Chase Home Lending',
    phone: '1-800-848-9380',
    online: true,
    who: [
      'Chase services an enormous book of loans, some it owns and many it manages for investors. Its mortgage-assistance operation is standardized: a hardship package, document checklists, and defined review stages. Standardization cuts both ways — the process is predictable, and it is unforgiving about incomplete files, which stall in ways that feel personal but are purely procedural.',
    ],
    door: 'Chase supports an online assistance application through its account portal in addition to the phone line.',
  },
  {
    slug: 'behind-on-mortgage-bank-of-america-nj',
    brand: 'Bank of America Home Loans',
    phone: '800-669-6650',
    online: true,
    who: [
      'Bank of America remains one of the country’s biggest servicers, with a mortgage-assistance operation shaped by more than a decade of post-2008 procedure. Your loan may be bank-owned or investor-owned; the application door is the same. Expect a documented process: hardship letter, income proof, and a review with defined stages and timelines.',
    ],
    door: 'Bank of America’s home-loan assistance runs through its online banking portal as well as the phone line; keep copies of every upload confirmation.',
  },
  {
    slug: 'behind-on-mortgage-freedom-mortgage-nj',
    brand: 'Freedom Mortgage',
    phone: '855-690-5900',
    online: true,
    who: [
      'Freedom Mortgage is a New Jersey-headquartered lender and servicer with a heavy concentration in government-backed loans — FHA and VA. That portfolio shape matters to a homeowner in trouble, because FHA and VA loans carry their own loss-mitigation menus (FHA partial claims, VA servicing options and the VA’s own homeowner assistance line at 877-827-3702) layered on top of the servicer’s standard process. If your loan is FHA or VA, say so in every conversation — it changes which tools apply.',
    ],
    door: 'Freedom operates an online assistance path alongside its phone line; FHA and VA borrowers should ask specifically which government options their file is being reviewed for.',
  },
  {
    slug: 'behind-on-mortgage-pennymac-nj',
    brand: 'Pennymac',
    phone: '866-545-9070',
    online: true,
    who: [
      'Pennymac grew into one of the largest servicers in the country largely through government-backed and agency loans, and it runs a standardized hardship-assistance operation with an online application. As with every large servicer, the entity you talk to is applying investor and agency rules to your file — which is why identifying your loan type (FHA, VA, conventional) early tells you which menu you are actually ordering from.',
    ],
    door: 'Pennymac’s online assistance application timestamps your submission; pair it with the phone line and note every reference number.',
  },
  {
    slug: 'behind-on-mortgage-newrez-shellpoint-nj',
    brand: 'Newrez (including former Shellpoint)',
    phone: '866-317-2347',
    online: true,
    who: [
      'Newrez absorbed Shellpoint Mortgage Servicing, so statements and letters may carry either name while reaching the same operation. Newrez services many loans it does not own, including seasoned and transferred loans — and transferred loans deserve special attention: federal rules protect borrowers during servicing transfers, payments made to the old servicer around a transfer must be honored, and loss-mitigation applications in progress do not simply evaporate. If your loan just moved to Newrez, put your history in writing early.',
    ],
    door: 'Newrez runs an online assistance path alongside the phone line; after any transfer, confirm in writing what application materials carried over.',
  },
  {
    slug: 'behind-on-mortgage-sps-nj',
    brand: 'Select Portfolio Servicing (SPS)',
    phone: '888-818-6032',
    online: true,
    who: [
      'SPS is a specialty servicer: it concentrates on loans that need attention — delinquent, modified, or otherwise complicated files that investors move to servicers built for workout volume. If your loan landed at SPS, that is information, not an insult: specialty servicers process more loss-mitigation applications as a share of their book than almost anyone, and the full menu (modification, repayment plan, forbearance, short sale, deed-in-lieu) is their daily work.',
    ],
    door: 'SPS supports online assistance applications; because specialty-serviced files often have history at prior servicers, include a short written timeline of past applications and outcomes with yours.',
  },
  {
    slug: 'behind-on-mortgage-phh-ocwen-nj',
    brand: 'PHH Mortgage (Onity, formerly Ocwen)',
    phone: '800-449-8767',
    online: true,
    who: [
      'PHH Mortgage — part of Onity Group, and the successor to the Ocwen servicing operation — is another specialty servicer with a book weighted toward files that need workouts. Your paperwork may show PHH, Onity, or legacy Ocwen references for the same loan. As with SPS, arriving here usually means an investor routed your loan to an operation built for loss mitigation; the door exists, and the file that walks through it complete is the file that gets answered.',
    ],
    door: 'PHH runs an online assistance path alongside its phone line; if your loan carries legacy Ocwen history, ask for your complete loss-mitigation history in writing.',
  },
  {
    slug: 'behind-on-mortgage-carrington-nj',
    brand: 'Carrington Mortgage Services',
    phone: '800-561-4567',
    online: true,
    who: [
      'Carrington services a portfolio weighted toward government-backed and credit-challenged loans, which means its assistance operation is built around FHA and VA loss-mitigation menus as much as conventional ones. For a New Jersey homeowner behind on an FHA loan, the FHA-specific tools — including partial claims that move arrears into a junior lien rather than demanding them upfront — are often the difference-makers, and they should be named explicitly in your application.',
    ],
    door: 'Carrington operates an online assistance application alongside the phone line; FHA and VA borrowers should confirm which government waterfall their review is using.',
  },
];

/** The NJ-process sections every servicer post shares — the servicer changes,
 *  your rights do not. */
const NJ_SECTIONS = (brand: string): { h: string; body: string[] }[] => [
  {
    h: 'Your New Jersey rights don’t depend on the servicer',
    body: [
      `Whoever services the loan, the New Jersey process is the same: a Notice of Intention at least 30 days before any complaint, a 35-day window to answer once you are served, free court mediation for eligible owner-occupants, and a right to cure the default that runs up to entry of final judgment. ${brand} cannot shorten any of it, and none of it requires their permission. The court-side clock and the servicer-side application run in parallel — work both.`,
      'The free machinery is servicer-independent too: a HUD-approved counselor (800-569-4287) assembles applications for every servicer’s portal, and Legal Services of New Jersey (1-888-576-5529) defends income-qualifying homeowners at no cost.',
    ],
  },
  {
    h: 'How to work the file so it moves',
    body: [
      'Servicer files move on completeness, not sympathy. Send everything the checklist asks for at once; label documents plainly; keep confirmation numbers, upload receipts and the names of people you speak to, with dates. If a complete application is under review, sales are commonly adjourned and dual-tracking rules constrain what can proceed against you — which is exactly why "complete" is the word that matters.',
      'If the file stalls or the answers contradict each other, escalate calmly and in writing: ask for a single point of contact (servicers must designate one), and know that a federal complaint through the CFPB’s consumer portal gets a documented response. None of that requires a paid consultant — and anyone charging an upfront fee to "deal with the servicer" for you is describing something generally illegal under federal and NJ law.',
    ],
  },
];

export const SERVICER_POSTS: TopicPost[] = SPECS.map((s) => ({
  slug: s.slug,
  title: `Behind on Your Mortgage with ${s.brand} in NJ? Start Here`,
  description: `Facing foreclosure with ${s.brand} in New Jersey: the loss-mitigation door, your NJ rights that don’t depend on the servicer, and how to make the file move.`,
  tldr: `${s.brand} services your loan — usually on behalf of an investor whose rules govern the workout menu — and its loss-mitigation door is real: ${s.phone}${s.online ? ', with an online assistance application as well' : ''}. Your New Jersey rights are servicer-independent: a 30-day Notice of Intention before any complaint, 35 days to answer, free court mediation if eligible, and a cure right that runs to final judgment. Complete applications move files; free HUD counselors (800-569-4287) build them with you.`,
  published: PUB,
  updated: PUB,
  minutes: 6,
  theme: 'servicers' as const,
  sections: [
    { h: `Who ${s.brand} actually is in your case`, body: s.who },
    {
      h: 'The loss-mitigation door, specifically',
      body: [
        `The number that reaches ${s.brand}’s hardship operation is ${s.phone} — verified against the company’s own published assistance pages, and listed with every other servicer’s in our free directory. ${s.door}`,
        'One application opens every door at once: modification, forbearance, repayment plan, and the exit options (short sale, deed-in-lieu) are all evaluated from the same package. Applying costs nothing, and upfront fees charged by third parties for this exact task are generally illegal.',
      ],
    },
    ...NJ_SECTIONS(s.brand),
  ],
  links: [
    { href: '/servicers', label: 'The full NJ servicer directory, verified' },
    { href: '/answers/how-much-to-reinstate-my-mortgage', label: 'What catching up actually costs' },
    { href: '/free-checklist', label: 'The Week-One Checklist + 45-Day Playbook (free PDF)' },
  ],
}));
