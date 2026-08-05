import React from 'react';

const steps = [
  {
    number: "01",
    title: "Book a session",
    description: "We start with a safe, confidential space to discuss your goals, current challenges, and what you hope to achieve through therapy.",
    tag: "Step One"
  },
  {
    number: "02",
    title: "Initial consultation & Assessment",
    description: "Together, we map out a tailored therapeutic roadmap using evidence-based techniques suited to your unique personality and needs.",
    tag: "Step Two"
  },
  {
    number: "03",
    title: "Goals and Therapy structure",
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

export default function HowTherapyWorks() {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto font-sans text-[#0F171E]">
      
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-[#247B85] font-semibold text-sm uppercase tracking-wider px-4 py-1.5 bg-[#F0F7F7] rounded-full inline-block mb-4 border border-[#BFE0E3]">
          Your Journey To Healing
        </span>
        <h2 className="text-3xl md:text-5xl font-bold text-[#0F171E] mb-4">
          How Therapy Works? <span className="text-[#247B85]">A Step-by-Step Guide</span>
        </h2>
        <p className="text-slate-600 text-lg leading-relaxed">
          Therapy is a collaborative process designed to help you understand your mind, process complex emotions, and create meaningful, lasting change in your daily life.
        </p>
      </div>

      {/* Step-by-Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {steps.map((step) => (
          <div 
            key={step.number}
            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group"
          >
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#F0F7F7] text-[#247B85] flex items-center justify-center font-bold text-xl mb-6 group-hover:bg-[#247B85] group-hover:text-white transition-colors duration-300">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-[#0F171E] mb-3">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-[#247B85] uppercase tracking-wide">
              {step.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Banner */}
      <div className="bg-[#247B85] rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
        <div className="max-w-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Ready to take the first step towards wellness?</h3>
          <p className="text-[#F0F7F7]/90 text-base">
            Empower your mind today with expert psychological support tailored just for you.
          </p>
        </div>
        <a 
          href="#contact" 
          className="inline-block bg-white text-[#0F171E] font-bold px-8 py-4 rounded-xl shadow hover:bg-slate-100 transition-all duration-200 whitespace-nowrap"
        >
          Book a Session
        </a>
      </div>

    </section>
  );
}