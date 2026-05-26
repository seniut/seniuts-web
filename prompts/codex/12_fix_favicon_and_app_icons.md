# Task: Fix favicon and app icons for seniuts.com

Please fix the browser tab favicon and app icons so they use the seniuts.com logo, not a starter-template or unrelated icon.

Do not redesign the website.
Do not change page content.
Do not change business positioning.
Do not add dependencies.
Do not touch unrelated files.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Inspect:
   - `data/logo.svg`
   - `app/favicon.ico`
   - `app/icon.*`
   - `app/apple-icon.*`
   - `public/favicon.*`
   - `public/static/favicons/**`
   - `app/layout.tsx`
   - `data/siteMetadata.js`

## Goal

The browser tab icon should visually match the seniuts.com logo.

Use the existing `data/logo.svg` as the source of truth if possible.

## Requirements

1. Remove or replace any starter-template favicon assets.
2. Ensure Next.js App Router favicon conventions are followed.
3. Prefer a simple SVG favicon if supported by the current setup.
4. If an `.ico` file already exists and is not the seniuts.com logo, replace it or remove it if not needed.
5. Ensure metadata does not reference old starter icons.
6. Keep implementation simple and maintainable.

## Expected files

Likely files to add/update:

- `app/icon.svg`
- `app/favicon.ico` if needed
- `app/apple-icon.png` if already used or easy to generate
- `app/layout.tsx` if metadata icons need updating

Do not add heavy tooling just to generate favicons.

## Quality checks

After changes:

1. Run Prettier check if applicable.
2. Run `npm run lint`.
3. Run `npm run type-check`.
4. Run `npm run build`.
5. Start local dev server and verify the tab icon is no longer the old starter icon.

## Output format

Answer in Russian with:

1. Summary of favicon changes
2. Files changed
3. Which icon source was used
4. Checks run
5. Build result
6. Browser/cache note if favicon still appears old
