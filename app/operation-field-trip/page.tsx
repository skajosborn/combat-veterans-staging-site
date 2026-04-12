import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function OperationFieldTripPage() {
  return (
    <main className="min-h-screen bg-cvc-page pb-20 pt-24">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cvc-border bg-cvc-card shadow-2xl">
          <div className="relative h-72 w-full bg-cvc-page sm:h-96 lg:h-[28rem]">
            <Image
              src="/OFT.jpg"
              alt="Operation Field Trip"
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
              <SectionTitle
                as="h1"
                title="Operation Field Trip"
                size="page"
                variant="inverse"
                align="left"
                uppercaseTitle={false}
                showBottomRule={false}
                prefix={
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/80 sm:text-sm">
                    Veteran Healing Mission
                  </p>
                }
              />
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8 lg:p-10">
            <div className="rounded-2xl border border-cvc-border bg-cvc-card-muted p-6 sm:p-7">
              <SectionTitle title="What Is Operation Field Trip?" size="subsection" align="left" className="mb-3" />
              <p className="leading-relaxed text-cvc-fg-muted">
                Operation Field Trip is a healing mission-by veterans, for
                veterans and first responders. In partnership with Take A Knee
                Foundation, we provide medically assisted ketamine therapy
                combined with integrative and the counseling to support those
                battling PTSD, depression, and anxiety.
              </p>
            </div>

            <div className="rounded-2xl border border-cvc-border bg-cvc-card-muted p-6 sm:p-7">
              <SectionTitle
                title="Why Ketamine-Assisted Therapy?"
                size="subsection"
                align="left"
                className="mb-3"
              />
              <p className="leading-relaxed text-cvc-fg-muted">
                Ketamine therapy, when paired with guided integration support,
                has shown rapid and lasting relief for individuals suffering
                from trauma-related mental health conditions. For many, it&apos;s
                a lifeline when nothing else has worked.
              </p>
            </div>

            <div className="rounded-2xl border border-cvc-border bg-cvc-card-muted p-6 sm:p-7">
              <SectionTitle title="The Cost of Healing" size="subsection" align="left" className="mb-4" />
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-deep p-4">
                  <p className="text-2xl font-bold text-cvc-fg">$625</p>
                  <p className="mt-1 text-sm text-cvc-fg-subtle">
                    Approximate cost per treatment including therapy integration
                  </p>
                </div>
                <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-deep p-4">
                  <p className="text-2xl font-bold text-cvc-fg">$3,750</p>
                  <p className="mt-1 text-sm text-cvc-fg-subtle">
                    Recommended 6-treatment care series per participant
                  </p>
                </div>
              </div>
              <p className="leading-relaxed text-cvc-fg-muted">
                Your support helps fund this life-changing care for those
                who&apos;ve served and sacrificed.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
              <div className="rounded-2xl border border-cvc-border-muted bg-cvc-card-inner p-6 lg:col-span-3">
                <SectionTitle title="How You Can Help" size="subsection" align="left" className="mb-3" />
                <ul className="list-disc space-y-2 pl-6 text-cvc-fg-muted">
                  <li>Sponsor a veteran or first responder</li>
                  <li>Share this mission with your community</li>
                  <li>Donate to support treatment scholarships</li>
                </ul>
                <p className="mt-4 leading-relaxed text-cvc-fg-muted">
                  When making a donation, please input &ldquo;Operation Field
                  Trip&rdquo; in the &ldquo;Transaction Reason&rdquo; form box.
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-cvc-border-muted bg-cvc-card-inner p-6 lg:col-span-2">
                <div>
                  <SectionTitle
                    as="h3"
                    title="Support a Veteran Today"
                    size="subsection"
                    align="left"
                    showBottomRule={false}
                    uppercaseTitle={false}
                    titleClassName="!text-xl"
                    className="mb-2"
                  />
                  <p className="mb-5 leading-relaxed text-cvc-fg-muted">
                    Your contribution helps deliver life-changing care when it
                    matters most.
                  </p>
                </div>
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
                >
                  Donate to Operation Field Trip
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cvc-border-muted bg-cvc-card-inner p-4 sm:p-6">
              <SectionTitle title="Watch: Operation Field Trip" size="subsection" align="left" className="mb-4" />
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-cvc-border-muted">
                <iframe
                  className="h-full w-full"
                  src="https://www.youtube.com/embed/VtgOp2A6BAM"
                  title="Operation Field Trip Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
