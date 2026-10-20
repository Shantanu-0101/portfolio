# shantanu panchal — portfolio

Minimal personal site. Vite + React + TypeScript + Tailwind v4.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Editing

- **All page content** (about, experience, projects, links): `src/content.ts`
- **Photo / resume**: replace `public/profile.jpg` and `public/resume.pdf`
- **Blog posts**: add a markdown file to `src/content/blog/` — copy `_template.md`,
  drop the underscore. The filename becomes the URL (`my-post.md` → `/blog/my-post`).
  Files starting with `_` are ignored.

## Deploying (free)

**Vercel** → push to GitHub, import the repo at vercel.com/new. It detects Vite;
the site goes live at `<project-name>.vercel.app`. `vercel.json` handles routing for `/blog/*`.

**Netlify** → import the repo at app.netlify.com, build command `npm run build`,
publish directory `dist`. Live at `<site-name>.netlify.app`. `public/_redirects` handles routing.
