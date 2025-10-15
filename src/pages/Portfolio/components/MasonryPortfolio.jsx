import { useState } from 'react';
import Masonry from '@/components/ui/Masonry';

const portfolioImages = [
  {
    id: "1",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    url: "https://example.com",
    height: 800,
    category: "Wedding",
    title: "Luxury Wedding"
  },
  {
    id: "2",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    url: "https://example.com",
    height: 600,
    category: "Corporate",
    title: "Corporate Summit"
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80",
    url: "https://example.com",
    height: 500,
    category: "Entertainment",
    title: "Music Festival"
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
    url: "https://example.com",
    height: 700,
    category: "Corporate",
    title: "Product Launch"
  },
  {
    id: "5",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80",
    url: "https://example.com",
    height: 900,
    category: "Exhibition",
    title: "Trade Show"
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
    url: "https://example.com",
    height: 550,
    category: "Social",
    title: "Birthday Party"
  },
  {
    id: "7",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    url: "https://example.com",
    height: 650,
    category: "Social",
    title: "Anniversary Gala"
  },
  {
    id: "8",
    img: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    url: "https://example.com",
    height: 750,
    category: "Corporate",
    title: "Conference Hall"
  },
  {
    id: "9",
    img: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
    url: "https://example.com",
    height: 600,
    category: "Wedding",
    title: "Grand Reception"
  },
  {
    id: "10",
    img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&q=80",
    url: "https://example.com",
    height: 850,
    category: "Social",
    title: "Evening Celebration"
  },
  {
    id: "11",
    img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
    url: "https://example.com",
    height: 500,
    category: "Corporate",
    title: "Business Meeting"
  },

  {
    id: "13",
    img: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    url: "https://example.com",
    height: 650,
    category: "Entertainment",
    title: "Live Concert"
  },
  {
    id: "14",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    url: "https://example.com",
    height: 700,
    category: "Wedding",
    title: "Outdoor Ceremony"
  },
  {
    id: "15",
    img: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80",
    url: "https://example.com",
    height: 550,
    category: "Corporate",
    title: "Tech Conference"
  },
  {
    id: "16",
    img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    url: "https://example.com",
    height: 900,
    category: "Social",
    title: "Garden Party"
  },
  {
    id: "17",
    img: "https://images.unsplash.com/photo-1558008258-3256797b43f3?w=800&q=80",
    url: "https://example.com",
    height: 600,
    category: "Exhibition",
    title: "Art Gallery Opening"
  },
  {
    id: "18",
    img: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&q=80",
    url: "https://example.com",
    height: 750,
    category: "Wedding",
    title: "Reception Dinner"
  },
  {
    id: "19",
    img: "https://images.unsplash.com/photo-1509824227185-9c5a01ceba0d?w=800&q=80",
    url: "https://example.com",
    height: 850,
    category: "Entertainment",
    title: "DJ Performance"
  },
  {
    id: "20",
    img: "https://images.unsplash.com/photo-1511578194003-00c80e42dc9b?w=800&q=80",
    url: "https://example.com",
    height: 500,
    category: "Corporate",
    title: "Networking Event"
  },
  {
    id: "21",
    img: "https://images.unsplash.com/photo-1464047736614-af63643285bf?w=800&q=80",
    url: "https://example.com",
    height: 800,
    category: "Social",
    title: "Rooftop Gathering"
  },
  {
    id: "22",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&q=80",
    url: "https://example.com",
    height: 650,
    category: "Exhibition",
    title: "Fashion Showcase"
  },
  {
    id: "23",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    url: "https://example.com",
    height: 700,
    category: "Wedding",
    title: "Beach Wedding"
  },
  {
    id: "24",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    url: "https://example.com",
    height: 550,
    category: "Entertainment",
    title: "Theater Performance"
  }
];

const categories = ['All', 'Wedding', 'Corporate', 'Social', 'Entertainment', 'Exhibition'];

const MasonryPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  return (
    <section className="relative w-full bg-white py-20 px-6">
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

        .category-btn {
          position: relative;
          transition: all 0.3s ease;
        }

        .category-btn::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #d4af37, #f4d03f);
          transition: width 0.3s ease;
        }

        .category-btn.active::after,
        .category-btn:hover::after {
          width: 100%;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] golden font-semibold mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-purple texturina mb-4">
            Portfolio Gallery
          </h2>
          <div className="w-24 h-1 golden-bg mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of stunning events and celebrations
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`category-btn px-6 py-3 font-semibold transition-colors ${
                activeCategory === category
                  ? 'active text-dark-purple'
                  : 'text-gray-500 hover:text-dark-purple'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="min-h-[800px]">
          <Masonry
            items={filteredImages}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={0.98}
            blurToFocus={true}
            colorShiftOnHover={false}
          />
        </div>

      </div>
    </section>
  );
};

export default MasonryPortfolio;