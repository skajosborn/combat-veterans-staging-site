'use client'

import { useEffect, useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  FileText,
  MapPin,
  ArrowRightCircle,
  Flag,
  Calendar,
  ShoppingBag,
  Handshake,
  Heart,
  ChevronDown,
} from 'lucide-react'
import {
  HeroHonorBar,
  HeroLeadParagraph,
  HeroMobileCta,
  HeroPillarsGrid,
  HeroStarSeparator,
} from '@/components/HeroMobileExtras'

const HERO_BG_DESKTOP = '/cvc hero bg medium.png'
const HERO_BG_MOBILE = '/cvc hero bg 1.png'

const HERO_MENU_LINKS = [
  { href: '/veteran-application', title: 'Application', Icon: FileText },
  { href: '/operation-field-trip', title: 'Operation Field Trip', Icon: MapPin },
  { href: '/whats-next', title: "What's Next", Icon: ArrowRightCircle },
  { href: '/about', title: 'About', Icon: Flag },
  { href: '/events', title: 'Events', Icon: Calendar },
  { href: '/restoring-hope-thrift-store', title: 'Thrift Store', Icon: ShoppingBag },
  { href: '/sponsors', title: 'Sponsors', Icon: Handshake },
  { href: '/donate', title: 'Donate', Icon: Heart, accent: true as const },
] as const

