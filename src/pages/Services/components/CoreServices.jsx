import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
  {
    id: 1,
    title: 'Corporate Events',
    description: 'Professional conferences, seminars, and team building activities tailored to your business needs.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80',
  },
  {
    id: 2,
    title: 'Wedding Planning',
    description: 'Creating unforgettable moments with meticulous attention to every detail of your special day.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  },
  {
    id: 3,
    title: 'Social Gatherings',
    description: 'Birthdays, anniversaries, and celebrations designed to bring people together in style.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80',
  },
  {
    id: 4,
    title: 'Product Launches',
    description: 'Strategic event execution to showcase your brand and products with maximum impact.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80',
  },
  {
    id: 5,
    title: 'Exhibitions & Trade Shows',
    description: 'Complete booth design, setup, and management for successful trade show experiences.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },
  {
    id: 6,
    title: 'Concerts & Entertainment',
    description: 'Full-scale production management for memorable live music and entertainment events.',
    image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80',
  },
];

export default function CoreServices() {
  const sectionRef = useRef(null);
  const firstRowRef = useRef([]);
  const secondRowRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // First row animation
      firstRowRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 100 + (index * 60),
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'center center',
              scrub: 1.5,
            },
          }
        );
      });

      // Second row animation
      secondRowRef.current.forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            y: 100 + (index * 60),
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              end: 'center center',
              scrub: 1.5,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-white py-24 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .dark-purple {
          background-color: #2d1b4e;
        }
        
        .golden {
          color: #d4af37;
        }
        
        .golden-bg {
          background-color: #d4af37;
        }
        
        .text-dark-purple {
          color: #2d1b4e;
        }
        
        .texturina {
          font-family: 'Texturina', serif;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-dark-purple texturina mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 golden-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Crafting exceptional experiences that exceed expectations
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {servicesData.slice(0, 3).map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (firstRowRef.current[index] = el)}
              className="bg-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl group"
            >
              {/* Image - 60% */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content - 40% */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-purple texturina mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center golden cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.slice(3, 6).map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (secondRowRef.current[index] = el)}
              className="bg-gray-100 overflow-hidden transition-all duration-500 hover:shadow-2xl group"
            >
              {/* Image - 60% */}
              <div className="h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content - 40% */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-dark-purple texturina mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 flex items-center golden cursor-pointer group-hover:translate-x-2 transition-transform duration-300">
                  <span className="font-semibold">Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}