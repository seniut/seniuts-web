# LinkedIn Content Starter — "Anatomy of a Modern Data Platform"

A ready-to-post series of short, concrete LinkedIn posts. The goal of each post is to
teach one thing clearly — no fluff, no "unlock the power of data." This is the
**owned** acquisition asset that runs in the background while partner and platform work
(channels 1–2) bring in the first revenue. See
[acquisition-channels.md](acquisition-channels.md) and the broader plan in
[content-strategy.md](content-strategy.md).

## How to use this

- **Cadence:** 2 posts/week is plenty. This series alone is ~4 weeks of content.
- **Make it yours:** add one specific detail from your own experience to each post
  (a number, a tool config, a war story). Specifics beat polish.
- **Honesty rule:** the ~25% / 70–80 TB/day figures are **real experience** — present
  them as experience, never as a guaranteed client result. Never invent client names.
- **Format:** the post text is between the `---` separators. Copy it as-is, then tweak.
- **Engagement:** end with a question sometimes; reply to every comment for the first hour.

---

## Post 1 — The anatomy (series opener)

---

A modern data platform isn't a tool. It's 6 layers that have to work together.

When companies say "we need a data platform," they usually mean: "our data is in too many
places and nobody owns it."

A platform that survives contact with production has six layers:

1. Ingestion — getting data in, reliably and repeatedly
2. Storage — a lakehouse with raw → curated → serving layers
3. Transformation — turning raw data into something trustworthy
4. Orchestration — running it on a schedule, with retries and visibility
5. Data quality — catching bad data before it reaches a dashboard
6. Observability — knowing what broke, where, and why

Miss one, and the whole thing feels fragile.

Over the next posts I'll break down each layer — what it includes, and where teams usually
get it wrong.

## Which layer is the most painful in your stack right now?

## Post 2 — Ingestion

---

The cheapest place to break a data platform is ingestion.

If the way data enters your platform is fragile, everything downstream inherits that
fragility — quietly.

Four things separate reliable ingestion from "it worked yesterday":

- Idempotent loads — re-running a job doesn't duplicate data
- Incremental by default — you don't reprocess all of history every night
- Schema awareness — a new upstream column doesn't silently corrupt a table
- Quarantine — bad records are set aside with a reason, not dropped or crashed on

Most "random" pipeline failures I've seen trace back to one of these four.

## Get ingestion boring and predictable. The rest of the platform gets easier.

## Post 3 — Storage (medallion / lakehouse)

---

Bronze, Silver, Gold isn't jargon. It's how you keep a data platform debuggable.

The idea is simple — separate data by how much you've processed it:

- Bronze (raw): exactly what arrived, untouched. Your source of truth and your replay button.
- Silver (curated): cleaned, validated, deduplicated, conformed.
- Gold (serving): business-ready tables that feed reports and models.

Why it matters: when a number looks wrong, you can walk back layer by layer and find exactly
where it broke — instead of guessing inside one giant query.

## Keep raw data raw. Future-you will need it.

## Post 4 — Orchestration

---

"We run it on a cron job" is where a lot of data platforms quietly cap out.

Orchestration is the layer that decides whether your platform scales with the team — or
becomes a 2 a.m. problem.

What good orchestration gives you (Airflow, Dagster, your pick):

- Dependencies — task B waits for task A, automatically
- Retries — transient failures recover without a human
- Visibility — you can see what ran, what failed, and how long it took
- SLAs & alerts — you find out before the business does

## A cron job runs tasks. Orchestration runs a platform.

## Post 5 — Data quality

---

Most data teams don't have a data quality problem. They have a "we find out too late" problem.

By the time a stakeholder says "this number looks wrong," the bad data has already shipped.

The fix isn't more dashboards. It's checks that run inside the pipeline, before data is served:

- Schema validation — types and columns are what you expect
- Row-count reconciliation — you didn't silently lose 30% of the data
- Freshness — the data is actually from today
- Business rules — revenue isn't negative, IDs aren't null

## Fail loud, fail early, quarantine the bad rows. Trust is the real product of a data platform.

## Post 6 — Cost (your wedge offer)

---

A data platform with no cost visibility will always trend toward expensive.

Not because anyone's careless — because nobody can see where the money goes.

The usual suspects on a Spark/Databricks bill:

- All-purpose clusters running scheduled jobs that belong on job clusters
- No autoscaling or auto-termination — clusters idling at full size
- Small files and missing OPTIMIZE/VACUUM making every read slower
- Full reloads where incremental would do

On one platform processing ~70–80 TB/day, tuning these cut compute cost ~25% — with no loss
of reliability.

## If your data bill is growing faster than your data, it's usually one of the four above.

## Post 7 — Observability

---

If you can't answer "is the platform healthy right now?" in 30 seconds, you don't have
observability — you have hope.

Observability is knowing what's happening before someone complains:

- Job runtime trends — a slow creep is an early warning
- Failure alerts — with enough context to act, not just "DAG failed"
- Data freshness — the platform tells you when data is late
- Cost metrics — runtime and spend tracked over time

## Pipelines tell you they ran. Observability tells you whether to trust the result.

## Post 8 — Ownership & transfer (your positioning)

---

The best outcome of a data platform project isn't the platform. It's a team that can run it
without you.

A platform nobody internally understands is a liability with good uptime.

What "owned" actually looks like:

- Runbooks for the things that break at 2 a.m.
- Standards, so the next pipeline looks like the last one
- Documentation a new hire can actually follow
- Onboarding, not just a handover email

## Build for the handover from day one. Dependency isn't a business model — ownership is.

## Where to go next (topic seeds)

Once the anatomy series is out, keep the same "short + concrete + one lesson" style:

- **Lessons learned:** "A Spark config that saved ~€X/month", "A handover that went wrong —
  and how I'd prevent it now", "Why I kept raw data even when it felt wasteful."
- **Contrarian (substantiated):** "Most companies don't need real-time", "Airflow isn't dead",
  "Data quality matters more than data volume."
- **Decision frameworks:** "Lakehouse vs warehouse — how I'd choose", "Build vs buy for your
  first platform", "When to hire your first data engineer (and when not to)."
- **Behind the work:** anonymized before/after of a cost or reliability fix (no client names).

Reusable post skeleton: **Hook (1–2 lines) → Context (2–3) → Insight (3–6 bullets) →
Takeaway (1 line) → optional question.**
