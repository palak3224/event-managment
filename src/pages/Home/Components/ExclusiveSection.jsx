import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const EventPortfolioSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const portfolios = [
    {
      id: 0,
      title: 'CORPORATE SUMMIT 2024',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80',
      description: 'A prestigious three-day corporate summit featuring keynote speakers, networking sessions, and innovative workshops. Hosted 500+ executives from leading global companies in an atmosphere of sophistication and excellence.',
      location: 'Grand Ballroom, Mumbai',
      attendees: '500+ Guests'
    },
    {
      id: 1,
      title: 'LUXURY WEDDING AFFAIR',
      image: 'https://wp-media-partyslate.imgix.net/2022/08/enchanting-hindu-ceremony-at-the-marriott-in-schaumburg-illinois_1498414-scaled.jpg?auto=compress%2Cformat&fit=scale&h=840&ixlib=php-3.3.1&w=1260&wpsize=huge',
      description: 'An enchanting celebration of love featuring traditional ceremonies blended with contemporary elegance. Multiple event spaces transformed into dreamlike settings with bespoke decor, gourmet dining, and memorable entertainment.',
      location: 'Palace Gardens, Jaipur',
      attendees: '800+ Guests'
    },
    {
      id: 2,
      title: 'PRODUCT LAUNCH GALA',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80',
      description: 'A high-impact product launch event combining cutting-edge technology with theatrical presentations. Interactive displays, live demonstrations, and an exclusive networking reception created an unforgettable brand experience.',
      location: 'Tech Park Auditorium, Bangalore',
      attendees: '350+ Guests'
    },
    {
      id: 3,
      title: 'CHARITY FUNDRAISER EVENING',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80',
      description: 'An elegant evening dedicated to making a difference, featuring silent auctions, live performances, and inspiring speeches. The event successfully raised substantial funds while creating meaningful connections among philanthropists.',
      location: 'Heritage Hotel, Delhi',
      attendees: '400+ Guests'
    },
    {
      id: 4,
      title: 'ANNUAL AWARDS CEREMONY',
      image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&q=80',
      description: 'A glamorous awards night celebrating excellence and achievement across multiple categories. Red carpet arrivals, live entertainment, award presentations, and an after-party created a night of recognition and celebration.',
      location: 'Convention Center, Hyderabad',
      attendees: '600+ Guests'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolios.length) % portfolios.length);
  };

  const getPrevIndex = () => {
    return (currentSlide - 1 + portfolios.length) % portfolios.length;
  };

  const getNextIndex = () => {
    return (currentSlide + 1) % portfolios.length;
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }
      `}</style>

      <div className="relative w-full min-h-screen h-auto lg:h-screen overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <AnimatePresence mode="wait">
          <motion.div
            key={portfolios[currentSlide].image}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <img
              src={portfolios[currentSlide].image}
              alt="Background"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/50" />
          </motion.div>
        </AnimatePresence>

        {/* Content Container */}
        <div className="relative h-full min-h-screen lg:min-h-0 flex flex-col py-6 md:py-0">
          {/* Top Section */}
          <div className="px-4 sm:px-6 md:px-12 lg:px-24 pt-8 md:pt-12 lg:pt-16 flex flex-col md:flex-row justify-between items-start gap-6 md:gap-8 z-10">
            {/* Heading with Line */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-start gap-3 md:gap-4"
            >
              <div className="w-8 md:w-12 lg:w-16 h-[1px] bg-white mt-4 md:mt-6" />
              <h1 className="texturina text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-tight">
                EXCLUSIVELY<br />FOR YOU
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/90 text-xs sm:text-sm md:text-base max-w-md leading-relaxed"
            >
              Crafting unforgettable experiences through meticulous planning and flawless execution. Each event is a masterpiece of creativity, elegance, and attention to detail.
            </motion.p>
          </div>

          {/* Middle Section - Card with Navigation */}
          <div className="flex-1 flex items-center justify-center px-2 sm:px-4 md:px-8 lg:px-0 py-8 md:py-0">
            <div className="w-full max-w-[1600px] mx-auto flex items-stretch lg:h-[600px]">
              {/* Left Navigation Panel - Desktop Only */}
              <div className="hidden lg:flex w-60 items-center justify-center relative">
                {/* Borders */}
                <div className="absolute right-0 top-0 h-full w-[1px] bg-white" />
                <div className="absolute right-0 top-0 w-full h-[1px]" 
                     style={{
                       background: 'linear-gradient(to right, transparent, white)'
                     }} 
                />
                <div className="absolute right-0 bottom-0 w-full h-[1px]" 
                     style={{
                       background: 'linear-gradient(to right, transparent, white)'
                     }} 
                />

                {/* Content */}
                <div className="flex flex-col items-center justify-center gap-8 px-6">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={prevSlide}
                    className="w-16 h-16 rounded-full backdrop-blur-md bg-white/10 border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
                  >
                    <ChevronLeft size={26} strokeWidth={1.5} />
                  </motion.button>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={getPrevIndex()}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <span className="texturina text-white/80 text-lg tracking-widest block transform -rotate-0 leading-relaxed">
                        {portfolios[getPrevIndex()].title.split(' ').map((word, i) => (
                          <span key={i} className="block mb-1">{word}</span>
                        ))}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Center Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.7, ease: "easeOut" }}
                  className="flex-1 max-w-4xl mx-2 sm:mx-4 lg:mx-8"
                >
                  <div className="bg-white overflow-hidden h-full flex flex-col shadow-2xl rounded-lg md:rounded-none">
                    {/* Card Image */}
                    <div className="relative flex-1 overflow-hidden min-h-[250px] sm:min-h-[300px] md:min-h-[350px]">
                      <img
                        src={portfolios[currentSlide].image}
                        alt={portfolios[currentSlide].title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Card Content */}
                    <div className="p-4 sm:p-6 md:p-8 lg:p-10 text-center bg-white">
                      <h2 className="texturina text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-900 mb-2 md:mb-3 tracking-wider">
                        {portfolios[currentSlide].title}
                      </h2>
                      
                      <div className="flex items-center justify-center flex-wrap gap-2 md:gap-4 mb-3 md:mb-4 text-xs text-gray-500">
                        <span className="text-center">{portfolios[currentSlide].location}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-400" />
                        <span>{portfolios[currentSlide].attendees}</span>
                      </div>

                      <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed mb-4 md:mb-6 max-w-2xl mx-auto">
                        {portfolios[currentSlide].description}
                      </p>
                      
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="text-amber-600 font-medium text-xs sm:text-sm tracking-wider hover:text-amber-700 transition-colors inline-flex items-center gap-2"
                      >
                        VIEW DETAILS
                        <span className="text-base sm:text-lg">›</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Right Navigation Panel - Desktop Only */}
              <div className="hidden lg:flex w-60 items-center justify-center relative">
                {/* Borders */}
                <div className="absolute left-0 top-0 h-full w-[1px] bg-white" />
                <div className="absolute left-0 top-0 w-full h-[1px]" 
                     style={{
                       background: 'linear-gradient(to left, transparent, white)'
                     }} 
                />
                <div className="absolute left-0 bottom-0 w-full h-[1px]" 
                     style={{
                       background: 'linear-gradient(to left, transparent, white)'
                     }} 
                />

                {/* Content */}
                <div className="flex flex-col items-center justify-center gap-8 px-6">
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.92 }}
                    onClick={nextSlide}
                    className="w-16 h-16 rounded-full backdrop-blur-md bg-white/10 border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 shadow-xl"
                  >
                    <ChevronRight size={26} strokeWidth={1.5} />
                  </motion.button>
                  
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={getNextIndex()}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.5 }}
                      className="text-center"
                    >
                      <span className="texturina text-white/80 text-lg tracking-widest block transform -rotate-0 leading-relaxed">
                        {portfolios[getNextIndex()].title.split(' ').map((word, i) => (
                          <span key={i} className="block mb-1">{word}</span>
                        ))}
                      </span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex justify-center items-center gap-4 sm:gap-6 pb-6 md:pb-8 z-10 px-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md bg-white/10 border border-white/40 flex items-center justify-center text-white shadow-xl flex-shrink-0"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
            
            <div className="flex items-center gap-1.5 sm:gap-2">
              {portfolios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md bg-white/10 border border-white/40 flex items-center justify-center text-white shadow-xl flex-shrink-0"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventPortfolioSection;