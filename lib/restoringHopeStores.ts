/** Official Restoring Hope Thrift Store site (501(c)(3) benefiting Combat Veterans). */
export const RESTORING_HOPE_SITE_URL = 'https://restoringhopethrift.org/'

export type RestoringHopeStore = {
  slug: 'thrift' | 'boutique'
  title: string
  description: string
  imageSrc?: string
  imageAlt?: string
  address: string
  phone: string
  shopHours: string
  donationDropOffHours: string
  externalSiteUrl: string
}

export const restoringHopeThriftStore: RestoringHopeStore = {
  slug: 'thrift',
  title: 'Restoring Hope Thrift Store',
  description:
    'Our thrift store accepts gently used furniture, household goods, kitchenware, and more. Every purchase and donation helps fund programs for combat veterans and their families.',
  imageSrc: '/thriftstores.png',
  imageAlt: 'Restoring Hope Thrift Store',
  address: '400 E. Gulf Atlantic Hwy, Wildwood, FL 34785',
  phone: '(352) 748-1855',
  shopHours: 'Monday – Friday 9:30 AM – 4:30 PM · Saturday 10:00 AM – 2:00 PM',
  donationDropOffHours: 'Mon–Fri 10 AM – 3 PM · Sat 10:30 AM – 1:30 PM',
  externalSiteUrl: RESTORING_HOPE_SITE_URL,
}

export const restoringHopeClothingBoutique: RestoringHopeStore = {
  slug: 'boutique',
  title: 'Restoring Hope Clothing Boutique',
  description:
    'Our clothing boutique offers curated apparel, jewelry, and accessories. Clothing donations are accepted here — shop with purpose and support veteran transition programs.',
  address: '104 E Wonders St, Wildwood, FL 34785',
  phone: '(352) 461-0504',
  shopHours: 'Monday – Friday 9:30 AM – 4:30 PM · Saturday 10:00 AM – 3:00 PM',
  donationDropOffHours: 'Mon–Fri 10 AM – 3 PM · Sat 10:30 AM – 2:30 PM',
  externalSiteUrl: RESTORING_HOPE_SITE_URL,
}
