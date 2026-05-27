# Task: Add local PDF generation script for CV documents

You are working in a repository that contains Markdown-based CV and profile documents.

## Context

The important source documents are:

- `docs/profile/cv-lead-data-engineer.md`
- `docs/profile/consultant-profile.md`

The user wants to generate PDF files locally first. GitHub Actions will be added later and must reuse the same local script.

## Goal

Create a simple local script that converts a Markdown file into a PDF using Pandoc and XeLaTeX.

## Required file

Create or update:

- `scripts/make-cv.sh`

## Requirements

The script must:

1. Use bash strict mode:

   ```bash
   set -euo pipefail

   ```
