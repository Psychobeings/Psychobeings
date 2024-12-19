import React from 'react';
import discovery from '../assets/discovery1.png';
import age_group from '../assets/age_group1.png';
import internship from '../assets/internship1.png';
import support from '../assets/support1.png';

const features = [
    {
        title: 'A Safe Haven for Self-Discovery and Resilience',
        description:
          'At Psychobeings, we create a space where individuals can explore their potential, build resilience, and thrive. Join us in the revolution of mental well-being, where growth and healing are at the forefront.',
        imgSrc: discovery,
      },
    {
      title: 'Affordable Support with No Strings Attached',
      description:
        'Breaking barriers, not banks. Our services come with minimal costs, proving that world-class mental health care doesn’t have to come with a hefty price tag. Your journey starts risk-free with a transformative first session for free.',
      imgSrc: support,
    },
    {
      title: 'Specialized for a Vibrant Age Group',
      description:
        'Whether you’re navigating adolescence or stepping into adulthood, we cater to the dynamic needs of individuals aged 11 to 35—empowering the next generation to flourish with personalized care.',
      imgSrc: age_group,
    },
    {
      title: 'Opportunities for Growth Through Internships',
      description:
        'We don’t just support mental well-being; we’re building a future where mental health advocates thrive. Our internship programs offer passionate individuals real-world experience, contributing to the mental wellness movement.',
      imgSrc: internship,
    },
  ];
  

const FeatureSection = () => {
  return (
    <section className="bg-gray-100 py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-screen-xl text-center">
        {/* Title */}
        <h1 className="text-dark-gunmetal font-bold text-2xl sm:text-3xl md:text-5xl mb-8 pt-10">
        What Makes Psychobeings Unmatched in Mental Health Support?
        </h1>
        <h2 className="text-gray-700 text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16">
          Discover how we stand out
        </h2>
      </div>

      {/* Features Container */}
      <div className="container mx-auto max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 sm:gap-10">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-pure-white p-6 shadow-custom rounded-lg hover:cursor-pointer transition duration-300 transform hover:scale-105"
          >
            <img
              src={feature.imgSrc}
              alt={`${feature.title} Icon`}
              className="mb-8 w-24 h-24"
            />
            <h3 className="font-semibold text-xl mb-3 text-dark-gunmetal">
              {feature.title}
            </h3>
            <p className="text-gray-600 text-center text-lg">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;
