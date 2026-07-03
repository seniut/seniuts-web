import Link from '@/components/Link'

export const metadata = {
  title: 'Data Platform Cost Audit',
  description:
    'A fixed-scope audit to reduce data platform compute and storage costs by 20–40% — across Databricks, Spark, Snowflake, cloud warehouses, orchestration, and storage.',
}

const proofPoints = [
  {
    metric: '~25%',
    label: 'Spark / Databricks compute cost reduced on a high-volume production platform.',
  },
  {
    metric: '70–80 TB/day',
    label: 'Scale of the platform where that optimization was delivered.',
  },
  {
    metric: '8+ years',
    label: 'Hands-on data platform engineering across AWS, Azure, and Databricks.',
  },
]

const reviewAreas = [
  {
    title: 'Spark & Databricks',
    description:
      'Cluster sizing, autoscaling, Photon, job vs all-purpose clusters, caching, and skew.',
  },
  {
    title: 'Snowflake & cloud warehouses',
    description:
      'Warehouse sizing, auto-suspend, idle compute, and expensive query and load patterns.',
  },
  {
    title: 'Orchestration',
    description:
      'Airflow and Dagster scheduling, idle resources, retries, and redundant pipeline runs.',
  },
  {
    title: 'Storage & file layout',
    description:
      'Delta OPTIMIZE / Z-ORDER / VACUUM, small files, partitioning, and table maintenance.',
  },
  {
    title: 'Cloud compute & storage',
    description:
      'Instance types, spot usage, data egress, lifecycle policies, and over-provisioning.',
  },
  {
    title: 'Pipeline efficiency',
    description:
      'Full vs incremental loads, repeated recomputation, and unnecessary data movement.',
  },
]

const deliverables = [
  {
    title: 'Cost and usage assessment',
    description:
      'A clear picture of where compute and storage spend actually goes across the platform.',
  },
  {
    title: 'Top cost drivers',
    description:
      'The specific jobs, clusters, warehouses, and patterns responsible for most of the bill.',
  },
  {
    title: 'Prioritized savings roadmap',
    description:
      'Quick wins, medium-effort changes, and structural improvements, ordered by impact.',
  },
  {
    title: 'Right-sizing recommendations',
    description:
      'Concrete configuration and architecture changes your team can apply with confidence.',
  },
  {
    title: 'Estimated savings range',
    description:
      'A realistic view of the savings each recommendation can unlock, with assumptions stated.',
  },
  {
    title: 'Implementation guidance',
    description:
      'A clear next step: hand the roadmap to your team, or continue into focused delivery.',
  },
]

const idealFor = [
  'Teams whose Databricks, Spark, or Snowflake bill grows faster than data volume.',
  'Companies where no one clearly owns data platform cost.',
  'Engineering and finance leaders who need cost visibility before scaling further.',
  'Platforms with rising cloud compute and storage spend and unclear root causes.',
]

const process = [
  {
    step: '01',
    title: 'Free cost teardown',
    description:
      'A short look at your stack and spend signals, with two or three likely savings areas — no commitment.',
  },
  {
    step: '02',
    title: 'Cost and usage review',
    description:
      'A focused dive into compute, storage, jobs, and queries to find where the money goes.',
  },
  {
    step: '03',
    title: 'Savings roadmap',
    description:
      'Prioritized quick wins and structural changes, each with an estimated impact on cost.',
  },
  {
    step: '04',
    title: 'Handover or delivery',
    description:
      'Your team applies the roadmap, or we continue into a focused implementation engagement.',
  },
]

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-900'

export default function CostOptimizationPage() {
  return (
    <main className="mx-auto max-w-5xl py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
          1 week · fixed scope
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-gray-950 sm:text-5xl dark:text-white">
          Data Platform Cost Audit
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          A focused audit to cut data platform compute and storage costs — typically 20–40%. It
          starts with Databricks and Spark, where the savings are usually largest, and extends to
          Snowflake, cloud warehouses, orchestration, and storage.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className={primaryButtonClass}>
            Book a Cost Audit
          </Link>
          <Link href="/contact" className={secondaryButtonClass}>
            Get a free cost teardown
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-4 sm:grid-cols-3">
        {proofPoints.map((point) => (
          <div
            key={point.metric}
            className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <p className="text-3xl font-semibold text-gray-950 dark:text-white">{point.metric}</p>
            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{point.label}</p>
          </div>
        ))}
      </section>

      <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
        Figures reflect hands-on production experience, not a guaranteed result. Actual savings
        depend on your current setup, workloads, and constraints.
      </p>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">What gets reviewed</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          Cost optimization is not a single tool fix. The audit looks across the layers where data
          platform spend usually accumulates.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {reviewAreas.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">What you get</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          Practical artifacts your team can act on immediately — not a generic slide deck.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {deliverables.map((item) => (
            <article
              key={item.title}
              className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">Who this is for</h2>
        <div className="mt-6 rounded-lg border border-gray-200/80 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          {idealFor.map((item) => (
            <p
              key={item}
              className="border-b border-gray-200/80 px-5 py-4 text-base leading-7 text-gray-600 last:border-b-0 dark:border-gray-800 dark:text-gray-300"
            >
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">How it works</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          A short path from a no-commitment teardown to a roadmap your team can execute.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {process.map((item) => (
            <div
              key={item.step}
              className="rounded-lg border border-gray-200/80 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <p className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
                {item.step}
              </p>
              <h3 className="mt-2 text-base font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-gray-200/80 bg-gray-50 p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-900/70">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
          A cost audit should pay for itself
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          The goal is simple: find more savings than the audit costs. Send a short note about your
          stack and current spend, and start with a free cost teardown.
        </p>
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className={primaryButtonClass}>
            Book a Cost Audit
          </Link>
          <Link href="/architecture-audit" className={secondaryButtonClass}>
            See the Architecture Audit
          </Link>
        </div>
      </section>
    </main>
  )
}
