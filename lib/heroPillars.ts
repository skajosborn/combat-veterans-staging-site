import type { LucideIcon } from 'lucide-react'
import { Compass, Handshake, Star, Users } from 'lucide-react'

export type HeroPillar = {
  title: string
  description: string
  Icon: LucideIcon
}

export const HERO_PILLARS: HeroPillar[] = [
  {
    title: 'Personalized Support',
    description: 'Guidance every step of the way.',
    Icon: Users,
  },
  {
    title: 'Career Navigation',
    description: 'Find your path. Build your future.',
    Icon: Compass,
  },
  {
    title: 'Community',
    description: 'Connect with those who understand.',
    Icon: Handshake,
  },
  {
    title: 'Proven Impact',
    description: 'Empowering veterans to succeed.',
    Icon: Star,
  },
]
