import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

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
    <section id="programs" className="bg-cvc-page-elevated py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Our Programs"
          blueprintStarsBackdropClassName="bg-cvc-page-elevated"
          className="mb-16"
          subtitle={
            <p className="mx-auto max-w-3xl text-lg text-cvc-fg-subtle">
              Comprehensive support designed specifically for combat veterans ready to build their next chapter
            </p>
          }
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border border-cvc-border bg-cvc-tile shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]"
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
                <h3 className="mb-3 text-xl font-semibold text-cvc-fg">
                  {program.title}
                </h3>
                <p className="text-sm leading-relaxed text-cvc-fg-subtle">
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
