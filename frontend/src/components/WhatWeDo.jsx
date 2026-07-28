import React from 'react';
import rightGif from '../assets/rightGif.png'; // Replace with a better one if needed

const WhatWeDo = () => {
  return (
    <section className="bg-[#097f7f] text-white py-14 px-6 md:py-20 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left: Centered Text Content */}
        <div className="space-y-6 text-center">
          <p className="uppercase tracking-[0.3em] text-sm text-teal-100 font-semibold">
            OUR APPROACH
          </p>  
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
            How We Support You
          </h2>

          <p className="text-lg md:text-xl leading-relaxed">
            Whether you're feeling overwhelmed, navigating life changes, or simply looking for a safe space to better understand yourself, we provide compassionate, evidence-based therapy tailored to your unique needs. Our sessions are available both online and in person, offering flexibility that fits your lifestyle.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            From individual therapy and adolescent counselling to corporate wellness programmes and interactive workshops, every service is designed to foster emotional resilience, self-awareness, and long-term wellbeing in a supportive, non-judgmental environment.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Healing isn't about having all the answers—it's about having the right support. Whether you're taking your first step or continuing your journey, we're here to help you build confidence, gain clarity, and move forward with purpose.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center pt-4">
            {['Book a Session', 'Explore Services', 'Our Approach'].map((label, idx) => (
              <button
                key={idx}
                className="rounded-full
border border-white/20
backdrop-blur-md
shadow-xl
hover:scale-105
transition-all
duration-300"
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
