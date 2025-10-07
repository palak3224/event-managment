import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Briefcase, Gift, Users, ArrowRight } from 'lucide-react';

export default function ServicesOverview() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      icon: Heart,
      title: "Wedding Planning",
      description: "Create your dream wedding with our comprehensive planning services, from venue selection to the final farewell.",
      features: ["Venue Selection", "Decor Design", "Vendor Coordination", "Day-of Management"],
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80"
    },
    {
      id: 2,
      icon: Briefcase,
      title: "Corporate Events",
      description: "Professional event management for conferences, product launches, team building, and corporate celebrations.",
      features: ["Conference Planning", "Team Building", "Product Launches", "Annual Meetings"],
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80"
    },
    {
      id: 3,
      icon: Gift,
      title: "Birthday Parties",
      description: "Unforgettable birthday celebrations for all ages, customized to reflect your unique personality and style.",
      features: ["Theme Design", "Entertainment", "Catering Services", "Party Favors"],
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80"
    },
    {
      id: 4,
      icon: Users,
      title: "Social Events",
      description: "Elegant gatherings for anniversaries, engagements, baby showers, and all life's special moments.",
      features: ["Anniversary Parties", "Engagement Celebrations", "Baby Showers", "Reunion Events"],
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #1a0a2e 100%)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h2>
            <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(90deg, #6A0DAD 0%, #FFD700 100%)' }} />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive event planning solutions tailored to your vision
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative overflow-hidden rounded-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.1) 0%, rgba(45, 27, 78, 0.2) 100%)',
                border: '1px solid rgba(106, 13, 173, 0.3)',
                transition: 'all 0.3s ease'
              }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredCard === service.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(106, 13, 173, 0.6) 0%, rgba(26, 10, 46, 0.4) 100%)',
                      opacity: hoveredCard === service.id ? 0.7 : 0.8,
                      transition: 'opacity 0.3s ease'
                    }}
                  />
                  
                  {/* Icon */}
                  <div
                    className="absolute top-6 left-6 w-14 h-14 rounded-lg flex items-center justify-center"
                    style={{ 
                      background: hoveredCard === service.id 
                        ? 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)'
                        : 'rgba(255, 255, 255, 0.9)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <service.icon 
                      size={28} 
                      style={{ 
                        color: hoveredCard === service.id ? '#1a0a2e' : '#6A0DAD',
                        transition: 'color 0.3s ease'
                      }} 
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: 'linear-gradient(135deg, #6A0DAD 0%, #FFD700 100%)' }}
                        />
                        <span className="text-sm text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Learn More Link */}
                  <div 
                    className="inline-flex items-center gap-2 text-sm font-medium"
                    style={{ 
                      color: hoveredCard === service.id ? '#FFD700' : '#9d7dce',
                      transition: 'color 0.3s ease'
                    }}
                  >
                    <span>Learn More</span>
                    <ArrowRight 
                      size={16} 
                      style={{
                        transform: hoveredCard === service.id ? 'translateX(4px)' : 'translateX(0)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Hover Border Effect */}
              {hoveredCard === service.id && (
                <motion.div
                  layoutId="hover-border"
                  className="absolute inset-0 rounded-lg pointer-events-none"
                  style={{
                    border: '2px solid',
                    borderImage: 'linear-gradient(135deg, #6A0DAD 0%, #FFD700 100%) 1'
                  }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
        >
          <p className="text-gray-300 mb-6 text-lg">
            Ready to plan your next event?
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
            Schedule a Consultation
          </button>
        </motion.div>
      </div>
    </section>
  );
}