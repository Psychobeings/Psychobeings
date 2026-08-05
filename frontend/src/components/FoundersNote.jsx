import { useState, useEffect } from "react";
import foundersimage from '../assets/foundersimage.png';

export default function FoundersNote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-teal-50/20 to-white py-20 px-6 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* Soft Ambient Background Elements */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-teal-200/30 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className={`text-center space-y-3 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-1.5 bg-teal-100/70 text-[#097f7f] text-xs font-bold uppercase tracking-widest rounded-full">
            Clinical Care & Support
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
            Meet Your <span className="text-[#097f7f]">Psychologist</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-medium">
            Compassionate, evidence-based therapy tailored to your unique journey.
          </p>
        </div>

        {/* Main Content Layout Card */}
        <div className={`bg-white/80 backdrop-blur-xl border border-teal-100/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl shadow-teal-900/5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Profile Card */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
              
              {/* Image Frame */}
              <div className="relative group">
                <div className="absolute -inset-1.5 bg-gradient-to-r from-[#097f7f] to-emerald-400 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
                <div className="relative w-56 h-64 sm:w-64 sm:h-72 rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                  <img
                    src={foundersimage}
                    alt="Amanpreet Kaur - Clinical Psychologist"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Identity & Badges */}
              <div className="space-y-2 w-full">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Amanpreet Kaur
                </h3>
                <p className="text-[#097f7f] font-semibold text-base">
                  Lead Psychologist & Founder
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-200 text-[#097f7f] text-xs font-semibold rounded-lg">
                    <span>🎓</span> Clinical Psychologist (M.Sc.)
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-teal-50 border border-teal-200 text-[#097f7f] text-xs font-semibold rounded-lg">
                    <span>🌱</span> Psychotherapy & Counseling
                  </span>
                </div>
              </div>

              {/* Quick Specializations Bar */}
              <div className="w-full pt-4 border-t border-gray-100 space-y-2 text-xs text-gray-500 font-medium text-center lg:text-left">
                <p className="uppercase tracking-wider font-bold text-gray-400">Areas of Focus</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1 text-gray-700">
                  <span>• Anxiety & Stress</span>
                  <span>• Life Transitions</span>
                  <span>• Relationship Counseling</span>
                  <span>• Self-Esteem</span>
                </div>
              </div>

            </div>

            {/* Right Letter Body */}
            <div className="lg:col-span-7 space-y-6 text-gray-700 leading-relaxed text-base sm:text-lg">
              
              <div className="space-y-2">
                <span className="text-4xl text-[#097f7f] font-serif leading-none block">“</span>
                <p className="text-xl sm:text-2xl font-bold text-gray-900 leading-snug">
                  Welcome. Therapy is a collaborative space where you are always heard, respected, and valued.
                </p>
              </div>

              <p className="text-gray-600">
                Taking the first step toward mental wellness can feel daunting. My commitment is to provide you with a safe, confidential, and completely non-judgmental environment where you can freely explore your thoughts and emotions.
              </p>

              {/* Featured Highlight Block */}
              <div className="p-5 rounded-2xl bg-gradient-to-r from-teal-50/80 to-emerald-50/50 border-l-4 border-[#097f7f] space-y-1">
                <p className="text-sm font-semibold text-[#097f7f]">My Clinical Philosophy</p>
                <p className="text-sm sm:text-base text-gray-800 italic">
                  I integrate scientifically supported, evidence-based methods tailored specifically to your unique life experience and goals. Therapy isn't one-size-fits-all—it's built together.
                </p>
              </div>

              <p className="text-gray-600">
                Whether you're struggling with daily overwhelm, navigating complex relationships, or simply seeking personal clarity, we will work side by side to build lasting resilience and practical tools for growth.
              </p>

              {/* Footer Signoff & Action Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-gray-100">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">Dedicated to your growth</p>
                  <p className="text-[#097f7f] font-bold text-lg">Warm regards, Amanpreet Kaur</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}