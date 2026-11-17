import postsData from './blog-posts.json';

/** Shape of data/blog-posts.json, written weekly by scripts/update-blog.mjs. */
export interface Post {
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

export const posts: Post[] = postsData as Post[];
