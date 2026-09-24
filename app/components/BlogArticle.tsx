import Link from 'next/link';
import SiteHeader from './SiteHeader';
import { ALL_POSTS, PostMeta } from '../../lib/posts';
import BlogCapture from './BlogCapture';

/**
 * Shared shell for blog articles, built for answer engines as much as for
 * people. Every post gets:
 *
 *  - Article JSON-LD with real dates and a named author (E-E-A-T signals).
 *  - A TL;DR box at the top carrying the registry's quotable answer — the
 *    paragraph AI engines lift. It renders before the prose on purpose.
 *  - Honest bylines: Igor has actually done this work for ~7 years; the
 *    credibility claims stay within what is true.
 *
 * The article body arrives as children (JSX prose from each post's page).
 */

const fmt = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Topical related posts (replaces "next two in the array"). Scores other
// posts by shared meaningful words in slug + title, so a surplus-funds post
// links to other surplus/after-sale posts. Better for readers, and it gives
// Google topical internal links to reach the deeper posts it has not
// crawled yet. Ties fall back to registry order, so output is deterministic.
const STOP = new Set(
  'a an and are as at be by can do does for from how i if in is it its my nj new jersey of on or the to what when why with you your yours this that after before foreclosure county house home mortgage'.split(' ')
);
const words = (p: PostMeta) =>
  new Set(
    `${p.slug.replace(/-/g, ' ')} ${p.title}`
      .toLowerCase()
      .replace(/[^a-z0-9 ]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !STOP.has(w))
      .map((w) => w.slice(0, 6)) // crude stem: adjourn/adjournment/adjournments
  );
// Rarer shared words count more (IDF), so "surplus" outweighs "sale".
let DF: Map<string, number> | null = null;
function df() {
  if (DF) return DF;
  DF = new Map();
  for (const p of ALL_POSTS) words(p).forEach((w) => DF!.set(w, (DF!.get(w) ?? 0) + 1));
  return DF;
}
function relatedPosts(post: PostMeta, n: number): PostMeta[] {
  const mine = words(post);
  const freq = df();
  const idx = ALL_POSTS.findIndex((p) => p.slug === post.slug);
  const scored = ALL_POSTS.map((p, i) => {
    if (p.slug === post.slug) return { p, s: -1, i };
    let s = 0;
    words(p).forEach((w) => {
      if (mine.has(w)) s += 1 / (freq.get(w) ?? 1);
    });
    return { p, s, i: (i - idx + ALL_POSTS.length) % ALL_POSTS.length };
  })
    .filter((x) => x.s >= 0)
    .sort((a, b) => b.s - a.s || a.i - b.i);
  return scored.slice(0, n).map((x) => x.p);
}

export default function BlogArticle({ post, children }: { post: PostMeta; children: React.ReactNode }) {
  const related = relatedPosts(post, 4);

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    author: {
      '@type': 'Person',
      name: 'Igor Guberuk',
      description:
        'Has helped New Jersey homeowners in foreclosure understand their options for about seven years; founder of NJ Foreclosure Guide.',
      url: 'https://njforeclosureguide.org/about/',
    },
    publisher: { '@type': 'Organization', name: 'NJ Foreclosure Guide', url: 'https://njforeclosureguide.org/' },
    mainEntityOfPage: `https://njforeclosureguide.org/blog/${post.slug}/`,
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/blog" className="hover:text-amber-300">The Guide Blog</Link>
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold tracking-tight leading-snug mb-5">{post.title}</h1>
          <p className="text-slate-400 text-sm">
            By <Link href="/about" className="text-slate-200 font-semibold hover:text-amber-300 underline-offset-4 hover:underline">Igor Guberuk</Link> · {fmt(post.published)}
            {post.updated !== post.published && <> · Updated {fmt(post.updated)}</>} · {post.minutes} min read
          </p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        {/* The quotable answer, first. */}
        <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/50 px-6 py-5 mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-amber-800 mb-2">The short version</p>
          <p className="text-slate-800 leading-relaxed text-[15px]">{post.tldr}</p>
        </div>

        <Link
          href="/command-center"
          className="flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-5 py-3 mb-10 -mt-6 hover:border-slate-400 transition no-underline"
        >
          <span className="text-sm text-slate-700">
            <strong className="text-slate-900">Behind on payments?</strong> Answer 3 questions, get your deadlines and best free moves.
          </span>
          <span className="text-sm font-bold text-amber-700 whitespace-nowrap">Free plan →</span>
        </Link>

        <div className="blog-prose space-y-5 text-slate-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-1 [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold [&_a]:text-slate-900 [&_strong]:text-slate-900">
          {children}
        </div>

        <BlogCapture slug={post.slug} />

        <div className="bg-slate-50 rounded-2xl p-6 my-12">
          <p className="text-slate-700 leading-relaxed mb-4">
            Reading is good; knowing where <em>you</em> stand is better. The free two-minute
            assessment turns this into your specific next step.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-2 mb-12 not-prose">
          {[
            { h: '/case-map', t: 'The Case Map', d: 'Tap where you are; see what\u2019s still open.' },
            { h: '/my-plan', t: 'My Battle Plan', d: 'Your deadlines on one printable page.' },
            { h: '/tools/cost-of-waiting', t: 'Cost of Waiting', d: 'What another month of nothing costs.' },
          ].map((t) => (
            <Link key={t.h} href={t.h} className="rounded-xl border border-slate-200 px-4 py-3.5 hover:border-slate-400 transition no-underline">
              <span className="block text-sm font-bold text-slate-900">{t.t}</span>
              <span className="block text-xs text-slate-500 mt-0.5 leading-relaxed">{t.d}</span>
            </Link>
          ))}
        </div>

        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">Keep reading</p>
        <ul className="space-y-2 mb-10">
          {related.map((r) => (
            <li key={r.slug}>
              <Link href={`/blog/${r.slug}/`} className="text-slate-700 underline underline-offset-4 hover:text-slate-900">
                {r.title}
              </Link>
            </li>
          ))}
        </ul>

        <p className="text-slate-400 text-xs leading-relaxed">
          Educational information, not legal or tax advice. Your own court documents control your
          deadlines; licensed New Jersey professionals can confirm what applies to your case.
        </p>
      </article>
    </div>
  );
}
