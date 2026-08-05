import React from 'react';
import rightGif from '../assets/rightGif.png'; // Replace with a better one if needed

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-[#064646] via-[#097f7f] to-[#092c2c] text-white py-16 px-6 sm:px-8 md:py-24 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Hero Section: Split Header & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Main Title & Lead Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold tracking-widest uppercase text-teal-200">
              <span className="w-2 h-2 rounded-full bg-teal-300 animate-pulse"></span>
              Our Approach
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              How We Support You
            </h2>

            <p className="text-lg sm:text-xl text-teal-50 font-medium leading-relaxed max-w-2xl">
              Healing isn't about having all the answers—it's about having the right support. Whether you're taking your first step or continuing your journey, we're here to help you build confidence, gain clarity, and move forward with purpose.
            </p>
          </div>

          {/* Graphic Container with Soft Glow */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-xs sm:max-w-sm">
              <div className="absolute inset-0 bg-teal-300/20 rounded-3xl blur-2xl transform scale-95"></div>
              <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl flex justify-center items-center">
                <img
                  src={rightGif}
                  alt="Illustration"
                  className="w-52 h-52 sm:w-64 sm:h-64 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Middle Section: 2 Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
          
          {/* Pillar 1 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-2xl text-teal-200">
              💡
            </div>
            <h3 className="text-2xl font-bold text-white">Compassionate & Personalised Care</h3>
            <p className="text-teal-50/90 leading-relaxed text-base">
              Whether you're feeling overwhelmed, navigating life changes, or simply looking for a safe space to better understand yourself, we provide compassionate, evidence-based therapy tailored to your unique needs. Our sessions are available both online and in person, offering flexibility that fits your lifestyle.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-8 hover:bg-white/15 hover:border-white/30 transition-all duration-300 shadow-xl space-y-3">
            <div className="w-12 h-12 rounded-xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-2xl text-teal-200">
              🌱
            </div>
            <h3 className="text-2xl font-bold text-white">Holistic Growth & Programmes</h3>
            <p className="text-teal-50/90 leading-relaxed text-base">
              From individual therapy and adolescent counselling to corporate wellness programmes and interactive workshops, every service is designed to foster emotional resilience, self-awareness, and long-term wellbeing in a supportive, non-judgmental environment.
            </p>
          </div>

        </div>

        {/* Bottom Bar: Action Buttons */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 border-t border-white/10">
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white text-[#092c2c] font-bold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-center">
            Book a Session
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white/10 border border-white/30 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-center">
            Explore Services
          </button>
          
          <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-white/20 text-teal-100 font-semibold hover:bg-white/10 hover:text-white transition-all duration-300 text-center">
            Our Approach
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;