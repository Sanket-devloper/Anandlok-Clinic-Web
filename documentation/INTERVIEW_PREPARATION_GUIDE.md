# Anandlok Website Interview Preparation Guide

This guide is a practical reference for understanding the Anandlok Ayurveda website, explaining the project confidently, and preparing for software developer interviews around the codebase, architecture, and implementation choices.

## 1. Project Snapshot

### What this project is

Anandlok is a website for an Ayurveda and Panchakarma wellness center. The codebase is primarily a single-page React application with routed pages for the main marketing and informational flows.

### Business purpose

The site presents the clinic, services, treatments, doctors, blog posts, gallery content, and contact options. It is designed to help visitors learn about Ayurveda services, explore treatments, and quickly take action through contact and booking flows.

### Main user goals

- Learn about the clinic and its Ayurveda approach
- Explore services, treatments, and doctors
- Read blog content and educational information
- Contact the clinic through phone, WhatsApp, email, or forms
- Book an appointment with minimal friction

## 2. Tech Stack

### Frontend

- React 18
- TypeScript
- Vite
- React Router DOM
- TanStack React Query

### UI and styling

- Tailwind CSS
- PostCSS and Autoprefixer
- shadcn/ui-style component set built on Radix UI primitives
- lucide-react icons
- tailwind-merge, class-variance-authority, clsx

### Forms, feedback, and interactions

- react-hook-form
- @hookform/resolvers
- sonner for toast notifications
- custom dialog, toast, and tooltip components

### Testing and quality tools

- Vitest
- @testing-library/react
- jsdom
- Playwright
- ESLint

### Deployment and build tooling

- Vite build output to dist
- Node.js deployment notes in documentation
- Hostinger and GoDaddy mentioned in deployment plan

## 3. High-Level Architecture

### Application structure

The project is organized as a routed React SPA. The root app sets up providers, lazy-loaded pages, error handling, and route definitions. Shared layout concerns are separated into a main layout, while page content is split into reusable section components.

### Core flow

1. The app starts in src/main.tsx.
2. App.tsx wires the router, lazy loading, and global providers.
3. MainLayout.tsx renders the shared header, footer, WhatsApp button, cookie notice, and scroll-to-top button.
4. Each page composes smaller section components.
5. Shared content comes from centralized placeholder/data files.

### Why this structure is useful

- Keeps the project modular and easier to maintain
- Makes page composition reusable across multiple routes
- Reduces duplication in marketing content
- Keeps the UI consistent across the site
- Makes future CMS integration easier because content is already centralized in data objects

## 4. Important Files To Know

### App and routing

- src/App.tsx - route definitions, lazy loading, providers, and fallback handling
- src/main.tsx - React entry point
- src/layouts/MainLayout.tsx - shared shell for all pages

### Content and data

- src/lib/placeholders.ts - centralized page copy, services, treatments, doctors, awards, and blog data
- src/lib/site.ts - site metadata and canonical URL helpers

### SEO and metadata

- src/components/Seo.tsx - document title, meta description, robots, Open Graph, Twitter, and canonical tags

### UI and behavior

- src/components/BookAppointmentDialog.tsx - Google Form appointment flow
- src/components/ScrollReveal.tsx - reveal-on-scroll wrapper
- src/hooks/use-scroll-animation.ts - IntersectionObserver-driven visibility hook
- src/hooks/use-mobile.tsx - mobile detection helper

### Pages

- src/pages/Index.tsx - home page composition
- src/pages/About.tsx - about page
- src/pages/Services.tsx - services page
- src/pages/Programs.tsx and src/pages/ProgramDetail.tsx - treatment/program listing and detail views
- src/pages/Blog.tsx and src/pages/BlogDetail.tsx - blog listing and detail views
- src/pages/Gallery.tsx - gallery page
- src/pages/Contact.tsx - contact page
- src/pages/PrivacyPolicy.tsx and src/pages/TermsOfUse.tsx - legal pages
- src/pages/NotFound.tsx - 404 page

