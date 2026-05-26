# Task: Clean up unused starter dependencies and documentation for seniuts.com

Please clean up unused starter-template dependencies, scripts, and documentation after removing Blog / Projects / Tags / Search / Newsletter / RSS.

This task should focus only on dependency cleanup and documentation cleanup.

Do not change the main website content or visual design unless required by cleanup.

Do not reintroduce Blog, Projects, Tags, Search, Newsletter, RSS, Contentlayer, or starter-template features.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Inspect `package.json`.
3. Inspect lockfiles.
4. Inspect `next.config.js`.
5. Inspect current project structure.
6. Check whether Contentlayer, MDX, search, RSS, newsletter, or blog-related packages are still used anywhere.

## Goal

The project should be simpler and easier to maintain for a technical founder.

Remove dependencies and scripts that are no longer needed after deleting:

- Blog routes
- Projects routes
- Tags routes
- Search
- Newsletter endpoint
- RSS generation
- Contentlayer integration
- sample MDX content

## Cleanup requirements

### 1. package.json

Review dependencies and devDependencies.

Remove packages only if they are clearly unused.

Likely candidates to check:

- contentlayer2
- next-contentlayer2
- pliny
- kbar
- reading-time
- github-slugger
- unist-util-visit
- rehype / remark packages used only for MDX/blog
- rss-related packages
- search-related packages
- newsletter-related packages

Do not remove Tailwind, Next.js, React, TypeScript, ESLint, Prettier, or packages used by active pages/components.

### 2. Scripts

Review package scripts.

Remove or simplify scripts related to:

- contentlayer generation
- RSS generation
- tag generation
- blog postbuild artifacts

Keep scripts needed for:

- dev
- build
- start
- lint
- prettier/check
- type-check if present

If `postbuild` is now unnecessary, remove it from scripts or simplify it cleanly.

### 3. Config files

Clean up references to removed systems from:

- `next.config.js`
- TypeScript config if applicable
- ESLint/Prettier config only if required
- generated type references if obsolete

Do not break Next.js App Router.

### 4. Documentation

Update or replace starter README content.

README should briefly explain:

- this is the website for seniuts.com
- how to install dependencies
- how to run locally
- how to build
- project structure
- instruction files: AGENTS.md, docs/, prompts/codex/

Remove references to the original starter template as the main project identity.

It is okay to keep a small attribution note if needed, but the README should primarily describe seniuts.com.

### 5. Lockfiles

After dependency cleanup, update the correct lockfile.

Check whether the project uses npm or yarn.

If both lockfiles exist, report this clearly and recommend one package manager.

Do not delete a lockfile unless you are sure it is safe.

## Technical constraints

- Public website copy must remain in English.
- Code, comments, package scripts, and documentation should be in English.
- Respond to the user in Russian.
- Keep the project simple and maintainable.
- Do not introduce new dependencies.

## Quality checks

After changes:

1. Install/update dependencies using the existing package manager.
2. Run Prettier check.
3. Run non-mutating lint.
4. Run type-check if available.
5. Run build.
6. Check active routes:
   - `/`
   - `/services`
   - `/about`
   - `/contact`

## Output format

Answer in Russian with:

1. Summary of what changed
2. Dependencies removed
3. Scripts changed
4. Documentation changed
5. Lockfile/package-manager status
6. Checks run
7. Build result
8. Remaining cleanup recommendations
