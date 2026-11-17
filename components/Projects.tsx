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

/** Image with the aspect ratio reserved up front, so nothing shifts while it loads (CLS). */
const Cover: React.FC<{ project: Project; aspect: string; width: number; height: number }> = ({ project, aspect, width, height }) => (
  <div className={`${aspect} overflow-hidden bg-paper`}>
    <img
      src={project.image}
      alt={project.imageAlt}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
    />
  </div>
);

const LabItem: React.FC<{ project: Project; delay: number; tall?: boolean }> = ({ project, delay, tall }) => (
  <Reveal delay={delay}>
    <article className="group">
      <Cover project={project} aspect={tall ? 'aspect-[4/5]' : 'aspect-square'} width={1024} height={tall ? 1280 : 1024} />
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
            <article className="group">
              <Cover project={caseStudy} aspect="aspect-[16/10]" width={1536} height={1024} />
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
