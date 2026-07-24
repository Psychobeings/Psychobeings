import React from 'react';
import { Link } from 'react-router-dom';
import ImageElementUpdated from '../assets/ImageElementUpdated.png';

// NOTE ON FONTS
// The <style> block below loads Playfair Display + Inter via @import so this
// component renders correctly on its own. In production, move this into your
// global stylesheet or <head> (e.g. index.html or a _document/layout file)
// instead of importing per-component — @import in a component re-fetches on
// every mount and blocks render slightly. Example for index.html:
// <link rel="preconnect" href="https://fonts.googleapis.com">
// <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">

function Hero1() {
  return (
    <section
      className="relative overflow-hidden min-h-screen flex items-center px-6 py-24 lg:px-12"
      style={{
        background: `
          radial-gradient(circle at top left, rgba(255,255,255,0.08), transparent 35%),
          radial-gradient(circle at bottom right, rgba(255,255,255,0.05), transparent 40%),
          linear-gradient(135deg,#097f7f 0%, #0a7272 100%)
        `,
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap');
      `}</style>

      {/* Background glow */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-cyan-200/10 blur-[150px]" />

      <div className="relative max-w-[1400px] mx-auto w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 lg:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8 order-2 lg:order-1">

          {/* Heading */}
          <div>
            <h1
              className="text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold text-white leading-[1.1] tracking-tight max-w-xl"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Compassionate therapy for emotional wellbeing and personal growth
            </h1>
            <div className="mt-6 h-1 w-16 rounded-full bg-white/80" />
          </div>

          {/* Description */}
          <div className="max-w-xl space-y-5">
            <p
              className="text-lg md:text-xl leading-relaxed text-cyan-50"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Your path to emotional wellness starts here. At{' '}
              <strong className="font-semibold text-white">Psychobeings</strong>,
              we combine compassionate counselling, evidence-based
              psychological interventions and mindfulness practices to help
              individuals heal, grow and build emotional resilience.
            </p>

            <p
              className="text-base md:text-lg leading-relaxed text-cyan-100"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Sessions are available in <strong className="text-white font-medium">English</strong> and{' '}
              <strong className="text-white font-medium">Hindi</strong>, with online
              counselling across India and in-person appointments in{' '}
              <strong className="text-white font-medium">Faridabad, Haryana</strong>.
            </p>
          </div>

          {/* Statistics */}
          <div className="flex flex-wrap gap-x-12 gap-y-6 pt-2">
            <div>
              <h2
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                500+
              </h2>
              <p className="mt-2 text-cyan-100 text-base leading-snug">
                Successful sessions
                <br />
                conducted
              </p>
            </div>

            <div className="w-px bg-white/15 hidden sm:block" />

            <div>
              <h2
                className="text-5xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                5.0★
              </h2>
              <p className="mt-2 text-cyan-100 text-base leading-snug">
                Client satisfaction
                <br />
                rating
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link to="/services">
              <button className="px-8 py-4 rounded-full bg-white text-teal-800 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-[1.03] hover:bg-gray-100">
                Explore Services
              </button>
            </Link>

            <a href="https://booking.myndspace.app/amanp" target="_blank" rel="noopener noreferrer">
              <button className="px-8 py-4 rounded-full border-2 border-white/80 text-white text-base font-medium transition-all duration-300 hover:bg-white hover:text-teal-800">
                Book Appointment
              </button>
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center order-1 lg:order-2">
          <div className="absolute w-[420px] h-[420px] sm:w-[520px] sm:h-[520px] bg-white/10 rounded-full blur-[120px]" />
          <img
            src={ImageElementUpdated}
            alt="Psychological Counselling"
            className="relative w-full max-w-[480px] lg:max-w-[600px] rounded-[36px] shadow-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero1;