import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Staff | Combat Veterans to Careers',
  description: 'Meet the staff of Combat Veterans to Careers.',
}

export default function StaffPage() {
  return (
    <WordPressPage
      slug="staff"
      fallbackTitle="Staff"
      fallbackDescription="The team behind Combat Veterans to Careers."
    />
  )
}
