# Tukue Gebremariam — Portfolio

[![Node.js CI](https://github.com/tukue/personal-web-refresh/actions/workflows/ci.yml/badge.svg)](https://github.com/tukue/personal-web-refresh/actions/workflows/ci.yml)

Personal portfolio built with React, TypeScript, and Tailwind CSS.  
Live at **[tukue-portofilo.netlify.app](https://tukue-portofilo.netlify.app/)**.

## Stack

- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** + **shadcn/ui**
- **EmailJS** (contact form)
- **Netlify** (hosting)

## Development

```sh
git clone https://github.com/tukue/personal-web-refresh.git
cd personal-web-refresh
npm install
npm run dev
```

## Deployment

Pushed to `main` → auto-deployed by Netlify.

### Environment Variables (Netlify)

| Variable | Purpose |
|---|---|
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `VITE_EMAILJS_DESTINATION_EMAIL` | Recipient email |

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server on port 8080 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | Lint with ESLint |
| `npm test` | Run tests with Vitest |
