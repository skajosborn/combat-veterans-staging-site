'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Calendar, ChevronRight, ClipboardList, Compass } from 'lucide-react'
import { navQuickTabs, type NavQuickTabIcon } from '@/lib/navItems'

function isTabActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const tabIcons: Record<NavQuickTabIcon, typeof ClipboardList> = {
  application: ClipboardList,
  calendar: Calendar,
  compass: Compass,
}

const tabCardClass =
  'group flex min-h-[3.75rem] min-w-0 flex-1 items-center gap-3 rounded-[0.875rem] px-3.5 py-3 text-white shadow-[inset_0_1px_0_rgb(255_255_255/0.1),0_4px_14px_rgb(15_18_22/0.28)] transition-[filter,box-shadow,transform] hover:brightness-[1.06] sm:min-h-[4.25rem] sm:gap-4 sm:px-4 sm:py-3.5 bg-[linear-gradient(145deg,#5a6169_0%,#434a54_42%,#2d3239_100%)]'

export default function NavQuickTabs() {
  const pathname = usePathname()

  return (
    <nav aria-label="Quick program links" className="relative z-20 bg-transparent px-3 py-2 sm:px-4 sm:py-2.5">
      <div className="mx-auto flex max-w-[96rem] gap-2 sm:gap-3">
        {navQuickTabs.map((tab) => {
          const active = isTabActive(pathname, tab.href)
          const Icon = tabIcons[tab.icon]

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? 'page' : undefined}
              className={`${tabCardClass} ${
                active ? 'ring-2 ring-[var(--cvc-hero-pillars-gold)] ring-offset-1 ring-offset-transparent' : ''
              }`}
            >
              <span className="shrink-0 text-white/95" aria-hidden="true">
                <Icon className="h-7 w-7 sm:h-9 sm:w-9" strokeWidth={1.5} />
              </span>
              <span className="min-w-0 flex-1 text-left leading-tight">
                <span className="block truncate text-[10px] font-bold uppercase tracking-[0.07em] sm:text-xs sm:tracking-[0.08em]">
                  <span className="sm:hidden">{tab.shortLabel}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
                <span className="mt-0.5 block truncate text-[9px] font-normal normal-case tracking-normal text-white/88 sm:text-[10px]">
                  {tab.subtitle}
                </span>
              </span>
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#2d3239] shadow-sm transition-transform group-hover:scale-105 sm:h-9 sm:w-9"
                aria-hidden="true"
              >
                <ChevronRight className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2.5} />
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
