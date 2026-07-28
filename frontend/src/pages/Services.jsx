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
} from 'lucide-react';

// ==========================================
// DATA STRUCTURES
// ==========================================

const therapyOptions = [
  {
    id: 'individual-therapy',
    title: 'Individual Therapy',
    description:
      'A confidential, one-on-one space for anxiety, stress, overthinking, grief, burnout, and emotional healing.',
    icon: HeartHandshake,
    concerns: [
      'Anxiety and overwhelm',
      'Stress regulation',
      'Burnout and emotional fatigue',
      'Overthinking and decision paralysis',
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹1,500',
        description: 'Ideal for a first consultation or focused support.',
        buttonLabel: 'Book single session',
        buttonTo: '/booking',
      },
      {
        title: 'Package',
        price: 'From ₹8,000',
        description: 'Recommended for sustained progress and ongoing support.',
        buttonLabel: 'View packages',
        buttonTo: '/packages',
      },
      {
        title: 'Session Format',
        price: 'India / Global',
        description: 'Online sessions available across India and internationally.',
        buttonLabel: 'Choose format',
        buttonTo: '/booking',
      },
    ],
    buttonLabel: 'Book Individual Therapy',
    buttonTo: '/booking',
  },
  {
    id: 'child-adolescent-therapy',
    title: 'Child & Adolescent Therapy',
    description:
      'Support for children and adolescents navigating emotional, academic, and identity-related challenges with care.',
    icon: HeartHandshake,
    concerns: [
      'Emotional regulation',
      'School stress and confidence',
      'Identity and life transitions',
      'Family or peer-related difficulties',
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹1,800',
        description: 'Helpful for an initial assessment or one-time guidance.',
        buttonLabel: 'Book single session',
        buttonTo: '/booking',
      },
      {
        title: 'Package',
        price: 'From ₹9,000',
        description: 'Best for continued support through emotional growth.',
        buttonLabel: 'View packages',
        buttonTo: '/packages',
      },
      {
        title: 'Session Format',
        price: 'In-Person & Online',
        description: 'Online support available for families across India & abroad.',
        buttonLabel: 'Choose format',
        buttonTo: '/booking',
      },
    ],
    buttonLabel: 'Book Child & Adolescent Support',
    buttonTo: '/booking',
  },
];

const programOptions = [
  {
    id: 'workshops',
    title: 'Workshops',
    description:
      'Interactive sessions that help individuals and groups build emotional awareness, resilience, and practical coping tools.',
    icon: Sparkles,
    offerings: [
      'Anxiety and stress management',
      'Emotional regulation tools',
      'Mindfulness and grounding practices',
      'Self-care and resilience workshops',
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹2,000',
        description: 'Great for one-time workshops or focused learning.',
        buttonLabel: 'Book workshop',
        buttonTo: '/contact',
      },
      {
        title: 'Package',
        price: 'From ₹10,000',
        description: 'Ideal for recurring workshops and deeper learning.',
        buttonLabel: 'View packages',
        buttonTo: '/packages',
      },
      {
        title: 'Session Format',
        price: 'India / Global',
        description: 'In-person and virtual workshops available for both regions.',
        buttonLabel: 'Choose format',
        buttonTo: '/contact',
      },
    ],
    buttonLabel: 'Explore Workshops',
    buttonTo: '/contact',
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Wellness',
    description:
      'Thoughtful wellbeing programs for teams and organizations focused on resilience, balance, and healthier work culture.',
    icon: Building2,
    offerings: [
      'Employee wellbeing sessions',
      'Stress and burnout support',
      'Work-life balance guidance',
      'Team-focused wellness workshops',
    ],
    sessionCards: [
      {
        title: 'Single Session',
        price: '₹2,500',
        description: 'Helpful for brief employee support or interventions.',
        buttonLabel: 'Book session',
        buttonTo: '/contact',
      },
      {
        title: 'Package',
        price: 'From ₹15,000',
        description: 'Recommended for long-term workplace initiatives.',
        buttonLabel: 'View packages',
        buttonTo: '/packages',
      },
      {
        title: 'Session Format',
        price: 'India / Global',
        description: 'Available online and in-person for Indian and global teams.',
        buttonLabel: 'Choose format',
        buttonTo: '/contact',
      },
    ],
    buttonLabel: 'Discuss Corporate Wellness',
    buttonTo: '/contact',
  },
];

