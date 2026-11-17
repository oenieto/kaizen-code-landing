import React from 'react';
import { caseStudy, labProjects, type Project } from '../data/site';
import { Reveal } from './Reveal';

/**
 * Typographic covers for products without screenshots yet. Each one is a plain
 * colour field with the product name set large and one detail that hints at what
 * it does — no stock imagery, no fake UI.
 */
const covers: Record<string, { className: string; detail: React.ReactNode }> = {
  folio: {
    className: 'bg-paper text-fg',
    detail: (
      <div className="w-full max-w-[14rem] space-y-1.5 text-[13px]" aria-hidden="true">
        {[
          ['CFDI emitidos', '1,284'],
          ['Conciliados', '1,279'],
          ['Pendientes', '5'],
        ].map(([k, v]) => (
          <div key={k} className="flex justify-between border-b border-fg/20 pb-1.5">
            <span>{k}</span>
            <span className="tabular-nums">{v}</span>
          </div>
        ))}
      </div>
    ),
  },
  atlas: {
    className: 'bg-accent text-black',
    detail: (
      <p className="max-w-[16rem] text-[15px] leading-snug" aria-hidden="true">
        “La política de reembolsos aplica hasta 30 días.” <span className="align-super text-[11px]">[1]</span>
      </p>
    ),
  },
  relay: {
    className: 'bg-ink text-white',
    detail: (
      <div className="w-full max-w-[15rem] space-y-2 text-[13px]" aria-hidden="true">
        <p className="w-fit rounded-2xl rounded-bl-sm bg-white/15 px-3 py-2">¿Tienen cita el jueves?</p>
        <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-white px-3 py-2 text-black">Sí, 11:00 o 16:30.</p>
      </div>
    ),
  },
  'kaizen-stack': {
    className: 'bg-[#dfe3dc] text-fg',
    detail: (
      <p className="font-mono text-[13px]" aria-hidden="true">
        $ pnpm create kaizen-stack
      </p>
    ),
  },
};

const Caption: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mt-4">
    <h3 className="text-[15px] font-medium tracking-[0.02em] uppercase">{project.name}</h3>
    <p className="mt-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
    <p className="mt-2 text-sm text-faint">
      {project.kind} · {project.statusLabel}
    </p>
  </div>
);

const LabItem: React.FC<{ project: Project; delay: number; tall?: boolean }> = ({ project, delay, tall }) => {
  const cover = covers[project.slug];
  return (
    <Reveal delay={delay}>
      <article>
        <div
          className={`flex flex-col justify-between p-6 sm:p-8 ${tall ? 'aspect-[4/5]' : 'aspect-square'} ${cover?.className ?? 'bg-paper'}`}
        >
          <p className="text-sm">{project.kind.split(' · ')[1]}</p>
          <div className="space-y-8">
            {cover?.detail}
            <p className="text-[clamp(2rem,3.4vw,3.25rem)] leading-none font-medium tracking-[-0.03em]">{project.name}</p>
          </div>
        </div>
        <Caption project={project} />
      </article>
    </Reveal>
  );
};

export const Projects: React.FC = () => {
  const [folio, ...rest] = labProjects;
  return (
    <section id="work" aria-labelledby="work-title" className="py-24 sm:py-32">
      <div className="container-page">
        <Reveal className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h2 id="work-title" className="display-2">
            Trabajo
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-muted">
            Proyectos con clientes y productos propios. Cada estado es real: si dice prototipo, es un prototipo.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          <Reveal className="md:col-span-2">
            <article>
              <div className="aspect-[16/10] overflow-hidden bg-ink">
                <img
                  src={caseStudy.image}
                  alt="Pantalla de acceso del Portal NOC de MultiCarrier"
                  width={1600}
                  height={878}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid gap-6 lg:grid-cols-2">
                <Caption project={caseStudy} />
                <ul className="space-y-2 text-[15px] leading-relaxed lg:mt-4">
                  {caseStudy.highlights.map((h) => (
                    <li key={h} className="border-t border-line pt-2">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>

          <LabItem project={folio} delay={0.05} tall />
          {rest.map((p, i) => (
            <LabItem key={p.slug} project={p} delay={i * 0.05} tall={i === 1} />
          ))}
        </div>
      </div>
    </section>
  );
};
