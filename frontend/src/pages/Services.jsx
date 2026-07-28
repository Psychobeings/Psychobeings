import React, { useEffect } from 'react';
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
  CalendarHeart
} from 'lucide-react';

const therapyOptions = [
  {
    title: 'Individual Therapy',
    description:
      'A confidential, one-on-one space for anxiety, stress, overthinking, grief, burnout, and emotional healing.',
    concerns: [
      'Anxiety and overwhelm',
      'Stress regulation',
      'Burnout and emotional fatigue',
      'Overthinking and decision paralysis'
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹1,500',
        description: 'Ideal for a first consultation or focused support.',
        buttonLabel: 'Book single session',
        buttonTo: '/contact'
      },
      {
        title: 'Package',
        price: 'From ₹8,000',
        description: 'Recommended for sustained progress and ongoing support.',
        buttonLabel: 'View packages',
        buttonTo: '/packages'
      },
      {
        title: 'Session Format',
        price: 'India / International',
        description: 'Online sessions available across India and internationally.',
        buttonLabel: 'Choose format',
        buttonTo: '/contact'
      }
    ],
    buttonLabel: 'Book Individual Therapy',
    buttonTo: '/contact'
  },
  {
    title: 'Child & Adolescent Therapy',
    description:
      'Support for children and adolescents navigating emotional, academic, and identity-related challenges with care.',
    concerns: [
      'Emotional regulation',
      'School stress and confidence',
      'Identity and life transitions',
      'Family or peer-related difficulties'
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹1,800',
        description: 'Helpful for an initial assessment or one-time guidance.',
        buttonLabel: 'Book single session',
        buttonTo: '/contact'
      },
      {
        title: 'Package',
        price: 'From ₹9,000',
        description: 'Best for continued support through emotional growth and transitions.',
        buttonLabel: 'View packages',
        buttonTo: '/packages'
      },
      {
        title: 'Session Format',
        price: 'In-Person & Online',
        description: 'Online support available for families across India and abroad.',
        buttonLabel: 'Choose format',
        buttonTo: '/contact'
      }
    ],
    buttonLabel: 'Book Child & Adolescent Support',
    buttonTo: '/contact'
  }
];

const programOptions = [
  {
    title: 'Workshops',
    description:
      'Interactive sessions that help individuals and groups build emotional awareness, resilience, and practical coping tools.',
    offerings: [
      'Anxiety and stress management',
      'Emotional regulation tools',
      'Mindfulness and grounding practices',
      'Self-care and resilience workshops'
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹2,000',
        description: 'Great for one-time workshops or focused learning.',
        buttonLabel: 'Book workshop',
        buttonTo: '/contact'
      },
      {
        title: 'Package',
        price: 'From ₹10,000',
        description: 'Ideal for recurring workshops and deeper learning.',
        buttonLabel: 'View packages',
        buttonTo: '/packages'
      },
      {
        title: 'Session Format',
        price: 'India / International',
        description: 'In-person and virtual workshops available for both regions.',
        buttonLabel: 'Choose format',
        buttonTo: '/contact'
      }
    ],
    buttonLabel: 'Explore Workshops',
    buttonTo: '/contact'
  },
  {
    title: 'Corporate Wellness',
    description:
      'Thoughtful wellbeing programs for teams and organizations focused on resilience, balance, and healthier work culture.',
    offerings: [
      'Employee wellbeing sessions',
      'Stress and burnout support',
      'Work-life balance guidance',
      'Team-focused wellness workshops'
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹2,500',
        description: 'Helpful for brief employee support or one-off interventions.',
        buttonLabel: 'Book session',
        buttonTo: '/contact'
      },
      {
        title: 'Package',
        price: 'From ₹15,000',
        description: 'Recommended for long-term workplace wellbeing initiatives.',
        buttonLabel: 'View packages',
        buttonTo: '/packages'
      },
      {
        title: 'Session Format',
        price: 'India / International',
        description: 'Available online and in-person for Indian and global teams.',
        buttonLabel: 'Choose format',
        buttonTo: '/contact'
      }
    ],
    buttonLabel: 'Discuss Corporate Wellness',
    buttonTo: '/contact'
  }
];

