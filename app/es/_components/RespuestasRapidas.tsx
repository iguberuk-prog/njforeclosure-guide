import type { FaqItem } from '../../components/GuideFaq';

/**
 * Spanish counterpart of app/components/GuideFaq.tsx ("Quick answers"), which
 * hardcodes an English heading. Renders the questions visibly AND emits the
 * matching FAQPage JSON-LD from the same array, so the structured data always
 * matches what is on the page. Same compliance rules: no outcome promises,
 * free help first, "generalmente" over "siempre."
 *
 * Lives in a private (_components) folder so it never becomes a route.
 */
export default function RespuestasRapidas({ items }: { items: FaqItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
  return (
    <section className="max-w-3xl mx-auto px-4 pb-4">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Respuestas rápidas</h2>
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
