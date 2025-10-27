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


  const categories = [
    {
      "text": "Engagements & Proposals",
      "imageUrl": "https://loverly.com/api/v1/attachments/8222af6b-d12d-4802-a8b4-dcee88f3edcd"
    },
    {
      "text": "Wedding Planning",
      "imageUrl": "https://loverly.com/api/v1/attachments/9dec664a-d654-4eb2-8eff-14fe8bef8e35"
    },
    {
      "text": "Ideas & Inspiration",
      "imageUrl": "https://loverly.com/api/v1/attachments/1672183a-cbe8-4d1b-b0de-110cdffd95e4"
    },
    {
      "text": "Wedding Fashion",
      "imageUrl": "https://loverly.com/api/v1/attachments/005f1cd4-d225-4771-ab09-2f3221b54824"
    },
    {
      "text": "Showers & Parties",
      "imageUrl": "https://loverly.com/api/v1/attachments/35904d0f-2a51-444d-921f-6ede7c80ee47"
    },
    {
      "text": "Love & Relationships",
      "imageUrl": "https://loverly.com/api/v1/attachments/66124432-5028-4dca-809e-51fc5d73bc45"
    },
    {
      "text": "Beauty & Wellness",
      "imageUrl": "https://loverly.com/api/v1/attachments/74eaa657-69a8-4cf5-8c78-943b05be76cf"
    },
    {
      "text": "Travel & Honeymoons",
      "imageUrl": "https://loverly.com/api/v1/attachments/1ad83012-3f60-4588-8bf4-035082a74a8c"
    }
  ];

  return (
    <section className="w-full min-h-[80vh] bg-[#FAF8F5] py-20 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
        
        .texturina {
          font-family: 'Texturina', serif;
        }

        .themed-border {
          position: relative;
        }

        .themed-border::before {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 1.5rem;
          padding: 4px;
          background: linear-gradient(135deg, #9D5C63, #7A3E46, #9D5C63);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold mb-4">
            Explore Our Offerings
          </p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#3E2723] texturina mb-6 leading-tight">
            Our Premium Services
          </h2>
          <div className="w-32 h-1 bg-[#9D5C63] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-[#3E2723]/80 max-w-3xl mx-auto leading-relaxed">
            Exceptional event solutions tailored to your vision
          </p>
        </div>

        {/* Main Content Container */}
        <div className="themed-border bg-[#FFF0E5] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(157,92,99,0.12)] hover:shadow-[0_25px_80px_rgba(157,92,99,0.25)] transition-shadow duration-500">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="relative bg-[#FAF8F5] rounded-xl border-2 border-[#3E2723]/20 hover:border-[#9D5C63] shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer group p-5 flex items-center gap-4 hover:-translate-y-2 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#9D5C63] before:via-[#7A3E46] before:to-[#9D5C63] before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500 before:-z-10 hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9D5C63]/20 via-[#7A3E46]/20 to-[#9D5C63]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

                  <div className="w-16 h-16 flex-shrink-0 overflow-hidden rounded-xl shadow-md group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-[#9D5C63]/50 transition-all duration-500 relative z-10 bg-white">
                    <img
                      src={category.imageUrl}
                      alt={category.text}
                      className="w-full h-full object-cover group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500 group-hover:brightness-110"
                    />
                  </div>

                  <div className="relative z-10 flex-1">
                    <h3 className="text-base font-semibold text-[#3E2723] group-hover:text-[#FFF0E5] transition-all duration-500 group-hover:translate-x-2 group-hover:font-bold">
                      {category.text}
                    </h3>
                    <div className="h-0.5 w-0 bg-[#FFF0E5] group-hover:w-full transition-all duration-500 mt-1"></div>
                  </div>

                  <div className="absolute -right-8 -top-8 w-24 h-24 bg-[#9D5C63]/20 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-[#9D5C63]/30 transition-all duration-700"></div>
                  <div className="absolute -left-8 -bottom-8 w-24 h-24 bg-[#7A3E46]/20 rounded-full blur-2xl group-hover:scale-150 group-hover:bg-[#7A3E46]/30 transition-all duration-700"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Spacing between sections */}
        <div className="h-24"></div>

        {/* Interactive Menu Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#9D5C63] font-semibold mb-4">
            Experience Our Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#3E2723] texturina mb-6 leading-tight">
            Signature Events Gallery
          </h2>
          <div className="w-32 h-1 bg-[#9D5C63] mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-[#3E2723]/80 max-w-3xl mx-auto leading-relaxed">
            Explore our curated collection of extraordinary events and celebrations
          </p>
        </div>

        {/* Interactive Menu section*/}
        <div className="themed-border bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(157,92,99,0.12)] hover:shadow-[0_25px_80px_rgba(157,92,99,0.25)] transition-shadow duration-500">
          {/* Interactive Menu */}
          <div className="relative h-[600px] md:h-[500px]">
            <InfiniteMenu items={items} />
          </div>

          {/* Bottom Accent */}
          <div className="mt-8 pt-8 border-t border-gray-200">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-600 text-center md:text-left">
                <span className="font-semibold text-[#3E2723]">Interactive Experience:</span> Drag to explore our diverse event services
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#9D5C63] animate-pulse"></div>
                <span className="text-sm text-gray-500">Live Preview</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default ServicesMenu;