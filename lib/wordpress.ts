import { getWordPressApiUrl, getWordPressUrl } from '@/lib/wordpressConfig'

type WordPressRenderedField = {
  rendered: string
}

export type WordPressPage = {
  id: number
  slug: string
  link: string
  title: WordPressRenderedField
  content: WordPressRenderedField
  excerpt: WordPressRenderedField
}

export type WordPressPost = {
  id: number
  slug: string
  link: string
  date: string
  title: WordPressRenderedField
  content: WordPressRenderedField
  excerpt: WordPressRenderedField
}

async function fetchWordPress<T>(path: string, init?: RequestInit): Promise<T | null> {
  try {
    const response = await fetch(getWordPressApiUrl(path), {
      ...init,
      next: { revalidate: 60 },
    })

    if (!response.ok) return null
    return (await response.json()) as T
  } catch {
    return null
  }
}

export async function isWordPressAvailable(): Promise<boolean> {
  try {
    const response = await fetch(`${getWordPressUrl()}/wp-json/`, {
      cache: 'no-store',
    })
    return response.ok
  } catch {
    return false
  }
}

export async function getPageBySlug(slug: string): Promise<WordPressPage | null> {
  const pages = await fetchWordPress<WordPressPage[]>(
    `pages?slug=${encodeURIComponent(slug)}&_embed=1`
  )
  return pages?.[0] ?? null
}

export async function getPosts(limit = 10): Promise<WordPressPost[]> {
  const posts = await fetchWordPress<WordPressPost[]>(
    `posts?per_page=${limit}&status=publish&_embed=1&orderby=date&order=desc`
  )
  return posts ?? []
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()
}

export function rewriteWordPressHtml(html: string): string {
  const wordpressUrl = getWordPressUrl()
  return html
    .replaceAll(`${wordpressUrl}/wp-content/`, '/wp-content/')
    .replaceAll(`${wordpressUrl}/wp-json/`, '/wp-json/')
}
