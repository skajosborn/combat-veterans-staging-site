import { useEffect, useMemo, useRef, useState } from 'react'

export type TypewriterSegment = {
  id: string
  text: string
}

type Options = {
  charDelay?: number
  segmentPause?: number
  startDelay?: number
  enabled?: boolean
}

function charDelayMs(charIndex: number, totalChars: number, baseDelay: number) {
  if (totalChars <= 1) return baseDelay
  const progress = charIndex / (totalChars - 1)
  const ease = 0.82 + 0.18 * Math.sin(progress * Math.PI)
  return Math.round(baseDelay * ease)
}

export function useTypewriter(
  segments: readonly TypewriterSegment[],
  { charDelay = 72, segmentPause = 320, startDelay = 550, enabled = true }: Options = {}
) {
  const segmentsRef = useRef(segments)
  segmentsRef.current = segments

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
    if (!enabled) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setCounts(fullCounts)
      setActiveSegmentId(null)
      setIsComplete(true)
      return
    }

    setCounts(Object.fromEntries(segmentsRef.current.map((segment) => [segment.id, 0])))
    setActiveSegmentId(null)
    setIsComplete(false)

    let segmentIndex = 0
    let charIndex = 0
    let timer: number | undefined
    let cancelled = false

    const schedule = (delay: number, fn: () => void) => {
      timer = window.setTimeout(() => {
        if (!cancelled) fn()
      }, delay)
    }

    const tick = () => {
      const currentSegments = segmentsRef.current
      const segment = currentSegments[segmentIndex]
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
      if (timer !== undefined) {
        window.clearTimeout(timer)
      }
    }
  }, [enabled, fullCounts, charDelay, segmentPause, startDelay])

  return { counts, activeSegmentId, isComplete }
}
