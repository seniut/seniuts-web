import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Book an Architecture Audit with seniuts.com.',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-4xl py-16 sm:py-20">
      <section className="max-w-3xl">
        <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
          Contact
        </p>

        <h1 className="mt-6 text-4xl font-semibold text-gray-950 sm:text-5xl dark:text-white">
          Book an Architecture Audit
        </h1>

        <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
          Send a short note about your current data situation, the platform you want to build or
          improve, and the timeline you have in mind.
        </p>
      </section>

      <div className="mt-10">
        <ContactForm />
      </div>
    </main>
  )
}
