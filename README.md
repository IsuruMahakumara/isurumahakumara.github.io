# Isuru Mahakumara — Portfolio

A minimalist, modern portfolio website built with Vue 3 and Vite. Clean design focused on content and readability.

## Features

- **Minimalist Design** — Clean, content-focused UI with intentional whitespace
- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite** for fast development and optimized builds
- **Resume Page** — Dynamic resume with PDF export
- **Projects Showcase** — Markdown-based project pages
- **Responsive** — Mobile-first, works on all screen sizes

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

## Deploy

```bash
npm run build
npm run deploy
```

Deploys to GitHub Pages via `gh-pages` branch. Live at [isurumahakumara.github.io](https://isurumahakumara.github.io)

## Customization

| What | Where |
|------|-------|
| Resume content | `public/resume.html` |
| Global styles | `src/style.css` |
| Navigation links | `src/components/navigation.vue` |
| Projects | `public/projects/` |

## Tech Stack

- Vue 3
- Vite 5
- marked (Markdown parsing)
- gh-pages (deployment)

## License

MIT
