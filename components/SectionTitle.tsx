import { Star } from 'lucide-react'
import type { ReactNode } from 'react'

type SectionTitleSize = 'display' | 'page' | 'subsection'
type SectionTitleVariant = 'default' | 'inverse'

export type SectionTitleProps = {
  title: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: SectionTitleSize
  variant?: SectionTitleVariant
  align?: 'center' | 'left'
  /** When true, show top star ornament (display/page use true by default) */
  showTopOrnament?: boolean
  /** When false, omit the line under the title */
  showBottomRule?: boolean
  /** Default true (military block caps); false for names or sentence titles */
  uppercaseTitle?: boolean
  className?: string
  titleClassName?: string
  id?: string
  /** Renders above the star ornament (e.g. eyebrow label) */
  prefix?: ReactNode
  subtitle?: ReactNode
  children?: ReactNode
}

const sizeStyles: Record<
  SectionTitleSize,
  {
    ornamentMb: string
    ornamentMax: string
    smallStar: string
    largeStar: string
    gap: string
    title: string
    ruleMb: string
    ruleMax: string
  }
> = {
  display: {
    ornamentMb: 'mb-8',
    ornamentMax: 'max-w-2xl',
    smallStar: 'h-3 w-3',
    largeStar: 'h-5 w-5',
    gap: 'gap-2 px-3',
    title:
      'mb-8 text-4xl font-black tracking-tight sm:text-5xl md:text-6xl md:tracking-tighter',
    ruleMb: 'mb-8',
    ruleMax: 'max-w-md',
  },
  page: {
    ornamentMb: 'mb-6',
    ornamentMax: 'max-w-xl',
    smallStar: 'h-2.5 w-2.5',
    largeStar: 'h-4 w-4',
    gap: 'gap-1.5 px-2.5',
    title:
      'mb-6 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl lg:tracking-tighter',
    ruleMb: 'mb-6',
    ruleMax: 'max-w-sm',
  },
  subsection: {
    ornamentMb: 'mb-4',
    ornamentMax: 'max-w-lg',
    smallStar: 'h-2 w-2',
    largeStar: 'h-3.5 w-3.5',
    gap: 'gap-1.5 px-2',
    title:
      'mb-4 text-xl font-black tracking-tight sm:text-2xl sm:tracking-tight md:text-3xl',
    ruleMb: 'mb-6',
    ruleMax: 'max-w-xs',
  },
}

function TitleOrnament({
  size,
  variant,
  align,
}: {
  size: SectionTitleSize
  variant: SectionTitleVariant
  align: 'center' | 'left'
}) {
  const s = sizeStyles[size]
  const accent = variant === 'inverse' ? 'text-patriotic-red' : 'text-[#601010] dark:text-patriotic-red'
  const line =
    variant === 'inverse' ? 'bg-white/35' : 'bg-[#d1d1d1] dark:bg-cvc-border-muted'

  return (
    <div
      className={`flex w-full items-center ${s.ornamentMb} ${s.ornamentMax} ${align === 'center' ? 'mx-auto' : ''}`}
      aria-hidden
    >
      <div className={`h-px min-w-0 flex-1 ${line}`} />
      <div className={`flex shrink-0 items-center ${s.gap} ${accent}`}>
        <Star className={s.smallStar} fill="currentColor" strokeWidth={0} />
        <span className="h-0.5 w-3 shrink-0 rounded-full bg-current sm:w-3.5" />
        <Star className={s.largeStar} fill="currentColor" strokeWidth={0} />
        <span className="h-0.5 w-3 shrink-0 rounded-full bg-current sm:w-3.5" />
        <Star className={s.smallStar} fill="currentColor" strokeWidth={0} />
      </div>
      <div className={`h-px min-w-0 flex-1 ${line}`} />
    </div>
  )
}

export default function SectionTitle({
  title,
  as: Tag = 'h2',
  size = 'display',
  variant = 'default',
  align = 'center',
  showTopOrnament,
  showBottomRule = true,
  uppercaseTitle = true,
  className = '',
  titleClassName = '',
  id,
  prefix,
  subtitle,
  children,
}: SectionTitleProps) {
  const s = sizeStyles[size]
  const topOrnament = showTopOrnament ?? (size === 'display' || size === 'page')
  const titleColor =
    variant === 'inverse'
      ? 'text-cvc-hero-fg'
      : 'text-cvc-section-title'
  const ruleLine =
    variant === 'inverse' ? 'bg-white/35' : 'bg-[#d1d1d1] dark:bg-cvc-border-muted'

  const alignCls = align === 'center' ? 'text-center' : 'text-left'

  return (
    <div className={`${alignCls} ${className}`}>
      {prefix != null ? <div className={topOrnament ? 'mb-4' : 'mb-3'}>{prefix}</div> : null}
      {topOrnament ? <TitleOrnament size={size} variant={variant} align={align} /> : null}
      <Tag
        id={id}
        className={`${s.title} ${uppercaseTitle ? 'uppercase' : ''} ${titleColor} ${titleClassName} ${
          !showBottomRule ? '!mb-0' : ''
        }`}
        style={{ fontStretch: uppercaseTitle ? 'condensed' : undefined }}
      >
        {title}
      </Tag>
      {showBottomRule ? (
        <div
          className={`h-px ${s.ruleMax} ${s.ruleMb} ${ruleLine} ${
            align === 'center' ? 'mx-auto' : 'mr-auto'
          }`}
        />
      ) : null}
      {subtitle != null ? (
        <div className={size === 'subsection' ? 'mb-4' : 'mb-5'}>{subtitle}</div>
      ) : null}
      {children}
    </div>
  )
}
