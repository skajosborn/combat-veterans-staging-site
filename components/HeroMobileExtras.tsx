import type { ReactNode } from 'react'
import { Star, ArrowRight, Play } from 'lucide-react'
import Link from 'next/link'

export function HeroStarSeparator({ className = '' }: { className?: string }) {
  return (
    <div className={`relative my-2 w-full ${className}`} aria-hidden>
      <div className="h-px w-full bg-[#c4a574]/55" />
      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 px-2">
        <Star className="h-3 w-3 fill-[#c4a574] text-[#c4a574]" strokeWidth={0} />
      </div>
    </div>
  )
}

type HeroMobileCtaProps = {
  href: string
  children: ReactNode
  variant: 'primary' | 'secondary'
  icon?: 'arrow' | 'play'
  className?: string
}

export function HeroMobileCta({
  href,
  children,
  variant,
  icon = 'arrow',
  className = '',
}: HeroMobileCtaProps) {
  const isPrimary = variant === 'primary'
  const Icon = icon === 'play' ? Play : ArrowRight

  return (
    <Link
      href={href}
      className={
        (isPrimary
          ? 'flex w-full min-h-11 items-center justify-between gap-2 overflow-hidden rounded-md bg-[#5c6b3a] py-1.5 pl-4 pr-1.5 text-left shadow-[inset_0_1px_0_0_rgb(255_255_255_/_0.12),0_4px_14px_-4px_rgb(0_0_0_/_0.35)] transition-[filter] hover:brightness-110'
          : 'flex w-full min-h-11 items-center justify-between gap-2 overflow-hidden rounded-md border border-white/80 bg-transparent py-1.5 pl-4 pr-1.5 text-left transition-colors hover:border-white hover:bg-white/10') +
        (className ? ` ${className}` : '')
      }
    >
      <span className="text-xs font-bold uppercase tracking-wide text-white sm:text-sm">{children}</span>
      <span
        className={
          isPrimary
            ? 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-[#5c6b3a]'
            : 'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/80 bg-transparent text-white'
        }
        aria-hidden
      >
        <Icon
          className={icon === 'play' ? 'h-4 w-4 fill-current stroke-none' : 'h-5 w-5 stroke-[2.5]'}
        />
      </span>
    </Link>
  )
}

export function HeroLeadParagraph({ compact = false }: { compact?: boolean }) {
  return (
    <p
      className={
        compact
          ? 'max-w-md text-left text-[0.9375rem] font-medium leading-relaxed text-white/95 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.45)] sm:text-base'
          : 'max-w-lg text-left text-base font-medium leading-relaxed text-white/95 [text-shadow:0_1px_3px_rgb(0_0_0_/_0.45)] sm:text-lg sm:leading-relaxed'
      }
    >
      Our mission is to provide 360° of support and opportunities, and to enhance the quality of life for our post-911 combat veterans and their families.
    </p>
  )
}
