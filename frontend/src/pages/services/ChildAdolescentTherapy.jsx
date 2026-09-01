import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Heart,
  MapPin,
  MessageCircle,
  CheckCircle2,
  CalendarHeart,
  Flame,
  Clock,
  ShieldCheck
} from 'lucide-react';

const ChildAdolescentTherapy = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sessionData = [
    {
      title: 'Initial Youth Assessment',
      badge: 'Includes Parent Intake',
      isPopular: false,
      priceINR: '₹1,200',
      priceUSD: '$45',
      unit: '60 mins session',
      description: 'Includes interactive child time followed by a structured parent feedback session and tailored home strategies.',
      features: ['Child assessment', 'Parent consultation', 'Initial treatment recommendations']
    },
    {
      title: 'Complete Care Package',
      badge: 'Most Popular',
      isPopular: true,
      priceINR: '₹9,000',
      priceUSD: '$225',
      unit: '6 sessions + parent updates',
      description: 'Holistic emotional care for your child, paired with regular parent updates, home strategies, and progress tracking.',
      features: ['6 structured therapy sessions', 'Bi-weekly parent updates', 'Customized home strategies', 'Progress assessment']
    }
  ];

  const faqItems = [
    {
      question: 'How do I know if my child needs therapy?',
      answer: 'Signs include persistent anxiety, behavioral changes, academic decline, difficulty with peers, emotional outbursts, withdrawal, sleep issues, or if they have experienced trauma or loss. A consultation can help determine if therapy would be beneficial.'
    },
    {
      question: 'What happens in the first session?',
      answer: 'We meet with you (parent) first for context and background. Then we have interactive, play-based time with your child to build rapport and understand their world. Finally, we discuss observations and create a plan together.'
    },
    {
      question: 'Will my child feel comfortable talking to a therapist?',
      answer: 'Children often open up more easily with a neutral, trained professional. We use age-appropriate techniques including play, art, and conversation to help children express themselves comfortably and naturally.'
    },
    {
      question: 'How involved should parents be?',
      answer: 'Parent involvement is crucial! We provide regular updates, teach you strategies to support your child at home, and may include you in certain sessions. We maintain your child\'s privacy while keeping you informed and engaged.'
    },
    {
      question: 'What techniques do you use with children?',
      answer: 'We use evidence-based play therapy, cognitive-behavioral techniques, art therapy, mindfulness, and solution-focused approaches adapted for the child\'s developmental stage. We meet each child where they are.'
    },
    {
      question: 'Is therapy confidential for teens?',
      answer: 'Yes, with the same professional confidentiality guidelines as adults. However, we maintain necessary parent communication for safety and wellbeing. Serious safety concerns are discussed with parents.'
    }
  ];

  const concerns = [
    'Anxiety and school stress',
    'Depression and mood changes',
    'Behavioral challenges',
    'ADHD and attention difficulties',
    'Social anxiety and peer issues',
    'Academic performance problems',
    'Self-esteem and confidence',
    'Family conflict and divorce',
    'Trauma and loss',
    'Identity and adolescent development'
  ];

  const approachPoints = [
    {
      title: 'Child-Centered & Playful',
      description: 'We use age-appropriate techniques including play, creative activities, and conversation. Therapy should feel safe and engaging.'
    },
    {
      title: 'Family-Informed',
      description: 'We work WITH parents/caregivers to support the child. Regular communication and home strategies amplify therapeutic benefits.'
    },
    {
      title: 'Developmentally Sensitive',
      description: 'Our approach considers the child\'s developmental stage and tailors interventions accordingly, from early childhood through adolescence.'
    },
    {
      title: 'Evidence-Based',
      description: 'We use proven methods like CBT, play therapy, and mindfulness adapted for children and teens.'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="px-4 py-3 sm:px-6 lg:px-8 border-b border-[#edf7f7] bg-[#fbfdfd]">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs sm:text-sm text-[#6b7280]">
          <Link to="/services" className="text-[#036b75] font-medium hover:underline">Services</Link>
          <span>→</span>
          <span>Child & Adolescent Therapy</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#036b75] shadow-sm">
            <Heart size={16} className="fill-[#036b75]" />
            Support for Young Minds
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827]">
            Child & Adolescent <br className="hidden sm:inline" />
            <span className="text-[#036b75]">Therapy & Counselling</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            Compassionate, evidence-based support for children and teens navigating emotional challenges, behavioral concerns, and the complexities of growing up.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Clock size={16} className="text-[#036b75]" />
              <span>Age-Appropriate Care</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Heart size={16} className="text-[#036b75]" />
              <span>Family Support</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <ShieldCheck size={16} className="text-[#036b75]" />
              <span>Confidential & Safe</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">

          {/* What is Child & Adolescent Therapy */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  Understanding Child Therapy
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  What is Child & Adolescent Therapy?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Child and adolescent therapy is specialized support designed to help young people navigate emotional, behavioral, and social challenges. Using age-appropriate techniques, we create a safe, supportive space where children and teens can express themselves, develop healthy coping skills, and build resilience.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  We work with children from early childhood through the teenage years, addressing everything from anxiety and depression to behavioral concerns and family conflicts. Parents are an integral part of the process, receiving guidance and strategies to support their child at home.
                </p>
              </div>
              <div className="bg-[#edf7f7]/50 rounded-2xl p-8 border border-[#d8ecec]">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <MessageCircle size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Play-Based Learning</h3>
                      <p className="text-sm text-[#4b5563]">Children express themselves through play and creativity, not just words</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Parent Involvement</h3>
                      <p className="text-sm text-[#4b5563]">Regular updates and home strategies for consistent support</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Confidential Space</h3>
                      <p className="text-sm text-[#4b5563]">Safe, non-judgmental environment tailored to their needs</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Child & Adolescent Therapy */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Benefits & Impact
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Why Choose Child & Adolescent Therapy?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Early intervention during childhood and adolescence can have lasting positive effects on emotional health and development:
            </p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🧠 Emotional Regulation</h3>
                <p className="text-sm text-[#4b5563]">Learn healthy ways to manage big emotions and navigate stress.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">👥 Better Relationships</h3>
                <p className="text-sm text-[#4b5563]">Develop social skills and improve relationships with peers and family.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">📚 School Success</h3>
                <p className="text-sm text-[#4b5563]">Address academic anxiety and build confidence in learning.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">💪 Resilience & Coping</h3>
                <p className="text-sm text-[#4b5563]">Build inner strength and healthy coping strategies for life's challenges.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🌱 Self-Understanding</h3>
                <p className="text-sm text-[#4b5563]">Develop self-awareness and a stronger sense of identity.</p>
              </div>
              <div className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">👨‍👩‍👧 Family Harmony</h3>
                <p className="text-sm text-[#4b5563]">Improve family communication and resolve conflicts constructively.</p>
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
              We provide specialized support for children and teens experiencing:
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
                <strong>Our Core Belief:</strong> Every child has the capacity for healing and growth. Our role is to provide a safe space where they can explore their feelings, develop healthy coping skills, and build confidence in navigating life's challenges.
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
              Therapy Packages for Children & Teens
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Flexible options designed to support your child's emotional wellbeing. All sessions available online (global) or in-person (Faridabad). Parent involvement included in all packages.
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
                      Most Popular
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
                      Book an Assessment
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#edf7f7] p-6 border border-[#d8ecec]">
              <p className="text-sm text-[#4b5563]">
                <strong className="text-[#036b75]">💡 Flexible Formats & Parent Communication:</strong> All sessions are available in <strong>online (via secure video)</strong> and <strong>in-person (Sector 88, Faridabad)</strong> formats. We maintain regular parent communication and provide home strategies to support your child's progress.
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
              Frequently Asked Questions About Child Therapy
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
                Support Your Child's Wellbeing
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Give your child the gift of emotional support.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/90">
                Schedule an initial assessment and let us help your child navigate their feelings and challenges with confidence.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#036b75] transition hover:bg-teal-50 shadow-sm"
              >
                <CalendarHeart size={16} />
                Book Assessment
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20"
              >
                <MessageCircle size={16} />
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChildAdolescentTherapy;
