# CSS home tech services website

Professional React + TypeScript + Vite website for an access, door hardware, and security solutions company.

## Tech stack

- React + TypeScript + Vite
- Tailwind CSS
- lucide-react icons
- Data-driven products, industries, services, jobs, and testimonials

## Setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://localhost:5173`.

## Build check

```bash
npm run build
```

The production website is generated in the `dist/` folder.

## Deploy

This is a static Vite website. Use these settings on most hosting providers:

- Install command: `npm ci`
- Build command: `npm run build`
- Publish/output directory: `dist`

### Registry note

The project lockfile uses the public npm registry so cloud hosts can install dependencies without a private registry token. A local `.npmrc` can still be used on your machine, but it is gitignored and should not be committed.

### GitHub Pages

This repo includes a GitHub Actions workflow at `.github/workflows/deploy-pages.yml`.

After pushing to GitHub:

1. Open the repository on GitHub.
2. Go to `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `GitHub Actions`.
4. Go to the `Actions` tab.
5. Run or wait for `Deploy to GitHub Pages`.

The free site URL will be:

```text
https://jaganaksh.github.io/CssHomeTech/
```

Every push to `main` will redeploy automatically.

### Vercel

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Vercel, import the repository.
3. Use framework preset `Vite`.
4. Set build command to `npm run build`.
5. Set output directory to `dist`.
6. Deploy.

`vercel.json` is included so direct page URLs like `/contact` and `/products-solutions` load the React app correctly.

### Netlify

1. Push this project to GitHub, GitLab, or Bitbucket.
2. In Netlify, create a new site from the repository.
3. Set build command to `npm run build`.
4. Set publish directory to `dist`.
5. Deploy.

`public/_redirects` is included so direct page URLs load the React app correctly.

### Manual static hosting

Run:

```bash
npm ci
npm run build
```

Upload the contents of `dist/` to your hosting server, S3 bucket, cPanel public folder, or CDN origin.

## Project structure

```text
src/components  Reusable UI components
src/pages       Page-level views
src/data        Product, industry, service, company, and job data
src/assets      Brand constants
public/placeholder  Local placeholder visual assets
```
