export default function Programs() {
  const programs = [
    {
      title: 'Career Transition Program',
      description: 'Comprehensive 12-week program designed to help veterans identify their strengths and transition into civilian careers.',
      icon: '🎯',
      color: 'bg-patriotic-red',
    },
    {
      title: 'Skills Assessment',
      description: 'Professional evaluation of military skills and their translation to civilian job markets.',
      icon: '📊',
      color: 'bg-patriotic-blue',
    },
    {
      title: 'Mentorship Network',
      description: 'Connect with successful veterans who have made the transition and can guide your journey.',
      icon: '🤝',
      color: 'bg-patriotic-navy',
    },
    {
      title: 'Job Placement',
      description: 'Direct connections with employers who value the skills and dedication of combat veterans.',
      icon: '💼',
      color: 'bg-patriotic-red',
    },
    {
      title: 'Resume Building',
      description: 'Expert assistance in crafting resumes that highlight military experience in civilian terms.',
      icon: '📝',
      color: 'bg-patriotic-blue',
    },
    {
      title: 'Interview Prep',
      description: 'Mock interviews and coaching to help you confidently present your value to employers.',
      icon: '🎤',
      color: 'bg-patriotic-navy',
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
              className="bg-[#1a1f3a] rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-800 p-8 hover:border-gray-700"
            >
              <div className="w-12 h-12 rounded-lg bg-gray-800 flex items-center justify-center text-2xl mb-6">
                {program.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {program.title}
              </h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
