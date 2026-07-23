import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cardsData } from '../components/ServicesCardData';

const packageDetails = {
  'Individual Therapy': {
    badge: 'Most Popular',
    price: '₹1,500 / session',
    description:
      'A personalised one-on-one support space for anxiety, stress, burnout, grief, and life transitions.',
    features: [
      '50-minute session',
      'Personalised support plan',
      'Confidential and judgement-free care',
    ],
    link: '/individual-therapy',
  },

  'Corporate Wellness Counselling': {
    badge: 'For Teams',
    price: '₹8,000 for 6 sessions',
    description:
      'Structured support for workplace stress, emotional fatigue, and team wellbeing.',
    features: [
      'Flexible sessions',
      'Workplace-focused guidance',
      'Practical coping tools',
    ],
    link: '/contact',
  },

  'Child & Adolescent Counselling': {
    badge: 'Gentle Support',
    price: '₹1,200 / session',
    description:
      'Warm, age-appropriate care for children and teens navigating emotional or behavioural challenges.',
    features: [
      'Child-friendly approach',
      'Parental guidance',
      'Safe and supportive sessions',
    ],
    link: '/contact',
  },

  'Workshops & Group Therapy': {
    badge: 'Community Focus',
    price: '₹500 / participant',
    description:
      'Interactive group sessions designed to build connection, awareness, and emotional resilience.',
    features: [
      'Small-group experience',
      'Guided facilitation',
      'Supportive learning environment',
    ],
    link: '/contact',
  },

  'Group Therapy': {
    badge: 'Shared Healing',
    price: '₹15,000 / workshop',
    description:
      'A guided group experience for people looking for collective support and meaningful reflection.',
    features: [
      'Structured sessions',
      'Safe group setting',
      'Professional facilitation',
    ],
    link: '/contact',
  },
};

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packageCards = cardsData.map((service) => ({
    ...service,
    details: packageDetails[service.title] || {
      badge: 'Flexible',
      price: service.price,
      description: service.description,
      features: [
        'Confidential care',
        'Evidence-based support',
        'Tailored guidance',
      ],
      link: '/contact',
    },
  }));

  return (
    <div className="px-4 py-10 md:px-8 lg:px-16">

      {/* Hero Section */}

      <section className="rounded-[2rem] bg-gradient-to-br from-[#F8FCFC] via-white to-[#E7F7F6] p-8 shadow-lg md:p-12">
        <div className="max-w-3xl">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#018081]">
            Our Packages
          </p>

          <h1 className="mt-3 text-3xl font-bold text-[#18333B] sm:text-4xl">
            Support options shaped around your mental wellbeing.
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-[#5F6F73]">
            Choose a package that aligns with your current needs—whether you're
            seeking individual therapy, workplace wellbeing, child counselling,
            or guided group support.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">

            <span className="rounded-full border border-[#D8ECEA] bg-white px-4 py-2 shadow-sm">
              Confidential Care
            </span>

            <span className="rounded-full border border-[#D8ECEA] bg-white px-4 py-2 shadow-sm">
              Evidence-Based Therapy
            </span>

            <span className="rounded-full border border-[#D8ECEA] bg-white px-4 py-2 shadow-sm">
              Safe & Non-Judgmental
            </span>

          </div>

        </div>
      </section>

      {/* Package Cards */}

      <section className="mt-10 grid gap-6 lg:grid-cols-2">

        {packageCards.map((pkg) => (

          <div
            key={pkg.id}
            className="rounded-3xl border border-[#DCEEEE] bg-white p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:border-[#018081] hover:shadow-xl"
          >

            <div className="flex items-center justify-between gap-3">

              <h2 className="text-xl font-semibold text-[#18333B]">
                {pkg.title}
              </h2>

              <span className="rounded-full bg-[#E7F7F6] px-3 py-1 text-sm font-semibold text-[#018081]">
                {pkg.details.badge}
              </span>

            </div>

            <p className="mt-3 leading-relaxed text-[#5F6F73]">
              {pkg.details.description}
            </p>

            <p className="mt-5 text-2xl font-bold text-[#018081]">
              {pkg.details.price}
            </p>

            <ul className="mt-5 space-y-3 text-sm text-[#18333B]">

              {pkg.details.features.map((feature) => (

                <li
                  key={feature}
                  className="flex items-start gap-3"
                >
                  <span className="font-bold text-[#018081]">
                    ✓
                  </span>

                  <span>{feature}</span>

                </li>

              ))}

            </ul>

            <Link
              to={pkg.details.link}
              className="mt-6 inline-flex items-center rounded-full bg-[#018081] px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#016C6D] hover:shadow-lg"
            >
              Book this Package
            </Link>

          </div>

        ))}

      </section>

    </div>
  );
};

export default Packages;