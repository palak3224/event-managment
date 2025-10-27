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
    <section ref={sectionRef} className="relative w-full bg-[#FAF8F5] py-20 px-6 overflow-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
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
          background: linear-gradient(135deg, #9D5C63, #7A3E46);
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
          background: linear-gradient(135deg, #9D5C63, #7A3E46);
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
          <p className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold mb-4">
            Our Achievements
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] texturina mb-4">
            Success in Numbers
          </h2>
          <div className="w-24 h-1 bg-[#9D5C63] mx-auto mb-6"></div>
          <p className="text-xl text-[#3E2723]/80 max-w-2xl mx-auto">
            Delivering excellence through every event we create
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div
              key={stat.id}
              className="counter-card bg-[#FFF0E5] border-2 border-[#3E2723]/10 rounded-2xl p-8 text-center hover:border-[#9D5C63] hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="counter-icon mb-4 pulse-animation">
                {stat.icon}
              </div>

              {/* Counter Number */}
              <div className="counter-number texturina mb-2">
                {counts[index]}
                <span className="text-[#9D5C63]">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="text-[#3E2723]/80 font-semibold text-lg">
                {stat.label}
              </p>

              {/* Decorative Line */}
              <div className="w-12 h-1 bg-gradient-to-r from-[#9D5C63] to-[#7A3E46] mx-auto mt-4 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-[#9D5C63]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#3E2723]/5 rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default CounterStats;