const trustPoints = [
  'Compassionate, evidence-informed care rooted in empathy and safety.',
  'Personalized support that adapts to your age, goals, and pace.',
  'A calm and confidential space for healing and reflection.',
  'Flexible support through online and offline options.',
];

const testimonials = [
  {
    quote: 'The space felt safe and grounding. I felt understood from the very first session.',
    name: 'A. Sharma',
  },
  {
    quote: 'The guidance was practical and thoughtful. It helped me feel more steady and clear.',
    name: 'R. Kapoor',
  },
];

// ==========================================
// REUSABLE SUB-COMPONENTS
// ==========================================

const SessionCard = ({ card }) => (
  <div className="flex flex-col justify-between rounded-2xl border border-[#d7ecec] bg-white p-4 transition-shadow hover:shadow-sm">
    <div>
      <p className="text-sm font-semibold text-[#0d4f50]">{card.title}</p>
      <p className="mt-2 text-lg font-bold text-[#0a7272]">{card.price}</p>
      <p className="mt-2 text-sm leading-6 text-[#4c6162]">{card.description}</p>
    </div>
    <Link
      to={card.buttonTo}
      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0a7272] transition hover:text-[#0d5c5e] focus:outline-none focus:underline"
    >
      <span>{card.buttonLabel}</span>
      <ArrowRight size={14} aria-hidden="true" />
    </Link>
  </div>
);

