#!/usr/bin/env bash
# make-cv.sh — Convert Markdown CV documents to PDF using Pandoc + XeLaTeX
#
# Usage:
#   ./scripts/make-cv.sh [--photo] [input.md] [output-dir]
#
# Options:
#   --photo   Prepend a LaTeX photo header (name, contacts, photo).
#             Content before ## Summary is skipped from the Markdown source.
#             Output filename gets a -photo suffix automatically.
#
# Defaults: docs/profile/cv-lead-data-engineer.md → generated/

set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

# Parse --photo flag; collect remaining positional args
PHOTO=false
POSITIONAL=()
for arg in "$@"; do
    if [[ "$arg" == "--photo" ]]; then
        PHOTO=true
    else
        POSITIONAL+=("$arg")
    fi
done

# Default input/output
DEFAULT_INPUT="docs/profile/cv-lead-data-engineer.md"
DEFAULT_OUTPUT_DIR="generated"

INPUT="${POSITIONAL[0]:-$DEFAULT_INPUT}"
INPUT_PATH="$PROJECT_ROOT/$INPUT"
BASENAME="$(basename "$INPUT" .md)"

# Add Vasili_Seniuts_ prefix for files from docs/profile/
if [[ "$INPUT" == docs/profile/* ]]; then
    BASENAME="Vasili_Seniuts_${BASENAME}"
fi

# Append -photo suffix when generating with photo
if [[ "$PHOTO" == true ]]; then
    BASENAME="${BASENAME}-photo"
fi

# Derive output path from second positional arg or default
OUTPUT_ARG="${POSITIONAL[1]:-}"
if [[ -n "$OUTPUT_ARG" ]]; then
    if [[ "$OUTPUT_ARG" == *.pdf ]]; then
        OUTPUT="$OUTPUT_ARG"
    else
        OUTPUT="$OUTPUT_ARG/${BASENAME}.pdf"
    fi
else
    OUTPUT="$DEFAULT_OUTPUT_DIR/${BASENAME}.pdf"
fi
OUTPUT_PATH="$PROJECT_ROOT/$OUTPUT"

# Validate input exists
if [[ ! -f "$INPUT_PATH" ]]; then
    echo "Error: Input file not found: $INPUT_PATH" >&2
    exit 1
fi

# Check for required tools
check_command() {
    if ! command -v "$1" &> /dev/null; then
        echo "Error: $1 is not installed or not in PATH" >&2
        echo "Install it with: $2" >&2
        exit 1
    fi
}

check_command "pandoc" "brew install pandoc"
check_command "xelatex" "brew install --cask mactex-no-gui"

# Ensure output directory exists
mkdir -p "$(dirname "$OUTPUT_PATH")"

# When --photo: build a temp file with a LaTeX photo header followed by
# the Markdown content starting from ## Summary (skipping # heading and ## Contact).
EFFECTIVE_INPUT="$INPUT_PATH"
TMPFILE=""

if [[ "$PHOTO" == true ]]; then
    TMPFILE="$(mktemp /tmp/cv-XXXXXX.md)"
    trap 'rm -f "$TMPFILE"' EXIT

    cat > "$TMPFILE" << 'LATEX_HEADER'
\begin{minipage}{0.72\textwidth}
{\Huge \textbf{Vasili Seniuts}}\\[4pt]
{\large Lead Data Engineer / Technical Data Lead}\\[6pt]
Wrocław, Poland · Remote friendly\\[2pt]
\href{mailto:seniutvasian@gmail.com}{seniutvasian@gmail.com}\\
\href{tel:+48571866558}{+48 571 866 558}\\
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

LATEX_HEADER

    # Append content from ## Summary onward (skip # title and ## Contact block)
    sed -n '/^## Summary/,$p' "$INPUT_PATH" >> "$TMPFILE"
    EFFECTIVE_INPUT="$TMPFILE"
fi

if [[ "$PHOTO" == true ]]; then
    echo "Input:  $INPUT_PATH (with photo header)"
else
    echo "Input:  $INPUT_PATH"
fi
echo "Output: $OUTPUT_PATH"

# Convert Markdown to PDF using Pandoc with XeLaTeX
pandoc "$EFFECTIVE_INPUT" \
    --from markdown+yaml_metadata_block+raw_tex \
    --standalone \
    --pdf-engine=xelatex \
    --metadata lang=en \
    --metadata papersize=a4 \
    --variable geometry:"top=1.35cm,bottom=1.35cm,left=1.35cm,right=1.35cm" \
    --variable fontsize=10pt \
    --variable linestretch=1.2 \
    --include-in-header="$PROJECT_ROOT/templates/cv-header.tex" \
    -o "$OUTPUT_PATH"

echo "Done: $OUTPUT_PATH"
