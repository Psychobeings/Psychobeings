import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Heart, Shield, UserCheck, Calendar, Sparkles, ArrowRight, CheckCircle2, 
  MessageSquare, Star, Award, Clock, Activity, Check, Brain, Smile
} from 'lucide-react';

import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import FAQ from '../components/FAQ';
import FeatureSection from '../components/FeatureSection';
import Hero1 from '../components/Hero1';
import LanguageSupport from '../components/LanguageSupport';
import FoundersNote from '../components/FoundersNote';
import TherapyApproach from '../components/TherapyApproach';

import { SERVICES, CARE_PACKAGES, THERAPISTS, TESTIMONIALS } from '../data/mockData';

const homeSections = [
  Hero, 
  WhatWeDo, 
  LanguageSupport, 
  FeatureSection, 
  FoundersNote, 
  TherapyApproach, 
  FAQ
];

const Home = () => {
  const [assessmentStep, setAssessmentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const assessmentQuestions = [
    {
      title: "How have you been feeling lately?",
      key: "feeling",
      options: [
        { label: "Overwhelmed or anxious", rec: "Individual Therapy" },
        { label: "Stuck in relationship conflicts", rec: "Couples Therapy" },
        { label: "Burned out and exhausted", rec: "Mindfulness & Stress Resilience" },
        { label: "Seeking general guidance & clarity", rec: "Starter Clarity Bundle" }
      ]
    },
    {
      title: "What is your main wellness goal?",
      key: "goal",
      options: [
        { label: "Reduce anxiety & overthinking" },
        { label: "Improve communication with loved ones" },
        { label: "Build healthy coping mechanisms" },
        { label: "Restore sleep & inner calm" }
      ]
    },
    {
      title: "What consultation format do you prefer?",
      key: "format",
      options: [
        { label: "Secure Video Teletherapy (Home)" },
        { label: "In-Person Clinic Visit (Faridabad)" },
        { label: "Flexible Hybrid (Both)" }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FBFEFD] via-[#F8FCFB] to-[#F2F8F7] text-[#1f3a3d]">
      {/* Top Banner Component */}
      <Hero1 />

      {/* Dynamic Landing Page Content */}
      <div className="bg-slate-50 text-slate-800 font-sans">
        
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-teal-50/80 via-emerald-50/30 to-slate-50 pt-12 pb-20 lg:pt-20 lg:pb-28">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-teal-200/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-emerald-200/30 blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Hero Left Text */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-6 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 text-[#0a7272] text-xs font-semibold tracking-wide uppercase shadow-2xs border border-teal-200">
                  <Sparkles className="w-4 h-4 text-[#0a7272]" />
                  <span>Compassionate & Evidence-Based Mental Health Practice</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight font-serif">
                  A safe space to heal, grow, and rediscover your <span className="text-[#0a7272] underline decoration-teal-300 decoration-wavy underline-offset-8">inner peace.</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans">
                  At Psychobeings, our licensed psychologists and therapists partner with you through anxiety, relationship challenges, and life transitions. Professional care, on your terms.
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                  <Link
                    to="/booking"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0a7272] px-7 py-3.5 text-white font-medium text-base shadow-md hover:bg-[#0d5c5e] hover:shadow-lg transition-all duration-200"
                  >
                    <Calendar className="w-5 h-5 text-emerald-200" />
                    <span>Book Initial Consultation</span>
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
                    <p className="text-2xl font-bold text-slate-900">12,000+</p>
                    <p className="text-xs text-slate-500 font-medium">Care Hours Delivered</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">4.9 ★</p>
                    <p className="text-xs text-slate-500 font-medium">Average Client Rating</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">100%</p>
                    <p className="text-xs text-slate-500 font-medium">Confidential & Encrypted</p>
                  </div>
                </div>
              </motion.div>

              {/* Hero Right Card / Image Stack */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                    <img
                      src="https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?auto=format&fit=crop&q=80&w=800"
                      alt="Therapist in session at Psychobeings"
                      className="w-full h-80 sm:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">San Francisco Clinic & Virtual</span>
                      <h3 className="text-lg font-bold">Personalized Therapy tailored to your unique rhythm</h3>
                    </div>
                  </div>

                  {/* Floating Badge 1 */}
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-3 hidden sm:flex">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#0a7272]">
                      <Shield className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-slate-900">Licensed Specialists</p>
                      <p className="text-[11px] text-slate-500">Psy.D, LMFT, MD & LCSW</p>
                    </div>
                  </div>

                  {/* Floating Badge 2 */}
                  <div className="absolute -top-4 -right-4 bg-white px-4 py-2.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-bold text-slate-800">4.9/5 Client Satisfaction</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* WHY PSYCHOBEINGS */}
        <section className="py-16 bg-white border-y border-slate-200/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">Our Care Philosophy</h2>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">Why individuals & families trust Psychobeings</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-teal-100 text-[#0a7272] flex items-center justify-center mb-4">
                  <UserCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Matched Licensed Experts</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We take time to match you with a clinical psychologist or family therapist specialized in your specific needs, values, and life goals.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0a7272] flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">100% Confidential & Secure</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Your privacy is paramount. All in-person consultations and online video teletherapy adhere strictly to HIPAA compliance protocols.
                </p>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200/80 hover:border-teal-300 transition-all">
                <div className="w-12 h-12 rounded-xl bg-cyan-100 text-[#0a7272] flex items-center justify-center mb-4">
                  <Activity className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">Structured Care Packages</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Choose transparent session bundles or single consultations designed for sustained momentum without hidden fees.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED SERVICES SPOTLIGHT */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">Clinical Services</h2>
                <p className="text-2xl sm:text-3xl font-bold text-slate-900">Tailored support for every chapter of life</p>
              </div>
              <Link 
                to="/services" 
                className="mt-4 md:mt-0 text-sm font-semibold text-[#0a7272] hover:text-[#0d5c5e] flex items-center gap-1"
              >
                View all services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.slice(0, 3).map((svc) => (
                <div key={svc.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-teal-50 text-[#0a7272] border border-teal-100">
                        {svc.category}
                      </span>
                      <span className="text-sm font-bold text-slate-900">${svc.price} <span className="text-xs font-normal text-slate-500">/ session</span></span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2">{svc.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{svc.shortDesc}</p>

                    <ul className="space-y-2 mb-6">
                      {svc.benefits.slice(0, 3).map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-[#0a7272] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{svc.durationMinutes} minutes</span>
                    <Link
                      to={`/booking?service=${svc.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0a7272] hover:underline"
                    >
                      Book This <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* QUICK INTERACTIVE SELF-ASSESSMENT QUIZ */}
        <section className="py-16 bg-gradient-to-r from-[#084e4e] to-[#0a7272] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <span className="px-3 py-1 rounded-full bg-white/10 text-emerald-200 text-xs font-semibold uppercase tracking-wider">
                Interactive Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold mt-2">Not sure where to begin?</h2>
              <p className="text-emerald-100/90 text-sm mt-1">Answer 3 quick questions to discover your recommended care route.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 shadow-xl">
              {assessmentStep < assessmentQuestions.length ? (
                <div>
                  <div className="flex items-center justify-between mb-4 text-xs text-emerald-200 font-semibold">
                    <span>Question {assessmentStep + 1} of {assessmentQuestions.length}</span>
                    <span>{Math.round(((assessmentStep + 1) / assessmentQuestions.length) * 100)}% Complete</span>
                  </div>

                  {/* Progress bar */}
                  <div className="w-full bg-black/20 h-1.5 rounded-full mb-6 overflow-hidden">
                    <div 
                      className="bg-emerald-300 h-full transition-all duration-300"
                      style={{ width: `${((assessmentStep + 1) / assessmentQuestions.length) * 100}%` }}
                    />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-white mb-6">
                    {assessmentQuestions[assessmentStep].title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {assessmentQuestions[assessmentStep].options.map((opt, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setAnswers({ ...answers, [assessmentQuestions[assessmentStep].key]: opt.label });
                          setAssessmentStep(assessmentStep + 1);
                        }}
                        className="p-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-left text-sm font-medium transition-all flex items-center justify-between group"
                      >
                        <span>{opt.label}</span>
                        <ArrowRight className="w-4 h-4 text-emerald-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 space-y-4">
                  <div className="w-12 h-12 bg-emerald-400/20 text-emerald-300 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">We Recommend Individual Therapy or Clarity Bundle</h3>
                  <p className="text-emerald-100 text-sm max-w-lg mx-auto">
                    Based on your responses, starting with a 1-on-1 consultation with one of our senior therapists will give you tailored strategies right away.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      to="/booking?service=individual-therapy"
                      className="bg-white text-[#0a7272] px-6 py-3 rounded-full font-bold text-sm hover:bg-emerald-50 transition"
                    >
                      Book Recommended Session
                    </Link>
                    <button
                      onClick={() => {
                        setAssessmentStep(0);
                        setAnswers({});
                      }}
                      className="text-xs text-emerald-200 underline hover:text-white"
                    >
                      Retake Assessment
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FEATURED THERAPISTS */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">Our Clinical Team</h2>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">Meet our compassionate practitioners</p>
              <p className="text-slate-600 text-sm mt-2">Every clinician at Psychobeings is fully licensed and vetted.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {THERAPISTS.map((therapist) => (
                <div key={therapist.id} className="bg-slate-50 rounded-2xl overflow-hidden border border-slate-200/80 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <img
                      src={therapist.avatar}
                      alt={therapist.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-5">
                      <h3 className="font-bold text-base text-slate-900">{therapist.name}</h3>
                      <p className="text-xs text-[#0a7272] font-semibold mb-2">{therapist.title}</p>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-3">{therapist.bio}</p>
                      <div className="flex flex-wrap gap-1">
                        {therapist.specialties.slice(0, 2).map((s, i) => (
                          <span key={i} className="text-[10px] bg-teal-100/70 text-teal-800 px-2 py-0.5 rounded font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-slate-200/60">
                    <Link
                      to={`/booking?therapist=${therapist.id}`}
                      className="w-full block text-center py-2 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-[#0a7272] hover:text-white hover:border-[#0a7272] transition-colors"
                    >
                      Book with {therapist.name.split(' ')[1]}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-slate-50 border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">Real Transformations</h2>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">What our clients share about their journey</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1 text-amber-400 mb-3">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-slate-700 italic leading-relaxed mb-4">"{item.comment}"</p>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <img
                      src={item.avatar}
                      alt={item.clientName}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{item.clientName}</h4>
                      <p className="text-[11px] text-slate-500">{item.role} • <span className="text-[#0a7272]">{item.serviceUsed}</span></p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-slate-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <h2 className="text-2xl sm:text-4xl font-serif font-bold mb-4">
                Ready to take the first step toward mental clarity?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
                Confidential, non-judgmental therapy is just a click away. Book your initial consultation today or reach out with any questions.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/booking"
                  className="bg-[#0a7272] hover:bg-[#0d5c5e] text-white px-8 py-3.5 rounded-full font-bold text-base shadow-md transition"
                >
                  Schedule Appointment Now
                </Link>
                <Link
                  to="/contact"
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 px-6 py-3.5 rounded-full font-medium text-base transition"
                >
                  Contact Our Team
                </Link>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Component Sections Stack */}
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-10 lg:space-y-14">
          {homeSections.map((Section, index) => (
            <section
              key={index}
              className="overflow-hidden rounded-[28px] bg-white p-6 sm:p-8 lg:p-10 shadow-lg border border-teal-50"
            >
              <Section />
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;