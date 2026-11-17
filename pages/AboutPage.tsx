import React from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { Section, RuledItem } from '../components/Section';

const team = [
  {
    name: 'Oscar Emiliano Nieto Guerra',
    initials: 'ON',
    role: 'Fundador',
    focus: 'Producto, arquitectura e IA aplicada',
    bio: 'Define la arquitectura y la dirección técnica de cada proyecto. Trabaja en el punto donde se cruzan diseño de producto, rendimiento e inteligencia artificial.',
  },
  {
    name: 'Juan Antonio Sánchez Jiménez',
    initials: 'JS',
    role: 'Cofundador',
    focus: 'Cloud e infraestructura',
    bio: 'Responsable de la infraestructura: entornos reproducibles, despliegues seguros y sistemas que aguantan crecimiento sin reescribirse.',
  },
  {
    name: 'Mauricio Israel Mondragón Chávez',
    initials: 'MM',
    role: 'Cofundador',
    focus: 'Full stack y calidad',
    bio: 'Desarrollador full stack con atención al detalle. Se asegura de que cada entrega esté probada, revisada y lista para que otro equipo la mantenga.',
  },
  {
    name: 'Amoxhua Ochoa Contreras',
    initials: 'AO',
    role: 'Cofundador',
    focus: 'Bases de datos y desarrollo de software',
    bio: 'Desarrollador de software a cargo de la gestión de bases de datos: modelado, rendimiento de consultas, respaldos y migraciones seguras para que los datos de cada cliente estén íntegros y disponibles.',
  },
];

const principles = [
  {
    title: 'Mejora continua',
    body: 'Kaizen significa cambio para mejor. Cada ciclo termina con una revisión de qué funcionó y qué cambiamos en el siguiente, en el código y en el proceso.',
  },
  {
    title: 'Transparencia',
    body: 'Ves el mismo tablero, el mismo repositorio y los mismos riesgos que nosotros. Si algo se retrasa, lo sabes antes de la fecha, no después.',
  },
  {
    title: 'Calidad no negociable',
    body: 'Usamos IA para avanzar más rápido, pero nada llega a producción sin revisión humana, pruebas automatizadas y el mismo pipeline de siempre.',
  },
  {
    title: 'El cliente es dueño',
    body: 'Código, infraestructura y documentación viven en tu organización. Construimos para que puedas seguir sin nosotros si así lo decides.',
  },
];

export const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader
        label="Nosotros"
        title="Un equipo pequeño que construye como uno grande."
        intro="Kaizen Code es un estudio de ingeniería de software fundado en México. Quien diseña la arquitectura de tu sistema es quien escribe el código y quien te explica cada decisión."
      />

      <section aria-labelledby="why-title" className="py-24 sm:py-32">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <h2 id="why-title" className="display-2 text-balance">
              Demasiado software se entrega como prototipo.
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-[17px] leading-[1.75] text-muted lg:col-span-6 lg:col-start-7">
            <p>
              Hemos visto proyectos que funcionan en la demo y fallan con los primeros usuarios reales: sin pruebas, sin
              monitoreo, sin documentación y con el código en una cuenta que el cliente no controla.
            </p>
            <p>
              Fundamos Kaizen Code para entregar lo contrario: sistemas diseñados para operar en producción desde el
              primer día, con prácticas que normalmente sólo tienen los equipos de ingeniería grandes.
            </p>
            <p className="text-fg">
              Somos un equipo deliberadamente pequeño. Menos capas entre tu negocio y el código, y decisiones técnicas
              tomadas por personas que conocen tu contexto.
            </p>
          </Reveal>
        </div>
      </section>

      <Section id="principles" title="Principios">
        <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <RuledItem key={p.title} title={p.title} delay={i * 0.04}>
              <p>{p.body}</p>
            </RuledItem>
          ))}
        </div>
      </Section>

      <Section id="team" title="Equipo">
        <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="flex aspect-[4/5] items-end bg-paper p-6 sm:p-8" aria-hidden="true">
                <span className="text-[clamp(4rem,7vw,6rem)] leading-none font-medium tracking-[-0.04em]">{m.initials}</span>
              </div>
              <h3 className="mt-4 text-[15px] font-medium tracking-[0.02em] uppercase">{m.name}</h3>
              <p className="mt-1 text-[15px] text-muted">
                {[m.role, m.focus].filter(Boolean).join(' · ')}
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-muted">{m.bio}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <section className="border-t border-line py-24 sm:py-32">
        <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-2 max-w-[16ch] text-balance">¿Tienes un sistema que tiene que funcionar?</h2>
          <Link to="/#contact" className="link shrink-0 text-lg">
            Escríbenos
          </Link>
        </div>
      </section>
    </>
  );
};
