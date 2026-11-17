import React from 'react';
import { process } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Process: React.FC = () => (
  <Section
    id="process"
    index="04"
    label="Proceso"
    title="Avance visible cada dos semanas."
    intro="Kaizen significa mejora continua. En la práctica: ciclos cortos, entregables concretos y decisiones tomadas con información, no con suposiciones."
  >
    <ol className="relative grid gap-px overflow-hidden rounded-xl border border-line bg-line lg:grid-cols-5">
      {process.map((step, i) => (
        <li key={step.n} className="flex flex-col bg-surface p-6">
          <Reveal delay={i * 0.05} className="flex h-full flex-col">
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-sm text-accent">{step.n}</span>
              <span className="font-mono text-[11px] text-faint">{step.duration}</span>
            </div>
            <h3 className="mt-6 text-lg font-semibold tracking-tight">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
            <div className="mt-auto pt-6">
              <p className="eyebrow">Entregable</p>
              <p className="mt-1.5 text-sm text-fg">{step.output}</p>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  </Section>
);
