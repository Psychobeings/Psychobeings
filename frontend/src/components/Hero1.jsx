import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ShieldCheck,
  HeartHandshake,
  Monitor,
  Star,
  Sparkles,
  Calendar,
} from "lucide-react";

import ImageElementUpdated from "../assets/ImageElementUpdated.png";

function Hero1() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-emerald-50/30 to-slate-50 pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative Background Glows */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* HERO LEFT TEXT */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-[#0a7272] text-xs font-semibold tracking-wide uppercase shadow-2xs border border-teal-200">
              <Sparkles className="w-4 h-4 text-[#0a7272]" />
              <span>Compassionate • Confidential • Evidence-Based</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-serif">
              Compassionate Therapy for{" "}
              <span className="text-[#0a7272]">
                Emotional Wellbeing
              </span>{" "}
              & Personal Growth
            </h1>

            {/* Main Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
              At <span className="font-semibold text-slate-800">Psychobeings</span>,
              our licensed psychologists and therapists partner with you through
              anxiety, stress, burnout, relationship concerns, and life transitions.
            </p>

            {/* Secondary Language & Location Info */}
            <p className="text-sm sm:text-base text-slate-500 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Sessions available in <span className="font-medium text-slate-700">English</span> and{" "}
              <span className="font-medium text-slate-700">Hindi</span>. Secure online counselling across India and in-person appointments in{" "}
              <span className="font-medium text-slate-700">Faridabad, Haryana</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0a7272] px-7 py-3.5 text-white font-medium text-base shadow-md hover:bg-[#0d5c5e] hover:shadow-lg transition-all duration-200"
              >
                <Calendar className="w-5 h-5 text-emerald-200" />
                <span>Book Appointment</span>
              </Link>

              <Link
                to="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-slate-700 font-medium text-base border border-slate-200 hover:bg-slate-100 hover:border-teal-200 transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Key Trust Metrics */}
            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-teal-100/80 max-w-lg mx-auto lg:mx-0">
              <div>
                <p className="text-2xl font-bold text-slate-900">500+</p>
                <p className="text-xs text-slate-500 font-medium">Lives Supported</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">4.9 ★</p>
                <p className="text-xs text-slate-500 font-medium">Average Rating</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-slate-900">100%</p>
                <p className="text-xs text-slate-500 font-medium">Confidential Care</p>
              </div>
            </div>
          </div>

          {/* HERO RIGHT IMAGE & CARDS */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src={ImageElementUpdated}
                  alt="Therapy session at Psychobeings"
                  className="w-full h-80 sm:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">
                    Faridabad Clinic & Virtual
                  </span>
                  <h3 className="text-lg font-bold">
                    Personalized therapy tailored to your unique journey
                  </h3>
                </div>
              </div>

              {/* Floating Badge 1 - Bottom Left */}
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#0a7272]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Licensed Specialists</p>
                  <p className="text-[11px] text-slate-500">Confidential & Evidence-Based</p>
                </div>
              </div>

              {/* Floating Badge 2 - Top Right */}
              <div className="absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="text-xs font-bold text-slate-800">4.9/5 Client Rating</span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM TRUST STRIP */}
        <div className="mt-16 lg:mt-24 border-t border-teal-100/80 pt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                Icon: ShieldCheck,
                title: "100% Confidential",
                text: "Your privacy and emotional safety are always our top priority.",
              },
              {
                Icon: HeartHandshake,
                title: "Compassionate Support",
                text: "A warm, non-judgmental environment where healing begins.",
              },
              {
                Icon: Monitor,
                title: "Online & In-Person",
                text: "Flexible sessions available virtually across India or in Faridabad.",
              },
              {
                Icon: Star,
                title: "Evidence-Based Care",
                text: "Professional counselling using scientifically proven approaches.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-teal-100/60 flex items-center justify-center shrink-0 text-[#0a7272]">
                  <item.Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold text-base">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mt-1 text-xs sm:text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero1;