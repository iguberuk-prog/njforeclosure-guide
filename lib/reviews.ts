// REAL REVIEWS ONLY
// ---------------------------------------------------------------------------
// Nothing goes in this file unless an actual person wrote it and gave written
// permission to publish it.
//
// HOW TO ADD ONE:
//   1. A past client replies to your outreach email, or submits through
//      /reviews/submit.
//   2. You email back asking, in writing, for permission to publish it as
//      "First name Last initial, Town". Save their yes.
//   3. Paste their words below. Fix a typo if you must. Change nothing else.
//   4. Set `permissionOnFile` to the date they said yes.
//
// WHY THIS MATTERS, beyond decency: the FTC's Rule on the Use of Consumer
// Reviews and Testimonials (16 CFR Part 465) prohibits publishing reviews by
// people who did not have the experience described, and authorises civil
// penalties per violation. A written yes in your inbox is the entire defence.
//
// NEVER:
//   - write a review yourself, or improve one into something better
//   - combine two people into one "composite"
//   - add a star rating the person did not give
//   - paste in anything generated, however real it reads
//
// A page showing four honest reviews outperforms one showing two hundred
// invented ones, because a reader can tell the difference and so can a
// regulator. Leave this array empty until the real ones arrive.
// ---------------------------------------------------------------------------

export interface Review {
  /** As published: first name, last initial. Never a full surname. */
  name: string;
  /** Their town. Real one. */
  town: string;
  /** Their words, verbatim. */
  text: string;
  /** Only if they gave one, 1 to 5. Omit rather than assume. */
  rating?: number;
  /** ISO date the review was written or received. */
  date: string;
  /** ISO date they gave written permission to publish. Required. */
  permissionOnFile: string;
  /** Optional one-line context you can verify, e.g. 'Sold before a sheriff sale'. */
  situation?: string;
}

export const REVIEWS: Review[] = [
  // Empty on purpose. See the note above.
];

/** Only reviews with permission recorded are ever eligible to display. */
export const PUBLISHED_REVIEWS = REVIEWS.filter((r) => Boolean(r.permissionOnFile));

/**
 * Average rating across reviews that actually carry one.
 * Returns null below a floor, because an "average" of one or two ratings is
 * not an average and should not be presented as one.
 */
export function averageRating(): { value: number; count: number } | null {
  const rated = PUBLISHED_REVIEWS.filter((r) => typeof r.rating === 'number');
  if (rated.length < 5) return null;
  const sum = rated.reduce((a, r) => a + (r.rating as number), 0);
  return { value: Math.round((sum / rated.length) * 10) / 10, count: rated.length };
}
