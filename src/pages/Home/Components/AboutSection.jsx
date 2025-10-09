import TiltedCard from '@/components/ui/TiltedCard';
import React from 'react';

const AboutSection = () => {
    return (
        <div className="w-full bg-white py-16 md:py-24 px-4 md:px-8">
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
      `}</style>

            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
                    {/* Image Section - 40% */}
                    <div className="w-full lg:w-2/5">
                        <div className="relative rounded-3xl shadow-xl">
                            <TiltedCard
                                imageSrc="https://fossetta.in/images/about/about.jpg"
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
                            className="golden text-3xl md:text-4xl lg:text-5xl mb-2"
                            style={{
                                fontFamily: 'Texturina, serif',
                                fontWeight: 600,
                                fontStyle: 'italic'
                            }}
                        >
                            Experience The Sublime!
                        </h2>

                        <h3
                            className="text-dark-purple text-2xl md:text-3xl lg:text-4xl mb-6"
                            style={{
                                fontFamily: 'Texturina, serif',
                                fontWeight: 600
                            }}
                        >
                            The Perfect Choice for Your Next Event.
                        </h3>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p className="text-base md:text-md">
                                <span className="golden text-5xl md:text-6xl float-left mr-3 leading-none" style={{ fontFamily: 'Texturina, serif', fontWeight: 700 }}>F</span>
                                osetta Gourmet Catering guarantee outstanding food presentation, creative cuisines, and a wide range of service styles. With over 40 years of industry experience, Fosetta Gourmet Catering is one of the leading catering services in Delhi and Gurgaon. The company is known for its expertise in wedding catering, corporate events, destination weddings, and private luxury events.
                            </p>

                            <p className="text-base md:text-md">
                                What sets Fosetta Gourmet Catering apart from other catering services is their USP, which is their ability to offer exceptional presentation, creative cuisines, and food trends. The catering service is aware of how important presentation is when it comes to catering, which is why they always ensure that their dishes are not only delicious but also beautifully presented. With Fosetta Gourmet Catering, you can be sure that all your guests will be impressed by the quality of the food and the way it is presented.
                            </p>

                            <p className="text-base md:text-md">
                                In addition to exceptional presentation and creative cuisines, Fosetta Gourmet Catering also offers a variety of service styles to choose from. Whether you want a sit-down dinner, a buffet, or live counters, the catering service can cater to your needs. The variety of service styles ensures that you can choose the one that best suits your event.
                            </p>
                        </div>

                        <div className="pt-4">
                            <button
                                className="dark-purple text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity duration-300"
                                style={{
                                    fontFamily: 'Texturina, serif',
                                    fontWeight: 500,
                                    letterSpacing: '0.5px'
                                }}
                            >
                                <span className="golden">READ MORE ABOUT US</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;