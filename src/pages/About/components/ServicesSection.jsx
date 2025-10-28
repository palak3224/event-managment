import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      id: 1,
      title: "Weddings",
      image: "https://weddingsutra.com/images/Vendor_Images/Wedding_Planners/wingscraft-entertainment/wce-01.jpg"
    },
    {
      id: 2,
      title: "Corporate Events",
      image: "https://www.partyplanetindia.com/images/gallery/corporate-fun-events/big-img/29.jpg"
    },
    {
      id: 3,
      title: "Private Celebrations",
      image: "https://thebingetown-in.b-cdn.net/newWeb/home_whychoose_is_3.webp"
    },
    {
      id: 4,
      title: "Cultural Events",
      image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80"
    },
    {
      id: 5,
      title: "Fashion Shows",
      image: "https://www.mashindia.com/wp-content/uploads/2023/03/unnamed-2.jpg"
    },
    {
      id: 6,
      title: "Luxury Gatherings",
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80"
    }
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
      `}</style>

      <section className="w-full px-8 py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto">
          {/* Heading Section */}
          <div className="text-center mb-16">
            <h2 
              className="text-5xl md:text-6xl text-[#9D5C63] mb-6"
              style={{ 
                fontFamily: '., serif',
                fontWeight: 700
              }}
            >
              Where We Involve
            </h2>
            <p 
              className="text-lg md:text-xl text-[#3E2723] max-w-3xl mx-auto leading-relaxed"
              style={{ 
                fontFamily: '., serif',
              }}
            >
              From intimate celebrations to grand occasions, we craft exceptional experiences 
              that reflect elegance, precision, and your unique vision.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link to="/contact" key={service.id}>
                <ServiceCard service={service} />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

const ServiceCard = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden bg-[#FFF0E5] cursor-pointer"
      style={{ height: '500px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div
        className="absolute top-0 left-0 w-full transition-all duration-700 ease-in-out"
        style={{
          height: isHovered ? '100%' : '65%',
          backgroundImage: `url(${service.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay on hover */}
        <div
          className="absolute inset-0 bg-[#3E2723] transition-opacity duration-700"
          style={{ opacity: isHovered ? 0.6 : 0 }}
        />
      </div>

      {/* Content */}
      <div
        className="absolute bottom-0 left-0 w-full transition-all duration-700 ease-in-out"
        style={{
          height: isHovered ? '100%' : '25%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: '40px'
        }}
      >
        {/* Title */}
        <h3
          className="text-2xl transition-all duration-700 ease-in-out mb-4"
          style={{
            fontFamily: '., serif',
            color: isHovered ? '#FFF0E5' : '#9D5C63',
            fontWeight: 600,
            textAlign: 'center'
          }}
        >
          {service.title}
        </h3>

        {/* Book Now - Only visible on hover */}
        <div
          className="flex items-center gap-2 transition-all duration-700"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(20px)'
          }}
        >
          <span
            className="text-base text-[#FFF0E5]"
            style={{
              fontFamily: '., serif',
              fontWeight: 500
            }}
          >
            Book Now
          </span>
          <ArrowRight size={20} color="#FFF0E5" strokeWidth={2.5} />
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;