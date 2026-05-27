import Link from '@/components/Link'

export const metadata = {
  title: 'Resources',
  description:
    'Free guides, checklists, and resources for data platform architecture and Databricks cost optimization.',
}

const resources = [
  {
    title: 'Databricks Cost Optimization Checklist',
    description:
      '15 tactics to reduce your Databricks compute costs by 20–40%. Quick wins, medium effort, and architectural changes.',
    type: 'PDF Checklist',
    comingSoon: true,
  },
  {
    title: 'Data Platform Architecture Template',
    description:
      'A visual template for lakehouse architecture covering ingestion, storage, transformation, and serving layers.',
    type: 'Diagram Template',
    comingSoon: true,
  },
  {
    title: 'Platform Handover Checklist',
    description:
      'Everything needed for a clean ownership transfer: documentation, runbooks, onboarding, and knowledge transfer.',
    type: 'PDF Checklist',
    comingSoon: true,
  },
]

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-5xl py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
          Free Resources
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-gray-950 sm:text-5xl dark:text-white">
          Guides & Checklists
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Practical resources for data platform architecture, Databricks cost optimization, and
          platform operations. Built from real project experience.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <article
            key={resource.title}
            className="border-primary-200 dark:border-t-primary-900 relative rounded-lg border border-t-2 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
          >
            {resource.comingSoon && (
              <span className="absolute top-4 right-4 rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400">
                Coming Soon
              </span>
            )}
            <p className="text-primary-700 dark:text-primary-300 text-xs font-semibold uppercase">
              {resource.type}
            </p>
            <h2 className="mt-3 text-lg font-semibold text-gray-900 dark:text-white">
              {resource.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
              {resource.description}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-lg border border-gray-200/80 bg-gray-50 p-8 shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-900/70">
        <h2 className="text-2xl font-semibold text-gray-950 dark:text-white">
          Get notified when resources launch
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
          Resources are being finalized. In the meantime, book an Architecture Audit to get
          personalized recommendations for your platform.
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
