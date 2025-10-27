import { useState } from 'react';
import Masonry from '@/components/ui/Masonry';

const portfolioImages = [
  {
    id: "1",
    img: "https://blissfulplans.com/wp-content/uploads/2023/12/big-fat-indian-weddings-1.jpg",
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
    img: "https://www.shutterstock.com/image-photo/pushkar-rajasthan-india-november-06-600nw-2431623153.jpg",
    url: "https://example.com",
    height: 550,
    category: "Social",
    title: "Birthday Party"
  },
  {
    id: "7",
    img: "https://thumbs.dreamstime.com/b/people-take-part-national-convention-%E2%80%98empowerment-women-social-transformation-headquarters-brahma-166081264.jpg",
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
    img: "https://d397bfy4gvgcdm.cloudfront.net/424199-AVW-1695.jpeg",
    url: "https://example.com",
    height: 600,
    category: "Wedding",
    title: "Grand Reception"
  },
  {
    id: "10",
    img: "https://www.captainjoe.in/blog/images/house-party-in-gurgaon-instagram-worthy-catering.jpg",
    url: "https://example.com",
    height: 850,
    category: "Social",
    title: "Evening Celebration"
  },
  {
    id: "11",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeHKfJnOL-d61u6AsRILv8oLBfcLFsOyDTYtC-ucvXCoPHzbtS8sjgAwWzi9kOsTnwJQ&usqp=CAU",
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
    img: "https://d397bfy4gvgcdm.cloudfront.net/146012-Sharanya-Terry-Wedding-1167.jpeg",
    url: "https://example.com",
    height: 700,
    category: "Wedding",
    title: "Outdoor Ceremony"
  },
  {
    id: "15",
    img: "https://1upevents.in/wp-content/uploads/2019/04/corporate-events-pune.jpg",
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
    img: "https://static8.depositphotos.com/1009307/1039/i/450/depositphotos_10395278-stock-photo-decorated-ballroom-for-indian-weding.jpg",
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
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_8eZYDeRpNHeeAdLukfZxHC5T9s9DVIphZQ&s",
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
    img: "https://i.pinimg.com/736x/98/5f/9b/985f9b27b6e55fa4ba5dcf6c6a6e5fbd.jpg",
    url: "https://example.com",
    height: 650,
    category: "Exhibition",
    title: "Fashion Showcase"
  },
  {
    id: "23",
    img: "https://cdn0.hitched.co.uk/vendor/0147/3_2/960/jpg/indian-sikh-wedding-photographer-london-15_4_370147-173014610390129.jpeg",
    url: "https://example.com",
    height: 700,
    category: "Wedding",
    title: "Beach Wedding"
  },
  {
    id: "24",
    img: "https://i.pinimg.com/736x/33/93/c8/3393c868687d71bd902a424d490413ed.jpg",
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
    <section className="relative w-full bg-[#FAF8F5] py-20 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
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
          background: linear-gradient(90deg, #9D5C63, #7A3E46);
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
          <p className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold mb-4">
            Our Work
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] texturina mb-4">
            Portfolio Gallery
          </h2>
          <div className="w-24 h-1 bg-[#9D5C63] mx-auto mb-6"></div>
          <p className="text-xl text-[#3E2723]/80 max-w-2xl mx-auto">
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
                  ? 'active text-[#9D5C63]'
                  : 'text-[#3E2723]/60 hover:text-[#9D5C63]'
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