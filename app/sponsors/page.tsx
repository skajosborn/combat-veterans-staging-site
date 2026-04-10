import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'

type SponsorImage = {
  name: string
  src: string
  website: string | null
}

/** Filenames with no public website — card is not a link. */
const sponsorNoWebsiteFilenames = new Set<string>([
  'Wildlife-Services-and-Maintenance.jpg',
  'Wildlife-Services-and-Maintenance-Logo.jpg',
  'wildlife-services-and-maintenance.jpg',
  'Wildlife-Services-Maintenance.jpg',
])

const sponsorWebsiteOverrides: Record<string, string> = {
  '4_bank_of_america.jpg': 'https://www.bankofamerica.com/',
  '5_walmart.jpg': 'https://www.walmart.com/',
  '2_jersey_mikes.jpg': 'https://www.jerseymikes.com/',
  '3_tee_it_up.jpg': 'https://teeitupgolfoviedo.wordpress.com/',
  '6_prima_logo.jpg': 'https://www.primaitaliansteakhouse.com/',
  '7_city_fire_logo.jpg': 'https://www.cityfirethevillages.com/',
  '8-zoom_drain.jpg': 'https://www.zoomdrain.com/',
  '9-jenkins-acura.jpg': 'https://www.jenkinsacura.com/',
  '10-eco-coolers.jpg': 'https://eco-outfitters.com/',
  '13-Hunter-Signs.jpg': 'https://www.huntersigns.com/',
  '15-Ford-Press-logo.jpg': 'https://www.fordpress.com/',
  '16-ms-air-logo.jpg': 'https://www.msaccfl.com/',
  '22-realty-executives.jpg': 'https://www.buysellthevillages.com/',
  'Team-Koller-Logo.jpg': 'https://www.buysellthevillages.com/',
  '23-wildwood_tire_co.jpg': 'https://www.wildwoodtireco.com/',
  '24-doral-equipment.jpg': 'https://doralequipmentrental.com/?gad_source=1&gad_campaignid=13874663976',
  '25-bayou-signs-outdoor.jpg': 'https://www.bayousignsoutdoor.com/',
  '26-mcleod-general-trades.jpg': 'https://members.bancf.com/list/member/mcleod-general-trades-llc-6571',
  'Aquatic-Logo.jpg': 'https://aquaticbath.com/',
  'Falletta-Engineering-Logo.jpg': 'https://www.linkedin.com/in/anthony-falletta-ab6713/',
  'FBC-Mortage-Logo.jpg': 'https://fbchomeloans.loanadministration.com/fbchomeloans/#/login',
  'Geo-Tech-Logo.jpg': 'https://geotechfl.com/',
  'Graffiti-Seafood-Logo.jpg': 'https://graffitiseafood.com/',
  'Healing_Hometown_Heroes-Logo.jpg': 'https://www.h3adventures.com/',
  'Medi-Solutions-Logo.jpg': 'https://www.medi-solutions.org/',
  'Parady-Logo.jpg': 'https://paradyfinancial.com/',
  'Phillips-Logo.jpg': 'https://www.phillipscjdr.com/',
  'RMBarrineau-logo.jpg': 'https://rmbarrineau.com/index.html',
  'Willie-Jewells-Logo.jpg': 'https://williejewells.com/',
  'Willie-Jewells.jpg': 'https://williejewells.com/',
  'willie-jewells.jpg': 'https://williejewells.com/',
  'williejewells.jpg': 'https://williejewells.com/',
  'McCrackens-Logo.jpg': 'https://mccrackenspub.com/',
  'McCrackens.jpg': 'https://mccrackenspub.com/',
  'mccrackens.jpg': 'https://mccrackenspub.com/',
  'Rustic-Roots-Salon.jpg': 'https://www.facebook.com/RusticRoots21/',
  'Rustic-Roots-Logo.jpg': 'https://www.facebook.com/RusticRoots21/',
  'rustic-roots-salon.jpg': 'https://www.facebook.com/RusticRoots21/',
  'Sasser-Services.jpg': 'https://nextdoor.com/pages/sasser-services-llc-jacksonville-fl/',
  'Sasser-Services-Logo.jpg': 'https://nextdoor.com/pages/sasser-services-llc-jacksonville-fl/',
  'sasser-services.jpg': 'https://nextdoor.com/pages/sasser-services-llc-jacksonville-fl/',
  'Verteks-Consulting-Logo.jpg': 'https://www.verteks.com/',
  'v1.jpg': 'https://www.cabralheatingandair.com/',
  'Cabral-Heating-and-Air-Conditioning.jpg': 'https://www.cabralheatingandair.com/',
  'Cabral-Heating-and-Air.jpg': 'https://www.cabralheatingandair.com/',
  'cabral-heating-and-air.jpg': 'https://www.cabralheatingandair.com/',
  'Cabral-Heating.jpg': 'https://www.cabralheatingandair.com/',
  'v2.jpg': 'https://williejewells.com/',
  'v3.jpg': 'https://mccrackenspub.com/',
  'v4.jpg': 'https://www.facebook.com/RusticRoots21/',
  'v5.jpg': 'https://nextdoor.com/pages/sasser-services-llc-jacksonville-fl/',
  'sc2-knights-of-columbus.jpg': 'https://www.floridakofc.org/',
  'sc3-The-Villages-Critters.jpg': 'https://critters.golfclub.net/cm/web/site/page.html?clubId=15823',
  'sc4-Band-of-Brothers-Logo.jpg': 'http://www.bobintv.com/',
  'sc6-new-england-patriots-club.jpg': 'https://fanclubs.patriots.com/club/new-england-patriots-club-of-the-villages',
  'sc8-the-villages-parrot-heads-club.jpg': 'https://www.villagesparrotheads.com/',
  'sc10-marine-corp-league.jpg': 'https://www.mcleaguelibrary.org/',
  'sc11-jewish-war-veterans.jpg': 'https://www.jwv.org/',
  'sc13-sons-of-the-american-legion.jpg': 'https://floridasons.org/',
  'sc15-starlight-players.jpg': 'https://www.thestarlightplayers.com/',
  'sc16-the-leesburg-partnership-inc.jpg': 'https://leesburgpartnership.com/',
  'sc17-Southern-Heat-Dragon-Boat.jpg': 'https://www.cabralheatingandair.com/',
  'sc19-wounded-war-heroes-copy.jpg': 'https://www.woundedwarheroes.org/author/wwh_4dm1n/',
  'sc20-MOAA.jpg': 'https://www.moaa.org/',
  '12-holiday-inn-express.jpg': 'https://www.ihg.com/holidayinnexpress/hotels/us/en/reservation',
  '11-lake-county-sheriffs-office.jpg': 'https://www.lcso.org/',
}

