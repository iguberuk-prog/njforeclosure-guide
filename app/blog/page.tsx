import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import { ALL_POSTS } from '../../lib/posts';

export const metadata: Metadata = {
  title: 'The Guide Blog | NJ Foreclosure, Explained as It Happens',
  description:
    'Dated, sourced articles on New Jersey foreclosure: the 2026 filing numbers, week-by-week timelines, sheriff sale adjournments, and the mistakes that cost homeowners the most.',
  alternates: { canonical: 'https://njforeclosureguide.org/blog/' },
};

const fmt = (iso: string) =>
  new Date(iso + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

export default function BlogIndex() {
  const posts = [...ALL_POSTS].sort((a, b) => (a.published < b.published ? 1 : -1));
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Dated · Sourced · Bylined</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">The Guide Blog</h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            What is actually happening in New Jersey foreclosure — current numbers, real timelines,
            and the lessons from seven years of doing this work. Every claim sourced, every post
            dated.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-14">
        <div className="space-y-5">
          {posts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}/`}
              className="block border border-slate-200 rounded-2xl px-6 py-6 hover:border-slate-900 hover:shadow-lg hover:shadow-slate-200/70 transition"
            >
              <p className="text-slate-400 text-xs mb-2">{fmt(p.published)} · {p.minutes} min read</p>
              <h2 className="font-serif text-xl font-bold text-slate-900 leading-snug mb-2">{p.title}</h2>
              <p className="text-slate-600 text-sm leading-relaxed">{p.description}</p>
              <p className="text-slate-900 text-sm font-semibold mt-3">Read the article →</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
