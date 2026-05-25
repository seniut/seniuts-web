import ContactForm from './ContactForm'

export const metadata = {
  title: 'Contact',
  description: 'Book an Architecture Audit with seniuts.com.',
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
        Book an Architecture Audit
      </h1>

      <p className="mt-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
        Send a short note about your current data situation, the platform you want to build or
        improve, and the timeline you have in mind.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>
    </main>
  )
}
