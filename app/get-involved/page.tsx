import Link from 'next/link'
import WordPressPage from '@/components/WordPressPage'

export const metadata = {
  title: 'Get Involved | Combat Veterans to Careers',
  description: 'Ways to support Combat Veterans to Careers through donations, applications, and partnerships.',
}

export default function GetInvolvedPage() {
  return (
    <WordPressPage
      slug="get-involved"
      fallbackTitle="Get Involved"
      fallbackDescription="There are many ways to stand with combat veterans and their families."
    >
      <ul className="mx-auto max-w-md space-y-3 text-center">
        <li>
          <Link
            href="/donate"
            className="inline-flex min-h-10 items-center justify-center rounded-lg bg-cvc-cta-fill px-6 text-sm font-semibold text-white shadow-md transition-[filter] hover:brightness-110"
          >
            Donate
          </Link>
        </li>
        <li>
          <Link
            href="/veteran-application"
            className="inline-flex min-h-10 items-center justify-center rounded-lg border border-cvc-border-strong px-6 text-sm font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
          >
            Veteran Application
          </Link>
        </li>
        <li>
          <Link
            href="/sponsors"
            className="inline-flex min-h-10 items-center justify-center rounded-lg border border-cvc-border-strong px-6 text-sm font-semibold text-cvc-fg transition-colors hover:bg-cvc-hover"
          >
            Become a Sponsor
          </Link>
        </li>
      </ul>
    </WordPressPage>
  )
}
