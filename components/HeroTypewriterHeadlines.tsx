'use client'

import { useTypewriter } from '@/lib/useTypewriter'

const SEGMENTS = [
  { id: 'whats', text: "WHAT'S " },
  { id: 'next', text: 'NEXT?' },
  { id: 'service', text: 'SERVICE TO ' },
  { id: 'success', text: 'SUCCESS' },
] as const

const TYPEWRITER_OPTIONS = {
  charDelay: 55,
  segmentPause: 280,
  startDelay: 400,
} as const

function slice(counts: Record<string, number>, id: string, text: string) {
  return text.slice(0, counts[id] ?? 0)
}

function TypewriterCursor({ accent = false }: { accent?: boolean }) {
  return (
    <span
      className={`hero-typewriter-cursor ml-0.5 inline motion-reduce:hidden ${
        accent ? 'text-[#CE2029]' : 'text-[#111827]'
      }`}
      aria-hidden
    >
      |
    </span>
  )
}

const lineClass =
  'm-0 min-h-[1.1em] font-black uppercase leading-[1.05] tracking-tight text-[#111827] [text-shadow:0_1px_2px_rgb(255_255_255_/_0.45)] text-[2rem] sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.35rem]'

const accentClass = 'text-[#CE2029] [text-shadow:0_1px_2px_rgb(255_255_255_/_0.4)]'

export default function HeroTypewriterHeadlines() {
  const { counts, activeSegmentId, isComplete } = useTypewriter(SEGMENTS, TYPEWRITER_OPTIONS)

  const showCursor = (id: string) => !isComplete && activeSegmentId === id

  return (
    <div
      data-hero-headlines
      className="flex flex-col gap-1 text-left sm:gap-1.5 lg:gap-2"
      aria-label="WHAT'S NEXT? SERVICE TO SUCCESS"
    >
      <p className={lineClass} style={{ fontStretch: 'condensed' }} aria-hidden="true">
        {slice(counts, 'whats', "WHAT'S ")}
        {showCursor('whats') ? <TypewriterCursor /> : null}
        {slice(counts, 'next', 'NEXT?')}
        {showCursor('next') ? <TypewriterCursor /> : null}
      </p>
      <p className={lineClass} style={{ fontStretch: 'condensed' }} aria-hidden="true">
        <span className={accentClass}>
          {slice(counts, 'service', 'SERVICE TO ')}
          {showCursor('service') ? <TypewriterCursor accent /> : null}
          {slice(counts, 'success', 'SUCCESS')}
          {showCursor('success') ? <TypewriterCursor accent /> : null}
        </span>
      </p>
    </div>
  )
}
