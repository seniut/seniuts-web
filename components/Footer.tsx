import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200/80 py-12 dark:border-gray-800/80">
      <div className="grid gap-10 text-sm text-gray-600 lg:grid-cols-[1.1fr_0.9fr] dark:text-gray-400">
        <div className="max-w-lg">
          <Link href="/" className="flex items-center gap-3">
            <span className="border-primary-100 dark:border-primary-900/60 flex h-9 w-9 items-center justify-center rounded-lg border bg-white shadow-sm dark:bg-gray-900">
              <Logo />
            </span>
            <span className="text-base font-semibold text-gray-950 dark:text-white">
              {siteMetadata.title}
            </span>
          </Link>
          <p className="mt-4 leading-6">
            Independent data platform consulting: architecture, PoC / MVP delivery, launch, and
            ownership transfer.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:justify-items-end">
          <div>
            <h2 className="text-xs font-semibold text-gray-950 uppercase dark:text-white">
              Navigation
            </h2>
            <nav className="mt-4 flex flex-col gap-3" aria-label="Footer">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-medium text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-semibold text-gray-950 uppercase dark:text-white">
              Contact
            </h2>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                href={`mailto:${siteMetadata.email}`}
                className="text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200"
              >
                {siteMetadata.email}
              </Link>
              <Link
                href={siteMetadata.linkedin}
                className="text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200"
              >
                LinkedIn
              </Link>
            </div>

            <Link
              href="/architecture-audit"
              className="mt-5 inline-flex rounded-md bg-gray-950 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
            >
              Book an Audit
            </Link>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-200/80 pt-6 text-sm text-gray-500 dark:border-gray-800/80 dark:text-gray-500">
        © {new Date().getFullYear()} seniuts.com
      </div>
    </footer>
  )
}
