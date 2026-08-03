import Image from 'next/image'
import Link from 'next/link'
import { upcomingEventCards } from '@/lib/upcomingEvents'

type UpcomingEventsProps = {
  /** When true, omit outer section chrome for embedding inside the hero. */
  embedded?: boolean
  className?: string
}

export default function UpcomingEvents({ embedded = false, className = '' }: UpcomingEventsProps) {
  const body = (
    <>
      <div className={`text-center ${embedded ? 'mb-4 sm:mb-5' : 'mb-10 sm:mb-12'}`}>
        <h2
          className={`text-3xl font-black tracking-tight sm:text-4xl ${
            embedded
              ? 'text-[#d4e3b5] [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)]'
              : 'text-cvc-section-title'
          }`}
        >
          Upcoming Events
        </h2>
        <p
          className={`mx-auto mt-2 max-w-2xl text-sm sm:text-base ${
            embedded
              ? 'font-medium text-white/95 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)]'
              : 'text-cvc-fg-muted'
          }`}
        >
          Every event funds veteran care — come out and make a difference.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {upcomingEventCards.map((event) => (
          <a
            key={event.title}
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col overflow-hidden rounded-xl border border-cvc-border/80 bg-white shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_16px_36px_-14px_rgba(15,23,42,0.35)] dark:border-cvc-border dark:bg-cvc-card dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.45)]"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-cvc-page-elevated">
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col gap-1.5 px-4 py-4 sm:px-5 sm:py-5">
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-cvc-fg-subtle">
                {event.dateLabel}
              </p>
              <h3 className="text-lg font-bold leading-snug text-cvc-fg sm:text-xl">{event.title}</h3>
              {event.location ? (
                <p className="mt-0.5 text-sm leading-snug text-cvc-fg-muted">{event.location}</p>
              ) : null}
            </div>
          </a>
        ))}
      </div>

      <div className={`mt-5 text-center sm:mt-6 ${embedded ? '' : 'sm:mt-8'}`}>
        <Link
          href="/events#upcoming"
          className={`text-sm font-semibold underline-offset-4 transition-colors hover:underline ${
            embedded
              ? 'text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.5)] hover:text-[#d4e3b5]'
              : 'text-cvc-section-title'
          }`}
        >
          View all events
        </Link>
      </div>
    </>
  )

  if (embedded) {
    return (
      <div id="upcoming-events" className={`relative w-full bg-transparent ${className}`.trim()}>
        <div className="w-full">{body}</div>
      </div>
    )
  }

  return (
    <section id="upcoming-events" className={`bg-cvc-page py-16 sm:py-20 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{body}</div>
    </section>
  )
}
