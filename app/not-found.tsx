import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start py-16 md:mt-16 md:flex-row md:items-center md:justify-center md:space-x-8">
      <div className="pb-8 md:pb-0">
        <h1 className="text-6xl leading-none font-semibold text-gray-950 md:border-r md:border-gray-200 md:px-6 md:text-8xl dark:border-gray-800 dark:text-white">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-semibold text-gray-950 md:text-2xl dark:text-white">
          Sorry we couldn't find this page.
        </p>
        <p className="mb-8 text-gray-600 dark:text-gray-300">
          The main seniuts.com pages are still available from the homepage.
        </p>
        <Link
          href="/"
          className="inline-flex rounded-md bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
