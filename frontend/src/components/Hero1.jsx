import React from 'react';
import { Link } from 'react-router-dom';

function Hero1() {
  return (
    <section
  className="min-h-screen flex items-center px-6"
  style={{ backgroundColor: "#097f7f" }}
>
  <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

  
    <div className="max-w-2xl space-y-7 animate-fade-in text-left">

      <h1 className="text-4xl md:text-5xl font-bold text-cyan-50 leading-tight animate-slide-up">
        Compassionate Therapy for Emotional Wellbeing and Personal Growth.

        <span className="block h-1 w-16 bg-dark-gunmetal mt-3 rounded"></span>
      </h1>

      <p
        className="text-lg md:text-xl text-teal-50 leading-8 text-justify animate-slide-up"
        style={{ animationDelay: "0.3s" }}
      >
        Your path to emotional wellness starts here. At Psychobeings,
        we combine compassionate counselling, evidence-based psychological
        interventions, and mindfulness practices to support healing,
        personal growth, and lasting emotional wellbeing. Available in
        English and Hindi, with online sessions nationwide and in-person
        appointments in Faridabad, Haryana.
      </p>

      <div
        className="grid grid-cols-2 gap-8 pt-2 animate-slide-up"
        style={{ animationDelay: "0.5s" }}
      >

        <div>
          <h2 className="text-5xl font-bold text-white">
            500+
          </h2>

          <p className="text-teal-100 mt-2 leading-relaxed">
            Successful Sessions
            <br />
            Conducted
          </p>
        </div>

        <div>
          <h2 className="text-5xl font-bold text-white">
            5.0★
          </h2>

          <p className="text-teal-100 mt-2 leading-relaxed">
            Client Satisfaction Rating
            <br />
            with Positive Feedback
          </p>
        </div>

      </div>

      <Link to="/services">
        <button
          className="mt-6 px-8 py-4 rounded-full bg-white text-teal-800 text-lg font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-dark-gunmetal hover:text-white active:scale-95 animate-slide-up"
          style={{ animationDelay: "0.7s" }}
        >
          Explore Our Services
        </button>
      </Link>

    </div>

    <div className="hidden lg:flex justify-center animate-fade-in">
      <img
        src="/images/hero-image.png"
        alt="Psychological Counselling"
        className="max-w-md w-full"
      />
    </div>

  </div>
</section>
  );
}

export default Hero1;