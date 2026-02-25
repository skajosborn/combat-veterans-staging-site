'use client'

import Image from 'next/image'
import { useState } from 'react'

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
    <section id="contact" className="py-24 bg-[#363d29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left side - Info */}
          <div className="p-8 rounded-lg">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
          <div className="relative w-48 h-48 mx-auto mb-6 p-4 rounded-lg">
            <Image
              src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbHVlOG1kb29mdzF4NTQ1Nmw5NG95ajJ6emF3MXY3NHA5NTRsdnF3cSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/jxGiMbsk7JorVR8wjc/giphy.gif"
              alt="Veterans transitioning to careers"
              fill
              unoptimized
              className="object-contain"
            />
          </div>
              Get In Touch
            </h2>
            <div className="w-16 h-0.5 bg-gray-600 mb-6"></div>
            <p className="text-lg text-gray-400 mb-8">
              Ready to start your transition? We're here to help you every step of the way.
            </p>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 text-gray-300 p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Email</h3>
                  <p className="text-gray-400">info@combatveteranscareers.org</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 text-gray-300 p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Phone</h3>
                  <p className="text-gray-400">1-800-VET-CARE</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gray-800 text-gray-300 p-3 rounded-lg">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Address</h3>
                  <p className="text-gray-400">123 Veterans Way<br />Washington, DC 20001</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-[#1a1f3a] rounded-lg p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold text-white mb-6">
              Apply Now
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" id="apply">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0e27] text-white focus:border-gray-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0e27] text-white focus:border-gray-600 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0e27] text-white focus:border-gray-600 focus:outline-none transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-[#0a0e27] text-white focus:border-gray-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your military service and career goals..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-white text-[#0a0e27] px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-colors shadow-lg"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
