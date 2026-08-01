import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Globe2,
  HeartHandshake,
  Sparkles,
  Building2,
  CalendarHeart,
  Flame,
  HelpCircle,
  Clock,
  RefreshCw,
  XCircle,
  Check
} from 'lucide-react';

const domesticPackages = [
  {
    id: 'individual-domestic',
    title: 'Individual Therapy',
    description:
      'Personalised one-on-one counselling supporting anxiety, emotional overwhelm, stress management, overthinking, and personal growth.',
    duration: '50-minute sessions',
    sessions: [
      {
        name: '3 Sessions Pack',
        price: '₹4,200',
        perSession: '₹1,400 / session',
        description: 'Ideal for short-term guidance and targeted coping strategies.',
        isPopular: false
      },
      {
        name: '6 Sessions Pack',
        price: '₹8,100',
        perSession: '₹1,350 / session',
        description: 'Best for sustained emotional work, healing, and lasting progress.',
        isPopular: true,
        badge: 'Most Popular'
      }
    ]
  },
  {
    id: 'child-domestic',
    title: 'Child & Adolescent Therapy',
    description:
      'Compassionate counselling tailored for young individuals facing emotional, academic, social, and identity-related challenges.',
    duration: '60-minute sessions',
    sessions: [
      {
        name: '3 Sessions Pack',
        price: '₹3,300',
        perSession: '₹1,100 / session',
        description: 'Initial structured support and emotional regulation strategies.',
        isPopular: false
      },
      {
        name: '6 Sessions Pack',
        price: '₹6,300',
        perSession: '₹1,050 / session',
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
    title: 'Individual Therapy (International)',
    description:
      'Encrypted online therapy for clients living outside India, with flexible scheduling suited across worldwide time zones.',
    duration: '50-minute sessions',
    sessions: [
      {
        name: '3 Sessions Pack',
        price: '$180',
        perSession: '$60 / session',
        description: 'Focused international support for acute stress or life transitions.',
        isPopular: false
      },
      {
        name: '6 Sessions Pack',
        price: '$340',
        perSession: '$56.60 / session',
        description: 'Sustained international therapy for deep emotional transformation.',
        isPopular: true,
        badge: 'Best Value'
      }
    ]
  },
  {
    id: 'child-intl',
    title: 'Child & Adolescent Therapy (International)',
    description:
      'Dedicated online guidance for children and adolescents worldwide, supporting developmental growth and cross-cultural adjustments.',
    duration: '60-minute sessions',
    sessions: [
      {
        name: '3 Sessions Pack',
        price: '$150',
        perSession: '$50 / session',
        description: 'Targeted support for young adults navigating academic or social stress.',
        isPopular: false
      },
      {
        name: '6 Sessions Pack',
        price: '$285',
        perSession: '$47.50 / session',
        description: 'Continued developmental and emotional care for international families.',
        isPopular: true,
        badge: 'Recommended'
      }
    ]
  }
];

const programs = [
  {
    title: 'Corporate Programs',
    icon: Building2,
    description:
      'Employee Assistance Programs (EAP), workplace wellbeing workshops, executive stress management, burnout prevention, and empathic leadership training.',
    offerings: [
      'Workplace Stress & Burnout Management',
      'Employee Assistance Counseling',
      'Leadership Empathy & Communication'
    ],
    ctaText: 'Enquire for Corporate'
  },
  {
    title: 'Workshops & Seminars',
    icon: Sparkles,
    description:
      'Interactive, outcome-oriented workshops for schools, colleges, institutions, and community groups focused on mental health awareness and practical coping tools.',
    offerings: [
      'Mindfulness & Emotional Regulation',
      'Academic Stress & Exam Anxiety',
      'Self-Care & Resilience Building'
    ],
    ctaText: 'Request Workshop'
  }
];

const notes = [
  {
    title: 'By Prior Appointment Only',
    text: 'All therapy sessions must be booked in advance to reserve your preferred schedule.',
    icon: CalendarHeart
  },
  {
    title: '3-Month Package Validity',
    text: 'Packages remain valid for 3 months from the date of purchase for continuous care.',
    icon: Clock
  },
  {
    title: '24-Hour Rescheduling Policy',
    text: 'A minimum of 24 hours notice is required to reschedule a session without forfeiture.',
    icon: RefreshCw
  },
  {
    title: 'Non-Transferable & Non-Refundable',
    text: 'Once started, session packages are non-transferable and non-refundable.',
    icon: XCircle
  },
  {
    title: 'Worldwide Online Access',
    text: 'Telehealth sessions are accessible globally via secure video platforms.',
    icon: Globe2
  }
];

const Packages = () => {
  const [currencyRegion, setCurrencyRegion] = useState('ALL');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fbfa] text-[#183436] font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,114,114,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,95,97,0.08),_transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe1df] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#0a7272] shadow-sm">
            <Sparkles size={16} />
            Structured Wellbeing Plans
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-[#0d4f50] sm:text-5xl lg:text-6xl">
            Therapy Packages Designed for Sustained Progress
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed text-[#4c6162]">
            Commitment to healing takes consistency. Our session packages offer continuous, structured psychological support at a guided pace tailored to your journey.
          </p>

          {/* Region / Currency Toggle */}
          <div className="mt-8 inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-[#d7ecec] bg-white p-3 shadow-sm">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0a7272] px-2">
              Select Region / Currency:
            </span>
            <div className="flex bg-[#f0f8f8] p-1 rounded-xl">
              <button
                onClick={() => setCurrencyRegion('ALL')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition ${
                  currencyRegion === 'ALL'
                    ? 'bg-[#0a7272] text-white shadow-sm'
                    : 'text-[#4c6162] hover:text-[#0a7272]'
                }`}
              >
                All Regions
              </button>
              <button
                onClick={() => setCurrencyRegion('INR')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition ${
                  currencyRegion === 'INR'
                    ? 'bg-[#0a7272] text-white shadow-sm'
                    : 'text-[#4c6162] hover:text-[#0a7272]'
                }`}
              >
                🇮🇳 India (INR ₹)
              </button>
              <button
                onClick={() => setCurrencyRegion('USD')}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition ${
                  currencyRegion === 'USD'
                    ? 'bg-[#0a7272] text-white shadow-sm'
                    : 'text-[#4c6162] hover:text-[#0a7272]'
                }`}
              >
                🌐 International (USD $)
              </button>
            </div>
          </div>

          {/* Value Highlights */}
          <div className="grid sm:grid-cols-3 gap-6 mt-12 text-left">
            <div className="rounded-[1.75rem] bg-white border border-[#d7ecec] p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272]">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-lg mt-5 text-[#0d4f50]">
                Confidential & Safe
              </h3>
              <p className="text-sm text-[#4c6162] mt-2 leading-relaxed">
                Conducted in a secure, non-judgmental space governed by strict clinical ethics.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white border border-[#d7ecec] p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272]">
                <Globe2 size={24} />
              </div>
              <h3 className="font-bold text-lg mt-5 text-[#0d4f50]">
                Flexible Telehealth
              </h3>
              <p className="text-sm text-[#4c6162] mt-2 leading-relaxed">
                Convenient online sessions engineered to fit effortlessly into your routine across time zones.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white border border-[#d7ecec] p-6 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272]">
                <HeartHandshake size={24} />
              </div>
              <h3 className="font-bold text-lg mt-5 text-[#0d4f50]">
                Evidence-Based Care
              </h3>
              <p className="text-sm text-[#4c6162] mt-2 leading-relaxed">
                Tailored clinical interventions designed for tangible emotional growth and stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DOMESTIC PACKAGES (INDIA - INR) ================= */}
      {(currencyRegion === 'ALL' || currencyRegion === 'INR') && (
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272] bg-[#eaf6f6] px-3 py-1 rounded-full">
                🇮🇳 India / Domestic
              </span>
              <h2 className="text-3xl font-bold text-[#0d4f50] sm:text-4xl mt-3">
                Therapy Packages (INR)
              </h2>
              <p className="text-[#4c6162] mt-2 text-base">
                Structured multi-session plans offering continuity of care at preferential rates.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {domesticPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-[#0d4f50]">
                      {pkg.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4c6162]">
                      {pkg.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      {pkg.sessions.map((session) => (
                        <div
                          key={session.name}
                          className={`relative rounded-2xl p-5 border transition ${
                            session.isPopular
                              ? 'bg-gradient-to-br from-[#0a7272] to-[#0d5c5e] text-white border-[#0a7272] shadow-lg'
                              : 'bg-[#f7fcfb] border-[#d7ecec] text-[#183436]'
                          }`}
                        >
                          {session.isPopular && (
                            <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-slate-900 shadow-sm">
                              <Flame size={12} className="fill-amber-900 text-amber-900" />
                              {session.badge}
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-bold text-base">
                                {session.name}
                              </h4>
                              <p
                                className={`text-xs mt-0.5 ${
                                  session.isPopular ? 'text-teal-100' : 'text-[#6b8283]'
                                }`}
                              >
                                {pkg.duration} • {session.perSession}
                              </p>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight">
                              {session.price}
                            </span>
                          </div>

                          <p
                            className={`mt-3 text-xs leading-relaxed ${
                              session.isPopular ? 'text-teal-50' : 'text-[#4c6162]'
                            }`}
                          >
                            {session.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="https://booking.myndspace.app/amanp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 w-full rounded-full bg-[#0a7272] text-white py-3.5 font-bold text-sm hover:bg-[#0d5c5e] transition shadow-md"
                    >
                      Book India Package
                      <ArrowRight size={16} />
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
            <div className="max-w-3xl mb-10">
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272] bg-white px-3 py-1 rounded-full border border-[#bfe1df]">
                🌐 International / Worldwide
              </span>
              <h2 className="text-3xl font-bold text-[#0d4f50] sm:text-4xl mt-3">
                Therapy Packages for International Clients (USD)
              </h2>
              <p className="text-[#4c6162] mt-2 text-base">
                Flexible online tele-health sessions tailored for clients residing abroad across global time zones.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {internationalPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-6 sm:p-8 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-2xl font-bold text-[#0d4f50]">
                      {pkg.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#4c6162]">
                      {pkg.description}
                    </p>

                    <div className="mt-6 space-y-4">
                      {pkg.sessions.map((session) => (
                        <div
                          key={session.name}
                          className={`relative rounded-2xl p-5 border transition ${
                            session.isPopular
                              ? 'bg-gradient-to-br from-[#0a7272] to-[#0d5c5e] text-white border-[#0a7272] shadow-lg'
                              : 'bg-[#f7fcfb] border-[#d7ecec] text-[#183436]'
                          }`}
                        >
                          {session.isPopular && (
                            <div className="absolute -top-3 right-5 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-slate-900 shadow-sm">
                              <Flame size={12} className="fill-amber-900 text-amber-900" />
                              {session.badge}
                            </div>
                          )}

                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h4 className="font-bold text-base">
                                {session.name}
                              </h4>
                              <p
                                className={`text-xs mt-0.5 ${
                                  session.isPopular ? 'text-teal-100' : 'text-[#6b8283]'
                                }`}
                              >
                                {pkg.duration} • {session.perSession}
                              </p>
                            </div>
                            <span className="text-2xl font-extrabold tracking-tight">
                              {session.price}
                            </span>
                          </div>

                          <p
                            className={`mt-3 text-xs leading-relaxed ${
                              session.isPopular ? 'text-teal-50' : 'text-[#4c6162]'
                            }`}
                          >
                            {session.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <a
                      href="https://booking.myndspace.app/amanp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex justify-center items-center gap-2 w-full rounded-full bg-[#0a7272] text-white py-3.5 font-bold text-sm hover:bg-[#0d5c5e] transition shadow-md"
                    >
                      Book International Package
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ================= PROGRAMS SECTION ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a7272] bg-[#eaf6f6] px-3 py-1 rounded-full">
              Beyond Individual Care
            </span>
            <h2 className="text-3xl font-bold text-[#0d4f50] sm:text-4xl mt-4">
              Institutional Programs & Workshops
            </h2>
            <p className="mt-3 text-base text-[#4c6162]">
              Custom mental health solutions designed for corporate teams, educational institutions, and community groups.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {programs.map((program) => {
              const IconComponent = program.icon;
              return (
                <div
                  key={program.title}
                  className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-8 shadow-sm flex flex-col justify-between transition hover:shadow-md"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-[#eaf6f6] flex items-center justify-center text-[#0a7272]">
                      <IconComponent size={26} />
                    </div>

                    <h3 className="text-2xl font-bold text-[#0d4f50] mt-6">
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
                          <Check size={16} className="text-[#0a7272] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a7272] px-6 py-3 text-xs sm:text-sm font-bold text-[#0a7272] hover:bg-[#0a7272] hover:text-white transition"
                    >
                      {program.ctaText}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= IMPORTANT NOTES & POLICIES ================= */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] bg-[#f0f8f7] border border-[#d7ecec] p-8 sm:p-12">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#0a7272]">
              Package Guidelines
            </span>
            <h2 className="text-3xl font-bold text-[#0d4f50] mt-2">
              Important Terms & Policies
            </h2>
            <p className="text-sm text-[#4c6162] mt-1">
              Please review our operational guidelines prior to purchasing a session package.
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
                  <p className="mt-3 text-xs leading-relaxed text-[#4c6162]">
                    {note.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION ================= */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] bg-gradient-to-r from-[#0a7272] via-[#0d5c5e] to-[#0f5f61] text-white px-8 sm:px-12 py-14 text-center shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold text-teal-100 backdrop-blur-md">
                <HelpCircle size={14} />
                Need Personalized Guidance?
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold mt-4 leading-tight">
                Not sure which package fits your current situation?
              </h2>

              <p className="mt-4 text-sm sm:text-base leading-relaxed text-teal-50/90">
                Selecting the right plan shouldn't feel overwhelming. Reach out for a brief consultation and we will guide you toward the format best aligned with your needs.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0a7272] px-8 py-3.5 rounded-full font-bold text-sm hover:bg-teal-50 transition shadow-md"
                >
                  Schedule Consultation
                </a>

                <Link
                  to="/services"
                  className="border border-white/40 bg-white/10 text-white px-8 py-3.5 rounded-full font-bold text-sm hover:bg-white hover:text-[#0a7272] transition backdrop-blur-sm"
                >
                  Explore All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;