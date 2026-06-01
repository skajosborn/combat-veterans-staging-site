import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'

type Props = {
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
}

export default function StoreLocationPage({ title, description, imageSrc, imageAlt }: Props) {
  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-24">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title={title}
            size="page"
            align="center"
            blueprintStarsBackdropClassName="bg-cvc-card"
            subtitle={<p className="leading-relaxed text-cvc-fg-muted">{description}</p>}
          />
          {imageSrc ? (
            <div className="relative mx-auto mb-8 aspect-[16/9] max-w-2xl overflow-hidden rounded-xl bg-white">
              <Image
                src={imageSrc}
                alt={imageAlt ?? title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          ) : null}
          <p className="mb-8 leading-relaxed text-cvc-fg-muted">
            Sales and donations support education, housing, wellness, and career transition programs for combat
            veterans and their families. Contact us for hours, drop-off information, and volunteer opportunities.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/#contact"
              className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cvc-cta-fill px-6 text-sm font-semibold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              Contact Us
            </Link>
            <Link
              href="/donate"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-cvc-border-strong px-6 text-sm font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
            >
              Donate
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
