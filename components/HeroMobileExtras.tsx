import type { ReactNode } from 'react'
import { Star, ArrowRight } from 'lucide-react'
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
          ? 'text-left text-[0.8125rem] font-light italic leading-[1.45] text-cvc-hero-fg dark:text-cvc-hero-fg-muted xl:text-[0.875rem]'
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

/** Irregular terrain edge — short strip only, not a full-panel clip. */
const PILLARS_EDGE_CLIP =
  'polygon(0% 100%, 0% 35%, 4% 10%, 9% 55%, 14% 15%, 20% 70%, 26% 20%, 33% 80%, 40% 25%, 47% 65%, 54% 12%, 61% 75%, 68% 18%, 75% 60%, 82% 8%, 89% 72%, 95% 22%, 100% 50%, 100% 100%)'

export function HeroPillarsGrid({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`relative w-full ${compact ? 'px-0' : 'px-3 sm:px-4 lg:px-6 xl:px-8'}`}>
      <div className="cvc-hero-pillars-panel mx-auto max-w-7xl">
        <div
          className="relative h-2.5 w-full bg-[#252f1c] sm:h-3"
          style={{ clipPath: PILLARS_EDGE_CLIP }}
          aria-hidden
        />
        <div className="cvc-hero-pillars-military relative overflow-hidden border border-t-0 border-[var(--cvc-hero-pillars-border)] bg-gradient-to-b from-[#252f1c] to-[var(--cvc-hero-pillars)] shadow-[0_8px_32px_-8px_rgb(0_0_0_/_0.45)]">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
            style={{
              backgroundImage: "url('/camouflage.jpg')",
              backgroundSize: '300px',
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--cvc-hero-pillars-gold)] to-transparent opacity-70"
            aria-hidden
          />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {HERO_PILLARS.map(({ title, description, Icon }, index) => (
              <div
                key={title}
                className={`cvc-hero-pillar-cell group relative z-[1] flex items-start gap-3 ${
                  compact ? 'px-4 py-3.5 lg:px-5 lg:py-4' : 'px-4 py-4 sm:px-5 sm:py-5'
                } ${index % 2 === 1 ? 'sm:border-l sm:border-[var(--cvc-hero-pillars-divide)]/60' : ''} ${
                  index >= 2 ? 'sm:border-t sm:border-[var(--cvc-hero-pillars-divide)]/60 lg:border-t-0' : ''
                } ${
                  index > 0
                    ? 'lg:border-l-0 lg:before:absolute lg:before:bottom-[14%] lg:before:left-0 lg:before:top-[14%] lg:before:w-px lg:before:-skew-x-[10deg] lg:before:bg-[var(--cvc-hero-pillars-divide)]'
                    : ''
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center text-[var(--cvc-hero-pillars-gold)] sm:h-10 sm:w-10">
                  <Icon className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={1.25} aria-hidden />
                </div>
                <div className="min-w-0 flex-1 text-left">
                  <p className="text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-[var(--cvc-hero-pillars-gold)] sm:text-[11px]">
                    {title}
                  </p>
                  <p className="mt-1 text-[11px] font-medium leading-snug text-[var(--cvc-hero-pillars-muted)] sm:text-xs">
                    {description}
                  </p>
                  <div className="mt-2 flex justify-center sm:justify-start">
                    <Star
                      className="h-2 w-2 fill-[var(--cvc-hero-pillars-gold)] text-[var(--cvc-hero-pillars-gold)] opacity-75"
                      strokeWidth={0}
                      aria-hidden
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
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
