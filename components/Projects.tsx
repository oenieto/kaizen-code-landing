import React from 'react';
import { caseStudy, labProjects, type Project } from '../data/site';
import { Reveal } from './Reveal';

const Caption: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mt-4">
    <h3 className="text-[15px] font-medium tracking-[0.02em] uppercase">{project.name}</h3>
    <p className="mt-1 text-[15px] leading-relaxed text-muted">{project.summary}</p>
    <p className="mt-2 text-sm text-faint">
      {project.kind} · {project.statusLabel}
    </p>
  </div>
);

/**
 * Typographic covers: a colour field per project with its name set large and one
 * detail that hints at what it does. Details are illustrative and hidden from
 * assistive tech; the caption below carries the real description.
 */
const covers: Record<string, { className: string; detail: React.ReactNode }> = {
  multicarrier: {
    className: 'bg-ink text-white',
    detail: (
      <ul className="w-full max-w-[18rem] space-y-1.5 text-[13px]" aria-hidden="true">
        {[
          ['Carrier MX-01', 'Operativo', 'bg-[#4ade80]'],
          ['Carrier MX-02', 'Operativo', 'bg-[#4ade80]'],
          ['Enlace GDL-03', 'Alerta', 'bg-accent'],
        ].map(([name, state, dot]) => (
          <li key={name} className="flex items-center justify-between border-b border-white/20 pb-1.5">
            <span>{name}</span>
            <span className="flex items-center gap-2">
              <span className={`h-2 w-2 rounded-full ${dot}`} />
              {state}
            </span>
          </li>
        ))}
      </ul>
    ),
  },
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
    className: 'bg-[#dfe3dc] text-fg',
    detail: (
      <div className="w-full max-w-[15rem] space-y-2 text-[13px]" aria-hidden="true">
        <p className="w-fit rounded-2xl rounded-bl-sm bg-white px-3 py-2">¿Tienen cita el jueves?</p>
        <p className="ml-auto w-fit rounded-2xl rounded-br-sm bg-ink px-3 py-2 text-white">Sí, 11:00 o 16:30.</p>
      </div>
    ),
  },
  'kaizen-stack': {
    className: 'bg-[#1f2c48] text-white',
    detail: (
      <p className="font-mono text-[13px]" aria-hidden="true">
        $ pnpm create kaizen-stack
      </p>
    ),
  },
};

const Cover: React.FC<{ project: Project; aspect: string }> = ({ project, aspect }) => {
  const cover = covers[project.slug];
  return (
    <div className={`flex flex-col justify-between p-6 sm:p-8 ${aspect} ${cover?.className ?? 'bg-paper text-fg'}`}>
      <p className="text-sm">{project.kind.split(' · ')[1]}</p>
      <div className="space-y-8">
        {cover?.detail}
        <p className="text-[clamp(2rem,3.4vw,3.25rem)] leading-none font-medium tracking-[-0.03em]">
          {project.name.split(' — ')[0]}
        </p>
      </div>
    </div>
  );
};

const LabItem: React.FC<{ project: Project; delay: number; tall?: boolean }> = ({ project, delay, tall }) => (
  <Reveal delay={delay}>
    <article>
      <Cover project={project} aspect={tall ? 'aspect-[4/5]' : 'aspect-square'} />
      <Caption project={project} />
    </article>
  </Reveal>
);

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
              <Cover project={caseStudy} aspect="aspect-[16/10]" />
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
