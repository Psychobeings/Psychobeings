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

const therapyOptions = [
  {
    id: 'individual',
    title: 'Individual Therapy',
    description:
      'A confidential, one-on-one space for anxiety, stress, overthinking, grief, burnout, and emotional healing.',
    concerns: [
      'Anxiety and emotional overwhelm',
      'Stress regulation & burnout',
      'Overthinking and decision paralysis',
      'Boundary setting and self-worth'
    ],
    sessionCards: [
      {
        title: 'Single Session',
        priceINR: '₹1,500',
        priceUSD: '$45',
        unit: 'per session (50 mins)',
        description: 'Ideal for an initial consultation or targeted support on a specific concern.',
        isPopular: false,
        buttonLabel: 'Book Single Session',
        buttonTo: '/booking'
      },
      {
        title: 'Sustained Growth Package',
        priceINR: '₹8,000',
        priceUSD: '$220',
        unit: '6 sessions package',
        description: 'Recommended for continuous progress, deep emotional work, and skill building.',
        isPopular: true,
        popularBadge: 'Most Popular',
        buttonLabel: 'View Package Details',
        buttonTo: '/packages'
      }
    ],
    buttonLabel: 'Book Individual Support',
    buttonTo: '/booking'
  },
  {
    id: 'child-adolescent',
    title: 'Child & Adolescent Support',
    description:
      'Targeted guidance for young individuals navigating emotional, academic, and social developmental challenges.',
    concerns: [
      'Emotional regulation & tantrums',
      'School stress and performance anxiety',
      'Identity, confidence, and peer dynamics',
      'Family transitions & communication gaps'
    ],
    sessionCards: [
      {
        title: 'Initial Assessment',
        priceINR: '₹1,800',
        priceUSD: '$55',
        unit: 'per session (60 mins)',
        description: 'Includes child interaction and brief parent intake/feedback.',
        isPopular: false,
        buttonLabel: 'Book Initial Assessment',
        buttonTo: '/booking'
      },
      {
        title: 'Developmental Package',
        priceINR: '₹9,000',
        priceUSD: '$250',
        unit: '6 sessions package',
        description: 'Comprehensive emotional support with regular parent progress updates.',
        isPopular: true,
        popularBadge: 'Recommended',
        buttonLabel: 'View Package Details',
        buttonTo: '/packages'
      }
    ],
    buttonLabel: 'Book Child & Adolescent Session',
    buttonTo: '/booking'
  }
];

const programOptions = [
  {
    title: 'Workshops & Seminars',
    description:
      'Interactive, outcome-driven group sessions designed to build emotional intelligence, resilience, and actionable coping skills.',
    offerings: [
      'Anxiety management & grounding toolkits',
      'Mindfulness and nervous system regulation',
      'Burnout prevention and emotional fatigue',
      'Self-care and boundary work'
    ],
    sessionCards: [
      {
        title: 'Single Workshop',
        priceINR: '₹2,000',
        priceUSD: '$60',
        unit: 'per attendee',
        description: 'Great for single masterclasses or intensive focused learning.',
        isPopular: false,
        buttonLabel: 'Book Workshop',
        buttonTo: '/contact'
      },
      {
        title: 'Workshop Series',
        priceINR: '₹10,000',
        priceUSD: '$280',
        unit: '4-part module',
        description: 'Ideal for schools, communities, or institutions seeking deep impact.',
        isPopular: true,
        popularBadge: 'Top Rated',
        buttonLabel: 'Explore Series',
        buttonTo: '/packages'
      }
    ],
    buttonLabel: 'Explore Workshops',
    buttonTo: '/contact'
  },
  {
    title: 'Corporate Wellbeing',
    description:
      'Customized mental health and resilience strategies tailored for forward-thinking organizations and executive teams.',
    offerings: [
      'Employee wellbeing & mental health first-aid',
      'Work-life harmony & stress prevention',
      'Leadership empathy and communication workshops',
      'Custom employee assistance (EAP) programs'
    ],
    sessionCards: [
      {
        title: 'Team Intervention',
        priceINR: '₹2,500',
        priceUSD: '$75',
        unit: 'per hour / session',
        description: 'Ideal for one-off team wellness sessions or crisis support.',
        isPopular: false,
        buttonLabel: 'Book Intervention',
        buttonTo: '/contact'
      },
      {
        title: 'Quarterly Corporate Program',
        priceINR: '₹15,000',
        priceUSD: '$420',
        unit: 'monthly retainer starting',
        description: 'Holistic wellness partnership for ongoing team health.',
        isPopular: true,
        popularBadge: 'Best Value',
        buttonLabel: 'Request Corporate Deck',
        buttonTo: '/contact'
      }
    ],
    buttonLabel: 'Discuss Corporate Wellness',
    buttonTo: '/contact'
  }
];

