import React from 'react';
import { ArrowRight } from 'lucide-react';

const outcomes = [
  { verb: 'Vende', what: 'CRM y recorridos 3D que convierten prospectos en clientes.' },
  { verb: 'Atiende', what: 'Agentes de WhatsApp y voz que responden 24/7.' },
  { verb: 'Trabaja', what: 'Automatizaciones que eliminan el trabajo repetitivo.' },
];

/**
 * Ink block with an outcome-led headline. No entrance animation so above-the-fold
 * content paints immediately (LCP).
 */
export const Hero: React.FC = () => (
  <section className="bg-ink text-white" aria-labelledby="hero-title">
    <div className="container-page flex min-h-[92svh] flex-col justify-between pt-36 pb-14 sm:pt-44 lg:pb-16">
      <div>
        {/* Brand + primary keyword, visible and above the H1, for search and context. */}
        <p className="mb-6 text-[15px] text-white/60">Kaizen Code · Desarrollo de software a la medida en México</p>
        <h1
          id="hero-title"
          className="max-w-[14ch] text-[clamp(2.9rem,7.4vw,8.75rem)] leading-[0.98] font-medium tracking-[-0.035em] text-balance"
        >
          Software que vende, atiende y <span className="text-accent">trabaja por ti.</span>
        </h1>

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
          <p className="max-w-xl text-lg leading-[1.6] text-white/80 lg:col-span-6">
            Creamos CRMs, agentes de WhatsApp con IA, automatizaciones y plataformas a la medida para negocios en México.
            Tú te enfocas en crecer; el sistema hace el resto.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-6 lg:justify-end">
            <a href="#contact" className="btn group bg-white text-black hover:bg-accent">
              Cotiza tu proyecto
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </a>
            <a href="#solutions" className="btn border border-white/40 text-white hover:bg-white hover:text-black">
              Ver soluciones
            </a>
          </div>
        </div>
      </div>

      <ul className="mt-20 grid gap-6 sm:grid-cols-3" aria-label="Qué hace tu software">
        {outcomes.map((o) => (
          <li key={o.verb} className="border-t border-white/30 pt-4">
            <p className="text-[15px] font-medium">{o.verb}</p>
            <p className="mt-1 text-[15px] leading-snug text-white/70">{o.what}</p>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
