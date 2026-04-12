import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import SectionTitle from '@/components/SectionTitle'
import { events } from '@/lib/events'

type EventPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }))
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params
  const event = events.find((item) => item.slug === slug)

  if (!event) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-cvc-border bg-cvc-card p-6 sm:p-8 lg:p-10">
          <SectionTitle
            as="h1"
            title={event.title}
            size="page"
            align="left"
            uppercaseTitle={false}
            prefix={
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cvc-fg-subtle">
                {event.month} - {event.dateLabel}
              </p>
            }
            subtitle={<p className="leading-relaxed text-cvc-fg-muted">{event.teaser}</p>}
          />

          {event.embedSrc ? (
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-cvc-border-muted">
              <iframe
                className="h-full w-full"
                src={event.embedSrc}
                title={event.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          ) : (
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-cvc-border-muted bg-cvc-page">
              <Image
                src={event.imageSrc ?? '/CVC-Future.png'}
                alt={event.title}
                fill
                className="object-contain object-center p-2"
              />
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/events"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-cvc-fg-on-light transition-colors hover:bg-gray-100"
            >
              Back to Events
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg border border-cvc-border-strong px-6 py-3 font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
            >
              Support CVC
            </Link>
            {event.externalUrl && (
              <a
                href={event.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-cvc-border-strong px-6 py-3 font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
              >
                Official Event Page
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
