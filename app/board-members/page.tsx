import Link from 'next/link'
import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Board Members | Combat Veterans to Careers',
  description: 'Meet the board of Combat Veterans to Careers.',
}

export default function BoardMembersPage() {
  return (
    <WordPressPage
      slug="board-members"
      fallbackTitle="Board Members"
      fallbackDescription="Leadership committed to serving combat veterans and their families."
    />
  )
}
