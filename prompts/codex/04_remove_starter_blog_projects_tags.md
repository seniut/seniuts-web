# Task: Safely remove starter Blog, Projects, Tags, and template content from seniuts.com

Please safely remove or fully disable the remaining starter-template features from the seniuts.com website.

This task should focus only on cleanup of unused starter routes/content.

Do not change the core Home, Services, About, or Contact positioning unless required by the cleanup.

Do not redesign the site.

Do not add new business content.

Do not add fake case studies, fake testimonials, fake clients, fake logos, or fake metrics.

## Required context

Before changing files:

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_BRIEF.md`.
3. Read `docs/WEBSITE_CONTENT_REQUIREMENTS.md`.
4. Inspect the current project structure.
5. Identify all remaining starter routes and content related to Blog, Projects, Tags, Search, Newsletter, RSS, and sample authors.

## Goal

The public MVP site should contain only:

- `/`
- `/services`
- `/about`
- `/contact`

The following should not be publicly available or generated:

- `/blog`
- `/projects`
- `/tags`
- sample blog posts
- sample projects
- sample authors
- RSS feed
- starter search functionality
- starter newsletter functionality

## Cleanup requirements

### 1. Routes

Safely remove or disable routes for:

- Blog
- Projects
- Tags
- Search
- Newsletter pages or endpoints, if unused

If removing route files causes imports/build errors, fix them cleanly.

### 2. Content

Remove or disable unused starter content:

- `data/blog/**`
- `data/authors/**` if only sample author data remains
- `data/projectsData.ts` if unused
- generated tag data if no longer needed

Do not remove content that is still required by active pages.

### 3. Components and layouts

Identify unused starter components/layouts related to blog/projects/tags/search/newsletter.

Remove them only if safe.

Do not remove shared components that are still used by active pages.

### 4. Postbuild and generated artifacts

Ensure postbuild does not generate RSS, tag data, or starter blog artifacts.

If `scripts/postbuild.mjs` is now unnecessary, simplify or remove it only if package scripts remain valid.

### 5. Metadata and sitemap

Ensure:

- sitemap includes only `/`, `/services`, `/about`, `/contact`
- robots does not need to block removed routes
- metadata remains aligned with seniuts.com

### 6. Navigation

Ensure navigation remains:

- Home
- Services
- About
- Contact

Do not re-enable Blog, Projects, Tags, or Search.

### 7. Dependency cleanup

Check whether blog/search/content dependencies are still required.

Do not remove dependencies in this task unless it is clearly safe and build/lint pass.

If dependency cleanup is non-trivial, leave it for a separate task and report recommendations.

## Technical constraints

- Public website copy must be in English.
- Code, comments, component names, and commit messages must be in English.
- Respond to the user in Russian.
- Keep implementation simple and maintainable.
- Do not introduce new dependencies.

## Quality checks

After changes:

1. Run Prettier check if available.
2. Run non-mutating lint if available.
3. Run build.
4. Check that these routes work:
   - `/`
   - `/services`
   - `/about`
   - `/contact`
5. Check that these routes do not work or are no longer generated:
   - `/blog`
   - `/projects`
   - `/tags`
   - `/feed.xml`

## Output format

Answer in Russian with:

1. Summary of what changed
2. Files changed
3. Routes removed or disabled
4. Checks run
5. Build result
6. Remaining starter leftovers, if any
7. Recommended next task
