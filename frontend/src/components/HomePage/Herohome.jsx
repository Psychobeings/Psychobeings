import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroHome = () => {
  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 min-h-[90vh] flex items-center font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Text Content & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          
          {/* Top Pill / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#1C7C83] animate-pulse"></span>
            Evidence-Based Psychological Therapy
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-[#1F3A3D] leading-[1.15] tracking-tight">
            Empowering minds. <br />
            <span className="text-[#1C7C83] italic font-normal">Transforming lives</span> with expert care.
          </h1>

          {/* Subheading / Description */}
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl leading-relaxed font-sans">
            At Psychobeings, we believe that every individual deserves a safe space to be heard, understood, and empowered. Through evidence-based psychological therapy and holistic wellbeing practices, 
            we support you in overcoming life's challenges, strengthening emotional resilience, and creating meaningful, lasting change.
            Therapy sessions are available in English and Hindi, with secure online counselling across India and in-person appointments in Faridabad, Haryana.
          </p>

          {/* Key Metrics / Social Proof Badges */}
          <div className="grid grid-cols-3 gap-4 py-4 w-full max-w-lg border-y border-[#1C7C83]/15">
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C7C83]">500+</p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Sessions Conducted</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C7C83]">4.9 ★</p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Client Rating</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-serif font-bold text-[#1C7C83]">100%</p>
              <p className="text-xs sm:text-sm text-gray-600 font-medium">Confidentiality Guaranteed</p>
            </div>
          </div>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <a
              href="#book"
              className="inline-flex justify-center items-center gap-2 bg-[#1C7C83] hover:bg-[#135B60] text-white font-medium text-sm px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-300 text-center"
            >
              Begin Your Journey
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="inline-flex justify-center items-center bg-transparent hover:bg-[#E6F0F0] text-[#1C7C83] border border-[#1C7C83] font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-300 text-center"
            >
              Explore Services
            </a>
          </div>

        </div>

        {/* Right Column: Imagery & Visual Card */}
        <div className="lg:col-span-5 relative w-full flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            
            {/* Background Decorative Ambient Highlight */}
            <div className="absolute -top-4 -left-4 w-72 h-72 bg-[#1C7C83]/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
            
            {/* Main Image Frame */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-md border border-[#1C7C83]/15 bg-white">
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQGwB7uKam41Sw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721064179177?e=1787788800&v=beta&t=wizFDs-zEeMqOubyTJc_sO5Mf2Ubf8aRUlQzZ9KuiX0"
                alt="Therapy and psychological wellness session"
                className="w-full h-[420px] sm:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
              />
            
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroHome;