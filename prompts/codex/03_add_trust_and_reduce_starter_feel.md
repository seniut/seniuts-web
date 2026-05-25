# Task: Add trust elements and reduce starter-like feel on seniuts.com

Please improve the current seniuts.com website after the MVP positioning update.

This task should focus on:

- trust-building sections
- stronger executive-level presentation
- reducing the starter-template feeling
- improving visual hierarchy
- keeping the site minimal and easy to maintain

Do not change the core business positioning.
Do not add fake case studies, fake clients, fake testimonials, or fake metrics.
Do not introduce new dependencies.
Do not redesign the entire site.
Do not re-enable Blog, Projects, Tags, Search, or starter-template features.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_BRIEF.md`.
3. Read `docs/WEBSITE_CONTENT_REQUIREMENTS.md`.
4. Inspect current Home, Services, About, Contact, Header, and Footer.
5. Check the current design and component patterns.

## Main positioning to preserve

seniuts.com is a data consulting company that helps companies:

- design data strategy
- create target architecture
- build PoC / MVP foundations
- launch production-ready data platforms
- enable or assemble teams
- transfer ownership to the client's team
- optionally provide short-term stabilization support

Primary message:

> We design and launch production-ready data platforms, then transfer ownership to your team.

Main CTA:

> Book an Architecture Audit

## Improvements required

### 1. Add a "Who this is for" section

Add a concise section, preferably on the Home page, explaining ideal clients:

- scale-ups building their first serious data platform
- mid-size companies with fragile pipelines and unclear ownership
- teams that need architecture before hiring a full data team
- companies that want delivery momentum without long-term vendor dependency

Keep it short and executive-friendly.

### 2. Add a "What you get" section

Add outcome-oriented bullets such as:

- clear target architecture
- working PoC/MVP foundation
- documented engineering standards
- ownership transfer plan
- optional stabilization support

### 3. Add a "Trust without fake proof" section

Since there are no public case studies yet, do not invent clients or numbers.

Instead, add credibility based on experience and operating principles:

- senior hands-on data engineering and architecture experience
- cloud-native and lakehouse expertise
- production-first thinking
- documentation and handover by design
- practical decisions over tool hype

### 4. Improve visual hierarchy

Improve spacing, section rhythm, and readability.

The site should feel:

- premium
- calm
- focused
- technical but readable
- not like a starter template

Avoid:

- excessive gradients
- heavy animations
- random icons
- fake logos
- fake testimonials

### 5. Improve CTA consistency

Ensure the primary CTA is consistently:

> Book an Architecture Audit

It should appear:

- in the hero
- after services
- near the bottom of Home
- on Services
- on Contact

### 6. Keep maintenance simple

Prefer:

- simple arrays for content where appropriate
- small reusable section patterns
- no complicated abstractions

Do not over-engineer.

## Files likely to change

Likely:

- `app/page.tsx`
- `app/services/page.tsx`
- `app/about/page.tsx`
- `components/Footer.tsx`

Maybe:

- existing shared components, if the project already has them

Avoid:

- large dependency changes
- lockfile changes unless necessary
- API routes
- blog/projects/tags cleanup in this step

## Quality checks

After changes:

1. Run Prettier check if available.
2. Run non-mutating lint if available.
3. Run build.
4. If any check fails, explain clearly.

## Output format

Answer in Russian with:

1. Summary of what changed
2. Files changed
3. Checks run
4. Remaining issues
5. Recommended next task
