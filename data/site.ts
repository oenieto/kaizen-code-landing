/**
 * Landing page content. Kept separate from components so copy can change
 * without touching layout, and so the shape of each section is typed.
 */

/** Fired by solution CTAs so the contact form can preselect the project type. */
export const SELECT_PROJECT_TYPE = 'kc:select-project-type';

export const CONTACT = {
  email: 'nieto_war@hotmail.com',
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
  image: string;
  imageAlt: string;
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
  image: '/assets/work/multicarrier.webp',
  imageAlt: 'Ingeniero frente a una pared de monitores con mapas de red en un centro de operaciones',
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
    image: '/assets/work/folio.webp',
    imageAlt: 'Escritorio con facturas impresas, una laptop con hojas de cálculo y una taza de café',
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
    image: '/assets/work/atlas.webp',
    imageAlt: 'Mano tomando una carpeta roja de un archivero con carpetas grises',
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
    image: '/assets/work/relay.webp',
    imageAlt: 'Dueña de una panadería respondiendo mensajes en su celular',
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
    image: '/assets/work/kaizen-stack.webp',
    imageAlt: 'Escritorio de desarrollador al atardecer con código en el monitor',
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
  },
];
