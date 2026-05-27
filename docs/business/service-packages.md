# Service Packages

## Overview

seniuts offers five service packages designed around different client needs and engagement depths:

| Package                          | Duration   | Entry Point | Follow-on             |
| -------------------------------- | ---------- | ----------- | --------------------- |
| Architecture & Strategy Audit    | 1–2 weeks  | ✅ Primary  | PoC / MVP             |
| PoC / MVP Delivery               | 3–6 weeks  | Sometimes   | Launch & Transfer     |
| Launch, Stabilization & Transfer | 6–12 weeks | Rarely      | Fractional / Retainer |
| Fractional Technical Data Lead   | Ongoing    | Sometimes   | —                     |
| Platform Stabilization / Rescue  | 2–6 weeks  | Sometimes   | Launch & Transfer     |

---

## 1. Architecture & Strategy Audit

### Summary

A focused discovery and architecture engagement that gives leadership clarity before committing to a larger platform investment.

### Duration

1–2 weeks (typically 5–10 working days)

### Outcome

- Clear understanding of current data estate
- Target architecture aligned with business needs
- Prioritized roadmap with 30/60/90-day milestones
- Technology recommendations
- Identified risks and quick wins
- Cost and scalability considerations

### Deliverables

| Deliverable                             | Description                                                      |
| --------------------------------------- | ---------------------------------------------------------------- |
| **Current state assessment**            | Document existing sources, pipelines, tools, gaps, and ownership |
| **Target architecture diagram**         | Visual of recommended platform foundation                        |
| **Technology recommendations**          | Specific guidance on tools and patterns                          |
| **30/60/90-day roadmap**                | Prioritized delivery plan with milestones                        |
| **Risks and quick wins**                | Blockers and low-effort improvements                             |
| **Cost and scalability considerations** | Rough estimates and scaling assumptions                          |

### Buyer Value

- Clarity before major investment
- Reduced risk of wrong technology choices
- Confidence to proceed or pause
- Actionable roadmap for internal team or vendor
- Second opinion on existing plans

### When to Use

- Before hiring a data team
- Before major platform investment
- When existing architecture is unclear
- When previous projects failed or stalled
- When leadership needs confidence before committing budget

### When NOT to Use

- Urgent production fire (use Stabilization / Rescue)
- Already have clear architecture and just need delivery
- Very small scope that doesn't need formal discovery

### Pricing Range

| Model           | Range               | Notes                           |
| --------------- | ------------------- | ------------------------------- |
| **Fixed price** | €4,000 – €10,000    | Depends on scope and complexity |
| **Day rate**    | €600 – €1,000 / day | If client prefers time-based    |

### Possible Next Step

- PoC / MVP Delivery (if architecture is approved)
- Internal implementation with roadmap
- Fractional Technical Data Lead (if team needs guidance)

---

## 2. PoC / MVP Delivery

### Summary

A time-boxed foundation build that proves the architecture with selected data sources, core pipelines, and quality checks.

### Duration

3–6 weeks

### Outcome

- Working data platform foundation
- Proof that the architecture works
- Selected sources ingested
- Core pipelines running
- Delivery momentum established

### Deliverables

| Deliverable                   | Description                            |
| ----------------------------- | -------------------------------------- |
| **Selected source ingestion** | 1–3 priority sources connected         |
| **Raw / curated data layers** | Basic medallion or staging structure   |
| **Orchestration foundation**  | Airflow, Dagster, or similar running   |
| **Data quality checks**       | Basic validation on critical data      |
| **CI/CD basics**              | Pipeline deployment automation         |
| **Technical documentation**   | Architecture decisions and setup guide |

### Buyer Value

- Proof that architecture works in practice
- Delivery momentum before larger investment
- Technical foundation for internal team to extend
- Reduced risk of full platform build

### When to Use

- After Architecture Audit confirms the approach
- When leadership needs proof before larger commitment
- When internal team needs a working foundation to extend
- When time pressure requires quick delivery

### When NOT to Use

- No discovery done (start with Audit)
- Scope is actually production-scale (use Launch & Transfer)
- Team cannot extend the foundation afterward

### Pricing Range

| Model                | Range               | Notes                                      |
| -------------------- | ------------------- | ------------------------------------------ |
| **Fixed scope**      | €10,000 – €30,000   | Depends on sources, complexity, tech stack |
| **Time & materials** | €600 – €1,000 / day | If scope is uncertain                      |

### Possible Next Step

- Launch, Stabilization & Transfer (if PoC proves the approach)
- Internal team continues with roadmap
- Fractional Technical Data Lead (if team needs guidance)

---

## 3. Launch, Stabilization & Transfer

### Summary

A production platform delivery engagement that builds a reliable foundation, establishes engineering standards, and transfers ownership to the client team.

### Duration

6–12 weeks

### Outcome

- Production-ready data platform foundation
- Engineering standards and practices in place
- Runbooks and observability configured
- Client team onboarded and able to operate
- Clear ownership transfer

### Deliverables

| Deliverable                        | Description                                 |
| ---------------------------------- | ------------------------------------------- |
| **Production-ready platform**      | Full foundation with production workloads   |
| **Engineering standards**          | Code style, PR process, testing approach    |
| **Runbooks**                       | Operational procedures for common scenarios |
| **Observability**                  | Logging, monitoring, alerting basics        |
| **Team onboarding**                | Sessions with internal engineers            |
| **Knowledge transfer**             | Documentation and handover meetings         |
| **Optional stabilization support** | Short-term post-launch support              |

