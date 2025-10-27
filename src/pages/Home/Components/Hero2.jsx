import CircularGallery from '@/components/ui/CircularGallery'
import LightRays from '@/components/ui/LightRays'
import React from 'react'

import HeroImg1 from "@/assets/home/hero1.jpeg"
import HeroImg2 from "@/assets/home/hero2.jpeg"
import HeroImg3 from "@/assets/home/hero3.jpeg"
import HeroImg4 from "@/assets/home/hero4.jpeg"
import HeroImg5 from "@/assets/home/hero5.jpeg"


let showItems = [
    {
        image: HeroImg1,
        text: 'Weddings'
    },
    {
        image: HeroImg2,
        text: 'Sangeet',
    },
    {
        image: HeroImg3,
        text: 'Engagement',
    },
    {
        image: HeroImg4,
        text: 'Birthday',
    },
    {
        image: HeroImg5,
        text: 'Anniversary',
    },
]

const Hero2 = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-transparent border-b-2 border-[#9D5C63]">
      {/* Background Light Rays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#9D5C63"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* Heading */}
      <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E2723] text-center"
          style={{
            fontFamily: '"Texturina", serif',
            fontOpticalSizing: 'auto',
            fontWeight: 700,
            fontStyle: 'normal',
          }}
        >
          Making Your Moments Memorable
        </h1>
      </div>

      {/* Circular Gallery */}
      <div className="absolute bottom-0 left-0 w-full z-20">
        <div className="relative h-[600px]">
          <CircularGallery
            bend={6}
            textColor="#3E2723"
            borderRadius={0.05}
            scrollEase={0.02}
            scrollSpeed={4}
            items={showItems}
          />
        </div>
      </div>

      {/* Font import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
      `}</style>
    </div>
  )
}

export default Hero2