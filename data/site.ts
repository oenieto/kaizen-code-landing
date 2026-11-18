/**
 * Landing page content. Kept separate from components so copy can change
 * without touching layout, and so the shape of each section is typed.
 */

/** Fired by solution CTAs so the contact form can preselect the project type. */
export const SELECT_PROJECT_TYPE = 'kc:select-project-type';

/**
 * Cloudflare Turnstile site key (public). Dev uses Cloudflare's always-pass test key;
 * VITE_TURNSTILE_SITE_KEY overrides it (e.g. to test a production build locally).
 */
const PROD_TURNSTILE_SITE_KEY = '0x4AAAAAAGGdLLEKOTe7M1ZM';
const TEST_TURNSTILE_SITE_KEY = '1x00000000000000000000AA';
export const TURNSTILE_SITE_KEY: string =
  import.meta.env.VITE_TURNSTILE_SITE_KEY || (import.meta.env.DEV ? TEST_TURNSTILE_SITE_KEY : PROD_TURNSTILE_SITE_KEY);

export const CONTACT = {
  email: 'contacto@kaizencode.com.mx',
  whatsapp: '525931031187',
} as const;

export interface Service {
  code: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const services: Service[] = [
  {
    code: 'web',
    title: 'Plataformas web y SaaS',
    description:
      'Productos multi-tenant con autenticación, roles, facturación y paneles operativos. Del primer usuario a miles sin reescribir.',
    deliverables: ['React / Next.js', 'Multi-tenant', 'RBAC y auditoría'],
  },
  {
    code: 'api',
    title: 'APIs e integraciones',
    description:
      'Conectamos tu sistema con ERPs, pasarelas de pago, PACs de CFDI y WhatsApp Business con contratos versionados y reintentos idempotentes.',
    deliverables: ['REST / OpenAPI', 'Webhooks', 'Colas y reintentos'],
  },
  {
    code: 'ai',
    title: 'IA aplicada',
    description:
      'Asistentes con RAG sobre tus documentos, agentes que ejecutan tareas y extracción de datos. Con evaluaciones automáticas, no demos que fallan en producción.',
    deliverables: ['RAG con citas', 'Agentes con herramientas', 'Evals y guardrails'],
  },
  {
    code: 'ops',
    title: 'Cloud, DevOps y SRE',
    description:
      'Infraestructura como código, pipelines con despliegues reversibles y observabilidad con alertas por SLO en lugar de por intuición.',
    deliverables: ['Terraform', 'CI/CD', 'OpenTelemetry'],
  },
  {
    code: 'audit',
    title: 'Auditoría y rescate',
    description:
      'Revisamos un sistema existente — seguridad, arquitectura, rendimiento, deuda técnica — y entregamos un plan priorizado por riesgo y costo.',
    deliverables: ['Reporte técnico', 'Plan de remediación', 'Migraciones'],
  },
  {
    code: 'mobile',
    title: 'Aplicaciones móviles',
    description:
      'Apps iOS y Android con React Native que comparten tipos y lógica con tu backend, con modo offline y actualizaciones OTA.',
    deliverables: ['React Native', 'Offline-first', 'Publicación en stores'],
  },
];

export type ProjectStatus = 'production' | 'building' | 'prototype' | 'planned';

export interface Project {
  slug: string;
  name: string;
  kind: string;
  status: ProjectStatus;
  statusLabel: string;
  summary: string;
  problem: string;
  highlights: string[];
  stack: string[];
}

export const caseStudy: Project = {
  slug: 'multicarrier',
  name: 'MultiCarrier — Portal NOC',
  kind: 'Cliente · Telecomunicaciones',
  status: 'building',
  statusLabel: 'En desarrollo',
  summary:
    'Portal de Network Operations Center para operar y monitorear infraestructura de telecomunicaciones de múltiples carriers desde un solo lugar.',
  problem:
    'El equipo de operación dependía de herramientas aisladas por proveedor. Detectar y escalar un incidente requería revisar varias consolas a mano.',
  highlights: [
    'Acceso por roles con sesiones seguras y registro de auditoría por acción.',
    'Estado de la red en tiempo real vía WebSockets, con reconexión y backoff.',
    'Alertas automatizadas con reglas configurables y escalamiento por severidad.',
  ],
  stack: ['React', 'TypeScript', 'Node.js', 'WebSockets', 'AWS'],
};

/**
 * Own products and R&D. Statuses are stated plainly: these are being built or
 * planned, not shipped, and the page says so.
 */
export const labProjects: Project[] = [
  {
    slug: 'folio',
    name: 'Folio',
    kind: 'Producto propio · Fintech',
    status: 'building',
    statusLabel: 'En construcción',
    summary: 'Facturación CFDI 4.0 y conciliación automática contra el SAT para PyMEs.',
    problem:
      'Las PyMEs concilian facturas emitidas, recibidas y pagos en hojas de cálculo. Los errores aparecen en la declaración, no antes.',
    highlights: [
      'Descarga masiva del SAT y conciliación contra movimientos bancarios.',
      'Multi-tenant con Row-Level Security en Postgres.',
      'Integración con PAC detrás de una interfaz propia para cambiar de proveedor.',
    ],
    stack: ['Next.js', 'PostgreSQL', 'Workers', 'CFDI 4.0'],
  },
  {
    slug: 'edgebet',
    name: 'EdgeBet',
    kind: 'Producto propio · Analítica deportiva',
    status: 'building',
    statusLabel: 'En desarrollo',
    summary:
      'Analítica de apuestas de fútbol que cruza un modelo propio, mercados de predicción y cuotas de casas de apuestas, con IA que explica cada pronóstico.',
    problem:
      'Los tipsters venden picks sin fuentes ni explicación. Quien apuesta no sabe por qué un pronóstico tendría valor ni cuánto confiar en él.',
    highlights: [
      'Tres capas de probabilidad: modelo de machine learning, Polymarket y cuotas de casas de apuestas.',
      'Ensamble de modelos validado con series de tiempo para evitar fugas de información.',
      'Claude explica en lenguaje natural por qué las fuentes coinciden o divergen.',
      'Ningún indicador se muestra si su fuente no está verificada.',
    ],
    stack: ['Next.js', 'FastAPI', 'XGBoost', 'Claude API'],
  },
  {
    slug: 'bethel',
    name: 'Bethel',
    kind: 'SaaS · Gestión de logias',
    status: 'building',
    statusLabel: 'En desarrollo',
    summary:
      'Plataforma multi-tenant para que cada logia masónica lleve tesorería, secretaría, membresía y reportes en un solo lugar.',
    problem:
      'Las logias llevan caja, actas y asistencias en hojas de cálculo y libretas. La información se pierde con cada cambio de administración.',
    highlights: [
      'Cada logia ve solo sus datos dentro de una base compartida.',
      'Módulos de tesorería, secretaría, elecciones, hospitalario, inventario y directorio.',
      'Reportes en PDF, CSV y Excel, con bitácora de auditoría de cada cambio.',
      'Autenticación por roles, límites de peticiones y API documentada con OpenAPI.',
    ],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'OpenAPI'],
  },
  {
    slug: 'atlas',
    name: 'Atlas',
    kind: 'R&D · IA aplicada',
    status: 'prototype',
    statusLabel: 'Prototipo',
    summary: 'Asistente de conocimiento interno que responde con citas a los documentos de la empresa.',
    problem:
      'Los asistentes genéricos inventan respuestas y no respetan quién puede ver qué. En una empresa ambas cosas son bloqueantes.',
    highlights: [
      'Recuperación híbrida (vectorial + texto) con permisos por documento.',
      'Cada respuesta enlaza al fragmento exacto que la respalda.',
      'Suite de evaluaciones que corre en CI antes de cambiar prompts o modelos.',
    ],
    stack: ['Python', 'pgvector', 'Claude API', 'Evals'],
  },
  {
    slug: 'relay',
    name: 'Relay',
    kind: 'Producto propio · Automatización',
    status: 'prototype',
    statusLabel: 'Prototipo',
    summary: 'Agente para WhatsApp Business que agenda citas y toma pedidos, con traspaso a un humano.',
    problem:
      'En México los clientes escriben por WhatsApp. Los negocios pierden ventas fuera de horario o por tiempos de respuesta largos.',
    highlights: [
      'Herramientas tipadas: el agente consulta agenda e inventario, no los inventa.',
      'Traspaso a humano con el contexto completo de la conversación.',
      'Bandeja compartida y métricas de conversión por canal.',
    ],
    stack: ['Node.js', 'WhatsApp Cloud API', 'Redis', 'LLM'],
  },
  {
    slug: 'kaizen-stack',
    name: 'kaizen-stack',
    kind: 'Open source · Plantilla',
    status: 'planned',
    statusLabel: 'Planeado',
    summary: 'La base con la que arrancamos cada proyecto, publicada como plantilla abierta.',
    problem:
      'Cada proyecto nuevo repite las mismas decisiones: auth, CI, migraciones, observabilidad. Las queremos resueltas y documentadas.',
    highlights: [
      'Monorepo con tipos compartidos entre API y clientes.',
      'Pipeline con previews por PR, migraciones y rollback.',
      'OpenTelemetry, logs estructurados y ADRs de ejemplo.',
    ],
    stack: ['TypeScript', 'Turborepo', 'Terraform', 'GitHub Actions'],
  },
];

