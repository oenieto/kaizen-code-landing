import React from 'react';
import { prerenderToNodeStream } from 'react-dom/static';
import { StaticRouter } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import App from './App';

export { routes, notFoundMeta, SITE_URL, SITE_NAME, OG_IMAGE } from './data/seo';
export { posts } from './data/blog';

/**
 * Build-time render of one route to HTML (used by scripts/prerender.mjs).
 *
 * prerenderToNodeStream waits for lazy routes to resolve. By default React 19 still
 * "outlines" any Suspense boundary bigger than progressiveChunkSize: it ships the
 * fallback, appends the real content in a hidden <div> and swaps it in with an inline
 * script on a later animation frame. For static pages that hides content from crawlers
 * that don't run JS and delays first paint, so outlining is disabled.
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
    { progressiveChunkSize: Number.POSITIVE_INFINITY },
  );
  let html = '';
  for await (const chunk of prelude) html += chunk;
  return html;
}
