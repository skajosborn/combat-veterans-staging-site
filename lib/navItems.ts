import { showVision } from '@/lib/siteConfig'

export type NavQuickTabIcon = 'application' | 'calendar' | 'compass'

export type NavQuickTab = {
  label: string
  shortLabel: string
  subtitle: string
  href: string
  tone: 'red'
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

export type NavLinkItem = {
  type: 'link'
  label: string
  href: string
}

export type NavDropdownLink = {
  label: string
  href: string
}

export type NavDropdownItem = {
  type: 'dropdown'
  label: string
  items: NavDropdownLink[]
}

export type NavItem = NavLinkItem | NavDropdownItem

export const ourStoresLinks: NavDropdownLink[] = [
  {
    label: 'Restoring Hope Thrift Store',
    href: '/restoring-hope-thrift-store',
  },
  {
    label: 'Restoring Hope Clothing Boutique',
    href: '/restoring-hope-clothing-boutique',
  },
]

export const aboutLinks: NavDropdownLink[] = [
  { label: 'Veterans Path', href: '/whats-next' },
  { label: 'History', href: '/about#history' },
  { label: 'Mission', href: '/mission' },
  { label: 'Get Involved', href: '/get-involved' },
  { label: 'Board Members', href: '/board-members' },
  { label: 'Financials', href: '/financials' },
  { label: 'News Blog', href: '/news-blog' },
]

const allNavItems: NavItem[] = [
  { type: 'link', label: 'Application', href: '/veteran-application' },
  { type: 'link', label: 'Programs', href: '/#programs' },
  { type: 'link', label: 'Vision', href: '/#vision' },
  { type: 'dropdown', label: 'About', items: [...aboutLinks] },
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

export function getDropdownLinks(label: string): NavDropdownLink[] {
  const item = allNavItems.find((i) => i.type === 'dropdown' && i.label === label)
  return item?.type === 'dropdown' ? item.items : []
}