### Buyer Value

- Production-ready foundation their team can operate
- No long-term vendor dependency
- Standards that enable team growth
- Reduced risk of post-launch issues
- Clean handover instead of ongoing dependency

### When to Use

- After PoC proves the approach
- When company is ready for production platform
- When internal team is available to onboard
- When leadership wants clear ownership transfer

### When NOT to Use

- No discovery or PoC done
- No internal team to transfer to
- Client wants indefinite vendor ownership (not seniuts model)

### Pricing Range

| Model                | Range                    | Notes                            |
| -------------------- | ------------------------ | -------------------------------- |
| **Fixed scope**      | €30,000 – €80,000        | Depends on scope and duration    |
| **Monthly retainer** | €8,000 – €15,000 / month | If scope evolves during delivery |

### Possible Next Step

- Fractional Technical Data Lead (ongoing guidance)
- Short-term stabilization retainer
- Internal team operates independently

---

## 4. Fractional Technical Data Lead

### Summary

Part-time embedded technical leadership for companies building or scaling their data team.

### Duration

Ongoing (typically 3–6+ months)

### Time Commitment

- 1–3 days per week
- Can adjust based on need

### Outcome

- Senior technical guidance without full-time hire
- Architecture decisions made with experience
- Team mentoring and code review
- Hiring support
- Delivery planning

### Deliverables

| Deliverable                   | Description                         |
| ----------------------------- | ----------------------------------- |
| **Architecture decisions**    | Guide technology and design choices |
| **Code and PR reviews**       | Maintain quality standards          |
| **Technical mentoring**       | Grow junior/mid engineers           |
| **Delivery planning**         | Sprint planning, roadmap refinement |
| **Vendor/tooling evaluation** | Assess tools and platforms          |
| **Hiring support**            | Interview candidates, define roles  |

### Buyer Value

- Senior leadership without full-time cost
- Bridge until internal lead is hired
- Architecture decisions grounded in experience
- Team growth acceleration
- Reduced risk of junior mistakes

### When to Use

- Building first data team
- Team lacks senior technical leadership
- CTO stretched too thin on data
- Previous tech lead left
- Preparing for full-time hire

### When NOT to Use

- Need full-time hands-on delivery (use Launch & Transfer)
- Team already has strong technical leadership
- Very short engagement (Audit may be better)

### Pricing Range

| Model                | Range                    | Notes                          |
| -------------------- | ------------------------ | ------------------------------ |
| **Monthly retainer** | €4,000 – €10,000 / month | 1–2 days/week                  |
| **Monthly retainer** | €8,000 – €15,000 / month | 2–3 days/week                  |
| **Day rate**         | €600 – €1,000 / day      | If flexible arrangement needed |

### Possible Next Step

- Continue until internal lead hired
- Reduce involvement as team matures
- Transition to advisory/retainer

---

## 5. Platform Stabilization / Rescue

### Summary

Focused intervention to stabilize a failing or unreliable data platform.

### Duration

2–6 weeks

### Outcome

- Critical issues identified and fixed
- Platform stability restored
- Root cause analysis
- Recommendations for longer-term fixes
- Handover to internal team or vendor

### Deliverables

| Deliverable                  | Description                               |
| ---------------------------- | ----------------------------------------- |
| **Issue triage**             | Identify and prioritize critical problems |
| **Quick fixes**              | Address immediate stability issues        |
| **Root cause analysis**      | Understand why problems occurred          |
| **Short-term stabilization** | Get platform to acceptable state          |
| **Recommendations**          | Roadmap for longer-term improvements      |
| **Handover**                 | Transfer context to internal team         |

### Buyer Value

- Fast intervention for urgent problems
- External perspective on failed or fragile platform
- Clear path forward after stabilization
- Reduced ongoing fire-fighting

### When to Use

- Platform is broken or unreliable
- Previous vendor failed or left
- Critical production issues
- Leadership lost confidence in current approach
- Need to stabilize before rebuilding

### When NOT to Use

- No urgency (Audit is better entry point)
- Platform is fine, just needs extension (PoC / MVP)
- Scope is actually full rebuild (Launch & Transfer)

### Pricing Range

| Model                | Range               | Notes                            |
| -------------------- | ------------------- | -------------------------------- |
| **Fixed scope**      | €8,000 – €25,000    | Depends on severity and duration |
| **Time & materials** | €600 – €1,000 / day | If scope is uncertain            |
| **Emergency rate**   | +20–30%             | For urgent / weekend work        |

### Possible Next Step

- Launch & Transfer (rebuild on stable foundation)
- Fractional Technical Data Lead (ongoing guidance)
- Internal team continues with recommendations

---

## Package Selection Guide

| Situation                               | Recommended Package              |
| --------------------------------------- | -------------------------------- |
| "We need clarity before investing"      | Architecture & Strategy Audit    |
| "We need to prove the approach quickly" | PoC / MVP Delivery               |
| "We're ready for production platform"   | Launch, Stabilization & Transfer |
| "We need senior guidance for our team"  | Fractional Technical Data Lead   |
| "Our platform is broken"                | Platform Stabilization / Rescue  |
| "We're not sure what we need"           | Start with Architecture Audit    |

---

## Notes on Pricing

- All prices are indicative ranges, not final quotes.
- Final pricing depends on scope, complexity, urgency, and delivery responsibility.
- Prices are in EUR; can be converted to PLN or USD as needed.
- VAT and invoicing terms depend on client location and structure.
- This document does not constitute legal, tax, or financial advice.
