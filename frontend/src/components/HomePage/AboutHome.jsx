import React from 'react';
import { HeartHandshake, Shield, Sparkles } from 'lucide-react';

const AboutHome = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
      
      {/* Left Column: Visual / Image Container */}
      <div className="lg:col-span-5 relative">
        <div className="relative overflow-hidden rounded-[2rem] shadow-md border border-[#1C7C83]/10 bg-[#F2F7F7]">
          <img
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?auto=format&fit=crop&q=80&w=800"
            alt="Psychobeings therapeutic environment"
            className="w-full h-[380px] sm:h-[450px] object-cover hover:scale-105 transition-transform duration-500"
          />
          
          {/* Glassmorphism Overlay Badge */}
          <div className="absolute bottom-5 left-5 right-5 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/60 shadow-sm flex items-center gap-3">
            <div className="p-2.5 bg-[#E6F0F0] text-[#1C7C83] rounded-lg">
              <Shield size={22} />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#1C7C83]">Confidential Space</p>
              <p className="text-xs text-gray-600 font-medium">Safe, supportive & non-judgmental</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Content */}
      <div className="lg:col-span-7 space-y-5">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wide">
          <Sparkles size={14} />
          ABOUT PSYCHOBEINGS
        </div>

        {/* Headlines */}
        <div className="space-y-1">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3A3D] leading-tight">
            More Than Therapy.
          </h2>
          <p className="text-xl sm:text-2xl font-serif italic text-[#1C7C83]">
            A Space to Heal, Grow, and Thrive.
          </p>
        </div>

        {/* Body Copy */}
        <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
          <p>
            At <strong className="text-[#1F3A3D] font-semibold">Psychobeings</strong>, we believe therapy is more than addressing challenges—it's about creating lasting emotional well-being and helping you build a life that feels meaningful and fulfilling.
          </p>
          <p>
            We offer a safe, confidential, and non-judgmental space where you can explore your thoughts, emotions, and experiences at your own pace.
          </p>
          <p>
            Every individual's journey is unique, which is why our approach is personalized, evidence-based, and centered around your personal therapeutic goals. Whether you're navigating anxiety, stress, self-doubt, relationship concerns, life transitions, or simply seeking greater self-awareness, we're here to support you with compassion and practical tools.
          </p>
        </div>

        {/* Bottom Feature Pill */}
        <div className="pt-2 flex items-center gap-3 text-[#1F3A3D] font-medium text-xs sm:text-sm">
          <div className="p-2 rounded-full bg-[#E6F0F0] text-[#1C7C83]">
            <HeartHandshake size={18} />
          </div>
          <span>Personalized, evidence-based care focused on your growth.</span>
        </div>

      </div>

    </div>
  );
};

export default AboutHome;