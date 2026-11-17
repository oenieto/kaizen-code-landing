import React from 'react';
import { caseStudy, labProjects, type Project, type ProjectStatus } from '../data/site';
import { Section } from './Section';
import { Reveal } from './Reveal';

const statusStyle: Record<ProjectStatus, string> = {
  production: 'text-accent border-accent/40',
  building: 'text-accent border-accent/40',
  prototype: 'text-warn border-warn/40',
  planned: 'text-muted border-line-strong',
};

const StatusBadge: React.FC<{ project: Project }> = ({ project }) => (
  <span
    className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[11px] ${statusStyle[project.status]}`}
  >
    <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
    {project.statusLabel}
  </span>
);

const Stack: React.FC<{ items: string[] }> = ({ items }) => (
  <ul className="flex flex-wrap gap-1.5" aria-label="Tecnologías">
    {items.map((t) => (
      <li key={t} className="rounded border border-line px-2 py-0.5 font-mono text-[11px] text-muted">
        {t}
      </li>
    ))}
  </ul>
);

const CaseStudy: React.FC<{ project: Project }> = ({ project }) => (
  <Reveal>
    <article className="overflow-hidden rounded-xl border border-line bg-surface lg:grid lg:grid-cols-[1.15fr_1fr]">
      <div className="relative border-b border-line bg-subtle lg:border-r lg:border-b-0">
        <img
          src={project.image}
          alt="Pantalla de acceso del Portal NOC de MultiCarrier"
          width={1600}
          height={878}
          loading="lazy"
          decoding="async"
          className="aspect-[16/10] h-full w-full object-cover object-center"
        />
      </div>

      <div className="flex flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-faint">{project.kind}</span>
          <StatusBadge project={project} />
        </div>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

        <dl className="mt-6 space-y-5 text-sm">
          <div>
            <dt className="eyebrow">Problema</dt>
            <dd className="mt-1.5 leading-relaxed text-muted">{project.problem}</dd>
          </div>
          <div>
            <dt className="eyebrow">Qué construimos</dt>
            <dd className="mt-2">
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 leading-relaxed text-fg">
                    <span className="mt-[9px] h-px w-3 shrink-0 bg-accent" aria-hidden="true" />
                    {h}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className="mt-auto pt-7">
          <Stack items={project.stack} />
        </div>
      </div>
    </article>
  </Reveal>
);

const LabCard: React.FC<{ project: Project; delay: number }> = ({ project, delay }) => (
  <Reveal delay={delay} className="h-full">
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors hover:border-line-strong">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="font-mono text-base font-medium">{project.name}</h3>
          <p className="mt-1 text-xs text-faint">{project.kind}</p>
        </div>
        <StatusBadge project={project} />
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-fg">{project.summary}</p>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.problem}</p>
      <ul className="mt-5 space-y-2 border-t border-line pt-5 text-sm">
        {project.highlights.map((h) => (
          <li key={h} className="flex gap-2.5 leading-relaxed text-muted">
            <span className="mt-[9px] h-px w-3 shrink-0 bg-line-strong" aria-hidden="true" />
            {h}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Stack items={project.stack} />
      </div>
    </article>
  </Reveal>
);

export const Projects: React.FC = () => (
  <Section
    id="work"
    index="02"
    label="Trabajo"
    title="Proyectos con clientes y productos propios."
    intro="Construimos para clientes y también para nosotros. Los productos propios son donde probamos arquitectura, herramientas e IA antes de recomendarlas."
  >
    <CaseStudy project={caseStudy} />

    <div className="mt-20 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="eyebrow">Laboratorio</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight">Lo que estamos construyendo.</h3>
      </div>
      <p className="max-w-md text-sm text-muted">
        Cada estado es real: si dice prototipo, es un prototipo. Escríbenos si alguno resuelve un problema que tienes hoy.
      </p>
    </div>

    <div className="mt-8 grid gap-4 md:grid-cols-2">
      {labProjects.map((p, i) => (
        <LabCard key={p.slug} project={p} delay={i * 0.05} />
      ))}
    </div>
  </Section>
);
