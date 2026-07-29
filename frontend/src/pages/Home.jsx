import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Heart, Shield, UserCheck, Calendar, Sparkles, ArrowRight, CheckCircle2, 
  MessageSquare, Star, Award, Clock, Activity, Check, Brain, Smile,
  ChevronDown, HelpCircle, Video, HeartHandshake, Stethoscope
} from 'lucide-react';

import Hero from '../components/Hero';
import WhatWeDo from '../components/WhatWeDo';
import FAQ from '../components/FAQ';
import FeatureSection from '../components/FeatureSection';
import Hero1 from '../components/Hero1';
import LanguageSupport from '../components/LanguageSupport';
import FoundersNote from '../components/FoundersNote';
import TherapyApproach from '../components/TherapyApproach';

// Mock Data Definitions
export const THERAPISTS = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance, Psy.D.',
    title: 'Senior Clinical Psychologist',
    qualifications: 'Psy.D. Clinical Psychology, Stanford University',
    experienceYears: 12,
    specialties: ['Anxiety & Depression', 'Cognitive Behavioral Therapy (CBT)', 'Stress Management'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Vance specializes in helping high-stress professionals and adults navigate anxiety, life transitions, and self-doubt using evidence-based cognitive behavioral strategies.',
    rating: 4.9,
    reviewCount: 148,
    availableDays: ['Monday', 'Wednesday', 'Friday'],
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen, LMFT',
    title: 'Licensed Marriage & Family Therapist',
    qualifications: 'M.S. Counseling, Northwestern University',
    experienceYears: 9,
    specialties: ['Couples Counseling', 'Relationship Dynamics', 'Conflict Resolution'],
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    bio: 'Marcus focuses on emotional connection, communication breakdowns, and rebuilding trust for couples at every stage of their relationship journey.',
    rating: 4.8,
    reviewCount: 112,
    availableDays: ['Tuesday', 'Thursday', 'Saturday'],
  },
  {
    id: 'dr-sarah-jenkins',
    name: 'Dr. Sarah Jenkins, MD',
    title: 'Consultant Psychiatrist',
    qualifications: 'M.D. Psychiatry, Johns Hopkins University',
    experienceYears: 15,
    specialties: ['Psychiatric Evaluation', 'Medication Management', 'Mood Disorders'],
    avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400',
    bio: 'Dr. Jenkins provides holistic psychiatric evaluations and compassionate medication management integrated seamlessly with talk therapy.',
    rating: 5.0,
    reviewCount: 96,
    availableDays: ['Monday', 'Tuesday', 'Thursday'],
  },
  {
    id: 'amara-okafor',
    name: 'Amara Okafor, LCSW',
    title: 'Adolescent & Youth Specialist',
    qualifications: 'M.S.W., Columbia University',
    experienceYears: 7,
    specialties: ['Teen & Youth Therapy', 'Self-Esteem', 'Academic Burnout'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    bio: 'Amara provides a warm, non-judgmental space for teens and young adults working through identity, academic pressures, and emotional regulation.',
    rating: 4.9,
    reviewCount: 84,
    availableDays: ['Wednesday', 'Friday', 'Saturday'],
  },
];

