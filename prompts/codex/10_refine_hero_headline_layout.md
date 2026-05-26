# Task: Refine hero headline layout on seniuts.com

Please make a small focused improvement to the hero section.

The current hero headline is too long for the split layout and wraps awkwardly:

> Data platforms designed to launch and built to be handed over.

Please improve the hero headline and typography so it looks balanced in the current split layout.

Do not redesign the page.
Do not change the business positioning.
Do not change routes.
Do not add dependencies.
Do not touch unrelated sections unless required by the hero layout.

## Required change

Replace the current hero headline with:

> Launch-ready data platforms.  
> Built for handover.

Keep the existing subheadline or adjust it only slightly if needed for flow:

> seniuts.com helps companies design, build, and transfer production-ready data platform foundations without long-term vendor dependency.

## Layout requirements

- Keep the split hero layout with the architecture diagram on the right.
- Reduce headline visual heaviness if needed.
- Improve line breaks on desktop.
- Make sure the headline wraps nicely on tablet and mobile.
- Keep the hero premium, calm, and executive-friendly.
- Do not make the headline centered unless the current layout truly requires it.
- Keep CTA buttons unchanged:
  - Book an Architecture Audit
  - View Services

## Files likely to change

- `app/page.tsx`

Possibly:

- related hero classes in the same file only

## Quality checks

After changes:

1. Run Prettier check.
2. Run npm run lint.
3. Run npm run type-check.
4. Run npm run build.
5. Check `/` on desktop and mobile.

## Output format

Answer in Russian with:

1. Summary of hero changes
2. Files changed
3. Headline used
4. Checks run
5. Build result
6. Any remaining visual recommendations
