import fs from 'node:fs'
import path from 'node:path'
import Image from 'next/image'
import SectionTitle from '@/components/SectionTitle'
import { ALLOWED_SPONSOR_FILES, SPONSOR_SECTIONS } from '@/lib/sponsors'

type SponsorImage = {
  name: string
  src: string
  website: string | null
}

const sponsorWebsiteOverrides: Record<string, string> = {
  '4_bank_of_america.jpg': 'https://www.bankofamerica.com/',
  '5_walmart.jpg': 'https://www.walmart.com/',
  '3_tee_it_up.jpg': 'https://teeitupgolfoviedo.wordpress.com/',
  '7_city_fire_logo.jpg': 'https://www.cityfirethevillages.com/',
  '10-eco-coolers.jpg': 'https://eco-outfitters.com/',
  '11-lake-county-sheriffs-office.jpg': 'https://www.lcso.org/',
  '12-holiday-inn-express.jpg': 'https://www.ihg.com/holidayinnexpress/hotels/us/en/reservation',
  '13-Hunter-Signs.jpg': 'https://www.huntersigns.com/',
  '15-Ford-Press-logo.jpg': 'https://www.fordpress.com/',
  '17-style-magazine-logo.jpg': 'https://www.stylemagazines.com/lake-sumter/',
  '18-vann-gannaway.jpg': 'https://www.vanngannawaychevrolet.com/',
  '19-gourmet-today-logo.jpg': 'https://www.gourmettodaymagazine.com/',
  '20-eagle-buick-gmc-logo.jpg': 'https://www.eaglebuickgmc.com/',
  '21-pats-pawn-and-gun-shop-logo.jpg': 'https://www.patspawnandgun.com/',
  '22-realty-executives.jpg': 'https://www.buysellthevillages.com/',
  '23-wildwood_tire_co.jpg': 'https://www.wildwoodtireco.com/',
  '25-bayou-signs-outdoor.jpg': 'https://www.bayousignsoutdoor.com/',
  'Aquatic-Logo.jpg': 'https://aquaticbath.com/',
  'FBC-Mortage-Logo.jpg': 'https://fbchomeloans.loanadministration.com/fbchomeloans/#/login',
  'Parady-Logo.jpg': 'https://paradyfinancial.com/',
  'Phillips-Logo.jpg': 'https://www.phillipscjdr.com/',
  '27-liquid-lights.jpg': 'https://www.liquidlightsleds.com/',
  '28-Lake-Glass-and-Mirror-Logo.jpg': 'https://www.lakeglassandmirror.com/',
  'sc2-knights-of-columbus.jpg': 'https://www.floridakofc.org/',
  'sc3-The-Villages-Critters.jpg': 'https://critters.golfclub.net/cm/web/site/page.html?clubId=15823',
  'sc4-Band-of-Brothers-Logo.jpg': 'http://www.bobintv.com/',
  'sc6-new-england-patriots-club.jpg': 'https://fanclubs.patriots.com/club/new-england-patriots-club-of-the-villages',
  'sc8-the-villages-parrot-heads-club.jpg': 'https://www.villagesparrotheads.com/',
  'sc10-marine-corp-league.jpg': 'https://www.mcleaguelibrary.org/',
  'sc11-jewish-war-veterans.jpg': 'https://www.jwv.org/',
  'sc13-sons-of-the-american-legion.jpg': 'https://floridasons.org/',
  'sc17-Southern-Heat-Dragon-Boat.jpg': 'https://www.southernheatdragonboat.com/',
  'sc19-wounded-war-heroes-copy.jpg': 'https://www.woundedwarheroes.org/',
  'sc20-MOAA.jpg': 'https://www.moaa.org/',
  'v1.jpg': 'https://www.cabralheatingandair.com/',
  'v2.jpg': 'https://williejewells.com/',
  'v3.jpg': 'https://mccrackenspub.com/',
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

function buildSponsorWebsite(fileName: string): string | null {
  const trimmed = fileName.trim()
  if (sponsorWebsiteOverrides[trimmed]) return sponsorWebsiteOverrides[trimmed]
  const businessName = fileNameToBusinessName(trimmed)
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

function sponsorImage(fileName: string, publicDir: string): SponsorImage | null {
  if (!ALLOWED_SPONSOR_FILES.has(fileName)) return null
  return {
    name: fileName,
    src: `/images/${publicDir}/${encodeURIComponent(fileName)}`,
    website: buildSponsorWebsite(fileName),
  }
}

function getSponsorSections() {
  const resolved = resolveSponsorsDirectory()
  if (!resolved) {
    return SPONSOR_SECTIONS.map((section) => ({ ...section, items: [] as SponsorImage[] }))
  }

  const onDisk = new Set(
    fs
      .readdirSync(resolved.absDir)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file) && ALLOWED_SPONSOR_FILES.has(file))
  )

  return SPONSOR_SECTIONS.map((section) => ({
    id: section.id,
    title: section.title,
    items: section.files
      .filter((file) => onDisk.has(file))
      .map((file) => sponsorImage(file, resolved.publicDir))
      .filter((item): item is SponsorImage => item !== null),
  })).filter((section) => section.items.length > 0)
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
            <Image src={image.src} alt={label} fill className="object-contain p-2" />
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
  const sections = getSponsorSections()

  return (
    <main className="min-h-screen bg-cvc-page pb-16 pt-24">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 rounded-2xl border border-cvc-border bg-cvc-card p-8 sm:p-10">
          <SectionTitle
            as="h1"
            title="Sponsors"
            size="page"
            align="center"
            blueprintStarsBackdropClassName="bg-cvc-card"
            subtitle={
              <p className="leading-relaxed text-cvc-fg-muted">
                We are grateful for the businesses, organizations, and community partners who stand with Combat
                Veterans to Careers. Click a card when a website is available.
              </p>
            }
          />
        </div>

        {sections.map((section) => (
          <div key={section.id} className="mb-12 last:mb-0">
            <SectionTitle title={section.title} size="subsection" align="left" className="mb-4" />
            <SponsorGrid items={section.items} />
          </div>
        ))}
      </section>
    </main>
  )
}
