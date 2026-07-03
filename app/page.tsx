import type { ReactNode } from 'react'
import Link from '@/components/Link'

const problems = [
  'Data is spread across tools, databases, and manual exports.',
  'Pipelines break often and nobody fully owns the foundation.',
  'Reporting is slow because the architecture was never clearly defined.',
  'Data quality checks are missing or inconsistent.',
  'Observability and runbooks do not exist.',
  'Spark, Airflow, or Kafka workloads are expensive or unreliable.',
  'Teams need momentum, but do not want long-term vendor dependency.',
  'There is no realistic platform roadmap.',
]

const idealClients = [
  'Scale-ups building their first serious data platform.',
  'Mid-size companies with fragile pipelines and unclear ownership.',
  'Teams that need architecture before hiring a full data team.',
  'Companies that want delivery momentum without long-term vendor dependency.',
]

const services = [
  {
    title: 'Architecture & Strategy Audit',
    description:
      'A clear target architecture, roadmap, risks, and next steps before major platform investment.',
  },
  {
    title: 'PoC / MVP Delivery',
    description:
      'A working foundation that proves the architecture with selected sources, orchestration, and quality checks.',
  },
  {
    title: 'Launch & Transfer',
    description:
      'A production-ready platform foundation with standards, runbooks, onboarding, and clean ownership transfer.',
  },
  {
    title: 'Fractional Technical Data Lead',
    description:
      'Embedded senior guidance during platform build or transition while your internal team grows.',
  },
]

const outcomes = [
  'Clear target architecture',
  'Working PoC / MVP foundation',
  'Documented engineering standards',
  'Ownership transfer plan',
  'Optional stabilization support',
]

const workSteps = [
  {
    title: 'Discovery',
    description:
      'Map the current data estate, decision constraints, business priorities, and ownership gaps.',
  },
  {
    title: 'Architecture',
    description:
      'Define the target foundation, technology choices, delivery roadmap, and standards before build.',
  },
  {
    title: 'Delivery',
    description:
      'Build the PoC / MVP or production foundation with selected sources, orchestration, and quality checks.',
  },
  {
    title: 'Stabilization',
    description:
      'Harden the operating model with observability basics, runbooks, and practical delivery fixes.',
  },
  {
    title: 'Transfer',
    description:
      'Onboard the client team, hand over documentation, and leave a clear path for internal ownership.',
  },
]

const trustSignals = [
  {
    title: 'Senior hands-on data expertise',
    description:
      'Architecture decisions are grounded in production data engineering experience, not vendor slideware.',
  },
  {
    title: 'Cloud-native and lakehouse depth',
    description:
      'Experience across AWS, Azure, Spark, Kafka, Airflow, Delta Lake, and modern platform patterns.',
  },
  {
    title: 'Production-first thinking',
    description:
      'Delivery choices account for operations, cost, scalability, observability, and team capability.',
  },
  {
    title: 'Documentation by design',
    description:
      'Standards, runbooks, and onboarding are part of the work, not a cleanup activity at the end.',
  },
  {
    title: 'Practical decisions over tool hype',
    description:
      'Recommendations are based on constraints, business value, and maintainability rather than novelty.',
  },
  {
    title: 'Clear transfer path',
    description:
      'The engagement is designed to give your team ownership instead of extending external dependency.',
  },
]

const proofPoints = [
  {
    metric: '~25%',
    label: 'Spark / Databricks compute cost reduced on a high-volume production platform.',
  },
  {
    metric: '70-80 TB/day',
    label: 'Scale of the data platform where that optimization was delivered.',
  },
  {
    metric: '8+ years',
    label: 'Hands-on data platform engineering across AWS, Azure, and Databricks.',
  },
]

const primaryButtonClass =
  'inline-flex items-center justify-center rounded-md bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 dark:bg-primary-500 dark:text-gray-950 dark:hover:bg-primary-400'

