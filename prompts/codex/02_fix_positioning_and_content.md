# Task: Improve seniuts.com positioning and website content

Please update the website to better communicate the seniuts.com business model.

Before changing files:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_BRIEF.md`.
3. Read `docs/WEBSITE_CONTENT_REQUIREMENTS.md`.
4. Inspect the current website structure.
5. Identify whether the project uses Next.js App Router or Pages Router.
6. Identify the existing styling and component conventions.

## Goal

Improve the site so that it clearly positions **seniuts.com** as a data consulting company that helps clients:

- design data architecture
- build PoC / MVP foundations
- launch production-ready data platforms
- enable or assemble teams
- transfer ownership to the client
- optionally provide short-term stabilization support

The site must not look like a freelancer portfolio or generic outsourcing site.

## Required messaging

Use **seniuts.com** as the company/site name.

Primary positioning:

> We design and launch production-ready data platforms, then transfer ownership to your team.

Main CTA:

> Book an Architecture Audit

Secondary CTA:

> View Services

## Required Home page sections

Please ensure the Home page includes:

1. Hero section
   - strong headline
   - clear subheadline
   - primary CTA
   - secondary CTA

2. Problem / context section
   - data chaos
   - fragile pipelines
   - unclear ownership
   - lack of scalable foundation

3. Services preview
   - Architecture & Strategy Audit
   - PoC / MVP Delivery
   - Launch & Transfer

4. How we work
   - Discovery
   - Architecture
   - Delivery
   - Stabilization
   - Transfer

5. Why seniuts.com
   - senior hands-on expertise
   - practical architecture
   - product mindset
   - handover-first model

6. Final CTA
   - Start with an Architecture Audit

## Required Services page

If a Services page exists, update it.

If it does not exist, create it using the existing project conventions.

The Services page should include three packages:

### Architecture & Strategy Audit

Duration:
1–2 weeks

Outcome:
Clear target architecture and roadmap.

Deliverables:

- current state assessment
- target architecture
- roadmap
- risks and quick wins
- technology recommendations

### PoC / MVP Delivery

Duration:
3–6 weeks

Outcome:
Working data platform foundation.

Deliverables:

- selected source ingestion
- raw / curated layers
- orchestration foundation
- data quality checks
- CI/CD basics
- documentation

### Launch & Transfer

Duration:
6–12 weeks

Outcome:
Production-ready foundation with ownership transferred to the client.

Deliverables:

- production-ready platform foundation
- engineering standards
- runbooks
- onboarding
- knowledge transfer
- optional stabilization support

## Style requirements

- Public copy must be in English.
- Keep copy concise and clear.
- Use a premium but practical tone.
- Avoid buzzwords and generic claims.
- Keep code and comments in English.
- Respond to the user in Russian.

## Technical requirements

- Reuse existing components where possible.
- Do not introduce new dependencies unless necessary.
- Keep the implementation easy to maintain.
- Run available checks from package.json after changes if possible.

## Output format

After implementation, answer in Russian with:

1. What was changed
2. Which files were changed
3. How to run locally
4. Which checks were run
5. Any remaining recommendations
