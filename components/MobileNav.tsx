'use client'

import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { usePathname } from 'next/navigation'
import { Fragment, useState, useEffect, useRef } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import siteMetadata from '@/data/siteMetadata'
import Logo from '@/data/logo.svg'

const baseLinkClass =
  'w-full rounded-md border border-transparent px-3 py-3 text-base font-semibold text-gray-900 outline outline-0 hover:bg-gray-100 dark:text-gray-100 dark:hover:bg-gray-900'

const activeLinkClass =
  'border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200'

function normalizePath(path: string) {
  if (path === '/') return path
  return path.replace(/\/$/, '')
}

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const navRef = useRef(null)
  const pathname = normalizePath(usePathname() || '/')

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        enableBodyScroll(navRef.current)
      } else {
        // Prevent scrolling
        disableBodyScroll(navRef.current)
      }
      return !status
    })
  }

  useEffect(() => {
    return clearAllBodyScrollLocks
  })

  return (
    <>
      <button
        aria-label="Toggle Menu"
        onClick={onToggleNav}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50 md:hidden dark:border-gray-800 dark:text-gray-100 dark:hover:border-gray-700 dark:hover:bg-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <Transition appear show={navShow} as={Fragment} unmount={false}>
        <Dialog as="div" onClose={onToggleNav} unmount={false}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            unmount={false}
          >
            <div className="fixed inset-0 z-60 bg-gray-950/30 backdrop-blur-sm" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="translate-x-full opacity-0"
            enterTo="translate-x-0 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-x-0 opacity-100"
            leaveTo="translate-x-full opacity-0"
            unmount={false}
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-70 h-full w-full max-w-sm border-l border-gray-200 bg-white p-6 duration-300 dark:border-gray-800 dark:bg-gray-950">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  aria-label={siteMetadata.headerTitle}
                  className="flex items-center gap-3"
                  onClick={onToggleNav}
                >
                  <span className="border-primary-100 dark:border-primary-900/60 flex h-9 w-9 items-center justify-center rounded-lg border bg-white shadow-sm dark:bg-gray-900">
                    <Logo />
                  </span>
                  <span className="text-base font-semibold text-gray-950 dark:text-white">
                    {siteMetadata.headerTitle}
                  </span>
                </Link>

                <button
                  className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 text-gray-900 hover:border-gray-300 hover:bg-gray-50 dark:border-gray-800 dark:text-gray-100 dark:hover:border-gray-700 dark:hover:bg-gray-900"
                  aria-label="Toggle Menu"
                  onClick={onToggleNav}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <nav
                ref={navRef}
                className="mt-8 flex basis-0 flex-col items-start gap-1 overflow-y-auto text-left"
              >
                {headerNavLinks.map((link) => {
                  const isActive = pathname === link.href

                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      aria-current={isActive ? 'page' : undefined}
                      className={`${baseLinkClass} ${isActive ? activeLinkClass : ''}`}
                      onClick={onToggleNav}
                    >
                      {link.title}
                    </Link>
                  )
                })}
              </nav>

              <div className="mt-8 border-t border-gray-200 pt-6 dark:border-gray-800">
                <Link
                  href="/contact"
                  className="inline-flex w-full justify-center rounded-md bg-gray-950 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
                  onClick={onToggleNav}
                >
                  Book an Architecture Audit
                </Link>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  )
}

export default MobileNav
