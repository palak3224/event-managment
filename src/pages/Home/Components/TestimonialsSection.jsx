import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Anderson",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      rating: 5,
      review: "I've attended countless events, but the food at this one—catered by Khao Khilao Sone Do—was something else. Every dish was bursting with flavor, and the presentation? Absolutely top-class. Hats off to the team for creating such a memorable experience.",
      company: "CEO, Anderson Enterprises"
    },
    {
      id: 2,
      name: "Michael Chen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      rating: 5,
      review: "Khao Khilao Sone Do brought a level of culinary elegance that perfectly complemented our luxury showcase. Their attention to detail and gourmet execution left our guests truly impressed. The service was impeccable from start to finish.",
      company: "Director, Chen Global"
    },
    {
      id: 3,
      name: "Emily Roberts",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
      rating: 5,
      review: "Absolutely loved the ambience and the food quality. Every dish was thoughtfully curated and the service was top-notch. A perfect spot for a fine dining experience that exceeded all our expectations.",
      company: "Founder, Roberts & Co"
    },
    {
      id: 4,
      name: "David Martinez",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
      rating: 5,
      review: "The event management team orchestrated everything flawlessly. From the elegant decor to the exceptional catering, every detail was perfection. Our corporate gala was a resounding success thanks to their expertise.",
      company: "VP, Martinez Industries"
    },
    {
      id: 5,
      name: "Jessica Thompson",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
      rating: 5,
      review: "An unforgettable wedding celebration made possible by this incredible team. They transformed our vision into reality with such grace and professionalism. Every guest was raving about the stunning arrangements.",
      company: "Marketing Director, Thompson Media"
    }
  ];

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const getVisibleTestimonials = () => {
    const prev = (activeIndex - 1 + testimonials.length) % testimonials.length;
    const next = (activeIndex + 1) % testimonials.length;
    return [prev, activeIndex, next];
  };

  const visibleIndices = getVisibleTestimonials();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }
      `}</style>

      <div className="w-full bg-[#FAF8F5] py-2 md:py-6 px-2 md:px-6 flex items-center justify-center">
        <div className="w-full bg-[#FFF0E5] rounded-3xl shadow-sm p-8 md:p-12 lg:p-16">
          {/* Heading Section */}
          <div className="text-center mb-6">
            <motion.h3
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="texturina text-[#9D5C63] text-lg md:text-2xl italic mb-3"
            >
              What People Say About Us
            </motion.h3>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-normal text-[#3E2723]"
            >
              Client Testimonials
            </motion.h2>
          </div>

          {/* Testimonials Slider */}
          <div className="relative">
            {/* Navigation Buttons */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#7A3E46' }}
              whileTap={{ scale: 0.9 }}
              onClick={handlePrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-[#9D5C63] rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 -ml-4 md:-ml-7"
            >
              <ChevronLeft className="w-6 h-6 text-[#FFF0E5]" strokeWidth={2.5} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: '#7A3E46' }}
              whileTap={{ scale: 0.9 }}
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-50 w-14 h-14 bg-[#9D5C63] rounded-full flex items-center justify-center shadow-xl transition-colors duration-300 -mr-4 md:-mr-7"
            >
              <ChevronRight className="w-6 h-6 text-[#FFF0E5]" strokeWidth={2.5} />
            </motion.button>

            {/* Cards Container */}
            <div className="relative h-[500px] md:h-[450px] flex items-center justify-center overflow-hidden px-4 md:px-16">
              <AnimatePresence mode="sync">
                {visibleIndices.map((index, position) => {
                  const testimonial = testimonials[index];
                  const isCenter = position === 1;
                  const isLeft = position === 0;
                  const isRight = position === 2;

                  return (
                    <motion.div
                      key={testimonial.id}
                      initial={{ 
                        opacity: 0,
                        scale: 0.8,
                        x: isLeft ? -400 : isRight ? 400 : 0
                      }}
                      animate={{
                        opacity: isCenter ? 1 : 0.6,
                        scale: isCenter ? 1 : 0.85,
                        x: isLeft ? -400 : isRight ? 400 : 0,
                        y: isCenter ? 0 : 40,
                        zIndex: isCenter ? 30 : 10
                      }}
                      exit={{ 
                        opacity: 0,
                        scale: 0.8,
                        x: isLeft ? -400 : isRight ? 400 : 0
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                      className={`absolute ${
                        isCenter 
                          ? 'w-[380px] md:w-[450px]' 
                          : 'w-[320px] md:w-[380px]'
                      }`}
                    >
                      {/* Center Card */}
                      {isCenter ? (
                        <div className="bg-[#9D5C63] rounded-2xl p-1 shadow-2xl">
                          <div className="bg-[#FFF0E5] rounded-2xl p-8 pb-10 relative">
                            <Quote className="absolute top-6 left-6 w-8 h-8 text-[#9D5C63] fill-current " />
                            <Quote className="absolute bottom-6 right-6 w-8 h-8 text-[#9D5C63] fill-current rotate-180" />

                            <div className="flex justify-center -mt-16 mb-4">
                              <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border-4 border-[#FFF0E5] bg-[#FFF0E5]">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>

                            <h4 className="text-xl font-bold text-[#3E2723] text-center mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-[#3E2723]/70 text-center mb-4">
                              {testimonial.company}
                            </p>

                            <div className="flex justify-center gap-1 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 text-[#9D5C63] fill-current"
                                />
                              ))}
                            </div>

                            <p className="text-[#3E2723]/80 text-sm leading-relaxed text-center px-2">
                              {testimonial.review}
                            </p>

                            <div className="absolute bottom-4 left-6 text-[#3E2723]/30 text-sm font-medium">
                              {String(activeIndex + 1).padStart(2, '0')}.
                            </div>
                          </div>
                        </div>
                      ) : (
                        // Side Cards
                        <div className="bg-[#FFF0E5] rounded-2xl p-1 shadow-xl">
                          <div className="bg-[#FAF8F5] rounded-2xl p-6 pb-8 relative">
                            <Quote className="absolute top-4 left-4 w-6 h-6 text-[#9D5C63] fill-current opacity-30" />
                            <Quote className="absolute bottom-4 right-4 w-6 h-6 text-[#9D5C63] fill-current opacity-30 rotate-180" />

                            <div className="flex justify-center -mt-14 mb-3">
                              <div className="w-20 h-20 rounded-full overflow-hidden shadow-md border-4 border-[#FAF8F5] bg-[#FAF8F5]">
                                <img
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            </div>

                            <h4 className="text-lg font-bold text-[#3E2723] text-center mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-xs text-[#3E2723]/70 text-center mb-3">
                              {testimonial.company}
                            </p>

                            <div className="flex justify-center gap-1 mb-3">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-4 h-4 text-[#9D5C63] fill-current"
                                />
                              ))}
                            </div>

                            <p className="text-[#3E2723]/80 text-xs leading-relaxed text-center line-clamp-4">
                              {testimonial.review}
                            </p>

                            <div className="absolute bottom-3 left-4 text-[#3E2723]/30 text-xs font-medium">
                              {String(index + 1).padStart(2, '0')}.
                            </div>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 h-2 bg-[#9D5C63] rounded-full'
                      : 'w-2 h-2 bg-[#9D5C63]/40 rounded-full hover:bg-[#9D5C63]/60'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsSection;