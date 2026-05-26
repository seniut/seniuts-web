# Task: Visual polish for seniuts.com — premium minimal consulting website

Please visually polish the current seniuts.com website.

This task should focus on improving the existing design without changing the core positioning, routes, or business model.

Do not redesign the website from scratch.
Do not add new dependencies.
Do not add fake clients, fake testimonials, fake logos, fake metrics, or fake case studies.
Do not reintroduce Blog, Projects, Tags, Search, Newsletter, RSS, Contentlayer, or starter-template features.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_BRIEF.md`.
3. Read `docs/WEBSITE_CONTENT_REQUIREMENTS.md`.
4. Inspect:
   - `app/page.tsx`
   - `app/services/page.tsx`
   - `app/about/page.tsx`
   - `app/contact/page.tsx`
   - `components/Header.tsx`
   - `components/Footer.tsx`
   - `data/logo.svg`
   - `css/tailwind.css`

## Goal

Make the site feel more:

- premium
- calm
- executive-level
- trustworthy
- modern
- readable
- less starter-like

Keep the implementation simple and maintainable.

## Design direction

Prefer:

- better spacing and section rhythm
- stronger typography hierarchy
- refined cards
- subtle borders
- restrained backgrounds
- consistent CTA styling
- cleaner header and footer
- logo usage if already available
- good mobile readability

Avoid:

- heavy gradients
- excessive animations
- decorative clutter
- random icons
- large dependency additions
- over-engineered components

## Specific improvements

### 1. Header

Improve header clarity and visual quality.

Requirements:

- use `data/logo.svg` if it fits the current design
- keep navigation focused:
  - Home
  - Services
  - About
  - Contact
- make the primary CTA visible if it fits the layout:
  - Book an Architecture Audit
- keep mobile navigation clean
- avoid making the header too tall

### 2. Hero

Improve the first screen.

Requirements:

- stronger visual hierarchy
- clear headline
- clear subheadline
- primary CTA: Book an Architecture Audit
- secondary CTA: View Services
- keep the existing business positioning

Optional:

- add a subtle background pattern or border treatment only if it remains minimal

### 3. Sections

Improve section rhythm across Home, Services, About, Contact.

Requirements:

- consistent max-width
- consistent vertical spacing
- readable card grids
- better distinction between sections
- no visual clutter

### 4. Cards

Improve service/trust/outcome cards.

Requirements:

- consistent padding
- consistent border/radius/shadow
- clear headings
- readable body text
- good mobile stacking

### 5. CTA blocks

Make CTA blocks visually consistent.

Required CTA text:

- Book an Architecture Audit
- Start with an Architecture Audit
- Discuss Your Data Platform

Do not introduce too many CTA variants.

### 6. Footer

Polish footer layout.

Requirements:

- include seniuts.com
- include short positioning line
- include email and LinkedIn
- include focused navigation
- keep it clean and not starter-like

## Technical constraints

- Public website copy must be in English.
- Code, comments, component names, and commit messages must be in English.
- Respond to the user in Russian.
- Keep the project simple.
- Reuse existing patterns.
- Do not add new dependencies.
- Do not change package manager.

## Quality checks

After changes:

1. Run Prettier check.
2. Run npm run lint.
3. Run npm run type-check.
4. Run npm run build.
5. Check active routes:
   - `/`
   - `/services`
   - `/about`
   - `/contact`

## Output format

Answer in Russian with:

1. Summary of visual changes
2. Files changed
3. Whether logo.svg is used and where
4. Checks run
5. Build result
6. Remaining design recommendations
