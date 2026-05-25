export const metadata = {
  title: 'Services',
  description:
    'Architecture audit, PoC / MVP delivery, and Launch & Transfer services for modern data platforms.',
}

const packages = [
  {
    title: 'Architecture & Strategy Audit',
    duration: '1–2 weeks',
    outcome: 'Clear target architecture and roadmap.',
    description:
      'For companies that need a practical view of the current state before investing in a data platform build.',
    deliverables: [
      'Current state assessment',
      'Target architecture',
      'Roadmap',
      'Risks and quick wins',
      'Technology recommendations',
      'Cost and scalability considerations',
    ],
  },
  {
    title: 'PoC / MVP Delivery',
    duration: '3–6 weeks',
    outcome: 'Working data platform foundation.',
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
      'Runbooks',
      'Onboarding',
      'Knowledge transfer',
      'Optional short-term stabilization support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Data platform services for launch and handover
        </h1>
        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          seniuts.com helps companies move from unclear data foundations to production-ready
          platforms their own teams can operate.
        </p>
      </section>

      <section className="mt-14 space-y-8">
        {packages.map((service) => (
          <ServicePackage key={service.title} service={service} />
        ))}
      </section>
    </main>
  )
}

function ServicePackage({ service }: { service: (typeof packages)[number] }) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-primary-500 text-sm font-semibold">{service.duration}</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
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
          <h3 className="text-sm font-semibold tracking-wide text-gray-900 uppercase dark:text-white">
            Deliverables
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {service.deliverables.map((deliverable) => (
              <li key={deliverable} className="text-sm leading-6 text-gray-600 dark:text-gray-300">
                {deliverable}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}
