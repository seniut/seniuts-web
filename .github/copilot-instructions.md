# Copilot Instructions for seniuts.com

## Project Context

This repository contains the website for **seniuts.com**.

seniuts.com is a data consulting company that helps companies design, launch, and transfer modern data platforms. The website must present seniuts.com as a consulting company, not as a personal CV, freelancer profile, generic outsourcing vendor, or starter-template blog.

Core positioning:

> We design and launch production-ready data platforms, then transfer ownership to your team.

## Business Positioning

seniuts.com helps companies:

- Design data strategy and target architecture.
- Build PoC / MVP data platform foundations.
- Launch production-ready data platforms.
- Enable or assemble an internal team.
- Transfer ownership to the client's team.
- Provide optional short-term stabilization support.

The preferred model is **Launch & Transfer**. Support may be mentioned, but it should be framed as optional stabilization support, not indefinite vendor ownership.

The main entry offer is **Architecture & Strategy Audit**.

Primary CTA:

- `Book an Architecture Audit`

Acceptable alternate CTAs:

- `Start with an Architecture Audit`
- `Discuss Your Data Platform`
- `Plan Your Data Platform`

## Target Audience

Write and design for:

- CTOs
- Heads of Data
- VP Engineering
- Founder / COO profiles at scale-ups
- Technology leaders in mid-size companies

Typical customer context:

- Data is fragmented or chaotic.
- There is no strong internal data platform team yet.
- The company needs a practical platform foundation quickly.
- Leaders want architecture, standards, and delivery guidance.
- The company does not want permanent dependency on an external vendor.

## Core Service Packages

The site should present three primary packages:

1. **Architecture & Strategy Audit**
   - Typical duration: 1-2 weeks.
   - Deliverables: current state assessment, target architecture, roadmap, technology recommendations, risks and quick wins, cost and scalability considerations.

2. **PoC / MVP Delivery**
   - Typical duration: 3-6 weeks.
   - Deliverables: selected source ingestion, raw / curated layers, orchestration foundation, CI/CD foundation, data quality checks, observability basics, demo, and technical documentation.

3. **Launch & Transfer**
   - Typical duration: 6-12 weeks.
   - Deliverables: production-ready platform foundation, engineering standards, runbooks, team onboarding, knowledge transfer, optional short-term stabilization support.

## Writing Rules

- Public website copy must be in English.
- Code, variable names, component names, comments, commit messages, and documentation inside the repo must be in English.
- In chat responses to the repository owner, Russian is preferred unless the user asks otherwise.
- Always write the company name as **seniuts.com** in public copy.
- Do not write Russian comments in code.

Tone:

- Professional.
- Clear.
- Premium but not arrogant.
- Concise.
- Business-oriented.
- Technical enough for a CTO / Head of Data.
- Readable for non-technical decision makers.

Avoid:

- Buzzword-heavy copy.
- Exaggerated claims.
- Generic outsourcing language.
- "We do everything" positioning.
- Long paragraphs.
- Vague phrases such as "unlock the power of data" unless supported by concrete outcomes.

## Trust And Proof Constraints

Do not invent:

- Clients.
- Testimonials.
- Logos.
- Case studies.
- Metrics.
- Revenue numbers.
- Team size.
- Certifications.
- Partnerships.

If credibility is needed, use honest signals:

- Senior hands-on data engineering experience.
- Practical architecture principles.
- Production-first thinking.
- Documentation and handover approach.
- Cloud-native and lakehouse expertise.

## Design Direction

The website should feel:

- Minimal.
- Modern.
- Premium.
- Readable.
- Fast.
- Uncluttered.

Prefer:

- Strong typography.
- Clear spacing.
- Simple layout.
- High contrast.
- Restrained animations.
- Professional color palette.
- Reusable components.

Avoid:

- Visual clutter.
- Too many gradients.
- Too many icons.
- Excessive animations.
- Stock-photo-heavy design.
- Broad redesigns when the user asks for a focused fix.

## Technical Context

Current stack:

- Next.js App Router.
- React.
- TypeScript.
- Tailwind CSS.
- npm.

Current public MVP routes:

- `/`
- `/services`
- `/about`
- `/contact`

The project does **not** currently use:

- Blog.
- Projects.
- Tags.
- Search.
- Newsletter.
- RSS.
- Contentlayer.
- MDX content pipeline.

Do not reintroduce these features or routes unless the user explicitly asks.

Do not reintroduce public routes for:

- `/blog`
- `/projects`
- `/tags`
- `/feed.xml`
- `/api/newsletter`

## Contact Details

Use these contact details unless the user explicitly changes them:

- Email: `vasiliseniuts@gmail.com`
- Email link: `mailto:vasiliseniuts@gmail.com`
- LinkedIn: `https://www.linkedin.com/in/vasili-seniuts/`

At the current MVP stage, using the founder's personal email and LinkedIn is acceptable.

## Development Guidelines

Before changing code:

- Inspect the relevant files and existing conventions.
- Keep changes small and scoped.
- Prefer the current git diff as the working context.
- Do not scan or rewrite unrelated parts of the repository.

When modifying code:

- Reuse existing components and local patterns.
- Avoid adding dependencies unless clearly justified.
- Keep the site easy to maintain by one technical founder.
- Do not over-engineer.
- Do not modify unrelated files.
- Do not revert user changes unless explicitly asked.

Package manager:

- Prefer `npm`.

Useful commands:

```bash
npm install
npm run dev
npm run lint
npm run type-check
npm run build
```

After code changes, run the relevant checks when possible:

- `npm run lint`
- `npm run type-check`
- `npm run build`

If dependencies changed, also run the install check.

## Definition Of Done

A change is done only when:

- It supports the seniuts.com positioning.
- Public copy remains English.
- Code and comments remain English.
- The site remains simple to maintain.
- The design remains clean and readable.
- No unnecessary complexity is introduced.
- Relevant checks are run or the reason for skipping them is explained.

<!-- rtk-instructions v2 -->

# RTK — Token-Optimized CLI

**rtk** is a CLI proxy that filters and compresses command outputs, saving 60-90% tokens.

## Rule

Always prefix shell commands with `rtk`:

```bash
# Instead of:              Use:
git status                 rtk git status
git log -10                rtk git log -10
cargo test                 rtk cargo test
docker ps                  rtk docker ps
kubectl get pods           rtk kubectl pods
```

## Meta commands (use directly)

```bash
rtk gain              # Token savings dashboard
rtk gain --history    # Per-command savings history
rtk discover          # Find missed rtk opportunities
rtk proxy <cmd>       # Run raw (no filtering) but track usage
```

<!-- /rtk-instructions -->
