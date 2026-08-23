import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  Sparkles,
  Building2,
  CalendarHeart,
  Flame,
  HelpCircle,
  Clock,
  RefreshCw,
  CheckCircle2,
  Sparkle,
  TrendingUp,
  Lock,
  Heart,
  UserCheck
} from 'lucide-react';

const domesticPackages = [
  {
    id: 'individual-domestic',
    title: 'Individual Therapy',
    subtitle: 'For Adults (18+)',
    description:
      'Personalised one-on-one counselling supporting anxiety, emotional overwhelm, stress management, overthinking, and personal growth.',
    duration: '50 mins / session',
    sessions: [
      {
        name: '4 Sessions Starter Pack',
        price: '₹5,600',
        perSession: '₹1,400 / session',
        description: 'Ideal for short-term guidance and targeted coping strategies.',
        isPopular: false
      },
      {
        name: '6 Sessions Transform Pack',
        price: '₹8,100',
        perSession: '₹1,350 / session',
        savings: 'Save ₹300',
        description: 'Best for sustained emotional work, healing, and lasting progress.',
        isPopular: true,
        badge: 'Most Popular'
      }
    ]
  },
  {
    id: 'child-domestic',
    title: 'Child & Adolescent Therapy',
    subtitle: 'For Ages 6–17',
    description:
      'Compassionate counselling tailored for young individuals facing emotional, academic, social, and identity-related challenges.',
    duration: '60 mins / session',
    sessions: [
      {
        name: '4 Sessions Starter Pack',
        price: '₹4,400',
        perSession: '₹1,100 / session',
        description: 'Initial structured support and emotional regulation strategies.',
        isPopular: false
      },
      {
        name: '6 Sessions Growth Pack',
        price: '₹6,300',
        perSession: '₹1,050 / session',
        savings: 'Save ₹300',
        description: 'Comprehensive care with regular parent updates and progress tracking.',
        isPopular: true,
        badge: 'Recommended'
      }
    ]
  }
];

const internationalPackages = [
  {
    id: 'individual-intl',
    title: 'Individual Therapy (Global)',
    subtitle: 'Worldwide Access',
    description:
      'Encrypted online therapy for clients living outside India, with flexible scheduling suited across worldwide time zones.',
    duration: '50 mins / session',
    sessions: [
      {
        name: '4 Sessions Starter Pack',
        price: '$135',
        perSession: '$33.75 / session',
        description: 'Focused international support for acute stress or life transitions.',
        isPopular: false
      },
      {
        name: '6 Sessions Transform Pack',
        price: '$180',
        perSession: '$30.00 / session',
        savings: 'Save $22.50',
        description: 'Sustained international therapy for deep emotional transformation.',
        isPopular: true,
        badge: 'Best Value'
      }
    ]
  },
  {
    id: 'child-intl',
    title: 'Child & Adolescent (Global)',
    subtitle: 'Worldwide Access',
    description:
      'Dedicated online guidance for children and adolescents worldwide, supporting developmental growth and cross-cultural adjustments.',
    duration: '60 mins / session',
    sessions: [
      {
        name: '4 Sessions Starter Pack',
        price: '$165',
        perSession: '$41.25 / session',
        description: 'Targeted support for young adults navigating academic or social stress.',
        isPopular: false
      },
      {
        name: '6 Sessions Growth Pack',
        price: '$225',
        perSession: '$37.50 / session',
        savings: 'Save $22.50',
        description: 'Continued developmental and emotional care for international families.',
        isPopular: true,
        badge: 'Recommended'
      }
    ]
  }
];

const programs = [
  {
    title: 'Corporate EAP & Institutional Programs',
    icon: Building2,
    tag: 'Organizations & Workplaces',
    description:
      'Employee Assistance Programs (EAP), workplace wellbeing workshops, executive stress management, burnout prevention, and empathic leadership training.',
    offerings: [
      'Workplace Stress & Burnout Management',
      '1-on-1 Employee Assistance Counseling',
      'Leadership Empathy & Communication Seminars'
    ],
    ctaText: 'Enquire for Corporate'
  },
  {
    title: 'Custom Educational Workshops & Seminars',
    icon: Sparkles,
    tag: 'Schools & Universities',
    description:
      'Interactive, outcome-oriented workshops for schools, colleges, institutions, and community groups focused on mental health awareness and practical coping tools.',
    offerings: [
      'Mindfulness & Emotional Regulation Tools',
      'Academic Stress & Exam Anxiety Workshops',
      'Self-Care & Youth Resilience Building'
    ],
    ctaText: 'Request Workshop Info'
  }
];

