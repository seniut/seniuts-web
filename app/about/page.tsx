import Link from '@/components/Link'

export const metadata = {
  title: 'About',
  description:
    'About seniuts.com, a boutique data consulting company focused on data architecture, launch, enablement, and handover.',
}

const principles = [
  {
    title: 'Clarity before build',
    description:
      'Every engagement starts with understanding the current data situation, risks, constraints, and target outcomes.',
  },
  {
    title: 'Delivery with ownership in mind',
    description:
      'Architecture, standards, documentation, and runbooks are created so the client team can operate the platform.',
  },
  {
    title: 'Short-term support, not dependency',
    description:
      'Stabilization can be provided after launch, but the model is designed around transfer rather than indefinite ownership.',
  },
]

const expectations = [
  'Architecture that is specific enough to guide implementation decisions.',
  'Delivery work that leaves behind standards, documentation, and operational context.',
  'A transfer plan that makes internal ownership realistic instead of aspirational.',
]

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl py-16 sm:py-20">
      <section>
        <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
          Boutique data consulting
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-gray-950 sm:text-5xl dark:text-white">
          About seniuts.com
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          seniuts.com exists for companies that need senior data architecture and delivery support,
          but do not want to depend forever on an external vendor.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          The work is focused on practical strategy, PoC / MVP foundations, production launch, team
          enablement, and clean handover to the client.
        </p>
      </section>

      <section className="mt-14 grid gap-5 md:grid-cols-3">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              {principle.title}
            </h2>
            <p className="mt-3 text-base leading-7 text-gray-600 dark:text-gray-300">
              {principle.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
          Founder-led, not agency-run
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          seniuts.com is led by Vasili Seniuts — a hands-on Lead Data Engineer and independent Data
          Platform Consultant based in Poland. You work directly with the founder, not an account
          manager. The focus is senior technical guidance, practical delivery, and clear ownership
          transfer.
        </p>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          With 8+ years of experience across Databricks, Spark, Delta Lake, Airflow, Dagster, Kafka,
          AWS, and Azure — including reducing Databricks compute costs by 25% on a 70–80TB/day
          platform — the work is grounded in production engineering realities, not vendor slideware.
        </p>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          seniuts.com works globally with CTOs, Heads of Data, and technology leaders who need a
          reliable platform foundation and a realistic transfer plan. As the practice grows, trusted
          senior engineers may join for larger projects — but the founder remains hands-on.
        </p>
      </section>

      <section className="mt-16 border-t border-gray-200/80 pt-12 dark:border-gray-800/80">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
          What clients should expect
        </h2>
        <div className="mt-6 rounded-lg border border-gray-200/80 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
          {expectations.map((expectation) => (
            <p
              key={expectation}
              className="border-b border-gray-200/80 px-5 py-4 text-base leading-7 text-gray-600 last:border-b-0 dark:border-gray-800 dark:text-gray-300"
            >
              {expectation}
            </p>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-lg border border-gray-200/80 bg-gray-50 p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-900/70">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
          Book an Architecture Audit
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          Start with a clear view of your architecture, delivery risks, and the ownership path your
          team will need after launch.
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
