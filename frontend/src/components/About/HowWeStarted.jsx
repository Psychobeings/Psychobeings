import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Users, 
  Lightbulb, 
  Star, 
  Quote, 
  Sparkles, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';

export default function HowWeStarted() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const coreBeliefs = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Everyone Deserves to be Heard",
      desc: "Every voice matters, every story is valid, and every person deserves compassionate listening without judgment."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Growth Takes Time",
      desc: "Healing is non-linear. Real progress happens at individual paces, and we honor each person's unique timeline."
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: "Healing Isn't a Privilege",
      desc: "Mental health care must be approachable, accessible, and warm—never an exclusive luxury out of reach."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50/50 font-sans text-slate-800 selection:bg-[#097f7f] selection:text-white">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-slate-100/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200/60">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-[#097f7f]/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#097f7f]/20 bg-[#097f7f]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#097f7f]">
              <Sparkles className="h-3.5 w-3.5" />
              Origin Story
            </span>

            <h1 className="mt-4 font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0d4f50]">
              How We Started
            </h1>

            {/* Launch Year Badge */}
            <div className="my-6 flex items-center justify-center gap-3">
              <div className="h-px w-12 bg-[#097f7f]/30" />
              <span className="inline-flex items-center gap-2 rounded-full bg-[#097f7f] px-5 py-2 text-sm font-bold text-white shadow-md shadow-[#097f7f]/20">
                <Calendar className="h-4 w-4" />
                Est. 2023
              </span>
              <div className="h-px w-12 bg-[#097f7f]/30" />
            </div>

            <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-light">
              The journey of creating meaningful mental health support that feels safe, warm, and distinctly human.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Brand Visual */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Story Content */}
            <div className={`lg:col-span-7 space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <span className="text-xs font-bold uppercase tracking-widest text-[#097f7f]">
                The Catalyst
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Born From Reflection & Passion
              </h2>

              <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                Psychobeings was born during a deeply reflective phase while pursuing my{' '}
                <span className="font-semibold text-[#097f7f]">Postgraduation in Clinical Psychology at CMR University, Bangalore</span>.
              </p>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                After years of academic learning and hands-on clinical training, I recognized that mental health support often felt distant, overly rigid, or hard to access—especially for young individuals navigating silent daily battles.
              </p>

              <div className="relative overflow-hidden rounded-2xl border border-[#d7ecec] bg-gradient-to-br from-white to-teal-50/50 p-6 shadow-sm border-l-4 border-l-[#097f7f]">
                <p className="text-base sm:text-lg font-medium text-[#0d4f50] leading-relaxed">
                  "I didn't just want to practice psychology in a traditional setting. I wanted to construct a sanctuary—something that felt genuinely safe, warm, and human."
                </p>
              </div>
            </div>

            {/* Visual Feature Card */}
            <div className={`lg:col-span-5 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-xl">
                {/* Background Ambient Glow */}
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#097f7f]/10 blur-2xl" />

                <div className="relative z-10 text-center">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-[#097f7f]/10 text-[#097f7f]">
                    <Heart className="h-10 w-10 fill-[#097f7f]/20" />
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-slate-900 mb-2">Psychobeings</h3>
                  <p className="text-xs text-slate-500 mb-8">
                    An extension of our core belief in empathetic care
                  </p>

                  <div className="space-y-3 border-t border-slate-100 pt-6 text-left">
                    {[
                      'Born from purposeful reflection',
                      'Grounded in clinical excellence',
                      'Designed specifically for young minds'
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-center gap-3 text-sm font-medium text-slate-700">
                        <CheckCircle2 className="h-4 w-4 text-[#097f7f] shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Core Foundation Pillars */}
      <section className="bg-slate-100/60 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-y border-slate-200/60">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#097f7f]">Guiding Principles</span>
            <h2 className="mt-2 font-serif text-3xl sm:text-4xl font-bold text-slate-900">Our Foundation</h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              Three fundamental pillars that guide every interaction and therapy session we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, idx) => (
              <div 
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#097f7f]/40 hover:shadow-xl"
              >
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#097f7f]/10 text-[#097f7f] transition-colors duration-300 group-hover:bg-[#097f7f] group-hover:text-white">
                    {belief.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#097f7f] transition-colors mb-3">
                    {belief.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {belief.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Quote Banner */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#064e4e] via-[#097f7f] to-[#0a8f8f] p-8 sm:p-14 text-center text-white shadow-2xl">
            {/* Ambient Lighting */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-teal-300/10 blur-3xl" />

            <div className="relative z-10">
              <Quote className="mx-auto h-12 w-12 text-teal-300/40 mb-6" />

              <blockquote className="font-serif text-2xl sm:text-3xl lg:text-4xl font-light leading-relaxed text-teal-50">
                "Everyone deserves to feel heard. Growth takes time. And healing should never feel like a privilege."
              </blockquote>

              <div className="mt-8 mx-auto h-1 w-16 rounded-full bg-teal-300/60" />
            </div>
          </div>

          {/* Closing Promise */}
          <div className="text-center mt-12 sm:mt-16">
            <p className="font-serif text-lg sm:text-2xl text-slate-600 font-light italic max-w-3xl mx-auto leading-relaxed">
              This is more than our story—it is our continuous promise to create spaces where healing feels human, accessible, and rooted in genuine empathy.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}