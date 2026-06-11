'use client'

import Link from 'next/link'
import { createPortal } from 'react-dom'
import { useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from 'react'
import type { NavDropdownLink } from '@/lib/navItems'
import NavStackedLabel from './NavStackedLabel'

type Props = {
  label?: string
  labelLines?: [string, string]
  links: NavDropdownLink[]
  className?: string
  overlay?: boolean
  linkClassName?: string
}

const CLOSE_DELAY_MS = 350
const DESKTOP_NAV_MQ = '(min-width: 1024px)'

const submenuLinkClass =
  'block bg-cvc-card px-4 py-2.5 text-sm text-cvc-fg-muted transition-colors hover:bg-cvc-hover hover:text-cvc-fg'

function isDesktopNav() {
  return typeof window !== 'undefined' && window.matchMedia(DESKTOP_NAV_MQ).matches
}

function SubmenuChevron() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0 text-cvc-fg-subtle" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
        clipRule="evenodd"
      />
    </svg>
  )
}

function DropdownFlyoutItem({
  item,
  isOpen,
  onOpen,
  onNavigate,
}: {
  item: NavDropdownLink
  isOpen: boolean
  onOpen: () => void
  onNavigate: () => void
}) {
  const rowClass =
    'flex w-full items-center justify-between gap-2 text-left transition-colors hover:bg-cvc-hover'

  return (
    <li className="relative z-0 list-none" onMouseEnter={onOpen}>
      <div className={rowClass}>
        {item.href ? (
          <Link
            href={item.href}
            role="menuitem"
            className={`flex-1 ${submenuLinkClass}`}
            onClick={onNavigate}
          >
            {item.label}
          </Link>
        ) : (
          <span className={`flex-1 ${submenuLinkClass} cursor-default`}>{item.label}</span>
        )}
        <span className="pointer-events-none pr-3" aria-hidden>
          <SubmenuChevron />
        </span>
      </div>
      {isOpen ? (
        <ul
          role="menu"
          className="absolute left-full top-0 z-[100110] m-0 ml-0 min-w-[16rem] max-w-xs list-none overflow-visible rounded-lg border border-cvc-border bg-cvc-card py-1 shadow-xl before:absolute before:-left-2 before:bottom-0 before:top-0 before:w-2 before:content-['']"
        >
          {item.children?.map((child) => (
            <li key={child.href ?? child.label} className="border-b border-cvc-border last:border-b-0">
              <Link
                href={child.href ?? '#'}
                role="menuitem"
                className={`${submenuLinkClass} text-xs font-medium`}
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  )
}

function DropdownMenuItems({
  links,
  onNavigate,
}: {
  links: NavDropdownLink[]
  onNavigate: () => void
}) {
  const [openFlyoutKey, setOpenFlyoutKey] = useState<string | null>(null)

  return (
    <>
      {links.map((item) => {
        if (item.children?.length) {
          return (
            <DropdownFlyoutItem
              key={item.label}
              item={item}
              isOpen={openFlyoutKey === item.label}
              onOpen={() => setOpenFlyoutKey(item.label)}
              onNavigate={onNavigate}
            />
          )
        }

        return (
          <li
            key={item.href ?? item.label}
            className="relative z-0"
            onMouseEnter={() => setOpenFlyoutKey(null)}
          >
            <Link
              href={item.href ?? '#'}
              role="menuitem"
              className={submenuLinkClass}
              onClick={onNavigate}
              onMouseEnter={() => setOpenFlyoutKey(null)}
            >
              {item.label}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default function NavDropdown({
  label,
  labelLines,
  links,
  className = '',
  overlay = false,
  linkClassName,
}: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0, minWidth: 256 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeTimerRef = useRef<number | undefined>(undefined)
  const menuId = useId()

  const clearCloseTimer = useCallback(() => {
    if (closeTimerRef.current !== undefined) {
      window.clearTimeout(closeTimerRef.current)
      closeTimerRef.current = undefined
    }
  }, [])

  const scheduleClose = useCallback(() => {
    clearCloseTimer()
    closeTimerRef.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS)
  }, [clearCloseTimer])

  const updateMenuPosition = useCallback(() => {
    const button = buttonRef.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const minWidth = Math.max(256, rect.width)
    let left = rect.left
    left = Math.max(8, Math.min(left, window.innerWidth - minWidth - 8))

    setMenuPosition({
      top: rect.bottom + 6,
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
    document.addEventListener('click', closeIfOutside)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('click', closeIfOutside)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  useEffect(() => () => clearCloseTimer(), [clearCloseTimer])

  const handlePointerEnter = () => {
    if (!isDesktopNav()) return
    clearCloseTimer()
    setOpen(true)
  }

  const handlePointerLeave = () => {
    if (!isDesktopNav()) return
    scheduleClose()
  }

  const buttonClass = linkClassName
    ? `inline-flex items-center gap-0.5 ${linkClassName}`
    : overlay
      ? 'inline-flex items-center gap-0.5 whitespace-nowrap text-xs font-medium text-cvc-fg transition-colors hover:text-cvc-fg md:dark:text-white/90 md:dark:hover:text-white lg:text-sm'
      : 'inline-flex items-center gap-0.5 whitespace-nowrap text-xs font-medium text-cvc-fg transition-colors hover:opacity-80 lg:text-sm'

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
          zIndex: 100100,
        }}
        className="isolate overflow-visible rounded-lg border border-cvc-border bg-cvc-card py-1 shadow-xl before:absolute before:-top-[calc(var(--cvc-nav-tabs-height)+0.25rem)] before:-left-6 before:-right-6 before:h-[calc(var(--cvc-nav-tabs-height)+0.5rem)] before:content-['']"
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      >
        <ul className="divide-y divide-cvc-border overflow-visible rounded-lg">
          <DropdownMenuItems links={links} onNavigate={() => setOpen(false)} />
        </ul>
      </div>
    ) : null

  return (
    <>
      <div
        className={`relative shrink-0 ${className}`}
        onMouseEnter={handlePointerEnter}
        onMouseLeave={handlePointerLeave}
      >
        <button
          ref={buttonRef}
          type="button"
          className={buttonClass}
          aria-expanded={open}
          aria-haspopup="true"
          aria-controls={menuId}
          onClick={(e) => {
            e.stopPropagation()
            clearCloseTimer()
            setOpen((v) => !v)
          }}
        >
          {labelLines ? <NavStackedLabel lines={labelLines} /> : label}
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
