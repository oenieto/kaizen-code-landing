import React from 'react';
import { Reveal } from '../components/Reveal';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-dark dark:text-white text-center">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-3xl mx-auto text-center">
              [Agrega aquí una breve introducción sobre tu empresa, su historia y propósito]
            </p>
          </Reveal>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Reveal>
              <div className="bg-bg-light dark:bg-bg-dark p-8 rounded-lg border border-accent-light dark:border-accent-dark">
                <h2 className="font-display text-3xl font-bold mb-4 text-text-dark dark:text-white">
                  Nuestra Misión
                </h2>
                <p className="text-text-dark-muted dark:text-text-muted leading-relaxed">
                  [Describe la misión de tu empresa: qué hacen, para quién lo hacen, y por qué lo hacen]
                </p>
              </div>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="bg-bg-light dark:bg-bg-dark p-8 rounded-lg border border-accent-light dark:border-accent-dark">
                <h2 className="font-display text-3xl font-bold mb-4 text-text-dark dark:text-white">
                  Nuestra Visión
                </h2>
                <p className="text-text-dark-muted dark:text-text-muted leading-relaxed">
                  [Describe la visión de tu empresa: hacia dónde se dirigen, qué impacto quieren tener]
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-12 text-text-dark dark:text-white text-center">
              Nuestros Valores
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Valor 1', desc: '[Describe este valor y por qué es importante]' },
              { title: 'Valor 2', desc: '[Describe este valor y por qué es importante]' },
              { title: 'Valor 3', desc: '[Describe este valor y por qué es importante]' },
            ].map((value, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-accent-light dark:border-accent-dark">
                  <h3 className="font-bold text-xl mb-3 text-text-dark dark:text-white">
                    {value.title}
                  </h3>
                  <p className="text-text-dark-muted dark:text-text-muted">
                    {value.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-12 text-text-dark dark:text-white text-center">
              Nuestro Equipo
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-accent-light dark:bg-accent-dark flex items-center justify-center">
                    <span className="text-text-dark-muted dark:text-text-muted text-sm">
                      [Foto del miembro {member}]
                    </span>
                  </div>
                  <h3 className="font-bold text-xl mb-1 text-text-dark dark:text-white">
                    [Nombre]
                  </h3>
                  <p className="text-primary mb-2">[Cargo]</p>
                  <p className="text-sm text-text-dark-muted dark:text-text-muted">
                    [Breve biografía o descripción]
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
