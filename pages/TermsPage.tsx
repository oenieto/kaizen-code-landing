import React from 'react';
import { Reveal } from '../components/Reveal';

const sections = [
  {
    id: 'aceptacion',
    title: '1. Aceptación de los Términos',
    content: `Al contratar los servicios de Kaizen Code, solicitar una cotización o utilizar este sitio web, usted acepta quedar vinculado por los presentes Términos y Condiciones. Si no está de acuerdo con alguna de estas condiciones, le pedimos abstenerse de utilizar nuestros servicios.

Estos términos aplican a todos los servicios de desarrollo de software, consultoría técnica, integración con inteligencia artificial, infraestructura en la nube y servicios relacionados prestados por Kaizen Code.`,
  },
  {
    id: 'servicios',
    title: '2. Descripción de los Servicios',
    content: `Kaizen Code ofrece servicios profesionales de tecnología que incluyen, sin limitarse a:

• Desarrollo de software a medida (aplicaciones web, móviles y de escritorio).
• Consultoría técnica en arquitectura de software, auditoría de código y transformación digital.
• Integración de inteligencia artificial y modelos de lenguaje (LLMs) en productos existentes.
• Diseño e implementación de infraestructura en la nube (AWS, Azure, Google Cloud).
• Soporte técnico y mantenimiento post-entrega.

El alcance específico de cada proyecto queda definido en el contrato de prestación de servicios o propuesta técnica firmada por ambas partes.`,
  },
  {
    id: 'propuesta',
    title: '3. Propuestas y Contratos',
    content: `Todo proyecto comienza con una propuesta técnica y comercial detallada que incluye alcance, entregables, tiempos estimados y costos. Esta propuesta tiene una vigencia de 15 días naturales.

La aceptación formal del proyecto (mediante firma del contrato o aprobación escrita de la propuesta) da inicio a los trabajos. Cualquier modificación al alcance original debe documentarse por escrito y puede implicar ajustes en costo y tiempo.

Kaizen Code se reserva el derecho de rechazar proyectos que estén fuera de su área de especialización o que impliquen actividades contrarias a la ley mexicana.`,
  },
  {
    id: 'pagos',
    title: '4. Condiciones de Pago',
    content: `Los términos de pago aplicables a cada proyecto se establecen en la propuesta o contrato correspondiente. Como política general:

• Se requiere un anticipo del 40–50% del valor total del proyecto para dar inicio a los trabajos.
• Los pagos intermedios se realizan conforme a los hitos de entrega pactados.
• El saldo final se liquida previo a la entrega del código fuente final y documentación.

Los pagos se realizan mediante transferencia bancaria (SPEI) o los métodos acordados en el contrato. Las facturas (CFDI) se emiten conforme a la legislación fiscal mexicana vigente.

El incumplimiento en los pagos puede dar lugar a la suspensión de los trabajos hasta que se regularice la situación, sin responsabilidad para Kaizen Code por los retrasos derivados.`,
  },
  {
    id: 'propiedad',
    title: '5. Propiedad Intelectual',
    content: `Una vez liquidado el 100% del proyecto, el cliente adquiere la titularidad del código fuente desarrollado específicamente para su proyecto, incluyendo diseños, bases de datos y documentación técnica entregada.

Kaizen Code retiene:
• Los derechos sobre herramientas, bibliotecas, componentes genéricos, frameworks propios y metodologías de desarrollo utilizadas.
• El derecho de mencionar el proyecto en su portafolio (sin revelar información confidencial) salvo acuerdo expreso en contrario.

El cliente declara tener los derechos necesarios sobre los materiales (logotipos, textos, imágenes) que entregue a Kaizen Code para la ejecución del proyecto, asumiendo plena responsabilidad por cualquier reclamación de terceros al respecto.`,
  },
  {
    id: 'confidencialidad',
    title: '6. Confidencialidad',
    content: `Ambas partes se comprometen a mantener la confidencialidad de toda la información intercambiada durante el proyecto que sea de carácter sensible, estratégico o comercial.

Kaizen Code no divulgará a terceros información sobre la naturaleza, requerimientos técnicos o estrategia comercial del proyecto del cliente, salvo autorización expresa o requerimiento legal.

Esta obligación de confidencialidad permanece vigente por un periodo de dos (2) años después de la conclusión del proyecto.`,
  },
  {
    id: 'garantias',
    title: '7. Garantías y Correcciones',
    content: `Kaizen Code garantiza que los entregables funcionarán conforme a las especificaciones acordadas en la propuesta o contrato. Ofrecemos un periodo de corrección de errores ("bugs") de 30 días naturales a partir de la entrega final, sin costo adicional, siempre que:

• Los errores sean reproducibles y correspondan al alcance original del proyecto.
• No hayan sido causados por modificaciones realizadas por el cliente o terceros después de la entrega.

Esta garantía no aplica a solicitudes de nuevas funcionalidades ni a cambios de alcance.`,
  },
  {
    id: 'responsabilidad',
    title: '8. Limitación de Responsabilidad',
    content: `En ningún caso Kaizen Code será responsable por daños indirectos, incidentales, especiales o consecuentes derivados del uso o imposibilidad de uso de los productos entregados, incluyendo pérdida de datos, pérdida de ingresos o interrupción del negocio.

La responsabilidad total acumulada de Kaizen Code frente al cliente no excederá el monto total pagado por los servicios en los doce (12) meses anteriores al evento que originó la reclamación.

El cliente es responsable de mantener copias de seguridad de su información y de implementar las medidas de seguridad adecuadas en su propio entorno.`,
  },
  {
    id: 'modificaciones',
    title: '9. Modificaciones a los Términos',
    content: `Kaizen Code se reserva el derecho de modificar estos Términos y Condiciones en cualquier momento. Los cambios serán publicados en esta página con la fecha de actualización correspondiente.

Para proyectos en curso, los términos vigentes al momento de la firma del contrato seguirán aplicando salvo acuerdo expreso de modificación.`,
  },
  {
    id: 'ley',
    title: '10. Ley Aplicable y Jurisdicción',
    content: `Los presentes Términos y Condiciones, así como cualquier contrato de prestación de servicios entre Kaizen Code y el cliente, se rigen por las leyes vigentes de los Estados Unidos Mexicanos.

Para cualquier controversia derivada de la interpretación o ejecución de estos términos, las partes acuerdan someterse a la jurisdicción de los tribunales competentes de la Ciudad de México, renunciando expresamente a cualquier otro fuero que pudiera corresponderles en razón de sus domicilios presentes o futuros.`,
  },
  {
    id: 'contacto',
    title: '11. Contacto Legal',
    content: `Para asuntos legales relacionados con estos Términos y Condiciones:

Kaizen Code
Correo electrónico: nieto_war@hotmail.com
México`,
  },
];

export const TermsPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark border-b border-accent-light dark:border-accent-dark">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <Reveal>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 text-text-dark dark:text-white">
              Términos y Condiciones
            </h1>
            <p className="text-text-dark-muted dark:text-text-muted">
              Condiciones de prestación de servicios · Última actualización: Marzo 2025
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
                  className="text-sm text-text-dark-muted dark:text-text-muted hover:text-primary transition-colors"
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
              ¿Dudas sobre nuestros términos?
            </h2>
            <p className="text-text-dark-muted dark:text-text-muted mb-6 text-sm">
              Te aclaramos cualquier punto antes de iniciar tu proyecto.
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
