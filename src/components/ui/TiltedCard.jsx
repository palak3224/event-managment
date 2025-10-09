import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = false,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [dimensions, setDimensions] = useState({
    containerHeight: '100%',
    containerWidth: '100%',
    imageHeight: '100%',
    imageWidth: '100%'
  });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);

      // Responsive dimensions
      if (window.innerWidth < 640) {
        // Mobile
        setDimensions({
          containerHeight: '300px',
          containerWidth: '100%',
          imageHeight: '300px',
          imageWidth: '100%'
        });
      } else if (window.innerWidth < 768) {
        // Small tablets
        setDimensions({
          containerHeight: '350px',
          containerWidth: '100%',
          imageHeight: '350px',
          imageWidth: '100%'
        });
      } else if (window.innerWidth < 1024) {
        // Tablets
        setDimensions({
          containerHeight: '400px',
          containerWidth: '100%',
          imageHeight: '400px',
          imageWidth: '100%'
        });
      } else {
        // Desktop - use provided dimensions
        setDimensions({
          containerHeight,
          containerWidth,
          imageHeight,
          imageWidth
        });
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [containerHeight, containerWidth, imageHeight, imageWidth]);

  function handleMouse(e) {
    if (!ref.current || isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleTouch(e) {
    if (!ref.current || !isMobile) return;

    const rect = ref.current.getBoundingClientRect();
    const touch = e.touches[0];
    const offsetX = touch.clientX - rect.left - rect.width / 2;
    const offsetY = touch.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -(rotateAmplitude * 0.5);
    const rotationY = (offsetX / (rect.width / 2)) * (rotateAmplitude * 0.5);

    rotateX.set(rotationX);
    rotateY.set(rotationY);
  }

  function handleMouseEnter() {
    if (isMobile) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
  }

  function handleTouchStart() {
    if (!isMobile) return;
    scale.set(1.05);
  }

  function handleTouchEnd() {
    if (!isMobile) return;
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full flex flex-col items-center justify-center"
      style={{
        height: dimensions.containerHeight,
        width: dimensions.containerWidth,
        perspective: isMobile ? '1200px' : '800px'
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchMove={handleTouch}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {showMobileWarning && isMobile && (
        <div className="absolute top-4 text-center text-sm px-4 text-gray-600">
          Touch and drag to interact with the card
        </div>
      )}

      <motion.div
        className="relative"
        style={{
          width: dimensions.imageWidth,
          height: dimensions.imageHeight,
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute top-0 left-0 object-cover rounded-2xl md:rounded-[15px] will-change-transform shadow-2xl"
          style={{
            width: dimensions.imageWidth,
            height: dimensions.imageHeight,
            transform: 'translateZ(0)'
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div 
            className="absolute top-0 left-0 z-[2] will-change-transform"
            style={{
              transform: 'translateZ(30px)'
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && !isMobile && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] shadow-md"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption
          }}
        >
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}