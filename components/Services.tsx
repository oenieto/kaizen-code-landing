import React from 'react';
import { services } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Services: React.FC = () => (
  <Section
    id="services"
    index="01"
    label="Servicios"
    title="Lo que construimos y operamos."
    intro="Un equipo pequeño y senior que cubre el ciclo completo: producto, backend, infraestructura e IA. Sin intermediarios entre quien decide y quien programa."
  >
    <ul className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <li
          key={s.code}
          className="flex flex-col bg-surface p-6 sm:p-7"
        >
          <Reveal delay={i * 0.04} className="flex h-full flex-col">
            <span className="font-mono text-xs text-faint">/{s.code}</span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.description}</p>
            <ul className="mt-auto flex flex-wrap gap-1.5 pt-6">
              {s.deliverables.map((d) => (
                <li key={d} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
                  {d}
                </li>
              ))}
            </ul>
          </Reveal>
        </li>
      ))}
    </ul>
  </Section>
);
