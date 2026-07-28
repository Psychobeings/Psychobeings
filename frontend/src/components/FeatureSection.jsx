import React from 'react';
import discovery from '../assets/discovery1.png';
import age_group from '../assets/age_group1.png';
import internship from '../assets/internship1.png';
import support from '../assets/support1.png';

// ---------------------------------------------------------------------------
// NOTE ON FONTS
// This component pulls in two Google Fonts: "Fraunces" (a warm, characterful
// serif with true italics, used for the display headline and card titles)
// and "Inter" (body/utility sans). For production, move this <link>/@import
// to your document <head> (e.g. index.html) instead of loading it per-
// component, so it's fetched once and doesn't block re-renders of this
// section specifically. It's included inline here just so this file is
// drop-in runnable on its own.
// ---------------------------------------------------------------------------

const features = [
  {
    title: 'Personalized Care',
    description:
      'Every individual receives support shaped around their unique experiences, challenges, and goals, not a one-size-fits-all approach.',
    imgSrc: discovery,
  },
  {
    title: 'Our Therapeutic Approaches',
    description:
      'Integrating CBT, DBT, Mindfulness, and other proven therapeutic approaches across age groups from childhood to adulthood, for a holistic and effective care experience.',
    imgSrc: support,
  },
  {
    title: 'Workshops and Mentorship Opportunities',
    description:
      'Beyond individual sessions, we offer workshops and mentorship programs that build real-world skills and hands-on experience for organizations and students navigating personal and professional growth.',
    imgSrc: age_group,
  },
  {
    title: 'Safe and Confidential Environment',
    description:
      'We prioritize your privacy and create a judgment-free space where you can openly express your thoughts and feelings.',
    imgSrc: internship,
  },
];

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a7272] via-[#0a6b6b] to-[#063a3b] py-24 sm:py-28 px-4">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500;1,9..144,600&family=Inter:wght@400;500;600&display=swap');
        .ps-font-display { font-family: 'Fraunces', Georgia, serif; }
        .ps-font-body { font-family: 'Inter', system-ui, sans-serif; }
      `}</style>

      {/* Ambient depth — echoes the hero card's glow so the brand language stays consistent */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,_rgba(255,255,255,0.08),_transparent_40%),radial-gradient(circle_at_85%_90%,_rgba(201,169,98,0.10),_transparent_45%)]" />

      <div className="relative container mx-auto max-w-screen-lg text-center">
        <p className="ps-font-body text-[#c9a962] text-xs sm:text-sm font-semibold uppercase tracking-[0.35em] mb-5">
          The Psychobeings Approach
        </p>
        <h2 className="ps-font-display text-white text-3xl sm:text-4xl md:text-5xl leading-tight mb-6">
          Why people choose{' '}
          <span className="italic text-[#e3cd94]">Psychobeings</span>
        </h2>
        <div className="mx-auto mb-8 h-px w-16 bg-[#c9a962]/60" />
        <p className="ps-font-display italic text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-16 sm:mb-20">
          &ldquo;Care that goes beyond a single session &mdash; personalized attention, proven
          therapeutic methods, and real-world learning, all within a space built on trust.&rdquo;
        </p>
      </div>

      <div className="relative container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="group relative flex flex-col items-center text-center bg-white/[0.98] p-8 sm:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-all duration-500 motion-safe:hover:-translate-y-1.5 hover:shadow-[0_30px_60px_rgba(0,0,0,0.35)]"
          >
            {/* Signature hairline — mirrors the gold rule under the headline; appears on hover */}
            <span className="absolute top-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#c9a962] transition-all duration-500 group-hover:w-16" />

            <div className="mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-[#eaf6f6] ring-1 ring-transparent transition-all duration-500 group-hover:ring-[#c9a962]/50 group-hover:bg-[#f5f0e2]">
              <img
                src={feature.imgSrc}
                alt=""
                aria-hidden="true"
                className="h-11 w-11 object-contain"
              />
            </div>
            <h3 className="ps-font-display text-xl sm:text-2xl mb-3 text-[#0d3b3c]">
              {feature.title}
            </h3>
            <p className="ps-font-body text-gray-600 text-base leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;