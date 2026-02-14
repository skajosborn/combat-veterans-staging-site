import Image from 'next/image'

export default function OperationFieldTripPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-20">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-gray-800 bg-[#111831] shadow-2xl">
          <div className="relative h-72 sm:h-96 lg:h-[28rem] w-full bg-[#0a0e27]">
            <Image
              src="/OFT.jpg"
              alt="Operation Field Trip"
              fill
              className="object-contain object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e27]/85 via-[#0a0e27]/35 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 sm:p-8 lg:p-10">
              <p className="mb-2 text-xs sm:text-sm font-semibold tracking-[0.18em] uppercase text-gray-300">
                Veteran Healing Mission
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                Operation Field Trip
              </h1>
            </div>
          </div>

          <div className="space-y-8 p-6 sm:p-8 lg:p-10">
            <div className="rounded-2xl border border-gray-800 bg-[#0c1330] p-6 sm:p-7">
              <h2 className="mb-3 text-2xl sm:text-3xl font-semibold text-white">
                What is Operation Field Trip?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Operation Field Trip is a healing mission-by veterans, for
                veterans and first responders. In partnership with Take A Knee
                Foundation, we provide medically assisted ketamine therapy
                combined with integrative and the counseling to support those
                battling PTSD, depression, and anxiety.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0c1330] p-6 sm:p-7">
              <h2 className="mb-3 text-2xl sm:text-3xl font-semibold text-white">
                Why Ketamine-Assisted Therapy?
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Ketamine therapy, when paired with guided integration support,
                has shown rapid and lasting relief for individuals suffering
                from trauma-related mental health conditions. For many, it&apos;s
                a lifeline when nothing else has worked.
              </p>
            </div>

            <div className="rounded-2xl border border-gray-800 bg-[#0c1330] p-6 sm:p-7">
              <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-white">
                The Cost of Healing
              </h2>
              <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl border border-gray-700 bg-[#0a1028] p-4">
                  <p className="text-2xl font-bold text-white">$625</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Approximate cost per treatment including therapy integration
                  </p>
                </div>
                <div className="rounded-xl border border-gray-700 bg-[#0a1028] p-4">
                  <p className="text-2xl font-bold text-white">$3,750</p>
                  <p className="mt-1 text-sm text-gray-400">
                    Recommended 6-treatment care series per participant
                  </p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Your support helps fund this life-changing care for those
                who&apos;ve served and sacrificed.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="rounded-2xl border border-gray-700 bg-[#0d1533] p-6 lg:col-span-3">
                <h2 className="mb-3 text-2xl font-semibold text-white">
                  How you can help:
                </h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Sponsor a veteran or first responder</li>
                  <li>Share this mission with your community</li>
                  <li>Donate to support treatment scholarships</li>
                </ul>
                <p className="mt-4 text-gray-300 leading-relaxed">
                  When making a donation, please input &ldquo;Operation Field
                  Trip&rdquo; in the &ldquo;Transaction Reason&rdquo; form box.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-700 bg-[#0d1533] p-6 lg:col-span-2 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Support A Veteran Today
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-5">
                    Your contribution helps deliver life-changing care when it
                    matters most.
                  </p>
                </div>
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-[#0a0e27] transition-colors hover:bg-gray-100"
                >
                  Donate to Operation Field Trip
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-700 bg-[#0d1533] p-4 sm:p-6">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Watch: Operation Field Trip
              </h2>
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
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
