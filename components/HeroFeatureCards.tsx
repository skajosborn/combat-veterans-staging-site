import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type FeatureTint = 'green' | 'blue' | 'red'

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
  green: {
    card: 'bg-[#5c6b3a]/35',
    wash: 'bg-gradient-to-t from-[#1a2410]/90 via-[#3d4a2c]/55 to-[#5c6b3a]/25',
    icon: 'bg-[#5c6b3a]',
    cta: 'text-[#c8d4a0] group-hover:text-[#e0e8c4]',
    border: 'border-[#a8b892]/45 hover:border-[#c8d4a0]/70',
  },
  blue: {
    card: 'bg-[#1a2b3c]/40',
    wash: 'bg-gradient-to-t from-[#0a1520]/90 via-[#1a2b3c]/55 to-[#2a4a6c]/30',
    icon: 'bg-[#1a3a5c]',
    cta: 'text-[#8eb4d4] group-hover:text-[#b4d0ea]',
    border: 'border-[#6a8fb0]/45 hover:border-[#8eb4d4]/70',
  },
  red: {
    card: 'bg-[#7a1212]/35',
    wash: 'bg-gradient-to-t from-[#2a0808]/90 via-[#5a1010]/55 to-[#7a1212]/30',
    icon: 'bg-[#7a1212]',
    cta: 'text-[#e8a0a0] group-hover:text-[#f0c0c0]',
    border: 'border-[#c07070]/45 hover:border-[#e8a0a0]/70',
  },
}

const FEATURES: FeatureCard[] = [
  {
    title: 'Veteran Application',
    description:
      'Begin your journey. Complete the application and let us help you take the next step forward.',
    href: '/veteran-application',
    cta: 'Apply Today',
    imageSrc: '/Derek 1.png',
    imageAlt: 'Combat veteran ready for the next chapter',
    iconSrc: '/icons/application.png',
    iconAlt: '',
    imagePosition: 'object-[center_20%]',
    tint: 'green',
  },
  {
    title: 'Operation Field Trip',
    description:
      'Adventure. Connection. Healing. Explore outdoor experiences and care built for combat veterans.',
    href: '/operation-field-trip',
    cta: 'Learn More',
    imageSrc: '/WN-1.jpg',
    imageAlt: 'Veterans on an Operation Field Trip outing',
    iconSrc: '/icons/helicopter.png',
    iconAlt: '',
    imagePosition: 'object-center',
    tint: 'blue',
  },
  {
    title: 'Upcoming Events',
    description:
      "From fundraisers to special events, see what's coming up and how you can get involved.",
    href: '/events#upcoming',
    cta: 'View Calendar',
    imageSrc: '/events/clay-shoot-2027.jpg',
    imageAlt: 'Combat Veterans to Careers community event',
    iconSrc: '/icons/calendar.png',
    iconAlt: '',
    imagePosition: 'object-top',
    tint: 'red',
  },
]

export default function HeroFeatureCards({ className = '' }: { className?: string }) {
  return (
    <div className={`relative z-10 w-full ${className}`.trim()}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-4 pb-5 pt-2 sm:gap-4 sm:px-6 sm:pb-6 md:grid-cols-3 lg:gap-5 lg:px-10 lg:pb-7">
        {FEATURES.map((card) => {
          const tint = TINT_STYLES[card.tint]
          return (
            <Link
              key={card.title}
              href={card.href}
              className={`group relative flex min-h-[11.5rem] flex-col overflow-hidden rounded-xl border text-white shadow-[0_12px_32px_-16px_rgba(0,0,0,0.65)] backdrop-blur-[2px] transition-[transform,border-color] hover:-translate-y-0.5 hover:text-white sm:min-h-[12.5rem] ${tint.card} ${tint.border}`}
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

                <h3 className="!text-white text-sm font-black uppercase tracking-[0.06em] sm:text-[0.9375rem]">
                  {card.title}
                </h3>
                <p className="mt-1.5 flex-1 text-xs leading-relaxed !text-white/90 sm:text-[0.8125rem] sm:leading-snug">
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
          )
        })}
      </div>
    </div>
  )
}
