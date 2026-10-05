import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import SiteHeader from '../../../components/SiteHeader';
import MarsNoticeEs from '../../../components/MarsNoticeEs';
import type { FaqItem } from '../../../components/GuideFaq';
import RespuestasRapidas from '../../_components/RespuestasRapidas';
import CountySaleStatsEs from '../../_components/CountySaleStatsEs';
import CountySaleCalendar from '../../../components/CountySaleCalendar';
import { SHERIFF_SOURCES, getSheriffSource, SHERIFF_DATA_VERIFIED_ES } from '../../../../lib/sheriff-sales';
import { sheriffAngleFor } from '../../../../lib/county-blog';
import { REPORT, AS_OF_MEDIUM_ES, AS_OF_MONTH_ES, num, countyStats } from '../../../../lib/sheriff-report';
import { townPagesForCounty } from '../../../../lib/town-sales';
import { OG_IMAGES } from '../../../../lib/og';
import { fitTitle, fitDescription } from '../../../../lib/seo';

/**
 * Spanish county sheriff sale pages. Mirrors the facts on
 * /sheriff-sales/<county>/ (same sources, same "generalmente" strength):
 * N.J.S.A. 2A:17-36 adjournments, R. 4:65-5 ten-day objection period, the
 * surplus rule. No outcome promises. Official county sites are in English and
 * we say so. Carries MarsNoticeEs like every /es page.
 */

const BASE = 'https://njforeclosureguide.org';

