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
  ShieldCheck,
  Sparkles,
  Compass,
  Smile,
  ChevronDown
} from 'lucide-react';

const IndividualCounselling = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sessionData = [
    {
      title: 'Single Exploration Session',
      badge: 'Initial Consultation',
      isPopular: false,
      priceINR: '₹1,500',
      priceUSD: '$35',
      unit: '50-minute session',
      description: 'Ideal for a first step to discuss what you are navigating and map out a gentle, clear path forward.',
      features: ['Comprehensive initial assessment', 'Immediate coping frameworks', 'Tailored goal setting']
    },
    {
      title: 'Sustained Growth Journey',
      badge: 'Most Popular',
      isPopular: true,
      priceINR: '₹8,000',
      priceUSD: '$180',
      unit: '6 sessions package',
      description: 'Recommended for steady progress, continuous support, deep coping strategies, and meaningful healing.',
      features: ['6 structured sessions', 'Personalized long-term coping toolkit', 'Progress tracking & continuity']
    }
  ];

  const faqItems = [
    {
      question: 'Who is individual therapy suitable for?',
      answer: 'Individual therapy is designed for adults seeking personal growth, healing from past trauma, managing anxiety, depression, or navigating major life transitions. Anyone feeling stuck or wanting professional support to understand themselves better is a great fit.'
    },
    {
      question: 'What can I expect in the first session?',
      answer: 'Your first session is an intake meeting where we discuss what brought you in, your current challenges, past experiences, and goals for therapy. This helps us understand your unique situation and create a personalized treatment plan.'
    },
    {
      question: 'How long does therapy typically take to show results?',
      answer: 'Everyone\'s journey is different. Some people feel relief and clarity within 2-3 sessions, while deeper healing may take several months. Consistency and openness are key factors that influence progress.'
    },
    {
      question: 'Is therapy confidential?',
      answer: 'Yes, complete confidentiality is guaranteed under strict professional ethics guidelines. There are only rare exceptions related to immediate risk of harm. Your privacy and trust are paramount.'
    },
    {
      question: 'Can I do therapy online?',
      answer: 'Absolutely! We offer secure, encrypted video therapy sessions that are just as effective as in-person sessions. You can choose what works best for your schedule and comfort level.'
    }
  ];

  const concerns = [
    'Anxiety and panic attacks',
    'Depression and low mood',
    'Stress and burnout',
    'Relationship difficulties',
    'Self-esteem and confidence issues',
    'Work-life balance',
    'Grief and loss',
    'Life transitions',
    'Perfectionism and overthinking',
    'Difficulty setting boundaries'
  ];

  const approachPoints = [
    {
      title: 'Person-Centered',
      description: 'We meet you exactly where you are, respecting your unique emotional pace and lived experience.',
      icon: <Smile className="text-[#036b75]" size={22} />
    },
    {
      title: 'Evidence-Based',
      description: 'We ground our practice in proven therapeutic techniques like CBT, mindfulness, and psychodynamic approaches.',
      icon: <Sparkles className="text-[#036b75]" size={22} />
    },
    {
      title: 'Empathetic & Safe',
      description: 'A deeply supportive space where you can express yourself completely without fear of judgment.',
      icon: <ShieldCheck className="text-[#036b75]" size={22} />
    },
    {
      title: 'Collaborative',
      description: 'We work together as a dedicated team toward your personal goals, honoring your autonomy.',
      icon: <Compass className="text-[#036b75]" size={22} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#fcfefd] text-[#111827] font-sans antialiased selection:bg-[#edf7f7] selection:text-[#036b75]">
      
      {/* Breadcrumb */}
      <div className="border-b border-[#edf7f7] bg-[#fcfefd] px-4 py-3 sm:px-8">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs sm:text-sm text-[#6b7280]">
          <Link to="/services" className="text-[#036b75] font-semibold hover:underline">Services</Link>
          <span className="text-slate-300">/</span>
          <span className="text-slate-700 font-medium">Individual Counselling</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7]/70 via-[#f7fbfb]/50 to-[#fcfefd] px-4 pt-16 pb-20 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-bold text-[#036b75] shadow-xs">
            <Heart size={16} className="fill-[#036b75]" />
            1-on-1 Therapeutic Support
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#111827] leading-[1.15]">
            Individual <span className="text-[#036b75]">Counselling & Therapy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            A safe, confidential sanctuary to process complex emotions, heal from past experiences, and develop sustainable strategies for a more fulfilling life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#d8ecec] shadow-2xs">
              <Clock size={16} className="text-[#036b75]" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#d8ecec] shadow-2xs">
              <Globe2 size={16} className="text-[#036b75]" />
              <span>Online & In-Person</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-full border border-[#d8ecec] shadow-2xs">
              <ShieldCheck size={16} className="text-[#036b75]" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container with Streamlined Padding & Gaps */}
      <main className="px-4 py-12 sm:px-8 max-w-7xl mx-auto space-y-16">

        {/* SECTION 1: What is Individual Counselling */}
        <section className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-12 shadow-xs">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
                Core Overview
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111827] tracking-tight">
                What is Individual Therapy?
              </h2>
              <p className="text-base leading-relaxed text-[#4b5563]">
                Individual counselling is a deeply personal, confidential relationship where you work alongside a trained psychologist to explore your inner world—your thoughts, behavioral patterns, and emotional blocks. 
              </p>
              <p className="text-base leading-relaxed text-[#4b5563]">
                Whether you are dealing with a specific crisis or seeking broad self-discovery, this space allows you to unburden yourself and build practical resilience tailored completely to your pace.
              </p>
            </div>

            <div className="lg:col-span-5 bg-[#f7fbfb] rounded-2xl p-6 sm:p-8 border border-[#d8ecec] space-y-6">
              <div className="flex gap-4 items-start">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                  <MessageCircle size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Safe & Confidential</h3>
                  <p className="text-xs text-[#4b5563] mt-1 leading-normal">Absolute privacy protected by rigorous ethical standards.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                  <CheckCircle2 size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Customized Frameworks</h3>
                  <p className="text-xs text-[#4b5563] mt-1 leading-normal">No cookie-cutter models; care designed around your unique narrative.</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                  <Heart size={22} />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#111827]">Genuine Empathy</h3>
                  <p className="text-xs text-[#4b5563] mt-1 leading-normal">Met by certified professionals who listen without bias or judgment.</p>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 2: Benefits & Impact */}
        <section className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
              Benefits & Impact
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#111827] tracking-tight">
              Why Choose Individual Therapy?
            </h2>
            <p className="mt-3 text-base text-[#4b5563]">
              Committing to therapy unlocks deep emotional shifts that cascade into every area of your personal and professional life.
            </p>
          </div>
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Clarity & Self-Understanding', desc: 'Uncover the root drivers behind repeating emotional loops and behavioral reactions.' },
              { title: 'Practical Coping Toolkit', desc: 'Master evidence-based mechanisms to lower acute anxiety, stress, and panic.' },
              { title: 'Trauma & Grief Processing', desc: 'Heal from heavy past experiences gently within a safe, holding environment.' },
              { title: 'Relational Health', desc: 'Improve boundary-setting, communication style, and interpersonal connection.' },
              { title: 'Empowered Growth', desc: 'Break free from chronic overthinking, self-doubt, and self-sabotaging mindsets.' },
              { title: 'Sustainable Balance', desc: 'Manage professional burnout and build restorative, nurturing daily routines.' }
            ].map((benefit, idx) => (
              <div key={idx} className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]/80 flex flex-col justify-between hover:border-[#036b75]/40 transition-all">
                <h3 className="font-bold text-sm sm:text-base text-[#111827] mb-2">{benefit.title}</h3>
                <p className="text-xs sm:text-sm leading-relaxed text-[#4b5563]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: Concerns We Work With (Asymmetric Card Layout) */}
        <section className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-12 shadow-xs">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            
            <div className="lg:col-span-4 space-y-4">
              <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
                Specializations
              </span>
              <h2 className="text-3xl font-black text-[#111827] tracking-tight">
                Concerns We Navigate Together
              </h2>
              <p className="text-sm text-[#4b5563] leading-relaxed">
                Our practitioners bring deep clinical expertise across a wide spectrum of emotional hurdles and psychological conditions.
              </p>
            </div>

            <div className="lg:col-span-8 grid gap-3 sm:grid-cols-2">
              {concerns.map((concern) => (
                <div key={concern} className="flex items-center gap-3.5 p-4 rounded-xl bg-[#f7fbfb] border border-[#d8ecec]/60">
                  <CheckCircle2 size={18} className="text-[#036b75] shrink-0" />
                  <span className="text-xs sm:text-sm font-semibold text-[#111827]">{concern}</span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* SECTION 4: Our Therapeutic Approach */}
        <section className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-12 shadow-xs">
          <div className="max-w-2xl">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
              Our Philosophy
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#111827] tracking-tight">
              How We Practice
            </h2>
          </div>
          
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {approachPoints.map((point) => (
              <div key={point.title} className="rounded-2xl bg-[#f7fbfb] p-6 sm:p-8 border border-[#d8ecec] flex gap-5 items-start">
                <div className="p-3.5 rounded-xl bg-[#036b75]/10 shrink-0">
                  {point.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base text-[#111827] mb-1.5">{point.title}</h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#4b5563]">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-[#036b75] text-white p-6 sm:p-8 shadow-md">
            <p className="text-xs sm:text-sm leading-relaxed font-medium">
              <strong className="text-teal-200">Our Core Belief:</strong> Therapy is never about "fixing" you because you are not broken. It is about unpacking patterns, learning self-compassion, and acquiring the necessary architecture to author your own wellness.
            </p>
          </div>
        </section>

        {/* SECTION 5: Currency Toggle & Pricing */}
        <section className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-12 shadow-xs">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 rounded-2xl bg-[#edf7f7]/60 p-4 border border-[#d8ecec]">
            <span className="text-xs sm:text-sm font-semibold text-[#111827]">
              Select currency for your location:
            </span>
            <div className="flex bg-white p-1 rounded-xl border border-[#d8ecec] shadow-2xs">
              <button
                onClick={() => setCurrency('INR')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                  currency === 'INR' ? 'bg-[#036b75] text-white shadow-xs' : 'text-[#4b5563]'
                }`}
              >
                🇮🇳 INR ₹
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`px-4 py-1.5 text-xs font-bold rounded-lg transition ${
                  currency === 'USD' ? 'bg-[#036b75] text-white shadow-xs' : 'text-[#4b5563]'
                }`}
              >
                🌐 USD $
              </button>
            </div>
          </div>

          <div className="max-w-2xl mb-10">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
              Investment & Formats
            </span>
            <h2 className="mt-3 text-3xl font-black text-[#111827] tracking-tight">
              Choose Your Session Option
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#4b5563]">
              All individual offerings are accessible globally via secure video conferencing or in person at our Faridabad center.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
            {sessionData.map((session) => (
              <div
                key={session.title}
                className={`relative rounded-3xl p-8 transition-all flex flex-col justify-between ${
                  session.isPopular
                    ? 'bg-[#036b75] text-white shadow-xl ring-2 ring-[#036b75]'
                    : 'bg-[#fcfefd] border border-[#d8ecec] text-[#111827]'
                }`}
              >
                {session.isPopular && (
                  <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-amber-300 px-3.5 py-1 text-[11px] font-black text-slate-900 shadow-sm">
                    <Flame size={12} className="fill-amber-900" />
                    {session.badge}
                  </div>
                )}

                <div>
                  {!session.isPopular && (
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#036b75]">
                      {session.badge}
                    </span>
                  )}

                  <h3 className="mt-2 text-xl font-black">{session.title}</h3>

                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl font-black">
                      {currency === 'INR' ? session.priceINR : session.priceUSD}
                    </span>
                    <span className={`text-xs font-medium ${session.isPopular ? 'text-teal-100' : 'text-[#6b7280]'}`}>
                      / {currency}
                    </span>
                  </div>
                  <p className={`mt-1 text-xs font-medium ${session.isPopular ? 'text-teal-100/90' : 'text-[#4b5563]'}`}>
                    {session.unit}
                  </p>

                  <p className={`mt-4 text-sm leading-relaxed ${session.isPopular ? 'text-white/90' : 'text-[#4b5563]'}`}>
                    {session.description}
                  </p>

                  <div className={`mt-6 space-y-3 pt-5 border-t ${session.isPopular ? 'border-white/15 text-teal-50' : 'border-[#edf7f7] text-[#4b5563]'}`}>
                    {session.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 size={16} className={session.isPopular ? 'text-teal-200' : 'text-[#036b75]'} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-4">
                  <Link
                    to="/booking"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3.5 text-xs sm:text-sm font-bold transition shadow-2xs ${
                      session.isPopular
                        ? 'bg-white text-[#036b75] hover:bg-teal-50'
                        : 'bg-[#036b75] text-white hover:bg-[#02565e]'
                    }`}
                  >
                    Book Your Session
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 6: Location & FAQ Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          
          {/* Location Card */}
          <div className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-10 shadow-xs flex flex-col justify-between">
            <div>
              <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
                Visit Us
              </span>
              <h2 className="mt-3 text-2xl font-black text-[#111827]">
                Our Faridabad Center
              </h2>

              <div className="mt-6 space-y-5 text-sm text-[#4b5563]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#036b75]">Address</p>
                  <p className="mt-1 text-xs sm:text-sm text-[#111827] leading-relaxed">
                    C-6, Ground Floor, RPS Palms<br />
                    Near Yatharth Hospital, Sector 88<br />
                    Faridabad, Haryana 121002
                  </p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#036b75]">Working Hours</p>
                  <p className="mt-1 text-xs sm:text-sm">Monday – Saturday: 10:00 AM – 6:00 PM<br />Sunday: By Appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-xl overflow-hidden border border-[#d8ecec] h-48">
                <iframe
                  title="PSYCHOBEINGS Location"
                  src="https://www.google.com/maps?q=RPS+Palms+Sector+88+Faridabad&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <Link
                to="https://maps.google.com/?q=RPS+Palms+Sector+88+Faridabad"
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#036b75] px-4 py-3 text-xs sm:text-sm font-bold text-white hover:bg-[#02565e] transition"
              >
                <MapPin size={16} />
                Open in Google Maps
              </Link>
            </div>
          </div>

          {/* FAQ Accordion Card */}
          <div className="bg-white rounded-3xl border border-[#d8ecec] p-8 sm:p-10 shadow-xs">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-[#036b75]">
              FAQ
            </span>
            <h2 className="mt-3 text-2xl font-black text-[#111827]">
              Frequently Asked Questions
            </h2>

            <div className="mt-6 space-y-3.5">
              {faqItems.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl border border-[#edf7f7] bg-[#fcfefd] overflow-hidden transition"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="w-full p-4 text-left flex justify-between items-center gap-4 text-xs sm:text-sm font-bold text-[#111827] hover:text-[#036b75]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown size={16} className={`text-[#036b75] transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs sm:text-sm leading-relaxed text-[#4b5563] border-t border-[#edf7f7] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </main>

      {/* Call to Action Banner */}
      <section className="px-4 pb-16 sm:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#036b75] p-8 sm:p-12 text-white shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left max-w-xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-teal-200">
              Begin Your Healing Journey
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black">
              Take the first step toward positive change today.
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-teal-100/90 leading-relaxed">
              Schedule your initial session and start your therapeutic path with our compassionate, certified team.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <Link
              to="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#036b75] hover:bg-teal-50 transition shadow-sm"
            >
              <CalendarHeart size={16} />
              Book Consultation
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/20 transition"
            >
              <MessageCircle size={16} />
              Ask Questions
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default IndividualCounselling;