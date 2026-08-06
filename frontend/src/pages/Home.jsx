import React from 'react';
import HeroHome from '../components/HomePage/Herohome';
import AboutHome from '../components/HomePage/AboutHome';
import MeetYourPsychologist from '../components/HomePage/Meetyourpsychologist';
import Thedifference from '../components/HomePage/Thedifference';
import Serviceshome from '../components/HomePage/Serviceshome';
import Howdoestherepywork from '../components/Howdoestherepywork';
import FAQ from '../components/FAQ';

// Defined dynamic sections to map over (excluding HeroHome so it doesn't render twice)
const homeSections = [
  AboutHome,
  MeetYourPsychologist,
  Thedifference,
  Serviceshome,
  Howdoestherepywork,
  FAQ,
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2F7F7] text-[#1F3A3D] font-sans selection:bg-[#1C7C83]/20 selection:text-[#1C7C83]">
      {/* Primary Hero Section */}
      <HeroHome />

      {/* Main Content Area mapping through custom sections */}
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-14">
          {homeSections.map((Section, index) => (
            <section
              key={index}
              className="overflow-hidden rounded-[28px] bg-white p-6 sm:p-8 lg:p-10 shadow-md border border-[#1C7C83]/10 transition-all hover:shadow-lg"
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