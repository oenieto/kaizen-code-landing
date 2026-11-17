import React from 'react';
import { Check } from 'lucide-react';
import { engagements } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Engagements: React.FC = () => (
  <Section
    id="engagement"
    index="05"
    label="Modelos de trabajo"
    title="Elige cómo trabajamos juntos."
    intro="Cotizamos después de una llamada técnica de 30 minutos. Sin formularios eternos ni propuestas genéricas."
  >
    <div className="grid gap-4 lg:grid-cols-3">
      {engagements.map((e, i) => (
        <Reveal key={e.name} delay={i * 0.05} className="h-full">
          <article
            className={`flex h-full flex-col rounded-xl border p-6 sm:p-7 ${
              e.featured ? 'border-fg/80 bg-surface' : 'border-line bg-surface'
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold tracking-tight">{e.name}</h3>
              {e.featured && <span className="font-mono text-[11px] text-accent">más solicitado</span>}
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{e.fit}</p>
            <ul className="mt-6 space-y-2.5 border-t border-line pt-6 text-sm">
              {e.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Check size={15} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {p}
                </li>
              ))}
            </ul>
            <a href="#contact" className={`${e.featured ? 'btn-primary' : 'btn-secondary'} mt-8`}>
              Hablar de este modelo
            </a>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
