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

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <section>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
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

      <section className="mt-14 grid gap-6">
        {principles.map((principle) => (
          <article
            key={principle.title}
            className="rounded-lg border border-gray-200 p-6 dark:border-gray-800"
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

      <section className="mt-14 border-t border-gray-200 pt-10 dark:border-gray-800">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
          Senior data platform expertise
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          The company is led by Vasili Seniuts, a Data Engineer and Data Architect with around eight
          years of hands-on experience across Python, Scala, Spark, SQL, AWS, Azure, Kafka, Airflow,
          Delta Lake, lakehouse architecture, and cloud-native data platforms.
        </p>
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">
          seniuts.com is based in Poland and works globally with technology leaders who need a
          reliable platform foundation and a realistic transfer plan.
        </p>
      </section>
    </main>
  )
}
