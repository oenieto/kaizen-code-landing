import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { PageHeader } from '../components/PageHeader';
import { posts, type Post } from '../data/blog';

const ALL = 'Todos';
const categories = [ALL, ...Array.from(new Set(posts.map((p) => p.category)))];

const Meta: React.FC<{ post: Post }> = ({ post }) => (
  <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-faint">
    <span className="text-fg">{post.category}</span>
    <span>{post.date}</span>
    <span>{post.readTime}</span>
  </p>
);

export const BlogPage: React.FC = () => {
  const [active, setActive] = useState(ALL);

  const featured = posts.find((p) => p.featured);
  const list = useMemo(
    () => posts.filter((p) => p !== featured && (active === ALL || p.category === active)),
    [active, featured],
  );

  return (
    <>
      <PageHeader
        label="Blog"
        title="Notas sobre software, infraestructura e IA."
        intro="Lo relevante en desarrollo de software, infraestructura e inteligencia artificial, explicado en español por el equipo de Kaizen Code."
      />

      {featured && (
        <section className="py-20 sm:py-28" aria-label="Artículo destacado">
          <div className="container-page">
            <Link to={`/blog/${featured.slug}`} className="group grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <p className="eyebrow">Destacado</p>
                <h2 className="display-2 mt-4 text-balance group-hover:underline group-hover:decoration-2 group-hover:underline-offset-8">
                  {featured.title}
                </h2>
              </div>
              <div className="ruled self-end lg:col-span-4 lg:col-start-9">
                <Meta post={featured} />
                <p className="mt-4 text-[15px] leading-[1.75] text-muted">{featured.excerpt}</p>
                <span className="link mt-5 inline-block">Leer artículo</span>
              </div>
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-line py-20 sm:py-28" aria-labelledby="all-posts">
        <div className="container-page">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <h2 id="all-posts" className="display-2">
              Artículos
            </h2>
            <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px]" role="group" aria-label="Filtrar por categoría">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setActive(c)}
                  aria-pressed={active === c}
                  className={`min-h-9 ${active === c ? 'underline decoration-2 underline-offset-[6px]' : 'text-muted hover:text-fg'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {list.length === 0 ? (
            <p className="mt-12 border-t border-rule py-16 text-muted">No hay artículos en esta categoría todavía.</p>
          ) : (
            <ul className="mt-12 border-b border-rule">
              {list.map((post, i) => (
                <li key={post.id} className="border-t border-rule">
                  <Reveal delay={i * 0.03}>
                    <Link to={`/blog/${post.slug}`} className="group grid gap-3 py-8 lg:grid-cols-12 lg:gap-8">
                      <div className="lg:col-span-3">
                        <Meta post={post} />
                      </div>
                      <h3 className="text-xl leading-snug font-medium tracking-[-0.01em] group-hover:underline group-hover:underline-offset-4 lg:col-span-5">
                        {post.title}
                      </h3>
                      <p className="line-clamp-3 text-[15px] leading-[1.7] text-muted lg:col-span-4">{post.excerpt}</p>
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
