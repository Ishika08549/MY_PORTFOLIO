# Ishika Pandey - Data Science & ML Engineering Portfolio

A professional, production-ready portfolio built with **React**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**. It is optimized for performance, accessibility, and SEO.

## Features
- **Modern Aesthetic:** Deep slate corporate theme with subtle glassmorphism and beautiful animated transitions.
- **Responsive Design:** Fully responsive layout for desktop, tablet, and mobile devices.
- **SEO Optimized:** Complete meta tags for excellent visibility on Google, LinkedIn, and Twitter.
- **Performant:** Built with Vite for instant server start and lightning-fast HMR.

## Local Development

Since this project uses a `pnpm` monorepo structure, follow these steps to run it locally:

1. **Install Dependencies:**
   ```bash
   pnpm install
   ```
   *(Note: Ensure you are using `pnpm` as `npm install` may fail due to workspace catalog features).*

2. **Start the Development Server:**
   ```bash
   cd artifacts/portfolio
   pnpm run dev
   ```
   The site will be available at `http://localhost:5173`.

3. **Build for Production:**
   ```bash
   cd artifacts/portfolio
   pnpm run build
   ```
   This generates the optimized production files in `artifacts/portfolio/dist/public`.

## Deployment to Vercel

This project includes a `vercel.json` file inside the `artifacts/portfolio` directory to seamlessly handle Single Page Application (SPA) routing.

**To deploy:**
1. Push this entire repository to your GitHub account.
2. Log into [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your GitHub repository.
4. In the **Configure Project** section, edit the **Root Directory** and select `artifacts/portfolio`.
5. Vercel will automatically detect the Vite framework preset.
6. Click **Deploy**. Your site will be live in less than a minute!
