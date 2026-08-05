import React, { useState } from 'react';
import rightGif from '../assets/rightGif.png';

const WhatWeDo = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'Safe & Flexible Environment',
      description:
        'Whether you prefer online or in-person sessions, we provide a compassionate, non-judgmental space tailored to fit seamlessly into your lifestyle.',
    },
    {
      number: '02',
      title: 'Tailored & Evidence-Based Care',
      description:
        'From individual therapy to corporate wellness workshops, every service is custom-built around your unique needs, goals, and personal timeline.',
    },
    {
      number: '03',
      title: 'Empowerment & Long-Term Growth',
      description:
        'Healing isn’t about having all the answers—it’s about building emotional resilience, gaining clarity, and equipping you with tools to move forward with purpose.',
    },
  ];

  return (
    <section className="bg-gradient-to-br from-[#076666] via-[#097f7f] to-[#092c2c] text-white py-16 px-6 sm:px-8 md:py-24 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Interactive Methodology Content */}
        <div className="lg:col-span-7 space-y-8">
          
          {/* Header */}
          <div className="space-y-3">
            <span className="inline-block uppercase tracking-[0.25em] text-xs font-bold text-teal-200 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
              Our Approach
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              How We Support Your Journey
            </h2>
            <p className="text-teal-50 text-base sm:text-lg leading-relaxed max-w-2xl pt-2">
              We guide you through a compassionate, structured process designed to foster genuine self-awareness and lasting emotional well-being.
            </p>
          </div>

          {/* Progressive Approach Cards */}
          <div className="space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? 'bg-white/15 border-white/30 shadow-xl backdrop-blur-md translate-x-2'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 opacity-80 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span
                      className={`font-mono text-lg font-bold px-3 py-1 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-teal-300 text-[#092c2c]'
                          : 'bg-white/10 text-teal-100'
                      }`}
                    >
                      {step.number}
                    </span>
                    <div className="space-y-1">
                      <h3 className="text-lg font-bold text-white">
                        {step.title}
                      </h3>
                      <p className="text-sm sm:text-base text-teal-50/90 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Callouts with Proper Padding & Hierarchy */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="px-7 py-3.5 rounded-full bg-white text-[#092c2c] font-semibold hover:bg-teal-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Book a Session
            </button>
            <button className="px-7 py-3.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white font-semibold hover:bg-white/20 transition-all duration-300 hover:-translate-y-0.5">
              Explore Services
            </button>
            <button className="px-7 py-3.5 rounded-full text-teal-100 font-medium hover:text-white transition-colors">
              Learn More &rarr;
            </button>
          </div>

        </div>

        {/* Right Column: Visual Graphic / Illustration */}
        <div className="lg:col-span-5 flex justify-center items-center">
          <div className="relative w-full max-w-md flex justify-center items-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-300/20 to-teal-100/10 rounded-full blur-3xl transform scale-90"></div>

            {/* Glowing Graphic Frame */}
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center">
              <img
                src={rightGif}
                alt="Our Support Approach Illustration"
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-xl"
              />
              <p className="text-xs text-center text-teal-100/80 mt-4 tracking-wide font-medium">
                Compassionate • Evidence-Based • Tailored Support
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default whatWeDo;