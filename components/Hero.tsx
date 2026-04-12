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

const HERO_MENU_LINKS = [
  { href: '/veteran-application', title: 'Application', Icon: FileText },
  { href: '/operation-field-trip', title: 'Operation Field Trip', Icon: MapPin },
  { href: '/whats-next', title: "What's Next", Icon: ArrowRightCircle },
  { href: '/about', title: 'About', Icon: Flag },
  { href: '/events', title: 'Events', Icon: Calendar },
  { href: '/thrift-store', title: 'Thrift Store', Icon: ShoppingBag },
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
      if (hubRef.current && !hubRef.current.contains(e.target as Node)) close()
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
                ? 'flex items-center gap-3 rounded-lg bg-red-600 px-3 py-2.5 text-xs font-semibold leading-snug text-white shadow-md transition hover:bg-red-500'
                : 'flex items-center gap-3 rounded-lg border border-transparent px-3 py-2 text-xs font-medium leading-snug text-white/95 transition hover:border-white/15 hover:bg-white/10'
            }
          >
            <Icon className="h-4 w-4 shrink-0 text-white/90" strokeWidth={1.5} aria-hidden />
            <span className="min-w-0 leading-snug">{item.title}</span>
          </Link>
        </li>
      )
    })

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col overflow-x-hidden overflow-y-visible bg-cvc-page pb-16 sm:pb-20 lg:overflow-x-visible lg:pb-14"
    >
      {/* Image begins below fixed nav (matches Navigation: py-0.5 + h-9 / sm:h-10 + wordmark) */}
      <div className="pointer-events-none absolute inset-x-0 top-[2.5rem] bottom-0 z-0 overflow-hidden sm:top-[2.75rem]">
        <Image
          src="/flagman.png"
          alt="Combat Veteran with flag background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 28%' }}
          className="object-cover"
        />
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[2.5rem] bottom-0 z-0 bg-cvc-hero-shade sm:top-[2.75rem]"></div>

      <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-6xl flex-1 flex-col justify-start px-4 pb-3 pt-[2.5rem] sm:px-6 sm:pb-4 sm:pt-[2.75rem] lg:justify-center lg:px-8 lg:pb-6 lg:pt-[2.75rem]">
        <div className="grid min-h-0 w-full min-w-0 grid-cols-1 content-start items-start gap-1.5 sm:gap-2 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:items-start lg:gap-8 lg:pt-6 xl:grid-cols-[minmax(0,24rem)_minmax(0,1fr)] xl:gap-10 xl:pt-10">
          {/* Desktop: Explore slides out to the right of the logo (no downward spill into next section) */}
          <div
            ref={hubRef}
            className="hero-quicklinks-hub group relative z-40 order-2 mx-auto w-full min-w-0 max-w-[min(360px,94vw)] overflow-visible lg:order-1 lg:mx-0 lg:ml-0 lg:max-w-none lg:justify-self-start lg:self-start"
          >
            <div className="flex flex-col items-center gap-4 sm:gap-5 lg:items-center lg:gap-4">
              <div className="relative flex w-full min-w-0 shrink justify-center lg:w-auto lg:max-w-[min(100%,24rem)]">
                <div className="relative flex max-h-[min(38svh,300px)] w-[min(92%,380px)] max-w-full shrink-0 animate-slide-in-from-left items-center justify-center sm:max-h-[min(42svh,340px)] lg:max-h-[min(52svh,420px)] lg:w-full">
                  <Image
                    src="/CVClogo.png"
                    alt="Combat Veterans to Careers Foundation Logo"
                    width={640}
                    height={640}
                    className="h-auto max-h-full w-full object-contain drop-shadow-[0_12px_40px_rgba(0,0,0,0.55)]"
                    style={{
                      objectFit: 'contain',
                      objectPosition: 'center',
                    }}
                    priority
                  />
                </div>

                {/* Desktop: horizontal slide-out panel to the right of the crest */}
                <div className="absolute left-full top-1/2 z-50 hidden -translate-y-1/2 pl-2 lg:block xl:pl-3">
                  <nav
                    id="hero-quick-links-menu-desktop"
                    role="navigation"
                    aria-label="Quick links"
                    className="pointer-events-none max-w-0 translate-x-[-10px] overflow-hidden rounded-xl border border-white/20 bg-white/[0.07] opacity-0 shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl ring-1 ring-white/10 transition-[max-width,opacity,transform] duration-300 ease-out motion-reduce:transition-none lg:group-hover:pointer-events-auto lg:group-hover:max-w-[min(18rem,calc(100vw-14rem))] lg:group-hover:translate-x-0 lg:group-hover:opacity-100 lg:group-focus-within:pointer-events-auto lg:group-focus-within:max-w-[min(18rem,calc(100vw-14rem))] lg:group-focus-within:translate-x-0 lg:group-focus-within:opacity-100 motion-reduce:lg:group-hover:max-w-[min(18rem,calc(100vw-14rem))] motion-reduce:lg:group-hover:translate-x-0 motion-reduce:lg:group-hover:opacity-100"
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

              <div className="flex w-full min-w-0 max-w-[min(320px,100%)] flex-col items-center lg:hidden">
                {/* Mobile: one glass panel for toggle + list */}
                <div className="w-full overflow-hidden rounded-xl border border-white/20 bg-white/[0.08] shadow-[0_16px_48px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl">
                  <button
                    type="button"
                    id="hero-quick-links-button"
                    aria-expanded={heroMenuOpen}
                    aria-controls="hero-quick-links-menu"
                    aria-haspopup="true"
                    onClick={() => setHeroMenuOpen((o) => !o)}
                    className="flex w-full items-center justify-between gap-2 px-4 py-3 text-left text-[10px] font-bold uppercase tracking-[0.12em] text-white/95 transition hover:bg-white/[0.06] focus-visible:outline focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-inset"
                  >
                    Quick links
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-white/80 transition-transform duration-200 ${heroMenuOpen ? 'rotate-180' : ''}`}
                      strokeWidth={2}
                      aria-hidden
                    />
                  </button>

                  <nav
                    id="hero-quick-links-menu"
                    role="navigation"
                    aria-label="Quick links"
                    aria-hidden={panelHiddenA11y}
                    className={`overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 ease-out motion-reduce:transition-none ${
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
            </div>
          </div>

          {/* Headline + CTAs — shifted right on lg so Explore can open beside the crest */}
          <div className="order-1 mx-auto flex min-w-0 max-w-md flex-col gap-1 text-center sm:max-w-lg lg:order-2 lg:mx-0 lg:max-w-xl lg:justify-self-stretch lg:self-start lg:pl-2 lg:text-left lg:mt-6 xl:max-w-2xl xl:pl-6">
            <div className="flex flex-col gap-0.5 sm:gap-1 lg:gap-0.5">
              <h2 className="m-0 text-xl font-bold leading-[1.08] tracking-tight text-cvc-hero-fg sm:text-2xl lg:text-3xl xl:text-4xl">
                <span className="text-cvc-hero-fg">WHAT&apos;S </span>
                <span className="text-red-600">NEXT?</span>
              </h2>

              <h1 className="m-0 flex flex-col gap-0.5 text-xl font-bold leading-[1.08] tracking-tight text-cvc-hero-fg sm:gap-1 sm:text-2xl lg:gap-0.5 lg:text-3xl xl:text-4xl">
                <span className="block text-cvc-hero-fg">
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
                  <span className="ml-2 inline sm:ml-3 lg:ml-3">
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

                <span className="block text-red-600">
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

            <div className="pt-0.5 lg:pt-1">
              <p
                className="line-clamp-3 text-xs font-light italic leading-snug text-cvc-hero-fg-muted sm:text-sm lg:leading-snug"
                title="As you step from one chapter to the next, we stand beside you—providing 360° of support and guidance to help you find your footing and discover the next stage of your journey."
              >
                As you step from one chapter to the next, we stand beside you—providing 360° of support and
                guidance to help you find your footing and discover the next stage of your journey.
              </p>
            </div>

            <div className="flex flex-col justify-center gap-1.5 pt-1 sm:flex-row sm:gap-2 lg:justify-start">
              <a
                href="/veteran-application"
                className="rounded-lg bg-gradient-to-b from-red-600 to-patriotic-red px-4 py-2 text-center text-sm font-semibold text-white shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.22),0_4px_0_0_rgb(100_20_30),0_8px_24px_-6px_rgb(0_0_0_/_0.55)] ring-1 ring-white/15 transition-[filter,transform,box-shadow] hover:brightness-110 hover:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.25),0_3px_0_0_rgb(100_20_30),0_10px_28px_-6px_rgb(0_0_0_/_0.5)] active:translate-y-px active:shadow-[inset_0_2px_4px_rgb(0_0_0_/_0.2),0_2px_0_0_rgb(100_20_30)]"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="rounded-lg border border-white/45 bg-slate-950/40 px-4 py-2 text-center text-sm font-semibold text-white shadow-md backdrop-blur-sm transition-colors hover:border-white/65 hover:bg-slate-950/55"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
