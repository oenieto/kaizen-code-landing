// Writes a static HTML file per route after `vite build` + the SSR build, so search
// engines and link previews get real content and per-page metadata without JS.
// Usage: node scripts/prerender.mjs   (run by `npm run build`)
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrEntry = path.join(root, 'dist-ssr', 'entry-server.js');

const { render, routes, notFoundMeta, posts, SITE_URL, SITE_NAME } = await import(ssrEntry);
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');

const escape = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** "/" -> index.html, "/about" -> about.html, "/blog/x" -> blog/x.html (served extensionless). */
const fileFor = (p) => (p === '/' ? 'index.html' : `${p.slice(1)}.html`);
const urlFor = (p) => (p === '/' ? `${SITE_URL}/` : `${SITE_URL}${p}`);

function articleJsonLd(meta) {
  const post = posts.find((p) => `/blog/${p.slug}` === meta.path);
  if (!post) return '';
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    inLanguage: 'es-MX',
    mainEntityOfPage: urlFor(meta.path),
    author: { '@type': 'Organization', name: SITE_NAME, url: `${SITE_URL}/` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  return `\n    <script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;
}

function head(meta, { index = true } = {}) {
  const url = urlFor(meta.path);
  return [
    `<title>${escape(meta.title)}</title>`,
    `<meta name="description" content="${escape(meta.description)}" />`,
    index ? `<link rel="canonical" href="${url}" />` : '<meta name="robots" content="noindex" />',
    `<meta property="og:type" content="${meta.type ?? 'website'}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${escape(meta.title)}" />`,
    `<meta property="og:description" content="${escape(meta.description)}" />`,
  ].join('\n    ') + articleJsonLd(meta);
}

async function write(meta, file, opts) {
  const appHtml = await render(meta.path);
  if (!appHtml.includes('<main')) throw new Error(`Prerender of ${meta.path} produced no <main>`);
  // Content must be inline, not a deferred Suspense segment (see entry-server.tsx).
  if (/<template id="B:|\$RC\(/.test(appHtml)) throw new Error(`Prerender of ${meta.path} left a Suspense fallback`);
  let html = template.replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, head(meta, opts));
  html = html.replace('<!--app-->', appHtml);
  if (opts?.index === false) html = html.replace('<meta name="robots" content="index, follow, max-image-preview:large" />', '');
  const out = path.join(dist, file);
  await fs.mkdir(path.dirname(out), { recursive: true });
  await fs.writeFile(out, html);
}

for (const meta of routes) await write(meta, fileFor(meta.path));
await write(notFoundMeta, '404.html', { index: false });

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) =>
      `  <url><loc>${urlFor(r.path)}</loc><lastmod>${today}</lastmod><priority>${r.path === '/' ? '1.0' : r.type === 'article' ? '0.6' : '0.8'}</priority></url>`,
  )
  .join('\n')}
</urlset>
`;
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemap);

await fs.rm(path.join(root, 'dist-ssr'), { recursive: true, force: true });
console.log(`prerendered ${routes.length} routes + 404, sitemap.xml written`);
