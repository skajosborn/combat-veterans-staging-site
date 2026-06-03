import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

export const metadata = {
  title: 'About | Combat Veterans to Careers Organization',
  description:
    'Learn about Combat Veterans to Careers and meet David Booth, supporting veterans in their transition to civilian careers.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title="Our Mission"
            size="page"
            align="center"
            blueprintStarsBackdropClassName="bg-cvc-card"
            subtitle={
              <div className="mx-auto max-w-3xl space-y-4 leading-relaxed text-cvc-fg-muted">
                <p>
                  Combat Veterans to Careers exists to ensure that no veteran has to
                  face the transition to civilian life alone. Through 360° of
                  support, we connect veterans to career development, community
                  resources, healing-centered programs, and the guidance they need to
                  rebuild stability and rediscover purpose.
                </p>
                <p>
                  A cornerstone of our mission is Operation Field Trip, a powerful
                  program that helps veterans and first responders struggling with
                  PTSD, anxiety, depression, and trauma-related challenges access
                  medically assisted ketamine therapy paired with integrative
                  counseling and support. For many participants, it offers renewed
                  hope and a chance to begin healing when other paths have fallen
                  short.
                </p>
                <Image
                  src="/360-of-Support.png"
                  alt="360 degrees of support mission graphic"
                  width={1600}
                  height={900}
                  className="mx-auto h-auto w-full max-w-md rounded-xl"
                />
              </div>
            }
          />
        </div>

        <div id="history" className="scroll-mt-28 overflow-hidden rounded-2xl border border-cvc-border bg-cvc-card">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative aspect-[4/5] min-h-[320px] lg:min-h-[480px]">
              <Image
                src="/DavidFlagNew.png"
                alt="David Booth"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <div className="mb-6 flex items-start gap-3">
                <Image
                  src="/CVClogo.png"
                  alt=""
                  width={48}
                  height={48}
                  className="h-10 w-10 shrink-0 object-contain sm:h-12 sm:w-12"
                />
                <SectionTitle
                  as="h2"
                  title="David Booth"
                  size="subsection"
                  align="left"
                  uppercaseTitle={false}
                  showBottomRule={false}
                  blueprintStarsBackdropClassName="bg-cvc-card"
                  className="min-w-0 flex-1 [&_h2]:!mb-0"
                />
              </div>
              <p className="mb-6 text-sm font-medium text-cvc-fg-subtle">
                Founder, Combat Veterans to Careers
              </p>
              <p className="mb-4 leading-relaxed text-cvc-fg-muted">
                David Booth is the driving force behind Combat Veterans to
                Careers. A retired U.S. Army Master Sergeant with 20 years of
                honorable service, David dedicated his military career to
                leading soldiers in some of the most demanding environments
                imaginable. His service was marked by courage, commitment, and
                sacrifice — including surviving an IED explosion that ultimately
                ended his military career.
              </p>
              <p className="mb-4 leading-relaxed text-cvc-fg-muted">
                Rather than allowing that moment to define him, David chose to
                let it redirect him.
              </p>
              <p className="mb-4 leading-relaxed text-cvc-fg-muted">
                After transitioning from active duty, David experienced
                firsthand the invisible battles many veterans face — the
                challenges of reintegration, the weight of trauma, and the
                search for renewed purpose. That experience ignited a mission:
                to ensure no combat veteran has to navigate civilian life alone.
              </p>
              <p className="mb-4 leading-relaxed text-cvc-fg-muted">
                Through Combat Veterans to Careers, David has built a
                community-centered organization focused on restoration,
                resilience, and real-world support. The organization provides
                transitional assistance, mentorship, healing programs, and
                access to innovative therapies for veterans struggling with
                PTSD, depression, anxiety, and the lasting effects of combat.
              </p>
              <p className="mb-4 leading-relaxed text-cvc-fg-muted">
                David&apos;s leadership blends battlefield experience with
                compassionate service. Whether coordinating life-changing
                programs, hosting community events, or sitting one-on-one with
                a veteran in crisis, he remains deeply committed to helping
                others rebuild their lives with dignity and strength.
              </p>
              <p className="leading-relaxed text-cvc-fg-muted">
                For David, this work is more than a nonprofit — it is a
                continuation of his oath to serve.
              </p>
            </div>
          </div>
        </div>

      </section>
    </main>
  )
}
