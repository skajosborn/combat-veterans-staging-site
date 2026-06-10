'use client'

import { useTypewriter } from '@/lib/useTypewriter'

const SEGMENTS = [
  { id: 'whats', text: "WHAT'S " },
  { id: 'next', text: 'NEXT?' },
  { id: 'service', text: 'SERVICE TO ' },
  { id: 'success', text: 'SUCCESS' },
] as const

const TYPEWRITER_OPTIONS = {
  charDelay: 72,
  segmentPause: 320,
  startDelay: 550,
} as const

function slice(counts: Record<string, number>, id: string, text: string) {
  return text.slice(0, counts[id] ?? 0)
}

function lineStarted(counts: Record<string, number>, ids: string[]) {
  return ids.some((id) => (counts[id] ?? 0) > 0)
}

function TypewriterCursor() {
  return (
    <span
      className="hero-typewriter-cursor ml-0.5 inline text-cvc-hero-accent motion-reduce:hidden"
      aria-hidden
    >
      |
    </span>
  )
}

function lineClass(started: boolean, large: boolean) {
  return [
    'm-0 min-h-[1.15em] font-black uppercase leading-[1.12] tracking-tight text-cvc-hero-fg transition-opacity duration-500 ease-out',
    large ? 'text-[1.625rem] xl:text-[2rem]' : 'text-[1.5rem] sm:text-[1.75rem]',
    started ? 'opacity-100' : 'opacity-0',
  ].join(' ')
}

export default function HeroTypewriterHeadlines({ large = false }: { large?: boolean }) {
  const { counts, activeSegmentId, isComplete } = useTypewriter(SEGMENTS, TYPEWRITER_OPTIONS)

  const showCursor = (id: string) => !isComplete && activeSegmentId === id
  const line1Started = lineStarted(counts, ['whats', 'next'])
  const line2Started = lineStarted(counts, ['service', 'success'])

  return (
    <div
      className={`flex flex-col text-left ${large ? 'gap-0.5 xl:gap-1' : 'gap-2 sm:gap-2.5'}`}
      aria-label="WHAT'S NEXT? SERVICE TO SUCCESS"
    >
      <p
        className={lineClass(line1Started, large)}
        style={{ fontStretch: 'condensed' }}
        aria-hidden="true"
      >
        {slice(counts, 'whats', "WHAT'S ")}
        {showCursor('whats') ? <TypewriterCursor /> : null}
        <span className="text-cvc-hero-accent">
          {slice(counts, 'next', 'NEXT?')}
          {showCursor('next') ? <TypewriterCursor /> : null}
        </span>
      </p>
      <p
        className={lineClass(line2Started, large)}
        style={{ fontStretch: 'condensed' }}
        aria-hidden="true"
      >
        {slice(counts, 'service', 'SERVICE TO ')}
        {showCursor('service') ? <TypewriterCursor /> : null}
        <span className="text-cvc-hero-accent">
          {slice(counts, 'success', 'SUCCESS')}
          {showCursor('success') ? <TypewriterCursor /> : null}
        </span>
      </p>
    </div>
  )
}
