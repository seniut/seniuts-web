import Link from '@/components/Link'

const problems = [
  'Data is spread across tools, databases, and manual exports.',
  'Pipelines break often and nobody fully owns the foundation.',
  'Reporting is slow because the architecture was never clearly defined.',
  'Teams need momentum, but do not want long-term vendor dependency.',
]

const services = [
  {
    title: 'Architecture & Strategy Audit',
    description:
      'A clear target architecture, roadmap, risks, and next steps before major platform investment.',
  },
  {
    title: 'PoC / MVP Delivery',
    description:
      'A working foundation that proves the architecture with selected sources, orchestration, and quality checks.',
  },
  {
    title: 'Launch & Transfer',
    description:
      'A production-ready platform foundation with standards, runbooks, onboarding, and clean ownership transfer.',
  },
]

const workSteps = ['Discovery', 'Architecture', 'Delivery', 'Stabilization', 'Transfer']

const reasons = [
  {
    title: 'Senior hands-on expertise',
    description:
      'Practical data engineering and architecture experience across cloud-native stacks.',
  },
  {
    title: 'Architecture that can ship',
    description:
      'Target designs are tied to delivery plans, team capability, cost, and operational reality.',
  },
  {
    title: 'Product mindset',
    description:
      'The platform is built around business outcomes, user needs, and maintainable foundations.',
  },
  {
    title: 'Handover-first model',
    description:
      'The goal is to transfer ownership to your team, not create indefinite vendor dependency.',
  },
]

export default function HomePage() {
  return (
    <main>
      <section className="mx-auto max-w-5xl px-4 pt-16 pb-20 text-center sm:pt-24">
        <h1 className="text-4xl leading-tight font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white">
          Data platforms designed to launch — and built to be handed over.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          seniuts.com helps companies design, build, and transfer production-ready data platform
          foundations without long-term vendor dependency.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/contact"
            className="bg-primary-500 hover:bg-primary-600 rounded-lg px-6 py-3 text-sm font-semibold text-white shadow"
          >
            Book an Architecture Audit
          </Link>

          <Link
            href="/services"
            className="rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-700 dark:text-white dark:hover:bg-gray-900"
          >
            View Services
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            When data systems grow faster than ownership
          </h2>
          <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
            seniuts.com helps technology leaders move from unclear, fragile data systems to a
            scalable foundation their own team can operate.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {problems.map((problem) => (
            <div
              key={problem}
              className="rounded-lg border border-gray-200 bg-white p-5 text-sm leading-6 text-gray-700 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300"
            >
              {problem}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Services built around launch and transfer
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
              Start with clarity, prove the foundation, then launch with standards your team can
              keep using.
            </p>
          </div>
          <Link
            href="/services"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 text-sm font-semibold"
          >
            View Services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
          How we work
        </h2>
        <div className="mt-8 grid gap-3 sm:grid-cols-5">
          {workSteps.map((step, index) => (
            <div key={step} className="rounded-lg border border-gray-200 p-4 dark:border-gray-800">
              <p className="text-primary-500 text-sm font-semibold">
                {String(index + 1).padStart(2, '0')}
              </p>
              <p className="mt-2 text-sm font-medium text-gray-900 dark:text-white">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
              Why seniuts.com
            </h2>
            <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
              The engagement is designed for architecture, delivery, enablement, and clean handover.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => (
              <div key={reason.title}>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pt-16 pb-24">
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-8 text-center dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl dark:text-white">
            Start with an Architecture Audit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            Get a clear view of your current state, target architecture, roadmap, risks, and next
            steps before committing to a larger build.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 inline-flex rounded-lg px-6 py-3 text-sm font-semibold text-white shadow"
            >
              Book an Architecture Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function ServiceCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}
