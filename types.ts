export interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  size: 'large' | 'medium' | 'small';
}

export interface Stat {
  id: number;
  value: string;
  label: string;
}
