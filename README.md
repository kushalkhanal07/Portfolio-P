# Kushal Khanal — Portfolio

Personal portfolio of Kushal Khanal, frontend developer in Kathmandu, Nepal. Built with Next.js (Pages Router), React and CSS Modules, and deployed on Vercel.

## Structure

- `pages/` — `index` (home), `projects`, `about`, `contact`. Routes from the previous layout (`/articles`, `/settings`, `/github`) redirect; see `next.config.ts`.
- `components/` — layout chrome (`Nav`, `Footer`, `ThemeToggle`), reusable blocks (`ProjectFeature`, `ProjectRow`, `SectionHeading`, `PageIntro`, `Reveal`) and page sections under `components/sections/`.
- `data/` — all content: `projects.ts` (project entries), `profile.ts` (bio, experience, education, skills) and `site.ts` (name, contact details, social links, navigation).
- `styles/` — `globals.css` holds the design tokens (light and dark themes), base styles and shared primitives; everything else is a CSS Module.
- `public/` — project screenshots and the portrait.

## Editing content

Add or change a project in `data/projects.ts`. Featured projects (`featured: true`) get a case-study layout (`feature`, `split` or `split-reverse`); the rest appear in the compact list on the work page. Place the screenshot in `public/` and record its pixel width and height so images render without layout shift.

## Environment variables

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the deployed URL. It is used for canonical and Open Graph tags.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

Fonts are loaded through `next/font/google` (Manrope, Instrument Serif, JetBrains Mono), so the build needs network access to download them.
