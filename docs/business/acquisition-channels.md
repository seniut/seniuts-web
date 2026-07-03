# Acquisition Channels — Detailed Breakdown

Plain-language explanation of the four channels that work **without an existing network**,
with concrete examples of who is who. Companion to
[client-acquisition-plan.md](client-acquisition-plan.md) (the schedule) and
[../sales/cost-audit-playbook.md](../sales/cost-audit-playbook.md) (the wedge offer).

> Named companies below are **illustrative examples of the category** — public companies
> that fit the profile. They are not partners or clients, and inclusion implies no
> relationship. Verify fit before reaching out.

---

## Quick comparison

| Channel                          | Speed to first € | Effort to start                | Who pays / finds      | Margin            | Best for                            |
| -------------------------------- | ---------------- | ------------------------------ | --------------------- | ----------------- | ----------------------------------- |
| 1. Partners / subcontract        | Fastest          | Medium                         | Partner brings client | Lower (you share) | First revenue, borrowed trust       |
| 2. Talent / fractional platforms | Fast             | Low (one-time vetting)         | Platform matches you  | Medium            | Stable income, warm intros          |
| 3. Signal-based outreach         | Medium           | Medium (research)              | You find them         | Full              | Direct clients, the cost wedge      |
| 4. Content + community           | Slow (compounds) | Low per post, high consistency | They find you         | Full              | Long-term inbound + warmer outreach |

Recommended focus for the first 30 days: **Channels 1 and 3 as the engine, 4 running
daily in the background, 2 as an income backstop.**

---

## Channel 1 — Partners / subcontracting

### What it is (plain)

You don't write to the end client. You write to **companies that already have clients but
lack your data expertise**. They keep the client relationship and the invoice; you deliver
the data layer underneath. You are borrowing **their** network and trust — which is exactly
what you don't have yet. That's why it's the fastest path to the first paid work.

### Who exactly (who is who)

- **Software houses / custom dev shops** — build web/mobile/backend products, but data
  engineering is weak or absent. When a client asks for pipelines, a lakehouse, or analytics,
  they have no one senior to deliver it.
  _Examples of the type:_ Netguru, STX Next, The Software House, Merixstudio, Monterail,
  Boldare, Codete, Apptension, Selleo (Poland); thousands more across the EU on Clutch.co.
- **Cloud / DevOps consultancies** — strong on AWS/Azure/Kubernetes/Terraform/CI-CD, but
  they do **infrastructure**, not Spark/Airflow/Delta pipelines. When a client's project
  grows into data, they need a data partner.
  _Examples of the type:_ Chaos Gears, Hostersi, LCloud (AWS-focused, Poland); many regional
  AWS/Azure partners.
- **BI / analytics consultancies** — build dashboards (Power BI, Tableau, Looker) but not
  the backend platform that feeds them. They need the data foundation built.
- **Overloaded Databricks / Snowflake SI partners** — have more demand than delivery
  capacity and subcontract overflow.

### Why it works for you specifically

- They already passed the hardest step: winning the client's trust.
- Your weakness (no brand, no network) is irrelevant — the partner is the brand.
- Your strength (deep, senior data engineering) is exactly their gap.

### How to start (first concrete action)

1. Build a list of 15–20 software houses + cloud/DevOps consultancies (Clutch.co, LinkedIn).
2. Find the CTO / Delivery Director / Head of Engineering.
3. Send the partner message (template in
   [../sales/cost-audit-playbook.md](../sales/cost-audit-playbook.md) and
   [outreach-playbook.md](outreach-playbook.md), incl. a Polish version).

### Economics

Subcontractor model ≈ **70–85% of the client rate** (partner takes risk + invoicing). Lower
margin than direct, but far faster and lower-effort to land. See
[pricing-and-engagement-model.md](pricing-and-engagement-model.md).

### Pros / cons / risk

- **Pros:** fastest start, borrowed trust, reduced sales effort, builds referrals.
- **Cons:** lower margin, less direct client relationship, dependent on partner's pipeline.
- **Risk:** partner owns the client — keep your scope (the data layer) clearly yours.

---

## Channel 2 — Senior talent / fractional platforms

### What it is (plain)

Curated marketplaces that **match vetted senior people to clients**. This is **not cold
outreach** — you pass a vetting step once, then the platform brings opportunities to you.
It gives income now and introduces you to companies that can later become direct clients.

### Who exactly (who is who)

- **Vetted talent marketplaces** — for contract / project delivery:
  _Toptal, Gun.io, Braintrust, A.Team, Lemon.io, Talmix._
- **Fractional / interim leadership platforms** — for part-time leadership (Fractional Data
  Lead / Head of Data):
  _Go Fractional, Continuum, Catalant, Graphite, Expert360._
- **Expert / advisory networks** — paid short calls that can grow into engagements:
  _GLG, Dialectica, Guidepoint._
- **EU contracting marketplaces / body-leasing** that place Lead Data Engineers on B2B
  contracts.

