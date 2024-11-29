import React from 'react';
import rightGif from '../assets/thinkingImage.gif'; // Replace with the actual GIF file path

const WhatWeDo = () => {
    return (
        <section className="bg-deep-mint text-dark-gunmetal py-12 px-6 md:py-16 md:px-8 lg:px-16">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                {/* Left Side: GIF */}
                <div className="flex justify-center lg:justify-start">
                    <img
                        src={rightGif}
                        alt="Animated Illustration"
                        className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover"
                    />
                </div>

                {/* Right Side: Content */}
                <div className="text-center lg:text-left space-y-4 md:space-y-6">
                    <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-wide">WHAT WE DO</h2>
                    <p className="text-base md:text-lg xl:text-xl">
                    We offer a diverse range of professional services, including individual and couples counseling, engaging workshops, and specialized CBSE Psychology tuition for students in grades 11 and 12.
                    </p>
                    <p className="text-base md:text-lg xl:text-xl">
                    Our expertise encompasses addressing key concerns such as stress management, anxiety relief, career planning, relationship dynamics, work-life integration, recovery from childhood trauma, exploration of existential challenges, and navigating feelings of emptiness with care and precision.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
                        <button className="bg-pure-white text-dark-gunmetal px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:bg-dark-gunmetal hover:text-pure-white sm:px-6 sm:py-3 md:text-lg">
                            Therapy
                        </button>
                        <button className="bg-pure-white text-dark-gunmetal px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:bg-dark-gunmetal hover:text-pure-white sm:px-6 sm:py-3 md:text-lg">
                            Diagnosis
                        </button>
                        <button className="bg-pure-white text-dark-gunmetal px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:bg-dark-gunmetal hover:text-pure-white sm:px-6 sm:py-3 md:text-lg">
                            Pricing
                        </button>
                        <button className="bg-pure-white text-dark-gunmetal px-4 py-2 rounded-full font-semibold transition-colors duration-300 hover:bg-dark-gunmetal hover:text-pure-white sm:px-6 sm:py-3 md:text-lg">
                            Couple's Counseling
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
