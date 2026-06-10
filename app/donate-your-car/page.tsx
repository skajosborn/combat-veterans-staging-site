import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Donate Your Car | Combat Veterans to Careers',
  description: 'Donate your vehicle to support Combat Veterans to Careers.',
}

export default function DonateYourCarPage() {
  return (
    <WordPressPage
      slug="donate-your-car"
      fallbackTitle="Donate Your Car"
      fallbackDescription="Support veterans by donating your vehicle."
    />
  )
}
