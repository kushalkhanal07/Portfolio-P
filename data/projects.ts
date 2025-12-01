export interface Project {
  title: string;
  description: string;
  logo: string;
  link: string;
  slug: string;
  frontend: string[];
  payment: string[];
  backend: string[];
  stateManagement:string;
  database: string | null;
}

export const projects: Project[] = [
  {
    title: "Greensite Job Portal",
    description:
      "Green Site is the UK’s largest careers platform for the net-zero economy—helping job-seekers explore green-jobs, access training courses and find apprenticeships with major employers.",
    logo: "/greensite.png",
    link: "https://greensite.wendevs.com/",
    slug: "greensite",
    frontend: ["Next.js", "Tailwind", "Shadcn UI", "Zustand"],
    payment: [],
    stateManagement:"Zustand",
    backend: [],
    database: null,
  },
  {
    title: "Furnidecor Ecommerce platform",
    description:
      "FurniDecor is a home-furnishings and décor ecommerce site showcasing furniture and interior design items, offering a curated selection of products and styling inspiration.",
    logo: "/furnidecor.png",
    link: "https://decor.wendevs.com/",
    slug: "furnidecor",
    frontend: ["Next.js", "Tailwind", "Shadcn UI", "Zustand"],
    payment: ["Stripe", "paypal"],
    stateManagement:"Zustand",
    backend: [],
    database: null,
  },
  {
    title:
      "PMS-Project management System (similar features to slack and trello)",
    description:
      "A project management system to manage tasks within teams with collaboration.",
    logo: "/pms.png",
    link: "https://projects.wendevs.com/pms-frontend/",
    slug: "pms-project-management-system",
    frontend: ["React", "Tailwind", "Shadcn UI", "Zustand"],
    payment: [],
    stateManagement:"Zustand",
    backend: ["Node.js"],
    database: "MongoDB",
  },
  {
    title: "Kinimini Multivendor Ecommerce",
    description:
      "Multivendor Ecommerce Site with admin panels for vendors , admin.",
    logo: "/kinimini.png",
    link: "https://kinimini.com.np/",
    slug: "driwwwle",
    frontend: ["Next.js", "Tailwind", "Shadcn UI", "Zustand"],
    payment: ["Esewa", "Khalti"],
    backend: ["Node.js"],
    stateManagement:"Context API",
    database: "MongoDB",
  },
  {
    title: "Hyberlab IT Solutions Profile",
    description: "Official website of Hyberlab IT Solutions, an IT Company.",
    logo: "/hyberlab.png",
    link: "https://www.hyberlab.com/",
    slug: "vscode-portfolio",
    frontend: ["Next.js", "Tailwind", "React-query"],
    payment: [],
    backend: [],
    stateManagement:"Context API",
    database: null,
  },
  {
    title: "Siddhartha Hardwares",
    description: "A Website for electronic item seller.",
    logo: "/Siddhartha.png",
    link: "https://www.siddharthahardwares.com/",
    slug: "subtrackt",
    frontend: ["Next.js", "Tailwind"],
    payment: [],
    backend: ["Node.js"],
    stateManagement:"Context API",
    database: null,
  },
  {
    title: "SND Cares",
    description: "A basic website for local hardware shop.",
    logo: "/SND cares.png",
    link: "https://www.sndcares.com/",
    slug: "coolify-vscode-extension",
    frontend: ["Next.js", "Tailwind", "Material UI"],
    payment: [],
    backend: [],
    stateManagement:"Context API",
    database: null,
  },
];
