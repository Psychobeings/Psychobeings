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
  BookOpen
} from 'lucide-react';

const SchoolsCollegesWellness = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sessionData = [
    {
      title: 'Single Wellness Workshop',
      badge: 'One Session',
      isPopular: false,
      priceINR: '₹3,000',
      priceUSD: '$85',
      unit: 'per session / group',
      description: 'Perfect for assemblies, mental health awareness, or focused topics like exam stress, peer pressure, or self-esteem.',
      features: ['Tailored content', 'Interactive activities', 'Q&A session']
    },
    {
      title: 'Semester-Long Program',
      badge: 'Most Comprehensive',
      isPopular: true,
      priceINR: '₹20,000',
      priceUSD: '$550',
      unit: 'per semester (starting)',
      description: 'Monthly workshops, counselor availability, teacher training, and ongoing support for student mental health throughout the semester.',
      features: ['4 monthly workshops', 'Counselor availability', 'Teacher training', 'Parent sessions', 'Crisis support']
    }
  ];

  const faqItems = [
    {
      question: 'What topics do you cover for students?',
      answer: 'We offer sessions on exam stress management, peer pressure resistance, healthy friendships, self-esteem, emotional regulation, cyberbullying, mental health awareness, career readiness, and resilience-building.'
    },
    {
      question: 'Can you work with different age groups?',
      answer: 'Absolutely! We customize content for primary students, middle schoolers, and college students. Each level uses age-appropriate language, activities, and examples.'
    },
    {
      question: 'Do you offer counseling services at the school?',
      answer: 'Yes, our programs include regular counselor availability at your institution for student consultations, teacher collaboration, and crisis support when needed.'
    },
    {
      question: 'How do you involve teachers and parents?',
      answer: 'We conduct teacher training on mental health, provide resources for educators, hold parent information sessions, and create a whole-school approach to student wellbeing.'
    },
    {
      question: 'What about confidentiality with students?',
      answer: 'Complete confidentiality is maintained with students, following professional ethics standards. Parents are contacted only for serious safety concerns. Teachers receive support and guidance without student disclosure.'
    },
    {
      question: 'Can the programs be delivered online?',
      answer: 'Yes! We offer virtual workshops and online counseling services, which is especially useful for remote or hybrid learning situations.'
    }
  ];

  const topicAreas = [
    'Academic stress & exam anxiety',
    'Peer pressure & social dynamics',
    'Self-esteem & body image',
    'Cyberbullying & online safety',
    'Emotional regulation techniques',
    'Healthy relationships & dating',
    'Career counseling & planning',
    'Diversity & inclusion',
    'Grief & loss support',
    'Substance use awareness',
    'Mental health literacy',
    'Resilience & coping skills'
  ];

  const benefits = [
    {
      title: '📚 Better Academic Performance',
      description: 'Students with good mental health show improved focus and grades'
    },
    {
      title: '🤝 Improved School Culture',
      description: 'Reduced bullying and better peer relationships among students'
    },
    {
      title: '💪 Increased Resilience',
      description: 'Students develop healthy coping skills for life challenges'
    },
    {
      title: '👥 Better Teacher-Student Relations',
      description: 'Improved communication and supportive classroom environments'
    },
    {
      title: '🛡️ Early Intervention',
      description: 'Mental health issues identified and addressed early'
    },
    {
      title: '👨‍👩‍👧 Stronger Families',
      description: 'Parent involvement creates continuity of support at home'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="px-4 py-3 sm:px-6 lg:px-8 border-b border-[#edf7f7] bg-[#fbfdfd]">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs sm:text-sm text-[#6b7280]">
          <Link to="/services" className="text-[#036b75] font-medium hover:underline">Services</Link>
          <span>→</span>
          <span>Schools & Colleges Wellness</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#036b75] shadow-sm">
            <BookOpen size={16} className="text-[#036b75]" />
            Mental Health in Education
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827]">
            Schools & Colleges <br className="hidden sm:inline" />
            <span className="text-[#036b75]">Wellness Programs</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            Comprehensive mental health and wellness programs designed to support student wellbeing, academic success, and healthy development in educational institutions.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <BookOpen size={16} className="text-[#036b75]" />
              <span>Customized for Schools</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Heart size={16} className="text-[#036b75]" />
              <span>Student-Focused</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <CheckCircle2 size={16} className="text-[#036b75]" />
              <span>Evidence-Based</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">

          {/* What is Schools & Colleges Wellness */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  About Our Program
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  What is Schools & Colleges Wellness?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Schools and colleges wellness programs bring mental health support directly into educational institutions. We provide workshops, counseling access, teacher training, and parent education—all designed to create a culture of wellbeing where students can thrive emotionally and academically.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  From managing exam anxiety to navigating peer relationships, our programs equip students with the skills and support they need to succeed both in school and in life.
                </p>
              </div>
              <div className="bg-[#edf7f7]/50 rounded-2xl p-8 border border-[#d8ecec]">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Student-Centered</h3>
                      <p className="text-sm text-[#4b5563]">Specifically designed for the needs and challenges students face</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Whole-School Approach</h3>
                      <p className="text-sm text-[#4b5563]">Involves students, teachers, parents, and administrators</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Skills-Based</h3>
                      <p className="text-sm text-[#4b5563]">Teaches practical coping and resilience skills</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Schools Wellness */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Impact & Benefits
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Why Schools & Colleges Need Wellness Programs
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Educational institutions investing in student mental health see transformative results:
            </p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                  <h3 className="font-bold text-[#111827] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#4b5563]">{benefit.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-blue-50 border border-blue-200 p-6">
              <p className="text-sm text-blue-900">
                <strong>📊 Research Shows:</strong> Schools with strong wellness programs see 20% improvement in academic performance, 30% reduction in absenteeism, and significant decreases in behavioral issues.
              </p>
            </div>
          </div>

          {/* Topics We Cover */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Topics & Focus Areas
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Wellness Topics We Cover
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Our customized workshops and sessions address:
            </p>
            
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {topicAreas.map((topic) => (
                <div key={topic} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#036b75] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#111827]">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Our Approach */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Implementation
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Our Program Implementation
            </h2>
            
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🔍 Initial Consultation</h3>
                <p className="text-sm text-[#4b5563]">We meet with school leadership to understand student needs, existing mental health challenges, and institutional goals for the wellness program.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">📚 Teacher Training</h3>
                <p className="text-sm text-[#4b5563]">We equip teachers and staff with mental health literacy and strategies to support students in the classroom and identify those needing additional support.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">👥 Student Workshops</h3>
                <p className="text-sm text-[#4b5563]">We deliver interactive, age-appropriate sessions covering topics relevant to students' lives and challenges. Sessions are engaging and skill-focused.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">👨‍👩‍👧 Parent Engagement</h3>
                <p className="text-sm text-[#4b5563]">We conduct parent information sessions and provide resources to help families support student mental health at home.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🤝 Ongoing Support</h3>
                <p className="text-sm text-[#4b5563]">Our team remains available for student counseling, crisis support, and collaboration with school staff throughout the program period.</p>
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
              Wellness Program Packages
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Flexible options for schools and colleges of different sizes. We work with your budget and timeline.
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
                <strong className="text-[#036b75]">💡 Customizable Programs:</strong> All programs are customized based on your institution's size, student demographics, and specific needs. <strong>Contact us for a personalized wellness proposal for your school or college.</strong>
              </p>
            </div>
          </div>

          {/* Location Section */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-start">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  Reach Us
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
                    <p className="text-xs font-bold uppercase tracking-widest text-[#036b75]">Delivery Options</p>
                    <p className="mt-2 text-sm text-[#4b5563]">
                      ✓ On-campus workshops & sessions<br />
                      ✓ Virtual/online programs<br />
                      ✓ Teacher training at your location
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
              Schools & Colleges Wellness FAQs
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
                Support Your Students' Success
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Bring mental health support to your institution.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/90">
                Let's discuss how we can create a customized wellness program that supports your students' emotional health and academic success.
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
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchoolsCollegesWellness;
