# Mike Gomez — Portfolio

A frontend-only, single-page portfolio built with React JS, Tailwind CSS 4, and Vite. No backend, API server, database, or environment variables are required.

## Local development

Requires Node.js 24 and npm.

```sh
npm install
npm run dev
```

Open http://127.0.0.1:5173. If port 5173 is occupied, stop the existing preview before starting another.

## Production preview

```sh
npm run build
npm run preview
```

Vite generates the static website in `dist`.

## Deploy to Vercel

Import your Git repository into Vercel with the project root set to this folder. The included `vercel.json` configures:

- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

Select Node.js 24 in the project's build settings. No environment variables are needed. Navigation uses section hashes such as `/#about`, so no route rewrites are required.

Reference: [Vite on Vercel](https://vercel.com/docs/frameworks/frontend/vite).

## Edit content

- `src/data/profile.json`: name, introduction, education, skills, and tools, bundled directly with React.
- `src/components/Home.jsx` and `src/components/About.jsx`: Home and About content.
- `src/App.jsx`: navigation, footer, and section composition.
- `src/components/Projects.jsx`: Appointly project details, technologies, and repository link. Its dashboard image in `public/images/projects` comes from the Appointly repository and uses demo data.
- `src/components/Certificates.jsx`: certificate cards and image links.
- `src/components/Contact.jsx`: contact section with social profile links.
- `src/data/socialLinks.js`: shared GitHub, Instagram, and LinkedIn details for the header and Contact section.
- `src/styles.css`: Tailwind utilities and custom styles.
- `public/images/mike-gomez.jpg`: profile photo.

ASP.NET and C# remain listed as Mike's personal skills; the website itself uses only the frontend stack. Google Fonts fall back to system fonts, and reduced-motion preferences disable smooth scrolling and transitions.
