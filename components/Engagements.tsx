import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { engagements } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Engagements: React.FC = () => (
  <Section
    id="engagement"
    title="Modelos de trabajo"
    intro="Elige cómo quieres trabajar con nosotros. Cotizamos después de una llamada técnica de 30 minutos, sin compromiso."
  >
    <div className="grid gap-5 lg:grid-cols-3">
      {engagements.map((e, i) => (
        <Reveal key={e.name} delay={i * 0.05} className="h-full">
          <article
            className={`flex h-full flex-col border p-7 sm:p-9 ${
              e.featured ? 'border-ink bg-ink text-white' : 'border-rule bg-canvas'
            }`}
          >
            <div className="flex min-h-7 items-start justify-between gap-4">
              <h3 className="text-2xl font-medium tracking-[-0.02em]">{e.name}</h3>
              {e.featured && (
                <span className="shrink-0 rounded-full bg-accent px-3 py-1 text-xs font-medium text-black">
                  Recomendado
                </span>
              )}
            </div>
            <p className={`mt-4 text-[15px] leading-[1.7] ${e.featured ? 'text-white/75' : 'text-muted'}`}>{e.fit}</p>

            <ul className={`mt-8 space-y-3 border-t pt-6 text-[15px] ${e.featured ? 'border-white/25' : 'border-line'}`}>
              {e.points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>

            <div className="mt-auto pt-10">
              <Link
                to="/#contact"
                className={`btn w-full ${
                  e.featured ? 'bg-white text-black hover:bg-accent' : 'bg-fg text-white hover:bg-accent hover:text-black'
                }`}
              >
                Cotizar {e.name.toLowerCase()}
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
