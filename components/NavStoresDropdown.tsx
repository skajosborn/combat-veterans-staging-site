'use client'

import Link from 'next/link'
import { createPortal } from 'react-dom'
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import { ourStoresLinks } from '@/lib/navItems'

type Props = {
  className?: string
  overlay?: boolean
}

export default function NavStoresDropdown({ className = '', overlay = false }: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, minWidth: 256 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  const updateMenuPosition = useCallback(() => {
    const button = buttonRef.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const minWidth = Math.max(256, rect.width)
    let left = rect.right - minWidth
    left = Math.max(8, Math.min(left, window.innerWidth - minWidth - 8))
    setMenuPosition({
      top: rect.bottom + 8,
      left,
      minWidth,
    })
  }, [])

  useEffect(() => setMounted(true), [])

  useLayoutEffect(() => {
    if (!open) return
    updateMenuPosition()
    window.addEventListener('resize', updateMenuPosition)
    window.addEventListener('scroll', updateMenuPosition, true)
    return () => {
      window.removeEventListener('resize', updateMenuPosition)
      window.removeEventListener('scroll', updateMenuPosition, true)
    }
  }, [open, updateMenuPosition])

  useEffect(() => {
    if (!open) return
    const closeIfOutside = (e: MouseEvent) => {
      const target = e.target as Node
      if (buttonRef.current?.contains(target) || menuRef.current?.contains(target)) return
      setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', closeIfOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('mousedown', closeIfOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  const buttonClass =
    overlay
      ? 'inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-cvc-fg transition-colors hover:text-cvc-fg md:dark:text-white/90 md:dark:hover:text-white lg:text-sm'
      : 'inline-flex items-center gap-1 whitespace-nowrap text-xs font-medium text-cvc-fg transition-colors hover:opacity-80 lg:text-sm'

  const menu =
    open && mounted ? (
      <div
        ref={menuRef}
        id={menuId}
        role="menu"
        style={{
          position: 'fixed',
          top: menuPosition.top,
          left: menuPosition.left,
          minWidth: menuPosition.minWidth,
          zIndex: 200,
        }}
        className="rounded-lg border border-cvc-border bg-cvc-card py-1 shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        {ourStoresLinks.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            role="menuitem"
            className="block px-4 py-2.5 text-sm text-cvc-fg transition-colors hover:bg-cvc-hover"
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    ) : null

  return (
    <>
      <div className={`relative shrink-0 ${className}`}>
        <button
          ref={buttonRef}
          type="button"
          className={buttonClass}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          onClick={(e) => {
            e.stopPropagation()
            setOpen((v) => !v)
          }}
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
      </div>
      {mounted && menu ? createPortal(menu, document.body) : null}
    </>
  )
}
