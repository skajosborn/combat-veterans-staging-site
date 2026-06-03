import type { ReactNode } from 'react'
import { Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { HERO_PILLARS } from '@/lib/heroPillars'

export function HeroStarSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`relative my-3 w-full sm:my-4 ${className}`} aria-hidden>
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
          ? 'flex w-full min-h-12 items-stretch overflow-hidden rounded-lg bg-cvc-cta-fill text-left shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.15),0_4px_14px_-4px_rgb(0_0_0_/_0.2)] ring-1 ring-black/5 transition-[filter] hover:brightness-110 dark:shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.15),0_4px_14px_-4px_rgb(0_0_0_/_0.45)] dark:ring-white/10'
          : 'flex w-full min-h-12 items-stretch overflow-hidden rounded-lg border border-slate-400/70 bg-white/90 text-left shadow-sm transition-colors hover:border-slate-500 hover:bg-white dark:border-white/50 dark:bg-slate-950/35 dark:shadow-none dark:hover:border-white/70 dark:hover:bg-slate-950/50') +
        (className ? ` ${className}` : '')
      }
    >
      <span
        className={
          isPrimary
            ? 'flex w-11 shrink-0 items-center justify-center bg-[#2d3a22]'
            : 'flex w-11 shrink-0 items-center justify-center bg-slate-100 dark:bg-slate-950/60'
        }
        aria-hidden
      >
        <ChevronRight
          className={`h-5 w-5 stroke-[2.5] ${isPrimary ? 'text-white' : 'text-cvc-fg dark:text-white'}`}
        />
      </span>
      <span
        className={`flex flex-1 items-center px-3 text-sm font-bold uppercase tracking-wide ${isPrimary ? 'text-white' : 'text-cvc-fg dark:text-white'}`}
      >
        {children}
      </span>
    </Link>
  )
}

export function HeroLeadParagraph() {
  return (
    <p className="text-left text-[0.9375rem] font-light italic leading-[1.65] text-cvc-hero-fg dark:text-cvc-hero-fg-muted sm:text-base sm:leading-relaxed">
      As you step from one chapter to the next, we stand beside you—providing{' '}
      <strong className="font-semibold not-italic text-cvc-hero-accent">
        360°
      </strong>{' '}
      of support and guidance to help you find your footing and discover the next stage of your journey.
    </p>
  )
}

export function HeroPillarsGrid() {
  return (
    <div className="relative w-full px-3 sm:px-4 lg:px-6 xl:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-cvc-hero-pillars-border bg-cvc-hero-pillars shadow-[0_8px_32px_-8px_rgb(15_23_42_/_0.18),inset_0_1px_0_0_rgb(255_255_255_/_0.55)] backdrop-blur-xl dark:shadow-[0_12px_40px_-12px_rgb(0_0_0_/_0.55),inset_0_1px_0_0_rgb(255_255_255_/_0.06)]">
        <div className="grid grid-cols-2 divide-x divide-y divide-cvc-hero-pillars-divide lg:grid-cols-4 lg:divide-y-0">
          {HERO_PILLARS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center px-3 py-5 text-center transition-colors hover:bg-black/[0.02] dark:hover:bg-white/[0.03] sm:px-4 sm:py-6 lg:px-4 lg:py-4 xl:py-4"
            >
              <div className="mb-2.5 flex h-11 w-11 items-center justify-center rounded-full border-2 border-cvc-hero-accent bg-white shadow-[0_1px_4px_rgb(15_23_42_/_0.1)] dark:border-[#a8b892]/45 dark:bg-[#0a1028] dark:shadow-none sm:mb-3 sm:h-12 sm:w-12">
                <Icon className="h-5 w-5 text-cvc-hero-accent dark:text-[#8f9d78] sm:h-[1.35rem] sm:w-[1.35rem]" strokeWidth={1.5} aria-hidden />
              </div>
              <p className="text-[11px] font-bold uppercase leading-snug tracking-wide text-cvc-fg sm:text-xs dark:text-white">
                {title}
              </p>
              <p className="mt-1.5 max-w-[11rem] text-[10px] leading-relaxed text-cvc-fg-muted sm:text-[11px] lg:max-w-[12rem] xl:max-w-[13rem] dark:text-white/75">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroHonorBar() {
  return (
    <div className="relative flex w-full shrink-0 items-center justify-center gap-3 bg-cvc-cta-fill px-4 py-3.5 sm:py-4 lg:gap-2 lg:py-2">
      <Star className="h-2.5 w-2.5 shrink-0 fill-white text-white" strokeWidth={0} aria-hidden />
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs">
        Honor. Purpose. Transition. Together.
      </p>
      <Star className="h-2.5 w-2.5 shrink-0 fill-white text-white" strokeWidth={0} aria-hidden />
    </div>
  )
}
