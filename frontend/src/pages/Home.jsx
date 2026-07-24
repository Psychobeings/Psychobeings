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
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-14">
          {homeSections.map((Section, index) => (
            <section
              key={index}
              className="overflow-hidden rounded-[28px] bg-white p-6 sm:p-8 lg:p-10 shadow-lg border border-teal-50"
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
