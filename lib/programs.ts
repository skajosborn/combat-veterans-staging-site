export type Program = {
  title: string
  description: string
  image: string
  href: string
}

export const programs: Program[] = [
  {
    title: 'Operation Field Trip',
    description:
      'A healing mission by veterans, for veterans and first responders—ketamine-assisted therapy with integrative counseling for PTSD, depression, and anxiety.',
    image: '/OFT-Heading.png',
    href: '/operation-field-trip',
  },
  {
    title: "What's Next",
    description:
      'A veteran-centered wellness plan that helps service members keep moving forward into education, employment, housing, and wellness.',
    image: '/WN-1.jpg',
    href: '/whats-next',
  },
  {
    title: 'Save a Veteran',
    description:
      'Support local combat veterans and their families through giving that funds life-changing programs and care.',
    image: '/SAV.jpg',
    href: '/donate',
  },
]
