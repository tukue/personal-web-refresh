# Portfolio Website

[![Node.js CI](https://github.com/tukue/personal-web-refresh/actions/workflows/ci.yml/badge.svg)](https://github.com/tukue/personal-web-refresh/actions/workflows/ci.yml)

A modern, responsive portfolio website for Tukue Gebremariam, a DevOps Engineer and Backend Developer.

## Project Overview

This project showcases my professional experience, projects, skills, and contact information in a clean, modern interface. The site is built with React, TypeScript, and Tailwind CSS using the shadcn/ui component library.

## Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **shadcn/ui** components for consistent UI
- **EmailJS** for contact form functionality
- **Netlify** for deployment

## Featured Projects

The portfolio highlights several projects, including:

### DevOps Infrastructure Automation on AWS with Terraform, Ansible, and GitOps Tools

This repository contains Terraform configurations to automate the deployment of a Jenkins server on AWS. It provisions infrastructure such as VPC, EC2 instances, S3 backend for state management, and Route 53 for domain configuration.

**Key Features:**
- Automated Jenkins setup and software provisioning with Ansible playbooks
- Infrastructure as Code using Terraform and Terragrunt
- Security scanning with Terrascan
- Remote state management with S3 backend and DynamoDB locking
- CI/CD pipeline integration

Visit the repository: [terraform-jenkins-aws](https://github.com/tukue/terraform-jenkins-aws)

## Development

To run this project locally:

```sh
# Clone the repository
git clone https://github.com/tukue/personal-web-refresh.git

# Navigate to the project directory
cd personal-web-refresh

# Install dependencies
npm install

# Start the development server
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
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
     - `VITE_EMAILJS_DESTINATION_EMAIL`

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
