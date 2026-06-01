'use client'

import Link from 'next/link'
import { useEffect, useId, useRef, useState } from 'react'
import { ourStoresLinks } from '@/lib/navItems'

type Props = {
  className?: string
}

export default function NavStoresDropdown({ className = '' }: Props) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={rootRef} className={`relative shrink-0 ${className}`}>
      <button
        type="button"
        className="inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-cvc-fg-muted transition-colors hover:text-cvc-fg lg:text-sm"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls={menuId}
        onClick={() => setOpen((v) => !v)}
      >
        Our Stores
        <svg
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
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
      {open && (
        <div
          id={menuId}
          role="menu"
          className="absolute right-0 top-full z-[60] mt-2 min-w-[16rem] rounded-lg border border-cvc-border bg-cvc-card py-1 shadow-xl"
        >
          {ourStoresLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              role="menuitem"
              className="block px-4 py-2.5 text-sm text-cvc-fg-muted transition-colors hover:bg-cvc-hover hover:text-cvc-fg"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
