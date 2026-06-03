import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'
import { futurePillars } from '@/lib/futureVision'

export default function FutureGoalPage() {
  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-cvc-border bg-cvc-card shadow-2xl">
          <div className="relative aspect-[3/2] w-full bg-cvc-page">
            <Image
              src="/CVC-compound.png"
              alt="Future Combat Veterans to Careers 1,000-acre campus vision"
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10">
              <SectionTitle
                as="h1"
                title="The 1,000-Acre CVC Veteran Campus Vision"
                size="page"
                variant="inverse"
                align="left"
                uppercaseTitle={false}
                showBottomRule={false}
                prefix={
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/80">Future of CVC</p>
                }
              />
            </div>
          </div>

          <div className="space-y-10 p-6 sm:p-8 lg:p-10">
            <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-6">
              <p className="leading-relaxed text-cvc-fg-muted">
                Combat Veterans to Careers is working toward building a full-scale
                1,000-acre veteran support campus where healing, stability, and
                career development happen in one connected environment. This vision
                is built to help veterans transition with purpose and long-term
                support.
              </p>
            </div>

            <div className="rounded-xl border border-red-500/40 bg-red-50 p-6 dark:bg-[#2a0f1a]">
              <SectionTitle
                title="Why This Matters Right Now"
                size="subsection"
                align="left"
                blueprintStarsBackdropClassName="bg-red-50 dark:bg-[#2a0f1a]"
                className="mb-3"
              />
              <p className="leading-relaxed text-red-900 dark:text-red-200">
                Veteran suicide remains a national emergency. With dozens of
                attempts occurring daily, this campus is designed to provide
                immediate intervention, sustained counseling, and a path toward
                renewed purpose before crisis becomes tragedy.
              </p>
              <p className="mt-3 font-semibold text-red-800 dark:text-red-300">
                CVC&apos;s mission: intervene early, support consistently, and save lives.
              </p>
            </div>

            <div>
              <SectionTitle
                title="Planned Campus Components"
                size="subsection"
                align="left"
                blueprintStarsBackdropClassName="bg-cvc-card"
                className="mb-5"
              />
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                {futurePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-5 shadow-md transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]"
                  >
                    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-lg border border-cvc-border-muted bg-cvc-page">
                      <Image
                        src={pillar.image}
                        alt={pillar.title}
                        fill
                        className="object-contain object-center"
                      />
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-cvc-fg">
                      {pillar.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-cvc-fg-muted">
                      {pillar.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-6">
              <SectionTitle
                title="Help Build This Future"
                size="subsection"
                align="left"
                blueprintStarsBackdropClassName="bg-cvc-card-inner"
                className="mb-3"
              />
              <p className="leading-relaxed text-cvc-fg-muted">
                This vision is funded by donors, sponsors, partners, and community
                support. Every contribution helps create a campus where veterans can
                heal, train, work, and rebuild.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
                >
                  Support the Future Campus
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg border border-cvc-border-strong px-6 py-3 font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
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
