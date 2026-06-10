import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Battle Buddy | Combat Veterans to Careers',
  description: 'Learn about the Battle Buddy program at Combat Veterans to Careers.',
}

export default function BattleBuddyPage() {
  return (
    <WordPressPage
      slug="battle-buddy"
      fallbackTitle="Battle Buddy"
      fallbackDescription="Connect with fellow veterans through therapeutic recreation and community support."
    />
  )
}