const secondaryButtonClass =
  'inline-flex items-center justify-center rounded-md border border-primary-300 px-6 py-3 text-sm font-semibold text-gray-900 hover:border-primary-500 hover:bg-primary-50 dark:border-primary-800 dark:text-white dark:hover:border-primary-600 dark:hover:bg-primary-950/30'

const textLinkClass =
  'text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-semibold'

export default function HomePage() {
  return (
    <main>
      <section className="relative mx-auto max-w-6xl overflow-hidden border-b border-gray-200/80 pt-16 pb-20 sm:pt-24 sm:pb-24 dark:border-gray-800/80">
        <div className="from-primary-100/50 dark:from-primary-950/30 absolute inset-0 -z-10 bg-gradient-to-br via-white to-gray-50 dark:via-gray-950 dark:to-gray-950" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[linear-gradient(to_right,rgba(148,163,184,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.14)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] bg-[size:36px_36px] dark:bg-[linear-gradient(to_right,rgba(51,65,85,0.38)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,65,85,0.38)_1px,transparent_1px)]" />

        {/* Data flow node decoration */}
        <DataFlowBackground />

        <div className="grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
          <div className="text-center lg:text-left">
            <p className="border-primary-200 bg-primary-50 text-primary-800 dark:border-primary-900/60 dark:bg-primary-950/40 dark:text-primary-200 inline-flex rounded-md border px-3 py-1 text-xs font-semibold">
              Databricks & Spark · Lakehouse Architecture · Cost Optimization
            </p>

            <h1 className="mt-6 max-w-3xl text-4xl leading-tight font-semibold text-gray-950 sm:text-5xl lg:text-6xl dark:text-white">
              <span className="block">Launch-ready data platforms.</span>
              <span className="block">Built for handover.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-300">
              Founder-led data platform consulting for scale-ups that need architecture, cost
              optimization, and a clear path to internal ownership.
            </p>

            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row lg:items-start">
              <Link href="/contact" className={primaryButtonClass}>
                Book an Architecture Audit
              </Link>

              <Link href="/services" className={secondaryButtonClass}>
                View Services
              </Link>
            </div>
          </div>

          <HeroDiagram />
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
          <HeroPoint title="Architecture" description="Target state, roadmap, and standards." />
          <HeroPoint title="Delivery" description="PoC / MVP foundation and launch support." />
          <HeroPoint title="Transfer" description="Runbooks, onboarding, and ownership plan." />
        </div>
      </section>

      <Section alternate>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <SectionTitle>When data systems grow faster than ownership</SectionTitle>
            <SectionLead>
              seniuts.com helps CTOs and Heads of Data move from unclear, fragile data systems to a
              scalable foundation their own team can operate.
            </SectionLead>
          </div>

          <div className="rounded-lg border border-gray-200/80 bg-gray-50/80 p-3 shadow-sm dark:border-gray-800 dark:bg-gray-950/60">
            {problems.map((problem, index) => (
              <ProblemRow key={problem} index={index + 1}>
                {problem}
              </ProblemRow>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <SectionTitle>Who this is for</SectionTitle>
          <SectionLead>
            The best fit is a leadership team that needs clarity, delivery momentum, and a realistic
            path to internal ownership.
          </SectionLead>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {idealClients.map((client) => (
            <TextPanel key={client}>{client}</TextPanel>
          ))}
        </div>
      </Section>

      <Section>
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <SectionTitle>Services built around launch and transfer</SectionTitle>
            <SectionLead>
              Start with clarity, prove the foundation, then launch with standards your team can
              keep using.
            </SectionLead>
          </div>
          <Link href="/services" className={textLinkClass}>
            View Services
          </Link>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              index={index + 1}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

        <div className="mt-8">
          <Link href="/contact" className={primaryButtonClass}>
            Book an Architecture Audit
          </Link>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionTitle>What you get</SectionTitle>
            <SectionLead>
              The work is structured around assets your team can use after the external engagement
              ends.
            </SectionLead>
          </div>

          <div className="rounded-lg border border-gray-200/80 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-950">
            {outcomes.map((outcome) => (
              <div
                key={outcome}
                className="border-b border-gray-200/80 px-5 py-4 text-base font-medium text-gray-900 last:border-b-0 dark:border-gray-800 dark:text-white"
              >
                {outcome}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section alternate>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <SectionTitle>How we work</SectionTitle>
            <SectionLead>
              The engagement is designed to move from ambiguity to a foundation your team can own.
              Each step reduces delivery risk and prepares the handover.
            </SectionLead>
          </div>

          <div className="space-y-4 border-l border-gray-200 pl-5 dark:border-gray-800">
            {workSteps.map((step, index) => (
              <ProcessStep
                key={step.title}
                index={index + 1}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl">
          <SectionTitle>Built on practical engineering principles</SectionTitle>
          <SectionLead>
            Credibility comes from senior, hands-on delivery experience and a clear transfer model —
            not invented logos or testimonials. The numbers below reflect real production work.
          </SectionLead>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {proofPoints.map((point) => (
            <div
              key={point.metric}
              className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <p className="text-3xl font-semibold text-gray-950 dark:text-white">{point.metric}</p>
              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {point.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((signal) => (
            <div
              key={signal.title}
              className="rounded-lg border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                {signal.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <section className="mx-auto max-w-6xl pt-16 pb-24">
        <div className="rounded-lg border border-gray-200/80 bg-gray-50 p-8 text-center shadow-sm sm:p-10 dark:border-gray-800 dark:bg-gray-900/70">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl dark:text-white">
            Start with an Architecture Audit
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-600 dark:text-gray-300">
            Get a clear view of your current state, target architecture, roadmap, risks, and next
            steps before committing to a larger build.
          </p>
          <div className="mt-8">
            <Link href="/contact" className={primaryButtonClass}>
              Book an Architecture Audit
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Section({ children, alternate }: { children: ReactNode; alternate?: boolean }) {
  return (
    <section
      className={`mx-auto max-w-6xl border-t border-gray-200/80 py-16 sm:py-20 dark:border-gray-800/80 ${
        alternate ? 'rounded-lg bg-gray-50/60 px-6 sm:px-10 dark:bg-gray-900/30' : ''
      }`}
    >
      {children}
    </section>
  )
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="text-2xl font-semibold text-gray-950 sm:text-3xl dark:text-white">{children}</h2>
  )
}

function SectionLead({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-300">{children}</p>
}

function HeroDiagram() {
  const layers = [
    {
      title: 'Source systems',
      description: 'Applications, databases, events, and manual exports.',
    },
    {
      title: 'Platform foundation',
      description: 'Ingestion, raw / curated layers, orchestration, and quality checks.',
    },
    {
      title: 'Operational handover',
      description: 'Standards, runbooks, onboarding, and ownership transfer.',
    },
  ]

  return (
    <div className="hero-glow relative mx-auto w-full max-w-lg rounded-lg border border-gray-200/80 bg-white/85 p-5 backdrop-blur dark:border-gray-800 dark:bg-gray-950/85">
      <div className="flex items-center justify-between border-b border-gray-200/80 pb-4 dark:border-gray-800">
        <p className="text-sm font-semibold text-gray-950 dark:text-white">Architecture path</p>
        <p className="text-primary-700 dark:text-primary-300 text-xs font-semibold">
          Launch & Transfer
        </p>
      </div>

      <div className="mt-5 space-y-3">
        {layers.map((layer, index) => (
          <div
            key={layer.title}
            className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-md border border-gray-200/80 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/50"
          >
            <div className="bg-primary-50 text-primary-800 dark:bg-primary-950/60 dark:text-primary-200 flex h-9 w-9 items-center justify-center rounded-md text-sm font-semibold">
              {String(index + 1).padStart(2, '0')}
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-950 dark:text-white">{layer.title}</p>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {layer.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 grid grid-cols-3 gap-2 text-center text-xs font-semibold text-gray-600 dark:text-gray-300">
        <div className="rounded-md border border-gray-200/80 bg-gray-50 px-2 py-2 dark:border-gray-800 dark:bg-gray-900/60">
          Strategy
        </div>
        <div className="rounded-md border border-gray-200/80 bg-gray-50 px-2 py-2 dark:border-gray-800 dark:bg-gray-900/60">
          Build
        </div>
        <div className="rounded-md border border-gray-200/80 bg-gray-50 px-2 py-2 dark:border-gray-800 dark:bg-gray-900/60">
          Enable
        </div>
      </div>
    </div>
  )
}

function HeroPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-gray-200/80 bg-white/80 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-sm font-semibold text-gray-900 dark:text-white">{title}</p>
      <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function ProblemRow({ index, children }: { index: number; children: ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-gray-200/80 px-3 py-4 last:border-b-0 dark:border-gray-800">
      <span className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
        {String(index).padStart(2, '0')}
      </span>
      <p className="text-sm leading-6 text-gray-700 dark:text-gray-300">{children}</p>
    </div>
  )
}

function TextPanel({ children }: { children: ReactNode }) {
  return (
    <div className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-6 text-sm leading-6 text-gray-700 shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:text-gray-300">
      {children}
    </div>
  )
}

function ProcessStep({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  return (
    <div className="relative rounded-lg border border-gray-200/80 bg-white p-5 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <div className="bg-primary-500 absolute top-6 -left-[1.8rem] h-2.5 w-2.5 rounded-sm ring-4 ring-white dark:ring-gray-950" />
      <p className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
        {String(index).padStart(2, '0')}
      </p>
      <h3 className="mt-2 text-base font-semibold text-gray-950 dark:text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function ServiceCard({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  return (
    <div className="border-primary-200 dark:border-t-primary-900 rounded-lg border border-t-2 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950">
      <p className="text-primary-700 dark:text-primary-300 text-sm font-semibold">
        {String(index).padStart(2, '0')}
      </p>
      <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  )
}

function DataFlowBackground() {
  // Abstract network of nodes and edges suggesting data flow / pipelines
  const nodes = [
    { cx: 80, cy: 60, delay: 0 },
    { cx: 200, cy: 30, delay: 0.5 },
    { cx: 320, cy: 80, delay: 1 },
    { cx: 440, cy: 40, delay: 1.5 },
    { cx: 560, cy: 90, delay: 0.3 },
    { cx: 680, cy: 50, delay: 0.8 },
    { cx: 800, cy: 70, delay: 1.2 },
    { cx: 920, cy: 35, delay: 0.6 },
    { cx: 140, cy: 120, delay: 1.8 },
    { cx: 360, cy: 140, delay: 0.4 },
    { cx: 600, cy: 130, delay: 1.1 },
    { cx: 760, cy: 150, delay: 0.9 },
    { cx: 900, cy: 120, delay: 1.4 },
  ]

  const edges = [
    [0, 1],
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
    [0, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [2, 9],
    [4, 10],
    [6, 12],
  ]

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-44 overflow-hidden opacity-60 dark:opacity-80">
      <svg
        className="h-full w-full"
        viewBox="0 0 1000 160"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {edges.map(([from, to], i) => (
          <line
            key={i}
            x1={nodes[from].cx}
            y1={nodes[from].cy}
            x2={nodes[to].cx}
            y2={nodes[to].cy}
            className="animate-flow-line stroke-primary-500/50 dark:stroke-primary-400/40"
            strokeWidth="1.5"
            style={{ animationDelay: `${nodes[from].delay}s` }}
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r="3.5"
            className="animate-pulse-node fill-primary-500/80 dark:fill-primary-400/70"
            style={{ animationDelay: `${node.delay}s` }}
          />
        ))}
      </svg>
    </div>
  )
}
