import React from 'react'
import PortfolioHero from './components/PortfolioHero'
import CounterStats from './components/CounterStats'
import MasonryPortfolio from './components/MasonryPortfolio'
import VideoShowcase from './components/VideoShowcase'
import TestimonialsSection from '../Home/Components/TestimonialsSection'

const Portfolio = () => {
  return (
    <div>
        <PortfolioHero />
        <CounterStats />
        <MasonryPortfolio />
        <VideoShowcase />
        <TestimonialsSection />
    </div>
  )
}

export default Portfolio