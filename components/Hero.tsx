'use client'

import Image from 'next/image'
import {
  HeroLeadParagraph,
  HeroMobileCta,
  HeroStarSeparator,
} from '@/components/HeroMobileExtras'
import HeroTypewriterHeadlines from '@/components/HeroTypewriterHeadlines'
import UpcomingEvents from '@/components/UpcomingEvents'

const HERO_BG = '/flagman.png'

export default function Hero() {
  const renderHeroCtas = (layout: 'stack' | 'row') => (
    <div
      className={
        layout === 'row'
          ? 'flex flex-col gap-2 pt-0 sm:flex-row sm:items-stretch lg:max-w-2xl'
          : 'flex flex-col gap-3 pt-1'
      }
    >
      <HeroMobileCta
        href="/veteran-application"
        variant="primary"
        className={layout === 'row' ? 'sm:min-w-0 sm:flex-1' : undefined}
      >
        Start Your Transition
      </HeroMobileCta>
      <HeroMobileCta
        href="#programs"
        variant="secondary"
        className={layout === 'row' ? 'sm:min-w-0 sm:flex-1' : undefined}
      >
        Learn More
      </HeroMobileCta>
    </div>
  )

  return (
    <section id="home" className="relative flex flex-col overflow-x-hidden">
      {/* Full-bleed hero image under copy + events */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <Image
          src={HERO_BG}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          style={{ objectFit: 'cover', objectPosition: '68% center' }}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-white/84 via-white/58 to-white/45 dark:from-slate-950/80 dark:via-slate-950/45 dark:to-slate-950/28 lg:block" />
        <div className="absolute inset-0 bg-cvc-hero-shade lg:hidden" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 pb-8 pt-[calc(var(--cvc-nav-height)+0.75rem)] sm:px-6 sm:pb-10 lg:px-10 lg:pb-12 lg:pt-[calc(var(--cvc-nav-height)+1rem)]">
        <div className="flex flex-col justify-center py-2 lg:py-4">
          <div className="grid grid-cols-1 items-center gap-4 sm:gap-5 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
            <div className="flex justify-center self-center">
              <div className="relative flex max-h-[110px] w-full max-w-[180px] items-center justify-center sm:max-h-[150px] sm:max-w-[220px] md:max-h-[165px] lg:max-h-[min(30svh,260px)] lg:max-w-[19rem] xl:max-h-[min(32svh,280px)] xl:max-w-[22rem]">
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Organization Logo"
                  width={640}
                  height={640}
                  className="h-auto max-h-full w-full object-contain object-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] lg:drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                  sizes="(max-width: 1024px) 220px, 352px"
                  priority
                />
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-3 sm:gap-4 lg:mx-0 lg:max-w-xl lg:items-start lg:gap-2 lg:text-left xl:max-w-2xl">
              <HeroTypewriterHeadlines />
              <HeroStarSeparator className="lg:!my-1" />
              <HeroLeadParagraph compact />
              <div className="w-full lg:hidden">{renderHeroCtas('stack')}</div>
              <div className="hidden w-full lg:block">{renderHeroCtas('row')}</div>
            </div>
          </div>
        </div>

        <UpcomingEvents embedded className="mt-5 sm:mt-6 lg:mt-8" />
      </div>
    </section>
  )
}
