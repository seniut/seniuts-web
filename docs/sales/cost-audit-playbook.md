# Cost Audit Playbook

The wedge offer for winning the first conversations without a network.

This playbook is focused on one thing: using the **Data Platform Cost Audit** as a
low-friction entry point. For the broader partner framework see
[target-clients.md](target-clients.md), and for general message templates see
[../business/outreach-playbook.md](../business/outreach-playbook.md).

---

## The offer in one line

> A 1-week, fixed-scope **Data Platform Cost Audit** that finds 20–40% savings across
> Databricks/Spark, Snowflake, cloud warehouses, orchestration, and storage — designed
> to pay for itself.

Why it works as a first offer:

- It is a painkiller, not a vitamin: a high cloud bill is felt every month.
- The ROI is easy to picture ("pay once, save every month").
- It is backed by real, hands-on experience (≈25% Spark/Databricks reduction at 70–80 TB/day).
- It opens the door to PoC / MVP, Launch & Transfer, and fractional work afterwards.

Honesty rule: present past results as **experience**, not as a guaranteed outcome or a
named client result. Never invent clients, logos, or numbers.

---

## How to find targets (buying signals)

You are not guessing — these signals indicate an active Databricks/Spark/cloud cost pain:

1. **Hiring signal** — the company has open roles for Spark / Databricks / data engineers.
   A team plus a modern stack usually means a meaningful compute bill.
2. **Stack signal** — job posts or engineering blogs mention Databricks, Spark, Snowflake,
   Airflow, Delta Lake, or large-scale data processing.
3. **Pain signal** — public posts, comments, or talks about cloud cost, FinOps, or
   "our data bill is growing faster than our data."
4. **Stage signal** — Series A–C scale-ups that recently raised and are scaling data volume.

Build a simple list of 30–40 companies that match 2+ signals before writing anyone.

---

## The free "cost teardown" (the door opener)

Instead of asking for a call, give value first. Record a short (3–5 min) Loom-style video
or write a short note for a specific company, based only on public signals.

Teardown structure:

1. **Context (15 sec)** — "I saw you're hiring Spark/Databricks engineers and running a
   modern lakehouse stack."
2. **2–3 likely cost drivers (2–3 min)** — name concrete, common waste areas, e.g.:
   - all-purpose clusters used for scheduled jobs,
   - no autoscaling or auto-suspend on warehouses,
   - missing Delta `OPTIMIZE` / `VACUUM` and small-file problems,
   - full reloads where incremental would do.
3. **One quick win (30 sec)** — something they could check today.
4. **Soft CTA (15 sec)** — "If useful, I run a 1-week cost audit that goes deep on this.
   Happy to share a free teardown of your actual setup."

Keep it specific and generous. The goal is a reply, not a sale.

---

## Outreach templates

### Direct (engineering / data leader)

```
Hi [Name],

I noticed [Company] is scaling its data stack (Databricks/Spark, [other signal]).
At that stage, compute cost usually grows faster than data volume — often 20–40% of
the bill is recoverable without touching reliability.

I run a 1-week Data Platform Cost Audit focused exactly on this. Before any commitment,
I'm happy to send a short, free teardown of likely savings in your setup.

Worth a quick look?

Best,
Vasili Seniuts
seniuts.com
```

### Partner (cloud / DevOps / data consultancy)

```
Hi [Name],

[Company] does [cloud/DevOps/data] work, so you likely see clients with growing
Databricks/Spark/Snowflake bills.

I run focused Data Platform Cost Audits (20–40% savings) and could be your data-cost
partner: you keep the client relationship, I handle the cost and performance deep-dive.

Open to a short call to see if there's a fit?

Best,
Vasili Seniuts
seniuts.com
```

### Follow-up (once, 4–6 days later)

```
Hi [Name],

Quick follow-up — happy to send that free cost teardown for [Company] with no
commitment. If the timing isn't right, no problem at all.

Best,
Vasili
```

---

## Simple tracking template

Track in a spreadsheet. Keep it minimal.

| Company | Signal(s) | Contact | Channel | Teardown sent | Reply | Call | Audit | Notes |
| ------- | --------- | ------- | ------- | ------------- | ----- | ---- | ----- | ----- |
|         |           |         |         |               |       |      |       |       |

Weekly rhythm (low volume, high relevance):

- 5–10 signal-based direct messages.
- 3–5 partner messages.
- 2–3 LinkedIn posts on a concrete cost-saving tactic.
- Follow up once on anything older than ~5 days.

---

## After the first audit

Every completed audit should produce two assets:

1. A short **written testimonial** (even a few sentences).
2. An **anonymized mini case**: context → problem → what was done → result.

These become the proof that the website and future outreach are missing today.
