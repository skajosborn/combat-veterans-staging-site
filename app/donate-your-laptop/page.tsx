import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Donate Your Laptop | Combat Veterans to Careers',
  description: 'Donate your laptop to support Combat Veterans to Careers.',
}

export default function DonateYourLaptopPage() {
  return (
    <WordPressPage
      slug="donate-your-laptop"
      fallbackTitle="Donate Your Laptop"
      fallbackDescription="Support veterans by donating your laptop."
    />
  )
}
