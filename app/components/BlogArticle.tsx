import Link from 'next/link';
import SiteHeader from './SiteHeader';
import { ALL_POSTS, PostMeta } from '../../lib/posts';

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

export default function BlogArticle({ post, children }: { post: PostMeta; children: React.ReactNode }) {
  const idx = ALL_POSTS.findIndex((p) => p.slug === post.slug);
  const related = [ALL_POSTS[(idx + 1) % ALL_POSTS.length], ALL_POSTS[(idx + 2) % ALL_POSTS.length]];

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
      url: 'https://njforeclosureguide.org/',
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
            By <span className="text-slate-200 font-semibold">Igor Guberuk</span> · {fmt(post.published)}
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

        <div className="blog-prose space-y-5 text-slate-700 leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-slate-900 [&_h2]:mt-10 [&_h2]:mb-1 [&_h3]:font-bold [&_h3]:text-slate-900 [&_h3]:mt-6 [&_a]:underline [&_a]:underline-offset-4 [&_a]:font-semibold [&_a]:text-slate-900 [&_strong]:text-slate-900">
          {children}
        </div>

        <div className="bg-slate-50 rounded-2xl p-6 my-12">
          <p className="text-slate-700 leading-relaxed mb-4">
            Reading is good; knowing where <em>you</em> stand is better. The free two-minute
            assessment turns this into your specific next step.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
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
