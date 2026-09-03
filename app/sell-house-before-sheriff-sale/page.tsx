import type { Metadata } from 'next';
import SellLanding, { SellPageSpec } from '../components/SellLanding';

export const metadata: Metadata = {
  title: 'Selling a NJ House Before the Sheriff Sale: Timeline and Real Offers',
  description:
    'A completed sale before the auction date pays off the mortgage and ends the foreclosure case. What has to happen, how much time you actually have in NJ, and one form that requests your offers for you.',
  alternates: { canonical: 'https://njforeclosureguide.org/sell-house-before-sheriff-sale/' },
};

const spec: SellPageSpec = {
  slug: 'sell-house-before-sheriff-sale',
  eyebrow: 'Foreclosure Timeline · Selling Before the Auction',
  h1: 'Selling Your House Before the Sheriff Sale',
  intro:
    'Until a sheriff\'s deed is delivered, the house is still yours to sell. A sale that closes before the auction pays the lender in full, ends the case, and puts whatever equity remains in your pocket instead of leaving it to auction chance. The catch is the clock — so here is the clock, honestly.',
  bullets: [
    ['You still own the house', 'Through the complaint, the judgment, and right up to the sale, title is yours. Homes with a lis pendens and even a final judgment are bought and sold in New Jersey routinely.'],
    ['Adjournments buy closing time', 'New Jersey homeowners are generally entitled to two adjournments of the sheriff sale of up to 30 days each, requested through the sheriff\'s office. Used deliberately, that is enough time to close a cash sale.'],
    ['The payoff gets settled at closing', 'The title company obtains the payoff figure — arrears, fees, and all — and pays the lender from the proceeds. The foreclosure is then dismissed. Anything above the payoff and closing costs is yours.'],
    ['Equity is the reason to act', 'At auction, homes frequently sell for less than market value, and your equity absorbs the damage. A pre-sale closing is how owners with equity protect it.'],
  ],
  math: [
    'Say the payoff is $250,000 and the realistic market value is $380,000. A cash buyer at $330,000 leaves roughly $80,000 in your pocket before closing costs. At a sheriff sale, the same house might bring far less than market — and every month that passes adds interest and fees to the payoff.',
    'If your sale date is close, the order of operations matters: request the adjournment first, then get offers moving. If the numbers say you owe more than any sale would bring, a short sale — with the lender\'s approval and a written deficiency waiver — is the version of this play for underwater homes.',
  ],
  faq: [
    {
      q: 'Can I really sell after the foreclosure judgment?',
      a: 'Yes. Final judgment fixes what the lender is owed, but the home remains yours to sell until the sheriff\'s deed is delivered after the auction. Sales in this window close in New Jersey regularly; the title company pays the judgment amount at closing and the case ends.',
    },
    {
      q: 'How do I find my real sale date?',
      a: 'Check your county sheriff\'s official sale listings, not just the notice you received — sales are frequently adjourned and the listed date moves. Our county directory links every sheriff\'s listings page and explains each county\'s adjournment procedure.',
    },
    {
      q: 'What if I owe more than the house is worth?',
      a: 'Then a standard sale cannot pay off the loan, and the path is a short sale: the lender agrees to accept the sale proceeds as payoff. It requires a hardship application and lender approval, and the thing worth negotiating hardest is a written waiver of the remaining balance.',
    },
    {
      q: 'Does a pending sale postpone the auction by itself?',
      a: 'No — a contract alone does not move the sale date. Use your statutory adjournments, and if more time is genuinely needed to close, an attorney can ask the court for it. Never assume the auction will wait; make it wait through the actual procedures.',
    },
  ],
};

export default function Page() {
  return <SellLanding spec={spec} />;
}