export interface Standard {
  title: string;
  body: string;
  tools: string;
}

export const standards: Standard[] = [
  {
    title: 'Tipado de punta a punta',
    body: 'TypeScript estricto y esquemas compartidos entre API, web y móvil. Un cambio de contrato rompe la compilación, no producción.',
    tools: 'TypeScript · Zod · OpenAPI',
  },
  {
    title: 'Pruebas donde importa',
    body: 'Unitarias para reglas de negocio, integración contra una base de datos real y E2E sobre los flujos que generan dinero.',
    tools: 'Vitest · Testcontainers · Playwright',
  },
  {
    title: 'Despliegues reversibles',
    body: 'Cada PR genera un entorno de vista previa. Producción se despliega desde main con migraciones seguras y rollback en un paso.',
    tools: 'GitHub Actions · Docker',
  },
  {
    title: 'Observabilidad desde el día uno',
    body: 'Trazas, métricas y logs estructurados. Las alertas se definen por objetivos de servicio (SLO), no por umbrales arbitrarios.',
    tools: 'OpenTelemetry · Grafana · Sentry',
  },
  {
    title: 'Seguridad como requisito',
    body: 'OWASP ASVS como lista de verificación, secretos fuera del repositorio, permisos mínimos y auditoría de dependencias en CI.',
    tools: 'OWASP ASVS · IAM · Dependabot',
  },
  {
    title: 'Infraestructura como código',
    body: 'Los entornos se crean desde código revisado. Nada se configura a mano en una consola que nadie recuerda.',
    tools: 'Terraform · AWS · Cloudflare',
  },
  {
    title: 'Decisiones documentadas',
    body: 'Cada decisión de arquitectura queda en un ADR: contexto, alternativas y por qué. Tu siguiente equipo lo va a agradecer.',
    tools: 'ADRs · C4 · README operativo',
  },
  {
    title: 'Accesible y rápido',
    body: 'WCAG 2.2 AA y presupuestos de rendimiento (Core Web Vitals) que se verifican en el pipeline.',
    tools: 'axe · Lighthouse CI',
  },
];

