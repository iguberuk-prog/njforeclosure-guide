import type { Metadata } from 'next';
import SellLanding, { SellPageSpec } from '../components/SellLanding';

export const metadata: Metadata = {
  title: 'Sell My House Fast in NJ: Real Offers, Honest Math, No Fees to Us',
  description:
    'Need to sell a New Jersey house fast? Request free, non-binding cash offers from vetted buyers with one form — we send it for you, free. See the honest math before you decide.',
  alternates: { canonical: 'https://njforeclosureguide.org/sell-my-house-fast-nj/' },
};

const spec: SellPageSpec = {
  slug: 'sell-my-house-fast-nj',
  eyebrow: 'Fast Sale · Honest Numbers',
  h1: 'Sell Your New Jersey House Fast, Without Getting Taken',
  intro:
    'A legitimate cash sale in New Jersey can close in 14 to 30 days, with no repairs, no showings, and no commission. It also usually pays below market price — and anyone who hides that is not on your side. Here is how it really works, and one form that brings the offers to you.',
  bullets: [
    ['You get offers, not commitments', 'Every offer is free and non-binding. Nothing is final until you sign a contract, and comparing two or three offers is what keeps everyone honest.'],
    ['As-is means as-is', 'Real cash buyers price the repairs into the offer and buy the house in its current condition — fire damage, tenants, code violations, full of furniture, all of it.'],
    ['14–30 days to close', 'No mortgage contingency, no appraisal wait. If your timeline is driven by a deadline, speed is the product you are buying.'],
    ['We are free and unpaid', 'We take no referral fees from any buyer. One listed company, a brokerage, is a related business and is labeled wherever it appears.'],
  ],
  math: [
    'A cash buyer typically offers meaningfully below market value; that discount is the price of speed and certainty. A market sale with an agent usually nets more, but takes months, requires the home to show well, and costs commission plus carrying costs while you wait.',
    'The right question is never "which is better in general" — it is which puts more money in your pocket on your actual numbers and your actual deadline. A $350,000 market sale that cannot close before your deadline is worth less to you than a $300,000 sale that can.',
  ],
  faq: [
    {
      q: 'How fast can a house sale really close in New Jersey?',
      a: 'A cash purchase with a motivated buyer commonly closes in 14 to 30 days in New Jersey. The timeline depends on title work and payoff figures, not on financing, which is what makes cash faster than a mortgage-funded purchase.',
    },
    {
      q: 'Do I pay any fees or commissions on a cash sale?',
      a: 'Typically no commission, since no listing agent is involved, and reputable cash buyers pay ordinary closing costs. You still pay off your mortgage and any liens from the proceeds. Read every contract before signing, and walk away from any buyer who asks you to pay fees up front.',
    },
    {
      q: 'Will I get less than my house is worth?',
      a: 'Almost certainly yes — cash offers run below market value, and anyone telling you otherwise is selling you something. The honest comparison is your net proceeds after commissions, repairs, and months of carrying costs in a market sale, against the cash offer now. Sometimes the market sale wins clearly. Run both numbers before deciding.',
    },
    {
      q: 'Is this site really free?',
      a: 'Yes. We are paid by no buyer on this site and take no referral fees. One listed destination, a New Jersey brokerage, is a related business the people behind this guide have an ownership interest in, and it is labeled as such wherever it appears.',
    },
  ],
};

export default function Page() {
  return <SellLanding spec={spec} />;
}