export default function Hero() {
  const [heroMenuOpen, setHeroMenuOpen] = useState(false)
  const [isNarrowViewport, setIsNarrowViewport] = useState(false)
  const mobileHubRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const sync = () => setIsNarrowViewport(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    if (!heroMenuOpen) return
    const close = () => setHeroMenuOpen(false)
    const onDoc = (e: MouseEvent) => {
      const target = e.target as Node
      if (mobileHubRef.current?.contains(target)) return
      close()
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [heroMenuOpen])

  const mobilePanelOpen = isNarrowViewport && heroMenuOpen
  const panelHiddenA11y = !heroMenuOpen && isNarrowViewport

  const renderMenuLinks = (tabIndexWhenHidden: boolean) =>
    HERO_MENU_LINKS.map((item) => {
      const Icon = item.Icon
      const isAccent = 'accent' in item && item.accent
      return (
        <li key={item.href}>
          <Link
            href={item.href}
            tabIndex={tabIndexWhenHidden && panelHiddenA11y ? -1 : undefined}
            onClick={() => setHeroMenuOpen(false)}
            className={
              isAccent
                ? 'flex items-center gap-3 rounded-lg bg-cvc-cta-fill px-3 py-2.5 text-xs font-semibold leading-snug text-white shadow-md transition hover:brightness-110'
                : 'flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-xs font-medium leading-snug text-cvc-fg transition hover:border-slate-200 hover:bg-slate-100 dark:text-white/95 dark:hover:border-white/15 dark:hover:bg-white/10'
            }
          >
            <Icon className="h-4 w-4 shrink-0 text-cvc-fg/80 dark:text-white/90" strokeWidth={1.5} aria-hidden />
            <span className="min-w-0 leading-snug">{item.title}</span>
          </Link>
        </li>
      )
    })

  const renderMobileQuickLinks = () => (
    <div ref={mobileHubRef} className="w-full">
      <div className="w-full overflow-hidden rounded-lg border border-slate-300/80 bg-white/90 shadow-lg backdrop-blur-md dark:border-white/25 dark:bg-slate-950/40">
        <button
          type="button"
          aria-expanded={heroMenuOpen}
          aria-controls="hero-quick-links-menu-mobile"
          aria-haspopup="true"
          onClick={() => setHeroMenuOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-cvc-fg transition hover:bg-black/[0.04] focus-visible:outline focus-visible:ring-2 focus-visible:ring-slate-400/40 focus-visible:ring-inset dark:text-white dark:hover:bg-white/[0.06] dark:focus-visible:ring-white/40"
        >
          Quick links
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-cvc-fg/80 transition-transform duration-200 dark:text-white/85 ${heroMenuOpen ? 'rotate-180' : ''}`}
            strokeWidth={2}
            aria-hidden
          />
        </button>
        <nav
          id="hero-quick-links-menu-mobile"
          role="navigation"
          aria-label="Quick links"
          aria-hidden={panelHiddenA11y}
          className={`overflow-hidden border-t border-slate-200 transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none dark:border-white/15 ${
            mobilePanelOpen
              ? 'max-h-[min(52svh,22rem)] opacity-100 pointer-events-auto'
              : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="px-2 pb-2 pt-2">
            <ul className="flex max-h-[min(42svh,18rem)] flex-col gap-1 overflow-y-auto overscroll-contain">
              {renderMenuLinks(true)}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )

  const renderHeroHeadlines = (large = false) => (
    <div className={`flex flex-col text-left ${large ? 'gap-2.5 xl:gap-3' : 'gap-2'}`}>
      <h2
        className={
          large
            ? 'm-0 text-[2rem] font-black uppercase leading-[1.05] tracking-tight text-cvc-hero-fg xl:text-[2.75rem]'
            : 'm-0 text-[1.5rem] font-black uppercase leading-snug tracking-tight text-cvc-hero-fg sm:text-[1.75rem]'
        }
        style={{ fontStretch: 'condensed' }}
      >
        WHAT&apos;S <span className="text-cvc-hero-accent">NEXT?</span>
      </h2>
      <h1
        className={`m-0 flex flex-col font-black uppercase leading-[1.05] tracking-tight text-cvc-hero-fg ${large ? 'gap-2' : 'gap-1.5 sm:gap-2'}`}
        style={{ fontStretch: 'condensed' }}
      >
        <span className={large ? 'text-[2rem] xl:text-[2.75rem]' : 'text-[1.5rem] sm:text-[1.75rem]'}>
          SERVICE TO
        </span>
        <span
          className={`${large ? 'text-[2.125rem] xl:text-[2.875rem]' : 'text-[1.625rem] sm:text-[1.875rem]'} text-cvc-hero-accent`}
        >
          SUCCESS
        </span>
      </h1>
    </div>
  )

  const renderHeroCtas = (layout: 'stack' | 'row') => (
    <div
      className={
        layout === 'row'
          ? 'flex flex-col gap-3 pt-0.5 sm:flex-row sm:items-stretch lg:max-w-2xl'
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
      className="relative flex flex-col overflow-x-hidden bg-cvc-page lg:min-h-[100dvh] lg:overflow-y-visible"
    >
      {/* Desktop background — full bleed under transparent nav */}
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
      <div className="pointer-events-none absolute inset-0 z-0 hidden bg-gradient-to-r from-white/70 via-white/25 to-transparent dark:from-slate-950/75 dark:via-slate-950/35 dark:to-slate-950/10 lg:block" />

      {/* —— Mobile layout —— */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="relative overflow-visible">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none">
            <Image
              src={HERO_BG_MOBILE}
              alt=""
              fill
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-cvc-hero-shade" />
          </div>

          <div className="relative z-10 mx-auto flex w-full max-w-lg flex-col items-center px-4 pb-10 pt-[4.75rem] sm:px-6 sm:pb-12 sm:pt-[5rem]">
            <div className="mb-2 flex w-full max-w-[220px] shrink-0 justify-center overflow-visible px-1 pt-2 sm:max-w-[240px]">
              <Image
                src="/CVClogo.png"
                alt="Combat Veterans to Careers Organization Logo"
                width={480}
                height={480}
                className="h-auto w-full max-h-[165px] object-contain object-center drop-shadow-[0_8px_24px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:max-h-[180px]"
                sizes="(max-width: 640px) 220px, 240px"
                priority
              />
            </div>

            <div className="mb-6 w-full sm:mb-7">{renderMobileQuickLinks()}</div>

            <div className="flex w-full flex-col gap-5 sm:gap-6">
              {renderHeroHeadlines(false)}
              <HeroStarSeparator />
              <HeroLeadParagraph />
              {renderHeroCtas('stack')}
            </div>
          </div>
        </div>
      </div>

      {/* —— Desktop layout — logo left, copy right —— */}
      <div className="relative z-10 mx-auto hidden min-h-0 w-full max-w-7xl flex-1 flex-col justify-center px-8 pb-2 pt-24 lg:flex xl:px-14 xl:pt-28">
        <div className="grid w-full min-w-0 grid-cols-[minmax(0,16rem)_minmax(0,1fr)] items-center gap-6 lg:grid-cols-[minmax(0,20rem)_minmax(0,1fr)] lg:gap-8 xl:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] xl:gap-10">
          <div className="flex min-w-0 justify-center self-center">
            <div className="relative flex w-full max-w-[min(100%,20rem)] max-h-[min(46vh,360px)] items-center justify-center xl:max-h-[min(50vh,400px)]">
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

          <div className="flex min-w-0 max-w-xl flex-col gap-4 xl:max-w-2xl xl:gap-5">
            {renderHeroHeadlines(true)}
            <HeroStarSeparator className="!my-2 xl:!my-3" />
            <HeroLeadParagraph />
            {renderHeroCtas('row')}
          </div>
        </div>
      </div>

      {/* Pillars + honor bar — separated at bottom of hero */}
      <div className="relative z-20 mt-auto flex w-full flex-col gap-4 pb-4 lg:gap-5 lg:pb-5">
        <div className="lg:-mt-2">
          <HeroPillarsGrid />
        </div>
        <HeroHonorBar />
      </div>
    </section>
  )
}
