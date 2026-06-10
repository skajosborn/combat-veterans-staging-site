import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Support a Veteran | Combat Veterans to Careers',
  description: 'Support a veteran through Combat Veterans to Careers.',
}

export default function SupportAVeteranPage() {
  return (
    <WordPressPage
      slug="support-a-veteran"
      fallbackTitle="Support a Veteran"
      fallbackDescription="Help a veteran transition to a successful civilian career."
    />
  )
}
