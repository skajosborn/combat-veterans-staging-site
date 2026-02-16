import Image from 'next/image'

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-[#070d22] pt-24 sm:pt-28 pb-20">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#0f1733] shadow-2xl">
          <div className="border-y border-gray-800 bg-[#0b1330] p-8 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-4xl text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gray-300">
                Support Our Mission
              </p>
              <h1 className="mb-5 text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
                Stand With Our Veterans
              </h1>
              <p className="text-base leading-relaxed text-gray-200 sm:text-lg">
                Your gift helps Combat Veterans to Careers provide education, housing,
                wellness, and employment transition support to combat veterans and
                their families. Your donation can save a life.
              </p>
            </div>
          </div>

          <div className="relative w-full bg-[#0a0e27]">
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
            <div className="rounded-2xl border border-gray-800 bg-[#0a1028] p-6 lg:col-span-2">
              <h2 className="mb-4 text-2xl font-semibold text-white sm:text-3xl">
                Make A Difference Today
              </h2>
              <p className="mb-6 text-gray-300 leading-relaxed">
                Every donation strengthens our ability to serve veterans with practical
                resources and long-term support. Whether you choose one-time giving,
                recurring support, or sponsorship, your generosity has direct impact.
              </p>

              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-gray-700 bg-[#0e1636] p-4">
                  <p className="text-2xl font-bold text-white">$50</p>
                  <p className="mt-1 text-sm text-gray-400">Covers resume and career prep materials</p>
                </div>
                <div className="rounded-xl border border-gray-700 bg-[#0e1636] p-4">
                  <p className="text-2xl font-bold text-white">$100</p>
                  <p className="mt-1 text-sm text-gray-400">Supports transportation and appointment access</p>
                </div>
                <div className="rounded-xl border border-gray-700 bg-[#0e1636] p-4">
                  <p className="text-2xl font-bold text-white">$500</p>
                  <p className="mt-1 text-sm text-gray-400">Funds expanded transition and wellness resources</p>
                </div>
              </div>

              <div className="mb-8 rounded-xl border border-gray-700 bg-[#0e1636] p-5">
                <h3 className="mb-2 text-lg font-semibold text-white">Custom Amount</h3>
                <p className="mb-4 text-sm text-gray-300">
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
                    className="w-full rounded-lg border border-gray-600 bg-[#0a1028] px-4 py-3 text-white placeholder:text-gray-400 focus:border-gray-400 focus:outline-none"
                  />
                  <a
                    href="/#contact"
                    className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-[#0a0e27] transition-colors hover:bg-gray-100"
                  >
                    Submit Amount
                  </a>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-[#0a0e27] transition-colors hover:bg-gray-100"
                >
                  Donate / Contact Us
                </a>
                <a
                  href="mailto:info@combatveteranstocareers.org?subject=Donation%20Inquiry"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800/50"
                >
                  Email About Donating
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0a1028] p-6">
              <h3 className="mb-4 text-xl font-semibold text-white">Why Give?</h3>
              <ul className="space-y-3 text-gray-300">
                <li>Education and career transition support</li>
                <li>Housing and wellness assistance</li>
                <li>Community integration for veterans and families</li>
                <li>Mentorship and long-term guidance</li>
              </ul>
              <div className="mt-6 rounded-lg border border-gray-700 bg-[#0d1533] p-4">
                <p className="text-sm text-gray-400">
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
