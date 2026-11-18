import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { posts } from '../data/blog';

/** One block of post content: "## " subheading, "- " list, or paragraph (see data/blog.ts). */
function renderBlock(block: string, i: number) {
  if (block.startsWith('## ')) {
    return (
      <h2 key={i} className="pt-6 text-[clamp(1.4rem,2.2vw,1.75rem)] leading-tight font-medium tracking-[-0.015em] text-fg">
        {block.slice(3)}
      </h2>
    );
  }
  const lines = block.split('\n');
  if (lines.every((l) => l.startsWith('- '))) {
    return (
      <ul key={i} className="list-disc space-y-2 pl-6 marker:text-accent">
        {lines.map((l) => (
          <li key={l}>{l.slice(2)}</li>
        ))}
      </ul>
    );
  }
  return <p key={i}>{block}</p>;
}

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const index = posts.findIndex((p) => p.slug === slug);
  const post = index >= 0 ? posts[index] : undefined;

  if (!post) {
    return (
      <section className="container-page flex min-h-[70vh] flex-col items-start justify-center pt-24">
        <p className="eyebrow">Blog</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight">Artículo no encontrado.</h1>
        <p className="mt-3 max-w-md text-muted">El artículo que buscas no existe o fue retirado.</p>
        <Link to="/blog" className="btn-primary mt-8">
          <ArrowLeft size={16} aria-hidden="true" />
          Volver al blog
        </Link>
      </section>
    );
  }

  const prev = posts[index - 1];
  const next = posts[index + 1];

  return (
    <article>
      <header className="bg-ink text-white">
        <div className="container-page max-w-4xl pt-36 pb-16 sm:pt-44 sm:pb-20">
          <Link to="/blog" className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white">
            <ArrowLeft size={14} aria-hidden="true" />
            Blog
          </Link>
          <p className="mt-10 flex flex-wrap gap-x-3 gap-y-1 text-sm text-white/60">
            <span className="text-white">{post.category}</span>
            <time>{post.date}</time>
            <span>{post.readTime} de lectura</span>
          </p>
          <h1 className="mt-4 text-[clamp(2.1rem,4.4vw,3.75rem)] leading-[1.08] font-medium tracking-[-0.025em] text-balance">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-pretty text-white/80">{post.excerpt}</p>
        </div>
      </header>

      <div>
        <div className="container-page max-w-4xl space-y-6 py-16 text-[17px] leading-[1.85] text-fg/90 sm:py-20">
          {post.content.split('\n\n').map(renderBlock)}
        </div>
      </div>

      <nav aria-label="Más artículos" className="border-t border-line">
        <div className="container-page grid max-w-4xl gap-px bg-line sm:grid-cols-2">
          {prev ? (
            <Link to={`/blog/${prev.slug}`} className="group bg-canvas py-8 sm:pr-6">
              <span className="flex items-center gap-1 text-sm text-faint">
                <ArrowLeft size={12} aria-hidden="true" /> Anterior
              </span>
              <span className="mt-2 line-clamp-2 block font-medium group-hover:underline group-hover:underline-offset-4">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div className="bg-canvas" />
          )}
          {next ? (
            <Link to={`/blog/${next.slug}`} className="group bg-canvas py-8 sm:pl-6 sm:text-right">
              <span className="flex items-center gap-1 text-sm text-faint sm:justify-end">
                Siguiente <ArrowRight size={12} aria-hidden="true" />
              </span>
              <span className="mt-2 line-clamp-2 block font-medium group-hover:underline group-hover:underline-offset-4">
                {next.title}
              </span>
            </Link>
          ) : (
            <div className="bg-canvas" />
          )}
        </div>
      </nav>
    </article>
  );
};
