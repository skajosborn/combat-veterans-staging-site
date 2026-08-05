import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

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
  },
  {
    title: 'Upcoming Events',
    description:
      'From fundraisers to special events, see what\'s coming up and how you can get involved.',
    href: '/events#upcoming',
    cta: 'View Calendar',
    imageSrc: '/events/clay-shoot-2027.jpg',
    imageAlt: 'Combat Veterans to Careers community event',
    iconSrc: '/icons/calendar.png',
    iconAlt: '',
    imagePosition: 'object-top',
  },
]

export default function HeroFeatureCards({ className = '' }: { className?: string }) {
  return (
    <div className={`relative z-10 w-full ${className}`.trim()}>
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-3 px-4 pb-5 pt-2 sm:gap-4 sm:px-6 sm:pb-6 md:grid-cols-3 lg:gap-5 lg:px-10 lg:pb-7">
        {FEATURES.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="group relative flex min-h-[11.5rem] flex-col overflow-hidden rounded-xl border border-white/35 bg-black/45 shadow-[0_12px_32px_-16px_rgba(0,0,0,0.65)] backdrop-blur-[2px] transition-[transform,border-color] hover:-translate-y-0.5 hover:border-white/55 sm:min-h-[12.5rem]"
          >
            <Image
              src={card.imageSrc}
              alt={card.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className={`object-cover opacity-55 transition-transform duration-500 group-hover:scale-[1.04] group-hover:opacity-65 ${card.imagePosition ?? 'object-center'}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/25" />

            <div className="relative z-10 flex h-full flex-col p-4 sm:p-5">
              <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#5c6b3a] shadow-[0_4px_12px_rgba(0,0,0,0.35)] ring-2 ring-white/15 sm:h-11 sm:w-11">
                <Image
                  src={card.iconSrc}
                  alt={card.iconAlt}
                  width={28}
                  height={28}
                  className="h-5 w-5 object-contain brightness-0 invert sm:h-6 sm:w-6"
                />
              </span>

              <h3 className="text-sm font-black uppercase tracking-[0.06em] text-white sm:text-[0.9375rem]">
                {card.title}
              </h3>
              <p className="mt-1.5 flex-1 text-xs leading-relaxed text-white/88 sm:text-[0.8125rem] sm:leading-snug">
                {card.description}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-[#c4a574] transition-colors group-hover:text-[#d4b888]">
                {card.cta}
                <ArrowRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
