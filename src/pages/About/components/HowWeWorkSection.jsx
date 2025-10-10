import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const HowWeWorkSection = () => {
  return (
    <section className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto bg-white">
      <div>
        <span 
          className="block mb-6 text-sm tracking-widest uppercase"
          style={{ 
            fontFamily: 'Texturina, serif',
            color: '#d4af37',
            fontWeight: 600
          }}
        >
          Our Approach
        </span>
        <h3 
          className="text-5xl md:text-6xl mb-8"
          style={{ 
            fontFamily: 'Texturina, serif',
            color: '#d4af37',
            fontWeight: 700
          }}
        >
          How We Work
        </h3>
        <p 
          className="text-lg md:text-xl leading-relaxed mb-8"
          style={{ 
            fontFamily: 'Texturina, serif',
            color: '#2d1b4e'
          }}
        >
          From intimate gatherings to grand celebrations, we orchestrate every detail with precision and elegance. Our curated approach transforms your vision into unforgettable moments.
        </p>
        <button 
          className="px-8 py-3 border-2 transition-all duration-300"
          style={{
            fontFamily: 'Texturina, serif',
            fontSize: '16px',
            fontWeight: 600,
            letterSpacing: '1px',
            backgroundColor: '#2d1b4e',
            color: '#d4af37',
            borderColor: '#d4af37'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#d4af37';
            e.target.style.color = '#2d1b4e';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#2d1b4e';
            e.target.style.color = '#d4af37';
          }}
        >
          Explore Our Services
        </button>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const shuffle = (array) => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

const squareData = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?w=800&q=80",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=800&q=80",
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?w=800&q=80",
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
  },
  {
    id: 13,
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    id: 14,
    src: "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=800&q=80",
  },
  {
    id: 15,
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
  },
  {
    id: 16,
    src: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80",
  },
];

const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  useEffect(() => {
    shuffleSquares();

    return () => clearTimeout(timeoutRef.current);
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares());

    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  };

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[500px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default HowWeWorkSection;