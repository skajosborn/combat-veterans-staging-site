import Image from 'next/image'

export default function Programs() {
  const programs = [
    {
      title: 'Career Transition Program',
      description: 'Comprehensive 12-week program designed to help veterans identify their strengths and transition into civilian careers.',
      image: '/skills.jpg',
    },
    {
      title: 'Skills Assessment',
      description: 'Professional evaluation of military skills and their translation to civilian job markets.',
      image: '/skills2.jpg',
    },
    {
      title: 'Mentorship Network',
      description: 'Connect with successful veterans who have made the transition and can guide your journey.',
      image: '/skills3.jpg',
    },
    {
      title: 'Job Placement',
      description: 'Direct connections with employers who value the skills and dedication of combat veterans.',
      image: '/skills4.jpg',
    },
    {
      title: 'Resume Building',
      description: 'Expert assistance in crafting resumes that highlight military experience in civilian terms.',
      image: '/skills5.jpg',
    },
    {
      title: 'Interview Prep',
      description: 'Mock interviews and coaching to help you confidently present your value to employers.',
      image: '/skills6.jpg',
    },
  ]

  return (
    <section id="programs" className="py-24 bg-[#0f1422]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our Programs
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive support designed specifically for combat veterans ready to build their next chapter
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-[#1a1f3a] rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-800 overflow-hidden hover:border-gray-700"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={program.image}
                  alt={program.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {program.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
