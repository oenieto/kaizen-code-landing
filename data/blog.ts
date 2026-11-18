import postsData from './blog-posts.json';

/**
 * Shape of data/blog-posts.json (newest first). In `content`, blocks are separated by a
 * blank line; a block starting with "## " is a subheading and one whose lines all start
 * with "- " is a bulleted list.
 */
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
}

export const posts: Post[] = postsData as Post[];
