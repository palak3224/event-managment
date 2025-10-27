import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const videoContainer = videoContainerRef.current;
    const video = videoRef.current;
    const section = sectionRef.current;

    // Create timeline for video shrink animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=200',
        scrub: 1,
        pin: true,
        pinSpacing: false,
        onUpdate: (self) => {
          setScrollProgress(self.progress);
        }
      }
    });

    // Animate video container
    tl.to(videoContainer, {
      width: '80%',
      height: '70vh',
      borderRadius: '0px',
      ease: 'power2.inOut'
    });

    // Animate video overlay opacity
    tl.to('.video-overlay', {
      opacity: 0.5,
      ease: 'power2.inOut'
    }, 0);

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative w-full h-screen bg-[#FAF8F5] overflow-hidden"
      >
        {/* Video Container */}
        <div
          ref={videoContainerRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full overflow-hidden"
        >
          {/* Video */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://res.cloudinary.com/ddnb10zkq/video/upload/v1759982414/Wedding_Decoration_Dubai._Event_Rentals_Dubai._Wedding_Planner_Dubai._Wedding_at_Kempinski_The_Palm_ggphlu.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          {/* Video Overlay */}
          <div className="video-overlay absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/40 pointer-events-none" />

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-[#3E2723] pointer-events-none px-4">
            <h1 className="texturina text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-6 text-[#9D5C63]">
              About Our Story
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl text-[#3E2723]/90 leading-relaxed">
              Crafting unforgettable experiences through passion, creativity, and dedication
            </p>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-2">
                <p className="text-sm md:text-base text-[#3E2723]/90 texturina font-light tracking-wider">
                  Scroll to explore
                </p>
                <div className="w-6 h-10 border-2 border-[#3E2723]/50 rounded-full flex items-start justify-center p-2">
                  <div className="w-1.5 h-3 bg-[#3E2723]/70 rounded-full animate-scroll" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;