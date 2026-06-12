'use client'

const HERO_VIDEO_SRC = '/hero-video-3.mp4'

type Props = {
  className?: string
  variant?: 'card' | 'backdrop'
  objectPosition?: string
}

export default function HeroVideo({
  className = '',
  variant = 'card',
  objectPosition = '68% 22%',
}: Props) {
  const videoEl = (
    <video
      className={
        variant === 'backdrop'
          ? 'block h-full w-full object-cover'
          : 'block aspect-video w-full object-cover'
      }
      style={{ objectPosition }}
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      aria-hidden={variant === 'backdrop'}
      aria-label={variant === 'backdrop' ? undefined : 'Combat Veterans to Careers hero video'}
    >
      <source src={HERO_VIDEO_SRC} type="video/mp4" />
    </video>
  )

  if (variant === 'backdrop') {
    return (
      <div className={`pointer-events-none overflow-hidden ${className}`.trim()} aria-hidden>
        {videoEl}
      </div>
    )
  }

  return (
    <div
      className={`overflow-hidden rounded-xl border border-cvc-border bg-cvc-card shadow-[0_8px_30px_rgb(15_23_42_/_0.12)] dark:shadow-[0_12px_40px_rgb(0_0_0_/_0.45)] ${className}`.trim()}
    >
      {videoEl}
    </div>
  )
}
