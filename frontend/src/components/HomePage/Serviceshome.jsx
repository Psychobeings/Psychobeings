import React from 'react';
import { ArrowRight, Clock3, Sparkles } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      title: 'Individual Therapy for Adults',
      badge: 'Best for anxiety & burnout',
      outcome: 'Feel calmer, clearer, and more in control',
      description:
        'Personalized support for anxiety, stress, low mood, self-esteem, burnout, and life transitions with a structured, healing-focused approach.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      link: '/services#adult-therapy',
    },
    {
      title: 'Child & Adolescent Therapy',
      badge: 'Built for emotional growth',
      outcome: 'Improve confidence, regulation, and school wellbeing',
      description:
        'Compassionate care for emotional regulation, academic stress, behavioral challenges, and identity-building in children and teens.',
      image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=600',
      link: '/services#child-adolescent',
    },
    {
      title: 'Corporate Wellness Programs',
      badge: 'For teams & leaders',
      outcome: 'Reduce burnout and build healthier work culture',
      description:
        'Tailored workplace wellness interventions designed to help employees manage stress, restore balance, and build emotional resilience.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600',
      link: '/services#corporate-wellness',
    },
    {
      title: 'Workshops & Psychoeducation',
      badge: 'Practical tools that work',
      outcome: 'Learn coping strategies you can use immediately',
      description:
        'Interactive group sessions on stress management, mindfulness, emotional literacy, and sustainable mental wellbeing for real-life change.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=600',
      link: '/services#workshops',
    },
  ];

  return (
    <section className="bg-[#F2F7F7] px-6 py-16 text-[#1F3A3D] sm:px-8 sm:py-20 lg:px-12">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="mx-auto max-w-3xl space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1C7C83]">Services</p>
          <h2 className="text-3xl font-bold tracking-tight text-[#1F3A3D] sm:text-4xl lg:text-5xl">
            Therapy that helps you <span className="font-serif italic text-[#1C7C83]">feel better, faster.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base">
            Whether you need immediate relief, healthier relationships, or long-term resilience, our tailored programs are designed to help you move forward with clarity and confidence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group flex min-h-[470px] flex-col overflow-hidden rounded-[2rem] border border-[#1C7C83]/15 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1C7C83]/30 hover:shadow-xl"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-900/25 to-transparent p-4">
                  <span className="inline-flex rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#1C7C83]">
                    {service.badge}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-[#1C7C83]">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.16em]">Outcome</span>
                </div>

                <h3 className="text-xl font-bold leading-snug text-[#1F3A3D]">{service.title}</h3>

                <p className="mt-3 text-sm font-medium text-[#135B60]">{service.outcome}</p>

                <p className="mt-3 text-sm leading-relaxed text-gray-600">{service.description}</p>

                <div className="mt-5 flex items-center gap-2 rounded-xl border border-[#E6F0F0] bg-[#F5FBFB] px-3 py-2 text-xs text-slate-600">
                  <Clock3 className="h-4 w-4 text-[#1C7C83]" />
                  Typical support path: 1:1 sessions designed around your pace
                </div>

                <div className="mt-auto pt-6">
                  <a
                    href={service.link}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#1C7C83] transition hover:text-[#135B60]"
                  >
                    Learn more
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}