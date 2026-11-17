import React from 'react';

const commitments = ['Código tuyo desde el día uno.', 'Software funcionando cada dos semanas.', 'Decisiones documentadas.'];

/**
 * Ink block with a statement headline. No entrance animation so above-the-fold
 * content paints immediately (LCP).
 */
export const Hero: React.FC = () => (
  <section className="bg-ink text-white" aria-labelledby="hero-title">
    <div className="container-page flex min-h-[92svh] flex-col justify-between pt-36 pb-14 sm:pt-44 lg:pb-16">
      <div>
        {/* Brand + primary keyword, visible and above the H1, for search and context. */}
        <p className="mb-6 text-[15px] text-white/60">Kaizen Code · Desarrollo de software a la medida en México</p>
        {/* Spans the full width on large screens so the statement stays the page's face. */}
        <h1
          id="hero-title"
          className="max-w-[17ch] text-[clamp(2.6rem,6.3vw,7.75rem)] leading-[1.02] font-medium tracking-[-0.03em] text-balance lg:max-w-none"
        >
          Somos un estudio de ingeniería que construye software para producción, no para la demo.
        </h1>
      </div>

      <div className="mt-20 grid gap-12 lg:grid-cols-12 lg:items-end">
        <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-6" aria-label="Compromisos">
          {commitments.map((c) => (
            <li key={c} className="border-t border-white/30 pt-3 text-[15px] leading-snug">
              {c}
            </li>
          ))}
        </ul>

        <div className="lg:col-span-5 lg:col-start-8">
          <p className="text-[15px] leading-[1.75] text-white/85">
            Diseñamos, construimos y operamos plataformas web, APIs e integraciones con IA para empresas cuyo sistema no
            puede fallar. Trabajamos con tu equipo desde la primera semana, con avances que puedes usar y no sólo ver.
          </p>
          <a href="#process" className="link mt-5 inline-block text-[15px]">
            Conoce cómo trabajamos
          </a>
        </div>
      </div>
    </div>
  </section>
);
