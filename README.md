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

## Estructura

```
data/site.ts          Contenido de la landing (servicios, proyectos, estándares, FAQ, contacto)
data/blog-posts.json  Artículos del blog (actualizado por .github/workflows/update-blog.yml)
components/           Secciones de la landing y layout compartido
pages/                Rutas
index.css             Tokens de diseño (claro/oscuro) y utilidades
```

Para cambiar textos, proyectos o estados de proyecto, edita `data/site.ts`; los componentes no contienen copy de negocio.

## Diseño

- Tokens semánticos (`canvas`, `surface`, `line`, `fg`, `muted`, `accent`) definidos como variables CSS que cambian con la clase `.dark`.
- El tema se resuelve antes del primer pintado (script en `index.html`) para evitar parpadeo; se guarda en `localStorage`.
- Objetivo de accesibilidad: WCAG 2.2 AA (foco visible, skip link, formularios con errores asociados, `<details>` nativo para FAQ).