const ServiceCard = ({ item, isOutlineButton = false }) => {
  const IconComponent = item.icon;
  const listItems = item.concerns || item.offerings || [];
  const listTitle = item.concerns ? 'Common concerns' : 'What we offer';

  return (
    <div className="flex flex-col justify-between rounded-[2rem] border border-[#d7ecec] bg-white p-6 sm:p-8 shadow-sm">
      <div>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
            <IconComponent size={22} aria-hidden="true" />
          </div>
          <h3 className="text-2xl font-semibold text-[#0d4f50]">{item.title}</h3>
        </div>
        <p className="mt-5 text-base leading-7 text-[#4c6162]">{item.description}</p>

        <div className="mt-6">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a7272]">
            {listTitle}
          </h4>
          <ul className="mt-3 space-y-2.5 text-sm text-[#4c6162]">
            {listItems.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0a7272]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#d7ecec] bg-[#f7fcfb] p-4">
          <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0a7272]">
            Session details
          </h4>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {item.sessionCards.map((card) => (
              <SessionCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8">
        <Link
          to={item.buttonTo}
          className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full px-6 py-3 text-sm font-semibold transition ${
            isOutlineButton
              ? 'border border-[#0a7272] text-[#0a7272] hover:bg-[#eaf6f6]'
              : 'bg-[#0a7272] text-white hover:bg-[#0d5c5e]'
          }`}
        >
          {item.buttonLabel}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fcfb] via-[#f3fbfa] to-[#edf7f5] text-[#1f3a3d]">
      
      {/* Hero Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0a7272] shadow-[0_20px_60px_rgba(10,114,114,0.18)]">
          <div className="relative px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div
              className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_40%)]"
              aria-hidden="true"
            />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-[#0d5c5e] px-4 py-2 text-xs sm:text-sm font-semibold text-white shadow-md">
                  Therapy and programs for healing, growth, and balance
                </span>
                <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
                  Support that meets you where you are.
                </h1>
                <p className="mt-5 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
                  We offer therapy and structured programs designed to help individuals, children,
                  adolescents, and organizations build emotional strength and meaningful wellbeing.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to="/booking"
                    className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Book a consultation
                  </Link>
                  <a
                    href="#therapy"
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    Explore services
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <p className="text-sm font-semibold text-white">Therapy</p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-50">
                      Individual support and child-adolescent care.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4">
                    <p className="text-sm font-semibold text-white">Programs</p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-50">
                      Workshops and corporate wellness offerings.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4 sm:col-span-2">
                    <p className="text-sm font-semibold text-white">Available formats</p>
                    <p className="mt-2 text-xs sm:text-sm text-teal-50">
                      Online across India and internationally, with in-person support in Faridabad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Button */}
      <Link
        to="/booking"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,114,114,0.25)] transition hover:scale-105 hover:bg-[#0d5c5e] focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2"
        aria-label="Book a consultation session"
      >
        <MessageCircle size={18} aria-hidden="true" />
        <span>Book consultation</span>
      </Link>

      {/* Therapy Section */}
      <section id="therapy" className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
              Therapy
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0d4f50]">
              Support for individuals and young people.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4c6162]">
              Our therapy services are designed to help you understand your concerns, build clarity,
              and move forward with more steadiness and self-awareness.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {therapyOptions.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
              Programs
            </p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#0d4f50]">
              Workshops and wellness programs built for growth.
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4c6162]">
              We also offer structured programs that bring insight, tools, and calm into group
              settings and workplace spaces.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {programOptions.map((item) => (
              <ServiceCard key={item.id} item={item} isOutlineButton />
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Testimonials */}
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          {/* Trust Points */}
          <div className="rounded-[2rem] border border-[#d7ecec] bg-white p-6 sm:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                <ShieldCheck size={22} aria-hidden="true" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-[#0d4f50]">Why trust us</h2>
            </div>
            <div className="mt-6 space-y-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-2xl bg-[#f7fcfb] p-4 text-sm text-[#4c6162]"
                >
                  <CheckCircle2 size={18} className="mt-0.5 text-[#0a7272] flex-shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="rounded-[2rem] bg-[#0f5f61] p-6 sm:p-8 text-white shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-2xl sm:text-3xl font-semibold">Testimonials</h2>
              <p className="mt-3 text-sm leading-relaxed text-[#dce9e8]">
                A few words from people who have found support through our work.
              </p>
              <div className="mt-8 space-y-4">
                {testimonials.map((item) => (
                  <blockquote
                    key={item.name}
                    className="rounded-2xl border border-white/10 bg-white/10 p-5"
                  >
                    <p className="text-sm sm:text-base leading-relaxed text-[#f4f8f8]">
                      “{item.quote}”
                    </p>
                    <cite className="mt-3 block text-xs sm:text-sm font-semibold not-italic text-[#dce9e8]">
                      — {item.name}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d7ecec] bg-white p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">
                Location
              </p>
              <h2 className="mt-2 text-2xl sm:text-3xl font-semibold text-[#0d4f50]">
                Find us in Faridabad
              </h2>
              <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#4c6162]">
                We welcome in-person appointments and also provide online support for clients across
                India and internationally.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#eaf6f6] p-6 lg:min-w-[320px]">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-[#0a7272] p-3 text-white">
                  <MapPin size={20} aria-hidden="true" />
                </div>
                <div>
                  <p className="font-semibold text-[#0d4f50]">Faridabad, Haryana</p>
                  <p className="mt-1 text-xs sm:text-sm text-[#4c6162]">
                    Reach out to schedule an appointment or ask about availability.
                  </p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href="https://booking.myndspace.app/amanp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#0a7272] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0d5c5e]"
                >
                  Book now
                </a>
                <a
                  href="https://maps.google.com/?q=Faridabad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#0a7272] px-5 py-2.5 text-sm font-semibold text-[#0a7272] transition hover:bg-[#f7fcfb]"
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