import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (email) {
      console.log('Subscribed:', email);
      setEmail('');
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
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
        
        .golden-border {
          border-color: #d4af37;
        }

        .footer-gradient {
          background: linear-gradient(180deg, #1a0f2e 0%, #2d1b4e 100%);
        }
      `}</style>

      <footer className="footer-gradient text-white">
        {/* Decorative Top Border */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-white/30" />
            <div className="w-10 h-10 golden-bg rounded-lg rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full -rotate-45" />
            </div>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-white/30" />
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 md:px-12 lg:px-16 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* About Us Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="golden texturina text-2xl mb-6 font-light">About us</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                Fossetta blends culinary artistry with warm hospitality, offering an experience that delights every sense. From handcrafted dishes to elegant ambiance, we focus on detail and flavor. Each plate is inspired by tradition and elevated with innovation to create something truly unforgettable.
              </p>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="golden texturina text-2xl mb-6 font-light">Contact info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 golden mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white/90">Call:</p>
                    <a href="tel:+919811747715" className="text-white/70 hover:text-white transition-colors">
                      +91 9811747715
                    </a>
                    <span className="text-white/70"> , </span>
                    <a href="tel:+919999850265" className="text-white/70 hover:text-white transition-colors">
                      +91 9999850265
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 golden mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white/90">Write:</p>
                    <a href="mailto:info@fossetta.in" className="text-white/70 hover:text-white transition-colors">
                      info@fossetta.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 golden mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-white/90">Find us:</p>
                    <p className="text-white/70">
                      42, Udyog Vihar & Sector 37 Gurgaon<br />122001
                    </p>
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="golden inline-block text-sm font-medium hover:underline mt-2"
                >
                  Get in Touch →
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="golden texturina text-2xl mb-6 font-light">Quick links</h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', to: '/' },
                  { name: 'About', to: '/about' },
                  { name: 'Services', to: '/services' },
                  { name: 'Portfolio', to: '/portfolio' },
                  { name: 'Contact', to: '/contact' },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      className="text-white/70 hover:text-white hover:golden transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 golden-bg rounded-full group-hover:w-3 transition-all" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Subscribe Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="golden texturina text-2xl mb-6 font-light">Subscribe</h3>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Want to be notified when we launch a new template or an update. Just sign up and we'll send you a notification by email.
              </p>
              
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-white placeholder-white/50 text-sm"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubscribe}
                  className="golden-bg px-6 py-3 rounded-lg font-medium text-white hover:opacity-90 transition-opacity duration-300 text-sm"
                >
                  SEND
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Social Media Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center gap-6 mt-16 mb-12"
          >
            {[
              { icon: Facebook, href: '#' },
              { icon: Instagram, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Linkedin, href: '#' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:golden-bg transition-colors duration-300 group"
              >
                <social.icon className="w-5 h-5 golden group-hover:text-white transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 golden-bg rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <div>
                  <h4 className="golden texturina text-lg font-semibold">FOSSETTA</h4>
                  <p className="text-white/50 text-xs">GOURMET CATERING</p>
                </div>
              </div>

              <p className="text-white/50 text-sm text-center">
                © FOSSETTA GOURMENT CATERING 2025 . ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Action Buttons */}
        {/* <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-50">
          <motion.a
            href="https://wa.me/919811747715"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
          >
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </motion.a>

          <motion.a
            href="tel:+919811747715"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-14 h-14 golden-bg rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
          >
            <Phone className="w-7 h-7 text-white" />
          </motion.a>
        </div> */}
      </footer>
    </>
  );
};

export default Footer;