# PDF Generation Pipeline

This document explains how to generate CV and consulting PDF documents locally and via GitHub Actions.

## Documents

| File                                    | Purpose                                                                         |
| --------------------------------------- | ------------------------------------------------------------------------------- |
| `docs/profile/cv-lead-data-engineer.md` | Single CV source. Generates both no-photo and photo PDFs.                       |
| `docs/profile/consultant-profile.md`    | Long detailed consultant profile. Source document, not for direct distribution. |
| `docs/sales/consulting-one-pager.md`    | Short client-facing one-pager for outreach and LinkedIn Featured.               |

## Local Setup (macOS)

### Install dependencies

```bash
brew install pandoc
brew install --cask mactex-no-gui
python3 -m pip install pillow
```

### Verify tools

```bash
pandoc --version
xelatex --version
```

## Prepare Profile Photo

Required before generating photo CV:

```bash
python3 scripts/prepare-profile-photo.py
```

Input: `assets/profile/photo-original.jpeg`  
Output: `assets/profile/photo-cv-round.png` (400×400, circular, transparent corners)

The original photo is not modified.

## Generate PDFs Locally

```bash
# CV without photo (ATS-friendly, job applications)
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated

# CV with photo (LinkedIn, EU/Poland B2B outreach)
./scripts/make-cv.sh --photo docs/profile/cv-lead-data-engineer.md generated

# Consultant profile and one-pager
./scripts/make-cv.sh docs/profile/consultant-profile.md generated
./scripts/make-cv.sh docs/sales/consulting-one-pager.md generated
```

### Generated output

```
generated/Vasili_Seniuts_cv-lead-data-engineer.pdf
generated/Vasili_Seniuts_cv-lead-data-engineer-photo.pdf
generated/Vasili_Seniuts_consultant-profile.pdf
generated/consulting-one-pager.pdf
```

Files from `docs/profile/` are prefixed with `Vasili_Seniuts_` automatically.
The `--photo` flag appends a `-photo` suffix to the output filename.

### Script usage

```
./scripts/make-cv.sh [--photo] <input.md> [output-dir]
```

- `--photo`: optional flag; prepends a LaTeX photo header and skips the Markdown title/contact block
- First positional argument: path to Markdown source (required)
- Second positional argument: output directory (optional, defaults to `generated`)

## GitHub Actions

Workflow file: `.github/workflows/cv-build.yml`

### Triggers

- **Manual:** `workflow_dispatch` from the Actions tab
- **On push to `main`:** when files change under `docs/`, `scripts/`, `templates/`, `assets/profile/`, or the workflow file itself

### What it does

1. Installs Pandoc, TeX Live, and Pillow on `ubuntu-latest`
2. Prepares the profile photo
3. Generates all four PDFs using `scripts/make-cv.sh`
4. Verifies each PDF exists
5. Uploads all PDFs as a single artifact: **`cv-and-consulting-pdfs`**

Download the artifact from the Actions run summary after a successful build.

### Generated files policy

Generated PDFs are **not committed** to the repository.

`.gitignore` rules:

```
generated/*
!generated/.gitkeep
```

`generated/.gitkeep` keeps the folder tracked by git.
