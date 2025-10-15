import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const statsData = [
  {
    id: 1,
    end: 500,
    suffix: '+',
    label: 'Events Executed',
    icon: '🎉'
  },
  {
    id: 2,
    end: 98,
    suffix: '%',
    label: 'Client Satisfaction',
    icon: '⭐'
  },
  {
    id: 3,
    end: 50,
    suffix: 'K+',
    label: 'Happy Attendees',
    icon: '👥'
  },
  {
    id: 4,
    end: 15,
    suffix: '+',
    label: 'Years Experience',
    icon: '🏆'
  }
];

const CounterStats = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 75%',
        onEnter: () => {
          if (!hasAnimated.current) {
            hasAnimated.current = true;
            animateCounters();
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateCounters = () => {
    statsData.forEach((stat, index) => {
      gsap.to(
        {},
        {
          duration: 2.5,
          ease: 'power2.out',
          onUpdate: function () {
            const progress = this.progress();
            const currentValue = Math.floor(stat.end * progress);
            setCounts(prev => {
              const newCounts = [...prev];
              newCounts[index] = currentValue;
              return newCounts;
            });
          }
        }
      );
    });
  };

  return (
    <section ref={sectionRef} className="relative w-full bg-white py-20 px-6 overflow-hidden">
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

        .counter-card {
          position: relative;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        }

        .counter-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          opacity: 0;
          transition: opacity 0.4s ease;
          border-radius: 1rem;
        }

        .counter-card:hover::before {
          opacity: 0.1;
        }

        .counter-card:hover {
          transform: translateY(-10px);
        }

        .counter-number {
          font-size: 4rem;
          line-height: 1;
          font-weight: 900;
          background: linear-gradient(135deg, #d4af37, #f4d03f);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .counter-icon {
          font-size: 3rem;
          filter: grayscale(100%);
          transition: filter 0.4s ease;
        }

        .counter-card:hover .counter-icon {
          filter: grayscale(0%);
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .pulse-animation {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] golden font-semibold mb-4">
            Our Achievements
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-purple texturina mb-4">
            Success in Numbers
          </h2>
          <div className="w-24 h-1 golden-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering excellence through every event we create
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="counter-card bg-white border-2 border-gray-100 rounded-2xl p-8 text-center hover:border-[#d4af37] hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="counter-icon mb-4 pulse-animation">
                {stat.icon}
              </div>

              {/* Counter Number */}
              <div className="counter-number texturina mb-2">
                {counts[index]}
                <span className="text-[#d4af37]">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-gray-600 font-semibold text-lg">
                {stat.label}
              </p>

              {/* Decorative Line */}
              <div className="w-12 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f] mx-auto mt-4 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2d1b4e]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default CounterStats;