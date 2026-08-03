export type UpcomingEventCard = {
  title: string
  dateLabel: string
  location?: string
  imageSrc: string
  href: string
}

/** Featured homepage / hero upcoming events (matches live CVC upcoming-events). */
export const upcomingEventCards: UpcomingEventCard[] = [
  {
    title: '2027 Gun Raffle',
    dateLabel: 'Every Friday in 2027',
    imageSrc: '/events/gun-raffle-2027.jpg',
    href: 'https://combatveteranstocareers.org/gun_raffle_2027/',
  },
  {
    title: '2027 Battle Buddy Clay Shoot',
    dateLabel: 'January 9, 2027',
    location: 'Blackjack Sporting Clays, Sumterville',
    imageSrc: '/events/clay-shoot-2027.jpg',
    href: 'https://combatveteranstocareers.org/battle-buddy-clay-shoot',
  },
  {
    title: '2027 Fashion Show',
    dateLabel: 'January 28, 2027',
    location: '6:00 – 9:00 pm • Restoring Hope Clothing Boutique, Wildwood',
    imageSrc: '/events/fashion-show-2027.jpg',
    href: 'https://combatveteranstocareers.org/fashionshow',
  },
]