## 5. Routes You Should Remember

These routes are useful to mention in interviews because they show the information architecture of the site:

- / - home page
- /about - clinic overview and story
- /services - service overview
- /programs - treatment/program listing
- /treatments - alternate route for the same program listing
- /programs/:slug - dynamic treatment detail page
- /gallery - visual content page
- /blog - blog listing
- /blog/:slug - dynamic blog detail page
- /contact - contact page
- /privacy-policy - privacy policy
- /terms-of-use - terms page

## 6. How The UI Is Built

### Component composition

The site uses a component-driven approach. Large pages are assembled from smaller, focused sections such as HeroSection, AboutSection, ServicesSection, TreatmentsSection, DoctorsSection, TestimonialsSection, BlogSection, and ContactSection.

### Shared layout pattern

The layout handles things that should appear everywhere:

- navigation
- footer
- cookie notice
- WhatsApp button
- scroll-to-top button

### Content-driven design

Instead of hardcoding all copy inside UI components, a large portion of the text and card data lives in src/lib/placeholders.ts. That makes it easier to update content without rewriting the whole layout.

### Lazy loading

Pages are loaded lazily in App.tsx. This keeps the initial bundle lighter and improves the startup experience.

## 7. Important Logical Concepts Used In The Project

### Routing

The app uses React Router for client-side navigation. This allows fast page transitions without full reloads. The routes include both static pages and dynamic parameterized routes.

### Layout reuse

MainLayout wraps every page that should share the common site shell. This is a clean example of layout composition in React.

### Centralized content management

The project keeps structured arrays and objects in one place. That is useful because the same data can feed multiple sections or pages consistently.

### SEO management

Seo.tsx updates the document title, meta description, robots tags, Open Graph tags, Twitter tags, and canonical links. This is important for marketing websites that need search engine visibility.

### Scroll-triggered animation

The app uses IntersectionObserver-based visibility logic to reveal sections when they enter the viewport. This is a good example of performance-friendly UI animation.

### Mobile-aware booking flow

The appointment dialog behaves differently on mobile and desktop because embedded Google Forms can be unreliable on mobile browsers. The code handles that by offering a direct link on mobile and an iframe on larger screens.

### Error isolation

AppErrorBoundary protects the app from uncaught rendering failures and prevents the entire site from collapsing when one component breaks.

## 8. What Makes This Project Interview-Relevant

If asked what you learned from this project, focus on these software development ideas:

- building reusable React component systems
- separating layout, content, and logic
- handling routing in a SPA
- adding SEO metadata dynamically
- making the UI responsive and mobile-friendly
- improving perceived performance with lazy loading and section reveals
- keeping content editable through centralized data objects
- designing a clean booking/contact flow for real users
- balancing marketing-site needs with maintainability

## 9. How To Explain The Project In 30 Seconds

Use this short version if someone asks you to describe the project quickly:

"Anandlok is a React and TypeScript Ayurveda website built with Vite. It uses React Router for multiple pages, reusable UI sections for content composition, SEO helpers for metadata, and centralized data objects for treatments, services, doctors, and blog content. The design is focused on discoverability, contact conversion, and maintainability."

## 10. Software Developer Interview Questions About This Project

### Project overview

1. What is the purpose of the Anandlok website?

	It is a clinic website that explains the Ayurveda services, treatments, doctors, and contact options, and helps people book an appointment or reach the clinic easily.

2. Who are the users of the site and what actions do they need to complete?

	The users are mostly patients or visitors who want to learn about the clinic, read about services, and contact the team through WhatsApp, phone, email, or the booking form.

3. Why was React a good choice for this project?

	React is good because the site has many reusable sections and pages, and React makes it easy to build and reuse those parts without repeating code.

4. What problems did Vite solve here?

	Vite gives fast local development and a simple production build process, so the project is easier to run, build, and maintain.

5. What parts of the app are static content and what parts are dynamic?

	Most text and page content is static or data-driven, while routes like blog details or treatment details are dynamic because they use URL parameters.

