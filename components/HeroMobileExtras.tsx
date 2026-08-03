import type { ReactNode } from 'react'
import { Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function HeroStarSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`relative my-2 w-full sm:my-3 ${className}`} aria-hidden>
      <div className="h-px w-full bg-white/55 dark:bg-white/40" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 px-2">
        <Star className="h-3 w-3 fill-[#c5d4a8] text-[#c5d4a8] drop-shadow-[0_1px_2px_rgb(0_0_0_/_0.45)]" strokeWidth={0} />
      </div>
    </div>
  )
}

type HeroMobileCtaProps = {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
  className?: string
}

export function HeroMobileCta({ href, children, variant, className = '' }: HeroMobileCtaProps) {
  const isPrimary = variant === 'primary'
  return (
    <Link
      href={href}
      className={
        (isPrimary
          ? 'flex w-full min-h-10 items-center justify-between gap-2 overflow-hidden rounded-lg bg-cvc-cta-fill py-1 pl-3 pr-1 text-left shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.15),0_4px_14px_-4px_rgb(0_0_0_/_0.2)] ring-1 ring-black/5 transition-[filter] hover:brightness-110 dark:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.15),0_4px_14px_-4px_rgb(0_0_0_/_0.45)] dark:ring-white/10'
          : 'flex w-full min-h-10 items-center justify-between gap-2 overflow-hidden rounded-lg border border-slate-400/80 bg-white py-1 pl-3 pr-1 text-left shadow-sm transition-colors hover:border-slate-500 hover:bg-white dark:border-white/50 dark:bg-slate-950/35 dark:shadow-none dark:hover:border-white/70 dark:hover:bg-slate-950/50') +
        (className ? ` ${className}` : '')
      }
    >
      <span
        className={`text-xs font-bold uppercase tracking-wide sm:text-sm ${isPrimary ? 'text-white' : 'text-cvc-fg dark:text-white'}`}
      >
        {children}
      </span>
      <span
        className={
          isPrimary
            ? 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-cvc-cta-fill'
            : 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-300 bg-white text-[#1a2b3c] dark:border-white/60 dark:bg-white dark:text-[#1a2b3c]'
        }
        aria-hidden
      >
        <ArrowRight className="h-5 w-5 stroke-[2.5]" />
      </span>
    </Link>
  )
}

export function HeroLeadParagraph({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={
        compact
          ? 'text-left text-[0.9375rem] font-light italic leading-[1.65] text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)] sm:text-base sm:leading-relaxed lg:text-[0.8125rem] lg:leading-[1.45] xl:text-[0.875rem]'
          : 'text-left text-[0.9375rem] font-light italic leading-[1.65] text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)] sm:text-base sm:leading-relaxed'
      }
    >
      As you step from one chapter to the next, we stand beside you—providing{' '}
      <strong className="font-semibold not-italic text-[#d4e3b5] [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)]">
        360°
      </strong>{' '}
      of support and guidance to help you find your footing and discover the next stage of your journey.
    </p>
  )
}

