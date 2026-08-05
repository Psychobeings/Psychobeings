import { useState, useEffect } from "react";
import foundersimage from '../assets/foundersimage.png';

export default function FoundersNote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative bg-[#0F172A] text-slate-100 py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* Premium Ambient Lighting Drops */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-teal-500/10 via-emerald-500/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-500/5 blur-3xl pointer-events-none" />

      {/* Subtle Background Mesh Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Editorial Section Header */}
        <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-teal-500/30 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            <span className="text-teal-300 text-xs font-semibold tracking-widest uppercase">
              Clinical Leadership & Vision
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white tracking-tight">
            Meet Your <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-teal-400 to-emerald-300">Psychologist</span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Bespoke, evidence-based psychotherapy tailored to your personal journey toward emotional resilience.
          </p>
        </div>

        {/* Master Showcase Card */}
        <div className={`relative bg-slate-900/60 backdrop-blur-2xl border border-slate-800/80 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-black/40 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Subtle Frame Accent Lines */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Portrait & Identity */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              
              {/* Premium Image Frame */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-teal-500/40 via-emerald-400/20 to-amber-500/30 opacity-70 blur-xl group-hover:opacity-100 transition duration-700" />
                
                <div className="relative w-60 h-72 sm:w-72 sm:h-84 rounded-[1.75rem] overflow-hidden border border-slate-700/60 bg-slate-800 shadow-2xl">
                  <img
                    src={foundersimage}
                    alt="Amanpreet Kaur - Clinical Psychologist"
                    className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Status Badge */}
                <div className="absolute -bottom-3 left-1/2 lg:left-6 -translate-x-1/2 lg:translate-x-0 bg-slate-900/90 border border-slate-700 px-4 py-1.5 rounded-full text-[11px] font-medium text-slate-300 shadow-xl backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Accepting New Clients
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-3 pt-2">
                <h3 className="text-2xl sm:text-3xl font-serif text-white tracking-wide">
                  Amanpreet Kaur
                </h3>
                <p className="text-teal-400 font-medium text-sm tracking-wider uppercase">
                  Lead Clinical Psychologist & Founder
                </p>

                {/* Credentials */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                  <span className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                    M.Sc. Clinical Psychology
                  </span>
                  <span className="px-3 py-1 bg-slate-800/80 border border-slate-700/60 text-slate-300 text-xs font-medium rounded-full">
                    Licensed Psychotherapist
                  </span>
                </div>
              </div>

              {/* Focus Pillars */}
              <div className="w-full pt-6 border-t border-slate-800 space-y-3">
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-500">Core Expertise</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs text-slate-300">
                  <span className="px-2.5 py-1 bg-slate-800/40 rounded-md border border-slate-800">Anxiety & Trauma</span>
                  <span className="px-2.5 py-1 bg-slate-800/40 rounded-md border border-slate-800">Executive Burnout</span>
                  <span className="px-2.5 py-1 bg-slate-800/40 rounded-md border border-slate-800">Relationship Dynamics</span>
                </div>
              </div>

            </div>

            {/* Right Column: Founder's Letter */}
            <div className="lg:col-span-7 space-y-8 text-slate-300 font-light leading-relaxed text-base sm:text-lg">
              
              {/* Quote Block */}
              <div className="relative pl-6 border-l-2 border-teal-500/80 space-y-2">
                <p className="text-xl sm:text-2xl font-serif text-slate-100 leading-snug italic">
                  “Therapy should not feel clinical or transactional. It is a sacred, collaborative space to reclaim your narrative.”
                </p>
              </div>

              <p className="text-slate-400">
                Taking the initiative to address emotional well-being requires profound bravery. My mandate is to cultivate an exclusive, completely confidential environment where your experiences are met with deep clinical precision and genuine empathy.
              </p>

              {/* High-End Feature Highlight */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-slate-800/60 via-slate-800/30 to-transparent border border-slate-800 space-y-2">
                <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-widest">Clinical Approach</h4>
                <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
                  Integrating evidence-based psychodynamic techniques with modern Cognitive Behavioral Therapies (CBT), every treatment protocol is individually crafted for high-impact personal growth.
                </p>
              </div>

              <p className="text-slate-400">
                Whether navigating complex life transitions, addressing systemic anxiety, or seeking personal mastery, we work together to build long-term psychological resilience.
              </p>

              {/* Action & Signature Footer */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-slate-800">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Warm Regards,</p>
                  <p className="text-xl font-serif text-white mt-1">Amanpreet Kaur</p>
                </div>

                <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-semibold text-sm rounded-xl shadow-lg shadow-teal-500/10 hover:shadow-teal-500/20 transition duration-300 cursor-pointer">
                  Schedule a Consultation
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}