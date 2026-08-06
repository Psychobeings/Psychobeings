import React from 'react';
import { CheckCircle2, XCircle, Sparkles } from 'lucide-react';

const Thedifference= () => {
  const comparisonPoints = [
    {
      traditional: "Focuses strictly on symptom reduction or quick fixes.",
      psychobeings: "Fosters long-term emotional resilience, self-awareness, and personal growth.",
    },
    {
      traditional: "Feels transactional, rigid, or detached.",
      psychobeings: "Offers an empathetic, deeply collaborative, human-centered partnership.",
    },
    {
      traditional: "One-size-fits-all clinical framework.",
      psychobeings: "Personalized, evidence-based care tailored to your unique story and goals.",
    },
    {
      traditional: "Isolated coping techniques.",
      psychobeings: "Integrative mind-body tools designed for real-world application.",
    },
  ];

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wider uppercase">
          <Sparkles size={14} />
          WHY CHOOSE US
        </div>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F3A3D]">
          The <span className="italic font-normal text-[#1C7C83]">Psychobeings</span> Difference
        </h2>
      </div>

      {/* Comparison Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left Card: Traditional Approach */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-gray-50 border border-gray-200 space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-gray-200">
            <XCircle className="text-gray-400" size={20} />
            <h3 className="font-serif font-bold text-lg text-gray-500">Traditional Clinical Settings</h3>
          </div>
          <ul className="space-y-4">
            {comparisonPoints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 shrink-0" />
                <span>{item.traditional}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Card: Psychobeings Approach */}
        <div className="p-6 sm:p-8 rounded-[2rem] bg-[#E6F0F0]/60 border border-[#1C7C83]/30 shadow-sm space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-2 pb-4 border-b border-[#1C7C83]/20">
            <CheckCircle2 className="text-[#1C7C83]" size={20} />
            <h3 className="font-serif font-bold text-lg text-[#1F3A3D]">The Psychobeings Experience</h3>
          </div>
          <ul className="space-y-4">
            {comparisonPoints.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3 text-sm font-medium text-[#1F3A3D] leading-relaxed">
                <CheckCircle2 className="text-[#1C7C83] shrink-0 mt-0.5" size={18} />
                <span>{item.psychobeings}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Thedifference;