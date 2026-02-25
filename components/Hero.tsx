'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRef } from 'react'
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
      className="relative flex flex-col min-h-[100vh] overflow-hidden bg-[#0a0e27] pt-24"
    >
      <div className="absolute top-24 bottom-0 left-0 right-0 z-0">
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
      <div className="absolute top-24 bottom-0 left-0 right-0 bg-[#0a0e27]/40"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl flex-1 flex flex-col px-4 py-6 sm:px-6 lg:px-8 lg:py-6 min-h-0">
        <div className="flex-1 min-h-0 grid grid-cols-1 items-center gap-4 lg:grid-cols-[auto_1fr] lg:gap-8 lg:items-stretch">
          {/* Side menu - desktop, left side */}
          <div className="hidden lg:flex flex-col gap-2 w-48 flex-shrink-0 order-1 self-stretch justify-center py-1">
            <NavLinkButton href="/veteran-application" title="Application" icon={<FileText className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/operation-field-trip" title="Operation Field Trip" icon={<MapPin className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/whats-next" title="What's Next" icon={<ArrowRightCircle className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/about" title="About" icon={<Flag className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/events" title="Events" icon={<Calendar className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/thrift-store" title="Thrift Store" icon={<ShoppingBag className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/sponsors" title="Sponsors" icon={<Handshake className="w-5 h-5" strokeWidth={1.5} />} compact />
            <NavLinkButton href="/donate" title="Donate" icon={<Heart className="w-5 h-5" strokeWidth={1.5} />} type="donate" compact />
          </div>
          {/* Logo + content block */}
          <div className="grid grid-cols-1 items-center justify-center gap-4 lg:grid-cols-2 lg:gap-6 order-2 lg:content-center lg:min-h-0">
          {/* Logo */}
          <div className="flex justify-center">
            <div className="relative w-full flex justify-center">
              <div
                className="relative animate-slide-in-from-left"
                style={{
                  width: '68%',
                  maxWidth: '300px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem'
                }}
              >
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Foundation Logo"
                  width={600}
                  height={600}
                  className="object-contain w-full h-auto"
                  style={{ 
                    objectFit: 'contain',
                    objectPosition: 'center'
                  }}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 mx-auto max-w-md space-y-2 text-center lg:order-2 lg:mx-0 lg:text-left">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl lg:whitespace-nowrap font-bold tracking-wide">
              <span className="text-white">WHAT&apos;S </span>
              <span className="text-red-600">NEXT?</span>
            </h2>

            {/* Main Heading - Clean and Professional */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
              {/* SERVICE TO on first line */}
              <span className="mb-0.5 block pt-2 text-white lg:pt-0">
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

            {/* Poetic subheading */}
            <div className="space-y-2 pt-2">
              <p className="text-xs sm:text-sm text-gray-300 font-light leading-relaxed italic">
                As you step from one chapter to the next, we stand beside you—providing 360° of support and guidance to help you find your footing and discover the next stage of your journey.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col justify-center gap-2 pt-2 sm:flex-row lg:justify-start">
              <a
                href="/veteran-application"
                className="rounded-lg bg-white px-4 py-2 text-center text-xs font-semibold text-[#0a0e27] shadow-lg transition-all hover:bg-gray-100"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="rounded-lg border-2 border-gray-600 bg-transparent px-4 py-2 text-center text-xs font-semibold text-white transition-all hover:border-gray-400 hover:bg-gray-800/50"
              >
                Learn More
              </a>
            </div>
          </div>
          </div>
        </div>

        {/* Mobile: horizontal scroll nav */}
        <div className="lg:hidden mt-4 pb-2">
          <div className="flex gap-2 overflow-x-auto -mx-4 px-4 scrollbar-hide">
            <NavLinkButton href="/veteran-application" title="Application" icon={<FileText className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/operation-field-trip" title="Operation Field Trip" icon={<MapPin className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/whats-next" title="What's Next" icon={<ArrowRightCircle className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/about" title="About" icon={<Flag className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/events" title="Events" icon={<Calendar className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/thrift-store" title="Thrift Store" icon={<ShoppingBag className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/sponsors" title="Sponsors" icon={<Handshake className="w-5 h-5" strokeWidth={1.5} />} compact className="flex-shrink-0" />
            <NavLinkButton href="/donate" title="Donate" icon={<Heart className="w-5 h-5" strokeWidth={1.5} />} type="donate" compact className="flex-shrink-0" />
          </div>
        </div>
      </div>
    </section>
  )
}
