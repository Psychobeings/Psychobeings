import React from 'react';
import discovery from '../assets/discovery1.png';
import age_group from '../assets/age_group1.png';
import internship from '../assets/internship1.png';
import support from '../assets/support1.png';

const features = [
  {
    number: '01',
    title: 'Personalized Care',
    description:
      'Every individual receives support shaped around their unique experiences, challenges, and goals—never a generic template.',
    imgSrc: discovery,
    badge: 'Tailored Support',
  },
  {
    number: '02',
    title: 'Therapeutic Approaches',
    description:
      'Integrating CBT, DBT, Mindfulness, and other proven methodologies across all age groups for holistic, lasting growth.',
    imgSrc: support,
    badge: 'Evidence-Based',
  },
  {
    number: '03',
    title: 'Workshops & Mentorship',
    description:
      'Beyond 1-on-1 sessions, we offer skill-building workshops and programs for organizations and students navigating career & life goals.',
    imgSrc: age_group,
    badge: 'Real-World Growth',
  },
  {
    number: '04',
    title: 'Safe & Confidential Space',
    description:
      'We prioritize strict privacy and foster a compassionate, judgment-free environment where you can freely express yourself.',
    imgSrc: internship,
    badge: 'Complete Privacy',
  },
];

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a7272] via-[#096262] to-[#053233] py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&display=swap');
        .ps-font-display { font-family: 'Fraunces', Georgia, serif; }
        .ps-font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      {/* Ambient Radial Background Effects */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute top-10 left-10 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-[#c9a962]/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header Section */}
        <div className="mx-auto max-w-3xl text-center mb-16 sm:mb-20">
          <span className="ps-font-body inline-block rounded-full border border-[#c9a962]/40 bg-[#c9a962]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.3em] text-[#e3cd94] backdrop-blur-md">
            The Psychobeings Approach
          </span>
          
          <h2 className="ps-font-display mt-6 text-3xl sm:text-4xl lg:text-5xl font-medium leading-tight text-white">
            Why people choose <span className="italic text-[#e3cd94]">Psychobeings</span>
          </h2>
          
          <div className="mx-auto my-6 h-0.5 w-16 rounded-full bg-gradient-to-r from-transparent via-[#c9a962] to-transparent" />
          
          <p className="ps-font-display italic text-lg sm:text-xl leading-relaxed text-emerald-50/80">
            &ldquo;Care that goes beyond a single session &mdash; personalized attention, proven
            therapeutic methods, and real-world learning within a space built on trust.&rdquo;
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-8 sm:p-10 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-[#c9a962]/50 hover:bg-white hover:shadow-[0_30px_60px_rgba(0,0,0,0.3)]"
            >
              {/* Top Accent Highlight Bar on Hover */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0a7272] via-[#c9a962] to-[#0a7272] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-6">
                  <span className="ps-font-body rounded-full bg-[#0a7272]/10 px-3 py-1 text-xs font-semibold text-[#0a7272]">
                    {feature.badge}
                  </span>
                  <span className="ps-font-display text-2xl font-bold text-[#c9a962]/50 group-hover:text-[#c9a962] transition-colors">
                    {feature.number}
                  </span>
                </div>

                {/* Icon Container & Title */}
                <div className="flex items-start gap-5 mb-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#eaf6f6] ring-1 ring-black/5 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#f5f0e2] group-hover:ring-[#c9a962]/40">
                    <img
                      src={feature.imgSrc}
                      alt=""
                      aria-hidden="true"
                      className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="ps-font-display text-2xl font-medium text-[#0d3b3c] leading-tight self-center">
                    {feature.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="ps-font-body text-slate-600 text-sm sm:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom Subtle Bar */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-medium text-[#0a7272]/80 group-hover:text-[#0a7272]">
                <span>Psychobeings Standard</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;