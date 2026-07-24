import React from 'react';
import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import FAQ from '../components/FAQ';
import FeatureSection from '../components/FeatureSection';
import Hero1 from '../components/Hero1';
import LanguageSupport from '../components/LanguageSupport';
import FoundersNote from '../components/FoundersNote';
import TherapyApproach from '../components/TherapyApproach';

const homeSections = [Hero, WhatWeDo, LanguageSupport, FeatureSection, FoundersNote, TherapyApproach, FAQ];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b
from-[#FBFEFD]
via-[#F8FCFB]
to-[#F2F8F7] text-[#1f3a3d]">
      <Hero1 />
     <div className="min-h-screen bg-gradient-to-b from-[#FBFEFD] via-[#F8FCFB] to-[#F2F8F7] text-[#1f3a3d]">
  <Hero1 />

  <div className="mx-auto max-w-screen-xl px-5 py-12">
    <div className="space-y-12">
      {homeSections.map((Section, index) => (
        <section
          key={index}
          className={`overflow-hidden rounded-3xl p-8 lg:p-10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
            index % 2 === 0
              ? "bg-white shadow-lg"
              : "bg-[#F7FCFB] border border-teal-100"
          }`}
        >
          <Section />
        </section>
      ))}
    </div>
  </div>
</div>

    </div>
  );
};

export default Home;
