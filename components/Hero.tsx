import React from 'react';
import { ArrowRight } from 'lucide-react';

const commitments = [
  { k: 'Propiedad', v: 'Código en tu repositorio desde el día uno' },
  { k: 'Cadencia', v: 'Software funcionando cada dos semanas' },
  { k: 'Decisiones', v: 'Arquitectura documentada en ADRs' },
  { k: 'Continuidad', v: 'Garantía y soporte post-lanzamiento' },
];

/**
 * Full-width typographic hero: the headline is the page's face. No entrance
 * animation so above-the-fold content paints immediately (LCP).
 */
export const Hero: React.FC = () => (
  <section className="pt-32 sm:pt-40" aria-labelledby="hero-title">
    <div className="container-page">
      <p className="eyebrow">Estudio de ingeniería de software · México</p>

      <h1
        id="hero-title"
        className="mt-6 text-[clamp(2.75rem,9.2vw,8.75rem)] leading-[0.95] font-semibold tracking-[-0.045em]"
      >
        Software de producción,
        <br />
        <span className="text-faint">no prototipos.</span>
      </h1>

      <div className="mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[minmax(0,36rem)_1fr] lg:items-end">
        <p className="text-lg leading-relaxed text-pretty text-muted sm:text-xl">
          Diseñamos, construimos y operamos plataformas web, APIs e integraciones con IA para empresas cuyo sistema no
          puede fallar. Tipado, probado, observable y tuyo desde el primer commit.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
          <a href="#contact" className="btn-primary group">
            Agendar llamada técnica
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </a>
          <a href="#work" className="btn-secondary">
            Ver trabajo
          </a>
        </div>
      </div>
    </div>

    <div className="mt-20 border-y border-line sm:mt-24">
      <div className="container-page">
        <dl className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {commitments.map((c, i) => (
          <div
            key={c.k}
            className="bg-canvas py-6 sm:pr-6 sm:even:pl-6 lg:py-8 lg:pl-6 lg:first:pl-0"
          >
            <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
              <span className="text-accent">0{i + 1}</span> {c.k}
            </dt>
            <dd className="mt-2 text-[15px] leading-snug text-fg">{c.v}</dd>
          </div>
        ))}
        </dl>
      </div>
    </div>
  </section>
);
