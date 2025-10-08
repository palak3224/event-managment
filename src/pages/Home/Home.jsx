import React from 'react'
import HeroSection from './Components/Hero'
import FeaturedPortfolioTimeline from './Components/FeaturedPortfolioTimeline'
import ServicesOverview from './Components/ServicesOverview'
import Hero2 from './Components/Hero2'
import CateringCarousel from './Components/CateringCarousel'
import AboutSection from './Components/AboutSection'

function Home() {
  return (
    <div>
      {/* <HeroSection /> */}
      <Hero2 />
      <CateringCarousel />
      <AboutSection />
      {/* <ServicesOverview />
      <FeaturedPortfolioTimeline /> */}
    </div>
  )
}

export default Home