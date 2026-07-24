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

        .playfair{
          font-family:'Playfair Display',serif;
        }

        @keyframes float{
          0%{transform:translateY(0px);}
          50%{transform:translateY(-12px);}
          100%{transform:translateY(0px);}
        }

        .floating{
          animation:float 5s ease-in-out infinite;
        }
      `}</style>

      {/* Decorative Background */}
      <div className="absolute -top-32 -left-32 w-[450px] h-[450px] rounded-full bg-cyan-300/10 blur-[130px]" />
      <div className="absolute top-40 right-0 w-[350px] h-[350px] rounded-full bg-white/10 blur-[120px]" />
      <div className="absolute bottom-0 left-1/2 w-[550px] h-[550px] rounded-full bg-cyan-200/10 blur-[180px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20">

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-5 py-2 text-cyan-50 text-sm mb-8">

              <HeartHandshake size={16} />

              Compassionate • Confidential • Evidence-Based

            </div>

            {/* Heading */}

            <h1 className="playfair text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.1] text-white max-w-2xl">

              Compassionate Therapy for

              <span className="block text-cyan-200">

                Emotional Wellbeing

              </span>

              & Personal Growth

            </h1>

            {/* Divider */}

            <div className="w-24 h-1 rounded-full bg-cyan-200 mt-8 mb-8"></div>

            {/* Description */}

            <p className="text-cyan-50 text-lg md:text-xl leading-9 max-w-xl">

              At <span className="font-semibold text-white">Psychobeings</span>,
              we provide compassionate counselling, evidence-based therapy,
              mindfulness practices, and emotional support to help individuals
              overcome anxiety, stress, burnout, relationship concerns and life
              transitions.

            </p>

            <p className="text-cyan-100 mt-6 text-lg max-w-xl leading-8">

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

            {/* Trust Icons */}

            <div className="flex flex-wrap gap-4 mt-10">

              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-cyan-50">

                <ShieldCheck size={18} />

                Confidential

              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-cyan-50">

                <Monitor size={18} />

                Online & In-person

              </div>

              <div className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-3 text-cyan-50">

                <Star size={18} />

                Trusted Care

              </div>

            </div>

            {/* CTA */}

            <div className="flex flex-wrap gap-5 mt-12">

              <Link to="/booking">

                <button className="group bg-white text-teal-800 px-8 py-4 rounded-full font-semibold shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-3">

                  Book Appointment

                  <ArrowRight
                    size={18}
                    className="group-hover:translate-x-1 transition"
                  />

                </button>

              </Link>

              <Link to="/services">

                <button className="rounded-full border border-white/30 bg-white/10 backdrop-blur-md text-white px-8 py-4 font-medium hover:bg-white hover:text-teal-800 transition-all duration-300">

                  Explore Services

                </button>

              </Link>

            </div>
                        {/* Statistics */}

            <div className="grid grid-cols-3 gap-5 mt-16 max-w-2xl">

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl hover:-translate-y-2 transition-all duration-300">

                <h2 className="playfair text-4xl text-white font-bold">
                  500+
                </h2>

                <p className="text-cyan-100 mt-3 text-sm leading-6">
                  Successful Sessions Conducted
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl hover:-translate-y-2 transition-all duration-300">

                <h2 className="playfair text-4xl text-white font-bold">
                  5.0★
                </h2>

                <p className="text-cyan-100 mt-3 text-sm leading-6">
                  Client Satisfaction Rating
                </p>

              </div>

              <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 shadow-xl hover:-translate-y-2 transition-all duration-300">

                <h2 className="playfair text-4xl text-white font-bold">
                  100%
                </h2>

                <p className="text-cyan-100 mt-3 text-sm leading-6">
                  Confidential Care
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative flex justify-center lg:justify-end">

            {/* Background Glow */}

            <div className="absolute w-[520px] h-[520px] rounded-full bg-white/10 blur-[120px]" />

            {/* Image Container */}

            <div className="relative floating">

              <div className="rounded-[40px] bg-white/10 backdrop-blur-xl border border-white/20 p-4 shadow-[0_40px_80px_rgba(0,0,0,0.30)]">

                <img
                  src={ImageElementUpdated}
                  alt="Psychological Counselling"
                  className="rounded-[32px] w-full max-w-[520px] object-cover"
                />

              </div>

              {/* Floating Card 1 */}

              <div className="absolute -left-8 top-12 bg-white rounded-3xl shadow-2xl px-6 py-5 hidden lg:block">

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-2xl bg-teal-100 flex items-center justify-center">

                    <HeartHandshake
                      size={24}
                      className="text-teal-700"
                    />

                  </div>

                  <div>

                    <h4 className="font-semibold text-gray-800">
                      Holistic Care
                    </h4>

                    <p className="text-sm text-gray-500">
                      Mind • Body • Emotions
                    </p>

                  </div>

                </div>

              </div>

              {/* Floating Card 2 */}

              <div className="absolute -right-8 bottom-10 bg-white rounded-3xl shadow-2xl px-6 py-5 hidden lg:block">

                <div className="flex items-center gap-4">

                  <div>

                    <h3 className="text-3xl font-bold text-teal-700">
                      500+
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Lives Supported
                    </p>

                  </div>

                  <div className="w-px h-12 bg-gray-200" />

                  <div>

                    <h3 className="text-3xl font-bold text-yellow-500">
                      ★5
                    </h3>

                    <p className="text-gray-500 text-sm">
                      Client Rating
                    </p>

                  </div>

                </div>

              </div>

              {/* Decorative Dot */}

              <div className="absolute -top-5 right-10 w-6 h-6 rounded-full bg-cyan-300"></div>

              <div className="absolute bottom-0 left-0 w-5 h-5 rounded-full bg-white"></div>

            </div>

          </div>

        </div>
                {/* Bottom Trust Strip */}

        <div className="mt-24">

          <div className="rounded-[32px] border border-white/15 bg-white/10 backdrop-blur-xl px-8 py-8 shadow-xl">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">

              <div>

                <div className="flex justify-center mb-3">

                  <ShieldCheck className="text-cyan-200" size={30} />

                </div>

                <h3 className="text-white font-semibold text-lg">
                  Confidential
                </h3>

                <p className="text-cyan-100 mt-2 text-sm leading-6">
                  Your privacy and emotional safety are always our priority.
                </p>

              </div>

              <div>

                <div className="flex justify-center mb-3">

                  <HeartHandshake className="text-cyan-200" size={30} />

                </div>

                <h3 className="text-white font-semibold text-lg">
                  Compassionate Support
                </h3>

                <p className="text-cyan-100 mt-2 text-sm leading-6">
                  A warm, non-judgmental environment where healing begins.
                </p>

              </div>

              <div>

                <div className="flex justify-center mb-3">

                  <Monitor className="text-cyan-200" size={30} />

                </div>

                <h3 className="text-white font-semibold text-lg">
                  Online & In-Person
                </h3>

                <p className="text-cyan-100 mt-2 text-sm leading-6">
                  Flexible therapy sessions across India or at our clinic.
                </p>

              </div>

              <div>

                <div className="flex justify-center mb-3">

                  <Star className="text-cyan-200" size={30} />

                </div>

                <h3 className="text-white font-semibold text-lg">
                  Evidence-Based Care
                </h3>

                <p className="text-cyan-100 mt-2 text-sm leading-6">
                  Professional counselling using proven therapeutic approaches.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Hero1;