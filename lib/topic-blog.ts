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

export interface TopicPost extends PostMeta {
  theme: 'free-help' | 'vendor' | 'listing';
  sections: { h: string; body: string[] }[];
  links: { href: string; label: string }[];
}

export function topicPosts(): TopicPost[] {
  return [...FREE_HELP_POSTS, ...VENDOR_POSTS, ...LISTING_POSTS];
}

export function getTopicPost(slug: string): TopicPost | undefined {
  return topicPosts().find((p) => p.slug === slug);
}
