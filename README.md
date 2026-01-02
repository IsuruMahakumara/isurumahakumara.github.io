# ModelForge - AI/ML Engineer Portfolio

A modern, futuristic portfolio website built with Vue 3 and Vite, featuring a resume page with PDF download functionality.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## Installation

```bash
# Install dependencies
npm install
```

## Development

```bash
# Start development server with hot-reload
npm run dev
```

The app will be available at `http://localhost:5173`

## Build for Production

```bash
# Build for production
npm run build

# Preview production build locally
npm run preview
```

The production-ready files will be generated in the `dist/` folder.

## GitHub Pages Deployment

### Option 1: Manual Deployment

1. **Update `vite.config.js`** with the correct base path for your GitHub repo:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',  // Replace with your GitHub repo name
     // ...
   })
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   ```bash
   # Navigate to dist folder
   cd dist
   
   # Initialize git and push to gh-pages branch
   git init
   git add -A
   git commit -m 'deploy'
   
   # Push to gh-pages branch (replace with your repo URL)
   git push -f git@github.com:your-username/your-repo-name.git main:gh-pages
   ```

4. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Set Source to `gh-pages` branch
   - Save

### Option 2: Automated Deployment Script

Create a `deploy.sh` file in the project root:

```bash
#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
```

Make it executable and run:
```bash
chmod +x deploy.sh
./deploy.sh
```

### Option 3: GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

After pushing this workflow:
1. Go to Settings → Pages
2. Set Source to `gh-pages` branch
3. Your site will auto-deploy on every push to `main`

## Project Structure

```
├── index.html              # Main HTML entry point (Vite)
├── vite.config.js          # Vite configuration
├── public/
│   └── resume.html         # Resume content (loaded dynamically)
├── src/
│   ├── assets/
│   │   └── resume-print.css  # Print styles for PDF export
│   ├── components/
│   │   ├── navigation.vue  # Navigation component
│   │   └── footer.vue      # Footer component
│   ├── views/
│   │   ├── home.vue        # Home page
│   │   ├── resume.vue      # Resume page with PDF download
│   │   └── not-found.vue   # 404 page
│   ├── App.vue             # Root component
│   ├── main.js             # Entry point
│   ├── router.js           # Vue Router configuration
│   └── style.css           # Global styles
├── package.json
└── README.md
```

## Features

- **Vue 3** with Composition API and `<script setup>` syntax
- **Vite** for fast development and optimized builds
- **Modern Portfolio Design**: Futuristic UI with smooth animations
- **Resume Page**: Dynamic resume loading with PDF download
- **PDF Export**: Browser print functionality for saving resume as PDF
- **Responsive Design**: Mobile-first approach with adaptive layouts
- **Vue Router 4**: Client-side routing with history mode
- **@unhead/vue**: Modern head management for SEO

## Resume PDF Download

The resume page (`/resume`) includes a "Download PDF" button that uses the browser's native print dialog. To save as PDF:

1. Click "Download PDF"
2. In the print dialog, select "Save as PDF" as the destination
3. Click Save

## Customization

### Update Resume Content
Edit `public/resume.html` with your information.

### Change Styles
Modify CSS variables in `src/style.css` to customize colors, fonts, and spacing.

### Update Navigation
Edit `src/components/navigation.vue` to modify navigation links.

## Tech Stack

- **Vue 3.5** - Progressive JavaScript framework
- **Vite 6** - Next generation frontend tooling
- **Vue Router 4** - Official router for Vue.js
- **@unhead/vue** - Document head management

## License

MIT