export function generateStaticParams() {
  return SHERIFF_SOURCES.map((s) => ({ county: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) return {};
  const stats = countyStats(src.slug);
  const urlEs = `${BASE}/es/ventas-del-sheriff/${src.slug}/`;
  const title = stats
    ? fitTitle(`Subastas del Sheriff en el Condado de ${src.county} (NJ) | ${AS_OF_MONTH_ES}`)
    : fitTitle(`Subastas del Sheriff en el Condado de ${src.county} (NJ) | Lista Oficial`);
  const description = stats
    ? fitDescription(`${num(stats.county.openListings)} subastas del sheriff programadas en el condado de ${src.county} al ${AS_OF_MEDIUM_ES}. Lista oficial, próxima fecha, cómo aplazar la subasta y ayuda gratuita en español.`)
    : fitDescription(`La lista oficial de subastas del sheriff del condado de ${src.county}, cómo confirmar o aplazar una fecha según la ley de NJ, y ayuda gratuita en español para propietarios.`);
  return {
    title,
    description,
    // Templated page kept for visitors but out of Google's index (2026-10-05 quality cleanup).
    robots: { index: false, follow: true },
    alternates: { canonical: urlEs },
    openGraph: { images: OG_IMAGES, title, description, url: urlEs, locale: 'es_US' },
  };
}

export default async function CondadoSubastasPage({ params }: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const src = getSheriffSource(county);
  if (!src) notFound();
  const c = sheriffAngleFor(src.slug);
  const towns = townPagesForCounty(src.slug);
  const NOTICE = src.notice;

  const faq: FaqItem[] = [
    {
      q: `¿Dónde publica el condado de ${src.county} las subastas del sheriff?`,
      a: src.usesCivilView
        ? `El condado de ${src.county} publica sus subastas de ejecución hipotecaria en el sistema estatal CivilView, donde puede buscar por dirección o por nombre del demandado y ver la fecha programada y el estado. El sitio está en inglés.`
        : `El condado de ${src.county} publica su propia lista de subastas en el sitio oficial del sheriff, donde aparecen las próximas subastas y sus fechas. El sitio está en inglés.`,
    },
    {
      q: `¿Se puede aplazar una subasta del sheriff en el condado de ${src.county}?`,
      a: 'Generalmente sí. Según N.J.S.A. 2A:17-36, el propietario puede pedir dos aplazamientos de la subasta, de hasta 30 días cada uno, en la oficina del sheriff, normalmente con un pequeño cargo. Un tribunal puede ordenar más aplazamientos por causa justificada. Consulte a un abogado con licencia en Nueva Jersey sobre su caso.',
    },
    {
      q: '¿Tener fecha de subasta significa que ya perdí la casa?',
      a: 'No. Hasta que la subasta ocurre (y durante el período de 10 días para objeciones que sigue), todavía puede haber opciones: ponerse al día con el préstamo, vender la casa, o la suspensión automática de una bancarrota del Capítulo 13. Cuáles son realistas depende del tiempo que quede, así que actuar antes de la fecha es lo más importante.',
    },
  ];

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `Subastas del sheriff en el condado de ${src.county}`,
    url: `${BASE}/es/ventas-del-sheriff/${src.slug}/`,
    inLanguage: 'es',
    ...(countyStats(src.slug) ? { dateModified: REPORT.asOfDate } : {}),
    isPartOf: { '@type': 'WebSite', name: 'NJ Foreclosure Guide', url: `${BASE}/` },
    about: { '@type': 'Place', name: `${src.county} County, New Jersey` },
  };

  const btn = 'text-slate-900 underline underline-offset-4 font-semibold';

  return (
    <div className="min-h-full bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">Directorio de subastas del sheriff</p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            Subastas del Sheriff en el Condado de {src.county}
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            La lista oficial del condado de {src.county}, el contacto de la oficina del sheriff y, si es su casa
            la que aparece, cómo usar el tiempo que le da la ley de Nueva Jersey.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="bg-amber-400 text-slate-950 px-7 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
              Ver la lista oficial (en inglés) →
            </a>
            <Link href="/es/evaluacion" className="border border-white/30 px-7 py-3.5 rounded-lg font-bold hover:bg-white/10 transition">
              Es mi casa: ¿qué puedo hacer?
            </Link>
          </div>
          <p className="text-slate-400 text-sm mt-5">
            <Link href={`/sheriff-sales/${src.slug}/`} className="underline underline-offset-2" hrefLang="en">Read this page in English</Link>
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        {NOTICE && (
          <div className="rounded-2xl border-2 border-amber-400 bg-amber-50 px-6 py-5 mb-10" role="note">
            <p className="font-bold text-slate-900 mb-1">Aviso del condado</p>
            <p className="text-slate-700 leading-relaxed">{NOTICE.es}</p>
            <p className="text-slate-500 text-xs mt-2">
              Leído en el sitio del condado el {new Date(`${NOTICE.checked}T12:00:00Z`).toLocaleDateString('es-US', { timeZone: 'UTC', month: 'long', day: 'numeric', year: 'numeric' })}.
            </p>
          </div>
        )}
        <CountySaleStatsEs slug={src.slug} county={src.county} officialUrl={src.salesUrl} />
        <CountySaleCalendar slug={src.slug} county={src.county} lang="es" />

        {towns.length > 0 && (
          <div className="border border-slate-200 rounded-2xl px-6 py-5 mb-10">
            <p className="font-bold text-slate-900 mb-2">Subastas por localidad (en inglés)</p>
            <div className="flex flex-wrap gap-2">
              {towns.map((t) => (
                <Link key={t.slug} href={`/sheriff-sales/${src.slug}/${t.slug}/`} className="text-sm border border-slate-200 rounded-full px-3 py-1.5 text-slate-700 hover:bg-slate-50">
                  {t.town}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="border border-slate-200 rounded-2xl p-6 mb-10">
          <h2 className="font-bold text-slate-900 text-lg mb-4">Fuentes oficiales</h2>
          <div className="space-y-3 text-slate-700">
            <p>
              <span className="font-semibold text-slate-900">Lista de subastas: </span>
              <a href={src.salesUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 break-all">
                {src.usesCivilView ? `Condado de ${src.county} en CivilView` : `Subastas del sheriff del condado de ${src.county}`}
              </a>
            </p>
            <p>
              <span className="font-semibold text-slate-900">Oficina del sheriff: </span>
              <a href={src.sheriffUrl} target="_blank" rel="noopener noreferrer" className="text-slate-900 underline underline-offset-4 break-all">
                {src.sheriffUrl.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
              </a>
            </p>
            {src.phone && (
              <p><span className="font-semibold text-slate-900">Teléfono: </span>{src.phone}</p>
            )}
            {src.address && (
              <p>
                <span className="font-semibold text-slate-900">
                  {src.address.startsWith('Sales held at:') ? 'Dónde se hacen las subastas: ' : 'Dirección: '}
                </span>
                {src.address.replace(/^Sales held at:\s*/, '')}
              </p>
            )}
            {!src.phone && (
              <p className="text-slate-500 text-sm">
                No pudimos verificar un teléfono en el sitio del condado, así que no publicamos uno. Use el sitio del sheriff.
              </p>
            )}
          </div>
          <p className="text-slate-400 text-xs mt-4">
            Verificado en fuentes oficiales del condado el {SHERIFF_DATA_VERIFIED_ES}. El sitio del condado es siempre la autoridad. Los sitios oficiales están en inglés; si necesita ayuda para leerlos, muchos consejeros de vivienda gratuitos en Nueva Jersey atienden en español.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Cómo funciona la subasta en el condado de {src.county}</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            La venta del sheriff (sheriff sale) es una subasta pública de la propiedad para pagar la sentencia de
            ejecución hipotecaria. Los postores deben cumplir las condiciones de depósito y pago del condado. El
            prestamista normalmente ofrece hasta lo que se le debe y, si nadie ofrece más, la propiedad vuelve al
            prestamista.
          </p>
          <p>
            Dos cosas importan más para el propietario. La fecha de la lista cambia a menudo, así que revísela cada
            semana en vez de confiar en el aviso que le llegó por correo. Y si la subasta deja más dinero que la
            sentencia, ese sobrante le pertenece y hay que reclamarlo en el tribunal; no se envía automáticamente.{' '}
            <Link href="/es/herramientas/fondos-sobrantes" className={btn}>Calcule si hubo fondos sobrantes</Link>.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Si su casa tiene fecha de subasta</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
            <strong className="text-slate-900">¿Tiene una fecha?</strong>{' '}
            <Link href="/es/herramientas/cuenta-regresiva" className={btn}>Use la cuenta regresiva</Link>{' '}
            para ver cuántos días le quedan, cuánto pueden moverla los aplazamientos y un plan para hoy.
          </p>
          <p>
            <strong className="text-slate-900">Primero, confirme la fecha real</strong> en la lista oficial. Las
            subastas se aplazan con frecuencia y el aviso que recibió puede no estar al día.
          </p>
          <p>
            <strong className="text-slate-900">Segundo, conozca su derecho a aplazar.</strong> En Nueva Jersey el
            propietario generalmente puede pedir dos aplazamientos de la subasta, de hasta 30 días cada uno, en la
            oficina del sheriff, y un tribunal puede conceder más en ciertas circunstancias. Bien usado, ese tiempo
            alcanza para cerrar la venta de la casa, ponerse al día o presentar un Capítulo 13.
          </p>
          <p>
            <strong className="text-slate-900">Tercero, use el tiempo con un plan.</strong> Una subasta aplazada sin
            plan es solo una subasta más tarde. Nuestra{' '}
            <Link href="/es/evaluacion" className={btn}>evaluación gratuita</Link> le dice cuáles de las siete
            opciones todavía aplican en su etapa.
          </p>
          <p>
            <strong className="text-slate-900">Pídalo con tiempo y hágalo usted mismo.</strong>{' '}Pida el aplazamiento
            días antes, no la misma mañana, y confirme la nueva fecha en la lista oficial. Nunca le pague a un tercero
            para &quot;aplazar su subasta&quot;: la solicitud es suya, y cobrar por adelantado por servicios de
            rescate de ejecuciones hipotecarias generalmente es ilegal en Nueva Jersey.{' '}
            <Link href="/es/estafas" className={btn}>Cómo reconocer estafas</Link>.
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Después de la subasta</h2>
        <div className="space-y-4 text-slate-600 leading-relaxed mb-10">
          <p>
            Una subasta realizada no siempre es la última palabra. Las reglas del tribunal de Nueva Jersey
            generalmente dan un período de 10 días después de la subasta para objeciones y para que el propietario
            recupere la casa pagando lo que debe, antes de que se entregue la escritura del sheriff. Aun así, el
            comprador necesita una orden judicial de posesión, ejecutada por el sheriff, antes de que alguien tenga
            que salir.
          </p>
          <p>
            <Link href="/es/guias/despues-de-la-subasta" className={btn}>La guía completa de después de la subasta</Link>
          </p>
        </div>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-2">Ayuda gratuita para propietarios del condado de {src.county}</h2>
        <p className="text-slate-600 text-sm leading-relaxed mb-5">Todo es gratis. No recibimos pago de ninguno de ellos.</p>
        <div className="space-y-3 mb-10">
          <div className="border border-slate-200 rounded-xl px-5 py-4">
            <p className="font-bold text-slate-900 text-sm">Consejeros de vivienda aprobados por HUD: 800-569-4287</p>
            <p className="text-slate-600 text-sm mt-0.5">Gratis por diseño federal, y muchas agencias en Nueva Jersey atienden en español. Le ayudan a preparar la solicitud de asistencia y la mediación.</p>
          </div>
          <div className="border border-slate-200 rounded-xl px-5 py-4">
            <p className="font-bold text-slate-900 text-sm">Legal Services of New Jersey: 1-888-576-5529</p>
            <p className="text-slate-600 text-sm mt-0.5">Defensa legal gratuita para propietarios con ingresos que califican.</p>
          </div>
          {c?.orgs.slice(0, 3).map((org) => (
            <div key={org.name} className="border border-slate-200 rounded-xl px-5 py-4">
              <a href={org.url} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 text-sm underline underline-offset-4">
                {org.name}
              </a>
              <p className="text-slate-600 text-sm mt-0.5">Organización local (sitio en inglés).</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <Link href="/es/evaluacion" className="bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold text-center hover:bg-amber-300 transition">
            Ver mis opciones, gratis
          </Link>
          <Link href="/es/ventas-del-sheriff/" className="border border-slate-300 text-slate-900 px-8 py-3.5 rounded-lg font-semibold text-center hover:bg-slate-50 transition">
            Todos los condados
          </Link>
        </div>
      </section>

      <RespuestasRapidas items={faq} />

      <section className="max-w-3xl mx-auto px-4 pb-12">
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Esta página es información educativa, no asesoría legal. Los plazos y procedimientos dependen de cada caso;
          un abogado con licencia en Nueva Jersey puede confirmar lo que aplica al suyo.
        </p>
      </section>
      <MarsNoticeEs />
    </div>
  );
}
