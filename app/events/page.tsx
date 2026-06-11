import Link from 'next/link'
import Image from 'next/image'
import EventsCarousel from '@/components/EventsCarousel'
import SectionTitle from '@/components/SectionTitle'
import { events } from '@/lib/events'

export default function EventsPage() {
  const calendarMonths = ['February', 'March', 'April', 'May', 'June']

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title="Events"
            size="page"
            align="left"
            blueprintStarsBackdropClassName="bg-cvc-card"
            subtitle={
              <p className="leading-relaxed text-cvc-fg-muted">
                Explore recent and upcoming events and veteran-focused activities.
              </p>
            }
          />
        </div>

        <EventsCarousel />

        <div
          id="upcoming"
          className="mb-8 scroll-mt-28 rounded-2xl border border-cvc-border bg-cvc-card p-6 sm:p-8"
        >
          <SectionTitle
            title="Event Timeline"
            size="subsection"
            align="left"
            blueprintStarsBackdropClassName="bg-cvc-card"
            className="mb-6"
          />
          <div className="relative space-y-5 pl-8">
            <div className="absolute bottom-2 left-2 top-2 w-px bg-cvc-border-muted" />
            {events.map((event) => (
              <div key={event.slug} className="relative">
                <span className="absolute -left-[1.9rem] top-4 h-3.5 w-3.5 rounded-full border border-cvc-border bg-cvc-card" />
                <Link
                  href={`/events/${event.slug}`}
                  className="block rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-4 transition-colors hover:border-cvc-border-strong"
                >
                  <p className="mb-1 text-sm font-medium text-cvc-fg-subtle">
                    {event.month} - {event.dateLabel}
                  </p>
                  <h3 className="text-lg font-semibold text-cvc-fg">{event.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cvc-fg-muted">
                    {event.teaser}
                  </p>
                  <p className="mt-3 text-sm font-semibold text-cvc-fg underline underline-offset-4">
                    View event page
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 rounded-2xl border border-cvc-border bg-cvc-card p-6 sm:p-8">
          <SectionTitle
            title="Event Calendar"
            size="subsection"
            align="left"
            blueprintStarsBackdropClassName="bg-cvc-card"
            className="mb-6"
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {calendarMonths.map((month) => {
              const monthEvents = events.filter((event) => event.month === month)
              return (
                <div
                  key={month}
                  className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-4"
                >
                  <h3 className="mb-3 text-lg font-semibold text-cvc-fg">{month}</h3>
                  <div className="space-y-2">
                    {monthEvents.length === 0 && (
                      <p className="text-sm text-cvc-fg-subtle">No event posted yet.</p>
                    )}
                    {monthEvents.map((event) => (
                      <Link
                        key={event.slug}
                        href={`/events/${event.slug}`}
                        className="block rounded-md border border-cvc-border-muted bg-cvc-card px-3 py-2 text-sm text-cvc-fg-muted transition-colors hover:border-cvc-border-strong hover:text-cvc-fg"
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

        <div id="event-gallery" className="scroll-mt-28 grid grid-cols-1 gap-8">
          {events.filter((event) => Boolean(event.embedSrc)).map((event) => (
            <div
              key={event.slug}
              className="rounded-2xl border border-cvc-border bg-cvc-card p-4 sm:p-6"
            >
              <div className="mb-4">
                <SectionTitle
                  as="h2"
                  title={event.title}
                  size="subsection"
                  align="left"
                  uppercaseTitle={false}
                  showBottomRule={false}
                  blueprintStarsBackdropClassName="bg-cvc-card"
                  className="[&_h2]:text-xl [&_h2]:sm:text-2xl"
                />
              </div>
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
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
