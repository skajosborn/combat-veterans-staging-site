import { rewriteWordPressHtml } from '@/lib/wordpress'

type Props = {
  html: string
  className?: string
}

export default function WordPressContent({ html, className }: Props) {
  if (!html.trim()) return null

  return (
    <div
      className={`cvc-wp-content space-y-4 leading-relaxed text-cvc-fg-muted [&_a]:font-medium [&_a]:text-cvc-section-title [&_a]:underline-offset-2 hover:[&_a]:underline [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-cvc-fg [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-cvc-fg [&_img]:mx-auto [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-xl [&_p]:leading-relaxed ${className ?? ''}`}
      dangerouslySetInnerHTML={{ __html: rewriteWordPressHtml(html) }}
    />
  )
}
