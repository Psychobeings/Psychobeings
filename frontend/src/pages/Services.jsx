import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, HeartHandshake, ShieldCheck, Sparkles, Building2, MapPin, MessageCircle } from 'lucide-react';

const therapyOptions = [
  {
    title: 'Individual Therapy',
    description: 'A confidential, one-on-one space for anxiety, stress, overthinking, grief, burnout, and emotional healing.',
    concerns: ['Anxiety and overwhelm', 'Stress regulation', 'Burnout and emotional fatigue', 'Overthinking and decision paralysis'],
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
    description: 'Support for children and adolescents navigating emotional, academic, and identity-related challenges with care.',
    concerns: ['Emotional regulation', 'School stress and confidence', 'Identity and life transitions', 'Family or peer-related difficulties'],
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
        price: 'India / International',
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
    description: 'Interactive sessions that help individuals and groups build emotional awareness, resilience, and practical coping tools.',
    offerings: ['Anxiety and stress management', 'Emotional regulation tools', 'Mindfulness and grounding practices', 'Self-care and resilience workshops'],
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
    description: 'Thoughtful wellbeing programs for teams and organizations focused on resilience, balance, and healthier work culture.',
    offerings: ['Employee wellbeing sessions', 'Stress and burnout support', 'Work-life balance guidance', 'Team-focused wellness workshops'],
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
    quote: 'The space felt safe and grounding. I felt understood from the very first session.',
    name: 'A. Sharma'
  },
  {
    quote: 'The guidance was practical and thoughtful. It helped me feel more steady and clear.',
    name: 'R. Kapoor'
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7fcfb] via-[#f3fbfa] to-[#edf7f5] text-[#1f3a3d]">
      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0a7272] shadow-[0_20px_60px_rgba(10,114,114,0.18)]">
          <div className="relative px-6 py-12 sm:px-10 lg:px-14 lg:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.15),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_40%)]" />
            <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
                  Therapy and programs for healing, growth and balance
                </span>
                <h1 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
                  Support that meets you where you are.
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-teal-50">
                  We offer therapy and structured programs designed to help individuals, children, adolescents, and organizations build emotional strength and meaningful wellbeing.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link to="/contact" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-teal-50">
                    Book a consultation
                  </Link>
                  <a href="#therapy" className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                    Explore services
                  </a>
                </div>
              </div>

              <div className="rounded-[1.5rem] border border-white/20 bg-white/10 p-6 backdrop-blur">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/15 p-4">
                    <p className="text-sm font-semibold">Therapy</p>
                    <p className="mt-2 text-sm text-teal-50">Individual support and child-adolescent care.</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4">
                    <p className="text-sm font-semibold">Programs</p>
                    <p className="mt-2 text-sm text-teal-50">Workshops and corporate wellness offerings.</p>
                  </div>
                  <div className="rounded-2xl bg-white/15 p-4 sm:col-span-2">
                    <p className="text-sm font-semibold">Available formats</p>
                    <p className="mt-2 text-sm text-teal-50">Online across India and internationally, with in-person support in Faridabad.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Link to="/contact" className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(10,114,114,0.25)] transition hover:scale-105 hover:bg-[#0d5c5e]">
        <MessageCircle size={18} />
        Book consultation
      </Link>

      <section id="therapy" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">Therapy</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50] sm:text-4xl">
              Support for individuals and young people.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4c6162]">
              Our therapy services are designed to help you understand your concerns, build clarity, and move forward with more steadiness and self-awareness.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {therapyOptions.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                    <HeartHandshake size={20} />
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0d4f50]">{item.title}</h3>
                </div>
                <p className="mt-5 text-base leading-7 text-[#4c6162]">{item.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a7272]">Common concerns</h4>
                  <ul className="mt-3 space-y-2 text-sm text-[#4c6162]">
                    {item.concerns.map((concern) => (
                      <li key={concern} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0a7272]" />
                        <span>{concern}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[#d7ecec] bg-[#f7fcfb] p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a7272]">Session details</h4>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {item.sessionCards.map((card) => (
                      <div key={card.title} className="rounded-2xl border border-[#d7ecec] bg-white p-4">
                        <p className="text-sm font-semibold text-[#0d4f50]">{card.title}</p>
                        <p className="mt-2 text-lg font-semibold text-[#0a7272]">{card.price}</p>
                        <p className="mt-2 text-sm leading-6 text-[#4c6162]">{card.description}</p>
                        <Link to={card.buttonTo} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0a7272] transition hover:text-[#0d5c5e]">
                          {card.buttonLabel}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={item.buttonTo} className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d5c5e]">
                  {item.buttonLabel}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">Programs</p>
            <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50] sm:text-4xl">
              Workshops and wellness programs built for growth.
            </h2>
            <p className="mt-4 text-lg leading-8 text-[#4c6162]">
              We also offer structured programs that bring insight, tools, and calm into group settings and workplace spaces.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {programOptions.map((item) => (
              <div key={item.title} className="rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                    {item.title === 'Workshops' ? <Sparkles size={20} /> : <Building2 size={20} />}
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0d4f50]">{item.title}</h3>
                </div>
                <p className="mt-5 text-base leading-7 text-[#4c6162]">{item.description}</p>

                <div className="mt-6">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a7272]">What we offer</h4>
                  <ul className="mt-3 space-y-2 text-sm text-[#4c6162]">
                    {item.offerings.map((offering) => (
                      <li key={offering} className="flex items-start gap-2">
                        <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[#0a7272]" />
                        <span>{offering}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 rounded-[1.5rem] border border-[#d7ecec] bg-[#f7fcfb] p-4">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#0a7272]">Session details</h4>
                  <div className="mt-4 grid gap-3 md:grid-cols-3">
                    {item.sessionCards.map((card) => (
                      <div key={card.title} className="rounded-2xl border border-[#d7ecec] bg-white p-4">
                        <p className="text-sm font-semibold text-[#0d4f50]">{card.title}</p>
                        <p className="mt-2 text-lg font-semibold text-[#0a7272]">{card.price}</p>
                        <p className="mt-2 text-sm leading-6 text-[#4c6162]">{card.description}</p>
                        <Link to={card.buttonTo} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0a7272] transition hover:text-[#0d5c5e]">
                          {card.buttonLabel}
                          <ArrowRight size={14} />
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                <Link to={item.buttonTo} className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#0a7272] px-5 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#eaf6f6]">
                  {item.buttonLabel}
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#eaf6f6] p-3 text-[#0a7272]">
                <ShieldCheck size={20} />
              </div>
              <h2 className="text-3xl font-semibold text-[#0d4f50]">Why trust us</h2>
            </div>
            <div className="mt-6 space-y-4">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-[#f7fcfb] p-4 text-sm text-[#4c6162]">
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-[#0f5f61] p-8 text-white shadow-sm">
            <h2 className="text-3xl font-semibold">Testimonials</h2>
            <p className="mt-3 text-sm leading-7 text-[#dce9e8]">
              A few words from people who have found support through our work.
            </p>
            <div className="mt-8 space-y-4">
              {testimonials.map((item) => (
                <div key={item.name} className="rounded-2xl border border-white/10 bg-white/10 p-5">
                  <p className="text-base leading-7 text-[#f4f8f8]">“{item.quote}”</p>
                  <p className="mt-3 text-sm font-semibold text-[#dce9e8]">{item.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#d7ecec] bg-white p-8 shadow-sm lg:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#0a7272]">Location</p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0d4f50]">Find us in Faridabad</h2>
              <p className="mt-4 text-lg leading-8 text-[#4c6162]">
                We welcome in-person appointments and also provide online support for clients across India and internationally.
              </p>
            </div>

            <div className="rounded-[2rem] bg-[#eaf6f6] p-6">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-[#0a7272] p-3 text-white">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="font-semibold text-[#0d4f50]">Faridabad, Haryana</p>
                  <p className="mt-2 text-sm text-[#4c6162]">Reach out to schedule an appointment or ask about availability.</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link to="/contact" className="rounded-full bg-[#0a7272] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0d5c5e]">
                  Contact us
                </Link>
                <a href="https://maps.google.com/?q=Faridabad" target="_blank" rel="noreferrer" className="rounded-full border border-[#0a7272] px-5 py-3 text-sm font-semibold text-[#0a7272] transition hover:bg-[#f7fcfb]">
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