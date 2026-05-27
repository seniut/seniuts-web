import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'
import Link from './Link'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const Header = () => {
  let headerClass =
    'flex w-full items-center justify-between border-b border-gray-200/80 bg-white/95 py-4 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/90'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0 z-50'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="flex items-center gap-3">
          <div className="border-primary-100 dark:border-primary-900/60 flex h-9 w-9 items-center justify-center rounded-lg border bg-white shadow-sm dark:bg-gray-900">
            <Logo />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="hidden text-base font-semibold text-gray-950 sm:block dark:text-white">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center gap-2 leading-5">
        <DesktopNav />
        <Link
          href="/architecture-audit"
          className="bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-400 hidden rounded-md px-4 py-2.5 text-sm font-semibold text-white shadow-sm md:inline-flex dark:text-gray-950"
        >
          Book an Audit
        </Link>
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
