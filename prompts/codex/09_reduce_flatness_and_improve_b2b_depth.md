# Task: Reduce visual flatness and improve B2B depth for seniuts.com

Please improve the current seniuts.com design and section storytelling.

The site already has the correct positioning and clean structure.  
Do not redesign it from scratch.  
Do not change routes.  
Do not add new dependencies.  
Do not add fake clients, fake testimonials, fake logos, fake metrics, or fake case studies.

## Goal

Make the website feel less like a simple starter landing page and more like a serious boutique B2B data consulting company.

Keep the style:

- minimal
- premium
- calm
- technical
- readable
- executive-friendly

But improve:

- visual depth
- section rhythm
- card variety
- trust perception
- storytelling around the process

## Required context

Before changing files, inspect:

- `app/page.tsx`
- `app/services/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `components/Header.tsx`
- `components/Footer.tsx`
- `css/tailwind.css`
- `data/logo.svg`

## Specific improvements

### 1. Hero depth

Improve the hero so it feels less empty and more branded.

Acceptable options:

- subtle background glow
- subtle grid / architecture-style background
- small abstract platform diagram
- stronger visual separation from the next section
- refined badge / CTA layout

Do not make it flashy.  
Do not add heavy animations.  
Do not add random icons.

### 2. Reduce repetitive card style

Currently many sections use similar bordered cards. Add subtle variety.

Examples:

- some cards can have a top accent line
- some sections can use split layout instead of only grids
- some lists can be structured as rows/timeline
- important cards can have slightly stronger background
- avoid making every block look identical

### 3. Improve "How we work"

The current process cards are too dry.

Add short descriptions for each step:

- Discovery
- Architecture
- Delivery
- Stabilization
- Transfer

The section should clearly explain how the engagement moves toward handover.

### 4. Rename "Trust without fake proof"

Avoid making the site sound defensive.

Replace the section title with something more professional, for example:

- Practical foundations, not vendor theatre
- Why teams can trust the approach
- Built on practical engineering principles

Keep the honesty: no fake logos, no fake metrics, no invented case studies.

### 5. Improve light mode depth

Light mode currently feels too flat.

Add subtle depth using:

- light section background variation
- slightly stronger borders
- soft shadows where appropriate
- controlled cyan accents

Do not make it noisy.

### 6. Keep dark mode premium

Dark mode currently looks good. Do not break it.

Only adjust contrast if needed.

### 7. Maintain CTA consistency

Keep primary CTA:

- Book an Architecture Audit

Do not introduce many new CTA variants.

## Technical constraints

- Public website copy must be in English.
- Code, comments, component names, and commit messages must be in English.
- Respond to the user in Russian.
- Keep implementation simple.
- Do not add dependencies.
- Do not reintroduce Blog, Projects, Tags, Search, Newsletter, RSS, Contentlayer, or starter-template features.

## Quality checks

After changes:

1. Run Prettier check.
2. Run npm run lint.
3. Run npm run type-check.
4. Run npm run build.
5. Check routes:
   - `/`
   - `/services`
   - `/about`
   - `/contact`

## Output format

Answer in Russian with:

1. Summary of visual/storytelling changes
2. Files changed
3. Hero changes
4. Process section changes
5. Trust section title chosen
6. Checks run
7. Build result
8. Remaining design recommendations
