type NavStackedLabelProps = {
  lines: [string, string]
  className?: string
}

export default function NavStackedLabel({ lines, className = '' }: NavStackedLabelProps) {
  return (
    <span
      className={`inline-flex flex-row items-baseline gap-1 whitespace-nowrap leading-none ${className || ''}`}
    >
      <span>{lines[0]}</span>
      <span>{lines[1]}</span>
    </span>
  )
}
