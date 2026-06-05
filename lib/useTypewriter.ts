import { useEffect, useMemo, useState } from 'react'

export type TypewriterSegment = {
  id: string
  text: string
}

type Options = {
  charDelay?: number
  segmentPause?: number
  startDelay?: number
}

function charDelayMs(charIndex: number, totalChars: number, baseDelay: number) {
  if (totalChars <= 1) return baseDelay
  const progress = charIndex / (totalChars - 1)
  const ease = 0.82 + 0.18 * Math.sin(progress * Math.PI)
  return Math.round(baseDelay * ease)
}

export function useTypewriter(
  segments: readonly TypewriterSegment[],
  { charDelay = 72, segmentPause = 320, startDelay = 550 }: Options = {}
) {
  const fullCounts = useMemo(
    () => Object.fromEntries(segments.map((segment) => [segment.id, segment.text.length])),
    [segments]
  )

  const [counts, setCounts] = useState<Record<string, number>>(() =>
    Object.fromEntries(segments.map((segment) => [segment.id, 0]))
  )
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setCounts(fullCounts)
      setActiveSegmentId(null)
      setIsComplete(true)
      return
    }

    let segmentIndex = 0
    let charIndex = 0
    let timer: ReturnType<typeof setTimeout>
    let cancelled = false

    const schedule = (delay: number, fn: () => void) => {
      timer = window.setTimeout(() => {
        if (!cancelled) fn()
      }, delay)
    }

    const tick = () => {
      const segment = segments[segmentIndex]
      if (!segment) {
        setActiveSegmentId(null)
        setIsComplete(true)
        return
      }

      setActiveSegmentId(segment.id)
      charIndex += 1
      setCounts((prev) => ({ ...prev, [segment.id]: charIndex }))

      if (charIndex >= segment.text.length) {
        setActiveSegmentId(null)
        segmentIndex += 1
        charIndex = 0
        schedule(segmentPause, tick)
        return
      }

      schedule(charDelayMs(charIndex, segment.text.length, charDelay), tick)
    }

    schedule(startDelay, tick)

    return () => {
      cancelled = true
      window.clearTimeout(timer)
    }
  }, [segments, fullCounts, charDelay, segmentPause, startDelay])

  return { counts, activeSegmentId, isComplete }
}
