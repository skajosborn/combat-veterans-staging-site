'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FileText, MapPin, Mail, Phone } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
      {/* Solid base matches dark theme body so there is no light strip above; overlay keeps the flag readable */}
      <div className="absolute inset-0 bg-cvc-image-overlay" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <SectionTitle
              title="Ready to Take the Next Step?"
              size="display"
              variant="inverse"
              align="left"
              uppercaseTitle={false}
              subtitle={
                <p className="mb-8 text-lg text-cvc-hero-fg-muted">
                  We&apos;re here to support you every step of the way.
                </p>
              }
            />

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] p-3 rounded-lg">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-cvc-hero-fg">Combat Veterans to Careers</h3>
                  <p className="text-cvc-hero-fg-muted">400 E Gulf Atlantic Highway</p>
                  <p className="text-cvc-hero-fg-muted">Wildwood, FL 34785</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] p-3 rounded-lg">
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-cvc-hero-fg">Email</h3>
                  <p className="text-cvc-hero-fg-muted">CombatVeteranstoCareers@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] p-3 rounded-lg">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-cvc-hero-fg">Office</h3>
                  <p className="text-cvc-hero-fg-muted">352-775-4008</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right side — CTA only; no panel so the gold button reads on the flag */}
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
              <p className="text-xs text-cvc-hero-fg-muted">
                Confidential. Veteran-led. No one fights alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
