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
      className="hero-typewriter-cursor ml-0.5 inline text-[#d4e3b5] motion-reduce:hidden"
      aria-hidden
    >
      |
    </span>
  )
}

function lineClass(started: boolean) {
  return [
    'm-0 min-h-[1.15em] font-black uppercase leading-[1.12] tracking-tight text-white [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)] transition-opacity duration-500 ease-out',
    'text-[1.5rem] sm:text-[1.75rem] lg:text-[1.625rem] xl:text-[2rem]',
    started ? 'opacity-100' : 'opacity-0',
  ].join(' ')
}

export default function HeroTypewriterHeadlines() {
  const { counts, activeSegmentId, isComplete } = useTypewriter(SEGMENTS, TYPEWRITER_OPTIONS)

  const showCursor = (id: string) => !isComplete && activeSegmentId === id
  const line1Started = lineStarted(counts, ['whats', 'next'])
  const line2Started = lineStarted(counts, ['service', 'success'])

  return (
    <div
      data-hero-headlines
      className="flex flex-col gap-2 text-left sm:gap-2.5 lg:gap-0.5 xl:gap-1"
      aria-label="WHAT'S NEXT? SERVICE TO SUCCESS"
    >
      <p
        className={lineClass(line1Started)}
        style={{ fontStretch: 'condensed' }}
        aria-hidden="true"
      >
        {slice(counts, 'whats', "WHAT'S ")}
        {showCursor('whats') ? <TypewriterCursor /> : null}
        <span className="text-[#d4e3b5] [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)]">
          {slice(counts, 'next', 'NEXT?')}
          {showCursor('next') ? <TypewriterCursor /> : null}
        </span>
      </p>
      <p
        className={lineClass(line2Started)}
        style={{ fontStretch: 'condensed' }}
        aria-hidden="true"
      >
        {slice(counts, 'service', 'SERVICE TO ')}
        {showCursor('service') ? <TypewriterCursor /> : null}
        <span className="text-[#d4e3b5] [text-shadow:0_1px_3px_rgb(0_0_0_/_0.55)]">
          {slice(counts, 'success', 'SUCCESS')}
          {showCursor('success') ? <TypewriterCursor /> : null}
        </span>
      </p>
    </div>
  )
}
