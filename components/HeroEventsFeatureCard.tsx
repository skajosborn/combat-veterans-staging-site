'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { upcomingEventCards } from '@/lib/upcomingEvents'

const INTERVAL_MS = 4500
const TINT = {
  card: 'bg-black/25',
  wash: 'bg-gradient-to-t from-black/85 via-black/45 to-black/15',
  icon: 'bg-[#1a1a1a]',
  cta: 'text-white/85 group-hover:text-white',
  border: 'border-white/30 hover:border-white/55',
} as const

function displayTitle(title: string) {
  return title.replace(/^\d{4}\s+/, '')
}

export default function HeroEventsFeatureCard() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = upcomingEventCards.length
  const active = upcomingEventCards[index] ?? upcomingEventCards[0]

  useEffect(() => {
    if (count < 2 || paused) return
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [count, paused])

  if (!active) return null

  return (
    <div className="flex min-w-0 flex-col gap-2">
      <h3 className="px-0.5 text-sm font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)] sm:text-[0.9375rem]">
        Upcoming Events
      </h3>
      <Link
        href="/events#upcoming"
        className={`group relative flex min-h-[11.5rem] flex-1 flex-col overflow-hidden rounded-xl border text-white shadow-[0_12px_32px_-16px_rgba(0,0,0,0.65)] backdrop-blur-[2px] transition-[transform,border-color] hover:-translate-y-0.5 hover:text-white sm:min-h-[12.5rem] ${TINT.card} ${TINT.border}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
        aria-label={`Upcoming events: ${active.title}. ${active.dateLabel}`}
      >
        {upcomingEventCards.map((event, i) => (
          <Image
            key={event.title}
            src={event.imageSrc}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className={`object-cover object-top transition-[opacity,transform] duration-700 ease-in-out group-hover:scale-[1.04] ${
              i === index ? 'opacity-50' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden
            priority={i === 0}
          />
        ))}
        <div className={`absolute inset-0 ${TINT.wash}`} />

        <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
          <span
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.35)] ring-2 ring-white/20 sm:h-11 sm:w-11 ${TINT.icon}`}
          >
            <Image
              src="/icons/calendar.png"
              alt=""
              width={28}
              height={28}
              className="h-5 w-5 object-contain brightness-0 invert sm:h-6 sm:w-6"
            />
          </span>

          <div className="relative mt-auto min-h-[3.25rem] flex-1" aria-live="polite">
            {upcomingEventCards.map((event, i) => (
              <div
                key={event.title}
                className={`absolute inset-x-0 top-0 transition-opacity duration-700 ease-in-out ${
                  i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <p className="!text-white text-sm font-black uppercase tracking-[0.06em] sm:text-[0.9375rem]">
                  {displayTitle(event.title)}
                </p>
                <p className="mt-1 text-xs leading-snug !text-white/90 sm:text-[0.8125rem]">
                  {event.dateLabel}
                  {event.location ? ` · ${event.location}` : ''}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <span
              className={`inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${TINT.cta}`}
            >
              View Calendar
              <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden />
            </span>
            {count > 1 ? (
              <span className="flex items-center gap-1.5" aria-hidden>
                {upcomingEventCards.map((event, i) => (
                  <span
                    key={event.title}
                    className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                      i === index ? 'bg-white' : 'bg-white/35'
                    }`}
                  />
                ))}
              </span>
            ) : null}
          </div>
        </div>
      </Link>
    </div>
  )
}
