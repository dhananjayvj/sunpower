# SUNPOWER Website

The SUNPOWER website is a mobile-first solar lead-generation website for residential, commercial, industrial, MMS, battery, inverter, and PM Surya Ghar enquiries across Delhi NCR.

## Live Website

- Website: <https://sunpowerind.com>
- Repository: <https://github.com/dhananjayvj/sunpower>
- Hosting: GitHub Pages
- Deployment branch: `main`

## Included Experience

- Responsive homepage with hero, services, projects, product catalog, calculator, resources, FAQs, contact, and map sections.
- Dedicated crawlable service pages under `/services/`.
- Solar savings calculator for estimated system size, cost range, and payback period.
- Product catalog for solar panels, batteries, and inverters.
- Project and installation imagery from the local image assets.
- WhatsApp, phone, email, Instagram, and Google Maps contact paths.
- Formspree enquiry form with thank-you redirect.
- Custom 404 page, privacy page, and post-enquiry thank-you page.
- Mobile navigation, sticky mobile CTAs, accessible accordions, responsive card grids, and project showcase layouts.

## Local Development

### Requirements

- Node.js 22 or later
- npm

### Install and run

```bash
npm ci
npm run dev
```

Open <http://localhost:3000> in a browser.

### Verification commands

```bash
npm run lint
npm run build
```

The production build is exported to the `out/` directory for static hosting.

## Deployment

Every push to `main` starts the GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

The workflow:

1. Installs dependencies with `npm ci`.
2. Builds the static site with `npm run build`.
3. Uploads the `out/` directory to GitHub Pages.
4. Deploys the Pages artifact to the `github-pages` environment.

The custom domain is configured through `public/CNAME`.

For a project-path preview, set `NEXT_PUBLIC_BASE_PATH` during the build. The production custom domain uses the root path and does not require a base path.

## Enquiry Form

The callback form is connected to Formspree:

```text
https://formspree.io/f/xnpqgzgr
```

The form is implemented in `src/components/sunpower-site.tsx`. It sends:

- Name
- Email
- Phone
- Message

The successful submission redirect is configured with the `_next` field and points to:

```text
https://sunpowerind.com/thank-you/
```

Form submissions are managed from the Formspree dashboard associated with the client account.

## Content and Assets

- Business, contact, service, product, project, FAQ, testimonial, and calculator data: `src/lib/site.ts`
- Main page composition and UI: `src/components/sunpower-site.tsx`
- Global tokens and styling: `src/app/globals.css`
- Site metadata and structured data: `src/app/layout.tsx`
- Service detail pages: `src/app/services/[slug]/page.tsx`
- Sitemap: `src/app/sitemap.ts`
- Robots rules: `src/app/robots.ts`
- AI-readable business summary: `public/llms.txt`
- Images and brand assets: `public/images/`

When replacing an image, preserve the existing path, descriptive `alt` text, aspect-ratio container, and `object-contain` or `object-cover` behavior selected for that asset.

## SEO and GEO

The site includes:

- Page title, description, canonical URL, Open Graph, and Twitter metadata.
- Organization, LocalBusiness, WebSite, Service, and FAQ structured data.
- Crawlable service URLs with page-specific metadata.
- XML sitemap at `/sitemap.xml`.
- Robots file at `/robots.txt`.
- `llms.txt` with verified business information and service links.

Google Search Console, Google Business Profile, and Bing Webmaster verification are managed outside the repository through the relevant client accounts.

## Conversion Analytics

The website emits GA4-compatible events for:

- `quote_cta_click`
- `whatsapp_click`
- `phone_click`
- `calculator_interaction`
- `form_submit`
- `form_submit_success`
- `form_submit_error`

To collect these events in Google Analytics, add the GA4 measurement ID to the deployment environment:

```text
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

The site loads the Google Analytics script only when this variable is present. Event dispatch is implemented in `src/lib/analytics.ts`.

## Repository Ownership

The complete source code, assets, configuration, and deployment workflow are available in the GitHub repository. Changes should be made on a feature branch, verified with `npm run lint` and `npm run build`, then merged into `main` to deploy.

## Technical Support

Technical support and continued layout refinement are provided for three months following handoff. For website updates, use the repository and keep the production deployment workflow on the `main` branch.