export interface Step {
  n: string;
  title: string;
  duration: string;
  body: string;
  output: string;
}

export const process: Step[] = [
  {
    n: '01',
    title: 'Diagnóstico',
    duration: '1–2 semanas',
    body: 'Entendemos el negocio, los usuarios y las restricciones. Revisamos sistemas existentes y riesgos técnicos.',
    output: 'Alcance, riesgos y estimación por rangos',
  },
  {
    n: '02',
    title: 'Arquitectura',
    duration: '1 semana',
    body: 'Diseñamos el sistema, elegimos tecnología con criterios explícitos y definimos el plan de entregas.',
    output: 'Diagrama C4, ADRs y backlog priorizado',
  },
  {
    n: '03',
    title: 'Construcción',
    duration: 'Ciclos de 2 semanas',
    body: 'Software funcionando al final de cada ciclo, en un entorno que puedes usar. Repasamos avance y ajustamos prioridades contigo.',
    output: 'Demo, notas de versión y entorno de staging',
  },
  {
    n: '04',
    title: 'Lanzamiento',
    duration: '1 semana',
    body: 'Pruebas de carga, revisión de seguridad, monitoreo activo y plan de reversa antes de abrir el tráfico.',
    output: 'Runbook, dashboards y alertas',
  },
  {
    n: '05',
    title: 'Operación',
    duration: 'Continuo',
    body: 'Mantenimiento, mejoras y respuesta a incidentes con tiempos acordados. O transferencia completa a tu equipo.',
    output: 'Reportes mensuales y handoff documentado',
  },
];

