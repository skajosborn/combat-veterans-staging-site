import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import { futurePillars } from '@/lib/futureVision'

export default function FutureVision() {
  return (
    <section id="vision" className="border-t border-cvc-border bg-cvc-card py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Vision"
          className="mb-16"
          subtitle={
            <p className="mx-auto max-w-3xl text-lg font-normal text-cvc-fg-muted">
              A 1,000-acre veteran support campus where healing, stability, and career development happen
              in one connected environment.
            </p>
          }
        >
          <Link
            href="/future-goal"
            className="inline-flex items-center text-sm font-bold text-patriotic-navy transition-colors hover:text-patriotic-blue dark:text-cvc-fg dark:hover:text-cvc-fg-muted"
          >
            Explore the full vision
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </SectionTitle>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {futurePillars.map((pillar) => (
            <div
              key={pillar.title}
              className="overflow-hidden rounded-lg border border-cvc-border bg-cvc-card shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="bg-cvc-card-muted object-contain object-center"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-cvc-fg">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-cvc-fg-subtle">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/future-goal"
            className="inline-flex items-center justify-center rounded-lg border border-cvc-border bg-cvc-page-elevated px-6 py-3 font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
          >
            Learn More About the Campus Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
