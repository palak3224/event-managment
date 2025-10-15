import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Calendar, Users } from 'lucide-react';

const ContactPage = () => {
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
    alert('Thank you for your message! We will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: <Phone size={28} />,
      title: "Phone",
      content: "+91 98765 43210",
      subContent: "Mon - Sat, 9AM - 8PM"
    },
    {
      icon: <Mail size={28} />,
      title: "Email",
      content: "events@fossetta.com",
      subContent: "We reply within 24 hours"
    },
    {
      icon: <MapPin size={28} />,
      title: "Office",
      content: "123 Event Plaza, Indore",
      subContent: "Madhya Pradesh, India"
    },
    {
      icon: <Clock size={28} />,
      title: "Working Hours",
      content: "Monday - Saturday",
      subContent: "9:00 AM - 8:00 PM"
    }
  ];

  return (
    <div className="w-full bg-gray-50">
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
        
        .text-dark-purple {
          color: #2d1b4e;
        }
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        .contact-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(45, 27, 78, 0.15);
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.5);
          cursor: pointer;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative dark-purple py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] golden font-semibold mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white texturina mb-6">
            Let's Create Magic Together
          </h1>
          <div className="w-24 h-1 golden-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to plan your dream event? We're here to bring your vision to life with elegance and precision.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-card bg-white p-8 rounded-2xl border-2 border-gray-100 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full golden-bg mb-4">
                  <div className="text-dark-purple">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-dark-purple texturina mb-2">
                  {info.title}
                </h3>
                <p className="golden font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-gray-600">
                  {info.subContent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="mb-8">
                  <h3 className="texturina golden text-lg md:text-xl italic mb-2">
                    Get In Touch
                  </h3>
                  <h2 className="text-3xl md:text-4xl font-normal text-gray-900 mb-3">
                    Book An Event
                  </h2>
                  <p className="text-gray-600 text-sm">
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
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 placeholder-gray-500"
                      />
                    </div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email Address *"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 placeholder-gray-500"
                      />
                      <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 placeholder-gray-500"
                      />
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="City *"
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 placeholder-gray-500"
                      />
                      <MapPin className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 placeholder-gray-500"
                      />
                      <Users className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    </div>
                    <div className="relative">
                      <select
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 appearance-none cursor-pointer"
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
                        className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 cursor-pointer"
                      />
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Additional Details (Optional)"
                      rows={4}
                      className="w-full px-4 py-3.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-[#d4af37] transition-colors duration-300 text-gray-900 placeholder-gray-500 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleSubmit}
                    className="w-full md:w-auto px-10 py-4 dark-purple text-white rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 shadow-lg"
                  >
                    <span className="golden">SEND MESSAGE</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-dark-purple texturina mb-4">
              Why Choose Fossetta?
            </h2>
            <div className="w-24 h-1 golden-bg mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full golden-bg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-[#2d1b4e]"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-purple mb-2 texturina">
                15+ Years Experience
              </h3>
              <p className="text-gray-600">
                Excellence in event management with a proven track record
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full golden-bg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-[#2d1b4e]"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-purple mb-2 texturina">
                500+ Events Delivered
              </h3>
              <p className="text-gray-600">
                Successfully managed events of all scales and types
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full golden-bg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-[#2d1b4e]"></div>
              </div>
              <h3 className="text-xl font-semibold text-dark-purple mb-2 texturina">
                24/7 Support
              </h3>
              <p className="text-gray-600">
                Dedicated support throughout your entire event journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-purple texturina mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Book a free consultation call with our event planning experts today
          </p>
          <button className="px-10 py-4 dark-purple text-white font-bold rounded-full border-2 border-[#d4af37] hover:bg-[#d4af37] hover:text-[#2d1b4e] transition-all duration-300 text-lg">
            Schedule Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;