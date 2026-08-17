import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Building2,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Globe2,
  CalendarHeart,
  Flame,
  Check,
  Star
} from 'lucide-react';

import { therapyOptions, programOptions, trustPoints, testimonials } from '../data/servicesData';

const Services = () => {
  const [currencyRegion, setCurrencyRegion] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f9f8] text-[#122a2c] font-sans selection:bg-[#0a7272] selection:text-white pb-24 lg:pb-16">
      {/* Dynamic Background Accents */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-teal-200/40 blur-[120px]" />
        <div className="absolute top-[40%] right-[-5%] w-[450px] h-[450px] rounded-full bg-emerald-100/50 blur-[100px]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-white/80 px-4 py-2 text-xs sm:text-sm font-medium text-[#0a7272] shadow-sm backdrop-blur-md">
              <Sparkles size={16} className="text-teal-600 animate-pulse" />
              Professional Therapy & Wellbeing Services
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold tracking-tight text-[#083c3e] sm:text-5xl lg:text-6xl lg:leading-[1.15]">
              Grounded care for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0a7272] to-[#0f8b8d]">healing, clarity</span> & emotional balance.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#455a5c]">
              Structured psychological support for individuals, young adults, and organizations.
              Available locally in Faridabad and virtually across India and worldwide.
            </p>

            {/* Glassmorphic Currency Filter Bar */}
            <div className="mt-8 rounded-2xl border border-white/60 bg-white/70 p-3 shadow-sm backdrop-blur-xl inline-flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a7272] px-2">
                Display Currency:
              </span>
              <div className="flex bg-[#e8f4f3] p-1 rounded-xl w-full sm:w-auto">
                {[
                  { key: 'ALL', label: 'Both (INR & USD)' },
                  { key: 'INR', label: '🇮🇳 India (INR ₹)' },
                  { key: 'USD', label: '🌐 International (USD $)' }
                ].map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setCurrencyRegion(key)}
                    aria-pressed={currencyRegion === key}
                    className={`px-3.5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-200 ${
                      currencyRegion === key
                        ? 'bg-[#0a7272] text-white shadow-md'
                        : 'text-[#455a5c] hover:text-[#0a7272]'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#0a7272] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#075354] hover:shadow-lg hover:shadow-teal-700/20 hover:-translate-y-0.5"
              >
                Book Consultation
                <ArrowRight size={18} />
              </Link>

              <a
                href="#therapy"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a7272]/30 bg-white/80 px-8 py-4 text-sm font-semibold text-[#0a7272] transition-all duration-300 hover:bg-white hover:border-[#0a7272] backdrop-blur-sm"
              >
                Explore Offerings
              </a>
            </div>
          </div>

          {/* Quick Info Glass Card */}
          <div className="grid gap-4">
            <div className="rounded-[2.5rem] bg-gradient-to-br from-[#0a7272] via-[#096263] to-[#064e4b] p-8 text-white shadow-2xl relative overflow-hidden border border-white/10">
              <div className="absolute top-0 right-0 -mr-10 -mt-10 w-44 h-44 bg-teal-400/20 rounded-full blur-3xl pointer-events-none" />
              
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-teal-200">
                Format & Availability
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10 transition duration-300 hover:bg-white/15">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-teal-400/20 p-2 text-teal-200">
                      <Globe2 size={20} />
                    </div>
                    <p className="font-semibold text-base">International & Pan-India Online</p>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-white/85">
                    Secure Video Sessions in USD ($) and INR (₹) across time zones.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10 transition duration-300 hover:bg-white/15">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-teal-400/20 p-2 text-teal-200">
                      <MapPin size={20} />
                    </div>
                    <p className="font-semibold text-base">In-Person Practice</p>
                  </div>
                  <p className="mt-2 text-xs leading-6 text-white/85">
                    Private clinic consultations available in Faridabad, Haryana.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 text-[#0a7272]">
                  <ShieldCheck size={18} />
                  <p className="text-sm font-bold">Strict Confidentiality</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#586e70]">
                  Safe, non-judgmental space governed by clinical ethics.
                </p>
              </div>

              <div className="rounded-3xl border border-white/80 bg-white/80 p-5 shadow-sm backdrop-blur-md">
                <div className="flex items-center gap-2 text-[#0a7272]">
                  <CalendarHeart size={18} />
                  <p className="text-sm font-bold">Flexible Scheduling</p>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-[#586e70]">
                  Easy reschedule policy and evening/weekend availability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA */}
      <Link
        to="/booking"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#0a7272] to-[#0d5c5e] px-7 py-4 text-sm font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-teal-900/30 ring-4 ring-white/50"
      >
        <MessageCircle size={18} />
        Book Consultation
      </Link>

      {/* Therapy Section */}
      <section id="therapy" className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272] bg-[#e6f4f3] border border-teal-500/20 px-3.5 py-1.5 rounded-full">
              Clinical Therapy
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#083c3e] sm:text-4xl">
              Personalized Therapeutic Support
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#455a5c]">
              Evidence-based modalities designed to meet you where you are, fostering self-awareness, resilience, and emotional equilibrium.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {therapyOptions.map((item) => (
              <div
                key={item.id}
                className="rounded-[2.5rem] border border-white/80 bg-white/90 p-6 sm:p-8 lg:p-10 shadow-xl shadow-teal-900/5 backdrop-blur-xl transition duration-300"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-[#e6f4f3] p-3.5 text-[#0a7272]">
                          <HeartHandshake size={26} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#083c3e]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-base leading-relaxed text-[#455a5c]">
                        {item.description}
                      </p>

                      <div className="mt-6 rounded-2xl bg-[#f2f8f7] p-6 border border-teal-500/10">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272]">
                          Key Focus Areas & Concerns
                        </h4>
                        <div className="mt-4 grid gap-3 sm:grid-cols-2">
                          {item.concerns.map((concern) => (
                            <div
                              key={concern}
                              className="flex items-center gap-2.5 text-sm font-medium text-[#2a4143]"
                            >
                              <CheckCircle2
                                size={16}
                                className="shrink-0 text-[#0a7272]"
                              />
                              <span>{concern}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <Link
                        to={item.buttonTo}
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a7272] px-7 py-3 text-sm font-bold text-[#0a7272] transition-all duration-300 hover:bg-[#0a7272] hover:text-white"
                      >
                        {item.buttonLabel}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Dynamic Pricing Cards */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    {item.sessionCards.map((card) => (
                      <div
                        key={card.title}
                        className={`relative rounded-[2rem] p-6 transition-all duration-300 flex flex-col justify-between h-full ${
                          card.isPopular
                            ? 'bg-gradient-to-br from-[#0a7272] via-[#096263] to-[#064e4b] text-white shadow-xl shadow-teal-900/20 ring-2 ring-teal-500/50 scale-[1.02]'
                            : 'bg-white border border-[#dceeee] text-[#122a2c] hover:border-teal-500/40 hover:shadow-lg'
                        }`}
                      >
                        {card.isPopular && (
                          <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-amber-400 px-3.5 py-1 text-xs font-extrabold text-slate-900 shadow-md">
                            <Flame size={13} className="text-amber-950 fill-amber-950" />
                            {card.popularBadge}
                          </div>
                        )}

                        <div>
                          <p className={`text-sm font-extrabold tracking-wide uppercase ${card.isPopular ? 'text-teal-200' : 'text-[#0a7272]'}`}>
                            {card.title}
                          </p>

                          <div className="mt-4 space-y-1">
                            {(currencyRegion === 'ALL' || currencyRegion === 'INR') && (
                              <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-black tracking-tight">{card.priceINR}</span>
                                <span className={`text-xs font-semibold ${card.isPopular ? 'text-teal-200' : 'text-[#668082]'}`}>
                                  (India / INR)
                                </span>
                              </div>
                            )}

                            {(currencyRegion === 'ALL' || currencyRegion === 'USD') && (
                              <div className="flex items-baseline gap-2">
                                <span className={`text-2xl font-bold ${card.isPopular ? 'text-teal-100' : 'text-[#083c3e]'}`}>
                                  {card.priceUSD}
                                </span>
                                <span className={`text-xs font-semibold ${card.isPopular ? 'text-teal-200' : 'text-[#668082]'}`}>
                                  (International / USD)
                                </span>
                              </div>
                            )}

                            <p className={`text-xs mt-1 font-medium ${card.isPopular ? 'text-teal-100/80' : 'text-[#668082]'}`}>
                              {card.unit}
                            </p>
                          </div>

                          <p className={`mt-4 text-xs leading-relaxed ${card.isPopular ? 'text-teal-50/90' : 'text-[#455a5c]'}`}>
                            {card.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-current/10">
                          <Link
                            to={card.buttonTo}
                            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition-all duration-200 ${
                              card.isPopular
                                ? 'bg-white text-[#0a7272] hover:bg-teal-50 shadow-md'
                                : 'bg-[#0a7272] text-white hover:bg-[#085a5a]'
                            }`}
                          >
                            {card.buttonLabel}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials Section */}
      <section className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2.5rem] bg-gradient-to-br from-[#083c3e] to-[#042728] p-8 sm:p-10 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
            
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3 text-teal-300 border border-white/10">
                  <ShieldCheck size={26} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold">Client-Centered Care</h2>
              </div>

              <div className="mt-8 space-y-4">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3.5 rounded-2xl bg-white/5 p-4.5 text-sm leading-relaxed text-teal-50 border border-white/10 backdrop-blur-sm"
                  >
                    <CheckCircle2 size={18} className="text-teal-300 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[2.5rem] border border-white/80 bg-white/90 p-8 sm:p-10 shadow-xl shadow-teal-900/5 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-amber-400 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#083c3e]">
                Client Experiences
              </h2>
              <p className="mt-1 text-sm text-[#586e70]">
                Reflections from individuals supported across India and internationally.
              </p>

              <div className="mt-6 space-y-4">
                {testimonials.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-2xl bg-[#f2f8f7] p-5 border border-teal-500/10"
                  >
                    <p className="text-sm leading-relaxed text-[#2a4143] italic font-medium">
                      “{item.quote}”
                    </p>
                    <div className="mt-3 flex items-center justify-between text-xs">
                      <span className="font-extrabold text-[#0a7272]">{item.name}</span>
                      <span className="text-[#668082] font-semibold">{item.location}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;