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
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fcfb_0%,#f5fbf8_100%)] text-[#1f3a3d]">
      <Hero1 />
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="space-y-6 lg:space-y-8">
          {homeSections.map((Section, index) => (
            <section
              key={index}
              className="overflow-hidden rounded-[32px] border border-teal-100/80 bg-white/85 p-4 shadow-[0_20px_70px_-30px_rgba(9,127,127,0.35)] backdrop-blur-sm sm:p-8 lg:p-10"
            >
              <Section />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
