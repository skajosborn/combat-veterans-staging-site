'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavLinkButton from './NavLinkButton'

const navLinks = [
  { label: 'Application', href: '/veteran-application' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Vision', href: '/#vision' },
  { label: 'About', href: '/about' },
  { label: 'Events', href: '/events' },
  { label: 'Sponsors', href: '/sponsors' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Donate', href: '/donate' },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0e27]/95 backdrop-blur-md border-b border-gray-800 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-2">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
              <div className="relative flex-shrink-0">
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Foundation Logo"
                  width={64}
                  height={64}
                    className="object-contain h-9 w-9 sm:h-10 sm:w-10"
                  priority
                />
              </div>
              <div className="hidden sm:block text-center">
                  <h1 className="text-base font-semibold text-white">
                  Combat Veterans
                </h1>
                  <p className="text-base text-gray-400 font-medium">
                  to Careers
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex flex-1 justify-end items-center gap-4 lg:gap-6">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
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
          <div className="md:hidden pb-4 bg-[#0a0e27] border-t border-gray-800 mt-2">
            <div className="pt-3 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="block py-2 px-4 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="pt-2 mt-2 border-t border-gray-800 grid grid-cols-2 gap-2 px-4">
            <NavLinkButton
              href="/veteran-application"
              title="VETERAN APPLICATION"
              subtitle="Apply for Transition Support"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375H12a1.125 1.125 0 0 1-1.125-1.125V10.5M19.5 14.25a2.25 2.25 0 0 0 .985-1.908 4.5 4.5 0 0 0-.663-2.261l-3.14-3.141M19.5 14.25H21m-1.5 0a2.25 2.25 0 0 1-2.25 2.25H15M17.25 21l-4.757-4.757M17.25 21a2.25 2.25 0 0 0 2.25-2.25V15M17.25 21h-3.375C11.125 21 9 18.875 9 16.25V4.75A2.75 2.75 0 0 1 11.75 2h9.5C23 2 23 3.75 23 4.75V16.25c0 2.625-2.125 4.75-4.75 4.75h-3.375" />
                </svg>
              }
            />
            <NavLinkButton
              href="/future-goal"
              title="OUR VISION"
              subtitle="1,000-Acre Campus"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              }
            />
            <NavLinkButton
              href="/operation-field-trip"
              title="OPERATION FIELD TRIP"
              subtitle="Explore Career Paths"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 18.75h.008v.008H12v-.008Z" />
                </svg>
              }
            />
            <NavLinkButton
              href="/whats-next"
              title="WHAT'S NEXT"
              subtitle="Find Your Next Mission"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.252 8.252 0 0 1 8.638 5.214M15.362 5.214C12.115 1.968 5.097 5.214 5.097 5.214C5.097 5.214 12.115 1.968 15.362 5.214ZM8.638 5.214C11.885 1.968 19 5.214 19 5.214C19 5.214 11.885 1.968 8.638 5.214Z" />
                </svg>
              }
            />
            <NavLinkButton
              href="/about"
              title="ABOUT"
              subtitle="Our Story & Mission"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM12 18.75h.008v.008H12v-.008Z" />
                </svg>
              }
            />
            <NavLinkButton
              href="/events"
              title="EVENTS"
              subtitle="Upcoming Programs"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5m18 7.5v-7.5" />
                </svg>
              }
            />
            <NavLinkButton
              href="/thrift-store"
              title="THRIFT STORE"
              subtitle="Support Our Store"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.252c-.67 0-1.189-.578-1.119-1.243l1.263-12c.07-.665.698-1.119 1.399-1.119h7.146c.7 0 1.329.454 1.399 1.119Z" />
                </svg>
              }
            />
            <NavLinkButton
              href="/sponsors"
              title="SPONSORS"
              subtitle="Partner With Us"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5-6L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                </svg>
              }
            />
            <NavLinkButton
              href="/donate"
              title="DONATE"
              subtitle="Help Our Veterans"
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.123 5.114 5.517.449a.562.562 0 0 1 .325.996l-4.11 3.526 1.26 5.605a.562.562 0 0 1-.86.643L12 18.27l-4.887 2.93a.562.562 0 0 1-.86-.643l1.26-5.605-4.11-3.526a.562.562 0 0 1 .325-.996l5.517-.449 2.123-5.114Z" />
                </svg>
              }
              type="donate"
            />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
