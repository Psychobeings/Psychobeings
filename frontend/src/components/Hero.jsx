import React from 'react';
import { Link } from 'react-router-dom';
import Psychobeingslogo from '../assets/Psychobeingslogo.png';

const Hero = () => {
  return (
    // Updated: Crisp white main background with very subtle top lighting gradient
    <section className="relative bg-white text-slate-800 py-16 lg:py-24 overflow-hidden">
      
      {/* Background Subtle Gradient Accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#187D7D]/5 via-[#3BB6A7]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C7E5E530_1px,transparent_1px),linear-gradient(to_bottom,#C7E5E530_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#187D7D08] border border-[#187D7D]/20">
            <span className="w-1.5 h-1.5 rounded-full bg-[#187D7D] animate-pulse" />
            <span className="text-[#187D7D] font-semibold tracking-widest uppercase text-xs">
              ABOUT PSYCHOBEINGS
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-slate-950 tracking-tight leading-tight">
            More Than Therapy. <br />
            <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#187D7D] to-[#3BB6A7]">
              A Space to Heal, Grow, and Thrive.
            </span>
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light max-w-2xl mx-auto pt-2">
            At Psychobeings, we believe therapy is more than addressing challenges—it's about creating lasting emotional well-being and helping you build a life that feels meaningful and fulfilling.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative & CTAs (No box wrapper) */}
          <div className="lg:col-span-7 space-y-6 text-slate-600 leading-relaxed text-base sm:text-lg font-light">
            <p className="border-l-2 border-[#187D7D] pl-4 text-slate-800 font-normal">
              We offer a safe, confidential, and non-judgmental space where you can explore your thoughts, emotions, and experiences at your own pace.
            </p>

            <p>
              Every individual's journey is unique, which is why our approach is personalized, evidence-based, and centered around your personal therapeutic goals.
            </p>

            <p>
              Whether you're navigating anxiety, stress, self-doubt, relationship concerns, life transitions, or simply seeking greater self-awareness, we're here to support you with compassion and practical tools.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/booking">
                <button className="px-6 py-3.5 rounded-xl bg-[#092c2c] hover:bg-[#187D7D] text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-[#092c2c]/10 cursor-pointer">
                  Book a Session
                </button>
              </Link>
              <Link to="/services">
                <button className="px-6 py-3.5 rounded-xl bg-white border border-[#187D7D]/40 text-[#187D7D] hover:bg-[#187D7D08] font-semibold text-sm transition-all duration-300 cursor-pointer">
                  Explore Services
                </button>
              </Link>
              <Link to="/about">
                <button className="px-6 py-3.5 rounded-xl text-slate-600 hover:text-slate-950 font-medium text-sm transition-all duration-300">
                  Learn More &rarr;
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Brand Box Display */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md group">
              {/* Outer Subtle Ambient Glow */}
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-[#187D7D]/20 via-[#3BB6A7]/10 to-emerald-100/30 blur-xl opacity-70 group-hover:opacity-100 transition duration-700"></div>
              
              {/* Framed Card Display for Logo / Image */}
              <div className="relative bg-white/80 backdrop-blur-xl border border-[#C7E5E5]/60 rounded-[1.75rem] p-8 sm:p-10 shadow-xl shadow-[#187D7D]/5 flex flex-col items-center justify-center min-h-[320px]">
                
                {/* Subtle Framing Accent */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#187D7D]/20 to-transparent" />

                <img
                  src={Psychobeingslogo}
                  alt="Psychobeings Logo"
                  className="w-full h-auto object-contain max-h-56 transition-transform duration-500 group-hover:scale-105"
                />

                <span className="mt-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200/60 text-slate-500 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-[#3BB6A7]" />
                  Psychological Wellness & Therapy
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Feature Grid: Clean & Modern Layout */}
        <div className="pt-8">
          <div className="text-center space-y-2 mb-12">
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-950">
              Why Choose Psychobeings?
            </h3>
            <p className="text-slate-500 text-sm font-light">
              Guided by clinical excellence and genuine care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border-t-2 border-t-[#187D7D] border-x border-b border-slate-100 space-y-3 transition-all duration-300 hover:shadow-md">
              <span className="text-2xl block">🌿</span>
              <h4 className="text-base font-bold text-slate-900">A Safe & Confidential Space</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Feel heard without fear of judgment in an environment built on trust, empathy, and absolute privacy.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border-t-2 border-t-[#187D7D] border-x border-b border-slate-100 space-y-3 transition-all duration-300 hover:shadow-md">
              <span className="text-2xl block">🧠</span>
              <h4 className="text-base font-bold text-slate-900">Evidence-Based Therapy</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Our sessions integrate scientifically supported therapeutic approaches tailored to your needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border-t-2 border-t-[#187D7D] border-x border-b border-slate-100 space-y-3 transition-all duration-300 hover:shadow-md">
              <span className="text-2xl block">💙</span>
              <h4 className="text-base font-bold text-slate-900">Personalized Care</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                No two individuals are alike. Every therapy plan is thoughtfully designed around your personal journey.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border-t-2 border-t-[#187D7D] border-x border-b border-slate-100 space-y-3 transition-all duration-300 hover:shadow-md">
              <span className="text-2xl block">🤝</span>
              <h4 className="text-base font-bold text-slate-900">Collaborative Approach</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Therapy is a partnership. We work side-by-side to build coping strategies and create meaningful change.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl bg-slate-50/50 border-t-2 border-t-[#187D7D] border-x border-b border-slate-100 space-y-3 transition-all duration-300 hover:shadow-md md:col-span-2 lg:col-span-2">
              <span className="text-2xl block">🌱</span>
              <h4 className="text-base font-bold text-slate-900">Growth Beyond the Session</h4>
              <p className="text-slate-600 text-sm leading-relaxed font-light">
                Our focus extends beyond symptom relief—we aim to empower you with skills, resilience, and confidence for long-term emotional well-being.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div className="relative bg-gradient-to-r from-[#092c2c] to-[#187D7D] text-white p-8 md:p-12 rounded-3xl shadow-xl text-center max-w-4xl mx-auto overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
          <p className="relative text-base sm:text-lg font-light leading-relaxed max-w-2xl mx-auto">
            At Psychobeings, we don't believe in simply helping you cope—we believe in helping you understand yourself, strengthen your resilience, and create meaningful, lasting change.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hero;