/** Plain-language version of the process, for the home page. */
export const homeSteps = [
  {
    title: 'Platicamos',
    body: 'Una llamada de 30 minutos para entender tu negocio y lo que necesitas. Sin costo y sin compromiso.',
  },
  {
    title: 'Construimos contigo',
    body: 'Cada dos semanas te mostramos avances que ya puedes usar, y ajustamos según lo que veas.',
  },
  {
    title: 'Lanzamos y te acompañamos',
    body: 'Ponemos tu sistema en marcha, capacitamos a tu equipo y seguimos ahí si algo se necesita.',
  },
];

export interface Engagement {
  name: string;
  fit: string;
  points: string[];
  featured?: boolean;
}

export const engagements: Engagement[] = [
  {
    name: 'Proyecto',
    fit: 'Tienes un producto o sistema con objetivos claros y una fecha.',
    points: ['Alcance y estimación por rangos', 'Entregas cada 2 semanas', 'Garantía post-lanzamiento'],
  },
  {
    name: 'Equipo dedicado',
    fit: 'Necesitas capacidad de ingeniería continua sin contratar un equipo completo.',
    points: ['Ingenieros asignados a tu producto', 'Se integra a tu repositorio y procesos', 'Escala por mes'],
    featured: true,
  },
  {
    name: 'Auditoría técnica',
    fit: 'Ya tienes un sistema y quieres saber qué tan sano está antes de invertir más.',
    points: ['Duración de 2 semanas', 'Seguridad, arquitectura y rendimiento', 'Plan priorizado por riesgo'],
  },
];

export const faqs = [
  {
    q: '¿De quién es el código?',
    a: 'Tuyo. Trabajamos en un repositorio dentro de tu organización desde el primer día, con acceso a la infraestructura y a la documentación. Si mañana decides seguir con otro equipo, no hay nada que rescatar.',
  },
  {
    q: '¿Cómo estiman tiempo y costo?',
    a: 'Después del diagnóstico damos una estimación por rangos con los supuestos explícitos. Conforme avanzan los ciclos, el rango se cierra. Preferimos eso a un número fijo que se renegocia a la mitad.',
  },
  {
    q: '¿Usan IA para programar?',
    a: 'Sí, como herramienta para revisar, probar y documentar más rápido. Cada cambio pasa por revisión humana y por el mismo pipeline de pruebas. No enviamos tu código a servicios externos sin un acuerdo previo.',
  },
  {
    q: '¿Pueden trabajar con mi equipo actual?',
    a: 'Sí. Nos adaptamos a tus herramientas, ramas y rituales, o proponemos los nuestros si no hay. El objetivo es que tu equipo pueda mantener lo que construimos.',
  },
  {
    q: '¿Qué pasa después del lanzamiento?',
    a: 'Incluimos un periodo de garantía para corregir defectos. Después puedes contratar operación continua con tiempos de respuesta acordados, o recibir un handoff documentado.',
  },
  {
    q: '¿Firman acuerdos de confidencialidad?',
    a: 'Sí. Podemos firmar un NDA antes de revisar código, documentos o datos de tu empresa.',
  },
];

