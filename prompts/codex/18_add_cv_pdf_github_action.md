# Task: Add GitHub Actions workflow for building CV and consulting PDFs

You are working in a repository with Markdown-based PDF generation using Pandoc + XeLaTeX.

## Current local PDF pipeline

Current files likely include:

- scripts/make-cv.sh
- scripts/prepare-profile-photo.py
- templates/cv-header.tex
- docs/profile/cv-lead-data-engineer.md
- docs/profile/cv-lead-data-engineer-photo.md
- docs/profile/consultant-profile.md
- docs/sales/consulting-one-pager.md
- assets/profile/photo-original.jpeg
- assets/profile/photo-cv-round.png
- generated/.gitkeep

Local generation already works.

The workflow must reuse the local scripts and must not duplicate Pandoc logic directly in YAML.

## Goal

Create a GitHub Actions workflow that builds all generated PDF documents and uploads them as artifacts.

## Required file

Create:

- .github/workflows/cv-build.yml

## PDFs to generate

The workflow must generate:

- generated/cv-lead-data-engineer.pdf
- generated/cv-lead-data-engineer-photo.pdf
- generated/consultant-profile.pdf
- generated/consulting-one-pager.pdf

## Workflow triggers

The workflow must run on:

- workflow_dispatch
- push to main when relevant files change

Relevant paths:

- docs/profile/\*\*
- docs/sales/\*\*
- scripts/\*\*
- templates/\*\*
- assets/profile/\*\*
- .github/workflows/cv-build.yml

## Environment

Use:

- ubuntu-latest

## Install dependencies

Install required system packages with apt.

Required packages:

- pandoc
- texlive-xetex
- texlive-fonts-recommended
- texlive-latex-recommended
- texlive-latex-extra
- python3
- python3-pip

Install Python dependency:

- pillow

Use a simple command such as:

python3 -m pip install pillow

## Workflow steps

Use clear step names:

1. Checkout
2. Install Pandoc, TeX Live and Python dependencies
3. Prepare profile photo
4. Build PDF documents
5. Verify generated PDFs
6. Upload PDF artifacts

## Commands to run in workflow

Prepare photo:

python3 scripts/prepare-profile-photo.py

Build PDFs:

chmod +x scripts/make-cv.sh
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer-photo.md generated
./scripts/make-cv.sh docs/profile/consultant-profile.md generated
./scripts/make-cv.sh docs/sales/consulting-one-pager.md generated

Verify:

test -f generated/cv-lead-data-engineer.pdf
test -f generated/cv-lead-data-engineer-photo.pdf
test -f generated/consultant-profile.pdf
test -f generated/consulting-one-pager.pdf
ls -lh generated/\*.pdf

## Artifact upload

Use:

- actions/upload-artifact@v4

Artifact name:

- cv-and-consulting-pdfs

Artifact path:

- generated/\*.pdf

Use:

- if-no-files-found: error

## Important constraints

Do not commit generated PDFs back to the repository.
Do not add deployment.
Do not add GitHub Pages logic.

Do not change CV/profile/one-pager content.

Do not modify unrelated files.

Do not introduce Docker.

Keep the workflow simple and maintainable.

## Local checks to run

Run:

bash -n scripts/make-cv.sh
python3 -m py_compile scripts/prepare-profile-photo.py

Do not try to run the GitHub Actions workflow locally unless the tooling is already available.

## Output format

Answer in Russian with:

1. Summary
2. Files changed
3. How the workflow works
4. Commands/checks run
5. Generated artifacts
6. Limitations
7. Recommended next step
