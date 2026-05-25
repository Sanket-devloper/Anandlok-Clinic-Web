# Anandlok Website Deployment Plan

This guide deploys the Anandlok Ayurveda website using:

- Domain registered at GoDaddy
- Hosting on Hostinger
- One Managed Node.js app from the available Hostinger slots
- The existing React + Vite frontend and Express backend in this repo

## 1. Deployment Goal

Use a single Hostinger Managed Node.js app to serve both:

- the React frontend from the built `dist/` folder
- the Express server routes, including `/api/health`, `/sitemap.xml`, and `/robots.txt`

Only one Node.js app is needed. Leave the other managed app slots unused.

## 2. What Must Be Ready First

Before deployment, confirm these items are already working locally:

- `npm run build` completes successfully
- `npm start` runs the server without errors
- All important pages open correctly in the browser
- The contact links, phone number, email, and WhatsApp button work
- Sitemap and robots routes return valid output in production mode

## 3. Files That Matter For Deployment

- `package.json` for build and start scripts
- `server/` for the production Node.js app
- `dist/` for the frontend build output
- `index.html` for base meta tags

## 4. Step-by-Step Deployment Process

### Step 1: Prepare the codebase

1. Pull the latest code from the repo.
2. Run `npm install` if dependencies are missing.
3. Run `npm run build` and make sure it finishes successfully.
4. Commit or upload only the working version.

### Step 2: Choose one Hostinger Node.js app slot

1. Open Hostinger hPanel.
2. Go to the Managed Node.js Apps section.
3. Select one free app slot.
4. Do not use the other already occupied slots.

### Step 3: Point the app to the project root

1. Set the application root to the Anandlok project folder.
2. Make sure Hostinger can access both the frontend and `server/` folder.
3. If you upload files manually, keep the same folder structure.

### Step 4: Set the start command

Use the production start command:

```bash
npm start
```

This runs `server/index.js`, which starts the Express app.

### Step 5: Set the build command

Use the build command:

```bash
npm run build
```

This generates the production frontend files in `dist/`.

### Step 6: Configure environment variables

Set these values in Hostinger if needed:

- `NODE_ENV=production`
- `PORT` provided by Hostinger
- `BODY_LIMIT=100kb` if you want to keep the current default explicitly

If Hostinger asks for a domain or base URL variable, use your final live domain.

### Step 7: Upload or connect the code

1. Upload the latest repository files or connect the deployment source.
2. Make sure `server/`, `src/`, `package.json`, and config files are included.
3. Do not upload `node_modules/`.

### Step 8: Build on Hostinger

1. Trigger the build from Hostinger or let it run automatically.
2. Wait for the build to finish.
3. Confirm the app starts successfully.

### Step 9: Check the live app

Test these URLs after deployment:

- `/` for the home page
- `/about`
- `/services`
- `/treatments`
- `/gallery`
- `/blog`
- `/contact`
- `/privacy-policy`
- `/terms-of-use`
- `/sitemap.xml`
- `/robots.txt`
- `/api/health`

### Step 10: Point the GoDaddy domain to Hostinger

Use one of these approaches:

1. Change the domain nameservers to Hostinger if you want Hostinger to manage DNS.
2. Keep DNS at GoDaddy and update the required records to point to Hostinger.

The safer option for most users is to follow the Hostinger DNS instructions exactly and use only one DNS manager at a time.

### Step 11: Enable SSL and force HTTPS

1. Turn on SSL in Hostinger.
2. Confirm the site opens with `https://`.
3. Check that the domain does not show certificate warnings.

### Step 12: Final production checks

1. Open the site on mobile and desktop.
2. Refresh a nested route like `/about` or `/blog` to confirm routing works.
3. Open `/sitemap.xml` and confirm the URLs use the live domain.
4. Open `/robots.txt` and confirm it points to the live sitemap.
5. Confirm the contact phone and email links work.
6. Confirm the WhatsApp button opens the correct chat.

## 5. SEO Checks Before Launch

Before making the site public, verify:

- Every main page has a clear title and description
- The sitemap includes all public pages
- Search engines can index the site
- The 404 page is marked `noindex`
- The contact page includes local business details

## 6. Reliability and Backup Plan

Hostinger includes daily and on-demand backups in your plan. Use them like this:

1. Take a backup before the first production deployment.
2. Take another backup before any major content or code update.
3. Keep the Git repository as the source of truth.
4. If a deployment fails, restore the previous working version first.

## 7. Recommended Launch Order

1. Build locally and verify the app.
2. Deploy to one Hostinger Node.js app slot.
3. Test the hosted app on the temporary Hostinger URL.
4. Point the GoDaddy domain to Hostinger.
5. Enable SSL.
6. Verify sitemap, robots, routing, and contact links.
7. Submit the site to Google Search Console.

## 8. After Launch

After the site is live, monitor:

- uptime
- page speed
- form or contact link issues
- broken links
- SEO indexing in Google Search Console

## 9. Short Summary

Use one Hostinger Managed Node.js app, build the frontend with `npm run build`, start the server with `npm start`, point the GoDaddy domain to Hostinger, enable SSL, and verify the live pages plus sitemap and robots routes.
