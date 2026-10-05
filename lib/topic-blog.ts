// TOPIC BLOG SERIES — combined registry
// ---------------------------------------------------------------------------
// Thirty posts across three themes: free help that works (blog-free-help),
// selling to a vendor (blog-vendor), and listing as the equity play
// (blog-listing). Content lives in data (sections of plain paragraphs) and
// renders through the dynamic /blog/[slug] route alongside the county series.
// ---------------------------------------------------------------------------

import type { PostMeta } from './posts';
import { FREE_HELP_POSTS } from './blog-free-help';
import { VENDOR_POSTS } from './blog-vendor';
import { LISTING_POSTS } from './blog-listing';
import { STORY_POSTS_1 } from './blog-stories-1';
import { STORY_POSTS_2 } from './blog-stories-2';
import { STORY_POSTS_3 } from './blog-stories-3';
import { LETTER_POSTS } from './blog-letters';
import { TIMING_POSTS } from './blog-timing';
import { MONEY_POSTS } from './blog-money';
import { BANKS_POSTS_1 } from './blog-banks-1';
import { BANKS_POSTS_2 } from './blog-banks-2';
import { BANKS_POSTS_3 } from './blog-banks-3';
import { SCENARIO_POSTS } from './blog-scenarios';
import { EXPOSURE_POSTS_1 } from './blog-exposure-1';
import { EXPOSURE_POSTS_2 } from './blog-exposure-2';

export interface TopicPost extends PostMeta {
  theme: 'free-help' | 'vendor' | 'listing' | 'stories' | 'letters' | 'towns' | 'timing' | 'servicers' | 'money' | 'banks' | 'scenarios';
  sections: { h: string; body: string[] }[];
  links: { href: string; label: string }[];
}

export function topicPosts(): TopicPost[] {
  // 2026-10-05 quality cleanup: the town series (blog-towns*.ts, 35 posts) and
  // the servicer series (blog-servicers.ts, 10 posts) are no longer published.
  // They shared most of their text with each other; the old URLs 301 to the
  // county help hub or the servicer page (public/_redirects). Files are kept.
  return [...FREE_HELP_POSTS, ...VENDOR_POSTS, ...LISTING_POSTS, ...STORY_POSTS_1, ...STORY_POSTS_2, ...STORY_POSTS_3, ...LETTER_POSTS, ...TIMING_POSTS, ...MONEY_POSTS, ...BANKS_POSTS_1, ...BANKS_POSTS_2, ...BANKS_POSTS_3, ...SCENARIO_POSTS, ...EXPOSURE_POSTS_1, ...EXPOSURE_POSTS_2];
}

export function getTopicPost(slug: string): TopicPost | undefined {
  return topicPosts().find((p) => p.slug === slug);
}
