// BLOG EN ESPAÑOL, PARTE 2 — LA AYUDA GRATUITA Y SUS DERECHOS (8 artículos)
// ---------------------------------------------------------------------------
// La maquinaria gratuita (mediación, HUD, LSNJ), los plazos, las estafas,
// vender antes de la subasta, inquilinos y fondos excedentes. Mismas
// convenciones de datos que el resto del sitio.
// ---------------------------------------------------------------------------

import type { EsBlogPost } from './blog-es';

const PUB = '2026-09-17';

export const ES_POSTS_2: EsBlogPost[] = [
  {
    slug: 'la-mediacion-gratuita-de-nj',
    title: 'La Mediación Gratuita de NJ: La Mesa Donde el Banco Debe Sentarse',
    description:
      'El programa estatal de mediación es gratis para propietarios elegibles. Quién califica, cómo pedirla, y cómo llegar fuerte a la sesión.',
    tldr:
      'Nueva Jersey tiene un programa de mediación de ejecuciones hipotecarias gratuito para propietarios elegibles — generalmente dueños que viven en una casa de una a tres familias. Se pide al responder la demanda (los formularios están en njcourts.gov). En la mesa: usted, un mediador neutral, apoyo de un consejero de vivienda, y un representante del banco que debe tener autoridad para llegar a acuerdos. Los resultados reales: modificaciones, planes de pago, y salidas con fechas acordadas. No cuesta nada y corre junto a todo lo demás.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Por qué esta mesa es diferente a las llamadas',
        body: [
          'Por teléfono, usted habla con quien contesta — lee pantallas, no decide nada. En la mediación, el programa obliga al banco a enviar a alguien con autoridad de acuerdo: una persona cuyo "sí" cuenta, obligada a atender su expediente específicamente. No hay versión de pago de este programa; el gratuito es el programa. Para la mayoría de las familias, es la única vez en todo el proceso que la capa que decide les presta atención directa.',
        ],
      },
      {
        h: 'Quién califica y cómo pedirla',
        body: [
          'La elegibilidad se centra en dueños que ocupan su casa: generalmente una propiedad de una a tres familias, que es su residencia principal, y usted es el deudor del préstamo en ejecución. Se solicita a través del poder judicial — el paquete que le entregaron con la demanda explica cómo, y los formularios viven en njcourts.gov. Pedirla temprano importa: la mediación trabaja con el tiempo y las opciones que queden, y ambos se encogen mientras el caso avanza. El apoyo del consejero de vivienda que da el programa también es gratis.',
        ],
      },
      {
        h: 'Cómo llegar fuerte',
        body: [
          'La mediación premia la preparación: un paquete financiero completo y al día (los mismos documentos de una solicitud de loss mitigation — la mediación y la revisión corren sobre un mismo expediente), y una propuesta específica: "podemos pagar $X al mes desde [fecha]; pedimos revisión para [estructura]". Lo que estanca sesiones: documentos faltantes, desahogos emocionales, y peticiones abiertas de "a ver qué pueden hacer". Cierre cada sesión con acuerdos con fechas. Las familias que entran sabiendo sus números salen con términos.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: 'La mediación en preguntas y respuestas' },
      { href: '/es/documentos', label: 'Los papeles que debe llevar' },
      { href: '/es/evaluacion', label: 'Prepare su caso: 2 minutos gratis' },
    ],
  },
  {
    slug: 'consejeros-hud-gratis-en-espanol',
    title: 'Consejeros de Vivienda HUD: Gratis, en Español, y Reales',
    description:
      'Los consejeros aprobados por HUD arman las mismas solicitudes que las firmas de pago cobran en miles. Cómo encontrarlos y qué hacen por usted.',
    tldr:
      'Los consejeros de vivienda aprobados por HUD son gratuitos por diseño federal — llame al 800-569-4287 o busque en hud.gov, y muchas agencias en Nueva Jersey atienden en español. Hacen el trabajo real: arman su solicitud de loss mitigation completa, revisan su presupuesto, lo preparan para la mediación, y conocen cada programa. Es la misma maquinaria que los "consultores" de pago revenden con sobreprecio — y cobrar por adelantado por ese servicio es generalmente ilegal.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Qué hace un consejero, concretamente',
        body: [
          'Cuatro cosas principales. Arma su solicitud: reúne y organiza los documentos que el banco exige, completos y consistentes — la razón #1 por la que las solicitudes se estancan es que llegan incompletas. Revisa su presupuesto: con números honestos, le dice qué estructuras (modificación, plan de pagos, tolerancia) su ingreso puede sostener. Lo prepara para la mediación: el programa estatal trabaja de la mano con consejeros. Y conoce los menús: FHA, VA, préstamos convencionales — cada uno tiene opciones distintas, y el consejero sabe cuál pedir por nombre.',
        ],
      },
      {
        h: 'Gratis de verdad, y por qué',
        body: [
          'El financiamiento federal existe precisamente porque el mercado de pago para esta ayuda fue tan confiablemente fraudulento que los reguladores cerraron su modelo de negocio: la regla federal MARS hace generalmente ilegal cobrar por adelantado por servicios de alivio hipotecario. Nadie legítimo le va a pedir dinero para "negociar con el banco" — esa negociación es exactamente lo que el consejero HUD hace gratis, con los mismos formularios, en los mismos portales.',
        ],
      },
      {
        h: 'Cómo empezar esta semana',
        body: [
          'Llame al 800-569-4287 o use el buscador de hud.gov ("Talk to a housing counselor") y pida atención en español si la prefiere. Lleve a la primera cita: sus estados de cuenta de la hipoteca, comprobantes de ingresos (talones, cartas de beneficios), y cualquier carta del banco o del tribunal. Una cita de una hora convierte el pánico en una secuencia. Y si sus ingresos califican, súmele el otro pilar gratuito: Legal Services of New Jersey, 1-888-576-5529, para la defensa legal.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: 'La ayuda gratuita, pregunta por pregunta' },
      { href: '/es/estafas', label: 'Los que cobran por esto mismo: evítelos' },
      { href: '/es/evaluacion', label: 'Empiece aquí: 2 minutos, gratis' },
    ],
  },
  {
    slug: 'cuanto-tiempo-tengo-35-dias',
    title: '¿Cuánto Tiempo Tengo? Los Plazos de la Ejecución en NJ',
    description:
      'Cada etapa tiene su reloj: 120 días antes de la demanda, 30 del NOI, 35 para responder, la cura hasta la sentencia, los aplazamientos y la redención.',
    tldr:
      'Los relojes de Nueva Jersey, en orden: la mayoría de los bancos no demandan hasta ~120 días de atraso; el Aviso de Intención debe llegar al menos 30 días antes de la demanda; usted tiene 35 días para responder después de la entrega; el derecho a curar el atraso dura hasta la sentencia final; generalmente puede aplazar la venta del sheriff dos veces, 30 días cada una; y hay 10 días de redención después de la venta. El patrón: cada etapa tiene salidas, y cada una es más barata que la siguiente.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Antes de que exista un caso',
        body: [
          'Perder un pago no inicia una ejecución. Las reglas federales generalmente impiden demandar antes de los 120 días de atraso, y en ese período el banco debe contactarlo y ofrecerle información de ayuda. Nueva Jersey añade su propia puerta: el Aviso de Intención, al menos 30 días antes de cualquier demanda, con la cantidad exacta para ponerse al día. Sumado, suele haber cuatro meses o más entre el primer pago perdido y una demanda — el tramo más barato y más arreglable de todo el proceso.',
        ],
      },
      {
        h: 'Durante el caso',
        body: [
          'La entrega de la demanda abre su ventana de 35 días para responder — el plazo más importante del caso entero, porque responder preserva todo lo demás: su voz en el caso, la mediación gratuita, y un calendario más lento. El derecho a curar el atraso (pagar lo atrasado y volver a la normalidad) corre hasta la entrada de la sentencia final — la puerta queda abierta mucho más tiempo del que la gente cree, aunque el precio sube cada mes con honorarios e intereses.',
        ],
      },
      {
        h: 'Al final, y después',
        body: [
          'Con fecha de venta: generalmente dos aplazamientos suyos de hasta 30 días cada uno a través del sheriff del condado, más los aplazamientos que el propio banco hace rutinariamente durante revisiones activas. Después de la venta: 10 días de redención pagando la sentencia completa, fondos excedentes que le pertenecen si la subasta superó la deuda, y un proceso judicial de posesión con aviso antes de cualquier salida. En cada etapa hay una jugada gratuita disponible. La única jugada sin salidas es el silencio.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: 'Cada plazo, en pregunta y respuesta' },
      { href: '/es/documentos', label: 'Qué carta activa qué reloj' },
      { href: '/es/evaluacion', label: '¿En qué etapa está? Véalo gratis' },
    ],
  },
  {
    slug: 'como-detectar-estafas-de-rescate',
    title: 'Las Estafas de "Rescate" Hipotecario: Cómo Reconocerlas en Segundos',
    description:
      'Tres reglas detectan casi todas las estafas: nada por adelantado, nunca firmar la escritura, y nunca dejar de hablar con su banco. Los patrones, en español.',
    tldr:
      'Tres reglas detectan casi todo el fraude: (1) cobrar por adelantado para "salvar su casa" es generalmente ilegal — nadie legítimo lo hace; (2) nadie legítimo le pide firmar su escritura "temporalmente" ni "para protegerla" — así se roban las casas; (3) nadie legítimo le dice que deje de hablar con su banco o con el tribunal. Las familias hispanohablantes son blanco especial: presión en inglés, promesas en español. La maquinaria gratuita responde en español — consejeros HUD, intérpretes del tribunal, y este sitio.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Por qué lo encontraron a usted',
        body: [
          'Cuando el banco presenta la demanda, registra un lis pendens — un documento público que industrias enteras revisan a diario. Por eso llegaron los volantes, las cartas y los toques de puerta la misma semana. Algunos son negocios legítimos (compradores de efectivo que hacen ofertas bajas pero reales — se pueden comparar con calma). Otros son depredadores que saben que el miedo firma papeles que la calma nunca firmaría.',
        ],
      },
      {
        h: 'Los patrones que se repiten',
        body: [
          'El consultor de pago: cobra $1,500–$3,000 por adelantado para "negociar con el banco" — lo mismo que un consejero HUD hace gratis, y el cobro por adelantado es generalmente ilegal bajo la regla federal MARS y la ley de NJ. El ladrón de escrituras: "fírmeme la casa temporalmente, yo me pongo al día con los pagos, y usted me la renta" — así se pierden casas enteras con una firma. El falso programa del gobierno: logos oficiales, urgencia, y una cuenta a donde depositar. La trampa del idioma: documentos en inglés explicados "de confianza" en español, donde la explicación y el papel no dicen lo mismo. Exija todo documento importante explicado por alguien SIN interés en que firme.',
        ],
      },
      {
        h: 'Qué hacer si ya cayó',
        body: [
          'Actúe rápido y sin vergüenza — estas operaciones son profesionales y caen miles de personas. Documente todo (recibos, mensajes, copias), reporte a la División de Asuntos del Consumidor de NJ y a la FTC, y llame a Legal Services of NJ (1-888-576-5529): si firmó una escritura bajo engaño, la ley ofrece caminos que un abogado puede evaluar — el tiempo importa. Y la ejecución original sigue teniendo sus salidas reales de siempre: la respuesta, la mediación, la cura, la venta suya.',
        ],
      },
    ],
    links: [
      { href: '/es/estafas', label: 'La guía completa de estafas, en español' },
      { href: '/es/preguntas', label: 'Lo que es normal vs. lo que es alarma' },
      { href: '/es/evaluacion', label: 'Su camino legítimo, gratis' },
    ],
  },
  {
    slug: 'vender-antes-de-la-subasta',
    title: '¿Puedo Vender Mi Casa Antes de la Subasta? Sí — Así Funciona',
    description:
      'Hasta que la venta del sheriff ocurra, la casa es suya y puede venderla: el cierre paga la sentencia y el resto es suyo. Los tiempos y las matemáticas.',
    tldr:
      'Sí. Hasta que la venta del sheriff ocurra, usted es el dueño y puede vender; un cierre antes de la subasta paga la sentencia en la mesa de cierre y cada dólar por encima es suyo — como dinero normal de venta, no como un reclamo en el tribunal. La pregunta es de calendario y aritmética: un comprador de efectivo cierra en semanas pero paga por debajo del mercado; una venta listada trae más cuando los aplazamientos dan la pista necesaria. Primero su número, después el de ellos.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'Por qué funciona, mecánicamente',
        body: [
          'La sentencia de ejecución es una deuda asegurada por la propiedad, y un cierre de venta paga deudas: la compañía de título obtiene el monto exacto de pago, la sentencia y el caso se pagan y descargan con el dinero de la venta, y el comprador recibe título limpio. Nada de la fecha de subasta pendiente lo impide — la fecha solo pone el plazo. Compare los dos finales: la subasta no le paga nada directamente y manda cualquier excedente por un proceso de reclamos; su propio cierre le entrega la plusvalía como un cheque.',
        ],
      },
      {
        h: 'Las matemáticas del calendario, honestas',
        body: [
          'Una venta de efectivo puede cerrar realistamente en dos o tres semanas — dentro de un solo aplazamiento — a un precio por debajo del mercado; ese descuento es el precio de la velocidad. Una venta listada típicamente trae bastante más pero necesita más pista: mercadeo, contrato, financiamiento del comprador. Los aplazamientos de Nueva Jersey (generalmente dos suyos de hasta 30 días, más los del propio banco durante revisiones) son a menudo exactamente la diferencia que deja terminar una venta listada. Cuál gana no es ideología — es su plusvalía, su fecha, y una página de matemáticas.',
        ],
      },
      {
        h: 'Vender sin que lo vendan',
        body: [
          'Los vendedores con plazo atraen depredadores, así que las reglas se endurecen: consiga una valoración real primero (gratis), compare cada oferta contra ella, nunca firme una escritura fuera de un cierre real con compañía de título, y trate el "yo me pongo al día con sus pagos y usted me renta" como el patrón de robo de escritura que suele ser. Este sitio tiene una conexión comercial: una inmobiliaria de Nueva Jersey de la que los operadores del sitio son dueños en parte y se benefician si usted lista con ella — está divulgada en cada página donde aparece, y con eso sobre la mesa: para dueños con plusvalía y tiempo, una venta listada suele ser la salida que más dinero deja, y entrevistar a otros agentes también es siempre buena idea.',
        ],
      },
    ],
    links: [
      { href: '/es/opciones', label: 'Las 7 salidas, comparadas' },
      { href: '/es/preguntas', label: '¿Vender durante la ejecución? En breve' },
      { href: '/es/evaluacion', label: '¿Cuánto le quedaría? Haga los números' },
    ],
  },
  {
    slug: 'opciones-si-estoy-atrasado',
    title: 'Estoy Atrasado en la Hipoteca: Las 7 Salidas, en Español',
    description:
      'Toda ejecución en NJ termina por una de siete puertas. La verdad de una línea sobre cada una, y cómo saber cuál le queda a su caso.',
    tldr:
      'Las siete puertas: reinstalar (pagar el atraso completo y volver a la normalidad), modificación (el banco cambia los términos), tolerancia o plan de pagos (pausa o calendario para ponerse al día), refinanciar (un préstamo nuevo paga el viejo — necesita plusvalía y crédito), bancarrota del Capítulo 13 (un plan judicial que recupera el atraso en 3–5 años), vender en el mercado (incluida la venta corta), o vender a un comprador de efectivo (rápido, por debajo del mercado). Cuál le queda depende de tres números: valor de la casa, deuda total, y atraso.',
    published: PUB,
    updated: PUB,
    minutes: 6,
    sections: [
      {
        h: 'Las puertas para quedarse',
        body: [
          'Reinstalar: la más limpia si el dinero existe — el derecho dura hasta la sentencia final, y un préstamo familiar bien hecho a veces la financia. Modificación: gratis solicitarla; un paquete completo es lo que la mueve, y un consejero HUD (800-569-4287) lo arma con usted sin costo. Tolerancia y plan de pagos: para golpes temporales con ingreso que regresa. Refinanciar: honesto solo temprano — con el caso avanzado y el crédito golpeado, se vuelve difícil. Capítulo 13: la herramienta más fuerte para recuperar un atraso grande con el tiempo — territorio de abogado desde la primera pregunta.',
        ],
      },
      {
        h: 'Las puertas para salir con su dinero',
        body: [
          'Si quedarse no cuadra, salir bien es la victoria: una venta en el mercado típicamente trae el precio más alto cuando hay tiempo; una venta corta (cuando se debe más de lo que vale la casa) necesita aprobación del banco y debe incluir la renuncia a la deficiencia por escrito; y un comprador de efectivo compra velocidad con descuento — legítimo cuando el descuento es una decisión y no una emboscada. En cualquier venta antes de la subasta, la sentencia se paga al cierre y el resto es suyo.',
        ],
      },
      {
        h: 'Cómo decidir sin adivinar',
        body: [
          'Tres números deciden todo: lo que vale la casa, lo que debe en total, y lo que está atrasado. Con ellos en una página, las siete puertas se ordenan solas — mucha plusvalía y poco atraso apuntan a reinstalar o vender listado; poco de ambos apunta a modificación o salidas negociadas. La evaluación gratuita de este sitio hace ese ordenamiento en dos minutos, en español. Y el error que le gana a todos los demás: no elegir nada, que es elegir la subasta.',
        ],
      },
    ],
    links: [
      { href: '/es/opciones', label: 'La comparación completa de las 7' },
      { href: '/es/evaluacion', label: 'Su ranking personal, gratis' },
      { href: '/es/preguntas', label: 'Cada opción, en preguntas' },
    ],
  },
  {
    slug: 'derechos-de-inquilinos-casa-en-ejecucion',
    title: 'Rento una Casa en Ejecución: Mis Derechos en NJ',
    description:
      'En Nueva Jersey, la ejecución del dueño generalmente no desaloja al inquilino. Sus derechos, a quién pagar la renta, y las presiones que puede rechazar.',
    tldr:
      'Nueva Jersey protege a los inquilinos con una de las leyes más fuertes del país: en general, usted no puede ser desalojado solo porque el dueño perdió la propiedad en ejecución — su contrato y sus derechos sobreviven la venta, y el comprador lo recibe como su nuevo arrendador. Las cartas de "el dueño cambió, tiene 30 días para salir" exageran la ley. Siga pagando la renta (a la parte correcta una vez confirmada la nueva propiedad), guarde todo por escrito, y las ofertas de dinero por salir son negociables — no obligatorias.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'La regla básica que casi nadie le dice',
        body: [
          'La ley contra desalojos sin causa de Nueva Jersey protege al inquilino a través de una ejecución: la venta del sheriff transfiere la propiedad, no destruye su arrendamiento. El nuevo dueño — banco o inversionista — se convierte en su arrendador, con las mismas causas limitadas de desalojo que cualquier otro. La ejecución del dueño no es una de esas causas. Los avisos de "todos afuera" que llegan después de una venta apuestan a que usted no conoce esta regla.',
        ],
      },
      {
        h: 'Qué hacer mientras el caso corre',
        body: [
          'Siga pagando la renta y guarde los comprobantes — dejar de pagar sí crea una causa real de desalojo, y es el error que convierte a un inquilino protegido en uno desalojable. Cuando la propiedad cambie de manos, confirme por escrito quién es el nuevo dueño antes de redirigir pagos (y desconfíe de desconocidos que "cobran la renta" sin prueba de propiedad). Documente todo: cartas, textos, visitas. Si le cortan servicios o le cambian cerraduras para presionarlo, eso no es un desalojo legal — es un desalojo ilegal, y la ley de NJ lo toma en serio.',
        ],
      },
      {
        h: 'Las ofertas de dinero por salir',
        body: [
          'Los nuevos dueños suelen ofrecer pagos por una salida voluntaria — porque su derecho a quedarse tiene valor real, y comprárselo es más barato que respetarlo por años. La oferta es legítima y negociable: cantidad, fecha, condiciones — todo por escrito antes de entregar llaves. Pero es una opción, no una obligación, y firmarla renuncia a protecciones reales. Antes de aceptar, media hora de consejo independiente vale oro: Legal Services of NJ (1-888-576-5529) si califica por ingresos, o los recursos para inquilinos del estado.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: 'Preguntas de inquilinos, respondidas' },
      { href: '/es/documentos', label: 'Las cartas que recibe un inquilino' },
      { href: '/es/estafas', label: 'Presiones ilegales a rechazar' },
    ],
  },
  {
    slug: 'fondos-excedentes-dinero-que-es-suyo',
    title: 'Fondos Excedentes: El Dinero Que las Familias Abandonan',
    description:
      'Si la subasta produjo más que la deuda, la diferencia es del dueño anterior — está en el tribunal esperando reclamo. Cómo funciona y cómo cobrarlo.',
    tldr:
      'Cuando una venta del sheriff produce más que la cantidad de la sentencia, el excedente no es del banco (su reclamo termina en la sentencia) ni del comprador — se deposita en el tribunal para los acreedores menores y luego para el dueño anterior. Es el activo más abandonado de todo el proceso, casi siempre porque nadie le dijo a la familia que existe. El reclamo es una moción con documentos — factible con ayuda modesta, y mucho más barato que el porcentaje que cobran los "recuperadores" que llegan por correo.',
    published: PUB,
    updated: PUB,
    minutes: 5,
    sections: [
      {
        h: 'De dónde sale este dinero',
        body: [
          'En la subasta, los postores compiten desde el piso que pone el banco. Si la casa tenía plusvalía real, las ofertas pueden superar la sentencia — y cada dólar por encima de la deuda y los costos es excedente. La ley lo deposita en el tribunal, donde espera: primero para gravámenes menores (segundas hipotecas, HOA, sentencias) por orden de prioridad, y después para el dueño que perdió la casa. No expira en semanas, pero esperar tiene costos reales: los acreedores reclaman, las direcciones se pierden, y las herencias complican reclamos simples.',
        ],
      },
      {
        h: 'Cómo saber si hay dinero suyo',
        body: [
          'Compare dos números: el precio final de la subasta (el resultado de venta del sheriff es público) contra la cantidad de la sentencia. Si la venta fue mayor, hay excedente. Ojo: si el banco "ganó" su propia subasta con su oferta de crédito por el monto de la sentencia, generalmente no hay excedente — vale saberlo en vez de preguntárselo por años. Si hubo una venta en su pasado, o en el de un familiar fallecido, la pregunta sigue viva: los fondos no reclamados esperan.',
        ],
      },
      {
        h: 'Cómo reclamarlo sin regalar la mitad',
        body: [
          'El reclamo es una solicitud al tribunal: probar quién es usted, su interés en la propiedad, y el estado del fondo, con aviso a las partes correspondientes. Muchas familias lo logran con ayuda limitada; un abogado de tarifa fija es dinero bien gastado en fondos grandes o con herencias de por medio — y cuesta una fracción del porcentaje que piden las firmas de "recuperación de activos" que llegan por correo con contratos listos. Antes de firmar con cualquiera de ellas, una consulta: Legal Services of NJ (1-888-576-5529) si califica, o cualquier abogado de bienes raíces. El dinero ya es suyo; no pague de más por recogerlo.',
        ],
      },
    ],
    links: [
      { href: '/es/preguntas', label: '¿Qué pasa con mi plusvalía? En breve' },
      { href: '/es/documentos', label: 'Los papeles después de la venta' },
      { href: '/es/evaluacion', label: 'Proteja su plusvalía antes: 2 minutos' },
    ],
  },
];
