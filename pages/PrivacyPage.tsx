import React from 'react';
import { Reveal } from '../components/Reveal';

export const PrivacyPage: React.FC = () => {
  const sections = [
    {
      title: '1. Información que Recopilamos',
      content: '[Describe qué tipo de información personal recopilas de los usuarios]',
    },
    {
      title: '2. Cómo Usamos tu Información',
      content: '[Explica cómo utilizas la información recopilada]',
    },
    {
      title: '3. Compartir Información',
      content: '[Describe con quién compartes la información y bajo qué circunstancias]',
    },
    {
      title: '4. Cookies y Tecnologías Similares',
      content: '[Explica el uso de cookies y otras tecnologías de seguimiento]',
    },
    {
      title: '5. Seguridad de Datos',
      content: '[Describe las medidas de seguridad que implementas]',
    },
    {
      title: '6. Tus Derechos',
      content: '[Explica los derechos del usuario respecto a sus datos personales]',
    },
    {
      title: '7. Cambios a esta Política',
      content: '[Describe cómo notificarás cambios a la política de privacidad]',
    },
    {
      title: '8. Contacto',
      content: '[Proporciona información de contacto para preguntas sobre privacidad]',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-dark dark:text-white text-center">
              Política de Privacidad
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted text-center mb-4">
              Última actualización: [Fecha]
            </p>
            <p className="text-text-dark-muted dark:text-text-muted text-center">
              [Breve introducción sobre tu compromiso con la privacidad]
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tabla de Contenidos */}
      <section className="py-8 bg-surface-light dark:bg-surface-dark border-y border-accent-light dark:border-accent-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-bold text-xl mb-4 text-text-dark dark:text-white">
              Contenido
            </h2>
            <ul className="space-y-2">
              {sections.map((section, idx) => (
                <li key={idx}>
                  <a
                    href={`#section-${idx}`}
                    className="text-primary hover:underline"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-12">
          {sections.map((section, idx) => (
            <Reveal key={idx} delay={idx * 0.05}>
              <div id={`section-${idx}`} className="scroll-mt-24">
                <h2 className="font-display text-2xl font-bold mb-4 text-text-dark dark:text-white">
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-text-dark-muted dark:text-text-muted leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA de Contacto */}
      <section className="py-16 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-3xl font-bold mb-4 text-text-dark dark:text-white">
              ¿Tienes preguntas sobre nuestra política de privacidad?
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted mb-6">
              Estamos aquí para ayudarte. Contáctanos en cualquier momento.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
            >
              Contactar
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
