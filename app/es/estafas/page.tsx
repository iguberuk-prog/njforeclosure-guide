import Link from 'next/link';
import type { Metadata } from 'next';
import SiteHeader from '../../components/SiteHeader';
import MarsNoticeEs from '../../components/MarsNoticeEs';

export const metadata: Metadata = {
  title: 'Estafas de "Rescate" Hipotecario en NJ | Las Señales',
  description:
    'Cómo distinguir la ayuda real de una estafa de rescate hipotecario en Nueva Jersey, en español: las 7 señales de alerta, lo que prohíbe la ley (cobrar por adelantado es generalmente ilegal), y dónde denunciar.',
  alternates: {
    canonical: 'https://njforeclosureguide.org/es/estafas/',
    languages: { en: 'https://njforeclosureguide.org/scams/', es: 'https://njforeclosureguide.org/es/estafas/' },
  },
  openGraph: {
    title: 'Estafas de "Rescate" Hipotecario en NJ | Las Señales',
    description: 'Las 7 señales de alerta del fraude de rescate hipotecario, y dónde denunciarlo.',
    url: 'https://njforeclosureguide.org/es/estafas/',
    locale: 'es_US',
  },
};

const FLAGS: { flag: string; why: string }[] = [
  {
    flag: 'Quieren dinero antes de haber hecho nada',
    why: 'Bajo la ley federal (la regla MARS), las empresas de "alivio hipotecario" generalmente no pueden cobrarle hasta que usted tenga en la mano una oferta escrita de su banco y la acepte. La ley de Nueva Jersey también prohíbe que los "consultores de foreclosure" cobren por adelantado. Un cobro por adelantado no es una señal amarilla; es LA señal.',
  },
  {
    flag: '"Deje de hablar con su banco" o "no busque abogado"',
    why: 'Nadie que lo esté ayudando gana nada con que usted tenga menos información. Aislarlo de su banco, de un consejero de HUD o de un abogado solo beneficia a quien necesita que usted no verifique lo que le dicen.',
  },
  {
    flag: 'Le piden firmar la escritura (deed) "temporalmente"',
    why: 'El arreglo de "fírmela y nos la renta de vuelta" es la estafa clásica para robarle el valor de su casa, y está específicamente regulado por la ley de Nueva Jersey. Una vez que la escritura cambia de manos, usted perdió la palanca. No firme su escritura sin un abogado propio.',
  },
  {
    flag: 'Garantías: "detenemos cualquier foreclosure"',
    why: 'Nadie puede garantizar el resultado de una ejecución hipotecaria: ni un abogado, ni una empresa, ni este sitio. El resultado depende de su banco, sus números y su tiempo. Una garantía es una táctica de venta.',
  },
  {
    flag: 'Presión para firmar hoy, en su puerta',
    why: 'Los avisos de subasta son públicos, así que los "rescatistas" llegan en oleadas justo antes de la fecha. Las opciones legítimas no se vencen esta tarde: en Nueva Jersey usted generalmente puede posponer la subasta dos veces, hasta 30 días cada vez.',
  },
  {
    flag: 'Dicen ser "del gobierno", vagamente',
    why: 'La ayuda del gobierno existe y es gratuita: los consejeros aprobados por HUD y el programa de mediación de los tribunales de Nueva Jersey. Cualquiera que cobre por acceso a un programa del gobierno le está vendiendo una llamada que usted puede hacer gratis.',
  },
  {
    flag: 'Que los pagos de la hipoteca se los haga a ellos',
    why: 'Nunca envíe pagos de su hipoteca a un tercero que "se encarga". Ese dinero normalmente nunca llega al banco, y los pagos perdidos empeoran su caso.',
  },
];

export default function EsEstafasPage() {
  return (
    <div className="min-h-full bg-white" lang="es">
      <SiteHeader />

      <section className="bg-gradient-to-b from-slate-950 to-slate-900 text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-amber-400 text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Link href="/es" className="hover:text-amber-300">Guía en español</Link>
          </p>
          <h1 className="font-serif text-4xl font-bold mb-4 tracking-tight">
            ¿Esta &quot;Ayuda&quot; Es una Estafa?
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed">
            En cuanto un foreclosure se presenta en el tribunal, se vuelve registro público, y
            empiezan las cartas, llamadas y visitas. Algunas son legítimas. Así se distinguen, en
            siete señales.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-12">
        <ol className="space-y-5 mb-12">
          {FLAGS.map((f, i) => (
            <li key={i} className="border border-slate-200 rounded-2xl px-6 py-5">
              <div className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-sm">
                  {i + 1}
                </span>
                <div>
                  <p className="font-bold text-slate-900">{f.flag}</p>
                  <p className="text-slate-600 text-sm leading-relaxed mt-1.5">{f.why}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Dónde denunciar</h2>
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <a href="https://www.njconsumeraffairs.gov/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">División de Asuntos del Consumidor de NJ</p>
            <p className="text-slate-500 text-xs mt-1">njconsumeraffairs.gov</p>
          </a>
          <a href="https://reportfraud.ftc.gov/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">Comisión Federal de Comercio (FTC)</p>
            <p className="text-slate-500 text-xs mt-1">reportfraud.ftc.gov (disponible en español)</p>
          </a>
          <a href="https://www.consumerfinance.gov/es/enviar-una-queja/" target="_blank" rel="noopener noreferrer" className="border border-slate-200 rounded-xl px-5 py-4 hover:border-slate-400 transition">
            <p className="font-bold text-slate-900 text-sm">CFPB</p>
            <p className="text-slate-500 text-xs mt-1">consumerfinance.gov/es</p>
          </a>
        </div>

        <div className="bg-slate-50 rounded-2xl p-6">
          <p className="text-slate-700 leading-relaxed mb-4">
            Mida este sitio con la misma vara: no cobramos nada, no aceptamos honorarios de nadie que
            mencionamos (con una excepción divulgada donde aparece), nunca pedimos su escritura, y le
            decimos que se mantenga en contacto con su banco. Exíjale eso mismo a cualquiera.
          </p>
          <Link href="/es/opciones" className="inline-block bg-amber-400 text-slate-950 px-8 py-3.5 rounded-lg font-bold hover:bg-amber-300 transition">
            Ver mis opciones
          </Link>
        </div>
        <p className="text-slate-400 text-xs mt-6 leading-relaxed">
          Información educativa, no asesoría legal. Si cree que fue víctima de una estafa, las
          agencias de arriba y un abogado licenciado en Nueva Jersey son las siguientes llamadas.
        </p>
      </section>

      <MarsNoticeEs />
    </div>
  );
}
