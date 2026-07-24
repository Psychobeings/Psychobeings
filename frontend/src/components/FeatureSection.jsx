import React from 'react';
import discovery from '../assets/discovery1.png';
import age_group from '../assets/age_group1.png';
import internship from '../assets/internship1.png';
import support from '../assets/support1.png';

const features = [
    {
        title: 'Personalized Care',
        description:
          'Every individual receives support shaped around their unique experiences, challenges, and goals, not a one-size-fits-all approach.',
        imgSrc: discovery,
      },
    {
      title: 'Our Therapeutic Approaches',
      description:
        'Integrating CBT, DBT,Mindfulness and other proven therapeutic approaches with diverse age groups from childhood to adulthood, ensuring a holistic and effective care experience.',
      imgSrc: support,
    },
    {
      title: 'Workshops and Mentorship Opportunities',
      description:
        'Beyond individual sessions, we offer workshops and mentorship programs that build real-world skills and hands-on experience. To organizations and students, we help you navigate your personal and professional growth.',
      imgSrc: age_group,
    },
    {
      title: 'Safe and Confidential Environment',
      description:
        'We prioritize your privacy and create a judgment-free space where you can openly express your thoughts and feelings.',
      imgSrc: internship,
    },
  ];
  

const FeatureSection = () => {
  return (
    <section className="bg-[#097f7f] py-12 sm:py-16 px-4">
      <div className="container mx-auto max-w-screen-xl text-center">
        {/* Title */}
        <h1 className="text-white font-bold text-2xl sm:text-3xl md:text-5xl mb-8 pt-10">
        Why People Choose Psychobeings?
        </h1>
        <h2 className="text-white text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16">
          The care goes beyond a single session. We combine personalized attention, proven therapeutic methods, and real-world learning opportunities, all within a space built on trust and confidentiality.
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
