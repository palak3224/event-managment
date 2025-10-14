import React from 'react'
import ServiceHero from './components/ServiceHero'
import ServicesMenu from './components/ServicesMenu'
import CoreValuesSection from './components/CoreValuesSection'
import CoreServices from './components/CoreServices'

const Services = () => {
  return (
    <div>
        {/* <ServiceHero /> */}
        <div className='h-screen'></div>

        <ServicesMenu />

        <CoreValuesSection />

        <CoreServices />



    </div>
  )
}

export default Services