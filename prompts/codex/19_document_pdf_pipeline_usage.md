# Task: Document CV and consulting PDF generation pipeline

You are working in a repository that supports Markdown-based PDF generation using Pandoc + XeLaTeX.

Current files likely include:

- scripts/make-cv.sh
- scripts/prepare-profile-photo.py
- templates/cv-header.tex
- docs/profile/cv-lead-data-engineer.md
- docs/profile/cv-lead-data-engineer-photo.md
- docs/profile/consultant-profile.md
- docs/sales/consulting-one-pager.md
- .github/workflows/cv-build.yml
- generated/.gitkeep

Goal:
Document how to use the local and GitHub Actions PDF pipeline.

Required update:
Update README.md or create docs/profile/pdf-generation.md if README is already focused on the website.

Document:

1. Purpose of each document:

- cv-lead-data-engineer.md: job-search CV, no photo, ATS-friendly, international version
- cv-lead-data-engineer-photo.md: photo version for LinkedIn, Poland/EU B2B, direct contacts
- consultant-profile.md: long detailed consultant profile / source document
- consulting-one-pager.md: short client-facing one-pager for outreach and LinkedIn Featured

2. Local macOS dependencies:

- pandoc
- mactex-no-gui
- pillow

Commands:
brew install pandoc
brew install --cask mactex-no-gui
python3 -m pip install pillow

3. Tool checks:
   pandoc --version
   xelatex --version

4. Prepare photo:
   python3 scripts/prepare-profile-photo.py

5. Generate PDFs locally:
   ./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated
   ./scripts/make-cv.sh docs/profile/cv-lead-data-engineer-photo.md generated
   ./scripts/make-cv.sh docs/profile/consultant-profile.md generated
   ./scripts/make-cv.sh docs/sales/consulting-one-pager.md generated

6. Generated output:

- generated/cv-lead-data-engineer.pdf
- generated/cv-lead-data-engineer-photo.pdf
- generated/consultant-profile.pdf
- generated/consulting-one-pager.pdf

7. GitHub Actions:

- workflow file: .github/workflows/cv-build.yml
- manual trigger: workflow_dispatch
- push trigger: relevant docs/scripts/templates/assets changes
- artifact name: cv-and-consulting-pdfs
- PDFs are uploaded as artifacts
- generated PDFs are not committed

8. Generated files policy:

- generated/\*.pdf must stay ignored
- generated/.gitkeep keeps the folder

Constraints:
Do not change workflow logic.
Do not change scripts.
Do not change CV content.
Do not touch unrelated website content.

Output in Russian with:

1. Summary
2. Files changed
3. What was documented
4. Checks run
5. Recommended next step
