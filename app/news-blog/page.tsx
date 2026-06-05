import Link from 'next/link'
import SectionTitle from '@/components/SectionTitle'
import WordPressContent from '@/components/WordPressContent'
import { getPosts, stripHtml } from '@/lib/wordpress'

export const metadata = {
  title: 'News Blog | Combat Veterans to Careers',
  description: 'News and updates from Combat Veterans to Careers.',
}

function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
}

export default async function NewsBlogPage() {
  const posts = await getPosts()

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-28">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <article className="rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title="News Blog"
            size="page"
            align="center"
            blueprintStarsBackdropClassName="bg-cvc-card"
            subtitle={
              <p className="leading-relaxed text-cvc-fg-muted">
                Stories, updates, and news from Combat Veterans to Careers.
              </p>
            }
          />

          {posts.length > 0 ? (
            <div className="mt-10 space-y-8">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="rounded-xl border border-cvc-border-muted bg-cvc-card-inner p-6"
                >
                  <p className="mb-2 text-sm font-medium text-cvc-fg-subtle">
                    {formatPostDate(post.date)}
                  </p>
                  <h2 className="text-2xl font-semibold text-cvc-fg">
                    {stripHtml(post.title.rendered)}
                  </h2>
                  {post.excerpt.rendered.trim() ? (
                    <p className="mt-3 leading-relaxed text-cvc-fg-muted">
                      {stripHtml(post.excerpt.rendered)}
                    </p>
                  ) : null}
                  <WordPressContent html={post.content.rendered} className="mt-4" />
                </article>
              ))}
            </div>
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
