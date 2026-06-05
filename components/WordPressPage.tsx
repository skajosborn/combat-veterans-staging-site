import type { ReactNode } from 'react'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import WordPressContent from '@/components/WordPressContent'
import { getPageBySlug, stripHtml } from '@/lib/wordpress'

type Props = {
  slug: string
  fallbackTitle: string
  fallbackDescription: string
  children?: ReactNode
}

export default async function WordPressPage({
  slug,
  fallbackTitle,
  fallbackDescription,
  children,
}: Props) {
  const page = await getPageBySlug(slug)
  const title = page ? stripHtml(page.title.rendered) : fallbackTitle
  const description = page?.excerpt.rendered
    ? stripHtml(page.excerpt.rendered)
    : fallbackDescription
  const content = page?.content.rendered ?? ''

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title={title}
            size="page"
            align="center"
            blueprintStarsBackdropClassName="bg-cvc-card"
            subtitle={<p className="leading-relaxed text-cvc-fg-muted">{description}</p>}
          />
          {content.trim() ? (
            <WordPressContent html={content} className="mt-8" />
          ) : children ? (
            <div className="mt-8">{children}</div>
          ) : (
            <p className="mt-8 text-center text-cvc-fg-muted">
              More information will be posted here soon.{' '}
              <Link
                href="/#contact"
                className="font-medium text-cvc-section-title underline-offset-2 hover:underline"
              >
                Contact us
              </Link>{' '}
              in the meantime.
            </p>
          )}
        </article>
      </section>
    </main>
  )
}
