import { posts } from './blog';
import { solutions } from './site';

/**
 * Single source of truth for per-route metadata. Used by the client (useSeo) and by
 * scripts/prerender.mjs, which writes the same values into each static HTML file so
 * crawlers see them without running JavaScript.
 */
export const SITE_URL = 'https://kaizencode.com.mx';
export const SITE_NAME = 'Kaizen Code';
export const OG_IMAGE = `${SITE_URL}/og.png`;
const BRAND_SUFFIX = ' — Kaizen Code';

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article' | 'solution';
}

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'Kaizen Code — CRM, WhatsApp con IA y automatización en México',
    description:
      'Estudio de software en México: CRM a la medida, agentes de WhatsApp con IA, automatización con n8n, recorridos 3D para inmuebles y plataformas web.',
  },
  {
    path: '/trabajo',
    title: 'Proyectos de software a la medida en México — Kaizen Code',
    description:
      'Proyectos de Kaizen Code: portal NOC para telecomunicaciones, facturación CFDI, analítica deportiva con IA, gestión para logias y agentes de WhatsApp.',
  },
  {
    path: '/como-trabajamos',
    title: 'Proceso de desarrollo de software a la medida — Kaizen Code',
    description:
      'Nuestro proceso de desarrollo de software paso a paso, modelos de contratación y estándares de ingeniería: pruebas, seguridad y despliegues confiables.',
  },
  {
    path: '/about',
    title: 'Equipo de ingenieros de software en México — Kaizen Code',
    description:
      'Conoce al equipo de Kaizen Code: ingenieros de software en México que diseñan, construyen y operan sistemas con estándares de producción.',
  },
  {
    path: '/blog',
    title: 'Blog de desarrollo de software e IA — Kaizen Code',
    description:
      'Artículos sobre desarrollo de software, infraestructura e inteligencia artificial, escritos en español por el equipo de Kaizen Code.',
  },
  {
    path: '/privacy',
    title: 'Aviso de privacidad — Kaizen Code',
    description: 'Aviso de privacidad de Kaizen Code conforme a la LFPDPPP.',
  },
  {
    path: '/terms',
    title: 'Términos y condiciones — Kaizen Code',
    description: 'Términos y condiciones de prestación de servicios de Kaizen Code.',
  },
];

/** Google shows ~60 characters; drop the brand suffix rather than truncate the headline. */
const withBrand = (title: string) => (title.length + BRAND_SUFFIX.length <= 60 ? `${title}${BRAND_SUFFIX}` : title);

export const solutionPath = (path: string) => `/soluciones/${path}`;

export const solutionRoutes: RouteMeta[] = solutions.map((s) => ({
  path: solutionPath(s.path),
  title: withBrand(s.seoTitle),
  description: s.seoDescription,
  type: 'solution',
}));

export const postRoutes: RouteMeta[] = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  title: withBrand(p.title),
  description: p.excerpt,
  type: 'article',
}));

export const routes: RouteMeta[] = [...staticRoutes, ...solutionRoutes, ...postRoutes];

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: 'Página no encontrada — Kaizen Code',
  description: 'La página que buscas no existe.',
};

export const metaFor = (path: string): RouteMeta => routes.find((r) => r.path === path) ?? notFoundMeta;
