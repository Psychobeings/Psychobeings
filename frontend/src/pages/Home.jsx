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
import { MapPin, Globe2, Clock3 } from 'lucide-react';

const trustBarItems = [
  { icon: MapPin, label: 'Faridabad, Haryana', detail: 'In-person care available' },
  { icon: Globe2, label: 'English & Hindi', detail: 'Sessions in both languages' },
  { icon: Clock3, label: 'Fast response', detail: 'Usually within 24 hours' },
];

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
      <section className="relative overflow-hidden">
        <HeroHome />
      </section>

      <section className="border-y border-[#d8ecec] bg-white/80">
        <div className="mx-auto grid max-w-7xl gap-4 px-4 py-5 md:grid-cols-3 sm:px-6 lg:px-8">
          {trustBarItems.map(({ icon: Icon, label, detail }) => (
            <div key={label} className="flex items-center gap-3 rounded-2xl border border-[#d8ecec] bg-[#f7fbfb] p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eaf7f7] text-[#1C7C83]">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">{label}</p>
                <p className="text-xs text-slate-600">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <main>
        {homeSections.map(({ component: SectionComponent, bg }, index) => (
          <section
            key={index}
            className={`py-12 transition-colors sm:py-16 lg:py-20 ${bg}`}
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