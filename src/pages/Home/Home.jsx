import React from 'react'
import HeroSection from './Components/Hero'
import FeaturedPortfolioTimeline from './Components/FeaturedPortfolioTimeline'
import ServicesOverview from './Components/ServicesOverview'

function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesOverview />
      <FeaturedPortfolioTimeline />
    </div>
  )
}

export default Home