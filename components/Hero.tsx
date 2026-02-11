'use client'

export default function Hero() {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: 'url(/cvcbg.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#0a0e27]/80"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Video */}
          <div className="order-2 lg:order-1">
            <div className="relative w-full">
              <div className="relative rounded-lg overflow-hidden shadow-2xl border border-gray-700/50">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  aria-label="Combat Veterans to Careers Foundation logo video"
                >
                  <source src="/cvclogovideo2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left space-y-8">
            {/* Main Heading - Clean and Professional */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
              <span className="block lg:inline text-gray-300">SERVICE</span>
              <span className="block lg:inline text-white lg:ml-4 mt-2 lg:mt-0">TO</span>
              <span className="block text-white mt-2 lg:mt-2">SUCCESS</span>
            </h1>

            {/* Poetic subheading */}
            <div className="space-y-4 pt-6">
              <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed italic">
                As you step from one chapter to the next, we stand beside you—providing the support and guidance to help you find your footing and discover the next stage of your journey.
              </p>
            </div>

            {/* Professional CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <a
                href="#apply"
                className="bg-white text-[#0a0e27] px-8 py-4 rounded-lg font-semibold text-base hover:bg-gray-100 transition-all shadow-lg text-center"
              >
                Start Your Transition
              </a>
              <a
                href="#programs"
                className="bg-transparent text-white border-2 border-gray-600 px-8 py-4 rounded-lg font-semibold text-base hover:border-gray-400 hover:bg-gray-800/50 transition-all text-center"
              >
                Learn More
              </a>
            </div>

            {/* Clean Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">500+</div>
                <div className="text-sm text-gray-400 font-medium">Veterans Served</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">85%</div>
                <div className="text-sm text-gray-400 font-medium">Placement Rate</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-1">$75K+</div>
                <div className="text-sm text-gray-400 font-medium">Avg Salary</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
