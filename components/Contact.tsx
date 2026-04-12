'use client'

import { MapPin, Mail, Phone } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-[2.5rem] overflow-hidden bg-[#0a0e27] py-14 pb-20 sm:scroll-mt-[2.75rem] sm:py-16 sm:pb-24 lg:min-h-[calc(100svh-2.75rem)] lg:py-20 lg:pb-28"
      style={{
        backgroundImage: 'url(/flagwithsoldiers.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Fixed overlay matches dark-mode hero so this block looks the same in site light or dark theme */}
      <div className="absolute inset-0 bg-[rgb(15_20_34/0.55)]" aria-hidden />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <SectionTitle
              title="Ready to Take the Next Step?"
              size="display"
              variant="default"
              align="left"
              uppercaseTitle={false}
              titleClassName="!text-[#a8b892]"
              blueprintStarsBackdropClassName="rounded-sm bg-black px-2.5 py-1"
              subtitle={
                <p className="mb-8 text-lg text-[rgb(255_255_255/0.88)]">
                  We&apos;re here to support you every step of the way.
                </p>
              }
            />

            <div className="space-y-6">
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

          {/* Right side — CTA only; no panel so the button reads clearly on the flag */}
          <div className="flex flex-col items-center lg:items-end">
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
        </div>
      </div>
    </section>
  )
}
