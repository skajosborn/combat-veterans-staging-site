export type EventItem = {
  slug: string
  title: string
  embedSrc?: string
  imageSrc?: string
  teaser: string
  month: string
  dateLabel: string
  externalUrl?: string
}

export const events: EventItem[] = [
  {
    slug: '2026-save-a-veteran-reverse-raffle',
    title: '2026 Save A Veteran Reverse Raffle',
    imageSrc: '/Reverse-Raffle-Flyer-2026.jpg',
    teaser:
      'Grand Prize: $10,000 cash. Only 300 tickets sold. $120 ticket includes heavy hors d’oeuvres, entertainment for two, and a chance to win.',
    month: 'April',
    dateLabel: 'April 13, 2026 · 6-9 PM',
    externalUrl: 'https://combatveteranstocareers.org/2026-reverse-raffle/',
  },
  {
    slug: '7th-annual-battle-buddy-golf-tournament',
    title: '7th Annual Battle Buddy Golf Tournament',
    embedSrc: 'https://www.youtube.com/embed/4FLzvQxT9-8',
    teaser:
      'A signature CVC community event bringing supporters together for veteran-focused impact.',
    month: 'February',
    dateLabel: 'Date to be announced',
  },
  {
    slug: '3rd-annual-battle-buddy-clay-shoot',
    title: '3rd Annual Battle Buddy Clay Shoot',
    embedSrc: 'https://www.youtube.com/embed/sMGX71mjLWs',
    teaser:
      'An action-focused annual gathering that supports programs for veterans and their families.',
    month: 'March',
    dateLabel: 'Date to be announced',
  },
  {
    slug: 'restoring-hope-fashion-show',
    title: 'Restoring Hope Fashion Show',
    embedSrc: 'https://www.youtube.com/embed/c5FIJzgGJTc',
    teaser:
      'A mission-driven event spotlighting community support and restoration for veterans.',
    month: 'April',
    dateLabel: 'Date to be announced',
  },
  {
    slug: 'harley-motorcycle-raffle',
    title: 'Harley Motorcycle Raffle',
    embedSrc: 'https://www.youtube.com/embed/Dk4y7DIaRT8',
    teaser:
      'A high-energy fundraiser to generate direct support for CVC veteran initiatives.',
    month: 'May',
    dateLabel: 'Date to be announced',
  },
  {
    slug: 'outdoor-adventure-raffle',
    title: 'Outdoor Adventure Raffle',
    embedSrc: 'https://www.youtube.com/embed/shWz0nhKLnE',
    teaser:
      'A community raffle experience designed to fuel long-term veteran transition services.',
    month: 'June',
    dateLabel: 'Date to be announced',
  },
]
