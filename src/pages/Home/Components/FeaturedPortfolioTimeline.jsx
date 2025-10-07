import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';

export default function FeaturedPortfolioTimeline() {
  const [hoveredId, setHoveredId] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "Royal Garden Wedding",
      category: "Wedding",
      location: "The Grand Palace, Mumbai",
      guests: "500+ Guests",
      date: "December 2024",
      images: [
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
        "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80"
      ],
      description: "An enchanting outdoor wedding celebration featuring elegant floral arrangements and magical ambiance."
    },
    {
      id: 2,
      title: "Tech Summit 2024",
      category: "Corporate",
      location: "Convention Center, Bangalore",
      guests: "1000+ Attendees",
      date: "November 2024",
      images: [
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?w=600&q=80"
      ],
      description: "A cutting-edge technology conference with interactive exhibitions and keynote presentations."
    },
    {
      id: 3,
      title: "50th Birthday Extravaganza",
      category: "Birthday",
      location: "Luxury Resort, Goa",
      guests: "200+ Guests",
      date: "October 2024",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
      ],
      description: "A glamorous milestone celebration with live entertainment and stunning beachfront decor."
    },
    {
      id: 4,
      title: "Annual Gala Dinner",
      category: "Corporate",
      location: "Five Star Hotel, Delhi",
      guests: "300+ Guests",
      date: "September 2024",
      images: [
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
        "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=600&q=80",
        "https://images.unsplash.com/photo-1519167758481-83f29da8ae39?w=600&q=80"
      ],
      description: "An elegant corporate gala featuring award ceremonies and spectacular entertainment."
    },
    {
      id: 5,
      title: "Engagement Celebration",
      category: "Social",
      location: "Heritage Venue, Jaipur",
      guests: "150+ Guests",
      date: "August 2024",
      images: [
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80"
      ],
      description: "A beautiful engagement party blending traditional elements with modern aesthetics."
    },
    {
      id: 6,
      title: "Kids Birthday Party",
      category: "Birthday",
      location: "Fun Zone, Pune",
      guests: "80+ Kids",
      date: "July 2024",
      images: [
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
      ],
      description: "A colorful and fun-filled birthday party with games, entertainment, and delicious treats."
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Featured Portfolio
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #6A0DAD 0%, #FFD700 100%)' }} />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A showcase of our most memorable events and celebrations
            </p>
          </motion.div>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 hidden lg:block"
            style={{ background: 'linear-gradient(180deg, #6A0DAD 0%, #FFD700 50%, #6A0DAD 100%)' }}
          />

          {/* Timeline Items */}
          <div className="space-y-24">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Side - Content (alternates) */}
                  <div className={`${index % 2 === 0 ? 'lg:order-1 lg:pr-16' : 'lg:order-2 lg:pl-16'}`}>
                    <motion.div
                      className="p-8 rounded-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.15) 0%, rgba(45, 27, 78, 0.25) 100%)',
                        border: '1px solid rgba(106, 13, 173, 0.3)',
                        transition: 'all 0.3s ease',
                        boxShadow: hoveredId === item.id 
                          ? '0 20px 60px rgba(106, 13, 173, 0.4)' 
                          : '0 10px 30px rgba(0, 0, 0, 0.3)'
                      }}
                    >
                      {/* Category Badge */}
                      <div
                        className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-4"
                        style={{
                          background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.3) 0%, rgba(255, 215, 0, 0.3) 100%)',
                          border: '1px solid rgba(255, 215, 0, 0.5)',
                          color: '#FFD700'
                        }}
                      >
                        {item.category}
                      </div>

                      {/* Title */}
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {item.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {item.description}
                      </p>

                      {/* Details */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <MapPin size={18} style={{ color: '#9d7dce' }} />
                          <span className="text-sm text-gray-400">{item.location}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Users size={18} style={{ color: '#9d7dce' }} />
                          <span className="text-sm text-gray-400">{item.guests}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Calendar size={18} style={{ color: '#9d7dce' }} />
                          <span className="text-sm text-gray-400">{item.date}</span>
                        </div>
                      </div>

                      {/* View Details Link */}
                      <div 
                        className="inline-flex items-center gap-2 text-sm font-medium"
                        style={{ 
                          color: hoveredId === item.id ? '#FFD700' : '#9d7dce',
                          transition: 'color 0.3s ease'
                        }}
                      >
                        <span>View Details</span>
                        <ArrowRight 
                          size={16} 
                          style={{
                            transform: hoveredId === item.id ? 'translateX(4px)' : 'translateX(0)',
                            transition: 'transform 0.3s ease'
                          }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Timeline Dot */}
                  <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center justify-center z-20">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      className="w-5 h-5 rounded-full"
                      style={{
                        background: hoveredId === item.id 
                          ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                          : 'linear-gradient(135deg, #6A0DAD 0%, #8B3FBF 100%)',
                        boxShadow: hoveredId === item.id 
                          ? '0 0 30px rgba(255, 215, 0, 0.8)' 
                          : '0 0 20px rgba(106, 13, 173, 0.5)',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>

                  {/* Right Side - Images (alternates) */}
                  <div className={`${index % 2 === 0 ? 'lg:order-2 lg:pl-16' : 'lg:order-1 lg:pr-16'}`}>
                    <div className="grid grid-cols-2 gap-4">
                      {/* Main Large Image */}
                      <div
                        className="col-span-2 relative rounded-lg overflow-hidden h-80"
                        style={{
                          border: '1px solid rgba(106, 13, 173, 0.3)',
                          transform: hoveredId === item.id ? 'scale(1.02)' : 'scale(1)',
                          transition: 'transform 0.4s ease'
                        }}
                      >
                        <img
                          src={item.images[0]}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                        <div 
                          className="absolute inset-0"
                          style={{ 
                            background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.4) 0%, rgba(26, 10, 46, 0.3) 100%)',
                            opacity: hoveredId === item.id ? 0.5 : 0.7,
                            transition: 'opacity 0.3s ease'
                          }}
                        />
                      </div>

                      {/* Two Smaller Images */}
                      {item.images.slice(1, 3).map((image, imgIndex) => (
                        <div
                          key={imgIndex}
                          className="relative rounded-lg overflow-hidden h-40"
                          style={{
                            border: '1px solid rgba(106, 13, 173, 0.3)',
                            transform: hoveredId === item.id ? 'scale(1.02)' : 'scale(1)',
                            transition: 'transform 0.4s ease'
                          }}
                        >
                          <img
                            src={image}
                            alt={`${item.title} ${imgIndex + 2}`}
                            className="w-full h-full object-cover"
                          />
                          <div 
                            className="absolute inset-0"
                            style={{ 
                              background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.4) 0%, rgba(26, 10, 46, 0.3) 100%)',
                              opacity: 0.6
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-24"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Want to see more of our work?
          </p>
          <button
            className="px-8 py-4 rounded-lg font-medium text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #6A0DAD 0%, #8B3FBF 100%)',
              border: '1px solid #FFD700'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #8B3FBF 0%, #6A0DAD 100%)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'linear-gradient(135deg, #6A0DAD 0%, #8B3FBF 100%)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            View Full Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}