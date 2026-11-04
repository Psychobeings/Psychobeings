import React, { useState } from 'react';
import { ArrowRight, BookOpen, HeartHandshake, ShieldCheck, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Psychobeings.png';

const SLIDES = [
  {
    icon: Sprout,
    title: 'Grow a little at a time',
    body: 'Make gentle mood check-ins, notice your patterns, and keep a journal that is yours.'
  },
  {
    icon: HeartHandshake,
    title: 'A supportive space to reflect',
    body: 'Psycho Buddy can offer general wellbeing prompts. It is AI, not a therapist, and it cannot diagnose or prescribe.'
  },
  {
    icon: ShieldCheck,
    title: 'Move at your own pace',
    body: 'Explore simple practices, keep track of check-ins, and find professional support when you want it.'
  }
];

export default function ClientLanding() {
  const [slideIndex, setSlideIndex] = useState(0);
  const slide = SLIDES[slideIndex];
  const SlideIcon = slide.icon;
  const isLastSlide = slideIndex === SLIDES.length - 1;

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-[#f3faf9] px-4 py-8 text-[#0F2D3A] sm:px-8">
      <div className="pointer-events-none absolute -left-36 -top-40 h-[480px] w-[480px] rounded-full bg-[#b8ded9]/35 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-48 -right-32 h-[520px] w-[520px] rounded-full bg-[#d6eee7]/60 blur-3xl" />
      <div className="relative mx-auto w-full max-w-6xl">
        <header className="mb-12 flex items-center justify-between">
          <Link to="/" aria-label="Psychobeings home" className="rounded-xl bg-white px-3 py-2">
            <img src={logo} alt="Psychobeings" className="h-9 w-36 object-contain" />
          </Link>
          <Link to="/login" className="rounded-full px-4 py-2 text-sm font-semibold text-[#007F80] hover:bg-white">
            Log in
          </Link>
        </header>

        <div className="grid items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <section aria-live="polite">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-[#007F80]">A space for you</p>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6F4F3] text-[#007F80]">
              <SlideIcon size={28} aria-hidden="true" />
            </div>
            <h1 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              {slide.title}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">{slide.body}</p>
            <div className="mt-7 flex items-center gap-2" aria-label={`Introduction slide ${slideIndex + 1} of ${SLIDES.length}`}>
              {SLIDES.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Show introduction ${index + 1}`}
                  aria-current={index === slideIndex ? 'step' : undefined}
                  onClick={() => setSlideIndex(index)}
                  className={`h-2 rounded-full transition-all ${index === slideIndex ? 'w-8 bg-[#007F80]' : 'w-2 bg-[#007F80]/25'}`}
                />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {isLastSlide ? (
                <Link to="/login?mode=signup" className="inline-flex h-12 items-center gap-2 rounded-full bg-[#007F80] px-7 text-sm font-semibold text-white transition hover:bg-[#00696a]">
                  Begin your journey <ArrowRight size={17} aria-hidden="true" />
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={() => setSlideIndex((index) => index + 1)}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-[#007F80] px-7 text-sm font-semibold text-white transition hover:bg-[#00696a]"
                >
                  Next <ArrowRight size={17} aria-hidden="true" />
                </button>
              )}
              <Link to="/booking" className="inline-flex h-12 items-center gap-2 rounded-full border border-[#c8dfdc] bg-white/70 px-6 text-sm font-semibold text-[#0F2D3A] hover:bg-white">
                <BookOpen size={16} aria-hidden="true" /> Professional support
              </Link>
            </div>
            <p className="mt-8 max-w-xl text-xs leading-5 text-slate-500">
              This space offers general wellbeing support and is not a substitute for professional care or emergency help.
            </p>
          </section>

          <aside className="relative hidden min-h-[420px] overflow-hidden rounded-[2rem] border border-white/80 bg-gradient-to-br from-[#dff2ed] via-white to-[#e8f4ed] p-8 shadow-[0_24px_70px_rgba(15,45,58,0.10)] md:flex md:flex-col md:justify-between">
            <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-[#007F80]/10" />
            <div className="absolute -bottom-16 -left-16 h-64 w-64 rounded-full border border-[#007F80]/10" />
            <div className="relative flex items-center justify-between">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#007F80] shadow-sm">
                <Sprout size={24} aria-hidden="true" />
              </span>
              <span className="rounded-full bg-white/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-[#007F80]">Your private space</span>
            </div>
            <div className="relative mx-auto flex h-56 w-56 items-center justify-center rounded-full bg-white/65">
              <div className="flex h-36 w-36 items-center justify-center rounded-full bg-[#007F80] text-white shadow-xl shadow-[#007F80]/20">
                <Sprout size={68} strokeWidth={1.3} aria-hidden="true" />
              </div>
              <span className="absolute right-4 top-8 h-4 w-4 rounded-full bg-[#92cdb5]" />
              <span className="absolute bottom-8 left-5 h-3 w-3 rounded-full bg-[#e6c77a]" />
            </div>
            <p className="relative max-w-sm text-sm leading-6 text-slate-600">
              Small steps, kind reflection, and support whenever you are ready.
            </p>
          </aside>
        </div>
      </div>
    </main>
  );
}
