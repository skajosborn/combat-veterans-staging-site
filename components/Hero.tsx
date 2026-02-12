'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [visibleService, setVisibleService] = useState<Set<number>>(new Set())
  const [visibleTo, setVisibleTo] = useState<Set<number>>(new Set())
  const [visibleSuccess, setVisibleSuccess] = useState<Set<number>>(new Set())

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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/bghelmet.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Lighter overlay for better background visibility */}
      <div className="absolute inset-0 bg-[#0a0e27]/40"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Logo */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full flex justify-center">
              <div 
                className="relative animate-slide-in-from-left"
                style={{ 
                  width: '85%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  paddingTop: '2rem',
                  paddingBottom: '2rem'
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
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            {/* Main Heading - Clean and Professional */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block lg:inline">
                {'SERVICE'.split('').map((letter, index) => (
                  <span
                    key={`service-${index}`}
                    className={`inline-block text-camouflage-bg transition-all duration-300 ${
                      visibleService.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                  >
                    {letter}
                  </span>
                ))}
              </span>
              <span className="block lg:inline lg:ml-4 mt-2 lg:mt-0">
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
              <span className="block text-red-600 mt-2 lg:mt-2">
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
            <div className="space-y-4 pt-6">
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed italic">
                As you step from one chapter to the next, we stand beside you—providing the support and guidance to help you find your footing and discover the next stage of your journey.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <a
                href="#apply"
                className="bg-white text-[#0a0e27] px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all shadow-lg text-center"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="bg-transparent text-white border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold text-base hover:border-gray-400 hover:bg-gray-800/50 transition-all text-center"
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
