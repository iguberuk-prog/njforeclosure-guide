import type { Metadata } from 'next';
import Link from 'next/link';
import BlogArticle from '../../components/BlogArticle';
import { getPost } from '../../../lib/posts';

const post = getPost('first-90-days-nj-foreclosure')!;

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
        The scariest thing about falling behind on a mortgage is not knowing what happens next.
        So here is what happens next — the actual sequence for a typical New Jersey loan, and
        what the smart move is inside each window. One thing to hold onto throughout: federal
        servicing rules generally prohibit even <em>starting</em> a foreclosure until a loan is
        more than 120 days delinquent. The first 90 days are almost always pre-court.
      </p>

      <h2>Days 1–15: The grace period</h2>
      <p>
        Most mortgages have a grace period, commonly 15 days. A payment inside it usually costs
        nothing extra. Nothing is reported, nothing is filed. If money is tight this month but
        recoverable, this is the cheapest problem you will ever have — and also the moment to look
        at why it happened, because one tight month is often the first symptom of a budget that no
        longer closes.
      </p>

      <h2>Days 16–30: Late fees begin</h2>
      <p>
        After the grace period, a late fee posts — typically a percentage of the payment. The loan
        is delinquent but not yet reported to credit bureaus, which generally happens at 30 days.
        The smart move here is unglamorous: call the servicer before they call you. Ask two
        questions — what is the total to bring the loan current, and what hardship options exist.
        Asking costs nothing and is not an admission of anything.
      </p>

      <h2>Days 31–45: Credit reporting and the outreach wave</h2>
      <p>
        At 30 days past due, the delinquency hits your credit reports, and the score damage is
        real. The servicer&apos;s letters and calls pick up; federal rules require them to reach
        out and, by day 45, to send written notice about loss-mitigation options and assign contact
        personnel. That letter is worth reading closely: it is the menu of what this servicer
        offers — <Link href="/guides/forbearance">forbearance</Link>,{' '}
        <Link href="/guides/loan-modification">modification</Link>, repayment plans.
      </p>

      <h2>Days 46–90: The decision window</h2>
      <p>
        This is where outcomes divide. A <strong>complete</strong> loss-mitigation application
        submitted now — pay stubs, bank statements, hardship letter, every box ticked — gets
        reviewed while the arrears are still small, and generally protects you from a foreclosure
        start while under review. An incomplete application, or none, lets the clock run toward
        the 120-day mark. If the honest answer is that the payment will never work again, this
        window is equally valuable in the other direction: a home listed{' '}
        <Link href="/answers/can-i-sell-my-house-during-foreclosure">before any case exists</Link>{' '}
        sells like any normal home, with no lis pendens in the title search and no auction date
        pressuring the price.
      </p>

      <h2>Somewhere in here: the Notice of Intention</h2>
      <p>
        Before a New Jersey lender can file suit, the Fair Foreclosure Act requires a{' '}
        <Link href="/answers/what-is-a-notice-of-intention">Notice of Intention to Foreclose</Link>,
        sent at least 30 days ahead. Many servicers send it around the 90-day mark; some wait
        longer. It must state what you owe and how to cure. Treat it as the two-minute warning it
        is — but notice what it is not: it is not a lawsuit, not a sale date, and not a reason to
        accept the first offer from whoever knocks that week.
      </p>

      <h2>The pattern behind all of it</h2>
      <p>
        Every window in the first 90 days rewards the same behavior: contact early, document
        everything, and make one deliberate choice — catch up, restructure, or sell — instead of
        letting the timeline choose for you. The{' '}
        <Link href="/quiz">free two-minute assessment</Link> exists precisely to make that choice
        concrete, and the <Link href="/documents">documents guide</Link> decodes every letter as
        it arrives.
      </p>
    </BlogArticle>
  );
}
