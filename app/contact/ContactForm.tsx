import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const mailtoHref = `mailto:${siteMetadata.email}`
const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

export default function ContactForm() {
  return (
    <div className="rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm sm:p-8 dark:border-gray-800 dark:bg-gray-950">
      <div className="grid gap-6 sm:grid-cols-2">
        <ContactItem label="Email" href={mailtoHref} value={siteMetadata.email} />
        <ContactItem label="LinkedIn" href={siteMetadata.linkedin} value="Connect on LinkedIn" />
      </div>

      <div className="mt-8">
        <Link href={mailtoHref} className={primaryButtonClass}>
          Book an Architecture Audit
        </Link>
      </div>
    </div>
  )
}

function ContactItem({ label, href, value }: { label: string; href: string; value: string }) {
  return (
    <div>
      <p className="text-sm font-semibold text-gray-900 dark:text-white">{label}</p>
      <Link
        href={href}
        className="text-primary-700 hover:text-primary-800 dark:text-primary-300 dark:hover:text-primary-200 mt-2 block text-sm break-words"
      >
        {value}
      </Link>
    </div>
  )
}
