import Image from 'next/image'
import Link from 'next/link'
import { futurePillars } from '@/lib/futureVision'

export default function FutureVision() {
  return (
    <section id="vision" className="py-24 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Vision
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-4">
            A 1,000-acre veteran support campus where healing, stability, and career development happen in one connected environment.
          </p>
          <Link
            href="/future-goal"
            className="inline-flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors"
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
              className="bg-[#111831] rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-800 overflow-hidden hover:border-gray-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-contain object-center bg-[#0a0e27]"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {pillar.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/future-goal"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-[#0a0e27] transition-colors hover:bg-gray-100"
          >
            Learn More About the Campus Vision
          </Link>
        </div>
      </div>
    </section>
  )
}
