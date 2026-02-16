export default function Mission() {
  return (
    <section id="mission" className="bg-[#0f1422] py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-6 text-center text-4xl font-bold text-white sm:text-5xl">
          Our Mission
        </h2>
        <div className="mx-auto mb-8 h-0.5 w-16 bg-gray-600" />

        <div className="space-y-6 text-base leading-relaxed text-gray-300 sm:text-lg">
          <p>
            Combat Veterans to Careers (CVC) was founded in The Villages in May
            2012 with the commitment to serve our nation&apos;s combat veterans
            and their families. Since our inception, we&apos;ve assisted more
            than 955 veteran families in the area of education, employment,
            housing and wellness.
          </p>

          <p>
            CVC has partnered with local residents, clubs, businesses,
            colleges and VA offices to bring combat veterans and their families
            &ldquo;home&rdquo; to a community that embraces them and provides
            education, understanding and meaningful employment to minimize
            hardships.
          </p>

          <p>
            In addition to counseling, housing, career and educational
            opportunities, we provide veterans with opportunities to deliver
            services beyond themselves. This is essential to successfully
            reconnecting with others in the community, and is a large part of
            why many veterans were led to serve their country in the first
            place.
          </p>

          <p>
            Accessing care and benefits through the VA, utilizing earned
            education benefits, training for civilian careers, securing
            affordable housing and developing a quality resume package are just
            a few of the ways we continue to help our veterans transition back
            into civilian life.
          </p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-800 bg-[#10162b] p-4 sm:p-6">
          <h3 className="mb-4 text-xl sm:text-2xl font-semibold text-white">
            Our Mission Video
          </h3>
          <div className="aspect-video w-full overflow-hidden rounded-lg border border-gray-700">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/4npHQY_Rer0"
              title="Our Mission Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
