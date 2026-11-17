import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { posts, type Post } from '../data/blog';

const ALL = 'Todos';
const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))];

const Meta: React.FC<{ post: Post }> = ({ post }) => (
  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] text-faint">
    <span className="uppercase tracking-[0.12em] text-accent">{post.category}</span>
    <span>{post.date}</span>
    <span>{post.readTime}</span>
  </p>
);

export const BlogPage: React.FC = () => {
  const [active, setActive] = useState(ALL);

  useEffect(() => {
    document.title = 'Blog — Kaizen Code';
  }, []);

  const featured = posts.find((p) => p.featured);
  const list = useMemo(
    () => posts.filter((p) => p !== featured && (active === ALL || p.category === active)),
    [active, featured],
  );

  return (
    <>
      <header className="pt-32 pb-12 sm:pt-40 sm:pb-16">
        <div className="container-page">
          <p className="eyebrow">Blog</p>
          <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-[-0.03em] text-balance sm:text-6xl">
            Notas sobre software, infraestructura e IA.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted">
            Una selección semanal de lo relevante en tecnología, curada y resumida en español con un pipeline automatizado
            de GitHub Actions y la API de Claude.
          </p>
        </div>
      </header>

      {featured && (
        <section className="border-t border-line py-12 sm:py-16" aria-label="Artículo destacado">
          <div className="container-page">
            <Link to={`/blog/${featured.slug}`} className="group grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
              <div>
                <p className="eyebrow">Destacado</p>
                <h2 className="mt-4 text-2xl leading-snug font-semibold tracking-tight text-balance group-hover:underline group-hover:decoration-line-strong group-hover:underline-offset-4 sm:text-3xl">
                  {featured.title}
                </h2>
              </div>
              <div>
                <Meta post={featured} />
                <p className="mt-4 leading-relaxed text-muted">{featured.excerpt}</p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                  Leer artículo
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-line py-12 sm:py-16" aria-labelledby="all-posts">
        <div className="container-page">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <h2 id="all-posts" className="text-lg font-semibold tracking-tight">
              Todos los artículos
            </h2>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoría">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`min-h-9 rounded-full border px-3.5 text-sm transition-colors ${
                    active === c ? 'border-fg bg-fg text-canvas' : 'border-line-strong text-muted hover:text-fg'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <p className="mt-10 border-t border-line py-16 text-center text-muted">
              No hay artículos en esta categoría todavía.
            </p>
          ) : (
            <ul className="mt-8 divide-y divide-line border-y border-line">
              {list.map((post, i) => (
                <li key={post.id}>
                  <Reveal delay={i * 0.03}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group grid gap-3 py-7 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-8"
                    >
                      <Meta post={post} />
                      <div>
                        <h3 className="text-lg leading-snug font-medium tracking-tight group-hover:underline group-hover:decoration-line-strong group-hover:underline-offset-4">
                          {post.title}
                        </h3>
                        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{post.excerpt}</p>
                      </div>
                      <ArrowRight
                        size={16}
                        className="hidden text-faint transition-transform group-hover:translate-x-0.5 group-hover:text-fg sm:block"
                        aria-hidden="true"
                      />
                    </Link>
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};
