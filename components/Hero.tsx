'use client'

import Image from 'next/image'
import {
  HeroLeadParagraph,
  HeroMobileCta,
  HeroPillarsGrid,
  HeroStarSeparator,
} from '@/components/HeroMobileExtras'

const HERO_BG_DESKTOP = '/flagman.png'
const HERO_BG_MOBILE = '/cvc hero bg 1.png'

function HeroHeadlines() {
  return (
    <div className="flex shrink-0 flex-col gap-2 text-left sm:gap-2.5 lg:gap-0.5 xl:gap-1">
      <h2
        className="m-0 text-[1.5rem] font-black uppercase leading-[1.12] tracking-tight text-cvc-hero-fg sm:text-[1.75rem] lg:text-[1.625rem] xl:text-[2rem]"
        style={{ fontStretch: 'condensed' }}
      >
        WHAT&apos;S <span className="text-cvc-hero-accent">NEXT?</span>
      </h2>
      <h1
        className="m-0 flex flex-col gap-1.5 font-black uppercase leading-[1.12] tracking-tight text-cvc-hero-fg sm:gap-2"
        style={{ fontStretch: 'condensed' }}
      >
        <span className="text-[1.5rem] sm:text-[1.75rem] lg:text-[1.625rem] xl:text-[2rem]">
          SERVICE TO
        </span>
        <span className="text-[1.625rem] text-cvc-hero-accent sm:text-[1.875rem] lg:text-[1.75rem] xl:text-[2.125rem]">
          SUCCESS
        </span>
      </h1>
    </div>
  )
}

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
    <section
      id="home"
      className="relative flex min-h-[100dvh] flex-col overflow-x-hidden bg-cvc-page"
    >
      {/* Desktop — flagman.png; image band starts below nav so head isn't clipped */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        <div
          className="absolute inset-x-0 bottom-0"
          style={{ top: 'var(--cvc-nav-height)' }}
        >
          <Image
            src={HERO_BG_DESKTOP}
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: 'cover', objectPosition: '68% top' }}
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-white/[0.52]" aria-hidden />
        <div
          className="absolute inset-0 bg-gradient-to-r from-white/55 via-white/35 to-white/15"
          aria-hidden
        />
        <div
          className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-white/92 via-white/55 to-transparent"
          aria-hidden
        />
      </div>

      {/* Mobile — portrait crop */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden lg:hidden">
        <Image
          src={HERO_BG_MOBILE}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/[0.52]" aria-hidden />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-4 pt-[calc(var(--cvc-nav-height)+1rem)] sm:px-6 sm:pb-6 lg:px-10 lg:pb-5 lg:pt-[var(--cvc-nav-height)]">
        <div className="flex flex-1 flex-col justify-center py-4 lg:py-6">
          <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
            <div className="flex justify-center self-center">
              <div className="relative flex max-h-[120px] w-full max-w-[200px] items-center justify-center sm:max-h-[165px] sm:max-w-[240px] md:max-h-[180px] lg:max-h-[min(32svh,300px)] lg:max-w-[19rem] xl:max-h-[min(34svh,320px)] xl:max-w-[22rem]">
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Organization Logo"
                  width={640}
                  height={640}
                  className="h-auto max-h-full w-full object-contain object-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] lg:drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)]"
                  sizes="(max-width: 1024px) 240px, 352px"
                  priority
                />
              </div>
            </div>

            <div className="mx-auto flex w-full max-w-lg flex-col items-center gap-4 sm:gap-6 lg:mx-0 lg:max-w-xl lg:items-start lg:gap-2.5 lg:text-left xl:max-w-2xl">
              <HeroHeadlines />
              <HeroStarSeparator className="lg:!my-1" />
              <HeroLeadParagraph compact />
              <div className="w-full lg:hidden">{renderHeroCtas('stack')}</div>
              <div className="hidden w-full lg:block">{renderHeroCtas('row')}</div>
            </div>
          </div>
        </div>

        <div className="hidden shrink-0 pb-2 min-[480px]:block lg:pb-0">
          <HeroPillarsGrid compact />
        </div>
      </div>
    </section>
  )
}
