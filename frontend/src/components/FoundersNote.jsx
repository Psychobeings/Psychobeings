import { useState, useEffect } from "react";
// Using the same variable name, ensure your asset exists at this path
import foundersimage from '../assets/foundersimage.png';

export default function FoundersNote() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Keep the timer for the transition
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    // UPDATED: Section Background -> Light with a matching teal tint
    <section className="relative bg-[#FAFDFF] text-slate-800 py-24 px-6 sm:px-8 lg:px-16 overflow-hidden">
      
      {/* UPDATED: Light Ambient Lighting Drops -> More subtle on white */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-[#187D7D]/10 via-[#3BB6A7]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#187D7D]/10 blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-amber-200/20 blur-3xl pointer-events-none" />

      {/* UPDATED: Background Mesh Grid -> Clearer grid lines on light */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C7E5E560_1px,transparent_1px),linear-gradient(to_bottom,#C7E5E560_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#FFF_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto space-y-20">
        
        {/* Editorial Section Header */}
        <div className={`text-center space-y-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* UPDATED: Badge color matched to light theme */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#187D7D15] border border-[#187D7D]/20 backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3BB6A7]" />
            <span className="text-[#187D7D] text-xs font-semibold tracking-widest uppercase">
              Clinical Leadership & Vision
            </span>
          </div>
          
          {/* UPDATED: Text color to dark and gradient refined */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-slate-950 tracking-tight">
            Meet Your <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#187D7D] to-[#3BB6A7]">Psychologist</span>
          </h2>
          
          <p className="text-slate-700 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed">
            Bespoke, evidence-based psychotherapy tailored to your personal journey toward emotional resilience.
          </p>
        </div>

        {/* Master Showcase Card */}
        {/* UPDATED: Card style to be clearer on light, border and shadow refined */}
        <div className={`relative bg-white/60 backdrop-blur-2xl border border-[#C7E5E5]/50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#187D7D]/5 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Subtle Frame Accent Lines (lightened) */}
          <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#187D7D]/10 to-transparent" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Portrait & Identity */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
              
              {/* Premium Image Frame */}
              <div className="relative group">
                {/* UPDATED: Glow lightened */}
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-[#187D7D]/20 via-[#3BB6A7]/10 to-amber-200/20 opacity-70 blur-xl group-hover:opacity-100 transition duration-700" />
                
                {/* UPDATED: Border to dark-matched light color */}
                <div className="relative w-60 h-72 sm:w-72 sm:h-84 rounded-[1.75rem] overflow-hidden border border-[#C7E5E5]/60 bg-white shadow-2xl">
                  {/* Keeping grayscale as a stylistic choice for premium feel, but making it more dynamic on white. Gray is still a logo text color. */}
                  <img
                    src={foundersimage}
                    alt="Amanpreet Kaur - Clinical Psychologist"
                    className="w-full h-full object-cover object-top filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                  {/* UPDATED: Overlay color from dark slate to light white */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Status Badge */}
                {/* UPDATED: Colors and border to light theme */}
                <div className="absolute -bottom-3 left-1/2 lg:left-6 -translate-x-1/2 lg:translate-x-0 bg-white/90 border border-[#C7E5E5] px-4 py-1.5 rounded-full text-[11px] font-medium text-slate-800 shadow-xl backdrop-blur-md flex items-center gap-2 whitespace-nowrap">
                  <span className="w-2 h-2 rounded-full bg-[#3BB6A7]"></span>
                  Accepting New Clients
                </div>
              </div>

              {/* Bio Details */}
              <div className="space-y-3 pt-2">
                {/* UPDATED: Name to dark */}
                <h3 className="text-2xl sm:text-3xl font-serif text-slate-950 tracking-wide">
                  Amanpreet Kaur
                </h3>
                {/* UPDATED: Subtitle color */}
                <p className="text-[#187D7D] font-medium text-sm tracking-wider uppercase">
                  Lead Clinical Psychologist & Founder
                </p>

                {/* Credentials */}
                {/* UPDATED: Tag background and text to light theme */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 pt-2">
                  <span className="px-3 py-1 bg-[#187D7D08] border border-[#187D7D]/20 text-slate-700 text-xs font-medium rounded-full">
                    M.Sc. Clinical Psychology
                  </span>
                  <span className="px-3 py-1 bg-[#187D7D08] border border-[#187D7D]/20 text-slate-700 text-xs font-medium rounded-full">
                    Licensed Psychotherapist
                  </span>
                </div>
              </div>

              {/* Focus Pillars */}
              {/* UPDATED: Border and text to light theme */}
              <div className="w-full pt-6 border-t border-[#C7E5E5]/60 space-y-3">
                <p className="text-xs uppercase tracking-widest font-semibold text-slate-500">Core Expertise</p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 text-xs text-slate-700">
                  <span className="px-2.5 py-1 bg-white rounded-md border border-[#C7E5E5]/50">Anxiety & Trauma</span>
                  <span className="px-2.5 py-1 bg-white rounded-md border border-[#C7E5E5]/50">Executive Burnout</span>
                  <span className="px-2.5 py-1 bg-white rounded-md border border-[#C7E5E5]/50">Relationship Dynamics</span>
                </div>
              </div>

            </div>

            {/* Right Column: Founder's Letter */}
            {/* UPDATED: Main letter text to slate-700 */}
            <div className="lg:col-span-7 space-y-8 text-slate-700 font-light leading-relaxed text-base sm:text-lg">
              
              {/* Quote Block */}
              {/* UPDATED: Quotation mark text to black */}
              <div className="relative pl-6 border-l-2 border-[#187D7D] space-y-2">
                <p className="text-xl sm:text-2xl font-serif text-slate-950 leading-snug italic">
                  “Therapy should not feel clinical or transactional. It is a sacred, collaborative space to reclaim your narrative.”
                </p>
              </div>

              <p>
                Taking the initiative to address emotional well-being requires profound bravery. My mandate is to cultivate an exclusive, completely confidential environment where your experiences are met with deep clinical precision and genuine empathy.
              </p>

              {/* High-End Feature Highlight */}
              {/* UPDATED: Colors in this box to be clearer on light */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#187D7D10] via-[#187D7D05] to-transparent border border-[#C7E5E5]/50 space-y-2">
                <h4 className="text-xs font-semibold text-[#187D7D] uppercase tracking-widest">Clinical Approach</h4>
                <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
                  Integrating evidence-based psychodynamic techniques with modern Cognitive Behavioral Therapies (CBT), every treatment protocol is individually crafted for high-impact personal growth.
                </p>
              </div>

              <p>
                Whether navigating complex life transitions, addressing systemic anxiety, or seeking personal mastery, we work together to build long-term psychological resilience.
              </p>

              {/* Action & Signature Footer */}
              {/* UPDATED: Signature text and button style */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#C7E5E5]/60">
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-widest font-medium">Warm Regards,</p>
                  <p className="text-xl font-serif text-slate-950 mt-1">Amanpreet Kaur</p>
                </div>

                {/* UPDATED: Glass Button for light theme - clearer interaction on white */}
                <button className="w-full sm:w-auto px-6 py-3 bg-white border border-[#187D7D]/60 hover:bg-[#187D7D] text-[#187D7D] hover:text-white font-semibold text-sm rounded-xl shadow-lg shadow-[#187D7D]/5 hover:shadow-[#187D7D]/10 transition duration-300 cursor-pointer">
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