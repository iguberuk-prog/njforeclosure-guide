/**
 * A "Quick answers" block for guide pages: renders the questions visibly AND
 * emits matching FAQPage JSON-LD, which is what lets Google, AI Overviews,
 * ChatGPT and Perplexity lift the site as a cited answer. Google requires the
 * structured data to match content that is actually on the page, so both
 * views are generated from the same array — never let them drift apart.
 *
 * Compliance note: answers here follow the same rules as everything else on
 * the site — no outcome promises, free help first, "generally" over "always."
 */

export interface FaqItem {
  q: string;
  a: string;
}

export default function GuideFaq({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <section className="max-w-3xl mx-auto px-4 pb-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Quick answers</h2>
      <div className="space-y-6">
        {items.map((i) => (
          <div key={i.q}>
            <h3 className="font-bold text-slate-900 mb-1">{i.q}</h3>
            <p className="text-slate-600 leading-relaxed">{i.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
