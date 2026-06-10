import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Volunteer | Combat Veterans to Careers',
  description: 'Volunteer with Combat Veterans to Careers.',
}

export default function VolunteerPage() {
  return (
    <WordPressPage
      slug="volunteer"
      fallbackTitle="Volunteer"
      fallbackDescription="Join our volunteer community and support veterans."
    />
  )
}
