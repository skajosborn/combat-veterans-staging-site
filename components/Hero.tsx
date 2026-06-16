'use client'

import Image from 'next/image'
import {
  HeroLeadParagraph,
  HeroMobileCta,
  HeroPillarsGrid,
  HeroStarSeparator,
} from '@/components/HeroMobileExtras'

const HERO_BG_DESKTOP = '/cvc hero bg medium.png'
const HERO_BG_MOBILE = '/cvc hero bg 1.png'

function HeroHeadlines() {
  return (
    <div className="flex flex-col gap-2 text-left sm:gap-2.5 lg:gap-0.5 xl:gap-1">
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
      className="relative flex flex-col overflow-x-hidden bg-cvc-page lg:h-[100dvh] lg:max-h-[100dvh] lg:overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
        <Image
          src={HERO_BG_DESKTOP}
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center center' }}
          className="object-cover"
          priority
        />
      </div>
      <div className="pointer-events-none absolute inset-0 z-0 hidden bg-gradient-to-r from-white/84 via-white/58 to-white/52 dark:from-slate-950/75 dark:via-slate-950/38 dark:to-slate-950/18 lg:block" />

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
        <div className="absolute inset-0 bg-cvc-hero-shade" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-4 pt-[calc(var(--cvc-nav-height)+1rem)] sm:px-6 sm:pb-6 lg:h-full lg:min-h-0 lg:px-10 lg:pb-5 lg:pt-[var(--cvc-nav-height)]">
        <div className="flex min-h-0 flex-1 flex-col justify-center lg:py-4">
          <div className="grid grid-cols-1 items-center gap-4 sm:gap-6 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-5 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
            <div className="flex justify-center self-center">
              <div className="relative flex max-h-[120px] w-full max-w-[200px] items-center justify-center sm:max-h-[165px] sm:max-w-[240px] md:max-h-[180px] lg:max-h-[min(38svh,340px)] lg:max-w-[19rem] xl:max-h-[min(40svh,360px)] xl:max-w-[22rem]">
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
