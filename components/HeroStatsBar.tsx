import { Users, TrendingUp, HeartHandshake, Star } from 'lucide-react'

const STATS = [
  { icon: Users, value: '1,500+', label: 'Veterans Served' },
  { icon: TrendingUp, value: '92%', label: 'Employment Success' },
  { icon: HeartHandshake, value: '360°', label: 'Support Model' },
  { icon: Star, value: '100%', label: 'Mission Driven' },
] as const

export default function HeroStatsBar({ className = '' }: { className?: string }) {
  return (
    <div
      className={`relative z-10 border-t border-white/15 bg-black/45 backdrop-blur-md ${className}`.trim()}
      aria-label="Combat Veterans to Careers impact statistics"
    >
      <ul className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-y-4 px-4 py-4 sm:gap-y-5 sm:px-6 sm:py-5 lg:grid-cols-4 lg:gap-0 lg:px-10 lg:py-4">
        {STATS.map(({ icon: Icon, value, label }, i) => (
          <li
            key={label}
            className={`flex items-center gap-3 ${
              i > 0 ? 'lg:border-l lg:border-white/15 lg:pl-8' : ''
            } ${i % 2 === 1 ? 'sm:pl-6 lg:pl-8' : ''}`}
          >
            <span
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c4a574]/45 text-[#c4a574] sm:h-10 sm:w-10"
              aria-hidden
            >
              <Icon className="h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="text-sm font-black tracking-tight text-white sm:text-base">{value}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-white/75 sm:text-[11px]">
                {label}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
