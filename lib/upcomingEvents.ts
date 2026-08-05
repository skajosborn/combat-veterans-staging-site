export type UpcomingEventCard = {
  title: string
  dateLabel: string
  location?: string
  imageSrc: string
  href: string
  /** Footer bar color for homepage event cards */
  accent: 'olive' | 'navy' | 'burgundy'
}

export const eventAccentClasses: Record<UpcomingEventCard['accent'], string> = {
  olive: 'bg-[#5c6b3a]',
  navy: 'bg-[#0a111a]',
  burgundy: 'bg-[#7a1212]',
}

/** Featured homepage / hero upcoming events (matches live CVC upcoming-events). */
export const upcomingEventCards: UpcomingEventCard[] = [
  {
    title: '2027 Gun Raffle',
    dateLabel: 'Every Friday in 2027',
    imageSrc: '/events/gun-raffle-2027.jpg',
    href: 'https://combatveteranstocareers.org/gun_raffle_2027/',
    accent: 'olive',
  },
  {
    title: '2027 Battle Buddy Clay Shoot',
    dateLabel: 'January 9, 2027',
    location: 'Blackjack Sporting Clays, Sumterville',
    imageSrc: '/events/clay-shoot-2027.jpg',
    href: 'https://combatveteranstocareers.org/battle-buddy-clay-shoot',
    accent: 'navy',
  },
  {
    title: '2027 Fashion Show',
    dateLabel: 'January 28, 2027',
    location: '6:00 – 9:00 pm • Restoring Hope Clothing Boutique, Wildwood',
    imageSrc: '/events/fashion-show-2027.jpg',
    href: 'https://combatveteranstocareers.org/fashionshow',
    accent: 'burgundy',
  },
]
