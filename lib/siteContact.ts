export const CVC_PHONE_DISPLAY = '352-775-4008'
export const CVC_PHONE_HREF = 'tel:+13527754008'

export type SocialLink = {
  label: string
  href: string
}

/** Official / known CVC social profiles — update hrefs here as needed. */
export const socialLinks: SocialLink[] = [
  { label: 'Facebook', href: 'https://www.facebook.com/combatveteranstocareers' },
  { label: 'X (Twitter)', href: 'https://twitter.com/CVCToCareers' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/combat-veterans-to-careers' },
  { label: 'YouTube', href: 'https://www.youtube.com/@CombatVeteranstoCareers' },
  { label: 'Instagram', href: 'https://www.instagram.com/combatveteranstocareers' },
]
