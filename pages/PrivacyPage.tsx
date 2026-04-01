import React from 'react';
import { Reveal } from '../components/Reveal';

const sections = [
  {
    id: 'responsable',
    title: '1. Responsable del Tratamiento de sus Datos Personales',
    content: `Kaizen Code (en adelante "Kaizen Code", "nosotros" o "la empresa"), con domicilio en México, es responsable del tratamiento de sus datos personales conforme a lo dispuesto en la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) y su Reglamento.

Para cualquier asunto relacionado con sus datos personales puede contactarnos en: nieto_war@hotmail.com`,
  },
  {
    id: 'datos',
    title: '2. Datos Personales que Recopilamos',
    content: `Recopilamos los siguientes datos personales cuando usted utiliza nuestro sitio web o contrata nuestros servicios:

• Datos de identificación: nombre completo, correo electrónico.
• Datos de contacto: correo electrónico, número de teléfono (cuando se proporciona voluntariamente vía WhatsApp o formulario de contacto).
• Datos de uso: páginas visitadas, tiempo de navegación, dirección IP y tipo de navegador (recopilados de forma anónima mediante cookies analíticas).
• Datos del proyecto: información que usted comparte sobre sus necesidades de software, requerimientos técnicos y objetivos del negocio.

No recopilamos datos personales sensibles (datos financieros, de salud, biométricos u otros definidos como sensibles por la LFPDPPP) a través de este sitio web.`,
  },
  {
    id: 'finalidades',
    title: '3. Finalidades del Tratamiento',
    content: `Sus datos personales serán utilizados para las siguientes finalidades primarias (necesarias para la relación contractual):

• Dar seguimiento a su solicitud de cotización o consulta de servicios de desarrollo de software.
• Enviar propuestas técnicas y comerciales.
• Formalizar y ejecutar contratos de prestación de servicios.
• Comunicarle el avance, entregables y actualizaciones de su proyecto.
• Emitir facturas y comprobantes fiscales digitales.

Finalidades secundarias (opcionales — puede negarse sin que ello afecte la prestación del servicio):

• Enviarle información sobre nuevos servicios, artículos del blog o novedades tecnológicas de Kaizen Code.`,
  },
  {
    id: 'transferencias',
    title: '4. Transferencia de Datos',
    content: `Kaizen Code no vende, arrienda ni comercializa sus datos personales a terceros. Solo podremos transferir sus datos en los siguientes casos, que no requieren su consentimiento conforme al artículo 37 de la LFPDPPP:

• A autoridades competentes cuando sea requerido por ley o mandato judicial.
• A proveedores de servicios tecnológicos que actúen como encargados del tratamiento (ej. servicios de correo electrónico, almacenamiento en la nube) bajo acuerdos de confidencialidad.

En todos los demás casos, solicitaremos su consentimiento expreso previo.`,
  },
  {
    id: 'cookies',
    title: '5. Uso de Cookies y Tecnologías de Rastreo',
    content: `Nuestro sitio web utiliza cookies propias y de terceros con las siguientes finalidades:

• Cookies esenciales: necesarias para el funcionamiento del sitio (no requieren consentimiento).
• Cookies analíticas: nos permiten medir el tráfico y la interacción con el sitio de forma anónima para mejorar la experiencia de usuario.

Puede deshabilitar las cookies modificando la configuración de su navegador. Consulte la documentación de su navegador para instrucciones específicas. La deshabilitación de cookies esenciales puede afectar el correcto funcionamiento del sitio.`,
  },
  {
    id: 'arco',
    title: '6. Derechos ARCO y Cómo Ejercerlos',
    content: `Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse (derechos ARCO) al tratamiento de sus datos personales. También tiene derecho a revocar el consentimiento que nos haya otorgado para finalidades secundarias.

Para ejercer sus derechos ARCO, envíe un correo electrónico a nieto_war@hotmail.com con el asunto "Derechos ARCO" indicando:

• Nombre completo y correo electrónico con el que se registró o contactó.
• El derecho que desea ejercer y los datos a los que refiere.
• Cualquier documento que acredite su identidad.

Le daremos respuesta en un plazo no mayor a 20 días hábiles contados a partir de la recepción de su solicitud.`,
  },
  {
    id: 'seguridad',
    title: '7. Medidas de Seguridad',
    content: `Implementamos medidas técnicas, administrativas y físicas razonables para proteger sus datos personales contra pérdida, robo, uso no autorizado, alteración o destrucción. Entre ellas:

• Transmisión de datos mediante cifrado SSL/TLS (HTTPS).
• Acceso restringido a datos personales solo al personal que los necesita para cumplir sus funciones.
• Uso de servicios de nube con certificaciones de seguridad reconocidas (AWS, Google Cloud).

A pesar de estas medidas, ningún sistema es 100% invulnerable. En caso de una vulneración de seguridad que afecte significativamente sus derechos, se lo notificaremos de conformidad con la LFPDPPP.`,
  },
  {
    id: 'cambios',
    title: '8. Cambios al Aviso de Privacidad',
    content: `Kaizen Code se reserva el derecho de modificar este Aviso de Privacidad en cualquier momento para adaptarse a cambios legislativos, jurisprudenciales o de negocio. Cualquier modificación será publicada en esta página con la fecha de actualización correspondiente.

Le recomendamos consultar periódicamente este aviso. El uso continuado de nuestros servicios después de la publicación de cambios constituye su aceptación de los mismos.`,
  },
  {
    id: 'contacto',
    title: '9. Contacto',
    content: `Si tiene preguntas, dudas o comentarios sobre este Aviso de Privacidad o sobre el tratamiento de sus datos personales, puede contactarnos en:

Kaizen Code
Correo electrónico: nieto_war@hotmail.com
México

También puede presentar una queja o denuncia ante el Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales (INAI) en www.inai.org.mx si considera que su derecho a la protección de datos personales ha sido vulnerado.`,
  },
];

export const PrivacyPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark border-b border-accent-light dark:border-accent-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-dark dark:text-white">
              Política de Privacidad
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted">
              Aviso de Privacidad conforme a la LFPDPPP · Última actualización: Marzo 2025
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tabla de contenidos */}
      <section className="py-8 bg-surface-light dark:bg-surface-dark border-b border-accent-light dark:border-accent-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Contenido</p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-1.5">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="text-sm text-text-dark-muted dark:text-text-muted hover:text-primary transition-colors scroll-smooth"
                >
                  {s.title}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 space-y-14">
          {sections.map((section, idx) => (
            <Reveal key={section.id} delay={idx * 0.03}>
              <div id={section.id} className="scroll-mt-28">
                <h2 className="font-display text-xl font-bold mb-4 text-text-dark dark:text-white border-b border-accent-light dark:border-accent-dark pb-3">
                  {section.title}
                </h2>
                <div className="text-text-dark-muted dark:text-text-muted leading-relaxed text-sm whitespace-pre-line">
                  {section.content}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h2 className="font-display text-2xl font-bold mb-3 text-text-dark dark:text-white">
              ¿Preguntas sobre tu privacidad?
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted mb-6 text-sm">
              Escríbenos directamente y te respondemos en menos de 20 días hábiles.
            </p>
            <a
              href="/#contact"
              className="inline-block px-6 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors text-sm"
            >
              Contactar
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
};
