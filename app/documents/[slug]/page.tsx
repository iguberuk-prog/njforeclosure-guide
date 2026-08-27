import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../components/SiteHeader';
import { DOCUMENTS, getDocument } from '../../../lib/documents';

export function generateStaticParams() {
  return DOCUMENTS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const doc = getDocument(slug);
  if (!doc) return {};
  const title = `${doc.shortName} in NJ | What It Means and What To Do`;
  const description = `${doc.whatItIs.split('. ')[0]}. How much time you have, what is still possible, and the three things to do the week it arrives.`;
  return {
    title,
    description,
    alternates: { canonical: `https://njforeclosureguide.org/documents/${doc.slug}/` },
    openGraph: { title, description, url: `https://njforeclosureguide.org/documents/${doc.slug}/` },
  };
}

export default async function DocumentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const doc = getDocument(slug);
  if (!doc) notFound();

  const idx = DOCUMENTS.findIndex((d) => d.slug === doc.slug);
  const prev = idx > 0 ? DOCUMENTS[idx - 1] : null;
  const next = idx < DOCUMENTS.length - 1 ? DOCUMENTS[idx + 1] : null;

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What is a ${doc.name} in New Jersey?`,
        acceptedAnswer: { '@type': 'Answer', text: doc.whatItIs },
      },
      {
        '@type': 'Question',
        name: `How much time do I have after receiving a ${doc.shortName}?`,
        acceptedAnswer: { '@type': 'Answer', text: doc.clock },
      },
      {
        '@type': 'Question',
        name: `What options are still available at this stage?`,
        acceptedAnswer: { '@type': 'Answer', text: doc.stillOpen },
      },
    ],
  };

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Document {doc.stage} of {DOCUMENTS.length} · {doc.stageLabel}
          </p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold mb-4 tracking-tight">{doc.name}</h1>
          <p className="text-slate-300 text-lg leading-relaxed">{doc.panic}</p>
        </div>
      </section>

      <article className="max-w-3xl mx-auto px-4 py-12">
        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">What this document is</h2>
          <p className="text-slate-600 leading-relaxed">{doc.whatItIs}</p>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">Your clock</h2>
          <div className="border-l-2 border-amber-400 pl-5">
            <p className="text-slate-700 leading-relaxed">{doc.clock}</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">What to do this week</h2>
          <ol className="space-y-4">
            {doc.whatToDo.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-3">What is still possible</h2>
          <p className="text-slate-600 leading-relaxed">{doc.stillOpen}</p>
        </section>

        <div className="bg-slate-50 rounded-2xl p-6 mb-10">
          <p className="text-slate-700 leading-relaxed mb-4">
            Two minutes of questions tells you which of these options actually fit your numbers and
            your timeline.
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            See My Options, Free
          </Link>
        </div>

        <nav className="flex justify-between gap-4 text-sm">
          {prev ? (
            <Link href={`/documents/${prev.slug}/`} className="text-slate-600 hover:text-slate-900 underline underline-offset-4">
              ← Before this: {prev.shortName}
            </Link>
          ) : <span />}
          {next ? (
            <Link href={`/documents/${next.slug}/`} className="text-slate-600 hover:text-slate-900 underline underline-offset-4 text-right">
              What can come next: {next.shortName} →
            </Link>
          ) : <span />}
        </nav>
        <p className="text-slate-400 text-xs mt-8 leading-relaxed">
          Educational information, not legal advice. Deadlines reflect New Jersey law generally; your
          case may differ, and a licensed New Jersey attorney can confirm what applies.
        </p>
      </article>
    </div>
  );
}
