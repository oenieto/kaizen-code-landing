import React, { useState } from 'react';
import { Reveal } from './Reveal';

export const Contact: React.FC = () => {
  const [email, setEmail] = useState('');
  const [service, setService] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Consulta sobre: ${service || 'Servicios de Kaizen Code'}`);
    const body = encodeURIComponent(
      `Hola,\n\nEstoy interesado en conocer más sobre ${service || 'sus servicios'}.\n\nMi correo de contacto es: ${email}\n\nQuedo atento a su respuesta.\n\nSaludos.`
    );
    
    window.location.href = `mailto:nieto_war@hotmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 relative bg-bg-light dark:bg-bg-dark">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <Reveal>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-text-dark dark:text-white">
            ¿Listo para escalar tu visión?
          </h2>
          <p className="text-xl text-text-dark-muted dark:text-text-muted mb-10">
            Hablemos sobre tu próximo proyecto. Sin compromiso técnico, solo posibilidades.
          </p>
        </Reveal>

        <Reveal delay={0.2} width="100%">
          <form className="w-full max-w-md mx-auto space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="service" className="sr-only">Servicio de interés</label>
              <select
                id="service"
                name="service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-3.5 px-4 text-text-dark dark:text-white shadow-sm ring-1 ring-inset ring-accent-light dark:ring-accent-dark focus:ring-2 focus:ring-inset focus:ring-primary bg-surface-light dark:bg-surface-dark sm:text-sm sm:leading-6 transition-all"
              >
                <option value="">Selecciona un servicio</option>
                <option value="Desarrollo Web">Desarrollo Web</option>
                <option value="Aplicaciones Móviles">Aplicaciones Móviles</option>
                <option value="Consultoría Técnica">Consultoría Técnica</option>
                <option value="Arquitectura de Software">Arquitectura de Software</option>
                <option value="Mantenimiento y Soporte">Mantenimiento y Soporte</option>
                <option value="Otro">Otro</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="block w-full rounded-md border-0 py-3.5 px-4 text-text-dark dark:text-white shadow-sm ring-1 ring-inset ring-accent-light dark:ring-accent-dark placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-primary bg-surface-light dark:bg-surface-dark sm:text-sm sm:leading-6 transition-all"
                placeholder="tu@email.com"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-3.5 py-3.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-colors duration-200"
            >
              Iniciar Conversación
            </button>
          </form>
          <p className="mt-8 text-xs text-text-dark-muted dark:text-gray-500">
            Respuesta garantizada en menos de 24 horas.
          </p>
        </Reveal>
      </div>
    </section>
  );
};