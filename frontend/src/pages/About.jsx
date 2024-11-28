// src/components/AboutUs.js
import React from "react";
import OurTeam from "../components/OurTeam";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Heading from "../components/Heading";
import Bullseye from "../assets/Bullseye.gif";
import Mission from "../assets/Mission.gif";


const AboutUs = () => {
  return (
    <>
      <Heading />
      <Section1
        heading="Our Mission"
        content="At Psychobeings, our mission is to create a supportive and accessible platform that fosters mental well-being, academic growth, and personal development. We are committed to empowering individuals to overcome challenges, build resilience, and lead fulfilling lives through quality guidance, education, and counseling.  "
        image={Mission}

        // {/* <img src="/static/media/thinkingImage.c6a40b9198da52ee3ef9.gif" alt="Animated Illustration" class="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 object-cover"></img> */}
      />
      <Section2
        heading="Our Vision"
        content="We envision a world where mental health is prioritized, stigma is replaced with acceptance, and individuals have the tools to achieve their highest potential. Through education, workshops, and counseling, we aim to inspire growth, self-awareness, and emotional well-being in all those we serve.  "
        image={Bullseye}
      />
      <Section1
        heading="Founder's Note"
        content="Welcome to Psychobeings!  
          I'm Amanpreet , and this platform is the realization of a dream to make mental health support and education accessible to everyone. With a deep passion for psychology and years of experience, I founded Psychobeings as a safe space for individuals to learn, heal, and grow. Whether it’s through counseling, tuition, or workshops, my goal is to guide you toward a life of balance and purpose.  
          Thank you for being a part of this journey. Together, let’s redefine mental wellness and create a community where growth has no limits.  "
        image="https://img.freepik.com/free-photo/hands-holding-green-paper-brain_23-2148577394.jpg"
      />
      {/* <Section2
        heading="Our Mission"
        content="At Psychobeings, we are dedicated to fostering a world where mental
              health is prioritized, understood, and supported. Our mission is to
              empower individuals on their journey toward mental well-being by providing
              compassionate care, accessible resources, and a supportive community.
              Together, we strive to break down stigma, nurture resilience, and inspire
              growth for a healthier, more balanced life."
        image="https://img.freepik.com/free-photo/hands-holding-green-paper-brain_23-2148577394.jpg"
      /> */}
        
      <OurTeam />
    </>
  );
};

export default AboutUs;
