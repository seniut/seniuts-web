# Task: Make CV PDF generation CI-ready and portable

You are working in a repository with Markdown-based CV PDF generation using Pandoc + XeLaTeX.

## Current files

Current files likely include:

- `scripts/make-cv.sh`
- `templates/cv-header.tex`
- `scripts/prepare-profile-photo.py`
- `docs/profile/cv-lead-data-engineer.md`
- `docs/profile/cv-lead-data-engineer-photo.md`
- `docs/profile/consultant-profile.md`
- `assets/profile/photo-original.jpeg`
- `assets/profile/photo-cv-round.png`
- `generated/.gitkeep`

## Current state

Local PDF generation works on macOS.

The repository can generate:

- `generated/cv-lead-data-engineer.pdf`
- `generated/cv-lead-data-engineer-photo.pdf`
- `generated/consultant-profile.pdf`

The current PDF setup may rely on macOS-only fonts such as `Helvetica Neue`.
This is risky because GitHub Actions runs on Ubuntu and may not have the same fonts.

## Goal

Make PDF generation portable across macOS and Ubuntu / GitHub Actions.

This task prepares the local PDF pipeline for CI, but does not add GitHub Actions yet.

## Important constraints

Do not add GitHub Actions in this task.
Do not redesign the CV.
Do not change professional positioning.
Do not add Awesome-CV.
Do not add heavy templates.
Do not add external font files.
Do not commit generated PDFs.
Do not touch unrelated files.

## Requirements

### 1. Review PDF generation files

Review and update if needed:

- `scripts/make-cv.sh`
- `templates/cv-header.tex`
- `scripts/prepare-profile-photo.py`

Make sure the pipeline remains simple and local-first.

### 2. Remove macOS-only font dependency

Remove dependency on fonts that exist only on macOS, for example:

- `Helvetica Neue`

Use a font that is reliably available in TeX Live on macOS and Ubuntu.

Preferred options:

- TeX Gyre Heros
- TeX Gyre Termes
- Latin Modern Sans
- Latin Modern Roman

Recommended choice:

- Use `TeX Gyre Heros` for a clean sans-serif CV style if it works with XeLaTeX.
- Otherwise use a safe TeX Live default such as Latin Modern.

The final setup should not require installing custom font files.

### 3. Keep visual style professional

Keep the PDF style:

- readable
- clean
- minimal
- recruiter-friendly
- ATS-friendly for the no-photo version
- not over-designed

Do not introduce icons, complex graphics, or decorative layouts.

### 4. Keep links clickable

Make sure links remain clickable in generated PDFs:

- email
- LinkedIn
- GitHub
- other URLs

### 5. Keep all current generated outputs working

The local script must still generate:

```text
generated/cv-lead-data-engineer.pdf
generated/cv-lead-data-engineer-photo.pdf
generated/consultant-profile.pdf
```

### 6. Improve photo size if reasonable

The photo CV PDF is larger because of the PNG.

If reasonable, reduce the generated round photo size while keeping it visually good:

- 300x300 or 400x400 is acceptable
- do not make it blurry
- keep transparent corners
- keep the round avatar effect

Update `scripts/prepare-profile-photo.py` if needed.

### 7. Keep generated files ignored

Generated PDFs must remain ignored by git.

Keep or add these rules in `.gitignore`:

```gitignore
generated/*
!generated/.gitkeep
```

Do not commit generated PDF files.

### 8. Preserve existing source files

Do not rewrite the CV content unless required for portability.

Do not remove:

- no-photo CV
- photo CV
- consultant profile
- photo preparation script
- local PDF generation script

## Checks to run

Run:

```bash
bash -n scripts/make-cv.sh
python3 -m py_compile scripts/prepare-profile-photo.py
python3 scripts/prepare-profile-photo.py
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer-photo.md generated
./scripts/make-cv.sh docs/profile/consultant-profile.md generated
ls -lh generated/*.pdf
```

If Pillow is missing, explain that this command is required:

```bash
python3 -m pip install pillow
```

If some command cannot be run, explain exactly what was not run and why.
Do not claim success for commands that were not executed.

## Output format

Answer in Russian with:

1. Summary
2. Files changed
3. Font strategy used
4. Photo size handling
5. Checks run
6. Generated PDF paths and sizes
7. Remaining limitations
8. Recommended next step
