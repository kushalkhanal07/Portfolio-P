import type { ExperienceEntry, SkillGroup } from '@/types';

export const intro = {
  lead:
    'I’m Kushal Khanal, a frontend developer with 2+ years of hands-on experience shipping responsive, data-driven web applications in React, Next.js and TypeScript. I currently work at E-Signature Pvt. Ltd. on business communication products.',
};

export const bio = [
  'I’m a frontend developer from Kathmandu, Nepal. I primarily work with JavaScript and TypeScript, React, Next.js and the Node.js ecosystem, with practical experience integrating REST APIs, real-time services and third-party platforms.',
  'My focus is the frontend: application architecture, state management and clean, maintainable interfaces. I also build with Node.js, Express and MongoDB when a project needs its backend, and I care about the details that make a product feel finished.',
];

export const facts = [
  { label: 'Currently', value: 'Frontend Developer, E-Signature Pvt. Ltd.' },
  { label: 'Based in', value: 'Kathmandu, Nepal' },
  { label: 'Focus', value: 'React · Next.js · TypeScript' },
  { label: 'Education', value: 'BCA, New Summit College' },
];

export const experience: ExperienceEntry[] = [
  {
    company: 'E-Signature Pvt. Ltd.',
    role: 'Frontend Developer',
    start: 'Jan 2026',
    end: 'Present',
    summary:
      'Frontend development for product-based communication platforms, including AakashTech.',
    bullets: [
      'Build responsive, data-driven interfaces with React, Next.js and TypeScript.',
      'Integrate backend REST APIs and third-party services for SMS, WhatsApp and IVR products.',
      'Packaged the Aakashtel dialer as an Electron desktop app and automated its Microsoft Store releases.',
      'Collaborate with the team to deliver features, troubleshoot issues and improve existing functionality.',
    ],
  },
  {
    company: 'Web Experts',
    role: 'Frontend Web Developer',
    start: 'Aug 2025',
    end: 'Dec 2025',
    summary: 'Scalable state management and API-driven features for client web applications.',
    bullets: [
      'Implemented state-management solutions with Redux Toolkit and the React Context API.',
      'Integrated REST APIs and third-party backend services into dynamic, data-driven features.',
      'Developed reusable frontend components for responsive web applications.',
    ],
  },
  {
    company: 'Hyberlab',
    role: 'Frontend Web Developer',
    start: 'Mar 2024',
    end: 'Jul 2025',
    summary: 'Client-facing web solutions and the launch of a SaaS product website.',
    bullets: [
      'Contributed to building and launching a SaaS product website.',
      'Implemented dynamic routing and component-driven interfaces to improve usability and maintainability.',
      'Spent three months on backend work with Node.js, Express and MongoDB.',
    ],
  },
];

export const education = {
  degree: 'Bachelor of Computer Application (BCA)',
  school: 'New Summit College',
  place: 'Shanti Nagar, Kathmandu',
  start: 'Mar 2021',
  end: 'Jun 2026',
};

export const skills: SkillGroup[] = [
  { label: 'Languages', items: ['JavaScript (ES6+)', 'TypeScript', 'Node.js'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Electron', 'React Flow', 'Socket.io'] },
  {
    label: 'State & data',
    items: ['Redux Toolkit', 'React Context API', 'Zustand', 'React Query'],
  },
  { label: 'UI & styling', items: ['Tailwind CSS', 'shadcn/ui', 'Material UI'] },
  {
    label: 'Backend & APIs',
    items: ['Express.js', 'NestJS', 'REST APIs', 'Zod validation', 'Payment integration'],
  },
  { label: 'Database', items: ['MongoDB', 'Mongoose ODM', 'PostgreSQL'] },
  {
    label: 'Cloud & tooling',
    items: ['AWS EC2', 'AWS S3', 'Git', 'GitHub', 'GitLab', 'Postman'],
  },
  { label: 'Deployment', items: ['Vercel', 'Netlify', 'Render', 'AWS EC2'] },
];
