import React from 'react';
import { Sparkles } from 'lucide-react';

const AboutHome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      
      {/* Left Column: Asymmetric Visual Composition */}
      <div className="lg:col-span-5 relative">
        <div className="relative mx-auto max-w-md lg:max-w-none">
          
          {/* Decorative Background Glow / Accent Frame */}
          <div className="absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-[#1C7C83]/20 via-[#1C7C83]/5 to-transparent blur-xl -z-10" />

          {/* Primary Image Card */}
          <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-[#1F3A3D]/10 border border-[#1C7C83]/15 bg-[#F2F7F7]">
            <img
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
              alt="Psychobeings therapeutic environment"
              className="w-full h-[420px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle Gradient Vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F3A3D]/40 via-transparent to-transparent opacity-60" />
          </div>

          {/* Floating Trust Badge */}
          <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-white shadow-xl shadow-[#1F3A3D]/10 flex items-center gap-3.5 max-w-[260px] animate-fade-in">
            <div className="p-3 bg-gradient-to-br from-[#1C7C83] to-[#155F64] text-white rounded-xl shadow-md shadow-[#1C7C83]/30">
              <Sparkles size={22} className="stroke-[2.2]" />
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#1C7C83]">Secure Sanctuary</p>
              <p className="text-xs text-gray-600 font-medium leading-snug">100% Confidential & Non-Judgmental</p>
            </div>
          </div>

          {/* Floating Aesthetic Accent Tag */}
          <div className="absolute -top-4 -left-4 hidden sm:flex items-center gap-2 bg-[#1F3A3D] text-white px-4 py-2 rounded-full text-xs font-medium shadow-lg tracking-wide">
            <Sparkles size={13} className="text-[#84C1C6]" />
            <span>Empathetic Care</span>
          </div>

        </div>
      </div>

      {/* Right Column: Refined Typography & Content */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Section Identifier */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E6F0F0]/80 border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-bold tracking-widest uppercase shadow-sm">
          <Sparkles size={13} className="text-[#1C7C83]" />
          About Psychobeings
        </div>

        {/* Editorial Headings */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-5xl font-serif font-semibold text-[#1F3A3D] tracking-tight leading-[1.15]">
            More Than Therapy.
          </h2>
          <p className="text-2xl sm:text-3xl font-serif italic font-normal text-[#1C7C83] leading-snug">
            A Space to Heal, Grow, and Thrive.
          </p>
        </div>

        {/* Sophisticated Body Copy */}
        <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed font-normal">
          <p className="first-letter:text-3xl first-letter:font-serif first-letter:font-bold first-letter:text-[#1C7C83] first-letter:mr-1">
            At <strong className="text-[#1F3A3D] font-semibold">Psychobeings</strong>, we view therapy not merely as problem-solving, but as a transformative journey toward deep emotional equilibrium and a life of authentic fulfillment.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            We curate a calm, confidential, and deeply supportive space where you can explore your inner world, untangle complex patterns, and process experiences safely at your own cadence.
          </p>
          <p className="text-gray-600 text-sm sm:text-base">
            Every personal narrative is distinct. Our clinical philosophy merges evidence-based modalities with profound human empathy—tailoring every step to align with your unique growth goals, whether you are managing anxiety, life transitions, or seeking elevated self-awareness.
          </p>
        </div>

        {/* Interactive / Polished Feature Banner */}
        <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#F2F7F7] border border-[#1C7C83]/15 shadow-sm">
          <div className="flex items-center gap-3.5 text-[#1F3A3D]">
            <div className="p-2.5 rounded-xl bg-white text-[#1C7C83] shadow-sm border border-[#1C7C83]/10">
              <Sparkles size={20} className="stroke-[2]" />
            </div>
            <span className="font-medium text-xs sm:text-sm text-[#1F3A3D]">
              Personalized, evidence-based care focused on sustainable growth.
            </span>
          </div>
        </div>

      </div>

    </div>
  );
};

AboutHome.displayName = 'AboutHome';

export default AboutHome;