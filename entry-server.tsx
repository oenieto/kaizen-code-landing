import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import App from './App';

export { routes, notFoundMeta, SITE_URL, SITE_NAME, OG_IMAGE } from './data/seo';
export { posts } from './data/blog';

/**
 * Build-time render of one route to HTML (used by scripts/prerender.mjs).
 * prerenderToNodeStream waits for lazy routes to resolve, unlike renderToString,
 * so every page ships its real content instead of a Suspense fallback.
 */
export async function render(url: string): Promise<string> {
  const { prelude } = await prerenderToNodeStream(
    <React.StrictMode>
      <StaticRouter location={url}>
        <MotionConfig reducedMotion="user">
          <App />
        </MotionConfig>
      </StaticRouter>
    </React.StrictMode>,
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
