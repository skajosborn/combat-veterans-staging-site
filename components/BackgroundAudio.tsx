'use client'

import { useEffect, useState } from 'react'

declare global {
  interface Window {
    __cvcBgAudio?: HTMLAudioElement
  }
}

export default function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(false)
  const [volume, setVolume] = useState(0.25)

  const getAudio = () => {
    if (!window.__cvcBgAudio) {
      const audio = new Audio('/music/Lost and Found.mp3')
      audio.loop = true
      audio.preload = 'auto'
      window.__cvcBgAudio = audio
    }
    return window.__cvcBgAudio
  }

  useEffect(() => {
    const audio = getAudio()
    setIsMuted(audio.muted)
    setVolume(audio.volume || 0.25)
  }, [])

  useEffect(() => {
    const audio = getAudio()

    audio.volume = volume
    audio.muted = isMuted
  }, [isMuted, volume])

  useEffect(() => {
    const audio = getAudio()
    const tryPlay = () => {
      void audio.play().catch(() => {
        // Browser may block autoplay with sound until first interaction.
      })
    }

    tryPlay()

    const unlockAudio = () => {
      tryPlay()
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }

    window.addEventListener('pointerdown', unlockAudio, { once: true })
    window.addEventListener('keydown', unlockAudio, { once: true })
    window.addEventListener('touchstart', unlockAudio, { once: true })

    return () => {
      window.removeEventListener('pointerdown', unlockAudio)
      window.removeEventListener('keydown', unlockAudio)
      window.removeEventListener('touchstart', unlockAudio)
    }
  }, [])

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex items-center gap-2 rounded-lg border border-gray-700 bg-[#0a0e27]/95 px-3 py-2 shadow-xl backdrop-blur-sm">
      <button
        type="button"
        onClick={() => setIsMuted((prev) => !prev)}
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
