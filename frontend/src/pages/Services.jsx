import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { featuresData } from "../components/ServicesCardData";
import LandingPage from "../components/LandingPage";
import BookingGuide from "../components/BookingGuide";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* Hero */}
      <LandingPage />

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Evidence-informed psychological services designed to support
            emotional wellbeing across different stages of life.
          </p>
        </div>

        {/* Therapy */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-[#018081]">
            Therapy
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <Link
              to="/services/individual-therapy"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8"
            >
              <h4 className="text-2xl font-semibold mb-3">
                Individual Therapy
              </h4>

              <p className="text-gray-600">
                One-to-one counselling for anxiety, stress, burnout,
                emotional regulation, self-esteem, grief and life transitions.
              </p>

              <p className="mt-6 text-[#018081] font-semibold">
                Learn More →
              </p>
            </Link>

            <Link
              to="/services/child-adolescent"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8"
            >
              <h4 className="text-2xl font-semibold mb-3">
                Child & Adolescent Therapy
              </h4>

              <p className="text-gray-600">
                Age-appropriate counselling supporting emotional,
                behavioural, academic and social wellbeing.
              </p>

              <p className="mt-6 text-[#018081] font-semibold">
                Learn More →
              </p>
            </Link>

          </div>
        </div>

        {/* Programs */}
        <div className="mb-16">

          <h3 className="text-3xl font-bold mb-8 text-[#018081]">
            Programs
          </h3>

          <div className="grid md:grid-cols-2 gap-8">

            <Link
              to="/services/workshops"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8"
            >
              <h4 className="text-2xl font-semibold mb-3">
                Workshops
              </h4>

              <p className="text-gray-600">
                Interactive mental health workshops for schools,
                colleges, communities and organisations.
              </p>

              <p className="mt-6 text-[#018081] font-semibold">
                Learn More →
              </p>
            </Link>

            <Link
              to="/services/corporate-wellness"
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-8"
            >
              <h4 className="text-2xl font-semibold mb-3">
                Corporate Wellness
              </h4>

              <p className="text-gray-600">
                Employee wellbeing initiatives including resilience,
                stress management and psychological wellbeing programs.
              </p>

              <p className="mt-6 text-[#018081] font-semibold">
                Learn More →
              </p>
            </Link>

          </div>

        </div>

        {/* Approaches */}
        <div>

          <h3 className="text-3xl font-bold mb-8 text-[#018081]">
            Therapeutic Approaches
          </h3>

          <Link
            to="/services/approaches"
            className="block bg-white rounded-xl shadow-md hover:shadow-xl transition p-8"
          >
            <h4 className="text-2xl font-semibold mb-3">
              Evidence-Based Approaches
            </h4>

            <p className="text-gray-600">
              Learn about the therapeutic approaches we use, including
              CBT, DBT-informed techniques, mindfulness, person-centred
              therapy and integrative interventions.
            </p>

            <p className="mt-6 text-[#018081] font-semibold">
              Explore Approaches →
            </p>

          </Link>

        </div>

      </section>

      {/* Booking Guide */}
      <BookingGuide />

      {/* Privacy */}
      <section className="max-w-7xl mx-auto px-6 py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          We Value Your Privacy
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="bg-white rounded-xl shadow-md p-8 text-center"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-16 h-16 mx-auto mb-5"
              />

              <h3 className="text-xl font-semibold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.subtitle}
              </p>

            </div>
          ))}

        </div>

      </section>

    </div>
  );
};

export default Services;