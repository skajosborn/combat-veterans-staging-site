import Link from 'next/link'
import Image from 'next/image'
import EventsCarousel from '@/components/EventsCarousel'
import { events } from '@/lib/events'

export default function EventsPage() {
  const calendarMonths = ['February', 'March', 'April', 'May', 'June']

  return (
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-2xl border border-gray-800 bg-[#111831] p-8 sm:p-10">
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-white">
            Events
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Explore recent and upcoming events and veteran-focused activities.
          </p>
        </div>

        <EventsCarousel />

        <div className="mb-8 rounded-2xl border border-gray-800 bg-[#111831] p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
            Event Timeline
          </h2>
          <div className="relative space-y-5 pl-8">
            <div className="absolute bottom-2 left-2 top-2 w-px bg-gray-700" />
            {events.map((event) => (
              <div key={event.slug} className="relative">
                <span className="absolute -left-[1.9rem] top-4 h-3.5 w-3.5 rounded-full border border-gray-200 bg-white" />
                <Link
                  href={`/events/${event.slug}`}
                  className="block rounded-xl border border-gray-700 bg-[#0d1533] p-4 transition-colors hover:border-gray-500"
                >
                  <p className="mb-1 text-sm font-medium text-gray-400">
                    {event.month} - {event.dateLabel}
                  </p>
                  <h3 className="text-lg font-semibold text-white">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-300">
                    {event.teaser}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-white underline underline-offset-4">
                    View event page
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-gray-800 bg-[#111831] p-6 sm:p-8">
          <h2 className="mb-6 text-2xl font-semibold text-white sm:text-3xl">
            Event Calendar
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {calendarMonths.map((month) => {
              const monthEvents = events.filter((event) => event.month === month)
              return (
                <div
                  key={month}
                  className="rounded-xl border border-gray-700 bg-[#0d1533] p-4"
                >
                  <h3 className="mb-3 text-lg font-semibold text-white">{month}</h3>
                  <div className="space-y-2">
                    {monthEvents.length === 0 && (
                      <p className="text-sm text-gray-400">No event posted yet.</p>
                    )}
                    {monthEvents.map((event) => (
                      <Link
                        key={event.slug}
                        href={`/events/${event.slug}`}
                        className="block rounded-md border border-gray-700 bg-[#111831] px-3 py-2 text-sm text-gray-300 transition-colors hover:border-gray-500 hover:text-white"
                      >
                        {event.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {events.filter((event) => Boolean(event.embedSrc)).map((event) => (
            <div
              key={event.slug}
              className="rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6"
            >
              <div className="mb-4 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-semibold text-white">{event.title}</h2>
                <Link
                  href={`/events/${event.slug}`}
                  className="shrink-0 rounded-lg border border-gray-600 px-3 py-1.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800/60"
                >
                  Open page
                </Link>
              </div>
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
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
