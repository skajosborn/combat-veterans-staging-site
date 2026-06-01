import type { LucideIcon } from 'lucide-react'
import { Compass, Handshake, Shield, Flag } from 'lucide-react'

export type HeroPillar = {
  title: string
  description: string
  Icon: LucideIcon
}

export const HERO_PILLARS: HeroPillar[] = [
  {
    title: 'FIND YOUR PATH',
    description: 'Discover career opportunities and next steps.',
    Icon: Compass,
  },
  {
    title: 'GET CONNECTED',
    description: 'Access mentors, resources, and a strong community.',
    Icon: Handshake,
  },
  {
    title: "YOU'VE GOT SUPPORT",
    description: '360° support for you and your family.',
    Icon: Shield,
  },
  {
    title: 'CONTINUE THE MISSION',
    description: 'Turn your experience into purpose.',
    Icon: Flag,
  },
]
