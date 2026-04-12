'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'

const slides = [
  {
    src: '/Reverse-Raffle-Flyer-2026.jpg',
    alt: 'Reverse Raffle Flyer 2026',
    title: 'Reverse Raffle Flyer 2026',
    href: '/events/2026-save-a-veteran-reverse-raffle',
  },
  {
    src: '/voices-of-valor.png',
    alt: 'Voices of Valor: Live Music Writers Round — Honoring Our Vietnam Veterans',
    title: 'Voices of Valor: Live Music Writers Round',
    href: '/events',
  },
]

export default function EventsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    if (isPaused) return
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => window.clearInterval(intervalId)
  }, [isPaused])

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="mb-8 rounded-2xl border border-cvc-border bg-cvc-card p-4 sm:p-6">
      <SectionTitle title="Featured Flyers" size="subsection" align="left" className="mb-4" />

      <div className="relative overflow-hidden rounded-xl border border-cvc-border-muted bg-cvc-page">
        <div className="relative h-[340px] w-full sm:h-[460px] lg:h-[520px]">
          {slides.map((slide, index) => {
            const content = (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain object-center p-2 sm:p-4"
                priority={index === 0}
              />
            )
            return (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === activeIndex ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden={index !== activeIndex}
              >
                {slide.href ? (
                  <Link href={slide.href} className="block h-full w-full cursor-pointer hover:opacity-95 transition-opacity">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </div>
            )
          })}
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-cvc-border-muted bg-cvc-card-deep px-3 py-2 text-cvc-fg transition-colors hover:bg-cvc-hover"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-cvc-border-muted bg-cvc-card-deep px-3 py-2 text-cvc-fg transition-colors hover:bg-cvc-hover"
          aria-label="Next slide"
        >
          &#8594;
        </button>

        <button
          type="button"
          onClick={() => setIsPaused(!isPaused)}
          className="absolute left-3 top-3 rounded-full border border-cvc-border-muted bg-cvc-card-deep p-2 text-cvc-fg transition-colors hover:bg-cvc-hover"
          aria-label={isPaused ? 'Resume carousel' : 'Pause carousel'}
        >
          {isPaused ? (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          )}
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-cvc-fg' : 'bg-cvc-border-muted'
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
