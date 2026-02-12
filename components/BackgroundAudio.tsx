'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    __cvcBgAudio?: HTMLAudioElement
  }
}

export default function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const AUDIO_SRC = '/music/Lost%20and%20Found.mp3'

  const getAudio = () => {
    if (!window.__cvcBgAudio) {
      const audio = new Audio(AUDIO_SRC)
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = 0.5
      window.__cvcBgAudio = audio
    }
    if (!window.__cvcBgAudio.src.includes('Lost%20and%20Found.mp3')) {
      window.__cvcBgAudio.src = AUDIO_SRC
    }
    return window.__cvcBgAudio
  }

  useEffect(() => {
    const audio = getAudio()

    // Initialize control state from persistent audio instance.
    setIsMuted(audio.muted)
    setVolume(audio.volume)

    // Restore playback position after full page reloads.
    const savedTime = Number(window.localStorage.getItem('cvc-bg-audio-time') ?? '0')
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

    const tryPlay = () => {
      void audio.play().catch(() => {
        // Browser may block autoplay with sound until first interaction.
      })
    }

    tryPlay()

    const unlockAudio = () => {
      tryPlay()
    }

    const clearUnlockListeners = () => {
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }

    window.addEventListener('pointerdown', unlockAudio, { once: true })
    window.addEventListener('keydown', unlockAudio, { once: true })
    window.addEventListener('touchstart', unlockAudio, { once: true })
    audio.addEventListener('playing', clearUnlockListeners, { once: true })

    const saveTime = () => {
      window.localStorage.setItem('cvc-bg-audio-time', String(audio.currentTime))
    }

    audio.addEventListener('timeupdate', saveTime)
    window.addEventListener('beforeunload', saveTime)

    return () => {
      clearUnlockListeners()
      audio.removeEventListener('timeupdate', saveTime)
      window.removeEventListener('beforeunload', saveTime)
      audio.removeEventListener('playing', clearUnlockListeners)
      audio.removeEventListener('loadedmetadata', restoreTime)
    }
  }, [])

  useEffect(() => {
    const audio = getAudio()
    audio.volume = volume
    audio.muted = isMuted
  }, [isMuted, volume])

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-lg border border-gray-700 bg-[#0a0e27]/95 px-3 py-2 shadow-xl backdrop-blur-sm">
      <button
        type="button"
        onClick={() => {
          const audio = getAudio()
          if (audio.paused) {
            void audio.play().catch(() => {
              // Autoplay still blocked.
            })
          }
          setIsMuted((prev) => !prev)
        }}
        className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-[#0a0e27] hover:bg-gray-100"
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
        className="h-1 w-24 cursor-pointer accent-white"
        aria-label="Audio volume"
      />
    </div>
  )
}
