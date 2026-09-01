import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Book a consultation',
    description:
      'Share your concerns and preferred format. We respond quickly and help you choose the support that best matches your situation.',
    tag: 'Step 1',
  },
  {
    number: '02',
    title: 'Initial assessment',
    description:
      'In your first session, we understand your challenges, goals, and emotional patterns so your care feels grounded and personalized.',
    tag: 'Step 2',
  },
  {
    number: '03',
    title: 'Create your treatment plan',
    description:
      'We design a clear, realistic therapeutic roadmap with practical strategies, supportive tools, and a pace that feels manageable.',
    tag: 'Step 3',
  },
  {
    number: '04',
    title: 'Track your progress',
    description:
      'Through regular sessions, you build resilience, improve daily coping, and begin to notice meaningful, lasting transformation.',
    tag: 'Step 4',
  },
];

export default function Stepsfortherepy() {
  return (
    <section className="bg-[#F2F7F7] px-6 py-16 text-[#1F3A3D] sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#1C7C83]/20 bg-[#E6F0F0] px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#1C7C83]">
            Simple process
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-[#1F3A3D] sm:text-4xl lg:text-5xl">
            How it works: <span className="font-serif italic text-[#1C7C83]">clear steps, gentle support.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Therapy should feel structured, supportive, and easy to begin. We make the path simple so you can focus on healing without unnecessary stress.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group flex min-h-[280px] flex-col rounded-[2rem] border border-[#1C7C83]/15 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1C7C83]/30 hover:shadow-lg"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F0F0] text-lg font-bold text-[#1C7C83] transition group-hover:bg-[#1C7C83] group-hover:text-white">
                {step.number}
              </div>

              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#1C7C83]">{step.tag}</span>
              <h3 className="mt-3 text-xl font-bold text-[#1F3A3D]">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}