import React from 'react'
import AboutHero from './components/AboutHero'
import WelcomeAbout from './components/WelcomeAbout'
import VideoScrollComponent from './components/VideoScrollComponent'
import HowWeWorkSection from './components/HowWeWorkSection'
import ServicesSection from './components/ServicesSection'

const About = () => {
  return (
    <div>
        <AboutHero />
        <WelcomeAbout />
        <VideoScrollComponent />
        <HowWeWorkSection />
        <ServicesSection />
    </div>
  )
}

export default About