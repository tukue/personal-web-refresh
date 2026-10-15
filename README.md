# Tukue Gebremariam — Portfolio

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

## Featured Projects — MVP Portfolio

> MVP = production-ready, minimal-scope builds that demonstrate DevOps, Cloud, and Fullstack skills end-to-end. Full list lives in [`src/components/Projects.tsx`](src/components/Projects.tsx) and on the live site.

### Featured MVPs

| # | Project | One-liner | Stack | Repo |
|---|---|---|---|---|
| 1 | **Book Recommender App for Avid Readers** 🔒 Private — [Live Demo](https://book-notes-app-tfwv.onrender.com) | MVP for avid readers — personalized growth-book recommendations, notes, Spotify | Node.js, Express, Supabase/PostgreSQL, React, Bootstrap, Jest, GH Actions, Render | Private repo — live demo only |
| 2 | **MetaFlow — Metabolic Health App** 🔒 Private — [Live Demo](https://metabol-balance-app-pdur.vercel.app/) | A Metabolic health app — coaching, habits, tracking and guidance | Vite, TypeScript, React, shadcn/ui, Tailwind CSS, Vercel | Private repo — live demo only |
| 3 | **FitShop — Multi-Tenant SaaS E-Commerce Platform** 🔒 Private — [Live Demo](https://ecommerce-app-ecru-nine.vercel.app/) | SaaS platform where fitness-equipment merchants spin up isolated storefronts in minutes — catalog, cart, Stripe checkout, subscription billing | Next.js 16, Neon Postgres, Stripe, NextAuth v5, Tailwind CSS v4, Playwright, Vercel | Private repo — live demo only |
| 4 | **AWS FinOps Container Optimization for AI Workloads** | FinOps reference impl for ECS/EKS AI workloads — spot, autoscaling, cost visibility | AWS, ECS, EKS, FinOps | [aws-finops-container-optimization](https://github.com/tukue/aws-finops-container-optimization) |
| 5 | **MLOps CI/CD Pipeline** | Train → serve → deploy ML model with automated CI/CD | FastAPI, scikit-learn, Docker, CI/CD | [mlops-model-ci-cd](https://github.com/tukue/mlops-model-ci-cd) |
| 6 | **ShopEase E-commerce** | Responsive fullstack shop — catalog, cart, payments, Supabase backend | React, TypeScript, Supabase, GitHub Actions | [shopease-ecomerce](https://github.com/tukue/shopease-ecomerce) |
| 7 | **Node.js E-commerce REST API** | Secure JWT CRUD API for products/orders with Swagger docs | Node.js, Express, Sequelize, PostgreSQL, Swagger | [ecommerce-api](https://github.com/tukue/ecommerce-api) |
| 8 | **EKS Spring Boot Microservices** | Terraform-provisioned EKS + ECR + CloudWatch via GitHub Actions pipeline | Terraform, AWS EKS/ECR, Docker, GitHub Actions | [grocery-microservices](https://github.com/tukue/grocery-microservices) |
| 9 | **Modern Portfolio Website** — [Live Demo](https://tukue-portofilo.netlify.app/) | A responsive and modern portfolio website built with React, TypeScript, and Vite. Showcases projects, skills, and experience as a Fullstack, Backend, and DevOps Developer. | React, TypeScript, Vite, Tailwind, shadcn/ui, Netlify | [personal-web-refresh](https://github.com/tukue/personal-web-refresh) |

> 🔒 = private GitHub repo — code on request, live demo linked.
>
> **Book Recommender MVP stack:** Backend — Node.js, Express.js, Supabase PostgreSQL, dotenv. Frontend — React, HTML5/CSS3/ES6+, Bootstrap. Dev & Deploy — Jest + Supertest, GitHub Actions, Render.
>
> **MetaFlow (Metabolic Health) MVP stack:** Frontend — Vite, TypeScript, React, shadcn/ui, Tailwind CSS. Dev & Deploy — CI/CD via GitHub Actions, hosted on Vercel.
>
> **FitShop (Multi-Tenant E-commerce) MVP stack:** Framework — Next.js 16 (App Router, RSC). Database — Neon serverless Postgres with row-level tenant isolation. Auth — NextAuth v5 (JWT, tenant ID in session). Payments — Stripe Checkout + Subscriptions with idempotent webhook handling. Styling — Tailwind CSS v4. Testing — Node test runner (43 integration tests) + Playwright e2e. Dev & Deploy — Vercel, in-memory mock mode (`USE_DB_MOCK=true`) for local/CI without a database.

### DevOps / Cloud Automation MVPs

| Project | Focus | Repo |
|---|---|---|
| DevOps Infra Automation on AWS | VPC/EC2/S3/IAM/Route53 with Terraform + Terragrunt, Ansible for Jenkins, Terrascan + ArgoCD GitOps | [terraform-jenkins-aws](https://github.com/tukue/terraform-jenkins-aws) |
| Azure DevOps Automation | Modular Azure IaC with Terraform/Terragrunt, Terrascan, ArgoCD | [simpleAppProvisionAzure](https://github.com/tukue/simpleAppProvisionAzure) |
| Three-Tier Azure with Bicep | Network-segmented secure architecture, PowerShell init/plan/apply | [AzureInfrastuctureAsCode](https://github.com/tukue/AzureInfrastuctureAsCode) |
| GCP Scalable Web App | Terraform on GCP + GitHub Actions + Terrascan | [terraform-automation](https://github.com/tukue/terraform-automation) |
| Cloud Infrastructure Automation | Terraform AWS + Kubernetes orchestration, security best practices | [simpleAppInfraCode](https://github.com/tukue/simpleAppInfraCode) |
| DevOps Monitoring | Grafana + Prometheus + ELK for Kubernetes visibility | [simpleApplication](https://github.com/tukue/simpleApplication) |

### Fullstack / Backend MVPs

| Project | Focus | Repo |
|---|---|---|
| Fullstack React + AWS Amplify | Cognito auth, AppSync GraphQL, DynamoDB, CI/CD | [todo](https://github.com/tukue/todo) |
| Python Backend & Data Science | Flask + SQLAlchemy REST APIs, pytest/Selenium, pandas/NumPy, matplotlib | [simple_api](https://github.com/tukue/simple_api) |
| AWS Event-Driven App | Lambda + EventBridge + Step Functions + X-Ray + CloudFormation + Security Hub | — (see site) |
| Serverless React + Amplify | Lambda + API Gateway + DynamoDB + Cognito + Amplify Console | — (see site) |
| Book Recommender App 🔒 | For avid readers — personalized recommendations, notes, Spotify audiobooks — [Live Demo](https://book-notes-app-tfwv.onrender.com) | Private — demo only |
| MetaFlow — Metabolic Health App 🔒 | Coaching, habits, tracking and guidance for metabolic wellbeing — [Live Demo](https://metabol-balance-app-pdur.vercel.app/) | Private — demo only |
| FitShop — Multi-Tenant E-commerce 🔒 | Next.js 16 + Neon Postgres + Stripe — isolated merchant storefronts, subscription billing — [Live Demo](https://ecommerce-app-ecru-nine.vercel.app/) | Private — demo only |

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
