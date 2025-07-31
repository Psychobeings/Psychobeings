import React from 'react';
import rightGif from '../assets/rightGif.png'; // Replace with a better one if needed

const WhatWeDo = () => {
  return (
    <section className="bg-[#097f7f] text-white py-14 px-6 md:py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left: Centered Text Content */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-wide text-white">
            WHAT WE DO
          </h2>

          <p className="text-lg md:text-xl leading-relaxed">
            We offer <span className="font-bold text-#064646">online counselling</span> sessions for individuals (ages 13–30) and couples, 
            addressing stress, anxiety, work-life balance, childhood trauma, and feelings of emptiness — all in a 
            safe, judgment-free space.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            We also specialize in <span className="font-bold text-pure-white">student-focused psychological research guidance</span>, 
            helping learners from IBDP, undergraduate, and postgraduate levels.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Whether you're seeking emotional support or academic clarity, our goal is to make your journey 
            smoother, more confident, and deeply supported.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            {['Therapy', 'Pricing', 'Mentorship'].map((label, idx) => (
              <button
                key={idx}
                className="bg-white text-[#092c2c] px-5 py-2.5 rounded-full font-semibold shadow-md hover:bg-[#064646] hover:text-white transition duration-300"
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: GIF/Illustration */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={rightGif}
            alt="Illustration"
            className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