### Architecture and routing

6. Why did you choose a routed SPA instead of one long landing page only?

	A routed SPA makes the website easier to organize because each main topic can have its own page, and that is better for user experience and SEO.

7. How does MainLayout improve the structure of the app?

	MainLayout keeps shared parts like the navbar, footer, WhatsApp button, and cookie notice in one place, so every page looks consistent.

8. What is the benefit of lazy loading pages with React.lazy?

	Lazy loading loads a page only when it is needed, which helps the app start faster and keeps the initial bundle smaller.

9. How do dynamic routes like /programs/:slug or /blog/:slug work?

	They use the value in the URL, called a slug, to decide which page content should be shown for that specific treatment or blog post.

10. Why is /treatments mapped to the same page as /programs?

	Both routes show the same kind of content, so mapping them to one page avoids duplication and keeps navigation simple.

### React concepts

11. What is component composition and where is it used in this codebase?

	Component composition means building a page by combining smaller components, and this project uses it everywhere in pages like the home page.

12. What is the difference between a page component and a section component?

	A page component represents a full route, while a section component is one part of a page such as hero, services, or testimonials.

13. Why does the project use centralized data objects in src/lib/placeholders.ts?

	It keeps content in one place so updates are easier and the same data can be reused in multiple components.

14. How would you move this project toward CMS-driven content later?

	I would replace the local data objects with content coming from an API or CMS, then map that data into the same UI components.

15. Where would you place shared UI logic if the app grew larger?

	Shared UI logic should go into reusable hooks, utility files, or shared components so it does not get copied into many pages.

### State, forms, and interactions

16. Where would you use React Query in this project?

	React Query would be useful if the site starts fetching blog posts, treatments, or contact data from an API instead of local files.

17. Why might react-hook-form be preferred for form handling?

	It makes form handling simpler, faster, and less repetitive, especially when there are validation rules and multiple input fields.

18. How does the booking dialog handle mobile browsers differently from desktop?

	On desktop it shows the form inside an iframe, but on mobile it opens the Google Form in a new tab because embedded forms can be unreliable there.

19. What is the purpose of the use-mobile hook?

	It checks whether the user is on a mobile device so the UI can change behavior or layout for smaller screens.

20. Why is IntersectionObserver a good choice for scroll animations?

	It is efficient because it tells the app when an element appears in the viewport instead of checking scroll position all the time.

### SEO and marketing-site concerns

21. How does the Seo component improve search visibility?

	It updates the page title, description, and other metadata so each page can be understood better by search engines and social platforms.

22. Why are canonical URLs important?

	Canonical URLs tell search engines which URL is the main version of a page, which helps avoid duplicate content issues.

23. What does the robots meta tag do?

	It tells search engines whether a page should be indexed and whether its links should be followed.

24. How do Open Graph tags help the site?

	Open Graph tags make links look better when shared on social media by controlling the title, description, and preview information.

25. Why are title and description updates important on every page?

	Different pages should have different metadata so search engines and users can understand the page content clearly.

### Performance and maintainability

26. What performance improvements does the app already use?

	It uses lazy loading, reusable components, and lightweight section animations to keep the site responsive and efficient.

27. Why is lazy loading helpful in a content-heavy website?

	It prevents loading every page at once, which makes the first visit faster.

28. What are the tradeoffs of centralizing content in a single data file?

	It is easier to update, but if the file becomes too large it can be harder to manage without splitting it into smaller modules.

29. How do reusable section components reduce maintenance cost?

	If one design change is needed, you update one component instead of editing the same layout in many places.

30. What would you change first if the project had to scale to hundreds of pages?

	I would move content into a CMS or data source, create better content models, and organize the routes and components into clearer modules.

### Testing and quality

31. What would you test with Vitest?

	I would test utility functions, hooks, content mapping logic, and components that have simple output or behavior.

32. What would you test with Playwright?

	I would test real user flows like navigation, contact actions, appointment booking, and opening important pages.

