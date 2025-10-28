import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const heroImages = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80',
    title: 'Corporate Events',
    subtitle: 'Professional Excellence'
  },
  {
    id: 2,
    url: 'https://triptradition.com/wp-content/uploads/2025/02/Destination-Wedding-at-Summit-Wedding-Resort-Rishikesh-02.jpg',
    title: 'Wedding Ceremonies',
    subtitle: 'Moments of Forever'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=80',
    title: 'Social Celebrations',
    subtitle: 'Creating Memories'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1920&q=80',
    title: 'Grand Exhibitions',
    subtitle: 'Spectacular Showcases'
  }
];

export default function ServicesHero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const oldImageRef = useRef(null);
  const newImageRef = useRef(null);
  const overlayRef = useRef(null);
  const timeoutRef = useRef(null);
  const isAnimatingRef = useRef(false);

  useEffect(() => {
    const changeSlide = () => {
      if (isAnimatingRef.current) return;
      
      isAnimatingRef.current = true;
      const nextIdx = (activeIndex + 1) % heroImages.length;
      setNextIndex(nextIdx);
      
      const tl = gsap.timeline({
        onComplete: () => {
          setActiveIndex(nextIdx);
          isAnimatingRef.current = false;
        }
      });

      tl.to(overlayRef.current, {
        opacity: 0.7,
        duration: 1,
        ease: 'power2.inOut'
      });

      tl.fromTo(
        newImageRef.current,
        {
          y: '100%',
          opacity: 0
        },
        {
          y: '0%',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.out'
        },
        '-=0.3'
      );

      tl.set(overlayRef.current, {
        opacity: 0
      });
      
      tl.set(newImageRef.current, {
        y: '100%',
        opacity: 0
      });
    };

    timeoutRef.current = setTimeout(changeSlide, 4000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeIndex]);

  const handleThumbnailClick = (index) => {
    if (index === activeIndex || isAnimatingRef.current) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    isAnimatingRef.current = true;
    setNextIndex(index);

    const tl = gsap.timeline({
      onComplete: () => {
        setActiveIndex(index);
        isAnimatingRef.current = false;
      }
    });

    tl.to(overlayRef.current, {
      opacity: 0.7,
      duration: 1,
      ease: 'power2.inOut'
    });

    tl.fromTo(
      newImageRef.current,
      {
        y: '100%',
        opacity: 0
      },
      {
        y: '0%',
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out'
      },
      '-=0.3'
    );

    tl.set(overlayRef.current, {
      opacity: 0
    });
    
    tl.set(newImageRef.current, {
      y: '100%',
      opacity: 0
    });
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#FAF8F5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .. {
          font-family: '.', serif;
        }

        .thumbnail-active {
          transform: scale(1.1);
          box-shadow: 0 0 0 4px #9D5C63, 0 0 20px rgba(157, 92, 99, 0.5);
        }

        .thumbnail-inactive {
          opacity: 0.6;
        }

        .thumbnail-inactive:hover {
          opacity: 1;
          transform: scale(1.05);
        }
      `}</style>

      {/* Main Background Images Container */}
      <div className="absolute inset-0">
        {/* Old/Current Image */}
        <div 
          ref={oldImageRef}
          className="absolute inset-0"
        >
          <img
            src={heroImages[activeIndex].url}
            alt={heroImages[activeIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div 
            ref={overlayRef}
            className="absolute inset-0 bg-[#3E2723] opacity-0"
          />
        </div>

        {/* New Image (slides from bottom) */}
        <div 
          ref={newImageRef}
          className="absolute inset-0"
          style={{ transform: 'translateY(100%)', opacity: 0 }}
        >
          <img
            src={heroImages[nextIndex].url}
            alt={heroImages[nextIndex].title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Gradient Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5]/70 via-[#FAF8F5]/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <h1 className="text-6xl md:text-8xl font-bold text-[#3E2723] . mb-4 text-center">
          {heroImages[activeIndex].title}
        </h1>
        <p className="text-2xl md:text-3xl text-[#9D5C63] . text-center">
          {heroImages[activeIndex].subtitle}
        </p>
      </div>

      {/* Thumbnail Preview Bar */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex gap-4">
        {heroImages.map((image, index) => (
          <button
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`
              w-20 h-20 md:w-24 md:h-24 
              overflow-hidden 
              border-2 
              transition-all 
              duration-500
              cursor-pointer
              ${
                index === activeIndex
                  ? 'thumbnail-active border-[#9D5C63]'
                  : 'thumbnail-inactive border-[#3E2723]/50 hover:border-[#3E2723]'
              }
            `}
          >
            <img
              src={image.url}
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Progress Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`
              h-1 
              transition-all 
              duration-500
              ${
                index === activeIndex
                  ? 'w-12 bg-[#9D5C63]'
                  : 'w-8 bg-[#3E2723]/30'
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}