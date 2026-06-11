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
  onNavigate,
}: {
  item: NavDropdownLink
  onNavigate: () => void
}) {
  const rowClass =
    'group/submenu relative flex w-full items-center justify-between gap-2 text-left transition-colors hover:bg-cvc-hover'

  return (
    <li className="list-none">
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
        <ul
          role="menu"
          className="invisible absolute left-full top-0 z-[100110] ml-0 min-w-[16rem] overflow-visible rounded-lg border border-cvc-border bg-cvc-card py-1 pl-2 opacity-0 shadow-xl transition-[visibility,opacity] duration-150 before:absolute before:-left-2 before:bottom-0 before:top-0 before:w-2 before:content-[''] group-hover/submenu:visible group-hover/submenu:opacity-100 group-focus-within/submenu:visible group-focus-within/submenu:opacity-100"
        >
          {item.children?.map((child) => (
            <li key={child.href ?? child.label}>
              <Link
                href={child.href ?? '#'}
                role="menuitem"
                className={submenuLinkClass}
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
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
  return (
    <>
      {links.map((item) => {
        if (item.children?.length) {
          return <DropdownFlyoutItem key={item.label} item={item} onNavigate={onNavigate} />
        }

        return (
          <li key={item.href ?? item.label}>
            <Link
              href={item.href ?? '#'}
              role="menuitem"
              className={submenuLinkClass}
              onClick={onNavigate}
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
        <ul className="divide-y divide-cvc-border overflow-hidden rounded-lg">
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
