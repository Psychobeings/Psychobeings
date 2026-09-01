import React from 'react';
import HeroHome from '../components/HomePage/Herohome';
import AboutHome from '../components/HomePage/AboutHome';
import MeetYourPsychologist from '../components/HomePage/Meetyourpsychologist';
import Thedifference from '../components/HomePage/Thedifference';
import Serviceshome from '../components/HomePage/Serviceshome';
import Stepsfortherepy from '../components/HomePage/Stepsfortherepy';
import Reviewssection from '../components/HomePage/Reviewssection';
import FAQ from '../components/FAQ';
import Packageshome from '../components/HomePage/Packageshome';
import Vistus from '../components/HomePage/Vistus';

// Section registry mapping components to alternating background styles
const homeSections = [
  { component: AboutHome, bg: 'bg-[#fbfdfd]' },
  { component: MeetYourPsychologist, bg: 'bg-[#edf7f7]/60 border-y border-[#d8ecec]' },
  { component: Thedifference, bg: 'bg-[#fbfdfd]' },
  { component: Serviceshome, bg: 'bg-[#f7fbfb]' },
  { component: Stepsfortherepy, bg: 'bg-[#fbfdfd]' },
  { component: Packageshome, bg: 'bg-[#edf7f7]/40' },
  { component: Reviewssection, bg: 'bg-[#fbfdfd]' },
  { component: FAQ, bg: 'bg-[#f7fbfb]' },
  { component: Vistus, bg: 'bg-[#fbfdfd]' },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased selection:bg-[#036b75]/15 selection:text-[#036b75]">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <HeroHome />
      </section>

      {/* Main Content Sections */}
      <main>
        {homeSections.map(({ component: SectionComponent, bg }, index) => (
          <section
            key={index}
            className={`py-12 sm:py-16 lg:py-20 transition-colors ${bg}`}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <SectionComponent />
            </div>
          </section>
        ))}
      </main>

    </div>
  );
};

export default Home;