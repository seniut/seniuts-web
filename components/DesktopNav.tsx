'use client'

import { usePathname } from 'next/navigation'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const baseLinkClass =
  'rounded-md border border-transparent px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-950 dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-white'

const activeLinkClass =
  'border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200'

function normalizePath(path: string) {
  if (path === '/') return path
  return path.replace(/\/$/, '')
}

export default function DesktopNav() {
  const pathname = normalizePath(usePathname() || '/')

  return (
    <div className="hidden items-center gap-x-1 md:flex">
      {headerNavLinks.map((link) => {
        const isActive = pathname === link.href

        return (
          <Link
            key={link.title}
            href={link.href}
            aria-current={isActive ? 'page' : undefined}
            className={`${baseLinkClass} ${isActive ? activeLinkClass : ''}`}
          >
            {link.title}
          </Link>
        )
      })}
    </div>
  )
}
