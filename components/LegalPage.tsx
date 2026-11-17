import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from './PageHeader';

export interface LegalSection {
  id: string;
  title: string;
  content: string;
}

interface Props {
  title: string;
  subtitle: string;
  sections: LegalSection[];
  ctaTitle: string;
}

/** Shared layout for legal documents: sticky table of contents + readable column. */
export const LegalPage: React.FC<Props> = ({ title, subtitle, sections, ctaTitle }) => {
  return (
    <>
      <PageHeader label="Legal" title={title} intro={subtitle} />

      <div>
        <div className="container-page grid gap-12 py-20 lg:grid-cols-12 lg:gap-8 lg:py-28">
          <nav aria-label="Contenido" className="ruled lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
            <p className="eyebrow">Contenido</p>
            <ol className="mt-4 space-y-2 text-[15px]">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted transition-colors hover:text-fg">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-2xl space-y-14 lg:col-span-7 lg:col-start-6">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`} className="ruled">
                <h2 id={`${s.id}-h`} className="text-[17px] font-semibold tracking-[-0.01em]">
                  {s.title}
                </h2>
                <div className="mt-4 text-[15px] leading-[1.8] whitespace-pre-line text-muted">{s.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <section className="border-t border-line py-20">
        <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="display-2 max-w-[16ch]">{ctaTitle}</h2>
          <Link to="/#contact" className="link shrink-0 text-lg">
            Escríbenos
          </Link>
        </div>
      </section>
    </>
  );
};
