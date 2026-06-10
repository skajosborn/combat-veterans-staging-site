import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Planned Giving | Combat Veterans to Careers',
  description: 'Learn about planned giving opportunities with Combat Veterans to Careers.',
}

export default function PlannedGivingPage() {
  return (
    <WordPressPage
      slug="planned-giving"
      fallbackTitle="Planned Giving"
      fallbackDescription="Leave a lasting legacy supporting veterans through planned giving."
    />
  )
}
