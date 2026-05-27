# Task: Prepare seniuts.com for Vercel deployment

You are working in the seniuts.com repository.

## Context

The site is a Next.js project intended to be deployed to Vercel.

The repository also contains docs and PDF generation pipeline, but this task is only about website deployment readiness.

## Goal

Make sure the website is ready for Vercel deployment.

## Inspect

Review:

- package.json
- package-lock.json
- next.config.js
- app/layout.tsx
- app/sitemap.ts
- app/robots.ts
- data/siteMetadata.js
- README.md
- .gitignore

## Requirements

1. Verify package scripts are suitable for Vercel.

Expected scripts:

- dev
- build
- start
- lint
- lint:fix if present
- type-check if present

2. Verify Vercel can use:

- Install command: npm install or npm ci
- Build command: npm run build
- Output: default Next.js output

3. Check next.config.js.

Do not use static export unless the project explicitly needs it.

4. Check site metadata.

Ensure:

- site URL is https://seniuts.com
- contact email is vasiliseniuts@gmail.com
- LinkedIn URL is https://www.linkedin.com/in/vasili-seniuts/
- no starter social images remain
- no broken Open Graph assumptions

5. Check sitemap and robots.

Only public routes should be included:

- /
- /services
- /about
- /contact

6. Add a short deployment section to README.md.

Include:

- recommended platform: Vercel
- install command: npm install
- build command: npm run build
- deployment source: GitHub repository
- production branch: main
- domain to connect later: seniuts.com

7. Do not add Vercel-specific files unless necessary.

8. Do not add deployment secrets.

9. Do not change page content unless there is a clear broken deployment assumption.

## Checks to run

Run:

- npm run lint
- npm run type-check
- npm run build

If possible, run local route smoke check:

- /
- /services
- /about
- /contact

## Output format

Answer in Russian with:

1. Summary
2. Files changed
3. Vercel settings to use
4. Metadata/domain readiness
5. Checks run
6. Remaining limitations
7. Recommended manual Vercel steps
