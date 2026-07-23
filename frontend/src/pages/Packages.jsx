import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { cardsData } from '../components/ServicesCardData';

const packageDetails = {
  'Individual Therapy': {
    badge: 'Most Popular',
    price: '₹1,500 / session',
    description:
      'A personalised one-on-one support space for anxiety, stress, burnout, grief, and life transitions.',
    features: ['50-minute session', 'Personalised support plan', 'Confidential and judgement-free care'],
    link: '/individual-therapy',
  },
  'Corporate Wellness Counselling': {
    badge: 'For Teams',
    price: '₹8,000 for 6 sessions',
    description:
      'Structured support for workplace stress, emotional fatigue, and team wellbeing.',
    features: ['Flexible sessions', 'Workplace-focused guidance', 'Practical coping tools'],
    link: '/contact',
  },
  'Child & Adolescent Counselling': {
    badge: 'Gentle Support',
    price: '₹1,200 / session',
    description:
      'Warm, age-appropriate care for children and teens navigating emotional or behavioural challenges.',
    features: ['Child-friendly approach', 'Parental guidance', 'Safe and supportive sessions'],
    link: '/contact',
  },
  'Workshops & Group Therapy': {
    badge: 'Community Focus',
    price: '₹500 / participant',
    description:
      'Interactive group sessions designed to build connection, awareness, and emotional resilience.',
    features: ['Small-group experience', 'Guided facilitation', 'Supportive learning environment'],
    link: '/contact',
  },
  'Group Therapy': {
    badge: 'Shared Healing',
    price: '₹15,000 / workshop',
    description:
      'A guided group experience for people looking for collective support and meaningful reflection.',
    features: ['Structured sessions', 'Safe group setting', 'Professional facilitation'],
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
      features: ['Confidential care', 'Evidence-based support', 'Tailored guidance'],
      link: '/contact',
    },
  }));

  return (
    <div className="px-4 py-10 md:px-8 lg:px-16">
      <section className="rounded-[2rem] bg-gradient-to-br from-[#f6ecff] via-white to-[#eef7ff] p-8 shadow-sm md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7a42c9]">
            Our packages
          </p>
          <h1 className="mt-3 text-3xl font-bold text-gray-900 sm:text-4xl">
            Support options shaped around the services you need
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Choose a package that fits your current goals, whether you need one-on-one therapy,
            workplace support, or a group experience.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-sm text-gray-700">
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Confidential care</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Evidence-based support</span>
            <span className="rounded-full bg-white px-4 py-2 shadow-sm">Non-judgmental space</span>
          </div>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        {packageCards.map((pkg) => (
          <div
            key={pkg.id}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold text-gray-900">{pkg.title}</h2>
              <span className="rounded-full bg-[#f1e9ff] px-3 py-1 text-sm font-medium text-[#7a42c9]">
                {pkg.details.badge}
              </span>
            </div>

            <p className="mt-3 text-gray-600">{pkg.details.description}</p>

            <p className="mt-5 text-2xl font-bold text-[#7a42c9]">{pkg.details.price}</p>

            <ul className="mt-5 space-y-2 text-sm text-gray-700">
              {pkg.details.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="mt-1 text-[#7a42c9]">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to={pkg.details.link}
              className="mt-6 inline-flex items-center rounded-full bg-[#7a42c9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6930b5]"
            >
              Book this package
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Packages;
