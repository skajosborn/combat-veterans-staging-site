import Image from 'next/image'
import { futurePillars } from '@/lib/futureVision'

export default function FutureGoalPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#111831] shadow-2xl">
          <div className="relative w-full aspect-[3/2] bg-[#0a0e27]">
            <Image
              src="/CVC-compound.png"
              alt="Future Combat Veterans to Careers 1,000-acre campus vision"
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/90 via-[#0a0e27]/55 to-[#0a0e27]/15" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Future of CVC
              </p>
              <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                The 1,000-Acre CVC Veteran Campus Vision
              </h1>
            </div>
          </div>

          <div className="space-y-10 p-6 sm:p-8 lg:p-10">
            <div className="rounded-xl border border-gray-700 bg-[#0d1533] p-6">
              <p className="text-gray-200 leading-relaxed">
                Combat Veterans to Careers is working toward building a full-scale
                1,000-acre veteran support campus where healing, stability, and
                career development happen in one connected environment. This vision
                is built to help veterans transition with purpose and long-term
                support.
              </p>
            </div>

            <div className="rounded-xl border border-red-500/40 bg-[#2a0f1a] p-6">
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Why This Matters Right Now
              </h2>
              <p className="text-red-200 leading-relaxed">
                Veteran suicide remains a national emergency. With dozens of
                attempts occurring daily, this campus is designed to provide
                immediate intervention, sustained counseling, and a path toward
                renewed purpose before crisis becomes tragedy.
              </p>
              <p className="mt-3 text-red-300 font-semibold">
                CVC&apos;s mission: intervene early, support consistently, and save lives.
              </p>
            </div>

            <div>
              <h2 className="mb-5 text-2xl font-semibold text-white sm:text-3xl">
                Planned Campus Components
              </h2>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {futurePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-gray-700 bg-[#0d1533] p-5 transition-colors hover:border-gray-500"
                  >
                    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-gray-700 bg-[#0a0e27]">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-white">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#0d1533] p-6">
              <h2 className="mb-3 text-2xl font-semibold text-white">
                Help Build This Future
              </h2>
              <p className="text-gray-300 leading-relaxed">
                This vision is funded by donors, sponsors, partners, and community
                support. Every contribution helps create a campus where veterans can
                heal, train, work, and rebuild.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-[#0a0e27] transition-colors hover:bg-gray-100"
                >
                  Support the Future Campus
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800/50"
                >
                  Partner With CVC
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
