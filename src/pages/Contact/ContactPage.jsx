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
      content: "events@khaoKhilaosonedo.com",
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
    <div className="w-full bg-[#FAF8F5]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        .contact-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(157, 92, 99, 0.15);
        }

        input[type="date"]::-webkit-calendar-picker-indicator {
          filter: invert(0.8);
          cursor: pointer;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative bg-[#9D5C63] py-20 md:py-28 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#FFF0E5] font-semibold mb-4">
            Get In Touch
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#FFF0E5] texturina mb-6">
            Let's Create Magic Together
          </h1>
          <div className="w-24 h-1 bg-[#FFF0E5] mx-auto mb-6"></div>
          <p className="text-xl text-[#FFF0E5]/80 max-w-2xl mx-auto">
            Ready to plan your dream event? We're here to bring your vision to life with elegance and precision.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="contact-card bg-[#FFF0E5] p-8 rounded-2xl border-2 border-[#3E2723]/10 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#9D5C63] mb-4">
                  <div className="text-[#FFF0E5]">
                    {info.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-[#3E2723] texturina mb-2">
                  {info.title}
                </h3>
                <p className="text-[#9D5C63] font-semibold mb-1">
                  {info.content}
                </p>
                <p className="text-sm text-[#3E2723]/80">
                  {info.subContent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#FFF0E5] rounded-3xl shadow-sm p-8 md:p-12 lg:p-16">
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
                      rows={4}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-6 bg-[#FAF8F5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] texturina mb-4">
              Why Choose Khao Khilao Sone Do?
            </h2>
            <div className="w-24 h-1 bg-[#9D5C63] mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#9D5C63] flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FFF0E5]"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#3E2723] mb-2 texturina">
                15+ Years Experience
              </h3>
              <p className="text-[#3E2723]/80">
                Excellence in event management with a proven track record
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#9D5C63] flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FFF0E5]"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#3E2723] mb-2 texturina">
                500+ Events Delivered
              </h3>
              <p className="text-[#3E2723]/80">
                Successfully managed events of all scales and types
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#9D5C63] flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 rounded-full bg-[#FFF0E5]"></div>
              </div>
              <h3 className="text-xl font-semibold text-[#3E2723] mb-2 texturina">
                24/7 Support
              </h3>
              <p className="text-[#3E2723]/80">
                Dedicated support throughout your entire event journey
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#FFF0E5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3E2723] texturina mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-[#3E2723]/80 mb-8">
            Book a free consultation call with our event planning experts today
          </p>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#7A3E46' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-[#9D5C63] text-[#FFF0E5] font-bold rounded-full border-2 border-[#FFF0E5] transition-colors duration-300 text-lg"
          >
            Schedule Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;