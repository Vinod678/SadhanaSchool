import Navbar from '../layouts/Navbar'
import Footer from '../layouts/Footer'
import HeroSection from '../sections/HeroSection'
import FeaturesSection from '../sections/FeaturesSection'
import AboutSection from '../sections/AboutSection'
import StatsSection from '../sections/StatsSection'
import AchievementsSection from '../sections/AchievementsSection'
import FacilitiesSection from '../sections/FacilitiesSection'
import GallerySection from '../sections/GallerySection'
import NewsSection from '../sections/NewsSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <StatsSection />
        <AchievementsSection />
        <FacilitiesSection />
        <GallerySection />
        <NewsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
