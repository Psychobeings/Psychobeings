import React from 'react';
import { Link } from 'react-router-dom';
import Psychobeingslogo from '../assets/Psychobeingslogo.png';

const Hero = () => {
  return (
    <section className="relative bg-off-white overflow-hidden py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Narrative Content */}
          <div className="lg:col-span-7 text-left space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#097f7f]/10 text-[#097f7f] text-sm font-semibold tracking-wide">
              Why Choose Psychobeings?
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-dark-gunmetal">
              More Than Therapy. <br />
              <span className="text-[#097f7f]">A Dedicated Partner in Your Growth.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-700 font-medium leading-relaxed">
              At Psychobeings, we believe mental wellbeing isn’t just about overcoming challenges—it’s about discovering your strengths, building resilience, and crafting a meaningful, balanced life.
            </p>

            {/* Core Value Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white/60 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-1">Evidence-Based Care</h2>
                <p className="text-sm text-gray-600">Tailored psychological methods rooted in clinical research and compassion.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-1">Safe, Respectful Space</h2>
                <p className="text-sm text-gray-600">A non-judgmental environment where every voice is heard and valued.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-1">Holistic Wellbeing</h2>
                <p className="text-sm text-gray-600">Navigating life's complexities with clarity, confidence, and emotional health.</p>
              </div>

              <div className="p-4 rounded-xl bg-white/60 border border-gray-100 shadow-sm">
                <h2 className="font-bold text-gray-900 mb-1">Empowerment Focused</h2>
                <p className="text-sm text-gray-600">Equipping you with practical tools to thrive independently long-term.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link to="/booking">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#092c2c] text-white font-semibold hover:bg-[#064646] transition-all duration-200 shadow-md">
                  Book a Session
                </button>
              </Link>
              <Link to="/services">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#097f7f] text-white font-semibold hover:bg-[#076666] transition-all duration-200 shadow-md">
                  Explore Services
                </button>
              </Link>
              <Link to="/about">
                <button className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all duration-200">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Anchor */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#097f7f]/20 to-[#092c2c]/10 rounded-2xl blur-lg opacity-70"></div>
              <div className="relative bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <img
                  src={Psychobeingslogo}
                  alt="Psychobeings Logo"
                  className="w-full h-auto object-contain rounded-lg"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;