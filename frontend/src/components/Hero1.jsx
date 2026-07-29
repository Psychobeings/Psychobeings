import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Monitor,
  Star,
} from "lucide-react";

import ImageElementUpdated from "../assets/ImageElementUpdated.png";

function Hero1() {
  return (
    <section
      className="relative overflow-hidden min-h-screen bg-gradient-to-br from-[#0c7473] via-[#0a6d6d] to-[#0b5f63]"
      style={{
        fontFamily: "Inter, sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');

        .playfair {
          font-family: 'Playfair Display', serif;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background Glows */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-cyan-300/10 blur-[130px] pointer-events-none" />
      <div className="absolute top-40 right-0 w-[350px] h-[350px] rounded-full bg-white/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[550px] rounded-full bg-cyan-200/10 blur-[180px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-20 lg:pt-32 pb-16 lg:pb-20">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 sm:px-5 py-2 text-cyan-50 text-xs sm:text-sm mb-6 sm:mb-8">
              <HeartHandshake size={16} />
              <span>Compassionate • Confidential • Evidence-Based</span>
            </div>

            {/* Heading */}
            <h1 className="playfair text-3xl sm:text-4xl lg:text-5xl leading-[1.15] text-white max-w-2xl">
              Compassionate Therapy for{" "}
              <span className="block text-cyan-200">
                Emotional Wellbeing
              </span>
              & Personal Growth
            </h1>

            {/* Divider */}
            <div className="w-24 h-1 rounded-full bg-cyan-200 my-6 sm:my-8" />

            {/* Description */}
            <p className="text-cyan-50 text-base sm:text-lg md:text-xl leading-relaxed sm:leading-9 max-w-xl">
              At <span className="font-semibold text-white">Psychobeings</span>,
              we provide compassionate counselling, evidence-based therapy,
              mindfulness practices, and emotional support to help individuals
              overcome anxiety, stress, burnout, relationship concerns and life
              transitions.
            </p>

            <p className="text-cyan-100 mt-4 sm:mt-6 text-base sm:text-lg max-w-xl leading-relaxed sm:leading-8">
              Sessions are available in
              <span className="font-semibold text-white"> English </span>
              and
              <span className="font-semibold text-white"> Hindi</span>.
              We offer secure online counselling across India along with
              in-person appointments in
              <span className="font-semibold text-white">
                {" "}
                Faridabad, Haryana.
              </span>
            </p>

            {/* Trust Tags */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
              {[
                { Icon: ShieldCheck, text: "Confidential" },
                { Icon: Monitor, text: "Online & In-person" },
                { Icon: Star, text: "Trusted Care" },
              ].map((tag, i) => (
                <div key={i} className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-4 sm:px-5 py-2.5 sm:py-3 text-cyan-50 text-sm">
                  <tag.Icon size={18} />
                  {tag.text}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 sm:gap-5 mt-10 sm:mt-12">
              <Link to="/booking">
                <button className="group bg-white text-teal-800 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3 text-sm sm:text-base">
                  Book Appointment
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </button>
              </Link>
              <Link to="/services">
                <button className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white px-6 sm:px-8 py-3.5 sm:py-4 font-medium hover:bg-white hover:text-teal-800 transition-all duration-300 text-sm sm:text-base">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE COLUMN (IMAGE + TOP/BOTTOM CARDS) */}
          <div className="lg:col-span-5 flex flex-col items-center gap-5 mt-8 lg:mt-0">

            {/* TOP RIGHT CARD: Holistic Care
            <div className="w-full max-w-[480px] bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:px-6 sm:py-4 flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-teal-100 flex items-center justify-center shrink-0">
                <HeartHandshake size={22} className="text-teal-700" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-sm sm:text-base">
                  Holistic Care
                </h4>
                <p className="text-xs sm:text-sm text-gray-500">
                  Mind • Body • Emotions
                </p>
              </div>
            </div> */}

            {/* CENTER IMAGE CONTAINER */}
            <div className="relative w-full max-w-[480px] floating">
              <div className="absolute w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-white/10 blur-[100px] pointer-events-none left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" />
              
              <div className="rounded-[32px] sm:rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 p-3 sm:p-4 shadow-[0_40px_80px_rgba(0,0,0,0.30)]">
                <img
                  src={ImageElementUpdated}
                  alt="Therapy session illustration"
                  className="rounded-[24px] sm:rounded-[32px] w-full object-cover"
                />
              </div>

              {/* Decorative Dots */}
              <div className="absolute -top-3 right-5 w-5 h-5 rounded-full bg-cyan-300" />
              <div className="absolute -bottom-2 left-2 w-4 h-4 rounded-full bg-white" />
            </div>

            {/* BOTTOM RIGHT CARD: Ratings & Support Stats
            <div className="w-full max-w-[480px] bg-white rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:px-6 sm:py-4 flex items-center justify-around">
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-teal-700">
                  500+
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Lives Supported
                </p>
              </div>

              <div className="w-px h-10 sm:h-12 bg-gray-200" />

              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-yellow-500">
                  ★ 5
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm">
                  Client Rating
                </p>
              </div>
            </div> */}

          </div>

        </div>

        {/* Bottom Trust Strip */}
        <div className="mt-16 lg:mt-24">
          <div className="rounded-[24px] sm:rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl p-6 sm:p-8 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
              {[
                { Icon: ShieldCheck, title: "Confidential", text: "Your privacy and emotional safety are always our priority." },
                { Icon: HeartHandshake, title: "Compassionate Support", text: "A warm, non-judgmental environment where healing begins." },
                { Icon: Monitor, title: "Online & In-Person", text: "Flexible therapy sessions across Online & In-Person." },
                { Icon: Star, title: "Evidence-Based Care", text: "Professional counselling using proven therapeutic approaches." },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-center mb-3">
                    <item.Icon className="text-cyan-200" size={30} />
                  </div>
                  <h3 className="text-white font-semibold text-base sm:text-lg">
                    {item.title}
                  </h3>
                  <p className="text-cyan-100 mt-2 text-xs sm:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero1;