function fileNameToBusinessName(fileName: string) {
  return fileName
    .trim()
    .replace(/\.[^.]+$/, '')
    .replace(/^[\d_\-\s]+/, '')
    .replace(/[_\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function sponsorHasNoWebsite(fileName: string): boolean {
  const trimmed = fileName.trim()
  if (sponsorNoWebsiteFilenames.has(trimmed)) return true
  const label = fileNameToBusinessName(trimmed).toLowerCase()
  return label.includes('wildlife') && label.includes('service') && label.includes('maintenance')
}

function buildSponsorWebsite(fileName: string): string | null {
  const trimmed = fileName.trim()
  if (sponsorHasNoWebsite(trimmed)) return null
  if (sponsorWebsiteOverrides[trimmed]) return sponsorWebsiteOverrides[trimmed]
  const businessName = fileNameToBusinessName(trimmed)
  // Fallback to search results without Google redirect notice pages.
  return `https://www.google.com/search?q=${encodeURIComponent(businessName)}`
}

function resolveSponsorsDirectory() {
  const imagesRoot = path.join(process.cwd(), 'public', 'images')
  const preferred = ['Sponsors', 'Sponsers']

  for (const folder of preferred) {
    const abs = path.join(imagesRoot, folder)
    if (fs.existsSync(abs) && fs.statSync(abs).isDirectory()) {
      return { absDir: abs, publicDir: folder }
    }
  }

  if (fs.existsSync(imagesRoot)) {
    const entry = fs
      .readdirSync(imagesRoot, { withFileTypes: true })
      .find((d) => d.isDirectory() && ['sponsors', 'sponsers'].includes(d.name.toLowerCase()))

    if (entry) {
      return { absDir: path.join(imagesRoot, entry.name), publicDir: entry.name }
    }
  }

  return null
}

function getSponsorImages() {
  const resolved = resolveSponsorsDirectory()
  if (!resolved) {
    return { standard: [] as SponsorImage[], veteranOwned: [] as SponsorImage[] }
  }

  const files = fs
    .readdirSync(resolved.absDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))

  const all = files.map((file) => ({
    name: file,
    src: `/images/${resolved.publicDir}/${encodeURIComponent(file)}`,
    website: buildSponsorWebsite(file),
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

const sponsorCardClass =
  'rounded-xl border border-cvc-border bg-cvc-card p-4 shadow-lg transition-all'

function SponsorGrid({ items }: { items: SponsorImage[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {items.map((image) => {
        const label = fileNameToBusinessName(image.name)
        const inner = (
          <div className="relative h-32 w-full overflow-hidden rounded-lg bg-white">
            <Image
              src={image.src}
              alt={label}
              fill
              className="object-contain p-2"
            />
          </div>
        )
        if (!image.website) {
          return (
            <div
              key={image.name}
              className={`${sponsorCardClass} cursor-default`}
              aria-label={`Sponsor: ${label} (no website listed)`}
            >
              {inner}
            </div>
          )
        }
        return (
          <a
            key={image.name}
            href={image.website}
            target="_blank"
            rel="noopener noreferrer"
            className={`group ${sponsorCardClass} hover:-translate-y-0.5 hover:border-cvc-border-strong`}
            aria-label={`Visit sponsor website: ${label}`}
          >
            {inner}
          </a>
        )
      })}
    </div>
  )
}

export default function SponsorsPage() {
  const { standard, veteranOwned } = getSponsorImages()

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <h1 className="mb-4 text-4xl font-bold text-cvc-fg sm:text-5xl">
            Sponsors
          </h1>
          <p className="leading-relaxed text-cvc-fg-muted">
            We are grateful for the businesses, organizations, and community
            partners who stand with Combat Veterans to Careers. Click a card
            when a website is available.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-cvc-fg sm:text-3xl">
            Community &amp; Corporate Sponsors
          </h2>
          <SponsorGrid items={standard} />
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-semibold text-cvc-fg sm:text-3xl">
            Veteran Owned Sponsors
          </h2>
          <SponsorGrid items={veteranOwned} />
        </div>
      </section>
    </main>
  )
}
