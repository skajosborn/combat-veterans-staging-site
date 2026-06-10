type NavStackedLabelProps = {
  lines: [string, string]
  className?: string
}

export default function NavStackedLabel({ lines, className = '' }: NavStackedLabelProps) {
  return (
    <span
      className={`inline-flex flex-col items-center whitespace-normal text-center leading-[1.05] ${className}`}
    >
      <span>{lines[0]}</span>
      <span>{lines[1]}</span>
    </span>
  )
}
