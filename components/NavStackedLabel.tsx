type NavStackedLabelProps = {
  lines: [string, string]
  className?: string
}

export default function NavStackedLabel({ lines, className = '' }: NavStackedLabelProps) {
  return (
    <span
      className={`inline-flex flex-col whitespace-normal leading-[1.05] ${className || 'items-center text-center'}`}
    >
      <span>{lines[0]}</span>
      <span>{lines[1]}</span>
    </span>
  )
}
