# Task: Improve local CV PDF readability

You are working on Markdown-based CV PDF generation.

Current files:

- `docs/profile/cv-lead-data-engineer.md`
- `docs/profile/consultant-profile.md`
- `scripts/make-cv.sh`

Current issue:
The generated PDF works, but it looks like a raw Pandoc output. It is too dense, has weak visual hierarchy, awkward hyphenation artifacts, and some headings may appear as raw Markdown text.

Goal:
Improve PDF readability while keeping the setup simple, local-first, and maintainable.

Important:
Do not add GitHub Actions in this task.
Do not add photo support in this task.
Do not use Awesome-CV yet.
Do not add external fonts.
Do not add heavy LaTeX templates.
Do not redesign the whole document.
Do not change the professional positioning.
Do not touch unrelated files.

## Required improvements

### 1. Fix heading rendering

Ensure Markdown headings render correctly in PDF.

Check that headings such as:

- Lyte — Senior Data Engineer
- Godel Technologies Europe — Data / Big Data Engineer
- Center Information Technology — Leading Technical Specialist

do not appear with raw `###` text in the PDF.

If needed, adjust Markdown heading levels, blank lines before headings, or Pandoc options.

### 2. Reduce awkward hyphenation

The generated PDF currently contains awkward word breaks and hidden hyphenation artifacts.

Improve Pandoc / LaTeX settings to reduce ugly hyphenation.

Prefer simple settings:

- reduce or disable aggressive hyphenation
- use better line-breaking settings
- avoid strange hidden soft-hyphen characters in Markdown content

Search the Markdown files for unusual soft hyphen or non-standard characters and replace them with normal spaces or normal hyphens where appropriate.

### 3. Improve visual hierarchy

Improve the visual hierarchy using simple Pandoc / LaTeX variables or a lightweight header include.

Acceptable improvements:

- better section spacing
- clearer headings
- reasonable margins
- readable font size
- clickable links
- better list spacing
- more professional color for links/headings

Do not over-design.

### 4. Keep CV recruiter-friendly

For `cv-lead-data-engineer.md`, keep the PDF suitable for normal job search / B2B contracts.

Do not overuse consulting or future company branding.

The document should look like:

- Lead Data Engineer
- Technical Data Lead
- hands-on architecture and delivery profile

### 5. Keep consultant profile separate

For `consultant-profile.md`, it can remain more consulting-oriented.

Do not merge it with the job-search CV.

## Suggested technical approach

Prefer one of these simple approaches.

### Option A — improve Pandoc variables in `scripts/make-cv.sh`

Tune:

- margins
- fontsize
- link colors
- section spacing if possible
- hyphenation behavior if possible

### Option B — add lightweight LaTeX header include

If needed, add:

- `templates/cv-header.tex`

and call it from Pandoc using:

```bash
--include-in-header=templates/cv-header.tex
```

The header should be small and readable.

It may include simple settings for:

- paragraph spacing
- heading spacing
- list spacing
- link colors
- hyphenation reduction
- graphicx support for future photo support, but do not add photo CV yet

Possible lightweight header content:

```tex
\usepackage{xcolor}
\usepackage{hyperref}
\usepackage{enumitem}
\usepackage{titlesec}
\usepackage{microtype}
\usepackage{ragged2e}
\usepackage{graphicx}

\definecolor{CVBlue}{HTML}{0F3A5F}

\hypersetup{
  colorlinks=true,
  linkcolor=CVBlue,
  urlcolor=CVBlue
}

\setlength{\parindent}{0pt}
\setlength{\parskip}{4pt}

\setlist[itemize]{
  topsep=2pt,
  itemsep=2pt,
  parsep=0pt,
  leftmargin=1.2em
}

\titleformat{\section}
  {\Large\bfseries\color{CVBlue}}
  {}
  {0pt}
  {}

\titlespacing*{\section}{0pt}{10pt}{5pt}

\titleformat{\subsection}
  {\large\bfseries}
  {}
  {0pt}
  {}

\titlespacing*{\subsection}{0pt}{7pt}{3pt}

\emergencystretch=3em
\tolerance=1000
\hyphenpenalty=5000
\exhyphenpenalty=5000
```

Adjust only if needed.

## Required `scripts/make-cv.sh` behavior

Review and fix `scripts/make-cv.sh` if necessary.

The script must:

1. Accept Markdown input file as first argument.
2. Accept output directory as second optional argument.
3. Default output directory to `generated`.
4. Generate output PDF name from input basename.

Example:

```bash
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated
```

must generate:

```text
generated/cv-lead-data-engineer.pdf
```

It must not generate a file called just `generated`.

5. Use Pandoc with XeLaTeX.
6. Include `templates/cv-header.tex` if created.
7. Print clear input/output messages.
8. Fail clearly if input file, Pandoc, or XeLaTeX are missing.

Recommended Pandoc command:

```bash
pandoc "$INPUT_FILE" \
  --from markdown+yaml_metadata_block+raw_tex \
  --standalone \
  --pdf-engine=xelatex \
  --metadata lang=en \
  --metadata papersize=a4 \
  --metadata geometry:margin=1.35cm \
  --metadata fontsize=10pt \
  --variable colorlinks=true \
  --variable linkcolor=CVBlue \
  --variable urlcolor=CVBlue \
  --include-in-header=templates/cv-header.tex \
  -o "$OUTPUT_FILE"
```

If using `CVBlue` as a LaTeX color variable causes issues, keep color configuration only inside `templates/cv-header.tex`.

## Generated files policy

Ensure generated PDFs are ignored by git.

If `.gitignore` exists, add or preserve:

```gitignore
generated/*
!generated/.gitkeep
```

Create:

```text
generated/.gitkeep
```

Do not commit generated PDFs.

## Checks to run

Run:

```bash
bash -n scripts/make-cv.sh
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated
./scripts/make-cv.sh docs/profile/consultant-profile.md generated
ls -lh generated/*.pdf
```

If possible, inspect the generated PDFs manually or at least report the output paths.

## Output format

Answer in Russian with:

1. Summary of changes
2. Files changed
3. What was done for headings
4. What was done for hyphenation
5. What was done for visual hierarchy
6. Commands/checks run
7. Generated PDF paths
8. Remaining limitations
