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

const submenuLinkClass =
  'block px-4 py-2.5 text-sm text-cvc-fg-muted transition-colors hover:bg-cvc-hover hover:text-cvc-fg'

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
          className="invisible absolute left-full top-0 z-10 ml-1 min-w-[16rem] overflow-hidden rounded-lg border border-cvc-border bg-cvc-card py-1 opacity-0 shadow-xl transition-[opacity,visibility] duration-150 group-hover/submenu:visible group-hover/submenu:opacity-100 group-focus-within/submenu:visible group-focus-within/submenu:opacity-100"
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
  const menuId = useId()

  const updateMenuPosition = useCallback(() => {
    const button = buttonRef.current
    if (!button) return
    const rect = button.getBoundingClientRect()
    const minWidth = Math.max(256, rect.width)
    let left = rect.left
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
          zIndex: 100010,
        }}
        className="overflow-visible rounded-lg border border-cvc-border bg-cvc-card py-1 shadow-xl"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <ul className="divide-y divide-cvc-border">
          <DropdownMenuItems links={links} onNavigate={() => setOpen(false)} />
        </ul>
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
          onMouseDown={(e) => {
            e.preventDefault()
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
