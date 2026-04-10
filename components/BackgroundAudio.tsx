'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    __cvcBgAudio?: HTMLAudioElement
  }
}

export default function BackgroundAudio() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const AUDIO_SRC = '/music/Whats%20Next.mp3'
  const AUDIO_TIME_KEY = 'cvc-bg-audio-time-whats-next'

  const getAudio = () => {
    if (!window.__cvcBgAudio) {
      const audio = new Audio(AUDIO_SRC)
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = 0.5
      window.__cvcBgAudio = audio
    }
    if (!window.__cvcBgAudio.src.includes('Whats%20Next.mp3')) {
      window.__cvcBgAudio.src = AUDIO_SRC
    }
    return window.__cvcBgAudio
  }

  useEffect(() => {
    const audio = getAudio()

    // Initialize control state from persistent audio instance.
    setIsPlaying(!audio.paused)
    setIsMuted(audio.muted)
    setVolume(audio.volume)

    // Restore playback position after full page reloads.
    const savedTime = Number(window.localStorage.getItem(AUDIO_TIME_KEY) ?? '0')
    const restoreTime = () => {
      if (Number.isFinite(savedTime) && savedTime > 0 && Number.isFinite(audio.duration) && savedTime < audio.duration) {
        audio.currentTime = savedTime
      }
    }

    if (Number.isFinite(audio.duration)) {
      restoreTime()
    } else {
      audio.addEventListener('loadedmetadata', restoreTime, { once: true })
    }

    const onPlay = () => setIsPlaying(true)
    const onPause = () => setIsPlaying(false)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    const saveTime = () => {
      window.localStorage.setItem(AUDIO_TIME_KEY, String(audio.currentTime))
    }

    audio.addEventListener('timeupdate', saveTime)
    window.addEventListener('beforeunload', saveTime)

    return () => {
      audio.removeEventListener('timeupdate', saveTime)
      window.removeEventListener('beforeunload', saveTime)
      audio.removeEventListener('loadedmetadata', restoreTime)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
    }
  }, [AUDIO_TIME_KEY])

  useEffect(() => {
    const audio = getAudio()
    audio.volume = volume
    audio.muted = isMuted
  }, [isMuted, volume])

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-lg border border-cvc-border bg-cvc-audio-bar px-3 py-2 shadow-xl backdrop-blur-sm">
      <button
        type="button"
        onClick={() => {
          const audio = getAudio()
          if (audio.paused) {
            void audio.play().catch(() => {
              // User interaction should allow playback.
            })
          } else {
            audio.pause()
          }
        }}
        className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-cvc-fg-on-light hover:bg-gray-100"
        aria-label={isPlaying ? 'Pause audio' : 'Play audio'}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>

      <button
        type="button"
        onClick={() => setIsMuted((prev) => !prev)}
        className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-cvc-fg-on-light hover:bg-gray-100"
        aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
      >
        {isMuted ? 'Unmute' : 'Mute'}
      </button>

      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(Number(e.target.value))}
        className="h-1 w-24 cursor-pointer accent-patriotic-navy"
        aria-label="Audio volume"
      />
    </div>
  )
}
