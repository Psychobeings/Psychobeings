import React from "react";
import HeroSection from "../components/About/HeroSection";
import StorySections from "../components/About/StoryOfPsychobeings";
import HowWeStartedSection from "../components/About/HowWeStarted";
import OurVision from "../components/About/OurVision";
import OurMission from "../components/About/OurMission";
import ContactUS from "../components/About/ContactUS";

function About() {
  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f8fcfb_0%,#f5fbf8_100%)] text-[#1f3a3d]">
      <div className="mx-auto max-w-7xl px-3 py-4 sm:px-6 lg:px-8">
        <div className="space-y-4 sm:space-y-6">
          <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <HeroSection />
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <OurVision />
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <OurMission />
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <StorySections />
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <HowWeStartedSection />
          </div>
          <div className="overflow-hidden rounded-[32px] border border-slate-200/70 bg-white/85 shadow-[0_20px_70px_-30px_rgba(15,23,42,0.25)] backdrop-blur-sm">
            <ContactUS />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
