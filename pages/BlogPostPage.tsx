import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import postsData from '../data/blog-posts.json';

interface Post {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  readTime: string;
  featured: boolean;
  source?: string;
}

const posts: Post[] = postsData as Post[];

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-24 min-h-screen flex items-center justify-center bg-bg-light dark:bg-bg-dark">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold text-text-dark dark:text-white mb-4">
            Artículo no encontrado
          </h1>
          <p className="text-text-dark-muted dark:text-text-muted mb-8">
            El artículo que buscas no existe o fue removido.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded font-medium hover:bg-primary-dark transition-colors"
          >
            <ArrowLeft size={16} /> Volver al Blog
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = posts.findIndex(p => p.slug === slug);
  const nextPost = posts[currentIndex + 1] || null;
  const prevPost = posts[currentIndex - 1] || null;

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark border-b border-accent-light dark:border-accent-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-text-dark-muted dark:text-text-muted hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Volver al Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                {post.category}
              </span>
              <span className="flex items-center gap-1 text-xs text-text-dark-muted dark:text-text-muted">
                <Clock size={12} /> {post.readTime}
              </span>
              <span className="text-xs text-text-dark-muted dark:text-text-muted">
                {post.date}
              </span>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-text-dark dark:text-white leading-tight mb-6">
              {post.title}
            </h1>

            <p className="text-lg text-text-dark-muted dark:text-text-muted leading-relaxed">
              {post.excerpt}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Article body */}
      <section className="py-16 bg-bg-light dark:bg-bg-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Reveal>
            <article className="space-y-6">
              {post.content.split('\n\n').map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-text-dark dark:text-text-light/90 leading-[1.85] text-base"
                >
                  {paragraph}
                </p>
              ))}
            </article>
          </Reveal>

          {/* Author */}
          <Reveal delay={0.1}>
            <div className="mt-14 pt-8 border-t border-accent-light dark:border-accent-dark flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 flex items-center justify-center flex-shrink-0">
                <span className="font-display font-bold text-sm text-primary">KC</span>
              </div>
              <div>
                <p className="text-sm font-bold text-text-dark dark:text-white">Kaizen Code</p>
                <p className="text-xs text-text-dark-muted dark:text-text-muted">
                  Software impulsado por IA · Hecho en México
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-10 bg-surface-light dark:bg-surface-dark border-t border-accent-light dark:border-accent-dark">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-start gap-8">
            {prevPost ? (
              <Link
                to={`/blog/${prevPost.slug}`}
                className="group flex-1 text-left"
              >
                <span className="text-xs text-text-dark-muted dark:text-text-muted flex items-center gap-1 mb-2">
                  <ArrowLeft size={12} /> Anterior
                </span>
                <span className="text-sm font-medium text-text-dark dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                  {prevPost.title}
                </span>
              </Link>
            ) : <div className="flex-1" />}

            {nextPost ? (
              <Link
                to={`/blog/${nextPost.slug}`}
                className="group flex-1 text-right"
              >
                <span className="text-xs text-text-dark-muted dark:text-text-muted flex items-center justify-end gap-1 mb-2">
                  Siguiente <ArrowRight size={12} />
                </span>
                <span className="text-sm font-medium text-text-dark dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                  {nextPost.title}
                </span>
              </Link>
            ) : <div className="flex-1" />}
          </div>
        </div>
      </section>
    </div>
  );
};