const trustPoints = [
  'Compassionate, evidence-informed care rooted in empathy and safety.',
  'Personalized support that adapts to your age, goals, and pace.',
  'A calm and confidential space for healing and reflection.',
  'Flexible support through online and offline options.'
];

const testimonials = [
  {
    quote:
      'The space felt safe and grounding. I felt understood from the very first session.',
    name: 'A. Sharma'
  },
  {
    quote:
      'The guidance was practical and thoughtful. It helped me feel more steady and clear.',
    name: 'R. Kapoor'
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6fbfa] text-[#183436]">
      <section className="relative overflow-hidden px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(10,114,114,0.10),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(15,95,97,0.10),_transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full border border-[#bfe1df] bg-white px-4 py-2 text-sm font-semibold text-[#0a7272] shadow-sm">
              Therapy, emotional wellness, and guided support
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight text-[#0d4f50] sm:text-5xl lg:text-6xl">
              Care designed for healing, clarity, and lasting balance.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4c6162]">
              Explore therapy and wellness programs that support individuals,
              children, adolescents, and organizations through thoughtful,
              compassionate, and structured care.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/booking"
                className="inline-flex items-center gap-2 rounded-full bg-[#0a7272] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#095f5f]"
              >
                Book a consultation
                <ArrowRight size={16} />
              </Link>

              <a
                href="#therapy"
                className="inline-flex items-center gap-2 rounded-full border border-[#0a7272]/20 bg-white px-6 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#edf7f5]"
              >
                Explore services
              </a>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[2rem] bg-[#0a7272] p-8 text-white shadow-[0_20px_60px_rgba(10,114,114,0.18)]">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">
                Available support
              </p>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <HeartHandshake size={18} />
                    <p className="font-semibold">Therapy</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Individual and child-adolescent support in a confidential,
                    guided setting.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Sparkles size={18} />
                    <p className="font-semibold">Programs</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/85">
                    Workshops and wellness sessions for growth, resilience, and
                    emotional awareness.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[#d7ecec] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[#0a7272]">
                  <Globe2 size={18} />
                  <p className="text-sm font-semibold">Online access</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4c6162]">
                  Available across India and internationally.
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-[#d7ecec] bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 text-[#0a7272]">
                  <CalendarHeart size={18} />
                  <p className="text-sm font-semibold">In-person care</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-[#4c6162]">
                  In-person appointments available in Faridabad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link
        to="/booking"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,114,114,0.25)] transition hover:scale-105 hover:bg-[#0d5c5e]"
      >
        <MessageCircle size={18} />
        Book consultation
      </Link>

      <section id="therapy" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
              Therapy
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50] sm:text-4xl">
              Personalized support for emotional wellbeing.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4c6162]">
              Every journey is different. Our therapy services are structured to
              create space for reflection, emotional growth, and practical coping.
            </p>
          </div>

          <div className="mt-12 space-y-8">
            {therapyOptions.map((item, index) => (
              <div
                key={item.title}
                className="grid gap-6 rounded-[2rem] border border-[#d7ecec] bg-white p-6 shadow-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-8"
              >
                <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3">
                    <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                      <HeartHandshake size={20} />
                    </div>
                    <h3 className="text-2xl font-semibold text-[#0d4f50]">
                      {item.title}
                    </h3>
                  </div>

                  <p className="mt-5 text-base leading-7 text-[#4c6162]">
                    {item.description}
                  </p>

                  <div className="mt-6 rounded-[1.5rem] bg-[#f7fcfb] p-5">
                    <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a7272]">
                      Common concerns
                    </h4>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {item.concerns.map((concern) => (
                        <div
                          key={concern}
                          className="flex items-start gap-3 rounded-2xl bg-white p-4"
                        >
                          <CheckCircle2
                            size={18}
                            className="mt-0.5 shrink-0 text-[#0a7272]"
                          />
                          <span className="text-sm leading-6 text-[#4c6162]">
                            {concern}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                  <div className="h-full rounded-[1.75rem] bg-gradient-to-br from-[#0a7272] to-[#0f5f61] p-5 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-teal-100">
                      Session details
                    </p>

                    <div className="mt-5 space-y-4">
                      {item.sessionCards.map((card) => (
                        <div key={card.title} className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <p className="text-sm font-semibold text-white">
                                {card.title}
                              </p>
                              <p className="mt-2 text-xl font-semibold text-teal-100">
                                {card.price}
                              </p>
                            </div>
                          </div>
                          <p className="mt-3 text-sm leading-6 text-white/85">
                            {card.description}
                          </p>
                          <Link
                            to={card.buttonTo}
                            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:text-teal-100"
                          >
                            {card.buttonLabel}
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      ))}
                    </div>

                    <Link
                      to={item.buttonTo}
                      className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-teal-50"
                    >
                      {item.buttonLabel}
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
              Programs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50] sm:text-4xl">
              Wellness programs for communities and workplaces.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4c6162]">
              Structured experiences that bring emotional tools, practical insight,
              and meaningful support into group spaces.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {programOptions.map((item) => (
              <div
                key={item.title}
                className="group rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                    {item.title === 'Workshops' ? (
                      <Sparkles size={20} />
                    ) : (
                      <Building2 size={20} />
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0d4f50]">
                    {item.title}
                  </h3>
                </div>

                <p className="mt-5 text-base leading-7 text-[#4c6162]">
                  {item.description}
                </p>

                <div className="mt-6 space-y-3">
                  {item.offerings.map((offering) => (
                    <div
                      key={offering}
                      className="flex items-start gap-3 rounded-2xl bg-[#f7fcfb] p-4"
                    >
                      <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-[#0a7272]" />
                      <span className="text-sm leading-6 text-[#4c6162]">
                        {offering}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {item.sessionCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl border border-[#d7ecec] bg-[#fcfefe] p-4"
                    >
                      <p className="text-sm font-semibold text-[#0d4f50]">
                        {card.title}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-[#0a7272]">
                        {card.price}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-[#4c6162]">
                        {card.description}
                      </p>
                      <Link
                        to={card.buttonTo}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0a7272] transition hover:text-[#0d5c5e]"
                      >
                        {card.buttonLabel}
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>

                <Link
                  to={item.buttonTo}
                  className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0a7272] px-5 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#eaf6f6]"
                >
                  {item.buttonLabel}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-[#0f5f61] p-8 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-white/10 p-3 text-white">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-3xl font-semibold">Why people choose this space</h2>
            </div>

            <div className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 text-sm leading-6 text-[#e7f3f2]"
                >
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
              Testimonials
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50]">
              Gentle, grounded, and supportive care.
            </h2>
            <p className="mt-4 text-base leading-7 text-[#4c6162]">
              A few words from people who have experienced support through this work.
            </p>

            <div className="mt-8 grid gap-4">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-[1.5rem] bg-[#f7fcfb] p-5"
                >
                  <p className="text-base leading-7 text-[#2d4749]">“{item.quote}”</p>
                  <p className="mt-4 text-sm font-semibold text-[#0a7272]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#eaf6f6] via-white to-[#eef8f7] p-8 shadow-sm lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
                Location
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50]">
                In-person support in Faridabad, online everywhere else.
              </h2>
              <p className="mt-4 text-lg leading-8 text-[#4c6162]">
                Schedule in-person appointments in Faridabad or connect online from
                anywhere in India and internationally.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-[#d7ecec] bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-[#0a7272] p-3 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-[#0d4f50]">Faridabad, Haryana</p>
                  <p className="mt-2 text-sm leading-6 text-[#4c6162]">
                    Reach out to schedule an appointment or ask about availability.
                  </p>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d5c5e]"
                >
                  Book now
                </a>
                <a
                  href="https://maps.google.com/?q=Faridabad"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#0a7272] px-5 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#f7fcfb]"
                >
                  Open map
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