export type NavLinkItem = {
  type: 'link'
  label: string
  /** Compact uppercase label for desktop nav bar */
  navLabel?: string
  /** Two-line stacked label for desktop nav bar */
  navLabelLines?: [string, string]
  /** Shorter label for mid-width desktop nav (1280px–1535px) */
  compactNavLabel?: string
  href: string
}

export type NavDropdownLink = {
  label: string
  href?: string
  children?: NavDropdownLink[]
}

export type NavDropdownItem = {
  type: 'dropdown'
  label: string
  navLabel?: string
  compactNavLabel?: string
  items: NavDropdownLink[]
}

export type NavItem = NavLinkItem | NavDropdownItem

export const ourThriftStoresLinks: NavDropdownLink[] = [
  {
    label: 'Restoring Hope Thrift Store',
    href: '/restoring-hope-thrift-store',
  },
  {
    label: 'Restoring Hope Clothing Boutique',
    href: '/restoring-hope-clothing-boutique',
  },
]

export const ourTeamLinks: NavDropdownLink[] = [
  { label: 'Staff', href: '/staff' },
  { label: 'Board Members', href: '/board-members' },
]

export const aboutLinks: NavDropdownLink[] = [
  { label: 'Veterans Path', href: '/whats-next' },
  { label: 'History', href: '/about#history' },
  { label: 'Mission', href: '/mission' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Our Team', children: [...ourTeamLinks] },
  { label: 'Financials', href: '/financials' },
  { label: 'News Blog', href: '/news-blog' },
]

const allNavItems: NavItem[] = [
  { type: 'link', label: 'CVC Programs', navLabelLines: ['OUR', 'PROGRAMS'], href: '/#programs' },
  { type: 'link', label: 'Veteran Application', navLabel: 'VETERAN APPLICATION', compactNavLabel: 'VETERAN APP', href: '/veteran-application' },
  { type: 'link', label: 'Operation Field Trip', navLabelLines: ['OPERATION', 'FIELD TRIP'], href: '/operation-field-trip' },
  { type: 'link', label: "What's Next?", navLabel: "WHAT'S NEXT", href: '/whats-next' },
  { type: 'dropdown', label: 'About', navLabel: 'ABOUT', items: [...aboutLinks] },
  { type: 'link', label: 'Events', navLabel: 'EVENTS', href: '/events' },
  { type: 'link', label: 'Sponsors', navLabel: 'SPONSORS', href: '/sponsors' },
  { type: 'link', label: 'Contact', navLabel: 'CONTACT', href: '/#contact' },
  { type: 'dropdown', label: 'Our Thrift Stores', navLabel: 'THRIFT STORES', items: [...ourThriftStoresLinks] },
  { type: 'link', label: 'Donate', href: '/donate' },
]

export function getNavDisplayLabel(
  item: { label: string; navLabel?: string; compactNavLabel?: string },
  options?: { compact?: boolean }
): string {
  if (options?.compact && item.compactNavLabel) return item.compactNavLabel
  return item.navLabel ?? item.label
}

export function getNavItems(): NavItem[] {
  return allNavItems
}

export function getMainNavItems(): NavItem[] {
  return allNavItems.filter((item) => !(item.type === 'link' && item.label === 'Donate'))
}

export function getDropdownLinks(label: string): NavDropdownLink[] {
  const item = allNavItems.find((i) => i.type === 'dropdown' && i.label === label)
  return item?.type === 'dropdown' ? item.items : []
}

/** @deprecated Use ourThriftStoresLinks */
export const ourStoresLinks = ourThriftStoresLinks
