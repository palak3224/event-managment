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
    image: 'https://eventsmanagementkerala.com/wp-content/uploads/2022/09/WhatsApp-Image-2022-08-26-at-7.48.10-PM.webp',
  },
  {
    id: 3,
    title: 'Social Gatherings',
    description: 'Birthdays, anniversaries, and celebrations designed to bring people together in style.',
    image: 'https://res.cloudinary.com/ddnb10zkq/image/upload/v1761654478/wmremove-transformed_lmxvco.jpg',
  },
  {
    id: 4,
    title: 'Product Launches',
    description: 'Strategic event execution to showcase your brand and products with maximum impact.',
    image: 'https://vrweddingplanners.net/wp-content/uploads/2020/10/entertainment-7.jpg',
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
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        
        gsap.fromTo(
          card,
          {
            y: 80,
            opacity: 0,
            scale: 0.9,
          },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'top 60%',
              toggleActions: 'play none none reverse',
            },
            delay: (index % 3) * 0.15,
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full min-h-screen bg-[#FAF8F5] py-24 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .. {
          font-family: '.', serif;
        }

        .service-card {
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(157, 92, 99, 0.1), transparent);
          transition: left 0.6s ease;
          z-index: 1;
        }

        .service-card:hover::before {
          left: 100%;
        }

        .service-card::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 2px solid transparent;
          transition: border-color 0.4s ease;
          pointer-events: none;
          z-index: 2;
        }

        .service-card:hover::after {
          border-color: #9D5C63;
        }

        .image-container {
          position: relative;
          overflow: hidden;
        }

        .image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(62, 39, 35, 0.7) 100%);
          opacity: 0;
          transition: opacity 0.5s ease;
        }

        .service-card:hover .image-overlay {
          opacity: 1;
        }

        .card-number {
          position: absolute;
          top: 1rem;
          right: 1rem;
          width: 50px;
          height: 50px;
          background: rgba(157, 92, 99, 0.95);
          color: #FFF0E5;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 1.25rem;
          clip-path: polygon(0 0, 100% 0, 100% 70%, 70% 100%, 0 100%);
          z-index: 3;
          transition: transform 0.3s ease;
        }

        .service-card:hover .card-number {
          transform: scale(1.1) rotate(5deg);
        }

        .learn-more-btn {
          position: relative;
          overflow: hidden;
        }

        .learn-more-btn::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: #9D5C63;
          transition: width 0.3s ease;
        }

        .service-card:hover .learn-more-btn::before {
          width: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold mb-4">
            What We Offer
          </p>
          <h2 className="text-5xl md:text-6xl font-bold text-[#3E2723] . mb-4">
            Our Core Services
          </h2>
          <div className="w-24 h-1 bg-[#9D5C63] mx-auto mb-6"></div>
          <p className="text-xl text-[#3E2723]/80 max-w-2xl mx-auto">
            Crafting exceptional experiences that exceed expectations
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="service-card bg-[#FFF0E5] transition-all duration-500 hover:shadow-[0_20px_50px_rgba(157,92,99,0.15)] group cursor-pointer"
            >
              {/* Card Number */}
              <div className="card-number .">
                {String(index + 1).padStart(2, '0')}
              </div>

              {/* Image - 60% */}
              <div className="image-container h-64 relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="image-overlay"></div>
              </div>

              {/* Content - 40% */}
              <div className="p-8 relative z-10">
                <h3 className="text-2xl font-bold text-[#3E2723] . mb-4 group-hover:text-[#9D5C63] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-[#3E2723]/80 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>
                <div className="learn-more-btn flex items-center text-[#9D5C63] font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg
                    className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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