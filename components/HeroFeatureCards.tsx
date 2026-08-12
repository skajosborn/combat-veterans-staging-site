import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import HeroEventsFeatureCard from '@/components/HeroEventsFeatureCard'

type FeatureTint = 'blue' | 'green'

type FeatureCard = {
  title: string
  headline: string
  description: string
  href: string
  cta: string
  imageSrc: string
  imageAlt: string
  iconSrc: string
  imagePosition?: string
  tint: FeatureTint
}

const TINT_STYLES: Record<
  FeatureTint,
  { card: string; wash: string; icon: string; border: string }
> = {
  blue: {
    card: 'bg-[#0a2340]/55',
    wash: 'bg-gradient-to-t from-[#04101c]/95 via-[#0c2a4a]/60 to-[#1a4a7a]/20',
    icon: 'bg-[#1e6bb8]',
    border:
      'border-[3px] border-[#2f7fd4] shadow-[0_0_0_1px_rgba(47,127,212,0.35),0_8px_28px_-6px_rgba(47,127,212,0.75),0_0_22px_rgba(47,127,212,0.45)] hover:border-[#5aa0ef]',
  },
  green: {
    card: 'bg-[#1f2e10]/55',
    wash: 'bg-gradient-to-t from-[#0c1406]/95 via-[#2a3a18]/60 to-[#4a5c28]/20',
    icon: 'bg-[#5a7a2e]',
    border:
      'border-[3px] border-[#6f8f32] shadow-[0_0_0_1px_rgba(111,143,50,0.35),0_8px_28px_-6px_rgba(111,143,50,0.75),0_0_22px_rgba(111,143,50,0.45)] hover:border-[#91b34a]',
  },
}

const FEATURES: FeatureCard[] = [
  {
    title: 'Veteran Application',
    headline: 'Get Started',
    description:
      'Begin your journey. Complete the application and let us help you take the next step forward.',
    href: '/veteran-application',
    cta: 'Apply Today',
    imageSrc: '/vetapplication.png',
    imageAlt: 'Veteran completing an application',
    iconSrc: '/icons/open-enrollment.png',
    imagePosition: 'object-center',
    tint: 'blue',
  },
  {
    title: 'Operation Field Trip',
    headline: 'Ketamine Therapy',
    description:
      'Adventure. Connection. Healing. Explore outdoor experiences and care built for combat veterans.',
    href: '/operation-field-trip',
    cta: 'Learn More',
    imageSrc: '/OFT-Heading.png',
    imageAlt: 'Operation Field Trip — Ketamine Assisted Therapy',
    iconSrc: '/icons/intravenous-saline-drip.png',
    imagePosition: 'object-center',
    tint: 'green',
  },
]

const labelClass =
  'text-[10px] font-bold uppercase tracking-[0.16em] !text-white/90 sm:text-[11px]'
const headlineClass =
  'mt-1 text-[1.35rem] font-black uppercase leading-[1.05] tracking-tight !text-white sm:text-[1.5rem]'

export default function HeroFeatureCards({ className = '' }: { className?: string }) {
  return (
    <div className={`relative z-10 w-full ${className}`.trim()}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-4 pb-5 pt-2 sm:gap-5 sm:px-6 sm:pb-6 md:grid-cols-3 lg:gap-6 lg:px-10 lg:pb-7">
        {FEATURES.map((card) => {
          const tint = TINT_STYLES[card.tint]
          return (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative flex min-h-[13rem] flex-col overflow-hidden rounded-2xl text-white backdrop-blur-[2px] transition-[transform,border-color] hover:-translate-y-0.5 hover:text-white sm:min-h-[14rem] ${tint.card} ${tint.border}`}
            >
              <Image
                src={card.imageSrc}
                alt={card.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`object-cover opacity-40 transition-transform duration-500 group-hover:scale-[1.04] group-hover:opacity-50 ${card.imagePosition ?? 'object-center'}`}
              />
              <div className={`absolute inset-0 ${tint.wash}`} />

              <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
                <span
                  className={`mb-3 flex h-10 w-10 items-center justify-center rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.4)] ring-2 ring-white/30 sm:mb-3.5 sm:h-11 sm:w-11 ${tint.icon}`}
                  aria-hidden
                >
                  <Image
                    src={card.iconSrc}
                    alt=""
                    width={24}
                    height={24}
                    className="h-5 w-5 object-contain brightness-0 invert sm:h-6 sm:w-6"
                  />
                </span>

                <p className={labelClass}>{card.title}</p>
                <h3 className={headlineClass}>{card.headline}</h3>
                <p className="mt-2 flex-1 text-xs leading-relaxed !text-white/90 sm:text-[0.8125rem] sm:leading-snug">
                  {card.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide !text-white transition-opacity group-hover:opacity-90">
                  {card.cta}
                  <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden />
                </span>
              </div>
            </Link>
          )
        })}

        <HeroEventsFeatureCard />
      </div>
    </div>
  )
}
