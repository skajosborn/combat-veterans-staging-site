import { Star } from 'lucide-react'
import type { ReactNode } from 'react'

type SectionTitleSize = 'display' | 'page' | 'subsection'
type SectionTitleVariant = 'default' | 'inverse'
/** default: title + optional top ornament + short underline. blueprint: double rules beside title + star row on full-width line. */
type SectionTitleLayout = 'default' | 'blueprint'

export type SectionTitleProps = {
  title: string
  as?: 'h1' | 'h2' | 'h3' | 'h4'
  size?: SectionTitleSize
  variant?: SectionTitleVariant
  align?: 'center' | 'left'
  /** Omit to auto: blueprint for display/page; simple title + short rule for subsection. */
  titleLayout?: SectionTitleLayout
  /**
   * Surface color behind the bottom stars (masks the rule). Defaults: light titles → bg-cvc-page; inverse → bg-black/50.
   * Set explicitly when the section uses another surface (e.g. bg-cvc-card, bg-cvc-page-elevated).
   */
  blueprintStarsBackdropClassName?: string
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
    blueprintTitleRowMb: string
    blueprintRuleMb: string
    blueprintStarSm: string
    blueprintStarLg: string
    blueprintStarGap: string
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
    blueprintTitleRowMb: 'mb-7 sm:mb-8',
    blueprintRuleMb: 'mb-8',
    blueprintStarSm: 'h-3 w-3',
    blueprintStarLg: 'h-4 w-4',
    blueprintStarGap: 'gap-2',
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
    blueprintTitleRowMb: 'mb-5 sm:mb-6',
    blueprintRuleMb: 'mb-6',
    blueprintStarSm: 'h-2.5 w-2.5',
    blueprintStarLg: 'h-3.5 w-3.5',
    blueprintStarGap: 'gap-1.5',
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
    blueprintTitleRowMb: 'mb-4 sm:mb-5',
    blueprintRuleMb: 'mb-5',
    blueprintStarSm: 'h-2 w-2',
    blueprintStarLg: 'h-3 w-3',
    blueprintStarGap: 'gap-1.5',
  },
}

/** Bright patriotic red for stars and dash bars (same in site light/dark). */
function starOrnamentAccentClass() {
  return 'text-patriotic-red'
}

function blueprintFlankLineClass(variant: SectionTitleVariant) {
  return variant === 'inverse'
    ? 'bg-white/45'
    : 'bg-[#5c4d40] dark:bg-[#8f7f6c]'
}

function BlueprintDoubleRule({
  variant,
  className = '',
}: {
  variant: SectionTitleVariant
  className?: string
}) {
  const line = blueprintFlankLineClass(variant)
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col justify-center gap-1 ${className}`}
      aria-hidden
    >
      <div className={`h-px w-full ${line}`} />
      <div className={`h-px w-full ${line}`} />
    </div>
  )
}

function BlueprintBottomRule({
  size,
  variant,
  backdropClassName,
}: {
  size: SectionTitleSize
  variant: SectionTitleVariant
  backdropClassName: string
}) {
  const s = sizeStyles[size]
  const ruleLine =
    variant === 'inverse' ? 'bg-white/35' : 'bg-[#d1d1d1] dark:bg-cvc-border-muted'
  const starAccent = starOrnamentAccentClass()

  return (
    <div className={`relative w-full ${s.blueprintRuleMb}`} aria-hidden>
      <div className={`h-px w-full ${ruleLine}`} />
      <div
        className={`absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2 items-center ${s.blueprintStarGap} px-2 ${backdropClassName}`}
      >
        <Star className={`${s.blueprintStarSm} shrink-0 ${starAccent}`} fill="currentColor" strokeWidth={0} />
        <Star className={`${s.blueprintStarLg} shrink-0 ${starAccent}`} fill="currentColor" strokeWidth={0} />
        <Star className={`${s.blueprintStarSm} shrink-0 ${starAccent}`} fill="currentColor" strokeWidth={0} />
      </div>
    </div>
  )
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
  const accent = starOrnamentAccentClass()
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
  titleLayout,
  blueprintStarsBackdropClassName,
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
  const effectiveTitleLayout =
    titleLayout ?? (size === 'subsection' ? 'default' : 'blueprint')
  const isBlueprint = effectiveTitleLayout === 'blueprint'
  const starBackdrop =
    blueprintStarsBackdropClassName ??
    (variant === 'inverse' ? 'bg-black/50' : 'bg-cvc-page')
  const topOrnament = isBlueprint ? false : (showTopOrnament ?? (size === 'display' || size === 'page'))
  const titleColor =
    variant === 'inverse'
      ? 'text-cvc-hero-fg'
      : 'text-cvc-section-title'
  const ruleLine =
    variant === 'inverse' ? 'bg-white/35' : 'bg-[#d1d1d1] dark:bg-cvc-border-muted'

  const alignCls = align === 'center' ? 'text-center' : 'text-left'
  const blueprintRowAlign = align === 'center' ? 'mx-auto' : 'mr-auto'

  const titleEl = (
    <Tag
      id={id}
      className={`${s.title} ${uppercaseTitle ? 'uppercase' : ''} ${titleColor} ${titleClassName} ${
        isBlueprint || !showBottomRule ? '!mb-0' : ''
      }`}
      style={{ fontStretch: uppercaseTitle ? 'condensed' : undefined }}
    >
      {title}
    </Tag>
  )

  return (
    <div className={`${alignCls} ${className}`}>
      {prefix != null ? <div className={topOrnament ? 'mb-4' : 'mb-3'}>{prefix}</div> : null}
      {isBlueprint ? (
        <>
          <div
            className={`flex w-full max-w-5xl items-center gap-3 sm:gap-5 md:gap-8 ${blueprintRowAlign} ${s.blueprintTitleRowMb}`}
          >
            <BlueprintDoubleRule variant={variant} />
            {titleEl}
            <BlueprintDoubleRule variant={variant} />
          </div>
          {showBottomRule ? (
            <BlueprintBottomRule size={size} variant={variant} backdropClassName={starBackdrop} />
          ) : null}
        </>
      ) : (
        <>
          {topOrnament ? <TitleOrnament size={size} variant={variant} align={align} /> : null}
          {titleEl}
          {showBottomRule ? (
            <div
              className={`h-px ${s.ruleMax} ${s.ruleMb} ${ruleLine} ${
                align === 'center' ? 'mx-auto' : 'mr-auto'
              }`}
            />
          ) : null}
        </>
      )}
      {subtitle != null ? (
        <div className={size === 'subsection' ? 'mb-4' : 'mb-5'}>{subtitle}</div>
      ) : null}
      {children}
    </div>
  )
}
