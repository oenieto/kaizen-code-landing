import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';
import { solutions, SELECT_PROJECT_TYPE } from '../data/site';
import { solutionPath } from '../data/seo';
import { Section } from './Section';
import { Reveal } from './Reveal';

export const Solutions: React.FC = () => (
  <Section
    id="solutions"
    title="Soluciones para tu negocio"
    intro="Elige lo que tu negocio necesita. Lo adaptamos a tu forma de trabajar y lo tienes funcionando en semanas, no en meses."
  >
    <div className="grid gap-x-10 gap-y-16 lg:grid-cols-2">
      {solutions.map((s, i) => (
        <Reveal key={s.slug} delay={(i % 2) * 0.05}>
          <article id={`solucion-${s.slug}`} className="flex h-full flex-col border-t border-rule pt-6">
            <p className="flex gap-4 text-sm text-muted">
              <span className="text-fg">{String(i + 1).padStart(2, '0')}</span>
              {s.audience}
            </p>
            <h3 className="mt-6 text-[clamp(1.75rem,2.6vw,2.4rem)] leading-[1.1] font-medium tracking-[-0.02em]">{s.name}</h3>
            <p className="mt-4 max-w-xl text-[16px] leading-[1.75] text-muted">{s.pitch}</p>
            <ul className="mt-6 space-y-2.5 text-[15px]">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-auto flex flex-wrap items-center gap-x-6 gap-y-4 pt-8">
              <a
                href="#contact"
                onClick={() => window.dispatchEvent(new CustomEvent(SELECT_PROJECT_TYPE, { detail: s.name }))}
                className="btn-secondary shrink-0"
              >
                Quiero esta solución
              </a>
              <Link to={solutionPath(s.path)} className="link text-[15px]">
                Ver cómo funciona<span className="sr-only">: {s.name}</span>
              </Link>
            </div>
          </article>
        </Reveal>
      ))}
    </div>
  </Section>
);
