import type { LucideIcon } from 'lucide-react'
import { Compass } from 'lucide-react'

export type HeroPillar = {
  title: string
  description: string
  Icon?: LucideIcon
  iconSrc?: string
}

export const HERO_PILLARS: HeroPillar[] = [
  {
    title: 'Personalized Support',
    description: 'Guidance every step of the way.',
    iconSrc: '/icons/user.png',
  },
  {
    title: 'Career Navigation',
    description: 'Find your path. Build your future.',
    Icon: Compass,
  },
  {
    title: 'Community',
    description: 'Connect with those who understand.',
    iconSrc: '/icons/group.png',
  },
  {
    title: 'Proven Impact',
    description: 'Empowering veterans to succeed.',
    iconSrc: '/icons/graph.png',
  },
]
