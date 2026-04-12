'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'cvc-theme'

function readIsDarkFromDom(): boolean {
  if (typeof document === 'undefined') return true
  return document.documentElement.classList.contains('dark')
}

export default function ThemeToggle({ className = '' }: { className?: string }) {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    setIsDark(readIsDarkFromDom())
  }, [])

  const applyTheme = (dark: boolean) => {
    const root = document.documentElement
    if (dark) {
      root.classList.add('dark')
      try {
        localStorage.setItem(STORAGE_KEY, 'dark')
      } catch {
        /* ignore */
      }
    } else {
      root.classList.remove('dark')
      try {
        localStorage.setItem(STORAGE_KEY, 'light')
      } catch {
        /* ignore */
      }
    }
    setIsDark(dark)
  }

  if (isDark === null) {
    return (
      <span
        className={`inline-block min-h-[1.75rem] min-w-[4rem] rounded-lg border border-transparent ${className}`}
        aria-hidden
      />
    )
  }

  return (
    <button
      type="button"
      onClick={() => applyTheme(!isDark)}
      className={`rounded-lg border border-cvc-border px-2 py-1 text-xs font-semibold text-cvc-fg-muted transition-colors hover:bg-cvc-hover hover:text-cvc-fg ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <span className="flex items-center gap-1.5">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          Light
        </span>
      ) : (
        <span className="flex items-center gap-1.5">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
          Dark
        </span>
      )}
    </button>
  )
}
