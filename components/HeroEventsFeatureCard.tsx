'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { upcomingEventCards } from '@/lib/upcomingEvents'

const INTERVAL_MS = 4500
const TINT = {
  card: 'bg-[#3a0c0c]/55',
  wash: 'bg-gradient-to-t from-[#1f0606]/95 via-[#5a1515]/60 to-[#7a2020]/20',
  icon: 'bg-[#c02828]',
  border:
    'border-0 border-l-[3px] border-b-[3px] border-l-[#d04040] border-b-[#d04040] hover:border-l-[#ef6a6a] hover:border-b-[#ef6a6a]',
} as const

const labelClass =
  'text-[10px] font-bold uppercase tracking-[0.16em] !text-white/90 sm:text-[11px]'
const headlineClass =
  'mt-1 text-[1.35rem] font-black uppercase leading-[1.05] tracking-tight !text-white sm:text-[1.5rem]'

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
    <div className="hero-feature-shell hero-feature-shell--red">
      <Link
        href="/events#upcoming"
        className={`group relative z-[1] flex min-h-[13rem] flex-col overflow-hidden rounded-2xl text-white transition-[transform,border-color] hover:-translate-y-0.5 hover:text-white sm:min-h-[14rem] ${TINT.card} ${TINT.border}`}
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
              i === index ? 'opacity-40' : 'pointer-events-none opacity-0'
            }`}
            aria-hidden
            priority={i === 0}
          />
        ))}
        <div className={`absolute inset-0 ${TINT.wash}`} />

        <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
          <span
            className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.4)] ring-2 ring-white/30 sm:mb-3.5 sm:h-11 sm:w-11 ${TINT.icon}`}
            aria-hidden
          >
            <Image
              src="/icons/event.png"
              alt=""
              width={24}
              height={24}
              className="h-5 w-5 object-contain brightness-0 invert sm:h-6 sm:w-6"
            />
          </span>

          <p className={labelClass}>Upcoming Events</p>

          <div className="relative mt-1 min-h-[4rem] flex-1" aria-live="polite">
            {upcomingEventCards.map((event, i) => (
              <div
                key={event.title}
                className={`absolute inset-x-0 top-0 transition-opacity duration-700 ease-in-out ${
                  i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              >
                <h3 className={headlineClass}>{displayTitle(event.title)}</h3>
                <p className="mt-2 text-xs leading-snug !text-white/90 sm:text-[0.8125rem]">
                  {event.dateLabel}
                  {event.location ? ` · ${event.location}` : ''}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide !text-white transition-opacity group-hover:opacity-90">
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
