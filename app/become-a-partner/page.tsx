import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Become a Partner | Combat Veterans to Careers',
  description: 'Partner with Combat Veterans to Careers.',
}

export default function BecomeAPartnerPage() {
  return (
    <WordPressPage
      slug="become-a-partner"
      fallbackTitle="Become a Partner"
      fallbackDescription="Partner with us to expand opportunities for combat veterans."
    />
  )
}
