import { posts } from './blog';

/**
 * Single source of truth for per-route metadata. Used by the client (useSeo) and by
 * scripts/prerender.mjs, which writes the same values into each static HTML file so
 * crawlers see them without running JavaScript.
 */
export const SITE_URL = 'https://kaizencode.com.mx';
export const SITE_NAME = 'Kaizen Code';
export const OG_IMAGE = `${SITE_URL}/og.png`;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  type?: 'website' | 'article';
}

const staticRoutes: RouteMeta[] = [
  {
    path: '/',
    title: 'Kaizen Code — CRM, WhatsApp con IA y automatización en México',
    description:
      'Kaizen Code es un estudio de ingeniería de software en México. Desarrollamos CRM a la medida, agentes de WhatsApp e IA, automatizaciones con n8n, recorridos 3D para inmuebles y plataformas web listas para producción.',
  },
  {
    path: '/about',
    title: 'Nosotros — Kaizen Code',
    description:
      'Conoce al equipo de Kaizen Code: ingenieros de software en México que diseñan, construyen y operan sistemas con estándares de producción.',
  },
  {
    path: '/blog',
    title: 'Blog — Kaizen Code',
    description: 'Notas semanales sobre desarrollo de software, infraestructura e inteligencia artificial, en español.',
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

export const postRoutes: RouteMeta[] = posts.map((p) => ({
  path: `/blog/${p.slug}`,
  title: `${p.title} — Kaizen Code`,
  description: p.excerpt,
  type: 'article',
}));

export const routes: RouteMeta[] = [...staticRoutes, ...postRoutes];

export const notFoundMeta: RouteMeta = {
  path: '/404',
  title: 'Página no encontrada — Kaizen Code',
  description: 'La página que buscas no existe.',
};

export const metaFor = (path: string): RouteMeta => routes.find((r) => r.path === path) ?? notFoundMeta;
