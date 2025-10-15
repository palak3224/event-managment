import InfiniteMenu from "@/components/ui/InfiniteMenu";

function ServicesMenu() {
  const items = [
    {
      image: 'https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1666069028891-JO1ACGMSB80YDXK40LER/hyatt+regency+dehradun+wedding29.jpg',
      link: 'https://google.com/',
      title: '',
      description: 'Unforgettable celebrations crafted with precision',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/2193073c-f4ac-4b29-ac04-6186d146f928/TG-66.jpg',
      link: 'https://google.com/',
      title: '',
      description: 'Professional gatherings that inspire excellence',
    },
    {
      image: 'https://images.squarespace-cdn.com/content/v1/52ed3507e4b041396187d22b/1680170525934-NHU7ZZ34IQMJGPVOHOI5/WeddingSU67.JPG',
      link: 'https://google.com/',
      title: '',
      description: 'Memorable moments with loved ones',
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/fb/8c/b8/gazebo-restaurant-party.jpg',
      link: 'https://google.com/',
      title: '',
      description: 'Stunning settings under the open sky',
    },
    {
      image: 'https://media-cdn.tripadvisor.com/media/photo-s/1a/fb/8c/b8/gazebo-restaurant-party.jpg',
      link: 'https://google.com/',
      title: '',
      description: 'Luxury events that exceed expectations',
    },
  ];

  return (
    <section className="w-full min-h-screen bg-white py-20 px-6">
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

        .golden-border {
          position: relative;
        }

        .golden-border::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 1.5rem;
          padding: 4px;
          background: linear-gradient(135deg, #d4af37, #f4d03f, #d4af37);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] golden font-semibold mb-4">
            Explore Our Offerings
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-dark-purple texturina mb-6 leading-tight">
            Our Premium Services
          </h2>
          <div className="w-32 h-1 golden-bg mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Exceptional event solutions tailored to your vision
          </p>
        </div>

        {/* Main Content Container */}
        <div className="golden-border bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(45,27,78,0.12)] hover:shadow-[0_25px_80px_rgba(212,175,55,0.25)] transition-shadow duration-500">
          {/* Interactive Menu */}
          <div className="relative h-[600px] md:h-[500px]">
            <InfiniteMenu items={items} />
          </div>

          {/* Bottom Accent */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-center md:text-left">
                <span className="font-semibold text-dark-purple">Interactive Experience:</span> Drag to explore our diverse event services
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full golden-bg animate-pulse"></div>
                <span className="text-sm text-gray-500">Live Preview</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        {/* <div className="text-center mt-16">
          <p className="text-gray-600 mb-6 text-lg">
            Ready to transform your vision into reality?
          </p>
          <button className="px-8 py-4 golden-bg text-dark-purple font-bold text-lg rounded-full hover:shadow-[0_10px_30px_rgba(212,175,55,0.4)] transition-all duration-300 hover:scale-105">
            Schedule a Consultation
          </button>
        </div> */}
      </div>
    </section>
  );
}

export default ServicesMenu;