# Task: Full project review before hosting seniuts.com

You are working in the seniuts.com repository.

## Context

The repository contains:

- Next.js website for seniuts.com
- Local and GitHub Actions PDF generation pipeline
- CV/profile/sales documents
- LinkedIn/consulting one-pager assets

The site is going to be deployed to Vercel soon.

## Goal

Review the project before public hosting and identify issues that should be fixed before deploy.

This is a review task first. Do not make large changes immediately.

## Areas to inspect

1. Website consistency

Review:

- app/page.tsx
- app/services/page.tsx
- app/about/page.tsx
- app/contact/page.tsx
- components/Header.tsx
- components/Footer.tsx
- components/DesktopNav.tsx
- components/MobileNav.tsx
- data/siteMetadata.js
- app/sitemap.ts
- app/robots.ts
- app/layout.tsx
- app/seo.tsx
- public/favicon.svg
- data/logo.svg

Check:

- positioning consistency
- contact email: vasiliseniuts@gmail.com
- LinkedIn URL: https://www.linkedin.com/in/vasili-seniuts/
- CTA consistency
- no stale starter/blog/projects/search/newsletter references
- no broken contact form assumptions
- sitemap/robots correctness
- metadata correctness
- favicon/logo consistency
- whether the site matches current LinkedIn positioning

2. Docs and PDF pipeline

Review:

- docs/profile/\*\*
- docs/sales/\*\*
- scripts/make-cv.sh
- scripts/prepare-profile-photo.py
- templates/cv-header.tex
- .github/workflows/cv-build.yml
- .gitignore
- generated/.gitkeep

Check:

- duplicate or empty files
- wrong file locations
- generated PDFs are ignored
- workflow uses local script
- workflow does not commit generated PDFs
- no macOS-only font dependency
- dependencies are documented

3. Project hygiene

Review:

- package.json
- package-lock.json
- next.config.js
- tsconfig.json
- jsconfig.json
- README.md
- .github/workflows/\*\*

Check:

- stale starter-template files
- unnecessary workflows
- package scripts
- build command compatibility with Vercel
- no generated or large accidental files tracked

4. Production readiness

Run:

- npm run lint
- npm run type-check
- npm run build

If possible, run dev route smoke check for:

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

## Important constraints

Do not redesign the site.
Do not change business positioning unless there is a clear inconsistency.
Do not add dependencies.
Do not delete files without explaining why.
Do not touch generated PDF files.
Do not reintroduce Blog, Projects, Tags, RSS, Search, Newsletter or Contentlayer.
Do not change PDF content in this task.

## Expected output

First produce a review report in Russian with:

1. High-priority issues
2. Medium-priority issues
3. Low-priority cleanup
4. Suggested file deletions, if any
5. Suggested small fixes, if any
6. Commands/checks run
7. Whether the site is ready for Vercel deploy
8. Recommended next implementation prompt

If you find only small safe fixes, propose them and wait for confirmation before editing.
