# Tukue Gebremariam — Portfolio

[![Node.js CI](https://github.com/tukue/personal-web-refresh/actions/workflows/ci.yml/badge.svg)](https://github.com/tukue/personal-web-refresh/actions/workflows/ci.yml)

A modern, responsive portfolio website for Tukue Gebremariam, a DevOps Engineer and Backend Developer. This project showcases my professional experience, projects, skills, and contact information in a clean, modern interface built with React, TypeScript, and Tailwind CSS using the shadcn/ui component library.

Live at **[tukue-portofilo.netlify.app](https://tukue-portofilo.netlify.app/)**.

## System Architecture

The site is a single-page application (SPA) with the following structure:

- **Routing** — React Router v6 handles client-side navigation with an index route and a catch-all 404 page.
- **Components** — Organized into three layers:
  - `pages/` — top-level route pages (`Index`, `NotFound`)
  - `components/sections/` — feature-specific sections used by pages (`AboutSection`, `ResumeSection`)
  - `components/ui/` — reusable primitives from shadcn/ui (button, card, dialog, etc.)
- **State & Data** — TanStack React Query for server state, React hooks for local state. EmailJS service is abstracted behind an interface (`IEmailService`) for testability.
- **Styling** — Tailwind CSS utility classes with CSS variables for theming (dark mode via class toggle).
- **Build & Deploy** — Vite bundles the app; Netlify serves it with SPA redirect rules (`/* → /index.html`).

## Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 18 with TypeScript |
| **Build Tool** | Vite 5 (SWC plugin) |
| **Styling** | Tailwind CSS, shadcn/ui, PostCSS |
| **Routing** | React Router v6 |
| **State Management** | TanStack React Query |
| **Forms** | react-hook-form + Zod |
| **Email** | EmailJS (contact form) |
| **Testing** | Vitest, Testing Library, jsdom |
| **Linting** | ESLint (flat config) |
| **Hosting** | Netlify |

## Featured Projects

### AWS FinOps & Container Optimization

Repository: [aws-finops-container-optimization](https://github.com/tukue/aws-finops-container-optimization)

## Development

```sh
git clone https://github.com/tukue/personal-web-refresh.git
cd personal-web-refresh
npm install
npm run dev
```

## Deployment with Netlify

This site is deployed using Netlify for continuous deployment.

### Deployment Steps

1. **Connect your repository to Netlify**:
   - Create a Netlify account at [netlify.com](https://www.netlify.com/)
   - Click "New site from Git" and select your repository
   - Configure the build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`

2. **Configure environment variables**:
   - For contact form functionality, add these environment variables in Netlify:

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_DESTINATION_EMAIL` | Recipient email |

3. **Deploy the site**:
   - Netlify will automatically build and deploy your site
   - Each push to the main branch will trigger a new deployment

### Using Netlify CLI

You can also deploy using the Netlify CLI:

```sh
# Install Netlify CLI
npm install -g netlify-cli

# Login to your Netlify account
netlify login

# Initialize Netlify in your project
netlify init

# Deploy to production
netlify deploy --prod
```

### Custom Domain Setup

To connect a custom domain:

1. Go to your site settings in Netlify
2. Navigate to "Domain management" > "Domains"
3. Click "Add custom domain"
4. Follow the instructions to configure your DNS settings

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint with ESLint |
| `npm test` | Run tests with Vitest |
