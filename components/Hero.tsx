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

const HERO_ACCENT = '#a8b892'

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
  const [visibleService, setVisibleService] = useState<Set<number>>(new Set())
  const [visibleTo, setVisibleTo] = useState<Set<number>>(new Set())
  const [visibleSuccess, setVisibleSuccess] = useState<Set<number>>(new Set())
  const [heroMenuOpen, setHeroMenuOpen] = useState(false)
  const [isNarrowViewport, setIsNarrowViewport] = useState(false)
  const hubRef = useRef<HTMLDivElement>(null)
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
      if (hubRef.current?.contains(target) || mobileHubRef.current?.contains(target)) return
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

  useEffect(() => {
    const service = 'SERVICE'
    const to = 'TO'
    const success = 'SUCCESS'

    let letterIndex = 0

    service.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleService((prev) => new Set([...prev, index]))
      }, 100 * letterIndex++)
    })

    letterIndex += 2

    to.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleTo((prev) => new Set([...prev, index]))
      }, 100 * letterIndex++)
    })

    letterIndex += 2

    success.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleSuccess((prev) => new Set([...prev, index]))
      }, 100 * letterIndex++)
    })
  }, [])

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
                : 'flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-xs font-medium leading-snug text-white/95 transition hover:border-white/15 hover:bg-white/10'
            }
          >
            <Icon className="h-4 w-4 shrink-0 text-white/90" strokeWidth={1.5} aria-hidden />
            <span className="min-w-0 leading-snug">{item.title}</span>
          </Link>
        </li>
      )
    })

  const renderMobileQuickLinks = () => (
    <div ref={mobileHubRef} className="w-full">
      <div className="w-full overflow-hidden rounded-lg border border-white/25 bg-slate-950/40 shadow-lg backdrop-blur-md">
        <button
          type="button"
          aria-expanded={heroMenuOpen}
          aria-controls="hero-quick-links-menu-mobile"
          aria-haspopup="true"
          onClick={() => setHeroMenuOpen((o) => !o)}
          className="flex w-full items-center justify-between gap-2 px-4 py-3.5 text-left text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-white/[0.06] focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-inset"
        >
          Quick links
          <ChevronDown
            className={`h-4 w-4 shrink-0 text-white/85 transition-transform duration-200 ${heroMenuOpen ? 'rotate-180' : ''}`}
            strokeWidth={2}
            aria-hidden
          />
        </button>
        <nav
          id="hero-quick-links-menu-mobile"
          role="navigation"
          aria-label="Quick links"
          aria-hidden={panelHiddenA11y}
          className={`overflow-hidden border-t border-white/15 transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
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

  const renderMobileHeadlines = () => (
    <div className="flex flex-col gap-2 text-left">
      <h2
        className="m-0 text-[1.5rem] font-black uppercase leading-snug tracking-tight text-cvc-hero-fg sm:text-[1.75rem]"
        style={{ fontStretch: 'condensed' }}
      >
        WHAT&apos;S <span style={{ color: HERO_ACCENT }}>NEXT?</span>
      </h2>
      <h1
        className="m-0 flex flex-col gap-1.5 font-black uppercase leading-snug tracking-tight sm:gap-2"
        style={{ fontStretch: 'condensed' }}
      >
        <span className="text-[1.5rem] text-cvc-hero-fg sm:text-[1.75rem]">
          SERVICE <span className="text-cvc-hero-fg">TO</span>
        </span>
        <span className="text-[1.625rem] sm:text-[1.875rem]" style={{ color: HERO_ACCENT }}>
          SUCCESS
        </span>
      </h1>
    </div>
  )

  const renderDesktopHeadlines = () => (
    <div className="flex flex-col gap-1 sm:gap-1.5">
      <h2
        className="m-0 text-2xl font-black uppercase leading-[1.08] tracking-tight text-cvc-hero-fg sm:text-3xl lg:text-[2rem] xl:text-4xl xl:tracking-tighter"
        style={{ fontStretch: 'condensed' }}
      >
        <span className="text-cvc-hero-fg">WHAT&apos;S </span>
        <span style={{ color: HERO_ACCENT }}>NEXT?</span>
      </h2>
      <h1
        className="m-0 flex flex-col gap-1 font-black uppercase leading-[1.08] tracking-tight sm:gap-1.5 sm:tracking-tighter lg:tracking-tighter"
        style={{ fontStretch: 'condensed' }}
      >
        <span className="block text-2xl text-cvc-hero-fg sm:text-3xl lg:text-[2rem] xl:text-4xl">
          {'SERVICE'.split('').map((letter, index) => (
            <span
              key={`service-${index}`}
              className={`inline-block transition-all duration-300 ${
                visibleService.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {letter}
            </span>
          ))}
          <span className="ml-2 inline sm:ml-3">
            {'TO'.split('').map((letter, index) => (
              <span
                key={`to-${index}`}
                className={`inline-block transition-all duration-300 ${
                  visibleTo.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {letter}
              </span>
            ))}
          </span>
        </span>
        <span
          className="block text-[1.65rem] sm:text-4xl lg:text-[2.25rem] xl:text-[2.75rem]"
          style={{ color: HERO_ACCENT }}
        >
          {'SUCCESS'.split('').map((letter, index) => (
            <span
              key={`success-${index}`}
              className={`inline-block transition-all duration-300 ${
                visibleSuccess.has(index) ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
            >
              {letter}
            </span>
          ))}
        </span>
      </h1>
    </div>
  )

  return (
    <section
      id="home"
      className="relative flex flex-col overflow-x-hidden bg-cvc-page lg:overflow-y-visible"
    >
      {/* Desktop background only — mobile bg is scoped to hero content block */}
      <div className="pointer-events-none absolute inset-x-0 top-[2.5rem] bottom-0 z-0 hidden overflow-hidden sm:top-[2.75rem] lg:block">
        <Image
          src="/flagman.png"
          alt=""
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
          className="object-cover"
        />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-[2.5rem] bottom-0 z-0 hidden bg-cvc-hero-shade sm:top-[2.75rem] lg:block" />

      {/* —— Mobile layout —— */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="relative overflow-visible">
          <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-none">
            <Image
              src="/flagman.png"
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
                className="h-auto w-full max-h-[165px] object-contain object-center drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)] sm:max-h-[180px]"
                sizes="(max-width: 640px) 220px, 240px"
                priority
              />
            </div>

            <div className="mb-6 w-full sm:mb-7">{renderMobileQuickLinks()}</div>

            <div className="flex w-full flex-col gap-5 sm:gap-6">
              {renderMobileHeadlines()}
              <HeroStarSeparator />
              <HeroLeadParagraph />
              <div className="flex flex-col gap-3 pt-1">
                <HeroMobileCta href="/veteran-application" variant="primary">
                  Start Your Transition
                </HeroMobileCta>
                <HeroMobileCta href="#programs" variant="secondary">
                  Learn More
                </HeroMobileCta>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* —— Desktop layout —— */}
      <div className="relative z-10 mx-auto hidden w-full max-w-6xl flex-col px-8 pt-[2.75rem] lg:flex">
        <div className="grid min-h-0 w-full min-w-0 grid-cols-[minmax(0,22rem)_minmax(0,1fr)] content-start items-start gap-8 pb-8 pt-6 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-10 xl:pb-10 xl:pt-10">
          <div
            ref={hubRef}
            className="hero-quicklinks-hub group relative z-40 w-full min-w-0 overflow-visible justify-self-start self-start"
          >
            <div className="flex flex-col items-center gap-4">
              <div className="relative flex w-full min-w-0 shrink justify-center max-w-[min(100%,24rem)]">
                <div className="relative flex max-h-[min(48svh,380px)] w-full shrink-0 animate-slide-in-from-left items-center justify-center">
                  <Image
                    src="/CVClogo.png"
                    alt="Combat Veterans to Careers Organization Logo"
                    width={640}
                    height={640}
                    className="h-auto max-h-full w-full object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
                    priority
                  />
                </div>
                <div className="absolute left-full top-1/2 z-50 -translate-y-1/2 pl-2 xl:pl-3">
                  <nav
                    id="hero-quick-links-menu-desktop"
                    role="navigation"
                    aria-label="Quick links"
                    className="pointer-events-none max-w-0 translate-x-[-10px] overflow-hidden rounded-xl border border-white/20 bg-white/[0.07] opacity-0 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl ring-1 ring-white/10 transition-[max-width,opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:group-hover:pointer-events-auto lg:group-hover:max-w-[min(18rem,calc(100vw-14rem))] lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:group-focus-within:pointer-events-auto lg:group-focus-within:max-w-[min(18rem,calc(100vw-14rem))] lg:group-focus-within:translate-x-0 lg:group-focus-within:opacity-100"
                  >
                    <div className="w-[min(18rem,calc(100vw-14rem))] shrink-0 px-3 py-3">
                      <p className="mb-2 border-b border-white/10 pb-2 text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-white/45">
                        Explore
                      </p>
                      <ul className="flex max-h-[min(70svh,20rem)] flex-col gap-1 overflow-y-auto overscroll-contain">
                        {renderMenuLinks(false)}
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>

          <div className="flex min-w-0 max-w-xl flex-col gap-3 self-center pl-2 text-left xl:max-w-2xl xl:pl-6">
            {renderDesktopHeadlines()}
            <p className="max-w-prose text-sm font-light italic leading-relaxed text-cvc-hero-fg-muted sm:text-base">
              As you step from one chapter to the next, we stand beside you—providing 360° of support and
              guidance to help you find your footing and discover the next stage of your journey.
            </p>
            <div className="flex flex-row gap-3 pt-0.5">
              <a
                href="/veteran-application"
                className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cvc-cta-fill px-4 text-sm font-semibold leading-none text-white shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.18),0_3px_0_0_rgb(30_45_25),0_8px_24px_-6px_rgb(0_0_0_/_0.5)] ring-1 ring-white/15 transition-[filter,transform,box-shadow] hover:brightness-110 active:translate-y-px"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="inline-flex min-h-10 items-center justify-center rounded-lg border border-white/45 bg-slate-950/40 px-4 text-sm font-semibold leading-none text-white shadow-md backdrop-blur-sm transition-colors hover:border-white/65 hover:bg-slate-950/55"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Pillars + honor bar — all breakpoints, bottom of hero */}
      <HeroPillarsGrid />
      <HeroHonorBar />
    </section>
  )
}
