import Image from 'next/image'

const galleryImages = [
  '/WN-1.jpg',
  '/WN-2.jpg',
  '/WN-3.jpg',
  '/WN-4.jpg',
  '/WN-5.jpg',
]

export default function WhatsNextPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-gray-800 bg-[#121735] p-8 sm:p-10">
          <h1 className="mb-6 text-4xl sm:text-5xl font-bold text-white">
            What&apos;s Next
          </h1>
          <p className="mb-5 text-gray-300 leading-relaxed">
            Service members are forward thinking, always focused on
            &nbsp;&ldquo;What&apos;s Next&rdquo;, next promotion, next duty station,
            next deployment. CVC&apos;s veteran-centered wellness plan
            &nbsp;&ldquo;What&apos;s Next&rdquo; continues that forward thinking. My
            next Career, Education, &ldquo;What&apos;s Next&rdquo; for my family, my
            next Veteran therapy adventure. Always moving forward, stay in the
            fight &amp; never quit.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Every day 22 veterans lose their battle to post traumatic stress on
            American soil. That is one veteran every 65 minutes. Every suicide
            is a tragedy affecting families, friends and whole communities. But
            when everyone works together to help those in need, suicide is
            preventable. Every American citizen has a valuable role to play in
            preventing service member, veteran, and military family suicide.
          </p>
        </div>

        <div className="mb-10 rounded-2xl border border-gray-800 bg-[#121735] p-8 sm:p-10">
          <h2 className="mb-5 text-2xl sm:text-3xl font-semibold text-white">
            The &ldquo;What&apos;s Next&rdquo; Program Focuses On
          </h2>
          <ul className="mb-6 list-disc pl-6 space-y-2 text-gray-300">
            <li>Restoring physical and mental functioning</li>
            <li>
              Facilitating home &amp; community reintegration, undoing the stigma
              created during Vietnam
            </li>
            <li>Improving family interaction</li>
            <li>
              Promoting quality of life for veterans, service members, and their
              supporters
            </li>
          </ul>
          <p className="mb-5 text-gray-300 leading-relaxed">
            CVC&apos;s &ldquo;What&apos;s Next&rdquo; Therapeutic Recreation Program
            is another way we connect, lead, and inspire our veterans. Our
            activities in this program give veterans a chance to enjoy the
            outdoors, refocus their passion, and share an adventure with great
            Americans &amp; other veterans and their families.
          </p>
          <p className="text-gray-300 leading-relaxed">
            CVC&apos;s &ldquo;What&apos;s Next&rdquo; Therapeutic Recreation Program
            assists in improving function and ability, but also use interventions
            that are individualized and holistic, incorporating Veterans&apos;
            interests, family, community, and lifestyle. Along with improving
            quality of life, CVC&apos;s &ldquo;What&apos;s Next&rdquo; Therapeutic
            Recreation Program enhances and maintains physical and cognitive
            abilities, provide opportunities for social communication skills
            development, creative expression, as well as spiritual expression.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {galleryImages.map((src, index) => (
            <div
              key={src}
              className="relative overflow-hidden rounded-xl border border-gray-800 bg-[#121735]"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={src}
                  alt={`What's Next Program image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-gray-800 bg-[#121735] p-8 text-center sm:p-10">
          <p className="mb-6 text-xl sm:text-2xl font-semibold text-white">
            Help Support Combat Veterans to Careers &ldquo;What&apos;s Next&rdquo;
            Therapeutic Recreation Program. Be &ldquo;What&apos;s Next&rdquo; in a
            Veteran&apos;s life!
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-[#0a0e27] hover:bg-gray-100 transition-colors"
          >
            Donate to What&apos;s Next
          </a>
        </div>
      </section>
    </main>
  )
}
