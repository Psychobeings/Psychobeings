import React from 'react';
import rightGif from '../assets/rightGif.png'; // Replace with your image/illustration asset

const WhatWeDo = () => {
  return (
    <section className="bg-gradient-to-br from-[#064646] via-[#097f7f] to-[#092c2c] text-white py-16 px-6 sm:px-8 md:py-24 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* ================= HERO SECTION ================= */}
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

            <p className="text-lg sm:text-xl text-teal-50/90 font-medium leading-relaxed max-w-2xl">
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
                  alt="Support Illustration"
                  className="w-52 h-52 sm:w-64 sm:h-64 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

        </div>

        {/* ================= WHAT MAKES PSYCHOBEINGS DIFFERENT ================= */}
        <div className="space-y-12 border-t border-white/10 pt-16">
          
          {/* Section Header */}
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What Makes Psychobeings Different?
            </h3>
            <p className="text-teal-100 text-base sm:text-lg font-light leading-relaxed">
              Guided by clinical excellence and genuine care. We don't believe in simply helping you cope—we empower you to understand yourself, strengthen resilience, and build lasting transformation.
            </p>
          </div>

          {/* Streamlined Feature Rows (No Cards) */}
          <div className="space-y-6 max-w-5xl mx-auto">
            
            {/* Feature 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-3xl text-teal-200">
                🌿
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">A Safe & Confidential Space</h4>
                <p className="text-teal-50/80 text-base leading-relaxed font-light">
                  Feel heard without fear of judgment in an environment built on absolute privacy, deep empathy, and unconditional respect for your personal story.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-3xl text-teal-200">
                🧠
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Evidence-Based Clinical Practice</h4>
                <p className="text-teal-50/80 text-base leading-relaxed font-light">
                  Our practice bridges academic rigor and human connection—integrating proven, scientifically supported therapeutic frameworks tailored to meet your real-world needs.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-3xl text-teal-200">
                💙
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Personalized Care & Flexibility</h4>
                <p className="text-teal-50/80 text-base leading-relaxed font-light">
                  No two journeys are identical. Every plan is customized around your life—offering individual therapy, adolescent guidance, and corporate wellness across flexible online and in-person sessions.
                </p>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-3xl text-teal-200">
                🤝
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Collaborative Partnership</h4>
                <p className="text-teal-50/80 text-base leading-relaxed font-light">
                  Therapy is a side-by-side journey. We work actively with you to unpack challenges, co-create actionable coping strategies, and unlock personal clarity.
                </p>
              </div>
            </div>

            {/* Feature 5 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10">
              <div className="w-14 h-14 shrink-0 rounded-2xl bg-teal-400/20 border border-teal-300/30 flex items-center justify-center text-3xl text-teal-200">
                🌱
              </div>
              <div className="space-y-1">
                <h4 className="text-xl font-bold text-white">Growth Beyond the Session</h4>
                <p className="text-teal-50/80 text-base leading-relaxed font-light">
                  Our commitment extends beyond immediate symptom relief—equipping you with lifelong emotional tools, confidence, and resilience for long-term well-being.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* ================= ACTION BUTTONS ================= */}
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