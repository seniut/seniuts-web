import Link from '@/components/Link'

export const metadata = {
  title: 'Services',
  description:
    'Architecture audit, PoC / MVP delivery, and Launch & Transfer services for modern data platforms.',
}

const packages = [
  {
    title: 'Architecture & Strategy Audit',
    duration: '1–2 weeks',
    outcome: 'Clear target architecture, prioritized roadmap, and delivery recommendations.',
    description:
      'For companies that need a practical view of the current state before investing in a data platform build. Get clarity on what to build first and what to delay.',
    deliverables: [
      'Current state assessment',
      'Target architecture diagram',
      'Technology recommendations',
      '30/60/90-day roadmap',
      'Risks and quick wins',
      'Cost and scalability considerations',
    ],
  },
  {
    title: 'PoC / MVP Delivery',
    duration: '3–6 weeks',
    outcome: 'Working data platform foundation that proves the architecture.',
    description:
      'For teams that need to prove the architecture quickly and create delivery momentum with a focused foundation.',
    deliverables: [
      'Selected source ingestion',
      'Raw / curated layers',
      'Orchestration foundation',
      'Data quality checks',
      'CI/CD basics',
      'Technical documentation',
    ],
  },
  {
    title: 'Launch & Transfer',
    duration: '6–12 weeks',
    outcome: 'Production-ready foundation with ownership transferred to the client.',
    description:
      'For companies that need a production-ready data platform foundation and a clear path to internal ownership.',
    deliverables: [
      'Production-ready data platform foundation',
      'Engineering standards',
      'Runbooks and observability',
      'Team onboarding',
      'Knowledge transfer',
      'Optional short-term stabilization support',
    ],
  },
  {
    title: 'Fractional Technical Data Lead',
    duration: 'Ongoing',
    outcome: 'Embedded senior guidance while your internal team grows.',
    description:
      'For companies that need senior data engineering leadership on a part-time or embedded basis during platform build or transition.',
    deliverables: [
      'Architecture decisions',
      'Code and PR reviews',
      'Technical mentoring',
      'Delivery planning',
      'Vendor / tooling evaluation',
      'Hiring support',
    ],
  },
]

const principles = [
  'Start with architecture before committing to a larger build.',
  'Use PoC / MVP delivery to prove the foundation and create momentum.',
  'Launch with standards, documentation, and transfer built into the plan.',
]

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-900'

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-6xl py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
          Services
        </p>
        <h1 className="mt-6 text-4xl font-semibold text-gray-950 sm:text-5xl dark:text-white">
          Data platform services for launch and handover
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          seniuts.com helps companies move from unclear data foundations to production-ready
          platforms their own teams can operate.
        </p>
      </section>

      <section className="mt-14 space-y-6">
        {packages.map((service, index) => (
          <ServicePackage key={service.title} service={service} index={index + 1} />
        ))}
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
              Built to reduce delivery risk
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              The packages are intentionally sequenced so leadership can make better decisions
              before the platform becomes expensive to change.
            </p>
          </div>

          <div className="rounded-lg border border-gray-200/80 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            {principles.map((principle) => (
              <p
                key={principle}
                className="border-b border-gray-200/80 px-5 py-4 text-sm leading-6 text-gray-700 last:border-b-0 dark:border-gray-800 dark:text-gray-300"
              >
                {principle}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <div className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-950">
          <p className="text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase">
            Specialized entry point
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-gray-950 dark:text-white">
            Data Platform Cost Audit
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            If cloud, Databricks, or Spark costs are the immediate pain, start with a focused,
            fixed-scope cost audit. It targets 20–40% savings across compute, storage, and
            orchestration, and is designed to pay for itself.
          </p>
          <div className="mt-6">
            <Link href="/cost-optimization" className={secondaryButtonClass}>
              Explore the Cost Audit
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-gray-200/80 bg-gray-50 p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-900/70">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
          Start with the Architecture & Strategy Audit
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          Use the audit to clarify target architecture, risks, roadmap, cost considerations, and the
          right next delivery step.
        </p>
        <div className="mt-6">
          <Link href="/contact" className={primaryButtonClass}>
            Book an Architecture Audit
          </Link>
        </div>
      </section>
    </main>
  )
}

function ServicePackage({ service, index }: { service: (typeof packages)[number]; index: number }) {
  return (
    <article className="relative overflow-hidden rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="from-primary-400/80 absolute inset-x-0 top-0 h-1 bg-gradient-to-r to-transparent" />
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
              {String(index).padStart(2, '0')}
            </p>
            <p className="rounded-md border border-gray-200 px-2.5 py-1 text-xs font-semibold text-gray-700 dark:border-gray-800 dark:text-gray-300">
              {service.duration}
            </p>
          </div>
          <h2 className="mt-4 text-2xl font-semibold text-gray-950 dark:text-white">
            {service.title}
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            {service.description}
          </p>
          <p className="mt-5 text-sm font-semibold text-gray-900 dark:text-white">
            Outcome:{' '}
            <span className="font-normal text-gray-600 dark:text-gray-300">{service.outcome}</span>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 uppercase dark:text-white">
            Deliverables
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((deliverable) => (
              <li
                key={deliverable}
                className="flex gap-3 text-sm leading-6 text-gray-600 dark:text-gray-300"
              >
                <span className="bg-primary-500 mt-2 h-1.5 w-1.5 shrink-0 rounded-sm" />
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
