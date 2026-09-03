// BLOG REGISTRY
// ---------------------------------------------------------------------------
// One entry per post. The article bodies live in each post's own page.tsx
// (prose deserves JSX); this registry is what the index, sitemap, llms.txt
// and related-post links read. Dates are real publication dates — the
// freshness signal only works if it is honest, so `updated` changes only
// when the content materially changes.
// ---------------------------------------------------------------------------

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  /** The quotable one-paragraph answer shown in the TL;DR box and used by AI engines. */
  tldr: string;
  published: string; // ISO date
  updated: string; // ISO date
  minutes: number;
}

export const POSTS: PostMeta[] = [
  {
    slug: 'nj-foreclosure-filings-2026',
    title: 'NJ Foreclosure Filings Are Up 21% in 2026. Here Is What That Actually Means for You',
    description:
      'New Jersey logged 8,269 foreclosure filings in the first half of 2026, up 21% from 2025 and 7th-highest in the nation. What the numbers mean if you are behind — and what they don\'t.',
    tldr:
      'New Jersey recorded 8,269 foreclosure filings in the first half of 2026, up 21% from the same period in 2025, giving NJ the 7th-highest state foreclosure rate at about 1 in every 459 housing units (ATTOM). Rising filings mean courts and sheriff\'s offices are busier, timelines stay long, and more "rescue" operators are working the public records — but an individual homeowner\'s options are unchanged: the Fair Foreclosure Act notices, the 35-day answer window, free court mediation, and the right to sell before the sheriff sale all still apply.',
    published: '2026-09-03',
    updated: '2026-09-03',
    minutes: 6,
  },
  {
    slug: 'first-90-days-nj-foreclosure',
    title: 'The First 90 Days of a New Jersey Foreclosure, Week by Week',
    description:
      'What actually happens in the first three months after you fall behind on a NJ mortgage: every letter, every deadline, and what smart homeowners do in each window.',
    tldr:
      'In the first 90 days of delinquency, a New Jersey homeowner typically sees late fees (after day 15), credit reporting (after day 30), servicer outreach with a required loss-mitigation notice, and eventually the Notice of Intention to Foreclose — which must arrive at least 30 days before any lawsuit. Federal rules generally bar filing before the loan is 120+ days delinquent, so the first 90 days are almost always pre-court. That makes them the cheapest, easiest window to fix the problem: reinstatement is smallest, modification odds are best, and every option is still open.',
    published: '2026-09-03',
    updated: '2026-09-03',
    minutes: 8,
  },
  {
    slug: 'sheriff-sale-adjournment-playbook',
    title: 'The Sheriff Sale Adjournment Playbook: How NJ Homeowners Buy Up to 60 More Days',
    description:
      'New Jersey homeowners are generally entitled to two adjournments of a sheriff sale, up to 30 days each. How to request them, county by county, and what to do with the time.',
    tldr:
      'Under N.J.S.A. 2A:17-36, a New Jersey homeowner can generally obtain two adjournments of a scheduled sheriff sale of up to 30 days each, requested through the county sheriff\'s office for a small fee — up to 60 extra days without asking a court for anything. Courts can grant further adjournments for cause. The time is only valuable with a plan: closing a sale, completing a loss-mitigation review, or preparing (not rushing) a Chapter 13 filing.',
    published: '2026-09-03',
    updated: '2026-09-03',
    minutes: 7,
  },
  {
    slug: 'mistakes-after-foreclosure-letter',
    title: '7 Mistakes New Jersey Homeowners Make After the First Foreclosure Letter',
    description:
      'Seven years of watching NJ foreclosures go wrong, distilled: the unopened mail, the up-front fees, the quiet equity giveaways — and what to do instead of each.',
    tldr:
      'The most damaging early mistakes in a New Jersey foreclosure are predictable: not opening court mail, waiting to "save up" instead of calling the servicer\'s loss-mitigation line, paying up-front fees to rescue operators (generally illegal for them to charge), signing a deed to a stranger, skipping the free court mediation window, vacating the home too early, and fighting purely for time with no endgame while fees consume equity. Each has a free or cheap alternative that works better.',
    published: '2026-09-03',
    updated: '2026-09-03',
    minutes: 7,
  },
  {
    slug: 'reinstatement-quote-guide',
    title: 'How to Read a Reinstatement Quote (and Catch the Errors That Cost You)',
    description:
      'The lump sum that returns your NJ mortgage to good standing, line by line: what belongs on the quote, what to challenge, and how to pay it safely.',
    tldr:
      'A reinstatement quote is the itemized lump sum — missed payments, late charges, escrow shortage, and the lender\'s allowable fees — that returns a defaulted mortgage to good standing. In New Jersey, the Fair Foreclosure Act generally preserves the right to cure up to entry of final judgment. Always demand the quote in writing, check it line by line (fee errors are common), note its expiration date, pay by trackable certified funds, and get written confirmation that the loan is current and the case is being dismissed.',
    published: '2026-09-03',
    updated: '2026-09-03',
    minutes: 6,
  },
];

export function getPost(slug: string): PostMeta | undefined {
  return POSTS.find((p) => p.slug === slug);
}

// The county series (30 posts across Essex, Morris, Union, Somerset, Bergen,
// Hunterdon) lives in lib/county-blog.ts; ALL_POSTS is what the blog index,
// sitemap, and related-post links iterate.
import { countyPosts } from './county-blog';
import { topicPosts } from './topic-blog';

export const ALL_POSTS: PostMeta[] = [...POSTS, ...countyPosts(), ...topicPosts()];
