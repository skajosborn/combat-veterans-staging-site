'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="relative flex-shrink-0">
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Foundation Logo"
                  width={64}
                  height={64}
                  className="object-contain w-12 h-12 sm:w-16 sm:h-16"
                  priority
                />
              </div>
              <div className="hidden sm:block text-center">
                <h1 className="text-xl font-semibold text-white">
                  Combat Veterans
                </h1>
                <p className="text-xl text-gray-400 font-medium">
                  to Careers
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:space-x-8 items-center">
            <a href="#home" className="text-gray-300 font-medium hover:text-white transition-colors">
              Home
            </a>
            <div className="relative group">
              <a href="#programs" className="text-gray-300 font-medium hover:text-white transition-colors">
                Programs
              </a>
              <div className="absolute left-0 top-full pt-2 min-w-[220px] opacity-0 invisible translate-y-1 pointer-events-none transition-all duration-150 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:pointer-events-auto">
                <div className="rounded-lg border border-gray-700 bg-[#0a0e27] p-2 shadow-xl">
                  <a
                    href="/operation-field-trip"
                    className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    Operation Field Trip
                  </a>
                  <a
                    href="/whats-next"
                    className="block rounded-md px-3 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    What&apos;s Next
                  </a>
                </div>
              </div>
            </div>
            <a href="#success-stories" className="text-gray-300 font-medium hover:text-white transition-colors">
              Success Stories
            </a>
            <a href="#contact" className="text-gray-300 font-medium hover:text-white transition-colors">
              Contact
            </a>
            <a href="/events" className="text-gray-300 font-medium hover:text-white transition-colors">
              Events
            </a>
            <a href="/sponsors" className="text-gray-300 font-medium hover:text-white transition-colors">
              Sponsors
            </a>
            <a href="/donate" className="text-gray-300 font-medium hover:text-white transition-colors">
              Donate
            </a>
            <a 
              href="/veteran-application" 
              className="bg-white text-[#0a0e27] px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Apply Now
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 bg-[#0a0e27] border-t border-gray-800 mt-2">
            <a href="#home" className="block text-gray-300 font-medium hover:text-white py-2">
              Home
            </a>
            <div className="py-2">
              <a href="#programs" className="block text-gray-300 font-medium hover:text-white">
                Programs
              </a>
              <div className="mt-2 ml-4 space-y-2">
                <a href="/operation-field-trip" className="block text-gray-400 text-sm hover:text-white">
                  Operation Field Trip
                </a>
                <a href="/whats-next" className="block text-gray-400 text-sm hover:text-white">
                  What&apos;s Next
                </a>
              </div>
            </div>
            <a href="#success-stories" className="block text-gray-300 font-medium hover:text-white py-2">
              Success Stories
            </a>
            <a href="#contact" className="block text-gray-300 font-medium hover:text-white py-2">
              Contact
            </a>
            <a href="/events" className="block text-gray-300 font-medium hover:text-white py-2">
              Events
            </a>
            <a href="/sponsors" className="block text-gray-300 font-medium hover:text-white py-2">
              Sponsors
            </a>
            <a href="/donate" className="block text-gray-300 font-medium hover:text-white py-2">
              Donate
            </a>
            <a 
              href="/veteran-application" 
              className="block bg-white text-[#0a0e27] px-6 py-2 rounded-lg font-semibold text-center"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
