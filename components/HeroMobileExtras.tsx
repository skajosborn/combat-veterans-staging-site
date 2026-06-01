import type { ReactNode } from 'react'
import { Star, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import { HERO_PILLARS } from '@/lib/heroPillars'

const HERO_ACCENT = '#a8b892'

export function HeroStarSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`relative my-3 w-full sm:my-4 ${className}`} aria-hidden>
      <div className="h-px w-full bg-white/35" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 px-2">
        <Star className="h-3 w-3 fill-[#a8b892] text-[#a8b892]" strokeWidth={0} />
      </div>
    </div>
  )
}

type HeroMobileCtaProps = {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
}

export function HeroMobileCta({ href, children, variant }: HeroMobileCtaProps) {
  const isPrimary = variant === 'primary'
  return (
    <Link
      href={href}
      className={
        isPrimary
          ? 'flex w-full min-h-12 items-stretch overflow-hidden rounded-lg bg-cvc-cta-fill text-left shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.15),0_4px_14px_-4px_rgb(0_0_0_/_0.45)] ring-1 ring-white/10 transition-[filter] hover:brightness-110'
          : 'flex w-full min-h-12 items-stretch overflow-hidden rounded-lg border border-white/50 bg-slate-950/35 text-left backdrop-blur-sm transition-colors hover:border-white/70 hover:bg-slate-950/50'
      }
    >
      <span
        className={
          isPrimary
            ? 'flex w-11 shrink-0 items-center justify-center bg-[#2d3a22]'
            : 'flex w-11 shrink-0 items-center justify-center bg-slate-950/60'
        }
        aria-hidden
      >
        <ChevronRight className="h-5 w-5 text-white" strokeWidth={2.5} />
      </span>
      <span className="flex flex-1 items-center px-3 text-sm font-bold uppercase tracking-wide text-white">
        {children}
      </span>
    </Link>
  )
}

export function HeroLeadParagraph() {
  return (
    <p className="text-left text-[0.9375rem] font-light italic leading-[1.65] text-cvc-hero-fg-muted sm:text-base sm:leading-relaxed">
      As you step from one chapter to the next, we stand beside you—providing{' '}
      <strong className="font-semibold not-italic" style={{ color: HERO_ACCENT }}>
        360°
      </strong>{' '}
      of support and guidance to help you find your footing and discover the next stage of your journey.
    </p>
  )
}

export function HeroPillarsGrid() {
  return (
    <div className="relative z-20 w-full border-t border-white/10 bg-patriotic-navy">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 divide-x divide-y divide-white/10 lg:grid-cols-4 lg:divide-y-0">
          {HERO_PILLARS.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="flex flex-col items-center px-3 py-6 text-center sm:px-4 sm:py-7 lg:px-6 lg:py-8"
            >
              <Icon
                className="mb-3 h-8 w-8 text-[#a8b892] sm:h-9 sm:w-9 lg:mb-4 lg:h-10 lg:w-10"
                strokeWidth={1.5}
                aria-hidden
              />
              <p className="text-[11px] font-bold uppercase leading-snug tracking-wide text-white sm:text-xs lg:text-sm">
                {title}
              </p>
              <p className="mt-2 max-w-[11rem] text-[10px] leading-relaxed text-white/80 sm:text-[11px] lg:mt-3 lg:max-w-[14rem] lg:text-xs">
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
    <div className="relative z-20 flex w-full items-center justify-center gap-3 bg-cvc-cta-fill px-4 py-4 sm:py-5 lg:py-5">
      <Star className="h-2.5 w-2.5 shrink-0 fill-white text-white" strokeWidth={0} aria-hidden />
      <p className="text-center text-[11px] font-bold uppercase tracking-[0.12em] text-white sm:text-xs">
        Honor. Purpose. Transition. Together.
      </p>
      <Star className="h-2.5 w-2.5 shrink-0 fill-white text-white" strokeWidth={0} aria-hidden />
    </div>
  )
}
