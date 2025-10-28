import Hero2 from './Components/Hero2'
import CateringCarousel from './Components/CateringCarousel'
import AboutSection from './Components/AboutSection'
import ExclusiveSection from './Components/ExclusiveSection'
import TestimonialsSection from './Components/TestimonialsSection'
import ContactFormSection from './Components/ContactFormSection'
import Hero3 from './Components/Hero3'

function Home() {
  return (
    <div>
      {/* <Hero2 /> */}
      <Hero3 />
      <CateringCarousel />
      <AboutSection />
      <ExclusiveSection />
      <TestimonialsSection />
      <ContactFormSection />
    </div>
  )
}

export default Home