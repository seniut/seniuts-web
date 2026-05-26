# Task: Improve production readiness with local fonts and basic deployment safety

Please improve the seniuts.com website production readiness.

This task should focus on:

- removing dependency on remote Google Fonts during build
- using local or system fonts in a clean way
- verifying metadata and deployment basics
- keeping the project simple and maintainable

Do not redesign the website.
Do not change the business positioning.
Do not add new pages.
Do not add fake proof, testimonials, clients, logos, or metrics.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Inspect `app/layout.tsx`.
3. Inspect font usage across the project.
4. Inspect `css/tailwind.css`.
5. Inspect `package.json`.
6. Inspect `data/siteMetadata.js`.
7. Inspect Next.js configuration.

## Goal

The project should build reliably without network access to Google Fonts.

The website should keep a clean, professional typography setup.

Prefer:

- `next/font/local` if local font files already exist in the repository
- `next/font/google` only if it does not cause build/network issues
- system font stack if this is the simplest and most reliable option

Do not add font files from external sources unless they already exist in the repository.

If local font files do not exist, use a clean system font stack.

## Requirements

### 1. Font setup

Check current font implementation.

If the project currently uses remote Google Fonts, remove that dependency.

Use one of these approaches:

Preferred simple approach:

- use a clean system font stack in CSS/Tailwind
- avoid network font fetching during build

Alternative:

- use `next/font/local` only if local font files already exist

### 2. Metadata review

Verify that metadata is aligned with:

- site name: `seniuts.com`
- canonical URL: `https://seniuts.com`
- description: data platform consulting, architecture, PoC/MVP, Launch & Transfer

Do not add raw fake social preview images if they do not exist.

### 3. Build and runtime safety

Ensure:

- `npm run lint` passes
- `npm run type-check` passes
- `npm run build` passes
- active routes work:
  - `/`
  - `/services`
  - `/about`
  - `/contact`

### 4. Keep it simple

Do not introduce new dependencies.

Do not reintroduce Google Fonts if network reliability is an issue.

Do not touch unrelated files.

## Output format

Answer in Russian with:

1. Summary of what changed
2. Font strategy chosen
3. Files changed
4. Checks run
5. Build result
6. Remaining production-readiness recommendations
