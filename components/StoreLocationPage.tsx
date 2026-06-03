import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import type { RestoringHopeStore } from '@/lib/restoringHopeStores'

type Props = RestoringHopeStore

export default function StoreLocationPage({
  title,
  description,
  imageSrc,
  imageAlt,
  address,
  phone,
  shopHours,
  donationDropOffHours,
  externalSiteUrl,
}: Props) {
  const phoneHref = `tel:${phone.replace(/\D/g, '')}`

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
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

          <p className="mb-6 text-center text-sm leading-relaxed text-cvc-fg-muted">
            Restoring Hope Thrift Store is a 501(c)(3) nonprofit benefiting local combat veterans and their
            families. Visit the official site for donations, volunteer opportunities, and pickup scheduling.
          </p>

          <dl className="mb-8 grid gap-4 rounded-xl border border-cvc-border bg-cvc-card-muted p-5 sm:grid-cols-2 sm:gap-6 sm:p-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-cvc-fg-subtle">Address</dt>
              <dd className="mt-1 text-sm leading-relaxed text-cvc-fg">{address}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-cvc-fg-subtle">Phone</dt>
              <dd className="mt-1">
                <a href={phoneHref} className="text-sm font-medium text-cvc-fg underline-offset-2 hover:underline">
                  {phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-cvc-fg-subtle">Store hours</dt>
              <dd className="mt-1 text-sm leading-relaxed text-cvc-fg">{shopHours}</dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wide text-cvc-fg-subtle">
                Donation drop-off
              </dt>
              <dd className="mt-1 text-sm leading-relaxed text-cvc-fg">{donationDropOffHours}</dd>
            </div>
          </dl>

          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={externalSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cvc-cta-fill px-6 text-sm font-semibold text-white shadow-md transition-[filter] hover:brightness-110"
            >
              Visit Restoring Hope Website
            </a>
            <a
              href={phoneHref}
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-cvc-border-strong px-6 text-sm font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
            >
              Call {phone}
            </a>
            <Link
              href="/donate"
              className="inline-flex min-h-10 items-center justify-center rounded-lg border border-cvc-border-strong px-6 text-sm font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
            >
              Donate to CVC
            </Link>
          </div>
        </article>
      </section>
    </main>
  )
}
