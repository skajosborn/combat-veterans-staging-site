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

function countsFromProgress(segments: readonly TypewriterSegment[], progress: number) {
  const counts: Record<string, number> = {}
  let remaining = progress
  for (const segment of segments) {
    const take = Math.max(0, Math.min(segment.text.length, remaining))
    counts[segment.id] = take
    remaining -= take
  }
  return counts
}

function activeIdFromProgress(segments: readonly TypewriterSegment[], progress: number, complete: boolean) {
  if (complete || progress <= 0) return null
  let seen = 0
  for (const segment of segments) {
    const next = seen + segment.text.length
    if (progress <= next) return segment.id
    seen = next
  }
  return null
}

/**
 * Types through segment texts one character at a time.
 * Progress is a single integer so remounts cannot leave mixed empty/complete state.
 */
export function useTypewriter(
  segments: readonly TypewriterSegment[],
  { charDelay = 72, segmentPause = 320, startDelay = 550, enabled = true }: Options = {}
) {
  const segmentsKey = useMemo(
    () => segments.map((segment) => `${segment.id}\0${segment.text}`).join('\n'),
    [segments]
  )

  const parsedSegments = useMemo(
    () =>
      segmentsKey.split('\n').map((entry) => {
        const splitAt = entry.indexOf('\0')
        return { id: entry.slice(0, splitAt), text: entry.slice(splitAt + 1) }
      }),
    [segmentsKey]
  )

  const totalChars = useMemo(
    () => parsedSegments.reduce((sum, segment) => sum + segment.text.length, 0),
    [parsedSegments]
  )

  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const runIdRef = useRef(0)

  useEffect(() => {
    if (!enabled) return

    const currentSegments = parsedSegments
    const total = currentSegments.reduce((sum, segment) => sum + segment.text.length, 0)
    const runId = ++runIdRef.current
    const isActive = () => runIdRef.current === runId

    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      if (!isActive()) return
      setProgress(total)
      setIsComplete(true)
      return
    }

    setProgress(0)
    setIsComplete(false)

    let segmentIndex = 0
    let charIndex = 0
    let typed = 0
    let timer: number | undefined

    const clear = () => {
      if (timer !== undefined) {
        window.clearTimeout(timer)
        timer = undefined
      }
    }

    const schedule = (delay: number, fn: () => void) => {
      clear()
      timer = window.setTimeout(() => {
        if (!isActive()) return
        fn()
      }, delay)
    }

    const tick = () => {
      if (!isActive()) return

      const segment = currentSegments[segmentIndex]
      if (!segment) {
        setIsComplete(true)
        return
      }

      charIndex += 1
      typed += 1
      setProgress(typed)

      if (charIndex >= segment.text.length) {
        segmentIndex += 1
        charIndex = 0
        if (segmentIndex >= currentSegments.length) {
          setIsComplete(true)
          return
        }
        schedule(segmentPause, tick)
        return
      }

      schedule(charDelayMs(charIndex, segment.text.length, charDelay), tick)
    }

    schedule(startDelay, tick)

    return () => {
      if (runIdRef.current === runId) runIdRef.current += 1
      clear()
    }
  }, [enabled, parsedSegments, charDelay, segmentPause, startDelay])

  const counts = useMemo(
    () => countsFromProgress(parsedSegments, isComplete ? totalChars : progress),
    [parsedSegments, progress, isComplete, totalChars]
  )

  const activeSegmentId = useMemo(
    () => activeIdFromProgress(parsedSegments, progress, isComplete),
    [parsedSegments, progress, isComplete]
  )

  return { counts, activeSegmentId, isComplete }
}
