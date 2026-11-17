import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  useEffect(() => {
    document.title = `${title} — Kaizen Code`;
  }, [title]);

  return (
    <>
      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-page">
          <p className="eyebrow">Legal</p>
          <h1 className="mt-5 text-4xl leading-tight font-semibold tracking-[-0.03em] sm:text-5xl">{title}</h1>
          <p className="mt-4 text-muted">{subtitle}</p>
        </div>
      </header>

      <div className="border-t border-line">
        <div className="container-page grid gap-10 py-14 lg:grid-cols-[16rem_1fr] lg:gap-16 lg:py-20">
          <nav aria-label="Contenido" className="lg:sticky lg:top-24 lg:self-start">
            <p className="eyebrow">Contenido</p>
            <ol className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted transition-colors hover:text-fg">
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="max-w-2xl space-y-12">
            {sections.map((s) => (
              <section key={s.id} id={s.id} aria-labelledby={`${s.id}-h`}>
                <h2 id={`${s.id}-h`} className="text-lg font-semibold tracking-tight">
                  {s.title}
                </h2>
                <div className="mt-3 text-[15px] leading-relaxed whitespace-pre-line text-muted">{s.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>

      <section className="border-t border-line py-16">
        <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">{ctaTitle}</h2>
          <Link to="/#contact" className="btn-secondary shrink-0">
            Contactar
          </Link>
        </div>
      </section>
    </>
  );
};
