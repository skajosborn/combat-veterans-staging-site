'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const slides = [
  {
    src: '/Reverse-Raffle-Flyer-2026.jpg',
    alt: 'Reverse Raffle Flyer 2026',
    title: 'Reverse Raffle Flyer 2026',
  },
  {
    src: '/BourbonWarStoriesEvent.jpg',
    alt: 'Bourbon and War Stories Event',
    title: 'Bourbon and War Stories Event',
  },
]

export default function EventsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => window.clearInterval(intervalId)
  }, [])

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length)
  }

  return (
    <div className="mb-8 rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6">
      <h2 className="mb-4 text-2xl font-semibold text-white">Featured Flyers</h2>

      <div className="relative overflow-hidden rounded-xl border border-gray-700 bg-[#0a0e27]">
        <div className="relative h-[340px] w-full sm:h-[460px] lg:h-[520px]">
          {slides.map((slide, index) => (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
              aria-hidden={index !== activeIndex}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-contain object-center p-2 sm:p-4"
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          onClick={goPrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-gray-500/70 bg-[#0a0e27]/80 px-3 py-2 text-white transition-colors hover:bg-[#151d3f]"
          aria-label="Previous slide"
        >
          &#8592;
        </button>
        <button
          type="button"
          onClick={goNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-gray-500/70 bg-[#0a0e27]/80 px-3 py-2 text-white transition-colors hover:bg-[#151d3f]"
          aria-label="Next slide"
        >
          &#8594;
        </button>

        <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-colors ${
                index === activeIndex ? 'bg-white' : 'bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
