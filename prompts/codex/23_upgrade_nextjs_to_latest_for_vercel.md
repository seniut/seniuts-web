# Task: Upgrade Next.js to latest stable version and fix Vercel deployment

You are working in the seniuts-web repository.

## Context

Vercel deployment failed because the project uses a vulnerable Next.js version.

Build logs showed:

npm warn deprecated next@15.5.3: This version has a security vulnerability.
Vercel deployment failed with:
Vulnerable version of Next.js detected, please update immediately.

The user wants to upgrade to the latest stable Next.js version, not only a patch version.

## Goal

Upgrade the project to the latest stable Next.js version and fix any compatibility issues required for the website to build and deploy on Vercel.

## Important

This is a major framework upgrade task.

Work carefully and in small steps.

Do not redesign the website.
Do not change business positioning.
Do not change public copy unless required by the framework upgrade.
Do not touch CV/PDF content.
Do not touch generated PDF files.
Do not add unrelated dependencies.
Do not reintroduce Blog, Projects, Tags, RSS, Search, Newsletter or Contentlayer.

## Required changes

1. Upgrade Next.js to latest stable:

npm install next@latest

2. Keep React and React DOM compatible.

If npm requires React/React DOM updates, update them to compatible stable versions.

3. Update package-lock.json.

4. Review and fix compatibility issues in:

- next.config.js
- app/layout.tsx
- app/sitemap.ts
- app/robots.ts
- app/seo.tsx
- package.json
- tsconfig.json
- jsconfig.json

5. Do not migrate architecture unless required.

6. Do not introduce static export unless already required by the project.

7. Keep Vercel deployment settings simple:

- install command: npm install or default
- build command: npm run build
- output directory: Next.js default
- root directory: ./

## Checks to run

Run:

npm install next@latest

Then run:

npm ls next
npm ls react react-dom

Then run:

npm run lint
npm run type-check
npm run build

If build fails, fix only the issues directly caused by the upgrade.

If lint/type-check fails due to existing unrelated issues, report clearly and do not make broad unrelated refactors.

## Route smoke check

If possible, run local dev server and check:

- /
- /services
- /about
- /contact
- /sitemap.xml
- /robots.txt

Deleted routes should remain 404:

- /blog
- /projects
- /tags
- /feed.xml

## Expected result

- package.json updated
- package-lock.json updated
- npm ls next shows latest stable Next.js
- lint passes
- type-check passes
- build passes
- project is ready to push and redeploy on Vercel

## Output format

Answer in Russian with:

1. Summary
2. Files changed
3. Next.js version before and after
4. React/React DOM versions before and after
5. Compatibility fixes made
6. Checks run
7. Build result
8. Whether it is ready to push and redeploy on Vercel
9. Remaining risks or follow-up recommendations
