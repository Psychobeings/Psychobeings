import React from 'react';
import { Calendar, ClipboardCheck, Compass, Sparkles, ArrowRight } from 'lucide-react';

export default function Stepsfortherepy() {
  const stepsfortherepy = [
    {
      number: "01",
      stepTag: "Step One",
      title: "Book a Session",
      description:
        "We start with a safe, confidential space to discuss your goals, current challenges, and what you hope to achieve through therapy.",
      icon: <Calendar className="w-5 h-5 text-[#1C7C83]" />,
    },
    {
      number: "02",
      stepTag: "Step Two",
      title: "Initial Consultation & Assessment",
      description:
        "Together, we map out a tailored therapeutic roadmap using evidence-based techniques suited to your unique personality and needs.",
      icon: <ClipboardCheck className="w-5 h-5 text-[#1C7C83]" />,
    },
    {
      number: "03",
      stepTag: "Step Three",
      title: "Goals & Therapy Structure",
      description:
        "In regular sessions, you’ll explore thought patterns, build coping strategies, process emotions, and gain deeper self-awareness.",
      icon: <Compass className="w-5 h-5 text-[#1C7C83]" />,
    },
    {
      number: "04",
      stepTag: "Step Four",
      title: "Growth & Progress Tracking",
      description:
        "Apply practical tools in your everyday life, build long-term resilience, and experience real transformation in your mental well-being.",
      icon: <Sparkles className="w-5 h-5 text-[#1C7C83]" />,
    },
  ];

  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wider uppercase">
            A STEP-BY-STEP GUIDE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            How <span className="italic font-normal text-[#1C7C83]">Therapy Works</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1">
            Therapy is a collaborative process designed to help you understand your mind, process complex emotions, and create meaningful, lasting change in your daily life.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] border border-[#1C7C83]/15 p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between space-y-6 relative group"
            >
              <div className="space-y-4">
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between border-b border-[#1C7C83]/10 pb-4">
                  <div className="p-2.5 rounded-xl bg-[#E6F0F0] border border-[#1C7C83]/15">
                    {step.icon}
                  </div>
                  <span className="text-2xl font-serif font-bold text-[#1C7C83]/40 group-hover:text-[#1C7C83] transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Step Indicator & Title */}
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1C7C83] uppercase tracking-wider">
                    {step.stepTag}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1F3A3D] leading-snug">
                    {step.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Action Link Footer */}
        <div className="text-center pt-4">
          <a
            href="#book"
            className="inline-flex items-center gap-2 bg-[#1C7C83] hover:bg-[#135B60] text-white font-medium text-sm px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-300"
          >
            Start Your First Step
            <ArrowRight size={16} />
          </a>
        </div>

      </div>
    </section>
  );
}