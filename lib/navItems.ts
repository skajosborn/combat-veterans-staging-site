import { showVision } from '@/lib/siteConfig'

export type NavLinkItem = {
  type: 'link'
  label: string
  href: string
}

export type NavDropdownItem = {
  type: 'dropdown'
  label: string
  items: { label: string; href: string }[]
}

export type NavItem = NavLinkItem | NavDropdownItem

export const ourStoresLinks = [
  {
    label: 'Restoring Hope Thrift Store',
    href: '/restoring-hope-thrift-store',
  },
  {
    label: 'Restoring Hope Clothing Boutique',
    href: '/restoring-hope-clothing-boutique',
  },
] as const

const allNavItems: NavItem[] = [
  { type: 'link', label: 'Application', href: '/veteran-application' },
  { type: 'link', label: 'Programs', href: '/#programs' },
  { type: 'link', label: 'Vision', href: '/#vision' },
  { type: 'link', label: 'About', href: '/about' },
  { type: 'link', label: 'Events', href: '/events' },
  { type: 'dropdown', label: 'Our Stores', items: [...ourStoresLinks] },
  { type: 'link', label: 'Sponsors', href: '/sponsors' },
  { type: 'link', label: 'Contact', href: '/#contact' },
  { type: 'link', label: 'Donate', href: '/donate' },
]

export function getNavItems(): NavItem[] {
  if (showVision) return allNavItems
  return allNavItems.filter((item) => item.type !== 'link' || item.label !== 'Vision')
}
