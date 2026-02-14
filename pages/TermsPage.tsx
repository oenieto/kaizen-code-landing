import React from 'react';
import { Reveal } from '../components/Reveal';

export const TermsPage: React.FC = () => {
  const sections = [
    {
      title: '1. Aceptación de los Términos',
      content: '[Describe cómo el uso del servicio constituye aceptación de los términos]',
    },
    {
      title: '2. Descripción del Servicio',
      content: '[Describe los servicios que ofreces]',
    },
    {
      title: '3. Registro y Cuenta',
      content: '[Explica los requisitos y responsabilidades del registro de cuenta]',
    },
    {
      title: '4. Uso Aceptable',
      content: '[Define qué constituye uso aceptable e inaceptable del servicio]',
    },
    {
      title: '5. Propiedad Intelectual',
      content: '[Describe los derechos de propiedad intelectual]',
    },
    {
      title: '6. Limitación de Responsabilidad',
      content: '[Explica las limitaciones de tu responsabilidad]',
    },
    {
      title: '7. Modificaciones del Servicio',
      content: '[Describe tu derecho a modificar o discontinuar el servicio]',
    },
    {
      title: '8. Terminación',
      content: '[Explica las condiciones bajo las cuales se puede terminar el servicio]',
    },
    {
      title: '9. Ley Aplicable',
      content: '[Especifica la jurisdicción y ley aplicable]',
    },
    {
      title: '10. Contacto',
      content: '[Proporciona información de contacto para preguntas legales]',
    },
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-dark dark:text-white text-center">
              Términos y Condiciones
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted text-center mb-4">
              Última actualización: [Fecha]
            </p>
            <p className="text-text-dark-muted dark:text-text-muted text-center">
              [Breve introducción sobre los términos de uso]
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
              ¿Tienes preguntas sobre nuestros términos?
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted mb-6">
              Estamos aquí para aclarar cualquier duda que tengas.
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
