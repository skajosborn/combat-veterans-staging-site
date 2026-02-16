export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-16">
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-2xl border border-gray-800 bg-[#111831] p-8 sm:p-10">
          <h1 className="mb-4 text-4xl sm:text-5xl font-bold text-white">
            Events
          </h1>
          <p className="text-gray-300 leading-relaxed">
            Explore recent community events and veteran-focused activities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              7th Annual Battle Buddy Golf Tournament
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/4FLzvQxT9-8"
                title="7th Annual Battle Buddy Golf Tournament"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              3rd Annual Battle Buddy Clay Shoot
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/sMGX71mjLWs"
                title="3rd Annual Battle Buddy Clay Shoot"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Restoring Hope Fashion Show
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/c5FIJzgGJTc"
                title="Events Video 2"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Harley Motorcycle Raffle
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/Dk4y7DIaRT8"
                title="Events Video 3"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#111831] p-4 sm:p-6">
            <h2 className="mb-4 text-2xl font-semibold text-white">
              Outdoor Adventure Raffle
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
              <iframe
                className="h-full w-full"
                src="https://www.youtube.com/embed/shWz0nhKLnE"
                title="Events Video 4"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
