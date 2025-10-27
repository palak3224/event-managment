import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const WelcomeAbout = () => {
  const sectionRef = useRef(null);
  const leftImageRef = useRef(null);
  const rightImage1Ref = useRef(null);
  const rightImage2Ref = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftImage = leftImageRef.current;
    const rightImage1 = rightImage1Ref.current;
    const rightImage2 = rightImage2Ref.current;

    // Parallax effect for left image (scrolls faster downward)
    gsap.to(leftImage, {
      y: 150,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Parallax effect for right top image (scrolls slower)
    gsap.to(rightImage1, {
      y: -80,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Parallax effect for right bottom image (scrolls faster)
    gsap.to(rightImage2, {
      y: 120,
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .. {
          font-family: '.', serif;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full bg-[#FAF8F5] py-16 md:py-24 px-4 md:px-8 lg:px-16 overflow-hidden"
      >
        <div className="max-w-[1400px] mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className=". text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#9D5C63] mb-4 md:mb-6 leading-tight">
              Welcome
              <br />
              to Khao Khilao Sonedo
            </h1>
            <p className=". text-lg sm:text-xl md:text-2xl text-[#9D5C63] italic font-light max-w-4xl mx-auto px-4">
              "Where celebrations meet culinary excellence in the heart of unforgettable moments"
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image - Tall */}
            <div className="lg:col-span-3 order-1">
              <div className="overflow-hidden h-[400px] md:h-[500px] lg:h-[600px]">
                <div ref={leftImageRef} className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
                    alt="Event venue"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Middle Content */}
            <div className="lg:col-span-6 order-3 lg:order-2 flex flex-col justify-center">
              <div className="bg-[#FFF0E5] p-8 rounded-lg shadow-sm">
                <p className="text-[#3E2723]/80 text-sm md:text-base leading-relaxed mb-6 md:mb-8 text-justify">
                  Owned by the passionate culinary artists since 2020, Khao Khilao Sonedo was created 
                  by master event planners and chefs who designed every experience according to the 
                  art of celebration. Today, we house exceptional catering services and create 
                  unforgettable memories through our dedication to perfection. From intimate 
                  gatherings to grand celebrations, every event is crafted with meticulous attention 
                  to detail, ensuring that each moment becomes a cherished memory for you and your guests.
                </p>

                <button className="group inline-flex items-center gap-3 text-[#3E2723] hover:text-[#7A3E46] transition-colors w-fit">
                  <span className=". text-base md:text-lg italic">
                    Discover the Events
                  </span>
                  <ArrowRight className="w-5 h-5 text-[#9D5C63] group-hover:translate-x-2 transition-transform duration-300" />
                </button>
              </div>
            </div>

            {/* Right Images - Two Stacked */}
            <div className="lg:col-span-3 order-2 lg:order-3 flex flex-col ">
              {/* Small Height Image */}
              <div className="overflow-hidden h-[250px] md:h-[280px]">
                <div ref={rightImage1Ref} className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
                    alt="Event decoration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Larger Height Image */}
              <div className="overflow-hidden h-[300px] md:h-[350px]">
                <div ref={rightImage2Ref} className="w-full h-full">
                  <img
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
                    alt="Celebration event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WelcomeAbout;