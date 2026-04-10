import Image from 'next/image'
import Link from 'next/link'
import { futurePillars } from '@/lib/futureVision'

export default function FutureVision() {
  return (
    <section id="vision" className="bg-cvc-page py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-cvc-fg sm:text-5xl md:text-6xl">
            Our Vision
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-16 bg-cvc-border-muted"></div>
          <p className="mx-auto mb-4 max-w-3xl text-lg text-cvc-fg-subtle">
            A 1,000-acre veteran support campus where healing, stability, and career development happen in one connected environment.
          </p>
          <Link
            href="/future-goal"
            className="inline-flex items-center text-sm font-semibold text-cvc-fg transition-colors hover:text-cvc-fg-muted"
          >
            Explore the full vision
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

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
                  className="bg-cvc-page object-contain object-center"
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
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
          >
            Learn More About the Campus Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
