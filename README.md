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
docs/profile/        CV and consultant profile Markdown sources
docs/sales/          Sales and outreach documents
scripts/             Local tooling (PDF generation, photo preparation)
templates/           LaTeX header for PDF generation
generated/           Generated PDFs (git-ignored, kept via .gitkeep)
prompts/codex/       Codex task prompts used during implementation
public/              Static favicons
```

## Deployment

The site is deployed on **Vercel**.

| Setting           | Value                     |
| ----------------- | ------------------------- |
| Platform          | Vercel                    |
| Install command   | `npm install`             |
| Build command     | `npm run build`           |
| Output directory  | Next.js default (`.next`) |
| Source            | GitHub repository         |
| Production branch | `main`                    |
| Domain            | `seniuts.com`             |

No Vercel-specific configuration files are required. Connect the GitHub repository in the Vercel dashboard and set the custom domain to `seniuts.com`.

Do not set the `EXPORT` environment variable on Vercel — it enables static export mode used only for GitHub Pages.

## PDF Generation

CV and consulting documents are generated as PDFs from Markdown sources using Pandoc + XeLaTeX.

See [docs/pdf-pipeline.md](docs/pdf-pipeline.md) for setup, local commands, and GitHub Actions details.

## Project Instructions

Important project guidance lives in:

- `AGENTS.md`
- `docs/PROJECT_BRIEF.md`
- `docs/WEBSITE_CONTENT_REQUIREMENTS.md`
- `prompts/codex/`

Public website copy should stay in English. Internal assistant responses to the project owner are normally in Russian.

## Package Manager

Use npm for local development and CI-related commands. `package-lock.json` is the active lockfile.

## Developer Tooling

### rtk — Token-Optimized Shell Proxy

[rtk](https://github.com/rtk-ai/rtk) is a CLI proxy that compresses noisy command output (git, build, lint, grep) before it reaches the AI agent, reducing token consumption by 60–90%.

**When it activates automatically:**

- Copilot: a PreToolUse hook in `.github/hooks/rtk-rewrite.json` transparently rewrites qualifying shell commands before they run. No manual action needed.
- Codex: instructions in `~/.codex/AGENTS.md` and `~/.codex/RTK.md` tell the agent to prefix commands with `rtk`.

**Typical usage:**

```bash
rtk git status
rtk git diff
rtk npm run lint
rtk npm run build
rtk rg <pattern>
```

**Do not use rtk** when exact raw stdout is required (stack traces, migration output, exact diffs for debugging).

**Meta commands:**

```bash
rtk gain              # Token savings dashboard
rtk gain --history    # Per-command savings history
rtk proxy <cmd>       # Run raw without filtering
```

---

### crit — Inline Code Review for AI Agents

[crit](https://crit.md) is a local-first review tool that lets you leave inline comments on diffs, plans, live apps, or HTML artifacts. The agent reads those comments and revises its work.

**When it activates automatically:**

- Both Copilot and Codex auto-discover the `crit` and `crit-cli` skills installed under `.agents/skills/` (Codex) and `.github/skills/` (Copilot). No manual invocation is needed for the skills themselves.
- The `crit-cli` skill activates when the agent needs to work with review files, share a review, or sync to a PR.

**Starting a review loop:**

```text
/crit          — in Copilot chat
$crit          — in Codex chat
```

**Review modes:**

| Mode               | Command                          |
| ------------------ | -------------------------------- |
| Code diff / branch | `crit`                           |
| Plan or doc file   | `crit plan --name <slug> <file>` |
| Running web app    | `crit live <url>`                |
| Static HTML file   | `crit preview <file.html>`       |
| GitHub PR          | `crit --pr <number>`             |

**Re-installing or updating skills:**

```bash
# Project-level (run from repo root)
crit install github-copilot --force
crit install codex --force

# Global (run from ~)
cd ~ && crit install github-copilot --force
cd ~ && crit install codex --force

# Verify
crit check
```
