'use client'

import Image from 'next/image'
import {
  HeroLeadParagraph,
  HeroMobileCta,
  HeroPillarsGrid,
  HeroStarSeparator,
} from '@/components/HeroMobileExtras'
import HeroTypewriterHeadlines from '@/components/HeroTypewriterHeadlines'

const HERO_BG = '/flagman.png'

export default function Hero() {
  const renderHeroHeadlines = (large = false) => <HeroTypewriterHeadlines large={large} />

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
      className="relative flex flex-col overflow-x-hidden bg-cvc-page lg:h-[100dvh] lg:max-h-[100dvh] lg:overflow-hidden"
    >
      {/* Desktop background — full bleed under transparent nav */}
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        <Image
          src={HERO_BG}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: '68% calc(var(--cvc-nav-height) + 20%)' }}
          className="object-cover"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 hidden bg-gradient-to-r from-white/88 via-white/60 to-white/25 dark:from-slate-950/75 dark:via-slate-950/35 dark:to-slate-950/10 lg:block" />

      {/* —— Mobile layout —— */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="relative overflow-visible">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none">
            <Image
              src={HERO_BG}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: '68% calc(var(--cvc-nav-height) + 10%)' }}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-cvc-hero-shade" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center px-4 pb-8 pt-[calc(var(--cvc-nav-height)+1rem)] sm:px-6 sm:pb-10 sm:pt-[calc(var(--cvc-nav-height)+0.75rem)]">
            <div className="mb-5 flex w-full max-w-[200px] shrink-0 justify-center overflow-visible px-1 sm:mb-6 sm:max-w-[240px]">
              <Image
                src="/CVClogo.png"
                alt="Combat Veterans to Careers Organization Logo"
                width={480}
                height={480}
                className="h-auto w-full max-h-[120px] object-contain object-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:max-h-[165px] md:max-h-[180px]"
                sizes="(max-width: 640px) 200px, 240px"
                priority
              />
            </div>

            <div className="flex w-full flex-col gap-4 sm:gap-6">
              {renderHeroHeadlines(false)}
              <HeroStarSeparator />
              <HeroLeadParagraph />
              {renderHeroCtas('stack')}
            </div>
          </div>
        </div>

        <div className="relative z-20 hidden w-full pb-4 min-[480px]:block lg:hidden">
          <HeroPillarsGrid />
        </div>
      </div>

      {/* —— Desktop — single viewport column: main row + pillars —— */}
      <div className="relative z-10 mx-auto hidden h-full min-h-0 w-full max-w-7xl flex-1 flex-col px-6 pt-[var(--cvc-nav-height)] lg:flex xl:px-10">
        <div className="flex min-h-0 flex-1 flex-col justify-center py-4">
          <div className="grid grid-cols-[minmax(0,19rem)_minmax(0,1fr)] items-center gap-4 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:gap-5">
            <div className="flex min-w-0 justify-center self-center">
              <div className="relative flex max-h-[min(38svh,340px)] w-full max-w-[19rem] items-center justify-center xl:max-h-[min(40svh,360px)] xl:max-w-[22rem]">
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Organization Logo"
                  width={640}
                  height={640}
                  className="h-auto max-h-full w-full object-contain drop-shadow-[0_8px_24px_rgba(0,0,0,0.18)] dark:drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
                  priority
                />
              </div>
            </div>

            <div className="flex min-w-0 max-w-xl flex-col gap-2 self-center xl:max-w-2xl xl:gap-2.5">
              {renderHeroHeadlines(true)}
              <HeroStarSeparator className="!my-1" />
              <HeroLeadParagraph compact />
              {renderHeroCtas('row')}
            </div>
          </div>
        </div>

        <div className="shrink-0 pb-4 pt-1 xl:pb-5">
          <HeroPillarsGrid compact />
        </div>
      </div>
    </section>
  )
}
