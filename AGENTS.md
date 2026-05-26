# AGENTS.md — seniuts.com Project Instructions

## Agent workflow

Before making changes:

- Read the relevant project instructions.
- Use available skills under `.agents/skills` when they match the task.
- Start with a short plan and wait for confirmation for non-trivial changes.
- Work in small scoped steps.
- Prefer the current git diff as the main working scope.
- Do not scan the whole repository unless explicitly asked.

## RTK usage

If `rtk` is available in PATH, use it for large-output shell commands.

Prefer RTK for noisy commands such as:

- `rtk git status`
- `rtk git diff`
- `rtk git diff --name-only`
- `rtk npm test`
- `rtk npm run lint`
- `rtk npm run build`
- `rtk rg`
- `rtk grep`

If `rtk` is not available, use the normal shell commands instead.

For debugging:

1. Use summarized output first when possible.
2. Inspect raw output before final root-cause conclusions.

Do not use RTK when exact stdout is required or when the command output is already small.

## Review workflow

Use `crit` only when a task needs:

- structured UI review
- plan review
- large diff review
- iterative feedback loops

Use `$crit` only when the user explicitly asks for a review loop or when the task clearly requires structured review.

Do not use `crit` for simple one-line edits or small mechanical changes.

## Project identity

This repository contains the website for **seniuts.com**.

The company name must always be written as **seniuts.com**, not just "seniuts", unless referring to the brand informally inside internal notes.

seniuts.com is a data consulting company focused on helping companies design, launch, and transfer modern data platforms.

The company is not positioned as a freelancer profile and not as a long-term outsourcing body shop.

## Core business idea

seniuts.com helps companies:

1. Design data strategy and target architecture.
2. Build PoC / MVP data platform foundations.
3. Launch production-ready data platforms.
4. Enable or assemble a team.
5. Transfer ownership to the client's team.
6. Provide optional short-term stabilization support.

The core positioning is:

> We design and launch production-ready data platforms, then transfer ownership to your team.

## Strategic positioning

The website must communicate the following ideas clearly:

- seniuts.com is a consulting company, not a personal CV.
- The offer is built around architecture, PoC/MVP delivery, launch, enablement, and handover.
- The company avoids unnecessary long-term project ownership.
- The preferred model is "Launch & Transfer".
- Support can be provided, but it should be framed as optional stabilization support, not indefinite ownership.
- The main entry offer should be an "Architecture & Strategy Audit".

## Website language

All public website copy must be in English.

The assistant should normally answer the user in Russian.

All code, variable names, component names, commit messages, comments, and documentation inside the codebase must be in English.

Do not write Russian comments inside code.

## Website tone

The tone of the website must be:

- professional
- clear
- premium but not arrogant
- concise
- business-oriented
- technical enough for CTO / Head of Data
- readable for non-technical decision makers

Avoid:

- buzzword-heavy copy
- exaggerated claims
- generic outsourcing language
- "we do everything" positioning
- long paragraphs
- vague phrases like "unlock the power of data" unless supported by concrete outcomes

## Target audience

Primary audience:

- CTO
- Head of Data
- VP Engineering
- Founder / COO of a scale-up
- Technology leader in a mid-size company

Typical customer situation:

- The company has data chaos.
- The company has no strong internal data platform team.
- The company needs to start a data platform quickly.
- The company wants architecture, standards, and delivery guidance.
- The company does not want to depend forever on an external vendor.

## Core service packages

The site should present three primary packages.

### 1. Architecture & Strategy Audit

Purpose:
Assess the current data situation and create a practical roadmap.

Typical duration:
1–2 weeks.

Deliverables:

- Current state assessment
- Target architecture
- Data platform roadmap
- Technology recommendations
- Risks and quick wins
- Cost and scalability considerations

### 2. PoC / MVP Delivery

Purpose:
Build a working foundation that proves the architecture and creates momentum.

Typical duration:
3–6 weeks.

Deliverables:

- Ingestion for selected sources
- Raw / curated data layers
- Orchestration foundation
- CI/CD foundation
- Data quality checks
- Observability basics
- Demo and technical documentation

### 3. Launch & Transfer

Purpose:
Launch a production-ready foundation and transfer ownership to the client's team.

Typical duration:
6–12 weeks.

Deliverables:

- Production-ready data platform foundation
- Engineering standards
- Runbooks
- Team onboarding
- Knowledge transfer
- Optional short-term stabilization support

## Main CTA

The primary CTA should be:

> Book an Architecture Audit

Alternative CTA labels:

- Start with an Architecture Audit
- Discuss Your Data Platform
- Plan Your Data Platform

The secondary CTA can be:

> View Services

## Design direction

The website should look:

- minimal
- modern
- premium
- readable
- fast
- uncluttered

Prefer:

- strong typography
- clear spacing
- simple layout
- high contrast
- restrained animations
- professional color palette
- reusable components

Avoid:

- visual clutter
- too many gradients
- too many icons
- excessive animations
- stock-photo-heavy design

## Technical expectations

Before changing code:

1. Inspect the project structure.
2. Identify the framework and router style.
3. Check whether the project uses Next.js App Router or Pages Router.
4. Check styling approach.
5. Check package manager.
6. Check existing components and conventions.

When modifying code:

- Prefer small, incremental changes.
- Reuse existing components when possible.
- Keep components simple and readable.
- Avoid adding new dependencies unless clearly justified.
- Keep the site easy to maintain by one technical founder.
- Do not over-engineer.

## Quality checks

After code changes, run the available checks if possible:

- install check if dependencies changed
- lint
- type check
- build

Use the commands already present in package.json.

If a command fails, explain why and suggest the smallest fix.

## Definition of done

A task is done only when:

- The change supports the seniuts.com positioning.
- Public website copy is in English.
- Code and code comments are in English.
- The site remains simple to maintain.
- The design is clean and readable.
- The implementation does not introduce unnecessary complexity.
- The user receives a concise Russian summary of what changed and what to do next.

## Contact details

Use these contact details across the website unless the user explicitly changes them:

- Email: `vasiliseniuts@gmail.com`
- Email link: `mailto:vasiliseniuts@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/vasili-seniuts/`

For the current MVP stage, it is acceptable to use the founder's personal LinkedIn and email.

Later, the project may move to domain-based email such as `contact@seniuts.com` and a company LinkedIn page.

## Trust and proof constraints

Do not invent:

- clients
- testimonials
- logos
- case studies
- metrics
- revenue numbers
- team size
- certifications
- partnerships

If proof is needed, use honest credibility signals:

- founder's senior hands-on data engineering experience
- practical architecture principles
- production-first thinking
- documentation and handover approach
- cloud-native and lakehouse expertise

## Current technical state

The project uses:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- npm as the package manager

The project does not currently use:

- Blog
- Projects
- Tags
- Search
- Newsletter
- RSS
- Contentlayer
- MDX content pipeline

Do not reintroduce these features unless the user explicitly asks.

## Current public route scope

The public MVP website should contain only:

- `/`
- `/services`
- `/about`
- `/contact`

Do not reintroduce public routes for:

- `/blog`
- `/projects`
- `/tags`
- `/feed.xml`
- `/api/newsletter`

unless the user explicitly asks for them.

## Local Development

When giving commands, prefer npm unless the project uses another package manager.

Common commands may include:

```bash
npm install
npm run dev
npm run lint
npm run build
```
