import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CateringCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Destination Wedding",
      description: "Created in style",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80"
    },
    {
      id: 2,
      title: "Private Luxury Event",
      description: "Exclusive occasions",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
    },
    {
      id: 3,
      title: "Corporate Gatherings",
      description: "Professional excellence",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80"
    },
    {
      id: 4,
      title: "Intimate Celebrations",
      description: "Personalized perfection",
      image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80"
    },
    {
      id: 5,
      title: "Grand Receptions",
      description: "Opulent experiences",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
    },
    {
      id: 6,
      title: "Garden Soirées",
      description: "Natural elegance",
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80"
    }
  ];

  const visibleCards = typeof window !== 'undefined' && window.innerWidth < 768 ? 1 : 
                       typeof window !== 'undefined' && window.innerWidth < 1024 ? 2 : 3;
  const maxIndex = Math.max(0, services.length - visibleCards);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const getVisibleServices = () => {
    return services.slice(currentIndex, currentIndex + visibleCards);
  };

  return (
    <div className="w-full bg-gray-100 py-2 md:py-6 px-2 md:px-6">
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
        
        .golden-border {
          border-color: #d4af37;
        }
      `}</style>

      <div className='w-full bg-white mb-6 md:mb-8 px-12 py-16 rounded-3xl'>
        <div className="max-w-8xl mx-auto">
            <h1 
            className="text-4xl md:text-5xl lg:text-5xl text-center mb-6 md:mb-8 px-4 golden"
            style={{ 
                fontFamily: 'Texturina, serif',
                fontWeight: 600,
                fontStyle: 'italic'
            }}
            >
            Elevate your occasion with exquisite catering.
            </h1>
            
            <div className="flex justify-center mb-12 md:mb-16">
            <div 
                className="dark-purple px-6 py-2 rounded-full border-2 golden-border inline-block"
            >
                <p 
                className="golden text-sm md:text-base tracking-wide"
                style={{ 
                    fontFamily: 'Texturina, serif',
                    fontWeight: 500
                }}
                >
                Our Signature Services
                </p>
            </div>
            </div>

            <div className="relative px-8 md:px-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
                {getVisibleServices().map((service, index) => (
                <motion.div
                    key={service.id}
                    className="relative h-80 md:h-96 overflow-hidden cursor-pointer rounded-2xl"
                    style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}
                    onMouseEnter={() => setHoveredCard(service.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    />
                    
                    <motion.div
                    className="absolute inset-0 dark-purple flex flex-col items-center justify-center p-6 md:p-8"
                    initial={{ opacity: 0.85 }}
                    animate={{ opacity: hoveredCard === service.id ? 0 : 0.85 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    />
                    
                    <motion.div
                    className="absolute inset-0 flex flex-col items-center justify-center p-6 md:p-8 pointer-events-none"
                    initial={{ opacity: 1 }}
                    animate={{ opacity: hoveredCard === service.id ? 0 : 1 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                    <h3 
                        className="golden text-2xl md:text-3xl mb-3 text-center"
                        style={{ 
                        fontFamily: 'Texturina, serif',
                        fontWeight: 600
                        }}
                    >
                        {service.title}
                    </h3>
                    <p 
                        className="golden text-sm md:text-base tracking-wide text-center opacity-90"
                        style={{ 
                        fontFamily: 'Texturina, serif',
                        fontWeight: 400
                        }}
                    >
                        {service.description}
                    </p>
                    </motion.div>
                </motion.div>
                ))}
            </div>

            <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 w-10 h-10 md:w-12 md:h-12 rounded-full dark-purple flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity border-2 golden-border"
                style={{ boxShadow: '0 4px 12px rgba(45, 27, 78, 0.3)' }}
            >
                <ChevronLeft size={20} className="golden" style={{ color: '#d4af37' }} />
            </button>

            <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 w-10 h-10 md:w-12 md:h-12 rounded-full dark-purple flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity border-2 golden-border"
                style={{ boxShadow: '0 4px 12px rgba(45, 27, 78, 0.3)' }}
            >
                <ChevronRight size={20} className="golden" style={{ color: '#d4af37' }} />
            </button>

            <div className="flex justify-center gap-3 mt-8 md:mt-10">
                {[...Array(maxIndex + 1)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className="transition-all rounded-full border-2"
                    style={{
                    width: currentIndex === index ? '32px' : '12px',
                    height: '12px',
                    backgroundColor: currentIndex === index ? '#d4af37' : 'transparent',
                    borderColor: '#d4af37'
                    }}
                />
                ))}
            </div>
            </div>
        </div>
      </div>
      
    </div>
  );
};

export default CateringCarousel;