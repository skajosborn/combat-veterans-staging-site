'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, ChevronRight, ClipboardList, Compass } from 'lucide-react'
import { navQuickTabs, type NavQuickTabIcon, type NavQuickTabTone } from '@/lib/navItems'

function isTabActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const toneClasses: Record<NavQuickTabTone, string> = {
  red: 'bg-patriotic-red hover:brightness-110',
  green: 'bg-patriotic-green hover:brightness-110',
  blue: 'bg-patriotic-blue hover:brightness-110',
}

const tabIcons: Record<NavQuickTabIcon, typeof ClipboardList> = {
  application: ClipboardList,
  calendar: Calendar,
  compass: Compass,
}

export default function NavQuickTabs() {
  const pathname = usePathname()

  return (
    <nav aria-label="Quick program links" className="relative z-30 bg-transparent px-3 py-2 sm:px-4 sm:py-2.5">
      <div className="mx-auto flex max-w-[96rem] gap-2 sm:gap-3">
        {navQuickTabs.map((tab) => {
          const active = isTabActive(pathname, tab.href)
          const Icon = tabIcons[tab.icon]

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? 'page' : undefined}
              className={`group flex min-h-[2.75rem] min-w-0 flex-1 items-center gap-2.5 rounded-lg px-3 py-2.5 text-white shadow-sm transition-[filter,box-shadow] sm:min-h-[3.25rem] sm:gap-3 sm:px-4 sm:py-3 ${toneClasses[tab.tone]} ${
                active ? 'ring-2 ring-[var(--cvc-hero-pillars-gold)] ring-offset-1 ring-offset-transparent' : ''
              }`}
            >
              <span className="shrink-0 opacity-95" aria-hidden="true">
                <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.75} />
              </span>
              <span className="min-w-0 flex-1 text-left leading-tight">
                <span className="block truncate text-[10px] font-bold uppercase tracking-[0.06em] sm:text-[11px] sm:tracking-[0.08em]">
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
                <span className="mt-0.5 hidden truncate text-[10px] font-normal normal-case tracking-normal text-white/90 sm:block">
                  {tab.subtitle}
                </span>
              </span>
              <ChevronRight
                className="h-4 w-4 shrink-0 opacity-80 transition-transform group-hover:translate-x-0.5 sm:h-[1.125rem] sm:w-[1.125rem]"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
