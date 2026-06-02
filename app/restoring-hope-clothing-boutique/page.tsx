import StoreLocationPage from '@/components/StoreLocationPage'
import { restoringHopeClothingBoutique } from '@/lib/restoringHopeStores'

export const metadata = {
  title: 'Restoring Hope Clothing Boutique | Combat Veterans to Careers',
  description:
    'Restoring Hope Clothing Boutique in Wildwood, FL — curated apparel supporting Combat Veterans to Careers.',
}

export default function RestoringHopeClothingBoutiquePage() {
  return <StoreLocationPage {...restoringHopeClothingBoutique} />
}
