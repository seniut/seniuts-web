# Task: Create short consulting one-pager from long consultant profile

You are working in a repository with Markdown-based CV/profile documents and PDF generation via Pandoc + XeLaTeX.

## Current context

Current files likely include:

- docs/profile/consultant-profile.md
- docs/profile/cv-lead-data-engineer.md
- docs/profile/cv-lead-data-engineer-photo.md
- scripts/make-cv.sh
- templates/cv-header.tex

The current consultant-profile.md is useful as a long expert profile, but the generated PDF is too long for first outreach.

The user needs a short client-facing consulting one-pager.

## Goal

Create a concise one-pager Markdown file that can be converted into PDF and used for:

- LinkedIn Featured
- outreach to software houses
- outreach to CTOs / Heads of Data
- first client conversations
- sending after initial interest

## Required new file

Create:

- docs/sales/consulting-one-pager.md

If docs/sales does not exist, create it.

## Positioning

The one-pager should position Vasili as:

- Technical Data Lead
- Data Platform Consultant
- hands-on architecture and delivery partner

Do not position him as a large agency.
Do not pretend there is a big team.
Do not overuse future company branding.
Do not overuse seniuts.com yet.

Use honest positioning:

- senior independent consultant
- hands-on technical data lead
- external data platform lead
- B2B consulting partner

## Main offer

The main entry offer should be:

Architecture & Strategy Audit

The broader delivery path can be:

Architecture Audit -> PoC/MVP -> Launch & Transfer

## Tone

Professional, clear, concise, executive-friendly.

Avoid:

- long bio
- generic outsourcing language
- buzzwords
- fake metrics
- fake clients
- exaggerated claims
- too much "I"

Prefer:

- concrete problems
- clear services
- practical outcomes
- technical credibility
- short sections
- readable bullets

## Suggested structure for docs/sales/consulting-one-pager.md

Use this structure and write polished English copy.

Title:

Data Platform Consulting

Subtitle:

Architecture Audit -> PoC/MVP -> Launch & Transfer

Short intro:

Help companies design, build, and improve production-ready data platforms without creating long-term vendor dependency.

Sections:

1. Who this is for

Include short bullets for:

- companies building or modernizing cloud data platforms
- teams with fragile pipelines or unclear ownership
- software houses needing senior data platform support
- scale-ups needing a Technical Data Lead before building an internal team

2. Typical problems

Include short bullets for:

- unclear data platform roadmap
- fragile ETL/ELT pipelines
- slow or unreliable reporting
- unclear data ownership
- scaling issues with Spark, Airflow, Kafka, Databricks, Azure or AWS
- lack of senior technical data leadership

3. Core offer

Include three compact subsections.

Architecture & Strategy Audit:

- current-state review
- architecture risks
- target architecture direction
- quick wins
- roadmap
- PoC/MVP recommendation

PoC / MVP Delivery:

- selected ingestion flows
- raw / curated layers
- orchestration foundation
- data quality checks
- CI/CD basics
- documentation

Launch & Transfer:

- production-ready foundation
- engineering standards
- runbooks
- team onboarding
- ownership transfer
- optional short-term stabilization

4. Technical credibility

Keep concise.

Mention:

- 8+ years in data engineering
- Azure, AWS, Databricks, Snowflake
- Spark, PySpark, Python, Scala, Polars
- Airflow, Dagster, Kafka
- Delta Lake / Iceberg concepts
- Data Vault 2.0
- Kubernetes, Helm, Terraform, CI/CD
- high-volume platform experience around 70-80 TB/day

5. Engagement model

Use short ordered list:

1. Understand current state and constraints
2. Define target architecture and roadmap
3. Build or improve the platform foundation
4. Document standards and runbooks
5. Transfer knowledge to the internal team

6. Contact

Include:

- Vasili Seniuts
- Technical Data Lead & Data Platform Consultant
- Wroclaw, Poland / Remote
- vasiliseniuts@gmail.com
- LinkedIn: https://www.linkedin.com/in/vasili-seniuts/
- GitHub: https://github.com/seniut

## Length constraint

The generated PDF should target 1 page.

If it becomes 2 pages, it is acceptable only if still very readable.

Do not exceed 2 pages.

## PDF generation

After creating the file, generate it using the existing script:

./scripts/make-cv.sh docs/sales/consulting-one-pager.md generated

Expected output:

generated/consulting-one-pager.pdf

## Checks to run

Run:

bash -n scripts/make-cv.sh

./scripts/make-cv.sh docs/sales/consulting-one-pager.md generated

ls -lh generated/consulting-one-pager.pdf

Do not run GitHub Actions in this task.

Do not modify unrelated files.

## Output format

Answer in Russian with:

1. Summary
2. Files changed
3. One-pager positioning
4. PDF generation result
5. Checks run
6. Generated PDF path and size
7. Whether it is 1 page or 2 pages
8. Recommended next step
