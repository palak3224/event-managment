import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sparkles, Calendar, Users, Star } from 'lucide-react';

export default function EventHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1519167758481-83f29da8ae39?w=1920&q=80",
      title: "Making Your Moments",
      highlight: "Memorable",
      subtitle: "Transform your vision into extraordinary celebrations with our premium event planning services"
    },
    {
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=80",
      title: "Elegant Wedding",
      highlight: "Celebrations",
      subtitle: "Creating magical wedding experiences that you and your guests will cherish forever"
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80",
      title: "Corporate Events",
      highlight: "Perfected",
      subtitle: "Professional event management for conferences, seminars, and corporate gatherings"
    },
    {
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1920&q=80",
      title: "Birthday Parties",
      highlight: "Reimagined",
      subtitle: "Unforgettable birthday celebrations designed to bring joy and excitement to your special day"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    })
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Slider Container */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`
            }}
          >
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40"></div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-20 flex justify-between items-center px-6 md:px-16 py-6"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2 text-2xl font-bold tracking-wider"
          style={{ color: '#FFD700' }}
        >
          <Sparkles size={28} />
          ELEGANT EVENTS
        </motion.div>
        <div className="flex gap-8">
          {['About', 'Services', 'Portfolio', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              whileHover={{ 
                y: -2,
                color: '#FFD700',
                transition: { duration: 0.2 }
              }}
              className="text-white font-medium text-lg hidden md:block cursor-pointer"
            >
              {item}
            </motion.a>
          ))}
        </div>
      </motion.nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-[calc(100vh-100px)] px-6 md:px-16 lg:px-24 max-w-7xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="text-left"
          >
            {/* Decorative Line */}
            <motion.div
              custom={0}
              variants={contentVariants}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-16 h-1" style={{ background: 'linear-gradient(90deg, #FFD700 0%, #FFB6C1 100%)' }}></div>
              <span className="text-sm uppercase tracking-widest" style={{ color: '#FFB6C1' }}>
                Premium Event Planning
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              custom={1}
              variants={contentVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
              <br />
              <motion.span
                animate={{
                  textShadow: [
                    '0 0 20px rgba(255, 215, 0, 0.5)',
                    '0 0 40px rgba(255, 215, 0, 0.8)',
                    '0 0 20px rgba(255, 215, 0, 0.5)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ 
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFB6C1 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {slides[currentSlide].highlight}
              </motion.span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={contentVariants}
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed"
            >
              {slides[currentSlide].subtitle}
            </motion.p>

            {/* Features */}
            <motion.div
              custom={3}
              variants={contentVariants}
              className="flex flex-wrap gap-6 mb-10"
            >
              {[
                { icon: Calendar, text: "Expert Planning" },
                { icon: Users, text: "Dedicated Team" },
                { icon: Star, text: "Premium Service" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="flex items-center gap-3 px-4 py-2 rounded-full backdrop-blur-md"
                  style={{ 
                    background: 'rgba(106, 13, 173, 0.3)',
                    border: '1px solid rgba(255, 215, 0, 0.3)'
                  }}
                >
                  <feature.icon size={20} style={{ color: '#FFD700' }} />
                  <span className="text-white font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              custom={4}
              variants={contentVariants}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 40px rgba(255, 215, 0, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 text-lg md:text-xl font-semibold rounded-full text-white relative overflow-hidden group"
              style={{ 
                background: 'linear-gradient(135deg, #6A0DAD 0%, #191970 100%)',
                border: '2px solid #FFD700'
              }}
            >
              <motion.span
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFB6C1 100%)'
                }}
              ></motion.span>
              <span className="relative z-10 flex items-center gap-3">
                Plan Your Event
                <motion.svg
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </motion.svg>
              </span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute z-20 top-1/2 transform -translate-y-1/2 w-full px-6 md:px-10 flex justify-between pointer-events-none">
        <motion.button
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="pointer-events-auto w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center"
          style={{ 
            background: 'rgba(106, 13, 173, 0.5)',
            border: '2px solid rgba(255, 215, 0, 0.5)'
          }}
        >
          <ChevronLeft size={28} style={{ color: '#FFD700' }} />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="pointer-events-auto w-14 h-14 rounded-full backdrop-blur-md flex items-center justify-center"
          style={{ 
            background: 'rgba(106, 13, 173, 0.5)',
            border: '2px solid rgba(255, 215, 0, 0.5)'
          }}
        >
          <ChevronRight size={28} style={{ color: '#FFD700' }} />
        </motion.button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute z-20 bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="w-3 h-3 rounded-full transition-all duration-300"
            style={{
              background: currentSlide === index 
                ? 'linear-gradient(135deg, #FFD700 0%, #FFB6C1 100%)'
                : 'rgba(255, 255, 255, 0.3)',
              width: currentSlide === index ? '40px' : '12px'
            }}
          />
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-1/4 right-12 w-32 h-32 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFD700 0%, transparent 70%)' }}
      ></motion.div>

      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-1/4 left-12 w-40 h-40 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #FFB6C1 0%, transparent 70%)' }}
      ></motion.div>
    </div>
  );
}