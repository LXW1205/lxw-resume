# lxw-resume

A personal portfolio and interactive resume, showcasing personal and academic projects through a responsive, modern web interface.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first styling for quick and responsive UI.
- **TypeScript**: Static typing for more robust JavaScript code.
- **React Shaders**: Utilizes `@paper-design/shaders-react` for interactive visual dithering effects and backgrounds.

## Getting Started

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Editing Content

All content lives in plain files — no database, no admin panel.

- **Projects** — Edit `app/projects/data/projects.ts`
- **Tech stack** — Edit `app/tech/components/TechStack.tsx` (the `SECTIONS` array)
- **Screenshots** — Drop image files into `public/screenshots/`

Commit your changes and push to deploy. Vercel/Netlify will rebuild automatically.

## Project Structure

- `app/` — Next.js App Router pages (`/`, `/projects`, `/tech`)
- `app/projects/` — Academic and personal project data and layouts
- `app/projects/data/projects.ts` — Project data (edit this to add/update projects)
- `app/tech/` — Interactive tech stack page
- `app/tech/components/TechStack.tsx` — Tech skills data and display
- `lib/` — Shared utilities (dithering config)
- `public/screenshots/` — Project carousel images

## Scripts

- `npm run dev` — Start dev server
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint
- `npm run test` — Run test suite
- `npm run test:watch` — Run tests in watch mode
