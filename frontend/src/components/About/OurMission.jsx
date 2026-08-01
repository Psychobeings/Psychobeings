import React from 'react';
import { Heart, Users, Shield, Target, Award, BookOpen, Sparkles } from 'lucide-react';

const missionPillars = [
  {
    icon: <Heart className="h-6 w-6" />,
    title: 'Safe Space',
    desc: 'Creating judgment-free environments',
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: 'Collaborative',
    desc: 'Working together on your healing',
  },
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: 'Educational',
    desc: 'Empowering through mental literacy',
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: 'Resilience',
    desc: 'Building strength to tackle challenges',
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: 'Evidence-Based',
    desc: 'Grounded in proven clinical approaches',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Goal-Oriented',
    desc: 'Focusing on actionable growth',
  },
];

export default function OurMission() {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      {/* Ambient Radial Background Accents */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-[#097f7f]/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        
        {/* Header Badge & Title */}
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#097f7f]/20 bg-[#097f7f]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#097f7f]">
            <Sparkles className="h-3.5 w-3.5" />
            Core Purpose
          </span>
          
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-[#0d4f50] sm:text-4xl lg:text-5xl">
            Our Mission
          </h2>
        </div>

        {/* Central Hero Mission Statements */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch mb-16">
          
          {/* Primary Statement Card */}
          <div className="lg:col-span-7 flex flex-col justify-center rounded-3xl border border-[#d7ecec] bg-white p-8 sm:p-10 shadow-md">
            <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed text-slate-700">
              At <span className="font-bold text-[#097f7f]">Psychobeings</span>, our mission is to facilitate{' '}
              <span className="font-semibold text-slate-900">mental well-being, overall growth, and personal development</span>{' '}
              by creating a <span className="font-semibold text-[#097f7f]">safe, supportive, and collaborative space</span>{' '}
              wherein each and every individual feels <span className="font-semibold text-slate-900">heard, respected, and valued</span>.
            </p>
          </div>

          {/* Callout Commitment Banner */}
          <div className="lg:col-span-5 flex flex-col justify-center rounded-3xl bg-gradient-to-br from-[#097f7f] via-[#0a8f8f] to-[#0b6b6b] p-8 sm:p-10 text-white shadow-xl">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-200">
                Our Commitment
              </span>
              <p className="mt-3 text-lg sm:text-xl font-medium leading-relaxed">
                We empower individuals to overcome challenges, build resilience, and lead fulfilling lives through{' '}
                <span className="font-bold underline decoration-teal-300 underline-offset-4">
                  evidence-based guidance, education, and counseling
                </span>.
              </p>
            </div>
          </div>
        </div>

        {/* 6 Core Mission Pillars Grid */}
        <div className="mt-8">
          <h3 className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 mb-8">
            Pillars of Our Care Approach
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {missionPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-5 text-center shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#097f7f]/30 hover:shadow-lg"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#097f7f]/10 text-[#097f7f] transition-colors duration-300 group-hover:bg-[#097f7f] group-hover:text-white">
                  {pillar.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 group-hover:text-[#097f7f] transition-colors">
                  {pillar.title}
                </h4>
                <p className="mt-1 text-xs text-slate-500 leading-normal">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}