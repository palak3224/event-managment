import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollComponent() {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;

    // Autoplay video on mount
    video.play().catch(err => console.log('Autoplay prevented:', err));

    // Initial state
    gsap.set(video, {
      width: '70vw',
      height: '70vh',
      borderRadius: '200px'
    });

    // Scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: '+=300',
        scrub: 1,
        pin: true
      }
    });

    tl.to(video, {
      width: '100vw',
      height: '100vh',
      borderRadius: '0px',
      ease: 'none'
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        video {
          object-fit: cover;
        }
      `}</style>
      <div ref={containerRef} className="bg-[#FAF8F5]" style={{ minHeight: '100vh' }}>
        <div className="h-screen flex items-center justify-center relative">
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/ddnb10zkq/video/upload/v1760062884/WhatsApp_Video_2025-10-07_at_10.53.36_asy7zr.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="object-cover"
          />
        </div>
      </div>

    </>
  );
}