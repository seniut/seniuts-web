# Task: Add optional photo version of Lead Data Engineer CV

You are working in a repository with Markdown-based CV generation using Pandoc and XeLaTeX.

Current files:

- `docs/profile/cv-lead-data-engineer.md`
- `docs/profile/consultant-profile.md`
- `scripts/make-cv.sh`
- `templates/cv-header.tex`

The user wants an optional CV version with a professional profile photo, similar to a LinkedIn-style circular avatar.

Important:
Do not replace the existing no-photo CV.
The no-photo CV must remain the default ATS-friendly / international version.

## Goal

Add a separate photo-based CV version:

- `docs/profile/cv-lead-data-engineer-photo.md`

Add image asset support:

- `assets/profile/photo-original.jpeg`
- `assets/profile/photo-cv-round.png`

The photo version should generate correctly through the existing Pandoc/XeLaTeX script.

## Required behavior

1. Keep the existing file unchanged:
   - `docs/profile/cv-lead-data-engineer.md`

2. Create a new file:
   - `docs/profile/cv-lead-data-engineer-photo.md`

3. The new file should reuse the same professional CV content, but have a custom top header with:
   - name
   - title
   - location
   - email
   - LinkedIn
   - GitHub
   - round photo on the right

4. The photo CV must not include a duplicate old Contact section if the custom header already includes contact details.

5. Use LaTeX-compatible Markdown because Pandoc uses XeLaTeX.

6. Use image:
   - `assets/profile/photo-cv-round.png`

7. Do not add Awesome-CV.
8. Do not add heavy external templates.
9. Do not add external font files.
10. Keep the CV suitable for job search / B2B contracts.

## Add photo preparation script

Create:

- `scripts/prepare-profile-photo.py`

Input:

- `assets/profile/photo-original.jpeg`

Output:

- `assets/profile/photo-cv-round.png`

Requirements:

- use Python
- use Pillow
- if Pillow is missing, print a clear instruction:
  `python -m pip install pillow`
- crop image to a centered square
- resize to 600x600
- apply circular alpha mask
- save PNG with transparent corners
- do not modify the original image
- print success message

Expected command:

```bash
python scripts/prepare-profile-photo.py
```

If `assets/profile/photo-original.jpeg` does not exist, fail with a clear message.

## Photo CV header example

The top of `cv-lead-data-engineer-photo.md` may use raw LaTeX like:

```latex
\begin{minipage}{0.70\textwidth}
{\Huge \textbf{Vasili Seniuts}}\\[4pt]
{\large Lead Data Engineer / Technical Data Lead}\\[6pt]
Wrocław, Poland · Remote friendly\\
\href{mailto:vasiliseniuts@gmail.com}{vasiliseniuts@gmail.com}\\
\href{https://www.linkedin.com/in/vasili-seniuts/}{linkedin.com/in/vasili-seniuts}\\
\href{https://github.com/seniut}{github.com/seniut}
\end{minipage}
\hfill
\begin{minipage}{0.22\textwidth}
\begin{flushright}
\includegraphics[width=3.1cm]{assets/profile/photo-cv-round.png}
\end{flushright}
\end{minipage}

\vspace{0.5cm}
```

Then continue with:

```markdown
## Summary

...
```

## Update make-cv script only if needed

If `scripts/make-cv.sh` needs additional Pandoc options for images, update it minimally.

Make sure image paths work when running:

```bash
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer-photo.md generated
```

## Generated files policy

Generated PDFs must remain ignored by git.

Keep or add these rules in `.gitignore`:

```gitignore
generated/*
!generated/.gitkeep
```

Do not commit generated PDFs.

## Checks to run

Run:

```bash
python -m py_compile scripts/prepare-profile-photo.py
python scripts/prepare-profile-photo.py
bash -n scripts/make-cv.sh
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer.md generated
./scripts/make-cv.sh docs/profile/cv-lead-data-engineer-photo.md generated
ls -lh generated/*.pdf
```

If Pillow is missing, explain that this command is required:

```bash
python -m pip install pillow
```

If `assets/profile/photo-original.jpeg` is missing, explain where to put it:

```text
assets/profile/photo-original.jpeg
```

## Output format

Answer in Russian with:

1. Summary
2. Files changed
3. How the photo CV works
4. How to add or replace the photo
5. Commands to generate both versions
6. Checks run
7. Generated PDF paths
8. Limitations / next steps
