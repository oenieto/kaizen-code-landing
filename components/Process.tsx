import React from 'react';
import { process } from '../data/site';
import { Section, RuledItem } from './Section';

export const Process: React.FC = () => (
  <Section
    id="process"
    title="Cómo trabajamos"
    intro="Kaizen significa mejora continua: ciclos cortos, entregables concretos y decisiones tomadas con información, no con suposiciones."
  >
    <ol className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-5">
      {process.map((step, i) => (
        <li key={step.n}>
          <RuledItem title={step.title} meta={`${step.n} — ${step.duration}`} delay={i * 0.05}>
            <p>{step.body}</p>
            <p className="mt-4 text-sm text-fg">{step.output}</p>
          </RuledItem>
        </li>
      ))}
    </ol>
  </Section>
);
