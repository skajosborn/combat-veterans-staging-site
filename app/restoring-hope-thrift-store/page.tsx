import StoreLocationPage from '@/components/StoreLocationPage'

export const metadata = {
  title: 'Restoring Hope Thrift Store | Combat Veterans to Careers',
  description:
    'Visit Restoring Hope Thrift Store — donation-driven shopping that funds veteran programs and community connection.',
}

export default function RestoringHopeThriftStorePage() {
  return (
    <StoreLocationPage
      title="Restoring Hope Thrift Store"
      description="Our thrift store accepts gently used clothing, household goods, and furniture. Every purchase and donation helps fund programs for combat veterans and their families."
      imageSrc="/thriftstores.png"
      imageAlt="Restoring Hope Thrift Store"
    />
  )
}
