import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'

const mailtoHref = `mailto:${siteMetadata.email}?subject=Architecture%20Audit%20for%20a%20data%20platform`

export default function ContactForm() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="grid gap-6 sm:grid-cols-2">
        <ContactItem label="Email" href={mailtoHref} value={siteMetadata.email} />
        <ContactItem label="LinkedIn" href={siteMetadata.linkedin} value="Connect on LinkedIn" />
      </div>

      <div className="mt-8">
        <Link
          href={mailtoHref}
          className="bg-primary-500 hover:bg-primary-600 inline-flex rounded-lg px-6 py-3 text-sm font-semibold text-white shadow"
        >
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
        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 mt-2 block text-sm break-words"
      >
        {value}
      </Link>
    </div>
  )
}
