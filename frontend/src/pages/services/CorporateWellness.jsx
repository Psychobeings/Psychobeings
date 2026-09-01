import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  MapPin,
  MessageCircle,
  CheckCircle2,
  Globe2,
  CalendarHeart,
  Flame,
  Clock,
  Building2
} from 'lucide-react';

const CorporateWellness = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sessionData = [
    {
      title: 'Single Team Session',
      badge: 'One-Time Intervention',
      isPopular: false,
      priceINR: '₹2,500',
      priceUSD: '$75',
      unit: 'per hour / team',
      description: 'Perfect for team wellness days, stress relief sessions, or crisis intervention. Tailored to your team\'s specific needs.',
      features: ['Customized content', 'Interactive format', 'Post-session resources']
    },
    {
      title: 'Quarterly Corporate Partnership',
      badge: 'Best Value',
      isPopular: true,
      priceINR: '₹15,000',
      priceUSD: '$420',
      unit: 'monthly retainer (starting)',
      description: 'Ongoing strategic partnership with regular workshops, team counseling sessions, and leadership training tailored to your organization.',
      features: ['Monthly wellness workshops', 'Emergency counseling access', 'Leadership training', 'Customized strategy']
    }
  ];

  const faqItems = [
    {
      question: 'How does corporate wellness improve employee performance?',
      answer: 'Employees with good mental health show 25% higher productivity, fewer absences, and better engagement. Our programs reduce stress-related turnover, improve team dynamics, and create a positive workplace culture.'
    },
    {
      question: 'What topics can you cover in workshops?',
      answer: 'We offer sessions on stress management, work-life balance, leadership communication, burnout prevention, team resilience, emotional intelligence, mindfulness, and customized topics based on your organizational needs.'
    },
    {
      question: 'Is participation confidential?',
      answer: 'Yes. While we report on program metrics (participation rates, satisfaction), individual employee information and workshop disclosures remain completely confidential.'
    },
    {
      question: 'Can you work with remote or hybrid teams?',
      answer: 'Absolutely! We offer online team sessions, virtual workshops, and hybrid formats that work for distributed teams. Digital wellness is equally effective.'
    },
    {
      question: 'How do we measure the impact of the program?',
      answer: 'We track employee satisfaction, participation rates, absenteeism changes, and collect feedback through surveys. We provide quarterly reports showing program ROI and employee wellbeing metrics.'
    },
    {
      question: 'What makes your corporate program different?',
      answer: 'We take a holistic, human-centered approach. Rather than generic programs, we customize interventions to your organization\'s culture and challenges, with ongoing support and evidence-based practices.'
    }
  ];

  const programs = [
    'Executive stress management',
    'Team resilience building',
    'Leadership emotional intelligence',
    'Work-life balance & burnout prevention',
    'Conflict resolution & communication',
    'Mindfulness & wellness sessions',
    'Change management support',
    'Crisis intervention support'
  ];

  const benefits = [
    {
      title: '📈 Increased Productivity',
      description: 'Healthy teams perform better with improved focus and engagement'
    },
    {
      title: '📉 Reduced Absenteeism',
      description: 'Better mental health means fewer sick days and absences'
    },
    {
      title: '👥 Improved Team Dynamics',
      description: 'Better communication and relationship-building within teams'
    },
    {
      title: '🎯 Stronger Retention',
      description: 'Employees stay longer when they feel supported and valued'
    },
    {
      title: '💼 Enhanced Leadership',
      description: 'Leaders develop better emotional intelligence and empathy'
    },
    {
      title: '🌱 Positive Culture',
      description: 'Create a workplace where mental health is prioritized'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="px-4 py-3 sm:px-6 lg:px-8 border-b border-[#edf7f7] bg-[#fbfdfd]">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs sm:text-sm text-[#6b7280]">
          <Link to="/services" className="text-[#036b75] font-medium hover:underline">Services</Link>
          <span>→</span>
          <span>Corporate Wellness</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#036b75] shadow-sm">
            <Building2 size={16} className="text-[#036b75]" />
            Wellness for Workplace Success
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827]">
            Corporate <br className="hidden sm:inline" />
            <span className="text-[#036b75]">Wellness Programs</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            Strategic mental health solutions that boost employee wellbeing, reduce burnout, and create a thriving organizational culture.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Clock size={16} className="text-[#036b75]" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Globe2 size={16} className="text-[#036b75]" />
              <span>Remote & In-Person</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Heart size={16} className="text-[#036b75]" />
              <span>Customized Programs</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">

          {/* What is Corporate Wellness */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  About Our Program
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  What is Corporate Wellness?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Corporate wellness is a comprehensive approach to supporting employee mental health and wellbeing. It includes workshops, counseling access, stress management training, and leadership development—all tailored to your organization's unique culture and challenges.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  When employees feel supported and equipped to manage stress, the entire organization benefits through improved productivity, lower turnover, better teamwork, and a positive workplace culture.
                </p>
              </div>
              <div className="bg-[#edf7f7]/50 rounded-2xl p-8 border border-[#d8ecec]">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Evidence-Based</h3>
                      <p className="text-sm text-[#4b5563]">Built on psychological research and proven effectiveness</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Measurable Impact</h3>
                      <p className="text-sm text-[#4b5563]">Track ROI through employee satisfaction and engagement metrics</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Building2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Organization-Focused</h3>
                      <p className="text-sm text-[#4b5563]">Customized to your company's specific needs and culture</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Corporate Wellness */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Business Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Why Invest in Corporate Wellness?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Organizations investing in employee wellness see significant returns across multiple metrics:
            </p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                  <h3 className="font-bold text-[#111827] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#4b5563]">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-amber-50 border border-amber-200 p-6">
              <p className="text-sm text-amber-900">
                <strong>📊 Industry Data:</strong> Companies with strong wellness programs see up to 28% reduction in absenteeism, 26% decrease in healthcare costs, and 36% improvement in productivity metrics.
              </p>
            </div>
          </div>

          {/* Programs We Offer */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Programs & Services
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Corporate Wellness Programs We Offer
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Our comprehensive wellness solutions include:
            </p>
            
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {programs.map((program) => (
                <div key={program} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#036b75] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#111827]">{program}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Our Methodology
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Our Corporate Wellness Approach
            </h2>
            
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🔍 Assessment Phase</h3>
                <p className="text-sm text-[#4b5563]">We start by understanding your organization's unique challenges, culture, and employee needs through confidential surveys and leadership conversations.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🎯 Customization</h3>
                <p className="text-sm text-[#4b5563]">We design tailored programs and workshops based on your findings, addressing specific pain points like stress, burnout, communication, or leadership development.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">📅 Implementation</h3>
                <p className="text-sm text-[#4b5563]">We deliver workshops, team sessions, and counseling support on a schedule that works for your organization. Flexible timing for remote, hybrid, or in-person teams.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">📊 Measurement & Reporting</h3>
                <p className="text-sm text-[#4b5563]">We track outcomes through employee satisfaction, participation rates, and organizational metrics. Quarterly reports show impact and ROI of the program.</p>
              </div>
            </div>
          </div>

          {/* Currency Toggle & Pricing */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl bg-[#edf7f7] p-4 border border-[#d8ecec]">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#111827] font-semibold">
                <span>Display pricing for your location:</span>
              </div>
              <div className="flex bg-white p-1 rounded-xl border border-[#d8ecec]">
                <button
                  onClick={() => setCurrency('INR')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                    currency === 'INR'
                      ? 'bg-[#036b75] text-white'
                      : 'text-[#4b5563]'
                  }`}
                >
                  🇮🇳 INR ₹
                </button>
                <button
                  onClick={() => setCurrency('USD')}
                  className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                    currency === 'USD'
                      ? 'bg-[#036b75] text-white'
                      : 'text-[#4b5563]'
                  }`}
                >
                  🌐 USD $
                </button>
              </div>
            </div>

            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Session Details & Pricing
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Corporate Wellness Packages
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Flexible options tailored to organizations of all sizes. All programs available online or in-person.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {sessionData.map((session) => (
                <div
                  key={session.title}
                  className={`relative rounded-[2rem] p-6 transition flex flex-col justify-between ${
                    session.isPopular
                      ? 'bg-[#036b75] text-white shadow-xl scale-[1.02]'
                      : 'bg-[#fbfdfd] border border-[#d8ecec] text-[#111827]'
                  }`}
                >
                  {session.isPopular && (
                    <div className="absolute -top-3 right-6 inline-flex items-center gap-1 rounded-full bg-amber-300 px-3 py-0.5 text-[11px] font-extrabold text-slate-900 shadow-xs">
                      <Flame size={12} className="fill-amber-900" />
                      {session.badge}
                    </div>
                  )}

                  <div>
                    {!session.isPopular && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#036b75]">
                        {session.badge}
                      </span>
                    )}

                    <h3 className="mt-2 text-lg font-bold">{session.title}</h3>

                    <div className="mt-4">
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold">
                          {currency === 'INR' ? session.priceINR : session.priceUSD}
                        </span>
                        <span className={`text-xs ${session.isPopular ? 'text-teal-100' : 'text-[#6b7280]'}`}>
                          / {currency}
                        </span>
                      </div>
                      <p className={`mt-1 text-xs font-medium ${session.isPopular ? 'text-teal-100/90' : 'text-[#4b5563]'}`}>
                        {session.unit}
                      </p>
                    </div>

                    <p className={`mt-4 text-xs leading-relaxed ${session.isPopular ? 'text-white/90' : 'text-[#4b5563]'}`}>
                      {session.description}
                    </p>

                    <div className={`mt-4 space-y-2 ${session.isPopular ? 'text-teal-100/90' : 'text-[#4b5563]'}`}>
                      {session.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-2 text-xs">
                          <span className="text-lg mt-px">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-current/10">
                    <Link
                      to="/contact"
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition shadow-xs ${
                        session.isPopular
                          ? 'bg-white text-[#036b75] hover:bg-teal-50'
                          : 'bg-[#036b75] text-white hover:bg-[#02565e]'
                      }`}
                    >
                      Request a Session
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#edf7f7] p-6 border border-[#d8ecec]">
              <p className="text-sm text-[#4b5563]">
                <strong className="text-[#036b75]">💡 Customizable Solutions:</strong> We tailor all programs to your organization's size, industry, and specific needs. Pricing and formats are flexible. <strong>Contact us for a personalized corporate wellness proposal.</strong>
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  Location
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  Our Base Location
                </h2>
                
                <div className="mt-6 space-y-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#036b75]">Address</p>
                    <p className="mt-2 text-sm leading-relaxed text-[#111827]">
                      C-6, Ground Floor, RPS Palms<br />
                      near Yatharth Hospital<br />
                      Sector 88, Faridabad<br />
                      Haryana, 121002
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#036b75]">Delivery Formats</p>
                    <p className="mt-2 text-sm text-[#4b5563]">
                      ✓ In-office sessions in Faridabad<br />
                      ✓ Virtual/online programs for remote teams<br />
                      ✓ Hybrid solutions for mixed teams
                    </p>
                  </div>
                </div>

                <Link
                  to="https://maps.google.com/?q=RPS+Palms+Sector+88+Faridabad"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#036b75] px-6 py-3 text-sm font-bold text-white hover:bg-[#02565e] transition"
                >
                  <MapPin size={16} />
                  Find Us on Google Maps
                </Link>
              </div>

              <div className="rounded-2xl overflow-hidden border border-[#d8ecec] h-80">
                <iframe
                  title="PSYCHOBEINGS Location"
                  src="https://www.google.com/maps?q=RPS+Palms+Sector+88+Faridabad&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              FAQ
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Corporate Wellness FAQs
            </h2>

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

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] bg-[#036b75] p-8 sm:p-12 text-white shadow-xl">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-200">
                Transform Your Workplace Culture
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Invest in your employees' wellbeing today.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/90">
                Let's discuss how we can create a customized wellness program that fits your organization's unique needs and budget.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#036b75] transition hover:bg-teal-50 shadow-sm"
              >
                <MessageCircle size={16} />
                Request a Proposal
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20"
              >
                <CalendarHeart size={16} />
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateWellness;
