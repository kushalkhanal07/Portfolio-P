export type FeaturedLayout = 'feature' | 'split' | 'split-reverse';

export interface Project {
  /** Stable id, also used as the DOM anchor on the work page. */
  slug: string;
  title: string;
  /** Short category shown in the eyebrow and list rows. */
  category: string;
  description: string;
  /** Public asset path, e.g. "/aakashtel.png". */
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  link: string;
  /** Brand colour of the project, used for tints and glows. */
  accent: string;
  /** Verified technologies. Left empty when the stack is not documented. */
  stack: string[];
  /** Product highlights taken from the project notes. */
  highlights?: string[];
  role?: string;
  featured: boolean;
  layout?: FeaturedLayout;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}
