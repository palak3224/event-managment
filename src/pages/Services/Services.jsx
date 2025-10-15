import React from 'react'
import ServiceHero from './components/ServiceHero'
import ServicesMenu from './components/ServicesMenu'
import CoreValuesSection from './components/CoreValuesSection'
import CoreServices from './components/CoreServices'
import ContactFormSection from '../Home/Components/ContactFormSection'

const Services = () => {
  return (
    <div>
        <ServiceHero />

        <ServicesMenu />

        <CoreValuesSection />

        <CoreServices />

        <ContactFormSection />
    </div>
  )
}

export default Services