### Why it works for you specifically

- The platform supplies demand; you don't have to generate it.
- Vetting (e.g., Toptal) is itself a credibility signal you can reference.
- Engagements double as case-study and testimonial sources.

### How to start (first concrete action)

1. Apply to one delivery marketplace (Toptal or Gun.io) + one fractional platform.
2. Mirror the CV ([../profile/cv-lead-data-engineer.md](../profile/cv-lead-data-engineer.md))
   into the profile; lead with the cost-optimization and lakehouse proof points.
3. Set availability and rate (see pricing doc), then let matches come in.

### Pros / cons / risk

- **Pros:** warm matchmaking, stable income, low ongoing effort once accepted.
- **Cons:** platform fee/margin, less control over which clients, some position you as a
  "resource" rather than a consultancy.
- **Risk:** don't let it crowd out direct-client and partner building (the higher-value work).

---

## Channel 3 — Signal-based outreach

### What it is (plain)

Cold outreach **fails when it's generic**. It works when every message goes only to someone
with a **visible, current pain** and carries **proof**. Low volume, high relevance. The
hiring signal is the clearest: a company hiring Spark/Databricks engineers almost certainly
has a meaningful Databricks bill — and therefore the exact pain your Cost Audit solves.

### Who exactly (who is who) — the signals

- **Hiring signal (strongest):** open roles for Databricks / Spark / data platform engineers.
  _Where:_ LinkedIn Jobs, NoFluffJobs and Justjoin.it (Poland), Otta, Wellfound,
  company career pages.
- **Stack signal:** job posts, engineering blogs, or conference talks mentioning Databricks,
  Spark, Snowflake, Airflow, Delta Lake, or "large-scale data processing."
- **Pain signal:** public posts/comments about cloud cost, FinOps, or "our data bill grows
  faster than our data."
- **Stage signal:** Series A–C scale-ups that recently raised (Crunchbase, Dealroom,
  EU-Startups) and are scaling data volume.

Target a company that hits **2+ signals**.

### Why it works for you specifically

- You have a sharp, ROI-obvious offer (the Cost Audit) and direct proof (~25% at 70–80 TB/day).
- The free **"cost teardown"** hook gives value before asking for anything — it reads as help,
  not spam. Script in [../sales/cost-audit-playbook.md](../sales/cost-audit-playbook.md).

### How to start (first concrete action)

1. Build a list of 30–40 companies hiring Spark/Databricks roles.
2. For 5–10 of them, record a short, specific cost teardown.
3. Send the direct message (Cost Audit playbook), follow up once after ~5 days.

### Pros / cons / risk

- **Pros:** full margin, direct relationship, builds the seniuts.com brand directly.
- **Cons:** research-heavy, slower than borrowing a partner's trust, lower reply rates than
  warm channels.
- **Risk:** volume temptation — never mass-send. Relevance + proof is the whole point.

---

## Channel 4 — Content + community

### What it is (plain)

Publishing useful, concrete material (mostly on LinkedIn) so prospects **come to you**, and
so cold outreach lands warmer because people already recognize you. It's the slowest channel
to a first deal, but it **compounds** — and it makes channels 1 and 3 convert better.

### Who exactly (who is who) — where to show up

- **LinkedIn (primary):** 2–3 concrete posts/week — a real cost-saving tactic, a lesson
  learned, a contrarian-but-substantiated take. Formats in
  [content-strategy.md](content-strategy.md).
- **Practitioner communities:** Databricks Community, dbt Slack, Locally Optimistic,
  MLOps Community, DataTalks.Club, r/dataengineering. Answer questions; don't pitch.
- **Local / regional:** Wrocław and Poland data meetups, Big Data Tech Warsaw, GDG events —
  in-person trust builds faster than online.

### Why it works for you specifically

- Your proof points (cost, scale) make for credible, specific posts that stand out from
  generic "data is important" content.
- Every post is reusable material in outreach and sales conversations.

### How to start (first concrete action)

1. Publish 2–3 posts/week from the ideas bank in [content-strategy.md](content-strategy.md).
2. Join 1–2 communities and answer real questions weekly.
3. Treat it as a background habit — **don't expect the first client here.**

### Pros / cons / risk

- **Pros:** compounds over time, builds authority, attracts inbound, warms every other channel.
- **Cons:** slow to first revenue, requires consistency.
- **Risk:** using it as procrastination instead of doing outreach. Content supports outreach;
  it doesn't replace it early on.

---

## How the four fit together

```
Channel 4 (content) ── warms ──► Channels 1 & 3 (partners + signal outreach) ──► first paid work
                                                │
                                                ▼
                              testimonials + anonymized mini-cases
                                                │
                                                ▼
                          stronger website + warmer outreach (compounding)

Channel 2 (platforms) ── runs in parallel as an income backstop ──► some clients convert to direct
```

The first paid engagements (via 1 and 3) produce the proof that channels 3 and 4 are missing
today. That proof is what eventually makes inbound and direct outreach work on their own.
