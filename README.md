# Tukue's Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Project Overview

This portfolio showcases my experience as a Senior DevOps Engineer and Backend Developer, featuring my projects, skills, and professional background.

## Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and optimized builds
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **React Router** for navigation
- **EmailJS** for contact form functionality

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

This project is configured for easy deployment to Netlify. You can deploy in one of two ways:

### Option 1: Deploy from the Netlify UI

1. Create a Netlify account at [netlify.com](https://www.netlify.com/) if you don't have one
2. Click "New site from Git"
3. Connect to your GitHub account and select this repository
4. Configure the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy site"

### Option 2: Deploy using Netlify CLI

1. Install the Netlify CLI globally:
   ```sh
   npm install -g netlify-cli
   ```

2. Log in to your Netlify account:
   ```sh
   netlify login
   ```

3. Initialize Netlify in your project:
   ```sh
   netlify init
   ```

4. Follow the prompts to configure your site settings
5. Deploy your site:
   ```sh
   netlify deploy --prod
   ```

### Environment Variables

For the contact form functionality, you'll need to set up the following environment variables in Netlify:

1. Go to your site settings in Netlify
2. Navigate to "Build & deploy" > "Environment"
3. Add the following variables:
   - `VITE_EMAILJS_SERVICE_ID`: Your EmailJS service ID
   - `VITE_EMAILJS_TEMPLATE_ID`: Your EmailJS template ID
   - `VITE_EMAILJS_PUBLIC_KEY`: Your EmailJS public key
   - `VITE_EMAILJS_DESTINATION_EMAIL`: Your destination email address

## Custom Domain Setup

To connect a custom domain to your Netlify deployment:

1. Go to your site settings in Netlify
2. Navigate to "Domain management" > "Domains" 
3. Click "Add custom domain"
4. Follow the instructions to configure your DNS settings

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Tukue Gebremariam - [tukue.geb@gmail.com](mailto:tukue.geb@gmail.com)
