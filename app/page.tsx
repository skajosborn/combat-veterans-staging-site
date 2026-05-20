import Hero from '@/components/Hero'
import Programs from '@/components/Programs'
import FutureVision from '@/components/FutureVision'
import SuccessStories from '@/components/SuccessStories'
import Contact from '@/components/Contact'
import { showVision } from '@/lib/siteConfig'

export default function Home() {
  return (
    <main>
      <Hero />
      <Programs />
      {showVision && <FutureVision />}
      <SuccessStories />
      <Contact />
    </main>
  )
}
