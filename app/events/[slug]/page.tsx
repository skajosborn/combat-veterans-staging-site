import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
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
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-16">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-gray-800 bg-[#111831] p-6 sm:p-8 lg:p-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-gray-400">
            {event.month} - {event.dateLabel}
          </p>
          <h1 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {event.title}
          </h1>
          <p className="mb-6 text-gray-300 leading-relaxed">{event.teaser}</p>

          {event.embedSrc ? (
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
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
            <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-gray-700 bg-[#0a0e27]">
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
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-semibold text-[#0a0e27] transition-colors hover:bg-gray-100"
            >
              Back to Events
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800/50"
            >
              Support CVC
            </Link>
            {event.externalUrl && (
              <a
                href={event.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-gray-800/50"
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