export const SERVICES = [
  {
    id: 'individual-therapy',
    title: 'Individual Psychotherapy',
    category: 'individual',
    shortDesc: 'One-on-one personalized therapy tailored to manage anxiety, depression, and personal growth.',
    fullDesc: 'Our individual therapy sessions offer a safe, confidential environment to explore your thoughts, feelings, and behavioral patterns. Working closely with your therapist, you will develop actionable strategies to navigate emotional difficulties, build resilience, and foster personal healing.',
    durationMinutes: 50,
    price: 120,
    benefits: [
      'Tailored evidence-based treatment plans (CBT, ACT, Mindfulness)',
      'Safe, confidential one-on-one space',
      'Flexible scheduling (In-person or Secure Video)',
      'Comprehensive progress reviews',
    ],
    iconName: 'UserCheck',
  },
  {
    id: 'couples-counseling',
    title: 'Couples & Relationship Therapy',
    category: 'couples',
    shortDesc: 'Rebuild communication, resolve recurring conflict, and deepen your emotional intimacy.',
    fullDesc: 'Designed for partners experiencing communication bottlenecks, trust issues, or transition struggles. Our relationship experts guide you through constructive dialogue techniques and Gottman-inspired methods to repair and strengthen your bond.',
    durationMinutes: 75,
    price: 180,
    benefits: [
      'Guided conflict resolution tools',
      'De-escalation and emotional expression practice',
      'Pre-marital and long-term counseling',
      'Joint & optional individual check-ins',
    ],
    iconName: 'HeartHandshake',
  },
  {
    id: 'adolescent-therapy',
    title: 'Adolescent & Youth Counseling',
    category: 'youth',
    shortDesc: 'Specialized care for teenagers navigating school stress, peer pressure, and self-identity.',
    fullDesc: 'Navigating youth and adolescence comes with unique emotional challenges. We partner with teens and families to support stress management, healthy self-expression, and positive coping mechanisms.',
    durationMinutes: 50,
    price: 110,
    benefits: [
      'Teen-friendly empathetic environment',
      'Parental guidance integration',
      'School & social anxiety management',
      'Emotional regulation toolkits',
    ],
    iconName: 'Sparkles',
  },
  {
    id: 'psychiatric-evaluation',
    title: 'Psychiatric Evaluation & Care',
    category: 'psychiatry',
    shortDesc: 'Comprehensive clinical assessment and personalized medical consultation.',
    fullDesc: 'Conducted by licensed board-certified psychiatrists, this assessment includes biological, psychological, and social evaluations to determine if medication management or medical intervention is recommended.',
    durationMinutes: 60,
    price: 220,
    benefits: [
      'Thorough clinical assessment report',
      'Medication prescribing & monitoring',
      'Integration with talk therapy plan',
      'Regular dosage & wellness check-ins',
    ],
    iconName: 'Stethoscope',
  },
  {
    id: 'mindfulness-wellness',
    title: 'Mindfulness & Stress Resilience',
    category: 'wellness',
    shortDesc: 'Guided biofeedback, breathing practices, and somatic stress release.',
    fullDesc: 'Learn mind-body relaxation skills to regulate nervous system arousal, reduce somatic tension, and prevent workplace burnout through structured mindfulness sessions.',
    durationMinutes: 45,
    price: 90,
    benefits: [
      'Guided breathing & somatic grounding',
      'Workplace burnout recovery protocols',
      'Sleep hygiene improvement plan',
      'Take-home practice audio guides',
    ],
    iconName: 'Brain',
  },
  {
    id: 'teletherapy-online',
    title: 'Online Video Teletherapy',
    category: 'individual',
    shortDesc: 'High-quality encrypted virtual therapy sessions from the comfort of your home.',
    fullDesc: 'Access expert care without commute friction. Our secure HIPAA-compliant video platform allows seamless face-to-face sessions with your chosen therapist anytime.',
    durationMinutes: 50,
    price: 110,
    benefits: [
      'Fully encrypted end-to-end video calls',
      'Zero commute time & hassle-free access',
      'Easy digital session notes & resources',
      'Ideal for busy schedules & remote locations',
    ],
    iconName: 'Video',
  },
];

