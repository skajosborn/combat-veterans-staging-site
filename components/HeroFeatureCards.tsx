import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroEventsFeatureCard from '@/components/HeroEventsFeatureCard'

type FeatureTint = 'gray' | 'blue'

type FeatureCard = {
  title: string
  description: string
  href: string
  cta: string
  imageSrc: string
  imageAlt: string
  iconSrc: string
  iconAlt: string
  imagePosition?: string
  tint: FeatureTint
}

const TINT_STYLES: Record<
  FeatureTint,
  { card: string; wash: string; icon: string; cta: string; border: string }
> = {
  gray: {
    card: 'bg-[#4b5563]/60',
    wash: 'bg-gradient-to-t from-[#111827]/95 via-[#374151]/75 to-[#4b5563]/45',
    icon: 'bg-[#4b5563]',
    cta: 'text-[#cbd5e1] group-hover:text-[#e2e8f0]',
    border: 'border-[#94a3b8]/55 hover:border-[#cbd5e1]/80',
  },
  blue: {
    card: 'bg-[#1a2b3c]/40',
    wash: 'bg-gradient-to-t from-[#0a1520]/90 via-[#1a2b3c]/55 to-[#2a4a6c]/30',
    icon: 'bg-[#1a3a5c]',
    cta: 'text-[#8eb4d4] group-hover:text-[#b4d0ea]',
    border: 'border-[#6a8fb0]/45 hover:border-[#8eb4d4]/70',
  },
}

const FEATURES: FeatureCard[] = [
  {
    title: 'Veteran Application',
    description:
      'Begin your journey. Complete the application and let us help you take the next step forward.',
    href: '/veteran-application',
    cta: 'Apply Today',
    imageSrc: '/vetapplication.png',
    imageAlt: 'Veteran completing an application',
    iconSrc: '/icons/application.png',
    iconAlt: '',
    imagePosition: 'object-center',
    tint: 'gray',
  },
  {
    title: 'Operation Field Trip',
    description:
      'Adventure. Connection. Healing. Explore outdoor experiences and care built for combat veterans.',
    href: '/operation-field-trip',
    cta: 'Learn More',
    imageSrc: '/OFT-Heading.png',
    imageAlt: 'Operation Field Trip — Ketamine Assisted Therapy',
    iconSrc: '/icons/helicopter.png',
    iconAlt: '',
    imagePosition: 'object-center',
    tint: 'blue',
  },
]

export default function HeroFeatureCards({ className = '' }: { className?: string }) {
  return (
    <div className={`relative z-10 w-full ${className}`.trim()}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-4 pb-5 pt-2 sm:gap-4 sm:px-6 sm:pb-6 md:grid-cols-3 lg:gap-5 lg:px-10 lg:pb-7">
        {FEATURES.map((card) => {
          const tint = TINT_STYLES[card.tint]
          return (
            <div key={card.title} className="flex min-w-0 flex-col gap-2">
              <h3 className="px-0.5 text-sm font-black uppercase tracking-[0.08em] text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.65)] sm:text-[0.9375rem]">
                {card.title}
              </h3>
              <Link
                href={card.href}
                className={`group relative flex min-h-[11.5rem] flex-1 flex-col overflow-hidden rounded-xl border text-white shadow-[0_12px_32px_-16px_rgba(0,0,0,0.65)] backdrop-blur-[2px] transition-[transform,border-color] hover:-translate-y-0.5 hover:text-white sm:min-h-[12.5rem] ${tint.card} ${tint.border}`}
              >
                <Image
                  src={card.imageSrc}
                  alt={card.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className={`object-cover opacity-50 transition-transform duration-500 group-hover:scale-[1.04] group-hover:opacity-60 ${card.imagePosition ?? 'object-center'}`}
                />
                <div className={`absolute inset-0 ${tint.wash}`} />

                <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
                  <span
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.35)] ring-2 ring-white/20 sm:h-11 sm:w-11 ${tint.icon}`}
                  >
                    <Image
                      src={card.iconSrc}
                      alt={card.iconAlt}
                      width={28}
                      height={28}
                      className="h-5 w-5 object-contain brightness-0 invert sm:h-6 sm:w-6"
                    />
                  </span>

                  <p className="mt-auto flex-1 text-xs leading-relaxed !text-white/90 sm:text-[0.8125rem] sm:leading-snug">
                    {card.description}
                  </p>
                  <span
                    className={`mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide transition-colors ${tint.cta}`}
                  >
                    {card.cta}
                    <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden />
                  </span>
                </div>
              </Link>
            </div>
          )
        })}

        <HeroEventsFeatureCard />
      </div>
    </div>
  )
}