const trustPoints = [
  'Compassionate, evidence-informed care grounded in empathy and clinical safety.',
  'Culturally sensitive, personalized treatment plans tailored to your pace.',
  'Strict confidentiality and encrypted telehealth platforms.',
  'Seamless booking and flexible online / offline appointment slots.'
];

const testimonialsEmbed = `
<div class="embedsocial-hashtag" data-ref="5a9e4df14a5acc6ab06abed6ad66a848d96b1b8d"> 
  <a class="feed-powered-by-es feed-powered-by-es-feed-img es-widget-branding" href="https://embedsocial.com/google-reviews-widget/" target="_blank" title="Embed Google reviews" >
    <img src="https://embedsocial.com/cdn/icon/embedsocial-logo.webp" alt="EmbedSocial" />
    <div class="es-widget-branding-text">Embed Google reviews</div>
  </a>
</div>
<script>(function(d, s, id) { var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = "https://embedsocial.com/cdn/ht.js"; d.getElementsByTagName('head')[0].appendChild(js); }(document, "script", "EmbedSocialHashtagScript"));</script>
`;

const Services = () => {
  const [currencyRegion, setCurrencyRegion] = useState('ALL'); // 'ALL' | 'INR' | 'USD'

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fbfa] text-[#183436] font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,114,114,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(15,95,97,0.08),_transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#bfe1df] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#0a7272] shadow-sm">
              <Sparkles size={16} />
              Professional Therapy & Wellbeing Services
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-[#0d4f50] sm:text-5xl lg:text-6xl">
              Grounded care for healing, clarity, and emotional balance.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4c6162]">
              Structured psychological support for individuals, young adults, and organizations.
              Available locally in Faridabad and virtually across India and worldwide.
            </p>

            {/* Currency Filter Bar */}
            <div className="mt-8 rounded-2xl border border-[#d7ecec] bg-white p-3 shadow-sm inline-flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0a7272] px-2">
                Display Currency:
              </span>
              <div className="flex bg-[#f0f8f8] p-1 rounded-xl">
                <button
                  onClick={() => setCurrencyRegion('ALL')}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition ${
                    currencyRegion === 'ALL'
                      ? 'bg-[#0a7272] text-white shadow-sm'
                      : 'text-[#4c6162] hover:text-[#0a7272]'
                  }`}
                >
                  Both (INR & USD)
                </button>
                <button
                  onClick={() => setCurrencyRegion('INR')}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition ${
                    currencyRegion === 'INR'
                      ? 'bg-[#0a7272] text-white shadow-sm'
                      : 'text-[#4c6162] hover:text-[#0a7272]'
                  }`}
                >
                  🇮🇳 India (INR ₹)
                </button>
                <button
                  onClick={() => setCurrencyRegion('USD')}
                  className={`px-3 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition ${
                    currencyRegion === 'USD'
                      ? 'bg-[#0a7272] text-white shadow-sm'
                      : 'text-[#4c6162] hover:text-[#0a7272]'
                  }`}
                >
                  🌐 International (USD $)
                </button>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a7272] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#095f5f] shadow-md hover:shadow-lg"
              >
                Book Consultation
                <ArrowRight size={16} />
              </Link>

              <a
                href="#therapy"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a7272]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#0a7272] transition hover:bg-[#edf7f5]"
              >
                Explore Offerings
              </a>
            </div>
          </div>

          {/* Quick Info Feature Box */}
          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-[#0a7272] p-8 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/5 rounded-full blur-2xl pointer-events-none" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-teal-200">
                Format & Availability
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <Globe2 size={20} className="text-teal-200" />
                    <p className="font-semibold text-base">International & Pan-India Online</p>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-white/85">
                    Secure Video Sessions in USD ($) and INR (₹) across time zones.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-md border border-white/10">
                  <div className="flex items-center gap-3">
                    <MapPin size={20} className="text-teal-200" />
                    <p className="font-semibold text-base">In-Person Practice</p>
                  </div>
                  <p className="mt-1.5 text-sm leading-6 text-white/85">
                    Private clinic consultations available in Faridabad, Haryana.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#d7ecec] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[#0a7272]">
                  <ShieldCheck size={18} />
                  <p className="text-sm font-semibold">Strict Confidentiality</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#4c6162]">
                  Safe, non-judgmental space governed by clinical ethics.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#d7ecec] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[#0a7272]">
                  <CalendarHeart size={18} />
                  <p className="text-sm font-semibold">Flexible Scheduling</p>
                </div>
                <p className="mt-2 text-xs leading-5 text-[#4c6162]">
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
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#0a7272] px-6 py-3.5 text-sm font-semibold text-white shadow-2xl transition hover:scale-105 hover:bg-[#0d5c5e]"
      >
        <MessageCircle size={18} />
        Book Consultation
      </Link>

      {/* Therapy Section */}
      <section id="therapy" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a7272] bg-[#eaf6f6] px-3 py-1 rounded-full">
              Clinical Therapy
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d4f50] sm:text-4xl">
              Personalized Therapeutic Support
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4c6162]">
              Evidence-based modalities designed to meet you where you are, fostering self-awareness, resilience, and emotional equilibrium.
            </p>
          </div>

          <div className="mt-12 space-y-12">
            {therapyOptions.map((item) => (
              <div
                key={item.id}
                className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-6 sm:p-8 lg:p-10 shadow-sm"
              >
                <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
                  {/* Left Column: Details & Concerns */}
                  <div className="flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                          <HeartHandshake size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#0d4f50]">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-4 text-base leading-relaxed text-[#4c6162]">
                        {item.description}
                      </p>

                      <div className="mt-6 rounded-2xl bg-[#f7fcfb] p-5 border border-[#e3f2f1]">
                        <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272]">
                          Key Focus Areas & Concerns
                        </h4>
                        <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
                          {item.concerns.map((concern) => (
                            <div
                              key={concern}
                              className="flex items-center gap-2.5 text-sm text-[#3b4f50]"
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
                        className="inline-flex items-center gap-2 rounded-full border-2 border-[#0a7272] px-6 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#0a7272] hover:text-white"
                      >
                        {item.buttonLabel}
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Pricing Cards Side-by-Side */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {item.sessionCards.map((card) => (
                      <div
                        key={card.title}
                        className={`relative rounded-[2rem] p-6 transition flex flex-col justify-between ${
                          card.isPopular
                            ? 'bg-gradient-to-br from-[#0a7272] to-[#0d5c5e] text-white shadow-xl ring-2 ring-[#0a7272]/30 scale-[1.02]'
                            : 'bg-[#f8fcfc] border border-[#d7ecec] text-[#183436]'
                        }`}
                      >
                        {/* Popular / Recommended Badge */}
                        {card.isPopular && (
                          <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-amber-400 px-3 py-1 text-xs font-bold text-slate-900 shadow-md">
                            <Flame size={13} className="text-amber-900 fill-amber-900" />
                            {card.popularBadge}
                          </div>
                        )}

                        <div>
                          <p
                            className={`text-sm font-bold ${
                              card.isPopular ? 'text-teal-100' : 'text-[#0a7272]'
                            }`}
                          >
                            {card.title}
                          </p>

                          {/* Pricing Display */}
                          <div className="mt-4 space-y-1">
                            {(currencyRegion === 'ALL' || currencyRegion === 'INR') && (
                              <div className="flex items-baseline gap-2">
                                <span className="text-3xl font-extrabold tracking-tight">
                                  {card.priceINR}
                                </span>
                                <span
                                  className={`text-xs font-semibold ${
                                    card.isPopular ? 'text-teal-200' : 'text-[#5a7273]'
                                  }`}
                                >
                                  (India / INR)
                                </span>
                              </div>
                            )}

                            {(currencyRegion === 'ALL' || currencyRegion === 'USD') && (
                              <div className="flex items-baseline gap-2">
                                <span
                                  className={`text-2xl font-bold ${
                                    card.isPopular ? 'text-teal-100' : 'text-[#0d4f50]'
                                  }`}
                                >
                                  {card.priceUSD}
                                </span>
                                <span
                                  className={`text-xs font-semibold ${
                                    card.isPopular ? 'text-teal-200' : 'text-[#5a7273]'
                                  }`}
                                >
                                  (International / USD)
                                </span>
                              </div>
                            )}

                            <p
                              className={`text-xs mt-1 ${
                                card.isPopular ? 'text-teal-100/80' : 'text-[#6b8283]'
                              }`}
                            >
                              {card.unit}
                            </p>
                          </div>

                          <p
                            className={`mt-4 text-xs leading-relaxed ${
                              card.isPopular ? 'text-white/90' : 'text-[#4c6162]'
                            }`}
                          >
                            {card.description}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-current/10">
                          <Link
                            to={card.buttonTo}
                            className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition ${
                              card.isPopular
                                ? 'bg-white text-[#0a7272] hover:bg-teal-50'
                                : 'bg-[#0a7272] text-white hover:bg-[#095f5f]'
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

      {/* Programs Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8 bg-[#f0f8f7]">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#0a7272] bg-white px-3 py-1 rounded-full border border-[#bfe1df]">
              Workshops & Organizations
            </span>
            <h2 className="mt-4 text-3xl font-bold text-[#0d4f50] sm:text-4xl">
              Wellness Programs & Institutional Care
            </h2>
            <p className="mt-3 text-lg leading-relaxed text-[#4c6162]">
              Tailored group interventions, capacity-building workshops, and organizational wellbeing solutions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {programOptions.map((item) => (
              <div
                key={item.title}
                className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-8 shadow-sm flex flex-col justify-between transition hover:shadow-md"
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                      {item.title.includes('Workshops') ? (
                        <Sparkles size={22} />
                      ) : (
                        <Building2 size={22} />
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-[#0d4f50]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#4c6162]">
                    {item.description}
                  </p>

                  <div className="mt-6 space-y-2">
                    {item.offerings.map((offering) => (
                      <div
                        key={offering}
                        className="flex items-center gap-3 rounded-xl bg-[#f7fcfb] p-3 text-xs sm:text-sm text-[#3b4f50]"
                      >
                        <Check size={16} className="text-[#0a7272] shrink-0" />
                        <span>{offering}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing Grid */}
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {item.sessionCards.map((card) => (
                      <div
                        key={card.title}
                        className={`relative rounded-2xl p-5 border ${
                          card.isPopular
                            ? 'border-[#0a7272] bg-[#f0f8f8]'
                            : 'border-[#d7ecec] bg-white'
                        }`}
                      >
                        {card.isPopular && (
                          <span className="absolute -top-2.5 right-4 bg-[#0a7272] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full">
                            {card.popularBadge}
                          </span>
                        )}

                        <p className="text-xs font-bold text-[#0d4f50]">
                          {card.title}
                        </p>

                        <div className="mt-2">
                          {(currencyRegion === 'ALL' || currencyRegion === 'INR') && (
                            <div className="text-lg font-bold text-[#0a7272]">
                              {card.priceINR}{' '}
                              <span className="text-[10px] font-normal text-[#5a7273]">
                                INR
                              </span>
                            </div>
                          )}
                          {(currencyRegion === 'ALL' || currencyRegion === 'USD') && (
                            <div className="text-base font-bold text-[#0d4f50]">
                              {card.priceUSD}{' '}
                              <span className="text-[10px] font-normal text-[#5a7273]">
                                USD
                              </span>
                            </div>
                          )}
                          <p className="text-[11px] text-[#6b8283]">{card.unit}</p>
                        </div>

                        <p className="mt-2 text-[11px] text-[#4c6162] leading-tight">
                          {card.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <Link
                    to={item.buttonTo}
                    className="inline-flex items-center gap-2 rounded-full border border-[#0a7272] px-6 py-3 text-xs sm:text-sm font-semibold text-[#0a7272] transition hover:bg-[#0a7272] hover:text-white"
                  >
                    {item.buttonLabel}
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Trust Points */}
          <div className="rounded-[2.5rem] bg-[#0f5f61] p-8 sm:p-10 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/10 p-3 text-teal-200">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold">Client-Centered Practice</h2>
              </div>

              <div className="mt-8 space-y-4">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 p-4 text-sm leading-relaxed text-teal-50 border border-white/5"
                  >
                    <CheckCircle2 size={18} className="text-teal-300 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="rounded-[2.5rem] border border-[#d7ecec] bg-white p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-amber-500 mb-2">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4f50]">
                Client Experiences
              </h2>
              <p className="mt-2 text-sm text-[#4c6162]">
                Reflections from individuals supported across India and internationally.
              </p>

              <div className="mt-6">
                <div dangerouslySetInnerHTML={{ __html: testimonialsEmbed }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location / Booking Bar */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#eaf6f6] via-white to-[#eef8f7] p-8 sm:p-10 border border-[#d7ecec] shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0a7272]">
                Location & Accessibility
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-[#0d4f50]">
                In-person in Faridabad, virtual globally.
              </h2>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-[#4c6162]">
                Schedule in-person consultations in Faridabad or seamlessly connect via encrypted video calls from anywhere globally.
              </p>
            </div>

            <div className="rounded-2xl border border-[#d7ecec] bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-xl bg-[#0a7272] p-2.5 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-[#0d4f50]">Faridabad, Haryana</p>
                  <p className="text-xs text-[#4c6162] mt-0.5">
                    Sector 88,Kheri Road
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://psychobeings.com/booking"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0a7272] px-5 py-2.5 text-xs font-bold text-white transition hover:bg-[#0d5c5e]"
                >
                  Book Slot Online
                </a>
                <a
                  href="https://maps.app.goo.gl/oqDJRvWrNSt5ULPBA"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#0a7272] px-5 py-2.5 text-xs font-bold text-[#0a7272] transition hover:bg-[#f7fcfb]"
                >
                  Open Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;