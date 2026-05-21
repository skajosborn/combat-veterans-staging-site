/** Curated sponsor logos — order matches the live sponsors page layout. */

export type SponsorSectionId = 'corporate' | 'social_clubs' | 'community_partners' | 'veteran_owned'

export type SponsorSection = {
  id: SponsorSectionId
  title: string
  files: readonly string[]
}

export const SPONSOR_SECTIONS: readonly SponsorSection[] = [
  {
    id: 'corporate',
    title: 'Community & Corporate Sponsors',
    files: [
      'Parady-Logo.jpg',
      '15-Ford-Press-logo.jpg',
      '3_tee_it_up.jpg',
      '4_bank_of_america.jpg',
      '5_walmart.jpg',
      '7_city_fire_logo.jpg',
      '10-eco-coolers.jpg',
      '11-lake-county-sheriffs-office.jpg',
      '12-holiday-inn-express.jpg',
      '13-Hunter-Signs.jpg',
      '17-style-magazine-logo.jpg',
      '18-vann-gannaway.jpg',
      '19-gourmet-today-logo.jpg',
      '20-eagle-buick-gmc-logo.jpg',
      '22-realty-executives.jpg',
      '21-pats-pawn-and-gun-shop-logo.jpg',
      '23-wildwood_tire_co.jpg',
      '25-bayou-signs-outdoor.jpg',
      'FBC-Mortage-Logo.jpg',
      'Aquatic-Logo.jpg',
      'Phillips-Logo.jpg',
      '27-liquid-lights.jpg',
      '28-Lake-Glass-and-Mirror-Logo.jpg',
    ],
  },
  {
    id: 'social_clubs',
    title: 'Social Clubs',
    files: [
      'sc2-knights-of-columbus.jpg',
      'sc3-The-Villages-Critters.jpg',
      'sc8-the-villages-parrot-heads-club.jpg',
      'sc4-Band-of-Brothers-Logo.jpg',
      'sc5-Mid-Atlantic-Club.jpg',
      'sc6-new-england-patriots-club.jpg',
      'sc7-South-Jersey-Club.jpg',
      'sc9-The-Villages-Shag-Club.jpg',
      'sc10-marine-corp-league.jpg',
      'sc11-jewish-war-veterans.jpg',
      'sc12-Howey-in-the-HIlls-Garden-Civic-Club.jpg',
      'sc13-sons-of-the-american-legion.jpg',
    ],
  },
  {
    id: 'community_partners',
    title: 'Community Partners',
    files: [
      'sc17-Southern-Heat-Dragon-Boat.jpg',
      'sc19-wounded-war-heroes-copy.jpg',
      'sc20-MOAA.jpg',
      'sc14-Lake-Sumter-Counties-Chapter-Inc..jpg',
    ],
  },
  {
    id: 'veteran_owned',
    title: 'Veteran Owned Sponsors',
    files: ['v1.jpg', 'v2.jpg', 'v3.jpg'],
  },
] as const

export const ALLOWED_SPONSOR_FILES = new Set(
  SPONSOR_SECTIONS.flatMap((section) => section.files)
)
