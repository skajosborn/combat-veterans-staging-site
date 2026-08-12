'use client'

import Image from 'next/image'
import {
  HeroLeadParagraph,
  HeroMobileCta,
  HeroStarSeparator,
} from '@/components/HeroMobileExtras'
import HeroFeatureCards from '@/components/HeroFeatureCards'
import HeroStatsBar from '@/components/HeroStatsBar'
import HeroTypewriterHeadlines from '@/components/HeroTypewriterHeadlines'
import UpcomingEvents from '@/components/UpcomingEvents'

const HERO_BG = '/herobg2.png'

export default function Hero() {
  return (
    <section id="home" className="relative flex flex-col overflow-x-hidden">
      <div className="relative flex min-h-[min(100svh,58rem)] flex-col">
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#0a111a]">
          <div className="absolute inset-0">
            <Image
              src={HERO_BG}
              alt=""
              fill
              sizes="100vw"
              quality={90}
              priority
              className="object-cover object-[78%_28%]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent lg:via-black/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-black/10" />
          <div className="absolute inset-0 bg-white/50" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-6 pt-[calc(var(--cvc-nav-height)+1.75rem)] sm:px-6 sm:pb-8 lg:px-10 lg:pb-8 lg:pt-[calc(var(--cvc-nav-height)+2.25rem)]">
          <div className="flex w-full max-w-xl flex-col items-start gap-4 text-left sm:max-w-2xl sm:gap-5">
            <HeroTypewriterHeadlines />
            <HeroStarSeparator className="my-0.5 max-w-md sm:my-1" />
            <HeroLeadParagraph />
            <div className="flex w-full max-w-lg flex-col gap-2.5 pt-1 sm:flex-row sm:items-stretch">
              <HeroMobileCta href="/veteran-application" variant="primary" className="sm:min-w-0 sm:flex-1">
                Start Your Journey
              </HeroMobileCta>
              <HeroMobileCta href="#mission" variant="secondary" icon="play" className="sm:min-w-0 sm:flex-1">
                Watch Our Story
              </HeroMobileCta>
            </div>
          </div>
        </div>

        <HeroFeatureCards className="mt-auto" />
      </div>

      <UpcomingEvents embedded className="bg-[#f2f1e6] dark:bg-[#1a2118]" />
      <HeroStatsBar />
    </section>
  )
}
