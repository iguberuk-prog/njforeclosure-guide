import Link from 'next/link';
import SiteHeader from './SiteHeader';
import type { ReactNode } from 'react';

export const LAST_UPDATED = 'August 25, 2026';
export const CONTACT_EMAIL = 'help@njforeclosureguide.org';

export function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">{title}</h2>
      <div className="space-y-3 text-slate-600 leading-relaxed text-[15px]">{children}</div>
    </section>
  );
}

export function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-5 list-disc marker:text-amber-500">
      {items.map((t, i) => (
        <li key={i} className="text-slate-600 leading-relaxed text-[15px]">
          {t}
        </li>
      ))}
    </ul>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-full bg-white">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">{eyebrow}</p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-tight">{title}</h1>
          <p className="text-slate-300 leading-relaxed">{intro}</p>
          <p className="text-slate-500 text-sm mt-5">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-14">{children}</article>

      <section className="max-w-3xl mx-auto px-4 pb-16">
        <div className="rounded-xl border border-slate-300 bg-slate-50 p-6">
          <p className="font-bold text-slate-900 mb-2 text-sm">Questions about this page?</p>
          <p className="text-slate-600 text-sm leading-relaxed">
            Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-amber-700 font-semibold underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>{' '}
            and we will respond. If you want your information deleted, say so and we will remove it.
          </p>
        </div>
        <p className="text-xs text-slate-400 mt-6 leading-relaxed text-center">
          This page describes our actual practices in plain language. It is not legal advice, and it is not a substitute
          for review by a licensed New Jersey attorney.
        </p>
      </section>

      <footer className="bg-slate-950 text-slate-500 py-10 px-4 text-center text-xs">
        <p className="mb-3">&copy; 2026 NJ Foreclosure Guide. All rights reserved.</p>
        <div className="flex gap-5 justify-center flex-wrap">
          <Link href="/" className="hover:text-amber-400 transition">Home</Link>
          <Link href="/privacy" className="hover:text-amber-400 transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-amber-400 transition">Terms of Use</Link>
          <Link href="/disclaimer" className="hover:text-amber-400 transition">Disclaimer</Link>
        </div>
      </footer>
    </div>
  );
}