export interface Solution {
  slug: string;
  name: string;
  /** Who it is for, in the client's words. */
  audience: string;
  pitch: string;
  includes: string[];
  stack: string;
  /** URL segment of the solution's own page: /soluciones/<path>. */
  path: string;
  /** <title> and meta description of that page. */
  seoTitle: string;
  seoDescription: string;
  /** The problem it solves, in a sentence or two. */
  problem: string;
  /** How a project runs, from first call to live. */
  steps: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
}

/**
 * Productised solutions we sell and adapt per client. Technology choices follow
 * current market leaders for each category (researched November 2026).
 */
export const solutions: Solution[] = [
  {
    slug: 'crm',
    name: 'CRM a la medida',
    audience: 'Inmobiliarias, despachos, distribuidoras y equipos de ventas',
    pitch:
      'Tu proceso de ventas en un solo lugar, con los campos, etapas y reportes que tu negocio usa de verdad, y sin pagar licencias por usuario.',
    includes: [
      'Embudo de ventas, contactos y seguimiento por vendedor',
      'WhatsApp y correo integrados en el historial del cliente',
      'Reportes de conversión y tareas automáticas',
    ],
    stack: 'Twenty CRM (open source) · TypeScript · PostgreSQL',
    path: "crm-a-la-medida",
    seoTitle: "CRM a la medida en México, sin licencias por usuario",
    seoDescription:
      "Desarrollamos CRM a la medida para inmobiliarias, despachos y equipos de ventas en México: embudo, WhatsApp y correo integrados, reportes y sin pagar por usuario.",
    problem:
      "Los CRM de suscripción cobran por cada usuario cada mes y te obligan a adaptar tu proceso a sus pantallas. Al final el equipo vuelve a Excel y WhatsApp, y nadie sabe en qué etapa está cada cliente.",
    steps: [
      { title: "Mapeamos tu proceso de venta", text: "Revisamos contigo las etapas, los campos y los reportes que de verdad usan tus vendedores y tu dirección." },
      { title: "Configuramos y migramos", text: "Montamos el CRM sobre una base open source probada, lo adaptamos a tu proceso e importamos tus contactos desde Excel o tu sistema actual." },
      { title: "Conectamos tus canales", text: "Integramos WhatsApp, correo y formularios de tu sitio para que cada conversación quede en el historial del cliente." },
      { title: "Capacitamos y acompañamos", text: "Entrenamos a tu equipo y ajustamos durante las primeras semanas de uso." },
    ],
    faqs: [
      { q: "¿En qué se diferencia de HubSpot o Salesforce?", a: "Esos productos cobran licencia por usuario y su modelo de datos es genérico. Un CRM a la medida se adapta a tu proceso y el costo no crece cada vez que contratas a un vendedor." },
      { q: "¿Dónde quedan mis datos?", a: "En tu propia infraestructura o en una nube a tu nombre. Los datos son tuyos y puedes exportarlos cuando quieras." },
      { q: "¿Puedo empezar con algo pequeño?", a: "Sí. Empezamos con el embudo y los contactos, y agregamos integraciones y reportes conforme tu equipo lo adopta." },
    ],
  },
  {
    slug: 'tours-3d',
    name: 'Recorridos 3D para inmuebles',
    audience: 'Desarrolladoras e inmobiliarias',
    pitch:
      'Vende antes de que el cliente visite: recorridos fotorrealistas en el navegador, capturados con un video del celular o una cámara 360.',
    includes: [
      'Recorrido 3D navegable en web y móvil, sin apps',
      'Plano interactivo con disponibilidad y precio por unidad',
      'Página propia por desarrollo, lista para anuncios',
    ],
    stack: 'Gaussian Splatting · Three.js · WebGL',
    path: "recorridos-3d-inmuebles",
    seoTitle: "Recorridos 3D para inmobiliarias y desarrolladoras",
    seoDescription:
      "Recorridos 3D fotorrealistas para vender inmuebles desde el navegador: captura con celular o cámara 360, plano interactivo con disponibilidad y precio por unidad.",
    problem:
      "Mostrar un inmueble cuesta tiempo de traslado, citas canceladas y visitas de curiosos. Las fotos y los renders no le dan al comprador la sensación de estar ahí, y los recorridos 360 tradicionales se ven planos.",
    steps: [
      { title: "Capturamos el espacio", text: "Grabamos el inmueble con un video de celular o una cámara 360. Para preventas trabajamos a partir de los modelos 3D del proyecto." },
      { title: "Reconstruimos en 3D", text: "Procesamos la captura con Gaussian Splatting para obtener un modelo fotorrealista que se recorre libremente." },
      { title: "Publicamos la experiencia", text: "Entregamos una página por desarrollo con el recorrido, el plano interactivo y la disponibilidad por unidad, lista para tus anuncios." },
      { title: "Medimos el interés", text: "Registramos qué unidades y espacios ven más tus prospectos para que tu equipo de ventas les dé seguimiento." },
    ],
    faqs: [
      { q: "¿El cliente necesita instalar algo?", a: "No. El recorrido funciona en el navegador del celular o de la computadora, sin apps ni lentes." },
      { q: "¿Sirve para inmuebles que aún no se construyen?", a: "Sí. A partir de los modelos 3D o renders del proyecto armamos el recorrido para la preventa." },
      { q: "¿Cuánto tarda?", a: "Depende del número de unidades y de la captura. En la primera llamada te damos un calendario concreto para tu desarrollo." },
    ],
  },
  {
    slug: 'whatsapp',
    name: 'Agente de ventas en WhatsApp',
    audience: 'Clínicas, restaurantes, tiendas y servicios',
    pitch:
      'Responde 24/7, agenda citas, toma pedidos y califica prospectos en el canal que tus clientes ya usan. Cuando hace falta, pasa la conversación a una persona.',
    includes: [
      'Número oficial con la API de WhatsApp de Meta',
      'Respuestas basadas en tu catálogo, precios y horarios',
      'Traspaso a humano con todo el contexto',
    ],
    stack: 'WhatsApp Cloud API · LLM con guardrails · Node.js',
    path: "agente-whatsapp-ia",
    seoTitle: "Agente de ventas en WhatsApp con IA para negocios",
    seoDescription:
      "Un agente de WhatsApp con IA que responde 24/7, agenda citas, toma pedidos y califica prospectos con la API oficial de Meta, y pasa a una persona cuando hace falta.",
    problem:
      "Tus clientes escriben por WhatsApp a cualquier hora y esperan respuesta inmediata. Cada mensaje que se queda sin contestar por la noche o en fin de semana es una venta que se va con la competencia.",
    steps: [
      { title: "Definimos qué debe resolver", text: "Elegimos contigo las conversaciones que el agente atiende solo (precios, horarios, citas, pedidos) y cuáles pasan a tu equipo." },
      { title: "Lo entrenamos con tu negocio", text: "Cargamos tu catálogo, precios, horarios y políticas para que responda con tu información y no invente." },
      { title: "Lo conectamos al número oficial", text: "Configuramos la API de WhatsApp de Meta, tu agenda y tu CRM para que cada cita o pedido quede registrado." },
      { title: "Lo supervisamos", text: "Revisamos conversaciones reales en las primeras semanas y ajustamos respuestas y reglas de traspaso." },
    ],
    faqs: [
      { q: "¿Va a contestar cosas que no debe?", a: "El agente responde solo con la información que le damos y tiene reglas para pasar a una persona cuando no sabe algo o el cliente lo pide." },
      { q: "¿Puedo seguir usando mi número actual?", a: "Generalmente sí: migramos tu número a la API oficial de WhatsApp Business. Te explicamos el proceso y sus implicaciones antes de hacerlo." },
      { q: "¿Qué pasa con los mensajes que atiende mi equipo?", a: "Tu equipo ve todas las conversaciones y puede tomar cualquiera en cualquier momento, con el historial completo." },
    ],
  },
  {
    slug: 'n8n',
    name: 'Automatización de procesos',
    audience: 'Equipos de operación, administración y ventas',
    pitch:
      'Eliminamos el trabajo repetitivo entre tus sistemas: de un formulario al CRM, de una factura al sistema contable, de los datos a un reporte semanal.',
    includes: [
      'Flujos entre tus herramientas: Sheets, CRM, ERP, correo',
      'Agentes de IA que clasifican, resumen y extraen datos',
      'Servidor propio: tus datos no salen de tu infraestructura',
    ],
    stack: 'n8n self-hosted · Agentes de IA · Webhooks',
    path: "automatizacion-de-procesos-n8n",
    seoTitle: "Automatización de procesos con n8n e IA para empresas",
    seoDescription:
      "Automatizamos el trabajo repetitivo de tu empresa con n8n en servidor propio y agentes de IA: del formulario al CRM, de la factura a contabilidad, de los datos al reporte.",
    problem:
      "Tu equipo pasa horas copiando datos de un sistema a otro, armando reportes a mano y revisando correos para saber qué hacer. Es trabajo que no aporta y donde se cuelan errores.",
    steps: [
      { title: "Encontramos los procesos que más cuestan", text: "Revisamos contigo dónde se va el tiempo de tu equipo y elegimos los flujos con más impacto." },
      { title: "Diseñamos el flujo", text: "Dibujamos paso a paso qué entra, qué se valida y a dónde va, incluyendo qué pasa cuando algo falla." },
      { title: "Lo construimos en n8n", text: "Montamos n8n en un servidor propio y conectamos tus herramientas. Donde hace falta criterio, agregamos un agente de IA que clasifica o extrae datos." },
      { title: "Lo dejamos vigilado", text: "Configuramos alertas para que nadie se entere de un error una semana después." },
    ],
    faqs: [
      { q: "¿Por qué n8n y no Zapier o Make?", a: "n8n se puede instalar en tu propio servidor, así tus datos no pasan por terceros y no pagas por cada ejecución. Si ya usas otra herramienta, también podemos trabajar con ella." },
      { q: "¿Qué herramientas se pueden conectar?", a: "Hojas de cálculo, CRM, ERP, correo, WhatsApp, bases de datos y casi cualquier sistema con API. Si tu sistema no tiene API, buscamos otra vía." },
      { q: "¿Qué pasa si un flujo falla?", a: "Cada flujo tiene manejo de errores y alertas. Te avisamos y lo corregimos según el plan de soporte que contrates." },
    ],
  },
  {
    slug: 'voz',
    name: 'Agente de voz telefónico',
    audience: 'Negocios con alto volumen de llamadas',
    pitch:
      'Un agente que contesta y hace llamadas con voz natural: agenda, confirma citas, califica prospectos y transfiere a tu equipo cuando es necesario.',
    includes: [
      'Atención telefónica en español, a cualquier hora',
      'Conectado a tu agenda y a tu CRM',
      'Grabación, transcripción y resumen de cada llamada',
    ],
    stack: 'Vapi / Retell · Voces de ElevenLabs · Twilio',
    path: "agente-de-voz-ia",
    seoTitle: "Agente de voz con IA para llamadas telefónicas",
    seoDescription:
      "Un agente de voz con IA que contesta y hace llamadas en español: agenda, confirma citas, califica prospectos y transfiere a tu equipo, con grabación y resumen de cada llamada.",
    problem:
      "Las llamadas perdidas son clientes perdidos, y confirmar citas o calificar prospectos por teléfono consume horas de tu equipo todos los días.",
    steps: [
      { title: "Escribimos el guion", text: "Definimos contigo qué debe lograr cada llamada, qué preguntas hace el agente y cuándo transfiere a una persona." },
      { title: "Elegimos la voz y el número", text: "Configuramos una voz natural en español y un número telefónico, o conectamos tu conmutador actual." },
      { title: "Lo conectamos a tu operación", text: "Integramos tu agenda y tu CRM para que cada cita, confirmación o prospecto quede registrado." },
      { title: "Escuchamos y ajustamos", text: "Revisamos grabaciones y transcripciones de las primeras semanas para mejorar el guion." },
    ],
    faqs: [
      { q: "¿El cliente sabe que habla con una IA?", a: "Recomendamos que el agente se presente como asistente virtual. Es lo más honesto y evita malas experiencias." },
      { q: "¿Puede transferir la llamada a una persona?", a: "Sí. Cuando el caso lo requiere o el cliente lo pide, transfiere la llamada a tu equipo con el contexto de la conversación." },
      { q: "¿Qué queda registrado?", a: "Cada llamada queda grabada, transcrita y resumida en tu CRM o en el sistema que uses." },
    ],
  },
  {
    slug: 'documentos',
    name: 'Lectura inteligente de documentos',
    audience: 'Contabilidad, legal, recursos humanos y logística',
    pitch:
      'Convierte facturas, contratos, identificaciones y comprobantes en datos estructurados que entran directo a tus sistemas, con validación humana donde importa.',
    includes: [
      'Extracción de CFDI, PDF, fotos y escaneos',
      'Validación contra reglas de negocio y el SAT',
      'Bandeja de revisión para los casos dudosos',
    ],
    stack: 'Claude API · OCR · Python',
    path: "lectura-inteligente-de-documentos",
    seoTitle: "Lectura inteligente de documentos y facturas CFDI con IA",
    seoDescription:
      "Extraemos datos de facturas CFDI, contratos, identificaciones y comprobantes con IA, los validamos contra tus reglas y el SAT y los cargamos a tus sistemas.",
    problem:
      "Capturar a mano facturas, contratos o comprobantes es lento y propenso a errores, y cada error en contabilidad o en un expediente cuesta caro después.",
    steps: [
      { title: "Reunimos ejemplos reales", text: "Revisamos los tipos de documento que recibes y los datos que necesitas de cada uno." },
      { title: "Configuramos la extracción", text: "Combinamos lectura de XML, OCR e IA para sacar los datos de PDF, fotos y escaneos." },
      { title: "Validamos antes de cargar", text: "Revisamos cada dato contra tus reglas de negocio y, en el caso de CFDI, contra el SAT. Los casos dudosos van a una bandeja de revisión humana." },
      { title: "Lo integramos a tus sistemas", text: "Los datos validados entran directo a tu sistema contable, ERP o expediente." },
    ],
    faqs: [
      { q: "¿Qué tan precisa es la extracción?", a: "Depende de la calidad de los documentos. Por eso todo pasa por validaciones y los casos dudosos los revisa una persona antes de cargarse." },
      { q: "¿Sirve para documentos escaneados o fotos?", a: "Sí. Trabajamos con PDF, XML, fotos de celular y escaneos." },
      { q: "¿Dónde se procesan mis documentos?", a: "Definimos contigo dónde se procesan y almacenan, y aplicamos las medidas de seguridad que tu operación requiere." },
    ],
  },
];
