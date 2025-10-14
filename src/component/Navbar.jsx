import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const MotionLink = motion(Link);

const PremiumNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 200);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'About', to: '/about' },
    { name: 'Services', to: '/services' },
    { name: 'Portfolio', to: '/#portfolio' }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap');
        
        .tangerine {
          font-family: 'Tangerine', cursive;
        }
        
        .texturina {
          font-family: 'Texturina', serif;
        }
        
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

        .navbar-blur {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
      `}</style>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'dark-purple shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-5">
          <div className="flex items-center justify-between">
            {/* Left - Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="golden-bg px-4 py-1.5 rounded-md shadow-lg cursor-pointer"
            >
              <span 
                className="text-dark-purple text-2xl md:text-3xl font-bold tangerine"
                style={{ fontWeight: 700 }}
              >
                KKH
              </span>
            </motion.div>

            {/* Middle - Navigation Links (Desktop) */}
            <div className="hidden lg:flex items-center">
              <div className="dark-purple rounded-full px-10 py-3.5 flex items-center gap-8 shadow-xl">
                {navLinks.map((link, index) => (
                  <MotionLink
                    key={index}
                    to={link.to}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="golden text-base texturina font-medium tracking-wide hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </MotionLink>
                ))}
              </div>
            </div>

            {/* Right - Book Now Button (Desktop) */}
            <div className="hidden lg:flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="golden-bg rounded-full px-10 py-3.5 shadow-xl"
              >
                <span className="text-dark-purple text-base texturina font-semibold tracking-wide">
                  Book Now
                </span>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden golden-bg p-2 rounded-md shadow-lg"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-dark-purple" />
              ) : (
                <Menu className="w-6 h-6 text-dark-purple" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 dark-purple rounded-2xl p-6 shadow-2xl"
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <MotionLink
                    key={index}
                    to={link.to}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="golden text-base texturina font-medium tracking-wide py-2 hover:opacity-80 transition-opacity"
                  >
                    {link.name}
                  </MotionLink>
                ))}
                
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="golden-bg rounded-full px-6 py-3 shadow-xl mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-dark-purple text-base texturina font-semibold tracking-wide">
                    Book Now
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </motion.nav>
    </>
  );
};

export default PremiumNavbar;