import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'

type SponsorImage = {
  name: string
  src: string
}

const sponsorsDir = path.join(process.cwd(), 'public', 'images', 'Sponsors')

function getSponsorImages() {
  const files = fs
    .readdirSync(sponsorsDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const all = files.map((file) => ({
    name: file,
    src: `/images/Sponsors/${encodeURIComponent(file)}`,
  }))

  const veteranOwned: SponsorImage[] = []
  const standard: SponsorImage[] = []

  for (const image of all) {
    const trimmed = image.name.trim().toLowerCase()
    if (trimmed.startsWith('v')) {
      veteranOwned.push(image)
    } else {
      standard.push(image)
    }
  }

  return { standard, veteranOwned }
}

function SponsorGrid({ items }: { items: SponsorImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {items.map((image) => (
        <a
          key={image.name}
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-xl border border-gray-800 bg-[#111831] p-4 shadow-lg transition-all hover:border-gray-600 hover:-translate-y-0.5"
          aria-label={`Open sponsor image: ${image.name}`}
        >
          <div className="relative h-32 w-full overflow-hidden rounded-lg bg-white">
            <Image
              src={image.src}
              alt={image.name}
              fill
              className="object-contain p-2"
            />
          </div>
          <p className="mt-3 truncate text-sm text-gray-400 group-hover:text-gray-300">
            {image.name}
          </p>
        </a>
      ))}
    </div>
  )
}

export default function SponsorsPage() {
  const { standard, veteranOwned } = getSponsorImages()

  return (
    <main className="min-h-screen bg-[#0a0e27] pt-24 pb-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-gray-800 bg-[#111831] p-8 sm:p-10">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Sponsors
          </h1>
          <p className="text-gray-300 leading-relaxed">
            We are grateful for the businesses, organizations, and community
            partners who stand with Combat Veterans to Careers. Click any card
            to view the sponsor image in full size.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-white">
            Community &amp; Corporate Sponsors
          </h2>
          <SponsorGrid items={standard} />
        </div>

        <div>
          <h2 className="mb-4 text-2xl sm:text-3xl font-semibold text-white">
            Veteran Owned Sponsors
          </h2>
          <SponsorGrid items={veteranOwned} />
        </div>
      </section>
    </main>
  )
}
