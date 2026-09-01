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
  Sparkles
} from 'lucide-react';

const SeminarsWorkshops = () => {
  const [openFaq, setOpenFaq] = useState(null);
  const [currency, setCurrency] = useState('INR');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sessionData = [
    {
      title: 'Single Workshop Session',
      badge: 'One-Time Event',
      isPopular: false,
      priceINR: '₹2,000',
      priceUSD: '$60',
      unit: 'per participant',
      description: 'Perfect for focused, single-topic deep dives. Ideal for organizations, communities, or self-growth seekers.',
      features: ['Interactive content', 'Real-world applications', 'Q&A session', 'Resource handouts']
    },
    {
      title: 'Multi-Session Workshop Series',
      badge: 'Recommended',
      isPopular: true,
      priceINR: '₹12,000',
      priceUSD: '$350',
      unit: '4 workshops (flexible)',
      description: 'Comprehensive learning journey covering interconnected topics. Perfect for building depth and integration of skills.',
      features: ['4 structured sessions', 'Progressive learning', 'Practice exercises', 'Community building', 'Lifetime resources']
    }
  ];

  const faqItems = [
    {
      question: 'What topics can we choose for workshops?',
      answer: 'We offer a wide range of contemporary topics including stress management, anxiety reduction, mindfulness, emotional intelligence, leadership presence, communication skills, resilience building, self-esteem, work-life balance, and more. We can also customize topics based on your audience needs.'
    },
    {
      question: 'How long is each workshop?',
      answer: 'Workshops typically run from 2-3 hours for single sessions. Multi-session series are usually 90-120 minutes per session, scheduled weekly or bi-weekly based on your preference. We can customize timing for your group.'
    },
    {
      question: 'Can workshops be conducted online?',
      answer: 'Absolutely! All our seminars and workshops are available in online format via secure video conferencing, making them accessible to participants anywhere. Virtual workshops are just as interactive and impactful as in-person sessions.'
    },
    {
      question: 'What\'s included in the workshop materials?',
      answer: 'Participants receive comprehensive handouts, practical exercises they can use immediately, resource lists, worksheets, and access to supplementary materials. Many workshops also include follow-up resources.'
    },
    {
      question: 'How many participants can attend?',
      answer: 'Workshops are flexible and scale to your needs—from intimate groups of 5-10 to larger audiences of 50+. Intimate groups allow more interaction; larger groups work well for awareness-building. We adapt facilitation accordingly.'
    },
    {
      question: 'Is there follow-up support after the workshop?',
      answer: 'Yes! Participants can receive follow-up resources, optional check-in sessions, and guidance on implementing what they\'ve learned. We\'re committed to lasting behavior change, not just a one-time event.'
    }
  ];

  const workshopTopics = [
    'Stress Management & Burnout Prevention',
    'Mindfulness & Meditation Practices',
    'Emotional Intelligence Mastery',
    'Assertiveness & Boundary Setting',
    'Anxiety Reduction Techniques',
    'Building Resilience & Bouncing Back',
    'Healthy Relationships & Communication',
    'Self-Esteem & Confidence Building',
    'Grief & Loss Processing',
    'Work-Life Balance & Boundaries',
    'Leadership Presence & Impact',
    'Dealing with Change & Transitions',
    'Sleep & Wellness Optimization',
    'Decision-Making Under Pressure'
  ];

  const relevantTopics = [
    'Digital Wellness & Social Media Impact',
    'Managing Uncertainty in Times of Crisis',
    'Building Mental Fitness in Competitive Environments',
    'Neuroscience of Wellbeing',
    'Creating Healthy Work Cultures',
    'Generational Differences in Communication',
    'Purpose-Driven Living',
    'Financial Stress & Money Management',
    'Parenting in the Modern World',
    'Career Transitions & Reinvention'
  ];

  const benefits = [
    {
      title: '💡 Practical Skills',
      description: 'Learn techniques you can apply immediately to improve wellbeing'
    },
    {
      title: '👥 Community Connection',
      description: 'Connect with like-minded individuals on similar journeys'
    },
    {
      title: '📚 Expert Knowledge',
      description: 'Access evidence-based approaches from experienced psychologists'
    },
    {
      title: '🎯 Personalized Application',
      description: 'Customize learnings to your unique situation and goals'
    },
    {
      title: '💪 Empowerment',
      description: 'Build confidence in your ability to create positive change'
    },
    {
      title: '🌱 Lasting Change',
      description: 'Develop habits and mindsets for long-term wellbeing'
    }
  ];

  return (
    <div className="min-h-screen bg-[#fbfdfd] text-[#111827] font-sans antialiased">
      {/* Breadcrumb Navigation */}
      <div className="px-4 py-3 sm:px-6 lg:px-8 border-b border-[#edf7f7] bg-[#fbfdfd]">
        <div className="mx-auto max-w-7xl flex items-center gap-2 text-xs sm:text-sm text-[#6b7280]">
          <Link to="/services" className="text-[#036b75] font-medium hover:underline">Services</Link>
          <span>→</span>
          <span>Seminars & Workshops</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#edf7f7] via-[#f7fbfb] to-[#fbfdfd] px-4 pt-16 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#b8e1e1] bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#036b75] shadow-sm">
            <Sparkles size={16} className="text-[#036b75]" />
            Workshops & Interactive Learning
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111827]">
            Seminars & <br className="hidden sm:inline" />
            <span className="text-[#036b75]">Workshops</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#4b5563]">
            Practical, engaging workshops on contemporary wellness topics. Designed for personal growth, skill-building, and lasting behavior change.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4 text-xs sm:text-sm font-medium">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Clock size={16} className="text-[#036b75]" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Globe2 size={16} className="text-[#036b75]" />
              <span>Online & In-Person</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-[#d8ecec] shadow-xs">
              <Sparkles size={16} className="text-[#036b75]" />
              <span>Highly Interactive</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-16">

          {/* What are Seminars & Workshops */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
                  About Our Workshops
                </span>
                <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
                  What are Seminars & Workshops?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  Our seminars and workshops are practical, hands-on learning experiences designed to build specific skills and knowledge. Whether you're seeking personal development, professional growth, or community connection, our workshops provide evidence-based tools you can implement immediately.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
                  From stress management to mindfulness, emotional intelligence to resilience-building, our workshops cover contemporary topics that matter in today's world. Each session combines expert knowledge with interactive activities, real-world applications, and supportive community.
                </p>
              </div>
              <div className="bg-[#edf7f7]/50 rounded-2xl p-8 border border-[#d8ecec]">
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <CheckCircle2 size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Practical & Actionable</h3>
                      <p className="text-sm text-[#4b5563]">Tools you can use immediately in your life</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Heart size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Interactive & Engaging</h3>
                      <p className="text-sm text-[#4b5563]">Participate, practice, and connect with others</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#036b75]/10 text-[#036b75] shrink-0">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827]">Expert-Led</h3>
                      <p className="text-sm text-[#4b5563]">Learn from experienced, qualified psychologists</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Why Attend Workshops */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Impact & Benefits
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Why Attend Our Workshops?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Our workshops deliver tangible benefits for personal and professional growth:
            </p>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="rounded-2xl bg-[#f7fbfb] p-6 border border-[#d8ecec]">
                  <h3 className="font-bold text-[#111827] mb-2">{benefit.title}</h3>
                  <p className="text-sm text-[#4b5563]">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Workshop Topics - Standard */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Available Topics
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Popular Wellness Workshop Topics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Choose from our established workshop menu or request a custom topic:
            </p>
            
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {workshopTopics.map((topic) => (
                <div key={topic} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#036b75] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#111827]">{topic}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contemporary Topics */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Trending Topics
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Contemporary & Relevant Topics
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              We also offer seminars on topics that are shaping today's world:
            </p>
            
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {relevantTopics.map((topic) => (
                <div key={topic} className="flex items-start gap-3">
                  <Sparkles size={20} className="text-[#036b75] shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[#111827]">{topic}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#edf7f7] p-6 border border-[#d8ecec]">
              <p className="text-sm text-[#4b5563]">
                <strong className="text-[#036b75]">💡 Custom Topics:</strong> Don't see what you're looking for? We can create a custom workshop tailored to your specific needs and audience. <strong>Contact us to discuss your topic.</strong>
              </p>
            </div>
          </div>

          {/* Our Approach */}
          <div className="rounded-[2.5rem] border border-[#d8ecec] bg-white p-8 sm:p-12">
            <span className="inline-block rounded-full bg-[#edf7f7] px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-[#036b75]">
              Workshop Design
            </span>
            <h2 className="mt-4 text-3xl font-extrabold text-[#111827]">
              Our Workshop Approach
            </h2>
            
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">📖 Evidence-Based Content</h3>
                <p className="text-sm text-[#4b5563]">All content is grounded in psychological research and best practices. You're learning from the latest science.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🎯 Interactive & Engaging</h3>
                <p className="text-sm text-[#4b5563]">Lectures are balanced with exercises, discussions, case studies, and real-world applications. You'll participate, not just listen.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🎓 Practical Skills</h3>
                <p className="text-sm text-[#4b5563]">Every workshop teaches concrete techniques and tools you can implement immediately in your personal or professional life.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">📚 Comprehensive Materials</h3>
                <p className="text-sm text-[#4b5563]">You'll receive detailed handouts, worksheets, resources, and references to support your ongoing learning.</p>
              </div>

              <div className="rounded-2xl bg-[#edf7f7]/50 p-6 border border-[#d8ecec]">
                <h3 className="font-bold text-[#111827] mb-2">🤝 Supportive Community</h3>
                <p className="text-sm text-[#4b5563]">Connect with others on similar journeys. Workshops create communities of learning and mutual support.</p>
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
              Workshop Packages
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#4b5563]">
              Flexible options for individuals and groups. All workshops available online or in-person in Faridabad.
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
                      Book a Workshop
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl bg-[#edf7f7] p-6 border border-[#d8ecec]">
              <p className="text-sm text-[#4b5563]">
                <strong className="text-[#036b75]">💡 Group Discounts Available:</strong> We offer special pricing for organizations, schools, and groups. <strong>Contact us to discuss volume pricing and custom arrangements.</strong>
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
                  Our Location & Accessibility
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
                    <p className="text-xs font-bold uppercase tracking-widest text-[#036b75]">Workshop Formats</p>
                    <p className="mt-2 text-sm text-[#4b5563]">
                      ✓ In-person workshops in Faridabad<br />
                      ✓ Virtual/online workshops (global)<br />
                      ✓ Hybrid options for flexible scheduling
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
              Workshops & Seminars FAQs
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
                Invest in Your Growth
              </span>
              <h2 className="mt-2 text-2xl sm:text-3xl font-bold">
                Join our next workshop or seminar.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-teal-100/90">
                Gain practical skills, connect with others, and create lasting positive change in your life and career.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-[#036b75] transition hover:bg-teal-50 shadow-sm"
              >
                <MessageCircle size={16} />
                Register Now
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition hover:bg-white/20"
              >
                <CalendarHeart size={16} />
                Schedule Session
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SeminarsWorkshops;
