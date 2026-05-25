# Anandlok Website - Handoff Notes (May 18, 2026)

## Summary of updates
- Added page hero blocks for About, Blog, and Gallery using a shared `PageHero` component.
- Reworked About content into shorter, scannable paragraphs and a two-column feature grid.
- Added Awards and Achievements list with image placeholders.
- Added a dedicated About doctors section with the three provided doctors.
- Added doctor image placeholders (initials + tile) for About doctors.
- Redesigned the Blog area into a list page with clickable tiles, plus a dedicated blog detail route.
- Added a new Gallery page and routed it in the navbar and router.
- Removed default Vite layout constraints so the site can use full-width responsive layouts.
- Optimized spacing/typography for mobile across core sections (hero, services, treatments, doctors, testimonials, achievements, blog, contact, footer).
- Added scroll-to-top on route changes so navigation always opens at the top.
- Fixed duplicate Navbar/Footer by keeping them only in the main layout.

## Files and patterns
- `src/components/PageHero.tsx` - shared hero block for page-level banners.
- `src/pages/About.tsx` - About hero + About section + Achievements + About doctors.
- `src/layouts/MainLayout.tsx` - layout wrapper plus scroll-to-top behavior.
- `src/pages/Blog.tsx` - Blog hero + tile list.
- `src/pages/BlogDetail.tsx` - Blog hero + full article rendering.
- `src/pages/Gallery.tsx` - Gallery hero + placeholder gallery grid.
- `src/components/AchievementsSection.tsx` - awards grid with image placeholders.
- `src/components/AboutDoctorsSection.tsx` - 3 doctor cards for About page.
- `src/components/Navbar.tsx` - Why Us replaced with Gallery.
- `src/App.tsx` - new /gallery route.
- `src/lib/placeholders.ts` - centralized content for About, blog list, full blog post, awards, and About doctors.
- `src/components/AboutSection.tsx` - supports compact/full layout variants for image/text balance.
- `src/App.css` - removed default root max-width and padding to prevent narrow layouts.

## Assets used
- About hero: `src/assets/About us hero section.png`
- Blog hero: `src/assets/Blog hero section.png`
- Gallery hero: `src/assets/Gallery hero section.png`
- About image (home/about section): `src/assets/New about us.png`

## Content sources
- About text and feature list are in `aboutData` in `src/lib/placeholders.ts`.
- Blog summary is in `blogsData` and the full article is in `blogPosts` in `src/lib/placeholders.ts`.
- Awards list is in `awardsData`.
- About doctors list is in `aboutDoctorsData`.

## Next steps for future work
- Replace achievements image placeholders with real award images and store them in `src/assets/`.
- Populate Gallery with real images and titles (current grid uses placeholders).
- If needed, add more blog posts to `blogPosts` and expand the blog listing tiles.
- Keep new content consistent with the existing UI theme and spacing utilities (`section-padding`, `premium-card`, `gold-divider`).
- Re-check mobile spacing after adding real images, especially in About and Doctors sections.

## Running locally
```bash
npm run dev
# http://localhost:8080
```
