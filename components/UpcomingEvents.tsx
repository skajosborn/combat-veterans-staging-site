import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { eventAccentClasses, upcomingEventCards } from '@/lib/upcomingEvents'

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
          className={`font-black tracking-tight ${
            embedded ? 'text-xl text-[#3d442a] sm:text-2xl' : 'text-3xl text-cvc-section-title sm:text-4xl'
          }`}
        >
          Upcoming Events
        </h2>
        <p
          className={`mx-auto mt-1.5 max-w-2xl ${
            embedded
              ? 'text-xs font-medium text-[#3d442a]/85 sm:text-sm'
              : 'mt-2 text-sm text-cvc-fg-muted sm:text-base'
          }`}
        >
          Every event funds veteran care — come out and make a difference.
        </p>
      </div>

      <div
        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${
          embedded ? 'gap-4 lg:gap-5' : 'gap-5 lg:gap-6'
        }`}
      >
        {upcomingEventCards.map((event) => (
          <a
            key={event.title}
            href={event.href}
            target="_blank"
            rel="noopener noreferrer"
            className={
              embedded
                ? 'group flex flex-col overflow-hidden rounded-sm border border-[#1a2b3c]/12 bg-[#0a111a] shadow-[0_8px_24px_-12px_rgba(10,17,26,0.45)] transition-transform hover:-translate-y-0.5'
                : 'group flex flex-col overflow-hidden rounded-lg border border-cvc-border/80 bg-white shadow-[0_6px_18px_-10px_rgba(15,23,42,0.28)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-12px_rgba(15,23,42,0.35)] dark:border-cvc-border dark:bg-cvc-card'
            }
          >
            <div
              className={`relative w-full overflow-hidden ${
                embedded ? 'aspect-[16/10] bg-[#1a2118]' : 'aspect-[16/10] bg-cvc-page-elevated'
              }`}
            >
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {embedded ? (
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent px-3 pb-3 pt-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-[#c4a574]">
                    {event.dateLabel}
                  </p>
                  <h3 className="mt-0.5 text-sm font-bold leading-snug text-white sm:text-base">
                    {event.title}
                  </h3>
                </div>
              ) : null}
            </div>

            {embedded ? (
              <div
                className={`flex items-center justify-between gap-2 px-3 py-2.5 text-white ${eventAccentClasses[event.accent]}`}
              >
                <span className="text-xs font-bold uppercase tracking-wide">Learn More</span>
                <span
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/70"
                  aria-hidden
                >
                  <ArrowRight className="h-4 w-4 stroke-[2.5]" />
                </span>
              </div>
            ) : (
              <div className="flex flex-1 flex-col gap-1.5 px-4 py-4 sm:px-5 sm:py-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-cvc-fg-subtle sm:text-[11px]">
                  {event.dateLabel}
                </p>
                <h3 className="text-lg font-bold leading-snug text-cvc-fg sm:text-xl">{event.title}</h3>
                {event.location ? (
                  <p className="mt-0.5 text-sm leading-snug text-cvc-fg-muted">{event.location}</p>
                ) : null}
              </div>
            )}
          </a>
        ))}
      </div>

      <div className={`text-center ${embedded ? 'mt-4 sm:mt-5' : 'mt-5 sm:mt-6 sm:mt-8'}`}>
        <Link
          href="/events#upcoming"
          className={`text-sm font-semibold underline-offset-4 transition-colors hover:underline ${
            embedded ? 'text-[#3d442a] hover:text-[#1a2b3c]' : 'text-cvc-section-title'
          }`}
        >
          View all events
        </Link>
      </div>
    </>
  )

  if (embedded) {
    return (
      <div id="upcoming-events" className={`relative w-full py-10 sm:py-12 ${className}`.trim()}>
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">{body}</div>
      </div>
    )
  }

  return (
    <section id="upcoming-events" className={`bg-cvc-page py-16 sm:py-20 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{body}</div>
    </section>
  )
}
