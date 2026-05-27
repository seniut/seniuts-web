# Task: Full project review after website, docs, and PDF pipeline updates

You are working in the seniuts.com repository.

## Current context

The repository now contains:

- Next.js website for seniuts.com
- Markdown-based CV/profile/sales documents
- Local PDF generation with Pandoc + XeLaTeX
- Optional photo CV generation
- GitHub Actions workflow for generating PDFs
- LinkedIn/consulting one-pager assets

## Goal

Review the project after many updates and identify inconsistencies, stale files, broken assumptions, and production-readiness issues.

This is a review task first. Do not make large changes immediately.

## Areas to inspect

### 1. Website consistency

Review:

- app/page.tsx
- app/services/page.tsx
- app/about/page.tsx
- app/contact/page.tsx
- components/Header.tsx
- components/Footer.tsx
- data/siteMetadata.js
- app/sitemap.ts
- app/robots.ts
- app/layout.tsx
- app/seo.tsx
- public/favicon.svg
- data/logo.svg

Check:

- positioning consistency
- contact email
- LinkedIn URL
- CTA consistency
- no stale starter/blog/projects references
- no broken contact form assumptions
- sitemap/robots correctness
- metadata correctness
- favicon/logo consistency
- whether site still matches current LinkedIn positioning

### 2. Docs and profile assets

Review:

- docs/profile/\*\*
- docs/sales/\*\*
- prompts/codex/\*\*
- README.md

Check:

- duplicate or empty files
- wrong file locations
- stale references to old emails or LinkedIn URLs
- consultant-one-pager duplicates
- whether long consultant profile and one-pager have clear roles
- whether docs explain local PDF generation and GitHub Actions

### 3. PDF pipeline

Review:

- scripts/make-cv.sh
- scripts/prepare-profile-photo.py
- templates/cv-header.tex
- .github/workflows/cv-build.yml
- .gitignore
- generated/.gitkeep

Check:

- generated PDFs are ignored
- workflow uses local script
- workflow does not commit generated PDFs
- dependencies are documented
- Linux/GitHub Actions portability
- no macOS-only font dependency
- reasonable generated output paths

### 4. Project hygiene

Check:

- package.json scripts
- package-lock.json
- next.config.js
- tsconfig/jsconfig
- .github workflows
- stale starter-template files
- unnecessary files
- large committed assets
- generated files accidentally tracked

### 5. Production readiness

Check:

- npm run lint
- npm run type-check
- npm run build
- routes /, /services, /about, /contact
- deleted routes should stay 404: /blog, /projects, /tags, /feed.xml
- PDF workflow file syntax only if local workflow run is not possible

## Important constraints

Do not redesign the site.
Do not change business positioning unless there is a clear inconsistency.
Do not add dependencies.
Do not delete files without explaining why.
Do not make large changes without first reporting a plan.
Do not touch generated PDF files.
Do not reintroduce Blog, Projects, Tags, RSS, Search, Newsletter or Contentlayer.

## Expected output

First produce a review report in Russian with:

1. High-priority issues
2. Medium-priority issues
3. Low-priority cleanup
4. Suggested file deletions, if any
5. Suggested small fixes, if any
6. Commands/checks run
7. Recommended next implementation prompt

If you find only small safe fixes, propose them and wait for confirmation before editing.
