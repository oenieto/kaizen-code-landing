import React from 'react';
import { Reveal } from '../components/Reveal';

export const CareersPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-text-dark dark:text-white text-center">
              Carreras
            </h1>
            <p className="text-xl text-text-dark-muted dark:text-text-muted max-w-3xl mx-auto text-center">
              [Mensaje inspirador sobre trabajar en tu empresa]
            </p>
          </Reveal>
        </div>
      </section>

      {/* Por qué trabajar con nosotros */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-12 text-text-dark dark:text-white text-center">
              ¿Por qué trabajar con nosotros?
            </h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Beneficio 1', desc: '[Describe este beneficio]' },
              { title: 'Beneficio 2', desc: '[Describe este beneficio]' },
              { title: 'Beneficio 3', desc: '[Describe este beneficio]' },
              { title: 'Beneficio 4', desc: '[Describe este beneficio]' },
            ].map((benefit, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-bg-light dark:bg-bg-dark p-6 rounded-lg border border-accent-light dark:border-accent-dark text-center">
                  <h3 className="font-bold text-lg mb-3 text-text-dark dark:text-white">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-text-dark-muted dark:text-text-muted">
                    {benefit.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Posiciones Abiertas */}
      <section className="py-20 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-12 text-text-dark dark:text-white text-center">
              Posiciones Abiertas
            </h2>
          </Reveal>
          
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { title: '[Nombre del puesto 1]', type: 'Full-time', location: 'Remoto' },
              { title: '[Nombre del puesto 2]', type: 'Part-time', location: 'Híbrido' },
              { title: '[Nombre del puesto 3]', type: 'Full-time', location: 'Presencial' },
            ].map((job, idx) => (
              <Reveal key={idx} delay={idx * 0.1}>
                <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-lg border border-accent-light dark:border-accent-dark hover:border-primary transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-xl mb-2 text-text-dark dark:text-white">
                        {job.title}
                      </h3>
                      <div className="flex gap-4 text-sm text-text-dark-muted dark:text-text-muted">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <button className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors">
                      Aplicar
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario de Aplicación Espontánea */}
      <section className="py-20 bg-surface-light dark:bg-surface-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <h2 className="font-display text-4xl font-bold mb-6 text-text-dark dark:text-white text-center">
              ¿No encuentras la posición ideal?
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted mb-10 text-center">
              Envíanos tu CV y te contactaremos cuando tengamos algo que se ajuste a tu perfil.
            </p>
          </Reveal>
          
          <Reveal delay={0.2}>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  className="w-full rounded-md border-0 py-3 px-4 text-text-dark dark:text-white shadow-sm ring-1 ring-inset ring-accent-light dark:ring-accent-dark placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary bg-surface-light dark:bg-surface-dark transition-all"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md border-0 py-3 px-4 text-text-dark dark:text-white shadow-sm ring-1 ring-inset ring-accent-light dark:ring-accent-dark placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary bg-surface-light dark:bg-surface-dark transition-all"
                />
              </div>
              <textarea
                rows={4}
                placeholder="Cuéntanos sobre ti y qué tipo de posición te interesa"
                className="w-full rounded-md border-0 py-3 px-4 text-text-dark dark:text-white shadow-sm ring-1 ring-inset ring-accent-light dark:ring-accent-dark placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary bg-surface-light dark:bg-surface-dark transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-primary px-4 py-3 text-center font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors"
              >
                Enviar Aplicación
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
