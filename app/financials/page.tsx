import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Financials | Combat Veterans to Careers',
  description: 'Financial transparency for Combat Veterans to Careers.',
}

export default function FinancialsPage() {
  return (
    <WordPressPage
      slug="financials"
      fallbackTitle="Financials"
      fallbackDescription="Financial information and reporting for Combat Veterans to Careers."
    />
  )
}
