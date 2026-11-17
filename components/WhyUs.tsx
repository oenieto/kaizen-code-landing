import React, { useState } from 'react';
import { Reveal } from './Reveal';

const rows = [
  ['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'FastAPI', 'React Native', 'GraphQL'],
  ['PostgreSQL', 'AWS', 'Cloudflare', 'Terraform', 'Docker', 'GitHub Actions', 'OpenTelemetry', 'Claude API'],
];

/**
 * Infinite marquee: the list is rendered twice and the track slides by -50%, so the
 * loop is seamless. The duplicate is hidden from assistive tech. Pauses on hover and
 * stops entirely under prefers-reduced-motion (see .marquee-track in index.css).
 */
const Marquee: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse }) => (
  <div className="marquee overflow-hidden">
    <div className={`marquee-track flex w-max ${reverse ? 'marquee-reverse' : ''}`}>
      {[0, 1].map((copy) => (
        <ul key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1 || undefined}>
          {items.map((t) => (
            <li key={t} className="flex items-center text-[clamp(1.75rem,3.6vw,3.25rem)] font-medium tracking-[-0.025em] whitespace-nowrap">
              <span className="px-6 sm:px-10">{t}</span>
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            </li>
          ))}
        </ul>
      ))}
    </div>
  </div>
);

export const WhyUs: React.FC = () => {
  const [paused, setPaused] = useState(false);
  return (
    <section aria-labelledby="why-title" className="border-t border-line">
      <div className="container-page grid gap-10 py-24 sm:py-32 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 id="why-title" className="display-2 text-balance">
            Por qué trabajar con Kaizen Code
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="space-y-5 text-[17px] leading-[1.75] text-muted lg:col-span-6 lg:col-start-7 lg:pt-3">
          <p>
            Somos un equipo pequeño y senior. Quien diseña la arquitectura de tu sistema es quien escribe el código y quien
            te explica cada decisión, sin intermediarios ni capas de gestión.
          </p>
          <p>
            Construimos con las prácticas de los equipos de ingeniería grandes — pruebas, despliegues reversibles, monitoreo
            y documentación — porque son lo que permite que un sistema siga funcionando cuando crece.
          </p>
        </Reveal>
      </div>

      <div
        className={`relative space-y-4 border-y border-line py-10 sm:space-y-6 sm:py-14 ${paused ? 'marquee-paused' : ''}`}
        aria-label="Tecnologías con las que trabajamos"
        role="region"
      >
        <Marquee items={rows[0]} />
        <Marquee items={rows[1]} reverse />
        {/* WCAG 2.2.2: moving content needs a pause control that doesn't depend on hover. */}
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          className="link absolute right-5 bottom-3 text-sm text-muted sm:right-8 lg:right-12"
        >
          {paused ? 'Reanudar' : 'Pausar'}
        </button>
      </div>
    </section>
  );
};
