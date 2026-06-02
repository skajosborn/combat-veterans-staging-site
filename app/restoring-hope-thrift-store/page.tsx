import StoreLocationPage from '@/components/StoreLocationPage'
import { restoringHopeThriftStore } from '@/lib/restoringHopeStores'

export const metadata = {
  title: 'Restoring Hope Thrift Store | Combat Veterans to Careers',
  description:
    'Visit Restoring Hope Thrift Store in Wildwood, FL — donation-driven shopping that funds veteran programs.',
}

export default function RestoringHopeThriftStorePage() {
  return <StoreLocationPage {...restoringHopeThriftStore} />
}
