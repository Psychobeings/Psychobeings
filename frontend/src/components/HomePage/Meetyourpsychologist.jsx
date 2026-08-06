import React, { useState, useEffect } from "react";
import foundersimage from "../../assets/foundersimage.png";

export default function MeetYourPsychologist() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 overflow-hidden font-sans selection:bg-[#1C7C83]/20 selection:text-[#1C7C83]">
      
      {/* Background Subtle Ambient Highlights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#1C7C83]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#1C7C83]/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className={`space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#1C7C83] animate-pulse" />
            Clinical Leadership
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            Meet Your <span className="italic font-normal text-[#1C7C83]">Psychologist</span>
          </h2>
        </div>

        {/* Structural Layout: Balanced Two-Column Showcase */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* COLUMN 1: Portrait & Bio Card (5 Cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-[2rem] border border-[#1C7C83]/15 shadow-md space-y-6">
            
            {/* Image Container with Accent Frame */}
            <div className="relative w-full h-[380px] sm:h-[420px] rounded-[1.5rem] overflow-hidden border border-[#1C7C83]/20 bg-[#F2F7F7]">
              <img
                src={foundersimage}
                alt="Amanpreet Kaur - Clinical Psychologist"
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] hover:grayscale-0 hover:scale-105 transition-all duration-700 ease-out"
              />
              
              {/* Corner Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-[#1C7C83]/15 shadow-sm flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#1C7C83]"></span>
                  <span className="text-xs font-bold text-[#1F3A3D]">Accepting New Clients</span>
                </div>
                <span className="text-[11px] font-semibold text-[#1C7C83] bg-[#E6F0F0] px-2 py-0.5 rounded">Online & In-Person</span>
              </div>
            </div>

            {/* Profile Identity Details */}
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl font-serif font-bold text-[#1F3A3D]">
                  Amanpreet Kaur
                </h3>
                <p className="text-[#1C7C83] font-semibold text-xs tracking-wider uppercase mt-0.5">
                  Lead Clinical Psychologist & Founder
                </p>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-3 py-1 bg-[#E6F0F0] border border-[#1C7C83]/15 text-[#1F3A3D] text-xs font-medium rounded-full">
                  M.Sc. Clinical Psychology
                </span>
                <span className="px-3 py-1 bg-[#E6F0F0] border border-[#1C7C83]/15 text-[#1F3A3D] text-xs font-medium rounded-full">
                  Licensed Psychotherapist
                </span>
              </div>
            </div>

          </div>

          {/* COLUMN 2: Letter Content & Interactive Highlights (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Featured Quote Banner */}
            <div className="p-6 sm:p-8 rounded-[2rem] bg-[#E6F0F0] border border-[#1C7C83]/20 relative overflow-hidden">
              <p className="text-lg sm:text-xl font-serif italic font-semibold text-[#1F3A3D] leading-relaxed">
                “Therapy should not feel clinical or transactional. It is a sacred, collaborative space to reclaim your narrative.”
              </p>
            </div>

            {/* Main Letter Body */}
            <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
              <p>
                Taking the initiative to address emotional well-being requires profound bravery. My mandate is to cultivate an exclusive, completely confidential environment where your experiences are met with deep clinical precision and genuine empathy.
              </p>
              <p>
                Whether navigating complex life transitions, addressing systemic anxiety, or seeking personal mastery, we work together to build long-term psychological resilience.
              </p>
            </div>

            {/* Two-Column Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="p-5 rounded-2xl bg-white border border-[#1C7C83]/15 space-y-1.5 shadow-sm">
                <h4 className="text-xs font-bold text-[#1C7C83] uppercase tracking-wider">Clinical Approach</h4>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Integrating evidence-based psychodynamic techniques with modern Cognitive Behavioral Therapies (CBT).
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#1C7C83]/15 space-y-1.5 shadow-sm">
                <h4 className="text-xs font-bold text-[#1C7C83] uppercase tracking-wider">Core Focus Areas</h4>
                <div className="flex flex-wrap gap-1.5 pt-1 text-[11px] font-medium text-[#1F3A3D]">
                  <span className="bg-[#F2F7F7] px-2 py-0.5 rounded border border-[#1C7C83]/10">Anxiety & Trauma</span>
                  <span className="bg-[#F2F7F7] px-2 py-0.5 rounded border border-[#1C7C83]/10">Executive Burnout</span>
                  <span className="bg-[#F2F7F7] px-2 py-0.5 rounded border border-[#1C7C83]/10">Relationships</span>
                </div>
              </div>

            </div>

            {/* Signature Bar & Action Button */}
            <div className="pt-6 border-t border-[#1C7C83]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">Warm Regards,</p>
                <p className="text-xl font-serif font-bold text-[#1F3A3D] mt-0.5">Amanpreet Kaur</p>
              </div>

              <a
                href="#book"
                className="w-full sm:w-auto px-8 py-3.5 bg-[#1C7C83] hover:bg-[#135B60] text-white font-medium text-sm rounded-full shadow-sm hover:shadow transition duration-300 text-center"
              >
                Schedule Consultation
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}