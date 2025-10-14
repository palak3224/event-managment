import { useRef, useState } from 'react';
import { Heart, Users, Lightbulb } from 'lucide-react';

const SpotlightCard = ({ children, className = '', spotlightColor = 'rgba(255, 255, 255, 0.25)' }) => {
  const divRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = e => {
    if (!divRef.current || isFocused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(0.6);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(0.6);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden rounded-xl ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />
      {children}
    </div>
  );
};

const CoreValuesSection = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Excellence',
      description: 'We pour our hearts into every event, ensuring each detail reflects our commitment to creating unforgettable experiences that exceed expectations.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your vision is our mission. We listen, collaborate, and adapt to bring your unique ideas to life with personalized attention and care.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation & Creativity',
      description: 'We blend cutting-edge trends with timeless elegance, crafting events that are both contemporary and memorable for years to come.'
    }
  ];

  return (


    <>
    
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
        `}</style>
        <div className="py-36 flex items-center justify-center p-8" style={{ backgroundColor: '#2d1b4e', fontFamily: 'Texturina, serif' }}>
          <div className="max-w-7xl w-full">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4" style={{ color: '#d4af37', fontFamily: 'Texturina, serif' }}>
                Our Core Values
              </h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Texturina, serif' }}>
                The principles that guide us in creating extraordinary events
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <SpotlightCard
                  key={index}
                  className="bg-white border-2 transition-all duration-300 hover:shadow-2xl"
                  style={{ borderColor: '#2d1b4e' }}
                  spotlightColor="rgba(212, 175, 55, 0.3)"
                >
                  <div className="p-8 h-full flex flex-col">
                    <div className="mb-6 flex justify-center">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4af37' }}>
                        <value.icon className="w-10 h-10" style={{ color: '#2d1b4e' }} strokeWidth={2} />
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-center" style={{ color: '#2d1b4e', fontFamily: 'Texturina, serif' }}>
                      {value.title}
                    </h3>
                    <p className="text-base leading-relaxed text-center" style={{ color: '#2d1b4e', opacity: 0.8, fontFamily: 'Texturina, serif' }}>
                      {value.description}
                    </p>
                  </div>
                </SpotlightCard>
              ))}
            </div>
          </div>
        </div>
    </>
  );
};

export default CoreValuesSection;