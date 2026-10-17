import type { SocialLink } from '@/types';

export const site = {
  name: 'Kushal Khanal',
  role: 'Frontend Developer',
  location: 'Kathmandu, Nepal',
  email: 'khanalkushal22@gmail.com',
  /** Set NEXT_PUBLIC_SITE_URL in production so canonical and Open Graph URLs are absolute. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://portfolio-gray-alpha-43.vercel.app',
  description:
    'Kushal Khanal is a frontend developer in Kathmandu, Nepal building scalable, data-driven web products with React, Next.js and TypeScript.',
  keywords:
    'Kushal Khanal, frontend developer, React developer, Next.js developer, TypeScript, Kathmandu, Nepal, web developer portfolio',
  availability: 'Open to new opportunities and connections',
};

export const socials: SocialLink[] = [
  {
    label: 'GitHub',
    handle: 'kushalkhanal07',
    href: 'https://github.com/kushalkhanal07',
  },
  {
    label: 'LinkedIn',
    handle: 'kushal-khanal',
    href: 'https://www.linkedin.com/in/kushal-khanal-268b792b7',
  },
  {
    label: 'Instagram',
    handle: 'kushal_khanal__',
    href: 'https://www.instagram.com/kushal_khanal__/',
  },
  {
    label: 'Facebook',
    handle: 'kushal.khanal.792',
    href: 'https://www.facebook.com/kushal.khanal.792',
  },
];

export const navLinks = [
  { label: 'Work', href: '/projects' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
