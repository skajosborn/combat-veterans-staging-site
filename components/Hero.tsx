'use client'

import { useEffect, useState, useRef, type CSSProperties } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinkButton from './NavLinkButton'
import {
  FileText,
  MapPin,
  ArrowRightCircle,
  Flag,
  Calendar,
  ShoppingBag,
  Handshake,
  Heart,
} from 'lucide-react'

const HERO_RADIAL_LINKS = [
  { href: '/veteran-application', title: 'Application', Icon: FileText, angle: -38 },
  { href: '/operation-field-trip', title: 'Operation Field Trip', Icon: MapPin, angle: -27 },
  { href: '/whats-next', title: "What's Next", Icon: ArrowRightCircle, angle: -16 },
  { href: '/about', title: 'About', Icon: Flag, angle: -5 },
  { href: '/events', title: 'Events', Icon: Calendar, angle: 5 },
  { href: '/thrift-store', title: 'Thrift Store', Icon: ShoppingBag, angle: 16 },
  { href: '/sponsors', title: 'Sponsors', Icon: Handshake, angle: 27 },
  { href: '/donate', title: 'Donate', Icon: Heart, angle: 38 },
] as const

export default function Hero() {
  const [visibleService, setVisibleService] = useState<Set<number>>(new Set())
  const [visibleTo, setVisibleTo] = useState<Set<number>>(new Set())
  const [visibleSuccess, setVisibleSuccess] = useState<Set<number>>(new Set())
  const heroVideoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    // Animate letters one at a time
    const service = 'SERVICE'
    const to = 'TO'
    const success = 'SUCCESS'
    
    let letterIndex = 0
    
    // Animate SERVICE letters
    service.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleService(prev => new Set([...prev, index]))
      }, 100 * letterIndex++)
    })
    
    // Small pause before TO
    letterIndex += 2
    
    // Animate TO letters
    to.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleTo(prev => new Set([...prev, index]))
      }, 100 * letterIndex++)
    })
    
    // Small pause before SUCCESS
    letterIndex += 2
    
    // Animate SUCCESS letters
    success.split('').forEach((_, index) => {
      setTimeout(() => {
        setVisibleSuccess(prev => new Set([...prev, index]))
      }, 100 * letterIndex++)
    })
  }, [])

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] flex-col overflow-hidden bg-cvc-page pt-24 lg:overflow-visible"
    >
      <div className="absolute top-16 bottom-0 left-0 right-0 z-0">
        <Image
          src="/flagman.png"
          alt="Combat Veteran with flag background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Lighter overlay for better background visibility */}
      <div className="absolute top-16 bottom-0 left-0 right-0 bg-cvc-hero-shade"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex-1 flex flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-6 min-h-0">
        <div className="flex-1 min-h-0 grid grid-cols-1 items-center gap-4 lg:grid-cols-2 lg:gap-10 lg:items-center lg:min-h-0">
          {/* Logo hub + desktop radial quick links */}
          <div
            className="hero-radial-hub relative z-30 order-2 mx-auto flex w-full max-w-[360px] flex-row items-center justify-center outline-none focus-visible:ring-2 focus-visible:ring-white/90 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent lg:order-1 lg:mx-0 lg:ml-0 lg:max-w-none lg:min-h-[min(400px,56vh)] lg:w-auto lg:justify-start"
            tabIndex={0}
            aria-label="Organization logo. Hover or focus here to show quick links."
          >
            {/* Logo column only: nav %/pivot use this width so links fan from the shield, not from hub padding */}
            <div
              className="relative z-20 h-full min-h-0 w-[76%] max-w-[360px] shrink-0 animate-slide-in-from-left lg:flex lg:w-[min(380px,40vw)] lg:max-w-none lg:items-center lg:justify-center"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
              }}
            >
              <Image
                src="/CVClogo.png"
                alt="Combat Veterans to Careers Foundation Logo"
                width={600}
                height={600}
                className="h-auto w-full object-contain"
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                }}
                priority
              />
              <nav
                className="hero-radial-nav pointer-events-none absolute left-[calc(100%-36px)] top-1/2 z-40 hidden min-h-[min(280px,44vh)] min-w-[min(200px,22vw)] -translate-y-1/2 pl-9 lg:block"
                aria-label="Quick navigation"
              >
                {HERO_RADIAL_LINKS.map((item) => {
                  const Icon = item.Icon
                  const linkStyle = {
                    '--hero-a': `${item.angle}deg`,
                  } as CSSProperties
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      title={item.title}
                      className="hero-radial-link group relative flex min-h-0 min-w-0 max-w-[9.25rem] items-center gap-1.5 border border-slate-200/90 bg-white px-2 py-1.5 text-cvc-fg shadow-md transition-all duration-300 hover:border-slate-300 hover:bg-slate-100 hover:shadow-lg dark:border-cvc-border dark:bg-cvc-card dark:text-cvc-fg dark:hover:border-cvc-border-strong dark:hover:bg-cvc-hover"
                      style={linkStyle}
                    >
                      <span className="relative z-20 flex-shrink-0 text-cvc-fg transition-colors duration-300">
                        <Icon className="h-4 w-4 shrink-0" strokeWidth={1.5} aria-hidden />
                      </span>
                      <span className="relative z-20 min-w-0 truncate text-[10px] font-bold uppercase leading-tight tracking-wide text-cvc-fg transition-colors duration-300">
                        {item.title}
                      </span>
                    </Link>
                  )
                })}
              </nav>
            </div>
            {/* Invisible hover bridge: keeps :hover while moving toward fanned links */}
            <div
              className="hidden min-h-[min(260px,42vh)] min-w-[min(120px,14vw)] shrink-0 lg:block"
              aria-hidden
            />
          </div>

          {/* Headline + CTAs */}
          <div className="order-1 mx-auto max-w-md flex flex-col gap-3 text-center lg:order-2 lg:mx-0 lg:text-left">
            <div className="flex flex-col gap-2.5 sm:gap-3 lg:gap-2">
            <h2 className="m-0 text-2xl font-bold leading-snug tracking-wide sm:text-3xl md:text-3xl lg:text-4xl lg:whitespace-nowrap">
              <span className="text-cvc-hero-fg">WHAT&apos;S </span>
              <span className="text-red-600">NEXT?</span>
            </h2>

            {/* Main Heading - Clean and Professional */}
            <h1 className="m-0 flex flex-col gap-2.5 text-2xl font-bold leading-snug text-cvc-hero-fg sm:gap-3 sm:text-3xl md:text-3xl lg:gap-2 lg:text-4xl">
              {/* SERVICE TO on first line */}
              <span className="block text-cvc-hero-fg">
                {'SERVICE'.split('').map((letter, index) => (
                  <span
                    key={`service-${index}`}
                    className={`inline-block transition-all duration-300 ${
                      visibleService.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {letter}
                  </span>
                ))}
                <span className="inline ml-3 lg:ml-4">
                {'TO'.split('').map((letter, index) => (
                  <span
                    key={`to-${index}`}
                    className={`inline-block transition-all duration-300 ${
                      visibleTo.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {letter}
                  </span>
                ))}
                </span>
              </span>

              {/* SUCCESS on second line */}
              <span className="block text-red-600">
                {'SUCCESS'.split('').map((letter, index) => (
                  <span
                    key={`success-${index}`}
                    className={`inline-block transition-all duration-300 ${
                      visibleSuccess.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            </h1>
            </div>

            {/* Poetic subheading */}
            <div className="space-y-2 pt-0">
              <p className="text-xs font-light italic leading-relaxed text-cvc-hero-fg-muted sm:text-sm">
                As you step from one chapter to the next, we stand beside you—providing 360° of support and guidance to help you find your footing and discover the next stage of your journey.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col justify-center gap-2 pt-2 sm:flex-row lg:justify-start">
              <a
                href="/veteran-application"
                className="rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold text-cvc-fg-on-light shadow-lg transition-all hover:bg-gray-100"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="rounded-lg border border-slate-200/90 bg-white/95 px-4 py-2 text-center text-xs font-semibold text-cvc-fg-on-light shadow-md backdrop-blur-sm transition-all hover:border-slate-300 hover:bg-white"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Mobile: horizontal scroll nav */}
        <div className="lg:hidden mt-4 pb-2">
          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <NavLinkButton href="/veteran-application" title="Application" icon={<FileText className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/operation-field-trip" title="Operation Field Trip" icon={<MapPin className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/whats-next" title="What's Next" icon={<ArrowRightCircle className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/about" title="About" icon={<Flag className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/events" title="Events" icon={<Calendar className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/thrift-store" title="Thrift Store" icon={<ShoppingBag className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/sponsors" title="Sponsors" icon={<Handshake className="w-5 h-5" strokeWidth={1.5} />} compact variant="hero" className="flex-shrink-0" />
            <NavLinkButton href="/donate" title="Donate" icon={<Heart className="w-5 h-5" strokeWidth={1.5} />} type="donate" compact variant="hero" className="flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
