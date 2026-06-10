'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { navQuickTabs } from '@/lib/navItems'

function isTabActive(pathname: string, href: string) {
  if (href === '/') return pathname === '/'
  return pathname === href || pathname.startsWith(`${href}/`)
}

export default function NavQuickTabs() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Quick program links"
      className="border-b border-cvc-nav-border bg-cvc-page-elevated"
    >
      <div className="mx-auto grid w-full max-w-[96rem] grid-cols-3">
        {navQuickTabs.map((tab) => {
          const active = isTabActive(pathname, tab.href)

          return (
            <Link
              key={tab.href}
              href={tab.href}
              aria-current={active ? 'page' : undefined}
              className={`relative flex min-h-[var(--cvc-nav-tabs-height)] items-center justify-center border-r border-cvc-border px-2 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.05em] transition-colors last:border-r-0 sm:text-[11px] sm:tracking-[0.07em] ${
                active
                  ? 'bg-cvc-card text-cvc-cta-fill after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-cvc-cta-fill'
                  : 'text-cvc-fg-muted hover:bg-cvc-hover hover:text-cvc-fg'
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
