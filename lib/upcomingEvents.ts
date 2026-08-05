export type UpcomingEventDateParts = {
  month: string
  day: string
  year: string
}

export type UpcomingEventCard = {
  title: string
  dateLabel: string
  dateParts: UpcomingEventDateParts
  location?: string
  imageSrc: string
  href: string
}

/** Featured homepage / hero upcoming events (matches live CVC upcoming-events). */
export const upcomingEventCards: UpcomingEventCard[] = [
  {
    title: '2027 Gun Raffle',
    dateLabel: 'Every Friday in 2027',
    dateParts: { month: 'FRI', day: '—', year: '2027' },
    location: 'Weekly drawing all year',
    imageSrc: '/events/gun-raffle-2027.jpg',
    href: 'https://combatveteranstocareers.org/gun_raffle_2027/',
  },
  {
    title: '2027 Battle Buddy Clay Shoot',
    dateLabel: 'January 9, 2027',
    dateParts: { month: 'JAN', day: '09', year: '2027' },
    location: 'Blackjack Sporting Clays, Sumterville',
    imageSrc: '/events/clay-shoot-2027.jpg',
    href: 'https://combatveteranstocareers.org/battle-buddy-clay-shoot',
  },
  {
    title: '2027 Fashion Show',
    dateLabel: 'January 28, 2027',
    dateParts: { month: 'JAN', day: '28', year: '2027' },
    location: 'Restoring Hope Clothing Boutique, Wildwood',
    imageSrc: '/events/fashion-show-2027.jpg',
    href: 'https://combatveteranstocareers.org/fashionshow',
  },
]
