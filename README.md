# Isuru Mahakumara — Portfolio

A minimalist, modern portfolio website built with Vue 3 and Vite. Clean design focused on content and readability.

## Features

- **Minimalist Design** — Clean, content-focused UI with intentional whitespace
- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite 6** for lightning-fast development and optimized builds
- **Vue Router 4** — Client-side routing with history mode
- **Resume Page** — Dynamic resume with PDF export via pdfmake
- **Projects Showcase** — Markdown-based project pages with metadata
- **Responsive** — Mobile-first, works on all screen sizes
- **SEO Ready** — Head management with @unhead/vue

## Prerequisites

- Node.js v18+
- npm or yarn

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Open `http://localhost:5173`

## Build

```bash
# Production build
npm run build

# Preview build locally
npm run preview
```

Output goes to `dist/`

## Project Structure

```
├── index.html                 # Entry point
├── vite.config.js             # Vite configuration
├── package.json
├── public/
│   ├── index.html             # Fallback for SPA routing
│   ├── resume.html            # Resume content
│   └── projects/
│       ├── projects.json      # Project metadata
│       └── projects-markdown/ # Project details (Markdown)
├── src/
│   ├── App.vue                # Root component
│   ├── main.js                # App entry
│   ├── router.js              # Route definitions
│   ├── style.css              # Global styles
│   ├── components/
│   │   ├── navigation.vue     # Nav bar
│   │   └── footer.vue         # Footer
│   └── views/
│       ├── home.vue           # Landing page
│       ├── about.vue          # About page
│       ├── resume.vue         # Resume with PDF download
│       ├── projects.vue       # Projects listing
│       ├── project-detail.vue # Individual project view
│       ├── experience.vue     # Work experience
│       ├── contact.vue        # Contact page
│       └── not-found.vue      # 404 page
└── locales/
    └── en.json                # i18n strings
```

## Deployment (GitHub Pages)

### GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: "npm"

      - run: npm ci
      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

Then in repo Settings → Pages, set source to `gh-pages` branch.

### Manual Deploy

```bash
npm run build
cd dist
git init
git add -A
git commit -m "deploy"
git push -f git@github.com:IsuruMahakumara/isurumahakumara.github.io.git main:gh-pages
```

## Customization

| What | Where |
|------|-------|
| Resume content | `public/resume.html` |
| Global styles | `src/style.css` |
| Navigation links | `src/components/navigation.vue` |
| Projects | `public/projects/` |

## Tech Stack

- Vue 3.5
- Vite 6
- Vue Router 4
- pdfmake (PDF generation)
- marked (Markdown parsing)
- @unhead/vue (SEO)

## License

MIT
