import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Calendar, Users } from 'lucide-react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    guests: '',
    eventType: '',
    eventDate: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.8);
          cursor: pointer;
        }
      `}</style>

      <div className="w-full bg-[#FAF8F5] py-2 md:py-6 px-2 md:px-6 flex items-center justify-center">
        <div className="w-full bg-[#FFF0E5] rounded-3xl shadow-sm p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-8">
                <h3 className="texturina text-[#9D5C63] text-lg md:text-xl italic mb-2">
                  Get In Touch
                </h3>
                <h2 className="text-3xl md:text-4xl font-normal text-[#3E2723] mb-3">
                  Book An Event
                </h2>
                <p className="text-[#3E2723]/80 text-sm">
                  Experience our culinary excellence firsthand. Fill out the details below to schedule your complimentary event tasting session.
                </p>
              </div>

              <div className="space-y-5">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name *"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] placeholder-[#3E2723]/50"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] placeholder-[#3E2723]/50"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E2723]/40" />
                  </div>
                </div>

                {/* Phone and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone No. *"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] placeholder-[#3E2723]/50"
                    />
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E2723]/40" />
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City *"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] placeholder-[#3E2723]/50"
                    />
                    <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E2723]/40" />
                  </div>
                </div>

                {/* Guests, Event Type, and Date */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="relative">
                    <input
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      placeholder="No. of Guest *"
                      min="1"
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] placeholder-[#3E2723]/50"
                    />
                    <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E2723]/40" />
                  </div>
                  <div className="relative">
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Event Type *</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="relative">
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] cursor-pointer"
                    />
                    <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3E2723]/40 pointer-events-none" />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Additional Details (Optional)"
                    rows="4"
                    className="w-full px-4 py-3.5 bg-[#FAF8F5] border border-[#3E2723]/20 rounded-lg focus:outline-none focus:border-[#9D5C63] transition-colors duration-300 text-[#3E2723] placeholder-[#3E2723]/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02, backgroundColor: '#7A3E46' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleSubmit}
                  className="w-full md:w-auto px-10 py-4 bg-[#9D5C63] text-[#FFF0E5] rounded-lg font-medium transition-colors duration-300 shadow-lg"
                >
                  SEND MESSAGE
                </motion.button>
              </div>
            </motion.div>

            {/* Right Side - Video */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[550px] lg:h-[650px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="https://res.cloudinary.com/ddnb10zkq/video/upload/v1759982414/Wedding_Decoration_Dubai._Event_Rentals_Dubai._Wedding_Planner_Dubai._Wedding_at_Kempinski_The_Palm_ggphlu.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormSection;