import React from 'react';
import { Link } from 'react-router-dom';

function Hero1() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center px-6 lg:px-12"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 35%),
          radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 40%),
          linear-gradient(135deg,#097f7f 0%, #0a7272 100%)
        `
      }}
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-200/10 blur-[150px]"></div>

      <div className="max-w-[1400px] mx-auto w-full grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}

        <div className="space-y-10">

          {/* Heading */}

          <div>
            <h1
              className="text-5xl md:text-7xl font-semibold text-white leading-[1.05]"
              style={{
                fontFamily: "'Playfair Display', serif",
              }}
            >
              Compassionate Therapy
              <br />
              for Emotional Wellbeing
              <br />
              and Personal Growth.
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-white/80"></div>
          </div>

          {/* Description */}

          <div className="max-w-xl">
            <p
              className="text-xl leading-10 text-cyan-50"
              style={{
                fontFamily: "Inter",
              }}
            >
              Your path to emotional wellness starts here.
              At <strong>Psychobeings</strong>, we combine
              compassionate counselling, evidence-based psychological
              interventions and mindfulness practices to help individuals
              heal, grow and build emotional resilience.
            </p>

            <p className="mt-6 text-lg text-cyan-100 leading-8">
              Sessions are available in <strong>English</strong> and
              <strong> Hindi</strong>, with online counselling across
              India and in-person appointments in
              <strong> Faridabad, Haryana.</strong>
            </p>
          </div>

          {/* Statistics */}

          <div className="flex flex-wrap gap-16">

            <div>
              <h2 className="text-6xl font-bold text-white">
                500+
              </h2>

              <p className="mt-3 text-cyan-100 text-lg leading-8">
                Successful
                <br />
                Sessions Conducted
              </p>
            </div>

            <div>
              <h2 className="text-6xl font-bold text-white">
                5.0★
              </h2>

              <p className="mt-3 text-cyan-100 text-lg leading-8">
                Client Satisfaction
                <br />
                Rating
              </p>
            </div>

          </div>

          {/* Buttons */}

          <div className="flex flex-wrap gap-5 pt-2">

            <Link to="/services">
              <button className="px-10 py-5 rounded-full bg-white text-teal-800 text-lg font-semibold shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-gray-100">
                Explore Services
              </button>
            </Link>

            <Link to="/contact">
              <button className="px-10 py-5 rounded-full border-2 border-white text-white text-lg font-medium transition-all duration-300 hover:bg-white hover:text-teal-800">
                Book Appointment
              </button>
            </Link>

          </div>

        </div>

        {/* RIGHT IMAGE */}

        <div className="relative flex justify-center">

          {/* Glow */}

          <div className="absolute w-[520px] h-[520px] bg-white/10 rounded-full blur-[120px]"></div>

          <img
            src="/images/hero-image.png"
            alt="Psychological Counselling"
            className="relative w-full max-w-[600px] rounded-[36px] shadow-2xl object-cover"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero1;