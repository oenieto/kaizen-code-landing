import React, { Suspense, lazy, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { metaFor, SITE_URL } from './data/seo';

// Secondary routes are split out so the landing page ships only what it renders.
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((m) => ({ default: m.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((m) => ({ default: m.BlogPostPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then((m) => ({ default: m.TermsPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

/** New route without a hash starts at the top; hash links are handled by the page. */
function useScrollToTopOnNavigate() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
}

/** Set a <meta>/<link> in <head>, creating it if the prerendered HTML lacks it. */
function setHead(selector: string, attr: 'content' | 'href', value: string, create: () => HTMLElement) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

/**
 * Keeps title, description, canonical and Open Graph tags in sync on client-side
 * navigation. Prerendered HTML already carries the same values for the first load.
 */
function useRouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = metaFor(pathname);
    const url = SITE_URL + (meta.path === '/404' ? pathname : meta.path);
    document.title = meta.title;
    const tag = (name: string, attr: 'name' | 'property') => () => {
      const m = document.createElement('meta');
      m.setAttribute(attr, name);
      return m;
    };
    setHead('meta[name="description"]', 'content', meta.description, tag('description', 'name'));
    setHead('meta[property="og:title"]', 'content', meta.title, tag('og:title', 'property'));
    setHead('meta[property="og:description"]', 'content', meta.description, tag('og:description', 'property'));
    setHead('meta[property="og:url"]', 'content', url, tag('og:url', 'property'));
    setHead('link[rel="canonical"]', 'href', url, () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    });
  }, [pathname]);
}

function App() {
  useScrollToTopOnNavigate();
  useRouteMeta();
  return (
    <div className="min-h-screen bg-canvas text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-fg focus:px-4 focus:py-2 focus:text-sm focus:text-canvas"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="main" tabIndex={-1} className="outline-none">
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
