import React from 'react';
import HeroHome from '../components/HomePage/Herohome';
import Howdoestherepywork from '../components/Howdoestherepywork';
import FAQ from '../components/FAQ';
const homeSections = [HeroHome,Howdoestherepywork,FAQ];

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F2F7F7] text-[#1F3A3D] font-sans selection:bg-[#1C7C83]/20 selection:text-[#1C7C83]">
      {/* Integrated Hero Section */}
      <HeroHome/>

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

/* --- Sample Placeholder Components for homeSections --- */

function AboutSection() {
  return (
    <div className="space-y-4">
      <span className="text-xs font-bold uppercase tracking-widest text-[#1C7C83]">
        About Psychobeings
      </span>
      <h2 className="font-serif text-3xl font-bold text-[#1F3A3D]">
        Empowering Minds. Transforming Lives.
      </h2>
      <p className="text-gray-700 leading-relaxed">
        We provide structured, compassionate psychological care and evidence-based therapy tailored for adults, teens, and families—fostering self-awareness, resilience, and long-term emotional wellbeing.
      </p>
    </div>
  );
}

function ServicesSection() {
  return (
    <div className="space-y-6">
      <div>
        <span className="text-xs font-bold uppercase tracking-widest text-[#1C7C83]">
          Our Expertise
        </span>
        <h2 className="font-serif text-3xl font-bold text-[#1F3A3D] mt-1">
          Therapeutic Services
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#F2F7F7] rounded-2xl border border-[#1C7C83]/10">
          <h3 className="font-serif font-bold text-xl text-[#1F3A3D] mb-2">Individual Psychotherapy</h3>
          <p className="text-sm text-gray-600">Tailored support for anxiety, mood, self-growth, and emotional regulation.</p>
        </div>
        <div className="p-6 bg-[#F2F7F7] rounded-2xl border border-[#1C7C83]/10">
          <h3 className="font-serif font-bold text-xl text-[#1F3A3D] mb-2">Child & Teen Support</h3>
          <p className="text-sm text-gray-600">Specialized psychological guidance through developmental and emotional challenges.</p>
        </div>
        <div className="p-6 bg-[#F2F7F7] rounded-2xl border border-[#1C7C83]/10">
          <h3 className="font-serif font-bold text-xl text-[#1F3A3D] mb-2">Academic & Research Guidance</h3>
          <p className="text-sm text-gray-600">Mentorship, research methods, and tutoring for psychology students.</p>
        </div>
      </div>
    </div>
  );
}

function ApproachSection() {
  return (
    <div className="space-y-4">
      <span className="text-xs font-bold uppercase tracking-widest text-[#1C7C83]">
        Our Approach
      </span>
      <h2 className="font-serif text-3xl font-bold text-[#1F3A3D]">
        Safe, Confidential & Client-Centered
      </h2>
      <p className="text-gray-700 leading-relaxed">
        Every individual's journey is unique. We blend traditional evidence-based modalities with integrative mind-body practices in a completely safe and confidential environment.
      </p>
    </div>
  );
}

function CTASection() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-[#E6F0F0] -m-6 sm:-m-8 lg:-m-10 p-8 sm:p-10">
      <div>
        <h3 className="font-serif text-2xl font-bold text-[#1F3A3D]">Ready to start your journey?</h3>
        <p className="text-sm text-gray-600 mt-1">Book an online or in-person session today.</p>
      </div>
      <a
        href="#book"
        className="shrink-0 bg-[#1C7C83] hover:bg-[#16666C] text-white font-medium px-8 py-3.5 rounded-full shadow-sm hover:shadow transition-all text-center"
      >
        Schedule Consultation
      </a>
    </div>
  );
}

export default Home;