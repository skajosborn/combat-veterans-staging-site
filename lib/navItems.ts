export type NavLinkItem = {
  type: 'link'
  label: string
  /** Compact uppercase label for desktop nav bar */
  navLabel?: string
  /** Two-line stacked label for desktop nav bar */
  navLabelLines?: [string, string]
  /** Shorter label for mid-width desktop nav (1024px–1535px) */
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
  navLabelLines?: [string, string]
  compactNavLabel?: string
  items: NavDropdownLink[]
}

export type NavItem = NavLinkItem | NavDropdownItem

export type NavQuickTabTone = 'red' | 'green' | 'blue'

export type NavQuickTabIcon = 'application' | 'calendar' | 'compass'

export type NavQuickTab = {
  label: string
  shortLabel: string
  subtitle: string
  href: string
  tone: NavQuickTabTone
  icon: NavQuickTabIcon
}

export const navQuickTabs: NavQuickTab[] = [
  {
    label: 'Veteran Application',
    shortLabel: 'Veteran App',
    subtitle: 'Start your next chapter',
    href: '/veteran-application',
    tone: 'red',
    icon: 'application',
  },
  {
    label: 'Operation Field Trip',
    shortLabel: 'Field Trip',
    subtitle: 'Upcoming events & details',
    href: '/operation-field-trip',
    tone: 'red',
    icon: 'calendar',
  },
  {
    label: "What's Next?",
    shortLabel: "What's Next",
    subtitle: 'Guidance for your future',
    href: '/whats-next',
    tone: 'red',
    icon: 'compass',
  },
]

export const ourProgramsLinks: NavDropdownLink[] = [
  { label: 'Operation Field Trip', href: '/operation-field-trip' },
  { label: 'Save a Veteran', href: '/save-a-veteran' },
  { label: "What's Next?", href: '/whats-next' },
  { label: 'Battle Buddy', href: '/battle-buddy' },
]

export const ourThriftStoresLinks: NavDropdownLink[] = [
  {
    label: 'Restoring Hope Thrift Store',
    href: 'https://restoringhopethrift.org/',
  },
  {
    label: 'Restoring Hope Clothing Boutique',
    href: 'https://restoringhopethrift.org/',
  },
]

export const ourTeamLinks: NavDropdownLink[] = [
  { label: 'CVC Staff', href: '/staff' },
  { label: 'Board Members', href: '/board-members' },
]

export const eventsLinks: NavDropdownLink[] = [
  { label: 'Upcoming Events', href: '/events#upcoming' },
  { label: 'Event Gallery', href: '/events#event-gallery' },
]

export const getInvolvedLinks: NavDropdownLink[] = [
  { label: 'Donate', href: 'https://combatveteranstocareers.org/donate/' },
  { label: 'Donate Your Car', href: 'https://combatveteranstocareers.org/car-donation/' },
  { label: 'Donate Your Laptop', href: 'https://combatveteranstocareers.org/laptop-donation/' },
  { label: 'Volunteer', href: 'https://combatveteranstocareers.org/volunteer/' },
  {
    label: 'Planned Giving',
    href: 'https://combatveteranstocareers.plannedgiving.org/index.php?r=1',
  },
  { label: 'Support a Veteran', href: 'https://combatveteranstocareers.org/support-a-veteran/' },
  { label: 'Become a Partner', href: 'https://combatveteranstocareers.org/become-a-partner/' },
]

export const aboutLinks: NavDropdownLink[] = [
  { label: 'Veterans Path', href: '/whats-next' },
  { label: 'History', href: '/about#history' },
  { label: 'Mission', href: '/mission' },
  { label: 'Get Involved', href: '/get-involved', children: [...getInvolvedLinks] },
  { label: 'Our Team', children: [...ourTeamLinks] },
  { label: 'Financials', href: '/financials' },
  { label: 'News Blog', href: '/news-blog' },
]

const allNavItems: NavItem[] = [
  {
    type: 'dropdown',
    label: 'CVC Programs',
    navLabelLines: ['OUR', 'PROGRAMS'],
    items: [...ourProgramsLinks],
  },
  { type: 'dropdown', label: 'About', navLabel: 'ABOUT', items: [...aboutLinks] },
  { type: 'dropdown', label: 'Events', navLabel: 'EVENTS', items: [...eventsLinks] },
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
