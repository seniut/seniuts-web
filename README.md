# seniuts.com Website

This repository contains the public website for **seniuts.com**, a boutique data consulting company focused on data platform architecture, PoC / MVP delivery, production launch, enablement, and ownership transfer.

The site is intentionally small. The public MVP routes are:

- `/`
- `/services`
- `/about`
- `/contact`

Blog, projects, tags, search, newsletter, RSS, Contentlayer, and sample MDX content have been removed from the public site.

## Tech Stack

- Next.js App Router
- React
- Tailwind CSS v4
- TypeScript
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

The local site runs on:

```text
http://localhost:3000
```

Build the production site:

```bash
npm run build
```

Run the production server after a build:

```bash
npm run start
```

## Quality Checks

Run lint:

```bash
npm run lint
```

Run TypeScript checks:

```bash
npm run type-check
```

Run a production build:

```bash
npm run build
```

## Project Structure

```text
app/                 Next.js App Router routes and metadata
components/          Shared UI components
css/                 Tailwind CSS entrypoint and theme tokens
data/                Site metadata, navigation, and logo
docs/                Business and website content requirements
prompts/codex/       Codex task prompts used during implementation
public/              Static favicons
```

## Project Instructions

Important project guidance lives in:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/WEBSITE_CONTENT_REQUIREMENTS.md`
- `prompts/codex/`

Public website copy should stay in English. Internal assistant responses to the project owner are normally in Russian.

## Package Manager

Use npm for local development and CI-related commands. `package-lock.json` is the active lockfile.
