# Anandlok Website

Anandlok is a React + TypeScript website for an Ayurveda and Panchakarma wellness center. The project is built with Vite and organized as a routed single-page application with reusable sections, SEO helpers, and mobile-friendly contact flows.

## Project Overview

The site is designed to help visitors:

- learn about the clinic and its Ayurveda approach
- explore services, treatments, doctors, and blog content
- contact the clinic through phone, WhatsApp, email, or forms
- book an appointment with minimal friction

The codebase focuses on maintainability, reusable UI composition, and search-engine-friendly page metadata.

## Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- React Router DOM
- TanStack React Query

### Styling and UI

- Tailwind CSS
- PostCSS
- Autoprefixer
- Radix UI primitives
- shadcn/ui-style component patterns
- lucide-react icons
- clsx, class-variance-authority, tailwind-merge

### Forms and interactions

- react-hook-form
- @hookform/resolvers
- sonner for toast notifications
- custom dialog, tooltip, and toast components

### Testing and quality tools

- Vitest
- @testing-library/react
- jsdom
- Playwright
- ESLint

### Build tooling

- Vite build pipeline
- TypeScript compiler configuration
- ESLint configuration
- Tailwind and PostCSS configuration

## Features

- routed home, about, services, programs, blog, gallery, contact, privacy policy, and terms pages
- dynamic detail routes for programs and blog posts
- shared layout with navbar, footer, cookie notice, WhatsApp button, and scroll-to-top button
- centralized content data for treatments, services, blog posts, doctors, and awards
- SEO helper that updates title, description, canonical URL, Open Graph, Twitter, and robots metadata
- scroll reveal behavior for section animations
- appointment booking dialog with a desktop iframe and a mobile fallback
- error boundary for safer rendering

## Project Structure

```text
src/
	App.tsx
	main.tsx
	components/
	hooks/
	layouts/
	lib/
	pages/
	assets/
documentation/
server/
public/
```

### Key files

- `src/App.tsx` - route definitions and app providers
- `src/main.tsx` - React entry point
- `src/layouts/MainLayout.tsx` - shared layout wrapper
- `src/lib/placeholders.ts` - centralized content data
- `src/lib/site.ts` - site metadata and canonical URL helpers
- `src/components/Seo.tsx` - dynamic SEO metadata
- `src/components/BookAppointmentDialog.tsx` - appointment booking flow
- `src/hooks/use-scroll-animation.ts` - viewport-based reveal logic

## Routes

- `/` - home page
- `/about` - about page
- `/services` - services page
- `/programs` - treatment/program listing
- `/treatments` - alias for the programs page
- `/programs/:slug` - treatment detail page
- `/gallery` - gallery page
- `/blog` - blog listing page
- `/blog/:slug` - blog detail page
- `/contact` - contact page
- `/privacy-policy` - privacy policy
- `/terms-of-use` - terms page

## Getting Started

### Prerequisites

- Node.js installed
- npm installed

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Then open the local URL shown in the terminal.

### Build for production

```bash
npm run build
```

This generates the production output in `dist/`.

### Preview the production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - start the Vite development server
- `npm run build` - create the production build
- `npm run build:dev` - build using development mode settings
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint across the project
- `npm run test` - run Vitest once
- `npm run test:watch` - run Vitest in watch mode

## How the App Works

The project uses a routed React SPA structure. `App.tsx` sets up React Router and lazy loads the pages. `MainLayout.tsx` keeps shared UI elements in one place so every page gets the same shell. Most page content is composed from reusable sections, while the actual copy and structured data are stored in `src/lib/placeholders.ts`.

The SEO component updates metadata dynamically for each route, which helps search engines and social previews. The booking dialog also changes behavior on mobile devices because embedded forms can be unreliable on small screens.

## Content Management Approach

This project is intentionally content-driven.

- edit `src/lib/placeholders.ts` to change services, treatments, blogs, doctors, and awards
- edit page components in `src/pages/` to change route-level layout
- edit section components in `src/components/` to change shared UI sections

This structure makes it easy to update the site without rewriting the full app.

## SEO and Metadata

The site includes dynamic metadata support through the `Seo` component. It updates:

- page title
- meta description
- robots tags
- canonical URL
- Open Graph tags
- Twitter tags

This is useful for marketing pages that need good search visibility and social sharing behavior.

## Deployment Notes

The repository includes deployment documentation for Hostinger and GoDaddy. Before deployment, make sure:

- the app builds successfully with `npm run build`
- important pages render correctly
- contact links work
- sitemap and robots output are valid in production

If you are deploying as a static build, upload the generated `dist/` contents to your host. If you are using a Node.js environment, follow the deployment guide in `documentation/`.

## Useful Documentation

- `documentation/DEPLOYMENT_PLAN.md`
- `documentation/INTERVIEW_PREPARATION_GUIDE.md`

## Notes

- The repository uses `.gitignore` rules to keep `node_modules/` and build output out of Git.
- The current project is focused on the frontend SPA experience, content management, and production-ready marketing pages.

 