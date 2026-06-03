import type { ReactNode } from 'react'
import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'

type Props = {
  title: string
  description: string
  children?: ReactNode
}

export default function SimpleContentPage({ title, description, children }: Props) {
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
          {children ?? (
            <p className="text-center text-cvc-fg-muted">
              More information will be posted here soon.{' '}
              <Link href="/#contact" className="font-medium text-cvc-section-title underline-offset-2 hover:underline">
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
