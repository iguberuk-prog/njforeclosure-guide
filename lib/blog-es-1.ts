// BLOG EN ESPAÑOL, PARTE 1 — CADA CARTA, EXPLICADA (8 artículos)
// ---------------------------------------------------------------------------
// Decodificadores de documentos en español. Los datos legales siguen las
// convenciones del sitio: NOI 30 días, 35 días para responder, mediación
// gratuita, derecho a curar hasta la sentencia final, dos aplazamientos de
// 30 días, redención de 10 días. Sin promesas de resultado, nunca.
// ---------------------------------------------------------------------------

import type { EsBlogPost } from './blog-es';

const PUB = '2026-09-17';

export const ES_POSTS_1: EsBlogPost[] = [
  {
    slug: 'recibi-un-aviso-de-intencion-de-ejecucion',
    title: 'Recibí un Aviso de Intención de Ejecución (NOI). ¿Qué Hago?',
    description:
      'El Notice of Intention no es una demanda: es la advertencia que exige la ley de NJ, con 30 días de ventana. Qué significa y qué hacer esta semana.',
    tldr:
      'El Aviso de Intención de Ejecución (NOI, por sus siglas en inglés) no es una demanda — es la advertencia formal que la ley de Nueva Jersey exige al banco al menos 30 días antes de poder demandar. Debe decir exactamente cuánto cuesta ponerse al día, y pagar esa cantidad durante la ventana generalmente termina el asunto. Aunque no pueda pagar, este es el mejor momento de todo el proceso para actuar: llame a su banco y pida "loss mitigation", y reserve un consejero de vivienda aprobado por HUD — gratis, al 800-569-4287.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Qué es esta carta en realidad',
        body: [
          'Todavía no hay demanda, no hay juez, no hay caso. La ley de Nueva Jersey (el Fair Foreclosure Act) obliga al prestamista a enviar este aviso por correo certificado al menos 30 días antes de presentar una demanda de ejecución hipotecaria. La carta debe incluir detalles específicos: la cantidad exacta para curar el atraso, a quién contactar, y su derecho a ponerse al día. Guarde la carta y el sobre — si el aviso no cumple con la ley, eso tiene consecuencias reales para el caso del banco.',
        ],
      },
      {
        h: 'La ventana que se abre',
        body: [
          'Tiene por lo menos 30 días antes de que puedan demandar, y en la práctica suele ser más: la mayoría de los bancos no demandan hasta que el préstamo tiene alrededor de 120 días de atraso. Pagar la cantidad indicada durante esta ventana generalmente detiene el proceso antes de que exista un caso. Y aunque el derecho a curar el atraso dura mucho más — hasta la sentencia final — nunca será más barato que ahora, porque todavía no hay honorarios de abogados acumulados.',
        ],
      },
      {
        h: 'Las tres llamadas de esta semana',
        body: [
          'Primero: llame al número del aviso y diga "loss mitigation" — pida la solicitud. Por esa puerta pasan la modificación, el plan de pagos y la tolerancia (forbearance), y aplicar no cuesta nada. Segundo: reserve un consejero de vivienda aprobado por HUD (800-569-4287) — gratis por diseño federal, y muchos hablan español. Tercero: anote la fecha del aviso y cuente 30 días en su calendario.',
          'Lo que NO debe hacer: pagar a nadie por adelantado para "salvar su casa" (los cobros por adelantado para este tipo de ayuda son generalmente ilegales), firmar nada que transfiera su escritura, o decidir que la casa ya está perdida. Todas las opciones siguen abiertas.',
        ],
      },
    ],
    links: [
      { href: '/es/documentos', label: 'Cada carta del proceso, explicada' },
      { href: '/es/preguntas', label: 'Preguntas frecuentes, respondidas' },
      { href: '/es/evaluacion', label: 'Sus opciones en 2 minutos, gratis' },
    ],
  },
  {
    slug: 'me-entregaron-una-demanda-de-ejecucion',
    title: 'Me Entregaron una Demanda de Ejecución Hipotecaria en NJ',
    description:
      'La demanda inicia un reloj de 35 días. Por qué responder es lo más importante del caso entero, y cómo hacerlo — gratis si es necesario.',
    tldr:
      'La demanda (summons and complaint) significa que el banco presentó un caso en el tribunal y usted ahora es el demandado. Generalmente tiene 35 días desde la entrega para presentar una respuesta. Responder — aunque sea de forma sencilla — lo mantiene dentro del caso, preserva todas sus opciones, y es cómo se pide la mediación gratuita del estado. Legal Services of New Jersey (1-888-576-5529) ayuda gratis a propietarios que califican por ingresos, y njcourts.gov tiene formularios de autoayuda.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Qué acaba de pasar, en palabras claras',
        body: [
          'Nueva Jersey es un estado judicial: el banco no puede quitarle la casa sin demandar en el tribunal (Superior Court). La demanda es el caso; el summons es la portada que le dice que fue demandado y cuánto tiempo tiene para responder. Es un golpe emocional — y también es solo un paso procesal por el que han pasado decenas de miles de familias de Nueva Jersey antes que usted. Usted tiene el derecho legal de vivir en su casa durante todo el proceso judicial. No se mude.',
        ],
      },
      {
        h: 'Los 35 días, y por qué la respuesta lo es todo',
        body: [
          'Presentar una respuesta a tiempo le da cuatro cosas: sigue siendo parte del caso (el tribunal debe escucharlo), recibe aviso de cada moción, el caso avanza más lento (y ese tiempo es el material del que se hacen todas las soluciones), y puede pedir la mediación gratuita del estado. Si no responde, el caso avanza por defecto, sin usted, al ritmo del banco.',
          'No necesita abogado para presentar algo, aunque uno ayuda. Legal Services of New Jersey (1-888-576-5529) defiende gratis a propietarios que califican por ingresos, y el poder judicial publica formularios de autoayuda en njcourts.gov. Presentar algo a tiempo vale más que presentar algo perfecto tarde.',
        ],
      },
      {
        h: 'El programa gratuito escondido en los papeles',
        body: [
          'En el paquete que le entregaron hay información sobre el programa de mediación de ejecuciones hipotecarias de Nueva Jersey — gratis para propietarios elegibles que viven en su casa. La mediación lo sienta en una mesa con un mediador neutral, un consejero de vivienda, y un representante del banco que debe tener autoridad para llegar a acuerdos. Los resultados reales incluyen modificaciones, planes de pago y calendarios acordados. Pedirla no cuesta nada y corre en paralelo con todo lo demás.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: 'Sus plazos, explicados en español' },
      { href: '/es/documentos', label: 'La demanda, documento por documento' },
      { href: '/es/evaluacion', label: 'Qué opción le queda mejor: 2 minutos' },
    ],
  },
  {
    slug: 'que-es-un-lis-pendens',
    title: 'Hay un Lis Pendens Sobre Mi Casa. ¿Qué Tan Grave Es?',
    description:
      'El lis pendens es una bandera pública sobre el título, no una confiscación. Qué hace, qué no hace, y por qué su buzón se llenó de ofertas.',
    tldr:
      'Un lis pendens es un aviso registrado en el condado que dice que hay un litigio pendiente que afecta el título de su propiedad. No transfiere la propiedad, no lo obliga a salir, y no le impide vender — las casas se venden con lis pendens todo el tiempo; el caso simplemente se paga al cierre. Su efecto real es la publicidad: por eso los inversionistas y los volantes de "compramos casas" lo encontraron. Lo que necesita su atención es el caso detrás del aviso, no el aviso.',
    published: PUB,
    updated: PUB,
    minutes: 4,
    sections: [
      {
        h: 'Qué hace y qué no hace',
        body: [
          'El lis pendens ("pleito pendiente" en latín) avisa al mundo — específicamente a cualquiera que quiera comprar o prestar sobre la propiedad — que hay una demanda en curso. No le quita su casa, no cambia el nombre en la escritura, y no desaloja a nadie. Tampoco impide una venta: la compañía de título simplemente exige que la hipoteca y el caso se paguen al cierre, que es exactamente lo que pasa en una venta normal durante una ejecución. Si usted tiene plusvalía (equity), ese camino sigue completamente abierto.',
        ],
      },
      {
        h: 'Por qué se llenó su buzón',
        body: [
          'Los registros de lis pendens son públicos, e industrias enteras los revisan a diario. Las cartas, textos y visitas ofreciendo "comprar su casa hoy por efectivo" llegaron por este registro. Algunos compradores de efectivo son negocios legítimos que hacen ofertas por debajo del mercado — se pueden comparar con calma. Otros son depredadores. La regla que lo protege: cualquiera que exija dinero por adelantado, le diga que deje de hablar con su banco, o le pida firmar su escritura, está describiendo algo generalmente ilegal bajo la ley federal y la de Nueva Jersey.',
        ],
      },
      {
        h: 'Lo que sí necesita hacer',
        body: [
          'Trate el lis pendens como una alarma de humo que apunta al evento real: la demanda que se presentó con él. Si ya le entregaron los papeles, su reloj de 35 días para responder está corriendo. Si todavía no, tiene ventaja — úsela en las llamadas gratuitas (loss mitigation con su banco, consejero HUD al 800-569-4287) y en poner sus números en una página: valor de la casa, deuda, atraso. El aviso sale del título cuando el caso termina — por cura, por acuerdo, o por venta.',
        ],
      },
    ],
    links: [
      { href: '/es/estafas', label: 'Las estafas que llegan con el lis pendens' },
      { href: '/es/opciones', label: 'Las 7 salidas, comparadas en español' },
      { href: '/es/evaluacion', label: 'Su próximo paso, gratis en 2 minutos' },
    ],
  },
  {
    slug: 'entrada-de-incumplimiento-default',
    title: 'Entraron un "Default" en Mi Caso. ¿Se Acabó Todo?',
    description:
      'El default significa que nadie respondió la demanda. Qué cambia, qué NO termina, y la moción que puede reabrir la puerta.',
    tldr:
      'La entrada de default significa que el plazo de 35 días pasó sin respuesta, y el caso ahora avanza sin oposición por la vía administrativa. Es serio — y no es el final: a veces el default se puede anular con una moción (los tribunales prefieren decidir los casos por sus méritos), su derecho a curar el atraso dura hasta la sentencia final, la revisión de loss mitigation con el banco continúa, y una venta que proteja su plusvalía sigue siendo posible. El reloj simplemente corre más rápido ahora.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Cómo llegó aquí, y qué significa',
        body: [
          'Cuando los 35 días pasan sin una respuesta presentada, el banco pide al tribunal que registre el default — una anotación de que el caso no tiene oposición. La mayoría de las ejecuciones en Nueva Jersey terminan aquí, casi siempre por miedo y no por estrategia: la gente no abre el correo, no responde, y el caso avanza solo. Los casos sin oposición se procesan administrativamente, por eso todo parece acelerarse.',
          'Pero el default no es la sentencia final — esa viene después, por moción separada, con aviso a usted. No es un desalojo, no es una fecha de venta, y no es la pérdida de su plusvalía. Usted sigue siendo el dueño y sigue teniendo el derecho de vivir en su casa.',
        ],
      },
      {
        h: 'La moción que puede reabrir el caso',
        body: [
          'Los tribunales de Nueva Jersey pueden anular un default por causa justificada — y el estándar es más flexible antes de la sentencia final que después. La causa justificada suele combinar una explicación del silencio (nunca le entregaron los papeles correctamente, una enfermedad, una revisión del banco que usted creyó razonablemente que pausaba todo) con alguna defensa que valga la pena escuchar. Este es el momento donde una consulta gratuita vale oro: Legal Services of NJ (1-888-576-5529) para quienes califican por ingresos. Actuar rápido importa.',
        ],
      },
      {
        h: 'Usar el tiempo que queda',
        body: [
          'Con o sin moción, los caminos paralelos siguen abiertos: una solicitud completa de loss mitigation al banco, el derecho a curar el atraso (que la ley mantiene abierto hasta la sentencia final), y las matemáticas honestas de una venta. El default le quitó opciones procesales, no opciones prácticas. Lo que realmente le quitó es margen: desde aquí, cada semana que usa vale por dos que espera.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: '¿Es demasiado tarde? Etapa por etapa' },
      { href: '/es/documentos', label: 'Cada documento del caso, explicado' },
      { href: '/es/evaluacion', label: 'Lo que todavía funciona en su etapa' },
    ],
  },
  {
    slug: 'sentencia-final-de-ejecucion',
    title: 'Sentencia Final de Ejecución en NJ: Qué Viene Ahora',
    description:
      'La sentencia final fija la deuda y autoriza la venta del sheriff. El orden de lo que sigue, los derechos que sobreviven, y las jugadas que quedan.',
    tldr:
      'La sentencia final (final judgment) fija la cantidad total de la deuda y autoriza una venta del sheriff. Es tarde en el proceso — y varios derechos la sobreviven: la venta debe programarse y notificarse, usted generalmente puede pedir dos aplazamientos de hasta 30 días cada uno, una venta propia que cierre antes de la subasta paga la sentencia y le deja el resto de la plusvalía, y si hay subasta, el dinero que sobre por encima de la deuda (fondos excedentes) le pertenece a usted.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Qué decide la sentencia — y qué no',
        body: [
          'La sentencia fija el total: principal, atrasos, intereses y honorarios permitidos, y ordena que la propiedad se venda para pagarlo. Ese número es el precio de referencia de cada jugada que queda — léalo con cuidado. Lo que la sentencia NO hace: no transfiere la casa (usted sigue siendo dueño hasta que una venta ocurra), no lo desaloja, y no cancela sus derechos en las etapas que faltan.',
        ],
      },
      {
        h: 'Lo que todavía funciona',
        body: [
          'Tres cosas principalmente. Aplazamientos: como regla general, usted puede posponer la venta dos veces, hasta 30 días cada vez, a través de la oficina del sheriff de su condado (cada condado tiene su procedimiento y su tarifa — llame y pregunte ahora, no la mañana de la subasta). Una venta propia: un comprador que cierra antes de la subasta paga la sentencia al cierre, y cada dólar por encima es suyo — a precio de mercado, no de subasta. Redención: incluso después de la venta del sheriff, Nueva Jersey da 10 días para redimir pagando la sentencia completa.',
        ],
      },
      {
        h: 'Si la subasta ocurre de todos modos',
        body: [
          'Si las ofertas superan la cantidad de la sentencia, el excedente le pertenece al dueño anterior — queda depositado en el tribunal hasta que se reclame, y reclamarlo es un proceso real y factible. Y pase lo que pase, sacarlo de la casa es un proceso judicial aparte, con aviso — nunca el mismo día. La sentencia final es la advertencia de los dos minutos, no el silbato final. Las jugadas que quedan son menos, y son reales.',
        ],
      },
    ],
    links: [
      { href: '/es/documentos', label: 'La sentencia final, explicada' },
      { href: '/es/opciones', label: 'Vender antes de la subasta: cómo funciona' },
      { href: '/es/preguntas', label: 'Fondos excedentes y sus derechos' },
    ],
  },
  {
    slug: 'aviso-de-venta-del-sheriff',
    title: 'Recibí el Aviso de Venta del Sheriff. ¿Qué Opciones Tengo?',
    description:
      'Ya hay fecha de subasta. Aplazamientos, redención, vender primero, fondos excedentes — el mapa honesto de las últimas semanas.',
    tldr:
      'El aviso de venta del sheriff dice cuándo y dónde el condado piensa subastar la propiedad. Quedan opciones reales: generalmente dos aplazamientos de hasta 30 días cada uno a su solicitud, los bancos mismos posponen ventas con frecuencia mientras revisan solicitudes completas, una venta suya que cierre antes de la subasta paga la sentencia y protege su plusvalía, y Nueva Jersey da 10 días de redención después de la venta. Si la subasta produce más que la deuda, el excedente es suyo.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Lea el aviso como una lista de datos',
        body: [
          'El aviso trae los datos de los que depende todo: fecha y hora de la venta, lugar, número de caso del sheriff, y la sentencia detrás. Verifique la fecha contra las listas del propio sheriff del condado — las fechas se mueven constantemente, porque los bancos aplazan sus propias ventas todo el tiempo. Anote el teléfono de la unidad de ejecuciones del sheriff; lo va a usar más de una vez.',
        ],
      },
      {
        h: 'La caja de herramientas para ganar tiempo',
        body: [
          'La práctica de Nueva Jersey generalmente le da al propietario dos aplazamientos de hasta 30 días cada uno, pedidos a través de la oficina del sheriff según el procedimiento de su condado. Encima de eso, los bancos posponen ventas rutinariamente mientras revisan una solicitud completa de loss mitigation, y los tribunales pueden ordenar más tiempo por causa justificada. Sesenta días conseguidos así no son para esperar — son el espacio de trabajo donde se cierran ventas y se terminan acuerdos.',
        ],
      },
      {
        h: 'Las salidas que le ganan a una subasta',
        body: [
          'Si la casa vale más que la sentencia, la subasta es el peor lugar para descubrirlo. Una venta en el mercado o a un comprador de efectivo que cierre antes de la fecha paga la sentencia al cierre y le entrega el resto como dinero normal de venta — sin proceso de reclamos, sin descuento de subasta. Haga los números primero: pago de la sentencia, precio realista, tiempo para cerrar. Y si la venta ocurre: 10 días de redención, fondos excedentes que le pertenecen, y un proceso judicial de posesión con aviso — nadie lo saca el día de la subasta.',
        ],
      },
    ],
    links: [
      { href: '/es/opciones', label: 'Efectivo vs. mercado: la comparación honesta' },
      { href: '/es/estafas', label: 'Los depredadores de última hora' },
      { href: '/es/evaluacion', label: 'Su mejor jugada, gratis en 2 minutos' },
    ],
  },
  {
    slug: 'despues-de-la-venta-del-sheriff',
    title: 'Después de la Venta del Sheriff: Sus Derechos No Terminaron',
    description:
      'La subasta no es el desalojo. Los 10 días de redención, el proceso de posesión, el dinero por las llaves, y los fondos excedentes que son suyos.',
    tldr:
      'Nadie lo saca el día de la venta. Nueva Jersey da 10 días después de la subasta para redimir pagando la sentencia completa; luego viene la escritura; y aun entonces, la posesión cambia solo por un proceso judicial con aviso — nunca una sorpresa el mismo día. Los compradores suelen ofrecer dinero por una salida acordada ("cash for keys") — es negociable, por escrito, y las llaves se entregan al final. Y si la subasta produjo más que la deuda, ese excedente es suyo: está en el tribunal esperando su reclamo.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'La secuencia real después del martillo',
        body: [
          'Primero, los 10 días de redención: pagar la sentencia completa deshace la venta — estrecho, pero real. Después se entrega la escritura al comprador. Y aun así, la ocupación no cambia: sacar a alguien requiere que el comprador pase por el tribunal, con aviso, terminando (si llega a eso) en una fecha programada ejecutada por oficiales. En la práctica, las familias permanecen un período significativo después de la venta. Use ese período con calma y con plan, no con pánico.',
        ],
      },
      {
        h: 'El dinero que la gente abandona: los fondos excedentes',
        body: [
          'Si las ofertas en la subasta superaron la cantidad de la sentencia, la diferencia no es del banco ni del comprador — es del dueño anterior. Se deposita en el tribunal y espera un reclamo. Es el activo más abandonado de todo el proceso, casi siempre porque nadie le dijo a la familia que existe. Cuidado con los "especialistas en recuperación" que cobran un porcentaje grande por presentar lo que es, en el fondo, una moción — el proceso es factible con ayuda modesta.',
        ],
      },
      {
        h: 'Dinero por llaves, e inquilinos',
        body: [
          'El nuevo dueño suele preferir pagar por una salida limpia y acordada antes que pagar el proceso de posesión. Todo es negociable: la cantidad (compárela con sus costos reales de mudanza), la fecha (a veces más tiempo vale más que más dinero), y las condiciones. Por escrito siempre, y las llaves se entregan solo cuando el acuerdo y los fondos están listos. Si hay inquilinos en la propiedad: las protecciones de Nueva Jersey generalmente sobreviven la venta — las cartas de "todos afuera, hay dueño nuevo" exageran la ley.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: 'Qué pasa después de la venta, en breve' },
      { href: '/es/documentos', label: 'Los papeles que llegan después' },
      { href: '/es/estafas', label: 'Estafas de "recuperación" a evitar' },
    ],
  },
  {
    slug: 'carta-de-negacion-de-loss-mitigation',
    title: 'El Banco Negó Mi Solicitud de Ayuda. ¿Y Ahora?',
    description:
      'Una carta de negación trae derechos: razones específicas, ventana de apelación, y alternativas. Cómo leerla y qué hacer en la primera semana.',
    tldr:
      'Una negación de loss mitigation generalmente debe decirle las razones específicas y, si su solicitud estaba completa, su derecho a apelar — comúnmente dentro de 30 días. Las negaciones se revierten en apelación cuando los datos del banco estaban mal (ingresos mal calculados, documentos mal leídos), y negar una opción no es negar todas: el plan de pagos, la tolerancia, la venta corta y la entrega de escritura son casillas separadas. Hay ayuda gratuita para leer la carta: consejeros HUD (800-569-4287) y, para quienes califican, Legal Services de NJ (1-888-576-5529).',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'La carta es un argumento, no un veredicto',
        body: [
          'Las reglas federales exigen que la carta diga las razones reales — no "usted no califica", sino qué regla, qué número, qué documento faltó. Lea las razones como un mecánico lee un código de diagnóstico. "Ingresos insuficientes" invita la pregunta: ¿qué ingresos contaron, y les faltó el segundo trabajo, la renta, la contribución del hogar? "Solicitud incompleta" invita: ¿qué documento, y de verdad no se envió? Los bancos procesan volúmenes enormes y los errores de datos son lo bastante comunes como para que las apelaciones existan exactamente para esto.',
        ],
      },
      {
        h: 'La apelación, bien hecha',
        body: [
          'Si su solicitud estaba completa y a tiempo, generalmente tiene derecho a apelar — comúnmente 30 días desde la negación — ante personal distinto al que decidió. Una apelación que solo repite la petición pierde; una que corrige el expediente gana: talones de pago que prueban el ingreso real, la confirmación de envío del documento "perdido", el valor correcto de la propiedad. Es una semana de papeleo que un consejero HUD gratuito le ayuda a armar.',
        ],
      },
      {
        h: 'La trampa a evitar',
        body: [
          'La respuesta más cara a una negación es la desesperación, y la segunda más cara es la firma de "auditoría" que cobra por adelantado para "pelearla" — los cobros por adelantado para alivio hipotecario son generalmente ilegales por una razón. El camino gratuito (consejero + apelación + alternativas) es la misma maquinaria, sin el sobreprecio ni el riesgo de fraude. Y mientras tanto, sus derechos del tribunal no cambiaron: la mediación gratuita, su respuesta, y una venta si los números la favorecen. Una negación es un mal día. Rara vez es la última palabra.',
        ],
      },
    ],
    links: [
      { href: '/es/opciones', label: 'Todas las opciones, comparadas' },
      { href: '/es/preguntas', label: 'La mediación gratuita, explicada' },
      { href: '/es/evaluacion', label: 'Qué sigue para su caso: 2 minutos' },
    ],
  },
];
