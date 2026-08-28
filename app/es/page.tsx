import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../components/SiteHeader';
import MarsNoticeEs from '../components/MarsNoticeEs';
import { SITE_EMAIL, RESPONSE_PROMISE } from '../../lib/contact';

export const metadata: Metadata = {
  title: 'Ayuda con la Ejecución Hipotecaria en Nueva Jersey | Guía Gratuita',
  description:
    '¿Enfrenta una ejecución hipotecaria (foreclosure) en Nueva Jersey? Guía gratuita e independiente en español: sus derechos, las 7 opciones que existen, y cómo evitar estafas. Cinco de las siete opciones le permiten quedarse en su casa.',
  alternates: {
    canonical: 'https://njforeclosureguide.org/es/',
    languages: { en: 'https://njforeclosureguide.org/', es: 'https://njforeclosureguide.org/es/' },
  },
  openGraph: {
    title: 'Ayuda con la Ejecución Hipotecaria en Nueva Jersey | Guía Gratuita',
    description: 'Guía gratuita en español sobre la ejecución hipotecaria en Nueva Jersey: sus derechos y sus 7 opciones.',
    url: 'https://njforeclosureguide.org/es/',
    locale: 'es_US',
  },
};

// Spanish hub. Written directly in plain, neutral Latin American Spanish for
// a homeowner under stress; not machine-translated boilerplate. Legal terms
// keep the English term in parentheses on first use, because the court papers
// arrive in English.

export default function EsHomePage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            Gratis · Confidencial · En español
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-5 tracking-tight">
            ¿Recibió una carta de ejecución hipotecaria?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            Respire. En Nueva Jersey, ningún banco puede quitarle la casa sin pasar por los
            tribunales, y el proceso normalmente toma muchos meses. Ese tiempo es su mayor ventaja,
            y existen siete caminos. Cinco de ellos le permiten quedarse en su casa.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">
          Tres cosas que debe saber hoy
        </h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-12">
          <p>
            <strong className="text-slate-900">1. Usted tiene tiempo y derechos.</strong> Antes de
            demandar, el banco debe enviarle un aviso (Notice of Intention) con al menos 30 días de
            anticipación. Si lo demandan, usted tiene 35 días para responder ante el tribunal. Una
            subasta (sheriff sale) generalmente se puede posponer dos veces, hasta 30 días cada vez.
          </p>
          <p>
            <strong className="text-slate-900">2. Hay ayuda gratuita de verdad.</strong> Los
            consejeros de vivienda aprobados por HUD son gratuitos y muchos hablan español
            (<a href="https://www.hud.gov/i_want_to/talk_to_a_housing_counselor" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">hud.gov</a>).
            Los tribunales de Nueva Jersey ofrecen un programa gratuito de mediación
            (<a href="https://www.njcourts.gov/self-help/foreclosure" target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 font-semibold">njcourts.gov</a>).
            Nunca pague por adelantado a nadie que prometa &quot;salvar su casa&quot;; eso es
            generalmente ilegal, y es la señal número uno de una estafa.
          </p>
          <p>
            <strong className="text-slate-900">3. Quedarse callado es lo único que no funciona.</strong>{' '}
            Las personas que pierden todo suelen ser las que dejaron de abrir el correo. Responder,
            llamar a su banco y pedir ayuda mantiene abiertas sus opciones.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Guías en español</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <Link href="/es/opciones" className="border border-slate-200 rounded-2xl px-5 py-5 hover:border-slate-400 hover:shadow-sm transition group">
            <p className="font-bold text-slate-900">Las 7 opciones</p>
            <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
              Desde ponerse al día hasta vender: qué es cada opción, qué tan rápido funciona y cuál
              le conviene.
            </p>
          </Link>
          <Link href="/es/documentos" className="border border-slate-200 rounded-2xl px-5 py-5 hover:border-slate-400 hover:shadow-sm transition group">
            <p className="font-bold text-slate-900">Su carta, explicada</p>
            <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
              Cada documento del proceso en orden: qué significa, cuánto tiempo tiene y qué hacer
              esta semana.
            </p>
          </Link>
          <Link href="/es/estafas" className="border border-slate-200 rounded-2xl px-5 py-5 hover:border-slate-400 hover:shadow-sm transition group">
            <p className="font-bold text-slate-900">Cómo detectar estafas</p>
            <p className="text-slate-500 text-sm mt-1.5 leading-relaxed">
              Las 7 señales de alerta del fraude de &quot;rescate&quot; hipotecario, y dónde
              denunciarlo.
            </p>
          </Link>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <h2 className="font-serif text-xl font-bold text-slate-900 mb-3">¿Necesita hablar con alguien?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Escríbanos en español a{' '}
            <a href={`mailto:${SITE_EMAIL}`} className="text-slate-900 underline underline-offset-4 font-semibold break-all">
              {SITE_EMAIL}
            </a>{' '}
            y cuéntenos su situación. {RESPONSE_PROMISE.replace(
              'We read every message and reply within one business day.',
              'Leemos cada mensaje y respondemos dentro de un día hábil.'
            )}{' '}
            También puede usar nuestra evaluación gratuita de 2 minutos (por ahora en inglés):
          </p>
          <Link href="/quiz" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            Evaluación gratuita (en inglés)
          </Link>
        </div>

        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Información educativa, no asesoría legal. Este sitio es gratuito, no cobra honorarios de
          ninguna empresa que menciona (con una excepción divulgada: una inmobiliaria relacionada con
          los operadores del sitio, señalada donde aparece), y nunca le pedirá dinero. Los documentos
          de su propio caso, que llegan en inglés, son los que controlan sus plazos.
        </p>
      </section>

      <MarsNoticeEs />
    </div>
  );
}
