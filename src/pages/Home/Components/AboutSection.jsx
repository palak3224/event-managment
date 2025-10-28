import TiltedCard from '@/components/ui/TiltedCard';
import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection = () => {
    return (
        <div className="w-full bg-[#FAF8F5] py-16 md:py-24 px-4 md:px-8">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=.:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap');
                
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
                
                .hover-deep-mauve-bg:hover {
                    background-color: #7A3E46;
                }
            `}</style>

        <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Image Section - 40% */}
                    <div className="w-full lg:w-2/5">
                        <div className="relative rounded-3xl shadow-xl">
                            <TiltedCard
                                imageSrc="https://specialityexperiences.com/wp-content/uploads/2025/07/shutterstock_2590337365-1024x1024.jpg"
                                altText="Event Management"
                                captionText="Event Management"
                                containerHeight="500px"
                                containerWidth="500px"
                                imageHeight="500px"
                                imageWidth="500px"
                                rotateAmplitude={12}
                                scaleOnHover={1.1}
                                showMobileWarning={false}
                                showTooltip={true}
                                displayOverlayContent={false}
                            />
                        </div>
                    </div>

                    {/* Text Section - 60% */}
                    <div className="w-full lg:w-3/5 space-y-6">
                        <h2
                            className="text-espresso text-3xl md:text-4xl lg:text-5xl mb-2"
                            style={{
                                // fontFamily: '., serif',
                                // fontWeight: 600,
                                // fontStyle: 'italic'
                            }}
                        >
                            Experience The Sublime!
                        </h2>

                        <h3
                            className="text-espresso text-2xl md:text-3xl lg:text-4xl mb-6"
                            style={{
                                // fontFamily: '., serif',
                                // fontWeight: 600
                            }}
                        >
                            The Perfect Choice for Your Next Event
                        </h3>

                        <div className="space-y-4 text-[#3E2723] leading-relaxed">
                            <p className="text-base md:text-md">
                                <span className="primary-mauve-text text-5xl md:text-6xl float-left mr-3 leading-none" >K</span>
                                hao Khilao Sonedo is a premier catering service in Delhi and Gurgaon, known for its outstanding food presentation, creative cuisines, and versatile service styles. With over 40 years of industry experience, the team specializes in wedding catering, corporate events, destination weddings, and luxury private gatherings.
                            </p>

                            <p className="text-base md:text-md">
                                What truly sets Khao Khilao Sonedo apart is its focus on presentation and innovation. Every dish is crafted to delight both the palate and the eyes, ensuring your guests are impressed from the first glance to the last bite.
                            </p>

                            <p className="text-base md:text-md">
                                Whether you prefer a sit-down dinner, buffet, or live counters, Khao Khilao Sonedo offers flexible catering styles tailored to your event’s theme and atmosphere.
                            </p>
                        </div>

                        <div className="pt-4">
                            <Link to="/about">
                                <button
                                    className="primary-mauve-bg accent-cream-text px-8 py-3 rounded-lg hover-deep-mauve-bg transition-colors duration-300"
                                    style={{
                                        // fontFamily: '., serif',
                                        // fontWeight: 500,
                                        letterSpacing: '0.5px'
                                    }}
                                >
                                    READ MORE ABOUT US
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;