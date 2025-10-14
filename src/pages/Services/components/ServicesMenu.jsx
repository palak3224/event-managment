import InfiniteMenu from "@/components/ui/InfiniteMenu";

function ServicesMenu() {
  const items = [
    {
      image: 'https://picsum.photos/300/300?grayscale',
      link: 'https://google.com/',
      title: 'Item 1',
      description: 'This is pretty cool, right?',
    },
    {
      image: 'https://picsum.photos/400/400?grayscale',
      link: 'https://google.com/',
      title: 'Item 2',
      description: 'This is pretty cool, right?',
    },
    {
      image: 'https://picsum.photos/500/500?grayscale',
      link: 'https://google.com/',
      title: 'Item 3',
      description: 'This is pretty cool, right?',
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Item 4',
      description: 'This is pretty cool, right?',
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto border-4 border-[#d4af37] rounded-3xl p-10 text-center shadow-[0_0_30px_rgba(212,175,55,0.3)]">
        <h2 className="text-4xl md:text-5xl font-bold golden mb-12">
          Our Premium Services
        </h2>

        <div className="relative h-[600px]">
          <InfiniteMenu items={items} />
        </div>
      </div>
    </section>
  );
}

export default ServicesMenu;
