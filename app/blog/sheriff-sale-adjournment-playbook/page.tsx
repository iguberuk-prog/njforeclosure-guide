import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '../../components/BlogArticle';
import { getPost } from '../../../lib/posts';

const post = getPost('sheriff-sale-adjournment-playbook')!;

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
        Of everything in New Jersey foreclosure law, the adjournment right is the most
        underused-per-dollar-of-value. It is written into statute, it costs a small fee, it
        requires no lawyer and no court appearance — and a large share of homeowners facing a
        sale date have never heard of it. Rescue operators charge four figures for what this
        does for almost nothing.
      </p>

      <h2>What the law gives you</h2>
      <p>
        Under N.J.S.A. 2A:17-36, as amended, the sheriff may adjourn a foreclosure sale at the
        debtor&apos;s request — and New Jersey homeowners are generally entitled to{' '}
        <strong>two adjournments of up to 30 days each</strong>. That is up to 60 days, on
        request, through the sheriff&apos;s office. Beyond the statutory two, additional
        adjournments require a court order, which judges grant for genuine cause — a closing
        scheduled two weeks out being the classic example.
      </p>

      <h2>How to actually request one</h2>
      <p>
        Procedure varies by county, which is why our{' '}
        <Link href="/sheriff-sales">county directory</Link> lists each sheriff&apos;s office,
        its official sale listings, and its process. The common shape: contact the sheriff&apos;s
        civil/foreclosure division before the sale date, identify the case, request the
        adjournment as the property owner, and pay the fee. Do it days ahead, not the morning
        of — offices differ on cutoffs. Then verify the new date on the county&apos;s published
        list, because the listed date is the only one that counts.
      </p>

      <h2>What the 60 days are for</h2>
      <p>
        Time without a plan just accrues interest. The three plans that fit inside two
        adjournments:
      </p>
      <p>
        <strong>Closing a sale.</strong> A cash purchase commonly closes in 14–30 days in New
        Jersey, which fits comfortably inside even one adjournment. A sale that closes before
        the auction pays the judgment and ends the case — and for owners with equity, protects
        money an auction would put at risk. The math lives in our{' '}
        <Link href="/sell-house-before-sheriff-sale">selling-before-the-sale guide</Link>.
      </p>
      <p>
        <strong>Finishing a loss-mitigation review.</strong> If a complete modification
        application is under review, the extra weeks can carry you to a decision instead of a
        sale date racing the underwriter.
      </p>
      <p>
        <strong>Preparing a Chapter 13 properly.</strong> The automatic stay works the morning
        of a sale, but an emergency petition is the weakest kind. Sixty days lets an attorney
        build a <Link href="/guides/bankruptcy-chapter-13">plan that survives confirmation</Link>{' '}
        instead of one that gets dismissed and puts you right back on the list.
      </p>

      <h2>Three cautions</h2>
      <p>
        First, never pay a third party to &quot;get your sale postponed&quot; — the request is
        yours to make, and up-front fees for foreclosure rescue services are generally illegal.
        Second, adjournments do not stop interest, fees, or the judgment amount from growing;
        they buy time, not forgiveness. Third, watch the county&apos;s official list weekly —
        sales move for the bank&apos;s reasons too, and both directions matter to your planning.
        The <Link href="/tools/deadlines">deadline calculator</Link> keeps the whole clock in
        one place.
      </p>
    </BlogArticle>
  );
}
