import React from 'react';
import { Reveal } from '../components/Reveal';
import { Target, Eye, Zap, Shield, TrendingUp } from 'lucide-react';

const team = [
  {
    name: 'Oscar Emiliano Nieto Guerra',
    role: 'Fundador',
    initials: 'OE',
    bio: 'Visionario detrás de Kaizen Code. Apasionado por construir productos de software que combinan diseño, rendimiento e inteligencia artificial.',
  },
  {
    name: 'Juan Antonio Sánchez Jiménez',
    role: 'Cofundador',
    initials: 'JA',
    bio: 'Arquitecto de soluciones con foco en infraestructura cloud y sistemas escalables. Cree que el código bien estructurado es la base de cualquier gran producto.',
  },
  {
    name: 'Mauricio Israel Mondragón Chávez',
    role: 'Programador',
    initials: 'MI',
    bio: 'Desarrollador full stack con ojo para el detalle y pasión por el código limpio. Su atención a la calidad garantiza que cada entrega supere las expectativas.',
  },
];

const values = [
  {
    icon: TrendingUp,
    title: 'Mejora Continua',
    desc: 'Kaizen no es solo nuestro nombre — es cómo trabajamos. Cada proyecto nos hace mejores desarrolladores y nos empuja a entregar más valor en cada iteración.',
  },
  {
    icon: Shield,
    title: 'Transparencia Radical',
    desc: 'Nuestros clientes saben exactamente en qué estamos trabajando, cuánto falta y por qué tomamos cada decisión técnica. Sin letra chica, sin sorpresas.',
  },
  {
    icon: Zap,
    title: 'Calidad sin Compromiso',
    desc: 'Entregamos rápido gracias a la IA, pero nunca sacrificamos la calidad del código. Pruebas, revisiones y buenas prácticas son innegociables en cada proyecto.',
  },
];

const Avatar: React.FC<{ initials: string }> = ({ initials }) => (
  <div className="w-24 h-24 mx-auto mb-5 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/30 flex items-center justify-center">
    <span className="font-display font-bold text-2xl text-primary">{initials}</span>
  </div>
);

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">

      {/* Hero */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-8 border border-accent-light dark:border-accent-dark rounded-full bg-surface-light/50 dark:bg-surface-dark/50">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="text-xs font-medium tracking-wide uppercase text-text-dark-muted dark:text-text-muted">
                Hecho en México
              </span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-dark dark:text-white">
              Tres apasionados del software con una misión clara.
            </h1>
            <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-2xl mx-auto leading-relaxed">
              Somos una startup mexicana que combina la filosofía Kaizen con inteligencia artificial para entregar software de clase mundial más rápido y con mayor calidad que cualquier agencia tradicional.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-y border-accent-light dark:border-accent-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Reveal>
              <div className="bg-bg-light dark:bg-bg-dark p-8 rounded-lg border border-accent-light dark:border-accent-dark h-full text-center">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Target size={22} />
                </div>
                <h2 className="font-display text-2xl font-bold text-text-dark dark:text-white mb-4">
                  Nuestra Misión
                </h2>
                <p className="text-text-dark-muted dark:text-text-muted leading-relaxed">
                  Democratizar el acceso a software de clase mundial para empresas mexicanas. Usamos inteligencia artificial y metodologías ágiles para reducir costos y tiempos de entrega sin comprometer la calidad — haciendo posible que cualquier negocio compita con las empresas más tecnológicas del mundo.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="bg-bg-light dark:bg-bg-dark p-8 rounded-lg border border-accent-light dark:border-accent-dark h-full text-center">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                  <Eye size={22} />
                </div>
                <h2 className="font-display text-2xl font-bold text-text-dark dark:text-white mb-4">
                  Nuestra Visión
                </h2>
                <p className="text-text-dark-muted dark:text-text-muted leading-relaxed">
                  Ser la startup de desarrollo de software más reconocida de México para 2028, liderando la adopción de inteligencia artificial en proyectos de software a lo largo de América Latina — y demostrando que desde México se puede construir tecnología de talla mundial.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold mb-4 text-text-dark dark:text-white">
                Nuestros Valores
              </h2>
              <p className="text-text-dark-muted dark:text-text-muted max-w-xl mx-auto">
                Los principios que guían cada decisión técnica, cada conversación con el cliente y cada línea de código que escribimos.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <Reveal key={idx} delay={idx * 0.1}>
                  <div className="bg-surface-light dark:bg-surface-dark p-7 rounded-lg border border-accent-light dark:border-accent-dark hover:border-primary/40 transition-colors duration-300 text-center h-full">
                    <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-lg mb-3 text-text-dark dark:text-white">
                      {value.title}
                    </h3>
                    <p className="text-text-dark-muted dark:text-text-muted text-sm leading-relaxed">
                      {value.desc}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl font-bold mb-4 text-text-dark dark:text-white">
                El Equipo
              </h2>
              <p className="text-text-dark-muted dark:text-text-muted max-w-xl mx-auto">
                Somos tres, empezando fuerte. Pequeños en número, grandes en criterio técnico y compromiso con cada proyecto.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="text-center bg-bg-light dark:bg-bg-dark border border-accent-light dark:border-accent-dark rounded-lg p-8 hover:border-primary/40 transition-colors duration-300">
                  <Avatar initials={member.initials} />
                  <h3 className="font-bold text-lg mb-1 text-text-dark dark:text-white">
                    {member.name}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-4">{member.role}</p>
                  <p className="text-sm text-text-dark-muted dark:text-text-muted leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="text-center text-xs text-text-dark-muted dark:text-gray-600 mt-10">
              Fotos del equipo próximamente.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark border-t border-accent-light dark:border-accent-dark">
        <div className="max-w-2xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4 text-text-dark dark:text-white">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted mb-8">
              Cuéntanos tu proyecto. Sin compromisos, solo posibilidades.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center px-8 py-4 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors"
            >
              Iniciar Conversación
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
