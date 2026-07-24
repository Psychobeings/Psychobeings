import React from 'react';
import discovery from '../assets/discovery1.png';
import age_group from '../assets/age_group1.png';
import internship from '../assets/internship1.png';
import support from '../assets/support1.png';

const FeatureSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#F8FCFB] py-24">

      {/* Background Blur */}
      <div className="absolute -top-24 left-0 h-72 w-72 rounded-full bg-teal-100 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-100 blur-[120px]" />

      {/* Heading */}
      <div className="relative mx-auto max-w-4xl text-center mb-24 px-6">
        <h2 className="text-4xl md:text-5xl font-light text-[#163A43]">
          Why People Choose
          <span className="font-semibold text-[#0B8A83]">
            {" "}Psychobeings
          </span>
        </h2>

        <p className="mt-8 text-lg md:text-xl text-gray-600 leading-9">
          We believe meaningful healing comes from compassionate
          relationships, evidence-based care, and a safe environment
          where every individual feels understood.
        </p>
      </div>

      {/* Features */}
      <div className="relative max-w-7xl mx-auto space-y-24 px-6">

        {features.map((feature, index) => (

          <div
            key={index}
            className={`grid lg:grid-cols-2 gap-16 items-center ${
              index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >

            {/* Image */}
            <div className="overflow-hidden rounded-3xl shadow-xl">
              <img
                src={feature.imgSrc}
                alt={feature.title}
                className="w-full h-[420px] object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Text */}
            <div>
              <h3 className="text-3xl md:text-4xl font-light text-[#163A43] mb-6">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-9 text-lg">
                {feature.description}
              </p>
            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default FeatureSection;