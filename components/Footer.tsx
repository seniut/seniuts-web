import Link from './Link'
import siteMetadata from '@/data/siteMetadata'

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 py-10 dark:border-gray-800">
      <div className="flex flex-col gap-6 text-sm text-gray-600 sm:flex-row sm:items-start sm:justify-between dark:text-gray-400">
        <div className="max-w-md">
          <Link href="/" className="text-base font-semibold text-gray-900 dark:text-white">
            {siteMetadata.title}
          </Link>
          <p className="mt-3 leading-6">
            We design and launch production-ready data platforms, then transfer ownership to your
            team.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:items-end">
          <Link
            href={`mailto:${siteMetadata.email}`}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            {siteMetadata.email}
          </Link>
          <Link
            href={siteMetadata.linkedin}
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            LinkedIn
          </Link>
          <p>© {new Date().getFullYear()} seniuts.com</p>
        </div>
      </div>
    </footer>
  )
}
