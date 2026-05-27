import Link from '@/components/Link'

export const metadata = {
  title: 'Architecture & Strategy Audit',
  description:
    'Get a clear target architecture, 30/60/90-day roadmap, risks, quick wins, and technology recommendations for your data platform.',
}

const deliverables = [
  {
    title: 'Current state assessment',
    description:
      'Document existing data sources, pipelines, tools, gaps, and ownership across the organization.',
  },
  {
    title: 'Target architecture diagram',
    description:
      'A clear visual of the recommended platform foundation covering ingestion, storage, transformation, and serving layers.',
  },
  {
    title: 'Technology recommendations',
    description:
      'Specific guidance on tools, cloud services, and patterns that fit your constraints, team, and budget.',
  },
  {
    title: '30/60/90-day roadmap',
    description:
      'A prioritized delivery plan with clear milestones, dependencies, and decision points.',
  },
  {
    title: 'Risks and quick wins',
    description:
      'Identify blockers that could delay delivery and low-effort improvements that create early momentum.',
  },
  {
    title: 'Cost and scalability considerations',
    description:
      'Rough cost estimates and scaling assumptions so leadership can plan capacity and budget.',
  },
]

const idealFor = [
  'Companies planning their first serious data platform investment.',
  'Teams with fragile pipelines who need architecture before rebuilding.',
  'Leadership that wants clarity before committing to a larger build.',
  'Organizations hiring a data team and need architecture guidance first.',
]

const process = [
  {
    step: '01',
    title: 'Discovery call',
    description:
      'A focused conversation to understand your current data situation, business priorities, constraints, and goals.',
  },
  {
    step: '02',
    title: 'Data estate mapping',
    description:
      'Document existing sources, pipelines, tools, gaps, and ownership across the organization.',
  },
  {
    step: '03',
    title: 'Architecture design',
    description:
      'Define the target platform foundation, technology choices, and delivery approach.',
  },
  {
    step: '04',
    title: 'Deliverable handover',
    description:
      'Present findings, answer questions, and provide all documentation for internal use.',
  },
]

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-900'

export default function ArchitectureAuditPage() {
  return (
    <main className="mx-auto max-w-5xl py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
          1–2 weeks
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-gray-950 sm:text-5xl dark:text-white">
          Architecture & Strategy Audit
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Get a clear target architecture, prioritized roadmap, and practical recommendations before
          committing to a larger data platform investment.
        </p>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Link href="/contact" className={primaryButtonClass}>
            Book an Architecture Audit
          </Link>
          <Link href="/services" className={secondaryButtonClass}>
            View All Services
          </Link>
        </div>
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">What you get</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          The audit delivers practical artifacts your team can use immediately — not a generic slide
          deck.
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
          A structured process designed to deliver clarity quickly without disrupting your team.
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
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">Ready to start?</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          Send a short note about your current data situation, the platform you want to build, and
          the timeline you have in mind.
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
