import React from 'react';
import { Link } from 'react-router-dom';
import Psychobeingslogo from '../assets/Psychobeingslogo.png';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white text-slate-800 py-12 lg:py-20">
      
      {/* Soft Ambient Background Lighting (Matches Hero1) */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-100/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid: Logo Left, All Content Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Logo Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-start">
            <div className="w-full max-w-md bg-white border border-teal-100/80 rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col items-center justify-center min-h-[340px]">
              <img
                src={Psychobeingslogo}
                alt="Psychobeings Logo"
                className="w-full h-auto object-contain max-h-60"
              />
              <span className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium">
                <span className="w-2 h-2 rounded-full bg-[#3BB6A7]" />
                Psychological Wellness & Therapy
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50/80 border border-teal-100">
              <span className="w-1.5 h-1.5 rounded-full bg-[#187D7D] animate-pulse" />
              <span className="text-[#187D7D] font-semibold tracking-widest uppercase text-xs">
                ABOUT PSYCHOBEINGS
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-slate-950 tracking-tight leading-tight">
              More Than Therapy. <br />
              <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#187D7D] to-[#3BB6A7]">
                A Space to Heal, Grow, and Thrive.
              </span>
            </h2>

            {/* Main Paragraph */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-sans">
              At Psychobeings, we believe therapy is more than addressing challenges—it's about creating lasting emotional well-being and helping you build a life that feels meaningful and fulfilling.
            </p>

            {/* Sub Narrative */}
            <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base font-light">
              <p className="border-l-2 border-[#187D7D] pl-4 text-slate-800 font-normal">
                We offer a safe, confidential, and non-judgmental space where you can explore your thoughts, emotions, and experiences at your own pace.
              </p>

              <p>
                Every individual's journey is unique, which is why our approach is personalized, evidence-based, and centered around your personal therapeutic goals.
              </p>

              <p>
                Whether you're navigating anxiety, stress, self-doubt, relationship concerns, life transitions, or simply seeking greater self-awareness, we're here to support you with compassion and practical tools.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-2">
                <Link to="/booking">
                  <button className="px-6 py-3 rounded-full bg-[#0a7272] hover:bg-[#0d5c5e] text-white font-medium text-sm transition-all duration-200 shadow-md cursor-pointer">
                    Book a Session
                  </button>
                </Link>
                <Link to="/services">
                  <button className="px-6 py-3 rounded-full bg-white border border-slate-200 text-slate-700 hover:bg-slate-50 hover:border-teal-200 font-medium text-sm transition-all duration-200 cursor-pointer">
                    Explore Services
                  </button>
                </Link>
                <Link to="/about">
                  <button className="px-6 py-3 rounded-full text-slate-600 hover:text-slate-950 font-medium text-sm transition-all duration-200">
                    Learn More &rarr;
                  </button>
                </Link>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;