import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'

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

  const storyVideos = [
    {
      title: 'Success Story Video 1',
      src: 'https://www.youtube.com/embed/bKnr94QYx_c',
    },
    {
      title: 'Success Story Video 2',
      src: 'https://www.youtube.com/embed/7QSxM7mZMOk',
    },
    {
      title: 'Success Story Video 3',
      src: 'https://www.youtube.com/embed/jW53a9jJ-XY',
    },
    {
      title: 'Success Story Video 4',
      src: 'https://www.youtube.com/embed/B3ly2emg9JY',
    },
  ]

  return (
    <section id="success-stories" className="bg-cvc-page py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Meet Some of Our Veterans"
          className="mb-16"
          subtitle={
            <p className="mx-auto max-w-3xl text-lg text-cvc-fg-subtle">
              Real veterans. Real careers. Real success.
            </p>
          }
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <div
              key={index}
              className="rounded-lg border border-cvc-border bg-cvc-tile p-8 shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)]"
            >
              <div className="mb-6 flex justify-center">
                <div className="relative h-24 w-24 overflow-hidden rounded-full border border-cvc-border-muted">
                  <Image
                    src={story.image}
                    alt={`${story.name} testimonial`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="mb-1 text-lg font-semibold text-cvc-fg">
                {story.name}
              </div>
              <div className="mb-2 text-sm text-cvc-fg-subtle">
                {story.rank}
              </div>
              <div className="mb-4 text-sm font-medium text-cvc-fg-muted">
                {story.role}
              </div>
              <blockquote className="text-sm italic leading-relaxed text-cvc-fg-subtle">
                "{story.quote}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {storyVideos.map((video) => (
            <div
              key={video.src}
              className="rounded-2xl border border-cvc-border bg-cvc-tile p-4 shadow-lg transition-shadow duration-300 hover:shadow-[0_20px_50px_-12px_rgba(15,23,42,0.22)] dark:hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] sm:p-5"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg border border-cvc-border-muted">
                <iframe
                  className="h-full w-full"
                  src={video.src}
                  title="Veteran story"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
