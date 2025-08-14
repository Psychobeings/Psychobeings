import React from "react";
import HeroSection from "../components/About/HeroSection";

import StorySections from "../components/About/StoryOfPsychobeings";


import HowWeStartedSection from "../components/About/HowWeStarted";
import OurVision from "../components/About/OurVision";
import OurMission from "../components/About/OurMission";

import ContactUS from "../components/About/ContactUS";


function About() {
  return (
    < div className="min-h-screen">
      <HeroSection />
      <OurVision />
      <OurMission />
      <StorySections />
      <HowWeStartedSection/>
      <ContactUS />
      
    </ div>
  );
}

export default About;

