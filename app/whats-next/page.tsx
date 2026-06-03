import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

const galleryImages = [
  '/WN-1.jpg',
  '/WN-2.jpg',
  '/WN-3.jpg',
  '/WN-4.jpg',
  '/WN-5.jpg',
]

export default function WhatsNextPage() {
  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-cvc-border bg-cvc-card-muted p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title="What's Next"
            size="page"
            align="left"
            uppercaseTitle={false}
            blueprintStarsBackdropClassName="bg-cvc-card-muted"
            subtitle={
              <>
          <p className="mb-5 leading-relaxed text-cvc-fg-muted">
            Service members are forward thinking, always focused on
            &nbsp;&ldquo;What&apos;s Next&rdquo;, next promotion, next duty station,
            next deployment. CVC&apos;s veteran-centered wellness plan
            &nbsp;&ldquo;What&apos;s Next&rdquo; continues that forward thinking. My
            next Career, Education, &ldquo;What&apos;s Next&rdquo; for my family, my
            next Veteran therapy adventure. Always moving forward, stay in the
            fight &amp; never quit.
          </p>
          <p className="leading-relaxed text-cvc-fg-muted">
            Every day 22 veterans lose their battle to post traumatic stress on
            American soil. That is one veteran every 65 minutes. Every suicide
            is a tragedy affecting families, friends and whole communities. But
            when everyone works together to help those in need, suicide is
            preventable. Every American citizen has a valuable role to play in
            preventing service member, veteran, and military family suicide.
          </p>
              </>
            }
          />
        </div>

        <div className="mb-10 rounded-2xl border border-cvc-border bg-cvc-card-muted p-8 sm:p-10">
          <SectionTitle
            title={`The \u201cWhat\u2019s Next\u201d Program Focuses On`}
            size="subsection"
            align="left"
            uppercaseTitle={false}
            blueprintStarsBackdropClassName="bg-cvc-card-muted"
            className="mb-5"
          />
          <ul className="mb-6 list-disc space-y-2 pl-6 text-cvc-fg-muted">
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
          <p className="mb-5 leading-relaxed text-cvc-fg-muted">
            CVC&apos;s &ldquo;What&apos;s Next&rdquo; Therapeutic Recreation Program
            is another way we connect, lead, and inspire our veterans. Our
            activities in this program give veterans a chance to enjoy the
            outdoors, refocus their passion, and share an adventure with great
            Americans &amp; other veterans and their families.
          </p>
          <p className="leading-relaxed text-cvc-fg-muted">
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
              className="relative overflow-hidden rounded-xl border border-cvc-border bg-cvc-card-muted"
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

        <div className="rounded-2xl border border-cvc-border bg-cvc-card-muted p-8 text-center sm:p-10">
          <p className="mb-6 text-xl font-semibold text-cvc-fg sm:text-2xl">
            Help Support Combat Veterans to Careers &ldquo;What&apos;s Next&rdquo;
            Therapeutic Recreation Program. Be &ldquo;What&apos;s Next&rdquo; in a
            Veteran&apos;s life!
          </p>
          <a
            href="/donate"
            className="inline-flex items-center justify-center rounded-lg bg-white px-7 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
          >
            Donate to What&apos;s Next
          </a>
        </div>
      </section>
    </main>
  )
}
