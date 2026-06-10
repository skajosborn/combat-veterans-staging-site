'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navQuickTabs, type NavQuickTabTone } from '@/lib/navItems'

function isTabActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

const toneClasses: Record<NavQuickTabTone, string> = {
  red: 'bg-patriotic-red text-white hover:brightness-110',
  white:
    'border border-slate-300/80 bg-white text-patriotic-navy hover:bg-slate-50 dark:border-slate-400/50 dark:bg-white dark:text-patriotic-navy',
  blue: 'bg-patriotic-blue text-white hover:brightness-110',
}

export default function NavQuickTabs() {
  const pathname = usePathname()

  return (
    <nav aria-label="Quick program links" className="relative z-10 bg-transparent px-3 sm:px-4">
      <div
        className="mx-auto flex max-w-[96rem] gap-2 sm:gap-3"
        style={{ minHeight: 'var(--cvc-nav-tabs-height)' }}
      >
        {navQuickTabs.map((tab) => {
          const active = isTabActive(pathname, tab.href)

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? 'page' : undefined}
              className={`flex min-h-[2.5rem] flex-1 items-center justify-center rounded-b-lg px-2 text-center text-[10px] font-bold uppercase tracking-[0.08em] transition-[filter,box-shadow,background-color] sm:text-[11px] sm:tracking-[0.1em] ${toneClasses[tab.tone]} ${
                active ? 'shadow-[inset_0_-3px_0_0_var(--cvc-hero-pillars-gold)]' : ''
              }`}
            >
              <span className="leading-tight sm:hidden">{tab.shortLabel}</span>
              <span className="hidden leading-tight sm:inline">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