export const CARE_PACKAGES = [
  {
    id: 'starter-clarity',
    name: 'Starter Clarity Bundle',
    tagline: 'Ideal for tackling an immediate life transition or acute stressor.',
    price: 320,
    originalPrice: 360,
    sessionsCount: 3,
    durationMonths: 1,
    popular: false,
    features: [
      '3 Individual Therapy Sessions (50 mins each)',
      'Initial Clinical Assessment & Strategy Roadmap',
      'Direct messaging with therapist between sessions',
      'Self-guided digital mental health workbook',
    ],
  },
  {
    id: 'holistic-wellness',
    name: 'Holistic Transformation Plan',
    tagline: 'Our most popular comprehensive package for sustained personal growth.',
    price: 630,
    originalPrice: 720,
    sessionsCount: 6,
    durationMonths: 3,
    popular: true,
    features: [
      '6 Individual Therapy Sessions (50 mins each)',
      '1 Complimentary Mindfulness & Stress Session',
      'Customized Anxiety/Depression toolkit PDF',
      'Priority booking & flexible reschedule window',
      'Mid-term progress assessment report',
    ],
  },
  {
    id: 'couples-harmony',
    name: 'Couples Harmony Package',
    tagline: 'A focused 4-step program designed to rebuild connection and trust.',
    price: 650,
    originalPrice: 720,
    sessionsCount: 4,
    durationMonths: 2,
    popular: false,
    features: [
      '4 Couples Counseling Sessions (75 mins each)',
      'Conflict resolution & communication guide',
      '1-on-1 individual check-in session for each partner',
      'Joint home practice assignments',
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    clientName: 'Sophia M.',
    role: 'Product Manager',
    comment: 'Psychobeings transformed my approach to anxiety and workplace burnout. Dr. Vance gave me practical tools that produced real clarity in weeks.',
    rating: 5,
    serviceUsed: 'Individual Psychotherapy',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '2',
    clientName: 'David & Hannah',
    role: 'Married 6 Years',
    comment: 'Marcus helped us unblock communication patterns we had been stuck in for years. The couples package gave us structure and hope.',
    rating: 5,
    serviceUsed: 'Couples Counseling',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&q=80&w=200',
  },
  {
    id: '3',
    clientName: 'Ethan K.',
    role: 'Graduate Student',
    comment: 'Booking online was frictionless, and teletherapy made it possible for me to maintain weekly sessions without messing up my study schedule.',
    rating: 5,
    serviceUsed: 'Online Video Teletherapy',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
];

export const FAQS = [
  {
    q: 'How do I know which therapist or service is right for me?',
    a: 'During your booking process or initial consultation, you can share your primary concerns (e.g., anxiety, relationships, career stress). Our clinical coordinator matches you with a therapist specializing in those exact areas.',
  },
  {
    q: 'Are online teletherapy sessions as effective as in-person visits?',
    a: 'Yes, numerous clinical studies show that encrypted video teletherapy delivers equivalent therapeutic outcomes to in-person sessions, with added convenience and comfort.',
  },
  {
    q: 'What is your cancellation or rescheduling policy?',
    a: 'You can reschedule or cancel any session free of charge up to 24 hours prior to your scheduled appointment through your confirmation link or by calling our support line.',
  },
  {
    q: 'Do you accept health insurance?',
    a: 'We provide itemized superbills for reimbursement through out-of-network benefits. We also accept FSA/HSA cards directly at checkout.',
  },
];

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
  const [openFaq, setOpenFaq] = useState(null);

  const assessmentQuestions = [
    {
      title: "How have you been feeling lately?",
      key: "feeling",
      options: [
        { label: "Overwhelmed or anxious", rec: "Individual Psychotherapy" },
        { label: "Stuck in relationship conflicts", rec: "Couples & Relationship Therapy" },
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

      {/* Main Home Content */}
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
                      <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">In-Clinic & Secure Teletherapy</span>
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

        {/* CLINICAL SERVICES SPOTLIGHT (GENERATED FROM SERVICES DATA) */}
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
              {SERVICES.map((svc) => (
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
                      {svc.benefits.map((b, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <Check className="w-4 h-4 text-[#0a7272] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{svc.durationMinutes} mins</span>
                    <Link
                      to={`/booking?service=${svc.id}`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0a7272] hover:underline"
                    >
                      Book Session <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CARE PACKAGES SECTION (GENERATED FROM CARE_PACKAGES DATA) */}
        <section className="py-20 bg-white border-t border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">Structured Programs</h2>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">Care Packages designed for results</p>
              <p className="text-slate-600 text-sm mt-2">Commit to your wellbeing with bundled support and savings.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CARE_PACKAGES.map((pkg) => (
                <div 
                  key={pkg.id} 
                  className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all relative ${
                    pkg.popular 
                      ? 'bg-gradient-to-b from-teal-900 to-[#0a7272] text-white shadow-xl scale-105 border-2 border-emerald-400' 
                      : 'bg-slate-50 text-slate-900 border border-slate-200 hover:border-teal-200'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-400 text-teal-950 text-[11px] font-extrabold uppercase px-3 py-1 rounded-full shadow-sm">
                      Most Popular Plan
                    </span>
                  )}

                  <div>
                    <h3 className={`text-xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-slate-900'}`}>{pkg.name}</h3>
                    <p className={`text-xs mb-6 ${pkg.popular ? 'text-emerald-100' : 'text-slate-500'}`}>{pkg.tagline}</p>

                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-extrabold">${pkg.price}</span>
                        <span className={`text-sm line-through ${pkg.popular ? 'text-emerald-200/70' : 'text-slate-400'}`}>${pkg.originalPrice}</span>
                      </div>
                      <p className={`text-[11px] mt-1 ${pkg.popular ? 'text-emerald-100' : 'text-slate-500'}`}>
                        Includes {pkg.sessionsCount} sessions over {pkg.durationMonths} month{pkg.durationMonths > 1 ? 's' : ''}
                      </p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs">
                          <CheckCircle2 className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.popular ? 'text-emerald-300' : 'text-[#0a7272]'}`} />
                          <span className={pkg.popular ? 'text-emerald-50' : 'text-slate-700'}>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to={`/booking?package=${pkg.id}`}
                    className={`w-full py-3 rounded-full font-bold text-center text-xs transition-colors ${
                      pkg.popular
                        ? 'bg-white text-[#0a7272] hover:bg-emerald-50 shadow-md'
                        : 'bg-[#0a7272] text-white hover:bg-[#0d5c5e]'
                    }`}
                  >
                    Select {pkg.name}
                  </Link>
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

        {/* FEATURED THERAPISTS (GENERATED FROM THERAPISTS DATA) */}
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
                    <div className="relative">
                      <img
                        src={therapist.avatar}
                        alt={therapist.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-xs px-2 py-1 rounded-md flex items-center gap-1 shadow-xs">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        <span className="text-xs font-bold text-slate-800">{therapist.rating}</span>
                        <span className="text-[10px] text-slate-500">({therapist.reviewCount})</span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-bold text-base text-slate-900">{therapist.name}</h3>
                      <p className="text-xs text-[#0a7272] font-semibold mb-1">{therapist.title}</p>
                      <p className="text-[11px] text-slate-500 mb-3">{therapist.qualifications}</p>
                      <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mb-4">{therapist.bio}</p>
                      
                      <div className="flex flex-wrap gap-1 mb-2">
                        {therapist.specialties.map((s, i) => (
                          <span key={i} className="text-[10px] bg-teal-100/70 text-teal-800 px-2 py-0.5 rounded font-medium">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-5 pb-5 pt-2 border-t border-slate-200/60">
                    <p className="text-[11px] text-slate-500 mb-2">Available: <span className="font-semibold text-slate-700">{therapist.availableDays.join(', ')}</span></p>
                    <Link
                      to={`/booking?therapist=${therapist.id}`}
                      className="w-full block text-center py-2 rounded-lg bg-white border border-slate-300 text-xs font-bold text-slate-800 hover:bg-[#0a7272] hover:text-white hover:border-[#0a7272] transition-colors"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS (GENERATED FROM TESTIMONIALS DATA) */}
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

        {/* FAQS SECTION (GENERATED FROM FAQS DATA) */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-2">Common Questions</h2>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900">Frequently Asked Questions</p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    className="border border-slate-200 rounded-xl overflow-hidden transition-colors"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full text-left p-5 bg-slate-50 hover:bg-slate-100/80 flex items-center justify-between gap-4 font-semibold text-slate-900 text-sm sm:text-base"
                    >
                      <span className="flex items-center gap-2">
                        <HelpCircle className="w-4 h-4 text-[#0a7272] shrink-0" />
                        {faq.q}
                      </span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="p-5 bg-white border-t border-slate-100 text-sm text-slate-600 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FINAL CTA BANNER */}
        <section className="py-16 bg-slate-50">
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