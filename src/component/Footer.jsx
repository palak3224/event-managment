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
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .. {
          font-family: '.', serif;
        }
      `}</style>

      <footer className="bg-[#9D5C63] text-[#FFF0E5]">
        {/* Decorative Top Border */}
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-4">
            <div className="h-[1px] w-32 bg-gradient-to-r from-transparent to-[#FFF0E5]/30" />
            <div className="w-10 h-10 bg-[#FFF0E5] rounded-lg rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-[#9D5C63] rounded-full -rotate-45" />
            </div>
            <div className="h-[1px] w-32 bg-gradient-to-l from-transparent to-[#FFF0E5]/30" />
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
              <h3 className="text-[#FFF0E5] . text-2xl mb-6 font-light">About us</h3>
              <p className="text-[#FFF0E5]/70 text-sm leading-relaxed">
                Khao khilao blends culinary artistry with warm hospitality, offering an experience that delights every sense. From handcrafted dishes to elegant ambiance, we focus on detail and flavor. Each plate is inspired by tradition and elevated with innovation to create something truly unforgettable.
              </p>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-[#FFF0E5] . text-2xl mb-6 font-light">Contact info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#FFF0E5] mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-[#FFF0E5]/90">Call:</p>
                    <a href="tel:+919811747715" className="text-[#FFF0E5]/70 hover:text-[#FFF0E5] transition-colors">
                      +91 9811747715
                    </a>
                    <span className="text-[#FFF0E5]/70"> , </span>
                    <a href="tel:+919999850265" className="text-[#FFF0E5]/70 hover:text-[#FFF0E5] transition-colors">
                      +91 9999850265
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#FFF0E5] mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-[#FFF0E5]/90">Write:</p>
                    <a href="mailto:info@khaoKhilaoSonedo.in" className="text-[#FFF0E5]/70 hover:text-[#FFF0E5] transition-colors">
                      info@khaoKhilaoSonedo.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#FFF0E5] mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="text-[#FFF0E5]/90">Find us:</p>
                    <p className="text-[#FFF0E5]/70">
                      42, Udyog Vihar & Sector 37 Gurgaon<br />122001
                    </p>
                  </div>
                </div>

                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#FFF0E5] inline-block text-sm font-medium hover:underline mt-2"
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
              <h3 className="text-[#FFF0E5] . text-2xl mb-6 font-light">Quick links</h3>
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
                      className="text-[#FFF0E5]/70 hover:text-[#FFF0E5] transition-colors text-sm flex items-center gap-2 group"
                    >
                      <span className="w-1.5 h-1.5 bg-[#FFF0E5] rounded-full group-hover:w-3 transition-all" />
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
              <h3 className="text-[#FFF0E5] . text-2xl mb-6 font-light">Subscribe</h3>
              <p className="text-[#FFF0E5]/70 text-sm leading-relaxed mb-6">
                Want to be notified when we launch a new template or an update. Just sign up and we'll send you a notification by email.
              </p>
              
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    className="w-full px-4 py-3 bg-[#FFF0E5]/10 border border-[#FFF0E5]/20 rounded-lg focus:outline-none focus:border-[#FFF0E5] transition-colors duration-300 text-[#FFF0E5] placeholder-[#FFF0E5]/50 text-sm"
                  />
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#FFF0E5]/40" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, opacity: 0.9 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubscribe}
                  className="bg-[#FFF0E5] px-6 py-3 rounded-lg font-medium text-[#3E2723] transition-opacity duration-300 text-sm"
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
                whileHover={{ scale: 1.2, y: -3, backgroundColor: '#FFF0E5' }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-[#FFF0E5]/10 flex items-center justify-center transition-colors duration-300 group"
              >
                <social.icon className="w-5 h-5 text-[#FFF0E5] group-hover:text-[#9D5C63] transition-colors" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#FFF0E5]/10">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFF0E5] rounded-full flex items-center justify-center">
            <img src="/logo.png" alt="KKH Logo" className="h-16 md:h-24 w-auto object-contain" />

                </div>
                <div>
                  <h4 className="text-[#FFF0E5] . text-lg font-semibold">KHAO</h4>
                  <p className="text-[#FFF0E5]/50 text-xs">KHILAO SONE DO</p>
                </div>
              </div>

              <p className="text-[#FFF0E5]/50 text-sm text-center">
                © KHAO KHILAO SONE DO GOURMENT CATERING 2025 . ALL RIGHTS RESERVED.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;