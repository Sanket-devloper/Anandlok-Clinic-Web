# Anandlok Website — Project Guide

## Purpose
This document summarizes the frontend architecture, what was implemented, how to run the project locally, and recommended next steps for content, social links, and deployment.

## What I implemented
- Frontend routing and layout (React + Vite + TypeScript).
- Main layout with `Navbar` and `Footer`, plus pages: Home, About, Services, Programs, ProgramDetail, Blog, Contact.
- Component props + placeholders to make content editable from a single source.

## Key files
- `src/App.tsx` — router and route definitions
- `src/layouts/MainLayout.tsx` — layout wrapper with `Outlet`
- `src/components/Navbar.tsx` — navigation (now uses `react-router-dom` Links)
- `src/pages/Index.tsx` — existing home UI (single-page sections)
- `src/pages/About.tsx`, `src/pages/Services.tsx`, `src/pages/Programs.tsx`, `src/pages/ProgramDetail.tsx`, `src/pages/Blog.tsx`, `src/pages/Contact.tsx` — page entry files
- `src/components/*Section.tsx` — UI sections (About, Services, Treatments, Blog, Contact)
- `src/lib/placeholders.ts` — centralized placeholder data used by pages/components

## Routing patterns
- `/` → Home (single-page UI with anchors)
- `/about` → About page (renders `AboutSection`)
- `/services` → Services listing (renders `ServicesSection`)
- `/programs` → Programs listing (renders `TreatmentsSection`)
- `/programs/:slug` → Program detail (single dynamic file `ProgramDetail.tsx`)
- `/blog` → Blog listing
- `/contact` → Contact page

## How the content flow works
- Components accept optional props (eyebrow, heading, lists, etc.). Defaults come from `src/lib/placeholders.ts`.
- To add client content, edit `src/lib/placeholders.ts` or pass real data from a CMS or API later.
- Program detail pages are rendered from a single route and can use the `slug` param to fetch or map program content.

## Run locally
1. Install dependencies (only needed once):

```bash
cd "d:\Aanadlok website\Anandlok web"
npm install
```

2. Start development server:

```bash
npm run dev
# open http://localhost:8080/
```

## Next recommended steps
1. Content: replace placeholders in `src/lib/placeholders.ts` or integrate a small content JSON/MD loader.
2. Booking: wire the `Book Appointment` CTA to your Google Form URL (simple redirect or open in new tab).
3. Contact area: keep the Visit Us On section pointed at the clinic's official social links.
4. Deployment: build with `npm run build` and deploy the `dist/` output to the client's hosting. For GoDaddy shared hosting, upload `dist/` contents to the site's public_html; for managed/VM, use a static hosting provider or connect via FTP. Ensure DNS points to correct host.

## Minimal deployment checklist
- Run `npm run build` and verify `dist/` content.
- If using GoDaddy cPanel: upload `dist/` files to `public_html` and set domain to that folder.
- For contact discovery: keep the social links current and easy to tap on mobile.

## Where to edit UI content quickly
- `src/lib/placeholders.ts` — small, single source of truth for initial content.
- Section components keep layout and styling; edit `*Section.tsx` to change structure.

## Notes
- Visual design and styling were not changed — only routing and small prop additions were applied.
- Services and programs use single-file routing to minimize the number of pages while remaining scalable.

If you want, I can now:
- Wire the `Book Appointment` button to a Google Form URL.
- Replace the placeholder social links with the clinic's real Instagram, YouTube, and Facebook URLs.

---
Generated changes are in the repository. See `src/lib/placeholders.ts` to update content.
