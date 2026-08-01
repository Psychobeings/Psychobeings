import React from 'react';
import { Eye, Compass, HeartHandshake, Sparkles } from 'lucide-react';
import vision from '../../assets/vission.png'; // Adjust the path as necessary

const visionPillars = [
  {
    icon: <HeartHandshake className="h-5 w-5 text-teal-300" />,
    title: "Empathy Over Stigma",
    desc: "Replacing judgment with acceptance and full community support."
  },
  {
    icon: <Compass className="h-5 w-5 text-teal-300" />,
    title: "Self-Awareness & Growth",
    desc: "Inspiring individuals to understand and prioritize their psychological well-being."
  },
  {
    icon: <Sparkles className="h-5 w-5 text-teal-300" />,
    title: "Unlocking Potential",
    desc: "Equipping minds with practical tools to maximize personal growth."
  }
];

export default function OurVision() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#064e4e] via-[#097f7f] to-[#0a8f8f] py-20 sm:py-28 px-4 sm:px-6 lg:px-8 text-white">
      {/* Background Ambient Glow Effects */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-teal-300/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* LEFT: Text Content & Highlights */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag Badge */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-200/30 bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-100 backdrop-blur-md">
              <Eye className="h-3.5 w-3.5 text-teal-300" />
              Future Outlook
            </span>

            {/* Heading */}
            <h2 className="font-serif text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Our Vision
            </h2>

            {/* Main Paragraph */}
            <p className="text-base sm:text-lg text-teal-50/90 leading-relaxed font-light">
              We envision a compassionate society where mental health is prioritized as essential to overall human potential. By dismantling stigma and ending exclusion, we create spaces where everyone suffering from mental health challenges is embraced, understood, and empowered.
            </p>

            {/* Structured Vision Pillars */}
            <div className="pt-4 grid sm:grid-cols-3 gap-4 border-t border-teal-500/30">
              {visionPillars.map((pillar, idx) => (
                <div 
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-md transition-all duration-300 hover:bg-white/15"
                >
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-teal-400/20">
                    {pillar.icon}
                  </div>
                  <h3 className="text-sm font-bold text-white mb-1">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-teal-100/80 leading-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* RIGHT: Illustration Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Soft Backdrop Aura */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-teal-300 to-white opacity-20 blur-xl" />

              {/* Styled Image Wrapper */}
              <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-3 backdrop-blur-md shadow-2xl">
                <img
                  src={vision}
                  alt="Vision and Mission Illustration"
                  className="w-full h-auto rounded-2xl object-cover transition-transform duration-500 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}