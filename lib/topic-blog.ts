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
import { TOWN_POSTS } from './blog-towns';
import { TIMING_POSTS } from './blog-timing';

export interface TopicPost extends PostMeta {
  theme: 'free-help' | 'vendor' | 'listing' | 'stories' | 'letters' | 'towns' | 'timing';
  sections: { h: string; body: string[] }[];
  links: { href: string; label: string }[];
}

export function topicPosts(): TopicPost[] {
  return [...FREE_HELP_POSTS, ...VENDOR_POSTS, ...LISTING_POSTS, ...STORY_POSTS_1, ...STORY_POSTS_2, ...STORY_POSTS_3, ...LETTER_POSTS, ...TOWN_POSTS, ...TIMING_POSTS];
}

export function getTopicPost(slug: string): TopicPost | undefined {
  return topicPosts().find((p) => p.slug === slug);
}
