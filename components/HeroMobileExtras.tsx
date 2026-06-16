import type { ReactNode } from 'react'
import { Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HERO_PILLARS } from '@/lib/heroPillars'

export function HeroStarSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`relative my-2 w-full sm:my-3 ${className}`} aria-hidden>
      <div className="h-px w-full bg-slate-400/60 dark:bg-white/35" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 px-2">
        <Star className="h-3 w-3 fill-cvc-hero-accent text-cvc-hero-accent" strokeWidth={0} />
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
          ? 'text-left text-[0.9375rem] font-light italic leading-[1.65] text-cvc-hero-fg dark:text-cvc-hero-fg-muted sm:text-base sm:leading-relaxed lg:text-[0.8125rem] lg:leading-[1.45] xl:text-[0.875rem]'
          : 'text-left text-[0.9375rem] font-light italic leading-[1.65] text-cvc-hero-fg dark:text-cvc-hero-fg-muted sm:text-base sm:leading-relaxed'
      }
    >
      As you step from one chapter to the next, we stand beside you—providing{' '}
      <strong className="font-semibold not-italic text-cvc-hero-accent">
        360°
      </strong>{' '}
      of support and guidance to help you find your footing and discover the next stage of your journey.
    </p>
  )
}

export function HeroPillarsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`cvc-hero-pillars-clear relative w-full ${compact ? 'px-0' : 'px-3 sm:px-4 lg:px-6 xl:px-8'}`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {HERO_PILLARS.map(({ title, description, Icon, iconSrc }, index) => (
          <div
            key={title}
            className={`flex items-center gap-2.5 sm:gap-3 ${
              compact ? 'px-3 py-2.5 sm:px-4 lg:px-5 lg:py-3' : 'px-4 py-3 sm:px-5 sm:py-3.5'
            } ${index % 2 === 1 ? 'sm:border-l sm:border-white/55 dark:sm:border-white/35' : ''} ${
              index >= 2 ? 'sm:border-t sm:border-white/45 dark:sm:border-white/25 lg:border-t-0' : ''
            } ${index > 0 ? 'lg:border-l lg:border-white/55 dark:lg:border-white/35' : ''}`}
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-500/60 bg-white text-cvc-hero-accent shadow-[0_1px_3px_rgb(0_0_0_/_0.08)] sm:h-9 sm:w-9 dark:border-white/55 dark:bg-white/95 dark:text-[#3d4a2c]">
              {iconSrc ? (
                <Image
                  src={iconSrc}
                  alt=""
                  width={18}
                  height={18}
                  className="h-4 w-4 object-contain sm:h-[1.125rem] sm:w-[1.125rem]"
                  aria-hidden
                />
              ) : Icon ? (
                <Icon className="h-4 w-4 sm:h-[1.125rem] sm:w-[1.125rem]" strokeWidth={2} aria-hidden />
              ) : null}
            </div>
            <div className="min-w-0 flex-1 text-left">
              <p className="text-[11px] font-bold leading-tight text-cvc-fg sm:text-xs dark:text-white [text-shadow:0_1px_3px_rgb(255_255_255_/_0.9)] dark:[text-shadow:none]">
                {title}
              </p>
              <p className="mt-0.5 text-[10px] leading-snug text-cvc-fg-muted sm:text-[11px] dark:text-white/80 dark:[text-shadow:none] [text-shadow:0_1px_2px_rgb(255_255_255_/_0.85)]">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
