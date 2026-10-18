import type { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'net-zero-careers',
    title: 'Net Zero Careers Job Portal',
    category: 'Careers & job portal',
    description:
      'A careers platform for the UK’s net-zero economy. Job seekers browse live job listings, search training courses and explore detailed career pathways into green industries, while employers list roles and apprenticeships.',
    image: '/netzero-careers.png',
    imageAlt:
      'Net Zero Careers homepage with the headline “Shape the future” beside photographs of solar panels and engineers.',
    imageWidth: 1919,
    imageHeight: 871,
    link: 'https://netzerocareers.co.uk/',
    accent: '#0e8c86',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Zustand'],
    highlights: ['Dynamic job listings', 'Training course search', 'Career resources'],
    role: 'Frontend development',
    featured: true,
    layout: 'split',
  },
  {
    slug: 'aakashtech',
    title: 'AakashTech',
    category: 'Business communication platform',
    description:
      'A product platform for business communication services covering SMS, WhatsApp, IVR and related channels. I work on the responsive product interfaces and integrate service data through the platform’s REST APIs.',
    image: '/aakashtel.png',
    imageAlt:
      'AakashTech sign-in screen with admin and team login tabs beside an isometric illustration of a user unlocking a dashboard.',
    imageWidth: 1911,
    imageHeight: 823,
    link: 'https://aakashtech.aakashdial.com/',
    accent: '#2f9e4f',
    stack: ['React', 'Next.js', 'TypeScript', 'REST APIs'],
    highlights: ['SMS, WhatsApp & IVR services', 'Admin and team portals'],
    role: 'Frontend development',
    featured: true,
    layout: 'split-reverse',
  },
  {
    slug: 'aakashtel-desktop',
    title: 'Aakashtel for Windows',
    category: 'Desktop app · Microsoft Store',
    description:
      'The AakashTech cloud telephony dialer packaged as a Windows desktop app for call centres and sales teams. I built it with Electron and React on the same codebase as the web product, and set up a release pipeline that builds, signs and publishes each version to the Microsoft Store so updates reach users without a manual upload.',
    image: '/aakashtel-store.png',
    imageAlt:
      'Microsoft Store listing for Aakashtel by Aakash Tech, a cloud telephony dialer for call centers and sales teams, with an Open button.',
    imageWidth: 970,
    imageHeight: 604,
    link: 'https://apps.microsoft.com/search?query=Aakashtel',
    accent: '#3aa0d9',
    stack: ['Electron', 'React', 'TypeScript', 'Microsoft Store'],
    highlights: ['Auto-dial campaigns', 'Shared codebase with the web app', 'Automated Store releases'],
    role: 'Desktop app & release pipeline',
    featured: true,
    layout: 'split',
  },
  {
    slug: 'expert-education',
    title: 'Expert Education',
    category: 'Education consultancy & events',
    description:
      'An education consultancy and events platform that connects students with study-abroad opportunities. It brings together event listings, contact management and multilingual support for an international audience.',
    image: '/expertEducation.png',
    imageAlt:
      'Expert Education events homepage with the headline “Welcome to Expert Events” beside a photo of a speaker addressing an audience.',
    imageWidth: 1893,
    imageHeight: 826,
    link: 'https://events.experteducation.com/en',
    accent: '#1ab7dc',
    stack: [],
    highlights: ['Event listings', 'Contact management', 'Multilingual support'],
    role: 'Frontend development',
    featured: true,
    layout: 'split-reverse',
  },
  {
    slug: 'hyberlab',
    title: 'Hyberlab IT Solutions',
    category: 'Company website',
    description:
      'Official website for Hyberlab IT Solutions, presenting the company’s services and consultation offering.',
    image: '/hyberlab.png',
    imageAlt: 'Hyberlab IT Solutions homepage.',
    imageWidth: 341,
    imageHeight: 173,
    link: 'https://www.hyberlab.com/',
    accent: '#6d5cff',
    stack: ['Next.js', 'Tailwind CSS', 'React Query'],
    featured: false,
  },
  {
    slug: 'siddhartha-hardwares',
    title: 'Siddhartha Hardwares',
    category: 'Retail website',
    description:
      'Website for a hardware retailer, with a product catalogue, categories and store information.',
    image: '/Siddhartha.png',
    imageAlt: 'Siddhartha Hardwares homepage.',
    imageWidth: 342,
    imageHeight: 172,
    link: 'https://www.siddharthahardwares.com/',
    accent: '#d13b2f',
    stack: ['Next.js', 'Tailwind CSS', 'Node.js'],
    featured: false,
  },
];

export const featuredProjects = projects.filter((project) => project.featured);
export const otherProjects = projects.filter((project) => !project.featured);
