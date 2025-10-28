import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HowWeWorkSection = () => {
  return (
    <section className="w-full px-8 py-24 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto bg-[#FAF8F5]">
      <div>
        <span 
          className="block mb-6 text-sm text-[#9D5C63] tracking-widest uppercase"
          style={{ 
            fontFamily: '., serif',
            fontWeight: 600
          }}
        >
          Our Approach
        </span>
        <h3 
          className="text-5xl md:text-6xl text-[#9D5C63] mb-8"
          style={{ 
            fontFamily: '., serif',
            fontWeight: 700
          }}
        >
          How We Work
        </h3>
        <p 
          className="text-lg md:text-lg text-[#3E2723] leading-relaxed mb-8"
          style={{ 
            fontFamily: '., serif',
          }}
        >
          At Khao Khilao Sone Do, our mission is to transform every event into an unforgettable experience. We are committed to providing exceptional hospitality, innovative solutions, and meticulous attention to detail. Whether it’s a grand wedding, a corporate gathering, or an intimate celebration, we strive to exceed expectations by blending creativity, quality, and personalized service.
        </p>
        <Link to="/services">
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: '#7A3E46' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border-2 border-[#FFF0E5] bg-[#9D5C63] text-[#FFF0E5] transition-colors duration-300"
            style={{
              fontFamily: '., serif',
              fontSize: '16px',
              fontWeight: 600,
              letterSpacing: '1px',
            }}
          >
            Explore Our Services
          </motion.button>
        </Link>
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
    src: "https://weddingsutra.com/images/Vendor_Images/Wedding_Planners/classique-events/classique-02.jpg",
  },
  {
    id: 2,
    src: "https://weddingsutra.com/images/Vendor_Images/Wedding_Planners/classique-events/classique-12.jpg",
  },
  {
    id: 3,
    src: "https://eventsmanagementkerala.com/wp-content/uploads/2023/08/Germen-transparent-tent-wedding-events-Kerala%E2%80%8B.webp",
  },
  {
    id: 4,
    src: "https://eventsmanagementkerala.com/wp-content/uploads/2022/09/wedding2.webp",
  },
  {
    id: 5,
    src: "https://jaspira.in/wp-content/uploads/2024/11/Jiapur-6.webp",
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