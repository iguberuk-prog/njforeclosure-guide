// PREGUNTAS EN ESPAÑOL
// ---------------------------------------------------------------------------
// Question pages written directly in Spanish (not machine-translated), each
// answer-first like the English hub so AI answer engines can quote the
// `short`. The legal numbers must match lib/questions.ts and
// lib/documents.ts exactly — one law, two languages.
// ---------------------------------------------------------------------------

export interface QuestionEsEntry {
  slug: string;
  q: string;
  short: string;
  detail: string;
  more: string;
  links: { href: string; label: string }[];
}

export const QUESTIONS_ES: QuestionEsEntry[] = [
  {
    slug: 'como-funciona-la-ejecucion-hipotecaria-en-nj',
    q: '¿Cómo funciona la ejecución hipotecaria en Nueva Jersey?',
    short:
      'En Nueva Jersey la ejecución hipotecaria es judicial: el banco tiene que demandarlo ante el tribunal y ganar antes de poder vender su casa. No pueden quitársela con una carta.',
    detail:
      'Todo el proceso pasa por el Tribunal Superior del condado. Antes de demandar, el banco debe enviarle un Aviso de Intención (Notice of Intention) con al menos 30 días de anticipación. Después de que le entreguen la demanda, usted tiene 35 días para responder. Como es un proceso judicial con etapas y plazos, normalmente tarda muchos meses, y con frecuencia más de un año.',
    more:
      'Lo práctico: cada etapa viene con un aviso y una oportunidad de actuar. Ese tiempo es su recurso más valioso. Los propietarios que usan cada plazo para trabajar en un plan — ponerse al día, modificar el préstamo, vender, o defenderse — terminan consistentemente mejor que los que esperan a ver qué pasa. Lo peor que puede hacer con el correo del tribunal es no abrirlo.',
    links: [
      { href: '/es/documentos', label: 'Cada carta del proceso, explicada en orden' },
      { href: '/es/evaluacion', label: 'Evaluación gratuita de 2 minutos en español' },
    ],
  },
  {
    slug: 'cuantos-pagos-puedo-atrasar',
    q: '¿Cuántos pagos puedo atrasar antes de una ejecución hipotecaria en Nueva Jersey?',
    short:
      'No hay un número mágico, pero las reglas federales generalmente impiden iniciar la ejecución hasta que el préstamo tenga más de 120 días de atraso, y la ley de Nueva Jersey exige un aviso 30 días antes de presentar la demanda.',
    detail:
      'Los cargos por pago tardío y el daño al crédito empiezan mucho antes que la ejecución. La ventana entre el primer pago perdido y una demanda real es normalmente la mejor oportunidad que usted tendrá, porque todas las opciones siguen abiertas: ponerse al día, modificación, pausa de pagos, o vender la casa en el mercado.',
    more:
      'Use la ventana: llame al departamento de "loss mitigation" de su banco antes del cuarto pago perdido, no después. Una solicitud de ayuda presentada temprano, cuando el atraso es de uno o dos pagos, es mucho más fácil de resolver que una presentada cuando ya existe un caso en el tribunal. Pedir ayuda a su propio banco es gratis.',
    links: [
      { href: '/es/opciones', label: 'Las 7 opciones, con la desventaja honesta de cada una' },
      { href: '/es/documentos', label: 'El Aviso de Intención y cada carta que sigue' },
    ],
  },
  {
    slug: 'cuanto-tarda-la-ejecucion-hipotecaria',
    q: '¿Cuánto tarda una ejecución hipotecaria en Nueva Jersey?',
    short:
      'Normalmente muchos meses, y con frecuencia más de un año. Nueva Jersey está siempre entre los estados más lentos porque cada caso pasa por los tribunales.',
    detail:
      'Antes de demandar, el banco debe esperar al menos 30 días después del Aviso de Intención. Después de la demanda, usted tiene 35 días para responder. Los casos disputados tardan más, y los tribunales tienen sus propios retrasos. La conclusión práctica: la mayoría de los propietarios tienen más tiempo del que temen.',
    more:
      'Dos advertencias. Primera: un caso donde usted nunca responde avanza mucho más rápido que los promedios. Segunda: el tiempo solo es una ventaja si lo usa en un plan real — juntar el dinero para ponerse al día, completar una solicitud de modificación, o vender antes de la subasta. El tiempo sin plan solo acumula intereses y cargos.',
    links: [
      { href: '/es/evaluacion', label: 'Vea qué opciones siguen abiertas para usted' },
      { href: '/es/documentos', label: 'Dónde está usted en el proceso, carta por carta' },
    ],
  },
  {
    slug: 'puedo-detener-la-venta-del-sheriff',
    q: '¿Puedo aplazar la venta del sheriff en Nueva Jersey?',
    short:
      'Generalmente sí. Los propietarios en Nueva Jersey normalmente tienen derecho a dos aplazamientos de hasta 30 días cada uno, pedidos en la oficina del sheriff por una tarifa pequeña. Una bancarrota del Capítulo 13 también detiene la venta, y vender la casa antes de la subasta termina el proceso.',
    detail:
      'El aplazamiento (adjournment) es la herramienta menos usada y una de las más valiosas: dos aplazamientos, usados con intención, dan hasta 60 días — suficiente para cerrar una venta o presentar un Capítulo 13 preparado en vez de uno de emergencia. Cada condado tiene su propio procedimiento, y la fecha real de venta frecuentemente es más tarde que la del aviso que usted recibió.',
    more:
      'Cuidado con quien cobre por "detener la venta": pedir el aplazamiento es algo que usted puede hacer directamente, y cobrar honorarios por adelantado para servicios de rescate hipotecario es ilegal en la mayoría de los casos. Verifique la fecha real en el sitio oficial del sheriff de su condado, pida sus aplazamientos, y use el tiempo en un plan concreto.',
    links: [
      { href: '/es/estafas', label: 'Las estafas de "rescate" y cómo reconocerlas' },
      { href: '/es/evaluacion', label: '¿Qué le conviene hacer con el tiempo ganado?' },
    ],
  },
  {
    slug: 'puedo-vender-mi-casa-durante-la-ejecucion',
    q: '¿Puedo vender mi casa durante la ejecución hipotecaria?',
    short:
      'Sí. La casa es suya hasta que se entrega la escritura del sheriff después de la subasta. Una venta que cierra antes de esa fecha paga el préstamo completo, termina el caso, y el valor restante es suyo.',
    detail:
      'Casas con demanda presentada, e incluso con sentencia final, se compran y venden en Nueva Jersey todos los días. La compañía de título obtiene la cifra de pago total del banco — atrasos y cargos incluidos — y lo paga todo al cierre. Si la casa vale más de lo que debe, vender antes de la subasta es la manera de proteger ese dinero, porque en la subasta las casas frecuentemente se venden por debajo del valor de mercado.',
    more:
      'Si su fecha de venta del sheriff está cerca, el orden importa: primero pida el aplazamiento, después mueva las ofertas. Si debe más de lo que la casa vale, la versión de esta jugada es la venta corta (short sale), que requiere la aprobación del banco y donde lo más importante de negociar es el perdón por escrito del saldo restante. Nunca firme la escritura a un desconocido que promete "resolver todo".',
    links: [
      { href: '/es/evaluacion', label: 'Evaluación gratuita: ¿vender o quedarse?' },
      { href: '/es/estafas', label: 'La estafa de la escritura, explicada' },
    ],
  },
  {
    slug: 'que-es-la-mediacion-de-ejecucion-hipotecaria',
    q: '¿Qué es el programa de mediación de ejecución hipotecaria de Nueva Jersey?',
    short:
      'Es un programa gratuito del tribunal: un mediador neutral y un consejero de vivienda le ayudan a negociar con su banco, y el banco tiene que participar. Está disponible una vez que la demanda ha sido presentada.',
    detail:
      'La mediación no requiere abogado y no cuesta nada. En ella se negocian soluciones reales: modificaciones, planes de pago, o salidas dignas como una venta con tiempo suficiente. Para muchos propietarios es la primera vez que alguien del lado del banco se sienta a escuchar su situación completa, con un mediador del tribunal presente.',
    more:
      'Hay plazos para pedirla — generalmente dentro de los 60 días después de que le entregan la demanda, aunque el tribunal puede aceptar solicitudes tardías con causa justificada. Pedirla temprano es mejor. Hay consejeros de vivienda aprobados por HUD que hablan español y le pueden ayudar a preparar los papeles, también gratis.',
    links: [
      { href: '/es/documentos', label: 'La demanda y sus 35 días para responder' },
      { href: '/es', label: 'Toda la guía en español' },
    ],
  },
  {
    slug: 'la-bancarrota-detiene-la-ejecucion',
    q: '¿La bancarrota detiene la ejecución hipotecaria en Nueva Jersey?',
    short:
      'Sí, inmediatamente: presentar una bancarrota activa la "suspensión automática" que detiene el proceso, incluso una venta del sheriff programada. El Capítulo 13 además le permite ponerse al día con los atrasos en un plan de 3 a 5 años.',
    detail:
      'La suspensión automática funciona desde el momento en que se presenta la petición, incluso la mañana de la subasta. Con el Capítulo 13 usted conserva la casa mientras paga los atrasos a través de un plan aprobado por el tribunal, siempre que también mantenga el pago mensual regular de la hipoteca. El Capítulo 7 pausa el caso pero no cura los atrasos, así que para la mayoría es un retraso, no una solución.',
    more:
      'Los intercambios honestos: el Capítulo 13 requiere ingresos estables suficientes para el plan más la hipoteca, cuesta dinero en honorarios, y un caso desestimado devuelve la ejecución a su curso. Es una herramienta poderosa y seria. Hable con un abogado de bancarrota antes de que la fecha de venta esté cerca — una presentación de emergencia es la versión más débil de esta protección.',
    links: [
      { href: '/es/opciones', label: 'El Capítulo 13 entre las 7 opciones' },
      { href: '/es/evaluacion', label: '¿Es la bancarrota su mejor opción? Evalúe gratis' },
    ],
  },
  {
    slug: 'que-pasa-con-el-dinero-sobrante',
    q: '¿Qué pasa con el dinero sobrante después de una venta del sheriff?',
    short:
      'Si la casa se vende en la subasta por más de lo que usted debía, el excedente (surplus) le pertenece a usted. No se lo envían automáticamente: queda depositado con el tribunal hasta que usted lo reclama.',
    detail:
      'Cada año hay propietarios en Nueva Jersey que pierden decenas de miles de dólares simplemente porque nadie les dijo que ese dinero existe. El excedente se reclama con una moción ante el tribunal, un trámite que usted puede hacer con o sin abogado.',
    more:
      'Cuidado con las compañías de "recuperación de fondos" que lo contactarán después de la venta ofreciendo reclamar el dinero por usted a cambio del 30 o 40 por ciento. El trámite que ellas cobran es el mismo que usted puede hacer. Si necesita ayuda, un abogado le costará mucho menos que ese porcentaje, y los servicios legales gratuitos pueden ayudar a quien califica por ingresos.',
    links: [
      { href: '/es/estafas', label: 'Estafas después de la subasta' },
      { href: '/es', label: 'Más recursos gratuitos en español' },
    ],
  },
  {
    slug: 'necesito-abogado-para-la-ejecucion',
    q: '¿Necesito un abogado para una ejecución hipotecaria en Nueva Jersey?',
    short:
      'No es obligatorio, y mucha ayuda buena es gratuita: la mediación del tribunal, los consejeros de vivienda aprobados por HUD, y los servicios legales gratuitos para quien califica por ingresos. Un abogado pagado vale más la pena cuando hay algo concreto que ganar.',
    detail:
      'Legal Services of New Jersey (1-888-576-5529) maneja casos de ejecución hipotecaria gratis para propietarios que califican, y hay consejeros que hablan español. Para responder la demanda, pedir la mediación, o solicitar una modificación, muchos propietarios se representan a sí mismos con ayuda de un consejero.',
    more:
      'Cuándo pagar por un abogado: cuando hay una defensa real que presentar, una modificación que negociar con complicaciones, o tiempo que ganar para cerrar una venta con mucho valor en juego. Pregunte siempre qué incluye el honorario, cuál es la meta realista, y desconfíe de cualquiera que garantice un resultado — la ley prohíbe las garantías, y quien cobra por adelantado para "salvar su casa" probablemente es una estafa.',
    links: [
      { href: '/es/estafas', label: 'Cómo distinguir ayuda real de una estafa' },
      { href: '/es/evaluacion', label: 'Primero, vea dónde está parado — gratis' },
    ],
  },
  {
    slug: 'que-es-el-aviso-de-intencion',
    q: '¿Qué es el Aviso de Intención de ejecutar la hipoteca (Notice of Intention)?',
    short:
      'Es la carta que la ley de Nueva Jersey obliga al banco a enviarle al menos 30 días antes de presentar una demanda de ejecución hipotecaria. Es una advertencia formal — y también su mejor ventana para actuar.',
    detail:
      'El aviso debe decirle cuánto debe, cómo ponerse al día, y a quién llamar. Recibirlo significa que todavía no hay demanda: durante estos 30 días (y normalmente bastante más, porque los bancos no siempre demandan de inmediato) todas las opciones están abiertas, y ponerse al día detiene el proceso por completo.',
    more:
      'Qué hacer la semana que llega: llame a su banco y pida las opciones de "loss mitigation"; junte sus papeles de ingresos; y si quiere ayuda, contacte a un consejero de vivienda aprobado por HUD — es gratis y hay consejeros en español. Lo único incorrecto es guardar la carta en un cajón. El aviso es el comienzo de un proceso largo con muchas salidas, no el final de nada.',
    links: [
      { href: '/es/documentos', label: 'Todas las cartas del proceso, en orden' },
      { href: '/es/opciones', label: 'Sus 7 opciones mientras hay tiempo' },
    ],
  },
];

export function getQuestionEs(slug: string): QuestionEsEntry | undefined {
  return QUESTIONS_ES.find((x) => x.slug === slug);
}
