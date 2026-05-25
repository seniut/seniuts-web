# Task: Apply MVP positioning and content update for seniuts.com

Please update the current website based on the audit results.

This task should focus on **positioning, content, navigation, CTA, and simple contact flow**.

Do not do a large technical cleanup in this step.
Do not delete large parts of the project unless it is clearly safe.
Do not rewrite the entire project structure.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_BRIEF.md`.
3. Read `docs/WEBSITE_CONTENT_REQUIREMENTS.md`.
4. Review the previous audit findings if available.
5. Inspect the current project structure and existing components.

## Important decisions

The canonical production domain is:

> https://seniuts.com

The company/site name must be written as:

> seniuts.com

Do not use just "seniuts" in public-facing website copy unless it is clearly informal or unavoidable.

For the first version, use a simple contact flow:

- visible email
- visible LinkedIn link
- mailto CTA
- no complex backend contact form
- no broken `/api/contact` usage

Hide Blog, Projects, and Tags from public navigation for now.

Do not fully delete blog/projects/tags in this step unless it is clearly safe and low-risk.

Remove dummy/starter pages from sitemap and public discovery.

## Main business positioning

seniuts.com is a data consulting company.

It helps companies:

- design data strategy
- create target data architecture
- build PoC / MVP data platform foundations
- launch production-ready data platforms
- enable or assemble teams
- transfer ownership to the client's team
- optionally provide short-term stabilization support

The company must not look like:

- a freelancer profile
- a generic outsourcing company
- a staffing agency
- a long-term project owner

The company should look like:

- a boutique data consulting company
- a practical data architecture partner
- a launch partner for production-ready data platforms
- a handover-first consulting company

## Primary positioning statement

Use this idea across the site:

> We design and launch production-ready data platforms, then transfer ownership to your team.

## Main CTA

The primary CTA must be:

> Book an Architecture Audit

The secondary CTA can be:

> View Services

## Required Home page changes

Update the Home page so that a busy CTO / Head of Data can understand the offer in under 30 seconds.

The Home page must include these sections:

### 1. Hero

Include:

- clear headline
- clear subheadline
- primary CTA: `Book an Architecture Audit`
- secondary CTA: `View Services`

Preferred hero direction:

Headline:

> Data platforms designed to launch — and built to be handed over.

Subheadline:

> seniuts.com helps companies design, build, and transfer production-ready data platform foundations without long-term vendor dependency.

### 2. Problem section

Explain the typical customer problems:

- data chaos
- fragile pipelines
- unclear ownership
- slow reporting
- no scalable data foundation

Keep it concise.

### 3. Services preview

Show three service cards:

1. Architecture & Strategy Audit
2. PoC / MVP Delivery
3. Launch & Transfer

Each card should explain the outcome, not just the activity.

### 4. How we work

Show this flow:

> Discovery → Architecture → Delivery → Stabilization → Transfer

Keep it simple and readable.

### 5. Why seniuts.com

Explain:

- senior hands-on expertise
- practical architecture
- product mindset
- handover-first model

### 6. Final CTA

Add a strong bottom CTA:

> Start with an Architecture Audit

Link it to `/contact`.

## Required Services page changes

Update the Services page around exactly three packages.

### 1. Architecture & Strategy Audit

Duration:

> 1–2 weeks

Outcome:

> Clear target architecture and roadmap.

Deliverables:

- current state assessment
- target architecture
- roadmap
- risks and quick wins
- technology recommendations
- cost and scalability considerations

### 2. PoC / MVP Delivery

Duration:

> 3–6 weeks

Outcome:

> Working data platform foundation.

Deliverables:

- selected source ingestion
- raw / curated layers
- orchestration foundation
- data quality checks
- CI/CD basics
- technical documentation

### 3. Launch & Transfer

Duration:

> 6–12 weeks

Outcome:

> Production-ready foundation with ownership transferred to the client.

Deliverables:

- production-ready data platform foundation
- engineering standards
- runbooks
- onboarding
- knowledge transfer
- optional short-term stabilization support

## Required About page changes

Reframe About as company-first, not founder-first.

It should explain:

- why seniuts.com exists
- what kind of companies it helps
- why handover-first consulting matters
- founder credibility as proof, not as the main product

Avoid making it read like a personal CV.

## Required Contact page changes

Update Contact page to support a simple MVP contact flow.

Required:

- headline focused on Architecture Audit
- short explanation of what to send
- visible email placeholder
- visible LinkedIn placeholder
- mailto CTA
- no broken form submission

Use placeholders if real contact details are not configured yet:

- `contact@seniuts.com`
- `https://www.linkedin.com/company/seniuts-com` or `https://www.linkedin.com/in/<profile>`

Do not implement complex email delivery in this step.

## Navigation and footer

Update navigation so that public pages are focused on:

- Home
- Services
- About
- Contact

Hide or remove from navigation:

- Blog
- Projects
- Tags
- Search

Footer must not link to the starter template repository.

Footer should include:

- seniuts.com
- short positioning line
- email
- LinkedIn placeholder
- copyright

## SEO / metadata / sitemap

Update metadata to use:

- site name: `seniuts.com`
- site URL: `https://seniuts.com`
- description aligned with the Launch & Transfer model

Sitemap should include:

- `/`
- `/services`
- `/about`
- `/contact`

Do not include dummy blog/projects/tags pages in sitemap.

## Style requirements

Public website copy must be in English.

Your response to the user must be in Russian.

All code, component names, variable names, comments, and commit-style messages must be in English.

Keep the design:

- minimal
- premium
- readable
- uncluttered
- easy to maintain

Do not add unnecessary dependencies.

Reuse existing components where possible.

## Quality checks

After changes:

1. Run the safest available non-mutating checks.
2. Do not run commands that automatically rewrite files unless explicitly needed.
3. If `npm run lint` uses `--fix`, do not run it in this task.
4. Run build if available and reasonable.
5. Report any failures clearly.

## Output format

After implementation, answer in Russian with:

1. Summary of what changed
2. Files changed
3. How to run locally
4. Checks run
5. Remaining issues
6. Recommended next prompt/task
