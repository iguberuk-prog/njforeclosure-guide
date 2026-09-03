import type { Metadata } from 'next';
import SellLanding, { SellPageSpec } from '../components/SellLanding';

export const metadata: Metadata = {
  title: 'Selling an Inherited House in NJ: Probate, Mortgages, and Fast Offers',
  description:
    'Inherited a New Jersey house — maybe with a mortgage behind on payments? What heirs can actually do, how probate affects the sale, and one form that requests cash offers for you, free.',
  alternates: { canonical: 'https://njforeclosureguide.org/sell-inherited-house-nj/' },
};

const spec: SellPageSpec = {
  slug: 'sell-inherited-house-nj',
  eyebrow: 'Inherited Property · Heirs\' Options',
  h1: 'Selling an Inherited House in New Jersey',
  intro:
    'An inherited house is often three problems wearing one roof: a property to maintain from a distance, a mortgage that may be behind, and siblings with different ideas. All of it is solvable, usually faster than families fear. Here is what heirs can actually do, and a form that brings offers to you while you sort the rest.',
  bullets: [
    ['You can act before probate ends', 'The estate\'s representative can list, contract, and often close a sale during administration. Cash buyers work with estates routinely and time their closing to the surrogate paperwork.'],
    ['Federal rules protect heirs', 'Servicers must communicate with successors in interest — confirmed heirs — about the loan, and heirs can generally continue payments, apply for loss mitigation, or sell. A death does not automatically trigger the due-on-sale clause for family transfers.'],
    ['Behind on payments? The clock runs', 'If the mortgage is delinquent, foreclosure timelines apply to the estate just as they would to any owner. Selling before a sheriff sale protects the equity for all heirs.'],
    ['As-is fits estates', 'Cash buyers take houses full of belongings, deferred maintenance included. For out-of-state heirs, "no clean-out, no repairs, no showings" is often the deciding factor.'],
  ],
  math: [
    'Heirs get a significant tax advantage: a stepped-up basis to the value at the date of death, which usually means little or no capital gains tax when the house sells near that value. That changes the math in favor of selling sooner rather than holding.',
    'When several heirs share the house, the honest comparison is each person\'s share of a fast certain sale against months of carrying costs, maintenance, and coordination for a possibly higher market price. Get both numbers, share them with everyone, and decide once.',
  ],
  faq: [
    {
      q: 'Can we sell before probate is finished in New Jersey?',
      a: 'Usually the executor or administrator can contract to sell during administration once appointed by the county surrogate; the sale closes with the estate conveying title. New Jersey\'s probate process is comparatively quick for straightforward estates. An estate attorney can confirm the sequence for your county.',
    },
    {
      q: 'The mortgage is behind and the bank is threatening foreclosure. Can heirs fix it?',
      a: 'Confirmed heirs (successors in interest) have the right to information about the loan and can generally reinstate it, apply for a modification, or sell. If a foreclosure case is already moving, the estate has the same tools any owner has, including adjournments of a sheriff sale and a pre-auction sale.',
    },
    {
      q: 'Do all the heirs have to agree to sell?',
      a: 'When heirs own the property together, a voluntary sale needs everyone\'s signature. If agreement is impossible, New Jersey allows a partition action, where a court orders a sale and splits proceeds — slower and more expensive than agreeing, which is why a clear set of numbers in front of everyone is the cheapest tool in the process.',
    },
    {
      q: 'Will we owe taxes on the sale?',
      a: 'Often little or none on the gain, because inherited property gets a stepped-up basis to date-of-death value. New Jersey\'s inheritance tax depends on who inherits — spouses, children, and grandchildren are exempt Class A beneficiaries. An hour with a tax or estate professional the year you sell is worth it; this is general information, not tax advice.',
    },
  ],
};

export default function Page() {
  return <SellLanding spec={spec} />;
}
