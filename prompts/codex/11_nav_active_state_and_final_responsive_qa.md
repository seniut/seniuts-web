# Task: Add active navigation state and final responsive QA for seniuts.com

Please make a small final polish pass for the current seniuts.com website.

This task should only cover:

- active state for the current navigation item
- final responsive QA for desktop/mobile
- final dark mode contrast check
- small obvious fixes if needed

Do not redesign the site.
Do not change business positioning.
Do not change page structure.
Do not change the hero headline copy unless it is clearly broken after the previous hero headline refinement task.
Do not add new dependencies.
Do not add new pages.
Do not reintroduce Blog, Projects, Tags, Search, Newsletter, RSS, Contentlayer, or starter-template features.
Do not add fake clients, fake testimonials, fake logos, fake metrics, or fake case studies.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Inspect:
   - `components/Header.tsx`
   - `components/MobileNav.tsx`
   - `components/Footer.tsx`
   - `components/ThemeSwitch.tsx`
   - `app/page.tsx`
   - `app/services/page.tsx`
   - `app/about/page.tsx`
   - `app/contact/page.tsx`
   - `app/contact/ContactForm.tsx`
   - `css/tailwind.css`

## Goals

### 1. Navigation active state

Add a clear but subtle active state for the current route.

Requirements:

- active nav item should be visible on desktop
- active nav item should be visible in mobile menu
- keep style minimal and premium
- do not make navigation visually noisy
- active state should work for:
  - `/`
  - `/services`
  - `/about`
  - `/contact`

The active state should feel consistent with the existing cyan accent and premium minimal style.

### 2. Final responsive QA

Review desktop and mobile layouts for:

- hero diagram wrapping
- CTA button wrapping
- card grids
- timeline/process layout
- header and mobile menu
- footer layout
- contact page layout

Fix only obvious layout issues.

Pay special attention to:

- mobile hero spacing
- whether CTA buttons stack cleanly on small screens
- whether the architecture diagram remains readable
- whether cards have enough spacing on mobile
- whether footer navigation wraps cleanly
- whether mobile menu active state is visible but not noisy

### 3. Dark mode contrast review

Review dark mode for:

- low contrast text
- low contrast borders
- CTA readability
- hero diagram readability
- cards blending too much into background
- footer/header contrast issues

Fix only obvious issues.

Do not make broad visual changes.

### 4. Light mode sanity check

Review light mode for:

- excessive flatness
- weak borders
- low contrast secondary text
- CTA readability
- section separation

Fix only small obvious issues.

Do not redesign light mode.

## Technical constraints

- Public website copy must be in English.
- Code, comments, component names, and commit messages must be in English.
- Respond to the user in Russian.
- Keep implementation simple.
- Do not add dependencies.
- Do not modify package.json unless absolutely required.
- Do not touch unrelated files.

## Quality checks

After changes:

1. Run Prettier check.
2. Run `npm run lint`.
3. Run `npm run type-check`.
4. Run `npm run build`.
5. Check active routes:
   - `/`
   - `/services`
   - `/about`
   - `/contact`

If possible, also manually check:

- desktop light mode
- desktop dark mode
- mobile light mode
- mobile dark mode

## Output format

Answer in Russian with:

1. Summary of changes
2. Files changed
3. Active state implementation
4. Responsive fixes
5. Dark mode fixes
6. Light mode fixes, if any
7. Checks run
8. Build result
9. Remaining recommendations
