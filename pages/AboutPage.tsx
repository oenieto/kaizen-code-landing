import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const team = [
  {
    name: 'Oscar Emiliano Nieto Guerra',
    initials: 'ON',
    role: 'Fundador',
    focus: 'Producto · Arquitectura · IA aplicada',
    bio: 'Define la arquitectura y la dirección técnica de cada proyecto. Trabaja en el punto donde se cruzan diseño de producto, rendimiento e inteligencia artificial.',
  },
  {
    name: 'Juan Antonio Sánchez Jiménez',
    initials: 'JS',
    role: 'Cofundador',
    focus: 'Cloud · Infraestructura · Escalabilidad',
    bio: 'Responsable de la infraestructura: entornos reproducibles, despliegues seguros y sistemas que aguantan crecimiento sin reescribirse.',
  },
  {
    name: 'Mauricio Israel Mondragón Chávez',
    initials: 'MM',
    role: 'Ingeniero de software',
    focus: 'Full stack · Calidad · Pruebas',
    bio: 'Desarrollador full stack con atención al detalle. Se asegura de que cada entrega esté probada, revisada y lista para que otro equipo la mantenga.',
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
  useEffect(() => {
    document.title = 'Nosotros — Kaizen Code';
  }, []);

  return (
    <>
      <section className="pt-32 pb-16 sm:pt-40 sm:pb-24" aria-labelledby="about-title">
        <div className="container-page">
          <p className="eyebrow">Nosotros</p>
          <h1
            id="about-title"
            className="mt-6 max-w-5xl text-[clamp(2.5rem,6.5vw,5.75rem)] leading-[0.98] font-semibold tracking-[-0.04em] text-balance"
          >
            Un equipo pequeño que construye como uno grande.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-xl">
            Kaizen Code es un estudio de ingeniería de software fundado en México. Quien diseña la arquitectura de tu
            sistema es quien escribe el código y quien te explica cada decisión.
          </p>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28" aria-labelledby="why-title">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">
              <span className="text-accent">01</span> / Por qué existimos
            </p>
            <h2 id="why-title" className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
              Demasiado software se entrega como prototipo.
            </h2>
          </Reveal>
          <Reveal delay={0.05} className="space-y-5 text-[17px] leading-relaxed text-muted">
            <p>
              Hemos visto proyectos que funcionan en la demo y fallan con los primeros usuarios reales: sin pruebas, sin
              monitoreo, sin documentación y con el código en una cuenta que el cliente no controla.
            </p>
            <p>
              Fundamos Kaizen Code para entregar lo contrario: sistemas diseñados para operar en producción desde el
              primer día, con prácticas que normalmente sólo tienen los equipos de ingeniería grandes.
            </p>
            <p className="text-fg">
              Somos un equipo deliberadamente pequeño. Eso significa menos capas entre tu negocio y el código, y
              decisiones técnicas tomadas por personas que conocen tu contexto.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28" aria-labelledby="principles-title">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">
              <span className="text-accent">02</span> / Principios
            </p>
            <h2 id="principles-title" className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.025em] sm:text-4xl">
              Cómo tomamos decisiones.
            </h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:mt-16 sm:grid-cols-2">
            {principles.map((p, i) => (
              <li key={p.title} className="bg-surface p-6 sm:p-8">
                <Reveal delay={i * 0.04}>
                  <span className="font-mono text-xs text-faint">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-3 text-lg font-semibold tracking-tight">{p.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-28" aria-labelledby="team-title">
        <div className="container-page">
          <Reveal>
            <p className="eyebrow">
              <span className="text-accent">03</span> / Equipo
            </p>
            <h2 id="team-title" className="mt-4 text-3xl leading-tight font-semibold tracking-[-0.025em] sm:text-4xl">
              Las personas detrás de cada commit.
            </h2>
          </Reveal>

          <ul className="mt-12 divide-y divide-line border-y border-line sm:mt-16">
            {team.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={i * 0.04} className="grid gap-4 py-8 sm:grid-cols-[auto_1fr] sm:gap-8 lg:grid-cols-[auto_1fr_1.3fr]">
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full border border-line-strong font-mono text-sm text-fg"
                    aria-hidden="true"
                  >
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{m.name}</h3>
                    <p className="mt-1 text-sm text-muted">{m.role}</p>
                    <p className="mt-3 font-mono text-[11px] text-faint">{m.focus}</p>
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted sm:col-start-2 lg:col-start-auto">{m.bio}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-line py-20 sm:py-24">
        <div className="container-page flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-xl text-3xl leading-tight font-semibold tracking-[-0.025em] text-balance sm:text-4xl">
            ¿Tienes un sistema que tiene que funcionar?
          </h2>
          <Link to="/#contact" className="btn-primary group shrink-0">
            Hablemos
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
};
