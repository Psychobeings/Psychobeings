import React from 'react';
import { ArrowRight, CalendarCheck2, ShieldCheck, Sparkles } from 'lucide-react';
import heroImg from '../../assets/coupletherapy1.svg';

const HeroHome = () => {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(28,124,131,0.15),_transparent_35%),linear-gradient(180deg,#f6fbfb_0%,#eef8f7_45%,#f8fbfb_100%)] px-6 py-16 text-[#1f3a3d] sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1c7c83]/20 bg-white/80 px-3.5 py-1.5 text-xs font-semibold tracking-[0.12em] text-[#1c7c83] uppercase shadow-sm backdrop-blur-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1c7c83]" />
            Calm. Clear. Supported.
          </div>

          <h1 className="max-w-2xl text-4xl font-bold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Feel heard. <span className="text-[#1c7c83]">Feel supported.</span>
            <span className="mt-2 block text-slate-700">Start your healing journey today.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            At Psychobeings, we help individuals, couples, and families manage anxiety,
            burnout, relationship stress, and life transitions with compassionate,
            evidence-based therapy in a space that feels safe, private, and personal.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/booking"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1c7c83] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_18px_35px_rgba(28,124,131,0.24)] transition hover:bg-[#135b60]"
            >
              Book a Consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#1c7c83]/30 hover:text-[#1c7c83]"
            >
              Explore Services
            </a>
          </div>

          <div className="mt-8 grid max-w-lg grid-cols-3 gap-4 border-t border-[#1c7c83]/15 pt-5">
            <div>
              <p className="text-2xl font-bold text-[#1c7c83]">500+</p>
              <p className="text-xs text-slate-600">Clients supported</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1c7c83]">4.9/5</p>
              <p className="text-xs text-slate-600">Average rating</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#1c7c83]">100%</p>
              <p className="text-xs text-slate-600">Confidential care</p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="absolute -left-10 top-8 h-56 w-56 rounded-full bg-[#1c7c83]/10 blur-3xl" />
          <div className="absolute -right-6 bottom-4 h-56 w-56 rounded-full bg-[#9ad6d3]/20 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_55px_rgba(15,23,42,0.12)]">
            <img
              src={heroImg}
              alt="Therapy and wellness support"
              className="h-[430px] w-full rounded-[1.4rem] object-cover sm:h-[500px]"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/60 bg-white/85 p-4 shadow-lg backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-[#dff3f1] p-2 text-[#1c7c83]">
                  <CalendarCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Same-week support available</p>
                  <p className="text-xs text-slate-600">Secure online & in-person sessions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-16 grid max-w-7xl gap-5 border-t border-[#1c7c83]/10 pt-8 md:grid-cols-3">
        {[
          { icon: ShieldCheck, title: 'Confidential care', text: 'Private, respectful support throughout your journey.' },
          { icon: Sparkles, title: 'Evidence-based therapy', text: 'Compassionate care grounded in proven therapeutic methods.' },
          { icon: CalendarCheck2, title: 'Flexible sessions', text: 'Book online or in person with easy scheduling options.' },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white/70 p-4 shadow-sm">
            <div className="rounded-xl bg-[#edf7f7] p-2 text-[#1c7c83]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HeroHome;