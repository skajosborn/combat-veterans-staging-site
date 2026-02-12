import Image from 'next/image'

export default function SuccessStories() {
  const stories = [
    {
      name: 'Marcus Johnson',
      rank: 'Former Army Sergeant',
      role: 'Software Engineer at TechCorp',
      quote: 'The foundation didn\'t just help me find a job—they helped me discover a new purpose. My military leadership skills translated perfectly into tech.',
      image: '/army.png',
    },
    {
      name: 'Miles Martinez',
      rank: 'Former Marine Captain',
      role: 'Operations Director at Logistics Plus',
      quote: 'I was worried my combat experience wouldn\'t matter in the civilian world. The mentorship program showed me how valuable my skills really are.',
      image: '/army2.png',
    },
    {
      name: 'James Wilson',
      rank: 'Former Navy SEAL',
      role: 'Project Manager at Global Solutions',
      quote: 'The career transition program gave me the confidence and tools I needed. I went from uncertain to employed in 90 days.',
      image: '/navy.png',
    },
  ]

  return (
    <section id="success-stories" className="py-24 bg-[#0a0e27]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Success Stories
          </h2>
          <div className="w-16 h-0.5 bg-gray-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Real veterans. Real careers. Real success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="bg-[#1a1f3a] rounded-lg p-8 border border-gray-800 hover:border-gray-700 transition-all"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-gray-700">
                  <Image
                    src={story.image}
                    alt={`${story.name} testimonial`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="text-white font-semibold text-lg mb-1">
                {story.name}
              </div>
              <div className="text-gray-400 text-sm mb-2">
                {story.rank}
              </div>
              <div className="text-gray-300 font-medium mb-4 text-sm">
                {story.role}
              </div>
              <blockquote className="text-gray-400 italic leading-relaxed text-sm">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
