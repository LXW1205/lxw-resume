# lxw-resume

A personal portfolio and interactive resume, showcasing personal and academic projects through a responsive, modern web interface.

## Technologies Used

- **Next.js**: React framework for server-side rendering and static site generation.
- **Tailwind CSS**: Utility-first styling for quick and responsive UI.
- **TypeScript**: Static typing for more robust JavaScript code.
- **React Shaders**: Utilizes `@paper-design/shaders-react` for interactive visual dithering effects and backgrounds.

## Getting Started

To run the development server locally, follow these steps:

1. **Install dependencies:**
   Ensure you have `pnpm` (or `npm`) installed. Run the following in the project root:
   ```bash
   pnpm install
   ```

2. **Run the development server:**
   ```bash
   pnpm dev
   ```
   *(To test the production build, use `npm run build` followed by `npx pnpm start`)*

3. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `app/` - Next.js App Router structure containing your main pages (`/`, `/projects`, `/tech`).
- `app/projects/` - Houses the academic and personal project data and split layouts.
- `app/tech/` - Interactive tech stack page showcasing skills and tools.
- `public/` - Static assets and screenshots for the project carousel.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
