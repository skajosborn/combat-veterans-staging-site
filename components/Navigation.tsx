'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { HandHeart } from 'lucide-react'
import { usePathname } from 'next/navigation'
import NavLinkButton from './NavLinkButton'
import NavDropdown from './NavDropdown'
import NavUtilityBar from './NavUtilityBar'
import ThemeToggle from './ThemeToggle'
import { getMainNavItems, getNavDisplayLabel } from '@/lib/navItems'
import { showVision } from '@/lib/siteConfig'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({})
  const pathname = usePathname()

  const toggleMobileSection = useCallback((label: string) => {
    setOpenMobileSections((prev) => ({ ...prev, [label]: !prev[label] }))
  }, [])
  const isHomeHero = pathname === '/'
  const mainNavItems = getMainNavItems()

  const desktopNavLinkClass =
    'shrink-0 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.06em] text-cvc-fg transition-colors hover:opacity-80 xl:text-[11px] xl:tracking-[0.08em] md:dark:text-white/90 md:dark:hover:text-white'

  const mobileNavLinkClass =
    'block rounded-lg px-3 py-2.5 text-sm font-medium text-cvc-fg-muted transition-colors hover:bg-cvc-hover hover:text-cvc-fg'

  const mobileNavSubLinkClass =
    'block rounded-lg py-2 pl-9 pr-3 text-xs font-medium text-cvc-fg-muted transition-colors hover:bg-cvc-hover hover:text-cvc-fg'

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <NavUtilityBar />
      <nav
        className={`relative border-b border-cvc-nav-border shadow-sm backdrop-blur-md ${
          isHomeHero
            ? 'bg-white/95 dark:bg-cvc-nav md:dark:border-white/15 md:dark:bg-transparent md:dark:shadow-none'
            : 'bg-cvc-nav md:shadow-xl'
        }`}
      >
      <div className="mx-auto w-full max-w-[96rem] px-3 sm:px-4 lg:px-5">
        <div className="flex flex-nowrap items-center justify-between gap-1.5 py-2 min-w-0 md:gap-2 md:py-0.5">
          {/* Logo — small mark; hero carries the large crest */}
          <div className="flex min-w-0 shrink-0 items-center">
            <a href="/" className="flex min-w-0 items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="relative h-9 w-9 shrink-0 sm:h-10 sm:w-10">
                <Image
                  src="/CVClogo.png"
                  alt="Combat Veterans to Careers Organization Logo"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 36px, 40px"
                  priority
                />
              </div>
              <div className="hidden min-w-0 text-left leading-tight 2xl:block">
                <p
                  className={
                    isHomeHero
                      ? 'text-[9px] font-bold uppercase tracking-wide text-patriotic-navy dark:text-white sm:text-[10px] md:text-[10px] md:font-bold md:tracking-[0.12em] md:text-cvc-fg md:dark:text-white lg:text-[11px]'
                      : 'text-[9px] font-bold uppercase tracking-wide text-patriotic-navy dark:text-white sm:text-[10px] md:text-xs md:font-semibold md:normal-case md:tracking-normal md:text-cvc-fg'
                  }
                >
                  Combat Veterans
                </p>
                <p
                  className={
                    isHomeHero
                      ? 'text-[9px] font-bold uppercase tracking-wide text-patriotic-navy dark:text-white/90 sm:text-[10px] md:text-[10px] md:font-bold md:tracking-[0.12em] md:text-cvc-fg md:dark:text-white/90 lg:text-[11px]'
                      : 'text-[9px] font-bold uppercase tracking-wide text-patriotic-navy dark:text-white/90 sm:text-[10px] md:text-[11px] md:font-medium md:normal-case md:tracking-normal md:text-cvc-fg-subtle'
                  }
                >
                  to Careers
                </p>
              </div>
            </a>
          </div>

          {/* Tablet/desktop — scrollable links; stores menu sits outside overflow so dropdown is clickable */}
          <div className="hidden min-w-0 flex-1 items-center gap-3 md:flex lg:gap-4">
            <div className="scrollbar-hide flex min-w-0 flex-1 flex-nowrap items-center justify-between overflow-x-auto px-2 py-0.5 md:overflow-visible md:px-4 lg:px-6 xl:px-8">
              {mainNavItems.map((item) => {
                if (item.type === 'dropdown') {
                  return (
                    <NavDropdown
                      key={item.label}
                      label={getNavDisplayLabel(item)}
                      links={item.items}
                      overlay={isHomeHero}
                      className="shrink-0"
                      linkClassName={desktopNavLinkClass}
                    />
                  )
                }
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={desktopNavLinkClass}
                  >
                    {getNavDisplayLabel(item)}
                  </Link>
                )
              })}
            </div>
            <ThemeToggle
              className={
                isHomeHero
                  ? 'hidden shrink-0 md:inline-flex md:dark:border-white/40 md:dark:text-white md:dark:hover:bg-white/10 md:dark:hover:text-white'
                  : 'shrink-0'
              }
            />
            <Link
              href="/donate"
              className="hidden shrink-0 items-center gap-2 rounded-md bg-cvc-cta-fill px-3 py-2 text-[10px] font-bold uppercase tracking-[0.1em] text-white shadow-md transition-[filter] hover:brightness-110 md:inline-flex xl:px-4 xl:py-2.5 xl:text-[11px]"
            >
              <HandHeart className="h-4 w-4 shrink-0" strokeWidth={2} aria-hidden />
              DONATE
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex flex-shrink-0 items-center gap-2 md:hidden">
            <ThemeToggle className="border-cvc-border text-cvc-fg hover:bg-cvc-hover hover:text-cvc-fg dark:border-white/40 dark:text-white dark:hover:bg-white/10 dark:hover:text-white" />
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="text-cvc-fg hover:text-cvc-fg focus:outline-none dark:text-white dark:hover:text-white/90"
              aria-expanded={isOpen}
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
      </div>

      {/* Mobile Navigation — full viewport width; below bar */}
      {isOpen && (
        <div className="absolute left-0 right-0 top-full z-50 max-h-[min(80vh,85dvh)] overflow-y-auto border-t border-cvc-border bg-cvc-page shadow-lg md:hidden">
          <div className="mx-auto max-w-7xl px-4 pb-4 pt-3 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-1">
              {mainNavItems.map((item) =>
                item.type === 'dropdown' ? (
                  <div key={item.label} className="py-1">
                    <button
                      type="button"
                      className={`${mobileNavLinkClass} flex w-full items-center justify-between text-left`}
                      aria-expanded={!!openMobileSections[item.label]}
                      onClick={() => toggleMobileSection(item.label)}
                    >
                      {getNavDisplayLabel(item)}
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform ${openMobileSections[item.label] ? 'rotate-180' : ''}`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.94a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {openMobileSections[item.label]
                      ? item.items.map(({ label: linkLabel, href }) => (
                          <Link
                            key={href}
                            href={href}
                            onClick={() => setIsOpen(false)}
                            className={mobileNavSubLinkClass}
                          >
                            {linkLabel}
                          </Link>
                        ))
                      : null}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={mobileNavLinkClass}
                  >
                    {getNavDisplayLabel(item)}
                  </Link>
                )
              )}
            </div>
            <div className="mt-3 border-t border-cvc-border pt-3">
              <Link
                href="/donate"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-cvc-cta-fill px-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-md transition-[filter] hover:brightness-110"
              >
                <HandHeart className="h-5 w-5 shrink-0" strokeWidth={2} aria-hidden />
                DONATE
              </Link>
            </div>
            <div className="mt-3 grid min-w-0 grid-cols-2 gap-2 border-t border-cvc-border pt-3 [&>a]:min-w-0">
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
            {showVision && (
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
            )}
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
              href="/restoring-hope-thrift-store"
              title="THRIFT STORES"
              subtitle="Restoring Hope"
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
            </div>
          </div>
        </div>
      )}
      </nav>
    </header>
  )
}