33. Which parts of the app are best suited for unit tests?

	Small pieces like hooks, helpers, data transforms, and pure UI logic are best for unit tests.

34. Which user flows deserve end-to-end coverage?

	Main flows like home page navigation, opening service pages, submitting contact actions, and booking appointments should be tested end to end.

35. Why is linting important on a project like this?

	Linting catches code style problems, common mistakes, and unsafe patterns before they become bugs.

### Deployment and production

36. What is the role of the dist folder?

	dist contains the production build output that gets deployed to the host.

37. Why are build and start scripts separated?

	The build script prepares the production files, and the start script runs the app in production mode.

38. What should be checked before deployment?

	I would check that the build succeeds, pages load correctly, links work, and SEO routes like sitemap and robots return valid output.

39. How would you explain the Hostinger and GoDaddy deployment setup?

	Hostinger hosts the app, and GoDaddy manages the domain or DNS, so both need to be configured to point users to the live site.

40. What URLs would you verify after production deployment?

	I would check the home page, major pages like about and services, the blog and contact pages, and special routes like sitemap.xml, robots.txt, and api/health.

## 11. Strong Answer Points For Common Questions

### Why React and Vite?

React helps with reusable UI composition, and Vite gives fast development startup and production builds. Together they make a practical stack for a marketing website that still needs modularity.

### Why use centralized data?

It keeps copy and structured content in one place, which reduces duplication and makes updates safer. It also makes future migration to a CMS or API easier.

### Why use lazy loading?

Lazy loading reduces the initial bundle size and improves first-load performance. It is useful when the site has many pages but not all of them are needed immediately.

### Why use an IntersectionObserver hook?

It provides a lightweight way to trigger animations when content enters the viewport. That is better than constantly checking scroll position manually.

### Why special handling for the booking form on mobile?

Embedded third-party forms can fail or behave poorly on mobile browsers due to cookie and iframe restrictions. The direct link fallback improves reliability.

### Why is SEO code important in a React SPA?

Single-page apps still need page-specific metadata for search engines and social sharing. Dynamic title, description, canonical, and robots tags help each page behave like a proper indexed page.

## 12. Logical And Design Tradeoffs To Mention In Interviews

- SPA routing gives a smoother user experience but requires proper handling of page metadata and refresh behavior.
- Centralized content is easy to manage now, but a CMS would be better if non-developers need frequent updates.
- Lazy loading improves performance, but it adds a little complexity to the route setup.
- Using a dialog with iframe booking is convenient, but third-party iframe behavior can vary across devices.
- Keeping the app modular makes future refactoring easier, even if the initial file structure looks larger.

## 13. Sample Answers You Can Reuse

### Tell me about the architecture

"The app is structured as a routed React SPA. App.tsx handles routing and global providers, MainLayout supplies the shared shell, pages compose smaller sections, and content data is centralized so updates stay simple."

### Tell me about one challenge you solved

"One practical challenge was making the booking flow reliable across devices. The form works as an iframe on desktop, but on mobile I added a direct open-in-new-tab fallback because embedded forms can be blocked by browser restrictions."

### Tell me about performance work

"The site uses lazy loading for pages and scroll-triggered section reveals. That keeps the initial experience lighter and avoids doing unnecessary work before a section is visible."

### Tell me about SEO work

"I added a reusable SEO component that updates the page title, description, robots directive, canonical URL, and social tags on each route so the SPA behaves better for search engines and link previews."

## 14. Quick Revision Checklist

Before an interview, make sure you can explain:

- the project goal and target users
- the frontend stack
- why the app uses React Router
- what the MainLayout does
- why the project centralizes content data
- how the SEO component works
- what lazy loading and scroll reveals do
- how the booking form behaves on mobile
- what you would test with Vitest and Playwright
- how the app would be deployed in production

## 15. Best One-Line Summary

Anandlok is a modular React and TypeScript Ayurveda website that uses routed pages, centralized content, SEO helpers, scroll-based UI polish, and mobile-friendly booking/contact flows to support a production-ready marketing site.
