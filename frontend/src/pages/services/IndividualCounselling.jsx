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
  ShieldCheck
} from 'lucide-react';

const IndividualCounselling = () => {
  const [openFaq, setOpenFaq] = useState(null);
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
      unit: '50 mins session',
      description: 'Ideal for a first step to discuss what you are navigating and map out a gentle path forward.',
      features: ['Initial assessment', 'Goal setting', 'Treatment plan discussion']
    },
    {
      title: 'Sustained Growth Journey',
      badge: 'Most Popular',
      isPopular: true,
      priceINR: '₹8,000',
      priceUSD: '$180',
      unit: '6 sessions package',
      description: 'Recommended for steady progress, continuous support, deep coping strategies, and meaningful healing.',
      features: ['6 structured sessions', 'Personalized coping strategies', 'Progress tracking']
    }
  ];

  const faqItems = [
    {
      question: 'Who is individual therapy suitable for?',
      answer: 'Individual therapy is designed for adults seeking personal growth, healing from past trauma, managing anxiety, depression, or navigating life transitions. Anyone feeling stuck or wanting professional support to understand themselves better is a great fit.'
    },
    {
      question: 'What can I expect in the first session?',
      answer: 'Your first session is an intake meeting. We will discuss what brought you in, your current challenges, past experiences, and goals for therapy. This helps us understand your unique situation and create a personalized treatment plan.'
    },
    {
      question: 'How long does therapy typically take to show results?',
      answer: 'Everyone\'s journey is different. Some people feel relief and clarity within 2-3 sessions, while deeper healing may take several months. Consistency and openness are key factors that influence progress.'
    },
    {
      question: 'Is therapy confidential?',
      answer: 'Yes, complete confidentiality is guaranteed under professional ethics guidelines. There are only rare exceptions related to immediate risk of harm. Your privacy and trust are paramount to us.'
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
      description: 'We meet you where you are, respecting your pace and unique experience.'
    },
    {
      title: 'Evidence-Based',
      description: 'We use proven therapeutic techniques like CBT, mindfulness, and psychodynamic approaches.'
    },
    {
      title: 'Empathetic & Judgment-Free',
      description: 'A safe space where you can be fully yourself without fear of judgment.'
    },
    {
      title: 'Collaborative',
      description: 'We work together as a team toward your goals, not to you.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="px-4 py-3 sm:px-6 lg:px-8 border-b border-[#edf7f7] bg-[#fbfdfd]">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs sm:text-sm text-[#6b7280]">
          <Link to="/services" className="text-[#036b75] font-medium hover:underline">Services</Link>
          <span>→</span>
          <span>Individual Counselling</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#036b75] shadow-sm">
            <Heart size={16} className="fill-[#036b75]" />
            1-on-1 Therapeutic Support
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827]">
            Individual <br className="hidden sm:inline" />
            <span className="text-[#036b75]">Counselling & Therapy</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            A safe, confidential space for you to process emotions, heal from past experiences, and develop strategies for a more fulfilling life.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Clock size={16} className="text-[#036b75]" />
              <span>Flexible scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Globe2 size={16} className="text-[#036b75]" />
              <span>Online & In-Person</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <ShieldCheck size={16} className="text-[#036b75]" />
              <span>100% Confidential</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">

          {/* What is Individual Counselling */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  Understanding Individual Counselling
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  What is Individual Therapy?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Individual counselling is a confidential, one-on-one therapeutic relationship where you work with a trained psychologist to explore your thoughts, feelings, and behaviors. It's a space where you can be completely yourself—without judgment—and develop practical strategies to improve your mental health and wellbeing.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Whether you're navigating anxiety, depression, life transitions, relationship challenges, or simply want to understand yourself better, individual therapy provides personalized support tailored to your unique needs and goals.
                </p>
              </div>
              <div className="bg-[#edf7f7]/50 rounded-2xl p-8 border border-[#d8ecec]">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Safe & Confidential Space</h3>
                      <p className="text-sm text-[#4b5563]">Complete privacy protected by professional ethics</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Personalized Approach</h3>
                      <p className="text-sm text-[#4b5563]">Treatment tailored to your specific needs</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Empathetic Support</h3>
                      <p className="text-sm text-[#4b5563]">Non-judgmental guidance from trained professionals</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Individual Therapy */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Benefits & Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Why Choose Individual Therapy?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Individual therapy offers a unique opportunity for personal transformation and healing. Here's why our clients choose this path:
            </p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🎯 Clarity & Self-Understanding</h3>
                <p className="text-sm text-[#4b5563]">Gain deeper insight into your patterns, triggers, and core beliefs that shape your life.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">💪 Develop Coping Strategies</h3>
                <p className="text-sm text-[#4b5563]">Learn practical, evidence-based techniques to manage stress, anxiety, and emotional challenges.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🌱 Heal From Past Wounds</h3>
                <p className="text-sm text-[#4b5563]">Process trauma, grief, or difficult experiences in a safe, supportive environment.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">✨ Improve Relationships</h3>
                <p className="text-sm text-[#4b5563]">Develop healthier communication patterns and relationship skills for deeper connections.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🚀 Personal Growth</h3>
                <p className="text-sm text-[#4b5563]">Break limiting patterns and achieve your full potential with professional guidance.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">⚖️ Work-Life Balance</h3>
                <p className="text-sm text-[#4b5563]">Create sustainable strategies for managing work stress and maintaining wellbeing.</p>
              </div>
            </div>
          </div>

          {/* Concerns We Work With */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Common Concerns
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Concerns We Work With
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              We provide specialized support for a wide range of emotional and psychological concerns:
            </p>
            
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {concerns.map((concern) => (
                <div key={concern} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#036b75] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#111827]">{concern}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Our Philosophy
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Our Therapeutic Approach
            </h2>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {approachPoints.map((point) => (
                <div key={point.title} className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                  <h3 className="font-bold text-[#111827] mb-2">{point.title}</h3>
                  <p className="text-sm text-[#4b5563]">{point.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#036b75] text-white p-6 sm:p-8">
              <p className="text-sm leading-relaxed">
                <strong>Our Core Belief:</strong> Therapy isn't about "fixing" you—you're not broken. It's about understanding yourself better and developing the tools to create the life you want. We believe in your capacity for healing and growth.
              </p>
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
              Choose Your Therapy Package
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Flexible options available in both individual sessions and package formats. All sessions available online (global) or in-person (Faridabad).
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
                      to="/booking"
                      className={`w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-bold transition shadow-xs ${
                        session.isPopular
                          ? 'bg-white text-[#036b75] hover:bg-teal-50'
                          : 'bg-[#036b75] text-white hover:bg-[#02565e]'
                      }`}
                    >
                      Book Your Session
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#edf7f7] p-6 border border-[#d8ecec]">
              <p className="text-sm text-[#4b5563]">
                <strong className="text-[#036b75]">💡 Flexible Formats:</strong> All sessions are available in both <strong>online (via secure video)</strong> and <strong>in-person (Sector 88, Faridabad)</strong> formats. Choose what works best for you.
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  Visit Us
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  Our Office Location
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
                    <p className="text-xs font-bold uppercase tracking-widest text-[#036b75]">Hours</p>
                    <p className="mt-2 text-sm text-[#4b5563]">
                      Monday - Saturday: 10:00 AM - 6:00 PM<br />
                      Sunday: By Appointment
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
              Frequently Asked Questions
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
                Ready to Begin Your Healing Journey?
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Take the first step toward positive change today.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/90">
                Schedule your initial consultation and start your therapeutic journey with our compassionate, experienced team.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#036b75] transition hover:bg-teal-50 shadow-sm"
              >
                <CalendarHeart size={16} />
                Book Consultation
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20"
              >
                <MessageCircle size={16} />
                Ask Questions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndividualCounselling;
