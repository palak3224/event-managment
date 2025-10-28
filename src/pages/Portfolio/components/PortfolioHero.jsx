import { useState } from 'react';
import CardSwap, { Card } from "@/components/ui/CardSwap";

const portfolioProjects = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    category: "Wedding",
    title: "Royal Wedding Celebration",
    guests: "500+ Guests"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    category: "Corporate",
    title: "Tech Summit 2024",
    guests: "1000+ Attendees"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    category: "Entertainment",
    title: "Music Festival Night",
    guests: "5000+ Audience"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    category: "Launch Event",
    title: "Product Launch Gala",
    guests: "300+ Guests"
  }
];

const PortfolioHero = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="relative w-full bg-[#FAF8F5] overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .. {
          font-family: '.', serif;
        }

        .portfolio-card-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
        }

        .portfolio-card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(62, 39, 35, 0.7), rgba(62, 39, 35, 0.4));
        }

        .portfolio-card-content {
          position: relative;
          z-index: 2;
        }

        .mobile-carousel {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
        }

        .mobile-carousel::-webkit-scrollbar {
          display: none;
        }

        .carousel-item {
          scroll-snap-align: center;
        }
      `}</style>

      {/* Mobile & Tablet Layout */}
      <div className="block lg:hidden px-4 py-12 min-h-screen">
        {/* Header */}
        <div className="space-y-6 mb-12">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-[0.2em] text-[#9D5C63] font-semibold px-3 py-1.5 border-2 border-[#9D5C63] rounded-full">
              Our Portfolio
            </span>
          </div>

          <div className="space-y-3">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#3E2723] . leading-tight">
              Transforming Visions Into
              <span className="text-[#9D5C63] block mt-2">Memorable Events</span>
            </h1>
            <div className="w-24 h-1 bg-[#9D5C63]"></div>
          </div>
        </div>

        {/* Horizontal Scroll Carousel */}
        <div className="relative">
          <div className="mobile-carousel flex gap-4 overflow-x-auto pb-4">
            {portfolioProjects.map((project, index) => (
              <div
                key={project.id}
                className="carousel-item flex-shrink-0 w-[85%] sm:w-[70%] md:w-[60%]"
              >
                <div className="relative h-[400px] sm:h-[450px] rounded-xl overflow-hidden shadow-lg">
                  {/* Background Image */}
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  ></div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3E2723]/90 via-[#3E2723]/40 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="relative h-full p-6 flex flex-col justify-between">
                    {/* Category Badge */}
                    <div>
                      <span className="inline-block px-4 py-2 bg-[#3E2723]/20 backdrop-blur-sm rounded-full text-[#FFF0E5] text-sm font-semibold border border-[#FFF0E5]/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Bottom Info */}
                    <div className="space-y-2">
                      <h3 className="text-2xl sm:text-3xl font-bold text-[#FFF0E5] . leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-[#FFF0E5]/90 text-lg font-semibold">
                        {project.guests}
                      </p>
                      
                      {/* View Project Button */}
                      <button className="mt-4 flex items-center gap-2 text-[#FFF0E5] font-semibold group">
                        <span>View Project</span>
                        <svg
                          className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
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
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {portfolioProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeSlide 
                    ? 'w-8 bg-[#9D5C63]' 
                    : 'w-2 bg-[#3E2723]/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Grid - Mobile */}
        <div className="grid grid-cols-2 gap-4 mt-12">
          <div className="text-center p-4 bg-[#FFF0E5] rounded-lg">
            <div className="text-3xl font-bold text-[#9D5C63] .">500+</div>
            <p className="text-sm text-[#3E2723]/80 mt-1">Events</p>
          </div>
          <div className="text-center p-4 bg-[#FFF0E5] rounded-lg">
            <div className="text-3xl font-bold text-[#9D5C63] .">50K+</div>
            <p className="text-sm text-[#3E2723]/80 mt-1">Attendees</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Original */}
      <div className="hidden lg:block min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 lg:pr-12">
              <div className="inline-block">
                <span className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold px-4 py-2 border-2 border-[#9D5C63] rounded-full">
                  Our Portfolio
                </span>
              </div>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E2723] . leading-tight">
                  Transforming Visions Into
                  <span className="text-[#9D5C63] block mt-2">Memorable Events</span>
                </h1>
                <div className="w-32 h-1 bg-[#9D5C63]"></div>
              </div>
            </div>

            {/* Right Content - CardSwap */}
            <div className="relative w-full h-[100vh] flex items-center">
              <CardSwap
                cardDistance={60}
                verticalDistance={70}
                delay={5000}
                pauseOnHover={false}
              >
                {portfolioProjects.map((project) => (
                  <Card key={project.id}>
                    <div className="portfolio-card-bg" style={{ backgroundImage: `url(${project.image})` }}></div>
                    <div className="portfolio-card-overlay"></div>
                    <div className="portfolio-card-content w-full h-full p-8 flex flex-col justify-between">
                      <div>
                        <span className="px-4 py-2 bg-[#3E2723]/20 backdrop-blur-sm rounded-full text-[#FFF0E5] text-sm font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-[#FFF0E5] . mb-2">{project.title}</h3>
                        <p className="text-[#FFF0E5]/90">{project.guests}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;