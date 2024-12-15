import React from "react";
// Import team member photos
import cardpic from "../assets/card-pic.png";
import aishaniPic from "../assets/aishaniPic.png";
import nysaPic from "../assets/nysaPic.png";
import preetiPic from "../assets/preetiPic.png";
import raghavPic from "../assets/raghavPic.png";
import taniyaPic from "../assets/taniyaPic.png";

const OurTeam = () => {
  // Team members' data with custom photos
  const teamMembers = [
    { name: "Aishani Purkayastha", role: "Mental Health Specialist", photo: aishaniPic },
    { name: "Nysa", role: "Clinical Psychologist", photo: nysaPic },
    { name: "Preeti Prasad", role: "Counselor", photo: preetiPic },
    { name: "Raghav", role: "Therapist", photo: raghavPic },
    { name: "Taniya Sachiel", role: "Research Analyst", photo: taniyaPic },
  ];

  return (
    <section className="relative from-light-blue to-light-green py-10 md:py-16 shadow-xl rounded-2xl max-w-[calc(100%-2cm)] mx-auto mt-20 mb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold leading-none sm:text-5xl text-dark-gunmetal mb-6">
            Our Team
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Our team is here to support you with care and compassion, bringing
            expertise and understanding to every step of your journey. Together,
            we're dedicated to creating a brighter, healthier tomorrow for all.
          </p>
        </div>

        {/* Founder Card */}
        <div className="flex flex-col items-center text-center mb-24 p-4 rounded-xl shadow-lg shadow-neutral-400/50 transition-transform transform hover:scale-105 max-w-xs mx-auto">
          <div className="relative w-40 h-40 mb-4 overflow-hidden rounded-full shadow-md">
            <img
              alt="Amanpreet Kaur"
              src={cardpic}
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-xl font-semibold leading-tight">Amanpreet Kaur</p>
          <p className="text-gray-600">Founder</p>
        </div>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {teamMembers.map((member, id) => (
            <div
              key={id}
              className="flex flex-col items-center text-center p-4 rounded-xl shadow-lg shadow-neutral-400/50 transition-transform transform hover:scale-105">
              <div className="relative w-32 h-32 mb-4 overflow-hidden rounded-full shadow-md">
                <img
                  alt={member.name}
                  src={member.photo}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xl font-semibold leading-tight">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
