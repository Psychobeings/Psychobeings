import React from 'react';
import Hero1 from './Hero1';
import Hero from './Hero'; // About / Hero component

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-[#1f3a3d]">
      {/* 1. First Hero Section */}
      <Hero1 />

      {/* 2. Second Hero/About Section (Rendered full-width like Hero1, no white curved card box) */}
      <Hero />

      {/* 3. Other mapped sections inside card wrappers */}
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