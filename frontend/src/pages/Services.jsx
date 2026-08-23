import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Building2,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Globe2,
  CalendarHeart,
  Flame,
  User,
  Baby,
  Clock
} from 'lucide-react';

const serviceData = [
  {
    id: 'individual',
    label: 'Individual Therapy',
    icon: User,
    badge: '1-on-1 Support',
    headline: 'A safe, gentle space to catch your breath and heal.',
    subheadline: 'Designed for adults looking to navigate internal stress, break unhealthy patterns, or process life transitions at their own pace.',
    relatableConcerns: [
      'Feeling constantly anxious or on edge',
      'Overthinking every single decision',
      'Burnout, fatigue, and emotional drain',
      'Struggling to set boundaries or say "no"'
    ],
    cards: [
      {
        title: 'Single Exploration Session',
        badge: 'Initial Consultation',
        isPopular: false,
        priceINR: '₹1,500',
        priceUSD: '$35',
        unit: '50 mins session',
        description: 'Ideal for a first step to discuss what you are navigating and map out a gentle path forward.',
        buttonText: 'Book Initial Session',
        buttonTo: '/booking'
      },
      {
        title: 'Sustained Growth Journey',
        badge: 'Most Popular',
        isPopular: true,
        priceINR: '₹8,000',
        priceUSD: '$180',
        unit: '6 sessions package',
        description: 'Recommended for steady progress, continuous support, deep coping strategies, and meaningful healing.',
        buttonText: 'Start Growth Package',
        buttonTo: '/packages'
      }
    ]
  },
  {
    id: 'child-adolescent',
    label: 'Child & Teen Support',
    icon: Baby,
    badge: 'Young Minds & Families',
    headline: 'Nurturing young minds through growth and change.',
    subheadline: 'Specialized therapeutic guidance tailored to children and teens facing emotional, academic, or social hurdles.',
    relatableConcerns: [
      'Frequent emotional regulation challenges',
      'School-related anxiety & academic stress',
      'Confidence, peer pressure & self-identity',
      'Parent-child communication disconnects'
    ],
    cards: [
      {
        title: 'Initial Youth Assessment',
        badge: 'Includes Parent Intake',
        isPopular: false,
        priceINR: '₹900',
        priceUSD: '$45',
        unit: '60 mins session',
        description: 'Includes interactive child time followed by a structured parent feedback session.',
        buttonText: 'Schedule Assessment',
        buttonTo: '/booking'
      },
      {
        title: 'Complete Care Package',
        badge: 'Comprehensive',
        isPopular: true,
        priceINR: '₹9,000',
        priceUSD: '$225',
        unit: '6 sessions + parent updates',
        description: 'Holistic emotional care for your child, paired with regular parent updates and home strategies.',
        buttonText: 'Explore Care Package',
        buttonTo: '/packages'
      }
    ]
  },
  {
    id: 'workshops',
    label: 'Workshops & Groups',
    icon: Sparkles,
    badge: 'Interactive Learning',
    headline: 'Practical toolkits for emotional intelligence & resilience.',
    subheadline: 'Engaging, evidence-based group learning sessions for institutions, schools, and self-growth communities.',
    relatableConcerns: [
      'Nervous system regulation techniques',
      'Mindfulness & grounding toolkits',
      'Preventing compassion fatigue & burnout',
      'Building healthy self-care systems'
    ],
    cards: [
      {
        title: 'Single Masterclass',
        badge: 'Focused Deep-Dive',
        isPopular: false,
        priceINR: '₹2,000',
        priceUSD: '$60',
        unit: 'per attendee',
        description: 'Ideal for single topic mastery like stress management or boundary setting.',
        buttonText: 'Reserve Workshop Seat',
        buttonTo: '/contact'
      },
      {
        title: '4-Part Workshop Series',
        badge: 'Recommended for Groups',
        isPopular: true,
        priceINR: '₹10,000',
        priceUSD: '$280',
        unit: '4 modular modules',
        description: 'Curated module-based program designed to build long-term wellness culture.',
        buttonText: 'Inquire for Your Group',
        buttonTo: '/packages'
      }
    ]
  },
  {
    id: 'corporate',
    label: 'Corporate Wellbeing',
    icon: Building2,
    badge: 'Organizations & Teams',
    headline: 'Human-centered mental health solutions for workplace wellness.',
    subheadline: 'Customized stress-prevention strategies and empathetic leadership training for forward-thinking teams.',
    relatableConcerns: [
      'Employee burnout & workplace stress',
      'Empathetic leadership & communication',
      'Work-life harmony & boundary setting',
      'Custom Employee Assistance (EAP)'
    ],
    cards: [
      {
        title: 'Team Wellness Intervention',
        badge: 'Single Intervention',
        isPopular: false,
        priceINR: '₹2,500',
        priceUSD: '$75',
        unit: 'per hour / team session',
        description: 'Tailored for team stress resets, crisis processing, or workplace wellness days.',
        buttonText: 'Book Team Session',
        buttonTo: '/contact'
      },
      {
        title: 'Quarterly Corporate Partnership',
        badge: 'Best Value Partnership',
        isPopular: true,
        priceINR: '₹15,000',
        priceUSD: '$420',
        unit: 'monthly retainer starting',
        description: 'Ongoing strategic partnership including workshops and team counseling credits.',
        buttonText: 'Request Corporate Deck',
        buttonTo: '/contact'
      }
    ]
  }
];

