# Kaizen Code — sitio web

Sitio de Kaizen Code: landing, blog y páginas legales.

## Stack

- React 19 + TypeScript, Vite 6
- Tailwind CSS 4 compilado en el build (`@tailwindcss/vite`), sin CDN
- React Router 7 con carga diferida de rutas secundarias
- framer-motion con `reducedMotion="user"` (respeta la preferencia del sistema)

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm run preview
```

## Build y SEO

`npm run build` hace tres pasos:

1. `vite build`: bundle del cliente en `dist/`.
2. `vite build --ssr entry-server.tsx`: bundle de servidor temporal en `dist-ssr/`.
3. `node scripts/prerender.mjs`: renderiza cada ruta (home, páginas y cada artículo del blog) a HTML estático
   (`dist/about.html`, `dist/blog/<slug>.html`, …) con su título, descripción, canonical, Open Graph y JSON-LD,
   más `404.html` y `sitemap.xml`. En el navegador, React hidrata ese HTML.

Los metadatos de cada ruta viven en `data/seo.ts` (cliente y prerender usan la misma fuente). Cloudflare sirve
`dist/` con `not_found_handling: "404-page"`, así que las rutas inexistentes responden 404 real.

## Estructura

```
data/site.ts          Contenido de la landing (soluciones, servicios, proyectos, estándares, FAQ, contacto)
data/seo.ts           Metadatos por ruta (título, descripción) y URL del sitio
data/blog-posts.json  Artículos del blog (actualizado por .github/workflows/update-blog.yml)
components/           Secciones de la landing y layout compartido
pages/                Rutas
index.css             Tokens de diseño (claro/oscuro) y utilidades
```

Para cambiar textos, proyectos o estados de proyecto, edita `data/site.ts`; los componentes no contienen copy de negocio.

## Diseño

- Estilo editorial blanco y negro con un acento bermellón; tipografía Inter Tight.
- Tokens en `index.css` (`canvas`, `ink`, `paper`, `line`, `rule`, `fg`, `muted`, `accent`).
- Objetivo de accesibilidad: WCAG 2.2 AA (foco visible, skip link, formularios con errores asociados, `<details>` nativo para FAQ).
