import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    rating: 5,
    comment:
      "As one of her early clients, I can confidently say she truly embodies the qualities she brings to her profession. She has consistently offered me an empathetic ear, helping me navigate my challenges one step at a time at my own pace. Her patience and expertise create a space that feels both safe and constructive.",
    initials: "RR",
    clientName: "R.R.",
    role: "Verified Client",
    serviceUsed: "Individual Therapy",
  },
  {
    id: 2,
    rating: 5,
    comment:
      "Working with Amanpreet has been truly transformative. She provided a grounded, compassionate space for me when I was dealing with severe intrusive suicidal thoughts, giving me actionable coping tools that actually worked. Her approach is versatile, thoughtful, and deeply supportive.",
    initials: "LA",
    clientName: "L.A.",
    role: "Verified Client",
    serviceUsed: "Crisis Support & Coping",
  },
  {
    id: 3,
    rating: 4,
    comment:
      "Super organized and always prepared, which makes every session feel smooth. Very warm, supportive, and easy to talk to.",
    initials: "JD",
    clientName: "J.D.",
    role: "Verified Client",
    serviceUsed: "Personal Growth",
  },
  {
    id: 4,
    rating: 5,
    comment:
      "I had some challenges with stress and communication, and therapy helped me work through them with clarity. She provided so much validation and helped me realise healthier ways to navigate my relationships.",
    initials: "PS",
    clientName: "P. Singh",
    role: "Verified Client",
    serviceUsed: "Stress & Relationships",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 py-20 border-t border-slate-200/60">
      {/* Soft Ambient Glow Background */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[#0a7272]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="mx-auto max-w-2xl text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0a7272]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#0a7272] mb-4">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Real Transformations</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            What clients say about <span className="text-[#0a7272]">Psychobeings</span>
          </h2>

          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            Read authentic experiences from individuals who took the first step toward personal growth and emotional healing.
          </p>

          {/* Social Proof Badge */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-white px-4 py-2 shadow-xs border border-slate-200/80">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-xs font-semibold text-slate-800">5.0 Google Rating</span>
          </div>
        </div>

        {/* Dynamic Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="group relative flex flex-col justify-between rounded-3xl bg-white p-7 shadow-xs border border-slate-200/80 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-[#0a7272]/5 hover:border-[#0a7272]/30"
            >
              {/* Decorative Quote Mark */}
              <Quote className="absolute right-6 top-6 h-10 w-10 text-slate-100 transition-colors group-hover:text-[#0a7272]/10 pointer-events-none" />

              <div>
                {/* Categorized Service Tag */}
                <span className="inline-block rounded-lg bg-[#0a7272]/10 px-3 py-1 text-[11px] font-semibold text-[#0a7272] mb-4">
                  {item.serviceUsed}
                </span>

                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Quote */}
                <p className="text-xs sm:text-sm font-normal leading-relaxed text-slate-600 mb-6">
                  “{item.comment}”
                </p>
              </div>

              {/* Author Details with Initials Avatar */}
              <div className="flex items-center gap-3 pt-5 border-t border-slate-100 mt-auto">
                <div className="h-10 w-10 rounded-full bg-[#0a7272]/10 text-[#0a7272] font-bold text-xs flex items-center justify-center ring-2 ring-slate-100 group-hover:ring-[#0a7272]/20 transition-all shrink-0">
                  {item.initials}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 leading-snug">
                    {item.clientName}
                  </h3>
                  <span className="text-xs font-medium text-slate-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}