const faqItems = [
  {
    question: 'How do I know if therapy is right for me?',
    answer: 'If you feel overwhelmed, stuck, constantly anxious, or simply need a safe, confidential space to process life without judgment, therapy can be immensely beneficial.'
  },
  {
    question: 'Are sessions online or in-person?',
    answer: 'Both! We offer secure, encrypted video sessions worldwide (in USD and INR) as well as private, calm in-person consultations in Sector 88, Faridabad.'
  },
  {
    question: 'What happens in our very first session?',
    answer: 'Our first meeting is a gentle intake. We go at your comfort level—discussing what brings you in, what you hope to achieve, and mapping out a personalized plan together.'
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState('individual');
  const [currency, setCurrency] = useState('INR'); // 'INR' | 'USD'
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentService = serviceData.find((s) => s.id === activeTab) || serviceData[0];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      {/* Hero Section styled with Psychobeings Teal */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-20">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#036b75] shadow-sm">
            <Heart size={16} className="fill-[#036b75] text-[#036b75]" />
            Empowering Minds. Transforming Lives.
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl lg:text-6xl">
            Grounded psychological care for <br className="hidden sm:inline" />
            <span className="text-[#036b75]">healing & personal clarity.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            Confidential, structured therapeutic support for individuals, adolescents, and organizations. Available locally in Faridabad and virtually worldwide.
          </p>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-4 text-xs sm:text-sm font-medium text-[#1f2937]">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <MapPin size={16} className="text-[#036b75]" />
              <span>In-Person: Sector 88, Faridabad</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Globe2 size={16} className="text-[#036b75]" />
              <span>Online Telehealth (Global)</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <ShieldCheck size={16} className="text-[#036b75]" />
              <span>100% Confidential Care</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Service Tab Browser */}
      <section className="px-4 py-8 sm:px-6 lg:px-8 -mt-8">
        <div className="mx-auto max-w-7xl">
          {/* Navigation Category Selector */}
          <div className="flex justify-center">
            <div className="inline-flex flex-wrap justify-center gap-2 rounded-2xl bg-white p-2 border border-[#d8ecec] shadow-md">
              {serviceData.map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 rounded-xl px-5 py-3 text-xs sm:text-sm font-bold transition-all ${
                      isActive
                        ? 'bg-[#036b75] text-white shadow-sm scale-[1.02]'
                        : 'text-[#4b5563] hover:bg-[#edf7f7] hover:text-[#036b75]'
                    }`}
                  >
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Currency Toggle Banner */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#edf7f7] p-4 border border-[#d8ecec]">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-[#111827] font-semibold">
              <Sparkles size={18} className="text-[#036b75]" />
              <span>Display pricing for your location:</span>
            </div>

            <div className="flex bg-white p-1 rounded-xl border border-[#d8ecec]">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                  currency === 'INR'
                    ? 'bg-[#036b75] text-white shadow-xs'
                    : 'text-[#4b5563] hover:text-[#036b75]'
                }`}
              >
                🇮🇳 India (INR ₹)
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                  currency === 'USD'
                    ? 'bg-[#036b75] text-white shadow-xs'
                    : 'text-[#4b5563] hover:text-[#036b75]'
                }`}
              >
                🌐 International (USD $)
              </button>
            </div>
          </div>

          {/* Active Service Details Box */}
          <div className="mt-8 rounded-[2.5rem] border border-[#d8ecec] bg-white p-6 sm:p-10 shadow-sm">
            <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] items-start">
              
              {/* Left Column: Concerns & Target Client Profile */}
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  {currentService.badge}
                </span>

                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  {currentService.headline}
                </h2>

                <p className="mt-3 text-base leading-relaxed text-[#4b5563]">
                  {currentService.subheadline}
                </p>

                <div className="mt-8 rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#036b75]">
                    Key Focus Areas & Concerns:
                  </p>

                  <div className="mt-4 space-y-3">
                    {currentService.relatableConcerns.map((concern) => (
                      <div key={concern} className="flex items-start gap-3 text-sm text-[#111827]">
                        <CheckCircle2 size={18} className="text-[#036b75] shrink-0 mt-0.5" />
                        <span className="font-medium">{concern}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex items-center gap-3 text-xs text-[#6b7280]">
                  <Clock size={16} className="text-[#036b75]" />
                  <span>Flexible online booking with easy rescheduling options.</span>
                </div>
              </div>

              {/* Right Column: Clear Pricing Cards */}
              <div className="grid gap-6 sm:grid-cols-2">
                {currentService.cards.map((card) => (
                  <div
                    key={card.title}
                    className={`relative rounded-[2rem] p-6 transition flex flex-col justify-between ${
                      card.isPopular
                        ? 'bg-[#036b75] text-white shadow-xl scale-[1.01]'
                        : 'bg-[#fbfdfd] border border-[#d8ecec] text-[#111827]'
                    }`}
                  >
                    {card.isPopular && (
                      <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-amber-300 px-3 py-0.5 text-[11px] font-extrabold text-slate-900 shadow-xs">
                        <Flame size={12} className="fill-amber-900 text-amber-900" />
                        {card.badge}
                      </div>
                    )}

                    <div>
                      {!card.isPopular && (
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#036b75]">
                          {card.badge}
                        </span>
                      )}

                      <h3 className={`mt-1 text-lg font-bold ${card.isPopular ? 'text-white' : 'text-[#111827]'}`}>
                        {card.title}
                      </h3>

                      <div className="mt-4">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-extrabold tracking-tight">
                            {currency === 'INR' ? card.priceINR : card.priceUSD}
                          </span>
                          <span className={`text-xs ${card.isPopular ? 'text-teal-100' : 'text-[#6b7280]'}`}>
                            / {currency}
                          </span>
                        </div>
                        <p className={`mt-1 text-xs font-medium ${card.isPopular ? 'text-teal-100/90' : 'text-[#4b5563]'}`}>
                          {card.unit}
                        </p>
                      </div>

                      <p className={`mt-4 text-xs leading-relaxed ${card.isPopular ? 'text-white/90' : 'text-[#4b5563]'}`}>
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-current/10">
                      <Link
                        to={card.buttonTo}
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition shadow-xs ${
                          card.isPopular
                            ? 'bg-white text-[#036b75] hover:bg-teal-50'
                            : 'bg-[#036b75] text-white hover:bg-[#02565e]'
                        }`}
                      >
                        {card.buttonText}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#036b75] p-8 sm:p-12 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
                Ready to Start Your Journey?
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Taking the first step is often the most important one.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/90">
                Connect with our team to discuss your goals, schedule an intake session, or ask any questions about our practice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#036b75] transition hover:bg-teal-50 shadow-sm"
              >
                <CalendarHeart size={16} />
                Book Initial Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20 backdrop-blur-xs"
              >
                <MessageCircle size={16} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#036b75] bg-[#edf7f7] px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-[#111827]">
              Everything you need to know
            </h2>
          </div>

          <div className="mt-8 space-y-4">
            {faqItems.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={faq.question}
                  className="rounded-2xl border border-[#d8ecec] bg-white overflow-hidden transition"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center gap-4 text-sm font-bold text-[#111827] hover:text-[#036b75]"
                  >
                    <span>{faq.question}</span>
                    <span className="text-lg text-[#036b75]">{isOpen ? '−' : '+'}</span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-[#4b5563] border-t border-[#edf7f7] pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <Link
        to="/booking"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#036b75] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-[#02565e]"
      >
        <MessageCircle size={18} />
        <span>Book Consultation</span>
      </Link>
    </div>
  );
};

export default Services;