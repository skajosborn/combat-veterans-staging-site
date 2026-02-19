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
      className="relative flex min-h-[calc(100svh-10rem)] items-start overflow-hidden bg-[#0a0e27] pt-32 sm:min-h-[calc(100svh-10rem)] sm:items-start lg:h-screen lg:min-h-0 lg:items-center"
    >
      <div className="absolute inset-0 z-0 overflow-hidden pt-20">
        <Image
          src="/flagman.png"
          alt="Combat Veteran with flag background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'top center' }}
          className="h-full w-full"
        />
      </div>

      {/* Lighter overlay for better background visibility */}
      <div className="absolute inset-0 bg-[#0a0e27]/40"></div>

      <div className="relative z-10 mx-auto w-full max-w-full px-4 py-10 sm:px-6 lg:px-8 lg:py-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left side - Logo */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full flex justify-center">
              <div
                className="relative animate-slide-in-from-left"
                style={{
                  width: '70%',
                  maxWidth: '360px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '1rem',
                  paddingBottom: '1rem'
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
          <div className="order-1 mx-auto max-w-xl space-y-4 text-center lg:order-2 lg:mx-0 lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl lg:whitespace-nowrap font-bold tracking-wide">
              <span className="text-white">WHAT&apos;S </span>
              <span className="text-red-600">NEXT?</span>
            </h2>

            {/* Main Heading - Clean and Professional */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {/* SERVICE TO on first line */}
              <span className="mb-1 block pt-3 text-white lg:pt-0">
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
            <div className="space-y-3 pt-3">
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed italic">
                As you step from one chapter to the next, we stand beside you—providing 360° of support and guidance to help you find your footing and discover the next stage of your journey.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col justify-center gap-2.5 pt-3 sm:flex-row lg:justify-start">
              <a
                href="/veteran-application"
                className="rounded-lg bg-white px-6 py-2.5 text-center text-sm font-semibold text-[#0a0e27] shadow-lg transition-all hover:bg-gray-100"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="rounded-lg border-2 border-gray-600 bg-transparent px-6 py-2.5 text-center text-sm font-semibold text-white transition-all hover:border-gray-400 hover:bg-gray-800/50"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4 items-stretch">
            <NavLinkButton
              href="/veteran-application"
              title="VETERAN APPLICATION"
              subtitle="Apply for Transition Support"
              icon={<FileText className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/operation-field-trip"
              title="OPERATION FIELD TRIP"
              subtitle="Explore Career Paths"
              icon={<MapPin className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/whats-next"
              title="WHAT'S NEXT"
              subtitle="Find Your Next Mission"
              icon={<ArrowRightCircle className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/about"
              title="ABOUT"
              subtitle="Our Story & Mission"
              icon={<Flag className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/events"
              title="EVENTS"
              subtitle="Upcoming Programs"
              icon={<Calendar className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/thrift-store"
              title="THRIFT STORE"
              subtitle="Support Our Store"
              icon={<ShoppingBag className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/sponsors"
              title="SPONSORS"
              subtitle="Partner With Us"
              icon={<Handshake className="w-12 h-12" strokeWidth={1.5} />}
              className="flex-grow min-w-0"
            />
            <NavLinkButton
              href="/donate"
              title="DONATE"
              subtitle="Help Our Veterans"
              icon={<Heart className="w-12 h-12" strokeWidth={1.5} />}
              type="donate"
              className="flex-grow min-w-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
