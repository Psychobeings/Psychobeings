import React from 'react';
import rightGif from '../assets/rightGif.png'; // Replace with a better one if needed

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-[#076666] via-[#097f7f] to-[#092c2c] text-white py-16 px-6 md:py-24 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Header & Intro */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block uppercase tracking-[0.25em] text-xs font-bold text-teal-200 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
            Our Approach
          </span>
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight tracking-tight">
            How We Support You
          </h2>
          <p className="text-lg md:text-xl text-teal-50 font-medium leading-relaxed pt-2">
            Healing isn't about having all the answers—it's about having the right support. Whether you're taking your first step or continuing your journey, we're here to help you build confidence, gain clarity, and move forward with purpose.
          </p>
        </div>

        {/* Core Content Grid: Feature Cards + Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Structured Approach Cards */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Card 1 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-teal-200 text-xl">
                  🌿
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Tailored Therapeutic Care</h3>
                  <p className="text-teal-50/90 text-base leading-relaxed">
                    Whether you're feeling overwhelmed, navigating life changes, or simply looking for a safe space to better understand yourself, we provide compassionate, evidence-based therapy tailored to your unique needs. Available both online and in person.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white/10 backdrop-blur-md border border-white/15 p-6 rounded-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-white/10 rounded-xl text-teal-200 text-xl">
                  🤝
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Comprehensive Programmes</h3>
                  <p className="text-teal-50/90 text-base leading-relaxed">
                    From individual therapy and adolescent counselling to corporate wellness programmes and interactive workshops, every service is designed to foster emotional resilience, self-awareness, and long-term wellbeing in a supportive, non-judgmental environment.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Hero Graphic */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md flex justify-center items-center">
              
              {/* Subtle ambient glow */}
              <div className="absolute inset-0 bg-teal-300/20 rounded-full blur-3xl transform scale-90"></div>

              {/* Graphic container */}
              <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
                <img
                  src={rightGif}
                  alt="Our Support Approach Illustration"
                  className="w-60 h-60 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Bottom CTA Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button className="px-8 py-3.5 rounded-full bg-white text-[#092c2c] font-bold hover:bg-teal-50 transition-all duration-300 shadow-xl hover:-translate-y-0.5">
            Book a Session
          </button>
          
          <button className="px-8 py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all duration-300 shadow-xl hover:-translate-y-0.5">
            Explore Services
          </button>
          
          <button className="px-8 py-3.5 rounded-full border border-white/20 bg-transparent text-teal-100 font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-0.5">
            Our Approach
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;