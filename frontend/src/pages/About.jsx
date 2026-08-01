import React, { useEffect } from "react";
import HeroSection from "../components/About/HeroSection";
import StorySections from "../components/About/StoryOfPsychobeings";
import HowWeStartedSection from "../components/About/HowWeStarted";
import OurVision from "../components/About/OurVision";
import OurMission from "../components/About/OurMission";
import ContactUS from "../components/About/ContactUS";

function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <main className="relative min-h-screen bg-[#f6fbfa] text-[#183436] font-sans selection:bg-[#0a7272] selection:text-white">
      {/* Subtle Background Accent Blurs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-[#0a7272]/5 blur-3xl" />
        <div className="absolute top-1/3 -left-40 h-96 w-96 rounded-full bg-[#0d5c5e]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 sm:py-16">
        <div className="space-y-12 sm:space-y-16">

          {/* Hero Section */}
          <section className="overflow-hidden rounded-3xl border border-[#d7ecec]/80 bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-lg">
            <HeroSection />
          </section>

          {/* Vision & Mission Grid */}
          <section className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-stretch">
            {/* Vision Card */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#d7ecec] bg-white p-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-full rounded-[1.25rem] bg-[#f9fdfd] p-2 sm:p-4">
                <OurVision />
              </div>
            </div>

            {/* Mission Card - Gradient Highlight */}
            <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#0a7272]/20 bg-gradient-to-br from-[#0a7272] via-[#0d5c5e] to-[#0f5f61] p-2 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="h-full rounded-[1.25rem] p-2 sm:p-4">
                <OurMission />
              </div>
            </div>
          </section>

          {/* Clinical Approach / Direct Care Banner */}
          <section className="overflow-hidden rounded-3xl border border-[#d7ecec] bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <HowWeStartedSection />
          </section>

          {/* Journey / Evolution Section */}
          <section className="relative overflow-hidden rounded-3xl border border-[#d7ecec]/80 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
            <StorySections />
          </section>

          {/* Call to Action & Contact Banner */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0a7272] via-[#0d5c5e] to-[#0f5f61] text-white shadow-xl transition-all duration-300 hover:shadow-2xl">
            {/* Background pattern decoration */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
            <div className="relative z-10">
              <ContactUS />
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}

export default About;