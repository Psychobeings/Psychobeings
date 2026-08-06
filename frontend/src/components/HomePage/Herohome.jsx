import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="bg-[#F2F7F7] text-[#1A1D20] py-16 px-6 md:px-12 lg:px-20 min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs md:text-sm font-medium tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#1C7C83] animate-pulse"></span>
            Evidence-Based • Confidential Care • Holistic Wellbeing
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1A1D20] leading-[1.15] tracking-tight">
            Empowering minds. <br />
            <span className="text-[#1C7C83] italic font-normal">Transforming lives</span> with expert care.
          </h1>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed font-sans">
            At Psychobeings, we believe that every individual deserves a safe space to be heard, understood, and empowered.,
            Through evidence-based psychological therapy and holistic wellbeing practices, we support you in overcoming life's challenges, strengthening emotional resilience, and creating meaningful, lasting change.,
            
            Therapy Sessions available in English and Hindi. Secure online counselling across India and in-person appointments in Faridabad, Haryana, 
            
            </p>

          {/* Key Metrics / Social Proof Badges */}
          <div className="grid grid-cols-3 gap-4 py-4 w-full max-w-lg border-y border-[#1C7C83]/15">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1C7C83]">1000+</p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Sessions Conducted</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1C7C83]">5.0 ★</p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Client Rating</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-[#1C7C83]">Online & In-Person</p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Flexible Sessions</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="#book"
              className="inline-flex justify-center items-center gap-2 bg-[#1C7C83] hover:bg-[#16666C] text-white font-medium px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-center"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="inline-flex justify-center items-center bg-transparent hover:bg-[#E6F0F0] text-[#1C7C83] border border-[#1C7C83] font-medium px-8 py-3.5 rounded-full transition-all duration-200 text-center"
            >
              Explore Services
            </a>
          </div>

        </div>

        {/* Right Column: Imagery & Visual Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            
            {/* Background Decorative Element */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#1C7C83]/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Main Image Frame with Asymmetric Border Radius */}
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-xl border border-white/60 bg-white">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Therapy and psychological wellness session"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay Glassmorphism Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-white/40 shadow-md flex items-center gap-3">
                <div className="p-2.5 bg-[#E6F0F0] rounded-xl text-[#1C7C83]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1A1D20]">Confidential & Safe</h4>
                  <p className="text-xs text-gray-600">Certified clinical guidance and support</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;