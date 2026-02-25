'use client'

import Image from 'next/image'
import { useState } from 'react'
import { FileText, MapPin, Mail, Phone } from 'lucide-react'

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
    <section id="contact" className="relative py-24 overflow-hidden" style={{ backgroundImage: 'url(/flagwithsoldiers.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      {/* Lighter overlay so the flag remains visible */}
      <div className="absolute inset-0 bg-[#0f1422]/50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
              Ready to Take the Next Step?
            </h2>
            <div className="w-16 h-0.5 bg-gray-600 mb-6"></div>
            <p className="text-lg text-gray-400 mb-8">
              We're here to support you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] p-3 rounded-lg">
                  <MapPin className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Combat Veterans to Careers</h3>
                  <p className="text-gray-400">400 E Gulf Atlantic Highway</p>
                  <p className="text-gray-400">Wildwood, FL 34785</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] p-3 rounded-lg">
                  <Mail className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">CombatVeteranstoCareers@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-[#D4AF37] p-3 rounded-lg">
                  <Phone className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Office</h3>
                  <p className="text-gray-400">352-775-4008</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right side - wide CTA card */}
          <div className="flex flex-col items-center lg:items-end">
            <div className="bg-[#1e2439]/90 backdrop-blur-sm rounded-xl p-8 border border-white/10 w-full max-w-md shadow-xl text-center">
              <a href="/veteran-application" className="block w-full text-center px-6 py-4 rounded-lg font-semibold text-base shadow-lg transition-opacity hover:opacity-95 text-gray-900" style={{ backgroundImage: 'radial-gradient(ellipse 80% 70% at 50% 40%, #f0e68c, #d4af37 35%, #b8860b 100%)' }}>
                <span className="block text-lg font-bold">Start Your Transition Today</span>
                <span className="block text-sm mt-0.5">Apply for Veteran Support →</span>
              </a>
              <p className="text-xs text-gray-400 mt-4">
                Confidential. Veteran-led. No one fights alone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
