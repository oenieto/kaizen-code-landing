import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SystemDiagram } from './SystemDiagram';

const guarantees = [
  'Código en tu repositorio desde el día uno',
  'Software funcionando cada 2 semanas',
  'Arquitectura documentada en ADRs',
  'Garantía y soporte post-lanzamiento',
];

// No entrance animation here: above-the-fold content should paint immediately (LCP).
export const Hero: React.FC = () => (
  <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28" aria-labelledby="hero-title">
    <div className="bg-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

    <div className="container-page relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
      <div>
        <div>
          <p className="eyebrow">Estudio de ingeniería de software · México</p>
          <h1
            id="hero-title"
            className="mt-5 text-[2.5rem] leading-[1.05] font-semibold tracking-[-0.035em] text-balance sm:text-6xl"
          >
            Software de producción, no prototipos.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            Diseñamos, construimos y operamos plataformas web, APIs e integraciones con IA para empresas cuyo
            sistema no puede fallar. Código tipado, probado, observable y tuyo desde el primer commit.
          </p>
        </div>

        <div>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className="btn-primary group">
              Agendar llamada técnica
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href="#work" className="btn-secondary">
              Ver trabajo
            </a>
          </div>
        </div>

        <div>
          <ul className="mt-12 grid gap-x-8 gap-y-3 border-t border-line pt-6 text-sm text-muted sm:grid-cols-2">
            {guarantees.map((g) => (
              <li key={g} className="flex items-start gap-2.5">
                <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[1px] bg-accent" aria-hidden="true" />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <SystemDiagram />
      </div>
    </div>
  </section>
);
