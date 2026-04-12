import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-cvc-page pb-20 pt-24 sm:pt-28">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-cvc-border bg-cvc-card shadow-2xl">
          <div className="border-y border-cvc-border bg-cvc-page-elevated p-8 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <SectionTitle
                as="h1"
                title="Stand With Our Veterans"
                size="display"
                blueprintStarsBackdropClassName="bg-cvc-page-elevated"
                prefix={
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cvc-fg-muted">
                    Support Our Mission
                  </p>
                }
                subtitle={
                  <p className="text-base leading-relaxed text-cvc-fg-muted sm:text-lg">
                    Your gift helps Combat Veterans to Careers provide education, housing, wellness, and employment
                    transition support to combat veterans and their families. Your donation can save a life.
                  </p>
                }
              />
            </div>
          </div>

          <div className="relative w-full bg-cvc-page">
            <div className="relative mx-auto aspect-[16/7] w-full max-w-7xl">
              <Image
                src="/flag.jpg"
                alt="American flag supporting Combat Veterans to Careers mission"
                fill
                className="object-contain object-center"
                priority
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 p-8 sm:p-10 lg:grid-cols-3 lg:p-12">
            <div className="rounded-2xl border border-cvc-border bg-cvc-card-deep p-6 lg:col-span-2">
              <SectionTitle
                title="Make a Difference Today"
                size="subsection"
                align="left"
                blueprintStarsBackdropClassName="bg-cvc-card-deep"
                className="mb-4"
              />
              <p className="mb-6 leading-relaxed text-cvc-fg-muted">
                Every donation strengthens our ability to serve veterans with practical
                resources and long-term support. Whether you choose one-time giving,
                recurring support, or sponsorship, your generosity has direct impact.
              </p>

              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-4">
                  <p className="text-2xl font-bold text-cvc-fg">$50</p>
                  <p className="mt-1 text-sm text-cvc-fg-subtle">Covers resume and career prep materials</p>
                </div>
                <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-4">
                  <p className="text-2xl font-bold text-cvc-fg">$100</p>
                  <p className="mt-1 text-sm text-cvc-fg-subtle">Supports transportation and appointment access</p>
                </div>
                <div className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-4">
                  <p className="text-2xl font-bold text-cvc-fg">$500</p>
                  <p className="mt-1 text-sm text-cvc-fg-subtle">Funds expanded transition and wellness resources</p>
                </div>
              </div>

              <div className="mb-8 rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-5">
                <h3 className="mb-2 text-lg font-semibold text-cvc-fg">Custom Amount</h3>
                <p className="mb-4 text-sm text-cvc-fg-muted">
                  Choose your own amount to give. Every contribution matters, and your
                  donation can save a life.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label className="sr-only" htmlFor="custom-amount">
                    Custom donation amount
                  </label>
                  <input
                    id="custom-amount"
                    type="number"
                    min="1"
                    step="1"
                    placeholder="Enter custom amount (USD)"
                    className="w-full rounded-lg border border-cvc-border-strong bg-cvc-card-deep px-4 py-3 text-cvc-fg placeholder:text-cvc-fg-subtle focus:border-patriotic-navy focus:outline-none"
                  />
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
                  >
                    Submit Amount
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
                >
                  Donate / Contact Us
                </a>
                <a
                  href="mailto:info@combatveteranstocareers.org?subject=Donation%20Inquiry"
                  className="inline-flex items-center justify-center rounded-lg border border-cvc-border-strong px-6 py-3 font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
                >
                  Email About Donating
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-cvc-border bg-cvc-card-deep p-6">
              <h3 className="mb-4 text-xl font-semibold text-cvc-fg">Why Give?</h3>
              <ul className="space-y-3 text-cvc-fg-muted">
                <li>Education and career transition support</li>
                <li>Housing and wellness assistance</li>
                <li>Community integration for veterans and families</li>
                <li>Mentorship and long-term guidance</li>
              </ul>
              <div className="mt-6 rounded-lg border border-cvc-border-muted bg-cvc-card-inner p-4">
                <p className="text-sm text-cvc-fg-subtle">
                  Thank you for standing with our veterans. For recurring giving,
                  sponsorship opportunities, or in-kind support, contact us using
                  the options on this page. Your donation can save a life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
