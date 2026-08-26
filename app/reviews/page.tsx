import Link from 'next/link';
import type { Metadata } from 'next';
import { PUBLISHED_REVIEWS, averageRating } from '../../lib/reviews';

export const metadata: Metadata = {
  title: 'Reviews From New Jersey Homeowners We Have Helped',
  description:
    'Reviews from real New Jersey homeowners, published only with their written permission. We show the true count, whatever it is, and we do not write our own.',
  alternates: { canonical: 'https://njforeclosureguide.org/reviews/' },
};

/**
 * Reviews page.
 *
 * Renders however many REAL reviews exist. Today that is zero, and the empty
 * state says so plainly rather than hiding the page or padding it out.
 *
 * Review schema is emitted ONLY when there are genuine reviews to describe.
 * Marking up invented reviews is both an FTC problem and a Google structured
 * data manual action, so the schema block is gated on the real count.
 */
export default function ReviewsPage() {
  const reviews = PUBLISHED_REVIEWS;
  const avg = averageRating();

  const schema =
    reviews.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': 'https://njforeclosureguide.org/#localbusiness',
          name: 'NJ Foreclosure Guide',
          url: 'https://njforeclosureguide.org',
          ...(avg
            ? {
                aggregateRating: {
                  '@type': 'AggregateRating',
                  ratingValue: avg.value,
                  reviewCount: avg.count,
                },
              }
            : {}),
          review: reviews.map((r) => ({
            '@type': 'Review',
            author: { '@type': 'Person', name: `${r.name}, ${r.town}` },
            datePublished: r.date,
            reviewBody: r.text,
            ...(r.rating
              ? { reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 } }
              : {}),
          })),
        }
      : null;

  return (
    <div className="min-h-full bg-white">
      {schema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      )}

      <nav className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-slate-200 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition">
            <img src="/images/icons/professional-legal-scales-lg.png" alt="NJ Foreclosure Guide" className="h-14 w-14" />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold text-slate-900 tracking-tight">NJ Foreclosure Guide</span>
              <span className="text-[10px] text-slate-500 font-medium tracking-widest uppercase">Free Homeowner Resource</span>
            </div>
          </Link>
          <Link href="/quiz" className="bg-slate-900 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-slate-800 transition text-sm">
            Free Assessment
          </Link>
        </div>
      </nav>

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Reviews</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            What Homeowners Say
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Every review here was written by a real New Jersey homeowner and published only after they
            gave written permission. We show the true number, whatever it happens to be.
          </p>
        </div>
      </section>

      {reviews.length === 0 ? (
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="rounded-2xl border-2 border-slate-300 bg-slate-50 p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Currently showing 0 reviews
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
              We have helped a lot of people. None of them are on this page yet.
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                This work was done by hand for years before the website existed, and in all that time
                nobody was asked whether their foreclosure could be used as marketing. It did not feel
                like the moment, and it was not our story to tell.
              </p>
              <p>
                So we are asking now, properly, one person at a time. Reviews will appear here as
                homeowners send them and say yes to publication. There may be four of them. There may
                eventually be forty. The number you see will be the real number.
              </p>
              <p className="text-slate-900 font-semibold">
                We could have filled this page in an afternoon. Plenty of sites in this industry have.
                That is exactly why an empty page is worth more than a full one here.
              </p>
              <p>
                In the meantime, the thing most people actually want from a reviews page is evidence
                that we know what we are doing. That is better answered by{' '}
                <Link href="/scenarios" className="text-amber-700 font-semibold underline underline-offset-2">
                  eighteen situations walked through end to end
                </Link>
                , including the four that end with the house being lost.
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-amber-300 bg-amber-50 p-6">
            <p className="font-bold text-slate-900 mb-2">Have we helped you before?</p>
            <p className="text-slate-700 text-sm leading-relaxed mb-4">
              If we worked together at some point over the last several years, we would be grateful for
              a few honest sentences. Including the parts that were frustrating. Especially those.
            </p>
            <Link
              href="/reviews/submit"
              className="inline-block bg-slate-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-slate-800 transition text-sm"
            >
              Leave a review
            </Link>
          </div>
        </section>
      ) : (
        <section className="max-w-3xl mx-auto px-4 py-16">
          <div className="flex flex-wrap items-baseline justify-between gap-3 mb-8">
            <p className="text-sm text-slate-500">
              Showing all {reviews.length} {reviews.length === 1 ? 'review' : 'reviews'} we have
              permission to publish.
            </p>
            {avg && (
              <p className="text-sm text-slate-500">
                Average {avg.value} out of 5 across {avg.count} rated reviews.
              </p>
            )}
          </div>

          <div className="space-y-6">
            {reviews.map((r, i) => (
              <article key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                {r.rating && (
                  <p className="text-amber-500 text-sm mb-2" aria-label={`${r.rating} out of 5`}>
                    {'★'.repeat(r.rating)}
                    <span className="text-slate-300">{'★'.repeat(5 - r.rating)}</span>
                  </p>
                )}
                <p className="text-slate-700 leading-relaxed mb-4">{r.text}</p>
                <p className="text-sm font-semibold text-slate-900">
                  {r.name} <span className="font-normal text-slate-500">· {r.town}</span>
                </p>
                {r.situation && <p className="text-xs text-slate-500 mt-1">{r.situation}</p>}
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-xl border border-slate-300 bg-slate-50 p-6">
            <p className="text-sm text-slate-600 leading-relaxed">
              Every review above is published with the writer&apos;s written permission and appears as
              they wrote it. We do not edit reviews into something better, we do not write our own, and
              we remove any review the same day its author asks us to.{' '}
              <Link href="/reviews/submit" className="text-amber-700 font-semibold underline underline-offset-2">
                Leave your own
              </Link>
              .
            </p>
          </div>
        </section>
      )}

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-2">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <p className="max-w-2xl mx-auto leading-relaxed">
          Independent educational resource. Not a law firm, lender, or real estate company. We take no referral fees, no commissions and no advertising money from anything listed. One destination is a related business, labeled wherever it appears. You are never charged.
        </p>
      </footer>
    </div>
  );
}
