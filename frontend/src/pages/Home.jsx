import React from 'react';
import WhatWeDo from '../components/WhatWeDo';
import FAQ from '../components/FAQ';
import Hero1 from '../components/Hero1';
import Hero from '../components/Hero';
import LanguageSupport from '../components/LanguageSupport';
import FoundersNote from '../components/FoundersNote';
import HowTherapyWorks from '../components/Howdoestherepywork';
import CareAssessment from '../components/quick and interactive question';
import FeaturedServices from '../components/FeaturedServices';
import Testimonials from '../components/Testimonials';

const homeSections = [Hero, WhatWeDo, LanguageSupport, FoundersNote, HowTherapyWorks, CareAssessment, FeaturedServices, Testimonials, FAQ];

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#1f3a3d]">
      <Hero1 />
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-14">
          {homeSections.map((Section, index) => (
            <section
              key={index}
              className="overflow-hidden rounded-[28px] bg-white p-6 sm:p-8 lg:p-10 shadow-lg border border-slate-100"
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