const notes = [
  {
    title: 'Prior Appointment',
    text: 'All therapy sessions are booked in advance to reserve your preferred private slot.',
    icon: CalendarHeart
  },
  {
    title: '3-Month Validity',
    text: 'Packages remain active for 3 full months, giving you room to pace your sessions.',
    icon: Clock
  },
  {
    title: '24-Hour Reschedule',
    text: 'Flexible scheduling with a simple 24-hour advance notice policy.',
    icon: RefreshCw
  },
  {
    title: 'Transparent Policy',
    text: 'Structured plans are reserved exclusively for your dedicated care journey.',
    icon: ShieldCheck
  },
  {
    title: 'Worldwide Telehealth',
    text: 'Connect seamlessly from anywhere through secure, HIPAA-compliant video links.',
    icon: Globe2
  }
];

const Packages = () => {
  const [currencyRegion, setCurrencyRegion] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fbfa] text-[#183436] font-sans antialiased">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-20 lg:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,114,114,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,95,97,0.08),_transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe1df] bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#0a7272] shadow-sm">
            <Sparkle size={15} className="fill-[#0a7272]" />
            Structured Wellbeing Plans
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#0d4f50] sm:text-5xl lg:text-6xl">
            Invest in Your Emotional Wellbeing with Guided Care
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed text-[#4c6162]">
            Healing thrives on consistency. Choose a structured package designed to give you continuous psychological support, measurable progress, and lower per-session rates.
          </p>

          {/* Trust Badges Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm font-semibold text-[#0d4f50]">
            <span className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#d7ecec]">
              <Lock size={15} className="text-[#0a7272]" /> 100% Confidential
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#d7ecec]">
              <UserCheck size={15} className="text-[#0a7272]" /> MSc Qualified Clinical Psychologist
            </span>
            <span className="inline-flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#d7ecec]">
              <Heart size={15} className="text-[#0a7272]" /> Safe & Empathetic
            </span>
          </div>

          {/* Region / Currency Selector */}
          <div className="mt-10 inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-[#bfe1df] bg-white p-2.5 shadow-md">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a7272] px-3">
              Location / Currency:
            </span>
            <div className="flex bg-[#f0f8f8] p-1 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setCurrencyRegion('ALL')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  currencyRegion === 'ALL'
                    ? 'bg-[#0a7272] text-white shadow-sm'
                    : 'text-[#4c6162] hover:text-[#0a7272]'
                }`}
              >
                All Regions
              </button>
              <button
                onClick={() => setCurrencyRegion('INR')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  currencyRegion === 'INR'
                    ? 'bg-[#0a7272] text-white shadow-sm'
                    : 'text-[#4c6162] hover:text-[#0a7272]'
                }`}
              >
                🇮🇳 India (₹ INR)
              </button>
              <button
                onClick={() => setCurrencyRegion('USD')}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs sm:text-sm font-bold rounded-lg transition ${
                  currencyRegion === 'USD'
                    ? 'bg-[#0a7272] text-white shadow-sm'
                    : 'text-[#4c6162] hover:text-[#0a7272]'
                }`}
              >
                🌐 International ($ USD)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= GUIDANCE / DECISION HELPER ================= */}
      <section className="px-4 py-6 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="rounded-2xl bg-gradient-to-r from-[#eaf6f6] to-[#f0f8f8] border border-[#bfe1df] p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex w-12 h-12 rounded-xl bg-[#0a7272] text-white items-center justify-center shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="font-bold text-[#0d4f50] text-base">Not sure which pack fits you best?</h4>
              <p className="text-xs sm:text-sm text-[#4c6162] mt-0.5">
                <strong>4-Session Packs</strong> are ideal for targeted support and learning practical coping techniques. <strong>6-Session Packs</strong> deliver maximum value for deeper, long-term personal transformation.
              </p>
            </div>
          </div>
          <a
            href="https://booking.myndspace.app/amanp"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-[#0a7272] bg-white border border-[#0a7272] px-4 py-2.5 rounded-full hover:bg-[#0a7272] hover:text-white transition shadow-sm"
          >
            Consult First
          </a>
        </div>
      </section>

      {/* ================= DOMESTIC PACKAGES (INDIA - INR) ================= */}
      {(currencyRegion === 'ALL' || currencyRegion === 'INR') && (
        <section className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272] bg-[#eaf6f6] px-3 py-1 rounded-full border border-[#bfe1df]">
                🇮🇳 Domestic Plans (India)
              </span>
              <h2 className="text-3xl font-extrabold text-[#0d4f50] sm:text-4xl mt-3">
                India Therapy Packages (INR)
              </h2>
              <p className="text-[#4c6162] mt-1 text-base">
                Structured multi-session plans offering continuity of clinical care at preferential rates.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {domesticPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-[2rem] border border-[#d7ecec] bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#0a7272] uppercase tracking-wider">{pkg.subtitle}</span>
                        <h3 className="text-2xl font-bold text-[#0d4f50]">{pkg.title}</h3>
                      </div>
                      <span className="text-xs bg-[#f0f8f8] text-[#0a7272] px-3 py-1 rounded-full border border-[#d7ecec] font-semibold shrink-0">
                        {pkg.duration}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#4c6162]">
                      {pkg.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      {pkg.sessions.map((session) => (
                        <div
                          key={session.name}
                          className={`relative rounded-2xl p-5 border transition ${
                            session.isPopular
                              ? 'bg-gradient-to-br from-[#0a7272] to-[#0d5c5e] text-white border-[#0a7272] shadow-md'
                              : 'bg-[#f7fcfb] border-[#d7ecec] text-[#183436]'
                          }`}
                        >
                          {session.isPopular && (
                            <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-extrabold text-slate-900 shadow-sm">
                              <Flame size={13} className="fill-slate-900 text-slate-900" />
                              {session.badge}
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-base">{session.name}</h4>
                                {session.savings && (
                                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${session.isPopular ? 'bg-teal-800 text-teal-100' : 'bg-teal-100 text-[#0a7272]'}`}>
                                    {session.savings}
                                  </span>
                                )}
                              </div>
                              <p className={`text-xs mt-1 ${session.isPopular ? 'text-teal-100' : 'text-[#6b8283]'}`}>
                                {session.perSession}
                              </p>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight">
                              {session.price}
                            </span>
                          </div>

                          <p className={`mt-3 text-xs leading-relaxed ${session.isPopular ? 'text-teal-50' : 'text-[#4c6162]'}`}>
                            {session.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-2">
                    <a
                      href="https://booking.myndspace.app/amanp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 w-full rounded-full bg-[#0a7272] text-white py-3.5 font-bold text-sm hover:bg-[#0d5c5e] transition shadow-md group"
                    >
                      <span>Book India Package Now</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= INTERNATIONAL PACKAGES (USD) ================= */}
      {(currencyRegion === 'ALL' || currencyRegion === 'USD') && (
        <section className="px-4 py-12 sm:px-6 lg:px-8 bg-[#f0f8f7]">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272] bg-white px-3 py-1 rounded-full border border-[#bfe1df]">
                🌐 Worldwide Telehealth
              </span>
              <h2 className="text-3xl font-extrabold text-[#0d4f50] sm:text-4xl mt-3">
                International Therapy Packages (USD)
              </h2>
              <p className="text-[#4c6162] mt-1 text-base">
                Seamless online care designed for NRIs and global clients across time zones.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {internationalPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-[2rem] border border-[#d7ecec] bg-white p-6 sm:p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <span className="text-xs font-bold text-[#0a7272] uppercase tracking-wider">{pkg.subtitle}</span>
                        <h3 className="text-2xl font-bold text-[#0d4f50]">{pkg.title}</h3>
                      </div>
                      <span className="text-xs bg-[#f0f8f8] text-[#0a7272] px-3 py-1 rounded-full border border-[#d7ecec] font-semibold shrink-0">
                        {pkg.duration}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[#4c6162]">
                      {pkg.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      {pkg.sessions.map((session) => (
                        <div
                          key={session.name}
                          className={`relative rounded-2xl p-5 border transition ${
                            session.isPopular
                              ? 'bg-gradient-to-br from-[#0a7272] to-[#0d5c5e] text-white border-[#0a7272] shadow-md'
                              : 'bg-[#f7fcfb] border-[#d7ecec] text-[#183436]'
                          }`}
                        >
                          {session.isPopular && (
                            <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-extrabold text-slate-900 shadow-sm">
                              <Flame size={13} className="fill-slate-900 text-slate-900" />
                              {session.badge}
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-bold text-base">{session.name}</h4>
                                {session.savings && (
                                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-md ${session.isPopular ? 'bg-teal-800 text-teal-100' : 'bg-teal-100 text-[#0a7272]'}`}>
                                    {session.savings}
                                  </span>
                                )}
                              </div>
                              <p className={`text-xs mt-1 ${session.isPopular ? 'text-teal-100' : 'text-[#6b8283]'}`}>
                                {session.perSession}
                              </p>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight">
                              {session.price}
                            </span>
                          </div>

                          <p className={`mt-3 text-xs leading-relaxed ${session.isPopular ? 'text-teal-50' : 'text-[#4c6162]'}`}>
                            {session.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-2">
                    <a
                      href="https://booking.myndspace.app/amanp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 w-full rounded-full bg-[#0a7272] text-white py-3.5 font-bold text-sm hover:bg-[#0d5c5e] transition shadow-md group"
                    >
                      <span>Book Global Package Now</span>
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PROGRAMS & WORKSHOPS SECTION ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272] bg-[#eaf6f6] px-3 py-1 rounded-full border border-[#bfe1df]">
            Custom Institutional Solutions
          </span>
          <h2 className="text-3xl font-extrabold text-[#0d4f50] sm:text-4xl mt-3">
            Corporate Wellbeing & Workshops
          </h2>
          <p className="mt-2 text-base text-[#4c6162]">
            Evidence-based mental health initiatives tailored for corporate teams, schools, and academic organizations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program) => {
            const IconComponent = program.icon;
            return (
              <div
                key={program.title}
                className="rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272]">
                      <IconComponent size={24} />
                    </div>
                    <span className="text-xs font-bold bg-[#f0f8f8] text-[#0a7272] px-3 py-1 rounded-full border border-[#d7ecec]">
                      {program.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-[#0d4f50] mt-5">
                    {program.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-[#4c6162]">
                    {program.description}
                  </p>

                  <div className="mt-6 space-y-2.5">
                    {program.offerings.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl bg-[#f7fcfb] p-3 text-xs sm:text-sm text-[#3b4f50] border border-[#eef8f7]"
                      >
                        <CheckCircle2 size={16} className="text-[#0a7272] shrink-0" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full border-2 border-[#0a7272] px-6 py-3 text-xs sm:text-sm font-bold text-[#0a7272] hover:bg-[#0a7272] hover:text-white transition shadow-sm"
                  >
                    {program.ctaText}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= IMPORTANT TERMS & TRANSPARENCY ================= */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-[#f0f8f7] border border-[#d7ecec] p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272]">
              Transparent Care Guidelines
            </span>
            <h2 className="text-3xl font-extrabold text-[#0d4f50] mt-2">
              Package Terms & Policies
            </h2>
            <p className="text-sm text-[#4c6162] mt-1">
              Clear guidelines designed to respect both your time and therapeutic continuity.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => {
              const Icon = note.icon;
              return (
                <div
                  key={note.title}
                  className="rounded-2xl bg-white p-5 border border-[#d7ecec] shadow-sm flex flex-col justify-between"
                >
                  <div className="flex items-center gap-3 text-[#0a7272]">
                    <Icon size={20} />
                    <h4 className="font-bold text-sm text-[#0d4f50]">
                      {note.title}
                    </h4>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[#4c6162]">
                    {note.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= FINAL CALL TO ACTION ================= */}
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="rounded-[2.5rem] bg-gradient-to-r from-[#0a7272] via-[#0d5c5e] to-[#0f5f61] text-white px-8 sm:px-12 py-14 text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-teal-100 backdrop-blur-md">
              <HelpCircle size={15} />
              Need Personal Guidance?
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold mt-4 leading-tight">
              Ready to take the first step toward sustained emotional wellbeing?
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-teal-50/90 max-w-2xl mx-auto">
              If you aren't sure which path fits your specific needs, reserve a direct consultation slot to discuss your goals and receive clarity before committing.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href="https://booking.myndspace.app/amanp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#0a7272] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-teal-50 transition shadow-lg text-center"
              >
                Schedule First Session
              </a>

              <Link
                to="/services"
                className="w-full sm:w-auto border border-white/40 bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-[#0a7272] transition backdrop-blur-sm text-center"
              >
                Explore Specific Therapies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;