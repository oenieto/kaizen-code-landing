import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * Cloudflare Turnstile (invisible anti-spam). Loads the script once, on demand, and
 * renders the widget into `containerRef`. Most visitors never see it; it only shows
 * a checkbox when Cloudflare isn't sure the visitor is human.
 */

interface TurnstileApi {
  render: (el: HTMLElement, opts: Record<string, unknown>) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
}
declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
let scriptPromise: Promise<TurnstileApi> | null = null;

function loadTurnstile(): Promise<TurnstileApi> {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  scriptPromise ??= new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SCRIPT_SRC;
    s.async = true;
    s.onload = () => (window.turnstile ? resolve(window.turnstile) : reject(new Error('turnstile missing')));
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error('turnstile failed to load'));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export function useTurnstile(siteKey: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  // True while Cloudflare shows the checkbox and waits for the visitor to tick it.
  const [needsInteraction, setNeedsInteraction] = useState(false);

  useEffect(() => {
    let cancelled = false;
    loadTurnstile()
      .then((ts) => {
        if (cancelled || !containerRef.current || widgetId.current) return;
        widgetId.current = ts.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'dark',
          size: 'flexible',
          appearance: 'interaction-only',
          language: 'es',
          callback: (t: string) => setToken(t),
          'expired-callback': () => setToken(null),
          'error-callback': () => setToken(null),
          'before-interactive-callback': () => setNeedsInteraction(true),
          'after-interactive-callback': () => setNeedsInteraction(false),
        });
      })
      .catch(() => !cancelled && setFailed(true));
    return () => {
      cancelled = true;
      if (widgetId.current && window.turnstile) window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [siteKey]);

  const reset = useCallback(() => {
    setToken(null);
    if (widgetId.current && window.turnstile) window.turnstile.reset(widgetId.current);
  }, []);

  return { containerRef, token, failed, needsInteraction, reset };
}
