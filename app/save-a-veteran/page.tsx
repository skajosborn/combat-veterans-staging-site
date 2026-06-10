import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Save a Veteran | Combat Veterans to Careers',
  description: 'Support combat veterans through the Save a Veteran program.',
}

export default function SaveAVeteranPage() {
  return (
    <WordPressPage
      slug="save-a-veteran"
      fallbackTitle="Save a Veteran"
      fallbackDescription="Help provide transition support for combat veterans and their families."
    />
  )
}
