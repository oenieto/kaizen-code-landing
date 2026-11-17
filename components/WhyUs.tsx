import React from 'react';
import { Reveal } from './Reveal';

const stack = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'AWS',
  'Cloudflare',
  'Terraform',
  'Docker',
  'OpenTelemetry',
  'Claude API',
];

/** Six visible column lines behind the content (desktop only): the page's grid made explicit. */
const ColumnLines: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden="true">
    <div className="container-page grid h-full grid-cols-6">
      {Array.from({ length: 6 }, (_, i) => (
        <div key={i} className={`border-l border-line ${i === 5 ? 'border-r' : ''}`} />
      ))}
    </div>
  </div>
);

export const WhyUs: React.FC = () => (
  <section aria-labelledby="why-title" className="relative border-t border-line">
    <ColumnLines />

    <div className="container-page relative grid py-24 sm:py-32 lg:grid-cols-6">
      <Reveal className="lg:col-span-3 lg:col-start-4 lg:pl-6">
        <h2 id="why-title" className="text-[clamp(2rem,3.2vw,2.75rem)] leading-[1.1] font-semibold tracking-[-0.02em]">
          Por qué nuestros clientes trabajan con Kaizen Code
        </h2>
        <div className="mt-8 space-y-5 text-[15px] leading-[1.8] text-muted">
          <p>
            Somos un equipo pequeño y senior. Quien diseña la arquitectura de tu sistema es quien escribe el código y
            quien te explica cada decisión, sin intermediarios ni capas de gestión.
          </p>
          <p>
            Construimos con las prácticas de los equipos de ingeniería grandes — pruebas, despliegues reversibles,
            monitoreo y documentación — porque son lo que permite que un sistema siga funcionando cuando crece.
          </p>
        </div>
      </Reveal>
    </div>

    <div className="relative border-t border-line">
      <ul className="container-page grid grid-cols-3 lg:grid-cols-6" aria-label="Tecnologías con las que trabajamos">
        {stack.map((t) => (
          <li key={t} className="flex h-24 items-center justify-center px-2 text-center text-[15px] font-medium tracking-tight sm:h-28 sm:text-lg">
            {t}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
