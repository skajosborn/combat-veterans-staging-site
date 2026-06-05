'use client'

import Image from 'next/image'
import { MapPin, Mail, Phone } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-[calc(var(--cvc-nav-utility-height)+var(--cvc-nav-main-height))] overflow-hidden bg-[#0a0e27] py-14 pb-20 sm:py-16 sm:pb-24 lg:min-h-[calc(100svh-var(--cvc-nav-utility-height)-var(--cvc-nav-main-height))] lg:py-20 lg:pb-28"
    >
      <Image
        src="/flagwithsoldiers.png"
        alt=""
        fill
        className="object-cover object-[72%_bottom]"
        sizes="100vw"
      />
      {/* Fixed overlay matches dark-mode hero so this block looks the same in site light or dark theme */}
      <div className="absolute inset-0 bg-[rgb(15_20_34/0.55)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,28rem)] lg:grid-rows-[auto_auto] lg:items-start lg:gap-x-12 lg:gap-y-10">
          <div className="min-w-0 lg:col-start-1 lg:row-start-1">
            <SectionTitle
              title="Ready to Take the Next Step?"
              size="display"
              variant="default"
              align="left"
              uppercaseTitle={false}
              titleClassName="!text-[#a8b892]"
              blueprintStarsBackdropClassName="rounded-sm bg-black px-2.5 py-1"
              subtitle={
                <p className="mb-0 text-lg text-[rgb(255_255_255/0.88)]">
                  We&apos;re here to support you every step of the way.
                </p>
              }
            />
          </div>

          <div className="flex min-w-0 flex-col items-center lg:col-start-2 lg:row-start-1 lg:items-end lg:justify-self-end">
            <div className="w-full max-w-md space-y-4 text-center">
              <a
                href="/veteran-application"
                className="block w-full rounded-lg px-6 py-5 text-center text-base font-semibold text-cvc-fg-on-light shadow-[0_12px_40px_-8px_rgba(0,0,0,0.55)] transition-opacity hover:opacity-95"
                style={{
                  backgroundImage:
                    'radial-gradient(ellipse 80% 70% at 50% 40%, #f0e68c, #d4af37 35%, #b8860b 100%)',
                }}
              >
                <span className="block text-lg font-bold">Start Your Transition Today</span>
                <span className="block mt-0.5 text-sm">Apply for Veteran Support →</span>
              </a>
              <p className="text-xs text-[rgb(255_255_255/0.65)]">
                Confidential. Veteran-led. No one fights alone.
              </p>
            </div>
          </div>

          <div className="min-w-0 max-w-xl space-y-6 lg:col-start-1 lg:row-start-2">
            <div className="flex items-start space-x-4">
              <div className="p-3 text-[#a8b892]">
                <MapPin className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[#a8b892]">Combat Veterans to Careers</h3>
                <p className="text-[rgb(255_255_255/0.88)]">400 E Gulf Atlantic Highway</p>
                <p className="text-[rgb(255_255_255/0.88)]">Wildwood, FL 34785</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 text-[#a8b892]">
                <Mail className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[#a8b892]">Email</h3>
                <p className="text-[rgb(255_255_255/0.88)]">CombatVeteranstoCareers@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="p-3 text-[#a8b892]">
                <Phone className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="mb-1 font-semibold text-[#a8b892]">Office</h3>
                <p className="text-[rgb(255_255_255/0.88)]">352-775-4008</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
