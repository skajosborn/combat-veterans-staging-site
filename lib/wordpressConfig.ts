const DEFAULT_WORDPRESS_URL = 'http://localhost:8080'

export function getWordPressUrl(): string {
  const url = process.env.WORDPRESS_URL?.trim() || DEFAULT_WORDPRESS_URL
  return url.replace(/\/+$/, '')
}

export function getWordPressApiUrl(path = ''): string {
  const base = `${getWordPressUrl()}/wp-json/wp/v2`
  if (!path) return base
  return `${base}/${path.replace(/^\/+/, '')}`
}
