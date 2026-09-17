// BLOG EN ESPAÑOL — registro combinado
// ---------------------------------------------------------------------------
// Spanish-language blog posts, rendered at /es/blog/[slug]. Same factual
// conventions as the English site (NOI 30 días, 35 días para responder,
// mediación gratuita, cura hasta la sentencia final, dos aplazamientos de
// 30 días, redención de 10 días). MarsNoticeEs renders on every page.
// ---------------------------------------------------------------------------

import { ES_POSTS_1 } from './blog-es-1';
import { ES_POSTS_2 } from './blog-es-2';

export interface EsBlogPost {
  slug: string;
  title: string;
  description: string;
  tldr: string;
  published: string;
  updated: string;
  minutes: number;
  sections: { h: string; body: string[] }[];
  links: { href: string; label: string }[];
}

export function esPosts(): EsBlogPost[] {
  return [...ES_POSTS_1, ...ES_POSTS_2];
}

export function getEsPost(slug: string): EsBlogPost | undefined {
  return esPosts().find((p) => p.slug === slug);
}
