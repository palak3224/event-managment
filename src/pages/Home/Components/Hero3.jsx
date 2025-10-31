import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Hero3 = () => {
    const [isVideoLoaded, setIsVideoLoaded] = useState(false);

    useEffect(() => {
        const video = document.getElementById('hero-video');
        if (video) {
            video.addEventListener('loadeddata', () => {
                setIsVideoLoaded(true);
            });
        }
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { 
            opacity: 0, 
            x: -60,
            filter: 'blur(10px)'
        },
        visible: { 
            opacity: 1, 
            x: 0,
            filter: 'blur(0px)',
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
                
                .primary-mauve-bg {
                    background-color: #9D5C63;
                }
                
                .text-espresso {
                    color: #3E2723;
                }

                .primary-mauve-text {
                    color: #9D5C63;
                }

                .accent-cream-text {
                    color: #FFF0E5;
                }

                .accent-cream-bg {
                    background-color: #FFF0E5;
                }
                
                .hover-deep-mauve-bg:hover {
                    background-color: #7A3E46;
                }

                .hero-overlay {
                    background: linear-gradient(
                        90deg,
                        rgba(62, 39, 35, 0.85) 0%,
                        rgba(62, 39, 35, 0.65) 20%,
                        rgba(62, 39, 35, 0.3) 35%,
                        transparent 100%
                    );
                }

                @media (max-width: 768px) {
                    .hero-overlay {
                        background: linear-gradient(
                            180deg,
                            rgba(62, 39, 35, 0.4) 0%,
                            rgba(62, 39, 35, 0.75) 50%,
                            rgba(62, 39, 35, 0.85) 100%
                        );
                    }
                }

                .hero-video {
                    object-fit: cover;
                    width: 100%;
                    height: 100%;
                }

                .text-shadow-elegant {
                    text-shadow: 2px 4px 12px rgba(0, 0, 0, 0.6);
                }

                .button-glow {
                    box-shadow: 0 4px 20px rgba(157, 92, 99, 0.4);
                }

                .button-glow:hover {
                    box-shadow: 0 6px 30px rgba(122, 62, 70, 0.6);
                }
            `}</style>

            <section className="relative w-full h-screen min-h-[600px] overflow-hidden bg-[#3E2723]">
                {/* Video Background */}
                <div className="absolute inset-0 w-full h-full">
                    <video
                        id="hero-video"
                        className="hero-video"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%233E2723' width='1920' height='1080'/%3E%3C/svg%3E"
                    >
                        <source
                            src="https://res.cloudinary.com/ddnb10zkq/video/upload/v1761659495/VN20251028_182012_svezm4.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>

                    {/* Gradient Overlay */}
                    {/* <div className="absolute inset-0 hero-overlay"></div> */}
                </div>

                {/* Content Container */}
                <div className="relative z-10 h-full flex items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
                    <div className="max-w-7xl mx-auto w-full">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="max-w-2xl"
                        >
                            {/* Subtitle */}
                            <motion.div
                                variants={itemVariants}
                                className="mb-4 md:mb-6"
                            >
                                <span className="inline-block accent-cream-bg primary-mauve-text px-4 py-2 rounded-full text-xs md:text-sm font-medium tracking-wider uppercase">
                                    Premium Event Management
                                </span>
                            </motion.div>

                            {/* Main Heading */}
                            <motion.h1
                                variants={itemVariants}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight text-shadow-elegant"
                                style={{
                                    // fontFamily: "'Playfair Display', serif",
                                    color: '#FFF0E5'
                                }}
                            >
                                Khao Khilao
                                <br />
                                <span className="primary-mauve-text">Sone do</span>
                            </motion.h1>

                            {/* Description */}
                            <motion.p
                                variants={itemVariants}
                                className="text-base sm:text-lg md:text-xl lg:text-xl mb-6 md:mb-8 leading-relaxed max-w-xl text-shadow-elegant"
                                style={{
                                    color: '#FFF0E5',
                                    lineHeight: '1.6'
                                }}
                            >
                                Crafting unforgettable celebrations with exquisite cuisine, 
                                elegant ambiance, and impeccable service. Your perfect event 
                                starts here.
                            </motion.p>

                            {/* CTA Button */}
                            <motion.div
                                variants={itemVariants}
                            >
                                <button
                                    className="primary-mauve-bg accent-cream-text px-8 md:px-10 py-4 md:py-5 rounded-lg hover-deep-mauve-bg transition-all duration-300 text-base md:text-lg font-semibold tracking-wide uppercase button-glow transform hover:scale-105"
                                    style={{
                                        letterSpacing: '1px'
                                    }}
                                >
                                    Plan Your Event
                                </button>
                            </motion.div>

                            {/* Additional Info */}
                            <motion.div
                                variants={itemVariants}
                                className="mt-8 md:mt-12 flex flex-wrap gap-6 md:gap-8"
                            >
                                <div className="text-shadow-elegant">
                                    <div className="text-2xl md:text-3xl font-bold primary-mauve-text" style={{ color: '#9D5C63' }}>40+</div>
                                    <div className="text-xs md:text-sm accent-cream-text uppercase tracking-wider">Years Experience</div>
                                </div>
                                <div className="text-shadow-elegant">
                                    <div className="text-2xl md:text-3xl font-bold primary-mauve-text" style={{ color: '#9D5C63' }}>5000+</div>
                                    <div className="text-xs md:text-sm accent-cream-text uppercase tracking-wider">Events Hosted</div>
                                </div>
                                <div className="text-shadow-elegant">
                                    <div className="text-2xl md:text-3xl font-bold primary-mauve-text" style={{ color: '#9D5C63' }}>100%</div>
                                    <div className="text-xs md:text-sm accent-cream-text uppercase tracking-wider">Satisfaction</div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="flex flex-col items-center gap-2"
                    >
                        <span className="text-xs accent-cream-text uppercase tracking-widest">Scroll</span>
                        <svg
                            className="w-6 h-6 accent-cream-text"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </section>
        </>
    );
};

export default Hero3;