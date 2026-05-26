# Task: Update contact links across seniuts.com

Please update all public contact details across the seniuts.com website.

Do not redesign the site.
Do not change business positioning.
Do not change routes.
Do not add dependencies.
Do not modify unrelated files.

## Required contact details

Use this email everywhere:

- `vasiliseniuts@gmail.com`

Use this LinkedIn URL everywhere:

- `https://www.linkedin.com/in/vasili-seniuts/`

## Requirements

1. Replace all placeholder emails such as:
   - `contact@seniuts.com`
   - any other placeholder contact email

2. Replace all placeholder LinkedIn URLs such as:
   - company LinkedIn placeholders
   - `/company/seniuts-com`
   - `/in/<profile>`
   - any other placeholder LinkedIn link

3. Update visible text and `href` values.

4. For email links, use:
   - `mailto:vasiliseniuts@gmail.com`

5. Keep public website copy in English.

6. Keep code, variable names, and comments in English.

7. Respond to the user in Russian.

## Files likely to inspect

- `app/contact/page.tsx`
- `app/page.tsx`
- `app/services/page.tsx`
- `app/about/page.tsx`
- `components/Footer.tsx`
- `components/Header.tsx`
- `data/siteMetadata.js`
- any shared contact/config files if present

## Quality checks

After changes:

1. Run Prettier check.
2. Run `npm run lint`.
3. Run `npm run type-check`.
4. Run `npm run build`.

## Output format

Answer in Russian with:

1. Summary of contact updates
2. Files changed
3. Checks run
4. Build result
5. Any remaining placeholder contact details, if found
