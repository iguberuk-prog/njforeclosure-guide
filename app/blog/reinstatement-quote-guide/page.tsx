import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '../../components/BlogArticle';
import { getPost } from '../../../lib/posts';

const post = getPost('reinstatement-quote-guide')!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  alternates: { canonical: `https://njforeclosureguide.org/blog/${post.slug}/` },
  openGraph: { title: post.title, description: post.description, type: 'article', url: `https://njforeclosureguide.org/blog/${post.slug}/` },
};

export default function Post() {
  return (
    <BlogArticle post={post}>
      <p>
        Reinstatement is the cleanest exit from a New Jersey foreclosure: pay the arrears and
        allowable costs in one lump sum, the loan returns to good standing as if the default
        never happened, and the case is dismissed. New Jersey&apos;s Fair Foreclosure Act
        generally preserves this right <strong>up to entry of final judgment</strong> — later
        than most homeowners assume. The whole play runs through one document: the reinstatement
        quote. Here is how to read it like someone who has seen a few hundred.
      </p>

      <h2>Getting the quote</h2>
      <p>
        Request it in writing from your servicer (once a case is filed, the lender&apos;s
        attorney often produces it). Ask for an <strong>itemized</strong> reinstatement quote
        with a good-through date. Two vocabulary traps: <em>reinstatement</em> is the arrears —
        what brings the loan current; <em>payoff</em> is the entire loan balance. People have
        panicked at a payoff number when the reinstatement figure was a tenth of it. Ask for the
        right one, or both.
      </p>

      <h2>Reading it line by line</h2>
      <p>
        A quote typically stacks: missed principal-and-interest payments, late charges, an escrow
        shortage or advances (taxes and insurance the servicer paid for you), property
        inspection or preservation fees, and — once a case exists — attorney fees and court
        costs. What to check: that the payment count matches your own records; that late charges
        match your note&apos;s stated percentage; that inspection fees are not absurdly frequent
        (drive-by inspections billed monthly add up); and that fees appearing after a case was
        filed are actually permitted. Errors are common enough that checking is always worth the
        hour. Dispute in writing; servicers correct documented errors.
      </p>

      <h2>The expiration date is real</h2>
      <p>
        The total grows daily — per-diem interest plus whatever posts next. Quotes carry a
        good-through date, and funds arriving after it can be returned rather than applied.
        Time your money to the quote: if the funds need a week to assemble, get a quote dated
        for that week.
      </p>

      <h2>Where the money comes from</h2>
      <p>
        The honest list: family, a 401(k) loan or hardship withdrawal, selling another asset, or
        — for owners with real equity — <Link href="/guides/ltv-refinance">an equity-based
        refinance</Link> or a sale of the home itself. If you can get close but not all the way,
        say so: partial reinstatement paired with a repayment plan for the remainder is a common
        loss-mitigation outcome, and asking costs nothing. The{' '}
        <Link href="/answers/how-much-to-reinstate-my-mortgage">reinstatement Q&amp;A</Link>{' '}
        covers the variations.
      </p>

      <h2>Paying it safely</h2>
      <p>
        Certified funds (bank check or wire), sent exactly as the quote instructs, with the loan
        number on everything, by a trackable method. Then close the loop in writing: written
        confirmation that the loan is current, and — if a case was filed — that a dismissal is
        being submitted. Keep that letter with your deed. It is the receipt that the worst season
        your mortgage ever had is officially over.
      </p>
    </BlogArticle>
  );
}
