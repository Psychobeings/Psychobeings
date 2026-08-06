import React from 'react';

const steps = [
  {
    number: "01",
    title: "Book a Session",
    description: "We start with a safe, confidential space to discuss your goals, current challenges, and what you hope to achieve through therapy.",
    tag: "Step One"
  },
  {
    number: "02",
    title: "Initial Consultation & Assessment",
    description: "Together, we map out a tailored therapeutic roadmap using evidence-based techniques suited to your unique personality and needs.",
    tag: "Step Two"
  },
  {
    number: "03",
    title: "Goals & Therapy Structure",
    description: "In regular sessions, you’ll explore thought patterns, build coping strategies, process emotions, and gain deeper self-awareness.",
    tag: "Step Three"
  },
  {
    number: "04",
    title: "Growth & Progress Tracking",
    description: "Apply practical tools in your everyday life, build long-term resilience, and experience real transformation in your mental well-being.",
    tag: "Step Four"
  }
];

export default function Stepsfortherepy() {
  return (
    <section className="bg-[#F2F7F7] text-[#1F3A3D] py-16 sm:py-20 px-6 sm:px-8 lg:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E6F0F0] border border-[#1C7C83]/20 text-[#1C7C83] text-xs font-semibold tracking-wider uppercase">
            Your Journey To Healing
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F3A3D] tracking-tight">
            How Therapy Works? <span className="italic font-normal text-[#1C7C83]">A Step-by-Step Guide</span>
          </h2>
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto pt-1">
            Therapy is a collaborative process designed to help you understand your mind, process complex emotions, and create meaningful, lasting change in your daily life.
          </p>
        </div>

        {/* Step-by-Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white rounded-[2rem] p-6 sm:p-8 border border-[#1C7C83]/15 shadow-sm hover:shadow-md hover:border-[#1C7C83]/30 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E6F0F0] text-[#1C7C83] flex items-center justify-center font-serif font-bold text-lg border border-[#1C7C83]/15 group-hover:bg-[#1C7C83] group-hover:text-white transition-colors duration-300">
                  {step.number}
                </div>
                
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1C7C83] uppercase tracking-wider">
                    {step.tag}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1F3A3D] leading-snug">
                    {step.title}
                  </h3>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Banner */}
        <div className="bg-[#E6F0F0] border border-[#1C7C83]/20 rounded-[2rem] p-6 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#1F3A3D]">
              Ready to take the first step towards wellness?
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm">
              Empower your mind today with expert psychological support tailored just for you.
            </p>
          </div>
          
          <a 
            href="#book" 
            className="shrink-0 bg-[#1C7C83] hover:bg-[#135B60] text-white font-medium text-sm px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all duration-300 text-center w-full sm:w-auto"
          >
            Book a Session
          </a>
        </div>

      </div>
    </section>
  );
}