import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import { programs } from '@/lib/programs'

export default function Programs() {
  return (
    <section id="programs" className="bg-cvc-page-elevated py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Programs"
          blueprintStarsBackdropClassName="bg-cvc-page-elevated"
          className="mb-16"
          subtitle={
            <p className="mx-auto max-w-3xl text-lg text-cvc-fg-subtle">
              Comprehensive support designed specifically for combat veterans ready to build their next chapter
            </p>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <Link
              key={program.title}
              href={program.href}
              className="group overflow-hidden rounded-lg border border-cvc-border bg-cvc-tile shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-3 text-xl font-semibold text-cvc-fg">
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed text-cvc-fg-subtle">
                  {program.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
